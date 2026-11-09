---
id: prop-motivic-graded-spectral-sequence
kind: proposition
title: Motivic graded pieces and spectral sequence
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - def-motivic-cohomology
  - def-valuative-dimension-and-boundedness
  - prop-tower-exact-couple-interface
  - lem-author-74a9c17e63f1-graded-comparison
  - lem-author-74a9c17e63f1-index-calculation
  - lem-author-74a9c17e63f1-graded-products
  - lem-author-74a9c17e63f1-page-product-transport
  - lem-author-74a9c17e63f1-bounded-convergence
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - thm-author-74a9c17e63f1-stage-bound-input
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  def-valuative-dimension-and-boundedness: mathematical-premise
  prop-tower-exact-couple-interface: mathematical-premise
  lem-author-74a9c17e63f1-graded-comparison: mathematical-premise
  lem-author-74a9c17e63f1-index-calculation: mathematical-premise
  lem-author-74a9c17e63f1-graded-products: mathematical-premise
  lem-author-74a9c17e63f1-page-product-transport: mathematical-premise
  lem-author-74a9c17e63f1-bounded-convergence: mathematical-premise
  thm-author-74a9c17e63f1-source-multiplicative-input: mathematical-premise
  thm-author-74a9c17e63f1-stage-bound-input: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Fasel–Yakerson
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 4, equation (2.1); EM23 Theorem 1.1(1)
    - title: Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: "v1, 15 September 2023 (title date 18 September): Theorem 1.1(1), p.3;
        section 2.2, pp.11–12; Definitions 4.9/4.23, pp.21 and 27–28; Theorems
        4.10(1)/4.24(1), pp.21 and 28; Theorems 4.12(1)/4.27(1), pp.22–23 and
        29."
      statement: Actual natural graded algebra comparison and multiplicative tower;
        qualitative stagewise boundedness in finite valuative dimension.
      hypotheses: Qcqs over Q or F_p. Finite valuative dimension is required only for
        the bound and convergence.
      reading_limits: Listed primary v1 PDF passages checked in text extraction. The
        two boundedness proof paragraphs were inspected; their numerical
        estimates are excluded. Trace and descent constructions remain imported
        through the named external inputs. No optimal numerical bound or
        independent reconstruction is claimed.
dependency_level: 18
---

## Statement
Assume the Axiom of Choice and the fixed compatible size conventions of the supplied constructions. Let $k$ be any field. For a qcqs $k$-scheme $X$ and every $r\geq0$, the actual source graded comparison gives a natural exact triangle
$$F^{r+1}_{\mathrm{mot}}K(X)\longrightarrow F^r_{\mathrm{mot}}K(X)\longrightarrow\mathbb Z(r)_{\mathrm{mot}}(X)[2r].$$
The associated multiplicative spectral sequence has
$$E_2^{a,b}=H^{a-b,-b}_{\mathrm{mot}}(X,\mathbb Z)\Longrightarrow K_{-a-b}(X),\qquad d_s:E_s^{a,b}\to E_s^{a+s,b-s+1}.$$
The right-hand symbol denotes the filtered abutment when convergence holds. In the full-plane E2 formula the complex of a negative weight is explicitly extended by zero, agreeing with the source’s vanishing negative graded terms. Products add bidegrees and agree with the source motivic cup products; the differential satisfies the Leibniz rule with sign $(-1)^{a+b}$ for a class in bidegree $(a,b)$. If $X$ has finite valuative dimension, the filtration is complete and the spectral sequence converges multiplicatively to $K_*(X)$ with its finite image filtration and associated graded groups as stated by the tower interface.

## Facts & Assumptions
[A1] The Axiom of Choice and fixed compatible size conventions discharge the selected local perfect-$K$-theory realization premise when invoking the actual tower and its source inputs. [[math:def-axiom-of-choice]] [[def-motivic-filtration]]

**Given:** Choice, these size conventions, an arbitrary specified field $k$, and the actual motivic tower and complex functors restricted from its prime field, with their specified products. The specified $k$ overrides the default algebraic-closedness convention.

**Goal:** Establish the natural triangles, products, page indices and finite-valuative-dimension convergence for this field.

[F1] [[prop-tower-exact-couple-interface]] applies to any decreasing tower with the stated graded equivalences. [[def-motivic-cohomology]] supplies the cohomology notation. The quotient-map and index calculations in [[lem-author-74a9c17e63f1-graded-comparison]] and [[lem-author-74a9c17e63f1-index-calculation]] record the corresponding formal calculations for the standing-field restriction; below they are repeated on the specified restriction.

[F2] [[lem-author-74a9c17e63f1-graded-products]] and [[lem-author-74a9c17e63f1-page-product-transport]] record how the actual graded multiplication and the exact-couple comparison identify products, signs and filtered abutment maps. The source data on the larger category used below are supplied directly by [F4].

[F3] [[lem-author-74a9c17e63f1-bounded-convergence]] gives the formal high/low-stage and zero-limit argument from a stagewise bound and constant nonpositive stages. [[def-valuative-dimension-and-boundedness]] defines valuative dimension using the affine rings of the underlying scheme.

[F4] [[thm-author-74a9c17e63f1-source-multiplicative-input]] supplies the actual natural graded algebra comparison and source tower pairings on all qcqs schemes over $\mathbb Q$ or $\mathbb F_p$. [[thm-author-74a9c17e63f1-stage-bound-input]] supplies the qualitative bound for those schemes of finite valuative dimension. Their Choice-qualified realization is the one in [A1]; neither input assumes algebraic closedness.

## Proof
1.1 Under [A1], let $F$ be the prime field of $k$. Composing structure morphisms gives a functor from qcqs $k$-schemes to qcqs $F$-schemes: underlying schemes are unchanged, and every $k$-morphism is an $F$-morphism. By the local definitions, both the tower and motivic complexes are restrictions along this functor. Restrict the actual natural equivalence $\gamma_r$ and the stage and quotient maps of [F4]. Cofibers of functor diagrams are evaluated objectwise, so the canonical quotient followed by $\gamma_r$ gives the asserted triangle. For $r<0$, the constant nonpositive stages make the transition an equivalence, including at $r=-1$, hence its cofiber is zero. This proves the negative-weight zero convention without a new geometric hypothesis. [A1, F1, F4]

2.1 Apply the generic tower construction in [F1] to these actual diagrams. Its initial page is $\pi_{-a-b}\operatorname{gr}^{-b}$, and its cochain shift calculation is $\pi_n(C[2r])=H^{2r-n}(C)$. Substitution of $r=-b$ and $n=-a-b$ gives $2r-n=a-b$. Thus the page is the stated motivic group, with zero terms for negative weights. The tower reindexing gives the displayed differential; its target has total homotopy degree $-(a+s)-(b-s+1)=-a-b-1$. [F1, step 1.1, algebra]

2.2 Suppose $X$ has finite valuative dimension. Forgetting its $k$-structure changes neither its affine opens nor their rings, so the dimension condition in [F3] holds for its prime-field scheme. Apply the stage bound in [F4] to this very tower and choose its integer $B=B(X)\geq0$. For any integer $n$, put $U_n=\max(1,B+n+1)$ and $L_n=0$. If $r\geq U_n$, then $n<r-B$, so $\pi_nF^r=0$; if $r\leq L_n$, the map to $K(X)$ is an equivalence. The generic tower interface in [F1] therefore gives finite convergence and its associated-graded identification, with the actual image filtration. This argument also applies to the empty scheme under the same source contract. [F1, F3, F4, step 1.1, construct]

3.1 Restrict the coherent filtered products of [F4] along the same functor. On the associated graded, their transport along the restricted $\gamma_r$ is precisely the source motivic product. The source and local exact couples use the same restricted stage/cofiber maps and connecting homomorphisms. The identity on stages and the actual graded comparisons therefore commute with all exact-couple arrows. Deriving couples takes images and kernel quotients functorially, so induction identifies all pages and differentials, as in the construction recorded in [F2]. Transport the source pairings through these page identifications. Products add bidegrees by step 2.1. The derivation sign is the parity of homotopy degree $-a-b$, hence $(-1)^{a+b}$; the shifts by $2r$ are even. This establishes the claimed products and Leibniz rule using actual source pairings. [F2, F4, step 1.1, step 2.1]

4.1 Repeat the zero-limit calculation of [F3] on these restricted diagrams. The sequential limit is the fiber of $1-\mathrm{shift}$ on $\prod_{r\geq0}F^r$. In each degree $n$, both $\pi_nF^r$ and $\pi_{n+1}F^r$ are eventually zero by step 2.2. Each of the resulting products of groups has only finitely many possibly nonzero factors; the transition shift is nilpotent, so $1-\mathrm{shift}$ is invertible by a finite geometric sum. The fiber exact sequence makes every homotopy group of the limit zero, hence the limit spectrum is zero. The image filtration is full for $r\leq0$ and zero for $r\geq U_n$. The transported source abutment pairings in step 3.1 identify its products with those in $K_*(X)$. This proves completeness and multiplicative convergence with the full stated scope. [F2, F3, step 3.1, step 2.2] ∎

This adjudication read the supplied article text at PDF pages 3–4 and 9, the current named supplier arguments and all thirteen direct consumer arguments for this scope change. The exact technical resolutions for jobs 01304 and 01486, their relevant genuine prior target proposals and the retained proposals from jobs 01529 and 01553 were inspected as proposals, with no acceptance credit. The primary Elmanto–Morrow v1 PDF passages listed above were read in extraction. Screenshots of printed pages 23 and 29 failed with cache-miss errors; no fresh image inspection is claimed. Dugger, arXiv:math/0305173v1 (12 May 2003), Propositions 5.1/5.3, Theorems 6.1/6.2 and section 6.3 through Proposition 6.5, pp.11 and 13–15, were read in extraction for the actual-pairing and finite-section qualifications of the existing source input. Its replacement foundations and the EM trace/descent constructions remain imported. No independent rejudgment, publication or complete downstream audit is asserted.

## Reading limits
This adjudication read the supplied article text at PDF pages 3–4 and 9, the current named supplier arguments and all thirteen direct consumer arguments for this scope change. The exact technical resolutions for jobs 01304 and 01486, their relevant genuine prior target proposals and the retained proposals from jobs 01529 and 01553 were inspected as proposals, with no acceptance credit. The primary Elmanto–Morrow v1 PDF passages listed above were read in extraction. Screenshots of printed pages 23 and 29 failed with cache-miss errors; no fresh image inspection is claimed. Dugger, arXiv:math/0305173v1 (12 May 2003), Propositions 5.1/5.3, Theorems 6.1/6.2 and section 6.3 through Proposition 6.5, pp.11 and 13–15, were read in extraction for the actual-pairing and finite-section qualifications of the existing source input. Its replacement foundations and the EM trace/descent constructions remain imported. No independent rejudgment, publication or complete downstream audit is asserted.
