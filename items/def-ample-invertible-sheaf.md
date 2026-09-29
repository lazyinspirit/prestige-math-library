---
id: def-ample-invertible-sheaf
kind: definition
title: "Absolute ampleness by affine section opens"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-invertible-sheaf
  - def-quasi-compact-and-quasi-separated-scheme
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Properties of Schemes, Definition 28.27.1 (Tag 01PS)"
      url: https://stacks.math.columbia.edu/tag/01PS
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 17.6"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Definition

Let $X$ be a scheme and let $L$ be an invertible $\mathcal O_X$-module
([[def-invertible-sheaf]]). Recall that $X$ is quasi-compact when its
underlying topological space is quasi-compact
([[def-quasi-compact-and-quasi-separated-scheme]]).

*Nonvanishing loci.* For a global section $s\in\Gamma(X,L^n)$ of a positive
power with $n\ge1$, the **nonvanishing locus of $s$** is
$$X_s=\{\,x\in X\;:\;\text{the image of }s\text{ in the fibre }L^n\otimes_{\mathcal O_X}\kappa(x)\text{ is nonzero}\,\}.$$
This set is open: trivialise $L^n$ near a point, writing $s=f e$
with $e$ a frame. In the local ring at $x$, the fibre value is nonzero
exactly when $f_x$ is a unit. A germ inverse of $f_x$ is represented by a
section $g$ on a neighbourhood of $x$; since $(fg)_x=1$, the equality
$fg=1$ holds after shrinking that neighbourhood. Thus $f_y$ is a unit
throughout that neighbourhood, proving openness. The set $X_s$ does not depend on
the chosen trivialisation: the vanishing of the fibre component is an
intrinsic condition on the section.

**Definition.** An invertible $\mathcal O_X$-module $L$ is **ample** when the
following two conditions hold.

1. $X$ is quasi-compact.
2. For every point $x\in X$ there exist an integer $n\ge1$ and a global section
   $s\in\Gamma(X,L^n)$ with
   $$x\in X_s\qquad\text{and}\qquad X_s\ \text{is an affine scheme.}$$

The **empty scheme is allowed**: if $X=\varnothing$ then $X$ is quasi-compact
and condition (2) is vacuous, so every invertible sheaf on $X$ — there is
exactly one, the zero module sheaf, which is invertible because the empty
scheme has no points — is ample on $X$.

## Remarks

- **Only positive powers occur.** Condition (2) uses a section of $L^n$ with
  $n\ge1$; a section of $L^0=\mathcal O_X$ alone is never used, so the
  definition is stable under the conventions recorded at
  [[def-twisting-sheaf-proj]].
- **The affine loci are a basis.** If $L$ is ample, then for every point $x$
  a nonvanishing affine locus contains $x$; since $X$ is quasi-compact,
  finitely many such affine loci cover $X$. Both facts are used later but
  neither is part of the definition: the definition asks for one locus per
  point.
- **Equivalent formulations are results, not conventions.** The
  global-generation characterisation of ampleness
  (Serre's criterion) is proved in
  [[thm-serre-criterion-ampleness]] under the Axiom of Choice ([[def-axiom-of-choice]]) and the Noetherian hypotheses stated
  there. Relative ampleness over a base is a separate
  notion, defined at [[def-relatively-ample-invertible-sheaf]].
