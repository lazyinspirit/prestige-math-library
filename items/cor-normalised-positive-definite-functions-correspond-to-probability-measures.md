---
id: cor-normalised-positive-definite-functions-correspond-to-probability-measures
kind: corollary
title: Normalised positive definite functions correspond to probability measures
dependency_level: 10
deps:
- thm-bochner-theorem-for-lca-groups
- def-positive-definite-function-on-an-abelian-group
- def-radon-measure-on-an-lch-space
- def-probability-measure
- lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite
- def-dependent-choice
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "T. W. Koerner, Topological Groups (author PDF, Internet Archive snapshot of the dpmms.cam.ac.uk Topg.pdf file)"
    url: "https://web.archive.org/web/2024id_/https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf"
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice and Dependent Choice, and let $G$ be a locally compact Hausdorff abelian group. Under Bochner's theorem [[thm-bochner-theorem-for-lca-groups]], a continuous positive definite $\phi:G\to\mathbb C$ satisfies $\phi(0)=1$ if and only if its representing finite positive Radon measure on $\widehat G$ is a probability measure. In particular continuous positive definite functions with $\phi(0)=1$ are exactly the Fourier-Stieltjes transforms of Radon probability measures on $\widehat G$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Dependent Choice, a locally compact Hausdorff abelian group $G$ with dual $\widehat G$, and a continuous positive definite $\phi:G\to\mathbb C$.

[F1] By Bochner's theorem, $\phi$ is continuous positive definite if and only if it has a unique representing finite positive Radon measure $\mu$ on $\widehat G$, characterized by $\phi(x)=\int_{\widehat G}\gamma(x)\,d\mu(\gamma)$ for all $x\in G$, and then $\mu(\widehat G)=\phi(0)$ ([[thm-bochner-theorem-for-lca-groups]], [[def-positive-definite-function-on-an-abelian-group]], [[def-radon-measure-on-an-lch-space]]).

[F2] A probability measure on the Borel $\sigma$-algebra of $\widehat G$ is a measure $\mathbb P$ with $\mathbb P(\widehat G)=1$ ([[def-probability-measure]]); a finite positive Radon measure is a probability measure exactly when its total mass is $1$.

[F3] For every finite positive Radon measure $\mu$ on $\widehat G$, its Fourier-Stieltjes transform $\phi_\mu(x)=\int_{\widehat G}\gamma(x)\,d\mu(\gamma)$ is continuous and positive definite with $\phi_\mu(0)=\mu(\widehat G)$ ([[lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite]]).

## Proof

**Proof technique:** direct.

1.1 (Normalised function gives probability measure.) Let $\phi$ be continuous and positive definite with representing measure $\mu$ and $\phi(0)=1$. By [F1], $\mu(\widehat G)=\phi(0)=1$, so by [F2] $\mu$ is a probability measure. [F1, F2]

1.2 (Probability measure gives normalised function.) Let $\mathbb P$ be a Radon probability measure on $\widehat G$ and put $\phi(x):=\int_{\widehat G}\gamma(x)\,d\mathbb P(\gamma)$. By [F3] $\phi$ is continuous and positive definite with $\phi(0)=\mathbb P(\widehat G)=1$, and [F1] identifies $\mathbb P$ as its unique representing measure. [F1, F2, F3]

2.1 (The correspondence.) Combining steps 1.1 and 1.2: continuous positive definite functions with $\phi(0)=1$ correspond exactly to their representing measures, and those are exactly the Radon probability measures; conversely the Fourier-Stieltjes transform of a Radon probability measure is a continuous positive definite function with value $1$ at $0$. [step 1.1, step 1.2]

3.1 Steps 1.1 and 1.2 prove the equivalence, and step 2.1 records the stated identification of continuous positive definite functions with $\phi(0)=1$ and Fourier-Stieltjes transforms of Radon probability measures. [step 1.1, step 1.2, step 2.1] ∎
