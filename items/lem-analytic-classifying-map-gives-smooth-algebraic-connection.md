---
id: lem-analytic-classifying-map-gives-smooth-algebraic-connection
kind: lemma
title: "An analytic classifying map gives a smooth algebraic connection"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-resolution-of-singularities-in-characteristic-zero, thm-identity-theorem-in-several-complex-variables, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {}
---

## Statement

Assume AC. Let $S$ be a separated scheme of finite type over $\mathbb C$, let $X\to S$ be a smooth projective morphism, and let $M$ be a connected complex manifold. Suppose a holomorphic map $f:M\to S^{\mathrm{an}}$ is given. For any points $m_0,m_1\in M$, there exist a smooth connected complex algebraic variety $T$, a morphism $g:T\to S$, and points $t_0,t_1\in T(\mathbb C)$ with $g(t_i)=f(m_i)$. Consequently the pullback family $X\times_ST\to T$ is smooth projective and has fibres isomorphic to $X_{f(m_i)}$ at the chosen points. Any fixed finite collection of $S$-morphisms and algebraic identities on $X$ pulls back along $g$ with those identities intact.

This conclusion is conditional on an already supplied algebraic family and holomorphic classifying map. It neither constructs such a parameter space nor asserts that a given analytic family has one.

## Facts & Assumptions

**Given:** AC and the algebraic family, complex manifold, holomorphic map and two points in the Statement.

[F1] An integral separated finite-type scheme over a characteristic-zero field has a smooth proper birational resolution which is an isomorphism over its smooth locus ([[thm-resolution-of-singularities-in-characteristic-zero]]).

[F2] A holomorphic function on a connected complex manifold that vanishes on a nonempty open set vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

## Proof

**Proof technique:** take the irreducible Zariski closure of the analytic image and resolve it.

1.1 Let $Y$ be the reduced Zariski closure of $f(M)$ in $S$. It is nonempty. Suppose $Y=Y_1\cup Y_2$ with $Y_1,Y_2$ proper closed algebraic subsets. The inverse images of $Y_i^{\mathrm{an}}$ are closed analytic subsets of $M$: in each analytic chart of $S$ the sets $Y_i$ are cut out by finitely many holomorphic polynomial functions, and their pullbacks are holomorphic. If neither preimage is all of $M$, neither can contain a nonempty open set, by [F2] applied to its local defining functions and analytic continuation through overlapping connected charts. Two closed subsets with empty interior cannot cover the nonempty manifold: the complement of the first is a nonempty open set and cannot be contained in the second. Thus one preimage is all of $M$, contradicting the definition of $Y$ as the Zariski closure unless the corresponding $Y_i$ equals $Y$. Therefore $Y$ is irreducible; with its reduced structure it is integral. [F2, given, construct, algebra]

2.1 Apply [F1] to $Y$ and write $r:T\to Y$ for the smooth proper birational resolution. Its image is closed because $r$ is proper, and contains the dense nonempty open on which it is an isomorphism. Hence $r$ is surjective. A smooth scheme birational to an integral variety has an integral resolving component: take the unique component containing the inverse image of that dense open; its image is closed and still contains the dense open, so it maps onto $Y$. Replace $T$ by that smooth integral component. It is connected, since an integral topological space is irreducible and therefore connected. The composite $g:T\to Y\hookrightarrow S$ is algebraic. [F1, given, step 1.1, construct, algebra]

3.1 The two points $f(m_i)$ lie in $Y(\mathbb C)$. Surjectivity of $r$ gives a nonempty finite-type fibre over each such point; every nonempty finite-type scheme over algebraically closed $\mathbb C$ has a complex closed point. Choose $t_i$ in these fibres, so $g(t_i)=f(m_i)$. The base change of a smooth projective morphism is smooth and projective, and its fibre over $t_i$ is canonically the fibre of $X\to S$ over $f(m_i)$. Pullback of each specified morphism and of each algebraic equality commutes with fibre products and composition, so the extra data and all identities persist. This proves the Statement. [given, step 1.1, step 2.1, choose, construct, algebra] ∎

## Boundary

The geometric input still missing in the CM application is the actual algebraic parameter scheme $S$, its universal family, and the holomorphic map from the analytic period-domain family. This lemma does not supply or presume them.
