---
id: lem-extended-hall-torus-action-is-well-defined
kind: lemma
title: "The extended Hall torus action is well-defined"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-extended-hall-algebra-and-composition-subalgebra
  - def-euler-twisted-hall-algebra
  - lem-hall-euler-form-is-additive
  - lem-euler-twisted-hall-product-is-associative-and-unital
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.5, PDF p. 16, torus action relation in the extended Hall algebra."
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures (1993)"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§§3–4: the symmetric Euler torus action and Cartan relations."
verification:
  precheck: pending
---

## Statement

For each $\alpha\in K_0$, the map on homogeneous Hall elements
$x\mapsto\nu^{(\alpha,\deg x)}x$ is an algebra automorphism. Hence the
cross-relations in [[def-extended-hall-algebra-and-composition-subalgebra]]
define an associative crossed-product algebra.

## Facts & Assumptions

**Given:** The associative graded Hall algebra and its symmetric Euler form.

[F1] Every Hall product is homogeneous:
$\deg([M]\star[N])=[M]+[N]$, since each middle term is in a short exact
sequence with endpoints $M,N$
([[def-euler-twisted-hall-algebra]]).

[F2] The form $(\alpha,\beta)$ is symmetric and bilinear on $K_0$
([[lem-hall-euler-form-is-additive]]).

[F3] The Hall product is associative and unital
([[lem-euler-twisted-hall-product-is-associative-and-unital]]).

## Proof



**Proof technique:** direct.

1.1 Let $x,y$ be homogeneous of degrees $\beta,\gamma$. By [F1], $\deg(x\star y)=\beta+\gamma$. Thus $\nu^{(\alpha,\beta+\gamma)}(x\star y)= \nu^{(\alpha,\beta)+(\alpha,\gamma)}(x\star y)$ by [F2], which is the product of the two scaled factors. Therefore the scaling preserves multiplication. [F1, F2, algebra]

2.1 Scaling by $\nu^{-(\alpha,\deg x)}$ is the inverse map, so the scaling in step 1.1 is an automorphism. Associativity of the crossed product follows from [F3], the action law in step 1.1, and addition in $K_0$: in the declared left-torus normal order, for homogeneous $x,y,z$ of degrees $m,n,p$, the product is $(k_\alpha x)(k_\beta y)=\nu^{-(\beta,m)}k_{\alpha+\beta}(x\star y)$. A triple $k_\alpha x,k_\beta y,k_\gamma z$ contributes exponent $-(\beta,m)-(\gamma,m+n)$ in the first parenthesization and $-(\gamma,n)-(\beta+\gamma,m)$ in the second. Bilinearity makes these equal, and [F3] identifies the Hall products. The unit is $k_0[0]$, and the conjugation relation follows by the same product formula. [F2, F3, step 1.1, algebra] ∎

