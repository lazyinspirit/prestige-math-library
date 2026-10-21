---
id: thm-ip-deterministic-minimax-lower-bound-on-source-balls
kind: theorem
title: Deterministic minimax lower bound on power source balls
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-power-source-set
  - def-ip-centered-modulus-of-continuity
  - lem-ip-index-source-elements-are-minimum-norm
  - def-ip-compact-linear-inverse-model
  - def-hilbert-space
  - cor-inner-product-induces-a-norm
  - def-countable-choice
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, lecture notes — Theorem 4.10"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Section 4.2, printed pp. 36–43: the centered modulus is a lower bound for worst-case reconstruction error."
    - title: "Bernd Hofmann and Peter Mathé, A Note on the Modulus of Continuity for Ill-Posed Problems in Hilbert Space"
      url: "https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf"
      locator: "Section 1, PDF pp. 2–3, equations (6)–(7): two-truth and centered moduli."
---

## Statement

Assume Countable Choice. Let $K:X\to Y$ be compact between real or complex Hilbert spaces over the same scalar field, $\nu,\rho>0$, and let $X_{\nu,\rho}(K)$ be its power source ball. For any deterministic reconstruction map $A:Y\to X$ and any $\delta\ge0$, define $E_\delta(A):=\sup\{\|A(Kx+\eta)-x\|_X:x\in X_{\nu,\rho}(K),\ \eta\in Y,\ \|\eta\|_Y\le\delta\}$. Then $E_\delta(A)\ge\varepsilon_K(X_{\nu,\rho}(K),\delta)$, and therefore $\inf_{A:Y\to X}E_\delta(A)\ge\varepsilon_K(X_{\nu,\rho}(K),\delta)$. For any $M\subseteq X$ with $0\in M$, define the two-truth modulus $\widetilde\varepsilon_K(M,\delta):=\sup\{\|x_1-x_2\|_X:x_1,x_2\in M,\ \|K(x_1-x_2)\|_Y\le2\delta\}$. Then $\widetilde\varepsilon_K(X_{\nu,\rho}(K),\delta)=2\varepsilon_K(X_{\nu,\rho}(K),\delta)$.

## Statement references

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[Clason, *Regularization of Inverse Problems*, Theorem 4.10](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Hofmann and Mathé, *A Note on the Modulus of Continuity*, equations (6)–(7)](https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf)

## Facts & Assumptions

**Given:** Countable Choice, compact $K:X\to Y$ between real or complex Hilbert spaces over the same scalar field, $\nu,\rho>0$, the power source ball $X_{\nu,\rho}(K)$, a noise level $\delta\ge0$, and a deterministic map $A:Y\to X$.

[A1] [[def-countable-choice]]: Countable Choice is required by the compact spectral multiplier used to define the power source ball; the indistinguishable-data argument below uses no further choice.

[F1] [[def-ip-power-source-set]]: $X_{\nu,\rho}(K)=\{|K|^\nu w:\|w\|_X\le\rho\}$.

[F2] [[def-ip-centered-modulus-of-continuity]]: $\varepsilon_K(M,\delta)=\sup\{\|x\|_X:x\in M,\|Kx\|_Y\le\delta\}$ when $0\in M\subseteq N(K)^\perp$.

[F3] [[lem-ip-index-source-elements-are-minimum-norm]]: Every element of $X_{\nu,\rho}(K)$ lies in $N(K)^\perp$.

[F4] [[def-hilbert-space]] and [[cor-inner-product-induces-a-norm]]: The Hilbert norm is induced by the inner product, and its triangle inequality holds.

## Proof

1.1 The class $X_{\nu,\rho}(K)$ contains $0$ by taking $w=0$ in [F1]. It is symmetric: if $x=|K|^\nu w$ with $\|w\|_X\le\rho$, then $-x=|K|^\nu(-w)$ with $\|-w\|_X\le\rho$. It is convex: for $x_i=|K|^\nu w_i$ with $\|w_i\|_X\le\rho$ and $0\le t\le1$, $tx_1+(1-t)x_2=|K|^\nu(tw_1+(1-t)w_2)$, while the triangle inequality gives $\|tw_1+(1-t)w_2\|_X\le t\rho+(1-t)\rho=\rho$. By [F3], this class is contained in $N(K)^\perp$, so [F2] applies. [given, A1, F1, F2, F3, F4, choose, algebra]

2.1 Let $x\in X_{\nu,\rho}(K)$ satisfy $\|Kx\|_Y\le\delta$. The two admissible truths $x$ and $-x$ with noises $-Kx$ and $Kx$ both produce the same observed datum $0$. Their reconstruction errors are $\|A(0)-x\|_X$ and $\|A(0)+x\|_X$, and the triangle inequality yields $2\|x\|_X=\|(A(0)+x)-(A(0)-x)\|_X\le\|A(0)+x\|_X+\|A(0)-x\|_X$. Hence the larger error is at least $\|x\|_X$, so taking the supremum over all such $x$ gives $E_\delta(A)\ge\varepsilon_K(X_{\nu,\rho}(K),\delta)$. Taking the infimum over $A$ preserves this lower bound. [given, step 1.1, F2, F4, algebra]

3.1 If $x_1,x_2\in X_{\nu,\rho}(K)$ and $\|K(x_1-x_2)\|_Y\le2\delta$, then $z=(x_1-x_2)/2$ lies in the class by symmetry and convexity from step 1.1 and satisfies $\|Kz\|_Y\le\delta$; thus $\|x_1-x_2\|_X=2\|z\|_X\le2\varepsilon_K(X_{\nu,\rho}(K),\delta)$. Conversely, for every $z$ in the centered-modulus set, the pair $(z,-z)$ lies in the source ball and has $\|K(z-(-z))\|_Y=2\|Kz\|_Y\le2\delta$, so the two-truth supremum is at least $2\varepsilon_K(X_{\nu,\rho}(K),\delta)$. Taking suprema proves the claimed factor of two. [given, step 1.1, F1, F2, algebra] ∎
