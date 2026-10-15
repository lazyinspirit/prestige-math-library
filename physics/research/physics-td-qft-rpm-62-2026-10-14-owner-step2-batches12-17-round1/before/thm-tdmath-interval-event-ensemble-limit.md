---
id: thm-tdmath-interval-event-ensemble-limit
kind: theorem
title: Interacting density-interval and upper-energy event limit
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - thm-tdmath-continuum-variational-pressure
  - lem-tdmath-closed-convex-separation
  - thm-tdmath-specific-entropy-density
  - lem-tdmath-relative-entropy-variational-and-chain-rules
  - thm-tdmath-local-tame-entropy-compactness
  - lem-tdmath-superstable-cell-energy-bound
  - def-tdmath-local-tame-topology
  - def-tdmath-periodized-empirical-field
  - lem-tdmath-integrable-tail-diagonal-gap
  - lem-tdmath-periodized-empirical-field-stationary-density
  - lem-tdmath-periodic-law-local-tame-transfer
  - thm-tdmath-retained-hard-zero-beta-limit
dependency_roles:
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  lem-tdmath-closed-convex-separation: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-tdmath-local-tame-entropy-compactness: mathematical-premise
  lem-tdmath-superstable-cell-energy-bound: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  def-tdmath-periodized-empirical-field: mathematical-premise
  lem-tdmath-integrable-tail-diagonal-gap: mathematical-premise
  lem-tdmath-periodized-empirical-field-stationary-density: mathematical-premise
  lem-tdmath-periodic-law-local-tame-transfer: mathematical-premise
  thm-tdmath-retained-hard-zero-beta-limit: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Theorem 4 and Sections 5–7, printed pp.177–195 / PDF pp.7–25: density interval with upper energy event, entropy minimizers and finite multiplier."
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Sections 3 and 5, printed pp.188–195 and 197–204: entropy upper/lower event estimates and conditional laws."
---

## Statement

Assume the superstable regular model and Poisson conventions of [[thm-tdmath-continuum-variational-pressure]], with stationary finite-intensity law space $\mathcal P^1_{\rm stat}$, intensity $\rho$, specific entropy $I$, and energy density $\Phi$ as there defined. Let $D\subset[0,\infty)$ be an interval of positive length and define
$$\nu=\sup\{\rho(P):P\in\mathcal P^1_{\rm stat},\ I(P)<\infty,\ \Phi(P)<\infty\},\qquad e_0(\rho)=\inf\{\Phi(P):P\in\mathcal P^1_{\rm stat},\ \rho(P)=\rho,\ I(P)<\infty\},$$
with the supremum of an empty set equal to $0$ and the infimum of an empty set equal to $+\infty$. If $\inf D<\nu$ and $e>\inf_{\rho\in D}e_0(\rho)$, define
$$A_L=\{N_{\Lambda_L}/L^d\in D,\ H_{L,\mathrm{per}}/L^d\leq e\}.$$
Then $A_L$ has positive Poisson probability for all sufficiently large $L$, and
$$\lim_{L\to\infty}L^{-d}\log Q_{\Lambda_L}(A_L) =-\min\{I(P):\rho(P)\in\overline D,\ \Phi(P)\leq e\}.$$
Let $R_{L,\omega}$ be the periodized empirical field of [[def-tdmath-periodized-empirical-field]], and let $B=\{x\in\mathbb R^d:\phi(x)=+\infty\}$. Define
$$\mathcal K_B=\left\{P\in\mathcal P^1_{\rm stat}:P\!\left(\left\{\omega:\forall x,y\in\omega,\ x\neq y\Rightarrow x-y\notin B\right\}\right)=1\right\}.$$
For $\beta>0$ put $\mathcal M_{\beta,z}=\operatorname*{argmin}_{P\in\mathcal P^1_{\rm stat}}\{I(P)+\beta\Phi(P)-\rho(P)\log z\}$; at $\beta=0$ put $\mathcal M_{0,z}=\operatorname*{argmin}_{P\in\mathcal K_B}\{I(P)-\rho(P)\log z\}$. Then there are $\beta\geq0$ and $z>0$ for which the empirical fields under the conditional law $Q_{\Lambda_L}(\cdot\mid A_L)$ and the matching periodic grand-canonical law concentrate in every open $\tau_L$ neighborhood of $\mathcal M_{\beta,z}$. If this minimizer set is a singleton, both empirical fields converge to it in probability in $\tau_L$. These are empirical-field conclusions. The periodically continued conditional and grand laws also converge in $\tau_L$ under the same uniqueness assumption, for all measurable local observables of at-most-linear count growth. The energy constraint is an upper event and $D$ is nondegenerate; this does not assert exact $N$, a shrinking shell, or a singular energy surface.
In the $\beta=0$ branch the finite periodic weight is explicitly $z^N$ times the indicator that no displacement between the configuration and any periodic image lies in $B$; no value is assigned to $0\cdot(+\infty)$.

## Facts & Assumptions

**Given:** A superstable regular pair potential, positive-beta finite-volume definitions or the stated retained-admissibility zero-beta continuation, a nondegenerate density interval and strict energy feasibility.

[F1] [[thm-tdmath-continuum-variational-pressure]]: $I,\Phi$ are lower semicontinuous on stationary laws, entropy levels are compact in $\tau_L$, and free/periodic pressures have the stationary variational formula.

[F2] [[thm-tdmath-local-tame-entropy-compactness]]: finite-entropy sublevels are compact and $I$ is lower semicontinuous in the local-tame topology.

[F3] [[lem-tdmath-closed-convex-separation]]: a closed convex subset of finite-dimensional Euclidean space can be separated from a point outside it.

[F4] [[thm-tdmath-specific-entropy-density]]: $I(P)$ is the large-cube limit of finite-region relative entropies against the fixed Poisson reference.

[F5] [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: finite-region entropy obeys the product chain rule and is nonnegative.

[F6] [[def-tdmath-local-tame-topology]]: $\rho(P)$ is continuous in $\tau_L$, since it is a local observable with linear count growth.

[F7] [[def-tdmath-periodized-empirical-field]] and [[lem-tdmath-periodized-empirical-field-stationary-density]]: the event configurations have stationary periodized empirical fields $R_{L,\omega}$ with the stated local-tame tests.

[F8] [[lem-tdmath-periodic-law-local-tame-transfer]]: torus-invariant laws with bounded entropy density have relatively compact periodically continued laws and uniformly integrable local counts; empirical-field convergence transfers to those laws.

[F9] [[thm-tdmath-retained-hard-zero-beta-limit]]: the retained hard-admissibility partition has the variational minimum of $I-\rho\log z$ on $\mathcal K_B$; the local proof supplies the finite-original-energy separated-block approximation used to retain the exclusion at zero beta.

[F10] [[lem-tdmath-integrable-tail-diagonal-gap]]: the decreasing integrable envelope gives $\sum_{m\geq1}m^{d-1}\psi(mg)\leq2^{d-1}g^{-d}\eta(g)$, with $\eta(g)\to0$ and diagonal gap choices whose relative width and normalized cross-energy error both vanish.

[F11] [[lem-tdmath-superstable-cell-energy-bound]]: for some $A>0$ and $B\geq0$, the free energy obeys $H\geq A\sum_iN_{C_i}^2-BN$; translation invariance gives the same bound on centered unit cells.

[L1] Georgii's published Theorem 4 (1994, Section 7, equations (2.32)–(2.33)) assumes a superstable regular pair potential, a nondegenerate density interval $D$ with $\inf D<\nu(\phi)$, and $e>\inf_{\rho\in D}\varphi(\rho)$. Its $\varphi(\rho)$ is the infimum of $\Phi(P)$ over stationary finite-entropy laws of density $\rho$, hence equals $e_0(\rho)$ here; our $\nu$ only ranges over finite-energy laws and so gives a condition at least as strong as the source's density condition. The theorem yields a finite supporting activity and a strictly positive multiplier $\beta>0$, the common variational-minimizer accumulation result, and the periodic upper-energy event exponent. It does not assert the $\beta=0$ multiplier branch or empirical-field concentration. The theorem statement and its Section 7 proof were read in the published version.

[L2] Georgii–Zessin, Theorem 3.1, gives the Poisson-reference large-deviation upper and lower bounds for stationary empirical fields in the local topology, with rate the specific relative entropy $I$. Its upper bound applies to closed sets and its proof is in Section 5.3. For the present application, $R_{L,\omega}$ is the stationary empirical field, $\rho(R_{L,\omega})=N_{\Lambda_L}/L^d$, and for finite periodic energy $\Phi(R_{L,\omega})=H_{L,\mathrm{per}}/L^d$ (Georgii 1994, equation (2.16)). These are the Poisson empirical-field bounds used for event and conditional empirical-field upper estimates; they are separate from Theorem 4's strictly positive multiplier conclusion.

[L3] Georgii's Theorem 2 (1994, Sections 3–5) gives the good local-topology large-deviation principle for the periodized empirical field under the positive-$\beta$, positive-activity periodic grand law, with rate $I+\beta\Phi-\rho\log z+p_Q(z,\beta)$ and zero set the variational minimizers. Its hypotheses include superstability and regularity and its proof was read in full.

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Define $m(\rho,e)=\inf\{I(P):\rho(P)=\rho,\Phi(P)\leq e\}$ and $s=-m$. For stationary finite-entropy laws $P,R$, the binary-mixture chain rule on a bounded cube $G$ gives $\theta D(P_G\Vert Q_G)+(1-\theta)D(R_G\Vert Q_G)=D((\theta P+(1-\theta)R)_G\Vert Q_G)+I(S;X_G)$, with $0\leq I(S;X_G)\leq H(S)<\infty$. Divide by $|G|$ and use [F4]; the label entropy vanishes, so $I$ is affine on finite mixtures. The expectation $\rho$ and finite-volume energy expectations are affine, hence their limits $\rho,\Phi$ are affine where finite. Mixtures of feasible laws show $m$ is convex and $s$ concave. If $(\rho_n,e_n)\to(\rho,e)$ and $\liminf m(\rho_n,e_n)<\infty$, choose near-minimizers with bounded $I$. Compactness [F2] gives a convergent subsequence; continuity of $\rho$ by [F6] and lower semicontinuity of $\Phi,I$ in [F1] show the limit is feasible with entropy no greater than the liminf. Thus $m$ is lower semicontinuous and $s$ upper semicontinuous; the same compactness argument attains every finite infimum. For strict feasibility, choose $\rho_1$ in the interior of $D$ below $\nu(\phi)$ with a finite-energy, finite-entropy law $R$. The inequality $e>\inf_{\rho\in D}e_0(\rho)$ gives $\rho_2\in D$ and a finite-entropy law $P$ with $\Phi(P)<e$. If $\rho_2$ is at an endpoint of $D$, mix $P$ with a sufficiently small positive amount of $R$; affinity of $\rho,\Phi,I$ keeps the energy below $e$ and moves the density into the interior of $D$. [F1, F2, F4, F5, F6, algebra]

2.1 For the lower event bound, take a stationary law $P$ with $I(P)<\infty$, $\rho(P)\in D^\circ$, and $\Phi(P)<e$. The cell inequality [F11], stationarity, and $E_PH_{\ell,\mathrm{free}}/\ell^d\to\Phi(P)$ imply a uniform bound on $E_P[T_\ell/\ell^d]$ for large integer $\ell$, hence on $E_P[(N_{\Lambda_\ell}/\ell^d)^2]$. They also give a uniform bound $C$ on $E_P[H_{\ell,\mathrm{free}}^+]/\ell^d$, since the negative part is at most $BN$. Choose $M_j\uparrow\infty$ with $C/M_j\to0$. For each sufficiently large $\ell_j$, let $E_j=\{H_{\ell_j,\mathrm{free}}\leq M_j\ell_j^d\}$ and $p_j=P(E_j)$. Markov's inequality gives $p_j\geq1-C/M_j$. On $E_j$, the cell inequality and $N^2/\ell_j^d\leq T_{\ell_j}$ give $N/\ell_j^d\leq K_j$, where $K_j$ is the positive root bound for $Ax^2-Bx\leq M_j$. The count-density loss under conditioning tends to zero by Cauchy–Schwarz and the uniform second-moment bound. The conditional expected energy density has limsup at most $\Phi(P)$ because the removed energy is positive. The entropy conditioning formula gives $D(P_{\Lambda_{\ell_j}}(\cdot\mid E_j)\Vert Q_{\Lambda_{\ell_j}})\leq\bigl(D(P_{\Lambda_{\ell_j}}\Vert Q_{\Lambda_{\ell_j}})+1/\mathrm e_{\rm E}\bigr)/p_j-\log p_j$, where $\mathrm e_{\rm E}$ is Euler's number, so the conditioned block entropy per volume is at most $I(P)+o(1)$. Choose $g_j>2R_0$ with $\eta(g_j)\leq(j^{d+1}K_j^2)^{-1}$ and set $\ell_j=jg_j$, increasing $g_j$ further so $\ell_j$ is large enough for the specific entropy and energy limits above. Then $g_j/\ell_j=1/j\to0$ and $p_j\to1$. In a large periodic cube of side $L$, put $m_L=\lfloor L/(\ell_j+g_j)\rfloor$ cores per coordinate, each of side $\ell_j$, on a periodic grid of exact spacing $a_{L,j}=L/m_L\geq\ell_j+g_j$. Thus every core is separated from every other core and its periodic images by at least $g_j$, and the unoccupied fraction tends to $1-(\ell_j/(\ell_j+g_j))^d$. Put independent conditioned blocks in the cores and leave the complement empty. For two core indices at maximum-norm distance $m\geq1$, the total absolute cross energy per core is at most $C_dK_j^2\ell_j^{2d}\sum_{m\geq1}m^{d-1}\psi(mg_j)$, so its contribution per unit volume is at most $C'_dK_j^2(\ell_j/g_j)^d\eta(g_j)\leq C'_d/j$ by [F10], including the periodic image interactions across the outer boundary. The iid law of core counts and core energies gives the required density and within-core energy laws of large numbers; since the cross-energy error is uniformly bounded by $C'_d/j$, for large fixed $j$ the product block law assigns probability tending to one to $A_L$ as $L\to\infty$, with density in $D$ and energy below $e$ by strict margins. Relative to the Poisson reference on $\Lambda_L$, the product block law has log density equal to the sum of the iid block log densities plus the corridor volume (the Poisson void cost). The block log density is integrable because its relative entropy is finite; truncation followed by the ordinary weak law gives its average limit. Therefore its typical log density per volume is at most $I(P)+o_j(1)$ as $j\to\infty$. On the intersection of $A_L$ with this typical set, changing measure back to $Q_{\Lambda_L}$ gives $Q_{\Lambda_L}(A_L)\geq\exp[-L^d(I(P)+o_j(1)+o_L(1))]$. If a minimizing law lies on a constraint boundary, mix it with a strict feasible law; entropy affinity and lower semicontinuity show that the entropy infimum is unchanged. This proves the lower event bound and eventual positivity. [F1, F2, F4, F5, F6, F10, F11, step 1.1, algebra]

3.1 Put $K=\{P\in\mathcal P^1_{\rm stat}:\rho(P)\in\overline D,\ \Phi(P)\leq e\}$. The set is closed by [F1], lower semicontinuity of $\Phi$, and continuity of $\rho$ in $\tau_L$. For every configuration with finite $H_{L,\mathrm{per}}$, the periodized empirical field satisfies $\rho(R_{L,\omega})=N_{\Lambda_L}/L^d$ by [F7] and $\Phi(R_{L,\omega})=H_{L,\mathrm{per}}/L^d$ by Georgii's periodic-energy identity (1994, equation (2.16)); hence $A_L\subseteq\{R_{L,\omega}\in K\}$. The Poisson empirical-field upper bound of [L2], applied to this closed set, gives $$\limsup_{L\to\infty}L^{-d}\log Q_{\Lambda_L}(A_L)\leq-\inf_{P\in K}I(P)=-m,$$ where $m$ is the minimum in the Statement. Together with step 2.1 this proves the event exponent. The exact periodic empirical field accounts for all long-range image interactions in this upper bound; no fixed empty corridor is used to discard them. [F1, F2, F7, L2, step 2.1, algebra]

4.1 The tangent-plane argument in published [L1] separates the strict-feasibility constraint set in finite dimension [F3]. It supplies a finite $\alpha=\log z$ and a strictly positive coefficient $\beta>0$, so the constrained entropy minimizers lie in the positive-beta grand variational minimizer set. No zero-beta conclusion is attributed to [L1]. For the local horizontal-support case, write $m_* =m(D,e)$ and let $(\rho_*,u_*)$ be a contact point. A supporting plane with energy coefficient $\beta=0$ gives $-m(\rho,u)\leq-m_*-\alpha(\rho-\rho_*)$ for every finite-energy pair $(\rho,u)$; equivalently, every stationary finite-energy law satisfies $I(P)-\alpha\rho(P)\geq m_*-\alpha\rho_*$. Equality holds at the constrained minimizers in contact. Any law in $\mathcal K_B$ with finite $I$ is approximated in $\tau_L$ and density by finite-energy separated-block laws $P_j$ with $\limsup_j I(P_j)\leq I(P)$, as constructed in [F9]. Passing the inequality to the limit shows it holds on all of $\mathcal K_B$; equality at a constrained minimizer identifies the same global minimum there. The finite-volume zero-beta weight remains $z^N\mathbf1_{\rm admissible}$ throughout. [F1, F3, F9, L1, step 1.1, step 3.1, algebra]

5.1 Let $U$ be an open $\tau_L$ neighborhood of the common grand minimizer set and put $K_U=K\cap U^c$, with $K$ as in step 3.1. The constrained entropy minimum on $K_U$ is strictly larger than $m$: otherwise a sequence with $I\downarrow m$ lies in a compact entropy sublevel [F2], and a limit in the closed set $K_U$ would be a constrained minimizer outside $U$. By [L2],
$$\limsup_{L\to\infty}L^{-d}\log Q_{\Lambda_L}\{R_{L,\omega}\in K_U\}\leq-\inf_{P\in K_U}I(P)<-m.$$
Since $A_L\cap\{R_{L,\omega}\notin U\}\subseteq\{R_{L,\omega}\in K_U\}$, divide this exponential upper bound by the event probability from step 3.1. The conditional empirical fields therefore concentrate in $U$.

For the positive-beta periodic grand law, [L3] gives concentration outside every neighborhood of its zero set, the grand minimizer set. For the retained zero-beta grand law, write its numerator as the Poisson integral of $e^{\alpha N}\mathbf1_{\{R\in\mathcal K_B\cap U^c\}}$ and its denominator as the retained-hard partition. Apply [L2] to the closed set $\mathcal K_B\cap U^c$ with the continuous linear term $-\alpha\rho$; [F9] supplies the denominator rate $-\min_{\mathcal K_B}(I-\alpha\rho)$. Compact entropy levels give a strict gap outside $U$ when the minimizer set is contained in $U$. Thus the zero-beta grand empirical field also concentrates in $U$, using [F9] rather than extending the strictly-positive-beta source theorem. A singleton minimizer gives convergence in probability in both branches. [F1, F2, F5, F6, F7, F9, L2, L3, step 3.1, step 4.1]

6.1 The conditional law is torus-invariant and its entropy density is $-L^{-d}\log Q_L(A_L)$, which is bounded by the event limit. The matching grand law is torus-invariant as well. At positive beta its entropy density is bounded by the pressure identity, the superstable lower energy bound, and the Poisson entropy count inequality; at zero beta use the same identity with the hard indicator and omit the energy term. Consequently [F8] applies. Its transfer result converts step 5.1 into convergence of the periodically continued laws for every local tame observable under uniqueness. No zero extension outside the fundamental cube is used. [F1, F5, F8, step 3.1, step 5.1, algebra] ∎
