---
id: def-covariant-function-model-of-unitary-induction
kind: definition
title: "Continuous covariant model and measurable completion"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-strongly-continuous-unitary-representation, thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h, thm-monotone-convergence-for-the-integral]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
    - title: "David Vogan, Unitary Representations of Locally Compact Groups and Induced Representations"
      url: "https://math.mit.edu/~dav/ind.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume AC. For a strongly continuous unitary $\sigma:H\to U(V)$, let $C_c(G,H;V)$ be continuous $F:G\to V$ with $F(xh)=\sigma(h)^{-1}F(x)$ and compact support modulo $H$. Equip it with $\int_{G/H}\|F(x)\|^2d\mu_\rho(xH)$ and take its Hilbert completion. Every completed vector admits a locally strongly measurable covariant representative, and two such representatives define the same vector exactly when they agree $\mu_\rho$-almost everywhere in quotient norm.

## Facts & Assumptions

**Given:** AC, closed $H\le G$, a strongly continuous unitary representation $\sigma$ on a Hilbert space $V$, and the rho-derived Radon measure $\mu_\rho$.

[F1] $\sigma(h)$ is unitary, so it preserves norms ([[def-strongly-continuous-unitary-representation]]).

[F2] The quotient is LCH and $\mu_\rho$ is Radon ([[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]]).

[F3] Monotone convergence applies to increasing nonnegative measurable functions ([[thm-monotone-convergence-for-the-integral]]).

[A1] AC is inherited from the quotient-measure construction ([[def-axiom-of-choice]]).

## Definition

A continuous $F:G\to V$ is covariant if $F(xh)=\sigma(h)^{-1}F(x)$. Its norm descends to $G/H$ by unitarity. “Compact support modulo $H$” means this descended norm vanishes outside a compact quotient subset. The Hilbert space in the statement is the completion of this normed space, with inner product obtained by integrating the descended pointwise inner product.

## Proof

**Proof technique:** direct.

1.1 For two covariant sections, [F1] gives $\|F_1(xh)-F_2(xh)\|=\|F_1(x)-F_2(x)\|$. Thus their difference norm descends continuously to $G/H$. Compact support modulo $H$ and Radon finiteness on compact sets make its square integrable, so the stated norm is well-defined. [F1, F2]
1.2 Let $(F_n)$ be Cauchy in this norm. Choose a subsequence $(F_{n_k})$ such that $\sum_k\|F_{n_{k+1}}-F_{n_k}\|_2<\infty$. The partial sums $S_m(q)=\sum_{k<m}\|F_{n_{k+1}}(x)-F_{n_k}(x)\|$, with $q=xH$, satisfy $\|S_m\|_2\le\sum_k\|F_{n_{k+1}}-F_{n_k}\|_2$ by Minkowski. By [F3] and monotone convergence, $S=\lim_m S_m$ is finite almost everywhere and has finite $L^2$ norm. Its infinite-value set is a measurable null set in $G/H$. Outside its saturated preimage, the sections are pointwise Cauchy for every lift and converge to a covariant function $F$; set $F=0$ on the null fibers. On each compact neighborhood in $G$, the continuous approximants have jointly separable range, so their pointwise limit is locally strongly measurable. The $L^2$ norm of the tail is bounded by the tail of the same summable series, again by Minkowski and monotone convergence. Thus the embedded $L^2$ classes converge to $F$, which represents the original completion vector. [A1, F3, choose, construct]
2.1 Equivalent Cauchy sequences have difference norm zero and so have representatives equal almost everywhere. Conversely, representatives equal almost everywhere have zero difference norm, hence define the same completion vector. This proves the asserted identification. ∎ [F1, F2, step 1.1, step 1.2, algebra]



## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix E §E.1 and Remark E.1.2, PDF pp. 411–413; Vogan, *On the Definition of Induced Representations*, §§1–4. Relevant portions were inspected.
