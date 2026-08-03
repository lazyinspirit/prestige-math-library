---
id: thm-dimension-formula
kind: theorem
title: "The dimension formula: for finite-dimensional linear subspaces $U$ and $W$ of $V$, the subspaces $U + W$ and $U \\cap W$ are finite-dimensional and $\\dim_F(U+W) + \\dim_F(U \\cap W) = \\dim_F U + \\dim_F W$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-dimension-of-a-linear-subspace, def-dimension, thm-any-two-finite-bases-have-the-same-size, cor-independent-set-is-no-larger-than-a-finite-spanning-set, thm-unique-coordinates-with-respect-to-an-ordered-basis, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, lem-independent-list-is-injective, def-linear-basis, def-linear-independence, def-sum-of-linear-subspaces, lem-sum-is-span-of-union, def-linear-subspace, lem-intersection-of-linear-subspaces, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, lem-span-monotone-and-idempotent, def-monoid-finite-product, lem-restriction-of-scalars, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-nat-addition, lem-nat-add-associative, lem-nat-add-commutative, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [thm-grassmann-formula]
landmark: true
short: "dimension formula for $U + W$"
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
    - title: "Dimension theorem for vector spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_theorem_for_vector_spaces"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "K. Kuttler, A First Course in Linear Algebra: Sums and Intersections"
      url: "https://math.libretexts.org/Bookshelves/Linear_Algebra/A_First_Course_in_Linear_Algebra_%28Kuttler%29/09%3A_Vector_Spaces/9.05%3A_Sums_and_Intersections"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let $U$ and
$W$ be linear subspaces of $V$ ([[def-linear-subspace]]), both
finite-dimensional over $F$ ([[def-dimension]]). Then $U \cap W$ and $U + W$
([[def-sum-of-linear-subspaces]]) are finite-dimensional and

$$\dim_F(U+W) \;+\; \dim_F(U \cap W) \;=\; \dim_F U \;+\; \dim_F W .$$

The ambient space $V$ is arbitrary and need not be finite-dimensional.

**The two boundary cases.** If $U \cap W = \{0_V\}$ the formula reads
$\dim_F(U \oplus W) = \dim_F U + \dim_F W$, since $\dim_F\{0_V\} = 0$; if
$U = W$ it reads $\dim_F U + \dim_F U = \dim_F U + \dim_F U$.

**No choice principle is used.** The bases of $U$ and of $W$ extending a basis of
$U \cap W$ come from claim 3 of [[thm-dimension-of-a-linear-subspace]], which is
proved by a largest-independent-subset argument inside a finite-dimensional
space. Zorn's lemma is **not** used anywhere below, and the Zorn-based extension
theorem of this page is neither cited nor needed; the remarks say where the
difference lies.

## Facts & Assumptions

**Given:** A field $F$; a vector space $V$ over $F$; and finite-dimensional linear subspaces $U$ and $W$ of $V$; write $u := \dim_F U$ and $w := \dim_F W$.

[L1] $\dim_F X = p$ means $X$ has a basis with $p$ elements; if $X$ has one finite basis then every basis of $X$ is finite, and any two have the same size ([[def-dimension]], [[thm-any-two-finite-bases-have-the-same-size]]).

[L2] The intersection of two linear subspaces of $V$ is a linear subspace of $V$ ([[lem-intersection-of-linear-subspaces]]); a linear subspace of $V$ contained in $U$ is a linear subspace of $U$, linear independence is the same computed in a linear subspace or in $V$, and spans agree ([[def-linear-basis]], section on bases of a linear subspace, [[def-linear-subspace]]).

[L3] A linear subspace of a finite-dimensional space is finite-dimensional of no greater dimension ([[thm-dimension-of-a-linear-subspace]]).

[L4] If $X$ has a spanning set with $p$ elements then every linearly independent subset of $X$ is finite with at most $p$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

[L5] In a finite-dimensional vector space $X$ over $F$, every linearly independent $A_0 \subseteq X$ is contained in a basis of $X$, and no choice principle is used to produce it ([[thm-dimension-of-a-linear-subspace]], claim 3, which states this for a linear subspace and notes that a space is a linear subspace of itself). Also $\operatorname{span}(X) = X$ for a linear subspace $X$ ([[lem-span-monotone-and-idempotent]], claim 4).

[L6] Concatenation: for $y : p \to Z$ and $z : q \to Z$ there is exactly one $c : p+q \to Z$ with $c_i = y_i$ for $i < p$ and $c_{p+j} = z_j$ for $j < q$; for $Z = V$ it satisfies $\sum_{i<p+q}c_i = \sum_{i<p}y_i + \sum_{j<q}z_j$; and if $y, z$ are injective with disjoint images then $c$ is injective with image $y[p] \cup z[q]$. A list is linearly independent exactly when it is injective with linearly independent image, and every subset of a linearly independent set is linearly independent ([[lem-independent-list-is-injective]], claims 3, 6 and 7). The scalar case is the same statement read in $F$, a vector space over itself ([[lem-restriction-of-scalars]]).

[L7] For any list $v : p \to V$, $\operatorname{span}(v[p]) = \{\, \sum_{i<p}\lambda_i v_i : \lambda : p \to F \,\}$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], claim 1).

[L8] A subset $T$ is linearly dependent exactly when some $t \in T$ lies in $\operatorname{span}(T \setminus \{t\})$ ([[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]], claim 1).

[L9] $\operatorname{span}(T)$ is a linear subspace containing $T$, contained in every linear subspace containing $T$, monotone in $T$, and equal to the set of linear combinations of finite lists into $T$; and $U + W = \operatorname{span}(U \cup W)$ ([[def-linear-combination-and-span]], [[lem-span-monotone-and-idempotent]], [[lem-span-is-the-set-of-linear-combinations]], [[lem-sum-is-span-of-union]], [[def-sum-of-linear-subspaces]]).

[L10] $(V,+,0_V)$ is an abelian group; $0_F y = 0_V$; $(-1_F)y = -y$; (V4) $(\lambda\mu)y = \lambda(\mu y)$; (F1) an all-$0_V$ list sums to $0_V$; and a scalar passes through a finite sum ([[def-vector-space]], [[lem-vector-space-elementary-consequences]], [[def-field]], [[def-sum-of-linear-subspaces]], [[def-monoid-finite-product]]).

[L11] A finite set is equinumerous with exactly one natural number ([[lem-pigeonhole]], claim 3); addition on $\mathbb{N}$ is associative and commutative ([[def-nat-addition]], [[lem-nat-add-associative]], [[lem-nat-add-commutative]]); $\approx$, images and injectivity are as in [[def-equinumerous]], [[def-countable]], [[def-injection-surjection-bijection]], [[def-natural-numbers]], [[lem-nat-order-is-membership]].

## Proof

**Proof technique:** constructive.

1.1 $U \cap W$ is a linear subspace of $V$ contained in $U$, hence a linear subspace of $U$; since $U$ is finite-dimensional, so is $U \cap W$. Write $a := \dim_F(U \cap W)$, fix a basis $A$ of $U \cap W$ with $A \approx a$, and fix an injective list $\alpha : a \to V$ with image $A$. Note $\operatorname{span}(A) = U \cap W$, and that independence and spans may be computed in $V$ throughout. [L1, L2, L3, construct]

2.1 Extending $A$ in each of $U$ and $W$. The set $A$ is linearly independent with $A \subseteq U$, and $U$ is finite-dimensional, so $A$ is contained in a basis $B_U$ of $U$; likewise $A \subseteq W$ gives a basis $B_W$ of $W$ with $A \subseteq B_W$. Both extensions are the finite-dimensional ones, with no appeal to Zorn's lemma. Put $A_U := B_U \setminus A$ and $A_W := B_W \setminus A$, which are disjoint from $A$ by construction. Each is a subset of a linearly independent set, hence linearly independent, and each lies in a space with a finite basis, hence is finite; fix $q$ and $r$ with $A_U \approx q$ and $A_W \approx r$, and injective lists $\beta : q \to V$ with image $A_U$ and $\delta : r \to V$ with image $A_W$. [step 1.1, L1, L4, L5, L6, L11, construct]

3.1 The sizes add up. The lists $\alpha$ and $\beta$ are injective with disjoint images, so their concatenation is an injective list $a+q \to V$ with image $A \cup A_U = B_U$; hence $B_U \approx a + q$. Also $B_U$ is a basis of $U$, so $B_U \approx u$, and a finite set is equinumerous with exactly one natural number, so $a + q = u$. The same argument with $\delta$ gives $a + r = w$. [step 2.1, L1, L6, L11]

3.2 $A_U$ and $A_W$ are disjoint. Suppose $y \in A_U \cap A_W$. Then $y \in B_U \subseteq U$ and $y \in B_W \subseteq W$, so $y \in U \cap W = \operatorname{span}(A)$. But $y \in A_W$ means $y \notin A$, so $A \subseteq B_W \setminus \{y\}$ and monotonicity gives $y \in \operatorname{span}(A) \subseteq \operatorname{span}(B_W \setminus \{y\})$, which makes $B_W$ linearly dependent and contradicts its being a basis. [step 2.1, L8, L9]

4.1 One list carrying all three blocks. Let $c'$ be the concatenation of $\alpha$ and $\beta$, an injective list $a+q \to V$ with image $B_U$, and let $c$ be the concatenation of $c'$ and $\delta$, a list $(a+q)+r \to V$. By step 3.2 the images $B_U$ and $A_W$ are disjoint, since $B_U \cap A_W$ would lie in $A \cap A_W$ or in $A_U \cap A_W$, both empty; so $c$ is injective with image $C := B_U \cup A_W = A \cup A_U \cup A_W = B_U \cup B_W$. For scalars $\gamma : (a+q)+r \to F$ the sum splits as $\sum_{i<(a+q)+r}\gamma_i c_i = \bigl(\sum_{i<a+q}\gamma_i c'_i\bigr) + \bigl(\sum_{k<r}\gamma_{(a+q)+k}\delta_k\bigr)$. [step 2.1, step 3.2, L6, L10]

5.1 The list $c$ is linearly independent. Let $\gamma : (a+q)+r \to F$ with $\sum_{i<(a+q)+r}\gamma_i c_i = 0_V$, and write $P := \sum_{i<a+q}\gamma_i c'_i$ and $R := \sum_{k<r}\gamma_{(a+q)+k}\delta_k$, so $P + R = 0_V$ by step 4.1 and hence $R = -P$. Now $P$ is a linear combination of the list $c'$, whose values lie in $B_U$, so $P \in \operatorname{span}(B_U) = U$ and therefore $R = -P \in U$; and $R$ is a linear combination of $\delta$, whose values lie in $A_W \subseteq B_W$, so $R \in \operatorname{span}(B_W) = W$. Hence $R \in U \cap W = \operatorname{span}(A) = \operatorname{span}(\alpha[a])$, so $R = \sum_{i<a}\varepsilon_i\alpha_i$ for some $\varepsilon : a \to F$. Let $d$ be the concatenation of $\alpha$ and $\delta$, injective with image $A \cup A_W = B_W$ since $A$ and $A_W$ are disjoint, and let $\eta$ be the concatenation of $\varepsilon$ with $k \mapsto -\gamma_{(a+q)+k}$; then $\sum_{i<a+r}\eta_i d_i = R + (-R) = 0_V$. As $d$ is an injective list into the linearly independent set $B_W$, it is a linearly independent list, so every $\eta_i = 0_F$; in particular $\gamma_{(a+q)+k} = 0_F$ for every $k < r$, and $\varepsilon_i = 0_F$ for every $i < a$, whence $R = 0_V$ by (F1) and $P = -R = 0_V$. Finally $c'$ is an injective list into the linearly independent set $B_U$, hence linearly independent, so $P = 0_V$ forces $\gamma_i = 0_F$ for every $i < a+q$. Every coefficient of $\gamma$ therefore vanishes. [step 2.1, step 4.1, L6, L7, L9, L10]

5.2 $\operatorname{span}(C) = U + W$. From $B_U \subseteq C$ and $B_W \subseteq C$ and monotonicity, $U = \operatorname{span}(B_U) \subseteq \operatorname{span}(C)$ and $W = \operatorname{span}(B_W) \subseteq \operatorname{span}(C)$, so $U \cup W \subseteq \operatorname{span}(C)$ and hence $U + W = \operatorname{span}(U \cup W) \subseteq \operatorname{span}(C)$. Conversely $C = B_U \cup B_W \subseteq U \cup W \subseteq U + W$, and $U + W$ is a linear subspace, so $\operatorname{span}(C) \subseteq U + W$. [step 2.1, step 4.1, L9]

6.1 $C$ is a basis of $U + W$ with $(a+q)+r$ elements. By step 5.1 the list $c$ is linearly independent, hence injective with linearly independent image $C$ and $C \approx (a+q)+r$; by step 5.2 it spans $U + W$. So $U + W$ is finite-dimensional with $\dim_F(U+W) = (a+q)+r$. [step 4.1, step 5.1, step 5.2, L1, L6, L11]

7.1 The formula. By step 3.1, $a + q = u$ and $a + r = w$, so step 6.1 gives $\dim_F(U+W) = u + r$, and with $\dim_F(U \cap W) = a$ from step 1.1 we get $\dim_F(U+W) + \dim_F(U \cap W) = (u + r) + a = u + (r + a) = u + (a + r) = u + w = \dim_F U + \dim_F W$, using associativity and commutativity of addition on $\mathbb{N}$. [step 1.1, step 3.1, step 6.1, L11, discharge-construct] ∎

## Remarks

- **The crux is independence, not spanning.** That $A \cup A_U \cup A_W$ spans $U + W$ is immediate from monotonicity of the span; what has to be worked for is that it is independent, and the whole force of the hypothesis $U \cap W = \operatorname{span}(A)$ is spent there: a vanishing combination pushes the $A_W$-part into $U$, hence into $U \cap W$, hence into the span of $A$, after which independence of $B_W$ kills its coefficients.

- **The three blocks are pairwise disjoint, and that is proved rather than assumed.** $A$ meets neither $A_U$ nor $A_W$ by construction, and $A_U$ meets $A_W$ only if some vector of $B_W \setminus A$ lies in $U \cap W$, which would make $B_W$ dependent. Without disjointness the count $(a+q)+r$ would be wrong even though the set were still a basis.

- **The proof costs no choice principle, and the reason is that $U$ and $W$ are finite-dimensional.** The only existence step is 2.1, and the extension used there is claim 3 of [[thm-dimension-of-a-linear-subspace]]: among the linearly independent subsets of $U$ containing $A$ there is one of greatest size, because [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]] bounds their sizes and [[thm-well-ordering-principle]] then produces the largest, and a set of that size is already a basis by [[lem-adjoining-a-vector-outside-the-span]]. Nothing is selected from an infinite family, so [[thm-zorn]] is not needed. The corresponding statement for an arbitrary vector space, [[thm-every-independent-set-extends-to-a-basis]], does need the Axiom of Choice; this theorem does not use it, and [[cor-a-linear-subspace-has-a-complement]] is the item on this page that genuinely does.

- **Nothing here needs the ambient $V$ to be finite-dimensional**, only $U$ and $W$. The consequence for a finite family of summands is [[cor-dimension-of-a-direct-sum]], and the failure of the inclusion-exclusion analogue for three subspaces is recorded on the companion page.
