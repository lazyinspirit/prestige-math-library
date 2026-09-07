---
id: "lem-subdivision-compatible-continuous-polyhedral-homology-comparison"
kind: "lemma"
title: "Subdivision compatible continuous polyhedral homology comparison"
deps: ["lem-oriented-simplex-comparison-for-an-ordinary-homology-theory", "lem-finite-simplicial-approximation-for-homology-comparison"]
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
    - title: "May, A Concise Course in Algebraic Topology, 15§2, exact-diagram naturality and boundary compatibility, pp.119–120"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, exact-diagram naturality and boundary compatibility, pp.119–120"
    - title: "Hatcher, Algebraic Topology, Theorem 2C.1 and proof, pp.177–179"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Theorem 2C.1 and proof, pp.177–179"
status: "draft"
origin: "pipeline"
proof_strategy: "For the identity from the old triangulation to its subdivision, each old skeleton lies in the new skeleton. Show the relative class of an old simplex maps to the sum of its consistently oriented subdivided simplices: induction on dimension identifies the boundary, and injectivity of the relative-simplex boundary fixes the class (dimension zero is the coefficient map). Apply the skeletal exact diagram. Then replace a continuous map by a simplicial approximation; homotopy invariance proves naturality and independence of all choices."
---

## Statement

The ordered-simplex comparison for an ordinary homology theory on finite simplicial pairs is unchanged by finite subdivision. It is natural for every continuous map of finite simplicial pairs and commutes with pair connecting homomorphisms.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For finite simplicial pairs $(K,L)$ and any ordinary theory $h$ with coefficient group $G$, ordered simplex classes identify $$C_*^h(K,L)\cong C_*^{\mathrm{simp}}(K,L;\mathbb Z)\otimes G,$$ with the alternating face differential. Consequently they give a coefficient-normalized isomorphism $h_n(|K|,|L|)\to H_n(|K|,|L|;G)$, natural for simplicial maps and compatible with pair boundaries. No flatness of $G$ is assumed. ([[lem-oriented-simplex-comparison-for-an-ordinary-homology-theory]])

[F2] For finite simplicial pairs $(K,L)$ and $(P,Q)$, every continuous map $f:(|K|,|L|)\to(|P|,|Q|)$ is homotopic through maps of pairs to a simplicial map $(\operatorname{sd}^r K,\operatorname{sd}^r L)\to(P,Q)$ for some $r\ge0$. ([[lem-finite-simplicial-approximation-for-homology-comparison]])

## Proof

1.1 Let $K'$ be a finite subdivision of $K$, with $L'$ the induced subdivision of $L$. The identity realization map is cellular from the old filtration to the new one, since $|K^r|\subset|(K')^r|$. On an ordered old $r$-simplex, the sum of its new oriented $r$-simplices has all interior faces cancelled in pairs and has boundary the subdivided old boundary. Starting with vertices and using the boundary characterization in F1, it represents the old relative simplex class: the boundary map for the disk pair is injective, with reduced target for $r=1$. Thus the induced cellular map is the signed subdivision chain map, with coefficient $g$ unchanged. [F1]

2.1 The same argument applies to singular homology with $G$ coefficients. Hence the comparison square for the identity between the two triangulations commutes on their relative cell groups and on the skeletal lift isomorphisms. It follows that the homology comparison agrees before and after subdivision. Two successive subdivisions are covered by repetition; two finite linear subdivisions have a common refinement, obtained by triangulating their finite convex intersection cells in increasing face dimension. Applying the same argument to that refinement gives independence of its choice. [F1, step 1.1]

3.1 For a continuous map of finite pairs choose a simplicial approximation after a common barycentric subdivision of the source, by F2. F1 gives naturality for that simplicial map, the preceding step identifies the subdivided comparison with the original one, and homotopy invariance replaces the approximation by the given map in both theories. Thus the comparison is natural for the actual continuous map and cannot depend on the approximation chosen. [F1, F2, step 2.1]

4.1 The pair-boundary square already commutes for the ordered-simplex comparison in F1. Subdivision and its comparison are maps of pairs and preserve the cone orientation, so they preserve that square. Therefore the resulting continuous natural comparison commutes with pair boundaries as claimed. Empty pairs and zero-dimensional triangulations use the same vertex/direct-sum comparison. [F1, step 2.1, step 3.1] ∎
