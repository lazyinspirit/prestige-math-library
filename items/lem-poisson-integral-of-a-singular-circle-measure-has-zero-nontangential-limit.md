---
id: lem-poisson-integral-of-a-singular-circle-measure-has-zero-nontangential-limit
kind: lemma
title: "Singular circle measures have Poisson integral tending nontangentially to zero almost everywhere"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, lem-circle-maximal-weak-one-one, def-the-one-dimensional-torus-and-normalized-haar-integral, def-circle-maximal-function-and-nontangential-region, thm-poisson-nontangential-maximal-bound, def-poisson-kernel-on-the-disc, def-poisson-integral-of-finite-boundary-measure, def-restriction-of-a-measure, prop-restriction-is-a-measure, cor-second-countable-lch-locally-finite-borel-measures-are-regular]
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
    - title: "Garnett, Bounded Analytic Functions, Chapter I Section 5, Lemma 5.4, printed pp.29-30, nontangential zero limits of singular Poisson integrals"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
    - title: "Ryzhik, Stanford Math 215 lecture notes, discussion following Proposition 5.20, printed pp.78-79, zero boundary density of singular measures and their Poisson integrals"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF215-13/stanf215-notes.pdf"
---

## Statement

Assume countable choice. Let $\mu$ be a finite positive Borel measure on $\mathbb T$ singular with respect to normalized Haar measure $m$. Then, for $m$-almost every $\zeta\in\mathbb T$ and every $A>1$,
$$\lim_{z\to\zeta,\ z\in\Gamma_A(\zeta)}P[\mu](z)=0.$$
The zero measure is allowed.

## Facts & Assumptions

**Given:** Countable choice, the finite positive singular measure $\mu$, and the normalized circle conventions.

[F1] Under countable choice, finite Borel measures on the compact metric circle are regular. Singularity supplies a Borel set $E$ with $m(E)=0$ and $\mu(\mathbb T\setminus E)=0$. For every $\varepsilon>0$, inner regularity provides a compact $K\subseteq E$ with $\mu(\mathbb T\setminus K)<\varepsilon$. The Haar measure is a probability measure. ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-countable-choice]])

[F2] For each finite regular positive Borel measure $\rho$, the circle maximal function satisfies $m\{M_{\mathbb T}\rho>\lambda\}\le3\rho(\mathbb T)/\lambda$ for $\lambda>0$. Moreover $N_A(P[\rho])\le(A+1)^2M_{\mathbb T}\rho$ for $A>1$. Both results assume countable choice. ([[lem-circle-maximal-weak-one-one]], [[thm-poisson-nontangential-maximal-bound]], [[def-circle-maximal-function-and-nontangential-region]])

[F3] Restrictions are measures and remain finite regular Borel measures here by [F1]. The kernel is $(1-|z|^2)/|\eta-z|^2$, and the Poisson integral is linear in its measure. ([[def-restriction-of-a-measure]], [[prop-restriction-is-a-measure]], [[def-poisson-kernel-on-the-disc]], [[def-poisson-integral-of-finite-boundary-measure]])

## Proof

1.1 Fix $\varepsilon>0$ and choose the compact null set $K$ in [F1]. Split $\mu=\mu_K+\rho$, its restrictions to $K$ and its complement; then $\rho(\mathbb T)<\varepsilon$. At a circle point $\zeta\notin K$, compactness gives $d=\operatorname{dist}(\zeta,K)>0$ if $K$ is nonempty. For $|z-\zeta|<d/2$, [F3] gives $$P[\mu_K](z)\le4d^{-2}(1-|z|^2)\mu(\mathbb T)\longrightarrow0.$$ If $K$ is empty, this integral is already zero. This limit holds along every approach within the disc, not only a radius. [F1, F3, given, construct, algebra]

2.1 Fix $A>1$ and $t>0$, and let $B_{A,t}$ be the circle points where the nontangential limsup of $P[\mu]$ in $\Gamma_A$ is greater than $t$. For $\zeta\notin K$, step 1.1 and positivity imply that this limsup is the limsup for $P[\rho]$. Thus [F2] gives $$B_{A,t}\subseteq K\ \cup\ \{M_{\mathbb T}\rho>t/(A+1)^2\}.$$ The right side is Borel and has Haar measure at most $3(A+1)^2\varepsilon/t$. Since $\varepsilon$ is arbitrary, $B_{A,t}$ has Haar outer measure zero. This argument does not assume measurability of the cone limsup. [F1, F2, step 1.1, construct, algebra]

3.1 For each integer $j\ge2$ and $k\ge1$, apply step 2.1 with $A=j$ and $t=1/k$. A set of outer measure zero is contained in a Borel null set: choose Borel supersets of mass less than $2^{-l}$ and intersect them, using countable choice. By countable choice choose these null supersets for the countable pairs $(j,k)$ and take their union, a Borel null set. Outside that union, positivity gives limsup zero in every cone of integer aperture $j\ge2$, hence the limit zero there. Every cone of aperture $A>1$ is contained in one with integer aperture $j>A$, so the same full-measure set works for all $A$. For $\mu=0$ the integral is identically zero throughout. [F1, F2, step 2.1, algebra] ∎
