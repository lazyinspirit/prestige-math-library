---
id: lem-equivalent-event-tests-for-a-discrete-stopping-time
kind: lemma
title: Equivalent event tests for a discrete stopping time
status: published
origin: pipeline
deps: [def-discrete-stopping-time, def-sigma-algebra]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, §2.3, pp. 9–11", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

For a filtration $(\mathcal F_n)$ and $\tau:\Omega\to\mathbb N_0\cup\{\infty\}$, the following are equivalent:

1. $\{\tau\le n\}\in\mathcal F_n$ for every $n$;
2. $\{\tau=n\}\in\mathcal F_n$ for every $n$;
3. $\{\tau>n\}\in\mathcal F_n$ for every $n$.

Under any of them, $\{\tau\ge n\}\in\mathcal F_{n-1}$ for $n\ge1$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-discrete-stopping-time]] is condition (1).

[F2] [[def-sigma-algebra]] supplies closure under complements, differences, and finite unions.

## Proof

1.1 Conditions (1) and (3) are equivalent because $\{\tau>n\}=\Omega\setminus\{\tau\le n\}$ and $\mathcal F_n$ is closed under complements. [F2]

1.2 From (1), $\{\tau=0\}=\{\tau\le0\}\in\mathcal F_0$ and, for $n\ge1$, $$\{\tau=n\}=\{\tau\le n\}\setminus\{\tau\le n-1\}\in\mathcal F_n,$$ using $\mathcal F_{n-1}\subseteq\mathcal F_n$. Thus (1) implies (2). [F1, F2]

1.3 From (2), $$\{\tau\le n\}=\bigcup_{k=0}^n\{\tau=k\}\in\mathcal F_n,$$ since each summand lies in $\mathcal F_k\subseteq\mathcal F_n$. Thus (2) implies (1), completing the equivalence. [F2]

2.1 Finally, for $n\ge1$, $$\{\tau\ge n\}=\Omega\setminus\{\tau\le n-1\}\in\mathcal F_{n-1}.$$ The value $\infty$ is automatically included in this event. [F1, F2] ∎
