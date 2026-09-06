---
id: cor-finite-jumps-match-arithmetical-levels
kind: corollary
title: "Finite jumps match arithmetical levels"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-jump, thm-posts-theorem, thm-relative-halting-is-oracle-ce-complete]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Sebastiaan Terwijn, Computability Theory, Proposition 5.2.1"
      url: "https://www.math.ru.nl/~terwijn/teaching/syllabus.pdf"
---

## Statement

Put $0^{(0)}=\varnothing$ and $0^{(n+1)}=(0^{(n)})'$. For every $n\ge0$ and
$C\subseteq\mathbb N$,
$$C\in\Sigma^0_{n+1}\iff C\text{ is }0^{(n)}\text{-c.e.},\qquad C\in\Delta^0_{n+1}\iff C\le_T0^{(n)}.$$

## Facts & Assumptions

**Given:** $n\ge0$, a set $C$, and the jump convention above.

## Proof

**Proof technique:** direct.

1.1 The recursively defined $0^{(n+1)}$ is precisely the relative halting oracle for $0^{(n)}$, because the local jump convention is diagonal relative halting. [given, construct]

2.1 Apply [[thm-posts-theorem]] at level $n$ with the identification in step 1.1. Its two equivalences give exactly the displayed claims. [step 1.1] ∎
