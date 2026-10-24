---
id: def-shift-operator-and-future-coordinate-sigma-algebra
kind: definition
title: "Shift operator and future-coordinate sigma-algebra"
status: published
origin: pipeline
deps: []
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Shift notation before Theorem 5.2.3, printed pp. 279-281"
---

## Definition

Let $(E,\mathcal E)$ and $(\Omega,\mathcal F)$ be measurable spaces. On
$E^{\mathbb N_0}$ with the product sigma-algebra
$\mathcal E^{\otimes\mathbb N_0}$, the **left shift** is
$$ \theta(x_0,x_1,x_2,\ldots)=(x_1,x_2,x_3,\ldots). $$ It is measurable because every coordinate of $\theta$ is a coordinate projection. Write $\theta^n$ for its $n$th iterate, including $\theta^0=\operatorname{id}$. For an $E$-valued process $X$, its **future-coordinate sigma-algebra from time $n$** is $$\mathcal T_n^+=\sigma(X_n,X_{n+1},\ldots).$$
Here an $E$-valued process means a sequence of
$\mathcal F/\mathcal E$-measurable maps $X_n:\Omega\to E$. If
$H:E^{\mathbb N_0}\to\mathbb R$ is
$\mathcal E^{\otimes\mathbb N_0}/\mathcal B(\mathbb R)$-measurable, then
$H(X_n,X_{n+1},\ldots)$ is called a **future path functional from time $n$**.
On canonical path space this is $H\circ\theta^n$. Constants, including zero
and one, and $n=0$ are included. These definitions are choice-free; this
notation does not itself assert existence of a canonical law or attach an
expectation $\mathbb E_xH$ to the functional.
