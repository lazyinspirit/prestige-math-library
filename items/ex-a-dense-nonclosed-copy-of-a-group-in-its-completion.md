---
id: ex-a-dense-nonclosed-copy-of-a-group-in-its-completion
kind: example
title: "The integers sit densely but not closedly inside their profinite completion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion, ex-the-profinite-completion-of-the-integers]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Example

The canonical copy of $\mathbb Z$ is dense but not closed in its profinite
completion $\widehat{\mathbb Z}$.

## Facts & Assumptions

**Given:** The canonical map $\iota:\mathbb Z\to\widehat{\mathbb Z}$.

[L1] The image of the canonical map is dense in every profinite completion
([[thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion]]).

[L2] The profinite completion of $\mathbb Z$ is the inverse limit
$\varprojlim_n \mathbb Z/n\mathbb Z$
([[ex-the-profinite-completion-of-the-integers]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\iota[\mathbb Z]$ is dense in $\widehat{\mathbb Z}$. [L1, given]

2.1 The space $\widehat{\mathbb Z}$ is compact and Hausdorff by [L2] together with the general inverse-limit theorem, so any closed dense subset would have to be the whole space. But $\iota[\mathbb Z]$ is countable, whereas $\widehat{\mathbb Z}$ contains the uncountable subset $\prod_p\{0,1\}$ indexed by the primes inside its product model. Therefore $\iota[\mathbb Z]$ is a proper dense subset and cannot be closed. [L2, step 1.1, algebra]

3.1 So $\mathbb Z$ sits densely but not closedly inside its profinite completion. [step 1.1, step 2.1] ∎
