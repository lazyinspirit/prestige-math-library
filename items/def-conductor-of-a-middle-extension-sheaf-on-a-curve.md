---
id: def-conductor-of-a-middle-extension-sheaf-on-a-curve
kind: definition
title: "Conductor of a middle-extension sheaf on a curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-middle-extension-l-adic-sheaf-on-a-curve
  - def-geometric-local-field-at-a-curve-point
  - def-artin-conductor-of-an-l-adic-inertia-representation
  - lem-curve-closed-subsets-finite
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Grothendieck et al., SGA 5, Exposé X, §§4–7 (full text edition)"
      url: https://grothendiecksga.com/read/sga5/en/X-4.html
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace functions over finite fields and applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
verification:
  precheck: n/a
---
## Definition

Let $X$ be a smooth proper connected curve over an algebraically closed field of characteristic $p>0$, let $U\subseteq X$ be a dense open, let $j:U\hookrightarrow X$, and let $\mathcal L$ be a lisse finite-rank $\mathbb Q_\ell$-sheaf on $U$ with $\ell\ne p$. Let $M=j_*\mathcal L$ be its middle-extension sheaf and let $S=X\setminus U$. For $x\in S$, write $K_x=\operatorname{Frac}(\widehat{\mathcal O}_{X,x})$ for the geometric local field and set $I_x=G_{K_x}$. Let $V_x$ be a geometric generic stalk of $\mathcal L$ with this inertia action. Define $a_x(M)=\operatorname{codim}V_x^{I_x}+\operatorname{Sw}_x(V_x)$ and the **conductor divisor** $\operatorname{Cond}(M)=\sum_{x\in S}a_x(M)[x]$ in the free abelian group on the closed points of $X$. The Swan summand measures wild ramification; the codimension summand measures inertia fixed-space loss.

## Definition references

[[lem-curve-closed-subsets-finite|Proper closed subsets of a curve are finite]]


[[def-middle-extension-l-adic-sheaf-on-a-curve|Middle extension of a lisse l-adic sheaf on a curve]]

[[def-geometric-local-field-at-a-curve-point|Geometric local field at a curve point]]

[[def-artin-conductor-of-an-l-adic-inertia-representation|Artin conductor of an l-adic inertia representation]]

[SGA 5, Exposé X §§4.2–4.3](https://grothendiecksga.com/read/sga5/en/X-4.html)

[Fouvry–Kowalski–Michel, *Trace functions over finite fields and applications*, §§2.5–2.6](https://people.math.ethz.ch/~kowalski/elements.pdf)
