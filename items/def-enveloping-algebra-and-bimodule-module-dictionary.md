---
id: def-enveloping-algebra-and-bimodule-module-dictionary
kind: definition
title: Enveloping algebra and the bimodule–module dictionary
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-algebra-over-a-commutative-ring, def-bimodule, def-graded-ring-module-bimodule-and-internal-shift, def-opposite-ring, thm-tensor-product-of-algebras-over-a-commutative-ring]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9: Hochschild and Cyclic Homology, §9.1.1–9.1.3"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Definition

Let $k$ be a field and let $A$ be a unital associative $k$-algebra
([[def-algebra-over-a-commutative-ring]]). Its
**enveloping algebra** is

$$A^e:=A\otimes_k A^{\mathrm{op}}.$$

The multiplication from the tensor-product algebra structure
([[thm-tensor-product-of-algebras-over-a-commutative-ring]]) and opposite-ring
multiplication ([[def-opposite-ring]]) is

$$(a\otimes b^{\mathrm{op}})(c\otimes d^{\mathrm{op}})=ac\otimes(db)^{\mathrm{op}},$$

with unit $1\otimes1^{\mathrm{op}}$. A **$k$-central $A$-bimodule** is a
bimodule with commuting actions ([[def-bimodule]]) whose induced scalar
actions agree as required by
[[def-graded-ring-module-bimodule-and-internal-shift]].

For such a bimodule $M$, the formula

$$(a\otimes b^{\mathrm{op}})m:=amb$$

defines a unital left $A^e$-module. Indeed,

$$((a\otimes b^{\mathrm{op}})(c\otimes d^{\mathrm{op}}))m=(ac)m(db)=a(cm d)b=(a\otimes b^{\mathrm{op}})((c\otimes d^{\mathrm{op}})m),$$

and the unit acts as $1_A m 1_A=m$. Conversely, if $M$ is a left
$A^e$-module, set $am:=(a\otimes1)m$ and $mb:=(1\otimes b^{\mathrm{op}})m$.
The two actions are unital, associative, commute because the two tensor factors
commute in $A^e$, and are $k$-central because the two copies of a scalar
$\lambda\in k$ define the same element of $A^e$. These constructions are
inverse: $(a\otimes b^{\mathrm{op}})m=a(mb)=amb$.

The same bimodule is a unital **right** $A^e$-module by

$$m(a\otimes b^{\mathrm{op}}):=bma.$$

Indeed, for $x=a\otimes b^{\mathrm{op}}$ and $y=c\otimes d^{\mathrm{op}}$,

$$ (mx)y=d(bma)c=(db)m(ac)=m((ac)\otimes(db)^{\mathrm{op}})=m(xy), $$

and $m(1\otimes1^{\mathrm{op}})=m$.

For the right-module converse, define $am:=m(1\otimes a^{\mathrm{op}})$ and
$mb:=m(b\otimes1)$. Right associativity gives the left and right $A$-module
laws, and the two actions commute because $(1\otimes a^{\mathrm{op}})$ commutes
with $(b\otimes1)$. They are $k$-central for the same scalar-balancing reason.
The constructions are inverse since

$$m((a\otimes1)(1\otimes b^{\mathrm{op}}))=(ma)(1\otimes b^{\mathrm{op}})=b(ma)=bma.$$

Thus $k$-central $A$-bimodules, left $A^e$-modules, and right $A^e$-modules
have the same objects and morphisms under these dictionaries. In particular,
the regular bimodule $A$ corresponds to $A$ with left action
$(a\otimes b^{\mathrm{op}})c=acb$ and right action
$c(a\otimes b^{\mathrm{op}})=bca$.
