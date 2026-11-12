---
id: lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard
kind: lemma
title: The EM weight-one Picard normalization is positive identity
status: published
domain: mathematics
deps:
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - lem-author-16f30f6b95cb-lowweight-zero-projection-rank
  - math:def-axiom-of-choice
  - lem-adjudicate-fd6358d333ef-spectrum-lifts-to-discrete-target
  - math:cor-contravariant-yoneda-lemma
  - math:thm-morphisms-into-affine-scheme-global-sections
  - math:def-ag-standard-smooth-algebra
  - math:thm-ag-standard-smooth-geometric-regularity
  - math:def-smooth-morphism-schemes
  - math:def-field
  - lem-nisnevich-line-bundle-torsors
  - math:def-grothendieck-universe-closure-convention
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:cor-affine-scheme-quasi-compact
  - def-motivic-filtration
  - lem-filtered-stage-exact-sequence
  - lem-eilenberg-maclane-shift-index
  - def-derived-sections-on-sites
dependency_roles:
  thm-author-16f30f6b95cb-lowweight-em-map-normalizations: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-determinant-one-type-input: mathematical-premise
  lem-author-16f30f6b95cb-lowweight-zero-projection-rank: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-adjudicate-fd6358d333ef-spectrum-lifts-to-discrete-target: mathematical-premise
  math:cor-contravariant-yoneda-lemma: mathematical-premise
  math:thm-morphisms-into-affine-scheme-global-sections: mathematical-premise
  math:def-ag-standard-smooth-algebra: mathematical-premise
  math:thm-ag-standard-smooth-geometric-regularity: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-field: mathematical-premise
  lem-nisnevich-line-bundle-torsors: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 19
formulation_deps:
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - lem-adjudicate-fd6358d333ef-spectrum-lifts-to-discrete-target
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-field
  - lem-nisnevich-line-bundle-torsors
  - def-motivic-filtration
  - def-derived-sections-on-sites
argument_deps:
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - lem-author-16f30f6b95cb-lowweight-zero-projection-rank
  - math:def-axiom-of-choice
  - lem-adjudicate-fd6358d333ef-spectrum-lifts-to-discrete-target
  - math:cor-contravariant-yoneda-lemma
  - math:thm-morphisms-into-affine-scheme-global-sections
  - math:def-ag-standard-smooth-algebra
  - math:thm-ag-standard-smooth-geometric-regularity
  - math:def-smooth-morphism-schemes
  - math:def-field
  - lem-nisnevich-line-bundle-torsors
  - math:def-grothendieck-universe-closure-convention
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:cor-affine-scheme-quasi-compact
  - def-motivic-filtration
  - lem-filtered-stage-exact-sequence
  - lem-eilenberg-maclane-shift-index
  - def-derived-sections-on-sites
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

On Sm_k for any field k, write S=Ω∞Fil¹K and identify Ω∞gr¹K with $BG_m$ by the canonical EM c₁ comparison. Let κ:$BG_m$→S lift L↦[L]−1. Then the based map q₁κ:$BG_m$→$BG_m$ is identity as a map of Nisnevich stacks, hence on both the Picard classes and their automorphism units. This identifies the sign of the actual projection and not merely its target group.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated universe and site-size bounds. They are inherited when applying the determinant/one-type input in [F2], the motivic tower, derived evaluation and spectral indexing in [F3], the lift-space helper in [F4], and the standard-smooth, affine quasi-compactness and torsor inputs in [F5] and [F6] at steps 1.1–1.2. Use the nested universes $U\in V\in W$, $\omega\in U$, and scheme/site bounds of [F2], with closure as in [[math:def-grothendieck-universe-closure-convention]]; their existence is separately assumed. The stack comparison is on a universe-bounded smooth big Nisnevich site. For the weight-zero derived evaluation in [F3], use the same bounded general cdh site of qcqs prime-field schemes as the EM comparison in [F1], small in the larger universe, and evaluate at each represented smooth finite-type $k$-scheme. Apply the derived-sections interface to this site itself; do not replace it by a finite-type cdh site or a small Nisnevich site. Frame torsors use the compatible small Nisnevich sites of [F6]. The Laurent-unit calculation and the integer sign test add no further choice principle.

**Given:** The normalized maps and the field hypothesis in the Statement. Maps and homotopies involving raw $K$ or its filtration stages are taken in pointed coherent presheaves of spaces on the bounded category $\mathrm{Sm}_k$. The source $B\mathbb G_m$ and the discrete target identified in [F3] are Nisnevich sheaves; the final endomorphism of $B\mathbb G_m$ is a map of Nisnevich stacks. Assume Choice and the universe and site-size bounds in [A1].

**Goal:** Identify the chosen lift with the normalized lift, then prove the identity on the whole line-bundle stack.

[F1] [[thm-author-16f30f6b95cb-lowweight-em-map-normalizations]] supplies the particular pointed lift $a$ of $L\mapsto 1-[L]$, the canonical identification $\Omega^\infty\operatorname{gr}^1K\simeq B\mathbb G_m$, and $q_1(-a)(\mathcal O(-1))=c_1(\mathcal O(-1))$. It also fixes $\operatorname{Pic}(\mathbb P^1_k)=\mathbb Z$ with generator $c_1(\mathcal O(1))$. This fact does not assert that an arbitrary lift is $-a$.

[F2] [[thm-author-16f30f6b95cb-lowweight-determinant-one-type-input]] supplies the fully faithful classification of pointed connected one-types by sheaves of groups. In particular pointed maps $B\mathbb G_m\to B\mathbb G_m$ correspond to sheaf-group endomorphisms of $\mathbb G_m$. Nisnevich sheaves form the full subcategory of presheaves satisfying descent: between two sheaves the mapping space, including pointed homotopies, is the presheaf mapping space. Apply this classification only to the resulting endomorphism of $B\mathbb G_m$.

[F3] [[lem-author-16f30f6b95cb-lowweight-zero-projection-rank]] identifies the actual $q_0$ with rank on smooth finite-type schemes over any field. [[def-motivic-filtration]] supplies the actual coherent decreasing EM tower restricted from the prime field, with $\operatorname{Fil}^0K=K$; here the field is the arbitrary field $k$ in the Statement. Its Facts [F2] and Proof 1.1 at stage zero, in [[lem-filtered-stage-exact-sequence]], supply the natural spectral fiber sequence $\operatorname{Fil}^1K\to K\xrightarrow{q_0}\operatorname{gr}^0K$, retaining its coherent zero composite. For every smooth finite-type $X/k$, [F1] supplies the canonical equivalence of its last term with the Eilenberg–Mac Lane realization of $C_X=R\Gamma_{\mathrm{cdh}}(X,\mathbb Z)$. On precisely the bounded cdh site in [A1], [[def-derived-sections-on-sites]] defines this derived evaluation and gives $H^n_{\mathrm{cdh}}(X,\mathbb Z)=0$ for every $n<0$, because $\mathbb Z$ is an ordinary abelian sheaf placed in degree zero. [[lem-eilenberg-maclane-shift-index]] then gives $\pi_i\operatorname{gr}^0K(X)=H^{-i}_{\mathrm{cdh}}(X,\mathbb Z)$ for every integer $i$. Thus all positive homotopy groups of its zeroth space vanish, while its component group is the locally constant integer functions by [F1]. These natural identifications make $\Omega^\infty\operatorname{gr}^0K$ the discrete locally constant integer sheaf. No concentration of the entire derived-sections complex in degree zero, or comparison of cdh and Nisnevich sites, is asserted.

[F4] [[lem-adjudicate-fd6358d333ef-spectrum-lifts-to-discrete-target]] proves that $\Omega^\infty$ preserves the defining spectral fiber and that pointed mapping spaces carry it to a homotopy pullback. For a fixed pointed $f$ with nullhomotopic composite into a zero-truncated target, its full space of lifts, including homotopies over $f$, is contractible. Here use $\mathcal X=\operatorname{Fun}(N(\mathrm{Sm}_k)^{\mathrm{op}},\mathcal S)$, where $N(\mathrm{Sm}_k)$ is the nerve of the bounded smooth-scheme category and $\mathcal S$ is the category of spaces in the compatible universes. Thus objects are coherent space-valued presheaves, rather than presheaves assumed to satisfy descent. The finite-limit and spectral-object hypotheses for this application are verified in step 1.1.

[F5] A field has the axioms of [[math:def-field]]. Write $k[t,t^{-1}]$ for finite sums $\sum_i a_it^i$ with $i\in\mathbb Z$, multiplied by $t^it^j=t^{i+j}$; equivalently it is $k[t,s]/(ts-1)$ with $s=t^{-1}$. [[math:thm-morphisms-into-affine-scheme-global-sections]] supplies the natural correspondence between morphisms to an affine scheme and ring maps into global sections. [[math:def-ag-standard-smooth-algebra]] and [[math:thm-ag-standard-smooth-geometric-regularity]] supply the Jacobian presentation criterion for smoothness in [[math:def-smooth-morphism-schemes]]. Here $\mathrm{Sm}_k$ denotes smooth finite-type $k$-schemes, with all $k$-morphisms; finite type has the meaning of [[math:def-locally-finite-type-and-finite-type-morphism]]. Under [A1], [[math:cor-affine-scheme-quasi-compact]] supplies quasi-compactness of an affine spectrum. [[math:cor-contravariant-yoneda-lemma]] supplies evaluation at the identity, including its inverse formula, for natural transformations from a represented presheaf. Apply it in the fixed universe-bounded category of smooth $k$-schemes.

[F6] [[lem-nisnevich-line-bundle-torsors]] supplies $\mathbb G_m(U)=\Gamma(U,\mathcal O_U)^\times$, the frame-torsor identification of line bundles, effective descent from their transition units, and the tensor-product Picard group law on the compatible small Nisnevich sites. Thus the stack notation in [F2] retains frame isomorphisms. Define $L^{\otimes 0}=\mathcal O$ and negative tensor powers using the dual line.

## Proof
1.1 Put $T=\Omega^\infty\operatorname{gr}^0K$ and $f:B\mathbb G_m\to\Omega^\infty K$, $L\mapsto[L]-1$. For every smooth finite-type $X/k$ and every $i>0$, the comparison, indexing and negative-degree vanishing in [F3] give $\pi_iT(X)=\pi_i\operatorname{gr}^0K(X)=H^{-i}_{\mathrm{cdh}}(X,\mathbb Z)=0$. The component identification in [F1] and [F3] is natural in $X$, so $T$ is the discrete locally constant integer sheaf. Work in the presheaf infinity-category $\mathcal X$ of [F4]. Its terminal object is the constant point. For presheaf maps $A\to C\leftarrow B$, form at each test scheme the space of triples consisting of an element of $A$, an element of $B$, and a path between their images in $C$, with restriction maps induced by those of $A,B,C$. A coherent map from any presheaf into this construction is precisely a pair of maps into $A,B$ with a coherent homotopy between their composites into $C$; this is the pullback mapping-space universal property. Hence these pointwise pullbacks and the terminal object give finite limits in $\mathcal X$. Its mapping spaces are small in the chosen larger universe by [A1]. Currying a spectral presheaf gives a reduced excisive functor from finite pointed spaces to $\mathcal X$: reduction and the required pullback squares can both be checked at each test scheme by the pointwise construction. Thus the supplied coherent spectral presheaves are spectrum objects in the sense of [F4]. The actual tower and stage-zero fiber sequence in [F3] meet the spectral fiber hypothesis of [F4]. Finally, a map into a presheaf of discrete spaces is a compatible assignment of component maps; its higher homotopies, if they exist, are unique. Consequently its mapping spaces are discrete, so $T$ is zero-truncated in $\mathcal X$. The rank identification in [F3] makes $q_0f$ the zero map, since every line bundle has rank one. Apply [F4] in $\mathcal X$, with source $B\mathbb G_m$. It identifies $S$ with the fiber over zero of $\Omega^\infty K\to T$, and identifies the space of coherent natural lifts of this fixed $f$, including homotopies over $f$, with the paths from $q_0f$ to zero in $\operatorname{Map}_*(B\mathbb G_m,T)$. Since the two endpoints agree, the lift space is contractible. The later comparison of maps from $B\mathbb G_m$ to itself is also a comparison of sheaf maps by the full-subcategory observation in [F2]. [F1, F2, F3, F4, given, A1]

1.2 By [F2], $q_1\kappa$ corresponds to a sheaf-group endomorphism $h:\mathbb G_m\to\mathbb G_m$. Put $R=k[t,s]/(ts-1)=k[t,t^{-1}]$. The derivative of $ts-1$ with respect to $s$ is the unit $t$ in $R$, so the finite presentation and standard-smooth criterion in [F5] make $G=\operatorname{Spec}R$ smooth over $k$. This affine scheme is quasi-compact by [F5]; the displayed finite generation of $R$ over $k$ gives local finite type, hence finite type by the definition in [F5]. Thus $G$ is an object of $\mathrm{Sm}_k$. The affine-target correspondence in [F5] identifies $k$-morphisms $U\to G$ with units of $\Gamma(U,\mathcal O_U)$: a ring map sends $t$ to a unit $u$ and $s$ necessarily to $u^{-1}$, and each unit defines exactly that map. The base-$k$ condition says that the ring map restricts to the given structure map on $k$. Thus $G$ represents the underlying sheaf in [F6] on $\mathrm{Sm}_k$. By the contravariant Yoneda bijection in [F5], $h$ is determined by $h_G(t)\in R^\times$. Every unit of $R$ is $bt^n$ for $b\in k^\times$ and $n\in\mathbb Z$: for two nonzero finite Laurent sums the largest and smallest exponents of their product are the sums of the respective extreme exponents, because products of nonzero field coefficients are nonzero. Their widths are nonnegative and additive, so a product equal to one forces both widths to be zero. Evaluation at the identity $t=1$ and preservation of the group identity give $b=1$. Yoneda's inverse formula now gives $h_U(u)=u^n$ for every $U$ and every unit $u$, without assuming $k$ infinite. For local frames $e_j=g_{ij}e_i$ of a line bundle, the pushforward torsor has transitions $h(g_{ij})=g_{ij}^n$. These are precisely the transitions of $L^{\otimes n}$, with dual powers when $n<0$; frame descent and the tensor law in [F6] identify the resulting line bundle with that tensor power. This proves the power-map assertion on Picard classes while [F2] retains the entire pointed stack map. [F2, F5, F6, given, A1]

2.1 Inversion in the infinite loop space sends the particular lift $a$ in [F1] to a pointed lift $-a$ of $f$. Both the specified $\kappa$ and $-a$ are thus lifts of the same fixed map. By step 1.1 they agree up to pointed homotopy over $\Omega^\infty K$. Consequently the normalized evaluation from [F1] applies to $q_1\kappa$, giving $q_1\kappa(\mathcal O(-1))=c_1(\mathcal O(-1))$. [F1, step 1.1]

3.1 Apply step 1.2 to $\mathcal O(-1)$ on $\mathbb P^1_k$. Step 2.1 says its image is $\mathcal O(-1)$, while step 1.2 gives $\mathcal O(-n)$. The specified infinite cyclic Picard group in [F1] therefore forces $n=1$. Full faithfulness in [F2] identifies the whole pointed stack map $q_1\kappa$ with the identity, including its action $u\mapsto u$ on automorphism units. The sign is inherited from the actual normalized projection $1-[\mathcal O(-1)]\mapsto+c_1(\mathcal O(1))$, rather than chosen through a new target identification. [F1, F2, step 2.1, step 1.2] ∎
