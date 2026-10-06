---
page: rouquier-complexes-and-categorical-braid-relations
title: "Rouquier Complexes and Categorical Braid Relations"
status: draft
requires: [type-a-soergel-bimodules-and-hecke-categorification,
            graded-quiver-algebras-and-derived-tensor-functors,
            categorical-braid-actions-and-decategorification,
            derived-categories,
            bounded-bimodule-complexes-and-derived-tensor]
items: [def-positive-and-negative-rouquier-generator-complexes,
        lem-opposite-rouquier-generator-complexes-are-homotopy-inverse,
        lem-rouquier-complexes-satisfy-far-commutativity,
        lem-rouquier-complexes-satisfy-the-three-term-braid-relation,
        def-rouquier-complex-of-a-braid-word,
        def-coherent-action-of-a-group-on-a-category,
        def-rouquier-canonical-comparisons-between-standard-graph-tensors,
        lem-rouquier-generator-complexes-have-canonical-derived-graph-models,
        lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps,
        lem-rouquier-normalized-comparison-isomorphisms-are-transitive,
        thm-rouquier-complexes-form-a-coherent-braid-group-action,
        thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence,
        thm-rouquiers-two-braid-category-is-strict-rigid-monoidal,
        lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative,
        prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator]
examples: []
---

This page builds Rouquier's 2-braid group for type $A$ inside the homotopy
category of bounded complexes of graded $(R,R)$-bimodules, starting from the
type-$A$ Soergel bimodules $B_i=R\otimes_{R^{s_i}}R(1)$ of the Soergel page.
The generator complexes are the two-term complexes
$F_i=[B_i\xrightarrow{\varepsilon_i}R(1)]$ and
$F_i^{-1}=[R(-1)\xrightarrow{\eta_i}B_i]$, where $\varepsilon_i$ is the
multiplication map and $\eta_i(1)=\alpha_i\otimes1+1\otimes\alpha_i$; every
term is finite free as a left and as a right $R$-module, so tensor product by
these complexes is exact on both sides and descends to the derived tensor
functor. The shift dictionary of the page is fixed once and for all: external
shifts $(r)$ satisfy $M(r)_d=M_{d+r}$ while internal shifts $\{r\}$ satisfy
$M\{r\}_d=M_{d-r}$, the generator $1\otimes1$ of $B_i$ has degree $-1$ and
$1\otimes\alpha_i$ has degree $1$.

The first results make the generators behave like the braid generators.
$F_i\otimes_RF_i^{-1}$ and $F_i^{-1}\otimes_RF_i$ split as the unit complex
$R$ plus two contractible two-term summands, which are exhibited with explicit
contracting homotopies and cancelled by homological Gaussian elimination;
generators with distant indices commute up to a canonical degree-zero
isomorphism; and the three-term braid relation
$F_iF_{i+1}F_i\simeq F_{i+1}F_iF_{i+1}$ holds with no grading shift, by
splitting the rank-one and rank-two Soergel tensor decompositions and
cancelling the contractible summands. Iterating the signed tensor totalization
over a signed word therefore attaches to every signed word $\sigma$ a bounded
complex of graded bimodules, the Rouquier complex $F(\sigma)$ of a braid word.

The page then compares the different word models of one braid. For words $t,u$
with the same product, the canonical comparison
$c_{t,u}=\mu_u^{-1}\circ\mu_t$ between the word tensors of standard graph
bimodules is a transitive system of degree-zero isomorphisms, and it lifts to
a normalized homotopy map $\gamma_{t,u}\colon F(t)\to F(u)$ that is the unique
homotopy class with the prescribed derived image; the normalized maps compose
transitively, which makes the Rouquier complex of a braid well defined up to
canonical homotopy equivalence. Lifting the comparisons along the derived
localization and transporting the graph multiplication produces the
compositors $m_{v,w}$ and unit $m_1$ of a coherent action of $B_n$ on
$K^b(R\text{-grmod})$ in the strict sense of the pentagon and the two unit
triangles; the braid-indexed category with morphisms $\operatorname{Hom}_{K^b}(G_v,G_w)$
has strict object product $v\boxtimes w=vw$, with the morphism product
transported by $m$. It is rigid, with dual label $v^{-1}$, and its evaluation
is fully faithful onto the full carrier subcategory.

Finally the page decategorifies. The alternating class
$\chi(C)=\sum_m(-1)^m[C^m]$ is a homotopy invariant, multiplicative for signed
tensor totalizations and additive on cones, and on the generators it takes the
values $\chi(F_i)=[B_i]-[R(1)]$ and $\chi(F_i^{-1})=[B_i]-[R(-1)]$; under the
identification $\Phi$ of the split Grothendieck ring with the Hecke algebra,
the classes of generator complexes become the normalized Hecke generators, so
that a signed word for a braid $\beta$ satisfies
$\Phi(\chi(F(\sigma)))=v^{e(\sigma)}T_\beta$. The statement concerns classes
only and therefore does not determine homotopy types: on the companion
examples page the zero-differential complex $Z_i=[B_i\xrightarrow{0}R(1)]$
shares the class of $F_i$ while having different cohomology. No step of the
page uses a choice principle: the constructions are termwise canonical, and
the one choice made (a representative signed word per braid) is absorbed by the
canonical comparisons.
