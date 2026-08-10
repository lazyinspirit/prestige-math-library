---
id: thm-orbit-stabilizer
kind: theorem
title: 'Orbit-stabiliser: $G/G_x\to G\cdot x$, $gG_x\mapsto g\cdot x$, is a well-defined bijection'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-orbit-and-stabilizer, lem-stabilizer-is-a-subgroup, def-coset, lem-coset-membership-and-equality, def-injection-surjection-bijection]
justified_by: []
aliases: [thm-orbit-stabiliser]
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets, Theorem 3.107"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.1"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html"
pipeline_run: null
---

## Statement

Let $G$ act on $X$ and let $x\in X$. The rule

$$\Phi:G/G_x\longrightarrow G\cdot x,\qquad \Phi(gG_x)=g\cdot x,$$

is well-defined and bijective. Thus every orbit is naturally in bijection with
the left cosets of its stabilizer.

## Facts & Assumptions

**Given:** A left action of a group $G$ on a set $X$ and a point $x\in X$.

[L1] The orbit and stabilizer are $G\cdot x=\{g\cdot x:g\in G\}$ and $G_x=\{g\in G:g\cdot x=x\}$ ([[def-orbit-and-stabilizer]]).

[L2] The stabilizer $G_x$ is a subgroup of $G$ ([[lem-stabilizer-is-a-subgroup]]).

[L3] For a subgroup $H\le G$, the left coset represented by $g$ is $gH=\{gh:h\in H\}$ ([[def-coset]]).

[L4] For $H\le G$, one has $gH=hH$ exactly when $g^{-1}h\in H$ ([[lem-coset-membership-and-equality]]).

[L5] A function is bijective exactly when it is injective and surjective ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** constructive.

1.1 Define $\Phi(gG_x)=g\cdot x$. If $gG_x=hG_x$, then $g^{-1}h\in G_x$ by [L4], so $(g^{-1}h)\cdot x=x$ by [L1], and the action law gives $h\cdot x=g\cdot((g^{-1}h)\cdot x)=g\cdot x$; hence $\Phi$ is well-defined. [L1, L2, L3, L4, L5, construct]

2.1 Every $y\in G\cdot x$ has the form $y=g\cdot x=\Phi(gG_x)$ by [L1], so $\Phi$ is surjective. [step 1.1, L1]

3.1 If $\Phi(gG_x)=\Phi(hG_x)$, then $g\cdot x=h\cdot x$, so $(g^{-1}h)\cdot x=x$ and $g^{-1}h\in G_x$; [L4] gives $gG_x=hG_x$, so $\Phi$ is injective and therefore bijective. [step 1.1, L1, L4, L5, discharge-construct] ∎
