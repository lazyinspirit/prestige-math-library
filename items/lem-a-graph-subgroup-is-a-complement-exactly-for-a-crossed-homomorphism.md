---
id: lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism
kind: lemma
title: "A graph subgroup is a complement exactly for a crossed homomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crossed-homomorphism-for-a-g-group, def-graph-subgroup-in-a-semidirect-product, thm-external-semidirect-product-is-a-group, prop-canonical-subgroups-of-an-external-semidirect-product]
proof_strategy: iff
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

Let $G$ act on a group $M$. A function $z:G\to M$ is a crossed homomorphism if
and only if its graph subset

$$\Gamma_z=\{(z(g),g):g\in G\}\subseteq M\rtimes G$$

is a complement to the canonical copy of $M$ in $M\rtimes G$.

## Facts & Assumptions

**Given:** A group action of $G$ on $M$, and the semidirect product $M\rtimes G$.

[L1] A crossed homomorphism satisfies $z(gh)=z(g)(g\cdot z(h))$
([[def-crossed-homomorphism-for-a-g-group]]).

[L2] The graph subset is $\Gamma_z=\{(z(g),g):g\in G\}$ in the semidirect product
([[def-graph-subgroup-in-a-semidirect-product]]).

[L3] The semidirect-product multiplication is
$$(m,g)(n,h)=(m(g\cdot n),gh),$$
and the canonical copy of $M$ is the kernel of the projection to $G$
([[thm-external-semidirect-product-is-a-group]], [[prop-canonical-subgroups-of-an-external-semidirect-product]]).

## Proof

**Proof technique:** iff.

1.1 Suppose $z$ is a crossed homomorphism. Then $(z(g),g)(z(h),h)=\bigl(z(g)(g\cdot z(h)),gh\bigr)=(z(gh),gh)$, so [L1] and [L3] show that $\Gamma_z$ is closed under products. The identity is $(z(1),1)=(1,1)$, and inverses also stay in $\Gamma_z$, so $\Gamma_z$ is a subgroup. [L1, L2, L3, algebra]

1.2 Conversely, suppose $\Gamma_z$ is a complement. Since it is a subgroup, the product of $(z(g),g)$ and $(z(h),h)$ again lies in $\Gamma_z$. Comparing second coordinates gives $(z(g),g)(z(h),h)=(z(gh),gh)$, and then [L3] forces $z(gh)=z(g)(g\cdot z(h))$. So $z$ is a crossed homomorphism. [L1, L2, L3, algebra]

2.1 The projection $M\rtimes G\to G$ restricts to a bijection $\Gamma_z\to G$ by [L2], so $\Gamma_z$ intersects the kernel $M$ trivially and multiplies with that kernel to all of $M\rtimes G$. Hence $\Gamma_z$ is a complement to the canonical copy of $M$. [L2, L3, step 1.1]

3.1 Steps 1.1-1.2 and 2.1 prove the equivalence. [step 2.1, step 1.2] ∎
