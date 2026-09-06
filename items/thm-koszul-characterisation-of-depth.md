---
id: thm-koszul-characterisation-of-depth
title: The Koszul characterization of depth
kind: theorem
status: published
origin: pipeline
deps: [lem-koszul-depth-first-nonzero-cohomology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Under the hypotheses and notation of
`lem-koszul-depth-first-nonzero-cohomology`, if
$q=\max\{j:H_j(K_\bullet(\mathbf x;M))\ne0\}$, then
$$\operatorname{depth}_I(M) =\min\{i:H^i(K^\bullet(\mathbf x;M))\ne0\}=n-q.$$
In particular the result is independent of the chosen finite generating
sequence of $I$.

## Facts & Assumptions

**Given:** $(R,\mathfrak m)$ is Noetherian local, $0\ne M$ is finite, and $I=(\mathbf x)\subseteq\mathfrak m$.

## Proof

**Proof technique:** direct.

1.1 `lem-koszul-depth-first-nonzero-cohomology` proves both displayed equalities. [given]

2.1 Their common value is $\operatorname{depth}_I(M)$, which is defined from $I$ and $M$ rather than from the chosen generators. Hence the numerical Koszul expression is generator-independent. [step 1.1, algebra] ∎
