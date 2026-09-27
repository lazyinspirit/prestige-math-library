---
id: fs-the-verifier-trusts-the-final-field-value
kind: false-statement
title: "False: the verifier can trust the final field value"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-shamir-protocol-for-tqbf, lem-total-soundness-follows-by-union-bound, def-quantified-boolean-formula-and-tqbf, def-arithmetization-of-a-boolean-formula, def-completeness-and-soundness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

**False assertion.** The Shamir protocol remains sound if its terminal step is modified so that the verifier accepts whenever the current claim equals a field value $v$ announced by the prover, instead of evaluating the arithmetized matrix $b$ at the current point: on every false closed prenex quantified Boolean formula the modified verifier would still accept with probability at most $1/3$ against every prover.

## Facts & Assumptions

**Given:** The modified protocol, in which the round checks of the Shamir protocol are kept unchanged and the terminal comparison $c=b(\sigma)$ is replaced by the comparison $c=v$ for a value $v$ announced by the prover.

[A1] The rounds run for $t=T,\dots,1$, the initial claim is $c=1$, a round with node $M$ checks $c=s(0)s(1)$ for a universal node, $c=s(0)+s(1)-s(0)s(1)$ for an existential node, and $c=(1-a)s(0)+a\,s(1)$ with $a=\sigma(i)$ for a reduction, and then sets $c=s(r_t)$ at the fresh challenge; the unmodified terminal step accepts exactly when $c=b(\sigma)$, and this evaluation is the only place where the matrix arithmetization is used ([[def-shamir-protocol-for-tqbf]]).

[A2] Soundness $s$ of a protocol means that for every input outside the language and every prover strategy the acceptance probability is at most $s$, so soundness at most $1/3$ fails as soon as one false instance is accepted with probability exceeding $1/3$ ([[def-completeness-and-soundness]]).

[A3] A closed prenex quantified Boolean formula $\exists x\,\varphi(x)$ is true exactly when $\varphi$ holds for $x=0$ or for $x=1$ ([[def-quantified-boolean-formula-and-tqbf]]).

[A4] Arithmetization sends the leaf $x$ to $X$ and forms $X(1-X)$ for $x\land\neg x$, and it agrees with the Boolean value of the matrix at Boolean inputs ([[def-arithmetization-of-a-boolean-formula]]).

[L1] The unmodified protocol has soundness at most $1/3$ on false inputs, achieved through the terminal evaluation against $b$ ([[lem-total-soundness-follows-by-union-bound]]).



## Refutation

1.1 Let $\Phi:=\exists x\,(x\land\neg x)$. By [A3] the formula is false: $\varphi(x)=x\land\neg x$ holds neither at $x=0$ nor at $x=1$, so the existential quantification is false. Its matrix arithmetization is $b=X(1-X)$. [A3, A4, construct]

1.2 Consider the prover strategy that sends, in every round, the constant coefficient list $s\equiv1$, and announces $v=1$ at the modified terminal step; this is a legal message in every round, since the constant polynomial has degree $0\le D$. [A1, construct]

2.1 We verify that every round test passes and that the claim remains $1$. The claim starts at $c=1$. For a universal node the test is $c=s(0)s(1)=1\cdot1=1$; for an existential node it is $c=s(0)+s(1)-s(0)s(1)=1+1-1=1$; for a reduction with current value $a$ it is $c=(1-a)s(0)+a\,s(1)=(1-a)+a=1$. In every case the test passes, and the update $c:=s(r_t)$ leaves $c=1$ for every challenge $r_t$. [A1, step 1.2, algebra]

3.1 Consequently, after all rounds the claim is $c=1$; the modified verifier then compares it with the announced value $v=1$ and accepts. This holds for every random tape, because the strategy $s\equiv1$ and the announcement $v=1$ do not depend on the challenges. [step 2.1, A1, given]

4.1 The modified verifier therefore accepts the false input $\Phi$ with probability $1$, which is greater than $1/3$; by [A2] the quality that fails here is exactly soundness, so the false assertion is refuted. This also shows why the terminal evaluation $c=b(\sigma)$ cannot be delegated to the prover: it is what forces the final claim to agree with a value computed from the input. [step 3.1, A2, L1, given] ∎
