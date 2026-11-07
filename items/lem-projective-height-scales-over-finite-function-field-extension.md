---
id: lem-projective-height-scales-over-finite-function-field-extension
kind: lemma
title: Projective-height scaling over a finite extension of function fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-one-variable-function-field-with-constant-field
  - def-axiom-of-choice
  - def-relative-algebraic-closure
  - def-function-field-height-on-projective-line
  - thm-function-field-projective-height-well-defined
  - thm-finitely-generated-algebraic-extensions-are-finite
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical Heights on Varieties with Morphisms, §1"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
    - title: "Joseph H. Silverman, Arizona Winter School 2010 lecture notes, §§5.1–5.2"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $(K,k,M_K)$ be a one-variable function-field
datum with exact constants, let $E/K$ be finite, and let $k_E$ be the relative
algebraic closure of $k$ in $E$. Set
$$\lambda_{E/K}=\frac{c_k[k_E:k]}{[E:K]c_{k_E}},$$
where $c_F=\log q_F$ if $F=\mathbb F_{q_F}$ and $c_F=1$ if $F$ is infinite.
For every $P\in\mathbb P^1(\overline K)$,
$$h_K(P)=\lambda_{E/K}h_E(P),$$
where both projective heights use their respective base function fields.

## Statement references

[[def-one-variable-function-field-with-constant-field]]

[[def-function-field-height-on-projective-line]]

[[thm-function-field-projective-height-well-defined]]

## Facts & Assumptions

**Given:** A one-variable function-field datum $K/k$, a finite extension
$E/K$, the full constant field $k_E$, and a point $P$ defined over a finite
extension $M/E$.

[F1] For any finite extension $M/K$, the field $k_M$ of elements of $M$
algebraic over $k$ is finite over $k$; the same holds for $k_M/k_E$.
The elements of $M$ algebraic over $k_E$ are exactly those algebraic over
$k$, since $k_E/k$ is algebraic.
([[def-relative-algebraic-closure]],
[[thm-finitely-generated-algebraic-extensions-are-finite]])

[F2] On a normal proper curve model over its full constant field, the
projective height of $P=[x:y]$ over a base function field $F$ is
$$h_F(P)=c_F\frac{[k_M:k_F]}{[M:F]}\deg(\psi_P),$$
independently of the chosen finite field of definition.
([[def-function-field-height-on-projective-line]],
[[thm-function-field-projective-height-well-defined]])

[A1] The Axiom of Choice is assumed by the one-variable function-field datum
and projective-height suppliers; the field-degree manipulations below are
choice-free. ([[def-axiom-of-choice]])

## Proof

1.1 Choose a finite extension $M/E$ containing the coordinates of $P$ and a
normal proper curve model of $M$ over $k_M$. By [F2],
$$h_K(P)=c_k\frac{[k_M:k]}{[M:K]}\deg(\psi_P),\qquad
h_E(P)=c_{k_E}\frac{[k_M:k_E]}{[M:E]}\deg(\psi_P).$$
All degrees are finite by [F1], and the same map degree occurs in both
expressions. [A1, F1, F2, given]

1.2 The tower law gives
$[k_M:k]=[k_M:k_E][k_E:k]$ and $[M:K]=[M:E][E:K]$. Dividing the two
expressions in step 1.1 therefore gives
$$\frac{h_K(P)}{h_E(P)}
=\frac{c_k[k_E:k]}{[E:K]c_{k_E}}=\lambda_{E/K}$$
when the common map degree is nonzero; if it is zero both heights vanish and
the same equality holds. [step 1.1, algebra]

2.1 The value of $\lambda_{E/K}$ is positive and independent of $M$ and $P$.
Using the same finite field $M$ to compute both heights proves the asserted
identity for every algebraic point. [step 1.2, F2] ∎
