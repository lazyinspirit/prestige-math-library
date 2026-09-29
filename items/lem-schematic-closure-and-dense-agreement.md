---
id: lem-schematic-closure-and-dense-agreement
kind: lemma
title: "Schematic closure and agreement on a dense open"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-open-immersion-schemes
  - def-quasi-compact-and-quasi-separated-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-morphism-of-schemes
  - def-direct-image-sheaf
  - def-module-on-ringed-space
  - def-ideal-sheaf
  - def-scheme
  - def-affine-open-subscheme
  - def-prime-spectrum-and-vanishing-sets
  - def-principal-distinguished-subset-of-spectrum
  - def-noetherian-topological-space
  - def-localisation-of-a-module
  - def-module-homomorphism-kernel-image-and-cokernel
  - def-associated-sheaf-module-affine-scheme
  - def-quasi-coherent-module-scheme
  - def-closed-immersion-schemes
  - def-scheme-theoretic-image
  - def-separated-morphism-schemes
  - def-scheme-over-base
  - def-locally-ringed-space
  - def-local-ring
  - def-ring-homomorphism
  - def-integers
  - def-sheaf-on-topological-space
  - lem-distinguished-subset-identities
  - lem-spectrum-localization-open-immersion
  - lem-noetherian-subspaces-and-compact-opens
  - lem-associated-sheaf-sections-basic-open
  - lem-associated-sheaf-stalk-localization
  - lem-closed-immersion-affine-quotient-and-base-change
  - thm-noetherian-ring-has-noetherian-spectrum
  - thm-sections-basic-open-affine-scheme
  - thm-sheaf-equalizer-condition
  - thm-localisation-of-modules-is-exact
  - thm-localisation-of-modules-is-tensor-product
  - thm-associated-module-sheaf-exists
  - thm-prime-spectrum-of-a-quotient-bijection
  - thm-qc-ideal-closed-subscheme-correspondence-complete
  - thm-morphisms-into-affine-scheme-global-sections
  - cor-morphisms-equal-on-dense-open-reduced-source
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.6 (tag 01R5), Lemmas 29.6.1-29.6.3"
      url: https://stacks.math.columbia.edu/tag/01R5
    - title: "The Stacks Project, Schemes, Lemma 26.10.1 (tag 01IN)"
      url: https://stacks.math.columbia.edu/tag/01IN
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $j:U\to Y$ be a
quasi-compact open immersion of schemes ([[def-open-immersion-schemes]],
[[def-quasi-compact-and-quasi-separated-morphism]]) with $Y$ Noetherian
([[def-locally-noetherian-and-noetherian-scheme]]), and put
$$\mathcal K:=\ker\bigl(\mathcal O_Y\longrightarrow j_*\mathcal O_U\bigr),$$
the kernel of the induced map of structure sheaves. Then:

1. $\mathcal K$ is an ideal sheaf on $Y$ ([[def-ideal-sheaf]]) and
   quasi-coherent as an $\mathcal O_Y$-module
   ([[def-quasi-coherent-module-scheme]]);
2. the closed subscheme $Z=Z_{\mathcal K}$ determined by $\mathcal K$, whose
   underlying closed set is $V(\mathcal K)=\{y\in Y:\mathcal K_y\neq
   \mathcal O_{Y,y}\}$ and whose structure sheaf is
   $(\mathcal O_Y/\mathcal K)|_{V(\mathcal K)}$, is the schematic closure of
   $U$ in $Y$, that is, the scheme-theoretic image of $j$
   ([[def-scheme-theoretic-image]]): it is the smallest closed subscheme of $Y$
   through which $j$ factors, and $j$ factors as $j=i\circ j'$ with
   $j':U\to Z$ an open immersion and $i:Z\to Y$ the closed immersion;
3. $U$ is schematically dense in $Z$, meaning that
   $\mathcal O_Z\to j'_*\mathcal O_U$ is injective;
4. if $T$ is a separated scheme ([[def-separated-morphism-schemes]]) and
   $a,b:Z\to T$ are morphisms with $a\circ j'=b\circ j'$, then $a=b$.

Since every open subset of a Noetherian scheme is quasi-compact, the
quasi-compactness hypothesis on $j$ is automatic under the Noetherian
hypothesis on $Y$; it is retained from the statement. The empty cases
$U=\varnothing$ and $Y=\varnothing$ are included.

## Facts & Assumptions
**Given:** AC; a quasi-compact open immersion $j:U\to Y$ with $Y$ Noetherian;
the kernel $\mathcal K=\ker(\mathcal O_Y\to j_*\mathcal O_U)$ of the induced map
of structure sheaves.

[F1] A morphism of schemes $f:X\to Y$ induces a map of structure sheaves
$f^\sharp:\mathcal O_Y\to f_*\mathcal O_X$; direct images satisfy
$(f_*\mathcal F)(W)=\mathcal F(f^{-1}W)$; the kernel of a morphism of sheaves of
modules is a subsheaf of modules, and a subsheaf $\mathcal I\subseteq\mathcal
O_Y$ that is an ideal in every section ring is an ideal sheaf. An open
immersion identifies $U$ with an open subscheme of $Y$, so $\mathcal O_U$ is
the restriction $\mathcal O_Y|_U$.
([[def-morphism-of-schemes]], [[def-direct-image-sheaf]],
[[def-module-on-ringed-space]], [[def-ideal-sheaf]],
[[def-open-immersion-schemes]], [[def-scheme]])

[F2] The underlying space of a Noetherian scheme is a Noetherian topological
space, and for a Noetherian ring $A$ the spectrum $\operatorname{Spec}A$ is
Noetherian; under AC every subspace of a Noetherian space is compact and the
intersection of two compact open subsets is compact.
([[def-locally-noetherian-and-noetherian-scheme]],
[[thm-noetherian-ring-has-noetherian-spectrum]],
[[def-noetherian-topological-space]],
[[lem-noetherian-subspaces-and-compact-opens]], [[def-axiom-of-choice]])

[F3] On an affine scheme $V=\operatorname{Spec}A$ one has
$\Gamma(D(f),\mathcal O)=A_f$; the distinguished opens $D(f)$ are affine and
equal to $\operatorname{Spec}A_f$, they form a basis of the topology, and
$D(fg)=D(f)\cap D(g)$; the sheaf axiom for the structure sheaf on an open cover
$W=\bigcup_iW_i$ presents $\mathcal O(W)$ as the equalizer of the restriction
maps into $\prod_i\mathcal O(W_i)$, so a section is determined by its
restrictions to the members of a cover.
([[thm-sections-basic-open-affine-scheme]],
[[lem-spectrum-localization-open-immersion]], [[def-affine-open-subscheme]],
[[def-prime-spectrum-and-vanishing-sets]],
[[def-principal-distinguished-subset-of-spectrum]],
[[lem-distinguished-subset-identities]], [[thm-sheaf-equalizer-condition]],
[[def-sheaf-on-topological-space]])

[F4] Localisation of modules is exact, $(M_f)_g\cong M_{fg}\cong M_f\otimes_A
A_g$, and for an ideal $J\subseteq A$ the localisation $J_g$ is the ideal generated by the image of
$J$ in $A_g$; a kernel of a module map localises to the kernel of the localised
map. ([[thm-localisation-of-modules-is-exact]],
[[thm-localisation-of-modules-is-tensor-product]],
[[def-localisation-of-a-module]],
[[def-module-homomorphism-kernel-image-and-cokernel]])

[F5] For an $A$-module $M$ the associated sheaf $\widetilde M$ on
$\operatorname{Spec}A$ exists (AC inherited), is a sheaf of $\mathcal
O$-modules with $\widetilde M(D(f))=M_f$ and restriction maps the localisation
maps, has stalk $\widetilde M_{\mathfrak p}=M_{\mathfrak p}$ at a prime
$\mathfrak p$, and a morphism out of $\widetilde M$ is determined by its
components on distinguished opens.
([[def-associated-sheaf-module-affine-scheme]],
[[thm-associated-module-sheaf-exists]],
[[lem-associated-sheaf-sections-basic-open]],
[[lem-associated-sheaf-stalk-localization]], [[def-axiom-of-choice]])

[F6] An $\mathcal O_X$-module $\mathcal F$ is quasi-coherent when every point
of $X$ has an affine open neighbourhood $U=\operatorname{Spec}A$ with
$\mathcal F|_U\cong\widetilde M$ for some $A$-module $M$.
([[def-quasi-coherent-module-scheme]])

[F7] **Batch-7 supplier (exact statement used).** Assume AC. For a scheme $X$
the assignment $\mathcal I\mapsto Z_{\mathcal I}=(V(\mathcal I),(\mathcal
O_X/\mathcal I)|_{V(\mathcal I)})$ with $V(\mathcal I)=\{x\in X:\mathcal I_x\neq
\mathcal O_{X,x}\}$ and the assignment $i\mapsto\ker(\mathcal O_X\to
i_*\mathcal O_Z)$ are mutually inverse bijections between quasi-coherent ideal
sheaves on $X$ and closed subschemes of $X$; in particular $Z_{\mathcal I}$ is
a closed subscheme with kernel $\mathcal I$, and $\mathcal O_X\to i_*\mathcal
O_Z$ is surjective with kernel $\ker(\mathcal O_X\to i_*\mathcal O_Z)$. This
supplier is a completed in-run item of batch 7; its statement is used here
in steps 5.1, 6.1, 7.1 and 7.2.
([[thm-qc-ideal-closed-subscheme-correspondence-complete]])

[F8] For a closed immersion $i:Z\to Y$ and an affine open $V=\operatorname{Spec}
A$ of $Y$ there is a unique ideal $I\subseteq A$ with
$i^{-1}(V)\cong\operatorname{Spec}(A/I)$ over $V$, and conversely every
quotient map $A\to A/I$ induces a closed immersion
$\operatorname{Spec}(A/I)\to\operatorname{Spec}A$; a closed immersion is a
homeomorphism onto a closed subset with surjective structure map, and the
underlying set of $\operatorname{Spec}(A/I)$ is $V(I)$.
([[lem-closed-immersion-affine-quotient-and-base-change]],
[[def-closed-immersion-schemes]], [[thm-prime-spectrum-of-a-quotient-bijection]])

[F9] Assume AC. If $T\to S$ is a separated morphism, $X$ is an $S$-scheme,
$j:U\to X$ is an open subscheme with $\mathcal O_X\to j_*\mathcal O_U$
injective, and $a,b:X\to T$ are $S$-morphisms with $a|_U=b|_U$, then $a=b$.
([[cor-morphisms-equal-on-dense-open-reduced-source]])

[F10] Morphisms $X\to\operatorname{Spec}\mathbb Z$ correspond bijectively to
unital ring homomorphisms $\mathbb Z\to\Gamma(X,\mathcal O_X)$; since a ring
homomorphism is additive and sends $1$ to $1$, and every integer is a finite
sum of copies of $\pm1$, there is exactly one such homomorphism, so every
scheme is a $\operatorname{Spec}\mathbb Z$-scheme in exactly one way. A scheme
$T$ is separated precisely when its structure morphism
$T\to\operatorname{Spec}\mathbb Z$ is separated. The stalk
$\mathcal O_{Y,y}$ of a scheme at a point is a local ring, and a local ring is
a nonzero commutative ring.
([[thm-morphisms-into-affine-scheme-global-sections]],
[[def-ring-homomorphism]], [[def-integers]], [[def-scheme-over-base]],
[[def-separated-morphism-schemes]], [[def-locally-ringed-space]],
[[def-local-ring]], [[def-scheme]])

[F11] The scheme-theoretic image of a morphism $f:X\to Y$ is, when it exists,
the smallest closed subscheme of $Y$ through which $f$ factors.
([[def-scheme-theoretic-image]])

**AC use:** AC is declared in the statement and used exactly through [F2]
(extracting the finite principal subcover in step 1.2), [F5] (existence of
associated module sheaves), [F7] and [F8] (the closed-subscheme construction,
inherited from the batch-7 and batch-5 suppliers) and [F9] (the agreement
criterion); the localisation computation of steps 2.1-3.1 uses no choice.



## Proof

**Proof technique:** direct: on an affine open $V=\operatorname{Spec}A$ cover $U\cap V$ by finitely many distinguished opens, identify $\mathcal K(V)$ with the kernel of $A\to\prod_iA_{f_i}$, localise this exact sequence to obtain $\mathcal K(D(g))=\mathcal K(V)_g$, and conclude that $\mathcal K|_V$ is the associated sheaf of the ideal $\mathcal K(V)$; the closed subscheme determined by this quasi-coherent ideal is the schematic closure, and the affine models exhibit $U\to Z$ as an open immersion with $\mathcal O_Z\to j'_*\mathcal O_U$ injective, so that the agreement criterion applies.

1.1 For an open $W\subseteq Y$ the map $\mathcal K(W)\to\mathcal O_Y(W)$ identifies $\mathcal K(W)$ with the set of sections $s\in\mathcal O_Y(W)$ satisfying $s|_{U\cap W}=0$, because $(j_*\mathcal O_U)(W)=\mathcal O_U(U\cap W)=\mathcal O_Y(U\cap W)$ and the map is the restriction; hence $\mathcal K$ is an ideal sheaf on $Y$, and $\mathcal K|_U=0$ because for $W\subseteq U$ the restriction $\mathcal O_Y(W)\to\mathcal O_Y(W\cap U)=\mathcal O_Y(W)$ is the identity. [F1]

1.2 The scheme $Y$ has Noetherian underlying space by [F2], so every subspace of $Y$ is compact; for an affine open $V=\operatorname{Spec}A\subseteq Y$ the set $U\cap V$ is therefore compact, and since the distinguished opens contained in the open set $U\cap V$ form an open cover of it by [F3], compactness yields finitely many $f_1,\dots,f_r\in A$ with $U\cap V=D(f_1)\cup\dots\cup D(f_r)$, the empty family $r=0$ being allowed when $U\cap V=\varnothing$. [F2, F3]

2.1 By the sheaf axiom [F3] the restriction map $\Gamma(U\cap V,\mathcal O)\to\prod_{i=1}^rA_{f_i}$ is injective, being the first map of an equalizer diagram, and the composite $A\to\Gamma(U\cap V,\mathcal O)\to\prod_iA_{f_i}$ is the product of the localisation maps $A\to A_{f_i}$; therefore $\mathcal K(V)=\ker(A\to\Gamma(U\cap V,\mathcal O))=\ker\bigl(A\to\prod_{i=1}^rA_{f_i}\bigr)$, the empty product being the zero ring and $\Gamma(\varnothing,\mathcal O)=0$. [F3, step 1.2]

3.1 Let $g\in A$. Since $U\cap D(g)=(U\cap V)\cap D(g)$ is covered by the distinguished opens $D(gf_i)=D(g)\cap D(f_i)$ of the affine scheme $D(g)=\operatorname{Spec}A_g$, step 2.1 applied to the affine open $D(g)$ gives $\mathcal K(D(g))=\ker\bigl(A_g\to\prod_{i=1}^rA_{gf_i}\bigr)$; because localisation is exact and $(A_{f_i})_g\cong A_{gf_i}$ by [F4], localising the exact sequence $0\to\mathcal K(V)\to A\to\prod_iA_{f_i}$ at $g$ identifies this kernel with the localisation $\mathcal K(V)_g\subseteq A_g$. Hence $\mathcal K(D(g))=\mathcal K(V)_g$ for every $g\in A$. [F3, F4, step 1.2, step 2.1]

4.1 The sheaf $\mathcal K|_V$ equals the associated sheaf $\widetilde{\mathcal K(V)}$: both are subsheaves of $\mathcal O_V$, and by step 3.1 and [F5] they have the same sections on every distinguished open $D(g)\subseteq V$, namely $\mathcal K(V)_g$, with the restriction maps induced by those of $\mathcal O_V$; since the distinguished opens form a basis of $V$ and membership in a subsheaf of $\mathcal O_V$ is tested on a cover, an open section $s\in\mathcal O_V(W)$ lies in $\mathcal K(W)$ if and only if all its restrictions to distinguished opens inside $W$ lie in the corresponding $\mathcal K(V)_g$, which is exactly the condition that $s$ lies in $\widetilde{\mathcal K(V)}(W)$; hence $\mathcal K|_V=\widetilde{\mathcal K(V)}$. As every point of $Y$ has such an affine neighbourhood $V$, the ideal sheaf $\mathcal K$ is quasi-coherent in the sense of [F6]. [F3, F5, F6, step 1.1, step 3.1]

5.1 By step 4.1 and [F6] the sheaf $\mathcal K$ is a quasi-coherent ideal sheaf, so the correspondence [F7] applies: $Z:=Z_{\mathcal K}=(V(\mathcal K),(\mathcal O_Y/\mathcal K)|_{V(\mathcal K)})$ is a closed subscheme $i:Z\to Y$ with $\ker(\mathcal O_Y\to i_*\mathcal O_Z)=\mathcal K$ and underlying closed set $V(\mathcal K)=\{y:\mathcal K_y\neq\mathcal O_{Y,y}\}$; moreover, on an affine open $V=\operatorname{Spec}A\subseteq Y$, the unique ideal of [F8] describing the closed immersion $i^{-1}(V)\to V$ is $\mathcal K(V)$, because it is the kernel of $A\to i_*\mathcal O_Z(V)=\mathcal O_Z(Z\cap V)$ by [F1], so $Z\cap V$ is $\operatorname{Spec}(A/\mathcal K(V))$ over $V$, with underlying set $V(\mathcal K(V))$. [F1, F7, F8, step 4.1]

6.1 For $y\in U$ step 1.1 gives $\mathcal K_y=0$, and $\mathcal O_{Y,y}$ is a nonzero local ring by [F10], so $\mathcal K_y\neq\mathcal O_{Y,y}$ and $y\in V(\mathcal K)=|Z|$; thus $U\subseteq|Z|$ as subsets of $Y$. Moreover $\mathcal O_Z|_U=(\mathcal O_Y/\mathcal K)|_{V(\mathcal K)}|_U=(\mathcal O_Y/\mathcal K)|_U=\mathcal O_U$, because restriction of a quotient is the quotient of the restrictions, $\mathcal K|_U=0$ and $\mathcal O_Y|_U=\mathcal O_U$ by [F1]; consequently the open subspace of the scheme $Z$ on the open subset $U\subseteq|Z|$ is the scheme $U$ itself, and the inclusion $j':U\to Z$ is an open immersion with $i\circ j'=j$ and $j'$ inducing the identity on structure sheaves over $U$. [F1, F7, F8, F10, step 1.1, step 5.1]

7.1 To see that $\mathcal O_Z\to j'_*\mathcal O_U$ is injective, let $V=\operatorname{Spec}A\subseteq Y$ be affine; by step 5.1 the open $Z\cap V$ is $\operatorname{Spec}(A/\mathcal K(V))$, so $\mathcal O_Z(Z\cap V)=A/\mathcal K(V)$, the associated sheaf $(A/\mathcal K(V))^{\sim}$ having support $V(\mathcal K(V))=Z\cap V$ and hence the same sections over $Z\cap V$ as over $V$; also $j'_*\mathcal O_U(Z\cap V)=\mathcal O_U(U\cap(Z\cap V))=\mathcal O_U(U\cap V)$ because $U\subseteq|Z|$ by step 6.1. Under these identifications the map is the ring map $A/\mathcal K(V)\to\Gamma(U\cap V,\mathcal O)$ induced by the restriction $A\to\Gamma(U\cap V,\mathcal O)$, which is injective because that restriction has kernel $\mathcal K(V)$ by step 2.1. Since the affine opens $Z\cap V$ cover $Z$ and injectivity of a morphism of sheaves is local on a cover, $\mathcal O_Z\to j'_*\mathcal O_U$ is injective. [F3, F5, F8, step 2.1, step 5.1, step 6.1]

7.2 The subscheme $Z$ is the smallest closed subscheme of $Y$ through which $j$ factors: suppose $i':Z'\to Y$ is a closed subscheme and $j=i'\circ s'$ for a morphism $s':U\to Z'$; then the induced map $\mathcal O_Y\to j_*\mathcal O_U$ factors through the surjection $\mathcal O_Y\to i'_*\mathcal O_{Z'}$, so $\mathcal K':=\ker(\mathcal O_Y\to i'_*\mathcal O_{Z'})\subseteq\mathcal K$, hence $V(\mathcal K)\subseteq V(\mathcal K')$; on an affine open $V=\operatorname{Spec}A$ the two closed subschemes are $Z\cap V=\operatorname{Spec}(A/\mathcal K(V))$ and $Z'\cap V=\operatorname{Spec}(A/\mathcal K'(V))$ with $\mathcal K'(V)\subseteq\mathcal K(V)$ by step 5.1, so the quotient map $A/\mathcal K'(V)\to A/\mathcal K(V)$ defines a closed immersion $Z\cap V\to Z'\cap V$ over $V$, and these maps agree on overlaps because both are the canonical quotient maps attached to the restricted ideals, so they glue to a morphism $Z\to Z'$ over $Y$; therefore every closed subscheme of $Y$ through which $j$ factors receives a morphism from $Z$, and, together with $j=i\circ j'$ from step 6.1, the closed subscheme $Z$ is the scheme-theoretic image of $j$ by [F11], that is, its schematic closure. [F7, F8, F11, step 1.1, step 5.1, step 6.1]

8.1 Finally let $T$ be a separated scheme and let $a,b:Z\to T$ be morphisms with $a\circ j'=b\circ j'$. By [F10] every scheme has a unique morphism to $\operatorname{Spec}\mathbb Z$, so $Z$ and $T$ are $\operatorname{Spec}\mathbb Z$-schemes, $a$ and $b$ are $\operatorname{Spec}\mathbb Z$-morphisms, and the structure morphism $T\to\operatorname{Spec}\mathbb Z$ is separated because the scheme $T$ is separated; since $\mathcal O_Z\to j'_*\mathcal O_U$ is injective by step 7.1 and $a,b$ agree on $U$, the agreement criterion [F9] gives $a=b$. [F9, F10, step 7.1] ∎
