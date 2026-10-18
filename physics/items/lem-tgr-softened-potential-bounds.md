---
id: lem-tgr-softened-potential-bounds
kind: lemma
title: "Uniform bound for the softened pair potential"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-countable-choice
  - def-tgr-softened-gravity-finite-phase
dependency_roles:
  def-countable-choice: mathematical-premise
  def-tgr-softened-gravity-finite-phase: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, §2(i)"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
---

## Statement

Under [[def-tgr-softened-gravity-finite-phase]], write $H_{N,a}=K_N+U_{N,a}$ for its kinetic and potential terms. Then for every $q\in B^N$,
$$
-\frac{Gm^2N(N-1)}{2a}\le U_{N,a}(q)\le0.
$$

## Facts & Assumptions

**Given:** $N\ge1$, $G,m,a>0$, and the softened potential in [[def-tgr-softened-gravity-finite-phase]].

[F1] [[def-tgr-softened-gravity-finite-phase]], Definition: $U_{N,a}(q)=-\sum_{i<j}Gm^2(\|q_i-q_j\|^2+a^2)^{-1/2}$.

[A1] Countable Choice, [[def-countable-choice]], is inherited from the Lebesgue phase-space convention; this inequality itself uses only finite arithmetic.

## Proof

**Given:** The finite-particle potential and $a>0$.

1.1 For each pair $i<j$, $\sqrt{\|q_i-q_j\|^2+a^2}\ge a$, so its contribution lies in $[-Gm^2/a,0]$. [given, F1, A1, algebra]

1.2 There are exactly $N(N-1)/2$ unordered pairs. Summing the bounds in step 1.1 gives the stated lower and upper bounds, including $N=1$ when the sum is empty. [step 1.1, algebra] ∎
