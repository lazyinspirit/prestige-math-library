---
id: lem-ph-adaptive-oracle-transcript-normal-form
kind: lemma
title: "Ph adaptive oracle transcript normal form"
status: draft
origin: pipeline
deps: [def-relativized-complexity-class, lem-ph-quantifier-block-closure]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Goldreich, Computational Complexity lecture notes; Lecture9 Theorem9.9, pp105–107, proof in both directions."
      url: "https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf"
---

## Statement

For fixed $k\ge1$ and $B\in\Sigma_k^p$, every nondeterministic polynomial-time $B$-oracle computation has a $\Sigma_{k+1}^p$ definition. More generally, for a fixed total base oracle $A$ and $B\in\Sigma_k^{p,A}$, polynomial nondeterministic access to both $A$ and $B$ has a $\Sigma_{k+1}^{p,A}$ definition.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Fix a total language $A\subseteq\{0,1\}^*$. An oracle machine writes a query word and receives its membership bit in $A$ in one answer step. Query writing counts toward time and the query tape toward space. A polynomial time clock bounds every branch for every oracle. $P^A$ and $NP^A$ are deterministic and nondeterministic polynomial-time oracle classes, respectively; the latter equivalently uses a polynomial-length witness and a deterministic polynomial-time $A$-oracle verifier. Use the conventions of the stated convention and the stated convention. For $\Sigma_k^{p,A}$ and $\Pi_k^{p,A}$, replace the deterministic predicate in the stated convention by a $P^A$ predicate; level zero is $P^A$. Define $\mathrm{PSPACE}^A$ by deterministic polynomial space under the charged-query convention. For a language class $\mathcal D$, $P^{\mathcal D}=\bigcup_{B\in\mathcal D}P^B$ and $NP^{\mathcal D}=\bigcup_{B\in\mathcal D}NP^B$. Finally $\Delta_{k+1}^p=P^{\Sigma_k^p}$. With a fixed base oracle, a machine may query both $A$ and a language $B$; encode this by the tagged union $A\oplus B=\{0x:x\in A\}\cup\{1x:x\in B\}$. ([[def-relativized-complexity-class]]).

[F2] For each fixed $k\ge0$, both $\Sigma_k^p$ and $\Pi_k^p$ are closed under polynomial-time many-one preimages and polynomially many uniformly indexed conjunctions and disjunctions. Precisely, if the language of pairs $(x,i)$ lies in the class and $0\le i<q(|x|)$ for a polynomial-time computable polynomial bound $q$, then both “every such $i$” and “some such $i$” define languages in that class. Complements interchange $\Sigma_k^p$ and $\Pi_k^p$, and each is contained in both classes at level $k+1$. These assertions also hold with one fixed base oracle. ([[lem-ph-quantifier-block-closure]]).


## Proof

1.1 Use the oracle-independent polynomial clock to bound the branch string, number and lengths of queries, and the entire transcript. Guess in a first existential block a branch and all answers to $B$ queries. Replay the machine using these answers, making any $A$ calls directly; reject if the replay does not accept. Thus the replay test is in $P^A$. [F1]

2.1 Write $B(q)=\exists u_1\forall u_2\cdots Q_k u_k R(q,u_1,\ldots,u_k)$ with $R\in P^A$. For each guessed YES answer, guess its $u_1$ in the first block too; its remaining condition starts universally and has $k-1$ blocks. For each NO answer, use the complementary $k$-block universal-first formula. Pad YES conditions with an unused last block, and combine the conditions in parallel into $k$ alternating universal-first blocks by tuple conjunction closure. Unused transcript slots impose the constant true condition. At $k=1$, a YES condition has no remaining quantified variable. [F2, step 1.1]

3.1 An actually accepting branch supplies its correct transcript and YES witnesses, so the constructed formula is true. Conversely a true formula certifies every YES and every NO answer, and the replay is therefore an actual accepting branch. Tuple lengths are polynomial because both query count and query length are polynomially bounded. Prefixing the guessed first block gives exactly $k+1$ alternating blocks over $P^A$. For the unrelativized assertion take $A=\varnothing$. [step 2.1, algebra] ∎
