---
id: prop-fd-pressure-gauge-observables
kind: proposition
title: "Gauge-invariant pressure sensor weights"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-bounded-stokes-observation-interface
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - lem-na-zero-mean-of-zero-boundary-divergence
  - cor-cauchy-schwarz-inequality-for-l-two
dependency_roles:
  def-fd-bounded-stokes-observation-interface: mathematical-premise
  def-na-stokes-zero-mean-pressure-and-velocity-spaces: mathematical-premise
  lem-na-zero-mean-of-zero-boundary-divergence: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53 — Stokes Equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, Remark 53.4 and §53.2.1: pressure constant and weak pressure term."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "§8.2.1, Remark 8.2.1, pp. 462–463: pressure modulo constants and the zero-mean representative."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. Let $d\in\{2,3\}$ and let $D\subset\mathbb R^d$ be a nonempty bounded connected Lipschitz open set, with $V=H^1_0(D;\mathbb R^d)$ and $Q=L^2_0(D)$. For $g\in L^2(D)$ define $S_g(q):=\int_Dgq\,dx$ for $q\in Q$; this is a bounded pressure sensor. Put $\bar g:=|D|^{-1}\int_Dg\,dx$. On the normalized pressure space, $S_g=S_{g-\bar g}$. The weak Stokes pressure term $-\int_Dp\,\operatorname{div}v\,dx$ is unchanged by $p\mapsto p+c$ for $v\in V$ and $c\in\mathbb R$. The unnormalized sensor reading $\int_Dgp\,dx$ is unchanged under every pressure shift $p\mapsto p+c$ if and only if $\int_Dg\,dx=0$, equivalently $g\in Q$.

## Statement references

[Guermond, MATH 661, Chapter 53](https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf), Remark 53.4 and §53.2.1, pressure constant and weak pressure term.

[Boffi–Brezzi–Fortin, *Mixed Finite Element Methods and Applications*](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf), §8.2.1, Remark 8.2.1, pp. 462–463, pressure modulo constants and zero-mean representative.

## Facts & Assumptions

**Given:** Countable Choice; a nonempty bounded connected Lipschitz domain $D\subset\mathbb R^d$, $d\in\{2,3\}$; the zero-boundary velocity space $V$; the mean-zero pressure space $Q$; and an $L^2$ sensor weight $g$.

[A1] Countable Choice is assumed by the Stokes-space and zero-boundary divergence suppliers. [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]] [[lem-na-zero-mean-of-zero-boundary-divergence]]

[F1] [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]]: $V=H^1_0(D;\mathbb R^d)$, $Q=L^2_0(D)$, and $b(v,p)=-\int_Dp\,\operatorname{div}v\,dx$.

[F2] [[lem-na-zero-mean-of-zero-boundary-divergence]]: every $v\in H^1_0(D;\mathbb R^d)$ has $\operatorname{div}v\in L^2(D)$ and $\int_D\operatorname{div}v\,dx=0$.

[F3] [[cor-cauchy-schwarz-inequality-for-l-two]]: the integral pairing of two $L^2(D)$ functions is finite and has absolute value at most the product of their $L^2$ norms.

[F4] [[def-fd-bounded-stokes-observation-interface]]: a bounded pressure sensor is a bounded real-linear functional on $Q$ with its operator norm.

## Proof

1.1 Since $D$ is nonempty and open it contains a ball, while boundedness gives finite measure; thus $0<|D|<\infty$ and $1\in L^2(D)$. [F3] therefore makes $\int_Dg\,dx$ finite. For $q\in Q$, [F3] gives $|S_g(q)|\le\|g\|_2\|q\|_2$, so $S_g\in Q'$. Also $g-\bar g\in Q$ and $S_g(q)-S_{g-\bar g}(q)=\bar g\int_Dq\,dx=0$; hence the normalized-gauge sensor depends only on the mean-zero part of $g$. [given, F1, F3, F4, algebra]

1.2 By [F1]–[F2], replacing $p$ by $p+c$ changes the weak pressure term by $-c\int_D\operatorname{div}v\,dx=0$ for every $v\in V$. Thus adding a constant is a pressure gauge shift in this weak formulation. [A1, F1, F2, algebra]

2.1 For any $p\in L^2(D)$ and $c\in\mathbb R$, $\int_Dg(p+c)\,dx-\int_Dgp\,dx=c\int_Dg\,dx$. If $\int_Dg=0$, every shift leaves the reading unchanged; conversely, invariance for every shift, in particular $c=1$, forces $\int_Dg=0$. By the definition of $Q$, this is equivalent to $g\in Q$. [given, F1, algebra] ∎
