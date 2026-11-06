---
id: def-cft-2d-radial-state-operator-data
kind: definition
title: Radial state/operator data in a selected CFT model
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-cft-2d-radial-quantization
  - def-cft-2d-primary-field
  - def-real-and-complex-inner-product-space
  - def-hilbert-space
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-countable-choice
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-2d-radial-quantization: mathematical-premise
  def-cft-2d-primary-field: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-countable-choice: mathematical-premise
axiom_use: "Assume Countable Choice only because the supplied definition of densely defined self-adjoint operators states that convention. The item asserts no additional choice principle and no spectral decomposition."
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
    - title: Duccio Pappadopulo, Slava Rychkov, Johnny Espin, Riccardo Rattazzi, OPE Convergence in Conformal Field Theory, arXiv:1208.6449v3
      url: https://arxiv.org/pdf/1208.6449v3
      locator: "§2, PDF pp. 7–8: radial overlap and complete energy expansion are used as inputs, not constructed from general CFT axioms."
---

## Definition

Fix the positive-Hilbert radial model of [[def-cft-2d-radial-quantization]]. It consists of a complex Hilbert space $\mathcal H$, a unit vector $\Omega\in\mathcal H$ fixed by radial evolution, and a densely defined self-adjoint operator $K:D(K)\subseteq\mathcal H\to\mathcal H$ such that $\langle K u,u\rangle\ge0$ for $u\in D(K)$, $\Omega\in D(K)$, and $K\Omega=0$. Self-adjointness uses the domain convention of the supplied operator definition. The model supplies a strongly continuous radial contraction semigroup $U(t)$ for $t\ge0$, meaning bounded operators with $U(0)=I$, $U(s+t)=U(s)U(t)$, $\|U(t)u-u\|\to0$ as $t\downarrow0$ for every $u\in\mathcal H$, and generator $K$ in the convention
$$D(K)=\left\{u:\lim_{t\downarrow0}\frac{U(t)u-u}{t}\text{ exists in }\mathcal H\right\},\qquad Ku=-\lim_{t\downarrow0}\frac{U(t)u-u}{t}.$$
The equality of this generator with the specified nonnegative self-adjoint $K$ is model data; no semigroup representation theorem is invoked here. The contraction condition is $\|U(t)u\|\le\|u\|$ for every $t\ge0$ and $u\in\mathcal H$.

A common dense linear field domain $\mathcal D$ is contained in $D(K)$ and is invariant under $K$ and every declared smeared local field. A local insertion label is a pair $a=(A,\eta)$ consisting of a local field $A$ and its declared smooth angular test function $\eta\in C^\infty(S^1)$, together with the model's specified radial normalization. The label space $F_{\mathrm{loc}}$ is the vector space of finite linear combinations of these labels. For each $a\in F_{\mathrm{loc}}$, the model specifies a radius $r_a>0$ and a vector-valued insertion map $v_a:(0,r_a)\to\mathcal H$, linear in $a$. The vector $v_a(r)$ is the model's normalized, angularly smeared insertion into $\Omega$ at radius $r$. Its smearing, field domain, and normalization are part of the adopted model.

Define
$$F_{\mathrm{rad}}:=\left\{a\in F_{\mathrm{loc}}:\lim_{r\downarrow0}v_a(r)\text{ exists in Hilbert norm}\right\},\qquad \sigma(a):=\lim_{r\downarrow0}v_a(r),\qquad \mathcal H_{\mathrm{loc}}:=\sigma(F_{\mathrm{rad}}).$$
Linearity of each $v_a(r)$ and continuity of vector addition and scalar multiplication imply that $F_{\mathrm{rad}}$ is a vector subspace and $\sigma:F_{\mathrm{rad}}\to\mathcal H_{\mathrm{loc}}$ is linear. The model state/operator identification is the induced map
$$\overline\sigma:F_{\mathrm{rad}}/\ker\sigma\longrightarrow\mathcal H_{\mathrm{loc}},\qquad [a]\longmapsto\sigma(a).$$
It is well defined because $\sigma(a-b)=0$ exactly when $a-b\in\ker\sigma$, injective by that same equivalence, and surjective by the definition of $\mathcal H_{\mathrm{loc}}$. Thus it is an isomorphism onto its declared image by definition.

This definition does not assert that every field has a radial limit, that $\mathcal H_{\mathrm{loc}}$ is dense in $\mathcal H$, or that the image is all of $\mathcal H$. A later theorem that uses a target sector $\mathcal H_*\subseteq\mathcal H$, cyclicity, density, surjectivity, or a complete energy eigenbasis must state that condition separately. In particular, no pure-point-spectrum or Osterwalder–Schrader reconstruction statement is included.

## Definition references

[[def-cft-2d-radial-quantization]]

[[def-cft-2d-primary-field]]

[[def-real-and-complex-inner-product-space]]

[[def-hilbert-space]]

[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[[def-countable-choice]]

