---
page: proper-cohomological-descent-and-constructible-hypercovers-examples
title: "Proper Cohomological Descent And Constructible Hypercovers — Examples"
status: draft
requires: [proper-cohomological-descent-and-constructible-hypercovers, relative-homology-excision-and-mayer-vietoris, singular-cohomology-and-coefficient-theorems]
examples: [ex-proper-cech-descent-does-not-require-acyclic-fibers, ex-hypercover-total-degree-uses-only-a-finite-matching-truncation]
items: []
---

**Objective.** This companion page isolates the two boundary phenomena of
[[proper-cohomological-descent-and-constructible-hypercovers]]. Both items are
dependency leaves: each is a concrete computation over the theorem proved on
the main page, and the only choice principle that appears is the one inherited
through the proper Cech descent lemma and the field-duality corollary. The
examples are complementary: the first shows that the descent quasi-isomorphism
does not need acyclic fibers, and the second pins down the exact finite
truncation that determines a given total degree, including the sharpness of
the one-level gap.

## Examples

[[ex-proper-cech-descent-does-not-require-acyclic-fibers]] takes
$S=\mathbb P^1(\mathbb C)$, realized by gluing two affine lines along their
punctured overlaps by $z=1/w$ and identified with the Riemann sphere
$\widehat{\mathbb C}$. The terminal morphism $f:S\to\mathrm{pt}$ is proper
surjective, and its single fiber is shown to be non-acyclic: stereographic
projection is a homeomorphism onto $S^2$, so
$H_2(S;k)\cong H_2(S^2;k)\cong k$ and the field-dual corollary gives
$H^2(S;k)\cong k\neq0$. Nevertheless the augmented Cech complex computes the
constant sheaf: choosing one point of $S$ and inserting it as first coordinate
contracts every augmented row
$H^q(k)\to H^q(S,k)\to H^q(S^2,k)\to\cdots$, including the $q=2$ row, whose
term at $p=0$ is the nonzero group $H^2(S;k)$. The unaugmented product total
$\operatorname{Tot}_{p\geq0}R\Gamma(S^{p+1},k)$ therefore has cohomology $k$
in degree $0$ and zero elsewhere. This gives a witness that proper
Cech descent requires no fiber acyclicity, even for a fiber with nonzero
positive-degree cohomology.

[[ex-hypercover-total-degree-uses-only-a-finite-matching-truncation]] records
the degree bookkeeping behind the hypercover theorem. With cochain lower bound
$a$, a term in bidegree $(p,q)$ of the total complex contributes to total
degree $p+q$, so degree $m$ involves only levels $p\leq m-a$, while the
differential entering or leaving degree $m$ reaches $p=m-a+1$; consequently
every truncation $\operatorname{cosk}_N\operatorname{sk}_NX_\bullet$ with
$N\geq m-a+1$ computes the same $H^m(X,F)$ and the same augmentation maps. For
the constant sheaf $F=k_X$ the bound is $a=0$, so degree $n$ uses levels
through $n+1$. This bound is sharp for hard truncation of the cochain terms:
for the Cech nerve of two points over a point, discarding all terms above
level $n$ and its outgoing differential gives top cohomology $k$ for $n>0$
and $k^2$ for $n=0$, instead of the full answer $0$ and $k$, respectively.
Coskeleton truncation reconstructs higher levels from matching limits and
still gives a proper hypercover computing $H^n$.
