---
id: lem-csm-stationary-lattice-entropy-energy
kind: lemma
title: "Stationary lattice entropy and energy densities"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps: ["lem-csm-finite-gibbs-variational-identity", "lem-csm-lattice-product-and-measure-compactness", "def-countable-choice", "def-csm-finite-range-lattice-interaction"]
justified_by: []
dependency_roles: {"lem-csm-finite-gibbs-variational-identity": "mathematical-premise", "lem-csm-lattice-product-and-measure-compactness": "mathematical-premise", "def-countable-choice": "mathematical-premise", "def-csm-finite-range-lattice-interaction": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Chapter 6 §6.12, PDF pp. 329–332 (printed pp. 311–314)."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

Assume Countable Choice and let $A$ be finite nonempty. A consistent translation-stationary family means probability measures $\nu_F$ on $A^F$ for every finite $F\subset\mathbb Z^d$, with $\nu_E=(\pi_E^F)_*\nu_F$ whenever $E\subseteq F$ and $\nu_{F+j}=(\tau_j)_*\nu_F$ for every $j\in\mathbb Z^d$, where $(\pi_E^F x)=x|_E$ and $(\tau_jx)_{i+j}=x_i$. This family extends to a unique translation-stationary probability $\mu$ on the cylinder sigma-algebra. Set $B_n=[-n,n]^d\cap\mathbb Z^d$ for each integer $n\geq1$. For any such stationary $\mu$ and any bounded translation-invariant finite-range interaction $(\mathcal R,(S_r,\Phi_r)_{r\in\mathcal R})$ as in [[def-csm-finite-range-lattice-interaction]], define
$H_n=-\sum_{\sigma\in A^{B_n}}\mu_{B_n}(\sigma)\log\mu_{B_n}(\sigma)$ with $0\log0=0$, and
$u(\mu)=\sum_{r\in\mathcal R}\sum_{a\in A^{S_r}}\mu(\sigma|_{S_r}=a)\Phi_r(a)$.
Then
$$h(\mu)=\lim_{n\to\infty}\frac{H_n}{|B_n|}=\inf_{\ell\geq1}\frac{H_\ell}{|B_\ell|}$$
exists in $[0,\log|A|]$, and the free-boundary interaction-energy density satisfies
$$\lim_{n\to\infty}\frac{\mathbb E_\mu[H^{\rm free}_{B_n}]}{|B_n|}=u(\mu).$$

## Facts & Assumptions

**Given:** A finite alphabet lattice, a bounded translation-invariant finite-range interaction, Countable Choice, and a consistent stationary family of finite-dimensional probabilities.

[A1] Countable Choice and cylinder extension give a unique probability measure from a consistent family of finite-dimensional probabilities ([[lem-csm-lattice-product-and-measure-compactness]]).

[F1] The finite Gibbs variational identity implies nonnegative relative entropy on each finite state set ([[lem-csm-finite-gibbs-variational-identity]]).

## Proof

1.1 Apply [A1] to the consistent stationary cylinder probabilities. The extension is unique; translating it leaves the same cylinder values, so uniqueness makes the resulting measure $\mu$ stationary. [given, A1]

1.2 For finite random vectors $X,Y$, nonnegative relative entropy of their joint law relative to the product of its marginals gives $H(X,Y)\leq H(X)+H(Y)$. If the product law has zeros, restrict to its support; the joint law is supported there, and [F1] applies on that finite support. For any single-site law $q$ on $A$, applying [F1] with zero energy and the uniform Gibbs law gives $D(q\Vert\mathrm{unif}_A)=\log|A|-H(q)\geq0$, so $H(q)\leq\log|A|$. [F1, algebra]

2.1 Tile a large cube $B_n$ by disjoint translates of $B_\ell$ and leftover sites. By stationarity, each full block has entropy $H_\ell$; each leftover site contributes at most $\log|A|$. Repeated subadditivity from step 1.2 gives $H_n\leq m_nH_\ell+|R_n|\log|A|$, with $m_n|B_\ell|/|B_n|\to1$ and $|R_n|/|B_n|\to0$ for fixed $\ell$. Thus $\limsup H_n/|B_n|\leq H_\ell/|B_\ell|$ for every $\ell$. Since the infimum is no larger than any ratio, the liminf is at least the infimum, proving the stated limit formula. [given, step 1.2, algebra]

3.1 For each interaction type $r$, the number of anchors with $x+S_r\subseteq B_n$, divided by $|B_n|$, tends to $1$ because $S_r$ is finite. Stationarity gives expectation $\mathbb E_\mu\Phi_r$ for each included translate, so summing the finite interaction list and taking the limit yields $u(\mu)$. Nonnegativity and the bound $H_n\leq|B_n|\log|A|$ give $0\leq h(\mu)\leq\log|A|$. [A1, given, algebra] ∎ 
