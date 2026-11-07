---
id: lem-formal-nodal-graph-torsor-gluing
kind: lemma
title: "Explicit graph torsors on a two-component formal nodal family"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $\mathfrak X$ be a formal scheme whose underlying topological space is its reduced special fibre $C_0=D_0\cup D_1$, where each $D_i$ is a projective line over an algebraically closed field and the two components meet at a specified nonempty finite set $N$ of distinct nodes and nowhere else. Let $G$ be a specified finite abelian constant group. There is an explicit injective homomorphism
$$G^N/G\longrightarrow\{\text{isomorphism classes of finite étale $G$-torsors on }\mathfrak X\},$$
where the diagonal $G$ acts by simultaneous multiplication and the target group law is contracted product. The torsor associated with $(\lambda_c)_{c\in N}$ restricts to the graph torsor with node transitions $\lambda_c$ on $C_0$. No algebraization of the formal torsor to a proper scheme is asserted.

## Facts & Assumptions

**Given:** The formal scheme, its two components and finite nonempty node set, the finite abelian group $G$, and a tuple $(\lambda_c)_{c\in N}$.

## Proof

1.1 Put $U_0=C_0\setminus D_1$, $U_1=C_0\setminus D_0$, and $U_c=C_0\setminus(N\setminus\{c\})$. These are opens in the underlying space of $\mathfrak X$ and cover it. The first two are disjoint, $U_i\subset U_c$, and for distinct $c,d$ one has $U_c\cap U_d=U_0\sqcup U_1$. Each $U_i$ is connected, and each $U_c$ is connected because its two irreducible punctured components meet at $c$. [given, construct, algebra]

2.1 On every open in this finite cover take the trivial $G$-torsor. Glue the trivialization on $U_0$ to that on $U_c$ by the identity, and the one on $U_1$ to that on $U_c$ by multiplication by $\lambda_c$. On $U_c\cap U_d$, the transition is the identity on $U_0$ and multiplication by $\lambda_d\lambda_c^{-1}$ on $U_1$. These formulas satisfy the cocycle condition on every triple intersection, component by component. They therefore glue the trivial covers to a finite étale $G$-torsor on $\mathfrak X$, and the special-fibre transitions are exactly the stated node data. [step 1.1, construct, algebra]

3.1 An equivariant isomorphism between two such glued torsors restricts on each connected open to multiplication by one element of $G$. Compatibility on $U_0$ forces its constants on all $U_c$ to equal the constant on $U_0$; compatibility on $U_1$ then forces all ratios $\lambda'_c\lambda_c^{-1}$ to be the same element of $G$. Conversely any common ratio is realized by rescaling the trivialization on $U_1$. Thus two tuples give isomorphic torsors exactly when they differ by the diagonal action. [step 1.1, step 2.1, algebra]

4.1 Contracted product multiplies the transition functions, so the construction is a homomorphism; step 3.1 makes it injective on $G^N/G$. All covers, intersections and transition functions are specified by the finite input. No claim of algebraization or of a nearby-cycles comparison is needed. [step 2.1, step 3.1, algebra] ∎
