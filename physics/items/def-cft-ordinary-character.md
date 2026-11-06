---
id: def-cft-ordinary-character
kind: definition
title: Ordinary VOA character
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-ordinary-vertex-module
  - def-virasoro-algebra
dependency_roles:
  def-ordinary-vertex-module: mathematical-premise
  def-virasoro-algebra: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
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
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: Section 9.6, printed pages 157–159; section 7.5, printed pages 95–100.
    - title: Yi-Zhi Huang, Vertex operator algebras and the Verlinde conjecture
      url: https://arxiv.org/pdf/math/0406291v3
      locator: Section 1, PDF pages 2–4; section 5, PDF pages 52–56.
---

## Definition

Let $V$ be a conformal vertex algebra of CFT type with central charge $c$, and let $M$ be an ordinary $V$-module. Write $L_M(0)$ for the conformal grading operator and $M_h=\{m\in M:L_M(0)m=hm\}$ for its eigenspaces. The formal ordinary character is

$$\chi_M(\tau)=\operatorname{Tr}_M(q^{L_M(0)-c/24})=\sum_{h\in\operatorname{Spec}(L_M(0))}\dim_{\mathbb C}(M_h)\,q^{h-c/24},\qquad q=e^{2\pi i\tau},\quad \tau\in\mathbb H,$$

where $\mathbb H=\{\tau\in\mathbb C:\operatorname{Im}\tau>0\}$, and the sum is a formal trace indexed by the actual $L_M(0)$-eigenvalues. Every coefficient is finite. If the spectrum is contained in one coset $h_0+\mathbb Z_{\geq0}$, the formal expression is $q^{h_0-c/24}\sum_{n\geq0}\dim(M_{h_0+n})q^n$; the exponent $h_0-c/24$ need not be integral. The convention $q^\alpha=e^{2\pi i\tau\alpha}$ fixes the branch when $\tau$ is in the upper half-plane. An analytic character is the holomorphic function defined when this series converges locally uniformly on $\mathbb H$. Convergence is not part of the formal trace definition.

## Definition references

[[def-ordinary-vertex-module]]

[[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]

## Facts & Assumptions

**Given:** $M$ is ordinary, with finite-dimensional $L_M(0)$-eigenspaces and lower-bounded real parts of its weights. The Virasoro central element acts on $M$ as $c\,\operatorname{id}_M$.

[F1] [[def-ordinary-vertex-module]]: $M$ has its $V$-module action, and $L_M(0)$ acts semisimply with finite-dimensional eigenspaces whose occurring weights have real parts bounded below.

[F2] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]: the modes use the bracket $[L_m,L_n]=(m-n)L_{m+n}+\frac{1}{12}(m^3-m)\delta_{m+n,0}C$; a representation has central charge $c$ when $C$ acts as $c\,\operatorname{id}$.

## Proof

1.1 The ordinary-module assumption makes $M$ a $V$-module, so its module Jacobi identity gives the Virasoro mode commutator formula for $Y_M(\omega,z)$. Comparing the products of $\omega$ in the stated conformal-vertex-algebra structure and [F2] gives the Virasoro relations on $M$ with the same central scalar $c$: the central term is a multiple of $\mathbf1$, and the module vacuum axiom gives $Y_M(\mathbf1,z)=\operatorname{id}_M$. Thus the shift in the exponent is the scalar $c/24$. Since $L_M(0)$ is semisimple by [F1], $M$ is the algebraic direct sum of its eigenspaces $M_h$. On each finite-dimensional $M_h$, $q^{L_M(0)-c/24}$ is multiplication by the formal monomial $q^{h-c/24}$, so its trace is $\dim(M_h)q^{h-c/24}$. [given, F1, F2, algebra]

2.1 Summing these finite-dimensional traces over the direct-sum eigenspaces gives the displayed formal character. On a single support coset $h_0+\mathbb Z_{\geq0}$, grouping exponents by $n$ gives the stated fractional leading power times a formal power series in $q$. This construction is coefficientwise and asserts no convergence on $\mathbb H$. [given, F1, step 1.1, algebra] ∎

## Remarks

This is the ordinary trace of the grading operator with no intertwining-operator insertions. The separate genus-one pseudo-trace construction uses a projective generalized module and geometrically modified logarithmic intertwining operators; it is not a synonym for $\chi_M$.

## Proof status

The formal trace and its fractional-power convention are established above. Analytic convergence and modular covariance remain theorem obligations of the consuming items.
