---
id: lem-type-iib-pform-kinetic-metric-variation
kind: lemma
title: Metric Variation of a Differential Form Kinetic Term
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
- def-smooth-manifold
- def-smooth-tensor-field
- def-bilinear-symmetric-skew-and-alternating-forms
- def-smooth-differential-k-form
- def-contraction-of-a-mixed-tensor
- lem-cm-determinant-derivative-along-a-matrix-curve
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-smooth-tensor-field: mathematical-premise
  def-bilinear-symmetric-skew-and-alternating-forms: mathematical-premise
  def-contraction-of-a-mixed-tensor: mathematical-premise
  lem-cm-determinant-derivative-along-a-matrix-curve: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
    url: https://arxiv.org/pdf/gr-qc/9712019v1
    locator: §4, equations (4.64)–(4.66), PDF pp. 123–124; tensor-index metric variation is derived locally for any form degree.
aliases: []
---

## Statement

Let $U\subseteq\mathbb R^n$ be an open oriented coordinate domain. For $s$ in an open interval about $0$, let $g(s)$ be a jointly smooth family of smooth nondegenerate metrics on $U$ of the same signature as $g(0)=g$, equal to $g$ outside one fixed compact set. Put $q^{MN}:=\left.\partial_sg(s)^{MN}\right|_{s=0}$. Let $F$ be a fixed smooth covariant $p$-form and let $A$ be a smooth scalar independent of $s$. Define $|F|_g^2=F_{M_1\ldots M_p}F^{M_1\ldots M_p}/p!$ and $\langle i_MF,i_NF\rangle_g=F_{M A_2\ldots A_p}F_N{}^{A_2\ldots A_p}/(p-1)!$ for $p\ge1$. The pointwise derivative at $s=0$ is

$\delta\left(\sqrt{|\det g|}\,A|F|_g^2\right)=\sqrt{|\det g|}\,A\left(\langle i_MF,i_NF\rangle_g-\frac12g_{MN}|F|_g^2\right)q^{MN}.$

For $p=0$, the first term in parentheses is defined as zero and the same formula holds.

## Statement references

[[def-smooth-manifold]]

[[def-smooth-tensor-field]]

[[def-smooth-differential-k-form]]

[[def-contraction-of-a-mixed-tensor]]

[[lem-cm-determinant-derivative-along-a-matrix-curve]]

## Facts & Assumptions

**Given:** The metric, fixed covariant form $F$, metric-independent scalar $A$, and symmetric inverse-metric variation $q$ in the Statement.

[F1] [[lem-cm-determinant-derivative-along-a-matrix-curve]]: $\delta\sqrt{|\det g|}=-\tfrac12\sqrt{|\det g|}g_{MN}q^{MN}$ for $q^{MN}=\delta g^{MN}$.

[F2] [[def-smooth-differential-k-form]] and [[def-contraction-of-a-mixed-tensor]]: components of a $p$-form are alternating covariant arrays; raising its indices uses one inverse metric in each covariant slot.

## Proof

1.1 For $p\ge1$, write $|F|^2=(1/p!)F_{M_1\ldots M_p}F_{N_1\ldots N_p}g^{M_1N_1}\cdots g^{M_pN_p}$. Differentiating the product of inverse metrics produces $p$ terms. Relabel the dummy indices in each term; antisymmetry of both copies of $F$ makes all $p$ terms equal, so $\delta|F|^2=F_{M A_2\ldots A_p}F_N{}^{A_2\ldots A_p}q^{MN}/(p-1)!=\langle i_MF,i_NF\rangle q^{MN}$. When $p=0$, $F$ is a scalar and its norm has no metric dependence, giving zero. [F2, given, algebra]

2.1 The scalar $A$ and covariant components of $F$ are fixed, so the product rule and [F1] give $\delta(\sqrt{|g|}A|F|^2)=\sqrt{|g|}A[\delta|F|^2-\tfrac12g_{MN}|F|^2q^{MN}]$. Substituting step 1.1 yields the asserted expression, including the $p=0$ case. [F1, step 1.1, algebra] ∎
