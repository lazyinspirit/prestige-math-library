---
id: cex-nonrepresentation-action-breaks-brst-nilpotence
kind: counterexample
title: A nonrepresentation does not give a BRST differential
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-classical-lie-action-brst-complex
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §7.7, Lie Algebra Homology and Cohomology"
      url: "https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf"
      locator: "§7.7, Corollary 7.7.3, the Chevalley–Eilenberg cochain coboundary formula specialized to degree zero, printed p. 240 (PDF p. 25)."
---

## Statement refuted

The two-sum Chevalley–Eilenberg formula squares to zero for every linear map
$\rho:\mathfrak g\to\operatorname{End}_k(A)$, even when $\rho$ is not a Lie
algebra representation.

## Facts & Assumptions

**Given:** The two-sum formula from [[def-classical-lie-action-brst-complex]], evaluated algebraically even though the proposed action below is not a representation.

[F1] [[def-classical-lie-action-brst-complex]]: on a $0$-cochain $f\in A$, $(d f)(z)=\rho(z)f$; on a $1$-cochain $g$, $(d g)(z_0,z_1)=\rho(z_0)g(z_1)-\rho(z_1)g(z_0)-g([z_0,z_1])$.

## Counterexample

Take $k=\mathbb C$, the two-dimensional abelian Lie algebra
$\mathfrak g=\mathbb C u\oplus\mathbb C v$, and the commutative algebra
$A=\mathbb C[x,y]$. Let
$$\rho(u)=\partial_x,\qquad \rho(v)=x\partial_y.$$
Both maps are derivations, but their commutator is not the zero map.

1.1 The maps $\partial_x$ and $x\partial_y$ are derivations by the polynomial product rule, and $[\partial_x,x\partial_y]f=\partial_x(x\partial_y f)-x\partial_y(\partial_x f)=\partial_y f$. Since $[u,v]=0$ but $\partial_y\neq0$, $\rho$ is not a Lie algebra homomorphism and is not an admissible input in [[def-classical-lie-action-brst-complex]]. [given, F1, algebra]

2.1 For the $0$-cochain $f=y$, [F1] gives $(df)(u)=0$ and $(df)(v)=x$. Applying [F1] again gives $d^2f(u,v)=\rho(u)(x)-\rho(v)(0)-0=\partial_x x=1$. Thus the formula fails to square to zero when the representation hypothesis is dropped, refuting the statement. [given, F1, step 1.1, algebra] ∎
