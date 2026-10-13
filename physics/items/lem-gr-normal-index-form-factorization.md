---
id: lem-gr-normal-index-form-factorization
kind: lemma
title: "The normal index form before the first conjugate instant is positive definite"
status: published
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  [
    def-gr-jacobi-field-and-conjugate-instant,
    thm-gr-jacobi-equation-and-geodesic-deviation,
    thm-gr-curvature-algebraic-symmetries,
    def-gr-curvature-tensor-and-derived-tensors,
    def-gr-smooth-lorentzian-objects,
    def-gr-metric-selected-connection,
    thm-gr-nondegenerate-levi-civita-and-tensor-derivative,
    def-gr-observer-and-rest-space,
    lem-gr-observer-projection-decomposition,
    def-covariant-derivative-along-a-curve,
    def-geodesic-of-an-affine-connection,
    thm-existence-and-uniqueness-of-parallel-sections,
    def-parallel-section-along-a-curve,
    lem-gr-parallel-transport-and-geodesic-speed,
    lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval,
    thm-ftc-second-part,
    def-darboux-integral,
    thm-continuous-implies-integrable,
    thm-nonnegative-continuous-with-zero-integral-vanishes,
    def-interval,
    thm-gr-curvature-tensoriality-and-coordinate-formula
  ]
dependency_roles:
  def-gr-jacobi-field-and-conjugate-instant: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  thm-existence-and-uniqueness-of-parallel-sections: mathematical-premise
  def-parallel-section-along-a-curve: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-nonnegative-continuous-with-zero-integral-vanishes: mathematical-premise
  def-interval: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity
        22 (2019), section 6.1: the matrix A of Jacobi fields with A(0)=0, nabla
        A=Id, the equation nabla b + b^2 + R_u = 0 for b=(nabla A)A^{-1}, and
        the role of conjugate points, printed pp. 159-161 (PDF pp. 159-161)"
      url: "https://link.springer.com/content/pdf/10.1007/s41114-019-0019-x.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 3: geodesic deviation and the
        interpretation of the curvature term as the relative acceleration of
        nearby geodesics, printed pp. 86-88 (PDF pp. 93-95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "J. M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997),
        Chapter 10: Jacobi fields, conjugate points and the index form in the
        positive-definite case, printed pp. 175-182 (PDF labels P191-P198); the
        Lorentzian normal-rest-space analogue is proved here"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), let
$a<b$ and let $\gamma:[a,b]\to M$ be a smooth future timelike geodesic with
$g(T,T)=-1$, $T:=\gamma'$, such that no instant $s\in(a,b]$ is conjugate to
$a$ along $\gamma$ ([[def-gr-jacobi-field-and-conjugate-instant]]). Let
$N_\gamma$ be the normal bundle of $\gamma$ (clause (e) there) with the
positive definite fibre metric $g$, and for continuous piecewise-$C^1$
normal fields $J,K$ vanishing at $a$ and $b$ define
$$I(J,K):=\int_a^b\Bigl(g(D_sJ,D_sK)+g\bigl(R(T,J)T,K\bigr)\Bigr)ds,$$
the integral being over the smooth pieces of $J$ and $K$; write $I(J):=I(J,J)$
and $|J|:=\sqrt{g(J,J)}$.

**(a) The Jacobi operator on the normal bundle.** For every normal field $J$
the field $C_T(J):=R(T,J)T$ is again normal, and $C_T$ is $g$-selfadjoint on
each fibre: $g(C_T(J),K)=g(J,C_T(K))$ for normal fields $J,K$.

**(b) Matrix form.** Let $E_1,E_2,E_3$ be a parallel $g$-orthonormal frame of
$N_\gamma$ (which exists), and write $J=\sum_iJ^iE_i$, $K=\sum_iK^iE_i$ with
smooth coefficients on the smooth pieces. Then
$g(D_sJ,D_sK)=\sum_i(J^i)'(K^i)'$ and
$g(R(T,J)T,K)=\sum_{i,j}J^jC^i{}_jK^i$ for the smooth symmetric coefficient
functions $C^i{}_j:=g(C_T(E_j),E_i)$, so that the matrix
$C(s)=\bigl(C^i{}_j(s)\bigr)_{i,j}$ is symmetric for every $s$ and
$$I(J,K)=\int_a^b\Bigl(\textstyle\sum_i(J^i)'(K^i)'+J^TCK\Bigr)ds .$$

**(c) Factorization.** Let $A:[a,b]\to M_3(\mathbb R)$ be the unique solution
of the initial-value problem
$$A''=CA,\qquad A(a)=0,\qquad A'(a)=I_3 .$$
Then $A(s)$ is invertible for every $s\in(a,b]$, the field
$\Theta(s):=A'(s)A(s)^{-1}$ is symmetric on $(a,b]$ with
$$\Theta'=C-\Theta^2,$$
and for every continuous piecewise-$C^1$ normal field $J$ vanishing at $a$
and $b$,
$$I(J)=\int_a^b\bigl|J'-\Theta J\bigr|^2ds, $$
where $|J'-\Theta J|^2:=\sum_i\bigl((J^i)'-\sum_j\Theta^i{}_jJ^j\bigr)^2$ in
the frame of (b). Consequently $I(J)\ge0$, and $I(J)=0$ if and only if
$J=0$; the index form is positive definite on the space of such fields.

## Facts & Assumptions

**Given:** A smooth future unit timelike geodesic $\gamma:[a,b]\to M$ with no conjugate instant in $(a,b]$, its normal bundle with a parallel orthonormal frame, and piecewise-$C^1$ normal fields vanishing at $a$ and $b$.

[L1] $T=\gamma'$ satisfies $D_sT=0$ and $g(T,T)=-1$; the fibres of $N_\gamma$ are $N_\gamma(s)=\{v\in T_{\gamma(s)}M:g(v,T(s))=0\}$, their smooth sections are the normal fields, $D_s$ preserves them, and their fibre metric is positive definite. The normal component is $V^\perp=V+g(V,T)T$ ([[def-gr-jacobi-field-and-conjugate-instant]] clause (e), [[def-gr-observer-and-rest-space]] clause (b), [[lem-gr-observer-projection-decomposition]]).

[L2] The curvature satisfies $R_{abcd}=-R_{bacd}$, $R_{abcd}=-R_{abdc}$ and $R_{abcd}=R_{cdab}$, and $g(R(X,Y)Z,W)=R_{abcd}W^aX^cY^dZ^b$ ([[thm-gr-curvature-algebraic-symmetries]] clauses (a)-(b), [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a)).

[L3] A Jacobi field is a field with $D_s^2J=R(T,J)T$; for a Jacobi field $J$ along $\gamma$, $g(J,T)$ is affine and $J^\perp$ is again a Jacobi field ([[def-gr-jacobi-field-and-conjugate-instant]] clauses (b), (c) and (e), [[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (d)).

[L4] The parallel transport of a $g$-orthonormal basis is a smooth $g$-orthonormal frame with $D_sE_i=0$, so for $J=\sum_iJ^iE_i$ one has $D_sJ=\sum_i(J^i)'E_i$ and $g(D_sJ,D_sK)=\sum_i(J^i)'(K^i)'$ ([[thm-existence-and-uniqueness-of-parallel-sections]], [[def-parallel-section-along-a-curve]], [[lem-gr-parallel-transport-and-geodesic-speed]] clause 2).

[L5] On $[a,b]$ the linear matrix initial-value problem $Y'=BY$ has a unique solution for continuous $B$; in particular the problem of claim (c) has a unique solution $A$ on $[a,b]$ ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[L6] The coefficient matrix $C$ of claim (c) is smooth, so the solution $A$ of $A''=CA$, $A(a)=0$, $A'(a)=I_3$ is $C^2$ and satisfies $A(s)=(s-a)I_3+o(s-a)$ and $A'(s)=I_3+o(1)$ as $s\downarrow a$. Write $A(s)=(s-a)B(s)$, so $B(s)\to I_3$; the cofactor formula and $\det B(s)\to1$ give $B(s)^{-1}\to I_3$. Thus $A(s)^{-1}=(s-a)^{-1}(I_3+o(1))$ and $\Theta(s)=A'(s)A(s)^{-1}=(s-a)^{-1}(I_3+o(1))$.

[L7] For $C^1$ functions on $[a,b]$ the fundamental theorem of calculus holds, and continuous functions on compact intervals are integrable; continuous piecewise-$C^1$ fields have continuous integrands on each piece. A continuous nonnegative function on a nondegenerate compact interval with zero integral vanishes identically ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[thm-nonnegative-continuous-with-zero-integral-vanishes]], [[def-darboux-integral]]).

## Proof

**Proof technique:** direct.

1.1 (The Jacobi operator preserves the normal bundle and is selfadjoint.) Let $J,K$ be normal fields. For the bilinear form $\mathcal R(X,Y,Z,W):=g(R(X,Y)Z,W)$ the symmetries of [L2] read $\mathcal R(X,Y,Z,W)=-\mathcal R(Y,X,Z,W)=-\mathcal R(X,Y,W,Z)=\mathcal R(Z,W,X,Y)$. Hence $g(C_T(J),T)=\mathcal R(T,J,T,T)=-\mathcal R(T,J,T,T)=0$, so $C_T(J)$ is again normal by [L1]. For selfadjointness, $g(C_T(J),K)=\mathcal R(T,J,T,K)=-\mathcal R(T,J,K,T)=-\mathcal R(K,T,T,J)=\mathcal R(T,K,T,J)=g(C_T(K),J)$, using the last-pair skew, pair exchange and first-pair skew in that order; by symmetry of $g$ this is $g(J,C_T(K))$, so $C_T$ is $g$-selfadjoint. [L1, L2, algebra]

2.1 (Matrix form in a parallel frame.) Let $E_1,E_2,E_3$ be a parallel orthonormal frame of $N_\gamma$ by [L4] and write $J=\sum_iJ^iE_i$, $K=\sum_iK^iE_i$. Then $D_sJ=\sum_i(J^i)'E_i$ and $g(D_sJ,D_sK)=\sum_i(J^i)'(K^i)'$ by orthonormality; and $C_T(J)=\sum_jJ^jC_T(E_j)$, so $g(C_T(J),K)=\sum_{i,j}J^jC^i{}_jK^i$ with $C^i{}_j=g(C_T(E_j),E_i)$, the coefficient functions being smooth along $\gamma$. By step 1.1 the matrix $C(s)$ is symmetric for every $s$. [step 1.1, L1, L4, algebra]

3.1 (The fundamental solution.) By [L5] applied to the first-order system for $(A,A')$ with coefficient matrix $\left(\begin{smallmatrix}0&I\\ C&0\end{smallmatrix}\right)$, the problem $A''=CA$, $A(a)=0$, $A'(a)=I_3$ has a unique solution on $[a,b]$. For $v\in\mathbb R^3$ the field $s\mapsto A(s)v$ in the frame is the Jacobi field along $\gamma$ with initial data $(0,v)$: its coefficient vector satisfies $(A v)''=CAv$ and the initial data are $(Av)(a)=0$, $(Av)'(a)=v$, which is the Jacobi initial-value problem of [L3] in the frame of step 2.1. Hence $A(s)v=0$ for a nonzero $v$ would exhibit a nonzero Jacobi field vanishing at $a$ and $s$, contradicting the absence of conjugate instants; so $A(s)$ is invertible for every $s\in(a,b]$. [step 2.1, L2, L3, L5, algebra]

4.1 (The Wronskian and $\Theta$.) Define $W(s):=A(s)^TA'(s)-A'(s)^TA(s)$, a $3\times3$ matrix function on $[a,b]$. Then $W'=A'^TA'+A^TA''-A''^TA-A'^TA'=A^TCA-(CA)^TA=0$ because $C$ is symmetric by step 2.1, and $W(a)=0$; hence $W=0$ on $[a,b]$. On $(a,b]$ set $\Theta:=A'A^{-1}$, which is well defined by step 3.1. The identity $W=0$ gives $A^TA'=A'^TA$, and multiplying on the left by $(A^T)^{-1}$ and on the right by $A^{-1}$ gives $\Theta^T=\Theta$; differentiability of $A$ and $A^{-1}$ gives $\Theta'=A''A^{-1}-A'A^{-1}A'A^{-1}=C-\Theta^2$. [step 2.1, step 3.1, algebra]

5.1 (The factorization identity.) Let $J$ be a continuous piecewise-$C^1$ normal field vanishing at $a$ and $b$, with coefficient vector $j(s)$ in the frame of step 2.1. On each smooth piece, $|j'-\Theta j|^2=|j'|^2-2j'^T\Theta j+j^T\Theta^2j$, because $\Theta$ is symmetric. For $\varepsilon>0$ sufficiently small, integrate by parts on the smooth pieces of $[a+\varepsilon,b]$; the interior endpoint terms cancel because $j$ and $\Theta$ are continuous. The identity
$(j^T\Theta j)'=2j'^T\Theta j+j^T\Theta'j$ gives
$$\int_{a+\varepsilon}^b-2j'^T\Theta j\,ds=-[j^T\Theta j]_{a+\varepsilon}^b+\int_{a+\varepsilon}^b j^T\Theta'j\,ds.$$
At $b$ the boundary term vanishes because $j(b)=0$. At $a$, one-sided
$C^1$ regularity gives $j(s)=(s-a)j'(a)+o(s-a)$ and $j'(s)=j'(a)+o(1)$.
By [L6], $j^T\Theta j=O(s-a)\to0$ and $\Theta(s)j(s)=j'(a)+o(1)$, so
$j'(s)-\Theta(s)j(s)\to0$ on the first smooth piece as $s\downarrow a$.
Define the factorized integrand at $a$ to be this limit squared, namely $0$;
it is then piecewise continuous on $[a,b]$. Using
$\Theta'=C-\Theta^2$ from step 4.1 and letting $\varepsilon\downarrow0$
in the integrated identity yields
$$I(J)=\int_a^b\bigl(|j'|^2+j^TCj\bigr)\,ds =\int_a^b|j'-\Theta j|^2\,ds.$$
This is the factorization in (c), with its right-hand integrand continuously
extended at $a$. [step 3.1, step 4.1, L6, L7, algebra, step 2.1]

6.1 (Positivity.) By step 5.1, $I(J)=\int_a^b|J'-\Theta J|^2ds\ge0$. If $I(J)=0$, nonnegativity gives zero integral on every compact subinterval inside a smooth piece; [L7] makes the continuous integrand zero there, so $J'=\Theta J$ on each open piece. Then $(A^{-1}J)'=A^{-1}J'-A^{-1}A'A^{-1}J=A^{-1}(J'-\Theta J)=0$ on $(a,b]$, so $A^{-1}J$ is constant on each open piece; its continuity across the finitely many joints makes this one constant $v$ on $(a,b]$, giving $J(s)=A(s)v$; since $J(b)=0$ and $A(b)$ is invertible by step 3.1, $v=0$ and $J=0$. Conversely $J=0$ gives $I(J)=0$. This proves the positivity statement, and with steps 1.1, 2.1, 3.1 and 5.1 the lemma. [step 5.1, step 3.1, step 4.1, L7, algebra, step 1.1] ∎

## Remarks

- **Where positivity is used.** Positive definiteness enters only through the fibre metric on the normal bundle of the timelike geodesic (clause (e) of [[def-gr-jacobi-field-and-conjugate-instant]]); no positive-definite metric on all of $TM$ and no Riemannian index lemma is used. On the full tangent space the quadratic form $g(D_sJ,D_sJ)+g(R(T,J)T,J)$ is not positive definite, because the tangential directions contribute negatively.

- **The meaning of the bound.** The lemma is conditional on the absence of conjugate instants in $(a,b]$; this is exactly the hypothesis under which the local maximum of [[thm-gr-conjugacy-and-local-timelike-maximum]] applies. The factorization is the finite-dimensional Lorentzian analogue of the classical index-form argument, with the operator $C_T$ acting on the positive definite normal three-space.
