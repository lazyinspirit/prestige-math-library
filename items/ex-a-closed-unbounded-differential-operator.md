---
id: ex-a-closed-unbounded-differential-operator
kind: example
title: "Differentiation on C^1[0,1] is closed and unbounded in the supremum norm"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-graph-of-a-linear-operator, def-closable-linear-operator, def-the-integral-function, thm-continuous-implies-integrable, thm-newton-leibniz-with-interior-derivative]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources: {references: [{title: "Teschl, Topics in Real and Functional Analysis, Problem 4.8", url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"}]}
---
## Example
With supremum norms, $D:C^1[0,1]\subset C[0,1]\to C[0,1]$, $Df=f'$, has closed graph but is unbounded.
## Facts & Assumptions
**Given:** $f_n\to f$ and $f_n'\to g$ uniformly, with $f_n\in C^1[0,1]$.
## Verification
**Proof technique:** direct.

1.1 Newton--Leibniz [[thm-newton-leibniz-with-interior-derivative]] gives $f_n(t)-f_n(0)=\int_0^t f_n'(s)\,ds$. Passing to uniform limits yields $f(t)-f(0)=\int_0^t g(s)\,ds$. [given]

2.1 Since $g$ is continuous, the integral function is differentiable with derivative $g$; hence $f\in C^1$ and $Df=g$. The graph ([[def-graph-of-a-linear-operator]]) is closed. [step 1.1]

3.1 For integers $n\ge1$, put $f_n(t)=\sin(nt)/n$. Then $\|f_n\|_\infty\le1/n$ whereas $\|Df_n\|_\infty=1$, so $D$ is unbounded. [given] ∎
