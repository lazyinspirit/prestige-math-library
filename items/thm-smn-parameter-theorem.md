---
id: thm-smn-parameter-theorem
kind: theorem
title: "The s-m-n theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-parameter-specialization-function, def-universal-and-acceptable-numbering, def-natural-number-coding-of-finite-sequences]
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
    - title: "Lawrence S. Moss, Invitation to Computability and Recursion, The s-m-n Theorem"
      url: "https://lmoss.github.io/onesharp/more_programs/smn.html"
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
---

## Statement

If $(\varphi_e)_{e\in\mathbb N}$ is an acceptable numbering, then for every
$m,n\in\mathbb N$ there exists a parameter-specialization function $s_m^n$.

## Facts & Assumptions

**Given:** An acceptable numbering $(\varphi_e)_{e\in\mathbb N}$ and natural numbers $m,n$.

[L1] Acceptability supplies a total computable binary hard-wiring map $s(e,a)$ with $$ \varphi_{s(e,a)}(x)\simeq\varphi_e(\ulcorner a,x\urcorner_{\mathrm{seq}}), $$ by [[def-universal-and-acceptable-numbering]].

[L2] A parameter-specialization function $s_m^n$ is required to satisfy the displayed tuple-coding identity of [[def-parameter-specialization-function]].

## Proof

**Proof technique:** direct.

1.1 Define the functions $s_m^n$ recursively from the binary map of [L1]: $$ s_0^n(e):=e, $$ and $$ s_{m+1}^n(e,a_1,\dots,a_{m+1}):=s\bigl(s_m^{n+1}(e,a_1,\dots,a_m),a_{m+1}\bigr). $$ Because $s$ is total computable and composition preserves total computability, each $s_m^n$ is total computable. [L1, given, construct]

2.1 We prove the defining identity from [L2] by induction on $m$. For $m=0$, step 1.1 gives $s_0^n(e)=e$, so the statement is immediate. Assume it holds for $m$. Then for every input tuple $b_1,\dots,b_n$, $$ \varphi_{s_{m+1}^n(e,a_1,\dots,a_{m+1})}(\operatorname{Inp}_n(b_1,\dots,b_n)) $$ $$ \simeq \varphi_{s_m^{n+1}(e,a_1,\dots,a_m)}\bigl(\ulcorner a_{m+1},\operatorname{Inp}_n(b_1,\dots,b_n)\urcorner_{\mathrm{seq}}\bigr) $$ by [L1]. By the definition in [L2], that inner code is exactly $$ \operatorname{Inp}_{n+1}(a_{m+1},b_1,\dots,b_n). $$ The induction hypothesis therefore turns the right-hand side into $$ \varphi_e(\operatorname{Inp}_{m+n+1}(a_1,\dots,a_m,a_{m+1},b_1,\dots,b_n)). $$ So the required identity also holds for $m+1$. [L1, L2, step 1.1, induction]

3.1 Therefore for every $m,n$ the recursively defined $s_m^n$ is a parameter-specialization function. [L2, step 1.1, step 2.1] ∎
