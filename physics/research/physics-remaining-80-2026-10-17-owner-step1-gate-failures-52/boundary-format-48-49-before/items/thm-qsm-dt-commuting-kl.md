---
id: thm-qsm-dt-commuting-kl
kind: theorem
title: Gibbs jump commuting relative entropy production
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 7
deps:
  - thm-qsm-dt-gibbs-jump
dependency_roles:
  thm-qsm-dt-gibbs-jump: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §1.3.4
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: Eric A. Carlen and Jan Maas, Gradient flow and entropy inequalities for quantum Markov semigroups with detailed balance, §2
      url: https://arxiv.org/pdf/1609.01254
---

## Statement

Use the finite connected Gibbs jump model of [[thm-qsm-dt-gibbs-jump]]. For a diagonal density $\rho_t=\sum_a p_a(t)|a\rangle\langle a|$, the populations satisfy $p'_a=\sum_{b\ne a}(p_bw_{ba}-p_aw_{ab})$. Define the dimensionless classical relative entropy

$$K(p\mid\pi):=\sum_{a\in E}p_a\log\frac{p_a}{\pi_a},\qquad 0\log(0/\pi_a):=0,$$

where $\log$ is the natural logarithm. For every $t>0$, $p_a(t)>0$ for all $a$, and

$$\frac{d}{dt}K(p_t\mid\pi)=-\frac12\sum_{\substack{a,b\in E\\a\ne b}}\pi_aw_{ab}(u_a-u_b)(\log u_a-\log u_b)\leq0,\qquad u_a:=p_a/\pi_a.$$

Equality in this derivative holds exactly when $p_t=\pi$. For any initial probability vector, including one with zero entries, $t\mapsto K(p_t\mid\pi)$ is continuous at $t=0$ and nonincreasing on $[0,\infty)$. This is a finite commuting-state statement; it asserts no entropy-production theorem for noncommuting densities.

## Facts & Assumptions

**Given:** The finite state set $E$, positive Gibbs weights $\pi_a$, connected rates $w_{ab}$, and the population equation in [[thm-qsm-dt-gibbs-jump]].

[F1] [[thm-qsm-dt-gibbs-jump]]: $\pi_aw_{ab}=\pi_bw_{ba}$, the positive-rate graph is connected, and diagonal populations obey $p'_a=\sum_{b\ne a}(p_bw_{ba}-p_aw_{ab})$.

## Proof

1.1 The population equation in [F1] is $p'_t=p_tW$ for row probability vectors, so $p_t=p_0e^{tW}$. Let $\lambda>\max_a r_a$ and $P:=I+W/\lambda$. Then $P$ is a finite stochastic matrix with $P_{aa}>0$, and the matrix exponential satisfies
$$
e^{tW}=e^{-\lambda t}\sum_{n=0}^{\infty}\frac{(\lambda t)^n}{n!}P^n.
$$
For any initial probability vector, choose $a$ with $p_a(0)>0$. For every $b$, graph connectivity gives a finite positive-rate path from $a$ to $b$; the corresponding power $P^n$ has $(P^n)_{ab}>0$. Its coefficient in the series is positive for $t>0$, so $p_b(t)>0$. [given, F1, choose, construct, algebra]

2.1 For $t>0$, put $u_a=p_a(t)/\pi_a>0$ and, for $a\ne b$, put $c_{ab}:=\pi_aw_{ab}=c_{ba}$. Differentiating $K$ and using $\sum_a p'_a=0$ gives
$$
\frac{d}{dt}K(p_t\mid\pi)=\sum_a p'_a\log u_a=\sum_{a\ne b}c_{ab}(u_b-u_a)\log u_a.
$$
Pairing the $(a,b)$ and $(b,a)$ terms yields the displayed symmetric formula. Since $\log$ is increasing, each $(u_a-u_b)(\log u_a-\log u_b)\geq0$. [given, F1, step 1.1, algebra]

3.1 Equality in step 2.1 forces $u_a=u_b$ on every positive-rate edge. Connectedness makes all $u_a$ equal, and $\sum_a p_a=\sum_a\pi_a=1$ then gives $u_a=1$, so $p_t=\pi$. Conversely $p_t=\pi$ makes every term zero. Finally $x\log(x/\pi_a)\to0$ as $x\downarrow0$, so $K(p_t\mid\pi)$ is continuous at $t=0$; applying the derivative inequality on $[\varepsilon,t]$ and taking $\varepsilon\downarrow0$ proves nonincrease from any initial probability vector. [given, F1, step 2.1, algebra] ∎
