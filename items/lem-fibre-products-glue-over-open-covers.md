---
id: "lem-fibre-products-glue-over-open-covers"
kind: "lemma"
title: "Gluing fibre products along open covers"
status: "draft"
origin: "pipeline"
deps: ["lem-fibre-product-open-restriction", "lem-fibre-product-unique-canonical-isomorphism", "thm-gluing-affine-schemes", "lem-morphism-schemes-local-on-source-target"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil proof 10.1.1 Steps 2–5"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

Let $X\to S\leftarrow Y$ be given. If $Y=\bigcup_iY_i$ is an open cover and every $P_i=X\times_S Y_i$ exists, these products glue along their inverse images over $Y_i\cap Y_j$ to a fibre product $X\times_S Y$. There is also a base-cover version: if $S=\bigcup_iS_i$ and $f^{-1}(S_i)\times_{S_i}g^{-1}(S_i)$ exists for every $i$, these products glue to $X\times_S Y$. No overlap is required to be affine.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Suppose $P=X\times_S Y$ exists, with projections $p,q$. If opens $V\subseteq X$, $W\subseteq Y$ map into an open $U\subseteq S$, then the open subscheme $Q=p^{-1}(V)\cap q^{-1}(W)$ represents $V\times_U W$, and also $V\times_S W$. Independently, for $f:X\to S$ and an open $U\subseteq S$, the open subscheme $f^{-1}(U)$ represents $X\times_S U$. ([[lem-fibre-product-open-restriction]])

[F2] If $(P,p,q)$ and $(P',p',q')$ are fibre products of the same pair $X\to S\leftarrow Y$, there is a unique isomorphism $u:P\to P'$ with $p'u=p$ and $q'u=q$. ([[lem-fibre-product-unique-canonical-isomorphism]])

[F3] Affine schemes equipped with open subschemes and isomorphisms on overlaps satisfying the identity and cocycle conditions glue to a scheme, uniquely up to unique isomorphism; the given affine schemes become an open affine cover. ([[thm-gluing-affine-schemes]])

[F4] Compatible morphisms of schemes on an open cover of a scheme $X$ glue uniquely to a morphism from $X$; two morphisms out of $X$ are equal if their restrictions to an open cover are equal. Both assertions may be checked after affine-open refinement of source and target. ([[lem-morphism-schemes-local-on-source-target]])

## Proof

1.1 Let $P_{ij}\subseteq P_i$ be the inverse image of $Y_i\cap Y_j$. By F1 it represents $X\times_S(Y_i\cap Y_j)$. F2 identifies it with the corresponding open in $P_j$. The transition maps satisfy identity, inverse and cocycle identities: on each triple overlap both candidate maps have identical projections and are equal by uniqueness. [given, F1, F2]

2.1 To use F3 with exactly its affine hypothesis, cover each $P_i$ by affine opens. For two such charts use the open subset on which the preceding transition lands in the second chart; their isomorphisms are restrictions of those transitions. These are open subschemes, even when nonaffine, and their cocycles are already verified. F3 glues the affine charts to a scheme $P$; the charts belonging to $P_i$ glue back to $P_i$. F4 glues the projection maps to $X,Y$. [F3, F4, step 1.1]

3.1 For a compatible pair $a:T\to X,b:T\to Y$, cover $T$ by $T_i=b^{-1}(Y_i)$. Each pair restricted to $T_i$ gives a unique map to $P_i$. On $T_i\cap T_j$ both factor through $P_{ij}$ and agree by its universal property. F4 glues them to one map $T\to P$. Any other such map has the same restrictions, proving uniqueness for arbitrary, possibly empty, $T$. The empty cover of empty $Y$ gives $P=\varnothing$. [F1, F4, step 1.1, step 2.1]

4.1 For a base cover, replace the local factors by $X_i=f^{-1}(S_i)$ and $Y_i=g^{-1}(S_i)$. F1 describes the overlap over $S_i\cap S_j$ as the open inverse image in either local product. The same cocycle and affine refinement construction applies. A compatible pair from $T$ is glued on the inverse images of $S_i$ under its common composite to $S$. A singleton cover changes nothing. [F1, F2, F3, F4, step 3.1] ∎
