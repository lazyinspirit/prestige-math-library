---
id: prop-fixed-machine-coding-is-acceptable
kind: proposition
title: "The fixed machine coding gives an acceptable numbering"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-universal-and-acceptable-numbering, def-effective-encoding-of-turing-machines, lem-machine-encoding-is-injective-and-decodable, def-kleene-t-predicate-and-output-function, thm-kleene-normal-form]
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
---

## Statement

Let $\varphi_e$ be the partial function computed by the coded deterministic
one-tape Turing machine with code $e$ on input $x$, when $e$ decodes to a
machine and that machine halts on $x$; if $e$ is malformed or the computation
does not halt, leave $\varphi_e(x)$ undefined. Then
$(\varphi_e)_{e\in\mathbb N}$ is an acceptable numbering.

## Facts & Assumptions

**Given:** The fixed machine coding from [[def-effective-encoding-of-turing-machines]].

[L1] A numbering is acceptable exactly when it is universal and has a total computable hard-wiring map $s(e,a)$ satisfying $$ \varphi_{s(e,a)}(x)\simeq\varphi_e(\ulcorner a,x\urcorner_{\mathrm{seq}}), $$ by [[def-universal-and-acceptable-numbering]].

[L2] The chosen machine coding has a total decoder that recovers the unique coded machine or reports malformed input, by [[lem-machine-encoding-is-injective-and-decodable]].

[L3] The fixed machine encoding makes it effective to build a new coded machine from a finite machine description, by [[def-effective-encoding-of-turing-machines]].

## Proof

**Proof technique:** direct.

1.1 This family is a numbering of the partial computable unary functions. If $f$ is partial computable, some deterministic one-tape Turing machine computes it. Relabel that machine's finite state set and tape alphabet by integers so that the start, accept, and reject states become $0,1,2$ and the symbols become the normalized alphabets of [L3]. The resulting coded machine has some code $e$, and by construction $\varphi_e=f$. [L3, given, construct]

1.2 The numbering is universal. On input $(e,x)$, first run the total decoder from [L2]. If $e$ is malformed, diverge forever. If $e$ decodes to a machine $M_e$, simulate $M_e$ on input $x$ and output exactly what $M_e$ outputs if it halts. This produces a partial computable binary function $U(e,x)$ with $U(e,x)\simeq\varphi_e(x)$. [L2, given, construct]

1.3 For hard-wiring, given $e$ and $a$, first run the total decoder [L2]. If $e$ is malformed, construct a fixed machine $N_{e,a}$ that diverges on every input. Otherwise construct a coded machine $N_{e,a}$ that on input $x$ first computes the pair code $\ulcorner a,x\urcorner_{\mathrm{seq}}$, then simulates the machine coded by $e$ on that code, and copies out the simulated output if the simulation halts. By [L2] and [L3], this case-defined map $(e,a)\mapsto\ulcorner N_{e,a}\urcorner$ is total and computable. [L2, L3, cases, construct]

2.1 By construction, for every $x$ one has $$ \varphi_{\ulcorner N_{e,a}\urcorner}(x)\simeq\varphi_e(\ulcorner a,x\urcorner_{\mathrm{seq}}). $$ So the function $s(e,a):=\ulcorner N_{e,a}\urcorner$ is the required hard-wiring operation from [L1]. [L1, step 1.3]

3.1 Steps 1.1, 1.2, and 2.1 show that $(\varphi_e)$ is a numbering, is universal, and has the required hard-wiring map. Therefore the fixed machine coding gives an acceptable numbering. [L1, step 1.1, step 1.2, step 2.1] ∎
