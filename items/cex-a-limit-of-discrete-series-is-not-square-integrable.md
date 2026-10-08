---
id: cex-a-limit-of-discrete-series-is-not-square-integrable
kind: counterexample
title: A limit of discrete series is not square-integrable
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - thm-the-limits-of-discrete-series-are-not-square-integrable
  - lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series
  - def-limits-of-discrete-series-for-sl2-r
  - thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series
  - def-matrix-coefficient-of-a-unitary-representation
  - def-left-haar-integral-and-left-haar-measure
  - thm-monotone-convergence-for-the-integral
  - def-axiom-of-choice
  - lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: Assume AC, inherited through the limit-series and fixed-Haar model
  interfaces. The coefficient calculation, radial substitution, and divergence
  argument make no additional choices.
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
proof_scope:
  local: The weight-one coefficient is supplied by the assigned compact-picture
    coefficient lemma, while the exact radial divergence and the n≥2 extremal
    comparison are computed here. The compact-picture, unitary-limit,
    coefficient, and KAK supplier decisions remain provisional until their exact
    interfaces and uses reconcile.
sources:
  references:
    - title: "Jan Frahm, The Plancherel formula for real reductive groups I: Examples
        (AIM RTG lecture notes)"
      url: https://prclare.people.wm.edu/AIM_RTNCG/LS_210823_Frahm.pdf
      locator: "Slide 'The case SL(2,R) – discrete series', PDF pp. 22–23: all matrix
        coefficients of an irreducible unitary representation must lie in L²(G);
        definition corroboration."
    - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups
        (AMS GSM 155; author's PDF)
      url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
      locator: "§7.4, Proposition 7.4.16(3), printed pp. 306–307: the proof assumes
        n≥2 and computes the extremal coefficient in the finite-norm holomorphic
        models; it does not cover n=1."
---
## Statement refuted

The claim that every limit of discrete series is square-integrable in the all-matrix-coefficients sense of [[thm-the-limits-of-discrete-series-are-not-square-integrable]] is false. In the fixed Haar normalization of [[def-left-haar-integral-and-left-haar-measure]] and [[lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r]], the limit $D_1^+$ has a unit matrix coefficient whose squared modulus has infinite integral. By contrast, for each genuine discrete-series parameter $n\ge2$, the corresponding normalized extremal coefficient has finite squared integral.

## Facts & Assumptions

**Given:** AC, $G=\mathrm{SL}_2(\mathbb R)$, its fixed left Haar measure, the odd compact-picture model $I_{1,0}$, and the holomorphic discrete-series models for $n\ge2$.

[F1] The unit vector $f_1(k_\theta)=e^{i\theta}$ lies in the closed limit summand $D_1^+$ of $I_{1,0}$, and $D_1^+$ is an irreducible strongly continuous unitary representation ([[def-limits-of-discrete-series-for-sl2-r]], [[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]]).

[F2] Matrix coefficients are $c_{v,w}(g)=\langle\pi(g)v,w\rangle$ with pairing linear in the first variable, and they are continuous for strongly continuous unitary representations ([[def-matrix-coefficient-of-a-unitary-representation]]).

[F3] In the compact picture, $c(g)=\langle\Pi_0(g)f_1,f_1\rangle$ satisfies $c(a_\tau)=\operatorname{sech}(\tau/2)$ for every $\tau\in\mathbb R$ ([[lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series]](b)).

[F4] For a continuous function with unitary-character left and right $K$-transformation, its modulus is $K$-bi-invariant, and the fixed Haar measure gives $\int_G|c(g)|^2\,dg=2\pi\int_0^\infty|c(a_\tau)|^2\sinh\tau\,d\tau$ ([[lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r]]).

[F5] For each $n\ge2$, the normalized extremal vector $u_n$ in a genuine discrete-series model has coefficient $\langle\pi_n(a_\tau)u_n,u_n\rangle=\cosh(\tau/2)^{-n}$ ([[lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series]](a)).

[F6] The square-integrability condition used here requires every matrix coefficient of an irreducible unitary representation to lie in $L^2(G)$ ([[thm-the-limits-of-discrete-series-are-not-square-integrable]]).

[F7] If $0\le g_m\uparrow g$ pointwise, then $\int g_m\,d\mu\uparrow\int g\,d\mu$ ([[thm-monotone-convergence-for-the-integral]]).

[A1] AC is assumed and inherited through the normalized principal-series and fixed-Haar model interfaces ([[def-axiom-of-choice]]).

## Counterexample

**Proof technique:** direct.

**Given:** The assumptions and notation above.

1.1 Let $\pi$ be the restriction of $I_{1,0}$ to $D_1^+$ and set $c(g)=\langle\pi(g)f_1,f_1\rangle$. By [F1], this is a matrix coefficient of an irreducible unitary limit representation; by [F2] it is continuous, and [F3] gives $c(a_\tau)=\operatorname{sech}(\tau/2)$. If $\chi(k_\theta)=e^{i\theta}$, unitarity and $\pi(k)f_1=\chi(k)f_1$ give $c(k_1gk_2)=\chi(k_1)\chi(k_2)c(g)$. Thus [F4] applies to $|c|^2$. [F1, F2, F3, F4, A1]

2.1 The KAK formula and $\sinh\tau=2\sinh(\tau/2)\cosh(\tau/2)$ give $\int_G|c(g)|^2\,dg=2\pi\int_0^\infty\operatorname{sech}^2(\tau/2)\sinh\tau\,d\tau=2\pi\int_0^\infty2\tanh(\tau/2)\,d\tau$. For $\tau\ge\log3$, $2\tanh(\tau/2)\ge1$. The indicators $\mathbf1_{[\log3,\log3+m]}$ increase to $\mathbf1_{[\log3,\infty)}$ and their integrals are $m$, so [F7] shows the last nonnegative integral is infinite. [F1, F3, F4, F7, step 1.1, algebra]

3.1 By [F6], the irreducible unitary representation $D_1^+$ is not square-integrable because the coefficient in step 2.1 is not in $L^2(G)$. For $n\ge2$, [F4] and [F5] give the corresponding extremal coefficient integral $2\pi\int_0^\infty\cosh^{-2n}(\tau/2)\sinh\tau\,d\tau$. With $u=\tanh(\tau/2)$ this equals $8\pi\int_0^1u(1-u^2)^{n-2}\,du=4\pi/(n-1)<\infty$, confirming the endpoint contrast and refuting the claim in the Statement. [F4, F5, F6, step 2.1, algebra] ∎
