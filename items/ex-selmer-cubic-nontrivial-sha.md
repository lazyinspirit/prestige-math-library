---
id: ex-selmer-cubic-nontrivial-sha
kind: example
title: "Selmer's cubic as a nontrivial Tate–Shafarevich class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-tate-shafarevich-group-of-abelian-variety
  - thm-picard-degree-one-component-is-a-jacobian-torsor
  - lem-rational-degree-one-class-implies-point
  - thm-selmer-cubic-is-everywhere-locally-soluble-but-has-no-rational-point
  - cor-genus-degree-smooth-plane-curve
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Keith Conrad, Selmer's Example"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/selmerexample.pdf"
      locator: "Theorem 1 and its complete proof, pp. 1–5."
    - title: "J. S. Milne, Abelian Varieties, Chapter III, §1"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "The Picard degree-one component and its Jacobian torsor structure."
verification: {}
---

## Example

Assume AC and DC. Over $\mathbb Q$, the smooth plane cubic
$C:3X^3+4Y^3+5Z^3=0$ has points over $\mathbb R$ and every $\mathbb Q_p$,
but has no $\mathbb Q$-rational point. Its degree-one Picard scheme is a
locally trivial torsor under its Jacobian $J=\operatorname{Jac}(C)$, and its
torsor class is a nonzero element of $\Sha(J/\mathbb Q)$.

## Example references

[[thm-selmer-cubic-is-everywhere-locally-soluble-but-has-no-rational-point|Local solubility and global insolubility of Selmer's cubic]]

[[cor-genus-degree-smooth-plane-curve|A smooth plane cubic has genus one]]

[[thm-picard-degree-one-component-is-a-jacobian-torsor|Degree-one Picard component is a Jacobian torsor]]

[[lem-rational-degree-one-class-implies-point|A rational degree-one class on a genus-one curve gives a rational point]]

[[def-tate-shafarevich-group-of-abelian-variety|Tate–Shafarevich group]]

## Facts & Assumptions

**Given:** AC, DC, the cubic $C$, and its everywhere-local,
no-global-point property.

[A1] AC and DC are inherited from the global-field and Picard-torsor
conventions. ([[def-axiom-of-choice]], [[def-dependent-choice]],
[[def-tate-shafarevich-group-of-abelian-variety]],
[[thm-picard-degree-one-component-is-a-jacobian-torsor]])

[F1] The cubic is smooth by the local verification theorem, and every smooth
plane cubic has genus one.
([[thm-selmer-cubic-is-everywhere-locally-soluble-but-has-no-rational-point]],
[[cor-genus-degree-smooth-plane-curve]])

[F2] For a smooth proper geometrically connected genus-one curve, its
degree-one Picard component is a torsor under its Jacobian; a point of that
torsor is a Galois-invariant degree-one geometric divisor class.
([[thm-picard-degree-one-component-is-a-jacobian-torsor]])

[F3] The fppf Tate–Shafarevich group is the kernel of the product of local
restriction maps on fppf torsor classes.
([[def-tate-shafarevich-group-of-abelian-variety]])

[F4] A Galois-invariant degree-one class on a genus-one curve over a number
field gives a rational point on the curve.
([[lem-rational-degree-one-class-implies-point]])

## Verification

**Proof technique:** identify the degree-one Picard torsor and test its
local and global triviality.

**Given:** [A1] and [F1]–[F4].

1.1 By [F1], $C$ has genus one and the Jacobian $J$ is defined. By [F2],
$\operatorname{Pic}^1_{C/\mathbb Q}$ is a torsor under $J$; let $c$ denote
its class in $H^1_{\mathrm{fppf}}(\mathbb Q,J)$. [A1, F1, F2, given, construct]

1.2 For each place $v$, the local point $C(\mathbb Q_v)$ supplied by the
Selmer cubic theorem gives an effective divisor of degree one, hence a
$\mathbb Q_v$-point of $\operatorname{Pic}^1_{C/\mathbb Q}$. Its torsor is
therefore locally trivial at every place, so [F3] gives
$c\in\Sha(J/\mathbb Q)$. [A1, F2, F3, step 1.1, given]

2.1 If $c=0$, then the torsor $\operatorname{Pic}^1_{C/\mathbb Q}$ has a
$\mathbb Q$-point. By [F2] this is a Galois-invariant geometric divisor
class of degree one; [F4] would give a point in $C(\mathbb Q)$, contradicting
the global insolubility in the given theorem. Hence $c\ne0$, so it is a
nonzero element of $\Sha(J/\mathbb Q)$ represented by the everywhere locally
trivial torsor $C$. [A1, F2, F3, F4, step 1.1, step 1.2, algebra] ∎
