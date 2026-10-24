---
id: lem-bmo-classes-are-determined-by-their-atom-pairings
kind: lemma
title: "BMO classes are determined by their pairings with H1 atoms"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 11
deps: [def-bmo-seminorm-and-quotient-by-constants, def-hp-atom-with-moment-order]
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
      locator: "Theorem 7.40(a) (injectivity: test against $g=b-b_Q$), printed p. 47"
    - title: "Brooke Wilson, Math 581A Classical and Multilinear Harmonic Analysis (University of Washington, Fall 2024), lecture 20"
      url: "https://sites.math.washington.edu/~blwilson/581AFall2024/Lectures/lecture20.pdf"
      locator: "the injectivity of the pairing, scanned page 1"
---

## Statement

Let $b\in\mathrm{BMO}(\mathbb R^n)$ and suppose $\int ab=0$ for every $H^1$
atom $a$. Then $b$ is constant almost everywhere. Equivalently, the evaluation
map on atoms is injective on $\mathrm{BMO}/\mathbb C$.

## Facts & Assumptions

**Given:** $b\in\mathrm{BMO}(\mathbb R^n)$ with $\int ab=0$ for every $(1,\infty,0)$-atom $a$, and a cube $Q$.

[F1] A bounded mean-zero function $g$ vanishing off $Q$ is a scalar multiple of an atom: for $\|g\|_\infty>0$, divide by $|Q|\|g\|_\infty$ and choose the representative vanishing off the closed cube $Q$; a zero $L^\infty$ class has zero pairing ([[def-hp-atom-with-moment-order]]).

[F2] $b$ is locally integrable, $b_Q=|Q|^{-1}\int_Qb$, and the BMO seminorm vanishes exactly on the almost-everywhere constants ([[def-bmo-seminorm-and-quotient-by-constants]]).

## Proof

**Proof technique:** direct.

1.1 Define $h(x)=\overline{b(x)-b_Q}/|b(x)-b_Q|$ on $Q$ where $b(x)\ne b_Q$, and $h(x)=0$ elsewhere. Then $|h|\le1$, and $g:=(h-h_Q)\mathbf 1_Q$ is bounded, supported in $Q$ and mean zero. By [F1] and the hypothesis, $\int gb=0$, including the zero-class case. All products are integrable because $b\in L^1(Q)$ and $g$ is bounded. [F1, F2, given, construct]

2.1 Using $\int_Q(b-b_Q)=0$ and the definition of $h$, we obtain $0=\int_Qgb=\int_Qg(b-b_Q)=\int_Qh(b-b_Q)=\int_Q|b-b_Q|$. Since $Q$ was arbitrary, the BMO seminorm is zero, so $b$ is constant almost everywhere by [F2]. Applying this to $b-b'$ proves injectivity on classes with equal atom pairings; conversely constants pair to zero by atom cancellation. No choice principle or local $L^2$ estimate is used. [step 1.1, F1, F2, algebra] ∎
