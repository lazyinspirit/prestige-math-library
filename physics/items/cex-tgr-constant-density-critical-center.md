---
id: cex-tgr-constant-density-critical-center
kind: counterexample
title: "Constant-density limiting center loses regularity"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - thm-tgr-constant-density-star-verified
  - lem-tdmath-reciprocal-naturals-tend-zero
  - lem-q-and-irrationals-dense-r
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-tgr-constant-density-star-verified: mathematical-premise
  lem-tdmath-reciprocal-naturals-tend-zero: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
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

[F2] The sequence $1/(k+1)$ indexed by $k\in\mathbb N$ tends to zero, with its positive terms explicitly identified ([[lem-tdmath-reciprocal-naturals-tend-zero]]).

[F3] Rational numbers are dense in $\mathbb R$; in particular every interval $(0,\eta)$ with real $\eta>0$ contains a positive rational, by clause 1 of [[lem-q-and-irrationals-dense-r]].

[A1] The geometric supplier chain uses exactly $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], with no full Axiom of Choice.

## Counterexample

1.1 Fix $\rho_0=\epsilon_0/c^2>0$. For integers $n\ge2$, set $u_n=8/9-1/n$ and $R_n=c^2\sqrt{3u_n/(8\pi G\epsilon_0)}>0$. With $M_n=4\pi\rho_0R_n^3/3$, direct substitution gives $2GM_n/(c^2R_n)=8\pi G\epsilon_0R_n^2/(3c^4)=u_n\in(0,8/9)$. Thus each $(\rho_0,R_n)$ supplies an admissible regular star of [F1], rather than varying $u$ at fixed radius. By [F2], after reindexing $k=n-1$, $1/n=1/(k+1)\to0$. Set $a_n=\sqrt{1-u_n}=\sqrt{1/9+1/n}>1/3$; then $$0<a_n-\frac13=\frac{1/n}{a_n+1/3}\le\frac{3}{2n},$$ For any real $\eta>0$, [F3] gives rational $q$ with $0<q<2\eta/3$. By [F2], eventually $1/n<q$, so $|a_n-1/3|\le3/(2n)<3q/2<\eta$. This proves $a_n\to1/3$ directly from the convergence definition, including all rational positive error thresholds. [given, A1, F1, F2, F3, construct, algebra]

2.1 For $n\ge9$, step 1.1 gives $a_n\le1/2$, so $\epsilon_0(1-a_n)\ge\epsilon_0/2$ and $0<3a_n-1\le9/(2n)$. Hence $p_c(u_n)\ge\epsilon_0 n/9$. Given $M>0$, apply [F3] to $(0,\epsilon_0/(9M))$ to choose a rational $q>0$ with $q<\epsilon_0/(9M)$; by [F2], for all sufficiently large $n$, $1/n<q$, so $p_c(u_n)>M$. Also $0<e^{\phi(0)}(u_n)=(3a_n-1)/2\le9/(4n)$; for any $\eta>0$, apply [F3] to $(0,4\eta/9)$ to choose rational $q>0$ with $q<4\eta/9$ and apply [F2] to get $e^{\phi(0)}(u_n)<\eta$ eventually. Thus the central pressure diverges to $+\infty$ and the central lapse tends to zero. At $u=8/9$ the denominator is exactly zero with positive numerator, so no finite central pressure or positive central lapse is obtained by extending these formulas. [A1, F1, F2, F3, step 1.1, algebra] ∎

## Remarks

This refutes endpoint regularity for this explicit family only. It is not a proof of a compactness bound for other density profiles.


