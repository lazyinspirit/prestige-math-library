---
id: thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module
kind: theorem
title: "The degenerate cyclotomic Hecke $G_0$ is the dual highest weight module"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 39
deps: [def-degenerate-cyclotomic-hecke-tower-and-residue-functors,
       def-higher-level-wedge-tensor-fock-module,
       def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
       thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule,
       def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality,
       thm-residue-translation-functors-give-the-integrable-fock-space-action,
       thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module,
       thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases,
       def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
       thm-higher-level-schur-weyl-double-centralizer,
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
       thm-category-o-translation-intertwines-residue-induction-and-restriction,
       thm-finite-length-grothendieck-groups-have-simple-class-bases,
       thm-grothendieck-group-universal-properties-and-functoriality,
       def-axiom-of-choice,
       thm-the-highest-weight-fock-submodule-has-the-qg-global-bases,
       def-lower-global-basis-of-a-quantum-highest-weight-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 2.2-2.3 (printed pp. 6-10), (2.7)-(2.21): the Fock module, standard monomials, dual-canonical basis and Theorem 2.2; complete passage read. Owner correction preserves the full integral costandard lattice and rational ground cyclicity; no integral costandard ground-generation assertion is read into the source."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 3.1 and 3.5-3.6 (printed pp. 19-31): Theorem 3.1 (parabolic categorification), Theorems 3.6-3.8, Lemma 3.5 and the first half of Theorem 3.10; complete passage read. Owner correction preserves the full integral costandard lattice and rational ground cyclicity; no integral costandard ground-generation assertion is read into the source."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Theorems 5.13, 6.9, 6.10, 6.12 and (6.20) (printed pp. 30-40): Schur-Weyl duality for level $l$, the Specht modules and the Schur functor; complete passage read. Owner correction preserves the full integral costandard lattice and rational ground cyclicity; no integral costandard ground-generation assertion is read into the source."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Section 4.4 (printed pp. 45-47) and Section 8.5 (printed pp. 93-97): the parabolic category $O(\\lambda)$ and the Whittaker functor used in the Schur-Weyl comparison; the relevant passages were read. Owner correction preserves the full integral costandard lattice and rational ground cyclicity; no integral costandard ground-generation assertion is read into the source."
verification:
  precheck: pass
---

## Statement

Assume inherited AC [[def-axiom-of-choice]] for the category-O, Fock/global and Schur quotient suppliers invoked below.

Assume the bounded-below setting of the tower: $I\subseteq\mathbb Z$ is nonempty,
consecutive and bounded below, $m_1\ge\cdots\ge m_l$ is an admitted integral
multicharge, and $H^\Lambda=\bigoplus_{\alpha\in Q^+}H^\Lambda_\alpha$ is the
degenerate cyclotomic Hecke tower of
[[def-degenerate-cyclotomic-hecke-tower-and-residue-functors]], using its actual admissible integral-origin stable realization with roots $c_j+q_j-n_{\rm row}=m_j$. Let
$\mathrm{Col}^\Lambda$, $\mathrm{Std}^\Lambda$ be the column-strict, respectively
standard, tableaux of the Fock data of
[[def-higher-level-wedge-tensor-fock-module]], with monomials $M_A$ and
dual-canonical vectors $L_A$, canonical vectors $T_A$ and quasi-canonical vectors
$P_A$ as in [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], and
let $\pi_{\mathrm{Fock}}$ be the normalized highest projection, so that
$D_A=\pi_{\mathrm{Fock}}L_A$ and $S_B=\pi_{\mathrm{Fock}}M_B$. Work at source
parameter $s=1$.

**(i)** The exact Schur quotient identifies the module Grothendieck group
$G_0(\mathrm{Rep}(H^\Lambda))$ with the FULL integral costandard lattice
$$V(\Lambda)^*_{\mathbb Z}=\operatorname{span}_{\mathbb Z}\{\,D_A=\pi_{\mathrm{Fock}}L_A\ :\ A\in\mathrm{Std}^\Lambda\,\}$$
by $[D(A)]\mapsto D_A$, and it sends every Specht class to
$[S(B)]\mapsto S_B=\pi_{\mathrm{Fock}}M_B$; the vectors
$\{S_B:B\in\mathrm{Std}^\Lambda\}$ are another integral basis, the standard
monomial basis.

**(ii)** The endomorphisms of $G_0$ induced by the residue functors $e_i,f_i$
$(i\in I)$ are the Chevalley operators $e_i,f_i$ of the integrable
$\mathfrak{gl}_{I^+}$ Fock action, and both the standard and the costandard
integral forms carry the actual divided-power action.

**(iii)** Over $\mathbb Q$ the ground class generates the dual highest weight
module $V(\Lambda)^*_{\mathbb Q}$. Over $\mathbb Z$ the costandard lattice need
NOT be ground cyclic, even under divided powers: the rank-one case
$I=\{0\}$, $\Lambda=2\Lambda_0$ has a ground-generated integral lattice of
index two that omits $D_{01}$. The STANDARD lattice, by contrast, is integrally
generated by its ground vector under divided powers.

**(iv)** Every standard-tableau simple occurs as a composition factor of a
residue word applied to the ground simple, and the ground crystal component is
exactly $\mathrm{Std}^\Lambda$.

**(v)** The categorical reachability and rational-cyclicity statements of
(iii)-(iv) do not imply integral costandard cyclicity; the level-$0$ tower has
only the ground weight.

For an arbitrary admitted consecutive $I$, the same statements hold blockwise and sum to the same lattice identifications. Use finite letter cuts containing every charge and finite root cuts containing the selected content and every intermediate content in the chosen residue words. The transition maps append the common ground tail below the lower cut and leave all letters above the upper cut absent. They fix the intrinsic Hecke generators, spectral idempotents and residue bimodules on the selected contents, and identify both integral lattices by their labelled bases. The dual module here is the restricted, weightwise dual, not the unrestricted algebraic dual of an infinite-dimensional module.

## Facts & Assumptions

**Given:** The bounded-below tower $H^\Lambda$ of
[[def-degenerate-cyclotomic-hecke-tower-and-residue-functors]], the Fock data
and its four families as in
[[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], the exact
Schur quotient $\pi$ with its left adjoint $\pi^*$ as in
[[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]] and
[[thm-higher-level-schur-weyl-double-centralizer]], and the assumption of the
Axiom of Choice used by the imported suppliers
([[def-axiom-of-choice]]). We prove (i)-(v).

[F1] Every object of the category of finite-dimensional modules over a
finite-dimensional algebra has finite length, so the classes of simples form a
$\mathbb Z$-basis of $G_0$, with composition multiplicities as coordinates
([[thm-finite-length-grothendieck-groups-have-simple-class-bases]]).

[F2] A class function on isomorphism classes that is additive on short exact
sequences factors uniquely through $G_0$, and an exact functor induces a
homomorphism of $G_0$ functorially
([[thm-grothendieck-group-universal-properties-and-functoriality]]).

[F3] The Axiom of Choice holds: every family of nonempty sets has a choice
function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The Schur quotient and its simple images.** Assume AC ([F3]) as the imported suppliers do. In the admissible stable realization, the exact Schur quotient $\pi$ of [[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]] is the Serre quotient killing exactly the simples $L(A)$ with $A\notin\mathrm{Std}^\Lambda$; it satisfies $\pi(N(A))=S(A)$ for the intrinsic Specht modules and $\pi(L(A))=D(A)$ for $A\in\mathrm{Std}^\Lambda$, these $D(A)$ being pairwise nonisomorphic and exhausting the simples of $\mathrm{Rep}(H^\Lambda)$, while $\pi(L(A))=0$ for $A\notin\mathrm{Std}^\Lambda$. By [F1] the classes $[D(A)]$, $A\in\mathrm{Std}^\Lambda$, form a $\mathbb Z$-basis of $G_0(\mathrm{Rep}(H^\Lambda))$. The ingredients are the Schur-functor image theorem, exactness of $\pi$ and the double-centralizer/quotient description of [[thm-higher-level-schur-weyl-double-centralizer]]. [F1, F3, given, construct]

1.2 **The Fock side of the dictionary.** On the Fock side the normalized highest projection $\pi_{\mathrm{Fock}}$ is the linear map with $\pi_{\mathrm{Fock}}L_A=D_A$ for $A\in\mathrm{Std}^\Lambda$ and $\pi_{\mathrm{Fock}}L_A=0$ for $A\notin\mathrm{Std}^\Lambda$, and $\pi_{\mathrm{Fock}}M_B=S_B$ with $M_B=\sum_{A}d_{A,B}(s)L_A$ and $S_B=\sum_{A\in\mathrm{Std}^\Lambda}d_{A,B}(1)D_A$ at source parameter $1$; the vectors $\{D_A\}$ span the full integral costandard lattice $V(\Lambda)^*_{\mathbb Z}$ and the vectors $\{S_B:B\in\mathrm{Std}^\Lambda\}$ form the standard monomial basis of that lattice, a second integral basis. These are the definitions and the standard-monomial basis theorem of [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]] and [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]], together with the O-side dictionary $[L(A)]\mapsto L_A$, $[P(A)]\mapsto P_A$, $[T(A)]\mapsto T_A$ of [[thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases]]. [given, construct]

1.3 **The O-side Grothendieck group is the integral Fock module.** At parameter one the parabolic category-O Grothendieck group is identified with the integral Fock module by $[M(A)]\mapsto M_A$, with $\dim\operatorname{Hom}(P,N)=\langle[P],[N]\rangle$ and $\langle P_A,L_B\rangle=\delta_{AB}$, by [[thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module]]; here $M(A)$, $L(A)$, $P(A)$ are the generalized standard, simple and projective objects of the genuine block $\mathcal O^\Lambda_\alpha$ of [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]]. [given, construct]

2.1 **The identification of $G_0$ with the costandard lattice.** Define $\Phi\colon G_0(\mathrm{Rep}(H^\Lambda))\to V(\Lambda)^*_{\mathbb Z}$ on the basis of step 1.1 by $\Phi([D(A)])=D_A$. This is a well-defined group isomorphism because both sides are free $\mathbb Z$-modules with the same basis set $\mathrm{Std}^\Lambda$: on the module side by [F1] and step 1.1, on the Fock side by step 1.2, which exhibits $\{D_A\}$ as a $\mathbb Z$-basis of the FULL integral costandard lattice and makes no integral ground-generation claim. This proves (i) for the simple classes and, together with step 1.2, identifies $\Phi([S(B)])$ with $S_B$. [step 1.1, step 1.2, F1, construct]

2.2 **The Specht classes.** For the intrinsic Specht module $S(B)=\pi(N(B))$ of step 1.1, apply the exact functor $\pi$ to a Jordan–Hölder composition series of $N(B)$; exactness and [F2] give $[S(B)]=\sum_{A}[N(B):L(A)]\,[D(A)]$ in $G_0$, the sum running over the simples, i.e. over $A\in\mathrm{Std}^\Lambda$ by step 1.1. The multiplicity $[N(B):L(A)]$ equals the Fock coefficient $d_{A,B}(1)$ of step 1.2 by the O-side multiplicity dictionary of step 1.3 and the Schur-image theorem of step 1.1. Hence $\Phi([S(B)])=\sum_{A\in\mathrm{Std}^\Lambda}d_{A,B}(1)D_A=S_B$, and the square submatrix on standard columns is unitriangular, so $\{S_B:B\in\mathrm{Std}^\Lambda\}$ is an integral basis; this completes (i). [step 1.1, step 1.2, step 1.3, F2, algebra]

2.3 **Divided-power integral forms.** The lower library global vectors $G_{\mathrm{low}}(A)=T_{A^\uparrow}=s^{-a(\alpha)}P_A$ and the form-dual upper vectors $G_{\mathrm{up}}(A)=s^{a(\alpha)}D_A$ with $a(\alpha)=(2\Lambda-\alpha,\alpha)/2$ span integral forms on which the divided powers of the Chevalley generators act integrally, by [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]]; at parameter one the standard lattice is therefore generated over $\mathbb Z$ by its ground vector $P_{A_\Lambda}$ under the divided-power operators $f_i^{(n)}$, while the costandard lattice is its full weightwise $C_0$-dual: at $s=1$, $C_0(P_A,D_B)=\delta_{AB}$ identifies it with $\bigoplus_\alpha\operatorname{Hom}_{\mathbb Z}(V(\Lambda)_{\mathbb Z,\alpha},\mathbb Z)$. In particular it is stable under divided powers, since the $e_i^{(n)}$ and $f_i^{(n)}$ are adjoint and preserve the lower lattice. Nondegeneracy identifies their rational scalar extensions, but does not identify the two integral lattices. The ground-generation use is the actual definition $V_{\mathcal A}(\Lambda)=U^-_{\mathcal A}v_\Lambda$ of [[def-lower-global-basis-of-a-quantum-highest-weight-module]], specialized at one; it concerns the standard lattice only. This gives the divided-power clause of (ii) and separates the two lattices. [step 1.2, given, algebra]

3.1 **Residue operators.** The residue functors $e_i^H,f_i^H$ are exact, so they induce endomorphisms of $G_0$ by [F2]. The natural intertwining isomorphisms $f_i^H\pi\cong\pi f_i^O$ and $e_i^H\pi\cong\pi e_i^O$ of [[thm-category-o-translation-intertwines-residue-induction-and-restriction]], together with the category-O Chevalley action of [[thm-residue-translation-functors-give-the-integrable-fock-space-action]], show that $[\pi]$ is a module map. Steps 1.1–2.2 identify its kernel with the span of the off-standard simple classes, precisely the kernel of the Fock projection. Thus the induced quotient map $\Phi$ intertwines $e_i,f_i$, proving the ordinary Chevalley clause of (ii). No head, socle or indecomposability assertion is inferred merely from exactness of a quotient. [step 1.1, step 1.2, step 2.1, step 2.2, F2, given, algebra]

3.2 **Level zero.** If the level is $0$, then $\Lambda=0$, the only simple is the ground class in degree $0$, and the tower is $H^\Lambda_0=\mathbb C$ by the level-$0$ convention of [[def-degenerate-cyclotomic-hecke-tower-and-residue-functors]]; then $G_0=\mathbb Z[D(\varnothing)]\cong\mathbb ZD_\varnothing$ is the ground line alone, with both lattices equal to the ground line and every residue operator zero. This is the level-$0$ clause of (v). [step 1.1, step 2.1, given]

4.1 **Crystal reachability and composition factors.** The source upper ground component is exactly $\mathrm{Std}^\Lambda$ by [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]]. The normalized highest form is nondegenerate on each finite weight space, so over $\mathbb Q$ it identifies the full costandard lattice's scalar extension with the irreducible highest module. Its highest vector therefore generates that module under lowering divided powers. Consequently every basis vector $D_A$ is a rational linear combination of lowering words applied to the ground vector. By step 3.1 each ordinary lowering word is the class of the corresponding exact residue-word module, with nonnegative simple-class coefficients by [F1]. If $D(A)$ occurred in none of these modules, every such word and every rational linear combination would have zero $D_A$ coefficient, contrary to the coefficient one in $D_A$. Thus some residue word contains $D(A)$ as a composition factor. This proves (iv) without requiring integral costandard generation or transport of head and socle through the quotient. [step 2.1, step 2.3, step 3.1, F1, given, algebra]

4.2 **The maps for arbitrary consecutive $I$.** Fix a finite set of contents and residue words. Choose $J=[k,r]$ so that $[k,r+1]$ contains every charge and $J$ contains every intermediate root support; decrease $k$ further to reach the needed stable range. The Hecke-side map is literally the identity on $H_d(m)e_\alpha$: its spectral idempotent is the same sum over words of content $\alpha$, independently of whether the ambient supported interval is $I$ or $J$. It therefore fixes the intrinsic residue corner $u_{\alpha,i}$ and the bimodules defining $e_i,f_i$. On tableaux the lower transition adjoins the prescribed ground entries to every column, and the upper transition regards the same entries in a larger alphabet with no new top entries. Removing that common tail is the inverse on the selected weight. Column ground differences, hence intrinsic Specht partitions, are unchanged. The actual finite-cut compatibility of [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]] and [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]] gives $D_{\jmath A}=\jmath D_A$, $S_{\jmath B}=\jmath S_B$, $P_{\jmath A}=\jmath P_A$ and commuting normalized highest projections. Thus both upper and lower lattices are identified by their full bases, not just their rational spans. On overlapping cuts these maps compose by adjoining/removing the same ground entries and by the intrinsic Hecke identity; the normalized projections agree by highest-vector uniqueness. Every content, vector and finite residue word fits such a cut. Applying the bounded-below identifications and the rational-cyclicity argument of steps 1.1–4.1 there, and taking the compatible weightwise direct sum, proves all clauses for arbitrary admitted $I$. No full degree algebra is identified with a proper supported cut. [step 1.1, step 2.1, step 2.3, step 3.1, given, construct, algebra]

5.1 **Rational ground cyclicity.** The normalized $E/F$-contravariant highest form is nondegenerate on each finite weight space. Thus its weightwise duality identifies $V(\Lambda)^*_{\mathbb Q}$, interpreted as the direct sum of the costandard weight spaces, with the irreducible rational highest module. The ground vector maps to the normalized highest vector; its orbit under lowering divided powers therefore spans every weight space, as used in step 4.1. This proves the rational clause of (iii). The full unrestricted algebraic dual of an infinite-dimensional module is not used. [step 2.3, step 3.1, step 4.1, given, algebra]

6.1 **The rank-one index-two witness.** Take $I=\{0\}$ and $\Lambda=2\Lambda_0$. The supported degree-one block is $B_0=\mathbb C[x]/x^2$ and the supported degree-two block is $M_2(\mathbb C)$, with its simple represented by $x_1=N=E_{12}$, $s_1=-(E_{12}+E_{21})$ and $x_2=-N$. For completeness the whole degree-two presentation gives an isomorphism $H_2(0,0)\cong M_2(\mathbb C)\oplus B_+\oplus B_-$ with $B_\pm=\mathbb C[\epsilon]/\epsilon^2$: send $(x_1,x_2,s_1)$ to $(N,-N,-J)$ in the matrix factor and to $(\epsilon,\pm1+\epsilon,\pm1)$ in the other factors. The eight PBW spanning words are $1,x_1,x_2,x_1x_2,s_1,x_1s_1,x_2s_1,x_1x_2s_1$. The central sum $z=x_1+x_2$ has spectra $0,1,-1$ on the three factors; its Hermite polynomials $(1-z^2)^2$ and $\{1-(1-z^2)^2\pm(3z-z^3)/2\}/2$ project onto the three factors. Each factor is generated by the images, making the map onto an eight-dimensional product surjective and hence an isomorphism by the spanning bound. The all-zero-residue cut is exactly the matrix factor. In degree three an all-zero-residue module would have $x_2=-x_1$, $x_1^2=0$ from the matrix factor; $s_2$ commutes with $x_1$ and therefore with $x_2$, so $x_3=s_2x_2s_2+s_2=x_2+s_2$ has eigenvalues $\pm1$, contradiction. The same argument excludes all higher degrees. The first dot is not zero on the matrix simple. Induction from degree zero gives the regular $B_0$-module, with two simple factors. The matrix algebra is right-free of rank two over $B_0$ under $x\mapsto N$, so induction of its one-dimensional simple has dimension two and is the matrix simple; restricting that matrix simple gives the regular $B_0$-module. Restricting the degree-one simple to degree zero has dimension one. Thus the residue Ind/Res computations give $fD_{00}=2D_{01}$, $fD_{01}=D_{11}$ and $eD_{01}=D_{00}$, $eD_{11}=2D_{01}$, with the end actions zero. Their divided squares give $f^{(2)}D_{00}=D_{11}$ and $e^{(2)}D_{11}=D_{00}$. Therefore $\mathbb ZD_{00}\oplus2\mathbb ZD_{01}\oplus\mathbb ZD_{11}$ is stable under $e,f$ and all their divided powers, contains the ground vector and excludes $D_{01}$. This is a proper integral costandard submodule, whereas over $\mathbb Q$ division by two recovers $D_{01}$. Degree one is not called a corner sitting inside degree two. [step 2.3, step 5.1, algebra]

7.1 **Conclusion.** Step 2.1 identifies $G_0$ with the full integral costandard lattice and step 2.2 computes the Specht classes, proving (i); step 2.3 gives the divided-power integral forms and step 3.1 identifies the residue operators with the Chevalley operators, proving (ii); step 5.1 proves rational ground cyclicity, step 2.3 proves integral ground generation of the standard lattice and step 6.1 exhibits the index-two failure of integral costandard cyclicity, proving (iii) and its sharpness; step 4.1 proves the crystal reachability statement (iv); and step 3.2 (level zero) together with steps 6.1 and 4.2 separates the rational-cyclicity and categorical reachability conclusions from integral costandard cyclicity, as asserted in (v); step 4.2 supplies the arbitrary-$I$ maps and full integral extension. No step identifies $\{D_A\}$ with the standard divided-power lattice, and no integral costandard generation is used. [step 2.2, step 2.3, step 4.1, step 6.1, step 4.2, step 3.2, given] ∎
