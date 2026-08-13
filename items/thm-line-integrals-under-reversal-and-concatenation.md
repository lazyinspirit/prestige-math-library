---
id: thm-line-integrals-under-reversal-and-concatenation
kind: theorem
title: "Line integrals under reversal and concatenation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-piecewise-c1-path-operations-and-oriented-reparametrizations, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, lem-line-integrals-are-independent-of-the-piecewise-c1-partition, thm-line-integrals-under-oriented-reparametrization, thm-additivity-over-subintervals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 9.2"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Statement

Let $\gamma$ be a piecewise-$C^1$ path, and let $f$ be a continuous scalar field and $F$ a continuous vector field on a set containing its trace. Then

$$\int_{\gamma^-}f\,ds=\int_\gamma f\,ds,\qquad \int_{\gamma^-}F\cdot d\mathbf r=-\int_\gamma F\cdot d\mathbf r.$$

If piecewise-$C^1$ paths $\alpha,\beta:[0,1]\to\mathbb R^n$ satisfy $\alpha(1)=\beta(0)$, and $f$ and $F$ are continuous on a set containing both traces, then

$$\int_{\alpha*\beta}f\,ds=\int_\alpha f\,ds+\int_\beta f\,ds,$$
$$\int_{\alpha*\beta}F\cdot d\mathbf r=\int_\alpha F\cdot d\mathbf r+\int_\beta F\cdot d\mathbf r.$$

## Facts & Assumptions
**Given:** The paths and fields in the Statement.

[L1] Reversal is $\gamma^-(t)=\gamma(a+b-t)$, and concatenation uses $\alpha(2t)$ and $\beta(2t-1)$ on the two halves of $[0,1]$ ([[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]).

[L2] Scalar line integrals are unchanged by oriented reparametrization; vector line integrals are unchanged under preservation and negated under reversal ([[thm-line-integrals-under-oriented-reparametrization]]).

[L3] Line-integral sums are independent of the admissible partition ([[lem-line-integrals-are-independent-of-the-piecewise-c1-partition]]).

[L4] Oriented one-variable integrals are additive across every intermediate point ([[thm-additivity-over-subintervals]]).

[L5] Scalar and vector line integrals are sums of their defining one-variable integrals over smooth pieces ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).



## Proof

**Proof technique:** direct.

1.1 If $a=b$, [L5] makes the two line integrals over both $\gamma$ and $\gamma^-$ zero. If $a<b$, the affine map $t\mapsto a+b-t$ is orientation-reversing, so applying [L2] to the reversal in [L1] proves the two formulas. [L1, L2, L5, algebra]

1.2 Split the concatenation at $1/2$. The first half is the orientation-preserving affine reparametrization $t\mapsto2t$ of $\alpha$, and the second is the orientation-preserving affine reparametrization $t\mapsto2t-1$ of $\beta$. [L1, algebra]

2.1 By [L2], each half-integral in step 1.2 equals the corresponding integral over $\alpha$ or $\beta$. By [L3], [L4], and [L5], the sum of the two half-integrals is the integral over $\alpha*\beta$. This proves both concatenation formulas. [step 1.2, L2, L3, L4, L5]

3.1 The join point is an allowed partition point, so no derivative match is required there. If either path is constant, its derivative and both of its line-integral contributions are zero, and the formulas remain valid. [L1, L5, algebra] ∎
