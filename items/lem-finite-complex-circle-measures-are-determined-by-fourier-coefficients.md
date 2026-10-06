---
id: lem-finite-complex-circle-measures-are-determined-by-fourier-coefficients
kind: lemma
title: "Finite complex circle measures are determined by Fourier coefficients and Poisson integrals"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, lem-complex-circle-measures-have-finite-total-variation-under-countable-choice, def-fourier-coefficients-and-trigonometric-polynomials, cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, def-poisson-kernel-on-the-disc, def-poisson-integral-of-finite-boundary-measure, lem-trigonometric-characters-are-orthonormal, def-the-one-dimensional-torus-and-normalized-haar-integral]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-20.md"
      - "research/frontier-38-owner-30-alpha-batch-20-5a.md"
      - "research/frontier-38-owner-30-step5-hash-20-post-5a.json"
    content_sha256: "71755514a5e24b2dae17feffaf749ea214edd586edc663174252d68b129bf143"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Garnett, Bounded Analytic Functions, ChapterI Section3 Theorem3.1 (printedpp14-16), uniqueness of Poisson boundary measures, and ChapterII Section3 (printedp57), circle Fourier coefficients; direct uniform trigonometric approximation and regularity proof"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
---

## Statement

Assume countable choice. If two complex Borel circle measures $\mu,\nu$ have $\widehat\mu(n)=\widehat\nu(n)$ for every integer n, then $\mu=\nu$. Moreover $P[\mu]=P[\nu]$ on the disc implies $\mu=\nu$. For every complex Borel measure, every $0<r<1$ and every integer n,
$$\widehat{(P[\mu])_r}(n)=r^{|n|}\widehat\mu(n).$$
The zero measures are allowed.

## Facts & Assumptions

**Given:** Countable choice and two complex Borel measures on the circle.

[F1] Under CC their total variations, and the variation of their difference, are finite regular positive Borel measures. Integration against a complex measure satisfies $|\int u\,d\sigma|\le\int|u|\,d|\sigma|$. ([[lem-complex-circle-measures-have-finite-total-variation-under-countable-choice]], [[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]], [[def-countable-choice]])

[F2] The trigonometric polynomials are uniformly dense in $C(\mathbb T,\mathbb C)$ under CC. Their coefficients are integrals against the characters, which are orthonormal for normalized Haar measure. ([[cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions]], [[def-fourier-coefficients-and-trigonometric-polynomials]], [[lem-trigonometric-characters-are-orthonormal]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]])

[F3] The kernel is $P(z,\eta)=(1-|z|^2)/|\eta-z|^2$, and $P[\mu]$ is its integral against $\mu$. The circle is a compact metric space. ([[def-poisson-kernel-on-the-disc]], [[def-poisson-integral-of-finite-boundary-measure]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]])

## Proof

1.1 Set $\sigma=\mu-\nu$, a complex measure by countable additivity. If its Fourier coefficients vanish, its integral against every trigonometric polynomial is zero. Given a continuous u, [F2] supplies polynomials arbitrarily close to u uniformly; [F1] bounds $|\int(u-p)d\sigma|$ by $\|u-p\|_\infty|\sigma|(\mathbb T)$. Therefore $\int u\,d\sigma=0$ for every continuous u. [F1, F2, given, construct, algebra]

1.2 For $z=r\zeta$, the geometric-series identity yields $$P(r\zeta,\eta)=\sum_{k\in\mathbb Z}r^{|k|}\zeta^k\eta^{-k}.$$ At fixed r<1 this is uniformly absolutely convergent in both circle variables, with bound $1+2\sum_{k\ge1}r^k$. Integrating first against $\mu$ is justified by [F1] and the uniform error bound, and produces the uniformly convergent circle series $\sum_k r^{|k|}\widehat\mu(k)\zeta^k$, since $|\widehat\mu(k)|\le|\mu|(\mathbb T)$. Integrating this series against $\zeta^{-n}dm$ and using [F2] gives the stated coefficient formula. [F1, F2, F3, algebra]

2.1 Fix a Borel E and $\varepsilon>0$. Regularity in [F1] gives a compact $K\subseteq E$ and open $U\supseteq E$ with $|\sigma|(U\setminus K)<\varepsilon$. There is a continuous $0\le u\le1$ equal to one on K and zero outside U. Explicitly, if K is empty take u=0; if U is the circle take u=1; otherwise use $$u(x)=\frac{d(x,\mathbb T\setminus U)}{d(x,\mathbb T\setminus U)+d(x,K)}.$$ The two sets are disjoint closed sets, so the denominator is positive at each x; distances are continuous because $|d(x,A)-d(y,A)|\le d(x,y)$ for a nonempty set A. Thus $|\mathbf1_E-u|\le\mathbf1_{U\setminus K}$. Step 1.1 and [F1] give $|\sigma(E)|=|\int(\mathbf1_E-u)d\sigma|<\varepsilon$. Hence $\sigma(E)=0$ for every E, proving Fourier uniqueness. [F1, F3, step 1.1, construct, algebra]

3.1 If $P[\mu]=P[\nu]$, fix r=1/2 in step 1.2. Every factor $r^{|n|}$ is strictly positive, so all Fourier coefficients agree. Step 2.1 gives $\mu=\nu$. Zero measures and zero variation cause no division by a measure mass anywhere in the proof. [step 2.1, step 1.2, algebra] ∎
