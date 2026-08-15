---
id: ex-north-east-west-walks-without-immediate-horizontal-reversal
kind: example
title: "North–east–west walks without immediate horizontal reversal satisfy $a_n=2a_{n-1}+a_{n-2}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-linear-recurrence-iff-rational-generating-function, thm-transfer-matrix-cofactor-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: state-elimination
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Example 4.1.3"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Example

Let $a_n$ be the number of length-$n$ words over $\{N,E,W\}$ in which neither $EW$ nor $WE$ occurs. Then

$$a_0=1,\qquad a_1=3,\qquad a_n=2a_{n-1}+a_{n-2}\quad(n\ge2),$$

and

$$\sum_{n\ge0}a_nx^n=\frac{1+x}{1-2x-x^2}.$$

For nonempty words, classification by the last letter gives the transfer matrix

$$A=\begin{pmatrix}1&1&1\\1&1&0\\1&0&1\end{pmatrix}$$

in the state order $N,E,W$.

## Facts & Assumptions

**Given:** Words over $\{N,E,W\}$ with the adjacent factors $EW$ and $WE$ forbidden.

[L1] An eventual recurrence is equivalent to rationality of the ordinary formal generating function, with the numerator determined by the initial coefficients ([[thm-linear-recurrence-iff-rational-generating-function]]).

[L2] Finite-state walk series are rational cofactor quotients of their transfer matrix ([[thm-transfer-matrix-cofactor-formula]]).

## Verification

**Proof technique:** state elimination and transfer check.

1.1 Let $N_n,E_n,W_n$ count valid nonempty words by their last letter. Appending $N$ is always allowed, whereas $E$ may not follow $W$ and $W$ may not follow $E$; this gives the displayed matrix and $N_n=a_{n-1}$ for $n\ge1$. [given, algebra]

2.1 For $n\ge2$, the state equations give $E_n+W_n=2N_{n-1}+E_{n-1}+W_{n-1}=a_{n-1}+a_{n-2}$. Together with $N_n=a_{n-1}$ this yields $a_n=2a_{n-1}+a_{n-2}$. [step 1.1, algebra]

3.1 The empty word and the three one-letter words give $a_0=1,a_1=3$. Multiplying the coefficient series by $1-2x-x^2$ and using step 2.1 leaves $1+x$, so [L1] gives the displayed generating function. [step 2.1, L1, algebra]

4.1 As a consistency check, [L2] applied to the displayed matrix makes $1+x\mathbf1^{\mathsf T}(I-xA)^{-1}\mathbf1$ equal to the same quotient; the leading $1$ counts the empty word. [step 1.1, L2, algebra] ∎
