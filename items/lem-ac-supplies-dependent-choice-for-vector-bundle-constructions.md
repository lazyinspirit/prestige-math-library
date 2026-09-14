---
id: lem-ac-supplies-dependent-choice-for-vector-bundle-constructions
kind: lemma
title: AC supplies the dependent-choice instances used in vector-bundle constructions
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-dependent-choice, thm-recursion]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Thomas J. Jech, The Axiom of Choice, §2.4.1"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
      locator: "Principle of Dependent Choices and its sequence formulation, printed pp.22–23; the prescribed-initial-point implication from AC is derived locally"
---

## Statement

In ZF, the Axiom of Choice implies the prescribed-initial-point form of the
Axiom of Dependent Choice. Explicitly, if $X$ is nonempty, $R$ is an entire
relation on $X$, and $a\in X$, then AC supplies a sequence
$x:\mathbb N\to X$ such that

$$x_0=a\qquad\text{and}\qquad x_n\mathbin R x_{n+1}$$

for every $n\in\mathbb N$. Consequently, a vector-bundle theorem stated under
AC may discharge a separately declared DC hypothesis without assuming another
choice principle.

## Facts & Assumptions

**Given:** ZF, AC, a nonempty set $X$, a relation $R$ entire on $X$, and a
prescribed point $a\in X$.

[F1] AC says that every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F2] DC with prescribed initial point asks for a function $x:\mathbb N\to X$
with $x_0=a$ and $x_n\mathbin R x_{n+1}$ for every $n$
([[def-dependent-choice]]).

[F3] Given a set $X$, a point $a\in X$, and a function $s:X\to X$, recursion
on $\mathbb N$ supplies a unique function $x:\mathbb N\to X$ with $x_0=a$ and
$x_{n+1}=s(x_n)$ ([[thm-recursion]]).

## Proof

**Proof technique:** direct.

1.1 For each $u\in X$, let $S_u=\{v\in X:u\mathbin R v\}$. Every $S_u$ is nonempty because $R$ is entire. Apply [F1] to the set $\mathcal S=\{S_u:u\in X\}$ and let $c$ be its choice function. Define $s:X\to X$ by $s(u)=c(S_u)$. This is well-defined even when two successor sets coincide, and $u\mathbin R s(u)$ for every $u\in X$. [F1, given, construct]

2.1 Apply [F3] to $s$ and the prescribed $a$. It gives $x:\mathbb N\to X$ with $x_0=a$ and $x_{n+1}=s(x_n)$. Step 1.1 then gives $x_n\mathbin R x_{n+1}$ for every $n$. [F3, step 1.1]

3.1 Since $X$, the entire relation $R$, and $a$ were arbitrary, the sequence in step 2.1 satisfies exactly the prescribed-initial-point formulation in [F2]. Thus AC implies DC, and every later use of this lemma spends AC only in the simultaneous choice made in step 1.1. [F2, step 1.1, step 2.1] ∎
