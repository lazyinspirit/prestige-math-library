---
id: lem-analytic-six-operation-support-and-trace-calculus
kind: lemma
title: Support localization, base change, projection and trace calculus
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 15
deps: [def-axiom-of-choice, def-c-soft-sheaf, def-compactly-supported-global-sections, def-derived-category-of-an-abelian-category, def-derived-hom-in-the-bounded-setting, def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces, def-direct-image-sheaf, def-extension-by-zero-abelian-sheaf, def-flasque-sheaf, def-inverse-image-presheaf-and-sheaf, def-proper-continuous-map, def-sheaf-cohomology-derived-global-sections, def-sheaf-hom, def-sheaf-on-topological-space, def-sheaf-tensor-product, def-support-of-a-sheaf-section, lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions, lem-c-soft-field-sheaves-are-compact-support-acyclic, lem-extension-by-zero-short-exact-sequence, lem-proper-continuous-map-stability, lem-sections-near-a-compact-set-are-sections-on-that-set, lem-sheaf-supported-on-a-closed-subset-is-a-pushforward, thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint, thm-extension-by-zero-adjunction-exactness, thm-inverse-direct-image-adjunction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Louis Verdier, Dualité dans la cohomologie des espaces localement compacts, Séminaire N. Bourbaki 1964–1966, exposé 300, pp. 337–349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
    - title: "The Stacks Project, Cohomology of Sheaves (chapter 20): §12 flasque sheaves, §16 cohomology on Hausdorff quasi-compact spaces, §17 the base change map, §18 proper base change in topology, §21 cohomology with support in a closed subset, §54 projection formula"
      url: "https://stacks.math.columbia.edu/download/cohomology.pdf"
---

## Statement

Under the preceding locally compact and finite-dimensional hypotheses, $u^*Rf_!\simeq Rf'_!v^*$ for Cartesian squares; proper maps have $Rf_!=Rf_*$, giving proper ordinary base change. Bounded tensor factors satisfy the projection formula. Proper-support direct images compose canonically. On the bounded constructible specialization proved by the subsequent local duality construction, exceptional adjoints also compose canonically; their units, counits and traces respect composition and Cartesian pasting. For a closed inclusion $i:Z\to X$ with complement $j$, $i^!$ is the derived functor of $i^{-1}\Gamma_Z$, and both localization triangles hold. Locally, $R\mathcal Hom(i_*k_Z,A)$ is $R\Gamma_ZA$. This lemma does not assume or claim extraordinary dual base change before constructible biduality.

## Facts & Assumptions

**Given:** AC; locally compact Hausdorff $X,Y$ with a continuous map $f:X\to Y$ satisfying the uniform all-fibre-open dimension bound $d$; the operations of [[def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces]]; a Cartesian square $X'\xrightarrow{v}X$ over $Y'\xrightarrow{u}Y$ with $f':X'\to Y'$; and the conventions of [[thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint]].

[F1] $f_!$ is a left exact sheaf functor with $(Rf_!A)_y\simeq R\Gamma_c(X_y,A|_{X_y})$, $Rf_!:D^b\to D^b$, and right adjoint candidate $f^!$ representing $\operatorname{Hom}(Rf_!A,B)\simeq\operatorname{Hom}(A,f^!B)$ for bounded $A$ and bounded-below $B$, with lower bound $\inf(B)-d$ ([[thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint]], [[def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces]]).

[F2] The ordinary operations: exactness of $f^*$, tensor–Hom adjunction and dg identities, flasque acyclicity, and bounded-below flasque complexes computing derived sections ([[lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions]], [[def-sheaf-hom]], [[def-sheaf-tensor-product]]).

[F3] $c$-soft sheaves are $H^q_c$-acyclic in positive degrees, injectives are $c$-soft, and $c$-softness is preserved by restriction to open and closed subsets, extension by zero and finite direct sums; small direct sums have the same property by the finite-coordinate compact-cover argument in the exceptional-adjoint supplier; sections over compact sets extend to compactly supported global sections supported in a prescribed neighbourhood ([[lem-c-soft-field-sheaves-are-compact-support-acyclic]], [[def-c-soft-sheaf]], [[def-compactly-supported-global-sections]]).

[F4] Proper $f$ satisfies $f_!=f_*$ and every support maps properly to the base; proper maps are stable under composition and base change; a proper map into a locally compact Hausdorff space is closed and has compact fibres ([[def-proper-continuous-map]], [[lem-proper-continuous-map-stability]]).

[F5] Extension by zero $j_!$ is exact and left adjoint to $j^{-1}$, and there is a short exact sequence $0\to j_!(\mathcal F|_U)\to\mathcal F\to i_*(\mathcal F|_Z)\to0$ for an open $U$ with closed complement $Z$; a sheaf whose stalks vanish off a closed subset $Z$ is the pushforward of its restriction to $Z$ ([[thm-extension-by-zero-adjunction-exactness]], [[def-extension-by-zero-abelian-sheaf]], [[lem-extension-by-zero-short-exact-sequence]], [[lem-sheaf-supported-on-a-closed-subset-is-a-pushforward]]).

[F6] Sections near a compact set glue: for compact $K$ the canonical map $\varinjlim_{U\supseteq K}\mathcal F(U)\to\Gamma(K,i^{-1}\mathcal F)$ is an isomorphism, and sections prescribed on finitely many pairwise disjoint compact sets and the zero section on another disjoint compact set glue over a neighbourhood ([[lem-sections-near-a-compact-set-are-sections-on-that-set]]).

[F7] Inverse and direct image: $(f^{-1}G)_x\cong G_{f(x)}$; $f^{-1}\dashv f_*$; a morphism is an isomorphism exactly when it is on stalks ([[def-inverse-image-presheaf-and-sheaf]], [[def-direct-image-sheaf]], [[thm-inverse-direct-image-adjunction]], [[def-sheaf-on-topological-space]], [[def-sheaf-cohomology-derived-global-sections]]).

[F8] Derived Hom is computed on bounded-below injective models with the cochain convention of [[def-derived-hom-in-the-bounded-setting]] and [[def-derived-category-of-an-abelian-category]]; flasque sheaves are acyclic ([[def-flasque-sheaf]]).

## Proof

**Proof technique:** direct.

1.1 Closed-support localization. Let $i:Z\hookrightarrow X$ be a closed inclusion with open complement $j$, and put $\Gamma_Z\mathcal F=\ker(\mathcal F\to j_*j^*\mathcal F)$. Its stalks vanish off $Z$ by [F7], so it is $i_*i^{-1}\Gamma_Z\mathcal F$ by [F5], and every map $i_*A\to\mathcal F$ lands in this kernel because $j^*i_*=0$; hence $i^!_0\mathcal F=i^{-1}\Gamma_Z\mathcal F$ is right adjoint to the exact functor $i_*$. It preserves injectives, so its derived functor is the right adjoint of $i_!$ on the derived level where the adjoint exists. The stalk-exact sequence of [F5] gives the first localization triangle $j_!j^*A\to A\to i_*i^*A\to j_!j^*A[1]$. For a flasque injective $I$ the map $I\to j_*j^*I$ is surjective on sections over every open set by [F8] and [F5] with kernel $\Gamma_ZI$, and $j^*$ preserves injectives because $j_!$ is exact; hence $i_*i^!A\to A\to Rj_*j^*A\to i_*i^!A[1]$ is the second localization triangle. Finally the tensor identity $H\otimes_k i_*k_Z=i_*i^*H$ holds by the stalk formula, and tensor–Hom transposition [F2] together with the closed adjunction gives $\operatorname{Hom}(H,R\mathcal Hom(i_*k_Z,A))\cong\operatorname{Hom}(i_*i^*H,A)\cong\operatorname{Hom}(H,i_*i^!A)$ locally on each open; hence $R\mathcal Hom(i_*k_Z,A)\cong R\Gamma_ZA$, the actual closed-support object used in the diagonal Thom calculation. [given, F2, F5, F7, F8]

1.2 Cartesian base change. In the Cartesian square, inverse image of an injective $I$ on $X$ restricts on every fibre of $f'$ to the restriction of $I$ on the canonically homeomorphic original fibre, so it is fibrewise $c$-soft by [F3] and $f'$-acyclic by [F1]; the section restriction map $u^*f_!I\to f'_!v^*I$ is an isomorphism on stalks by the fibre-stalk computation of [F1]. Applying this to an injective complex proves $u^*Rf_!\simeq Rf'_!v^*$. If $f$ is proper then $f'$ is proper by [F4], and using $f_!=f_*$ and $f'_!=f'_*$ this is ordinary proper base change $u^*Rf_*\simeq Rf'_*v^*$. These are the canonical restriction/exchange maps, not arbitrarily chosen isomorphisms. [given, F1, F3, F4]

1.3 Independent verification for proper maps. For proper $f$ the same identification can be checked through ordinary compactly supported cohomology: restriction of injectives to compact fibres is $c$-soft and $\Gamma$-acyclic by [F3], compact-neighbourhood sections are delivered by [F6], and preimage neighbourhoods are cofinal because $f$ is closed by [F4], with $V=Y\setminus f(X\setminus U)$ for an open $U$; this recovers the exchange as the canonical derived adjunction map of ordinary proper base change. [given, F3, F4, F6]

1.4 The projection formula. For bounded $A$ choose a bounded-below injective replacement $A\to I$. On each fibre $X_y$ the restriction $I|_{X_y}$ is $c$-soft by [F3], and $f^*B$ restricts to the constant complex $B_y$; tensoring with each term $B_y$ is a direct sum of copies of $I|_{X_y}$, hence $c$-soft by [F3], and $\Gamma_c(E\otimes_kV)=\Gamma_c(E)\otimes_kV$ because a compactly supported section has a finite local tensor presentation and a finite compact cover uses only finitely many coefficient vectors. This proves the canonical map $Rf_!A\otimes_kB\to Rf_!(A\otimes_kf^*B)$ is an isomorphism on stalks, since both sides compute the fibrewise compact-support cohomology of [F1]; the map is the adjoint of the tensor of the $f^*\dashv Rf_*$ counit with the identity, equivalently the sectionwise map $s\otimes b\mapsto s\otimes f^*b$, and the signed totalization of [F2] supplies the bounded-complex version. [given, F1, F2, F3]

1.5 Composition of proper-support direct images. The support definition gives $(gf)_!=g_!f_!$: a section whose support is proper over $Z$ has support proper over $Y$ because the inverse image of a compact $L\subseteq Y$ is a closed subset of the inverse image of the compact $g(L)$ by [F4], and conversely a support locally proper over $Y$ with proper image over $Z$ has compact preimages of compacta in $Z$. The support of $f_!s$ is $f(\operatorname{Supp}s)$ by the fibre-stalk identity [F1] and local properness, so the two descriptions are inverse. Direct images of globally $c$-soft sheaves by $f_!$ are $c$-soft: a section over a compact base set is represented on a neighbourhood by [F6], its total support over that compact set is compact by properness of the representing support, and enclosing it in a relatively compact $W$, the support-controlled $c$-soft extension of [F3] supported in $W$ pushes forward and extends the original section over the compact set. Thus $f_!$ sends injectives to $g_!$-acyclic sheaves, and applying the two ordinary support functors to an injective resolution gives the canonical derived composition $R(gf)_!=Rg_!Rf_!$; the same comparison proves associativity for triples, the section support bijection being literally associative. [given, F1, F3, F4, F6]

2.1 Exceptional composition and traces on the bounded constructible specialization. If the represented right adjoints preserve the bounded constructible subcategory, so that the Hom formula of [F1] is a full adjunction there, then exceptional composition $(gf)^!\simeq f^!g^!$ is the unique adjoint transpose of the composition isomorphism of step 1.5. The traces $\mathrm{tr}_f:Rf_!f^!\to\mathrm{id}$ are the counits constructed in [F1], and under the composition identification $\mathrm{tr}_{gf}=\mathrm{tr}_g\circ Rg_!(\mathrm{tr}_f)g^!$: both sides have the same transpose, namely the identity of $f^!g^!$, as is checked with the two triangle identities. Thus traces compose without a new axiom, and identity units and counits are identity transpositions. [given, F1, step 1.5]

3.1 Pasting coherence, and the boundary of the claim. The two composites of base-change maps in a pasted rectangle restrict a representative section to the same fibre section, hence agree before deriving, and resolution comparisons preserve that equality; projection formulas for composites both send pure tensors $s\otimes b$ to the same pullback tensor; projection/trace compatibility follows by transposition, both composites transposing to evaluation on $s\otimes b$ followed by the same counit. This proves the projection, base-change, unit and trace squares used in pull-push convolution, and the identities hold in the dg resolution model rather than being chosen independently on the triangulated level. The extraordinary proper exchange $u^!Rf_*\simeq Rf'_*v^!$ is not claimed here: it is not a right-adjoint mate of the ordinary base-change isomorphism and its proof needs the biduality result of the subsequent local duality construction, which therefore is not assumed. [given, F1, F2, step 1.2, step 1.4, step 2.1] ∎
