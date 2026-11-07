---
id: lem-kloosterman-graph-torsors-geometric-injection
kind: lemma
title: "Geometric generic injection of Kloosterman graph torsors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $k$ be algebraically closed of characteristic $p>0$, $S=\operatorname{Spec}k\llbracket t\rrbracket$, $K=k((t))$ and $K^s/K$ a specified separable closure. Let $X/S$ be the projective family
$$(Z_1^p-Z_1Z_0^{p-1})X_1X_0=(X_1^2+tX_0^2)Z_0^p,$$
and let $G$ be a specified finite abelian constant group. Assume explicitly that: (i) the special fibre is the union of two projective lines meeting transversely at the $p$ nodes indexed by $\mathbb F_p$, with translation $z\mapsto z+c$ permuting those nodes; (ii) every finite trait base change of $X$ is integral and normal; and (iii) every graph torsor constructed in the proof on the formal completion has a finite étale $G$-torsor algebraization on $X$, unique up to unique isomorphism compatible with its specified formal identification. Then there is an injective homomorphism
$$G^{\mathbb F_p}/G\longrightarrow H^1_{\acute et}(X_{K^s},G)$$
whose image is fixed by $\operatorname{Gal}(K^s/K)$ and on which $\mathbb F_p$ acts by translating node coordinates. The three hypotheses are part of this Statement; no wild-inertia assertion for the complementary cohomology is made.

## Facts & Assumptions

**Given:** The field, explicit family, finite group, geometric generic point and the three explicit hypotheses of the Statement.

## Proof

1.1 Let $N=\mathbb F_p$ be the node set. Write $U_0$ and $U_1$ for the two special components with all nodes removed, and $U_c=X_s\setminus(N\setminus\{c\})$. These opens cover the formal completion. The two $U_i$ are disjoint, are contained in every $U_c$, and for $c\ne d$ the intersection $U_c\cap U_d$ is $U_0\sqcup U_1$. On this finite cover glue trivial $G$-torsors using identity transitions from $U_0$ and multiplication by $\lambda_c\in G$ from $U_1$ to $U_c$. The transitions between $U_c,U_d$ are identity on $U_0$ and $\lambda_d\lambda_c^{-1}$ on $U_1$, and satisfy the cocycle identities. [given, construct, algebra]

2.1 Each $U_i$ and $U_c$ is connected. An equivariant isomorphism between two such graph torsors is therefore multiplication by a constant on each open. Compatibility with $U_0$ makes the constants on all $U_c$ equal; compatibility with $U_1$ shows the two node tuples differ by one common factor. Conversely that factor gives an isomorphism. Hence the special-fibre classes are distinct precisely modulo the diagonal $G$. Contracted product multiplies node tuples. [step 1.1, algebra]

3.1 By hypothesis (iii), each formal torsor has a unique algebraization up to its specified formal identification. Their contracted products and the translated formal torsors algebraize compatibly by the same uniqueness. The algebraizations therefore define a homomorphism from $G^N/G$ to the geometric generic torsor group, equivariant for node translation. [given, step 1.1, step 2.1, algebra]

4.1 Suppose two algebraizations become isomorphic over $K^s$. Their finite étale isomorphism torsor has a geometric generic section. Finite presentation and a finite affine cover descend that section to some finite extension $K'/K$. By hypothesis (ii), the base-changed model is integral and normal. On each affine open, the generic section maps the finite coordinate algebra into the fraction field; its elements are integral over the normal base ring and hence lie in that ring. These maps glue to a global section over the base-changed model. Its special fibre is still over $k$, because $k$ has no nontrivial finite extension, so it gives an isomorphism of the two original special torsors. Step 2.1 forces the node tuples to agree modulo the diagonal. Thus the homomorphism is injective. [given, step 2.1, step 3.1, algebra]

5.1 Every algebraized torsor is defined over $X/S$, hence its geometric generic isomorphism class is fixed by $\operatorname{Gal}(K^s/K)$. Étale $H^1$ of the finite abelian constant sheaf $G$ classifies $G$-torsors by cocycles and gluing. Combining this with steps 3.1–4.1 gives the stated equivariant injection. [step 3.1, step 4.1, algebra] ∎
