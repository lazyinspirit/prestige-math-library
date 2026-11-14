---
id: lem-qec-prereq-signed-ae-code-product-test
kind: lemma
domain: mathematics
title: Finite signed-code KL product test
status: published
origin: session
deps:
  - def-qec-prereq-ae-error-span-contract
  - math:thm-qc-knill-laflamme-necessity
  - math:thm-qc-knill-laflamme-explicit-recovery
  - lem-author-11a9fe6cf386-tensor-cg-identification
  - lem-author-11a9fe6cf386-finite-span-kl
  - lem-author-11a9fe6cf386-signed-spin-four-coefficients
  - lem-author-11a9fe6cf386-mixed-binomial-cancellation
  - lem-author-11a9fe6cf386-diagonal-binomial-moments
dependency_roles:
  def-qec-prereq-ae-error-span-contract: mathematical-premise
  math:thm-qc-knill-laflamme-necessity: mathematical-premise
  math:thm-qc-knill-laflamme-explicit-recovery: mathematical-premise
  lem-author-11a9fe6cf386-tensor-cg-identification: mathematical-premise
  lem-author-11a9fe6cf386-finite-span-kl: mathematical-premise
  lem-author-11a9fe6cf386-signed-spin-four-coefficients: mathematical-premise
  lem-author-11a9fe6cf386-mixed-binomial-cancellation: mathematical-premise
  lem-author-11a9fe6cf386-diagonal-binomial-moments: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Class of codes correcting absorptions and emissions
      url: https://arxiv.org/pdf/2410.03562v1
      locator: §II, PDF p. 2, Eqs. (1)–(3); §III A, Theorem III.1, conditions
        (C1)–(C4), PDF pp. 3–4
      statement: "Imported sufficient condition: for $n=8$, $t=1$, real arrays
        $\\alpha_j,\\beta_j$ in the spin-$n/2$ magnetic basis satisfy order-one
        absorption–emission pair-product correction if (C1)
        $\\sum_{j=0}^8\\alpha_j\\beta_j=0$, (C2)
        $\\sum\\alpha_j^2=\\sum\\beta_j^2=1$, and, for every $0\\leq a,b\\leq2$,
        (C3)
        $\\sum_{j=0}^6\\binom6j\\alpha_{j+a}\\beta_{j+b}/\\sqrt{\\binom8{j+a}\\\
        binom8{j+b}}=0$ and (C4) the same weighted sum with numerator
        $\\alpha_{j+a}\\alpha_{j+b}-\\beta_{j+a}\\beta_{j+b}$ vanishes. The
        error family is the coherent Clebsch–Gordan sum in Eq. (3) with $r=0,1$,
        $|\\delta J|,|\\delta m|\\leq r$, including its rank-zero identity. Zero
        numerator-binomial terms are omitted. This is the $n=8,t=1$
        specialization of Aydin–Barg, Theorem III.1 (PDF pp. 3–4), using §II
        Eqs. (1)–(3) for the basis and errors."
      hypotheses: Real coefficient arrays for a two-dimensional spin-n/2 code, n=8 and
        t=1; all C1–C4 conditions for a,b=0,1,2; coherent, not individually
        resolved, Clebsch–Gordan transition operators.
      reading_limits: Read §II Eqs. (1)–(4), §III A Theorem III.1 and §III
        construction/Theorem III.3 in the retrieved v1 PDF/extracted text;
        inspected PDF page images 2,3,4. Theorem III.1 is imported as an
        established sufficient condition. Appendix C proof not read or
        reconstructed. Distinct displayed examples are not identified with this
        signed J=4 code. Local coefficient sums are proved in five-helper
        resolution; no independent review or acceptance is claimed.
dependency_level: 3
---

## Statement

For any two-column isometry $V$ into a fixed finite input spin block and a finite spanning list $T_a$ of the selected order-one tensor error span (including the identity restriction), the pair-product condition holds precisely when all $V^*T_a^*T_bV$ are scalar multiples of $I_2$. For a finite trace-preserving Kraus channel whose Kraus span equals the tested span, this is equivalent to exact decoded correction; containment suffices for the forward correction implication. Retain signed amplitudes before summing cross terms.

In particular, the signed $J=4$ isometry $Ve_0=\sqrt{1/3}e_{4,-4}+\sqrt{2/3}e_{4,2}$, $Ve_1=\sqrt{2/3}e_{4,-2}-\sqrt{1/3}e_{4,4}$ satisfies the pair-product condition for the complete order-one span with every selected target block in $\{3,4,5\}$, as defined in [[def-qec-prereq-ae-error-span-contract]]. No separation of its error supports is assumed. Consequently every finite trace-preserving Kraus channel inside that span is exactly correctable on this code.

## Facts & Assumptions

[F1] The complete selected tensor span includes coherent rank-zero and rank-one families, with targets separated as orthogonal labelled blocks. [[def-qec-prereq-ae-error-span-contract]]

[F2] Necessity applies to finite trace-preserving Kraus channels. [[math:thm-qc-knill-laflamme-necessity]]

[F3] Sufficiency supplies an exact decoded channel for finite trace-preserving Kraus errors satisfying scalar pair products. [[math:thm-qc-knill-laflamme-explicit-recovery]]

[F4] Every tensor family in the spin-four contract is a common scalar times the coherent Clebsch–Gordan family. [[lem-author-11a9fe6cf386-tensor-cg-identification]]

[F5] The finite spanning-list test and its exact channel qualification hold. [[lem-author-11a9fe6cf386-finite-span-kl]]

[F6] The signed spin-four vectors give real orthonormal coefficient arrays. [[lem-author-11a9fe6cf386-signed-spin-four-coefficients]]

[F7] Every mixed weighted coefficient sum C3 is zero, including the signed cancellation. [[lem-author-11a9fe6cf386-mixed-binomial-cancellation]]

[F8] Every diagonal-difference weighted coefficient sum C4 is zero. [[lem-author-11a9fe6cf386-diagonal-binomial-moments]]

## Proof

**Given:** The finite objects and conventions in the Statement.

**Goal:** Establish the stated identities and implications.

1.1 For the generic finite test, [F5] equates scalar two-by-two compressions with the span pair-product condition and gives precisely the channel qualifications in the Statement. Thus an arbitrary unnormalized spanning list is not itself asserted to be a channel. [F1, F2, F3, F5]

1.2 For the displayed signed code, [F6] gives conditions C1 and C2 of the imported Theorem III.1. The arrays are real and $J=8/2=4$, $t=1$. Facts [F7] and [F8] give C3 and C4 for every one of the nine ordered pairs $(a,b)\in\{0,1,2\}^2$, with the same zero-weight convention as the source. All hypotheses of the independent sufficient condition in External input are therefore met. It supplies scalar pair products for the coherent Eq. (3) error family with all $J'=3,4,5$ and the rank-zero identity. [F6, F7, F8]

2.1 By [F4], the tensor-family equations admit no additional components outside common scalar multiples of that coherent family. For the contract's operators on $H$, their restrictions to the code are exactly those maps embedded into orthogonal target blocks; $I_H$ restricts to the rank-zero identity on the input. Distinct target-block pair products vanish, and the source's same-target pair products are scalar by step 1.2. Linear expansion as in [F5] now covers every operator in the complete selected span, every subset of selected target blocks, and every finite spanning list. In particular every compressed pair product for this signed code is scalar. [F1, F4, F5, step 1.2, algebra]

3.1 For a finite trace-preserving Kraus channel inside that span, step 2.1 supplies the scalar identities required by [F3], and hence an exact decoded recovery. Conversely [F2] and [F5] give necessity for the Kraus span and for any equal tested span. These are the stated algebraic and channel conclusions, with no separated-support assumption. [F2, F3, F5, step 1.1, step 2.1] ∎

## External input

Imported sufficient condition: for $n=8$, $t=1$, real arrays $\alpha_j,\beta_j$ in the spin-$n/2$ magnetic basis satisfy order-one absorption–emission pair-product correction if (C1) $\sum_{j=0}^8\alpha_j\beta_j=0$, (C2) $\sum\alpha_j^2=\sum\beta_j^2=1$, and, for every $0\leq a,b\leq2$, (C3) $\sum_{j=0}^6\binom6j\alpha_{j+a}\beta_{j+b}/\sqrt{\binom8{j+a}\binom8{j+b}}=0$ and (C4) the same weighted sum with numerator $\alpha_{j+a}\alpha_{j+b}-\beta_{j+a}\beta_{j+b}$ vanishes. The error family is the coherent Clebsch–Gordan sum in Eq. (3) with $r=0,1$, $|\delta J|,|\delta m|\leq r$, including its rank-zero identity. Zero numerator-binomial terms are omitted. This is the $n=8,t=1$ specialization of Aydin–Barg, Theorem III.1 (PDF pp. 3–4), using §II Eqs. (1)–(3) for the basis and errors.

Source: [Aydin and Barg, Class of codes correcting absorptions and emissions](https://arxiv.org/pdf/2410.03562v1), §II and Theorem III.1, PDF pp. 2–4. The hypotheses and honest reading limits are given in the source record.

## Source notes

This proof applies the imported sufficient coefficient criterion after the five local intermediates; it does not reconstruct Appendix C or identify the source’s displayed code examples with this code. The result concerns coherent tensor components, not individually resolved magnetic-label matrix units.
