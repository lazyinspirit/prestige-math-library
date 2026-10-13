---
id: lem-kam-limit-is-an-embedding
kind: lemma
title: "The KAM limit parametrisation is an embedding of the torus: injectivity modulo $2\\pi$, rank-$n$ differential and Lipschitz inverse"
status: published
origin: pipeline
domain: mathematics
dependency_level: 10
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-kam-parameter-sequences-satisfy-all-step-hypotheses, lem-kam-composed-map-and-derivative-convergence, thm-parameter-kam-torus-invariance-and-lagrangianity, lem-kam-conjugation-symmetry-of-the-construction, lem-kam-generator-flow-and-remainder-bound, lem-cauchy-fourier-and-lattice-shell-bounds, prop-cm-canonical-map-tests-and-hamiltonian-transport, def-operator-norm, thm-mean-value-inequality, thm-chain-rule-for-total-derivatives, def-quotient-topology, def-product-topology, def-continuous-map-top, def-metric-ball, def-cm-phase-domain-and-standard-symplectic-two-form]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-kam-parameter-sequences-satisfy-all-step-hypotheses: mathematical-premise
  lem-kam-composed-map-and-derivative-convergence: mathematical-premise
  thm-parameter-kam-torus-invariance-and-lagrangianity: mathematical-premise
  lem-kam-conjugation-symmetry-of-the-construction: mathematical-premise
  lem-kam-generator-flow-and-remainder-bound: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  def-operator-norm: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-quotient-topology: mathematical-premise
  def-product-topology: mathematical-premise
  def-continuous-map-top: mathematical-premise
  def-metric-ball: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §4-§5 (the limiting embedding of the torus, its closeness to the identity and the parametrisation of the invariant tori), PDF pp. 20-27."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §3.1 (analytic preliminaries and the torus data) and §6.1-§6.3 (limiting parametrisations of the invariant tori), printed pp. 24-31 and 92-110."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Assume the data, constants, sequences, one-step construction and notation of
[[lem-kam-composed-map-and-derivative-convergence]], the conjugacy symmetry of
[[lem-kam-conjugation-symmetry-of-the-construction]] (so that the initial
perturbation is conjugation-symmetric), and assume in addition that the fixed
data satisfy
$$4nCE_0\le1,$$
where $C$ bounds both the one-step constant and the composition constant $A$; this is a smallness condition on the fixed
constants, available in the applications by shrinking the step constant. Let
$\Psi_\infty(0,\vartheta,\nu)=(b(\vartheta,\nu),\vartheta+w(\vartheta,\nu))$ be
the limiting family of [[lem-kam-composed-map-and-derivative-convergence]] and
$\Theta_\nu(\vartheta):=\vartheta+w(\vartheta,\nu)$ its angle component. Then for
every $\nu\in\Omega_{\alpha,\tau}$:

1. **Contraction and injectivity.** For all real $\vartheta,\vartheta'$,
$$|w(\vartheta,\nu)-w(\vartheta',\nu)|_1\le\tfrac12|\vartheta-\vartheta'|_1,\qquad |\Theta_\nu(\vartheta)-\Theta_\nu(\vartheta')|_1\ge\tfrac12|\vartheta-\vartheta'|_1;$$
   in particular $\Theta_\nu$ is injective on $\mathbb R^n$ and
   $\Psi_\infty(0,\vartheta,\nu)=\Psi_\infty(0,\vartheta',\nu)$ with real
   $\vartheta,\vartheta'$ forces $\vartheta=\vartheta'$.
2. **Descent to the torus.** $\Psi_\infty(0,\vartheta+2\pi k,\nu)=\Psi_\infty(0,\vartheta,\nu)+(0,2\pi k)$ for every $k\in\mathbb Z^n$; consequently the parametrisation induces a well-defined continuous injective map
$$\widehat\Psi_\nu:\mathbb T^n\longrightarrow\mathbb R^n\times\mathbb T^n,\qquad \widehat\Psi_\nu\circ\pi=\Pi\circ\Psi_\infty(0,\,\cdot\,,\nu),$$
   where $\pi:\mathbb R^n\to\mathbb T^n$ is the quotient map and $\Pi$ reads the angle coordinates modulo $2\pi$.
3. **Immersion.** At every real $\vartheta$ the differential $D_\vartheta\Psi_\infty(0,\vartheta,\nu)$ has rank $n$; equivalently $I_n+\partial_\vartheta w(\vartheta,\nu)$ is invertible.
4. **Embedding with Lipschitz inverse.** Define
$$d_{\mathbb T^n}(\pi\vartheta,\pi\vartheta'):=\min_{k\in\mathbb Z^n}|\vartheta-\vartheta'-2\pi k|_\infty$$
and
$$d_{\mathrm{phase}}((p,\pi\vartheta),(p',\pi\vartheta')):=\max\{|p-p'|_\infty,d_{\mathbb T^n}(\pi\vartheta,\pi\vartheta')\}.$$
Then the inverse of $\widehat\Psi_\nu$ on its image is Lipschitz with constant $2n$, and $\widehat\Psi_\nu$ is a homeomorphism of $\mathbb T^n$ onto its image; in particular the image is an embedded $n$-dimensional torus in the phase space, and it is real (clause 3 of [[lem-kam-conjugation-symmetry-of-the-construction]]).
5. **Dynamical reading.** The image of $\widehat\Psi_\nu$ is invariant under $X_H(\,\cdot\,;\chi_\infty(\nu))$ with frequency $\nu$ and Lagrangian, in the sense of clauses 1-3 of [[thm-parameter-kam-torus-invariance-and-lagrangianity]].


## Facts & Assumptions

**Given:** The data, constants and one-step construction of [[lem-kam-composed-map-and-derivative-convergence]], a conjugation-symmetric initial perturbation, the limit family $\Psi_\infty=(b,\mathrm{id}+w)$ and the smallness $4nCE_0\le1$.

[F1] The conclusions of [[lem-kam-composed-map-and-derivative-convergence]]: $\Psi_j\to\Psi_\infty$ uniformly on $\mathcal L$ together with all $\vartheta$-derivatives; each $\Psi_j$ is $2\pi$-equivariant in $\vartheta$, $\Psi_j(I,\vartheta+2\pi k,\nu)=\Psi_j(I,\vartheta,\nu)+(0,2\pi k)$ for all $k\in\mathbb Z^n$ and all points of $D_j$ (clause 1); and the size bounds $|b|\le2Cr_0E_0$, $|w|\le2C\sigma_0E_0$, $|\partial_{\vartheta_i}w|\le2CE_0$ on $S_{s_0/4}\times\Omega_{\alpha,\tau}$ (clause 4).

[F2] For real $\vartheta,\nu$, each component $w_j$ is real by [F6]. The curve $t\mapsto w_j(\vartheta+t(\vartheta'-\vartheta),\nu)$ is differentiable by the chain rule, with derivative $\sum_i(\partial_{\vartheta_i}w_j)(\vartheta+t(\vartheta'-\vartheta),\nu)(\vartheta'_i-\vartheta_i)$. The one-variable mean-value inequality therefore bounds its change by the supremum of this derivative on the segment ([[thm-chain-rule-for-total-derivatives]], [[thm-mean-value-inequality]]).

[F3] For representatives $\vartheta,\vartheta'$, the minimum in $d_{\mathbb T^n}(\pi\vartheta,\pi\vartheta')=\min_{k\in\mathbb Z^n}|\vartheta-\vartheta'-2\pi k|_\infty$ is attained by choosing a nearest integer in each coordinate. The formula is independent of representatives, is zero exactly for equivalent representatives, is symmetric, and satisfies the triangle inequality by combining minimizing lattice shifts; hence it is a metric. Its radius-$r$ ball is $\pi(B_\infty(\vartheta,r))$. The quotient topology makes this ball open: $\pi^{-1}(\pi(V))=\bigcup_{k\in\mathbb Z^n}(V+2\pi k)$ is open for every open $V$. Conversely, any quotient-open neighbourhood lifts to an open neighbourhood of a representative and hence contains such a ball, so the quotient topology is the metric topology of $d_{\mathbb T^n}$. The phase space carries the product topology ([[def-holomorphic-kam-domain-and-diophantine-labels]], [[def-quotient-topology]], [[def-product-topology]], [[def-continuous-map-top]], [[def-metric-ball]]).

[F4] Elementary linear algebra: if $A\in M_n(\mathbb C)$ satisfies $|Av|_1\le\tfrac12|v|_1$ for all $v\in\mathbb C^n$, then $I_n+A$ is injective, since $(I_n+A)v=0$ gives $|v|_1=|Av|_1\le\tfrac12|v|_1$.

[F5] Pointwise canonical calculus ([[prop-cm-canonical-map-tests-and-hamiltonian-transport]] clause 1 and its transport calculation): in action-first order put $J_a:=\begin{pmatrix}0&-I_n\\I_n&0\end{pmatrix}$, so $X_f=J_a\nabla f=(-f_\vartheta,f_I)$ for $\omega=\sum_jd\vartheta_j\wedge dI_j$. For a canonical phase map with Jacobian $M$, $M^{\mathsf T}J_aM=J_a$. This makes $M$ invertible and implies $MJ_aM^{\mathsf T}=J_a$ by inversion, since $J_a^{-1}=-J_a$. The chain rule then gives $M X_{H\circ C}=X_H\circ C$ pointwise. This calculation requires only the canonical Jacobian, not a globally defined inverse. The limiting dynamical identities will be proved locally below; the additional smallness in [[thm-parameter-kam-torus-invariance-and-lagrangianity]] is not assumed.

[F6] Reality: for real $\vartheta,\nu$ the point $\Psi_\infty(0,\vartheta,\nu)$ is real ([[lem-kam-conjugation-symmetry-of-the-construction]] clause 3).

[F7] Put $W_j:=\operatorname{diag}(r_j^{-1}I_n,\sigma_j^{-1}I_n)$ and use the induced maximum-norm operator norm $\|M\|=\max_a\sum_b|M_{ab}|$ ([[def-operator-norm]]). It satisfies $|Mv|_\infty\le\|M\||v|_\infty$ and $\|MN\|\le\|M\|\|N\|$ by taking the supremum over $|v|_\infty\le1$. The one-step construction has $\|W_j(D_z\widetilde\Phi_j-I_{2n})W_j^{-1}\|\le CE_j$ on its declared domain ([[lem-kam-generator-flow-and-remainder-bound]] clause 2). The sequences give $r_{j+1}=\eta_jr_j$, $\eta_j\le1/8$, $\sigma_{j+1}=\sigma_j/2$, $E_j\le4^{-j}E_0$, and $h_{j+1}=h_j4^{-\mu}$ ([[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]]), where $\mu=\tau+3n+2>1$.

[F8] At every stage $P_j$ is holomorphic on $D_{r_j,s_j,h_j}(\Lambda)$ and bounded there by $\varepsilon_j=\alpha E_jr_j\sigma_j^\mu$, as stipulated in the one-step data of [[lem-kam-composed-map-and-derivative-convergence]]. Coordinate Cauchy estimates with action margin $r_j/2$ and angular margin $8\sigma_j$ give $|\partial_{I_i}P_j|\le2\varepsilon_j/r_j$ and $|\partial_{\vartheta_i}P_j|\le\varepsilon_j/(8\sigma_j)$ on $D_j$ ([[lem-cauchy-fourier-and-lattice-shell-bounds]]). Thus $|W_jX_{P_j}|_\infty\le2\varepsilon_j/(r_j\sigma_j)$ there.

## Proof

**Proof technique:** direct; bound the angle error from the derivative bound, descend to the torus by equivariance, and control the inverse through the contraction estimate.


1.1 *Contraction and injectivity.* By [F1] each partial derivative obeys $|\partial_{\vartheta_i}w_j|\le2CE_0$ on the domain. For fixed real $\vartheta,\vartheta'$ and each component $w_j$, reality follows from [F6], and the curve $t\mapsto w_j(\vartheta+t(\vartheta'-\vartheta),\nu)$ has derivative bounded by $2CE_0|\vartheta-\vartheta'|_1$ by [F2]; the one-variable mean-value inequality gives $|w_j(\vartheta)-w_j(\vartheta')|\le2CE_0|\vartheta-\vartheta'|_1$. Summing over $j$ gives $|w(\vartheta,\nu)-w(\vartheta',\nu)|_1\le2nCE_0|\vartheta-\vartheta'|_1\le\tfrac12|\vartheta-\vartheta'|_1$ by $4nCE_0\le1$; then $|\Theta_\nu(\vartheta)-\Theta_\nu(\vartheta')|_1\ge|\vartheta-\vartheta'|_1-|w(\vartheta,\nu)-w(\vartheta',\nu)|_1\ge\tfrac12|\vartheta-\vartheta'|_1$, so $\Theta_\nu$ is injective, and $\Psi_\infty(0,\vartheta,\nu)=\Psi_\infty(0,\vartheta',\nu)$ implies $\Theta_\nu(\vartheta)=\Theta_\nu(\vartheta')$, hence $\vartheta=\vartheta'$. This is clause 1. [given, F1, F2, F6, algebra]

1.2 *Weighted phase Jacobians with the retracted parameters.* Write $\Lambda:=\Omega_{\alpha,\tau}$ and $D_j=B_{r_j/2}\times S_{s_j-8\sigma_j}\times O_{h_{j+1}}(\Lambda)$ as in the composition supplier. For $x_j=(z,\nu)\in D_j$, recursively put $x_i=(z_i,\lambda_i):=T_i(x_{i+1})$ for $i=j-1,\ldots,0$, so $x_i\in D_i$ and $\lambda_i=\phi_i(\lambda_{i+1})$. Since these parameter coordinates are independent of the input phase $z$, the phase chain rule gives $D_z\Psi_j=M_0\cdots M_{j-1}$ with $M_i:=D_z\widetilde\Phi_i(z_{i+1},\lambda_i)$. The domain inclusions and retraction bounds of the composition supplier put each evaluation in the domain of [F7]'s one-step estimate. As $W_iW_{i+1}^{-1}=\operatorname{diag}(\eta_iI_n,\tfrac12I_n)$, [F7] gives $\|W_iM_iW_{i+1}^{-1}\|\le(1+CE_i)/2\le9/16$, using $CE_i\le CE_0\le1/(4n)\le1/8$. Inserting the adjacent weights into the product yields $\|W_0D_z\Psi_jW_j^{-1}\|\le(9/16)^j\le1$, including the identity product at $j=0$. [given, F1, F7, algebra]

2.1 *Descent and injectivity on the torus.* By [F1] each $\Psi_j$ is $2\pi$-equivariant and $\mathcal L$ is invariant under $\vartheta\mapsto\vartheta+2\pi k$; passing to the uniform limit on $\mathcal L$ gives $\Psi_\infty(0,\vartheta+2\pi k,\nu)=\Psi_\infty(0,\vartheta,\nu)+(0,2\pi k)$, so $\vartheta\mapsto\Psi_\infty(0,\vartheta,\nu)$ maps equivalent points to points whose difference lies in $\{0\}\times2\pi\mathbb Z^n$ and therefore induces a well-defined map $\widehat\Psi_\nu$ on $\mathbb T^n$; it is continuous by the quotient property of [F3]; if $\widehat\Psi_\nu(\pi\vartheta)=\widehat\Psi_\nu(\pi\vartheta')$, then $\Theta_\nu(\vartheta)-\Theta_\nu(\vartheta')=2\pi k$ for some $k\in\mathbb Z^n$, and putting $\vartheta'':=\vartheta-2\pi k$ the equivariance gives $\Theta_\nu(\vartheta'')=\Theta_\nu(\vartheta')$, so step 1.1 forces $\vartheta''=\vartheta'$, i.e. $\pi\vartheta=\pi\vartheta'$; hence $\widehat\Psi_\nu$ is injective. This is clause 2. [step 1.1, F1, F3, algebra]

2.2 *Immersion.* Let $v\in\mathbb C^n$ and suppose $D_\vartheta\Psi_\infty(0,\vartheta,\nu)v=0$ at a real $\vartheta$; the second component of this derivative is $(I_n+\partial_\vartheta w(\vartheta,\nu))v$, so $|v|_1=|-\partial_\vartheta w(\vartheta,\nu)v|_1\le2nCE_0|v|_1\le\tfrac12|v|_1$ by the entrywise bound of step 1.1, and [F4] gives $v=0$; hence the differential has rank $n$. This is clause 3. [step 1.1, F1, F4, algebra]

2.3 *The finite normal-form residual.* Fix a real label $\nu$ and a real phase point in $D_j$. The finite phase maps and parameter images are real by the one-step symmetry already proved in [[lem-kam-conjugation-symmetry-of-the-construction]]; they are canonical by the composition supplier. Put $H:=H_0$ and freeze its original parameter at $\chi_j(\nu)$. The exact identity $H(\Psi_j(z,\nu);\chi_j(\nu))=e_j(\nu)+\nu\cdot I+P_j(z,\nu)$ and the pointwise transport calculation [F5] give $X_H(\Psi_j;\chi_j(\nu))-D_z\Psi_j(0,\nu)=D_z\Psi_jX_{P_j}$. Here $(0,\nu)$ denotes the constant phase vector, while the parameter is fixed. By step 1.2 and [F8], the maximum norm of this residual after multiplication by $W_0$ is at most $2\varepsilon_j/(r_j\sigma_j)=2\alpha E_j\sigma_j^{\mu-1}$. Since $E_j\le4^{-j}E_0$, $\sigma_j=\sigma_02^{-j}$ and $\mu>1$, this bound tends to zero. [step 1.2, F1, F5, F7, F8, algebra]

3.1 *Lipschitz inverse.* Let $x=\pi\vartheta$, $y=\pi\vartheta\prime$. Choose an integer vector $k$ minimizing $|\Theta_\nu(\vartheta)-\Theta_\nu(\vartheta\prime)-2\pi k|_\infty$; such a minimizer exists by choosing a closest integer in each coordinate. Step 1.1 applied to $\vartheta-2\pi k$ and $\vartheta\prime$, with equivariance from step 2.1, gives $|\vartheta-\vartheta\prime-2\pi k|_1\le2|\Theta_\nu(\vartheta)-\Theta_\nu(\vartheta\prime)-2\pi k|_1\le2n\,d_{\mathbb T^n}(\pi\Theta_\nu(\vartheta),\pi\Theta_\nu(\vartheta\prime))$. The domain quotient distance is at most the left-hand side, and the phase distance is at least its angular quotient distance, so $d_{\mathbb T^n}(x,y)\le2n\,d_{\mathrm{phase}}(\widehat\Psi_\nu(x),\widehat\Psi_\nu(y))$. [step 1.1, step 2.1, algebra]

3.2 *The limiting invariance identity.* At $z=(0,\vartheta)$ with real $\vartheta$, [F1] supplies convergence of the phase maps, their angular derivatives and the parameter maps. Each extended image lies in $D_0$, so the action limit has maximum norm at most $r_0/2<r_0$, and $\operatorname{dist}_\infty(\chi_\infty(\nu),\Lambda)\le h_1=h_04^{-\mu}<h_0$; the latter follows from the triangle inequality for distance and convergence. All limiting coordinates are real by [F6] and the symmetry supplier, so the angle limit lies in $S_{s_0}$. The limit is therefore inside the open domain of $H_0$, where $X_H$ is continuous. Passing to the limit in step 2.3, with $W_0$ a fixed invertible matrix, gives $X_H(\Psi_\infty(0,\vartheta,\nu);\chi_\infty(\nu))=\sum_i\nu_i\partial_{\vartheta_i}\Psi_\infty(0,\vartheta,\nu)$. The chain rule then makes $t\mapsto\Psi_\infty(0,\vartheta_0+t\nu,\nu)$ an integral curve for every real $t$. [step 2.3, F1, F5, F6, algebra]

4.1 *The embedding.* Let $U\subseteq\mathbb T^n$ be open and $x_0\in U$; by [F3] there is $\delta>0$ with $\{x:d_{\mathbb T^n}(x,x_0)<\delta\}\subseteq U$, and by step 3.1 every $y$ with $d_{\mathrm{phase}}(\widehat\Psi_\nu(y),\widehat\Psi_\nu(x_0))<\delta/(2n)$ satisfies $d_{\mathbb T^n}(y,x_0)<\delta$, hence lies in $U$; therefore $\widehat\Psi_\nu(U)$ is relatively open in the image, so the continuous bijection $\widehat\Psi_\nu:\mathbb T^n\to\widehat\Psi_\nu(\mathbb T^n)$ has continuous inverse, i.e. is a homeomorphism onto its image. This proves clause 4, together with the reality statement of [F6]. [step 2.1, step 3.1, F3, F6, algebra]

5.1 *The limiting Lagrangian image.* The inclusion $\iota_0(\vartheta):=(0,\vartheta)$ has $\iota_0^*\omega=0$. At each fixed real target label the canonical phase map satisfies $(\Psi_j\circ\iota_0)^*\omega=\iota_0^*(\Psi_j^*\omega)=0$. Each coefficient of this pullback is a finite sum of products of first angular derivatives of $\Psi_j\circ\iota_0$; their convergence in [F1] therefore gives $(\Psi_\infty\circ\iota_0)^*\omega=0$. Together with the embedding of step 4.1 and the integral curves of step 3.2, this proves clause 5 under the stated $4nCE_0\le1$, without assuming $CE_0\le1/16$. [step 4.1, step 3.2, F1, F5, algebra] ∎

## Remarks

- **Sharpness of the smallness.** The hypothesis $4nCE_0\le1$ is exactly what makes the angle map a strict contraction in the $\ell^1$-norm; it costs only a smaller step constant, hence a smaller final threshold, and no loss in the structure of the conclusion.
- **What is and is not claimed.** The lemma produces an embedded torus for each Diophantine parameter; it does not claim that the family has positive measure (that is the content of the measure theorem) nor that the motion is stable in any sense beyond invariance.
