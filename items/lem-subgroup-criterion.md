---
id: lem-subgroup-criterion
kind: lemma
title: "One-step subgroup test: a nonempty $H \\subseteq G$ is a subgroup iff $gh^{-1} \\in H$ for all $g, h \\in H$; the identity and the inverses of $H$ are then those of $G$"
status: published
origin: session
deps: [def-subgroup, def-group, lem-group-inverse-laws, lem-group-cancellation, lem-inverse-unique]
justified_by: []
aliases: [lem-one-step-subgroup-test]
landmark: false
short: "$gh^{-1} \\in H$ test"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subgroup test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subgroup_test"
    - title: "Subgroup (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subgroup"
pipeline_run: null
---

## Statement

Let $G$ be a group ([[def-group]]) with identity $e$ and let $H \subseteq G$ be
nonempty. Then $H$ is a subgroup of $G$ ([[def-subgroup]]) **if and only if**

$$g h^{-1} \in H \qquad \text{for all } g, h \in H .$$

Moreover, if $H \subseteq G$ is nonempty, closed under the operation of $G$, and
is a group under that restricted operation with some identity element $f$ and
some inverse $x^{\ast}$ for each $x \in H$, then $f = e$ and $x^{\ast} = x^{-1}$
for every $x \in H$; so $H$ is a subgroup in the sense of [[def-subgroup]], and
"subgroup" and "subset that is a group under the restricted operation" agree.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$, and a nonempty subset $H \subseteq G$.

[L1] A subgroup is a subset containing $e$ and closed under the operation and under inverses; it is then a group under the restricted operation, with identity $e$ and with the inverses of $G$ ([[def-subgroup]]).

[L2] The group laws in $G$: associativity, the two-sided identity $e$, and two-sided inverses ([[def-group]]).

[L3] $(g^{-1})^{-1} = g$ ([[lem-group-inverse-laws]]).

[L4] Cancellation in $G$: $gx = gy$ implies $x = y$ ([[lem-group-cancellation]]).

[L5] Uniqueness of inverses in a monoid, in the sharp form: if $x$ is invertible and $y x = e$ or $x y = e$, then $y = x^{-1}$ ([[lem-inverse-unique]]).

## Proof

**Proof technique:** direct.

1.1 Necessity. Suppose $H$ is a subgroup and let $g, h \in H$. Then $h^{-1} \in H$ by closure under inverses, and $g h^{-1} \in H$ by closure under the operation. [L1]

1.2 Sufficiency, the identity. Suppose $g h^{-1} \in H$ for all $g, h \in H$. Since $H$ is nonempty, choose $x \in H$; taking $g = h = x$ gives $x x^{-1} = e \in H$. [given, L2, choose]

1.3 The second claim, the identity. Let $H$ be nonempty, closed under the operation, and a group under the restricted operation with identity $f \in H$. Then $f f = f$ in $H$, hence in $G$; also $f e = f$ in $G$. Cancelling $f$ on the left in $ff = fe$ gives $f = e$. [given, L2, L4]

2.1 Sufficiency, inverses. Let $h \in H$. Taking $g = e$, which lies in $H$ by step 1.2, gives $e h^{-1} = h^{-1} \in H$. [step 1.2, given, L2]

2.2 The second claim, inverses. Let $x \in H$ with inverse $x^{\ast} \in H$ for the restricted operation, so $x^{\ast} x = f = e$ by step 1.3. Since $x$ is invertible in $G$, uniqueness of inverses gives $x^{\ast} = x^{-1}$; in particular $x^{-1} \in H$. [step 1.3, L5]

3.1 Sufficiency, products. Let $g, h \in H$. By step 2.1, $h^{-1} \in H$, so applying the hypothesis to the pair $g$ and $h^{-1}$ gives $g (h^{-1})^{-1} \in H$, and $(h^{-1})^{-1} = h$, so $gh \in H$. [step 2.1, given, L3]

3.2 Hence such an $H$ contains $e$ by step 1.3, is closed under the operation by assumption, and is closed under inverses by step 2.2: it is a subgroup in the sense of [[def-subgroup]]. [step 1.3, step 2.2, L1]

4.1 Steps 1.2, 2.1 and 3.1 verify (S1), (S3) and (S2), so $H$ is a subgroup; with step 1.1 this proves the equivalence. [step 1.1, step 1.2, step 2.1, step 3.1, L1]

5.1 The one-step test characterises subgroups among nonempty subsets, and a nonempty subset that is a group under the restricted operation is a subgroup with the same identity and the same inverses as $G$. [step 4.1, step 3.2] ∎

## Remarks

- **Why the second claim is needed at all.** Nothing in the phrase "is a group under the restricted operation" forces the identity of that group to be the identity of $G$; the hypothesis only says some element acts as an identity *within $H$*. Cancellation in $G$ is what collapses the two, and it is available because $G$ is a group. In a monoid the corresponding statement is false: a subset closed under the operation can be a monoid whose identity is not the identity of the ambient monoid, as $\{0\}$ inside $(\mathbb{Z},\cdot,1)$ shows, where $0$ is an idempotent acting as an identity on that subset.

- **Nonemptiness cannot be dropped** from the one-step test, since the empty set satisfies the condition vacuously and is not a subgroup: it does not contain $e$.

- Closure under the operation alone is not enough, even for a nonempty subset: the nonnegative integers inside $(\mathbb{Z},+)$ are closed under addition and contain $0$, but are not a subgroup, as recorded on the companion page.
