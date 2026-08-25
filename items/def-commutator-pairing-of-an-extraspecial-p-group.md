---
id: def-commutator-pairing-of-an-extraspecial-p-group
kind: definition
title: "The commutator pairing of an extraspecial $p$-group relative to a chosen generator of its centre"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, def-elementary-abelian-p-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-quotient-group, thm-integers-modulo-n-basic-algebra, thm-z-mod-p-is-a-field, def-order-in-a-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-special-and-extraspecial-p-groups, cor-prime-order-group-is-cyclic]
justified_by: [lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Definition 3.7 and \u00a73.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, \u00a72.4"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Definition

Let $P$ be an extraspecial $p$-group ([[def-special-and-extraspecial-p-groups]])
and fix a generator $z$ of its centre, so that $Z(P)=\langle z\rangle$ has order
$p$. Write

$$V:=P/Z(P),$$

which is elementary abelian ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]],
[[def-elementary-abelian-p-group]], [[def-quotient-group]]), and give it its
canonical $\mathbb F_p$-vector-space structure
([[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]]), where
$\mathbb F_p=\mathbb Z/p$ is the field of [[thm-z-mod-p-is-a-field]] and
[[thm-integers-modulo-n-basic-algebra]], the group operation of $V$ is vector
addition and the scalar action is $\bar a\cdot\bar x=\bar x^{a}$. Elements of $V$
are written multiplicatively, $\bar x$ denoting the coset $xZ(P)$; scalars are
written additively.

The **commutator pairing of $P$ relative to $z$** is the map

$$b_z:V\times V\to\mathbb F_p,\qquad [x,y]=z^{\,b_z(\bar x,\bar y)} .$$

**Why the exponent exists and is unique.** Every commutator of $P$ lies in
$[P,P]=Z(P)=\langle z\rangle$
([[cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p]],
[[def-commutator-and-commutator-subgroup]], [[def-center-of-a-group]]), so
$[x,y]=z^{k}$ for some integer $k$. Since $z$ has order $p$
([[def-order-in-a-group]], [[cor-prime-order-group-is-cyclic]]), $z^{k}$ depends
only on the class of $k$ in $\mathbb Z/p$, and $z^{k}=z^{k'}$ forces
$k\equiv k'$; so the class $\bar k\in\mathbb F_p$ is determined by $[x,y]$, and
that class is $b_z(\bar x,\bar y)$.

That the value depends only on the cosets $\bar x$ and $\bar y$, and not on the
representatives $x$ and $y$, is proved in
[[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]].

## Remarks

The pairing depends on the choice of $z$, and only on it: replacing $z$ by
$z^{c}$ with $c\ne0$ replaces $b_z$ by $c^{-1}b_z$. So the radical, the
orthogonality relation and every statement about a subspace being self-orthogonal
are independent of the choice, while the individual values are not. The
companion page records the false statement that no choice is needed.

Nothing here is imported from a theory of bilinear forms. The target
$\mathbb F_p$ is the field $\mathbb Z/p$, the vector-space structure on $V$ is
the canonical scalar action of an elementary abelian $p$-group, and every
property of $b_z$ used below is proved from the commutator identities of a group
whose derived subgroup is central.
