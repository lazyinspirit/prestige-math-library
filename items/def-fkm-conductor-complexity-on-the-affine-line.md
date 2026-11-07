---
id: def-fkm-conductor-complexity-on-the-affine-line
kind: definition
title: "Fouvry–Kowalski–Michel conductor complexity on the affine line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-swan-conductor-of-an-l-adic-inertia-representation
  - def-middle-extension-l-adic-sheaf-on-a-curve
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace functions over finite fields and applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
verification:
  precheck: n/a
---
## Definition

Let $k$ be a finite field or an algebraically closed field of characteristic $p>0$, let $\ell\ne p$, and let $j:U\hookrightarrow\mathbb P^1_k$ be a dense open immersion. Let $L$ be a finite-rank lisse coefficient-$E$ adic sheaf on $U$, where $E/\mathbb Q_\ell$ is finite or $E=\overline{\mathbb Q}_\ell$, and suppose $M=j_*L$ is its constructible ordinary, underived middle extension. Replace $U$ by its maximal lisse open when specifying singularities. Write $\operatorname{Sing}(M)$ for the finite set of geometric points of $\mathbb P^1_{\bar k}$ where $M$ is not lisse. Define the Fouvry--Kowalski--Michel **conductor complexity** of $M$, and of its middle-extension restriction on $\mathbb A^1_k$, by
$$c(M)=\operatorname{rank}(L)+|\operatorname{Sing}(M)|+\sum_{x\in\operatorname{Sing}(M)}\operatorname{Sw}_x(L).$$
Ranks and invariant codimensions in the Swan integral are taken over the coefficient field $E$. For a finite extension $E/\mathbb Q_\ell$, this agrees with dividing the rank and Swan terms of restriction of scalars by $[E:\mathbb Q_\ell]$; it does not divide the number of geometric singularities. For $\overline{\mathbb Q}_\ell$ coefficients one uses a finite field of definition for the given sheaf; extending that field preserves these dimensions and the displayed complexity. The definition presupposes the specified middle-extension object and does not itself prove the general constructibility, boundary-stalk or ramification-compatibility theorems.

This includes the original globally lisse affine-line case: if $L$ is lisse on all of $\mathbb A^1_k$, then $\operatorname{Sing}(M)\subseteq\{\infty\}$ and the same formula is exactly the previous one. It also includes dense-lisse affine-line middle extensions with finite singularities such as a Kummer sheaf singular at $0$. This complexity is a size parameter distinct from the local Artin conductor exponent $a_x(L)=\operatorname{codim}L^{I_x}+\operatorname{Sw}_x(L)$.

## Definition references

[[def-swan-conductor-of-an-l-adic-inertia-representation|Swan conductor of an l-adic inertia representation]]

[[def-middle-extension-l-adic-sheaf-on-a-curve|Middle extension of a lisse l-adic sheaf on a curve]]

[[def-artin-conductor-of-an-l-adic-inertia-representation|Artin conductor of an l-adic inertia representation]]

[Fouvry–Kowalski–Michel, *Trace functions over finite fields and applications*, Definition2.2.8, printed p10, and Section4.1 in the Dec3,2014 draft](https://people.math.ethz.ch/~kowalski/elements.pdf)
