---
page: type-a-soergel-bimodules-and-hecke-categorification
title: "Type-A Soergel Bimodules and Hecke Categorification"
status: draft
items: [def-type-a-reflection-realization-and-polynomial-ring,
        lem-type-a-reduced-words-are-connected-by-braid-moves,
        def-type-a-hecke-algebra-in-soergel-normalization,
        lem-type-a-hecke-standard-basis-for-soergel-comparison,
        def-type-a-soergel-bimodule-for-a-simple-reflection,
        lem-type-a-soergel-generators-are-finite-free-on-both-sides,
        def-bott-samelson-bimodule-of-a-word,
        def-the-type-a-soergel-category,
        def-type-a-standard-graph-bimodules-support-filtrations-and-character,
        lem-type-a-graph-bimodule-extension-vanishing,
        lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations,
        lem-type-a-support-filtration-multiplicities-are-intrinsic,
        lem-type-a-soergel-frobenius-biadjunction,
        lem-type-a-character-recursion-under-simple-soergel-tensoring,
        lem-type-a-soergel-special-hom-formula,
        lem-type-a-top-support-layers-are-controlled-by-reflection-localization,
        thm-the-type-a-soergel-hom-formula,
        lem-the-rank-one-soergel-bimodule-square-splits,
        lem-distant-soergel-generators-commute,
        def-the-rank-two-longest-type-a-soergel-bimodule,
        thm-rank-two-type-a-soergel-bimodule-decompositions,
        def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor,
        def-split-grothendieck-rings-of-type-a-soergel-categories,
        lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules,
        thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces,
        thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts,
        thm-the-diagrammatic-character-is-the-split-k-zero-hecke-isomorphism,
        thm-light-leaf-maps-form-bases-of-type-a-soergel-homs-to-the-unit,
        thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs,
        thm-type-a-diagrammatic-and-bimodule-soergel-categories-are-equivalent,
        thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra,
        lem-the-type-a-standard-character-is-multiplicative]
examples: []
---

The type-$A$ Soergel page builds the categorification of the Hecke algebra
$H_{S_n}$ in Soergel's normalization, where $A=\mathbb Z[v,v^{-1}]$, $q=v^{-2}$,
$(T_i-q)(T_i+1)=0$ and $H_i=v(T_i+1)$: the reflection realization of $S_n$ on
$\mathbb Q^n$ produces the polynomial ring $R$ together with its Demazure
operators, the rank-one bimodules $B_s=R\otimes_{R^s}R(1)$ generate the
Bott–Samelson bimodules, and the type-$A$ Soergel category
$\mathrm{SBim}_n$ is the idempotent completion of their additive closure. On the
way there the page proves, in prerequisite order, the braid-move connectedness
of reduced words and the complete type-A Coxeter presentation, the standard-basis lemma for the normalized Hecke algebra,
the structure of standard graph bimodules with their $\Delta$- and
$\nabla$-filtrations and characters, the vanishing of extensions between graph
bimodules, the Frobenius biadjunction of a generator, the simple-tensoring
recursion for the two support characters, and the reflection-localization
control of the top support layer.

These ingredients give the graded Hom formula
$\operatorname{rk}\operatorname{Hom}_{R\text{-}R}(M,N)=\sum_{x,d,e}(M:\Delta_x(d))(N:\nabla_x(e))\,v^{d-e}$
for objects of $\mathrm{SBim}_n$, the rank-one square
$B_s\otimes_RB_s\cong B_s(1)\oplus B_s(-1)$, and the two rank-two
decompositions of $B_sB_tB_s$ and $B_tB_sB_t$ with their explicit
longest-parabolic summand. The second half of the page then passes to the
diagrammatic calculus: the Elias–Williamson category $D$ with the functor
$\mathcal F:D\to\mathrm{BSBim}^{\bullet}$ on total graded Hom spaces, followed by its extension to finite sums and shifts with degree-zero maps and then to $\mathrm{SBim}_n$; the verification that every defining relation
of $D$ holds for the images of the generators; the double-leaf and light-leaf
bases, both diagrammatically and after evaluation through the Frobenius
biadjunction; the classification of the indecomposable objects of
$\operatorname{Kar}(D)$ by permutations and shifts; the diagrammatic character
as the split-$K_0$ Hecke isomorphism; the equivalence of
$\operatorname{Kar}(D)$ with $\mathrm{SBim}_n$; and the identification of
$K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ with the Hecke algebra by
$\Phi([B_i])=H_i$, which forces $[B_i]^2=(v+v^{-1})[B_i]$ and the
multiplicativity of the standard character. The companion examples page carries
the rank-one and rank-two computations out by hand.

Degree conventions are fixed once on the page and used throughout: internal
shifts $M\{r\}$ raise generator degrees, external shifts obey $M(k)=M\{-k\}$,
$\deg x_i=2$, and $B_s=R\otimes_{R^s}R(1)=R\otimes_{R^s}R\{-1\}$, so that the
source grading shift $(1)$ is the library shift $\{-1\}$ and a graph of degree
$d$ becomes a bimodule map of degree $d$. The coordinate roots
$\beta_i=x_i-x_{i+1}$ govern Coxeter length; alternating signs give the
balanced diagrammatic roots $\alpha_i=\varepsilon_i\beta_i$. The Hecke standard
basis is $\widetilde T_w=v^{\ell(w)}T_w$, while a product of normalized simple
generators is written $H_{\underline w}$ for its chosen word. A reduced-word
Bott–Samelson object may have lower summands; its distinguished indecomposable
$D_w$ supplies the triangular character basis. The earlier Garside page supplies type-A inversion calculus and braid connectivity.
The present page proves the complete Coxeter presentation from those facts,
then constructs the normalized Hecke standard basis and the split Grothendieck
rings on the small skeletons used here; it makes no claim about general
Grothendieck or Cartan theory. The imported Soergel,
Elias–Williamson, Libedinsky and Elias–Khovanov statements are recorded with
their exact locators in the Remarks of the graph-bimodule definition and of the
diagrammatic category with its bimodule functor. No argument on the page uses a
choice principle, so the page neither assumes nor depends on the Axiom of
Choice, and Elias–Williamson's Conjecture 3.16 is not used anywhere.
