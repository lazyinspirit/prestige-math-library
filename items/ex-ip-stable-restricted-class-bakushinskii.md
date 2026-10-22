---
id: ex-ip-stable-restricted-class-bakushinskii
kind: example
title: Conditional stability on a power-source class
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-countable-choice
  - def-ip-centered-modulus-of-continuity
  - def-ip-compact-linear-inverse-model
  - def-ip-power-source-set
  - def-ip-unbounded-hilbert-moore-penrose-inverse
  - thm-ip-bakushinskii-veto
  - thm-ip-source-ball-modulus-of-continuity
  - thm-singular-value-decomposition-for-compact-operators
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, Theorems 4.11–4.12"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Section 4.2, Theorems 4.11–4.12, PDF p. 40: power-source conditional modulus and singular-direction attainment."
---

## Example

Assume Countable Choice. Let $K:X\to Y$ be a compact operator of infinite rank
between real or complex Hilbert spaces over one scalar field. Let
$(s_j,v_j,u_j)_{j\ge1}$ be a positive singular system with $s_j>0$,
$s_j\to0$, $\|v_j\|_X=\|u_j\|_Y=1$, and $Kv_j=s_ju_j$. For $\rho>0$ let
$M_\rho=X_{1,\rho}(K)=\{|K|w:w\in X,\ \|w\|_X\le\rho\}$ and define
$\varepsilon_K(M_\rho,\delta)=\sup\{\|x\|_X:x\in M_\rho,\
\|Kx\|_Y\le\delta\}$. Then
$\varepsilon_K(M_\rho,\delta)\le\sqrt{\rho\delta}$ for every $\delta\ge0$,
with equality at $\delta_j=\rho s_j^2$ for each $j$, witnessed by
$x_j=\rho s_jv_j$. Although $K^\dagger$ is discontinuous on its full domain,
this modulus tends to zero on the restricted source class $M_\rho$; this
conditional stability makes no claim of universal noise-level-free
convergence.

## Example references

[[def-ip-compact-linear-inverse-model|Compact Hilbert inverse model]]

[[def-ip-unbounded-hilbert-moore-penrose-inverse|Hilbert-space Moore–Penrose inverse]]

[[thm-singular-value-decomposition-for-compact-operators|Compact singular system]]

[[def-ip-power-source-set|Power-source class]]

[[def-ip-centered-modulus-of-continuity|Centered conditional modulus]]

[[thm-ip-source-ball-modulus-of-continuity|Conditional source-ball modulus]]

[[thm-ip-bakushinskii-veto|Universal noise-level-free convergence obstruction]]

[Clason, Regularization of Inverse Problems, Theorems 4.11–4.12](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a compact infinite-rank operator $K:X\to Y$
between real or complex Hilbert spaces over one scalar field, a positive
singular system $(s_j,v_j,u_j)_{j\ge1}$, $\rho>0$, the class
$M_\rho=X_{1,\rho}(K)$, and $\delta\ge0$.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the compact singular-value decomposition and Hilbert-space pseudoinverse definitions.

[F1] [[def-ip-compact-linear-inverse-model]]: The operator is compact and linear between real or complex Hilbert parameter/data spaces over one field.

[F2] [[thm-singular-value-decomposition-for-compact-operators]]: The positive singular directions are orthonormal, with $v_j\in N(K)^\perp$, $|K|v_j=s_jv_j$, and $Kv_j=s_ju_j$ for each positive singular value $s_j>0$.

[F3] [[def-ip-unbounded-hilbert-moore-penrose-inverse]]: $D(K^\dagger)=R(K)\oplus R(K)^\perp$, and $K^\dagger$ returns the minimum-norm preimage of the range component.

[F4] [[def-ip-power-source-set]]: $M_\rho=X_{1,\rho}(K)=\{|K|w:w\in X,\ \|w\|_X\le\rho\}$.

[F5] [[def-ip-centered-modulus-of-continuity]]: $\varepsilon_K(M_\rho,\delta)$ is the supremum of $\|x\|_X$ over $x\in M_\rho$ with $\|Kx\|_Y\le\delta$.

[F6] [[thm-ip-source-ball-modulus-of-continuity]]: For $\nu=1$, $\varepsilon_K(X_{1,\rho}(K),\delta)\le\delta^{1/2}\rho^{1/2}$; equality holds at $\delta_j=\rho s_j^2$ with witness $x_j=\rho s_jv_j$.

[F7] [[thm-ip-bakushinskii-veto]]: For discontinuous $K^\dagger$, universal worst-case convergence over every exact datum and every admissible noise ball would imply continuity of $K^\dagger$.

## Verification

1.1 By [F6] with $\nu=1$, the equality radii $\delta_j=\rho s_j^2$ form a null sequence; since $\rho>0$, $s_j\to0$. Put $y_j:=Kv_j=s_ju_j$. Then $\|y_j\|_Y=s_j\to0$ by [F2]. Since $v_j\in N(K)^\perp$, [F3] gives $K^\dagger y_j=v_j$, whose norm is $1$. Thus $K^\dagger$ is discontinuous at $0$ on its domain. [given, A1, F1, F2, F3, F6, algebra]

2.1 By [F4]–[F6] with $\nu=1$, $\varepsilon_K(M_\rho,\delta)\le\delta^{1/2}\rho^{1/2}$, and for each $j$, $x_j=|K|(\rho v_j)=\rho s_jv_j$ lies in $M_\rho$, has $\|Kx_j\|_Y=\rho s_j^2=\delta_j$, and has $\|x_j\|_X=\rho s_j=\sqrt{\rho\delta_j}$. This attains the bound. Since $\delta_j\to0$ by [F6], the upper bound tends to zero as $\delta\downarrow0$. The estimate is restricted to $M_\rho$ and does not assert the universal convergence condition in [F7]. [given, step 1.1, A1, F1, F2, F4, F5, F6, F7, construct, algebra] ∎
