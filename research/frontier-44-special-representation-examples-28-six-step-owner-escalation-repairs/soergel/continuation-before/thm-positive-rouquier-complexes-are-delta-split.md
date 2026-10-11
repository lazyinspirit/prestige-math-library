---
id: thm-positive-rouquier-complexes-are-delta-split
kind: theorem
title: "Positive Rouquier complexes are Delta-split"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [lem-type-a-support-filtration-multiplicities-are-intrinsic, def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category, def-real-type-a-soergel-category-and-scalar-extension, def-positive-and-negative-rouquier-generator-complexes, def-rouquier-complex-of-a-braid-word, thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence, def-type-a-standard-graph-bimodules-support-filtrations-and-character, lem-type-a-graph-bimodule-extension-vanishing, lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations, lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category, lem-type-a-soergel-generators-are-finite-free-on-both-sides]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Libedinsky-Williamson, Standard objects in 2-braid groups (arXiv:1205.4206; Proc. London Math. Soc. 109 (2014) 1264-1280)"
      url: "https://arxiv.org/pdf/1205.4206"
      locator: "Proposition 3.7 and its proof (Sections 3.2-3.4)"
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Proposition 6.8 (quoted from [LW, Proposition 3.7]) and the surrounding Section 6.4"
    - title: "Gobet, Twisted filtrations of Soergel bimodules and linear Rouquier complexes (arXiv:1601.00339; J. Algebra 484 (2017) 275-309)"
      url: "https://arxiv.org/pdf/1601.00339"
      locator: "Section 5.2 (generalized Libedinsky-Williamson formula) and Section 6 for the dual statement"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** A reduced expression $\underline x=s_1\cdots s_m$ for $x$, the positive generator complex $F_s=[B_s\xrightarrow{\mu}R(1)]$ in degrees $0,1$, and the upper Bruhat support-layer functors ([[def-positive-and-negative-rouquier-generator-complexes]], [[def-rouquier-complex-of-a-braid-word]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F1] Graph flags are locally proved and have their intrinsic canonical Bruhat layers. An extension between the pair $R_y,R_{ys}$ splits when the right action is restricted to $R^s$: in its right-linear presentation the anti-invariant coordinate has matrix $\begin{pmatrix}a&h\\0&-a\end{pmatrix}$, whose square is $a^2I$, while right-$s$-invariants have identical diagonal action ([[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]], [[lem-type-a-support-filtration-multiplicities-are-intrinsic]], [[lem-type-a-graph-bimodule-extension-vanishing]]).

[F2] The right tensor with $B_s$ is exact on these carriers and preserves finite right freeness; support is changed from a set $A$ to at most $A\cup As$ ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]], [[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]]).

[F3] Minimalization removes split contractible two-term complexes and leaves a homotopy-equivalent direct summand ([[lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category]]). Applying any additive support-layer functor preserves its contracting homotopy.

## Statement

Let $\underline x$ be a reduced expression for $x\in S_n$ and let $F_{\underline x}$ be the Rouquier complex $F_{s_1}\cdots F_{s_m}$ (or its minimal subcomplex). Then for every $y\in S_n$ there is an isomorphism in the homotopy category of graded bimodules
$$\Gamma_{\ge y}(F_{\underline x})/\Gamma_{>y}(F_{\underline x})\;\cong\;\begin{cases}\Delta_x,&y=x,\\0,&y\ne x,\end{cases}$$
where $\Delta_x=R_x(-\ell(x))$. Equivalently: the Bruhat support subquotient of a positive Rouquier complex is contractible except in the top layer $\Delta_x$; $F_{\underline x}$ is $\Delta$-split in the sense that each of its support subquotients is a direct sum of standard bimodules, and the top layer is a single $\Delta_x$. No positivity of characters and no assumption $\mathrm{S}$ is used; the statement is unconditional for every finite type-$A$ Coxeter group and the coordinate reflection realization.

## Proof

1.1 Induct on the word length. For the empty word $F_e=R$ has just $\Delta_e$; for one letter the exact rank-one sequence is $0\to R_s(-1)\to B_s\xrightarrow{\mu}R(1)\to0$. Its upper $s$ layer is $R_s(-1)=\Delta_s$, and its identity layer is the isomorphism $R(1)\to R(1)$, hence contractible. This starts the induction directly for positive complexes; no inverse generator is identified with a positive one. [base, given, F1]

2.1 Choose a Bruhat-compatible enumeration grouped into right-$s$ cosets, listing $y$ before $ys$ when $y<ys$. This exists by ordering the minimal representatives of the finite cosets in Bruhat order and refining each pair; the lifting property from reduced subwords ensures that different coset comparisons respect this order. Every union of complete initial or terminal cosets is right-$s$-stable. For such a set $A$, $\Gamma_A(MB_s)=\Gamma_A(M)B_s$: the cut and quotient have graph flags, whose free layers split on the right; after exact tensoring, their generic graph supports lie respectively in $A$ and its stable complement. The quotient remains right-free by its flag, so an $A$-supported element of it is generically zero and hence zero. This proves the cut identity and its analogous consecutive-coset quotient identity. [F1, F2, algebra]

3.1 Write $x=zs$ with $\ell(x)=\ell(z)+1$. For the coset $\{z,x\}$, the two single layers of the preceding complex $F_z$ are homotopy equivalent to $\Delta_z$ and zero by induction. Restricting its paired layer to right $R^s$, [F1] makes its two-layer sequence termwise split. It is therefore a triangle of complexes with those two outside terms, and the restricted paired complex is homotopy equivalent to the restriction of $\Delta_z$. Tensoring back with $B_s$ preserves this equivalence. The corresponding two-term complex for $F_zF_s$ on this pair is the rank-one graph complex $[R_z(-\ell(z))B_s\to R_z(-\ell(z)+1)]$, with its multiplication counit; the equivalence respects this natural counit. Its high $x$ layer is the kernel graph $R_x(-\ell(x))=\Delta_x$, and its low $z$ layer is an isomorphism onto $R_z(-\ell(z)+1)$ and contracts. Thus the two required layers are $\Delta_x$ and zero. [step 1.1, step 2.1, F1, F2, ih]

4.1 On any other pair, both single layers of $F_z$ contract by induction. Their paired sequence becomes termwise split after restriction to right $R^s$, by [F1]. Tensoring with $B_s$ yields a triangle with contractible outside terms, so its paired tensor layer contracts. Applying either single-layer functor preserves its homotopy and gives contractible single layers of $F_zB_s$. The same single layers of $F_z(1)$ contract already by induction. Since $F_zF_s$ is the cone of the natural multiplication map $F_zB_s\to F_z(1)$ with its standard shift, and an additive layer functor commutes with cones, both resulting single layers also contract. This treats every non-top pair without claiming that arbitrary complexes with zero Euler character contract. [step 2.1, step 3.1, F1, F2, ih]

5.1 The paired enumeration covers every graph; its single layers equal the canonical Bruhat layers by [F1]. Steps 3.1 and 4.1 prove the asserted homotopy isomorphism for the word complex. By [F3] every layer of a removed contractible summand remains contractible, so the same isomorphism holds for its minimal summand. This is exactly the stated $\Delta$-split property, obtained without any $S$ or Hodge assumption. [step 3.1, step 4.1, F1, F3, discharge-induction: step 4.1] ∎
