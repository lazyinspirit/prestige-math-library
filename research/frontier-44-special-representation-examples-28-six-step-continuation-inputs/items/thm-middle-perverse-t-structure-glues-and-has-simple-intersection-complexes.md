---
id: thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes
kind: theorem
title: "Middle perverse t structure glues and has simple intersection complexes"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 22
deps: [def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-axiom-of-choice, def-canonical-t-structure-on-a-derived-category,
       def-derived-category-of-an-abelian-category,
       def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf,
       def-extension-by-zero-abelian-sheaf,
       def-inverse-image-presheaf-and-sheaf,
       def-locally-constant-sheaf-of-finite-rank, def-sheaf-on-topological-space,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality,
       thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "1.4.1-1.4.26 (recollement, Theoreme 1.4.10, intermediate extension and its no-subobject/no-quotient characterization, simple objects) and 2.1.1-2.1.23 (perverse t-structure on stratified spaces)"
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Lecture Notes in Mathematics 1578, Part I (Derived category and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "5.1-5.2 (equivariant perverse heart, finite length, simple equivariant intersection sheaves)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $k$ be a field of
characteristic zero. On the equivariant constructible derived category
$D^b_{G,c}(X;k)$ of
[[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]],
middle perversity is defined on smooth complex strata $S$ by the two
inequalities $H^q(i_S^*A)=0$ for $q>-\dim_{\mathbb C}S$ and
$H^q(i_S^!A)=0$ for $q<-\dim_{\mathbb C}S$, where $i_S$ is the inclusion of a
stratum. These inequalities give a bounded t-structure independent of
compatible refinement and gluing across algebraic open/closed decompositions,
and the equivariant structure is detected by restriction to $X$. Its heart is
abelian of finite length, and its simple objects are the intermediate
extensions $\operatorname{IC}_Z(L)=j_{!*}L[\dim_{\mathbb C}Z]$ of simple
finite-rank local systems $L$ on dense smooth opens of irreducible supports
$Z$, with equivariant data in the equivariant category. If $A,B$ lie in the
heart, then $\operatorname{Hom}(A,B[m])=0$ for $m<0$. A simple object's
endomorphism ring is a division $k$-algebra, not asserted to equal $k$.

## Facts & Assumptions

**Given:** The field $k$ of characteristic zero; the group $G$ and variety $X$
with the equivariant category $D^b_{G,c}(X;k)$; the ordinary middle-perverse
t-structure of
[[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]];
the Axiom of Choice [[def-axiom-of-choice]]; the conventions of
[[def-derived-category-of-an-abelian-category]],
[[def-derived-hom-in-the-bounded-setting]] and
[[def-canonical-t-structure-on-a-derived-category]].

[F1] The normalized bridge
([[lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative]]):
the middle-perverse structure on $D^b_{G,c}(X;k)$ is detected by restriction to
$X$, the functor $A\mapsto Q_N(A)[s_N]$ is perverse exact and conservative for
all sufficiently large $N$, and perverse truncations lift uniquely; at the
degree-zero Hom stabilization bound finite rings of projectors lift and
perverse concentration and simplicity are preserved and reflected after the
shift $s_N$.

[F2] The equivariant six operations
([[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]):
$D^b_{G,c}$ carries the coherent operations $f^*,Rf_*,Rf_!,f^!,\otimes_k^L,
R\mathcal Hom$ with their adjunctions, support localization and Cartesian
pasting for equivariant algebraic maps, and the normalized dualizing object
restricts to the ordinary one.

[F3] The ordinary perverse core
([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]):
on $D_c^b(X;k)$ the middle-perverse inequalities define a bounded t-structure
independent of compatible refinement and gluing across open/closed
decompositions; its heart is abelian of finite length; its simples are the
intermediate extensions $j_{!*}L[\dim Z]$ of simple finite-rank local systems
on dense smooth opens of irreducible supports; heart objects have no negative
Hom; and the endomorphism ring of a simple object is a division algebra.

[A1] AC is used through the ordinary perverse core and the equivariant
six-operation and normalization suppliers; the recollement and
intermediate-extension arguments below are otherwise choice-free
([[def-axiom-of-choice]]).

## Proof

1.1 **The equivariant t-structure.** For $A\in D^b_{G,c}(X;k)$ define $A\in{}^pD_G^{\le a}$ if and only if the restriction $A_X$ lies in the ordinary aisle ${}^pD^{\le a}(X;k)$, and ${}^pD_G^{\ge a}$ dually. By [F1] this is equivalent to $Q_N(A)[s_N]\in{}^pD^{\le a}(X_N;k)$ for every sufficiently large $N$, so the definition is independent of the resolution. The pair $({}^pD_G^{\le0},{}^pD_G^{\ge0})$ satisfies the t-structure axioms because the defining conditions are those of a t-structure pointwise: closure under shifts and extensions follows from the corresponding ordinary closures and the conservativity of restriction, orthogonality $\operatorname{Hom}({}^pD_G^{\le0},{}^pD_G^{\ge1})=0$ follows from the ordinary orthogonality transported through the fully faithful Hom comparison of [F1], and truncation triangles exist by the lifting clause of [F1]. The structure is bounded because the ordinary one is and restriction to $X$ is conservative. This proves the t-structure and detection assertions. [F1, F3, given]

2.1 **Gluing and independence of refinement.** The inequalities of the Statement are checked stratumwise and are therefore independent of compatible refinement by the ordinary clause of [F3]; gluing across an algebraic open/closed decomposition uses the localization triangles of [F2] and the ordinary gluing theorem: for an open immersion $j$ and closed complement $i$, the Čech-style recollement conditions $j^*i_*=0$, the triangles $j_!j^*\to\mathrm{id}\to i_*i^*$ and $i_*i^!\to\mathrm{id}\to j_*j^*$ hold in $D^b_{G,c}$ by [F2], and the transport of step 1.1 reduces the glued t-structure statement to the ordinary one. [F2, F3, step 1.1]

2.2 **Heart and finite length.** Kernel and cokernel of a morphism of the heart are the perverse cohomology objects in degrees $-1$ and $0$ of its cone, computed by the truncation functors of step 1.1; hence the heart is abelian. Restriction to $X$ is perverse exact and conservative on the heart by [F1], so a strictly increasing or decreasing chain of subobjects in the equivariant heart gives a strictly increasing or decreasing chain in the ordinary heart; the ordinary heart has finite length by [F3], so the equivariant heart does. For heart objects $A,B$ and $m<0$, $B[m]$ lies in ${}^pD_G^{\ge1}$ while $A$ lies in ${}^pD_G^{\le0}$, so orthogonality gives $\operatorname{Hom}(A,B[m])=0$. [F1, F3, step 1.1]

3.1 **Simple objects and intersection complexes.** For an irreducible support $Z$ with dense smooth open $j:U\hookrightarrow Z$ and a simple finite-rank local system $L$ on $U$ made equivariant, the localization triangles of [F2] give the adjunctions $j_!\dashv j^*\dashv j_*$ and the intermediate extension $j_{!*}L:=\operatorname{im}\bigl({}^pH^0j_!L\to{}^pH^0j_*L\bigr)$ by the truncation functors of step 1.1. The ordinary no-subobject and no-quotient characterization of [F3] applied through the exact conservative normalized functor of [F1] shows that $j_{!*}L$ has no subobject or quotient supported on the boundary, and conversely that a heart object without boundary subobject or quotient is its own intermediate extension along the open inclusion of the locus where its restriction is a local system; this identifies the simples with the objects $\operatorname{IC}_Z(L)=j_{!*}L[\dim_{\mathbb C}Z]$ for simple $L$ on dense smooth opens of irreducible supports. A subobject of $j_{!*}L$ restricts to a subobject of $L$ on $U$, so for simple $L$ the intersection complex is simple; conversely a simple heart object has a nonzero restriction to a suitable open stratum whose restriction must be simple, and the no-boundary characterization identifies the object with the intermediate extension. This proves the classification. [F1, F2, F3, step 1.1, step 2.2]

4.1 **Endomorphism rings.** Let $S$ be a simple heart object and $f:S\to S$ a nonzero endomorphism. Its kernel is a subobject of $S$ and hence zero, and its image is a nonzero subobject and hence all of $S$; thus $f$ is invertible. Therefore $\operatorname{End}(S)$ is a division $k$-algebra, and it is not asserted to equal $k$. This completes the proof. [F3, step 2.2, step 3.1]

5.1 **Conclusion.** Steps 1.1 and 2.1 give the t-structure, its independence of refinement and gluing; steps 2.2, 3.1 and 4.1 give the heart, its finite length, the negative-Hom vanishing and the intersection-complex classification with division endomorphism rings. AC enters as recorded in [A1], and no semisimplicity or characteristic restriction beyond characteristic zero is used. [given, A1, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎

## Remarks

- The equivariant t-structure is detected by restriction to $X$; the
  normalized finite-resolution bridge is used only to transport truncations,
  orthogonality and the intermediate-extension arguments, not to assert that
  arbitrary ordinary perverse objects descend.

- The endomorphism ring of a simple equivariant perverse sheaf is a division
  $k$-algebra; for coefficients in fields where the equivariant local system
  has larger endomorphism algebra it is genuinely larger than $k$.
