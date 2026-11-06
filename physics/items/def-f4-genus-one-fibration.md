---
id: def-f4-genus-one-fibration
kind: definition
title: "Flat genus-one fibration"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
axiom_strength: choice-free definition
deps:
  - def-flat-morphism-schemes
  - def-proper-morphism
  - def-scheme-over-base
  - def-smooth-morphism-schemes
dependency_roles:
  def-flat-morphism-schemes: mathematical-premise
  def-proper-morphism: mathematical-premise
  def-scheme-over-base: mathematical-premise
  def-smooth-morphism-schemes: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, TASI lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§2.2 and 3.1, pp. 7–17; Weierstrass and elliptic/genus-one fibrations."
    - title: "Volker Braun and David R. Morrison, F-theory on Genus-One Fibrations, arXiv:1401.7844v2"
      url: "https://arxiv.org/pdf/1401.7844v2"
      locator: "§§1–2, pp. 2–8; flatness, one-dimensional fibers, and genus-one fibrations."
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
---

## Definition
Let $B$ be a connected nonsingular algebraic variety over $\mathbb C$, and let $Y$ be a projective variety over $\mathbb C$. Here a variety is an integral separated scheme of finite type over $\mathbb C$; a curve has dimension one; geometrically integral means integral after extension to an algebraic closure of the ground field; nonsingular means smooth over $\mathbb C$; projective means admitting a closed immersion into some $\mathbb P^N_{\mathbb C}$. A morphism $\pi:Y\to B$ is **proper** if it is separated, of finite type, and universally closed; it is **surjective** if its image is all of $B$; and it is **flat** when every local ring $\mathcal O_{Y,y}$ is a flat module over $\mathcal O_{B,\pi(y)}$. Write $\eta$ for the generic point of the integral scheme $B$, $K(B)=\kappa(\eta)$ for its function field, and $Y_\eta=Y\times_B\operatorname{Spec}K(B)$ for the generic fiber. Its geometric generic fiber is $Y_\eta\times_{K(B)}\overline{K(B)}$. A smooth proper geometrically integral curve over a field is **genus one** when its first coherent cohomology of the structure sheaf has dimension one. A **flat genus-one fibration** is a proper, flat, surjective morphism $\pi:Y\to B$ whose geometric generic fiber is a smooth geometrically integral genus-one curve. It has no section as part of the definition. In the fourfold application, impose $\dim B=3$ and $\dim Y=4$.

## Definition references

[[def-flat-morphism-schemes]]

[[def-proper-morphism]]: proper means separated, of finite type, and universally closed.

[[def-scheme-over-base]]

[[def-smooth-morphism-schemes]]: smooth means locally of finite presentation and flat, with geometrically regular fibres at every source point.

[T. Weigand, TASI lectures, §§2.2 and 3.1](https://arxiv.org/pdf/1806.01854v1)

[V. Braun and D. R. Morrison, §§1–2](https://arxiv.org/pdf/1401.7844v2)

## Remarks

For a proper flat morphism of finite presentation over a connected base, the dimension of the fibers is locally constant; [[thm-f4-flat-genus-one-fibration-has-one-dimensional-fibres]] proves that the generic curve hypothesis then forces every fiber to have dimension one. The definition itself does not infer fiberwise smoothness or a section from the generic-fiber condition.

The geometric generic fiber is a base change, so the defining square is Cartesian:

```tikzcd
Y_{\bar\eta} \arrow[r] \arrow[d] & Y \arrow[d, "\pi"] \\
\mathop{\mathrm{Spec}}\overline{K(B)} \arrow[r] & B
```

The bottom map is the composite of the generic-point morphism with the chosen field extension, and the top left object is the fiber product by definition. The diagram records only base change; it does not say the special fibers are smooth.
