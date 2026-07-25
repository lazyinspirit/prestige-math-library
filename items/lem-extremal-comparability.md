---
id: lem-extremal-comparability
kind: lemma
title: "Everything in $M$ is comparable to an extremal element"
status: draft
origin: session
deps: [lem-extremal-cut-closed-under-f, lem-extremal-cut-closed-under-sups, def-bw-extremal, lem-admissible-set-exists, def-admissible-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
pipeline_run: null
---

## Statement

Let $(P, \le)$ be a chain-complete poset, $f : P \to P$ progressive, $M$ the
smallest admissible set, and $x \in M$ extremal ([[def-bw-extremal]]). Then
$M_x = M$; that is, for every $y \in M$, either $y \le x$ or $f(x) \le y$.

## Facts & Assumptions

**Given:** A chain-complete poset $(P, \le)$, a progressive $f : P \to P$, the smallest admissible set $M$, and an extremal $x \in M$.

[A1] $M_x = \{z \in M : z \le x \text{ or } f(x) \le z\}$, so $M_x \subseteq M$ by construction ([[def-bw-extremal]]).

[L1] $M_x$ is closed under $f$ ([[lem-extremal-cut-closed-under-f]]).

[L2] $M_x$ is closed under suprema of its chains ([[lem-extremal-cut-closed-under-sups]]).

[L3] $M$ is contained in every admissible subset of $P$ ([[lem-admissible-set-exists]]).

[L4] A subset is admissible when it is closed under $f$ and under suprema of its chains ([[def-admissible-set]]).

## Proof

**Proof technique:** direct.

1.1 $M_x$ is closed under $f$. [L1]

1.2 $M_x$ is closed under suprema of its chains. [L2]

2.1 So $M_x$ is an admissible subset of $P$. [step 1.1, step 1.2, L4]

3.1 By minimality of $M$, every admissible subset contains $M$, so $M \subseteq M_x$. [step 2.1, L3]

4.1 Together with $M_x \subseteq M$ this gives $M_x = M$. [step 3.1, A1]

5.1 Unfolding the definition of $M_x$, every $y \in M$ satisfies $y \le x$ or $f(x) \le y$. [step 4.1, A1] ∎

## Remarks

- This is the first payoff of minimality, and the pattern is worth naming: to
  prove that everything in $M$ has a property, collect the elements that have it,
  show the collection is admissible, and let minimality do the rest. The same
  move proves [[lem-all-extremal]].
- The conclusion is a comparability statement with a gap. It says nothing about
  elements strictly between $x$ and $f(x)$, and indeed the content of the lemma
  is that $M$ has none: an element of $M$ lies at or below $x$, or at or above
  $f(x)$, never inside.
- The hypothesis that $x$ is extremal is doing real work and cannot be dropped.
  It is what [[lem-all-extremal]] later supplies for every element, which is what
  turns this one-sided statement into total comparability
  ([[lem-admissible-is-chain]]).
