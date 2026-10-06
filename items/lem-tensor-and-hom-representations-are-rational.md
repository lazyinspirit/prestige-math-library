---
id: lem-tensor-and-hom-representations-are-rational
kind: lemma
title: "Tensor products, exterior powers and Hom spaces of finite-dimensional rational representations are rational"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps: [def-algebraic-dual-and-linear-functional, def-commutative-hopf-algebra-over-a-field, def-contragredient-rational-representation, def-exterior-algebra-of-a-finite-free-module, def-kth-exterior-power-by-quotient, def-linear-basis, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-tensor-product-of-modules-by-generators-and-relations, lem-exterior-algebra-basis-monomials, lem-representations-of-affine-group-schemes-are-comodules, thm-hom-from-a-finite-dimensional-space-as-a-tensor-product, thm-increasing-basis-wedges-form-a-basis, thm-universal-property-and-uniqueness-of-exterior-powers, thm-universal-property-of-module-tensor-products]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 4 (4.6) and the natural G-module structure on $\\operatorname{Hom}_k(V,W)$ in the proof of (22.40); Ch. 22 (22.40), printed p. 478"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Lemma 73 (dual modules and tensor products of modules)"
---

## Statement

Let $G$ be an affine group scheme of finite type over a field $k$ with coordinate
Hopf algebra $A=O(G)$, and let $(V,r)$ and $(W,s)$ be finite-dimensional
rational representations with comodule maps
$\rho_V:V\to V\otimes_kA$, $\rho_W:W\to W\otimes_kA$
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).
(a) The formula $c(v\otimes w)=\sum_{i,j}v_i\otimes w_j\otimes a_ib_j$ for
$\rho_V(v)=\sum_iv_i\otimes a_i$ and $\rho_W(w)=\sum_jw_j\otimes b_j$ defines the
unique comodule structure on $V\otimes_kW$ whose associated rational
representation is $g\cdot(v\otimes w)=g\cdot v\otimes g\cdot w$.
(b) The space $\operatorname{Hom}_k(V,W)$ carries a rational representation
with $(g\cdot f)(v)=g\cdot f(g^{-1}\cdot v)$, and the canonical $k$-linear map
$V^*\otimes_kW\to\operatorname{Hom}_k(V,W)$, $\xi\otimes w\mapsto(v\mapsto\xi(v)w)$,
where $V^*$ is the contragredient
([[def-contragredient-rational-representation]],
[[def-algebraic-dual-and-linear-functional]]), is an isomorphism of rational
representations. (c) For every $d\ge0$ the exterior power $\Lambda^dV$ carries
a rational representation with
$g\cdot(v_1\wedge\cdots\wedge v_d)=g\cdot v_1\wedge\cdots\wedge g\cdot v_d$, and
for every $k$-algebra $R$ the induced map on $\Lambda^d_R(V_R)$ is
$\Lambda^d_R(r_R(g))$ under the identification of the two $R$-modules by the
common wedge basis ([[def-kth-exterior-power-by-quotient]],
[[thm-increasing-basis-wedges-form-a-basis]]).

## Facts & Assumptions

**Given:** An affine group scheme $G$ of finite type over $k$ with coordinate
Hopf algebra $(A,\Delta,\varepsilon,S)$, finite-dimensional rational
representations $(V,r)$, $(W,s)$ with comodule maps $\rho_V$, $\rho_W$ as above,
and the contragredient $V^*$ of $(V,r)$.

[F1] *Comodule dictionary.* $\rho\mapsto r$ with
$r_R(g)(v\otimes1)=(\operatorname{id}_V\otimes g)\rho(v)$ (extended
$R$-linearly) is a bijection from comodule structures on $V$ to rational
representations on $V$, natural in $V$, and it maps subcomodules to
subrepresentations
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]],
[[lem-representations-of-affine-group-schemes-are-comodules]]).

[F2] *Comodule and Hopf axioms.* $(\rho\otimes\operatorname{id})\rho
=(\operatorname{id}\otimes\Delta)\rho$ and
$(\operatorname{id}\otimes\varepsilon)\rho=\operatorname{id}$, $\Delta$ and
$\varepsilon$ are $k$-algebra homomorphisms, and
$(\Delta\otimes\operatorname{id})\Delta=(\operatorname{id}\otimes\Delta)\Delta$
([[def-commutative-hopf-algebra-over-a-field]],
[[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F3] *Tensor products.* The decomposable tensors $v\otimes w$ span
$V\otimes_kW$ as an abelian group, and every $k$-bilinear map from $V\times W$
to an abelian group induces a unique group homomorphism from $V\otimes_kW$.
For vector spaces over the commutative field $k$, the quotient presentation also
gives the scalar action $\lambda(v\otimes w)=(\lambda v)\otimes w$; its
well-definedness follows because scaling the first variable carries each
additivity and balancing relation to another defining relation. Iterated tensor
products inherit this action, with scalars movable between factors by the
balancing relation ([[def-tensor-product-of-modules-by-generators-and-relations]],
[[thm-universal-property-of-module-tensor-products]]).

[F4] *Contragredient.* For finite-dimensional $V$ the dual $V^*$ is a rational
representation with $(r^\vee(g)f)(v)=f(r(g)^{-1}v)$ for $R$-points
([[def-contragredient-rational-representation]]).

[F5] *Linear algebra of $\operatorname{Hom}$.* For finite-dimensional $V$, the
canonical map $V^*\otimes_kW\to\operatorname{Hom}_k(V,W)$,
$\xi\otimes w\mapsto(v\mapsto\xi(v)w)$, is a $k$-linear isomorphism
([[thm-hom-from-a-finite-dimensional-space-as-a-tensor-product]],
[[def-linear-basis]], [[def-algebraic-dual-and-linear-functional]]).

[F6] *Scalar extension of a finite basis.* If $e_1,\ldots,e_n$ is a $k$-basis
of $V$ with coordinate functionals $e_i^*$, then $V_R=V\otimes_kR$ is free
over $R$ with basis $e_i\otimes1$. Indeed, the maps
$(r_i)\mapsto\sum_i e_i\otimes r_i$ and
$v\otimes r\mapsto(e_i^*(v)r)_i$ are inverse; the second is induced by the
$k$-bilinear tensor map of [F3] and is $R$-linear for the action on the second
factor ([[def-linear-basis]],
[[def-algebraic-dual-and-linear-functional]]).

[F7] *Exterior algebra bases over a ring.* If $F$ is a finite free module over
a commutative ring $R$ with ordered basis $e_1,\ldots,e_n$, its degree-$d$
exterior power $\Lambda_R^d(F)$ has $R$-basis
$e_{i_1}\wedge\cdots\wedge e_{i_d}$ for $i_1<\cdots<i_d$; the basis is empty
and the module is zero when $d>n$
([[def-exterior-algebra-of-a-finite-free-module]],
[[lem-exterior-algebra-basis-monomials]]).

[F8] *Exterior-power basis over the field.* If $e_1,\ldots,e_n$ is an ordered
basis of $V$, then the increasing wedges $e_I$ form a $k$-basis of
$\Lambda^d_kV$ for $1\le d\le n$
([[thm-increasing-basis-wedges-form-a-basis]]).

[F9] *Exterior-power universal property.* Every alternating $k$-multilinear
map out of $V^d$ factors uniquely through $\Lambda^d_kV$
([[thm-universal-property-and-uniqueness-of-exterior-powers]]).

## Proof

**Proof technique:** direct.

1.1 The right-hand side of (a) is $k$-bilinear in $(v,w)$, since both comodule maps are $k$-linear and scalars move between tensor factors over $k$; [F3] therefore gives a unique additive group homomorphism $c:V\otimes_kW\to V\otimes_kW\otimes_kA$. This homomorphism is $k$-linear: on every decomposable tensor, $c(\lambda(v\otimes w))=c((\lambda v)\otimes w)=\lambda c(v\otimes w)$ by the formula, and decomposable tensors generate the source additively. [F3, given]

2.1 *Counit axiom.* Applying $\operatorname{id}\otimes\varepsilon$ to $c(v\otimes w)=\sum v_i\otimes w_j\otimes a_ib_j$ and using that $\varepsilon$ is multiplicative and $(\operatorname{id}\otimes\varepsilon)\rho_V=\operatorname{id}_V$, $(\operatorname{id}\otimes\varepsilon)\rho_W=\operatorname{id}_W$ gives $\sum v_i\otimes w_j\,\varepsilon(a_i)\varepsilon(b_j)=v\otimes w$, so $(\operatorname{id}\otimes\varepsilon)c=\operatorname{id}_{V\otimes W}$. [F2, step 1.1]

2.2 *Coassociativity.* Write the comultiplications in Sweedler notation, $\rho_V(v)=\sum v_{(1)}\otimes v_{(2)}$, $\rho_W(w)=\sum w_{(1)}\otimes w_{(2)}$. Then $(c\otimes\operatorname{id})c(v\otimes w)=\sum v_{(1)(1)}\otimes w_{(1)(1)}\otimes v_{(1)(2)}w_{(1)(2)}\otimes v_{(2)}w_{(2)}$, while $(\operatorname{id}\otimes\Delta)c(v\otimes w)=\sum v_{(1)}\otimes w_{(1)}\otimes v_{(2)(1)}w_{(2)(1)}\otimes v_{(2)(2)}w_{(2)(2)}$; the two sums agree after rewriting the first three tensor factors with the coassociativity identities for $\rho_V$ and $\rho_W$ and using multiplicativity of $\Delta$ and commutativity of $A$ in the last two factors. Hence $(c\otimes\operatorname{id})c=(\operatorname{id}\otimes\Delta)c$. [F2, step 1.1]

2.3 *The associated representation.* By [F1] the representation associated with $c$ acts on $R$-points by sending $v\otimes w$ to $(\operatorname{id}\otimes\operatorname{ev}_g)c(v\otimes w)=\sum v_i\otimes w_j\,a_i(g)b_j(g)$, and this equals $(\sum_iv_ia_i(g))\otimes(\sum_jw_jb_j(g))=(g\cdot v)\otimes(g\cdot w)$ because the two $R$-valued sums are exactly the actions of $g$ on $v$ and on $w$ under [F1]. This proves (a). [F1, step 1.1]

3.1 *Hom is rational.* For a $k$-algebra $R$ and $g\in G(R)$, the tensor product of the rational representations $V^*$ and $W$ acts on $V^*\otimes_kW$ by $g\cdot(\xi\otimes w)=(g\cdot\xi)\otimes(g\cdot w)$ by step 2.3 applied to the pair $(V^*,W)$, and $(g\cdot\xi)(v)=\xi(g^{-1}v)$ by [F4]. Under the isomorphism $V^*\otimes_kW\to\operatorname{Hom}_k(V,W)$ of [F5], the element $\xi\otimes w$ corresponds to the map $f(v)=\xi(v)w$, and $g\cdot(\xi\otimes w)$ corresponds to $v\mapsto\xi(g^{-1}v)\,g\cdot w=g\cdot(\xi(g^{-1}v)w)=g\cdot f(g^{-1}v)$; the transport is therefore the action $(g\cdot f)(v)=g\cdot f(g^{-1}v)$ on $\operatorname{Hom}_k(V,W)$, which is thus a rational representation isomorphic to $V^*\otimes_kW$. This proves (b). [F4, F5, step 2.3]

3.2 *Exterior powers are rational and commute with scalar extension.* For $d=0$, the exterior power is $k$ with the trivial action, and its base change is $R$ with the identity map. For $d\ge1$, write $\rho_V(v)=\sum_iv_i\otimes a_i$ and define $c_d:\Lambda^d_kV\to\Lambda^d_kV\otimes_kA$ by $c_d(v_1\wedge\cdots\wedge v_d)=\sum_{i_1,\ldots,i_d}v_{1,i_1}\wedge\cdots\wedge v_{d,i_d}\otimes a_{1,i_1}\cdots a_{d,i_d}$, where $\rho_V(v_j)=\sum_i v_{j,i}\otimes a_{j,i}$. This formula is alternating in $v_1,\ldots,v_d$: if two inputs coincide, terms with distinct corresponding indices cancel in pairs by $x\wedge y=-y\wedge x$ and commutativity of $A$, and equal-index terms vanish; hence [F9] makes it well-defined. The counit and coassociativity axioms follow from multiplicativity of $\varepsilon$, coassociativity of $\rho_V$, and multiplicativity of $\Delta$, as in steps 2.1--2.2. Thus $\Lambda^d_kV$ is a comodule, and its associated action sends each decomposable wedge to the wedge of the actions by [F1] and the computation of step 2.3 with $d$ factors. Now choose an ordered basis $e_1,\ldots,e_n$ of $V$ and write $e_I$ for its increasing-index wedges. For $1\le d\le n$, [F8] gives that the $e_I$ form a $k$-basis of $\Lambda^d_kV$; if $d>n$, expanding decomposable wedges in the $e_i$ gives only repeated-index wedges, which vanish in the quotient defining $\Lambda^d_kV$, so that space is zero. By [F6], the $e_i\otimes1$ form an $R$-basis of $V_R$, and [F7] gives the matching $R$-basis $e_I^R$ of $\Lambda^d_R(V_R)$ (or zero for $d>n$). The alternating $k$-multilinear map $(v_1,\ldots,v_d)\mapsto(v_1\otimes1)\wedge\cdots\wedge(v_d\otimes1)$ induces a map $\Lambda^d_kV\to\Lambda^d_R(V_R)$ by [F9]; multiplying its values by $r\in R$ gives a $k$-balanced map $\Lambda^d_kV\times R\to\Lambda^d_R(V_R)$, so [F3] induces a group homomorphism $\beta_d:(\Lambda^d_kV)\otimes_kR\to\Lambda^d_R(V_R)$. It is $R$-linear because $\beta_d(x\otimes ar)=a\beta_d(x\otimes r)$ on elementary tensors, which generate additively. It sends $e_I\otimes1$ to $e_I^R$, hence is an isomorphism by the two basis descriptions, with both sides zero when $d>n$. For every $g\in G(R)$, the tensor-power map of $r_R(g)$ preserves the ideal generated by the squares $u\otimes u$ in the exterior algebra of [F7], so descends to $\Lambda^d_R(r_R(g))$; both it and the base-changed action send $e_I\otimes1$ to $r_R(g)(e_{i_1}\otimes1)\wedge\cdots\wedge r_R(g)(e_{i_d}\otimes1)$. They therefore agree on the basis and under $\beta_d$. This proves (c). [F1, F2, F3, F6, F7, F8, F9, step 2.2]

4.1 The degree-zero and positive-degree cases above establish the stated exterior-power action and its base change for every $d\ge0$. [step 3.2] ∎

## Remarks

- The lemma isolates the two structural facts that Milne's proof of 22.40 uses
  when it applies the codimension-one splitting hypothesis to the subspace
  $V_1=\{f:f|_W=a\operatorname{id}_W\}$ of
  $\operatorname{Hom}_k(V,W)$: that tensor products of finite-dimensional
  rational representations are rational, and that $\operatorname{Hom}_k(V,W)$
  with $(g\cdot f)(v)=g\cdot f(g^{-1}v)$ is rational (isomorphic to
  $V^*\otimes W$).
- Part (c) is the input for applying the exterior-power stabilizer lemma to a
  rational representation: it makes the action on $\Lambda^dV$ a rational
  representation, so that its scheme-theoretic stabilizers are defined.
- For infinite-dimensional $V$ the map
  $V^*\otimes_kW\to\operatorname{Hom}_k(V,W)$ is injective but not surjective in
  general, which is why the finite-dimensionality hypothesis is part of the
  statement.
