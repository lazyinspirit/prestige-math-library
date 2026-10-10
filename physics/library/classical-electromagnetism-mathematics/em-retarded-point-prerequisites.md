---
page: em-retarded-point-prerequisites
title: Complete retarded point fields
status: draft
items: [thm-em-retarded-root-and-fields]
examples: []
---

The completion of the retarded point-field layer of the classical
electromagnetism mathematics track. The single item,
[[thm-em-retarded-root-and-fields]], fixes a $C^3$ worldline with a uniform
subluminal bound $|z'|\le v_*<c$ and assembles the full point-source
computation in four clauses. Clause (a) states the event form of the retarded
root: every event off the worldline has exactly one root $s=s(x,t)<t$ of
$t-s=|x-z(s)|/c$, the root map is $C^3$ with derivative formulas $\partial_ts=\kappa^{-1}$
and $\nabla_xs=-n/(c\kappa)$, the emission-time Jacobian $1-n\cdot\beta=\kappa$
is uniformly bounded below by $1-v_*/c$, and $\kappa=1-n\cdot\beta$ is exactly
the denominator produced by the delta substitution. Clause (b) records the
delta substitution as the exact history-integral pairing identity with weight
$(\kappa r)^{-1}$, under Countable Choice, and identifies the Liénard-Wiechert
potentials $\varphi=C/(\kappa r)$ and $A=\beta\varphi/c$ as $C^2$ functions
off the worldline whose zero extensions are locally integrable and define
regular distributions. Clause (c) gives
$E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$ as $C^1$ fields off
the worldline together with the velocity/acceleration split and the uniform
bound $|E_{\mathrm{vel}}|\le|C|(1+v_*/c)(1-v_*/c)^{-3}r^{-2}$. Clause (d)
evaluates the field on the ray family $x_r=z(s_0)+rn$, $t_r=s_0+r/c$, where
the root is exactly the emission time $s_0$, and proves the uniform far-zone
remainder with explicit constant and the equivalent $O(r^{-1})$ limit of $rE$.

The item is mathematics: it carries `domain: mathematics`, depends only on
mathematical suppliers, and asserts no self-force law, radiation-reaction
postulate, physical Maxwell coupling, finite-energy or radiation-flux
conclusion. Its physical consumers are the classical electromagnetism pages
that use the retarded fields; empirical qualifications of any physical use
remain with the consuming physical item. The companion examples page records
the three hypothesis/convention boundaries on which the item's hypotheses
depend.
