---
id: "thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs"
kind: "theorem"
title: "Eilenberg steenrod uniqueness on all cw pairs"
deps: ["thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs", "lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit", "thm-singular-homology-satisfies-dimension-and-arbitrary-additivity"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 14§6 pp.114–116 and 15§2 pp.119–120"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "14§6 pp.114–116 and 15§2 pp.119–120"
    - title: "Hatcher, Algebraic Topology, Axioms for Homology p.161"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Axioms for Homology p.161"
status: "draft"
origin: "pipeline"
proof_strategy: "Extend the finite-dimensional comparison over skeleta and then use finite-subcomplex support for naturality under arbitrary maps. Check compatibility with pair LES and the prescribed coefficient map. Arbitrary additivity is used in the telescope step."
---

## Statement

For any two ordinary homology theories $h,k$ on all CW pairs and a specified coefficient isomorphism $u:h_0(*)\to k_0(*)$, there is a unique natural equivalence $h\to k$ normalized by $u$ and commuting with connecting homomorphisms. In particular, a theory with coefficient group $G$ is naturally equivalent to singular homology with coefficients $G$, normalized by $\mathrm{id}_G$. Arbitrary additivity is part of the hypotheses.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For ordinary homology theories $h,k$ and a specified isomorphism $u:h_0(*)\to k_0(*)$, there is a unique boundary-compatible natural equivalence on finite-dimensional CW pairs normalized by $u$. Infinitely many cells in bounded dimensions are allowed. ([[thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs]])

[F2] For every ordinary theory $h$ with arbitrary additivity and every CW pair $(X,A)$, the canonical map $$\operatorname{colim}_{i\ge0}h_n(X^i,A^i)\longrightarrow h_n(X,A)$$ is an isomorphism. So is the canonical colimit over finite subcomplex pairs $(K,K\cap A)$ of $X$. The latter identification is natural for every continuous map of CW pairs. ([[lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit]])

[F3] For any abelian group $G$, $H_0(*;G)\cong G$ and $H_n(*;G)=0$ for every integer $n\ne0$. For every set-indexed family of pairs the canonical map $$\bigoplus_\alpha H_n(X_\alpha,A_\alpha;G)\longrightarrow H_n\left(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha;G\right)$$ is an isomorphism. Together with the structural axioms, singular homology is an ordinary theory with coefficient group $G$. ([[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]])

## Proof

1.1 On each finite-dimensional pair F1 supplies the unique normalized equivalence. Its components on successive skeleta commute with inclusion by naturality. Taking their colimit and using F2 gives an isomorphism on every CW pair. Equivalently, compute it on finite subcomplex supports, where the same comparison is already prescribed by F1. [F1, F2]

2.1 For any continuous map of CW pairs, a finite support has a finite image support by F2. The comparison square commutes on these finite pairs by F1, and passing their classes to the full groups proves naturality for the original map. A boundary class has support in the intersection of its finite support with the subspace; the boundary square on that finite pair commutes by F1. Hence the extended maps commute with all pair boundaries. [F1, F2, step 1.1]

3.1 Every other normalized natural morphism agrees on finite pairs by F1 and therefore on all classes by finite support in F2. The component at the point remains the prescribed u, including when both coefficient groups are zero. Singular homology with G is an ordinary theory by F3, so choosing it for k and choosing the identity coefficient map gives the final assertion. The infinite colimit step used arbitrary additivity through F2. [F1, F2, F3, step 1.1, step 2.1] ∎
