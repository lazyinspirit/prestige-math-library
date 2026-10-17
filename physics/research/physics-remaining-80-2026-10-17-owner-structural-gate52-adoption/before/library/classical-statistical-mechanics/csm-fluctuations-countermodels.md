---
page: csm-fluctuations-countermodels
title: "Finite Bernoulli fluctuations and matching exponential rates"
status: draft
library: physics
requires:
  - csm-exact-models
  - finite-probability-and-the-probabilistic-method
items:
  - def-csm-finite-variance
  - pthm-csm-bernoulli-fluctuation-bounds
  - pthm-csm-nonadditive-phase-countermodel
  - pthm-csm-walk-recurrence-and-entropy
examples: []
---

This page first defines variance for finite real random variables, then proves exact conditional statements for three finite model families: Bernoulli product counts with polynomial and exponential concentration bounds; a size-dependent global three-sector model whose positive-temperature limit has a mean-energy jump and an explicit canonical/shell inequivalence witness; and a symmetric walk whose fixed-time marginals converge under diffusive scaling, alongside periodic and finite-state counterexamples to mixing and coarse-entropy monotonicity.

The sampling laws and state preparations are stipulated inputs. No measured counts, apparatus behavior, laboratory independence, equilibration, deterministic collision limit, or empirical inference is asserted. Finite model probabilities are not observations, and low probability is not logical impossibility.

For the sector model, set the dimensionless horizontal coordinate $\widehat\beta=\beta\epsilon$. The exact limiting normalized log partition is $\psi(\widehat\beta)=\max\{0,\log4-2\widehat\beta\}$ on the positive-temperature branch; the plotted corner is at $\widehat\beta=\log2$. The drawing is a rendering of this formula only; the proof and one-sided slopes are established in [[pthm-csm-nonadditive-phase-countermodel]].

```tikz
\pgfmathsetmacro{\betac}{ln(2)}
\pgfmathsetmacro{\psimax}{ln(4)}
\begin{tikzpicture}[x=1.5cm,y=1cm]
  \draw[->] (-0.08,0) -- (2.1,0) node[right] {$\widehat\beta$};
  \draw[->] (0,-0.08) -- (0,\psimax+0.25) node[above] {$\psi$};
  \draw[thick] (0,\psimax) -- (\betac,0) -- (2.0,0);
  \draw[dashed] (\betac,0) -- (\betac,0.65);
  \node[left] at (0,\psimax) {$\log4$};
  \node[below] at (\betac,0) {$\log2$};
\end{tikzpicture}
```

