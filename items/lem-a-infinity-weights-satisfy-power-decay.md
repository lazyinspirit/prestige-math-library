---
id: lem-a-infinity-weights-satisfy-power-decay
kind: lemma
title: A_infinity weights satisfy power decay
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [thm-reverse-holder-self-improvement-for-a-p-weights, def-muckenhoupt-a-infinity-class, thm-holder-inequality-for-integrals, def-real-power, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Proposition 7.2.8 and its proof, printed p. 521; the implication (c) implies (d) in Theorem 7.3.3, printed pp. 528-529"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 4.40, (3) implies (1), printed p. 91"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$w\in A_\infty$ ([[def-muckenhoupt-a-infinity-class]]). Then there are
$C,\delta>0$, depending only on $n$, on a witnessing exponent $p$ and on
$[w]_{A_p}$, such that
$$\frac{w(E)}{w(Q)}\le C\Bigl(\frac{|E|}{|Q|}\Bigr)^\delta$$
for every axis-parallel cube $Q$ and every measurable $E\subseteq Q$.
Explicitly one may take $\delta=\gamma/(1+\gamma)$ and $C=C_1$, where
$1+\gamma$ and $C_1$ are the reverse Hölder exponent and constant supplied for
a witnessing $A_p$ weight.

## Facts & Assumptions

**Given:** Countable Choice, $w\in A_\infty$, a witnessing exponent $p$ with $w\in A_p$, a reverse Hölder pair $(1+\gamma,C_1)$, a cube $Q$ and a measurable $E\subseteq Q$.

[F1] $w\in A_\infty$ means $w\in A_p$ for some $1\le p<\infty$, and then $0<w(Q)<\infty$ for every cube $Q$ ([[def-muckenhoupt-a-infinity-class]]).

[F2] The reverse Hölder theorem applied to a fixed $0<\alpha<1$ gives $\gamma>0$ and $C_1<\infty$, depending only on $n,p,[w]_{A_p}$ and $\alpha$, with $(\langle w^{1+\gamma}\rangle_Q)^{1/(1+\gamma)}\le C_1\langle w\rangle_Q$ for every cube ([[thm-reverse-holder-self-improvement-for-a-p-weights]]).

[F3] Hölder's inequality: for a measurable set $E$, $\int_Ew\,d\lambda\le \bigl(\int_Qw^{1+\gamma}d\lambda\bigr)^{1/(1+\gamma)}|E|^{\gamma/(1+\gamma)}$ (the exponents $1+\gamma$ and $(1+\gamma)/\gamma$ are conjugate) ([[thm-holder-inequality-for-integrals]], [[def-real-power]]).

## Proof

**Proof technique:** direct.

1.1 Since $w\in A_\infty$, there is a witnessing exponent $p$ with $w\in A_p$ by [F1]; applying [F2] produces $\gamma>0$ and $C_1$ with the normalized reverse Hölder inequality. [F1, F2, given]

2.1 For the cube $Q$ and measurable $E\subseteq Q$, Hölder's inequality [F3] gives $w(E)\le\bigl(\int_Qw^{1+\gamma}\bigr)^{1/(1+\gamma)}|E|^{\gamma/(1+\gamma)}$; the reverse Hölder inequality bounds the first factor by $C_1\langle w\rangle_Q|Q|^{1/(1+\gamma)}=C_1w(Q)|Q|^{-\gamma/(1+\gamma)}$, so $w(E)\le C_1w(Q)(|E|/|Q|)^{\gamma/(1+\gamma)}$. [F2, F3, step 1.1, given, algebra]

3.1 Dividing by $w(Q)\in(0,\infty)$ gives $w(E)/w(Q)\le C(|E|/|Q|)^\delta$ with $C=C_1$ and $\delta=\gamma/(1+\gamma)>0$, and both constants depend only on $n$, the witnessing exponent $p$ and $[w]_{A_p}$ (and on the auxiliary $\alpha$, which is fixed in the construction). [F1, step 2.1, given, algebra] ∎
