from pathlib import Path
import hashlib,re
root=Path(__file__).resolve().parents[2]
def step(s,num,new):
 out,n=re.subn(rf'(?m)^{re.escape(num)} .*?(?=\n\n\d+\.\d+ |\n\n## |\Z)',lambda m:new.strip(),s,flags=re.S)
 assert n==1,(num,n)
 return out
p=root/'items/thm-nrqm-coulomb-kummer-recurrence-and-termination.md'
assert hashlib.sha256(p.read_bytes()).hexdigest()=='623ea8ad5388c25bd4127f350d9a1d2712bfe3b5c2f920d01bde7eddfccee133'
s=p.read_text()
s=s.replace('$u_2(r):=u_{\\mathrm{reg}}(r)\\int_1^r u_{\\mathrm{reg}}(s)^{-2}ds$', '$u_2$ defined near zero by $u_2(r):=u_{\\mathrm{reg}}(r)\\int_{r_*}^r u_{\\mathrm{reg}}(s)^{-2}ds$, where $0<r_*<\\delta$ and $u_{\\mathrm{reg}}$ has no zero in $(0,\\delta)$, and extended uniquely to $(0,\\infty)$ by the regular initial-value equation')
s=s.replace('$u_2(r):=u_{\\mathrm{reg}}(r)\\int_1^r u_{\\mathrm{reg}}(s)^{-2}ds$ for $r>0$', '$u_2$ first on a zero-free interval $(0,\\delta)$ by $u_2(r):=u_{\\mathrm{reg}}(r)\\int_{r_*}^r u_{\\mathrm{reg}}(s)^{-2}ds$, with $0<r_*<\\delta$')
s=step(s,'3.1',r'''3.1 [The regular solution] Set $u_{\mathrm{reg}}=r^{l+1}e^{-kr}v(2kr)$. The convergent series and substitution show that it is smooth on $(0,\infty)$, solves the radial equation and satisfies $u_{\mathrm{reg}}=r^{l+1}[1+O(r)]$ near zero. Hence it has no zero on some $(0,\delta)$. On that interval the second solution constructed in step 4.1 has $u_2/r^{l+1}$ unbounded at zero; therefore a solution with bounded $u/r^{l+1}$ must have zero second coefficient in its local two-dimensional representation. Regular initial-value uniqueness extends that identity over all $(0,\infty)$. This proves the asserted uniqueness up to scalar. [step 2.1, step 1.1, F2, given, algebra]''')
s=step(s,'4.1',r'''4.1 [A globally extended second solution] Choose $r_*\in(0,\delta)$ from step 3.1 and define $u_2=u_{\mathrm{reg}}\int_{r_*}^r u_{\mathrm{reg}}^{-2}$ only on the zero-free interval $(0,\delta)$. Differentiation gives $W(u_{\mathrm{reg}},u_2)=1$ and the same differential equation there. Near zero, $u_{\mathrm{reg}}/r^{l+1}\to1$, so direct comparison of the integral with $\int_{r_*}^r s^{-2l-2}ds$ gives $u_2(r)\sim-r^{-l}/(2l+1)$; consequently $|u_2|/r\to\infty$ and $|u_2|/r^{l+1}\to\infty$. Take its value and derivative at $r_*$ as initial data. On each compact interval in $(0,\infty)$, [F2] gives a unique solution; uniqueness identifies overlapping extensions, yielding one global $C^2$ solution, including across zeros of $u_{\mathrm{reg}}$. Its Wronskian with $u_{\mathrm{reg}}$ remains one. Thus every global solution is $c_1u_{\mathrm{reg}}+c_2u_2$ by initial-value uniqueness, and $c_2\ne0$ makes $|u|/r$ unbounded at zero. No integral through a node is asserted. [step 3.1, F2, algebra]''')
s=step(s,'4.2',r'''4.2 [Actual operator-domain membership] If $j\in\mathbb N_0$, the regular solution is a polynomial times $r^{l+1}e^{-kr}$. Near zero it has $u=O(r^{l+1})$, $u'=O(r^l)$ and $u/r=O(r^l)$, and at infinity these functions decay exponentially times a polynomial. Hence $u,u',u/r\in L^2$, its trace at zero is zero, and the endpoint realization gives $u\in V_l$. Integration by parts against compact tests gives $a_l(u,w)=-k^2\langle u,w\rangle$; boundedness of the form and density of those tests in $V_l$ extend this identity to every $w\in V_l$. By the definition of $A_l$, $u\in D(A_l)$ and $A_lu=-k^2u$. The exact block/domain identity [F1] transports this to $\psi=uY_{lm}/r\in D(C)=H^2(\mathbb R^3)$ with $C\psi=-k^2\psi$ for every $m$. This proves the complete H² and eigenfunction conclusion without claiming smoothness of $e^{-kr}$ at the spatial origin. [step 3.1, step 2.2, F1, F5, given, algebra]''')
s=s.replace('=\\frac{i-n}{(i+1)(i+n+a+1)}','=\\frac{i-n}{(i+1)(i+a+1)}')
p.write_text(s)
p=root/'items/thm-nrqm-coulomb-laguerre-bound-energy-exhaustion.md'
assert hashlib.sha256(p.read_bytes()).hexdigest()=='f56319c9d2634ff303ef29eca9329678f868d7ee2d4a4d4a919dc5c97007cec8'
s=p.read_text().replace('$u_2(r)=u_{\\mathrm{reg}}(r)\\int_1^ru_{\\mathrm{reg}}^{-2}$', '$u_2$ constructed by reduction of order on a zero-free interval near zero and extended globally by regular initial-value uniqueness')
s=s.replace('and it is nonzero exactly when $u_{\\mathrm{reg}}\\in L^2(0,\\infty)$.', 'so its dimension is at most one; the terminating case below supplies actual $D(A_l)$ membership, rather than inferring domain membership merely from square integrability.')
p.write_text(s)
print('Kummer and exact Laguerre consumer repaired')
