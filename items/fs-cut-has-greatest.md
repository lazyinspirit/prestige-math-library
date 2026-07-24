---
id: fs-cut-has-greatest
kind: false-statement
title: "FALSE: every Dedekind cut has a greatest element"
status: published
origin: session
deps: [def-dedekind-cut, def-real-dedekind, thm-rat-ordered-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**False claim:** every Dedekind cut ([[def-dedekind-cut]]) has a greatest
element: some $m \in A$ with $q \le m$ for all $q \in A$.

## Facts & Assumptions

**Given:** The cut axioms (C1)–(C3) ([[def-dedekind-cut]]), $\mathbb{R}$ as the set of all cuts ([[def-real-dedekind]]), and the rational cut $0^\ast := \{ q \in \mathbb{Q} : q < 0 \}$.

[L1] $\mathbb{Q}$ is a totally ordered field; in particular for $q < 0$ the rational $q/2$ satisfies $q < q/2 < 0$ ([[thm-rat-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 (C1, C2) $0^\ast = \{ q \in \mathbb{Q} : q < 0 \}$ is nonempty ($-1 \in 0^\ast$) and proper ($0 \notin 0^\ast$), and it is downward closed: $q < p < 0 \Rightarrow q < 0$, so $q \in 0^\ast$. [given, L1]

1.2 (C3) For any $q \in 0^\ast$, i.e. $q < 0$, the rational $q/2$ satisfies $q < q/2 < 0$, so $q/2 \in 0^\ast$ and $q/2 > q$; hence no element of $0^\ast$ is greatest. [given, L1]

2.1 By steps 1.1 and 1.2, $0^\ast$ satisfies (C1)–(C3): it is a Dedekind cut ([[def-dedekind-cut]]), i.e. a real number ([[def-real-dedekind]]), with no greatest element. [step 1.1, step 1.2]

3.1 Thus $0^\ast$ is a Dedekind cut having no greatest element, directly contradicting the claim; more strongly, "no greatest element" is precisely axiom (C3), which *every* cut must satisfy, so the claim fails for all cuts and is false. [step 2.1, given] ∎
