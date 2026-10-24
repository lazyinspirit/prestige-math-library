---
id: def-aqft-global-anomaly-holonomy
kind: definition
title: Determinant-line holonomy for a global anomaly test
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 4
deps:
  - def-aqft-thooft-anomaly
dependency_roles:
  def-aqft-thooft-anomaly: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: >-
  This is a geometric interface for a fixed smooth family of regulated chiral
  Dirac operators on compact Euclidean manifolds. It does not assert existence
  of a general interacting continuum quantum field theory or classify all
  anomalies.
sources:
  references:
    - title: "Xianzhe Dai and Daniel S. Freed, Eta-Invariants and Determinant Lines"
      url: "https://arxiv.org/pdf/hep-th/9405012"
      locator: "§§1–2 and §5, PDF pp. 1–3, 8–15, 31–35; determinant-line construction and the holonomy formula for the inverse determinant line."
    - title: "Daniel S. Freed, Lectures on Field Theory and Topology"
      url: "https://abel.math.harvard.edu/~dafr/CBMS133.pdf"
      locator: "Lecture 11, §§11.1–11.2, printed pp.154–158/PDF pp.162–166; Pfaffian lines, families, and the relative/invertible anomaly interface."
verification:
  precheck: pass
---

## Definition

Fix an even integer $d\ge2$ and a compact smooth oriented Riemannian $d$-manifold $M$ without boundary. Let $F^+_{\mathrm{SO}}(M)$ be its principal right $\mathrm{SO}(d)$-bundle of positively oriented orthonormal frames. A specified spin structure is a principal right $\operatorname{Spin}(d)$-bundle $Q\to M$ with a smooth equivariant double-cover map $\lambda:Q\to F^+_{\mathrm{SO}}(M)$ covering the standard double covering $\rho:\operatorname{Spin}(d)\to\mathrm{SO}(d)$. The Levi-Civita connection lifts to a connection on $Q$. Let $\Delta^\pm$ be the two complex half-spin representations of $\operatorname{Spin}(d)$, with representation maps $\rho_\pm$, and define $S^\pm=Q\times_{\rho_\pm}\Delta^\pm$. Let $P\to M$ be a smooth principal right $G$-bundle with connection $A$, let $R:G\to U(V_R)$ be a unitary finite-dimensional complex representation, and set $E_R=P\times_R V_R$ with its associated Hermitian metric and induced connection. Let $c:TM\to\operatorname{End}_{\mathbb C}(S^+\oplus S^-)$ be the skew-Hermitian Clifford action, with $c(v)c(w)+c(w)c(v)=-2g(v,w)$ for $v,w\in T_xM$, and let $\nabla$ be the tensor-product connection induced by the lifted Levi-Civita connection and $A$. The chiral Dirac operator is the extension to the stated Sobolev spaces of the first-order expression in any positively oriented local orthonormal frame $(e_i)$; this expression is independent of that frame.

$$D^+_{A,R}:H^1(M;S^+\otimes E_R)\longrightarrow L^2(M;S^-\otimes E_R),\qquad D^+_{A,R}\psi=\sum_{i=1}^{d} c(e_i)\nabla_{e_i}\psi\quad(\psi\in C^\infty(M;S^+\otimes E_R)),$$

where $H^1$ and $L^2$ are the first Sobolev and square-integrable completions for the fixed Riemannian metric. Assume the operator is Fredholm. Its inverse determinant line is

$$\mathcal L_A=\left(\det_{\mathbb C}\ker D^+_{A,R}\right)^*\otimes\det_{\mathbb C}\operatorname{coker}D^+_{A,R},$$

Here $\det_{\mathbb C}W=\bigwedge^{\dim_{\mathbb C}W}_{\mathbb C}W$, including $\det0=\mathbb C$. Our phrase **inverse determinant line** means the dual of $\Delta_A=\det\ker D^+\otimes(\det\operatorname{coker}D^+)^*$; the displayed $\mathcal L$ is the line called $\mathrm{Det}$, not $\mathrm{Det}^{-1}$, in Dai–Freed §2. This explicit formula fixes the convention throughout.

The named regularized geometry means the following supplied **admissible analytic data**, rather than an arbitrary Hermitian line relabeled by a name. Test smooth dependence on each finite-dimensional smooth parameter manifold $T$ of connections on the fixed $M,P,R$. Write $\mathscr H^\pm=T\times L^2(M;S^\pm\otimes E_R)$ with common first-Sobolev domains. Supply unitary parameter connections $\widetilde\nabla^\pm$ on these Hilbert bundles, preserving smooth sections and the Sobolev domains; for the fixed product identification one may take the ordinary derivative in $T$. Fix a positive inverse-length scale $\mu$ and put $\mathscr D=D^+/\mu$, with Hilbert adjoint $\mathscr D^*$. These choices and the local-counterterm convention are fixed before phases are compared.

Require $Q^+=\mathscr D^*\mathscr D$ and $Q^-=\mathscr D\mathscr D^*$ to have the supplied nonnegative self-adjoint realizations with discrete spectrum, finite multiplicities and smooth eigensections, and the same positive spectrum with multiplicity. A spectral cut is a number $a>0$ not in either spectrum on an open parameter patch $U_a\subseteq T$. The orthogonal projections onto eigenvalues $\lambda<a$, including zero modes, must form smooth finite-rank bundles $V_a^\pm\subset\mathscr H^\pm$; their complements are denoted $\mathscr H^\pm_{>a}$. The finite cut line is $L_a=(\det V_a^+)^*\otimes\det V_a^-$. For $a<b$, the operator $\mathscr D$ is invertible between the eigenbundles $V_{(a,b)}^+$ and $V_{(a,b)}^-$. Glue $L_a$ to $L_b$ by tensoring with its top exterior power $\det\mathscr D_{(a,b)}$. Finite-dimensional cancellation of these invertible modes identifies each fiber with the displayed kernel/cokernel line, even where kernel dimensions jump. Tensor factors are kept in increasing cut order; parity is $\operatorname{ind}D^+\bmod2$ if graded lines are used.

For each cut, define the scalar function $\zeta_a(z)=\sum_{\lambda>a}\lambda^{-z}$ using the positive $Q^+$ eigenvalues with multiplicity and real $\log\lambda$. Admissibility requires convergence on an initial right half-plane, a specified meromorphic continuation to a connected domain reaching $z=0$, regularity there, and smooth parameter dependence of $\zeta'_a(0)$. The **Quillen squared norm** is $\|\ell\|_Q^2=\exp(-\zeta'_a(0))\|\ell_a\|_{L^2}^2$. Finite bands satisfy $\zeta_a-\zeta_b=\sum_{a<\lambda<b}\lambda^{-z}$ and $\|\ell_b\|_{L^2}^2=(\prod_{a<\lambda<b}\lambda)\|\ell_a\|_{L^2}^2$, which give cut independence of this norm. No existence of that continuation for an arbitrary Fredholm family is inferred.

Project $\widetilde\nabla^\pm$ to the cut subbundles and their complements. They induce a connection $\nabla^a$ on $L_a$. On the invertible complement let $\widetilde\nabla\mathscr D_{>a}=\widetilde\nabla^-_{>a}\mathscr D_{>a}-\mathscr D_{>a}\widetilde\nabla^+_{>a}$. For $t>0$ define the complex one-form $h_a(t)=\operatorname{Tr}_{\mathscr H^+_{>a}}(\mathscr D_{>a}^{-1}(\widetilde\nabla\mathscr D_{>a})e^{-tQ^+_{>a}})$; the trace is the absolutely convergent sum of diagonal matrix coefficients in an orthonormal eigenbasis, independent of choices within each eigenspace. Require this convergence and the smooth coefficient expansion $h_a(t)=\sum_{j=-d/2}^{-1}b_jt^j+b_0+b_{\log}\log t+o(1)$ as dimensionless $t\downarrow0$. The finite-part convention is $\operatorname{FP}h_a=b_0+\gamma_1b_{\log}$, where $\gamma_1=\int_0^\infty e^{-r}\log r\,dr=\Gamma'(1)$; the equality names the usual gamma-function derivative and fixes the log-term subtraction. The **Bismut–Freed connection** in this convention is the local formula $\nabla^{\mathrm{BF}}=\nabla^a+\operatorname{FP}h_a$, as in Dai–Freed (3.6)–(3.7).

Admissibility further requires that these forms are smooth, intertwine the specified cut transitions, and are compatible with the Quillen norm: $d\|s\|_Q^2=\langle\nabla^{\mathrm{BF}}s,s\rangle_Q+\langle s,\nabla^{\mathrm{BF}}s\rangle_Q$ for every local section $s$. Thus in a unit frame the connection form is purely imaginary. Gauge identifications must intertwine all cut data, preserve this norm and preserve the connection after the corresponding parameter pullback. These are explicit mathematical conditions on the supplied regularization. Cut gluing reduces on a finite band to the determinant derivative $(\det\mathscr D)^{-1}\nabla(\det\mathscr D)=\operatorname{Tr}(\mathscr D^{-1}\widetilde\nabla\mathscr D)$ with the induced finite-dimensional connections; analytic existence, smooth heat expansions and naturality for all geometric families are not asserted here. In particular a Hermitian line alone does not supply this connection. Parallel transport means the solution of $\nabla^{\mathrm{BF}}_{\dot A_t}s(t)=0$ with a specified initial value; in a unit frame with connection $i\beta$, it is multiplication by $\exp(-i\int\beta)$.

When the supplied real or pseudoreal fermion structure instead yields a skew-Fredholm quadratic form, include its actual **Pfaffian data**. Concretely, on a common dense Sobolev domain $W^1$ of a complex Hilbert space $W^0$, supply a bounded linear Fredholm map $B:W^1\to(W^0)^*$ such that $b(w,z)=(Bw)(z)$ is complex bilinear and skew on $W^1\times W^1$, with $\operatorname{coker}B\cong(\ker B)^*$ induced by the pairing. Supply finite spectral subspaces $W_a$ of $B^*B$ containing the kernel, with orthogonal cut bands on which $b$ is nondegenerate and no cross terms between bands. For a finite $2m$-dimensional space $W$ the Pfaffian is $\operatorname{pf}(b)=b^{\wedge m}/m!\in\det W^*$, interpreting $b\in\bigwedge^2W^*$; it is zero in odd dimension. Glue $P_a=\det W_a^*$ by the nonzero Pfaffians of the even-dimensional invertible cut bands. The resulting graded line $P$ has parity $\dim\ker B\bmod2$ and the specified natural square identification $P^{\otimes2}\cong L_B$, where $L_B$ is the displayed determinant convention applied to $B$. Its squared Quillen norm has high-mode factor $\exp(-\zeta'_{B,a}(0)/2)$, with $\zeta_{B,a}$ defined from $B^*B$ exactly as above. Its unitary connection is the one whose tensor square, under that identification, is the supplied Bismut–Freed connection of $L_B$; locally its connection form is half that determinant form in square-compatible frames. Smooth gluing, the square identification, spectral continuations, metric compatibility and gauge naturality are required Pfaffian admissibility data, not an arbitrary choice of a square root or an existence assertion for every real/pseudoreal theory.

Let $\mathcal A(P)$ be the affine space of smooth connections on $P$, and let $\mathcal G(P)$ be the group of smooth bundle automorphisms covering the identity on $M$. A gauge arrow $u:A\to A^u$ induces a unitary map $u_*:\mathcal L_A\to\mathcal L_{A^u}$ by its action on kernel and cokernel. A closed loop in background/gauge-field space consists of a smooth path $A_t$ in $\mathcal A(P)$, $0\le t\le1$, and an endpoint gauge arrow $u:A_0\to A_1$. Let $\mathrm{PT}_{A_t}:\mathcal L_{A_0}\to\mathcal L_{A_1}$ be parallel transport and $u_*:\mathcal L_{A_0}\to\mathcal L_{A_1}$ the endpoint gauge map. The closed-loop automorphism is $u_*^{-1}\circ\mathrm{PT}_{A_t}$ on $\mathcal L_{A_0}$. Its scalar is the holonomy $\operatorname{Hol}_{\gamma}(\mathcal L)\in U(1)$. Fix the regularization and local-counterterm convention before comparing this loop phase with the infinitesimal local anomaly; the holonomy itself is additional global loop data.

## Definition references

[Dai and Freed, §§1–2 and §5](https://arxiv.org/pdf/hep-th/9405012)

[Freed, Lecture 11, §§11.1–11.2](https://abel.math.harvard.edu/~dafr/CBMS133.pdf)

## Facts & Assumptions

**Given:** The compact spin manifold, bundle, connection, unitary representation, smooth Fredholm family, and regularized Hermitian line with unitary connection in the Definition.

[F1] [[def-aqft-thooft-anomaly]] defines the local perturbative anomaly class for a specified nondynamical background subalgebra modulo the model's admissible local counterterms. It explicitly makes no claim about large or disconnected transformations or determinant-line holonomy, so it supplies only the local/global scope distinction used here.

[A1] Every family member is Fredholm and the operational spectral-cut, zeta, finite-part, metric/connection and gauge-compatibility conditions of the Definition are supplied admissible analytic data. The Definition asserts neither universal analytic existence nor an interacting path-integral construction.

[L1] Dai–Freed, §2 PDF11–12 and §3 PDF15–17, give the cut, Quillen-norm and heat finite-part formulas in the displayed $\mathcal L=\mathrm{Det}$ convention. Their exponentiated $\xi$ section and §5 transport use $\mathrm{Det}^{-1}=\mathcal L^*$: transporting back to our line requires dualizing, so its unitary holonomy is inverted. On the dual line, path transport is $(\mathrm{PT}^{-1})^*$ and the forward gauge map is $(u_*^{-1})^*$; the closed-loop scalar is therefore the inverse of that on $\mathcal L$. No direct equality of our holonomy with their undualized $\xi$ phase is assumed.

## Proof

1.1 By [A1], each kernel and cokernel is finite-dimensional, so each top exterior power in the Definition is a one-dimensional complex vector space. The explicit invertible-band transitions supply the smooth line even across kernel jumps; the stated spectral identities give the cut-independent Quillen norm, and [A1] supplies the smooth compatible connection. Their tensor product and dual are therefore a one-dimensional Hermitian line with the specified Quillen metric. [given, A1, algebra]

2.1 Gauge covariance of the Dirac operators intertwines kernel and cokernel unitarily, and the conjugate operators have the same spectrum, so the endpoint map preserves the specified Quillen metric. Parallel transport is unitary. Therefore $u_*^{-1}\circ\mathrm{PT}_{A_t}$ is a unitary automorphism of a one-dimensional complex line, hence multiplication by a unique scalar of modulus one. A change of unit vector in the fiber conjugates that scalar, which does not change it because $U(1)$ is abelian. Therefore $\operatorname{Hol}_{\gamma}(\mathcal L)$ is a well-defined element of $U(1)$. By [F1], the local anomaly interface does not classify determinant-line holonomy; this phase is defined here as separate global loop data, not as a consequence of [F1]. [given, F1, A1, L1, step 1.1, algebra] ∎
