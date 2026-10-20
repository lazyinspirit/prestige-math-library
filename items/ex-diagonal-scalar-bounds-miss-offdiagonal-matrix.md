---
id: ex-diagonal-scalar-bounds-miss-offdiagonal-matrix
kind: example
title: Diagonal scalar bounds miss off-diagonal matrix size
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-empirical-bernstein-confidence-sequence
  - thm-empirical-bernstein-confidence-sequence
  - thm-continuity-from-above-for-measures
  - def-axiom-of-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Assume AC and fix $\delta\in(0,1)$. For each real $r>0$, let $A_t=A^{(r)}=\begin{pmatrix}0&r\\r&0\end{pmatrix}$ for every $t\geq1$. Define the Euclidean operator norm by $\|A\|_{\mathrm{op}}=\sup_{\|x\|_2=1}\|Ax\|_2$, where $\|x\|_2=\sqrt{x_1^2+x_2^2}$. Both diagonal entry streams are identically zero; with scalar bounds $a=b=0$ and the constant predictable forecasts $\widehat X_t=0$, the scalar theorem returns $[0,0]$ for both coordinates at every time, independently of $r$. Yet $\|A^{(r)}\|_{\mathrm{op}}=r$, which is unbounded across this family. An operator-norm confidence sequence at level $1-\delta$ consists of matrix estimates $\widehat A_t$ and almost-surely finite nonnegative radii $R_t$ satisfying $P(\|A_t-\widehat A_t\|_{\mathrm{op}}\leq R_t\text{ for every }t)\geq1-\delta$. Any rule using only the two diagonal interval streams (and, if randomized, auxiliary randomness whose law is independent of $r$) has the same time-one output law for every $r$. Such a rule cannot have the stated coverage uniformly over this family. A matrix-valued conclusion needs separate assumptions and an argument for the matrix process.

## Example references

[[thm-empirical-bernstein-confidence-sequence|The scalar theorem's domain and interval guarantee]]

## Facts & Assumptions

**Given:** Assume AC and fix $\delta\in(0,1)$. The deterministic symmetric matrix family and any estimation rule restricted to its diagonal interval streams, with auxiliary randomness independent of $r$, are as in the Example.

[F1] [[thm-empirical-bernstein-confidence-sequence]]: with bounded observations and predictable forecasts, the theorem gives simultaneous coverage for the running scalar conditional-mean target.

[F2] [[alg-empirical-bernstein-confidence-sequence]]: when $a=b$, the update returns $[a,a]$ at every time.

[F3] [[thm-continuity-from-above-for-measures]]: for decreasing measurable sets under a finite measure, their measures converge to the measure of their intersection.

[A1] [[def-axiom-of-choice]]: AC is explicitly assumed by the scalar theorem.

## Verification

1.1 For every $r>0$, each diagonal entry of $A^{(r)}$ is the constant zero. With scalar bounds $a=b=0$ and forecast $\widehat X_t=0$, each coordinate process satisfies the theorem's hypotheses; [F2] gives the returned interval $[0,0]$ at every time, independently of $r$. [given, F1, F2, A1]

1.2 For every vector $x\in\mathbb R^2$, $(A^{(r)})^{\mathsf T}A^{(r)}=r^2I$ gives $\|A^{(r)}x\|_2^2=r^2\|x\|_2^2$, hence $\|A^{(r)}\|_{\mathrm{op}}=r$. [given, algebra]

2.1 Let $(\widehat A_1,R_1)$ have the common time-one output law from the Example, with $R_1$ finite almost surely. For each integer $n\geq1$, the reverse triangle inequality gives $P(\|A^{(n)}-\widehat A_1\|_{\mathrm{op}}\leq R_1)\leq P(\|\widehat A_1\|_{\mathrm{op}}+R_1\geq n)$. The events on the right decrease to the null event where a finite random variable is infinite; [F3] makes their probabilities tend to zero. Since $1-\delta>0$, some $n$ has time-one coverage probability below $1-\delta$, and the all-times event is contained in the time-one event. Thus no such rule gives uniform coverage over the family. [given, F3, step 1.2, algebra] ∎
