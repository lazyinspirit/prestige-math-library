---
id: lem-bounded-stopping-preserves-cadlag-square-integrable-martingales
kind: lemma
title: "Bounded stopping preserves càdlàg square-integrable martingales"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-continuous-time-adapted-process-and-martingale
  - def-continuous-time-filtration-and-all-pairs-martingale
  - def-continuous-time-stopping-time
  - def-conditional-expectation-as-an-ae-class
  - cor-absolute-value-and-powers-of-a-martingale-are-submartingales
  - thm-doob-lp-maximal-inequality
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, SDEs with Jumps, Section 2.3, PDF pp. 3–4"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"

---

## Statement

Let $M=(M_t)_{0\le t\le T}$ be a square-integrable all-pairs martingale with
right-continuous paths with left limits for every $\omega$, and let $\tau\le T$
be a stopping time. Then the stopped process
$M^\tau_t:=M_{t\wedge\tau}$ is a square-integrable martingale on $[0,T]$.

## Facts & Assumptions

**Given:** A finite horizon, a square-integrable all-pairs martingale with pathwise càdlàg paths, and a bounded stopping time $\tau$.

[F1] On $[0,T]$, use the adaptedness, all-pairs conditional-expectation identity and pointwise $L^2$ conditions of [[def-continuous-time-adapted-process-and-martingale]] with times restricted to this interval. This agrees with its $[0,\infty)$ convention: extend $M$ and the filtration by $\widetilde M_t=M_{t\wedge T}$ and $\widetilde{\mathcal F}_t=\mathcal F_{t\wedge T}$. For $s\le T<t$ the extended martingale identity is $\mathbb E[M_T\mid\mathcal F_s]=M_s$; for $T\le s\le t$ it is the known-variable identity, and for $s\le t\le T$ it is the given identity. Thus this extension is a square-integrable martingale, without any filtration augmentation.

[F2] A map $\tau$ is a stopping time when $\{\tau\le t\}\in\mathcal F_t$. ([[def-continuous-time-stopping-time]])

[F3] The absolute value of a martingale is a nonnegative submartingale, and the finite discrete-time Doob $L^2$ inequality bounds its grid maximum by twice the terminal $L^2$ norm. ([[cor-absolute-value-and-powers-of-a-martingale-are-submartingales]] [[thm-doob-lp-maximal-inequality]])

[F4] Dominated convergence passes limits through event integrals. ([[thm-dominated-convergence]])

[F5] Increasing nonnegative integrals converge to the integral of the limit. ([[thm-monotone-convergence-for-the-integral]])

[A1] AC is inherited through the conditional-expectation interface in [F1]. ([[def-axiom-of-choice]])

## Proof

1.1 Let $\pi_n$ be nested finite partitions of $[0,T]$ containing any fixed $s,t$ with mesh tending to zero. For each $\pi_n$, the values of $|M|$ on its grid form a discrete-time nonnegative submartingale by [F1, F3]. The Doob bound gives $\mathbb E\max_{u\in\pi_n}|M_u|^2\le4\mathbb E|M_T|^2$. Càdlàg paths and the nested dense grids imply $\sup_{u\le T}|M_u|=\sup_{u\in\cup_n\pi_n}|M_u|$; [F5] then gives $\mathbb E\sup_{u\le T}|M_u|^2<\infty$. [A1, F1, F3, F5, given]

1.2 For a finite partition $\pi_n=\{r_0<\cdots<r_m\}$, round $\tau$ up to the first grid point $\tau_n\ge\tau$. This is a finite-valued stopping time because $\{\tau_n\le r_j\}=\{\tau\le r_j\}\in\mathcal F_{r_j}$. At adjacent grid points, $M_{r_k\wedge\tau_n}-M_{r_{k-1}\wedge\tau_n}=\mathbf1_{\{\tau_n>r_{k-1}\}}(M_{r_k}-M_{r_{k-1}})$; the indicator is $\mathcal F_{r_{k-1}}$-measurable. Conditioning each increment on its left endpoint proves the stopped grid values have the martingale identity at grid times, in particular at $s,t$. [A1, F1, F2, given, algebra]

2.1 Refine the partitions while keeping $s,t$ as grid points. Then $\tau_n\downarrow\tau$, and pathwise right continuity gives $M_{s\wedge\tau_n}\to M_{s\wedge\tau}$ and $M_{t\wedge\tau_n}\to M_{t\wedge\tau}$. For $u=s$ or $u=t$, the events $\{\tau_n=r_j\}$ with grid value $r_j<u$ lie in $\mathcal F_{r_j}\subseteq\mathcal F_u$, and their complement $\{\tau_n\ge u\}$ is also in $\mathcal F_u$; expressing $M_{u\wedge\tau_n}$ over these finitely many events proves $\mathcal F_u$-measurability. The pointwise limits are then measurable there without completing the filtration. Both are dominated by $\sup_{u\le T}|M_u|$, integrable by step 1.1. For each $B\in\mathcal F_s$, apply [F4] to the event-integral martingale identity from step 1.2; it yields $\mathbb E[\mathbf1_B(M_{t\wedge\tau}-M_{s\wedge\tau})]=0$, hence the stopped process satisfies the all-pairs martingale identity. Also $|M_{t\wedge\tau}|\le\sup_{u\le T}|M_u|$ gives square integrability. [A1, F1, F4, step 1.1, step 1.2] ∎

## Source notes

Bass discusses martingale jump decompositions and stopped martingales. The
finite-grid approximation above gives the bounded-stopping argument under
this library's uncompleted filtration convention without assuming the usual
conditions on the filtration.

