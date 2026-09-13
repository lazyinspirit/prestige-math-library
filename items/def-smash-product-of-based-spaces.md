---
id: def-smash-product-of-based-spaces
kind: definition
title: Smash product of based spaces
status: published
origin: pipeline
deps: ["def-compactly-generated-based-space-and-well-pointed-object", "lem-compact-test-exponential-law-and-products-of-quotients", "thm-quotient-universal-property"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed pages 175--179
---

## Definition

Let $X$ and $Y$ be based CGWH spaces. Their wedge inside the k-product is

$$ X\vee Y=(X\times\{*_Y\})\cup(\{*_X\}\times Y)\subseteq X\times_kY. $$

The **smash product** is the based, kified quotient

$$ X\wedge Y=k\bigl((X\times_kY)/(X\vee Y)\bigr), $$

based at the collapsed wedge. If $q:X\times_kY\to X\wedge Y$ is the quotient
map, then the quotient universal property says that a based map
$X\wedge Y\to Z$ is equivalently a continuous map $X\times_kY\to Z$ that is
constant with value $*_Z$ on $X\vee Y$. The kification does not change this
test against a CGWH target.

We write $x\wedge y$ for $q(x,y)$. No claim that $X\wedge Y$ is well-pointed
is made without further hypotheses.

