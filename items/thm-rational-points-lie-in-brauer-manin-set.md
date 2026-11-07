---
id: thm-rational-points-lie-in-brauer-manin-set
kind: theorem
title: "Rational points lie in the Brauer–Manin set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-global-field
  - def-adelic-points-of-variety-over-global-field
  - def-cohomological-brauer-group-of-a-variety
  - def-brauer-manin-set
  - def-local-invariant-map-of-the-brauer-group
  - thm-global-brauer-hasse-noether-exact-sequence-number-field
  - thm-global-function-field-brauer-hasse-sequence
  - thm-number-field-brauer-classes-have-finite-local-support
  - thm-classic-brauer-group-is-h2-galois-cohomology
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - def-separated-scheme-over-base
  - def-locally-finite-type-and-finite-type-morphism
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §8.2.2, Proposition 8.2.2 and Corollary 8.2.6"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Functorial evaluation diagram and vanishing of the sum of local invariants for a rational point."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §§2.1–2.3"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Local evaluation and the Brauer–Manin pairing."
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Appendix A.7"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Complete function-field global Brauer invariant sequence proof."
    - title: "Werner Hürlimann, A short proof of the Albert–Brauer–Hasse–Noether theorem"
      url: "https://www.numdam.org/item/AST_1992__209__215_0.pdf"
      locator: "Complete number-field Brauer–Hasse–Noether proof route."
verification: {}
---

## Statement

Assume the Axiom of Choice (AC), Dependent Choice (DC), and Countable Choice (AC$_\omega$). Let $K$ be a global field,
let $X$ be a separated finite-type $K$-scheme, and let $P\in X(K)$. The
diagonal tuple $P_{\mathbb A}=(P)_{v}\in X(\mathbb A_K)$ lies in the
Brauer–Manin set:
$$X(K)\subseteq X(\mathbb A_K)^{\operatorname{Br}}.$$
For every cohomological Brauer class $\alpha\in\operatorname{Br}(X)$, the
local evaluations are the localizations of the global class $P^*\alpha\in
\operatorname{Br}(K)$, have finite support, and satisfy
$$\sum_v\operatorname{inv}_v(\alpha(P))=0\quad\text{in }\mathbb Q/\mathbb Z.$$

## Statement references

[[def-global-field|Global field]]

[[def-separated-scheme-over-base|Separated schemes]]

[[def-locally-finite-type-and-finite-type-morphism|Finite-type morphisms]]

[[def-adelic-points-of-variety-over-global-field|Adelic points]]

[[def-cohomological-brauer-group-of-a-variety|Cohomological Brauer group]]

[[def-brauer-manin-set|Brauer–Manin set]]

[[thm-global-brauer-hasse-noether-exact-sequence-number-field|Number-field global sequence; completed under AC]]

[[thm-global-function-field-brauer-hasse-sequence|Function-field global sequence; completed under AC]]

[[thm-classic-brauer-group-is-h2-galois-cohomology|Field cohomology comparison; complete AC/DC branch used here]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-countable-choice|Countable Choice]]

[Poonen, §8.2.2](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §§2.1–2.3](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

[Milne, Appendix A.7](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Hürlimann, full article](https://www.numdam.org/item/AST_1992__209__215_0.pdf)

## Facts & Assumptions

**Given:** AC, DC, and AC$_\omega$, a global field $K$, a separated finite-type
$K$-scheme $X$, a point $P\in X(K)$, and $\alpha\in\operatorname{Br}(X)$.

[A1] AC and DC are the inherited axioms of the place, completion, and field
cohomology conventions; AC$_\omega$ is inherited by the adelic
restricted-product convention. [[def-axiom-of-choice]]
[[def-dependent-choice]] [[def-countable-choice]]

[F1] A rational point is a morphism $P:\operatorname{Spec}K\to X$; its
pullback $P^*\alpha$ is a global cohomological Brauer class.
[[def-cohomological-brauer-group-of-a-variety]]

[F2] The diagonal tuple of a rational point is adelic, and its evaluation
at $v$ is the pullback of $P^*\alpha$ to $K_v$.
[[def-adelic-points-of-variety-over-global-field]]

[F3] Under AC the completed number-field global exact sequence supplies finite local support and zero total invariant for every global Brauer class. [[thm-global-brauer-hasse-noether-exact-sequence-number-field]]

[F4] Under AC the completed finite-constant function-field global sequence supplies the same finite-support and zero-sum assertions, with no rational point on its proper curve assumed. [[thm-global-function-field-brauer-hasse-sequence]]

[F5] The supplied comparison has a complete AC/DC construction identifying the classical Brauer group with continuous field cohomology. This theorem explicitly assumes those axioms, so only that supplied branch is used; no closure of its broader unqualified Statement is asserted. [[thm-classic-brauer-group-is-h2-galois-cohomology]]

[L1] The number-field finite-support supplier and both global invariant-sequence carriers are completed at the hypotheses already public here. The old proposed global-idelic supplier is unnecessary for this evaluation proof: the exact zero-sum conclusion is supplied directly by the completed number-field sequence. No independent review of those suppliers is asserted. [[thm-number-field-brauer-classes-have-finite-local-support]] [[thm-global-brauer-hasse-noether-exact-sequence-number-field]] [[thm-global-function-field-brauer-hasse-sequence]]

## Proof

**Proof technique:** use naturality of evaluation and the global invariant
sequence for the pullback class.

**Given:** The data above.

1.1 The morphism $P:\operatorname{Spec}K\to X$ gives
$\beta=P^*\alpha\in\operatorname{Br}(K)$. For each place $v$, the composite
$\operatorname{Spec}K_v\to\operatorname{Spec}K\xrightarrow{P}X$ is the
diagonal local point $P_v$. Functoriality of pullback therefore gives
$\alpha(P_v)=\operatorname{res}_v(\beta)$. The commutative square below
records this equality; the equality follows from composition of morphisms,
not from the drawing. [F1, F2, given]



1.2 In the number-field branch, [F3] gives finite support and total invariant zero for $\beta$. In the function-field branch, [F4] gives the same conclusion. The comparison branch [F5] is available under the public [A1] axioms. Thus in either branch the diagonal adelic tuple satisfies the defining finite-support and zero-sum conditions for every $\alpha$.
[A1, F3, F4, F5, L1, step 1.1]

2.1 The two field branches exhaust the definition of a global field. Step 1.2 therefore gives the displayed containment. The former number-field support/reciprocity and function-field draft-status holds are discharged by the completed direct suppliers, without requiring new independent reviews of their transitive sources. [F1, F3, F4, F5, step 1.2] ∎

## Evaluation diagram

The vertical maps are pullback evaluations at the rational and local points; the bottom map is localization. Naturality of pullback makes the square commute, as proved in step 1.1.

\begin{center}
\begin{tikzcd}
X(K) \arrow[r,"\Delta"] \arrow[d,"P\mapsto P^*\alpha"'] & X(\mathbb A_K) \arrow[d,"(x_v)\mapsto(\alpha(x_v))_v"] \\
\operatorname{Br}(K) \arrow[r,"\mathrm{loc}"] & \displaystyle\bigoplus_v\operatorname{Br}(K_v)
\end{tikzcd}
\end{center}
