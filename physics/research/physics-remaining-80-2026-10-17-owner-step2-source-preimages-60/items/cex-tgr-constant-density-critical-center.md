---
id: cex-tgr-constant-density-critical-center
kind: counterexample
title: "Constant-density limiting center loses regularity"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - thm-tgr-constant-density-star-verified
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-tgr-constant-density-star-verified: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (109)–(112)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF p. 8"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
---

## Statement refuted

For a fixed energy density $\epsilon_0>0$, vary the radius $R>0$ in the regular constant-density branch of [[thm-tgr-constant-density-star-verified]], with $u=8\pi G\epsilon_0R^2/(3c^4)\in(0,8/9)$. The claim that this fixed-density family extends to $u=8/9$ with finite central pressure and a positive central lapse is false.

## Facts & Assumptions

**Given:** The central pressure and lapse formulas of [[thm-tgr-constant-density-star-verified]], with $\epsilon_0>0$ fixed and $\mathrm{ZF}+\mathrm{AC}_\omega$ as in [[def-countable-choice]].

[F1] On the branch $0<u<8/9$, $a=\sqrt{1-u}>1/3$, $p_c=\epsilon_0(1-a)/(3a-1)$, and $e^{\phi(0)}=(3a-1)/2$ ([[thm-tgr-constant-density-star-verified]]).

[A1] The geometric supplier chain uses exactly $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], with no full Axiom of Choice.

## Counterexample

1.1 Fix $\rho_0=\epsilon_0/c^2>0$. For integers $n\ge2$, set $u_n=8/9-1/n$ and $R_n=c^2\sqrt{3u_n/(8\pi G\epsilon_0)}>0$. With $M_n=4\pi\rho_0R_n^3/3$, direct substitution gives $2GM_n/(c^2R_n)=8\pi G\epsilon_0R_n^2/(3c^4)=u_n\in(0,8/9)$. Thus each $(\rho_0,R_n)$ supplies an admissible regular star of [F1], rather than varying $u$ at fixed radius. Also $a_n=\sqrt{1-u_n}=\sqrt{1/9+1/n}\downarrow1/3$ as $n\to\infty$. [given, A1, F1, construct, algebra]

2.1 The numerator $\epsilon_0(1-a_n)$ tends to $2\epsilon_0/3>0$ while $3a_n-1$ tends to $0$ through positive values. Thus $p_c(u_n)=\epsilon_0(1-a_n)/(3a_n-1)\to+\infty$, and $e^{\phi(0)}(u_n)=(3a_n-1)/2\to0$. At $u=8/9$ the denominator is exactly zero with positive numerator, so no finite central pressure or positive central lapse is obtained by extending these formulas. [A1, F1, step 1.1, algebra] ∎

## Remarks

This refutes endpoint regularity for this explicit family only. It is not a proof of a compactness bound for other density profiles.


