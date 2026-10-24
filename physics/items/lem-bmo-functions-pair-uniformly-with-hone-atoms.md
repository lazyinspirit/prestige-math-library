---
id: lem-bmo-functions-pair-uniformly-with-hone-atoms
kind: lemma
title: "BMO functions pair uniformly with H1 atoms"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-bmo-seminorm-and-quotient-by-constants, def-hp-atom-with-moment-order, def-locally-integrable-function-on-r-n]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "the first part of Definition 7.39 (the pairing $L_b(g)=\\int bg$ and its bound), printed p. 47"
---

## Statement

Let $b\in\mathrm{BMO}(\mathbb R^n)$ and let $a$ be an $H^1$ atom supported in a
cube $Q$, i.e. a $(1,\infty,0)$-atom in the sense of
[[def-hp-atom-with-moment-order]]: $a$ vanishes off $Q$, $|a|\le|Q|^{-1}$
almost everywhere and $\int a=0$. Then the integral $\int ab$ converges
absolutely and $\bigl|\int ab\bigr|\le\|b\|_{\mathrm{BMO}}$, with the bound
independent of the atom and of $Q$.

## Facts & Assumptions

**Given:** $b\in\mathrm{BMO}(\mathbb R^n)$ and a $(1,\infty,0)$-atom $a$ supported in a cube $Q$ with $|a|\le|Q|^{-1}$ almost everywhere and $\int a=0$.

[F1] The atom hypotheses are $\operatorname{supp}a\subseteq Q$, $|a|\le|Q|^{-1}$ almost everywhere and $\int_{\mathbb R^n}a=0$; an atom is bounded and compactly supported, hence locally integrable ([[def-hp-atom-with-moment-order]]).

[F2] $b\in L^1_{\mathrm{loc}}(\mathbb R^n)$, $b_Q=|Q|^{-1}\int_Qb$ and $|Q|^{-1}\int_Q|b-b_Q|\le\|b\|_{\mathrm{BMO}}$ ([[def-bmo-seminorm-and-quotient-by-constants]], [[def-locally-integrable-function-on-r-n]]).

## Proof

**Proof technique:** direct.

1.1 The product $ab$ is integrable: $a$ vanishes off the cube $Q$ and $|a|\le|Q|^{-1}$ almost everywhere by [F1], while $\int_Q|b|<\infty$ by [F2], so $\int_{\mathbb R^n}|a||b|\le|Q|^{-1}\int_Q|b|<\infty$. [F1, F2]

2.1 Because $\int a=0$ by [F1], subtracting the constant $b_Q$ changes nothing: $\int ab=\int a(b-b_Q)$, and step 1.1 makes this integral absolutely convergent. Hence $\bigl|\int ab\bigr|\le\|a\|_{L^\infty}\int_Q|b-b_Q|\le|Q|^{-1}\cdot|Q|\cdot\|b\|_{\mathrm{BMO}}=\|b\|_{\mathrm{BMO}}$, where the middle inequality uses the almost-everywhere bound on $a$ and the last one the mean-oscillation bound of [F2]. [F1, F2, step 1.1, algebra]

3.1 The estimate of step 2.1 depends only on $\|b\|_{\mathrm{BMO}}$, with no reference to the particular atom or cube, so the pairing is bounded uniformly over all $H^1$ atoms. No choice principle is used. [step 2.1] ∎ 