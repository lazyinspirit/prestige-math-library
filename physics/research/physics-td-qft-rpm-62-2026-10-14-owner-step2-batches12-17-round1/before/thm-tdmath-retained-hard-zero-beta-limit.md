---
id: thm-tdmath-retained-hard-zero-beta-limit
kind: theorem
title: Zero-inverse-temperature-parameter limit with forbidden pairs retained
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - def-tdmath-superstable-regular-interaction
  - lem-tdmath-superstable-cell-energy-bound
  - thm-tdmath-continuum-variational-pressure
  - thm-tdmath-local-tame-entropy-compactness
  - def-tdmath-local-tame-topology
  - lem-tdmath-relative-entropy-variational-and-chain-rules
  - thm-tdmath-spatial-mean-information
  - thm-tdmath-poisson-reference-count-properties
  - thm-monotone-convergence-for-the-integral
  - lem-tdmath-periodic-law-local-tame-transfer
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
  lem-tdmath-superstable-cell-energy-bound: mathematical-premise
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  thm-tdmath-local-tame-entropy-compactness: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-tdmath-spatial-mean-information: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  lem-tdmath-periodic-law-local-tame-transfer: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Section 2 finite-volume Gibbs weights for potentials taking +infinity, printed pp.172–174 / PDF pp.2–4. The explicitly retained-admissibility zero-inverse-temperature branch and its local entropy argument are developed here; the published Theorem 4 assumes a strictly positive multiplier and is not extended here."
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Sections 2.3, 3, and 5: Poisson-reference entropy, compactness and block comparisons used in the local proof."
---

## Statement

Let $\phi$ be superstable and regular as in [[def-tdmath-superstable-regular-interaction]], and let $B=\{x:\phi(x)=+\infty\}$. For a finite configuration $\omega$, call it admissible when no pair displacement belongs to $B$; for periodic boxes require this also for every periodic image pair. Define the zero-inverse-temperature-parameter continuation (the mathematical $\beta=0$ branch) to be $z^{N(\omega)}\mathbf 1_{\rm admissible}(\omega)$, explicitly retaining the hard exclusion. Then the normalized Poisson free and periodic partition rates exist and equal
$$-\min_{P\in\mathcal K_B}\{I(P)-\rho(P)\log z\},$$
where $\mathcal K_B$ is the set of stationary laws with no forbidden pair almost surely. The minimizer set is nonempty and compact in $\tau_L$. The periodically continued grand laws are relatively compact in $\tau_L$, all their accumulation points are minimizers, and if this minimizer is unique they converge to it for every measurable local observable of at-most-linear count growth. If $B=\varnothing$, this is the Poisson activity-$z$ model. For $B\ne\varnothing$, it is not an unrestricted Poisson law and does not assign a value to the undefined product $0\cdot(+\infty)$.

## Facts & Assumptions

**Given:** Superstability and regularity, $z>0$, the unit-intensity Poisson reference, and the explicitly defined hard-admissibility beta-zero weight.

[F1] [[def-tdmath-superstable-regular-interaction]]: the interaction is an even measurable superstable pair potential with a decreasing integrable two-sided far-tail envelope, and its normalized Poisson partition uses $1/N!$.

[F2] [[thm-tdmath-local-tame-entropy-compactness]]: stationary laws with bounded Poisson specific entropy are compact in $\tau_L$; $I$ is lower semicontinuous.

[F3] [[thm-tdmath-spatial-mean-information]]: for stationary laws ergodic under all translations and with finite specific entropy, normalized finite-volume log likelihoods converge in probability to $I(P)$.


[F4] [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: for bounded $f$, $D(P\Vert Q)\geq E_Pf-\log E_Qe^f$, and relative entropy has the conditional chain rule and is nonnegative.

[F5] [[thm-tdmath-continuum-variational-pressure]]: for positive inverse temperature the stationary entropy-energy functional has compact sublevels, its free and periodic pressures agree, and finite-energy stationary laws admit separated-block approximation with the stated entropy and local-tame controls.

[F6] [[def-tdmath-local-tame-topology]]: $\tau_L$ tests every measurable local observable bounded by a constant times $1+N_A$.

[F7] [[thm-tdmath-poisson-reference-count-properties]] and [[thm-monotone-convergence-for-the-integral]]: the unit-cube Poisson count has exponential moment $E_Qe^{aN_C}=e^{e^a-1}$, and bounded truncations increase to this count test.

[F8] [[lem-tdmath-periodic-law-local-tame-transfer]]: torus-invariant finite-volume laws with bounded entropy density have relatively compact continued laws, uniformly integrable local counts, and limit entropy bounded by the limiting finite-volume entropy density.

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Regularity bounds $\phi$ above outside a bounded set, so $B$ is bounded. Define $\chi=+\infty$ on $B$ and $0$ elsewhere. Then $\chi$ is even, stable with constant $0$, and has zero far tail. Its finite-volume beta-zero partition is exactly the specified hard-admissibility partition. [given, F1, algebra]

1.2 For each bounded region $A$, the event that $A$ contains a forbidden pair is a bounded measurable local event. Its probability is continuous under $\tau_L$ by [F6]. Exhausting space by countably many bounded cubes shows that $\mathcal K_B$ is $\tau_L$-closed. Apply [F4] to the bounded tests $f_M=a\min(N_C,M)$ and let $M\to\infty$. Monotone convergence and [F7] give $I(P)\geq a\rho(P)-(e^a-1)$, hence $\rho(P)\leq(I(P)+e^a-1)/a$. Choosing $a>2\max(\log z,0)$ makes $I(P)-\rho(P)\log z$ coercive in $I(P)$. By [F2], every finite sublevel is compact and lower semicontinuous, so the infimum on $\mathcal K_B$ is attained whenever the admissible class is nonempty. The empty configuration law gives a finite candidate. [F2, F4, F6, F7, algebra]

1.3 Fix $P\in\mathcal K_B$ with $I(P)<\infty$. Condition its restriction to a cube of side $n$ on configurations whose distinct points have separation at least $1/q$ and whose finite pair energies are at most $q$. As $q\to\infty$, these events increase to probability one because configurations are locally finite, simple, and hard-admissible. Choose $q=q(n)$ so the conditioning probability tends to one. Tile space by these conditioned blocks separated by an empty corridor wider than the range of $B$ and the fixed tail cutoff, take independent copies, then average the lattice phase uniformly. No cross-block pair is forbidden. The conditional entropy inequality $$ D(P(\cdot\mid E)\Vert Q)\leq [D(P\Vert Q)+1]/P(E)-\log P(E) $$ follows by expanding the conditional density $1_E(dP/dQ)/P(E)$ and using $-u\log u\leq1/e$. Additivity on independent blocks and the vanishing corridor fraction give $\limsup I(P_n)\leq I(P)$; local count truncation and finite first moments give $P_n\to P$ in $\tau_L$. Each $P_n$ has finite original energy density. [F1, F2, F4, F5, algebra]

2.1 For a finite-volume beta-zero Gibbs law $G_L^b$, direct integration of its density gives $$ -\log Z_{Q,L}=D(G_L^b\Vert Q_L)-(\log z)E_{G_L^b}N_L. $$ Stationarize independent blocks and average their phase. The entropy chain rule bounds the resulting specific entropy by the displayed finite-volume entropy per volume; hard admissibility passes to every local limit. Compactness [F2], lower semicontinuity, and the entropy identity therefore give the pressure upper bound by the negative minimum in the statement. For the reverse bound, use the approximating finite-energy laws from step 1.3. Their independent separated blocks are admissible; the spatial likelihood theorem [F3] supplies typical blocks with likelihood cost $I(P_n)$, while empirical counts converge to $\rho(P_n)$. Changing from Poisson measure to the beta-zero weight gives the lower rate $-I(P_n)+\rho(P_n)\log z$. Let $n\to\infty$ and optimize over $P$. Corridors change the normalized log weight by their vanishing volume fraction, so free and periodic rates agree. [F2, F3, F5, step 1.3, algebra]

3.1 Put $\alpha=\log z$, $p_L=L^{-d}\log Z_{Q,L}$, and $d_L=L^{-d}D(G_L^{\rm per}\Vert Q_L)$. The exact identity in step 2.1 reads $d_L=\alpha\rho_L-p_L$. For $a>\max(\alpha,0)$, the entropy count inequality gives $d_L\geq a\rho_L-(e^a-1)$; the convergent pressure rates therefore bound both $\rho_L$ and $d_L$. The grand density and periodic hard-admissibility condition are invariant under translations modulo the box, so [F8] gives relatively compact continued laws. Every limit $P$ lies in $\mathcal K_B$ by the bounded local forbidden-pair tests from step 1.2. Along a subsequence realizing the entropy liminf, [F8] and count-tail uniformity give
$$I(P)-\alpha\rho(P)\leq\liminf(d_L-\alpha\rho_L)=-\lim p_L=\min_{\mathcal K_B}(I-\alpha\rho).$$
The opposite inequality is the definition of the minimum. Thus every accumulation point is a minimizer. If there is just one, relative compactness forces convergence of the entire sequence in $\tau_L$, including every stated tame test. [F2, F4, F6, F7, F8, step 1.2, step 2.1, algebra] ∎
