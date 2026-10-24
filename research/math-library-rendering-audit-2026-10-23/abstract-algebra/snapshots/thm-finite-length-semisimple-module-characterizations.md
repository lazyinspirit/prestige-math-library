---
id: thm-finite-length-semisimple-module-characterizations
kind: theorem
title: "Choice-free semisimple characterizations for finite-length modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-equivalent-characterizations-of-semisimple-modules, def-composition-series-and-length-of-a-module, thm-jordan-holder-theorem-for-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Statement

For a finite-length module, the direct-sum, sum-of-simples, and complement characterizations of semisimplicity are equivalent without any choice principle. See [[thm-equivalent-characterizations-of-semisimple-modules]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A composition series of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the length $\ell_R(M)$ is its number $n$ of factors; thm-jordan-holder-theorem-for-modules proves independence of the chosen series. The zero module has the empty series and length $0$. ([[def-composition-series-and-length-of-a-module]]).

[L2] Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. ([[thm-jordan-holder-theorem-for-modules]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $M$ is a sum of simple submodules and start with $D_0=0$. If $D_k\ne M$, some simple $S_k$ is not contained in $D_k$, so simplicity gives $S_k\cap D_k=0$ and $D_{k+1}=D_k\oplus S_k$. Intersecting a fixed $n$-factor composition series of $M$ with $D_k$ and deleting repetitions gives a composition series of $D_k$ with at most $n$ factors. Since $D_k$ already has the $k$-factor series obtained by adding the $S_j$ one at a time, [L2] gives $k\le n$. Thus after at most $n$ finite choices the process reaches $M$, proving that a sum of simples is a finite direct sum without any choice axiom. [L1, L2, given, algebra]

2.1 Now write a finite direct-sum decomposition $M=\bigoplus_{i=1}^tS_i$ and let $N\le M$. Process the finitely many $S_i$ in order, maintaining a sum $C$ with $C\cap N=0$: add $S_i$ exactly when $S_i\not\le N+C$. In that case simplicity gives $S_i\cap(N+C)=0$, so the invariant persists. At the end every $S_i\le N+C$, whence $M=N\oplus C$. This proves that the direct-sum condition implies the complement condition without Zorn. [step 1.1, given, algebra]

3.1 Conversely, suppose every submodule of the finite-length module $M$ has a complement, and induct on a fixed composition-series length. If $M\ne0$, let $A$ be the penultimate term of such a series. A complement $S$ gives $M=A\oplus S$ with $S\cong M/A$ simple. The complement property passes to $A$: for $L\le A$, if $M=L\oplus D$, then $A=L\oplus(A\cap D)$. The induction hypothesis makes $A$ a finite direct sum of simples, hence so is $M$. Together with step 1.1 and the trivial direct-sum-to-sum implication, this proves all three equivalences, including lengths zero and one, without Choice. [L1, step 1.1, step 2.1, given, algebra] ∎
