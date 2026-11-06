---
id: thm-cft-r5-compact-boson-spectrum-modular-duality
kind: theorem
title: Compact-boson spectrum, modular partition function, and T-duality
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-cft-r5-compact-boson-full-theory
  - def-cft-r5-compact-boson-charge-lattice-and-cocycle
  - lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local
  - lem-cft-r5-charged-heisenberg-fock-module
  - thm-rank-one-heisenberg-vertex-operator-algebra
  - def-countable-choice
  - thm-poisson-summation-for-schwartz-functions
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - thm-dominated-convergence
  - thm-identity-theorem-holomorphic-functions
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - cor-c-one-change-of-variables-for-l-one-functions
  - lem-jacobi-theta-transformation-laws
  - thm-jacobi-theta-triple-product
dependency_roles:
  def-cft-r5-compact-boson-full-theory: mathematical-premise
  def-cft-r5-compact-boson-charge-lattice-and-cocycle: mathematical-premise
  lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local: mathematical-premise
  lem-cft-r5-charged-heisenberg-fock-module: mathematical-premise
  thm-rank-one-heisenberg-vertex-operator-algebra: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-poisson-summation-for-schwartz-functions: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-identity-theorem-holomorphic-functions: mathematical-premise
  def-complex-logarithms-principal-logarithm-and-complex-powers: mathematical-premise
  cor-principal-logarithm-is-holomorphic-on-the-slit-plane: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  lem-jacobi-theta-transformation-laws: mathematical-premise
  thm-jacobi-theta-triple-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: Section 8.1, printed pp. 108–115, equations (8.1)–(8.9), oscillator trace, charge lattice, modular invariance, and radius duality.
    - title: Pavel Mnev and Nicolai Reshetikhin, Lecture notes on conformal field theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: Sections 6.1.5–6.1.6, printed pp. 198–200, Hamiltonian trace, eta factor, charge sectors, and radius duality.
    - title: Lorenz Eberhardt and Nat Levine, Classification of c=1 CFTs, arXiv:2609.16111v1
      url: https://arxiv.org/pdf/2609.16111v1
      locator: "Theorem 1.1, footnote 3: the radius conversion R=sqrt(2) r and the self-dual values R=1 and r=1/sqrt(2)."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the Axiom of Countable Choice. Let $r>0$, $\tau\in\mathfrak H$, $q=e^{2\pi i\tau}$, and $\bar q=e^{-2\pi i\bar\tau}$. For the compact-boson data in the Ginsparg normalization, define
$$\eta(\tau)=e^{\pi i\tau/12}\prod_{k=1}^{\infty}(1-e^{2\pi i k\tau}),\qquad p_L=\frac{m}{2r}+nr,\qquad p_R=\frac{m}{2r}-nr.$$
The trace over the left/right oscillator state space and all momentum-winding sectors is
$$Z_r(\tau,\bar\tau)=\frac{1}{|\eta(\tau)|^2}\sum_{m,n\in\mathbb Z}q^{p_L^2/2}\bar q^{p_R^2/2}.$$
It converges absolutely for $\operatorname{Im}\tau>0$ and is invariant under $\tau\mapsto\tau+1$ and $\tau\mapsto-1/\tau$. The full local operator products are preserved by the radius duality
$$r\longmapsto(2r)^{-1},\qquad (m,n)\longmapsto(n,m),$$
with the cocycle phase $(-1)^{mn}$ and a sign reversal of all right-moving oscillator modes. The self-dual radius in this convention is $r=1/\sqrt2$.

## Statement references

[Ginsparg, Section 8.1](https://arxiv.org/pdf/hep-th/9108028v1)

[Mnev–Reshetikhin, Sections 6.1.5–6.1.6](https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf)

[Eberhardt–Levine, Theorem 1.1, footnote 3](https://arxiv.org/pdf/2609.16111v1)

## Facts & Assumptions

**Given:** $r>0$, $\tau\in\mathfrak H$, the compact-boson state space and cocycle, and countable choice.

[F1] [[def-cft-r5-compact-boson-full-theory]] fixes the state space, left/right weights, and full local field data, conditional on its stated analytic requirements.

[F2] [[lem-cft-r5-charged-heisenberg-fock-module]] proves the charged oscillator weights $p^2/2+N$ and the central-charge-one Virasoro action.

[F3] [[lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local]] proves $B(\lambda_r(q),\lambda_r(q'))=mn'+nm'$, where $\lambda_r(q)=(p_L(q;r),p_R(q;r))$, integral spin, the cocycle identity, mutual locality, and the target-radius lattice isometry with phase $\chi(m,n)=(-1)^{mn}$.

[F4] [[thm-rank-one-heisenberg-vertex-operator-algebra]] gives one bosonic oscillator per positive integer mode, its nonnegative integral oscillator weights, and central charge $1$.

[F5] [[def-countable-choice]] is the axiom used by the imported Poisson and theta transformation suppliers.

[F6] [[thm-poisson-summation-for-schwartz-functions]] states countable-choice Poisson summation for Schwartz functions on $\mathbb R^d$ with the Fourier factor $e^{-2\pi i x\cdot\xi}$.

[F7] [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]] gives $\mathcal F(e^{-\pi t|x|^2})(\xi)=t^{-d/2}e^{-\pi|\xi|^2/t}$ for real $t>0$ and countable choice.

[F8] [[lem-jacobi-theta-transformation-laws]] gives the Jacobi theta $S$-transformation and the shifted $\theta_2,\theta_4$ relation, under countable choice.

[F9] [[thm-jacobi-theta-triple-product]] gives the locally normally convergent Jacobi product for $\Theta(z\mid\tau)$.

[F10] [[thm-dominated-convergence]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], and [[cor-c-one-change-of-variables-for-l-one-functions|$A C^1$ diffeomorphism satisfies the change-of-variables formula for $L^1$ functions]] justify the Gaussian integral limits and the real linear change of variables below.

[F11] [[thm-identity-theorem-holomorphic-functions]], [[def-complex-logarithms-principal-logarithm-and-complex-powers]], and [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]] fix holomorphic continuation and the principal square-root branches in the complex Gaussian calculation.

[A1] Assume $\mathrm{AC}_\omega$ as in [F5]. The imported Poisson and Jacobi transformations use this exact countable-choice strength; no stronger choice principle is used in this proof.

[A2] Use the torus-trace convention $Z_r(\tau,\bar\tau)=\operatorname{Tr}_{\mathcal H_r}(q^{L_0-1/24}\bar q^{\bar L_0-1/24})$, with $q^t=e^{2\pi i\tau t}$ and $\bar q^t=e^{-2\pi i\bar\tau t}$ for real $t$. The shift is part of the trace convention, as in [Mnev–Reshetikhin, Section 6.1.5.2, equation (6.40)](https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf), and is not a conclusion of [F4].

[L1] Put $A_r=\begin{pmatrix}(2r)^{-1}&r\\(2r)^{-1}&-r\end{pmatrix}$ and $C_\tau=A_r^T\begin{pmatrix}-i\tau&0\\0&i\bar\tau\end{pmatrix}A_r=\begin{pmatrix}\tau_2/(2r^2)&-i\tau_1\\-i\tau_1&2r^2\tau_2\end{pmatrix}$, where $\tau=\tau_1+i\tau_2$.

[L2] For $|q|<1$, define $\theta_3(\tau)=\sum_{j\in\mathbb Z}q^{j^2/2}$, $\theta_4(\tau)=\sum_{j\in\mathbb Z}(-1)^j q^{j^2/2}$, and $\theta_2(\tau)=\sum_{j\in\mathbb Z}q^{(j+1/2)^2/2}$.

## Proof

**Given:** $r>0$, $\tau\in\mathfrak H$, and countable choice.

1.1 Put $\rho=|q|<1$ and choose $K$ so $|q|^k\le\frac12$ for $k\ge K$. For $|w|<1$, the absolutely convergent series $L(w)=-\sum_{j\ge1}w^j/j$ has $L'(w)=-1/(1-w)$, so $e^{L(w)}/(1-w)$ has derivative $0$ and value $1$ at $w=0$; hence $e^{L(w)}=1-w$. Also $|L(w)|\le |w|/(1-|w|)$, so $\sum_{k\ge K}|L(q^k)|\le2\sum_{k\ge K}\rho^k<\infty$; the tail product is the nonzero exponential $\exp(\sum_{k\ge K}L(q^k))$, each earlier factor $1-q^k$ is nonzero, and $e^{\pi i\tau/12}\ne0$. The product defining $\eta$ is locally uniformly convergent on $\mathfrak H$, since $|q|$ is bounded by a constant less than $1$ on each compact subset, and $\eta(\tau)\ne0$. In one chiral Fock sector, the oscillator at mode $k\ge1$ has occupation number $s\in\mathbb Z_{\ge0}$ and contributes $\sum_{s\ge0}q^{ks}=(1-q^k)^{-1}$. Multiplying the independent modes and the vacuum factor $q^{-1/24}$ from [A2] gives $q^{-1/24}\prod_{k\ge1}(1-q^k)^{-1}=\eta(\tau)^{-1}$. The right-moving modes give $\bar\eta^{-1}$. Each charge sector contributes the zero-mode factor $q^{p_L^2/2}\bar q^{p_R^2/2}$. [A2, F1, F2, F4, L2, algebra]

1.2 The zero-mode theta sum is $\Theta_r(\tau)=\sum_{x\in\mathbb Z^2}e^{-\pi x^TC_\tau x}$ by [L1]. The real part of $C_\tau$ is the positive diagonal matrix $\operatorname{diag}(\tau_2/(2r^2),2r^2\tau_2)$, so $x\mapsto e^{-\pi x^TC_\tau x}$ is a Schwartz function on $\mathbb R^2$. Applying [F6] at zero is therefore valid under the exact countable-choice assumption [F5]. [A1, F5, F6, L1, given, algebra]

1.3 The product formulas from [F9] give $\theta_3=\prod_{k\ge1}(1-q^k)(1+q^{k-1/2})^2$, $\theta_4=\prod_{k\ge1}(1-q^k)(1-q^{k-1/2})^2$, and $\theta_2=2q^{1/8}\prod_{k\ge1}(1-q^k)(1+q^k)^2$. Absolute convergence permits regrouping; $\prod_{k\ge1}(1+q^k)\prod_{k\ge1}(1-q^{2k-1})=1$ because $\prod(1+q^k)=\prod(1-q^{2k})/\prod(1-q^k)$. Therefore $\theta_2\theta_3\theta_4=2q^{1/8}\prod_{k\ge1}(1-q^k)^3=2\eta(\tau)^3$. [F9, L2, algebra]

1.4 Put $r'=(2r)^{-1}$, $T(m,n)=(n,m)$ and $\chi(m,n)=(-1)^{mn}$. On the algebraic charge-$q_0$ summand define $D_r f(x,\bar x)=\chi(q_0)f(x,-\bar x)$ in the charge-$Tq_0$ summand at radius $r'$. Here $f\in P\otimes\bar P$ is a polynomial and $-\bar x$ replaces every $\bar x_k$ by $-\bar x_k$. This preserves the monomial norms, and $D_{r'}D_r=I$, so it extends to a unitary map $\mathcal H_r\to\mathcal H_{r'}$. Denote target operators by primes. Multiplication and differentiation give $D_ra_jD_r^{-1}=a'_j$ and $D_r\bar a_jD_r^{-1}=-\bar a'_j$ for $j\ne0$; for $j=0$ the same identities follow from $p_L(Tq;r')=p_L(q;r)$ and $p_R(Tq;r')=-p_R(q;r)$. The identity $\chi(q+q_0)\varepsilon(q,q_0)=\chi(q)\chi(q_0)\varepsilon(Tq,Tq_0)$ gives $D_rU_qD_r^{-1}=\chi(q)U'_{Tq}$. Substitution into the oscillator exponentials and zero-mode powers in the lattice definition therefore gives $D_rV_q(z,\bar z)D_r^{-1}=\chi(q)V'_{Tq}(z,\bar z)$ on their declared radial branches. The same identities intertwine every finite Heisenberg descendant, so the convergent radial operator products in [F3] are preserved. [F1, F2, F3, algebra]

2.1 Since $p_L^2+p_R^2=m^2/(2r^2)+2n^2r^2$, the absolute value of each zero-mode summand is $e^{-\pi\tau_2(p_L^2+p_R^2)}$, a product of two convergent Gaussian series for every $r,\tau_2>0$. The oscillator products converge because $\sum_{k\ge1}|q|^k<\infty$. Thus the trace is absolutely convergent and equals the displayed expression. [F1, F2, step 1.1, algebra]

2.2 The spin of a state with oscillator levels $N,\bar N$ is $h-\bar h=\frac12(p_L^2-p_R^2)+N-\bar N=mn+N-\bar N\in\mathbb Z$. Under $\tau\mapsto\tau+1$, every summand therefore acquires phase $e^{2\pi i(h-\bar h)}=1$. Directly from the product definition, $\eta(\tau+1)=e^{\pi i/12}\eta(\tau)$, whose modulus is unchanged. This proves $T$-invariance. [F1, F3, L2, step 1.1, algebra]

2.3 For $d\in\mathbb C$ with $\operatorname{Re}d>0$ and $\xi\in\mathbb R$, let $G_d(\xi)=\int_{\mathbb R}e^{-\pi d u^2-2\pi i u\xi}\,du$. For $|h|<\operatorname{Re}d/2$, the difference quotient in $d$ is dominated by $\pi u^2e^{-\pi(\operatorname{Re}d)u^2/2}$, which is integrable by [F7]; dominated convergence [F10] makes $G_d(\xi)$ holomorphic in $d$. The function $d^{-1/2}e^{-\pi\xi^2/d}$ is holomorphic on the right half-plane using the principal logarithm [F11]. They agree for real $d>0$ by [F7], so the identity theorem [F11] gives $G_d(\xi)=d^{-1/2}e^{-\pi\xi^2/d}$ throughout that half-plane. [F7, F10, F11, step 1.2, algebra]

2.4 The theta transformation [F8] gives $\theta_3(-1/\tau)=s(\tau)\theta_3(\tau)$ and $\theta_4(-1/\tau)=s(\tau)\theta_2(\tau)$, where $s(\tau)=\sqrt{-i\tau}$ is the branch positive at $\tau=i$. Applying the second relation at $-1/\tau$ gives $\theta_2(-1/\tau)=s(\tau)\theta_4(\tau)$ because $s(\tau)s(-1/\tau)=1$. Thus $\eta(-1/\tau)^3=s(\tau)^3\eta(\tau)^3$. The ratio $\eta(-1/\tau)/(s(\tau)\eta(\tau))$ is holomorphic, nonzero, and takes values in the three cube roots of $1$, so it is constant on the connected upper half-plane; at $\tau=i$ it equals $1$. Hence $|\eta(-1/\tau)|^2=|\tau||\eta(\tau)|^2$. The transformations are used with the countable-choice hypothesis [F5]. [F5, F8, L2, step 1.3, algebra]

3.1 Change variables $y=A_rx$ in the Fourier integral of the function in step 1.2. The Jacobian has absolute value $|\det A_r|=1$. The two factors are the one-dimensional transforms in step 2.3 with $d_1=-i\tau'$, $d_2=i\bar\tau'$ and $\tau'=-1/\tau$. Their real parts are $\tau_2/|\tau|^2>0$, and $d_1d_2=|\tau|^{-2}$ with conjugate principal roots. Hence the Poisson prefactor is $|\tau|$. Matrix multiplication gives $\det C_{\tau'}=|\tau|^{-2}$ and $C_{\tau'}^{-1}=P C_\tau P$, where $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Since $P\mathbb Z^2=\mathbb Z^2$, [F6] yields $\Theta_r(-1/\tau)=|\tau|\Theta_r(\tau)$. [F6, F10, F11, L1, step 1.2, step 2.3, algebra]

4.1 Combining steps 3.1 and 2.4, the zero-mode theta factor gains $|\tau|$ under $S$, while $|\eta|^{-2}$ gains $|\tau|^{-1}$. The full $Z_r$ is therefore invariant under $\tau\mapsto-1/\tau$. [step 1.1, step 3.1, step 2.4, algebra]


5.1 The charge squares and oscillator levels in each chiral weight are unchanged by $D_r$. Consequently $D_rH_r=H_{r'}D_r$, so $D_r$ also preserves the common-domain seminorms of [F1]. It fixes the vacuum and bijects the trace summands, including the shifts in [A2]. Finally $r=(2r)^{-1}$ has the unique positive solution $r=1/\sqrt2$. [A2, F1, F2, step 1.4, algebra] ∎
## Remarks

The Poisson and theta inputs use $\mathrm{AC}_\omega$ exactly as stated in [F5]. No step uses full AC. The result is conditional on the mathematical compact-boson data and proves a torus trace identity; it does not use a formal path integral as a measure.
