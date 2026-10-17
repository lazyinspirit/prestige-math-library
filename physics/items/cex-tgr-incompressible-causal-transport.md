---
id: cex-tgr-incompressible-causal-transport
kind: counterexample
title: "Constant-density profile has unequal pressures at equal energy density"
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
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF p. 8"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
---

## Statement refuted

For this item, a differentiable barotropic pressure law is a $C^1$ map $P:J_\epsilon\to\mathbb R$, where $J_\epsilon\subset(0,\infty)$ is an open interval of energy-density values containing $\epsilon_0$, both input energy density and output pressure have units $\mathrm J\,\mathrm m^{-3}$, and $p(r)=P(\epsilon(r))$ for each interior radius $0\le r<R$. The finite causal-slope criterion under consideration is $0\le P'(x)\le1$ for $x\in J_\epsilon$, so $P'$ is dimensionless. For units only, set the formal parameter $c_s^2:=c^2P'(x)$, with units $\mathrm m^2\,\mathrm s^{-2}$; this item assigns no fluid-dynamical meaning to it and makes no claim about an observed signal speed.

The claim refuted is that every regular static constant-density solution supplies such a map $P$ satisfying this slope criterion.

## Facts & Assumptions

**Given:** The exact constant-density branch of [[thm-tgr-constant-density-star-verified]], under $\mathrm{ZF}+\mathrm{AC}_\omega$ as in [[def-countable-choice]]. The slope bound is a stipulated mathematical condition on the candidate map $P$; no fluid evolution equation or empirical signal-speed interpretation is assumed.

[F1] On the branch of [[thm-tgr-constant-density-star-verified]], $a=\sqrt{1-u}$, $B(r)=\sqrt{1-u r^2/R^2}$, $b(r)=B(r)^2$, and $p(r)=\epsilon_0(B(r)-a)/(3a-B(r))$ for $0\le r\le R$; the interior energy density is $\epsilon_0$. At $u=1/2$, $a=1/\sqrt2$, $B(0)=1$, $B(R/2)=\sqrt{7/8}$, and $a\le B(r)\le1$. Hence $3a-B(r)\ge3/\sqrt2-1>0$ throughout the interior, and $p(0)=\epsilon_0(1-a)/(3a-1)>0$ ([[thm-tgr-constant-density-star-verified]]).

[A1] The geometric supplier chain uses exactly $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], with no full Axiom of Choice. The slope bound in the refuted claim is a stipulated mathematical criterion; no fluid evolution equation is assumed.

## Counterexample

1.1 Choose $u=1/2$. The center and the interior point $r=R/2$ both have energy density $\epsilon_0$, while their pressures differ. By [F1], $B(0)=1>B(R/2)=\sqrt{7/8}>1/\sqrt2=a$; the denominators $3a-B(0)$ and $3a-B(R/2)$ are positive. Subtracting the exact pressure formulas gives $$\frac{p(0)-p(R/2)}{\epsilon_0}=\frac{2a(B(0)-B(R/2))}{(3a-B(0))(3a-B(R/2))}>0,$$ so $p(0)>p(R/2)>0$. [A1, F1, construct, algebra]

2.1 If a single-valued relation $p=P(\epsilon)$ described this full static configuration, it would require both $P(\epsilon_0)=p(0)$ and $P(\epsilon_0)=p(R/2)$, contradicting $p(0)>p(R/2)$. Thus the static solution does not supply a single-valued map $P$ satisfying the stated relation, so no value of $P'(\epsilon_0)$, finite sound-speed parameter, or causal bound can be inferred from this solution alone. [given, A1, F1, step 1.1, contradiction] ∎

## Remarks

The interior profile assigns the same energy density $\epsilon_0$ to every interior radius while the pressure varies. Thus pressure is not a single-valued function of energy density along this profile; this does not imply an infinite or superluminal signal speed.


