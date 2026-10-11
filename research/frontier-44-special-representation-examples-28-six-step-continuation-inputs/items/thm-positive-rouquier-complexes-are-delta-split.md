---
id: thm-positive-rouquier-complexes-are-delta-split
kind: theorem
title: "Positive Rouquier complexes are Delta-split"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category, def-real-type-a-soergel-category-and-scalar-extension, def-positive-and-negative-rouquier-generator-complexes, def-rouquier-complex-of-a-braid-word, thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence, def-type-a-standard-graph-bimodules-support-filtrations-and-character, lem-type-a-graph-bimodule-extension-vanishing, lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations, lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category, lem-type-a-soergel-generators-are-finite-free-on-both-sides]
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

**Given:** A finite Coxeter system of type $A$, a reduced expression $\underline x$ for $x\in S_n$, the positive Rouquier complex $F_{\underline x}=F_{s_1}\cdots F_{s_m}$ and its inverse complex $E_{\underline x}:=F_{s_m}\cdots F_{s_1}$ built from the generator complexes $F_i=[B_{s_i}\to S(1)]$ and $F_i^{-1}=[S(-1)\to B_{s_i}]$, and the Bruhat support cutoffs $\Gamma_{\ge y},\Gamma_{>y}$ of the standard graph bimodules ([[def-positive-and-negative-rouquier-generator-complexes]], [[def-rouquier-complex-of-a-braid-word]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F1] The generator complexes have the following explicit two-term form: $F_s=[B_s\xrightarrow{\ \ }S(1)]$ with $B_s$ in degree $0$, and $F_s^{-1}=[S(-1)\xrightarrow{\ \eta\ }B_s]$; the tensor product $F_sF_s^{-1}$ and $F_s^{-1}F_s$ are contractible, and $F_{\underline x}$ and $E_{\underline x}$ have finite free terms on both sides ([[def-positive-and-negative-rouquier-generator-complexes]], [[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]).

[F2] Bott-Samelson bimodules have finite $\Delta$- and $\nabla$-flags with layers standard graph bimodules, the layers split as right $S$-modules, and the support cuts are compatible with tensor products and with localization; $\Gamma_y$ of a standard bimodule is the single graph $R_y$ ([[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[lem-type-a-graph-bimodule-extension-vanishing]]).

[F3] Homotopy classes of the Rouquier complexes depend only on the braid represented: $F_{\underline x}$ is well defined up to canonical homotopy equivalence for a reduced expression $\underline x$ of $x$ ([[thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence]]).

[F4] Perverse and support-layer arguments are available: characters, triangles and contractibility are tested layer by layer, and a complex with trivial support subquotients is contractible ([[lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category]]).

## Statement

Let $\underline x$ be a reduced expression for $x\in S_n$ and let $F_{\underline x}$ be the Rouquier complex $F_{s_1}\cdots F_{s_m}$ (or its minimal subcomplex). Then for every $y\in S_n$ there is an isomorphism in the homotopy category of graded bimodules
$$\Gamma_{\ge y}(F_{\underline x})/\Gamma_{>y}(F_{\underline x})\;\cong\;\begin{cases}\Delta_x,&y=x,\\0,&y\ne x,\end{cases}$$
where $\Delta_x=R_x(-\ell(x))$. Equivalently: the Bruhat support subquotient of a positive Rouquier complex is contractible except in the top layer $\Delta_x$; $F_{\underline x}$ is $\Delta$-split in the sense that each of its support subquotients is a direct sum of standard bimodules, and the top layer is a single $\Delta_x$. No positivity of characters and no assumption $\mathrm{S}$ is used; the statement is unconditional for every finite type-$A$ Coxeter group and the coordinate reflection realization.

## Proof
**Proof technique:** induction on the length, proving the dual $\nabla$-statement for the inverse complexes and dualizing.

1.1 **Bruhat-compatible pairing.** Choose a Bruhat-compatible enumeration of the elements of $S_n$ in pairs $\{w_{2j},w_{2j+1}=w_{2j}s\}$ by enumerating the left $s$-cosets and refining each pair; only finitely many pairs meet the support of the current complex, and each paired prefix $A$ (the union of the lower Bruhat ideal of $w_{2j}$ with the coset $\{w_{2j},w_{2j}s\}$) is $s$-stable. For a finite subset $A$ and an $S$-bimodule $M$ set $\Gamma_AM:=\{m:\operatorname{supp}(m)\subseteq Gr(A)\}$; the subquotient $\Gamma_AM/\Gamma_{A'}(M)$ for $A\subset A'$ is functorial and exact in the relevant sense. [given, F2]

1.2 **Base cases.** For the empty word, $E_e=S$ and the only layer is $R_e(0)=\nabla_e=\Delta_e$, and for one letter $E_s=F_s^{-1}=[S(-1)\to B_s]$: its support subquotients are $R_e$ in the lower layer and $R_s(-1)=\nabla_s=\Delta_s$ in the top layer, computed explicitly from the two-term form and the basis $(c_{\mathrm{id}},c_s)$ of $B_s$; the lower layer is contractible as a complex because the differential restricts to an isomorphism there. Hence the $\nabla$-statement holds for length $\le1$, the induction start. [base, F1]

2.1 **Commutation of the support cuts with tensoring by $B_s$ over an $s$-stable set.** Let $A$ be an $s$-stable finite subset and $M$ a bimodule with a finite standard flag. Then $\Gamma_A(MB_s)=(\Gamma_AM)B_s$. Indeed, tensor the finite flag of $M$ with $B_s$: each standard layer $R_x\{a\}$ with $x\in A$ gives $R_xB_s$, whose standard flag has layers $R_w$ with $w\in\{x,xs\}\subseteq A$ because $A$ is $s$-stable, and each of these is right-free; the subobject $\Gamma_AM$ is therefore a right-free submodule whose flag tensors into the flag of $MB_s$, and the quotient (supported on the complement of $A$, which is also $s$-stable) is right-free. Since both the subobject and the quotient are right-free, the exact sequence $0\to\Gamma_A(MB_s)\to MB_s\to Q\to0$ has the required $A$-supported part and complement part; an element of the quotient supported in $A$ would lie in the fraction-field localization of the $A$-part and hence vanish, and torsion-freeness of the free quotient forces it to be zero. This proves the commutation isomorphism $\Gamma_A(MB_s)=(\Gamma_AM)B_s$, which is the local form of the Libedinsky-Williamson iteration used below. [step 1.1, F2]

3.1 **The paired induction step.** Write $x=zs$ with $\ell(z)=\ell(x)-1$, so $E_{\underline x}=E_{\underline z}F_s^{-1}$ up to canonical homotopy equivalence; by induction the paired subquotient of $E_{\underline z}$ over the coset $\{z,x\}$ is $R_z(\ell(z))$. Tensoring with $F_s^{-1}$ and using step 2.1 over the $s$-stable pair $\{z,x\}$ produces a two-term complex of $R$-bimodules supported on $Gr(z)\cup Gr(x)$ whose two single-graph subquotients are the identity complex at $z$ (in degree $0$) and $R_x(\ell(x))$ (in degree $0$), with the differential given by the rank-one map of the generator complex; hence the single-layer subquotient of $E_{\underline x}$ over $\{z\}$ is contractible and over $\{x\}$ is $\nabla_x$; this is the rank-one graph computation of the Libedinsky-Williamson argument. [step 2.1, step 1.2, F1, F2, ih]

4.1 **All other pairs are contractible.** Let $\{y,ys\}$ be a paired coset different from $\{z,x\}$. By induction both single-layer complexes of $E_{\underline z}$ over the layers of that pair are contractible (the top layer could only be non-contractible at $X=\operatorname{Supp}(\text{top})$). The extension of the lower layer by the top layer is a short exact sequence of complexes that splits after restriction to $(S,S^s)$: the two graph modules have the same invariant right action $r\mapsto y(r)$ on the invariant subalgebra, and a standard-free extension is left-free and annihilated by the common graph ideal after fraction-field localization, so the splitting is invariant-right-linear. Tensoring with $B_s$ preserves the termwise splitting and gives a triangle with contractible outer terms, hence the paired $B_s$-product is contractible; consequently both layers over $\{y,ys\}$ vanish in $E_{\underline x}$. [step 2.1, step 3.1, F2, F4]

5.1 **Assembly for the inverse complex.** Steps 3.1 and 4.1 compute every paired $\nabla$-layer of $E_{\underline x}=E_{\underline z}F_s^{-1}$: the layer over the top coset $\{z,x\}$ is the single $\nabla_x$ in its top position and the lower position is contractible, and all other pairs are contractible. Since the support cuts of step 2.1 commute with passing to the paired quotient, these layers cover every Bruhat layer, so $\Gamma_{\ge y}(E_{\underline x})/\Gamma_{>y}(E_{\underline x})$ is contractible for $y\ne x$ and equals $\nabla_x$ for $y=x$. [step 3.1, step 4.1]

6.1 **Dualization and conclusion.** The right/left duality functor of the standard graph calculus exchanges $E_{\underline x}$ and $F_{\underline x}$ up to shift and exchanges the $\nabla$-flag of $E_{\underline x}$ with the $\Delta$-flag of $F_{\underline x}$; dualizing the isomorphisms of step 5.1 gives $\Gamma_{\ge y}(F_{\underline x})/\Gamma_{>y}(F_{\underline x})\cong\Delta_x$ for $y=x$ and $0$ otherwise. Since every support subquotient is thus either zero or the single standard module $\Delta_x$, $F_{\underline x}$ is $\Delta$-split; and the argument used only rank-one graph calculations, finite standard flags, exactness of tensoring with $B_s$ on free right modules and homotopy cancellation, so it uses no positivity and no character hypothesis. This completes the proof of the stated unconditional property. [step 5.1, F1, F2, F3, F4, discharge-induction: step 3.1] ∎

## Remarks

- The statement is stated for the complex $F_{\underline x}$; the minimal subcomplex has the same support subquotients because minimalization removes contractible summands and the support subquotients of a contractible complex vanish.
- The commutation of the support cut with tensoring by $B_s$ over an $s$-stable set is proved locally in step 2.1 from the existence of finite right-free standard flags and torsion-freeness; it is the only structural input borrowed from the Libedinsky-Williamson argument, and no imported classification theorem is used.
