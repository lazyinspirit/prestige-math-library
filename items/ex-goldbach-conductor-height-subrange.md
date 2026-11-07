---
id: ex-goldbach-conductor-height-subrange
kind: example
title: "Helfgott's finite q≤300,000 range lies inside Platt's verified bounds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-platt-bounded-grh-for-primitive-dirichlet-l-functions
proof_strategy: direct
sources:
  references:
    - title: "David J. Platt, Numerical Computations Concerning the GRH, arXiv:1305.3087v1"
      url: "https://arxiv.org/pdf/1305.3087v1"
      locator: "§7, Theorem 7.1, printed p. 14"
    - title: "Harald A. Helfgott, Major arcs for Goldbach's problem, arXiv:1305.2897"
      url: "https://arxiv.org/pdf/1305.2897"
      locator: "§4.6, printed pp. 56–58"
---

## Example

For a positive integer modulus $q$, define Platt's height
$$T_P(q)=\begin{cases}\max(10^8/q,\;7.5\cdot10^7/q+200),&q\text{ even},\\\max(10^8/q,\;3.75\cdot10^7/q+200),&q\text{ odd}.\end{cases}$$
In Helfgott's earlier major-arc use in §4.6, both parities have $q\le300{,}000$ and height $T_H(q)=10^8/q$. In the later $\eta_+$ use in the same section, odd moduli have $q\le150{,}000$, even moduli have $q\le300{,}000$, and the height is $T_H^+(q)=200+250r(q)/q$, where $r(q)=150{,}000$ for odd $q$ and $r(q)=300{,}000$ for even $q$. In every stated case, Helfgott's height is at most $T_P(q)$, with parity taken from the modulus.

## Example references

[David J. Platt, *Numerical Computations Concerning the GRH*, arXiv:1305.3087v1, §7 Theorem 7.1](https://arxiv.org/pdf/1305.3087v1)

[Harald A. Helfgott, *Major arcs for Goldbach's problem*, §4.6](https://arxiv.org/pdf/1305.2897)

## Facts & Assumptions

**Given:** The Platt height $T_P(q)$, Helfgott's two §4.6 modulus ranges and their stated heights.

[F1] [[thm-platt-bounded-grh-for-primitive-dirichlet-l-functions]]: for every primitive character modulo $q\le400{,}000$, the zero-location conclusion holds through the stated modulus-parity height $T_P(q)$.

[F2] Helfgott, *Major arcs for Goldbach's problem*, §4.6, printed pp. 56–58 ([full arXiv text](https://arxiv.org/pdf/1305.2897)): the broad range uses $q\le300{,}000$ and $T_H(q)=10^8/q$; the later $\eta_+$ range uses odd $q\le150{,}000$, even $q\le300{,}000$, and $T_H^+(q)=200+250r(q)/q$ with the displayed parity-dependent $r(q)$.

## Proof

1.1 If $q$ is odd in the broad range, $q\le300{,}000$ gives $200q\le60{,}000{,}000<62{,}500{,}000$. Dividing by $q>0$ yields $200+37.5\cdot10^6/q<10^8/q$, so $T_P(q)=10^8/q=T_H(q)$. [given, F1, F2, algebra]

1.2 If $q$ is even in the broad range, $T_H(q)=10^8/q$ is one of the entries in the maximum defining $T_P(q)$. Hence $T_H(q)\le T_P(q)$. [given, F1, F2, algebra]

1.3 If $q$ is odd in the later range, then $q\le150{,}000$ and $r(q)=150{,}000$. Thus $200q+37.5\cdot10^6\le67.5\cdot10^6<10^8$, so $T_H^+(q)=200+37.5\cdot10^6/q<10^8/q$. The preceding odd-modulus comparison gives $T_P(q)=10^8/q$, hence $T_H^+(q)<T_P(q)$. [given, F1, F2, algebra]

1.4 If $q$ is even in the later range, $r(q)=300{,}000$, so $T_H^+(q)=200+75\cdot10^6/q$, which is the second entry in the maximum defining $T_P(q)$. Therefore $T_H^+(q)\le T_P(q)$. [given, F1, F2, algebra]

2.1 All considered moduli are at most $300{,}000$, hence at most $400{,}000$. The inequalities in steps 1.1–1.4 place each Helfgott height inside Platt's authorized finite range, so [F1] supplies the corresponding imported zero-location conclusion. This comparison does not assert a local replay of Platt's computation. [given, F1, F2, step 1.1, step 1.2, step 1.3, step 1.4] ∎
