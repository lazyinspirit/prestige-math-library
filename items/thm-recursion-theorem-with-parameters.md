---
id: thm-recursion-theorem-with-parameters
kind: theorem
title: "The recursion theorem with parameters"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-kleenes-second-recursion-theorem, thm-smn-parameter-theorem, def-computable-program-transformer]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
    - title: "Lawrence S. Moss, Invitation to Computability and Recursion, The Recursion Theorem"
      url: "https://lmoss.github.io/onesharp/recThm/recursion_theorem.html"
---

## Statement

Fix an acceptable numbering $(\varphi_e)_{e\in\mathbb N}$. For every total
computable function
$$ F:\mathbb N^2\to\mathbb N, $$
there exists a total computable function $q:\mathbb N\to\mathbb N$ such that
for every parameter $a$,
$$ \varphi_{q(a)}=\varphi_{F(a,q(a))}. $$

## Facts & Assumptions

**Given:** A total computable function $F:\mathbb N^2\to\mathbb N$.

[L1] The $s$-m-$n$ theorem gives a total computable specialization function $s_2^1$, by [[thm-smn-parameter-theorem]].

[L2] Kleene's second recursion theorem gives fixed points for total computable program transformers, by [[thm-kleenes-second-recursion-theorem]].

## Proof

**Proof technique:** direct.

1.1 Let $s_2^1$ be the specialization function from [L1]. Define a ternary partial computable function by $$ \Psi(a,u,x):=\varphi_{F(a,s_2^1(u,a,u))}(x). $$ Because $F$ and $s_2^1$ are total computable, $\Psi$ is partial computable, so choose an index $r$ with $$ \varphi_r(\ulcorner a,\ulcorner u,x\urcorner_{\mathrm{seq}}\urcorner_{\mathrm{seq}})\simeq\Psi(a,u,x) $$ for all $a,u,x$. [L1, given, construct]

2.1 Define $$ q(a):=s_2^1(r,a,r). $$ This function is total computable because $s_2^1$ is. [L1, step 1.1, construct]

3.1 For every $a$ and $x$, $$ \varphi_{q(a)}(x)\simeq\varphi_r(\ulcorner a,\ulcorner r,x\urcorner_{\mathrm{seq}}\urcorner_{\mathrm{seq}})=\Psi(a,r,x)=\varphi_{F(a,s_2^1(r,a,r))}(x)=\varphi_{F(a,q(a))}(x). $$ Hence $\varphi_{q(a)}=\varphi_{F(a,q(a))}$ for every parameter $a$. [L1, step 2.1, algebra]

4.1 Therefore the fixed-point construction can be carried out uniformly in the external parameter. [L2, step 3.1] ∎
