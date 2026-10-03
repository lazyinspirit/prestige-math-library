---
id: lem-euler-characteristic-twist-integral-proper-curve
kind: lemma
title: "Twisting a coherent sheaf by an invertible sheaf on an integral proper curve"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-degree-invertible-sheaf-proper-dimension-one
  - def-dimension-noetherian-topological-space
  - def-euler-characteristic-coherent-sheaf
  - def-field
  - def-integral-scheme
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-proper-morphism
  - def-sheaf-tensor-product
  - def-stalk-of-presheaf
  - def-support-module-sheaf
  - lem-coherent-devissage-one-generic-generator
  - lem-euler-characteristic-additive-short-exact
  - lem-euler-characteristic-finite-support-twist-invariance
  - lem-tensor-qc-modules-quasi-coherent
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-exactness-of-sheaves-stalkwise
  - thm-localisation-of-modules-is-exact
  - thm-rank-nullity
  - thm-unit-isomorphisms-for-module-tensor-products
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: devissage
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Varieties, Section 33.44 (Degrees on curves), Lemma 33.44.5 (tag 0AYV)"
      url: "https://stacks.math.columbia.edu/tag/0AYQ"
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.12.6 (tag 01YI), devissage of coherent sheaves"
      url: "https://stacks.math.columbia.edu/tag/01YI"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field
([[def-field]]) and let $X$ be an integral ([[def-integral-scheme]]) proper
$k$-scheme ([[def-proper-morphism]]) whose underlying topological space has
dimension one ([[def-dimension-noetherian-topological-space]]). Let
$\mathcal L$ be an invertible $\mathcal O_X$-module
([[def-invertible-sheaf]]) and let $\mathcal F$ be a coherent
$\mathcal O_X$-module ([[def-coherent-module-scheme]]); let $\xi$ be the
generic point of $X$ and let
$$r:=\dim_{\kappa(\xi)}\mathcal F_\xi$$
be the rank of $\mathcal F$ at $\xi$. Then
$$\chi(X,\mathcal L\otimes_{\mathcal O_X}\mathcal F)=r\cdot\deg_X(\mathcal L)+\chi(X,\mathcal F),$$
with $\deg_X$ as in [[def-degree-invertible-sheaf-proper-dimension-one]] and
$\chi$ the Euler characteristic of [[def-euler-characteristic-coherent-sheaf]].

## Facts & Assumptions

**Given:** a field $k$, an integral proper $k$-scheme $X$ of dimension one, an invertible $\mathcal O_X$-module $\mathcal L$, a coherent $\mathcal O_X$-module $\mathcal F$, the generic point $\xi$ of $X$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] Set-up: since $X$ is proper over the field $k$ it is of finite type over $k$, and its affine charts are spectra of Noetherian rings, so $X$ is locally Noetherian and quasi-compact, hence Noetherian ([[def-proper-morphism]], [[def-locally-noetherian-and-noetherian-scheme]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]). On the locally Noetherian scheme $X$ a quasi-coherent module is coherent if and only if it is of finite type ([[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-coherent-module-scheme]]), and $\chi(X,\mathcal G)$ is defined for every coherent $\mathcal G$ ([[def-euler-characteristic-coherent-sheaf]]).

[F2] Generic point and rank: because $X$ is integral it has a unique generic point $\xi$, and $\kappa(\xi)=\mathcal O_{X,\xi}$ is its function field; the stalk of a coherent module at $\xi$ is a finite-dimensional $\kappa(\xi)$-vector space, so $r=\dim_{\kappa(\xi)}\mathcal F_\xi$ is a finite integer ([[def-integral-scheme]], [[def-dimension-noetherian-topological-space]]). The degree is defined by $\deg_X(\mathcal L)=\chi(X,\mathcal L)-\chi(X,\mathcal O_X)$ ([[def-degree-invertible-sheaf-proper-dimension-one]]).

[F3] Exactness of twisting: an invertible module is locally free of rank one ([[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]]), and tensoring with a locally free module is exact: exactness of a sequence of sheaves is stalkwise ([[thm-exactness-of-sheaves-stalkwise]]), at each point the stalk of $\mathcal L$ is free of rank one, and tensoring modules over a ring by a free module preserves kernels and cokernels. Tensor products of quasi-coherent modules are quasi-coherent ([[lem-tensor-qc-modules-quasi-coherent]]), and the tensor product of an invertible module with a coherent module is coherent: the question is local, and on an affine open trivialising $\mathcal L$ the unit isomorphism of [[thm-unit-isomorphisms-for-module-tensor-products]] identifies $\mathcal L\otimes\mathcal G$ with $\mathcal G$ for a coherent $\mathcal G$, while coherence is a local condition ([[def-coherent-module-scheme]], [[thm-coherent-sheaves-abelian-noetherian-scheme]]).

[L1] Euler characteristic is additive in short exact sequences of coherent modules on the proper $k$-scheme $X$: $\chi(X,\mathcal F)=\chi(X,\mathcal F')+\chi(X,\mathcal F'')$ ([[lem-euler-characteristic-additive-short-exact]]).

[L2] For a short exact sequence $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ of coherent sheaves, the stalk sequence at $\xi$ is a short exact sequence of $\kappa(\xi)$-vector spaces ([[thm-exactness-of-sheaves-stalkwise]], [[thm-localisation-of-modules-is-exact]]), and dimension is additive on short exact sequences ([[thm-rank-nullity]]); hence $r(\mathcal F)=r(\mathcal F')+r(\mathcal F'')$.

[L3] Noetherian devissage ([[lem-coherent-devissage-one-generic-generator]]): let $\mathcal P$ be a property of coherent $\mathcal O_X$-modules which holds for the zero module and satisfies the two-of-three property in every short exact sequence of coherent modules. Suppose that for every integral closed subscheme $Z\subseteq X$ with generic point $\eta$ there is a coherent $\mathcal O_X$-module $\mathcal G$ with $\operatorname{Supp}(\mathcal G)\subseteq Z$, whose stalk $\mathcal G_\eta$ is annihilated by $\mathfrak m_\eta$ and is one-dimensional over $\kappa(\eta)$, and for which $\mathcal P(\mathcal G)$ holds. Then $\mathcal P$ holds for every coherent $\mathcal O_X$-module.

[L4] The closed points: for a closed point $p\in X$ the canonical morphism $i:\operatorname{Spec}\kappa(p)\to X$ is a closed immersion, $i_*\kappa(p)$ is a coherent $\mathcal O_X$-module with support $\{p\}$, and $\mathcal L\otimes i_*\kappa(p)\cong i_*\kappa(p)$; moreover $\chi(X,i_*\kappa(p))=[\kappa(p):k]$ ([[lem-euler-characteristic-finite-support-twist-invariance]], [[def-support-module-sheaf]]).

[L5] The integral closed subschemes of the one-dimensional Noetherian space $X$ are $X$ itself and the closed points: a proper irreducible closed subset of the integral one-dimensional Noetherian scheme $X$ has dimension zero (otherwise a length-one chain inside it extends to a length-two chain in $X$), and an integral zero-dimensional scheme consists of its single generic point, which is then closed ([[def-dimension-noetherian-topological-space]], [[def-integral-scheme]]).

[L6] The Axiom of Choice enters through the Euler-characteristic, additivity and devissage suppliers [L1]–[L4]; the tensor and stalk computations below make no selection.

## Proof

**Proof technique:** devissage on the Noetherian scheme $X$ for the property $P(\mathcal G)$: "$\chi(X,\mathcal L\otimes\mathcal G)=r(\mathcal G)\deg_X(\mathcal L)+\chi(X,\mathcal G)$".

1.1 The property $P$ and its defect. For a coherent $\mathcal O_X$-module $\mathcal G$ define $P(\mathcal G)$ to be the identity $\chi(X,\mathcal L\otimes\mathcal G)=r(\mathcal G)\deg_X(\mathcal L)+\chi(X,\mathcal G)$, and define the defect $D(\mathcal G):=\chi(X,\mathcal L\otimes\mathcal G)-r(\mathcal G)\deg_X(\mathcal L)-\chi(X,\mathcal G)$, so that $P(\mathcal G)$ holds exactly when $D(\mathcal G)=0$. The tensor products and stalks appearing are coherent and finite-dimensional by [F1]–[F3]. [F1, F2, F3]

1.2 Additivity of the defect. Let $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ be a short exact sequence of coherent $\mathcal O_X$-modules. Tensoring with $\mathcal L$ preserves exactness by [F3], so $0\to\mathcal L\otimes\mathcal F'\to\mathcal L\otimes\mathcal F\to\mathcal L\otimes\mathcal F''\to0$ is short exact with coherent terms, and $\chi(X,\mathcal L\otimes\mathcal F)=\chi(X,\mathcal L\otimes\mathcal F')+\chi(X,\mathcal L\otimes\mathcal F'')$ by [L1]; likewise $\chi(X,\mathcal F)=\chi(X,\mathcal F')+\chi(X,\mathcal F'')$; and $r(\mathcal F)=r(\mathcal F')+r(\mathcal F'')$ by [L2]. Subtracting the last two identities from the first gives $D(\mathcal F)=D(\mathcal F')+D(\mathcal F'')$. In particular, if two of $D(\mathcal F'),D(\mathcal F),D(\mathcal F'')$ vanish then so does the third, and $D(0)=0$ because the zero sheaf has zero cohomology and zero rank. [F3, L1, L2]

1.3 The integral closed subschemes. By [L5] every integral closed subscheme $Z\subseteq X$ is either $X$ itself or a closed point $\{p\}$; in the first case the generic point of $Z$ is $\xi$ itself, and in the second case the generic point of $Z$ is $p$, with residue field $\kappa(p)$. [L5]

2.1 Witness on $X$. Take $\mathcal G=\mathcal O_X$: it is coherent, its support is $X$, its stalk at the generic point is $\kappa(\xi)$ (so its generic stalk is annihilated by the maximal ideal $\mathfrak m_\xi\subseteq\mathcal O_{X,\xi}$ and has dimension one over $\kappa(\xi)$), and $P(\mathcal O_X)$ holds because $r(\mathcal O_X)=1$ and $\chi(X,\mathcal L\otimes\mathcal O_X)=\chi(X,\mathcal L)=1\cdot\deg_X(\mathcal L)+\chi(X,\mathcal O_X)$ by the definition of $\deg_X$. [F2, step 1.1]

2.2 Witness on a closed point. Let $p$ be a closed point and take $\mathcal G=i_*\kappa(p)$ as in [L4]. It is coherent, its support is $\{p\}\subseteq\{p\}$, its stalk at the generic point $p$ of the closed subscheme is $\kappa(p)$ (annihilated by the maximal ideal $\mathfrak m_p$ and one-dimensional over $\kappa(p)$), and $P(i_*\kappa(p))$ is the identity $\chi(X,\mathcal L\otimes i_*\kappa(p))=\chi(X,i_*\kappa(p))$, which holds by the twist-invariance clause of [L4]. [L4, step 1.1]

3.1 Devissage. By steps 1.2–2.2 the property $P$ satisfies all hypotheses of [L3]: it holds for $0$, it has the two-of-three property, and it holds on every integral closed subscheme of $X$ (witnesses $\mathcal O_X$ for $X$ itself and $i_*\kappa(p)$ for each closed point $p$). Therefore $P$ holds for every coherent $\mathcal O_X$-module, in particular for the given $\mathcal F$: $\chi(X,\mathcal L\otimes\mathcal F)=r\cdot\deg_X(\mathcal L)+\chi(X,\mathcal F)$, which is the asserted identity. [L3, step 1.2, step 1.3, step 2.1, step 2.2]

4.1 Consequence for invertible twists. If $\mathcal F$ is itself invertible with generic rank $r=1$, the identity reads $\chi(X,\mathcal L\otimes\mathcal F)=\deg_X(\mathcal L)+\chi(X,\mathcal F)$, whence $\deg_X(\mathcal L\otimes\mathcal F)=\deg_X(\mathcal L)+\deg_X(\mathcal F)$; this will be used through the additivity theorem on curves. [F2, step 3.1]

5.1 Choice accounting and conclusion. Step 3.1 proves the displayed identity for arbitrary coherent $\mathcal F$ and step 4.1 records the rank-one case. The Axiom of Choice enters exactly through the suppliers recorded in [L6]: the Euler-characteristic and additivity technology [L1], the stalk and dimension additivity [L2], the devissage lemma [L3] and the closed-point twist invariance [L4]; the scheme, the sheaf $\mathcal L$ and the point $\xi$ are given, and steps 1.1–4.1 make no selection. [L6, step 3.1, step 4.1] ∎
