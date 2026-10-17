---
id: cex-emg-xs-vanishing-scalars
kind: counterexample
title: Zero quadratic invariants need not mean flatness
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-emg-xs-null-wave
  - thm-emg-xs-null-wave-verification
  - prop-emg-xs-null-invariants
  - def-emg-xs-geometric-electrovac
dependency_roles:
  def-emg-xs-null-wave: mathematical-premise
  thm-emg-xs-null-wave-verification: mathematical-premise
  prop-emg-xs-null-invariants: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, curvature invariants and contractions; the explicit null electrovac witness is calculated locally.
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Sections 3-4 for curvature and Einstein-Maxwell conventions; the exact counterexample is calculated locally.
verification:
  precheck: pass
---

## Statement refuted

For every smooth source-free geometric electrovac datum, if $\mathcal F_{ab}\mathcal F^{ab}$, the scalar curvature $S$, $\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}$, and $R_{abcd}R^{abcd}$ all vanish, then $\mathcal F=0$ and the metric is flat, meaning its Riemann tensor vanishes identically as fixed in [[prop-emg-xs-null-invariants]].

## Facts & Assumptions

**Given:** The smooth null-wave electrovac family and its quadratic invariants.

[F1] [[def-emg-xs-null-wave]] defines the candidate data on $\mathbb R^4$ from smooth profiles $a,b$ and a transverse harmonic function $h$.

[F2] [[def-emg-xs-geometric-electrovac]] defines the source-free Einstein-Maxwell equations and curvature convention.

[F3] [[thm-emg-xs-null-wave-verification]] proves the defined family is a source-free geometric electrovac.

[F4] [[prop-emg-xs-null-invariants]] proves the four scalar invariants in the Statement vanish identically and gives $R_{uxux}=-P_{xx}/2$ in the defined coordinates.

[F5] [[prop-emg-xs-null-invariants]] fixes “flat” to mean that the Riemann tensor vanishes identically on the four-manifold.

[A1] Fix a constant $a_0\ne0$ with inverse-length units, and set $a(u)=a_0$, $b(u)=0$, and $h(u,x,y)=0$.

## Counterexample

1.1 The choices in [A1] satisfy the smoothness and transverse-harmonic hypotheses in [F1]. They give $P=-a_0^2(x^2+y^2)$ and $\mathcal F=a_0\,du\wedge dx$, which is nonzero. Under the definition in [F2], [F3] proves this is a smooth source-free geometric electrovac datum. [given, F1, F2, F3, A1, construct]

2.1 Applying [F4] gives $\mathcal F_{ab}\mathcal F^{ab}=S=\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=R_{abcd}R^{abcd}=0$. For the constant profile in [A1], [F3] also gives $\operatorname{Ric}_{uu}=2a_0^2\ne0$. But $P_{xx}=-2a_0^2$, so $R_{uxux}=-P_{xx}/2=a_0^2\ne0$. Thus the field and Ricci tensor are nonzero and, by [F5], the metric is not flat although all four displayed scalar invariants vanish. [given, F1, F3, F4, F5, A1, step 1.1, algebra] ∎
