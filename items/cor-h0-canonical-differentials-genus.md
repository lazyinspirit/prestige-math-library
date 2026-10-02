---
id: cor-h0-canonical-differentials-genus
kind: corollary
title: "The canonical bundle has exactly g independent sections"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - def-sheaf-cohomology-derived-global-sections
  - thm-h0-structure-sheaf-proper-curve
  - thm-serre-duality-curves-line-bundles
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the duality and
coherent-cohomology suppliers. Let $C$ be a smooth proper geometrically integral
curve over a field $k$ of genus $g$ with canonical bundle $\omega_C$. Then
$$h^0(C,\omega_C)=g\qquad\text{and}\qquad h^1(C,\mathcal O_C)=g;$$
equivalently $l(K_C)=g$ for any canonical divisor $K_C$.

## Facts & Assumptions

**Given:** A field $k$; a smooth proper geometrically integral curve $C$ over $k$ of genus $g$; its canonical bundle $\omega_C=\Omega^1_{C/k}$ and a canonical divisor $K_C$.

[F1] Serre duality for line bundles on $C$: for every invertible
$\mathcal O_C$-module $L$ the trace pairing
$H^1(C,L)\times H^0(C,\omega_C\otimes L^{-1})\to k$ is perfect, so
$h^1(C,L)=h^0(C,\omega_C\otimes L^{-1})$; in particular
$h^1(C,\mathcal O_C)=h^0(C,\omega_C)$ and
$h^1(C,\omega_C)=h^0(C,\mathcal O_C)$.
([[thm-serre-duality-curves-line-bundles]])

[F2] For a smooth curve $C$ the canonical sheaf
$\omega_C=\Omega^1_{C/k}$ is invertible, and for a nonzero rational
differential $\omega$ with divisor $K_C=\operatorname{div}(\omega)$ one has
$\omega_C\cong\mathcal O_C(K_C)$; any two canonical divisors are linearly
equivalent. ([[def-canonical-line-bundle-curve]])

[F3] The genus of $C$ is $g=g(C)=h^1(C,\mathcal O_C)=\dim_kH^1(C,\mathcal O_C)$,
so $g=1-\chi(\mathcal O_C)$. ([[def-genus-euler-characteristic-curve]])

[F4] For a proper curve over $k$ that is geometrically connected and
geometrically reduced, the canonical map $k\to H^0(C,\mathcal O_C)$ is an
isomorphism; a smooth proper geometrically integral curve is such a curve.
([[thm-h0-structure-sheaf-proper-curve]])

[F5] For a divisor $D$ on $C$ one has
$l(D)=\dim_kL(D)=\dim_kH^0(C,\mathcal O_C(D))=h^0(D)$, and
$h^i(D)=\dim_kH^i(C,\mathcal O_C(D))$, with
$H^0$ and $H^1$ the derived sheaf cohomology of
$\mathcal O_C(D)$. ([[def-little-l-divisor]],
 [[def-sheaf-cohomology-derived-global-sections]])

[F6] The index of speciality of $D$ is
$i(D)=h^1(C,\mathcal O_C(D))=\dim_kH^1(C,\mathcal O_C(D))$.
([[def-index-speciality-divisor]])


[F8] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; dualize $\mathcal O_C$ and $\omega_C$ and compare
with the definition of the genus.

1.1 (Set-up.) By [F3] the genus is $g=h^1(C,\mathcal O_C)$, and by [F4] there is a canonical isomorphism $k\xrightarrow{\sim}H^0(C,\mathcal O_C)$, so that $h^0(\mathcal O_C)=1$ and $l(0)=1$ in the notation of [F5]; by [F2] the canonical sheaf $\Omega^1_{C/k}$ is invertible and $\omega_C\cong\mathcal O_C(K_C)$ for the divisor $K_C$ of any nonzero rational differential, with $K_C$ well defined modulo linear equivalence. [F2, F3, F4, F5, given]

1.2 (Duality.) The duality statement [F1] applied to the invertible sheaves $L=\mathcal O_C$ and $L=\omega_C$ gives $h^1(C,\mathcal O_C)=h^0(C,\omega_C\otimes\mathcal O_C)=h^0(C,\omega_C)$ and $h^1(C,\omega_C)=h^0(C,\omega_C\otimes\omega_C^{-1})=h^0(C,\mathcal O_C)$, the tensor simplifications being the canonical ones for invertible sheaves. [F1, given]

2.1 Combining step 1.2 with step 1.1 gives $h^0(C,\omega_C)=h^1(C,\mathcal O_C)=g$, which is the first displayed identity and, by [F6], also the identity $i(0)=g$. [F3, F6, step 1.1, step 1.2]


3.1 For any canonical divisor $K_C$ one has $\omega_C\cong\mathcal O_C(K_C)$ by [F2], so $l(K_C)=h^0(C,\mathcal O_C(K_C))=h^0(C,\omega_C)=g$ by [F5] and step 2.1; together with step 2.1 this proves both displayed identities and the equivalent formulation, and the Axiom of Choice [F8] is used exactly through the duality and coherent-cohomology suppliers cited above. [F2, F5, F8, step 2.1] ∎
