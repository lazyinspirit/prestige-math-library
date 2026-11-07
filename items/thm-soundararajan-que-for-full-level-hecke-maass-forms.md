---
id: thm-soundararajan-que-for-full-level-hecke-maass-forms
kind: theorem
title: "Quantum unique ergodicity for full-level Hecke–Maass cusp forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-quantum-limit-of-hecke-maass-eigenfunctions
  - def-microlocal-lift-of-laplacian-eigenfunction
  - def-quantum-limit-of-laplace-eigenfunctions
  - def-normalized-liouville-measure-on-modular-surface
  - thm-lindenstrauss-que-up-to-escape-of-mass-for-congruence-surfaces
  - thm-soundararajan-cusp-tail-mass-bound-for-hecke-maass-forms
  - thm-standard-fundamental-domain-for-the-modular-group
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "Theorem 1 and complete deduction from Proposition 2, §§1–2, printed pp. 1–4."
    - title: "Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity"
      url: "https://math.huji.ac.il/~elon/Publications/quantum.pdf"
      locator: "Theorem 1.4 and noncompact arithmetic quantum-limit conclusion."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "Theorem 1.2 and Remarks 2–4, pp. 11–16."
---

## Statement

Let $M=SL_2(\mathbb Z)\backslash\mathbb H$ and let $(u_j)$ be any sequence of Petersson-norm-one weight-zero Maass cusp forms for $M$ that are eigenfunctions of every normalized Hecke operator and whose positive-sign Laplace eigenvalues tend to $+\infty$. Every weak-* subsequential limit, against compactly supported continuous functions on the unit cotangent bundle $S^*M$, of the associated microlocal lifts is the normalized Liouville measure $m_L$. Its projection to $M$ is the normalized hyperbolic area measure, so no mass escapes into the cusp.

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, Theorem 1 and §§1–2, printed pp. 1–4.](https://arxiv.org/pdf/0901.4060v1)

[Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, Theorem 1.4.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Theorem 1.2 and Remarks 2–4, pp. 11–16.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** The sequence $(u_j)$ and any weak-* subsequential limit $\widetilde\mu$ of its microlocal lifts as in the Statement.

[F1] A microlocal limit is a positive Radon subprobability measure on $S^*M$; its projection is the corresponding weak limit of $|u_j|^2d\mu$ ([[def-microlocal-lift-of-laplacian-eigenfunction]]).

[F2] For a full-level sequence of joint Hecke–Maass eigenfunctions, such a limit is an arithmetic quantum limit ([[def-quantum-limit-of-hecke-maass-eigenfunctions]]).

[F3] Every arithmetic quantum limit on a finite-area noncompact congruence surface is $c\,m_L$ for some $0\le c\le1$, where $m_L$ is normalized Liouville measure ([[thm-lindenstrauss-que-up-to-escape-of-mass-for-congruence-surfaces]]).

[F4] For every $T\ge1$, each norm-one $u_j$ has cusp mass at height at least $T$ at most
$\varepsilon(T)=10^8(1+\log T)/\sqrt T$ ([[thm-soundararajan-cusp-tail-mass-bound-for-hecke-maass-forms]]).

[F5] The normalized Liouville measure $m_L$ projects to the normalized hyperbolic area measure $m_M=d\mu/\operatorname{area}(M)$ ([[def-normalized-liouville-measure-on-modular-surface]]).

[F6] The closed standard modular domain has $|x|\le1/2$ and $|z|\ge1$; its boundary identifications pair the vertical sides at equal height ([[thm-standard-fundamental-domain-for-the-modular-group]]).

## Proof

1.1 By [F2] and [F3], $\widetilde\mu=c\,m_L$ for some $c\in[0,1]$. Projecting to $M$ and using [F1] and [F5], the corresponding weak limit of the base measures is $\nu=c\,m_M$. [F1, F2, F3, F5, given, construct]

2.1 Fix $T\ge1$ and let $\overline{\mathcal F}=\{x+iy:|x|\le1/2,\ |x+iy|\ge1\}$ be the closed standard domain in [F6]. Its truncation $K_{T+1}=\overline{\mathcal F}\cap\{y\le T+1\}$ is compact: $x$ is bounded, $y\ge\sqrt3/2$ follows from $|z|\ge1$ and $|x|\le1/2$, and $y\le T+1$. On $\overline{\mathcal F}$ define $\chi_T(x+iy)=1$ for $y\le T$, decrease linearly from $1$ to $0$ for $T\le y\le T+1$, and set it to $0$ for $y\ge T+1$. Since it depends only on height, the equal-height vertical-side identifications in [F6] make it a well-defined continuous compactly supported function on $M$. It is $1$ on all of the fundamental domain below height $T$. By [F4], every base measure $\nu_j=|u_j|^2d\mu$ satisfies
$$\int_M\chi_T\,d\nu_j\ge1-\varepsilon(T).$$
The integral converges to $\int_M\chi_T\,d\nu$ along the defining subsequence of $\nu$. [F1, F4, F6, given, construct]

2.2 Using $\nu=c\,m_M$ from step 1.1 and $m_M(M)=1$,
$$1-\varepsilon(T)\le\int_M\chi_T\,d\nu
=c\int_M\chi_T\,dm_M\le c.$$
Since $\varepsilon(T)\to0$ as $T\to\infty$, this gives $c\ge1$. Together with $c\le1$ from [F3], it follows that $c=1$. Therefore $\widetilde\mu=m_L$ and its base projection is $m_M$; the total mass is one, so no mass escapes. [F3, F5, step 1.1, step 2.1, algebra] ∎
