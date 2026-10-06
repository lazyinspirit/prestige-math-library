---
id: rem-cooley-tukey-factorisation-for-composite-lengths
kind: remark
title: "Mixed-radix factorisation for composite lengths (recorded, not proved here)"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
justified_by: []
aliases: []
deps: [def-recursive-radix-two-fast-fourier-transform,
       lem-radix-two-even-odd-dft-factorisation,
       thm-radix-two-fft-arithmetic-complexity]
proved_here: false
external_dependency:
  source_url: "https://www.cs.jhu.edu/~misha/ReadingSeminar/Papers/Cooley65.pdf"
  exact_statement: >-
    "Suppose N is a composite, i.e., N = r_1 r_2." Cooley and Tukey, printed
    pp. 297-298, equations (3)-(8), decompose both indices in these factor
    coordinates and derive the two-stage finite-sum Fourier evaluation. The
    item records its decimation-in-time form, in which the input is split into
    residue classes modulo R.
  local_proof_attempt: >-
    No local proof is supplied, as FR-18 assigns this row proof provenance
    not-supplied. The cited paper gives the general two-factor decomposition;
    the radix-two instance is proved in lem-radix-two-even-odd-dft-factorisation.
  necessity: >-
    Keeps the planned composite-length mixed-radix context while distinguishing
    it from the proved radix-two operation bound, which applies only to powers
    of two; no arbitrary-length complexity bound is asserted.
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§12, main text restriction to $n=2^k$ and Exercise 4 generalising to $n=3^k$ and products of small primes"
    - title: "J. W. Cooley and J. W. Tukey, An Algorithm for the Machine Calculation of Complex Fourier Series, Mathematics of Computation 19 (1965), 297-301"
      url: "https://www.cs.jhu.edu/~misha/ReadingSeminar/Papers/Cooley65.pdf"
      locator: "Printed pp. 297-298, equations (3)-(8): the general composite-length split $N=r_1r_2$ and its two-stage Fourier-sum evaluation; the full five-page paper was read."
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 4: the reduction is stated for even $n$ and iterated to powers of two"
verification:
  precheck: n/a
---

## Remark

**Recorded, not proved here.** For positive integers $R,S\ge2$ and $N=RS$, the input indices split into the $R$ residue classes modulo $R$. Cooley and Tukey, printed pp. 297–298, equations (3)–(8), give a two-stage evaluation: $R$ transforms of length $S$, followed by twiddle multiplications and $S$ transforms of length $R$. Their positive-sign convention becomes the negative-sign convention here by replacing the primitive root by its inverse; take $R=r_2$, $S=r_1$ in their index decomposition. The radix-two step of [[lem-radix-two-even-odd-dft-factorisation]] is the case $R=2$, where the length-two combines are sums and differences. Taylor §12 Exercise 4 asks for extensions to $n=3^k$ and products of small primes. For prime $N$ no nontrivial factorisation $N=RS$ exists; the bound of [[thm-radix-two-fft-arithmetic-complexity]] applies only to powers of two.

The general two-factor decomposition is recorded from Cooley and Tukey; Taylor's exercise supplies the small-prime context. No local proof or arbitrary-length complexity bound is supplied, and no item depends on this remark.
