---
id: def-open-and-closed-stars-in-a-subdivision
kind: definition
title: "Open and closed stars in a subdivision"
status: published
origin: pipeline
deps: ["def-barycentric-subdivision-of-an-abstract-simplicial-complex", "def-geometric-realization-of-an-abstract-simplicial-complex"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Definition

For a vertex $v$ of a complex $T$ define its **open star** by $\operatorname{st}_T(v)=\{x\in|T|:x_v>0\}$. Define its **closed star** to be the subcomplex
$$\operatorname{St}_T(v)=\{\tau\in T:\tau\cup\{v\}\in T\}.$$
These definitions apply separately to $T=K$ and $T=\operatorname{sd}K$ from [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]]; in the latter, vertices are nonempty original faces. Coordinates always refer to $|T|$ as in [[def-geometric-realization-of-an-abstract-simplicial-complex]].

On each simplex the condition $x_v>0$ is open, so the open star is weakly open. The closed star is closed under faces; its realization meets every simplex in a finite union of faces and is weakly closed. If $x\in|\tau|$ and $\tau\cup\{v\}\in T$, then $(1-t)x+te_v$ for $0<t\leq1$ is in the open star and converges to $x$ in that finite simplex. Hence the realization of the closed star is exactly the closure of the open star. Merely listing simplices containing $v$ would omit faces and would not define a subcomplex.

## Source locators

2.C, p.178, star paragraph and Lemma 2C.2.
