---
title: States compatible with the uncontrolled obstacle boundary
status: draft
research_item: def-se-boundary-state-space
dependency_level: 13
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 4: ` Theorem 1.1, definition of Xs(Ω0) `; PDF p. 17: ` Lemma 3.11 `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [lem-se-sobolev-extension-retraction](item-lem-se-sobolev-extension-retraction)
- [lem-se-collar-traces-and-partial-extension](item-lem-se-collar-traces-and-partial-extension)
- [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Definition

Assume the Axiom of Choice. Let $n\ge2$ and let $\Theta$, $\Omega_0$ and $\Gamma_2=\partial\Theta$ have the smooth obstacle and truncated-exterior geometry specified in the exterior-domain definition. Let $1\le s\le2$.

Use the complex $L^2$ Bessel-potential Sobolev space: $H^s(\mathbb R^n)$ consists of tempered distributions $U$ for which $(1+|\xi|^2)^{s/2}\widehat U$ is an $L^2$ function, with its corresponding $L^2$ norm, using the negative-sign $2\pi$ Fourier transform. Define $H^s(\Omega_0)$ as the restrictions of these distributions to $\Omega_0$, with norm $\|u\|_{H^s(\Omega_0)}=\inf\{\|U\|_{H^s(\mathbb R^n)}:U|_{\Omega_0}=u\}$.

Let $\gamma_{\Gamma_2}u$ be the Sobolev value trace on the obstacle boundary. Its target $H^{s-1/2}(\Gamma_2)$ is defined by a finite smooth boundary atlas and subordinate partition of unity, using the $H^{s-1/2}(\mathbb R^{n-1})$ norms of the localized coordinate representatives. Define

$$X^s(\Omega_0)=\{u\in H^s(\Omega_0):\gamma_{\Gamma_2}u=0\},\qquad \|u\|_{X^s(\Omega_0)}=\|u\|_{H^s(\Omega_0)}.$$

The zero condition is equality in $H^{s-1/2}(\Gamma_2)$. No boundary condition is imposed on the outer boundary $\Gamma_1$.

## Definition references

[def-se-geometry](item-def-se-geometry)

[lem-se-sobolev-extension-retraction](item-lem-se-sobolev-extension-retraction)

[lem-se-collar-traces-and-partial-extension](item-lem-se-collar-traces-and-partial-extension)

[math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Justification

The exterior-domain definition fixes the disjoint smooth boundary pieces and the bounded smooth truncated domain. The whole-space Fourier characterization supplies the displayed Sobolev space and norm, and the Sobolev extension and localization result supplies the restriction-quotient convention and its norm on this bounded smooth domain. The Axiom of Choice includes the choice assumptions of these suppliers.

The collar-trace result supplies a bounded linear value trace from $H^s(\Omega_0)$ to the stated finite-atlas boundary space for $1\le s\le2$, independent of the atlas up to equivalent norms. Apply it to the obstacle boundary components; compactness and the local smooth graph structure give finitely many such components. Thus the zero-trace condition is a definite linear condition, and $X^s(\Omega_0)$ is its kernel, a closed linear subspace with the inherited norm. The definition does not assert a normal-derivative condition or a zero condition on the artificial outer sphere.

## Source notes

The original article is cited for attribution of $X^s$ in Theorem 1.1, where $s\in\{1,2\}$, and for its use for $1\le s\le2$ in Lemma 3.11. The mathematical meaning and well-definedness above use the independent suppliers.
