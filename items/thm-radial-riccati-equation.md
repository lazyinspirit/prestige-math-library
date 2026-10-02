---
id: thm-radial-riccati-equation
kind: theorem
title: Radial riccati equation
status: draft
origin: pipeline
deps:
  - def-radial-riccati-operator
  - def-jacobi-field
  - lem-wronskian-of-two-jacobi-fields-is-constant
  - prop-curvature-tensor-of-constant-sectional-curvature
  - def-countable-choice
  - def-radial-jacobi-tensor
  - lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
  - thm-existence-and-uniqueness-of-parallel-sections
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-taylor-peano-remainder
  - cor-inverse-matrix-by-adjugate
  - thm-adjugate-identity-over-a-commutative-ring
  - def-matrix-minors-cofactors-and-adjugate
  - def-covariant-derivative-along-a-curve
  - def-levi-civita-connection
  - def-riemann-curvature-four-tensor
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2 and 28.1, pp.191–197, 205–209: the Riccati equation for the radial Jacobi tensor"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§2–4, pp.6–16: A' + A^2 + R_V = 0 and the matrix Riccati calculus"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a Riemannian manifold of dimension $n\ge2$, let $\gamma:I\to M$ be
a unit-speed geodesic on an interval $I$ with nonempty interior and
$0\in I$ and $[0,\varepsilon]\subset I$ for some $\varepsilon>0$, let $A(t):N_0\to N_t$ be the radial Jacobi tensor in the notation of
[[def-radial-jacobi-tensor]], let
$\bar A(t)=P_t^{-1}\circ A(t)$ be its parallel-frame matrix, and put
$$R_\gamma(t)w:=P_t^{-1}\bigl(R(P_tw,T(t))T(t)\bigr),\qquad T=\dot\gamma,$$
the normal curvature endomorphism in the parallel frame. On the
interval $0<t<\tau$, where $\tau$ is the first conjugate instant of
$\gamma(0)$ along $\gamma$ and $S$ is defined by
[[def-radial-riccati-operator]], the radial Riccati operator satisfies the
**Riccati equation**
$$S'(t)+S(t)^2+R_\gamma(t)=0,$$
equivalently $D_tS_t+S_t^2+P_tR_\gamma P_t^{-1}=0$ for the endomorphism
$S_t=D_tA\circ A^{-1}$ of $N_t$. Moreover:

1. $S(t)$ is self-adjoint as an endomorphism of $N_0$ with respect to the
   metric, and correspondingly $D_tA\circ A^{-1}$ is self-adjoint on $N_t$;
2. $S(t)=t^{-1}\operatorname{id}+O(t)$ as $t\downarrow0$, in the sense that
   $S(t)-t^{-1}\operatorname{id}=t\,D(t)$ for an endomorphism-valued function
   $D$ that is bounded on some interval $(0,\delta)$.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], a Riemannian manifold $(M,g)$ of dimension $n\ge2$, a unit-speed geodesic $\gamma:I\to M$ with $[0,\varepsilon]\subset I$ for some $\varepsilon>0$, the radial Jacobi tensor $A$, its parallel-frame matrix $\bar A$, the parallel transport $P_t$, the first conjugate instant $\tau$, and the radial Riccati operator $S=\bar A'\bar A^{-1}$ of [[def-radial-riccati-operator]] on $0<t<\tau$; $T=\dot\gamma$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the curvature-symmetry interface used in the Wronskian
supplier [F6]. The Jacobi and parallel initial-value constructions make no
choice, as their own interfaces state.

[F1] Radial data: $A(t)w=J_w(t)$ for the unique normal Jacobi field with $J_w(0)=0$ and $D_tJ_w(0)=w$, and $A$ is smooth in $t$ with $A(0)=0$, $\bar A(0)=0$, $\bar A'(0)=\operatorname{id}_{N_0}$; the matrix satisfies $\bar A''+R_\gamma\bar A=0$, and $J_w$ satisfies $D_t^2J+R(J,T)T=0$ in the conventions of [[def-jacobi-field]] ([[def-radial-jacobi-tensor]]).

[F2] Invertibility: $\bar A(t)$ is invertible for every $t$ with $0<t<\tau$ ([[lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point]]).

[F3] Riccati operator: on $0<t<\tau$, $S(t)=\bar A'(t)\bar A(t)^{-1}$, equivalently the endomorphism $D_tA(t)\circ A(t)^{-1}$ of $N_t$ transported back to $N_0$ by $P_t$; it is smooth there, no symmetry or differential equation being asserted by the definition ([[def-radial-riccati-operator]]).

[F4] Parallel transport: $P_t$ exists uniquely, is smooth in $t$ and satisfies $D_t(P_tw)=0$ for constant $w\in N_0$ ([[thm-existence-and-uniqueness-of-parallel-sections]]); it preserves the metric, hence inner products and normality ([[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]).

[F5] Calculus along curves: $D_t$ is a derivation, so $D_t(fX)=f'X+fD_tX$ for smooth functions and fields along $\gamma$, and metric compatibility gives $g(D_tX,Y)+g(X,D_tY)=\frac{d}{dt}g(X,Y)$ ([[def-covariant-derivative-along-a-curve]], [[def-levi-civita-connection]]); the curvature convention is $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ ([[def-riemann-curvature-four-tensor]]).

[F6] Wronskian: for Jacobi fields $X,Y$ along $\gamma$ the function $W=g(D_tX,Y)-g(X,D_tY)$ is constant ([[lem-wronskian-of-two-jacobi-fields-is-constant]]).

[F7] Adjoints: for inner product spaces the adjoint $L^*$ is characterized by $\langle Lx,y\rangle=\langle x,L^*y\rangle$, and $L$ is self-adjoint when $L=L^*$; $(\lambda L)^*=\lambda L^*$, $(LM)^*=M^*L^*$ and $(L^{-1})^*=(L^*)^{-1}$ for invertible $L$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[F8] Matrix algebra: a square matrix with nonzero determinant has $M^{-1}=\det(M)^{-1}\operatorname{adj}(M)$ ([[cor-inverse-matrix-by-adjugate]]), the adjugate is computed from minors and satisfies $\operatorname{adj}(I)=I$ ([[def-matrix-minors-cofactors-and-adjugate]], [[thm-adjugate-identity-over-a-commutative-ring]]); a real function of $t$ that is three times differentiable on an open neighborhood of $0$ satisfies $f(t)=f(0)+tf'(0)+\frac{t^2}{2}f''(0)+\frac{t^3}{6}f'''(0)+o(t^3)$ ([[thm-taylor-peano-remainder]]).

[F9] Constant-curvature tensor identity $R(X,Y)Z=k(g(Y,Z)X-g(X,Z)Y)$ for a manifold of constant sectional curvature $k$ ([[prop-curvature-tensor-of-constant-sectional-curvature]]); it is recorded here as a supplier of the ambient curvature calculus used to interpret $R_\gamma$, and no constancy of curvature is assumed below.

## Proof

**Proof technique:** direct: differentiate $\bar A'\bar A^{-1}$ and insert the Jacobi equation to obtain the Riccati equation; the Wronskian of the columns of $A$ vanishes at $t=0$, which conjugates to the symmetry of $S$; the Taylor expansion of the smooth matrix Jacobi equation at $0$ gives the leading $t^{-1}$ term.

1.1 The Riccati equation. [F1, F2, F3, F5, given]
In the fixed parallel frame, [F1] gives $\bar A''=-R_\gamma\bar A$.
Differentiate $\bar A\bar A^{-1}=I$ to obtain
$(\bar A^{-1})'=-\bar A^{-1}\bar A'\bar A^{-1}$. Thus
$$S'=\bar A''\bar A^{-1}-\bar A'\bar A^{-1}\bar A'\bar A^{-1}=-R_\gamma-S^2.$$
This proves the matrix equation wherever $0<t<\tau$ and $t\in I$.
The corresponding curvature endomorphism of $N_t$ is
$\mathcal R_t=P_tR_\gamma(t)P_t^{-1}$, namely $X\mapsto R(X,T)T$.
Since $P_t$ is parallel, transporting the matrix equation gives
$D_tS_t+S_t^2+\mathcal R_t=0$ for $S_t=D_tA\circ A^{-1}$.
In particular the correctly typed inverse is
$A^{-1}=\bar A^{-1}P_t^{-1}$. [F1, F2, F3, F4, F5, given]

2.1 $S$ is self-adjoint. [F4, F5, F6, F7, step 1.1]
Let $u,v\in N_0$ and put $X=J_u$, $Y=J_v$, so that $X=Au$, $Y=Av$ by [F1]. The Wronskian $W(t)=g(D_tX,Y)-g(X,D_tY)$ is constant on $I$ by [F6], and at $t=0$ it equals $g(u,0)-g(0,v)=0$ because $X(0)=Y(0)=0$ and $D_tX(0)=u$, $D_tY(0)=v$ by [F1]. Hence $$g(D_tAu,Av)=g(Au,D_tAv)\qquad\text{on }I.$$ Writing $A=P_t\bar A$ and using that $P_t$ is an isometry and that $D_tP_t=0$ by [F4], this becomes $g(\bar A'u,\bar Av)=g(\bar Au,\bar A'v)$, that is $\bar A^*\bar A'=(\bar A')^*\bar A$ for the metric adjoint of [F7]. Multiplying on the right by $\bar A^{-1}$ (invertible by [F2]) gives $\bar A^*S=(\bar A')^*$; taking adjoints with the rules of [F7] gives $S^*\bar A=\bar A'$, hence $$S^*=\bar A'\bar A^{-1}=S.$$ Thus $S(t)$ is self-adjoint on $N_0$; since $P_t$ is an isometry, $S_t=P_tS(t)P_t^{-1}$ is self-adjoint on $N_t$ as well. [F4, F5, F6, F7, step 1.1]

2.2 The expansion at zero. [F1, F2, F3, F4, F8, step 1.1]
By [F1] the matrix family $\bar A$ is smooth and satisfies $\bar A''=-R_\gamma\bar A$ with $\bar A(0)=0$ and $\bar A'(0)=\operatorname{id}_{N_0}$. In particular $\bar A''(0)=-R_\gamma(0)\bar A(0)=0$. If $0$ is an endpoint of $I$, extend each entry of $\bar A$ to negative $t$ by its cubic Taylor polynomial at $0$. The one-sided derivatives through order three agree at $0$, so each extension is $C^3$ on an open neighborhood of $0$. Thus the Taylor formula of [F8] with $n=3$ applies to each matrix entry at $t=0$: the constant and quadratic terms vanish and $$\bar A(t)=t\,\operatorname{id}+\frac{t^3}{6}\bar A'''(0)+o(t^3) =t\bigl(\operatorname{id}+t^2B(t)\bigr)$$ for the matrix function $B(t):=(\bar A(t)-t\operatorname{id})/t^3$ on $t\ne0$, which is bounded near $0$ because each entry is $\frac{1}{6}\bar A'''_{ij}(0)+o(1)$. Applying the same Taylor–Peano supplier with $n=2$ to the entries of $\bar A'$, whose linear term vanishes because $\bar A''(0)=0$, gives $\bar A'(t)=\operatorname{id}+t^2C(t)$ with $C(t):=(\bar A'(t)-\operatorname{id})/t^2$ bounded near $0$. For $0<t<\delta$ with $\delta>0$ so small that $\bar A(t)$ is invertible and the entries of $E(t):=t^2B(t)$ are bounded by $\frac12$, the determinant $\det(\operatorname{id}+E(t))$ tends to $1$ as $t\downarrow0$, so it is nonzero for small $t$, and the adjugate formula of [F8] applies: $$(\operatorname{id}+E(t))^{-1} =\det(\operatorname{id}+E(t))^{-1}\operatorname{adj}(\operatorname{id}+E(t)),$$ where each entry of $\operatorname{adj}(\operatorname{id}+E(t))$ is a polynomial in the entries of $E(t)$, hence equals $\delta_{ij}+O(t^2)$ because $\operatorname{adj}(I)=I$ by [F8] and $E(t)=O(t^2)$. Therefore $$(\operatorname{id}+t^2B(t))^{-1}=\operatorname{id}+O(t^2),$$ and from $\bar A(t)=t(\operatorname{id}+t^2B(t))$ invertible for $0<t<\min(\delta,\tau)$ by [F2], $$\bar A(t)^{-1}=t^{-1}\bigl(\operatorname{id}+O(t^2)\bigr) =t^{-1}\operatorname{id}+O(t).$$ Multiplying by $\bar A'(t)=\operatorname{id}+O(t^2)$ and using $O(t^2)\cdot O(t^{-1})=O(t)$, $$S(t)=\bar A'(t)\bar A(t)^{-1} =\bigl(\operatorname{id}+O(t^2)\bigr)\bigl(t^{-1}\operatorname{id}+O(t)\bigr) =t^{-1}\operatorname{id}+O(t)$$ in the entrywise sense, equivalently in the operator norm on the finite-dimensional space $\operatorname{End}(N_0)$. [F1, F2, F3, F4, F8, step 1.1]

3.1 Conclusion and boundary cases. [F3, F8, step 1.1, step 2.1, step 2.2]
Steps 1.1, 2.1 and 2.2 prove, respectively, the Riccati equation on the full interval $0<t<\tau$ where $S$ is defined, the self-adjointness of $S$, and the near-zero expansion $S(t)=t^{-1}\operatorname{id}+O(t)$. The endpoint $t=0$ is excluded because $\bar A(0)=0$ is not invertible and $S$ is not defined there; the expansion of step 2.2 is one-sided and uses only $t\downarrow0$. The interval is nonempty for small $t$: $\tau>0$, since $\bar A(t)=t(\operatorname{id}+t^2B(t))$ is invertible for small $t>0$ by the expansion, and $S$ is defined on the whole of $(0,\tau)\cap I$. In dimension $n=2$ the normal space is one-dimensional and the Riccati equation is the scalar equation $S'+S^2+K_\gamma=0$ with $K_\gamma$ the sectional curvature along $\gamma$; in the general case no commutation of the terms is asserted, the equation being an identity in $\operatorname{End}(N_0)$. If $\tau=+\infty$ the interval is $(0,\infty)\cap I$. No constancy of curvature is used beyond the interpretation of $R_\gamma$ recorded in [F9], and no choice beyond the inherited [A1] is used: the parallel frame, the matrix family and the expansion are all explicit. [F3, F8, step 1.1, step 2.1, step 2.2] ∎

## Source locator

Datar §26.1–26.2 and §28.1, pp.191–197 and 205–209, and Eschenburg §2–4, pp.6–16, derive the Riccati equation for $A'A^{-1}$ along a unit-speed geodesic, the symmetry of the solution and its singular behaviour at the initial point. The proof above is carried out locally from the in-run radial Jacobi tensor, Riccati operator and Wronskian suppliers.
