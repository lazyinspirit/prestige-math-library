---
id: cor-canonical-degree-two-g-minus-two
kind: corollary
title: "The canonical divisor has degree 2g - 2"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-h0-canonical-differentials-genus
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-degree-divisor-proper-curve
  - def-genus-euler-characteristic-curve
  - def-little-l-divisor
  - def-riemann-roch-space-of-divisor
  - lem-rational-differential-divisor-well-defined-class
  - thm-full-riemann-roch-divisor
  - thm-h0-structure-sheaf-proper-curve
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
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the duality suppliers. Let $C$ be
a smooth proper geometrically integral curve over a field $k$ of genus $g$ with
canonical divisor $K_C$. Then
$$\deg_k(K_C)=2g-2,$$
independently of the choice of the nonzero rational differential defining
$K_C$.

## Facts & Assumptions

**Given:** A field $k$; a smooth proper geometrically integral curve $C$ over $k$ of genus $g$; a canonical divisor $K_C=\operatorname{div}(\omega)$ for a nonzero rational differential $\omega$.

[F1] Full Riemann-Roch for divisors: for every divisor $D$ on $C$ one has
$l(D)-l(K_C-D)=\deg_k(D)+1-g$. ([[thm-full-riemann-roch-divisor]])

[F2] The canonical bundle has exactly $g$ independent sections:
$h^0(C,\omega_C)=g$, and equivalently $l(K_C)=g$ for any canonical divisor
$K_C$. ([[cor-h0-canonical-differentials-genus]])

[F3] For the zero divisor $\mathcal O_C(0)=\mathcal O_C$ one has
$H^0(C,\mathcal O_C)\cong k$ canonically, hence $l(0)=1$ because
$l(D)=\dim_kH^0(C,\mathcal O_C(D))$ for every divisor $D$.
([[thm-h0-structure-sheaf-proper-curve]], [[def-little-l-divisor]])

[F4] The canonical sheaf is $\omega_C=\Omega^1_{C/k}$; a canonical divisor is
the divisor $K_C=\operatorname{div}(\omega)$ of any nonzero rational
differential, and the divisors of the nonzero rational differentials form a
single linear equivalence class, so $\omega_C\cong\mathcal O_C(K_C)$ and any
two canonical divisors differ by the divisor of a nonzero rational function.
([[def-canonical-line-bundle-curve]],
[[lem-rational-differential-divisor-well-defined-class]])

[F5] The genus satisfies $g=g(C)=h^1(C,\mathcal O_C)=\dim_kH^1(C,\mathcal O_C)$,
so $g=1-\chi(\mathcal O_C)$. ([[def-genus-euler-characteristic-curve]])

[F6] For a divisor $D$ the Riemann-Roch space is
$L(D)=\{f\in k(C)^\times:\operatorname{div}(f)+D\ge0\}\cup\{0\}$, a
$k$-subspace of $k(C)$ with
$l(D)=\dim_kL(D)=\dim_kH^0(C,\mathcal O_C(D))$.
([[def-riemann-roch-space-of-divisor]], [[def-little-l-divisor]])

[F7] On $C$ a divisor is a finite formal sum of closed points with
$\deg_k(D)=\sum_xn_x[\kappa(x):k]$, an additive integer-valued function of
divisors; in particular $K_C-K_C=0$ and $\deg_k$ is defined on the divisor
$K_C$. ([[def-degree-divisor-proper-curve]])

[F8] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; evaluate full Riemann-Roch at the canonical
divisor and use $l(K_C)=g$, $l(0)=1$.

1.1 (Set-up.) By [F7] a divisor on $C$ is a finite sum of closed points with an additive degree, so $K_C-K_C=0$ and $\deg_k(K_C)$ is defined; by [F4] $K_C$ is the divisor of a nonzero rational differential and $\omega_C\cong\mathcal O_C(K_C)$, and by [F5] the genus is $g=h^1(C,\mathcal O_C)$. [F4, F5, F7, given]

1.2 (Two evaluations.) By [F2] one has $l(K_C)=g$, and by [F3] and [F6] one has $l(0)=\dim_kH^0(C,\mathcal O_C)=1$. [F2, F3, F6, given]

2.1 (Riemann-Roch at the canonical divisor.) Applying [F1] to the divisor $D=K_C$ gives $l(K_C)-l(K_C-K_C)=\deg_k(K_C)+1-g$. [F1, step 1.1]

3.1 Since $K_C-K_C=0$ by step 1.1, substituting the two evaluations of step 1.2 into the identity of step 2.1 gives $g-1=\deg_k(K_C)+1-g$, hence $\deg_k(K_C)=2g-2$. [step 1.2, step 2.1, algebra]

4.1 (Independence of the differential.) Let $\omega'$ be another nonzero rational differential with canonical divisor $K_C'=\operatorname{div}(\omega')$; by [F4] $K_C'$ is again a canonical divisor and $K_C'-K_C'=0$, and by [F2] $l(K_C')=g$; applying [F1] to $D=K_C'$ and substituting $l(K_C')=g$ together with $l(0)=1$ from step 1.2 gives $g-1=\deg_k(K_C')+1-g$, hence $\deg_k(K_C')=2g-2$ exactly as in step 3.1. [F1, F2, F4, step 1.2, step 3.1]

5.1 Steps 3.1 and 4.1 prove $\deg_k(K_C)=2g-2$ for every choice of nonzero rational differential, so the degree is independent of that choice; the Axiom of Choice [F8] is used exactly through the duality suppliers cited above. [F8, step 3.1, step 4.1] ∎
