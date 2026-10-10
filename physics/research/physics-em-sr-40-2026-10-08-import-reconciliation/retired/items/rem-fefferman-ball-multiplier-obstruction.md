---
id: rem-fefferman-ball-multiplier-obstruction
kind: remark
title: Fefferman ball multiplier obstruction
status: published
origin: pipeline
deps:
  - def-lp-fourier-multiplier-and-multiplier-norm
  - lem-ltwo-fourier-multiplier-bound
  - def-countable-choice
landmark: false
proved_here: false
verification:
  precheck: n/a
  sources_checked:
    date: 2026-09-30
    scope: "Owner-attested statement, attribution, and cited-source check for publication."
    by: owner
provenance:
  statement: literature-derived
  proof: not-applicable
external_dependency:
  source_url: https://annals.math.princeton.edu/1971/94-2/p05
  exact_statement: "The indicator of a Euclidean ball in R^n, n>1, gives a bounded Fourier multiplier on L^p only for p=2."
  local_proof_attempt: "The L2 direction follows from Plancherel; the p not equal to 2 obstruction requires Fefferman Kakeya geometry and is not reproduced on this page."
  necessity: "Records the exact limitation of the L2 multiplier criterion as a non-load-bearing B-page leaf."
sources:
  references:
    - title: "Charles Fefferman, The multiplier problem for the ball, Annals of Mathematics 94 (1971), 330-336"
      url: https://annals.math.princeton.edu/1971/94-2/p05
      locator: "Theorem 1, printed p. 330; publisher record for Annals 94 (1971), pp. 330-336"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§3.9, Remark 3.12, printed p. 12, citing Grafakos §10.1"
---

## Remark

Assume Countable Choice for the library Fourier and $L^p$ conventions, and let
$n\ge2$. Fix a Euclidean ball $B\subseteq\mathbb R^n$ and let $\mathbf 1_B$ be
its indicator, a bounded measurable symbol. **Recorded boundary result, not
proved here:** in the usual range $1\le p<\infty$ the ball indicator is an
$L^p(\mathbb R^n)$ Fourier multiplier in the sense of
[[def-lp-fourier-multiplier-and-multiplier-norm]] **only** at $p=2$.

The $p=2$ half is elementary on this page. Since $|\mathbf 1_B|\le1$
everywhere, [[lem-ltwo-fourier-multiplier-bound]] gives the unique bounded
$L^2$ extension of the Schwartz-core multiplier with symbol $\mathbf 1_B$ and
its operator norm is exactly $1$. The case $p\ne2$ is the deep part: Fefferman
proved in Theorem 1 of *The multiplier problem for the ball* that for $n>1$
the ball multiplier is bounded on $L^p$ if and only if $p=2$. Williams records
the same statement in Remark 3.12 and refers to Grafakos §10.1 for the
argument.

This remark is a bibliographic leaf: it records the exact limitation of the
$L^2$ criterion of [[lem-ltwo-fourier-multiplier-bound]] and supplies no proof
or dependency for any later item. No Kakeya or geometric measure-theoretic
argument is reproduced here, and no $L^p$ multiplier claim other than the
recorded quotation is asserted. Countable Choice is inherited from the cited
$L^2$ multiplier interface ([[def-countable-choice]]).
