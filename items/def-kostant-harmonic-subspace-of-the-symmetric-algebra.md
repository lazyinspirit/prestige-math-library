---
id: "def-kostant-harmonic-subspace-of-the-symmetric-algebra"
kind: "definition"
title: "Kostant harmonic subspace of the symmetric algebra"
deps: ["def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action", "lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, \u00a7\u00a715\u201317; finite-dimensional local trace proof"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra with the symmetric adjoint action of [[def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action]]. Its Killing form $B(x,y)=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y)$ is nondegenerate and invariant by [[lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy]]. Thus $x\mapsto B(x,\cdot)$ identifies $S(\mathfrak g)$ with polynomial functions on $\mathfrak g$; a finite basis and its Killing-dual basis give inverse linear substitutions.

For $x\in\mathfrak g$ define the constant-coefficient derivation $D_x$ of $S(\mathfrak g)$ by $D_x(y)=B(x,y)$ on generators. These derivations commute, so for $p\in S$ substitution extends multiplicatively and linearly to an operator $D_p=p(\partial)$. Under the polynomial-function identification, $D_x$ is directional differentiation along $x$, since it differentiates $B(y,\cdot)$ to $B(y,x)$. The **Kostant harmonic subspace** is
$$\mathcal H=\{h\in S:D_p h=0\text{ for every }p\in S^{\mathfrak g}_+\}.$$
Equivalently one may test only homogeneous positive-degree invariants, since their finite homogeneous sums exhaust that ideal. This is a graded subspace. With $I=S S^{\mathfrak g}_+$, its degree-$d$ part is the annihilator $I_d^\perp$ for the perfect bilinear Fischer pairing $(p,q)_B=(D_pq)(0)$ on $S_d$, as verified below. It is stable under the adjoint action. The direct-sum complement assertion $S_d=\mathcal H_d\oplus I_d$ is a separate theorem; it is not inferred from complex bilinear nondegeneracy.

## Facts & Assumptions

**Given:** The finite-dimensional semisimple Lie algebra and the displayed polynomial and differential constructions.

[F1] The symmetric algebra, its finite-degree pieces and adjoint invariant ideal are defined in [[def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action]].

[F2] The Killing form is symmetric, invariant and nondegenerate by [[lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy]].

## Proof

1.1 The derivations $D_x,D_y$ commute because their commutator is a derivation vanishing on each linear generator. Hence the polynomial assignment $p\mapsto D_p$ is well-defined. Choose a basis $e_1,\ldots,e_n$ and its $B$-dual basis $f_1,\ldots,f_n$. For multi-indices $a,b$ of total degree $d$, the product rule gives $$(D_{e^a}f^b)(0)=\begin{cases}\prod_i a_i!&a=b,\\0&a\ne b.\end{cases}$$ Both monomial lists are bases of $S_d$, so the pairing is nondegenerate in both variables. It is symmetric: on products of linear generators its value is the sum over all bijections of the products of the corresponding $B$-pairings, unchanged on interchanging the two products by symmetry of $B$. This also verifies that degree zero has the usual nondegenerate scalar product. [F1, F2, given, algebra]

2.1 For homogeneous $p,q,h$ with $\deg p+\deg q=\deg h$, commuting constant-coefficient differentiation gives $(pq,h)_B=(q,D_p h)_B$. If $h\in S_d$ is harmonic, it therefore pairs to zero with every degree-$d$ product of a positive invariant and any polynomial, hence with $I_d$. Conversely if it annihilates $I_d$, fix a homogeneous invariant $p$ of degree $k>0$. If $k>d$ then $D_ph=0$ by degree; if $k\le d$, the displayed identity and nondegeneracy on $S_{d-k}$ force $D_p h=0$. This proves $\mathcal H_d=I_d^\perp$ exactly. Homogeneous decomposition also shows that testing every such $p$ is equivalent to testing every positive-degree invariant and that $\mathcal H$ is graded. [step 1.1, F1, given, algebra]

3.1 On a generator $y$, invariance of $B$ gives $[\operatorname{ad}_z,D_x](y)=-B(x,[z,y])=B([z,x],y)$. Both sides are derivations, so $[\operatorname{ad}_z,D_x]=D_{[z,x]}$ on $S$. The commutator product rule extends this to $[\operatorname{ad}_z,D_p]=D_{\operatorname{ad}_z p}$ for every polynomial $p$. For invariant $p$ the commutator is zero; hence $D_p h=0$ implies $D_p(\operatorname{ad}_z h)=0$. This proves adjoint stability of $\mathcal H$. Constants are harmonic, $I_0=0$, and in dimension zero $S=\mathcal H=\mathbb C$ with $I=0$. No complementary-subspace conclusion has been used, and all chosen dual bases are finite. [step 1.1, F1, F2, given, algebra] ∎
