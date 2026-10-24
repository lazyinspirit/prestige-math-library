---
id: def-relative-computability-and-enumerability
kind: definition
title: "Relative computability and relative enumerability"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-one-step-configuration-relation]
verification:
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local definition and prerequisite repair; not independent review or a whole-closure audit"
    delegated_by: owner
  precheck: n/a
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §4.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

Fix the canonical binary numeral for each natural number (with zero encoded
as $0$). For an oracle $X\subseteq\mathbb N$, an oracle program is a finite
deterministic machine program with ordinary transitions as in
[[def-one-step-configuration-relation]], together with query instructions.
A query instruction reads a finite binary numeral $q$ delimited on the tape
and selects one of two specified successor states according as $q\in X$ or
$q\notin X$; it leaves the tape and head unchanged. Malformed queries select
the negative successor. On input $n$, start in the initial state with its
numeral at the left end of an otherwise blank tape and the head at position
zero. Iterate these transitions until an accepting or rejecting state is
entered, if that ever happens.

A set $A\subseteq\mathbb N$ is **$X$-computable** when some such program
halts on every numeral input and accepts exactly the members of $A$.
It is **$X$-c.e.** when some such program accepts exactly the members of $A$;
on nonmembers it may reject or run forever. Write $A\le_T X$ for
$X$-computability. A function $f:\mathbb N\to\mathbb N$ is **total
$X$-computable** when some such oracle program halts on every numeral input
$n$ with the numeral of $f(n)$ as its delimited output.

An oracle program still makes finitely many transitions on any halting run;
it does not read an infinite oracle at once.
