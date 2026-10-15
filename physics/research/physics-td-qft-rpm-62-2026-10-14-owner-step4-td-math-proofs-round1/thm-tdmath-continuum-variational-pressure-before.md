---
id: thm-tdmath-continuum-variational-pressure
kind: theorem
title: Superstable regular continuum grand pressure and variational formula
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-ultrafilter-extension-principle
  - def-dependent-choice
  - def-hahn-banach-extension-principle-relative
  - def-tdmath-superstable-regular-interaction
  - lem-tdmath-superstable-cell-energy-bound
  - thm-tdmath-decreasing-integrable-tail-free-cube-pressure
  - def-tdmath-poisson-configuration-reference
  - thm-tdmath-poisson-reference-count-properties
  - def-tdmath-finite-region-relative-entropy
  - lem-tdmath-relative-entropy-variational-and-chain-rules
  - thm-monotone-convergence-for-the-integral
  - def-tdmath-local-tame-topology
  - thm-tdmath-specific-entropy-density
  - thm-tdmath-local-tame-entropy-compactness
  - thm-tdmath-spatial-mean-information
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  def-tdmath-superstable-regular-interaction: mathematical-premise
  lem-tdmath-superstable-cell-energy-bound: mathematical-premise
  thm-tdmath-decreasing-integrable-tail-free-cube-pressure: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
  thm-tdmath-local-tame-entropy-compactness: mathematical-premise
  thm-tdmath-spatial-mean-information: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Theorems 1–2, printed pp.178–187 / PDF pp.8–17: energy density, free/periodic Gibbs variational formula, and pressure limit. The complete proofs in Sections 3–5 were read; local entropy and spatial-information inputs are separately supplied on the MP8 page."
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Sections 2.3, 3, and 5, printed pp.184–195 and 197–204 / complete 28-page PDF: Poisson-reference entropy, upper/lower empirical-field estimates, and conditional laws."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Sections 1–2, printed pp.131–141 / PDF pp.4–14: superstability cell estimates and finite-volume interaction bounds."
    - title: "D. Dereudre, Introduction to the theory of Gibbs point processes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Sections 1.2–1.3, PDF pp.7–12: pair energy and finite-volume Poisson-Gibbs normalization; its infinite-volume variational theorem assumes finite range and is not used here."
---

## Statement

Assume AC, the ultrafilter extension principle, DC, and HB. Let $\phi$ be superstable and regular as in [[def-tdmath-superstable-regular-interaction]], and fix $z,\beta>0$. Use the stationary finite-intensity law space $\mathcal P^1_{\rm stat}$, the specific relative entropy $I(P)$, the intensity $\rho(P)$, and the positional energy density $\Phi(P)=\mathcal E(P)$ defined in [[def-tdmath-superstable-regular-interaction]] and [[def-tdmath-local-tame-topology]]. The existence and lower semicontinuity of $\Phi$ under these hypotheses are established below. For free and periodic cubes define
$$Z_{L,z,\beta,bc}=E_{Q_{\Lambda_L}}\!\left[z^{N_{\Lambda_L}}e^{-\beta H_{L,bc}}\right],\qquad bc\in\{\mathrm{free},\mathrm{per}\}.$$
Then the limit $p_Q(z,\beta)=\lim_{L\to\infty}L^{-d}\log Z_{L,z,\beta,bc}$ exists, is independent of $bc$, and
$$p_Q(z,\beta)=-\min_{P\in\mathcal P^1_{\rm stat}}\{I(P)+\beta\Phi(P)-\rho(P)\log z\}.$$
The minimizer set is nonempty and compact in the local-tame topology $\tau_L$. This theorem concerns positional configurations only. If $\Xi_{L,z,\beta}$ is instead normalized against Lebesgue measure with $1/N!$, then $\Xi_{L,z,\beta}=e^{L^d}Z_{L,z,\beta,\mathrm{free}}$, so its logarithmic rate is $p_Q+1$.

## Facts & Assumptions

**Given:** AC, the ultrafilter extension principle, DC, HB, a superstable regular pair potential, $z,\beta>0$, and the unit-intensity Poisson reference.

[A1] The choice assumptions are carried explicitly because [[thm-tdmath-local-tame-entropy-compactness]] uses AC, the ultrafilter extension principle, DC, and HB for compactness and sequential compactness.

[F1] [[def-tdmath-superstable-regular-interaction]]: superstable means a stable part plus a nonnegative repulsive core, regularity supplies the decreasing integrable lower and upper tail, and $Z_Q$ uses normalized unit-intensity Poisson measure.

[F2] [[lem-tdmath-superstable-cell-energy-bound]]: there are $A>0,B\geq0$ such that $H_\phi(\omega)\geq A\sum_iN_{C_i}(\omega)^2-BN(\omega)$.

[F3] [[thm-tdmath-local-tame-entropy-compactness]]: for every finite $c$, the laws with $I(P)\leq c$ are compact and sequentially compact in $\tau_L$ under the assumptions in [A1].

[F4] [[thm-tdmath-spatial-mean-information]]: if a stationary law is ergodic under all translations and has finite $I(P)=\gamma$, then $L^{-d}\log(dP_{\Lambda_L}/dQ_{\Lambda_L})\to\gamma$ in $L^1(P)$.

[F5] [[def-tdmath-local-tame-topology]]: $\tau_L$ is convergence of expectations of every measurable local observable bounded by a constant times $1+N_A$ on some bounded set $A$.

[F6] [[thm-tdmath-decreasing-integrable-tail-free-cube-pressure]]: for the regular tail class here, the free-cube grand partition is finite and its free pressure limit exists.

[F7] [[thm-monotone-convergence-for-the-integral]]: nonnegative cell-count sums increase to their extended expectation.

[F8] [[lem-tdmath-relative-entropy-variational-and-chain-rules]] and [[def-tdmath-finite-region-relative-entropy]]: finite-region entropy has the conditional chain rule, is nonnegative, and its variational formula applies to bounded measurable tests.

[L1] Georgii's Theorem 1 (1994, Section 3) states that for a superstable lower-regular pair potential, $\Phi(P)=\lim L^{-d}E_PH_{L,\mathrm{free}}$ exists in $\mathbb R\cup\{+\infty\}$ for every stationary finite-intensity law and is lower semicontinuous in the local topology. Its hypotheses match [F1]–[F2]; the full 1994 proof was read. This supplies the energy-density existence interface, not a certification stamp.

[L2] Georgii's Theorem 2 (1994, Section 3, equations (2.20)–(2.22)) states that for a superstable regular potential and $z,\beta>0$, the free and periodic normalized-Poisson partition functions have the same limiting rate $p(z,\beta)=-\min_P[I(P)+\beta\Phi(P)-\rho(P)\log z]$, and the associated rate functional has compact local-tame sublevel sets. Its proof is in Sections 4–5; the complete source proof was read. The local Poisson/entropy inputs used there are supplied by [F2]–[F8].

## Proof

**Given:** The assumptions and suppliers in Facts & Assumptions.

1.1 Georgii's Theorem 1 [L1] gives existence of $\mathcal E(P)$ and lower semicontinuity for every stationary finite-intensity law; by the Definition, this is $\Phi(P)$. The source uses the same maximum norm $|x|_\infty$ in (2.3)–(2.7). Its stable-plus-purely-repulsive splitting and decreasing integrable lower-tail hypotheses therefore match [F1] exactly. Thus $\Phi$ has exactly the domain and convention in the Statement. [F1, F2, L1, algebra]

1.2 The cell estimate [F2] and $\beta>0$ imply $J=I+\beta\Phi-\rho\log z$ is lower semicontinuous and coercive on bounded-$J$ sets: the Poisson entropy variational inequality with bounded truncations of $aN_{C_0}$ gives $I(P)\geq a\rho(P)-(e^a-1)$; the pointwise square inequality gives $E_PN_{C_0}^2\geq\rho(P)^2$. Hence bounded $J$ bounds $\rho$, $I$, and $\Phi$ from above. A finite candidate exists: take independent Bernoulli occupancy of widely separated small cubes, at most one absolutely continuously distributed point per cube, and a uniform random lattice phase. Each tile has finite relative entropy to Poisson, and the summable regular tail bounds its absolute intertile energy per volume. Thus $J$ is proper. By [F3] and the choice assumptions [A1], its bounded sublevels are compact in $\tau_L$. [A1, F1, F2, F3, F7, F8, algebra]

2.1 For the finite-volume Gibbs tilt $G_{L,z,\beta,bc}$, direct integration gives $$ L^{-d}\log Z_{L,z,\beta,bc} =-L^{-d}D(G_{L,z,\beta,bc}\Vert Q_{\Lambda_L}) -\beta L^{-d}E_GH_{L,bc} +L^{-d}\log z\,E_GN. $$ Georgii's Theorem 2 [L2], applied with the present superstable regular interaction and $F=0$, supplies the matching upper and lower empirical-field bounds and the free/periodic pressure limit. Its upper proof uses this entropy identity, block stationarization, and the superstable cell cutoff; its lower proof conditions finite blocks on bounded finite-energy events, inserts empty corridors, and applies the spatial likelihood limit. The inspected source hypotheses match [F1]–[F8]: the Poisson reference is independent unit intensity, $\tau_L$ is the local-tame topology [F5], entropy compactness is [F3], and the energy-density interface is [L1]. The theorem therefore yields $$ p_Q(z,\beta)=-\min_P\{I(P)+\beta\Phi(P)-\rho(P)\log z\} $$ for both boundary conditions, with compact variational sublevels. [A1, F1, F3, F4, F5, F8, L1, L2, step 1.1]

2.2 The minimum is attained: a minimizing sequence lies in a finite sublevel by the sparse finite candidate in step 1.2; compactness [F3] gives a convergent subsequence and lower semicontinuity from step 1.1 gives a minimizer. The set of minimizers is the closed minimum level within that compact sublevel, hence nonempty and compact. This agrees with the compact-sublevel conclusion in [L2]. [A1, F3, L2, step 1.2]

3.1 The unit-intensity Poisson law on $\Lambda_L$ has density $e^{-L^d}/N!$ relative to Lebesgue measure on the $N$-point sector. Therefore the physical partition $\Xi_{L,z,\beta}=e^{L^d}Z_{L,z,\beta,\mathrm{free}}$; its log rate is $p_Q+1$. This is only a positional normalization conversion. [F1, F6, L2, algebra] ∎
