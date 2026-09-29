---
id: lem-pullback-qc-module-quasi-coherent
kind: lemma
title: Scheme pullback preserves quasi-coherence
status: draft
origin: pipeline
deps:
  - def-scheme
  - def-pullback-module-ringed-spaces
  - thm-affine-scheme-ring-anti-equivalence
  - thm-affine-quasi-coherent-equivalence
  - thm-quasi-coherence-check-affine-cover
  - def-quasi-coherent-module-scheme
  - def-associated-sheaf-module-affine-scheme
  - lem-associated-sheaf-stalk-localization
  - lem-stalk-inverse-image-sheaf
  - lem-stalk-tensor-product
  - thm-localisation-of-modules-is-tensor-product
  - thm-associativity-of-balanced-tensor-products
  - thm-stalk-structure-sheaf-prime-localization
  - thm-sheaf-morphism-isomorphism-stalkwise
  - lem-spectrum-localization-open-immersion
  - def-affine-scheme-spectrum
  - def-sheaf-on-topological-space
  - def-module-on-ringed-space
  - def-morphism-affine-schemes-from-ring-map
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
([[def-axiom-of-choice]]). Let $f:X\to Y$ be a morphism of schemes
([[def-scheme]]) and let $\mathcal F$ be a quasi-coherent $\mathcal O_Y$-module
([[def-quasi-coherent-module-scheme]]), with pullback $f^*\mathcal F$
([[def-pullback-module-ringed-spaces]]).

Then:

1. $f^*\mathcal F$ is a quasi-coherent $\mathcal O_X$-module.
2. Affine form. Let $U=\operatorname{Spec}B\subseteq X$ and
   $V=\operatorname{Spec}A\subseteq Y$ be affine opens with $f(U)\subseteq V$,
   let $\varphi:A\to B$ be the ring map induced by $f$
   ([[thm-affine-scheme-ring-anti-equivalence]],
   [[def-morphism-affine-schemes-from-ring-map]]), and suppose
   $\mathcal F|_V\cong\widetilde M$ for an $A$-module $M$
   ([[def-associated-sheaf-module-affine-scheme]]). Then there is a canonical
   isomorphism of $\mathcal O_U$-modules
   $$f^*\mathcal F|_U\;\cong\;\widetilde{(B\otimes_AM)},$$
   the associated sheaf on $U=\operatorname{Spec}B$ of the base change
   $B\otimes_AM$ along $\varphi$.

In particular the pullback of an associated sheaf is again an associated
sheaf, with index given by extension of scalars.

## Facts & Assumptions

**Given:** A morphism of schemes $f:X\to Y$; a quasi-coherent
$\mathcal O_Y$-module $\mathcal F$; and in the affine situation affine opens
$U=\operatorname{Spec}B\subseteq X$, $V=\operatorname{Spec}A\subseteq Y$ with
$f(U)\subseteq V$, ring map $\varphi:A\to B$, and an isomorphism
$\mathcal F|_V\cong\widetilde M$ of $\mathcal O_V$-modules.

[F1] Pullback: $f^*\mathcal G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}
f^{-1}\mathcal G$ for an $\mathcal O_Y$-module $\mathcal G$; the inverse image
is computed by neighbourhood colimits, so for an open $U\subseteq X$ and
$g=f|_U:U\to Y$ the restrictions $f^{-1}\mathcal O_Y|_U$, $f^{-1}\mathcal G|_U$
agree with $g^{-1}\mathcal O_Y$, $g^{-1}\mathcal G$, and if $g(U)\subseteq V$
for an open $V\subseteq Y$ then the neighbourhoods in the colimits may be
taken inside $V$, so $f^*\mathcal G|_U\cong g^*(\mathcal G|_V)$
([[def-pullback-module-ringed-spaces]]).

[F2] Fibres: $(g^{-1}\mathcal H)_x\cong\mathcal H_{g(x)}$
([[lem-stalk-inverse-image-sheaf]]); the stalk of a tensor product of sheaves
of modules is the tensor product of the stalks
([[lem-stalk-tensor-product]]); for an affine scheme $\operatorname{Spec}B$ the
stalk of the structure sheaf at $\mathfrak q$ is $B_{\mathfrak q}$
([[thm-stalk-structure-sheaf-prime-localization]]), and the stalk of
$\widetilde N$ at $\mathfrak q$ is $N_{\mathfrak q}$
([[lem-associated-sheaf-stalk-localization]]).

[F3] Localisation is tensor product: $N_{\mathfrak q}\cong
B_{\mathfrak q}\otimes_BN$ for a $B$-module $N$
([[thm-localisation-of-modules-is-tensor-product]]); tensor products of
modules are associative, so $\otimes$ may be regrouped
([[thm-associativity-of-balanced-tensor-products]]). Consequently, for a ring
map $\varphi:A\to B$, a prime $\mathfrak q\subseteq B$ with preimage
$\mathfrak p=\varphi^{-1}(\mathfrak q)\subseteq A$, the $A_{\mathfrak p}$-algebra
$B_{\mathfrak q}$ gives
$B_{\mathfrak q}\otimes_AM\cong B_{\mathfrak q}\otimes_{A_{\mathfrak p}}M_{\mathfrak p}$.

[F4] Quasi-coherence over an affine cover: an $\mathcal O_X$-module $\mathcal G$
is quasi-coherent if and only if there is an affine open cover $X=\bigcup_iU_i$
such that every $\mathcal G|_{U_i}$ is isomorphic to $\widetilde{M_i}$ for some
$\mathcal O_X(U_i)$-module $M_i$
([[thm-quasi-coherence-check-affine-cover]],
[[def-quasi-coherent-module-scheme]]). On the affine scheme
$U=\operatorname{Spec}B$ a quasi-coherent module is canonically
$\widetilde{\Gamma(U,\mathcal G)}$
([[thm-affine-quasi-coherent-equivalence]]).

[F5] The distinguished opens $D(b)$ form a basis of $U=\operatorname{Spec}B$,
and $D(b)=\operatorname{Spec}B_b$ is affine
([[def-affine-scheme-spectrum]], [[lem-spectrum-localization-open-immersion]]); a morphism of sheaves of modules is
determined by a compatible family of module maps on a basis, the restriction
maps being those of the sheaves
([[def-sheaf-on-topological-space]], [[def-module-on-ringed-space]]).

[F6] Affine charts and ring maps: an open subscheme
$\operatorname{Spec}B\subseteq\operatorname{Spec}A$ determines a ring map
$A\to B$, and morphisms of affine schemes correspond contravariantly to ring
maps, so $g:U\to V$ with $U=\operatorname{Spec}B$, $V=\operatorname{Spec}A$ is
the morphism induced by $\varphi:A\to B$
([[thm-affine-scheme-ring-anti-equivalence]],
[[def-morphism-affine-schemes-from-ring-map]]).

[F8] A morphism of sheaves is an isomorphism exactly when its stalk maps
are bijective ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F7] The Axiom of Choice as inherited through the associated-sheaf and affine
equivalence machinery ([[def-axiom-of-choice]]).

**Proof technique:** direct; build the comparison morphism on distinguished
opens, identify both stalks over the local ring by the stalk and
localisation-tensor formulas, and conclude by the affine cover criterion.



## Proof

1.1 Reduction to the affine case: let $U=\operatorname{Spec}B\subseteq X$, $V=\operatorname{Spec}A\subseteq Y$ be affine opens with $f(U)\subseteq V$ and put $g=f|_U:U\to V$. By [F1] the restriction of the pullback is $(f^*\mathcal F)|_U\cong g^*(\mathcal F|_V)$, and by [F6] the morphism $g$ is the one induced by the ring map $\varphi:A\to B$; fixing the isomorphism $\mathcal F|_V\cong\widetilde M$, it suffices to construct a canonical isomorphism $g^*(\widetilde M)\cong\widetilde{(B\otimes_AM)}$ of $\mathcal O_U$-modules, since then $f^*\mathcal F|_U\cong\widetilde{(B\otimes_AM)}$ as well. [F1, F6, given]

1.2 The comparison morphism: for $b\in B$ let $[m]\in g^{-1}(\widetilde M)(D(b))$ denote the class of $m\in M=\widetilde M(V)$ under the canonical map from the neighbourhood colimit to its sheafification on the distinguished open $D(b)\subseteq U$, using that $g(D(b))\subseteq V$. Using the universal property of the module tensor product, define a $B_b$-linear map $$\delta_b:\widetilde{(B\otimes_AM)}(D(b))=(B\otimes_AM)_b\cong B_b\otimes_AM\longrightarrow g^*(\widetilde M)(D(b)),\qquad \frac{b'}{b^k}\otimes m\longmapsto\frac{b'}{b^k}\cdot[m],$$ with the $B_b$-module structure on the target coming from the ring map $g^{-1}\mathcal O_V(D(b))\to\mathcal O_U(D(b))=B_b$ that makes $g^*(\widetilde M)$ an $\mathcal O_U$-module. For $D(b')\subseteq D(b)$ the square of restriction maps commutes: both composites send $(b''\otimes m)/1$ to the restriction of $b''\cdot[m]$, and the class construction is compatible with restriction. By [F5] the compatible maps $\delta_b$ determine a unique morphism $\delta:\widetilde{(B\otimes_AM)}\to g^*(\widetilde M)$ of $\mathcal O_U$-modules. [F1, F5, given]

2.1 The morphism is an isomorphism on stalks: fix $\mathfrak q\in U$ and put $\mathfrak p=\varphi^{-1}(\mathfrak q)=g(\mathfrak q)\in V$. By [F2] and [F3], the stalk of the tensor pullback is $$(g^*(\widetilde M))_{\mathfrak q}\cong(O_U)_{\mathfrak q}\otimes_{(g^{-1}\mathcal O_V)_{\mathfrak q}}(g^{-1}\widetilde M)_{\mathfrak q}\cong B_{\mathfrak q}\otimes_{A_{\mathfrak p}}\widetilde M_{\mathfrak p}\cong B_{\mathfrak q}\otimes_{A_{\mathfrak p}}M_{\mathfrak p},$$ while by [F2] and [F3] the stalk of the associated sheaf is $$\widetilde{(B\otimes_AM)}_{\mathfrak q}\cong(B\otimes_AM)_{\mathfrak q}\cong B_{\mathfrak q}\otimes_{A_{\mathfrak p}}M_{\mathfrak p};$$ the map $\delta_{\mathfrak q}$ is $B_{\mathfrak q}$-linear and sends the class of $1\otimes m$ to the class of $1\otimes m$ under these identifications, and since the elements $1\otimes m$ generate $B_{\mathfrak q}\otimes_{A_{\mathfrak p}}M_{\mathfrak p}$ as a $B_{\mathfrak q}$-module, $\delta_{\mathfrak q}$ is the canonical isomorphism between the two copies of $B_{\mathfrak q}\otimes_{A_{\mathfrak p}}M_{\mathfrak p}$. [F2, F3, step 1.2]

3.1 The affine isomorphism: a morphism of sheaves of modules is an isomorphism if and only if its stalk maps are isomorphisms, so step 2.1 shows that $\delta$ is an isomorphism of $\mathcal O_U$-modules; hence $g^*(\widetilde M)\cong\widetilde{(B\otimes_AM)}$ and, by step 1.1, $f^*\mathcal F|_U\cong\widetilde{(B\otimes_AM)}$. This proves the affine form (2), and it shows that for every admissible pair $(U,V)$ the restriction of $f^*\mathcal F$ to the affine open $U$ is an associated sheaf, hence quasi-coherent on $U$ by [F4]. [F4, F8, step 1.1, step 2.1]

4.1 Global quasi-coherence: let $x\in X$. Choose an affine open $U_0=\operatorname{Spec}B_0\subseteq X$ containing $x$; since $\mathcal F$ is quasi-coherent there are an affine open $V=\operatorname{Spec}A\subseteq Y$ containing $f(x)$ and an $A$-module $M$ with $\mathcal F|_V\cong\widetilde M$. The set $U_0\cap f^{-1}(V)$ is an open neighbourhood of $x$ in $U_0$, so by [F5] it contains a distinguished open $D(b)$ with $x\in D(b)$; the open $D(b)=\operatorname{Spec}(B_0)_b$ is affine, maps into $V$, and satisfies $\mathcal F|_V\cong\widetilde M$. Therefore the family of all affine opens $U\subseteq X$ that admit an affine open $V\subseteq Y$ with $f(U)\subseteq V$ and $\mathcal F|_V\cong\widetilde M$ covers $X$, and each member has $f^*\mathcal F|_U$ associated by step 3.1; by the affine cover criterion [F4], $f^*\mathcal F$ is quasi-coherent. This proves (1). [F4, F5, step 3.1]

5.1 Choice accounting: the cover used in step 4.1 is the family of all admissible affine opens, which is determined by the data, so no chart, module or isomorphism is selected; the comparison morphism $\delta$ of step 1.2 is built from the canonical class maps of the inverse image colimit, and the identifications of step 2.1 are the canonical stalk and localisation isomorphisms. Hence the only use of the Axiom of Choice is the inherited one recorded in the Statement through [F7]. [F7, step 1.2, step 2.1, step 4.1] ∎
