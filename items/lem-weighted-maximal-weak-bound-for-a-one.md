---
id: lem-weighted-maximal-weak-bound-for-a-one
kind: lemma
title: Weighted weak (1,1) bound for the maximal function under A_1
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-muckenhoupt-a-p-and-a-one-weights, lem-a-one-cube-average-and-maximal-function-forms-agree, lem-a-p-weighted-average-comparison-and-density-to-mass, def-centered-and-uncentered-hardy-littlewood-maximal-functions, prop-ball-average-is-continuous-in-centre-and-radius, thm-vitali-covering-lemma-for-balls-with-fivefold-dilates, thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact, def-radon-measure-on-an-lch-space, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 7.1.9 (a) and Remark 7.1.11, printed pp. 507-511"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 4.3 (1) with its Vitali proof, printed pp. 67-68"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$w\in A_1$ ([[def-muckenhoupt-a-p-and-a-one-weights]]) and
$f\in L^1(w)$ (so $f\in L^1_{\mathrm{loc}}(\lambda)$ and the maximal functions
of [[def-centered-and-uncentered-hardy-littlewood-maximal-functions]] are
defined). Then for every $\lambda>0$,
$$w(\{Mf>\lambda\})\le5^n[w]_{A_1}\,\lambda^{-1}\int_{\mathbb R^n}|f|w\,d\lambda,$$
and the uncentred maximal function satisfies the same estimate with constant
$2^n5^n[w]_{A_1}$.

## Facts & Assumptions

**Given:** Countable Choice, $w\in A_1$, $f\in L^1(w)$ and $\lambda>0$.

[F1] $M^*w\le[w]_{A_1}w$ almost everywhere, and $w\,d\lambda$ is a locally
finite regular Borel (Radon) measure; the cube-average/essential-infimum form of
the $A_1$ condition is equivalent to this pointwise form
([[def-muckenhoupt-a-p-and-a-one-weights]],
[[lem-a-one-cube-average-and-maximal-function-forms-agree]],
[[thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact]],
[[def-radon-measure-on-an-lch-space]]).

[F2] $f\in L^1(w)$ implies $f\in L^1_{\mathrm{loc}}(\lambda)$ by the weighted
average comparison at $p=1$, so every ball average of $|f|$ is finite
([[lem-a-p-weighted-average-comparison-and-density-to-mass]]), and for every
$r>0$ the function $x\mapsto A_r|f|(x)$ is continuous in the centre and radius
([[prop-ball-average-is-continuous-in-centre-and-radius]]).

[F3] Fivefold Vitali covering: for a finite family of balls $B_1,\dots,B_m$ there
is a pairwise disjoint subfamily $B_{i_1},\dots,B_{i_\ell}$ with
$\bigcup_jB_j\subseteq\bigcup_k5B_{i_k}$
([[thm-vitali-covering-lemma-for-balls-with-fivefold-dilates]]).

[F4] Inner regularity: for the Radon measure $w\,d\lambda$ and a Borel set $E$,
$w(E)=\sup\{w(K):K\subseteq E\text{ compact}\}$
([[def-radon-measure-on-an-lch-space]],
[[thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact]]).

## Proof

**Proof technique:** direct.

1.1 The level set $E_\lambda:=\{Mf>\lambda\}$ is open: $Mf$ is the supremum of the functions $x\mapsto A_r|f|(x)$, $r>0$, each continuous by [F2], so $Mf$ is lower semicontinuous. By [F4] its $w$-measure is the supremum of $w(K)$ over compact $K\subseteq E_\lambda$. [F2, F4, given]

1.2 Let $K\subseteq E_\lambda$ be compact. Each $x\in K$ has a ball $B_x\ni x$ with $A_{r_x}|f|(x)>\lambda$, i.e. $\int_{B_x}|f|\,d\lambda>\lambda|B_x|$; finitely many of the open balls $B_x$ cover $K$, and [F3] supplies pairwise disjoint balls $B_{x_1},\dots,B_{x_\ell}$ from that finite cover with $K\subseteq\bigcup_j5B_{x_j}$ and $\int_{B_{x_j}}|f|>\lambda|B_{x_j}|$ for every $j$. [F2, F3, given, choose]

2.1 For each ball $B_j$ of step 1.2 and each $y\in B_j$ one has $M^*w(y)\ge|5B_j|^{-1}\int_{5B_j}w=w(5B_j)/(5^n|B_j|)$ because $B_j\subseteq5B_j$; integrating over $y\in B_j$ against $|f|$ gives $\int_{B_j}|f(y)|M^*w(y)\,dy\ge(w(5B_j)/(5^n|B_j|))\int_{B_j}|f|$, and since $\int_{B_j}|f|>\lambda|B_j|$ we get $w(5B_j)\le5^n\lambda^{-1}\int_{B_j}|f(y)|M^*w(y)\,dy$. [F1, step 1.2, given, algebra]

3.1 Summing over the pairwise disjoint $B_j$ and using $M^*w\le[w]_{A_1}w$ almost everywhere from [F1], $w(K)\le\sum_jw(5B_j)\le5^n\lambda^{-1}\sum_j\int_{B_j}|f|M^*w\,d\lambda\le5^n\lambda^{-1}\int_{\mathbb R^n}|f|M^*w\,d\lambda\le5^n[w]_{A_1}\lambda^{-1}\int_{\mathbb R^n}|f|w\,d\lambda$. [F1, step 2.1, given, algebra]

4.1 Taking the supremum over compact $K\subseteq E_\lambda$ in step 3.1 and using the inner regularity of step 1.1 gives $w(\{Mf>\lambda\})\le5^n[w]_{A_1}\lambda^{-1}\int|f|w\,d\lambda$. For the uncentred maximal function, every ball $B=B(y,r)\ni x$ satisfies $B\subseteq B(x,2r)$ and $|B(x,2r)|=2^n|B|$, so $\langle|f|\rangle_B\le2^n\langle|f|\rangle_{B(x,2r)}\le2^nMf(x)$ and hence $M^*f\le2^nMf$ pointwise; consequently $\{M^*f>\lambda\}\subseteq\{Mf>\lambda/2^n\}$ and the centred estimate gives $w(\{M^*f>\lambda\})\le2^n5^n[w]_{A_1}\lambda^{-1}\int|f|w\,d\lambda$. [step 1.1, step 3.1, given, algebra] ∎ 