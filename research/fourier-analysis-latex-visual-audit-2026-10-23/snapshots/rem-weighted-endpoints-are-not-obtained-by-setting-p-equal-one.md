---
id: rem-weighted-endpoints-are-not-obtained-by-setting-p-equal-one
kind: remark
title: Weighted endpoints are not obtained by setting p equal to one
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [def-muckenhoupt-a-p-and-a-one-weights, lem-weighted-maximal-weak-bound-for-a-one, thm-hardy-littlewood-maximal-operator-characterises-a-p, thm-calderon-zygmund-operators-are-bounded-on-weighted-lp, cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Remark 7.1.2 with (7.1.8)-(7.1.15), printed pp. 501-503, and (7.4.15)-(7.4.16) with the weak endpoint discussion, printed pp. 540-543"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "The p=1 case of Section 4.1 and Remark 4.30, printed pp. 67-69 and 83"
---

## Remark

The strong weighted estimates of this page, which are stated for
$1<p<\infty$, are not the instance $p=1$ of an $A_p$ theory, in three distinct
senses.

First, the $A_p$ condition itself degenerates at $p=1$: the factor
$w^{-1/(p-1)}$ in $[w]_{A_p}$ is undefined, and the class $A_1$ is defined
instead by the pointwise bound $M^*w\le Cw$ almost everywhere
([[def-muckenhoupt-a-p-and-a-one-weights]]). The correct replacement for the
maximal function is a weak-type estimate,
$w(\{Mf>\lambda\})\le5^n[w]_{A_1}\lambda^{-1}\int|f|w\,d\lambda$
([[lem-weighted-maximal-weak-bound-for-a-one]]), and the maximal
characterisation of $A_p$ is likewise a statement about the strict range
$1<p<\infty$ ([[thm-hardy-littlewood-maximal-operator-characterises-a-p]]).

Second, the weighted Calderón–Zygmund theorem attaches the weak $(1,1)$ bound
to the endpoint $w\in A_1$, not a strong $L^1(w)$ bound
([[thm-calderon-zygmund-operators-are-bounded-on-weighted-lp]]); its constant
depends on the $A_1$ characteristic and is not universal, exactly as in the
maximal case.

Third, the obstruction is not an artefact of the weights: already for the
Lebesgue weight $w=1$, which lies in $A_1$, the Hardy–Littlewood maximal
operator is not of strong type $(1,1)$ ([[cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one]]). Hence no strong $L^1(w)$ endpoint
can be expected for all $w\in A_1$, and the strict range $1<p<\infty$ in the
strong weighted theorems is essential.
