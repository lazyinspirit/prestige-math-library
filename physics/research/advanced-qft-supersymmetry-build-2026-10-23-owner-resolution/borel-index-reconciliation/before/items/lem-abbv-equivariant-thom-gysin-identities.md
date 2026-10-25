---
id: lem-abbv-equivariant-thom-gysin-identities
kind: lemma
title: "Equivariant Thom-Gysin Identities for Fixed Submanifolds"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
axiom_strength: "ZF + AC"
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-abbv-equivariant-integration-conventions
  - lem-qftx-borel-base-is-paracompact-of-cw-type
  - thm-milnor-join-model-is-a-contractible-free-g-space
  - thm-thom-isomorphism-for-oriented-vector-bundles
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-abbv-equivariant-integration-conventions: mathematical-premise
  lem-qftx-borel-base-is-paracompact-of-cw-type: mathematical-premise
  thm-milnor-join-model-is-a-contractible-free-g-space: mathematical-premise
  thm-thom-isomorphism-for-oriented-vector-bundles: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Michael F. Atiyah and Raoul Bott, The Moment Map and Equivariant Cohomology"
      url: "https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf"
    - title: "Matvei Libine, Lecture Notes on Equivariant Cohomology"
      url: "https://arxiv.org/pdf/0709.3615"
    - title: "Kentaro Hori et al., Mirror Symmetry"
      url: "https://www.claymath.org/library/monographs/cmim-1.pdf"
      locator: "Chapter 4, §4.3, printed pp. 62–63 (PDF pp. 82–83), including the Thom-class and equation (4.2) discussion."
verification:
  precheck: pending
---

## Statement

Work in $\mathrm{ZF}+\mathrm{AC}$. Let $T$ be a compact torus acting smoothly on a compact oriented smooth manifold $M$ without boundary. Let $N\subseteq M^T$ be a compact closed embedded submanifold without boundary of codimension $c$, let $i:N\hookrightarrow M$ be inclusion, and let its normal bundle $\nu$ have a $T$-invariant orientation. Orient $N$ by $o(TM|_N)=o(TN)\wedge o(\nu)$. If $N=\varnothing$, the source groups and all asserted maps are zero. Otherwise, with the real Borel conventions of the preceding definition, there is a fiber-normalized equivariant Thom class $\tau_\nu\in H_T^c(\nu,\nu\setminus N;\mathbb R)$, and cup product with $\tau_\nu$ is an isomorphism $H_T^k(N;\mathbb R)\to H_T^{k+c}(\nu,\nu\setminus N;\mathbb R)$ for every $k$. A $T$-invariant tubular neighborhood and excision therefore define a cohomological Gysin map $i_*^T:H_T^k(N;\mathbb R)\to H_T^{k+c}(M;\mathbb R)$. It satisfies

$$i^*i_*^T(\beta)=e_T(\nu)\smile\beta,\qquad \int_M i_*^T(\beta)=\int_N\beta.$$

If $N'$ is a different fixed component disjoint from $N$, then $i_{N'}^*i_{N*}^T(\beta)=0$. These maps use the Thom normalization in which every oriented normal fiber integrates to $1$.

## Statement references

[Atiyah and Bott, §2 and §3, especially the Thom pushforward and equation (3.7)](https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf)

[Libine, §7.7, PDF pp. 41–42](https://arxiv.org/pdf/0709.3615)

## Facts & Assumptions

**Given:** AC, a compact torus $T$, a compact oriented smooth $T$-manifold $M$ without boundary, a compact closed $T$-fixed submanifold $N$, and a $T$-invariant orientation of its normal bundle, as in the Statement.

[A1] Assume AC. It is carried through the real Borel coefficient-ring supplier used in the preceding definition. [[def-axiom-of-choice]]

[A2] The inclusion $i:N\hookrightarrow M$ has an oriented normal bundle $\nu$ of rank $c$; $T$ acts trivially on $N$ and linearly on the fibers of $\nu$.

[F1] [[def-abbv-equivariant-integration-conventions]]: $H_T^*(X;\mathbb R)=H^*(ET\times_T X;\mathbb R)$, equivariant integration is the degree-shifting pushforward of the Borel fibration, and the Euler class is the zero-section pullback of a Thom class normalized to integrate to $1$ on each oriented fiber.

[F2] [[lem-qftx-borel-base-is-paracompact-of-cw-type]]: for the selected product Milnor model and compact smooth $N$, $BT\times N$ is paracompact Hausdorff and has CW type. This batch-8 item is manifest-placed but has no current Step 1 readiness record, so its use here remains conditional.

[F3] [[thm-milnor-join-model-is-a-contractible-free-g-space]]: each selected circle Milnor bundle is numerable; a finite product of its trivializing covers and subordinate numerations gives a numerable principal $T$-bundle, and pullback preserves numerability.

[F4] [[thm-thom-isomorphism-for-oriented-vector-bundles]]: under AC, an oriented numerable rank-$c$ vector bundle over a paracompact Hausdorff base of CW type has a fiber-normalized Thom class, and cup product with it is an isomorphism in every degree.

## Proof

1.1 Average any Riemannian metric on $M$ over normalized Haar measure on $T$ to obtain a $T$-invariant metric. The normal exponential map is $T$-equivariant; its derivative is invertible along the zero section, so the inverse function theorem and compactness of $N$ give a $T$-invariant tubular neighborhood identified with $\nu$. Since $T$ fixes $N$ pointwise, $ET\times_T N\cong BT\times N$, and the Borel normal bundle $ET\times_T\nu$ is an oriented rank-$c$ vector bundle over the CW space $BT\times N$. [given, A2, F1, construct]

2.1 The Borel principal bundle $ET\times N\to BT\times N$ is the pullback of the selected product Milnor bundle. If $r=0$, this is the trivial principal bundle over a point; otherwise, for each circle factor, [F3] supplies a numerable trivializing cover and subordinate partition. Products of these finitely many covers and partition functions are locally finite and subordinate to product principal-$T$ charts. Pulling the numeration back to $BT\times N$ shows that the associated Borel normal bundle $ET\times_T\nu$ is numerable. It is oriented by the given $T$-invariant orientation. By [F2] its base is paracompact Hausdorff of CW type, so [F4] gives the normalized Thom class $\tau_\nu$ and the cup-product isomorphism in every degree. [given, A2, F2, F3, F4, step 1.1, construct]

3.1 Use the tubular-neighborhood identification and excision to transfer $\tau_\nu$ to $H_T^c(M,M\setminus N;\mathbb R)$. For each $\beta\in H_T^*(N;\mathbb R)$, define $i_*^T(\beta)$ as the image of the cup product of this relative Thom class with the pullback of $\beta$ under the relative-to-absolute map $H_T^*(M,M\setminus N;\mathbb R)\to H_T^*(M;\mathbb R)$. This canonical composite is the Gysin map and is defined for every $\beta$ by the Thom isomorphism. [given, F1, step 1.1, step 2.1, construct]

4.1 Pull the relative class in step 3.1 back along the zero section. By the definition of $e_T(\nu)$ in [F1], the pulled-back Thom class is $e_T(\nu)$, and pullback respects cup products. Hence $i^*i_*^T(\beta)=e_T(\nu)\smile\beta$. [given, A1, F1, step 3.1, algebra]

4.2 The Gysin class in step 3.1 is represented in a tubular neighborhood of $N$. Choose such neighborhoods disjoint for disjoint compact fixed components $N,N'$. The representative restricts to zero on $N'$, so $i_{N'}^*i_{N*}^T(\beta)=0$. [given, step 1.1, step 3.1]

4.3 In the tubular-neighborhood representative from step 3.1, integrate first along each oriented normal disk fiber. The Thom class integrates to $1$ by its fiber normalization, so this fiber integration returns $\beta$ on $N$; the orientation convention in the Statement makes the resulting base orientation the one used by $\int_N$. [given, A1, F1, step 3.1, algebra]

5.1 Equivariant integration over $M$ factors in the tubular neighborhood into integration over the normal fibers followed by integration over $N$. Step 4.3 therefore gives $\int_M i_*^T(\beta)=\int_N\beta$. These identities establish every stated Gysin property. [given, A1, step 4.1, step 4.3] ∎
