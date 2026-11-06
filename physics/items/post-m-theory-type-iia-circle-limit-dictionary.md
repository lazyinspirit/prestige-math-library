---
id: post-m-theory-type-iia-circle-limit-dictionary
kind: postulate
title: M Theory Type IIA Circle Limit Dictionary
status: published
origin: session
domain: physics
library: physics
dependency_level: 7
deps: [def-st-string-tension-alpha-prime, post-eleven-dimensional-cjs-supergravity-action, def-supergravity-conventions-and-normalizations]
dependency_roles:
  def-st-string-tension-alpha-prime: formulation-prerequisite
  post-eleven-dimensional-cjs-supergravity-action: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
physical_scope: >-
  Adopted source-reported low-energy/strong-coupling Type IIA to eleven-dimensional circle scaling and metric convention; includes the asymptotic radius and Planck/string length relations, not a proof of full M-theory existence, exact duality, or completeness of the Kaluza-Klein spectrum.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Edward Witten, String Theory Dynamics in Various Dimensions, §§1–2.2"
      url: https://arxiv.org/pdf/hep-th/9503124v2
    - title: "Tom Banks, Willy Fischler, Stephen H. Shenker, and Leonard Susskind, M Theory As A Matrix Model: A Conjecture, §§1 and 3"
      url: https://arxiv.org/pdf/hep-th/9610043v3
    - title: "Paul K. Townsend, Four Lectures on M-theory, §§1–3"
      url: https://arxiv.org/pdf/hep-th/9612121v3
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt the source-reported low-energy and strong-coupling Type IIA/M-theory circle dictionary
$$
\ell_s=\sqrt{\alpha'},\qquad R_{11}=g_s\ell_s,\qquad \ell_p^3=g_s\ell_s^3,
$$
where $\alpha'>0$ has units of length squared, $\ell_s$ is the string length, $\ell_p$ is the eleven-dimensional Planck length, $g_s=e^{\Phi_\infty}>0$ is dimensionless, $\Phi$ is the dimensionless dilaton, and $\ell_s,\ell_p,R_{11}$ are positive lengths in the same units. On a local circle product over a smooth ten-manifold, let $ds_{10,s}^2$ be a smooth mostly-plus Lorentzian string-frame metric, $\Phi$ a smooth real scalar, and $C_1$ a smooth length-valued one-form on the base. Adopt the circle-invariant metric ansatz with fixed asymptotic normalization
$$
ds_{11}^2=g_s^{2/3}e^{-2\Phi/3}ds_{10,s}^2+e^{4\Phi/3}(\ell_p\,d\theta+C_1)^2,
$$
where the dimensionless coordinate $\theta$ has period $2\pi$. At a flat asymptotic end with $\Phi\to\Phi_\infty$ and $C_1\to0$, the horizontal eleven-dimensional metric agrees with $ds_{10,s}^2$ and the proper circle radius is $R_{11}$. The unit D0 and first Kaluza-Klein masses match under the stated sector identification, using this common asymptotic proper-time normalization. This is adopted physical dictionary data; it does not assert full M-theory existence, exact M/IIA equivalence, or completeness of a Kaluza-Klein tower.

## Postulate references

[Witten, *String Theory Dynamics in Various Dimensions*, §§1–2.2](https://arxiv.org/pdf/hep-th/9503124v2)

[Banks, Fischler, Shenker, and Susskind, *M Theory As A Matrix Model: A Conjecture*, §§1, 3](https://arxiv.org/pdf/hep-th/9610043v3)

[Townsend, *Four Lectures on M-theory*, §§1–3](https://arxiv.org/pdf/hep-th/9612121v3)

## Conventions

Use $\hbar=c=1$, so a mass has units of inverse length. The ten-dimensional metric $ds_{10,s}^2$ is in string frame, $\Phi$ is the full dimensionless dilaton, and the eleven-dimensional metric is in the displayed convention. The horizontal factor is $e^{-2(\Phi-\Phi_\infty)/3}$; the constant $g_s^{2/3}$ implements the common asymptotic length and proper-time normalization. The source ansatz without this constant uses the rescaled ten-dimensional metric $g_s^{2/3}ds_{10,s}^2$. The angle $\theta$ is identified modulo $2\pi$; the asymptotic circle radius follows from the coefficient of $d\theta^2$ at $\Phi=\Phi_\infty$. The three scale relations above are source-reported physical inputs, not consequences derived from the component action in this item.

For $C_1=0$ at infinity the ansatz gives
$$
R_{11}=g_s^{2/3}\ell_p.
$$
Together with $\ell_p^3=g_s\ell_s^3$, positivity gives $\ell_p=g_s^{1/3}\ell_s$ and hence $R_{11}=g_s\ell_s$. Thus the displayed radius and length relations are mutually consistent with the metric convention. This algebraic consistency check does not derive the dictionary's physical scaling premise.

The normalization also agrees with the supplied Einstein-term coefficients. To check this coefficient, take constant $\Phi$ and $C_1=0$ and put $a=g_s^{2/3}e^{-2\Phi/3}$. The eleven-dimensional volume density has factor $a^5e^{2\Phi/3}\ell_p$ relative to $d\theta$ times the ten-dimensional string volume density. The product metric has scalar curvature $a^{-1}R_{10,s}$, since constant metric scaling leaves the base connection unchanged and scales its inverse metric by $a^{-1}$, and the circle is flat. The product of these factors is $g_s^{8/3}e^{-2\Phi}\ell_p$. Thus integrating the curvature term over $\theta$ gives the coefficient
$$
\frac{1}{2\kappa_0^2}=\frac{2\pi\ell_p\,g_s^{8/3}}{2\kappa_{11}^2}=\frac{g_s^{8/3}}{(2\pi)^7\ell_p^8}=\frac{1}{(2\pi)^7\ell_s^8}
$$
of $\int e^{-2\Phi}R_{10,s}\,\operatorname{vol}_{10,s}$, using the supplied $2\kappa_{11}^2=(2\pi)^8\ell_p^9$. Here $R_{10,s}$ and $\operatorname{vol}_{10,s}$ are the scalar curvature and oriented volume form of $ds_{10,s}^2$. This checks that coefficient only; it does not assert a complete reduction of the other action terms. At infinity the horizontal factor is one, so a free unit circle mode has the same rest energy $1/R_{11}$ in eleven-dimensional and ten-dimensional string-frame proper time.

## Scope

The D0/first-KK mass match is conditional on identifying the unit D0 sector with the first momentum sector around the flat asymptotic circle. It is not a tower-completeness argument, a derivation of the dictionary from ten-dimensional perturbation theory, or a construction of a quantum M-theory.

