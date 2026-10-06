---
id: cex-a-braiding-alone-does-not-define-a-link-trace
kind: counterexample
title: "A braiding alone does not define a link trace"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [thm-a-braided-rigid-category-has-a-drinfeld-morphism, def-ribbon-evaluation-of-an-x-colored-closed-braid, def-left-dual-and-right-dual-object, def-tensor-product-of-modules-by-generators-and-relations, def-absolutely-simple-object, cor-an-object-of-a-braided-category-carries-canonical-braid-actions, def-twist-and-ribbon-structure, def-the-categorical-trace-of-a-morphism-into-the-double-dual]
justified_by: []
aliases: []
landmark: false
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§4.7 (the categorical trace is typed on morphisms to a double dual), printed pp. 73--75; §8.9--§8.10, printed pp. 213--218"
verification:
  precheck: pass
---

## Statement refuted

The claim refuted is: a braiding on a monoidal category suffices to define a
link trace, that is, to evaluate the closure of every braid. In
$\mathbf{Vect}_k$ with the transposition braiding the canonical braid actions
exist by
[[cor-an-object-of-a-braided-category-carries-canonical-braid-actions]], but
the categorical closure of even the one-braid $e\in B_1$ has no value: closing a band
requires evaluation and coevaluation maps, which exist only for dualizable
objects, and $k[x]\in\mathbf{Vect}_k$ has no dual
(as proved below from the finite tensor sum and zig-zag identity). Even for rigid categories the braiding and chosen duals need not determine
one ribbon evaluation: over a field of characteristic $\ne2$, finite-dimensional
super vector spaces with their sign braiding admit both the identity twist and
the parity twist. On the odd line these give respective unknot evaluations
$-1$ and $1$, as computed below. Thus neither existence in a non-rigid category
nor uniqueness of a ribbon evaluation in a rigid one follows from a braiding
alone.

## Facts & Assumptions

**Given:** the symmetric monoidal category $\mathbf{Vect}_k$ with the transposition braiding, its infinite-dimensional object $k[x]$, and the one-braid $e\in B_1$.

[F1] A braiding alone yields canonical braid actions $\rho_n\colon B_n\to\operatorname{Aut}(X^{\otimes n})$, with no further structure ([[cor-an-object-of-a-braided-category-carries-canonical-braid-actions]]).

[F2] The trace formulas require evaluation and coevaluation maps, and a closure evaluation is typed on a morphism into a double dual; the pivotal comparison used for closures is $j_X=u_X\theta_X$, where $u$ is the Drinfeld morphism and $\theta$ the twist. The Drinfeld morphism need not be monoidal; its tensor obstruction is precisely the double braiding ([[def-ribbon-evaluation-of-an-x-colored-closed-braid]], [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]).

[F4] Ribbon twists obey balancing and dual-compatibility ([[def-twist-and-ribbon-structure]]), and the left trace is the evaluation--coevaluation composite of [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]].

[F3] A left dual has evaluation and coevaluation maps satisfying the zig-zag identities ([[def-left-dual-and-right-dual-object]]). Every element of an algebraic tensor product is a finite sum of elementary tensors ([[def-tensor-product-of-modules-by-generators-and-relations]]).

## Counterexample

1.1 **The braiding already gives the actions.** In $\mathbf{Vect}_k$ with the transposition braiding the canonical actions $\rho_n$ of [F1] exist for every $n$, even though the category is not rigid. Hence whatever is missing from a link trace is not the braid action. [F1, given]

1.2 **The closure of the one-braid has no value in the non-rigid model.** For the object $X$ coloring the band, the left trace of $j_X:X\to X^{\vee\vee}$ begins with $\operatorname{coev}_X$, applies $j_X\otimes1_{X^\vee}$, and ends with $\operatorname{ev}_{X^\vee}:X^{\vee\vee}\otimes X^\vee\to\mathbf 1$ [F2, F4]. If $X=k[x]$ had a left dual $Y$, write $\operatorname{coev}(1)=\sum_{i=1}^N v_i\otimes y_i$, a finite sum by [F3]. The zig-zag identity would give $v=\sum_i v_i\,\operatorname{ev}(y_i\otimes v)$ for every $v\in X$, putting all of $X$ in the finite-dimensional span of the $v_i$. The monomials $1,x,x^2,\ldots$ are linearly independent, so this is impossible. The right-dual version is the same mirror argument. Therefore the closure of $e$ has no categorical trace value for $X=k[x]$, and a braiding alone does not evaluate it. [F2, F3, F4, given]

1.3 **A rigid model with two different ribbon evaluations.** Take finite-dimensional $\mathbb Z/2$-graded vector spaces over a field of characteristic $\ne2$, with even linear maps and $c(v\otimes w)=(-1)^{|v||w|}w\otimes v$. Graded duals, ordinary evaluation and basis coevaluation obey the zig-zags. The sign rule is natural, and both hexagons follow from $(-1)^{p(q+r)}=(-1)^{pq}(-1)^{pr}$; the double braiding is the identity. Both $\theta^0=1$ and $\theta^1(v)=(-1)^{|v|}v$ are natural monoidal automorphisms preserving duals, hence ribbon twists by [F4]. On the odd line $L=ke$ with odd dual basis $e^\vee$, the Drinfeld composite of [F2] sends $e$ to $-e^{\vee\vee}$: its sole crossing is $c_{L,L^\vee}(e\otimes e^\vee)=-e^\vee\otimes e$. Thus $j_L^0=-1$ and $j_L^1=1$ under the usual double-dual identification; coevaluation $1\mapsto e\otimes e^\vee$ and evaluation $e^{\vee\vee}\otimes e^\vee\mapsto1$ give left traces $-1$ and $1$. The same braiding and duals therefore give different ribbon unknot values. [F2, F3, F4, construct, algebra]

2.1 **Conclusion.** The non-rigid witness lacks the dual pair needed for closure, and the rigid witness has two different ribbon evaluations for the same braiding and chosen duals. Hence it does not suffice to define a link trace, and the claim is refuted. [step 1.1, step 1.2, step 1.3] ∎ 
