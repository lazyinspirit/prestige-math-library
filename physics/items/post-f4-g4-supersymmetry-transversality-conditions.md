---
id: post-f4-g4-supersymmetry-transversality-conditions
kind: postulate
title: F-theory flux transversality and supersymmetry conditions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
category: string-theory
deps:
- def-axiom-of-choice
- def-chern-classes-from-the-projective-bundle-relation
- post-f4-mtheory-g4-shifted-quantization
- post-f4-type-iib-elliptic-fibration-dictionary
- def-compact-kahler-manifold-and-hodge-polarization-conventions
- thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
- lem-kahler-commutators-and-laplacian-type-preservation
- thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz
dependency_roles:
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  post-f4-mtheory-g4-shifted-quantization: formulation-prerequisite
  post-f4-type-iib-elliptic-fibration-dictionary: formulation-prerequisite
  def-compact-kahler-manifold-and-hodge-polarization-conventions: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  lem-kahler-commutators-and-laplacian-type-preservation: mathematical-premise
  thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz: mathematical-premise
axiom_strength: Full AC for the characteristic-class and compact Kahler harmonic-theory inputs.
physical_scope: Adopted leading-order supergravity/F-theory consistency conditions on a fixed smooth compact resolved elliptic
  Calabi–Yau fourfold. Flux backreaction, loop and higher-derivative corrections, singular/non-flat models, and existence
  of a vacuum are not inferred. The source-free CJS action is not used as a substitute for fermionic supersymmetry equations.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Sven Krause, Christoph Mayrhofer, and Timo Weigand, G4 flux, chiral matter and singularity resolution in F-theory
      compactifications, arXiv:1109.3454v2
    url: https://arxiv.org/pdf/1109.3454v2
    locator: §4.1, printed pp. 23–24, equations (4.4)–(4.5) and the Lorentz-invariance/supersymmetry flux constraints in the
      source's resolved SU(5) model.
  - title: Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1
    url: https://arxiv.org/pdf/1806.01854v1
    locator: §9.1–§9.2, printed pp. 84–87, flux primitivity, Hodge type, transversality, and model qualifications.
  - title: Shing Yan Li, Applications of Flux Compactifications in F-Theory, MIT PhD thesis, arXiv:2608.14844v1
    url: https://arxiv.org/pdf/2608.14844v1
    locator: §2.2.8, pp. 50–53, and §3.2.3, pp. 67–69, flux conditions and their stated model scope.
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Assume Full AC. Fix a smooth compact Kähler resolution $\pi:\widehat Y_4\to B_3$ of a flat sectioned elliptic Calabi–Yau fourfold, a zero-section divisor $Z_0$, exceptional Cartan divisors $E_i$ for a specified non-abelian gauge algebra, and a Kähler form $J$; write $[J]\in H^2(\widehat Y_4;\mathbb R)$ for its class. Here $B_3$ is the smooth connected complex algebraic threefold of the type-IIB dictionary. For an algebraic line bundle $\mathcal L$ on $B_3$, let $c_1(\mathcal L)_{\mathbb R}\in H^2(B_3;\mathbb R)$ denote the real image of the integral first Chern class of its underlying topological complex line bundle. Define the space of real divisor classes used here by $V_B=\operatorname{span}_{\mathbb R}\{c_1(\mathcal L)_{\mathbb R}:\mathcal L\text{ an algebraic line bundle on }B_3\}\subseteq H^2(B_3;\mathbb R)$, and let $D_a,D_b$ range over $V_B$. All displayed integrals mean evaluation of the indicated degree-eight cup product on the complex-oriented fundamental class $[\widehat Y_4]$; $[Z_0]$ and $[E_i]$ are the real Poincaré duals of the specified divisors. For the M2-normalized shifted flux class $[g_4]\in H^4(\widehat Y_4;\mathbb R)$, let $g_4^{\mathrm{harm}}$ be its unique harmonic representative. Adopt the following leading-order conditions as distinct requirements: four-dimensional Lorentz invariance requires $\int_{\widehat Y_4}g_4\wedge\pi^*D_a\wedge\pi^*D_b=0$ and $\int_{\widehat Y_4}g_4\wedge[Z_0]\wedge\pi^*D_a=0$ for every $D_a,D_b$; preserving the chosen non-abelian gauge algebra additionally requires $\int_{\widehat Y_4}g_4\wedge[E_i]\wedge\pi^*D_a=0$ for each $E_i,D_a$; and a leading-order supersymmetric flux vacuum requires $[g_4]$ of Hodge type $(2,2)$ and primitive, meaning $[J]\smile[g_4]=0$ in $H^6(\widehat Y_4;\mathbb R)$. On the harmonic representative, the pointwise primitivity condition is $J\wedge g_4^{\mathrm{harm}}=0$; Kähler harmonic theory identifies this with the cohomological condition. These adopted physical conditions do not prove that any such flux or vacuum exists.

## Facts & Assumptions

**Given:** Full AC and The fixed resolved Kähler model, its specified divisors, a shifted-quantized real cohomology class, and the stated leading-order physical regime.

[F1] [[post-f4-mtheory-g4-shifted-quantization]] gives the conditional CY4 shift in the local convention. It does not imply Hodge type, primitivity, transversality, or supersymmetry.

[F2] [[post-f4-type-iib-elliptic-fibration-dictionary]] supplies the adopted type-IIB/elliptic-fiber setting; its current readiness is escalated on an outstanding Weierstrass dependency, and this item does not treat it as proved.

The source-free classical bosonic CJS action is contextual background only: it does not supply the fermionic supersymmetry variations adopted here.

[F6] [[def-chern-classes-from-the-projective-bundle-relation]] defines the integral first Chern class of a complex line bundle. The smooth base has the required CW homotopy type and its bundles are numerable. The space $V_B$ is defined directly by real first Chern classes; no Néron–Severi quotient, projectivity theorem for the base, or comparison modulo algebraic equivalence is required.

[F4] [[def-compact-kahler-manifold-and-hodge-polarization-conventions]] and [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] give the compact Kähler conventions and unique harmonic representative of a real de Rham class.

[F5] [[lem-kahler-commutators-and-laplacian-type-preservation]] states that the Kähler Laplacian commutes with Lefschetz multiplication $L=J\wedge$; [[thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz]] transports that operator to cohomology. These mathematical facts justify the stated harmonic/cohomological primitivity equivalence, not the physical condition itself.

## Postulate references

[[def-axiom-of-choice]]

[[def-chern-classes-from-the-projective-bundle-relation]]

[[post-f4-mtheory-g4-shifted-quantization]]

[[post-f4-type-iib-elliptic-fibration-dictionary]]

[[post-eleven-dimensional-cjs-supergravity-action]]

[[def-compact-kahler-manifold-and-hodge-polarization-conventions]]

[[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]

[[lem-kahler-commutators-and-laplacian-type-preservation]]

[[thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz]]
