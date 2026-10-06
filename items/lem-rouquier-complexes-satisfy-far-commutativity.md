---
id: lem-rouquier-complexes-satisfy-far-commutativity
kind: lemma
title: "Rouquier complexes satisfy far commutativity"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [def-positive-and-negative-rouquier-generator-complexes, lem-distant-soergel-generators-commute, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "Proposition 3.2, the $m_{st}=2$ case, PDF p. 8"
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "Theorem 3.10, last line (the distant commutation), printed p. 544"
verification:
  precheck: pass
---

## Statement

For $|i-j|>1$ the swaps $B_i\otimes_RB_j\cong B_j\otimes_RB_i$ and
$R(1)\otimes_RR(1)\cong R(2)$ lift to degree-zero isomorphisms of complexes
$$F_i\otimes_RF_j\cong F_j\otimes_RF_i,\qquad F_i\otimes_RF_j^{-1}\cong F_j^{-1}\otimes_RF_i,\qquad F_i^{-1}\otimes_RF_j^{-1}\cong F_j^{-1}\otimes_RF_i^{-1},$$
and the same with the two factors exchanged; the signs are the Koszul signs of
the total differential, and no grading shift is needed. In particular the
corresponding objects of $K^b(R^e\text{-grmod})$ are isomorphic.

## Facts & Assumptions

**Given:** Indices $i,j$ with $|i-j|>1$ and the generator complexes $F_i,F_j,F_i^{-1},F_j^{-1}$ of [[def-positive-and-negative-rouquier-generator-complexes]].

[F1] *Distant commutativity.* There exists a degree-zero isomorphism $B_i\otimes_RB_j\cong B_j\otimes_RB_i$ of graded $(R,R)$-bimodules. Compatibility with the generator differentials will be proved below. ([[lem-distant-soergel-generators-commute]])

[F2] *Totalization in two factors.* For bounded complexes $P,Q$ the signed tensor totalization has degree-$n$ term $\bigoplus_{r+s=n}P^r\otimes_RQ^s$ and differential $d(x\otimes y)=d_P(x)\otimes y+(-1)^rx\otimes d_Q(y)$ for $x\in P^r$; internal degrees add, so tensoring with $R(a)$ on either side shifts a bimodule by $(a)$. ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]])

[F3] The generators use $B_r=(R\otimes_{R^{s_r}}R)(1)$, multiplication $\varepsilon_r$, and $\eta_r(1)=\alpha_r\otimes1+1\otimes\alpha_r$, where $\alpha_r=\varepsilon_r^{\mathrm{root}}(x_r-x_{r+1})$ and $\varepsilon_r^{\mathrm{root}}=(-1)^{r-1}$. ([[def-positive-and-negative-rouquier-generator-complexes]])

## Proof

**Proof technique:** independent coordinate blocks and the signed flip of complexes.

1.1 Put $A=\mathbb Q[x_i,x_{i+1}]$, $B=\mathbb Q[x_j,x_{j+1}]$ and let $C$ be the polynomial ring in the remaining coordinates. The disjoint transpositions give $R=A\otimes_{\mathbb Q}B\otimes_{\mathbb Q}C$ and $R^{s_i}=A^{s_i}\otimes B\otimes C$, $R^{s_j}=A\otimes B^{s_j}\otimes C$. For $E=B\otimes C$, the map $(a\otimes e)\otimes(a'\otimes e')\mapsto(a\otimes a')\otimes ee'$ identifies $R\otimes_{R^{s_i}}R$ with $(A\otimes_{A^{s_i}}A)\otimes E$; its inverse sends $(a\otimes a')\otimes e$ to $(a\otimes1)\otimes(a'\otimes e)$. Balancing over $A^{s_i}$ and $E$ verifies both maps and their inverse identities. Exchanging the blocks gives the analogous identification for $j$. Under these maps multiplication and root insertion act only in their own block. Thus $F_i^{\epsilon}=P_i^{\epsilon}\otimes B\otimes C$ and $F_j^{\delta}=A\otimes P_j^{\delta}\otimes C$ as complexes, with the shifts inherited from the generator definitions. [F3, algebra]

2.1 In each bidegree the map $(p\otimes b\otimes c)\otimes(a\otimes q\otimes d)\mapsto pa\otimes bq\otimes cd$ identifies the balanced product with $P_i^{\epsilon}\otimes_{\mathbb Q}P_j^{\delta}\otimes_{\mathbb Q}C$; the inverse sends $p\otimes q\otimes c$ to $(p\otimes1\otimes1)\otimes(1\otimes q\otimes c)$. The $A,B,C$ balancing relations verify these inverse identities and preservation of both outer actions. Each differential is a bimodule map acting in its own block, so these identifications intertwine the signed total differentials for every choice of signs, including negative cohomological degrees. [F2, F3, step 1.1, algebra]

3.1 On the external tensor product, define the flip of a term of cohomological bidegree $(p,q)$ by $x\otimes y\otimes c\mapsto(-1)^{pq}y\otimes x\otimes c$. It preserves both outer actions because their block labels move with the blocks. For the component $d_Px\otimes y$, its image has sign $(-1)^{(p+1)q}$, which equals $(-1)^{pq+q}$ on the corresponding component of the target differential. For $(-1)^px\otimes d_Qy$, its image has sign $(-1)^{p+p(q+1)}=(-1)^{pq}$, again the target sign. It is therefore a chain isomorphism, and its square is the identity. [F2, step 2.1, algebra]

4.1 Transport this flip through the block identifications of step 2.1. It yields $F_i^{\epsilon}\otimes_RF_j^{\delta}\cong F_j^{\delta}\otimes_RF_i^{\epsilon}$ for all signs, with zero internal degree and no shift. Its component on $B_i\otimes_RB_j$ realizes the distant bimodule isomorphism of F1 with the required differential compatibility. This proves every displayed case in the category of complexes and hence in its homotopy category. The map is the independent-block flip, not an arbitrary flip of balanced bimodule tensors. [F1, step 2.1, step 3.1] ∎

## Remarks

The signs are exactly the Koszul signs of the total differential: the swap of two factors of bidegrees $(r,s)$ carries $(-1)^{rs}$, and this is the sign under which the two off-diagonal components of the total differential correspond. This is the trivial ($m_{st}=2$) case of Rouquier Proposition 3.2 and the last line of GKS Theorem 3.10; no input beyond the distant commutativity of the Soergel generators is used.
