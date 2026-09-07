---
id: prop-well-foundedness-and-descending-sequences
kind: proposition
title: "Descending sequences and the choice hypothesis"
status: draft
origin: pipeline
deps: ["thm-transfinite-recursion"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 Exercise 6.9 p.31 (choice made explicit)."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

A well-founded relation $R$ on a definable class $X$ admits no sequence $f:\omega\to X$ with $f(n+1)Rf(n)$ for every $n$. Conversely, if $X$ is a set supplied with a choice function $c$ on all its nonempty subsets, absence of such a sequence implies well-foundedness. The converse is asserted with this extra hypothesis, not in bare ZF.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Let $(W, <)$ be a well-order (def-well-order) and let $G$ be a **class function**: a rule, given by a formula in the language of set theory, that assigns a set $G(h)$ to every function $h$ whose domain is a proper initial segment of $W$ (def-initial-segment). Then there is **exactly one** function $F$ with domain $W$ such that $$F(a) = G(F \restriction W_{<a}) \qquad \text{for every } a \in W.$$ Here $F \restriction W_{<a}$ is the restriction of $F$ to the initial segment determined by $a$, so the value of $F$ at $a$ is prescribed in terms of all its earlier values at once. Because $G$ is a class function rather than a set, this is a **theorem schema** of ZF: one theorem for each formula defining $G$. **It uses Replacement, and it uses no form of the Axiom of Choice.** ([[thm-transfinite-recursion]])

## Proof

1.1 The range of any descending sequence is a nonempty set. A minimal element of that range, say $f(n)$, still has predecessor $f(n+1)$ in the range, a contradiction. This uses exactly the minimal-element definition of well-foundedness. [given]

1.2 For the converse, if a nonempty $A\subseteq X$ has no minimal member, every $A\cap\operatorname{pred}_R(a)$ for $a\in A$ is nonempty. Begin with $f(0)=c(A)$ and recurse by $f(n+1)=c(A\cap\operatorname{pred}_R(f(n)))$. The supplied choice function makes this a uniquely specified recursion on the set well-order $\omega$; malformed histories can be assigned $c(A)$. [F1, given]

2.1 Induction keeps every value in $A$ and ensures $f(n+1)Rf(n)$ at each step, contradicting the assumed absence. Thus every nonempty subset has a minimal element. For $X=\varnothing$ well-foundedness is vacuous and there is no sequence into $X$. [step 1.2] ∎
