---
id: ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial
kind: example
title: "$\\Phi_7(t+1)$ is Eisenstein at seven"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate, thm-eisenstein-irreducibility-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Example 2.2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Lemma 1.42"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

The translated seventh cyclotomic polynomial is

$$\Phi_7(t+1)=t^{6}+7t^{5}+21t^{4}+35t^{3}+35t^{2}+21t+7.$$

Its leading coefficient is $1$, every other coefficient is divisible by $7$, and
its constant term $7$ is not divisible by $7^{2}$. So it satisfies Eisenstein's
criterion at the prime $7$, and therefore $\Phi_7$ is irreducible over
$\mathbb Q$.

## Facts & Assumptions

**Given:** The prime-power cyclotomic formula and the polynomial $\Phi_7$.

[L1] For a prime $p$ and $r \ge 1$, $$\Phi_{p^{r}}(t)=\sum_{k=0}^{p-1}t^{kp^{r-1}},$$ and $\Phi_{p^{r}}(t+1)$ is Eisenstein at $p$ ([[prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate]]).

[L2] Eisenstein's criterion: if a prime $p$ divides every non-leading coefficient of a polynomial in $\mathbb Z[t]$, does not divide the leading coefficient, and $p^2$ does not divide the constant term, then the polynomial is irreducible over $\mathbb Q$ ([[thm-eisenstein-irreducibility-criterion]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] at $p=7$ and $r=1$ gives $\Phi_7(t)=1+t+t^{2}+t^{3}+t^{4}+t^{5}+t^{6}$. [L1]

2.1 Therefore $$\Phi_7(t+1)=\frac{(t+1)^{7}-1}{t}=t^{6}+7t^{5}+21t^{4}+35t^{3}+35t^{2}+21t+7,$$ by the binomial theorem. [step 1.1, algebra]

3.1 In the polynomial of step 2.1 the leading coefficient is $1$, the remaining coefficients $7,21,35,35,21,7$ are all divisible by $7$, and the constant term $7$ is not divisible by $49$; so [L2] applies at the prime $7$. [step 2.1, L2, algebra]

4.1 Hence $\Phi_7(t+1)$ is irreducible over $\mathbb Q$, and this is exactly the degree-one prime-power case of [L1]. [step 3.1, L1] ∎

## Remarks

- **Why this example matters later.** The explicit coefficients are what the counterexample page uses when it says the Eisenstein route already proves irreducibility for prime-power cyclotomic polynomials before the general Dedekind argument is built.
