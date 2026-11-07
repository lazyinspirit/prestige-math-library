---
id: thm-kim-appendix2-weak-ramanujan-bound-for-gln
kind: theorem
title: Kim Appendix-2 Weak Ramanujan Bound for GL(n)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - lem-kim-coefficient-growth-controls-satake-moduli
  - def-unitary-cuspidal-generic-gln-representation
  - def-symmetric-square-l-function-for-gln
  - thm-cogdell-global-same-rank-rankin-selberg-analytic-continuation-and-functional-equation
  - thm-kim-symmetric-square-l-function-analytic-continuation-and-functional-equation
  - thm-weil-bound-for-hyper-kloosterman-sums
  - thm-jacquet-shalika-archimedean-unitary-parameter-and-gamma-ratio-bound
proof_strategy: twisted-second-moment-and-zero-free-region
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "H. H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "Appendix 2, Proposition 1 and its proof, printed pp. 175–180: finite and archimedean weak Ramanujan bounds."
    - title: "J. Cogdell and I. Piatetski-Shapiro, Converse theorems for GL_n"
      url: "https://www.numdam.org/item/PMIHES_1994__79__157_0.pdf"
      locator: "Rankin–Selberg analytic properties used to establish absolute convergence in the GL(5) application; no substitute for Kim's Proposition 1 proof."
    - title: "P. Deligne, La conjecture de Weil. II"
      url: "https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf"
      locator: "Weil bounds for the hyper-Kloosterman sums used in Kim Appendix 2, proof of Proposition 1, printed pp. 313–314."
---

## Statement

Let $n\ge1$ and let $\pi$ be a unitary cuspidal automorphic representation
of $\mathrm{GL}_n(\mathbb A_{\mathbb Q})$ with normalized unramified Satake
parameters $\alpha_{1,p},\ldots,\alpha_{n,p}$ at each finite unramified
prime $p$. Suppose the Dirichlet series for
$L(s,\pi,\operatorname{Sym}^2)$ converges absolutely for
$\operatorname{Re}(s)>1$. Then at every finite unramified prime $p$,
$$
\left|\log_p|\alpha_{j,p}|\right| \le \frac12-\frac{1}{n(n+1)/2+1}\qquad(1\le j\le n).
$$
If the archimedean component is unramified with normalized parameters
$\mu_{1,\infty},\ldots,\mu_{n,\infty}$, then
$$
|\operatorname{Re}(\mu_{j,\infty})| \le \frac12-\frac{1}{n(n+1)/2+1}\qquad(1\le j\le n).
$$
For $x>0$, $\log_p x$ means $\log(x)/\log(p)$.

## Statement references

[H. H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

[J. Cogdell and I. Piatetski-Shapiro, *Converse theorems for GL_n*](https://www.numdam.org/item/PMIHES_1994__79__157_0.pdf)

[P. Deligne, *La conjecture de Weil. II*](https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf)

## Proof status

Kim's proof shifts a twisted symmetric-square Dirichlet series, uses the
functional equation and archimedean gamma ratio, bounds the character sum by
Deligne's hyper-Kloosterman estimate, and then extracts the finite and
archimedean parameter bounds. Its hypotheses include absolute convergence of
the symmetric-square series. The same-rank Rankin–Selberg continuation and
functional equation, the Kim twisted symmetric-square continuation, the
hyper-Kloosterman purity theorem, and the exact Jacquet–Shalika archimedean
estimate are declared suppliers. The first Kim continuation is still
source-scope unresolved, the hyper-Kloosterman supplier proof is not supplied,
and the exact archimedean local argument is not recovered. Therefore no proof
of this theorem is claimed, and it remains escalated.

The coefficient-to-Satake-root step is proved separately in
[[lem-kim-coefficient-growth-controls-satake-moduli]]. The analytic coefficient
growth estimate, twisted functional equation, local unitarity comparison and
archimedean averaged-nonvanishing argument remain unsupplied. The normalized
continuation repair is used only in the sufficiently-large unramified-prime
family; arbitrary imaginary norm shifts preserve the requested modulus and
real-part bounds, but their global parameter compatibility remains held.
