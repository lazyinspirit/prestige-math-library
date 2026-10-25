---
id: thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes
kind: theorem
title: "Signed KLR algebra is the equivariant Ext algebra of quiver-flag complexes"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 30
deps: [def-equivariant-borel-moore-homology-and-correspondence-convolution,
       def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators,
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
  statement: ai-altered
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
semisimplicity, purity or decomposition theorem is used, and finite-dimensionality of the
total Ext algebra is not assumed.

## Facts & Assumptions

**Given:** the Axiom of Choice; a characteristic-zero field $k$; a finite loopless quiver $\Gamma$, a dimension vector $\beta$ and a word $\nu$ as in [[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]]; the objects $L_\nu=\pi_{\nu!}k[d_\nu]$ on $E$, the incidence varieties $Z_{\eta,\nu}$, and the intrinsic signed presentation $S_\Gamma(\beta)$ with its generators $e_\nu,x_r,\tau_r$.

[F1] Assume AC. [[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]] fixes the corner identification $e_\eta\mathfrak Ae_\nu=\operatorname{Ext}_G(L_\eta,L_\nu)$ with the opposite-composition product $a*b=b[n]\circ a$, the degree dictionary Ext degree $n$ $\leftrightarrow$ BM degree $d_\eta+d_\nu-n$, and the geometric generators and presentation relations.

[F2] Assume AC. [[thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations]] shows that the assignment $e_\nu\mapsto e_\nu$, $x_r\mapsto x_r$, $\tau_r\mapsto\tau_r$ respects every defining relation of $S_\Gamma(\beta)$ and defines a graded $k$-algebra homomorphism $S_\Gamma(\beta)\to\mathfrak A$.

[F3] Assume AC. [[thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis]] exhibits the elements $x_1^{c_1}\cdots x_m^{c_m}\tau_we_\nu$, for one fixed reduced expression of every $w\in S_m$, as a $k$-basis of $\mathfrak A$, and shows that the word idempotents, dots and elementary crossings generate $\mathfrak A$.

[F4] Assume AC. [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] supplies, for proper equivariant maps between the stated finite-type complex varieties with smooth pure-dimensional sources, the natural cornerwise isomorphisms $\Phi_{ij}^r:\operatorname{Hom}(L_i,L_j[r])\to H^{\mathrm{BM},G}_{d_i+d_j-r}(Z_{ij};k)$, compatible with Borel approximation.

[F5] Assume AC. [[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]] identifies the shifted composition product with the convolution product: $\Phi_{ik}^{r+s}(\beta[r]\circ\alpha)=\Phi_{ij}^r(\alpha)*\Phi_{jk}^s(\beta)$, with the right-hand product the external-product, refined middle-diagonal Thom intersection and proper pushforward of [[def-equivariant-borel-moore-homology-and-correspondence-convolution]], not a product transported by definition from Ext.

[A1] The Axiom of Choice is consumed exactly through [F1]–[F5], whose constructions declare it for injective resolutions, equivariant descent and duality; the finite symmetric-group sorting and reduction arguments below are choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [F2] the assignment on generators respects every defining relation of the presentation of [F1], hence induces a graded $k$-algebra homomorphism $\Phi:S_\Gamma(\beta)\to\mathfrak A$. The generators generate $S_\Gamma(\beta)$ by definition of a free presentation, so any two graded algebra homomorphisms agreeing on $e_\nu,x_r,\tau_r$ agree everywhere; this is the asserted uniqueness. [F1, F2, given]

1.2 We establish the needed adjacent-transposition word reduction explicitly. Put $t_j=s_{m-1}\cdots s_j$ for $1\le j<m$, and $t_m=1$. Every permutation has a unique canonical expression $q t_j$, where $q$ fixes $m$ and $j$ is the position sent to $m$. Inductively choose the same expression for $q$ in $S_{m-1}$. Right multiplication by $s_i$ is absorbed using $t_js_i=s_it_j$ if $i<j-1$, $t_js_{j-1}=t_{j-1}$, $t_js_j=t_{j+1}$, and $t_js_i=s_{i-1}t_j$ if $i>j$. The first formula commutes disjoint letters; the second appends one letter; the third cancels the final equal pair; the fourth follows by commuting $s_i$ left until a single braid move changes $s_is_{i-1}s_i$ to $s_{i-1}s_is_{i-1}$, then commuting $s_{i-1}$ past higher-index letters. For $t_m=1$ the generator lies in $S_{m-1}$ or equals $t_{m-1}$. Recursively absorbing the resulting left generator into $q$ converts any word into its canonical expression using only braid moves and adjacent-pair removals, never increasing length. The canonical length is the inversion number: $t_j$ contributes the $m-j$ inversions involving $m$, and $q$ contributes exactly the inversions on the remaining entries. Every word has at least that length because a swap changes inversion number by one. Therefore reduced words normalize using braid moves alone and any nonreduced word exposes a removable equal pair during normalization. Two reduced words for the same permutation are braid-connected through their common canonical word. The cases $m=0,1$ have only the empty expression. [given, algebra, construct]

2.1 By [F3] the elements $x_1^{c_1}\cdots x_m^{c_m}\tau_we_\nu$ form a $k$-basis of $\mathfrak A$, and each of them is the image under $\Phi$ of the corresponding product of generators and dots in $S_\Gamma(\beta)$; hence $\Phi$ is surjective. [F3, step 1.1]

3.1 Filter the presentation by crossing number. Move dots left using its mixed and slide relations, inducting first on crossing number and then on dot/crossing inversions; correction terms have fewer crossings. For a nonreduced crossing word the normalization in step 1.2 exposes an adjacent repeated reflection, whose square relation removes two crossings. For a reduced word the same step connects it to the chosen reduced expression. Lift each braid move to the signed presentation: its additional polynomial correction has fewer crossings and is handled by induction. Hence the presentation is spanned by $x^c\tau_we_\nu$, with finitely many crossing words and arbitrary nonnegative dot powers. Their images under $\Phi$ are linearly independent by [F3], so any finite linear combination in the kernel has zero coefficients. This proves injectivity. [F1, F3, step 2.1, step 1.2, algebra]

4.1 By [F4] the corner $\operatorname{Ext}_G^n(L_\eta,L_\nu)$ is naturally identified with the Borel–Moore group $H^{\mathrm{BM},G}_{d_\eta+d_\nu-n}(Z_{\eta,\nu};k)$; by [F5] this identification carries the shifted composition product $a*b=b[n]\circ a$ to the geometric convolution product of [F1], and the direct sum of the corner identifications is an isomorphism of unital graded algebras, the diagonal class corresponding to $\operatorname{id}_{L_\nu}$ and nonmatching corners multiplying to zero. In particular all computations of [F3], which were performed with the convolution product, are statements about the shifted Ext algebra, so the isomorphism produced in steps 1.1–3.1 is an isomorphism of graded algebras. No semismallness, purity or decomposition theorem is used, and finite-dimensionality of the total Ext algebra is not assumed: [F4] and [F5] apply to the given proper maps with smooth sources without requiring smooth fiber products. [F1, F4, F5, step 3.1]

5.1 Combining steps 1.1–4.1, the map $\Phi$ is a bijective graded $k$-algebra homomorphism from $S_\Gamma(\beta)$ to $\operatorname{Ext}_G^\bullet(\bigoplus_\nu L_\nu,\bigoplus_\nu L_\nu)$ with the shifted product, sending the intrinsic generators to the diagonal, Chern and normalized elementary classes, and it is unique with this property by step 1.1. The Axiom of Choice entered only through [A1]. [A1, step 1.1, step 4.1] ∎
