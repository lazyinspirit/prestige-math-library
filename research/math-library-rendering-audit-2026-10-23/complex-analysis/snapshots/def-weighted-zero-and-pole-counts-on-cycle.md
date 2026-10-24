---
id: def-weighted-zero-and-pole-counts-on-cycle
kind: definition
title: "Zero and pole counts weighted by multiplicity and winding number"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-admissible-cycle-for-residue-theorem,
       def-order-of-zero-holomorphic-function,
       def-integration-and-index-of-complex-chain,
       def-meromorphic-function-complex-domain]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C$ be open, let $f$ be meromorphic on $\Omega$, and
let $\Gamma$ be admissible for the residue theorem in $\Omega$. Assume also that
$f$ is not identically zero on any connected component of $\Omega$ and has no
zeros on $\Gamma^\ast$, so every zero has finite positive order and every index
$n(\Gamma,a)$ of [[def-integration-and-index-of-complex-chain]] is defined at
every zero or pole of $f$.

Here, and in the argument-principle results that use this definition,
**meromorphic on an open set** means meromorphic on every connected component
in the sense of [[def-meromorphic-function-complex-domain]]. The zero and pole
sets are the unions of the corresponding componentwise sets.

Whenever only finitely many zeros and poles of $f$ have nonzero index with
respect to $\Gamma$, define the **weighted zero count**

$$Z(f,\Gamma):=\sum_{a\in Z(f)}n(\Gamma,a)\operatorname{ord}_a(f)$$

and the **weighted pole count**

$$P(f,\Gamma):=\sum_{b\in P(f)}n(\Gamma,b)\operatorname{ord}_b^{\mathrm{pole}}(f),$$

where $\operatorname{ord}_a(f)$ is the zero order from
[[def-order-of-zero-holomorphic-function]] and
$\operatorname{ord}_b^{\mathrm{pole}}(f)$ is the positive pole order at $b$.

## Remarks

These are finite sums only after a finiteness argument. Under the argument
principle hypotheses, that finiteness comes from applying the residue theorem to
the logarithmic derivative.
