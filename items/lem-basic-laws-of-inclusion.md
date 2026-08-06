---
id: lem-basic-laws-of-inclusion
kind: lemma
title: "$\\varnothing \\subseteq x$, $x \\subseteq x$, inclusion is transitive, and $x = y$ if and only if $x \\subseteq y$ and $y \\subseteq x$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-subset-and-proper-subset, def-axiom-of-extensionality, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: [lem-double-inclusion]
landmark: false
short: "basic laws of inclusion"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Subset (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subset"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.1"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Statement

For all sets $x$, $y$ and $z$:

- (i) $\varnothing \subseteq x$;
- (ii) $x \subseteq x$;
- (iii) if $x \subseteq y$ and $y \subseteq z$ then $x \subseteq z$;
- (iv) $x = y$ if and only if $x \subseteq y$ and $y \subseteq x$.

## Facts & Assumptions

**Given:** sets $x$, $y$ and $z$.

[L1] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L2] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L3] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): no $t$ satisfies $t \in \varnothing$, so the implication "$t \in \varnothing$ implies $t \in x$" holds vacuously for every $t$, which is $\varnothing \subseteq x$. [L1, L3]

1.2 Claim (ii): every $t$ with $t \in x$ satisfies $t \in x$, which is $x \subseteq x$. [L1]

1.3 Claim (iii): assume $x \subseteq y$ and $y \subseteq z$, and let $t \in x$; then $t \in y$ by the first inclusion and $t \in z$ by the second, so every element of $x$ is an element of $z$. [L1]

1.4 Claim (iv), from right to left: assume $x \subseteq y$ and $y \subseteq x$; for any $t$, the first inclusion gives that $t \in x$ implies $t \in y$ and the second gives that $t \in y$ implies $t \in x$, so $t \in x$ holds if and only if $t \in y$, and therefore $x = y$. [L1, L2]

1.5 Claim (iv), from left to right: assume $x = y$; then $t \in x$ and $t \in y$ are the same statement for every $t$, so each of $x \subseteq y$ and $y \subseteq x$ holds. [L1]

2.1 Claims (i) to (iv) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
