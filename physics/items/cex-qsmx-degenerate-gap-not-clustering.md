---
id: cex-qsmx-degenerate-gap-not-clustering
kind: counterexample
title: "A degenerate gapped Ising ground mixture does not cluster"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - def-qsm-local-spin-algebras
  - def-qsm-quasilocal-spin-algebra
  - lem-qsm-quasilocal-completion
  - def-qsm-bounded-finite-range-interaction
  - thm-qsm-finite-range-spin-dynamics
  - thm-completion-of-an-inner-product-space-is-hilbert
  - thm-bounded-operator-space-is-banach
  - thm-dominated-convergence
  - thm-complex-exponential-is-entire-with-derivative-itself
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
  thm-completion-of-an-inner-product-space-is-hilbert: mathematical-premise
  thm-bounded-operator-space-is-banach: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Bruno Nachtergaele and Robert Sims, Lieb–Robinson Bounds and the Exponential Clustering Theorem, arXiv:math-ph/0506030v3; section 4, PDF pp. 10–11, degenerate-ground-space qualification as context only; the Ising example and its cyclic representation are constructed locally. Full 12-page article retrieved and read."
      url: "https://arxiv.org/pdf/math-ph/0506030v3"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement refuted

Assume Countable Choice and the finite-matrix $C^*$-identity. For each finite $\Lambda\subset\mathbb Z$, let $\mathcal A_\Lambda=\bigotimes_{j\in\Lambda}M_2(\mathbb C)$ with the canonical unital tensor-factor inclusions, and let $\mathcal A=\overline{\bigcup_{|\Lambda|<\infty}\mathcal A_\Lambda}$ in operator norm. A uniformly bounded finite-range interaction $\Phi$ assigns self-adjoint terms $\Phi(Z)\in\mathcal A_Z$ to finite nonempty supports $Z$; for some finite $M\ge1$, $R\ge0$, and $\kappa<\infty$, $\Phi(Z)=0$ if $|Z|>M$ or $\operatorname{diam}_\infty Z>R$, where $\operatorname{diam}_\infty Z:=\max_{x,y\in Z}|x-y|$, and $\sup_x\sum_{Z\ni x}\|\Phi(Z)\|\le\kappa$. Its free-boundary finite-volume Hamiltonian and dynamics are $H_\Lambda=\sum_{\varnothing\ne Z\subseteq\Lambda}\Phi(Z)$ and $\alpha_t^\Lambda(A)=e^{itH_\Lambda/\hbar}Ae^{-itH_\Lambda/\hbar}$; $\alpha_t$ is the strongly continuous norm-limit group on local observables. A state is a bounded complex-linear functional $\omega:\mathcal A\to\mathbb C$ with $\omega(1)=1$ and $\omega(A^*A)\ge0$ for every $A\in\mathcal A$. A **positive-energy ground-state representation** consists of a contractive unital $*$-representation $\pi:\mathcal A\to\mathcal B(\mathcal H)$ on a complex Hilbert space, a unit vector $\Omega\in\mathcal H$, and a strongly continuous unitary group $(U_t)_{t\in\mathbb R}$ such that $\omega(A)=\langle\pi(A)\Omega,\Omega\rangle$, $U_t\Omega=\Omega$, and $\pi(\alpha_t(A))=U_t\pi(A)U_t^*$ for every $A\in\mathcal A$. Its strong generator is $iK$: the norm derivative $\lim_{t\to0}(U_tx-x)/t$ exists exactly for $x$ in a dense domain $D(K)$ and equals $iKx$ there, where $K=K^*$ and $\langle Kx,x\rangle\ge0$ for every $x\in D(K)$. The spectrum $\sigma(K)$ is the set of $z\in\mathbb C$ for which $K-z:D(K)\to\mathcal H$ has no bounded everywhere-defined inverse. An excitation gap $g>0$ in this representation means $\sigma(K)\subseteq\{0\}\cup[g,\infty)$.

The claim refuted here is that a nonzero excitation gap alone forces ordinary exponential connected clustering for every positive-energy ground state of a uniformly bounded finite-range spin-$\tfrac12$ chain on $\mathbb Z$, even when $\dim\ker K>1$. In particular, for each such state $\omega$ there must be constants $C_0<\infty$ and $\mu>0$ such that

$$|\omega(Z_0Z_r)-\omega(Z_0)\omega(Z_r)|\le C_0e^{-\mu r}\qquad(r=1,2,\ldots),$$

where $Z_j=\operatorname{diag}(1,-1)$ is the Pauli observable on site $j$.

## Statement references

[[def-qsm-bounded-finite-range-interaction]]

[[def-qsm-local-spin-algebras]]

[[def-qsm-quasilocal-spin-algebra]]

[[thm-qsm-finite-range-spin-dynamics]]

## Facts & Assumptions

**Given:** Countable Choice, the quasi-local spin-$\tfrac12$ algebra on $\mathbb Z$ with its finite-matrix $C^*$-identity, and dimensionless energy and time units with $\hbar=1$.

[A1] Countable Choice supplies the norm completions; the finite-matrix $C^*$-identity is supplied, not an unrestricted choice assumption. [[def-countable-choice]] [[lem-qsm-finite-matrix-cstar-and-state-duality]]

[F1] Local spin factors are finite matrix algebras, their inclusions are isometric and their norm completion is the quasi-local $C^*$-algebra. [[def-qsm-local-spin-algebras]] [[def-qsm-quasilocal-spin-algebra]] [[lem-qsm-quasilocal-completion]]

[F2] Bounded finite-range interactions have the stated thermodynamic norm-limit dynamics. [[def-qsm-bounded-finite-range-interaction]] [[thm-qsm-finite-range-spin-dynamics]]

[F3] The completion of an inner-product space is Hilbert under Countable Choice; bounded operator spaces are complete. [[thm-completion-of-an-inner-product-space-is-hilbert]] [[thm-bounded-operator-space-is-banach]]

[F4] Dominated convergence applies to summable nonnegative majorants on a countable set and to scalar finite-measure integrals. [[thm-dominated-convergence]]

[F5] The complex exponential has derivative itself. The continuous-curve fundamental theorem on a real interval therefore gives $e^{itw}-1=\int_0^t iw e^{isw}ds$ for $w\ge0$, and hence $|e^{itw}-1|\le |t|w$. [[thm-complex-exponential-is-entire-with-derivative-itself]] [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]

## Counterexample

**Given:** [A1], [F1]–[F5]; use the interaction $\Phi(\{j,j+1\})=(I-Z_jZ_{j+1})/2$ and zero terms on other supports.

1.1 Each interaction term is an orthogonal projection of norm one. The interaction is self-adjoint, has support size two, range one and per-site sum $\kappa=2$. It satisfies the finite-range hypotheses in [F2], so its thermodynamic dynamics $\alpha_t$ exists. This conclusion requires no choice of a finite-volume ground state. [A1, F1, F2, given, construct, algebra]

1.2 Let $\mathcal F$ be the set of finite subsets of $\mathbb Z$. It is countable under [A1], by enumerating finite tuples and taking their ranges. Complete the finitely supported complex functions on $\{+1,-1\}\times\mathcal F$ for their linear-first sum inner product, obtaining $\mathcal H=\ell^2(\{+1,-1\}\times\mathcal F)$ by [F3]. Denote its orthonormal basis by $|\sigma,F\rangle$. Define $$\pi(Z_j)|\sigma,F\rangle=\sigma(-1)^{\mathbf1_F(j)}|\sigma,F\rangle,\qquad \pi(X_j)|\sigma,F\rangle=|\sigma,F\triangle\{j\}\rangle.$$ Here $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, and $\triangle$ denotes symmetric difference. These operators are self-adjoint unitaries, anticommute at the same site and commute at distinct sites. Thus they give the usual local Pauli matrix representations, including $Y_j=iX_jZ_j$. On a finite region $\Lambda$, decompose $\mathcal H$ into the subspaces with fixed $\sigma$ and fixed finite $F\setminus\Lambda$; each has the $2^{|\Lambda|}$ basis vectors indexed by $F\cap\Lambda$ and is a standard matrix representation of $\mathcal A_\Lambda$. Therefore $\|\pi(A)\|=\|A\|$ locally. These compatible representations extend by norm continuity and [F3] to a unital contractive $*$-representation of $\mathcal A$. [A1, F1, F3, given, construct, algebra]

2.1 For $F\in\mathcal F$, put $w(F)=|\{j\in\mathbb Z:\mathbf1_F(j)\ne\mathbf1_F(j+1)\}|$. This number is finite, is zero exactly when $F=\varnothing$, and is at least two otherwise: a nonempty finite set has both a left and a right boundary. More precisely it is twice the number of finite interval components of $F$. Define the diagonal operator $$K|\sigma,F\rangle=w(F)|\sigma,F\rangle,\qquad D(K)=\left\{\xi:\sum_{\sigma,F}w(F)^2|\xi_{\sigma,F}|^2<\infty\right\}.$$ Finite-support vectors make the domain dense and the quadratic form is nonnegative. If $\xi$ lies in the adjoint domain with $K^*\xi=\zeta$, testing on each basis vector gives $\zeta_{\sigma,F}=w(F)\xi_{\sigma,F}$, so $\xi\in D(K)$. Conversely that square-summability condition makes the adjoint identity hold by sum Cauchy–Schwarz. Thus $K=K^*$ on exactly this domain. [step 1.2, construct, algebra]

3.1 Set $U_t|\sigma,F\rangle=e^{itw(F)}|\sigma,F\rangle$. It is a unitary group. For each $\xi$, dominated convergence with majorant $4|\xi_{\sigma,F}|^2$ proves strong continuity. For $\xi\in D(K)$, $|e^{itw}-1|/|t|\le w$ and [F4] show its norm derivative at zero is $iK\xi$. Conversely, if that norm derivative exists, its coordinates must be $iw(F)\xi_{\sigma,F}$, whose square sum is finite, so the exact generator domain is $D(K)$. The kernel has basis $|+,\varnothing\rangle,|-,\varnothing\rangle$. Every other diagonal energy is at least two and energy two occurs for a singleton $F$. For $0<\lambda<2$, the diagonal inverse $(w(F)-\lambda)^{-1}$ is bounded by $\max(1/\lambda,1/(2-\lambda))$ and maps into $D(K)$ since $w/(w-\lambda)$ is bounded. The same diagonal argument excludes negative real and nonreal spectrum. Consequently $\sigma(K)\subseteq\{0\}\cup[2,\infty)$, with excitation gap exactly two. [F4, F5, step 2.1, construct, algebra]

4.1 The representation is covariant for the actual dynamics in step 1.1. Every interaction term is diagonal in the Pauli $Z$ basis, and these terms commute. Finite-volume conjugation of a local observable therefore depends only on the finitely many bonds meeting its support. In particular the evolution of $Z_j$ is constant. On $X_j|\sigma,F\rangle$ the phase of $U_t\pi(X_j)U_t^*$ is $e^{it(w(F\triangle\{j\})-w(F))}$; the energy difference involves only the two bonds adjacent to $j$. It is exactly the phase from every finite-volume Hamiltonian containing these bonds. The local Pauli matrices generate every finite matrix algebra, so the covariance identity holds for every local $A$, and the norm completion gives $$\pi(\alpha_t(A))=U_t\pi(A)U_t^*\qquad(A\in\mathcal A).$$ This verifies the relation to the thermodynamic dynamics rather than choosing an unrelated diagonal operator. [F1, F2, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

5.1 Let $\Omega=(|+,\varnothing\rangle+|-,\varnothing\rangle)/\sqrt2$. It is a unit zero-energy vector fixed by $U_t$, so its state $\omega(A)=\langle\pi(A)\Omega,\Omega\rangle$ is a positive-energy ground state. Its finite restrictions have density $$\rho_\Lambda=\tfrac12|+\cdots+\rangle\langle+\cdots+|+\tfrac12|-\cdots-\rangle\langle-\cdots-|,$$ with the empty-region density one; these are the consistent equal mixture of the two product phases. This representation is cyclic. Given finite $F$ and $\sigma\in\{+1,-1\}$, choose $j\notin F$ and let $P_{\sigma,j}=(I+\sigma Z_j)/2$. Then $$\sqrt2\,\pi\left(\prod_{i\in F}X_i\,P_{\sigma,j}\right)\Omega=|\sigma,F\rangle.$$ Thus every displayed basis vector is generated by a local observable, proving cyclicity and identifying the gap in step 3.1 as a gap of the state's own ground representation. [F1, step 1.2, step 3.1, step 4.1, construct, algebra]

6.1 In the two product vectors $Z_i$ has respective expectations $+1$ and $-1$, whereas $Z_iZ_j$ has expectation one in each for $i\ne j$. Hence the equal mixture has $\omega(Z_j)=0$ and $\omega(Z_iZ_j)=1$. For every integer $r\ge1$ its connected $Z_0,Z_r$ correlation is therefore one. No finite $C_0$ and positive $\mu$ can satisfy $1\le C_0e^{-\mu r}$ for all $r$. The two product vector states are distinct positive-energy ground states, so uniqueness fails exactly where needed. This gives a gapped degenerate counterexample without altering any assertion about transport of an entire gapped ground band. [step 3.1, step 5.1, algebra, discharge-contradiction] ∎

## Remarks

The state is the equal mixture of the two ordered product phases on the quasi-local algebra. The proof does not assert a coherent infinite-volume GHZ wavefunction in a selected infinite tensor product. It constructs and checks the actual cyclic Hilbert representation, its generator and its two-dimensional zero eigenspace. The source's general degenerate-ground-space discussion supplies context only; the example is calculated locally.
