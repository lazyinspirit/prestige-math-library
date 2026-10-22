---
id: prop-qftx-free-euclidean-reflection-positive
kind: proposition
title: Massive free Euclidean covariance is reflection positive
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-qftx-euclidean-limit-data
  - lem-qftx-tempered-tensor-products
  - def-qft-positive-tempered-moments
  - def-qft-finite-euclidean-interacting-measure
  - lem-qft-finite-gaussian-wick-moments
  - def-axiom-of-choice
  - def-fourier-transform-of-a-tempered-distribution
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - thm-fourier-inversion-on-schwartz-space
dependency_roles:
  def-qftx-euclidean-limit-data: mathematical-premise
  lem-qftx-tempered-tensor-products: mathematical-premise
  def-qft-positive-tempered-moments: mathematical-premise
  def-qft-finite-euclidean-interacting-measure: mathematical-premise
  lem-qft-finite-gaussian-wick-moments: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-fourier-transform-of-a-tempered-distribution: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Karl-Hermann Neeb and Gestur Ólafsson, Reflection Positivity—A Representation Theoretic Perspective, §§2.4.3 and 2.4.7
      url: https://arxiv.org/pdf/1802.09037
      locator: 'PDF pp. 20–22: positive-time factorization of $e^{-\lambda|t|}$ and reflection positivity of the massive resolvent in arbitrary Euclidean dimension.'
    - title: Arthur Jaffe, Constructive Quantum Field Theory, §4
      url: https://arthurjaffe.net/Assets/pdf/CQFT.pdf
      locator: "PDF p. 5, equation (8), and pp. 5–6: the free bosonic reflected covariance form and cutoff-limit qualification."
    - title: Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, §3 opening
      url: https://arxiv.org/pdf/1203.3991
      locator: "PDF pp. 9–10: the massive free scalar covariance and the distinction between a Schwinger hierarchy and an asserted probability measure."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$ be an integer, $E_d=\mathbb R\times\mathbb R^{d-1}$, and $m>0$. Set $\Delta_E=\partial_t^2+\sum_{j=1}^{d-1}\partial_{x_j}^2$, and for $p=(p_0,\mathbf k)\in\mathbb R^d$ use the Fourier transform $\widehat f(p)=\int_{E_d}e^{-ip\cdot x}f(x)\,dx$ and its blockwise version on products. When $d=1$, give $\mathbb R^0$ its one-point measure of mass one. For $\Psi\in\mathcal S(E_d\times E_d)$ and $N\in\mathbb N$, write

$$
P_N(\Psi)=\max_{|\alpha|,|\beta|\le N}\sup_{(x,y)\in E_d^2}|(x,y)^\alpha\partial^\beta\Psi(x,y)|.
$$

Define the translation-invariant two-point distribution $C_m^{(2)}$ by its double Fourier formula

$$
\langle C_m^{(2)},\Phi\rangle=(2\pi)^{-d}\int_{\mathbb R^d}\frac{\widehat\Phi(-p,p)}{p_0^2+|\mathbf k|^2+m^2}\,dp,\qquad \Phi\in\mathcal S(E_d\times E_d).
$$

For $f,g\in\mathcal S(E_d)$ put $C_m(f,g)=\langle C_m^{(2)},f\otimes g\rangle$. Then $C_m(\bar f,f)\ge0$. For $f,g\in C_c^\infty(E_{d,+};\mathbb C)$, where $E_{d,+}=\{t>0\}$, let $\vartheta(t,\mathbf x)=(-t,\mathbf x)$ and $\widehat f(t,\mathbf k)=\int_{\mathbb R^{d-1}}e^{-i\mathbf k\cdot\mathbf x}f(t,\mathbf x)\,d\mathbf x$. With $\omega_{\mathbf k}=\sqrt{|\mathbf k|^2+m^2}$,

$$
C_m(\overline{f\circ\vartheta},g)=\int_{\mathbb R^{d-1}}\frac{d\mathbf k}{(2\pi)^{d-1}2\omega_{\mathbf k}}\, \overline{\int_0^\infty e^{-\omega_{\mathbf k}t}\widehat f(t,\mathbf k)\,dt} \int_0^\infty e^{-\omega_{\mathbf k}s}\widehat g(s,\mathbf k)\,ds .
$$

Thus the reflected two-point form is a Gram form. Define $S_0=1$, $S_n=0$ for odd $n$, and for even $n=2r$ define the Schwinger distributions by

$$
\langle S_{2r},f_1\otimes\cdots\otimes f_{2r}\rangle =\sum_{\pi\in\operatorname{Pair}(2r)}\prod_{\{i,j\}\in\pi}C_m(f_i,f_j),
$$

where $\operatorname{Pair}(2r)$ is the finite set of partitions of $\{1,\ldots,2r\}$ into two-element subsets. These are tempered distributions whose associated normalized moment functional on $T_d$ is positive and reflection positive on the positive-time algebra. This assertion does not assert a probability measure on $\mathcal S'(E_d)$ or any Osterwalder–Schrader reconstruction.

## Statement references

[[def-qftx-euclidean-limit-data]]

[[lem-qftx-tempered-tensor-products]]

## Facts & Assumptions

**Given:** Full Axiom of Choice, an integer $d\ge1$, a parameter $m>0$, the Fourier convention and $C_m^{(2)}$ in the Statement, and the positive-time algebra of Definition [[def-qftx-euclidean-limit-data]].

[A1] Assume the full Axiom of Choice; it is an explicit hypothesis of the finite-dimensional normal-law supplier. [[def-axiom-of-choice]]

[F1] [[def-qftx-euclidean-limit-data]]: $S_{d,n}=\mathcal S(E_d^n)$, $T_d$ is the algebraic tensor test algebra, and $\Theta$ is the anti-linear time-reflection involution used to form $\omega_S(\Theta a\,a)$.

[F2] [[lem-qftx-tempered-tensor-products]]: finite tensor products of tempered distributions are tempered, are uniquely determined by their Schwartz product-test values, and associate.

[F3] [[def-qft-positive-tempered-moments]]: at $d=4$, the tensor test algebra, its involution, and ordinary positivity $\omega_S(1)=1$, $\omega_S(a^*a)\ge0$ have exactly the convention used here; the dimension-$d$ version is defined in [F1].

[F4] [[def-qft-finite-euclidean-interacting-measure]]: under the Axiom of Choice, for every finite positive-semidefinite covariance matrix $G$, $\gamma_G=N_N(0,G)$ is a Borel probability law, including singular $G$.

[F5] [[lem-qft-finite-gaussian-wick-moments]]: under full Choice, moments of every finite centered Gaussian vector are finite and equal the sum over covariance pairings.

[F6] [[def-fourier-transform-of-a-tempered-distribution]] and [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]: the Fourier transform maps Schwartz functions continuously to themselves and extends by bilinear transposition to tempered distributions.

[F7] [[thm-fourier-inversion-on-schwartz-space]]: with the $e^{-2\pi i x\cdot\xi}$ convention, Fourier inversion holds on Schwartz functions; the substitution $p=2\pi\xi$ gives the stated $e^{-ip\cdot x}$ convention and factor $(2\pi)^{-d}$.

## Proof

**Proof technique:** direct Fourier-kernel construction and finite Gaussian Wick pairing.

**Given:** [A1], $m>0$, $d\ge1$, and [F1]–[F7].

1.1 The full Axiom of Choice assumed in [A1] implies Countable Choice: if $(X_n)_{n\in\mathbb N}$ is any sequence of nonempty sets, AC supplies a choice function $g$ on the family $\{X_n:n\in\mathbb N\}$, and $n\mapsto g(X_n)$ chooses from every $X_n$. Thus the actual Countable Choice hypotheses of [F6] and [F7] are satisfied before those suppliers are used. The full Fourier transform $\widehat\Phi$ of $\Phi\in\mathcal S(E_d\times E_d)$ is Schwartz by [F6]. For $|p|\ge1$, some coordinate $p_j$ satisfies $|p_j|\ge |p|/\sqrt d$; the monomial-weight seminorm $P_N$ includes the weight given by the $N$th power of that coordinate in the first Fourier block. For $|p|<1$, its zero-weight seminorm bounds the value. Thus, with the finite dimension/order constant $K_{d,N}:=2^N d^{N/2}$, $$|\widehat\Phi(-p,p)|\le K_{d,N}P_N(\widehat\Phi)(1+|p|)^{-N}.$$ For an integer $N>d$, this proves absolute convergence and bounds the defining pairing by $(2\pi)^{-d}m^{-2}K_{d,N}P_N(\widehat\Phi)\int_{\mathbb R^d}(1+|p|)^{-N}\,dp$. The last integral is finite: dyadic annuli have volume $O(2^{jd})$ while the integrand is $O(2^{-jN})$. Fourier continuity in [F6] bounds $P_N(\widehat\Phi)$ by finitely many Schwartz seminorms of $\Phi$, so $C_m^{(2)}$ is continuous and tempered. Under simultaneous translation by $a\in E_d$, the full Fourier transform acquires the factor $e^{-i(q_1+q_2)\cdot a}$; at $(q_1,q_2)=(-p,p)$ this factor is $1$, proving translation invariance. On product tests, $C_m(\bar f,g)=(2\pi)^{-d}\int_{\mathbb R^d}\frac{\overline{\widehat f(p)}\,\widehat g(p)}{p_0^2+|\mathbf k|^2+m^2}\,dp,$ which is nonnegative for $g=f$. [A1, F6, F7, given, algebra]

2.1 The zeroth term $S_0=1$ is a continuous functional on $\mathbb C$, and every odd-order term $S_n=0$ is the zero continuous functional. For even $n$, each pairing $\pi$ partitions the $n$ test-variable blocks into disjoint pairs. The corresponding tensor product of copies of $C_m^{(2)}$ is a tempered distribution by [F2]; the finite sum over $\pi$ is therefore in $S_{d,n}'$. Its values on elementary tests are the displayed Wick formula. The bilinear form $C_m$ is symmetric by changing $p$ to $-p$ in step 1.1, so the sum is invariant under every permutation of its argument blocks. For any finite list of real Schwartz tests, $G_{ij}=C_m(f_i,f_j)$ is symmetric and real: for real $f_i$, $\widehat f_i(-p)=\overline{\widehat f_i(p)}$, so the Fourier pairing is Hermitian, while symmetry makes it real. It is positive semidefinite because $\sum_{i,j}\bar z_iG_{ij}z_j=C_m(\overline{\sum_i z_if_i},\sum_jz_jf_j)\ge0$. By [A1] and [F4] the finite centered Gaussian law $\gamma_G$ exists, including when $G$ is singular, and [F5] shows its moments are exactly the displayed pairing values. Splitting complex tests into real and imaginary parts gives the same multilinear extension. The symmetry of the moments makes the algebraic moment functional commute on this finite family of generators, so every finite polynomial $a$ satisfies $\omega_S(a^*a)=\mathbb E_{\gamma_G}|a(Q)|^2\ge0$ and $\omega_S(1)=S_0=1$. [A1, F1, F2, F3, F4, F5, step 1.1]

2.2 By step 1.1, the Countable Choice hypotheses of [F6] and [F7] are satisfied. Put $\omega_{\mathbf k}=\sqrt{|\mathbf k|^2+m^2}>0$. The function $K_\omega(u)=e^{-\omega|u|}/(2\omega)$ is integrable. Splitting its Fourier transform into the two half-lines gives $\int_{\mathbb R}e^{-ip_0u}K_\omega(u)\,du =\frac{1}{2\omega}\left(\frac{1}{\omega+ip_0}+\frac{1}{\omega-ip_0}\right) =\frac{1}{p_0^2+\omega^2}.$ By injectivity of the Fourier automorphism on tempered distributions [F6], this identifies the inverse kernel of $(p_0^2+\omega^2)^{-1}$; the inverse normalization is $1/(2\pi)$ under the stated convention [F7]. Since $f,g$ are compactly supported in $t>0$, reflecting the first time variable changes $t-s$ to $-(t+s)$; its absolute value is $t+s$. Integrating the spatial variables by their Fourier transforms yields the stated formula. The exchanges of integrals are valid: $\int_{\mathbb R}(p_0^2+\omega_{\mathbf k}^2)^{-1}dp_0=\pi/\omega_{\mathbf k}\le\pi/m$, while repeated spatial integration by parts gives rapid $\mathbf k$-decay of $\widehat f(t,\mathbf k)$ and $\widehat g(s,\mathbf k)$ uniformly on their compact time supports. [F6, F7, step 1.1, given, algebra]

3.1 Define $h_f(\mathbf k)=\int_0^\infty e^{-\omega_{\mathbf k}t}\widehat f(t,\mathbf k)\,dt$ and use the measure $d\nu_m(\mathbf k)=d\mathbf k/((2\pi)^{d-1}2\omega_{\mathbf k})$, with the one-point convention from the Statement when $d=1$. Compact time support and the rapid spatial decay just proved give $h_f\in L^2(\nu_m)$, and step 2.2 gives $C_m(\overline{f\circ\vartheta},g)=\langle h_f,h_g\rangle_{L^2(\nu_m)}$, where $\langle u,v\rangle_{L^2(\nu_m)}:=\int\overline{u(\mathbf k)}v(\mathbf k)\,d\nu_m(\mathbf k)$ is linear in its second argument. To pass from this Gram form to the full Gaussian reflection form, fix any finite set of positive-time tests $f_1,\ldots,f_N$ used by $a$. Since all $S_n$ are symmetric, their moment functional on this finite set of field variables factors through its commutative polynomial algebra. Write $X(f_i)$ for the degree-one generator $f_i$ in $T_d$. The formal Wick exponential $W(z)=\exp\!\left(\sum_i z_iX(f_i)-\frac12\sum_{i,j}z_iz_jC_m(f_i,f_j)\right)$ has polynomial coefficients; no analytic convergence is asserted. Write $s_i^\#$ for the formal conjugate of $s_i$: reflection conjugates coefficients, so $\Theta W(s)$ uses $s_i^\#$ and conjugates the coefficients of the quadratic counterterm. Put $G_{ij}=C_m(f_i,f_j)$ and $R_{ij}=C_m(\overline{f_i\circ\vartheta},f_j)$. Applying [F5] to the joint finite real list consisting of the real and imaginary parts of $f_i$ and $\overline{f_i\circ\vartheta}$ gives, by complex multilinearity, the coefficientwise formal identity. Each coefficient on the right is the sum over pairings of the corresponding finite test list: the quadratic exponential chooses unordered pairs, and its factorial denominator cancels their ordering multiplicity. Thus the identity follows coefficient by coefficient, with no convergence of an infinite series asserted. $\omega_S\!\left(\exp\!\left(\sum_i s_i^\#X(\overline{f_i\circ\vartheta})\right)\exp\!\left(\sum_j z_jX(f_j)\right)\right) =\exp\!\left(\frac12\sum_{i,j}s_i^\#\overline{G_{ij}}s_j^\#+\sum_{i,j}s_i^\#R_{ij}z_j+\frac12\sum_{i,j}z_iG_{ij}z_j\right).$ The identity $C_m(\overline{f_i\circ\vartheta},\overline{f_j\circ\vartheta})=\overline{G_{ij}}$ for the reflected covariance follows from $\widehat{\overline{f\circ\vartheta}}(p_0,\mathbf k)=\overline{\widehat f(p_0,-\mathbf k)}$: substitute this in the Fourier formula for $C_m$ and change $\mathbf k$ to $-\mathbf k$, using the real multiplier $p_0^2+|\mathbf k|^2+m^2$. Multiplying by the two Wick counterterms therefore cancels the first and third quadratic sums and leaves $\omega_S(\Theta W(s)\,W(z))=\exp\!\left(\sum_{i,j}s_i^\#C_m(\overline{f_i\circ\vartheta},f_j)z_j\right),$ where $s$ and $z$ are independent formal variables and the symbol $s_i^\#$ is conjugated when coefficients are evaluated. The coefficient of unequal degrees in $s^\#,z$ is zero. Differentiating $k$ times in each variable gives the cross-pairing matrix $\sum_{\sigma\in\Sigma_k}\prod_{j=1}^kR_{i_j\ell_{\sigma(j)}}$, where $R_{i\ell}=\langle h_{f_i},h_{f_\ell}\rangle$. Write the finite Wick expansion of a polynomial as $a=\sum_{k=0}^K\sum_{i_1,\ldots,i_k}a^{(k)}_{i_1\ldots i_k}\partial_{z_{i_1}}\cdots\partial_{z_{i_k}}W(0)$, with symmetric coefficient tensors, and let $A_k=\sum a^{(k)}_{i_1\ldots i_k}e_{i_1}\otimes\cdots\otimes e_{i_k}$. The triangular relation between ordinary monomials and Wick polynomials, whose leading terms agree and whose remaining terms have lower degree, proves that every finite polynomial has such a finite expansion. Let $H:\mathbb C^N\to L^2(\nu_m)$ be the linear map $He_i=h_{f_i}$, and let $\operatorname{Sym}$ be the average over the $k!$ permutations of tensor factors. Expanding the squared norm of $\operatorname{Sym}H^{\otimes k}A_k$ gives $1/k!$ times the sum over those permutations, so the displayed cross-pairing matrix makes the degree-$k$ reflected quadratic form exactly $k!\|\operatorname{Sym}H^{\otimes k}A_k\|^2\ge0$. There are no cross terms between different degrees. Therefore for every $a\in T_{d,+}$, $\omega_S(\Theta a\,a)$ is a finite sum of nonnegative squared norms. [F1, F2, F5, step 2.1, step 2.2, given, algebra] ∎ 
