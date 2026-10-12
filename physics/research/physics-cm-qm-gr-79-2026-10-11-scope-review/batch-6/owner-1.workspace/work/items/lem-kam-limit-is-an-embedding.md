---
id: lem-kam-limit-is-an-embedding
kind: lemma
title: "The KAM limit parametrisation is an embedding of the torus: injectivity modulo $2\\pi$, rank-$n$ differential and Lipschitz inverse"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 10
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-kam-parameter-sequences-satisfy-all-step-hypotheses, lem-kam-composed-map-and-derivative-convergence, thm-parameter-kam-torus-invariance-and-lagrangianity, lem-kam-conjugation-symmetry-of-the-construction, thm-mean-value-inequality, def-quotient-topology, def-product-topology, def-continuous-map-top, def-metric-ball, def-cm-phase-domain-and-standard-symplectic-two-form]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-kam-parameter-sequences-satisfy-all-step-hypotheses: mathematical-premise
  lem-kam-composed-map-and-derivative-convergence: mathematical-premise
  thm-parameter-kam-torus-invariance-and-lagrangianity: mathematical-premise
  lem-kam-conjugation-symmetry-of-the-construction: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
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
4. **Embedding with Lipschitz inverse.** With $d_{\mathbb T^n}$ the quotient distance $d_{\mathbb T^n}(\pi\vartheta,\pi\vartheta'):=\min_{k\in\mathbb Z^n}|\vartheta-\vartheta'-2\pi k|_\infty$ and the supremum distance on $\mathbb R^n\times\mathbb T^n$, the inverse of $\widehat\Psi_\nu$ on its image is Lipschitz with constant $2n$, and $\widehat\Psi_\nu$ is a homeomorphism of $\mathbb T^n$ onto its image; in particular the image is an embedded $n$-dimensional torus in the phase space, and it is real (clause 3 of [[lem-kam-conjugation-symmetry-of-the-construction]]).
5. **Dynamical reading.** The image of $\widehat\Psi_\nu$ is invariant under $X_H(\,\cdot\,;\chi_\infty(\nu))$ with frequency $\nu$ and Lagrangian, in the sense of clauses 1-3 of [[thm-parameter-kam-torus-invariance-and-lagrangianity]].


## Facts & Assumptions

**Given:** The data, constants and one-step construction of [[lem-kam-composed-map-and-derivative-convergence]], a conjugation-symmetric initial perturbation, the limit family $\Psi_\infty=(b,\mathrm{id}+w)$ and the smallness $4nCE_0\le1$.

[F1] The conclusions of [[lem-kam-composed-map-and-derivative-convergence]]: $\Psi_j\to\Psi_\infty$ uniformly on $\mathcal L$ together with all $\vartheta$-derivatives; each $\Psi_j$ is $2\pi$-equivariant in $\vartheta$, $\Psi_j(I,\vartheta+2\pi k,\nu)=\Psi_j(I,\vartheta,\nu)+(0,2\pi k)$ for all $k\in\mathbb Z^n$ and all points of $D_j$ (clause 1); and the size bounds $|b|\le2Cr_0E_0$, $|w|\le2C\sigma_0E_0$, $|\partial_{\vartheta_i}w|\le2CE_0$ on $S_{s_0/4}\times\Omega_{\alpha,\tau}$ (clause 4).

[F2] Mean value estimate: if $g$ is continuously differentiable on a convex open set containing the segment from $x$ to $y$, then along the segment $|g(x)-g(y)|\le\sup_{\text{segment}}\|Dg\|\,|x-y|$; applied componentwise with $g=w_j$ ([[thm-mean-value-inequality]], [[def-metric-ball]]).

[F3] Quotient and product topology (for every $n\ge1$, as in the cited Definition) of $\mathbb T^n$ and its distance: $\pi:\mathbb R^n\to\mathbb T^n$ is continuous and $\mathbb T^n$ carries the quotient topology, in which a subset $V$ is open exactly when $\pi^{-1}(V)$ is open; the phase space $\mathbb R^n\times\mathbb T^n$ carries the product topology; $\pi(V)$ is open for every open $V\subseteq\mathbb R^n$ because $\pi^{-1}(\pi(V))=\bigcup_{k\in\mathbb Z^n}(V+2\pi k)$ is open; in particular each ball $\{x:d_{\mathbb T^n}(x,x_0)<r\}=\pi(B_r(\vartheta_0))$ is open ([[def-holomorphic-kam-domain-and-diophantine-labels]], [[def-quotient-topology]], [[def-product-topology]], [[def-continuous-map-top]], [[def-metric-ball]]).

[F4] Elementary linear algebra: if $A\in M_n(\mathbb C)$ satisfies $|Av|_1\le\tfrac12|v|_1$ for all $v\in\mathbb C^n$, then $I_n+A$ is injective, since $(I_n+A)v=0$ gives $|v|_1=|Av|_1\le\tfrac12|v|_1$.

[F5] The transport, invariance and Lagrangian statements of [[thm-parameter-kam-torus-invariance-and-lagrangianity]] clauses 1-3, for the parameter Hamiltonian $H$ of its statement, together with the two-form $\omega=\sum_j d\vartheta_j\wedge dI_j$ of [[def-cm-phase-domain-and-standard-symplectic-two-form]].

[F6] Reality: for real $\vartheta,\nu$ the point $\Psi_\infty(0,\vartheta,\nu)$ is real ([[lem-kam-conjugation-symmetry-of-the-construction]] clause 3).

## Proof

**Proof technique:** direct; bound the angle error from the derivative bound, descend to the torus by equivariance, and control the inverse through the contraction estimate.

1.1 *Contraction and injectivity.* By [F1] each partial derivative obeys $|\partial_{\vartheta_i}w_j|\le2CE_0$ on the domain; fix real $\vartheta,\vartheta'$ and apply [F2] to the components $w_j$ along the segment, giving $|w_j(\vartheta)-w_j(\vartheta')|\le2CE_0|\vartheta-\vartheta'|_1$ and hence $|w(\vartheta,\nu)-w(\vartheta',\nu)|_1\le2nCE_0|\vartheta-\vartheta'|_1\le\tfrac12|\vartheta-\vartheta'|_1$ by $4nCE_0\le1$; then $|\Theta_\nu(\vartheta)-\Theta_\nu(\vartheta')|_1\ge|\vartheta-\vartheta'|_1-|w(\vartheta,\nu)-w(\vartheta',\nu)|_1\ge\tfrac12|\vartheta-\vartheta'|_1$, so $\Theta_\nu$ is injective, and $\Psi_\infty(0,\vartheta,\nu)=\Psi_\infty(0,\vartheta',\nu)$ implies $\Theta_\nu(\vartheta)=\Theta_\nu(\vartheta')$, hence $\vartheta=\vartheta'$. This is clause 1. [given, F1, F2, algebra]

2.1 *Descent and injectivity on the torus.* By [F1] each $\Psi_j$ is $2\pi$-equivariant and $\mathcal L$ is invariant under $\vartheta\mapsto\vartheta+2\pi k$; passing to the uniform limit on $\mathcal L$ gives $\Psi_\infty(0,\vartheta+2\pi k,\nu)=\Psi_\infty(0,\vartheta,\nu)+(0,2\pi k)$, so $\vartheta\mapsto\Psi_\infty(0,\vartheta,\nu)$ maps equivalent points to points whose difference lies in $\{0\}\times2\pi\mathbb Z^n$ and therefore induces a well-defined map $\widehat\Psi_\nu$ on $\mathbb T^n$; it is continuous by the quotient property of [F3]; if $\widehat\Psi_\nu(\pi\vartheta)=\widehat\Psi_\nu(\pi\vartheta')$, then $\Theta_\nu(\vartheta)-\Theta_\nu(\vartheta')=2\pi k$ for some $k\in\mathbb Z^n$, and putting $\vartheta'':=\vartheta-2\pi k$ the equivariance gives $\Theta_\nu(\vartheta'')=\Theta_\nu(\vartheta')$, so step 1.1 forces $\vartheta''=\vartheta'$, i.e. $\pi\vartheta=\pi\vartheta'$; hence $\widehat\Psi_\nu$ is injective. This is clause 2. [step 1.1, F1, F3, algebra]

2.2 *Immersion.* Let $v\in\mathbb C^n$ and suppose $D_\vartheta\Psi_\infty(0,\vartheta,\nu)v=0$ at a real $\vartheta$; the second component of this derivative is $(I_n+\partial_\vartheta w(\vartheta,\nu))v$, so $|v|_1=|-\partial_\vartheta w(\vartheta,\nu)v|_1\le2nCE_0|v|_1\le\tfrac12|v|_1$ by the entrywise bound of step 1.1, and [F4] gives $v=0$; hence the differential has rank $n$. This is clause 3. [step 1.1, F1, F4, algebra]

3.1 *Lipschitz inverse.* Let $x=\pi\vartheta$, $y=\pi\vartheta\prime$. Choose an integer vector $k$ minimizing $|\Theta_\nu(\vartheta)-\Theta_\nu(\vartheta\prime)-2\pi k|_\infty$; such a minimizer exists by choosing a closest integer in each coordinate. Step 1.1 applied to $\vartheta-2\pi k$ and $\vartheta\prime$, with equivariance from step 2.1, gives $|\vartheta-\vartheta\prime-2\pi k|_1\le2|\Theta_\nu(\vartheta)-\Theta_\nu(\vartheta\prime)-2\pi k|_1\le2n\,d_{\mathbb T^n}(\pi\Theta_\nu(\vartheta),\pi\Theta_\nu(\vartheta\prime))$. The domain quotient distance is at most the left-hand side, and the phase distance is at least its angular quotient distance, so $d_{\mathbb T^n}(x,y)\le2n\,d_{\mathrm{phase}}(\widehat\Psi_\nu(x),\widehat\Psi_\nu(y))$. [step 1.1, step 2.1, algebra]

4.1 *The embedding.* Let $U\subseteq\mathbb T^n$ be open and $x_0\in U$; by [F3] there is $\delta>0$ with $\{x:d_{\mathbb T^n}(x,x_0)<\delta\}\subseteq U$, and by step 3.1 every $y$ with $d_{\mathrm{phase}}(\widehat\Psi_\nu(y),\widehat\Psi_\nu(x_0))<\delta/(2n)$ satisfies $d_{\mathbb T^n}(y,x_0)<\delta$, hence lies in $U$; therefore $\widehat\Psi_\nu(U)$ is relatively open in the image, so the continuous bijection $\widehat\Psi_\nu:\mathbb T^n\to\widehat\Psi_\nu(\mathbb T^n)$ has continuous inverse, i.e. is a homeomorphism onto its image. This proves clause 4, together with the reality statement of [F6]. [step 2.1, step 3.1, F3, F6, algebra]

5.1 *Dynamical reading.* By clause 1 of [F5] the limit satisfies the invariance identity $X_H(\Psi_\infty(0,\vartheta,\nu);\chi_\infty(\nu))=\sum_j\nu_j\partial_{\vartheta_j}\Psi_\infty(0,\vartheta,\nu)$ and by clause 3 the pullback of $\omega$ along the real slice vanishes; combined with the embedding of step 4.1, the image of $\widehat\Psi_\nu$ is an embedded Lagrangian torus carrying quasi-periodic motion of frequency $\nu$ under $X_H(\,\cdot\,;\chi_\infty(\nu))$. This is clause 5. [step 4.1, F5, algebra] ∎

## Remarks

- **Sharpness of the smallness.** The hypothesis $4nCE_0\le1$ is exactly what makes the angle map a strict contraction in the $\ell^1$-norm; it costs only a smaller step constant, hence a smaller final threshold, and no loss in the structure of the conclusion.
- **What is and is not claimed.** The lemma produces an embedded torus for each Diophantine parameter; it does not claim that the family has positive measure (that is the content of the measure theorem) nor that the motion is stable in any sense beyond invariance.
