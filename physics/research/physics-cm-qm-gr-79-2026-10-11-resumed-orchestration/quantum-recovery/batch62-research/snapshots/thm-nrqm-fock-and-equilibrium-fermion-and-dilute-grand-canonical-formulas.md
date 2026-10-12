---
id: thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas
aliases: [nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas]
kind: theorem
domain: mathematics
title: "Fermion and dilute grand-canonical formulas"
status: draft
origin: pipeline
dependency_level: 9
deps: [thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace, lem-nrqm-composites-density-and-scalar-spectral-probability, def-trace-class-operator, def-trace-of-a-trace-class-operator, thm-trace-is-absolutely-convergent-and-basis-independent, thm-geometric-series, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-monotonicity-of-the-integral, def-hilbert-space, def-bounded-linear-operator, def-countable-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace: mathematical-premise
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
$$\operatorname{tr}F=1+e^{-\beta(\varepsilon_1-\mu)},\qquad \frac{\sum_{k=0}^1k\,e^{-\beta(\varepsilon_1-\mu)k}}{\operatorname{tr}F}=\frac1{e^{\beta(\varepsilon_1-\mu)}+1}$$
([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]],
[[thm-trace-is-absolutely-convergent-and-basis-independent]]).

(b) *Countable grand-canonical factor products.* Define
$\mathcal N:=\{N\subseteq\{1,2,\dots\}:N\text{ finite}\}$ and set
$$Z_{\mathrm B}:=\sup_{N\in\mathcal N}\ \prod_{j\in N}\frac1{1-q_j}\in(0,\infty],\qquad Z_{\mathrm F}:=\sup_{N\in\mathcal N}\ \prod_{j\in N}(1+q_j)\in[1,\infty],$$
with the convention $Z_{\mathrm B}:=+\infty$ if some $j$ has
$\varepsilon_j-\mu\le0$. Then:
$$Z_{\mathrm B}<\infty\iff\sum_j e^{-\beta\varepsilon_j}<\infty \ \text{ and }\ \mu<\inf_j\varepsilon_j,\qquad Z_{\mathrm F}<\infty\iff\sum_je^{-\beta\varepsilon_j}<\infty,$$
and in these finite cases $Z_{\mathrm B}=\prod_{j\ge1}(1-q_j)^{-1}$ and
$Z_{\mathrm F}=\prod_{j\ge1}(1+q_j)$.

(c) *Mode occupancies and dilute remainders.* For a single mode with
$0<q<1$ (boson) and $q>0$ (fermion),
$$\frac{\sum_{n\ge0}n\,q^n}{\sum_{n\ge0}q^n}=\frac q{1-q}=q+\frac{q^2}{1-q},\qquad \frac{\sum_{n=0}^1n\,q^n}{\sum_{n=0}^1q^n}=\frac q{1+q}=q-\frac{q^2}{1+q};$$
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

[F4] The scalar bosonic logarithmic comparison is $q\le-\log(1-q)\le q/(1-q)$ for $0<q<1$: apply the integral bounds $1-1/x\le\log x\le x-1$ of [F3] at $x=(1-q)^{-1}$. This uses only [[thm-logarithm-derivative-and-integral]], [[thm-monotonicity-of-the-integral]] and [[def-natural-logarithm]], not a Hilbert-space or spectral product theorem.




## Proof

1.1 [Single orbital] The vector $u_k$ is an eigenvector of $\sum_{m=0}^1mT_{u_m,u_m}$ with eigenvalue $k$, so $e^{-\beta(\varepsilon_1-\mu)N_-}=\sum_{k=0}^1e^{-\beta(\varepsilon_1-\mu)k}T_{u_k,u_k}=F$ on a complete orthonormal family, hence everywhere; $F$ is a positive diagonal finite-rank operator with eigenvalues $1$ and $e^{-\beta(\varepsilon_1-\mu)}>0$. By [F2] its trace is $1+e^{-\beta(\varepsilon_1-\mu)}$ and the weighted average of the eigenvalues $0,1$ is $\frac{0\cdot1+1\cdot e^{-\beta(\varepsilon_1-\mu)}}{1+e^{-\beta(\varepsilon_1-\mu)}}=\frac1{e^{\beta(\varepsilon_1-\mu)}+1}$. This proves (a). [F1, F2, algebra]

1.2 [Dilute remainders] For $0<q<1$, the algebra $\frac{q}{1-q}-q=\frac{q^2}{1-q}$ and $\frac q{1+q}-q=-\frac{q^2}{1+q}$ is immediate; both error terms are positive and bounded by $2q^2$ when $q\le1/2$ because $1-q\ge1/2$ and $1+q\ge1/2$. The displayed geometric sums are [F1]. This proves (c). [F1, algebra]

1.3 [Fermionic products] If infinitely many $j$ have $q_j>1/2$, the product over any $k$ of these indices is at least $(3/2)^k$, so $Z_{\mathrm F}=+\infty$ and $\sum_jq_j=+\infty$. Otherwise their finitely many factors are finite positive constants, and [F3] gives $q_j/2\le q_j-q_j^2\le\log(1+q_j)\le q_j$ on the remaining tail. Thus the nonnegative logarithmic partial sums are bounded exactly when $\sum_jq_j<\infty$. Since $\prod_{j\le n}(1+q_j)=\exp(\sum_{j\le n}\log(1+q_j))$, the increasing partial products have a finite limit exactly in that case. Every finite subset is contained in an initial segment and every factor is at least one, so their supremum equals that limit. Finally $\sum_jq_j=e^{\beta\mu}\sum_je^{-\beta\varepsilon_j}$, giving precisely the fermionic equivalence in (b). [F3, def. natural logarithm, algebra]

1.4 [Bosonic products] If some $\varepsilon_j\le\mu$, then $q_j\ge1$ and $Z_{\mathrm B}=+\infty$ by the stated convention; also $\mu<\inf_j\varepsilon_j$ fails. Suppose all $q_j<1$. By [F4], $q_j\le-\log(1-q_j)$ for every index. If infinitely many $q_j>1/2$, both corresponding sums diverge; otherwise discard only that finite set and use $q_j\le-\log(1-q_j)\le2q_j$ on its complement. Consequently $\sum_j-\log(1-q_j)<\infty$ exactly when $\sum_jq_j<\infty$, and the reciprocal partial products, whose logarithms are these partial sums, have a finite limit exactly then. Their limit equals the finite-subset supremum because the factors are at least one. If $\sum_jq_j<\infty$, then $q_j\to0$, so $\varepsilon_j\to+\infty$ since $q_j=e^{-\beta(\varepsilon_j-\mu)}$ and $\beta>0$. In particular, all but finitely many $\varepsilon_j$ exceed $\varepsilon_1$; hence the infimum is attained in a nonempty finite initial set. Since every $\varepsilon_j>\mu$, this gives $\mu<\inf_j\varepsilon_j$. Conversely, $\mu<\inf_j\varepsilon_j$ and $\sum_je^{-\beta\varepsilon_j}<\infty$ imply all $q_j<1$ and $\sum_jq_j=e^{\beta\mu}\sum_je^{-\beta\varepsilon_j}<\infty$, so the scalar criterion just proved gives finite $Z_{\mathrm B}$. This proves the full bosonic equivalence without assuming attainment in the hypotheses and without invoking an Axiom-of-Choice spectral theorem. [F3, F4, def. natural logarithm, algebra]

2.1 [Conclusion] Steps 1.1, 1.2, 1.3 and 1.4 establish (a), (c), the fermionic half of (b) and the bosonic half of (b) respectively; in the finite cases the displayed products are the limits, and the mode occupancies in (c) are the normalized geometric sums of [F1]. The closing paragraph of the statement records that no physical identification of the parameters or of the products with thermodynamic quantities is asserted. [step 1.1, step 1.2, step 1.3, step 1.4, algebra] ∎
