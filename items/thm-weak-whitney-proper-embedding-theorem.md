---
id: thm-weak-whitney-proper-embedding-theorem
kind: theorem
title: "The weak Whitney proper embedding theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space,
       prop-a-proper-injective-immersion-is-a-smooth-embedding,
       lem-a-generic-linear-projection-preserves-injectivity-and-immersion,
       lem-a-generic-projection-can-preserve-properness]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.15"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
    - title: "Hassler Whitney, Differentiable manifolds in Euclidean space"
      url: "https://www.mathnet.ru/php/getFT.phtml?jrnid=sm&option_lang=eng&paperid=5498&what=fullt"
---

## Statement

Every smooth $n$-manifold admits a proper smooth embedding into
$\mathbb R^{2n+1}$.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$.

[L1] The manifold embeds in some finite-dimensional Euclidean space, and in the noncompact case one may choose an embedding $(G,\rho)$ with $G$ bounded and $\rho$ proper ([[thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space]]).

[L2] A projection that avoids secant and tangent directions preserves injectivity and immersion, and in the bounded-plus-proper model it also preserves properness ([[lem-a-generic-linear-projection-preserves-injectivity-and-immersion]], [[lem-a-generic-projection-can-preserve-properness]]).

[L3] A proper injective immersion is a smooth embedding ([[prop-a-proper-injective-immersion-is-a-smooth-embedding]]).

## Proof
**Proof technique:** direct.

1.1 Choose the embedding $F:M\to\mathbb R^d$ from [L1]. If $M$ is compact, $F$ is automatically proper. If $M$ is noncompact, use the supplied form $F=(G,\rho)$ relative to a decomposition $\mathbb R^d=e^\perp\oplus\mathbb Re$, with $G$ bounded and $\rho$ proper. [L1, given, choose]

2.1 If $d\le2n+1$, compose $F$ with a linear isometric inclusion $\mathbb R^d\hookrightarrow\mathbb R^{2n+1}$. This composite is still a proper smooth embedding, so the theorem is proved in this case. Hence assume $d>2n+1$. [step 1.1, construct]

3.1 The generic-projection lemma in [L2] gives a dense set of directions $u\in S^{d-1}$ for which $P_u\circ F$ is an injective immersion. If $M$ is compact, choose any such $u$; the projected map is proper because its source is compact. If $M$ is noncompact, the set $S^{d-1}\setminus\{e,-e\}$ is a nonempty open set, so it meets the dense good-direction set. Choose $u$ in that intersection. Then $u$ is not parallel to the proper-coordinate axis, and the corrected properness lemma in [L2] makes $P_u\circ F$ proper. In either case [L3] upgrades the proper injective immersion to a smooth embedding into $u^\perp\cong\mathbb R^{d-1}$. [L2, L3, step 1.1, step 2.1, choose]

4.1 In the noncompact case put $e':=P_u(e)\ne0$ and decompose $u^\perp=\mathbb Re'\oplus(e')^\perp$. The component of $P_u\circ F=P_u(G)+\rho e'$ perpendicular to $e'$ is bounded. Its scalar component along $e'/\|e'\|$ is $\|e'\|\rho+b$ with $b$ bounded, and the argument in the properness lemma shows this function is proper. Thus the projected embedding again has bounded-plus-proper form, now with proper-coordinate unit vector $e'/\|e'\|$. [L2, step 1.1, step 3.1, algebra]

5.1 If the new ambient dimension is still greater than $2n+1$, repeat steps 3.1-4.1. Step 3.1 restores the embedding hypothesis after each projection; compactness preserves properness in the compact case, and step 4.1 preserves the bounded-plus-proper form in the noncompact case. After the finite number $d-(2n+1)$ of projections, the ambient dimension is $2n+1$ and the resulting map is a proper smooth embedding. [L2, L3, step 2.1, step 3.1, step 4.1, induction]

6.1 The low-dimensional branch is step 2.1, and the projection branch is step 5.1. Therefore every smooth $n$-manifold admits a proper smooth embedding into $\mathbb R^{2n+1}$. [step 2.1, step 5.1] ∎
