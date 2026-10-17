---
id: ex-tgr-constant-density-positive-branch
kind: example
title: "Positive regular constant-density branch"
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
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (101)–(110)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF pp. 8–9"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
---

## Example

Fix $R>0$ and choose
$$\rho_0=\frac{3c^2}{16\pi G R^2},\qquad M_R=\frac{4\pi\rho_0R^3}{3},\qquad u=\frac{2GM_R}{c^2R}=\frac12.$$
With $\epsilon_0=\rho_0c^2$ and $a=1/\sqrt2$, the exact interior profile is
$$b(r)=1-\frac{r^2}{2R^2},\qquad p(r)=\epsilon_0\frac{\sqrt{1-r^2/(2R^2)}-1/\sqrt2}{3/\sqrt2-\sqrt{1-r^2/(2R^2)}},\qquad e^{\phi(r)}=\frac{3/\sqrt2-\sqrt{1-r^2/(2R^2)}}2.$$

## Facts & Assumptions

**Given:** The chosen $R,\rho_0,M_R,u$ and the exact-solution theorem [[thm-tgr-constant-density-star-verified]], under $\mathrm{ZF}+\mathrm{AC}_\omega$ of [[def-countable-choice]].

[F1] For every $\rho_0,R>0$ with $u=2GM_R/(c^2R)\in(0,8/9)$, [[thm-tgr-constant-density-star-verified]] verifies the interior and vacuum equations, regular center, matching, and central pressure formula $\epsilon_0(1-a)/(3a-1)$.

[A1] The geometric supplier chain uses exactly $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], with no full Axiom of Choice.

## Verification

1.1 Substitution of the chosen $\rho_0$ gives $M_R=c^2R/(4G)$ and hence $u=1/2\in(0,8/9)$. Therefore [F1] applies to the displayed functions. [given, A1, F1, algebra]

2.1 The central pressure ratio is $$\frac{p(0)}{\epsilon_0}=\frac{1-1/\sqrt2}{3/\sqrt2-1}=\frac{2\sqrt2-1}{7}>0,$$ and the central lapse is $(3/\sqrt2-1)/2>0$; the surface pressure is $p(R)=0$ and surface lapse is $1/\sqrt2$. The theorem gives the regular Cartesian center and no-layer matching to the vacuum exterior. [A1, F1, step 1.1, algebra] ∎

## Remarks

The profile is an exact solution of the conditional equation system. This mathematical example is not an observed star and supplies no causal transport or stability law.


