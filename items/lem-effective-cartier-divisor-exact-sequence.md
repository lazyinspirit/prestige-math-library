---
id: lem-effective-cartier-divisor-exact-sequence
kind: lemma
title: "Effective Cartier divisors give a short exact sequence"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-effective-cartier-divisor
  - thm-effective-cartier-divisor-closed-immersion
  - def-invertible-sheaf-of-cartier-divisor
  - def-closed-immersion-schemes
  - def-exact-sequence-sheaves
  - def-kernel-cokernel-image-sheaves
  - def-stalk-of-presheaf
  - thm-sheafification-preserves-stalks
  - thm-exactness-of-sheaves-stalkwise
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, §31.15 Remark 15.11 and Lemma 15.2"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.2–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Let $X$ be a scheme, let $D$ be an effective Cartier divisor on $X$ with
closed immersion $i:D\hookrightarrow X$ and ideal sheaf $I_D$ as in
[[thm-effective-cartier-divisor-closed-immersion]], and let
$\mathcal O_X(-D)$ be the associated invertible sheaf
([[def-invertible-sheaf-of-cartier-divisor]]). Then there is a short exact
sequence of $\mathcal O_X$-modules
$$0\longrightarrow\mathcal O_X(-D)\longrightarrow\mathcal O_X\longrightarrow i_*\mathcal O_D\longrightarrow 0,$$
where the first map is the inclusion $I_D\subseteq\mathcal O_X$ read through
the identification $\mathcal O_X(-D)=I_D$, and the second is the surjection
$\mathcal O_X\to i_*\mathcal O_D$ defining the closed immersion
([[def-closed-immersion-schemes]], [[def-exact-sequence-sheaves]]).

## Facts & Assumptions

**Given:** An effective Cartier divisor $D$ on a scheme $X$ with a
local-equation datum $\{(U_i,f_i)\}$ of regular equations
([[def-effective-cartier-divisor]]).

[F1] $D$ determines a closed immersion $i:D\hookrightarrow X$ whose ideal
sheaf $I_D=\ker(\mathcal O_X\to i_*\mathcal O_D)$ satisfies
$I_D|_{U_i}=f_i\mathcal O_{U_i}$ and is invertible
([[thm-effective-cartier-divisor-closed-immersion]]).

[F2] For a Cartier divisor represented by the units $f_i$ one has
$\mathcal O_X(D)|_{U_i}=f_i^{-1}\mathcal O_{U_i}$ and
$\mathcal O_X(-D)|_{U_i}=f_i\mathcal O_{U_i}$; for effective $D$ this last
subsheaf is exactly the ideal sheaf $I_D$
([[def-invertible-sheaf-of-cartier-divisor]]).

[F3] A closed immersion $i$ has surjective structure map
$\mathcal O_X\to i_*\mathcal O_D$, so $i_*\mathcal O_D$ is the quotient of
$\mathcal O_X$ by the kernel of that map ([[def-closed-immersion-schemes]]).

[F4] A sequence of sheaves of modules is exact when at every term the image
sheaf equals the kernel sheaf ([[def-exact-sequence-sheaves]]).

[F5] The kernel sheaf of a morphism is computed objectwise, and the image
sheaf is the sheafification of the objectwise image
([[def-kernel-cokernel-image-sheaves]]).

[F6] The quotient sheaf $\mathcal O_X/I_D$ is the sheafification of the
presheaf $U\mapsto\mathcal O_X(U)/I_D(U)$ by [F3, F5]. Its stalk at $x$ is
the quotient $\mathcal O_{X,x}/I_{D,x}$. Sheafification preserves stalks
([[thm-sheafification-preserves-stalks]]), so the map from this quotient to
the quotient sheaf stalk is onto: every quotient-presheaf germ is represented
by a local quotient class, itself represented by a section of $\mathcal O_X$.
Its kernel is zero: if such a section's quotient class has zero germ, it is
the zero quotient class after restriction to a smaller neighbourhood by germ
equality, so the section there belongs to $I_D$. The given local equations
satisfy $I_D|_{U_i}=f_i\mathcal O_{U_i}$ by [F1], so
$I_{D,x}=(f_i)_x\mathcal O_{X,x}$
([[def-kernel-cokernel-image-sheaves]], [[def-stalk-of-presheaf]]).

[F7] A sequence of sheaves of abelian groups is exact if and only if all its
stalk sequences are exact ([[thm-exactness-of-sheaves-stalkwise]]).

## Proof

1.1 **Chartwise exactness.** On $U_i$ the sequence of $\mathcal O_{U_i}$-modules $0\to f_i\mathcal O_{U_i}\hookrightarrow\mathcal O_{U_i}\to\mathcal O_{U_i}/f_i\mathcal O_{U_i}\to0$ is exact. The first map is the inclusion of the ideal sheaf, hence injective, and the quotient map is surjective with kernel exactly that ideal. Multiplication by $f_i$ gives an isomorphism $\mathcal O_{U_i}\to f_i\mathcal O_{U_i}$: it is injective because every germ of $f_i$ is a nonzerodivisor and sectionwise injectivity can be checked on stalks, and it is surjective by the definition of the principal ideal sheaf. Thus the first term is also identified with $\mathcal O_{U_i}$ through the local equation, as required. [F1, F4, F5]

2.1 **Identifying the terms.** By [F1] and [F2] we have $\mathcal O_X(-D)|_{U_i}=f_i\mathcal O_{U_i}=I_D|_{U_i}$, and $\mathcal O_X(-D)=I_D$ as subsheaves of $\mathcal O_X$ because the identifications agree on overlaps. By [F3] the map $\mathcal O_X\to i_*\mathcal O_D$ is surjective with kernel $I_D$, so it induces an identification $i_*\mathcal O_D=\mathcal O_X/I_D$. Hence over $U_i$ the sequence of step 1.1 is the restriction of $0\to\mathcal O_X(-D)\to\mathcal O_X\to i_*\mathcal O_D\to0$. [F1, F2, F3, step 1.1]

3.1 **Stalk sequence.** Let $x\in U_i$. By [F1, F2] the stalk of $I_D$ at $x$ is $(f_i)_x\mathcal O_{X,x}$, and by [F6] the quotient map has that kernel and is surjective on the stalk. Thus the stalk sequence of the displayed sequence at $x$ is $0\to(f_i)_x\mathcal O_{X,x}\to\mathcal O_{X,x}\to\mathcal O_{X,x}/(f_i)_x\mathcal O_{X,x}\to0$, which is exact because the first map is injective and the second has kernel exactly the image of the first. [F6, step 1.1, step 2.1]

4.1 **Conclusion.** Every point of $X$ lies in some $U_i$, so all stalk sequences are exact; by the stalkwise criterion the sequence $0\to\mathcal O_X(-D)\to\mathcal O_X\to i_*\mathcal O_D\to0$ is exact. [F7, step 3.1] ∎

No choice principle is used: the equations are those of the given datum, and
the exactness is verified stalk by stalk. For the zero effective divisor the
ideal sheaf is $\mathcal O_X$, the closed subscheme is empty and the sequence
reads $0\to\mathcal O_X\to\mathcal O_X\to0\to0$; if $X=\varnothing$ all three
sheaves are the zero sheaf and the sequence is exact as well.
