---
id: thm-radical-as-intersection-of-primes
kind: theorem
title: "The radical of an ideal is the intersection of the prime ideals containing it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-radical-intersection-proof-forward-inclusion, lem-radical-intersection-proof-separating-prime]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §2 Ideals"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring and let $I\trianglelefteq R$ be an ideal. Then
$$
\sqrt{I}=\bigcap_{\substack{\mathfrak p\in\operatorname{Spec}R\\ I\subseteq\mathfrak p}} \mathfrak p,
$$
where the intersection is taken to be $R$ if no prime ideal contains $I$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, and the Axiom of Choice.

[L1] Every prime ideal containing $I$ also contains $\sqrt{I}$ ([[lem-radical-intersection-proof-forward-inclusion]]).

[L2] Every element outside $\sqrt{I}$ is omitted by some prime ideal containing $I$ ([[lem-radical-intersection-proof-separating-prime]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in\sqrt{I}$. By [L1], every prime ideal containing $I$ also contains $x$. Therefore $x$ belongs to the displayed intersection. [L1, given]

1.2 Let $x\notin\sqrt{I}$. By [L2], there is a prime ideal $\mathfrak p$ containing $I$ with $x\notin\mathfrak p$. Hence $x$ does not belong to the displayed intersection. [L2, given]

2.1 Steps 1.1 and 1.2 prove that an element belongs to $\sqrt{I}$ exactly when it belongs to every prime ideal containing $I$, which is the claimed equality. [step 1.1, step 1.2] ∎
