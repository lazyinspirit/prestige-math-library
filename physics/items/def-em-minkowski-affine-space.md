---
id: def-em-minkowski-affine-space
kind: definition
title: "The Minkowski affine four-space: the form $\\eta$, causal cones, frames and Lorentz maps"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
deps: [def-function-space, def-vector-space, def-linear-map, def-euclidean-inner-product, def-standard-bilinear-form-on-a-coordinate-space, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-transpose-of-a-linear-map, def-transpose-of-a-matrix, def-matrix-product-and-identity-matrix, def-linear-basis, def-coordinate-column-and-matrix-of-a-linear-map, def-linear-isomorphism-and-invertible-linear-map, thm-change-of-basis-for-a-bilinear-form-is-congruence, def-orientation-of-a-finite-dimensional-real-vector-space, def-determinant-of-a-linear-operator, def-real-order, def-algebraic-dual-and-linear-functional, thm-rank-nullity, thm-dimension-of-a-linear-subspace]
dependency_roles:
  def-function-space: mathematical-premise
  def-vector-space: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-standard-bilinear-form-on-a-coordinate-space: mathematical-premise
  def-bilinear-symmetric-skew-and-alternating-forms: mathematical-premise
  def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form: mathematical-premise
  def-transpose-of-a-linear-map: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-linear-basis: mathematical-premise
  def-coordinate-column-and-matrix-of-a-linear-map: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  thm-change-of-basis-for-a-bilinear-form-is-congruence: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
  def-real-order: mathematical-premise
  def-algebraic-dual-and-linear-functional: mathematical-premise
  thm-rank-nullity: mathematical-premise
  thm-dimension-of-a-linear-subspace: mathematical-premise
dependency_level: 0
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "David Tong, Dynamics and Relativity, University of Cambridge Part IA Mathematical Tripos (Lent 2013), §7.1–§7.4.7, printed pp. 107–145"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity (arXiv:gr-qc/9712019v1), Chapter 1, printed pp. 1–30"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $4:=\{0,1,2,3\}$ and let $V:=\mathbb R^4$ be the set of all functions
$4\to\mathbb R$, with the pointwise vector-space structure of
[[def-function-space]]; so $V$ is the function space $F^X$ of
[[def-function-space]] at $F=\mathbb R$ and $X=4$, and its elements are written
$v=(v^0,v^1,v^2,v^3)$ with $v^a:=v(a)$ for $a\in\{0,1,2,3\}$, the components
being indexed from $0$ and written with an upper index; the index conventions
used throughout this item are fixed below. Let $A$ be the same set
$\mathbb R^4$, whose elements are
now called **points**, together with the map

$$V\times A\to A,\qquad (v,p)\mapsto v+p,$$

given by pointwise addition of functions. Then the following three conditions
hold.

1. $(v+v')+p=v+(v'+p)$ for all $v,v'\in V$ and all $p\in A$.
2. $0+p=p$ for every $p\in A$.
3. For all $p,q\in A$ there is exactly one $v\in V$ with $v+p=q$, namely
$v=q-p$.

Conditions 1 and 2 are read at each of the four coordinates from the field
axioms of $\mathbb R$, and condition 3 holds because $q-p$ satisfies
$(q-p)+p=q$ coordinatewise while any $v$ with $v+p=q$ agrees with $q-p$ at every
coordinate ([[def-vector-space]]). A triple consisting of a set $A$, a vector
space $V$ and a map $V\times A\to A$ satisfying 1–3 is called an **affine
space** with **translation space** $V$; the three conditions are its definition,
so by 1–3 the set $A$ above is an affine space with translation space $V$.

For $a\in\{0,1,2,3\}$ let $e_a\in V$ be given by $e_a(b):=1$ for $b=a$ and
$e_a(b):=0$ for $b\ne a$. Then $(e_0,e_1,e_2,e_3)$ is an ordered basis of $V$
([[def-linear-basis]]): every $v\in V$ equals $v^0e_0+\dots+v^3e_3$, because
the two sides have the same value at each $b\in\{0,1,2,3\}$; and if
$c^0e_0+\dots+c^3e_3=0_V$ then evaluating at $b$ gives $c^b=0$, so the list is
linearly independent. We write $v=v^0e_0+\dots+v^3e_3$ and use the coordinate
columns of [[def-coordinate-column-and-matrix-of-a-linear-map]] with respect to
this ordered basis.

**The Minkowski form.** Define

$$\eta(v,w):=-v^0w^0+v^1w^1+v^2w^2+v^3w^3,\qquad v,w\in V .$$

This is the standard bilinear form $\langle x,y\rangle=\sum_{i<n}x_iy_i$ of
[[def-standard-bilinear-form-on-a-coordinate-space]] with the sign of the first
coordinate reversed, together with the Euclidean inner product of
[[def-euclidean-inner-product]] on the last three coordinates; directly from the
formula, for fixed $w$ the assignment $v\mapsto\eta(v,w)$ is a linear combination
of the component functions $v\mapsto v^a$, hence linear, and similarly in $w$,
so $\eta$ is a bilinear form, and $\eta(v,w)=\eta(w,v)$ for all $v,w$, so it is
symmetric ([[def-bilinear-symmetric-skew-and-alternating-forms]]). Its matrix in
the ordered basis $(e_0,e_1,e_2,e_3)$ is

$$(\eta(e_a,e_b))_{a,b}=\operatorname{diag}(-1,1,1,1),$$

and this matrix is its own inverse, the product of
$\operatorname{diag}(-1,1,1,1)$ with itself being the identity matrix
([[def-matrix-product-and-identity-matrix]]); in particular it is invertible, so
$\eta$ is nondegenerate
([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

**Index conventions.** The components $v^a$ of a vector are the numbers in its
expansion $v=v^0e_0+\dots+v^3e_3$ in the ordered basis $(e_0,\dots,e_3)$, and
for a linear map $T:V\to V$ one writes $(Tv)^a$ for the components of $Tv$ and
$T^a{}_b$ for the matrix entries, so that $(Tv)^a=\sum_bT^a{}_bv^b$. Write
$\eta_{ab}:=\eta(e_a,e_b)$, so that
$(\eta_{ab})=\operatorname{diag}(-1,1,1,1)$, and let $(\eta^{ab})$ denote the
inverse matrix of $(\eta_{ab})$, that is, $\sum_b\eta^{ab}\eta_{bc}=1$ when
$a=c$ and $\sum_b\eta^{ab}\eta_{bc}=0$ when $a\ne c$. The **lowered** components
of $v$ are $v_a:=\sum_b\eta_{ab}v^b$, and the operation is inverted by
$v^a=\sum_b\eta^{ab}v_b$, because $\operatorname{diag}(-1,1,1,1)$ is its own
inverse; explicitly $v_0=-v^0$ and $v_i=v^i$ for $i=1,2,3$. In these
conventions $\eta(v,w)=\sum_{a,b}\eta_{ab}v^aw^b=\sum_av_aw^a$ for all
$v,w\in V$.

**Causal classification.** Let $v\in V$ with $v\ne0$. Then $v$ is
**timelike** when $\eta(v,v)<0$, **null** when $\eta(v,v)=0$, and
**spacelike** when $\eta(v,v)>0$; it is **causal** when $\eta(v,v)\le0$. If the
nonzero $v$ is causal, then $v^0\ne0$: the inequality
$-(v^0)^2+(v^1)^2+(v^2)^2+(v^3)^2\le0$ gives
$(v^0)^2\ge(v^1)^2+(v^2)^2+(v^3)^2$, and $v^0=0$ would force
$(v^1)^2+(v^2)^2+(v^3)^2=0$, hence $v^1=v^2=v^3=0$ and $v=0$, contrary to the
hypothesis. A nonzero causal $v$ is therefore **future-directed** when $v^0>0$
and **past-directed** when $v^0<0$, and exactly one of these two alternatives
holds for a nonzero real $v^0$ ([[def-real-order]]). The **future causal cone**
is

$$C^+:=\{v\in V:\eta(v,v)\le0,\ v^0>0\},$$

whose elements are exactly the future-directed causal vectors; the zero vector
is not in $C^+$, because it fails $v^0>0$.

**Orientation.** The **standard orientation** of $V$ is the orientation class of
the ordered basis $(e_0,e_1,e_2,e_3)$
([[def-orientation-of-a-finite-dimensional-real-vector-space]]).

**Lorentz maps.** A **Lorentz map** is a linear map $L:V\to V$
([[def-linear-map]]) that is invertible
([[def-linear-isomorphism-and-invertible-linear-map]]) and satisfies

$$\eta(Lv,Lw)=\eta(v,w)\qquad\text{for all }v,w\in V .$$

Writing $M:=[L]_{(e_0,\dots,e_3)}\in M_4(\mathbb R)$ for the matrix of $L$ in the
ordered basis $(e_0,\dots,e_3)$
([[def-coordinate-column-and-matrix-of-a-linear-map]]), $M^{\mathsf T}$ for its
transpose ([[def-transpose-of-a-matrix]]), and $\eta$ also for the matrix
$\operatorname{diag}(-1,1,1,1)$, the condition is the matrix identity

$$M^{\mathsf T}\eta M=\eta .$$

Expanding $Lv$ and $Lw$ in the basis gives
$\eta(Lv,Lw)=\sum_{c,d}(M^{\mathsf T}\eta M)_{cd}v^cw^d$, whereas
$\eta(v,w)=\sum_{c,d}\eta_{cd}v^cw^d$, and the two sides agree for all $v,w$
exactly when $(M^{\mathsf T}\eta M)_{cd}=\eta_{cd}$ for every $c,d$, since
inserting the basis vectors $v=e_c$, $w=e_d$ gives the converse
([[def-matrix-product-and-identity-matrix]]). Equivalently, the matrix of $\eta$
in the basis $(Le_0,\dots,Le_3)$ is again
$\operatorname{diag}(-1,1,1,1)$; this is the change-of-basis congruence of
[[thm-change-of-basis-for-a-bilinear-form-is-congruence]] for the basis change
from $(e_0,\dots,e_3)$ to its image under the invertible map $L$. The
invertibility requirement in the definition of a Lorentz map is in fact
automatic: if $L$ satisfies the displayed identity and $Lv=0$, then
$\eta(v,w)=\eta(Lv,Lw)=0$ for every $w$, so $v$ lies in the left radical of
$\eta$, which is $\{0\}$ because $\eta$ is nondegenerate; thus $L$ is injective,
and an injective linear endomorphism of the four-dimensional space $V$ is
surjective by [[thm-rank-nullity]] together with
[[thm-dimension-of-a-linear-subspace]], so $L$ is a bijection, and its inverse
$S:=L^{-1}$ is linear: for all $x,y\in V$ and all reals $a,b$, linearity of $L$
gives $L(aS(x)+bS(y))=ax+by$, and applying $S$ gives
$S(ax+by)=aS(x)+bS(y)$; thus $L$ is invertible
([[def-linear-isomorphism-and-invertible-linear-map]]). The map $L$ is
**proper** when $\det L=1$ ([[def-determinant-of-a-linear-operator]]) and
**orthochronous** when $L(C^+)=C^+$.

**Frames.** A **frame** of $A$ is a point $o\in A$ together with an ordered
basis $(u_0,u_1,u_2,u_3)$ of $V$ such that
$\eta(u_a,u_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ for all $a,b$ and
$u_0\in C^+$. The **coordinates** of $p\in A$ in that frame are the unique
$(x^0,x^1,x^2,x^3)\in\mathbb R^4$ with
$p=o+x^0u_0+x^1u_1+x^2u_2+x^3u_3$; uniqueness holds because
$(u_0,u_1,u_2,u_3)$ is an ordered basis, and $p-o$ is the unique element of $V$
carrying $o$ to $p$.

**Tensors and components.** For nonnegative integers $p,q$, a **tensor of type
$(p,q)$** on $V$ is a map $(V^*)^p\times V^q\to\mathbb R$ that is linear in
each argument separately, where $V^*$ is the algebraic dual of
[[def-algebraic-dual-and-linear-functional]]. An empty product is a singleton,
so a $(0,0)$ tensor is a scalar. Covectors are the $(0,1)$ case, a vector $v$
defines the $(1,0)$ tensor $\theta\mapsto\theta(v)$, and a **two-form** is a
skew-symmetric $(0,2)$ tensor. These objects are maps, with arrays recording
their components in a chosen basis.

Fix a frame $(o,(u_a))$ and define its linear coordinate map
$B:\mathbb R^4\to V$ by $B\xi:=\sum_a\xi^au_a$. It is invertible because
$(u_a)$ is a basis, and $\eta(B\xi,B\zeta)=\eta(\xi,\zeta)$ by its defining
pairings. For a Lorentz map $L:V\to V$, put $N:=[L]_{(u_a)}$, identifying
its matrix with the linear map $B^{-1}LB$ on $\mathbb R^4$. With origin fixed
and new basis $u'_a:=L^{-1}u_a$, the coordinates of the same point obey
$x'=Nx$: indeed $p-o=Bx=L^{-1}Bx'$ is equivalent to this identity.
The basis is orthonormal since $L^{-1}$ preserves $\eta$, and it is a frame
when $L$ is orthochronous, since then $L^{-1}u_0\in C^+$.

For a fixed vector $v$, covector $\theta$ and two-form $F$, let
$\widehat v:=B^{-1}v$, $\widehat\theta_a:=\theta(u_a)$ and
$\widehat F_{ab}:=F(u_a,u_b)$ be their old component columns and matrix;
primes denote the corresponding components in $(u'_a)$. Then

$$\widehat v'=N\widehat v,\qquad \widehat\theta'=(N^{-1})^{\mathsf T}\widehat\theta,\qquad \widehat F'=(N^{-1})^{\mathsf T}\widehat F N^{-1}.$$

The vector law follows from $B'=L^{-1}B=BN^{-1}$. Substituting
$u'_a=\sum_bu_b(N^{-1})^b{}_a$ into $\theta(u'_a)$ and $F(u'_a,u'_b)$ gives
the other two laws by linearity and bilinearity. Equivalently, the coordinate
functional $\theta\circ B'$ is $(\theta\circ B)\circ N^{-1}$, the transpose
operation of [[def-transpose-of-a-linear-map]], and the coordinate bilinear
form obeys $F(B'\xi,B'\zeta)=F(BN^{-1}\xi,BN^{-1}\zeta)$. The geometric
objects themselves are unchanged. In the standard frame $B=\operatorname{id}$,
$N$ is the standard coordinate matrix of $L$; in a general frame it is
$B^{-1}LB$.

Finally, a fixed positive real $c$ is separate extra structure: the coordinate
$x^0$ has the dimension of length, and the time coordinate is $t:=x^0/c$. No
physical claim is made here; in particular the identification of $A$ with
physical spacetime, of $C^+$ with the future light cone, and of $c$ with the
speed of light in vacuum are later physical premises.

## Remarks

- **Sign convention.** The form has signature $(-1,1,1,1)$: with the index
conventions of the Definition, $v^0$ is the time component and $v^1,v^2,v^3$
are the spatial components of $v$; the lowered time component $v_0=-v^0$
carries the opposite sign, while $v_i=v^i$ for $i=1,2,3$.
- **What is not asserted.** The affine space, the form, the cone and the
transformation laws are mathematical data and conventions; the physical readings
of these objects, and any statement that some physical trajectory or force
equation has this form, are separate premises that this item does not supply.
