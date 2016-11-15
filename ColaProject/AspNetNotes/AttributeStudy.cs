/*************************
 * 特性
 * 
 * 命名：约定特性都已Attribute结束
 * 
 * AttributeUsage 特性的特性
 * 
 * 
 * 
 * 
 * 
 * ****************************/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ColaProject.AspNetNotes
{

    [My("AttributeStudy", "1.0", other = "other")]
    public class AttributeStudy
    {
    }



    /// <summary>
    /// AttributeUsage 是对特性的一个约束，规定该特性的特性，例如该特性适用用什么（AttributeTargets），
    /// 允许多次使用（AllowMultiple）
    /// 
    /// 
    /// </summary>

    [System.AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
    public class MyAttribute : System.Attribute
    {
        public string targetName { get; set; }

        public string version;

        public string other;



        public MyAttribute(string _targetName, string _version)
        {
            targetName = _targetName;
            version = _version;

        }
        /*特性参数 定位参数，未命名参数，和命名参数
         * 定位参数必须是第一个出现，并且不能省略，其他参数可以省略，并可以调换位置
         * 
         */






    }
}
