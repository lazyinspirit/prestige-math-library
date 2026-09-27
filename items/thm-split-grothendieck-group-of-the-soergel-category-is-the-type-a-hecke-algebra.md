---
id: thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra
kind: theorem
title: "The split Grothendieck group of the Soergel category is the type-A Hecke algebra"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-the-diagrammatic-character-is-the-split-k-zero-hecke-isomorphism, thm-type-a-diagrammatic-and-bimodule-soergel-categories-are-equivalent, lem-the-rank-one-soergel-bimodule-square-splits, def-type-a-hecke-algebra-in-soergel-normalization, lem-type-a-hecke-standard-basis-for-soergel-comparison, def-split-grothendieck-rings-of-type-a-soergel-categories, def-the-type-a-soergel-category, def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §§3, 5–7"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §§2–5"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$ and $k=\mathbb Q$, let $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ be
the split Grothendieck ring of the type-A Soergel category
([[def-split-grothendieck-rings-of-type-a-soergel-categories]],
[[def-the-type-a-soergel-category]]) and let $H_{S_n}$ be the type-A Hecke
algebra over $A=\mathbb Z[v,v^{-1}]$ with $q=v^{-2}$ and normalized generators
$H_i=v(T_i+1)$
([[def-type-a-hecke-algebra-in-soergel-normalization]]). Then there is an
isomorphism of $\mathbb Z[v,v^{-1}]$-algebras
$$\Phi:K_0^{\mathrm{split}}(\mathrm{SBim}_n)\longrightarrow H_{S_n},\qquad \Phi([B_i])=H_i=v(T_i+1)\quad(1\le i\le n-1),\qquad \Phi(vX)=v\,\Phi(X),$$
equivalently $\Phi^{-1}(T_i)=v^{-1}[B_i]-1$ for every simple reflection. In
particular the classes satisfy
$$[B_i]^2=(v+v^{-1})[B_i]\qquad\text{in }K_0^{\mathrm{split}}(\mathrm{SBim}_n),$$
in agreement with the quadratic relation $H_i^2=(v+v^{-1})H_i$ of the Hecke
algebra, and $\Phi$ is the unique algebra isomorphism with $\Phi([B_i])=H_i$
and $\Phi(v)=v$, because the classes of the $B_i$ together with $v^{\pm1}$
generate $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ as a
$\mathbb Z[v,v^{-1}]$-algebra.

## Facts & Assumptions
**Given:** The type-A Soergel category $\mathrm{SBim}_n$ with its split Grothendieck ring $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$, the diagrammatic category $D$ with $\operatorname{Kar}(D)$, the equivalence $\operatorname{Kar}(\mathcal F):\operatorname{Kar}(D)\to\mathrm{SBim}_n$, the Hecke algebra $H_{S_n}$ with its normalized generators $H_i$, and the simple reflections $s_i$.

[F1] The diagrammatic character is an isomorphism of $\mathbb Z[v,v^{-1}]$-algebras $\mathrm{ch}:K_0^{\mathrm{split}}(\operatorname{Kar}(D))\to H_{S_n}$ with $\mathrm{ch}([D_i])=H_i=v(T_i+1)$ for every simple reflection, $\mathrm{ch}(vX)=v\,\mathrm{ch}(X)$, and $\mathrm{ch}(D_w)=\widetilde T_w+\sum_{y<w}g_{y,w}\widetilde T_y$ triangular with unit diagonal in the standard basis $\{\widetilde T_w=v^{\ell(w)}T_w\}$ of [[lem-type-a-hecke-standard-basis-for-soergel-comparison]] ([[thm-the-diagrammatic-character-is-the-split-k-zero-hecke-isomorphism]]).

[F2] The evaluation functor $\operatorname{Kar}(\mathcal F):\operatorname{Kar}(D)\to\mathrm{SBim}_n$ is an equivalence of graded monoidal categories: it is full, faithful and essentially surjective, it preserves finite direct sums, tensor products, the unit and the shifts, and on the hom spaces it is a degree-preserving bijection ([[thm-type-a-diagrammatic-and-bimodule-soergel-categories-are-equivalent]]).

[F3] $K_0^{\mathrm{split}}$ is defined on a fixed small skeleton: $K_0^{\mathrm{split}}(C)=\bigl(\bigoplus_{X\in\operatorname{sk}(C)}\mathbb Z[X]\bigr)/\langle[X]-[X']-[X'']:X\cong X'\oplus X''\rangle$, the product is $[X][Y]=[X\otimes Y]$, the shift is $v[X]=[X(1)]=[X\{-1\}]$, and for $\mathrm{SBim}_n$ one may take for the skeleton the graded direct summands of finite direct sums of shifts of Bott–Samelson bimodules with a fixed underlying set of words ([[def-split-grothendieck-rings-of-type-a-soergel-categories]]).

[F4] Every object of $\mathrm{SBim}_n$ is a pair $(M,e)$ with $M$ a finite direct sum of shifts of Bott–Samelson products and $e$ a degree-zero idempotent; the tensor product is $(M,e)\otimes_R(N,f)=(M\otimes_RN,e\otimes f)$, and a morphism $u:(M,e)\to(N,f)$ satisfies $fu=u=ue$ ([[def-the-type-a-soergel-category]]).

[F5] The rank-one square: for a simple reflection $s$ there is an isomorphism of graded bimodules $B_s\otimes_RB_s\cong B_s(1)\oplus B_s(-1)$, i.e. $B_s\otimes_RB_s\cong B_s\{-1\}\oplus B_s\{1\}$, with non-isomorphic summands ([[lem-the-rank-one-soergel-bimodule-square-splits]]).

[F6] The normalized Hecke generators satisfy $H_i=v(T_i+1)$, $T_i=v^{-1}H_i-1$, $q=v^{-2}$ and $H_i^2=(v+v^{-1})H_i$; the products of the $H_i$ along reduced words are a triangular $A$-basis of $H_n$ with unit diagonal against the normalized standard basis $\{\widetilde T_w\}$ ([[def-type-a-hecke-algebra-in-soergel-normalization]], [[lem-type-a-hecke-standard-basis-for-soergel-comparison]]).

## Proof

1.1 Comparison of the skeleta: let $(M,e)$ be a representative object of $\mathrm{SBim}_n$; by [F2] the functor $\operatorname{Kar}(\mathcal F)$ is essentially surjective with a degree-preserving bijection on hom spaces, and by [F4] $M$ is a given finite direct sum of shifts of Bott–Samelson products, so $M=\mathcal F(X)$ for the corresponding finite direct sum $X$ of shifts of words in the additive closure of $D$ and $e$ has a unique preimage $\widetilde e$ because $\operatorname{Kar}(\mathcal F)$ is injective on $\operatorname{End}(X)$; the assignment $(M,e)\mapsto(X,\widetilde e)$ is compatible with direct sums, tensor products, the unit, shifts and degrees, so it induces a $\mathbb Z[v,v^{-1}]$-algebra isomorphism $\Psi:K_0^{\mathrm{split}}(\mathrm{SBim}_n)\to K_0^{\mathrm{split}}(\operatorname{Kar}(D))$ with $\Psi([B_i])=[D_i]$ and $\Psi(vX)=v\,\Psi(X)$, the relations of [F3] corresponding on the two sides. [F2, F3, F4]

2.1 The character transport: by [F1] the diagrammatic character is an isomorphism of $\mathbb Z[v,v^{-1}]$-algebras and by step 1.1 so is $\Psi$, hence $\Phi:=\mathrm{ch}\circ\Psi$ is an isomorphism of $\mathbb Z[v,v^{-1}]$-algebras $K_0^{\mathrm{split}}(\mathrm{SBim}_n)\to H_{S_n}$ with $\Phi([B_i])=\mathrm{ch}([D_i])=H_i$ and $\Phi(vX)=v\,\Phi(X)$. [F1, step 1.1]

3.1 The quadratic relation: by [F5] $B_i\otimes_RB_i\cong B_i(1)\oplus B_i(-1)$, so the product and shift rules of [F3] give $[B_i]^2=[B_i\otimes_RB_i]=[B_i(1)]+[B_i(-1)]=v[B_i]+v^{-1}[B_i]=(v+v^{-1})[B_i]$; the corresponding Hecke identity $H_i^2=(v+v^{-1})H_i$ is the expansion recorded in [F6], and applying the algebra isomorphism $\Phi$ of step 2.1 to the displayed K-theoretic identity gives exactly that Hecke identity because $\Phi([B_i])=H_i$ and $\Phi$ is $\mathbb Z[v,v^{-1}]$-linear. [F3, F5, F6, step 2.1]

3.2 The inverse on the generators: by [F6] $T_i=v^{-1}H_i-1$, so applying the inverse of the isomorphism $\Phi$ of step 2.1 gives $\Phi^{-1}(T_i)=v^{-1}[B_i]-1$ in $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$. [F6, step 2.1]

4.1 Uniqueness and conclusion: generation is deduced from the isomorphism of step 2.1, not from the skeleton description. By [F6] $T_i=v^{-1}H_i-1$, so the normalized generators $H_i$ together with $v^{\pm1}$ generate $H_{S_n}$ as a $\mathbb Z[v,v^{-1}]$-algebra, since the $T_i$ present $H_{S_n}$. Let $S\subseteq K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ be the $\mathbb Z[v,v^{-1}]$-subalgebra generated by the classes $[B_i]$ and $v$: by step 2.1 $\Phi$ is an isomorphism onto $H_{S_n}$ and $\Phi(S)$ contains $v$ and every $\Phi([B_i])=H_i$, so $\Phi(S)=H_{S_n}$ and injectivity of $\Phi$ gives $S=K_0^{\mathrm{split}}(\mathrm{SBim}_n)$. Thus the classes of the $B_i$ together with $v^{\pm1}$ do generate the ring, and an algebra homomorphism out of it is determined by its values on the $[B_i]$ and on $v$; hence $\Phi$ is the unique algebra isomorphism with $\Phi([B_i])=H_i$ and $\Phi(v)=v$. The triangular basis statement is transported from [F1] along $\Psi$: $\Phi\bigl(\Psi^{-1}([D_w])\bigr)=\mathrm{ch}([D_w])=\widetilde T_w+\sum_{y<w}g_{y,w}\widetilde T_y$ is a triangular basis of $H_n$ with unit diagonal over the normalized standard basis $\{\widetilde T_w\}$, and by [F6] the products of the $H_i$ along reduced words are triangular over the same standard basis, so the two bases are compared by the displayed values of $\Phi$ and $\Phi^{-1}$. ∎ [F1, F3, F6, step 2.1, step 3.1, step 3.2]



**(a) What is imported and what is proved here.** The algebra isomorphism on the diagrammatic side is Elias–Williamson's character isomorphism, recorded as imported result 7 of [[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]] and proved as an item of this page; the work of this item is the transport of that isomorphism across the equivalence of [[thm-type-a-diagrammatic-and-bimodule-soergel-categories-are-equivalent]] and the check that the transported classes of the elementary bimodules are the normalized Hecke generators.

**(b) Products of elementary classes are not generally Kazhdan–Lusztig basis elements.** The classes $[B_i]$ satisfy $[B_i]^2=(v+v^{-1})[B_i]$ and the braid-type relation $[B_i][B_{i+1}][B_i]+[B_{i+1}]=[B_{i+1}][B_i][B_{i+1}]+[B_i]$ obtained from the two rank-two decompositions; each $[B_i]$ is a simple Kazhdan–Lusztig basis element, but their products are generally not single basis elements; the elementary classes are the images of the normalized generators, exactly as the display $\Phi([B_i])=H_i=v(T_i+1)$ records. In particular the relation $[B_i][B_j]=[B_j][B_i]$ holds for distant colours only, and the ring $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ is non-commutative as soon as $n\ge3$, since $[B_1B_2]\ne[B_2B_1]$ in the basis transported from [F1].

**(c) Choice.** The ring $K_0^{\mathrm{split}}$ is defined on the fixed skeletons of [F3], and the comparison of step 1.1 uses the presentation of a representative object by its underlying word data, which is part of the data of the skeleton element; no choice principle beyond the fixed skeletons already recorded in the definition of [F3] is used.
