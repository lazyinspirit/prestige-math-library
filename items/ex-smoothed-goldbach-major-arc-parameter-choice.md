---
id: ex-smoothed-goldbach-major-arc-parameter-choice
kind: example
title: "Helfgott's Major-Arc Modulus and Smoothing Parameters"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - thm-platt-bounded-grh-for-primitive-dirichlet-l-functions
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "H. A. Helfgott, Major arcs for Goldbach's problem"
      url: "https://arxiv.org/pdf/1305.2897v4"
      locator: "Theorem 1.4, printed p. 4; §4.6, printed pp. 56–58."
    - title: "David J. Platt, Numerical Computations Concerning the GRH, arXiv:1305.3087v1"
      url: "https://arxiv.org/pdf/1305.3087v1"
      locator: "§7, Theorem 7.1, printed p. 14."
---

## Example

For $x\ge10^{12}$, define $h(t)=t^2(2-t)^3e^{t-1/2}$ on $[0,2]$ and $0$ elsewhere. For $H>0$, define $F_H(y)=\sin(H\log y)/(\pi\log y)$ for $y\ne1$ with $F_H(1)=H/\pi$, and $h_H(t)=\int_0^\infty h(t/y)F_H(y)\,dy/y$. Set $\eta_+(t)=h_{200}(t)t e^{-t^2/2}$. The parameter range is odd moduli $q\le150{,}000$, even moduli $q\le300{,}000$, and $|\delta|\le600{,}000\,\gcd(q,2)/q$. For $r(q)=150{,}000$ when $q$ is odd and $r(q)=300{,}000$ when $q$ is even, the source cutoff is $T_H(q)=200+250r(q)/q$. Platt's height is
$$T_q=\begin{cases}\max(10^8/q,\;7.5\cdot10^7/q+200),&q\text{ even},\\[2pt]\max(10^8/q,\;37.5\cdot10^6/q+200),&q\text{ odd},\end{cases}$$
with parity taken from the modulus. For every modulus in the stated range, $T_H(q)\le T_q$.

## Example references

[Helfgott, *Major arcs for Goldbach's problem*, Theorem 1.4 and §4.6](https://arxiv.org/pdf/1305.2897v4)

[Platt, *Numerical Computations Concerning the GRH*, §7 Theorem 7.1](https://arxiv.org/pdf/1305.3087v1)

## Facts & Assumptions

**Given:** A modulus $q$ in the source major-arc range, with parity taken from $q$.

[F1] [[thm-platt-bounded-grh-for-primitive-dirichlet-l-functions]]: for primitive characters with $q\le400{,}000$, the verified height is $T_q=\max(10^8/q,7.5\cdot10^7/q+200)$ for even $q$ and $T_q=\max(10^8/q,3.75\cdot10^7/q+200)$ for odd $q$; the parity is that of the modulus.

## Verification

1.1 If $q$ is odd, the Statement gives $r(q)=150{,}000$, so $T_H(q)=200+37{,}500{,}000/q$. This is the second entry in the maximum defining the odd case of $T_q$ in [F1], hence $T_H(q)\le T_q$. The odd range $q\le150{,}000$ lies within $q\le400{,}000$. [given, F1, algebra]

2.1 If $q$ is even, the Statement gives $r(q)=300{,}000$, so $T_H(q)=200+75{,}000{,}000/q$. This is the second entry in the maximum defining the even case of $T_q$ in [F1], hence $T_H(q)\le T_q$. The even range $q\le300{,}000$ lies within $q\le400{,}000$. These two parity cases exhaust the source range. [given, F1, step 1.1, algebra] ∎
