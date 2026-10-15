---
id: thm-tdmath-interval-event-ensemble-limit
kind: theorem
title: Interacting density-interval and upper-energy event limit
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - thm-tdmath-continuum-variational-pressure
  - lem-tdmath-closed-convex-separation
  - thm-tdmath-specific-entropy-density
  - lem-tdmath-relative-entropy-variational-and-chain-rules
  - thm-tdmath-local-tame-entropy-compactness
  - def-tdmath-local-tame-topology
  - def-tdmath-periodized-empirical-field
  - lem-tdmath-periodized-empirical-field-stationary-density
dependency_roles:
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  lem-tdmath-closed-convex-separation: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-tdmath-local-tame-entropy-compactness: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  def-tdmath-periodized-empirical-field: mathematical-premise
  lem-tdmath-periodized-empirical-field-stationary-density: mathematical-premise
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

Assume the superstable regular model and Poisson conventions of [[thm-tdmath-continuum-variational-pressure]]. Let $D\subset[0,\infty)$ be an interval of positive length, let $\nu$ be the supremum of finite-entropy, finite-energy attainable densities, and set $e_0(\rho)=\inf\{\Phi(P):\rho(P)=\rho,\ I(P)<\infty\}$. If $\inf D<\nu$ and $e>\inf_{\rho\in D}e_0(\rho)$, define
$$A_L=\{N_{\Lambda_L}/L^d\in D,\ H_{L,\mathrm{per}}/L^d\leq e\}.$$
Then $A_L$ has positive Poisson probability for all sufficiently large $L$, and
$$\lim_{L\to\infty}L^{-d}\log Q_{\Lambda_L}(A_L) =-\min\{I(P):\rho(P)\in\overline D,\ \Phi(P)\leq e\}.$$
Let $R_{L,\omega}$ be the periodized empirical field of [[def-tdmath-periodized-empirical-field]]. There are $\beta>0$ and $z>0$ such that the empirical fields under the conditional law $Q_{\Lambda_L}(\cdot\mid A_L)$ and the matching periodic grand-canonical law concentrate in every open $\tau_L$ neighborhood of the common minimizer set of $I+\beta\Phi-\rho\log z$. If this minimizer is unique, both empirical fields converge to it in probability in $\tau_L$. These are spatially averaged local conclusions. The energy constraint is an upper event and $D$ is nondegenerate; this does not assert exact $N$, a shrinking shell, or a singular energy surface.

## Facts & Assumptions

**Given:** A superstable regular pair potential, $\beta>0$ finite-volume definitions, a nondegenerate density interval and strict energy feasibility.

[F1] [[thm-tdmath-continuum-variational-pressure]]: $I,\Phi$ are lower semicontinuous on stationary laws, entropy levels are compact in $\tau_L$, and free/periodic pressures have the stationary variational formula.

[F2] [[thm-tdmath-local-tame-entropy-compactness]]: finite-entropy sublevels are compact and $I$ is lower semicontinuous in the local-tame topology.

[F3] [[lem-tdmath-closed-convex-separation]]: a closed convex subset of finite-dimensional Euclidean space can be separated from a point outside it.

[F4] [[thm-tdmath-specific-entropy-density]]: $I(P)$ is the large-cube limit of finite-region relative entropies against the fixed Poisson reference.

[F5] [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: finite-region entropy obeys the product chain rule and is nonnegative.

[F6] [[def-tdmath-local-tame-topology]]: $\rho(P)$ is continuous in $\tau_L$, since it is a local observable with linear count growth.

[F7] [[def-tdmath-periodized-empirical-field]] and [[lem-tdmath-periodized-empirical-field-stationary-density]]: the event configurations have stationary periodized empirical fields $R_{L,\omega}$ with the stated local-tame tests.

[L1] Georgii's Theorem 4 (1994, Section 7, equation (2.32) and probability formula (2.33)) states the common variational-minimizer and event-exponent result for a superstable regular pair potential, a nondegenerate density interval $D$ with $\inf D<\nu(\phi)$, and $e>\inf\varphi(D)$, using the periodic upper-energy event. The complete proof in Section 7 was read; the local items provide the exact entropy, compactness and beta-zero convention interfaces.

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Define $m(\rho,e)=\inf\{I(P):\rho(P)=\rho,\Phi(P)\leq e\}$ and $s=-m$. For stationary finite-entropy laws $P,R$, the binary-mixture chain rule on a bounded cube $G$ gives $\theta D(P_G\Vert Q_G)+(1-\theta)D(R_G\Vert Q_G)=D((\theta P+(1-\theta)R)_G\Vert Q_G)+I(S;X_G)$, with $0\leq I(S;X_G)\leq H(S)<\infty$. Divide by $|G|$ and use [F4]; the label entropy vanishes, so $I$ is affine on finite mixtures. The expectation $\rho$ and finite-volume energy expectations are affine, hence their limits $\rho,\Phi$ are affine where finite. Mixtures of feasible laws show $m$ is convex and $s$ concave. If $(\rho_n,e_n)\to(\rho,e)$ and $\liminf m(\rho_n,e_n)<\infty$, choose near-minimizers with bounded $I$. Compactness [F2] gives a convergent subsequence; continuity of $\rho$ by [F6] and lower semicontinuity of $\Phi,I$ in [F1] show the limit is feasible with entropy no greater than the liminf. Thus $m$ is lower semicontinuous and $s$ upper semicontinuous; the same compactness argument attains every finite infimum. For strict feasibility, choose $\rho_1$ in the interior of $D$ below $\nu(\phi)$ with a finite-energy, finite-entropy law $R$. The inequality $e>\inf_{\rho\in D}e_0(\rho)$ gives $\rho_2\in D$ and a finite-entropy law $P$ with $\Phi(P)<e$. If $\rho_2$ is at an endpoint of $D$, mix $P$ with a sufficiently small positive amount of $R$; affinity of $\rho,\Phi,I$ keeps the energy below $e$ and moves the density into the interior of $D$. [F1, F2, F4, F5, F6, algebra]

2.1 For the lower event bound, take a feasible stationary law with strict density and energy inequalities. Approximate it by separated independent blocks: condition each block on a finite-energy, bounded-count event of probability tending to one, separate blocks by a fixed empty corridor, and average the phase. Its entropy per volume tends to $I(P)$; its empirical density and energy converge to $\rho(P)$ and $\Phi(P)$. The spatial likelihood theorem gives Poisson probability at least $\exp[-L^d(I(P)+o(1))]$ for the joint typical event, which lies in $A_L$. If a minimizing law lies on a constraint boundary, mix it with the strict feasible law. The mixture remains feasible for sufficiently small mixing weight and its entropy tends to the boundary law's entropy by the entropy affinity established in step 1.1 and lower semicontinuity. Thus the open strict event and the closed event have the same entropy infimum. [F1, F2, F4, step 1.1, algebra]

3.1 For the upper event bound, let $G_L=Q_{\Lambda_L}(\cdot\mid A_L)$. Its exact entropy is $D(G_L\Vert Q_{\Lambda_L})=-\log Q_{\Lambda_L}(A_L)$. Form the auxiliary stationary law by placing independent copies of $G_L$ in disjoint blocks, leaving a fixed empty corridor, and averaging the block phase. The independent-increment Poisson entropy chain rule bounds this auxiliary law's specific entropy by the displayed finite-volume entropy per volume. Its local limits preserve the closed density and energy constraints by lower semicontinuity of $I$ and $\Phi$, giving the rate upper bound by $m$. The matching lower bound follows from step 2.1. This auxiliary block law is used only for the event exponent. [F1, F2, F5, F6, L1, step 2.1, algebra]

4.1 Let $P$ be a constrained entropy minimizer. Georgii's Theorem 4 [L1] applies with $e_0(\rho)=\inf\{\Phi(P):\rho(P)=\rho,\ I(P)<\infty\}$ and $\nu(\phi)$ the same finite-entropy, finite-energy density supremum. Its Section 7 proof separates the strict-feasibility constraint set in finite dimension [F3]; the strict feasible law from step 1.1 makes the objective multiplier nonzero, so normalization yields $\beta>0$ and finite $\alpha=\log z$ with $P$ minimizing $I+\beta\Phi-\alpha\rho$. This is the exact source conclusion, not an assumed exposed density. The grand variational principle [F1] identifies these constrained minimizers with grand pressure minimizers. By [L1], the conditional and grand empirical fields concentrate on their common minimizer set; the fields are the stationary laws in [F7]. If the minimizer is unique, both converge to it in probability in $\tau_L$. [F1, F3, F7, L1, step 1.1, step 3.1] ∎
