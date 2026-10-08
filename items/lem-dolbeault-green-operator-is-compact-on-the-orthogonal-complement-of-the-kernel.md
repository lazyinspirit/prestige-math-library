---
id: lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel
kind: lemma
title: "Dolbeault green operator is compact on the orthogonal complement of the kernel"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-bounded-linear-operator
  - def-compact-linear-operator
  - def-countable-choice
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-hilbert-space
  - def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
  - def-operator-norm
  - def-orthogonality-and-orthogonal-complement
  - def-self-adjoint-positive-unitary-and-normal-operator
  - lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas
  - lem-neumann-series-and-small-perturbations-of-bounded-inverses
  - lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign
  - lem-orthogonal-complement-is-closed
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-complete-subspace-iff-closed
  - thm-double-orthogonal-complement-is-closure
  - thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface
  - thm-lax-milgram
  - thm-leibniz-rule-for-distributions
  - thm-local-lp-compactness-of-w-one-p-bounded-sequences
  - thm-sequential-characterization-of-compact-operators
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §2, (2.2), printed p. 289: the Rellich lemma states that the compact-manifold Sobolev inclusion W^{k+1}→W^k is compact. The item proves the bundle-valued compactness step chartwise from the library's local compactness theorem."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08

---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). It enters through the Sobolev localization and local compactness interfaces, and it supplies Dependent Choice for the sequential compact-operator criterion; the Lax–Milgram and compact self-adjoint norm-attainment arguments use only Countable Choice ([[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]). Let $X$ be a compact Riemann surface, let $E\to X$ be a holomorphic line bundle with Hermitian metric $h$, and let $g$ be a compatible Riemannian metric. Use the Hilbert spaces, maximal Dolbeault operator $\bar D$, Hilbert adjoint $\bar D^*$, and nonnegative self-adjoint Dolbeault Laplacian $\Delta''$ of [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]. Write $\mathcal H:=\ker\Delta''$ and $\mathcal H^\perp$ for its orthogonal complement in $L^2:=L^2_0\oplus L^2_1$. For $u=u_0+u_1$ set
$$\mathcal V:=\operatorname{dom}\bar D\oplus\operatorname{dom}\bar D^*,\qquad \|u\|_{\mathcal V}^2:=\|u\|_{L^2}^2+\|\bar D u_0\|_{L^2}^2+\|\bar D^*u_1\|_{L^2}^2.$$
By [[thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface]], $\mathcal V=H^1(X,\Lambda^{0,\bullet}T^*X\otimes E)$ with equivalent norms. Give $\mathcal V$ the first-variable-linear form inner product
$$a(u,v):=\langle u,v\rangle_{L^2}+\langle\bar D u_0,\bar D v_0\rangle_{L^2}+\langle\bar D^*u_1,\bar D^*v_1\rangle_{L^2}.$$

1. **Boundary operator.** There is a unique bounded linear operator $B:L^2\to\mathcal V$ ([[def-bounded-linear-operator]]) satisfying
$$a(Bf,v)=\langle f,v\rangle_{L^2}\qquad(f\in L^2,\ v\in\mathcal V).$$
It obeys $\|Bf\|_{\mathcal V}\le\|f\|_{L^2}$ and $\|Bf\|_{H^2}\le C\|f\|_{L^2}$, lies in $\operatorname{dom}\Delta''$, and satisfies $(I+\Delta'')Bf=f$. As an operator on $L^2$, $B$ is injective, self-adjoint and positive; $B|_{\mathcal H}=I$, $\ker(I-B)=\mathcal H$, and $B(\mathcal H^\perp)\subseteq\mathcal H^\perp$.

2. **Compactness.** The operator $B:L^2\to L^2$ is compact.

3. **Green operator.** The restriction of $I-B$ to $\mathcal H^\perp$ is boundedly invertible. The operator
$$G:=B(I-B)^{-1}:\mathcal H^\perp\longrightarrow\mathcal H^\perp$$
is compact, self-adjoint and positive, has trivial kernel, and obeys
$$\operatorname{ran}G=\operatorname{dom}\Delta''\cap\mathcal H^\perp,\qquad \overline{\operatorname{ran}G}=\mathcal H^\perp.$$
It satisfies the Green identities
$$\Delta''Gf=f\quad(f\in\mathcal H^\perp),\qquad G\Delta''u=u\quad(u\in\operatorname{dom}\Delta''\cap\mathcal H^\perp),$$
and maps $\mathcal H^\perp$ boundedly into $H^2$.

## Facts & Assumptions

**Given:** The compact Riemann surface, the supplied Hermitian and Riemannian metrics, the operators and spaces in the Statement, and full AC.

[F1] The pointwise Hermitian $L^2$ pairing is first-variable-linear, its completion is a complex Hilbert space, and smooth forms are dense; Hilbert space means a complete inner-product space ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]], [[def-hilbert-space]]).

[F2] The maximal operator and its adjoint are densely defined and closed, $\Delta''$ is self-adjoint and nonnegative with the block-composition domain, and for $u\in\operatorname{dom}\Delta''$,
$$\langle\Delta''u,u\rangle=\|\bar D u_0\|_{L^2}^2+\|\bar D^*u_1\|_{L^2}^2$$
([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F3] The first-order estimate identifies $\mathcal V$ with $H^1$, proves smooth graph-norm density, and identifies the form equation against smooth tests with the distributional equation for $\Delta''$. A distributional solution $u\in H^1$ of $\Delta''u=f\in L^2$ lies in $H^2$ and obeys $\|u\|_{H^2}\le C_0(\|f\|_{L^2}+\|u\|_{L^2})$ ([[thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface]]).

[F4] The local formulas for $\bar D$ and $\bar D^*$ have smooth coefficients. If $u\in H^2$, then their local coefficients applied to $u$ lie in $H^1$: weak derivatives of an $H^2$ coefficient are $H^1$, and multiplication by a smooth coefficient preserves $H^1$ by the distributional Leibniz rule. Consequently $\bar D u_0\in\operatorname{dom}\bar D^*$ and $\bar D^*u_1\in\operatorname{dom}\bar D$, so $u\in\operatorname{dom}\Delta''$ ([[lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas]], [[thm-leibniz-rule-for-distributions]]).

[F5] On a Hilbert space, a bounded coercive sesquilinear form and a bounded conjugate-linear functional have a unique Lax–Milgram solution; if the coercivity constant is $1$, its form norm is at most the functional norm. A linear map is bounded when a constant controls its output norm by its input norm. Cauchy–Schwarz bounds the form and functional, and Lax–Milgram uses Countable Choice ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[thm-lax-milgram]], [[def-countable-choice]], [[def-bounded-linear-operator]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F6] A sequence bounded in $W^{1,2}_{\rm loc}$ on a Euclidean open set has a subsequence converging in $L^2_{\rm loc}$ under AC ([[thm-local-lp-compactness-of-w-one-p-bounded-sequences]]).

[F7] A bounded linear operator is compact when every bounded sequence has an image subsequence converging in norm; the sequential characterization assumes DC, and AC implies DC ([[def-compact-linear-operator]], [[thm-sequential-characterization-of-compact-operators]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F8] For a nonzero compact self-adjoint operator $T$ on a Hilbert space, one of $\|T\|$ and $-\|T\|$ is an eigenvalue; self-adjointness and positivity have their bounded-operator meanings, and $\|T\|$ is the operator norm. This fact assumes Countable Choice ([[lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-operator-norm]], [[def-countable-choice]]).

[F9] If $T$ is bounded with $\|T\|<1$ on a Banach space, $I-T$ has inverse $\sum_{n\ge0}T^n$ with norm at most $(1-\|T\|)^{-1}$ ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]).

[F10] An orthogonal complement is the subspace of vectors orthogonal to the given set and is closed ([[def-orthogonality-and-orthogonal-complement]], [[lem-orthogonal-complement-is-closed]]).

[F11] Every closed subspace of a Hilbert space is complete ([[thm-complete-subspace-iff-closed]]).

[F12] Full AC supplies the Countable Choice instances used by Lax–Milgram and norm attainment ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F13] For a linear subspace of a Hilbert space, its double orthogonal complement is its closure ([[thm-double-orthogonal-complement-is-closure]]).

## Proof

**Proof technique:** Solve the positive form equation by Lax–Milgram, use the local Rellich theorem to prove compactness, then invert $I-B$ on the orthogonal complement of the harmonic kernel.

1.1 The form $a$ is Hermitian and bounded by $\|u\|_{\mathcal V}\|v\|_{\mathcal V}$, and $a(u,u)=\|u\|_{\mathcal V}^2$, so it is coercive with constant $1$. For each $f\in L^2$, $v\mapsto\langle f,v\rangle_{L^2}$ is conjugate-linear and has norm at most $\|f\|_{L^2}$ on $\mathcal V$. Since $\mathcal V$ is Hilbert by [F3], Lax–Milgram [F5] gives a unique $Bf\in\mathcal V$ with $a(Bf,v)=\langle f,v\rangle$ for every $v\in\mathcal V$, and $\|Bf\|_{\mathcal V}\le\|f\|_{L^2}$. Uniqueness makes $f\mapsto Bf$ linear, and this estimate makes it bounded into both $\mathcal V$ and $L^2$. [F1, F3, F5, F12, algebra]

1.2 For every smooth test form $v$, the defining equation of $Bf$ gives $\langle\bar D(Bf)_0,\bar Dv_0\rangle+\langle\bar D^*(Bf)_1,\bar D^*v_1\rangle=\langle f-Bf,v\rangle$. By [F3] this is the distributional equation $\Delta''Bf=f-Bf$; the $H^2$ estimate in [F3] applies because $Bf\in\mathcal V=H^1$ and $f-Bf\in L^2$, yielding $\|Bf\|_{H^2}\le C_0(\|f-Bf\|+\|Bf\|)\le3C_0\|f\|$. Fact [F4] now puts $Bf$ in $\operatorname{dom}\Delta''$, so the distributional identity is the operator identity $(I+\Delta'')Bf=f$. Conversely, for $u\in\operatorname{dom}\Delta''$, set $f=(I+\Delta'')u$. Then $z=Bf-u$ lies in $\operatorname{dom}\Delta''$ and $(I+\Delta'')z=0$; taking its pairing with $z$ and using [F2] gives $0=\|z\|^2+\|\bar Dz_0\|^2+\|\bar D^*z_1\|^2$, so $z=0$ and $B(I+\Delta'')u=u$. [F2, F3, F4, algebra]

1.3 The equation with $v=Bg$ gives $a(Bf,Bg)=\langle f,Bg\rangle$; Hermitian symmetry of $a$ then gives $\langle Bf,g\rangle=\langle f,Bg\rangle$, so $B$ is self-adjoint. Taking $g=f$ shows $\langle Bf,f\rangle=a(Bf,Bf)\ge0$, so $B$ is positive. If $Bf=0$, its defining equation gives $\langle f,v\rangle=0$ for every $v\in\mathcal V$; smooth forms are dense in $L^2$ by [F1], hence $f=0$ and $B$ is injective. Also $\|Bf\|_{L^2}\le\|Bf\|_{\mathcal V}\le\|f\|_{L^2}$, so $\|B\|\le1$. [F1, algebra]

2.1 If $h\in\mathcal H$, the energy identity [F2] gives $\bar D h_0=0$ and $\bar D^*h_1=0$, whence $h\in\mathcal V$ and $a(h,v)=\langle h,v\rangle$ for all $v\in\mathcal V$; uniqueness gives $Bh=h$. Conversely, if $Bx=x$, then $x\in\mathcal V$ and testing its defining equation with $v=x$ gives $\|x\|_{\mathcal V}^2=\|x\|_{L^2}^2$, so both first-order terms vanish. The block domain in [F2] then gives $x\in\operatorname{dom}\Delta''$ and $\Delta''x=0$. Thus $\ker(I-B)=\mathcal H$. Self-adjointness and $B|_{\mathcal H}=I$ imply $B(\mathcal H^\perp)\subseteq\mathcal H^\perp$. [F1, F2, F10, step 1.3, algebra]

2.2 Let $(f_n)$ be bounded in $L^2$ and put $u_n=Bf_n$. Step 1.2 bounds $(u_n)$ in the fixed finite-chart $H^2$ norm, so every partitioned local coefficient is bounded in $W^{1,2}_{\rm loc}$; [F6] gives a subsequence converging in $L^2_{\rm loc}$ for each chart coefficient. Successively taking subsequences over the finitely many charts and degrees gives one subsequence converging in $L^2$ on every compact support of the fixed partition; summing these finitely many weighted coefficient norms gives convergence in global $L^2$. Thus $B$ takes every bounded sequence to a sequence with a norm-convergent subsequence. By [F7] and [F12], the sequential characterization proves that $B:L^2\to L^2$ is compact. [F3, F6, F7, F12, step 1.2, algebra]

3.1 The closed subspace $\mathcal H^\perp$ is invariant under $B$ by step 2.1. For any bounded sequence in $\mathcal H^\perp$, compactness of $B$ from step 2.2 gives a subsequence whose images converge in $L^2$; its limit remains in $\mathcal H^\perp$ by [F10], so [F7] shows that $T:=B|_{\mathcal H^\perp}$ is compact on $\mathcal H^\perp$. This closed subspace is Hilbert by [F1, F11]. It is self-adjoint, positive and has norm at most $1$ by step 1.3. If $T=0$, its norm is already less than $1$; this includes $\mathcal H^\perp=\{0\}$. Otherwise [F8] gives an eigenvalue equal to $\|T\|$ or $-\|T\|$; positivity excludes the negative value, and if $\|T\|=1$ its unit eigenvector would lie in $\ker(I-B)\cap\mathcal H^\perp=\{0\}$ by step 2.1, a contradiction. Hence $r:=\|T\|<1$, and [F9] gives the bounded inverse $C:=(I-T)^{-1}=\sum_{n\ge0}T^n$ on $\mathcal H^\perp$, with $\|C\|\le(1-r)^{-1}$. [F1, F7, F8, F9, F10, F11, F12, step 1.3, step 2.1, step 2.2, algebra]

4.1 The series $G:=TC=\sum_{n\ge1}T^n$ converges in operator norm by [F9]. Each power $T^n$ is self-adjoint and positive: for $n=2m$, $\langle T^n x,x\rangle=\|T^m x\|^2$, and for $n=2m+1$, it equals $\langle T(T^m x),T^m x\rangle\ge0$. Therefore $G$ is self-adjoint and positive. For any bounded sequence $(x_n)$ in $\mathcal H^\perp$, boundedness of $C$ makes $(Cx_n)$ bounded; compactness of $T$ from step 3.1 gives a subsequence for which $Gx_n=TCx_n$ converges, so [F7] proves compactness of $G$. It is injective because both $T$ and $C$ are injective. For $f\in\mathcal H^\perp$, put $y=Cf$; step 1.2 gives $Gf=By\in\operatorname{dom}\Delta''\cap\mathcal H^\perp$ and $\Delta''Gf=(I-B)y=f$. [F1, F7, F9, step 1.3, step 2.1, step 3.1, algebra]

5.1 If $u\in\operatorname{dom}\Delta''\cap\mathcal H^\perp$, self-adjointness of $\Delta''$ and $\Delta''h=0$ for $h\in\mathcal H$ imply $\Delta''u\in\mathcal H^\perp$. Both $u$ and $G\Delta''u$ lie in $\operatorname{dom}\Delta''$ and have the same Laplacian by step 4.1, so their difference belongs to $\mathcal H\cap\mathcal H^\perp=\{0\}$. Thus $G\Delta''u=u$ and $\operatorname{ran}G=\operatorname{dom}\Delta''\cap\mathcal H^\perp$. If $z\perp\operatorname{ran}G$, self-adjointness gives $\langle x,Gz\rangle=0$ for all $x\in\mathcal H^\perp$, hence $Gz=0$ and $z=0$; [F13] now gives $\overline{\operatorname{ran}G}=\mathcal H^\perp$. Finally, $\|Gf\|_{H^2}=\|B(Cf)\|_{H^2}\le3C_0\|C\|\|f\|_{L^2}$ by step 1.2 and [F9]. [F1, F2, F9, F10, F13, step 1.2, step 4.1, algebra] ∎

## Source notes

Demailly's Ch. VI §2 (2.2) states the compact Rellich inclusion on a compact manifold. The bundle-valued compactness step is assembled chartwise from the library's local compactness theorem. The construction of $B$, the norm gap on $\mathcal H^\perp$, and the corrected Green range are established here from the exact operator-theoretic suppliers. Demailly's separate Ch. VI §3.3 Hodge statements assume a flat Hermitian connection and are not used for this result.
