---
id: ex-hyperbolic-disc-and-half-plane-geodesics
kind: example
title: "Hyperbolic distances and geodesics in disc and half-plane"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-poincare-metric-and-distance-on-the-disc
  - thm-poincare-distance-formula-and-disc-automorphism-invariance
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - thm-blaschke-factor-is-a-disc-automorphism
  - thm-upper-half-plane-automorphisms-are-real-mobius-maps
  - thm-inverse-hyperbolic-logarithm-formulas
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - thm-logarithm-derivative-and-integral
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§2.4 and 5, printed pp. 64-68 and 115-118, Theorems 5.1-5.6"
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 16 printed pp. 146-147 for hyperbolic geometry; Ch. 17 printed p. 157 for uniformization statement only"
---

## Example

Write $\mathbb D=\{|z|<1\}$ and $\mathbb H=\{\operatorname{Im}w>0\}$, and define
the **Cayley map** and its inverse by

$$C(w):=\frac{w-i}{w+i}\quad(w\in\mathbb C\setminus\{-i\}),\qquad C^{-1}(\zeta):=i\,\frac{1+\zeta}{1-\zeta}\quad(\zeta\in\mathbb C\setminus\{1\}).$$

Then the following four statements hold.

1. $C$ maps $\mathbb H$ biholomorphically onto $\mathbb D$. Pushing the
   Poincare metric $2|dz|/(1-|z|^2)$ of $\mathbb D$ forward along $C^{-1}$
   turns it into the metric $|dw|/\operatorname{Im}w$ on $\mathbb H$: writing
   $\ell_{\mathbb H}$ for the lengths computed with that metric and
   $d_{\mathbb H}$ for the associated infimum distance, one has
   $d_{\mathbb H}(p,q)=d_{\mathbb D}(C(p),C(q))$.
2. For $0\le r<1$ the radial segment from $0$ to $r$ attains
   $d_{\mathbb D}(0,r)=2\operatorname{artanh}r$, and for $y>0$ the vertical
   segment from $i$ to $iy$ attains $d_{\mathbb H}(i,iy)=|\log y|$.
3. The geodesic segment joining distinct $z,w\in\mathbb D$ is the subarc with endpoints $z,w$ inside
   $\mathbb D$ of a Euclidean circle or line that meets the unit circle at
   right angles; concretely it is the image of the radial segment from $0$ to
   $\varphi_z(w)$ under the disc automorphism $\varphi_z$.
4. Likewise the geodesic segment joining distinct $p,q\in\mathbb H$ is the
   subarc with endpoints $p,q$ inside $\mathbb H$ of a vertical line or of a Euclidean circle with
   centre on the real axis.

## Facts & Assumptions
**Given:** The unit disc $\mathbb D$, the upper half-plane $\mathbb H$, the Cayley map $C$ with its inverse, and the Poincare metric of $\mathbb D$.

[F1] On $\mathbb D$ the Poincare metric is $2|dz|/(1-|z|^2)$; the Poincare length of a piecewise $C^1$ curve $\gamma:[a,b]\to\mathbb D$ is $\ell_{\mathbb D}(\gamma)=\int_a^b 2|\gamma'(t)|/(1-|\gamma(t)|^2)\,dt$, and $d_{\mathbb D}(z,w)$ is the infimum of these lengths over piecewise $C^1$ curves from $z$ to $w$ ([[def-poincare-metric-and-distance-on-the-disc]]).

[F2] For $z,w\in\mathbb D$ one has $d_{\mathbb D}(z,w)=2\operatorname{artanh}|\varphi_z(w)|$, and every automorphism of $\mathbb D$ preserves $d_{\mathbb D}$ ([[thm-poincare-distance-formula-and-disc-automorphism-invariance]]).

[F3] The disc is $\mathbb D=\{z:|z|<1\}$, the upper half-plane is $\mathbb H=\{z:\operatorname{Im}z>0\}$, and the Blaschke factor is $\varphi_a(z)=(a-z)/(1-\overline a z)$ with denominator nonzero on $\mathbb D$; moreover $\varphi_a(0)=a$ and $\varphi_a(a)=0$ ([[def-unit-disc-upper-half-plane-and-blaschke-factor]]).

[F4] For every $a\in\mathbb D$ the Blaschke factor satisfies $\varphi_a(\mathbb D)=\mathbb D$ and $\varphi_a(\varphi_a(z))=z$ for $z\in\mathbb D$, and $\varphi_a$ is an automorphism of $\mathbb D$ ([[thm-blaschke-factor-is-a-disc-automorphism]]).

[F5] A map $f:\mathbb H\to\mathbb H$ is an automorphism of $\mathbb H$ if and only if $f(z)=(az+b)/(cz+d)$ with $a,b,c,d\in\mathbb R$ and $ad-bc>0$ ([[thm-upper-half-plane-automorphisms-are-real-mobius-maps]]).

[F6] For $|u|<1$ one has $\operatorname{artanh}u=\tfrac12\log\frac{1+u}{1-u}$ ([[thm-inverse-hyperbolic-logarithm-formulas]]).

[F7] The sum, product and quotient rules hold for complex derivatives, and the reciprocal and quotient formulas are $(1/g)'(a)=-g'(a)/g(a)^2$ and $(f/g)'(a)=\bigl(f'(a)g(a)-f(a)g'(a)\bigr)/g(a)^2$ wherever $g(a)\ne0$ ([[thm-algebra-of-complex-derivatives]]).

[F8] If $f:U\to V$ and $g:V\to\mathbb C$ are complex differentiable at $a$ and $f(a)$ respectively, then $(g\circ f)'(a)=g'(f(a))f'(a)$ ([[thm-chain-rule-for-complex-derivatives]]).

[F9] For $x>0$ the real logarithm is differentiable with $\log'(x)=1/x$, and $\log x=\int_1^x dt/t$ ([[thm-logarithm-derivative-and-integral]]).

**Proof technique:** direct computation: differentiate the Cayley map, transport lengths, and identify the minimizers through two one-dimensional monotonicity inequalities with their equality cases.

## Verification

1.1 For every $w\in\mathbb C$ one has the identity $|w+i|^2-|w-i|^2=4\operatorname{Im}w$; hence for $w\in\mathbb H$, $|C(w)|^2=|w-i|^2/|w+i|^2<1$, and for $|\zeta|<1$ the point $w:=C^{-1}(\zeta)$ satisfies $\operatorname{Im}w=\bigl(1-|\zeta|^2\bigr)/|1-\zeta|^2>0$. Direct substitution gives $C(C^{-1}(\zeta))=\zeta$ and $C^{-1}(C(w))=w$, so $C$ is a bijection of $\mathbb H$ onto $\mathbb D$. [F3, given, algebra]

1.2 The radial segment $\gamma(t)=t$, $0\le t\le r$, from $0$ to $r$ has, by [F6] and [F7], $\ell_{\mathbb D}(\gamma)=\int_0^r\frac{2\,dt}{1-t^2}=2\operatorname{artanh}r$, since $\frac{d}{dt}\,2\operatorname{artanh}t=\frac{2}{1-t^2}$ and $2\operatorname{artanh}0=0$. On the other hand [F3] gives $\varphi_0(r)=(0-r)/(1-0)=-r$, so [F2] gives $d_{\mathbb D}(0,r)=2\operatorname{artanh}|-r|=2\operatorname{artanh}r$. Hence the radial segment attains the distance. [F1, F2, F3, F6, F7, algebra]

1.3 Let $u\in\mathbb D\setminus\{0\}$ and let $\gamma:[a,b]\to\mathbb D$ be piecewise $C^1$ with $\gamma(a)=0$ and $\gamma(b)=u$; put $\rho:=|\gamma|$ and $f:=2\operatorname{artanh}\rho$. At every point where both derivatives exist one has $|\rho'|\le|\gamma'|$, and $f$ is absolutely continuous with $|f'|=2|\rho'|/(1-\rho^2)$, so $\ell_{\mathbb D}(\gamma)=\int_a^b 2|\gamma'|/(1-\rho^2)\,dt\ge\int_a^b 2|\rho'|/(1-\rho^2)\,dt\ge\bigl|\int_a^b f'\bigr|=|f(b)-f(a)|=2\operatorname{artanh}|u|$. By [F2] the last quantity is $d_{\mathbb D}(0,u)$, so every curve from $0$ to $u$ has length at least $2\operatorname{artanh}|u|$. [F1, F2, F6, F8, given, algebra]

1.4 The Blaschke factor satisfies $\varphi_a'(v)=-(1-|a|^2)/(1-\overline a v)^2$ and $1-|\varphi_a(v)|^2=(1-|a|^2)(1-|v|^2)/|1-\overline a v|^2$ for $v\in\mathbb D$; hence $2|\varphi_a'(v)|/(1-|\varphi_a(v)|^2)=2/(1-|v|^2)$, so $\ell_{\mathbb D}(\varphi_a\circ\gamma)=\ell_{\mathbb D}(\gamma)$ for every piecewise $C^1$ curve $\gamma$ in $\mathbb D$. [F3, F4, algebra]

1.5 Fix $a\in\mathbb D$. If $a=0$, put $S_0:=\mathbb R\cup\{\infty\}$; since $\varphi_0(t)=-t$, this is the extended image of the real line. If $a\ne0$, put $S_a:=\{\varphi_a(t):t\in\mathbb R,\ 1-\overline a t\ne0\}\cup\{1/\overline a\}$. Then $S_a$ is a Euclidean circle or line meeting the unit circle at right angles. Indeed, since $\varphi_a$ is an involution [F4], for $u\ne1/\overline a$ one has $u\in S_a$ if and only if $\varphi_a(u)\in\mathbb R$, and expanding $\varphi_a(u)=(a-u)/(1-\overline au)$ gives $2i\operatorname{Im}\varphi_a(u)=\bigl[(a-u)(1-a\overline u)-(\overline a-\overline u)(1-\overline au)\bigr]/|1-\overline au|^2=\bigl[(a-\overline a)(1+|u|^2)+(1-a^2)\overline u-(1-\overline a^2)u\bigr]/|1-\overline au|^2$, so $u\in S_a$ if and only if $(a-\overline a)(1+|u|^2)+(1-a^2)\overline u-(1-\overline a^2)u=0$. If $a\in\mathbb R$, this reads $(1-a^2)(\overline u-u)=0$, so $S_a=\widehat{\mathbb R}$ is the real line, which meets the unit circle at $\pm1$ at right angles. If $a\notin\mathbb R$, dividing by $a-\overline a=2i\operatorname{Im}a$ and writing $A:=(1-a^2)/(a-\overline a)$ turns the equation into $1+|u|^2+A\overline u+\overline A u=0$, that is $|u+A|^2=|A|^2-1$. Since $|A|^2-1=\bigl(|1-a^2|^2-|a-\overline a|^2\bigr)/|a-\overline a|^2=(1-|a|^2)^2/|a-\overline a|^2>0$, this is a circle with centre $-A$ and radius $\rho>0$; a point $u\ne1/\overline a$ lies on that circle exactly when $u\in S_a$, and $1/\overline a\in S_a$ is the limit $\lim_{|t|\to\infty}\varphi_a(t)$ of points of the circle, so $S_a$ is exactly this circle. Finally $|{-}A|^2-\rho^2=1$, and a circle with centre $c$ and radius $\rho$ that meets the unit circle meets it orthogonally precisely when $|c|^2-\rho^2=1$: at an intersection point $w$ the tangents are perpendicular exactly when the radius vectors $w$ and $w-c$ are perpendicular, that is $\operatorname{Re}\bigl(\overline w(w-c)\bigr)=0$, which with $|w|=1$ says $\operatorname{Re}(\overline wc)=1$, and substituting this into $|w-c|^2=\rho^2$, namely $1-2\operatorname{Re}(\overline wc)+|c|^2=\rho^2$, gives $|c|^2=\rho^2+1$. So $S_a$ meets the unit circle at right angles. [F3, F4, algebra]

1.6 Let $M(z)=(az+b)/(cz+d)$ have real $a,b,c,d$ with $ad-bc>0$. For $s\in\mathbb R$ one computes $M(is)=(b+ais)/(d+cis)=\bigl(bd+acs^2+i\,s(ad-bc)\bigr)/(c^2s^2+d^2)$. If $c=0$, then $\operatorname{Re}M(is)=b/d$ is constant and the image of the imaginary line is the vertical line $\operatorname{Re}w=b/d$. If $c\ne0$ and $d=0$, then $\operatorname{Re}M(is)=a/c$ is constant and the image is the vertical line $\operatorname{Re}w=a/c$. If $c\ne0$ and $d\ne0$, then multiplying out shows that every $M(is)$ satisfies $(X-p)^2+Y^2=\sigma^2$ with $X=\operatorname{Re}M(is)$, $Y=\operatorname{Im}M(is)$, centre $p:=\tfrac12\bigl(\tfrac ac+\tfrac bd\bigr)\in\mathbb R$ and radius $\sigma=|ad-bc|/(2|c||d|)>0$; the real points $a/c$ and $b/d$ of this circle are $p\pm\sigma$, so it is a Euclidean circle with centre on $\mathbb R$. In every case the image of the imaginary line meets $\mathbb R$ at right angles: vertical lines do so plainly, and a circle with centre on $\mathbb R$ has vertical tangents at its two real points. [F5, algebra]

2.1 For $w\in\mathbb H$ the quotient rule [F7] gives $C'(w)=2i/(w+i)^2\ne0$, and step 1.1 gives $1-|C(w)|^2=\bigl(|w+i|^2-|w-i|^2\bigr)/|w+i|^2=4\operatorname{Im}w/|w+i|^2$; therefore $2|C'(w)|/(1-|C(w)|^2)=\bigl(4/|w+i|^2\bigr)\cdot\bigl(|w+i|^2/(4\operatorname{Im}w)\bigr)=1/\operatorname{Im}w$. [F7, step 1.1, algebra]

2.2 In step 1.3 equality holds if and only if $\gamma$ is a monotone reparametrisation of the radial segment from $0$ to $u$. Indeed, equality in the second inequality forces $f$, hence $\rho$, to be nondecreasing; equality in the first forces $|\gamma'|=|\rho'|$ almost everywhere, which combined with $\rho'\ge0$ gives $\gamma'=\lambda\gamma$ with $\lambda\ge0$ real wherever $\gamma\ne0$, so the unit vector $\gamma/\rho$ is constant on each interval on which $\rho>0$. Since $\rho$ is nondecreasing from $\rho(a)=0$ to $\rho(b)=|u|>0$, the set $\{\rho>0\}$ is an interval $(t_0,b]$, and continuity of $\gamma/\rho$ there gives $\gamma(t)/\rho(t)=u/|u|$ for $t>t_0$. Thus $\gamma$ traces the segment $[0,u]$ with nondecreasing modulus, and conversely every such parametrisation realises equality. [F1, F4, step 1.3, algebra]

2.3 Let $z\in\mathbb D$ and let $e\in\mathbb C$ with $|e|=1$. For all $v\in\mathbb C$ with $1-\overline zev\ne0$ one has, multiplying numerator and denominator by $\overline e$, $\varphi_z(ev)=(z-ev)/(1-\overline zev)=e\,(z\overline e-v)/(1-\overline{z\overline e}\,v)=e\,\varphi_{z\overline e}(v)$. Hence the image of the line $\{te:t\in\mathbb R\}\cup\{\infty\}$ under $\varphi_z$ is $e\,S_{z\overline e}$, a rotation of the circle or line of step 1.5. Multiplication by $e$ preserves Euclidean circles and lines, fixes the unit circle, and carries a circle of centre $c$ and radius $\rho$ to the circle of centre $ec$ and radius $\rho$, so $e\,S_{z\overline e}$ is again a Euclidean circle or line meeting the unit circle at right angles. [F3, step 1.5, algebra]

3.1 Define $\ell_{\mathbb H}(\gamma):=\int_a^b|\gamma'(t)|/\operatorname{Im}\gamma(t)\,dt$ for piecewise $C^1$ curves $\gamma:[a,b]\to\mathbb H$, and $d_{\mathbb H}(p,q):=\inf\ell_{\mathbb H}(\gamma)$ over such curves from $p$ to $q$. By the chain rule and step 2.1, $\ell_{\mathbb D}(C\circ\gamma)=\ell_{\mathbb H}(\gamma)$ for every piecewise $C^1$ curve $\gamma$ in $\mathbb H$, and likewise $\ell_{\mathbb H}(C^{-1}\circ\sigma)=\ell_{\mathbb D}(\sigma)$ for every piecewise $C^1$ curve $\sigma$ in $\mathbb D$; since $C$ and $C^{-1}$ transport curves in both directions, taking infima gives $d_{\mathbb H}(p,q)=d_{\mathbb D}(C(p),C(q))$ for all $p,q\in\mathbb H$, and $C$ is a biholomorphism of $\mathbb H$ onto $\mathbb D$. [F1, F8, step 1.1, step 2.1]

3.2 Let $z,w\in\mathbb D$ with $z\ne w$, and put $\varphi:=\varphi_z$ and $u:=\varphi(w)\ne0$. By [F4], $\varphi$ is an automorphism of $\mathbb D$, $\varphi(z)=0$, and $\varphi^{-1}=\varphi$. A piecewise $C^1$ curve $\sigma$ from $z$ to $w$ has $\ell_{\mathbb D}(\sigma)=d_{\mathbb D}(z,w)$ if and only if $\varphi\circ\sigma$ has length $d_{\mathbb D}(0,u)$, because step 1.4 gives $\ell_{\mathbb D}(\varphi\circ\sigma)=\ell_{\mathbb D}(\sigma)$ and [F2] gives $d_{\mathbb D}(0,u)=d_{\mathbb D}(\varphi(z),\varphi(w))=d_{\mathbb D}(z,w)$. By steps 1.3 and 2.2 the length-minimising curves from $0$ to $u$ are exactly the monotone reparametrisations of the radial segment $[0,u]$. Consequently the length-minimising curves from $z$ to $w$ are exactly the images under $\varphi$ of those curves, that is, the images of the radial segment from $0$ to $u=\varphi_z(w)$. [F2, F4, step 1.3, step 1.4, step 2.2, algebra]

4.1 For $y>0$ one has $C(i)=0$ and $C(iy)=(iy-i)/(iy+i)=(y-1)/(y+1)$, a real number of modulus $|y-1|/(y+1)<1$. Steps 3.1 and 1.2 and [F6] therefore give $d_{\mathbb H}(i,iy)=d_{\mathbb D}\bigl(0,|y-1|/(y+1)\bigr)=2\operatorname{artanh}\bigl(|y-1|/(y+1)\bigr)=|\log y|$: for $y\ge1$ the logarithm formula gives $2\operatorname{artanh}\frac{y-1}{y+1}=\log\frac{(y+1)+(y-1)}{(y+1)-(y-1)}=\log y$, and for $0<y<1$ replacing $y$ by $1/y$ gives the same identity with $\log(1/y)=|\log y|$. The vertical segment $\gamma(t)=it$, $t$ running from $1$ to $y$, has $\ell_{\mathbb H}(\gamma)=\bigl|\int_1^y ds/s\bigr|=|\log y|$ by [F9], so it attains the distance. [F3, F6, F9, step 3.1, step 1.2, algebra]

4.2 Now let $z,w\in\mathbb D$ with $z\ne w$, put $u:=\varphi_z(w)\ne0$ and $e:=u/|u|$. The radial segment $[0,u]$ is contained in the line $\{te:t\in\mathbb R\}$, so by step 3.2 the length-minimising curves from $z$ to $w$ are the images under $\varphi_z$ of that segment, and these lie on $\varphi_z\bigl(\{te\}\cup\{\infty\}\bigr)$, which by step 2.3 is a Euclidean circle or line meeting the unit circle at right angles. [F3, step 3.2, step 2.3, algebra]

5.1 Let $y>0$ and let $\gamma:[a,b]\to\mathbb H$ be piecewise $C^1$ from $i$ to $iy$; put $\rho:=\operatorname{Im}\gamma>0$ and $g:=\log\rho$. Then $|\rho'|\le|\gamma'|$ wherever both derivatives exist, so $\ell_{\mathbb H}(\gamma)=\int_a^b|\gamma'|/\rho\,dt\ge\int_a^b|\rho'|/\rho\,dt\ge\bigl|\int_a^b g'\bigr|=|\log y-\log 1|=|\log y|$, with $g$ absolutely continuous by [F9]. Equality in the second inequality forces $\rho$ to be monotone, and equality in the first (where $|\gamma'|^2=(\operatorname{Re}\gamma')^2+\rho'^2$) forces $x:=\operatorname{Re}\gamma$ to satisfy $x'=0$ almost everywhere, hence to be constant; so the curves attaining $|\log y|$ are exactly the monotone parametrisations of the vertical segment from $i$ to $iy$. In particular the vertical segment is the unique minimiser, and step 4.1 shows its length is $d_{\mathbb H}(i,iy)=|\log y|$. [F9, step 3.1, step 4.1, algebra]

6.1 Let $p,q\in\mathbb H$ with $p\ne q$, put $z':=C(p)$, $w':=C(q)$, $u':=\varphi_{z'}(w')$ and $r:=|u'|\in(0,1)$. Let $R(\zeta):=\zeta\overline{u'}/r$ be the rotation of $\mathbb D$ carrying $u'$ to $r$, and put $g:=R\circ\varphi_{z'}$ and $m:=C^{-1}\circ g\circ C$. Then $g$ is an automorphism of $\mathbb D$ with $g(z')=0$ and $g(w')=r$, so $m$ is a biholomorphic self-map of $\mathbb H$ with $m(p)=C^{-1}(0)=i$ and $m(q)=C^{-1}(r)=i(1+r)/(1-r)=:iy$ with $y>0$. By [F5] one has $m(z)=(az+b)/(cz+d)$ with $a,b,c,d$ real and $ad-bc>0$, and likewise $m^{-1}(z)=(dz-b)/(-cz+a)$ has real coefficients and determinant $ad-bc>0$. For such a map the quotient rule [F7] gives $m'(z)=(ad-bc)/(cz+d)^2$ and $\operatorname{Im}m(z)=\bigl((ad-bc)\operatorname{Im}z\bigr)/|cz+d|^2$, hence $|m'(z)|/\operatorname{Im}m(z)=1/\operatorname{Im}z$ for $z\in\mathbb H$; so $m$ preserves $\ell_{\mathbb H}$ and transports minimisers to minimisers. [F3, F4, F5, F7, step 1.1, step 3.1, step 5.1, algebra]

7.1 By steps 5.1 and 6.1 the minimisers from $p$ to $q$ are the images under $m^{-1}$ of the monotone parametrisations of the vertical segment from $i$ to $iy$, and these images lie on $m^{-1}\bigl(\{is:s\in\mathbb R\}\cup\{\infty\}\bigr)$. Since $m^{-1}$ is again given by real Mobius coefficients with positive determinant, step 1.6 shows that this set is a vertical line or a Euclidean circle with centre on the real axis, meeting $\mathbb R$ at right angles. So the geodesic segment from $p$ to $q$ is an arc of such a circle or line. [F5, step 6.1, step 1.6]

8.1 Steps 3.1, 1.2, 4.1, 4.2 and 7.1 establish the four clauses of the Example. All curves and maps in the argument are given by explicit formulae; in particular the disc and half-plane geodesics are obtained by inverting explicit biholomorphisms, and the infima in [F1] and step 3.1 are taken over explicitly parametrised families, so no choice principle is used. When $z=w$ in $\mathbb D$ or $p=q$ in $\mathbb H$ the constant curve has length $0=d_{\mathbb D}(z,z)=d_{\mathbb H}(p,p)$, and steps 2.2 and 5.1 identify the strict minimisers only in the nondegenerate case. [step 3.1, step 1.2, step 4.1, step 2.2, step 4.2, step 5.1, step 7.1] ∎
