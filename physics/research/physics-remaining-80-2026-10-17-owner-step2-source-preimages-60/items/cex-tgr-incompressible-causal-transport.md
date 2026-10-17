---
id: cex-tgr-incompressible-causal-transport
kind: counterexample
title: "Static exact star need not give causal transport EOS"
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

Every regular static constant-density solution supplies a single-valued differentiable barotropic transport law $p=P(\epsilon)$ with finite causal derivative $0\le P'(\epsilon)\le1$ (equivalently, under a separately adopted barotropic model, a finite sound-speed parameter $c_s^2=c^2P'(\epsilon)\le c^2$).

## Facts & Assumptions

**Given:** The exact constant-density branch of [[thm-tgr-constant-density-star-verified]], under $\mathrm{ZF}+\mathrm{AC}_\omega$ as in [[def-countable-choice]]. The derivative criterion $0\le P'\le1$ is only the explicitly stated mathematical criterion for a finite causal barotropic transport law in this counterexample; no fluid evolution equation is assumed.

[F1] For each $u\in(0,8/9)$ the exact branch has $\epsilon(r)=\epsilon_0$ for $0\le r<R$, $p(0)=\epsilon_0(1-a)/(3a-1)>0$, and $p(r)>0$ for every $0\le r<R$ ([[thm-tgr-constant-density-star-verified]]).

[A1] The geometric supplier chain uses exactly $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], with no full Axiom of Choice.

## Counterexample

1.1 Choose any branch value, for example $u=1/2$. The center and the interior point $r=R/2$ both have energy density $\epsilon_0$, while their pressures differ: $p(0)>p(R/2)>0$, because $B(0)>B(R/2)>a$ and direct subtraction gives $$\frac{p(0)-p(R/2)}{\epsilon_0}=\frac{2a(B(0)-B(R/2))}{(3a-B(0))(3a-B(R/2))}>0,$$ with both denominator factors positive. [A1, F1, construct, algebra]

2.1 If a single-valued relation $p=P(\epsilon)$ described this full static configuration, it would require both $P(\epsilon_0)=p(0)$ and $P(\epsilon_0)=p(R/2)$, contradicting $p(0)>p(R/2)$. Thus the static solution does not supply a single-valued inverse barotropic transport law at all, so no value of $P'(\epsilon_0)$, finite sound-speed parameter, or causal bound can be inferred from this solution alone. [A1, F1, step 1.1, contradiction] ∎

## Remarks

The forward relation $\epsilon(p)=\epsilon_0$ is a constant state relation, but it is not invertible. The failure is missing transport data, not a deduction of an infinite or superluminal signal speed.


