---
id: rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels
kind: remark
title: "The crystal identification does not elementarily identify the cellular simple labels"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-good-node-and-cogood-node-crystal-operators,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality,
       prop-every-p-restricted-partition-is-reached-by-cogood-node-additions,
       thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction]
justified_by: []
aliases: []
landmark: false
dependency_level: 12
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.2 with the inductive definition of D-dot(mu) as the head of F_i D-dot(e-tilde_i mu) and the labelling conjecture (11.1), printed pp. 51-52, and §11.2 for the references to S. Ariki's proof and the graded argument [40, Theorems 5.13, 5.18]. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
---

## Statement

Two labellings of the simple modules of the group algebra $kS_d$ and of the
Hecke algebra $H_d$ are in play on this page and on the Fock-space page.

- The **cellular labels** $D(\mu)=\operatorname{hd}(S(\mu))$ are the heads of
  the Specht modules in the dual-Specht convention; they are the labels used
  by the modular classification
  ([[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]).
- The **inductive (crystal) labels** $\dot D(\mu)$ are defined recursively
  from the residue-summand functors $F_i$ of
  [[def-generalized-jm-primary-idempotents-and-residue-summand-functors]] by
  $\dot D(\varnothing)=k$ and, for $\mu\ne\varnothing$,
$$\dot D(\mu):=\operatorname{hd}\bigl(F_i\dot D(\tilde e_i\mu)\bigr) \quad\text{for any }i\text{ for which }\tilde e_i\mu\text{ is defined},$$ the
  operators $\tilde e_i,\tilde f_i$ being those of
  [[def-good-node-and-cogood-node-crystal-operators]] and the independence
  of the choice of $i$ a theorem of the crystal theory. The two labellings
  agree, $$\dot D(\mu)\cong D(\mu)\qquad(\mu\ \text{p-restricted}),$$ and this
  identification (11.1) of Kleshchev's survey is *not* elementary: it was
  first established by Ariki and later by graded arguments, both depending on
  the full theory of the cyclotomic Hecke/KLR categorification.

Consequently no proof on this page or on the later Fock-space page may use
Fock-space reachability to establish the cellular classification of simple
modules, or the cellular classification to establish the Fock-space
component; the two directions are separated by this reminder. In particular
the socle theorem
`cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues`
and the branching theorems of this page are stated and used for the cellular
labels, while any statement about the crystal operators as operators on Fock
space is a separate obligation of the Fock-space page.

## Remarks

- **Why the identification is not formal.** The definition of $\dot D(\mu)$
  uses only the functors $F_i$ and the already-constructed simple modules of
  smaller rank, whereas $D(\mu)$ is the head of an explicit Specht module;
  the equality of the two families is a strong statement about the
  categorification, not a consequence of the combinatorial inverse property
  of the operators.
- **The direction used here.** Only the cellular labels are assigned
  module-theoretic meaning on this page; the symbol $\dot D(\mu)$ occurs on
  the Fock-space page, where the identification is available through the
  cited theorem.

For the group-algebra specialization, the cellular endpoint statement
[[thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction]]
and the reachability argument
[[prop-every-p-restricted-partition-is-reached-by-cogood-node-additions]]
give a precise conditional comparison without using Fock-space
classification. Induct on rank. At rank zero both labels are $k$. For any
allowed predecessor $\nu=\tilde e_i\mu$, the combinatorial inverse property
gives $\tilde f_i\nu=\mu$. If the lower-rank inductive label is $D(\nu)$,
the cellular cogood theorem makes the head of $F_iD(\nu)$ the simple
$D(\mu)$. Thus every allowed choice of $i$ produces this same simple module.
Reachability ensures at least one predecessor. This argument is conditional
on the actual cellular endpoint proof and its suppliers, and supplies no
general-Hecke functor or endpoint theorem. Kleshchev's cited comparison
concerns the broader cyclotomic setting; its non-elementary proof history
does not make this rank induction a proof of that broader theorem.
