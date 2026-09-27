---
id: def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor
kind: definition
title: "The type-A diagrammatic Soergel category and its candidate bimodule functor"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-the-type-a-soergel-category, thm-rank-two-type-a-soergel-bimodule-decompositions, lem-distant-soergel-generators-commute, lem-the-rank-one-soergel-bimodule-square-splits, def-type-a-soergel-bimodule-for-a-simple-reflection, def-type-a-reflection-realization-and-polynomial-ring, def-bott-samelson-bimodule-of-a-word]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §5.1 and p. 5, PDF pp. 5–6, 37–40"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Elias–Khovanov, Diagrammatics for Soergel Categories, Definition 3.8 and §5.1, PDF pp. 27–33, 49–55"
      url: "https://arxiv.org/pdf/0902.4700"
    - title: "Libedinsky, Sur la catégorie des bimodules de Soergel, §§4.4–4.6 and Théorème 5.1"
      url: "https://arxiv.org/pdf/0707.3603"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §§4–5"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  precheck: n/a
---

## Definition

**Soergel graphs.** Fix $n\ge2$ and the type-A realization of
[[def-type-a-reflection-realization-and-polynomial-ring]], so the colors are the
simple reflections $s_1,\ldots,s_{n-1}$, with $m_{st}=3$ for $|s-t|=1$ and
$m_{st}=2$ for $|s-t|>1$. A *Soergel graph* is an isotopy class of decorated
graphs embedded in the planar strip $\mathbb R\times[0,1]$, as in
Elias–Williamson, Definition 5.1: edges are colored by simple reflections and may
meet the bottom boundary $\mathbb R\times\{0\}$ and the top boundary
$\mathbb R\times\{1\}$ in colored boundary points; the decorations are boxes
labelled by homogeneous elements $f\in R$, and the vertices are of three types,
with the degrees of Elias–Williamson, Definition 5.1:

1. univalent vertices (*dots*), degree $+1$;
2. trivalent vertices, all three adjoining edges of one color, degree $-1$;
3. $2m_{st}$-valent vertices, the adjoining edges alternating between two colors
   $s\ne t$ with $m_{st}<\infty$, degree $0$; in type $A$ this is a $4$-valent
   vertex when $|s-t|>1$ and a $6$-valent vertex when $|s-t|=1$.

The degree of a graph is the sum of the degrees of its vertices and boxes; a
graph with bottom boundary $(i_1,\ldots,i_r)$ and top boundary $(j_1,\ldots,j_s)$
has boundary dots of those colors and is read from bottom to top. Composing
graphs by vertical juxtaposition and tensoring them by horizontal juxtaposition
is the usual pasting of boundary graphs.

**The category $D$.** Let $D$ (also written $D_n$) denote the $\mathbb Q$-linear
monoidal category of Elias–Williamson, Definition 5.2, in this type-A case:
objects are the words $\underline i=(i_1,\ldots,i_r)$ in the alphabet
$\{1,\ldots,n-1\}$ — we also write $B_{\underline i}$ for the object, in the
notation of [[def-bott-samelson-bimodule-of-a-word]] — with monoidal structure
given by concatenation and with the empty word as unit; the hom space
$\operatorname{Hom}_D(\underline i,\underline j)$ is the free $\mathbb Q$-module
on the Soergel graphs with bottom boundary $\underline i$ and top boundary
$\underline j$, graded by graph degree and with **degree-zero** composites, modulo
the homogeneous relations of the source, which in type $A$ are:

1. the polynomial relations (5.1) and (5.2) of Elias–Williamson §5.1, which slide
   boxes labelled by $f\in R$ across strands at the cost of the appropriate
   action of the Coxeter group and the Demazure operator, with the root labelling
   the dot on a strand of color $s$;
2. the one-color relations (5.3)–(5.5) of Elias–Williamson §5.1: the Frobenius
   relations among dots and trivalent vertices of a single color and the
   needle relation (5.5): a one-color loop attached at a trivalent vertex
   to a single strand is zero;
3. the two-color relations of Elias–Williamson §§5.2–5.3, in the two parities;
   for distant colors ($m_{st}=2$) the $4$-valent vertex is an interchange
   isomorphism, and for adjacent colors ($m_{st}=3$) the $6$-valent vertex
   satisfies the Jones–Wenzl relations, including the two ways of reading the
   relation that resolve the two triple products
   $B_iB_{i+1}B_i\cong B_{i,i+1,i}\oplus B_i$ and
   $B_{i+1}B_iB_{i+1}\cong B_{i,i+1,i}\oplus B_{i+1}$ of
   [[thm-rank-two-type-a-soergel-bimodule-decompositions]];
4. the three-color relations of Elias–Williamson §§5.4–5.5, which in type $A$
   are: the $A_1\times I_2(m)$ relation (5.8) for a triple of colours consisting
   of two adjacent colours together with a third colour distant from both; its
   special case (5.9) for three pairwise distant colours; and the $A_3$
   *Zamolodchikov relation* (5.10) on three consecutive colours. The $B_3$ and
   $H_3$ relations (5.11)–(5.12) of the source are not part of the type-$A$
   presentation, and Elias–Williamson's Definition 5.2 lists all of (5.8),
   (5.9) and (5.10) before the definition is complete.

For type $A$ the same presentation is enumerated, with all generators, degrees
and local relations, in Elias–Khovanov, Definition 3.8 and §3.4 (relations
(3.1)–(3.37)); the indexing there is $S_{n+1}$ with colors $\{1,\ldots,n\}$ and
polynomial ring in $n+1$ variables of degree $2$, and its internal shift is
translated to the library by $M\{-1\}=M(1)$, as on this page. The Karoubi
envelope $\operatorname{Kar}(D)$ is the idempotent completion of the additive
graded closure of $D$, using degree-zero idempotents and morphisms there.

**The candidate bimodule functor.** Let $\mathcal F:D\to R\text{-Bim}$ be the
assignment that sends a word $\underline i$ to the Bott–Samelson bimodule
$B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}$ of
[[def-bott-samelson-bimodule-of-a-word]] and a graph to a bimodule map by the
following images on the generating vertices, all of which are the maps displayed
in Elias–Williamson, p. 5, written here in the library's shifts and with
$\alpha_s$ and $\partial_s(f)=(f-sf)/\alpha_s$:

1. the degree-$+1$ dot $B_s\to R$ ↦ the map $f\otimes g\mapsto fg$;
2. the degree-$+1$ dot $R\to B_s$ ↦ the map $1\mapsto\tfrac12(\alpha_s\otimes1+1\otimes\alpha_s)$;
3. the degree-$-1$ trivalent vertices ↦ the maps
   $1\otimes g\otimes1\mapsto\partial_sg\otimes1$ and $1\otimes1\mapsto1\otimes1\otimes1$;
4. a box labelled by homogeneous $f\in R$ ↦ multiplication by $f$ in the region
   of the tensor product where the box lies, that is, the $R$-bimodule structure
   of the corresponding Bott–Samelson bimodule;
5. a $4$-valent vertex of two distant colors ↦ the interchange isomorphism
   $B_i\otimes_RB_j\to B_j\otimes_RB_i$ of
   [[lem-distant-soergel-generators-commute]];
6. a $6$-valent vertex of two adjacent colors ↦ the unique degree-zero
   bimodule map between the two alternating reduced-word products that sends
   their $1$-tensor to the $1$-tensor, as specified for a $2m$-valent vertex in
   Elias–Williamson §§5.2–5.3 (and given explicitly by Libedinsky). It factors
   through the common summand $B_{i,i+1,i}$ of the two triple products in
   [[thm-rank-two-type-a-soergel-bimodule-decompositions]]; the existence of
   that summand alone does not specify the map's scalar.

**Status.** The assignment $\mathcal F$ is a *candidate*: this item defines its
values on generators only, and no functoriality is asserted here. That the values
respect the relations, so that $\mathcal F$ is a graded monoidal functor, is the
content of the next item on this page; the functor is not asserted to be an
equivalence before the double-leaves items.

## Remark

**(a) Degree bookkeeping.** The degrees above are the degrees of the
Elias–Williamson graphs, in which a polynomial box labelled by $f$ has degree
$\deg f$ with $\deg x_i=2$, a dot has degree $+1$ and a trivalent vertex has
degree $-1$. Because the library's bimodules carry the shift convention
$M(1)=M\{-1\}$ of [[def-type-a-soergel-bimodule-for-a-simple-reflection]], in
which $1\otimes1\in B_s$ has degree $-1$, a graph of degree $d$ is sent to a
bimodule map of degree $d$: for example the degree-$+1$ dot $B_s\to R$ sends the
degree-$-1$ element $1\otimes1$ to the degree-$0$ element $1\in R$; the
degree-$-1$ splitting vertex $1\otimes1\mapsto1\otimes1\otimes1$ sends the
degree-$-1$ element $1\otimes1\in B_s$ to the degree-$-2$ element
$1\otimes1\otimes1\in B_sB_s$; and the degree-$-1$ merging vertex
$1\otimes g\otimes1\mapsto\partial_sg\otimes1$ sends the degree-$0$ element
$1\otimes\alpha_s\otimes1$ to $2(1\otimes1)$ of degree $-1$. The element
$1\otimes1\otimes1$ is not a witness for the merging vertex: it has degree $-2$
and $\partial_s(1)=0$, so this instance of the merge is the zero map.
Scalars: the sources fix the normalisation $\delta=\alpha_s/2$ and send the
second dot to $1\mapsto\tfrac12(\alpha_s\otimes1+1\otimes\alpha_s)
=\delta\otimes1+1\otimes\delta$, which is Elias–Williamson's image
$1\mapsto\Delta_s$ of Definition 5.12 in the balanced type-$A$ case, where
$\Delta_s=\tfrac12(\alpha_s\otimes1+1\otimes\alpha_s)$ because $\tfrac12$ exists
in $k=\mathbb Q$. The *unscaled* element
$Z_s=\alpha_s\otimes1+1\otimes\alpha_s=2\Delta_s$ used in
[[thm-rank-two-type-a-soergel-bimodule-decompositions]] and in the rank-two
example is *not* the image of this dot: it differs from it by the invertible
scalar $2$, and the rank-two splitting maps built from $Z_s$ differ from the
fixed diagrammatic generators by that factor, so the relation checks and the
six-valent generator are *not* invariant under this rescaling without
adjustment. When the balanced realization of
[[def-type-a-reflection-realization-and-polynomial-ring]] is used, the
translation is by the alternating signs $\varepsilon_s,\varepsilon_t$ with
$\varepsilon_s\varepsilon_t=-1$: the insertion maps rescale as
$\mu_t^{a,\alpha}=\varepsilon_t\mu_t^{a,\beta}$ and the contractions as
$\kappa_s^\alpha=\varepsilon_s\kappa_s^\beta$, the zig-zag composite changes sign,
and the idempotent and the summand it defines do not. Throughout this item the
normalisation used is the displayed one, $1\mapsto\tfrac12(\alpha_s\otimes1
+1\otimes\alpha_s)$.

**(b) Small $n$.** For $n=2$ there is one color, no pair of distinct colors, and
so no $4$-valent or $6$-valent vertices; $D_2$ is generated by the one-color
graphs, and the rank-one square relation of
[[lem-the-rank-one-soergel-bimodule-square-splits]] is the corresponding
idempotent decomposition. For $n\le1$ there are no colors at all. The word category $D$ has only the
empty word, with $\operatorname{End}(\emptyset)=R$; its additive graded and
Karoubi closures also contain sums, shifts and their summands. No vertex, and
in particular no $2m$-valent vertex, is used.

**(c) What is not claimed.** Nothing here asserts that the relations of the
sources list every relation valid in $\mathrm{BSBim}$, nor that $\mathcal F$
descends to $D$, nor that $D$ has finite-dimensional hom spaces. Those are
separate items of this page, proved from the sources quoted there.

**(d) Imported statements of the sources, recorded for the later items.** The
later items of this page cite the following results of Elias–Williamson and
Elias–Khovanov through this definition; we record their content here, in the
notation fixed above, so that every later citation has a textual anchor in this
item. Write $\mathrm{LL}_{\underline x,\underline y}$ for a set consisting of one
fixed choice of double leaf
$\overline{\mathrm{LL}}_{\underline y,f}\circ\mathrm{LL}_{\underline x,e}$,
the light leaf from $\underline x$ followed by the flipped light leaf towards
$\underline y$, so that the composite is a morphism $\underline x\to\underline y$
for each pair of subexpressions $e,f$ of $\underline x,\underline y$ expressing a
common element $w$. Fix one reduced word $\underline w$ for each such
$w$, shared by both light leaves in each composite; their common intermediate
object is that word, not the permutation itself. Let $I_w$ for the two-sided ideal spanned by double leaves
factoring through elements $y\not\ge w$ in Bruhat order
(Elias–Williamson, §6.4). Thus $D_{\ge w}=D/I_w$ retains the cells indexed
by $y\ge w$; for maps into a reduced-word object $B_{\underline w}$, this
amounts to quotienting by terms indexed by $y<w$.

1. *Double leaves.* (Elias–Williamson, Theorem 6.11 with Proposition 6.12 and
   Corollary 6.13.) The set $\mathrm{LL}_{\underline x,\underline y}$ forms a
   free $R$-basis for $\operatorname{Hom}(B_{\underline x},B_{\underline y})$ in
   $D$; the light leaves $\mathrm{LL}_{\underline x,e}$ with $e$ expressing the
   identity form a free $R$-basis for $\operatorname{Hom}(B_{\underline x},
   \mathbf 1)$ in $D$; and hom spaces in $D$ are free graded $R$-modules. This
   is proved from two inputs: by Elias–Williamson, Proposition 6.9, after
   localization the space of maps is a direct sum of terms indexed by pairs of
   subsequences carrying a partial order with respect to which the double-leaf
   maps are upper triangular with an invertible diagonal, so the double leaves are
   linearly independent over the fraction field; and by the result of item 3
   below they span.
2. *Construction of light leaves.* (Elias–Williamson, Construction 6.1 with
   Figure 2.) For every pair $(\underline x,e)$ expressing $w$ and every
   $k\le\ell(\underline x)$, the truncated light leaf on the first $k$ letters is
   obtained from the truncated light leaf on the first $k-1$ letters by a rex
   move $\beta$ when the $k$-th letter is a down step, followed by exactly one of
   four local moves: the dot $U_0$ of degree $+1$, the identity $U_1$ of degree
   $0$, the merging trivalent vertex $D_0$ of degree $-1$, and the cap $D_1$ of
   degree $0$. The degree of the morphism $\mathrm{LL}_{\underline x,e}$ is $+1$
   for each $U_0$ and $-1$ for each $D_0$, and hence agrees with the defect
   $d(e)=\#U_0-\#D_0$ of the subexpression.
3. *Basis modulo lower terms.* (Elias–Williamson, §7, Proposition 7.6, with the
   maxwidth induction of §7: for arbitrary $\underline x$ and a reduced word
   $\underline w$ for $w$, the maps $\mathrm{LL}_{\underline x,e}$, one for each
   subexpression $e$ of $\underline x$ expressing $w$, form a basis for
   $\operatorname{Hom}(B_{\underline x},B_{\underline w})/I_w$ under the action
   of $R$ on the left.) Linear independence is already known by localization, so
   it is enough to show that these maps span; the proof represents the identity
   of a word as a negative-positive decomposition, factors an arbitrary morphism
   through a reduced word, and pushes the lower terms through by induction on the
   maximum width of a graph, using only the relations of $D$. Consequently every
   morphism between Bott–Samelson objects lies in the span of the double leaves
   modulo the ideal of strictly lower terms.
4. *Krull–Schmidt.* (Elias–Williamson, Lemma 6.24.) If $k$ is a complete local
   ring then the category $\operatorname{Kar}(D)$ is Krull–Schmidt.
5. *Classification of indecomposables.* (Elias–Williamson, Theorem 6.25.)
   Assume that $k$ is a complete local ring; then for all $w\in W$ there exists a
   unique summand $B_w$ of $B_{\underline w}$ which is not isomorphic to the
   shift of a summand of $B_{\underline v}$ for any reduced expression
   $\underline v$ for $v<w$; the object $B_w$ does not depend on the reduced
   expression $\underline w$ up to isomorphism; every indecomposable object of
   $\operatorname{Kar}(D)$ is isomorphic to a shift of $B_w$ for some $w\in W$;
   hence the passage to isomorphism classes up to shift is a bijection from $W$
   onto the indecomposable objects of $\operatorname{Kar}(D)$ up to shifts and
   isomorphism.
6. *Relation checks for the bimodule functor.* (Elias–Khovanov, §5.1 with
   Definition 3.8 and Claim 5.1.) Each of the finitely many relations
   (3.1)–(3.37) of the type-A presentation holds for the images of the generating
   morphisms in Soergel bimodules, and the verification is finite; by Claim 5.1 a
   Bott–Samelson bimodule $\underline i$ of length $d$ with $m$ distinct colours
   is generated as an $R$-bimodule by any set of $2^{d-m}$ linearly independent
   tensors that is in bijection with the power set of the set $X$ of
   repeated-colour pairs and realises each pair by a linear factor inside that
   pair, so the two-color and three-color relations may be checked on $2^{d-m}$
   generators.
7. *The diagrammatic character.* (Elias–Williamson, §6.5: Definition 6.23 with
   equations (6.3) and (6.4), and Corollaries 6.26 and 6.27.) For $w\in S_n$ let
   $D_{\ge w}:=D/I_w$ be the quotient retaining the Bruhat cells $y\ge w$
   as just defined. For a reduced word $\underline w$ for
   $w$ the images of $B_{\underline w}$ in $D_{\ge w}$ are canonically
   isomorphic and $\operatorname{End}_{D_{\ge w}}(B_{\underline w})=R$; by
   imported result 1 above the module
   $\operatorname{Hom}_{D_{\ge w}}(B_{\underline x},B_{\underline w})$ is free
   with basis the light leaves $\mathrm{LL}_{\underline x,e}$, $e$ a
   subexpression of $\underline x$ expressing $w$, so that in the Hecke algebra
   of [[def-type-a-hecke-algebra-in-soergel-normalization]]
   $$H_{\underline x}=\sum_{w\in S_n}\operatorname{grk} \operatorname{Hom}_{D_{\ge w}}(B_{\underline x},B_{\underline w})\,\widetilde T_w,$$
   where $H_{\underline x}$ denotes the product of the $H_{x_a}$ along
   $\underline x$, the right-hand coefficients are expanded in the standard
   normalized basis $\{\widetilde T_x=v^{\ell(x)}T_x\}$ of
   [[lem-type-a-hecke-standard-basis-for-soergel-comparison]] (Elias–Williamson's
   basis element $H_w$), and $\operatorname{grk}$ the graded rank. Since $k=\mathbb Q$
   is a local ring, direct summands of free graded $R$-modules are graded free
   by Nakayama's lemma, so the *diagrammatic character*
   $$\mathrm{ch}:[\operatorname{Kar}(D)]\longrightarrow H_n,\qquad B\mapsto\sum_{w\in S_n}\operatorname{grk} \operatorname{Hom}_{\operatorname{Kar}(D_{\ge w})}(B,B_w)\,\widetilde T_w,$$
   is a well-defined homomorphism of $\mathbb Z[v^{\pm1}]$-modules with
   $\mathrm{ch}(v[B])=\mathrm{ch}(B(1))=v\,\mathrm{ch}(B)$; it satisfies
   $\mathrm{ch}(B_{\underline x}B_{\underline y})
   =\mathrm{ch}(B_{\underline x})\mathrm{ch}(B_{\underline y})$ for words
   $\underline x,\underline y$ and $\mathrm{ch}(B_s)=H_s$ for every simple
   reflection $s$, hence is multiplicative on the classes of Bott–Samelson
   objects. Moreover $\mathrm{ch}$ is an isomorphism of
   $\mathbb Z[v^{\pm1}]$-algebras: the classes $[B_{\underline x}]$ span the
   split Grothendieck group, the classes $[B_w]$ of the distinguished
   indecomposable summands of reduced-word objects are a basis, and
   $\mathrm{ch}(B_w)=\widetilde T_w+\sum_{y<w}g_{y,w}\widetilde T_y$
   with $g_{w,w}=1$ and the sum over the strictly lower elements $y<w$ of the
   Bruhat order, so triangularity with unit diagonal in the standard basis
   $\{\widetilde T_y\}$ makes $\mathrm{ch}$ a bijection. A reduced-word
   object itself may have lower summands, as $B_{sts}\cong B_{w_0}\oplus B_s$
   in rank two. Finally the assignment $H_s\mapsto[B_s]$ defines a
   homomorphism $H_n\to[\operatorname{Kar}(D)]$.
8. *The light-leaf basis of the hom space to the unit.* (Libedinsky,
   **Sur la catégorie des bimodules de Soergel**, arXiv:0707.3603,
   §§4.4–4.6 and Théorème 5.1, with its proof in §5.) For a reflection-faithful
   representation over a field of characteristic different from two, put
   $\theta_s=R\otimes_{R^s}R$, so the library's $B_s=\theta_s(1)$.
   From $R=R^s\oplus x_sR^s$, §4.4 defines $R^s$-linear coefficient operators
   $P_s,I_s,I'_s$ on $R$ (these are not $R$-bimodule endomorphisms) and the
   bimodule maps $m_s,i_s^0,i_s^1$ on the unshifted tensor products.
   Sections 4.5–4.6 fix braid paths and recursively construct leaves by the
   four up/down rules. Théorème 5.1 states that the leaves $A'_r$ ending at
   $R$ form an $R$-basis of
   $\operatorname{Hom}_{R\text{-}R}(\theta_{s_1}\cdots\theta_{s_r},R)$.
   Its proof evaluates these leaves on the normal tensor basis, obtains a
   triangular matrix with diagonal entries one, and compares finite-dimensional
   graded pieces using Corollary 4.2 and Lemma 5.6.
   In ordinary map-degree notation a leaf using $h$ contractions has degree
   $-2h$ on the unshifted source and degree $r-2h$ on
   $B_{s_1}\cdots B_{s_r}=(\theta_{s_1}\cdots\theta_{s_r})(r)$.
   Thus the unshifted Hecke count is
   $\sum_{a\in A'_r}q^{-\deg(a)/2}=p_r^1$, where
   $\prod_j(1+T_{s_j})=\sum_w p_r^wT_w$ and $q=v^{-2}$.
   The minus sign is necessary with ordinary map degrees: for the word $ss$
   the degrees are $0,-2$ and $p_2^1=1+q$. The printed positive sign in
   Definition 5.4 and the degree-increase wording in Lemma 5.6 are inconsistent
   with the explicit contraction of degree $-2$ and the computation on p. 19;
   they are not adopted here. This source uses its own braid-map normalization;
   the evaluated Elias–Williamson leaves are handled separately by result 11.
9. *Adjunction and double leaves.* (Elias–Williamson, Remark 6.10 and
   §6.7, especially Remark 6.29.) Vertical flipping and rotating a light leaf
   give different constructions; no entrywise identification of a vertically
   flipped double leaf with a bent unit-target light leaf is asserted.
   Cups and caps make each generating strand self-biadjoint by planar isotopy.
   Evaluation sends these cups and caps to the degree-zero Frobenius
   coevaluation and evaluation of the bimodule $B_s$. Consequently bending
   boundary strands commutes with evaluation. An isomorphism on Hom spaces
   to the unit therefore implies an isomorphism on Hom spaces between words.
   The image of a diagrammatic double-leaf basis is then a basis under this
   isomorphism, independently of the basis obtained by bending light leaves.
10. *The defect expansion of a product of generators.* (Elias–Williamson, §2.4,
    Lemma 2.10 with Corollary 2.11, in the normalization $H_s=vT_s+v$,
    $\widetilde T_w=v^{\ell(w)}T_w$ of
    [[def-type-a-hecke-algebra-in-soergel-normalization]].) A subexpression of a
    word $\underline x=(x_1,\ldots,x_m)$ is a $01$-sequence $e$, with Bruhat
    stroll $x_0=e$, $x_k=x_{k-1}s$ if the letter is kept and $x_k=x_{k-1}$
    otherwise; each index carries a token $U_0$, $U_1$, $D_0$ or $D_1$ according
    to whether the letter is kept and whether the stroll moved up or down, and
    the defect is $d(e)=\#U_0-\#D_0$. Then
    $$H_{x_1}\cdots H_{x_m}=\sum_{e}v^{d(e)}\,\widetilde T_{w_e},$$
    the sum over all subexpressions $e$ of $\underline x$, where $w_e$ is the
    element expressed by $e$. Equivalently, for a Bott–Samelson bimodule
    $B_{\underline x}$ the $\Delta$-multiplicity of the standard bimodule
    $\Delta_w(d)$ is the number of subexpressions of $\underline x$ expressing
    $w$ with defect $d$,
    $(B_{\underline x}:\Delta_w(d))=\#\{e:w_e=w,\ d(e)=d\}$.
11. *Localised independence of the evaluated light leaves.* (Elias–Williamson,
    §6.7, Remark 6.29, read together with the localisation argument of the proof
    of Corollary 6.8 of the same section.) Fix an expression $\underline x$ and a
    reduced word $\underline w$ for an element $w\in S_n$, and let
    $\mathrm{LL}_{\underline x,\underline w}$ consist of one light leaf
    $\mathrm{LL}_{\underline x,e}:B_{\underline x}\to B_{\underline w}$ for each
    subexpression $e$ of $\underline x$ expressing $w$, chosen once and for all,
    so that each $\mathcal F(\mathrm{LL}_{\underline x,e})$ is a composition of
    the images of dots, trivalent vertices and $2m_{st}$-valent vertices. Then
    the images $\mathcal F(\mathrm{LL}_{\underline x,e})$ are linearly independent
    over $R$ as elements of
    $\operatorname{Hom}_{\mathrm{BSBim}}(B_{\underline x},B_{\underline w})$: the
    same localisation argument as in the proof of Corollary 6.8, carried out in
    the localised category of Soergel bimodules, exhibits the images of the
    light leaves as upper triangular with invertible diagonal, and localisation
    is injective on hom spaces. Comparing the degrees of the light leaves (the
    defects of result 2 above) with the graded dimension of
    $\operatorname{Hom}(B_{\underline x},R)$ then shows that the images of the
    light leaves $\mathrm{LL}_{\underline x,e}$ with $e$ expressing the identity
    span $\operatorname{Hom}(B_{\underline x},R)$ as a graded $R$-module.
