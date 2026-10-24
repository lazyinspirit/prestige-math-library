---
id: def-aqft-background-gauging-data
kind: definition
title: Finite background groupoid and cocycle-weighted gauging data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-aqft-two-group-background
  - thm-aqft-two-group-background-consistency
  - def-qftx-finite-groupoid-integration
dependency_roles:
  def-aqft-two-group-background: mathematical-premise
  thm-aqft-two-group-background-consistency: mathematical-premise
  def-qftx-finite-groupoid-integration: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: No choice principle is used; all field, arrow, and automorphism sets are finite.
sources:
  references:
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: https://arxiv.org/pdf/2510.07408
      locator: "§§12–13, PDF pp. 50–53, for groupoids of finite gauge fields and the 1/|Aut| measure; §18, PDF pp. 65–66, for cocycle-weighted finite gauge actions; §§23.2–23.3, PDF pp. 92–99, for homotopy pullbacks and finite pushforward."
    - title: "Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group"
      url: https://www.math.ru.nl/~mueger/TQFT/FQ.pdf
      locator: "§2, PDF pp. 8–11, for the finite bundle groupoid, automorphism measure, and cocycle-weighted partition function."
    - title: "Robbert Dijkgraaf and Edward Witten, Topological Gauge Theories and Group Cohomology"
      url: "https://www.ias.edu/sites/default/files/sns/%5B126%5DCommMathPhys129-1990.pdf"
      locator: "§§6.2 and 6.4–6.5, PDF pp. 22–30, for the finite 3D cocycle action, ordered simplex weights, and gauge-invariance scope."
---

## Definition

Let $K$ be a finite ordered simplicial complex. A **finite background field groupoid** $\mathcal F(K)$ is a category whose objects are declared background fields and whose morphisms are the declared gauge equivalences, such that every morphism is invertible, there are finitely many isomorphism classes, and every automorphism group is finite. Distinct automorphisms are retained as distinct morphisms whenever the selected field model declares them distinct; their multiplicities determine the gauge-volume factor. Write $\pi_0(\mathcal F(K))$ for the isomorphism classes.

A **cocycle/action weight** on $\mathcal F(K)$ is a function $W_K:\operatorname{Ob}(\mathcal F(K))\to U(1)$ such that $W_K(y)=W_K(x)$ for every morphism $x\to y$; this invariance is the degree-zero cocycle condition used here. Its normalized **gauging sum** is

$$ Z_K(W_K):=\sum_{[x]\in\pi_0(\mathcal F(K))} \frac{W_K(x)}{|\operatorname{Aut}_{\mathcal F(K)}(x)|}. $$

The quotient notation in this sum means isomorphism classes, not a set quotient with automorphisms discarded. The sum is the integral of $W_K$ against finite groupoid cardinality.

For the proposed finite 2-group specialization, let $G$ be a finite group with identity $e$, let $A$ be a finite abelian group written additively, and let $\rho:G\to\operatorname{Aut}(A)$ be a left action. A normalized group 3-cocycle is a function $\beta:G^3\to A$ that vanishes if any argument is $e$ and satisfies

$$ \rho_g\beta(h,k,l)-\beta(gh,k,l)+\beta(g,hk,l)-\beta(g,h,kl)+\beta(g,h,k)=0. $$

A background on $K$ consists of a flat edge cochain $a_{ij}\in G$, with $a_{ij}a_{jk}=a_{ik}$ on each ordered triangle, and an $A$-valued 2-cochain $B_{ijk}$ based at vertex $i$ satisfying

$$ \rho_{a_{ij}}B_{jkl}-B_{ikl}+B_{ijl}-B_{ijk} =\beta(a_{ij},a_{jk},a_{kl}) $$

on every ordered tetrahedron; $\rho_{a_{ij}}$ transports a coefficient at vertex $j$ to vertex $i$. A vertex-and-edge gauge parameter consists of vertex labels $g_i\in G$ and edge labels $\lambda_{ij}\in A$ based at vertex $i$ and acts by

$$ a'_{ij}=g_i a_{ij}g_j^{-1}, $$

$$ \zeta_{ijk}=-\beta(g_i,a_{ij},a_{jk}) +\beta(a'_{ij},g_j,a_{jk})-\beta(a'_{ij},a'_{jk},g_k), $$

$$ B'_{ijk}=\rho_{g_i}B_{ijk}+\zeta_{ijk} +\rho_{a'_{ij}}\lambda_{jk}-\lambda_{ik}+\lambda_{ij}. $$

These equations specify candidate background objects and gauge maps. They define a particular finite background field groupoid only after the arrow convention, including its automorphism multiplicities, is specified and the gauge maps satisfy the consistency conditions in the hypotheses below. An action produced from a higher group cocycle is an admissible weight only after its invariance under those declared arrows has been established.

## Definition references

[[def-aqft-two-group-background]]

[[thm-aqft-two-group-background-consistency]]

[[def-qftx-finite-groupoid-integration]]

## Facts & Assumptions

**Given:** A finite groupoid $\mathcal F(K)$ of background fields with its declared gauge morphisms, and a $U(1)$-valued action weight $W_K$ constant on every morphism.

[F1] [[def-aqft-two-group-background]]: $G$ is finite, $A$ is finite abelian, $\rho$ is a left action, $\beta$ is a normalized 3-cocycle, a background has $\delta_aB=a^*\beta$, and the stated vertex-and-edge formulas define its candidate gauge maps.

[A1] [[thm-aqft-two-group-background-consistency]]: under the exact hypotheses of its Statement, the candidate transformations preserve the background equation, have the displayed composite representative, are invertible, and their induced maps compose associatively. This is used only as a conditional input: its current Step 1 readiness record says ready, but the current proof's step 2.2 does not display the triangle-coherence expansion needed to verify that assertion.

[F2] [[def-qftx-finite-groupoid-integration]]: a finite groupoid has finitely many isomorphism classes and finite automorphism groups; its cardinality and weighted integral sum over classes with reciprocal automorphism weights.

## Proof

1.1 Under [A1], the candidate gauge maps send background objects to background objects, and their induced maps have identities, inverses, and associative composition. Thus, whenever the stated arrow convention is met, they form a groupoid on the specified background objects. [given, F1, A1, construct]

1.2 The finite complex has only finitely many edge and face cochains with values in the finite sets $G$ and $A$. The gauge-parameter set is also finite. Therefore the candidate object and morphism sets are finite, so each isomorphism-class set and each automorphism group is finite. [given, F1, A1, algebra]

1.3 If $x\to y$ is a gauge morphism, the defining cocycle condition gives $W_K(y)=W_K(x)$. Hence $W_K$ descends to a function on $\pi_0(\mathcal F(K))$. [given, algebra]

2.1 The finite groupoid integral of this descended function is exactly the displayed gauging sum, with each class weighted by the reciprocal order of its automorphism group. Finiteness from step 1.2 makes the sum finite, and isomorphic representatives have isomorphic automorphism groups and equal weights. [given, F2, step 1.3, algebra] ∎
