---
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
    content_sha256: "3081fd374a42c6466a53c2897b7f5eff86920fa6efc3343e06158ba3a50acd21"
id: thm-blaschke-product-boundary-values-and-zeros
kind: theorem
title: "Boundary values and zeros of a Blaschke product"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, def-blaschke-product, thm-normal-convergence-of-holomorphic-products, thm-hardy-zero-set-blaschke-condition, lem-hardy-radial-means-are-monotone, lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice, thm-c2-holomorphic-components-are-harmonic, def-plane-harmonic-function, cor-modulus-powers-of-holomorphic-functions-are-subharmonic, def-poisson-modification-of-a-subharmonic-function, thm-poisson-modification-preserves-subharmonicity-and-majorizes, thm-dominated-convergence, lem-poisson-kernel-properties-on-the-disc, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §2"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "Blaschke products, printed pp. 52-53: the argument $|B/B_n(0)|\\le\\int|B(e^{i\\theta})|\\,d\\theta/2\\pi$ yielding $|B|=1$ a.e."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.8"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Lemma 5.19 and its proof, printed pp. 36-37: convergence of the product, the zero set, $|B|\\le1$ and the a.e. unimodular boundary value."
---

## Statement

Let $(a_n)_{n\ge1}$ be a Blaschke sequence with Blaschke product
$B=\prod_n b_{a_n}$ and partial products $B_N=\prod_{n\le N}b_{a_n}$. Then:

(i) $|B(z)|\le1$ for every $z\in\mathbb D$, and the zeros of $B$ are exactly the
points $a_n$, with multiplicity;

(ii) for every $N$, $B/B_N$ is the Blaschke product of the tail
$(a_n)_{n>N}$; it is holomorphic on $\mathbb D$, satisfies
$|(B/B_N)(z)|\le1$, and $(B/B_N)(0)=\prod_{n>N}|a_n|$, a product that is
eventually positive and tends to $1$ as $N\to\infty$;

(iii) $B$ has finite nontangential limits $B^*(\zeta)$ for $m$-almost every
$\zeta\in\mathbb T$, and $|B^*(\zeta)|=1$ for $m$-almost every $\zeta$. In
particular $B\not\equiv0$.

## Facts & Assumptions

**Given:** Countable choice and a Blaschke sequence $(a_n)_{n\ge1}$ with $\sum_n(1-|a_n|)<+\infty$, its Blaschke product $B$, and the partial products $B_N$.

[L1] The product converges normally: $B$ is holomorphic on $\mathbb D$ with zeros exactly the $a_n$ counted with multiplicity, and $|B(z)|\le1$; for each $N$ the quotient $B/B_N$ is the Blaschke product of the tail and is holomorphic with $|B/B_N|\le1$, while $B_N$ is holomorphic on a neighbourhood of the closed disc with $|B_N(\zeta)|=1$ for every $\zeta\in\mathbb T$; also $b_a(0)=|a|$ and $|b_a|\le1$ for every $a\in\mathbb D$ ([[def-blaschke-product]], [[thm-normal-convergence-of-holomorphic-products]]).

[L2] Radii $R$ and moduli: for the tail products, $(B/B_N)(0)=\prod_{n>N}|a_n|$; since $\sum_n(1-|a_n|)<+\infty$ we have $|a_n|\to1$, so all but finitely many $a_n$ have $|a_n|\ge1/2$, and for those $\log(1/|a_n|)\le2(1-|a_n|)$; hence $\prod_{n>N}|a_n|=\exp\bigl(-\sum_{n>N}\log(1/|a_n|)\bigr)$ is eventually positive and tends to $1$ as $N\to\infty$ ([[thm-hardy-zero-set-blaschke-condition]], [[def-blaschke-product]]).

[L3] If $w$ is holomorphic on a neighbourhood of the closed disc of radius $r<1$, then $|w(0)|\le\int_{\mathbb T}|w(r\zeta)|\,dm(\zeta)$: $|w|$ is subharmonic by [[cor-modulus-powers-of-holomorphic-functions-are-subharmonic]] with $p=1$, its Poisson modification on $D(0,r)$ majorizes it and has the mean value of $|w|$ on the circle at its centre, and for $r=R$ this is the mean inequality for holomorphic functions of [[lem-hardy-radial-means-are-monotone]] ([[def-poisson-modification-of-a-subharmonic-function]], [[thm-poisson-modification-preserves-subharmonicity-and-majorizes]], [[lem-hardy-radial-means-are-monotone]]).

[L4] Under countable choice every bounded holomorphic disc function has finite nontangential limits almost everywhere. ([[lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice]], [[def-countable-choice]])

[L5] Domination and convergence: if $|g_r|\le1$ for all $r$ and $g_r\to g$ $m$-almost everywhere as $r\uparrow1$, then $\int g_r\,dm\to\int g\,dm$; the kernel has unit mass in the torus normalization and $m$ is a probability measure ([[thm-dominated-convergence]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).



## Proof

**Proof technique:** direct.

1.1 Items (i) and (ii). [L1] gives $|B|\le1$ with the stated zeros and the holomorphy and bound for $B/B_N$. For each $N$ the value at the origin is $(B/B_N)(0)=\prod_{n>N}|a_n|$, whose factors are all nonzero once $N$ exceeds the largest index with $a_n=0$. The tail need not be empty. By [L2] its product is eventually positive and tends to $1$; for a finite sequence the empty tail equals $1$. [given, L1, L2]

2.1 Nontangential limits exist and are bounded. Since $|B|\le1$ and B is holomorphic, [L4] gives finite nontangential limits almost everywhere; hence $B^*(\zeta):=\lim_{\Gamma\ni z\to\zeta}B(z)$ exists and satisfies $|B^*(\zeta)|\le1$ for $m$-almost every $\zeta$. [step 1.1, L4]

2.2 The mean inequality for each tail. Fix $N$ and $0<r<1$. The function $w_N:=B/B_N$ is holomorphic on a neighbourhood of the closed disc of radius $r$ by [L1], so [L3] gives $$\prod_{n>N}|a_n|=|(B/B_N)(0)|\le\int_{\mathbb T}|(B/B_N)(r\zeta)|\,dm(\zeta).$$ [step 1.1, L1, L3, algebra]

3.1 Letting the radius tend to the boundary. For $m$-almost every $\zeta$ one has $B(r\zeta)\to B^*(\zeta)$ as $r\uparrow1$, and $B_N$ extends continuously to $\overline{\mathbb D}$ with $|B_N(\zeta)|=1$ on $\mathbb T$ by [L1], so $(B/B_N)(r\zeta)\to B^*(\zeta)/B_N(\zeta)$ along these radii, a limit of modulus $|B^*(\zeta)|$. Since $|B/B_N|\le1$, [L5] applies and gives $$\prod_{n>N}|a_n|\le\int_{\mathbb T}|B^*(\zeta)|\,dm(\zeta)\le1 .$$ [step 1.1, step 2.1, step 2.2, L1, L5, algebra]

4.1 Conclusion. Letting $N\to\infty$ in step 3.1 and using that $\prod_{n>N}|a_n|\to1$ by [L2] gives $1\le\int_{\mathbb T}|B^*|\,dm\le1$, so $\int_{\mathbb T}|B^*|\,dm=1$; since $|B^*|\le1$ $m$-almost everywhere, the nonnegative function $1-|B^*|$ has integral $0$, hence vanishes $m$-almost everywhere by [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], that is, $|B^*|=1$ $m$-almost everywhere. In particular the boundary function is not identically zero, so $B\not\equiv0$. [step 3.1, L2, algebra] ∎
