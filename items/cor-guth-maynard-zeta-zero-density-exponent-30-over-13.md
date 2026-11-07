---
id: cor-guth-maynard-zeta-zero-density-exponent-30-over-13
kind: corollary
title: "Combined Zeta Zero-Density Exponent 30/13"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - def-countable-choice
  - def-real-power
  - thm-guth-maynard-zero-density-for-riemann-zeta
  - thm-montgomery-vaughan-zero-density-n1-and-n2
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Guth and Maynard, New Large Value Estimates for Dirichlet Polynomials, equation (1.4)"
      url: "https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v"
    - title: "Vaughan, Multiplicative Number Theory III, Chapter 28"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
---

## Statement

For $1/2\le\sigma\le1$ and sufficiently large $T$, let $N_\zeta(\sigma,T)$ count with multiplicity the nontrivial zeros $\rho$ of the meromorphic Riemann zeta function with $\operatorname{Re}\rho\ge\sigma$ and $|\operatorname{Im}\rho|\le T$. The Guth–Maynard zero-density estimate combined with Ingham's estimate gives, for each fixed $\sigma\in[1/2,1]$ and every $\varepsilon>0$, constants $C_{\sigma,\varepsilon},T_{\sigma,\varepsilon}>0$ such that, for $T\ge T_{\sigma,\varepsilon}$,
$$N_\zeta(\sigma,T)\le C_{\sigma,\varepsilon} T^{30(1-\sigma)/13+\varepsilon}.$$

## Statement references

[Guth and Maynard, equation (1.4)](https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v)

[Vaughan, Chapter 28, Ingham–Huxley density estimates](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** A fixed $\sigma\in[1/2,1]$, a positive $\varepsilon$, and the two-sided zero count $N_\zeta(\sigma,T)$ in the Statement.

[F1] For each fixed $\sigma\in[1/2,1]$ and every $\delta>0$, the Guth–Maynard estimate bounds this same two-sided count by $C_{\sigma,\delta}T^{15(1-\sigma)/(3+5\sigma)+\delta}$ for sufficiently large $T$ ([[thm-guth-maynard-zero-density-for-riemann-zeta]]).

[F2] The Ingham estimate gives $N_1(\sigma,q,T)\le C(qT)^{3(1-\sigma)/(2-\sigma)}(\log(2qT))^6$ for $q\ge1$, $T\ge1$ and $1/2\le\sigma\le1$. Its count includes multiplicities, both height signs, and the primitive conductor-one character ([[thm-montgomery-vaughan-zero-density-n1-and-n2]]).

## Proof

1.1 Specialize [F2] to $q=1$. There is exactly one character modulo one, taking the value one on every positive integer, and it is its own primitive ancestor. Its $L$-function is $\zeta$: their Dirichlet series agree on $\operatorname{Re}s>1$, and hence their meromorphic continuations agree. Since $\sigma\ge1/2$, no trivial zero enters either count. Thus $N_1(\sigma,1,T)=N_\zeta(\sigma,T)$, with precisely the same multiplicities and inclusive height boundaries. In particular, no conversion from a positive-ordinate count is needed. [given, F2]

2.1 If $1/2\le\sigma\le7/10$, then $2-\sigma\ge13/10$, so $3/(2-\sigma)\le30/13$. For $T\ge2$, put $u=\log T>0$. We have $\log(2T)\le2u$ and $e^{\varepsilon u}\ge(\varepsilon u)^6/6!$, whence $(\log(2T))^6\le2^6 6!\varepsilon^{-6}T^\varepsilon$. Step 1.1 and [F2] therefore imply $N_\zeta(\sigma,T)\le C_\varepsilon T^{30(1-\sigma)/13+\varepsilon}$ throughout this branch, including its endpoints. [given, F2, step 1.1, algebra]

3.1 If $7/10\le\sigma\le1$, then $3+5\sigma\ge13/2$, so $15/(3+5\sigma)\le30/13$. Apply [F1] with $\delta=\varepsilon$ and use $1-\sigma\ge0$ to obtain the required estimate for sufficiently large $T$. This includes $\sigma=1$, where both main exponents vanish. Together with step 2.1 it proves the claimed implication from the two density estimates for every fixed $\sigma$ in the original range. [given, F1, step 2.1, algebra] ∎

## Remarks

The derivation above uses the current two-sided conductor-one interface of the Ingham–Huxley supplier. The local proof of the Guth–Maynard zero-density supplier [F1] is still not supplied. Consequently this draft remains blocked on that prerequisite; the derivation is not a completion or acceptance of that supplier's proof.
