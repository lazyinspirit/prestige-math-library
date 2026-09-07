---
id: "lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms"
kind: "lemma"
title: "Bounded above flat tensor complexes preserve quasi isomorphisms"
deps: ["def-tensor-product-total-complex-of-chain-complexes", "def-left-and-right-flat-modules-over-an-arbitrary-ring", "thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic", "lem-acyclic-assembly-by-exact-columns", "lem-acyclic-assembly-by-exact-rows"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $R$ be a ring. Tensoring a bounded-above acyclic left $R$-complex $A$ with a bounded-above complex $P$ of flat right $R$-modules gives an acyclic total complex. The assertion also holds with the sides exchanged. Thus a bounded-above flat complex preserves quasi-isomorphisms between bounded-above complexes in the other variable. The common two-flat-replacement model gives the balancing isomorphism whenever the replacement maps are supplied.

## Facts & Assumptions

**Given:** Let $R$ be a ring. Tensoring a bounded-above acyclic left $R$-complex $A$ with a bounded-above complex $P$ of flat right $R$-modules gives an acyclic total complex. The assertion also holds with the sides exchanged. Thus a bounded-above flat complex preserves quasi-isomorphisms between bounded-above complexes in the other variable. The common two-flat-replacement model gives the balancing isomorphism whenever the replacement maps are supplied.

[F1] The tensor total differential has the Koszul sign and uses the direct sum over each degree diagonal ([[def-tensor-product-total-complex-of-chain-complexes]]).

[F2] Flatness means exactness of tensor on the appropriate module side ([[def-left-and-right-flat-modules-over-an-arbitrary-ring]]).

[F3] A chain map is a quasi-isomorphism iff its cone is acyclic, reindexed here to cochains ([[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]).

[F4] The column assembly lemma concerns exact augmented columns of a first-quadrant double cochain complex ([[lem-acyclic-assembly-by-exact-columns]]).

[F5] The row assembly lemma concerns exact augmented rows of a first-quadrant double cochain complex ([[lem-acyclic-assembly-by-exact-rows]]).

## Proof

1.1 Use total differential $d(x\otimes y)=d_Px\otimes y+(-1)^ix\otimes d_Ay$ for $x\in P^i$. If $P^i=0$ for $i>b$ and $A^j=0$ for $j>c$, put $p=b-i,q=c-j$. This is a first-quadrant double chain complex: both differentials lower their new index. Every total degree has a finite diagonal. Each vertical column is exact because $P^{b-p}$ is flat and $A$ is acyclic. Empty diagonals and zero terms contribute zero. [F1, F2]

2.1 For a cycle of chain total degree $k$, choose its largest horizontal index $p$ with a nonzero component. Its component at $(p,k-p)$ is a vertical cycle, since no component at horizontal index $p+1$ contributes. Exactness of that column supplies a lift in $(p,k-p+1)$ (absorbing the invertible sign $(-1)^{b-p}$). Subtract its total boundary. This kills that component and can introduce only one at horizontal index $p-1$. Descending through $p,p-1,\ldots,0$ terminates; at zero the extra horizontal term is zero. The cycle is a boundary. The case $k<0$ has no terms. [step 1.1, algebra]

3.1 This is the arrow-reversal of the finite-diagonal elimination in the published cochain column-assembly proof, with augmentation zero: reversing arrows in abelian groups interchanges kernels and cokernels, while finite products and sums agree. Interchanging the two indices gives the row version and proves the assertion for a flat left complex as well. The original assembly statements concern first-quadrant cochains; step 2.1 supplies the chain argument explicitly instead of applying those statements outside their domain. [F4, F5, step 2.1]

4.1 For a quasi-isomorphism $s$, its cone is acyclic and bounded above. Tensoring with a flat complex makes this cone acyclic by step 2.1 or step 3.1. Tensor of the cone identifies with the cone of the tensored map: on a shifted second-factor summand multiply by $(-1)^i$ for first-factor degree $i$; a shifted first-factor summand requires no correction. Direct substitution in the differential verifies these signs. The cone criterion proves invariance. For replacements $P_N\to N$ and $P_M\to M$, both arrows $P_N\otimes P_M\to N\otimes P_M$ and $P_N\otimes P_M\to P_N\otimes M$ are quasi-isomorphisms. Their localized zigzag is the natural balancing isomorphism. [F3, step 2.1, step 3.1, algebra] ∎
