---
id: thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model
kind: theorem
title: "A local Householder backward-error bound yields a backward-stable QR factorisation"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts, def-standard-relative-floating-point-model-and-unit-roundoff, lem-product-of-one-plus-deltas-gives-theta-n, thm-floating-point-dot-product-componentwise-and-normwise-error-bounds, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
aliases: []
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 3.4"
      url: "https://fncbook.com/house/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Least squares and QR"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html"
---

## Statement

Let $A\in M_{m\times n}(\mathbb R)$ with $m\ge n$. Assume Householder QR is
executed in the standard relative floating-point model with unit roundoff $u$
and $mu<1$. Suppose that at each step $k=0,\ldots,n-1$ the computed reflector
$\widehat H_k$ is orthogonal and its action on the active trailing block is
exact for one perturbation $E_k$ satisfying
$$\widehat H_k(A^{(k)}+E_k)=A^{(k+1)},\qquad \|E_k\|_F\le 3\gamma_m\|A^{(k)}\|_F,$$
where $A^{(0)}=A$ and $\gamma_m=mu/(1-mu)$. Then the computed factors
$\widehat Q,\widehat R$ satisfy

$$A+\Delta A=\widehat Q\widehat R$$
for some matrix $\Delta A$ with
$$\|\Delta A\|_F\le \bigl((1+3\gamma_m)^n-1\bigr)\|A\|_F,$$

In particular, under the displayed local-step bound the algorithm is backward stable:
the computed factorisation is exact for a nearby matrix whose relative
Frobenius perturbation is $O(u)$.

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(\mathbb R)$ with $m\ge n$, unit
roundoff $u$ with $mu<1$, and computed orthogonal Householder reflectors
$\widehat H_k$ satisfying the local-step identities and bounds in the
statement.

[L1] Successive Householder reflectors produce QR by applying orthogonal transformations to shrinking trailing blocks ([[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]]).

[L2] The quantity $\gamma_m=mu/(1-mu)$ is the standard accumulated relative
error factor when $mu<1$
([[lem-product-of-one-plus-deltas-gives-theta-n]]).

[L3] Frobenius norm is invariant under left and right orthogonal multiplication ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[A1] For each $k$, the computed local step satisfies
$$\widehat H_k(A^{(k)}+E_k)=A^{(k+1)},\qquad \|E_k\|_F\le 3\gamma_m\|A^{(k)}\|_F.$$

## Proof

**Proof technique:** convert each floating-point step into an exact step for a nearby trailing block and sum the transported perturbations.

1.1 The local-step hypothesis [A1] supplies a perturbation $E_k$ for every active block and an exact orthogonal update $\widehat H_k(A^{(k)}+E_k)=A^{(k+1)}$ with $\|E_k\|_F\le 3\gamma_m\|A^{(k)}\|_F$. [A1, L2]

2.1 Embed each $E_k$ into the original matrix size by padding zeros outside the active block and transport it back through the previous computed reflectors. Because every $\widehat H_k$ is orthogonal, [L3] preserves the Frobenius norm of each transported perturbation. Summing the $n$ transported perturbations gives a single matrix $\Delta A$ such that $$A+\Delta A=\widehat Q\widehat R$$ and $$ \|\Delta A\|_F\le \sum_{k=0}^{n-1}\|E_k\|_F \le 3\gamma_m\sum_{k=0}^{n-1}\|A^{(k)}\|_F. $$ [step 1.1, L1, L3, algebra]

2.2 From step 1.1 and [L3], $$\|A^{(k+1)}\|_F=\|\widehat H_k(A^{(k)}+E_k)\|_F=\|A^{(k)}+E_k\|_F\le \|A^{(k)}\|_F+\|E_k\|_F\le (1+3\gamma_m)\|A^{(k)}\|_F.$$ Since $A^{(0)}=A$, induction gives $$\|A^{(k)}\|_F\le (1+3\gamma_m)^k\|A\|_F$$ for every $k$. [step 1.1, L3, induction, algebra]

3.1 Substituting step 2.2 into step 2.1 yields $$\|\Delta A\|_F\le 3\gamma_m\sum_{k=0}^{n-1}(1+3\gamma_m)^k\|A\|_F=\bigl((1+3\gamma_m)^n-1\bigr)\|A\|_F.$$ This is the stated backward bound. [step 2.1, step 2.2, algebra]

4.1 Step 3.1 proves the displayed estimate, and step 2.1 gives the nearby factorisation identity. [step 2.1, step 3.1] ∎
