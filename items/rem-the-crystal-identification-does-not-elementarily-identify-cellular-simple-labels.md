---
id: rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels
kind: remark
title: "The crystal identification does not elementarily identify the cellular simple labels"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells,
       def-good-node-and-cogood-node-crystal-operators,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality,
       prop-every-p-restricted-partition-is-reached-by-cogood-node-additions,
       thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction]
justified_by: []
forward_refs: [lem-general-hecke-cellular-simple-labels-match-the-basic-crystal]
aliases: []
landmark: false
dependency_level: 20
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.2 with the inductive definition of D-dot(mu) as the head of F_i D-dot(e-tilde_i mu) and the labelling conjecture (11.1), printed pp. 51-52, and §11.2 for the references to S. Ariki's proof and the graded argument [40, Theorems 5.13, 5.18]. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
---

## Statement

At level one, distinguish the **cellular labels** $D(\mu)$, the nonzero
Murphy cell-form quotients (the dual-Specht heads at $q=1$), from the
**inductive labels** $\dot D(\mu)$ defined by
$$\dot D(\varnothing)=F,\qquad \dot D(\mu)=\operatorname{hd}\bigl(F_i\dot D(\widetilde e_i\mu)\bigr)$$
for any defined good deletion $\widetilde e_i\mu$. Here $F$ is any field,
the Hecke parameter is invertible with finite quantum characteristic
$e\ge2$, and $\mu$ is $e$-restricted. At $q=1$, $e=p$ and the functors
are those of [[def-generalized-jm-primary-idempotents-and-residue-summand-functors]];
the general Hecke functors are constructed in
[[lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells]].
The group label convention is fixed by
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]].

The equality
$$\dot D(\mu)\cong D(\mu)$$
and independence of the chosen deletion follow at level one from the
proved cellular branching endpoints and induction on rank, as explained
below. They do not follow from the combinatorial inverse property alone
([[def-good-node-and-cogood-node-crystal-operators]]). This local comparison
uses no Fock-space classification.

The historical warning in Kleshchev's survey §11.2, equation (11.1),
concerns the broader cyclotomic labelling theorem for restricted
multipartitions. The survey attributes its proof to Ariki and a later
graded argument, and describes both as relying on the wider theory.
That warning does not preclude the finite level-one comparison here.
Identifying the resulting graph with the canonical crystal $B(\Lambda_0)$
is a separate result of
[[lem-general-hecke-cellular-simple-labels-match-the-basic-crystal]],
using the independent Fock-component suppliers and their declared Axiom of
Choice. Neither that identification nor Fock reachability is a premise of
the cellular branching proofs on this page.

## Remarks

Every nonempty $e$-restricted shape has a good deletion. Its bottom
removable corner has residue $\mu_h-h$, while the only boundary corner
below it is the addable $(h+1,1)$ of residue $-h$.
Since $0<\mu_h<e$, that bottom minus cannot cancel, so a surviving minus
exists. The finite signature argument in
[[lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells]]
proves that good deletion remains restricted and that its inverse is the
prescribed cogood addition. For the group specialization, reachability is
also supplied by
[[prop-every-p-restricted-partition-is-reached-by-cogood-node-additions]].

Now induct on rank. At rank zero both modules are $F$. For each allowed
predecessor $\nu=\widetilde e_i\mu$, induction gives
$\dot D(\nu)\cong D(\nu)$. The cellular induction endpoint is
$\operatorname{hd}(F_iD(\nu))\cong D(\widetilde f_i\nu)=D(\mu)$.
Thus every allowed deletion yields the same isomorphism class, and the
bottom-corner argument ensures that a deletion exists. The argument is
finite and choice-free; in the group specialization its induction
endpoint is also
[[thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction]].
