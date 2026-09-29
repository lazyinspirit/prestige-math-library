---
id: lem-higher-direct-image-affine-localization
kind: lemma
title: "Higher direct images localize over an affine base"
status: published
origin: pipeline
deps:
  - def-higher-direct-image-sheaf
  - lem-higher-direct-image-local-section-formula
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-affine-quasi-coherent-equivalence
  - def-quasi-coherent-module-scheme
  - def-associated-sheaf-module-affine-scheme
  - lem-associated-sheaf-sections-basic-open
  - lem-associated-sheaf-stalk-localization
  - def-affine-scheme-spectrum
  - def-topology-basis-subbasis
  - def-sheafification
  - thm-sheafification-preserves-stalks
  - def-stalk-of-presheaf
  - thm-sheaf-morphism-isomorphism-stalkwise
  - def-sheaf-on-topological-space
  - def-module-on-ringed-space
  - thm-cech-to-sheaf-cohomology-comparison
  - def-cech-cochain-complex-open-cover
  - def-godement-resolution
  - thm-godement-resolution-flasque
  - def-sheaf-cohomology-derived-global-sections
  - thm-separatedness-gluing-overlap-criterion
  - def-separated-morphism-schemes
  - lem-separated-stable-under-base-change
  - lem-separated-stable-under-composition
  - cor-affine-schemes-separated
  - lem-base-change-quasi-compact-morphisms
  - def-quasi-compact-and-quasi-separated-morphism
  - thm-localisation-of-modules-is-exact
  - cor-localisation-commutes-with-kernels-images-and-cokernels
  - lem-principal-open-cover-qc-acyclic-intersections
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Section 30.4 (tags 01XJ, 01XK)"
      url: https://stacks.math.columbia.edu/tag/01XJ
    - title: "The Stacks Project, Cohomology of Schemes, Section 30.5 (tag 02KH)"
      url: https://stacks.math.columbia.edu/tag/02KH
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.9, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from
the local-section formula and from Čech-to-cohomology comparison below. Let
$f:X\to S$ be a quasi-compact separated morphism of schemes
([[def-quasi-compact-and-quasi-separated-morphism]],
[[def-separated-morphism-schemes]]) and let $\mathcal F$ be a quasi-coherent
$\mathcal O_X$-module ([[def-quasi-coherent-module-scheme]]). Then:

1. for every $q\ge0$ the higher direct image $R^qf_*\mathcal F$
   ([[def-higher-direct-image-sheaf]]) is a quasi-coherent $\mathcal O_S$-module
   ([[def-quasi-coherent-module-scheme]]);
2. for every affine open $V=\operatorname{Spec}A\subseteq S$
   ([[def-affine-scheme-spectrum]]) there is a canonical isomorphism of
   $\mathcal O_V$-modules
   $$(R^qf_*\mathcal F)|_V\;\cong\;\widetilde{H^q\bigl(f^{-1}V,\mathcal F|_{f^{-1}V}\bigr)}$$
   with the associated module sheaf
   ([[def-associated-sheaf-module-affine-scheme]]) of the $A$-module
   $H^q(f^{-1}V,\mathcal F)$ ([[def-sheaf-cohomology-derived-global-sections]]);
3. consequently, for every distinguished open $D(a)\subseteq V$
   ([[def-affine-scheme-spectrum]]) there is a canonical isomorphism
   $$(R^qf_*\mathcal F)(D(a))\;\cong\;H^q\bigl(f^{-1}V,\mathcal F\bigr)_a ,$$
   the localisation at $a$ of the $A$-module $H^q(f^{-1}V,\mathcal F)$
   ([[lem-associated-sheaf-sections-basic-open]]).

The empty affine open $V=\operatorname{Spec}0=\varnothing$, the empty scheme
$X=\varnothing$, the zero sheaf $\mathcal F=0$ and the degree $q=0$ are
included; all statements are trivial on the empty open and in degree zero they
say that $f_*\mathcal F$ is quasi-coherent and computed by global sections.

## Facts & Assumptions
**Given:** A quasi-compact separated morphism $f:X\to S$ and a quasi-coherent
$\mathcal O_X$-module $\mathcal F$.

[F1] Local-section formula: $R^qf_*\mathcal F$ is the sheafification of the
presheaf $P$ on $S$ with $P(W)=H^q(f^{-1}W,\mathcal F|_{f^{-1}W})$, the
identification respecting restriction maps and the $\mathcal O_S$-module
structure. The stalk of a sheafification is the stalk of the presheaf,
$(P^+)_x=P_x=\operatorname{colim}_{x\in W}P(W)$, a colimit over the open
neighbourhoods of $x$, and the distinguished opens $D(a)$ of an affine open
$V=\operatorname{Spec}A$ are cofinal among the open neighbourhoods of a point
of $V$.
([[lem-higher-direct-image-local-section-formula]],
[[def-sheafification]], [[thm-sheafification-preserves-stalks]],
[[def-stalk-of-presheaf]], [[def-topology-basis-subbasis]])

[F2] Associated module sheaf: for an $A$-module $M$ the sheaf
$\widetilde M$ on $\operatorname{Spec}A$ has $\widetilde M(D(a))=M_a$ with
restriction maps the localisation maps, and stalk $\widetilde M_{\mathfrak p}=
M_{\mathfrak p}$. The distinguished opens form a basis of the topology.
([[def-associated-sheaf-module-affine-scheme]],
[[lem-associated-sheaf-sections-basic-open]],
[[lem-associated-sheaf-stalk-localization]], [[def-affine-scheme-spectrum]])

[F3] Affine equivalence: a quasi-coherent module on an affine scheme
$\operatorname{Spec}A$ is canonically isomorphic to the associated sheaf of its
global sections, and for an affine open $U=\operatorname{Spec}C\subseteq X$ with
quasi-coherent $\mathcal F$ one therefore has
$\mathcal F|_U\cong\widetilde{\mathcal F(U)}$
([[thm-affine-quasi-coherent-equivalence]],
[[def-quasi-coherent-module-scheme]]). Under this identification the
restriction $\mathcal F(U)\to\mathcal F(D(a))$ is the localisation at $a$, and
for $D(b)\subseteq D(a)$ the restriction $\mathcal F(D(a))\to\mathcal F(D(b))$
is the localisation map between the localisations of $\mathcal F(U)$ [F2].

[F4] Čech comparison: for a quasi-compact separated scheme $Y$, a finite affine
open cover $U_0,\dots,U_r$ of $Y$ and a quasi-coherent $\mathcal G$ on $Y$,
every finite intersection of cover members is affine and the canonical map
$\check H^q(\mathcal U,\mathcal G)\to H^q(Y,\mathcal G)$ is an isomorphism for
every $q\ge0$, where $\check H^q$ is the cohomology of the ordered Čech complex
$C^\bullet(\mathcal U,\mathcal G)$.
([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]],
[[def-cech-cochain-complex-open-cover]],
[[def-sheaf-cohomology-derived-global-sections]])

[F5] Compatibility with restriction to an open subspace: the comparison map of
[[thm-cech-to-sheaf-cohomology-comparison]] is computed from the Čech–Godement
double complex, whose entries are products of sections of the Godement
resolution $G^\bullet$, and the Godement construction uses only stalks of the
given sheaf ([[def-godement-resolution]]); therefore for an open subspace
$W\subseteq Y$ one has $G^\bullet(\mathcal G)|_W=G^\bullet(\mathcal G|_W)$,
the double complexes and the maps $u,w$ restrict, and the canonical
identifications $H^q(Y,\mathcal G)\cong H^q(\Gamma(Y,G^\bullet(\mathcal G)))$
([[thm-godement-resolution-flasque]]), natural in the pair (space, sheaf),
intertwine restriction of sheaf cohomology with restriction of global sections
of the Godement complex. Consequently, for a cover $\mathcal U$ of $Y$ and its
restriction $\mathcal U|_W$ to $W$, cochain restriction
$\check H^q(\mathcal U,\mathcal G)\to\check H^q(\mathcal U|_W,\mathcal G|_W)$,
restriction of sheaf cohomology $H^q(Y,\mathcal G)\to H^q(W,\mathcal G|_W)$ and
the comparison maps $\varphi^q$ form a commutative square for every $q\ge0$.
([[thm-cech-to-sheaf-cohomology-comparison]],
[[def-sheaf-cohomology-derived-global-sections]],
[[def-godement-resolution]], [[thm-godement-resolution-flasque]])

[F6] Separation and quasi-compactness: for a separated morphism $f$, affine
opens of $X$ lying over one and the same affine open of $S$ have affine
intersection; separatedness is stable under base change and under composition,
affine schemes are separated, and quasi-compactness is stable under base
change, so an inverse image of an affine open under a quasi-compact separated
morphism is quasi-compact. A scheme covered by finitely many quasi-compact
open subschemes is quasi-compact.
([[thm-separatedness-gluing-overlap-criterion]],
[[def-separated-morphism-schemes]],
[[lem-separated-stable-under-base-change]],
[[lem-separated-stable-under-composition]], [[cor-affine-schemes-separated]],
[[lem-base-change-quasi-compact-morphisms]],
[[def-quasi-compact-and-quasi-separated-morphism]])

[F7] Localisation is exact, and it commutes with kernels, images and cokernels
([[thm-localisation-of-modules-is-exact]],
[[cor-localisation-commutes-with-kernels-images-and-cokernels]]). Hence for a
complex $C^\bullet$ of $A$-modules and a multiplicative subset $S\subseteq A$
one has $H^q(C^\bullet\otimes_A S^{-1}A)\cong H^q(C^\bullet)\otimes_A S^{-1}A$
canonically, since $H^q$ is the cokernel of the map of images into the kernel.

[F8] A morphism of sheaves is an isomorphism if and only if it induces
isomorphisms on all stalks ([[thm-sheaf-morphism-isomorphism-stalkwise]]);
gluing of compatible sections over an open cover in a sheaf
([[def-sheaf-on-topological-space]]).



## Proof

**Proof technique:** direct: on an affine open $V$ of $S$ the inverse image of a finite affine cover of $f^{-1}V$ restricts to finite affine covers of the base changes $f^{-1}D(a)$, whose Čech complexes are the localisations of the Čech complex over $V$; exactness of localisation identifies the cohomology, and the compatibility of these identifications under further localisation assembles, over the distinguished-open basis, into an isomorphism of the sheafified presheaf with the associated module sheaf.

1.1 Let $V=\operatorname{Spec}A\subseteq S$ be affine. Since $f$ is quasi-compact, $X_V:=f^{-1}V$ is quasi-compact, so choose a finite affine open cover $U_0,\dots,U_r$ of $X_V$. Every $U_i$ lies over the affine open $V$ of $S$, and $X_V$ is separated over $V$; consequently, by the separation criterion [F6], for all tuples $i_0,\dots,i_p$ the intersection $U_{i_0\dots i_p}=U_{i_0}\cap\cdots\cap U_{i_p}$ is affine (the empty intersection only arises for the empty tuple and is $X_V$ itself, which we do not need). [F6]

2.1 Fix $a\in A$ and put $X_a:=f^{-1}(D(a))\subseteq X_V$ and $U_i^a:=U_i\cap X_a$. Since $U_i\subseteq X_V$, the morphism $U_i\to V$ is a morphism of affine schemes, so $U_i^a$ is the distinguished open $D(a)\subseteq U_i=\operatorname{Spec}\mathcal O_X(U_i)$ and hence is affine; more generally $U^a_{i_0\dots i_p}=D(a)\subseteq U_{i_0\dots i_p}$ is affine by step 1.1. The finitely many $U_i^a$ cover $X_a$, so $X_a$ is quasi-compact, and $X_a$ is separated as an open subscheme of the separated $V$-scheme $X_V$ composed with the separated morphism $V\to\operatorname{Spec}\mathbb Z$ [F6]. Hence the Čech comparison [F4] applies to the finite affine cover $U_0^a,\dots,U_r^a$ of $X_a$ and gives isomorphisms $$\check H^q(\mathcal U^a,\mathcal F)\longrightarrow H^q(X_a,\mathcal F),\qquad q\ge0 .$$ [F4, F6, step 1.1]

2.2 For every tuple $i_0,\dots,i_p$ the ring $\mathcal O_X(U^a_{i_0\dots i_p})=\mathcal O_X(U_{i_0\dots i_p})_a$ is the localisation at $a$, and by the affine equivalence [F3] the quasi-coherent module $\mathcal F|_{U_{i_0\dots i_p}}=\widetilde{\mathcal F(U_{i_0\dots i_p})}$ has sections $$\mathcal F(U^a_{i_0\dots i_p})=\mathcal F(U_{i_0\dots i_p})_a=\mathcal F(U_{i_0\dots i_p})\otimes_A A_a ,$$ and the Čech differentials, which are assembled from the restriction maps of $\mathcal F$, are the localisations of the corresponding maps of the complex $C^\bullet(\mathcal U,\mathcal F)$ for the cover $\mathcal U$ of $X_V$. Hence there are canonical isomorphisms of complexes of $A_a$-modules $$C^p(\mathcal U^a,\mathcal F)\cong C^p(\mathcal U,\mathcal F)\otimes_A A_a,\qquad p\ge0,$$ and for $D(b)\subseteq D(a)$ the restriction of Čech cochains $C^p(\mathcal U^a,\mathcal F)\to C^p(\mathcal U^b,\mathcal F)$ corresponds to the canonical map $C^p(\mathcal U,\mathcal F)\otimes_A A_a\to C^p(\mathcal U,\mathcal F)\otimes_A A_b$. [F3, step 1.1]

3.1 Combining steps 2.1, 2.2 with the exactness of localisation [F7], for every $a\in A$ there are canonical isomorphisms of $A_a$-modules $$H^q(X_a,\mathcal F)\cong\check H^q(\mathcal U^a,\mathcal F)\cong H^q\bigl(C^\bullet(\mathcal U,\mathcal F)\otimes_A A_a\bigr)\cong H^q\bigl(C^\bullet(\mathcal U,\mathcal F)\bigr)\otimes_A A_a ,$$ where the last identification is the canonical isomorphism of [F7]; for $a=1$ this gives $M:=H^q(X_V,\mathcal F)\cong H^q(C^\bullet(\mathcal U,\mathcal F))$ and hence, for every $a$, a canonical isomorphism $$\psi_a:H^q(X_a,\mathcal F)\longrightarrow M_a=H^q(X_V,\mathcal F)_a ,$$ $A_a$-linear and natural in $a$. [F4, F7, step 2.1, step 2.2]

4.1 The isomorphisms $\psi_a$ are compatible with restriction: for $D(b)\subseteq D(a)$ the square $$H^q(X_a,\mathcal F)\xrightarrow{\ \psi_a\ }M_a,\qquad \text{restriction}\downarrow\ \ \downarrow\text{localisation},\qquad H^q(X_b,\mathcal F)\xrightarrow{\ \psi_b\ }M_b$$ commutes. Indeed the right column of step 3.1 is functorial in the coefficient ring by [F7], the middle terms are the cochain complexes of step 2.2 whose transition maps are localisation, and the left vertical map corresponds to the middle one under the comparison isomorphisms of step 2.1 by the compatibility of [F5] applied to the open subspace $X_b\subseteq X_a$. [F5, F7, step 2.1, step 2.2, step 3.1]

5.1 Write $Q:=R^qf_*\mathcal F|_V$, the restriction of the sheafification of the presheaf $P$ of [F1] to the affine open $V$, and let $\pi:P|_V\to Q$ be the sheafification map. For each distinguished open $D(a)\subseteq V$ define $$\phi_a:M_a\xrightarrow{\ \psi_a^{-1}\ }H^q(X_a,\mathcal F)=P(D(a))\xrightarrow{\ \pi_{D(a)}\ }Q(D(a)) .$$ By step 4.1 and the fact that $\pi$ is a morphism of presheaves, the maps $\phi_a$ are compatible with restrictions: for $D(b)\subseteq D(a)\subseteq V$ one has $\phi_a(s)|_{D(b)}=\phi_b(s|_{D(b)})$ for all $s\in M_a=M(D(a))$ by [F2]. Since the distinguished opens cover $V$ and $Q$ is a sheaf, gluing over covers by distinguished opens [F8] defines a unique morphism of $\mathcal O_V$-modules $$\phi:\widetilde M\longrightarrow Q=R^qf_*\mathcal F|_V$$ whose component on $D(a)$ is $\phi_a$. [F1, F2, F8, step 4.1]

5.2 The morphism $\phi$ is an isomorphism. For $x\in V$ the distinguished opens containing $x$ are cofinal among its open neighbourhoods, so by [F1] and [F2] $$Q_x=\operatorname{colim}_{D(a)\ni x}P(D(a))\cong\operatorname{colim}_{D(a)\ni x}M_a=\widetilde M_x ,$$ where the middle isomorphism is induced by the natural isomorphisms $\psi_a$ of step 3.1, which are compatible with restriction by step 4.1. Under this identification the stalk map $\phi_x$ is the identity, hence an isomorphism; as this holds for every $x\in V$, [F8] shows that $\phi$ is an isomorphism of $\mathcal O_V$-modules. [F1, F2, F8, step 3.1, step 4.1]

6.1 Conclusion. For every affine open $V\subseteq S$ step 5.2 exhibits $(R^qf_*\mathcal F)|_V$ as the associated sheaf of the $A$-module $H^q(f^{-1}V,\mathcal F)$, proving claim 2. Since the affine opens cover $S$, claim 1 follows from locality of quasi-coherence. Claim 3 is the description of sections of an associated sheaf on distinguished opens [F2] applied to the isomorphism of step 5.2. If $V=\varnothing$ then $A=0$, $X_V=\varnothing$, $P(D(a))=0=M_a$ and the identifications are trivial; the zero sheaf and degree $q=0$ are included since $\psi_a$ and $\phi$ exist for every $q\ge0$ and $M=H^0(X_V,\mathcal F)=\mathcal F(X_V)$. The Axiom of Choice and the Axiom of Dependent Choice are inherited from [F1] and [F4] and from the choice of the finite cover in step 1.1; the remaining steps (localisation, gluing over the distinguished-open basis) make no further choices. [F1, F2, F4, step 5.2] ∎
