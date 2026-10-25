---
id: "lem-local-sphere-orientations-and-finite-puncture-excision"
kind: "lemma"
title: "Local sphere orientations and finite puncture excision"
deps: ["def-local-degree-at-an-isolated-preimage", "thm-naturality-of-the-long-exact-sequence-of-a-pair", "prop-singular-homology-of-a-disjoint-union-is-the-direct-sum", "cor-homology-of-spheres", "thm-long-exact-sequence-of-a-pair-in-singular-homology", "thm-excision-for-singular-homology"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Local-degree diagram and Proposition 2.30 proof, pp.135–136"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Local-degree diagram and Proposition 2.30 proof, pp.135–136"
status: published
origin: "pipeline"
proof_strategy: "Use contractibility of a once-punctured sphere and the pair LES, including reduced H_0 for n=1. Excision to disjoint small balls identifies the finite-puncture group. Coordinate projections are inclusions of pairs and send the global class to its restricted local generator; nested excision proves independence."
---

## Statement

For $n\ge1$, $H_n(S^n,S^n\setminus\{x\};\mathbb Z)\cong\mathbb Z$, with generator the restriction of the global sphere orientation. The local degree in [[def-local-degree-at-an-isolated-preimage]] is independent of shrinking its neighborhood. For every finite nonempty $F\subset S^n$,
$$H_n(S^n,S^n\setminus F;\mathbb Z)\cong\bigoplus_{x\in F}H_n(S^n,S^n\setminus\{x\};\mathbb Z),$$
and the global orientation maps to the tuple of local orientation generators.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The local-degree definition sets up the map of pairs from an allowed neighborhood of an isolated preimage and defines its integer multiplier using local orientation generators. It explicitly leaves the cyclic identifications and neighborhood independence to this lemma ([[def-local-degree-at-an-isolated-preimage]]).

[F2] A map of pairs $f:(X,A)\to(Y,B)$ induces a commuting morphism from the long exact sequence of $(X,A)$ to that of $(Y,B)$, including the connecting maps. ([[thm-naturality-of-the-long-exact-sequence-of-a-pair]])

[F3] Let $X=\bigsqcup_{\alpha\in A}X_\alpha$ be a disjoint union of topological spaces, and let $G$ be an abelian group. Then for every $n\geq 0$, $$H_n^{\mathrm{sing}}(X;G)\cong\bigoplus_{\alpha\in A}H_n^{\mathrm{sing}}(X_\alpha;G).$$ ([[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]])

[F4] For $n\ge1$, $H_n(S^n;\mathbb Z)\cong\mathbb Z$ and $H_0(S^n;\mathbb Z)\cong\mathbb Z$ ([[cor-homology-of-spheres]]). The singular pair sequence is exact ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]), and removing a subset whose closure lies in the interior of the relative subspace induces an isomorphism in relative homology ([[thm-excision-for-singular-homology]]).

## Proof

1.1 A once-punctured sphere is contractible by stereographic projection and linear contraction. In the pair sequence its positive homology vanishes. For $n>1$ the terms on both sides of the global-to-relative map vanish, giving an isomorphism. For $n=1$, the last map is $H_0(S^1\setminus\{x\})\to H_0(S^1)$, an isomorphism between the groups of two connected nonempty spaces; exactness gives the same conclusion. Thus the global orientation generator restricts to a generator of the cyclic local group. [F4, algebra]

1.2 Choose mutually disjoint small open coordinate balls $U_x$ around the finitely many points. Excision removes the closed set $S^n\setminus\bigcup U_x$, which is contained in the open complement of $F$. The relative chain complex of the disjoint balls splits into their direct sum, by the same simplex-by-component decomposition as F3. Excision in each ball then gives the displayed isomorphism. This argument includes a singleton $F$. [F3, F4]

2.1 The homomorphism induced by $(S^n,S^n\setminus F)\to(S^n,S^n\setminus\{x\})$ is projection onto the $x$ summand: all other summands factor through a pair $(U_z,U_z)$ and vanish. Its composite with the global map restricts the global class to its local generator. Hence the global tuple is diagonal. [F2, step 1.1, step 1.2]

3.1 For nested allowed neighborhoods, the inclusion of punctured pairs is an excision isomorphism and carries one restricted generator to the other. Their maps to the target pair commute. Thus their integer multipliers agree. Two arbitrary allowed neighborhoods have an allowed open intersection, so shrinking proves full independence. [F1, F2, F4, step 1.1] ∎
