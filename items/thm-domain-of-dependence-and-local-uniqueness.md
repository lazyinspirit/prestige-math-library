---
id: thm-domain-of-dependence-and-local-uniqueness
kind: theorem
title: "Domain of dependence and local uniqueness"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-countable-choice, thm-finite-propagation-speed-for-the-wave-equation, def-forward-and-backward-wave-cones-domain-of-dependence-and-influence, def-wave-equation-cauchy-data-and-wave-speed, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.3, printed pp. 290-292, Theorem 9.2.2: vanishing on a domain bounded by the cone, hence local uniqueness"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed pp. 177-178, Theorem 7.12: the cone of dependence"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #13-14: Geometric Energy Estimates (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ad3a71c522df2396b6248cf9b35aedea_MIT18_152F11_lec_13_14.pdf"
      locator: "Corollary 2.0.4 and §3: uniqueness on the solid backward light cone"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$,
$c>0$, $x_0\in\mathbb R^n$, $t_0>0$, and let $u,v\in C^2$ solve
$\Box_cu=f$ and $\Box_cv=g$ on a neighbourhood of the closed backward cone
$K^-(x_0,t_0)$ ([[def-forward-and-backward-wave-cones-domain-of-dependence-and-influence]]).
If $f=g$ on $K^-(x_0,t_0)$ and $u(\cdot,0)=v(\cdot,0)$,
$u_t(\cdot,0)=v_t(\cdot,0)$ on the base ball $B_{ct_0}(x_0)$, then $u=v$ on
$K^-(x_0,t_0)$.

This is the formal content, required by the design's well-definedness note, of
the phrase "the value at $(x_0,t_0)$ depends only on the Cauchy data on the
base ball and the source on the cone".

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; two $C^2$ functions $u,v$ solving
$\Box_cu=f$, $\Box_cv=g$ near the cone $K^-(x_0,t_0)$, with $f=g$ on the cone
and equal Cauchy data on the base ball $B_{ct_0}(x_0)$.

[F1] Finite propagation: if $w$ solves $\Box_cw=h$ near $K^-(x',t')$ with
$h=0$ on the cone and zero Cauchy data on its base ball, then $w=0$ on
$K^-(x',t')$.
([[thm-finite-propagation-speed-for-the-wave-equation]])

[F2] The wave operator is linear, so $u-v$ solves $\Box_c(u-v)=f-g$ and the
Cauchy data of the difference are the differences of the data.
([[thm-algebra-of-derivatives]],
[[def-wave-equation-cauchy-data-and-wave-speed]])

## Proof

1.1 The difference solves a homogeneous equation on the cone: $w:=u-v$ is $C^2$ on a neighbourhood of $K^-(x_0,t_0)$ and, by linearity of differentiation [F2], $\Box_cw=f-g$, which vanishes on the cone because $f=g$ there; moreover $w(\cdot,0)=0$ and $w_t(\cdot,0)=0$ on the base ball $B_{ct_0}(x_0)$ because the Cauchy data of $u$ and $v$ agree there. [given, F2]

2.1 Conclusion: the hypotheses of [F1] are met by $w$ on the cone $K^-(x_0,t_0)$, so $w=0$ there, that is, $u=v$ on $K^-(x_0,t_0)$; in particular the value at the vertex is determined by the base data and the source on the cone. [step 1.1, F1] ∎ 