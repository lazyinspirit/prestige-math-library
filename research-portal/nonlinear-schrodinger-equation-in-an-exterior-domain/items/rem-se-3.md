---
id: rem-se-3
kind: remark
domain: mathematics
title: "Remark 3: loss, Littlewood–Paley input and Neumann estimates"
status: published
deps:
  - prop-se-2-2-homogeneous
  - prop-se-2-3-loss
  - prop-se-2-4
  - math:def-axiom-of-choice
  - def-se-geometry
  - math:def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - math:def-classical-normal-derivative
dependency_roles:
  prop-se-2-2-homogeneous: mathematical-premise
  prop-se-2-3-loss: mathematical-premise
  prop-se-2-4: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-se-geometry: mathematical-premise
  math:def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  math:def-classical-normal-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: On nonlinear Schrödinger equations in exterior domains
      url: https://www.numdam.org/article/AIHPC_2004__21_3_295_0.pdf
      locator: Proposition 2.11 and its proof; Remarks 1.2, 2.3 and 2.9
      statement: The proof of Proposition 2.11 splits the evolution into near-obstacle
        and exterior pieces; the latter obeys no-loss estimates, while the
        former is estimated using smoothing and Sobolev embedding. Remark 1.2
        discusses the Neumann case, Remark 2.3 its high-frequency resolvent, and
        Remark 2.9 a corresponding local smoothing estimate with
        time-interval-dependent constants.
      hypotheses: The paper works on the exterior of a smooth non-trapping obstacle;
        the stated propositions and remarks retain their own dimension, exponent
        and boundary-condition hypotheses.
      reading_limits: Read Proposition 2.11 and its proof and the cited remarks for
        this comparison; no independent reconstruction of the full estimates is
        claimed here.
    - title: Strichartz estimates and the nonlinear Schrödinger equation on manifolds
        with boundary
      url: https://sites.math.washington.edu/~hfsmith/research/angschrod_arxiv.pdf
      locator: Introduction, p. 3, final application paragraph; Theorem 1.1, p. 3;
        section 5, pp. 18–21, especially Theorem 5.1, estimate (55) and the
        spectral decomposition on pp. 20–21
      statement: The paper gives scale-invariant estimates for a restricted exponent
        range on non-trapping exterior domains and derives a three-dimensional
        energy-to-L4-in-time L-infinity-in-space estimate using spectral
        frequency decomposition; it applies this to the energy-critical
        equation. Its introduction credits Ivanovici and Planchon [13] with
        first establishing well-posedness for small energy data for the
        energy-critical equation on exterior domains.
      hypotheses: The exterior results assume a smooth non-trapping obstacle; the
        energy-critical application in section 5 is three-dimensional and
        distinguishes Dirichlet and Neumann boundary conditions and their time
        ranges.
      reading_limits: Checked the introduction's attribution, Theorem 1.1, the section
        5 setup, Theorem 5.1, estimate (55) and the spectral decomposition for
        this comparison. The entire proof has not been independently
        reconstructed; no independent reading of Ivanovici and Planchon's proof
        is claimed.
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 9
---

## Statement

Assume the Axiom of Choice and the hypotheses of [[prop-se-2-3-loss]]. Its derivative loss is the extra $1/p$ derivatives required of the initial datum compared with the target regularity. The article explains that the loss in its estimate (2.5) comes from the near-obstacle part of the argument, where local smoothing and Sobolev embedding are used. The homogeneous smoothing estimate referred to here is [[prop-se-2-2-homogeneous]]. This describes the method used for that estimate, not a claim that every estimate must lose derivatives.

Blair, Smith and Sogge obtain scale-invariant Strichartz estimates on non-trapping exterior domains for a restricted range of exponents. Here scale-invariant means that the regularity and time-space exponents obey the scaling balance of the free Schrödinger equation. In three dimensions their section 5 uses a Littlewood–Paley argument, decomposing data into spectral frequency pieces, to obtain the energy estimate recorded in [[prop-se-2-4]]. They use this estimate to prove well-posedness for the energy-critical quintic equation; their introduction attributes the earlier small-energy well-posedness result to Ivanovici and Planchon.

For the boundary-condition comparison, use the classical convention: if $u$ and its first spatial derivatives extend continuously from $\Omega$ to its boundary on every bounded truncation, define $\partial_\nu u=\sum_{j=1}^n\nu_j\partial_j u$ there, with $\nu$ the outward unit normal of $\Omega$. For complex $u$ this is applied to real and imaginary parts. Homogeneous Neumann means $\partial_\nu u=0$; homogeneous Dirichlet means $u=0$ on $\partial\Omega$. This is the local exterior-boundary adaptation of [[math:def-classical-normal-derivative]] and the outward-normal convention of [[math:def-bounded-c-one-domain-boundary-charts-and-outward-normal]], justified below using [[def-se-geometry]]. This classical comparison does not assert a normal trace for arbitrary energy data; the cited evolution results retain their own operator realizations.

Burq, Gérard and Tzvetkov say the Neumann case can be handled by similar ideas. Their Remark 2.3 concerns the high-frequency resolvent, while Remark 2.9 obtains a corresponding local smoothing estimate with constants depending on the time interval. This qualification does not assert the time-uniform Dirichlet bound of [[prop-se-2-2-homogeneous]] for Neumann evolution.

## Justification

Choose $R$ with $\Theta\subset B_R(0)$ as in [[def-se-geometry]]. The bounded truncation $\Omega_R=B_R(0)\setminus\Theta$ has smooth boundary: near $\partial\Theta$ it has the given one-sided smooth boundary charts, and near $\partial B_R(0)$ it agrees with the ball, since these two boundary pieces are disjoint. The outward-normal and classical-normal-derivative definitions of [[math:def-bounded-c-one-domain-boundary-charts-and-outward-normal]] and [[math:def-classical-normal-derivative]] therefore apply to real and imaginary parts of the restriction of $u$ to $\Omega_R$. At each point of $\partial\Theta$, $\Omega_R$ and $\Omega$ agree in a neighborhood. Their outward normal and the continuous interior gradient are consequently the same there. Any other admissible radius gives that same local formula, so the classical derivative on the obstacle boundary is independent of the truncation. No boundary condition is imposed on the artificial sphere in this definition.

## Source notes

The original article's Remark 3 is the attribution for this comparison. The cited independent papers support the descriptions of their methods and results. This item does not claim a new proof of those results or an independent reading of Ivanovici and Planchon's proof.
