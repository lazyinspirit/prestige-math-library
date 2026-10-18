---
id: "lem-afem-vertex-patch-poincare"
kind: "lemma"
title: "Uniform Poincare inequalities on vertex and cell patches"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 0
deps:
  - "def-matching-affine-simplicial-meshes"
  - "thm-reference-simplex-poincare-wirtinger"
  - "thm-reference-simplex-trace-and-gauss-green"
  - "lem-shape-regular-affine-simplex-scaling"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "def-countable-choice"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 1"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture1.pdf"
      locator: "§1.5, Clément interpolation and scaled trace estimate, PDF pp. 8–9."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Statement

Assume Countable Choice, as in the reference-simplex trace and Poincare suppliers.

Let $\mathcal T$ be a conforming shape-regular triangular mesh. For an interior vertex $z$, let $\omega_z$ be the union of its incident triangles; for a boundary vertex use the same patch. There is a constant $C$ depending only on the shape-regularity bound such that, at an interior vertex, every $v\in H^1(\omega_z)$ satisfies
$$\|v-v_{\omega_z}\|_{L^2(\omega_z)}\le C h_z\|\nabla v\|_{L^2(\omega_z)},$$
where $v_{\omega_z}$ is the patch mean and $h_z=\max_{K\subset\omega_z}h_K$. On a boundary vertex patch, every $v\in H_0^1(\Omega)$ satisfies
$$\|v\|_{L^2(\omega_z)}\le C h_z\|\nabla v\|_{L^2(\omega_z)}.$$
For a cell $K$, define $\omega_K=\bigcup_{z\in\mathcal V(K)}\omega_z$, where $\mathcal V(K)$ is its set of three vertices. If $K$ does not meet $\partial\Omega$, the corresponding mean-zero estimate holds on $\omega_K$ with scale $h_K$; if $K$ meets $\partial\Omega$ and $v\in H_0^1(\Omega)$, then
$$\|v\|_{L^2(\omega_K)}\le Ch_K\|\nabla v\|_{L^2(\omega_K)}.$$

## Facts & Assumptions

[A1] Countable Choice is assumed in the cited Sobolev and reference-simplex suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, a conforming triangular mesh with shape-regularity bound $\Gamma$, an interior or boundary vertex $z$, and respectively $v\in H^1(\omega_z)$ or $v\in H_0^1(\Omega)$.

[F1] On a reference simplex, mean-zero functions satisfy Poincaré's inequality and the trace is bounded by the $H^1$ norm; affine scaling gives the corresponding cell bounds ([[thm-reference-simplex-poincare-wirtinger]], [[thm-reference-simplex-trace-and-gauss-green]], [[lem-shape-regular-affine-simplex-scaling]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F2] Shape regularity bounds the minimum angle away from zero; the polygonal mesh vertex stars are edge-connected and boundary stars meet a boundary edge ([[lem-shape-regular-affine-simplex-scaling]]).

## Proof

1.1 Scaling [F1] to each triangle $K$ gives $\|v-v_K\|_{L^2(K)}\le C h_K\|\nabla v\|_{L^2(K)}$ and $\|v-v_K\|_{L^2(E)}\le C h_K^{1/2}\|\nabla v\|_{L^2(K)}$ for every edge $E\subset\partial K$. Shape regularity makes $h_E$ comparable to $h_K$. If $K,L$ share $E$, their traces of $v$ agree, so $|v_K-v_L|\,|E|^{1/2}\le\|v-v_K\|_{L^2(E)}+\|v-v_L\|_{L^2(E)}\le C h_z^{1/2}\big(\|\nabla v\|_{L^2(K)}+\|\nabla v\|_{L^2(L)}\big).$ Using $|E|^{1/2}\ge c h_z^{1/2}$ for cells in one shape-regular vertex star bounds the difference of neighboring means by the two gradient norms. [A1, F1, F2, given, algebra]

2.1 The star has at most $N_\Gamma$ cells, and its dual edge graph is connected. Join each cell to a fixed cell by a graph path of length at most $N_\Gamma-1$ and apply step 1.1 along that path. The cell Poincaré bound from step 1.1 then gives $\|v-v_K\|_{L^2(\omega_z)}\le C h_z\|\nabla v\|_{L^2(\omega_z)}$. Since $|v_{\omega_z}-v_K|\le|\omega_z|^{-1/2}\|v-v_K\|_{L^2(\omega_z)}$, replacing $v_K$ by the patch mean proves the interior estimate. [step 1.1, F2, algebra]

3.1 For a boundary vertex patch choose one boundary edge $E_0\subset\partial\omega_z$. By the definition of $H_0^1$ as the $H^1$-closure of compactly supported smooth functions, and the continuous local trace bound in [F1], the trace of $v$ is zero on $E_0$. The trace inequality in step 1.1 therefore gives $|v_K|\,|E_0|^{1/2}=\|v-v_K\|_{L^2(E_0)}\le C h_z^{1/2}\|\nabla v\|_{L^2(K)}$ for the incident cell $K$. The same bounded-path comparison of cell means from step 2.1 controls every cell mean in the star by $C\|\nabla v\|_{L^2(\omega_z)}$. Summing the cell Poincaré bounds proves the boundary estimate. [A1, F1, F2, step 1.1, step 2.1, given]

4.1 For a cell patch $\omega_K$, the three vertex stars are edge-connected because they all contain $K$, and the number of cells is at most three times the valence bound from [F2]. Along each edge-adjacency path, neighboring cell diameters are comparable by shape regularity, so all diameters in the patch are comparable to $h_K$. The mean-zero estimate follows by applying the cell-mean comparison of step 2.1 over this connected finite graph. If $K$ meets the boundary, $\omega_K$ contains a boundary edge; apply the zero-trace argument of step 3.1 there and the same path comparison to all cells in the union. These two estimates are the asserted cell-patch inequalities. [A1, F1, F2, step 2.1, step 3.1, given] ∎
