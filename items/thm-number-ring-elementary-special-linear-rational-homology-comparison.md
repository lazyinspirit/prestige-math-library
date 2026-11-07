---
id: thm-number-ring-elementary-special-linear-rational-homology-comparison
kind: theorem
title: Rational homology of stable elementary and special-linear groups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: constructive
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-number-ring-stable-special-linear-elementary-quotient-torsion
  - lem-quillen-q-components-and-stable-elementary-perfectness
  - thm-homological-serre-spectral-sequence
---

## Statement

For a number field $K$ and its ring of integers $R=\mathcal O_K$, the inclusion of the stable elementary group into the stable special-linear group induces an isomorphism
$$H_j(BE_\infty(R);\mathbb Q)\xrightarrow{\cong}H_j(B\operatorname{SL}_\infty(R);\mathbb Q)$$
for every $j\ge0$. The classifying spaces are realizations of the ordinary group nerves. The result is natural for number-ring homomorphisms and uses no axiom of choice. It does not assert integral homology equivalence or that $\operatorname{SL}_\infty(R)=E_\infty(R)$.

## Statement references

[[lem-number-ring-stable-special-linear-elementary-quotient-torsion]]

[[lem-quillen-q-components-and-stable-elementary-perfectness]]

[[thm-homological-serre-spectral-sequence]]

## Facts & Assumptions

**Given:** The number ring R and its stable special-linear and elementary groups.

[F1] The quotient SL∞(R)/E∞(R) is torsion. [[lem-number-ring-stable-special-linear-elementary-quotient-torsion]]

[F2] E∞(R) is the kernel of the stable general-linear abelianization, so the quotient in [F1] is abelian. [[lem-quillen-q-components-and-stable-elementary-perfectness]]

[F3] The homological Serre sequence has the stated local coefficients, naturality and finite convergence filtration. [[thm-homological-serre-spectral-sequence]]

## Proof

**Proof technique:** Finite-support stable conjugation, torsion-group averaging and the homological Serre sequence.

1.1 Put E=E∞(R), G=SL∞(R), Q=G/E. The quotient is abelian by [F2] and every element has finite order by [F1]. Every finite subset of Q generates a finite subgroup: if its elements have orders r₁,…,r_s, their products are parametrized by the finite box 0≤i_j<r_j. This finite subgroup is chosen for the one specified finite list; no simultaneous family of orders is required. [F1, F2, given, construct, algebra]

2.1 The Q-action on H_q(E;Q) induced by conjugation is trivial. Given one g∈G and one finite bar chain on E, choose n large enough to contain the matrix supports of g and every group element in that chain. In 2n×2n blocks the matrix h=diag(g,g⁻¹) is elementary: multiply the three block transvections ((I,g),(0,I)), ((I,0),(−g⁻¹,I)), ((I,g),(0,I)) to get ((0,g),(−g⁻¹,0)), and multiply by the elementary signed block swap ((0,−I),(I,0)). Each block transvection is a finite product of ordinary transvections. On every element supported in the first block, conjugation by h is exactly conjugation by diag(g,I). Since h∈E, conjugation by h and the identity induce the same map on group homology: the group-nerve natural transformation with component h gives an explicit finite prism chain homotopy. Thus the actions agree on the specified bar cycle. Every cycle is a finite chain, so the induced action is the identity in every degree without choosing a bound for all cycles. [F2, step 1.1, construct, algebra]

3.1 Let M be any rational Q-module with trivial action. Its positive-degree group homology vanishes. Indeed, a normalized bar cycle uses finitely many elements of Q and finitely many coefficients of M; by step 1.1 those elements lie in one finite subgroup H. In the homogeneous rational bar complex of H, averaging the extra-degeneracy contraction over all h∈H gives a well-defined H-equivariant contracting homotopy in positive degrees; division by |H| is allowed in Q. This bounds the given cycle in the H-complex and hence in the Q-complex. H₀(Q;M)=M. The averaging is a finite sum for this one cycle. Retain the conjugation result of step 2.1. [step 1.1, step 2.1, construct, algebra]

4.1 The inclusion E⊂G and quotient G→Q give a fibration sequence BE→BG→BQ at the level of classifying spaces. Explicitly, the homotopy fiber of the nerve map BG→BQ is the nerve of the action groupoid with object set Q and arrows given by G; the full subgroupoid on the identity object is the one-object group E. The inclusion is fully faithful and every object has an arrow from the identity. For one specified finite sphere or homotopy only finitely many such arrows are needed, so the ordinary nerve comparison gives a weak equivalence BE to that fiber without choosing a representative for every coset. The bar realizations are CW complexes. Replace BG→BQ by its canonical mapping-path Serre fibration; its actual homotopy fiber is the displayed groupoid model. Retain the averaging construction of step 3.1. [F2, step 1.1, step 3.1, construct, algebra]

5.1 Apply [F3] to that fibration with rational coefficients. Its E²-page is H_p(Q;H_q(E;Q)); the coefficient action is trivial by step 2.1, and step 3.1 makes every column p>0 zero while the p=0 column is H_q(E;Q). The only nonzero column survives, and the finite abutment filtration identifies the fiber-inclusion edge map H_q(BE;Q)→H_q(BG;Q) as an isomorphism for every q. The bar construction, quotient and edge map are natural under ring homomorphisms. The construction uses only finite choices for a specified chain or homotopy and makes no integral equivalence assertion. Retain the finite averaging and conjugation constructions above. [F3, step 2.1, step 3.1, step 4.1, construct, algebra, discharge-construct] ∎
