---
id: thm-nrqm-coulomb-two-body-reduced-mass
aliases: [nrqm-coulomb-two-body-reduced-mass]
kind: theorem
domain: mathematics
title: "Two-body reduced mass"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-coulomb-infinitesimal-kinetic-bound, lem-nrqm-coulomb-three-dimensional-hardy-bound, thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-continuum-spectral-density, thm-nrqm-coulomb-jost-volterra-solution, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, lem-nrqm-composites-euclidean-l2-product-unitary, lem-nrqm-composites-hilbert-tensor-construction, thm-kato-rellich, def-relative-boundedness-with-respect-to-an-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-schwartz-space-and-its-seminorms, thm-plancherel, lem-weak-derivatives-are-polynomial-fourier-multipliers, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, def-sobolev-space-wkp-and-its-norm, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-directional-and-partial-derivatives, thm-extension-of-a-bounded-map-from-a-dense-subspace, cor-schwartz-convolution-and-product-transform-laws, def-countable-choice, def-axiom-of-choice]
dependency_roles:
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
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.1-10.2 pp. 221-225 (the one-particle reduction -Laplacian - gamma/|x| with the nucleus fixed at the origin; self-adjointness and sigma_ess = [0,infinity))"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella Archive), Section 8.1 pp. 182-185 (the two-body kinetic energies of nucleus and electron and the reduced mass mu in the Coulomb model)"
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

(e) the total momentum operators $P_{R,j}:=\frac{\hbar}{i}\partial_{R_j}$ have no nonzero eigenvectors in $L^2(\mathbb R^3_R)$; consequently every eigenvector equation for $H_2$ is incompatible with a normalisable state of definite total momentum.

All statements are mathematical statements about the operators on $L^2(\mathbb R^6)$ and the coordinate map; no physical interpretation, no identification of $m_1,m_2,\kappa,\hbar$ with measured constants, and no claim about nature is made.

## Facts & Assumptions

**Given:** $m_1,m_2,\kappa,\hbar>0$ and the derived constants $M,\mu$; the map $\Phi$ and pullback $U_\Phi$; Schwartz functions.

[F1] Linear change of variables: for an invertible linear map $\Phi$ with $|\det\Phi|=1$ the pullback $U_\Phi f:=f\circ\Phi$ is unitary on $L^2(\mathbb R^6;\mathbb C)$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[cor-schwartz-convolution-and-product-transform-laws]], [[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

[F2] For $c>0$, $b\in\mathbb R$ the operator $H_0=\mathcal F_2^*M_{c|\xi|^2+b}\mathcal F_2$ with domain $W^{2,2}(\mathbb R^d;\mathbb C)$ is self-adjoint and equals $-\frac{c}{4\pi^2}\Delta+b$ on Schwartz functions; in particular free kinetic operators with positive coefficients are self-adjoint on $W^{2,2}$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] Kato-Rellich: if $A$ is self-adjoint and $B$ is symmetric with $D(A)\subseteq D(B)$ and $A$-bound less than one, then $A+B$ on $D(A)$ is self-adjoint ([[thm-kato-rellich]], [[def-relative-boundedness-with-respect-to-an-operator]]).

[F4] Hardy bound and its infinitesimal form: for $g\in W^{1,2}(\mathbb R^3;\mathbb C)$, $\|g/|\cdot|\|_2\le2\|\nabla g\|_2$, and for $g\in W^{2,2}(\mathbb R^3)$ and every $\eta>0$, $\|g/|\cdot|\|_2\le\eta\|\Delta g\|_2+\eta^{-1}\|g\|_2$ ([[thm-nrqm-coulomb-infinitesimal-kinetic-bound]], [[lem-nrqm-coulomb-three-dimensional-hardy-bound]]).

[F5] The negative eigenvalues of $C_\mu$ are $-\frac{\mu\kappa^2}{2\hbar^2n^2}$ ($n\ge1$), with eigenspaces spanned by the corresponding regular solutions, and every negative eigenfunction is a multiple of such a regular solution ([[thm-nrqm-coulomb-laguerre-bound-energy-exhaustion]], [[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]]).

[F6] Euclidean tensor identification: $L^2(\mathbb R^3)\widehat\otimes L^2(\mathbb R^3)\cong L^2(\mathbb R^6)$ isometrically, with elementary tensors mapping to products ([[lem-nrqm-composites-euclidean-l2-product-unitary]], [[lem-nrqm-composites-hilbert-tensor-construction]]); the chain rule computes the second derivatives of a pullback along an invertible linear map ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]]).

[F7] $C_\mu$ has no eigenvalue in $[0,\infty)$: with $\gamma:=2\mu\kappa/\hbar^2$ one has $C_\mu=\frac{\hbar^2}{2\mu}C_\gamma$ for $C_\gamma:=-\Delta-\gamma/|\cdot|$, whose block identity makes the eigenvalues of $C_\gamma$ the union of those of the radial operators $A_l$, and no $A_l$ has eigenvalue $0$ or eigenvalue $k^2>0$ ([[thm-nrqm-coulomb-continuum-spectral-density]] (d), [[thm-nrqm-coulomb-jost-volterra-solution]] (d), [[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (d)).

## Proof


1.1 [The coordinate map] In the three coordinates the matrix of $\Phi$ relative to the splitting $(x_1,x_2)\mapsto(R,r)$ is block diagonal with the $2\times2$ block $\begin{pmatrix}m_1/M&m_2/M\\1&-1\end{pmatrix}$ repeated three times; its determinant is $-m_2/M-m_1/M=-1$, so $|\det\Phi|=1$ and $\Phi$ is invertible with the displayed inverse. By the linear change-of-variables theorem the pullback $U_\Phi f=f\circ\Phi$ is unitary on $L^2(\mathbb R^6;\mathbb C)$, since it preserves the integral of $|f|^2$; this is (a). [F1, F6, given, algebra]

2.1 [Kinetic separation on Schwartz functions] Let $f$ be Schwartz. The chain rule gives $\partial_{x_1,j}=\frac{m_1}{M}\partial_{R_j}+\partial_{r_j}$ and $\partial_{x_2,j}=\frac{m_2}{M}\partial_{R_j}-\partial_{r_j}$, hence $\Delta_{x_1}=\frac{m_1^2}{M^2}\Delta_R+2\frac{m_1}{M}\partial_R\cdot\partial_r+\Delta_r$ and $\Delta_{x_2}=\frac{m_2^2}{M^2}\Delta_R-2\frac{m_2}{M}\partial_R\cdot\partial_r+\Delta_r$. Multiplying by $\frac{\hbar^2}{2m_i}$ and summing, the mixed terms cancel because $\frac{m_1}{M}\cdot\frac1{m_1}-\frac{m_2}{M}\cdot\frac1{m_2}=0$, while the $\Delta_R$ coefficient is $-\frac{\hbar^2}{2M}$ and the $\Delta_r$ coefficient is $-\frac{\hbar^2}{2}\bigl(\frac1{m_1}+\frac1{m_2}\bigr)=-\frac{\hbar^2}{2\mu}$; this is the displayed identity of (b) at the level of Schwartz functions. [step 1.1, F6, given, algebra]

3.1 [The kinetic operators agree as self-adjoint operators] Let $K$ denote the self-adjoint operator on $W^{2,2}(\mathbb R^6)$ given by $-\frac{\hbar^2}{2m_1}\Delta_{x_1}-\frac{\hbar^2}{2m_2}\Delta_{x_2}$ (existence by [F2], applied to the Fourier multiplier $\frac{\hbar^2}{2m_1}|\xi_1|^2+\frac{\hbar^2}{2m_2}|\xi_2|^2$, which is comparable to $|\xi|^2$), and let $K'$ be the self-adjoint operator on $W^{2,2}(\mathbb R^6)$ given by $-\frac{\hbar^2}{2M}\Delta_R-\frac{\hbar^2}{2\mu}\Delta_r$. Both act on Schwartz functions, a common core of $W^{2,2}$-type Fourier-multiplier operators, and step 2.1 shows $U_\Phi KU_\Phi^{-1}f=K'f$ for Schwartz $f$; since $U_\Phi KU_\Phi^{-1}$ and $K'$ are self-adjoint operators agreeing on a common core, they are equal, and $U_\Phi(D(K))=D(K')=H^2(\mathbb R^6;\mathbb C)$. This completes (b). [step 2.1, F2, given, algebra]

4.1 [Two-body Coulomb self-adjointness and separation] The multiplier $-\kappa/|x_1-x_2|=-\kappa/|r|$ is, after the unitary $U_\Phi$, the multiplication by $-\kappa/|r|$ in the $r$-variable; by [F4] it is infinitesimally bounded with bound zero relative to $-\Delta_r$, hence also relative to $K'=-\frac{\hbar^2}{2M}\Delta_R-\frac{\hbar^2}{2\mu}\Delta_r$ (the weights satisfy $-\frac{\hbar^2}{2\mu}\Delta_r\le K'\cdot$ in the quadratic-form sense with a finite constant). By [F3] the operator $K'-U_\Phi(\kappa/|r|)U_\Phi^{-1}$ on $H^2(\mathbb R^6)$ is self-adjoint, and since $U_\Phi$ is unitary, $H_2=U_\Phi^{-1}(K'-\kappa/|r|)U_\Phi$ is self-adjoint on $H^2(\mathbb R^6)$; under the tensor identification [F6], $K'-\kappa/|r|=T_R\otimes I+I\otimes C_\mu$. This is (c). [step 3.1, F3, F4, F6, algebra]

5.1 [Spectrum and absence of eigenvalues] By step 4.1, $H_2$ is unitarily equivalent to $K:=T_R\otimes I+I\otimes C_\mu$. Since $T_R\ge0$ and $C_\mu\ge E_1=-\frac{\mu\kappa^2}{2\hbar^2}$ by [F5], one has $K\ge E_1$. Let $u_1$ be the relative ground state of $C_\mu$ and let $\varphi_\varepsilon$ be a normalised Gaussian in $\mathbb R^3_R$ whose Fourier transform concentrates near $\xi=0$; then $(K-E_1)(u_1\otimes\varphi_\varepsilon)=u_1\otimes T_R\varphi_\varepsilon$ has norm $\|T_R\varphi_\varepsilon\|\to0$, so $E_1\in\sigma(K)$; for $E=E_n+c>E_1$ with $c\ge0$, choose $\varphi_\varepsilon$ concentrated near a momentum of modulus $\sqrt{2Mc}$, so that $\|(T_R-c)\varphi_\varepsilon\|\to0$ and $(K-E)(u_n\otimes\varphi_\varepsilon)\to0$, giving $[E_1,\infty)\subseteq\sigma(K)$; with the lower bound, $\sigma(K)=[E_1,\infty)$. Suppose now $K\psi=E\psi$ with $\psi\ne0$; apply the unitary partial Fourier transform $\mathcal F_R$ in the first tensor factor, which converts $T_R\otimes I$ into the multiplier $M_{c(\xi)}\otimes I$ with $c(\xi)=\hbar^2|\xi|^2/(2M)$, and write $\mathcal F_R\psi$ as a measurable family $(f_\xi)$ with $\int\|f_\xi\|^2d\xi=\|\psi\|^2$; the eigenvalue equation becomes $c(\xi)f_\xi+C_\mu f_\xi=Ef_\xi$ for a.e. $\xi$. If $f_\xi\ne0$, then $E-c(\xi)$ is an eigenvalue of $C_\mu$; by [F5] its negative eigenvalues are the numbers $E_n$, and by [F7] it has no eigenvalue in $[0,\infty)$, so $E-c(\xi)=E_n$ for some $n\ge1$; but for each $n$ the set $\{\xi:E-c(\xi)=E_n\}$ is a sphere of Lebesgue measure zero, so $f_\xi=0$ for a.e. $\xi$ and $\psi=0$, a contradiction. Hence $K$ and $H_2$ have no eigenvalues, and the negative spectrum is the continuous interval $[E_1,0)$ in which each $E_n$ is a threshold. This is (d). [step 4.1, F5, F7, F6, algebra]

6.1 [No normalisable momentum eigenvector] The operator $P_{R,j}=\frac{\hbar}{i}\partial_{R_j}$ with domain $H^1(\mathbb R^3_R)$ is self-adjoint; if $P_{R,j}g=\lambda g$ with $g\in L^2$, then in the $R_j$-variable the equation $g'=-i\lambda g/\hbar$ has solutions $ce^{-i\lambda R_j/\hbar}$ times a function of the remaining variables, and such a function is square-integrable if and only if $c=0$: for a.e. fixed remaining variables, $\int_{\mathbb R}|ce^{-i\lambda t/\hbar}|^2dt=\infty$ unless $c=0$, so $g=0$ a.e. by Fubini. Hence $P_{R,j}$ has no nonzero eigenvector in $L^2(\mathbb R^3_R)$, and the same holds for the total momentum operators $P_{R,j}\otimes I$ by [F6]; since by step 5.1 the operator $H_2$ has no eigenvectors at all, no nonzero normalisable vector can be simultaneously an eigenvector of $H_2$ and a state of definite total momentum. This is (e). [step 5.1, F6, given, algebra]

7.1 [Conclusion] Clauses (a), (b), (c), (d), (e) are steps 1.1, 2.1 and 3.1, 4.1, 5.1, and 6.1. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎
