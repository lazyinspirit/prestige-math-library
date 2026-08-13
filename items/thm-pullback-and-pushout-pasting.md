---
id: thm-pullback-and-pushout-pasting
kind: theorem
title: "Pullback and pushout pasting, with cancellation of the square adjacent to the outer edge"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullbacks-and-pushouts, prop-limit-colimit-duality]
justified_by: []
aliases: [thm-pullback-pasting, thm-pushout-pasting]
landmark: true
proof_strategy: universal-property
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Exercise 3.1.vi"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Consider a commutative diagram of two adjacent squares

```tikzcd
A \arrow[r, "a"] \arrow[d, "x"'] & B \arrow[r, "b"] \arrow[d, "y"'] & C \arrow[d, "z"] \\
D \arrow[r, "d"'] & E \arrow[r, "e"'] & F
```

If both small squares are pullbacks, then the outer rectangle is a pullback. If
the right square and the outer rectangle are pullbacks, then the left square is
a pullback. Reversing all arrows gives the corresponding composition and
cancellation laws for pushouts.

## Facts & Assumptions

**Given:** The displayed commutative diagram.

[F1] A pullback supplies a unique factor for each compatible pair
([[def-pullbacks-and-pushouts]]).

[L1] Pullbacks and pushouts are exact formal duals
([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** universal property.

1.1 Suppose first that both small squares are pullbacks. Given $r:W\to D$ and $s:W\to C$ with $edr=zs$, the right pullback gives a unique $t:W\to B$ with $yt=dr$ and $bt=s$. The left pullback then gives a unique $u:W\to A$ with $xu=r$ and $au=t$. [F1, given]

1.2 For the cancellation law, assume the right square and outer rectangle are pullbacks. A compatible pair $r:W\to D$, $t:W\to B$ for the left square gives $bt:W\to C$ and $edr=zbt$. The outer property yields a unique $u:W\to A$ with $xu=r$ and $bau=bt$. Since $yau=dxu=dr=yt$, right-pullback uniqueness gives $au=t$. Outer uniqueness gives uniqueness of $u$. [F1]

2.1 This $u$ satisfies $bau=s$. If $u'$ has $xu'=r$ and $bau'=s$, then the right pullback gives $au'=t$, and the left pullback gives $u'=u$. Hence the outer rectangle is a pullback. [F1, step 1.1]

3.1 Reversing steps 1.1, 1.2, and 2.1 by [L1] proves the corresponding composition and cancellation laws for pushouts. [L1, step 1.1, step 2.1, step 1.2] ∎
