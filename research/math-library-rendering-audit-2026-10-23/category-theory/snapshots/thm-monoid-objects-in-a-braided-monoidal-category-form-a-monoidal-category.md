---
id: thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category
kind: theorem
title: "Monoid objects in a braided monoidal category form a monoidal category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-braided-monoidal-category, def-monoid-object-and-comonoid-object-in-a-monoidal-category, thm-the-monoid-object-axioms-may-be-written-without-associators]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 8.8.2(iv)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $(\mathcal C,\otimes,\mathbf 1,c)$ be a braided monoidal category. Then
the category $\operatorname{Mon}(\mathcal C)$ of monoid objects in
$\mathcal C$ is monoidal. For monoid objects $(A,\mu_A,\eta_A)$ and
$(B,\mu_B,\eta_B)$, the tensor product monoid has underlying object $A\otimes
B$, unit $\eta_A\otimes\eta_B$, and multiplication

$$\mu_{A\otimes B}=(\mu_A\otimes\mu_B)\circ(1_A\otimes c_{B,A}\otimes1_B),$$

with brackets suppressed by coherence.

## Facts & Assumptions

**Given:** A braided monoidal category $\mathcal C$ and monoid objects $A,B$ in it.

[L1] A braided monoidal category is a monoidal category with a braiding $c$ ([[def-braided-monoidal-category]]).

[L2] A monoid object is an object equipped with multiplication and unit maps satisfying associativity and unit diagrams ([[def-monoid-object-and-comonoid-object-in-a-monoidal-category]]).

[L3] After coherence, monoid-object axioms may be written without displaying associators or unitors ([[thm-the-monoid-object-axioms-may-be-written-without-associators]]).

[F1] EGNO Exercise 8.8.2(iv) checks that the braided interchange formula above defines the tensor product of monoid objects and that the ambient associator and unit object make $\operatorname{Mon}(\mathcal C)$ monoidal.

## Proof

**Proof technique:** direct.

1.1 Using [L3], define on $A\otimes B$ the multiplication and unit displayed in the statement. The formula is typed because $1_A\otimes c_{B,A}\otimes1_B$ rewrites $A\otimes B\otimes A\otimes B$ as $A\otimes A\otimes B\otimes B$, after which $\mu_A\otimes\mu_B$ lands in $A\otimes B$. [L1, L2, L3, given, construct]

2.1 The associativity and unit axioms for this multiplication are exactly the braided interchange identities proved in [F1]: one repeatedly moves the middle $B$-tensorand past the middle $A$-tensorand by the braiding, and the two possible threefold rearrangements agree because the hexagons express the Yang-Baxter compatibility needed for those moves. Hence $A\otimes B$ is again a monoid object. [F1, step 1.1, algebra]

3.1 If $f:A\to A'$ and $g:B\to B'$ are monoid morphisms, then $f\otimes g$ preserves the units and multiplications because tensoring respects composition and the braiding is natural. Thus tensoring extends to morphisms. The ambient associator and unit object of $\mathcal C$ are monoid morphisms by the same coherence computation recorded in [F1], so they supply the associator and unit data for $\operatorname{Mon}(\mathcal C)$. Therefore $\operatorname{Mon}(\mathcal C)$ is monoidal. [L1, L2, F1, step 2.1, algebra] ∎
