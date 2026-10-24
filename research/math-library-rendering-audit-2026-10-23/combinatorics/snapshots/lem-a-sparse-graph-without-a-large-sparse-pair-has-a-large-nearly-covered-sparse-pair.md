---
id: lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair
kind: lemma
title: "A sparse graph without a large sparse pair has a large nearly covered sparse pair"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, def-directional-and-weak-sparsity-between-vertex-sets, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 5.2.1"
      url: "https://arxiv.org/html/2312.15333v2"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 2.10 context"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Let $x,y>0$ with $x\le y\le 2^{-8}$, and let $G$ be a $y^3$-sparse graph with
$|V(G)|\ge y^{-4}$. Suppose that $G$ is not $2y^4$-sparse, and that there do not
exist disjoint sets $X,Y\subseteq V(G)$ such that

$$|X|\ge y^4|V(G)|,\qquad |Y|\ge (1-4y)|V(G)|,$$

and $Y$ is $x$-sparse to $X$. Then there exist a vertex $v\in V(G)$ and
disjoint sets $A,B\subseteq V(G)\setminus\{v\}$ such that:

1. $A\subseteq V(G)\setminus N_G[v]$ and $B\subseteq N_G(v)$;
2. $|A|\ge (1-3y)|V(G)|$ and $|B|\ge y^4|V(G)|$;
3. $A$ is $y^2$-sparse to $B$; and
4. every vertex of $B$ has at least $x^2|A|$ neighbours in $A$.

## Facts & Assumptions

**Given:** Parameters $x,y$ and a graph $G$ satisfying the displayed hypotheses.

[L1] A graph is $y^3$-sparse when every vertex has degree at most $y^3|V(G)|$ ([[def-c-sparse-and-c-restricted-vertex-set]], [[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[L2] The assertion that $Y$ is $x$-sparse to $X$ means that every vertex of $Y$ has at most $x|X|$ neighbours in $X$ ([[def-directional-and-weak-sparsity-between-vertex-sets]]).

## Proof

**Proof technique:** direct.

1.1 Because $G$ is not $2y^4$-sparse, some vertex $v$ has degree at least $2y^4|V(G)|$. Let $N:=N_G(v)$. Then $|N|\ge 2y^4|V(G)|$. [given, choose, L1]

2.1 Let $A'$ be the set of vertices in $V(G)\setminus(N\cup\{v\})$ with at least $\tfrac12 y^2|N|$ neighbours in $N$. Averaging over the edges between $A'$ and $N$, some vertex of $N$ has at least $\tfrac12 y^2|A'|$ neighbours in $A'$. Since every vertex has degree at most $y^3|V(G)|$ by [L1], we obtain $\tfrac12 y^2|A'|\le y^3|V(G)|$, so $|A'|\le 2y|V(G)|$. [step 1.1, L1, choose, algebra]

3.1 Define $A:=V(G)\setminus(N\cup A'\cup\{v\})$. Since $G$ is $y^3$-sparse, [L1] gives $|N|\le y^3|V(G)|$, and because $|V(G)|\ge y^{-4}$ we have $1\le y|V(G)|$. Therefore $|A|\ge |V(G)|-(y^3|V(G)|+2y|V(G)|+1)\ge (1-3y)|V(G)|$. Also, every vertex of $A$ has fewer than $\tfrac12 y^2|N|$ neighbours in $N$ by definition of $A'$. [step 2.1, L1, algebra]

4.1 Let $N'\subseteq N$ be the set of vertices with at most $x^2|A|$ neighbours in $A$, and put $B:=N\setminus N'$. The number of edges between $A$ and $N'$ is at most $x^2|A||N'|$, so at most $x|A|$ vertices of $A$ have more than $x|N'|$ neighbours in $N'$. Hence at least $|A|-x|A|\ge (1-3y-x)|V(G)|\ge (1-4y)|V(G)|$ vertices of $A$ have at most $x|N'|$ neighbours in $N'$. [step 3.1, L2, algebra]

5.1 If $|N'|\ge y^4|V(G)|$, then step 4.1 gives a set $Y\subseteq A$ with $|Y|\ge (1-4y)|V(G)|$ such that every vertex of $Y$ has at most $x|N'|$ neighbours in $N'$. By [L2], the pair $(X,Y):=(N',Y)$ is then a forbidden large sparse pair, contradicting the hypothesis. Therefore $|N'|< y^4|V(G)|$. [step 4.1, L2, assume-contra, discharge-contradiction]

6.1 Since $|N|\ge 2y^4|V(G)|$ by step 1.1 and $|N'|<y^4|V(G)|$ by step 5.1, we have $|B|=|N|-|N'|\ge y^4|V(G)|$. By definition of $B$, every vertex of $B$ has more than $x^2|A|$ neighbours in $A$. Also step 3.1 gives at most $\tfrac12 y^2|N|$ neighbours in $N$ for each vertex of $A$, while step 5.1 implies $|B|>|N|/2$; hence $\tfrac12 y^2|N|< y^2|B|$, so every vertex of $A$ has at most $y^2|B|$ neighbours in $B$. Therefore $A$ is $y^2$-sparse to $B$. [step 1.1, step 3.1, step 5.1, L2, algebra]

7.1 Step 3.1 gives $A\subseteq V(G)\setminus N_G[v]$, step 1.1 gives $B\subseteq N_G(v)$, and steps 3.1 and 6.1 give the size, sparsity, and neighbourhood clauses. These are exactly the four clauses of the statement. [step 1.1, step 3.1, step 6.1] ∎
