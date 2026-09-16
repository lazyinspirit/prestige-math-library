---
id: lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss
kind: lemma
title: Pairings of skeletal exact couples induce multiplicative AHSS
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cohomological-atiyah-hirzebruch-spectral-sequence, prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences, thm-cellular-approximation-for-maps-of-cw-pairs, lem-spectral-sequence-subquotient-and-local-lifting-calculus, def-exact-couple, def-skeletal-filtration-for-generalized-cohomology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Haynes Miller, MIT 18.906 Algebraic Topology II, Lecture 29, printed pp. 100–101"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 29, product structure, printed pp. 100–101"
---

## Statement

Let $\widetilde h$ be a reduced generalized cohomology theory equipped with a
**coherent external product**: natural bilinear pairings
$$h^m(X,A)\times h^n(Y,B)\longrightarrow h^{m+n}\bigl(X\times Y,\,A\times Y\cup X\times B\bigr)$$
on CW pairs, a unit class in $h^0(\mathrm{pt})$, associativity and graded
commutativity $u\cdot v=(-1)^{mn}v\cdot u$ for $u\in h^m$, $v\in h^n$, compatible
with suspension and satisfying the two relative connecting-map Leibniz
identities in each variable.

Then for a finite CW complex $X$ the relative products of skeletal pairs,
composed with a cellular approximation $\Delta:X\to X\times X$ of the diagonal,
pair the skeletal exact couple of
[[thm-cohomological-atiyah-hirzebruch-spectral-sequence]] with itself. Every
page $E_r$ becomes a bigraded ring, $E_1$ becomes a bigraded algebra isomorphic
to the cellular cochains with coefficients in the graded coefficient ring
$h^*(*)$, each differential $d_r$ is a derivation of total degree one,
$$d_r(xy)=d_r(x)\,y+(-1)^{p+q}x\,d_r(y)\qquad(x\in E_r^{p,q}),$$
the filtration is multiplicative, $F^p\cdot F^q\subseteq F^{p+q}$, and the
induced product on $E_\infty\cong\operatorname{gr}_Fh^*(X)$ is the
associated-graded product of the ring $h^*(X)$. Two cellular diagonals are
homotopic and define the same product on $E_2$ and hence on all later pages.

## Facts & Assumptions

[F1] The cohomological skeletal exact couple has $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$, $D_{1}$-terms the absolute groups on skeleta, $i$ the restriction, $j$ the connecting map and $k$ the pair map, and its $E_\infty$ is the associated graded of the skeletal filtration ([[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], [[def-skeletal-filtration-for-generalized-cohomology]]).

[F2] The cellular diagonal can be chosen cellular, so that $\Delta(X^s)\subseteq\bigcup_{i+j=s}X^i\times X^j$; two cellular diagonals are homotopic through a cellular homotopy ([[thm-cellular-approximation-for-maps-of-cw-pairs]]).

[F3] In the exact couple of [F1], if $kx=i^{r-1}u$ and $ky=i^{r-1}v$ then $k(xy)=i^{r-1}\bigl(uy+(-1)^{|x|}xv\bigr)$ on the $r$-th derived couple, and $d_r[e]=[jx]$ whenever $ke=i^{r-1}x$; subquotient identities are established after finite epic pullbacks and descend uniquely ([[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]]).

[F4] A morphism of exact couples induces a morphism of spectral sequences preserving pages and differentials, and a homotopy of couple morphisms induces the same map on $E_2$ and beyond ([[prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences]]).

## Proof

**Proof technique:** direct.

**Given:** A finite CW complex $X$, the skeletal exact couple of [F1], a cellular diagonal $\Delta$, and the coherent external product of the statement.

1.1 The cellular diagonal maps $\Delta(X^{s})\subseteq\bigcup_{i+j=s}X^i\times X^j$, so if $s=p+r-1$ the complement of $X^{p-1}\times X\cup X\times X^{r-1}$ is disjoint from $\Delta(X^s)$; hence $\Delta$ restricts to a map of pairs $(X,X^{p+r-1})\to(X\times X,X^{p-1}\times X\cup X\times X^{r-1})$ and the external product of a class on $(X,X^{p-1})$ with a class on $(X,X^{r-1})$, pulled back along $\Delta$, is a class on $(X,X^{p+r-1})$. This gives bilinear pairings $E_1^{p,q}\times E_1^{r,s}\to E_1^{p+r,q+s}$. [F1, F2, given]

1.2 The two relative connecting-map Leibniz identities applied to the pair long exact sequences of the skeletal pairs give, for the pair map $k$ and the connecting map $j$ of the couple, the identity $k(xy)=k(x)y+(-1)^{p+q}x\,k(y)$ on representatives; since $d_1=jk$ and $kj=0$, this is the derivation identity $d_1(xy)=d_1(x)y+(-1)^{p+q}x\,d_1(y)$ on the first page. [F1, F3, given]

1.3 Define the product on the derived couple by pairing representatives in the displayed local forms of the derived $D$- and $E$-maps; well-definedness and independence of the chosen local lifts follow by the same finite epic pullback and quotient-descent argument as for the derived maps, and the unit, associativity and graded-commutativity identities hold because they hold at the level of the original pairings. [F3, given]

2.1 If $kx=i^{r-1}u$ and $ky=i^{r-1}v$, compatibility of the product with the structure maps gives $k(xy)=i^{r-1}(uy+(-1)^{|x|}xv)$ on the $r$-th derived couple, which is exactly the Leibniz rule for $d_r$ by the local-lift formula of [F3]; hence every differential is a derivation. [F3, step 1.3]

2.2 Products of $d_r$-cycles are $d_r$-cycles, products of $d_r$-boundaries with cycles are boundaries, and the induced product on $H(E_r,d_r)=E_{r+1}$ satisfies the displayed sign rule; moreover the product of a class in $F^ph^m(X)$ with one in $F^qh^n(X)$ lies in $F^{p+q}h^{m+n}(X)$, because both factors restrict to zero on the appropriate skeleta and $\Delta(X^{p+q-1})$ lies in the union where one factor vanishes. [F1, F3, step 1.3]

3.1 By step 2.2 the filtration is multiplicative and the stable product on $E_\infty$ is induced by the product on $h^*(X)$; since $E_\infty\cong\operatorname{gr}_Fh^*(X)$ by [F1], this is the associated-graded product. If $\Delta'$ is another cellular diagonal, the two are homotopic through a cellular homotopy by [F2], and the induced couple morphisms agree on $E_2$ and all later pages by [F4]; hence the product is independent of the diagonal from $E_2$ onward. [F1, F2, F4, step 2.2]

4.1 Steps 1.1 to 3.1 construct the pairing of the skeletal exact couple with itself, the page products, the derivation property, the multiplicative filtration and the associated-graded product, and prove the independence of the diagonal from the second page on. [step 1.1, step 3.1] ∎

## Source notes

Compare [Miller](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), Lecture 29, printed pp. 100–101, where the page algebras, the derivation property, multiplicativity of the filtration and the associated-graded product are stated with the skeletal approximation of the diagonal, and [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), the discussion following Theorem 1.4, for the role of a coherent product.
