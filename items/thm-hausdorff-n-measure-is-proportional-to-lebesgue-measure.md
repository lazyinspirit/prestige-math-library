---
id: "thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure"
kind: "theorem"
title: "Euclidean Hausdorff measure is proportional to Lebesgue measure"
deps: ["lem-euclidean-cube-bounds-for-hausdorff-measure", "cor-hausdorff-measure-under-similarities", "thm-hausdorff-measure-is-metric-and-borel-measurable", "thm-hausdorff-measure-has-borel-hulls", "thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure", "cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls", "thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264I statement (weaker constant); design MT-21 prescribed uniqueness route
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For each integer $n\ge1$ there is a finite $c_n\in[1,n^{n/2}]$ such that

$$\mathcal H^n(B)=c_n\lambda_n(B)\quad(B\text{ Borel}),\qquad \mathcal H^n(A)=c_n\lambda_n^*(A)\quad(A\subseteq\mathbb R^n).$$

Here $c_n=\mathcal H^n((0,1]^n)$ and $c_1=1$. For $n\ge2$ no exact identification of $c_n$ is proved here.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, the Hausdorff measure of $(0,1]^n$ lies between one and $n^{n/2}$. [[lem-euclidean-cube-bounds-for-hausdorff-measure]]

[F2] Under the standing Countable Choice hypothesis, isometries, including translations, preserve Hausdorff outer measure. [[cor-hausdorff-measure-under-similarities]]

[F3] Under the standing Countable Choice hypothesis, hausdorff outer measure restricts to a measure on the Borel sets. [[thm-hausdorff-measure-is-metric-and-borel-measurable]]

[F4] Under the standing Countable Choice hypothesis, every set has an equal-Hausdorff-measure Borel hull. [[thm-hausdorff-measure-has-borel-hulls]]

[F5] Under Countable Choice, a translation-invariant Borel measure on $\mathbb R^n$ giving $(0,1]^n$ value one equals Lebesgue measure on Borel sets. [[thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure]]

[F6] Under Countable Choice, every subset of $\mathbb R^n$ has a Borel (indeed $G_\delta$) superset of equal Lebesgue outer measure. [[cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls]]

[F7] Under the standing Countable Choice hypothesis, on the line $\mathcal H^1=\lambda_1^*$ on all subsets. [[thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line]]

## Proof

1.1 Set $c_n=\mathcal H^n((0,1]^n)$, which is finite and positive. The Borel function $\nu(B)=c_n^{-1}\mathcal H^n(B)$ is a measure, since multiplication by a fixed positive scalar preserves nonnegative sums. [F1, F3]

2.1 Translations preserve $\nu$ and $\nu((0,1]^n)=1$. The uniqueness theorem therefore gives $\nu(B)=\lambda_n(B)$ for every Borel $B$. Its hypotheses include Countable Choice, the Borel domain, and precisely the half-open normalising cube used here. [F2, F5, step 1.1]

3.1 For arbitrary $A$, take its Hausdorff Borel hull $G$. Then $c_n\lambda_n^*(A)\le c_n\lambda_n(G)=\mathcal H^n(A)$. Take instead a Lebesgue Borel hull $H$; then $\mathcal H^n(A)\le\mathcal H^n(H)=c_n\lambda_n^*(A)$. Both inequalities remain valid for infinite values, and the empty set has zero value. [F4, F6, step 2.1]

4.1 The line equality gives $c_1=1$ by evaluation on $(0,1]$. The higher-dimensional proof used only the finite positive cube bounds, so it has established no sharper constant. [F7, step 1.1] ∎
