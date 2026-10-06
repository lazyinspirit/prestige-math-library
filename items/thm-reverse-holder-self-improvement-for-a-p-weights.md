---
id: thm-reverse-holder-self-improvement-for-a-p-weights
kind: theorem
title: Reverse Holder self-improvement for A_p weights
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [lem-a-p-distribution-decay-from-maximal-cubes, lem-a-p-weighted-average-comparison-and-density-to-mass, def-muckenhoupt-a-p-and-a-one-weights, def-real-power, thm-real-power-continuity-and-derivatives, thm-exponential-addition-formula, def-natural-logarithm, thm-countable-additivity-and-set-function-continuity, def-logarithm-to-a-base, thm-holder-inequality-for-integrals, def-countable-choice, lem-a-one-cube-average-and-maximal-function-forms-agree]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 7.2.2 with the constants (7.2.6)-(7.2.7) and its proof, printed pp. 514-517"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Lemma 4.36 and Remark 4.39, printed pp. 86-90"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$1\le p<\infty$ and $w\in A_p$
([[def-muckenhoupt-a-p-and-a-one-weights]]). Fix $0<\alpha<1$ and put
$$\beta:=1-\frac{(1-\alpha)^p}{K_p},\qquad \gamma:=\frac12\frac{-\log\beta}{\log(2^n\alpha^{-1})}>0$$
(the logarithm is the one of [[def-logarithm-to-a-base]], and the powers are
those of [[def-real-power]]). Then
$$(2^n\alpha^{-1})^\gamma\beta=\beta^{1/2}<1,$$
and for every axis-parallel cube $Q$,
$$\bigl(\langle w^{1+\gamma}\rangle_Q\bigr)^{1/(1+\gamma)}\le C\langle w\rangle_Q,\qquad C:=\Bigl(1+\frac{(2^n\alpha^{-1})^\gamma}{1-(2^n\alpha^{-1})^\gamma\beta}\Bigr)^{1/(1+\gamma)}<\infty.$$
Thus $w$ satisfies a reverse Hölder inequality with exponent $1+\gamma$, and
$\gamma$ and $C$ depend only on $n$, $p$, $K_p$ and the fixed $\alpha$.

Here $K_p=[w]_{A_p}$ for $p>1$, and
$K_1=\sup_Q\langle w\rangle_Q/(\operatorname{ess\,inf}_Qw)$; by
[[lem-a-one-cube-average-and-maximal-function-forms-agree]],
$1\le K_1\le c_n[w]_{A_1}$. Thus the constants remain controlled by the
stated $A_p$ data, including the ball-normalized endpoint characteristic.

## Facts & Assumptions

**Given:** Countable Choice, $1\le p<\infty$, $w\in A_p$, $0<\alpha<1$, and the constants $\beta,\gamma$ of the Statement.

[F1] $0<w(Q)<\infty$ for every cube. For $p>1$, the defining product is at most $K_p=[w]_{A_p}$ and Hölder applies; for $p=1$, $K_1$ is the cube-average/essential-infimum characteristic above ([[def-muckenhoupt-a-p-and-a-one-weights]], [[lem-a-one-cube-average-and-maximal-function-forms-agree]], [[thm-holder-inequality-for-integrals]]).

[F2] For a cube $Q_0$ with $\alpha_0=\langle w\rangle_{Q_0}>0$ and $\alpha_k=(2^n\alpha^{-1})^k\alpha_0$, the sets $U_k$ of the maximal dyadic subcubes with $\langle w\rangle_R>\alpha_k$ satisfy $U_{k+1}\subseteq U_k$, $w(U_k)\le\beta^kw(Q_0)$ and $w\le\alpha_k$ almost everywhere on $Q_0\setminus U_k$ ([[lem-a-p-distribution-decay-from-maximal-cubes]]).

[F3] $a^x=\exp(x\log a)$ for $a>0$ and real $x$ ([[def-real-power]]), $\log_bx=\log x/\log b$ for $b>0$, $b\ne1$, $x>0$ ([[def-logarithm-to-a-base]]), and the elementary exponential identities $\exp(u+v)=\exp(u)\exp(v)$, $\exp(-u)=1/\exp(u)$ follow from [[thm-exponential-addition-formula]] and the inverse identities of [[def-natural-logarithm]].

[F4] Integrals of nonnegative measurable functions over a measurable set are countably additive on disjoint measurable pieces, and monotone under inclusion ([[thm-countable-additivity-and-set-function-continuity]]).

## Proof

**Proof technique:** direct.

1.1 For $p>1$, Hölder applied to $w^{1/p}w^{-1/p}$ on a cube gives $1\le\langle w\rangle_Q^{1/p}\langle w^{-1/(p-1)}\rangle_Q^{(p-1)/p}\le K_p^{1/p}$. For $p=1$, $\langle w\rangle_Q\ge\operatorname{ess\,inf}_Qw$ gives $K_1\ge1$. Therefore $0<(1-\alpha)^p<K_p$ and $\beta\in(0,1)$, so $\gamma>0$ is well defined. [F1, given, algebra]

2.1 By [F3], $\log\beta<0$ and $(2^n\alpha^{-1})^\gamma=\exp(\gamma\log(2^n\alpha^{-1}))=\exp\bigl(\tfrac12(-\log\beta)\bigr)=\beta^{-1/2}$; therefore $(2^n\alpha^{-1})^\gamma\beta=\beta^{-1/2}\beta=\beta^{1/2}<1$, and the geometric ratio $q:=(2^n\alpha^{-1})^\gamma\beta$ satisfies $0<q<1$ with $1/(1-q)<\infty$. [F3, step 1.1, given, algebra]

3.1 Fix a cube $Q_0=Q$ and apply [F2] with $\alpha_0=\langle w\rangle_{Q_0}$: the sets $Q_0\setminus U_0$ and $U_k\setminus U_{k+1}$, $k\ge0$, are disjoint and measurable and cover $Q_0$ up to a Lebesgue-null set: indeed $w(\bigcap_kU_k)\le\beta^kw(Q_0)$ for every $k$, so the intersection is $w$-null, hence Lebesgue-null, and $w\le\alpha_0$ a.e. on $Q_0\setminus U_0$ while $w\le\alpha_{k+1}$ a.e. on $U_k\setminus U_{k+1}$ because $U_k\setminus U_{k+1}\subseteq Q_0\setminus U_{k+1}$. Hence, by countable additivity and monotonicity [F4], $\int_{Q_0}w^{1+\gamma}d\lambda=\int_{Q_0\setminus U_0}w^\gamma w\,d\lambda+\sum_{k\ge0}\int_{U_k\setminus U_{k+1}}w^\gamma w\,d\lambda\le\alpha_0^\gamma w(Q_0\setminus U_0)+\sum_{k\ge0}\alpha_{k+1}^\gamma w(U_k)\le\alpha_0^\gamma w(Q_0)\bigl[1+(2^n\alpha^{-1})^\gamma\sum_{k\ge0}q^k\bigr]$, where we used $w(U_k)\le\beta^kw(Q_0)$, $\alpha_{k+1}^\gamma=(2^n\alpha^{-1})^{(k+1)\gamma}\alpha_0^\gamma$ and $\sum_kq^k=1/(1-q)$ from step 2.1. [F2, F4, step 2.1, given, algebra]

4.1 Dividing the display of step 3.1 by $|Q_0|$ and taking $(1+\gamma)$-th roots gives $(\langle w^{1+\gamma}\rangle_{Q_0})^{1/(1+\gamma)}\le C\langle w\rangle_{Q_0}$ with $C=\bigl(1+(2^n\alpha^{-1})^\gamma/(1-q)\bigr)^{1/(1+\gamma)}<\infty$, which is the asserted reverse Hölder inequality; the constants $\beta,\gamma,C$ depend only on $n,p,K_p$ and $\alpha$. [step 1.1, step 2.1, step 3.1, given, algebra] ∎
