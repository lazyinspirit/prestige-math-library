---
id: thm-finite-quiver-euler-and-skew-integration-is-multiplicative
kind: theorem
title: "Euler and skew integration are multiplicative for finite acyclic quivers"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-finite-acyclic-quiver-stability-data
  - lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form
  - def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
  - lem-finite-quiver-hall-extension-orbit-count
  - def-untwisted-hall-algebra
  - lem-untwisted-hall-product-finiteness
  - thm-untwisted-hall-algebra-is-associative-and-unital
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §§3.3–3.4"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Markus Reineke, The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli, §6"
      url: "https://arxiv.org/pdf/math/0204059"
verification:
  precheck: pass
---

## Statement

Let $Q$ be a finite acyclic quiver over $k=\mathbb F_q$, let
$t=\sqrt q>0$, and use the subobject-first completion and tori from
[[def-subobject-first-completed-finite-quiver-hall-algebra-and-tori]]. The
degree-completed Hall product is associative and unital. The continuous maps
$$I(f)=\sum_{[M]}\frac{f(M)}{|\operatorname{Aut}(M)|}X^{\mathbf d(M)},\qquad J(f)=\sum_{[M]}t^{\chi_Q(\mathbf d(M),\mathbf d(M))} \frac{f(M)}{|\operatorname{Aut}(M)|}x^{\mathbf d(M)}$$
are unital algebra homomorphisms to the completed tori with products
$$X^{\mathbf d}X^{\mathbf e}=q^{-\chi_Q(\mathbf e,\mathbf d)}X^{\mathbf d+\mathbf e}, \qquad x^{\mathbf d}*x^{\mathbf e}=t^{-\langle\mathbf e,\mathbf d\rangle}x^{\mathbf d+\mathbf e}.$$
These are separate normalizations: the first is the Euler form target, while
the second uses the skew-symmetrized form and the diagonal factor
$t^{\chi_Q(\mathbf d,\mathbf d)}$.

## Facts & Assumptions

**Given:** A finite acyclic quiver over $\mathbb F_q$, the subobject-first
Hall convention, and $t=\sqrt q>0$.

[F1] The subobject-first Hall product is the opposite of the quotient-first
product, and the dimension completions and both target products are defined
in [[def-subobject-first-completed-finite-quiver-hall-algebra-and-tori]].

[F2] The normalized basis satisfies
$$\kappa_U\star\kappa_V= \sum_{[M]}\frac{|\operatorname{YExt}^1(V,U)_M|} {|\operatorname{Hom}(V,U)|}\kappa_M$$
([[lem-finite-quiver-hall-extension-orbit-count]]).

[F3] The finite vector spaces of Hom and Yoneda Ext$^1$ satisfy
$$\dim\operatorname{Hom}(V,U)-\dim\operatorname{YExt}^1(V,U) =\chi_Q(\mathbf d(V),\mathbf d(U))$$
([[lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form]]).

[F4] The generic quotient-first untwisted Hall product is associative and
unital on every small finitary abelian category
([[thm-untwisted-hall-algebra-is-associative-and-unital]]).

[F5] The homogeneous Hall products have finite support
([[lem-untwisted-hall-product-finiteness]]).

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Write $*_q$ for the quotient-first product. By definition in [F1], $f\star g=g*_q f$. Hence $$(f\star g)\star h=h*_q(g*_q f)=(h*_q g)*_qf =f\star(g\star h)$$ by [F4]. The zero-object class is the unit for $*_q$, so it is also the unit for $\star$. [F1, F4, algebra]

1.2 The degree of an extension is the sum of the endpoint dimension vectors. For a fixed output degree $\mathbf n$, a product coefficient uses only the finitely many pairs $\mathbf d+\mathbf e=\mathbf n$; each $H_{Q,\mathbf d}$ is finite-dimensional by the representation-matrix definition. Thus [F5] extends the product degree by degree to $\widehat H_Q$, and truncating above total dimension $D$ changes no coefficient of dimension at most $D$. This is continuity for the total-dimension filtration. [F1, F5, algebra]

1.3 On a normalized basis vector, $I(\kappa_M)=X^{\mathbf d(M)}$ because $\kappa_M=|\operatorname{Aut}(M)|\delta_M$. For $\mathbf d=\mathbf d(U)$ and $\mathbf e=\mathbf d(V)$, [F2] gives $$I(\kappa_U\star\kappa_V)= \frac{|\operatorname{YExt}^1(V,U)|}{|\operatorname{Hom}(V,U)|} X^{\mathbf d+\mathbf e}.$$ By [F3], both sets are finite vector spaces and the ratio of their cardinalities is $$q^{\dim\operatorname{YExt}^1(V,U)-\dim\operatorname{Hom}(V,U)} =q^{-\chi_Q(\mathbf e,\mathbf d)}.$$ This is exactly $I(\kappa_U)I(\kappa_V)$ in the Euler target. [F1, F2, F3, algebra]

1.4 On the same basis, $J(\kappa_M)=t^{\chi_Q(\mathbf d,\mathbf d)}x^{\mathbf d}$. Applying [F2] and [F3] to $\kappa_U\star\kappa_V$ gives its $J$-image coefficient $$t^{-2\chi_Q(\mathbf e,\mathbf d)+\chi_Q(\mathbf d+\mathbf e,\mathbf d+\mathbf e)}.$$ By bilinearity, $$\chi_Q(\mathbf d+\mathbf e,\mathbf d+\mathbf e) =\chi_Q(\mathbf d,\mathbf d)+\chi_Q(\mathbf e,\mathbf e) +\chi_Q(\mathbf d,\mathbf e)+\chi_Q(\mathbf e,\mathbf d).$$ Since $\langle\mathbf e,\mathbf d\rangle= \chi_Q(\mathbf e,\mathbf d)-\chi_Q(\mathbf d,\mathbf e)$ and $q=t^2$, the coefficient becomes $$t^{\chi_Q(\mathbf d,\mathbf d)+\chi_Q(\mathbf e,\mathbf e) -\langle\mathbf e,\mathbf d\rangle},$$ which is exactly the coefficient of $J(\kappa_U)*J(\kappa_V)$ in the skew target. [F1, F2, F3, algebra]

2.1 Bilinearity of $\chi_Q$ makes the Euler twist associative: both parenthesizations of $X^{\mathbf d}X^{\mathbf e}X^{\mathbf f}$ have exponent $-\chi_Q(\mathbf e,\mathbf d)-\chi_Q(\mathbf f,\mathbf d) -\chi_Q(\mathbf f,\mathbf e)$. Bilinearity of $\langle-,-\rangle$ gives the same cocycle identity for the skew product. Both products have the degree-zero basis vector as unit. Steps 1.3–3.1 therefore extend by linearity and degreewise continuity to unital homomorphisms on the completions. [F1, step 1.2, step 1.3, step 1.4, algebra] ∎
