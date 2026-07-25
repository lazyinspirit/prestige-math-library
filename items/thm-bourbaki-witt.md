---
id: thm-bourbaki-witt
kind: theorem
title: "Bourbaki–Witt fixed point theorem"
status: published
origin: session
deps: [lem-admissible-is-chain, def-chain-complete-poset, lem-admissible-set-exists, def-partial-order]
justified_by: []
forward_refs: [cex-progressive-map-without-fixed-point]
aliases: [thm-bourbaki-witt-fixed-point]
landmark: true
short: "Bourbaki–Witt"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
    - title: "Complete partial order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_partial_order"
pipeline_run: null
---

## Statement

Let $(P, \le)$ be a chain-complete poset and let $f : P \to P$ be progressive,
that is $x \le f(x)$ for every $x \in P$ ([[def-chain-complete-poset]]). Then $f$
has a fixed point: there exists $c \in P$ with $f(c) = c$.

**No form of the Axiom of Choice is used**, and $f$ is not assumed to be
monotone, injective, or continuous in any sense.

## Facts & Assumptions

**Given:** A chain-complete poset $(P, \le)$ and a progressive map $f : P \to P$, with $M$ the smallest $f$-admissible subset of $P$.

[L1] $M$ is a chain ([[lem-admissible-is-chain]]).

[L2] $M$ is admissible: closed under $f$, and closed under suprema of its chains ([[lem-admissible-set-exists]]).

[L3] Every chain of $P$ has a least upper bound in $P$ ([[def-chain-complete-poset]]).

[L4] $f$ is progressive: $x \le f(x)$ for every $x \in P$ ([[def-chain-complete-poset]]).

[L5] The order is antisymmetric: $u \le v$ and $v \le u$ imply $u = v$ ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 $M$ is a chain, so it has a least upper bound in $P$; write $c = \sup M$. [L1, L3, construct]

1.2 Progressivity gives $c \le f(c)$. [L4]

2.1 $M$ is a chain contained in $M$, and $M$ is closed under suprema of its chains, so $c \in M$. [step 1.1, L1, L2]

3.1 Since $M$ is closed under $f$, we have $f(c) \in M$. [step 2.1, L2]

4.1 Since $c$ is an upper bound of $M$ and $f(c) \in M$, we get $f(c) \le c$. [step 3.1, step 1.1]

5.1 From $f(c) \le c$ and $c \le f(c)$, antisymmetry gives $f(c) = c$, so $c$ is a fixed point of $f$. [step 4.1, step 1.2, L5] ∎

## Remarks

- **Why this matters here.** The usual route to Zorn's lemma runs through transfinite recursion, which needs ordinals, transfinite induction and replacement. Bourbaki–Witt replaces all of that with the smallest admissible set, so the foundations page that supports [[thm-zorn]] stays ordinal-free. Ordinals are still worth having, but nothing on the path to Zorn or to the ultrafilter lemma requires them.
- **The theorem itself is choice-free.** Choice enters only in [[thm-zorn]], at the single step where a strict upper bound is selected for every chain simultaneously. Keeping the two separate is what lets later pages state honestly which of their results need choice.
- Both hypotheses are load-bearing. Progressivity without chain-completeness fails ([[cex-progressive-map-without-fixed-point]]), and the fixed point is genuinely produced at the top of a chain, not by iterating $f$: no iteration argument is available, since $f$ need not be monotone and the chain $M$ need not be countable.
- The fixed point found is $\sup M$, and $M$ is the smallest admissible set, so the construction is canonical rather than a choice among many fixed points.
