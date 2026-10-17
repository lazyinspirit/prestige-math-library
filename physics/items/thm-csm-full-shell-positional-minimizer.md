---

id: thm-csm-full-shell-positional-minimizer
kind: theorem
title: Full phase shell marginal satisfies the positional variational bound
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps:
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - lem-borel-subspaces-admit-polish-presentations
  - thm-kolmogorov-extension-for-standard-borel-coordinate-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-axiom-of-choice
  - def-dependent-choice
  - def-csm-full-marked-model
  - def-tdmath-local-tame-topology
  - def-tdmath-poisson-configuration-reference
  - thm-tdmath-poisson-reference-count-properties
  - def-tdmath-superstable-regular-interaction
  - def-hahn-banach-extension-principle-relative
  - lem-tdmath-integrable-tail-diagonal-gap
  - lem-tdmath-superstable-cell-energy-bound
  - lem-tdmath-relative-entropy-variational-and-chain-rules
  - thm-csm-uniform-phase-shell-entropy
  - thm-tdmath-canonical-grand-duality
  - thm-tdmath-continuum-variational-pressure
  - thm-tdmath-local-tame-entropy-compactness
  - thm-tdmath-periodic-fixed-n-limit
  - thm-tdmath-specific-entropy-density
  - thm-csm-total-canonical-window
  - def-tdmath-periodized-empirical-field
  - lem-tdmath-periodized-empirical-field-stationary-density
  - def-ultrafilter-extension-principle
dependency_roles:
  lem-finite-products-of-standard-borel-spaces-are-standard-borel: mathematical-premise
  lem-borel-subspaces-admit-polish-presentations: mathematical-premise
  thm-kolmogorov-extension-for-standard-borel-coordinate-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-csm-full-marked-model: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  def-tdmath-superstable-regular-interaction: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  lem-tdmath-integrable-tail-diagonal-gap: mathematical-premise
  lem-tdmath-superstable-cell-energy-bound: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-csm-uniform-phase-shell-entropy: mathematical-premise
  thm-tdmath-canonical-grand-duality: mathematical-premise
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  thm-tdmath-local-tame-entropy-compactness: mathematical-premise
  thm-tdmath-periodic-fixed-n-limit: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
  thm-csm-total-canonical-window: mathematical-premise
  def-tdmath-periodized-empirical-field: mathematical-premise
  lem-tdmath-periodized-empirical-field-stationary-density: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Lemma 4.3, Theorems 1–2 and Sections 4–5, printed pp.178–187 / PDF pp.8–17: cell bounds, positional variational rate, and periodic/free corridor estimates; full 25-page source inspected."
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Sections 2.3, 3 and 5, printed pp.184–195 and 197–204 / complete 28-page PDF: Poisson-reference entropy, entropy compactness and conditional finite-block laws."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Sections 1–3, printed pp.131–145 / PDF viewer pp.5–19: superstability, cell control and regular tails."
---

## Statement

Assume AC, the ultrafilter extension principle, DC and HB, the exact superstable regular pair interaction and periodic-image convention of [[def-csm-full-marked-model]], and integer side lengths $L_n\to\infty$ with exact particle numbers $N_n/V_n\to\rho>0$ at an interior attainable density. Fix $b>0$. Assume the positional canonical log rate is $F_b(\rho)$, and choose finite $\alpha$ with
$$P_{\rm Leb}(α,b)=F_b(ρ)+αρ,$$
where $P_{\rm Leb}$ is the grand pressure per numerical volume with Lebesgue $1/N!$ normalization. Let the positional grand variational minimizer of [[thm-tdmath-continuum-variational-pressure]] at activity $\exp(\alpha)$ and inverse temperature $b$ be the singleton $\{P_*\}$. Let $R_n=R_{L_n,N_n}$ be the phase reference of [[def-csm-full-marked-model]], let $A_n$ be the band of [[thm-csm-total-canonical-window]], set $M_n^{\rm ph}(E)=R_n(E\cap A_n)/R_n(A_n)$, and let $B_n$ be its positional marginal. For any local-tame test $f$, write $B_n[f]=E_{B_n}f(\omega^{(L_n)})$ and $C_n^{\rm pos}[f]=E_{C_n^{\rm pos}}f(\omega^{(L_n)})$, where $\omega^{(L_n)}$ is the periodic continuation. Let $\bar B_n$ be the barycenter of $R_{L_n,\omega}$ under $B_n$. Then $\bar B_n$ converges to $P_*$ in $\tau_L$, equivalently $B_n[f]\to P_*(f)$ for every local-tame $f$; also $C_n^{\rm pos}[f]\to P_*(f)$ for every such $f$. The periodized empirical fields of the exact-$N_n$ canonical laws converge in probability in $\tau_L$ to $P_*$ by [[thm-tdmath-periodic-fixed-n-limit]], and $P_*$ has intensity $\rho$. Here $P_*$ is an infinite-volume positional variational state; no finite-volume grand-canonical local convergence or DLR identification is asserted.

## Facts & Assumptions

**Given:** The choice hypotheses, model, exact-N_n sequence, shell law, interior density, supporting activity and singleton minimizer in the Statement.

[A1] AC, the ultrafilter extension principle, DC and HB are exactly the choice hypotheses assumed by the current local-tame compactness, continuum pressure and periodic fixed-N suppliers.

[F1] [[thm-csm-uniform-phase-shell-entropy]]: D(M_n^ph || C_n^ph)=o(V_n) for the specified full phase band and canonical reference.

[F2] [[def-tdmath-superstable-regular-interaction]] and [[lem-tdmath-superstable-cell-energy-bound]]: for the unit cells $C_i=i+[0,1)^d$, with $N_{C_i}$ their point counts, every finite configuration has $H_\phi\geq A\sum_iN_{C_i}^2-BN$ for fixed $A>0,B\geq0$, and stability gives $H_\phi\geq-B_0N$. Applying the same stability inequality to a two-point configuration gives $\phi(x)\geq-2B_0$ for every nonzero separation $x$. The periodic versions used below are proved by period replication in step 2.1.

[F3] [[lem-tdmath-integrable-tail-diagonal-gap]]: the regular tail has a nonnegative summable unit-cell envelope $\Psi(k)$ whose tail sum tends to zero, and supplies real corridor widths $\widetilde g(L)\to\infty$ with $\widetilde g(L)/L\to0$.

[F4] [[thm-tdmath-periodic-fixed-n-limit]]: at an interior density the exact positional 1/N! canonical log-partition rate is F_b(ρ) for the chosen sequence; the theorem also supplies canonical empirical-field concentration near the positional variational minimizers.

[F5] [[thm-tdmath-local-tame-entropy-compactness]] and [[thm-tdmath-specific-entropy-density]]: bounded specific entropy gives compactness in τ_L, and I(P) is the large-cube relative-entropy limit and is lower semicontinuous there.

[F6] [[thm-tdmath-continuum-variational-pressure]] and [[thm-tdmath-canonical-grand-duality]]: normalized-Poisson pressure is -min_P{I(P)+bΦ(P)-ρ(P)α}, the Lebesgue 1/N! pressure is one larger, and the supporting equality makes the minimum 1-F_b(ρ)-αρ; Φ is lower semicontinuous.

[F7] [[thm-csm-total-canonical-window]] and [[def-csm-full-marked-model]]: the band $A_n$ has finite positive reference measure and is contained in the energy window $|\mathcal H/V_n-e_b(\rho)|\leq\delta_n$ with $\delta_n\to0$; its normalized restriction defines $M_n^{\rm ph}$, and the finite canonical and band laws are invariant under torus translations.

[F8] [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: finite-region relative entropy obeys the conditional chain rule, restriction contraction, its bounded-test variational formula, and nonnegativity. For the finite-$N_n$ chain rules use the common labelled-coordinate representation from [F11]; its position and mark spaces are standard Borel.

[F9] [[def-tdmath-periodized-empirical-field]] and [[lem-tdmath-periodized-empirical-field-stationary-density]]: a finite torus configuration determines a stationary empirical field $R_{L_n,\omega}$ of intensity $N_n/V_n$; for a finite-volume law $C$, its empirical-field barycenter is stationary with intensity $E_CN_n/V_n$. Its evaluation on an integrable local-tame $f$ is measurable and equals the spatial average $V_n^{-1}\int_{\mathbb T_{L_n}}f(T_x\omega^{(L_n)})\,dx$.

[F10] [[thm-tdmath-poisson-reference-count-properties]]: restrictions of the unit-intensity Poisson law to disjoint bounded Borel sets are independent, and the probability of an empty region of volume $v$ is $e^{-v}$.

[F11] The exact-$N_n$ configuration space in the integer cube $\Lambda_{L_n}$ is a standard-Borel Borel subset of the finite product of the standard-Borel cell spaces in [[def-tdmath-poisson-configuration-reference]]. The exact results used from its current mathematical dependency closure are [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]], [[lem-borel-subspaces-admit-polish-presentations]], [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]], and [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]. Equivalently, for finite-$N_n$ entropy chain rules use labelled positions in the Borel no-collision subset of $\Lambda_{L_n}^{N_n}$ and marks in $\mathbb R^{dN_n}$; these are standard Borel, and the common symmetric labelled densities retain the same $1/N_n!$ factor, which cancels in likelihood ratios. The countable product law of independent tile configurations exists by the Kolmogorov extension result in that closure, and its product with the uniform lattice phase exists by the sigma-finite product-measure result there.

## Proof

**Given:** The hypotheses and exact current suppliers in Facts & Assumptions.

1.1 Put D_n=D(M_n^ph || C_n^ph), and let B_n be the positional marginal. The conditional chain rule gives
$$D_n=D(B_n||C_n^pos)+E_{B_n}D(b_n(.|q)||ν_b^{⊗N_n}),$$
so D(B_n||C_n^pos)≤D_n by the conditional chain rule [F8]. The canonical positional density relative to full Poisson probability Q_Λn is 1_{N=N_n} exp(-bU_n,per)/Z_Q,n^pos, where Z_Q,n^pos=exp(-V_n)Z_n,N_n^pos. Integrating the log likelihood against B_n gives
$$D(B_n||Q_{\Lambda_n})+bE_{B_n}U_{n,per}=D(B_n||C_n^{pos})-\log Z_{Q,n}^{pos}\le D_n-\log Z_{Q,n}^{pos}.$$
By [F1] and [F4], V_n^-1 log Z_Q,n^pos→F_b(ρ)-1; hence the right side divided by V_n has limsup at most 1-F_b(ρ). [A1, F1, F4, F8, F11, algebra]

2.1 For every sufficiently large $n$, the periodized-image series is absolutely convergent by [F3]. Given a finite $q\subset\Lambda_{L_n}$ in the shell, form $q_M=\bigcup_{a\in\{0,\ldots,M-1\}^d}(q+L_na)$. Since $L_n$ is an integer, its unit-cell occupation pattern repeats exactly $M^d$ times. In the pair sum for $H_\phi(q_M)/M^d$, each fixed image offset $k\in\mathbb Z^d$ has multiplicity factor $\prod_{j=1}^d(1-|k_j|/M)_+$, which tends to $1$ and is bounded by $1$. For finite periodic energy, absolute convergence lets us first restrict to finitely many offsets with arbitrarily small omitted absolute tail; the factors converge on that finite set and keep the omitted tail bounded, so $H_\phi(q_M)/M^d\to U_{n,\mathrm{per}}(q)$. If any image term is $+\infty$, the desired lower bound is automatic. Applying [F2] to $q_M$, dividing by $M^d$, and taking the limit proves $U_{n,\mathrm{per}}\geq A\sum_iN_{C_i}^2-BN_n$; the same replication applied to the stability bound proves $U_{n,\mathrm{per}}\geq-B_0N_n$. On the full shell from [F7], $U_{n,\mathrm{per}}=\mathcal H_n-\sum K\leq V_n(e_b+\delta_n)$. The periodized cell bound yields $E_{B_n}\sum_iN_{C_i}^2/V_n\leq A^{-1}(e_b+\delta_n+B N_n/V_n)$, uniformly bounded. Because $L_n$ is an integer, its torus is tiled by $V_n$ unit cells; torus translation invariance makes all $E_{B_n}N_{C_i}^2$ equal, so each is bounded by the preceding sum divided by $V_n$. Cauchy–Schwarz then gives a uniform bound $E_{B_n}N_{C_i}N_{C_j}\leq C$ for every pair of cells. For the negative pair terms, each bounded-distance cell has finitely many neighboring cells and each term is bounded below by $-2B_0$ by [F2]; for remaining offsets, [F3] supplies the summable envelope $\Psi$. Hence the expected sum of negative pair magnitudes is $O(V_n)$, and so is the total negative part of $U_{n,\mathrm{per}}$. The shell upper bound on $E U_{n,\mathrm{per}}$ then gives $E_{B_n}U_{n,\mathrm{per}}^+=O(V_n)$. Since the sum of positive pair terms equals $U_{n,\mathrm{per}}$ plus the sum of negative pair magnitudes, its expectation is also $O(V_n)$. Therefore $E_{B_n}|U_{n,\mathrm{per}}|=O(V_n)$. [F1, F2, F3, F7, step 1.1, algebra]

3.1 Let $\widetilde g_n=\widetilde g(L_n)$ be the real corridor width supplied by [F3] at $L_n$, and set $g_n=\lceil\widetilde g_n\rceil$. Then $g_n\to\infty$ and $g_n/L_n\to0$, and $a_n=L_n+g_n$ is an integer. By [F11], take independent tile configurations with law $B_n$ on $\mathbb Z^d$ and independently choose a uniform phase in $[0,a_n)^d$. The map from these data to the union configuration is measurable: for each bounded Borel observation set, only finitely many tile indices can meet it, and each resulting count is a finite sum of Borel indicators of the finite cell-coordinate lists. Thus the constructed law $P_n$ is well-defined and locally finite. Translating the phase preserves its uniform law and only relabels the independent, identically distributed tiles, so $P_n$ is translation-stationary. Put $\rho_n=N_n/V_n$. Its intensity is $N_n/a_n^d=\rho_nV_n/a_n^d\to\rho$. For a fixed local-tame test $f$ supported in a bounded set $A$, choose $r$ larger than its coordinate diameter. The random phase puts $A$ wholly inside an occupied tile with probability at least $(L_n-2r)^d/a_n^d\to1$. On this event torus translation invariance of $B_n$ gives exactly its local law. For any Borel set $E\subseteq\Lambda_{L_n}$, torus invariance and the exact count $N_n$ give
$$E_{B_n}N_E=\frac1{V_n}\int_{\mathbb T_{L_n}^d}E_{B_n}N_{E+y}\,dy=\frac{N_n|E|}{V_n}.$$
The first equality uses invariance; for each fixed configuration, the integral in the numerator sums over its $N_n$ points, and each point lies in $E+y$ for a set of translations of measure $|E|$. Apply this identity to each occupied portion of $A$ on the bad phase set; gap portions contain no points. The phase-averaged expectation of $(1+N_A)$ on that set is at most its probability times $1+\rho_n|A|$. Since $|f|\leq C(1+N_A)$ and $\rho_n$ is bounded, $P_n(f)-B_n(f)\to0$. [F1, F2, F3, F7, step 2.1, construct]

4.1 Fix $n$ and a lattice phase, and restrict to a large observation cube. Its intersections with complete occupied tiles have independent laws $B_n$; its gap pieces are empty; and only $O_n(\text{surface area})$ tile intersections meet the observation boundary. The Poisson restrictions on these disjoint pieces are independent by [F10]. For each complete occupied tile, the relative entropy is $D(B_n\Vert Q_{\Lambda_{L_n}})$; restriction contraction [F8] bounds each boundary-tile contribution by this same finite value. An empty gap piece $G$ has entropy $D(\delta_{\varnothing}\Vert Q_G)=-\log Q_G(\varnothing)=|G|$. Product additivity follows by iterating the chain rule [F8]. For the mixture over the uniform phase, integrate the variational objective from [F8] for any bounded test and bound it by the phase-average conditional entropy; taking the supremum shows the mixture entropy is at most that average. Divide by observation volume and let the cube grow: the complete-tile density tends to $a_n^{-d}$, the gap-volume density to $(a_n^d-L_n^d)/a_n^d$, and the boundary contribution to zero. The specific-entropy limit exists by [F5], so
$$I(P_n)\leq\frac{D(B_n\Vert Q_{\Lambda_{L_n}})+a_n^d-L_n^d}{a_n^d}.$$
For the energy comparison, assign half of each pair term to each endpoint cell. Step 2.1 gives $E_{B_n}N_{C_i}N_{C_j}\leq C$ uniformly, a bound $O(V_n)$ on the total negative pair magnitude, and a bound $O(V_n)$ on the total positive pair sum: the latter is the total energy plus the negative pair magnitude, hence is bounded by the positive part of the total energy plus that magnitude. Fix $R>R_0$. Periodic-image pairs of torus separation at most $R$ that are absent from the finite-tile free energy $U_{L_n,\mathrm{free}}$ cross a tile face; their endpoints lie in a boundary strip of width $R+1$ containing $O(RL_n^{d-1})$ unit cells. The negative contribution per such cell is bounded by the finite number of near offsets, $\phi\geq-2B_0$ from [F2], and the pair-count bound; the expected positive contribution per cell is bounded by the total positive pair-sum estimate and torus translation invariance. Thus the expected absolute fixed-range discrepancy divided by $V_n$ is $O(R/L_n)$. For remaining pairs, [F3] bounds the expected absolute energy per volume by $C\sum_{|k|_\infty>R-c_d}\Psi(k)$, tending to zero as $R\to\infty$. Cross-tile pairs have separation at least $g_n$; the same tail bound with cutoff $g_n$ tends to zero as $g_n\to\infty$. Taking first $n\to\infty$ at fixed $R$ and then $R\to\infty$ therefore gives $\Phi(P_n)=E_{B_n}U_{n,\mathrm{per}}/a_n^d+o(1)$. Combining the entropy bound, step 1.1, and $a_n^d/V_n\to1$ gives
$$\limsup_n[I(P_n)+b\Phi(P_n)]\leq1-F_b(\rho).$$
Here the gap fraction vanishes because $g_n/L_n\to0$. [F1, F2, F3, F5, F8, F10, step 1.1, step 2.1, step 3.1, algebra]

5.1 Stability gives $\Phi(P_n)\geq-B_0\rho(P_n)$, so step 4.1 bounds $I(P_n)$. Compactness [F5] supplies a convergent subsequence from every subsequence. If $P$ is a cluster point, intensity is continuous in $\tau_L$ because the unit-cell count is a local-tame test, hence $\rho(P)=\rho$. Lower semicontinuity and step 4.1 give $I(P)+b\Phi(P)\leq1-F_b(\rho)$. Subtract $\alpha\rho$ and apply the variational lower bound and exact minimum [F6]; $P$ must attain the grand variational minimum. The singleton hypothesis forces $P=P_*$. Thus every cluster point is $P_*$, compactness gives $P_n\to P_*$, and step 3.1 gives $B_n[f]\to P_*(f)$ for every local-tame $f$. By [F9], $\bar B_n$ is stationary with intensity $N_n/V_n$, and torus invariance gives $\bar B_n(f)=B_n[f]$; therefore $\bar B_n\to P_*$ in $\tau_L$. For the exact-$N_n$ canonical law $C_n^{\rm pos}$, [F4] says its periodized empirical field $R_{L_n,\omega}$ converges in outer probability in $\tau_L$ to $P_*$. For a local-tame $f$ with $|f|\leq c(1+N_A)$, [F9] makes $X_n:=R_{L_n,\omega}(f)$ measurable and gives $|X_n|\leq c(1+N_n|A|/V_n)$, uniformly in $n$. Thus $X_n\to P_*(f)$ in probability and the variables are uniformly bounded; for each $\epsilon>0$, $|E X_n-P_*(f)|\leq\epsilon+(M+|P_*(f)|)\Pr(|X_n-P_*(f)|>\epsilon)$ for a common bound $M$, so $E X_n\to P_*(f)$. Torus translation invariance and [F9] identify $E X_n=C_n^{\rm pos}[f]$. Hence the exact-$N_n$ canonical positional local expectations also converge to $P_*$. [A1, F4, F5, F6, F9, step 3.1, step 4.1] ∎
