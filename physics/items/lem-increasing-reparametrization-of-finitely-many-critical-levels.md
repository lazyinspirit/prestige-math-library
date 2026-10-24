---
id: lem-increasing-reparametrization-of-finitely-many-critical-levels
kind: lemma
title: "Increasing reparametrization of finitely many critical levels"
status: published
origin: pipeline
dependency_level: 0
deps: [thm-fundamental-theorem-on-flows, thm-compactly-supported-vector-fields-are-complete, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "positive densities with exact integrals on every node interval"
---


## Statement

Assume $\mathrm{AC}_\omega$. Let $0<c_0<\cdots<c_m<1$ and $0<d_0<\cdots<d_m<1$. There is a smooth diffeomorphism $\phi:[0,1]\to[0,1]$ with $\phi'>0$, equal to the identity near both endpoints, and $\phi(c_j)=d_j$ for every $j$. It may additionally be chosen to have derivative one near every $c_j$; there it is translation by $d_j-c_j$.

## Facts & Assumptions

[F1] [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]] gives nonnegative smooth bumps supported inside an open interval, positive on a smaller closed interval.

## Proof

**Given:** The two strictly increasing finite sequences.

1.1 Adjoin nodes $c_{-1}=d_{-1}=0$ and $c_{m+1}=d_{m+1}=1$. Choose small disjoint neighbourhoods of all source nodes. Construct a positive smooth function $q$ equal to one on smaller node neighbourhoods and equal to a small constant $\eta>0$ off the chosen neighbourhoods, interpolating by scalar cutoffs from [F1]. The neighbourhoods and $\eta$ may be chosen so small that for every $j=-1,\ldots,m$, $I_j:=\int_{c_j}^{c_{j+1}}q(s)\,ds<d_{j+1}-d_j$: there are finitely many positive target gaps, and the integrals are bounded by the total lengths of the node neighbourhoods plus $\eta$. [F1, given, construct]

2.1 In each $(c_j,c_{j+1})$ choose a nonnegative smooth bump $b_j$ supported away from the node neighbourhoods and with integral one, by normalizing a bump positive on a smaller interval. Set $r=q+\sum_{j=-1}^m(d_{j+1}-d_j-I_j)b_j$ and $\phi(x)=\int_0^x r(s)\,ds$. Then $r>0$, $r=1$ near every node, and its integral over each source interval is exactly its target gap. Summing these identities gives $\phi(c_j)=d_j$, $\phi(0)=0$ and $\phi(1)=1$. [F1, step 1.1, construct, algebra]

3.1 Thus $\phi'>0$ and $\phi$ is a bijection of the closed interval; the inverse is smooth by the one-variable inverse function theorem, including at endpoints by the identity there. Near each node its derivative is one, hence it is translation by $d_j-c_j$. All selections were finite and the construction uses no choice principle. The empty list uses the identity. [step 2.1, algebra] ∎
