---
id: lem-continuous-adapted-process-at-bounded-stopping-time
kind: lemma
title: Continuous adapted processes are measurable at bounded stopping times
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-natural-and-usual-augmented-brownian-filtrations
  - def-continuous-time-filtration-and-all-pairs-martingale
  - def-continuous-time-stopping-time
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Joseph C. Watkins, Stochastic Processes in Continuous Time, §§1.3–1.4"
      url: "https://public.econ.duke.edu/~get/browse/courses/883/Spr16/COURSE-MATERIALS/Z_Papers/notesc.pdf"
---

## Statement

Assume AC and use the usual augmented Brownian filtration of
[[def-natural-and-usual-augmented-brownian-filtrations]]. Let
$X=(X_t)_{0\le t\le T}$ be an adapted, finite-dimensional real process with
continuous paths on a measurable event of probability one. If $\tau$ is a
stopping time with $0\le\tau\le T$, then the stopped random vector $X_\tau$
is $\mathcal F_\tau$-measurable.

## Facts & Assumptions

**Given:** AC; a usual augmented Brownian filtration; an adapted $\mathbb R^d$-valued process on $[0,T]$ with paths continuous on a measurable full-probability event; and a stopping time $\tau\le T$.

[F1] Every ambient measurable null set and each of its subsets belong to $\mathcal F_0$, hence to every $\mathcal F_t$. [[def-natural-and-usual-augmented-brownian-filtrations]]

[F2] $\tau$ is a stopping time when $\{\tau\le s\}\in\mathcal F_s$ for every $s$, and $\mathcal F_\tau$ consists of events $A$ with $A\cap\{\tau\le s\}\in\mathcal F_s$ for every $s$. [[def-continuous-time-stopping-time]]

[F3] Adaptedness means $X_s$ is $\mathcal F_s$-measurable for every deterministic $s$, and the filtration is increasing. [[def-continuous-time-filtration-and-all-pairs-martingale]]

[A1] AC is inherited from the usual augmented Brownian-filtration convention; the deterministic-grid approximation below makes no selection. [[def-axiom-of-choice]]

## Proof

1.1 Fix $t\in(0,T]$ and, for each integer $n\ge1$, form the deterministic grid $G_{n,t}=\{kt2^{-n}:0\le k\le2^n\}$. Let $\tau_{n,t}$ be the least point of $G_{n,t}$ greater than or equal to $\tau\wedge t$. For $s<t$, $\{\tau_{n,t}\le s\}=\bigcup_{q\in G_{n,t},\ q\le s}\{\tau\le q\}\in\mathcal F_s$ by [F2] and [F3]; for $s\ge t$ the event is all of $\Omega$. Thus $\tau_{n,t}$ is a finite-valued stopping time, $\tau_{n,t}\le t$, and $\tau_{n,t}\downarrow\tau\wedge t$. Each event $\{\tau_{n,t}=q\}$ belongs to $\mathcal F_q$ by subtracting consecutive sublevel events, so the finite-valued variable $X_{\tau_{n,t}}$ is $\mathcal F_t$-measurable by [F3]. [F2, F3, given, construct]

2.1 Define $Z_t$ as the limit of $X_{\tau_{n,t}}$ where that finite vector limit exists, and as $0$ otherwise. Since each approximant is $\mathcal F_t$-measurable, $Z_t$ is $\mathcal F_t$-measurable. On $\{\tau\le t\}$ and on the full-probability continuity event, $\tau_{n,t}\downarrow\tau$ and continuity gives $Z_t=X_\tau$. The case $t=0$ follows directly from $\tau\wedge0=0$ and $Z_0=X_0$. [F3, given, step 1.1, construct]

3.1 For any Borel set $C\subseteq\mathbb R^d$, the events $\{X_\tau\in C\}\cap\{\tau\le t\}$ and $\{Z_t\in C\}\cap\{\tau\le t\}$ differ only on the measurable null set where path continuity may fail. The second event is in $\mathcal F_t$ by [F2] and step 2.1; [F1] places their symmetric difference in $\mathcal F_t$, so the first event is in $\mathcal F_t$. At $t=T$ this also gives $\{X_\tau\in C\}\in\mathcal F_T$. All tests in [F2] hold, proving $X_\tau\in\mathcal F_\tau$. AC enters only through [A1]. [A1, F1, F2, step 2.1, given] ∎
