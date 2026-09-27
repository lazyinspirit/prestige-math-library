---
id: thm-deterministic-time-hierarchy
kind: theorem
title: "The deterministic time hierarchy theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-time-diagonal-language-respects-its-budget, def-time-and-space-constructible-function, def-dtime-ntime-dspace-and-nspace, def-asymptotic-resource-comparison]
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (thm-deterministic-time-hierarchy). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.1"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For time-constructible $f,g$ that are eventually at least $n$ and satisfy
$f(n)\log f(n)=o(g(n))$,
$$ \mathrm{DTIME}(f(n))\subsetneq\mathrm{DTIME}(g(n)). $$

## Facts & Assumptions

**Given:** The stated constructible bounds, including the eventual linear
floor required when a bound clocks a machine
([[def-time-and-space-constructible-function]]).

[L1] The clocked diagonal language and its behavior on every sufficiently
long valid padded code are supplied by
[[lem-time-diagonal-language-respects-its-budget]].

## Proof

**Proof technique:** contradiction.

1.1 Apply [L1] to obtain its language $D\in\mathrm{DTIME}(g)$. [L1, given]

1.2 Since $f(n)$ is eventually at least $n$ and $f(n)\log f(n)=o(g(n))$, we have $f(n)=O(g(n))$. Any $O(f)$ decider is therefore also an $O(g)$ decider, proving $\mathrm{DTIME}(f)\subseteq\mathrm{DTIME}(g)$. [given, algebra]

2.1 Suppose a machine $M$ running in $O(f)$ decided $D$. Fix an integer $c$ large enough to bound its running time by $c f(n)$ at all sufficiently large $n$; enlarge $c$ to cover the finitely many shorter lengths as well. By [L1], the clocked pair $(M,c)$ has arbitrarily long valid padded codes $w$, and on each sufficiently long one the diagonal decider returns the complement of $M(w)$, since the inner clock does not expire. But $M$ decides $D$ on $w$, a contradiction. Thus $D\notin\mathrm{DTIME}(f)$; combine this with steps 1.1–1.2 for strict containment. [L1, step 1.1, step 1.2, assume-contra, discharge-contradiction] ∎
