---
id: thm-inner-outer-factorisation-hardy-space
kind: theorem
title: "Inner-outer factorisation of a Hardy-space function"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-axiom-of-choice, def-analytic-hardy-space-disc, thm-fatou-boundary-theorem-analytic-hardy-spaces, lem-hardy-log-integrability-of-boundary-values, lem-poisson-jensen-inequality-hardy-functions, thm-riesz-factorization-hardy-space, def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, def-inner-singular-inner-and-outer-functions, lem-outer-function-properties, thm-zero-free-inner-functions-are-singular-inner, thm-complex-power-series-converge-locally-uniformly, def-countable-choice, thm-local-maximum-modulus-principle]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item thm-inner-outer-factorisation-hardy-space; evidence research/frontier-38-owner-30-reader-20.md, research/frontier-38-owner-30-reader-findings-20.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5, Corollary 5.7"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 70-71: uniqueness of the decomposition $f=\\lambda BS_\\mu F$ and the canonical factorisation of $H^p$ functions."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.10, Theorem 5.32"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "printed pp. 42-47: the canonical factorisation $f=\\lambda B S[f]$ and the equality characterization for outer functions."
---

## Statement

Assume the Axiom of Choice. Let $0<p\le\infty$ and let $f\in H^p(\mathbb D)$
with $f\not\equiv0$, with boundary function $f^*\in L^p$ and
$\log|f^*|\in L^1$. Then there exist a constant $\lambda\in\mathbb T$, a
Blaschke product $B$ (the product of the normalized Blaschke factors of the
zeros of $f$), a finite positive measure $\mu\perp m$ with associated singular
inner function $S_\mu$, and the outer function $F:=[\,|f^*|\,]$, such that
$$f=\lambda\,B\,S_\mu\,F,$$ with $F\in H^p$ and
$\|F\|_{H^p}\le\|f\|_{H^p}$, and: $B$ is determined by the zeros of $f$; $F$ is
the unique outer function with $F(0)>0$ and $|F^*|=|f^*|$ a.e.; $\mu$ is the
unique finite positive singular measure with $S_\mu(0)>0$ and
$f/(B S_\mu F)$ constant of modulus $1$; and $\lambda$ is that constant. The
factorization is unique in this normalized sense.

## Facts & Assumptions

**Given:** The Axiom of Choice, hence countable choice; $0<p\le\infty$ and $f\in H^p(\mathbb D)$, $f\not\equiv0$.

[L1] Fatou boundary theorem and log-integrability: $f^*\in L^p$ exists a.e., $\|f^*\|_p=\|f\|_{H^p}$ for $p<\infty$ (with the $L^\infty$/weak-star version at $p=\infty$), and $\log|f^*|\in L^1$ with $f^*\ne0$ a.e. ([[thm-fatou-boundary-theorem-analytic-hardy-spaces]], [[lem-hardy-log-integrability-of-boundary-values]], [[def-analytic-hardy-space-disc]]).

[L2] Outer functions: $F:=[\,|f^*|\,]$ is holomorphic, zero-free, $F(0)=\exp(\int\log|f^*|)>0$, $|F^*|=|f^*|$ a.e., and $F\in H^p$ with $\|F\|_{H^p}\le\|f^*\|_p=\|f\|_{H^p}$ for $p<\infty$ (and $F\in H^\infty$, $|F|\le\|f^*\|_\infty$ for $p=\infty$); an outer function with a prescribed boundary modulus and positive value at $0$ is unique ([[lem-outer-function-properties]], [[def-inner-singular-inner-and-outer-functions]]).

[L3] For finite $p$, Riesz factorization gives $f=Bg$ with $B$ the Blaschke product of the zeros of $f$, $g$ zero-free holomorphic with $\|g\|_{H^p}=\|f\|_{H^p}$; $B$ is determined by the zeros of $f$, and $|B^*|=1$ a.e. ([[thm-riesz-factorization-hardy-space]], [[def-blaschke-product]], [[thm-blaschke-product-boundary-values-and-zeros]]).

[L4] Poisson-Jensen inequality: for the zero-free $g\in H^p$ one has $\log|g(z)|\le P[\log|g^*|](z)$ for every $z$, with equality when $g$ is outer ([[lem-poisson-jensen-inequality-hardy-functions]]).

[L5] Zero-free inner functions are singular inner functions: a holomorphic zero-free $S$ with $|S|\le1$ and $|S^*|=1$ a.e. satisfies $S=\lambda'S_\mu$ with unique $\lambda'\in\mathbb T$ and unique finite positive $\mu\perp m$, normalized by $S_\mu(0)>0$ ([[thm-zero-free-inner-functions-are-singular-inner]]).

[L6] A holomorphic function of constant modulus is constant. In particular, a function holomorphic near a closed disc is bounded by its boundary maximum: an interior maximum exceeding the boundary maximum would force it to be constant ([[thm-local-maximum-modulus-principle]]).



## Proof

**Proof technique:** direct.

1.1 Put $F:=[\,|f^*|\,]$. By [L1] and [L2], it is holomorphic, zero-free and outer, with $F(0)>0$, $|F^*|=|f^*|$ almost everywhere, $F\in H^p$ and $\|F\|_{H^p}\le\|f\|_{H^p}$. For finite $p$, [L3] gives $f=Bg$ with $g$ zero-free and $\|g\|_{H^p}=\|f\|_{H^p}$. For $p=\infty$, apply [L3] with exponent $1$ (bounded $f$ belongs to $H^1$) to obtain the same holomorphic zero-free quotient $g=f/B$. [given, L1, L2, L3]

2.1 For $p=\infty$, fix $N$ and $0<\varepsilon<1$. The holomorphic quotient $g_N=f/B_N$ on every radius-$R$ circle sufficiently near $1$ satisfies $|g_N|\le(1-\varepsilon)^{-1}\|f\|_\infty$, since $B_N$ is continuous on the closed disc with unit boundary modulus. The boundary maximum principle [L6] gives the same bound inside that circle. Let $\varepsilon\downarrow0$, then $N\to\infty$ off the zeros of $B$, where $g_N\to g$; continuity extends the bound to those zeros. Thus $\|g\|_\infty\le\|f\|_\infty$, and $|B|\le1$ gives equality. In every case [L1] now supplies $g^*$, so $f^*=B^*g^*$ and $|B^*|=1$ yield $|g^*|=|f^*|$ almost everywhere. [step 1.1, L1, L3, L6, algebra]

3.1 The quotient is a zero-free inner function. Let $S:=g/F$, holomorphic and zero-free because both factors are. By [L4] applied to $g$, $\log|g|\le P[\log|g^*|]=\log|F|$ on $\mathbb D$, since $\log|F|=P[\log|F^*|]=P[\log|g^*|]$; hence $|S|\le1$. On the boundary, $|S^*|=|g^*|/|F^*|=1$ a.e. By [L5] there are $\lambda'\in\mathbb T$ and a unique finite positive $\mu\perp m$ with $S=\lambda'S_\mu$ and $S_\mu(0)>0$. [step 1.1, step 2.1, L2, L4, L5, algebra]

4.1 The factorization and its uniqueness. Substituting gives $f=Bg=BFS=\lambda'\,B\,S_\mu\,F$, which is the asserted factorization. Uniqueness: $B$ is determined by the zeros of $f$ by [L3]; $|F^*|=|f^*|$ a.e., $F$ outer and $F(0)>0$ determine $F$ by [L2]; then $S=f/(BF)$ is determined, and its representation $\lambda'S_\mu$ with $S_\mu(0)>0$ is unique by [L5]; hence $\lambda=\lambda'$ is determined, and writing $\lambda$ for $\lambda'$ gives the stated normalized factorization. [step 1.1, step 3.1, L2, L3, L5, L6]

5.1 Assembly. Steps 1.1, 3.1 and 4.1 produce the factorization $f=\lambda BS_\mu F$ with the asserted bounds and prove that the normalized factors $B,F,S_\mu$ and the constant $\lambda$ are uniquely determined. [step 1.1, step 3.1, step 4.1] ∎
