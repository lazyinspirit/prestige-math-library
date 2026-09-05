---
id: lem-self-reference-construction-from-smn
kind: lemma
title: "The diagonal self-reference construction from s-m-n"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computable-program-transformer, thm-smn-parameter-theorem]
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
    - title: "Lawrence S. Moss, Invitation to Computability and Recursion, The Recursion Theorem"
      url: "https://lmoss.github.io/onesharp/recThm/recursion_theorem.html"
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
---

## Statement

For an acceptable numbering, there exists a total computable function
$$ d:\mathbb N\to\mathbb N $$
such that for every index $u$ and every input $x$,
$$ \varphi_{d(u)}(x)\simeq\varphi_u(\ulcorner u,x\urcorner_{\mathrm{seq}}). $$

## Facts & Assumptions

**Given:** An acceptable numbering $(\varphi_e)_{e\in\mathbb N}$.

[L1] The $s$-m-$n$ theorem gives a total computable specialization function $s_1^1$, by [[thm-smn-parameter-theorem]].

## Proof

**Proof technique:** direct.

1.1 Let $s_1^1$ be the specialization map from [L1]. Define $$ d(u):=s_1^1(u,u). $$ Because $s_1^1$ is total computable, so is $d$. [L1, given, construct]

2.1 By the defining property of $s_1^1$, for every $u$ and $x$ one has $$ \varphi_{d(u)}(x)=\varphi_{s_1^1(u,u)}(x)\simeq\varphi_u(\ulcorner u,x\urcorner_{\mathrm{seq}}). $$ That is exactly the required diagonal identity. [L1, step 1.1]

3.1 Therefore the desired total computable self-reference constructor exists. [step 2.1] ∎
