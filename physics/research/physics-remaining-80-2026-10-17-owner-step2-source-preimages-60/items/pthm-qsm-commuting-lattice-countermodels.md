---
id: pthm-qsm-commuting-lattice-countermodels
kind: physics-theorem
title: "Commuting quantum Ising and nonadditive phase countermodel"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-qsm-models-statistics-and-preparation
  - def-qsm-pauli-two-qubit-conventions
  - thm-tdmath-ising-chain-limit
  - pthm-csm-ising-ring-correlation
  - pthm-csm-nonadditive-phase-countermodel
dependency_roles:
  post-qsm-models-statistics-and-preparation: physical-assumption
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
  thm-tdmath-ising-chain-limit: mathematical-premise
  pthm-csm-ising-ring-correlation: physical-result
  pthm-csm-nonadditive-phase-countermodel: physical-result
physical_scope: "Two explicit finite-dimensional quantum models: a periodic diagonal one-dimensional Ising Hamiltonian and a global N-dependent three-sector Hamiltonian. The first has the exact specified one-dimensional classical correspondence; the second is deliberately non-product-additive. No generic noncommuting lattice theorem or short-range phase claim is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §§5.3.1 and 5.4.2"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
---

## Statement

**Periodic commuting Ising model.** For $N\ge2$, let $\mathcal H_N=(\mathbb C^2)^{\otimes N}$ and let $Z_i$ act as $\sigma_z$ on tensor factor $i$ and as identity on the others. With periodic indexing $Z_{N+1}=Z_1$, count exactly the $N$ indexed bonds, so $N=2$ has two bonds. For real energies $J,h$ and $\beta>0$ in J$^{-1}$, adopt
$$H_N^{\mathrm q}=-J\sum_{i=1}^N Z_iZ_{i+1}-h\sum_{i=1}^N Z_i.$$
In the product eigenbasis $|s_1,\ldots,s_N\rangle$, $s_i\in\{-1,1\}$, its energy equals $H_N^{\mathrm{cl}}(s)=-J\sum_i s_is_{i+1}-h\sum_i s_i$. Thus the quantum Gibbs density is diagonal in this basis, and its partition function and diagonal probabilities agree exactly with the specified classical finite ring. In particular, when $J\ge0$ and $h=0$, its $\sigma_z$ correlations are those of [[pthm-csm-ising-ring-correlation]]. For all real $J,h$ and $\beta>0$, define $\cosh x:=(e^x+e^{-x})/2$ and $\sinh x:=(e^x-e^{-x})/2$, and put
$$\lambda_\pm=e^{\beta J}\cosh(\beta h)\pm\sqrt{e^{2\beta J}\sinh^2(\beta h)+e^{-2\beta J}}.$$
Then $N^{-1}\log Z_N^{\mathrm q}\to\log\lambda_+$, with every fixed finite order of derivatives converging locally uniformly on compact subsets of $(0,\infty)\times\mathbb R^2$. This is the exact commuting one-dimensional model, not a theorem for noncommuting interactions.

**Global three-sector countermodel.** For $N\ge1$ and $\epsilon>0$ joules, let $\mathcal K_N=\mathbb C\oplus\mathbb C\oplus(\mathbb C^2)^{\otimes 2N}$ with its orthogonal direct-sum inner product, and write $I_{4^N}$ for the identity on the final $4^N$-dimensional summand. Let $|A\rangle,|B\rangle$ be the standard unit vectors in the first and second summands, and let $|s\rangle$ range over the standard product basis in the final summand. Define $H_N^{\mathrm g}=0\oplus N\epsilon\oplus2N\epsilon I_{4^N}$, so the basis energies are $E(A)=0$, $E(B)=N\epsilon$, and $E(s)=2N\epsilon$. For $0\le\Delta<N\epsilon$, define the spectral-shell basis subset $S_{N,\Delta}:=\{v:|E(v)-N\epsilon|\le\Delta\}$ and its uniform state $\rho_{N,\Delta}^{\mathrm{shell}}:=|S_{N,\Delta}|^{-1}\sum_{v\in S_{N,\Delta}}|v\rangle\langle v|$. For $\beta>0$ this finite quantum model has
$$Z_N^{\mathrm g}=1+e^{-\beta N\epsilon}+4^Ne^{-2\beta N\epsilon}.$$
For every real $\beta$ as an algebraic finite-weight extension, the normalized exponential-tilt weight of the one-dimensional middle sector is at most $(2^{N+1}+1)^{-1}$; the shell state above assigns that sector probability $1$. The term “probability” here is the trace of the state against the middle-sector projection $|B\rangle\langle B|$. Also
$$\frac1N\log Z_N^{\mathrm g}\longrightarrow\max\{0,\log4-2\beta\epsilon\},\qquad 0\le\frac1N\log Z_N^{\mathrm g}-\max\{0,\log4-2\beta\epsilon\}\le\frac{\log3}{N}.$$
The limiting function has a corner at $\beta_c=(\log2)/\epsilon>0$; the canonical mean energy per member tends to $2\epsilon$ from below, $0$ from above, and $\epsilon$ at $\beta_c$. Every finite-$N$ partition sum is analytic. This global, size-dependent family is not a product of one fixed finite one-site alphabet and makes no claim about local or short-range matter.

## Facts & Assumptions

**Given:** The finite Hilbert spaces, Hamiltonians, indexed-bond convention, and positive-temperature canonical preparations in the Statement. Energies and $\epsilon$ are in joules; $\beta$ is in J$^{-1}$.

[A1] [[post-qsm-models-statistics-and-preparation]]: use the normalized canonical Gibbs state only when its trace is positive and finite. For $\beta\le0$ in the three-sector bound, the finite exponential weights are only an algebraic extension, not a physical negative-temperature assumption.

[F1] [[def-qsm-pauli-two-qubit-conventions]]: $\sigma_z$ is Hermitian with eigenvectors $e_0,e_1$ and eigenvalues $1,-1$.

[F2] [[thm-tdmath-ising-chain-limit]]: for the stated periodic two-state chain, with $\cosh x=(e^x+e^{-x})/2$ and $\sinh x=(e^x-e^{-x})/2$, the transfer matrix has eigenvalues $\lambda_\pm$ with $\lambda_+>|\lambda_-|$, and $N^{-1}\log Z_N\to\log\lambda_+$ with every fixed finite order of derivatives locally uniformly on compact parameter sets.

[F3] [[pthm-csm-ising-ring-correlation]] (current draft Statement): for the finite periodic ring with $N\ge2$, $J\ge0$, $\beta>0$, and $h=0$, the one-site means and two-site correlations have the explicit finite-ring formulas stated there.

[F4] [[pthm-csm-nonadditive-phase-countermodel]] (current draft Statement): the classical three-sector model has the exact partition sum, middle-sector bound, uniform-shell comparison, limiting log partition, and one-sided energy-density limits stated there.

## Proof

1.1 Each $Z_i$ is diagonal in the basis $|s_1,\ldots,s_N\rangle$, with eigenvalue $s_i$. Therefore $H_N^{\mathrm q}|s\rangle=H_N^{\mathrm{cl}}(s)|s\rangle$. The finite canonical trace is the sum of these positive weights, so $Z_N^{\mathrm q}=\sum_s e^{-\beta H_N^{\mathrm{cl}}(s)}$ and the diagonal Gibbs probability of each $|s\rangle$ equals the classical probability of $s$. This proves the claimed finite correspondence without interpreting off-diagonal quantum observables classically. [given, A1, F1, algebra]

1.2 The direct sum in the second model has multiplicities $1,1,4^N$, so summing its three energy weights gives $Z_N^{\mathrm g}=1+x+4^Nx^2$ where $x=e^{-\beta N\epsilon}>0$. Since $(1-2^Nx)^2\ge0$, $1+4^Nx^2\ge2^{N+1}x$, whence the middle-sector probability $x/Z_N^{\mathrm g}\le(2^{N+1}+1)^{-1}$. For $0\le\Delta<N\epsilon$, the sectors at energies $0$ and $2N\epsilon$ lie exactly $N\epsilon$ from the middle energy; the only basis vector in the shell is $|B\rangle$, so $\rho_{N,\Delta}^{\mathrm{shell}}=|B\rangle\langle B|$ and $\operatorname{tr}(\rho_{N,\Delta}^{\mathrm{shell}}|B\rangle\langle B|)=1$. These are the same finite-model values recorded in [F4], now obtained from the explicit Hilbert-space realization. [given, A1, F4, algebra]

2.1 Applying [F2] to this identical finite energy function gives the displayed transfer eigenvalues, limiting normalized log partition, and compact-uniform derivative convergence. Its strict eigenvalue gap and positive $\lambda_+$ imply an analytic finite-temperature limit. In the restricted case $J\ge0,h=0$, the equality of diagonal probabilities from step 1.1 transports each $\sigma_z$ correlation to the classical spin correlation in [F3], under exactly that supplier's hypotheses. [given, F2, F3, step 1.1]

2.2 Put $M_N=\max\{1,4^Nx^2\}$. If $x\le1$, then $x\le M_N$; if $x>1$, then $4^Nx^2\ge x$ for $N\ge1$. Hence $M_N\le Z_N^{\mathrm g}\le3M_N$, and $N^{-1}\log M_N=\max\{0,\log4-2\beta\epsilon\}$. Taking logarithms gives the stated error bound and limit. Since $\log4=2\log2$, the two branches meet at $\beta_c=(\log2)/\epsilon$. For $\beta<\beta_c$, the $4^Nx^2$ sector dominates and the mean energy per member tends to $2\epsilon$; for $\beta>\beta_c>0$, the energy-zero sector dominates and the mean tends to $0$. At equality the three weights are $1,2^{-N},1$, so the mean tends to $\epsilon$. [given, F4, step 1.2, algebra]

3.1 Each finite partition function in both models is a finite sum of positive real exponentials, so it is real analytic and has no finite-$N$ thermodynamic singularity. The Ising limiting analytic statement follows under [F2]'s positive eigenvalue gap; the corner in step 2.2 belongs only to the separate non-product-additive limiting family. [given, F2, step 2.2, algebra] ∎
