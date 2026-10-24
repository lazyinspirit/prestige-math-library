---
id: thm-residue-evaluation-rational-fourier-integrals
kind: theorem
title: "Rational Fourier integrals are evaluated by residues and Jordan's lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [rem-cauchy-principal-value-dictionary,
       def-standard-residue-contours,
       thm-residue-theorem-null-homologous-cycle,
       lem-jordans-lemma-rational-functions,
       lem-indented-arc-residue-limit]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3 §2.1"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.4"
      url: "https://complexanalysis.org/web/ch_residue.html"
pipeline_run: null
---

## Statement

Let $\lambda\ne0$ and let $R$ be a rational function such that $zR(z)\to0$ as
$|z|\to\infty$, with at most simple poles on the real axis. Then the oscillatory
integral

$\int_{-\infty}^{\infty}e^{i\lambda x}R(x)\,dx$

is evaluated by closing in the upper half-plane when $\lambda>0$ and in the
lower half-plane when $\lambda<0$. More precisely:

- if $\lambda>0$ and $R$ has no real poles, then
  $\int_{-\infty}^{\infty}e^{i\lambda x}R(x)\,dx =2\pi i\sum_{\Im a>0}\operatorname{Res}(e^{i\lambda z}R(z),a);$
- if $\lambda<0$ and $R$ has no real poles, then
  $\int_{-\infty}^{\infty}e^{i\lambda x}R(x)\,dx =-2\pi i\sum_{\Im a<0}\operatorname{Res}(e^{i\lambda z}R(z),a);$
- if the real poles $a_j$ are simple, then
  $$\operatorname{PV}\!\int_{-\infty}^{\infty}e^{i\lambda x}R(x)\,dx=2\pi i\sum_{\Im a>0}\operatorname{Res}(e^{i\lambda z}R(z),a)+i\pi\sum_j\operatorname{Res}(e^{i\lambda z}R(z),a_j)$$
  when $\lambda>0$, while for $\lambda<0$ it equals
  $$-2\pi i\sum_{\Im a<0}\operatorname{Res}(e^{i\lambda z}R(z),a)-i\pi\sum_j\operatorname{Res}(e^{i\lambda z}R(z),a_j).$$

## Facts & Assumptions

**Given:** A nonzero real $\lambda$ and a rational function $R$ with $zR(z)\to0$ at infinity and at most simple poles on the real axis.

[L1] For $\lambda>0$, Jordan's lemma kills the upper large semicircle for $e^{i\lambda z}R(z)$, and after replacing $z$ by $\bar z$ it kills the lower large semicircle for $\lambda<0$ as well ([[lem-jordans-lemma-rational-functions]]).

[L2] The residue theorem evaluates the closed contour integral by the enclosed residues ([[thm-residue-theorem-null-homologous-cycle]]).

[L3] Indentation arcs around simple real poles contribute the signed half-residue terms ([[lem-indented-arc-residue-limit]]).

[L4] The real-axis indentation formulas compute principal values, not automatic improper convergence ([[rem-cauchy-principal-value-dictionary]]).

## Proof

**Proof technique:** cases.

1.1 Assume first that $\lambda>0$ and that $R$ has no real pole. Apply [L2] to [assume-case positive, L1, L2] the contour formed by $[-T,T]$ and the upper semicircle. The arc term tends to $0$ by, so the real-line integral is the sum of the residues of $e^{i\lambda z}R(z)$ in the upper half-plane. [L1]

1.2 If $\lambda<0$ and $R$ has no real pole, close instead by the lower semicircle. The same computation gives a minus sign because the positively oriented contour now traverses the real segment from $T$ back to $-T$, so the real integral equals $-2\pi i$ times the sum of the residues in the lower half-plane. [assume-case negative, L1, L2]

1.3 If $R$ has simple real poles and $\lambda>0$, indent them above the axis. Each indentation excludes its pole and contributes $-i\pi$ times its residue by [L3]; the residue theorem therefore gives the first displayed principal-value formula. If $\lambda<0$, use lower indentations and the lower semicircle. Each indentation contributes $+i\pi$ times its residue, while the clockwise outer contour contributes $-2\pi i$ times the lower-half-plane residue sum, giving the second formula. [assume-case realpoles, L1, L2, L3, L4]

2.1 Steps 1.1, 1.2, and 1.3 prove all cases listed in the statement. [step 1.1, step 1.2, step 1.3, cases-exhaustive] ∎
