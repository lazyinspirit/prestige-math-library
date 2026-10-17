---
id: thm-qsm-quantum-lattice-pressure
kind: theorem
title: Bounded quantum lattice pressure on cubes and van Hove sets
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 6
deps:
  - def-qsm-translation-invariant-spin-interaction
  - def-qsm-local-spin-algebras
  - lem-qsm-matrix-exponential-response
  - thm-complex-spectral-theorem-for-normal-endomorphisms
dependency_roles:
  def-qsm-translation-invariant-spin-interaction: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-matrix-exponential-response: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§3.4.12–3.4.16, pp. 78–82
      url: https://arxiv.org/pdf/1311.2717
    - title: Oscar E. Lanford III and Derek W. Robinson, Statistical Mechanics of Quantum Spin Systems III, Theorem 3.1, pp. 332–334
      url: https://people.math.harvard.edu/~knill/history/lanford/papers/LanfordRobinsonStatsMechanics.pdf
---

## Statement

Let $d\ge1$, $q\ge1$, and let $\Phi$ be a translation-invariant uniformly bounded finite-range interaction as in [[def-qsm-translation-invariant-spin-interaction]]. For each finite nonempty $\Lambda\subset\mathbb Z^d$, let $H_\Lambda$ be its free-boundary finite-volume Hamiltonian, $Z_\Lambda(\beta)=\operatorname{Tr}_{\Lambda}(e^{-\beta H_\Lambda})$, and $p_\Lambda(\beta)=|\Lambda|^{-1}\log Z_\Lambda(\beta)$, where $\operatorname{Tr}_{\Lambda}$ is the ordinary finite-matrix trace of [[def-qsm-local-spin-algebras]]. Fix $\beta>0$, measured in inverse joules when the interaction terms are assigned energy units.

Write $d_\infty(x,y):=\max_{1\le j\le d}|x_j-y_j|$ for the lattice metric of [[def-qsm-local-spin-algebras]]. For a finite $\Lambda\subseteq\mathbb Z^d$ and $x\in\Lambda$, define $\operatorname{dist}_\infty(x,\mathbb Z^d\setminus\Lambda):=\min_{y\in\mathbb Z^d\setminus\Lambda}d_\infty(x,y)$. This minimum exists: $\Lambda$ is finite, so its complement is nonempty, and the distances from $x$ to that complement are positive integers. A sequence of finite nonempty regions $(\Lambda_n)$ is van Hove if $|\Lambda_n|\to\infty$ and, for every fixed integer $r\ge0$, the inner boundary $\partial_r\Lambda_n:=\{x\in\Lambda_n:\operatorname{dist}_\infty(x,\mathbb Z^d\setminus\Lambda_n)\le r\}$ satisfies $|\partial_r\Lambda_n|/|\Lambda_n|\to0$. Then $p_{\Lambda_n}(\beta)$ converges to the same finite value $p_\Phi(\beta)$ for every van Hove sequence; in particular, for positive integers $L$, the cube limit for $Q_L=\{0,\ldots,L-1\}^d$ exists and equals this value. The normalization is dimensionless log-partition per lattice site; the finite-volume Helmholtz free energy per site is $-\beta^{-1}p_\Lambda(\beta)$.

For every van Hove sequence $(\Lambda_n)$ and every sequence of self-adjoint matrices $B_n\in\mathcal A_{\Lambda_n}$ satisfying $\|B_n\|/|\Lambda_n|\to0$, the perturbed normalized log-partition functions satisfy
$$|\Lambda_n|^{-1}\log\operatorname{Tr}_{\Lambda_n}\!\left(e^{-\beta(H_{\Lambda_n}+B_n)}\right)\longrightarrow p_\Phi(\beta).$$
No spatial support condition on $B_n$ is needed. This theorem makes no claim for changes to the bulk interaction.

## Facts & Assumptions

**Given:** $d\ge1$, finite site dimension $q\ge1$, a translation-invariant interaction with finite range and per-site norm bound, finite regions $\Lambda$, and $\beta>0$.

[A1] If interaction terms are interpreted as energies, each $\Phi(Z)$ and $H_\Lambda$ has units joules and $\beta$ has units $\mathrm{J}^{-1}$; $\beta H_\Lambda$ and $p_\Lambda$ are dimensionless.

[F1] [[def-qsm-translation-invariant-spin-interaction]]: the finite canonical-shape list $\mathscr S_\Phi$ represents each nonzero translation orbit once, the terms are translation copies, and $H_\Lambda$ sums exactly the self-adjoint terms whose full supports lie in $\Lambda$, with $\operatorname{diam}_\infty S\le R$. [[def-qsm-local-spin-algebras]]: $\mathcal A_\Lambda=\mathcal B(\mathcal H_\Lambda)\cong M_{q^{|\Lambda|}}(\mathbb C)$ and $\operatorname{Tr}_\Lambda$ is the ordinary finite-matrix trace.

[F2] [[lem-qsm-matrix-exponential-response]]: for a continuously differentiable finite-dimensional Hermitian path $M(s)$, $\frac{d}{ds}\log\operatorname{Tr}(e^{M(s)})=\operatorname{Tr}(\rho_sM'(s))$, where $\rho_s=e^{M(s)}/\operatorname{Tr}(e^{M(s)})$. The proof uses the convergent matrix-exponential derivative and finite trace cyclicity; this proof uses only the first-derivative clause, not the supplier's separate Hessian-positivity clause.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis. In particular this applies to the self-adjoint finite-volume Hamiltonians.

## Proof

**Proof technique:** direct boundary comparison with fixed finite blocks.

**Given:** [A1], [F1]–[F3], the van Hove sequence and self-adjoint perturbations in the Statement, and the finite-volume partition functions.

1.1 Write $\mathscr S_\Phi$ for the finite anchored-shape list and $J_\Phi=\sum_{S\in\mathscr S_\Phi}\|\Phi(S)\|$. For each shape there are at most $|\Lambda|$ translates contained in $\Lambda$, so $\|H_\Lambda\|\le J_\Phi|\Lambda|$. By [F3], $H_\Lambda$ has real eigenvalues in $[-J_\Phi|\Lambda|,J_\Phi|\Lambda|]$. Therefore $q^{|\Lambda|}e^{-\beta J_\Phi|\Lambda|}\le Z_\Lambda(\beta)\le q^{|\Lambda|}e^{\beta J_\Phi|\Lambda|}$, and $p_\Lambda(\beta)$ is real and uniformly bounded. [given, F1, F3, algebra]

1.2 For self-adjoint matrices $K,L$ on the same finite spin space, put $M_s=L+s(K-L)$. Apply [F2] to obtain $\frac{d}{ds}\log\operatorname{Tr}(e^{M_s})=\operatorname{Tr}(\rho_s(K-L))$. The matrix $\rho_s$ is positive with trace one by [F3]; diagonalizing $\rho_s$ gives $|\operatorname{Tr}(\rho_s(K-L))|\le\|K-L\|$, since each unit eigenvector $v$ obeys $|\langle(K-L)v,v\rangle|\le\|K-L\|$. Integrating over $0\le s\le1$ proves $|\log\operatorname{Tr}(e^K)-\log\operatorname{Tr}(e^L)|\le\|K-L\|$. In particular, for self-adjoint Hamiltonians $H,H'$ on that same space, $|\log\operatorname{Tr}(e^{-\beta H})-\log\operatorname{Tr}(e^{-\beta H'})|\le\beta\|H-H'\|$. [F2, F3, algebra]

2.1 Fix an integer block side $\ell\ge1$ and tile $Q_L$ by $N=\lfloor L/\ell\rfloor^d$ disjoint full $\ell$-cubes, leaving $E_L$ as the residual sites. The strips in the $d$ coordinate directions give $|E_L|\le d\ell L^{d-1}$ when $L\ge\ell$. Let $H_L^{\rm cut}$ be the sum of the free-boundary Hamiltonians of the full blocks, embedded into $\mathcal A_{Q_L}$, and zero on residual sites. An interaction term omitted from this cut either meets $E_L$ or crosses an internal grid plane. For each anchored shape, at most $M|E_L|$ translates meet $E_L$, because choosing a site of the shape and a residual site determines its anchor. For a fixed coordinate grid plane, at most $(r+1)L^{d-1}$ anchors can have a support crossing it, where $r=\lceil R\rceil$: the support's coordinate span is at most $r$, the anchor must lie in an interval of at most $r+1$ lattice sites, and each of the other $d-1$ anchor coordinates has at most $L$ choices. There are at most $dL/\ell$ internal planes. Thus $\|H_{Q_L}-H_L^{\rm cut}\|\le J_\Phi\bigl(M|E_L|+d(r+1)L^d/\ell\bigr)$. [F1, step 1.1, construct, algebra]

3.1 The block Hamiltonians act on separate tensor factors. Diagonalize each block Hamiltonian using [F3]; tensor products of their eigenvectors and residual-site basis vectors form an orthonormal eigenbasis of $H_L^{\rm cut}$. Hence $\operatorname{Tr}(e^{-\beta H_L^{\rm cut}})=Z_{Q_\ell}(\beta)^Nq^{|E_L|}$. Step 1.2 and the residual-volume bound imply $\limsup_{L\to\infty}|p_{Q_L}(\beta)-p_{Q_\ell}(\beta)|\le\beta J_\Phi d(r+1)/\ell$. [F1, F3, step 1.2, step 2.1, algebra]

4.1 For any $\epsilon>0$, choose $\ell$ so large that $2\beta J_\Phi d(r+1)/\ell<\epsilon/2$. The estimate in step 3.1 then makes $|p_{Q_L}(\beta)-p_{Q_{L'}}(\beta)|<\epsilon$ for all sufficiently large $L,L'$. The sequence is Cauchy in $\mathbb R$ and converges to a finite $p_\Phi(\beta)$ by step 1.1. The estimate also gives $|p_\Phi(\beta)-p_{Q_\ell}(\beta)|\le\beta J_\Phi d(r+1)/\ell$. [step 1.1, step 3.1, algebra]

5.1 Let $(\Lambda_n)$ be van Hove and fix $\ell\ge1$. Use any fixed offset to tile $\mathbb Z^d$ by $\ell$-cubes, retain only cubes fully contained in $\Lambda_n$, and let $N_n$ be their number. Every residual site $x\in E_n:=\Lambda_n\setminus\bigcup B$ lies in a grid cube that also contains some $y\notin\Lambda_n$, so $\operatorname{dist}_\infty(x,\mathbb Z^d\setminus\Lambda_n)\le\ell-1$ and $E_n\subseteq\partial_\ell\Lambda_n$. Thus $|E_n|/|\Lambda_n|\to0$ and $N_n\ell^d=|\Lambda_n|-|E_n|$. Define $H_n^{\rm cut}$ to be the sum of the free-boundary Hamiltonians on the retained full cubes, embedded in $\mathcal A_{\Lambda_n}$, and zero on the residual sites. Any omitted interaction term either meets $E_n$, in which case its anchor lies in $\partial_{\ell+r}\Lambda_n$, or crosses a face between two retained cubes. For each retained cube, at most $2d(r+1)\ell^{d-1}$ anchor sites lie in its face layers wide enough for a support of range $r=\lceil R\rceil$ to cross a face; hence all internal-cut anchors number at most $2d(r+1)\ell^{d-1}N_n\le2d(r+1)|\Lambda_n|/\ell$. Since the norm sum over shapes at one anchor is $J_\Phi$, $\|H_{\Lambda_n}-H_n^{\rm cut}\|\le J_\Phi\bigl(|\partial_{\ell+r}\Lambda_n|+2d(r+1)|\Lambda_n|/\ell\bigr)$. Translation invariance makes every full-block partition function equal to $Z_{Q_\ell}$, and the zero residual Hamiltonian contributes $q^{|E_n|}$, so $\operatorname{Tr}_{\Lambda_n}(e^{-\beta H_n^{\rm cut}})=Z_{Q_\ell}^{N_n}q^{|E_n|}$. Divide the comparison from step 1.2 by $|\Lambda_n|$; the van Hove condition sends the fixed-width boundary term and $|E_n|/|\Lambda_n|$ to zero, while $N_n/|\Lambda_n|\to\ell^{-d}$. Therefore $\limsup_n|p_{\Lambda_n}(\beta)-p_{Q_\ell}(\beta)|\le2\beta J_\Phi d(r+1)/\ell$. Letting $\ell\to\infty$ and using step 4.1 proves $p_{\Lambda_n}(\beta)\to p_\Phi(\beta)$. [F1, step 1.2, step 3.1, step 4.1, construct, algebra]

6.1 Put $\widetilde p_n:=|\Lambda_n|^{-1}\log\operatorname{Tr}_{\Lambda_n}(e^{-\beta(H_{\Lambda_n}+B_n)})$. Applying step 1.2 to the self-adjoint matrices $-\beta(H_{\Lambda_n}+B_n)$ and $-\beta H_{\Lambda_n}$ shows that $|\widetilde p_n-p_{\Lambda_n}(\beta)|\le\beta\|B_n\|/|\Lambda_n|$. This tends to zero by hypothesis, so step 5.1 gives $\widetilde p_n\to p_\Phi(\beta)$. [given, step 1.2, step 5.1, algebra] ∎
