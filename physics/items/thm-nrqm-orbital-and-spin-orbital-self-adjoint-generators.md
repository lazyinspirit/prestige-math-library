---
id: thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators
aliases: [ nrqm-orbital-and-spin-orbital-self-adjoint-generators ]
kind: theorem
domain: mathematics
title: "Orbital self-adjoint generators"
status: draft
origin: pipeline
dependency_level: 8
deps:
  [
    thm-nrqm-orbital-and-spin-strongly-continuous-rotation-action,
    thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain,
    thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension,
    thm-nrqm-orbital-and-spin-associated-polynomial-normalization,
    def-infinitesimal-generator-of-a-unitary-group,
    def-strongly-continuous-one-parameter-unitary-group,
    def-self-adjoint-and-normal-endomorphism,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-densely-defined-closed-and-closable-operator,
    def-orthogonal-projection,
    def-orthogonality-and-orthogonal-complement,
    def-hilbert-space,
    def-inner-product-space,
    cor-inner-product-induces-a-norm,
    cor-cauchy-schwarz-inequality-for-l-two,
    thm-parseval-equivalences-for-a-complete-orthonormal-family,
    def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis,
    def-directional-and-partial-derivatives,
    def-laplacian-of-a-c2-function,
    def-ck-euclidean-maps-and-diffeomorphisms,
    thm-ck-euclidean-maps-closed-under-algebra-and-composition,
    thm-chain-rule-for-total-derivatives,
    thm-total-derivative-computes-directional-and-partial-derivatives,
    thm-ftc-second-part,
    cor-compact-domain-maps-are-uniformly-continuous,
    thm-sine-and-cosine-addition-formulas,
    thm-sine-and-cosine-derivatives,
    cor-trigonometric-parity-and-pythagorean-identity,
    thm-sine-cosine-signs-monotonicity-and-ranges,
    def-pi-via-first-positive-cosine-zero,
    cor-pi-is-the-first-positive-sine-zero,
    lem-cm-skew-matrix-cross-product-correspondence,
    lem-cm-cross-product-triple-identity,
    def-cross-product-in-r3,
    lem-cm-so3-is-a-matrix-group,
    def-cm-special-orthogonal-group,
    def-matrix-product-and-identity-matrix,
    def-transpose-of-a-matrix,
    thm-matrix-multiplication-laws,
    thm-determinant-multiplicative,
    def-determinant-of-a-square-matrix,
    cor-determinant-is-a-polynomial-in-the-matrix-entries,
    def-metric-continuity,
    def-complex-exponential,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-complex-lp-and-euclidean-test-function-conventions,
    def-linear-subspace,
    def-linear-map,
    def-countable-choice,
    thm-algebra-of-derivatives,
    thm-nrqm-orbital-and-spin-sphere-onb
  ]
dependency_roles:
  thm-nrqm-orbital-and-spin-strongly-continuous-rotation-action: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  def-infinitesimal-generator-of-a-unitary-group: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-orthogonal-projection: mathematical-premise
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  cor-compact-domain-maps-are-uniformly-continuous: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  def-pi-via-first-positive-cosine-zero: mathematical-premise
  cor-pi-is-the-first-positive-sine-zero: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cm-cross-product-triple-identity: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  thm-matrix-multiplication-laws: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  cor-determinant-is-a-polynomial-in-the-matrix-entries: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-linear-map: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 4,
        §4.1.3 'The rotation operator' (unitary rotation operator, Hermitian
        generators, U = exp(-i alpha . J)), printed pp. 62-63"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum',
        §1.2 'Properties of angular momentum' (Hermitian angular-momentum
        operators, commutation algebra, operators as vectors under rotations)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2f\
        d50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Use the notation of
[[thm-nrqm-orbital-and-spin-strongly-continuous-rotation-action]]: $S^2$, the polar measure $\sigma$ with
$\sigma(S^2)=4\pi$, the Hilbert space $L^2(S^2,\sigma)$, the complete orthonormal family $(Y_{lm})$, the blocks
$V_l$, the finite span $H$, the spaces $H_l^{\mathrm{pol}}$ of complex harmonic homogeneous polynomials of degree
$l$, the restriction maps $\mathrm{res}_l$, and the unitary action $U(R)F=\text{class of }\tilde F(R^{-1}\cdot)$
of $SO(3)$. Fix $\hbar>0$ and for $i=1,2,3$ define the rotation matrices
$$R_1(t):=\begin{pmatrix}1&0&0\\0&\cos t&-\sin t\\0&\sin t&\cos t\end{pmatrix},\quad R_2(t):=\begin{pmatrix}\cos t&0&\sin t\\0&1&0\\-\sin t&0&\cos t\end{pmatrix},\quad R_3(t):=\begin{pmatrix}\cos t&-\sin t&0\\ \sin t&\cos t&0\\0&0&1\end{pmatrix},$$
put $U_i(t):=U(R_i(t))$. Let $L_z$ denote the diagonal operator of
[[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]], set $S:=R_2(-\pi/2)$, $W:=R_1(\pi/2)$,
and define
$$L_3:=L_z,\qquad L_1:=U(S)^{-1}L_zU(S),\qquad L_2:=U(W)^{-1}L_zU(W),$$
with domains $D(L_1)=U(S)^{-1}D(L_z)$, $D(L_2)=U(W)^{-1}D(L_z)$ and $D(L_3)=D(L_z)$.
Here $e^{-itL_z/\hbar}$ is the explicit diagonal unitary sending $Y_{lm}$ to $e^{-itm}Y_{lm}$;
$e^{-itL_1/\hbar}$ and $e^{-itL_2/\hbar}$ mean its conjugates by $U(S)$ and $U(W)$, respectively.
The proof identifies these operators with the complete strong derivative generators, so this construction
has the same generator meaning without an appeal to an unrestricted spectral or Stone theorem. For a polynomial $p$ put
$$D_ip:=(x\times\nabla p)_i=\sum_{j,k=1}^3\varepsilon_{ijk}\,x_j\,\partial_kp,$$
where $\varepsilon_{ijk}$ is the sign of the permutation $(1,2,3)\mapsto(i,j,k)$ and is $0$ when two indices
coincide. Then:

(a) each $L_i$ is a self-adjoint operator on $L^2(S^2,\sigma)$ with $U(R_i(t))=e^{-itL_i/\hbar}$ for all real
$t$; the finite span $H$ is contained in $D(L_i)$ and is a core of $L_i$
([[def-densely-defined-closed-and-closable-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]);
and for $F\in V_l$ with polynomial representative $p_F\in H_l^{\mathrm{pol}}$ one has
$$L_iF=\mathrm{res}_l(-i\hbar\,D_ip_F),$$
that is, $(L_iF)(\Omega)=-i\hbar\,D_ip_F(\Omega)$ for $\sigma$-almost every $\Omega\in S^2$; in particular
$L_iY_{lm}\in V_l$ for all $l,m$ and $L_iH\subseteq H$;

(b) on $H$ the operators satisfy the commutation relations
$$L_iL_j-L_jL_i=i\hbar\sum_{k=1}^3\varepsilon_{ijk}L_k;$$

(c) $L_3=L_z$ as self-adjoint operators (equal domains and equal action); in particular $L_3Y_{lm}=\hbar mY_{lm}$, so that
$L_3$ is diagonal in the basis $(Y_{lm})$, and for every $F\in H$ and chart point $(\theta,\varphi)$ one has $(L_3F)(\theta,\varphi)=-i\hbar\,\partial_\varphi F(\theta,\varphi)$;

(d) rotational conjugation identifies the domains: with the two quarter-turn rotations
$S:=R_2(-\pi/2)$ and $W:=R_1(\pi/2)$ one has
$$U(S)L_1U(S)^{-1}=L_3,\qquad U(W)L_2U(W)^{-1}=L_3,$$
as self-adjoint operators, and consequently $U(S)D(L_1)=D(L_3)$ and $U(W)D(L_2)=D(L_3)$: the three domains
are unitarily identified.

All assertions are mathematical statements about operators on $L^2(S^2,\sigma)$; no physical interpretation of
the generators as angular momentum is asserted, and no measurement postulate is used.

## Facts & Assumptions

**Given:** the sphere, its measure, the harmonic basis, the blocks $V_l$, their finite span $H$, the rotation action, $\hbar>0$, and the matrices and explicitly defined operators in the Statement. Inner products are linear in the first argument.

[F1] [[thm-nrqm-orbital-and-spin-strongly-continuous-rotation-action]] supplies the unitary group law, strong continuity, $U(R)V_l=V_l$, $U(R)H=H$ and polynomial intertwining. [[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] supplies the complex restriction isomorphism $\mathrm{res}_l:H_l^{\mathrm{pol}}\to V_l$.

[F2] [[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]] supplies $L_zY_{lm}=\hbar mY_{lm}$ with full domain $\{F:\sum_{l,m}m^2|\langle F,Y_{lm}\rangle|^2<\infty\}$. [[thm-nrqm-orbital-and-spin-sphere-onb]] and Parseval give the complete countable basis, mutually orthogonal blocks and convergence of $P_{\le N}:=\sum_{l\le N}P_l$ to the identity. [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] gives the azimuthal factor $e^{im\varphi}$, also for negative $m$ by $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$.

[F3] Direct multiplication of the displayed matrices, the sine/cosine addition and derivative formulas, and the quarter-turn values give $R_i'(s)=J_iR_i(s)=R_i(s)J_i$, where $J_ix=e_i\times x$; $R_i(-s)'=-J_iR_i(-s)$; $SR_1(t)S^{-1}=R_3(t)$ and $WR_2(t)W^{-1}=R_3(t)$. These are finite matrix identities, not generator identities.

[F4] Polynomial chain and product rules, the fundamental theorem of calculus, and uniform continuity on compact sets apply ([[thm-chain-rule-for-total-derivatives]], [[thm-ftc-second-part]], [[cor-compact-domain-maps-are-uniformly-continuous]], [[thm-algebra-of-derivatives]]). For a continuous function $f$ on the sphere, $\|f\|_2\le\sqrt{4\pi}\|f\|_\infty$.

## Proof

1.1 [(a), the complete diagonal domain and adjoint] Write $c_{lm}=\langle F,Y_{lm}\rangle$. On the domain of [F2], Parseval defines $AF=\sum_{l,m}\hbar m c_{lm}Y_{lm}$ with convergence in norm, and finite sums prove symmetry. If $G\in D(A^*)$ and $K=A^*G$, testing $F=Y_{lm}$ in $\langle AF,G\rangle=\langle F,K\rangle$ gives $\langle K,Y_{lm}\rangle=\hbar m\langle G,Y_{lm}\rangle$. Parseval then implies $\sum\hbar^2m^2|\langle G,Y_{lm}\rangle|^2=\|K\|^2<\infty$: $G\in D(A)$ and $K=AG$. Conversely, for such $G$, the equality holds first on finite sums and then for all $F\in D(A)$ by their coefficient truncations. Thus $A=A^*$ on exactly the full domain of [F2], and $A=L_z$. For $F\in D(A)$, both $P_{\le N}F\to F$ and $AP_{\le N}F\to AF$ by the two convergent coefficient square sums; hence $H$ is a graph core. All sums use the fixed countable index family; no fiber selection or uncountable basis choice occurs. [F2, algebra]

2.1 [(a),(d), adjoints and cores of the conjugates] If $Q$ is either $U(S)$ or $U(W)$, define $B=Q^{-1}AQ$ on $Q^{-1}D(A)$. For $G,K$, the adjoint identity $\langle BF,G\rangle=\langle F,K\rangle$ for every $F\in Q^{-1}D(A)$ is, on putting $X=QF$, exactly $\langle AX,QG\rangle=\langle X,QK\rangle$ for every $X\in D(A)$. By step 1.1 this holds exactly when $QG\in D(A)$ and $QK=AQG$. Thus $B^*=B$ with this full domain. Since $QH=H$, unitary transport of the graph approximations in step 1.1 gives $H$ as a core of $B$. With $L_3=A$, this proves self-adjointness, cores and the two stated conjugation/domain identities. [step 1.1, F1, algebra]

2.2 [(a), explicit groups and the full derivative domains] Define $E(t)F=\sum e^{-itm}c_{lm}Y_{lm}$. Parseval proves unitarity and the group law. For each $F$, a finite coefficient truncation controls the tail by $2\|F-P_{\le N}F\|$ and its finite head is continuous, proving strong continuity. If $F\in D(A)$, $|(e^{-itm}-1)/t|\le |m|$ and convergence on finite heads with square-summable weighted tails give $(E(t)F-F)/t\to-iAF/\hbar$. Conversely, if the quotient converges in norm to $G$, each coefficient tends to $-imc_{lm}$; Parseval for $G$ gives $\sum m^2|c_{lm}|^2=\|G\|^2<\infty$ and $G=-iAF/\hbar$. Thus this is exactly the full strong derivative domain, not merely a core calculation. The same argument transported by $Q$ gives exactly $D(Q^{-1}AQ)$ for $Q^{-1}E(t)Q$, with derivative $-iQ^{-1}AQF/\hbar$. [step 1.1, F2, algebra]

3.1 [(a),(c), identification with the actual rotation groups] Pullback by $R_3(t)^{-1}$ replaces $\varphi$ by $\varphi-t$. Therefore $U_3(t)Y_{lm}=e^{-itm}Y_{lm}$ for every integer $m$ by [F2], including negative $m$ with its conjugation phase. Equality on the dense finite span, and boundedness, imply $U_3(t)=E(t)$ on all $L^2$. The two finite matrix identities in [F3], transported by the group law, imply $U_1(t)=U(S)^{-1}E(t)U(S)$ and $U_2(t)=U(W)^{-1}E(t)U(W)$. These are precisely the explicitly defined exponentials in the Statement. Step 2.2 gives the exact derivative domains for all three groups and their actions $-iL_i/\hbar$; it also proves uniqueness if an operator is defined by the strong derivative. In particular $L_3=L_z$ as full operators, without an AC Stone premise. [step 2.2, F1, F2, F3, algebra]

4.1 [(a), polynomial differentiation with the correct inverse-curve sign] For $F=\mathrm{res}_l(p)\in V_l$, set $g_i(s,\Omega)=\nabla p(R_i(-s)\Omega)\cdot J_iR_i(-s)\Omega$. The correct chain derivative is $\frac{d}{ds}p(R_i(-s)\Omega)=-g_i(s,\Omega)$, directly from $R_i(-s)'=-J_iR_i(-s)$ in [F3]. The fundamental theorem gives $(U_i(t)F-F)/t=-t^{-1}\int_0^t g_i(s,\cdot)\,ds$. Uniform continuity on $[-\delta,\delta]\times S^2$ proves convergence uniformly, and hence in $L^2$, to $-g_i(0,\cdot)=-D_ip|_{S^2}$. By step 2.2, $F\in D(L_i)$ and $-iL_iF/\hbar=-\mathrm{res}(D_ip)$, so $L_iF=\mathrm{res}(-i\hbar D_ip)$. The curve $p\circ R_i(-t)$ lies in the finite-dimensional polynomial space $H_l^{\mathrm{pol}}$ by [F1]; its coefficientwise derivative at zero also lies there, because homogeneity and the harmonic equations are finite linear coefficient constraints. This derivative is $-D_ip$, proving that $D_ip$ is harmonic homogeneous of degree $l$, including the zero polynomial. Thus $L_iV_l\subseteq V_l$ and $L_iH\subseteq H$. [step 2.2, step 3.1, F1, F3, F4, algebra]

5.1 [(a), finite blocks and their ODE identification] Put $A_i^{(l)}=L_i|_{V_l}$. This is an everywhere-defined Hermitian matrix: symmetry follows from self-adjointness on the whole space and $V_l\subseteq D(L_i)$. The quarter turns preserve $V_l$, so $A_1^{(l)}$ and $A_2^{(l)}$ are unitarily conjugate to the diagonal $A_3^{(l)}$ with entries $\hbar m$. Consequently $\|A_i^{(l)}\|\le\hbar l$. Polynomial differentiation at time $t$, or the finite group law and step 4.1, gives $(U_i(t)|_{V_l})'=(-i/\hbar)A_i^{(l)}U_i(t)|_{V_l}$ with initial value the identity. The absolutely convergent matrix exponential power series solves this equation; uniqueness follows by differentiating its inverse times any other solution. Hence the finite polynomial action equals $\exp(-itA_i^{(l)}/\hbar)$. Orthogonal block truncation then identifies its all-vector extension with the groups of step 3.1. Explicitly $D(L_i)=\{F:\sum_l\|A_i^{(l)}P_lF\|^2<\infty\}$ and $L_iF=\sum_l A_i^{(l)}P_lF$: this is the diagonal domain of step 1.1 transported by a block-preserving quarter turn. Thus no hidden narrower domain or additional time-continuity hypothesis is introduced. [step 1.1, step 2.1, step 3.1, step 4.1, F1, F2, algebra]

5.2 [(b), commutators] The polynomial product rule gives $[x_a\partial_b,x_c\partial_d]=x_a\delta_{bc}\partial_d-x_c\delta_{ad}\partial_b$. Substituting $D_1=x_2\partial_3-x_3\partial_2$, $D_2=x_3\partial_1-x_1\partial_3$ gives $[D_1,D_2]=-D_3$, and cyclic permutation and antisymmetry give $[D_i,D_j]=-\sum_k\varepsilon_{ijk}D_k$. All products are defined on $H$ by step 4.1. Therefore $[L_i,L_j]=(-i\hbar)^2[D_i,D_j]=\hbar^2\sum_k\varepsilon_{ijk}D_k=i\hbar\sum_k\varepsilon_{ijk}L_k$. [step 4.1, F4, algebra]

6.1 [(c), the chart action] The chain rule gives $\partial_\varphi p(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)=\nabla p(\Omega)\cdot(e_3\times\Omega)=D_3p(\Omega)$. Apply step 4.1 and linearity to finite harmonic sums. Together with the full equality $L_3=L_z$ of step 3.1 and the domain conjugations of step 2.1, this proves every clause (a)-(d). [step 2.1, step 3.1, step 4.1, F4, algebra] ∎
