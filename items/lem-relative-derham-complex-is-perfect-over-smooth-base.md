---
id: lem-relative-derham-complex-is-perfect-over-smooth-base
kind: lemma
title: "Relative de Rham complexes are perfect over smooth complex bases"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-cech-computes-qc-cohomology-separated-scheme-affine-cover, thm-differentials-smooth-locally-free, thm-jacobian-criterion-smooth-morphism, lem-ag-standard-smooth-flatness, thm-proper-pushforward-coherent, thm-first-hypercohomology-spectral-sequence, thm-ag-perfect-field-jacobian-regularity, thm-auslander-buchsbaum-serre-regularity-criterion, def-axiom-of-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {}
---

## Statement

Assume AC and DC. Let $f:X\to S$ be a smooth proper morphism of complex algebraic varieties, with $S$ smooth. Zariski locally on $S$, the derived relative de Rham complex $Rf_*\Omega^\bullet_{X/S}$ is represented by a bounded complex $K^\bullet$ of finite free modules. For every base change from such an affine neighbourhood $\operatorname{Spec}R$ to an $R$-algebra $R'$, the complex $K^\bullet\otimes_RR'$ computes the hypercohomology of $\Omega^\bullet_{X_{R'}/R'}$, naturally in $R'$.

No constancy of the cohomology ranks, comparison with Betti cohomology, or Gauss–Manin compatibility is asserted.

## Facts & Assumptions

**Given:** AC, DC and the smooth proper morphism over the smooth complex base.

[F1] Quasi-coherent sheaf cohomology on a quasi-compact separated scheme is computed by a finite affine Čech cover; relative differentials of smooth maps are finite locally free, and smooth maps are locally standard smooth and flat ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[thm-differentials-smooth-locally-free]], [[thm-jacobian-criterion-smooth-morphism]], [[lem-ag-standard-smooth-flatness]]).

[F2] Proper direct images of coherent sheaves are coherent, and the first hypercohomology spectral sequence computes hypercohomology from sheaf cohomology ([[thm-proper-pushforward-coherent]], [[thm-first-hypercohomology-spectral-sequence]]).

[F3] A smooth finite-type complex scheme has regular local rings at closed points, and every finite module over a Noetherian regular local ring has a finite free resolution ([[thm-ag-perfect-field-jacobian-regularity]], [[thm-auslander-buchsbaum-serre-regularity-criterion]]).

## Proof

**Proof technique:** use a bounded flat Čech–de Rham complex and replace it locally by a finite free complex over a regular base.

1.1 Restrict to an affine base $S=\operatorname{Spec}R$. Choose a finite affine cover of $X$; by separatedness, its finite intersections are affine. For every $p$, [F1] computes $H^q(X,\Omega^p_{X/S})$ by the corresponding Čech complex. The finite Čech–de Rham double complex therefore computes $Rf_*\Omega^\bullet_{X/S}$ on this affine base. It is bounded: the cover is finite and the relative de Rham complex has degrees $0$ through the relative dimension. Each term is flat over $R$: on an affine intersection, smoothness makes its coordinate algebra flat over $R$ and $\Omega^p$ is locally free over that algebra by [F1], so its section module is flat over $R$. For any $R$-algebra $R'$, the affine intersections and relative differential forms base change to the corresponding data on $X_{R'}$; hence tensoring this complex with $R'$ gives the fibre-product Čech–de Rham complex and computes its hypercohomology. [F1, given, choose, construct, algebra]

2.1 By [F2], each $H^q(X,\Omega^p_{X/S})$ is a finite $R$-module. The finite hypercohomology spectral sequence in [F2] therefore shows that every cohomology module of the bounded Čech–de Rham complex $C^\bullet$ is finite. At a closed point $s$ of the smooth base, the local ring $R_s$ is regular by [F3], so every finite $R_s$-module has a bounded finite free resolution by [F3]. A bounded complex with finite cohomology over such a ring is perfect: use the canonical truncation triangle $$\tau_{\le t-1}C_s\longrightarrow\tau_{\le t}C_s\longrightarrow H^t(C_s)[-t]\longrightarrow$$ and induct on its finite cohomological range. The shifted cohomology module has a finite free resolution, the lower truncation is perfect by induction, and the connecting morphism is represented by a chain map between bounded free models because the source model is projective. Its mapping cone is a bounded finite free model for the middle term. Thus $C_s^\bullet$ is quasi-isomorphic to a bounded finite free $R_s$-complex. [F2, F3, given, step 1.1, construct, algebra]

3.1 Choose such a model $K_s^\bullet$. Because it is bounded and projective, the derived isomorphism $K_s^\bullet\simeq C_s^\bullet$ is represented by an actual chain map $K_s^\bullet\to C_s^\bullet$: lift a map through an acyclic cone one degree at a time using projectivity. Only finitely many matrix coefficients and images of basis vectors occur, so clear their denominators and shrink to a principal neighbourhood of $s$ to spread $K_s^\bullet$ and the chain map. The finitely many chain-map equations hold after localization at $s$, hence after a further shrink. The cone's cohomology modules are finite, being extensions of finite cohomology of $C^\bullet$ and $K^\bullet$; they vanish at $s$, so their closed supports miss a neighbourhood of $s$. Shrink once more. The resulting bounded finite free $K^\bullet$ is quasi-isomorphic to $C^\bullet$ there. Such neighbourhoods of closed points cover $S$: a nonempty closed subset of a finite-type complex scheme contains a closed point. [given, step 1.1, step 2.1, choose, construct, algebra]

4.1 The cone of $K^\bullet\to C^\bullet$ is a bounded acyclic complex of flat $R$-modules. Its cycle modules are flat by descending induction from the last term: in $0\to Z^i\to C^i\to Z^{i+1}\to0$, flatness of the last two modules makes the kernel flat. These short exact sequences remain exact after tensoring with any $R'$ because the quotient modules are flat. Thus the cone remains acyclic after tensoring with any $R'$, and $K^\bullet\otimes_RR'\to C^\bullet\otimes_RR'$ is a quasi-isomorphism. Step 1.1 identifies the latter with the Čech–de Rham complex after base change, giving the stated natural hypercohomology computation. Empty fibres or zero-dimensional relative schemes are included by the same bounded-complex argument. [given, step 1.1, step 3.1, construct, algebra] ∎

## Boundary

The theorem supplies the finite perfect model and base change, not the ranks of its cohomology or any comparison with analytic or Betti realizations.
