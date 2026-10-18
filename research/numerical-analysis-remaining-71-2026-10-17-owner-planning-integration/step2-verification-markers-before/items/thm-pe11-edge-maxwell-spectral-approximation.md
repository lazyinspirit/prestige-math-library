---
id: thm-pe11-edge-maxwell-spectral-approximation
kind: theorem
title: Spectral convergence and no nonzero pollution for PEC edge elements
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps:
  - def-na-pe11-maxwell-cavity-eigenproblem
  - def-na-hcurl-space
  - def-na-zero-tangential-hcurl
  - def-na-lowest-order-whitney-de-rham-spaces
  - def-matching-affine-simplicial-meshes
  - def-wkp-zero-as-a-sobolev-closure
  - def-nullhomotopic-map-and-contractible-space
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - lem-na-nedelec-edge-unisolvence
  - lem-pe11-continuous-gauge-compact-embedding
  - lem-pe11-gauge-space-infinite-dimensional
  - lem-pe11-smooth-nedelec-approximation
  - lem-pe11-gauge-conforming-edge-approximation
  - lem-pe11-compact-self-adjoint-spectral-approximation
  - lem-pe11-hcurl-weak-limit
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-na-discrete-compactness-and-poincare-lowest-order-nedelec
  - thm-na-uniformly-bounded-commuting-cochain-projection
  - def-na-curl-curl-kernel-quotient-gauge
  - thm-compact-coercive-form-spectrum-and-minmax
  - lem-finite-dimensional-galerkin-minmax
  - lem-separable-hilbert-bounded-sequence-weak-subsequence
  - lem-pde-l2-control-space-separable
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Peter Monk, Finite Element Methods for Maxwell's Equations, Oxford University Press, 2003
      url: https://djvu.online/file/jcJa2PquKRPxA
      locator: "§§7.3–7.4, printed pp. 180–197: discrete compactness, collective compactness, and PEC cavity eigenvalue convergence."
    - title: Daniele Boffi, Finite element approximation of eigenvalue problems, complete Pavia course notes, 2017
      url: https://www-dimat.unipv.it/boffi/download/pavia2017.pdf
      locator: "Slides/pages 102–108: compact solution operators, discrete eigenproblems, absence of spurious eigenvalues, full multiplicity and eigenspace-gap convergence."
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§1.1–1.2, pp. 1–5: lowest-order edge spaces, smooth-input interpolation, and the commuting curl moment identity."
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Let
$\Omega\subset\mathbb R^3$ be a nonempty bounded contractible Lipschitz
polyhedral cavity with connected boundary. Let $\epsilon,\mu>0$ be constant
scalar coefficients and let $\{\mathcal T_{h_n}\}_{n\ge1}$ be a
shape-regular refining family of matching affine tetrahedral meshes, with
$h_n\to0$. Use the full continuous and discrete curl-kernel quotient gauges
$X$ and $X_{h_n}$ of
[[def-na-pe11-maxwell-cavity-eigenproblem]]. Suppose the three PE09
supplier statements on regular decomposition,
[[thm-na-discrete-compactness-and-poincare-lowest-order-nedelec]], and
[[thm-na-uniformly-bounded-commuting-cochain-projection]] hold for this exact
domain, boundary convention and mesh family. Then the continuous PEC curl-curl
problem has isolated positive eigenvalues of finite multiplicity. For every
isolated continuous eigenvalue $\lambda>0$ of multiplicity $m$, choose
$\delta>0$ so that $I=(\lambda-\delta,\lambda+\delta)$ has
$\lambda-\delta>0$ and its closure contains no other continuous eigenvalue.
Then $I$ contains exactly $m$ discrete eigenvalues for all sufficiently large
$n$; these converge to $\lambda$ and their eigenspaces converge to the
continuous eigenspace in symmetric $L^2$ gap. If positive discrete eigenvalues converge to a finite
limit, that limit is a continuous eigenvalue. Thus the method has no nonzero
spectral pollution. No claim selects convergent individual eigenvectors
inside a repeated eigenspace.

The positive coefficients in this theorem are homogeneous scalars. A
variable or tensor-valued coefficient requires a weighted compactness and
projection interface; it is not covered by the unweighted PE09 statements.
The quotient removes the entire curl kernel, so topology-dependent zero modes
are not counted as positive eigenvalues.

## Facts & Assumptions

**Given:** the three choice axioms; the domain and mesh family; the constant coefficients; the continuous and discrete PEC spaces, kernels and gauges; and the continuous/discrete eigenproblems of [[def-na-pe11-maxwell-cavity-eigenproblem]].

[A1] The Axiom of Choice, Countable Choice and Dependent Choice are explicit hypotheses inherited from the continuous compactness, Rellich and weak subsequence suppliers. ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]])

[F1] On the full continuous kernel quotient, the inclusion into $L^2$ is compact and the curl form satisfies a uniform Poincare inequality. ([[lem-pe11-continuous-gauge-compact-embedding]])

[F2] The continuous quotient is infinite-dimensional on every nonempty open cavity. ([[lem-pe11-gauge-space-infinite-dimensional]])

[F3] For the contractible cavity and shape-regular tetrahedral family, every sequence in the discrete divergence-free subspace bounded in $H(\operatorname{curl})$ has a strongly $L^2$-convergent subsequence, and the discrete curl Poincare inequality is uniform in $h$. ([[thm-na-discrete-compactness-and-poincare-lowest-order-nedelec]])

[F4] The homogeneous family has uniformly graph-bounded cochain projections $\pi_{h,0}^k$ onto $E_{h,0}^k$, identity on those homogeneous finite element spaces, and $d\pi_{h,0}^k=\pi_{h,0}^{k+1}d$ on the homogeneous complex. In particular $\pi_{h,0}^1$ maps $H_0(\operatorname{curl})$ to $V_h$. These are the separate relative operators; no boundary-preservation claim is made for the full family $\pi_h^k$. ([[thm-na-uniformly-bounded-commuting-cochain-projection]])

[F5] Smooth compactly supported fields have canonical edge interpolants converging in $H(\operatorname{curl})$; kernel projection then gives $H(\operatorname{curl})$-convergent approximants in $X_h$ to every $u\in X$. ([[lem-pe11-smooth-nedelec-approximation]], [[lem-pe11-gauge-conforming-edge-approximation]])

[F6] A strongly $L^2$-convergent sequence in $H_0(\operatorname{curl})$ with bounded curls has a subsequence with a weak graph limit in $H_0(\operatorname{curl})$; the $H(\operatorname{curl})$ graph is Hilbert. ([[lem-pe11-hcurl-weak-limit]])

[F7] A compact embedding and a bounded Hermitian coercive form yield the continuous compact self-adjoint solution operator and its eigenvalue list; finite-dimensional coercive Ritz problems have eigenvalues counted with multiplicity. ([[thm-compact-coercive-form-spectrum-and-minmax]], [[lem-finite-dimensional-galerkin-minmax]])

[F8] Strongly convergent compact self-adjoint nonnegative operators with a sequentially collectively compact family and a uniform operator bound have convergent positive eigenvalue clusters with full multiplicity, convergent eigenspaces and no positive spectral pollution. ([[lem-pe11-compact-self-adjoint-spectral-approximation]])

[F9] The mesh spaces are the lowest-order Whitney edge family, the scalar continuous piecewise $P_1$ space, and the zero-curl subspace with its $L^2$-orthogonal gauge; $H_0^1$ is the closure of compactly supported smooth scalars. ([[def-na-lowest-order-whitney-de-rham-spaces]], [[def-na-curl-curl-kernel-quotient-gauge]], [[lem-na-nedelec-edge-unisolvence]], [[def-wkp-zero-as-a-sobolev-closure]])

[F10] A finite-dimensional real inner-product space has an orthonormal basis; the eigenvalues of a finite-dimensional coercive Ritz problem are counted with multiplicity. ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[lem-finite-dimensional-galerkin-minmax]])

[F11] The weighted vector $L^2$ space $Y$ is a real Hilbert space. ([[lem-pde-l2-control-space-separable]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]])

[F12] Every closed subspace of a Hilbert space has an orthogonal projection, and the Hilbert space is the orthogonal direct sum of the subspace and its orthogonal complement. ([[thm-orthogonal-decomposition-by-a-closed-subspace]])

[F13] Since $\epsilon>0$ is a constant scalar, the weighted and ordinary $L^2$ orthogonal complements defining $X$ and $X_h$ coincide. ([[def-na-pe11-maxwell-cavity-eigenproblem]])

## Proof

**Given:** the statement's hypotheses and supplier statements [F1]–[F13].

1.1 Put $Y=L^2(\Omega;\mathbb R^3)$ with inner product $b(u,v)=\epsilon(u,v)_{L^2}$, and let $H_X$ be the $Y$-closure of $X$. The graph of distributional curl is closed: convergence of a field and its curl in $L^2$ passes to the distributional identity in [[def-na-hcurl-space]]. Thus $H(\operatorname{curl})$ is Hilbert by [F6], and $H_0(\operatorname{curl})$ is a closed subspace by its closure definition. Since $K^\perp$ is closed in $Y$ by [F12] and the graph inclusion into $Y$ is continuous, $X=H_0(\operatorname{curl})\cap K^\perp$ is closed in the graph space. By [F1], the curl form $a(u,v)=\mu^{-1}(\operatorname{curl}u,\operatorname{curl}v)_{L^2}$ is bounded and coercive on $X$ in its graph norm. The inclusion $J:X\to H_X$ is injective, compact by [F1], and has dense range by the definition of $H_X$; $H_X$ is an infinite-dimensional Hilbert space by [F2], [F11] and [F12]. Applying [F7] constructs the compact positive self-adjoint solution operator $T_X$ on $H_X$, whose nonzero eigenvalues are $\nu_j=1/\lambda_j$ for the continuous curl-curl eigenvalues. Extend it to $Y$ as $T:=T_XP_{H_X}$, where $P_{H_X}$ is the orthogonal projection from [F12]. Composition with this bounded projection preserves compactness; orthogonality of the decomposition $Y=H_X\oplus H_X^\perp$ shows that $T$ is nonnegative and self-adjoint, with the same nonzero eigenvalues. [A1, F1, F2, F6, F7, F9, F11, F12, F13, given, construct]

1.2 For a mesh $\mathcal T_h$, put $S_h=W_h^0\cap H_0^1(\Omega)$ and $G_h=\nabla S_h$. On a tetrahedron with barycentric coordinates $\lambda_i$ and vertices $x_i$, the identity $\sum_{j\ne i}\phi_{ij}=-\nabla\lambda_i$ follows from $\sum_j\lambda_j=1$. Since $x_\ell=\sum_i(x_i)_\ell\lambda_i$, $e_\ell=\nabla x_\ell=\sum_i(x_i)_\ell\nabla\lambda_i$ is in the local Nedelec space. Hence each piecewise constant $\nabla q_h$ lies in that space. For each oriented mesh edge $e=[x_i,x_j]$ and every tetrahedron $K$ containing it, its local circulation is
$$\int_e \nabla(q_h|_K)\cdot t_e\,ds=q_h(x_j)-q_h(x_i).$$
The continuous piecewise-affine function $q_h$ has the same endpoint values in every incident tetrahedron, so the circulation is common to all cells containing $e$. Thus the local fields assemble with the required global edge conformity. Choose compactly supported smooth $q_j\to q_h$ in $H^1$ by the closure definition of $H_0^1$. Then $\nabla q_j\in C_c^\infty(\Omega;\mathbb R^3)$ and $\|\nabla q_j-\nabla q_h\|_{H(\operatorname{curl})} =\|\nabla q_j-\nabla q_h\|_{L^2}\to0$, since both gradients have zero distributional curl. Thus $\nabla q_h\in V_h$ and $G_h\subset K_h$. Because $\epsilon>0$ is a constant scalar, the weighted and ordinary $L^2$ orthogonal complements coincide. Consequently $X_h=K_h^\perp\cap V_h$ is a subspace of the gradient orthogonal space in [F3]. [F9, F13, given, construct]

1.3 On $X_h$, the curl form is positive definite: if $\operatorname{curl}v_h=0$, then $v_h\in K_h\cap K_h^\perp=\{0\}$. The space is finite-dimensional because the mesh has finitely many edge degrees of freedom. Choose an $a$-orthonormal basis $\psi_1,\ldots,\psi_N$ by [F10] and define $T_hf=\sum_{i=1}^N b(f,\psi_i)\psi_i$. For $v_h=\sum_i c_i\psi_i$, this gives $a(T_hf,v_h)=\sum_i c_i b(f,\psi_i)=b(f,v_h)$, so the formula defines the unique linear map $T_h:Y\to X_h$ satisfying the discrete source equation. For $f,g\in Y$, the same formula gives $b(T_hf,g)=\sum_i b(f,\psi_i)b(\psi_i,g)=a(T_hf,T_hg)=b(f,T_hg)$, so $T_h$ is self-adjoint. It also gives $b(T_hf,f)=\sum_i b(f,\psi_i)^2=a(T_hf,T_hf)\ge0$. Its finite-dimensional range makes it compact. If $T_he_h=\nu e_h$ with $\nu\ne0$, the defining equation gives $a(e_h,v_h)=\nu^{-1}b(e_h,v_h)$ for every $v_h\in X_h$; conversely every discrete eigenpair with eigenvalue $\lambda_h$ satisfies $T_he_h=\lambda_h^{-1}e_h$. Thus its nonzero eigenvalues are $\nu_{h,j}=1/\lambda_{h,j}$, counted with multiplicity by [F7]. [F7, F9, F10, F13, given, construct]

2.1 Testing the defining equation with $u_h=T_hf$ gives $\mu^{-1}\|\operatorname{curl}u_h\|_2^2 =b(f,u_h)\le\|f\|_Y\|u_h\|_Y$. By [F3] and the constant coefficients, $\|u_h\|_Y\le C\|\operatorname{curl}u_h\|_2$; hence $\|T_hf\|_{H(\operatorname{curl})}\le C'\|f\|_Y$, uniformly in $h$. For any bounded sequence $f_n\in Y$ and $h_n\to0$, [F3] applied to $T_{h_n}f_n\in X_{h_n}$ supplies a strongly convergent subsequence in $Y$. Therefore $(T_h)$ is sequentially collectively compact and uniformly bounded in operator norm. [F3, step 1.2, step 1.3, algebra]

3.1 Fix $f\in Y$ and any sequence $h_n\to0$. By step 2.1 and [F3], every subsequence of $u_n:=T_{h_n}f$ has a further subsequence converging strongly in $Y$ to some $u$. By [F6], after a further subsequence $u\in V$ and $\operatorname{curl}u_n\rightharpoonup\operatorname{curl}u$. For each $k\in K$, the projection supplier [F4] gives $k_{h_n}:=\pi_{h_n,0}^1k\in V_{h_n}$ and $\operatorname{curl}k_{h_n}=\pi_{h_n,0}^2\operatorname{curl}k=0$, so $k_{h_n}\in K_{h_n}$. Moreover $k_{h_n}\to k$ strongly in graph norm: given $\eta>0$, use the closure definition to choose $\varphi\in C_c^\infty(\Omega;\mathbb R^3)$ with $\|k-\varphi\|_{H(\operatorname{curl})}<\eta$, then use [F5] to obtain $w_{h_n}=I_{h_n}\varphi\in V_{h_n}$ with $w_{h_n}\to\varphi$. Because $\pi_{h_n,0}^1$ is a uniformly bounded projection and equals the identity on $V_{h_n}$, $\|\pi_{h_n,0}^1k-k\|_{H(\operatorname{curl})}\le(\sup_h\|\pi_{h,0}^1\|+1)\|k-w_{h_n}\|_{H(\operatorname{curl})}$. Letting $n\to\infty$ and then $\eta\to0$ proves the convergence. Since $u_n\perp K_{h_n}$, taking limits in $b(u_n,k_{h_n})=0$ gives $b(u,k)=0$. As $k\in K$ was arbitrary, $u\in X$. [F4, F5, F6, given, choose, step 2.1]

4.1 Let $v\in X$. By [F5], choose $v_{h_n}\in X_{h_n}$ with $v_{h_n}\to v$ in graph norm. The discrete equation is $a(u_n,v_{h_n})=b(f,v_{h_n})$. Along the subsequence of step 3.1, the curls of $u_n$ converge weakly and those of $v_{h_n}$ strongly, while both fields converge strongly in $L^2$. Passing to the limit gives $a(u,v)=b(f,v)$ for every $v\in X$. Coercivity in [F1] makes this continuous source problem unique, so $u=Tf$. Every subsequence has a further subsequence converging to $Tf$; therefore $T_{h_n}f\to Tf$ strongly in $Y$ for every $f\in Y$. [F1, F5, F6, step 3.1, algebra]

5.1 The operators $T$ and $T_h$ are compact, nonnegative and self-adjoint; steps 3.1 and 4.1 give the uniform bound, sequential collective compactness and pointwise convergence required by [F8]. Thus every isolated positive eigenvalue $\nu=1/\lambda$ of $T$ is approximated by exactly its full multiplicity of eigenvalues $\nu_h$, with convergence of eigenspaces in symmetric $Y$-gap, and no positive spurious spectral limit occurs. Taking reciprocals $\lambda_h=1/\nu_h$ preserves convergence and multiplicity. Because $\epsilon$ is a positive constant, the $Y$-gap is equivalent to the ordinary $L^2$ gap. The uniform discrete curl Poincare estimate in [F3] gives $\lambda_h\ge c>0$, independent of $h$, by testing the eigenrelation with its eigenvector, so any finite limit of positive discrete eigenvalues is positive. The same reciprocal argument sends every positive finite limit of discrete $\lambda_h$ to a nonzero spectral limit of $T$, hence to a continuous eigenvalue by [F8]. This proves the theorem, including repeated clusters and the exclusion of nonzero pollution. [F3, F7, F8, step 4.1, algebra] ∎

## Remarks

The regular-decomposition interface of [[thm-na-regular-decomposition-zero-tangential-hcurl]] enters through [F1], with its original $p\in H^1$ scalar contract. The discrete compactness and quotient inequality enter through [F3]. Kernel approximation in step 3.1 uses the separate homogeneous projection family in [F4]; the full projection family is not assumed to preserve the PEC boundary condition.

## Source notes

Boffi's complete course notes supply general Galerkin spectral-convergence context, and Chen's complete Maxwell notes supply the edge-element and commuting-interpolation conventions. The spectral perturbation argument and its application are proved locally above; those sources do not replace the named local PE09 suppliers.
