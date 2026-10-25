---
id: lem-locally-finite-union-of-sigma-locally-finite-bases
kind: lemma
title: 'A closure-controlled locally finite open cover transfers relative $\sigma$-locally-finite bases to the whole space'
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-discrete-family-and-sigma-bases, def-cover-refinement-and-local-finiteness, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "UCR, Partitions of Unity and a Metrization Theorem of Smirnov"
      url: "https://math.ucr.edu/~res/math205A/smirnov.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-09-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $(W_s)_{s\in S}$ be a locally finite open cover of $X$. For each $s$,
suppose an open set $U_s$ satisfies $\overline{W_s}\subseteq U_s$ and has a
supplied relative $\sigma$-locally-finite open basis
$\bigcup_{n<\omega}\mathcal B_{s,n}$. Then $X$ has a
$\sigma$-locally-finite open basis. No choice principle is needed beyond the
supplied indexed bases and assignments.

## Facts & Assumptions

**Given:** The locally finite cover, closure-controlled assignments, and indexed relative bases in the statement.

[L1] A locally finite family has a neighbourhood at each point meeting only finitely many members ([[def-cover-refinement-and-local-finiteness]]).

[L2] A subspace-open set is the intersection of the subspace with an ambient open set ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 Put $\mathcal C_n=\{B\cap W_s:s\in S,\ B\in\mathcal B_{s,n}\}$. Each member is open in $X$, since $W_s$ is open and a set open in the open subspace $U_s$ is ambient open. [L2]

2.1 Fix $x\in X$. By [L1], choose a neighborhood $N$ meeting only finitely many $W_s$. For each of these indices, if $x\in U_s$, relative local finiteness supplies an ambient neighborhood $N_s$ whose intersection with $U_s$ meets only finitely many $B\in\mathcal B_{s,n}$. If $x\notin U_s$, then $x\notin\overline{W_s}$, so choose $N_s$ disjoint from $W_s$. Intersect $N$ with this finite collection of $N_s$. It meets only finitely many members of $\mathcal C_n$; hence $\mathcal C_n$ is locally finite. [L1, step 1.1]

2.2 If $O$ is open and $x\in O$, choose $s$ with $x\in W_s$. A relative basis member $B\in\mathcal B_{s,n}$ contains $x$ and lies in $O\cap U_s$. Then $x\in B\cap W_s\subseteq O$. Thus $\bigcup_n\mathcal C_n$ is a basis. [step 1.1]

3.1 Steps 2.1 and 2.2 prove the result. [step 2.1, step 2.2] ∎
