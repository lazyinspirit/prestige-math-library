---
id: lem-power-decay-implies-a-p-membership
kind: lemma
title: Power decay implies membership in some A_p
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [def-weight-and-weighted-lp-space, lem-power-decay-weights-are-doubling, lem-reverse-holder-from-a-distribution-estimate, def-muckenhoupt-a-p-and-a-one-weights, def-muckenhoupt-a-infinity-class, def-real-power, def-dependent-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 7.3.3, the chain (d) implies (e) implies (f) and the equivalence with the union of the A_p classes, printed pp. 527-530"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 4.40, the implication (1) implies (2) with Lemma 4.36, printed pp. 86-91"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $w$ be a
weight on $\mathbb R^n$ ([[def-weight-and-weighted-lp-space]]) and suppose
there are constants $C,\delta>0$ with
$$\frac{w(E)}{w(Q)}\le C\Bigl(\frac{|E|}{|Q|}\Bigr)^\delta$$
for every axis-parallel cube $Q$ and every measurable $E\subseteq Q$. Then
$w\in A_p$ ([[def-muckenhoupt-a-p-and-a-one-weights]]) for
$p=1+1/\gamma<\infty$, where $\gamma>0$ and the resulting bound on $[w]_{A_p}$
depend only on $n,C,\delta$; consequently $w\in A_\infty$
([[def-muckenhoupt-a-infinity-class]]).

## Facts & Assumptions

**Given:** Dependent Choice, a weight $w$, constants $C,\delta>0$ with the displayed power decay, and a cube $Q$.

[F1] $w\,d\lambda$ is a locally finite measure with $0<w(Q)<\infty$ for every cube $Q$; subsets have smaller measure, and $w(\varnothing)=0$ ([[def-weight-and-weighted-lp-space]]).

[F2] Power decay implies that $w\,d\lambda$ is doubling, with a doubling constant depending only on $n,C,\delta$ ([[lem-power-decay-weights-are-doubling]]).

[F3] Reverse Hölder from a distribution estimate: if $\mu$ is a doubling measure of the form $v\,d\lambda$ and $h\ge0$ is measurable with $hv\in L^1_{\mathrm{loc}}(\lambda)$ and with $\mu(S)\le\alpha\mu(Q)\Rightarrow\int_Sh\,d\mu\le\beta\int_Qh\,d\mu$ for some $0<\alpha,\beta<1$ and every cube $Q$ and measurable $S\subseteq Q$, then there are $q>1$ and $c<\infty$, depending only on $n$, the doubling constant of $\mu$, $\alpha$ and $\beta$, with $\bigl(\mu(Q)^{-1}\int_Qh^q\,d\mu\bigr)^{1/q}\le c\,\mu(Q)^{-1}\int_Qh\,d\mu$ for every cube $Q$ ([[lem-reverse-holder-from-a-distribution-estimate]], [[def-dependent-choice]]).

[F4] For real exponents, $1-q=-(q-1)$ and $p=q/(q-1)=1+1/(q-1)$ satisfies $p-1=1/(q-1)$ and $p'=q$ ([[def-real-power]]).

## Proof

**Proof technique:** direct.

1.1 The density implication. Put $\beta:=1-\min\{\tfrac12,(2C)^{-1/\delta}\}\in(0,1)$ and let $S\subseteq Q$ be measurable with $w(S)\le\tfrac12w(Q)$. Then $|S|\le\beta|Q|$: otherwise $|Q\setminus S|<(1-\beta)|Q|\le(2C)^{-1/\delta}|Q|$, so power decay applied to the complement gives $w(Q\setminus S)<\tfrac12w(Q)$, whence $w(S)>\tfrac12w(Q)$, a contradiction. Equivalently, writing $\mu:=w\,d\lambda$ and $h:=w^{-1}$, the hypothesis of [F3] holds with $\alpha=\tfrac12$ and this $\beta$: $\mu(S)\le\alpha\mu(Q)$ implies $\int_Sh\,d\mu=|S|\le\beta|Q|=\beta\int_Qh\,d\mu$. [F1, given, algebra]

2.1 Applying the reverse Hölder lemma. The measure $\mu=w\,d\lambda$ is doubling by [F2], and $h=w^{-1}\ge0$ has $\int_Qh\,d\mu=|Q|<\infty$ for every cube, so $hw\in L^1_{\mathrm{loc}}(\lambda)$; step 1.1 supplies the density implication with $\alpha=\tfrac12$ and $\beta<1$. By [F3] there are $q>1$ and $c<\infty$, depending only on $n$, the doubling constant of $w$, and hence only on $n,C,\delta$, such that, for every cube $Q$, $\bigl(w(Q)^{-1}\int_Qw^{1-q}\,d\lambda\bigr)^{1/q}\le c\,|Q|/w(Q)$, since $h^q\,d\mu=w^{-q}\cdot w\,d\lambda=w^{1-q}\,d\lambda$ and $\int_Qh\,d\mu=|Q|$. [F2, F3, step 1.1, given, algebra]

3.1 From the reverse Hölder estimate to $A_p$. Put $\gamma:=q-1>0$ and $p:=q/(q-1)=1+1/\gamma$, so that $p-1=1/\gamma$ and $w^{-1/(p-1)}=w^{-\gamma}$; write $I:=w(Q)^{-1}\int_Qw^{-\gamma}\,d\lambda=\langle w^{-\gamma}\rangle_Q/\langle w\rangle_Q$. Step 2.1 reads $I^{1/q}\le c\langle w\rangle_Q^{-1}$, hence $I^{1/\gamma}\le(c\langle w\rangle_Q^{-1})^{q/\gamma}=c^p\langle w\rangle_Q^{-p}$ by [F4], since $q/\gamma=q/(q-1)=p$. Multiplying by $\langle w\rangle_Q^{p}$ and using $\langle w\rangle_Q^{p}I^{1/\gamma}=\langle w\rangle_Q^{1+1/\gamma}\bigl(\langle w^{-\gamma}\rangle_Q/\langle w\rangle_Q\bigr)^{1/\gamma}=\langle w\rangle_Q\langle w^{-\gamma}\rangle_Q^{1/\gamma}$ gives $\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}=\langle w\rangle_Q\langle w^{-\gamma}\rangle_Q^{1/\gamma}\le c^p$ for every cube $Q$. Therefore $[w]_{A_p}\le c^p<\infty$, that is, $w\in A_p$, and $w\in A_\infty$ by the definition of the latter as the union of the finite-exponent classes. [F4, step 2.1, given, algebra] ∎
