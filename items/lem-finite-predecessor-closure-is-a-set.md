---
id: lem-finite-predecessor-closure-is-a-set
kind: lemma
title: "Finite predecessor closures are sets"
status: draft
origin: pipeline
deps: ["def-well-founded-setlike-relations", "thm-transfinite-recursion"]
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
    - title: "Marks, Set Theory, Berkeley edition \u2014 Lemma 6.4 p.30."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

For every setlike relation $R$ on a definable class $X$ and $x\in X$, there is a least predecessor-closed set $C(x)\subseteq X$ containing $x$. It consists exactly of nodes reachable from $x$ by a finite sequence of predecessor steps. Well-foundedness is not needed.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Let $X$ be a definable class and $R$ a definable binary relation on $X$, with fixed set parameters. Write $\operatorname{pred}_R(x)=\{y\in X:yRx\}$. The relation is setlike if this predecessor collection is a set for every $x\in X$. It is well-founded if every nonempty set $A\subseteq X$ has an $R$-minimal member $x$, meaning $\operatorname{pred}_R(x)\cap A=\varnothing$. These are schemes in first-order set theory: a class is notation for a defining formula. No transitivity or totality of $R$ is required. Every relation on a set is setlike. An ordinal carries a well-founded membership relation by its definition; ambient Foundation does not make every arbitrary relation well-founded. All results concerning a supplied well-founded setlike relation are valid in ZF without Foundation unless stated otherwise. Conventions and prerequisites: def-ordinal. ([[def-well-founded-setlike-relations]])

[F2] Let $(W, <)$ be a well-order (def-well-order) and let $G$ be a **class function**: a rule, given by a formula in the language of set theory, that assigns a set $G(h)$ to every function $h$ whose domain is a proper initial segment of $W$ (def-initial-segment). Then there is **exactly one** function $F$ with domain $W$ such that $$F(a) = G(F \restriction W_{<a}) \qquad \text{for every } a \in W.$$ Here $F \restriction W_{<a}$ is the restriction of $F$ to the initial segment determined by $a$, so the value of $F$ at $a$ is prescribed in terms of all its earlier values at once. Because $G$ is a class function rather than a set, this is a **theorem schema** of ZF: one theorem for each formula defining $G$. **It uses Replacement, and it uses no form of the Axiom of Choice.** ([[thm-transfinite-recursion]])

## Proof

1.1 Put $C_0=\{x\}$ and $C_{n+1}=C_n\cup\bigcup\{\operatorname{pred}_R(y):y\in C_n\}$. At each step Replacement collects the predecessor sets and Union forms the next set. Apply the set well-order recursion schema on $\omega$, whose rule reads the last value at successors and gives $\{x\}$ at zero; totalize on malformed histories by returning $\varnothing$. This produces a set sequence. [F1, F2]

2.1 Let $C(x)=\bigcup_{n\in\omega}C_n$, a set by Replacement and Union. It contains $x$ and is predecessor-closed: if $y\in C_n$ and $zRy$, then $z\in C_{n+1}$. Conversely any predecessor-closed set containing $x$ contains every $C_n$ by natural induction, hence contains $C(x)$. [step 1.1]

3.1 Induction on $n$ says $C_n$ consists exactly of the nodes reached in at most $n$ steps: the successor construction either keeps a node or appends one predecessor edge. Taking the union proves the finite-path description. [step 1.1, step 2.1] ∎

