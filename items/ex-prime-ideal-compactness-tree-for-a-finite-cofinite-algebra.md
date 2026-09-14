---
id: ex-prime-ideal-compactness-tree-for-a-finite-cofinite-algebra
kind: example
title: "A prime-ideal compactness tree for the finite–cofinite algebra"
status: draft
origin: pipeline
deps: [def-finite-partial-prime-ideal-diagrams, lem-countable-boolean-algebra-prime-ideal-compactness-tree]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Standard finite–cofinite Boolean algebra; explicit instance of the local countable compactness tree"
      url: https://plato.stanford.edu/entries/logic-classical/
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Example

For the finite–cofinite Boolean algebra on $\omega$, the canonical
compactness-tree branch which always selects the cofinite remainder has the
finite-set ideal as its zero fibre.

## Facts & Assumptions

**Given:** $B=\{A\subseteq\omega:A\text{ is finite or }\omega\setminus A \text{ is finite}\}$ with union, intersection, and complement.

[F1] [[def-finite-partial-prime-ideal-diagrams]] identifies a finite partial prime-ideal diagram with a homomorphism on its whole finite generated subalgebra and identifies the nonzero Boolean cells as its atoms.

[F2] [[lem-countable-boolean-algebra-prime-ideal-compactness-tree]] proves that an enumerated nontrivial Boolean algebra has a prime ideal; the explicit levels and branch below are computed directly rather than attributed to this Statement.

## Verification

1.1 Enumerate the finite subsets as $F_0=\varnothing,F_1=\{0\},F_2=\{1\},F_3=\{0,1\},\ldots$ by increasing binary code, and enumerate $B$ by $b(2n)=F_n$, $b(2n+1)=\omega\setminus F_n$.  This is onto, including repetitions such as $b(0)=\varnothing$ and $b(1)=\omega$. [given, construct]

2.1 At levels $0,1,2$ the generated algebra is $\{\varnothing,\omega\}$ and has its unique homomorphism to $\mathbf2$.  At level $3$, after $\{0\}$ appears, the generated algebra has atoms $\{0\}$ and $\omega\setminus\{0\}$ and hence two homomorphisms, with respective values $1$ and $0$ on $\{0\}$.  Level $4$ adds only its complement and has the same two nodes. [F1, step 1.1]

3.1 At level $5$, the generators include $\{0\}$ and $\{1\}$; the atoms are $\{0\}$, $\{1\}$, and $R_2=\omega\setminus\{0,1\}$.  The three homomorphisms select these atoms and have value pairs $(1,0),(0,1),(0,0)$ on the two singletons.  The last node restricts to the value-$0$ node at level $3$. [F1, step 2.1]

4.1 At any finite stage let $E$ be the finite union of all finite generators seen so far.  The generated algebra has the finitely many atomic pieces inside $E$ and the single cofinite remainder $R=\omega\setminus E$.  Evaluation at $R$ is the unique level node assigning $0$ to every finite member of that subalgebra and $1$ to every cofinite member.  These nodes restrict coherently, so they form the branch illustrated by steps 2.1 and 3.1. [F1, step 1.1, step 2.1, step 3.1, construct]

5.1 The union homomorphism is $h(A)=0$ when $A$ is finite and $h(A)=1$ when $A$ is cofinite.  Its zero fibre is therefore $\mathrm{Fin}$.  This is proper and prime: if $A,B$ are both cofinite then $A\cap B$ is cofinite, so $A\cap B$ can be finite only when at least one of $A,B$ is finite. This explicit prime ideal agrees with F2's existence conclusion. [F1, F2, step 4.1] ∎
