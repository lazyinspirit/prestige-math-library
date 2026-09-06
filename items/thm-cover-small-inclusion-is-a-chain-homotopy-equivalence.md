---
id: thm-cover-small-inclusion-is-a-chain-homotopy-equivalence
kind: theorem
title: "The cover-small inclusion is a chain homotopy equivalence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cover-small-singular-chains-compute-singular-homology, lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision, thm-barycentric-subdivision-is-chain-homotopic-to-the-identity, def-barycentric-subdivision-chain-operator, def-barycentric-subdivision-prism-homotopy]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

The inclusion of the cover-small complex into the singular complex is a chain
homotopy equivalence.

## Facts & Assumptions

**Given:** A family $\mathcal U$ whose interiors cover $X$, an abelian group $G$, and the barycentric subdivision data. Write $A_\bullet=C_\bullet^{\mathcal U}(X;\mathbb Z)$ and $C_\bullet=C_\bullet(X;\mathbb Z)$. We first construct integral operators and then tensor with $G$.

## Proof

**Proof technique:** direct.

1.1 Use $S$ and $T$ with $1-S=\partial T+T\partial$ from [[thm-barycentric-subdivision-is-chain-homotopic-to-the-identity]]. Their constructions in [[def-barycentric-subdivision-chain-operator]] and [[def-barycentric-subdivision-prism-homotopy]] take each singular simplex to a finite sum of its compositions with affine simplices in its own domain. Thus neither operator enlarges the image of a simplex, and both preserve $A_\bullet$. Also $S$ is a chain map: applying $\partial$ on either side of the displayed homotopy identity gives $\partial S=S\partial$. Set $D_q=\sum_{i=0}^{q-1}TS^i$ for $q\ge0$, so $D_0=0$ and $1-S^q=\partial D_q+D_q\partial$ by telescoping. [given, construct]

2.1 For each singular simplex $\sigma$, let $a(\sigma)$ be the least $q\ge0$ with $S^q\sigma\in A_\bullet$; existence follows from [[lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision]] with integer coefficients. Define $m$ recursively on dimension: on vertices set $m=0$, and for positive-dimensional $\sigma$ set $$m(\sigma)=\max\bigl(\{a(\sigma)\}\cup\{m(\sigma\circ\delta_j):0\le j\le\dim\sigma\}\bigr).$$ Every maximum is finite and uses already defined lower-dimensional values. Since $S$ preserves small chains, $S^{m(\sigma)}\sigma$ is small. Every face $\tau$ has $m(\tau)\le m(\sigma)$ by construction, regardless of cancellations in subdivided chains. If $\sigma$ is already small, all its faces are small, so this recursion gives $m(\sigma)=0$. [step 1.1, construct]

3.1 Define $D\sigma=D_{m(\sigma)}\sigma$ on integral generators and extend linearly. Put $R=1-\partial D-D\partial$ on $C_\bullet$. The identity $\partial^2=0$ gives $\partial R=R\partial$. On a simplex, telescoping gives $$R\sigma=S^{m(\sigma)}\sigma+D_{m(\sigma)}(\partial\sigma)-D(\partial\sigma).$$ The first term is small. For each face $\tau$, its signed correction is $\sum_{i=m(\tau)}^{m(\sigma)-1}TS^i\tau$. Each $S^i\tau$ is small for these indices, and $T$ preserves small chains. Therefore $R\sigma$ is small. [step 1.1, step 2.1, algebra]

4.1 Regard $R$ as a chain map $r:C_\bullet\to A_\bullet$ and let $\iota:A_\bullet\hookrightarrow C_\bullet$. Then $1-\iota r=\partial D+D\partial$. On every small simplex $m=0$, hence $D=0$ on $A_\bullet$; its boundary is also small, so $r\iota=1$. Thus one inverse composite is the identity and the other is chain homotopic to it. In degree zero all vertices are small and $D=0$; if $X$ is empty both complexes are zero. [step 2.1, step 3.1, algebra]

5.1 The group $A_n$ is the direct summand of the free abelian group $C_n$ spanned by small singular simplices. Tensoring its inclusion with $G$ identifies $A_n\otimes G$ with the cover-small subgroup of $C_n(X;G)$. Tensor $r,D$ and their identities with $\operatorname{id}_G$; these identities remain valid for every abelian $G$, including $G=0$, without a flatness assumption. This proves the stated chain homotopy equivalence with the page's coefficients. [step 4.1, algebra] ∎ 