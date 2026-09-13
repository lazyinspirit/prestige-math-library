---
id: def-stable-natural-cohomology-operation
kind: definition
title: Stable natural cohomology operation
status: published
origin: pipeline
deps: ["def-natural-transformation", "def-functor-and-contravariant-functor", "thm-long-exact-sequence-of-a-pair-in-singular-cohomology"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 5, printed pages 184--186
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $A$ and $B$ be abelian groups, and fix integers $n$ and $r$. A
**cohomology operation of type $n$ and degree $r$** is a natural transformation

$$
\Phi_n\colon \widetilde H^n(-;A)\longrightarrow \widetilde H^{n+r}(-;B)
$$

of contravariant functors on based CW complexes. Thus every based map
$f\colon X\to Y$ gives the commutative naturality square

$$
f^*\Phi_n(y)=\Phi_n(f^*y).
$$

A **stable natural cohomology operation of degree $r$** is a sequence
$\Phi=(\Phi_n)_{n\in\mathbb Z}$ of such operations for which cohomology
suspension commutes with $\Phi$: for every based CW complex $X$ and every
$x\in\widetilde H^n(X;A)$,

$$
\sigma\bigl(\Phi_n(x)\bigr)=\Phi_{n+1}\bigl(\sigma x\bigr)\in \widetilde H^{n+r+1}(\Sigma X;B).
$$

Additivity is not part of this definition. Reduced cohomology is used so that
the suspension condition has one uniform form, including degree zero. For the
one-point based space every reduced group displayed above is zero, so both
naturality and stability hold uniquely; no choice principle is used.
