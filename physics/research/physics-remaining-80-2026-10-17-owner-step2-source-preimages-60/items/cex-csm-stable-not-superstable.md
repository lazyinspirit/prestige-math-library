---
id: cex-csm-stable-not-superstable
kind: counterexample
title: Stability does not imply cell superstability
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-stable-superstable-continuum-interaction
  - lem-integer-part
dependency_roles:
  def-csm-stable-superstable-continuum-interaction: mathematical-premise
  lem-integer-part: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sabine Jansen, Gibbsian Point Processes, complete author-hosted lecture notes"
      url: "https://www.math.lmu.de/~jansen/gibbspp.pdf"
      locator: "Section 1.2, PDF pp.7–9: stability and superstable energy functions; cell-occupation bounds are stronger than stability."
    - title: "David Dereudre, Introduction to the theory of Gibbs point processes, complete author-hosted mini-course notes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Section 1.2 and Proposition 2, PDF pp.7–11: stability and its stronger superstable/lower-regular hypotheses."
---

## Statement refuted

Every stable pair potential is cell-superstable.

## Facts & Assumptions

**Given:** An integer $d\geq1$ and the stability and cell-superstability conventions in the current continuum-interaction definition.

[A1] The current draft [[def-csm-stable-superstable-continuum-interaction]] fixes the half-open cubic tiling $C_k=\ell(k+[0,1)^d)$ for some $\ell>0$ and defines cell superstability by the existence of constants $A_*>0$, $B_*\geq0$ such that $U_N(X)\geq A_*\sum_kn_k(X)^2-B_*N$ for every finite position list. It defines stability by $U_N(X)\geq-BN$. This counterexample uses these exact interfaces; the supplier is a definition and no proof-status claim is made.

[F1] [[lem-integer-part]]: for every real $x$ there is an integer $m$ with $m\leq x<m+1$.

## Counterexample

1.1 Set $\phi(x)=0$ for every $x\in\mathbb R^d$. It is even and Borel, vanishes outside every finite range, and has $U_\phi(\omega)=0$ for every finite configuration. Thus it is stable with $B=0$ under [A1]. [given, A1, construct]

2.1 Fix any proposed cubical partition with side $s>0$ and constants $A>0$, $B_s\geq0$ for cell superstability. Choose a cell with center $c$ and, for any integer $N\geq1$, place the distinct points $x_j=c+s(j/(N+1)-1/2)e_1$, $1\leq j\leq N$, in that cell and none elsewhere. All coordinates lie strictly inside the cell, and their first coordinates are distinct. Hence $\sum_iN_{C_i}^2=N^2$ while $U_\phi=0$. [given, A1, step 1.1, construct]

3.1 Apply [F1] to $x=B_s/A$ and let $m\leq x<m+1$. Set $N=m+1$, so $N>x$. The proposed cell-superstability inequality would require $0\geq AN^2-B_sN=AN(N-x)>0$, a contradiction. Since every proposed positive $A$ and finite $B_s$ fails, the zero potential is stable but not cell-superstable. [A1, F1, step 2.1, algebra] ∎
