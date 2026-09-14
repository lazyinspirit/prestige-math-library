---
id: thm-existence-of-continuous-brownian-motion
kind: theorem
title: "Existence of continuous Brownian motion"
status: published
origin: pipeline
deps: [thm-kolmogorov-construction-of-the-canonical-gaussian-process, lem-gaussian-even-moment-bound-for-brownian-increments, thm-kolmogorov-continuity-criterion-one-parameter, lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments, def-brownian-motion, thm-euclidean-space-complete, def-separable-space, thm-rationals-countable, lem-rat-embeds-dense, thm-finite-and-countable-subadditivity-of-measures, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, Section 7.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Section 6.2"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement

Assume the Axiom of Choice. The canonical centered Gaussian coordinate process
with covariance $E[X_sX_t]=\min(s,t)$ has a continuous modification $B$, and
$B$ is a standard Brownian motion. In particular, standard Brownian motion
exists.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[F1] Under AC, the consistent Brownian Gaussian finite-dimensional laws define
a canonical coordinate process $X$ with mean zero and covariance $\min(s,t)$.
[[thm-kolmogorov-construction-of-the-canonical-gaussian-process]]

[F2] A normal increment of variance $|t-s|$ has fourth moment
$3|t-s|^2$. [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] The one-parameter continuity criterion turns the corresponding moment
bound into a continuous modification. It uses no choice once its constants are
supplied. [[thm-kolmogorov-continuity-criterion-one-parameter]]

[F4] For a real process starting at zero, centered Gaussian covariance
$\min(s,t)$ is equivalent to independent stationary normal increments.
[[lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments]]

[F5] Brownian motion consists of the initial condition, those increments, and
one probability-one continuity event. [[def-brownian-motion]]

[F6] The real line is complete; its embedded rationals are countable and dense,
so it is separable. [[thm-euclidean-space-complete]] [[def-separable-space]]
[[thm-rationals-countable]] [[lem-rat-embeds-dense]]

[F7] A finite union of null events is null.
[[thm-finite-and-countable-subadditivity-of-measures]]

[F8] AC is available for the Gaussian-law and Kolmogorov-extension suppliers.
[[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 By [F1], on the canonical coordinate probability space there is a centered Gaussian process $X$ with covariance $\min(s,t)$. In particular $X_0=0$ almost surely, and [F4] gives $X_t-X_s\sim N(0,|t-s|)$ for all $s,t\ge0$. [given, F1, F4]

2.1 By [F2] with $m=2$, $$E|X_t-X_s|^4=3|t-s|^2.$$ By [F6], the real target is complete and separable. Thus [F3], with $\alpha=4$, $\beta=1$, and the supplied constants $C_T=3$, gives a modification $B$ of $X$ and one probability-one event on which every path of $B$ is continuous. [step 1.1, F2, F3, F6]

3.1 Fix a finite time list $t_1,\ldots,t_n$. Since $B$ is a modification, each event $\{B_{t_j}\ne X_{t_j}\}$ is null; [F7] makes their finite union null. Hence the two evaluation vectors agree almost surely and have the same law. This includes the empty list, for which both laws are the unit mass on the empty tuple. Consequently all finite-dimensional laws of $B$ equal those of $X$, so $B$ is centered Gaussian with covariance $\min(s,t)$ and $B_0=0$ almost surely. [step 1.1, step 2.1, F7]

4.1 Apply [F4] to $B$: it has the independent $N(0,t_j-t_{j-1})$ increments on every finite increasing list. Together with $B_0=0$ from step 3.1 and the common continuity event from step 2.1, [F5] says that $B$ is standard Brownian motion. AC is used through [F1], [F2], [F4], and [F5] for normal-law construction and the arbitrary-index extension; the continuity construction [F3] adds no choice. [step 2.1, step 3.1, F1, F2, F3, F4, F5, F8] ∎

## Source notes

Durrett, printed pp. 355–358, constructs the canonical Gaussian process and
then repairs its paths by the continuity theorem. Sousi, Section 6.2, follows
the same route. Step 3.1 records the finite-union argument needed to preserve
finite-dimensional laws under modification.
