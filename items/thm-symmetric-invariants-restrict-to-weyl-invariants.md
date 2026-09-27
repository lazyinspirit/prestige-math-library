---
id: thm-symmetric-invariants-restrict-to-weyl-invariants
kind: theorem
title: "Chevalley restriction for symmetric invariants"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction, lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (thm-symmetric-invariants-restrict-to-weyl-invariants). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra, let
$\mathfrak h\subseteq\mathfrak g$ be any Cartan subalgebra in the nilpotent self-normalizing sense, and let $W$ be its
Weyl group. Restriction to $\mathfrak h$ induces an algebra isomorphism

$$S(\mathfrak g)^{\mathfrak g} \xrightarrow{\sim} S(\mathfrak h)^W.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, any Cartan subalgebra $\mathfrak h$ in the nilpotent self-normalizing sense, its Weyl group $W$, and the restriction map $\operatorname{res}\colon S(\mathfrak g)^{\mathfrak g}\to S(\mathfrak h)^W$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]] and is used in both the injectivity and extension suppliers.

## Proof

**Proof technique:** direct.

1.1 Under [A1], the restriction map is injective by [[lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction]]. [given, A1]

1.2 Under [A1], the restriction map is surjective by [[lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants]], which constructs an adjoint-invariant extension for every Weyl-invariant polynomial on this arbitrary Cartan $\mathfrak h$. [given, A1]

2.1 Hence restriction is a bijective algebra homomorphism, so it is an algebra isomorphism. [step 1.1, step 1.2] ∎
