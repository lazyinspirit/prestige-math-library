---
id: ex-simply-connected-adjoint-and-intermediate-forms-of-a-semisimple-compact-group
kind: example
title: Simply connected, adjoint, and intermediate compact forms
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-central-quotients-correspond-to-intermediate-character-lattices, def-axiom-of-choice, prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix V §V.2"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice. For a semisimple compact root system, the simply
connected form corresponds to the weight lattice $P$, the adjoint form to the
root lattice $Q$, and intermediate finite central quotients to the intermediate
lattices $Q\subseteq X\subseteq P$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; a simply connected compact semisimple group $G_{sc}$ with maximal torus $T_{sc}$, root lattice $Q$ and weight lattice $P$.

[L1] Central subgroups $C\le Z(G_{sc})$ correspond bijectively and contravariantly to lattices $Q\subseteq X\subseteq P$ by $C\mapsto X^*(T_{sc}/C)$; the trivial central subgroup gives $P$ and the full centre gives $Q$ ([[prop-central-quotients-correspond-to-intermediate-character-lattices]]).

[L2] The simply connected compact form has character lattice $P$ and the adjoint form has character lattice $Q$ ([[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]]).

## Verification

**Proof technique:** direct.

1.1 By [L2] the simply connected form $G_{sc}$ itself has $X^*(T_{sc})=P$, corresponding under [L1] to the trivial central subgroup. [L1, L2]

1.2 The adjoint form $G_{ad}=G_{sc}/Z(G_{sc})$ has character lattice $Q$ by [L2]; by [L1] it corresponds to the full centre, and the annihilator of $Q$ in the finite dual pairing is exactly $Z(G_{sc})$. [L1, L2]

2.1 For an intermediate lattice $Q\subsetneq X\subsetneq P$ the annihilator $C_X=\bigcap_{\chi\in X}\ker\chi$ is a nontrivial proper central subgroup with $X^*(T_{sc}/C_X)=X$, by [L1], and conversely every nontrivial proper central subgroup arises this way; so the intermediate quotients are exactly the intermediate lattices. [L1, step 1.2]

3.1 This yields the full menu of forms: the simply connected endpoint, the adjoint endpoint, and one marked quotient for each intermediate lattice, which is the sense in which compact semisimple groups are classified by root datum with the added lattice data. [L1, step 1.1, step 2.1] ∎
