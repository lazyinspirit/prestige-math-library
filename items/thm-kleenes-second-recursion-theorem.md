---
id: thm-kleenes-second-recursion-theorem
kind: theorem
title: "Kleene's second recursion theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-self-reference-construction-from-smn, def-computable-program-transformer]
landmark: true
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

Fix an acceptable numbering $(\varphi_e)_{e\in\mathbb N}$. For every
computable program transformer $F:\mathbb N\to\mathbb N$, there exists an index
$e$ such that
$$ \varphi_e=\varphi_{F(e)} $$
as partial functions.

## Facts & Assumptions

**Given:** A computable program transformer $F$.

[L1] A computable program transformer is a total computable map on indices, by [[def-computable-program-transformer]].

[L2] There is a total computable map $d$ with $$ \varphi_{d(u)}(x)\simeq\varphi_u(\ulcorner u,x\urcorner_{\mathrm{seq}}), $$ by [[lem-self-reference-construction-from-smn]].

## Proof

**Proof technique:** direct.

1.1 Let $d$ be the diagonal map from [L2]. Because $F$ is total computable by [L1], the binary partial function $$ \Psi(z,x):=\varphi_{F(d(z))}(x) $$ is partial computable. Since we are working inside a numbering of all partial computable functions, choose an index $q$ with $$ \varphi_q(\ulcorner z,x\urcorner_{\mathrm{seq}})\simeq\Psi(z,x) $$ for all $z,x$. [L1, L2, given, choose]

2.1 Set $e:=d(q)$. Then for every input $x$, $$ \varphi_e(x)\simeq\varphi_q(\ulcorner q,x\urcorner_{\mathrm{seq}})\simeq\Psi(q,x)=\varphi_{F(d(q))}(x)=\varphi_{F(e)}(x), $$ where the first equivalence is [L2] and the last equality is the definition of $e$. Hence $\varphi_e=\varphi_{F(e)}$. [L2, step 1.1, algebra]

3.1 Therefore every computable program transformer has a fixed point. [step 2.1] ∎
