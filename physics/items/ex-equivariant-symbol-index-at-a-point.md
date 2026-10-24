---
id: ex-equivariant-symbol-index-at-a-point
kind: example
title: "A compact symbol at a point retains the full torus character"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-symbol-index-examples
deps:
  - def-equivariant-compact-symbol-k-theory
dependency_roles:
  def-equivariant-compact-symbol-k-theory: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
dependency_level: 1
---

## Example

Let $T=\mathbb R/\mathbb Z$, let $M=\{p\}$, and put $\mathbb C_k=\mathbb C$ with $[s]\in T$ acting by $e^{2\pi i k s}$. Take the two-term complex $0\to E^0\xrightarrow{0}E^1\to0$, where $E^0=\mathbb C_0\oplus\mathbb C_1$ and $E^1=\mathbb C_2$. Its cohomology is $H^0=\ker(0:E^0\to E^1)=E^0$ and $H^1=\ker(0:E^1\to0)/\operatorname{im}(0:E^0\to E^1)=E^1$. The compact symbol triple on $T^*M=\{p\}$ is $(E^0,E^1,0)$. Its virtual bundle is $[\mathbb C_0]+[\mathbb C_1]-[\mathbb C_2]$, whose character at $g=[s]$ is $1+z-z^2$, $z=e^{2\pi i s}$. The cohomological index character is defined here as the alternating cohomology trace $\sum_{j=0}^1(-1)^j\operatorname{tr}(g|H^j)$, which is also $1+z-z^2$. The normal Koszul denominator is $1$ because the normal bundle has rank zero.

## Facts & Assumptions

**Given:** The one-point manifold, the displayed fiber representations, and the zero differential.

[F1] The compact symbol is the even-to-odd principal-symbol triple, and a rank-zero normal bundle has exterior algebra consisting of one even trivial line. [[def-equivariant-compact-symbol-k-theory]]

[F2] For a finite-dimensional equivariant linear map $A:E^+\to E^-$, its analytic equivariant index is $[\ker A]-[\ker A^*]$. [[def-equivariant-compact-symbol-k-theory]]

## Verification

1.1 There is no nonzero cotangent vector at $p$, so ellipticity is vacuous. The differential is zero, hence $H^0=\mathbb C_0\oplus\mathbb C_1$ and $H^1=\mathbb C_2$. Its principal symbol is zero; by [F1] its symbol triple has exactly these even and odd bundles. The virtual fiber and the index in [F2] are both $[\mathbb C_0]+[\mathbb C_1]-[\mathbb C_2]$. Taking traces gives $1+z-z^2$. [given, F1, F2, algebra]

2.1 Every $g$ fixes $p$, and the cotangent inclusion of its fixed locus is the identity of the point. The normal bundle is zero. Thus $\lambda_{-1}(0)=1$, and its character and the empty determinant both equal $1$. Dividing the virtual fiber character from step 1.1 by this denominator gives $1+z-z^2$, agreeing with the index character. This verifies the point calculation directly and uses no general analytic/topological comparison theorem. [given, F1, step 1.1, algebra] ∎
