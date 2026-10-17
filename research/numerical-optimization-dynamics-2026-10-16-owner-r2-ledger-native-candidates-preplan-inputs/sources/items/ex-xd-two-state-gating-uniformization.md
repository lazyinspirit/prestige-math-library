---
id: ex-xd-two-state-gating-uniformization
kind: example
title: "Two-state gating through uniformization"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-xd-finite-column-generator
  - thm-xd-finite-generator-master-equation-uniformization
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
justified_by: []
aliases: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§§3.2–3.4, PDF pp. 7–16; two-state transition rates and the uniformization formula."
---

## Example

For an off/on gate, let the rate from off to on be $\alpha\ge0$ and the rate from on to off be $\beta\ge0$. With column probability vector $(p_{\rm off},p_{\rm on})^T$ and $s=\alpha+\beta$, the generator is

$$Q=\begin{pmatrix}-\alpha&\beta\\\alpha&-\beta\end{pmatrix}.$$

Starting off, if $s>0$ the exact on probability is $p_{\rm on}(t)=\frac{\alpha}{s}(1-e^{-st})$; if $s=0$ the gate remains off. The case $\alpha=0$ gives no opening, while $\beta=0$ gives $p_{\rm on}(t)=1-e^{-\alpha t}$.

## Facts & Assumptions

**Given:** The states are off and on; the transition rates are $\alpha\ge0$ from off to on and $\beta\ge0$ from on to off; the initial vector is $e_{\rm off}=(1,0)^T$.

[F1] [[def-xd-finite-column-generator]]: the source state indexes the column, off-diagonal entries are nonnegative, and columns sum to zero.

[F2] [[thm-xd-finite-generator-master-equation-uniformization]]: the unique master-equation solution equals the Poisson-weighted sum of $P^ke_{\rm off}$ for any admissible $\nu>0$.

[F3] [[def-scalar-poisson-count-law]] and [[lem-poisson-count-law-normalization-and-moments]]: the Poisson weights sum to one and the mass at zero is $e^{-st}$.

## Verification

**Proof technique:** compute the two-state uniformization matrix and sum its nontrivial powers.

1.1 The matrix $Q$ in the Example has off-diagonal entries $\alpha,\beta\ge0$ and both columns sum to zero, so it satisfies [F1]; its exit rates are $\alpha$ and $\beta$. [given, F1, algebra]

1.2 Suppose $s>0$ and choose $\nu=s$. Then
$P=I+Q/s=\begin{pmatrix}\beta/s&\beta/s\\\alpha/s&\alpha/s\end{pmatrix}$.
Both columns equal the probability vector $v=(\beta/s,\alpha/s)^T$. Therefore $Pe_{\rm off}=v$ and $Pv=v$, which by induction gives $P^ke_{\rm off}=v$ for every $k\ge1$. [given, F1, construct, algebra, induction]

2.1 By [F2], the on-coordinate at time $t$ is $\sum_{k\ge1}e^{-st}(st)^k(\alpha/s)/k!$. By [F3] the sum of the masses over $k\ge1$ is $1-e^{-st}$, so $p_{\rm on}(t)=\frac{\alpha}{s}(1-e^{-st})$. The off-coordinate is $1-p_{\rm on}(t)$ because the solution is a probability vector. [given, F2, F3, step 1.2, algebra]

3.1 If $s=0$, nonnegativity of $\alpha,\beta$ implies $\alpha=\beta=0$, so $Q=0$ and the master equation keeps $e_{\rm off}$ fixed. If $s>0$ and $\alpha=0$, the formula gives $p_{\rm on}=0$; if $\beta=0$, it gives $p_{\rm on}=1-e^{-\alpha t}$. The endpoint cases agree with the stated rates. [given, F1, F2, step 2.1, algebra] ∎
