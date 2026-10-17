---
id: lem-csm-ising-influence-bound
kind: lemma
title: "Ising influence bounded by hyperbolic tangent"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: ["def-hyperbolic-functions", "thm-hyperbolic-identities-and-derivatives"]
justified_by: []
dependency_roles: {"def-hyperbolic-functions": "mathematical-premise", "thm-hyperbolic-identities-and-derivatives": "mathematical-premise"}
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

Let $d\geq1$, let spins be $s_i\in\{-1,+1\}$, let $h_i\in\mathbb R$, and let $J_{ij}=J_{ji}\in\mathbb R$ with $J_{ii}=0$ and $J_{ij}=0$ whenever $\|i-j\|_\infty>R$ for some finite integer $R$. No translation invariance is assumed. For finite $\Lambda\subset\mathbb Z^d$ and exterior $\eta\in\{-1,+1\}^{\Lambda^c}$, define $\widehat s_i=s_i$ on $\Lambda$ and $\widehat s_i=\eta_i$ outside, and use
$$E_\Lambda(s_\Lambda\mid\eta)=-\sum_{\{i,j\}:\{i,j\}\cap\Lambda\ne\varnothing}J_{ij}\widehat s_i\widehat s_j-\sum_{i\in\Lambda}h_i s_i,$$
where the pair sum is over unordered distinct pairs and is finite by the range assumption. For site $i$ and exterior spins $\eta\in\{-1,+1\}^{\mathbb Z^d\setminus\{i\}}$, the one-site law is explicitly
$$\gamma_i(s\mid\eta)=\frac{\exp\!\left(\beta\left[h_i s+\sum_{k\ne i}J_{ik}s\eta_k\right]\right)}{\sum_{u\in\{-1,+1\}}\exp\!\left(\beta\left[h_i u+\sum_{k\ne i}J_{ik}u\eta_k\right]\right)},\qquad s\in\{-1,+1\};$$
the sums are finite by the range condition. For $i\ne j$, define
$$c_{ij}:=\sup_{\eta,\eta':\,\eta_k=\eta'_k\ (k\ne j)}\frac12\sum_{s\in\{-1,+1\}}|\gamma_i(s\mid\eta)-\gamma_i(s\mid\eta')|,\qquad c_{ii}:=0.$$
Then $c_{ij}=0$ if $J_{ij}=0$, and otherwise
$$c_{ij}\leq\tanh(\beta|J_{ij}|).$$
In particular, $\sup_i\sum_j\tanh(\beta|J_{ij}|)<1$ is a sufficient Dobrushin row-sum bound for every bounded field profile $(h_i)$.

## Facts & Assumptions

**Given:** The finite-range Ising pair couplings, field profile, conditional energy, one-site Gibbs laws, and $\beta>0$ specified in the Statement.

[F1] The hyperbolic functions are defined by $\sinh x=(e^x-e^{-x})/2$, $\cosh x=(e^x+e^{-x})/2$, and $\tanh x=\sinh x/\cosh x$; their addition and product identities include $\tanh(x+b)-\tanh(x-b)=\sinh(2b)/(\cosh(x+b)\cosh(x-b))$ and $\cosh(x+b)\cosh(x-b)=(\cosh(2x)+\cosh(2b))/2$ ([[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]]).

## Proof

1.1 Fix $i$ and all boundary spins except $j$. Write $x=\beta(h_i+\sum_{k\notin\{i,j\}}J_{ik}\eta_k)$ and $b=\beta J_{ij}$; these sums are finite by the range condition. Direct normalization of the two weights gives $\gamma_i(+1\mid\eta)=[1+\tanh(x+b)]/2$ and $\gamma_i(+1\mid\eta')=[1+\tanh(x-b)]/2$. [given, F1, algebra]

2.1 For Bernoulli laws the half-total-variation distance equals the absolute difference of the probabilities of $+1$. By [F1], $\cosh(x+b)\cosh(x-b)=(\cosh(2x)+\cosh(2b))/2\geq\cosh^2 b$, so their difference is at most $|\sinh(2b)|/(2\cosh^2 b)=\tanh|b|$. If $J_{ij}=0$, the conditional weights are identical and $c_{ij}=0$. [step 1.1, F1, algebra]

3.1 Summing the bound in step 2.1 over the finite interaction neighborhood proves the stated sufficient row-sum criterion; the supremum over $i$ is the Dobrushin constant used by the uniqueness theorem. [F1, step 2.1] ∎ 
