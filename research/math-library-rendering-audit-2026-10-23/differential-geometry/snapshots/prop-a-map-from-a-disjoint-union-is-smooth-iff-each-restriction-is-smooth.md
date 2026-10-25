---
id: prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth
kind: proposition
title: "A map from a disjoint union is smooth iff each restriction is smooth"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds,
       def-c-r-and-smooth-maps-between-smooth-manifolds,
       thm-coproduct-universal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $X=\bigsqcup_{i\in I}M_i$ be a countable disjoint union of fixed-dimensional
smooth manifolds with its canonical smooth structure, let $N$ be a smooth
manifold, and let $F:X\to N$ be a map. Then $F$ is smooth if and only if each
restriction

$$F_i:=F\circ\kappa_i:M_i\to N$$

to a summand is smooth.

## Facts & Assumptions

**Given:** A countable disjoint union $X=\bigsqcup_{i\in I}M_i$ with canonical injections $\kappa_i:M_i\to X$, a smooth manifold $N$, and a map $F:X\to N$.

[F1] The disjoint union $X$ is a smooth manifold whose smooth charts are the transported charts coming from the summands; in particular every point of $X$ lies in exactly one summand and around that point there are smooth charts coming from that summand ([[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]]).

[F2] A map between smooth manifolds is smooth exactly when it is continuous and its coordinate representatives are smooth near each point ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L1] A map out of a disjoint union is continuous exactly when each restriction to a summand is continuous ([[thm-coproduct-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 Assume $F$ is smooth, and fix $i\in I$ and $p\in M_i$ with charts as below. [given, F1, F2, L1, choose] By [F2] it is continuous, so [L1] makes each restriction $F_i=F\circ\kappa_i$ continuous. Fix $i\in I$ and $p\in M_i$. Choose a smooth chart $(U,\alpha)$ of $M_i$ at $p$ and a smooth chart $(V,\beta)$ of $N$ at $F_i(p)$. The transported chart $\bigl(\kappa_i[U],\alpha\circ\kappa_i^{-1}\bigr)$ is a smooth chart of $X$ at $\kappa_i(p)$ by [F1]. [given, F1, F2, L1, choose]

1.2 Conversely assume every restriction $F_i$ is smooth, and fix $x\in X$ with charts as below. [F1, F2, L1, choose] Then [F2] makes each $F_i$ continuous, so [L1] makes $F$ continuous. Let $x\in X$. By [F1] there is a unique $i\in I$ and a unique point $p\in M_i$ with $x=\kappa_i(p)$; choose a smooth chart $(U,\alpha)$ of $M_i$ at $p$ and a smooth chart $(V,\beta)$ of $N$ at $F(x)$. The transported chart $\bigl(\kappa_i[U],\alpha\circ\kappa_i^{-1}\bigr)$ is smooth on $X$. [F1, F2, L1, choose]

2.1 In the charts chosen in steps 1.1 and 1.2, the representative of the [F1, F2, step 1.1, step 1.2] restriction $F_i$ is $\beta\circ F_i\circ\alpha^{-1}= \beta\circ F\circ(\alpha\circ\kappa_i^{-1})^{-1}$. Under the hypothesis of step 1.1, the right-hand side is the representative of $F$ in a transported source chart, so [F2] makes it smooth and therefore every $F_i$ is smooth. Under the hypothesis of step 1.2, the same formula identifies the representative of $F$ with $\beta\circ F_i\circ\alpha^{-1}$, which is smooth because $F_i$ is. Hence [F2] makes $F$ smooth at $x$, and therefore smooth everywhere. [F1, F2, step 1.1, step 1.2]

3.1 Step 2.1 proves both directions of the equivalence. [step 2.1] ∎
