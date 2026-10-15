---
id: pthm-td-entropy-under-product-comparison
kind: physics-theorem
title: Entropy representation for finite separated products
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: An order representation for the declared finite family of simple systems under the adopted contact assumptions; the entropy is dimensionless until an independent physical calibration fixes its unit.
deps: [def-axiom-of-choice, def-td-scaled-products-and-comparison, post-td-accessibility-a1-a6, post-td-simple-system-geometric-axioms, pthm-td-contact-product-comparison, thm-tdmath-arbitrary-family-calibration]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-td-scaled-products-and-comparison: formulation-prerequisite
  post-td-accessibility-a1-a6: physical-assumption
  post-td-simple-system-geometric-axioms: physical-assumption
  pthm-td-contact-product-comparison: physical-result
  thm-tdmath-arbitrary-family-calibration: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorems 2.2 and 4.8 and §IV.B
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §§2–4"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
    - title: Goddard, The second law of thermodynamics as variation on a theme of Carathéodory, §§2–3
      url: https://escholarship.org/content/qt27k6m59q/qt27k6m59q.pdf
verification:
  precheck: n/a
dependency_level: 14
---

## Statement

Let $I$ be a nonempty, possibly infinite set of primitive system labels. Assume the declared family includes every finite separated product and every finite thermal join, and that every finite join-closed subfamily satisfies the hypotheses of [[pthm-td-contact-product-comparison]]. Also assume the explicit finite-factor representation of [[def-td-scaled-products-and-comparison]] and the Axiom of Choice. Then there is a single dimensionless function $\widetilde S$ on all states of the declared finite-factor family that is additive under separation, extensive under every admitted positive scaling, and characterizes every equal-composition comparison:

$$ A\prec B\quad\Longleftrightarrow\quad \widetilde S(A)\le \widetilde S(B). $$

For each simple chart, A7 also makes $\widetilde S$ concave on every convex region where the stated recombination operation is admitted. The result does not set the entropy unit to $\mathrm{J\,K^{-1}}$, determine additive constants across different reaction compositions, or establish empirical validity of the contact assumptions.

## Facts & Assumptions

**Given:** Product comparison from [[pthm-td-contact-product-comparison]], A1–A6, A7, explicit finite-factor composition, and Choice.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets admits a choice function; the arbitrary-family calibration supplier uses it to select reference states and calibrators.

[A2] [[pthm-td-contact-product-comparison]]: for every pair of primitive types, their finite products of scaled copies have comparison hypothesis, conditionally on the full contact branch; the pairwise statement alone does not assert comparison for a product containing three distinct primitive types.

[A3] [[thm-tdmath-arbitrary-family-calibration]]: for a nonempty finite-factor family containing a distinguished meter type with a fixed strict meter pair, a join-closed contact family satisfying the calibrator hypotheses, A1–A6 and Choice yield one calibrated additive extensive entropy representing every same-composition comparison on every finite compound.

[A4] [[post-td-simple-system-geometric-axioms]]: A7 admits the scaled recombination comparison $ (t x,(1-t)y)\prec t x+(1-t)y$ for $0<t<1$.

[A5] [[def-td-scaled-products-and-comparison]]: a separated compound has finitely many explicit tagged factors, and its scale coefficients and product identifications are declared.

## Proof
**Given:** [A1]–[A5].

1.1 Fix a finite set of primitive labels from $I$. For every pair in this set, [A2] supplies a strict calibrator and comparison hypothesis on all finite products formed from that pair; the relation also satisfies the six accessibility assumptions of the physical model. These are the pairwise contact inputs required by [A3], not a claim that the pair theorem alone compares products involving three or more primitive types. The factors have the explicit tagged finite representation in [A5]. [A2, A5, given]

2.1 Since $I$ is nonempty, choose a primitive type $m$ as the distinguished meter label. Applying [A2] to the ordered pair $(m,m)$ supplies a strict meter pair $z_0\prec\prec z_1$ in $\Gamma_m$. For each $j\ne m$, applying [A2] to the ordered pair $(j,m)$ supplies states $a_j,b_j\in\Gamma_j$ and $c_j,d_j\in\Gamma_m$ with $a_j\prec\prec b_j$, $c_j\prec\prec d_j$, and $(a_j,d_j)\sim(b_j,c_j)$, exactly the calibrator orientation required by [A3]. Choice [A1] selects the reference states, same-type entropy representatives and calibrator data simultaneously across $I$, exactly as [A3] requires. Use the composition-preserving coefficient-map interpretation constructed in [A2]: each actual state is represented by its type-weighted point mass, and scalar amount $t$ has the encoded state value $t$ times that state entropy. In [A3], same-type unit-label representations are converted back to represented-state values by their positive type weights, so the calibration describes the original tagged preparations, not independently rescaled entropy units for joined types. Each compound contains only finitely many tagged factors. The empty unit has value zero as the empty entropy sum; every nonempty compound is a finite sum of tagged factor entropies. Applying [A3] gives a single function $\widetilde S$ on the family of all such finite compounds, additive on concatenation, homogeneous under each positive scale, and order-equivalent to $\prec$ for each equal-composition comparison. No infinite sum is introduced because every state has finite support. [A1, A2, A3, A5, step 1.1, choose]

3.1 Let $x,y$ lie in one simple chart and $0<t<1$. By [A4], the scaled pair $(t x,(1-t)y)$ compares to the recombined state $t x+(1-t)y$. The representation in step 2.1 turns that comparison into $$ t\widetilde S(x)+(1-t)\widetilde S(y)\le \widetilde S(t x+(1-t)y), $$ where additivity and extensivity evaluate the pair entropy. This is precisely concavity on the admitted convex chart; the endpoint weights $t=0,1$ give equality. [A3, A4, step 2.1, algebra] ∎
## Remarks

The calibrated meter in the mathematical construction fixes a common dimensionless unit. Conversion to the physical entropy unit $\mathrm{J\,K^{-1}}$ requires an additional scale calibration. Additive type offsets for cross-composition transitions are handled separately in [[pthm-td-universal-mixing-entropy]].
