---
id: thm-symmetric-invariants-restrict-to-weyl-invariants
kind: theorem
title: "Chevalley restriction for symmetric invariants"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction, lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
    - title: "Lin Chen, Geometric Representation Theory I, Lecture 5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture5.pdf"
pipeline_run: null
---

## Statement

Let $\mathfrak g$ be a complex semisimple Lie algebra, let
$\mathfrak h\subseteq\mathfrak g$ be a Cartan subalgebra, and let $W$ be its
Weyl group. Restriction to $\mathfrak h$ induces an algebra isomorphism

$$S(\mathfrak g)^{\mathfrak g} \xrightarrow{\sim} S(\mathfrak h)^W.$$

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra
$\mathfrak h$, its Weyl group $W$, and the restriction map
$\operatorname{res}\colon S(\mathfrak g)^{\mathfrak g}\to S(\mathfrak h)^W$.

## Proof

**Proof technique:** direct.

1.1 The restriction map is injective by [[lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction]]. [given]

1.2 The restriction map is surjective by [[lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants]], which constructs an adjoint-invariant extension for every Weyl-invariant polynomial on $\mathfrak h$. [given]

2.1 Hence restriction is a bijective algebra homomorphism, so it is an algebra isomorphism. [step 1.1, step 1.2] ∎
