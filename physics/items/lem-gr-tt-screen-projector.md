---
id: lem-gr-tt-screen-projector
kind: lemma
title: "The screen and spatial projectors are orthogonal projections of rank two and three, and the TT projection is the orthogonal projection onto the two-dimensional transverse-traceless space"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-wave-screen-and-tt-projection, def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-lorentz-orthogonality-and-orthogonal-complement, def-inner-product-space, def-orthogonal-projection, thm-finite-dimensional-orthogonal-decomposition, def-linear-map, def-kernel-and-image-of-a-linear-map, thm-linear-kernel-image-and-injectivity, def-rank-and-nullity, def-dimension, def-gr-tensor-fields-and-components, def-gr-minkowski-model-and-inertial-chart, def-euclidean-inner-product, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas]
dependency_roles:
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthogonal-projection: mathematical-premise
  thm-finite-dimensional-orthogonal-decomposition: mathematical-premise
  def-linear-map: mathematical-premise
  def-kernel-and-image-of-a-linear-map: mathematical-premise
  thm-linear-kernel-image-and-injectivity: mathematical-premise
  def-rank-and-nullity: mathematical-premise
  def-dimension: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.55)-(6.57) and the reconstruction (6.53): the projector P = eta - n n, the transverse-traceless projection and the two independent components C_{11}, C_{12}, printed pp. 151-152 (PDF pp. 158-159)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.1 (5.22): the two polarisation states H_+ and H_x of the transverse-traceless polarisation matrix, printed pp. 211-212 (PDF pp. 218-219)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.3 (7.49): the transverse-traceless polarisation matrix with two independent constants H_+ and H_x and the statement that gravitational waves have two polarizations, printed pp. 78-79 (PDF pp. 79-80)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its
inertial chart ([[def-gr-minkowski-model-and-inertial-chart]]), let $(n,s)$
be an observer and propagation direction and let $p$, $h$, $\Sigma(n,s)$,
$\Pi_{n,s}$ and the amplitude terminology be as in
[[def-gr-wave-screen-and-tt-projection]]. Write $V:=\mathbb R^4$ and let
$\mathcal S$ be the space of symmetric covariant $2$-tensors on $V$. Then:

**(a) Projections.** $p$ and $h$ are linear endomorphisms of $V$ with
$p^2=p$, $h^2=h$, $\ker p=\operatorname{span}\{n,s\}$,
$\operatorname{im}p=\Sigma(n,s)$, $\ker h=\mathbb Rn$,
$\operatorname{im}h=n^\perp$; both are $\eta$-self-adjoint,
$\eta(pu,v)=\eta(u,pv)$ and $\eta(hu,v)=\eta(u,hv)$ for all $u,v$. Moreover
$h-p=s\otimes s^\flat$, that is $h^a{}_b-p^a{}_b=s^as_b$.

**(b) Ranks and traces.** $\operatorname{rank}p=\dim\Sigma(n,s)=2$,
$p^a{}_a=2$, $\operatorname{rank}h=3$, $h^a{}_a=3$.

**(c) TT projection.** $\Pi_{n,s}$ is a linear endomorphism of $\mathcal S$
with $\Pi_{n,s}^2=\Pi_{n,s}$; for every $A\in\mathcal S$ the tensor
$\Pi_{n,s}(A)$ is TT with respect to $(n,s)$ in the sense of
[[def-gr-wave-screen-and-tt-projection]] clause (d); and $\Pi_{n,s}(A)=A$
exactly when $A$ is TT. The TT tensors form the two-dimensional linear
subspace $T_{n,s}=\{B\in\mathcal S:B(n,\cdot)=B(s,\cdot)=0,\ \eta^{ab}B_{ab}=0\}$,
so $\dim T_{n,s}=2$.

**(d) Orthogonal projection and amplitudes.** Let
$\langle A,B\rangle:=h^{ac}h^{bd}A_{ab}B_{cd}$ on the subspace of tensors
spatial with respect to $n$. This is a positive definite inner product, and
for every spatial $A$ and every TT $B$, $\langle A-\Pi_{n,s}(A),B\rangle=0$;
so $\Pi_{n,s}$ restricted to the spatial tensors is the orthogonal projection
onto $T_{n,s}$ ([[def-orthogonal-projection]],
[[thm-finite-dimensional-orthogonal-decomposition]]). With respect to an
ordered $\eta$-orthonormal screen basis $(e_1,e_2)$ a TT tensor is

$$B=B_{11}\bigl(e^1\otimes e^1-e^2\otimes e^2\bigr)+B_{12}\bigl(e^1\otimes e^2+e^2\otimes e^1\bigr),$$

so $B$ is determined by the pair $(A_+,A_\times)=(B_{11},B_{12})$, and under
a screen rotation by $\theta$ this pair transforms as in
[[def-gr-wave-screen-and-tt-projection]] clause (c); in particular the map
$T_{n,s}\to\mathbb R^2$, $B\mapsto(A_+,A_\times)$, is a linear isomorphism.

## Facts & Assumptions

**Given:** The flat model with inertial chart, an observer $n$ and propagation direction $s$ as in [[def-gr-wave-screen-and-tt-projection]], and the endomorphisms $p$, $h$ and the map $\Pi_{n,s}$ defined there.

[L1] The orthogonal complement $n^\perp$ of a unit timelike $n$ is three-dimensional, the restriction of $\eta$ to it is positive definite, and the vectors of $n^\perp$ orthogonal to the unit spacelike $s$ form a two-dimensional positive definite subspace $\Sigma(n,s)$ ([[lem-gr-observer-projection-decomposition]], [[def-gr-observer-and-rest-space]], [[def-lorentz-orthogonality-and-orthogonal-complement]]).

[L2] Every finite-dimensional real inner product space has an orthonormal basis, and an orthogonal projection onto a subspace is the unique self-adjoint idempotent with that image ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[def-orthogonal-projection]], [[thm-finite-dimensional-orthogonal-decomposition]], [[def-inner-product-space]]).

[L3] Components of tensors in an ordered basis determine the tensor, and a tensor identity that holds in one basis holds in every basis; $\delta^a{}_b$ are the components of the identity endomorphism ([[def-gr-tensor-fields-and-components]], [[def-gr-minkowski-model-and-inertial-chart]]).

[L4] A linear endomorphism of a four-dimensional space has rank equal to the dimension of its image, a linear map is injective exactly when its kernel is trivial, and the rank of an endomorphism presented in a basis is the number of nonzero diagonal entries of its diagonal form ([[def-linear-map]], [[def-kernel-and-image-of-a-linear-map]], [[thm-linear-kernel-image-and-injectivity]], [[def-rank-and-nullity]], [[def-dimension]]).

[L5] The addition formulas $\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta$ and $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$ hold, and the derivatives of $\sin$ and $\cos$ are $\cos$ and $-\sin$; the Euclidean inner product of $\mathbb R^2$ is used for the rotation computation ([[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-derivatives]], [[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct; choose an adapted orthonormal basis, evaluate all tensor formulas in that basis, and use basis independence.

1.1 (Adapted basis.) Set $e_0:=n$, $e_3:=s$. By [L1] the space $\Sigma(n,s)$ is a two-dimensional positive definite subspace of $V$; by [L2] it has an orthonormal basis $(e_1,e_2)$. Then $(e_0,e_1,e_2,e_3)$ is an $\eta$-orthonormal basis with $\eta(e_A,e_B)=\operatorname{diag}(-1,1,1,1)_{AB}$, and $\operatorname{span}\{e_1,e_2\}=\Sigma(n,s)$, $\operatorname{span}\{e_1,e_2,e_3\}=n^\perp$. [L1, L2]

2.1 (Components of the projectors.) In the basis of step 1.1 the components of $n$ and $s$ are $n^A=\delta^A_0$, $n_A=-\delta^0_A$ and $s^A=\delta^A_3$, $s_A=\delta^3_A$, so $$p^A{}_B=\delta^A{}_B+n^An_B-s^As_B=\operatorname{diag}(0,1,1,0)^A{}_B,\qquad h^A{}_B=\delta^A{}_B+n^An_B=\operatorname{diag}(0,1,1,1)^A{}_B .$$ Indeed $n^An_B$ is the endomorphism $u\mapsto n^A\eta(n,u)$, which has the single nonzero entry $-1$ in position $(0,0)$; $s^As_B$ likewise has the single entry $+1$ in position $(3,3)$. As symmetric component matrices, $p_{AB}=\eta_{AC}p^C{}_B=\operatorname{diag}(0,1,1,0)_{AB}$ and $h_{AB}=\operatorname{diag}(0,1,1,1)_{AB}$. [L3, algebra]

3.1 (Clauses (a) and (b).) From the diagonal forms of step 2.1, squaring gives $p^2=p$ and $h^2=h$; $p$ kills $e_0$ and $e_3$ and fixes $e_1,e_2$, while $h$ kills $e_0$ and fixes $e_1,e_2,e_3$. Hence $\operatorname{im}p=\operatorname{span}\{e_1,e_2\}=\Sigma(n,s)$ and $\operatorname{im}h=\operatorname{span}\{e_1,e_2,e_3\}=n^\perp$, while $\ker p=\operatorname{span}\{e_0,e_3\}=\operatorname{span}\{n,s\}$ and $\ker h=\mathbb Re_0=\mathbb Rn$. By [L4] the ranks are the dimensions of the images, $\operatorname{rank}p=2$ and $\operatorname{rank}h=3$. Since $p_{AB}$ and $h_{AB}$ are symmetric matrices, $\eta(pu,v)=\sum_{A,B}p_{AB}u^Av^B=\eta(u,pv)$ and likewise for $h$; and subtracting the two diagonal forms gives $h^A{}_B-p^A{}_B=\operatorname{diag}(0,0,0,1)^A{}_B=s^As_B$. All these are tensor identities, hence hold in every basis by [L3]. This proves (a) and (b). [L3, L4, step 2.1, algebra]

3.2 (The TT projection.) Let $A\in\mathcal S$ have components $A_{AB}$ in the basis of step 1.1. By step 2.1, $$(\Pi_{n,s}A)_{AB}=p_A{}^Cp_B{}^DA_{CD}-\tfrac12p_{AB}\,p^{CD}A_{CD},$$ and since $p^{CD}=p_{CD}=\operatorname{diag}(0,1,1,0)_{CD}$, the only nonzero components of $\Pi_{n,s}A$ are $$(\Pi_{n,s}A)_{11}=\tfrac12(A_{11}-A_{22}),\qquad(\Pi_{n,s}A)_{22}=-\tfrac12(A_{11}-A_{22}),\qquad(\Pi_{n,s}A)_{12}=(\Pi_{n,s}A)_{21}=A_{12}.$$ Thus $\Pi_{n,s}A$ is supported on $\Sigma(n,s)$, is symmetric there, and has vanishing screen trace: it is TT. Applying the same display to $A'=\Pi_{n,s}A$, whose components satisfy $A'_{11}=-A'_{22}$ and $A'_{12}=A'_{21}$, leaves them unchanged, so $\Pi_{n,s}^2=\Pi_{n,s}$; and if $A$ is TT then $A_{11}=-A_{22}$, $A_{12}=A_{21}$ and all other components vanish, so $\Pi_{n,s}A=A$. Conversely $\Pi_{n,s}A=A$ forces the displayed form, which is TT. The displayed parametrization shows that $T_{n,s}$ consists exactly of the symmetric matrices with $A_{11}=-A_{22}$, $A_{12}=A_{21}$ and all other components zero; these form a two-dimensional space. This proves (c). [step 2.1, algebra]

4.1 (Orthogonality and amplitudes.) For spatial symmetric $A,B$ define $\langle A,B\rangle=h^{ac}h^{bd}A_{ab}B_{cd}$; in the adapted basis this is $\sum_{i,j=1}^{3}A_{ij}B_{ij}$. It is bilinear and symmetric, and $\langle A,A\rangle=A_{11}^2+A_{22}^2+A_{33}^2+2A_{12}^2+2A_{13}^2+2A_{23}^2$, which is nonnegative and vanishes exactly when all spatial entries vanish; because $A(n,\cdot)=0$, this is exactly $A=0$. Thus it is a positive definite inner product. For a TT tensor $B$ only $B_{11}=-B_{22}$ and $B_{12}=B_{21}$ can be nonzero. By step 3.2, the screen block of $A-\Pi_{n,s}A$ is $\tfrac12(A_{11}+A_{22})\operatorname{diag}(1,1)$ and its off-diagonal screen entries vanish; its remaining spatial entries pair with zero entries of $B$. Therefore $\langle A-\Pi_{n,s}A,B\rangle=\tfrac12(A_{11}+A_{22})(B_{11}+B_{22})=0$. Since $\Pi_{n,s}A\in T_{n,s}$ by step 3.2, [L2] identifies the restriction of $\Pi_{n,s}$ to the spatial tensors as the orthogonal projection onto $T_{n,s}$. Finally, a TT tensor is $B=B_{11}(e^1\otimes e^1-e^2\otimes e^2)+B_{12}(e^1\otimes e^2+e^2\otimes e^1)$, its amplitudes are $(A_+,A_\times)=(B_{11},B_{12})$, and the map is linear and bijective onto $\mathbb R^2$ by the parametrization of step 3.2. If $(e_1',e_2')$ is the rotated screen basis of [[def-gr-wave-screen-and-tt-projection]] clause (c), then bilinearity gives $$A_+'=B(e_1',e_1')=B_{11}(\cos^2\theta-\sin^2\theta)+2B_{12}\sin\theta\cos\theta=B_{11}\cos2\theta+B_{12}\sin2\theta,$$ $$A_\times'=B(e_1',e_2')=-B_{11}\sin2\theta+B_{12}\cos2\theta,$$ using the addition formulas of [L5] at $2\theta=\theta+\theta$. This proves (d). [L2, L5, step 3.2, algebra]

5.1 (Conclusion.) Steps 3.1, 3.2 and 4.1 prove clauses (a)-(d); all computations were performed in one adapted orthonormal basis and are identities between tensors, so they hold in every basis by [L3]. No choice principle, field equation or physical assumption is used. [step 3.1, step 3.2, step 4.1, L3] ∎

## Remarks

- **The rank-two trace subtraction.** The subtraction in $\Pi_{n,s}$ uses the trace of the two-dimensional screen, $p^{cd}p_{cd}=2$. For an $\eta$-self-adjoint idempotent $q$ of rank $r$ the combination $q_a{}^cq_b{}^dA_{cd}-\tfrac12q_{ab}q^{cd}A_{cd}$ has trace $(1-\tfrac r2)q^{cd}A_{cd}$, which vanishes when $r=2$ or $q^{cd}A_{cd}=0$, and for nonzero input trace vanishes exactly when $r=2$; applying the same half-trace formula to the rank-three projector $h$ (whose rest space has dimension three also in a curved four-dimensional model) does not in general produce a trace-free tensor. The companion counterexample of the examples page for this material records this failure explicitly.

- **No canonical screen without a frame.** The space $T_{n,s}$ depends on the pair $(n,s)$, not on the null covector alone: the screen is the orthogonal complement of $\operatorname{span}\{n,s\}$, and different observers $n$ with nonzero pairing against the wave covector give different splittings of the same quotient in the gauge-decomposition lemma of this page. The dimension two is the frame-independent content.
