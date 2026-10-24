---
id: ex-qftx-positive-real-monad-one-instanton
kind: example
title: An exact raw one-instanton block
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms-examples
dependency_level: 8
deps:
  - thm-qftx-positive-real-adhm-monad-normal-form
  - def-qftx-adhm-linear-data-stability-and-regularity
  - lem-qftx-positive-real-monad-rank-stability-criterion
  - lem-qftx-positive-real-monad-charge-normalization
  - def-curvature-of-a-vector-bundle-connection
dependency_roles:
  thm-qftx-positive-real-adhm-monad-normal-form: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  lem-qftx-positive-real-monad-rank-stability-criterion: mathematical-premise
  lem-qftx-positive-real-monad-charge-normalization: mathematical-premise
  def-curvature-of-a-vector-bundle-connection: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang–Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "Sections 3–4 and 6, printed pp. 4–6 and 10–11: positive stereographic orientation and projection construction; all one-instanton matrices and curvature signs are computed here."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "Section 3.1, printed pp. 17–19: framed ADHM conventions and locally-free locus; the sign convention is explicitly fixed below."
verification:
  precheck: pending
---

## Example

Let $V=\mathbb C$, $W=\mathbb C^2$ with their standard Hermitian forms, and
let $\rho>0$. Take
$$B_1=B_2=0,\qquad I=(\rho,0):W\to V,\qquad J=(0,\rho)^T:V\to W.$$
Both ADHM moments vanish. The associated homogeneous monad maps on
$\mathbb P^3$ are
$$\alpha= \begin{pmatrix} -\mu_1\\-\mu_2\\\rho\lambda_2\\\rho\lambda_1 \end{pmatrix}, \qquad \beta=(\mu_2,-\mu_1,\rho\lambda_1,-\rho\lambda_2).$$
For $z=(z_1,z_2)\in\mathbb C^2$, put
$$D_z= \begin{pmatrix} z_2&-z_1&\rho&0\\ -\bar z_1&-\bar z_2&0&\rho \end{pmatrix},\qquad f_z=|z_1|^2+|z_2|^2+\rho^2.$$
Then $D_zD_z^\dagger=f_z I_2$. The orthogonal projection
$P_z=I_4-D_z^\dagger f_z^{-1}D_z$ has image $\ker D_z$, a rank-two Hermitian
bundle over $\mathbb R^4$. Its projection connection is $\nabla=P\,d$.
Set $z_1=x^0+ix^1$, $z_2=x^2+ix^3$, equip $\mathbb R^4$ with the Euclidean
metric $g=\sum_{\mu=0}^{3}(dx^\mu)^2$, and orient it by
$\operatorname{vol}_g=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. The Hodge star
$*_g$ on real two-forms is the unique linear map satisfying
$\eta\wedge *_g\xi=\langle\eta,\xi\rangle_g\operatorname{vol}_g$ for all
real two-forms $\eta,\xi$; extend it complex-linearly and coefficientwise to
$\operatorname{End}(\mathbb C^4)$-valued two-forms. If $F_\nabla$ is the
curvature of $\nabla$, define its self-dual part by
$F_\nabla^+=\tfrac12(F_\nabla+*_gF_\nabla)$. For this metric and orientation,
the curvature satisfies $F_\nabla^+=0$. The monad is trivial and positive on
every real line, and its infinity framing is the identity framing by $W$.

## Example references

[[thm-qftx-positive-real-adhm-monad-normal-form]]

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[lem-qftx-positive-real-monad-rank-stability-criterion]]

[[lem-qftx-positive-real-monad-charge-normalization]]

[[def-curvature-of-a-vector-bundle-connection]]

[Donaldson, Sections 3–4 and 6](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, Section 3.1](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** The standard Hermitian spaces $V=\mathbb C$, $W=\mathbb C^2$ and
the real parameter $\rho>0$.

[F1] The raw moments are
$\mu_{\mathbb C}=[B_1,B_2]+IJ$ and
$\mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J$;
stability is the word-span condition and costability excludes a nonzero
common invariant subspace in $\ker J$. The unitary gauge action is
$(B_1,B_2,I,J)\mapsto(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$.
[[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] The raw homogeneous maps have
$\beta\alpha=\lambda_1^2\mu_{\mathbb C}
+\lambda_1\lambda_2\mu_{\mathbb R}
-\lambda_2^2\mu_{\mathbb C}^\dagger$, and regular zero-moment data give
full homogeneous rank and the associated linear bundle monad.
[[lem-qftx-positive-real-monad-rank-stability-criterion]]

[F3] The finite monad resolution gives $c_2^{\rm top}(F)=kH_{\rm top}^2$. The
charge supplier defines the twistor projection by
$\pi([v])=\operatorname{span}_{\mathbb C}(v,\jmath v)$ with fibers the real
incidence lines and proves $\pi^*u=H_{\rm top}^2$ in the positive orientation;
the charge on $S^4$ is conditional on the topological pullback.
[[lem-qftx-positive-real-monad-charge-normalization]]

[F4] The curvature of a connection is its square; in a local frame it is
$d\omega+\omega\wedge\omega$.
[[def-curvature-of-a-vector-bundle-connection]]

## Proof

**Given:** The data in the Example.

1.1 Since $B_1=B_2=0$, one has
$\mu_{\mathbb C}=IJ=(\rho,0)(0,\rho)^T=0$ and
$\mu_{\mathbb R}=II^\dagger-J^\dagger J=\rho^2-\rho^2=0$.
The nonzero map $I$ has image $V$, so its word span is $V$ and the datum is
stable. The nonzero map $J:V\to W$ is injective, so $\ker J=0$ and the datum
is costable. Thus it is regular.
[given, F1, algebra]

2.1 Substitution in the raw homogeneous formulas gives the displayed
$\alpha$ and $\beta$. Direct multiplication gives
$\beta\alpha=-\mu_1\mu_2+\mu_1\mu_2+\rho^2\lambda_1\lambda_2
-\rho^2\lambda_1\lambda_2=0$, equivalently the zero-moment polynomial in
[F2]. At infinity these maps restrict to
$\alpha=(-\mu_1,-\mu_2,0,0)^T$ and
$\beta=(\mu_2,-\mu_1,0,0)$, whose middle cohomology is the last two
coordinates $W$ with its identity framing. The middle standard Hermitian
form is positive.
[F2, step 1.1, algebra]

2.2 On the real line over $z$, the incidence equations give
$\alpha=a_z\lambda_1+b_z\lambda_2$ and
$\beta=b_z^\dagger\lambda_1-a_z^\dagger\lambda_2$, where
$$a_z=(-z_1,-z_2,0,\rho)^T,\qquad b_z=(\bar z_2,-\bar z_1,\rho,0)^T.$$
Multiplication gives $a_z^\dagger a_z=b_z^\dagger b_z=f_z$ and
$b_z^\dagger a_z=0$. Thus $a_z,b_z$ are orthogonal isometric copies after
rescaling by $f_z^{-1/2}$. Their common orthogonal complement
$E_z=(\operatorname{im}a_z\oplus\operatorname{im}b_z)^\perp$ has dimension
two. The line complex on the first two copies is the Euler complex
$V\mathcal O(-1)\to(V\oplus V)\mathcal O\to V\mathcal O(1)$ and is exact at
its ends with zero middle cohomology; the complementary term is
$E_z\mathcal O$. Hence the line bundle is trivial and its section pairing
is the standard positive form on $E_z$. Since $D_z$ has rows
$b_z^\dagger,a_z^\dagger$, $E_z=\ker D_z$. Finally direct multiplication
gives $D_zD_z^\dagger=f_z I_2$; because $\rho>0$, $f_z>0$ at every $z$.
[given, step 1.1, algebra]

3.1 The matrix $P_z=I_4-D_z^\dagger f_z^{-1}D_z$ is Hermitian and
$P_z^2=P_z$, since $D_zD_z^\dagger=f_zI_2$. Also $D_zP_z=0$ and $P_z$
acts as the identity on $\ker D_z$, so it is the orthogonal projection onto
that rank-two kernel. The connection $\nabla=P\,d$ is unitary. Differentiating
$D P=0$ and its adjoint, and using $D D^\dagger=fI_2$, gives
$$F_\nabla=P(dP\wedge dP)P =P\,dD^\dagger f^{-1}\wedge dD\,P.$$
Here the equality follows by writing $dP$ in the off-diagonal blocks for
$\mathbb C^4=\ker D\oplus\operatorname{im}D^\dagger$; each off-diagonal
block is respectively $-D^\dagger f^{-1}dD P$ and
$-P dD^\dagger f^{-1}D$, whose product inserts
$D D^\dagger=fI_2$.
[F4, step 2.2, algebra]

4.1 In the coordinates of the Example,
$$dD= \begin{pmatrix} dz_2&-dz_1&0&0\\ -d\bar z_1&-d\bar z_2&0&0 \end{pmatrix}.$$
The only nonzero block of $dD^\dagger\wedge dD$ is its upper-left
$2\times2$ block:
$$\begin{pmatrix} -2i\theta_1&2(\theta_2-i\theta_3)\\ -2(\theta_2+i\theta_3)&2i\theta_1 \end{pmatrix},$$
where
$$\theta_1=dx^0\wedge dx^1-dx^2\wedge dx^3,\quad \theta_2=dx^0\wedge dx^2+dx^1\wedge dx^3,\quad \theta_3=dx^0\wedge dx^3-dx^1\wedge dx^2.$$
For the stated positive orientation, direct use of the Hodge-star definition
gives $*_g\theta_i=-\theta_i$ for each $i$. Every coefficient of
$dD^\dagger\wedge dD$ is therefore anti-self-dual. The scalar $f_z^{-1}$
and the degree-zero matrix factors $P_z$ in step 3.1 only take linear
combinations of these coefficient forms, so $*_gF_\nabla=-F_\nabla$ and
$F_\nabla^+=0$. No sign convention from a differently oriented stereographic
chart is used.
[step 3.1, algebra]

5.1 The residual $U(1)$ action sends
$I\mapsto gI$ and $J\mapsto Jg^{-1}$; it preserves the raw representative's
orbit, and its stabilizer is trivial because $gI=I$ with $I\ne0$ forces
$g=1$. The framed $W$ coordinates at infinity are fixed, so they introduce
no extra unitary factor. The finite monad resolution and [F3] give
$c_2(F)=H^2$, the unit charge under the positive incidence pullback
condition. The example verifies an exact one-instanton block with no
singularity because $f_z$ never vanishes.
[F1, F3, step 1.1, step 2.1, step 2.2, algebra] ∎
