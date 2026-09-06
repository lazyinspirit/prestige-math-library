---
id: ex-distance-to-a-subspace-via-annihilating-functionals
kind: example
title: Distance to a subspace via annihilating functionals
status: draft
origin: pipeline
deps: [def-continuous-annihilator-of-a-subspace, thm-norm-preserving-extension-from-any-subspace]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Theorem 2.53
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Example

For a subspace $M\subseteq X$ and $x\in X$,

$$\operatorname{dist}(x,\overline M)=\sup\{|f(x)|:f\in M^\perp,\ \|f\|\le1\}.$$

## Facts & Assumptions

**Given:** A subspace $M\subseteq X$ and $x\in X$.

[F1] A bounded linear functional on a subspace extends to the ambient normed space without changing its norm ([[thm-norm-preserving-extension-from-any-subspace]]).

## Verification

**Proof technique:** direct.

1.1 For $f\in M^\perp$ with $\|f\|\le1$, continuity gives $f|_{\overline M}=0$.  Hence, for every $m\in\overline M$, $|f(x)|=|f(x-m)|\le\|x-m\|$.  Taking infima gives the $\le$ direction. [given, algebra]

2.1 Put $\delta=\operatorname{dist}(x,\overline M)$.  If $\delta>0$, define $g:\overline M+\mathbb Kx\to\mathbb K$ by $g(m+\lambda x)=\lambda\delta$.  This is well defined, and $$|g(m+\lambda x)|=|\lambda|\delta\le\|m+\lambda x\|,$$ so $\|g\|\le1$.  By [F1], $g$ extends to an $f\in X^*$ with $\|f\|\le1$; this extension lies in $M^\perp$ and satisfies $|f(x)|=\delta$.  If $\delta=0$, then $x\in\overline M$, so continuity makes every annihilator vanish at $x$.  Thus equality holds in both cases. [F1, given, construct, algebra] ∎
