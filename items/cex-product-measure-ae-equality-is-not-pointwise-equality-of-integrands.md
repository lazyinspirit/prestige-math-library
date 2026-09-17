---
id: cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands
kind: counterexample
title: "Product-measure equality is not pointwise equality"
status: draft
origin: pipeline
deps: [def-progressively-measurable-and-predictable-process, lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative, def-ito-integral-for-square-integrable-predictable-processes, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Definition 5.25"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement refuted

The inference "two integrands that agree $(\mathrm dt\otimes P)$-almost
everywhere agree as raw processes, and their Ito integrals agree because the
processes agree" is false as stated. The deterministic processes
$$H(t,\omega):=1_{\{t=1/2\}},\qquad K(t,\omega):=0$$
are predictable with finite energy and agree $(\mathrm dt\otimes P)$-almost
everywhere, but as raw processes they differ exactly on
$\{1/2\}\times\Omega$: their sections at $t=1/2$ differ at every $\omega$,
while they agree at every $t\ne1/2$. Their Ito integrals on $[0,T]$ are
nevertheless equal almost surely, so the correct equality is the
almost-everywhere class, not pointwise agreement.

## Facts & Assumptions

**Given:** AC, a horizon $T>1/2$, the deterministic processes $H=1_{\{1/2\}}$ and $K=0$.

[F1] $H$ and $K$ are predictable: a deterministic Borel function of the time variable is a predictable process, $1_{[0,1/2]}$ and the pointwise limit $1_{[0,1/2)}=\lim_n1_{[0,1/2-1/n]}$ of predictable indicators are predictable, and $1_{\{1/2\}}=1_{[0,1/2]}-1_{[0,1/2)}$. [[def-progressively-measurable-and-predictable-process]]

[F2] $\mathrm dt\otimes P(\{1/2\}\times\Omega)=0$: the section at $\omega$ is the singleton $\{1/2\}$, which is Lebesgue-null, so Tonelli gives the value $0$. Hence $H=K$ almost everywhere for the product measure, and both have finite energy, $\int_0^T\!\!\int H^2dP\,dt=0$. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F3] The Ito integral is a function of the $(\mathrm dt\otimes P)$-class of the integrand: if two finite-energy predictable integrands agree almost everywhere, their integrals agree almost surely. [[lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative]] [[def-ito-integral-for-square-integrable-predictable-processes]]

[F4] AC is declared for the ambient interfaces. [[def-axiom-of-choice]]

## Counterexample

1.1 The two raw processes differ exactly on the time section $\{1/2\}$: for $t=1/2$ one has $H=1\ne0=K$ at every $\omega$, while for $t\ne1/2$ both vanish; by [F2] the exceptional set has product measure zero, so the processes are equal in the $L^2(\mathrm dt\otimes P)$ sense while failing pointwise equality for every $\omega$. [F2, given]

1.2 Both processes are predictable by [F1] and have finite energy: $H^2=H$ integrates to $0$ and $K^2=0$, so both integrals over $[0,T]$ are defined as classes. [F1, F2]

2.1 By [F3] the integrals agree, $\int_0^TH\,dB=\int_0^TK\,dB=0$ almost surely, because the integrands differ on a product-null set; the equality of integrals is therefore not evidence of pointwise equality of the integrands. [F3, step 1.1, step 1.2]

3.1 The example isolates the convention in force throughout this development: representatives of predictable $L^2$ classes are interchangeable, deterministic singleton sections are invisible to the product measure, and every statement about an Ito integral is a statement about an almost-everywhere class. The degenerate variant $H=1_{\{0\}}$ agrees with $K=0$ even as a raw process on $(0,T]$, since the elementary convention makes the value at time zero irrelevant; the singleton $\{1/2\}$ exhibits the genuine pointwise failure. AC enters only through [F4]. [F3, step 2.1, F4, given] ∎

## Source notes

Van der Vaart, Definition 5.25, defines the $L^2$ integral for equivalence classes of integrands; the example records that the equivalence is strictly coarser than pointwise equality, so citations to "the integrand" always mean its product-measure class.
