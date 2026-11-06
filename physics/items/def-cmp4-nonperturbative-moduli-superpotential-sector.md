---
id: def-cmp4-nonperturbative-moduli-superpotential-sector
kind: definition
title: Admissible nonperturbative sectors contributing to a moduli superpotential
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-4d-moduli-effective-field-theory
dependency_level: 15
deps:
  - def-cmp4-compactification-derived-moduli-eft-data
dependency_roles:
  def-cmp4-compactification-derived-moduli-eft-data: formulation-prerequisite
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional semiclassical Euclidean-brane or four-dimensional gauge-dynamics contributions to a specified compactification superpotential; zero modes, orientifold projection, flux lifting, anomalies, global axion period, determinants, gauge group, and thresholds are model data, not universal consequences."
empirical_premises: []
sources:
  references:
    - title: "Edward Witten, Non-Perturbative Superpotentials in String Theory, arXiv:hep-th/9604030v2"
      url: "https://arxiv.org/pdf/hep-th/9604030v2"
      locator: "§2, pp. 3–9, equations (2.3)–(2.9); M5 instanton zero-mode criterion and its stated M-theory scope."
    - title: "L. Görlich, S. Kachru, P. Tripathy, and S. Trivedi, Gaugino Condensation and Nonperturbative Superpotentials in Flux Compactifications, arXiv:hep-th/0407130v2"
      url: "https://arxiv.org/pdf/hep-th/0407130v2"
      locator: "§1, §5.2, and §6; a concrete flux compactification, zero-mode lifting, gauge dynamics, and limitations."
    - title: "D. Baumann and L. McAllister, Inflation and String Theory, arXiv:1404.2601v1"
      url: "https://arxiv.org/pdf/1404.2601v1"
      locator: "§§6.4–6.5; nonperturbative superpotentials and the KKLT mechanism with model-dependent assumptions."
---

## Definition

For a specified four-dimensional $N=1$ compactification effective field theory and a holomorphic field patch with dimensionless coordinates $(Z^1,\ldots,Z^n,T)$, where $T$ is a retained complexified cycle-volume coordinate and the $Z^I$ are the remaining retained coordinates, a semiclassical Euclidean-brane contribution is a candidate superpotential term $A(Z,T)e^{-S_{\rm inst}(Z,T)}$ only when the instanton measure leaves exactly the two universal fermion zero modes integrated by $d^2\theta$; every additional neutral or charged zero mode is absent or explicitly lifted or saturated; $A$ is nonzero and holomorphic on the patch with $[A]=\mathrm{mass}^3$; $S_{\rm inst}$ is dimensionless, with its volume and axion dependence retained in $(Z,T)$; $S_{\rm inst}$ and the prefactor obey the gauged symmetries; and the axion charge is compatible with the separately established global period. The special form $A(Z)e^{-aT}$ requires a separately established action $S_{\rm inst}=aT$ with dimensionless $a$ and a prefactor independent of $T$; the general term above makes neither restriction. A D7 gaugino-condensation term $A(Z)e^{-aT}$ additionally requires the actual low-energy gauge group, matter thresholds, and gauge-kinetic normalization to establish the relevant pure or mass-deformed $N=1$ dynamics and dimensionless coefficient $a$, fixed using that convention and the dual Coxeter number. For this displayed D7 form the holomorphic gauge coupling and threshold matching must also put all remaining $T$ dependence into $e^{-aT}$. These are sector-specific admissibility conditions, not a universal instanton theorem or a claim that rigidity alone suffices.

## Definition references

[Witten, §2](https://arxiv.org/pdf/hep-th/9604030v2)

[Görlich, Kachru, Tripathy, and Trivedi, §§1, 5.2, and 6](https://arxiv.org/pdf/hep-th/0407130v2)

[Baumann and McAllister, §§6.4–6.5](https://arxiv.org/pdf/1404.2601v1)

## Facts & Assumptions

**Given:** A fixed compactification, a specified four-dimensional $N=1$ EFT patch, declared gauge symmetries and axion normalization, and one of the stated semiclassical or low-energy gauge sectors.

[F1] [[def-cmp4-compactification-derived-moduli-eft-data]] supplies the declared chiral field chart, superpotential data, gauge functions, gauging, and approximation domain; the O3/O7 specialization used on that item retains its declared local-coordinate, kinetic-action, and approximation premises. The specified gauging and Hamiltonian lift are EFT input data, not an instanton existence result.

[A1] The local instanton measure is modeled by Berezin integration over fermionic collective coordinates, with $\int d\eta\,1=0$ and $\int d\eta\,\eta=1$. The two universal modes are the superspace coordinates integrated by $d^2\theta$.

[A2] The Euclidean action $S_{\rm inst}(Z,T)$ and determinant prefactor $A(Z,T)$ are holomorphic on the full declared patch, $A$ is nonzero there, and the total term has the declared gauge transformation and quantized axion charge.

[A3] For a D7 condensation contribution, the actual low-energy four-dimensional gauge theory and all matter thresholds have been checked in the selected compactification; no general theorem about arbitrary divisors is assumed.

## Proof

**Given:** The EFT patch [F1], the semiclassical measure convention [A1], the holomorphy and symmetry inputs [A2], and, for the D7 case, the model-specific gauge data [A3].

1.1 Let $\eta^1,\eta^2$ be the two universal fermionic collective coordinates. Their Berezin integral selects precisely the coefficient of $\eta^1\eta^2$, the superspace $d^2\theta$ contribution. If another independent fermionic zero mode $\xi$ is unsaturated, the integral factors by $\int d\xi\,1=0$, so that configuration contributes no superpotential term under the stated measure. A lifting or insertion can change this conclusion only when its coupling is explicitly included in the measure. [given, A1, algebra]

2.1 Since the exponential of a holomorphic function is holomorphic and the product of holomorphic functions is holomorphic, $A(Z,T)e^{-S_{\rm inst}(Z,T)}$ is holomorphic on the patch. It is an admissible contribution only when it has the required superpotential transformation under the supplied gauge and Kähler-line lift and its axion charge belongs to the independently supplied charge lattice; neither property follows from holomorphy or from local zero-mode counting. [given, F1, A2, step 1.1, algebra]

3.1 In the D7 case, [A3] supplies an actual low-energy gauge sector and threshold matching, so a proposed condensate term may be included only with its gauge-kinetic convention and group-dependent coefficient fixed from that sector. These inputs are model-specific and are not consequences of the geometry or zero-mode assumptions in [F1]–[A2]. Therefore this definition does not infer condensation from divisor rigidity or assert a universal mechanism. [given, F1, A2, A3, step 2.1] ∎
