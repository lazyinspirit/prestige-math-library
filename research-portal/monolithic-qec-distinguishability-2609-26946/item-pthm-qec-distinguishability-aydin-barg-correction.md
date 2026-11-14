---
title: Aydin–Barg rank-one correction and lower host angular momentum
status: draft
research_item: pthm-qec-distinguishability-aydin-barg-correction
dependency_level: 15
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 6, Aydin–Barg bullet; PDF p. 17, Fig. S5.1 caption
      statement: The Aydin–Barg code corrects the same rank-one errors with smaller
        separation between supporting states, achieving the same code distance
        at lower $J$ than the displayed Æ code. Its general transition
        specification is $|J-J^\prime|\leq1$, $|m-m^\prime|\leq1$; in the
        zero-temperature channel only $J\to J-1$ occurs.
      hypotheses: As stated in the extracted formulation.
      reading_limits: "Read the supplied article text at the code-definition passage
        and inspected the complete supplied PDF page images 6 and 17, including
        Fig. 4 and Fig. S5.1 captions. Attribution only: correction and distance
        follow from the declared mathematical suppliers, and the downward branch
        uses the explicitly conditional physical supplier. No figure
        measurement, numerical reproduction or source-defect judgment is
        claimed."
    - title: Class of codes correcting absorptions and emissions
      url: https://arxiv.org/pdf/2410.03562v1
      locator: §II, PDF p. 2, Eqs. (1)–(4), and the distance paragraph continuing on
        PDF p. 3; §III A, PDF pp. 3–4, Theorem III.1; PDF p. 4, Construction
        III.1, Theorem III.3 and Examples 1–2.
      statement: Eqs. (2)–(3) define order-t absorption–emission errors as coherent
        Clebsch–Gordan sums; Eq. (4) gives the within-block spin-error family.
        The distance paragraph discusses a possible spin-code convention but
        does not use it in the results. The displayed examples are not used here
        to identify the target signed J=4 encoding.
      hypotheses: Finite spin J=n/2 with positive integer n, two-dimensional code
        subspaces as in Eq. (1), and nonnegative integer transition order t;
        coherent error families. These are contextual definitions and a distance
        disclaimer, not an imported proof of the target code or its distance.
      reading_limits: Read the retrieved v1 PDF text at Eqs. (1)–(4), the distance
        paragraph, Theorem III.1, Construction III.1, Theorem III.3 and Examples
        1–2. Text retrieval only; Appendix C was not read or reconstructed. The
        signed-code supplier records its separate imported criterion and local
        application.
---

PDF p. 6: ` Aydin–Barg bullet `; PDF p. 17: ` Fig. S5.1 caption `

## Prerequisites

- [def-qec-distinguishability-aydin-barg-code](item-def-qec-distinguishability-aydin-barg-code)
- [def-qec-distinguishability-ae-code](item-def-qec-distinguishability-ae-code)
- [def-qec-distinguishability-rank-one-transitions](item-def-qec-distinguishability-rank-one-transitions)
- [thm-qec-distinguishability-kl-conditions](item-thm-qec-distinguishability-kl-conditions)
- [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)
- [lem-qec-prereq-signed-ae-code-product-test](item-lem-qec-prereq-signed-ae-code-product-test)
- [thm-qec-prereq-spaced-ae-moment-criterion](item-thm-qec-prereq-spaced-ae-moment-criterion)
- [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [lem-author-179395ddbb85-low-rank-spin-polynomials](item-lem-author-179395ddbb85-low-rank-spin-polynomials)
- [lem-author-179395ddbb85-kl-detects-quadratic-spin-errors](item-lem-author-179395ddbb85-kl-detects-quadratic-spin-errors)
- [lem-author-179395ddbb85-two-code-cubic-moments](item-lem-author-179395ddbb85-two-code-cubic-moments)
- [lem-author-179395ddbb85-two-code-support-gaps](item-lem-author-179395ddbb85-two-code-support-gaps)
- [lem-author-179395ddbb85-exact-tensor-distance-three](item-lem-author-179395ddbb85-exact-tensor-distance-three)
- [` Class of codes correcting absorptions and emissions · §II, PDF p. 2, Eqs. (1)–(4), and the distance paragraph continuing on PDF p. 3; §III A, PDF pp. 3–4, Theorem III.1; PDF p. 4, Construction III.1, Theorem III.3 and Examples 1–2. `](https://arxiv.org/pdf/2410.03562v1)


## Statement

Consider the displayed signed Aydin–Barg encoding in $J=4$ and the displayed Æ encoding in $J=5$. For either code choose a finite set of output spin blocks containing its input block and obeying $|J'-J|\leq1$. Both codes satisfy the pair-product Knill–Laflamme condition for the complete selected coherent order-one tensor error span. Therefore every finite trace-preserving Kraus channel whose errors lie in that span has an exact decoded recovery on the code. Tensor components change magnetic labels by $|m'-m|\leq1$; this is not a claim about every separately resolved matrix-unit transition with those label bounds.

The spin-four code uses smaller minimum magnetic-support separation, two rather than three, at lower hosting spin, four rather than five (block dimensions nine rather than eleven). In the explicit within-block distance convention of the distance lemma—the smallest spherical-tensor rank with a nonscalar code compression—both codes have exact distance three. They also both have exact spin-polynomial distance three, measured by the first undetected degree in the Cartesian spin generators. Thus the article's equal-distance comparison has this precise supported interpretation. It does not assert equality under an unspecified alternative metric or global minimality of $J=4$.

For the zero-temperature downward-branch specialization, select the lower block $J-1$ as well as the input block, and assume Choice, Countable Choice and Dependent Choice, finitely many integer-spin blocks, strictly increasing spin-manifold energies, a rank-one spherical coupling, and all bath preparation, ULE/weak-Markov, regularity, spectral-matching and compatible vacuum-limit hypotheses of [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps). In particular the chosen nonnegative spectral representative must vanish at every required nonpositive transition frequency, including zero. Under those hypotheses, the single-jump errors out of the code's host block have only $J\to J-1$ and lie in its selected order-one span. Zero temperature by itself is not used to assert a pointwise spectral value or to eliminate zero-frequency intramanifold transitions. Exact recovery above concerns channels with Kraus errors in the stated span; arbitrary finite-time repeated jumps or degeneracy-resolved errors require their own analysis.

## Facts & Assumptions

**Given:** The finite objects, measure conventions and explicit hypotheses in the Statement.

[F1] The article-selected signed spin-four encoding has the displayed magnetic amplitudes and its isometric code. [def-qec-distinguishability-aydin-barg-code](item-def-qec-distinguishability-aydin-barg-code)

[F2] The article-selected spin-five encoding has the displayed magnetic amplitudes and its isometric code. [def-qec-distinguishability-ae-code](item-def-qec-distinguishability-ae-code)

[F3] Rank one denotes a coherent spherical tensor transformation law, not matrix rank or an arbitrary resolved matrix unit. [def-qec-distinguishability-rank-one-transitions](item-def-qec-distinguishability-rank-one-transitions)

[F4] The finite Kraus channel criterion supplies exact decoded recovery from scalar pair products, with trace preservation required. [thm-qec-distinguishability-kl-conditions](item-thm-qec-distinguishability-kl-conditions)

[F5] The complete selected order-one tensor error span contains rank-zero and rank-one components with the specified target blocks. [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

[F6] The signed spin-four code satisfies the full order-one pair-product condition without a separated-support assumption. [lem-qec-prereq-signed-ae-code-product-test](item-lem-qec-prereq-signed-ae-code-product-test)

[F7] The spaced-support moment criterion supplies the order-one pair-product condition when support gaps are at least three and moments zero through two agree. [thm-qec-prereq-spaced-ae-moment-criterion](item-thm-qec-prereq-spaced-ae-moment-criterion)

[F8] Under its complete finite-block physical and pointwise spectral hypotheses, the canonical atomic jumps have only the downward spin branch. [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

[F9] Assume the Axiom of Choice for inherited physical supplier constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F10] Assume Countable Choice for inherited physical and mathematical suppliers. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F11] Assume Dependent Choice for the inherited canonical-jump hypotheses. [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

[F12] Within-block tensor families through rank three have the stated polynomial realizations and uniqueness. [lem-author-179395ddbb85-low-rank-spin-polynomials](item-lem-author-179395ddbb85-low-rank-spin-polynomials)

[F13] Pair-product correction detects every quadratic spin error and every tensor component through rank two. [lem-author-179395ddbb85-kl-detects-quadratic-spin-errors](item-lem-author-179395ddbb85-kl-detects-quadratic-spin-errors)

[F14] The two explicit encodings have the stated first, second and third moment matrices. [lem-author-179395ddbb85-two-code-cubic-moments](item-lem-author-179395ddbb85-two-code-cubic-moments)

[F15] Their magnetic support unions have minimum gaps two and three and hosting dimensions nine and eleven. [lem-author-179395ddbb85-two-code-support-gaps](item-lem-author-179395ddbb85-two-code-support-gaps)

[F16] Both code distances equal three in the explicit minimum-undetected-rank and polynomial-degree conventions once their pair-product conditions hold. [lem-author-179395ddbb85-exact-tensor-distance-three](item-lem-author-179395ddbb85-exact-tensor-distance-three)

## Proof

**Goal:** Establish the stated formula, convergence and qualifications.

1.1 The signed spin-four code in [F1] is exactly the isometry in [F6], so it has the complete order-one pair-product condition. For the spin-five code in [F2], [F15] gives disjoint supports with minimum gap three. Fact [F14] gives moments $1,0,10$ for either column, so [F7] establishes its pair-product condition for the complete selected span. Both selected sets contain their input blocks, as required. Applying [F4] to any finite trace-preserving Kraus family inside either span gives the corresponding exact decoded recovery; a bare unnormalized spanning list is not called a channel. [F1, F2, F4, F5, F6, F7, F14, F15, algebra]

2.1 By [F15] the support and host-spin comparison is exactly two versus three and four versus five. Step 1.1 supplies the pair-product hypotheses of [F13] and [F16]. With [F12] and the cubic moments [F14], those results give exact distance three in both stated conventions for each code. In particular equality of correction order alone is not substituted for equality of these distances: the rank-three witnesses provide the matching upper bounds. [F12, F13, F14, F15, F16, step 1.1]

2.2 For the general selected tensor family, the rank-one selection rule [F3] gives $|m'-m|\leq1$ and the selected-spin condition gives $|J'-J|\leq1$. With the additional full hypotheses in the final Statement paragraph, [F8] removes the nonpositive-frequency branches and supplies only the coherent downward jumps. Their restriction to a fixed host block is a rank-one tensor component into the lower selected block, so [F5] and step 1.1 cover these single-jump errors. This deduction needs the stated spectral representative and increasing energies, in addition to the vacuum hypothesis; it does not follow from zero temperature alone. [F3, F5, F8, F9, F10, F11, step 1.1]

3.1 The preceding steps prove the claimed coherent correction, support and distance comparisons and the conditional downward-branch specialization. They neither replace coherent components by individually resolved matrix units nor infer that the entire finite-time noisy channel remains in the order-one span. These are exactly the model and channel qualifications in the Statement, with the article's comparison retained as attribution. [F3, F4, F5, F8, step 1.1, step 2.1, step 2.2] ∎

## Source notes

The original article, PDF p. 6 Aydin–Barg bullet and Fig. 4, says the signed $J=4$ code “corrects the same rank-1 transitions with smaller separation between the supporting states, achieving the same code distance at lower J.” Its Fig. S5.1 caption on PDF p. 17 specifies the label bounds and says only the downward branch occurs at zero temperature. These claims are preserved with the coherent-span meaning and explicit distance convention above. The article does not define a distance metric in these cited passages; the local distance comparison is proved from the code amplitudes and tensor structure, not inferred from the wording.

Independent source context: Aydin and Barg, Class of codes correcting absorptions and emissions, arXiv:2410.03562v1, PDF p. 2, §II Eqs. (1)–(4) and the paragraph continuing on p. 3, defines coherent order-t and spin error families. It explicitly declines to use a proposed spin-code distance convention in its results. The code constructions and examples in §III, PDF pp. 3–5, are not simply identified with the target's signed $J=4$ code. Actual reading for this resolution uses those source definitions/statement passages and the already completed signed-code supplier; its imported Theorem III.1 remains subject to that supplier's honest reading limits, including no Appendix C reconstruction. This theorem supplies its distance calculation locally and does not import an unspecified distance equality.

The source's code-distance phrase is an interpretation issue resolved here by explicit formulation, not an independently assessed article defect. The original figure curves and checking-time fits are not inputs to this proof, and no numerical reproduction, experiment, separate review or scientific acceptance is asserted.
