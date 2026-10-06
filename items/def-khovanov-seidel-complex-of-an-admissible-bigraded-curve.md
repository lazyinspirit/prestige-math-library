---
id: def-khovanov-seidel-complex-of-an-admissible-bigraded-curve
kind: definition
title: "The complex of an admissible bigraded curve"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps:
  - def-khovanov-seidel-bigraded-cover-and-bigraded-curves
  - def-khovanov-seidel-bigrading-cover-and-local-intersection-indices
  - def-basic-arcs-admissible-curves-and-normal-form
  - lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers
  - def-graded-khovanov-seidel-module-category-and-projectives
  - lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action
  - lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Section 4a"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Section 4a, formula (4.1) and Lemma 4.1, printed pp. 33-36"
verification:
  precheck: pass
---

## Definition

Fix the normalized bigradings $\widetilde d_i,\widetilde b_i$ of
[[lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers]].
Let $\widetilde c$ be an admissible bigraded curve in normal form with respect
to the fixed basic set and vertical curves
([[def-basic-arcs-admissible-curves-and-normal-form]]), with crossing set
$\operatorname{cr}(\widetilde c)$ and local index $(x_1,x_2):=\mu^{\mathrm{bigr}}(\widetilde d_{x_0},\widetilde c;x)\in\mathbb Z^2$ at
each crossing $x$; here $x_0$ denotes the index of the vertical curve $d_{x_0}$
containing $x$, so that $x\in d_{x_0}$, and for a crossing of the underlying
curve $c$ the local index of the bigrading is interpreted through the
identification of the crossings of $\widetilde c$ with those of $c$
([[def-khovanov-seidel-bigrading-cover-and-local-intersection-indices]]). Put
$$P(x):=P_{x_0}[-x_1]\{x_2\}\in C_m,\qquad L(\widetilde c):=\bigoplus_{x\in\operatorname{cr}(\widetilde c)}P(x),$$
the direct sum of shifted vertex projectives indexed by the crossings, where
$P_{x_0}=A_me_{x_0}$ is the vertex projective of
[[def-graded-khovanov-seidel-module-category-and-projectives]] and the two
shifts are the homological shift $[-x_1]$ and the internal shift $\{x_2\}$.

**The differential.** For crossings $x,y$ which are the two endpoints of an
essential segment of $c$ and satisfy $y_1=x_1+1$, define the component
$$\partial_{yx}\colon P(x)\longrightarrow P(y)$$
by the following rules, right multiplication meaning the left $A_m$-linear map $A_me_i\to A_me_j$, $u\mapsto ua$, for $a\in e_iA_me_j$:

1. if $x_0=y_0$ (in which case $x_2=y_2+1$), then $\partial_{yx}$ is the right
   multiplication by the return $(x_0|x_0-1|x_0)$ when $x_0>0$, and is the zero map when $x_0=0$ (the return $(0|1|0)$ vanishes);
2. if $x_0=y_0\pm1$, then $\partial_{yx}$ is the right multiplication by the
   arrow $(x_0|y_0)$, which is $(x_0|x_0-1)$ or $(x_0|x_0+1)$;
3. otherwise $\partial_{yx}:=0$.

Put $\partial:=\sum_{x,y}\partial_{yx}$. For a bigraded $k$-string
$\widetilde g$ of $\widetilde c$ the same formulas applied to the crossings and
essential segments of $g$ define an object $L(\widetilde g)$ with its
differential, and the underlying graded module of $L(\widetilde g)$ is an
abelian subgroup of $L(\widetilde c)$.

**Claims.** $(L(\widetilde c),\partial)$ is a bounded complex of finitely
generated graded projective left $A_m$-modules with a differential that is
degree zero for the internal grading, hence an object of
$C_m=K^b(\operatorname{proj}^{gr}A_m)$; the object is bounded because there are
finitely many crossings; and the deck action translates into the shift rule
$$L(\chi(r_1,r_2)\widetilde c)\cong L(\widetilde c)[-r_1]\{r_2\}$$
by the degreewise sign identification described in the proof. These claims are proved below.

## Facts & Assumptions
**Given:** An admissible bigraded curve $\widetilde c$ in normal form with finitely many crossings $x=(x_0;x_1,x_2)$, its essential segments classified by the six types of Figure 12 and the endpoint types of Figures 13-14, and the vertex projectives $P_i=A_me_i$ with these typed right multiplication maps.

[L1] The crossing set is finite, each essential segment has two crossings as endpoints, and for every essential segment with endpoints $x,y$ one has $y_1=x_1\pm1$; the segment types $1,1',2,2'$ are the essential ones and the tables of Figures 12-14, in the normalization of [[lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers]], record the internal indices at their endpoints: for a segment whose endpoints satisfy $y_1=x_1+1$ one has either $x_0=y_0$ and $x_2=y_2+1$, or $x_0=y_0\pm1$ ([[def-basic-arcs-admissible-curves-and-normal-form]], [[def-khovanov-seidel-bigrading-cover-and-local-intersection-indices]]).

[L2] For $x_0>0$, $(x_0|x_0-1|x_0)$ is the return at $x_0$, of internal degree $1$, and $(x_0|y_0)$ is either the ascending arrow $(x_0|x_0+1)$ of internal degree $0$ or the descending arrow $(x_0|x_0-1)$ of internal degree $1$; the product of two arrow classes is zero whenever it is defined as a path of length two other than a return, the return at vertex $0$ is zero, and every path of length at least three vanishes in $A_m$ ([[lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis]]).

[L3] $P_i=A_me_i$ is a finitely generated graded projective left $A_m$-module, right multiplication by a homogeneous element $a\in A_m$ is a degree-zero map $P_i\{r\}\to P_j\{r-\deg a\}$ when $a$ lies in $e_iA_me_j$, the homological shift and the internal shift act as displayed, and $C_m$ is the homotopy category of bounded complexes of such modules ([[def-graded-khovanov-seidel-module-category-and-projectives]]).

[L4] The deck action adds $(r_1,r_2)$ to the local indices of all crossings: $\chi(r_1,r_2)$ replaces $(x_1,x_2)$ by $(x_1+r_1,x_2+r_2)$ for every crossing $x$ ([[def-khovanov-seidel-bigrading-cover-and-local-intersection-indices]], [[def-khovanov-seidel-bigraded-cover-and-bigraded-curves]]).



## Proof

**Proof technique:** direct.

1.1 *The composites of two differential components vanish.* Let $x,y,z$ be crossings with $\partial_{yx}\neq0\neq\partial_{zy}$, so that $y_1=x_1+1$, $z_1=y_1+1$ and the pairs $(x,y)$, $(y,z)$ are endpoints of essential segments; the composite is right multiplication by the concatenation of the two path labels. If either label is a return, its length is at least three, so it vanishes by [L2]. If both labels are arrows and $x_0\ne z_0$, they form a monotone length-two path, which also vanishes. The remaining case would have $x_0=z_0=y_0\pm1$. Both segments would then lie in the same region between these adjacent dividing curves and approach $y$ from the same side of $d_{y_0}$. This contradicts transversality at the crossing $y$, where the two branches of the embedded curve lie on opposite sides of $d_{y_0}$. Thus no such consecutive arrow return occurs, and every composite is zero. Summing the components gives $\partial^2=0$. [L1, L2]

1.2 *The shift rule.* Under $\chi(r_1,r_2)$ the local index of each crossing $x$ becomes $(x_1+r_1,x_2+r_2)$ by [L4], and the crossing data (which crossings are joined by essential segments, and the segment types) are unchanged because the deck action changes only the bigrading, not the underlying curve or its normal form; the source retains the same path entries, while the homological shift $[-r_1]$ multiplies the target differential by $(-1)^{r_1}$. Map the summand indexed by $x$ by $(-1)^{r_1x_1}$ times the identity. For a nonzero entry $x\to y$ one has $y_1=x_1+1$, so the target differential followed by the source sign agrees with the target sign followed by the source differential. These invertible sign maps give the claimed chain isomorphism. An identity on every summand would fail for odd $r_1$. [L1, L3, L4]

2.1 *The differential is degree zero and the terms are finite graded projective.* For a component given by right multiplication by a path $a\in e_{x_0}A_me_{y_0}$ of internal degree $\delta$, an element of underlying degree $d$ has source shifted degree $d+x_2$ and target shifted degree $d+\delta+y_2$. The segment tables in [L1] give $\delta=x_2-y_2$: a return has $\delta=1$, an ascending arrow has $\delta=0$, and a descending arrow has $\delta=1$. Thus both degrees agree. The map is left $A_m$-linear because $(bu)a=b(ua)$, and its image lies in $A_me_{y_0}$ because $a=e_{x_0}ae_{y_0}$; no right-module structure on $A_me_{x_0}$ is assumed. Homological degree rises from $x_1$ to $y_1=x_1+1$. Each term is a shifted finite graded vertex projective, and there are finitely many crossings; together with step 1.1 this gives a bounded complex of the required bidegree. [step 1.1, L1, L3]

3.1 *Conclusion.* $(L(\widetilde c),\partial)$ is a bounded complex of finite graded projectives with a degree-zero differential, so it defines an object of $C_m$, and the deck action acts by the shift $[-r_1]\{r_2\}$. No choice principle is used; the verifications are finite checks over the segment types. [step 1.1, step 2.1, step 1.2] ∎ 