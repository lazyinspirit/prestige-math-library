---
id: op-poisson-moments-for-primes-in-subpolynomial-short-intervals
kind: open-problem
title: "Poisson moments for primes in subpolynomial short intervals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-short-interval-prime-count-statistic
  - lem-short-interval-prime-count-statistic-has-finite-moments
  - def-poisson-law
  - lem-poisson-count-law-normalization-and-moments
justified_by: []
axiom_use: "Countable Choice is inherited only through the Lebesgue-uniform start in the statistic definition."
verification:
  precheck: n/a
  sources_checked:
    date: "2026-10-25"
    scope: "Official arXiv version, Conjecture 1 statement and partial-regime discussion, exact principal-value convention, and bounded current-status search; no exhaustive-absence claim."
    by: "Step 1 beta"
sources:
  scraped: []
  references:
    - title: "Ofir Gorodetsky, High and odd moments in the Erdős–Kac theorem, arXiv:2501.00351v1, Conjecture 1"
      url: "https://arxiv.org/html/2501.00351v1"
      locator: "§1.2, Conjecture 1 and the discussion immediately following it; PDF p. 3."
    - title: "NIST Digital Library of Mathematical Functions, §6.2.8"
      url: "https://dlmf.nist.gov/6.2"
      locator: "Equation (6.2.8), principal-value convention for the logarithmic integral."
---

## Open problem

Assume the Axiom of Countable Choice. Fix an integer $k\ge2$ and a positive function $h=h(x)$ with $\log h(x)/\log x\to0$ as $x\to\infty$. For each real $x\ge2$, let $T_x$ be uniform on $[0,x]$ with density $1/x$ relative to Lebesgue measure. For $t\in[0,x]$, define
$$C_{x,h}(t):=\#\{p\text{ prime}:t\le p<t+h\},\qquad J_{x,h}(t):=\operatorname{PV}\!\int_t^{t+h}\frac{du}{\log u}.$$
The principal value deletes $(1-\varepsilon,1+\varepsilon)$ and takes $\varepsilon\downarrow0$ when $t<1<t+h$; the integral is ordinary improper integration when the interval does not cross $1$, and $J_{x,h}(t)$ is assigned $0$ when an endpoint equals $1$. Let $W_\lambda$ have Poisson law with mean $\lambda=h(x)/\log x$, so $\mathbb P(W_\lambda=j)=e^{-\lambda}\lambda^j/j!$ for $j\in\mathbb N_0$. Is it true that, as $x\to\infty$,
$$\mathbb E_{T_x}\big(C_{x,h}(T_x)-J_{x,h}(T_x)\big)^k\sim\mathbb E_{T_x}\left(\frac{\sum_{T_x\le p<T_x+h}\log p-h}{\log x}\right)^k\sim\mathbb E\big(W_\lambda-\lambda\big)^k?$$
Here $a_x\sim b_x$ means $a_x/b_x\to1$.

## Open problem references

[Gorodetsky, *High and odd moments in the Erdős–Kac theorem*, arXiv:2501.00351v1, §1.2, Conjecture 1](https://arxiv.org/html/2501.00351v1)

[NIST Digital Library of Mathematical Functions, §6.2.8](https://dlmf.nist.gov/6.2)

## Status

Gorodetsky labels this exact assertion Conjecture 1 in §1.2. The source verifies the range $h=o(\log x)$ by an upper-bound sieve, identifies $h\asymp\log x$ with Gallagher's moment result under the Hardy–Littlewood $k$-tuple conjecture, and discusses conditional even-moment evidence for larger $h$. These partial results do not prove the full unconditional assertion. The official arXiv record checked on 2026-10-28 lists only version 1, submitted 31 December 2024; that version still states the assertion as Conjecture 1. The Bulletin de la Société Mathématique de France lists the paper as accepted on 9 June 2026; that publication-status record does not state that the conjecture has been resolved, and I did not locate or review a final accepted text. A targeted search found no later resolution. This is bounded source evidence, not an exhaustive absence claim. No proof of the full conjecture is asserted.

## Status references

[Gorodetsky, official arXiv record, submission history checked 2026-10-28](https://arxiv.org/abs/2501.00351)

[Bulletin de la Société Mathématique de France, accepted papers, entry dated 9 June 2026](https://smf.emath.fr/publications/bulletin-articles-acceptes)
