---
id: ex-tgr-regular-central-pressure-family
kind: example
title: "Local regular-center central-pressure family"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - thm-tgr-tov-regular-center-local-existence
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-tgr-tov-regular-center-local-existence: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (99)–(106)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF pp. 7–8"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
---

## Example

Let $\epsilon_0>0$ have units $\mathrm J\,\mathrm m^{-3}$, let $\lambda\ge0$ be dimensionless, and prescribe the smooth positive state relation $\epsilon(p)=\epsilon_0+\lambda p$ for $p\in I_p=(0,\infty)$. Fix $0<p_1<p_2$ and let the central pressure range be $P_c=[p_1,p_2]$. This is a mathematical equation-of-state example, not an observational stellar model.

## Facts & Assumptions

**Given:** The state relation, the compact interval $P_c$, a fixed central lapse value $\phi_c$, and $\mathrm{ZF}+\mathrm{AC}_\omega$ inherited from [[def-countable-choice]].

[F1] For every smooth positive $\epsilon(p)$ on an open positive pressure interval and compact central pressure interval contained in it with a positive margin, [[thm-tgr-tov-regular-center-local-existence]] supplies a common $R_0>0$, the unique integral-equation profiles in the stated pressure ball, a $C^2$ Cartesian center, continuous dependence on $p_c$, and continuation only within a compact subset where $r>0$, $p\in I_p$, and $b>0$.

[A1] The geometric supplier chain uses exactly $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], with no full Axiom of Choice.

## Verification

1.1 The map $\epsilon(p)=\epsilon_0+\lambda p$ is $C^\infty$ and positive on $I_p=(0,\infty)$. Since $p_1>0$, any $0<\delta<p_1$ gives the required closed pressure margin around $P_c$ inside $I_p$. [given, A1, algebra]

2.1 Apply [F1] under [A1] with this $\epsilon$ and $P_c$. There is one radius $R_0>0$ valid for every $p_c\in[p_1,p_2]$, and the corresponding solutions depend continuously on $p_c$ in the uniform norm; they satisfy $v(0)=K(\epsilon_0+\lambda p_c)/3$, $p'(0)=v'(0)=0$, and have positive lapse and $b\ge1/2$. [A1, F1, step 1.1, algebra] ∎

## Remarks

This is local existence and parameter dependence for the stated mathematical system. No surface at $p=0$, global compactness bound, empirical equation of state, or dynamical stability conclusion follows.


