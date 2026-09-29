---
id: lem-analytic-exhaustion-of-plane-domains
kind: lemma
title: "Analytic-boundary exhaustion of a plane domain"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-domain
  - def-connected-component-and-quasicomponent
  - def-metric-ball
  - def-metric-bounded-diameter
  - def-metric-compactness
  - def-metric-interior-closure-boundary
  - def-null-and-content-zero-in-rn
  - def-real-analytic-map-on-the-plane
  - lem-countable-iff-surjection-from-n
  - lem-distance-to-set-is-lipschitz
  - lem-euclidean-polygonal-paths-are-continuous
  - lem-nondegenerate-interval-is-not-null
  - lem-of-q-dense
  - lem-subset-of-countable
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-compactness-under-continuous-maps
  - thm-continuous-image-of-a-connected-space
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-metric-closure-characterisation
  - thm-morse-sard-for-euclidean-maps
  - thm-n-cross-n-countable
  - thm-open-connected-subsets-of-rn-are-polygonally-connected
  - thm-path-connected-implies-connected
  - thm-product-of-countable
  - thm-rationals-countable
  - thm-real-analytic-inverse-and-implicit-function-theorems
  - thm-real-stone-weierstrass-for-compact-metric-spaces
  - thm-unions-of-connected-sets
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.9, printed pp. 171-172: exhaustion by smoothly bounded domains carrying the Green construction"
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, printed pp. 183-186: approximation of domains by regular level sets"
verification:
  precheck: pass
---

## Statement

Every plane domain $\Omega\subset\mathbb C$ admits an increasing sequence
$D_1\subseteq D_2\subseteq\cdots$ of relatively compact connected open subsets
of $\Omega$ whose boundaries are real-analytic regular in the following
one-sided sense: for every $j$ and every $\zeta\in\partial D_j$ there are a
neighbourhood $U$ of $\zeta$ and a real-analytic function $g$ of one real
variable, defined on an open interval, such that, after relabelling the two
coordinate axes if necessary,
$$\partial D_j\cap U=\{(x,y)\in U:y=g(x)\},$$
and $D_j\cap U$ is one of the two connected components of
$U\setminus\{(x,y)\in U:y=g(x)\}$; such that every compact
$K\subseteq\Omega$ lies in $D_j$ for all sufficiently large $j$. If $A\subseteq\Omega$
is finite, the sequence may be chosen with $A\subseteq D_1$ from the outset.

## Facts & Assumptions

**Given:** A plane domain $\Omega\subset\mathbb C$, that is, a nonempty connected open set ([[def-complex-domain]]), and a finite set $A\subseteq\Omega$. For $c\in\mathbb C$ and $r>0$ we write $D(c,r):=\{z\in\mathbb C:|z-c|<r\}$; open and closed sets, interior, closure and boundary are those of [[def-metric-interior-closure-boundary]], compactness is that of [[def-metric-compactness]], and $\overline{D(c,r)}$ is the closed disc. A boundary is called **real-analytic regular** when it has the one-sided local graph description fixed in the Statement; such a boundary is in particular locally the zero set of a real-analytic function with nonvanishing gradient.

[F1] The rationals are countably infinite, a product of two at most countable sets is at most countable, $\mathbb N\times\mathbb N$ is countable, subsets of at most countable sets are at most countable, and a nonempty set presented by a surjection $s:\mathbb N\to S$ has a least-index element $x\mapsto\min\{k:s(k)=x\}$. Consequently the points of $\mathbb Q[i]$, the positive rational radii, finite tuples of points of $\mathbb Q[i]$, and the polynomials in two variables with rational coefficients all sit in fixed explicitly enumerated at most countable families. For any fixed endpoints, polygonal paths whose intermediate vertices lie in $\mathbb Q[i]$ are indexed by such finite tuples. A nonempty subfamily of any of these enumerated families has a least-index member ([[thm-rationals-countable]], [[thm-product-of-countable]], [[thm-n-cross-n-countable]], [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]]).

[F2] Between any two real numbers there is a rational number, and a point of $\mathbb C$ is described by its real part, imaginary part and modulus, whose elementary order properties make $\mathbb Q[i]$ dense: given $z=p+iq$ and $\eta>0$, choosing rationals $p'\in(p-\eta/2,p+\eta/2)$ and $q'\in(q-\eta/2,q+\eta/2)$ gives $|z-(p'+iq')|<\eta$ ([[lem-of-q-dense]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] An open connected subset of $\mathbb R^n$ is polygonally connected, so any two of its points are joined by a polygonal path inside it; every connected component of an open subset of $\mathbb R^n$ is open and polygonally connected, and a component is the largest connected subset containing each of its points, so every connected subset of an open set that meets a component is contained in that component ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]], [[cor-components-of-open-subsets-of-rn-are-polygonally-connected]], [[def-connected-component-and-quasicomponent]]).

[F4] A convex subset of the plane is path connected by the straight segment $t\mapsto(1-t)x+ty$; every open or closed Euclidean disc is convex by the triangle inequality. Every path-connected space is connected; a polygonal path is a continuous map of a compact interval with connected image; and the continuous image of a connected space is connected ([[thm-path-connected-implies-connected]], [[lem-euclidean-polygonal-paths-are-continuous]], [[thm-continuous-image-of-a-connected-space]]).

[F5] A subset of $\mathbb R^2$ is compact exactly when it is closed and bounded, every open cover of a compact set has a finite subcover, the continuous image of a compact set is compact, a continuous real function on a nonempty compact metric space attains its infimum, and a finite union of compact sets is compact ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[thm-compactness-under-continuous-maps]], [[thm-extreme-value-metric]]).

[F6] Distance to a nonempty set $S$ is the infimum $d(x,S)$ ([[def-metric-bounded-diameter]]); $d(\cdot,S)$ is one-Lipschitz and hence continuous, with $d(x,S)=d(x,\overline S)$ and $d(x,S)=0$ exactly when $x\in\overline S$. If $S$ is nonempty compact, $w\mapsto|x-w|$ attains its minimum on $S$ by the extreme-value theorem [F5], so the point-to-set distance is attained. Also $d(K,L)=\inf_{z\in K}d(z,L)$ for nonempty sets, and $d(z,S)\ge d(w,S)-|z-w|$ for all $z,w$ ([[lem-distance-to-set-is-lipschitz]], [[thm-metric-closure-characterisation]], [[thm-extreme-value-metric]]).

[F7] A union of connected sets in which every member meets one fixed connected member is connected, and a union of connected sets with a common point is connected ([[thm-unions-of-connected-sets]]).

[F8] On a nonempty compact metric space, a unital real subalgebra of the real continuous functions that separates points is uniformly dense ([[thm-real-stone-weierstrass-for-compact-metric-spaces]]). On a fixed closed disc $\overline{D(0,M)}$ with $M\ge1$, every real-coefficient polynomial $P(x,y)=\sum_{(k,l)\in I}a_{kl}x^ky^l$ can be uniformly approximated by a rational-coefficient polynomial: choose rationals $q_{kl}$ with $\sum_{(k,l)\in I}|a_{kl}-q_{kl}|M^{k+l}<\epsilon$, which is possible by density of $\mathbb Q$ in $\mathbb R$ and finiteness of $I$; then $|P(x,y)-\sum q_{kl}x^ky^l|<\epsilon$ throughout the disc. Thus the rational-coefficient polynomials are also uniformly dense there.

[F9] For a $C^\infty$ map $U\to\mathbb R$ on an open $U\subseteq\mathbb R^2$, the critical value set is null, a subset of a null set is null, and no nondegenerate interval is null ([[thm-morse-sard-for-euclidean-maps]], [[def-null-and-content-zero-in-rn]], [[lem-nondegenerate-interval-is-not-null]]).

[F10] Polynomials in the two real coordinates are real analytic and $C^\infty$ maps of the plane, finite sums and products of $C^\infty$ Euclidean maps are $C^\infty$, and a real-analytic map is smooth at every point of its domain ([[def-real-analytic-map-on-the-plane]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F11] A real-analytic map with invertible derivative has a real-analytic local inverse. If a real-analytic function $P$ of two variables has $D_yP$ invertible at a point where $P=0$, then near that point its zero set is exactly the graph of a real-analytic function of the first variable ([[thm-real-analytic-inverse-and-implicit-function-theorems]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\Omega$ and the finite set $A$. If $\Omega=\mathbb C$, put $R_0:=1+\sup\{|a|:a\in A\}$ (and $R_0:=1$ when $A=\varnothing$) and $D_j:=D(0,R_0+j)$ for $j\ge1$: then $A\subseteq D_1$, the discs increase with $j$, each boundary $\{|z|=r\}$ is the zero set of the real-analytic polynomial $F(z)=|z|^2-r^2$ whose gradient $2z$ does not vanish there, so after relabelling the axes [F11] exhibits that zero set near each of its points as the graph of a real-analytic function $g$ with the disc $D(0,r)=\{F<0\}$ equal to one of the two local sides; hence each $\partial D_j$ is real-analytic regular in the one-sided sense of the Statement, and every compact $K\subseteq\mathbb C$ is bounded, hence lies in $D_j$ for all large $j$. So assume from now on that $\Omega\ne\mathbb C$, in which case $\mathbb C\setminus\Omega$ is a nonempty closed set. [F1, F4, F5, F10, F11, construct]

1.2 List as $Q_1,Q_2,\dots$ the closed discs $\overline{D(c,r)}$ with $c\in\mathbb Q[i]$, $r$ a positive rational and $\overline{D(c,r)}\subset\Omega$, in increasing order of the index of the datum $(c,r)$ in the enumeration of [F1]. Every compact $K\subseteq\Omega$ is covered by finitely many of the $Q_i$: for $z\in K$ openness gives $\delta(z):=d(z,\mathbb C\setminus\Omega)>0$ by [F6], and [F1] together with [F2] supplies $c\in\mathbb Q[i]$ and a positive rational $r$ with $|c-z|<\delta(z)/4$ and $\delta(z)/4<r<\delta(z)/2$; every $w$ with $|w-c|\le r$ then has $|w-z|<3\delta(z)/4$ and therefore $d(w,\mathbb C\setminus\Omega)>\delta(z)/4>0$ by [F6], so $\overline{D(c,r)}\subset\Omega$ while $z\in D(c,r)$. The interiors of the listed discs thus cover the compact set $K$, and compactness extracts a finite subcover, whose largest index we call $N$. [F1, F2, F5, F6, choose]

1.3 For every nonempty compact $K\subseteq\Omega$ the number $\delta(K):=d(K,\mathbb C\setminus\Omega)$ is positive: by [F6] the continuous function $z\mapsto d(z,\mathbb C\setminus\Omega)$ attains over $K$ its minimum, which is $\delta(K)$, at some $z_*\in K$, and $\delta(K)=0$ would put $z_*$ in $\Omega\cap\overline{\mathbb C\setminus\Omega}=\varnothing$. Moreover $d(z,\mathbb C\setminus\Omega)\ge\delta(K)-d(z,K)$ for every $z\in\mathbb C$, by [F6] and the defining infimum of $d(z,K)$. [F5, F6, contradiction, discharge-contradiction]

1.4 Let $x_0$ be the least-indexed point of $\mathbb Q[i]$ lying in $\Omega$, which exists by [F1] and [F2] because $\Omega$ is nonempty and open, and let $c_1$ be the centre of $Q_1$. For each fixed endpoint $p\in A\cup\{c_1\}$, [F3] supplies a polygonal path in $\Omega$ from $x_0$ to $p$. Its compact image has positive distance from $\mathbb C\setminus\Omega$: the distance function is continuous and positive on that compact subset of the open set $\Omega$, so it attains a positive minimum by [F5] and [F6]. Perturbing each non-endpoint vertex by less than half that distance keeps every segment in $\Omega$, because each corresponding point on a perturbed segment moves by at most the maximum endpoint perturbation. Density of $\mathbb Q[i]$ therefore gives a path with the same endpoints and all intermediate vertices in $\mathbb Q[i]$. For each of these finitely many fixed endpoints, [F1] selects the least-indexed such path from the countable family of finite tuples of rational intermediate vertices; the endpoints, including arbitrary points of $A$, remain fixed. Let $K_1$ be the union of these paths with $Q_1$. Then $K_1$ is a nonempty compact connected subset of $\Omega$ with $A\subseteq K_1$: each path is a continuous image of a compact interval, hence compact and connected by [F4] and [F5], the disc $Q_1$ is compact and connected by [F4] and [F5], and every member of the union meets the fixed connected member that is the path from $x_0$ to $c_1$, so [F7] applies. [F1, F2, F3, F4, F5, F6, F7, construct]

2.1 Fix an integer $j\ge1$ and a nonempty compact connected set $K_j\subseteq\Omega$ with $A\subseteq K_j$; the base case $K_1$ is supplied by step 1.4. Put $\delta_j:=\delta(K_j)>0$ by step 1.3 and let $\chi_j:[0,\infty)\to[-1,1]$ be the continuous function $$\chi_j(t):=\max\Bigl\{-1,\ \min\Bigl\{1,\ 1-\frac{8}{\delta_j}\Bigl(t-\frac{\delta_j}{4}\Bigr)\Bigr\}\Bigr\}, \qquad f_j(z):=\chi_j\bigl(d(z,K_j)\bigr).$$ Then $\chi_j=1$ on $[0,\delta_j/4]$ and $\chi_j=-1$ on $[\delta_j/2,\infty)$, so $f_j$ is continuous with $f_j=1$ on $\{z:d(z,K_j)<\delta_j/4\}$ and $f_j=-1$ on $\{z:d(z,K_j)\ge\delta_j/2\}$. [F6, step 1.3, construct, algebra]

3.1 Let $M_j\ge1$ be the least integer with $\{z:d(z,K_j)\le\delta_j/2\}\subseteq D(0,M_j/2)$; such an integer exists because that set is bounded, since compactness gives $B_j^*:=\max_{w\in K_j}|w|<\infty$, and a nearest point $w\in K_j$ gives $|z|\le |w|+|z-w|\le B_j^*+\delta_j/2$ by [F5] and [F6]. The real-coefficient polynomials in the two coordinates form a unital real subalgebra of $C(\overline{D(0,M_j)},\mathbb R)$ containing both coordinate functions, hence separating points, so by [F8] some real-coefficient polynomial $P$ satisfies $\sup_{\overline{D(0,M_j)}}|P-f_j|<1/8$. Since $M_j\ge1$, [F8] lets us approximate the finitely many coefficients of $P$ by rationals so that the resulting rational-coefficient polynomial differs from $P$ by less than $1/8$ uniformly on this disc. Thus some rational-coefficient polynomial $P_j$ satisfies $\sup_{\overline{D(0,M_j)}}|P_j-f_j|<1/4$; take the least-indexed one in the enumeration of [F1]. By [F10] the polynomial $P_j$ is real analytic and $C^\infty$ on the whole plane. [F1, F5, F6, F8, F10, step 2.1, construct]

4.1 Let $Z_j:=\{z:|z|\le M_j,\ \nabla P_j(z)=0\}$, compact by [F5] and continuity of $\nabla P_j$, and let $B_j:=P_j(Z_j)$, which is compact by [F5] and null by [F9] because it is a set of critical values of the $C^\infty$ function $P_j$. The interval $(-\tfrac12,\tfrac12)$ is nondegenerate, so it is not contained in $B_j$ by [F9]; being the complement of the closed set $B_j$ inside an interval, $(-\tfrac12,\tfrac12)\setminus B_j$ is open and nonempty, so by [F1] and [F2] it contains rationals, and we let $t_j$ be its least-indexed rational point. Consequently $\nabla P_j(z)\ne0$ whenever $|z|\le M_j$ and $P_j(z)=t_j$, since otherwise $t_j\in B_j$. [F1, F2, F5, F9, step 3.1, choose]

5.1 Let $D_j$ be the connected component of the open set $\{z:P_j(z)>t_j\}$ containing $K_j$, which exists because $K_j$ is connected and $K_j\subseteq\{P_j>t_j\}$: on $K_j$ we have $d(\cdot,K_j)=0<\delta_j/4$, so $f_j=1$ there by step 2.1, hence $P_j>3/4>t_j$ by steps 3.1 and 4.1. Thus $D_j$ is a nonempty open connected set with $K_j\subseteq D_j$, the inclusion by maximality of components. [F3, step 2.1, step 3.1, step 4.1, construct]

6.1 $D_j\subseteq D(0,M_j)$. Every point $w$ with $|w|=M_j$ has $d(w,K_j)>\delta_j/2$, because $\{z:d(z,K_j)\le\delta_j/2\}\subseteq D(0,M_j/2)$ by step 3.1; hence $f_j(w)=-1$ by step 2.1 and $P_j(w)<-3/4<t_j$ by steps 3.1 and 4.1. So the circle $\{|z|=M_j\}$ is disjoint from $\{P_j>t_j\}$, and the connected set $D_j$, which contains $K_j\subseteq D(0,M_j/2)$, lies in the component $D(0,M_j)$ of the complement of that circle. [F3, step 2.1, step 3.1, step 4.1, step 5.1]

6.2 $D_j\subseteq\Omega$, and $\overline{D_j}$ is a compact subset of $\Omega$. Let $z\in D_j$. If $d(z,K_j)\ge\delta_j/2$ then $f_j(z)=-1$ by step 2.1 and $P_j(z)<-3/4<t_j$ by steps 3.1 and 4.1, contradicting $z\in D_j$; hence $d(z,K_j)<\delta_j/2$, and by step 1.3 and [F6] $d(z,\mathbb C\setminus\Omega)\ge\delta_j-d(z,K_j)>\delta_j/2>0$, so $z\in\Omega$. Passing to closures, [F6] gives $\overline{D_j}\subseteq\{z:d(z,K_j)\le\delta_j/2\}$, and that set is closed, bounded by step 3.1 and contained in $\Omega$ by the same distance inequality, hence compact by [F5]. [F5, F6, step 1.3, step 2.1, step 3.1, step 4.1, step 5.1, contradiction, discharge-contradiction]

7.1 $\partial D_j\subseteq\{z:P_j(z)=t_j\}$, and $\nabla P_j\ne0$ at every point of $\partial D_j$. Let $z_0\in\partial D_j$. Since $D_j\subseteq\{P_j>t_j\}$ and $P_j$ is continuous, while $z_0$ lies in the closure of $D_j$, we get $P_j(z_0)\ge t_j$; and $z_0\in\overline{D_j}\subseteq D(0,M_j)$ by steps 6.1 and 6.2. If $P_j(z_0)>t_j$, then $\{P_j>t_j\}$ contains a disc $B$ around $z_0$; $B$ is connected by [F4] and meets $D_j$ because $z_0$ is a boundary point of $D_j$, so $B\subseteq D_j$ by maximality of components, making $z_0$ an interior point of $D_j$ and contradicting $z_0\in\partial D_j$. Hence $P_j(z_0)=t_j$, and $\nabla P_j(z_0)\ne0$ by step 4.1. [F3, F4, step 4.1, step 6.1, step 6.2, contradiction, discharge-contradiction]

7.2 Construction of the next compact set. Let $y_j$ be the least-indexed point of $\mathbb Q[i]$ lying in $D_j$, which exists by [F1] and [F2] because $D_j$ is nonempty and open, let $c_{j+1}$ be the centre of $Q_{j+1}$, and let $P_{j+1}$ be the union of the two least-indexed polygonal paths whose intermediate vertices lie in $\mathbb Q[i]$, from $x_0$ to $y_j$ and from $x_0$ to $c_{j+1}$. These paths exist by the argument of step 1.4; their endpoints are rational as well. Then $$K_{j+1}:=\overline{D_j}\cup Q_{j+1}\cup P_{j+1}$$ is a nonempty compact connected subset of $\Omega$ with $A\subseteq K_{j+1}$, so that the construction of step 2.1 can be applied to it: compactness follows from [F5] and step 6.2, and connectedness from [F7], because $\overline{D_j}$ meets $P_{j+1}$ at $y_j$, while $Q_{j+1}$ meets $P_{j+1}$ at $c_{j+1}$, and each of the three members is connected by [F3], [F4] and step 6.2. Moreover $A\subseteq K_j\subseteq D_j\subseteq K_{j+1}$. [F1, F2, F3, F4, F5, F7, step 1.4, step 6.2, construct]

8.1 The boundary $\partial D_j$ is real-analytic regular. Fix $z_0\in\partial D_j$. By step 7.1, after relabelling axes, $D_yP_j(z_0)\ne0$. Apply the inverse assertion of [F11] to $H(x,y)=(x,P_j(x,y)-t_j)$, whose Jacobian determinant at $z_0$ is $D_yP_j(z_0)$. Restrict its analytic inverse $K$ to a rectangle $V=I\times(-\epsilon,\epsilon)$ about $H(z_0)$ and put $U=K(V)$. The first coordinate identity forces $K(x,s)=(x,k(x,s))$. Thus the zero set in $U$ is the graph $y=g(x):=k(x,0)$, and the positive and negative sides are respectively $K(I\times(0,\epsilon))$ and $K(I\times(-\epsilon,0))$. Both are connected, being continuous images of convex rectangles; they are the two components of the complement of the graph in $U$. The positive side meets $D_j$ since $z_0\in\partial D_j$, so maximality of the component $D_j$ puts that whole side in $D_j$. Conversely $D_j\cap U$ lies in that side by its definition. Every graph point is approached by points of the positive side and belongs to neither open side, hence $\partial D_j\cap U$ is exactly the graph. This proves the required one-sided regularity without assuming the sign of $D_yP_j$. The same local argument with the negative side applies to the discs in step 1.1. [F3, F4, F10, F11, step 7.1, construct]

8.2 Applying the construction of steps 2.1 through 5.1 to the admissible set $K_{j+1}$ of step 7.2 produces the connected component $D_{j+1}$ of $\{P_{j+1}>t_{j+1}\}$ containing $K_{j+1}$, so $K_{j+1}\subseteq D_{j+1}$. Since $D_j\subseteq\overline{D_j}\subseteq K_{j+1}$ by step 7.2 and $D_{j+1}$ is a component, maximality of components yields $D_j\subseteq D_{j+1}$. [F3, step 2.1, step 3.1, step 4.1, step 5.1, step 7.2]

9.1 Every compact $K\subseteq\Omega$ lies in $D_m$ for all sufficiently large $m$. By step 1.2 there is $N$ with $K\subseteq Q_1\cup\cdots\cup Q_N$. For each $m\ge1$ the set $Q_m$ satisfies $Q_m\subseteq K_m$ by steps 1.4 and 7.2, and $K_m\subseteq D_m$ by step 5.1 applied to $K_m$, while $D_m\subseteq D_{m'}$ for $m'\ge m$ by step 8.2; hence $K\subseteq D_N\subseteq D_{m'}$ for every $m'\ge N$. [step 1.2, step 1.4, step 5.1, step 7.2, step 8.2, cases]

10.1 The sequence $D_1\subseteq D_2\subseteq\cdots$ obtained by applying steps 2.1 through 7.2 inductively, starting from $K_1$ of step 1.4, consists of nonempty relatively compact connected open subsets of $\Omega$ with real-analytic regular boundary by steps 6.2 and 8.1, contains $A$ in $D_1$ because $A\subseteq K_1\subseteq D_1$ by steps 1.4 and 5.1, and exhausts $\Omega$ in the required sense by step 9.1. Every selection made above is either a finite selection or a least-index selection in one of the fixed at most countable families of [F1], or the least-indexed rational point of a nonempty open set, whose existence is [F2]; no choice principle was used. [F1, F2, step 5.1, step 6.2, step 7.2, step 8.1, step 8.2, step 9.1] ∎
