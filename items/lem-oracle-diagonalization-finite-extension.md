---
id: lem-oracle-diagonalization-finite-extension
kind: lemma
title: "Oracle diagonalization finite extension"
status: published
origin: pipeline
deps: [def-relativized-complexity-class]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §3.5 proof of Theorem3.9, p72."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $c$ be a finite partial assignment of membership bits to binary words, and let $M$ be a deterministic oracle machine with a fixed polynomial clock $p(n)$. There exist $n\ge1$ and a finite extension $c'$ of $c$ such that every total oracle $B$ extending $c'$ makes $M^B(1^n)$ disagree with membership in $L_B=\{1^j:B\cap\{0,1\}^j\ne\varnothing\}$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Fix a total language $A\subseteq\{0,1\}^*$. An oracle machine writes a query word and receives its membership bit in $A$ in one answer step. Query writing counts toward time and the query tape toward space. A polynomial time clock bounds every branch for every oracle. $P^A$ and $NP^A$ are deterministic and nondeterministic polynomial-time oracle classes, respectively; the latter equivalently uses a polynomial-length witness and a deterministic polynomial-time $A$-oracle verifier. Use the conventions of the stated convention and the stated convention. For $\Sigma_k^{p,A}$ and $\Pi_k^{p,A}$, replace the deterministic predicate in the stated convention by a $P^A$ predicate; level zero is $P^A$. Define $\mathrm{PSPACE}^A$ by deterministic polynomial space under the charged-query convention. For a language class $\mathcal D$, $P^{\mathcal D}=\bigcup_{B\in\mathcal D}P^B$ and $NP^{\mathcal D}=\bigcup_{B\in\mathcal D}NP^B$. Finally $\Delta_{k+1}^p=P^{\Sigma_k^p}$. With a fixed base oracle, a machine may query both $A$ and a language $B$; encode this by the tagged union $A\oplus B=\{0x:x\in A\}\cup\{1x:x\in B\}$. ([[def-relativized-complexity-class]]).


## Proof

1.1 Choose $n$ larger than every committed word length, with $2^n>p(n)$. Such integers exist: for a fixed degree $a$, the ratio $(n+1)^a/2^{n+1}$ divided by $n^a/2^n$ tends to $1/2$, and is eventually bounded below one, so any polynomial is eventually smaller than $2^n$. Simulate the clocked machine; answer committed queries consistently and commit every previously unassigned queried word to NO. The clock bounds both query length and count. [F1]

2.1 If it accepts, commit all $n$-bit words to NO. If it rejects (including clock expiration), choose an unqueried $n$-bit word and commit it to YES, committing every other $n$-bit word to NO. There is an unqueried word because fewer than $2^n$ queries occurred and no earlier commitment had length $n$. Each extension is finite and consistent. [step 1.1, algebra]

3.1 Every total extension retains all answers on the simulated path, including queries longer than $n$, so the deterministic path is unchanged. In the accepting case $1^n\notin L_B$; in the rejecting case $1^n\in L_B$. Thus both outcomes defeat the machine for every total extension. [step 2.1, algebra] ∎
