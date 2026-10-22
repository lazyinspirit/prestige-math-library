---
id: ex-csm-frontier-mft-nonlocal-warning
kind: example
title: "Two-site boundary-driven SSEP has a nonproduct stationary law for unequal reservoir rates"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
physical_scope: null
sources:
  references:
    - title: "Lorenzo Bertini, Alberto De Sole, Davide Gabrielli, Giovanni Jona-Lasinio and Claudio Landim, Macroscopic fluctuation theory"
      url: "https://arxiv.org/pdf/1404.6466"
      locator: "Section V.D: the boundary-driven one-dimensional SSEP and its generally nonlocal quasi-potential."
    - title: "Bernard Derrida, Lecture notes on large deviations in non-equilibrium diffusive systems"
      url: "https://arxiv.org/pdf/2505.15618"
      locator: "Sections 10.2 and 13.2: long-range correlations and nonlocal density functionals for the open SSEP."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Fix $\alpha,\beta\in(0,1)$ and set $\Omega=\{0,1\}^2$. For $\eta=(\eta_1,\eta_2)\in\Omega$, let $\eta_i$ denote its $i$th coordinate. Time is measured in units of the bond-swap rate, so that this rate is $1$. For every real function $g:\Omega\to\mathbb R$, define the generator $L$ acting on observables by

$$
(Lg)(\eta):=\alpha(1-\eta_1)\bigl(g(1,\eta_2)-g(\eta)\bigr)+(1-\alpha)\eta_1\bigl(g(0,\eta_2)-g(\eta)\bigr)+\beta(1-\eta_2)\bigl(g(\eta_1,1)-g(\eta)\bigr)+(1-\beta)\eta_2\bigl(g(\eta_1,0)-g(\eta)\bigr)+\mathbf 1_{\{\eta_1\ne\eta_2\}}\bigl(g(\eta_2,\eta_1)-g(\eta)\bigr).
$$

Here $\mathbf 1_A$ is $1$ when the condition $A$ holds and $0$ otherwise. This rate formula specifies the two reservoir flips and the bond swap of the finite-state continuous-time chain. Let $\mathcal P(\Omega)$ be the set of probability mass functions $\pi:\Omega\to[0,1]$, so $\sum_{\eta\in\Omega}\pi(\eta)=1$. A law $\pi\in\mathcal P(\Omega)$ is stationary when $\sum_{\eta\in\Omega}\pi(\eta)(Lg)(\eta)=0$ for every real $g:\Omega\to\mathbb R$. Define $\mathbb E_\pi[g]:=\sum_{\eta\in\Omega}\pi(\eta)g(\eta)$, $m_i:=\mathbb E_\pi[\eta_i]$, and

$$\operatorname{Cov}_\pi(\eta_1,\eta_2):=\mathbb E_\pi[\eta_1\eta_2]-m_1m_2.$$

For $i=1,2$, the marginal is $\pi_i(a):=\sum_{\eta\in\Omega:\,\eta_i=a}\pi(\eta)$ for $a\in\{0,1\}$; $\pi$ is a product law when $\pi(a,b)=\pi_1(a)\pi_2(b)$ for all $a,b\in\{0,1\}$. The unique stationary law of this chain has

$$\operatorname{Cov}_{\pi}(\eta_1,\eta_2)=-\frac{(\alpha-\beta)^2}{18}.$$

Consequently, the stationary law is not a product when $\alpha\ne\beta$. This is an exact finite-chain correlation example, not a derivation of the continuum quasi-potential.

## Transition graph

Each vertex is labelled by $(\eta_1,\eta_2)$. Horizontal arrows change site $1$ by a reservoir flip, vertical arrows change site $2$, and the two diagonal arrows are the bond swap. An arrow label is its transition rate; the diagram omits events that leave the state unchanged. The generator and proof below are complete without relying on the diagram.

```tikz
\begin{tikzpicture}[>=stealth]
\node (s00) at (0,0) {$00$};
\node (s10) at (3.4,0) {$10$};
\node (s01) at (0,-2.8) {$01$};
\node (s11) at (3.4,-2.8) {$11$};
\draw[->] (s00) to[bend left=16] node[above] {$\alpha$} (s10);
\draw[->] (s10) to[bend left=16] node[below] {$1-\alpha$} (s00);
\draw[->] (s01) to[bend left=16] node[above] {$\alpha$} (s11);
\draw[->] (s11) to[bend left=16] node[below] {$1-\alpha$} (s01);
\draw[->] (s00) to[bend left=16] node[left] {$\beta$} (s01);
\draw[->] (s01) to[bend left=16] node[right] {$1-\beta$} (s00);
\draw[->] (s10) to[bend left=16] node[left] {$\beta$} (s11);
\draw[->] (s11) to[bend left=16] node[right] {$1-\beta$} (s10);
\draw[<->] (s10) to[bend left=10] node[right] {$1$} (s01);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** $\alpha,\beta\in(0,1)$ and the four-state generator specified in the Example.

[A1] $L$ is the generator defined in the Example by the rate-weighted increments, and $\pi$ is stationary in the stated sense $\sum_{\eta\in\Omega}\pi(\eta)(Lg)(\eta)=0$ for every real function $g$ on $\Omega$.

## Verification

1.1 For the coordinate observables, the generator gives $L\eta_1=\alpha+\eta_2-2\eta_1$ and $L\eta_2=\beta+\eta_1-2\eta_2$. If $\pi$ is stationary and $m_i:=\mathbb E_\pi\eta_i$, then $\mathbb E_\pi L\eta_i=0$, so $2m_1-m_2=\alpha$ and $2m_2-m_1=\beta$. Solving gives $m_1=(2\alpha+\beta)/3$ and $m_2=(\alpha+2\beta)/3$. [A1, algebra]

2.1 Let $q:=\mathbb E_\pi(\eta_1\eta_2)$. The swap does not change $\eta_1\eta_2$, and the two reservoir flips give $L(\eta_1\eta_2)=\alpha\eta_2+\beta\eta_1-2\eta_1\eta_2$. Stationarity therefore yields $2q=\alpha m_2+\beta m_1$, hence $q=(\alpha^2+4\alpha\beta+\beta^2)/6$. [A1, step 1.1, algebra]

3.1 Substituting the moments from steps 1.1 and 2.1 gives $q-m_1m_2=\frac{\alpha^2+4\alpha\beta+\beta^2}{6}-\frac{(2\alpha+\beta)(\alpha+2\beta)}{9}=-\frac{(\alpha-\beta)^2}{18}$. If $\alpha\ne\beta$, this covariance is nonzero, whereas two independent Bernoulli occupations have zero covariance; thus $\pi$ is not a product law. [step 1.1, step 2.1, algebra]

3.2 Define probabilities by $\pi_{11}=q$, $\pi_{10}=m_1-q$, $\pi_{01}=m_2-q$, and $\pi_{00}=1-m_1-m_2+q$. They sum to one; $\pi_{11}>0$ and $\pi_{00}=[(1-\alpha)^2+4(1-\alpha)(1-\beta)+(1-\beta)^2]/6>0$. For fixed $\beta$, $6\pi_{10}=g(\alpha)$ where $g(a)=a(4-4\beta-a)+\beta(2-\beta)$ is concave on $[0,1]$ and has positive endpoint values $g(0)=\beta(2-\beta)$ and $g(1)=(1-\beta)(3+\beta)$; hence $\pi_{10}>0$. By interchanging $\alpha$ and $\beta$ the same argument gives $\pi_{01}>0$. [step 1.1, step 2.1, algebra]

4.1 The probabilities in step 3.2 have the moments in steps 1.1 and 2.1, so their expectation of $L$ vanishes on $1,\eta_1,\eta_2,\eta_1\eta_2$. These four functions form a basis of all real functions on $\Omega$, hence the probability vector is stationary. Conversely, every stationary law must satisfy the same three moment equations, which determine $m_1,m_2,q$ uniquely and then determine all four atom probabilities; therefore this stationary law is unique. If $\alpha=\beta=r$, the same probabilities reduce to $\pi_{00}=(1-r)^2$, $\pi_{10}=\pi_{01}=r(1-r)$, and $\pi_{11}=r^2$, the product Bernoulli law. Step 3.1 gives the claimed covariance. [A1, step 1.1, step 2.1, step 3.1, step 3.2, algebra] ∎

