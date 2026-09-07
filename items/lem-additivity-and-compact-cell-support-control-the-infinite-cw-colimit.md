---
id: "lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit"
kind: "lemma"
title: "Additivity and compact cell support control the infinite cw colimit"
deps: ["prop-ordinary-homology-theories-have-mayer-vietoris-for-cw-covers", "lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs", "lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift", "lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 14§6, theorem and telescope proof pp.114–116"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "14§6, theorem and telescope proof pp.114–116"
    - title: "Hatcher, Algebraic Topology, Theorem 3F.8 pp.314–315"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
      locator: "Theorem 3F.8 pp.314–315"
status: published
origin: "pipeline"
proof_strategy: "Split the telescope into odd and even cylinder subcomplexes, with intersection the disjoint union of stages. MV and arbitrary additivity identify the overlap map with 1-shift after reindexing; its injectivity kills the next boundary and its cokernel is the colimit. Transfer through the explicit telescope homotopy equivalence. Combine with finite-dimensional finite support, and use compact images to prove continuous-map naturality of the finite-subcomplex colimit."
---

## Statement

For every ordinary theory $h$ with arbitrary additivity and every CW pair $(X,A)$, the canonical map
$$\operatorname{colim}_{i\ge0}h_n(X^i,A^i)\longrightarrow h_n(X,A)$$
is an isomorphism. So is the canonical colimit over finite subcomplex pairs $(K,K\cap A)$ of $X$. The latter identification is natural for every continuous map of CW pairs.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $X=U\cup V$ be a cover by CW subcomplexes and $W=U\cap V$. Every ordinary homology theory has a natural exact sequence $$\cdots\to h_n(W)\xrightarrow{(i_*,-j_*)}h_n(U)\oplus h_n(V)\xrightarrow{a_*+b_*}h_n(X)\xrightarrow{\Delta}h_{n-1}(W)\to\cdots,$$ where all four maps $i,j,a,b$ are inclusions. The same sequence holds for a CW pair $(X,C)$ covered by $(U,C\cap U)$ and $(V,C\cap V)$, with the corresponding relative groups. ([[prop-ordinary-homology-theories-have-mayer-vietoris-for-cw-covers]])

[F2] For every CW pair $(X,A)$, the skeletal telescope projection $p:(T_X,T_A)\to(X,A)$ is a homotopy equivalence of pairs. ([[lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs]])

[F3] For any sequence of abelian groups $G_0\xrightarrow{u_0}G_1\xrightarrow{u_1}\cdots$, let $D=\bigoplus_{i\ge0}G_i$ and let $s:D\to D$ send the $i$th coordinate by $u_i$ into coordinate $i+1$. Then $$0\longrightarrow D\xrightarrow{1-s}D\longrightarrow\operatorname{colim}_iG_i\longrightarrow0$$ is exact, where the last map sums the canonical maps to the colimit. The maps $u_i$ need not be injective. ([[lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift]])

[F4] For a finite-dimensional CW pair $(X,A)$ and ordinary $h$, the canonical map $$\underset{K\subset X\text{ finite subcomplex}}{\operatorname{colim}}\,h_n(K,K\cap A)\longrightarrow h_n(X,A)$$ is an isomorphism for every integer $n$. ([[lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support]])

## Proof

1.1 Use the telescope from F2. Subdivide its height intervals at half-integers. Let $B_0=X^0\times[0,1]$, and for $i\ge1$ let $B_i=(X^{i-1}\times[i-1/2,i])\cup(X^i\times[i,i+1])$. Even $B_i$ form a disjoint-union subcomplex $U$, and odd $B_i$ form a disjoint-union subcomplex $V$; they cover the telescope. Their intersection is the disjoint union $C_i=X^i\times[i+1/2,i+1]$. Each $B_i$ retracts onto $X^i$ at height $i$, and each $C_i$ onto $X^i$, with all retractions preserving the corresponding pieces of $T_A$. [F2, given]

2.1 Apply relative Mayer–Vietoris F1 and arbitrary additivity. After the retractions, the overlap map has from the $i$th summand the identity into stage $i$ and the inclusion-induced map into stage $i+1$, with opposite signs. Multiplying each odd-indexed overlap summand by $-1$, and reordering the target even/odd direct sums by stage, identifies it with $1-s$ on $\bigoplus_i h_n(X^i,A^i)$. These changes of signs leave the outgoing sum map equal to the canonical stage-to-telescope map. [F1, step 1.1]

3.1 F3 says $1-s$ is injective also in degree $n-1$. Exactness therefore makes the map from the stage direct sum onto telescope homology surjective, with kernel $\operatorname{im}(1-s)$. Its cokernel is the sequential colimit by F3. F2 identifies telescope homology with $h_n(X,A)$ by the actual projection. Its composite on every stage is the canonical inclusion, so the isomorphism obtained is the claimed canonical map. [F2, F3, step 2.1]

4.1 Each skeletal pair is finite-dimensional, so F4 identifies its group with the colimit of the finite subcomplex pairs it contains. Every finite CW subcomplex of X lies in some skeleton, as its finitely many cells have bounded dimensions. Thus the iterated colimit is precisely the colimit over all finite subcomplex pairs, proving that assertion. [F4, step 3.1]

5.1 A continuous map takes a finite CW subcomplex into a finite subcomplex by compact-cell support, the same fact used in F4. Restrict the map to those finite pairs and use ordinary functoriality; their maps to the full pair commute. Since every class has finite support, this proves naturality for arbitrary maps, without assuming such maps preserve skeleta. Empty X and all zero groups give zero colimits, and all degrees, including negative ones, are covered by the same exact sequences. [F4, step 4.1] ∎
