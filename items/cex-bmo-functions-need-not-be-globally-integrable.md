---
id: cex-bmo-functions-need-not-be-globally-integrable
kind: counterexample
title: "A BMO function need not be globally integrable"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-multidimensional-rectangle-and-volume, ex-logarithm-is-in-bmo-but-not-linfinity, thm-monotone-convergence-for-the-integral]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Examples 3.5(2) ($\\log|x|\\in$BMO with $|x|$-growth, hence no global integrability), printed pp. 37-38"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Example 7.3, printed p. 30"
---

## Statement refuted

The claim refuted is the inclusion $\mathrm{BMO}(\mathbb R^n)\subseteq L^1(\mathbb R^n)$,
equivalently the claim that every BMO function is globally integrable. The
witness is the function $b(x)=\log|x|$ ($b(0)=0$) of
[[ex-logarithm-is-in-bmo-but-not-linfinity]], which satisfies
$\int_{\mathbb R^n}|b(x)|\,dx=+\infty$; hence
$\mathrm{BMO}(\mathbb R^n)\not\subseteq L^1(\mathbb R^n)$. Thus BMO membership alone does not guarantee a global Lebesgue pairing
$\int fb$: absolute integrability of the product $fb$ must be checked
separately. Such a pairing can exist even without cancellation of $f$.

## Facts & Assumptions

**Given:** The function $b(x)=\log|x|$ for $x\ne0$, $b(0)=0$, on $\mathbb R^n$; the cubes of [[def-multidimensional-rectangle-and-volume]].

[F1] $b\in\mathrm{BMO}(\mathbb R^n)$ and $b$ is unbounded near the origin ([[ex-logarithm-is-in-bmo-but-not-linfinity]]).

[F2] For $R_m:=4\sqrt n+m$ and the increasing closed balls $E_m:=\{x:|x|\le R_m\}$, one has $E_m\uparrow\mathbb R^n$ and $\int_{\mathbb R^n}|b|=\lim_{m\to\infty}\int_{E_m}|b|$ by monotone convergence ([[thm-monotone-convergence-for-the-integral]]).

## Counterexample

1.1 For every $m\ge1$ the cube $C_m:=[3,R_m/\sqrt n]^n$ is contained in $E_m$: every $x\in C_m$ has $|x|\ge3\sqrt n>2$ and $|x|\le\sqrt n\,(R_m/\sqrt n)=R_m$, and its volume is $|C_m|=(R_m/\sqrt n-3)^n$. On $C_m$ one has $b(x)=\log|x|\ge\log3>0$, so $|b|=b\ge\log3$ there. [F1, given]

2.1 Therefore $\int_{E_m}|b|\ge\int_{C_m}|b|\ge(\log3)|C_m|=(\log3)(R_m/\sqrt n-3)^n$, which tends to $+\infty$ as $m\to\infty$. [step 1.1, algebra]

3.1 By [F2] and step 2.1, $\int_{\mathbb R^n}|b|=\lim_{m\to\infty}\int_{E_m}|b|=+\infty$; since $b\in\mathrm{BMO}(\mathbb R^n)$ by [F1], the inclusion $\mathrm{BMO}(\mathbb R^n)\subseteq L^1(\mathbb R^n)$ is refuted. [step 2.1, F1, F2] ∎
