---
id: ex-sl2-small-quantum-group-at-fifth-root
kind: example
title: "The rank-one small quantum group at a primitive fifth root has dimension 125"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-root-of-unity-quantum-group-forms
  - lem-sl2-small-quantum-group-root-power-quotient-is-hopf
dependency_level: 2
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§3.5.1, PDF p. 18: the rank-one small-quantum-group quotient and dimension; the example specializes the locally proved formula to order five."
---

## Example

Let $\zeta$ be a primitive fifth root of unity and let
$u_\zeta(\mathfrak{sl}_2)$ be the rank-one root-power quotient of
[[def-root-of-unity-quantum-group-forms]]. Its generators satisfy
$E^5=F^5=0$ and $K^5=1$.

## Facts & Assumptions

**Given:** A primitive fifth root $\zeta$ and the rank-one quotient
$u_\zeta(\mathfrak{sl}_2)$.

[F1] For every odd $\ell>2$, the quotient has basis
$\{\overline F^{\,a}\overline K^{\,b}\overline E^{\,c}:0\le a,b,c<\ell\}$
and dimension $\ell^3$
([[lem-sl2-small-quantum-group-root-power-quotient-is-hopf]]).

## Verification

1.1 Since $\zeta$ has order five, $\zeta^5=1$ and $\zeta^2$ also has order five. In particular $\zeta-\zeta^{-1}\ne0$, so the rank-one root forms and the quotient in [F1] are defined at this parameter. [given, F1, algebra]

2.1 Substitute $\ell=5$ in the basis assertion [F1]. The exponents $a,b,c$ each range independently over $\{0,1,2,3,4\}$, so this basis has $5\cdot5\cdot5=125$ elements. Hence $\dim_{\mathbb C}u_\zeta(\mathfrak{sl}_2)=125$. [given, F1, step 1.1, algebra] ∎
