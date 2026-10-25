---
id: ex-bochner-martinelli-on-a-ball
kind: example
title: Bochner–Martinelli on the unit ball
status: published
origin: pipeline
deps:
  - def-bochner-martinelli-kernel
  - thm-bochner-martinelli-integral-formula
  - thm-change-of-variables-for-oriented-manifold-diffeomorphisms
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 5 §5.1"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Theorem 5.1.1 and its complete proof, Chapter 5 printed pp. 157–159, PDF lines 12140–12476. The general formula supplies the constant case; the coordinate moments are calculated here by scalar rotations."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Example

Assume AC. For $n\ge1$, let $B=\{\zeta\in\mathbb C^n:|\zeta|<1\}$ be the
unit ball, oriented by $dx_1\wedge dy_1\wedge\cdots\wedge dx_n\wedge dy_n$,
and orient $\partial B$ outward-normal-first. With the kernel
$\Omega_n$ from [[def-bochner-martinelli-kernel]],

$$\int_{\partial B}\Omega_n(\zeta,0)=1,\qquad \int_{\partial B}\zeta_j\Omega_n(\zeta,0)=0\quad(1\le j\le n).$$

These are the boundary reproducing values at the origin for the constant
function $1$ and the coordinate functions $z_j$.

## Facts & Assumptions

**Given:** Full AC, $n\ge1$, the unit ball $B\subset\mathbb C^n$, and the
orientation and kernel convention above.

[F1] For $\zeta\ne z$, $\Omega_n(\zeta,z)$ is the normalized sum with
coefficient $\overline{\zeta_k-z_k}/|\zeta-z|^{2n}$ and the $k$th omitted
$d\bar\zeta_k$ wedge form
([[def-bochner-martinelli-kernel]]).

[F2] Under full AC, the Bochner–Martinelli formula applies to a bounded $C^1$
domain and a $C^1$ function on its closure; if the function is holomorphic,
its interior term vanishes
([[thm-bochner-martinelli-integral-formula]]).

[F3] Full AC means every family of nonempty sets has a choice function
([[def-axiom-of-choice]]); the formula in [F2] explicitly assumes AC.

[F4] For an orientation-preserving diffeomorphism $F$ of oriented manifolds
and a compactly supported top form $\omega$, $\int_M F^*\omega=\int_N\omega$
([[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 The unit ball is bounded with smooth boundary, $0\in B$, and the constant function $1$ is holomorphic and smooth on $\overline B$; the full-AC hypothesis supplies the stated premise of [F2] by [F3]. Applying [F2] at $z=0$ to $f=1$ gives $1=\int_{\partial B}\Omega_n(\zeta,0)-\int_B\bar\partial 1\wedge\Omega_n(\zeta,0)=\int_{\partial B}\Omega_n(\zeta,0)$, since the holomorphic case in [F2] has zero interior term. [F2, F3, given, algebra]

1.2 Fix $j$ and define $R_t(\zeta)=e^{it}\zeta$ on $\partial B$; by the explicit kernel [F1], each coefficient gains $e^{-it}$ while its wedge part, with $n$ factors $d\zeta_k$ and $n-1$ factors $d\bar\zeta_k$, gains $e^{it}$, so $R_t^*\Omega_n(\zeta,0)=\Omega_n(\zeta,0)$ and $R_t^*(\zeta_j\Omega_n(\zeta,0))=e^{it}\zeta_j\Omega_n(\zeta,0)$. [F1, given, algebra]

2.1 The restriction of $R_t$ is an orientation-preserving diffeomorphism of the oriented sphere $\partial B$: its ambient real determinant is $1$ and it carries outward radial normals to outward radial normals. The form $\zeta_j\Omega_n(\zeta,0)$ is smooth on the compact sphere, hence compactly supported there. With $I_j=\int_{\partial B}\zeta_j\Omega_n(\zeta,0)$, [F4] and step 1.2 give $I_j=\int_{\partial B}R_t^*(\zeta_j\Omega_n)=e^{it}I_j$. Taking $t=\pi$ yields $I_j=-I_j$, hence $I_j=0$. This calculation also covers $n=1$, since the kernel has one holomorphic differential and no antiholomorphic differentials in that case. [F4, step 1.2, given, algebra]

3.1 The integrals therefore equal $1(0)=1$ and $z_j(0)=0$ for the constant and coordinate functions, respectively; both are holomorphic on $B$, so these explicit values agree with the holomorphic cases of [F2]. [F2, step 1.1, step 2.1, given, algebra] $\square$
