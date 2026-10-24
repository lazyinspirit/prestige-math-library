---
id: prop-maxima-of-subsolutions-and-minima-of-supersolutions
kind: proposition
title: Finite maxima of subsolutions and finite minima of supersolutions
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- def-discontinuous-viscosity-solution
- def-euclidean-local-extrema-and-critical-points
- def-max-min
- lem-finite-set-has-max
justified_by: []
forward_refs:
- cex-minima-of-viscosity-subsolutions-need-not-be-subsolutions
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Section 4, Lemma 4.2 (supremum stability), printed pp. 23--24; the finite active-index argument is proved here.
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 8, Lemma 1.25 and the finite case, printed pp. 33--34
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$ and $k\ge1$, let $U\subseteq\mathbb R^{n+1}$ be open, and let
$H:U\times\mathbb R^n\to\mathbb R$ be continuous.
(1) If $u_1,\dots,u_k$ are viscosity subsolutions of
$u_t+H(x,t,Du)=0$ in $U$, then $u:=\max(u_1,\dots,u_k)$ is a viscosity
subsolution in $U$. (2) If $v_1,\dots,v_k$ are viscosity supersolutions, then
$v:=\min(v_1,\dots,v_k)$ is a viscosity supersolution in $U$. (3) For the
Cauchy problem on $Z=O\times(0,T)$ the same statements hold when all the
functions carry the same continuous initial datum $u_0$ in the relaxed sense;
the maximum of subsolutions then also satisfies the relaxed initial condition
for $u_0$. The mixed operations are not asserted: a finite minimum of
subsolutions and a finite maximum of supersolutions need not preserve the
corresponding inequality when the equation has a zero-order term.
No choice principle is used.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb R^{n+1}$, continuous $H:U\times\mathbb R^n\to\mathbb R$, viscosity subsolutions $u_1,\dots,u_k$ and supersolutions $v_1,\dots,v_k$ of $u_t+H(x,t,Du)=0$ in $U$, and $u=\max(u_1,\dots,u_k)$, $v=\min(v_1,\dots,v_k)$.

[F1] Each $u_i$ is upper semicontinuous and satisfies $\phi_t(z_0)+H(z_0,D\phi(z_0))\le0$ at every local maximum $z_0$ of $u_i-\phi$, $\phi\in C^1(U)$; each $v_j$ is lower semicontinuous and satisfies the reverse inequality at every local minimum of $v_j-\phi$ ([[def-viscosity-subsolution-and-supersolution]]).

[F2] For all reals $a_1,\dots,a_k$ the set $\{a_1,\dots,a_k\}$ has a maximum and a minimum, and its maximum equals one of the $a_i$ ([[lem-finite-set-has-max]], [[def-max-min]]).

[F3] A real-valued function has a local maximum at $z_0$ when it is defined on a neighbourhood of $z_0$ and its value there is at most its value at $z_0$ ([[def-euclidean-local-extrema-and-critical-points]]).

## Proof

**Proof technique:** select the active index at the contact.

1.1 Finite maxima of subsolutions. The function $u=\max(u_1,\dots,u_k)$ is the pointwise maximum of finitely many upper semicontinuous functions and is therefore upper semicontinuous. Let $\phi\in C^1(U)$ and let $u-\phi$ have a local maximum at $z_0\in U$; by [F2] there is an index $i$ with $u_i(z_0)=u(z_0)$. Since $u_i\le u$ pointwise, for every $z$ in a neighbourhood of $z_0$ we have $u_i(z)-\phi(z)\le u(z)-\phi(z)\le u(z_0)-\phi(z_0)=u_i(z_0)-\phi(z_0)$; hence $u_i-\phi$ has a local maximum at $z_0$ by [F3], and the subsolution inequality for $u_i$ gives $\phi_t(z_0)+H(z_0,D\phi(z_0))\le0$. Therefore $u$ is a viscosity subsolution. [F1, F2, F3, algebra]

1.2 Finite minima of supersolutions. If $v=\min(v_1,\dots,v_k)$ and $\phi\in C^1(U)$ with $v-\phi$ having a local minimum at $z_0$, [F2] gives an index $j$ with $v_j(z_0)=v(z_0)$; since $v\le v_j$ and $v(z_0)=v_j(z_0)$, for $z$ near $z_0$ we have $v_j(z)-\phi(z)\ge v(z)-\phi(z)\ge v(z_0)-\phi(z_0)=v_j(z_0)-\phi(z_0)$, so $v_j-\phi$ has a local minimum at $z_0$ and $\phi_t(z_0)+H(z_0,D\phi(z_0))\ge0$ by [F1]. Hence $v$ is a viscosity supersolution, and it is lower semicontinuous as a finite minimum of lower semicontinuous functions. [F1, F2, F3, algebra]

2.1 The Cauchy problem. Suppose all $u_i$ and $v_j$ satisfy the relaxed initial conditions with the same continuous datum $u_0$. Fix $x\in O$ and write $L_i:=\limsup_{(y,s)\to(x,0),\ s>0}u_i(y,s)\le u_0(x)$. For any real $c>\max_iL_i$, the definition of each limsup gives a neighbourhood $N_i$ of $(x,0)$ on which $u_i<c$ in $Z$; the finite intersection of these neighbourhoods then has $\max_i u_i<c$, so $\limsup\max_i u_i\le\max_iL_i\le u_0(x)$. The reverse inequality $\limsup\max_i u_i\ge\max_iL_i$ follows from $\max_i u_i\ge u_i$ for each $i$. Dually, put $M_j:=\liminf_{(y,s)\to(x,0),\ s>0}v_j(y,s)\ge u_0(x)$. For any real $c<\min_jM_j$, each liminf gives a neighbourhood $N_j$ on which $v_j>c$ in $Z$; on their finite intersection $\min_jv_j>c$, so $\liminf\min_jv_j\ge\min_jM_j\ge u_0(x)$. The reverse inequality follows from $\min_jv_j\le v_j$ for every $j$. These finite-neighbourhood arguments also cover infinite relaxed limits and use no sequence extraction. With steps 1.1 and 1.2, the maximum of the subsolutions and minimum of the supersolutions satisfy the relaxed Cauchy conditions. [step 1.1, step 1.2, F1, algebra]

3.1 Conclusion. Steps 1.1 and 1.2 prove the interior statements (1) and (2), and step 2.1 proves (3). Nothing is selected beyond a finite index, supplied by [F2], and no envelope or infinite supremum is used; the mixed operations are not claimed. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

The passage from finite families to arbitrary suprema requires upper regularisation and local boundedness, which is treated in [[thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions]].


- **Why the mixed operations fail.** The active-index argument requires the function that touches $\phi$ to be the *same* function that satisfies the one-sided inequality; for a maximum of subsolutions the active function is a subsolution, for a minimum of supersolutions it is a supersolution, and no argument of this shape covers a minimum of subsolutions. The companion counterexample [[cex-minima-of-viscosity-subsolutions-need-not-be-subsolutions]] shows the failure is genuine for an equation with a zero-order term.
- **Choice.** Only finitely many indices are involved and the selection is made inside a finite set, so no choice principle is used.
