---
id: thm-a-infinity-power-decay-characterisation
kind: theorem
title: The A_infinity power-decay characterisation
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 11
deps: [def-muckenhoupt-a-infinity-class, def-muckenhoupt-a-p-and-a-one-weights, def-weight-and-weighted-lp-space, lem-a-infinity-weights-satisfy-power-decay, lem-power-decay-implies-a-p-membership, thm-reverse-holder-self-improvement-for-a-p-weights, thm-holder-inequality-for-integrals, def-real-power, def-dependent-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 7.3.3 with its equivalence chain and Corollary 7.3.4, printed pp. 527-530"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 4.40 with the equivalence of power decay, membership in some finite A_p class and reverse Hölder, printed pp. 90-92"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $w$ be a
weight on $\mathbb R^n$ ([[def-weight-and-weighted-lp-space]]). Then the
following are equivalent:

1. $w\in A_\infty$ ([[def-muckenhoupt-a-infinity-class]]), that is, $w\in A_p$
   ([[def-muckenhoupt-a-p-and-a-one-weights]]) for some $1\le p<\infty$;
2. there are $C,\delta>0$ with
   $w(E)/w(Q)\le C(|E|/|Q|)^\delta$ for every axis-parallel cube $Q$ and every
   measurable $E\subseteq Q$;
3. $w$ satisfies a reverse Hölder inequality: there are $\gamma>0$ and
   $C<\infty$ with
   $\bigl(\langle w^{1+\gamma}\rangle_Q\bigr)^{1/(1+\gamma)}\le C\langle w\rangle_Q$
   for every axis-parallel cube $Q$.

All constants in each condition depend only on $n$ and on the constants
appearing in the assumed condition.

## Facts & Assumptions

**Given:** Dependent Choice; a weight $w$; the three conditions (i), (ii), (iii) of the statement.

[F1] (i) implies (ii): for $w\in A_\infty$ there are $C,\delta>0$, depending only on $n$, a witnessing exponent $p$ and $[w]_{A_p}$, with $w(E)/w(Q)\le C(|E|/|Q|)^\delta$ for every cube $Q$ and measurable $E\subseteq Q$ ([[lem-a-infinity-weights-satisfy-power-decay]]).

[F2] (ii) implies (i): power decay with constants $C,\delta$ forces $w\in A_p$ for $p=1+1/\gamma<\infty$ with $\gamma>0$ and the bound on $[w]_{A_p}$ depending only on $n,C,\delta$, hence $w\in A_\infty$ ([[lem-power-decay-implies-a-p-membership]]).

[F3] (i) implies (iii): for $1\le p<\infty$ and $w\in A_p$ there are $\gamma>0$ and $C<\infty$, depending only on $n$, $p$ and $[w]_{A_p}$, with $\bigl(\langle w^{1+\gamma}\rangle_Q\bigr)^{1/(1+\gamma)}\le C\langle w\rangle_Q$ for every cube $Q$ ([[thm-reverse-holder-self-improvement-for-a-p-weights]]); this is applied to a witnessing exponent of $A_\infty$.

[F4] Hölder's inequality for the conjugate exponents $1+\gamma$ and $(1+\gamma)/\gamma$: $\int_Ew\,d\lambda\le \bigl(\int_Qw^{1+\gamma}\,d\lambda\bigr)^{1/(1+\gamma)} |E|^{\gamma/(1+\gamma)}$ for measurable $E\subseteq Q$; all cube averages are those of [[def-muckenhoupt-a-p-and-a-one-weights]] and $(1+\gamma)/\gamma>1$ is a real exponent ([[thm-holder-inequality-for-integrals]], [[def-real-power]]).

## Proof

**Proof technique:** direct.

1.1 (i) implies (ii). If $w\in A_\infty$, then $w\in A_p$ for a witnessing $1\le p<\infty$, and [F1] supplies $C,\delta>0$, depending only on $n$, $p$ and $[w]_{A_p}$, with $w(E)/w(Q)\le C(|E|/|Q|)^\delta$ for every cube $Q$ and measurable $E\subseteq Q$. [F1, given]

1.2 (ii) implies (i). If power decay holds with constants $C,\delta$, then [F2] gives $\gamma>0$ and $p=1+1/\gamma<\infty$ with $w\in A_p$ and $[w]_{A_p}$ bounded in terms of $n,C,\delta$; by the definition of $A_\infty$ as the union of the classes $A_p$, $1\le p<\infty$, this is (i). [F2, given]

1.3 (i) implies (iii). Let $w\in A_p$ with witnessing exponent $p$, which may be taken finite by (i). By [F3] there are $\gamma>0$, $C<\infty$, depending only on $n$, $p$ and $[w]_{A_p}$, with $(\langle w^{1+\gamma}\rangle_Q)^{1/(1+\gamma)}\le C\langle w\rangle_Q$ for every cube $Q$, which is condition (iii). [F3, given]

1.4 (iii) implies (ii). Suppose (iii) holds with $\gamma>0$ and $C$. For a cube $Q$ and measurable $E\subseteq Q$, [F4] gives $\int_Ew\,d\lambda\le(\int_Qw^{1+\gamma}\,d\lambda)^{1/(1+\gamma)}|E|^{\gamma/(1+\gamma)}$; substituting $\int_Qw^{1+\gamma}\,d\lambda=|Q|\langle w^{1+\gamma}\rangle_Q\le C^{1+\gamma}w(Q)^{1+\gamma}|Q|^{-\gamma}$ (the $(1+\gamma)$-th power of the reverse Hölder inequality, since $\langle w\rangle_Q=w(Q)/|Q|$) yields $w(E)\le Cw(Q)(|E|/|Q|)^{\gamma/(1+\gamma)}$, that is, (ii) with this same $C$ and $\delta=\gamma/(1+\gamma)$. [F4, given, algebra]

2.1 The cycles (i) $\Rightarrow$ (ii) $\Rightarrow$ (i) of steps 1.1 and 1.2 and (i) $\Rightarrow$ (iii) $\Rightarrow$ (ii) of steps 1.3 and 1.4 exhibit each of the three conditions as equivalent to the others; the constants recorded in steps 1.1, 1.2, 1.3 and 1.4 depend only on $n$ and on the constants appearing in the assumed condition, as claimed. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
