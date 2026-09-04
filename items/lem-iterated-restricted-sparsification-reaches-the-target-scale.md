---
id: lem-iterated-restricted-sparsification-reaches-the-target-scale
kind: lemma
title: "Iterated restricted sparsification reaches the target scale"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdos-Hajnal Conjecture, Lemma 5.3"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

Let $c\in(0,1)$, let $b_1>1$, let $b_2,b_3>0$, and assume

$$ b_1b_2\ge b_2+b_3. $$

Suppose that $x\in(0,c)$ and that a graph $G$ satisfies:

1. $G$ has a $c$-restricted induced subgraph with at least $c^{b_2}|G|$
   vertices; and
2. for every $\lambda\in[x,c]$ and every $\lambda$-restricted induced subgraph
   $F$ of $G$ with $|F|\ge \lambda^{b_2}|G|$, there is a
   $\lambda^{b_1}$-restricted induced subgraph of $F$ with at least
   $\lambda^{b_3}|F|$ vertices.

Then $G$ contains an $x$-restricted induced subgraph with at least
$x^{b_1b_2}|G|$ vertices.

## Facts & Assumptions

**Given:** The parameters $c,b_1,b_2,b_3,x$ and the two hypotheses in the
statement.

[L1] A set is $\lambda$-restricted exactly when it is $\lambda$-sparse or
$\lambda$-dense in the induced subgraph on that set
([[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** minimal admissible restriction parameter.

1.1 By hypothesis 1, there exists at least one induced subgraph of $G$ that is $c$-restricted and has at least $c^{b_2}|G|$ vertices. Therefore the set of admissible restriction parameters considered below is nonempty. [given, L1]

2.1 For a nonempty induced subgraph $E$ of $G$, let $\rho(E)$ be the smallest real number $\lambda\in[0,1]$ such that $E$ is $\lambda$-restricted. Because $E$ is finite, [L1] shows that $\rho(E)$ is attained by one of finitely many degree or codegree ratios in $E$. Choose an induced subgraph $F$ of $G$ for which $\lambda:=\max(x^{b_1},\rho(F))$ is minimal subject to $|F|\ge \lambda^{b_2}|G|$. Step 1.1 ensures that such a choice exists and that $\lambda\le c$. [step 1.1, L1, choose]

3.1 Suppose $\lambda\ge x$. Then $\lambda=\rho(F)$, so hypothesis 2 applies to $F$ and yields a $\lambda^{b_1}$-restricted induced subgraph $F'\subseteq F$ with $|F'|\ge \lambda^{b_3}|F|\ge \lambda^{b_2+b_3}|G|\ge \lambda^{b_1b_2}|G|$, where the last inequality uses $b_1b_2\ge b_2+b_3$. Because $F'$ is $\lambda^{b_1}$-restricted, its admissible parameter satisfies $\max(x^{b_1},\rho(F'))\le \lambda^{b_1}<\lambda$, while $|F'|\ge \max(x^{b_1},\rho(F'))^{b_2}|G|$. This contradicts the minimal choice of $\lambda$ in step 2.1. Hence $\lambda<x$. [step 2.1, given, assume-contra, algebra, discharge-contradiction]

4.1 Since $\lambda=\max(x^{b_1},\rho(F))$, step 2.1 gives $x^{b_1}\le \lambda<x$ by step 3.1. Therefore $\rho(F)\le \lambda<x$, so $F$ is $x$-restricted. Its size also satisfies $|F|\ge \lambda^{b_2}|G|\ge (x^{b_1})^{b_2}|G|=x^{b_1b_2}|G|$. [step 2.1, step 3.1, algebra]

5.1 The induced subgraph $F$ from step 4.1 is the required $x$-restricted induced subgraph. [step 4.1] ∎
