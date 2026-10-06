---
id: def-sobolev-conjugate-exponent
kind: definition
title: "The Sobolev conjugate exponent and the scaling identity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-conjugate-exponents, def-real-power]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.1, displayed formulas and the moral after (3.1), printed pp. 61-62."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.7, Definition 3.25 and (3.11), printed p. 60."
---

## Definition

Let $n\ge2$ and $1\le p<n$. The **Sobolev conjugate** of $p$ is
$$p^{*}=\frac{np}{n-p}.$$
The denominator $n-p$ is positive, so $p^{*}$ is a finite real number greater
than $1$. Conjugate exponents in the sense of
[[def-conjugate-exponents]] and real powers in the sense of
[[def-real-power]] are used below.

The following elementary identities are part of the definition and record how
$p^{*}$ is used.
$$\frac{1}{p^{*}}=\frac{n-p}{np}=\frac1p-\frac1n,\qquad p^{*}-p=\frac{np-p(n-p)}{n-p}=\frac{p^{2}}{n-p}>0,$$
so $p^{*}>p$ and $1/p^{*}+1/n=1/p$; in particular $p^{*}=n/(n-1)$ when $p=1$.
Equivalently $p^{*}=n\big/\big(\frac np-1\big)$.

For $k\ge1$ with $kp<n$ the **$k$-fold Sobolev conjugate** $p^{*}_{k}$ is
defined recursively by
$$\frac{1}{p^{*}_{1}}=\frac1p-\frac1n,\qquad \frac{1}{p^{*}_{j+1}}=\frac{1}{p^{*}_{j}}-\frac1n\quad(1\le j<k).$$
Induction on $j$ gives $\frac1{p^{*}_{j}}=\frac1p-\frac jn$ and hence
$$p^{*}_{k}=\frac{np}{n-kp};$$
the recursion is well posed because $jp<n$ for $j\le k$ keeps every
$p^{*}_{j}$ finite and greater than $1$.

Finally, the map $p\mapsto p^{*}=n/(\frac np-1)$ is continuous on $(1,n)$,
since $n/p-1>0$ there and the reciprocal and affine maps are continuous; it is
strictly increasing on $(1,n)$, because $p\mapsto n/p$ is strictly decreasing
and $t\mapsto n/(t-1)$ is strictly decreasing on $(1,\infty)$; and
$p^{*}\to\infty$ as $p\to n^{-}$, because $n/p-1\to0^{+}$. No finite Sobolev
conjugate is attached to $p\ge n$: for $p=n$ the formula has denominator $0$,
and for $p>n$ the expression $np/(n-p)$ is negative.
