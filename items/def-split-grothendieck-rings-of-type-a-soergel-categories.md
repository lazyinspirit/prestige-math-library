---
id: def-split-grothendieck-rings-of-type-a-soergel-categories
kind: definition
title: "Split Grothendieck rings of the type-A Soergel categories"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-additive-category, def-the-type-a-soergel-category, def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor, lem-distant-soergel-generators-commute, lem-the-rank-one-soergel-bimodule-square-splits]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §3.5, PDF pp. 27–29"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §4.1, PDF pp. 20–22"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  precheck: n/a
---

## Definition

**Setting.** Fix $n\ge2$ and the two graded additive monoidal categories of this
page: the type-A Soergel category $\mathrm{SBim}_n$, the idempotent completion of
the category of Bott–Samelson bimodules
([[def-the-type-a-soergel-category]]), and the Karoubi envelope
$\operatorname{Kar}(D)$ of the type-A diagrammatic category
$D$ ([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]).
Both are graded: an object $X$ has a shift $X(1)=X\{-1\}$, and both are monoidal
with unit the one-object bimodule $R$ respectively the empty word. Both are
additive in the sense of [[def-additive-category]].

**The split Grothendieck group.** For such a category $C$ choose a *small
skeleton*, that is, a set $\operatorname{sk}(C)$ of representative objects
meeting every isomorphism class exactly once — for $\mathrm{SBim}_n$ one may take
the graded direct summands of finite direct sums of shifts of Bott–Samelson
bimodules with a fixed underlying set of words, and for
$\operatorname{Kar}(D)$ the idempotents in finite direct sums of shifts of words,
so that the representatives form a set rather than a proper class. Define
$$K_0^{\mathrm{split}}(C):=\Bigl(\bigoplus_{X\in\operatorname{sk}(C)}\mathbb Z[X]\Bigr)\Big/\,\bigl\langle[X]-[X']-[X'']\ :\ X\cong X'\oplus X''\ \text{in }C\bigr\rangle,$$
the free abelian group on the isomorphism classes of representative objects
modulo the relations $[X]=[X']+[X'']$ whenever $X$ is isomorphic to a direct sum
of $X'$ and $X''$.

**Ring structure.** For representatives $X,Y$ the tensor product $X\otimes Y$
is again an object of $C$, whose isomorphism class is represented by a unique
element of the skeleton; the assignment $(X,Y)\mapsto X\otimes Y$ is additive in
each variable up to isomorphism, so $[X][Y]:=[X\otimes Y]$ descends to a
well-defined bilinear product on $K_0^{\mathrm{split}}(C)$, with the unit
$1:=[\mathbf 1]$ the class of the monoidal unit $R$ (respectively the empty
word). Associativity and unitality of the tensor product make
$K_0^{\mathrm{split}}(C)$ a ring; it is not commutative in general, and
$K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ is not commutative for $n\ge3$, since
the classes of two adjacent one-color products do not commute. The grading
shift is an additive
autoequivalence commuting with the tensor product, so setting
$$v[X]:=[X(1)]=[X\{-1\}]$$
equips $K_0^{\mathrm{split}}(C)$ with the structure of a
$\mathbb Z[v,v^{-1}]$-algebra, with $v^{-1}[X]=[X(-1)]=[X\{1\}]$.

**The two charts.** For the bimodule category the classes are those of the
Bott–Samelson products, $[B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}]$, and for
every object $X$ the shift rule is $[X\{k\}]=v^{-k}[X]$; for the diagrammatic
category the class of a word is $[B_{\underline i}]$, with the same shift rule.
The standard bimodules $R_x$, $\Delta_x(d)$ and $\nabla_x(d)$ with $x\ne e$ are
not objects of $\mathrm{SBim}_n$ — they occur only as the successive quotients
of the support flags of its objects — so this definition attaches no object
class to them; the Hecke algebra's basis elements indexed by $x$ are written
$T_x,\widetilde T_x,H_x$, as in
[[def-type-a-hecke-algebra-in-soergel-normalization]]. Under the
dictionary of [[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]
the two rings are compared by sending $[B_{\underline i}]$ to
$[B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}]$; the comparison is an isomorphism only
after the equivalence of the two categories is proved later on this page.

## Remark

**(a) Local scope.** This definition supplies only the split rings of the two
categories used on this page, on explicitly chosen small skeletons; it makes no
claim about general Grothendieck groups, Cartan pairings, or the Grothendieck
groups of arbitrary additive or abelian categories, which belong to the general
homological-algebra track. The only group-theoretic input is that a set of
representatives exists, and the only ring-theoretic input is bifunctoriality and
additivity of $\otimes$, both of which hold for the two categories named here.

**(b) The relation with the internal shift.** In the library convention
$M\{r\}_d=M_{d-r}$ the internal shift by $r$ moves every generator degree up by
$r$, so $[X\{r\}]=v^{-r}[X]$: the element $v$ of the Laurent ring is the class of
the shift that *lowers* degrees, which is the Elias–Williamson shift $(1)$ and the
shift appearing in $B_i=R\otimes_{R^{s_i}}R(1)$. The one-color square
$B_i\otimes_RB_i\cong B_i(1)\oplus B_i(-1)$ of
[[lem-the-rank-one-soergel-bimodule-square-splits]] therefore reads
$[B_i]^2=(v+v^{-1})[B_i]$.

**(c) Products of generators.** The product rule gives
$[B_{\underline i}]=[B_{i_1}]\cdots[B_{i_r}]$, and for $|i-j|>1$ the interchange
isomorphism of [[lem-distant-soergel-generators-commute]] gives
$[B_i][B_j]=[B_j][B_i]$ in $K_0^{\mathrm{split}}$. No generation statement is made
here: the skeleton of $\mathrm{SBim}_n$ also contains *idempotent summands* of
words, and in a split Grothendieck ring the defining relations give only
$[X]=[Y]-[Z]$ for $Y\cong X\oplus Z$, so the class of such a summand is not in
general determined by the classes of the ambient words. Generation by the classes
of the $B_i$ together with $v^{\pm1}$ is therefore established later on this
page, from the character isomorphism, and is not an input to it.

**(d) Small and empty cases.** For $n\le1$ there are no simple reflections, so
the only word is the empty one and every object of $\mathrm{SBim}_n$ is a finite
direct sum of shifts of the unit $R$, whence
$K_0^{\mathrm{split}}=\mathbb Z[v,v^{-1}]\cdot[R]$; for $n=2$ the only words are
powers of $s_1$, the one-color square exhibits each $B_1^{\otimes k}$ with
$k\ge1$ as a finite direct sum of shifts of $B_1$, and $[R]$ is the unit. In
every case the
empty-direct-sum relation $[0]=0$ is the case $X\cong X\oplus 0$ of the defining
relations, and no choice principle is used: each skeleton is a set of concrete
objects, and $\mathbb Z[X]$ is the free group on that set.
