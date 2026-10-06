---
id: cor-bmo-lp-oscillation-norms-are-equivalent
kind: corollary
title: "BMO oscillation norms in Lq are equivalent"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-bmo-seminorm-and-quotient-by-constants, thm-john-nirenberg-exponential-inequality, thm-layer-cake-formula-for-l-p-powers, thm-holder-inequality-for-integrals, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 7.6 and (7.10), printed p. 32"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 3.28 (equivalence of $\\|\\cdot\\|_{*,p}$ and $\\|\\cdot\\|_*$), printed pp. 53-54"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Corollary 3.6, printed p. 13"
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice ([[def-countable-choice]]).

Let $1\le q<\infty$ and for $b\in L^1_{\mathrm{loc}}(\mathbb R^n)$ put
$\|b\|_{\mathrm{BMO},q}:=\sup_Q\bigl(|Q|^{-1}\int_Q|b-b_Q|^q\bigr)^{1/q}\in[0,\infty]$,
the supremum over all cubes. Then there are constants
$0<c_{n,q}\le C_{n,q}<\infty$ such that
$c_{n,q}\|b\|_{\mathrm{BMO}}\le\|b\|_{\mathrm{BMO},q}\le C_{n,q}\|b\|_{\mathrm{BMO}}$
for every $b\in\mathrm{BMO}(\mathbb R^n)$; indeed
$\bigl(|Q|^{-1}\int_Q|b-b_Q|^q\bigr)^{1/q}\le C_{n,q}\|b\|_{\mathrm{BMO}}$ for
every cube $Q$. In particular every $\mathrm{BMO}$ function lies in
$L^q_{\mathrm{loc}}(\mathbb R^n)$.

## Facts & Assumptions

**Given:** Countable Choice, $1\le q<\infty$, a function $b\in L^1_{\mathrm{loc}}(\mathbb R^n)$, a cube $Q$, and the mean and seminorm of [[def-bmo-seminorm-and-quotient-by-constants]].

[F1] The mean is $b_Q=|Q|^{-1}\int_Qb$ and $\|b\|_{\mathrm{BMO}}=\sup_Q|Q|^{-1}\int_Q|b-b_Q|$; the seminorm vanishes exactly on the almost-everywhere constants ([[def-bmo-seminorm-and-quotient-by-constants]]).

[F2] Holder's inequality on the finite-measure cube $Q$, applied to the nonnegative functions $|b-b_Q|$ and $1$, gives $|Q|^{-1}\int_Q|b-b_Q|\le\bigl(|Q|^{-1}\int_Q|b-b_Q|^q\bigr)^{1/q}$ for $1\le q<\infty$ ([[thm-holder-inequality-for-integrals]]); if the right-hand side is infinite the inequality is immediate, and $q=1$ is equality.

[F3] The layer-cake formula gives $|Q|^{-1}\int_Q|b-b_Q|^q=q\int_0^\infty\lambda^{q-1}|Q|^{-1}|\{x\in Q:|b-b_Q|>\lambda\}|\,d\lambda$ ([[thm-layer-cake-formula-for-l-p-powers]]).

[F4] There are constants $c_n,C_n\in(0,\infty)$ with $|\{x\in Q:|b-b_Q|>\lambda\}|\le C_n|Q|e^{-c_n\lambda/\|b\|_{\mathrm{BMO}}}$ for every $\lambda>0$, the zero-seminorm case giving the value $0$ ([[thm-john-nirenberg-exponential-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Lower bound. By [F2], $|Q|^{-1}\int_Q|b-b_Q|\le\bigl(|Q|^{-1}\int_Q|b-b_Q|^q\bigr)^{1/q}$ for every cube $Q$; taking the supremum over all cubes gives $\|b\|_{\mathrm{BMO}}\le\|b\|_{\mathrm{BMO},q}$, so $c_{n,q}=1$ is admissible. [F1, F2]

1.2 Upper bound for a fixed cube. If $\|b\|_{\mathrm{BMO}}>0$, [F4] inserted into the layer-cake formula [F3] gives $|Q|^{-1}\int_Q|b-b_Q|^q\le qC_n\int_0^\infty\lambda^{q-1}e^{-c_n\lambda/\|b\|_{\mathrm{BMO}}}\,d\lambda=qC_n\|b\|_{\mathrm{BMO}}^q\int_0^\infty\mu^{q-1}e^{-c_n\mu}\,d\mu$ after the substitution $\lambda=\mu\|b\|_{\mathrm{BMO}}$; the last integral is finite because $\mu^{q-1}e^{-c_n\mu}$ is integrable on $(0,\infty)$. If $\|b\|_{\mathrm{BMO}}=0$ the left-hand side is $0$ by [F1], so the same estimate holds with either side zero. [F3, F4, F1, algebra]

2.1 With $K_{n,q}:=\bigl(qC_n\int_0^\infty\mu^{q-1}e^{-c_n\mu}d\mu\bigr)^{1/q}<\infty$, step 1.2 gives $\bigl(|Q|^{-1}\int_Q|b-b_Q|^q\bigr)^{1/q}\le K_{n,q}\|b\|_{\mathrm{BMO}}$ for every cube $Q$, and taking the supremum over $Q$ gives $\|b\|_{\mathrm{BMO},q}\le K_{n,q}\|b\|_{\mathrm{BMO}}$; so $C_{n,q}=K_{n,q}$ is admissible. Both constants depend only on $n$ and $q$. [step 1.2, step 1.1, algebra]

3.1 Finally, for $b\in\mathrm{BMO}(\mathbb R^n)$ and a cube $Q$ one has $|b|\le|b-b_Q|+|b_Q|$, hence $\int_Q|b|^q\le2^{q-1}\bigl(\int_Q|b-b_Q|^q+|Q||b_Q|^q\bigr)<\infty$ by step 2.1 and the finiteness of the local mean $b_Q$; every compact set is covered by finitely many cubes, so $b\in L^q_{\mathrm{loc}}(\mathbb R^n)$. [step 2.1, F1] ∎ 