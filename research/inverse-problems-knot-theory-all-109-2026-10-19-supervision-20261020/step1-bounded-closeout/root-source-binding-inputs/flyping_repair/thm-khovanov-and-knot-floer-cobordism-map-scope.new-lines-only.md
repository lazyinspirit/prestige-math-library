<!-- new lines at canonical 21 -->
  proof: ai-altered

<!-- new lines at canonical 55 -->
## Facts & Assumptions

<!-- new lines at canonical 57 -->
[F1] The retained even integral Khovanov functor gives the indicated bigraded groups and cobordism maps up to one overall sign, with boundary-fixed isotopy invariance and composition after quotienting by sign. This locally resolved result is reused unchanged. ([[thm-barnatan-khovanov-cobordism-functoriality-up-to-sign]])

[F2] The decorated Floer map construction and naturality lemma give the two-color filtered $\mathbb F_2[U,V]$-equivariant maps, with one Spin-c label and the extension-sum composition law. Their explicitly external inputs are Zemke's Theorems A and B, arXiv:1610.05207v3, pp.3 and 85–98, at the full divided-surface, parametrized-boundary and colored-chain-complex scope; their explicit finite/countable-choice specialization is retained, and no full-Choice theorem is silently substituted for the stated hypothesis. Neither the hat-only Juhasz construction nor the graph reduction is being asserted to construct this two-variable functor. ([[def-knot-floer-cobordism-map]], [[lem-knot-floer-cobordism-naturality-and-movie-invariance]], [source](https://arxiv.org/pdf/1610.05207v3))

## Proof

1.1 Apply [F1] to the smooth oriented surface. Its target is ordinary even integral $Kh^{i,j}$, and identifying a map with its negative removes exactly the one sign ambiguity. Its isotopy and composition conclusions are the first assertion of the Statement. [F1, given, apply]

1.2 For the separately decorated surface apply [F2], coloring all w-regions by $U$ and z-regions by $V$. The intermediate multiply based link modules and their endpoint naturality identifications are part of that construction. Zero curvature makes the endpoint objects the specified complexes, and external Theorem A gives filtered equivariant chain-homotopy invariance. This assertion has coefficient field $\mathbb F_2$ and its own decoration and Spin-c data; no integral Khovanov sign ambiguity or comparison between the two theories is transferred to it. [F2, given, specialize]

1.3 The general composition law is the extension sum in [F2]. On $S^3\times[0,1]$ the Spin-c set has one element, so composition has one term. Combining the two independently established assignments proves the entire Statement with its distinct targets, coefficients and equivalence relations. It asserts neither equality of the functors nor a canonical chain-level top generator, and requires no new local reconstruction of the imported Cerf checks. [F1, F2, step 1.1, step 1.2, conclude] ∎

