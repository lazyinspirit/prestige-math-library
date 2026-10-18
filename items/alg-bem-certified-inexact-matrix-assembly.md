---
id: alg-bem-certified-inexact-matrix-assembly
kind: algorithm
title: Certified near-quadrature and far-multipole matrix assembly
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  [
    def-bem-surface-mesh-and-piecewise-constant-density-space,
    def-bem-calderon-boundary-operators,
    thm-duffy-weak-singularity-transform,
    alg-duffy-weighted-product-gauss-quadrature,
    cor-duffy-weighted-product-gauss-error,
    alg-three-dimensional-laplace-cluster-expansion,
    thm-three-dimensional-laplace-expansion-error-and-work,
    def-countable-choice,
    def-axiom-of-choice,
    lem-bem-panel-pair-duffy-certificates,
    lem-bem-far-panel-quadrature-residual
  ]
justified_by: [ thm-bem-matrix-perturbation-transfer ]
axiom_use: "The Axiom of Choice and Countable Choice are inherited through the
  weak single-layer pairing and trace-space suppliers in the panel-pair lemma.
  Countable Choice also supplies the positive weighted Gaussian rules. The
  finite geometric decompositions and finite matrix-error algebra use no choice
  once their inputs are supplied."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Imperial College London, Numerical quadrature, Finite Element course
        notes, §1.6"
      url: https://finite-element.github.io/1_quadrature.html
      locator: "§1.6, equations (1.11)–(1.13): tensor quadrature and the collapsed-edge
        Duffy map for a smooth reference-triangle integrand. Singular weights
        and certified remainders are supplied by the local Duffy results."
    - title: "Michael O’Neil, Integral Equations and Fast Algorithms, complete course
        lecture notes (2017)"
      url: https://cims.nyu.edu/~oneil/courses/fa17-math2011/int_eq_notes_2017.pdf
      locator: "Chapter 4 §4.1.2, PDF pp. 26–30: the 3D Laplace point-source expansion
        and its separated-cluster truncation."
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let $\mathcal T_h$ and $X_h$ be the surface mesh and P0 space from [[def-bem-surface-mesh-and-piecewise-constant-density-space]]. For an ordered target/source pair $(T,S)$ define its exact 3D Laplace single-layer matrix entry by
$$A_{TS}=\langle1_T,V1_S\rangle_\Gamma=\int_T\int_S\frac{1}{4\pi|x-y|}\,dS_y\,dS_x,$$
where the equality is proved for every panel pair by [[lem-bem-panel-pair-duffy-certificates]]. Supply a positive per-entry tolerance $\tau_{TS}$ and construct exactly one auditable certificate as follows.

Process the finite set of ordered panel pairs once in lexicographic mesh order. For each pair, first certify whether the panels coincide, share an edge, share a vertex, or are disjoint; if the incidence is unresolved, return **uncertified**. Use exact algebraic panel coordinates or provide the needed certified incidence, separation (for disjoint panels), denominator, and derivative bounds, together with outward arithmetic whose radii can be refined to zero. A missing required bound returns **uncertified**. After selecting a standard branch below, refine its quadrature and arithmetic certificates by levels $k=0,1,2,\ldots$ and accept the first level whose total error bound is at most $\tau_{TS}$. At each level refine precision until the combined node-value, evaluation and outward-arithmetic contribution to the entry bound is at most $2^{-k-1}\tau_{TS}$; charge the fiber-quadrature remainder separately.

- **Near certificate.** For coincident panels or panels sharing an edge or vertex, use the finite sign-cell/pulling-simplex identity of [[lem-bem-panel-pair-duffy-certificates]]. A disjoint pair may also use that lemma's smooth fallback whenever the whole-panel far-cluster condition below is unavailable. Each term is a reference-triangle integral $\int_R|z|^{-\alpha_m}q_m(z)dz$ with $\alpha_m<2$ and transformed amplitude $G_m\in C^{2n}([0,1]^2)$. Record the exact change-of-variables derivation, the supplied derivative bounds, and the positive Gaussian remainder $E_m$ from [[cor-duffy-weighted-product-gauss-error]]. If $\rho_m$ is the separately certified total of nested fiber, node-value and outward arithmetic radii, require $\varepsilon_{TS}^{\rm near}=\sum_m|c_m|(E_m+\rho_m)\le\tau_{TS}$. A custom near identity may be accepted as a supplied finite certificate only after its identity, derivative bounds, every Gaussian hypothesis, and total error at most $\tau_{TS}$ have been verified; otherwise return **uncertified**. Do not run the standard refinement loop on a custom identity. For the standard panel-pair construction, every final exponent is $\alpha_m=0$.

- **Far certificate.** For disjoint panels, fix certified balls containing the entire source and target panels. Choose positive centroid rules on finite midpoint subdivisions and use [[lem-bem-far-panel-quadrature-residual]] to record the physical-kernel quadrature residual $\varepsilon_{TS}^{\rm quad}$ and any separate outward evaluation radius $\varepsilon_{TS}^{\rm eval}$. If the source nodes with physical charges $q_j=v_j/(4\pi)$ lie in $B(c,a)$ and the target nodes lie in $B(d,b)$ with the strict condition $R=|d-c|>a+b$, evaluate the single-cluster field of [[alg-three-dimensional-laplace-cluster-expansion]]. For $Q=\sum_j|q_j|$ and target weight sum $W_T$, record
$$\varepsilon_{TS}^{\rm far}=\varepsilon_{TS}^{\rm quad}+\varepsilon_{TS}^{\rm eval}+W_T\frac{Q}{R-b}\frac{(a/(R-b))^{p+1}}{1-a/(R-b)}+\varepsilon_{TS}^{\rm FMM-arith}.$$
The final term is the outward arithmetic radius of the finite cluster evaluation; it is zero only for an exact-arithmetic evaluation. At level $k$, use $m_T=m_S=p=k$ and refine outward precision as needed. If the whole-panel balls fail $R>a+b$, do not use this tail and instead use the disjoint smooth near fallback with $n=1$, subdividing both reference triangles at level $k$. No global multilevel or $O(N)$ work claim is made.

For a touching pair, use the standard identity and take $n=1$ in the weighted product rule on each similar-triangle subdivision at level $k$; when the opposite face has dimension three use $2^k$ midpoint subintervals for the finite fiber integral. Use midpoint subdivision, so each reference-triangle diameter is $2^{-k}$ times its original diameter, and use the per-level precision budget above. If a custom identity or any required hypothesis cannot be verified, return **uncertified**.

For every pair require its certified total error $\varepsilon_{TS}\le\tau_{TS}$. Given one successful certificate for every ordered pair, form $\widetilde A_h=(\widetilde A_{TS})$. If $\gamma_h>0$ is a certified lower norm bound satisfying
$$\|c\|_2\le\gamma_h^{-1}\left\|\sum_Tc_T1_T\right\|_{H^{-1/2}(\Gamma)},$$
compute the returned defect certificate
$$\delta_h=\gamma_h^{-2}\left(\sum_{T,S}\varepsilon_{TS}^2\right)^{1/2}.$$
Any missing or unverified panel-pair geometry, identity, derivative bound, arithmetic radius or certificate returns **uncertified** and no matrix-defect claim. If no valid $\gamma_h$ is supplied, return the assembled matrix and its entrywise certificates without a matrix-defect bound. In particular, the batch-26 Duffy rule alone does not certify arbitrary coincident or edge-adjacent pairs.


## Remarks

Termination of the standard branches, entrywise certificate correctness, and the bilinear operator-defect bound for a successful output are proved in [[thm-bem-matrix-perturbation-transfer]]. The procedure above specifies the actual branches, recorded error quantities and uncertified behavior.
