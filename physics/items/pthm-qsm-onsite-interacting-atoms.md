---
id: pthm-qsm-onsite-interacting-atoms
kind: physics-theorem
title: "Exact onsite Bose and Fermi interacting atoms"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-countable-choice
  - post-qsm-models-statistics-and-preparation
  - lem-qsm-models-diagonal-occupation-trace
  - lem-qsm-fock-occupation-basis-and-car-relations
  - thm-tdmath-grand-response-covariance
  - def-real-analytic-germ-in-several-variables
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - thm-geometric-series
  - thm-direct-comparison-test
  - thm-power-series-define-holomorphic-functions-in-several-variables
  - thm-absolute-convergence-of-complex-series
  - thm-exponential-beats-every-polynomial
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-chain-rule
dependency_roles:
  def-countable-choice: mathematical-premise
  post-qsm-models-statistics-and-preparation: physical-assumption
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
  lem-qsm-fock-occupation-basis-and-car-relations: mathematical-premise
  thm-tdmath-grand-response-covariance: mathematical-premise
  def-real-analytic-germ-in-several-variables: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-geometric-series: mathematical-premise
  thm-direct-comparison-test: mathematical-premise
  thm-power-series-define-holomorphic-functions-in-several-variables: mathematical-premise
  thm-absolute-convergence-of-complex-series: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-chain-rule: mathematical-premise
physical_scope: "One isolated single-mode repulsive Bose site and one isolated two-spin-mode Fermi Hubbard atom in finite-temperature grand-canonical model states. The Bose interaction U is strictly positive; the Fermi interaction is nonnegative. No hopping, lattice thermodynamic limit, material-specific prediction, or empirical observation is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Immanuel Bloch, Jean Dalibard, and Wilhelm Zwerger, Many-body physics with ultracold gases, §§IV.A and IV.E"
      url: "https://arxiv.org/pdf/0704.3011"
    - title: "David Tong, Statistical Physics, §§3.5–3.6"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the occupation-space and diagonal-domain supplier uses below.

**Repulsive single-mode Bose site.** Let $\mathcal H_B=\ell^2(\mathbb N_0)$ with orthonormal occupation basis $|n\rangle$, supplied by the one-mode specialization of [[lem-qsm-fock-occupation-basis-and-car-relations]]. Put $E_B(n):=\epsilon n+\frac U2n(n-1)$, where $\epsilon,\mu\in\mathbb R$ and $U>0$ are in joules. Define $H_B$ and $N_B$ as real diagonal multipliers $H_B|n\rangle=E_B(n)|n\rangle$ and $N_B|n\rangle=n|n\rangle$ on their maximal domains
$$D(H_B)=\left\{c\in\ell^2:\sum_{n\ge0}E_B(n)^2|c_n|^2<\infty\right\},\qquad D(N_B)=\left\{c\in\ell^2:\sum_{n\ge0}n^2|c_n|^2<\infty\right\}.$$
For $\beta>0$ in J$^{-1}$, define $K_B$ directly as the real diagonal multiplier with eigenvalues
$$K_B(n):=E_B(n)-\mu n=\frac U2n^2+\left(\epsilon-\mu-\frac U2\right)n$$
on the exact maximal domain $D(K_B)=\{c\in\ell^2:\sum_{n\ge0}K_B(n)^2|c_n|^2<\infty\}$. These diagonal multipliers are self-adjoint on their displayed domains. The grand partition sum
$$\Xi_B(\beta,\mu)=\sum_{n=0}^{\infty}e^{-\beta K_B(n)}$$
is finite and positive for every such $(\beta,\mu)$. It is jointly real analytic locally on $(0,\infty)\times\mathbb R$, meaning it has an absolutely convergent power-series representation in the two real parameters near every point. Its normalized diagonal Gibbs state has weights $p_n=\Xi_B^{-1}e^{-\beta K_B(n)}$ and
$$\langle N_B\rangle=\Xi_B^{-1}\sum_{n\ge0}n e^{-\beta K_B(n)},\qquad \partial_\mu\langle N_B\rangle=\beta\,\operatorname{Var}(N_B).$$
In the zero-temperature limit $\beta\to\infty$, the unique minimizing occupation is $0$ when $\mu<\epsilon$, and is $r\ge1$ when $\epsilon+U(r-1)<\mu<\epsilon+Ur$. At each boundary $\mu=\epsilon+Ur$ for $r\in\mathbb N_0$, exactly the adjacent occupations $r,r+1$ minimize $K_B$; their probabilities tend to $1/2$ each and the model entropy $S=-k_B\operatorname{tr}(\rho_B\log\rho_B)$ from [[post-qsm-models-statistics-and-preparation]] tends to $k_B\log2$. In a strict interval, the unique minimizing number state has probability tending to one and entropy tending to zero.

**Two-mode Fermi Hubbard atom.** On $\mathcal H_F=\mathbb C^4$ with orthonormal occupation basis $|n_\uparrow,n_\downarrow\rangle$, $n_\uparrow,n_\downarrow\in\{0,1\}$, define $n_\uparrow|n_\uparrow,n_\downarrow\rangle=n_\uparrow|n_\uparrow,n_\downarrow\rangle$ and $n_\downarrow|n_\uparrow,n_\downarrow\rangle=n_\downarrow|n_\uparrow,n_\downarrow\rangle$, and adopt
$$H_F=\epsilon(n_\uparrow+n_\downarrow)+U n_\uparrow n_\downarrow-h(n_\uparrow-n_\downarrow),$$
where $\epsilon,\mu,U,h$ are in joules, $U\ge0$, and $\beta>0$. With $K_F=H_F-\mu(n_\uparrow+n_\downarrow)$, its grand partition function and weights are
$$\Xi_F=1+w_\uparrow+w_\downarrow+w_2,\quad w_\uparrow=e^{-\beta(\epsilon-\mu-h)},\quad w_\downarrow=e^{-\beta(\epsilon-\mu+h)},\quad w_2=e^{-\beta(2(\epsilon-\mu)+U)}.$$
Thus $\langle n_\uparrow+n_\downarrow\rangle=(w_\uparrow+w_\downarrow+2w_2)/\Xi_F$, the double-occupation probability $\langle n_\uparrow n_\downarrow\rangle$ is $w_2/\Xi_F$, and, with $\operatorname{Cov}(n_\uparrow,n_\downarrow):=\langle n_\uparrow n_\downarrow\rangle-\langle n_\uparrow\rangle\langle n_\downarrow\rangle$,
$$\operatorname{Cov}(n_\uparrow,n_\downarrow)=\frac{e^{-2\beta(\epsilon-\mu)}(e^{-\beta U}-1)}{\Xi_F^2}\le0.$$
The covariance is zero at $U=0$ and strictly negative at $U>0$. These are exact conditional model calculations, not claims about measured atoms.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the Hilbert spaces, occupation bases, Hamiltonians, and parameter restrictions in the Statement. Occupation numbers are dimensionless, $k_B>0$ is in J K$^{-1}$, and the entropy has units J K$^{-1}$.

[A1] [[post-qsm-models-statistics-and-preparation]]: Bose or Fermi sector assignment is a separate physical assumption; the normalized grand Gibbs state is adopted only when its trace is finite and positive.

[A2] Use counting measure on $\mathbb N_0$ for the Bose sums and counting measure on the four occupation states for the finite Fermi sums.

[A3] [[def-countable-choice]]: every at most countable family of nonempty sets has a choice function. This is the exact mathematical premise retained from the occupation-space and real diagonal-domain suppliers; no full Axiom of Choice is assumed.

[F1] [[lem-qsm-fock-occupation-basis-and-car-relations]]: for a one-element mode set, the bosonic finite-support configuration set is $\mathbb N_0$ and its occupation vectors form a complete orthonormal basis; the fermionic two-mode occupation configurations form the four-dimensional basis used here.

[F2] [[lem-qsm-models-diagonal-occupation-trace]]: under $\mathrm{AC}_\omega$, real diagonal multipliers $H,N,K_\mu$ are self-adjoint on their exact maximal domains $\sum_mE(m)^2|c_m|^2<\infty$, $\sum_m|m|^2|c_m|^2<\infty$, and $\sum_m|E(m)-\mu|m||^2|c_m|^2<\infty$, respectively; the product trace formula there applies only to additive free-mode energies and is not used for the nonlinear Bose term.

[F3] [[post-qsm-models-statistics-and-preparation]]: when the actual trace is positive and finite, the adopted grand state is $\rho=\Xi^{-1}e^{-\beta(H-\mu N)}$ and the model entropy is $S=-k_B\operatorname{tr}(\rho\log\rho)$ where defined.

[F4] [[def-real-analytic-germ-in-several-variables]]: a real analytic germ at a point of $\mathbb R^2$ is represented on a polydisc by an absolutely convergent real power series in the two coordinate differences.

[F5] [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]], and [[cor-exponential-reciprocal-and-positivity]]: the exponential is its everywhere-convergent power series, satisfies $e^{x+y}=e^xe^y$, is strictly increasing, and is positive.

[F6] [[thm-geometric-series]] and [[thm-direct-comparison-test]]: a geometric series with ratio $q\in(0,1)$ converges, and a nonnegative series dominated eventually by a convergent series also converges.

[F7] [[thm-power-series-define-holomorphic-functions-in-several-variables]] and [[thm-absolute-convergence-of-complex-series]]: a multi-indexed power series with coefficients bounded by $M r_1^{-p}r_2^{-q}$ is absolutely convergent on every smaller polydisc, and absolute convergence permits rearrangement without changing its sum.

[F8] [[thm-tdmath-grand-response-covariance]]: for a measurable exponential family with a compact-parameter integrable envelope dominating the weight times $1+|X|^2$, the derivative of $\mathbb E(X)$ with respect to its natural parameter is $\operatorname{Var}(X)=\mathbb E[(X-\mathbb E X)^2]$.

[F9] [[thm-exponential-beats-every-polynomial]]: for fixed $a>0$, $x^m e^{-ax}\to0$ as $x\to+\infty$ for every fixed natural $m$.

[F10] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\log$ is the inverse of $\exp$ on positive reals and is continuous there.

[F11] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the inner-product pairing on $\ell^2(\mathbb N_0)$ satisfies $|\langle c,d\rangle|\le\|c\|\,\|d\|$.

[F12] [[thm-chain-rule]]: for $\theta=\beta\mu$ at fixed $\beta$, $\partial_\mu=\beta\partial_\theta$.

## Proof

1.1 The one-mode case of [F1] identifies the number basis with the standard basis of $\ell^2(\mathbb N_0)$, whose finite-support span is dense. For any real diagonal multiplier with entries $\lambda_n$, testing the adjoint identity on each basis vector forces the adjoint image to have coordinates $\lambda_nc_n$, so its adjoint domain is contained in $\{c:\sum_n\lambda_n^2|c_n|^2<\infty\}$. Conversely, on that weighted domain [F11] makes the pairing bounded and identifies the adjoint action with the same multiplier. Thus its maximal diagonal domain is self-adjoint. Applying this calculation to $E_B(n)$, $n$, and $K_B(n)$ establishes the three domains in the Statement. [given, A3, F1, F2, F11, algebra]

1.2 Consecutive Bose grand energies on the number basis [F1] satisfy $K_B(n+1)-K_B(n)=\epsilon-\mu+Un$, a strictly increasing affine sequence in $n$. It is positive at every $n\ge0$ when $\mu<\epsilon$, so $0$ uniquely minimizes. For $r\ge1$, it is negative through $n=r-1$ and positive from $n=r$ exactly when $\epsilon+U(r-1)<\mu<\epsilon+Ur$, so $r$ uniquely minimizes. At $\mu=\epsilon+Ur$, the increment at $n=r$ is zero while all earlier increments are negative and all later increments positive; exactly $r,r+1$ minimize. [given, F1, algebra]

1.3 The four Fermi basis states have grand energies $0$, $\epsilon-\mu-h$, $\epsilon-\mu+h$, and $2(\epsilon-\mu)+U$, respectively. Summing their four positive weights gives the displayed $\Xi_F$, and summing $n_\uparrow+n_\downarrow$ or $n_\uparrow n_\downarrow$ against those weights gives the stated mean and double-occupation probability. The state is well-defined because this is a finite positive sum, as required by [A1] and [F3]. [given, A1, F1, F3, algebra]

2.1 For fixed real $a$ and $n\ge0$, completing the square gives $|a|n\le Un^2/4+a^2/U$. Hence, for $P_a(n)=Un^2/2+an$, $Un^2/4\le|P_a(n)|+a^2/U$, so $n^2\le(4/U)|P_a(n)|+4a^2/U^2$. Fix an energy reference $E_{\rm ref}>0$ in joules. Since $|P_a(n)|\le E_{\rm ref}+P_a(n)^2/E_{\rm ref}$, this bound shows that the maximal diagonal domain associated with either quadratic sequence $E_B(n)$ or $K_B(n)$ is contained in $D(N_B)$. On $D(H_B)$, $K_Bc=H_Bc-\mu N_Bc$ is square-summable, so $D(H_B)\subseteq D(K_B)$; on $D(K_B)$, $H_Bc=K_Bc+\mu N_Bc$ is square-summable, so $D(K_B)\subseteq D(H_B)$. Thus $D(H_B)=D(K_B)\subseteq D(N_B)$, and the operator sum $H_B-\mu N_B$, whose domain is $D(H_B)\cap D(N_B)$, equals $K_B$ on its maximal domain. [given, A1, A3, F2, step 1.1, algebra]

2.2 In a strict interval with unique minimizer $r$, let $\delta$ be the smaller positive adjacent energy gap from $r$ (use only the upward gap when $r=0$). For $n>r$, the gap is a sum of increments from step 1.2, each at least the upward gap at $r$; for $n<r$, it is a sum of reversed increments, each at least the downward gap from $r-1$. Hence $K_B(n)-K_B(r)\ge\delta|n-r|$. The total relative excited weight is therefore at most $2\sum_{\ell\ge1}e^{-\beta\delta\ell}=2e^{-\beta\delta}/(1-e^{-\beta\delta})$, which tends to zero. At a boundary $\mu=\epsilon+Ur$, the increments are $K_B(n+1)-K_B(n)=U(n-r)$, so exactly $r,r+1$ minimize. To the right, $K_B(r+1+\ell)-K_B(r+1)=U(1+\cdots+\ell)\ge U\ell$; to the left, $K_B(r-\ell)-K_B(r)=U(1+\cdots+\ell)\ge U\ell$ whenever $r\ge\ell$. Thus the total relative excited weight is at most $2\sum_{\ell\ge1}e^{-\beta U\ell}=2e^{-\beta U}/(1-e^{-\beta U})$. The normalized Gibbs probabilities from [F3] therefore concentrate on the unique number state in a strict interval, or tend to $1/2,1/2$ on the adjacent pair at a boundary. [given, F3, step 1.2, F5, F6, algebra]

3.1 Put $a=\epsilon-\mu-U/2$. Completing the square gives $K_B(n)=\frac U4n^2+\frac U4(n+2a/U)^2-a^2/U\ge\frac U4n^2-a^2/U$. For $n\ge1$, $n^2\ge n$, so $e^{-\beta K_B(n)}\le e^{\beta a^2/U}q^n$ with $q=e^{-\beta U/4}$. Since $\beta U/4>0$, [F5] gives $0<q<1$, and [F6] makes the geometric upper bound summable. The $n=0$ term is $1$, so $0<\Xi_B<\infty$ and [A1], [F3] give a well-defined normalized grand state for the exact operator $H_B-\mu N_B=K_B$ from step 2.1. The free-mode product trace formula in [F2] is not used. [given, A1, A3, F2, F3, F5, F6, step 1.1, step 2.1, algebra]

3.2 Let $g=1$ in a strict interval and $g=2$ at a boundary, and shift all energies by their minimum so the ground energy is zero. The diagonal entropy from [F3] is $S_B/k_B=\log D_\beta+\beta\sum_{n\ge0}p_nK_B(n)$, where $D_\beta=g+R_\beta$ and $R_\beta$ is the total relative excited weight from step 2.2. Thus $D_\beta\to g$ by step 2.2 and $\log D_\beta\to\log g$ by continuity [F10]. In either case, for each distance $\ell\ge1$ there are at most two excited states; their lower gaps are $\delta\ell$ by step 2.2 and their upper gaps are $C(1+\ell^2)$ because $K_B(n)$ is quadratic in $n$. Here $C>0$ is a fixed energy in joules and $\delta=U$ at a boundary. Fix $\beta_0>0$ in inverse joules. For $\beta\ge\beta_0$, [F9] makes $(1+\ell^2)e^{-\beta_0\delta\ell/2}$ bounded; splitting $e^{-\beta\delta\ell}=e^{-\beta\delta\ell/2}e^{-\beta\delta\ell/2}$ therefore bounds $\beta\sum_{\ell\ge1}(1+\ell^2)e^{-\beta\delta\ell}$ by a constant times $\beta\sum_{\ell\ge1}e^{-\beta\delta\ell/2}=\beta q_\beta/(1-q_\beta)$, where $q_\beta=e^{-\beta\delta/2}$. This tends to zero by [F5], [F6], and [F9]. Consequently the excited contribution to the entropy vanishes, while the normalized ground weights contribute $0$ for $g=1$ and $\log2$ for $g=2$. [given, F3, F5, F6, F9, F10, step 2.2, algebra]

4.1 Fix $(\beta_0,\mu_0)$ with $\beta_0>0$, put $u=\beta-\beta_0$, $v=\mu-\mu_0$, $a_0=\epsilon-\mu_0-U/2$, and $K_n^0=Un^2/2+a_0n$. Then $-\beta K_B(n;\mu)=-\beta_0K_n^0-uK_n^0+\beta_0vn+uvn$, so [F5] expands each summand as $e^{-\beta_0K_n^0}e^{-uK_n^0}e^{\beta_0vn}e^{uvn}$. On radii $r_\beta=\beta_0/2$ and any fixed $r_\mu>0$, the sum of the absolute values of all terms of these three exponential power series, over all $n$, is bounded by $\sum_{n\ge0}\exp(-\beta_0K_n^0+r_\beta|K_n^0|+\beta_0r_\mu n+r_\beta r_\mu n)$. For all sufficiently large $n$, $K_n^0\ge0$ and $|K_n^0|\le Un^2/2+|a_0|n$, so the exponent is at most $-\beta_0Un^2/4+Cn$ for a finite constant $C$. Increasing the cutoff so $Cn\le\beta_0Un^2/8$ leaves a tail bounded by $e^{-\beta_0Un/8}$, whose series converges by [F5]–[F6]; the finitely many initial terms are finite. Thus the total absolute coefficient sum is finite. Grouping $r+t=p$ and $s+t=q$ gives $c_{pq}=\sum_{n\ge0}e^{-\beta_0K_n^0}\sum_{t=0}^{\min(p,q)}\frac{(-K_n^0)^{p-t}(\beta_0n)^{q-t}n^t}{(p-t)!(q-t)!t!}$. The absolute bound and [F7] justify these coefficient sums and rearrangement, and give $\sum_{p,q}|c_{pq}|r_\beta^p r_\mu^q<\infty$, hence $|c_{pq}|\le M r_\beta^{-p}r_\mu^{-q}$ for some finite $M$. Applying the multivariable power-series theorem [F7] gives a holomorphic sum on the complex polydisc; its real restriction is the absolutely convergent germ in [F4]. Since $(\beta_0,\mu_0)$ was arbitrary, $\Xi_B$ is jointly real analytic on $(0,\infty)\times\mathbb R$. [given, F4, F5, F7, step 3.1, algebra]

4.2 Fix $\beta>0$ and let $\mu$ range over a compact interval. The quantity $a=\epsilon-\mu-U/2$ is then bounded, so the square bound in step 3.1 gives $e^{-\beta K_B(n;\mu)}\le C e^{-\beta U n^2/4}$ for a constant $C$ uniform on that interval. Put $q=e^{-\beta U/8}\in(0,1)$. Since $n^2\ge n$, $(1+n^2)e^{-\beta K_B(n;\mu)}\le C(1+n^2)q^{2n}$. By [F9], $(1+n^2)q^n$ is bounded, so the right side is at most $C'q^n$, a summable geometric envelope. Apply [F8] on $\mathbb N_0$ with the counting measure [A2], weight $w(n)=e^{-\beta E_B(n)}$, observable $X(n)=n$, and natural parameter $\theta=\beta\mu$. Its hypotheses hold by this compact envelope and step 3.1; it gives $\partial_\theta\mathbb E(N_B)=\operatorname{Var}(N_B)$. The chain rule [F12] yields the displayed response, while the normalized weights give the expectation formula. [given, A2, F3, F5, F6, F8, F9, F12, step 3.1, algebra]

5.1 The normalized means are $\langle n_\uparrow\rangle=(w_\uparrow+w_2)/\Xi_F$ and $\langle n_\downarrow\rangle=(w_\downarrow+w_2)/\Xi_F$, while $\langle n_\uparrow n_\downarrow\rangle=w_2/\Xi_F$. Subtracting the product of the means yields $\operatorname{Cov}(n_\uparrow,n_\downarrow)=(w_2-w_\uparrow w_\downarrow)/\Xi_F^2$. Since $w_\uparrow w_\downarrow=e^{-2\beta(\epsilon-\mu)}$ and $w_2=e^{-2\beta(\epsilon-\mu)}e^{-\beta U}$, this is the displayed formula; $U\ge0$ makes it nonpositive, with equality exactly at $U=0$. [given, step 1.3, algebra] ∎