---
id: thm-koopman-operator-is-a-linear-isometry-on-l-p
kind: theorem
title: Koopman operators are linear isometries
deps: [def-koopman-operator-on-l-p, thm-integrals-are-invariant-under-measure-preserving-maps, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space,
  prop-essential-supremum-is-attained-as-the-least-essential-bound, thm-complex-holder-minkowski-and-the-quotient-norm, def-invertible-measure-preserving-system]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Einsiedler–Ward §2.4 opening, pp.28–29 (isometry paragraph, not Lemma 2.18)
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For a measure-preserving system and $1\le p\le\infty$, $U_T$ is a well-defined linear isometry on real or complex $L^p$. It is surjective for an invertible system, and also for a system invertible modulo null sets in the invariant-restriction convention.

## Facts & Assumptions

[F1] Koopman is pullback on a.e. classes [[def-koopman-operator-on-l-p]].

[F2] Pullback preserves nonnegative integrals [[thm-integrals-are-invariant-under-measure-preserving-maps]].

[F3] The norm is the least essential bound [[prop-essential-supremum-is-attained-as-the-least-essential-bound]].

[F4] The real Lp norm and quotient operations are well-defined [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]].

[F5] Complex Lp has the stated quotient operations and norm [[thm-complex-holder-minkowski-and-the-quotient-norm]].

[F6] An invertible system has a measurable inverse, either everywhere or on the specified conull restriction [[def-invertible-measure-preserving-system]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Composition with measurable $T$ is measurable. If $f=g$ outside a measurable null set $N$, then $f\circ T=g\circ T$ outside $T^{-1}N$, which is measurable and null. Thus pullback respects the a.e. equivalence relation used to define $U_T$. [F1, given]

2.1 For $p<\infty$, integral invariance applied to the nonnegative function $|f|^p$ gives $\|f\circ T\|_p^p=\int |f|^p\circ T=\int|f|^p=\|f\|_p^p$. Thus the pullback belongs to $L^p$ and preserves the norm, including at $p=1$. [F2, step 1.1]

2.2 For every $M\ge0$, $\{|f\circ T|>M\}=T^{-1}\{|f|>M\}$ has the same measure as $\{|f|>M\}$. The sets of finite essential bounds therefore coincide, so their infima coincide. The least-essential-bound result applies to the real modulus, proving membership and equality of the infinity norms. [F3, step 1.1]

3.1 Pointwise, $(\alpha f+\beta g)\circ T=\alpha(f\circ T)+\beta(g\circ T)$. The real and complex quotient norm theorems make these the quotient vector operations. Together with steps 1.1, 2.1 and 2.2 this proves linear isometry. [F4, F5, step 1.1, step 2.1, step 2.2]

4.1 For an actual measurable inverse $S=T^{-1}$, $TE=S^{-1}E$ is measurable and $\mu(TE)=\mu(T^{-1}(TE))=\mu(E)$. Thus $S$ preserves measure. Both compositions $U_TU_S$ and $U_SU_T$ are the identity, so $U_T$ is onto. [F6, step 3.1]

5.1 In the modulo-null case restrict to the measurable conull invariant $X_0$ of the definition. For measurable $E\subseteq X_0$, $T^{-1}E$ differs from its restricted inverse image only within $X\setminus X_0$, so the restricted map preserves restricted measure. Step 4.1 applies there. For any measurable $f$ on $X$, compose $f|_{X_0}$ with the restricted inverse and extend by zero on $X\setminus X_0$. This extension is measurable, has the same Lp norm as $f$, and pulls back to $f$ on $X_0$. It supplies a preimage class. [F6, step 4.1] ∎
