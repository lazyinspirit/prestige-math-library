---
id: ex-rns-type-ii-first-massless-levels
kind: example
title: "RNS Type Ii First Massless Levels"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 11
domain: physics
physical_scope: "Conditional worked bookkeeping example for the flat ten-dimensional Type IIA/IIB RNS massless spectrum. It checks only sector labels, Spin(8) tensor products, and state counts, not spacetime field equations."
deps:
  - pthm-rns-type-ii-massless-spectrum
  - def-rns-gso-projection
  - def-axiom-of-choice
dependency_roles:
  pthm-rns-type-ii-massless-spectrum: physical-result
  def-rns-gso-projection: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapters 6.5–6.9, printed pp. 140–154: RNS spectrum/GSO, Type I projection, and heterotic construction."
verification:
  precheck: pass
---

## Example

In the ten-dimensional flat Type IIB construction, the NS+⊗NS+ level-one product gives the graviton, two-form, and dilaton, while the R+⊗R+ product gives the scalar, two-form, and self-dual four-form polarizations; the NS+⊗R+ and R+⊗NS+ sectors give the two same-chirality gravitino/dilatino multiplets. Replacing the right Ramond chirality by the opposite choice gives the Type IIA R-R one-form/three-form sector and opposite-chirality fermion multiplets. This example checks the sector labels and tensor products only; it does not derive spacetime field equations.

## Example references

[Timo Weigand, Introduction to String Theory, Winter term 2011/12](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

## Facts & Assumptions

**Given:** The massless Type IIA/IIB sector conventions, the Spin(8) little-group modules, and full AC.

[F1] [[pthm-rns-type-ii-massless-spectrum]] gives the conditional flat Type II massless sector decomposition, including the NS–NS, R–R, and mixed products.

[F2] [[def-rns-gso-projection]] fixes the IIB equal and IIA opposite Ramond chirality choices and removes the NS vacuum.

[A1] Full AC is assumed as defined in [[def-axiom-of-choice]], since the Spin(8) decomposition used by [F1] assumes it.

## Verification

1.1 In IIB, [F2] chooses equal positive left/right Ramond chirality. The NS–NS product is $8_v\otimes8_v=1\oplus28\oplus35_v$, while the R–R product is $8_s\otimes8_s=1\oplus28\oplus35_s$ by [F1]. Thus each bosonic closed sector has dimension $1+28+35=64$, and together they give 128 bosonic polarizations. The two mixed products each have dimension $8+56=64$, yielding 128 fermionic polarizations in total. [given, F1, F2, A1, algebra]

2.1 Replacing the right Ramond chirality by $8_c$ as required for IIA [F2] changes the R–R product to $8_s\otimes8_c=8_v\oplus56_v$, interpreted as the one-form and three-form polarizations by [F1]. The mixed products exchange $s$ and $c$ on the right and therefore reverse the spacetime chirality assignment. Their dimensions remain 64 each because the exchanged Spin(8) modules have the same dimensions. [F1, F2, step 1.1, algebra]

3.1 These substitutions verify the stated sector labels and the equality of bosonic and fermionic massless counts. They use only physical-state polarizations; no field equation, action, or nonlinear supergravity claim is inferred. [F1, A1, step 1.1, step 2.1] ∎
