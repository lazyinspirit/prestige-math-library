---
id: thm-classical-lie-action-brst-differential-squares-zero
kind: theorem
title: The classical Lie-action BRST differential squares to zero
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-classical-lie-action-brst-complex
  - thm-the-chevalley-eilenberg-differential-squares-to-zero
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §7.7, Lie Algebra Homology and Cohomology"
      url: "https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf"
      locator: "§7.7, Corollary 7.7.3, the cochain differential formula, printed p. 240 (PDF p. 25); Exercise 7.7.1 asks the reader to verify square-zero, which is supplied by the local theorem below."
---

## Statement

For every classical Lie-action BRST input of
[[def-classical-lie-action-brst-complex]] and every $n\geq0$,
$$d_{\mathrm{BRST}}^{n+1}d_{\mathrm{BRST}}^n=0.$$
Consequently, the quotient
$$H^n_{\mathrm{BRST}}(\mathfrak g,A):=\ker(d_{\mathrm{BRST}}^n)/\operatorname{im}(d_{\mathrm{BRST}}^{n-1})$$
is a well-defined vector space, with $C^{-1}_{\mathrm{BRST}}=0$.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$, a Lie algebra $\mathfrak g$, a unital commutative $k$-algebra $A$, and a Lie algebra representation of $\mathfrak g$ on $A$ by derivations.

[F1] [[def-classical-lie-action-brst-complex]]: the BRST cochains are $\operatorname{Hom}_k(\Lambda^n\mathfrak g,A)$ and the operator is the zero-based two-sum Chevalley–Eilenberg formula for the representation $\rho$.

[F2] [[thm-the-chevalley-eilenberg-differential-squares-to-zero]]: for a Lie algebra over a field and a representation on a module, the displayed Chevalley–Eilenberg differential satisfies $d^{n+1}d^n=0$ for every $n$.

## Proof

1.1 The assumptions in [F1] make $A$ a $\mathfrak g$-module because $\rho$ is a Lie algebra homomorphism, so $[\rho(x),\rho(y)]=\rho([x,y])$. The cochain spaces and both signed sums in $d_{\mathrm{BRST}}$ are term-by-term those in [F2]. [given, F1, F2]

2.1 Therefore [F2] applies to these exact inputs and gives $d_{\mathrm{BRST}}^{n+1}d_{\mathrm{BRST}}^n=0$ for every $n\geq0$. [given, F1, F2, step 1.1]

3.1 If $z\in\operatorname{im}(d_{\mathrm{BRST}}^{n-1})$, write $z=d_{\mathrm{BRST}}^{n-1}w$. Step 2.1 gives $d_{\mathrm{BRST}}^n z=d_{\mathrm{BRST}}^nd_{\mathrm{BRST}}^{n-1}w=0$, so the image is contained in the kernel and the displayed quotient is well-defined. [given, step 2.1, algebra] ∎
