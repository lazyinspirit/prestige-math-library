---
title: Prior energy-critical null control on Euclidean space
status: draft
research_item: rem-se-prior-critical-null-control
dependency_level: 9
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: page 3, final paragraph before Remark 1; page 5, paragraph after
        Corollary 1.6; page 22, reference [7]
      statement: The article attributes local H1 null controllability on R3 with
        controls outside a ball to the four named authors, calls the
        three-dimensional quintic energy-critical, compares Corollary 1.6 with
        that work, and lists its bibliographic entry.
      hypotheses: Evidence only for what the frozen v2 article attributes and
        compares; no hypotheses or theorem of reference [7] are imported.
      reading_limits: Checked the attribution, comparison and bibliography in frozen
        PDF pages 3, 5 and 22 and the corresponding extracted text; reference
        [7] itself has not been read.
---

PDF p. 3: ` end of opening paragraph `; PDF p. 5: ` paragraph after Corollary 1.6 `

## Prerequisites

- [def-se-foundation-control-language](item-def-se-foundation-control-language)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [rem-se-critical-exponents](item-rem-se-critical-exponents)
- [def-se-internal-systems](item-def-se-internal-systems)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

The article attributes to Braz e Silva, Capistrano–Filho, Carvalho and Dos Santos Ferreira local null controllability in $H^1(\mathbb R^3)$ for the energy-critical nonlinear Schrödinger equation, with controls supported outside a ball. It identifies the three-dimensional quintic equation as energy-critical and compares its own quintic result with that reported whole-space result.

For the mathematical conventions in this remark, assume the Axiom of Choice. The whole-space quintic equation is written in the template form $i\partial_t u+\Delta u+\lambda|u|^4u=F$ on $\mathbb R^3\times(0,T)$, where $u$ is complex-valued, $\Delta$ is the spatial Laplacian, $\lambda\in\mathbb R\setminus\{0\}$ and $F$ denotes the control forcing. This uses the same quintic power as the internally controlled system, with no obstacle or boundary condition, and does not specify the admissible controls of reference [7]. Energy-critical refers to the unforced equation's scaling $u_\rho(t,x)=\rho^{1/2}u(\rho^2t,\rho x)$, $\rho>0$, preserving the homogeneous first-order seminorm $\|\nabla u(t)\|_{L^2(\mathbb R^3)}$ at corresponding times for sufficiently smooth states of finite seminorm. This is the gradient-norm scaling terminology of the critical-exponents remark; it supplies no controllability assertion.

Here $H^1(\mathbb R^3)=W^{1,2}(\mathbb R^3;\mathbb C)$ consists of complex $L^2$ classes whose first weak spatial derivatives also belong to $L^2$. Null controllability means steering the initial state to zero at the prescribed terminal time; the local qualification restricts the initial states to a neighborhood of zero in the relevant state topology. The precise admissible controls, solution class, time and smallness hypotheses belong to the attributed result.

## Statement references

[def-se-foundation-control-language](item-def-se-foundation-control-language)

[math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)

[rem-se-critical-exponents](item-rem-se-critical-exponents)

[def-se-internal-systems](item-def-se-internal-systems)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Source notes

The article lists reference [7] as P. Braz e Silva, R. de A. Capistrano–Filho, J. D. do N. Carvalho and D. Dos Santos Ferreira, *Control of the Schrödinger equation in R3: the critical case*, preprint, 2026. This remark records the article's attribution; the preprint has not been independently read here, and its reported result is not used as a premise.
