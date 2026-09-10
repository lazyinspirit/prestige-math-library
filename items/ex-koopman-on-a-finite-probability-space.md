---
id: ex-koopman-on-a-finite-probability-space
kind: example
title: The Koopman matrix for a two-point swap
deps: [def-koopman-operator-on-l-p, thm-koopman-operator-is-a-linear-isometry-on-l-p]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Einsiedler–Ward §2.4, pp.28–29; explicit finite specialization
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: draft
origin: pipeline
generation:
  role: example
proof_strategy: direct
---

## Example

For the two-point probability space with masses $1/2,1/2$ and swap T, the Koopman operator sends $(a,b)$ to $(b,a)$, has matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, and preserves every real or complex Lp norm for $1\le p\le\infty$.

## Facts & Assumptions

[F1] Koopman acts by composing each function with T [[def-koopman-operator-on-l-p]].

[F2] Every probability-preserving pullback preserves Lp norms, including infinity [[thm-koopman-operator-is-a-linear-isometry-on-l-p]].

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 The cardinality measure $\mu(E)=|E|/2$ is countably additive, since a disjoint family has at most two nonempty members. The inverse images of $\varnothing,\{0\},\{1\},X$ are $\varnothing,\{1\},\{0\},X$, with masses $0,1/2,1/2,1$. Hence the swap is measurable and preserves this probability measure. For $f(0)=a,f(1)=b$, pullback gives $U_Tf(0)=b,U_Tf(1)=a$, the displayed matrix formula. [F1, given]

2.1 For finite p, $\|U_T(a,b)\|_p=((|b|^p+|a|^p)/2)^{1/p}=\|(a,b)\|_p$. For infinity, both norms equal $\max\{|a|,|b|\}$. Thus the direct calculation, including zero coordinates, agrees with the general Koopman isometry theorem. [F2, step 1.1] ∎
