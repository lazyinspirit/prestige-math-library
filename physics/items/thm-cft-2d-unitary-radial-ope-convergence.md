---
id: thm-cft-2d-unitary-radial-ope-convergence
kind: theorem
title: Euclidean radial OPE convergence in a unitary CFT
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-2d-radial-operator-product-expansion
  - def-cft-2d-radial-state-operator-data
  - def-cft-2d-radial-quantization
  - lem-cft-positive-discrete-laplace-tauberian
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-countable-choice
  - def-euler-gamma-function
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-2d-radial-operator-product-expansion: mathematical-premise
  def-cft-2d-radial-state-operator-data: mathematical-premise
  def-cft-2d-radial-quantization: mathematical-premise
  lem-cft-positive-discrete-laplace-tauberian: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-euler-gamma-function: mathematical-premise
axiom_use: "Assume only Countable Choice for the supplied Parseval theorem and the self-adjoint operator convention in radial state/operator data. The proof uses no full Axiom of Choice and no physical postulate."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Duccio Pappadopulo, Slava Rychkov, Johnny Espin, Riccardo Rattazzi, OPE Convergence in Conformal Field Theory, arXiv:1208.6449v3
      url: https://arxiv.org/pdf/1208.6449v3
      locator: "§2, equations (2.1)–(2.5), PDF pp. 7–8; §§4.1–4.2 and 4.4, PDF pp. 13–18; §§5.1–5.2, PDF pp. 19–22, especially (5.11), (5.14) and (5.17)–(5.18): the radial factor is r to the descendant energy and the angle lies in the overlap; June 2015 footnote 9."
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§2.2, printed pp. 15–20: radial coordinate and order; §2.3, printed pp. 21–24: free-field OPE normalization. The source does not prove the general convergence theorem."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the separated-insertion clause, let $\Phi$ and $\Psi$ be the fused-pair and reflected complementary states, and let $\mathcal H_*\subseteq\mathcal H$ be a closed linear subspace with the inherited Hilbert structure containing both states and the complete orthonormal energy eigenfamily $(e_\alpha)_{\alpha\in I}$. Put $c_\alpha=\langle\Phi,e_\alpha\rangle$ and $d_\alpha=\langle\Psi,e_\alpha\rangle$. The full OPE label set, including every descendant and multiplicity, must be bijective with $I$; its finite-subset partial-sum net must be exactly the corresponding finite-subset net over $I$, with each matched term equal to $d_\alpha\overline{c_\alpha}$.

In a selected two-dimensional Euclidean unitary radial CFT model, assume the adopted state/operator data of [[def-cft-2d-radial-state-operator-data]], a complete orthonormal family of radial-dilation energy eigenvectors in the chosen channel sector, finite Hilbert norm for the fused-pair state and reflected complementary state, a radial cut/composition identity, explicit coefficient/state compatibility in the chosen overlap order, and pairwise distinct insertions with (n\ge1) satisfying
$$|x-y|<\min_i|z_i-y|.$$
With the inner product linear in its first argument, the correlator OPE for $\phi(x)\phi(y)\prod_i\psi_i(z_i)$ converges absolutely in that radial channel. The statement concerns the selected model data and does not prove that an arbitrary CFT axiomatization constructs those data.

For the separate identical-scalar four-point clause, let $\phi$ be a real scalar primary of dimension $\Delta_\phi>0$ with two-point normalization $\langle\phi(x)\phi(y)\rangle=|x-y|^{-2\Delta_\phi}$. Assume the selected model has a countably enumerated complete discrete global-conformal primary spectrum in this channel, a unique unit-normalized identity contribution with a positive gap to the next contribution, a reflection-positive two-pair radial spectral expansion with nonnegative angle-zero coefficients, and the explicit crossed-channel identity-dominance asymptotic stated in [A7]. The identity gap alone is not used as a substitute for that asymptotic. For $z\in\mathbb C\setminus[1,\infty)$, set
$$\rho(z):=\frac{z}{(1+\sqrt{1-z})^2},$$
where the square root is the branch with positive real part on this cut plane, and put $\bar z=\overline z$. Fix the selected block-power branches by continuation on a simply connected radial configuration chart; the estimate below depends only on their absolute values. Let $g_{\Delta\ge\Delta_*}(z,\bar z)$ denote the sum of global-conformal (in two dimensions, quasi-primary-family) block contributions whose intermediate primary dimension is at least $\Delta_*$. For $0<|\rho(z)|<1$, in the source's large-cutoff regime $\Delta_*\gg\Delta_\phi/(1-|\rho(z)|)$ and above the energy threshold where the proved cumulative spectral asymptotic applies,
$$|g_{\Delta\ge\Delta_*}(z,\bar z)|\lesssim \frac{2^{4\Delta_\phi}\Delta_*^{4\Delta_\phi}|\rho(z)|^{\Delta_*}}{\Gamma(4\Delta_\phi+1)}.$$
Here $A_{\Delta_*}\lesssim B_{\Delta_*}$ means $\limsup_{\Delta_*\to\infty}A_{\Delta_*}/B_{\Delta_*}\le1$ at fixed $z$ in the stated regime. At $z=0$, the high-dimension tail vanishes by its positive-energy radial expansion. The four-point clause is unitary/global-conformal; it does not assert convergence for nonunitary or logarithmic theories or for full Virasoro blocks.

At general angle $\theta=\arg\rho$, put $r=|\rho|$ and interpret $r^E=\exp(E\log r)$ for $r>0$. The selected radial model supplies a closed Hilbert channel subspace $\mathcal H_4\subseteq\mathcal H$, a family of linear isometries $R_\theta:\mathcal H_4\to\mathcal H_4$ indexed by $\theta\in\mathbb R/(2\pi\mathbb Z)$ with $R_0=I$ and $R_{\theta+\varphi}=R_\theta R_\varphi$, and for each descendant label $j$ a finite-norm vector $u_{j,0}\in\mathcal H_4$ and a weight $\lambda_j\ge0$. Its term is $b_j(\theta)r^{E_j}$, where $b_j(\theta):=\lambda_j\langle u_{j,0},R_\theta u_{j,0}\rangle$. Thus the angle-zero coefficient $a_j:=b_j(0)=\lambda_j\|u_{j,0}\|^2$ is nonnegative and Cauchy–Schwarz gives $|b_j(\theta)|\le a_j$.

## Facts & Assumptions

**Given:** The selected radial data, a positive Hilbert inner product linear in its first argument, a complete orthonormal energy eigenfamily for the selected channel, finite-norm states, the radial cut/composition identity, coefficient/state compatibility, and separated insertions. For the separate four-point clause, also assume the normalized real scalar, positive discrete primary spectrum, identity gap, nonnegative reflection-positive spectral coefficients, crossed-channel identity dominance, and the stated source normalization.

[F1] [[def-cft-2d-radial-quantization]]: $\tau=\log|z|$ is Euclidean radial time; larger radii are to the left in a radially ordered product.

[F2] [[def-cft-2d-radial-state-operator-data]]: $\mathcal H$ is a complex Hilbert space with inner product linear in the first argument; radial insertion states, their norms, and the declared reflection/adjoint are model data.

[F3] [[def-cft-2d-radial-operator-product-expansion]]: the Hilbert or weak-correlator OPE interpretation, channel family, branch data, and global-conformal block grouping are declared separately.

[F4] [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]: under Countable Choice, completeness of an orthonormal family in a real or complex Hilbert space implies finite-subset-net convergence and Parseval's identity.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle u,v\rangle|\le\|u\|\|v\|$ in a real or complex inner-product space.

[F6] [[def-countable-choice]]: $\mathrm{AC}_\omega$ selects from a countable family of nonempty sets.

[F7] [[lem-cft-positive-discrete-laplace-tauberian]]: if $L(s)=\sum_n a_ne^{-sE_n}\sim s^{-\alpha}$ with positive discrete weights, then $\sum_{E_n\le E}a_n\sim E^\alpha/\Gamma(\alpha+1)$.

[F8] [[def-euler-gamma-function]]: for $q>0$, $\Gamma(q)=\int_0^\infty t^{q-1}e^{-t}\,dt$, and this integral is finite.

[A1] The channel sector $\mathcal H_*$ is a closed linear subspace of $\mathcal H$ with its inherited Hilbert structure. It has a complete orthonormal family $(e_\alpha)_{\alpha\in I}$ of eigenvectors of the model's radial energy operator $K$: for each $\alpha$, $e_\alpha\in D(K)$ and $K e_\alpha=E_\alpha e_\alpha$ for some $E_\alpha\ge0$. No continuous-spectrum expansion is included.

[A2] For the chosen separation circle, the fused-pair state $\Phi$ and reflected complementary state $\Psi$ belong to $\mathcal H_*$ and have finite Hilbert norm.

[A3] The radial cut/composition rule for this selected model identifies the correlation functional with the Hilbert overlap $\langle\Psi,\Phi\rangle$ on the separating circle. This is an adopted gluing axiom for the chosen correlation functional.

[A4] The selected OPE's complete label set $\Lambda_{\rm OPE}$ includes every descendant, degeneracy, and multiplicity label and is bijective with the complete eigenfamily $(e_\alpha)_{\alpha\in I}$ by a map $b_{\rm OPE}:\Lambda_{\rm OPE}\to I$. The declared finite-subset partial-sum net is indexed by all finite subsets of $\Lambda_{\rm OPE}$ and maps under $b_{\rm OPE}$ to the full finite-subset net over $I$, with no omitted or additional terms. If $c_\alpha:=\langle\Phi,e_\alpha\rangle$ and $d_\alpha:=\langle\Psi,e_\alpha\rangle$, the term for $\lambda\in\Lambda_{\rm OPE}$ is $d_{b_{\rm OPE}(\lambda)}\overline{c_{b_{\rm OPE}(\lambda)}}$ under the selected radial reflection/adjoint convention. This exhaustive correspondence and compatibility are model data or separately proved; completeness alone does not imply them.

[A5] In the separated-insertion clause, $x,y,z_1,\ldots,z_n$ are pairwise distinct, $n\ge1$, and satisfy the displayed strict separation inequality, so there is a circular radial slice separating the fused pair from the complementary insertions.

[A6] In the four-point clause, a fixed countable enumeration of all descendant labels $j$, including degeneracies and multiplicities, has real nonnegative energy $E_j=\Delta_j+n_j$, with primary dimension $\Delta_j\ge0$ and integer descendant level $n_j\ge0$. The selected model supplies a closed Hilbert sector $\mathcal H_4\subseteq\mathcal H$ and a family of linear isometries $R_\theta:\mathcal H_4\to\mathcal H_4$ indexed by $\theta\in\mathbb R/(2\pi\mathbb Z)$, with $R_0=I$ and $R_{\theta+\varphi}=R_\theta R_\varphi$. For each $j$, it supplies a finite-norm vector $u_{j,0}\in\mathcal H_4$ and a nonnegative weight $\lambda_j$. Set $u_{j,\theta}:=R_\theta u_{j,0}$, $b_j(\theta):=\lambda_j\langle u_{j,0},u_{j,\theta}\rangle$, and $a_j:=b_j(0)=\lambda_j\|u_{j,0}\|^2\ge0$. Cauchy–Schwarz and $\|u_{j,\theta}\|=\|u_{j,0}\|$ give $|b_j(\theta)|\le a_j$. The term at $\rho=re^{i\theta}$ is $b_j(\theta)r^{E_j}$, with $r=|\rho|$ and all angular dependence in the rotation overlap $b_j(\theta)$, so its modulus is at most $a_jr^{E_j}$. For real $0<r<1$, the angle-zero overlap is $L(\beta)=\sum_j a_je^{-\beta E_j}$, where $r=e^{-\beta}$, and this series is finite for each $\beta>0$. These are explicit spectral, rotation, and reflection-positivity data of the selected model.

[A7] In the two-pair geometry with $r\in(0,1)$, the crossed-channel OPE has a unit-normalized identity term and its remaining contribution is $o((1-r)^{-4\Delta_\phi})$ as $r\uparrow1$. Thus the unnormalized overlap satisfies $L(-\log r)\sim(1-r)^{-4\Delta_\phi}$. This identity-dominance asymptotic is an explicit selected-model input, not a consequence of the gap alone or a theorem about every unitary CFT.

[A8] For the normalized conformal-block sum, use the source convention
$$\langle\phi(x_1)\phi(x_2)\phi(x_3)\phi(x_4)\rangle =\frac{g(u,v)}{|x_{12}|^{2\Delta_\phi}|x_{34}|^{2\Delta_\phi}},$$
where $u=z\bar z$ and $v=(1-z)(1-\bar z)$, and the two-pair positions are $x_1=\rho,\ x_2=-\rho,\ x_3=-1,\ x_4=1$. The global-conformal block tail is this same descendant tail multiplied by $|x_{12}|^{2\Delta_\phi}|x_{34}|^{2\Delta_\phi}$, grouped by intermediate primary dimension.

## Proof


1.1 Since $|x-y|<\min_i|z_i-y|$, choose $R$ strictly between these two quantities. The circle of radius $R$ centered at $y$ contains both fused insertions and excludes each complementary insertion. The model's radial cut assigns states $\Phi$ and $\Psi$ to its two sides; [A3] identifies their overlap with the correlation functional. [F1, F2, A2, A3, A5, construct]

1.2 For a finite set $S\subseteq I$, put $\Phi_S=\sum_{\alpha\in S}c_\alpha e_\alpha$. Under the Countable Choice premise [F6] required by [F4], Parseval's net clause gives $\Phi_S\to\Phi$, and its sum clause gives $\sum_\alpha|c_\alpha|^2=\|\Phi\|^2$. The same application to $\Psi$ gives the corresponding statements for $d_\alpha$. [F4, F6, A1, A2]

1.3 For the four-point clause, write $r=e^{-\beta}$ with $\beta>0$. When $r\uparrow1$, the two crossed pairs in the stated positions have separation $1-r$; [A7] gives $L(\beta)\sim(1-r)^{-4\Delta_\phi}$. Since
$$\frac{\beta}{1-r}=\frac{-\log r}{1-r}\longrightarrow1$$
(as follows from $-\log r=\int_r^1 t^{-1}\,dt$), this is $L(\beta)\sim\beta^{-4\Delta_\phi}$. [A6, A7, algebra]

2.1 For every finite $S$, linearity in the first argument and conjugate-linearity in the second give
$$\langle\Psi,\Phi_S\rangle=\sum_{\alpha\in S}\overline{c_\alpha}\langle\Psi,e_\alpha\rangle =\sum_{\alpha\in S}d_\alpha\overline{c_\alpha}.$$
As $\Phi_S\to\Phi$, Cauchy–Schwarz implies $\langle\Psi,\Phi_S\rangle\to\langle\Psi,\Phi\rangle$. Moreover, for every finite $S$, finite Cauchy–Schwarz gives
$$\sum_{\alpha\in S}|d_\alpha c_\alpha| \le\left(\sum_{\alpha\in S}|d_\alpha|^2\right)^{1/2} \left(\sum_{\alpha\in S}|c_\alpha|^2\right)^{1/2} \le\|\Psi\|\,\|\Phi\|.$$
Taking the supremum over finite $S$ shows the OPE scalar series is absolutely convergent. [F4, F5, A1, A2, step 1.2, algebra]

2.2 Apply [F7] with $\alpha=4\Delta_\phi>0$ to the countable nonnegative energies and weights in [A6]. The cumulative positive spectral sum $F(E):=\sum_{E_j\le E}a_j$ therefore satisfies
$$F(E)\sim\frac{E^{4\Delta_\phi}}{\Gamma(4\Delta_\phi+1)}.$$
For every $\varepsilon>0$, choose $E_{\mathrm{HL}}$ so that $F(E)\le(1+\varepsilon)E^{4\Delta_\phi}/\Gamma(4\Delta_\phi+1)$ for $E\ge E_{\mathrm{HL}}$. [F7, A6, step 1.3, choose]

3.1 The coefficient/state compatibility [A4] identifies each summand $d_\alpha\overline{c_\alpha}$ with the corresponding radial OPE contribution. The radial channel and its convergence meaning are the declared data of [F3], while [A5] supplies the separation. Thus the correlator OPE equals $\langle\Psi,\Phi\rangle$ and converges absolutely. This is a conditional deduction from the selected Hilbert and OPE data. [F3, A3, A4, A5, step 1.1, step 2.1, algebra]

3.2 For any finite subset $S\subseteq\{j:E_j\ge E_*\}$, positivity gives the pointwise inequality $F(E)\ge\sum_{j\in S}a_j\mathbf1_{[E_j,\infty)}(E)$ for $E\ge E_*$. The function $F$ is locally bounded and monotone, and its polynomial growth from step 2.2 makes the following nonnegative improper integral finite. Integrating the finite sum first gives
$$\sum_{j\in S}a_je^{-\beta E_j} \le\beta\int_{E_*}^{\infty}e^{-\beta E}F(E)\,dE,$$
because $\beta\int_{E_j}^{\infty}e^{-\beta E}\,dE=e^{-\beta E_j}$. Taking the supremum over finite $S$, then applying step 2.2 for $E_*\ge E_{\mathrm{HL}}$, bounds the complete OPE tail by
$$\frac{1+\varepsilon}{\Gamma(4\Delta_\phi+1)} \beta\int_{E_*}^{\infty}E^{4\Delta_\phi}e^{-\beta E}\,dE.$$
[step 2.2, A6, algebra]

4.1 Substitution $t=\beta(E-E_*)$ rewrites the last integral as
$$\beta\int_{E_*}^{\infty}E^\alpha e^{-\beta E}\,dE =E_*^\alpha e^{-\beta E_*} \int_0^\infty e^{-t}\left(1+\frac{t}{\beta E_*}\right)^\alpha dt, \qquad \alpha=4\Delta_\phi.$$
As $\beta E_*\to\infty$, the final integral tends to $1$: for $\beta E_*\ge1$, the mean-value theorem bounds its integrand difference from $e^{-t}$ by
$$\frac{\alpha}{\beta E_*}\,t(1+t)^{\max(\alpha-1,0)}e^{-t},$$
whose integral is finite: on $[0,1]$ it is bounded, and for $t\ge1$, with $q=\max(\alpha-1,0)$, one has $t(1+t)^qe^{-t}\le2^qt^{q+1}e^{-t}$, whose integral is $2^q\Gamma(q+2)<\infty$ by [F8]. The integral of the error bound is therefore $O((\beta E_*)^{-1})$, proving convergence to $1$. Letting $\varepsilon\downarrow0$, this proves
$$L_{\ge E_*}(\beta)\lesssim \frac{E_*^{4\Delta_\phi}e^{-\beta E_*}}{\Gamma(4\Delta_\phi+1)}$$
in the stated large-energy regime. [F8, step 3.2, algebra]

5.1 In the two-pair positions [A8], direct substitution in the cross-ratio formula $z=(x_1-x_2)(x_3-x_4)/((x_1-x_3)(x_2-x_4))$ gives $z=4\rho/(1+\rho)^2$; solving with the selected branch yields $\rho=z/(1+\sqrt{1-z})^2$. The denominator in [A8] is
$$|x_{12}|^{2\Delta_\phi}|x_{34}|^{2\Delta_\phi} =(2|\rho|)^{2\Delta_\phi}2^{2\Delta_\phi} =2^{4\Delta_\phi}|\rho|^{2\Delta_\phi}\le2^{4\Delta_\phi}.$$
Thus the reduced conformal-block tail is bounded by $2^{4\Delta_\phi}$ times the radial OPE tail of step 4.1; the factor is exactly the source correction from its June 2015 footnote 9. [A8, step 4.1, algebra]

6.1 For $z\in\mathbb C\setminus([1,\infty)\cup\{0\})$, the principal square root $s=\sqrt{1-z}$ has $\operatorname{Re}s>0$, and $\rho=(1-s)/(1+s)$; hence $|\rho|<1$, since $|1-s|<|1+s|$. Write $\rho=re^{i\theta}$ and $\beta=-\log r>0$. For every descendant label $j$, [A6] and Cauchy–Schwarz [F5] give $|b_j(\theta)r^{E_j}|\le a_jr^{E_j}=a_je^{-\beta E_j}$: the angular dependence is already in $b_j(\theta)$, and no additional energy-dependent phase is inserted. Since $L(\beta)<\infty$, the complex-angle descendant series converges absolutely and its full tail is bounded by the positive angle-zero tail $L_{\ge\Delta_*}(\beta)$. Every descendant of a primary with $\Delta_j\ge\Delta_*$ has $E_j=\Delta_j+n_j\ge\Delta_*$, so the absolute global-conformal block tail, grouped by intermediate primary, is bounded by the corresponding complete descendant tail. Steps 3.2–5.1 give its estimate at $r=|\rho|$, including the prefactor in [A8], whose magnitude $2^{4\Delta_\phi}|\rho|^{2\Delta_\phi}$ is at most $2^{4\Delta_\phi}$. At $z=0$, every term in a tail with $\Delta_*>0$ has positive radial energy and vanishes. [A6, A8, F5, step 5.1, algebra] ∎
