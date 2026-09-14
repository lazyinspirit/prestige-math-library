---
id: prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras
kind: proposition
title: Subalgebras, quotients, and extensions of solvable Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-derived-series-and-solvable-lie-algebra, def-quotient-lie-algebra, prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Proposition 3.4"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Proposition 3.4, printed p. 16"
---

## Statement

Subalgebras and quotients of solvable Lie algebras are solvable. If
$\mathfrak i$ is a solvable ideal of $\mathfrak g$ and
$\mathfrak g/\mathfrak i$ is solvable, then $\mathfrak g$ is solvable; more
precisely,

$$\operatorname{dl}(\mathfrak g)\leq\operatorname{dl}(\mathfrak i)+\operatorname{dl}(\mathfrak g/\mathfrak i).$$

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$, a subalgebra $\mathfrak h$, and, for
the quotient and extension assertions, an ideal $\mathfrak i$.

[L1] Solvability is termination of the derived series
([[def-derived-series-and-solvable-lie-algebra]]).

[L2] An ideal defines a quotient Lie algebra and a surjective canonical
projection $\pi:\mathfrak g\to\mathfrak g/\mathfrak i$
([[def-quotient-lie-algebra]]).

[L3] The kernel of a Lie homomorphism is an ideal and its quotient by the
kernel identifies with its image
([[prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 Induction on $r$ gives $\mathfrak h^{(r)}\subseteq\mathfrak g^{(r)}$: it is clear at $r=0$, and bracketing a subspace with itself preserves containment. Therefore a vanishing derived term of $\mathfrak g$ forces the corresponding term of $\mathfrak h$ to vanish. [given, L1, algebra]

1.2 Bracket preservation and surjectivity of the canonical map in [L2] give $(\mathfrak g/\mathfrak i)^{(r)}=\pi(\mathfrak g^{(r)})$ for every $r$. Thus every solvable quotient of $\mathfrak g$ terminates no later than $\mathfrak g$; [L3] records the same calculation for any homomorphic image. [L1, L2, L3, algebra]

2.1 Suppose $m=\operatorname{dl}(\mathfrak g/\mathfrak i)$ and $n=\operatorname{dl}(\mathfrak i)$. Step 1.2 gives $\pi(\mathfrak g^{(m)})=0$, so $\mathfrak g^{(m)}\subseteq\ker\pi=\mathfrak i$. Iterating the derived operation $n$ further times gives $\mathfrak g^{(m+n)}=(\mathfrak g^{(m)})^{(n)}\subseteq\mathfrak i^{(n)}=0$. This proves solvability and the bound, including $m=0$ or $n=0$. [L1, L2, L3, step 1.2] ∎
