---
id: def-universal-weyl-c-star-algebra
kind: definition
title: The universal Weyl C*-algebra
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-symplectic-vector-space
  - def-c-star-algebra
  - def-bounded-linear-operator
  - def-operator-norm
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-countable-choice
justified_by: [lem-universal-weyl-c-star-algebra-is-well-defined]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2"
      url: "https://arxiv.org/pdf/1904.04051v2"
    - title: "Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem"
      url: "https://arxiv.org/pdf/0912.0574"
---

## Definition

Assume Countable Choice. Let $(V,\omega)$ be a finite-dimensional real symplectic vector space and let
$\lambda\in\mathbb R$. Regard the additive group underlying $V$ as discrete
for this construction, and define
$$m_\lambda(v,w):=e^{-i\lambda\omega(v,w)/2}.$$
Let $A_0(V,\omega,\lambda)=\mathbb C^{(V)}$ be the complex vector space of
finitely supported functions on $V$, with basis $(\delta_v)_{v\in V}$ and
unit $\delta_0$. Define
$$\delta_v\delta_w=m_\lambda(v,w)\delta_{v+w},\qquad \delta_v^*=\delta_{-v},$$
and extend multiplication bilinearly and the involution conjugate-linearly.
Here a linear functional $\varphi:A_0\to\mathbb C$ is **positive unital** if
$\varphi(a^*a)\ge0$ for every $a\in A_0$ and $\varphi(\delta_0)=1$. Put
$N_\varphi=\{a\in A_0:\varphi(a^*a)=0\}$, equip $A_0/N_\varphi$ with
$$\langle[a],[b]\rangle_\varphi:=\varphi(b^*a),$$
and let $\pi_\varphi$ be left multiplication on the Hilbert completion of
this quotient. The lemma
[[lem-universal-weyl-c-star-algebra-is-well-defined]] verifies that these
quotients and representations are well-defined.
Define the universal C*-seminorm and completion by
$$\|a\|_u:=\sup_{\varphi}\|\pi_\varphi(a)\|,\qquad C^*_{\mathrm W}(V,\omega,\lambda):=\overline{A_0/\ker\|\cdot\|_u}^{\,\|\cdot\|_u}.$$
The lemma [[lem-universal-weyl-c-star-algebra-is-well-defined]] proves that
the twisted algebra and GNS representations are well-defined, the seminorm is
finite and nonzero, and the completion is universal for unitary generators
with the displayed Weyl relations. Countable Choice is included through the
Hilbert completions in that construction.

## Remarks

The universal algebra is built from bounded unitary symbols and treats the
underlying additive group as discrete. It does not impose strong continuity on
$v\mapsto\pi(\delta_v)$; regularity is a property of a representation. It is
distinct from the polynomial Weyl quotient of
[[def-polynomial-weyl-algebra]], whose generators are polynomial and whose
definition has no C*-norm or topology. The local descriptions here state the
distinction; the PA-07 item is not treated as an accepted dependency.
