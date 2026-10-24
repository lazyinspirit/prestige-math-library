---
id: def-averaged-hermitian-form-for-a-compact-group
kind: definition
title: Averaged Hermitian form for a compact group
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, cor-normalized-haar-probability-on-a-compact-group, def-real-and-complex-inner-product-space, lem-inner-product-is-jointly-continuous, thm-coordinate-map-for-a-finite-dimensional-normed-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    - title: "Vera Serganova, Representation Theory, Chapter III §§1.6–2.1"
      url: https://math.berkeley.edu/~serganov/math252/Bookrep.pdf
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff group and let $\mu$ be its normalized Haar probability measure
([[cor-normalized-haar-probability-on-a-compact-group]]); this is the only place
the Axiom of Choice is consumed by the definition.

Let $V$ be a finite-dimensional complex vector space and let
$\rho:K\to\operatorname{GL}(V)$ be a **continuous finite-dimensional complex
representation**: a homomorphism of groups such that $\rho$ is continuous when
$\operatorname{GL}(V)\subseteq\operatorname{End}(V)$ carries the topology
induced by a norm on $\operatorname{End}(V)$. In finite dimension any two norms
on $\operatorname{End}(V)$ induce the same topology
([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]), so the
continuity requirement does not depend on the norm chosen.

Let $h_0$ be a Hermitian inner product on $V$ that is linear in the first
variable and conjugate-linear in the second
([[def-real-and-complex-inner-product-space]]). The **averaged Hermitian form**
of the pair $(\rho,h_0)$ is the map $h:V\times V\to\mathbb C$ defined by

$$h(v,w):=\int_K h_0(\rho(k)v,\rho(k)w)\,d\mu(k).$$

**Well-definedness and conventions.** The form $h_0$ is linear in the first and
conjugate-linear in the second variable, and so is $h$: for each fixed $k$ the
integrand is linear in $v$ and conjugate-linear in $w$, and these properties
pass through the integral. Hermitian symmetry likewise passes to the limit
because the integrand of $h(w,v)$ is the complex conjugate of the integrand of
$h(v,w)$ for every $k$. For fixed $v,w$ the integrand
$k\mapsto h_0(\rho(k)v,\rho(k)w)$ is continuous: $\rho$ is continuous,
evaluation $g\mapsto\rho(g)v$ is therefore continuous, and $h_0$ is continuous
on the finite-dimensional space $V\times V$
([[lem-inner-product-is-jointly-continuous]]). A continuous complex function on
the compact space $K$ is bounded and integrable against the Borel probability
measure $\mu$, so the displayed integral is a finite complex number and $h$ is
a sesquilinear form, linear in its first variable and conjugate-linear in its
second. Whether $h$ is positive definite and $\rho(K)$-invariant is a theorem,
not a convention: those two properties are proved in
[[lem-averaging-makes-a-finite-dimensional-representation-unitary]].
