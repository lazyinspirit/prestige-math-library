---
id: thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes
kind: theorem
title: "Signed KLR algebra is the equivariant Ext algebra of quiver-flag complexes"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 30
deps: [def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators,
       thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product,
       thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations,
       thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis,
       thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution,
       def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Varagnolo, E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992; complete 30-page article retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "V. Ginzburg (notes by V. Baranovsky), Geometric methods in the representation theory of Hecke algebras and quantum groups, arXiv:math/9802004; complete 57-page lecture notes retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/math/9802004"
    - title: "R. Rouquier, Quiver Hecke algebras and 2-Lie algebras, arXiv:1112.3619; complete 48-page article retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/1112.3619"
---

## Statement

Assume the Axiom of Choice as inherited. Let $\Gamma$, $\beta$ and $k$ be as in
[[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]]. There is a unique
graded $k$-algebra isomorphism
$$S_\Gamma(\beta)\xrightarrow{\ \sim\ }\operatorname{Ext}_G^\bullet\Bigl(\bigoplus_\nu\pi_{\nu!}k[d_\nu],\bigoplus_\nu\pi_{\nu!}k[d_\nu]\Bigr)$$
sending $e_\nu$, $x_r$, $\tau_r$ to the diagonal, Chern and normalized elementary classes of
[[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]], where the Ext
algebra carries the shifted multiplication $a*b=b[n]\circ a$ for homogeneous $a$ of degree $n$.
On the $(\eta,\nu)$ component, Ext degree $n$ corresponds to BM degree $d_\eta+d_\nu-n$. No
semisimplicity, purity, decomposition or finiteness hypothesis on $E$ or on the $Z_{\eta,\nu}$
is required.

## Facts & Assumptions

**Given:** the Axiom of Choice; a characteristic-zero field $k$; a finite loopless quiver
$\Gamma$, a dimension vector $\beta$ and a word $\nu$ as in
[[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]]; the objects
$L_\nu=\pi_{\nu!}k[d_\nu]$ on $E$, the incidence varieties $Z_{\eta,\nu}$, and the intrinsic
signed presentation $S_\Gamma(\beta)$ with its generators $e_\nu,x_r,\tau_r$.

[F1] Assume AC. [[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]]
fixes the corner identification $e_\eta\mathfrak Ae_\nu=\operatorname{Ext}_G(L_\eta,L_\nu)$
with the opposite-composition product $a*b=b[n]\circ a$, the degree dictionary Ext degree $n$
$\leftrightarrow$ BM degree $d_\eta+d_\nu-n$, and the geometric generators and presentation
relations.

[F2] Assume AC. [[thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations]]
shows that the assignment $e_\nu\mapsto e_\nu$, $x_r\mapsto x_r$, $\tau_r\mapsto\tau_r$ respects
every defining relation of $S_\Gamma(\beta)$ and defines a graded $k$-algebra homomorphism
$S_\Gamma(\beta)\to\mathfrak A$.

[F3] Assume AC. [[thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis]]
exhibits the elements $x_1^{c_1}\cdots x_m^{c_m}\tau_we_\nu$, for one fixed reduced expression of
every $w\in S_m$, as a $k$-basis of $\mathfrak A$, and shows that the dots and elementary
crossings generate $\mathfrak A$.

[F4] Assume AC. [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]]
supplies, for nearly arbitrary proper equivariant maps with smooth sources, the natural
cornerwise isomorphisms $\Phi_{ij}^r:\operatorname{Hom}(L_i,L_j[r])\to H^{\mathrm{BM},G}_{d_i+d_j-r}(Z_{ij};k)$,
compatible with Borel approximation.

[F5] Assume AC. [[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]]
identifies the shifted composition product with the convolution product:
$\Phi_{ik}^{r+s}(\beta[r]\circ\alpha)=\Phi_{ij}^r(\alpha)*\Phi_{jk}^s(\beta)$, with the
right-hand product the external-product, refined middle-diagonal Thom intersection and proper
pushforward of [[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]], not a
product transported by definition from Ext.

[A1] The Axiom of Choice is consumed exactly through [F1]–[F5], whose constructions declare it
for injective resolutions, equivariant descent and duality; the finite symmetric-group sorting
and reduction arguments below are choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [F2] the assignment on generators respects every defining relation of the presentation of [F1], hence induces a graded $k$-algebra homomorphism $\Phi:S_\Gamma(\beta)\to\mathfrak A$. The generators generate $S_\Gamma(\beta)$ by definition of a free presentation, so any two graded algebra homomorphisms agreeing on $e_\nu,x_r,\tau_r$ agree everywhere; this is the asserted uniqueness. [F1, F2, given]

2.1 By [F3] the elements $x_1^{c_1}\cdots x_m^{c_m}\tau_we_\nu$ form a $k$-basis of $\mathfrak A$, and each of them is the image under $\Phi$ of the corresponding product of generators and dots in $S_\Gamma(\beta)$; hence $\Phi$ is surjective. [F3, step 1.1]

3.1 The relations of $S_\Gamma(\beta)$ reduce every element to a $k$-linear combination of normal forms $x_1^{c_1}\cdots x_m^{c_m}\tau_we_\nu$: the mixed and slide relations move dots to the left of crossings, each such correction removing or shortening a crossing, and a nonreduced adjacent transposition word can be transformed by far and braid moves into one containing an adjacent repeated reflection, whose square relation removes the two crossings, while braid corrections carry strictly fewer crossings. Equivalently, adjacent sorting reduces every word: move the largest letter to its final position and induct on the remaining letters, the two possible sorting moves either acting on disjoint positions and commuting or differing on three positions by the braid relation. Hence $S_\Gamma(\beta)$ is spanned by the finitely many normal forms attached to one fixed reduced expression per $w$, and by [F3] their images under the surjection $\Phi$ of step 2.1 are linearly independent; therefore $\Phi$ is injective. No comparison with an external KLR presentation is used. [F1, F3, step 2.1]

4.1 By [F4] the corner $\operatorname{Ext}_G^n(L_\eta,L_\nu)$ is naturally identified with the Borel–Moore group $H^{\mathrm{BM},G}_{d_\eta+d_\nu-n}(Z_{\eta,\nu};k)$; by [F5] this identification carries the shifted composition product $a*b=b[n]\circ a$ to the geometric convolution product of [F1], and the direct sum of the corner identifications is an isomorphism of unital graded algebras, the diagonal class corresponding to $\operatorname{id}_{L_\nu}$ and nonmatching corners multiplying to zero. In particular all computations of [F3], which were performed with the convolution product, are statements about the shifted Ext algebra, so the isomorphism produced in steps 1.1–3.1 is an isomorphism of graded algebras. No semismallness, purity, decomposition-theorem or finiteness hypothesis is used: [F4] and [F5] are stated for nearly arbitrary proper equivariant maps with smooth sources on arbitrary fiber products. [F1, F4, F5, step 3.1]

5.1 Combining steps 1.1–4.1, the map $\Phi$ is a bijective graded $k$-algebra homomorphism from $S_\Gamma(\beta)$ to $\operatorname{Ext}_G^\bullet(\bigoplus_\nu L_\nu,\bigoplus_\nu L_\nu)$ with the shifted product, sending the intrinsic generators to the diagonal, Chern and normalized elementary classes, and it is unique with this property by step 1.1. The Axiom of Choice entered only through [A1]. [A1, step 1.1, step 4.1] ∎
