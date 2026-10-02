---
id: cor-unique-continuation-for-harmonic-functions
kind: corollary
title: Unique continuation for harmonic functions
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-connected-space, def-countable-choice, def-ck-and-multi-index-notation-in-several-variables, thm-harmonic-functions-are-real-analytic]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, unique continuation from the Taylor expansion"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4, printed pp. 28–34, analyticity and consequences"
---

## Statement

Assume Countable Choice and $n\ge2$. Let $\Omega\subseteq\mathbb R^n$ be connected and open, and let $u$ be real or complex harmonic on $\Omega$. If $u$ vanishes on a nonempty open subset of $\Omega$, then $u$ vanishes identically on $\Omega$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, a connected open set $\Omega\subseteq\mathbb R^n$, a harmonic $u$ on $\Omega$, and a nonempty open set $V\subseteq\Omega$ with $u=0$ on $V$.

[F1] Every harmonic function on $\Omega$ is real analytic: for each $a\in\Omega$ there is $\rho>0$ with $u(a+h)=\sum_\alpha D^\alpha u(a)h^\alpha/\alpha!$ absolutely convergent for $|h|<\rho$; in particular $u$ is $C^\infty$ ([[thm-harmonic-functions-are-real-analytic]]).

[F2] A topological space is connected exactly when its only clopen (simultaneously open and closed) subsets are the whole space and the empty set ([[def-connected-space]]).

[F3] Multi-index notation $D^\alpha$, with $D^0u=u$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F4] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F4] and let $F:=\{x\in\Omega:D^\alpha u(x)=0\text{ for every multi-index }\alpha\}$, the set of points where all derivatives vanish. Since $V$ is open and $u=0$ identically on $V$, every derivative of $u$ vanishes on $V$ (a derivative of the zero function), so $V\subseteq F$ and $F\ne\varnothing$. [given, F3, F4]

2.1 $F$ contains $V$, and $F$ is closed in $\Omega$: by [F1] each function $D^\alpha u$ is continuous on $\Omega$, and $F=\bigcap_\alpha\{x\in\Omega:D^\alpha u(x)=0\}$ is an intersection of closed subsets of $\Omega$. [step 1.1, F1]

2.2 $F$ is open in $\Omega$: let $x\in F$. By [F1] choose $\rho>0$ such that $u(x+h)=\sum_\alpha D^\alpha u(x)h^\alpha/\alpha!$ with absolute convergence for $|h|<\rho$. Since $x\in F$, every coefficient $D^\alpha u(x)$ vanishes, so the series is identically zero and $u=0$ on the ball $B_\rho(x)\subseteq\Omega$; that ball is open, so every derivative of $u$ vanishes on it and $B_\rho(x)\subseteq F$. Hence $F$ is open in $\Omega$. [step 1.1, F1, F3, algebra]

3.1 Therefore $F$ is clopen in $\Omega$ and nonempty, while $\Omega$ is connected; by [F2] the only clopen subsets of $\Omega$ are $\varnothing$ and $\Omega$, so $F=\Omega$. Hence all derivatives of $u$ vanish everywhere and, in particular, $u(x)=D^0u(x)=0$ for every $x\in\Omega$ by [F3]; that is, $u$ vanishes identically on $\Omega$. The argument applies to real and complex $u$ alike because the Taylor representation and continuity are available in both cases. [step 2.1, step 2.2, F2, F3] ∎
