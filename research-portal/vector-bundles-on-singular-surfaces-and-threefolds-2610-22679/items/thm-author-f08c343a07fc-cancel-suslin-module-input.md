---
id: thm-author-f08c343a07fc-cancel-suslin-module-input
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
  - math:def-prime-and-maximal-ideals
  - math:def-multiplicative-subset-and-localisation
  - math:def-localisation-of-a-module
  - math:def-left-and-right-modules
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-noetherian-ring
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
dependency_roles:
  math:def-algebraically-closed-field: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:def-krull-dimension-of-a-ring: mathematical-premise
  math:def-projective-module: mathematical-premise
  math:def-generated-cyclic-finitely-generated-and-free-modules: mathematical-premise
  math:def-direct-sum-of-a-family-of-modules: mathematical-premise
  math:def-prime-and-maximal-ideals: mathematical-premise
  math:def-multiplicative-subset-and-localisation: mathematical-premise
  math:def-localisation-of-a-module: mathematical-premise
  math:def-left-and-right-modules: mathematical-premise
  math:def-module-homomorphism-kernel-image-and-cokernel: mathematical-premise
  math:def-noetherian-ring: mathematical-premise
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
      locator: "p. 1, Introduction: opening Noetherian/finite-module conventions,
        definition of cancellative and Theorem 1.1(i); p. 16, reference [20]"
      statement: For an affine algebra A of dimension d over an algebraically closed
        field, every finitely generated projective A-module of rank at least d
        is cancellative. The preceding definition means that an isomorphism P
        plus A^m isomorphic to Q plus A^m, for a finitely generated projective Q
        and a common finite free summand A^m, implies P isomorphic to Q.
      hypotheses: The introduction assumes commutative Noetherian rings and finitely
        generated modules. Theorem 1.1(i) takes an affine algebra of finite
        dimension d over an algebraically closed field, with projective P of
        constant rank r >= d; no smoothness, normality, reducedness,
        characteristic exclusion or invertibility of d! is imposed. In this
        application finite type over the field implies Noetherian by the
        declared library results; finite Krull dimension uses the nonzero-ring
        interface.
      reading_limits: For this repair, read arXiv:0708.2961v1 p. 1 opening
        conventions, cancellation definition and Theorem 1.1(i), and p. 16
        reference [20]. The theorem is imported through this precise secondary
        attribution to Suslin (1977). Neither Suslin’s original paper nor
        Keshari’s later proofs were read or reconstructed. The numbered argument
        translates the import and checks its Noetherian hypothesis using
        declared library results; the zero-algebra observation is an explicit
        elementary consequence of unital module axioms, not attributed to the
        cited theorem.
dependency_level: 0
formulation_deps:
  - math:def-algebraically-closed-field
  - math:def-finite-type-and-module-finite-algebras
  - math:def-krull-dimension-of-a-ring
  - math:def-projective-module
  - math:def-generated-cyclic-finitely-generated-and-free-modules
  - math:def-direct-sum-of-a-family-of-modules
  - math:def-prime-and-maximal-ideals
  - math:def-multiplicative-subset-and-localisation
  - math:def-localisation-of-a-module
  - math:def-left-and-right-modules
  - math:def-module-homomorphism-kernel-image-and-cokernel
argument_deps:
  - math:def-algebraically-closed-field
  - math:def-finite-type-and-module-finite-algebras
  - math:def-krull-dimension-of-a-ring
  - math:def-projective-module
  - math:def-generated-cyclic-finitely-generated-and-free-modules
  - math:def-direct-sum-of-a-family-of-modules
  - math:def-prime-and-maximal-ideals
  - math:def-multiplicative-subset-and-localisation
  - math:def-localisation-of-a-module
  - math:def-left-and-right-modules
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-noetherian-ring
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
---

## Statement
Let $k$ be an algebraically closed field of arbitrary characteristic, let $A\ne0$ be a commutative unital finite-type $k$-algebra of finite Krull dimension $d$, and let $P$ be a finite projective $A$-module of constant rank $r\geq d$. Then $P$ is cancellative: for every finite projective $Q$ and every integer $N\geq0$, an isomorphism $P\oplus A^N\cong Q\oplus A^N$ implies $P\cong Q$.

All modules here are unital, and finite projective means finitely generated and projective. Write $A^N=\bigoplus_{i=1}^N A$, with $A^0=0$. Constant rank $r\in\mathbb Z_{\geq0}$ means that $P_{\mathfrak p}\cong A_{\mathfrak p}^{r}$ for every prime ideal $\mathfrak p$ of $A$, where $A_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}A$ and $P_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}P$. This is the local-free-rank convention for finite projective modules. The complement of a prime ideal contains $1$ and is closed under multiplication by primality, so these localizations are defined. Krull dimension $d$ is used only for nonzero $A$, as in its definition supplier. For the zero $k$-algebra, every unital module is zero, and the same cancellation implication holds without any dimension or rank condition.

## Statement references
[[math:def-algebraically-closed-field]]

[[math:def-finite-type-and-module-finite-algebras]]

[[math:def-krull-dimension-of-a-ring]]

[[math:def-projective-module]]

[[math:def-generated-cyclic-finitely-generated-and-free-modules]]

[[math:def-direct-sum-of-a-family-of-modules]]

[[math:def-prime-and-maximal-ideals]]

[[math:def-multiplicative-subset-and-localisation]]

[[math:def-localisation-of-a-module]]

[[math:def-left-and-right-modules]]

[[math:def-module-homomorphism-kernel-image-and-cokernel]]

[[math:def-noetherian-ring]]

[[math:lem-field-is-noetherian]]

[[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

## External input
This is an explicit established external input, attributed to Suslin 1977 through Keshari. The numbered argument translates the exact statement and cancellation convention, checks the source's Noetherian convention, and handles the zero algebra separately by the module axioms. The five local application items establish the separate affine/K-zero application interface; they do not reconstruct Suslin's deep cancellation argument. Theorem 1.1(i) imposes no factorial-invertibility hypothesis.

## Facts & Assumptions

**Given:** The data, module conventions and hypotheses in the statement; the zero algebra is considered separately.

**Goal:** Establish the stated cancellation implication, including the separate zero-algebra case.

[F1] Keshari's p. 1 opening convention requires commutative Noetherian rings and finitely generated modules. Theorem 1.1(i) asserts cancellation at rank at least the dimension over an affine algebra over an algebraically closed field; the immediately preceding definition uses a common finite free summand. [Keshari, p. 1, opening conventions, definition and Theorem 1.1(i)](https://arxiv.org/pdf/0708.2961v1)

[F2] The Noetherian-ring convention is supplied by [[math:def-noetherian-ring]]. A field is Noetherian by [[math:lem-field-is-noetherian]], and a finite-type algebra over a Noetherian commutative ring is Noetherian by [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]].

[F3] Unital module axioms include $1m=m$ and $(a+b)m=am+bm$. [[math:def-left-and-right-modules]]

## Proof

1.1 For the nonzero algebra in the statement, the field $k$ is Noetherian and its finite-type algebra $A$ is Noetherian by [F2]. Thus the source's ring convention is satisfied; finite projective $P$ means finitely generated projective, and its specified constant rank satisfies $r\geq d$. These are the hypotheses of Theorem 1.1(i), so [F1] says that $P$ is cancellative. [F1, F2, given]

2.1 Expanding the cancellation definition in [F1] gives $P\cong Q$ from $P\oplus A^N\cong Q\oplus A^N$ for every finite projective $Q$ and every common finite free summand; $N=0$ is the unstabilized implication itself. Separately, if $A=0$, the module axioms give $0m=(0+0)m=0m+0m$, hence $0m=0$, and then $m=1m=0m=0$. Every unital $A$-module is therefore the zero module, so the same cancellation implication holds in that case as well. [F1, F3, step 1.1] ∎
