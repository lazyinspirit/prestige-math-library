---
id: lem-ewald-gaussian-poisson-periodization
kind: lemma
title: "Poisson periodization of a normalized Gaussian on a full-rank lattice"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    def-countable-choice,
    def-ewald-three-dimensional-periodic-source-data,
    lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization,
    lem-ewald-screened-coulomb-kernel-and-self-limit,
    thm-poisson-summation-for-a-full-rank-lattice
  ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lior Silberman, Fourier Series and the Poisson Summation Formula (Math
        613 lecture notes)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+Poisson\
        Sum.pdf"
      locator: "§3, Exercise 13, printed p. 4: periodization over a lattice and the
        $2\\pi$ Fourier convention."
    - title: "Hark Lee and Wei Cai, Ewald Summation for Coulomb Interactions in a
        Periodic Supercell (2009 lecture notes)"
      url: "https://warwick.ac.uk/fac/sci/moac/degreescopy/degrees-copy/modules/ch926\
        /lectures/molsim/ewaldsummationnotes.pdf"
      locator: "§5, equations (32)–(36), printed pp. 5–6: the normalized Gaussian
        reciprocal coefficient and reciprocal lattice frequencies."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and use the full-rank cell and angular frequencies of
[[def-ewald-three-dimensional-periodic-source-data]]. Here $\mathcal S(\mathbb R^3)$
denotes the Schwartz space of smooth functions whose derivatives decay faster
than every inverse polynomial. For $\alpha>0$ let
$$g_\alpha(x)=\frac{\alpha^3}{\pi^{3/2}}e^{-\alpha^2|x|^2}.$$
For every $x\in\mathbb R^3$ the two series below converge absolutely, locally
uniformly in $x$, and
$$\sum_{\lambda\in\Lambda}g_\alpha(x+\lambda)= \frac1V\sum_{k\in\mathbb Z^3} e^{-|\kappa_k|^2/(4\alpha^2)}e^{i\kappa_k\cdot x}.$$
The lattice Poisson theorem is applied only to this Schwartz Gaussian; it is not
applied to a compactly supported or finite-smoothness assignment window.

## Facts & Assumptions

**Given:** Countable Choice, an invertible cell matrix $A$, $V=|\det A|$,
$\Lambda=A\mathbb Z^3$, $\Lambda^*=A^{-T}\mathbb Z^3$, $\kappa_k=2\pi A^{-T}k$,
$\alpha>0$, and $x\in\mathbb R^3$.

[A1] Countable Choice is required by the published lattice Poisson theorem and the Gaussian transform supplier ([[def-countable-choice]]).

[F1] For $f\in\mathcal S(\mathbb R^3)$, both lattice series converge absolutely and the periodization satisfies $\sum_{\lambda\in\Lambda}f(x+\lambda)=V^{-1}\sum_{\xi\in\Lambda^*}\widehat f(\xi)e^{2\pi i\xi\cdot x}$ under Countable Choice ([[thm-poisson-summation-for-a-full-rank-lattice]]).

[F2] With $\widehat f(\xi)=\int_{\mathbb R^3}f(x)e^{-2\pi i\xi\cdot x}dx$, $\mathcal F(e^{-\pi t|x|^2})(\xi)=t^{-3/2}e^{-\pi|\xi|^2/t}$ for $t>0$ under Countable Choice ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F3] The normalized Gaussian in the screened-kernel definition is $g_\alpha(x)=\alpha^3\pi^{-3/2}e^{-\alpha^2|x|^2}$ ([[lem-ewald-screened-coulomb-kernel-and-self-limit]]).

[F4] The lattice is $A\mathbb Z^3$, its dual is $A^{-T}\mathbb Z^3$, and the physical angular frequency for index $k$ is $\kappa_k=2\pi A^{-T}k$ ([[def-ewald-three-dimensional-periodic-source-data]]).

## Proof
**Proof technique:** direct.

1.1 Put $t=\alpha^2/\pi>0$. By [F2], the Fourier transform of $e^{-\pi t|x|^2}$ is $t^{-3/2}e^{-\pi|\xi|^2/t}$. Multiplying the input by $\alpha^3/\pi^{3/2}$ cancels $t^{-3/2}=(\pi/\alpha^2)^{3/2}$, so $\widehat g_\alpha(\xi)=e^{-\pi^2|\xi|^2/\alpha^2}.$ Each derivative of $g_\alpha$ is a polynomial times $e^{-\alpha^2|x|^2}$. For every degree $d$ and integer $N$, choose an integer $m>(d+N)/2$; the inequality $e^y\ge y^m/m!$ for $y\ge0$ bounds $|x|^d(1+|x|)^Ne^{-\alpha^2|x|^2}$ on $|x|\ge1$, and continuity bounds it on the unit ball. Hence $g_\alpha\in\mathcal S(\mathbb R^3)$, so [F1] applies. [given, A1, F2, F3, algebra]

1.2 Fix a compact set $C\subset\mathbb R^3$ and choose $R$ with $|x|\le R$ on $C$. Since $A$ is invertible, $|An|\ge c|n|$ for $c=\|A^{-1}\|_2^{-1}>0$. For $|n|\ge2R/c$, $|x+An|\ge c|n|/2$ uniformly on $C$, so $g_\alpha(x+An)\le\alpha^3\pi^{-3/2}e^{-b|n|^2}$ with $b=\alpha^2c^2/4>0$. This majorant is summable: $\sum_{n\in\mathbb Z^3}e^{-b|n|^2}=(\sum_{j\in\mathbb Z}e^{-bj^2})^3<\infty$, since $e^{-bj^2}\le e^{-b|j|}$ for $|j|\ge1$. The remaining finitely many indices have bounded terms. Bounding every series tail by the corresponding majorant tail proves absolute uniform convergence on $C$. [given, F3, F4, algebra]

2.1 Apply [F1] to $g_\alpha$. Every $\xi\in\Lambda^*$ has the unique form $\xi=A^{-T}k$ with $k\in\mathbb Z^3$; by [F4], $2\pi\xi=\kappa_k$. Therefore $\pi^2|\xi|^2/\alpha^2=|\kappa_k|^2/(4\alpha^2)$ and $e^{2\pi i\xi\cdot x}=e^{i\kappa_k\cdot x}$. Substitution in the periodization formula gives exactly the displayed reciprocal series, and [F1] supplies absolute convergence on both sides. At $x=0$, absolute convergence of the reciprocal series gives $\sum_k e^{-|\kappa_k|^2/(4\alpha^2)}<\infty$. Since $|e^{i\kappa_k\cdot x}|=1$, this same sum bounds reciprocal-series tails uniformly in all $x$. Together with step 1.2 this proves both asserted local uniform convergence claims. [A1, F1, F4, step 1.1, step 1.2, algebra] ∎

