---
id: def-sr-simultaneity-slice-and-rest-distance
kind: definition
domain: mathematics
title: "Simultaneity slices and rest distance relative to a future unit timelike vector"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, thm-sr-proper-time-and-observer-decomposition, def-lorentz-orthogonality-and-orthogonal-complement, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Definition

Let $(A,V,\eta,C^+)$ be the affine Minkowski space ([[def-sr-affine-minkowski-model]]) and let $n\in V$ be future unit timelike, $\eta(n,n)=-1$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

**(a) Rest space.** The **rest space** of $n$ is the hyperplane $n^\perp=\{v\in V:\eta(n,v)=0\}$; by [[thm-sr-proper-time-and-observer-decomposition]] clause (c) it is a three-dimensional linear subspace on which $\eta$ restricts to a positive-definite symmetric form, and the orthogonal projection onto it is $h(v)=v+\eta(n,v)n$ ([[def-lorentz-orthogonality-and-orthogonal-complement]]).

**(b) Simultaneity slice.** For $p\in A$ the **simultaneity slice of $p$ relative to $n$** is the affine hyperplane $H(p,n):=p+n^\perp=\{q\in A:\eta(n,q-p)=0\}$; it contains $p$ and is three-dimensional, not a single point.

**(c) Simultaneity relation.** Define $q\sim_nq'$ if and only if $\eta(n,q'-q)=0$, that is, if and only if $q'-q\in n^\perp$. Then $\sim_n$ is an equivalence relation on $A$ whose equivalence classes are exactly the slices $H(p,n)$; reflexivity, symmetry and transitivity are consequences of $n^\perp$ being a linear subspace and are not physical assumptions.

**(d) Rest distance.** For $p,q$ with $q\in H(p,n)$ define $d_n(p,q):=\sqrt{\eta(q-p,q-p)}$. This is a real number $\ge0$, symmetric in $p,q$, vanishes exactly when $p=q$, and satisfies the triangle inequality on each slice, because the restriction of $\eta$ to $n^\perp$ is a positive-definite inner product.

**(e) Dependence on $n$ and scope.** The relation $\sim_n$ and the slices $H(p,n)$ depend on the chosen future unit timelike vector $n$: an event $q$ with $\eta(n,q-p)=0$ generally has $\eta(n',q-p)\ne0$ for another future unit $n'$ (an explicit witness is given on this page). Simultaneity here is defined relative to a prescribed observer vector and is not an absolute relation. For a congruence $n(\cdot)$ one may form the pointwise slices $H\bigl(p,n(p)\bigr)$; the separate integrability question concerns the tangent distribution $p\mapsto n(p)^\perp$, not the assertion that these affine hyperplanes themselves are its integral hypersurfaces. Integral hypersurfaces can be curved; no global foliation is asserted.

## Remarks

- **Well-definedness.** $n^\perp$ is three-dimensional because $\eta$ is nondegenerate and $n\ne0$ ([[def-lorentz-orthogonality-and-orthogonal-complement]]); positive definiteness of the restriction of $\eta$ to $n^\perp$, together with $h(n)=0$, $h\circ h=h$ and $\operatorname{im}h=n^\perp$, is clause (c) of [[thm-sr-proper-time-and-observer-decomposition]]. Consequently each slice $H(p,n)$ is the translate $p+n^\perp$, an affine hyperplane of dimension three, and $\eta(n,q-p)=0$ is equivalent to $q-p\in n^\perp$, so the equivalence classes of $\sim_n$ are exactly the slices: this uses linearity of $\eta$ in each variable and linearity of $n^\perp$ as a subspace, nothing else.

- **The rest distance is an inner-product norm.** On the slice through $p$ the map $(q,q')\mapsto\eta(q-p,q'-p)$ is the positive-definite symmetric form obtained by restricting $\eta$ to $n^\perp$, transported to the affine hyperplane by subtracting $p$; the axioms of a positive-definite inner product therefore give nonnegativity, symmetry, the vanishing condition $d_n(p,q)=0\Leftrightarrow p=q$ and the triangle inequality. No choice principle is used: all objects are finite-dimensional or explicitly parametrized.

- **Dependence on the observer vector is not a defect.** Two distinct future unit timelike vectors $n\ne n'$ have distinct rest spaces $n^\perp\ne n'^\perp$ in general, and the relation $\sim_n$ is the relation of lying in a common slice of the foliation of $A$ by hyperplanes orthogonal to the fixed vector $n$. For a congruence the vector varies from point to point, and the affine pointwise slices need not fit together. The Frobenius statement below tests whether there are hypersurfaces with tangent spaces $n(p)^\perp$; it does not identify those hypersurfaces with the entire affine slices $H(p,n(p))$. No global simultaneity is asserted by this definition.
