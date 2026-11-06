---
id: ex-string-worldsheet-genus-coupling-weights
kind: example
title: String Worldsheet Genus Coupling Weights
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
deps:
  - post-rns-ns-background-sigma-model
  - def-string-coupling-genus-weight
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g
  - def-axiom-of-choice
dependency_roles:
  post-rns-ns-background-sigma-model: physical-assumption
  def-string-coupling-genus-weight: operational-prerequisite
  def-genus-and-euler-characteristic-compact-riemann-surface: mathematical-premise
  cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: "Symbolic substitution of genus values into the formal constant-dilaton topology factor; no amplitude, path-integral measure, or empirical claim."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "§5.1, printed pp. 92–95, equations (5.2)–(5.5), topology weighting."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string.pdf"
      locator: "§6.1.1, printed pp. 129–130, closed-surface weights by genus."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Assume the adopted local NS–NS model, a constant real dilaton $\Phi_0$, and its formal Euclidean topology-weight convention. Put $g_s=e^{\Phi_0}>0$. For compact connected Riemann surfaces with compatible Euclidean metrics, supplied Spin structures, and genus $g=0$, $1$, and $2$, respectively, the factors are $g_s^{-2}$, $1$, and $g_s^2$. These are exact symbolic topology factors in the adopted model; they are not complete scattering amplitudes, observations, or claims that a path-integral measure has been constructed.

## Example references

[[def-string-coupling-genus-weight]]

[Timo Weigand, §5.1](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[David Tong, §6.1.1](https://www.damtp.cam.ac.uk/user/tong/string/string.pdf)

## Facts & Assumptions

**Given:** A compact connected Riemann surface with compatible Euclidean metric, supplied Spin structure, genus $g\in\{0,1,2\}$, constant dilaton $\Phi_0$, and the Axiom of Choice.

[F1] [[def-string-coupling-genus-weight]]: the formal topology factor is $g_s^{2g-2}$ under its stated Euclidean sign and mathematical hypotheses.

[F2] [[cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g]]: under full Axiom of Choice, the underlying nonempty compact connected orientable boundaryless surface has $\chi=2-2g$ for its unique genus $g$.

[A1] [[post-rns-ns-background-sigma-model]] is the adopted local physical model; this example derives no claim about its empirical validity or measure.

[A2] [[def-axiom-of-choice]] is the full choice principle assumed by [F1] and [F2].

## Verification

1.1 For genus $g=0$, [F1] gives exponent $2g-2=-2$, so the factor is $g_s^{-2}$. [given, A2, F1, F2, algebra]

1.2 For genus $g=1$, the exponent is $2g-2=0$, so the factor is $g_s^0=1$. This is the formal torus topology factor only. [given, A2, F1, F2, algebra]

2.1 For genus $g=2$, the exponent is $2g-2=2$, so the factor is $g_s^2$. All three substitutions use the same definition and the same full-choice premise; no additional string-interaction normalization is inferred. [given, F1, F2, A1, A2, algebra] ∎
