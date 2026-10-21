---
id: thm-ip-source-ball-modulus-of-continuity
kind: theorem
title: Conditional modulus on a power source ball
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-power-source-set
  - def-ip-centered-modulus-of-continuity
  - lem-ip-spectral-interpolation-for-power-source-balls
  - lem-ip-index-source-elements-are-minimum-norm
  - def-ip-compact-linear-inverse-model
  - def-absolute-value-and-singular-values-of-a-compact-operator
  - thm-singular-value-decomposition-for-compact-operators
  - def-countable-choice
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, lecture notes — Theorems 4.11–4.12"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Section 4.2, printed pp. 36–43: conditional modulus upper bound and singular-direction equality."
    - title: "Bernd Hofmann and Peter Mathé, A Note on the Modulus of Continuity for Ill-Posed Problems in Hilbert Space"
      url: "https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf"
      locator: "Section 1, PDF pp. 2–3: source-set moduli and power-type behavior."
---

## Statement

Assume Countable Choice. Let $K:X\to Y$ be compact between real or complex Hilbert spaces over the same scalar field and $\nu,\rho>0$. For every $\delta\ge0$, $\varepsilon_K(X_{\nu,\rho}(K),\delta)\le\delta^{\nu/(\nu+1)}\rho^{1/(\nu+1)}$. For every positive singular value $s_j$ with right singular vector $v_j$, equality holds at $\delta_j=\rho s_j^{\nu+1}$, witnessed by $x_j=\rho s_j^\nu v_j$. If $K$ has infinite rank, these $\delta_j$ form a null sequence; if $K$ has finite positive rank, equality is asserted only at its finitely many positive singular values; if $K=0$, the source ball and modulus are $\{0\}$ and $0$.

## Statement references

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[Clason, *Regularization of Inverse Problems*, Theorems 4.11–4.12](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Hofmann and Mathé, *A Note on the Modulus of Continuity*, Section 1](https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf)

## Facts & Assumptions

**Given:** Countable Choice, compact $K:X\to Y$ between real or complex Hilbert spaces over the same scalar field, $\nu,\rho>0$, the power source ball, its centered modulus, and $\delta\ge0$.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the compact singular-value decomposition supplier.

[F1] [[def-ip-power-source-set]]: $X_{\nu,\rho}(K)=\{|K|^\nu w:\|w\|_X\le\rho\}$.

[F2] [[def-ip-centered-modulus-of-continuity]]: $\varepsilon_K(M,\delta)$ is the supremum of $\|x\|_X$ over $x\in M$ with $\|Kx\|_Y\le\delta$.

[F3] [[lem-ip-index-source-elements-are-minimum-norm]]: Every element of the power source ball lies in $N(K)^\perp$.

[F4] [[lem-ip-spectral-interpolation-for-power-source-balls]]: If $x=|K|^\nu w$, then $\|x\|_X\le\|Kx\|_Y^{\nu/(\nu+1)}\|w\|_X^{1/(\nu+1)}$.

[F5] [[thm-singular-value-decomposition-for-compact-operators]] and [[def-absolute-value-and-singular-values-of-a-compact-operator]]: Each positive singular value $s_j$ has a unit right singular vector $v_j$ with $|K|v_j=s_jv_j$ and $\|Kv_j\|_Y=s_j$; an infinite positive singular sequence tends to zero.

## Proof

1.1 If $\delta=0$ and $x$ belongs to the centered-modulus set, then $Kx=0$. By [F3], $x\in N(K)^\perp$ as well, so $x=0$ and $\varepsilon_K(X_{\nu,\rho}(K),0)=0$. If $K=0$, [F3] likewise forces every member of the power source ball to be zero, so the asserted bound holds with no positive singular direction. [given, F2, F3, algebra]

1.2 Suppose $\delta>0$ and let $x$ be any element of the centered-modulus set. By [F1], choose $w\in X$ with $x=|K|^\nu w$ and $\|w\|_X\le\rho$. Applying [F4] and using $\|Kx\|_Y\le\delta$ gives $\|x\|_X\le\delta^{\nu/(\nu+1)}\rho^{1/(\nu+1)}$; taking the supremum over the centered-modulus set proves the bound. [given, A1, F1, F2, F4, choose]

2.1 Fix a positive singular value $s_j$ and its unit right singular vector $v_j$ from [F5]. Set $w_j=\rho v_j$ and $x_j=|K|^\nu w_j=\rho s_j^\nu v_j$. Then $\|Kx_j\|_Y=\rho s_j^{\nu+1}=\delta_j$ and $\|x_j\|_X=\rho s_j^\nu=\delta_j^{\nu/(\nu+1)}\rho^{1/(\nu+1)}$. Thus $x_j$ is feasible in the centered-modulus supremum at $\delta_j$ and attains the upper bound from step 1.2. If there are infinitely many positive singular values, compactness gives $s_j\to0$ and hence $\delta_j\to0$; finite positive rank gives only the stated finite list, while $K=0$ was handled in step 1.1. [given, A1, step 1.1, step 1.2, F1, F2, F5, construct, algebra] ∎
