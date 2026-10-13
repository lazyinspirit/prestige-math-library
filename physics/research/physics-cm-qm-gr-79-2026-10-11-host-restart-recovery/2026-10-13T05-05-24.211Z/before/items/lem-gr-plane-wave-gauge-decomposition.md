---
id: lem-gr-plane-wave-gauge-decomposition
kind: lemma
title: "Harmonic-gauge plane-wave amplitudes split uniquely into a pure plane-wave gauge part and a transverse-traceless representative, with a two-dimensional space of polarizations"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-plane-wave-perturbation, def-gr-wave-screen-and-tt-projection, lem-gr-tt-screen-projector, def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition, def-lorentz-orthogonality-and-orthogonal-complement, def-causal-classification-of-lorentz-vectors, def-rational-power, def-vector-space, def-linear-map, def-kernel-and-image-of-a-linear-map, thm-linear-kernel-image-and-injectivity, def-linear-subspace, def-internal-direct-sum, cor-dimension-of-a-direct-sum, def-dimension, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, lem-lorentz-form-has-orthonormal-basis]
dependency_roles:
  def-gr-plane-wave-perturbation: mathematical-premise
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  lem-gr-tt-screen-projector: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-rational-power: mathematical-premise
  def-vector-space: mathematical-premise
  def-linear-map: mathematical-premise
  def-kernel-and-image-of-a-linear-map: mathematical-premise
  thm-linear-kernel-image-and-injectivity: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-internal-direct-sum: mathematical-premise
  cor-dimension-of-a-direct-sum: mathematical-premise
  def-dimension: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.34)-(6.52): the harmonic-gauge transversality k^mu C_{mu nu} = 0, the residual gauge transformation (6.44) with null wave vector, the conditions C^mu{}_mu = 0 and C_{0 nu} = 0 and the two remaining components C_{11}, C_{12}, printed pp. 149-151 (PDF pp. 156-158)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.1: the count 10 - 4 - 4 = 2 independent polarisations, the residual gauge transformation (5.20) preserving de Donder gauge when Box xi = 0, and the transverse-traceless conditions (5.19)-(5.21), printed pp. 210-212 (PDF pp. 217-219)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.3: transversality k^nu H_{mu nu} = 0, the residual gauge freedom with Box xi = 0 and the polarization matrix with two constants (7.40)-(7.49), printed pp. 77-79 (PDF pp. 78-80)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its
inertial chart and let $k\ne0$ be a null covector of the flat metric
([[def-gr-minkowski-model-and-inertial-chart]],
[[def-gr-plane-wave-perturbation]]). Let $\mathcal X$ be the real vector
space of symmetric $4\times4$ matrices (amplitudes), with trace
$\operatorname{tr}X=\eta^{ab}X_{ab}$ and trace reversal
$\bar X_{ab}=X_{ab}-\tfrac12\eta_{ab}\operatorname{tr}X$. Define the three
linear subspaces

$$V_0:=\{X\in\mathcal X:k^a\bar X_{ab}=0\ \text{for }b=0,1,2,3\},\qquad G:=\{X\in\mathcal X:X_{ab}=k_aZ_b+k_bZ_a\ \text{for some }Z\in\mathbb R^4\},$$

and, for an observer $n$ and propagation direction $s$ with
$k=\omega\,(\eta(n,\cdot)+\eta(s,\cdot))$, $\omega\ne0$, the space

$$T:=T_{n,s}=\{X\in\mathcal X:X(n,\cdot)=0,\ X(s,\cdot)=0,\ \operatorname{tr}X=0\}$$

of transverse-traceless amplitudes of
[[def-gr-wave-screen-and-tt-projection]] clause (d). Then:

**(a) Adapted frames exist.** There is a future-directed unit timelike $n$
with $\eta(n,k)\neq0$; putting $\omega:=-\eta(n,k)$ and
$s:=\eta^{-1}(k)/\omega-n$ (with $\eta^{-1}(k)$ the vector metrically dual
to $k$) gives $\eta(s,s)=1$, $\eta(n,s)=0$ and
$k=\omega(\eta(n,\cdot)+\eta(s,\cdot))$, and $(n,s)$ extends to an
$\eta$-orthonormal basis $(e_0,e_1,e_2,e_3)$ of $\mathbb R^4$ with
$e_0=n$, $e_3=s$. In frame components
$k_A=k(e_A)=\omega(-1,0,0,1)$ and $k^A=\omega(1,0,0,1)$.

**(b) The two subspaces lie in $V_0$ and meet trivially.** $G\subseteq V_0$
and $T\subseteq V_0$; the map $\mathbb R^4\to G$,
$Z\mapsto(k_aZ_b+k_bZ_a)$, is a linear isomorphism, so $\dim G=4$;
$\dim T=2$; and $T\cap G=\{0\}$. Consequently $\dim V_0=6$ and
$V_0=T\oplus G$.

**(c) Unique TT representative.** For every $X\in V_0$ there is exactly one
$Z\in\mathbb R^4$ such that $X'_{ab}:=X_{ab}-k_aZ_b-k_bZ_a$ is TT; in the
frame of (a) with $X_{AB}$ the frame components of $X$, the solution is

$$Z_0=-\frac{X_{00}}{2\omega},\qquad Z_1=-\frac{X_{01}}{\omega},\qquad Z_2=-\frac{X_{02}}{\omega},\qquad Z_3=Z_0-\frac{X_{03}}{\omega}.$$

Moreover the map $\pi:V_0\to T$, $\pi(X):=X'$, is linear and satisfies
$\pi|_{T}=\operatorname{id}_T$, so the quotient $V_0/G$ is isomorphic to
$T$; with a screen basis of $T$ as in [[lem-gr-tt-screen-projector]] clause
(d), the pair $(A_+,A_\times)=(X'_{11},X'_{12})$ is a linear isomorphism
$V_0/G\to\mathbb R^2$.

**(d) Differential form of the gauge condition and the gauge
transformation.** For a single-frequency plane wave $h_{ab}=X_{ab}\cos(k\cdot x)$
with amplitude $X\in\mathcal X$, the harmonic-gauge condition
$\partial^a\bar h_{ab}=0$ of [[def-gr-flat-linearized-perturbation]] clause
(d) holds exactly when $X\in V_0$. If $X\in V_0$ and $Z$ is as in (c), the
covector field $\xi_b:=Z_b\sin(k\cdot x)$ satisfies
$\partial_a\xi_b+\partial_b\xi_a=(k_aZ_b+k_bZ_a)\cos(k\cdot x)$, so that
$h'_{ab}:=h_{ab}-\partial_a\xi_b-\partial_b\xi_a$ is the plane wave with
amplitude $X'$ and is again in harmonic gauge.

## Facts & Assumptions

**Given:** The flat model with inertial chart, a null covector $k\ne0$, and the spaces $V_0$, $G$, $T$ defined above.

[L1] The flat metric is nondegenerate of signature $(-,+,+,+)$; for every null $k\ne0$ there is a future-directed unit timelike $n$ with $\eta(n,k)\ne0$, and $(n,s)$ with the stated properties extends to an $\eta$-orthonormal basis ([[def-gr-minkowski-model-and-inertial-chart]], [[lem-lorentz-form-has-orthonormal-basis]], [[def-causal-classification-of-lorentz-vectors]], [[def-lorentz-orthogonality-and-orthogonal-complement]], [[def-rational-power]]).

[L2] In an $\eta$-orthonormal basis $(e_0,e_1,e_2,e_3)$, the matrix of the screen projector of the pair $(e_0,e_3)$ is $\operatorname{diag}(0,1,1,0)$ and the TT subspace $T$ consists of the symmetric matrices with $X_{11}=-X_{22}$, $X_{12}=X_{21}$ and all other components zero; it is two-dimensional, and the map $X\mapsto(X_{11},X_{12})$ is a linear isomorphism onto $\mathbb R^2$ ([[lem-gr-tt-screen-projector]] clauses (c)-(d), [[def-gr-wave-screen-and-tt-projection]]).

[L3] A linear map between finite-dimensional real vector spaces is injective exactly when its kernel is trivial; the dimension of an internal direct sum of finitely many subspaces is the sum of their dimensions; a subspace with a spanning set of $d$ linearly independent elements has dimension $d$ ([[def-linear-map]], [[def-kernel-and-image-of-a-linear-map]], [[thm-linear-kernel-image-and-injectivity]], [[def-linear-subspace]], [[def-internal-direct-sum]], [[cor-dimension-of-a-direct-sum]], [[def-dimension]], [[def-vector-space]]).

[L4] The chain rule gives $\partial_a\cos(k\cdot x)=-k_a\sin(k\cdot x)$ for the functions $\cos$ and $\sin$ of [[def-sine-and-cosine-by-power-series]], whose derivatives are $\cos$ and $-\sin$; derivatives of sums and products obey the usual rules ([[thm-chain-rule]], [[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]], [[def-gr-flat-linearized-perturbation]] clause (c)).

[L5] The orthogonal complement of $\operatorname{span}\{n,s\}$ is two-dimensional positive definite and admits an orthonormal basis ([[lem-gr-observer-projection-decomposition]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[def-gr-observer-and-rest-space]]).

## Proof

**Proof technique:** direct; construct an adapted orthonormal frame from the null covector, evaluate the amplitude conditions in that frame, and solve the resulting finite linear system.

1.1 (Existence of the adapted frame.) A vector $n$ with $\eta(n,k)\neq0$ and the required properties exists: choose any future unit timelike $v$; if $\eta(v,k)\neq0$ take $n:=v$; if $\eta(v,k)=0$, nondegeneracy of $\eta$ and $k\neq0$ give a vector $w$ with $\eta(w,k)\neq0$, and for small $t\neq0$ the vector $v+tw$ is future timelike and has $\eta(v+tw,k)=t\eta(w,k)\neq0$; rescaling it to unit length gives $n$ by [L1]. Put $\omega:=-\eta(n,k)\neq0$ and $s:=\eta^{-1}(k)/\omega-n$, where $\eta^{-1}(k)$ is the vector with components $\eta^{ab}k_b$. Then $\eta(n,s)=\eta(n,k)/\omega-\eta(n,n)=(-\omega)/\omega+1=0$ and $\eta(s,s)=\eta(k,k)/\omega^2-2\eta(k,n)/\omega+\eta(n,n)=0-2(-\omega)/\omega-1=1$, so $s$ is a unit spacelike vector orthogonal to $n$; moreover $k=\omega(\eta(n,\cdot)+\eta(s,\cdot))$ by construction. By [L5] the pair extends to an $\eta$-orthonormal basis with $e_0=n$, $e_3=s$; in that basis the frame components of the covector are $k_A=k(e_A)=\omega(\eta(n,e_A)+\eta(s,e_A))=\omega(-1,0,0,1)$ and the raised components are $k^A=\eta^{AB}k_B=\omega(1,0,0,1)$. This proves (a). [L1, L5, algebra]

2.1 (The pure gauge amplitudes.) Let $H_{ab}=k_aZ_b+k_bZ_a$. Its trace is $\operatorname{tr}H=2k^aZ_a=:2\kappa_Z$, so $\bar H_{ab}=k_aZ_b+k_bZ_a-\eta_{ab}\kappa_Z$; hence $k^a\bar H_{ab}=k^ak_aZ_b+k^ak_bZ_a-k_b\kappa_Z=k_b\kappa_Z-k_b\kappa_Z=0$ because $k^ak_a=0$ and $k^ak_bZ_a=k_b\kappa_Z$. Thus $G\subseteq V_0$. If $H=0$, then testing in the frame of step 1.1 on $e_0$ gives $0=H(e_0,\cdot)=-\omega Z_\bullet+Z_0k_\bullet$; evaluating on $e_0$ gives $0=-2\omega Z_0$, so $Z_0=0$, and substituting back gives $\omega Z_b=0$ for every $b$, so $Z=0$. Hence $Z\mapsto(k_aZ_b+k_bZ_a)$ is injective, and its image $G$ is isomorphic to $\mathbb R^4$, so $\dim G=4$ by [L3]. [L3, algebra]

3.1 (The TT amplitudes.) If $X\in T$, then $\operatorname{tr}X=0$, so $\bar X=X$, and $X(e_0,\cdot)=X(e_3,\cdot)=0$; in frame components $k^a\bar X_{ab}=\omega(X_{0b}+X_{3b})=0$ for every $b$. Hence $T\subseteq V_0$. By [L2], $\dim T=2$. If $X\in T\cap G$ with $X=k_aZ_b+k_bZ_a$, then testing on $e_0$ as in step 2.1 gives $Z_0=0$ and then $Z=0$, so $X=0$: $T\cap G=\{0\}$. [L2, L3, step 2.1, algebra]

4.1 (Solving for the TT representative.) Let $X\in V_0$ and let $Z$ be any vector. Define $X'_{ab}:=X_{ab}-k_aZ_b-k_bZ_a$. In frame components with $k_0=-\omega$, $k_3=\omega$, the four equations $X'_{0b}=0$ read $X_{0b}+\omega Z_b-k_bZ_0=0$, that is $$b=0:\ X_{00}+2\omega Z_0=0;\quad b=1:\ X_{01}+\omega Z_1=0;\quad b=2:\ X_{02}+\omega Z_2=0;\quad b=3:\ X_{03}+\omega Z_3-\omega Z_0=0,$$ whose unique solution is the displayed $Z$ (the matrix of the system is triangular with diagonal entries $2\omega,\omega,\omega,\omega$, all nonzero). Set $X'$ accordingly; then $X'\in V_0$ because $V_0$ is a subspace containing $X$ and $G$ (steps 2.1, 3.1). We show $X'\in T$. First, the harmonic-gauge condition $k^a\bar X'_{ab}=0$ in frame components reads $\omega(\bar X'_{0b}+\bar X'_{3b})=0$. For $b=1,2$ this is $X'_{31}+X'_{01}=0$ and $X'_{32}+X'_{02}=0$, because $\eta_{31}=\eta_{32}=0$; since $X'_{01}=X'_{02}=0$ by construction, $X'_{31}=X'_{32}=0$. For $b=0$ it gives $\bar X'_{00}+\bar X'_{30}=0$; here $\bar X'_{30}=X'_{30}-\tfrac12\eta_{30}\operatorname{tr}X'=X'_{03}=0$ and $\bar X'_{00}=X'_{00}-\tfrac12\eta_{00}\operatorname{tr}X'=\tfrac12\operatorname{tr}X'$, so $\operatorname{tr}X'=0$. For $b=3$ it gives $\bar X'_{03}+\bar X'_{33}=0$ with $\bar X'_{03}=X'_{03}=0$ and $\bar X'_{33}=X'_{33}-\tfrac12\operatorname{tr}X'=X'_{33}$, so $X'_{33}=0$. Substituting $\operatorname{tr}X'=X'_{11}+X'_{22}$ (which holds because $X'_{00}=X'_{33}=0$) gives $X'_{11}+X'_{22}=0$. Therefore $X'(e_0,\cdot)=0$, $X'(e_3,\cdot)=0$ and $\operatorname{tr}X'=0$: $X'\in T$. [step 2.1, step 3.1, algebra]

5.1 (Uniqueness and the projection.) If $X'',X'$ are two TT representatives of the same $X$, their difference lies in $T\cap G=\{0\}$ by step 3.1 and the definition of $G$; so the representative is unique. Writing $\pi(X):=X'$, the assignment is the composition of the linear maps $X\mapsto(X,Z(X))$ and $(X,Z)\mapsto X-kZ-kZ$ with $Z$ the linear solution of step 4.1, hence linear; and $\pi(X)=X$ for $X\in T$ because then $Z=0$ solves $X'_{0b}=X_{0b}=0$ (uniqueness of the solution). Consequently every $X\in V_0$ is $X=\pi(X)+\bigl(X-\pi(X)\bigr)$ with $\pi(X)\in T$ and $X-\pi(X)\in G$, so $V_0=T+G$; combined with $T\cap G=\{0\}$ this is an internal direct sum, and by [L3] $\dim V_0=\dim T+\dim G=6$. The map $V_0/G\to T$, $X+G\mapsto\pi(X)$, is a linear isomorphism, and by [L2] the map $T\to\mathbb R^2$, $X\mapsto(X_{11},X_{12})$, is a linear isomorphism. This proves (b) and (c). [L2, L3, step 2.1, step 3.1, step 4.1, algebra]

6.1 (Differential form and the gauge transformation.) For $h_{ab}=X_{ab}\cos(k\cdot x)$ we have $\bar h_{ab}=\bar X_{ab}\cos(k\cdot x)$ and, by [L4], $\partial^a\bar h_{ab}=k^a\bar X_{ab}(-\sin(k\cdot x))$; this vanishes identically exactly when $k^a\bar X_{ab}=0$ for every $b$, that is, exactly when $X\in V_0$. With $Z$ as in step 4.1 and $\xi_b=Z_b\sin(k\cdot x)$, the product rule and [L4] give $\partial_a\xi_b=k_aZ_b\cos(k\cdot x)$, hence $\partial_a\xi_b+\partial_b\xi_a=(k_aZ_b+k_bZ_a)\cos(k\cdot x)$ and $h'_{ab}=(X_{ab}-k_aZ_b-k_bZ_a)\cos(k\cdot x)=X'_{ab}\cos(k\cdot x)$ with $X'\in T\subseteq V_0$, so $h'$ is in harmonic gauge. This proves (d). [L4, step 4.1, step 5.1, algebra]

7.1 (Conclusion.) Steps 1.1, 2.1, 3.1, 4.1, 5.1 and 6.1 prove the four clauses; the arguments use finite linear algebra in an adapted orthonormal frame and the coordinate calculus of the flat model only. No field equation and no physical assumption enters, and no choice beyond the inherited countable choice of the cited finite-dimensional suppliers is used. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎

## Remarks

- **Frame dependence of the representative.** The subspace $T=T_{n,s}$ and hence the pair $(A_+,A_\times)$ of a class depend on the chosen observer $n$ with $\eta(n,k)\ne0$; the quotient $V_0/G$ and its dimension two do not. Clause (a) records that an adapted observer always exists, and the identity of two classes is tested by their TT representatives in any one admissible frame.

- **Residual gauge freedom.** Harmonic gauge is preserved by the plane-wave gauges of $G$; that is the plane-wave instance of the residual freedom $\Box\xi=0$ after harmonic gauge, since $\Box\xi_b=-k^ak_aZ_b\sin(k\cdot x)=0$ for null $k$ by [L4]. The lemma states this only in the form needed for the amplitude classification; the existence of a harmonic-gauge representative for a general (non-plane-wave) perturbation is a different statement, proved for the smooth all-space regime in [[thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge]].
