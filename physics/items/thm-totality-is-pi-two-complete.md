---
id: thm-totality-is-pi-two-complete
kind: theorem
title: "The totality set is Pi_2^0-complete"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sigma-n-pi-n-and-delta-n-sets, def-arithmetical-level-completeness, def-kleene-t-predicate-and-output-function, thm-smn-parameter-theorem]
proof_strategy: direct
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Example 1.5"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (thm-totality-is-pi-two-complete). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

$\mathrm{TOT}=\{e:(\forall x)\,\varphi_e(x)\downarrow\}$ is $\Pi_2^0$-complete.

## Facts & Assumptions

**Given:** An acceptable numbering $(\varphi_e)$ and an arbitrary $\Pi_2^0$ set $A\subseteq\mathbb N$.

[F1] $\Pi_2^0$ membership has a $\forall x\exists y$ formula with primitive-recursive matrix ([[def-sigma-n-pi-n-and-delta-n-sets]]).

[F2] Completeness means membership in $\Pi_2^0$ and a total computable many-one reduction from every $\Pi_2^0$ set ([[def-arithmetical-level-completeness]]).

[F3] $T(e,x,s)$ is a primitive-recursive test for a complete halting computation ([[def-kleene-t-predicate-and-output-function]]).

[F4] The parameter theorem makes the index of a program with one parameter fixed a total computable function of that parameter ([[thm-smn-parameter-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [F3], $\varphi_e(x)\downarrow$ is equivalent to $\exists s\,T(e,x,s)$ with a primitive-recursive matrix. Thus $e\in\mathrm{TOT}$ is $\forall x\exists s\,T(e,x,s)$, a $\Pi_2^0$ predicate. [F1, F3, given]

1.2 By [F1], write $z\in A\iff\forall x\exists y\,R(z,x,y)$ with $R$ primitive recursive. Fix one program $P$ which, on coded inputs $(z,x)$, tests $R(z,x,0),R(z,x,1),\ldots$ in order and halts with output $0$ at the first successful test. Each test terminates, so $P(z,x)$ halts exactly when $\exists y\,R(z,x,y)$. [F1, given, construct]

2.1 Let $e_P$ be a fixed index of $P$. The specialization map in [F4] gives a total computable $f(z)=s_1^1(e_P,z)$ whose program on input $x$ agrees with $P(z,x)$. Hence $f(z)\in\mathrm{TOT}$ exactly when $\forall x\exists y\,R(z,x,y)$, equivalently $z\in A$. Since $A$ was arbitrary, [F2] and step 1.1 prove $\Pi_2^0$-completeness. [F2, F4, step 1.1, step 1.2] ∎
