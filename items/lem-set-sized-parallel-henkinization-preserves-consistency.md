---
id: lem-set-sized-parallel-henkinization-preserves-consistency
kind: lemma
title: Parallel Henkinization for arbitrary set languages
status: published
origin: pipeline
deps: [lem-proof-fresh-constant-elimination, lem-fresh-henkin-axiom-preserves-consistency, lem-derivation-finite-support-and-concatenation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic, Lemma 1I.4, pp. 40–41; local simultaneous set-language expansion"
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
---

## Statement

In ZF, every consistent sentence theory $T$ in a set-sized first-order language admits a canonical tagged $\omega$-stage expansion with a seed constant and Henkin witness axioms. Every finite collection of added axioms is consistent with $T$, and the union theory is consistent and has a witness axiom for every existential sentence in the union language. No well-ordering of the language is required.

## Facts & Assumptions

[F1] [[lem-proof-fresh-constant-elimination]] makes any pure set-sized fresh-constant expansion conservative for original sentences.

[F2] [[lem-fresh-henkin-axiom-preserves-consistency]] preserves consistency on adding $\exists x\phi\to\phi[c/x]$ when $c$ is absent from the theory and from $\phi$.

[F3] [[lem-derivation-finite-support-and-concatenation]] says any derivation has finite assumption support and permits weakening.

## Proof

**Given:** A consistent sentence theory $T$ in a set-sized language $L$.

1.1 First embed $L$ into a disjoint tagged copy, so that further tags cannot collide with original symbols. Adjoin one distinguished seed constant to get $L_0$. Given $L_n$, introduce a different constant $c_{n,E}$ for each existential $L_n$-sentence $E=\exists x\phi$, and put $L_{n+1}=L_n\cup\{c_{n,E}:E\text{ as above}\}$. These are sets since finite strings on a set form a set; tagging by $(n,E)$ is injective. Let $H_n$ be all sentences $E\to\phi[c_{n,E}/x]$. Set $L_\infty=\bigcup_{n<\omega}L_n$ and $T_H=T\cup\bigcup_{n<\omega}H_n$. The stage recursion uses uniquely specified sets, not choices of an enumeration. [given, algebra]

2.1 Fix a finite subset $K$ of the added axioms, and list it in nondecreasing stage order, ordering each finite same-stage block arbitrarily. Starting from $T$, first use F1 to allow all constants of $L_\infty$ except the finitely many designated witness constants in this list. This is a consistent pure expansion. When adding an axiom at stage $n$, its designated constant occurs neither in $T$, nor in an earlier-stage axiom, nor in the matrix of any other axiom at stage $n$: those matrices are in $L_n$, whereas the new constants were introduced in $L_{n+1}$. It is therefore fresh in the current theory and its matrix. F2 adjoins it with its axiom preserving consistency. After finitely many additions every axiom of $K$ has been added and the language is $L_\infty$. Thus $T\cup K$ is consistent in the union language. [F1, F2, step 1.1, algebra]

3.1 If $T_H$ were inconsistent, F3 would give a finite proof using only finitely many axioms from the sets $H_n$. These form a finite $K$ as in step 2.1, contradicting its consistency. Hence $T_H$ is consistent. Every existential $L_\infty$-sentence uses finitely many symbols, each introduced at some finite stage; the maximum of those finitely many stages places the sentence in some $L_n$. Its witness axiom is then in $H_n\subseteq T_H$. The seed ensures a closed term even when the original language has no constants, and the empty finite set of new axioms is covered by F1. QED. [F1, F3, step 1.1, step 2.1, algebra]
