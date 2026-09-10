---
id: thm-the-integers-have-global-dimension-one
kind: theorem
title: "The integers have global dimension one"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-global-dimension-of-a-ring, def-projective-dimension-of-an-object, lem-subgroups-of-free-abelian-groups-are-free, cor-every-module-is-a-quotient-of-a-free-module, thm-free-modules-are-projective-with-choice-boundary, def-projective-module, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-projective-dimension-and-choice-contract-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, section 4.1, Example 4.1.4"
      url: https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Choice.
Both left and right global dimension of $\mathbb Z$ equal $1$.

## Facts & Assumptions

**Given:** An arbitrary abelian group $A$ and an integer $n>1$, under Choice.

[L1] The canonical free module on the underlying set of $A$ surjects onto $A$ by $e_a\mapsto a$, without Choice ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[L2] Under AC, subgroups of free abelian groups are free ([[lem-subgroups-of-free-abelian-groups-are-free]]) and free modules are projective ([[thm-free-modules-are-projective-with-choice-boundary]]). The hypothesis is [[def-axiom-of-choice]]; the former theorem uses well-ordering and simultaneous coordinate lifts, and the latter uses choices of basis preimages.

[L3] A projective module lifts every map through every surjection ([[def-projective-module]]).

[L4] Projective dimension is the least possible length of a projective resolution, and is zero exactly for projective objects ([[def-projective-dimension-of-an-object]]). Left and right global dimensions are the separate suprema of these dimensions ([[def-left-and-right-global-dimension-of-a-ring]]).

## Proof

**Proof technique:** direct.

1.1 Take the canonical surjection $\varepsilon:\mathbb Z^{(A)}\to A$ and put $F=\mathbb Z^{(A)}$, $K=\ker\varepsilon$. The sequence $0\to K\to F\to A\to0$ is exact. Under the stated AC hypothesis, [L2] makes $K$ free and both $K$ and $F$ projective. Hence this is a projective resolution of length at most one, and $\operatorname{pd}_{\mathbb Z}A\leq1$. No family of resolutions of all groups is selected: this construction applies separately to each $A$. [given, L1, L2, L4, construct]

2.1 The group $\mathbb Z/n\mathbb Z$ is not projective. Otherwise its identity map would lift through the quotient surjection $\pi:\mathbb Z\to\mathbb Z/n\mathbb Z$ to a homomorphism $s$ with $\pi s=\mathrm{id}$. But $n s([1])=s(n[1])=s(0)=0$, and an integer annihilated by the positive integer $n$ is zero. Thus $s([1])=0$, contradicting $\pi s([1])=[1]\ne0$ for $n>1$. Consequently [L4] and step 1.1 give $\operatorname{pd}_{\mathbb Z}(\mathbb Z/n\mathbb Z)=1$, while step 1.1 bounds every projective dimension by one. Therefore the left global dimension is exactly one. [given, step 1.1, L3, L4, algebra]

3.1 Left and right $\mathbb Z$-modules are both precisely abelian groups with the integer action given by repeated addition and additive inverses. Passing from $m a$ to $a m=m a$ preserves the underlying homomorphisms, exact sequences, and lifting diagrams; thus it preserves projectivity and lengths of projective resolutions in both directions. Their two suprema are therefore equal, so the right global dimension is also one. [step 2.1, L3, L4, algebra] ∎

## Remarks

The nonprojectivity argument for $\mathbb Z/n\mathbb Z$ is choice-free. AC enters the upper bound through the two explicit suppliers in [L2]. No comparison of unbounded resolutions, Ext calculation, or implication from AC to DC is needed for this proof.
