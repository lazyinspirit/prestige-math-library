---

id: thm-csm-local-momentum-moments
kind: theorem
title: Local kinetic energy and first and second momentum expectations
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-csm-full-marked-model
  - lem-csm-gaussian-marked-lift-existence
  - lem-csm-gaussian-mark-moments
  - lem-tdmath-relative-entropy-variational-and-chain-rules
  - thm-csm-full-shell-positional-minimizer
  - thm-csm-total-canonical-window
  - thm-csm-local-mark-kl-bound
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-csm-full-marked-model: mathematical-premise
  lem-csm-gaussian-marked-lift-existence: mathematical-premise
  lem-csm-gaussian-mark-moments: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-csm-full-shell-positional-minimizer: mathematical-premise
  thm-csm-total-canonical-window: mathematical-premise
  thm-csm-local-mark-kl-bound: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Sections 2.3–3, printed pp.184–195 / PDF viewer pp.8–19, and Section 5, printed pp.197–204 / PDF viewer pp.21–28: marked conditional laws and entropy estimates."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Section 4.2, printed pp.192–198 / PDF viewer pp.220–226: Maxwellian momentum law and Gaussian moments."
---

## Statement

Assume AC and the hypotheses of [[thm-csm-local-mark-kl-bound]]. Fix a bounded half-open cube $\Delta\subseteq[0,\infty)^d$; then $\Delta\subseteq\Lambda_{L_n}$ for all sufficiently large $n$. By torus translation invariance this placement gives the same limits as any fixed translate of the cube. Let $N_\Delta(q)=\#(q\cap\Delta)$. For $b>0$ and $K(p)=|p|^2/(2mE_0)$, the full shell law satisfies
$$E_{M_n^{ph}}\sum_{x\in q\cap\Delta}K(p_x)\to dρ|Δ|/(2b),\quad E_{M_n^{ph}}\sum_{x\in q\cap\Delta}p_{x,i}\to0,$$
$$E_{M_n^{ph}}\sum_{x\in q\cap\Delta}p_{x,i}p_{x,j}\to(mE_0ρ|Δ|/b)\delta_{ij}.$$
The corresponding canonical and marked variational-grand laws have the same limits by their independent Gaussian marking. Momentum is in kg m s^-1, E_0K is in joules, and b=E_0/(k_BT) is dimensionless. These conclusions concern only the named moments, not every unbounded mark observable.

## Facts & Assumptions

**Given:** A fixed cube, the model and Gaussian kernel, the shell and canonical laws, and the local conditional KL bound.

[A1] AC is used in the relative-entropy variational inequality ([[def-axiom-of-choice]]).

[F1] [[thm-csm-local-mark-kl-bound]]: expected conditional KL for the marks attached to points in $\Delta$, relative to $\nu_b^{\otimes N_\Delta}$, tends to zero.

[F2] [[lem-csm-gaussian-mark-moments]]: for g=K,p_i,p_ip_j the centered log moment-generating function c_g(t) is finite near zero and O(t²); the respective means are d/(2b), 0, and (mE_0/b)δ_ij.

[F3] [[thm-csm-total-canonical-window]] and [[def-csm-full-marked-model]]: the shell is supported on $|\mathcal H/V_n-e_b|\leq\delta_n$, stability bounds the positional energy below, and the positional shell and canonical laws are torus-translation invariant.



[F4] [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: for every bounded measurable h, D(P||Q)≥P(h)-log Q(e^h).

[F5] [[thm-csm-full-shell-positional-minimizer]]: the exact-N positional canonical expectations of every local-tame test, including $N_\Delta$, converge to $P_*$, and $N_\Delta$ is local-tame.

[F6] [[lem-csm-gaussian-marked-lift-existence]]: $P_*$ has a probability lift whose marks, conditional on positions, are independent with law $\nu_b$.

## Proof

**Given:** The stated assumptions and supplier definitions.

1.1 Fix one named $g$ and write $S_\Delta=\sum_{x\in q\cap\Delta}(g(p_x)-E_\nu g)$. For positive $t$ in reciprocal units to $g$, the unbounded test $tS_\Delta$ is dimensionless; define $h_M:=\max(-M,\min(M,tS_\Delta))$ and first use this bounded truncation in [F4]. The bounds $|h_M|\leq t|S_\Delta|$ and $e^{h_M}\leq1+e^{tS_\Delta}$, together with shell integrability from [F3] and the Gaussian exponential moment [F2], permit dominated convergence as $M\to\infty$. Since $N_\Delta\leq N_n$ and $c_g(t)$ is finite near zero, the reference exponential moment is finite at each $n$. Thus the variational inequality extends to $tS_\Delta$ and gives
$$tE_{b_{n,\Delta}(.|q)}S_\Delta\le D(b_{n,\Delta}(.|q)||ν_b^{⊗N_\Delta})+N_\Delta c_g(t)$$
for sufficiently small t>0. Testing with -tS_Δ gives the analogous inequality for -E S_Δ and c_g(-t). The integrals are finite: the shell bounds total kinetic energy at each n, and the Gaussian exponential moments exist by [F2]. Averaging over B_n yields
$$|E_{M_n^{ph}}S_\Delta|\le\{E_{B_n}D(b_{n,\Delta}||ν_b^{⊗N_\Delta})+E_{B_n}N_\Delta\max(c_g(t),c_g(-t))\}/t.$$
[A1, F1, F2, F3, F4, construct]

2.1 For any fixed exact-$N_n$ configuration on the torus, averaging $N_\Delta$ over all torus translations gives $N_n|\Delta|/V_n$: each of its $N_n$ points is translated into $\Delta$ for a set of translation parameters of Lebesgue measure $|\Delta|$. Translation invariance of $B_n$ and $C_n^{\rm pos}$ therefore gives $E_{B_n}N_\Delta=E_{C_n^{\rm pos}}N_\Delta=N_n|\Delta|/V_n\to\rho|\Delta|$. For fixed $t>0$, the first numerator term in step 1.1 vanishes by [F1]. The limsup is at most $\rho|\Delta|\max(c_g(t),c_g(-t))/t$; this tends to zero as $t\downarrow0$ because $c_g(\pm t)=O(t^2)$ by [F2]. Hence $E_{M_n^{\rm ph}}S_\Delta\to0$. Adding $E_{B_n}N_\Delta\,E_{\nu_b}g$ and substituting the three means in [F2] proves the shell formulas. By [F5], $E_{P_*}N_\Delta=\lim_nE_{C_n^{\rm pos}}N_\Delta=\rho|\Delta|$. Conditional independent marking [F6] gives the same three limits for the variational-grand marked law; the exact canonical law has them by independent marking as well. [A1, F1, F2, F3, F5, F6, step 1.1, algebra] ∎
