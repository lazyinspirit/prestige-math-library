---
id: thm-the-limits-of-discrete-series-are-not-square-integrable
kind: theorem
title: The limits of discrete series are not square-integrable
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-limits-of-discrete-series-for-sl2-r
  - thm-compact-picture-of-the-sl2-principal-series
  - thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series
  - lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series
  - lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r
  - def-matrix-coefficient-of-a-unitary-representation
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is assumed and inherited through the principal-series, unitary-limit, and fixed-Haar constructions. The coefficient conjugation and radial divergence argument use no further choice."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Jan Frahm, The Plancherel formula for real reductive groups I: Examples (AIM RTG lecture notes)"
      url: "https://prclare.people.wm.edu/AIM_RTNCG/LS_210823_Frahm.pdf"
      locator: "Slide 'The case SL(2,R) – discrete series', PDF pp. 22–23: defines discrete series by requiring all matrix coefficients of an irreducible unitary representation to lie in L²(G)."
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.16(3), printed pp. 306–308: computes the extremal coefficient in the holomorphic models for n≥2. The n=1 endpoint used here is computed in the compact picture, not by substituting into the n≥2 model."
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Define a square-integrable irreducible unitary representation to mean one for which every matrix coefficient lies in $L^2(G)$; this is the discrete-series convention of Frahm's SL$(2,\mathbb R)$ Plancherel notes. Let $D_1^-$ and $D_1^+$ be the two limits of discrete series of [[def-limits-of-discrete-series-for-sl2-r]]. Neither is square-integrable. In the compact picture of $I_{1,0}$, the normalized weight-one vector $f_1(k_\theta)=e^{i\theta}$ in $D_1^+$ has coefficient
$$\langle\Pi_0(a_\tau)f_1,f_1\rangle=\operatorname{sech}(\tau/2),\qquad a_\tau=\operatorname{diag}(e^{\tau/2},e^{-\tau/2}),$$
and
$$\int_G|\langle\Pi_0(g)f_1,f_1\rangle|^2\,dg=2\pi\int_0^\infty\operatorname{sech}^2(\tau/2)\sinh\tau\,d\tau=+\infty.$$
Complex conjugation gives the same nonintegrable coefficient modulus on $D_1^-$. This statement establishes failure of the all-coefficients criterion; it makes no claim about Plancherel support or occurrence in the regular representation.

## Facts & Assumptions

**Given:** AC; the compact-picture representation $I_{1,0}$, its two limit summands, the unitary structure of those limits, the weight-one coefficient formula, and the fixed left Haar measure.

[F1] The odd compact-picture basis has unit vectors $f_m(k_\theta)=e^{im\theta}$; $D_1^+$ is the closed positive-weight tail beginning at $f_1$, and $D_1^-$ is the closed negative-weight tail beginning at $f_{-1}$. Both are irreducible strongly continuous unitary representations ([[def-limits-of-discrete-series-for-sl2-r]], [[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]]).

[F2] At $\nu=0$, the compact-picture action has the form $(\Pi_0(g)f)(k)=r(k,g)f(\kappa(k,g))$ with $r(k,g)$ real and positive. Therefore pointwise complex conjugation commutes with $\Pi_0(g)$ and maps $f_1$ to $f_{-1}$ ([[thm-compact-picture-of-the-sl2-principal-series]], [[def-limits-of-discrete-series-for-sl2-r]]).

[F3] In this model, $\langle\Pi_0(a_\tau)f_1,f_1\rangle=\operatorname{sech}(\tau/2)$ for every $\tau\in\mathbb R$ ([[lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series]](b)).

[F4] For a continuous nonnegative K-bi-invariant function $\psi$, the fixed Haar measure satisfies $\int_G\psi(g)\,dg=2\pi\int_0^\infty\psi(a_\tau)\sinh\tau\,d\tau$ ([[lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r]]).

[F5] A matrix coefficient is $c_{v,w}(g)=\langle\pi(g)v,w\rangle$ with pairing linear in the first variable; such coefficients are continuous for strongly continuous unitary representations ([[def-matrix-coefficient-of-a-unitary-representation]]).

[A1] AC is assumed and inherited through the normalized principal-series and fixed-Haar constructions ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The assumptions and notation of the Statement.

1.1 Let $c_+(g):=\langle\Pi_0(g)f_1,f_1\rangle$. By [F1], $f_1$ is a unit K-eigenvector in $D_1^+$, and [F3] gives $c_+(a_\tau)=\operatorname{sech}(\tau/2)$. [F1, F3]

2.1 Unitarity and the K-character property of $f_1$ imply that $\psi_+(g):=|c_+(g)|^2$ is continuous, nonnegative, and K-bi-invariant. Applying [F4] and using $\sinh\tau=2\sinh(\tau/2)\cosh(\tau/2)$ gives $\int_G\psi_+(g)\,dg=2\pi\int_0^\infty 2\tanh(\tau/2)\,d\tau=+\infty$: the integrand $2\tanh(\tau/2)$ tends to $2$, hence is at least $1$ for all sufficiently large $\tau$. Thus $c_+\notin L^2(G)$. [F1, F3, F4, F5, step 1.1, algebra, A1]

3.1 Let $C f=\overline f$ on $L^2_1(K)$. By [F2], $C$ commutes with $\Pi_0(g)$ and maps the positive tail $D_1^+$ onto $D_1^-$. Since $C$ is antiunitary, $\langle\Pi_0(g)f_{-1},f_{-1}\rangle=\overline{\langle\Pi_0(g)f_1,f_1\rangle}$, so its modulus also fails to lie in $L^2(G)$ by step 2.1. The irreducible unitary representations $D_1^\pm$ therefore each have a matrix coefficient outside $L^2(G)$, which violates the defining requirement that every matrix coefficient be square-integrable. [F1, F2, F5, step 1.1, step 2.1, algebra] ∎
