---
id: lem-pointed-odd-barnatan-tensor-product-over-marked-rings
kind: lemma
title: Pointed odd and Bar–Natan tensor products over the marked rings
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-odd-khovanov-barnatan-and-leo-triple
  - lem-odd-cube-oriented-face-parity-and-sign-existence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Dunfield, Lipshitz and Schütz, Local equivalence and refinements of Rasmussen's s-invariant
      url: https://arxiv.org/pdf/2312.09114v3
      locator: Lemma 2.6 and Theorem 2.10; the marked integral exterior signs are expanded here
    - title: Ozsváth, Rasmussen and Szabó, Odd Khovanov homology
      url: https://arxiv.org/pdf/0710.4300
      locator: Section 4, reduced exterior subalgebra
dependency_level: 2
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let two finite based knot diagrams be joined along their marked arcs in a planar pointed connected-sum diagram, without new crossings. Use odd edge assignments realizing the full prescribed face products, including the zero-composite faces. The odd complexes admit a normalized bigraded right $\mathbb A=\mathbb Z[X]/(X^2)$-linear chain isomorphism
$$ C_o(D_1)\otimes_{\mathbb A}C_o(D_2)\{-1\}\ \cong\ C_o(D_1\#D_2), $$
and the Bar–Natan complexes admit the corresponding marked $\mathbb R=\mathbb Z[h,X]/(X^2-hX)$-linear chain isomorphism. In the odd case the induced signs realize the full prescribed face products, so admissible sign comparison applies, including zero-composite faces. The two isomorphisms agree after reduction modulo $2$ and $(2,h)$ under the statewise comparison. Their construction is finite and choice-free.

## Statement references

[[def-odd-khovanov-barnatan-and-leo-triple|Marked complexes and coefficient rings]]

[[lem-odd-cube-oriented-face-parity-and-sign-existence|Full admissible face products and sign comparison]]

[Dunfield–Lipshitz–Schütz, Lemma 2.6 and Theorem 2.10](https://arxiv.org/pdf/2312.09114v3)

## Facts & Assumptions

**Given:** Two marked diagrams and their planar connected-sum joining strip, with full prescribed odd face signs and all first-diagram crossings ordered before all second-diagram crossings.

[F1] The odd merge is an exterior quotient, the split is multiplication by a difference on the left, and the right marked action appends the marked generator ([[def-odd-khovanov-barnatan-and-leo-triple]]).

[F2] Full face prescriptions and their vertex-sign comparisons are available, including the zero-face coefficient ([[lem-odd-cube-oriented-face-parity-and-sign-existence]]).

[F3] The Bar–Natan multiplication, comultiplication and marked action satisfy the displayed Frobenius identities ([[def-odd-khovanov-barnatan-and-leo-triple]]).

## Proof

**Given:** The hypotheses of the Statement.

1.1 **A right-linear reduced decomposition.** At each state let $V$ be the circle group, $Z$ its marked generator, and $U=\ker(\operatorname{aug}:V\to\mathbb Z)$, where every circle has augmentation one. The vectors $Y_j=Z_j-Z$ for unmarked circles are a basis of $U$, and $V=U\oplus\mathbb ZZ$. Thus $\Lambda V=\Lambda U\otimes\mathbb A$ as a right module, by $u\otimes1\mapsto u$, $u\otimes X\mapsto u\wedge Z$. A merge preserves augmentation and takes the marked generator to the marked generator. For a split choose the lift of its old marked generator to the new marked generator; if the marked circle is unaffected this is the usual lift. This lift also preserves augmentation, and the split difference belongs to $U$ in the target. Hence in these coordinates every edge acts as its reduced exterior quotient or split on $\Lambda U$, tensored with the identity of $\mathbb A$. This is an equality of maps on both $u$ and $u\wedge Z$, not merely an unmarked abelian-group splitting. [F1, algebra, construct]

2.1 **The map and its exact signs.** For a vertex $v_j$ set $\sigma_j(v_j)=(k_j(v_j)-k_j(0)+|v_j|)/2$. A merge leaves $\sigma_j$ fixed and a split increases it by one. At a joined state the reduced difference group is $U_1\oplus U_2$, by sending every $Z_i-Z_j^{\mathrm{mark}}$ to its difference from the merged marked generator. For $u_j\in\Lambda^{r_j}U_j$ and $a_j\in\mathbb A$, define $\Phi((u_1\otimes a_1)\otimes(u_2\otimes a_2))=(-1)^{r_1\sigma_2(v_2)}(u_1\wedge u_2)\otimes a_1a_2$. The degree $r_1$ here is the reduced exterior degree and excludes the marked $X$-factor. The formula is balanced and right $\mathbb A$-linear because its sign is independent of $a_1,a_2$. Its reduced wedge basis times $1,X$ is exactly the joined basis, so it is bijective. Conjugating the tensor differential gives the following coefficients relative to the joined unsigned saddles: $\epsilon_1$ for a first-diagram merge, $(-1)^{\sigma_2}\epsilon_1$ for a first-diagram split, and $(-1)^{i(v_1)}\epsilon_2$ for either second-diagram saddle. For the last assertion, a second split increases $\sigma_2$ by one, contributing $(-1)^{r_1}$; moving its left split difference past $u_1$ contributes the same sign, and the two cancel. The remaining sign is the tensor cochain sign. A first split increases $r_1$ by one and supplies precisely $(-1)^{\sigma_2}$. Merges preserve reduced exterior degree. These equations prove that $\Phi$ is a chain isomorphism for the induced signs. [F1, step 1.1, algebra, construct]

3.1 **The induced signs are fully admissible.** A two-face within one diagram has the same geometric coefficient as that diagram's face: insertion of the other marked arc and its passive circles changes neither the cyclic order of its saddle endpoints nor the oriented inside/outside test. On a first-diagram face the additional sign in step 2.1 has boundary exponent $\sigma_2$ times the sum of the split counts in its two paths. The counts agree, since each equals $(k_{\mathrm{out}}-k_{\mathrm{in}}+2)/2$, so this exponent is even. On a second-diagram face the common extra sign $(-1)^{i(v_1)}$ occurs four times. Thus all internal face products are unchanged. For a mixed face let $b_j$ be its saddle's split indicator. The joining strip separates the two saddle disks by a two-edge cut. Their unsigned maps commute except for the interchange of two reduced split factors, giving $\kappa=(-1)^{b_1b_2}$; no alternating-endpoint zero face occurs across that cut. The induced coefficient product is $(-1)^{1+b_1b_2}$: changing a first coordinate changes $i(v_1)$ by one, while a second split changes the first split's factor $(-1)^{\sigma_2}$ by $(-1)^{b_1b_2}$. This is exactly $-\kappa$. Hence all prescribed faces, including the internal zero faces, have their required products. By [F2], any other admissible realization is related to this one by a marked vertex-sign isomorphism. [F1, F2, step 2.1, algebra]

4.1 **The Bar–Natan map, gradings and reduction.** At a state multiply the two marked circle factors, leave every unmarked circle factor unchanged, and multiply by $(-1)^{n_-^{(1)}|v_2|}$. Balanced tensoring over $\mathbb R$ identifies its basis with the joined state basis, so this is an isomorphism. Associativity and the Frobenius identity in [F3] show that the unsigned multiplication commutes with every saddle. For first-diagram edges the added vertex sign is unchanged. For second-diagram edges it changes by $(-1)^{n_-^{(1)}}$, converting the tensor cochain sign $(-1)^{i(v_1)}$ into the joined cube sign $(-1)^{|v_1|}$, since $i(v_1)=|v_1|-n_-^{(1)}$. This proves the signed chain equation. Both maps identify two marked circles with one, so their quantum degree before the displayed shift is $-1$. Crossing counts and $n_+,n_-$ add, giving the stated normalized homological and quantum degrees. In characteristic two the odd sign in step 2.1 is one, $Y_j$ corresponds to the even label operator $X_j+X_{\mathrm{mark}}$, and the merged marked generator corresponds to $X_{\mathrm{mark}}$. Thus the reduced wedge product times $a_1a_2$ is exactly the even state-label identification obtained by marked multiplication. Both theories therefore induce the same comparison square after the required quotients. This proves all assertions. [F1, F3, step 1.1, step 2.1, step 3.1, algebra, construct] ∎
