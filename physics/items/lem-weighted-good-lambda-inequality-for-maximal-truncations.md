---
id: lem-weighted-good-lambda-inequality-for-maximal-truncations
kind: lemma
title: Weighted good-lambda inequality for maximal truncations
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [lem-unweighted-good-lambda-local-estimate-for-maximal-truncations, lem-a-infinity-weights-satisfy-power-decay, def-muckenhoupt-a-infinity-class, def-maximal-truncated-singular-integral, thm-countable-additivity-and-set-function-continuity, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 7.4.3, the passage from (7.4.7) to (7.4.6) using condition (d) of Theorem 7.3.3, printed pp. 533-535"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 4.40 and Remark 4.42 (power decay of A_infinity weights), printed pp. 90-91"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$w\in A_\infty$ ([[def-muckenhoupt-a-infinity-class]]), let $T$ be a
standard-kernel Calderón–Zygmund operator as in the unweighted local estimate,
let $\lambda>0$, and let $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$ with the defining finiteness
property and with $\{T^{**}f>\lambda\}$ a proper open set. Then there are
$\gamma_0>0$, $C<\infty$ and $\delta'>0$, depending only on $n$, the Hölder
exponent $\delta$, a witnessing finite exponent $p$ and $[w]_{A_p}$ and the constants $A_1,A_2',A_3,B$, such
that for every $0<\gamma<\gamma_0$,
$$w\bigl(\{T^{**}f>2\lambda\}\cap\{Mf\le\gamma\lambda\}\bigr)\le C\gamma^{\delta'}w\bigl(\{T^{**}f>\lambda\}\bigr).$$
The same holds with $T^*$ throughout when its own level set $\{T^*f>\lambda\}$ is a proper open set.

## Facts & Assumptions

**Given:** Countable Choice, $w\in A_\infty$, the operator data $A_1,A_2',A_3,B,\delta$, the function $f$ and the height $\lambda$.

[F1] Unweighted local estimate: with $\Omega_\lambda=\{T^{**}f>\lambda\}$ decomposed into the Whitney cubes $Q_j$, for $\gamma<\gamma_0^{\mathrm{unw}}$ the set $E_j:=Q_j\cap\{T^{**}f>2\lambda\}\cap\{Mf\le\gamma\lambda\}$ satisfies $|E_j|\le C_n\gamma(A_1+A_2'+A_3+B)|Q_j|$; the cubes $Q_j$ are pairwise disjoint with union $\Omega_\lambda$ ([[lem-unweighted-good-lambda-local-estimate-for-maximal-truncations]]).

[F2] Power decay: since $w\in A_\infty$, there are $C_w,\eta>0$, depending only on $n$ and the $A_\infty$ data, such that $w(E)/w(Q)\le C_w(|E|/|Q|)^\eta$ for every cube $Q$ and measurable $E\subseteq Q$ ([[lem-a-infinity-weights-satisfy-power-decay]]); in particular $0<w(Q)<\infty$ for every cube.

[F3] Lebesgue measure and $w\,d\lambda$ are countably additive on pairwise disjoint measurable sets ([[thm-countable-additivity-and-set-function-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Keep the Whitney decomposition of $\Omega_\lambda$ supplied by [F1] and let $E_j$ be as there. Each $E_j$ is a measurable subset of $Q_j$ with $|E_j|\le(C_n\gamma(A_1+A_2'+A_3+B))|Q_j|$, so the power decay [F2] gives $w(E_j)\le C_w\bigl(C_n\gamma(A_1+A_2'+A_3+B)\bigr)^\eta w(Q_j)$. [F2, given, algebra]

2.1 Summing step 1.1 over the pairwise disjoint $Q_j$, whose union is $\Omega_\lambda$ by [F1], and using countable additivity [F3]: $w(\{T^{**}f>2\lambda\}\cap\{Mf\le\gamma\lambda\})=\sum_jw(E_j)\le C_wC_n^\eta(A_1+A_2'+A_3+B)^\eta\gamma^\eta\sum_jw(Q_j)=C_wC_n^\eta(A_1+A_2'+A_3+B)^\eta\gamma^\eta\,w(\Omega_\lambda)$. [F1, F3, step 1.1, given, algebra]

3.1 The display of step 2.1 is the claimed inequality with $\delta'=\eta$ and $C=C_wC_n^\eta(A_1+A_2'+A_3+B)^\eta$, valid for every $0<\gamma<\gamma_0$ with $\gamma_0=\gamma_0^{\mathrm{unw}}$ from [F1]; the same argument applies with $T^*$ in place of $T^{**}$ by applying the unweighted lemma to its own level set and Whitney decomposition. [F1, step 2.1, given, algebra] ∎
