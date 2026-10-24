---
id: thm-vitali-sets-exist-under-choice-on-r-over-q
kind: theorem
title: "Assuming choice on the cosets of $\\mathbb{Q}$ in $\\mathbb{R}$, a Vitali set in $[0,1]$ exists"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vitali-set-on-the-unit-interval, def-axiom-of-choice, def-choice-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Chapter 8"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
    - title: "Vitali set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vitali_set"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Then there exists a Vitali set
$V \subseteq [0,1]$ in the sense of [[def-vitali-set-on-the-unit-interval]].

## Facts & Assumptions

**Given:** The Axiom of Choice.

[F1] A Vitali set on $[0,1]$ is a subset meeting every equivalence class of $x \sim y \iff x-y \in \mathbb{Q}$ in exactly one point ([[def-vitali-set-on-the-unit-interval]]).

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal{F}$ be the family of all sets of the form $(x+\mathbb{Q}) \cap [0,1]$ with $x \in [0,1]$. Each member of $\mathcal{F}$ is nonempty because it contains its defining point, and distinct members are exactly the equivalence classes of the relation in [F1]. [F1, construct]

2.1 By [A1] and [F2] there is a choice function $g$ on $\mathcal{F}$. Put $V := \{\, g(S) : S \in \mathcal{F} \,\} \subseteq [0,1]$. Then $V$ meets every member of $\mathcal{F}$, and it meets each of them in exactly one point because $g$ assigns one value to each set in its domain. [step 1.1, A1, F2, construct]

3.1 Since the members of $\mathcal{F}$ are exactly the equivalence classes of $x \sim y \iff x-y \in \mathbb{Q}$ on $[0,1]$, step 2.1 says precisely that $V$ is a Vitali set on $[0,1]$. [step 1.1, step 2.1, F1] ∎

## Remarks

- The proof uses one simultaneous selector on the family of $\mathbb{Q}$-cosets meeting $[0,1]$. Nothing in the proof reduces that family to a countable one.
