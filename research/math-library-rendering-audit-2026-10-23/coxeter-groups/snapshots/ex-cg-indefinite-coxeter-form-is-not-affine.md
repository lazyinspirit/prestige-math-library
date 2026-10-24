---
id: "ex-cg-indefinite-coxeter-form-is-not-affine"
kind: "example"
title: "An indefinite Coxeter form: infinite, but not of affine type"
provenance: {"statement": "ai-altered", "proof": "ai-altered"}
sources: {"references": [{"title": "M. W. Davis and G. Moussong, Notes on nonpositively curved polyhedra (Turan Workshop lecture notes, 1998/1999; 65 PDF pages)", "url": "https://people.math.osu.edu/davis.12/notes.pdf", "locator": "Section 6.1, Example 6.1.2, printed p. 33/PDF p. 33: the geometric triangle angle-sum trichotomy. This is contextual background for (iii)-(iv); no geometric realization is imported, and the matrix determinant boundary is proved locally."}, {"title": "M. W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, Princeton University Press, 2008; 600 PDF pages)", "url": "https://people.math.osu.edu/davis.12/davisbook.pdf", "locator": "Section 6.8, Theorem 6.8.12(i)-(iii), printed p. 102/PDF p. 118: the spherical/Euclidean/hyperbolic trichotomy for cosine matrices of a simplex, under the explicit hypothesis that no Coxeter label is infinity. This is background only; all labels in the present example are finite and the algebraic conclusions are proved locally."}], "scraped": []}
status: published
origin: "pipeline"
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 19
deps: ["def-cg-irreducible-affine-coxeter-type","lem-cg-positive-radical-and-affine-gram-exclusions","def-cg-standard-affine-diagrams","def-cg-real-coxeter-form-and-reflection","thm-cg-finite-type-positive-definite-criterion","def-cg-coxeter-diagram-components-and-finite-type","def-definiteness-inertia-and-signature-data-over-the-reals","def-pi-via-first-positive-cosine-zero","thm-complex-nth-roots-and-roots-of-unity","thm-eulers-formula","thm-double-angle-and-power-reduction-identities","thm-sine-cosine-signs-monotonicity-and-ranges","thm-quarter-turn-values-and-shift-formulas","thm-half-angle-identities-with-sign-conditions","lem-cg-reflection-form-invariance-and-rank-two-orders","lem-cg-affine-type-crystallographic-alcove-diagrams","thm-cg-affine-gram-classification-and-euclidean-realization","thm-hh-parabolic-minimal-representatives-and-length-additivity","thm-sine-and-cosine-addition-formulas","thm-of-square-roots","lem-of-square-monotone","def-sine-and-cosine-by-power-series"]
proof_strategy: direct
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s_1,s_2,s_3\}$ with $m(s_1,s_2)=m(s_2,s_3)=3$ and $m(s_1,s_3)=5$, so that $\Gamma$ is the triangle with labels $(3,3,5)$, and let $B$ be the cosine matrix $$B=\begin{pmatrix}1&-\frac12&-\cos\frac{\pi}{5}\\[1pt]-\frac12&1&-\frac12\\[1pt]-\cos\frac{\pi}{5}&-\frac12&1\end{pmatrix},\qquad \cos\frac{\pi}{5}=\frac{1+\sqrt5}{4}.$$ Then:

**(i)** $B$ is indefinite: the vector $v=e_{s_1}+e_{s_2}+e_{s_3}$ satisfies $B(v,v)=3+2\left(-\frac12-\frac12-\cos\frac{\pi}{5}\right)=1-2\cos\frac{\pi}{5}=\frac{1-\sqrt5}{2}<0$ because $\cos\frac{\pi}{5}=\frac{1+\sqrt5}{4}$ and $\sqrt5>1$ (the value of $\cos\frac{\pi}{5}$ is derived in the verification, not cited). Since $B(e_{s_1},e_{s_1})=1>0$, $B$ has both positive and negative values. Its leading principal minors are $1$, $\frac34$, and $\det B=\frac12-\frac12\cos\frac{\pi}{5}-\cos^2\frac{\pi}{5}=-\frac{\sqrt5}{4}<0$.

**(ii)** $W$ is infinite, but $(W,S)$ is **not** of affine form type: affine form type requires $B$ positive semidefinite of corank one ([[def-cg-irreducible-affine-coxeter-type]] (1)), and by (i) $B$ is negative on some vector. It is infinite by the finite-type criterion ([[thm-cg-finite-type-positive-definite-criterion]] (1)): an indefinite form is not positive definite.

**(iii)** The angle sum of the triangle is $1/3+1/3+1/5=13/15<1$, and the form is indefinite and nondegenerate: $B(v,v)<0$ by (i) while $B(e_{s_1},e_{s_1})=1>0$, and $\det B=-\frac{\sqrt5}{4}\ne0$; every nonempty proper principal submatrix is positive definite by [[lem-cg-reflection-form-invariance-and-rank-two-orders]] (3)(i), whose rank-two computations give determinants $\sin^2(\pi/3)=\frac34>0$ and $\sin^2(\pi/5)=1-\cos^2(\pi/5)=\frac{5-\sqrt5}{8}>0$; the empty principal matrix is vacuously positive definite. No geometric hyperbolic realization is constructed on this page; only the algebraic definiteness type is asserted. For this connected system, the positive-definite, affine-form, and indefinite cases are mutually exclusive: the first is finite, the second is positive semidefinite of corank one, and this example is the infinite indefinite case ([[thm-cg-finite-type-positive-definite-criterion]] (1), [[def-cg-irreducible-affine-coxeter-type]] (1), [[lem-cg-positive-radical-and-affine-gram-exclusions]] (1)).

**(iv)** By contrast the triangle with labels $(3,3,3)$ is $\tilde A_2$, positive semidefinite of corank one ([[def-cg-standard-affine-diagrams]] (1), [[lem-cg-affine-type-crystallographic-alcove-diagrams]] (3)). For any triangle Coxeter matrix with finite labels $m_{12},m_{23},m_{13}\ge3$, the cosine-form determinant is zero exactly when $\pi/m_{12}+\pi/m_{23}+\pi/m_{13}=\pi$, and is negative when the sum is below $\pi$, as calculated in Proof Step 2.2. In particular, $(3,3,4)$ is indefinite: for $v=e_{s_1}+e_{s_2}+e_{s_3}$, $B(v,v)=1-2\cos(\pi/4)=1-\sqrt2<0$, where $\cos(\pi/4)=\sqrt2/2$ follows from the half-angle identity at $\pi/2$ ([[thm-half-angle-identities-with-sign-conditions]]).

**(v)** Consequently, in the classification statement of [[thm-cg-affine-gram-classification-and-euclidean-realization]] (1) the hypothesis "positive semidefinite" cannot be replaced by "infinite", and a consumer testing a diagram for affine type must examine the definiteness of the whole form and not only the finiteness of proper subdiagrams: $\Gamma$ here has all proper subdiagrams of finite type (the rank-two subdiagrams $I_2(3)$, $I_2(3)$, $I_2(5)$ are all finite), yet is not affine.

## Facts & Assumptions

**Given:** The finite labelled triangle $(3,3,5)$ and its form.

[F1] The cosine form is a symmetric bilinear form with diagonal one and off-diagonal $-\cos(\pi/m)$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F2] Affine form type means connected and positive semidefinite of corank one ([[def-cg-irreducible-affine-coxeter-type]] (1)).

[F3] A Coxeter diagram joins distinct vertices exactly when their label is at least $3$; thus this labelled triangle is connected ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F4] A finite-rank Coxeter group is finite exactly when its Coxeter form is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1)).

[F5] Every standard parabolic has the restricted Coxeter presentation; for an empty generator set it is the trivial group ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)).

[F6] Fifth roots of unity have the form $e^{2\pi i k/5}$, Euler's identity is $e^{ix}=\cos x+i\sin x$, and the double-angle identities hold ([[thm-complex-nth-roots-and-roots-of-unity]], [[thm-eulers-formula]], [[thm-double-angle-and-power-reduction-identities]]).

[F7] The defining power series give cosine even, sine odd and $\cos0=1$ ([[def-sine-and-cosine-by-power-series]]).

[F8] Cosine strictly decreases on $[0,\pi]$, $\cos(\pi/2)=0$, $\cos\pi=-1$, $\sin\pi=0$, and sine is positive on $(0,\pi)$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F9] Nonnegative square roots exist uniquely and squaring is strictly increasing on nonnegative reals ([[thm-of-square-roots]], [[lem-of-square-monotone]]).

[F10] The all-$3$ triangle is $\tilde A_2$ and has a positive-semidefinite corank-one form ([[def-cg-standard-affine-diagrams]] (1), [[lem-cg-affine-type-crystallographic-alcove-diagrams]] (3)).

[F11] Sine and cosine satisfy their addition formulas ([[thm-sine-and-cosine-addition-formulas]]).

[F12] The half-angle identity with its sign determined by the quadrant gives $\cos(\pi/4)=\sqrt2/2$ ([[thm-half-angle-identities-with-sign-conditions]]).

[F13] For two distinct generators with finite label $m$, their rank-two form is positive definite with determinant $\sin^2(\pi/m)$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (3)(i)).

[F14] For a connected Coxeter diagram with nonpositive off-diagonal entries, a positive-semidefinite Coxeter form with nonzero radical has corank one and a positive radical vector ([[lem-cg-positive-radical-and-affine-gram-exclusions]] (1)).

[F15] The connected positive-semidefinite corank-one Coxeter diagrams are exactly the standard affine diagrams ([[thm-cg-affine-gram-classification-and-euclidean-realization]] (1)).

[F16] The standard angle constant satisfies $\pi>0$ ([[def-pi-via-first-positive-cosine-zero]]).

## Proof

**Proof technique:** direct; all finite coordinate constructions use no choice principle.

1.1 Put $\zeta=e^{2\pi i/5}$. Since $\zeta^5=1$ and $\zeta\ne1$, multiplication by $\zeta-1$ proves $1+\zeta+\zeta^2+\zeta^3+\zeta^4=0$. Divide by $\zeta^2$ and put $y=\zeta+\zeta^{-1}$ to get $y^2+y-1=0$. Euler's identity and parity [F6,F7] give $y=2\cos(2\pi/5)>0$, as $0<2\pi/5<\pi/2$ and cosine is strictly decreasing to $\cos(\pi/2)=0$ [F8]. Hence $(2y+1)^2=5$, so $y=(\sqrt5-1)/2$ by positivity and uniqueness of square roots [F9]. Double angle [F6] gives $c^2:=\cos^2(\pi/5)=(3+\sqrt5)/8$; $c>0$ by [F8] and $(1+\sqrt5)^2/16=(3+\sqrt5)/8$, so $c=(1+\sqrt5)/4$. For $d=\cos(\pi/3)>0$, the double-angle identity gives $2d^2-1=\cos(2\pi/3)=-d$, since the addition formula, parity, $\cos\pi=-1$ and $\sin\pi=0$ give $\cos(\pi-x)=-\cos x$ [F7,F8,F11]; thus $(2d-1)(d+1)=0$ and $d=1/2$. Finally, for $h=\cos(\pi/4)>0$, the double-angle identity gives $2h^2-1=\cos(\pi/2)=0$, so $h=1/\sqrt2=\sqrt2/2$ by [F9]. [F6, F7, F8, F9, F11, F16, algebra]

2.1 On $v=(1,1,1)$ the form has value $3-2(1/2+1/2+c)=1-2c=(1-\sqrt5)/2<0$, whereas on $e_{s_1}$ it has value one. It is therefore indefinite. Expansion of the determinant gives $1-1/4-1/4-c^2-2(1/2)(1/2)c=1/2-c/2-c^2=-\sqrt5/4\ne0$. The empty principal matrix is vacuously positive definite; a one-coordinate principal form is $[1]$; and a two-coordinate form is $(a-d b)^2+(1-d^2)b^2$ for $d=1/2$ or $c$, with positive determinant $3/4$ or $(5-\sqrt5)/8$ since $1<\sqrt5<3<5$. Thus every proper principal submatrix is positive definite. For $T=\emptyset$, $W_T=\{1\}$; for nonempty proper $T$, the restricted presentation [F5] and finite-type criterion [F4] make $W_T$ finite. The full group is infinite by [F4], and it is not affine by [F2]. The numerical angle sum is $1/3+1/3+1/5=13/15<1$; no hyperbolic realization is needed for these algebraic conclusions. [F1, F2, F4, F5, F9, F13, step 1.1, algebra]

2.2 The all-$3$ triangle is affine by [F10]. For $(3,3,4)$, the same evaluation on $(1,1,1)$ is $1-\sqrt2<0$, using [F12] (the value was also computed in Step 1.1); thus it is not positive semidefinite. For any triangle Coxeter matrix with finite labels $m_{12},m_{23},m_{13}\ge3$, put $\theta_1=\pi/m_{12}$, $\theta_2=\pi/m_{23}$, $\theta_3=\pi/m_{13}$ and $A=\cos\theta_1$, $B=\cos\theta_2$, $C=\cos\theta_3$. Its cosine-form determinant is $1-A^2-B^2-C^2-2ABC=(\sin\theta_1\sin\theta_2)^2-(C+AB)^2$, using [F13] for $\sin^2\theta_i=1-\cos^2\theta_i$. Since $0<\theta_i\le\pi/3$, all three cosines are at least $1/2>0$ and all three sines are positive [F8]; hence the second factor $\sin\theta_1\sin\theta_2+C+AB$ is positive. The first factor is $\sin\theta_1\sin\theta_2-C-AB=-\cos(\theta_1+\theta_2)-\cos\theta_3=\cos(\pi-\theta_1-\theta_2)-\cos\theta_3$ by the addition formulas and angle-shift values [F7,F8,F11]. Strict decrease [F8] shows the determinant is zero exactly when $\theta_1+\theta_2+\theta_3=\pi$, and negative when the sum is below $\pi$. The sum is at most $\pi$, with equality only for $(3,3,3)$. If it is below $\pi$, at least one $\theta_i<\pi/3$, so its cosine exceeds $1/2$ while the others are at least $1/2$; therefore the sum-vector has value $3-2(A+B+C)<0$, proving indefiniteness. This proves the asserted angle-sum boundary without constructing a hyperbolic triangle. [F1, F7, F8, F10, F11, F12, F13, F16, step 1.1, algebra]

3.1 The Coxeter diagram is connected by [F3]. For this system, the positive-definite case is finite by [F4]. If $B$ is positive semidefinite but not positive definite, choose $0\ne x$ with $B(x,x)=0$. For any $y\in V$, positive semidefiniteness gives $0\le B(x+ty,x+ty)=2tB(x,y)+t^2B(y,y)$ for every real $t$. If $B(x,y)\ne0$, then either $B(y,y)=0$ and a $t$ of opposite sign makes the expression negative, or $B(y,y)>0$ and a sufficiently small $t$ of opposite sign does so. Thus $B(x,y)=0$ for all $y$, so $x\in\operatorname{rad}(B)\setminus\{0\}$; [F14] gives corank one, and the system is affine by [F2]. Otherwise the form is indefinite and the group is infinite by [F4], but not affine by [F2]. These cases are mutually exclusive. By Step 2.1, the $(3,3,5)$ system is in the last case and all its proper parabolics are finite. Thus neither infiniteness nor finiteness of proper subdiagrams can replace positive semidefiniteness in [F15]'s classification. The whole-form calculation, rather than only rank-two tests, is essential. All calculations are explicit and use no Choice. [F2, F3, F4, F14, F15, step 2.1, algebra] ∎
