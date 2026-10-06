---
id: ex-haar-normalisations-on-the-circle-and-the-integers
kind: example
title: Haar normalisations on the circle and the integers
dependency_level: 1
deps:
- def-complex-exponential
- thm-kernel-and-fibres-of-complex-exponential
- lem-unit-circle-is-a-compact-metrizable-topological-group
- lem-continuous-characters-of-the-real-line-are-exponentials
- lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup
- lem-compact-open-topology-on-a-discrete-domain-is-pointwise
- def-left-haar-integral-and-left-haar-measure
- def-radon-measure-on-an-lch-space
- def-fourier-transform-on-an-lca-group
- def-pontryagin-dual-and-compact-open-topology
- def-the-one-dimensional-torus-and-normalized-haar-integral
- lem-trigonometric-characters-are-orthonormal
- thm-fejer-convergence-in-lp
- def-countable-choice
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
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
  - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Concentration (course text)"
    url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/169/2018/04/fadc.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). With $G=\mathbb Z$ carrying counting measure, identify $\widehat{\mathbb Z}$ with $\mathbb T$ and use normalized arc measure $dm_{\mathbb T}=dt/(2\pi)$. Then $$f(n)=\int_{\mathbb T}\widehat f(z)z^n\,dm_{\mathbb T}(z),\qquad \widehat f(z)=\sum_{k\in\mathbb Z}f(k)z^{-k}$$ for every $f\in\ell^1(\mathbb Z)$. With $G=\mathbb T$ carrying normalized arc measure, identify $\widehat{\mathbb T}$ with $\mathbb Z$ and use counting measure; then $$f(z)=\sum_{n\in\mathbb Z}\widehat f(n)z^n$$ for almost every $z\in\mathbb T$ whenever $f\in L^1(\mathbb T)$ and $\widehat f\in\ell^1(\mathbb Z)$. These explicit Haar pairs give the usual Fourier-series conventions.

## Facts & Assumptions

**Given:** Countable Choice, the group $G=\mathbb Z$ with counting measure and its dual, and the group $G=\mathbb T=\{z\in\mathbb C:|z|=1\}$ with normalized arc measure and its dual.

[F1] Every continuous character of $\mathbb R$ is $t\mapsto\exp(2\pi i\xi t)$ for a unique $\xi\in\mathbb R$, and $\mathbb T$ is the compact group $\mathbb R/\mathbb Z$ via $[t]\mapsto\exp(2\pi it)$ ([[lem-continuous-characters-of-the-real-line-are-exponentials]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[def-complex-exponential]]); $\exp(2\pi i\xi)=1$ exactly when $\xi\in\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F2] On the discrete domain $\mathbb Z$, the compact-open topology is pointwise convergence ([[lem-compact-open-topology-on-a-discrete-domain-is-pointwise]], [[def-pontryagin-dual-and-compact-open-topology]]). On compact $\mathbb T$, compact-open convergence of characters is uniform convergence on $\mathbb T$ ([[def-pontryagin-dual-and-compact-open-topology]]).

[F3] Normalized arc measure $dm_{\mathbb T}=dt/(2\pi)$ is translation invariant and has total mass one, while counting measure on $\mathbb Z$ is translation invariant and Radon ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]]). The trigonometric characters are orthonormal, so $\int_{\mathbb T}z^m\,dm_{\mathbb T}(z)=1$ for $m=0$ and $0$ for every nonzero integer $m$ ([[lem-trigonometric-characters-are-orthonormal]]).

[F4] Assuming Countable Choice, the Fejer means satisfy $\|\sigma_Nf-f\|_{L^1(\mathbb T)}\to0$ for every $f\in L^1(\mathbb T)$ ([[thm-fejer-convergence-in-lp]], with $p=1$).



**Proof technique:** direct.

## Proof

1.1 (The dual identifications.) A character $\chi:\mathbb Z\to\mathbb T$ is determined by $z:=\chi(1)$, and each $z\in\mathbb T$ gives $\gamma_z(k)=z^k$. This is a group isomorphism $\mathbb T\to\widehat{\mathbb Z}$. Its inverse is evaluation at $1$, while each evaluation $z\mapsto z^k$ is continuous; [F2] therefore makes this a homeomorphism. For a character $\chi:\mathbb T\to\mathbb T$, lift $t\mapsto\chi(e^{2\pi it})$ to $\mathbb R$ and apply [F1]; periodicity forces the resulting frequency to be an integer. Thus every character is $z\mapsto z^n$ for a unique $n\in\mathbb Z$. Since the compact-open topology on this dual is uniform on $\mathbb T$, and $\sup_{z\in\mathbb T}|z^n-z^m|=2$ for $n\ne m$, $\widehat{\mathbb T}$ is discrete. [F1, F2, algebra]

1.2 (Inversion on $\mathbb T$.) Let $f\in L^1(\mathbb T)$ with $a_n:=\widehat f(n)$ satisfying $\sum_n|a_n|<\infty$. The series $g(z):=\sum_{n\in\mathbb Z}a_nz^n$ converges uniformly; [F3] shows its Fourier coefficients are $a_n$. Its Fejer means are $$\sigma_N f(z)=\sum_{|n|\le N}\left(1-\frac{|n|}{N+1}\right)a_nz^n.$$ Absolute summability implies these weighted sums converge uniformly to $g$: first bound the tail by $\sum_{|n|>M}|a_n|$, then let $N\to\infty$ on the finite central sum. By [F4], $\sigma_Nf\to f$ in $L^1$; uniform convergence also gives $\sigma_Nf\to g$ in $L^1$. Uniqueness of limits yields $f=g$ almost everywhere. Thus counting measure on $\mathbb Z$ gives the displayed dual inversion formula. [F3, F4, algebra]

2.1 The measures in [F3] are Haar measures on the two groups. Under the identifications of step 1.1, the Fourier transforms are $\widehat f(z)=\sum_{k\in\mathbb Z}f(k)z^{-k}$ for $f\in\ell^1(\mathbb Z)$ and $\widehat f(n)=\int_{\mathbb T}f(z)z^{-n}\,dm_{\mathbb T}(z)$ for $f\in L^1(\mathbb T)$. [F3, step 1.1]

3.1 (Inversion on $\mathbb Z$.) For $f\in\ell^1(\mathbb Z)$ the series for $\widehat f$ converges absolutely and uniformly, hence is integrable. Termwise integration and [F3] give, for each $j\in\mathbb Z$, $$\int_{\mathbb T}\widehat f(z)z^j\,dm_{\mathbb T}(z)=\sum_{k\in\mathbb Z}f(k)\int_{\mathbb T}z^{j-k}\,dm_{\mathbb T}(z)=f(j).$$ Thus normalized arc measure gives the displayed inversion formula for counting measure on $\mathbb Z$. [F3, step 2.1, algebra]

4.1 Steps 1.1 and 2.1 identify the dual groups and Haar measures, step 3.1 proves inversion for $\mathbb Z$, and step 1.2 proves Fourier-series inversion on $\mathbb T$ for summable Fourier coefficients. These explicit pairs give the usual normalization conventions. [step 1.1, step 2.1, step 3.1, step 1.2] ∎
