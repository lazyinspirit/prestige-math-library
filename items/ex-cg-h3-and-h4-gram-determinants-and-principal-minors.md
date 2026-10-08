---
id: ex-cg-h3-and-h4-gram-determinants-and-principal-minors
kind: example
title: "Gram determinants and principal minors of the non-crystallographic types $H_3$ and $H_4$"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [thm-laplace-cofactor-expansion, thm-cg-finite-coxeter-classification-including-h-and-dihedral, thm-cg-finite-type-positive-definite-criterion, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, thm-sylvesters-criterion-for-positive-definiteness, def-matrix-minors-cofactors-and-adjugate, thm-chebyshev-multiple-angle-identities, def-chebyshev-polynomials-first-and-second-kind, thm-quarter-turn-values-and-shift-formulas, thm-of-square-roots, lem-of-square-monotone, def-definiteness-inertia-and-signature-data-over-the-reals, lem-cg-positive-definite-diagram-exclusions, cor-trigonometric-parity-and-pythagorean-identity, thm-double-angle-and-power-reduction-identities, thm-sine-cosine-signs-monotonicity-and-ranges, def-pi-via-first-positive-cosine-zero, thm-determinant-is-the-unique-normalized-alternating-multilinear-function]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix C, Table C.1 (printed p. 436): det(2A)(H_3) = 3 - sqrt5 and det(2A)(H_4) = (7-3sqrt5)/2; Lemma C.2.3 (printed p. 436): the diagrams Z_4 and Z_5 have negative determinants"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Computation of det C(H3) = 3 - sqrt5 and det C(H4) = (7-3sqrt5)/2 from det C(I2(5)) = (5-sqrt5)/2, printed p. 14 (PDF page 14). Michel's C here is the scaled Cartan matrix, so these are det(2C) in this item's cosine-matrix convention."
verification:
  precheck: pass
---

## Example

Let $\Gamma=H_3$ be the path $s_1-s_2-s_3$ with labels $m(s_1,s_2)=3$,
$m(s_2,s_3)=5$, and let $\Gamma=H_4$ be the path $s_1-s_2-s_3-s_4$ with labels
$3,3,5$ ([[def-cg-coxeter-diagram-components-and-finite-type]]); let $B$ be the
Coxeter form and $C$ the cosine matrix
([[def-cg-real-coxeter-form-and-reflection]]). Using
$\cos(\pi/5)=(1+\sqrt5)/4$
(derived in Verification 1.1):

**(i) $H_3$.** The leading principal minors of $2C$ are $2$, $3$ and
$\det(2C)=3-\sqrt5>0$; the $2\times2$ principal minor on the label-$5$
edge equals $4\sin^2(\pi/5)=(5-\sqrt5)/2>0$; the minor on $\{s_1,s_3\}$ equals $4$. Hence $B$ is positive definite and
the Coxeter group of type $H_3$ is finite.

**(ii) $H_4$.** The leading principal minors of $2C$ are $2,3,4$ (the first
three vertices form type $A_3$) and $\det(2C)=\frac{7-3\sqrt5}2>0$. Hence $B$ is
positive definite and the Coxeter group of type $H_4$ is finite.

**(iii) Excluded neighbours.** The overlong paths with labels $3,5,3$ and
$3,3,5,3$ have negative determinant, and the star with a degree-$3$ vertex whose
three incident edges have labels $3,3,5$ has the negative witness value
$1-(\frac14+\frac14+\cos^2(\pi/5))<0$; none of these diagrams is of finite type
([[thm-cg-finite-type-positive-definite-criterion]],
[[lem-cg-positive-definite-diagram-exclusions]] (3),(4)).

## Facts & Assumptions

**Given:** The paths $H_3$, $H_4$ and the three excluded diagrams above, with the Coxeter form $B$ and its cosine matrix $C=(B(e_s,e_t))$; write $d_k$ for the determinant of the leading $k\times k$ principal submatrix of $C$.

[F1] $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $B(e_s,e_t)=-1$ for $m(s,t)=\infty$, without any positivity assumption; non-adjacent distinct vertices have $m(s,t)=2$ and hence matrix entry $0$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-coxeter-diagram-components-and-finite-type]]).

[F2] $T_5(\cos\theta)=\cos(5\theta)$ for every real $\theta$, and the Chebyshev polynomials of the first kind satisfy $T_0=1$, $T_1=t$, $T_{n+2}=2tT_{n+1}-T_n$; $\cos(x+\pi)=-\cos x$, $\cos\pi=-1$; $\cos(2x)=2\cos^2x-1$; $1-\cos^2x=\sin^2x$ and $\sin x>0$ for $0<x<\pi$; cosine is strictly decreasing on $[0,\pi]$; and $2<\sqrt5<3$, $3\sqrt5<7$ ([[thm-chebyshev-multiple-angle-identities]], [[def-chebyshev-polynomials-first-and-second-kind]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-double-angle-and-power-reduction-identities]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[def-pi-via-first-positive-cosine-zero]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[lem-of-square-monotone]], [[thm-of-square-roots]]).

[F3] A symmetric real matrix is positive definite if and only if its leading principal minors are positive; the form $B$ is positive definite when $B(u,u)>0$ for every $u\ne0$, and $W$ is finite if and only if $B$ is positive definite ([[thm-sylvesters-criterion-for-positive-definiteness]], [[def-definiteness-inertia-and-signature-data-over-the-reals]], [[thm-cg-finite-type-positive-definite-criterion]]).

[F4] Scaling an $n\times n$ matrix by $2$ multiplies its determinant by $2^n$, and $d_k$ is the determinant of the leading $k\times k$ principal submatrix ([[def-matrix-minors-cofactors-and-adjugate]], [[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]]).

[F5] $H_3$ and $H_4$ are among the standard diagrams of the classification, and every proper principal submatrix of a listed diagram is a block diagonal matrix whose blocks are listed diagrams of smaller rank ([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (3)).

[F6] Laplace expansion along any row or column expresses the determinant as the sum of entries times their cofactors; the cofactor sign is $(-1)^{i+j}$ and the determinant of the empty deleted matrix is $1$ ([[thm-laplace-cofactor-expansion]], [[def-matrix-minors-cofactors-and-adjugate]]).

## Verification

1.1 (The three trigonometric values and the small determinants.) $\cos(\pi/3)=1/2$ follows from the double-angle formula $\cos(2x)=2\cos^2x-1$ at $x=\pi/3$ together with $\cos(2\pi/3)=\cos(\pi-\pi/3)=-\cos(\pi/3)$, which gives $2c^2-1=-c$, i.e. $(2c-1)(c+1)=0$, and $c=\cos(\pi/3)>-1$ because $\pi/3\in(0,\pi)$ and cosine is strictly decreasing on $[0,\pi]$ with $\cos\pi=-1$ [F2]; thus $c=1/2$. Also $\cos(\pi/5)=(1+\sqrt5)/4$: with $c_5=\cos(\pi/5)$, iterating the recurrence of [F2] gives $T_5(t)=16t^5-20t^3+5t$, so $T_5(c_5)=\cos\pi=-1$, i.e. $16c_5^5-20c_5^3+5c_5+1=(c_5+1)(4c_5^2-2c_5-1)^2=0$ by expansion, while $0<\pi/5<\pi/2$ gives $0<c_5<1$ [F2], so $c_5\ne-1$, $4c_5^2-2c_5-1=0$ and $(c_5-\frac14)^2=\frac5{16}$; by uniqueness of nonnegative square roots $c_5=\frac14\pm\frac{\sqrt5}4$, and the positive value is $(1+\sqrt5)/4$ because the other is negative as $2<\sqrt5$ [F2]. Thus $\sin^2(\pi/5)=1-\cos^2(\pi/5)=(5-\sqrt5)/8>0$ [F2]; also $\sqrt5<3$ and $3\sqrt5<7$ [F2], by squaring the positive quantities ($5<9$ and $45<49$). [F2, algebra]

1.2 (The recurrence without positivity.) For any of the paths in the Example, let $C_k$ be its leading $k\times k$ cosine matrix and set $d_0:=1$, $d_1=1$. For $k\ge2$ put $a:=\cos(\pi/m_{k-1})$. By [F1] the last row has only the potentially nonzero entries $-a$ in column $k-1$ and $1$ in column $k$. In the deleted matrix for the first entry, the last column has only the bottom entry $-a$, whose cofactor is $d_{k-2}$; its determinant is therefore $-a d_{k-2}$ by [F6]. The last-row cofactor sign at $(k,k-1)$ is $-1$, while the diagonal cofactor is $d_{k-1}$. Thus Laplace expansion yields $d_k=d_{k-1}-a^2d_{k-2}$ [F6]. This identity uses no definiteness assumption and applies equally to the excluded paths. [F1, F6, algebra]

2.1 (The $H_3$ minors and positive definiteness.) With $d_0=1$, $d_1=1$ and $d_k=d_{k-1}-\cos^2(\pi/m_{k-1})d_{k-2}$ by 1.2 [step 1.2]: $d_2=1-\cos^2(\pi/3)=\frac34$, $d_3=\frac34-\cos^2(\pi/5)\cdot1=\frac34-\frac{3+\sqrt5}8=\frac{3-\sqrt5}8>0$ by 1.1 [step 1.1]. Multiplying by $2^k$ [F4] gives for $2C$ the leading minors $2d_1=2$, $4d_2=3$, $8d_3=3-\sqrt5>0$, and $\det(2C)=3-\sqrt5$; the principal submatrix of $C$ on the label-$5$ edge $\{s_2,s_3\}$ is $\begin{pmatrix}1&-\cos(\pi/5)\\-\cos(\pi/5)&1\end{pmatrix}$ with determinant $\sin^2(\pi/5)$, so the determinant of the corresponding submatrix of $2C$ is $4\sin^2(\pi/5)=(5-\sqrt5)/2>0$ [F1, F2]. The submatrix of $2C$ on $\{s_1,s_3\}$ is $\operatorname{diag}(2,2)$ with determinant $4$. All leading principal minors of $2C$ are positive, so $2C$ and hence $C$ is positive definite by [F3], and $H_3$ has finite Coxeter group. [F1, F2, F3, F4, step 1.1, step 1.2, algebra]

2.2 (The $H_4$ minors and positive definiteness.) Using the recurrence of 1.2 [step 1.2] for the path with labels $3,3,5$: $d_1=1$, $d_2=\frac34$, $d_3=\frac34-\frac14\cdot1=\frac12$, $d_4=\frac12-\cos^2(\pi/5)\cdot\frac34=\frac12-\frac{3+\sqrt5}8\cdot\frac34=\frac{16-9-3\sqrt5}{32}=\frac{7-3\sqrt5}{32}>0$ by 1.1 [step 1.1]. The first three vertices carry the all-$3$ path $A_3$ with the computed doubled leading minors $2,3,4$ [F4], and $\det(2C)=16d_4=(7-3\sqrt5)/2>0$ because $3\sqrt5<7$ [F2]; all leading principal minors of $2C$ are positive, so $C$ is positive definite by [F3] and $H_4$ has finite Coxeter group. [F1, F2, F3, F4, step 1.1, step 1.2, algebra]

2.3 (The excluded neighbours.) The unconditional recurrence of 1.2 [step 1.2] for the path with labels $3,5,3$ gives $d_4=d_3-\cos^2(\pi/3)d_2=\frac{3-\sqrt5}8-\frac14\cdot\frac34=\frac{3-2\sqrt5}{16}<0$ because $2\sqrt5>3$, i.e. $\sqrt5>3/2$, follows from $\sqrt5>2$ [F2]; for the path with labels $3,3,5,3$ it gives $d_5=d_4-\cos^2(\pi/3)d_3=\frac{7-3\sqrt5}{32}-\frac14\cdot\frac12=\frac{3-3\sqrt5}{32}<0$ because $\sqrt5>1$ [F2]; a negative leading minor excludes positive definiteness by [F3]. For the star with centre $c$ and neighbours $a,b,d$, edges $ca,cb$ labelled $3$ and $cd$ labelled $5$, the vector $u=e_c+\frac12(e_a+e_b)+\cos(\pi/5)e_d\ne0$ has non-negative coordinates and satisfies $B(u,u)=1+\frac14+\frac14+\cos^2(\pi/5)+2\bigl(-\frac14-\frac14-\cos^2(\pi/5)\bigr)=1-(\frac14+\frac14+\cos^2(\pi/5))=\frac{1-\sqrt5}8<0$ because $\cos^2(\pi/5)=(3+\sqrt5)/8$ [F2]; by [F3] this star is not positive definite either. [F1, F2, F3, step 1.1, step 1.2, algebra]

3.1 (Conclusion.) The leading principal minors of $2C$ computed in 2.1 and 2.2 [step 2.1, step 2.2] are all positive, so $B$ is positive definite for $H_3$ and for $H_4$ by Sylvester's criterion [F3]; by the finiteness criterion [F3] the Coxeter groups of types $H_3$ and $H_4$ are finite, agreeing with their appearance in the classification [F5]. The three diagrams of 2.3 [step 2.3] either have a negative leading principal minor or a nonzero non-negative vector with non-positive value, so none of them is positive definite and none of their Coxeter groups is finite [F3], which is (iii). [F3, F5, step 2.1, step 2.2, step 2.3, algebra] ∎
