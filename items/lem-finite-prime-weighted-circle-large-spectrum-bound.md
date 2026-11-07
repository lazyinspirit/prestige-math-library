---
id: lem-finite-prime-weighted-circle-large-spectrum-bound
kind: lemma
title: "Finite circle bound from a prime-weight large spectrum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-schwarz-finite]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Tao"
      url: https://arxiv.org/pdf/1509.05422v4
      locator: "Lemma 3.6, PDF pp. 26\u201327; explicit finite variant"
---

## Statement

Let $a,H\ge1$ be integers with $a\mid H$, let $b,h\in\mathbb Z$, and let $\mathcal P$ be a finite set of primes. For complex $|x_{i,j}|,|c_p|\le1$ extend $x_{i,j}$ periodically modulo $H$, and put $S(\alpha)=\sum_{p\in\mathcal P}(c_p/p)e(\alpha p)$ and $M=\sup_\alpha|S(\alpha)|$. For $t>0$ let $\Xi$ be the residues $\xi\bmod H$ for which $|S(-(b+h)\eta/a-h\xi/H)|\ge t$ for some $\eta\bmod a$. Then
$$\left|\sum_{p\in\mathcal P}\frac{c_p}p\sum_{j\bmod H}1_{j\equiv pb\ ({\rm mod}\ a)}x_{1,j}x_{2,j+ph}\right|\le Ht+M\sum_{\xi\in\Xi}\left|\sum_{j=1}^Hx_{1,j}e(-j\xi/H)\right|.$$
Replacing the cyclic $j$ sum by $j,j+ph\in[1,H]$ costs at most $\sum_p|h|$ when $|ph|\le H$ for every $p$; the same bound remains valid without that restriction.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

[F1] [[thm-cauchy-schwarz-finite]] gives the finite real Cauchy–Schwarz inequality, applied below to the absolute values of Fourier coefficients.

## Proof

1.1 Put $G_i(\xi)=H^{-1}\sum_{j=1}^Hx_{i,j}e(-j\xi/H)$. Finite geometric sums give Fourier inversion and $\sum_\xi|G_i(\xi)|^2=H^{-1}\sum_j|x_{i,j}|^2\le1$. Expand the cyclic bilinear sum. The $j$ sum with its congruence vanishes unless the second frequency equals $-\xi-H\eta/a$ for some $\eta\bmod a$. In that case its value is $(H/a)e(-p(b+h)\eta/a-ph\xi/H)$. Thus the whole expression is $(H/a)\sum_{\eta,\xi}G_1(\xi)G_2(-\xi-H\eta/a)S(-(b+h)\eta/a-h\xi/H)$. [given, algebra]

2.1 For each $\eta$, apply [F1] to the real nonnegative lists $|G_1(\xi)|$ and $|G_2(-\xi-H\eta/a)|$. Their squared sums are at most one by step 1.1, so this bounds $\sum_\xi|G_1(\xi)G_2(-\xi-H\eta/a)|$ by one. The terms with $\xi\notin\Xi$ therefore cost at most $Ht$. For the rest use $|G_2|\le1$, $|S|\le M$, and sum the $a$ possibilities for $\eta$, obtaining $HM\sum_{\xi\in\Xi}|G_1(\xi)|$. This is the claimed term. [F1, step 1.1, algebra]

3.1 For fixed $p$, at most $\min(H,|ph|)$ integers $j\in[1,H]$ have $j+ph$ outside the interval. Their total weighted modulus is at most $\min(H,|ph|)/p\le|h|$. Sum over $p$. This error accounts only for cyclic versus interval endpoints and uses no prime restriction theorem. [given, algebra] ∎
