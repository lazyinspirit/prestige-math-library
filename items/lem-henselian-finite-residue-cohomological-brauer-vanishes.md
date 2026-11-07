---
id: lem-henselian-finite-residue-cohomological-brauer-vanishes
kind: lemma
title: "Cohomological Brauer vanishing for Henselian DVRs with finite residue field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-axiom-of-choice
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
  - thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the stated smooth-site and finite-field Galois cohomology interfaces."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "III §1, finite-residue local cohomology; the direct residue and finite-field cochain argument is reconstructed here."
verification: {}
---

## Statement

Assume AC. If $R$ is a Henselian DVR with finite residue field, then
$$H^r_{\mathrm{et}}(R,\mathbb G_m)=H^r_{\mathrm{fppf}}(R,\mathbb G_m)=0\qquad(r\ge2).$$
In particular its cohomological Brauer group is zero. The finite-residue hypothesis is essential; no claim is made for arbitrary residue fields.

## Facts & Assumptions

**Given:** The Henselian DVR with finite residue field in the Statement and the Axiom of Choice.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Smooth affine étale and fppf cohomology agree over Noetherian bases, and their positive cohomology over a Henselian finite-residue DVR agrees with that of its residue field. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]]

[F2] Finite-field Galois cohomology of discrete torsion modules vanishes in degrees at least two. [[thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes]]

## Proof

**Proof technique:** reduce to the finite residue field and compute its multiplicative cohomology using Galois descent.

1.1 Let $k$ be the finite residue field. Since $\mathbb G_m$ is smooth affine, [F1] identifies both cohomologies in the Statement with $H^r_{\mathrm{et}}(k,\mathbb G_m)$ for $r\ge1$. [A1, F1, given, algebra]

2.1 Fix a separable closure $k_s$ using [A1]. Every étale $k$-scheme of finite presentation is a finite disjoint union of spectra of finite separable extensions; finite Galois refinements therefore identify its sections and descent data with finite continuous $G_k$-sets. Passing to sheaves gives discrete continuous $G_k$-modules, with exact stalk at $k_s$ and invariants as global sections. The standard continuous-cochain resolution consequently computes étale cohomology as $H^r_{\mathrm{cts}}(G_k,k_s^\times)$. The group $k_s^\times$ is torsion because each element lies in a finite field. [A1, step 1.1, construct, algebra]

3.1 By [F2] the continuous cohomology in step 2.1 vanishes for $r\ge2$, so step 1.1 gives both displayed vanishings. Degree two is exactly the cohomological Brauer group. The argument uses finiteness of $k$ in step 2.1 and does not extend this conclusion to arbitrary residue fields. [F2, step 1.1, step 2.1, algebra] ∎
