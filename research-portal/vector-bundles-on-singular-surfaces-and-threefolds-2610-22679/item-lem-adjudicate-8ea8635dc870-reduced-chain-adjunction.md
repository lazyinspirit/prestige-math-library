---
title: Reduced free-chain adjunction for local derived Eilenberg targets
status: draft
research_item: lem-adjudicate-8ea8635dc870-reduced-chain-adjunction
dependency_level: 11
---

## Prerequisites

- [thm-adjudicate-8ea8635dc870-local-linear-model-input](item-thm-adjudicate-8ea8635dc870-local-linear-model-input)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [math:def-canonical-truncation-of-a-complex](https://alphabetamath.cc/item/def-canonical-truncation-of-a-complex)
- [math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology](https://alphabetamath.cc/item/lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible site and universe bounds of the local models. On a fixed small site $\mathcal C$, use the local injective simplicial-sheaf model and the transported additive chain model. A pointed simplicial sheaf $S$ has a specified map $*\to S$; maps preserve it. Define its reduced free abelian sheaf degreewise by $\widetilde{\mathbb Z}_{\rm sh}[S]=\operatorname{coker}(\mathbb Z_{\rm sh}[*]\to\mathbb Z_{\rm sh}[S])$. Its normalized cochain complex is $\widetilde C(S)^{-r}=N_r\widetilde{\mathbb Z}_{\rm sh}[S]$ for $r\geq0$, zero in positive degrees, with differential $(-1)^rd_r$. Define $C(S)$ in the same way using unreduced free abelian sheaves. These are sheaf complexes; their cohomology is sheafified local integral homology.

Let $D$ be any unbounded cochain complex of abelian sheaves on this same site and $n\in\mathbb Z$. Use $D[n]^r=D^{r+n}$ with differential $(-1)^nd_D$. Put $E=\tau^{\leq0}(D[n])$: it equals $D[n]$ below degree zero, has $\ker(d^0_{D[n]})$ in degree zero, and vanishes above zero. Choose a fibrant replacement $E\to I$ in the transported nonpositive-cochain model, and define $K(D,n)=u\Gamma I$, pointed by zero. This specifies the local derived Eilenberg target, including for unbounded coefficients; its local equivalence class is independent of the replacements and of quasi-isomorphic coefficient representatives.

Write $\operatorname{RMap}_*$ for derived pointed mapping spaces in the local sheaf model and $\operatorname{RMap}_{\leq0}$ for the derived function complex of the transported nonpositive-cochain model. There is a natural equivalence
$$\operatorname{RMap}_*(S,K(D,n))\simeq\operatorname{RMap}_{\leq0}(\widetilde C(S),\tau^{\leq0}(D[n])).$$
Thus a quasi-isomorphism of reduced sheaf chains induces an equivalence of these mapping spaces. The pointed splitting $C(S)\cong\mathbb Z_{\rm sh}[*][0]\oplus\widetilde C(S)$ is natural in pointed $S$; consequently an unreduced local integral-chain quasi-isomorphism is also a reduced one.

## Statement references
[thm-adjudicate-8ea8635dc870-local-linear-model-input](item-thm-adjudicate-8ea8635dc870-local-linear-model-input)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

[math:def-canonical-truncation-of-a-complex](https://alphabetamath.cc/item/def-canonical-truncation-of-a-complex)

[math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology](https://alphabetamath.cc/item/lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible universes. Choice is inherited by the model factorizations and fibrant replacements at steps 1.1–2.1, not needed for the explicit finite splitting formulas.

[F1] [thm-adjudicate-8ea8635dc870-local-linear-model-input](item-thm-adjudicate-8ea8635dc870-local-linear-model-input) supplies the local simplicial and additive models, simplicial free/forgetful Quillen adjunction, exact sheafification and transported normalization. In its simplicial models, the mapping-corner axiom makes derived function complexes invariant under weak equivalences.

[F2] [def-derived-sections-on-sites](item-def-derived-sections-on-sites) fixes abelian sheaves, cochain complexes and quasi-isomorphisms. The good truncation is [math:def-canonical-truncation-of-a-complex](https://alphabetamath.cc/item/def-canonical-truncation-of-a-complex); [math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology](https://alphabetamath.cc/item/lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology) proves its functoriality and preservation of quasi-isomorphisms.

## Proof
**Given:** The fixed site, local models, pointed $S$, complex $D$, integer $n$, Choice and compatible bounds.

**Goal:** Construct the pointed derived adjunction and the comparison with unreduced chains.

1.1 The category of objects $*\to S$ inherits the local simplicial model: underlying factorizations acquire their basepoints by composition, and the lifts in pointed lifting squares preserve the specified basepoints. Every pointed $S$ is cofibrant because $*\to S$ is a monomorphism. Additive maps from the quotient $\widetilde{\mathbb Z}_{\rm sh}[S]$ to $A$ are precisely pointed maps $S\to uA$. The right adjoint $u_*$ preserves fibrations and trivial fibrations by [F1], so this reduced-free/pointed-forgetful adjunction is Quillen. It is simplicial: the same quotient universal property identifies maps out of the pointed tensor $S\wedge\Delta[q]_+$, the sheaf quotient of the sheafified product $S\times\Delta[q]$ with its basepoint copy collapsed, with additive maps out of $\widetilde{\mathbb Z}_{\rm sh}[S]\otimes\mathbb Z[\Delta[q]]$, in every simplicial degree. The augmentation sends every free generator to $1$ and is split by the given basepoint. Its kernel identifies with the quotient by that basepoint via the explicit mutually inverse maps $[s]\bmod[*]\mapsto[s]-[*]$ and the quotient projection restricted to the kernel. Thus the unreduced simplicial abelian sheaf splits naturally as the basepoint summand plus the reduced one. Normalization and exact sheafification preserve this splitting and compute the stated local homology sheaves; a pointed chain map is identity on the basepoint summand. An unreduced quasi-isomorphism therefore induces a reduced quasi-isomorphism. [A1, F1, F2, construct]

2.1 Set $E=\tau^{\leq0}(D[n])$ and take $E\to I$ as stated. The good-truncation result [F2] ensures that changing $D$ by a quasi-isomorphism changes $E$ by one. By [F1], $\Gamma I$ is fibrant in the additive model and $u\Gamma I$ is fibrant in the pointed local model. Step 1.1 makes $\widetilde{\mathbb Z}_{\rm sh}[S]$ cofibrant, hence its normalization is cofibrant in the transported model. Applying the strict simplicial adjunction to these cofibrant and fibrant representatives, and then the normalization equivalence, identifies their actual function complexes. They compute exactly the two displayed derived mapping spaces. Replacement invariance in [F1] gives independence of $I$, naturality in the localized coefficient and source objects, and invariance under quasi-isomorphisms of reduced chains. This proves the full mapping-space assertion, rather than only a bijection on components. [A1, F1, F2, step 1.1] ∎
