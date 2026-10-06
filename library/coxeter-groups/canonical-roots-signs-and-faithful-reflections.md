---
page: canonical-roots-signs-and-faithful-reflections
title: "Canonical Roots, Signs, and Faithful Reflections"
status: draft
items: []
examples: []
---

The independent signed-reflection exchange proof route specified by HH-11 is independent of the canonical real representation. This page now proves the geometric assertions that presentations and rank-two matrices alone do not supply.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**lem-cg-rank-two-prefix-and-chamber-length-induction.** Use the independent HH-11 exchange/parabolic theorem to factor w=uv with u in W_{s,t} and a length-additive suffix v having no s/t left descents. State Davis4.8.3 simultaneous assertions P_n (each wC° lies wholly on one side of every simple wall, negative side implies the corresponding left descent) and Q_n (for s≠t, wC°⊂u(H_s∩H_t) for a rank-two prefix u with length additivity). Prove (P_n,Q_n)⇒P_(n+1) and (P_(n+1),Q_n)⇒Q_(n+1) using the explicit rank-two halfspace alternatives, not an assumed geometric action. If both s,t descend, the finite dihedral prefix is its longest word; infinite dihedral cannot have both descents. Equality on closed chamber walls is handled only after this open-halfspace induction.

**thm-cg-root-sign-and-simple-reflection-positivity.** Complete the simultaneous induction: every root lies in V_+ or -V_+, exclusively since its norm is one; r_s permutes Φ_+\{e_s} and sends e_s to -e_s. Explicitly isolate the coefficient of e_s and the longest alternating prefix; do not substitute crystallographic integrality or an assumed root-system axiom for this real proof.

**thm-cg-root-length-criterion-and-faithfulness.** Prove ℓ(ws)>ℓ(w) iff rho(w)e_s∈Φ_+ by the chamber-length induction and exchange. If w≠1, its final reduced letter s has ℓ(ws)<ℓ(w), so rho(w)e_s is negative and rho(w)≠1. Deduce canonical representation injective for every finite-rank Coxeter matrix, including indefinite and degenerate B.

**def-cg-geometric-inversion-set.** Define N(w)={a∈Φ_+:rho(w)a∈-Φ_+}. Fix left/right convention explicitly; a reduced word produces suffix roots for N(w) and prefix roots for N(w^-1). Sets are defined before any finiteness or independence assertion.

Definition justification: `thm-cg-root-inversion-formulas-and-strong-exchange`.

**thm-cg-root-inversion-formulas-and-strong-exchange.** Induct using simple-root positivity to prove |N(w)|=ℓ(w) and the suffix-root formula, with no repeated roots. Identify ±a with the conjugate reflection r_a using faithfulness. For t∈T with ℓ(tw)<ℓ(w), the corresponding inversion forces deletion of one letter; prove strong exchange, not merely exchange by a simple generator.

## Prerequisites and reading

Required earlier pages: [[real-forms-and-reflection-geometry]], [[coxeter-presentations-exchange-and-reduced-word-theorems]]. The companion [[canonical-roots-signs-and-faithful-reflections-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
