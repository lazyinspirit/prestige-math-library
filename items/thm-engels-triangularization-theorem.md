---
id: thm-engels-triangularization-theorem
kind: theorem
title: Engel triangularization theorem
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-engel-common-zero-vector, def-subrepresentation-quotient-representation-and-intertwiner, def-quotient-vector-space-and-canonical-projection]
landmark: true
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, Theorem 1.35"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Theorem 1.35 and its proof, printed pp. 31–32"
---

## Statement

Let $V$ be finite-dimensional over any field, and let
$\rho:\mathfrak g\to\mathfrak{gl}(V)$ be nil. Then there is a flag

$$0=V_0\subset V_1\subset\cdots\subset V_n=V$$

with $\dim V_i=i$ and $\rho(\mathfrak g)V_i\subseteq V_{i-1}$. Equivalently,
there is a basis in which every $\rho(x)$ is strictly upper triangular.

## Facts & Assumptions

**Given:** A nil representation of a Lie algebra $\mathfrak g$ on a
finite-dimensional vector space $V$.

[L1] On a nonzero finite-dimensional nil module there is a nonzero vector
annihilated by all of $\mathfrak g$ ([[lem-engel-common-zero-vector]]).

[L2] An invariant subspace and its quotient carry the restricted and induced
representations ([[def-subrepresentation-quotient-representation-and-intertwiner]]).

[L3] The canonical projection onto a vector-space quotient is linear and
surjective ([[def-quotient-vector-space-and-canonical-projection]]).

## Proof

**Proof technique:** induction on $\dim V$.

1.1 If $V=0$, the empty flag has the required property and the empty basis gives the matrix assertion. [base, given]

1.2 Assume $V\neq0$ and the theorem for all nil modules of dimension smaller than $\dim V$. [ih, given]

1.3 By [L1], choose $0\neq v\in V$ with $\mathfrak g v=0$, and set $V_1=kv$. This is an invariant one-dimensional subspace annihilated by $\mathfrak g$. [L1, L2]

2.1 Every induced operator on $V/V_1$ is nilpotent, since a power of $\rho(x)$ that vanishes on $V$ also vanishes on the quotient. By [L2] and step 1.2, the quotient has a flag $0=\overline V_1\subset\cdots\subset\overline V_n=V/V_1$ with $\mathfrak g\overline V_i\subseteq\overline V_{i-1}$. Taking inverse images under the projection [L3] and adjoining $0\subset V_1$ gives the required flag of $V$. [L2, L3, step 1.2, step 1.3]

3.1 Choose vectors adapted to the flag, in the finite sequential sense. The containment $\rho(\mathfrak g)V_i\subseteq V_{i-1}$ says every matrix sends the $i$th basis vector into the span of earlier vectors, hence is strictly upper triangular in this ordering. Conversely a common strictly upper-triangular basis supplies exactly this flag. The zero case was covered in step 1.1. [step 1.1, step 2.1, discharge-induction] ∎
