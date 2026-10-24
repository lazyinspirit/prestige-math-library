---
id: "def-ag-geometrically-regular-algebra-and-fibre"
kind: "definition"
title: "Geometrically regular algebras and geometrically regular fibres"
status: published
origin: "pipeline"
deps: ["def-regular-noetherian-ring", "thm-coproduct-property-of-tensor-products-of-commutative-algebras", "def-finitely-generated-field-extension", "def-finitely-presented-module-and-algebra"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stacks Algebra 10.166.1–2"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
verification:
  audited: 2026-09-27
---

## Definition

Let $k$ be a field. A $k$-algebra $A$ of finite type
([[def-finitely-presented-module-and-algebra]]) is **geometrically regular over
$k$** when for every finitely generated field extension $K/k$
([[def-finitely-generated-field-extension]]) the $K$-algebra $A\otimes_kK$
([[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]) is a
regular Noetherian ring ([[def-regular-noetherian-ring]]). Since a finitely
generated extension $K/k$ makes $A\otimes_kK$ a finite-type $K$-algebra, the
Noetherian condition in that clause is automatic; the regularity is the
content. The quantifier is over the finitely generated extensions only, and the
later field-test lemma shows that regularity for those is equivalent to
regularity after every field extension of $k$.

Now let $R\to S$ be a homomorphism of commutative rings with $S$ finitely
presented as an $R$-algebra ([[def-finitely-presented-module-and-algebra]]), let
$\mathfrak q\in\operatorname{Spec}S$ and let $\mathfrak p=\mathfrak q\cap R$.
The **fibre** of $R\to S$ over $\mathfrak p$ is
$S\otimes_R\kappa(\mathfrak p)$, a $\kappa(\mathfrak p)$-algebra, and it is
**geometrically regular at $\mathfrak q$** when for every field extension
$K/\kappa(\mathfrak p)$ and every prime $\mathfrak Q$ of
$(S\otimes_R\kappa(\mathfrak p))\otimes_{\kappa(\mathfrak p)}K$ lying over the
image of $\mathfrak q$ in $S\otimes_R\kappa(\mathfrak p)$, the local ring
$$\bigl((S\otimes_R\kappa(\mathfrak p))\otimes_{\kappa(\mathfrak p)}K\bigr)_{\mathfrak Q}$$
is regular. A fibre is **geometrically regular** when it is geometrically
regular at each of its points, and the condition is imposed on every field
extension $K/\kappa(\mathfrak p)$, not only on the finitely generated ones; an
empty fibre satisfies the pointwise condition vacuously, and the affine line
over the residue field is the model case.

Three conventions belong to the definition. First, geometric regularity of a
finite-type $k$-algebra is a statement about all scalar extensions
$A\otimes_kK$, so it is strictly stronger than regularity of $A$ and is
defined without using smoothness of the structural morphism; the equivalence
with local standard smoothness is a theorem, not part of the definition. Second, the fibre condition is pointwise at a prime
$\mathfrak q$ and ranges over all field extensions of the residue field
$\kappa(\mathfrak p)$, so that a rational point over an algebraic closure of
$\kappa(\mathfrak p)$ is covered without appealing to any later theorem. Third,
the hypothesis that $S$ is finitely presented over $R$ is part of the
definition of the fibre condition, since it is what lets the standard smooth
presentations and the local presentation theorem apply to it.

## Remarks

The field-case equivalence with local standard smoothness is proved in
[[thm-ag-standard-smooth-geometric-regularity]], clause 3, under the Axiom
of Choice assumed there. [[def-ag-standard-smooth-algebra]] supplies the
presentation terminology, rather than the equivalence theorem.
