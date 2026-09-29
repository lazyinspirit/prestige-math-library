---
id: lem-tensor-qc-modules-quasi-coherent
kind: lemma
title: Tensor product preserves quasi-coherence
status: draft
origin: pipeline
deps:
  - def-sheaf-tensor-product
  - thm-quasi-coherence-check-affine-cover
  - thm-affine-quasi-coherent-equivalence
  - def-quasi-coherent-module-scheme
  - def-associated-sheaf-module-affine-scheme
  - lem-associated-sheaf-restriction-affine-open
  - lem-associated-sheaf-stalk-localization
  - lem-stalk-tensor-product
  - thm-localisation-of-modules-is-tensor-product
  - thm-associativity-of-balanced-tensor-products
  - thm-sheaf-morphism-isomorphism-stalkwise
  - lem-spectrum-localization-open-immersion
  - def-scheme
  - def-affine-scheme-spectrum
  - def-sheaf-on-topological-space
  - def-module-on-ringed-space
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Cohomology of Schemes §30.9"
      url: "https://stacks.math.columbia.edu/tag/01XY"
    - title: "The Stacks Project, Properties of Schemes, §§28.20, 28.26"
      url: "https://stacks.math.columbia.edu/download/properties.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice, inherited from the affine equivalence
([[def-axiom-of-choice]]). Let $X$ be a scheme
([[def-scheme]]) and let $\mathcal F,\mathcal G$ be quasi-coherent
$\mathcal O_X$-modules ([[def-quasi-coherent-module-scheme]]), with tensor
product $\mathcal F\otimes_{\mathcal O_X}\mathcal G$
([[def-sheaf-tensor-product]]).

Then $\mathcal F\otimes_{\mathcal O_X}\mathcal G$ is quasi-coherent. More
precisely, if $U=\operatorname{Spec}A\subseteq X$ is affine and
$\mathcal F|_U\cong\widetilde M$, $\mathcal G|_U\cong\widetilde N$ for
$A$-modules $M,N$ ([[def-associated-sheaf-module-affine-scheme]]), then there
is a canonical isomorphism of $\mathcal O_U$-modules
$$(\mathcal F\otimes_{\mathcal O_X}\mathcal G)|_U\;\cong\;\widetilde{(M\otimes_AN)},$$
the associated sheaf on $U$ of the tensor product $M\otimes_AN$.

## Facts & Assumptions

**Given:** A scheme $X$; quasi-coherent $\mathcal O_X$-modules
$\mathcal F,\mathcal G$; in the affine situation an affine open
$U=\operatorname{Spec}A\subseteq X$ with isomorphisms
$\mathcal F|_U\cong\widetilde M$, $\mathcal G|_U\cong\widetilde N$ for
$A$-modules $M,N$.

[F1] The tensor product of sheaves of modules is the sheafification of the
presheaf $U\mapsto\mathcal F(U)\otimes_{\mathcal O_X(U)}\mathcal G(U)$
([[def-sheaf-tensor-product]]); restriction to an open $U$ is compatible with
the construction, $(\mathcal F\otimes_{\mathcal O_X}\mathcal G)|_U\cong
\mathcal F|_U\otimes_{\mathcal O_U}\mathcal G|_U$, and a morphism of
$\mathcal O_X$-modules is determined by a compatible family of module maps on a
basis of the topology
([[def-module-on-ringed-space]], [[def-sheaf-on-topological-space]]).

[F2] Stalks: $(\mathcal F\otimes_{\mathcal O_X}\mathcal G)_x\cong
\mathcal F_x\otimes_{\mathcal O_{X,x}}\mathcal G_x$
([[lem-stalk-tensor-product]]), and on an affine scheme the stalk of
$\widetilde M$ at $\mathfrak p$ is $M_{\mathfrak p}$
([[lem-associated-sheaf-stalk-localization]]).

[F3] Localisation is tensor product: $M_{\mathfrak p}\cong
A_{\mathfrak p}\otimes_AM$ for an $A$-module $M$
([[thm-localisation-of-modules-is-tensor-product]]), and tensor products of
modules are associative, so $\otimes$ may be regrouped; consequently
$$(M\otimes_AN)_{\mathfrak p}\cong M_{\mathfrak p}\otimes_{A_{\mathfrak p}} N_{\mathfrak p}$$
([[thm-associativity-of-balanced-tensor-products]]).

[F4] Quasi-coherence over an affine cover: an $\mathcal O_X$-module
$\mathcal H$ is quasi-coherent if and only if there is an affine open cover
$X=\bigcup_iU_i$ with every $\mathcal H|_{U_i}$ isomorphic to some
$\widetilde{M_i}$
([[thm-quasi-coherence-check-affine-cover]],
[[def-quasi-coherent-module-scheme]]); on an affine scheme a quasi-coherent
module is canonically $\widetilde{\Gamma(U,\mathcal H)}$
([[thm-affine-quasi-coherent-equivalence]]).

[F5] The distinguished opens $D(f)$ form a basis of $U=\operatorname{Spec}A$,
with $D(f)=\operatorname{Spec}A_f$ affine
([[def-affine-scheme-spectrum]], [[lem-spectrum-localization-open-immersion]]), and on distinguished opens the associated
sheaves have $\widetilde M(D(f))=M_f$, $\widetilde N(D(f))=N_f$
([[def-associated-sheaf-module-affine-scheme]]); restriction of an associated
sheaf to a distinguished open is the associated sheaf of the localised module,
$\widetilde M|_{D(f)}\cong\widetilde{(M_f)}$
([[lem-associated-sheaf-restriction-affine-open]]).

[F7] A morphism of sheaves is an isomorphism exactly when its stalk maps
are bijective ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F6] The Axiom of Choice as inherited through the associated-sheaf and affine
equivalence machinery ([[def-axiom-of-choice]]).

**Proof technique:** direct; compare the associated sheaf
$\widetilde{(M\otimes_AN)}$ with the tensor product of the associated sheaves
on distinguished opens and on stalks, then conclude globally by the affine
cover criterion.



## Proof

1.1 The affine comparison morphism: let $U=\operatorname{Spec}A$ with $\mathcal F|_U\cong\widetilde M$ and $\mathcal G|_U\cong\widetilde N$. For $f\in A$ the universal property of the tensor product over the ring $A_f$ gives a well-defined $A_f$-linear map $$\delta_f:\widetilde{(M\otimes_AN)}(D(f))=(M\otimes_AN)_f\cong M_f\otimes_{A_f}N_f\longrightarrow(\widetilde M\otimes_{\mathcal O_U}\widetilde N)(D(f)),\qquad \frac{m}{f^k}\otimes\frac{n}{f^l}\longmapsto\frac{m}{f^k}\otimes\frac{n}{f^l},$$ from the localised tensor into the presheaf tensor of the sections, composed with the sheafification map; it is well defined because both sides are the localisations of the tensor product and of the section modules [F1, F5]. For $D(g)\subseteq D(f)$ the restriction maps of the two sheaves correspond under $\delta_g$ and $\delta_f$, since restriction in both is the canonical localisation (of $M\otimes_AN$, of $M$ and of $N$) and the tensor of the localisation maps is the localisation of the tensor [F3, F5]; hence the compatible maps $\delta_f$ on the basis of distinguished opens determine a morphism of $\mathcal O_U$-modules $$\delta:\widetilde{(M\otimes_AN)}\longrightarrow\widetilde M\otimes_{\mathcal O_U}\widetilde N.$$ [F1, F3, F5]

2.1 The morphism is an isomorphism on stalks: fix $\mathfrak p\in U$. By [F2] the stalk of the tensor product of the associated sheaves is $$\bigl(\widetilde M\otimes_{\mathcal O_U}\widetilde N\bigr)_{\mathfrak p}\cong(\widetilde M)_{\mathfrak p}\otimes_{A_{\mathfrak p}}(\widetilde N)_{\mathfrak p}\cong M_{\mathfrak p}\otimes_{A_{\mathfrak p}}N_{\mathfrak p},$$ while by [F2] and [F3] the stalk of the associated tensor is $$\widetilde{(M\otimes_AN)}_{\mathfrak p}\cong(M\otimes_AN)_{\mathfrak p}\cong M_{\mathfrak p}\otimes_{A_{\mathfrak p}}N_{\mathfrak p}.$$ Under these identifications the map $\delta_{\mathfrak p}$ sends the class of $m\otimes n$ to the class of $m\otimes n$, and since the classes of the pure tensors generate both sides as $A_{\mathfrak p}$-modules, $\delta_{\mathfrak p}$ is the canonical isomorphism between the two copies of $M_{\mathfrak p}\otimes_{A_{\mathfrak p}}N_{\mathfrak p}$; in particular $\delta_{\mathfrak p}$ is bijective for every $\mathfrak p$. [F2, F3, step 1.1]

3.1 The affine identification: a morphism of sheaves of modules is an isomorphism if and only if all of its stalk maps are isomorphisms, so step 2.1 shows that $\delta$ is an isomorphism of $\mathcal O_U$-modules; hence $(\mathcal F\otimes_{\mathcal O_X}\mathcal G)|_U\cong\widetilde M\otimes_{\mathcal O_U}\widetilde N\cong\widetilde{(M\otimes_AN)}$ by [F1], which is the displayed affine form. [F1, F7, step 1.1, step 2.1]

4.1 Global quasi-coherence: let $x\in X$. Since $\mathcal F$ and $\mathcal G$ are quasi-coherent, choose affine opens $U_{\mathcal F}\ni x$ and $U_{\mathcal G}\ni x$ with $\mathcal F|_{U_{\mathcal F}}\cong\widetilde M$ and $\mathcal G|_{U_{\mathcal G}}\cong\widetilde N$; then $U_{\mathcal F}\cap U_{\mathcal G}$ is an open neighbourhood of $x$ in the affine scheme $U_{\mathcal F}$, so by [F5] it contains a distinguished open $D(f)$ with $x\in D(f)$, and $D(f)=\operatorname{Spec}A_f$ is affine with $\mathcal F|_{D(f)}\cong\widetilde{(M_f)}$ and, writing $U_{\mathcal G}=\operatorname{Spec}B$, the affine-open restriction lemma in [F5] gives $\mathcal G|_{D(f)}\cong\widetilde{(A_f\otimes_B N)}$, using the restriction map $B\to A_f$. Therefore the family of all affine opens $U\subseteq X$ on which both $\mathcal F$ and $\mathcal G$ are associated covers $X$, and for each member the restriction of $\mathcal F\otimes_{\mathcal O_X}\mathcal G$ is $\widetilde{(M\otimes_AN)}$ by step 3.1, in particular an associated sheaf; by the affine cover criterion [F4] the tensor product $\mathcal F\otimes_{\mathcal O_X}\mathcal G$ is quasi-coherent. [F4, F5, step 3.1]

5.1 Choice accounting: the cover used in step 4.1 is the family of all affine opens on which both sheaves are associated, which is determined by the data, so no chart, module or isomorphism is selected; the comparison morphism $\delta$ of step 1.1 is built from the canonical localisation maps and the universal property of the tensor product, and the identifications of step 2.1 are the canonical stalk maps. Thus the only use of the Axiom of Choice is the inherited one recorded in the Statement through [F6]. [F6, step 1.1, step 2.1, step 4.1] ∎
