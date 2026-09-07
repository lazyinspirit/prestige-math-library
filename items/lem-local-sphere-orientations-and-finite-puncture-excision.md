---
id: "lem-local-sphere-orientations-and-finite-puncture-excision"
kind: "lemma"
title: "Local sphere orientations and finite puncture excision"
deps: ["def-local-degree-at-an-isolated-preimage", "thm-naturality-of-the-long-exact-sequence-of-a-pair", "prop-singular-homology-of-a-disjoint-union-is-the-direct-sum"]
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

[F1] Let $f:S^n\to S^n$ be continuous, $n\ge1$, with oriented source and target as in def-degree-of-a-self-map-of-an-oriented-sphere. Suppose $y=f(x)$ and $x$ is isolated in $f^{-1}(y)$. Choose an open neighborhood $U$ of $x$ with $U\cap f^{-1}(y)=\{x\}$. The map of pairs $$(U,U\setminus\{x\})\longrightarrow(S^n,S^n\setminus\{y\})$$ induces a homomorphism between infinite cyclic groups. Its integer multiplier in the generators restricted from the two global orientation classes is the **local degree** $\deg_x f$. Excision thm-excision-for-singular-homology identifies the domain local group with $H_n(S^n,S^n\setminus\{x\};\mathbb Z)$; the pair sequence thm-long-exact-sequence-of-a-pair-in-singular-homology supplies the global-to-local identification. The following lemma establishes these identifications and independence of the neighborhood. ([[def-local-degree-at-an-isolated-preimage]])

[F2] A map of pairs $f:(X,A)\to(Y,B)$ induces a commuting morphism from the long exact sequence of $(X,A)$ to that of $(Y,B)$, including the connecting maps. ([[thm-naturality-of-the-long-exact-sequence-of-a-pair]])

[F3] Let $X=\bigsqcup_{\alpha\in A}X_\alpha$ be a disjoint union of topological spaces, and let $G$ be an abelian group. Then for every $n\geq 0$, $$H_n^{\mathrm{sing}}(X;G)\cong\bigoplus_{\alpha\in A}H_n^{\mathrm{sing}}(X_\alpha;G).$$ ([[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]])

## Proof

1.1 A once-punctured sphere is contractible by stereographic projection and linear contraction. In the pair sequence its positive homology vanishes. For $n>1$ the terms on both sides of the global-to-relative map vanish, giving an isomorphism. For $n=1$, the last map is $H_0(S^1\setminus\{x\})\to H_0(S^1)$, an isomorphism between the groups of two connected nonempty spaces; exactness gives the same conclusion. This proves the cyclic local group and fixes its generator as in F1. [F1, algebra]

1.2 Choose mutually disjoint small open coordinate balls $U_x$ around the finitely many points. Excision removes the closed set $S^n\setminus\bigcup U_x$, which is contained in the open complement of $F$. The relative chain complex of the disjoint balls splits into their direct sum, by the same simplex-by-component decomposition as F3. Excision in each ball then gives the displayed isomorphism. This argument includes a singleton $F$. [F1, F3]

2.1 The homomorphism induced by $(S^n,S^n\setminus F)\to(S^n,S^n\setminus\{x\})$ is projection onto the $x$ summand: all other summands factor through a pair $(U_z,U_z)$ and vanish. Its composite with the global map restricts the global class to its local generator. Hence the global tuple is diagonal. [F2, step 1.1, step 1.2]

3.1 For nested allowed neighborhoods, the inclusion of punctured pairs is an excision isomorphism and carries one restricted generator to the other. Their maps to the target pair commute. Thus their integer multipliers agree. Two arbitrary allowed neighborhoods have an allowed open intersection, so shrinking proves full independence. [F1, F2, step 1.1] ∎
