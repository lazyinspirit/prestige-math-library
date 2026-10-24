---
id: thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
title: "Finite dimensional norm equivalence over a complete valued field"
kind: theorem
status: published
origin: pipeline
deps: [def-normed-vector-space-over-an-absolutely-valued-field]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a75, Theorem 5.5 and proof, p.9"
      url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
proof_strategy: direct argument
---

## Statement

Let F be complete for a multiplicative absolute value and V a finite-dimensional normed F-vector space. For any basis $v_1,\ldots,v_n$, its coordinate sup norm $\|\sum a_iv_i\|_\infty=\max_i|a_i|$ is bounded above and below by positive multiples of the given norm. For $n=0$ both norms are zero. Consequently V is complete and every linear subspace is closed.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[def-normed-vector-space-over-an-absolutely-valued-field]]: Let F carry a multiplicative absolute value. A norm on an F-vector space V is a function $\|\cdot\|:V\to\mathbb R_{\ge0}$ satisfying $\|v\|=0$ exactly for $v=0$, $\|av\|=|a|\|v\|,\qquad\|v+w\|\le\|v\|+\|w\|.$ Its metric is $d(v,w)=\|v-w\|$. The scalar absolute value may be archimedean, nonarchimedean or trivial; it is not restricted to real or complex scalars.

## Proof

1.1 The norm axioms imply $\|\sum a_iv_i\|\le(\sum\|v_i\|)\max|a_i|$ when n is positive. In dimension zero completeness and comparison are immediate. In dimension one $\|av_1\|=|a|\|v_1\|$ gives both bounds and completeness. [F1, given]

2.1 Proceed by finite induction. Assume the result for smaller dimensions. Every coordinate hyperplane $H_i$ is complete in its restricted norm and therefore closed: a point in its closure is approached by a sequence within distance 1/n, a Cauchy sequence whose limit in $H_i$ equals that point. Put $c_i=\inf_{h\in H_i}\|v_i-h\|>0$, since the complement of the closed hyperplane is open. Translation and scaling by a nonzero scalar give $\inf_{h\in H_i}\|a_iv_i-h\|=|a_i|c_i$; the assertion is also valid for $a_i=0$. [step 1.1]

3.1 For $v=\sum a_jv_j$, subtract its other coordinates to obtain $|a_i|c_i\le\|v\|$. Thus $\|v\|_\infty\le(\max_i c_i^{-1})\|v\|$, completing the induction. A Cauchy sequence has coordinatewise limits in F and converges by the upper bound, so V is complete. Every subspace, being finite-dimensional, is complete by the same argument and hence closed. No compactness of a unit sphere or nontrivial scalar valuation was assumed. [step 1.1, step 2.1] ∎
