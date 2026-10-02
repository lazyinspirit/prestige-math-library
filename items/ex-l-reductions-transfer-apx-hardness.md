---
id: ex-l-reductions-transfer-apx-hardness
kind: example
title: "The clause graph is an L-reduction with constants one and one"
status: draft
origin: pipeline
proof_strategy: direct
deps:
  - def-optimization-problem-and-approximation-ratio
  - def-apx-hardness-and-apx-completeness
  - def-clique-independent-set-and-vertex-cover-problems
  - def-l-reduction
  - lem-gap-three-sat-reduces-to-gap-independent-set
  - lem-l-reductions-transfer-apx-hardness
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.2.5 Lemma 18.16, printed pp. 359–361"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §16.2 Definition 16.4 and Theorems 16.5–16.6, printed pp. 413–414"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

On the Max-3SAT-to-independent-set clause-literal graph, the optimum values
are equal and every independent set of size $k$ decodes to an assignment
satisfying at least $k$ clauses. Hence this explicit map is an L-reduction with
$a=b=1$, and any independent-set approximation ratio transfers with the same
relative error to Max-3SAT.

## Facts & Assumptions

**Given:** The clause-literal consistency construction that carries a 3-CNF formula $F$ with $m$ clauses of three literal occurrences to a simple graph $G_F$ with $3m$ vertices, with $\alpha(G_F)=\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$ and with a polynomial-time decoder from independent sets to assignments.

[F1] Vertices of $G_F$ are the literal occurrences, vertices in a clause are pairwise adjacent, vertices from distinct clauses are adjacent exactly when their literals are complementary, $\alpha(G_F)=\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$ for every such formula, and an independent set of size $k$ yields in polynomial time an assignment satisfying at least $k$ clauses. ([[lem-gap-three-sat-reduces-to-gap-independent-set]])

[F2] An L-reduction from optimization problem $\Pi$ to $\Gamma$ consists of polynomial-time maps $f$ and $g$ and constants $a,b>0$ with $\operatorname{OPT}_\Gamma(f(x))\le a\operatorname{OPT}_\Pi(x)$ and $|\operatorname{OPT}_\Pi(x)-\operatorname{val}_\Pi(g(x,y))|\le b|\operatorname{OPT}_\Gamma(f(x))-\operatorname{val}_\Gamma(y)|$. ([[def-l-reduction]])

[F3] If $\Pi$ L-reduces to $\Gamma$ with constants $a,b$, then a feasible $\Gamma$ solution of relative error at most $\epsilon$ decodes to a $\Pi$ solution of relative error at most $ab\epsilon$ whenever the target optimum is positive, and zero target optimum forces an optimal decoded solution; consequently L-reductions transfer approximation quality. ([[lem-l-reductions-transfer-apx-hardness]])

[F4] Both Max-3SAT and maximum independent set are maximization problems in the finite-instance model: the value of a feasible solution is nonnegative, and the optimum is the attained maximum, so a feasible solution's quality is measured by how far its value falls below the optimum. ([[def-optimization-problem-and-approximation-ratio]], [[def-clique-independent-set-and-vertex-cover-problems]])

## Verification

**Proof technique:** direct.

1.1 Take the instance map $f(F):=G_F$ of [F1], which runs in polynomial time and produces a finite simple graph whose independent sets have value $\operatorname{val}_\Gamma(I)=|I|$. Take the decoder $g(F,I)$ of [F1], which from every independent set $I$ of $G_F$ produces in polynomial time an assignment of $F$ satisfying at least $|I|$ clauses, of value $\operatorname{val}_\Pi(g(F,I))$ equal to its satisfied-clause count. Both objectives are maximization with nonnegative values by [F4]. [F1, F2, F4, given, construct]

2.1 The first L-reduction inequality holds with $a=1$: by the exact optimum equality of [F1], $\operatorname{OPT}_\Gamma(f(F))=\alpha(G_F)=\operatorname{OPT}_{\mathrm{Max3SAT}}(F)=1\cdot\operatorname{OPT}_\Pi(F)$ for every 3-CNF formula $F$ with three literal occurrences per clause. [F1, step 1.1, algebra]

3.1 The second L-reduction inequality holds with $b=1$: writing $t:=\operatorname{val}_\Pi(g(F,I))$ for the number of clauses satisfied by the decoded assignment, [F1] gives $t\ge|I|$, and therefore $|\operatorname{OPT}_\Pi(F)-\operatorname{val}_\Pi(g(F,I))|=\operatorname{OPT}_{\mathrm{Max3SAT}}(F)-t\le\operatorname{OPT}_{\mathrm{Max3SAT}}(F)-|I|=\alpha(G_F)-|I|=|\operatorname{OPT}_\Gamma(f(F))-\operatorname{val}_\Gamma(I)|$, where the last step uses $\operatorname{val}_\Gamma(I)=|I|$ and step 2.1. [F1, step 1.1, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 exhibit the maps and constants required by [F2], so $(f,g,1,1)$ is an L-reduction from Max-3SAT to maximum independent set. By the transfer statement [F3], a feasible independent set with relative error at most $\epsilon$, that is $\operatorname{val}_\Gamma(I)\ge(1-\epsilon)\alpha(G_F)$, decodes to a Max-3SAT assignment with relative error at most $1\cdot1\cdot\epsilon=\epsilon$; when $\alpha(G_F)=0$ the decoded assignment is optimal. [F2, F3, step 2.1, step 3.1, algebra]

5.1 A concrete formula is $F=(x\vee x\vee x)\wedge(\lnot x\vee\lnot x\vee\lnot x)$ with $m=2$ clauses of three literal occurrences. No assignment satisfies both clauses: $x$ true satisfies only the first and $x$ false satisfies only the second, so $\operatorname{OPT}_{\mathrm{Max3SAT}}(F)=1$. The graph $G_F$ has $6$ vertices in two clause clusters of three; an independent set takes at most one vertex per cluster, and every vertex of the first cluster is complementary to every vertex of the second, so no independent set has size $2$, while a single vertex is independent; hence $\alpha(G_F)=1=\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$, and an independent set of size $1$ decodes to an assignment satisfying at least $1$ clause. [F1, step 2.1, step 4.1, algebra]

6.1 The explicit clause-literal construction therefore is an L-reduction with constants $a=b=1$: the optimum values agree, and every independent set of size $k$ decodes to an assignment satisfying at least $k$ clauses, so errors transfer unchanged and an independent-set approximation ratio carries over to Max-3SAT with the same relative error. [F3, step 4.1, step 5.1, algebra] ∎
