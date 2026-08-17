---
id: prop-complement-and-disjoint-union-axioms-for-a-lambda-system
kind: proposition
title: "A family is a lambda-system exactly when it contains $X$ and is closed under complements and countable disjoint unions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lambda-system]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "A. Dembo, Probability Theory lecture notes, Definition 1.1.36 and the Remark following it"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $\mathcal D\subseteq\mathcal P(X)$. Then $\mathcal D$ is
a lambda-system on $X$ if and only if

1. $X\in\mathcal D$;
2. $X\setminus A\in\mathcal D$ whenever $A\in\mathcal D$;
3. $\bigcup_{n\in\mathbb N}A_n\in\mathcal D$ whenever $A_0,A_1,\dots\in\mathcal D$
   are pairwise disjoint.

## Facts & Assumptions

**Given:** A set $X$ and a family $\mathcal D\subseteq\mathcal P(X)$.

[L1] A lambda-system on $X$ is a family $\mathcal D\subseteq\mathcal P(X)$ such that $X\in\mathcal D$; if $A,B\in\mathcal D$ and $A\subseteq B$, then $B\setminus A\in\mathcal D$; and if $A_0\subseteq A_1\subseteq\cdots$ with every $A_n\in\mathcal D$, then $\bigcup_{n\in\mathbb N}A_n\in\mathcal D$ ([[def-lambda-system]]).

## Proof

**Proof technique:** direct.

1.1 Forward direction: assume, in this step and in every later step that cites it, that $\mathcal D$ is a lambda-system. Then $X\in\mathcal D$ by [L1], which is clause 1. For $A\in\mathcal D$ we have $A\subseteq X$ and $X\in\mathcal D$, so $X\setminus A\in\mathcal D$ by the relative-difference clause of [L1]; this is clause 2. [L1, given]

1.2 Reverse direction, whose hypothesis is independent of the forward branch: assume, in this step and in every later step that cites it, clauses 1, 2 and 3. Then $X\in\mathcal D$, which is the first lambda-system clause of [L1], and $\emptyset=X\setminus X\in\mathcal D$ by clauses 1 and 2. [given]

2.1 Return to the forward direction, so that the hypothesis in force is again the one of step 1.1, namely that $\mathcal D$ is a lambda-system. Let $A_0,A_1,\dots\in\mathcal D$ be pairwise disjoint and put $B_n:=\bigcup_{k\le n}A_k$. We show $B_n\in\mathcal D$ by induction on $n$. For $n=0$, $B_0=A_0\in\mathcal D$. Suppose $B_n\in\mathcal D$. Disjointness gives $A_{n+1}\subseteq X\setminus B_n$, and $X\setminus B_n\in\mathcal D$ by step 1.1, so $(X\setminus B_n)\setminus A_{n+1}\in\mathcal D$ by [L1]. Its complement in $X$ is $X\setminus\bigl((X\setminus B_n)\setminus A_{n+1}\bigr)=B_n\cup A_{n+1}=B_{n+1}$, which lies in $\mathcal D$ by step 1.1. [L1, step 1.1, algebra]

2.2 Still under the clauses 1, 2 and 3 assumed in step 1.2, let $A,B\in\mathcal D$ with $A\subseteq B$. Then $X\setminus B\in\mathcal D$ by clause 2, and $A\cap(X\setminus B)=\emptyset$ because $A\subseteq B$. The sequence $A,\ X\setminus B,\ \emptyset,\ \emptyset,\dots$ is therefore a pairwise disjoint sequence in $\mathcal D$ by step 1.2, so clause 3 gives $A\cup(X\setminus B)\in\mathcal D$, and clause 2 then gives $X\setminus\bigl(A\cup(X\setminus B)\bigr)=B\setminus A\in\mathcal D$, which is the relative-difference clause of [L1]. [L1, given, step 1.2, algebra]

3.1 Still in the forward direction, the sets $B_n$ of step 2.1 increase and satisfy $\bigcup_nB_n=\bigcup_nA_n$, so $\bigcup_nA_n\in\mathcal D$ by the increasing-union clause of [L1]. This is clause 3, and with step 1.1 it proves the forward direction. [L1, step 1.1, step 2.1]

4.1 Still under the clauses assumed in step 1.2, let $A_0\subseteq A_1\subseteq\cdots$ lie in $\mathcal D$. Put $C_0:=A_0$ and $C_{n+1}:=A_{n+1}\setminus A_n$; each $C_{n+1}$ lies in $\mathcal D$ by step 2.2, the $C_n$ are pairwise disjoint, and $\bigcup_nC_n=\bigcup_nA_n$. Clause 3 then gives $\bigcup_nA_n\in\mathcal D$, which is the increasing-union clause of [L1]. With steps 1.2 and 2.2 this proves the reverse direction. This proves the stated claim. [L1, given, step 1.2, step 2.2, algebra] ∎
