---
id: def-square-map-of-an-extraspecial-two-group
kind: definition
title: "The square map of an extraspecial $2$-group relative to a chosen generator of its centre"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, def-commutator-pairing-of-an-extraspecial-p-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-quotient-group, def-center-of-a-group, def-order-in-a-group, thm-z-mod-p-is-a-field, cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p]
justified_by: [lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing]
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups, \u00a72.1"
      url: "https://arxiv.org/pdf/1510.06583"
pipeline_run: null
---

## Definition

Let $P$ be an extraspecial $2$-group ([[def-special-and-extraspecial-p-groups]])
and fix the generator $z$ of its centre, so $Z(P)=\{1,z\}$ with $z^2=1$
([[def-center-of-a-group]], [[def-order-in-a-group]]). Write $V=P/Z(P)$ with its
canonical $\mathbb F_2$-vector-space structure
([[def-quotient-group]], [[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]],
[[thm-z-mod-p-is-a-field]]), and let $b_z$ be the commutator pairing
([[def-commutator-pairing-of-an-extraspecial-p-group]]).

The **square map of $P$ relative to $z$** is

$$q_z:V\to\mathbb F_2,\qquad x^2=z^{\,q_z(\bar x)} .$$

**Why the exponent exists and is unique.** The quotient $P/Z(P)$ is elementary
abelian ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]), so
$x^2\in Z(P)=\{1,z\}$ for every $x\in P$; and $z^0=1\ne z=z^1$, so exactly one
class in $\mathbb F_2$ records which of the two values $x^2$ takes.

That the value depends only on the coset $\bar x$, and the identity relating it
to the commutator pairing, are proved in
[[lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing]].

## Remarks

The map is not a homomorphism to $\mathbb F_2$: it fails additivity by exactly
the value of the commutator pairing, and that failure is the whole content of the
identity proved for it. Where the pairing vanishes the map is additive, and it is
on such subspaces that the counting of elementary abelian subgroups is done.

The map is defined only at $p=2$. For odd $p$ the corresponding assignment
$x\mapsto x^p$ also lands in the centre, but it is a homomorphism by the
class-two power formula
([[cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p]]) and
carries no extra information beyond the type.
