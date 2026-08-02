---
id: lem-linear-subspace-criterion
kind: lemma
title: "One-step subspace test: a nonempty $W \\subseteq V$ is a linear subspace if and only if $\\lambda u + v \\in W$ for all $\\lambda \\in F$ and $u, v \\in W$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-subspace, def-vector-space, lem-vector-space-elementary-consequences, def-field]
justified_by: []
aliases: [lem-one-step-subspace-test]
landmark: false
short: "$\\lambda u + v \\in W$ test"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let
$W \subseteq V$ be **nonempty**. Then $W$ is a linear subspace of $V$
([[def-linear-subspace]]) **if and only if**

$$\lambda u + v \in W \qquad \text{for all } \lambda \in F \text{ and all } u, v \in W .$$

Nonemptiness cannot be dropped: the empty set satisfies the displayed condition
vacuously and is not a linear subspace, since it does not contain $0_V$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and a nonempty subset $W \subseteq V$.

[L1] A linear subspace of $V$ is a subset satisfying (W1) $0_V \in W$, (W2) closure under $+$, and (W3) closure under scalar multiplication ([[def-linear-subspace]]).

[L2] The vector space axioms, in particular (V5) $1_F v = v$, and that $(V,+,0_V)$ is an abelian group with $0_V$ a two-sided identity ([[def-vector-space]]).

[L3] $(-1_F)v = -v$ for every $v \in V$, and $v + (-v) = 0_V$ ([[lem-vector-space-elementary-consequences]], [[def-vector-space]]).

[L4] $F$ has elements $0_F$ and $1_F$, and every $\mu \in F$ has an additive inverse $-\mu$; in particular $1_F \in F$ and $-1_F \in F$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Necessity. Suppose $W$ is a linear subspace, and let $\lambda \in F$ and $u, v \in W$. Then $\lambda u \in W$ by (W3), and hence $\lambda u + v \in W$ by (W2). [L1]

1.2 Sufficiency, the zero vector. Suppose $\lambda u + v \in W$ for all $\lambda \in F$ and $u, v \in W$. Since $W$ is nonempty, choose $w \in W$; applying the condition with $\lambda = -1_F$ and $u = v = w$ gives $(-1_F)w + w \in W$, and $(-1_F)w + w = -w + w = 0_V$, so $0_V \in W$, which is (W1). [given, L3, L4, choose]

1.3 Sufficiency, closure under addition. Let $u, v \in W$. Applying the condition with $\lambda = 1_F$ gives $1_F u + v \in W$, and $1_F u = u$ by (V5), so $u + v \in W$, which is (W2). [given, L2, L4]

2.1 Sufficiency, closure under scalars. Let $\lambda \in F$ and $u \in W$. By step 1.2 we have $0_V \in W$, so the condition applies to $\lambda$, $u$ and $0_V$ and gives $\lambda u + 0_V \in W$; since $0_V$ is a two-sided identity, $\lambda u + 0_V = \lambda u$, so $\lambda u \in W$, which is (W3). [step 1.2, given, L2]

3.1 Steps 1.2, 1.3 and 2.1 verify (W1), (W2) and (W3), so a nonempty $W$ satisfying the displayed condition is a linear subspace; with step 1.1 this proves the equivalence. [step 1.1, step 1.2, step 1.3, step 2.1, L1] ∎

## Remarks

- **The order of the two verifications matters.** Closure under scalar
  multiplication is deduced *after* $0_V$ is known to lie in $W$, because it is
  obtained by applying the test to the pair $u$, $0_V$. Running the argument in
  the other order would use $0_V \in W$ before it had been established.

- **One test, three conditions.** The single condition is exactly as strong as the
  three of [[def-linear-subspace]], and it is the form used in practice: to check
  that a set is a linear subspace one shows it is nonempty and closes under a
  single mixed expression. It is the linear analogue of the one-step subgroup test
  $gh^{-1} \in H$ ([[lem-subgroup-criterion]]), and, exactly as there, the
  nonemptiness hypothesis is what rules out the empty set.

- **Neither closure condition implies the other**, so a test combining them is not
  extravagant. A subset of a vector space can be closed under addition and not
  under scalar multiplication, and another can be closed under scalar
  multiplication and not under addition; the companion examples page records a
  witness of each kind.
