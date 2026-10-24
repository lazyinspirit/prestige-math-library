---
id: lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations
kind: lemma
title: Bounded density and finite-vector transitivity for C*-representations
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-borel-functional-calculus-for-a-bounded-normal-operator
  - def-c-star-algebra
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-countable-choice
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - def-hahn-banach-extension-principle-relative
  - def-hausdorff-space
  - def-hilbert-direct-sum-of-unitary-representations
  - def-hilbert-orthogonal-projection
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - cor-finite-dimensional-subspaces-are-closed
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-interval
  - def-locally-compact-space
  - def-metric-ball
  - def-metric-topology
  - def-nondegenerate-star-representation-of-a-banach-star-algebra
  - def-one-point-compactification
  - def-operator-norm
  - def-space-of-bounded-linear-operators
  - def-state-on-a-c-star-algebra
  - def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra
  - def-strong-and-weak-operator-topologies
  - def-weak-topology-on-a-normed-space
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - lem-c-star-positive-calculus-and-order-estimates
  - lem-c-star-state-gns-purity-and-polish-state-space
  - lem-complex-conjugation-and-modulus-laws
  - lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra
  - lem-real-line-is-a-metric-space
  - thm-borel-functional-calculus-for-bounded-normal-operators
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-complex-stone-weierstrass-self-adjoint
  - thm-continuous-functional-calculus-for-bounded-self-adjoint-operators
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - def-von-neumann-algebra-and-commutant
  - thm-hahn-banach-dominated-extension
  - thm-heine-borel-r
  - thm-metric-hausdorff-separation
  - thm-minimal-c-star-unitization
  - thm-norm-closed-convex-iff-weakly-closed
  - thm-one-point-compactification-properties
dependency_level: 1
axiom_use: "Assume AC. The approximate-unit, unitization, bicommutant, Hahn–Banach, functional-calculus, quotient, and GNS suppliers use AC. AC implies Countable Choice for the orthogonal projections in the bicommutant and Hilbert-space suppliers, and Dependent Choice for the recursive finite-vector corrections. Each finite-tuple approximant is chosen only for its fixed tuple and tolerance; no global family of irreducibles is selected."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: >-
  Assume AC. It supplies positive contractive approximate units, the C*-quotient
  and Hahn–Banach interfaces, the Borel/continuous functional calculus, and
  Countable Choice. AC also supplies dependent choice for the recursive finite-
  vector correction series. The separate choices of approximants are made for
  each fixed tuple and tolerance; no global family of irreducible representatives
  is selected.
sources:
  references:
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019), complete author-hosted book"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Theorem 3.1.9, printed p. 84 (PDF p. 113); Theorem 3.4.2, Lemmas 3.4.3–3.4.4 and Theorem 3.4.5, printed pp. 97–99 (PDF pp. 126–128); Proposition 3.8.1 and Lemmas 3.8.2–3.8.3, printed pp. 110–111 (PDF pp. 139–140). Complete passages read; all proof-bearing claims are established locally."
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras Errata (author-maintained, 13 December 2025)"
      url: "https://ifarah.mathstats.yorku.ca/files/2025/12/standcstar-errata.pdf"
      locator: "PDF p. 3: correction to Lemma 3.4.3, proof line 3; the local proof uses the explicit factor-3 self-adjoint extension and does not use that matrix-completion lemma."
verification:
  audited: "2026-10-08"
  precheck: pass
---
## Statement

Assume AC ([[def-axiom-of-choice]]). Let $H$ be a complex Hilbert space and let
$D\subseteq\mathcal B(H)$ be a nondegenerate concrete C*-algebra
([[def-hilbert-space]], [[def-space-of-bounded-linear-operators]],
[[def-c-star-algebra]], [[def-nondegenerate-star-representation-of-a-banach-star-algebra]]).
Set $M:=D''$ in the commutant convention of [[def-von-neumann-algebra-and-commutant]]. If $H=\{0\}$, the operator-density and transitivity clauses below
are trivial; assume $H\ne\{0\}$ for those clauses. Then:

1. $D_{\mathrm{sa}}$ is strongly dense in $M_{\mathrm{sa}}$, and the unit ball
   of $D$ is strongly dense in the unit ball of $M$.
2. If $M=\mathcal B(H)$, then every finite self-adjoint vector prescription
   compatible with a self-adjoint operator is realized exactly: for
   $\xi_1,\ldots,\xi_n\in H$ and $c=c^*\in\mathcal B(H)$, there is
   $a=a^*\in D$ with $a\xi_j=c\xi_j$ for all $j$. Separately, if the prescribed vectors are finitely many orthonormal
   eigenvectors of $c$ with eigenvalues in a closed interval
   $J\subseteq\mathbb R$ containing $0$, an $a\in D_{\mathrm{sa}}$ can be
   chosen with spectrum in $J$ and the same eigenvalues on those vectors.
   This spectrum-constrained variant makes no promise about additional
   arbitrary vector prescriptions after clipping.
3. If $M=\mathcal B(H)$, then for any unit vectors $\xi,\eta\in H$ there is a unitary $u$ in the
   minimal unitization $D^\sim$ ([[thm-minimal-c-star-unitization]]) whose
   represented operator sends $\xi$ to $z\eta$ for some $z\in\mathbb C$ with
   $|z|=1$. Here unitary has the usual C*-algebra meaning
   ([[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]]),
   and $D^\sim=D$ when $D$ is unital and $D+\mathbb C I$ otherwise.

For a complex C*-algebra $A$, two pure states $\phi,\psi$ are called unitarily
equivalent here when $\psi=\phi\circ\operatorname{Ad}(u)$ for some unitary
$u\in U(A^\sim)$, where $\operatorname{Ad}(u)(a)=uau^*$ and $A^\sim=A$ when
$A$ is unital and its minimal unitization otherwise
([[thm-minimal-c-star-unitization]], [[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]]). Their GNS
representations are irreducible exactly when the states are pure
([[lem-c-star-state-gns-purity-and-polish-state-space]],
[[def-state-on-a-c-star-algebra]]). If their GNS representations are
inequivalent, then $\|\phi-\psi\|=2$. Orthogonal unit vectors in one
irreducible carrier likewise give vector states at distance $2$. Consequently,
if $\|\phi-\psi\|<2$, then $\phi$ and $\psi$ are unitarily equivalent.

## Facts & Assumptions
**Given:** AC; a nondegenerate concrete C*-algebra $D\subseteq\mathcal B(H)$, $M=D''$, finite tuples in $H$, and—when used—pure states and their cyclic GNS representations.

[F1] Assume AC as the overall hypothesis. It implies Dependent Choice and Countable Choice; Countable Choice is the exact strength used by the orthogonal-projection supplier, and Dependent Choice supplies the recursive correction sequence in step 6.2. The approximate-unit and other cited suppliers carry their own AC hypotheses, and no global family of irreducible representatives is selected ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F2] Nondegeneracy means that the closed linear span of $D H$ is $H$, and every C*-algebra has a two-sided approximate unit of positive contractions ([[def-nondegenerate-star-representation-of-a-banach-star-algebra]], [[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]]).

[F3] The commutant convention makes $M=D''$ a concrete von Neumann algebra; the minimal unitization is a unital C*-algebra containing $D$ as a closed ideal, and its represented form $D+\mathbb C I_H$ is isometric because the extended representation is injective when $D$ is concrete and nonunital. For a WOT-closed unital $*$-algebra, the cited bicommutant theorem gives equality with its bicommutant; finite-tuple density for an arbitrary unital $*$-algebra is proved locally in step 2.1 ([[def-von-neumann-algebra-and-commutant]], [[thm-minimal-c-star-unitization]], [[lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra]], [[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]).

[F4] SOT convergence is norm convergence on each fixed vector, WOT convergence is scalar weak convergence on each fixed vector, SOT is finer than WOT, and the weak topology is generated by bounded linear functionals. The operator norm satisfies $\|T\xi\|\le\|T\|\|\xi\|$ and is submultiplicative ([[def-strong-and-weak-operator-topologies]], [[def-weak-topology-on-a-normed-space]], [[def-operator-norm]]).

[F5] Under AC, the real dominated-extension principle HB is available. For a convex subset of a real or complex normed space, its norm and weak closures coincide when HB holds ([[def-hahn-banach-extension-principle-relative]], [[thm-hahn-banach-dominated-extension]], [[thm-norm-closed-convex-iff-weakly-closed]]).

[F6] $C_0(\mathbb R)$ consists of the continuous functions whose sets $\{x:|f(x)|\ge\varepsilon\}$ are compact, which is exactly the condition for extension by $0$ to the one-point compactification. Each $x\in\mathbb R$ has compact interval neighborhood $[x-1,x+1]$ containing $B(x,1)$ by Heine–Borel, and the metric makes $\mathbb R$ Hausdorff; hence $\mathbb R^*$ is compact Hausdorff. A unital self-adjoint point-separating complex function algebra on a compact Hausdorff space is uniformly dense ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[def-one-point-compactification]], [[def-locally-compact-space]], [[def-hausdorff-space]], [[def-metric-topology]], [[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-interval]], [[thm-heine-borel-r]], [[thm-metric-hausdorff-separation]], [[thm-one-point-compactification-properties]], [[thm-complex-stone-weierstrass-self-adjoint]]).

[F7] Bounded self-adjoint operators have a continuous functional calculus with the supremum norm, and their Borel calculus, as defined in [[def-borel-functional-calculus-for-a-bounded-normal-operator]], satisfies $\|f(T)\xi\|^2=\int|f|^2\,dE_\xi$. A continuous function vanishing at $0$ applied to an element of a nonunital C*-algebra stays in that algebra ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]], [[thm-borel-functional-calculus-for-bounded-normal-operators]], [[lem-c-star-positive-calculus-and-order-estimates]]).

[F8] Finite-dimensional subspaces of a normed space are closed, and finite-dimensional inner-product spaces have orthonormal bases. The finite Hilbert direct sum has the sum norm, and under Countable Choice, every closed subspace has an orthogonal decomposition and its orthogonal projection is its unique orthogonal-component map ([[cor-finite-dimensional-subspaces-are-closed]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[def-hilbert-direct-sum-of-unitary-representations]], [[def-hilbert-orthogonal-projection]], [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-hilbert-space-adjoint]]).

[F9] The image of a star-homomorphism is closed and is isometric to the quotient by its kernel with the quotient norm. A GNS representation is nondegenerate and is irreducible exactly when its state is pure ([[lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra]], [[lem-c-star-state-gns-purity-and-polish-state-space]]).

[F10] A state is a positive bounded linear functional of norm one, a unitary in a unital C*-algebra satisfies $u^*u=uu^*=1$, and the minimal unitization supplies the unitary group used in unitary equivalence of states ([[def-c-star-algebra]], [[def-state-on-a-c-star-algebra]], [[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]], [[thm-minimal-c-star-unitization]]).

[F11] Hilbert pairings are linear in the first variable. If $\alpha=\langle\xi,\eta\rangle\ne0$, then $z=\alpha/|\alpha|$ satisfies $|z|=1$ and $\langle\xi,z\eta\rangle=\overline z\alpha=|\alpha|$; if $\alpha=0$, use $z=1$ ([[def-hilbert-space-adjoint]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F12] The complex exponential satisfies $e^{i0}=1$ and $e^{i\pi}=-1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Proof technique:** direct.

**Given:** AC, $D$, $H$, $M$, and the state/GNS data where invoked.

1.1 If $H=\{0\}$, then $D=M=\{0\}$, the density statements are equalities, and the finite-vector prescription is the empty/zero case. The unit-vector clause is vacuous; the separate pure-state claims use nonzero GNS carriers. For the operator arguments below assume $H\ne\{0\}$. Let $(e_\lambda)$ be a positive contractive approximate unit of $D$ from [F2]. For every $d\in D$ and $\xi\in H$, $\|(I-e_\lambda)d\xi\|\le\|d-e_\lambda d\|\|\xi\|\to0$. Finite linear combinations of vectors $d\xi$ are dense by nondegeneracy, while $\|I-e_\lambda\|\le\|I\|+\|e_\lambda\|\le2$; approximating an arbitrary vector by such a finite combination therefore gives $e_\lambda\to I$ strongly. [F1, F2, given]

1.2 We first show that if $x_\alpha=x_\alpha^*\in D$ converges strongly to $x=x^*\in M$, then $h(x_\alpha)\to h(x)$ strongly for every $h\in C_0(\mathbb R)$ with $h(0)=0$. By [F6], $K=\mathbb R^*$ is compact Hausdorff, and every $C_0(\mathbb R)$ function extends continuously to $K$ by value $0$ at infinity. The resolvent functions $r_\pm(t)=(t\pm i)^{-1}$ also extend continuously by $0$: their positive superlevel sets are closed bounded intervals, hence compact. These functions generate a unital self-adjoint point-separating algebra: $r_+$ separates finite real points and is nonzero at every finite point, whereas both vanish at infinity. Stone–Weierstrass makes their *-polynomials dense in $C(K)$. If $p$ approximates the extension of $h$, replace it by $q(t)=p(t)-p(\infty)-(p(0)-p(\infty))/(1+t^2)$; then $q(0)=q(\infty)=0$ and $q$ still approximates $h$ arbitrarily well. For self-adjoint $y\in D$, $r_\pm(y)=(y\pm iI)^{-1}\in\widetilde D$ and the scalar quotient of $q(y)\in\widetilde D$ is $q(0)=0$, so $q(y)\in D$. The resolvent identity $r_+(x_\alpha)-r_+(x)=r_+(x_\alpha)(x-x_\alpha)r_+(x)$ and its $r_-$ analogue, with all resolvent norms at most one, show strong convergence of each resolvent; finite products of uniformly bounded strongly convergent operators converge strongly. Uniform approximation by $q$ now gives $h(x_\alpha)\to h(x)$ strongly. [F1, F3, F6, F7]

1.3 An irreducible *-representation $\pi$ has scalar commutant. Indeed, if a self-adjoint $S\in\pi(A)'$ were nonscalar, choose disjoint neighborhoods of two points of $\sigma(S)$ and continuous nonnegative functions supported there and nonzero at those points. Their functional-calculus operators are nonzero, orthogonal, and commute with $\pi(A)$; the closure of the range of one is a nonzero proper invariant subspace, a contradiction. Taking real and imaginary parts handles every element of the commutant. A nonzero intertwiner between irreducible representations then has $V^*V$ and $VV^*$ scalar; normalizing $V$ gives an isometry whose range projection is a nonzero scalar projection, hence the identity, so the intertwiner is unitary. Thus inequivalent irreducible representations have zero off-diagonal intertwiners. [F7]

2.1 First let $\mathcal A$ be any unital $*$-subalgebra of $\mathcal B(H)$, let $T\in\mathcal A''$, and fix a nonempty finite tuple $\xi=(\xi_1,\ldots,\xi_n)$. On $H^{\oplus n}$ put $C=\overline{\{(a\xi_1,\ldots,a\xi_n):a\in\mathcal A\}}$ and let $P$ be its orthogonal projection by [F1,F8]. The linear subspace $C$ is invariant under every diagonal $a^{\oplus n}$ and its adjoint, so its orthogonal complement is invariant too; hence $P$ commutes with $a^{\oplus n}$. Each block $P_{ij}$ therefore commutes with every $a\in\mathcal A$, so $P_{ij}\in\mathcal A'$. Thus $T^{\oplus n}$ commutes with $P$. Since $I\in\mathcal A$, the tuple $\xi$ lies in $C$, and consequently $T^{\oplus n}\xi=P T^{\oplus n}\xi\in C$. By the definition of closure, one $a\in\mathcal A$ approximates $T$ on the whole tuple to any prescribed tolerance; the empty tuple is vacuous. Apply this argument to $\widetilde D=D+\mathbb C I$, with $\widetilde D=D$ when unital: $\widetilde D'=D'$ and $\widetilde D''=M$. Given a tuple and $\varepsilon>0$, choose $r=d+\lambda I\in\widetilde D$ with $\|(T-r)\xi_j\|<\varepsilon/2$. Step 1.1 supplies $e_\mu$ with $|\lambda|\|(I-e_\mu)\xi_j\|<\varepsilon/2$ for every $j$, so $d+\lambda e_\mu\in D$ approximates $T$ on the tuple within $\varepsilon$. Thus $D$ is strongly dense in $D''=M$; the reverse closure inclusion holds because $D''$ is WOT closed and hence SOT closed. [F1, F2, F3, F4, F8, step 1.1, construct]

3.1 If $c=c^*\in M$, step 2.1 gives a net $d_\alpha\in D$ with $d_\alpha\to c$ in WOT by [F4]. For all $\xi,\eta\in H$, $\langle d_\alpha^*\xi,\eta\rangle=\overline{\langle d_\alpha\eta,\xi\rangle}\to\overline{\langle c\eta,\xi\rangle}=\langle c^*\xi,\eta\rangle$, so $d_\alpha^*\to c^*$ in WOT. Since $D$ is *-closed, $a_\alpha=(d_\alpha+d_\alpha^*)/2$ lies in $D_{\rm sa}$ and converges WOT to $c$. For a finite tuple $\xi_1,\ldots,\xi_n$, coordinate testing then gives weak convergence of $(a_\alpha\xi_1,\ldots,a_\alpha\xi_n)$ to $(c\xi_1,\ldots,c\xi_n)$ in $H^{\oplus n}$. Thus the real-linear image $\{(a\xi_1,\ldots,a\xi_n):a\in D_{\rm sa}\}$ is convex and the target tuple lies in its weak closure. [F4, F8, step 2.1]

4.1 By [F5], the norm and weak closures of that convex image agree. Hence for every finite tuple and tolerance there is $a\in D_{\rm sa}$ with $\|(a-c)\xi_j\|<\varepsilon$ for all $j$. This proves strong density of $D_{\rm sa}$ in $M_{\rm sa}$. [F5, step 3.1]

5.1 Let $g(t)=\max(-1,\min(t,1))$. Choose $R\ge1$ and a continuous cutoff $\chi_R$ equal to $1$ on $[-R,R]$, zero outside $[-2R,2R]$, and between $0$ and $1$, and set $h_R=g\chi_R$. Then $h_R\in C_0(\mathbb R)$, $h_R(0)=0$, and $|g(t)-h_R(t)|\le2|t|/R$. For a self-adjoint $y$ and vector $\xi$, [F7] gives $\|(g-h_R)(y)\xi\|\le2\|y\xi\|/R$. Fix a finite tuple and a self-adjoint contraction $c\in M$. By step 4.1 choose a net $y_\alpha\in D_{\rm sa}$ with $y_\alpha\to c$ strongly; the finitely many $\|y_\alpha\xi_j\|$ are eventually bounded. First take $R$ large, then $\alpha$ large, and use step 1.2 with $h_R(c)=g(c)=c$ (since $\sigma(c)\subseteq[-1,1]\subseteq[-R,R]$) to obtain $g(y_\alpha)\to c$ on the tuple. Since $g(0)=0$, [F7] puts $g(y_\alpha)\in D_{\rm sa}$, and $\|g(y_\alpha)\|\le1$. Thus the self-adjoint unit ball of $D$ is strongly dense in that of $M$. [F7, step 4.1, step 1.2]

6.1 For $T\in M$ with $\|T\|\le1$, on $H\oplus H$ form the self-adjoint contraction $X=\begin{pmatrix}0&T\\T^*&0\end{pmatrix}$. Let $D_2$ be the block operators in $\mathcal B(H\oplus H)$ with all four entries in $D$. Block operations and adjoints preserve $D_2$, and it is norm closed because each entry is a contractive compression and $D$ is norm closed; it inherits the C*-identity from $\mathcal B(H\oplus H)$. The block diagonal $\operatorname{diag}(e_\lambda,e_\lambda)$ and step 1.1 show that $D_2$ is nondegenerate. It is strongly dense in $M_2(M):$ for any $\varepsilon>0$ and finite tuple $\zeta^k=(\xi_1^k,\xi_2^k)$, step 2.1 lets each of the four entries approximate its target block on the corresponding finite coordinate list with error less than $\varepsilon/4$. Each output coordinate error is then less than $\varepsilon/2$, so the direct-sum error is less than $\varepsilon/\sqrt2<\varepsilon$. The algebra $M_2(M)$ is WOT closed because each block is recovered by a WOT-continuous coordinate compression and $M$ is WOT closed. Let $D_2^\sim=D_2$ when unital and $D_2+\mathbb C I_{H\oplus H}$ otherwise. By [F3], this is a unital C*-algebra between $D_2$ and $M_2(M)$, so it has the same SOT closure $M_2(M)$. Step 2.1 applied to the nondegenerate concrete C*-algebra $D_2$ shows that its SOT closure is $D_2''$. The preceding density and WOT closedness therefore give $D_2''=M_2(M)$. Apply step 5.1 to approximate $X$ strongly on vectors $(0,\xi)$ by self-adjoint contractions $Y_\alpha=\begin{pmatrix}a_\alpha&b_\alpha\\b_\alpha^*&d_\alpha\end{pmatrix}$ in $D_2$. Compression to the upper-right corner gives $\|b_\alpha\|\le\|Y_\alpha\|\le1$ and $b_\alpha\xi\to T\xi$ for every fixed $\xi$. Hence the unit ball of $D$ is strongly dense in the unit ball of $M$. [F2, F3, F4, F8, step 1.1, step 2.1, step 5.1]

6.2 Assume now $M=\mathcal B(H)$. The span of the prescribed finite tuple is finite-dimensional, hence closed by [F8]; let $p$ be its orthogonal projection and let $r=r^*\in\mathcal B(H)$ be the target self-adjoint operator. If $p=0$, take $a=0$. Otherwise, the self-adjoint operator $b=prp+(I-p)rp+pr(I-p)$ agrees with $r$ on $pH$ and satisfies $\|b\|\le3\|rp\|$: each of its three terms has norm at most $\|rp\|$, and the last two are adjoints. If $\|rp\|=0$ choose $a=0$. Otherwise put $L=3\|rp\|>0$. By [F8], choose an orthonormal basis $u_1,\ldots,u_m$ of $pH$, where $m\ge1$. Apply the self-adjoint unit-ball conclusion of step 5.1 to $b/L$ on this basis, choosing a self-adjoint contraction $d\in D$ with $\|(d-b/L)u_k\|<1/(2L\sqrt m)$ for each $k$. Set $a_0=0$, $a_1=Ld$ and define $r_0=r$, $r_1:=r-a_1$. Then $a_1\in D_{\rm sa}$ and $\|a_1\|\le3\|rp\|$. For any unit $v=\sum_{k=1}^m\alpha_ku_k\in pH$, Cauchy–Schwarz gives $\sum_k|\alpha_k|\le\sqrt m$, so $\|(b-a_1)v\|<L\sqrt m/(2L\sqrt m)=1/2$; hence $\|r_1p\|=\|(b-a_1)p\|<1/2$. Recursively, each residual remains self-adjoint; for $n\ge1$, if $r_np=0$, set $a_{n+1}=0$ and $r_{n+1}=r_n$. Otherwise put $b_n=pr_np+(I-p)r_np+pr_n(I-p)$ and $L_n=3\|r_np\|$, so $b_n=b_n^*$, $b_np=r_np$, and $\|b_n\|\le L_n$. Use the self-adjoint unit-ball conclusion of step 5.1 on $b_n/L_n$ and the same basis, choosing a self-adjoint contraction $d_n\in D$ with $\|(d_n-b_n/L_n)u_k\|<2^{-n-1}/(L_n\sqrt m)$; set $a_{n+1}=L_nd_n$ and $r_{n+1}:=r_n-a_{n+1}$. The same coordinate estimate gives $\|r_{n+1}p\|=\|(b_n-a_{n+1})p\|<2^{-n-1}$ and $\|a_{n+1}\|\le3\|r_np\|$. Thus $\|r_np\|<2^{-n}$ for every $n\ge1$, and $\sum_{n\ge1}\|a_{n+1}\|<\infty$. By [F1] choose this sequence recursively. The norm-convergent sum $a=\sum_{n\ge1}a_n\in D_{\rm sa}$ satisfies $r_np=(r-\sum_{j=1}^n a_j)p\to0$, hence $ap=rp$ and realizes the exact prescription. [F1, F4, F8, step 5.1]

6.3 Let $\phi,\psi$ be pure states with inequivalent GNS representations and cyclic unit vectors $\xi_\phi,\xi_\psi$. The direct-sum image $\Delta(A)=\{\pi_\phi(a)\oplus\pi_\psi(a):a\in A\}$ is a concrete C*-algebra by [F9]. Choose a positive contractive approximate unit $(e_\lambda)$ of $A$ by [F2]. Each GNS representation is nondegenerate [F9]; contractivity [F7] makes $\pi_\phi(e_\lambda)$ and $\pi_\psi(e_\lambda)$ approximate units of their image algebras, so step 1.1 gives strong convergence to the identities on their respective carriers. Hence $\Delta(e_\lambda)\to I$ strongly and $\Delta(A)$ is nondegenerate. By [F9] the two pure GNS representations are irreducible. A block operator in its commutant has diagonal blocks in the two scalar commutants and off-diagonal blocks intertwining the two representations; step 1.3 makes the latter zero. Thus its commutant is $\mathbb C I\oplus\mathbb C I$, so its bicommutant is $\mathcal B(H_\phi)\oplus\mathcal B(H_\psi)$ and contains $I\oplus(-I)$. Apply step 5.1 to approximate this self-adjoint contraction by self-adjoint contractions $d\in\Delta(A)$ on $(\xi_\phi,\xi_\psi)$; their expectations approach $1$ and $-1$. Write $d=\Delta(a)$; then the coset $a+J$, where $J=\ker\Delta$, has quotient norm at most one. Since $d=d^*$, $a^*-a\in J$. By [F9] choose a representative $b$ of this coset with $\|b\|\le1+\varepsilon$; replacing it by $(b+b^*)/2$ keeps it in the same coset and does not increase its norm. Both states vanish on $J$, so their difference on this self-adjoint representative is the same as on $a$ and approaches $2$. Rescaling it to the unit ball and letting the approximation error and $\varepsilon$ tend to zero gives $\|\phi-\psi\|\ge2$; the reverse bound follows because both states have norm one. [F2, F7, F8, F9, step 1.1, step 5.1, step 1.3]

7.1 For the interval clause, include the stated orthonormal eigenvectors in the finite tuple of step 6.2, so its $a$ agrees with $r$ on all of them. Apply to this $a$ the continuous map that clips each real number to the nearest point of $J$ (an infinite endpoint imposes no clipping on that side). This map fixes every point of $J$ and sends $0$ to $0$. Thus $f(0)=0$, $f(a)\in D_{\rm sa}$, its spectrum is contained in $J$, and $f(a)\xi_j=f(\lambda_j)\xi_j=\lambda_j\xi_j$ on each selected eigenvector. [F7, step 6.2]

8.1 Assume $M=\mathcal B(H)$. For unit vectors $\xi,\eta\in H$, choose $z$ as in [F11], so $\langle\xi,z\eta\rangle$ is real. If $\xi$ and $z\eta$ are collinear, the identity unitary carries one to the other up to phase. Otherwise $\xi+z\eta$ and $\xi-z\eta$ are nonzero orthogonal vectors. The self-adjoint operator $r=\pi P_{\mathbb C(\xi-z\eta)}$ has eigenvalues $0$ and $\pi$ on their respective spans. Step 6.2 realizes these values by some $a\in D_{\rm sa}$; step 7.1 clips it to $[0,\pi]$ without changing them. By [F12], its exponential $u=e^{ia}\in U(D^\sim)$ fixes $\xi+z\eta$ and negates $\xi-z\eta$, so $u\xi=z\eta$. For $D=\pi(A)$, closedness of the image in [F9] gives a self-adjoint preimage $h\in A$ of $a$ by self-adjointizing any preimage; the unital extension $A^\sim\to\mathcal B(H)$, $b+\lambda1\mapsto\pi(b)+\lambda I$, is a $*$-homomorphism, so its continuous functional calculus sends $e^{ih}$ to $u$. [F7, F8, F9, F11, F12, step 6.2, step 7.1]

8.2 For orthogonal unit vectors in one irreducible carrier, [F9] and step 1.3 give $D\prime=\mathbb C I$ and hence $D\prime\prime=\mathcal B(H)$. Apply step 6.2 to the self-adjoint operator with eigenvalues $1$ and $-1$ on those vectors, then step 7.1 with $J=[-1,1]$. The resulting self-adjoint contraction $d\in D$ has vector-state values $1$ and $-1$. The vector functionals on $A$ are states: contractivity gives norm at most one, and a positive contractive approximate unit converges strongly to $I$ by step 1.1, so their norms are at least one. If $D=\pi(A)$, lift $d$ to a self-adjoint representative in $A$ of norm at most $1+\varepsilon$ using the quotient norm as in step 6.3; rescaling and letting $\varepsilon\downarrow0$ proves that the two states have norm distance $2$. [F2, F8, F9, step 1.1, step 6.2, step 7.1, step 6.3]

9.1 If pure states $\phi,\psi$ have norm distance less than $2$, step 6.3 shows their GNS representations cannot be inequivalent. By [F9] the GNS representation $\pi_\phi$ is irreducible, so step 1.3 gives $\pi_\phi(A)'=\mathbb C I$ and $\pi_\phi(A)''=\mathcal B(H_\phi)$. Let $U$ be a unitary intertwiner and put $\eta=U^*\xi_\psi$ in the carrier of $\pi_\phi$; then $\psi$ is the vector state of $\eta$. The construction of step 8.1 gives a self-adjoint $h\in\pi_\phi(A)$ whose exponential sends $\xi_\phi$ to a phase multiple of $\eta$. By [F9], $\pi_\phi(A)$ is closed; choose a preimage $b\in A$ of $h$ and replace it by its self-adjoint part $b_{\rm sa}$. The representation extends to the minimal unitization by $\pi_\phi^\sim(a+\lambda1)=\pi_\phi(a)+\lambda I$ (with the unital case unchanged); this is a unital $*$-homomorphism, so [F7] gives $\pi_\phi^\sim(e^{ib_{\rm sa}})=e^{ih}$. Thus $v=e^{ib_{\rm sa}}\in U(A^\sim)$ implements the same vector transport. The phase cancels in a vector state, giving $\psi=\phi\circ\operatorname{Ad}(v^*)$. [F7, F9, F10, step 8.1, step 6.3] ∎

## Source notes

Farah's Theorem 3.1.9 states Kaplansky density and sketches clipping; this item proves the required SOT convergence for possibly unbounded approximating nets through resolvents and a vectorwise spectral-tail bound. The proof of Farah's Theorem 3.4.2 (printed p. 97, PDF p. 126) writes the residual after the first correction without the initial $a_0$; the local proof defines each residual as $r_n=r-\sum_{j\le n}a_j$. The author's 2025 errata, PDF p. 3, corrects an inequality in Lemma 3.4.3; the local proof uses the explicit factor-3 extension instead of matrix completion. These source arguments are context, not proof substitutes.
