---
id: lem-elliptic-state-map-c1-under-uniform-coercivity
kind: lemma
title: A uniformly coercive elliptic variational state is C1 in its parameter
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-parameterized-elliptic-variational-problem, thm-lax-milgram, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used only through Lax-Milgram for the state and its linearized variational equation; no unrestricted choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §§1.4 and 1.6"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Statement

Assume Countable Choice and the setting of [[def-parameterized-elliptic-variational-problem]]. On an open neighborhood $\Theta_0\subseteq\Theta$, suppose the same constants $M<\infty$ and $\alpha>0$ give boundedness and coercivity for every $a_\theta$, and $\theta\mapsto A_\theta$ and $\theta\mapsto\ell_\theta$ are operator-norm $C^1$. Then each state $u_\theta$ exists uniquely, the map $\theta\mapsto u_\theta\in V$ is $C^1$, and for each direction $\eta\in\mathbb R^m$ its derivative $w_\eta=D_\theta u_\theta[\eta]$ is the unique solution of
$$a_\theta(w_\eta,v)=D_\theta\ell_\theta[\eta](v)-D_\theta a_\theta[\eta](u_\theta,v)\qquad(v\in V).$$
Uniform coercivity is required on the parameter neighborhood; no differentiability conclusion is asserted at a loss of coercivity.

## Facts & Assumptions

**Given:** Countable Choice, a real Hilbert space, the uniformly bounded/coercive family, operator-norm $C^1$ data, and the variational state definition in [[def-parameterized-elliptic-variational-problem]].

[F1] Lax–Milgram gives a unique variational solution and $\alpha\|u\|_V\le\|F\|_{V^*}$ for each bounded linear datum ([[thm-lax-milgram]], [[def-countable-choice]]).

[F2] Operator-norm $C^1$ data means the increments of $A_\theta$ and $\ell_\theta$ equal their first derivatives plus remainders whose norms are $o(\|h\|_2)$ ([[def-parameterized-elliptic-variational-problem]]).

[A1] The constants $M,\alpha$ are uniform on the open parameter neighborhood $\Theta_0$, with $\alpha>0$.

## Proof

1.1 For each $\theta\in\Theta_0$, apply [F1] to $a_\theta$ and $\ell_\theta$; this gives a unique $u_\theta$ and the bound $\|u_\theta\|_V\le\alpha^{-1}\|\ell_\theta\|_{V^*}$. Since $\ell_\theta$ is continuous, these state norms are locally bounded in $\theta$. [F1, A1, given]

2.1 For sufficiently small $h$ with $\theta+h\in\Theta_0$, put $\delta u=u_{\theta+h}-u_\theta$, $\delta A=A_{\theta+h}-A_\theta$, and $\delta\ell=\ell_{\theta+h}-\ell_\theta$. Subtract the two variational equations to get $a_\theta(\delta u,v)=\delta\ell(v)-(\delta A\,u_{\theta+h})(v)$. Taking $v=\delta u$, using coercivity and the dual norm, and dividing by $\|\delta u\|_V$ when it is nonzero gives $\|\delta u\|_V\le\alpha^{-1}\bigl(\|\delta\ell\|_{V^*}+\|\delta A\|\,\|u_{\theta+h}\|_V\bigr)=O(\|h\|_2)$. The same bound is immediate when $\delta u=0$. Thus the state map is locally Lipschitz. [A1, F2, step 1.1, algebra]

2.2 For each direction $h\in\mathbb R^m$, define $w_h$ by $a_\theta(w_h,v)=D\ell_\theta[h](v)-\bigl(DA_\theta[h]u_\theta\bigr)(v)$. The right side is a bounded linear functional, so [F1] gives a unique $w_h$. Uniqueness and linearity of the right side in $h$ show $h\mapsto w_h$ is linear. [F1, F2, step 1.1, given]

3.1 Write $\delta\ell=D\ell_\theta[h]+r_\ell$ and $\delta A=DA_\theta[h]+r_A$, where $\|r_\ell\|+\|r_A\|=o(\|h\|_2)$ by [F2]. Subtract the equation for $w_h$ in step 2.2 from the state-difference equation in step 2.1. With $e_h=\delta u-w_h$, this gives $a_\theta(e_h,v)=r_\ell(v)-(r_Au_\theta)(v)-(DA_\theta[h]\delta u)(v)-(r_A\delta u)(v)$. The first two terms have dual norm $o(\|h\|_2)$; the last two have that order because $\|DA_\theta[h]\|=O(\|h\|_2)$, $\|r_A\|=o(\|h\|_2)$, and $\|\delta u\|_V=O(\|h\|_2)$ by step 2.1. Coercivity yields $\|e_h\|_V=o(\|h\|_2)$, proving Fréchet differentiability and the stated derivative equation. [A1, F1, F2, step 2.1, step 2.2, algebra]

4.1 The solution operator $A_\theta^{-1}:V^*\to V$ has norm at most $\alpha^{-1}$. For nearby $\theta,\widetilde\theta$, the identity $A_{\widetilde\theta}^{-1}-A_\theta^{-1} =A_{\widetilde\theta}^{-1}(A_\theta-A_{\widetilde\theta})A_\theta^{-1}$ shows its operator-norm continuity. The formula in step 2.2, together with continuity of $u_\theta$, $D A_\theta$, and $D\ell_\theta$, then shows $D_\theta u_\theta$ is continuous. Hence the state map is $C^1$. [A1, F1, F2, step 2.1, step 2.2, algebra] ∎

