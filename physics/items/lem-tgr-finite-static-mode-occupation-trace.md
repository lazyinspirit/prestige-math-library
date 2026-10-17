---
id: lem-tgr-finite-static-mode-occupation-trace
kind: lemma
title: "Finite static fermion-mode trace and occupation identity"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete 191-page notes retrieved; §§3.5–3.6, PDF pp. 96–108, for Fermi occupation factors and grand-canonical mode weights. The finite product proof below is supplied in full."
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas"
      url: "https://arxiv.org/pdf/1908.10806"
      locator: "Complete 62-page paper retrieved; §III, PDF pp. 19–21, for the relativistic Fermi distribution and its local energy/temperature parameters. Its self-gravitating continuum model is not assumed in this finite algebraic lemma."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---


## Statement

Let $M\ge0$ be an integer, let $E_1,\ldots,E_M\in\mathbb R$, $\beta>0$, and $\mu\in\mathbb R$. Define the finite index set $\mathcal N_M=\{0,1\}^M$ and the finite-dimensional Hilbert space $\mathcal H_M=\mathbb C^{\mathcal N_M}$ with orthonormal basis $|n_1,\ldots,n_M\rangle$. Define diagonal operators $H$ and $N$ on this basis by
$$H|\mathbf n\rangle=\left(\sum_{j=1}^M E_jn_j\right)|\mathbf n\rangle,\qquad N|\mathbf n\rangle=\left(\sum_{j=1}^M n_j\right)|\mathbf n\rangle.$$
For a matrix on $\mathcal H_M$, trace means the finite sum of its diagonal entries in this basis. Then
$$\Xi=\operatorname{Tr}e^{-\beta(H-\mu N)}=\prod_{j=1}^M\left(1+e^{-\beta(E_j-\mu)}\right)\in(0,\infty).$$
The normalized diagonal state with weights $\Xi^{-1}e^{-\beta(\sum_j E_jn_j-\mu\sum_jn_j)}$ has, for each $1\le j\le M$, occupation mean
$$\langle n_j\rangle=\frac{1}{e^{\beta(E_j-\mu)}+1}.$$
For $M=0$, the empty product and trace are $1$, and there are no occupation marginals. This is a finite-dimensional algebraic identity and uses no choice principle, curved-space spectrum, or gravitational field equation.

## Facts & Assumptions

**Given:** A finite set of modes indexed by $\{1,\ldots,M\}$, their real energies $E_j$, and finite parameters $\beta>0$ and $\mu\in\mathbb R$.

[A1] The occupation basis is indexed by bit strings $\mathbf n\in\{0,1\}^M$; $H$ and $N$ are the diagonal operators defined in the Statement. The trace is the finite diagonal sum in that basis.

## Proof

1.1 Put $q_j=e^{-\beta(E_j-\mu)}$. Each $q_j$ is a finite positive real number. Expanding the finite trace over bit strings and factoring a finite sum gives $$\Xi=\sum_{(n_1,\ldots,n_M)\in\{0,1\}^M}\prod_{j=1}^M q_j^{n_j}=\prod_{j=1}^M(1+q_j).$$ Every factor lies in $(1,\infty)$, so the product is finite and positive; for $M=0$ both sides equal $1$. [given, A1, algebra]

2.1 Dividing each diagonal weight by the positive finite $\Xi$ gives a normalized probability distribution on the finite basis. For $1\le j\le M$, summing over the other bits factors their terms and yields $$\langle n_j\rangle=\frac{q_j\prod_{k\ne j}(1+q_k)}{\prod_k(1+q_k)}=\frac{q_j}{1+q_j}=\frac{1}{e^{\beta(E_j-\mu)}+1}.$$ The same calculation establishes the marginal directly and does not invoke a countable product or any axiom of choice. [A1, step 1.1, algebra] ∎
