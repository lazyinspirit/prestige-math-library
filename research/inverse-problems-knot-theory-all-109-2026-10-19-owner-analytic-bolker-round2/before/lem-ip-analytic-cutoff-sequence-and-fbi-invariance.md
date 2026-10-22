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
  - lem-ip-local-analytic-elliptic-packet-calculus
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
      locator: "§6, Definition 6.1 and Proposition 6.2 with proof, printed pp. 37–43."
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

[F6] [[lem-ip-local-analytic-elliptic-packet-calculus]] proves bidirectional equivalence for normalized positive analytic phases and elliptic analytic amplitudes, including actual inverse and fixed-order exponentially small localization errors.

## Proof

**Given:** The data in the statement.

1.1 Fix one real-analytic chart and two smooth cutoffs $\chi,\widetilde\chi$ that both equal one on a neighborhood of the base point. Choose a smaller center neighborhood $U_0$ and a compact support neighborhood so that $|x-y|\ge d>0$ whenever $x\in U_0$ and $y\in\operatorname{supp}(\chi-\widetilde\chi)$. By continuity in the fixed-support topology [F3], in either distributional type the pairing is bounded by $C_0$ times the maximum of finitely many derivatives of its test object; a coordinate density factor, when present, has bounded derivatives on the compact chart support. Those derivatives of $(\chi-\widetilde\chi)e^{i\lambda(x-y)\cdot\omega-\lambda|x-y|^2/2}$ are bounded by $C_1(1+\lambda)^m e^{-\lambda d^2/2}$ uniformly for $x\in U_0$, directions near $\omega_0$, and $\lambda\ge1$. Since a polynomial times $e^{-\lambda d^2/2}$ is bounded by $C_2e^{-c\lambda}$ for any fixed $0<c<d^2/2$, replacing one fixed-chart cutoff by the other changes the FBI packet by an exponentially small term. [F1, F3, given, algebra]

1.2 Let $\kappa$ be an analytic chart change. After shrinking to nested compact neighborhoods, $|\kappa(q)-\kappa(y)|\ge c|q-y|$ and $D\kappa(q)$ is invertible uniformly. The pulled-back packet has phase $ \phi(y,q,\omega)=\omega\cdot(\kappa(q)-\kappa(y))+\frac{i}{2}|\kappa(q)-\kappa(y)|^2. $ It is holomorphic after complexification, vanishes at $y=q$, and has derivative $-D\kappa(q)^T\omega$ there. Reparameterize by $p=D\kappa(q)^T\omega$; this is an analytic local diffeomorphism of the frequency parameters and is precisely the cotangent rule. The phase is now normalized and positive in the sense of [F6]. The Jacobian amplitude for scalar distributions is analytic and nonzero: the sign of the real determinant is constant on the smaller connected chart, so its absolute value has an analytic continuation. For distributional densities the amplitude is $1$. [F3, F6, given, algebra]

2.1 Thus the exponential-decay criterion is independent of the fixed-chart cutoff. The finite-order sequence [F2] supplies the uniform localizers required when a distribution is restricted to a smaller chart; it avoids any use of compactly supported analytic bumps. For a distributional density $V$ in the fixed chart, define the scalar distribution $u_V$ by $\langle u_V,\varphi|dy|\rangle=\langle V,\varphi\rangle$. Continuity follows from [F3], and the vanishing-open sets of $u_V$ and $V$ agree because $|dy|$ is nowhere zero, so their supports agree. The packet pairings agree by definition. Hence [F4]–[F5] give the local Euclidean tempered and smooth-function realizations for either distributional type. This proves the cutoff and localization clauses without a choice axiom. [F2, F3, F4, F5, step 1.1]

3.1 Apply [F6] to the standard and pulled-back packets on the smaller neighborhoods. It supplies actual transition representations in both directions, with polynomially bounded transition kernels and errors exponentially small in every fixed derivative; the finite distributional order from [F3] therefore preserves their exponential size after pairing. The known exponential estimate on the source parameter neighborhood transfers to the target one. Swapping the two families gives the converse. Step 1.1 removes all fixed cutoff choices, and step 2.1 covers both distributional conventions. This proves every invariance clause in the statement, with the exact cotangent transformation from step 1.2. [F3, F6, step 1.1, step 2.1, step 1.2, algebra] ∎
