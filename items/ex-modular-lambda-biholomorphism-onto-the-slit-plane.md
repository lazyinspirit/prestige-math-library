---
id: ex-modular-lambda-biholomorphism-onto-the-slit-plane
kind: example
title: "The modular lambda function: Y(2) biholomorphic to the twice-punctured plane, and the slit-plane quadrilateral"
status: draft
origin: pipeline
deps:
  - def-modular-lambda-function
  - def-modular-group-action-on-the-upper-half-plane
  - lem-lambda-transformation-laws
  - lem-lambda-fibres-are-gamma-2-orbits
  - lem-weierstrass-j-invariant-of-the-legendre-normal-form
  - lem-gamma-2-is-torsion-free-and-has-no-elliptic-points
  - def-principal-congruence-subgroup-gamma-2
  - thm-j-uniformizes-the-level-one-modular-curve
  - thm-j-invariant-classifies-complex-tori
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - cor-injective-holomorphic-derivative-nonzero
  - def-biholomorphic-map
  - lem-modular-quotient-local-charts
  - thm-orbit-map-of-a-covering-space-action-is-a-covering
  - def-covering-space-action
  - def-covering-map-and-evenly-covered-neighbourhoods
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - def-deck-transformation-and-deck-group
  - thm-standard-fundamental-domain-for-the-modular-group
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - thm-weierstrass-convergence-holomorphic-functions
  - lem-modular-group-reduction-to-the-standard-domain
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Theorems 5.29–5.31 and Corollary 5.32, printed p. 96; the S3 rational quotient on pp. 94–95 and 97."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 2, printed pp. 35–37, and Example 4.2, p. 48: quotient-chart and level-two background. The slit quadrilateral is supplied by McMullen and the local proof."
---

## Example

The modular lambda function induces a biholomorphism
$$\bar\lambda:Y(2)=\mathfrak H/\Gamma(2)\longrightarrow\mathbb C\setminus\{0,1\}.$$
Let $Q^\circ=\{\tau\in\mathfrak H:|\Re\tau|<1,\ |\tau-1/2|>1/2,\ |\tau+1/2|>1/2\}$ be the interior of the standard ideal quadrilateral with vertices $\infty,-1,0,1$. Its restriction is a biholomorphism
$$\lambda:Q^\circ\longrightarrow\mathbb C\setminus((-\infty,0]\cup[1,\infty)).$$
Moreover $\lambda:\mathfrak H\to\mathbb C\setminus\{0,1\}$ is a regular covering whose deck group is $\bar\Gamma(2)=\Gamma(2)/\{\pm I\}$ acting freely and simply transitively on every fibre.

## Facts & Assumptions

**Given:** $\lambda(\tau)=\frac{e_3-e_2}{e_1-e_2}$ with the $e_j$ the half-period values of $\wp_{\Lambda_\tau}$ ([[def-modular-lambda-function]]); the quadrilateral $Q^\circ$ and the slit plane $\mathbb C\setminus((-\infty,0]\cup[1,\infty))$. The matrices $T^2=\bigl(\begin{smallmatrix}1&2\\0&1\end{smallmatrix}\bigr)$, $\gamma_+=\bigl(\begin{smallmatrix}1&0\\2&1\end{smallmatrix}\bigr)$, $\gamma_-=\bigl(\begin{smallmatrix}-1&0\\2&-1\end{smallmatrix}\bigr)$ lie in $\Gamma(2)$, and $L_\pm=\bigl(\begin{smallmatrix}1&0\\\pm1&1\end{smallmatrix}\bigr)$ satisfy $L_+(iy)=\frac{iy}{1+iy}$, $L_-(iy)=\frac{iy}{1-iy}$ on the imaginary axis ([[def-principal-congruence-subgroup-gamma-2]], [[def-modular-group-action-on-the-upper-half-plane]]).

[F1] On compact subsets of $\mathfrak H$ the normally convergent $\wp$-series is uniformly controlled by the lattice estimate $|m\tau+n|\ge C\max(|m|,|n|)$, so the half-period values $e_j(\tau)$ and hence $\lambda(\tau)$ are holomorphic functions of $\tau$; conjugation of the same series gives $\lambda(-\bar\tau)=\overline{\lambda(\tau)}$ ([[thm-weierstrass-p-normal-convergence-and-periodicity]], [[thm-weierstrass-convergence-holomorphic-functions]], [[lem-modular-group-reduction-to-the-standard-domain]], [[def-modular-lambda-function]]).

[F2] $\lambda$ is $\Gamma(2)$-invariant, satisfies $\lambda(\tau+1)=\frac{\lambda}{\lambda-1}$, $\lambda(-1/\tau)=1-\lambda$, takes the values of the six expressions (which may coincide) $\lambda,\frac1\lambda,1-\lambda,\frac1{1-\lambda},\frac{\lambda}{\lambda-1},\frac{\lambda-1}{\lambda}$ under $PSL_2(\mathbb Z)$, and $0<\lambda(iy)<1$ for $y>0$ ([[lem-lambda-transformation-laws]]).

[F3] $\lambda(\tau)=\lambda(\tau')$ implies $\tau'\in\Gamma(2)\tau$ ([[lem-lambda-fibres-are-gamma-2-orbits]]); $\bar\Gamma(2)$ is torsion-free and acts freely with local quotient charts ([[lem-gamma-2-is-torsion-free-and-has-no-elliptic-points]], [[lem-modular-quotient-local-charts]], [[thm-orbit-map-of-a-covering-space-action-is-a-covering]], [[def-covering-space-action]], [[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F4] $j:X(1)\to\widehat{\mathbb C}$ is a biholomorphism and $j(\tau)=J_{\mathrm{Leg}}(\lambda(\tau))=R(\lambda(\tau))$ with $R(x)=J_{\mathrm{Leg}}(x)=\frac{256(x^2-x+1)^3}{x^2(x-1)^2}$ ([[thm-j-uniformizes-the-level-one-modular-curve]], [[lem-weierstrass-j-invariant-of-the-legendre-normal-form]]).

[F5] An injective holomorphic map of Riemann surfaces is biholomorphic onto its open image ([[cor-injective-holomorphic-derivative-nonzero]], [[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-biholomorphic-map]]).

[F6] For a covering with connected total space, deck transformations are determined by their value at one point and act freely ([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]], [[def-deck-transformation-and-deck-group]]).

## Verification

1.1 $\lambda$ is holomorphic on $\mathfrak H$ and satisfies $\lambda(-\bar\tau)=\overline{\lambda(\tau)}$ by [F1]; by the $\Gamma(2)$-invariance of [F2] and the local quotient charts of [F3], it descends to a holomorphic function $\bar\lambda$ on $Y(2)=\mathfrak H/\Gamma(2)$, which takes values in $\mathbb C\setminus\{0,1\}$ because the $e_j$ are always distinct. [F1, F2, F3, given, algebra]

1.2 Reduction to the quadrilateral. Fix $\tau\in\mathfrak H$. The set $S=\{|c\tau+d|:\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in\Gamma(2)\}$ contains $1$ (the identity), and the pairs with $|c\tau+d|\le1$ are finite by [[lem-modular-group-reduction-to-the-standard-domain]]; hence $S$ has a least positive element $m$, realized by some $\gamma_0\in\Gamma(2)$, and $\tau_0=\gamma_0\tau$ has maximal imaginary part in the $\Gamma(2)$-orbit. Applying a power of $T^2\in\Gamma(2)$, which adds an even integer and does not change the height, we may assume $|\Re\tau_0|\le1$. Maximality forces $|2\tau_0+1|\ge1$ and $|2\tau_0-1|\ge1$, since otherwise $\gamma_+\tau_0$ or $\gamma_-\tau_0$ would have strictly larger imaginary part; thus $\tau_0$ lies in the closure of $Q^\circ$, and every $\Gamma(2)$-orbit meets that closure. [F2, F3, given, algebra]

2.1 $\bar\lambda$ is injective by [F3]: if $\bar\lambda$ agrees at two classes, the underlying $\lambda$-values agree and the points lie in one $\Gamma(2)$-orbit. It is surjective: let $z\in\mathbb C\setminus\{0,1\}$ and put $R(x)=\frac{256(x^2-x+1)^3}{x^2(x-1)^2}$. Since $j:X(1)\to\widehat{\mathbb C}$ is onto [F4], there is $\tau\in\mathfrak H$ with $j(\tau)=R(z)$ (the value is finite, so it is attained off the cusp); then $R(\lambda(\tau))=j(\tau)=R(z)$ by [F4]. Put $H(x)=(x^2-x+1)^3$ and $D(x)=x^2(x-1)^2$. For $u\ne0,1$, clearing denominators gives $D(u)H(v)-H(u)D(v)=0$, a degree-six polynomial in $v$ with nonzero leading coefficient $D(u)$. Let $f_1(u),\ldots,f_6(u)$ be the six substitutions of [F2]. The identity $D(u)H(v)-H(u)D(v)=D(u)\prod_{r=1}^6(v-f_r(u))$ holds first for generic $u$, where the six roots are distinct by direct substitution and the leading coefficients agree. It then holds for every $u\ne0,1$, since each coefficient is a rational function of $u$ and an identity outside finitely many exceptional values is a rational-function identity. Thus the same factorisation handles the repeated roots at special parameters, and its root set is exactly the displayed substitutions; so $z$ is one of $\lambda(\tau),\frac1{\lambda(\tau)},1-\lambda(\tau),\frac1{1-\lambda(\tau)},\frac{\lambda(\tau)}{\lambda(\tau)-1},\frac{\lambda(\tau)-1}{\lambda(\tau)}$. By [F2] each of these is $\lambda(\gamma\tau)$ for some $\gamma\in PSL_2(\mathbb Z)$, so $z$ lies in the image of $\bar\lambda$. [F3, F4, step 1.1, given, algebra]

2.2 Uniqueness and the interior. Let $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in\Gamma(2)$ with $c\ne0$, so $c$ is even and $d$ is odd, and consider the open disc $\{\tau:|c\tau+d|<1\}=\{\tau:|\tau+d/c|<1/|c|\}$. Its centre $-d/c$ is not $-1,0$ or $1$ (it is not an integer), and if it lies in $(-1,0)$ or in $(0,1)$ then its distances to the endpoints of the corresponding interval are at least $1/|c|$, since each is a nonzero integer divided by $|c|$, so the disc lies inside the boundary disc with diameter $[-1,0]$ or $[0,1]$; if the centre lies outside $[-1,1]$, its centre is at distance at least $1/|c|$ from the strip $|\Re\tau|\le1$. Hence $|c\tau+d|\ge1$ on the closure of $Q^\circ$ and $|c\tau+d|>1$ on $Q^\circ$. If $c=0$ then $\gamma=\pm T^{2k}$ is translation by an even integer, and two points of the closure with $|\Re|\le1$ differ by $2k$ with $|k|\le1$; for $k=\pm1$ both have real part $\mp1$, a boundary value. Therefore no two distinct points of $Q^\circ$ are $\Gamma(2)$-equivalent, and no point of $Q^\circ$ is equivalent to a boundary point: two interior points related by $\gamma$ with $c\ne0$ would give $\operatorname{Im}(\gamma\tau)<\operatorname{Im}\tau$ and, applying the same to $\gamma^{-1}$ and $\gamma\tau$ in the closure, the reverse weak inequality. This also excludes an interior-to-boundary identification. [F2, F3, step 1.2, given, algebra]

3.1 By 1.1 and 2.1 the holomorphic map $\bar\lambda:Y(2)\to\mathbb C\setminus\{0,1\}$ is bijective, hence biholomorphic by [F5] (injectivity forces local degree one everywhere). The quotient map $\pi_2:\mathfrak H\to Y(2)$ is a covering by [F3], so $\lambda=\bar\lambda\circ\pi_2$ is a covering. The total space $\mathfrak H$ is connected: the straight segment between any two points stays in $\mathfrak H$. Every $\bar\Gamma(2)$ element is a deck transformation by [F2]. Conversely, for a deck transformation $h$ and a fixed $\tau_0\in\mathfrak H$, [F3] gives $\gamma\in\bar\Gamma(2)$ with $h(\tau_0)=\gamma\tau_0$; connected-cover uniqueness [F6] then gives $h=\gamma$. Thus the deck group is exactly $\bar\Gamma(2)$, acting transitively on each fibre by [F3] and freely by [F6], hence simply transitively; the covering is regular. [F2, F3, F5, F6, step 1.1, step 2.1, given, algebra]

3.2 Boundary values and the slit plane. The vertical boundary edges are $T^{\pm1}(iy)=iy\pm1$. The rational substitution $s(x)=x/(x-1)$ is its own inverse, so both edges have value $s(\lambda(iy))<0$. The semicircular edges are $L_\pm(iy)$, where $L_+=TST$ in $PSL_2(\mathbb Z)$ and $L_-=L_+^{-1}$. The substitution for $L_+$ is $s\circ(1-x)\circ s=1/x$, also its own inverse; hence both semicircular edges have value $1/\lambda(iy)>1$. Hence boundary values avoid the slit plane. Now let $w$ lie in the slit plane. Since $\bar\lambda$ is onto, $w=\lambda(\tau')$ for some $\tau'$, whose orbit meets the closure of $Q^\circ$ by 1.2; choose $\tau$ in that closure with $\lambda(\tau)=w$ by $\Gamma(2)$-invariance. By the boundary computation, $\tau$ is not on the vertical or semicircular boundary (those values are negative or greater than $1$, while $w\notin(-\infty,0]\cup[1,\infty)$), so $\tau\in Q^\circ$. Thus $\lambda(Q^\circ)$ contains the slit plane. Conversely, if $\tau\in Q^\circ$ and $\lambda(\tau)$ is real, then $-\bar\tau\in Q^\circ$ and $\lambda(-\bar\tau)=\overline{\lambda(\tau)}=\lambda(\tau)$ by 1.1, so $\tau=-\bar\tau$ by 2.2, that is $\tau=iy$, and then $\lambda(\tau)\in(0,1)$. Hence $\lambda(Q^\circ)$ is contained in the slit plane, the restriction is bijective onto it, and being injective holomorphic it is biholomorphic onto the slit plane by [F5]. [F2, F5, step 1.1, step 1.2, step 2.2, given, algebra]

4.1 Consistency check: $\lambda(1+i)=\lambda(T(i))=\frac{\lambda(i)}{\lambda(i)-1}=\frac{1/2}{-1/2}=-1$, a value on the vertical boundary, so $1+i$ is not an interior point of $Q^\circ$ and its image is not in the slit plane; this is exactly the boundary behaviour that distinguishes the image of the quadrilateral from the twice-punctured plane. [F2, step 3.2, given, algebra] ∎
