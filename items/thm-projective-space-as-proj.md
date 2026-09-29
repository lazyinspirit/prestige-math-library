---
id: thm-projective-space-as-proj
kind: theorem
title: "Projective space is Proj of a polynomial ring"
status: draft
origin: pipeline
deps:
  - lem-standard-opens-proj-affine
  - thm-proj-structure-sheaf-scheme
  - thm-gluing-affine-schemes
  - def-relative-projective-space-standard-charts
  - thm-affine-fibre-product-tensor-ring
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Gao-Zhang, Lectures on Algebraic Geometry, Chapter 5"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Statement

Assume the Axiom of Choice as inherited from the affine-scheme constructions
used to build $\operatorname{Proj}$ and $\mathbb P^n_A$
([[def-axiom-of-choice]]). Fix a commutative ring $A$ and an integer $n\ge0$,
let $S=A[x_0,\dots,x_n]$ be graded by total degree with $\deg x_i=1$, and let
$\mathbb P^n_A$ be the chart-glued projective space of
[[def-relative-projective-space-standard-charts]], with standard charts
$U_i=\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$ and transition
isomorphisms $x^{(i)}_\ell\mapsto x^{(j)}_\ell/x^{(j)}_i$,
$x^{(i)}_j\mapsto 1/x^{(j)}_i$ on $U_i\cap U_j$.

Then there is a canonical isomorphism of $\operatorname{Spec}A$-schemes
$$\operatorname{Proj}S\;\cong\;\mathbb P^n_A,$$
it is natural in $A$: for every ring homomorphism $A\to B$ the diagram with the
identifications $\operatorname{Proj}(A[x_0,\dots,x_n])\otimes_A B\cong
\operatorname{Proj}(B[x_0,\dots,x_n])$ and $\mathbb P^n_B\cong
\mathbb P^n_A\times_{\operatorname{Spec}A}\operatorname{Spec}B$ commutes, and
for $n=0$ both sides are $\operatorname{Spec}A$.

## Facts & Assumptions

**Given:** A commutative ring $A$, an integer $n\ge0$, the graded polynomial ring $S=A[x_0,\dots,x_n]$ with $\deg x_i=1$, the scheme $\operatorname{Proj}S$, and the chart-glued $\mathbb P^n_A$ with charts $U_i$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] For homogeneous $f\in S_+$ of positive degree the standard open $D_+(f)=\operatorname{Spec}S_{(f)}$ is an affine chart of $\operatorname{Proj}S$, and the charts $D_+(f)$ cover $\operatorname{Proj}S$, with the canonical localization maps on overlaps. ([[lem-standard-opens-proj-affine]], [[thm-proj-structure-sheaf-scheme]])

[F2] $\mathbb P^n_A$ is glued from the affine charts $U_i=\operatorname{Spec}B_i$ with $\mathbb Z$-algebra isomorphisms $(B_i)_{x^{(i)}_j}\to(B_j)_{x^{(j)}_i}$ given by $x^{(i)}_\ell\mapsto x^{(j)}_\ell/x^{(j)}_i$ and $x^{(i)}_j\mapsto 1/x^{(j)}_i$, these satisfy the identity and cocycle conditions, and for the affine base $A$ one has $U_i\cong\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$. ([[def-relative-projective-space-standard-charts]])

[F3] For rings $B,C$ over $A$ the fibre product of affine schemes over $\operatorname{Spec}A$ is $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C)$, with the evident projections. ([[thm-affine-fibre-product-tensor-ring]])

[L1] Localisation commutes with scalar extension: $(S_T)\otimes_A B\cong(S\otimes_A B)_{T_B}$. Both rings represent compatible maps from $S$ and $B$ for which the image of each element of $T$ is invertible. The resulting mutually inverse maps send $(s/t)\otimes b$ to $(s\otimes b)/(t\otimes1)$, and commute with further localisation. For homogeneous $T$ these maps respect degree; since $B$ is placed in degree zero and tensor product commutes with direct sums, they identify the degree-zero components too.

[F5] Affine schemes with compatible open-overlap isomorphisms glue uniquely up to unique isomorphism respecting the charts. ([[thm-gluing-affine-schemes]])

## Proof

**Proof technique:** direct: compute the degree-zero localisations of the polynomial ring on the standard opens, match them and their transition maps with the published charts of $\mathbb P^n_A$, and verify base change and the case $n=0$.

1.1 The chart rings. The opens $D_+(x_i)$ cover: a homogeneous prime containing all $x_i$ contains $S_+=(x_0,\dots,x_n)$ and is not in Proj. There is a graded isomorphism
$$S[x_i^{-1}]\cong A[y_\ell:\ell\ne i][z,z^{-1}],\qquad x_i\mapsto z,\quad x_\ell\mapsto y_\ell z,$$
with $\deg z=1$ and $\deg y_\ell=0$; the inverse sends $z$ to $x_i$ and $y_\ell$ to $x_\ell/x_i$. Taking degree zero gives $S_{(x_i)}=A[x_\ell/x_i:\ell\ne i]$ with no relations among these variables beyond those of $A$. Thus $D_+(x_i)\cong U_i$ over $\operatorname{Spec}A$. [F1, F2, algebra]

1.2 The overlap ring. For $i\ne j$ the element $\tau=x_j/x_i=x^{(i)}_j\in S_{(x_i)}$ has the property that the distinguished open $D(\tau)\subseteq D_+(x_i)$ is $D_+(x_ix_j)$, because a point of $D_+(x_i)$ has $x_j$ outside its homogeneous prime exactly when the degree-zero chart element $\tau=x_j/x_i$ is outside the corresponding prime; thus $D(\tau)=D_+(x_i)\cap D_+(x_j)=D_+(x_ix_j)$. Localising the chart ring gives $S_{(x_i x_j)}=(S[(x_ix_j)^{-1}])_0\cong(S_{(x_i)})_{\tau}$, and symmetrically $(S_{(x_j)})_{\tau'}\cong S_{(x_ix_j)}$ with $\tau'=x_i/x_j$, so both $D_+(x_i)$ and $D_+(x_j)$ contain a copy of the same affine scheme $D_+(x_ix_j)$ as their overlap. [F1, algebra]

2.1 The case $n=0$. For $n=0$ we have $S=A[x_0]$, the single chart $D_+(x_0)$ covers by step 1.1 and $S_{(x_0)}=A$, so $\operatorname{Proj}S=D_+(x_0)=\operatorname{Spec}A$; by [F2] the glued $\mathbb P^0_A$ has the single chart $U_0=\operatorname{Spec}A$ and no gluing, so it too is $\operatorname{Spec}A$, and the identification is canonical. [F1, F2, cases: n=0]

2.2 Matching the transition maps on overlaps. Under the identifications of step 1.1 and step 1.2, the transition isomorphism between the two copies of $D_+(x_ix_j)$ inside $D_+(x_i)$ and $D_+(x_j)$ is induced by the inclusions $S_{(x_i)}\hookrightarrow S_{x_ix_j}$ and $S_{(x_j)}\hookrightarrow S_{x_ix_j}$, followed by the unique comparison of the two localisations; explicitly it sends $x^{(i)}_\ell=x_\ell/x_i$ to $(x_\ell/x_j)/(x_i/x_j)=x^{(j)}_\ell/x^{(j)}_i$ expressed in the localisation $A[x^{(j)}_\ell]_{x^{(j)}_i}$, that is, $x^{(i)}_\ell\mapsto x^{(j)}_\ell/x^{(j)}_i$ and $x^{(i)}_j\mapsto 1/x^{(j)}_i$. This is exactly the transition isomorphism in the gluing data of $\mathbb P^n_A$ [F2], on the same affine charts; the cocycle condition of the two gluing systems therefore agrees, so the isomorphisms of step 1.1 glue to an isomorphism of $\operatorname{Spec}A$-schemes $\operatorname{Proj}S\to\mathbb P^n_A$ by [F5]. [F2, F5, step 1.1, step 1.2, algebra]

3.1 Base change. Let $A\to B$ be a ring homomorphism. Then $S\otimes_A B=B[x_0,\dots,x_n]$ with $\deg x_i=1$, and by [F3], [L1] one has $S_{(x_i)}\otimes_A B\cong(S\otimes_AB)_{(x_i)}=B[x^{(i)}_\ell:\ell\ne i]$; the transition formulas of step 2.2 are identities in localized polynomial rings over the integers, so they base change to the same formulas over $B$, and the gluing data of $\operatorname{Proj}(A[x_0,\dots,x_n])\times_{\operatorname{Spec}A}\operatorname{Spec}B$ and of $\operatorname{Proj}(B[x_0,\dots,x_n])$ coincide; unicity of gluing [F5] gives the commutative square of the statement. [F3, L1, F5, step 1.1, step 2.2]

4.1 Conclusion. Step 2.2 gives the canonical isomorphism $\operatorname{Proj}A[x_0,\dots,x_n]\cong\mathbb P^n_A$ over $\operatorname{Spec}A$, step 2.1 the case $n=0$, and step 3.1 the compatibility with $A\to B$; all constructions use only the inherited affine gluing and associated-sheaf interfaces, so the Axiom of Choice [A1] is inherited and not used again. [A1, step 2.1, step 2.2, step 3.1]
\qed
