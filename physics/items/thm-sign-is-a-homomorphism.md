---
id: thm-sign-is-a-homomorphism
kind: theorem
title: 'The sign is a homomorphism $S_n\to\{+1,-1\}$, surjective exactly when $n\ge 2$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-inversions-inversion-number-and-sign, thm-parity-of-transposition-factorisations-is-well-defined,
       thm-transpositions-generate-the-symmetric-group, def-group-homomorphism,
       thm-int-comm-ring]
justified_by: []
aliases: []
landmark: true
short: 'The sign homomorphism'
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'J. S. Milne, Group Theory, §4, the sign homomorphism'
      url: 'https://www.jmilne.org/math/CourseNotes/GT.pdf'
    - title: 'Stanford Math 51H, Permutations'
      url: 'https://math.stanford.edu/~lms/jpg/perms.pdf'
pipeline_run: null
---

## Statement

For every natural $n$, the function
$\operatorname{sgn}:S_n\to\{+1,-1\}$ is a group homomorphism. It is
surjective exactly when $n\ge2$; for $n=0$ and $n=1$ its image is $\{1\}$.

## Facts & Assumptions

**Given:** A natural $n$ and permutations $\sigma,\rho\in S_n$.

[L1] Every finite permutation has a transposition factorisation, the sign is $(-1)^{\operatorname{inv}(\sigma)}$, and every such factorisation has that parity ([[thm-transpositions-generate-the-symmetric-group]], [[def-inversions-inversion-number-and-sign]], [[thm-parity-of-transposition-factorisations-is-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 Choose transposition factorisations $\sigma=\tau_1\cdots\tau_r$ and $\rho=\upsilon_1\cdots\upsilon_s$. Their concatenation is a transposition factorisation $\sigma\rho=\tau_1\cdots\tau_r\upsilon_1\cdots\upsilon_s$ in the library's composition order. [given, L1]

2.1 By [L1], $\operatorname{sgn}(\sigma\rho)=(-1)^{r+s}=(-1)^r(-1)^s=\operatorname{sgn}(\sigma)\operatorname{sgn}(\rho)$, and the identity has sign $1$; hence sign is a group homomorphism. [step 1.1, L1]

3.1 If $n\ge2$, the transposition $(0\,1)$ belongs to $S_n$ and has sign $-1$, while the identity has sign $1$, so sign is surjective. If $n=0$ or $n=1$, $S_n$ contains only the identity and the image is $\{1\}$. [step 2.1, L1] ∎
