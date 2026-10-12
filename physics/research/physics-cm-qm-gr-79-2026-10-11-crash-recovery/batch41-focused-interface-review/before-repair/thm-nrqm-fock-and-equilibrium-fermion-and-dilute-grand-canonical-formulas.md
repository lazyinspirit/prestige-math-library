---
id: thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas
aliases: [nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas]
kind: theorem
domain: mathematics
title: "Fermion and dilute grand-canonical formulas"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace, thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion, lem-nrqm-composites-density-and-scalar-spectral-probability, def-trace-class-operator, def-trace-of-a-trace-class-operator, thm-trace-is-absolutely-convergent-and-basis-independent, thm-geometric-series, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-monotonicity-of-the-integral, def-hilbert-space, def-bounded-linear-operator, def-countable-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace: mathematical-premise
  thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, 2023), Sections 1.3-1.4 pp. 24-35 (Fermi-Dirac and Bose-Einstein distributions, canonical and grand canonical partition functions)"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Sections 4.1-4.2 pp. 25-27 (ideal Bose gas, occupation numbers, chemical potential)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\beta>0$ and let $(\varepsilon_j)_{j\ge1}\subseteq(0,\infty)$ and
$\mu\in\mathbb R$ be real data; write $q_j:=e^{-\beta(\varepsilon_j-\mu)}$.

(a) *Single fermionic orbital.* On $\mathfrak h:=\mathbb C^2$ with orthonormal
basis $(u_0,u_1)$ define the bounded self-adjoint operator $N_-$ by
$N_-u_0=0$, $N_-u_1=u_1$ ([[def-bounded-linear-operator]]). Then the diagonal
operator $F:=\sum_{k=0}^1e^{-\beta(\varepsilon_1-\mu)k}\,T_{u_k,u_k}$ is
positive, self-adjoint, finite rank, and
$$\operatorname{tr}F=1+e^{-\beta(\varepsilon_1-\mu)},\qquad
\frac{\sum_{k=0}^1k\,e^{-\beta(\varepsilon_1-\mu)k}}{\operatorname{tr}F}=\frac1{e^{\beta(\varepsilon_1-\mu)}+1}$$
([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]],
[[thm-trace-is-absolutely-convergent-and-basis-independent]]).

(b) *Countable grand-canonical factor products.* Define
$\mathcal N:=\{N\subseteq\{1,2,\dots\}:N\text{ finite}\}$ and set
$$Z_{\mathrm B}:=\sup_{N\in\mathcal N}\ \prod_{j\in N}\frac1{1-q_j}\in(0,\infty],\qquad
Z_{\mathrm F}:=\sup_{N\in\mathcal N}\ \prod_{j\in N}(1+q_j)\in[1,\infty],$$
with the convention $Z_{\mathrm B}:=+\infty$ if some $j$ has
$\varepsilon_j-\mu\le0$. Then:
$$Z_{\mathrm B}<\infty\iff\sum_j e^{-\beta\varepsilon_j}<\infty
\ \text{ and }\ \mu<\inf_j\varepsilon_j,\qquad
Z_{\mathrm F}<\infty\iff\sum_je^{-\beta\varepsilon_j}<\infty,$$
and in these finite cases $Z_{\mathrm B}=\prod_{j\ge1}(1-q_j)^{-1}$ and
$Z_{\mathrm F}=\prod_{j\ge1}(1+q_j)$.

(c) *Mode occupancies and dilute remainders.* For a single mode with
$0<q<1$ (boson) and $q>0$ (fermion),
$$\frac{\sum_{n\ge0}n\,q^n}{\sum_{n\ge0}q^n}=\frac q{1-q}=q+\frac{q^2}{1-q},\qquad
\frac{\sum_{n=0}^1n\,q^n}{\sum_{n=0}^1q^n}=\frac q{1+q}=q-\frac{q^2}{1+q};$$
consequently the deviations from $q$ are bounded by $q^2/(1-q)$ and
$q^2/(1+q)$ respectively, and both are at most $2q^2$ when $q\le1/2$.

All statements are mathematical statements about diagonal weights and products;
no identification of $\beta,\mu,\varepsilon_j$ with physical temperatures,
chemical potentials or energies, and no thermal or thermodynamic conclusion,
is asserted.

## Facts & Assumptions
**Given:** the real data $\beta>0$, $(\varepsilon_j)_{j\ge1}\subseteq(0,\infty)$, $\mu\in\mathbb R$, the numbers $q_j=e^{-\beta(\varepsilon_j-\mu)}$, the two-dimensional Hilbert space $\mathfrak h=\mathbb C^2$ with orthonormal basis $(u_0,u_1)$, the finite-rank operators $T_{u_k,u_k}$, and $0<q<1$.

[F1] $\sum_{n\ge0}q^n=1/(1-q)$ and $\sum_{n\ge1}nq^n=q/(1-q)^2$ for $0\le q<1$ ([[thm-geometric-series]], [[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]] (b)).

[F2] A finite-rank operator is trace class; the trace is independent of the chosen Hilbert basis and equals the sum of the diagonal entries in any supplied Hilbert basis ([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F3] For $x\ge1$, $\log x=\int_1^xdt/t$ and $1-1/x\le\log x\le x-1$; hence for $0\le q\le1/2$, $\log(1+q)\le q$ and $\log(1+q)\ge q-q^2$ ([[thm-logarithm-derivative-and-integral]], [[thm-monotonicity-of-the-integral]], [[def-natural-logarithm]]).

[F4] Product criterion of [[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]]: for $0\le r_j<1$, $\lim_{N}\prod_{j\le N}(1-r_j)^{-1}<\infty$ if and only if $\sum_jr_j<\infty$, and the finite sums factor as $\sum_{(n_j)}\prod_jr_j^{n_j}=\prod_j(1-r_j)^{-1}$ over finitely many modes.




## Proof

1.1 [Single orbital] The vector $u_k$ is an eigenvector of $\sum_{m=0}^1mT_{u_m,u_m}$ with eigenvalue $k$, so $e^{-\beta(\varepsilon_1-\mu)N_-}=\sum_{k=0}^1e^{-\beta(\varepsilon_1-\mu)k}T_{u_k,u_k}=F$ on a complete orthonormal family, hence everywhere; $F$ is a positive diagonal finite-rank operator with eigenvalues $1$ and $e^{-\beta(\varepsilon_1-\mu)}>0$. By [F2] its trace is $1+e^{-\beta(\varepsilon_1-\mu)}$ and the weighted average of the eigenvalues $0,1$ is $\frac{0\cdot1+1\cdot e^{-\beta(\varepsilon_1-\mu)}}{1+e^{-\beta(\varepsilon_1-\mu)}}=\frac1{e^{\beta(\varepsilon_1-\mu)}+1}$. This proves (a). [F1, F2, algebra]

1.2 [Dilute remainders] For $0<q<1$, the algebra $\frac{q}{1-q}-q=\frac{q^2}{1-q}$ and $\frac q{1+q}-q=-\frac{q^2}{1+q}$ is immediate; both error terms are positive and bounded by $2q^2$ when $q\le1/2$ because $1-q\ge1/2$ and $1+q\ge1/2$. The displayed geometric sums are [F1]. This proves (c). [F1, algebra]

1.3 [Fermionic products] For $0\le q\le1/2$, [F3] gives $q-q^2\le\log(1+q)\le q$; discarding the finitely many $j$ with $q_j>1/2$ (their factors are finite positive constants) the partial sums $\sum_{j\le N}\log(1+q_j)$ converge if and only if $\sum_jq_j<\infty$, and they diverge to $+\infty$ otherwise. Since $\prod_{j\le N}(1+q_j)=\exp\sum_{j\le N}\log(1+q_j)$ and the partial products are increasing, $Z_{\mathrm F}=\lim_N\prod_{j\le N}(1+q_j)<\infty$ if and only if $\sum_jq_j<\infty$; moreover $\sum_jq_j=e^{\beta\mu}\sum_je^{-\beta\varepsilon_j}$, so this is equivalent to $\sum_je^{-\beta\varepsilon_j}<\infty$. [F3, def. natural logarithm, algebra]

2.1 [Bosonic products] If some $j$ has $\varepsilon_j-\mu\le0$ then $q_j\ge1$ and the factor $(1-q_j)^{-1}$ is undefined as a positive number, so $Z_{\mathrm B}=+\infty$ by convention; this is exactly the failure of $\mu<\inf_j\varepsilon_j$. Assume therefore $q_j<1$ for all $j$. The criterion of [F4] (with $r_j:=q_j$) gives $\lim_N\prod_{j\le N}(1-q_j)^{-1}<\infty$ if and only if $\sum_jq_j<\infty$; as in step 1.3, $\sum_jq_j=e^{\beta\mu}\sum_je^{-\beta\varepsilon_j}$. The finite products over subsets $N\in\mathcal N$ have the same limit as the increasing partial products over initial segments, so $Z_{\mathrm B}<\infty$ exactly in the stated case. [F4, algebra]

3.1 [Conclusion] Steps 1.1, 1.2, 1.3 and 2.1 establish (a), (c), the fermionic half of (b) and the bosonic half of (b) respectively; in the finite cases the displayed products are the limits, and the mode occupancies in (c) are the normalized geometric sums of [F1]. The closing paragraph of the statement records that no physical identification of the parameters or of the products with thermodynamic quantities is asserted. [step 1.1, step 1.2, step 1.3, step 2.1, algebra] ∎
