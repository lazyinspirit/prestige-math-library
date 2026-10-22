---
id: ex-csm-frontier-ising-explicit-contraction
kind: example
title: "Nearest-neighbor Ising influence bound"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-countable-choice
  - def-csm-frontier-dobrushin-matrix
  - lem-csm-ising-influence-bound
  - thm-csm-frontier-dobrushin-comparison
dependency_roles:
  def-countable-choice: mathematical-premise
  def-csm-frontier-dobrushin-matrix: mathematical-premise
  lem-csm-ising-influence-bound: mathematical-premise
  thm-csm-frontier-dobrushin-comparison: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author-hosted book, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, §3.1, finite-volume Ising Gibbs distributions with boundary conditions, printed pp. 80–82 (PDF pp. 97–99); Chapter 6, §6.5.2, Dobrushin coefficients and uniqueness, printed pp. 268–271 (PDF pp. 285–288)."
    - title: "Patrick Rebeschini and Ramon van Handel, Comparison Theorems for Gibbs Measures"
      url: "https://arxiv.org/pdf/1308.4117"
      locator: "§2.3, Corollary 2.6, the finite-spin single-site Dobrushin comparison criterion, PDF pp. 8–9."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Assume Countable Choice: every countable family of nonempty sets has a choice function. Let $d\geq1$, let $X=\{-1,+1\}^{\mathbb Z^d}$ with its cylinder-generated Borel $\sigma$-algebra, fix $\beta>0$ and $J\in\mathbb R$, and let $h=(h_i)_{i\in\mathbb Z^d}\in\mathbb R^{\mathbb Z^d}$ be a site field. For $i,j\in\mathbb Z^d$, put $J_{ij}=J$ if $\lVert i-j\rVert_1=1$ and $J_{ij}=0$ otherwise. For a finite $\Lambda\subset\mathbb Z^d$ and exterior configuration $\eta\in\{-1,+1\}^{\Lambda^c}$, write $\widehat\sigma_i=\sigma_i$ for $i\in\Lambda$ and $\widehat\sigma_i=\eta_i$ otherwise, and define

$$H_\Lambda^h(\sigma_\Lambda\mid\eta):=-\sum_{\substack{\{i,j\}\subset\mathbb Z^d:\,\lVert i-j\rVert_1=1,\ \{i,j\}\cap\Lambda\ne\varnothing}}J\widehat\sigma_i\widehat\sigma_j-\sum_{i\in\Lambda}h_i\sigma_i.$$

The pair sum is over unordered pairs and is finite because each site has $2d$ nearest neighbors. For bounded measurable $f:X\to\mathbb R$, set

$$Z_\Lambda^{h,\eta}:=\sum_{\tau\in\{-1,+1\}^\Lambda}e^{-\beta H_\Lambda^h(\tau\mid\eta)},\qquad \gamma_\Lambda^h(f\mid\eta):=(Z_\Lambda^{h,\eta})^{-1}\sum_{\tau\in\{-1,+1\}^\Lambda}f(\tau\eta)e^{-\beta H_\Lambda^h(\tau\mid\eta)}.$$

Here $\tau\eta$ denotes the configuration equal to $\tau$ on $\Lambda$ and to $\eta$ on $\Lambda^c$.

For each field $h$, these kernels are positive normalized probability kernels. They are proper, meaning that they leave every event determined by the exterior spins fixed; consistent, meaning $\gamma_\Lambda^h\gamma_\Delta^h=\gamma_\Lambda^h$ whenever finite $\Delta\subseteq\Lambda$; and finite range, meaning that for every finite $\Delta$ and cylinder event $A$, $\eta\mapsto\gamma_\Delta^h(\mathbf1_A\mid\eta)$ depends on only finitely many exterior coordinates.

For $i\ne j$, write $\gamma_i^h(\cdot\mid\eta):=\gamma_{\{i\}}^h(\cdot\mid\eta)$ for the one-site law and define the influence coefficient

$$c_{ij}^h:=\sup_{\eta,\eta':\,\eta_k=\eta'_k\ (k\ne j)}\frac12\sum_{s\in\{-1,+1\}}|\gamma_i^h(s\mid\eta)-\gamma_i^h(s\mid\eta')|,\qquad c_{ii}^h:=0.$$

Then $c_{ij}^h\leq\tanh(\beta|J|)$ when $\lVert i-j\rVert_1=1$ and $c_{ij}^h=0$ otherwise. Consequently, if

$$2d\tanh(\beta|J|)<1,$$

then every influence row sum is strictly below $1$. More generally, if $2d\tanh(\beta|J|)<1$, then for any two site fields $h,\widetilde h\in\mathbb R^{\mathbb Z^d}$ with the same $d,\beta,J$, the matrix $C$ defined by $C_{ij}=\tanh(\beta|J|)$ when $\lVert i-j\rVert_1=1$ and $C_{ij}=0$ otherwise is a common finite-range influence envelope with row sums below $1$. Thus, under this inequality, the finite-volume comparison estimate of the Dobrushin comparison theorem applies to $\gamma^h$ and $\gamma^{\widetilde h}$. This is a sufficient criterion; failure of the inequality is not claimed to imply nonuniqueness.

## Example references

[[def-countable-choice]]

[[def-csm-frontier-dobrushin-matrix]]

[[lem-csm-ising-influence-bound]]

[[thm-csm-frontier-dobrushin-comparison]]

## Facts & Assumptions

**Given:** Countable Choice, the nearest-neighbor Ising couplings, and one or two site fields as specified in the Statement.

[A1] Countable Choice means that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] For the finite-range Ising conditional energy, changing only boundary spin $j$ changes the one-site law at $i$ by at most $\tanh(\beta|J_{ij}|)$ in half-total-variation distance; it gives zero influence when $J_{ij}=0$ ([[lem-csm-ising-influence-bound]]).

[F2] Under Countable Choice, proper consistent finite-range specifications on a finite-alphabet lattice with a uniform finite one-site influence radius and a common nonnegative finite-range influence envelope of supremum row sum below $1$ satisfy the finite-volume Dobrushin comparison estimate; each also has a unique DLR state and the stated infinite-volume comparison estimate ([[thm-csm-frontier-dobrushin-comparison]]).

## Verification

1.1 For finite $\Lambda$, the pair sum has at most $2d|\Lambda|$ terms meeting $\Lambda$, and the field sum is finite, so every energy is real and the finite partition sum is strictly positive. The kernel is normalized by its definition. For every Borel event, each replacement map $\eta\mapsto\tau\eta$ is measurable, so the kernel probability is measurable; replacing spins in $\Lambda$ leaves every exterior-measurable event fixed. For a cylinder event, its kernel probability depends only on its finite support outside $\Lambda$ and the finitely many exterior neighbors of $\Lambda$, so it has finite range. [given, algebra]

1.2 For each site $i$, exactly $2d$ sites $j$ satisfy $\lVert i-j\rVert_1=1$. By [F1], each corresponding influence coefficient is at most $\tanh(\beta|J|)$, while every other coefficient vanishes. Therefore $\sum_jc_{ij}^h\leq2d\tanh(\beta|J|)$ for every $i$. [given, F1, algebra]

2.1 If finite $\Delta\subseteq\Lambda$, split $H_\Lambda^h(\sigma_\Lambda\mid\eta)$ into the pair terms whose support meets $\Delta$ and field terms on $\Delta$, which equal $H_\Delta^h(\sigma_\Delta\mid\sigma_{\Lambda\setminus\Delta}\eta)$, and the remaining terms $K(\sigma_{\Lambda\setminus\Delta},\eta)$, which do not depend on $\sigma_\Delta$. Hence $Z_\Lambda^{h,\eta}=\sum_{\xi\in\{-1,+1\}^{\Lambda\setminus\Delta}}e^{-\beta K(\xi,\eta)}Z_\Delta^{h,\xi\eta}$, and $\gamma_\Lambda^h(\gamma_\Delta^h f\mid\eta)=\frac{1}{Z_\Lambda^{h,\eta}}\sum_{\xi\in\{-1,+1\}^{\Lambda\setminus\Delta}}e^{-\beta K(\xi,\eta)}\sum_{\tau\in\{-1,+1\}^{\Delta}}f(\tau\xi\eta)e^{-\beta H_\Delta^h(\tau\mid\xi\eta)}=\gamma_\Lambda^h(f\mid\eta)$. Thus the kernels form the stated proper, consistent, finite-range specification. [given, step 1.1, algebra]

3.1 If $2d\tanh(\beta|J|)<1$, the matrix $C$ in the Statement dominates the influence matrices of both $\gamma^h$ and $\gamma^{\widetilde h}$, has radius $1$ in the $\ell^\infty$ metric, and has row sums below $1$. The constructed specifications are proper, consistent, and finite range by steps 1.1–1.2. By Countable Choice and [F2], the hypotheses of the comparison theorem hold and its finite-volume comparison estimate applies. The inequality is only sufficient; failure of the bound is not claimed to imply nonuniqueness. [given, A1, F1, F2, step 1.1, step 1.2, step 2.1, algebra] ∎
