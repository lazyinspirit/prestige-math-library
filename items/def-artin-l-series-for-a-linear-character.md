---
id: def-artin-l-series-for-a-linear-character
kind: definition
title: "Artin L-series of a one-dimensional character"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-number-field
  - def-finite-galois-extension-and-galois-group
  - def-prime-above-and-residue-degree
  - def-absolute-norm-of-an-ideal
  - def-inertia-group-of-a-prime
  - thm-decomposition-inertia-exact-sequence
  - def-arithmetic-frobenius-coset
  - thm-galois-action-on-primes-above-a-prime-is-transitive
  - thm-dedekind-zeta-euler-product
proof_strategy: direct
axiom_use: "No additional choice is used; absolute convergence follows by comparison with the Dedekind zeta Euler product."
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §10, Definition 10.1"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.518–519, Artin local factors for representations and the Artin L-series."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VI §1, Artin L-series definition, printed p.184."

---

## Definition

Let $L/K$ be a finite abelian Galois extension of number fields, let $G=\operatorname{Gal}(L/K)$, and let $\chi:G\to\mathbb C^\times$ be a one-dimensional character. For a nonzero prime ideal $\mathfrak p$ of $\mathcal O_K$, choose $\mathfrak P\mid\mathfrak p$ and set $D(\mathfrak P/\mathfrak p)=\{g\in G:g\mathfrak P=\mathfrak P\}$ and $I(\mathfrak P/\mathfrak p)=\ker(D(\mathfrak P/\mathfrak p)\to\operatorname{Gal}(\kappa(\mathfrak P)/\kappa(\mathfrak p)))$. The arithmetic Frobenius coset is the element of $D/I$ inducing $x\mapsto x^{N\mathfrak p}$ on the residue field. If $\chi$ is trivial on $I(\mathfrak P/\mathfrak p)$, evaluate it on any lift $\widetilde{\operatorname{Frob}}_{\mathfrak P/\mathfrak p}\in D$ of this coset; the value is independent of the lift. Since primes above $\mathfrak p$ are conjugate and $G$ is abelian, it is also independent of $\mathfrak P$. Define
$$L_{\mathfrak p}(s,\chi)=\begin{cases}(1-\chi(\widetilde{\operatorname{Frob}}_{\mathfrak P/\mathfrak p})(N\mathfrak p)^{-s})^{-1},&\chi|_{I(\mathfrak P/\mathfrak p)}=1,\\1,&\chi|_{I(\mathfrak P/\mathfrak p)}\ne1.\end{cases}$$
For $\operatorname{Re}(s)>1$, the **Artin L-series** is the absolutely convergent Euler product $L_{L/K}(s,\chi)=\prod_{\mathfrak p}L_{\mathfrak p}(s,\chi)$.

## Definition references

[[def-finite-galois-extension-and-galois-group]]

[[def-number-field]]

[[def-prime-above-and-residue-degree]]

[[def-absolute-norm-of-an-ideal]]

[[def-inertia-group-of-a-prime]]

[[thm-decomposition-inertia-exact-sequence]]

[[def-arithmetic-frobenius-coset]]

[[thm-galois-action-on-primes-above-a-prime-is-transitive]]

[[thm-dedekind-zeta-euler-product]]

[Neukirch, *Algebraic Number Theory*, VII §10](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[Milne, *Class Field Theory*, VI §1](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** A finite abelian Galois extension $L/K$ of number fields, its group $G$, a one-dimensional character $\chi$, a nonzero prime ideal $\mathfrak p$ of $K$, and a prime $\mathfrak P$ above it.

[F1] The arithmetic Frobenius coset is the residue-field element in $D(\mathfrak P/\mathfrak p)/I(\mathfrak P/\mathfrak p)$ inducing $x\mapsto x^{N\mathfrak p}$. [[def-arithmetic-frobenius-coset]] [[thm-decomposition-inertia-exact-sequence]]

[F2] Primes above $\mathfrak p$ are conjugate; conjugation carries the decomposition, inertia, and Frobenius data to one another. [[thm-galois-action-on-primes-above-a-prime-is-transitive]]

[F3] For $\sigma>1$, the Dedekind zeta ideal series and Euler product converge absolutely. [[thm-dedekind-zeta-euler-product]]



**Given:** The data in the Definition.

## Proof

**Proof technique:** direct.

1.1 For fixed $\mathfrak P$, two lifts of the Frobenius coset differ by an element of $I(\mathfrak P/\mathfrak p)$. If $\chi$ is trivial on inertia, their character values agree, so the local factor does not depend on the lift. [given, algebra]

2.1 If $\mathfrak P'=\sigma\mathfrak P$ for $\sigma\in G$, [F2] conjugates the decomposition and inertia groups and sends the Frobenius coset to its conjugate. Since $G$ is abelian, $\chi(\sigma g\sigma^{-1})=\chi(g)$ for every lift $g$; the inertia-trivial condition is preserved. Hence the local factor is independent of the prime above $\mathfrak p$. [F2, step 1.1, algebra]

3.1 Since $G$ is finite, each value of $\chi$ has modulus one. For $\sigma=\operatorname{Re}(s)>1$, the prime-ideal weights sum to at most $\zeta_K(\sigma)$, because prime ideals form a subset of the nonzero integral ideals in [F3]. An unramified or inertia-trivial factor satisfies $$|L_{\mathfrak p}(s,\chi)-1|\le\frac{(N\mathfrak p)^{-\sigma}}{1-(N\mathfrak p)^{-\sigma}}\le\frac{(N\mathfrak p)^{-\sigma}}{1-2^{-\sigma}},$$ and a factor equal to $1$ has difference zero. By [F3], $\sum_{\mathfrak p}(N\mathfrak p)^{-\sigma}$ converges, so the sum of absolute local-factor differences converges and the Artin Euler product converges absolutely in the stated half-plane. [F3, given, algebra] ∎

