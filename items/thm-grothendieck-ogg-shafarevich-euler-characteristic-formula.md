---
id: thm-grothendieck-ogg-shafarevich-euler-characteristic-formula
kind: theorem
title: "Grothendieck–Ogg–Shafarevich Euler characteristic formula"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-smooth-curve-over-finite-field
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-compactly-supported-etale-cohomology
  - thm-finiteness-of-compactly-supported-etale-cohomology-for-curves-over-algebraically-closed-fields
  - def-geometric-local-field-at-a-curve-point
  - def-swan-conductor-of-an-l-adic-inertia-representation
  - lem-curve-closed-subsets-finite
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Grothendieck et al., SGA 5, Exposé X, §§4–7 (full text edition)"
      url: https://grothendiecksga.com/read/sga5/en/X-4.html
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace functions over finite fields and applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
verification:
  precheck: pending
---
## Statement

Let $k$ be an algebraically closed field of characteristic $p>0$, let $U$ be a smooth geometrically connected nonproper curve over $k$, let $X$ be a smooth proper connected curve containing $U$ as a dense open, and put $S=X\setminus U$. Let $\ell\ne p$ and let $\mathcal F$ be a lisse finite-rank $\mathbb Q_\ell$-sheaf on $U$. Define $\chi_c(U,\mathcal F)=\sum_i(-1)^i\dim_{\mathbb Q_\ell}H_c^i(U,\mathcal F)$, which is finite by the compact-support finiteness theorem. Then
$$\chi_c(U,\mathcal F)=\operatorname{rank}(\mathcal F)\,\chi_c(U,\mathbb Q_\ell)-\sum_{x\in S}\operatorname{Sw}_x(\mathcal F),$$
where $\operatorname{Sw}_x(\mathcal F)$ is the Swan conductor of the local geometric inertia representation at $x$.

## Statement references

[[lem-curve-closed-subsets-finite|Proper closed subsets of a curve are finite]]


[[def-lisse-l-adic-sheaf-on-a-scheme|Lisse finite-rank adic sheaves]]

[[def-compactly-supported-etale-cohomology|Compactly supported étale cohomology]]

[[def-swan-conductor-of-an-l-adic-inertia-representation|Swan conductor of an l-adic inertia representation]]

[SGA 5, Exposé X §§5–7](https://grothendiecksga.com/read/sga5/en/X-5.html)

[Fouvry–Kowalski–Michel, *Trace functions over finite fields and applications*, Theorem 4.1.9](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Facts & Assumptions

**Given:** A smooth geometrically connected open curve $U$, smooth proper completion $X$, finite boundary $S$, algebraically closed $k$ of characteristic $p>0$, $\ell\ne p$, and lisse finite-rank $\mathbb Q_\ell$-sheaf $\mathcal F$.

[F1] [[def-compactly-supported-etale-cohomology]]: $H_c^i(U,\mathcal F)=H^i(R\Gamma_c(U,\mathcal F))$.

[F2] [[thm-finiteness-of-compactly-supported-etale-cohomology-for-curves-over-algebraically-closed-fields]]: these cohomology groups are finite-dimensional and zero outside degrees $0,1,2$.

[F3] [[def-swan-conductor-of-an-l-adic-inertia-representation]]: the local Swan conductor is computed by the codimension of upper-group invariants.

No proof is supplied in the actual compact-support prerequisite for finiteness over an algebraically closed field, and the relevant local trace/duality inputs in batch 25 remain unproved. SGA 5 Exposé X §§5–7 supplies the classical proof route, but its finite-cover Euler formula, local epsilon-term comparison, derived-invariant lemma, and l-adic passage have not been reconstructed here. The full statement is retained and escalated.
