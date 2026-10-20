---
id: cor-vc-minimax-rate-match
kind: corollary
title: "The realizable and agnostic VC lower rates"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - thm-realizable-vc-minimax-lower-bound
  - thm-agnostic-vc-minimax-lower-bound
  - def-minimax-excess-risk
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 §3.4"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, 2014, Chapter 28 §28.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
    - title: "Statistical Learning Theory course notes, University of British Columbia, Chapter 7 §7.3"
      url: "https://www.cs.ubc.ca/~dsuth/532D/26w1/notes/html/chap_pac-nfl.html"
---

## Statement

Let $\mathcal H$ be a nonempty measurable binary class with finite VC dimension $d\ge2$. In the ranges $m\ge\lceil(d-1)/4\rceil$ and $m\ge\lceil64d/5\rceil$, respectively, the realizable and agnostic theorems imply
$$\mathfrak M_{\rm real}(m,\mathcal H)\ge\frac{d-1}{3200m}\ge\frac{d}{6400m},\qquad \mathfrak M_{\rm agn}(m,\mathcal H)\ge\frac1{64}\sqrt{\frac{d}{320m}}.$$
For $0<\delta<1/100$, $0<\eta\le1/8$, and any integer $m$ in the realizable theorem's range with $m<(d-1)/(32\eta)$, no learner satisfies $\sup_{D\in\mathcal D_{\rm real}(\mathcal H)}\Pr_{S\sim D^m,A}\{R_D(A(S))>\eta\}\le\delta$. For $0<\delta<1/64$, $\eta>0$, and any integer $m$ in the agnostic theorem's range with $m<d/(320\eta^2)$, no learner satisfies $\sup_{D\in\mathcal D}\Pr_{S\sim D^m,A}\{R_D(A(S))-R_D^*(\mathcal H)>\eta\}\le\delta$. Thus, within the stated sample ranges and at fixed confidence levels, necessary sample sizes scale at least proportionally to $d/\eta$ in the realizable case and $d/\eta^2$ in the agnostic case. These are information-theoretic lower bounds and make no claim about computational efficiency.

## Statement references

[Mohri et al., Foundations of Machine Learning, 2nd ed., §3.4](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1)

[Shalev-Shwartz and Ben-David, Understanding Machine Learning, §28.2](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf)

## Facts & Assumptions

**Given:** A finite-VC binary class $\mathcal H$ with $d\ge2$.

[F1] In the realizable range, every learner has a realizable law with probability at least $1/100$ of target risk greater than $(d-1)/(32m)$ ([[thm-realizable-vc-minimax-lower-bound]]).

[F2] In the agnostic range, every learner has a law with probability at least $1/64$ of class excess risk greater than $\sqrt{d/(320m)}$ ([[thm-agnostic-vc-minimax-lower-bound]]).

[F3] The realizable expected minimax value is the infimum over learners of the supremum realizable expected target risk ($\mathfrak M_{\rm real}$) ([[def-minimax-excess-risk]]).

[F4] The agnostic expected minimax value is the infimum over learners of the supremum expected class excess risk ($\mathfrak M_{\rm agn}$) ([[def-minimax-excess-risk]]).

[F5] Class excess risk is nonnegative and at most one for every hypothesis in $\mathcal H$ ([[def-minimax-excess-risk]]).

## Proof

1.1 For a nonnegative random variable $X$ and $t\ge0$, $X\ge t\mathbf1_{\{X>t\}}$ pointwise, so $\mathbb EX\ge t\Pr\{X>t\}$. For each learner, [F1] supplies a realizable law with target risk exceeding $(d-1)/(32m)$ with probability at least $1/100$; since the supremum over realizable laws is at least this expectation, [F3] gives $\mathfrak M_{\rm real}\ge\frac1{100}\frac{d-1}{32m}=\frac{d-1}{3200m}\ge\frac{d}{6400m}$ because $d-1\ge d/2$. Likewise [F2], nonnegativity in [F5], and the supremum over all laws in [F4] give $\mathfrak M_{\rm agn}\ge\frac1{64}\sqrt{d/(320m)}$. [given, F1, F2, F3, F4, F5, algebra]

2.1 If $m<(d-1)/(32\eta)$ then $(d-1)/(32m)>\eta$, so the event in [F1] is contained in the event of error exceeding $\eta$. Its probability is at least $1/100>\delta$. If $m<d/(320\eta^2)$ then $\sqrt{d/(320m)}>\eta$, so [F2] similarly gives failure probability at least $1/64>\delta$. Thus any successful sample size in the respective theorem range must be at least $(d-1)/(32\eta)$ or $d/(320\eta^2)$, respectively. Since $d-1\ge d/2$ for $d\ge2$, the first is at least $d/(64\eta)$; the second is already a constant multiple of $d/\eta^2$. [given, F1, F2, algebra] ∎
