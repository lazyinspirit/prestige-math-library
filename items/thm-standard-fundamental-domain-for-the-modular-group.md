---
id: thm-standard-fundamental-domain-for-the-modular-group
kind: theorem
title: "The standard fundamental domain, boundary identifications and elliptic stabilisers"
status: draft
origin: pipeline
deps:
  - def-modular-group-action-on-the-upper-half-plane
  - lem-modular-group-reduction-to-the-standard-domain
  - def-orbit-and-stabilizer
  - lem-stabilizer-is-a-subgroup
  - thm-orbits-partition-the-set
  - def-free-group-action
  - def-generated-subgroup
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Theorem 2.12 and its proof, printed pp. 32-34: the fundamental domain and the boundary identifications."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 1 and its proof, printed pp. 6-8: fundamental domain, elliptic points and generators."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Theorems 5.27-5.28 and the discussion of the elliptic points, printed pp. 93-95."
proof_strategy: direct
---

## Statement

Let $D=\{\tau\in\mathfrak H:|\Re\tau|<1/2,\ |\tau|>1\}$ and let $\overline D$ be its closure in $\mathfrak H$.
(a) $D$ is a fundamental domain for $PSL_2(\mathbb Z)$: every orbit meets $\overline D$, no two points of $D$ are equivalent, and two distinct points $z,z'\in\overline D$ are equivalent if and only if either $z'=z\pm1$ with $\Re z=\mp1/2$, or $z'=-1/z$ with $|z|=1$.
(b) The only points of $\overline D$ with nontrivial stabiliser are $i$, $\omega:=e^{2\pi i/3}$ and $\omega+1=e^{i\pi/3}$: $\operatorname{Stab}(i)=\langle S\rangle$ has order $2$, $\operatorname{Stab}(\omega)=\langle ST\rangle$ has order $3$, and $\operatorname{Stab}(\omega+1)=\langle TS\rangle$ has order $3$ in $PSL_2(\mathbb Z)$.
(c) $PSL_2(\mathbb Z)=\langle S,T\rangle$.

## Facts & Assumptions

**Given:** $\Gamma:=PSL_2(\mathbb Z)$ acting on $\mathfrak H$, its subgroup $\Gamma':=\langle S,T\rangle$, the set $D$ and its closure $\overline D$; $S\cdot z=-1/z$, $T\cdot z=z+1$, and $S^2=(ST)^3=1$ in $\Gamma$ ([[def-modular-group-action-on-the-upper-half-plane]], [[def-generated-subgroup]], [[def-orbit-and-stabilizer]], [[lem-stabilizer-is-a-subgroup]], [[def-free-group-action]]).

[F1] Every $\Gamma'$-orbit meets $\overline D$ ([[lem-modular-group-reduction-to-the-standard-domain]]), and for $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in SL_2(\mathbb Z)$ one has $\Im(\gamma\cdot z)=\Im z/|cz+d|^2$, so $\Im(\gamma\cdot z)\ge\Im z$ is equivalent to $|cz+d|\le1$ ([[def-modular-group-action-on-the-upper-half-plane]]).

[F2] Every $z\in\overline D$ satisfies $|\Re z|\le1/2$ and $|z|\ge1$, hence $\operatorname{Im}z\ge\sqrt{3}/2$ ([[def-modular-group-action-on-the-upper-half-plane]], [[lem-modular-group-reduction-to-the-standard-domain]]).

[F3] Orbits partition the set and stabilisers are subgroups of the acting group; two points are equivalent exactly when they lie in the same orbit ([[thm-orbits-partition-the-set]], [[def-orbit-and-stabilizer]], [[lem-stabilizer-is-a-subgroup]]).

## Proof

1.1 Every $\Gamma$-orbit meets $\overline D$, because $\Gamma'\le\Gamma$ and every $\Gamma'$-orbit does [F1]. Suppose $z,z'\in\overline D$ satisfy $z'=\gamma\cdot z$ with $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in SL_2(\mathbb Z)$ and $\operatorname{Im}z'\ge\operatorname{Im}z$; replacing $\gamma$ by $-\gamma$, which gives the same element of $\Gamma$, we may assume $c\ge0$. Then $|cz+d|\le1$ by [F1], while $\operatorname{Im}z\ge\sqrt3/2$ by [F2]; hence $|c|\,\tfrac{\sqrt3}{2}\le|c|\operatorname{Im}z=|\operatorname{Im}(cz+d)|\le|cz+d|\le1$, so $|c|\le2/\sqrt3<2$ and therefore $c\in\{0,1\}$. [F1, F2, given, algebra]

2.1 Case $c=0$. Then $d=\pm1$ and $\gamma=\pm\bigl(\begin{smallmatrix}1&m\\0&1\end{smallmatrix}\bigr)$, so $z'=z+m$ with $m\in\mathbb Z$. Since both points lie in $\overline D$, $|m|=|\Re z'-\Re z|\le1$. If $m=0$ then $z'=z$. If $m=1$ then $\Re z'=\Re z+1\le1/2$ and $\Re z\ge-1/2$ force $\Re z=-1/2$; conversely for $z\in\overline D$ with $\Re z=-1/2$ the point $z'=z+1$ lies in $\overline D$, since $1/2\ge\Re z'$ and $|z'|=|z-(-1)|=|\,|z|\,|=|z|$ holds because $|z'|^2=|z|^2+2\operatorname{Re}z+1=|z|^2$. The case $m=-1$ is the mirror image with $\Re z=1/2$. [F1, F2, step 1.1, given, cases, algebra]

2.2 Case $c=1$. First suppose $d=0$. Then $b=ad-1=-1$ and $|z|=|cz+d|\le1\le|z|$ shows $|z|=1$; the map is $z'=a-1/z=a-\bar z$ with $a\in\mathbb Z$, and $|\Re z'|\le1/2$, $|\Re z|\le1/2$ give $|a|\le1$. For $a=0$ this is $z'=-1/z$ with $|z|=1$; for $a=-1$ the condition $\Re z'=-1-\Re z\ge-1/2$ forces $\Re z=-1/2$, so $z=\omega$ and $z'=-1-\bar z=z$; for $a=1$ we get $\Re z'=1-\Re z\ge1/2$, forcing $\Re z'=1/2$ and $\Re z=1/2$, after which $|z'|^2=1-2\Re z+|z|^2=|z|^2=1$ and $z'=1-\bar z=1-(\tfrac12-iy)=\tfrac12+iy=z$. So for $d=0$ the only new identification is $z'=-1/z$ when $|z|=1$. Now suppose $d\ge1$. Since $|cz+d|^2-|z|^2=2d\operatorname{Re}z+d^2\le1-1=0$, we get $\Re z\le-d/2\le-1/2$, so $d=1$ and $\Re z=-1/2$; then $|z+1|^2=|z|^2$ and $1\le|z|$, $|z+1|\le1$ force $|z+1|=1=|z|$, whence $z=\omega$. Here $b=a-1$ and $z'=a+\omega$ (because $1/(1+\omega)=-\omega$), so $\Re z'=a-1/2\in[-1/2,1/2]$ gives $a\in\{0,1\}$: for $a=0$ one has $z'=z$, and for $a=1$ one has $z'=\omega+1=z+1$. If $d\le-1$, write $d=-k$, $k\ge1$; then $|cz+d|^2-|z|^2=-2k\Re z+k^2\le0$ gives $\Re z\ge k/2\ge1/2$, so $k=1$, $d=-1$, $\Re z=1/2$, and $|z-1|=|z|=1$ forces $z=\omega+1$; with $b=-a-1$ and $\omega=\omega+1-1$ one computes $z'=a+1+\omega$, so $\Re z'=a+1/2\in[-1/2,1/2]$ gives $a\in\{-1,0\}$: for $a=0$ one has $z'=z$, and for $a=-1$ one has $z'=\omega=z-1$. [F1, F2, step 1.1, given, cases, algebra]

3.1 Combining 1.1, 2.1 and 2.2: for any two $\Gamma$-equivalent points $z,z'\in\overline D$ one of them, say the one with larger imaginary part, is of the listed shape; the case analysis gives either $z'=z$, or $z'=z\pm1$ with $\Re z=\mp1/2$, or $z'=-1/z$ with $|z|=1$. Since the two identifications force $|z|=1$ or $|\Re z|=1/2$, neither can occur for two distinct points of $D$, whose points have $|\Re z|<1/2$ and $|z|>1$; this proves (a). For (b), a stabiliser element is a case with $z'=z$ in the same analysis: besides the identity, this happens exactly for $z=i$ with $\gamma=\pm S$, for $z=\omega$ with $\gamma$ representing $ST$ or $(ST)^2$, and for $z=\omega+1$ with $\gamma$ representing $TS$ or $(TS)^2$. Since $S^2=(ST)^3=(TS)^3=1$ in $\Gamma$ and $S\ne1$, $ST\ne1$, these give $\operatorname{Stab}(i)=\langle S\rangle$ of order $2$ and $\operatorname{Stab}(\omega)=\langle ST\rangle$, $\operatorname{Stab}(\omega+1)=\langle TS\rangle$ of order $3$, by [F3]; all other points of $\overline D$ have trivial stabiliser. [F1, F3, step 2.1, step 2.2, given, algebra]

4.1 For (c) let $\gamma\in\Gamma$ and fix $z_0:=2i\in D$. By 1.1 there is $\gamma_1\in\Gamma'$ with $\gamma_1\cdot(\gamma\cdot z_0)\in\overline D$; set $\delta:=\gamma_1\gamma\in\Gamma$. Then $z_0\in D\subseteq\overline D$ and $\delta\cdot z_0\in\overline D$ are equivalent, so by (a) either $\delta\cdot z_0=z_0$ or one of the two boundary identifications holds; the latter are impossible because $|z_0|=2>1$ and $|\Re z_0|=0<1/2$. Hence $\delta$ stabilises $z_0$, and by (b) the only points of $\overline D$ with nontrivial stabiliser are $i,\omega,\omega+1$, none of which equals $z_0$; so $\delta=1$ and $\gamma=\gamma_1^{-1}\in\Gamma'$. Therefore $\Gamma=\Gamma'=\langle S,T\rangle$. [F3, step 3.1, given, algebra] ∎
