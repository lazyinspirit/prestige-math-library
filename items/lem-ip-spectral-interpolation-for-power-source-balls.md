---
id: lem-ip-spectral-interpolation-for-power-source-balls
kind: lemma
title: Spectral interpolation for power source balls
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-power-source-set
  - def-ip-compact-linear-inverse-model
  - thm-singular-value-decomposition-for-compact-operators
  - def-compact-spectral-filter-and-qualification
  - def-countable-choice
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-power
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - cor-mean-value-theorem
  - lem-of-inverse-positive
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, lecture notes — Lemma 3.14 and Section 4.2"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Lemma 3.14, printed pp. 29–31, and Section 4.2, printed pp. 36–43: spectral interpolation and the source-ball modulus."
    - title: "Bernd Hofmann and Peter Mathé, A Note on the Modulus of Continuity for Ill-Posed Problems in Hilbert Space"
      url: "https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf"
      locator: "Section 1, PDF pp. 1–3: spectral source classes and modulus conventions."
---

## Statement

Assume Countable Choice. Let $K:X\to Y$ be compact between real or complex Hilbert spaces over the same scalar field, let $\nu>0$ and $w\in X$, and put $x=|K|^\nu w$. Then $\|x\|_X\le\|Kx\|_Y^{\nu/(\nu+1)}\|w\|_X^{1/(\nu+1)}$.

## Statement references

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[Clason, *Regularization of Inverse Problems*, Lemma 3.14](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Hofmann and Mathé, *A Note on the Modulus of Continuity*, Section 1](https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf)

## Facts & Assumptions

**Given:** Countable Choice, compact $K:X\to Y$ between real or complex Hilbert spaces, $\nu>0$, $w\in X$, and $x=|K|^\nu w$.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the compact singular-value decomposition supplier.

[F1] [[thm-singular-value-decomposition-for-compact-operators]]: The positive singular system has orthonormal right and left singular vectors $v_j,u_j$ with $|K|v_j=s_jv_j$ and $Kv_j=s_ju_j$, and the closed span of the $v_j$ is $N(K)^\perp$.

[F2] [[def-ip-power-source-set]]: The power source multiplier is $|K|^\nu=(K^*K)^{\nu/2}$.

[F3] [[def-compact-spectral-filter-and-qualification]]: The compact spectral multiplier acts on an eigenvector by its scalar function, and the power multiplier has value zero at the zero eigenvalue.

[F4] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-power]], [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]], [[thm-real-power-continuity-and-derivatives]], [[thm-real-power-laws]], [[cor-mean-value-theorem]], and [[lem-of-inverse-positive]]: For $a>0$ and $t>0$, $t^a>0$, $1^a=1$, and $(t^a)'=at^{a-1}>0$; hence the mean value theorem makes $t\mapsto t^a$ strictly increasing. For $0<\theta<1$, exponent laws give $t^{\theta-1}=1/t^{1-\theta}$, and reciprocation reverses positive inequalities.

## Proof

1.1 Let $J$ index the positive singular values in [F1]. Write $w=w_0+\sum_{j\in J}w_jv_j$ in norm, with $w_0\in N(K)$. By [F2]–[F3], $x=\sum_{j\in J}s_j^\nu w_jv_j$ and $Kx=\sum_{j\in J}s_j^{\nu+1}w_ju_j$, with norm-convergent expansions. For each finite $F\subseteq J$, orthonormality gives the squared norms of the partial sums as the sums of squared coefficients; taking limits by continuity of the norm gives $\|x\|_X^2=\sum_{j\in J}c_j$ and $\|Kx\|_Y^2=\sum_{j\in J}a_j$. The same finite-sum identity and $w_0\perp v_j$ give $\|w\|_X^2=\|w_0\|_X^2+\sum_{j\in J}b_j\ge\sum_{j\in J}b_j$, where $c_j=s_j^{2\nu}|w_j|^2$, $a_j=s_j^{2\nu+2}|w_j|^2$, and $b_j=|w_j|^2$. [given, A1, F1, F2, F3, construct]

1.2 Put $\theta=\nu/(\nu+1)\in(0,1)$. For a finite $F\subseteq J$, set $A_F=\sum_{j\in F}a_j$, $B_F=\sum_{j\in F}b_j$, and $C_F=\sum_{j\in F}c_j$. If $A_F=0$ or $B_F=0$, then every $w_j$ with $j\in F$ is zero because $s_j>0$, so $C_F=0$. Otherwise, for $j\in F$ put $p_j=a_j/A_F$ and $q_j=b_j/B_F$. The scalar inequality $t^\theta\le\theta t+1-\theta$ holds for $t\ge0$: for $t>0$ set $g(t)=\theta t+1-\theta-t^\theta$. By [F4], $g'(t)=\theta(1-t^{\theta-1})$. If $0<t<1$, strict increase of $u\mapsto u^{1-\theta}$ gives $t^{1-\theta}<1^{1-\theta}=1$; by [F4] and inverse order this implies $t^{\theta-1}>1$ and $g'(t)<0$. If $t>1$, the inequalities reverse and $g'(t)>0$. The mean value theorem then gives $g(t)\ge g(1)=0$ for every $t>0$, while $g(0)=1-\theta>0$. If $q_j>0$, apply the scalar inequality to $t=p_j/q_j$ to obtain $p_j^\theta q_j^{1-\theta}\le\theta p_j+(1-\theta)q_j$; if $q_j=0$, the same inequality is immediate. Since $c_j=a_j^\theta b_j^{1-\theta}$, summing and using $\sum p_j=\sum q_j=1$ gives $C_F\le A_F^\theta B_F^{1-\theta}$. [given, F4, algebra]

2.1 Exhaust $J$ by its first $n$ indices when $J$ is infinite, and take $F=J$ when it is finite; if $J$ is empty, all three sums in step 1.1 are zero. Passing to the limit in step 1.2 gives $\|x\|_X^2\le\|Kx\|_Y^{2\theta}\|w\|_X^{2(1-\theta)}$. Taking nonnegative square roots and substituting $\theta=\nu/(\nu+1)$ proves the claimed inequality. [given, step 1.1, step 1.2, algebra] ∎
