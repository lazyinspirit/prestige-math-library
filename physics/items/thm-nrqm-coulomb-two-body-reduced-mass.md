---
id: thm-nrqm-coulomb-two-body-reduced-mass
aliases: [ nrqm-coulomb-two-body-reduced-mass ]
kind: theorem
domain: mathematics
title: "Two-body reduced mass"
status: published
origin: pipeline
dependency_level: 11
deps:
  - thm-nrqm-coulomb-onto-radial-continuum-transform
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-nrqm-coulomb-infinitesimal-kinetic-bound
  - lem-nrqm-coulomb-three-dimensional-hardy-bound
  - thm-nrqm-coulomb-laguerre-bound-energy-exhaustion
  - thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy
  - thm-nrqm-coulomb-continuum-spectral-density
  - thm-nrqm-coulomb-jost-volterra-solution
  - thm-nrqm-coulomb-transported-radial-endpoint-realization
  - thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  - lem-nrqm-composites-euclidean-l2-product-unitary
  - lem-nrqm-composites-hilbert-tensor-construction
  - thm-kato-rellich
  - def-relative-boundedness-with-respect-to-an-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-schwartz-space-and-its-seminorms
  - thm-plancherel
  - lem-weak-derivatives-are-polynomial-fourier-multipliers
  - thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
  - def-sobolev-space-wkp-and-its-norm
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - def-directional-and-partial-derivatives
  - thm-extension-of-a-bounded-map-from-a-dense-subspace
  - cor-schwartz-convolution-and-product-transform-laws
  - def-countable-choice
  - def-axiom-of-choice
  - lem-nrqm-central-positive-scaling-spectral-measure
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
dependency_roles:
  thm-nrqm-coulomb-onto-radial-continuum-transform: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  thm-nrqm-coulomb-laguerre-bound-energy-exhaustion: mathematical-premise
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
  thm-nrqm-coulomb-continuum-spectral-density: mathematical-premise
  thm-nrqm-coulomb-jost-volterra-solution: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-extension-of-a-bounded-map-from-a-dense-subspace: mathematical-premise
  cor-schwartz-convolution-and-product-transform-laws: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-nrqm-central-positive-scaling-spectral-measure: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 10.1-10.2 pp. 221-225 (the one-particle reduction -Laplacian -
        gamma/|x| with the nucleus fixed at the origin; self-adjointness and
        sigma_ess = [0,infinity))"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella
        Archive), Section 8.1 pp. 182-185 (the two-body kinetic energies of
        nucleus and electron and the reduced mass mu in the Coulomb model)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $m_1,m_2>0$, put
$M:=m_1+m_2$, $\mu:=m_1m_2/M$, let $\kappa>0$, $\hbar>0$, and define the
linear coordinate map
$$\Phi:\mathbb R^6\to\mathbb R^6,\qquad \Phi(x_1,x_2):=\Bigl(R,r\Bigr),\qquad R:=\frac{m_1x_1+m_2x_2}{M},\quad r:=x_1-x_2,$$
with inverse $x_1=R+\frac{m_2}{M}r$, $x_2=R-\frac{m_1}{M}r$. Write $L^2=L^2(\mathbb R^6;\mathbb C)$ and for $f\in L^2$ put $(U_\Phi f)(R,r):=f(x_1,x_2)$ with $x_i$ expressed through $(R,r)$. Then:

(a) $\Phi$ is a linear isomorphism with $|\det\Phi|=1$, and $U_\Phi$ is a unitary operator on $L^2$;

(b) for every Schwartz function $f$, $U_\Phi(-(\hbar^2/2m_1)\Delta_{x_1}-(\hbar^2/2m_2)\Delta_{x_2})U_\Phi^{-1}f=(-(\hbar^2/2M)\Delta_R-(\hbar^2/2\mu)\Delta_r)f$; moreover both sides define the same self-adjoint operator on the common domain $H^2(\mathbb R^6;\mathbb C)$;

(c) the operator $H_2:=-(\hbar^2/2m_1)\Delta_{x_1}-(\hbar^2/2m_2)\Delta_{x_2}-\kappa/|x_1-x_2|$ with $D(H_2):=H^2(\mathbb R^6;\mathbb C)$ is self-adjoint, and $U_\Phi H_2U_\Phi^{-1}=T_R\otimes I+I\otimes C_\mu$ under the identification $L^2(\mathbb R^6)\cong L^2(\mathbb R^3_R)\widehat\otimes L^2(\mathbb R^3_r)$ of [[lem-nrqm-composites-euclidean-l2-product-unitary]], where $T_R:=-(\hbar^2/2M)\Delta_R$ and $C_\mu:=-(\hbar^2/2\mu)\Delta_r-\kappa/|\cdot|$;

(d) $\sigma(H_2)=[-\frac{\mu\kappa^2}{2\hbar^2},\infty)$, and $H_2$ has no eigenvalues at all: the negative part of its spectrum is the interval $[-\frac{\mu\kappa^2}{2\hbar^2},0)$, consisting entirely of continuous spectrum, and each relative bound-state energy $-\frac{\mu\kappa^2}{2\hbar^2n^2}$ of $C_\mu$ is a threshold of the continuous spectrum of $H_2$ rather than an eigenvalue; in particular a relative bound state tensored with any centre-of-mass state is not an eigenvector of $H_2$;

(e) On $L^2(\mathbb R^3_R;\mathbb C)$ define the centre-of-mass momentum component
$$
P^{\mathrm{cm}}_{R,j}:=\frac{\hbar}{i}\partial_{R_j},\qquad D(P^{\mathrm{cm}}_{R,j}):=\{g\in L^2(\mathbb R^3_R;\mathbb C):\partial_{R_j}g\in L^2\text{ as a weak derivative}\}.
$$
On the full two-body space define its lift
$$
\widetilde P_{R,j}:=U_\Phi^{-1}(P^{\mathrm{cm}}_{R,j}\otimes I)U_\Phi,\qquad D(\widetilde P_{R,j}):=U_\Phi^{-1}\{F\in L^2(\mathbb R^3_R\times\mathbb R^3_r;\mathbb C):\partial_{R_j}F\in L^2\text{ as a weak derivative}\}.
$$
Each $\widetilde P_{R,j}$ is self-adjoint and has no nonzero eigenvectors in $L^2(\mathbb R^6;\mathbb C)$; hence there is no normalisable state of definite total momentum (a simultaneous eigenvector of the three lifted components).

All statements are mathematical statements about the operators on $L^2(\mathbb R^6)$ and the coordinate map; no physical interpretation, no identification of $m_1,m_2,\kappa,\hbar$ with measured constants, and no claim about nature is made.

## Facts & Assumptions

**Given:** $m_1,m_2,\kappa,\hbar>0$ and the derived constants $M,\mu$; the map $\Phi$ and pullback $U_\Phi$; Schwartz functions.

[F1] Linear change of variables: for an invertible linear map $\Phi$ with $|\det\Phi|=1$ the pullback $U_\Phi f:=f\circ\Phi^{-1}$ is unitary on $L^2(\mathbb R^6;\mathbb C)$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[cor-schwartz-convolution-and-product-transform-laws]], [[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

[F2] For $c>0$, $b\in\mathbb R$ the operator $H_0=\mathcal F_2^*M_{c|\xi|^2+b}\mathcal F_2$ with domain $W^{2,2}(\mathbb R^d;\mathbb C)$ is self-adjoint and equals $-\frac{c}{4\pi^2}\Delta+b$ on Schwartz functions; in particular free kinetic operators with positive coefficients are self-adjoint on $W^{2,2}$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] Kato-Rellich: if $A$ is self-adjoint and $B$ is symmetric with $D(A)\subseteq D(B)$ and $A$-bound less than one, then $A+B$ on $D(A)$ is self-adjoint ([[thm-kato-rellich]], [[def-relative-boundedness-with-respect-to-an-operator]]).

[F4] Hardy bound and its infinitesimal form: for $g\in W^{1,2}(\mathbb R^3;\mathbb C)$, $\|g/|\cdot|\|_2\le2\|\nabla g\|_2$, and for $g\in W^{2,2}(\mathbb R^3)$ and every $\eta>0$, $\|g/|\cdot|\|_2\le\eta\|\Delta g\|_2+\eta^{-1}\|g\|_2$ ([[thm-nrqm-coulomb-infinitesimal-kinetic-bound]], [[lem-nrqm-coulomb-three-dimensional-hardy-bound]]).

[F5] The negative eigenvalues of $C_\mu$ are $-\frac{\mu\kappa^2}{2\hbar^2n^2}$ ($n\ge1$), with eigenspaces spanned by the corresponding regular solutions, and each nonzero radial component of every negative eigenfunction is a multiple of its corresponding regular solution ([[thm-nrqm-coulomb-laguerre-bound-energy-exhaustion]], [[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]]).

[F6] Euclidean tensor identification: $L^2(\mathbb R^3)\widehat\otimes L^2(\mathbb R^3)\cong L^2(\mathbb R^6)$ isometrically, with elementary tensors mapping to products ([[lem-nrqm-composites-euclidean-l2-product-unitary]], [[lem-nrqm-composites-hilbert-tensor-construction]]); the chain rule computes the second derivatives of a pullback along an invertible linear map ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]]).

[F7] $C_\mu$ has no eigenvalue in $[0,\infty)$: with $\gamma:=2\mu\kappa/\hbar^2$ one has $C_\mu=\frac{\hbar^2}{2\mu}C_\gamma$ for $C_\gamma:=-\Delta-\gamma/|\cdot|$, whose block identity makes the eigenvalues of $C_\gamma$ the union of those of the radial operators $A_l$, and no $A_l$ has eigenvalue $0$ or eigenvalue $k^2>0$ ([[thm-nrqm-coulomb-continuum-spectral-density]] (d), [[thm-nrqm-coulomb-jost-volterra-solution]] (d), [[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (d)).

[F8] Tonelli applies to the nonnegative squared norms of sections on the sigma-finite product $\mathbb R_R^3\times\mathbb R_r^3$; smooth compactly supported functions are dense in $W^{2,2}(\mathbb R^6)$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]). Real measurable multiplication is closed on its maximal $L^2$ domain ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

[F9] For $\gamma>0$, $C_\gamma:=-\Delta-\gamma/|\cdot|$ has an onto unitary spectral representation $V_\gamma$ as the countable sum over spherical channels $(l,m)$ of bound copies with energies $-\gamma^2/(4n^2)$, $n\ge l+1$, and continuum copies $L^2((0,\infty),d\lambda)$ with maximal multiplier $M_\lambda$, with no zero eigenvector ([[thm-nrqm-coulomb-onto-radial-continuum-transform]] (d), [[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]]). For a self-adjoint $A$ and $c>0$, its scaled PVM satisfies $E_{cA}(B)=E_A(c^{-1}B)$ for every Borel $B$ ([[lem-nrqm-central-positive-scaling-spectral-measure]] (b), (c)). The change-of-variables formula applies to the positive linear dilation of the continuum variable ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F10] The partial Plancherel transform $\mathcal F_R\otimes I$ is unitary on $L^2(\mathbb R^3_R\times\mathbb R^3_r;\mathbb C)$; it maps the maximal weak-derivative domain $\{F:\partial_{R_j}F\in L^2\}$ onto $\{\widehat F:\xi_j\widehat F\in L^2\}$ and sends $\frac{\hbar}{i}\partial_{R_j}$ to multiplication by $2\pi\hbar\xi_j$. This follows from [[thm-plancherel]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]], and [[lem-nrqm-composites-euclidean-l2-product-unitary]]. A real finite-valued multiplier on its maximal $L^2$ domain is self-adjoint ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] (a)); Tonelli applies to the product variables ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof

1.1 [The coordinate map] In the three coordinates the matrix of $\Phi$ relative to the splitting $(x_1,x_2)\mapsto(R,r)$ is block diagonal with the $2\times2$ block $\begin{pmatrix}m_1/M&m_2/M\\1&-1\end{pmatrix}$ repeated three times; its determinant is $-m_2/M-m_1/M=-1$, so $|\det\Phi|=1$ and $\Phi$ is invertible with the displayed inverse. By the linear change-of-variables theorem the pullback $U_\Phi f=f\circ\Phi^{-1}$ is unitary on $L^2(\mathbb R^6;\mathbb C)$, since it preserves the integral of $|f|^2$; this is (a). [F1, F6, given, algebra]

1.2 [Lifted total momentum and no eigenvector] By [F10], the partial Plancherel transform conjugates each lifted operator $\widetilde P_{R,j}$ to multiplication by the real function $(\xi,r)\mapsto2\pi\hbar\xi_j$ on its maximal domain $\{G:\xi_jG\in L^2(\mathbb R^6)\}$. The real-multiplier theorem therefore makes $\widetilde P_{R,j}$ self-adjoint on exactly the weak-derivative domain in (e). If $\widetilde P_{R,j}\Psi=p\Psi$, its partial Fourier transform satisfies $(2\pi\hbar\xi_j-p)\widehat F(\xi,r)=0$ for a.e. $(\xi,r)$, so it is supported on the hyperplane $\xi_j=p/(2\pi\hbar)$. This hyperplane has Lebesgue measure zero in $\mathbb R^3_\xi$; Tonelli over the remaining momentum coordinates and $r$ shows $\widehat F=0$ and hence $\Psi=0$. Thus no lifted component, and consequently no triple of lifted components, has a nonzero eigenvector. [F6, F8, F10, algebra]

2.1 [Kinetic separation on Schwartz functions] Let $f$ be Schwartz. The chain rule gives $\partial_{x_1,j}=\frac{m_1}{M}\partial_{R_j}+\partial_{r_j}$ and $\partial_{x_2,j}=\frac{m_2}{M}\partial_{R_j}-\partial_{r_j}$, hence $\Delta_{x_1}=\frac{m_1^2}{M^2}\Delta_R+2\frac{m_1}{M}\partial_R\cdot\partial_r+\Delta_r$ and $\Delta_{x_2}=\frac{m_2^2}{M^2}\Delta_R-2\frac{m_2}{M}\partial_R\cdot\partial_r+\Delta_r$. Multiplying by $\frac{\hbar^2}{2m_i}$ and summing, the mixed terms cancel because $\frac{m_1}{M}\cdot\frac1{m_1}-\frac{m_2}{M}\cdot\frac1{m_2}=0$, while the $\Delta_R$ coefficient is $-\frac{\hbar^2}{2M}$ and the $\Delta_r$ coefficient is $-\frac{\hbar^2}{2}\bigl(\frac1{m_1}+\frac1{m_2}\bigr)=-\frac{\hbar^2}{2\mu}$; this is the displayed identity of (b) at the level of Schwartz functions. [step 1.1, F6, given, algebra]

3.1 [The kinetic operators agree as self-adjoint operators] Let $K$ denote the self-adjoint operator on $W^{2,2}(\mathbb R^6)$ given by $-\frac{\hbar^2}{2m_1}\Delta_{x_1}-\frac{\hbar^2}{2m_2}\Delta_{x_2}$ (existence by [F2], applied to the Fourier multiplier $4\pi^2(\frac{\hbar^2}{2m_1}|\xi_1|^2+\frac{\hbar^2}{2m_2}|\xi_2|^2)$, which is comparable to $|\xi|^2$), and let $K'$ be the self-adjoint operator on $W^{2,2}(\mathbb R^6)$ given by $-\frac{\hbar^2}{2M}\Delta_R-\frac{\hbar^2}{2\mu}\Delta_r$. Both act on Schwartz functions, a common core of $W^{2,2}$-type Fourier-multiplier operators, and step 2.1 shows $U_\Phi KU_\Phi^{-1}f=K'f$ for Schwartz $f$; since $U_\Phi KU_\Phi^{-1}$ and $K'$ are self-adjoint operators agreeing on a common core, they are equal, and $U_\Phi(D(K))=D(K')=H^2(\mathbb R^6;\mathbb C)$. This completes (b). [step 2.1, F2, given, algebra]

4.1 [Norm lift and two-body self-adjointness] Under $U_\Phi$, the original multiplier $-\kappa/|x_1-x_2|$ becomes $-\kappa/|r|$. First let $w\in C_c^\infty(\mathbb R_R^3\times\mathbb R_r^3)$. For each $R$, [F4] gives $\|w(R,\cdot)/|r|\|_{L_r^2}\le\eta\|\Delta_rw(R,\cdot)\|_{L_r^2}+\eta^{-1}\|w(R,\cdot)\|_{L_r^2}$. Taking $L_R^2$ norms and the triangle inequality, with [F8], yields $\|w/|r|\|_2\le\eta\|\Delta_rw\|_2+\eta^{-1}\|w\|_2$. Approximate arbitrary $w\in H^2(\mathbb R^6)$ in its Sobolev norm by [F8]. Applying this estimate to differences makes the quotients Cauchy in $L^2$; closedness of multiplication identifies their limit with $w/|r|$, so the estimate holds on all of $H^2$. The Fourier symbols of $-\Delta_r$ and $K'=-(\hbar^2/(2M))\Delta_R-(\hbar^2/(2\mu))\Delta_r$ are simultaneous nonnegative multipliers $4\pi^2|\xi_r|^2$ and $4\pi^2(\hbar^2|\xi_R|^2/(2M)+\hbar^2|\xi_r|^2/(2\mu))$; their pointwise domination gives $\|\Delta_rw\|_2\le(2\mu/\hbar^2)\|K'w\|_2$ by Plancherel. Therefore $\|\kappa w/|r|\|_2\le(2\kappa\mu\eta/\hbar^2)\|K'w\|_2+(\kappa/\eta)\|w\|_2$, an arbitrarily small operator relative bound. Kato–Rellich [F3] makes $K'-\kappa/|r|$ self-adjoint on $H^2$. Conjugating back gives exactly $H_2=U_\Phi^{-1}(K'-\kappa/|r|)U_\Phi$, self-adjoint on $H^2$; the separated differential expression, under [F6], is $T_R\otimes I+I\otimes C_\mu$. This denotes the self-adjoint commuting spectral sum: choose $c$ with $C_\mu+c\ge0$. In its joint product representation the nonnegative sum has domain equal to the intersection of the two factor domains, because each nonnegative summand is bounded pointwise by their sum. The relative norm bound just proved makes the $C_\mu$ graph norm equivalent to the relative Laplacian graph norm; Fourier comparison of the two nonnegative kinetic weights identifies that intersection with $H^2(\mathbb R^6)$. Thus its graph closure is the same Kato–Rellich operator. This proves (c) with an actual fiber-norm lift and no form-to-norm inference. [step 3.1, F2, F3, F4, F6, F8, algebra]

5.1 [Full spectrum and no eigenvalue by the product representation] By step 4.1 the transformed operator is $T_R\otimes I+I\otimes C_\mu$. Put $\gamma:=2\mu\kappa/\hbar^2>0$ and $c:=\hbar^2/(2\mu)>0$, so $C_\mu=cC_\gamma$ on their common domain $H^2(\mathbb R^3)$. Under $V_\gamma$ of [F9], this is the diagonal operator with scaled bound values $c(-\gamma^2/(4n^2))=-\mu\kappa^2/(2\hbar^2n^2)$ and continuum multiplier $c\lambda$. The PVM transfer in [F9] gives, on a continuum copy, $E_{C_\mu}(B)=M_{\mathbf1_{c^{-1}B}(\lambda)}$ in this representation. Define $(D_ch)(E):=c^{-1/2}h(E/c)$ on each continuum copy, with inverse $(D_c^{-1}g)(\lambda)=c^{1/2}g(c\lambda)$. Changing variables $E=c\lambda$ gives $\int_0^\infty|D_ch(E)|^2dE=\int_0^\infty|h(\lambda)|^2d\lambda$, so $D_c$ is onto unitary. The same substitution gives $\int_0^\infty E^2|D_ch(E)|^2dE=c^2\int_0^\infty\lambda^2|h(\lambda)|^2d\lambda$; hence it maps the exact maximal domain of $cM_\lambda$ onto that of $M_E$ and satisfies $D_c(cM_\lambda)D_c^{-1}=M_E$. On indicators it gives $D_cM_{\mathbf1_{c^{-1}B}(\lambda)}D_c^{-1}=M_{\mathbf1_B(E)}$, explicitly transporting the continuum PVM. The direct sum of the identity on every bound copy and $D_c$ on every continuum copy is onto unitary: its norm identity and inverse hold in each coordinate and therefore in the countable square sum. Composing it with $V_\gamma$ gives the full relative spectral resolution of $C_\mu$, including its diagonal domain and no zero eigenchannel. Apply this unitary and the $2\pi$-normalized center Fourier transform to the tensor decomposition, using [F6] and Plancherel. The absence of nonnegative relative eigenvalues in [F7] agrees with that resolution. The operator becomes the countable sum of real multiplication operators: on each relative bound copy its multiplier is $c_R(\xi)+E_n$, where $c_R(\xi)=4\pi^2\hbar^2|\xi|^2/(2M)$ and $E_n=-\mu\kappa^2/(2\hbar^2n^2)$; on each continuum copy it is $c_R(\xi)+E'$ for $E'>0$. These multipliers are all at least $E_1$, so the operator is bounded below by $E_1$. For every $E\ge E_1$ choose $\xi_0$ with $c_R(\xi_0)=E-E_1$ and normalized smooth Fourier profiles supported in shrinking balls around $\xi_0$. Their inverse transforms $\varphi_\delta$ are Schwartz, and $\|(T_R-(E-E_1))\varphi_\delta\|\to0$ by continuity of $c_R$. The correctly ordered vectors $\varphi_\delta\otimes u_1$ have norm one and belong to the operator domain, with residual $(T_R-(E-E_1))\varphi_\delta\otimes u_1$ tending to zero; a bounded resolvent at $E$ would contradict this, so $E\in\sigma(H_2)$. Hence $\sigma(H_2)=[E_1,\infty)$. For an eigenvalue equation at any real $E$, each bound-component Fourier class must be supported on $\{\xi:c_R(\xi)=E-E_n\}$, a sphere, a point or the empty set, all Lebesgue-null; each continuum component must be supported on $\{(\xi,E'):E'=E-c_R(\xi)\}$, which has zero product measure by Tonelli since every $E'$ section is a singleton. The countable spectral sum therefore has no nonzero eigenvector. All spectral points, including the negative interval, are continuous spectrum because the operator is self-adjoint. Every $E_n$ is the lower edge of its relative bound-channel band $[E_n,\infty)$, a threshold without a total eigenvector. This proves (d) with all masses and couplings retained. [step 4.1, F2, F5, F6, F7, F8, F9, algebra]

6.1 [Conclusion] Steps 1.1, 2.1, 3.1, 4.1 and 5.1 establish (a)–(d), and step 1.2 establishes (e). [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1] ∎
