---
id: def-khovanov-seidel-beta-and-gamma-bimodule-maps
kind: definition
title: "The Khovanov–Seidel bimodule maps β_i and γ_i"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-two-sided-projective-khovanov-seidel-bimodule-functors, lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis, def-khovanov-seidel-type-a-quiver-algebra, def-path-ring-of-a-finite-quiver-over-the-integers, def-graded-khovanov-seidel-module-category-and-projectives, def-graded-balanced-tensor-product-and-homogeneous-hom, lem-graded-balanced-tensor-and-shift-isomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2d, printed pp. 11-12"
      url: "https://arxiv.org/pdf/math/0006056"
verification:
  precheck: pass
---

## Definition

Fix $m\ge1$, let $A_m$ be the Khovanov–Seidel type A algebra with its internal
grading and its left-to-right path multiplication of
[[def-khovanov-seidel-type-a-quiver-algebra]] and
[[def-path-ring-of-a-finite-quiver-over-the-integers]], and for $1\le i\le m$
let
$$P_i=A_me_i\quad(\text{paths ending at }i),\qquad {}_iP=e_iA_m\quad(\text{paths beginning at }i),\qquad U_i=P_i\otimes_{\mathbb Z}{}_iP$$
be the graded $(A_m,A_m)$-bimodule of
[[def-two-sided-projective-khovanov-seidel-bimodule-functors]], with left action
$a\cdot(x\otimes y)=(ax)\otimes y$ and right action $(x\otimes y)\cdot a=x\otimes(ya)$.

**The multiplication map.** Let
$$\beta_i:U_i\longrightarrow A_m,\qquad \beta_i(x\otimes y):=xy,$$
be the $\mathbb Z$-bilinear extension of the product in $A_m$. It is the
degree-zero $(A_m,A_m)$-bimodule map $U_i\to A_m$ with
$\beta_i(e_i\otimes e_i)=e_i$, and it is uniquely determined by that value, as
proved below. This is equation (2.6) of the source.

**The map $\gamma_i$.** Let
$$w_i:=(i-1|i)\otimes(i|i-1)+(i+1|i)\otimes(i|i+1)+(i)\otimes(i|i-1|i)+(i|i-1|i)\otimes(i)\ \in\ U_i$$
be the sum of the four displayed elementary tensors of $U_i$, with the second
summand $(i+1|i)\otimes(i|i+1)$ **omitted when $i=m$**, so that
$$w_m=(m-1|m)\otimes(m|m-1)+(m)\otimes(m|m-1|m)+(m|m-1|m)\otimes(m);$$
the omission is forced, because the arrow $(i+1|i)$ exists only for
$i\le m-1$. Let
$$\gamma_i:A_m\longrightarrow U_i\{-1\},\qquad \gamma_i(a):=a\cdot w_i,$$
the left action of $A_m$ on $U_i$ followed by the identification with the
internal shift $U_i\{-1\}$ of
[[def-graded-khovanov-seidel-module-category-and-projectives]]; this is equation
(2.7) of the source.

**Claims proved below.** The element $w_i$ lies in $U_i$ and is homogeneous of
internal degree $1$, so that $\gamma_i$ takes values in $U_i\{-1\}$ and
$\gamma_i(1)=w_i$ has degree $0$ there; $w_i$ is central,
$a\cdot w_i=w_i\cdot a$ for every $a\in A_m$, so $\gamma_i$ is a map of
$(A_m,A_m)$-bimodules and not only left $A_m$-linear; $\beta_i$ is a
well-defined degree-zero $(A_m,A_m)$-bimodule map; and consequently $\beta_i$
and $\gamma_i$ induce natural transformations $U_i(-)\to\mathrm{Id}$ and
$\mathrm{Id}\to U_i\{-1\}(-)$ on the category $A_m\text{-mod}$.

**Convention.** The shift is the internal one, $(U_i\{-1\})_d=(U_i)_{d+1}$, and
never the homological shift $[1]$; both $\beta_i$ and $\gamma_i$ are degree-zero
maps of graded bimodules, the shift in the target of $\gamma_i$ absorbing the
degree one of $w_i$. Indices run over $1\le i\le m$ as in the source, and the
term omitted at $i=m$ is the only one that involves a non-existent arrow.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the algebra $A_m$ with vertex idempotents $e_j$, arrows $(j|j\pm1)$, returns $(j|j-1|j)$, its internal grading, and the bimodules $P_i=A_me_i$, ${}_iP=e_iA_m$, $U_i=P_i\otimes_{\mathbb Z}{}_iP$ for an index $1\le i\le m$.

[F1] The product of two paths in $\mathbb Z\Gamma_m$ is their left-to-right concatenation when they compose and $0$ otherwise; the unit is $\sum_{j=0}^m(j)$; $(j)p=p$ exactly for paths $p$ beginning at $j$ and $p(j)=p$ exactly for paths $p$ ending at $j$; consequently $P_j=A_me_j$ is the subgroup spanned by the paths ending at $j$ and ${}_jP=e_jA_m$ the subgroup spanned by the paths beginning at $j$ ([[def-path-ring-of-a-finite-quiver-over-the-integers]], [[def-graded-khovanov-seidel-module-category-and-projectives]]).

[L2] $A_m$ has the $\mathbb Z$-basis of $4m+1$ classes given by the vertices, the $2m$ arrows and the returns $(1|0|1),\dots,(m|m-1|m)$; every path of length at least three has class $0$; the monotone length-two paths $(j|j+1|j+2)$ and $(j+2|j+1|j)$ have class $0$ for $0\le j\le m-2$; the return $(0|1|0)$ has class $0$; and at an interior vertex $0<j<m$ the two returns agree, $(j|j+1|j)=(j|j-1|j)$ ([[lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis]]).

[F3] The internal degree is additive over concatenation, with $\deg(j)=\deg(j|j+1)=0$ and $\deg(j+1|j)=1$ for all $0\le j\le m-1$; in particular $\deg(i|i-1|i)=1$ for $1\le i\le m$ ([[def-khovanov-seidel-type-a-quiver-algebra]]).

[L4] For graded modules the balanced tensor carries the total grading in which a homogeneous elementary tensor has degree the sum of the degrees of its factors; $U_i=P_i\otimes_{\mathbb Z}{}_iP$ is a graded $(A_m,A_m)$-bimodule with the actions displayed in the definition, and every elementary tensor is a finite sum of such homogeneous terms ([[def-graded-balanced-tensor-product-and-homogeneous-hom]], [[def-two-sided-projective-khovanov-seidel-bimodule-functors]]).

[L5] For a graded ring $R$ and a graded left $R$-module $N$ the unit map $R\otimes_RN\to N$, $r\otimes n\mapsto rn$, is a natural degree-zero isomorphism of graded left $R$-modules, and the balanced tensor is functorial in each variable ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).





## Proof

**Proof technique:** direct.

1.1 *The displayed tensors lie in $U_i$.* By [F1] the module $P_i$ is spanned by the paths ending at $i$ and ${}_iP$ by the paths beginning at $i$; each first factor occurring in $w_i$, namely $(i-1|i)$, $(i+1|i)$, $(i)$ and $(i|i-1|i)$, ends at $i$ and so lies in $P_i$, and each second factor, namely $(i|i-1)$, $(i|i+1)$, $(i|i-1|i)$ and $(i)$, begins at $i$ and so lies in ${}_iP$; hence every displayed elementary tensor is an element of $U_i=P_i\otimes_{\mathbb Z}{}_iP$ and $w_i$ is a well-defined element of $U_i$. The summand $(i+1|i)\otimes(i|i+1)$ involves the arrow $(i+1|i)$, which for $i=m$ is not an arrow of the quiver, so the omission at $i=m$ is forced and not a convention. [F1, L4]

1.2 *Degree of $w_i$.* By [F3] the degrees of the four first factors are $0,1,0,1$ and those of the four second factors are $1,0,1,0$, so by the additivity of the degree over concatenation and the total grading of [L4] the four summands of $w_i$ have degrees $0+1$, $1+0$, $0+1$ and $1+0$, all equal to $1$; hence $w_i$ is homogeneous of degree $1$ in $U_i$, and in the shifted module $U_i\{-1\}$, where degrees are lowered by one, the element $w_i=\gamma_i(1)$ has degree $0$, matching the degree $0$ of $1\in A_m$. [F3, L4]

1.3 *$\beta_i$ is a degree-zero bimodule map.* Multiplication $A_m\times A_m\to A_m$ is $\mathbb Z$-bilinear and hence induces a well-defined $\mathbb Z$-linear map on the tensor product, and it is degree zero because $\deg(xy)=\deg(x)+\deg(y)$ by [F3] is exactly the degree of the elementary tensor $x\otimes y$ in the total grading of [L4]; moreover for $a,b\in A_m$ and an elementary tensor $x\otimes y\in U_i$ one has $\beta_i\bigl(a\cdot(x\otimes y)\cdot b\bigr)=\beta_i\bigl((ax)\otimes(yb)\bigr)=(ax)(yb)=a\,(xy)\,b=a\,\beta_i(x\otimes y)\,b$ by associativity of $A_m$, so $\beta_i$ is left and right $A_m$-linear. [F1, F3, L4]

2.1 *$\beta_i$ is the unique bimodule map with $\beta_i(e_i\otimes e_i)=e_i$.* By [F1] every $x\in P_i$ satisfies $xe_i=x$ and every $y\in{}_iP$ satisfies $e_iy=y$, so $x\otimes y=x\cdot(e_i\otimes e_i)\cdot y$ for each elementary tensor; a bimodule map $\beta:U_i\to A_m$ with $\beta(e_i\otimes e_i)=e_i$ therefore satisfies $\beta(x\otimes y)=x\,e_i\,y=xy=\beta_i(x\otimes y)$ on elementary tensors, hence on all of $U_i$ by additivity, so $\beta=\beta_i$ and in particular $\beta_i(e_i\otimes e_i)=e_i\ne0$. [step 1.3, F1]

2.2 *Weight form of the centrality identity.* Write $w_i=\sum_kx_k\otimes y_k$ for the at most four displayed elementary tensors, so each $x_k\in P_i$ begins at a vertex $s_k\in\{i-1,i,i+1\}$ and each $y_k\in{}_iP$ ends at that same vertex $s_k$, the value $i+1$ not occurring when $i=m$; for a path $p\in A_m$ the left action gives $p\cdot(x_k\otimes y_k)=(px_k)\otimes y_k$, which is $0$ unless $t(p)=s_k$, and the right action gives $(x_k\otimes y_k)\cdot p=x_k\otimes(y_kp)$, which is $0$ unless $s(p)=s_k$. Since $s(p)\ne t(p)$ for an arrow, the index $k$ contributes to $p\cdot w_i$ or to $w_i\cdot p$ but never to both, so $p\cdot w_i=\sum_{k:\,t(p)=s_k}(px_k)\otimes y_k$ and $w_i\cdot p=\sum_{k:\,s(p)=s_k}x_k\otimes(y_kp)$; centrality is therefore the finite list of checks on vertex idempotents and arrows carried out in steps 3.1, 3.2, 3.3, 3.4, 3.5, 3.6 and 3.7 below, and by $\mathbb Z$-linearity in $p$ it suffices to run them on the path generators of $A_m$. [F1, step 1.1]

3.1 *Vertex idempotents.* For every vertex idempotent $e_j$ and every $k$ one has $e_jx_k=x_k$ and $y_ke_j=y_k$ when $s_k=j$, and $e_jx_k=0=y_ke_j$ otherwise, by [F1] and the description of $s_k$ in step 2.2; summing over $k$ gives $e_j\cdot w_i=\sum_{k:\,s_k=j}x_k\otimes y_k=w_i\cdot e_j$, so $w_i$ centralizes every vertex idempotent and hence every $\mathbb Z$-linear combination of them. [step 2.2, F1]

3.2 *The arrow $(i-1|i)$.* Here $t(p)=i$ and $s(p)=i-1$, and the only terms with $s_k=i$ are $(i)\otimes(i|i-1|i)$ and $(i|i-1|i)\otimes(i)$, so $p\cdot w_i=\bigl((i-1|i)(i)\bigr)\otimes(i|i-1|i)+\bigl((i-1|i)(i|i-1|i)\bigr)\otimes(i)=(i-1|i)\otimes(i|i-1|i)$, the second summand being $0$ because $(i-1|i|i-1|i)$ is a path of length three; and $w_i\cdot p=\bigl((i-1|i)\otimes(i|i-1)\bigr)\cdot p=(i-1|i)\otimes\bigl((i|i-1)(i-1|i)\bigr)=(i-1|i)\otimes(i|i-1|i)$. The two sides agree, and this arrow exists for every $1\le i\le m$. [step 2.2, L2]

3.3 *The arrow $(i|i-1)$.* Here $t(p)=i-1$ and $s(p)=i$, so $p\cdot w_i=\bigl((i|i-1)(i-1|i)\bigr)\otimes(i|i-1)=(i|i-1|i)\otimes(i|i-1)$, while $w_i\cdot p=\bigl((i)\otimes((i|i-1|i)(i|i-1))\bigr)+\bigl((i|i-1|i)\otimes((i)(i|i-1))\bigr)=(i|i-1|i)\otimes(i|i-1)$, the first summand being $0$ because the path $(i|i-1|i|i-1)$ has length three and the second being the displayed term. The two sides agree, and this arrow exists for every $1\le i\le m$. [step 2.2, L2]

3.4 *The arrow $(i|i+1)$.* Here $t(p)=i+1$ and $s(p)=i$, so $p\cdot w_i=\bigl((i|i+1)(i+1|i)\bigr)\otimes(i|i+1)=(i|i+1|i)\otimes(i|i+1)=(i|i-1|i)\otimes(i|i+1)$, using the equality of the two returns at $i$, legitimate because $0<i<m$ holds when $1\le i\le m-1$, which is exactly the range in which this arrow exists; and $w_i\cdot p=\bigl((i)\otimes((i|i-1|i)(i|i+1))\bigr)+\bigl((i|i-1|i)\otimes((i)(i|i+1))\bigr)=(i|i-1|i)\otimes(i|i+1)$, the first summand being $0$ because $(i|i-1|i|i+1)$ has length three. The two sides agree. [step 2.2, L2]

3.5 *The arrow $(i+1|i)$.* Here $t(p)=i$ and $s(p)=i+1$, so $p\cdot w_i=\bigl((i+1|i)(i)\bigr)\otimes(i|i-1|i)+\bigl((i+1|i)(i|i-1|i)\bigr)\otimes(i)=(i+1|i)\otimes(i|i-1|i)$, the second summand vanishing because $(i+1|i|i-1|i)$ has length three; and $w_i\cdot p=\bigl((i+1|i)\otimes(i|i+1)\bigr)\cdot p=(i+1|i)\otimes\bigl((i|i+1)(i+1|i)\bigr)=(i+1|i)\otimes(i|i+1|i)=(i+1|i)\otimes(i|i-1|i)$ by the equality of the two returns at $i$ with $0<i<m$, again exactly the range $1\le i\le m-1$ in which this arrow exists. The two sides agree. [step 2.2, L2]

3.6 *The two arrows joining $i-1$ and $i-2$.* For $p=(i-2|i-1)$ one has $t(p)=i-1$ and $s(p)=i-2$, so $w_i\cdot p=0$ because no $s_k$ equals $i-2$, while $p\cdot w_i=\bigl((i-2|i-1)(i-1|i)\bigr)\otimes(i|i-1)=(i-2|i-1|i)\otimes(i|i-1)=0$, the monotone path $(i-2|i-1|i)$ having class $0$ at its interior vertex $i-1$, which satisfies $0<i-1<m$ when $i\ge2$; for $p=(i-1|i-2)$ one has $t(p)=i-2$ and $s(p)=i-1$, so $p\cdot w_i=0$ while $w_i\cdot p=\bigl((i-1|i)\otimes(i|i-1)\bigr)\cdot p=(i-1|i)\otimes\bigl((i|i-1)(i-1|i-2)\bigr)=(i-1|i)\otimes(i|i-1|i-2)=0$, the monotone path $(i|i-1|i-2)$ having class $0$ at its interior vertex $i-1$. Both sides agree; both arrows exist only for $i\ge2$, and for $i<2$ this step covers nothing. [step 2.2, L2]

3.7 *The two arrows joining $i+1$ and $i+2$, and the remaining arrows.* For $p=(i+1|i+2)$ one has $t(p)=i+2$ and $s(p)=i+1$, so $p\cdot w_i=0$ because no $s_k$ equals $i+2$, while $w_i\cdot p=\bigl((i+1|i)\otimes(i|i+1)\bigr)\cdot p=(i+1|i)\otimes\bigl((i|i+1)(i+1|i+2)\bigr)=(i+1|i)\otimes(i|i+1|i+2)=0$, the monotone path $(i|i+1|i+2)$ having class $0$ at its interior vertex $i+1$, which satisfies $0<i+1<m$ when $i+2\le m$; for $p=(i+2|i+1)$ one has $t(p)=i+1$ and $s(p)=i+2$, so $w_i\cdot p=0$ because no $s_k$ equals $i+2$, while $p\cdot w_i=\bigl((i+2|i+1)(i+1|i)\bigr)\otimes(i|i+1)=(i+2|i+1|i)\otimes(i|i+1)=0$, the monotone path $(i+2|i+1|i)$ having class $0$ at its interior vertex $i+1$. Every remaining arrow $p$ has both endpoints outside $\{i-1,i,i+1\}$, so neither $t(p)$ nor $s(p)$ equals any $s_k$, and $p\cdot w_i=0=w_i\cdot p$. All arrows of the quiver are thereby covered. [step 2.2, L2]

4.1 *$\gamma_i$ is a map of $(A_m,A_m)$-bimodules.* By steps 3.1, 3.2, 3.3, 3.4, 3.5, 3.6 and 3.7 the element $w_i$ satisfies $a\cdot w_i=w_i\cdot a$ for every $a\in A_m$, since every element of $A_m$ is a finite $\mathbb Z$-linear combination of paths and both actions are $\mathbb Z$-linear; consequently, for $a,b\in A_m$ one has $\gamma_i(ba)=(ba)\cdot w_i=b\cdot(a\cdot w_i)=b\cdot\gamma_i(a)$ by associativity of the left action, and $\gamma_i(ab)=(ab)\cdot w_i=\bigl(a\cdot w_i\bigr)\cdot b=\gamma_i(a)\cdot b$, the middle equality being the centrality applied to $a\cdot w_i\cdot b=a\cdot(w_i\cdot b)=a\cdot(b\cdot w_i)$. Hence $\gamma_i$ is left and right $A_m$-linear, and by step 1.2 it is degree zero with $\gamma_i(1)=1\cdot w_i=w_i$ of degree $0$ in $U_i\{-1\}$. [step 1.2, step 3.1, step 3.2, step 3.3, step 3.4, step 3.5, step 3.6, step 3.7]

5.1 *Natural transformations.* Composing $\beta_i\otimes_{A_m}\mathrm{id}_M:U_i\otimes_{A_m}M\to A_m\otimes_{A_m}M$ with the unit isomorphism $A_m\otimes_{A_m}M\cong M$ of [L5] defines a morphism of $A_m\text{-mod}$ natural in $M$, because for a degree-zero map $f:M\to N$ one has $\beta_i(x\otimes y)\cdot f(m)=f\bigl(\beta_i(x\otimes y)\cdot m\bigr)$ by $A_m$-linearity of $f$ and the unit isomorphisms for $M$ and $N$ are natural by [L5]; thus $\beta_i$ induces a natural transformation $U_i(-)\to\mathrm{Id}$, and the identical computation with $w_i$ in place of $\beta_i$, using that $\gamma_i$ is degree zero and left $A_m$-linear by step 4.1, induces a natural transformation $\mathrm{Id}\to U_i\{-1\}(-)$. [step 1.3, step 4.1, L5]

6.1 *Conclusion.* The displayed element $w_i$ lies in $U_i$ and has degree $1$ by steps 1.1 and 1.2, so $\gamma_i(a)=a\cdot w_i$ is a well-defined degree-zero map $A_m\to U_i\{-1\}$ with $\gamma_i(1)=w_i$; it is a map of $(A_m,A_m)$-bimodules by step 4.1, whose centrality input is the case check of steps 3.1, 3.2, 3.3, 3.4, 3.5, 3.6 and 3.7 over the finitely many arrows, each case using only the equality of the two returns at an interior vertex, the vanishing of monotone length-two paths and the vanishing of all paths of length three; and $\beta_i$ is the degree-zero bimodule map of step 1.3, uniquely determined by $\beta_i(e_i\otimes e_i)=e_i$ by step 2.1. Finally $\beta_i$ and $\gamma_i$ induce the natural transformations of step 5.1, so the bimodule maps $\beta_i$ and $\gamma_i$ of the source's Section 2d are defined, graded of degree zero and bimodule-linear, and the endpoints $i=1$ and $i=m$ are covered by steps 3.2, 3.3 and 3.5 with the summand of step 1.1 omitted at $i=m$. All tensor products are over $\mathbb Z$ or over $A_m$ as indicated, the sums involved are finite, and no choice principle is used. [step 1.1, step 1.2, step 1.3, step 2.1, step 4.1, step 5.1] ∎
