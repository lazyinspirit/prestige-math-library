---
id: thm-author-7dc5154c7a6f-suslin-module-input
kind: theorem
title: Suslin cancellation over affine algebras
status: published
domain: mathematics
deps:
  - math:def-algebraically-closed-field
  - math:def-finite-type-and-module-finite-algebras
  - math:def-krull-dimension-of-a-ring
  - math:def-projective-module
  - math:def-generated-cyclic-finitely-generated-and-free-modules
  - math:def-direct-sum-of-a-family-of-modules
  - math:def-localisation-at-a-prime-ideal
  - math:def-localisation-of-a-module
  - math:def-left-and-right-modules
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
dependency_roles:
  math:def-algebraically-closed-field: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:def-krull-dimension-of-a-ring: mathematical-premise
  math:def-projective-module: mathematical-premise
  math:def-generated-cyclic-finitely-generated-and-free-modules: mathematical-premise
  math:def-direct-sum-of-a-family-of-modules: mathematical-premise
  math:def-localisation-at-a-prime-ideal: mathematical-premise
  math:def-localisation-of-a-module: mathematical-premise
  math:def-left-and-right-modules: mathematical-premise
  math:lem-field-is-noetherian: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Manoj Kumar Keshari, Cancellation problem for projective modules over
        affine algebras
      url: https://arxiv.org/pdf/0708.2961v1
      locator: "p. 1, Introduction: opening Noetherian/finitely-generated conventions,
        definition of cancellative, and Theorem 1.1(i); p. 16, reference [20]"
      statement: "For an affine algebra A of dimension d over an algebraically closed
        field, every projective A-module of rank at least d is cancellative: an
        isomorphism after adding the same finite free module implies an
        isomorphism before adding it."
      hypotheses: The paper globally assumes commutative Noetherian rings and finitely
        generated modules. In Theorem 1.1(i), A is an affine algebra over an
        algebraically closed field and P has constant rank r >= d = dim A. The
        local application uses nonzero A and finite d; finite type over the
        field implies Noetherian. No characteristic, smoothness, normality,
        reducedness or factorial-invertibility restriction occurs in Theorem
        1.1(i).
      reading_limits: Read the web-extracted text of arXiv:0708.2961v1 p. 1 opening
        conventions, cancellation definition and Theorem 1.1(i), and p. 16
        bibliography [20]. PDF screenshot retrieval failed; no visual PDF
        inspection is claimed. Suslin’s original 1977 proof and Keshari’s later
        proofs were not read or reconstructed. The zero-ring boundary case is
        elementary local reasoning, not an assertion attributed to Theorem
        1.1(i).
dependency_level: 0
---

## Statement
Let $k$ be an algebraically closed field of arbitrary characteristic, let $A$ be a nonzero commutative unital finite-type $k$-algebra of finite Krull dimension $d$, and let $P$ be a finite projective $A$-module of constant rank $r\geq d$. Here finite projective means finitely generated and projective, and constant rank $r$ means $P_{\mathfrak p}\cong A_{\mathfrak p}^{r}$ for every prime ideal $\mathfrak p$ of $A$, where $A_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}A$ and $P_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}P$. Then $P$ is cancellative: for every finite projective $Q$ and every integer $N\geq0$, an isomorphism $P\oplus A^N\cong Q\oplus A^N$ implies $P\cong Q$. The notation $A^N$ means the direct sum of $N$ copies of $A$, with $A^0=0$. If the zero $k$-algebra is admitted, the cancellation implication also holds for it: every unital module over the zero ring is zero. This last case uses no Krull dimension or rank convention for the zero ring.

## External input
The nonzero-algebra cancellation theorem is imported from Keshari, p. 1, Theorem 1.1(i), attributed there to Suslin 1977; the cancellation convention is given immediately before the theorem, and reference [20] on p. 16 identifies the original work. The opening sentence of the Introduction assumes commutative Noetherian rings and finitely generated modules. The numbered argument below checks that convention and translates the imported conclusion; it does not reconstruct Suslin's cancellation proof. The zero-ring case is elementary local reasoning recorded separately from the import. The separate affine/K-zero application interface is not a proof of this external theorem.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement; all modules are unital.

**Goal:** Establish the stated cancellation implication, including the separate zero-ring case.

[F1] Keshari's p. 1 opening conventions, cancellation definition and Theorem 1.1(i) supply cancellation of every finite projective module of constant rank at least $d$ over a Noetherian affine algebra of dimension $d$ over an algebraically closed field. This is the explicit imported premise in the cited source.

[F2] A field is Noetherian, and an algebra of finite type over a Noetherian commutative ring is Noetherian. [[math:lem-field-is-noetherian]], [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

[F3] Algebraically closed field, finite-type algebra, Krull dimension for nonzero rings, projective module, finite generation, free module, direct sum, and localization have their published meanings. The displayed localization condition in the Statement is the definition of constant rank used here. [[math:def-algebraically-closed-field]], [[math:def-finite-type-and-module-finite-algebras]], [[math:def-krull-dimension-of-a-ring]], [[math:def-projective-module]], [[math:def-generated-cyclic-finitely-generated-and-free-modules]], [[math:def-direct-sum-of-a-family-of-modules]], [[math:def-localisation-at-a-prime-ideal]], [[math:def-localisation-of-a-module]]

[F4] Modules are unital and satisfy the scalar distributive laws; in particular $1_A m=m$ and $0_A m=0_M$, the latter following by subtracting $0_A m$ from $(0_A+0_A)m=0_A m+0_A m$. [[math:def-left-and-right-modules]]

## Proof

1.1 For nonzero $A$, the field $k$ is Noetherian, and the finite-type hypothesis therefore makes $A$ Noetherian by [F2]. With the conventions of [F3], $A$ and $P$ satisfy the opening conventions and all the hypotheses of Keshari Theorem 1.1(i): the base field is algebraically closed, the algebra is affine of dimension $d$, the module is finitely generated projective, and its constant rank is at least $d$. Consequently [F1] makes $P$ cancellative. [F1, F2, F3, given]

2.1 For nonzero $A$, expand the source cancellation definition in [F1]: an isomorphism after adding the same finite free summand implies $P\cong Q$. Since $A^N$ is precisely that summand by [F3], this gives the required implication for every $N\geq0$, including $N=0$. For the separate zero-ring case, [F4] gives $m=1_A m=0_A m=0_M$ for every element of every unital $A$-module, so $P$ and $Q$ are both zero and hence isomorphic. [F1, F3, F4, step 1.1] ∎
