---
id: thm-nl-is-contained-in-dspace-log-squared-n
kind: theorem
title: "NL is contained in read-only-input DWORKSPACE(log-squared n)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-l-and-nl, def-read-only-input-workspace-classes, thm-read-only-input-savitch-simulation]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.12"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
    - title: "Harvard CS 221, Lecture 5, Theorem 3"
      url: "https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf"
---

## Statement

$$ \mathrm{NL}\subseteq\mathrm{DWORKSPACE}(\log^2(n+2)). $$
This is a read-only-input, work-cell conclusion; it does not assert the
all-tapes bound $\mathrm{DSPACE}(\log^2 n)$ or the equality $\mathrm L=\mathrm{NL}$.

## Facts & Assumptions

**Given:** a language $A\in\mathrm{NL}$.

[L1] NL is the class decided by nondeterministic read-only-input logspace machines ([[def-l-and-nl]]).

[L2] Such a machine has a deterministic read-only-input $O(\log^2(n+2))$-work-space simulation ([[thm-read-only-input-savitch-simulation]]).

## Proof

**Proof technique:** direct specialization.

1.1 By [L1], choose a nondeterministic read-only-input logspace decider for $A$. [L1, choose]

2.1 Apply [L2] to this fixed decider. Its simulator is deterministic and uses $O(\log^2(n+2))$ charged work cells. [L2, step 1.1]

3.1 The target class is exactly the local $\mathrm{DWORKSPACE}(\log^2(n+2))$ convention, so $A$ belongs to it. Since $A$ was arbitrary, the displayed inclusion follows. [step 2.1] ∎
