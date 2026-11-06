---
id: def-string-coupling-genus-weight
kind: definition
title: String Coupling Genus Weight
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
deps:
  - post-rns-ns-background-sigma-model
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g
  - def-axiom-of-choice
  - thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
dependency_roles:
  post-rns-ns-background-sigma-model: physical-assumption
  def-genus-and-euler-characteristic-compact-riemann-surface: mathematical-premise
  cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces: mathematical-premise
physical_scope: "The formal Euclidean topology factor for a connected compact oriented closed worldsheet with constant dilaton in the adopted local NS–NS model; not a complete amplitude normalization, measure construction, or nonperturbative definition."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "§5.1, printed pp. 92–95, equations (5.2)–(5.5), for the Euler curvature term and g_s^{-chi} topology factor."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string.pdf"
      locator: "§6.1.1, printed pp. 129–130, equations (6.3)–(6.5), and §7.2.2, printed pp. 167–168, equations (7.12)–(7.14), for the Euler term, constant dilaton, and g_s=e^{Phi_0}."
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

## Definition

Let $\Sigma$ be a compact connected Riemann surface with complex structure $J$, compatible Euclidean metric $h$, supplied Spin structure, and genus $g$. Assume the Axiom of Choice used by the exact genus and Gauss–Bonnet suppliers. For a constant real dimensionless dilaton $\Phi_0$, define the dimensionless string coupling $g_s:=e^{\Phi_0}>0$. In the adopted Euclidean convention, a topology sector is formally weighted by $e^{-S_E}$. The constant Fradkin–Tseytlin term contributes the factor
$$e^{-\Phi_0\chi(\Sigma)}=g_s^{-\chi(\Sigma)}.$$
Using $\chi(\Sigma)=2-2g$ gives the equivalent factor $g_s^{2g-2}$. This is only the topology factor: vertex normalizations, Chan–Paton traces, external-state normalization, and amplitude integrals are not included. “Formally weighted” refers to the exponential in the adopted action and does not assert that a functional integration measure exists.

## Definition references

[[post-rns-ns-background-sigma-model]]

[[def-genus-and-euler-characteristic-compact-riemann-surface]]

[[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]]

## Facts & Assumptions

**Given:** A compact connected Riemann surface $\Sigma$ with complex structure $J$, compatible Euclidean metric $h$, supplied Spin structure, genus $g$, and constant $\Phi_0\in\mathbb R$. Adopt the Euclidean sector convention $e^{-S_E}$ and define $g_s=e^{\Phi_0}>0$; assume the Axiom of Choice.

[F1] [[post-rns-ns-background-sigma-model]] adopts the Euclidean curvature term $S_E^{\mathrm{FT}}=(4\pi)^{-1}\int_\Sigma\sqrt h\,\Phi(x)R^{(2)}(h)\,d^2\sigma$, with $R^{(2)}=2K_h$.

[F2] [[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]]: for a compact oriented closed Riemannian surface, $\int_\Sigma K_h\,dA_h=2\pi\chi(\Sigma)$; the supplier states its full Axiom-of-Choice premise through its triangulation arguments.

[F3] [[cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g]]: under the full Axiom of Choice, the underlying nonempty compact connected orientable boundaryless topological surface has a unique genus $g\ge0$ and $\chi(\Sigma)=2-2g$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; this full choice assumption is carried from both mathematical suppliers.

## Verification

1.1 Since $\Phi(x)=\Phi_0$ is constant, [F1] gives $S_E^{\mathrm{FT}}=\frac{\Phi_0}{4\pi}\int_\Sigma\sqrt h\,R^{(2)}\,d^2\sigma$. The convention $R^{(2)}=2K_h$ and [F2] yield $S_E^{\mathrm{FT}}=\frac{\Phi_0}{2\pi}\int_\Sigma K_h\,dA_h=\Phi_0\chi(\Sigma)$. [given, A1, F1, F2, algebra]

2.1 Splitting this term from the remaining action in the formal Euclidean factor $e^{-S_E}$ gives the multiplicative topology factor $e^{-S_E^{\mathrm{FT}}}=e^{-\Phi_0\chi(\Sigma)}=(e^{\Phi_0})^{-\chi(\Sigma)}=g_s^{-\chi(\Sigma)}$. [given, F1, step 1.1, algebra]

3.1 By [F3] and [A1], $\chi(\Sigma)=2-2g$ under the exact full-choice hypothesis. Therefore $g_s^{-\chi(\Sigma)}=g_s^{-(2-2g)}=g_s^{2g-2}$, with no additional normalization included. [F3, A1, step 2.1, algebra] ∎

## Remarks

The Weigand notes call the curvature-integral identity “Riemann–Roch”; the local dependency and proof use the correctly named global Gauss–Bonnet theorem. The use of the genus-power form carries the exact full-choice premise from [[def-genus-and-euler-characteristic-compact-riemann-surface]]; the curvature identity also carries the full-choice premise declared by [[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]].
