---
id: thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility
kind: theorem
title: "Bounded bimodule tensor is associative, unital, and compatible with cones"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - lem-bimodule-tensor-totalization-respects-differentials-and-homotopies
  - lem-graded-balanced-tensor-and-shift-isomorphisms
  - def-mapping-cone-of-a-chain-map
  - def-standard-cone-triangle-in-the-homotopy-category
  - thm-the-homotopy-category-of-an-abelian-category-is-triangulated
justified_by: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Khovanov and Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c and Proposition 2.4"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Stacks Project, Differential Graded Algebra, §22.33, tag 09LP"
      url: "https://stacks.math.columbia.edu/tag/09LP"
    - title: "Stacks Project, More on Algebra, §15.60, tag 06XY"
      url: "https://stacks.math.columbia.edu/tag/06XY"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $k$ be a commutative ring and let $B,A,C,E$ be unital graded
$k$-algebras. Let $F,G,H$ be bounded cochain complexes of graded bimodules of
types $(B,A)$, $(A,C)$, and $(C,E)$, respectively. The degreewise balanced
associator is a natural chain isomorphism
$$
\alpha_{F,G,H}:(F\otimes_A G)\otimes_C H\longrightarrow F\otimes_A(G\otimes_C H),\qquad ((f\otimes g)\otimes h)\longmapsto f\otimes(g\otimes h).
$$
The regular bimodule complexes $B$ and $A$, concentrated in cochain degree
zero, give natural chain isomorphisms
$$
B\otimes_B F\longrightarrow F,\quad b\otimes f\longmapsto bf,\qquad F\otimes_A A\longrightarrow F,\quad f\otimes a\longmapsto fa.
$$
These associator and unit isomorphisms satisfy the pentagon and unit triangle
coherence identities on elementary tensors.

Let $u:X\to Y$ be a degree-zero chain map of bounded graded $(A,C)$-bimodule
complexes, and let $v:F\to F'$ be a degree-zero chain map of bounded graded
$(B,A)$-bimodule complexes. Use the cochain cone convention obtained by
reindexing the mapping cone in
[[def-mapping-cone-of-a-chain-map]]:
$$
\operatorname{Cone}(u)^q=Y^q\oplus X^{q+1},\qquad d(y,x)=(d_Yy+u^{q+1}(x),-d_X^{q+1}(x)).
$$
Here $X[1]^q:=X^{q+1}$ with differential $-d_X^{q+1}$.
Then there are natural chain isomorphisms
$$
F\otimes_A\operatorname{Cone}(u)\longrightarrow \operatorname{Cone}(1_F\otimes_Au),\quad f^p\otimes y^q\longmapsto(f\otimes y,0),\quad f^p\otimes x^{q+1}\longmapsto(0,(-1)^p f\otimes x),
$$
and
$$
\operatorname{Cone}(v)\otimes_A X\longrightarrow \operatorname{Cone}(v\otimes_A1_X),
$$
which is the identity on the target and shifted-source parts under the
canonical distributivity isomorphism. Together with the shift comparisons
$$
F\otimes_A X[1]\longrightarrow(F\otimes_A X)[1],\quad f^p\otimes x\longmapsto(-1)^p f\otimes x,\qquad F[1]\otimes_A X\longrightarrow(F\otimes_A X)[1],\quad f\otimes x\longmapsto f\otimes x,
$$
these identify the image of either standard cone triangle with the standard
cone triangle of the tensored chain map in the homotopy category.

## Facts & Assumptions

**Given:** Bounded cochain complexes of graded bimodules with degree-zero
bimodule-linear differentials, and degree-zero bimodule-linear chain maps.

[L1] For homogeneous $f\in F^p$ and $g\in G^q$, the total differential is
$d(f\otimes g)=d_F(f)\otimes g+(-1)^pf\otimes d_G(g)$
([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

[L2] Degree-zero bimodule chain maps tensor to chain maps, preserving
identities and composition
([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[L3] The balanced graded associator is an isomorphism compatible with outer
actions and natural, and the tensor-unit maps are degree-zero isomorphisms
compatible with outer actions ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[L4] The chain mapping cone has differential
$d(y,x)=(d_Dy+f(x),-d_Cx)$ on $D_n\oplus C_{n-1}$
([[def-mapping-cone-of-a-chain-map]]). Reindexing chain degree $n=-q$ gives the
cochain cone formula in the statement.

[L5] The standard cone triangle is the image of
$C\xrightarrow fD\xrightarrow j\operatorname{Cone}(f)\xrightarrow q C[1]$
in the homotopy category ([[def-standard-cone-triangle-in-the-homotopy-category]]).

[L6] For an abelian category, its homotopy category with shift and distinguished
cone triangles is triangulated
([[thm-the-homotopy-category-of-an-abelian-category-is-triangulated]]).

## Proof

**Proof technique:** explicit formulas on elementary tensors and direct
cochain-sign checks; boundedness makes each reindexing of total sums finite.

1.1 On a homogeneous triple tensor with cochain degrees $p,q,r$, the two parenthesizations have total degree $p+q+r$; the balanced associator sends $((f\otimes g)\otimes h)$ to $f\otimes(g\otimes h)$ and its inverse reverses this formula, while [L3] gives balanced well-definedness, internal degree zero, and compatibility with the outside $B$- and $E$-actions. Extending over the finite diagonals gives a degree-zero graded bimodule isomorphism in each cochain degree. [L3, algebra]

1.2 Applying [L1] to either parenthesization gives the coefficients $1,(-1)^p,(-1)^{p+q}$ on $d_F,d_G,d_H$. Thus the associator commutes with total differentials; its naturality follows from [L3] on each summand, so it is a natural chain isomorphism. [L1, L3, algebra]

1.3 The maps $b\otimes f\mapsto bf$ and $f\otimes a\mapsto fa$ are the balanced unit isomorphisms of [L3], degree zero and outer-linear. The regular complexes have zero differential and lie in cochain degree zero, so the tensor differentials are respectively $1\otimes d_F$ and $d_F\otimes1$; bimodule-linearity of $d_F$ makes both unit maps chain maps. Their canonical inverses and naturality are supplied by [L3]. [L1, L3, algebra]

1.4 On every pure tensor, either path around the associator pentagon sends the four factors to the same unparenthesized tensor. In each unit triangle, either path evaluates the unit factor by its module action and gives the same tensor. Pure tensors generate the balanced tensor products, so the coherence diagrams commute as chain maps; these formulas insert no sign because they change no cochain degree. [L3, algebra]

1.5 Reindexing the chain cone of [L4] by $n=-q$ gives $\operatorname{Cone}(u)^q=Y^q\oplus X^{q+1}$ and differential $(y,x)\mapsto(d_Yy+u^{q+1}x,-d_X^{q+1}x)$, with projection to $X[1]^q=X^{q+1}$. This fixes the inclusion and projection in the standard triangle [L5]. [L4, L5, algebra]

1.6 Distribute $F^p\otimes_A(Y^q\oplus X^{q+1})$ over its two summands. The right-variable comparison is the identity on the target summand and multiplication by $(-1)^p$ on the shifted-source summand; each component is balanced and bimodule-linear, and the inverse uses the same component formulas since $(-1)^{2p}=1$, making it an internal-degree-zero bimodule isomorphism in every total degree. These formulas commute with degree-zero maps in all inputs, so the comparison is natural. [L1, L4, algebra]

1.7 For $f\in F^p$, $y\in Y^q$, and $x\in X^{q+1}$, the target component after the cone differential is $d_Ff\otimes y+(-1)^pf\otimes d_Yy+(-1)^pf\otimes u(x)$, matching the target component obtained by first taking the tensor differential and then the comparison. On the shifted-source component the target cone differential is $-d_{F\otimes X}((-1)^pf\otimes x)=(-1)^{p+1}d_Ff\otimes x-f\otimes d_Xx$; applying the comparison after the source differential gives the same expression, since its sign on $d_Ff$ is $(-1)^{p+1}$ and its sign on $(-1)^pf\otimes(-d_Xx)$ is $-1$. Thus the comparison is a chain map. [L1, L2, L4, algebra]

1.8 The shift comparison $F\otimes_A X[1]\to(F\otimes_A X)[1]$ with value $(-1)^pf\otimes x$ is a chain isomorphism: the two total differentials agree because the shift negates $d_X$ on the first side and negates both terms of the total differential on the second. Under this comparison, the projection of $F\otimes\operatorname{Cone}(u)$ to $F\otimes X[1]$ equals the projection of $\operatorname{Cone}(1_F\otimes u)$ followed by the shift comparison, both sending $f\otimes x$ to $(-1)^pf\otimes x$; the inclusions of $F\otimes Y$ also agree. This identifies the entire standard cone triangles. [L1, L5, algebra]

1.9 Write $\operatorname{Cone}(v)^p=F'^p\oplus F^{p+1}$. After distributing the tensor with $X^q$, the left-variable comparison identifies these summands with $(F'\otimes_A X)^n$ and $(F\otimes_A X)^{n+1}$, respectively, for $n=p+q$, and is the identity on each part; it is natural since these components commute with all degree-zero maps. [L1, L4, algebra]

1.10 On a target-part element $(f',f)\otimes x$, the target component of either differential is $d_{F'}f'\otimes x+(-1)^pf'\otimes d_Xx+v(f)\otimes x$. On a shifted-source element $f\in F^{p+1}$ tensored with $x$, the source component on either side is $-d_Ff\otimes x+(-1)^pf\otimes d_Xx$, since the shifted total differential is $-d_{F\otimes X}$. Thus the identity comparison is a chain map, with inverse the identity on both summands. [L1, L2, L4, algebra]

1.11 The shift comparison $F[1]\otimes_A X\to(F\otimes_A X)[1]$ is identity on elementary tensors; for $f\in F^{p+1}$ its differential on either side is $-d_Ff\otimes x+(-1)^pf\otimes d_Xx$. The inclusion and projection commute with the identity-on-parts comparison, including projection to the shifted source under this shift comparison, so the entire standard triangle for $v$ tensors to that for $v\otimes_A1_X$. [L1, L5, algebra]

2.1 The categories of graded bimodules used here are abelian: kernels and cokernels of degree-zero bimodule maps are computed in each internal degree and remain stable under both actions, and the canonical coimage-to-image map is an isomorphism degreewise. Applying [L6] makes their standard cone triangles distinguished in the homotopy categories; the comparisons already checked in both variables identify the image triangles with the respective standard cone triangles. [L5, L6, algebra] ∎
