---
id: def-complete-linear-system
kind: definition
title: "Complete linear system"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-projective-cohomology-finite-dimensional-field
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-coherent-module-scheme
  - def-divisor-smooth-proper-curve
  - def-effective-cartier-divisor
  - def-finite-type-finite-presentation-module-sheaf
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-linear-equivalence-cartier-divisors
  - def-locally-noetherian-and-noetherian-scheme
  - def-quasi-coherent-module-scheme
  - def-riemann-roch-space-of-divisor
  - def-vector-space
  - lem-effective-divisors-sections-mod-scalars
  - lem-field-is-noetherian
  - thm-cartier-weil-divisors-curves-agree
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
---

## Definition

Let $k$ be a field, let $C$ be a smooth proper geometrically integral curve
over $k$ ([[def-algebraic-curve-over-field]]), and let $D$ be a divisor on $C$
([[def-divisor-smooth-proper-curve]]). The **complete linear system of $D$**
is the set
$$|D|=\{\,D'\text{ effective divisor on }C: D'\text{ is linearly equivalent to }D\,\},$$
the set of effective divisors on $C$ linearly equivalent to $D$; linear
equivalence on the closed-point divisor group means that $D'-D$ is the
principal divisor of a function in $k(C)^{\times}$, and effectivity means
nonnegativity of all coefficients
([[def-divisor-smooth-proper-curve]]).

The set in this definition is the set of effective divisors in the linear
equivalence class of $D$. This set definition does not assert a projective
space structure. For the following correspondence with $P(L(D))$ and the
finite-dimensional projective-space structure, assume the Axiom of Choice
([[def-axiom-of-choice]]): this is the current supplier route for the
Cartier/Weil identification, the section dictionary, and proper coherent
cohomology finiteness. AC supplies the Dependent Choice premise of
[[thm-cartier-weil-divisors-curves-agree]] through
[[thm-choice-implies-dependent-implies-countable-choice]].

Under this identification, the relation above is the Cartier relation of
[[def-linear-equivalence-cartier-divisors]], and coefficientwise effectivity
agrees with Cartier effectivity of [[def-effective-cartier-divisor]].

Let $L(D)$ be the Riemann-Roch space of $D$
([[def-riemann-roch-space-of-divisor]]), a $k$-subspace of the function field
$k(C)$ ([[def-vector-space]]). By
[[lem-effective-divisors-sections-mod-scalars]] the assignment
$f\mapsto\operatorname{div}(f)+D$ induces a bijection
$$ (L(D)\setminus\{0\})/k^{\times}\;\longrightarrow\;|D|,\qquad [f]\longmapsto\operatorname{div}(f)+D,$$
whose inverse sends an effective divisor $D'\in|D|$ to the $k^{\times}$-orbit
of a function $f$ with $D'=\operatorname{div}(f)+D$;
thus $|D|$ is in bijection with the set of $k$-lines in $L(D)$. One writes
$$|D|=P(L(D))$$
for this set of lines, and calls $|D|$ the **complete linear system** attached to
$D$. It is **empty** exactly when $L(D)=0$, that is, when no effective divisor
is linearly equivalent to $D$ ([[lem-effective-divisors-sections-mod-scalars]]).
For this curve and divisor, $L(D)$ is finite-dimensional by the local
coherence route. The curve is finite type over the field $k$, and a field is
Noetherian, so every finite-type affine chart of $C$ is Noetherian and $C$ is
locally Noetherian. The Cartier construction makes $\mathcal O_C(D)$ an
invertible sheaf, hence locally free of rank one; it is therefore
quasi-coherent and of finite type. On a locally Noetherian scheme this makes
it coherent. Since $C$ is proper over $k$, the published
[[cor-projective-cohomology-finite-dimensional-field]] applies and makes
$H^0(C,\mathcal O_C(D))$ finite-dimensional. The current
[[def-riemann-roch-space-of-divisor]] and rational-section dictionary identify
this space with $L(D)$. Thus the set of $k$-lines $P(L(D))$ is the projective
space of lines in a finite-dimensional vector space, so the complete linear
system carries the structure of a projective linear system.

The construction depends only on the linear equivalence class of $D$. If
$D'=D+\operatorname{div}(h)$ for $h\in k(C)^{\times}$, then multiplication by
$h$ maps $L(D')$ to $L(D)$: for $f\in L(D')$,
$$\operatorname{div}(hf)+D=\operatorname{div}(f)+\operatorname{div}(h)+D=\operatorname{div}(f)+D'\ge0.$$
Conversely, for $g\in L(D)$, the function $g/h$ lies in $L(D')$, so this is an
isomorphism. Under the two section-to-divisor bijections, the line $[f]$ maps
to $[hf]$, and
$$\operatorname{div}(hf)+D=\operatorname{div}(f)+D'.$$
Thus the associated effective divisor is the same on both sides, and
$|D|=|D'|$ as sets of effective divisors.

**Current supplier interfaces.** The effective-Cartier and Cartier-linear-
equivalence conventions are given by [[def-effective-cartier-divisor]] and
[[def-linear-equivalence-cartier-divisors]], and the curve-level
[[thm-cartier-weil-divisors-curves-agree]] transports them to closed-point
divisors while preserving principal divisors. The current
[[def-riemann-roch-space-of-divisor]] body identifies $L(D)$ with
$H^0(C,\mathcal O_C(D))$, and the current
[[lem-effective-divisors-sections-mod-scalars]] body gives the orbit
correspondence used above. Finite-dimensionality follows from the local
Noetherian/coherence route above and the published
[[cor-projective-cohomology-finite-dimensional-field]]. These structural
claims use the AC premise stated above; AC supplies the DC premise of the
curve Cartier-to-Weil result by
[[thm-choice-implies-dependent-implies-countable-choice]]. Under the
Cartier-to-Weil identification, the sheaf $\mathcal O_C(D)$ is the invertible
sheaf defined by [[def-invertible-sheaf-of-cartier-divisor]]. The set
definition remains separate from the projective-space structure.
