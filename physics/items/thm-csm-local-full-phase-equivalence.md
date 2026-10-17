---

id: thm-csm-local-full-phase-equivalence
kind: theorem
title: Full interacting shell, canonical, and variational-grand local marked equivalence
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-csm-full-marked-model
  - def-csm-marked-periodic-continuation
  - def-tdmath-local-tame-topology
  - lem-csm-information-contraction-pinsker
  - lem-csm-gaussian-marked-lift-existence
  - thm-tdmath-continuum-variational-pressure
  - thm-csm-full-shell-positional-minimizer
  - thm-csm-local-mark-kl-bound
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-csm-full-marked-model: mathematical-premise
  def-csm-marked-periodic-continuation: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  lem-csm-information-contraction-pinsker: mathematical-premise
  lem-csm-gaussian-marked-lift-existence: mathematical-premise
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  thm-csm-full-shell-positional-minimizer: mathematical-premise
  thm-csm-local-mark-kl-bound: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Sections 2.3, 3 and 5, printed pp.184–195 and 197–204 / complete 28-page PDF: marked restrictions, conditional entropy and local laws."
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Theorem 3.3 and proof, Sections 6–7, printed pp.187–195 / PDF pp.17–25: positional empirical-field minimizers and local ensemble limits."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Sections 1.2–1.4: canonical and grand-canonical preparation conventions; context, not proof of this theorem."
---

## Statement

Assume AC and the hypotheses and notation of [[thm-csm-full-shell-positional-minimizer]], including its AC, ultrafilter extension principle, DC, and HB assumptions. Fix a bounded Borel region $\Delta$ and use the marked periodic continuation and local restriction defined in [[def-csm-marked-periodic-continuation]]. By translating $\Delta$ and the spatial argument of $G$ together, take a representative with $\Delta\subseteq[0,\infty)^d$; then $\Delta\subseteq\Lambda_{L_n}$ for all sufficiently large $n$. This translation preserves the expectations because the finite laws are torus-translation invariant and the limiting independent mark lift of the stationary positional state is stationary. Let $M_n^{\rm ph}$ be the uniform full-phase band law, $C_n^{\rm ph}$ the exact-$N_n$ full canonical law, and $P_*$ the singleton positional grand variational minimizer. Give points of $P_*$ independent marks with kernel $\nu_b$ of [[def-csm-full-marked-model]], and denote the resulting infinite marked law by $P_*^{\rm mark}$, whose existence is supplied by [[lem-csm-gaussian-marked-lift-existence]]. For finite-volume expectations, evaluate $G$ on the restriction $\omega^{\rm per}_{L_n,q,p}|_\Delta$; under $P_*^{\rm mark}$, evaluate it on $\xi_\Delta$. Then for every bounded marked-local observable $G$ on $\Delta$ in the sense of [[def-csm-marked-periodic-continuation]],
$$E_{M_n^{ph}}G\to E_{P_*^{mark}}G,\qquad E_{C_n^{ph}}G\to E_{P_*^{mark}}G.$$
The matched full grand activity is $\exp(\alpha)/\kappa_b$ by the normalization identity in [[def-csm-full-marked-model]]; $P_*^{\rm mark}$ is the independent-Gaussian marked lift associated with that positional variational minimizer. If additionally $|G|\leq C(1+N_\Delta)$, shell convergence also holds for $G$. This is fixed-region convergence, not uniform over growing regions or arbitrary unbounded momentum observables. No finite-volume grand-canonical convergence or DLR converse is asserted.

## Facts & Assumptions

**Given:** The interaction, density, temperature, band, and singleton-minimizer hypotheses from [[thm-csm-full-shell-positional-minimizer]].

[A1] AC is also required by Pinsker's inequality and the countable-coordinate marked-lift construction ([[def-axiom-of-choice]]).

[F1] [[thm-csm-local-mark-kl-bound]]: for each fixed Δ, the average conditional mark relative entropy on points spatially inside Δ tends to zero, although their number is random.

[F2] [[lem-csm-information-contraction-pinsker]]: measurable restrictions decrease KL divergence, and event-supremum total variation is at most sqrt(D/2).

[F3] [[thm-csm-full-shell-positional-minimizer]]: for every local-tame $f$, the shell and exact-$N_n$ canonical expectations of $f$ on the periodic continuation converge to $P_*(f)$; the shell empirical-field barycenters converge to $P_*$ in $\tau_L$, and canonical empirical fields converge in probability there.

[F4] [[def-csm-full-marked-model]]: canonical marks are independently ν_b-marked, and the full activity corresponding to positional activity exp(α) is exp(α)/κ_b.

[F5] [[lem-csm-gaussian-marked-lift-existence]] and [[def-csm-marked-periodic-continuation]]: the independent mark kernel defines a unique marked lift of $P_*$ and preserves stationarity, the local observable is measurable on the finite restriction $\xi_\Delta$, and finite-torus restrictions use the explicitly defined marked periodic continuation.

[F6] [[def-tdmath-local-tame-topology]]: every measurable local function bounded by a constant times $1+N_\Delta$ is local-tame; in particular every bounded measurable local observable and each bounded indicator of a local count value is an admissible positional convergence test.

[F7] [[thm-tdmath-continuum-variational-pressure]]: its minimization is over stationary finite-intensity positional laws; hence the variational minimizer $P_*$ is stationary.

## Proof

**Given:** The hypotheses and exact supplier interfaces in Facts & Assumptions.

1.1 Let $B_n$ be the shell positional marginal and let $\widehat B_n$ sample $B_n$ followed by independent $\nu_b$ marks. Form two augmented laws on (all positions $q$, marks attached to $q\cap\Delta$): the first is the corresponding marginal of $M_n^{\rm ph}$ and the second is that of $\widehat B_n$. Conditional on $q$, their mark laws are $b_{n,\Delta}(\cdot|q)$ and $\nu_b^{\otimes N_\Delta(q)}$. The relative-entropy chain rule therefore makes the augmented divergence exactly the conditional KL average in [F1]. Restricting the augmented observation to positions and marks in $\Delta$ is measurable; data processing and Pinsker [F2] show that the local marked restrictions of $M_n^{\rm ph}$ and $\widehat B_n$ have total variation tending to zero. For bounded $G$, the expectation difference is at most $2\|G\|_\infty$ times this event-supremum distance, hence tends to zero. [A1, F1, F2, construct]

2.1 Integrate $G$ against the finite product $\nu_b$ marks at fixed local $q$ and call the result $g(q\cap\Delta)$. The lift construction [F5] gives this measurable kernel and its infinite marked law; since $G$ is bounded, $|g|\leq\|G\|_\infty$. By [F6], $g$ is local-tame. Therefore $E_{\widehat B_n}G=B_n(g)\to P_*(g)=E_{P_*^{\rm mark}}G$ by [F3]. The canonical factorization in [F4] and canonical positional convergence in [F3] give the second limit. By [F4], the matching full activity is $\exp(\alpha)/\kappa_b$; this identifies the same infinite variational marked state and says nothing about convergence of finite-volume grand laws. [A1, F3, F4, F5, F6, step 1.1]

3.1 Suppose |G|≤C(1+N_Δ). By [F6], bounded indicators of each count value are local-tame, so their probabilities converge under B_n by [F3]; the mean count also converges because N_Δ is local-tame. For integer K, E_{B_n}(N_Δ-K)^+=E_{B_n}N_Δ-E_{B_n}(N_Δ∧K); for fixed K this converges to the corresponding P_* expectation. If N_Δ>2K, then N_Δ≤2(N_Δ-K), so E[N_Δ1_{N_Δ>2K}]≤2E(N_Δ-K)^+. First take limsup over n, then K→∞; integrability of N_Δ under P_* makes this tail vanish. Indeed P_* is stationary with finite unit-cell intensity by [F7], and bounded Δ meets only finitely many unit cells. This proves uniform integrability of 1+N_Δ under B_n. The shell and Gaussian lift have the same local count law. The limiting marked lift has the same local count as P_*, so its tail also vanishes. Truncate G to N_Δ≤K; it is bounded, so step 1.1 applies. Both finite-volume omitted tails are bounded by C E[(1+N_Δ)1_{N_Δ>K}], uniformly vanishing as K→∞. Let n→∞ and then K→∞ to obtain the claimed shell limit. [F1, F3, F5, F6, F7, step 1.1, step 2.1] ∎
