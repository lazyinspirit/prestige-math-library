---
id: ex-artin-schreier-conductor-at-infinity
kind: example
title: "Artin–Schreier Swan and Artin conductor at infinity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-geometric-local-field-at-a-curve-point
  - def-lower-ramification-groups-of-a-geometric-local-extension
  - lem-geometric-local-integers-are-power-series-in-a-uniformizer
  - def-finite-geometric-upper-ramification-numbering
  - def-swan-conductor-of-an-l-adic-inertia-representation
  - def-artin-conductor-of-an-l-adic-inertia-representation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace functions over finite fields and applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
    - title: "Richard Crew, Local Class Field Theory, Chapters 1–2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
verification:
  precheck: pending
---
## Example

Let $k$ be algebraically closed of characteristic $p>0$, choose an integer $m$ with $1\leq m<p$, and let $\ell\ne p$. Put $K=k((t))$ and $L=K(y)$ with $y^p-y=t^{-m}$. For any nontrivial rank-one $\overline{\mathbb Q}_\ell$-character $\chi$ of $\operatorname{Gal}(L/K)\cong\mathbb Z/p\mathbb Z$, the Swan conductor is $\operatorname{Sw}(\chi)=m$ and the Artin conductor exponent is $a(\chi)=m+1$.

## Example references

[[def-geometric-local-field-at-a-curve-point|Geometric local field at a curve point]]

[[def-lower-ramification-groups-of-a-geometric-local-extension|Lower ramification groups of a geometric local extension]]

[[lem-geometric-local-integers-are-power-series-in-a-uniformizer|Complete geometric local integers are power series in a uniformizer]]

[[def-finite-geometric-upper-ramification-numbering|Upper numbering for a finite geometric local extension]]

[[def-swan-conductor-of-an-l-adic-inertia-representation|Swan conductor of an l-adic inertia representation]]

[[def-artin-conductor-of-an-l-adic-inertia-representation|Artin conductor of an l-adic inertia representation]]

[Fouvry–Kowalski–Michel, *Trace functions over finite fields and applications*, Theorem 2.4.1](https://people.math.ethz.ch/~kowalski/elements.pdf)

[Richard Crew, *Local Class Field Theory*, Chapter 2 §2.2.4](https://people.clas.ufl.edu/rcrew/files/LCFT.pdf)

## Facts & Assumptions

**Given:** The complete geometric local field $K=k((t))$, the integer $1\leq m<p$, and the Artin–Schreier extension in the Example.

[F1] [[def-lower-ramification-groups-of-a-geometric-local-extension]]: lower groups are determined by the valuations of $\sigma(a)-a$ for integral $a$.

[F2] [[lem-geometric-local-integers-are-power-series-in-a-uniformizer]]: for a complete extension with residue field $k$, every integer has a power-series expansion in a uniformizer.

[F3] [[def-finite-geometric-upper-ramification-numbering]]: the finite upper groups are obtained from the lower groups by the Herbrand function.

[F4] [[def-swan-conductor-of-an-l-adic-inertia-representation]]: the Swan conductor is the integral of the codimension of positive-upper-group invariants.

[F5] [[def-artin-conductor-of-an-l-adic-inertia-representation]]: the Artin exponent is the codimension of inertia invariants plus the Swan conductor.

## Proof

1.1 If $z\in K$ has $v_K(z)\geq0$, then $z^p-z$ is integral and cannot equal $t^{-m}$. If $v_K(z)<0$, then $v_K(z^p-z)=p v_K(z)$, which is divisible by $p$ and cannot equal $-m$. Thus $X^p-X-t^{-m}$ has no root in $K$. It is separable because its derivative is $-1$, and all its roots are $y+c$ with $c\in\mathbb F_p$; its splitting field is $L$. Its Galois group embeds in the additive group $\mathbb F_p$, and since the degree is not one and $p$ is prime, $[L:K]=p$ and $G\cong\mathbb F_p$. [given, algebra]

2.1 Let $e=v_L(t)$. The relation gives $v_L(y)<0$ and $p v_L(y)=-me$, so $p\mid e$ because $p\nmid m$. Also $e\leq[L:K]=p$: choose a uniformizer $u$ of $L$; the elements $1,u,\ldots,u^{e-1}$ are linearly independent over $K$, since the valuations of nonzero terms $a_i u^i$ have distinct residues modulo $e$ and a nonzero linear combination has a unique least-valuation term. Consequently $e=p$ and $v_L(y)=-m$. [given, step 1.1, choose, algebra]

3.1 Choose $b\in\{1,\ldots,p-1\}$ with $mb\equiv-1\pmod p$ and put $a=(1+mb)/p$. Then $a$ is a positive integer and $\pi=t^a y^b$ has $v_L(\pi)=ap-mb=1$, so it is a uniformizer. For $c\in\mathbb F_p^\times$, the automorphism $\sigma_c(y)=y+c$ satisfies $\sigma_c(\pi)-\pi=t^a((y+c)^b-y^b)$. The term $bc\,t^a y^{b-1}$ has valuation $ap-m(b-1)=m+1$, with nonzero leading coefficient because $b<p$. Every other nonzero term has valuation $ap-mj=1+m(b-j)>m+1$ for $j\leq b-2$. Therefore $v_L(\sigma_c(\pi)-\pi)=m+1$. [given, step 2.1, choose, algebra]

4.1 By [F2], every $q\in\mathcal O_L$ has a power-series expansion $q=\sum_{r\geq0}d_r\pi^r$ with $d_r\in k$, which $\sigma_c$ fixes. For each $r\geq1$, factoring $(\sigma_c\pi)^r-\pi^r$ shows its valuation is at least $v_L(\sigma_c(\pi)-\pi)+r-1\geq m+1$, so continuity gives $v_L(\sigma_c(q)-q)\geq m+1$; equality occurs for $q=\pi$. Thus [F1] gives $G_i=G$ for $0\leq i\leq m$ and $G_i=1$ for $i\geq m+1$. On $0<t\leq m$, $G_t=G$, so $\varphi(m)=m$; the upper filtration therefore has its unique positive break at $m$. [F1, F2, step 3.1, algebra]

5.1 A nontrivial rank-one character of the group of order $p$ has no invariants under $G^v=G$ for $0<v\leq m$, while $G^v=1$ for $v>m$. Hence [F4] gives $\operatorname{Sw}(\chi)=\int_0^m1\,dv=m$. Its inertia-invariant space is zero because $G_0=G$, so [F5] gives $a(\chi)=m+1$. [F3, F4, F5, step 4.1, algebra] ∎
