---
id: ex-john-nirenberg-tail-integration
kind: example
title: "Integrating the John-Nirenberg tail recovers the Lq oscillation bound"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [thm-john-nirenberg-exponential-inequality, cor-bmo-lp-oscillation-norms-are-equivalent, def-bmo-seminorm-and-quotient-by-constants, thm-layer-cake-formula-for-l-p-powers, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "(7.10) (the layer-cake computation from the exponential bound), printed p. 32"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 3.28 proof, printed pp. 53-54"
---

## Example

Assume Countable Choice ([[def-countable-choice]]).

Let $b\in\mathrm{BMO}(\mathbb R^n)$, $1\le q<\infty$ and let $Q$ be a cube.
Using the layer-cake formula and the John-Nirenberg exponential bound,
$|Q|^{-1}\int_Q|b-b_Q|^q=q\int_0^\infty\lambda^{q-1}|Q|^{-1}|\{x\in Q:|b(x)-b_Q|>\lambda\}|\,d\lambda\le C_{n,q}\|b\|_{\mathrm{BMO}}^q$,
with the zero-seminorm case giving $0$; this is the mechanism behind the
equivalence of the $L^q$ oscillation seminorms.

## Facts & Assumptions

**Given:** Countable Choice, $b\in\mathrm{BMO}(\mathbb R^n)$, $1\le q<\infty$ and a cube $Q$, with the mean and seminorm of [[def-bmo-seminorm-and-quotient-by-constants]].

[L1] The layer-cake formula applies to the measurable function $|b-b_Q|$ on the finite-measure cube $Q$: for $0<q<\infty$, $\int_Q|b-b_Q|^q=q\int_0^\infty\lambda^{q-1}|\{x\in Q:|b-b_Q|>\lambda\}|\,d\lambda$ ([[thm-layer-cake-formula-for-l-p-powers]]).

[L2] There are $c_n,C_n\in(0,\infty)$ with $|\{x\in Q:|b-b_Q|>\lambda\}|\le C_n|Q|e^{-c_n\lambda/\|b\|_{\mathrm{BMO}}}$ for every $\lambda>0$; if $\|b\|_{\mathrm{BMO}}=0$ then $b$ is constant almost everywhere and the set is null for every $\lambda>0$ ([[thm-john-nirenberg-exponential-inequality]], [[def-bmo-seminorm-and-quotient-by-constants]]).

[L3] The resulting bound is the same one that establishes the equivalence of $\|b\|_{\mathrm{BMO},q}:=\sup_Q\bigl(|Q|^{-1}\int_Q|b-b_Q|^q\bigr)^{1/q}$ with $\|b\|_{\mathrm{BMO}}$ ([[cor-bmo-lp-oscillation-norms-are-equivalent]]).

## Verification

**Proof technique:** direct.

1.1 Writing $A(\lambda):=|Q|^{-1}|\{x\in Q:|b-b_Q|>\lambda\}|$, [L1] divided by $|Q|$ gives the identity $|Q|^{-1}\int_Q|b-b_Q|^q=q\int_0^\infty\lambda^{q-1}A(\lambda)\,d\lambda$. [L1, algebra]

2.1 If $\|b\|_{\mathrm{BMO}}>0$, [L2] bounds $A(\lambda)\le C_ne^{-c_n\lambda/\|b\|_{\mathrm{BMO}}}$ for every $\lambda>0$, so the integral of step 1.1 is at most $qC_n\int_0^\infty\lambda^{q-1}e^{-c_n\lambda/\|b\|_{\mathrm{BMO}}}d\lambda=qC_n\|b\|_{\mathrm{BMO}}^q\int_0^\infty\mu^{q-1}e^{-c_n\mu}d\mu$ after the substitution $\lambda=\mu\|b\|_{\mathrm{BMO}}$; the last integral is finite, so with $C_{n,q}:=qC_n\int_0^\infty\mu^{q-1}e^{-c_n\mu}d\mu$ the asserted bound follows. [step 1.1, L2, algebra]

3.1 If $\|b\|_{\mathrm{BMO}}=0$, then $b$ is constant almost everywhere by [L2], so $A(\lambda)=0$ for every $\lambda>0$ and the integral of step 1.1 vanishes; in particular the bound of step 2.1 holds with both sides $0$ for any finite $C_{n,q}$. [step 1.1, L2]

4.1 Steps 2.1 and 3.1 give $|Q|^{-1}\int_Q|b-b_Q|^q\le C_{n,q}\|b\|_{\mathrm{BMO}}^q$ for every cube, which is exactly the per-cube upper bound used in [L3]: taking $q$-th roots and the supremum over $Q$ yields the equivalence of the $L^q$ oscillation seminorms with the BMO seminorm. [step 2.1, step 3.1, L3] ∎ 