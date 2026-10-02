---
id: thm-full-riemann-roch-divisor
kind: theorem
title: "The full Riemann-Roch theorem for divisors on a smooth proper curve"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-h1-line-bundle-dual-sections
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-index-speciality-divisor
  - def-invertible-sheaf-of-cartier-divisor
  - def-little-l-divisor
  - def-riemann-roch-space-of-divisor
  - lem-rational-differential-divisor-well-defined-class
  - thm-cartier-weil-divisors-curves-agree
  - thm-riemann-roch-as-l-minus-index
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

Assume the Axiom of Choice as inherited from the coherent-cohomology
suppliers. Let $C$ be a smooth proper geometrically integral curve over a field
$k$ with genus $g=g(C)$ and canonical divisor $K_C$, the divisor of a nonzero
rational differential on $C$. Then for every divisor $D$ on $C$,
$$l(D)-l(K_C-D)=\deg_k(D)+1-g;$$
equivalently $h^0(C,\mathcal O_C(D))-h^1(C,\mathcal O_C(D))$ is the Euler
characteristic of $\mathcal O_C(D)$ and
$i(D)=h^1(C,\mathcal O_C(D))=l(K_C-D)$. Both sides of the identity are
unchanged if $K_C$ is replaced by a linearly equivalent canonical divisor.

## Facts & Assumptions

**Given:** A field $k$; a smooth proper geometrically integral curve $C$ over $k$ of genus $g$; a canonical divisor $K_C$ (the divisor of a nonzero rational differential); an arbitrary divisor $D$ on $C$.

[F1] Riemann-Roch as $l$ minus $i$: for every divisor $D$ on $C$ one has $l(D)-i(D)=h^0(C,\mathcal O_C(D))-h^1(C,\mathcal O_C(D))=\deg_k(D)+1-g$, and $i(D)\ge0$; for $D=0$ this reads $1-g=0+1-g$ with $i(0)=g$. No duality is used there, the index of speciality being left as an unknown defect. ([[thm-riemann-roch-as-l-minus-index]])

[F2] With $K_C$ a canonical divisor, the index of speciality is realized by dual sections: $h^1(C,\mathcal O_C(D))=h^0(C,\mathcal O_C(K_C-D))=l(K_C-D)$ for every divisor $D$. ([[cor-h1-line-bundle-dual-sections]])

[F3] For a divisor $D$ one has $l(D)=\dim_kL(D)=\dim_kH^0(C,\mathcal O_C(D))=h^0(D)$ and $i(D)=h^1(C,\mathcal O_C(D))=\dim_kH^1(C,\mathcal O_C(D))\ge0$; in particular $l$ and $i$ are nonnegative integers and $i(0)=g$. ([[def-little-l-divisor]], [[def-index-speciality-divisor]])

[F4] The canonical sheaf is $\omega_C=\Omega^1_{C/k}$, and for a nonzero rational differential $\omega$ with divisor $K_C=\operatorname{div}(\omega)$ one has $\omega_C\cong\mathcal O_C(K_C)$; the divisors of the nonzero rational differentials form a single linear equivalence class, any two canonical divisors differ by the divisor of a nonzero rational function. ([[def-canonical-line-bundle-curve]], [[lem-rational-differential-divisor-well-defined-class]])

[F5] The Riemann-Roch space is $L(D)=\{f\in k(C)^\times:\operatorname{div}(f)+D\ge0\}\cup\{0\}$, equivalently $L(D)=H^0(C,\mathcal O_C(D))$ as a $k$-subspace of $k(C)$. ([[def-riemann-roch-space-of-divisor]])

[F6] On the smooth curve $C$ divisors are finite sums of closed points with degree $\deg_k(D)=\sum_xn_x[\kappa(x):k]$, Weil and Cartier divisors agree, and each divisor has an associated invertible sheaf $\mathcal O_C(D)$ with local equations $f_i^{-1}\mathcal O_{U_i}$, so that $D\mapsto\mathcal O_C(D)$ descends to an isomorphism of divisor classes with the Picard group. ([[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]], [[def-invertible-sheaf-of-cartier-divisor]], [[thm-cartier-weil-divisors-curves-agree]])

[F7] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; combine Riemann-Roch as $l$ minus $i$ with the duality identification of $i(D)$, then check invariance under the choice of canonical divisor.

1.1 (Set-up.) Let $D$ be a divisor on $C$; by [F6] $D$ is a finite sum of closed points with a degree $\deg_k(D)$ and has an associated invertible sheaf $\mathcal O_C(D)$ well defined modulo linear equivalence, and by [F3] and [F5] the integers $l(D)=\dim_kH^0(C,\mathcal O_C(D))$ and $i(D)=\dim_kH^1(C,\mathcal O_C(D))$ are defined; by [F4] the divisor $K_C$ of a nonzero rational differential is a canonical divisor with $\omega_C\cong\mathcal O_C(K_C)$, well defined modulo linear equivalence. [F3, F4, F5, F6, given]

2.1 (Riemann-Roch, no duality.) By [F1] applied to the divisor $D$ one has $l(D)-i(D)=h^0(C,\mathcal O_C(D))-h^1(C,\mathcal O_C(D))=\deg_k(D)+1-g$, so the Euler characteristic of $\mathcal O_C(D)$ equals $\deg_k(D)+1-g$ and $i(D)\ge0$ by [F3]. [F1, F3, step 1.1, given]

2.2 (Duality term.) By [F2] applied to the same $D$ and the canonical divisor $K_C$ one has $i(D)=h^1(C,\mathcal O_C(D))=h^0(C,\mathcal O_C(K_C-D))=l(K_C-D)$. [F2, step 1.1, given]

3.1 (Full identity.) Substituting the identification of step 2.2 into the identity of step 2.1 gives $l(D)-l(K_C-D)=\deg_k(D)+1-g$ for every divisor $D$, that is, both the displayed Riemann-Roch identity and the equivalent formulation $h^0(C,\mathcal O_C(D))-h^1(C,\mathcal O_C(D))=\deg_k(D)+1-g$ with $i(D)=l(K_C-D)$. [F1, F2, step 2.1, step 2.2]

4.1 (Invariance in the canonical divisor.) Let $K_C'$ be another canonical divisor; by [F4] there is $f\in k(C)^\times$ with $K_C'=K_C+\operatorname{div}(f)$. By [F5], $u\in L(K_C'-D)$ exactly when $uf\in L(K_C-D)$, so multiplication by $f$ is a $k$-linear bijection $L(K_C'-D)\to L(K_C-D)$ with inverse multiplication by $f^{-1}$. Hence $l(K_C'-D)=l(K_C-D)$ by [F3]. [F3, F4, F5, step 3.1]

5.1 Since the right-hand side $\deg_k(D)+1-g$ of the identity of step 3.1 does not involve $K_C$ at all, step 4.1 shows that both sides are unchanged under replacing $K_C$ by a linearly equivalent canonical divisor; this completes the proof of the full Riemann-Roch theorem, and the Axiom of Choice [F7] is used exactly through the coherent-cohomology suppliers cited above. [F7, step 3.1, step 4.1] ∎
