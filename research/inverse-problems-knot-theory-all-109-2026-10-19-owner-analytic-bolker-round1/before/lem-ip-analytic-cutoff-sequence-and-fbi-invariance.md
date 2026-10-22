---
id: lem-ip-analytic-cutoff-sequence-and-fbi-invariance
kind: lemma
title: "Analytic cutoff sequence and local FBI invariance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
  - def-ip-analytic-wavefront-fbi-transform
  - lem-ip-analytic-cutoff-sequence
  - lem-ip-holomorphic-morse-normalization-and-gaussian-contour
  - thm-ip-analytic-stationary-phase-with-exponential-remainder
  - def-real-analytic-germ-in-several-variables
  - thm-compactly-supported-distributions-are-tempered
  - lem-compactly-supported-distributions-extend-to-smooth-functions
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§6, Definition 6.1 and Proposition 6.2 with proof, printed pp. 36–45."
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§5.1–§5.2, printed pp. 27–32, for the Gaussian packet and finite-order localization conventions."
proof_strategy: direct
---

## Statement

Let $u$ be a compactly supported distribution or a compactly supported distributional density on a real-analytic manifold. In each analytic chart use the Gaussian FBI packets of the preceding definition, paired with test densities in the first case and test functions in the second. The exponential-decay criterion is independent of the compact cutoff that equals one near the base point. It is also equivalent after an analytic chart change, with covectors transformed by the cotangent differential, and after replacing the standard Gaussian packets by their analytic pullbacks under that chart change. The latter equivalence is asserted only for the local packet and chart changes used on this page; it is the analytic-wavefront invariance needed to interpret the set geometrically.

## Statement references

[[def-ip-analytic-wavefront-fbi-transform|Gaussian FBI criterion]]

[[lem-ip-analytic-cutoff-sequence|Finite-order cutoffs]]

[[lem-ip-holomorphic-morse-normalization-and-gaussian-contour|Holomorphic phase normalization]]

[[thm-ip-analytic-stationary-phase-with-exponential-remainder|Analytic stationary phase]]

[[def-real-analytic-germ-in-several-variables|Analytic chart changes]]

## Facts & Assumptions

**Given:** A compactly supported distribution $u$, a point-covector pair, nested coordinate neighborhoods, and the Gaussian packet families in the statement.

[F1] [[def-ip-analytic-wavefront-fbi-transform]]: analytic regularity means a uniform exponential bound on localized Gaussian FBI pairings.

[F2] [[lem-ip-analytic-cutoff-sequence]]: smooth compact cutoffs can be chosen with $|\partial^\alpha\chi_N|\le C(CN)^{|\alpha|}$ for $|\alpha|\le N$.

[F3] [[def-ip-distributions-conormal-kernels-and-cotangent-relation]]: scalar distributions act on test densities, while distributional densities act on scalar test functions; both are continuous with local fixed-support seminorm control.

[F4] [[thm-compactly-supported-distributions-are-tempered]]: compactly supported Euclidean distributions have unique tempered extensions.

[F5] [[lem-compactly-supported-distributions-extend-to-smooth-functions]]: compactly supported distributions act continuously on smooth functions by local cutoffs.

## Proof

**Given:** The data in the statement.

1.1 Fix one real-analytic chart and two smooth cutoffs $\chi,\widetilde\chi$ that both equal one on a neighborhood of the base point. Choose a smaller center neighborhood $U_0$ and a compact support neighborhood so that $|x-y|\ge d>0$ whenever $x\in U_0$ and $y\in\operatorname{supp}(\chi-\widetilde\chi)$. By continuity in the fixed-support topology [F3], in either distributional type the pairing is bounded by $C_0$ times the maximum of finitely many derivatives of its test object; a coordinate density factor, when present, has bounded derivatives on the compact chart support. Those derivatives of $(\chi-\widetilde\chi)e^{i\lambda(x-y)\cdot\omega-\lambda|x-y|^2/2}$ are bounded by $C_1(1+\lambda)^m e^{-\lambda d^2/2}$ uniformly for $x\in U_0$, directions near $\omega_0$, and $\lambda\ge1$. Since a polynomial times $e^{-\lambda d^2/2}$ is bounded by $C_2e^{-c\lambda}$ for any fixed $0<c<d^2/2$, replacing one fixed-chart cutoff by the other changes the FBI packet by an exponentially small term. [F1, F3, given, algebra]

1.2 Thus the exponential-decay criterion is independent of the fixed-chart cutoff. The finite-order sequence [F2] supplies the uniform localizers required when a distribution is restricted to a smaller chart; it avoids any use of compactly supported analytic bumps. For a distributional density $V$ in the fixed chart, define the scalar distribution $u_V$ by $\langle u_V,\varphi|dy|\rangle=\langle V,\varphi\rangle$. Continuity follows from [F3], and the vanishing-open sets of $u_V$ and $V$ agree because $|dy|$ is nowhere zero, so their supports agree. The packet pairings agree by definition. Hence [F4]–[F5] give the local Euclidean tempered and smooth-function realizations for either distributional type. This proves the cutoff and localization clauses without a choice axiom. [F2, F3, F4, F5, step 1.1] ∎
## Unresolved supplier check

The chart-packet equivalence in the statement is not proved by steps 1.1–1.2. Under an analytic chart change $\kappa$, the pulled-back standard packet has phase
$$
\phi_\kappa(x,y,\omega)=\omega\cdot(\kappa(x)-\kappa(y))+\tfrac{i}{2}|\kappa(x)-\kappa(y)|^2
$$
and analytic density amplitude given by the Jacobian of $\kappa$. The local diffeomorphism property gives $|\kappa(x)-\kappa(y)|\ge c|x-y|$ after shrinking the chart, and the phase has a holomorphic extension. To conclude the claimed equivalence, one must prove that the standard Gaussian packet and this pulled-back packet have the same exponential-decay criterion, in both directions. This requires constructing and estimating the analytic elliptic transition parametrix, including its nonstationary and boundary terms. The current carrier does not supply that estimate. Sjöstrand's Proposition 6.2 proves general phase independence by an analytic pseudodifferential parametrix, but that proof is not reproduced here, so citation alone does not discharge the step.

- Missing proof: an explicit analytic elliptic transition operator between standard and chart-pulled Gaussian FBI packet families, with inverse modulo $O(e^{-c\lambda})$ and uniform estimates on the stated conic neighborhoods.
- Exact source status: Sjöstrand, §6, Proposition 6.2 and its proof, printed pp. 41–45, states and proves the general independence result through an analytic pseudodifferential parametrix; MST §§5.1–5.2 uses Gaussian packets but does not prove general chart-packet invariance.
- Affected claims: geometric meaning of def-ip-analytic-wavefront-fbi-transform; thm-ip-analytic-wavefront-recovery-under-bolker; lem-ip-one-sided-analytic-support-continuation; thm-ip-local-support-from-one-sided-vanishing; ex-ip-visible-conormal-under-bolker.
- Proposed supplier and placement: complete this lemma on the A page by supplying the transition-parametrix construction and both exponential estimates before any dependent item is marked ready.
