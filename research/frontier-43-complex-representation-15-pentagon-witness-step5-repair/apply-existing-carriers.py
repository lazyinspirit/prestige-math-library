from pathlib import Path
import re
p=Path('items/ex-period-matrix-and-jacobian-of-the-pentagon-curve.md')
t=p.read_text()
newdeps=[
'def-complex-projective-space-and-holomorphic-charts',
'thm-holomorphic-inverse-function-theorem',
'cor-principal-logarithm-is-holomorphic-on-the-slit-plane',
'thm-holomorphic-primitive-on-star-shaped-domain',
'thm-taylor-expansion-holomorphic-function',
'thm-argument-principle-as-image-winding-number',
'thm-argument-principle-null-homologous-cycle',
'cor-winding-number-is-the-normalized-argument-increment',
'thm-open-mapping-theorem-holomorphic-functions',
'thm-cellular-boundary-is-the-incidence-degree-matrix',
'thm-cellular-homology-computes-singular-homology']
for id in newdeps:
 if '  - '+id+'\n' not in t:t=t.replace('deps:\n','deps:\n  - '+id+'\n',1)
intro=r'''Assume the Axiom of Choice ([[def-axiom-of-choice]]). The named **pentagon curve** is an unconditional instance of the calculation below. Its smooth projective model is
$$X_0:=\{[Z_0:\cdots:Z_4]\in\mathbb P^4(\mathbb C):Z_1^2=Z_0Z_2,\ Z_1Z_2=Z_0Z_3,\ Z_2^2=Z_1Z_3,\ Z_4^2=Z_2Z_3-Z_0^2\}.$$
The affine chart is $[1:x:x^2:x^3:y]$ with $y^2=x^5-1$, and there is a unique point at infinity. This compact connected curve has genus two; $T_0(x,y)=(\zeta x,y)$, $\zeta=e^{2\pi i/5}$, has order five and $y$ is its degree-five quotient to the sphere, branched at $\pm i,\infty$. It is biholomorphic to two opposite regular pentagons with parallel sides glued by translation, with $T_0$ induced by their rotation. The oriented real-$y$ sheet
$$C_0:\quad x=(1+y^2)^{1/5},\qquad -\infty\le y\le+\infty,$$
has both endpoints at infinity; its classes $C_0,T_0C_0,T_0^2C_0,T_0^3C_0$ are an **integral** homology basis, and their five-orbit sum is zero. All these witness claims are proved locally below ([[def-complex-projective-space-and-holomorphic-charts]]).

More generally, let $X$ be a compact
'''
t=t.replace('Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact\n',intro,1)
t=t.replace('(for instance the smooth genus-two curve obtained by gluing two\nregular pentagons, equivalently a smooth projective model of $y^2=x^5-1$, for\nwhich $T$ is induced by the rotation of the pentagons). Then:',
'(in particular the constructed $X_0,T_0,C_0$ above). Then:',1)
t=t.replace('a class $C$ generating $H_1(X;\\mathbb Z)$ freely over $A$, and the period pairing $P$.',
'a class $C$ generating $H_1(X;\\mathbb Z)$ freely over $A$, and the period pairing $P$; also the explicit projective set $X_0$ above, whose witness properties are to be proved rather than assumed.',1)
pos=t.index('\n## Verification\n')
facts=r'''
[F9] Complex projective space is compact Hausdorff with the standard ratio charts. A holomorphic function with nonzero derivative has a local holomorphic inverse ([[def-complex-projective-space-and-holomorphic-charts]], [[thm-holomorphic-inverse-function-theorem]]).

[F10] The principal logarithm is holomorphic away from the nonpositive real ray; exponentiating its multiples gives the normalized powers used below. A holomorphic function on a disk has a holomorphic primitive, and its local Taylor series may be integrated to compute that primitive ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]], [[thm-holomorphic-primitive-on-star-shaped-domain]], [[thm-taylor-expansion-holomorphic-function]]).

[F11] For a holomorphic function nonzero on a circle, its image winding number equals the number of interior zeros counted with multiplicity. Winding number is the normalized increment of a continuous argument; a nonconstant holomorphic function is open ([[thm-argument-principle-as-image-winding-number]], [[thm-argument-principle-null-homologous-cycle]], [[cor-winding-number-is-the-normalized-argument-increment]], [[thm-open-mapping-theorem-holomorphic-functions]]).

[F12] Integral cellular boundaries are the incidence-degree sums and cellular homology computes singular homology. A compact connected Riemann surface has Euler characteristic $2-2g$, computed from any finite cell structure ([[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[thm-cellular-homology-computes-singular-homology]], [[def-genus-and-euler-characteristic-compact-riemann-surface]]).
'''
t=t[:pos]+facts+t[pos:]
heading=t.index('\n## Verification\n')
first=heading+re.search(r'^\d+\.\d+ ',t[heading:],re.M).start()
nextheading=re.search(r'^## ',t[first:],re.M)
end=first+nextheading.start() if nextheading else len(t)
old=t[first:end]
mapping={'1.1':'9.1','2.1':'10.1','3.1':'11.1','4.1':'12.1','5.1':'13.1','5.2':'13.2','6.1':'14.1'}
old=re.sub(r'\b(?:1\.1|2\.1|3\.1|4\.1|5\.1|5\.2|6\.1)\b',lambda m:mapping[m.group()],old)
old=old.replace('9.1 Put $V=', '9.1 The preceding construction proves the hypotheses for $X_0,T_0,C_0$. For any $X,T,C$ satisfying the general hypotheses, put $V=',1)
old=old.replace('[F1, F2, F3, F4, F5, algebra]', '[F1, F2, F3, F4, F5, step 8.1, algebra]',1)
old=old.replace('Claims 1-4 are steps 10.1, 12.1, 13.1 and 13.2,','The concrete witness is established in steps 1.1–8.1, and claims 1-4 are steps 10.1, 12.1, 13.1 and 13.2,',1)
old=old.replace('[F8, step 10.1, step 12.1, step 13.1, step 13.2]','[F8, step 8.1, step 10.1, step 12.1, step 13.1, step 13.2]',1)
witness=r'''1.1 The homogeneous equations define a closed subset of compact Hausdorff projective space by [F9]. On $Z_0\ne0$, their points are $[1:x:x^2:x^3:y]$ with $y^2=x^5-1$. This affine equation is smooth: either $x\ne0$, when the local inverse of $x\mapsto x^5$ expresses $x$ holomorphically in $y$, or $y\ne0$, when the local inverse of $y\mapsto y^2$ expresses $y$ in $x$; both cannot vanish on the equation. If $Z_0=0$, the equations force $Z_1=Z_2=Z_4=0$, giving just $p_\infty=[0:0:0:1:0]$. In the $Z_3=1$ chart put $u=Z_2,v=Z_4$; then $Z_1=u^2,Z_0=u^3$ and $v^2=u-u^6$. The inverse theorem for $u\mapsto u-u^6$ gives $u=v^2b(v)$, with $b(0)=1$ a holomorphic unit, so $v$ is a local coordinate. Thus $X_0$ is a smooth compact projective curve. The transformation $T_0(x,y)=(\zeta x,y)$ preserves the equations and has order five; it sends $(u,v)$ to $(\zeta^{-1}u,\zeta^2v)$. The function $y=v/u^3$ has a pole of order five at $p_\infty$. For $y\ne\pm i,\infty$, its five distinct $x$-roots form one $T_0$-orbit. At $(0,\pm i)$ the $x$ chart gives local degree five, and the infinity chart gives the same degree. Hence $y$ is the degree-five orbit quotient to the sphere with precisely those three branch values; its positive local monodromies relative to $T_0$ are $1,1,3$, since the local multipliers are $\zeta,\zeta,\zeta^2$. [F9, given, construct, algebra]

2.1 Set $\kappa=4^{1/5}e^{\pi i/5}$, so $\kappa^5=-4$, and on $|z|<1$ use the branch of $(1-z^5)^a$ normalized to one at zero. It exists by [F10] because $\operatorname{Re}(1-z^5)>0$. For $\varepsilon=\pm1$ put $x(z)=\kappa z(1-z^5)^{-2/5}$ and $y_\varepsilon(z)=\varepsilon i(1+z^5)/(1-z^5)$. Direct substitution gives $x^5=y_\varepsilon^2+1$. The Cayley coordinate $r=(y-\varepsilon i)/(y+\varepsilon i)$ lies in the unit disk in the corresponding upper or lower half-plane; its five roots $z$ give exactly the five points over $y$, and at $y=\varepsilon i$ the parameter $x=\kappa z+O(z^6)$ is regular. Thus each formula parametrizes the full half-plane preimage biholomorphically by a disk. At a boundary root $z^5=1$, $u=1/x$ and $v=y/x^3$ tend to zero with orders $2/5$ and $1/5$, so the parametrization extends continuously to $p_\infty$. Between successive boundary roots, $y_+=-\cot(5\theta/2)$ runs from $-\infty$ to $+\infty$, while $y_-$ runs in reverse. The five open arcs cover the five real-$y$ sheets $x=\zeta^j(1+y^2)^{1/5}$. [F9, F10, step 1.1, construct, algebra]

3.1 Let $H(0)=0$ and $H'(z)=(1-z^5)^{-2/5}$, using the primitive in [F10]. Rotation gives $H(\zeta z)=\zeta H(z)$. At a fifth root $a$ factor $1-z^5=(a-z)q(z)$, $q(a)=5a^4\ne0$. A compatible local branch and the Taylor expansion of the holomorphic unit $q^{-2/5}$ integrate to a constant plus a convergent series in $(a-z)^{n+3/5}$; thus $H$ extends continuously there with difference $O(|z-a|^{3/5})$. Away from these roots it extends holomorphically across each boundary arc. Consequently it is continuous on the closed disk. Its value $L=H(1)=\int_0^1(1-r^5)^{-2/5}dr$ is finite and positive. For $0<\theta<2\pi/5$, $\arg(1-e^{5i\theta})=5\theta/2-\pi/2$, so $\arg(dH(e^{i\theta})/d\theta)=7\pi/10$ and its magnitude is positive. This arc therefore traces the straight segment from $L$ to $\zeta L$ monotonically; rotation gives the other four segments. The boundary map is a bijection onto the positively oriented convex regular pentagon with vertices $L\zeta^k$. [F10, step 2.1, construct, algebra]

4.1 The boundary calculation alone is not a univalence assumption. If $w$ is off that polygon boundary, uniform convergence of $H(re^{i\theta})$ to $H(e^{i\theta})$ makes the quotient $(H(re^{i\theta})-w)/(H(e^{i\theta})-w)$ lie in a disk of radius less than one about $1$ for $r$ sufficiently close to one. Its continuous argument returns to its initial value, so the loops have the same argument increment. The polygon increment is $2\pi$ for an interior $w$, since every ray from $w$ meets its convex boundary once; it is zero for exterior $w$, since a separating line puts the polygon in a half-plane with one continuous argument. By [F11] applied to $H-w$ on $|z|=r$, there is exactly one preimage, counted with multiplicity, for every interior $w$ and none for exterior $w$. Letting $r$ tend to one proves this on the entire disk. An interior point cannot map to the polygon boundary, because openness [F11] would then give exterior image points. Since $H'\ne0$, [F9] gives a holomorphic inverse. Thus $H$ maps the open disk biholomorphically to the regular pentagon interior and its closed-disk extension is a homeomorphism to the closed pentagon. [F9, F11, step 3.1, algebra]

5.1 Put $\alpha=dx/y$. In the two disk parameters, differentiation gives $\alpha=\kappa/(\varepsilon i)(1-z^5)^{-2/5}dz$. The primitive coordinates are therefore $W_+=cH$ and $W_-=-cH$, $c=\kappa/i$, on two opposite regular pentagons. On real sheet $j$, oriented from $y=-\infty$ to $+\infty$, one has $\alpha=(2/5)\zeta^j(1+y^2)^{-4/5}dy$, also at $y=0$ by continuity. Both face primitives have this derivative along the same seam, so their seam identification is a translation, with reversed boundary orientation. If $V_k=cL\zeta^k$, the upper arc between $\zeta^k,\zeta^{k+1}$ lies on sheet $j=k+1$; the paired opposite side is glued by $W\mapsto W-V_k-V_{k+1}$, sending $V_k$ to $-V_{k+1}$ and $V_{k+1}$ to $-V_k$. All ten vertices map to $p_\infty$. The translation quotient maps continuously and bijectively to $X_0$ by the two disk parametrizations and these five seams, so compactness and Hausdorffness give a homeomorphism. Interior and seam coordinates are holomorphic primitives with nonzero derivative. At the common vertex the $v$ chart gives $\alpha=-v^2b(v)(2b(v)+vb'(v))dv$; a primitive is $v^3$ times a holomorphic unit. Its cube-root coordinate is $v$ times a holomorphic unit, and is locally invertible by [F9,F10]. This is exactly the holomorphic cone chart of the ten angles $3\pi/5$ totaling $6\pi$. Hence the identification is analytic, including the vertex, and $T_0$ rotates both pentagons by $\zeta$. [F9, F10, step 1.1, step 2.1, step 4.1, construct, algebra]

6.1 The two closed-disk maps give an actual finite cell structure: one vertex $p_\infty$, five oriented loop edges $e_j$ on the real-$y$ sheets, and two disk faces. Each upper boundary traverses every $e_j$ once positively, and the lower boundary traverses each once negatively by step 2.1. Thus [F12] gives $C_2=\mathbb Z^2,C_1=\mathbb Z^5,C_0=\mathbb Z$, $d_1=0$, and $d_2(a,b)=(a-b)(1,1,1,1,1)$. The singular-homology comparison yields $H_1(X_0;\mathbb Z)=\mathbb Z^5/\langle e_0+e_1+e_2+e_3+e_4\rangle$. The relation eliminates $e_4$ with coefficient one and imposes no relation among the first four, so they form an integral basis. With $C_0=[e_0]$, $T_0e_j=e_{j+1}$ gives the asserted four orbit basis and the five-orbit relation. Consequently $\mathbb Z[t]/(1+t+\cdots+t^4)\to H_1$, $p\mapsto p(T_0)C_0$, is an isomorphism, not merely a full-rank submodule. The two disk closures meet along the seams, proving connectedness; $\chi=1-5+2=-2$ and [F12] give genus two. [F12, step 2.1, step 5.1, algebra]

7.1 Both $\alpha=dx/y$ and $\beta=x\,dx/y$ are holomorphic: away from $y=0$ this is immediate; at $y=0$, where $x^5=1$, their local expressions are $2/(5x^4)dy$ and $2/(5x^3)dy$. At infinity, with $u=v^2b(v)$ from step 1.1, $\alpha=-u\,du/v=-v^2b(v)(2b(v)+vb'(v))dv$ and $\beta=-du/v=-(2b(v)+vb'(v))dv$; at $x=0,y=\pm i$ the $x$ chart is regular. Their ratio is the nonconstant function $x$, so they are independent, and the dimension supplier [F1] applied after step 6.1 makes them a basis of $\Omega(X_0)$. Direct pullback gives $T_0^*\alpha=\zeta\alpha$ and $T_0^*\beta=\zeta^2\beta$. [F1, F9, step 1.1, step 6.1, algebra]

8.1 Their continuous closed-path periods on $C_0=e_0$ are the strictly positive numbers $I_1=(2/5)\int_{-\infty}^{\infty}(1+y^2)^{-4/5}dy$ and $I_2=(2/5)\int_{-\infty}^{\infty}(1+y^2)^{-3/5}dy$. These converge because the tails are $O(|y|^{-8/5})$ and $O(|y|^{-6/5})$. The holomorphic infinity chart and local primitive endpoint differences in [F5] identify these improper limits with the full continuous-path integrals, so neither normalization is zero. With $\omega_1=\alpha/I_1,\omega_2=\beta/I_2$, the real-sheet formulas give $P(T_0^kC_0,\omega_i)=\zeta^{ki}$. Combined with the integral basis in step 6.1, this establishes the named witness for all hypotheses and its actual normalized period vectors. [F4, F5, step 5.1, step 6.1, step 7.1, algebra]

'''
t=t[:first]+witness+old+t[end:]
t=t.replace('verification:\n  precheck: pass','verification:\n  precheck: pending',1)
# Source corroboration, while all mathematical ingredients remain local.
source=r'''    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
      locator: "Ch. 8 §§4.1–4.4, printed pp. 231–245: singular-exponent boundary calculation, Schwarz–Christoffel formula and the distinction between mapping the boundary and proving conformality. The special regular-pentagon formula and its univalence are proved locally here."
'''
t=t.replace('verification:\n',source+'verification:\n',1)
if '## Source notes' in t:
 t=t[:t.index('## Source notes')]+r'''## Source notes

McMullen's printed p. 128/Theorem 15.3 states the classical double-pentagon example and its cyclic homology module without constructing its integral witness. The projective charts, two half-plane disks, special regular-pentagon primitive, integral cellular quotient and positive periods above supply that witness locally. Stein–Shakarchi, Ch. 8 §§4.1–4.4 (printed pp. 231–245), explains the singular-exponent boundary calculation and warns that a polygonal boundary image alone need not imply a conformal interior map; the argument-principle step here proves univalence for this specific convex regular pentagon. No general Schwarz–Christoffel or branched-cover classification theorem is used as an unproved prerequisite.
'''
p.write_text(t)
p=Path('items/ex-abel-image-in-its-jacobian.md');t=p.read_text()
t=t.replace('For the genus-two pentagon\ncurve,', 'For the explicitly constructed genus-two pentagon\ncurve $X_0$ of [[ex-period-matrix-and-jacobian-of-the-pentagon-curve]],',1)
t=t.replace('[F5] The genus-two pentagon curve has Jacobian', '[F5] The pentagon supplier constructs the smooth projective curve $y^2=x^5-1$, identifies it analytically with the translation double-pentagon, and proves the integral orbit basis and nonzero normalized periods. Its genus-two model therefore has Jacobian',1)
p.write_text(t)
p=Path('library/complex-analysis/periods-jacobians-and-abel-jacobi-theory-examples.md');t=p.read_text()
t=t.replace('The pentagon curve $y^2=x^5-1$ exhibits complex multiplication.', 'The pentagon curve $y^2=x^5-1$ exhibits complex multiplication. Its projective charts and explicit holomorphic primitives identify it with the translation double-pentagon. The two pentagon faces have one common vertex and five loop edges; their cellular boundaries give the integral relation $e_0+e_1+e_2+e_3+e_4=0$, so the first four rotation translates of $C=e_0$ are an integral homology basis.',1)
p.write_text(t)
print('Applied only2 existing examples and their B page; sharedmetadata untouched')
