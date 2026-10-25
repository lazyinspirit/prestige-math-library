---
id: prop-the-integers-have-weak-and-global-dimension-one
title: "The integers have weak and global dimension one"
kind: proposition
status: published
origin: pipeline
deps: ["thm-higher-tor-over-the-integers-vanishes", "lem-projective-modules-are-flat-over-an-arbitrary-ring", "def-left-and-right-global-dimension-of-a-ring", "def-left-and-right-weak-global-dimension", "def-projective-dimension-of-an-object", "def-flat-dimension-of-a-module", "def-tensor-product-of-modules-by-generators-and-relations", "def-axiom-of-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. Both left and right weak global dimension and both left and right global dimension of $\mathbb Z$ are $1$.

Separately, without any choice assumption, $\mathbb Z/n\mathbb Z$ is neither flat nor projective for each integer $n>1$.

## Proof

**Given:** AC for the dimension assertion, and an integer $n>1$ for the choice-free nonflatness assertion.

1.1 Under [[def-axiom-of-choice]], [[thm-higher-tor-over-the-integers-vanishes]] supplies a projective resolution of length at most one for every abelian group. Its terms are flat by [[lem-projective-modules-are-flat-over-an-arbitrary-ring]], so the same sequence is a flat resolution. Thus every projective and flat dimension is at most one, by [[def-projective-dimension-of-an-object]] and [[def-flat-dimension-of-a-module]]. [given, algebra]

1.2 Put $T=\mathbb Z/n\mathbb Z$. The tensor presentation in [[def-tensor-product-of-modules-by-generators-and-relations]] gives inverse maps $\mathbb Z\otimes_{\mathbb Z}T\to T$, $a\otimes t\mapsto at$, and $t\mapsto1\otimes t$: their composites fix generators. Tensoring the injection $\mathbb Z\xrightarrow{\times n}\mathbb Z$ with $T$ therefore gives multiplication by $n$ on $T$, which is zero on the nonzero class of $1$. This is not injective, so $T$ is not flat. Projective modules are flat by [[lem-projective-modules-are-flat-over-an-arbitrary-ring]], hence $T$ is not projective either. No choice is used in this calculation. [given, algebra]

2.1 A length-zero flat or projective resolution would identify $T$ with a flat or projective module respectively. Thus step 1.2 excludes dimension zero; step 1.1 gives $\operatorname{fd}_{\mathbb Z}T=\operatorname{pd}_{\mathbb Z}T=1$ under AC. Taking the suprema in [[def-left-and-right-global-dimension-of-a-ring]] and [[def-left-and-right-weak-global-dimension]] yields both dimensions exactly one. Since left and right modules over the commutative ring $\mathbb Z$ are the same abelian groups with the same integer action, the argument proves all four stated dimensions. [step 1.1, step 1.2, algebra] ∎
