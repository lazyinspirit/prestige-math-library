---
id: ex-cg-path-determinant-recursion-and-arm-inequality
kind: example
title: "Path determinants $d_k=d_{k-1}-\\cos^2(\\pi/m)d_{k-2}$ and the three-arm inequality"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [thm-cg-finite-coxeter-classification-including-h-and-dihedral, lem-cg-positive-definite-diagram-exclusions, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, thm-sylvesters-criterion-for-positive-definiteness, def-matrix-minors-cofactors-and-adjugate, thm-laplace-cofactor-expansion, thm-determinant-is-the-unique-normalized-alternating-multilinear-function, def-definiteness-inertia-and-signature-data-over-the-reals, thm-double-angle-and-power-reduction-identities, thm-quarter-turn-values-and-shift-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, thm-of-square-roots, lem-of-square-monotone, def-natural-numbers, thm-induction-principle, ex-cg-cycle-and-overlong-arm-nonpositive-witnesses]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Proof of Theorem 5.15, printed pp. 14-15: the chain inequality (i+1)(j+1) > 4ij cos^2(pi/m) and its case discussion (1,j), (2,2), and the three-chain computation 1/(p+1)+1/(q+1)+1/(r+1) > 1 describing the tri-chains of the theorem"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix C, formulas (C.1) and (C.2) and Table C.1 (printed pp. 435-436): det 2A = 2d_{n-1}-d_{n-2} for a final label 3 and det 2A = 2d_{n-1}-2d_{n-2} for a final label 4, with det(2A)(A_n) = n+1"
verification:
  precheck: pass
---

## Example

**(i) Path recursion.** Let $\Gamma$ be the path $s_1-\dots-s_n$ with labels
$m_1,\dots,m_{n-1}$ ($n\ge1$) and cosine matrix $C$
([[def-cg-real-coxeter-form-and-reflection]],
[[def-cg-coxeter-diagram-components-and-finite-type]]), and let $d_k$ be the
determinant of the leading $k\times k$ principal submatrix of $C$. Then
$\cos(\pi/\infty):=1$ is the coefficient convention. Then $d_0=1$, $d_1=1$, and
$$d_k=d_{k-1}-\cos^2(\pi/m_{k-1})\,d_{k-2}\qquad(2\le k\le n).$$ For the path
with all labels $3$ this gives $d_k=(k+1)/2^k$ and $\det(2C)=n+1$; for a path
whose only label $\ge4$ is $m$ on the edge between the $i$-th and $(i+1)$-st
vertices, positive definiteness requires the constraint
$(i+1)(j+1)>4ij\cos^2(\pi/m)$ of
[[lem-cg-positive-definite-diagram-exclusions]] (5)(ii), with $j=n-i$.

**(ii) The three-arm inequality.** For the star with central vertex $v$ and
three arms of $p,q,r\ge1$ vertices, all edges labelled $3$, positive
definiteness is equivalent to
$$\frac1{p+1}+\frac1{q+1}+\frac1{r+1}>1 .$$

**(iii) Numerical checks.** The triples satisfying the inequality are, up to
order, $(1,1,r)$ for every $r\ge1$ (type $D_{r+3}$), $(1,2,2)$ (type $E_6$),
$(1,2,3)$ (type $E_7$) and $(1,2,4)$ (type $E_8$); the boundary cases
$(1,2,5)$ (type $E_9$), $(2,2,2)$ and $(1,3,3)$ give equality $1$, and the
overlong star $(1,2,5)$ has an explicitly non-positive vector, as treated in
[[ex-cg-cycle-and-overlong-arm-nonpositive-witnesses]].

## Facts & Assumptions

**Given:** The paths of (i) and the three-arm star of (ii), with their labelled diagrams, the space $V=\mathbb R^S$ with Coxeter form $B$ and cosine matrix $C=(B(e_s,e_t))_{s,t\in S}$, the standard basis vectors $e_s$, and the leading minors $d_k$ of $C$.

[F1] An edge of the diagram is present exactly when $m(s,t)\ge3$ and carries the label $m(s,t)$; the subdiagram on a vertex subset is the induced labelled graph ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F2] $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$; $B(e_s,e_t)=-1$ for $m(s,t)=\infty$; $B$ is symmetric and bilinear, so $B(u,w)=\sum_{s,t\in S}u(s)w(t)B(e_s,e_t)$, and the $e_s$ form a basis of $V$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F4] For every row $i$ the determinant expands as $\det A=\sum_k a_{ik}C_{ik}(A)$, where $C_{ik}(A)$ is the cofactor and $A^{(i,k)}$, the matrix with row $i$ and column $k$ deleted, is the deleted matrix ([[thm-laplace-cofactor-expansion]], [[def-matrix-minors-cofactors-and-adjugate]]).

[F5] Determinant is multilinear in the columns and normalized, so multiplying an $n\times n$ matrix by the scalar $2$ multiplies its determinant by $2^n$, and the determinant of a block triangular matrix is the product of the determinants of its diagonal blocks ([[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]], [[def-matrix-minors-cofactors-and-adjugate]]).

[F6] A symmetric real matrix is positive definite if and only if all its leading principal minors are positive; the form $B$ is positive definite when $B(u,u)>0$ for every $u\ne0$ ([[thm-sylvesters-criterion-for-positive-definiteness]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F7] For $c:=\cos(\pi/3)$ one has $\cos(2\pi/3)=2c^2-1$ and $\cos(2\pi/3)=-\cos(\pi/3)=-c$, cosine is strictly decreasing on $[0,\pi]$ and $\cos\pi=-1$ ([[thm-double-angle-and-power-reduction-identities]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-trigonometric-parity-and-pythagorean-identity]]); and for a real symmetric positive definite form on a subspace, $B(u,w)^2\le B(u,u)B(w,w)$ with equality exactly when $u,w$ are linearly dependent ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F8] The strong induction principle on $\mathbb N$ holds ([[thm-induction-principle]], [[def-natural-numbers]]).

[F9] The standard irreducible diagrams of the classification are $A_n$ (all labels $3$), $D_n$ (arms $1,1,n-3$), $E_6,E_7,E_8$ (arms $1,2,2$; $1,2,3$; $1,2,4$), and the types $D_{r+3}$, $E_6,E_7,E_8$ carry those diagrams ([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1)).

[F10] The star with arms $1,2,5$ has the explicit non-positive vector of [[ex-cg-cycle-and-overlong-arm-nonpositive-witnesses]] (ii), and the triple $(1,2,5)$ fails the inequality of (ii) with equality.

## Verification

1.1 (The recursion by expansion.) Set $d_0:=1$; the leading $1\times1$ matrix is $(1)$, so $d_1=1$ [F2]. For $2\le k\le n$ let $C_k$ be the leading $k\times k$ submatrix and put $a:=\cos(\pi/m_{k-1})$, with $a=1$ for an infinite label. By [F1, F2] its diagonal entries are $1$, its adjacent off-diagonal entries are $-\cos(\pi/m_j)$ and all others are $0$. In the last-row Laplace expansion [F4], the diagonal entry contributes $d_{k-1}$. Deleting row $k$ and column $k-1$ leaves a matrix whose last column has only its bottom entry $-a$; expanding that column gives determinant $-a d_{k-2}$, also for $k=2$ with the empty minor. The last-row cofactor sign at $(k,k-1)$ is $-1$, so the other contribution is $-a^2d_{k-2}$. Therefore $d_k=d_{k-1}-a^2d_{k-2}$ without any positivity assumption. [F1, F2, F4, algebra]

1.2 (The integer cases.) Let $1\le p\le q\le r$ satisfy the inequality of (ii). If $p\ge2$ then $\frac1{p+1}+\frac1{q+1}+\frac1{r+1}\le3\cdot\frac13=1$ with equality only for $p=q=r=2$, so $p=1$. Then $\frac1{q+1}+\frac1{r+1}>\frac12$: for $q=1$ this holds for every $r\ge1$; for $q=2$ it says $\frac1{r+1}>\frac16$, i.e. $r<5$, so $r\in\{2,3,4\}$; and for $q\ge3$ the sum is at most $\frac14+\frac14=\frac12$, a contradiction. Hence the triples are $(1,1,r)$ for $r\ge1$, $(1,2,2)$, $(1,2,3)$ and $(1,2,4)$ up to order. The equality cases $\frac1{p+1}+\frac1{q+1}+\frac1{r+1}=1$ are found the same way: $p\ge3$ gives a sum $\le\frac34<1$; $p=2$ forces $q=r=2$; and $p=1$ forces $\frac1{q+1}+\frac1{r+1}=\frac12$, i.e. $q=2,r=5$ or $q=3,r=3$. Thus $(2,2,2)$, $(1,2,5)$ and $(1,3,3)$ are exactly the boundary triples. [algebra]

2.1 (The all-$3$ path.) First $\cos(\pi/3)=1/2$: putting $c=\cos(\pi/3)$, [F7] gives $2c^2-1=\cos(2\pi/3)=-c$, so $(2c-1)(c+1)=0$, and $c>-1$ because $0<\pi/3<\pi$, cosine is strictly decreasing on $[0,\pi]$ and $\cos\pi=-1$ [F7], hence $c=1/2$. If every label is $3$, then $\cos(\pi/m_j)=1/2$, so the recursion of 1.1 reads $d_k=d_{k-1}-\frac14d_{k-2}$ with $d_0=d_1=1$; by the induction principle [F8] the formula $d_k=(k+1)/2^k$ holds for all $k\ge0$, since $\frac k{2^{k-1}}-\frac14\cdot\frac{k-1}{2^{k-2}}=\frac{k+1}{2^k}$. Hence $d_k>0$ for every $k$, the leading principal minors of $2C$ are $2^kd_k=k+1>0$ by [F5], and $2C$ and $C$ are positive definite by [F6]; in particular $\det(2C)=2^nd_n=n+1$. [F5, F6, F7, F8, step 1.1, algebra]

3.1 (One large edge: the two-subpath formula.) Let the path have all labels $3$ except one edge labelled $m$ between the $i$-th and $(i+1)$-st vertices, and put $c:=\cos(\pi/m)$, $j:=n-i\ge1$. Write $\delta_k:=(k+1)/2^k$ for the determinant of an all-$3$ path on $k$ vertices, including $\delta_0=1$, as proved in 2.1 [step 2.1]; these are distinct from the leading minors $d_k$ of the labelled path. Then $$\det C=\delta_i \delta_j-c^2\,\delta_{i-1}\delta_{j-1}.$$ Proof by induction on $j$ [F8], writing $C(i,j)$ for this matrix: for $j=1$ the large edge is the last one and expansion along the last row [F4] gives $\det C(i,1)=\delta_i-c^2\delta_{i-1}=\delta_i\delta_1-c^2\delta_{i-1}\delta_0$; for $j=2$ the last edge has label $3$, so the recurrence of 1.1 [step 1.1] gives $\det C(i,2)=\det C(i,1)-\frac14\delta_i=\delta_i(\delta_1-\frac14\delta_0)-c^2\delta_{i-1}$, which is $\delta_i\delta_2-c^2\delta_{i-1}\delta_1$ since $\delta_2=\frac34$; for $j\ge3$ the last edge again has label $3$, so $\det C(i,j)=\det C(i,j-1)-\frac14\det C(i,j-2)$, and substituting the induction hypothesis and the recursion $\delta_j=\delta_{j-1}-\frac14\delta_{j-2}$ of 2.1 [step 2.1] gives the formula. With $\delta_k=(k+1)/2^k$ of 2.1 [step 2.1] this is $$\det C=\frac{(i+1)(j+1)-4ijc^2}{2^{\,n}};$$ and since positive definiteness of the path would give $\det C>0$ by [F6], such a path satisfies $(i+1)(j+1)>4ij\cos^2(\pi/m)$, which is the constraint of [[lem-cg-positive-definite-diagram-exclusions]] (5)(ii). [F4, F6, F8, step 1.1, step 2.1, algebra]

3.2 (The arm vectors.) For the star of (ii) with centre $v$ and arm spans $A_1,A_2,A_3$ on the three arms, $V=\mathbb Re_v\oplus A_1\oplus A_2\oplus A_3$ and the arm spans are pairwise $B$-orthogonal, because distinct arms share no edge [F1, F2]. On the arm with vertices $s_1,\dots,s_p$ ($s_p$ adjacent to $v$) put $w:=\sum_{k=1}^pk\,e_{s_k}$. Then $B(w,w)=\sum_{k=1}^p k^2-\sum_{k=1}^{p-1}k(k+1)=p^2-\sum_{k=1}^{p-1}k=\frac{p(p+1)}2$ and $B(e_v,w)=-\frac p2$ by [F2], and for every $u=\sum_{k=1}^pu_ke_{s_k}$ the identity $$B(w,u)=\frac{p+1}2\,u_p$$ holds, because the coefficient of $u_k$ in $B(w,u)$ is $k-\frac{k-1}2-\frac{k+1}2=0$ for $1<k<p$ (also for $k=1$ when $p>1$), while the coefficient of $u_p$ is $p-\frac{p-1}2=\frac{p+1}2$; for $p=1$ the coefficient is $1=(p+1)/2$ directly. In particular $B(e_v,u)=-\frac{u_p}2=-\frac{B(w,u)}{p+1}$ on the arm span. By 2.1 and [F6] the form restricted to each arm span (an all-$3$ path) is positive definite; hence $B$ is positive definite on all of $A=A_1\oplus A_2\oplus A_3$, since a nonzero element $z_1+z_2+z_3$ has some nonzero component and $B(z,z)=\sum_iB(z_i,z_i)\ge B(z_j,z_j)>0$. [F1, F2, F6, step 2.1, algebra]

4.1 (Completing the square: equivalence of positive definiteness and the inequality.) Keep the notation of 3.2 [step 3.2] with arms of $p_1,p_2,p_3$ vertices and vectors $w_1,w_2,w_3$, put $\mu:=\sum_i\frac{p_i}{2(p_i+1)}$ and $\bar w:=-\sum_i\frac{w_i}{p_i+1}\in A:=A_1\oplus A_2\oplus A_3$, so that $\bar w\ne0$ because its components in the distinct summands are the nonzero multiples $-w_i/(p_i+1)$. Then $B(\bar w,u)=B(e_v,u)$ for every $u\in A$ by the last identity of 3.2 [step 3.2], and $B(\bar w,\bar w)=\sum_i\frac{p_i(p_i+1)/2}{(p_i+1)^2}=\mu$. Since $\bar w$ is a nonzero vector of $A$, on which $B$ is positive definite [step 3.2], every $u\in V$ has a unique form $u=\alpha e_v+\gamma\bar w+z$ with $\alpha,\gamma\in\mathbb R$, $z\in A$ and $B(\bar w,z)=0$: the $e_v$-coordinate $\alpha$ is forced, and $u-\alpha e_v\in A$ has the unique orthogonal decomposition $\gamma\bar w+z$ along $\bar w$ in the inner product space $(A,B)$, with $\gamma=B(u-\alpha e_v,\bar w)/B(\bar w,\bar w)$ and $z=u-\alpha e_v-\gamma\bar w$. Then $$B(u,u)=\alpha^2+2\alpha\bigl(\gamma B(e_v,\bar w)+B(e_v,z)\bigr)+\gamma^2B(\bar w,\bar w)+B(z,z)=\alpha^2(1-\mu)+\mu(\gamma+\alpha)^2+B(z,z),$$ because $B(e_v,\bar w)=B(\bar w,\bar w)=\mu$ and $B(e_v,z)=B(\bar w,z)=0$ [F2]. If $1-\mu>0$ then $B(u,u)$ is a sum of three terms that are $\ge0$ and is $0$ only when $\alpha=0$, $\gamma=-\alpha=0$ and $z=0$, i.e. only for $u=0$; conversely, if $1-\mu\le0$, then $u=e_v-\bar w\ne0$ (its $e_v$-coordinate is $1$) has $B(u,u)=1-\mu\le0$, so $B$ is not positive definite [F6]. Hence $B$ is positive definite if and only if $1-\mu>0$, and $1-\mu>0$ is equivalent to $\sum_i\frac{p_i}{p_i+1}<2$, i.e. to $3-\sum_i\frac1{p_i+1}<2$, which is the inequality of (ii). When $B$ is positive definite, the same identity exhibits the strict Cauchy-Schwarz bound $B(\bar w,\bar w)<B(e_v,e_v)=1$ of the projection of $e_v$ onto $A$ used in [[lem-cg-positive-definite-diagram-exclusions]] (6), strict because $e_v\notin A$ [F7]. [F2, F6, F7, step 3.2, algebra]

5.1 (Conclusion.) The recursion and the all-$3$ values of (i) are steps 1.1 and 2.1 [step 1.1, step 2.1], and the two-subpath determinant formula giving the constraint $(i+1)(j+1)>4ij\cos^2(\pi/m)$ is step 3.1 [step 3.1]. The equivalence of (ii) is step 4.1 [step 4.1], proved by completing the square along the three positive definite arms of 3.2 [step 3.2]. The list of triples of (iii) and the boundary triples are step 1.2 [step 1.2], and the boundary star $(1,2,5)$ is the one with the non-positive vector of [[ex-cg-cycle-and-overlong-arm-nonpositive-witnesses]] [F10]; the names $D_{r+3},E_6,E_7,E_8$ of the surviving triples are those of the classification [F9]. [F9, F10, step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, step 4.1] ∎
