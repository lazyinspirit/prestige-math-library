---
id: lem-fixed-colourings-factor-by-cycle-type
kind: lemma
title: "Fixed colourings factor by cycle type"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-colouring-action-weight-function-and-pattern-inventory,
       def-permutation-support-disjoint-cycles-and-cycle-type]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: The Cycle Index Polynomial"
      url: "https://theory.stanford.edu/~blynn/polya/cycleindex.html"
    - title: "Ben Lynn, Polya Theory: Pólya's Inventory Theorem"
      url: "https://theory.stanford.edu/~blynn/polya/polya.html"
pipeline_run: null
---

## Statement

Let a finite group element $g$ act on a finite set $X$, and let $j_d(g)$ denote
the number of $d$-cycles of the induced permutation of $X$.

1. If $C$ is a finite colour set with $m=|C|$, then the number of colourings
   $f:X \to C$ fixed by $g$ is

   $$m^{\sum_{d \ge 1} j_d(g)}.$$

2. More generally, if $w:C \to R$ is a weight function into a commutative ring
   and

   $$p_d:=\sum_{c \in C} w(c)^d,$$

   then

   $$\sum_{\substack{f:X \to C\\ g \cdot f = f}} \operatorname{wt}(f)=\prod_{d \ge 1} p_d^{j_d(g)}.$$

## Facts & Assumptions

**Given:** a finite set $X$, a colour set $C$, and an element $g$ acting on $X$.

[F1] The induced action on colourings is $(g \cdot f)(x)=f(g^{-1}x)$, and the weight of a colouring is the product of the weights of its colours over all positions ([[def-colouring-action-weight-function-and-pattern-inventory]]).

## Proof

**Proof technique:** direct.

1.1 A colouring $f$ is fixed by $g$ exactly when it is constant on every cycle of the permutation of $X$ induced by $g$. Indeed, $g \cdot f=f$ means $f(x)=f(g^{-1}x)$ for every $x$, and iterating this equality around a cycle forces one common colour on that whole cycle. Conversely, a colouring constant on each cycle is unchanged by the action. [F1]

2.1 If $g$ has $j_d(g)$ cycles of length $d$, then each cycle may be assigned any one of the $m$ colours independently, so the number of fixed colourings is $m^{\sum_d j_d(g)}$. [step 1.1]

3.1 In the weighted setting, a fixed colouring contributes on a $d$-cycle the factor $w(c)^d$ for the single colour $c$ chosen on that cycle. Summing over all colour choices on that cycle gives $p_d$. Independence across cycles from step 1.1 therefore yields the product $\prod_d p_d^{j_d(g)}$. [step 1.1, F1] ∎
