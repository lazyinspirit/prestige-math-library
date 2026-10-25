---
id: lem-c-zero-is-a-closed-subspace-of-ell-infinity
kind: lemma
title: c_0 is a closed subspace of ell-infinity
status: published
origin: pipeline
deps: [def-c-zero-and-ell-infinity, def-metric-topology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
sources:
  references:
    - title: Piotr Hajlasz, Functional Analysis, §10.5
      url: https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf
---

## Statement

$c_0$ is a closed linear subspace of $\ell^\infty$ in the sup norm.

## Facts & Assumptions

**Given:** The sequence spaces $c_0\subseteq\ell^\infty$.

[F1] $c_0$ consists of bounded sequences tending to zero, with the sup norm ([[def-c-zero-and-ell-infinity]]).

## Proof

**Proof technique:** direct.

1.1 Sums and scalar multiples of null sequences are null, so $c_0$ is a linear subspace. [F1, given]

1.2 If $x^{(j)}\in c_0$ and $\|x^{(j)}-x\|_\infty\to0$, choose $j$ with this norm below $\varepsilon/2$, then $N$ with $|x^{(j)}_n|<\varepsilon/2$ for $n\ge N$. Thus $|x_n|<\varepsilon$ for $n\ge N$. [F1, given, choose]

2.1 Hence $x\in c_0$ and the subspace is closed. [step 1.2] ∎
