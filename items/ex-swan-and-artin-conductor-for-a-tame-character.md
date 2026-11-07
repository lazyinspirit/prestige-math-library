---
id: ex-swan-and-artin-conductor-for-a-tame-character
kind: example
title: "Swan and Artin conductors of a tame character"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-geometric-local-field-at-a-curve-point
  - def-lower-ramification-groups-of-a-geometric-local-extension
  - def-finite-geometric-upper-ramification-numbering
  - def-swan-conductor-of-an-l-adic-inertia-representation
  - def-artin-conductor-of-an-l-adic-inertia-representation
  - lem-geometric-local-integers-are-power-series-in-a-uniformizer
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Crew, Local Class Field Theory, Chapters 1–2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
verification:
  precheck: pending
---
## Example

Let $k$ be algebraically closed of characteristic $p>0$, let $n>1$ be an integer with $p\nmid n$, and let $E/\mathbb Q_\ell$ contain a primitive $n$th root of unity, where $\ell\ne p$. Put $K=k((t))$, $L=k((u))$ with $t=u^n$, and let $\chi$ be a nontrivial rank-one $E$-valued character of $G=\operatorname{Gal}(L/K)$. Then $\operatorname{Sw}(\chi)=0$ and $a(\chi)=1$. For the trivial character on the same extension, both conductors are zero.

## Example references

[[def-geometric-local-field-at-a-curve-point|Geometric local field at a curve point]]

[[def-lower-ramification-groups-of-a-geometric-local-extension|Lower ramification groups of a geometric local extension]]

[[lem-geometric-local-integers-are-power-series-in-a-uniformizer|Complete geometric local integers are power series in a uniformizer]]

[[def-finite-geometric-upper-ramification-numbering|Upper numbering for a finite geometric local extension]]

[[def-swan-conductor-of-an-l-adic-inertia-representation|Swan conductor of an l-adic inertia representation]]

[[def-artin-conductor-of-an-l-adic-inertia-representation|Artin conductor of an l-adic inertia representation]]

[Richard Crew, *Local Class Field Theory*, §§2.2.2 and 2.2.4](https://people.clas.ufl.edu/rcrew/files/LCFT.pdf)

## Facts & Assumptions

**Given:** $K=k((t))$, $L=k((u))$ with $t=u^n$, $p\nmid n$, and the indicated rank-one characters.

[F1] [[def-lower-ramification-groups-of-a-geometric-local-extension]]: $G_i$ is defined by the valuation threshold $v_L(\sigma(a)-a)\geq i+1$ for all integral $a$.

[F2] [[lem-geometric-local-integers-are-power-series-in-a-uniformizer]]: integral elements of $L$ have power-series expansions in $u$.

[F3] [[def-finite-geometric-upper-ramification-numbering]]: $G^v=G_{\psi(v)}$, where $\varphi(u)=\int_0^u(G_0:G_t)^{-1}dt$.

[F4] [[def-swan-conductor-of-an-l-adic-inertia-representation]]: $\operatorname{Sw}(V)=\int_0^\infty\operatorname{codim}V^{G^v}dv$.

[F5] [[def-artin-conductor-of-an-l-adic-inertia-representation]]: $a(V)=\operatorname{codim}V^{G_0}+\operatorname{Sw}(V)$.

## Proof

1.1 The polynomial $X^n-t$ is Eisenstein at $(t)$ in $k\llbracket t\rrbracket[X]$, so $[L:K]=n$. Since $k$ contains all $n$th roots of unity and $p\nmid n$, its roots $\zeta u$ are distinct; hence $G\cong\mu_n$ and $L/K$ is totally ramified. For $\zeta\ne1$, $v_L(\zeta u-u)=1$, since $\zeta-1$ is a unit. By [F2], every integral element is a power series in $u$ and $\sigma$ fixes coefficients; the factorization $(\zeta u)^r-u^r=(\zeta-1)u\sum_{j=0}^{r-1}(\zeta u)^{r-1-j}u^j$ shows its displacement has valuation at least one. Thus [F1] gives $G_0=G$ and $G_i=1$ for every $i\geq1$. [F1, F2, given, algebra]

2.1 It follows that $G_t=1$ for every real $t>0$, so [F3] gives $G^v=1$ for every $v>0$. The integrand in [F4] is therefore zero and $\operatorname{Sw}(\chi)=0$ for both characters. [F3, F4, step 1.1, algebra]

3.1 The nontrivial rank-one character has no $G_0$-invariants, so [F5] gives $a(\chi)=1$. The trivial character has a one-dimensional invariant space, so [F5] gives $a(1)=0$. [F5, step 1.1, step 2.1, algebra] ∎
