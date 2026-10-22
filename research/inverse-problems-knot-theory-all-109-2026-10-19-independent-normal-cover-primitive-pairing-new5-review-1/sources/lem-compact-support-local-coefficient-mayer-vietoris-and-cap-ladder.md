---
id: lem-compact-support-local-coefficient-mayer-vietoris-and-cap-ladder
kind: lemma
title: Compact-support local Mayer–Vietoris and its cap ladder without choice
status: draft
origin: pipeline
deps:
  - def-compactly-supported-cohomology-with-local-coefficients
  - def-cup-and-cap-products-with-local-coefficient-pairings
  - lem-canonical-twisted-fundamental-classes-over-compact-subsets
  - thm-excision-and-mayer-vietoris-with-local-coefficients
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Hatcher, Algebraic Topology, proof of Poincare duality and local
        coefficients, Chapters 3.3 and 3.H
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

Let $X$ be a Hausdorff manifold, $X=U\cup V$ an open cover, and $\mathcal L$ a local system of abelian groups. There is a natural exact sequence
$$\cdots\to H_c^p(U\cap V;\mathcal L)\to H_c^p(U;\mathcal L)\oplus H_c^p(V;\mathcal L)\to H_c^p(X;\mathcal L)\to H_c^{p+1}(U\cap V;\mathcal L)\to\cdots.$$
The maps into the union are extension maps obtained by excision. If $X$ is oriented of dimension $n$, cap with its compatible integral compact-support orientation classes compares this sequence with homology Mayer–Vietoris in degrees $n-p$. The ladder commutes when the homology connecting map leaving degree $n-p$ is multiplied by $(-1)^{p+1}$. No choice principle is assumed. All maps respect a coefficient-ring action commuting with the local transports.

## Facts & Assumptions

**Given:** The cover and ambient local system; in the cap assertion, the supplied orientation.

[F1] Compact-support classes have compact representatives and equality is witnessed at a common larger compact support. [[def-compactly-supported-cohomology-with-local-coefficients]]

[F2] Local chains admit the explicit least-subdivision small-chain deformation, excision and Mayer–Vietoris. [[thm-excision-and-mayer-vietoris-with-local-coefficients]]

[F3] Compatible canonical support orientation classes exist without choice; the supplied orientation trivializes the orientation local system. [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]]

[F4] The cohomology-first cap satisfies $\partial(\alpha\cap c)=(-1)^p(\alpha\cap\partial c-\delta\alpha\cap c)$ and is natural for coefficient transports. [[def-cup-and-cap-products-with-local-coefficient-pairings]]

## Proof

1.1 For compact $K,L\subset X$, write $C=C_*^{\mathrm{sing}}(X;\mathbb Z)$ and $A_K=C_*(X\setminus K;\mathbb Z)$, with analogous notation for $L$. Local cochains vanishing on $A_K$ are the relative local complex denoted $D_K$. Simplex by simplex, addition gives an onto map $D_K\oplus D_L\to D_{K\cup L}$: a simplex not entirely outside $K\cup L$ is not entirely outside at least one of $K,L$, so place its assigned coefficient in the first allowed summand. This is a degreewise lift, not asserted to commute with coboundaries. Its kernel consists of pairs $(a,-a)$ with $a$ vanishing on $A_K+A_L$. Thus there is a short exact cochain sequence with that kernel. The latter cochain complex computes the relative local cohomology supported in $K\cap L$. Indeed $X\setminus K$ and $X\setminus L$ are open and cover $X\setminus(K\cap L)$; [F2] replaces their small-chain sum by the full complement. To see the relative comparison on cochains explicitly, extend its small-chain homotopy $D$ to all ambient simplex generators by zero on simplices not contained in this complement. Then $1-\partial D-D\partial$ maps complement chains to their small-chain sum and fixes the sum, while $D$ vanishes on the sum. The resulting quotient maps are inverse up to the displayed chain homotopy; transporting coefficients along the same affine paths gives the identical local-cochain comparison. Taking cohomology gives the supported exact sequence. [F2, given, construct, algebra]

2.1 Restrict to pairs $K\subset U$, $L\subset V$ compact. These unions are cofinal among compact supports in $X$. For any compact $Q\subset X$, choose finitely many relatively compact coordinate neighborhoods whose closures lie in one of $U,V$ and whose interiors cover $Q$. The union of the closures assigned to $U$, intersected with $Q$, is a compact $K\subset U$; the analogous construction gives $L\subset V$, with $Q=K\cup L$. Only one finite cover is selected. The intersections $K\cap L$ are cofinal for compact subsets of $U\cap V$, since one may take $K=L$ equal to any such compact set. Excision in [F2] identifies the groups supported in $K$, $L$ and $K\cap L$ with their groups in $U$, $V$ and $U\cap V$. Take the filtered colimit of the exact sequences of step 1.1. It is exact directly: a representative in a colimit kernel vanishes at one common larger pair of supports, where exactness supplies its lift; a zero representative of a lift also becomes zero at a common larger pair. With [F1] this gives exactly the displayed compact-support sequence and its extension maps. [F1, F2, step 1.1, construct, algebra]

3.1 For the cap assertion, use the support class of [F3] on $K\cup L$, whose restrictions are the two smaller support classes. Subdivide a finite representative orientation chain so that every simplex lies either in $U$ or outside $K$, and either in $V$ or outside $L$; the two open covers and the finite chain allow one common finite subdivision by [F2]. If $\alpha=\alpha_U+\alpha_V$ is a degree-$p$ supported cocycle lifted by the short exact sequence of step 1.1, then $\alpha_U\cap z$ is a chain in $U$ and $\alpha_V\cap z$ is a chain in $V$: the other simplices lie outside the corresponding support and their front evaluations vanish. Their sum is $\alpha\cap z$. The supported cohomology connector is represented by $\delta\alpha_U=-\delta\alpha_V$ in the intersection complex. The homology connector is represented by $\partial(\alpha_U\cap z)$. Since $\partial z$ lies outside $K\cup L$, [F4] gives $\partial(\alpha_U\cap z)=(-1)^{p+1}(\delta\alpha_U)\cap z$. To check the kernel-to-support comparison as well, put $\gamma=\delta\alpha_U$ and use $\rho=1-\partial D-D\partial$ from step 1.1. The actual cochain supported in $K\cap L$ is $\gamma\rho$. Since $\gamma$ is a cocycle, $\gamma\rho-\gamma=\delta\beta$ with $\beta=-\gamma D$. The homotopy $D$ vanishes on every simplex contained either outside $K$ or outside $L$, so $\beta$ vanishes there too. After the same cover subdivision, $\beta\cap z$ is a chain in $U\cap V$ and $\beta\cap\partial z=0$. The identity [F4] shows that $(\gamma\rho)\cap z-\gamma\cap z$ is the boundary $(-1)^{p+1}\partial(\beta\cap z)$ in that intersection. Thus the computed connector represents the cap of the actual supported cohomology class, not just of its small-complex model. This is the claimed connecting-square sign. The other squares commute by addition, the same support restrictions, and the cap formula. [F2, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 Coefficient morphisms and restrictions commute with all simplex transports and the displayed maps, proving naturality; a commuting scalar action is respected for the same reason. Empty supports and intersections give zero groups, and the same formulas apply in degree zero and negative degrees. All subdivision choices are least integers, each compact support uses one finite cover, and colimit exactness chooses one representative and one lift at a time. No family of primitives, chart choices or inverse maps indexed by an infinite set is chosen. This proves the assertions without a choice principle. [step 1.1, step 2.1, step 3.1, algebra] ∎
