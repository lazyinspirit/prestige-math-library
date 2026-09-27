---
id: lem-distinct-components-commute
kind: lemma
title: "Distinct components commute"
status: published
origin: pipeline
deps: [def-quasisimple-group-component-and-layer, lem-quasisimple-proper-normal-subgroups-are-central-and-perfect-central-actions-trivial, lem-normal-quasisimple-subnormal-dichotomy, def-subnormal-normal-series-refinement-and-equivalence]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: "Strong induction on group order simultaneously establishes the component-versus-normal-subgroup dichotomy and commutation; every invocation of component commutation occurs in a proper normal subgroup."
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-04-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Distinct components of a finite group commute.

## Facts & Assumptions

**Given:** Let $K$ and $L$ be distinct components of $G$.

[F1] A component is a subnormal quasisimple subgroup. Quasisimple means perfect with simple central quotient. ([[def-quasisimple-group-component-and-layer]])

[F2] In a quasisimple group every proper normal subgroup is central. A perfect group's central conjugation action is trivial. ([[lem-quasisimple-proper-normal-subgroups-are-central-and-perfect-central-actions-trivial]])

[F3] If $Q\trianglelefteq G$ is quasisimple and $S$ is subnormal in $G$, then $Q\le S$ or $[Q,S]=1$. ([[lem-normal-quasisimple-subnormal-dichotomy]])

[F4] Subnormality is witnessed by a finite chain of normal inclusions. ([[def-subnormal-normal-series-refinement-and-equivalence]])

## Proof

**Proof technique:** simultaneous strong induction on $|G|$.

1.1 We prove two assertions simultaneously for each finite group $G$: (A) if $Q$ is a component and $N\trianglelefteq G$, then either $Q\le N$ or $[Q,N]=1$; (B) distinct components commute. Assume both assertions have been proved for every group of order smaller than $|G|$. Each induction call below takes place in a proper normal subgroup $H<G$, so its order is strictly smaller. A subnormal chain for a component in $H$ remains a valid chain there, and conjugation by an element of $G$ preserves the chain inside $H$ because $H\trianglelefteq G$. [F1, F4, induction]

1.2 First prove (A). If $Q\le N$ there is nothing to show. Suppose $Q\nleq N$. If $Q\trianglelefteq G$, then $Q\cap N$ is a proper normal subgroup of $Q$, so F2 gives $Q\cap N\le Z(Q)$. Since both $Q$ and $N$ are normal in $G$, their commutator lies in $Q\cap N$. The central-action clause of F2, applied to the perfect group $Q$, gives $[Q,N]=1$. [F1, F2, given]

2.1 Suppose instead that $Q$ is not normal in $G$. A subnormal chain from $Q$ to $G$ then has a proper term $H\trianglelefteq G$ containing $Q$; take its penultimate term after deleting repeated terms. Put $M=N\cap H\trianglelefteq H$. The subgroup $Q$ is a component of $H$ and is not contained in $M$. By the induction hypothesis (A) for $H$, $[Q,M]=1$. [F1, F4, step 1.1, induction]

3.1 For $n\in N$, conjugation sends $Q$ to another component $Q^n=nQn^{-1}$ of $H$. Indeed $H\trianglelefteq G$ keeps the conjugated subnormal chain inside $H$. For each $q\in Q$ write $nqn^{-1}=c_q q$, where $c_q=nqn^{-1}q^{-1}\in N\cap H=M$; the two normalities give this inclusion. By step 2.1, $c_q$ centralizes $Q$. The induction hypothesis (B) for $H$ says that either $Q^n=Q$ or $Q^n$ centralizes $Q$. In the latter case, for every $q,x\in Q$ the equality $[c_q q,x]=[q,x]$ would force $[q,x]=1$. This would make the perfect quasisimple group $Q$ abelian, hence trivial, contrary to its nontrivial simple central quotient. Thus $Q^n=Q$ for every $n\in N$. [F1, step 1.1, step 2.1, induction, algebra]

4.1 It follows that $N$ normalizes $Q$ and $[N,Q]\le N\cap Q$. This is a proper normal subgroup of $Q$, so F2 puts it in $Z(Q)$. The perfect central-action clause of F2 now yields $[N,Q]=1$. This proves (A) for $G$ without invoking (B) for $G$ itself. [F2, step 3.1]

5.1 Now prove (B), after assertion (A) has been established for this $G$. If $K\trianglelefteq G$, apply F3 to $K$ and the subnormal subgroup $L$. It gives $[K,L]=1$ unless $K\le L$. In that exceptional case $K\trianglelefteq L$; because $K\ne L$, F2 gives $K\le Z(L)$. But $K$ is nontrivial and perfect, so it cannot be abelian or lie in a center. The exceptional case is impossible. [F1, F2, F3, step 4.1]

6.1 If $K$ is not normal in $G$, take a proper normal subgroup $H\trianglelefteq G$ containing $K$ from its subnormal chain. Apply assertion (A), already proved for this same $G$ in steps 1.2–4.1, to $L$ and $H$. If $L\nleq H$, it centralizes $H$ and hence $K$. If $L\le H$, both $K$ and $L$ are distinct components of the smaller group $H$, so the induction hypothesis (B) for $H$ gives $[K,L]=1$. Thus (B) holds for $G$ in every case, completing the strong induction and the stated result. [F1, F4, step 1.1, step 4.1, induction] ∎
