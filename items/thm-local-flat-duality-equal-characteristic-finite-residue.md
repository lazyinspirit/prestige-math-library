---
id: thm-local-flat-duality-equal-characteristic-finite-residue
kind: theorem
title: "Local flat duality for finite flat groups in equal characteristic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
  - def-discrete-valuation-ring
  - def-finite-field-and-its-order
  - def-axiom-of-choice
  - def-dependent-choice
  - def-pontryagin-dual-and-compact-open-topology
  - thm-local-brauer-invariant-for-finite-residue-local-field
justified_by: []
proof_strategy: direct
axiom_use: "The target Statement remains unqualified. The current local Brauer/class-formation source route assumes AC and DC, while the finite-flat height-one source proof is incomplete; no choice-free proof branch is supplied here."
provenance:
  statement: literature-derived
  proof: escalated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §§5–7, especially Theorems 5.6, 7.1 and 7.2"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Takashi Suzuki, Duality for Local Fields and Sheaves on the Category of Fields, §2.7 and Remark 2.7.6"
      url: "https://arxiv.org/pdf/1310.4941"
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §4"
      url: "https://arxiv.org/pdf/1804.03941"
verification: {}
---

## Statement

Let $R$ be a discrete valuation ring of characteristic $p>0$ with finite
residue field $k$, complete for its maximal-ideal-adic topology; let
$K=\operatorname{Frac}(R)$, and let $G$ be a commutative finite flat group
scheme over $R$ with Cartier dual $G^D$. The evaluation cup product followed
by the local trace gives dualities
$$H^0(K,G^D)\times H_x^3(R,G)\longrightarrow\mathbb Q/\mathbb Z$$
between finite groups and
$$H^1(R,G^D)\times H_x^2(R,G)\longrightarrow\mathbb Q/\mathbb Z$$
between a compact group and a discrete torsion group. In each case the pairing
identifies either topological group with the continuous character group of the
other, using the compact-open topology on the Pontryagin dual. No rational
point on any curve used in the global application is assumed here.

## Statement references

[[def-finite-flat-group-scheme-and-cartier-dual]]

[[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]

[[def-discrete-valuation-ring]]

[[def-finite-field-and-its-order]]

[[def-pontryagin-dual-and-compact-open-topology]]

[[thm-local-brauer-invariant-for-finite-residue-local-field]]

[Milne, *Arithmetic Duality Theorems*, Chapter III, §§5–7](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Suzuki, §2.7 and Remark 2.7.6](https://arxiv.org/pdf/1310.4941)

[Demarche–Harari, §4](https://arxiv.org/pdf/1804.03941)

## Facts & Assumptions

**Given:** The complete equal-characteristic DVR and group scheme in the
Statement.

[F1] [[def-finite-flat-group-scheme-and-cartier-dual]] supplies the finite flat
group scheme and evaluation pairing.

[F2] [[def-discrete-valuation-ring]] and
[[def-finite-field-and-its-order]] define the valuation ring and finite residue
field;
[[def-pontryagin-dual-and-compact-open-topology]] defines the continuous
character group and its compact-open topology.

[F3] [[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]
defines $H_x^i(R,-)$ by the cone of restriction to $K$.

[F4] [[thm-local-brauer-invariant-for-finite-residue-local-field]] supplies the
normalized local trace for complete finite-residue local fields. Its proof is
currently escalated.

[L1] Milne, Chapter III, §5, Theorem 5.6 and Proposition 5.11: for a
height-one finite flat group scheme, exact sequences involving its Cartier
dual, the sheaves of invariant differentials, and their residue pairings give
the local cohomology exact sequences used in the height-one case.
[Milne, Chapter III, §5](https://www.jmilne.org/math/Books/ADTnot.pdf)

[L2] Milne, Chapter III, §6, Theorem 6.10 gives the local-field pairing for
finite flat group schemes; §7, Theorem 7.1 reduces arbitrary finite flat
groups to height-one factors and Cartier duals using extensions.
[Milne, Chapter III, §§6–7](https://www.jmilne.org/math/Books/ADTnot.pdf)

[A1] The height-one exact sequences and their residue-pairing compatibility
are substantial inputs from Milne III.5. Their full supplier proofs are not
present as items in this assigned batch; Suzuki explicitly leaves the
equal-characteristic local-local case to the Artin–Milne/Bester theory.

[A2] [[def-axiom-of-choice]] and [[def-dependent-choice]] are assumed only by
the current local Brauer/class-formation proof route. The local invariant
carrier remains escalated and does not provide a complete source proof; this
does not add AC or DC to the Statement.

## Proof

**Proof technique:** prove the height-one case by residue duality, then use
localization and extension devissage.

**Given:** [F1]–[F4], [L1]–[L2], and unresolved proof-route inputs [A1]–[A2].

1.1 Evaluation in [F1], cup product, and the local trace in [F4] define the
two stated pairings. The support exact sequence in [F3] identifies the local
cohomology groups with the corresponding localization terms. [F1, F3, F4, A2]

1.2 For a height-one group, [L1] gives exact sequences whose middle terms are
the cohomology of invariant differentials. The residue pairing identifies
those middle terms as Pontryagin duals under [F2]; the induced diagram of exact
sequences then identifies the endpoint maps as dual isomorphisms. This
establishes both pairings in the height-one case, conditional on the missing
complete proof input [A1]. [F2, L1, A1, step 1.1]

2.1 The degree-zero pairing for a general finite flat group follows from
[L2]. The degree-one statement is equivalent, by localization, to the exact
annihilator assertion and is symmetric under Cartier duality. Every finite
flat group over this DVR has a finite filtration with height-one factors or
their Cartier duals; applying the long exact sequences to each extension and
the five lemma propagates the height-one dualities to $G$. [F1, F3, L2, A1, A2, step 1.2, algebra] ∎
