---
id: def-special-and-extraspecial-p-groups
kind: definition
title: "Special and extraspecial $p$-groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-p-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-frattini-subgroup-of-a-finite-group, def-elementary-abelian-p-group]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Definition 3.1"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Definitions 2.28 and 2.30"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Definition

Let $p$ be a prime and let $P$ be a finite $p$-group ([[def-finite-p-group]]).
Write $P'=[P,P]$ for its derived subgroup ([[def-commutator-and-commutator-subgroup]]),
$Z(P)$ for its centre ([[def-center-of-a-group]]) and $\Phi(P)$ for its Frattini
subgroup ([[def-frattini-subgroup-of-a-finite-group]]).

A finite $p$-group $P$ is special when $Z(P)=P'=\Phi(P)$ is elementary abelian,
and extraspecial when in addition $P$ is nonabelian and this common subgroup has
order $p$. Elementary abelian $p$-groups are those of
[[def-elementary-abelian-p-group]], and the trivial group is one of them.

## Remarks

The nonabelian clause is stated rather than left implicit. It is not redundant
for every formulation in the literature: the informal description "$P/Z(P)$ is
elementary abelian and $|Z(P)|=p$" is satisfied by the cyclic group of order
$p$, whose centre is the whole group, so a definition phrased that way must
exclude the abelian case by hand. With the clause $Z(P)=P'$ in force the
exclusion is automatic, since an abelian group has trivial derived subgroup.

Two source conventions for extraspecial groups are in circulation and agree
under the order-$p$ centre hypothesis. Craven asks that
$Z(P)=P'=\Phi(P)$ be elementary abelian and then that this common subgroup have
order $p$; van Beek asks that $P'=Z(P)$ have order $p$ and that $P/Z(P)$ have
exponent $p$. Their equivalence for nonabelian $P$ is the content of
[[prop-equivalent-characterisations-of-an-extraspecial-p-group]].
