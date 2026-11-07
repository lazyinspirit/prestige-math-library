---
id: thm-kim-shahidi-noncuspidal-symmetric-fourth-ramanujan-bound
kind: theorem
title: Kim–Shahidi Stronger Bound in the Noncuspidal Symmetric-Fourth Case
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - thm-kim-symmetric-fourth-lift-for-cuspidal-gl2
proof_strategy: classification-and-local-bound
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "Henry H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2, Appendix 2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "Appendix 2, Proposition 2, printed p. 176: the noncuspidal symmetric-fourth alternative."
    - title: "H. H. Kim and F. Shahidi, Cuspidality of Symmetric Powers with Applications"
      url: "https://www.math.purdue.edu/~shahidi/articles/Kim%20%26%20Shahidi%20%5B2002%2C%2021pp%5D---Cuspidality%20of%20symmetric%20powers%20with%20applications.pdf"
      locator: "Theorem 3.3.7 and Proposition 4.8, printed pp. 178 and 191–192: classification of the noncuspidal symmetric-fourth case."
---

## Statement

Let $\pi$ be a cuspidal automorphic representation of
$\mathrm{GL}_2(\mathbb A_{\mathbb Q})$ and suppose its symmetric-fourth lift is
noncuspidal. For every finite prime $p$ at which $\pi_p$ is unramified, write
$\operatorname{diag}(\alpha_p,\beta_p)$ for its Satake parameter. Then the
Kim–Shahidi noncuspidal alternative gives
$$|\log_p|\alpha_p||\le\frac1{10},\qquad|\log_p|\beta_p||\le\frac1{10}.$$
No archimedean bound is asserted by this finite-place statement.
For $x>0$, $\log_p x=\log(x)/\log(p)$.

## Statement references

[Henry H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*, Appendix 2](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

[H. H. Kim and F. Shahidi, *Cuspidality of Symmetric Powers with Applications*](https://www.math.purdue.edu/~shahidi/articles/Kim%20%26%20Shahidi%20%5B2002%2C%2021pp%5D---Cuspidality%20of%20symmetric%20powers%20with%20applications.pdf)

## Proof status

Kim–Sarnak Appendix 2 states this as the sharper noncuspidal branch. The
Kim–Shahidi paper's local classification and its use of the symmetric-cube
lift are not reconstructed here; the item is retained with the exact finite
unramified scope and escalated.
