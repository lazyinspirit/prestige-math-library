---
id: cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn
kind: corollary
title: "A Lebesgue measurable subgroup of $(\\mathbb{R}^n,+)$ of positive measure is all of $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-steinhaus-difference-set-contains-a-ball, thm-lebesgue-measure-is-a-complete-measure, def-metric-ball, lem-metrics-on-rn, def-subgroup, def-group, thm-of-archimedean, cor-archimedean-reciprocal, thm-induction-principle, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Ye, L. Yu, X. Zhao, When is $A+xA=\\mathbb{R}$?, Corollary 1.2"
      url: "https://arxiv.org/pdf/2505.00556"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.6.8"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Let $G$ be a subgroup of the additive group
$(\mathbb{R}^n,+)$ ([[def-subgroup]], [[def-group]]) that is Lebesgue measurable
with $\lambda_n(G) > 0$. Then

$$G = \mathbb{R}^n .$$

Equivalently, in the contrapositive form the sources state: a Lebesgue
measurable **proper** subgroup of $(\mathbb{R}^n,+)$ has measure zero. Nothing is
asserted about subgroups that are not Lebesgue measurable.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and a Lebesgue measurable subgroup $G$ of $(\mathbb{R}^n,+)$ with $\lambda_n(G)>0$.

[L1] Assuming countable choice, a Lebesgue measurable $E \subseteq \mathbb{R}^n$ with $\lambda_n(E)>0$ has a real $r>0$ with $B(0,r) \subseteq E-E$ ([[thm-steinhaus-difference-set-contains-a-ball]], [[def-metric-ball]]).

[L2] Assuming countable choice, $\lambda_n$ is a complete measure on the sigma-algebra $\mathcal{L}(\mathbb{R}^n)$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F1] A subset $H \subseteq G$ is a **subgroup** when $e \in H$, $H$ is closed under the operation, and $H$ is closed under inverses ([[def-subgroup]], [[def-group]]).

[F2] Every complete ordered field $F$ is Archimedean: for every $x \in F$ there is a natural number $m \ge 1$ with $x < m\cdot 1_F$ ([[thm-of-archimedean]]); and for every real $\varepsilon>0$ there is a natural $k \ge 1$ with $1/k<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[F3] Let $S \subseteq \mathbb{N}$; if $0 \in S$ and $\sigma(m) \in S$ whenever $m \in S$, then $S = \mathbb{N}$ ([[thm-induction-principle]]).

[F4] $d_2(x,y) = \lVert x-y\rVert_2$, and $\lVert \lambda x\rVert_2 = |\lambda|\,\lVert x\rVert_2$ for a real $\lambda$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], claims 1 and 3; [[def-p-norms-on-rn]], [[lem-metrics-on-rn]]).

## Proof

**Proof technique:** direct.

1.1 Since $G$ is a subgroup, $0 \in G$ and $x-y \in G$ whenever $x,y \in G$, so $G-G \subseteq G$; conversely $G = G-0 \subseteq G-G$, and therefore $G-G = G$. [F1]

1.2 Steinhaus applied to $G$ supplies a real $r>0$ with $B(0,r) \subseteq G-G$. [L1, L2]

2.1 Let $x \in \mathbb{R}^n$. The Archimedean property gives a natural $m \ge 1$ with $\lVert x\rVert_2 / r < m$, so $\lVert m^{-1}x\rVert_2 = m^{-1}\lVert x\rVert_2 < r$ and $m^{-1}x \in B(0,r) \subseteq G$ by steps 1.1 and 1.2. [step 1.1, step 1.2, F2, F4]

3.1 A subgroup is closed under addition, so an induction on $j$ shows $j\,(m^{-1}x) \in G$ for every natural $j$, the case $j=0$ being $0 \in G$; taking $j = m$ gives $x = m\,(m^{-1}x) \in G$, and as $x$ was arbitrary, $G = \mathbb{R}^n$. [step 2.1, F1, F3] ∎
