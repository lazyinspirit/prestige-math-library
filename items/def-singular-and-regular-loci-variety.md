---
id: def-singular-and-regular-loci-variety
kind: definition
title: "Regular and singular loci"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-regular-local-ring-geometric-point
  - lem-local-dimension-reduced-variety-components
  - def-axiom-of-choice
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4h, Definition 4.35; §4i, Corollary 4.45"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Definition

Let $X$ be a locally Noetherian scheme. Define subsets of its underlying point
set by
$$
X_{\mathrm{reg}}=\{x\in |X|:\mathcal O_{X,x}\text{ is a regular local ring}\},\qquad X_{\mathrm{sing}}=|X|\setminus X_{\mathrm{reg}}.
$$
These are the **regular locus** and **singular locus** of $X$. This definition
alone asserts no openness or closedness property and no smoothness over a
chosen base.

For the classical dimension test, assume the Axiom of Choice and suppose that
$X$ is a reduced classical finite-type space over an algebraically closed
field $k$. If $x\in X$ is closed, define
$$
\dim_x X:=\max_{x\in X_i}\dim X_i,
$$
where $X_i$ range over the irreducible components containing $x$. Then
$$
x\in X_{\mathrm{reg}}\quad\Longleftrightarrow\quad\dim_{\kappa(x)}T_xX=\dim_x X.
$$
The Axiom of Choice is used for this classical component-dimension
identification through [[lem-local-dimension-reduced-variety-components]];
it is not needed to define either locus. At reducible points, $\dim_xX$ uses
only components through $x$, not a single global dimension for all of $X$.

## Facts & Assumptions

**Given:** A locally Noetherian scheme $X$; for the numerical specialization,
also AC and a reduced classical finite-type $X$ over an algebraically closed
field with a closed point $x$.

[F1] [[def-regular-local-ring-geometric-point]]: for any point of a locally
Noetherian scheme, regularity is equivalent to
$\dim_{\kappa(x)}T_xX=\dim\mathcal O_{X,x}$.

[F2] [[lem-local-dimension-reduced-variety-components]]: under AC, for a
reduced classical finite-type space over an algebraically closed field and a
closed point $x$, $\dim\mathcal O_{X,x}$ is the maximum of $\dim X_i$ over
components containing $x$.

[F3] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets
has a choice function; its use here is inherited only through [F2].

## Proof

**Proof technique:** direct.

1.1 Use the regular-point predicate of [F1] to define $X_{\mathrm{reg}}$ as the points whose local rings are regular local, and take its set-theoretic complement in $|X|$ for $X_{\mathrm{sing}}$. These definitions apply to every locally Noetherian scheme, including nonreduced schemes; they do not assert that either set is open or closed. [F1, given, algebra]

2.1 Under the classical hypotheses, [F2] gives $\dim\mathcal O_{X,x}=\dim_xX$. By [F1], $x\in X_{\mathrm{reg}}$ exactly when $\dim_{\kappa(x)}T_xX=\dim\mathcal O_{X,x}$. Substituting the equality from [F2] proves $x\in X_{\mathrm{reg}}$ if and only if $\dim_{\kappa(x)}T_xX=\dim_xX$. This argument uses AC only through [F2], not for the locus definitions in step 1.1. [F1, F2, F3, given, algebra]

3.1 When $X$ is reducible, the right side uses the maximum dimension of components containing this particular $x$ by the definition of $\dim_xX$ and [F2]. Components not containing $x$ do not enter the local dimension, so replacing $\dim_xX$ by the global $\dim X$ is not justified in general. If $\dim_xX=0$ or $1$, the same equivalence specializes respectively to equality of tangent and local dimension zero or one; it does not require all components of $X$ to have the same dimension. [F2, step 2.1, given, algebra]

4.1 If $X=\operatorname{Spec}k$ for a field $k$, its only local ring is the field $k$, its maximal ideal is zero, and its tangent and local dimensions are both zero, so its point belongs to $X_{\mathrm{reg}}$. For an empty scheme, both loci are empty by step 1.1. Nilpotents do not affect the definition in step 1.1, but the numerical component formula is stated only for reduced classical spaces, exactly as required by [F2]. The proof makes no choices beyond AC's stated use through [F2], and the displayed criterion has both directions by step 2.1. [F1, F2, step 1.1, step 2.1, step 3.1, given, algebra] ∎

## Source note

Milne's book-wide field convention is algebraically closed. In §4h,
Definition 4.35, printed pp. 93–94, a point on an affine algebraic variety is
called nonsingular when it lies on a single irreducible component $W$ and
$\dim T_xX=\dim W$; otherwise it is singular. In §4i, Theorem 4.44 and
Corollary 4.45, printed pp. 96–97, Milne identifies that classical notion
with regularity of the local ring; the corollary's proof uses that a regular
local ring is a domain to exclude points on multiple components. Those
passages support the classical terminology, not a general scheme definition
or any openness assertion here. The scheme-theoretic locus definition and the
reducible local-dimension test are supplied and proved through [F1] and [F2].
