---
id: thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound
aliases: [nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound]
kind: theorem
domain: mathematics
title: "L^2 potential infinitesimal kinetic bound"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-kato-rellich, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, def-sobolev-space-wkp-and-its-norm, thm-plancherel, cor-cauchy-schwarz-inequality-for-l-two, lem-schwartz-space-is-dense-in-l-two, def-relative-boundedness-with-respect-to-an-operator, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-kato-rellich: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-plancherel: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.1 pp. 133-136 (the Kato-Rellich theorem) and Section 10.1 p. 221 (L^p potentials as infinitesimally small perturbations)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "H. Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Chapter 9 (Sobolev embeddings and the Fourier characterisation of H^2; failure of pointwise bounds in the critical case)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^2(\mathbb R^3;\mathbb R)$ and let $H_0=-\Delta$ with
$D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$ be the free operator
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]],
[[def-sobolev-space-wkp-and-its-norm]]). Then:

(a) *Sup-norm interpolation.* There is a constant $C$ such that for every
$u\in H^2(\mathbb R^3)$ and every $R\ge1$,
$$\|u\|_\infty\le C\Bigl(R^{3/2}\|u\|_2+R^{-1/2}\|\Delta u\|_2\Bigr).$$

(b) *Infinitesimal smallness.* The multiplier $M_V$ with
$D(M_V):=\{u\in L^2:Vu\in L^2\}$ is $H_0$-bounded with relative bound $0$: for
every $\eta>0$ there is $b_\eta<\infty$ such that
$$\|Vu\|_2\le\eta\|H_0u\|_2+b_\eta\|u\|_2\qquad(u\in D(H_0))$$
([[def-relative-boundedness-with-respect-to-an-operator]]).

(c) *Self-adjointness.* $H:=H_0+M_V$ is self-adjoint on $D(H_0)$ and bounded
below ([[thm-kato-rellich]]).

The potential is real-valued but need not be bounded, continuous or compactly
supported; no decay rate is assumed.

## Facts & Assumptions

**Given:** $V\in L^2(\mathbb R^3;\mathbb R)$; $H_0=-\Delta$ on $W^{2,2}$;
$u\in H^2(\mathbb R^3)$; $R\ge1$; $\eta>0$.

[F1] $H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ is self-adjoint with $D(H_0)=W^{2,2}$, and for $u\in H^2$ one has $\|H_0u\|_2=\|4\pi^2|\xi|^2\mathcal F_2u\|_2$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

[F2] Cauchy–Schwarz for $L^2$ and the elementary integral estimate $\int_{|\xi|>R}|\xi|^{-4}d\xi=4\pi R^{-1}$, and $\int_{|\xi|\le R}d\xi=\frac{4\pi}{3}R^3$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-plancherel]], algebra).

[F3] A bounded measurable multiplier $M_V$ with $V$ real is self-adjoint with domain $\{u:Vu\in L^2\}$, and Kato–Rellich applies to any symmetric perturbation with relative bound $<1$ ([[thm-kato-rellich]], [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

## Proof

1.1 [Splitting the Fourier integral] For $u\in H^2$ and a.e. $x$, $u(x)=\int_{|\xi|\le R}\mathcal F_2u(\xi)e^{2\pi ix\cdot\xi}d\xi+\int_{|\xi|>R}\mathcal F_2u(\xi)e^{2\pi ix\cdot\xi}d\xi$, so by Cauchy–Schwarz [F2] and [F1] the modulus is at most $\bigl(\frac{4\pi}{3}R^3\bigr)^{1/2}\|u\|_2+\bigl(4\pi R^{-1}\bigr)^{1/2}\frac{\|H_0u\|_2}{4\pi^2}$, and taking the essential supremum gives (a) with $C$ the maximum of the two explicit constants. [F1, F2, algebra]

2.1 [Multiplier bound] $|V(x)|<\infty$ a.e. and $\|Vu\|_2\le\|V\|_2\|u\|_\infty$ by Hölder/Cauchy–Schwarz; inserting step 1.1 gives $\|Vu\|_2\le C\|V\|_2R^{3/2}\|u\|_2+C\|V\|_2R^{-1/2}\|H_0u\|_2$. Given $\eta>0$ choose $R\ge1$ with $C\|V\|_2R^{-1/2}\le\eta$; then $b_\eta:=C\|V\|_2R^{3/2}$ is finite and (b) holds. [step 1.1, F2, algebra]

3.1 [Self-adjointness] By [F3] the multiplier $M_V$ is symmetric with domain containing $D(H_0)$ (it contains every $u$ with $Vu\in L^2$, and $H^2\subset L^\infty$ by step 1.1, so $Vu\in L^2$ for every $u\in H^2$), and its relative bound is $0<1$ by step 2.1; Kato–Rellich gives that $H_0+M_V$ is self-adjoint on $D(H_0)$ and bounded below. [step 2.1, F3, algebra] ∎
