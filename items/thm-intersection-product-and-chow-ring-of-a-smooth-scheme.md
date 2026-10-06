---
id: thm-intersection-product-and-chow-ring-of-a-smooth-scheme
kind: theorem
title: "The intersection product and Chow ring of a smooth scheme"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-bivariant-chow-operations
  - def-fibre-product-schemes-universal-property
  - def-refined-gysin-pullback-for-regular-embeddings
  - def-smooth-morphism-schemes
  - lem-cycle-of-a-closed-subscheme
  - lem-flat-pullback-chow-groups
  - lem-operational-chern-classes-and-whitney-formula
  - lem-proper-pushforward-of-cycles-well-defined
  - lem-refined-gysin-commutation-and-composition
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.60-42.62 (rational intersection products on regular schemes, tags 0FEX-0FC1)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.60-42.62: exterior product, Gysin maps for diagonals and the intersection product"
    - title: "William Fulton, Intersection Theory, Chapters 8 and 17 — bibliographical comparison, not retrieved"
      url: "https://link.springer.com/book/10.1007/978-1-4612-1700-8"
      locator: "Chapter 8: intersection products on smooth varieties"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
smooth-immersion and homological suppliers. For a smooth equidimensional finite
type $k$-scheme $X$ of dimension $n$, $A^p(X)=A_{n-p}(X)$ is a commutative
graded ring with unit $[X]$ and product
$\alpha\beta=\Delta_X^!(\alpha\times\beta)$. The diagonal is a regular immersion
(closed if $X$ is separated); use the locally closed extension of
[[def-refined-gysin-pullback-for-regular-embeddings]] otherwise. Exterior
product on integral cycles is the fundamental cycle $[V\times_k W]$, with
generic lengths and all components; over a non-algebraically-closed field this
product scheme need not be integral. Exterior product descends to rational
equivalence and is associative and symmetric. Every morphism $f:X'\to X$ of
smooth finite type $k$-schemes has a codimension-preserving ring pullback
$f^*:=\Gamma_f^!\operatorname{pr}_X^*$; it agrees with flat pullback when $f$ is
flat and obeys composition. If $X'$ has open equidimensional components
$X'_j$ of dimensions $n_j$, set $A^p(X'):=\bigoplus_j A_{n_j-p}(X'_j)$,
with componentwise product. For proper $f$, the restriction $f_j:X'_j\to X$
has $f_{j,*}:A^p(X'_j)\to A^{p+n-n_j}(X)$, and
$f_*(f^*\alpha\,\beta)=\alpha f_*\beta$ in the total Chow group.
Thus the single shift $n-\dim X'$ applies when $X'$ is equidimensional. Operational $c_j(E)$ correspond to
classes $c_j(E)\cap[X]$ and their cap action is multiplication by these classes;
in particular $c_1(L)\alpha=c_1(L)\cap\alpha$. More generally the operational
action on $A_*(X)$ agrees with the product after the dimension identification.

## Facts & Assumptions

**Given:** the Axiom of Choice; a smooth equidimensional finite type $k$-scheme $X$ of dimension $n$; its diagonal $\Delta_X:X\to X\times_kX$ and exterior product on cycles.

[L1] Refined Gysin pullback for regular embeddings is defined, is bivariant, commutes with every bivariant operation, composes, satisfies the excess and self-intersection formulas, and for a regular section of a smooth morphism gives $s^!p^*=1$ ([[def-refined-gysin-pullback-for-regular-embeddings]], [[lem-refined-gysin-commutation-and-composition]]).

[L2] The diagonal of a smooth $k$-scheme is a regular immersion of codimension $n$; if $X$ is separated it is a closed immersion, and otherwise a locally closed one; both projections $X\times_kX\to X$ are smooth ([[def-smooth-morphism-schemes]], [[def-fibre-product-schemes-universal-property]], [[lem-refined-gysin-commutation-and-composition]]).

[L3] Cycles, fundamental cycles, flat pullback and proper pushforward are as in [[lem-cycle-of-a-closed-subscheme]], [[lem-flat-pullback-chow-groups]] and [[lem-proper-pushforward-of-cycles-well-defined]]; exterior product on cycles is the assignment on integral cycles $[V]\times[W]\mapsto[V\times_kW]$.

[L4] Operational Chern classes and their cap action are defined on singular schemes and satisfy the Whitney and section formulas ([[lem-operational-chern-classes-and-whitney-formula]]).

## Proof

**Proof technique:** direct; define the exterior product by flat pullback and proper pushforward, define the product by the diagonal Gysin, and verify the ring axioms by the composition and commutation theorems for refined Gysin.

1.1 Exterior product. For integral closed subschemes $V\subseteq X$, $W\subseteq X'$ define $[V]\times[W]:=[V\times_kW]$, the fundamental cycle of the product, taken with all irreducible components and their generic lengths by [L3]; this is the product of the cycle classes and is bilinear. For a fixed integral $W\subseteq X'$, it is the flat pullback along $X\times W\to X$ followed by the closed-immersion pushforward $X\times W\hookrightarrow X\times X'$; the symmetric description handles the other variable. Hence descends to rational equivalence in either variable and commutes with all bivariant operations by [L1]; symmetry of the construction and of the generic lengths makes the product symmetric, and associativity is checked on fundamental cycles of triple products, where both iterated flat pullbacks compute the same generic length by associativity of tensor products and the flat length multiplicity computation. Extension is bilinear and the components are retained with their multiplicities, so no integrality hypothesis on the field is used. [L1, L3, given, algebra]

2.1 The product. The diagonal $\Delta_X$ is a regular immersion of codimension $n$ by [L2], so the refined Gysin $\Delta_X^!$ is defined and graded; set $\alpha\beta:=\Delta_X^!(\alpha\times\beta)$. Associativity follows by comparing the two codimension-$n$ diagonals $\Delta_{12},\Delta_{23}\subseteq X^3$: the iterated Gysins both equal the small diagonal Gysin by the composition theorem of [L1], and exterior-product compatibility moves each inner Gysin into $X^3$; commutativity follows from the symmetry of $\Delta_X$ and of the exterior product in step 1.1. The unit is $[X]$: $\alpha\times[X]=\operatorname{pr}_1^*\alpha$ for the smooth first projection, and $\Delta^!\operatorname{pr}_1^*=1$ by the smooth-section identity of [L1] (the diagonal is a section of the smooth projection $\operatorname{pr}_1$), so $\Delta^!(\operatorname{pr}_1^*\alpha)=\alpha$; the other unit is symmetric. [L1, L2, step 1.1, algebra]

3.1 Ring pullback. For a morphism $f:X'\to X$ of smooth schemes define $f^*:=\Gamma_f^!\operatorname{pr}_X^*$, where $\Gamma_f\subseteq X'\times_kX$ is the graph, a regular immersion because it is a section of the smooth projection $X'\times_kX\to X'$ by [L2], and $\operatorname{pr}_X^*$ is flat pullback. When $f$ is flat this agrees with the flat pullback: the graph Gysin commutes with flat pullback and $f^*$ is characterized on test classes by the same computation, and composition of ring pullbacks holds by the composition theorem for refined Gysin applied to the graphs and the projection identity of [L1]. Since the graph is a section of a smooth morphism, $\Gamma_f^!\operatorname{pr}_{X'}^*=1$, which identifies $f^*$ with the codimension-preserving pullback of the smooth-ring statement. [L1, L2, step 2.1, algebra]

4.1 Projection formula. For proper $f:X'\to X$ and classes $\alpha,\beta$, write $\alpha$ as the operational class $\alpha\cap-=\alpha\times-$ composed with the diagonal, i.e. $\alpha=c[X]$ for the bivariant class $c$ given by exterior product with $\alpha$ and diagonal Gysin; then $f_*(f^*\alpha\,\beta)=f_*(c\beta)=cf_*\beta=\alpha f_*\beta$ by the proper axiom of bivariant classes and the identification of step 2.1. This is the displayed projection formula; on each equidimensional component $X'_j$ the dimension grading gives the shift $n-n_j$. A smooth finite type scheme has finitely many open equidimensional components, since its regular local rings make its irreducible components disjoint; all graph and operational computations apply componentwise. [L1, step 2.1, step 3.1, algebra]

5.1 Operational Chern classes. For $\alpha\in A_*(X)$ define an operation on a test morphism $h:T\to X$ by $c_\alpha(\beta)=\Gamma_h^!(\alpha\times\beta)$, with the graph in $X\times T$. The graph is a regular section of the smooth projection to $T$, even for singular $T$, and [L1] and step 1.1 give the proper, flat and Cartier axioms. Its value on $[X]$ is $\alpha$ by the unit computation. Conversely, for an operational class $c$ and integral $V\subseteq T$, use the flat projection $X\times V\to X$ and the closed immersion $X\times V\to X\times T$ to get $c([X]\times[V])=(c[X])\times[V]$. Commutation of $c$ with graph Gysin by [L1], and the smooth-section identity $\Gamma_h^!([X]\times[V])=[V]$, give $c[V]=\Gamma_h^!((c[X])\times[V])$. Extend linearly to every class. Evaluation on $[X]$ and $\alpha\mapsto c_\alpha$ are therefore inverse, and on $T=X$ the action of $c$ is multiplication by $c[X]$. For the classes $c_j(E)$ of [L4] this is multiplication by $c_j(E)\cap[X]$, compatible with Whitney and section formulas. [L1, L4, step 2.1, step 4.1, algebra] ∎
