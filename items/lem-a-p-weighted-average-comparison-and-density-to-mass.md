---
id: lem-a-p-weighted-average-comparison-and-density-to-mass
kind: lemma
title: Weighted average comparison and the density-to-mass estimate for A_p weights
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-muckenhoupt-a-p-and-a-one-weights, lem-a-one-cube-average-and-maximal-function-forms-agree, thm-holder-inequality-for-integrals, def-calligraphic-l-p-on-a-measure-space, def-weight-and-weighted-lp-space, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Proposition 7.1.5 (8) and its proof, printed pp. 504-505, and Lemma 7.2.1 with (7.2.1)-(7.2.3), printed p. 514"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Lemma 4.20 and Remark 4.21, printed pp. 78-79"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $1\le p<\infty$ and $w\in A_p$
([[def-muckenhoupt-a-p-and-a-one-weights]]). For every axis-parallel cube $Q$
and every nonnegative measurable $f$ on $Q$,
$$\langle f\rangle_Q\le[w]_{A_p}^{1/p}\Bigl(\frac{1}{w(Q)}\int_Qf^pw\,d\lambda\Bigr)^{1/p}\qquad(1<p<\infty),$$
and for $p=1$ the same inequality holds with $[w]_{A_p}^{1/p}$ replaced by
$c_n[w]_{A_1}$, where $c_n$ is the dimensional constant of
[[lem-a-one-cube-average-and-maximal-function-forms-agree]] (with the
cube-average normalization of the $A_1$ characteristic the factor is exactly
$[w]_{A_1}$). In particular every $f\in L^p(w)$ is locally integrable.
Consequently, for every measurable $E\subseteq Q$ with $1<p<\infty$,
$$\Bigl(\frac{|E|}{|Q|}\Bigr)^p\le[w]_{A_p}\frac{w(E)}{w(Q)};$$
equivalently, if $S\subseteq Q$ is measurable and $|S|\le\alpha|Q|$ for some
$0<\alpha<1$, then
$$w(S)\le\Bigl(1-\frac{(1-\alpha)^p}{[w]_{A_p}}\Bigr)w(Q).$$

## Facts & Assumptions

**Given:** Countable Choice; $1\le p<\infty$, $w\in A_p$, a cube $Q$, a nonnegative measurable $f$ on $Q$, and a measurable $E\subseteq Q$.

[F1] For $1<p<\infty$ the $A_p$ characteristic is $[w]_{A_p}=\sup_Q\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}<\infty$, and $w^{-1/(p-1)}\in L^1_{\mathrm{loc}}$ with $0<w(Q)<\infty$ for every cube; for $p=1$ the equivalent cube-average/essential-infimum form gives $\langle w\rangle_Q\le c_n[w]_{A_1}\operatorname{ess\,inf}_Qw$ ([[def-muckenhoupt-a-p-and-a-one-weights]], [[lem-a-one-cube-average-and-maximal-function-forms-agree]]).

[F2] Hölder's inequality: for finite-valued nonnegative measurable $g,h$ on $Q$ with $\int_Qg^r<\infty$ and $\int_Qh^{r'}<\infty$, and conjugate finite exponents $r,r'>1$, $\langle gh\rangle_Q\le \langle g^r\rangle_Q^{1/r}\langle h^{r'}\rangle_Q^{1/r'}$ ([[thm-holder-inequality-for-integrals]]).

[F3] $f\in L^p(w)$ means $\int|f|^pw\,d\lambda<\infty$, with $|f|$ measurable when $f$ is; the integral over a set is additive and monotone ([[def-weight-and-weighted-lp-space]], [[def-calligraphic-l-p-on-a-measure-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $1<p<\infty$ and use the positive finite representative of $w$. If $\int_Q f^pw=+\infty$, the claimed inequality is immediate in the extended order because its right-hand side is $+\infty$. Otherwise $f$ is finite a.e.; replace its infinite values on a null set by zero if needed. The functions $fw^{1/p}$ and $w^{-1/p}$ have finite $p$- and $p'$-integrals respectively, the latter by [F1]. Hölder's inequality with exponents $p$ and $p'$ applied to $|f|w^{1/p}$ and $w^{-1/p}=w^{-1/(p-1)\cdot(p-1)/p}$ gives $\langle f\rangle_Q\le\langle f^pw\rangle_Q^{1/p}\langle w^{-1/(p-1)}\rangle_Q^{(p-1)/p}$. Since $\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}\le[w]_{A_p}$, one has $\langle w^{-1/(p-1)}\rangle_Q^{(p-1)/p}\le[w]_{A_p}^{1/p}\langle w\rangle_Q^{-1/p}=[w]_{A_p}^{1/p}(|Q|/w(Q))^{1/p}$. Substituting and using $\langle f^pw\rangle_Q=|Q|^{-1}\int_Qf^pw$ yields $\langle f\rangle_Q\le[w]_{A_p}^{1/p}\bigl(w(Q)^{-1}\int_Qf^pw\bigr)^{1/p}$. [F1, F2, given, algebra]

1.2 Let $p=1$. Since $0<w(Q)<\infty$ and [F1] imply $\operatorname{ess\,inf}_Qw>0$, and $w\ge\operatorname{ess\,inf}_Qw$ a.e. on $Q$, one has $\int_Qf=\int_Q(fw)/w\le(\operatorname{ess\,inf}_Qw)^{-1}\int_Qfw$, and [F1] gives $(\operatorname{ess\,inf}_Qw)^{-1}\le c_n[w]_{A_1}\langle w\rangle_Q^{-1}=c_n[w]_{A_1}|Q|/w(Q)$; dividing by $|Q|$ gives $\langle f\rangle_Q\le c_n[w]_{A_1}w(Q)^{-1}\int_Qfw$. [F1, given, algebra]

2.1 Density-to-mass. Apply step 1.1 with $f=\mathbf 1_E$ (for $1<p<\infty$): $\langle\mathbf 1_E\rangle_Q=|E|/|Q|$ and $\int_Q\mathbf 1_Ew=w(E)$, so $(|E|/|Q|)^p\le[w]_{A_p}w(E)/w(Q)$, which is the first display. Applying it to $E=Q\setminus S$ when $|S|\le\alpha|Q|$ gives $|Q\setminus S|\ge(1-\alpha)|Q|$, hence $(1-\alpha)^p\le[w]_{A_p}w(Q\setminus S)/w(Q)$ and therefore $w(S)=w(Q)-w(Q\setminus S)\le(1-(1-\alpha)^p/[w]_{A_p})w(Q)$, the equivalent form. [F1, step 1.1, given, algebra]

3.1 Local integrability. If $f\in L^p(w)$ and $Q$ is a cube, then steps 1.1 and 1.2 applied to $|f|$ give $\langle|f|\rangle_Q\le[w]_{A_p}^{1/p}(w(Q)^{-1}\int_Q|f|^pw)^{1/p}\le[w]_{A_p}^{1/p}w(Q)^{-1/p}\|f\|_{L^p(w)}<\infty$ for $1<p<\infty$, and the $p=1$ analogue holds with $c_n[w]_{A_1}$; hence $f$ is integrable over every cube, i.e. locally integrable. This uses that $0<w(Q)<\infty$ for every cube from [F1]. [F1, F3, step 1.1, step 1.2, given, algebra] ∎
