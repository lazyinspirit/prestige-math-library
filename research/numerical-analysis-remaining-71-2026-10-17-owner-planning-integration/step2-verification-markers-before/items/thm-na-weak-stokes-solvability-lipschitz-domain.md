---
id: thm-na-weak-stokes-solvability-lipschitz-domain
kind: theorem
title: "Weak Stokes solvability on bounded connected Lipschitz domains"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: ["def-na-stokes-zero-mean-pressure-and-velocity-spaces", "lem-na-homogeneous-dirichlet-poincare", "lem-na-homogeneous-dirichlet-korn-identity", "thm-na-continuous-stokes-divergence-infsup", "thm-na-babuska-brezzi-kernel-coercivity", "lem-w-one-two-is-a-hilbert-space", "def-countable-choice", "thm-holder-inequality-for-integrals", "lem-l-two-with-the-integral-pairing-is-a-hilbert-space", "lem-na-zero-mean-of-zero-boundary-divergence", "def-wkp-zero-as-a-sobolev-closure", "cor-cauchy-schwarz-inequality-for-l-two"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "§49.4.2, Babuška–Brezzi; Chapter 50, §§50.1–50.2, mixed approximation and Schur complement; Chapters 53–54, Stokes and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and pp. 276–277; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1, 8.7.1 and 8.10."
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$ be nonempty, bounded, connected and Lipschitz, $d=2$ or $3$, and let $\nu>0$. For every bounded linear functional $F$ on $V=H^1_0(D;\mathbb R^d)$ equipped with $\|v\|_V=\|\nabla v\|_2$, there is a unique $(u,p)\in V\times Q$, $Q=L^2_0(D)$, satisfying
$$2\nu\int_D\varepsilon(u):\varepsilon(v)-\int_Dp\operatorname{div}v=F(v),\qquad -\int_Dq\operatorname{div}u=0$$
for every $v\in V,q\in Q$. The pressure is normalized to have mean zero. One stability bound is $\|u\|_V\le\nu^{-1}\|F\|_{V'}$ and $\|p\|_2\le3C_{\rm div}(D)\|F\|_{V'}$.

## Facts & Assumptions

**Given:** Countable Choice; a bounded connected Lipschitz $D$; the real Sobolev spaces; $\nu>0$ and $F\in V'$.

[A1] Countable Choice is assumed by the Hilbert-space completeness and Lax–Milgram branch used below; no full Axiom of Choice is used by the local Korn or Poincare arguments. ([[def-countable-choice]])

[F1] $H^1(D)$ is Hilbert under Countable Choice, $H^1_0(D)$ is its closed subspace, and bounded-domain Poincare makes the gradient norm equivalent to the H1 norm. ([[lem-w-one-two-is-a-hilbert-space]], [[def-wkp-zero-as-a-sobolev-closure]], [[lem-na-homogeneous-dirichlet-poincare]], [[def-countable-choice]])

[F2] Real $L^2(D)$ is Hilbert under Countable Choice, and the integral functional is bounded by $|D|^{1/2}\|q\|_2$, so its zero-mean kernel $Q$ is closed and Hilbert. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-holder-inequality-for-integrals]], [[def-countable-choice]])

[F3] $2\|\varepsilon(v)\|_2^2=\|\nabla v\|_2^2+\|\operatorname{div}v\|_2^2$ for every zero-boundary field. ([[lem-na-homogeneous-dirichlet-korn-identity]])

[F4] The divergence form is bounded and has continuous inf-sup constant at least $C_{\rm div}(D)^{-1}$. ([[thm-na-continuous-stokes-divergence-infsup]])

[F5] On real Hilbert spaces, bounded $a,b$, coercivity on the constraint kernel and positive inf-sup imply unique mixed solvability with the stated norm bounds. ([[thm-na-babuska-brezzi-kernel-coercivity]])

[F6] Every zero-boundary velocity has zero-mean divergence. ([[lem-na-zero-mean-of-zero-boundary-divergence]])

[F7] The L2 Cauchy--Schwarz inequality gives $\int|fg|\le\|f\|_2\|g\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 By [F1], $V$ is complete in the H1 norm. If $(v_n)$ is Cauchy in $\|\nabla\cdot\|_2$, [F1] and Poincare make it Cauchy in H1; its H1 limit is in the closed subspace $H^1_0$ and its gradients converge. Thus $V$ is Hilbert in the gradient norm. By [F2], $Q$ is Hilbert. [A1, F1, F2]

2.1 Cauchy–Schwarz and $|\varepsilon(v)|\le|\nabla v|_F$ give $|a_\nu(u,v)|\le2\nu\|u\|_V\|v\|_V$. By [F3], $a_\nu(v,v)=2\nu\|\varepsilon(v)\|_2^2\ge\nu\|v\|_V^2$ on all of $V$, hence on $\ker B$; take $M_a=2\nu$ and $\alpha=\nu$. [F3, F7, step 1.1]

3.1 The form $b$ has $M_b\le\sqrt d$ and inf-sup $\beta\ge C_{\rm div}(D)^{-1}$ by [F4]. Apply [F5] with $G=0$. It yields a unique velocity and a unique mean-zero pressure satisfying the two displayed equations. The bound on velocity is $\|u\|_V\le\alpha^{-1}\|F\|=\nu^{-1}\|F\|$. [A1, F4, F5, step 1.1, step 2.1]

4.1 By [F6], $\operatorname{div}u\in Q$. The constraint equation tested with $q=\operatorname{div}u$ therefore gives $\|\operatorname{div}u\|_2^2=0$, so the weak constraint is exact incompressibility. Also [F5] gives $\|p\|_2\le\beta^{-1}(\|F\|+M_a\|u\|_V)$. Use $\beta^{-1}\le C_{\rm div}(D)$, $M_a=2\nu$ and the velocity estimate of step 3.1 to obtain $\|p\|_2\le3C_{\rm div}(D)\|F\|$. Mean-zero gauge is part of $Q$, so the pressure is unique in that normalization. [A1, F4, F5, F6, step 3.1] ∎
