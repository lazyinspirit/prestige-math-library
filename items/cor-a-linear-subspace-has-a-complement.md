---
id: cor-a-linear-subspace-has-a-complement
kind: corollary
title: "Every linear subspace $U$ of a vector space $V$ has a complement: a linear subspace $W$ with $V = U \\oplus W$"
status: published
origin: session
deps: [thm-every-independent-set-extends-to-a-basis, cor-every-vector-space-has-a-basis, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, lem-independent-list-is-injective, def-linear-basis, def-linear-independence, def-internal-direct-sum, def-sum-of-linear-subspaces, lem-sum-is-span-of-union, def-linear-subspace, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, lem-span-monotone-and-idempotent, def-monoid-finite-product, lem-restriction-of-scalars, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
aliases: [cor-complement-exists]
landmark: false
short: "every linear subspace has a complement"
proof_strategy: constructive
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Direct sum of modules (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_sum_of_modules"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice**, through
[[thm-every-independent-set-extends-to-a-basis]] and
[[cor-every-vector-space-has-a-basis]]. Let $V$ be a vector space over a field
$F$ ([[def-vector-space]]) and let $U$ be a linear subspace of $V$
([[def-linear-subspace]]). Then there is a linear subspace $W$ of $V$ with

$$V \;=\; U \oplus W$$

([[def-internal-direct-sum]]), that is $U + W = V$ and $U \cap W = \{0_V\}$.

No finiteness of $V$, of $U$ or of any basis is assumed.

## Facts & Assumptions

**Given:** The Axiom of Choice; a field $F$; a vector space $V$ over $F$; and a linear subspace $U$ of $V$.

[L1] $U$ is itself a vector space over $F$, with the addition, the zero and the scalar multiplication of $V$ ([[def-linear-subspace]]); every vector space has a basis ([[cor-every-vector-space-has-a-basis]]); and for $A \subseteq U$, "$A$ is a basis of $U$" means $A$ is linearly independent as a subset of $V$ with $\operatorname{span}(A) = U$ ([[def-linear-basis]], section on bases of a linear subspace, [[def-linear-independence]]).

[L2] If $L \subseteq S \subseteq V$ with $L$ linearly independent and $\operatorname{span}(S) = V$, there is a basis $B$ of $V$ with $L \subseteq B \subseteq S$; and $\operatorname{span}(V) = V$ ([[thm-every-independent-set-extends-to-a-basis]], [[lem-span-monotone-and-idempotent]], claim 4).

[L3] $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$, contained in every linear subspace of $V$ containing $T$, and monotone in $T$ ([[def-linear-combination-and-span]], [[lem-span-monotone-and-idempotent]], [[lem-span-is-the-set-of-linear-combinations]]).

[L4] For two linear subspaces, $U + W = \sum_{i<2}U_i$ and $\sum_{i<2}U_i = \operatorname{span}(U \cup W)$ ([[def-sum-of-linear-subspaces]], [[lem-sum-is-span-of-union]]).

[L5] $\operatorname{span}(T)$ is already the set of $\sum_{i<p}\alpha_i a_i$ with $a : p \to T$ **injective** ([[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]], claim 2).

[L6] Concatenation: for $y : p \to X$ and $z : q \to X$ there is exactly one $c : p+q \to X$ with $c_i = y_i$ for $i < p$ and $c_{p+j} = z_j$ for $j < q$; when $X = V$ it satisfies $\sum_{i<p+q}c_i = \sum_{i<p}y_i + \sum_{j<q}z_j$; and if $y$ and $z$ are injective with disjoint images then $c$ is injective with image $y[p] \cup z[q]$. A list into $V$ is linearly independent exactly when it is injective with linearly independent image ([[lem-independent-list-is-injective]], claims 3 and 6). The scalar case is the same statement read in $F$, a vector space over itself ([[lem-restriction-of-scalars]], claim 1).

[L7] $(V,+,0_V)$ is an abelian group; $0_F y = 0_V$; $(-1_F)y = -y$; (V4) $(\lambda\mu)y = \lambda(\mu y)$; (F1) an all-$0_V$ list sums to $0_V$; and a scalar passes through a finite sum, so $(-1_F)\sum_{j<q}\beta_j b_j = \sum_{j<q}(-\beta_j)b_j$ ([[def-vector-space]], [[lem-vector-space-elementary-consequences]], [[def-field]], [[def-sum-of-linear-subspaces]], [[def-monoid-finite-product]]).

[L8] Indices run over von Neumann naturals ([[def-natural-numbers]], [[lem-nat-order-is-membership]]) and injectivity is as in [[def-injection-surjection-bijection]].

## Proof

**Proof technique:** constructive.

1.1 $U$ is a vector space over $F$ in its own right, so it has a basis $A$; equivalently $A \subseteq U$ is linearly independent as a subset of $V$ and $\operatorname{span}(A) = U$. [L1, construct]

2.1 Since $A \subseteq V$, $A$ is linearly independent and $\operatorname{span}(V) = V$, the extension theorem supplies a basis $B$ of $V$ with $A \subseteq B \subseteq V$. Put $W := \operatorname{span}(B \setminus A)$, a linear subspace of $V$. [step 1.1, L2, L3]

3.1 $U + W = V$. By step 2.1 and step 1.1 we have $A \subseteq \operatorname{span}(A) = U$ and $B \setminus A \subseteq \operatorname{span}(B \setminus A) = W$, so $B = A \cup (B \setminus A) \subseteq U \cup W$ and hence $V = \operatorname{span}(B) \subseteq \operatorname{span}(U \cup W) = U + W$. Conversely $\operatorname{span}(A) \subseteq \operatorname{span}(B)$ and $\operatorname{span}(B \setminus A) \subseteq \operatorname{span}(B)$ by monotonicity, so $U \cup W \subseteq \operatorname{span}(B) = V$, and $\operatorname{span}(U \cup W) \subseteq V$ since $V$ is a linear subspace of itself containing $U \cup W$. [step 1.1, step 2.1, L3, L4]

3.2 $U \cap W = \{0_V\}$. Both are linear subspaces, so $0_V$ lies in the intersection. Conversely let $x \in U \cap W$. Since $x \in \operatorname{span}(A)$ there are $p$, an injective $a : p \to A$ and $\alpha : p \to F$ with $x = \sum_{i<p}\alpha_i a_i$; since $x \in \operatorname{span}(B \setminus A)$ there are $q$, an injective $b : q \to B \setminus A$ and $\beta : q \to F$ with $x = \sum_{j<q}\beta_j b_j$. The images $a[p] \subseteq A$ and $b[q] \subseteq B \setminus A$ are disjoint, so the concatenation $c : p+q \to B$ of $a$ and $b$ is injective, and the concatenation $\gamma : p+q \to F$ of $\alpha$ with $j \mapsto -\beta_j$ is a list of scalars; the list $i \mapsto \gamma_i c_i$ is the concatenation of $i \mapsto \alpha_i a_i$ and $j \mapsto (-\beta_j)b_j$, so $\sum_{i<p+q}\gamma_i c_i = \sum_{i<p}\alpha_i a_i + \sum_{j<q}(-\beta_j)b_j = x + (-x) = 0_V$. As $c$ is an injective list into the linearly independent set $B$, it is a linearly independent list, so every $\gamma_i = 0_F$; in particular $\alpha_i = 0_F$ for every $i < p$, whence every term $\alpha_i a_i$ is $0_V$ and $x = 0_V$ by (F1). [step 1.1, step 2.1, L5, L6, L7, L8]

4.1 Taking $W = \operatorname{span}(B \setminus A)$, steps 3.1 and 3.2 give $U + W = V$ and $U \cap W = \{0_V\}$, which for two summands is exactly $V = U \oplus W$. So the required complement exists. [step 2.1, step 3.1, step 3.2, L4, discharge-construct] ∎

## Remarks

- **The complement is not unique, and nothing above claims it is.** In $F^{2}$ the span of the first standard unit vector has both the span of the second and the span of their sum as complements; the companion page uses those same three lines for a different failure, and the order-69 examples page uses them for a third. What the corollary produces is one complement, read off from one extension of one basis.

- **Choice is spent twice, in the same place.** A basis of $U$ and an extension of it to a basis of $V$ both come from Zorn's lemma ([[thm-every-independent-set-extends-to-a-basis]]). In finite dimension neither is needed: [[thm-dimension-of-a-linear-subspace]] produces a basis of $U$ without any choice principle, and the same greatest-size argument extends it.

- **Why the intersection argument avoids ordered bases.** For an infinite $B$ there is no ordered basis to compare coordinates in, so the argument runs on the finite injective lists that actually occur, supplied by [[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]], and concatenates two of them into one list into $B$. That is what makes the proof independent of any finiteness assumption.
