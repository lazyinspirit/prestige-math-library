---
id: lem-proper-flat-fp-cohomology-perfect-complex
kind: lemma
title: "Universal finite projective cohomology complex over any base"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-change-of-rings-for-extension-of-scalars
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-affine-open-subscheme
  - def-affine-scheme-spectrum
  - def-axiom-of-choice
  - def-base-change-morphism-schemes
  - def-cohomology-object-of-a-cochain-complex
  - def-dependent-choice
  - def-finite-type-finite-presentation-module-sheaf
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-generated-cyclic-finitely-generated-and-free-modules
  - def-locally-finite-presentation-morphism
  - def-local-ring
  - def-noetherian-ring-and-module
  - def-projective-module
  - def-proper-morphism
  - def-pullback-module-ringed-spaces
  - def-restriction-and-extension-of-scalars
  - def-tensor-product-total-complex-of-chain-complexes
  - lem-base-change-composition
  - lem-fibre-product-open-restriction
  - lem-generated-submodule-as-finite-linear-combinations
  - lem-noetherian-approximation-proper-fp-flat-sheaf
  - lem-proper-flat-cohomology-perfect-complex
  - prop-extension-of-scalars-preserves-flat-modules
  - prop-functoriality-of-module-tensor-products
  - prop-transitivity-of-flatness-under-change-of-rings
  - thm-affine-fibre-product-tensor-ring
  - thm-associativity-of-balanced-tensor-products
  - thm-flatness-is-local
  - thm-localisation-of-modules-is-tensor-product
  - thm-localisations-are-flat
  - thm-projective-module-characterizations
  - thm-right-exactness-of-tensor-products
  - thm-splitting-lemma-for-modules
  - thm-stalk-structure-sheaf-prime-localization
  - thm-tensor-products-commute-with-arbitrary-direct-sums
  - thm-unit-isomorphisms-for-module-tensor-products
  - thm-universal-property-of-module-direct-sums
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Derived Categories of Schemes, Section 36.30 (perfect complexes and base change)"
      url: "https://stacks.math.columbia.edu/download/perfect.pdf"
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.22.1 (Tag 07VK)"
      url: "https://stacks.math.columbia.edu/tag/07VK"
    - title: "The Stacks Project, Limits of Schemes, Sections 32.8-32.13, especially Lemma 32.13.1"
      url: "https://stacks.math.columbia.edu/download/limits.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice
([[def-axiom-of-choice]], [[def-dependent-choice]]), inherited from the
Noetherian approximation and the Noetherian-stage construction cited below.
Let $A$ be a commutative ring, let $f:X\to\operatorname{Spec}A$ be a proper
morphism of finite presentation ([[def-proper-morphism]],
[[def-locally-finite-presentation-morphism]]), and let $\mathcal F$ be a
finitely presented $\mathcal O_X$-module
([[def-finite-type-finite-presentation-module-sheaf]]) that is flat over $A$,
meaning that for every $x\in X$ the stalk $\mathcal F_x$ is a flat module over
the local ring $A_{f(x)}=\mathcal O_{\operatorname{Spec}A,f(x)}$
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

Then there are an integer $r\ge0$ and a bounded complex $K^\bullet$ of finite
projective $A$-modules, concentrated in degrees $0,\dots,r$ and finite free in
all positive degrees, such that for every $A$-algebra $A'$ and every
$q\in\mathbb Z$ there is a canonical isomorphism
$$H^q(K^\bullet\otimes_AA')\;\cong\;H^q(X_{A'},\mathcal F_{A'}),$$
where $X_{A'}:=X\times_{\operatorname{Spec}A}\operatorname{Spec}A'$ with
projection $p:X_{A'}\to X$ ([[def-base-change-morphism-schemes]]) and
$\mathcal F_{A'}:=p^*\mathcal F$ ([[def-pullback-module-ringed-spaces]]). The
isomorphisms are natural in the $A$-algebra $A'$ and compatible with
composition of $A$-algebra maps.

Locally on $\operatorname{Spec}A$ the complex can be made finite free: there
is an open cover of $\operatorname{Spec}A$ by affine opens $V$ such that
$K^\bullet\otimes_A\mathcal O(V)$ is a bounded complex of finite free
$\mathcal O(V)$-modules.

The empty source $X=\varnothing$, the zero sheaf $\mathcal F=0$, the
one-member case $r=0$, the zero ring $A=0$, the base change $A'=0$, the
degrees $q<0$ and $q>r$, and the case where $A$ is already finitely generated
over $\mathbb Z$ are included.

## Facts & Assumptions
**Given:** The Axiom of Choice and the Axiom of Dependent Choice, a commutative ring $A$, a proper morphism of finite presentation $f:X\to\operatorname{Spec}A$, a finitely presented $\mathcal O_X$-module $\mathcal F$ with $\mathcal F_x$ flat over $A_{f(x)}$ for every $x\in X$, and, for the base change statements, an $A$-algebra $A'$.

[F1] Noetherian approximation: if $A$ is any commutative ring, $f:X\to\operatorname{Spec}A$ is proper of finite presentation and $\mathcal F$ is a finitely presented $\mathcal O_X$-module that is flat over $A$ in the sense that each stalk $\mathcal F_x$ is a flat $A$-module through $A\to\mathcal O_{X,x}$, then there are a finitely generated $\mathbb Z$-subalgebra $A_i\subseteq A$, a proper morphism of finite presentation $f_i:X_i\to\operatorname{Spec}A_i$, a finitely presented $\mathcal O_{X_i}$-module $\mathcal F_i$ flat over $A_i$, and identifications $X\cong X_i\times_{\operatorname{Spec}A_i}\operatorname{Spec}A$ and $\mathcal F\cong q^*\mathcal F_i$ over $A$, where $q:X\to X_i$ is the projection; if $A$ is finitely generated over $\mathbb Z$ the descent is trivial, and the empty source and the zero sheaf are included. ([[lem-noetherian-approximation-proper-fp-flat-sheaf]], [[def-proper-morphism]], [[def-locally-finite-presentation-morphism]], [[def-finite-type-finite-presentation-module-sheaf]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]])

[F2] A finitely generated algebra over the Noetherian ring $\mathbb Z$ is Noetherian. ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[def-noetherian-ring-and-module]])

[F3] Noetherian-stage perfect complex: for a Noetherian commutative ring $B$, a proper morphism $g:Y\to\operatorname{Spec}B$ and a coherent $\mathcal O_Y$-module $\mathcal G$ flat over $\operatorname{Spec}B$ (each stalk flat over the corresponding base local ring), there are an integer $r\ge0$ and a bounded complex $K^\bullet$ of finite projective $B$-modules, concentrated in degrees $0,\dots,r$ and finite free in positive degrees, with canonical isomorphisms $H^q(K^\bullet\otimes_BB')\cong H^q(Y_{B'},\mathcal G_{B'})$ for every $B$-algebra $B'$, natural in $B'$ and compatible with composition of ring maps; and after restricting to a suitable Zariski open cover of $\operatorname{Spec}B$ the complex becomes a bounded complex of finite free modules. ([[lem-proper-flat-cohomology-perfect-complex]])

[F4] Flatness of localisations, transitivity and base change: for a multiplicative set the localisation $R\to S^{-1}R$ is a flat ring map; if $R\to S$ is a flat ring map and $N$ is a flat $S$-module, then $N$ is flat as an $R$-module; and extension of scalars along any ring map carries flat modules to flat modules. ([[thm-localisations-are-flat]], [[prop-transitivity-of-flatness-under-change-of-rings]], [[prop-extension-of-scalars-preserves-flat-modules]])

[F5] Flatness is local and localisation is tensor: an $R$-module $M$ is flat if and only if every localisation $M_{\mathfrak p}$ is flat over $R_{\mathfrak p}$; for a multiplicative set $S$ there is a natural isomorphism $S^{-1}M\cong S^{-1}R\otimes_RM$; tensor products of modules may be regrouped; and for an $S$-module $N$ the unit map $S\otimes_SN\to N$ is an isomorphism. ([[thm-flatness-is-local]], [[thm-localisation-of-modules-is-tensor-product]], [[thm-associativity-of-balanced-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]])

[F6] Stalk structure: for $x\in X$ the local ring $\mathcal O_{X,x}$ has for units exactly the elements outside its maximal ideal, and the structure map $A\to\mathcal O_{X,x}$ carries every $a\in A\setminus f(x)$ to a unit, so it factors through the localisation $A\to A_{f(x)}$. ([[thm-stalk-structure-sheaf-prime-localization]], [[def-local-ring]])

[F7] Finite free covers and splittings: a finitely generated $R$-module with generators $m_1,\dots,m_n$ is a quotient of $R^n$ by $e_j\mapsto m_j$; projectivity is the lifting property against surjections; and a short exact sequence whose epimorphism has a section splits, exhibiting its target as a direct summand of its middle term. ([[lem-generated-submodule-as-finite-linear-combinations]], [[def-generated-cyclic-finitely-generated-and-free-modules]], [[thm-universal-property-of-module-direct-sums]], [[def-projective-module]], [[thm-splitting-lemma-for-modules]])

[F8] Tensor exactness, functoriality and direct sums: tensoring is right exact and functorial in both variables, and it commutes with arbitrary direct sums, so a finite direct sum of copies of $R$ tensored with $R'$ is the corresponding finite direct sum of copies of $R'$ once the unit isomorphism is applied. ([[thm-right-exactness-of-tensor-products]], [[prop-functoriality-of-module-tensor-products]], [[thm-tensor-products-commute-with-arbitrary-direct-sums]])

[F9] Projectivity characterisation: under the Axiom of Choice a module is projective if and only if it is a direct summand of a free module. ([[thm-projective-module-characterizations]], [[def-axiom-of-choice]])

[F10] Change of rings: for a ring map $R\to S$, a right $S$-module $N$ and a left $R$-module $M$ there is a natural isomorphism $N\otimes_RM\cong N\otimes_S(S\otimes_RM)$; restriction of scalars leaves the underlying groups and maps unchanged. ([[cor-change-of-rings-for-extension-of-scalars]], [[def-restriction-and-extension-of-scalars]])

[F11] Iterated base change and affine preimages: for $S''\to S'\to S$ and an $S$-scheme $X$ there is a canonical isomorphism $(X\times_SS')\times_{S'}S''\cong X\times_SS''$ compatible with the projections; for an open $U\subseteq X$ its preimage in a base change represents $U\times_SS'$; and for affine opens the fibre product is $\operatorname{Spec}$ of the tensor product of the section rings. ([[lem-base-change-composition]], [[def-base-change-morphism-schemes]], [[lem-fibre-product-open-restriction]], [[thm-affine-fibre-product-tensor-ring]], [[def-affine-open-subscheme]], [[def-affine-scheme-spectrum]])

[F12] Pullback of modules along a composition: the pullback $f^*\mathcal G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$ is contravariantly functorial, and the composite of pullbacks is canonically identified with the pullback along the composite, $f^*g^*\cong(g\circ f)^*$, by associativity of the sheaf tensor products defining pullback; on generators $1\otimes1\otimes s$ the identification is the identity. ([[def-pullback-module-ringed-spaces]])

[F13] Complexes: tensoring a complex of $A$-modules with the ring $A'$ placed in degree $0$ gives the complex with terms $K^j\otimes_AA'$, and $H^q$ denotes the cohomology object of a cochain complex. ([[def-tensor-product-total-complex-of-chain-complexes]], [[def-cohomology-object-of-a-cochain-complex]])

[F14] The Axiom of Choice and the Axiom of Dependent Choice are the choice principles named in the statement. ([[def-axiom-of-choice]], [[def-dependent-choice]])

## Proof

**Proof technique:** direct: transfer the flatness hypothesis to the form required by the Noetherian approximation, descend to a Noetherian stage, apply the Noetherian-stage perfect complex there, base change the finite projective complex along the stage map, and compare coefficient change, base-changed geometry and pullbacks of the sheaf along the canonical identifications, with finite freeness pulled back from the stage.

1.1 Hypothesis transfer. Let $x\in X$ and put $\mathfrak p=f(x)$. By [F6] the structure map $A\to\mathcal O_{X,x}$ factors through the localisation $A\to A_{\mathfrak p}$, so $\mathcal F_x$ is an $A_{\mathfrak p}$-module whose restriction to $A$ is its given $A$-module structure; since $A\to A_{\mathfrak p}$ is flat and $\mathcal F_x$ is flat over $A_{\mathfrak p}$ by hypothesis, [F4] makes $\mathcal F_x$ flat over $A$ as well. [F4, F6]

1.2 The Noetherian stage. By 1.1 the hypotheses of [F1] hold for $f$ and $\mathcal F$, so there are a finitely generated $\mathbb Z$-subalgebra $A_i\subseteq A$, Noetherian by [F2], a proper morphism of finite presentation $f_i:X_i\to\operatorname{Spec}A_i$, a finitely presented $\mathcal O_{X_i}$-module $\mathcal F_i$ flat over $A_i$ in the sense of [F1], and identifications $X\cong X_i\times_{\operatorname{Spec}A_i}\operatorname{Spec}A$ and $\mathcal F\cong q^*\mathcal F_i$ over $A$, where $q:X\to X_i$ is the projection. [F1, F2]

1.3 The stage is flat over its base local rings. Let $x\in X_i$ and put $\mathfrak p_i=f_i(x)$; the $\mathcal O_{X_i,x}$-module $(\mathcal F_i)_x$ has its $A_i$-action factoring through $A_i\to(A_i)_{\mathfrak p_i}$ and is flat over $A_i$ by 1.2. For every prime $\mathfrak q\subseteq(A_i)_{\mathfrak p_i}$, corresponding to a prime $\mathfrak p'_i\subseteq\mathfrak p_i$ of $A_i$, the change-of-rings isomorphism [F10] together with the identifications of [F5] gives $(\mathcal F_i)_x\otimes_{(A_i)_{\mathfrak p_i}}(A_i)_{\mathfrak p'_i}\cong(\mathcal F_i)_x\otimes_{A_i}(A_i)_{\mathfrak p'_i}$, the localisation of the $A_i$-module $(\mathcal F_i)_x$ at $\mathfrak p'_i$, and this is flat over $(A_i)_{\mathfrak p'_i}=((A_i)_{\mathfrak p_i})_{\mathfrak q}$ by [F4] and [F5]; hence $(\mathcal F_i)_x$ is flat over $(A_i)_{\mathfrak p_i}$ by the local flatness criterion [F5]. [F4, F5, F10]

1.4 The Noetherian-stage complex. By 1.3 and [F3] applied to $f_i$ and $\mathcal F_i$ there are an integer $r\ge0$ and a bounded complex $K_i^\bullet$ of finite projective $A_i$-modules, concentrated in degrees $0,\dots,r$ and finite free in all positive degrees, with canonical isomorphisms $H^q(K_i^\bullet\otimes_{A_i}A'_i)\cong H^q((X_i)_{A'_i},(\mathcal F_i)_{A'_i})$ for every $A_i$-algebra $A'_i$ and every $q$, natural in $A'_i$ and compatible with composition; moreover $K_i^\bullet$ becomes a bounded complex of finite free modules on some open cover of $\operatorname{Spec}A_i$. [F3]

1.5 Base change of finite projective modules. If $P$ is a finitely generated projective $A_i$-module, then $P\otimes_{A_i}A$ is a finitely generated projective $A$-module: choosing finitely many generators gives a surjection $A_i^n\to P$ [F7], projectivity of $P$ splits it so that $P$ is a direct summand of $A_i^n$ [F7], tensoring with $A$ is right exact and carries the splitting section to a splitting section [F8], the identification $A_i^n\otimes_{A_i}A\cong A^n$ follows from the unit isomorphism $A_i\otimes_{A_i}A\cong A$ and compatibility with finite direct sums [F5, F8], so $P\otimes_{A_i}A$ is both a quotient and a direct summand of the free $A$-module $A^n$; hence it is finitely generated and projective over $A$ by [F9]. [F5, F7, F8, F9]

1.6 The complex and its coefficient change. Put $K^\bullet:=K_i^\bullet\otimes_{A_i}A$, a bounded complex of finite projective $A$-modules concentrated in degrees $0,\dots,r$ and finite free in positive degrees by 1.5 and [F13]; for every $A$-algebra $A'$ the associativity and unit isomorphisms of [F5] applied to the $A_i$-module $K_i^j$ and the ring $A$ give canonical isomorphisms $K_i^j\otimes_{A_i}A'\cong(K_i^j\otimes_{A_i}A)\otimes_A(A\otimes_AA')\cong K^j\otimes_AA'$ because $A\otimes_AA'\cong A'$, natural in $A'$ and compatible with composition, hence an isomorphism of complexes $K_i^\bullet\otimes_{A_i}A'\cong K^\bullet\otimes_AA'$. [F5, F13]

1.7 The base-changed geometry. Under the identification $X\cong X_i\times_{\operatorname{Spec}A_i}\operatorname{Spec}A$ of 1.2, iterated base change [F11] with $\operatorname{Spec}A'\to\operatorname{Spec}A\to\operatorname{Spec}A_i$ gives, for every $A$-algebra $A'$, a canonical isomorphism $\psi:X_{A'}=(X_i\times_{\operatorname{Spec}A_i}\operatorname{Spec}A)\times_{\operatorname{Spec}A}\operatorname{Spec}A'\cong X_i\times_{\operatorname{Spec}A_i}\operatorname{Spec}A'=(X_i)_{A'}$ that is compatible with the projections to $X_i$. [F11]

1.8 The base-changed sheaf. The identification $\mathcal F\cong q^*\mathcal F_i$ of 1.2 and the composition rule for pullbacks [F12] give canonical identifications $\mathcal F_{A'}=p^*\mathcal F\cong p^*q^*\mathcal F_i\cong(q\circ p)^*\mathcal F_i$, while $(\mathcal F_i)_{A'}=(q')^*\mathcal F_i$ for the projection $q':(X_i)_{A'}\to X_i$; since $q'\circ\psi=q\circ p$ by 1.7, the isomorphism $\psi$ identifies these two pullbacks canonically, so $\mathcal F_{A'}\cong(\mathcal F_i)_{A'}$ naturally in $A'$ and compatibly with composition of $A$-algebra maps. [F12]

1.9 The comparison isomorphism. For every $A$-algebra $A'$ and every $q\in\mathbb Z$ compose the isomorphism $H^q(K^\bullet\otimes_AA')\cong H^q(K_i^\bullet\otimes_{A_i}A')$ of 1.6 with the isomorphism $H^q(K_i^\bullet\otimes_{A_i}A')\cong H^q((X_i)_{A'},(\mathcal F_i)_{A'})$ of 1.4 applied to the $A_i$-algebra $A'$, and with the identification $H^q((X_i)_{A'},(\mathcal F_i)_{A'})\cong H^q(X_{A'},\mathcal F_{A'})$ induced by 1.7 and 1.8; each constituent is canonical, natural in $A'$ and compatible with composition of $A$-algebra maps, so the composite $H^q(K^\bullet\otimes_AA')\cong H^q(X_{A'},\mathcal F_{A'})$ is as well. [algebra]

1.10 Local finite freeness. By 1.4 there is an open cover of $\operatorname{Spec}A_i$ by affine opens $V_j$ such that $K_i^\bullet\otimes_{A_i}\mathcal O(V_j)$ is a bounded complex of finite free $\mathcal O(V_j)$-modules; by [F11] the preimages $V'_j\subseteq\operatorname{Spec}A$ are affine opens with $\mathcal O(V'_j)\cong A\otimes_{A_i}\mathcal O(V_j)$ and they cover $\operatorname{Spec}A$. For each $j$ the associativity and unit identifications of [F5] give $K^\bullet\otimes_A\mathcal O(V'_j)\cong(K_i^\bullet\otimes_{A_i}\mathcal O(V_j))\otimes_{\mathcal O(V_j)}\mathcal O(V'_j)$, a bounded complex that is finite free over $\mathcal O(V'_j)$ because extension of scalars of a free module is free [F8]; hence $K^\bullet$ is finite free locally on $\operatorname{Spec}A$. [F5, F8, F11]

2.1 Boundaries and choice accounting. If $X=\varnothing$ the stage of 1.2 may be taken with $X_i=\varnothing$, the stage complex is the zero complex with $r=0$ by 1.4, and for every $A'$ the scheme $X_{A'}$ is empty with vanishing cohomology, so both sides of 1.9 vanish; if $\mathcal F=0$ the same argument applies with $\mathcal F_i=0$; if $A=0$ then $\operatorname{Spec}A=\varnothing$ and $X=\varnothing$, and if $A'=0$ then $X_{A'}=\varnothing$ and $K^\bullet\otimes_AA'=0$; the one-member case $r=0$ is covered because 1.4 and 1.5 leave $K^\bullet$ concentrated in degree $0$; for $q<0$ both sides of 1.9 vanish, and for $q>r$ the complex $K^\bullet\otimes_AA'$ is concentrated in degrees $0,\dots,r$ by 1.6 while $H^q((X_i)_{A'},(\mathcal F_i)_{A'})=0$ by 1.4; if $A$ is finitely generated over $\mathbb Z$ the stage $A_i=A$ of [F1] is trivial, 1.2 and 1.3 are identities, and 1.9 reduces to [F3]. The Axiom of Choice is used through [F1] in 1.2 and through the projectivity characterisation [F9] in 1.5; the Axiom of Dependent Choice is consumed by [F3] in 1.4; no other selection is made. [F1, F3, F9, F14] ∎
