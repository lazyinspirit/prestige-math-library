---
id: lem-block-interchanges-transport-arbitrary-braid-boxes
kind: lemma
title: "Block interchanges transport arbitrary braid boxes"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gonzalez-Meneses, Basic results on braid groups, sections 1.5 and 3, printed pp. 7 and 19 (Artin generators and relations)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Traczyk, A new proof of Markov's braid theorem, Figure 8, printed p. 416 (the two arbitrary-box slides)"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Statement

For $p,q\ge0$, use the strand-placement homomorphisms from $B_p$ to the first
$p$ strands and from $B_q$ to the last $q$ strands of $B_{p+q}$, using
[[def-braid-group-by-the-artin-presentation]]. Write $\alpha\otimes\beta$
for the product of these images and set
$$Q_{p,q}:=\prod_{j=1}^{q}(\sigma_{p+j-1}\sigma_{p+j-2}\cdots\sigma_j),$$
where rows are multiplied in increasing $j$ and a descending row with upper
index smaller than its lower index is empty. For arbitrary
$\alpha\in B_p$, $\beta\in B_q$,
$$(\alpha\otimes\beta)Q_{p,q}=Q_{p,q}(\beta\otimes\alpha).$$
On the right, $\beta$ occupies the first $q$ strands and $\alpha$ the last
$p$ strands. The inverse interchange satisfies
$$(\beta\otimes\alpha)Q_{p,q}^{-1}=Q_{p,q}^{-1}(\alpha\otimes\beta).$$
In particular, either uniform overcrossing or uniform undercrossing of whole
blocks transports arbitrary internal braid boxes; it does not require those
boxes to commute with a twist on only part of their strands.

## Facts & Assumptions

**Given:** nonnegative integers $p,q$, the presented braid groups, and the specified row order for $Q_{p,q}$.

[F1] The Artin relations are $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ and $\sigma_i\sigma_j=\sigma_j\sigma_i$ for $|i-j|>1$; $B_0$ and $B_1$ are trivial ([[def-braid-group-by-the-artin-presentation]]).

## Proof

**Proof technique:** direct.

1.1 **Strand placements and empty blocks.** The assignments $\sigma_i\mapsto\sigma_i$ from $B_p$ and $\sigma_j\mapsto\sigma_{p+j}$ from $B_q$ preserve every defining relation, so they define homomorphisms into $B_{p+q}$. Their images commute: the closest possible generator indices are $p-1$ and $p+1$, whose difference is two. This defines $\alpha\otimes\beta$ independently of word representatives. If $p=0$ or $q=0$, every row of $Q_{p,q}$ is empty or there are no rows; $Q_{p,q}=1$, and both identities reduce to the same braid on the nonempty block. Hence assume $p,q\ge1$. [F1, given]

1.2 **The descending-row identity.** Put $D_{n,l}=\sigma_n\sigma_{n-1}\cdots\sigma_l$. For $l\le k<n$, commute a leading $\sigma_k$ past $\sigma_n,\ldots,\sigma_{k+2}$, replace $\sigma_k\sigma_{k+1}\sigma_k$ by $\sigma_{k+1}\sigma_k\sigma_{k+1}$, and commute the last $\sigma_{k+1}$ past $\sigma_{k-1},\ldots,\sigma_l$. Every latter index differs from $k+1$ by at least two. The resulting word is $D_{n,l}\sigma_{k+1}$. Thus $\sigma_kD_{n,l}=D_{n,l}\sigma_{k+1}$. When $n=k+1$ the initial commuting segment is empty; when $k=l$ the final commuting segment is empty. Both endpoint cases therefore use the same braid relation. [F1, algebra]

2.1 **Generators of the first block.** For $1\le i<p$, push $\sigma_i$ through the rows of $Q_{p,q}$ using step 1.2. At row $j$ its index is $k=i+j-1$, with $j\le k<p+j-1$, exactly the required range for $D_{p+j-1,j}$; after that row the index is $i+j$. After all $q$ rows, $\sigma_iQ_{p,q}=Q_{p,q}\sigma_{q+i}$. Multiplying this equality by the appropriate inverses gives $\sigma_i^{-1}Q_{p,q}=Q_{p,q}\sigma_{q+i}^{-1}$ as well. For $p=1$ there are no first-block generators to check. [step 1.2, algebra]

3.1 **Generators of the second block.** In $B_N$, $N=p+q$, index reflection $\sigma_i\mapsto\sigma_{N-i}$ preserves the Artin relations. It sends $Q_{p,q}$ to $Q_{q,p}$: the reflected word is the product of the grid entries $\sigma_{q-i+j}$ first in increasing $i=1,\ldots,q$, then increasing $j=1,\ldots,p$, whereas $Q_{q,p}$ orders the same grid first by $j$, then by $i$. To transpose these orders, only pairs with $i<i'$ and $j>j'$ must change order. Their indices differ by $(i'-i)+(j-j')\ge2$, so every such swap is a far commutation. Apply step 2.1 to $Q_{q,p}$ and its first-block generator $\sigma_{q-j}$, $1\le j<q$, then reflect back: this gives $\sigma_{p+j}Q_{p,q}=Q_{p,q}\sigma_j$, and the same formula for inverse generators. For $q=1$ this verification is vacuous. [F1, step 2.1, algebra]

4.1 **Arbitrary boxes and inverse crossings.** Apply steps 2.1 and 3.1 successively to any words for $\alpha$ and $\beta$, including inverse letters. They give $(\alpha\otimes\beta)Q_{p,q}=Q_{p,q}(\beta\otimes\alpha)$ with the indicated shifted embeddings. Multiplying by $Q_{p,q}^{-1}$ on both sides gives the asserted inverse identity. The displayed equations use algebraic word order: the rightmost factor runs first geometrically. Thus $Q_{p,q}$ physically takes ordered input blocks $(q,p)$ to output blocks $(p,q)$, and $Q_{p,q}^{-1}$ takes physical input $(p,q)$ to output $(q,p)$. Each strand of one block crosses each of the other once with uniform sign, and order inside either block is preserved. A chronological record is obtained by reversing the actual word; when chronological input is written $(p,q)$, the negative chronological interchange is $Q_{q,p}^{-1}$, whose actual geometric word is its reversal. These are distinct reading conventions, not a reflection or change of generator sign. The two algebraic identities already proved transport the boxes at their specified input/output frames. Thus both signs transport arbitrary boxes, with all zero-width and one-width cases covered in steps 1.1, 2.1 and 3.1. No closure equivalence or Markov theorem is used. [step 1.1, step 2.1, step 3.1, algebra] ∎
