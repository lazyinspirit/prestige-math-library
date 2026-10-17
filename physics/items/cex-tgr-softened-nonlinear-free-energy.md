---
id: cex-tgr-softened-nonlinear-free-energy
kind: counterexample
title: "Fixed softening does not guarantee finite extensive free energy"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - thm-tgr-gravity-collapse-nonextensivity
dependency_roles:
  thm-tgr-gravity-collapse-nonextensivity: mathematical-premise
justified_by: []
aliases: []
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
dependency_level: 3
---

## Statement refuted

Fix $\beta>0$. For each box $B_N$, let $V_N=|B_N|$, let $Z_N(\beta)$ be its canonical partition function, and set $F_N(\beta)=-\beta^{-1}\log Z_N(\beta)$. The per-particle free-energy density is $f_N=F_N/N$ (in joules), and the per-volume free-energy density is $g_N=F_N/V_N$ (in joules per cubic metre). Here a “finite extensive free-energy density” means that the chosen normalized sequence has a finite real thermodynamic-limit value. The claim refuted is that a fixed positive softening length guarantees such a finite limit for every sequence of unscaled self-gravitating boxes whose volumes are bounded above and below by positive multiples of $N$. The counterexample below has both $f_N\to-\infty$ and $g_N\to-\infty$.

## Facts & Assumptions

**Given:** The softened Newtonian pair potential with fixed $a>0$ and the growing-box hypotheses in [[thm-tgr-gravity-collapse-nonextensivity]].

[F1] For boxes containing a fixed positive-volume cube, the softened unscaled model has $\log Z_N/N\to+\infty$ along the concentration sequence, so its free energy per particle tends to $-\infty$. ([[thm-tgr-gravity-collapse-nonextensivity]])

## Counterexample

1.1 Fix $L>0$, take $C=[0,L]^3$, and set $B_N=[0,LN^{1/3}]^3$ for every integer $N\ge1$. Then $C\subseteq B_N$, $|C|=L^3>0$, and $V_N=L^3N$, so this is a bounded-box sequence satisfying the softened concentration hypotheses in [F1]. [given, F1, construct]

2.1 Clause 2 of [F1] gives $\log Z_N/N\ge\beta c(N-1)-\log N+K_\beta\to+\infty$, hence $f_N=-\beta^{-1}\log Z_N/N\to-\infty$. Since $V_N=L^3N$, also $g_N=f_N/L^3\to-\infty$. Neither normalization has a finite real thermodynamic-limit value along this sequence, contradicting the claimed guarantee. [F1, step 1.1, algebra] ∎
