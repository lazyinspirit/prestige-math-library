---
id: def-cft-r5-liouville-dozz-constant
kind: definition
title: DOZZ structure constant in the probabilistic Liouville convention
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: mathematics
deps:
  - def-cft-r5-liouville-probabilistic-sphere-model
  - lem-cft-r5-liouville-uppsilon-defining-integral-converges
dependency_roles:
  def-cft-r5-liouville-probabilistic-sphere-model: mathematical-premise
  lem-cft-r5-liouville-uppsilon-defining-integral-converges: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Colin Guillarmou, Antti Kupiainen, Rémi Rhodes, Vincent Vargas, Conformal Bootstrap in Liouville Theory, arXiv:2005.11530v1"
      url: https://arxiv.org/pdf/2005.11530v1
      locator: "Appendix A, equations (A.1)–(A.3), PDF p. 82."
---

## Definition

Fix $0<\gamma<2$, $\mu>0$, and $Q=2/\gamma+\gamma/2$ as in the probabilistic Liouville sphere model. Let $\Gamma$ be Euler's gamma function, defined on $\operatorname{Re}z>0$ by $\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}dt$ and elsewhere by its meromorphic continuation, and let $\ell(z)=\Gamma(z)/\Gamma(1-z)$. For $0<\operatorname{Re}z<Q$, set

$$\Upsilon_{\gamma/2}(z):=\exp\!\left(\int_0^\infty\left((Q/2-z)^2e^{-t}-\frac{\sinh^2((Q/2-z)t/2)}{\sinh(\gamma t/4)\sinh(t/\gamma)}\right)\frac{dt}{t}\right).$$

The defining integral converges absolutely on this strip, locally uniformly in $z$, by [[lem-cft-r5-liouville-uppsilon-defining-integral-converges]]. Use the source's entire analytic continuation from this strip, fixed by the following shift relations:

$$\Upsilon_{\gamma/2}(z+\gamma/2)=\ell(\gamma z/2)(\gamma/2)^{1-\gamma z}\Upsilon_{\gamma/2}(z),\qquad \Upsilon_{\gamma/2}(z+2/\gamma)=\ell(2z/\gamma)(\gamma/2)^{4z/\gamma-1}\Upsilon_{\gamma/2}(z).$$

For any complex power of the positive real base in the following expression, use $a^w:=\exp(w\log a)$ with the ordinary real logarithm of $a>0$. For $\bar\alpha=\alpha_1+\alpha_2+\alpha_3$, the **DOZZ structure constant** in this convention is the meromorphic function

$$C^{\mathrm{DOZZ}}_{\gamma,\mu}(\alpha_1,\alpha_2,\alpha_3)=\left(\pi\mu\ell(\gamma^2/4)(\gamma/2)^{2-\gamma^2/2}\right)^{(2Q-\bar\alpha)/\gamma}\frac{\Upsilon'_{\gamma/2}(0)\prod_{i=1}^3\Upsilon_{\gamma/2}(\alpha_i)}{\Upsilon_{\gamma/2}(\bar\alpha/2-Q)\prod_{i=1}^3\Upsilon_{\gamma/2}(\bar\alpha/2-\alpha_i)}.$$

This is a definition of a special function. It does not assert that a probabilistic three-point correlation equals this function.

## Definition references

[[def-cft-r5-liouville-probabilistic-sphere-model]]

[[lem-cft-r5-liouville-uppsilon-defining-integral-converges]]
