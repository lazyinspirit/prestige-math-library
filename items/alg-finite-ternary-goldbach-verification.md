---
id: alg-finite-ternary-goldbach-verification
kind: algorithm
title: "Exact Exhaustive Ternary Goldbach Certificate Checker"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-prime
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "H. A. Helfgott and D. J. Platt, Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30"
      url: "https://arxiv.org/pdf/1305.3062v2"
      locator: "§§2–4, printed pp. 2–4; the local algorithm deliberately selects exhaustive witnesses rather than the paper's prime-ladder computation."
---

## Definition

The input is an integer $N\ge7$ and a finite list $W$ of integer rows. Put $m=\lfloor(N-7)/2\rfloor$. The checker executes the following exact exhaustive mode.

1. Reject unless $W$ has exactly $m+1$ rows, indexed in order by $j=0,\ldots,m$.

2. For row $j$, write $(n_j,p_{j,1},p_{j,2},p_{j,3})$. Reject unless $n_j=7+2j$, each $p_{j,i}\ge2$, and $p_{j,1}+p_{j,2}+p_{j,3}=n_j$.

3. For each of the three entries $p=p_{j,i}$, set $s=\lfloor\sqrt p\rfloor$ and test by integer division every $d=2,3,\ldots,s$. Reject if any tested $d$ divides $p$.

4. If every row passes, return “accept” with the certificate's target $N$ and the claimed range of all odd integers $7\le n\le N$.

The checker validates only the supplied finite list. It neither asserts that such a list exists for any particular $N$ nor claims an accepted certificate through any specified bound.

## Definition references

[[def-prime|prime integers are $p>1$ whose positive divisors are only $1$ and $p$]]

[Helfgott–Platt, *Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30*, §§2–4](https://arxiv.org/pdf/1305.3062v2)

## Remarks

This item chooses the exhaustive-witness option of the planned checker interface. The published Helfgott–Platt computation instead used a prime ladder and its checked ladder data were deleted; this local algorithm is not a reproduction of that computation.
