---
id: lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces
kind: lemma
title: "A strip Fredholm index agrees in all integer Hilbert Sobolev realizations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-fredholm-operator-cokernel-and-index
  - lem-transverse-linear-strip-cauchy-riemann-isomorphism
  - lem-variable-zero-order-strip-cauchy-riemann-fredholm
  - lem-diagonal-strip-cauchy-riemann-fredholm-index
  - lem-geometric-strip-linearization-frame-and-fredholm-index
proof_strategy: direct
axiom_use: "Countable Choice only. Weak derivatives are obtained by bounded test functionals and Hilbert orthogonal projection, not a stronger-choice compactness theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §3.2"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Lipshitz, A cylindrical reformulation of Heegaard Floer homology, Appendix A"
      url: "https://arxiv.org/pdf/math/0502404"
---

## Statement

Assume Countable Choice. Let $S=\mathbb R_s\times[0,1]_t$, $m\ge1$, and $0<\theta_j<\pi$. Write $X_0=H^1_\theta$ for the real $H^1$ completion of smooth maps compactly supported in $s$ satisfying $u(s,0)\in\mathbb R^m$ and $u(s,1)\in\prod_j e^{i\theta_j}\mathbb R$. Let $B:S\to\operatorname{End}_{\mathbb R}(\mathbb C^m)$ be smooth up to the boundary, with every derivative bounded, and suppose its uniform end limits are real diagonal matrices $\operatorname{diag}(b_{\pm,j})$ with $\theta_j-b_{\pm,j}\notin\pi\mathbb Z$. For an integer $q\ge0$ put
$$X_q=H^{q+1}(S;\mathbb C^m)\cap X_0,\qquad Y_q=H^q(S;\mathbb C^m),\qquad T_q=\partial_s+i\partial_t+B:X_q\longrightarrow Y_q,$$
using real Hilbert spaces and their indicated Sobolev norms. There are no higher boundary conditions: only the zeroth trace encoded by $X_0$ is required. In particular no normal derivative or forcing trace is prescribed.

Every $T_q$ is bounded Fredholm. Its kernel is the same set as the kernel of $T_0$, and its range is $Y_q\cap\operatorname{Ran}T_0$. The inclusion of $Y_q$ in $L^2$ induces an isomorphism of real cokernels. Thus
$$\operatorname{ind}_{\mathbb R}T_q=\operatorname{ind}_{\mathbb R}T_0=\sum_j\left(\left\lfloor\frac{\theta_j-b_{-,j}}\pi\right\rfloor-\left\lfloor\frac{\theta_j-b_{+,j}}\pi\right\rfloor\right).$$
More precisely, if $u\in X_0$ and $T_0u=f\in H^q$, then $u\in X_q$ and
$$\|u\|_{H^{q+1}}\le C_q\bigl(\|f\|_{H^q}+\|u\|_{H^1}\bigr).$$

The same conclusions hold with smooth two-sided weights $w=e^{\delta\rho(s)}$, where $\rho$ is smooth, equals $|s|$ outside a compact interval, has all derivatives of positive order bounded, and $0\le\delta<\min_{\pm,j,n}|\pi n-\theta_j+b_{\pm,j}|$. Weighted spaces mean $wu\in X_q$ and $wf\in Y_q$. Their index is the same displayed index. The weight is smooth at zero even for $q\ge1$.

Finally, for an actual geometric strip operator with exact product-integrable ends and the smooth bundle frame supplied by the geometric strip normal-form theorem, the actual $H^{q+1}$ boundary-section domain and $H^q$ target have this same real index before translation quotient, also with these smooth weights. This asserts integer Hilbert Sobolev agreement; no $W^{1,p}$ comparison or Heegaard-domain Euler formula is asserted.

## Statement references

[[def-countable-choice]]

[[def-fredholm-operator-cokernel-and-index]]

[[lem-transverse-linear-strip-cauchy-riemann-isomorphism]]

[[lem-variable-zero-order-strip-cauchy-riemann-fredholm]]

[[lem-diagonal-strip-cauchy-riemann-fredholm-index]]

[[lem-geometric-strip-linearization-frame-and-fredholm-index]]

## Facts & Assumptions

**Given:** Countable Choice and the spaces, smooth coefficient bounds, limiting nondegenerate diagonal matrices and weights in the Statement.

[F1] The constant strip operator $D=\partial_s+i\partial_t:X_0\to L^2$ is an isomorphism with $\|v\|_{H^1}\le C\|Dv\|_2$; its modal proof also identifies $X_0$ as a closed subspace of the usual $H^1$ space ([[lem-transverse-linear-strip-cauchy-riemann-isomorphism]]).

[F2] The operator $T_0$ is Fredholm; the proof constructs orthogonal projections onto closed subspaces of real Hilbert spaces using Countable Choice and a minimizing sequence ([[lem-variable-zero-order-strip-cauchy-riemann-fredholm]]).

[F3] The real $H^1$ index is the displayed sum of endpoint floor differences, with unchanged index for two-sided weights below the limiting spectral gap ([[lem-diagonal-strip-cauchy-riemann-fredholm-index]]).

[F4] For the actual geometric operator there is a smooth complex frame with prescribed product-integrable ends which identifies its $H^1$ boundary domain with a rotating product-line domain and its operator with $D$ plus a smooth compactly supported zeroth-order term. The rotation becomes fixed product lines by multiplication by $U(s,t)=\operatorname{diag}(e^{ia(s)t},1,\ldots,1)$ with $a$ smooth and constant on the ends ([[lem-geometric-strip-linearization-frame-and-fredholm-index]], with its explicit scalar gauge).

## Proof

1.1 **Weak derivatives from bounded tests.** We first record the precise Hilbert argument used below. If a distribution $v$ is in $L^2$ and $|\int v\,\partial_j\phi|\le M\|\phi\|_2$ for all smooth compact interior tests, this functional extends uniquely to the closure of that test space in $L^2$, which is all of $L^2$. The density assertion follows by cutting off in $s$, removing boundary strips of width tending to zero, and convolving on the resulting interior rectangles; convergence is first checked for step functions and then in $L^2$. By the orthogonal projection construction in [F2], every bounded real functional $L$ on a Hilbert space has a representing vector: if $L\ne0$, take $z$ with $L(z)\ne0$, put $z_\perp=z-\operatorname{proj}_{\ker L}z$, and write $x-(L(x)/L(z_\perp))z_\perp\in\ker L$. This gives $L(x)=L(z_\perp)\langle x,z_\perp\rangle/\|z_\perp\|^2$; the zero functional is represented by zero. Hence $v$ has weak derivative in $L^2$ of norm at most $M$. In particular, if $v_h\to v$ in $L^2$ and $\|v_h\|_{H^1}\le M$, then $v\in H^1$ with the corresponding bounds. Integration against interior tests proves each derivative assertion; approximating any $L^2$ test by smooth ones proves weak convergence of the derivatives, and therefore weak $H^1$ convergence. A closed Hilbert subspace is weakly closed, since pairing with its orthogonal complement vanishes and the orthogonal projection decomposition is exhaustive. These arguments use only the Countable-Choice projections of [F2]. [F2, construct, algebra]

2.1 **A tangential difference quotient keeps exactly the permitted boundary condition.** For $u\in X_0$ and $h\ne0$ set $\delta_hu(s,t)=(u(s+h,t)-u(s,t))/h$. Translation and subtraction preserve $X_0$, first on its defining smooth maps and then by completion. The fundamental theorem of calculus in $s$, followed by Cauchy–Schwarz and integration, gives $\|\delta_hu\|_2\le\|u_s\|_2$. It also proves $\delta_hu\to u_s$ strongly in $L^2$ by approximation in $H^1$ by the defining smooth maps. The same argument gives $\|\delta_hf\|_2\le\|f_s\|_2$ for $f\in H^1$, by interior approximation and the usual one-dimensional slicing identity, which itself follows by integrating the weak derivative against product tests. If $T_0u=f\in H^1$, put $B_h(s,t)=B(s+h,t)$. The weak product rule, obtained by testing and smooth approximation, gives $D\delta_hu=\delta_hf-B_h\delta_hu-(\delta_h B)u$. Since $\|\delta_hB\|_\infty\le\|B_s\|_\infty$, [F1] yields $\|\delta_hu\|_{H^1}\le C(\|f_s\|_2+\|B\|_\infty\|u_s\|_2+\|B_s\|_\infty\|u\|_2)$ uniformly for $h\ne0$. By step 1.1, $u_s\in H^1$ with this bound. It belongs to $X_0$ by weak closedness, because every difference quotient does. This is why no differentiated normal boundary condition has been imposed. [F1, step 1.1, construct, algebra]

3.1 **Recover the normal derivatives and iterate.** The equation gives $u_t=-i(f-Bu-u_s)$. For $f\in H^1$ the right side is in $H^1$ by step 2.1 and the bounded first derivatives of $B$. Thus both $u_s,u_t\in H^1$, giving $u\in H^2$ and the claimed estimate for $q=1$. For the induction suppose the conclusion is known for order $q-1\ge1$ and $f\in H^q$. The already proved lower orders give $u\in H^q$ and $u_s\in X_0$. Differentiating distributionally gives $T_0u_s=f_s-B_su\in H^{q-1}$. Apply the order-$q-1$ result to this equation, to get $u_s\in H^q$ with its bound. The formula for $u_t$ then gives $u_t\in H^q$. All weak derivatives of order at most $q+1$ are therefore in $L^2$. The Leibniz rule and the finitely many bounded derivatives of $B$ give $\|u\|_{H^{q+1}}\le C_q(\|f\|_{H^q}+\|u\|_{H^1})$ by the induction bounds. The case $q=0$ is immediate. The argument has differentiated only in the tangential direction before using the equation to recover normal derivatives. [step 2.1, construct, algebra]

4.1 **Identify range and cokernel, not just nullspaces.** The space $X_q$ is a closed real subspace of $H^{q+1}$: convergence there implies convergence in $H^1$, where $X_0$ is closed by [F1]. It is Hilbert, and the bounded derivatives of $B$ make $T_q$ bounded. Step 3.1 with $f=0$ proves $\ker T_q=\ker T_0$. The same step for arbitrary $f\in Y_q$ proves $\operatorname{Ran}T_q=Y_q\cap\operatorname{Ran}T_0$. This range is closed in $Y_q$ because $\operatorname{Ran}T_0$ is closed in $L^2$ by [F2]. The quotient map $Y_q\to L^2/\operatorname{Ran}T_0$ is surjective: smooth compactly supported interior functions are dense in $L^2$ by the explicit approximation in step 1.1 and belong to $Y_q$, so its image is dense; the image is a linear subspace of a finite-dimensional space and hence closed, as follows by choosing a basis and the finite-dimensional Euclidean lower norm bound. Its kernel is precisely $\operatorname{Ran}T_q$. This proves the asserted cokernel isomorphism and Fredholmness. Both kernel and cokernel dimensions agree with $q=0$, and [F3] gives the displayed index. [F1, F2, F3, step 1.1, step 3.1, algebra]

5.1 **Smooth weights.** Put $v=wu$. Direct differentiation gives $wT_0w^{-1}v=Dv+(B-\delta\rho')v$. This new coefficient has all derivatives bounded and real diagonal limits $b_{-,j}+\delta$ and $b_{+,j}-\delta$. The spectral-gap bound ensures that no limiting eigenvalue crosses zero when $\delta$ is increased from zero to its stated value; hence the endpoint floors in [F3] stay constant. Apply steps 2.1–4.1 to this conjugated operator. Multiplication by $w$ is an isometric identification by the definitions of the weighted spaces and preserves their real-line boundary conditions. Thus it transfers all kernel, range, cokernel and regularity assertions, as well as the index. Smoothness of $\rho$ at zero is essential for this high-order argument. At order one these spaces agree with those defined using $e^{\delta|s|}$ up to equivalent norms, since the ratio and its reciprocal are bounded Lipschitz functions constant outside a compact interval. [F3, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 **Transfer to the actual geometric operator.** In [F4] the frame matrices on a finite compact core are smooth, and their comparisons on the two ends are constant; every derivative is bounded. The extra scalar/product gauge $U$ has all derivatives bounded because its angle is smooth and constant outside a compact interval, while $0\le t\le1$. Its inverse has the same property. The repeated Leibniz rule therefore makes frame and gauge multiplication bounded isomorphisms on each of the finitely charted geometric $H^r$ spaces for every integer $r\ge0$. They identify precisely the zeroth boundary trace, without restricting any higher derivative. After these transformations the actual operator has fixed product-line domain and a smooth zeroth-order coefficient with all derivatives bounded and real diagonal end limits; the scalar gauge contributes $-a+i a't$, whose limits are real. Thus steps 3.1–5.1 apply to the actual $H^{q+1}\to H^q$ operator, including the smooth weighted realizations. The transformations commute with scalar weights. The resulting common real index is the actual $H^1$ index supplied by [F4], and nothing has been subtracted for translations. [F4, step 3.1, step 4.1, step 5.1, algebra] ∎
