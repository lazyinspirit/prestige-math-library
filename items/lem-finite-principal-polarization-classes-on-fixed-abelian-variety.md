---
id: lem-finite-principal-polarization-classes-on-fixed-abelian-variety
kind: lemma
title: Finitely many principal polarization classes on a fixed abelian variety
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-abelian-variety-over-a-field
  - def-polarization-of-an-abelian-variety
  - def-axiom-of-choice
justified_by: []
proof_strategy: "Rosati involution and lattice reduction; the reduction-theory input is not locally proved"
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter I §15, Theorem 15.1 and Proposition 15.2, printed pp. 63–65"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $A/k$ be an abelian variety. A principal
polarization of $A$ is a polarization homomorphism $\lambda:A\to\widehat A$
of degree one. Declare two such homomorphisms $\lambda,\lambda'$ equivalent
if $\lambda'=u^\vee\circ\lambda\circ u$ for some $k$-automorphism
$u:A\to A$. There are only finitely many equivalence classes of principal
polarizations of $A$.

## Statement references

[[def-abelian-variety-over-a-field]]

[[def-polarization-of-an-abelian-variety]]

[[def-axiom-of-choice]]

[Milne, Theorem 15.1 and Proposition 15.2](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Proof status

Escalated: no complete local proof is supplied. Milne reduces the assertion to
finiteness of arithmetic-group orbits of bounded-norm lattice elements
(Proposition 15.2); that proposition invokes reduction theory of arithmetic
subgroups. No proved local supplier for this reduction-theory result was
identified. The polarization finiteness statement is therefore a required
draft interface, not a proof-closed supplier. Proposed placement for the
missing finite-orbit theorem is an upstream arithmetic-group or Jacobian A
page; the owner must select its home and supply its proof.

The proposed prerequisite must be restricted to the invertible polarization
locus. Proposition 15.2 as printed includes singular elements and is false
in that generality: take $E=M_2(\mathbb Q)$, $R=L=M_2(\mathbb Z)$ and
transpose involution. The matrices $\operatorname{diag}(m,0)$, for positive
integers $m$, have norm zero and belong to distinct $R^\times$-congruence
orbits. Indeed, integral unimodular congruence preserves the ideal generated
by all matrix entries, which here is $m\mathbb Z$. Transpose is even a
positive involution, so adding positivity of the involution alone does not
repair that proposed prerequisite. This counterexample does not refute the
principal-polarization Statement: polarization homomorphisms are isogenies,
so the associated rational endomorphisms are invertible. A complete proof
on the appropriate restricted locus is still required.

## Axiom use

The statement carries the Axiom of Choice because the current library
definition of polarization is conditional on it. Milne's geometric finiteness
theorem itself is stated over any field; no claim that AC is mathematically
necessary for this finiteness result is made.
