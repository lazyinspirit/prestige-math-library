---
title: Coherent derived tensor and pullback on perfect complexes
status: published
research_item: lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback
dependency_level: 6
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and fix the universes of the common-family construction. Let $X$ be a quasi-compact quasi-separated (qcqs) scheme. On the common-family realization $\widehat{\operatorname{Perf}}(X)$ of the supplied perfect fiber, derived tensor is a coherent symmetric monoidal product with unit $\mathcal O_X$, exact separately in each variable. Every morphism $f:X\to Y$ between qcqs schemes induces an exact symmetric monoidal pullback $Lf^*:\operatorname{Perf}(Y)\to\operatorname{Perf}(X)$, coherently compatible with composition. For every homomorphism $A\to B$ of commutative unital rings, its affine specialization on bounded finite-projective representatives is derived extension of scalars. No flatness or finite Tor-dimension assumption on $f$ is needed.

## Facts & Assumptions
**Given:** Qcqs schemes $X,Y$ in the fixed universe, any morphism $f:X\to Y$, and AC.

**Goal:** Restrict actual enhanced operations to the supplied perfect subcategories.

[F1] [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) constructs one coherent scheme/tensor family of K-flat localizations over qcqs schemes and all their morphisms, with its full perfect subfamily and actual exact equivalences to the supplied perfect fibers. All operations in this lemma are those of that common family, without comparison to any independently chosen pullback diagram.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) specifies local bounded finite locally free representatives and the full stable subcategory.

[F3] [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) identifies the given enhanced affine perfect category through the actual associated-sheaf functor.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed for the common-family construction in [F1] and the enhanced affine comparison in [F3]. The finite local computations below use those supplied constructions.

## Proof
1.1 Locally represent $E$ and $F$ by bounded finite locally free complexes. Their derived tensor is computed by their ordinary total tensor there, because these bounded flat complexes are K-flat. It is again bounded finite locally free: each degree is a finite direct sum of tensor products of finite locally free sheaves. The unit $\mathcal O_X$ has this form. The full perfect subfamily in [F1] already retains these tensor coherences; the local computation identifies its fibers with precisely the perfect condition of [F2]. [F1, F2, A1]

2.1 Tensoring K-flat representatives commutes with the signed mapping-cone matrices and takes zero to zero. Consequently its derived operation preserves cofiber sequences in each variable and is exact in the stable categories. The finite stable operations of $\operatorname{Perf}$ are ambient ones, so this exactness restricts to $\operatorname{Perf}$. [F1, F2, step 1.1]

3.1 Given $E\in\operatorname{Perf}(Y)$, choose around $f(x)$ a bounded finite locally free presentation and restrict to its inverse-image neighbourhood of $x$. The derived pullback there is computed by ordinary pullback of that bounded flat presentation and is again bounded finite locally free, since pullback sends finite free local charts to finite free charts. Thus $Lf^*$ preserves $\operatorname{Perf}$. Exactness and the strong monoidal and compositional coherences come from the single localized cocartesian family in [F1], not from transport between independently chosen pointwise functors. [F1, F2, step 2.1]

4.1 For any ring map $A\to B$ and a bounded finite-projective $A$-complex $P$, $B\otimes_A P$ computes $B\otimes_A^L P$ because $P$ is bounded projective. Its terms are finite projective over $B$: a finite free-summand presentation remains a summand after tensor. Sheaf pullback of its associated sheaf is the associated sheaf of $B\otimes_A P$, naturally with the signed differentials. Under the actual affine fiber comparison [F3], this is the scalar-extension calculation: both operations on the bounded projective representative are literally sheaf pullback of that associated-sheaf complex. Both affine schemes are qcqs, so this verifies the affine specialization of the common-family functor for every such ring map, without asserting a natural equivalence of independently specified diagrams. Hence the enhanced pullback specializes to derived scalar extension and all assertions follow. [F1, F3, A1, step 3.1] ∎
