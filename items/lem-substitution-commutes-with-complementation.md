---
id: lem-substitution-commutes-with-complementation
kind: lemma
title: "The complement of $G_1[a\\to G_2]$ is $\\overline{G_1}[a\\to\\overline{G_2}]$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-substitution-of-a-graph-for-a-vertex, def-graph-isomorphism-and-complement]
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Huang, Y. Ju and R. Zhou, Erdős–Hajnal beyond the five-vertex path, sec. 1.2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Let $G_1[a\to G_2]$ be a substitution. Then $\overline{G_1}[a\to\overline{G_2}]$
is also a substitution, and

$$\overline{G_1[a\to G_2]}=\overline{G_1}\big[a\to\overline{G_2}\big].$$

## Facts & Assumptions

**Given:** A substitution $G_1[a\to G_2]$, with $U=V(G_1)\setminus\{a\}$ disjoint from $V(G_2)$ and $V(G_2)\ne\varnothing$.

[F1] For distinct vertices of $G_1[a\to G_2]$: two vertices of $U$ are adjacent exactly when they are adjacent in $G_1$; two vertices of $V(G_2)$ are adjacent exactly when they are adjacent in $G_2$; and $u\in U$ is adjacent to $x\in V(G_2)$ exactly when $u$ is adjacent to $a$ in $G_1$. The vertex set is $U\cup V(G_2)$ ([[def-substitution-of-a-graph-for-a-vertex]]).

[F2] The complement of $G=(V,E)$ is $\overline G=(V,[V]^2\setminus E)$, so distinct vertices are adjacent in $\overline G$ exactly when they are not adjacent in $G$ ([[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** cases.

1.1 The graphs $\overline{G_1}$ and $\overline{G_2}$ have the same vertex sets as $G_1$ and $G_2$, and $a\in V(\overline{G_1})$, so $\overline{G_1}[a\to\overline{G_2}]$ is a substitution with the same hypotheses and the same vertex set $U\cup V(G_2)$ as $G_1[a\to G_2]$; hence both sides of the claimed identity are graphs on that set. [F1, F2]

1.2 First case: distinct $p,q\in U$. Then $\{p,q\}$ is an edge of $\overline{G_1[a\to G_2]}$ exactly when it is not an edge of $G_1$, that is, exactly when it is an edge of $\overline{G_1}$, which is exactly the condition for it to be an edge of $\overline{G_1}[a\to\overline{G_2}]$. [assume-case host, F1, F2]

1.3 Second case: distinct $p,q\in V(G_2)$. Then $\{p,q\}$ is an edge of $\overline{G_1[a\to G_2]}$ exactly when it is not an edge of $G_2$, that is, exactly when it is an edge of $\overline{G_2}$, which is exactly the condition for it to be an edge of $\overline{G_1}[a\to\overline{G_2}]$. [assume-case inserted, F1, F2]

1.4 Third case: $u\in U$ and $x\in V(G_2)$. Then $\{u,x\}$ is an edge of $\overline{G_1[a\to G_2]}$ exactly when $\{u,a\}\notin E(G_1)$, that is, exactly when $\{u,a\}\in E(\overline{G_1})$, which is exactly the condition for $\{u,x\}$ to be an edge of $\overline{G_1}[a\to\overline{G_2}]$. [assume-case cross, F1, F2]

2.1 Every pair of distinct vertices of $U\cup V(G_2)$ falls under exactly one of the three cases, because the union is disjoint, so the three cases are exhaustive. [step 1.2, step 1.3, step 1.4, F1, cases-exhaustive]

3.1 The two graphs of step 1.1 therefore have the same vertex set and the same edge set, so they are equal. [step 1.1, step 2.1] ∎
