---
id: lem-finite-positive-circle-measures-have-lebesgue-decomposition-under-countable-choice
kind: lemma
title: "Finite positive circle measures admit a Lebesgue decomposition under countable choice"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, def-the-one-dimensional-torus-and-normalized-haar-integral, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-riesz-representation-for-hilbert-space, cor-cauchy-schwarz-inequality-for-l-two, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-monotone-convergence-for-the-integral, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-restriction-of-a-measure, prop-restriction-is-a-measure, def-measure-concentrated-on-a-measurable-set]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Theorem9.36, complete finite-positive-measure Hilbert-space proof, printedpp272-273"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Assume countable choice. Every finite positive Borel measure $\mu$ on $\mathbb T$ has a unique decomposition $\mu=w\,m+\mu_s$, where $w\ge0$ is Borel measurable and integrable for normalized Haar measure $m$, and $\mu_s$ is a finite positive Borel measure carried by an $m$-null Borel set. The density $w$ is unique up to $m$-almost-everywhere equality. The zero measure is allowed.

## Facts & Assumptions

**Given:** Countable choice and the finite positive measure $\mu$ on the circle, whose Haar measure has mass one.

[F1] Under countable choice, real $L^2(\nu)$ is a Hilbert space for every measure space, with inner product $\int fg\,d\nu$. Every bounded real linear functional has a representing vector for this pairing. Cauchy-Schwarz bounds integrals of products of square-integrable functions. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-riesz-representation-for-hilbert-space]], [[cor-cauchy-schwarz-inequality-for-l-two]], [[def-countable-choice]])

[F2] The integral is linear on integrable real functions, increasing nonnegative functions integrate to their limit, and a nonnegative function has integral zero exactly when it vanishes almost everywhere. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-monotone-convergence-for-the-integral]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F3] Restrictions to Borel sets are measures. Being carried by a null Borel set is the meaning of singularity here; Haar measure is a probability measure. ([[def-restriction-of-a-measure]], [[prop-restriction-is-a-measure]], [[def-measure-concentrated-on-a-measurable-set]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]])

## Proof

1.1 Set $\nu=\mu+m$, a finite positive measure on the circle Borel sigma-algebra. The functional $\Lambda(f)=\int f\,dm$ on real $L^2(\nu)$ is well-defined: a $\nu$-null set is $m$-null since $m\le\nu$, and Cauchy-Schwarz gives $\int|f|\,dm\le(\int|f|^2\,dm)^{1/2}\le\|f\|_{L^2(\nu)}$. By [F1] there is a real Borel representative $h\in L^2(\nu)$ with $\Lambda(f)=\int fh\,d\nu$. Every Borel indicator lies in this $L^2$, so $$m(E)=\int_Eh\,d\nu\qquad(E\text{ Borel}).$$ [F1, F3, given, construct, algebra]

2.1 This identity forces $0\le h\le1$ $\nu$-almost everywhere. On $E_k=\{h<-1/k\}$ the integral is at most $-\nu(E_k)/k$ but equals the nonnegative $m(E_k)$, hence $\nu(E_k)=0$. On $D_k=\{h>1+1/k\}$ it is at least $(1+1/k)\nu(D_k)$ but $m(D_k)\le\nu(D_k)$, so $\nu(D_k)=0$. Clip $h$ into $[0,1]$ on the countable union of these null Borel sets. The identity remains true. By linearity, $$\mu(E)=\nu(E)-m(E)=\int_E(1-h)\,d\nu.$$ [F2, step 1.1, construct, algebra]

3.1 Put $N=\{h=0\}$, and define $w=(1-h)/h$ on $\mathbb T\setminus N$ and $w=0$ on $N$. Step 1.1 gives $m(N)=0$. Its indicator identity implies $\int v\,dm=\int vh\,d\nu$ for every nonnegative Borel $v$: first for simple functions by linearity, then for arbitrary nonnegative functions by increasing simple approximation and [F2]. Applying it to $v=w\mathbf1_E$ gives $$\int_Ew\,dm=\int_{E\setminus N}(1-h)\,d\nu=\mu(E\setminus N).$$ In particular $w$ is integrable, with integral at most $\mu(\mathbb T)$. Set $\mu_s=\nu|_N=\mu|_N$ by step 2.1. It is positive, finite and carried by the $m$-null Borel set $N$, and the displayed identity proves $\mu=w\,m+\mu_s$. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 For uniqueness, suppose also $\mu=v\,m+\rho_s$ with the stated properties. Choose null Borel carriers for $\mu_s$ and $\rho_s$ and let $A$ be their union. For every Borel $E\subseteq\mathbb T\setminus A$, equality of the two measures gives $\int_E(w-v)\,dm=0$. Testing the sets where $w-v>1/k$ or $v-w>1/k$ proves $w=v$ almost everywhere outside $A$, hence everywhere almost surely. The density measures are equal, and subtraction then gives $\mu_s=\rho_s$. For $\mu=0$, positivity forces both parts zero. Countable choice was used only for the Hilbert-space interface [F1]; all other constructions use explicit measurable formulas. [F2, step 3.1, algebra] ∎
