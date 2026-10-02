---
id: lem-cocompact-free-affine-plane-action-is-a-lattice
kind: lemma
title: "A compact free affine plane quotient comes from a rank-two lattice"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-properly-discontinuous-group-action
  - def-axiom-of-choice
  - cor-entire-biholomorphisms-are-affine
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - thm-compactness-under-continuous-maps
  - def-quotient-topology
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-compact-space
  - lem-compactness-of-a-subspace-is-ambient
  - def-deck-transformation-and-deck-group
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 2, Theorem 2.6, printed p. 7: classification of plane quotients as C, C*, or C/Lambda; lattice case for compact quotients."
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §5, Theorems 5.1–5.2, printed pp. 115–116: quotient classification by universal-cover type."
---

## Statement

Assume the Axiom of Choice. Let $G$ be a group of biholomorphisms of the
complex plane acting freely and properly discontinuously, and suppose the
quotient $\mathbb C/G$ is compact. Then every nonidentity element of $G$ is a
translation $z\mapsto z+\lambda$ with $\lambda\neq0$, the translation group
$G$ is a rank-two lattice $\mathbb Zv+\mathbb Zw$ with $v,w$ linearly
independent over $\mathbb R$, and $\mathbb C/G$ is a complex torus of genus
one.

## Facts & Assumptions
**Given:** The Axiom of Choice is assumed. A group $G$ of biholomorphisms of $\mathbb C$ acts freely and properly discontinuously, and the quotient $\mathbb C/G$, with its quotient topology, is compact. Write $g\cdot z$ for the action, $q:\mathbb C\to\mathbb C/G$ for the quotient map, and $\Lambda:=\{\lambda\in\mathbb C:(z\mapsto z+\lambda)\in G\}$.

[F1] The Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] Every biholomorphic self-map of the complex plane is affine: $f(z)=az+b$ with $a,b\in\mathbb C$ and $a\neq0$ ([[cor-entire-biholomorphisms-are-affine]]).

[F3] The action of $G$ is free when no nonidentity element fixes a point, and properly discontinuous when for every compact subset $K\subseteq\mathbb C$ the set $\{g\in G:g\cdot K\cap K\neq\varnothing\}$ is finite ([[def-properly-discontinuous-group-action]]).

[F4] A covering map $p:E\to B$ is a continuous surjection such that every point of $B$ has an evenly covered neighbourhood $U$ whose preimage is a disjoint union of open sheets each mapped homeomorphically onto $U$ ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F5] A deck transformation of a covering is an isomorphism over the base, and for a covering with connected total space two deck transformations agreeing at one point are equal ([[def-deck-transformation-and-deck-group]], [[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]).

[F6] A space is compact when every open cover has a finite subcover; a compact subset carries the intrinsic compactness of its subspace topology ([[def-compact-space]]). Ambient open covers of a compact subset have finite subcovers ([[lem-compactness-of-a-subspace-is-ambient]]).

[F7] Continuous images of compact sets are compact, and a continuous bijection from a compact space onto a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

[F8] For the quotient map $q$ with the quotient topology on $\mathbb C/G$, a subset $V\subseteq\mathbb C/G$ is open if and only if $q^{-1}(V)$ is open in $\mathbb C$ ([[def-quotient-topology]]).

[F9] For $n\ge1$, $c\in\mathbb R^n$ and $r>0$ the Euclidean closed ball $\overline B_2(c,r)$ is compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F10] On a compact Riemann surface the genus is the number $g$ with $X\cong\#_gT^2$ in the homeomorphism type supplied by the topological classification of compact surfaces; the definition assumes the Axiom of Choice ([[def-genus-and-euler-characteristic-compact-riemann-surface]]).



**Proof technique:** direct.

## Proof

1.1 Every $g\in G$ is a biholomorphism of $\mathbb C$, so $g(z)=az+b$ with $a,b\in\mathbb C$, $a\neq0$. [F2, given]

1.2 $G$ is nontrivial: if $G=\{e\}$ then the quotient map $q$ is a bijection, so [F8] makes $q$ a homeomorphism and $\mathbb C/G\cong\mathbb C$. The discs $D(0,n)$ for $n\ge1$ cover $\mathbb C$, while any finitely many of them, $D(0,n_1),\dots,D(0,n_k)$, are all contained in $D(0,N)$ with $N:=\max_{1\le i\le k}n_i$, a proper subset of $\mathbb C$; so no finite subfamily covers $\mathbb C$, and $\mathbb C$ is not compact. This contradicts the hypothesis that $\mathbb C/G$ is compact. [F6, F8, given, contradiction]

2.1 Suppose $a\neq1$ for some $g\in G$ of the form $g(z)=az+b$. Then $z_0:=b/(1-a)$ satisfies $g(z_0)=z_0$, so freeness forces $g=e$; but the identity map is $z\mapsto 1\cdot z+0$, whose linear coefficient is $a=1$, a contradiction. Hence $a=1$ for every $g\in G$, that is, every element of $G$ is a translation $z\mapsto z+\lambda$, and the identity corresponds to $\lambda=0$ while every nonidentity element corresponds to a nonzero $\lambda$. [F2, F3, step 1.1, algebra]

3.1 Composition of translations adds vectors and inverses subtract them, so $\Lambda=\{\lambda\in\mathbb C:(z\mapsto z+\lambda)\in G\}$ is a subgroup of $(\mathbb C,+)$ containing $0$, and $G=\{t_\lambda:\lambda\in\Lambda\}$ where $t_\lambda(z)=z+\lambda$; in particular $g\cdot z=z+\lambda$ for $g=t_\lambda$. By step 1.2 this subgroup is nontrivial, so $\Lambda\ne\{0\}$. [step 1.2, step 2.1, algebra]

4.1 The closed unit disc $K:=\overline{D(0,1)}\subseteq\mathbb C$ is compact. Proper discontinuity applied to $K$ makes $S:=\{g\in G:g\cdot K\cap K\neq\varnothing\}$ finite. If $\lambda\in\Lambda$ with $|\lambda|\le2$, then $z:=\lambda/2$ has $|z|\le1$ and $|z-\lambda|=|-\lambda/2|\le1$, so $z\in K$ and $z-\lambda\in K$, whence $z=(z-\lambda)+\lambda\in(K+\lambda)\cap K=t_\lambda\cdot K\cap K\neq\varnothing$ and $t_\lambda\in S$. Therefore $\Lambda\cap\overline{D(0,2)}$ is contained in the set of translation vectors of the finite set $S$, so it is finite. [F3, F9, step 3.1, algebra]

4.2 The quotient map $q$ is open: for open $V\subseteq\mathbb C$ one has $q^{-1}(q(V))=\bigcup_{\lambda\in\Lambda}(V+\lambda)$, a union of open sets, hence open in $\mathbb C$, so $q(V)$ is open in $\mathbb C/G$ by [F8]. [F8, step 3.1, algebra]

5.1 The finite set $\Lambda\cap\overline{D(0,2)}$ is either $\{0\}$ or contains an element of positive modulus; in the first case put $\rho:=1$, and in the second case put $\rho:=\min\{|\lambda|:\lambda\in\Lambda,\ 0<|\lambda|\le2\}>0$, a minimum of a finite nonempty set of positive real numbers. In both cases $\Lambda\cap D(0,\rho)=\{0\}$. Since $\Lambda$ is an additive subgroup, every $\lambda_0\in\Lambda$ then satisfies $\Lambda\cap D(\lambda_0,\rho)=\{\lambda_0\}$: if $\lambda\in\Lambda$ with $|\lambda-\lambda_0|<\rho$, then $\lambda-\lambda_0\in\Lambda\cap D(0,\rho)=\{0\}$. Thus distinct elements of $\Lambda$ have distance at least $\rho$, and $\Lambda$ is discrete. Every compact subset of $\mathbb C$ is covered by finitely many discs of radius $\rho/3$, each meeting $\Lambda$ in at most one point, so it meets $\Lambda$ in a finite set. In particular, if $\Lambda\neq\{0\}$ and $w\in\Lambda\setminus\{0\}$, the set $\Lambda\cap\overline{D(0,|w|)}$ is finite and nonempty, and its element of least positive modulus is an element of $\Lambda\setminus\{0\}$ of least modulus overall. [F3, F6, step 4.1, algebra]

6.1 By step 5.1 and step 3.1 choose $v\in\Lambda\setminus\{0\}$ of least modulus. Let $L:=\mathbb Rv$, let $P:\mathbb C\to L^\perp$ be the orthogonal projection onto the real line perpendicular to $v$, and let $H:=P(\Lambda)$, a subgroup of $(L^\perp,+)$, which we identify with $(\mathbb R,+)$. [step 5.1, step 3.1, choose]

6.2 A discrete subgroup $\Gamma$ of $(\mathbb R,+)$ is either $\{0\}$ or of the form $\mathbb Z\gamma$ for some $\gamma\neq0$: if $\Gamma\neq\{0\}$ and $x_1\in\Gamma\setminus\{0\}$, then $\Gamma\cap[-|x_1|,|x_1|]$ is finite by discreteness, so there is $\gamma\in\Gamma\setminus\{0\}$ of least modulus, and for arbitrary $x\in\Gamma$ Euclidean division gives $m\in\mathbb Z$ with $|x-m\gamma|\le|\gamma|/2<|\gamma|$; the element $x-m\gamma\in\Gamma$ therefore vanishes and $x=m\gamma$. [step 5.1, algebra]

6.3 The quotient map $q$ is a covering map. Let $\varepsilon:=\inf\{|\lambda|:\lambda\in\Lambda\setminus\{0\}\}>0$, where positivity holds by step 5.1. For $z\in\mathbb C$ put $D_z:=D(z,\varepsilon/3)$ and $U_z:=q(D_z)$. If $w,w'\in D_z$ with $q(w)=q(w')$ then $w-w'\in\Lambda$ and $|w-w'|<2\varepsilon/3<\varepsilon$, so $w=w'$; thus $q|_{D_z}$ is a bijection onto $U_z$, and it is a homeomorphism because for open $A\subseteq D_z$ the set $q(A)$ is open in $\mathbb C/G$ by step 4.2, hence open in $U_z$. Moreover $q^{-1}(U_z)=\bigcup_{\lambda\in\Lambda}D(z+\lambda,\varepsilon/3)$: a point of $D(z+\lambda,\varepsilon/3)$ has the form $u+\lambda$ with $u\in D_z$ and maps to $q(u)\in U_z$, and conversely $q(w)\in U_z$ means $w=u+\lambda$ with $u\in D_z$, $\lambda\in\Lambda$. These discs are pairwise disjoint, because $D(z+\lambda,\varepsilon/3)\cap D(z+\lambda',\varepsilon/3)\neq\varnothing$ with $\lambda\neq\lambda'$ would give $|\lambda-\lambda'|<2\varepsilon/3<\varepsilon$; and on the disc with index $\lambda$ the map $q$ equals $q|_{D_z}\circ t_{-\lambda}$, a homeomorphism onto $U_z$. Hence $U_z$ is an evenly covered neighbourhood of $q(z)$ and $q$ is a covering map. [F4, step 5.1, step 4.2, algebra]

7.1 The subgroup $H$ is discrete. If it were not, then taking $\sigma=|v|/2$ there would be $0\neq h\in H$ with $|h|<|v|/2$; choose $\lambda\in\Lambda$ with $P(\lambda)=h$ and write $\lambda=tv+h$ with $t\in\mathbb R$, choose $m\in\mathbb Z$ with $|t-m|\le1/2$, and set $\lambda':=\lambda-mv\in\Lambda$. Then $\lambda'=(t-m)v+h\neq0$ because $h\neq0$, while $|\lambda'|^2\le|v|^2/4+|h|^2<|v|^2/2$, so $|\lambda'|<|v|$, contradicting the minimality of $|v|$ among nonzero elements of $\Lambda$. Hence $H\cap D(0,|v|/2)=\{0\}$, and the finite-minimum argument of step 5.1 applied inside the line $L^\perp\cong\mathbb R$ shows that $H$ is discrete. [step 6.1, step 5.1, choose, contradiction]

7.2 The maps $\varphi_z:=(q|_{D_z})^{-1}:U_z\to D_z\subseteq\mathbb C$ of step 6.3 are homeomorphisms onto open subsets of $\mathbb C$, and the sets $U_z$ cover $\mathbb C/G$. If $W:=U_z\cap U_{z'}\ne\varnothing$, then on each connected component $C_0$ of $\varphi_z(W)$ the difference $u\mapsto\varphi_{z'}(q(u))-u$ is a continuous map into the discrete group $\Lambda$, hence is constant. Thus each transition map is a translation on each component of its domain, so these charts define a compatible holomorphic atlas; in each chart the local expression of $q$ is the identity. The quotient is second countable: since $q$ is open by step 4.2, the images of a countable basis of $\mathbb C$ form a basis of $\mathbb C/G$. Hausdorffness is established after the lattice structure is determined. [F8, step 5.1, step 6.3, step 4.2, given]

8.1 $H\neq\{0\}$: suppose $H=\{0\}$, so that $\Lambda\subseteq L$. Choose a nonzero $\mathbb R$-linear functional $\ell:\mathbb C\to\mathbb R$ vanishing on $L$. Since $\ell(\lambda)=0$ for every $\lambda\in\Lambda$, the formula $\bar\ell([z]):=\ell(z)$ defines a map $\bar\ell:\mathbb C/G\to\mathbb R$; it is surjective because $\ell$ is a surjective linear map, and it is continuous: for every open interval $(a,b)\subseteq\mathbb R$ its preimage satisfies $q^{-1}(\bar\ell^{-1}(a,b))=\ell^{-1}(a,b)$, which is open in $\mathbb C$, so $\bar\ell^{-1}(a,b)$ is open in $\mathbb C/G$ by [F8]. Then $\mathbb R=\bar\ell(\mathbb C/G)$ is a continuous image of the compact space $\mathbb C/G$, hence compact. But the open cover $\{(-n,n):n\ge1\}$ of $\mathbb R$ has no finite subcover, since a finite subcover is contained in $(-N,N)$ for the largest index $N$ and omits $N+1$; this contradiction shows $H\neq\{0\}$. [F6, F7, F8, step 7.1, contradiction]

9.1 Choose $w\in\Lambda$ with $P(w)=h$, where $h\neq0$ generates $H=\mathbb Zh$ as in step 6.2, and let $m\in\mathbb Z$ with $P(\lambda)=mh$ for a given $\lambda\in\Lambda$. Then $\lambda-mw\in\Lambda\cap\ker P=\Lambda\cap L$, a discrete subgroup of the line $L$ containing $v$; applying step 6.2 inside $L\cong\mathbb R$ and using the minimality of $|v|$ gives $\Lambda\cap L=\mathbb Zv$, so $\lambda=mw+nv$ for some $n\in\mathbb Z$. Hence $\Lambda=\mathbb Zv+\mathbb Zw$. Finally $v$ and $w$ are linearly independent over $\mathbb R$: if $tv+sw=0$ with $s\neq0$, then projecting onto $L^\perp$ gives $0=P(tv+sw)=tP(v)+sP(w)=sP(w)=sh\neq0$, a contradiction; hence $s=0$, and then $tv=0$ with $v\neq0$ gives $t=0$. So the only real relation is the trivial one. [step 7.1, step 6.2, step 8.1, choose, algebra]

10.1 The deck group of the covering $q$ is exactly $\{t_\lambda:\lambda\in\Lambda\}$. Each $t_\lambda$ with $\lambda\in\Lambda$ satisfies $q\circ t_\lambda=q$, so it is a deck transformation. Conversely, if $h$ is a deck transformation, then $q(h(0))=q(0)$, so $h(0)\in q^{-1}(q(0))=\Lambda$, and the translation $t_{h(0)}$ is a deck transformation with $t_{h(0)}(0)=h(0)$; the total space $\mathbb C$ is connected, so $h=t_{h(0)}$ by [F5]. [F5, step 6.3, step 9.1]

10.2 Let $T:\mathbb R^2\to\mathbb C$ be the $\mathbb R$-linear isomorphism $T(s,t):=sv+tw$ of step 9.1; it carries $\mathbb Z^2$ bijectively onto $\Lambda$, so the formula $\bar T([(s,t)]):=q(T(s,t))$ is well defined, and it is a bijection $\bar T:\mathbb R^2/\mathbb Z^2\to\mathbb C/G$ because $T$ and $q$ are onto and $T(x)-T(y)\in\Lambda$ forces $x-y\in\mathbb Z^2$; it is continuous because $\bar T$ composed with the quotient map is the continuous map $q\circ T$. The set $\Lambda$ is closed in $\mathbb C$: if $x$ were a limit of points of $\Lambda$ outside $\Lambda$, two nearby points $\lambda,\lambda'\in\Lambda$ would give $0<|\lambda-\lambda'|<\rho$ with the $\rho$ of step 5.1, contradicting $\Lambda\cap D(0,\rho)=\{0\}$. Hence for distinct classes $[z]\neq[z']$ the number $\delta:=\operatorname{dist}(z-z',\Lambda)$ is positive, and the open sets $q(D(z,\delta/2))$, $q(D(z',\delta/2))$ are disjoint: a common class would give $u\in D(z,\delta/2)$, $u'\in D(z',\delta/2)$ with $u-u'\in\Lambda$, forcing $\operatorname{dist}(z-z',\Lambda)<\delta$. So $\mathbb C/G$ is Hausdorff. The quotient $\mathbb R^2/\mathbb Z^2$ is compact, being a continuous image of the compact square $[0,1]^2$. A continuous bijection from a compact space onto a Hausdorff space is a homeomorphism, so $\bar T$ is a homeomorphism and $\mathbb C/G$ is compact and Hausdorff; together with step 7.2's second-countable topology and holomorphic atlas, this makes $\mathbb C/G$ a compact Riemann surface. [F7, step 5.1, step 9.1, step 4.2, step 7.2, given]

11.1 The standard torus $S^1\times S^1$ is the connected sum of one copy of itself, hence is $\#_1T^2$ in the notation of [F10], and step 10.2 identifies the compact Riemann surface $\mathbb C/G$ with it. By the definition of genus [F10] and the uniqueness of the homeomorphism type in the topological classification, the genus of $\mathbb C/G$ is $1$. Steps 2.1, 9.1, 10.1 and 10.2 therefore exhibit $\mathbb C/G$ as the complex torus $\mathbb C/(\mathbb Zv+\mathbb Zw)$ whose deck group of translations is the rank-two lattice $\Lambda=\mathbb Zv+\mathbb Zw\cong G$. The only use of the Axiom of Choice is through the genus definition [F10], which assumes it; every choice made in the argument itself was finite. [F1, F10, step 2.1, step 9.1, step 10.1, step 10.2] ∎
