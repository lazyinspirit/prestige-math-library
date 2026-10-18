---
page: yangians-quantum-affine-and-transfer-matrices
title: "Yangians, Quantum Affine Algebras, and Transfer Matrices"
status: draft
items: [def-yangian-gl-n-rtt-presentation, lem-yangian-rtt-component-commutator-form, prop-yangian-gl-n-rtt-hopf-structure, def-yangian-evaluation-module, thm-yangian-evaluation-module-well-defined, lem-yangian-rtt-spectral-rescaling, prop-yangian-rational-r-matrix-yang-baxter-and-invertibility, lem-yangian-fundamental-evaluation-intertwiner, def-yangian-periodic-fundamental-chain, lem-yangian-periodic-monodromy-satisfies-rtt, thm-yangian-periodic-transfer-matrices-commute, lem-yangian-gl2-one-root-bethe-cancellation]
examples: []
---

This page develops one exact spectral model: the type-A RTT Yangian $Y_i(\mathfrak{gl}_N)$ over $\mathbb C$, for $N\ge2$, with rational difference parameter and $R_N(x)=xI+iP_N$. It does not identify this Yangian with a quantum affine algebra $U_q(\widehat{\mathfrak g})$, nor assert results for other ranks, types, or completed universal $R$-matrices. The normalization relation to the common $zI-P$ convention is recorded explicitly in [[lem-yangian-rtt-spectral-rescaling]].

All spectral $R$-matrices here are ordinary finite-dimensional operators. At $N=2$, [[def-hh-rational-spectral-r-matrix]] and [[lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter]] are the single canonical finite $\mathbb C^2$ carriers; this page reuses those exact definitions in the rank-two specialization and proves the higher-rank permutation identity locally. The existing singular-parameter example remains an example only and is not used as a proof supplier.

Companion: [[yangians-quantum-affine-and-transfer-matrices-examples]].

## Reading prerequisites

Proposed reading order: [[hopf-hecke-and-quantum-symmetry-interfaces]], [[affine-current-algebras-virasoro-and-sugawara]], [[cyclotomic-klr-algebras-and-highest-weight-categorification]]. These page-level reading prerequisites follow the current plan; only the explicit item links in each proof are logical suppliers. The finite spectral $R$-matrix comes from the first route, while the affine-current and KLR pages provide surrounding context and do not enter the local proofs below.

## Existing library route

- [quantized-enveloping-algebras-and-quantum-serre-relations](quantized-enveloping-algebras-and-quantum-serre-relations.md): quantized enveloping algebras Does not automatically supply spectral-parameter R-matrices.

- [affine-lie-algebras-and-loop-central-extensions](../lie-theory/affine-lie-algebras-and-loop-central-extensions.md): affine Lie algebra construction Yangian/quantum affine distinction remains.

- [cyclotomic-klr-algebras-and-highest-weight-categorification](../hecke-algebras-and-categorification/cyclotomic-klr-algebras-and-highest-weight-categorification.md): cyclotomic/KLR modules Does not prove Bethe completeness.

## RTT algebra and evaluation modules

[[def-yangian-gl-n-rtt-presentation]] fixes the field, rank, matrix-unit convention, formal-series RTT relation, and spectral normalization. The reusable coefficient identity is derived in [[lem-yangian-rtt-component-commutator-form]]. [[prop-yangian-gl-n-rtt-hopf-structure]] verifies the coproduct, counit, and formal inverse antipode rather than importing Hopf identities without checking the RTT convention. The evaluation formula on any left $\mathfrak{gl}_N$-module is defined in [[def-yangian-evaluation-module]] and its component RTT relations are checked in [[thm-yangian-evaluation-module-well-defined]].

The parameter change $z=iu$ converts this local $R_i(x)=xI+iP$ convention to $R_0(z)=zI-P$; it also sends an evaluation parameter $a$ to $ia$ ([[lem-yangian-rtt-spectral-rescaling]]). This is a normalization equivalence, not an identification with the separate quantum-affine or shifted finite-W constructions.

## Rational intertwiner and finite periodic chain

[[prop-yangian-rational-r-matrix-yang-baxter-and-invertibility]] proves the parameterized Yang–Baxter equation in every $N\ge2$, reuses the exact batch-64 result at $N=2$, and gives the full singular-parameter and rank boundary. [[lem-yangian-fundamental-evaluation-intertwiner]] specializes that identity to two dual-natural evaluation modules and states the intertwiner orientation and invertibility condition.

For a finite chain of dual-natural evaluation sites with arbitrary complex inhomogeneities, [[def-yangian-periodic-fundamental-chain]] fixes the ordered monodromy and ordinary untwisted auxiliary trace. [[lem-yangian-periodic-monodromy-satisfies-rtt]] proves RTT by local Yang–Baxter and induction on the number of sites. [[thm-yangian-periodic-transfer-matrices-commute]] uses the inverse only away from the two singular differences and extends commutation to every pair of parameters by polynomial identity.

## One-root Bethe statement and its limit

The $\mathfrak{gl}_2$ carrier [[lem-yangian-gl2-one-root-bethe-cancellation]] derives both RTT commutation formulas and shows exactly how $a(v)=d(v)$ cancels the unwanted one-root term, under the nonzero Bethe-vector condition. It makes no completeness claim. The companion page supplies a direct failure case.

The transfer theorem is for a finite algebraic vector space, periodic boundary (ordinary trace, no twist), and the explicit fundamental Lax operators above. It proves commuting transfer matrices only. It does not prove Hermiticity, Yangian invariance of a periodic Hamiltonian, existence of a complete Bethe basis, or continuum/thermodynamic claims.

The proofs use explicit finite-dimensional matrices and formal series. They require no choice axiom; all tensor bases are the displayed indexed finite bases. No proof relies on the TikZ notation diagrams.

## Canonical suppliers and reuse boundaries

- [def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra](../../items/def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra.md): type-A finite W shifted-Yangian presentation. Not scattering or evaluation-module completeness.

- [thm-ordered-monomial-pbw-basis-for-the-shifted-yangian](../../items/thm-ordered-monomial-pbw-basis-for-the-shifted-yangian.md): ordered PBW basis. Auditor reports partial proof only; do not treat as a completed logical supplier until local proof completion is verified.

## Conventions, diagrams, and sources

Apply the [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md) and [prerequisite and repair holds](../../research/physics-algebras-planning-2026-10-17/prerequisites.md) before treating any proposed result as a supplier. All diagrammatic operations require defined domains, codomains, orientations, coefficients, and algebraic verification. Existing carriers keep their canonical identities and placements. Physics-only mathematical carriers require the supported same-ID resolver route specified in those contracts; links here do not establish that route.

- [06-other-physics-algebras](../../research/physics-algebras-planning-2026-10-17/dossiers/06-other-physics-algebras.md)

Full page contract: [placement inventory](../../research/physics-algebras-planning-2026-10-17/splice/placed-pages.json) (entry `yangians-quantum-affine-and-transfer-matrices`). The original [audited research inventory](../../research/physics-algebras-planning-2026-10-17/proposed-pages.json) and its historical audit receipt remain unchanged.
