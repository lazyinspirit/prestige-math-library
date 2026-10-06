---
id: lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb
kind: lemma
title: "The Dirac comb of a full-rank lattice transforms to the dual comb"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
design_row: FR-19
deps: [def-full-rank-lattice-covolume-and-dual-lattice, thm-poisson-summation-for-a-full-rank-lattice, def-dirac-comb, def-dirac-delta-and-its-derivatives, def-fourier-transform-of-a-tempered-distribution, thm-finite-seminorm-bound-characterizes-tempered-distributions, thm-p-series-real-exponents, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-countable-choice, def-schwartz-space-and-its-seminorms, thm-multinomial-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 23, Definition 23.1 and Theorem 23.5: the periodisation identity behind the distributional comb duality, PDF pp. 135-138"
    - title: "Noam Elkies, Theta functions and weighted theta functions of Euclidean lattices (author PDF)"
      url: "https://people.math.harvard.edu/~elkies/aws09.pdf"
      locator: "§2, Theorem 2 and the discriminant normalisation (26)-(27): the general-lattice Poisson identity whose unit case is the comb duality, printed pp. 9-11"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $\Lambda$ be a
full-rank lattice with covolume $c$ and dual $\Lambda^*$. The $\Lambda$-Dirac
comb $\operatorname{comb}_\Lambda:=\sum_{\lambda\in\Lambda}\delta_\lambda$,
defined by $\langle\operatorname{comb}_\Lambda,\varphi\rangle=\sum_{\lambda}\varphi(\lambda)$,
is a tempered distribution, and
$$\mathcal F\operatorname{comb}_\Lambda=c^{-1}\operatorname{comb}_{\Lambda^*}\qquad\text{in }\mathcal S'(\mathbb R^n),$$
that is,
$\langle\mathcal F\operatorname{comb}_\Lambda,\varphi\rangle=c^{-1}\sum_{\lambda^*\in\Lambda^*}\varphi(\lambda^*)$
for every $\varphi\in\mathcal S(\mathbb R^n)$. For $\Lambda=\mathbb Z^n$
($c=1$, $\Lambda^*=\mathbb Z^n$) this is Fourier-invariance of the unit comb,
the published
[[thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions]];
the scaled case here ($\Lambda=h\mathbb Z^n$, $c=h^n$) is what the sampling
lemma below consumes.

## Facts & Assumptions

**Given:** Countable Choice, the full-rank lattice $\Lambda=A\mathbb Z^n$ with covolume $c$ and dual $\Lambda^*=A^{-T}\mathbb Z^n$ ([[def-full-rank-lattice-covolume-and-dual-lattice]]), the Dirac distributions $\delta_\lambda$ ([[def-dirac-delta-and-its-derivatives]]), and the unit comb conventions of [[def-dirac-comb]].

[F1] For every integer $L\ge0$ and every $x\in\mathbb R^n$, $|\varphi(x)|\le A_{n,L}(1+|x|)^{-L}\max_{|\alpha|\le L}p_{\alpha,0}(\varphi)$. Indeed $1+|x|\le1+\sum_j|x_j|$, whose $L$th power is a finite sum of monomials $|x^\alpha|$ with $|\alpha|\le L$ and positive coefficients by [[thm-multinomial-theorem]]; multiplying by $|\varphi(x)|$ bounds each monomial by its seminorm ([[def-schwartz-space-and-its-seminorms]]). At integer points this is the unit-comb estimate of [[def-dirac-comb]].

[F2] Transporting shells by $\lambda=Ak$: $|\lambda|\le r$ implies $|k|\le K r$ for a constant $K$, and conversely $m\le|\lambda|<m+1$ implies $m/K'\le|k|<K'(m+1)$ for constants, so the shell has at most $C(1+m)^n$ lattice points; likewise for $\Lambda^*=A^{-T}\mathbb Z^n$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[def-full-rank-lattice-covolume-and-dual-lattice]]).

[F3] $\sum_{m\ge1}m^{n-L}<\infty$ for real $L>n+1$; a finite-seminorm bound characterises tempered distributions ([[thm-p-series-real-exponents]], [[thm-finite-seminorm-bound-characterizes-tempered-distributions]]).

[F4] The Fourier transform of a tempered distribution is defined by $\langle\mathcal Fu,\varphi\rangle=\langle u,\mathcal F\varphi\rangle$ ([[def-fourier-transform-of-a-tempered-distribution]]), and on Schwartz functions $\mathcal F^2=R$ with $R\varphi(x)=\varphi(-x)$ ([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F5] Poisson summation for a full-rank lattice: for $\psi\in\mathcal S(\mathbb R^n)$, $\sum_{\lambda\in\Lambda}\psi(\lambda)=c^{-1}\sum_{\lambda^*\in\Lambda^*}\widehat\psi(\lambda^*)$ ([[thm-poisson-summation-for-a-full-rank-lattice]]).

## Proof

**Proof technique:** direct.

1.1 Fix an integer $L>n+1$. For $\varphi\in\mathcal S$, the bound of [F1] and the shell count of [F2] give $\sum_{\lambda\in\Lambda}|\varphi(\lambda)|\le A_{n,L}\sum_{m\ge0}C(1+m)^n(1+m)^{-L}\max_{|\alpha|\le L}p_{\alpha,0}(\varphi)$, which is finite by [F3]; hence the series defining $\operatorname{comb}_\Lambda$ converges absolutely and satisfies a single finite-seminorm estimate, so $\operatorname{comb}_\Lambda$ is a tempered distribution by [F3]. On a compactly supported test only finitely many $\delta_\lambda$ remain, matching the locally finite sum of [[def-dirac-delta-and-its-derivatives]], so the definition is the intended one. [F1, F2, F3, given, algebra]

2.1 For $\varphi\in\mathcal S$, the definition of the distributional transform [F4] and the definition of the comb give $\langle\mathcal F\operatorname{comb}_\Lambda,\varphi\rangle=\langle\operatorname{comb}_\Lambda,\mathcal F\varphi\rangle=\sum_{\lambda\in\Lambda}\widehat\varphi(\lambda)$. Applying the lattice Poisson formula [F5] to the Schwartz function $\psi:=\widehat\varphi$, and using $\mathcal F^2=R$ on Schwartz functions [F4], $\sum_\lambda\widehat\varphi(\lambda)=c^{-1}\sum_{\lambda^*}\widehat{\widehat\varphi}(\lambda^*)=c^{-1}\sum_{\lambda^*}\varphi(-\lambda^*)$. The map $\lambda^*\mapsto-\lambda^*$ is a bijection of the group $\Lambda^*$, so the last sum equals $c^{-1}\sum_{\lambda^*}\varphi(\lambda^*)=\langle c^{-1}\operatorname{comb}_{\Lambda^*},\varphi\rangle$. [step 1.1, F4, F5, given, algebra]

3.1 Equality of the two tempered distributions on every Schwartz test proves $\mathcal F\operatorname{comb}_\Lambda=c^{-1}\operatorname{comb}_{\Lambda^*}$; at $\Lambda=\mathbb Z^n$, where $c=1$ and $\Lambda^*=\mathbb Z^n$, this specialises to the published unit-comb theorem [[thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions]], which is hereby a cross-check rather than a supplier. Countable Choice is inherited from the Poisson theorem and the distributional Fourier interface. [step 2.1, F5, given] ∎ 