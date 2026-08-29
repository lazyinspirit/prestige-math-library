---
id: def-tensor-product-of-complex-representations
kind: definition
title: "The tensor product of two complex representations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, thm-universal-property-of-module-tensor-products]
justified_by: []
aliases: []
verification:
  audited: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.4"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Definition

Let $\rho:G\to\operatorname{GL}(V)$ and $\sigma:G\to\operatorname{GL}(W)$ be
finite-dimensional complex representations of a group $G$
([[def-finite-dimensional-representation-of-a-group-over-a-field]]). Their
**tensor product representation** $\rho\otimes\sigma$ is the representation of
$G$ on the complex tensor product $V\otimes_{\mathbb C}W$ given on elementary
tensors by

$$g\cdot(v\otimes w):=\bigl(\rho(g)v\bigr)\otimes\bigl(\sigma(g)w\bigr)\qquad(g\in G,\ v\in V,\ w\in W).$$

**The action is well defined.** For fixed $g\in G$, the assignment
$(v,w)\mapsto\rho(g)v\otimes\sigma(g)w$ is additive in each variable and
$\mathbb C$-balanced, because $\rho(g)$ and $\sigma(g)$ are $\mathbb C$-linear:
$\rho(g)(v\lambda)\otimes\sigma(g)w=(\rho(g)v)\lambda\otimes\sigma(g)w$. By
[[thm-universal-property-of-module-tensor-products]] there is a unique
$\mathbb C$-linear map $\rho(g)\otimes\sigma(g):V\otimes_{\mathbb C}W\to
V\otimes_{\mathbb C}W$ with the displayed value on every elementary tensor.
Because the two sides of
$g\cdot(h\cdot(v\otimes w))=(gh)\cdot(v\otimes w)$ agree on every elementary
tensor and the elementary tensors span $V\otimes_{\mathbb C}W$, the assignment
$g\mapsto\rho(g)\otimes\sigma(g)$ is a group homomorphism into
$\operatorname{GL}(V\otimes_{\mathbb C}W)$, with
$\rho(1)\otimes\sigma(1)=\operatorname{id}$. The underlying space is
finite-dimensional: bases of $V$ and $W$ give the basis
$(v_i\otimes w_j)_{i,j}$, so $\dim(V\otimes_{\mathbb C}W)=(\dim V)(\dim W)$.
