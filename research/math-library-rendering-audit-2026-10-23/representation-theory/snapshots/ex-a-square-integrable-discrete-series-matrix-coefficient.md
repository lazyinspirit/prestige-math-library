---
id: ex-a-square-integrable-discrete-series-matrix-coefficient
kind: example
title: A square-integrable discrete-series matrix coefficient
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series
  - thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients
  - lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r
  - def-matrix-coefficient-of-a-unitary-representation
  - def-left-haar-integral-and-left-haar-measure
  - thm-monotone-convergence-for-the-integral
  - def-axiom-of-choice
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited through the discrete-series and fixed-Haar model interfaces. The radial substitution and convergence argument make no additional choices."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
proof_scope:
  local: "The exact norm of the normalized n=2 extremal coefficient and divergence of the n=1 endpoint radial integral are computed locally from the assigned coefficient and KAK suppliers. The square-integrability theorem supplies the broader K-finite coefficient result; its decision and the coefficient/KAK supplier decisions remain provisional."
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.16(3), printed pp. 306–307: the extremal coefficient calculation assumes n≥2 and gives the finite-norm model context; the normalized coefficient and native Haar integral are computed from the assigned local suppliers."
    - title: "Peter Hochs, Harish-Chandra's Plancherel formula for SL(2,R) (lecture notes)"
      url: "https://www.math.ru.nl/~hochs/HC_Plancherel_formula.pdf"
      locator: "§2 Theorem 2.1, printed p. 7: Plancherel formula includes the discrete-series terms with coefficients n−1; contextual corroboration only, not used to compute the extremal coefficient or its radial integral."
---
## Example

For $D_2^-$, let $u_2$ be the normalized extremal K-vector from [[lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series]]. Its coefficient $c_2(g)=\langle\pi_2(g)u_2,u_2\rangle$ satisfies $c_2(a_\tau)=\operatorname{sech}^2(\tau/2)$ and has exact squared norm $\int_G|c_2(g)|^2dg=4\pi$ for the fixed left Haar measure. The assigned theorem [[thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients]] supplies the broader K-finite coefficient result for $D_2^-$. At the $n=1$ limit endpoint, the compact-picture weight-one coefficient $c_1(a_\tau)=\operatorname{sech}(\tau/2)$ instead has infinite squared integral.

## Facts & Assumptions

**Given:** AC, the holomorphic discrete-series model $D_2^-$, the compact-picture weight-one endpoint, and the fixed left Haar measure on $G=\mathrm{SL}_2(\mathbb R)$.

[F1] The normalized extremal vector $u_2$ is K-finite in the strongly continuous unitary model $D_2^-$ and has coefficient $c_2(a_\tau)=\cosh(\tau/2)^{-2}$ ([[lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series]](a), [[thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients]]).

[F2] Matrix coefficients use the first-variable-linear pairing; the coefficient of a strongly continuous unitary representation is continuous ([[def-matrix-coefficient-of-a-unitary-representation]]).

[F3] If $|c|$ is continuous and $K$-bi-invariant, then $\int_G|c(g)|^2\,dg=2\pi\int_0^\infty|c(a_\tau)|^2\sinh\tau\,d\tau$ for the fixed Haar measure ([[def-left-haar-integral-and-left-haar-measure]], [[lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r]]).

[F4] Every matrix coefficient of K-finite vectors in $D_2^-$ lies in $L^2(G)$, and $D_2^-$ embeds as a closed invariant subspace of the left regular representation ([[thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients]]).

[F5] In the strongly continuous unitary odd compact picture at the endpoint, $c_1(a_\tau)=\operatorname{sech}(\tau/2)$ for the unit weight-one vector ([[lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series]](b)).

[F6] For a nonnegative measurable function $h$, if $h_m\uparrow h$ pointwise, then $\int h_m\,d\mu\uparrow\int h\,d\mu$ ([[thm-monotone-convergence-for-the-integral]]).

[A1] AC is assumed and inherited through the normalized discrete-series and fixed-Haar constructions ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** The vectors, representations, Haar measure and facts above.

1.1 Let $c_2(g)=\langle\pi_2(g)u_2,u_2\rangle$. By [F1], $c_2(a_\tau)=\operatorname{sech}^2(\tau/2)$. The vector $u_2$ is a $K$-eigenvector, so unitarity gives $c_2(k_1gk_2)=\chi(k_1)\chi(k_2)c_2(g)$ for its character $\chi$; hence $|c_2|^2$ is continuous and $K$-bi-invariant by [F2]. [F1, F2]

2.1 Applying [F3] gives $\int_G|c_2(g)|^2\,dg=2\pi\int_0^\infty\operatorname{sech}^4(\tau/2)\sinh\tau\,d\tau$. Set $u=\tau/2$; the radial integrand times $d\tau$ becomes $4\sinh u\cosh^{-3}u\,du$. For $M>0$, its integral on $[0,M]$ is $2(1-\cosh^{-2}M)$, which tends to $2$. The truncated integrands increase to the full nonnegative integrand, so [F6] gives the full radial integral $2$ and therefore $\|c_2\|_2^2=4\pi$. [F3, F6, step 1.1, algebra, A1]

3.1 By [F4], this explicit coefficient lies within the K-finite square-integrable coefficient family of $D_2^-$. At the $n=1$ endpoint, [F5] and [F3] instead give $\int_G|c_1(g)|^2\,dg=2\pi\int_0^\infty2\tanh(\tau/2)\,d\tau=+\infty$: for $\tau\ge\log3$ the integrand is at least $1$, and $\mathbf1_{[\log3,\log3+m]}\uparrow\mathbf1_{[\log3,\infty)}$ has integral $m$, so [F6] forces divergence. Thus the concrete $n=2$ coefficient is square-integrable while the displayed limit coefficient is not. [F3, F4, F5, F6, step 2.1, algebra] ∎
