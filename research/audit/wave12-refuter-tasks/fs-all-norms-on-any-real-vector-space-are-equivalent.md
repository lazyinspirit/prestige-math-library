## Selection reasons

- critical risk (11): 27 declared dependencies; 27 cited facts; 10 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality
- top-20 manifest-edge consumer (27 outgoing relationships)

## Target item — `fs-all-norms-on-any-real-vector-space-are-equivalent`

Normalized current SHA-256: `39fb72fffd28a9800e41ac4048a158a78d41adf38aa6cf46232e94d09c888113`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: fs-all-norms-on-any-real-vector-space-are-equivalent
kind: false-statement
title: "FALSE: all norms on a real vector space are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-all-norms-on-rn-are-equivalent, def-norm-and-normed-space, def-equivalent-norms, def-function-space, def-vector-space, def-linear-subspace, lem-linear-subspace-criterion, def-linear-independence, def-linear-basis, def-dimension, cor-independent-set-is-no-larger-than-a-finite-spanning-set, lem-standard-basis-of-f-n, def-linear-combination-and-span, def-finite-sum, lem-finite-sum-laws, lem-finite-set-has-max, def-max-min, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-countable, def-equinumerous, lem-pigeonhole, lem-of-abs-value, def-abs-value, lem-of-triangle-inequality, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

**False claim:** any two norms on a real vector space are equivalent
([[def-norm-and-normed-space]], [[def-equivalent-norms]]).

What is true is the same statement for $\mathbb{R}^{n}$ with $n$ a natural
number, which is [[thm-all-norms-on-rn-are-equivalent]]. Dropping the hypothesis
that the space is one of the $\mathbb{R}^{n}$ makes the claim false, and the
witness below is built from published material only.

**The witness.** Let $\mathbb{R}^{\mathbb{N}}$ be the function space of all
functions $\mathbb{N} \to \mathbb{R}$ with pointwise operations
([[def-function-space]]), and let

$$V \;:=\; \bigl\{\, v \in \mathbb{R}^{\mathbb{N}} \;:\; \text{there is } K \in \mathbb{N} \text{ with } v_j = 0 \text{ for every } j \ge K \,\bigr\}$$

be the set of **finitely supported** sequences. On $V$ define

$$N_1(v) := \sum_{j<K}|v_j|, \qquad N_\infty(v) := \max\{\, |v_j| : j<K \,\},$$

for any $K \ge 1$ with $v_j = 0$ for $j \ge K$. Both are norms on $V$, both
values are independent of the admissible $K$ chosen, and **no real $C$ satisfies
$N_1 \le C\,N_\infty$ on $V$**.

## Facts & Assumptions

**Given:** The space $\mathbb{R}^{\mathbb{N}}$, the subset $V$, the functions $N_1$ and $N_\infty$ above, and, for $m \ge 1$, the vector $u^{(m)} \in V$ with $u^{(m)}_j = 1$ for $j<m$ and $u^{(m)}_j = 0$ for $j \ge m$. For $i \in \mathbb{N}$, $e_i \in \mathbb{R}^{\mathbb{N}}$ is the function with $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$.

[A1] The refuted claim: any two norms on a real vector space are equivalent.

[L1] $\mathbb{R}^{\mathbb{N}}$ is a vector space over $\mathbb{R}$ with pointwise operations, and a nonempty $W$ with $\lambda u + w \in W$ for all $\lambda$ and all $u,w \in W$ is a linear subspace, hence itself a vector space ([[def-function-space]], [[def-vector-space]], [[def-linear-subspace]], [[lem-linear-subspace-criterion]]).

[L2] Finite sums in a function space are pointwise, for an arbitrary index set: $\bigl(\sum_{l<q}y_l\bigr)(j) = \sum_{l<q}y_l(j)$ ([[lem-standard-basis-of-f-n]] clause 1, stated there for an arbitrary $X$; [[def-linear-combination-and-span]], [[def-finite-sum]]).

[L3] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, splitting, monotonicity, a sum of nonnegative terms is nonnegative, a vanishing sum of nonnegative terms has all terms $0$, and $\sum_{j<m}1 = \iota(m)$.

[L4] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, which belongs to it and bounds it above.

[L5] Absolute value ([[def-abs-value]], [[lem-of-abs-value]], [[lem-of-triangle-inequality]]): $|t| \ge 0$; $|t| = 0$ exactly when $t = 0$; $|st| = |s||t|$; $|s+t| \le |s|+|t|$.

[L6] The Archimedean property: for every real $x$ there is a natural $m \ge 1$ with $x < \iota(m)$ ([[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L7] Dimension: if $V$ has a spanning set with $q$ elements then every linearly independent subset of $V$ is finite with at most $q$ elements; a finite-dimensional space is one with a finite basis ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], [[def-dimension]], [[def-linear-basis]], [[def-linear-independence]], [[def-countable]], [[def-equinumerous]], [[lem-pigeonhole]]).

[L8] Norm equivalence: $M$ and $N$ are equivalent when $cM \le N \le CM$ for some reals $c,C>0$ ([[def-equivalent-norms]]); the norm axioms are (N1), (N2), (N3) ([[def-norm-and-normed-space]]); and induction ([[thm-induction-principle]]).

## Refutation

**Proof technique:** direct.

1.1 $V$ is a linear subspace of $\mathbb{R}^{\mathbb{N}}$, hence a real vector space: it contains $0$, and if $v_j = 0$ for $j \ge K$ and $w_j = 0$ for $j \ge K'$ then $(\lambda v + w)_j = 0$ for $j \ge \max\{K,K'\}$. [L1, L4]

1.2 The values $N_1(v)$ and $N_\infty(v)$ do not depend on the admissible $K$. If $K \le K'$ are both admissible, then splitting the sum gives $\sum_{j<K'}|v_j| = \sum_{j<K}|v_j| + \sum_{j=K}^{K'-1}|v_j|$, and the second part is a sum of zeros; and $\max\{|v_j| : j<K'\} = \max\{|v_j| : j<K\}$ because the extra entries are $0$ and the maximum over $j<K$ is $\ge |v_0| \ge 0$. [L3, L4, L5]

1.3 The hypothesis that fails is finite-dimensionality. For every $p \in \mathbb{N}$ the set $\{\, e_i : i<p \,\}$ is a subset of $V$ with $p$ elements, the map $i \mapsto e_i$ being injective because $e_i(i) = 1 \ne 0 = e_{i'}(i)$ for $i \ne i'$; and it is linearly independent, since for an injective list $l \mapsto e_{i_l}$ into it and scalars $\lambda$, evaluating $\sum_{l<q}\lambda_l e_{i_l} = 0$ at the point $i_{l_0}$ gives $\lambda_{l_0} = 0$, the list $l \mapsto \lambda_l e_{i_l}(i_{l_0})$ vanishing off the single index $l_0$. [L2, L3, L5]

2.1 $N_1$ is a norm on $V$. (N1): $N_1(v) = 0$ forces every $|v_j| = 0$ for $j<K$, hence $v = 0$; and $N_1(0) = 0$. (N2): $\lambda v$ is admissible with the same $K$ and $\sum_{j<K}|\lambda v_j| = |\lambda|\sum_{j<K}|v_j|$. (N3): with $K$ admissible for both $v$ and $w$, $\sum_{j<K}|v_j+w_j| \le \sum_{j<K}|v_j| + \sum_{j<K}|w_j|$ termwise. [step 1.2, L3, L5, L8]

2.2 $N_\infty$ is a norm on $V$. (N1): $N_\infty(v) = 0$ forces $|v_j| \le 0$ and $\ge 0$ for every $j<K$, hence $v = 0$. (N2): $\max\{|\lambda v_j|\} = |\lambda|\max\{|v_j|\}$, since $|\lambda||v_j| \le |\lambda|N_\infty(v)$ for every $j$ with equality at an index attaining the maximum. (N3): $|v_j+w_j| \le |v_j|+|w_j| \le N_\infty(v)+N_\infty(w)$ for every $j<K$, and the maximum on the left is one of those numbers. [step 1.2, L4, L5, L8]

2.3 For $m \ge 1$ the vector $u^{(m)}$ lies in $V$, and $K = m$ is admissible for it; so $N_1(u^{(m)}) = \sum_{j<m}1 = \iota(m)$ and $N_\infty(u^{(m)}) = \max\{1,\dots,1\} = 1$. [step 1.2, L3, L4, L5]

2.4 So $V$ has no finite basis: a basis $B$ with $q$ elements would span $V$, forcing every linearly independent subset to have at most $q$ elements, while step 1.3 produces one with $q+1$. Hence $V$ is infinite-dimensional, and [[thm-all-norms-on-rn-are-equivalent]], which is a statement about $\mathbb{R}^{n}$ for a natural $n$, does not apply to it. [step 1.3, L7]

3.1 Suppose $N_1$ and $N_\infty$ were equivalent, so that in particular $N_1(v) \le C\,N_\infty(v)$ for every $v \in V$ and some real $C > 0$. Then $\iota(m) \le C$ for every $m \ge 1$, by step 2.3. [step 2.3, L8]

4.1 That contradicts the Archimedean property, which supplies a natural $m \ge 1$ with $C < \iota(m)$. So $N_1$ and $N_\infty$ are **not** equivalent, and [A1] is false. [step 3.1, A1, L6]

5.1 The claim [A1] is therefore false, and the true statement in its neighbourhood is [[thm-all-norms-on-rn-are-equivalent]], whose proof spends compactness of the Euclidean unit sphere, a property step 2.4 shows $V$ has no analogue of. [step 4.1, step 2.4, A1] ∎

## Remarks

- **Nothing is claimed here about general infinite-dimensional normed spaces.** This library has not built that theory. What is exhibited is one real vector space carrying two inequivalent norms, which is all that is needed to refute the claim.

- **Where the proof of [[thm-all-norms-on-rn-are-equivalent]] breaks on $V$.** That proof takes the unit sphere of $\lVert\cdot\rVert_2$, which is closed and bounded, and concludes compactness from [[thm-heine-borel-rn]] — a theorem about $\mathbb{R}^{n}$ for a natural $n$, proved by bisecting finitely many coordinates. On $V$ there is no such theorem, and indeed [[fs-heine-borel-holds-in-every-normed-space]] refutes the corresponding claim on the same space.

- **The two norms are the honest analogues of $\lVert\cdot\rVert_1$ and $\lVert\cdot\rVert_\infty$**, and the ratio $N_1/N_\infty$ at $u^{(m)}$ is exactly $\iota(m)$, the same constant that appears in the comparison chain of [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] on $\mathbb{R}^{m}$. In finite dimensions that constant is a bound; on $V$ it grows without bound, and the Archimedean property is what turns that into a refutation.
````

## Wave 12 provenance row

```json
{
  "id": "fs-all-norms-on-any-real-vector-space-are-equivalent",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html",
    "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
  ],
  "rationale": "FALSE: all norms on a real vector space are equivalent: The literature gives the standard norm definitions and finite-dimensional equivalence, compactness, or coordinate results; the item specializes it to the library’s zero-based function model of R^n, named published metrics, and explicit n-boundary conventions, and sometimes bundles consequences or a refuting witness. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-function-space",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) and let $X$ be any set. Write $$F^{X} \\;:=\\; \\{\\, f \\;:\\; f \\text{ is a function } X \\to F \\,\\},$$ and for $f \\in F^{X}$ write $f(x)$ for its value at $x \\in X$. Two elements of $F^{X}$ are equal exactly when they agree at every point of $X$. Define $$(f + g)(x) \\;:=\\; f(x) + g(x), \\qquad (\\lambda f)(x) \\;:=\\; \\lambda\\, f(x), \\qquad 0_{F^{X}}(x) \\;:=\\; 0_F,$$ for $f, g \\in F^{X}$, $\\lambda \\in F$ and $x \\in X$, the operations on the right being those of $F$. These are the **pointwise** operations. **These rules really are the required data.** For $f, g \\in F^{X}$ the assignment $x \\mapsto f(x) + g(x)$ is a function $X \\to F$, so $+$ is a binary operation $F^{X} \\times F^{X} \\to F^{X}$ ([[def-binary-operation]]); for $\\lambda \\in F$ and $f \\in F^{X}$ the assignment $x \\mapsto \\lambda f(x)$ is a function $X \\to F$, so scalar multiplication is a map $F \\times F^{X} \\to F^{X}$; and $0_{F^{X}}$, the constant function at $0_F$, is an element of $F^{X}$. **$F^{X}$ is a vector space over $F$** ([[def-vector-space]]). Each axiom is an equation between elements of $F^{X}$, hence holds exactly when it holds at every $x \\in X$ after evaluation, and there it is the corresponding field axiom applied to the values $f(x), g(x), \\lambda, \\mu$: - associativity and commutativity of $+$, and $f + 0_{F^{X}} = f$, come from the same laws for $+$ in $F$; the additive inverse of $f$ is $x \\mapsto -f(x)$, which lies in $F^{X}$ and satisfies $f + (-f) = 0_{F^{X}}$ pointwise. This is axiom (V1); - $\\bigl(\\lambda(f+g)\\bigr)(x) = \\lambda(f(x)+g(x)) = \\lambda f(x) + \\lambda g(x)$ is (V2), by distributivity in $F$; - $\\bigl((\\lambda+\\mu)f\\bigr)(x) = (\\lambda+\\mu)f(x) = \\lambda f(x) + \\mu f(x)$ is (V3), by distributivity in $F$; - $\\bigl((\\lambda\\mu)f\\bigr)(x) = (\\lambda\\mu)f(x) = \\lambda(\\mu f(x))$ is (V4), by associativity of multiplication in $F$; - $(1_F f)(x) = 1_F f(x) = f(x)$ is (V5), by the multiplicative identity law in $F$. ### The case $X = n$ A natural number is a von Neumann natural ([[def-natural-numbers]]), that is a set, and $n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$ ([[lem-nat-order-is-membership]]). Taking $X = n$ therefore gives $$F^{n} \\;=\\; \\{\\, x \\;:\\; x \\text{ is a function } n \\to F \\,\\},$$ whose elements are written $x = (x_0, x_1, \\dots, x_{n-1})$ with $x_i := x(i)$ for $i < n$. **The coordinates are indexed from $0$**, because $0 \\in n$ whenever $n \\ne 0$ and $n \\notin n$ always. The operations read $$(x + y)_i = x_i + y_i, \\qquad (\\lambda x)_i = \\lambda x_i \\qquad (i < n),$$ and the zero of $F^{n}$ is the tuple all of whose coordinates are $0_F$. **The two boundary cases.** $\\mathbb{N}$ contains $0$, so $n = 0$ is a genuine case. Since $0 = \\varnothing$, the set $F^{0} = F^{\\varnothing}$ has exactly one element, the empty function; that element is $0_{F^{0}}$, so $F^{0}$ is the **zero space** $\\{0_{F^{0}}\\}$, not the empty set. For $n = 1$ we have $1 = \\{0\\}$, and the map $F^{1} \\to F$ sending $x$ to its single coordinate $x_0$ is a bijection satisfying $(x+y)_0 = x_0 + y_0$ and $(\\lambda x)_0 = \\lambda x_0$; we use it to read $F^{1}$ as $F$ where convenient. (No general notion of isomorphism of vector spaces is available on this page, and none is claimed here: what is asserted is exactly the displayed bijection and the two displayed equations.)",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-vector-space",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative identity $1_F$, and the field axioms as stated there. A **vector space over $F$**, also called an **$F$-vector space**, consists of - a set $V$, whose elements are called **vectors**; - a binary operation $+ : V \\times V \\to V$ on $V$ ([[def-binary-operation]]), the **vector addition**; - an element $0_V \\in V$, the **zero vector**; - a map $\\cdot \\,:\\, F \\times V \\to V$, the **scalar multiplication**, written $\\lambda v := \\cdot(\\lambda, v)$; subject to the following axioms, in which $u, v \\in V$ and $\\lambda, \\mu \\in F$ are arbitrary. - **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative and commutative, $0_V$ is a two-sided identity for $+$ ([[def-identity-element]]), and every $v \\in V$ has an additive inverse ([[def-invertible-element]]). - **(V2)** $\\lambda(u + v) = \\lambda u + \\lambda v$. - **(V3)** $(\\lambda + \\mu)v = \\lambda v + \\mu v$. - **(V4)** $(\\lambda\\mu)v = \\lambda(\\mu v)$. - **(V5)** $1_F v = v$. The elements of $F$ are called **scalars**. When several vector spaces are in play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive inverse of $v$ and $u - v := u + (-v)$. **The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some two-sided identity and some additive inverses exist. That there is at most one two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are proved before [[def-group]] and are inherited here with the group structure. So $0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them. **What (V1) buys, and why it is not restated.** Associativity, commutativity, the identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$, cancellation ([[lem-group-cancellation]]) and the inverse identities ([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from the group page wherever they are used and are never proved again for vectors.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-linear-subspace",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset $W \\subseteq V$ is a **linear subspace** of $V$ when - **(W1)** $0_V \\in W$; - **(W2)** $W$ is closed under the vector addition: $u, v \\in W$ implies $u + v \\in W$; - **(W3)** $W$ is closed under scalar multiplication: $\\lambda \\in F$ and $v \\in W$ imply $\\lambda v \\in W$. Every vector space $V$ has the two **trivial linear subspaces** $\\{0_V\\}$ and $V$ itself; a linear subspace $W$ with $W \\ne V$ is called **proper**. **The restricted operations are the required data, and $W$ is a vector space.** By (W2) the vector addition of $V$ restricts to a binary operation $W \\times W \\to W$, and by (W3) the scalar multiplication restricts to a map $F \\times W \\to W$. With these and the element $0_V$, the set $W$ is a vector space over $F$: - axioms (V2)–(V5) are equations required of elements of $W$, which are in particular elements of $V$, so they are inherited from $V$; likewise associativity and commutativity of the restricted addition; - $0_V$ lies in $W$ by (W1) and is a two-sided identity for the restricted addition, since it is one in $V$; - for $v \\in W$ the vector $(-1_F)v$ lies in $W$ by (W3), and $(-1_F)v = -v$ ([[lem-vector-space-elementary-consequences]]), so $-v \\in W$ and $v + (-v) = 0_V$ holds in $W$. So $(W,+,0_V)$ is an abelian group, which is axiom (V1), and $W$ is a vector space over $F$ **whose zero vector and whose additive inverses are those of $V$**. In the language of [[def-subgroup]], the three displayed conditions (S1) $0_V \\in W$, (S2) closure under addition and (S3) closure under additive inverses all hold, so $W$ is a subgroup of the abelian group $(V,+,0_V)$ ([[def-group]]); that reading, and its converse, are recorded as [[lem-linear-subspace-is-a-subgroup]] and are cited from there rather than re-argued below.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-linear-subspace-criterion",
      "source_section": "Statement",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let $W \\subseteq V$ be **nonempty**. Then $W$ is a linear subspace of $V$ ([[def-linear-subspace]]) **if and only if** $$\\lambda u + v \\in W \\qquad \\text{for all } \\lambda \\in F \\text{ and all } u, v \\in W .$$ Nonemptiness cannot be dropped: the empty set satisfies the displayed condition vacuously and is not a linear subspace, since it does not contain $0_V$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-standard-basis-of-f-n",
      "source_section": "Statement",
      "quote": "Let $F$ be a field ([[def-field]]), let $n \\in \\mathbb{N}$ and let $F^{n}$ be the function space on the von Neumann natural $n = \\{0, \\dots, n-1\\}$, with the pointwise operations ([[def-function-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector** $e_i \\in F^{n}$ by $$e_i(i) = 1_F, \\qquad e_i(j) = 0_F \\ \\text{ for } j < n \\text{ with } j \\ne i .$$ Then: 1. **Finite sums in a function space are pointwise.** For every set $X$, every $p \\in \\mathbb{N}$, every list $u : p \\to F^{X}$ and every $j \\in X$, $$\\Bigl(\\sum_{k<p} u_k\\Bigr)(j) \\;=\\; \\sum_{k<p} u_k(j),$$ the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary $X$ because the companion page needs it at $X = \\mathbb{N}$.) 2. $e : n \\to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in particular $e$ is injective and its image $e[n] = \\{\\, e_i : i < n \\,\\}$ is a basis of $F^{n}$ with $e[n] \\approx n$ ([[def-equinumerous]]); 3. for every $\\lambda : n \\to F$ and every $j < n$, $\\bigl(\\sum_{i<n}\\lambda_i e_i\\bigr)(j) = \\lambda_j$; equivalently the coordinate list of $x \\in F^{n}$ with respect to the ordered basis $e$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is $i \\mapsto x(i)$; 4. $F^{n}$ is finite-dimensional over $F$ with $\\dim_F F^{n} = n$ ([[def-dimension]]); 5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function, so $F^{0}$ is the zero space, the empty list is its ordered basis, $\\varnothing$ is its basis and $\\dim_F F^{0} = 0$. Every index runs from $0$, so the coordinates of an element of $F^{n}$ are $x_0, \\dots, x_{n-1}$ and no statement above is restricted to $n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-linear-combination-and-span",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). ### Finite sums of vectors By axiom (V1) the triple $(V, +, 0_V)$ is an abelian group ([[def-group]]), hence in particular a commutative monoid ([[def-semigroup-and-monoid]]). So the finite products of [[def-monoid-finite-product]] are available in it, and we write them **additively**: for $n \\in \\mathbb{N}$ and a finite list $u : n \\to V$, that is a function on the von Neumann natural $n = \\{0, \\dots, n-1\\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]), $$\\sum_{i<n} u_i \\;:=\\; \\prod_{i<n} u_i \\quad \\text{computed in } (V,+,0_V),$$ so that $\\sum_{i<0} u_i = 0_V$ and $\\sum_{i<\\sigma(n)} u_i = \\bigl(\\sum_{i<n} u_i\\bigr) + u_n$, and the value depends only on $u_0, \\dots, u_{n-1}$. ### Linear combinations A **linear combination in $V$** is a vector of the form $$\\sum_{i<n} \\lambda_i v_i$$ where $n \\in \\mathbb{N}$, $\\lambda : n \\to F$ is a finite list of scalars and $v : n \\to V$ is a finite list of vectors; the sum is the finite sum just described, of the list $i \\mapsto \\lambda_i v_i$. For $S \\subseteq V$, a vector $w \\in V$ is a **linear combination of elements of $S$** when there are $n \\in \\mathbb{N}$, $\\lambda : n \\to F$ and $v : n \\to S$ with $w = \\sum_{i<n} \\lambda_i v_i$. **The empty case is a real case.** $\\mathbb{N}$ contains $0$ ([[def-natural-numbers]]), and at $n = 0$ the sum is the empty sum, which is $0_V$. So $0_V$ is a linear combination of elements of every subset of $V$, including $S = \\varnothing$. The lists are indexed from $0$, so a linear combination of length $n$ is $\\lambda_0 v_0 + \\dots + \\lambda_{n-1}v_{n-1}$; no statement here is restricted to $n \\ge 1$. ### The span Let $S \\subseteq V$. The set of linear subspaces of $V$ containing $S$ is nonempty, since $V$ itself is one, so its intersection is a linear subspace of $V$ by [[lem-intersection-of-linear-subspaces]]. That intersection is the **span of $S$**, $$\\operatorname{span}(S) \\;:=\\; \\bigcap \\{\\, W \\;:\\; W \\text{ is a linear subspace of } V \\text{ and } S \\subseteq W \\,\\} .$$ It contains $S$, being an intersection of sets each of which contains $S$, and it is contained in every linear subspace of $V$ that contains $S$. So it is the **smallest** linear subspace of $V$ containing $S$, and those two properties determine it uniquely: if $W$ and $W'$ both contain $S$ and are each contained in every linear subspace containing $S$, then each is contained in the other. This is what licenses the definite article. A subset $S \\subseteq V$ **spans** $V$, or is a **spanning set** of $V$, when $\\operatorname{span}(S) = V$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), in particular an ordered field ([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set of natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$ ([[def-nat-addition]]). Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for $a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the upper index**, which is legitimate because of the recursion theorem ([[thm-recursion]]). That theorem produces a function of one variable, so the running index has to be carried along inside the value: applying it to the set $A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function $f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique $g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with $$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$ Write $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates. **The first coordinate is the index itself, and that is a small induction, not an observation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if $\\pi_1(g(n)) = n$, then $g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$, so $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every $n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed clauses be read off, and doing so gives $$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$ $\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those two properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies the two clauses defining $g$, hence equals $g$ by the uniqueness clause of [[thm-recursion]], so $\\Sigma' = \\Sigma$. We write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting element $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same induction on the first coordinate and the same uniqueness argument, gives the unique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with $$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$ and we write $\\prod_{k < n} a_k := \\Pi_n$. **Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate $$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$ and, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$ for the number of terms, $$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$ When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while the empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is notation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the empty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of $\\mathbb{N}$ and is only a way of writing \"no terms\". Only finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation $\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list $a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the list to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively $a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let $\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and finite products as in [[def-finite-sum]]. Then: 1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$. 2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]). 3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$. 4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$. 5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$. 6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.3"
      ]
    },
    {
      "fact": "L3",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), in particular an ordered field ([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set of natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$ ([[def-nat-addition]]). Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for $a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the upper index**, which is legitimate because of the recursion theorem ([[thm-recursion]]). That theorem produces a function of one variable, so the running index has to be carried along inside the value: applying it to the set $A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function $f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique $g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with $$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$ Write $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates. **The first coordinate is the index itself, and that is a small induction, not an observation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if $\\pi_1(g(n)) = n$, then $g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$, so $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every $n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed clauses be read off, and doing so gives $$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$ $\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those two properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies the two clauses defining $g$, hence equals $g$ by the uniqueness clause of [[thm-recursion]], so $\\Sigma' = \\Sigma$. We write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting element $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same induction on the first coordinate and the same uniqueness argument, gives the unique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with $$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$ and we write $\\prod_{k < n} a_k := \\Pi_n$. **Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate $$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$ and, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$ for the number of terms, $$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$ When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while the empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is notation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the empty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of $\\mathbb{N}$ and is only a way of writing \"no terms\". Only finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation $\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list $a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the list to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively $a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the set $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]). What is proved below is exactly the displayed statement, by induction on $n$. The usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a maximum and a minimum*, follows once one identifies the nonempty finite subsets of $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That identification is recorded as a stipulation in the Given below, because this page has no definition of finiteness to prove it against. **It is discharged, not merely assumed**: [[lem-finite-subsets-listable]] proves that the two descriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is recorded in `justified_by` rather than in `deps`, since it is about the sets this lemma quantifies over and therefore depends on this one. This is what licenses the notation $\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of **real** numbers from this page onwards.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$. - $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$ for every $s \\in S$. - $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$ for every $s \\in S$. A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then $m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so $m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]). The same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of $x \\in F$ is $$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-triangle-inequality",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$. Then $$|x + y| \\le |x| + |y|.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean: for every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$, where $n \\cdot 1_F$ is the canonical natural of the ordered field $F$ ([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and multiplicative identity $1_F$. Define $\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$ ([[def-natural-numbers]], [[thm-recursion]]): $$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$ $\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written $n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times. **Why the notation is needed at all.** A natural number in this library is a von Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an element of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when $n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and $x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field, and writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an informal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for $n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number $\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$ and $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$: - $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$; - the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$; - $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L7",
      "source": "cor-independent-set-is-no-larger-than-a-finite-spanning-set",
      "source_section": "Statement",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and suppose $V$ has a spanning subset $S$ ([[def-linear-combination-and-span]]) with $S \\approx n$ for some $n \\in \\mathbb{N}$ ([[def-equinumerous]]). Then: 1. every linearly independent subset $L \\subseteq V$ ([[def-linear-independence]]) is finite ([[def-countable]]), and the unique $m \\in \\mathbb{N}$ with $L \\approx m$ satisfies $m \\le n$; 2. no linearly independent subset of $V$ is equinumerous with $\\mathbb{N}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "def-dimension",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). $V$ is **finite-dimensional over $F$** when it has a **finite** basis ([[def-linear-basis]], [[def-countable]]): some basis $B$ of $V$ satisfies $B \\approx n$ for some $n \\in \\mathbb{N}$ ([[def-equinumerous]]). For such a $V$, the **dimension of $V$ over $F$**, written $\\dim_F V$, is that $n$: $$\\dim_F V \\;:=\\; \\text{the unique } n \\in \\mathbb{N} \\text{ such that } V \\text{ has a basis } B \\text{ with } B \\approx n .$$ **This is well defined.** Existence of such an $n$ is the hypothesis, together with the fact that a finite set is equinumerous with exactly one natural number ([[lem-pigeonhole]], claim 3). Uniqueness is [[thm-any-two-finite-bases-have-the-same-size]]: two bases of $V$ with $n$ and with $m$ elements force $n = m$. That theorem is therefore a **prerequisite** of this definition, not a later justification of it, and it is listed in `deps`. $V$ is **infinite-dimensional over $F$** when it is not finite-dimensional over $F$, that is, when $V$ has **no** finite basis. No number is attached to such a space here: the symbol $\\dim_F V$ is defined only in the finite-dimensional case, and the expression $\\dim_F V = \\infty$ is not used. **The zero space.** $\\varnothing$ is a basis of $\\{0_V\\}$ ([[def-linear-basis]]) and $\\varnothing \\approx 0$, so $\\{0_V\\}$ is finite-dimensional with $\\dim_F \\{0_V\\} = 0$. Conversely a space of dimension $0$ has a basis $B \\approx 0$, that is $B = \\varnothing$, and then $V = \\operatorname{span}(\\varnothing) = \\{0_V\\}$ ([[def-linear-combination-and-span]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "def-linear-basis",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset $B \\subseteq V$ is a **basis of $V$** when - **(B1)** $B$ is linearly independent ([[def-linear-independence]]), and - **(B2)** $B$ spans $V$, that is $\\operatorname{span}(B) = V$ ([[def-linear-combination-and-span]], which is where the words *spans* and *spanning set* are fixed; they are not redefined here). **The empty set is a basis of the zero space, and of nothing else.** $\\varnothing$ is linearly independent ([[def-linear-independence]]) and $\\operatorname{span}(\\varnothing) = \\{0_V\\}$ ([[lem-span-is-the-set-of-linear-combinations]]), so $\\varnothing$ is a basis of $V$ exactly when $V = \\{0_V\\}$. This is the case $n = 0$ from which every induction on this page starts, and it is a genuine case rather than a convention. ### Ordered bases An **ordered basis of $V$** is a finite list $v : n \\to V$, with $n \\in \\mathbb{N}$ and $n = \\{0, \\dots, n-1\\}$ the von Neumann natural ([[def-natural-numbers]], [[lem-nat-order-is-membership]]), such that $v$ is injective ([[def-injection-surjection-bijection]]) and its image $v[n]$ is a basis of $V$. By claim 6 of [[lem-independent-list-is-injective]], a list is linearly independent exactly when it is injective with linearly independent image, so an ordered basis is equally described as a **linearly independent list $v : n \\to V$ with $\\operatorname{span}(v[n]) = V$**: the injectivity does not have to be imposed separately. The empty list is the ordered basis of the zero space. An ordered basis is a list, so it carries an order; a basis is a set, so it does not. Reordering an ordered basis gives a different ordered basis with the same image, and the coordinates of [[thm-unique-coordinates-with-respect-to-an-ordered-basis]] are attached to the list, not to the set. ### Bases of a linear subspace Let $U$ be a linear subspace of $V$ ([[def-linear-subspace]]), which is itself a vector space over $F$, with the addition, the zero vector and the scalar multiplication of $V$ restricted to $U$. For $A \\subseteq U$ the two readings of \"$A$ is a basis\" — computed inside $U$, or computed inside $V$ — agree, so the phrase needs no disambiguation below. - **Independence agrees.** The finite sums $\\sum_{i<n}\\lambda_i a_i$ of a list $a : n \\to U$ are given by the same recursion in $U$ as in $V$ ([[def-monoid-finite-product]]), the base value $0_V$ and the operation $+$ being literally those of $V$ ([[def-linear-subspace]]). So a list into $U$ has the same sums whichever space it is read in, and the vanishing condition of [[def-linear-independence]] is the same condition in both. - **The span agrees.** A subset of $U$ is a linear subspace of $U$ exactly when it is a linear subspace of $V$, conditions (W1), (W2), (W3) being the same conditions in either reading. Now $\\operatorname{span}_V(A) \\subseteq U$, since $U$ is a linear subspace of $V$ containing $A$ and the span is contained in every such subspace; so $\\operatorname{span}_V(A)$ is a linear subspace of $U$ containing $A$, whence $\\operatorname{span}_U(A) \\subseteq \\operatorname{span}_V(A)$. Conversely $\\operatorname{span}_U(A)$ is a linear subspace of $V$ containing $A$, whence $\\operatorname{span}_V(A) \\subseteq \\operatorname{span}_U(A)$. The two are therefore equal, and we write $\\operatorname{span}(A)$ for both. Consequently $A \\subseteq U$ is a basis of the vector space $U$ if and only if $A$ is linearly independent as a subset of $V$ and $\\operatorname{span}(A) = U$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "def-linear-independence",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). As in [[def-linear-combination-and-span]], a **finite list** of vectors is a function $v : n \\to V$ on a von Neumann natural $n = \\{0, \\dots, n-1\\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]), written $v_i := v(i)$, and $$\\sum_{i<n} \\lambda_i v_i$$ is the finite sum of [[def-monoid-finite-product]] read additively in the abelian group $(V,+,0_V)$, applied to the list $i \\mapsto \\lambda_i v_i$. No second notion of finite sum is introduced here. ### Independence of a list A finite list $v : n \\to V$ is **linearly independent** when, for every list of scalars $\\lambda : n \\to F$, $$\\sum_{i<n} \\lambda_i v_i = 0_V \\quad \\Longrightarrow \\quad \\lambda_i = 0_F \\text{ for every } i < n,$$ and **linearly dependent** otherwise, that is, when some $\\lambda : n \\to F$ has $\\sum_{i<n}\\lambda_i v_i = 0_V$ while $\\lambda_j \\ne 0_F$ for at least one $j < n$. Such a $\\lambda$ is called a **witness** to the dependence of $v$. ### Independence of a subset A subset $S \\subseteq V$ is **linearly independent** when **every injective** finite list $v : n \\to S$ ([[def-injection-surjection-bijection]]) is linearly independent, and **linearly dependent** otherwise, that is, when some injective finite list into $S$ is linearly dependent. **The injectivity clause is not decoration.** A linear combination in [[def-linear-combination-and-span]] is indexed by an arbitrary list $v : n \\to S$, which is **not** required to be injective. If the definition above quantified over all such lists, then for any $w \\in S$ the list $v : 2 \\to S$ with $v_0 = v_1 = w$ and the scalars $\\lambda_0 = 1_F$, $\\lambda_1 = -1_F$ would give $$\\sum_{i<2}\\lambda_i v_i = (0_V + 1_F w) + (-1_F)w = w + (-w) = 0_V$$ with $\\lambda_0 = 1_F \\ne 0_F$ ([[def-field]], [[lem-vector-space-elementary-consequences]]), so **every** nonempty subset of $V$ would be dependent and the notion would be empty. Quantifying over injective lists is what makes the subset notion the intended one. It costs nothing for lists: [[lem-independent-list-is-injective]] shows that the vanishing condition above already forces a list to be injective, so no injectivity hypothesis has to be carried alongside independence of a list. ### The boundary cases are genuine cases $\\mathbb{N}$ contains $0$ ([[def-natural-numbers]]), so both of the following are instances of the definitions and neither is a convention. - **The empty list is independent.** For $n = 0$ the only list of scalars is the empty one, and the condition \"$\\lambda_i = 0_F$ for every $i < 0$\" holds vacuously. - **$\\varnothing \\subseteq V$ is independent.** The only function $v : n \\to \\varnothing$ is the empty one, with $n = 0$, and it is independent by the previous point. - **$\\{0_V\\}$ is dependent.** The list $v : 1 \\to \\{0_V\\}$ with $v_0 = 0_V$ is injective, and taking $\\lambda_0 = 1_F$ gives $\\sum_{i<1}\\lambda_i v_i = 0_V + 1_F 0_V = 0_V$ by the recursion of [[def-monoid-finite-product]] and $\\lambda 0_V = 0_V$ ([[lem-vector-space-elementary-consequences]]), while $1_F \\ne 0_F$ in a field ([[def-field]]). So $\\{0_V\\}$, and hence every subset of $V$ containing $0_V$, is linearly dependent.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "Recall that a natural number is a von Neumann natural ([[def-natural-numbers]]): $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$, so that $$n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$$ is itself the set of its predecessors. Here $<$ is the order of [[def-nat-order]], which is defined additively, so the displayed identity is a theorem and not a convention: it is [[lem-nat-order-is-membership]], proved immediately above. Let $A$ be a set, and let $\\approx$ be equinumerosity ([[def-equinumerous]]). - $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$. - $A$ is **countably infinite** if $A \\approx \\mathbb{N}$. - $A$ is **at most countable** if it is finite or countably infinite. - $A$ is **uncountable** if it is not at most countable.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "def-equinumerous",
      "source_section": "Definition",
      "quote": "Let $A$ and $B$ be sets ([[def-injection-surjection-bijection]] for the terminology). - $A$ and $B$ are **equinumerous**, written $A \\approx B$, if there exists a bijection $f : A \\to B$. - $A$ is **dominated by** $B$, written $A \\preceq B$, if there exists an injection $f : A \\to B$. - $A \\prec B$ abbreviates: $A \\preceq B$ and not $A \\approx B$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-pigeonhole",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{N}$ be the von Neumann naturals, with $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$ ([[def-natural-numbers]]), and let $<$ be the order of [[def-nat-order]], so that $m < n \\iff m \\in n$ and $n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\}$ ([[lem-nat-order-is-membership]]). Write $\\approx$ for equinumerosity ([[def-equinumerous]]). Then: 1. for every $n \\in \\mathbb{N}$ there is **no injection** $\\sigma(n) \\to n$; 2. if $m < n$ then there is no injection $n \\to m$; 3. if $n \\approx m$ with $n, m \\in \\mathbb{N}$, then $n = m$; 4. $\\mathbb{N} \\not\\approx n$ for every $n \\in \\mathbb{N}$; 5. no natural number is equinumerous with a proper subset of itself: if $A \\subseteq n$ and $n \\approx A$, then $A = n$. Claim 1 is the pigeonhole principle in its sharpest form, that $n + 1$ pigeons do not fit injectively into $n$ holes; the other four are the consequences the library actually quotes. Claim 3 says a finite set is equinumerous with exactly one natural number, so \"the number of elements\" is well defined. Claim 4 says $\\mathbb{N}$ is infinite. Claim 5 says no natural number is Dedekind-infinite. **Why this is proved here.** The next item on this page defines finiteness as equinumerosity with a natural number, and the three size classes it introduces are exhaustive by construction but mutually exclusive only because of claim 4. Several later items also need claim 3 or claim 5. The principle is elementary and belongs with the naturals, but it is about counting rather than about order, so it is proved here, immediately before finiteness is defined, from induction and the identification of the order with membership alone. Nothing below uses ordinals, cardinals, or any later material.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.4"
      ]
    },
    {
      "fact": "L8",
      "source": "def-equivalent-norms",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over $\\mathbb{R}$ ([[def-vector-space]]) and let $M$ and $N$ be norms on $V$ ([[def-norm-and-normed-space]]). $M$ and $N$ are **equivalent** when there are reals $c > 0$ and $C > 0$ with $$c\\,M(v) \\;\\le\\; N(v) \\;\\le\\; C\\,M(v) \\qquad \\text{for every } v \\in V .$$ The constants are not part of the data and are not unique: any smaller $c$ and any larger $C$ serve as well. ### This is an equivalence relation on the norms on $V$ - **Reflexive:** take $c = C = 1$. - **Symmetric:** from $cM \\le N \\le CM$ and $c, C > 0$ one gets $C^{-1}N \\le M \\le c^{-1}N$, dividing by the positive constants ([[lem-of-inverse-positive]]). - **Transitive:** if $cM \\le N \\le CM$ and $c'N \\le P \\le C'N$ then $c'c\\,M \\le P \\le C'C\\,M$, and $c'c > 0$, $C'C > 0$, a product of positives being positive. ### The dictionary with equivalent metrics Let $d_M(u,v) = M(u-v)$ and $d_N(u,v) = N(u-v)$ be the induced metrics ([[def-norm-and-normed-space]]). Substituting $v := u - w$ in the displayed condition gives $$c\\,d_M(u,w) \\;\\le\\; d_N(u,w) \\;\\le\\; C\\,d_M(u,w) \\qquad \\text{for all } u, w \\in V ,$$ which is **verbatim the Lipschitz equivalence** of $d_M$ and $d_N$ in the sense of [[def-equivalent-metrics]], with $\\alpha = c$ and $\\beta = C$. That is the **strongest** of the three tiers that item distinguishes: by [[thm-metric-equivalence-hierarchy]], Lipschitz equivalence implies uniform equivalence, which implies topological equivalence. So equivalent norms give - the same open sets, hence the same closed sets, closures and interiors ([[def-metric-topology]]); - the same uniformly continuous maps into and out of $V$ ([[def-metric-uniform-continuity]]); - the same convergent sequences with the same limits, and the same Cauchy sequences ([[def-metric-convergence]], [[def-cauchy-in-metric]]). The last line deserves its two-line verification, since it is used constantly below and is not literally a clause of [[thm-metric-equivalence-hierarchy]]. If $d_M(v_k, v) \\to 0$ then $0 \\le d_N(v_k,v) \\le C\\,d_M(v_k,v)$, so given a rational $\\varepsilon > 0$ an index beyond which $d_M(v_k,v) < \\varepsilon/C$ serves for $d_N$; the converse uses $d_M \\le c^{-1}d_N$ in the same way. The Cauchy statement is the same estimate applied to $d_N(v_k,v_l)$. In particular $(V, d_M)$ is complete if and only if $(V,d_N)$ is. **Naming.** Many texts say *strongly equivalent* for what [[def-equivalent-metrics]] calls Lipschitz equivalent, and simply *equivalent* for what it calls topologically equivalent. As there, this library always writes the qualifier for metrics. For **norms** there is no fork to guard against: the condition displayed above is the only one anyone calls equivalence of norms, and it is always the Lipschitz-strength one.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "$V$ is a linear subspace of $\\mathbb{R}^{\\mathbb{N}}$, hence a real vector space: it contains $0$, and if $v_j = 0$ for $j \\ge K$ and $w_j = 0$ for $j \\ge K'$ then $(\\lambda v + w)_j = 0$ for $j \\ge \\max\\{K,K'\\}$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L4"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The values $N_1(v)$ and $N_\\infty(v)$ do not depend on the admissible $K$. If $K \\le K'$ are both admissible, then splitting the sum gives $\\sum_{j<K'}|v_j| = \\sum_{j<K}|v_j| + \\sum_{j=K}^{K'-1}|v_j|$, and the second part is a sum of zeros; and $\\max\\{|v_j| : j<K'\\} = \\max\\{|v_j| : j<K\\}$ because the extra entries are $0$ and the maximum over $j<K$ is $\\ge |v_0| \\ge 0$.",
      "step": "1.2",
      "inputs": [
        "L3",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "The hypothesis that fails is finite-dimensionality. For every $p \\in \\mathbb{N}$ the set $\\{\\, e_i : i<p \\,\\}$ is a subset of $V$ with $p$ elements, the map $i \\mapsto e_i$ being injective because $e_i(i) = 1 \\ne 0 = e_{i'}(i)$ for $i \\ne i'$; and it is linearly independent, since for an injective list $l \\mapsto e_{i_l}$ into it and scalars $\\lambda$, evaluating $\\sum_{l<q}\\lambda_l e_{i_l} = 0$ at the point $i_{l_0}$ gives $\\lambda_{l_0} = 0$, the list $l \\mapsto \\lambda_l e_{i_l}(i_{l_0})$ vanishing off the single index $l_0$.",
      "step": "1.3",
      "inputs": [
        "L2",
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "$N_1$ is a norm on $V$. (N1): $N_1(v) = 0$ forces every $|v_j| = 0$ for $j<K$, hence $v = 0$; and $N_1(0) = 0$. (N2): $\\lambda v$ is admissible with the same $K$ and $\\sum_{j<K}|\\lambda v_j| = |\\lambda|\\sum_{j<K}|v_j|$. (N3): with $K$ admissible for both $v$ and $w$, $\\sum_{j<K}|v_j+w_j| \\le \\sum_{j<K}|v_j| + \\sum_{j<K}|w_j|$ termwise.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L3",
        "L5",
        "L8"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "$N_\\infty$ is a norm on $V$. (N1): $N_\\infty(v) = 0$ forces $|v_j| \\le 0$ and $\\ge 0$ for every $j<K$, hence $v = 0$. (N2): $\\max\\{|\\lambda v_j|\\} = |\\lambda|\\max\\{|v_j|\\}$, since $|\\lambda||v_j| \\le |\\lambda|N_\\infty(v)$ for every $j$ with equality at an index attaining the maximum. (N3): $|v_j+w_j| \\le |v_j|+|w_j| \\le N_\\infty(v)+N_\\infty(w)$ for every $j<K$, and the maximum on the left is one of those numbers.",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "L4",
        "L5",
        "L8"
      ]
    },
    {
      "id": "step-2.3",
      "claim": "For $m \\ge 1$ the vector $u^{(m)}$ lies in $V$, and $K = m$ is admissible for it; so $N_1(u^{(m)}) = \\sum_{j<m}1 = \\iota(m)$ and $N_\\infty(u^{(m)}) = \\max\\{1,\\dots,1\\} = 1$.",
      "step": "2.3",
      "inputs": [
        "step 1.2",
        "L3",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-2.4",
      "claim": "So $V$ has no finite basis: a basis $B$ with $q$ elements would span $V$, forcing every linearly independent subset to have at most $q$ elements, while step 1.3 produces one with $q+1$. Hence $V$ is infinite-dimensional, and [[thm-all-norms-on-rn-are-equivalent]], which is a statement about $\\mathbb{R}^{n}$ for a natural $n$, does not apply to it.",
      "step": "2.4",
      "inputs": [
        "step 1.3",
        "L7"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Suppose $N_1$ and $N_\\infty$ were equivalent, so that in particular $N_1(v) \\le C\\,N_\\infty(v)$ for every $v \\in V$ and some real $C > 0$. Then $\\iota(m) \\le C$ for every $m \\ge 1$, by step 2.3.",
      "step": "3.1",
      "inputs": [
        "step 2.3",
        "L8"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "That contradicts the Archimedean property, which supplies a natural $m \\ge 1$ with $C < \\iota(m)$. So $N_1$ and $N_\\infty$ are **not** equivalent, and [A1] is false.",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "A1",
        "L6"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "The claim [A1] is therefore false, and the true statement in its neighbourhood is [[thm-all-norms-on-rn-are-equivalent]], whose proof spends compactness of the Euclidean unit sphere, a property step 2.4 shows $V$ has no analogue of.",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "step 2.4",
        "A1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "fs-all-norms-on-any-real-vector-space-are-equivalent: the Statement introduces no possibly empty family requiring a witness; its sequence domains are N or its displayed witness has a fixed nonempty domain."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: $V$ is a linear subspace of $\\mathbb{R}^{\\mathbb{N}}$, hence a real vector space: it contains $0$, and if $v_j = 0$ for $j \\ge K$ and $w_j = 0$ for $j \\ge K'$ then $(\\lambda v + w)_j = 0$ for $j \\ge \\max\\{K,K'\\}$."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "fs-all-norms-on-any-real-vector-space-are-equivalent: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 2.2: $N_\\infty$ is a norm on $V$. (N1): $N_\\infty(v) = 0$ forces $|v_j| \\le 0$ and $\\ge 0$ for every $j<K$, hence $v = 0$. (N2): $\\max\\{|\\lambda v_j|\\} = |\\lambda|\\max\\{|v_j|\\}$, since $|\\lambda||v_j| \\le |\\lambda|N_\\infty(v)$ for every $j$ with equality at an index attaining the maxi"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "fs-all-norms-on-any-real-vector-space-are-equivalent: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "fs-all-norms-on-any-real-vector-space-are-equivalent: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "fs-all-norms-on-any-real-vector-space-are-equivalent: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "fs-all-norms-on-any-real-vector-space-are-equivalent: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the A2 contract. Alpha assigns the independent proof-refuter route at A5/A6."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-all-norms-on-rn-are-equivalent",
    "declared_target": "thm-all-norms-on-rn-are-equivalent",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-norm-and-normed-space",
    "declared_target": "def-norm-and-normed-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-equivalent-norms",
    "declared_target": "def-equivalent-norms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-function-space",
    "declared_target": "def-function-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-vector-space",
    "declared_target": "def-vector-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-linear-subspace",
    "declared_target": "def-linear-subspace",
    "target_statement_provenance": "literature-derived",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-linear-subspace-criterion",
    "declared_target": "lem-linear-subspace-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-linear-independence",
    "declared_target": "def-linear-independence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-linear-basis",
    "declared_target": "def-linear-basis",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-dimension",
    "declared_target": "def-dimension",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "cor-independent-set-is-no-larger-than-a-finite-spanning-set",
    "declared_target": "cor-independent-set-is-no-larger-than-a-finite-spanning-set",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-standard-basis-of-f-n",
    "declared_target": "lem-standard-basis-of-f-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-linear-combination-and-span",
    "declared_target": "def-linear-combination-and-span",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-countable",
    "declared_target": "def-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-equinumerous",
    "declared_target": "def-equinumerous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-pigeonhole",
    "declared_target": "lem-pigeonhole",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (30)

### `cor-independent-set-is-no-larger-than-a-finite-spanning-set`

````markdown
---
id: cor-independent-set-is-no-larger-than-a-finite-spanning-set
kind: corollary
title: "If $V$ has a spanning set with $n$ elements, then every linearly independent subset of $V$ is finite with at most $n$ elements; in particular $V$ has no linearly independent subset equinumerous with $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-steinitz-exchange, def-linear-independence, def-linear-combination-and-span, def-vector-space, def-field, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole, def-natural-numbers, def-nat-order]
justified_by: []
aliases: [cor-independent-bounded-by-spanning]
landmark: false
short: "independent sets are bounded by a finite spanning set"
proof_strategy: direct
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
    - title: "Steinitz exchange lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Steinitz_exchange_lemma"
    - title: "Dimension (vector space) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_(vector_space)"
    - title: "Western Washington University notes: Bases and the Steinitz exchange lemma"
      url: "https://faculty.curgus.wwu.edu/Courses/504_201710/Bases2013.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and suppose
$V$ has a spanning subset $S$ ([[def-linear-combination-and-span]]) with
$S \approx n$ for some $n \in \mathbb{N}$ ([[def-equinumerous]]). Then:

1. every linearly independent subset $L \subseteq V$
   ([[def-linear-independence]]) is finite ([[def-countable]]), and the unique
   $m \in \mathbb{N}$ with $L \approx m$ satisfies $m \le n$;
2. no linearly independent subset of $V$ is equinumerous with $\mathbb{N}$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a spanning subset $S \subseteq V$ with $S \approx n$, and a linearly independent subset $L \subseteq V$.

[L1] Steinitz exchange: under these hypotheses $L$ is finite and the unique $m$ with $L \approx m$ satisfies $m \le n$ ([[thm-steinitz-exchange]], claim 1).

[L2] A finite set is equinumerous with exactly one natural number, and $\mathbb{N} \not\approx p$ for every $p \in \mathbb{N}$ ([[lem-pigeonhole]], claims 3 and 4).

[L3] $\approx$ is symmetric and transitive, being carried by bijections; and a set is finite when it is equinumerous with some natural number ([[def-equinumerous]], [[def-injection-surjection-bijection]], [[def-countable]], [[def-natural-numbers]], [[def-nat-order]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is exactly claim 1 of the Steinitz exchange lemma, whose hypotheses are the ones assumed here: $S$ spans $V$ and is finite of size $n$, and $L$ is linearly independent. [L1]

1.2 Suppose some linearly independent $L \subseteq V$ satisfied $L \approx \mathbb{N}$. By claim 1 the set $L$ is finite, so $L \approx m$ for some $m \in \mathbb{N}$; by symmetry and transitivity of $\approx$ this gives $\mathbb{N} \approx m$, which is impossible. [L1, L2, L3]

2.1 Claim 1 is step 1.1 and claim 2 is step 1.2. [step 1.1, step 1.2] ∎

## Remarks

- **Claim 2 is the form in which later items say a space is infinite-dimensional.** Exhibiting a linearly independent subset equinumerous with $\mathbb{N}$ shows, by this corollary read backwards, that the space has no finite spanning set at all, hence no finite basis. That is exactly the route taken on the companion page by the explicit infinite basis for the eventually zero families and by the independent set of $F^{\mathbb{N}}$ that does not span it.

- **The bound is on the independent set, not on the spanning set.** A spanning set may be enlarged freely without ceasing to span, so no bound in the other direction holds; what is bounded is how many vectors can be independent, and the bound is the size of *any* finite spanning set.

- **Nothing here assumes $V$ has a basis.** The hypothesis is a finite spanning set, which need not be independent; that a spanning set contains a basis is [[cor-every-spanning-set-contains-a-basis]], proved later and by a different route.
````

### `def-abs-value`

````markdown
---
id: def-abs-value
kind: definition
title: "Absolute value in an ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: []
landmark: false
short: "|x|"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dartmouth College analysis notes: Absolute value"
      url: "https://math.dartmouth.edu/~m63w21/lecture-m63-02.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

## Remarks

- The distance between $x$ and $y$ is $|x - y|$.
- The basic algebraic properties ($|x| \ge 0$, $|x| = 0 \iff x = 0$,
  $|xy| = |x|\,|y|$, and the characterisation $|x| < c \iff -c < x < c$) are
  established in [[lem-of-abs-value]]; the triangle inequality is
  [[lem-of-triangle-inequality]].
````

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `def-countable`

````markdown
---
id: def-countable
kind: definition
title: "Finite, countably infinite, countable, uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-finite-set, def-countably-infinite, def-uncountable]
landmark: true
short: "finite, countable, uncountable"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 and §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
````

### `def-dimension`

````markdown
---
id: def-dimension
kind: definition
title: "Finite-dimensional vector space, and its dimension $\\dim_F V$; infinite-dimensional means having no finite basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-any-two-finite-bases-have-the-same-size, def-linear-basis, def-linear-independence, def-linear-combination-and-span, lem-restriction-of-scalars, def-subfield, def-vector-space, def-field, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole, def-natural-numbers]
justified_by: []
aliases: [def-finite-dimensional, def-infinite-dimensional]
landmark: true
short: "$\\dim_F V$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 00c5f9e7b8d68228285e9a2319a6cc98f3a1d6982c44b52bdc03f0f2b9feea4d
    item_sha256: b1e7ccec53efbe1df92ba5a9cdfdce9fd51f466194a4ae3295eb879d599f7114
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Dimension (vector space) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_(vector_space)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Interactive Linear Algebra: Dimension"
      url: "https://textbooks.math.gatech.edu/ila/dimension.html"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

$V$ is **finite-dimensional over $F$** when it has a **finite** basis
([[def-linear-basis]], [[def-countable]]): some basis $B$ of $V$ satisfies
$B \approx n$ for some $n \in \mathbb{N}$ ([[def-equinumerous]]).

For such a $V$, the **dimension of $V$ over $F$**, written $\dim_F V$, is that
$n$:

$$\dim_F V \;:=\; \text{the unique } n \in \mathbb{N} \text{ such that } V \text{ has a basis } B \text{ with } B \approx n .$$

**This is well defined.** Existence of such an $n$ is the hypothesis, together
with the fact that a finite set is equinumerous with exactly one natural number
([[lem-pigeonhole]], claim 3). Uniqueness is
[[thm-any-two-finite-bases-have-the-same-size]]: two bases of $V$ with $n$ and
with $m$ elements force $n = m$. That theorem is therefore a **prerequisite** of
this definition, not a later justification of it, and it is listed in `deps`.

$V$ is **infinite-dimensional over $F$** when it is not finite-dimensional over
$F$, that is, when $V$ has **no** finite basis. No number is attached to such a
space here: the symbol $\dim_F V$ is defined only in the finite-dimensional case,
and the expression $\dim_F V = \infty$ is not used.

**The zero space.** $\varnothing$ is a basis of $\{0_V\}$
([[def-linear-basis]]) and $\varnothing \approx 0$, so $\{0_V\}$ is
finite-dimensional with $\dim_F \{0_V\} = 0$. Conversely a space of dimension $0$
has a basis $B \approx 0$, that is $B = \varnothing$, and then
$V = \operatorname{span}(\varnothing) = \{0_V\}$
([[def-linear-combination-and-span]]).

## Remarks

- **The subscript $F$ is not ornamental.** By [[lem-restriction-of-scalars]] the
  same set with the same addition is a vector space over any subfield
  $K \subseteq F$ ([[def-subfield]]), and for a proper subfield the two
  structures can have different bases and different dimensions. The companion
  page's basis of $\mathbb{R}$ over
  $\mathbb{Q}$ is the extreme case: $\mathbb{R}$ is a vector
  space both over itself and over the embedded copy of $\mathbb{Q}$ inside it, and
  it is infinite-dimensional over the latter. So "the dimension of $V$" is
  incomplete language in exactly the
  way that "the vector space $V$" is, and both the space and the field are part of
  the statement of every result below.

- **Infinite-dimensional is defined as a negation, deliberately.** Assigning a
  size to an infinite basis would require knowing that any two infinite bases of a
  space are equinumerous, which
  [[thm-any-two-finite-bases-have-the-same-size]] does not prove and this page
  does not claim; the standard argument for it is cardinal arithmetic, developed
  much later in the library. The companion page therefore records a proper
  subspace with an equinumerous basis rather than any statement of
  the form $\dim U = \dim V$ for infinite-dimensional spaces.

- **Dimension counts a basis, not a spanning set and not an independent set.** A
  spanning set may be larger than $\dim_F V$ and an independent set smaller;
  [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]] is what bounds
  the second by the first, and
  [[lem-basis-iff-maximal-independent-iff-minimal-spanning]] is what says a basis
  is exactly where the two meet.
````

### `def-equinumerous`

````markdown
---
id: def-equinumerous
kind: definition
title: "Equinumerous sets, $A \\approx B$ and $A \\preceq B$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-injection-surjection-bijection]
justified_by: []
aliases: [def-equipollent, def-same-cardinality]
landmark: false
short: "$A\\approx B$, $A\\preceq B$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Equinumerosity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equinumerosity"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets ([[def-injection-surjection-bijection]] for the
terminology).

- $A$ and $B$ are **equinumerous**, written $A \approx B$, if there exists a
  bijection $f : A \to B$.
- $A$ is **dominated by** $B$, written $A \preceq B$, if there exists an
  injection $f : A \to B$.
- $A \prec B$ abbreviates: $A \preceq B$ and not $A \approx B$.

## Remarks

- **$\approx$ behaves like an equivalence relation.** It is reflexive
  ($\mathrm{id}_A$ is a bijection), symmetric (the inverse of a bijection is a
  bijection) and transitive (a composition of bijections is a bijection). The
  careful statement is that these three properties hold for all sets, and that
  $\approx$ restricted to any *set* of sets is an equivalence relation on that
  set. It is not a relation on "the set of all sets", which does not exist; the
  reflexivity, symmetry and transitivity statements are schemas about arbitrary
  sets, which is all any argument below uses.

- **$\preceq$ is reflexive and transitive**, for the same reasons, and
  $A \approx B$ implies both $A \preceq B$ and $B \preceq A$. The converse, that
  $A \preceq B$ and $B \preceq A$ together give $A \approx B$, is a theorem and
  not a triviality: it is [[thm-schroder-bernstein]], and it is proved without
  any use of choice.

- **Subsets.** $A \subseteq B$ implies $A \preceq B$, since the inclusion map is
  injective. The reverse fails badly for infinite sets: the successor map
  $\sigma$ is a bijection $\mathbb{N} \to \mathbb{N} \setminus \{0\}$, being
  injective and never zero ([[thm-omega-is-peano-system]]) and hitting every
  nonzero natural ([[lem-nat-nonzero-is-successor]]), so
  $\mathbb{N} \approx \mathbb{N} \setminus \{0\}$ and a proper subset can be
  equinumerous with the whole.

- $\approx$ is the library's substitute for "has the same number of elements",
  stated without introducing cardinal numbers. Everything on this page is phrased
  with $\approx$, $\preceq$ and $\prec$ alone, so no theory of cardinals is
  presupposed.
````

### `def-equivalent-norms`

````markdown
---
id: def-equivalent-norms
kind: definition
title: "Equivalent norms, and the dictionary with equivalent metrics"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-metrics, thm-metric-equivalence-hierarchy, def-metric-topology, def-metric-convergence, def-cauchy-in-metric, def-metric-uniform-continuity, lem-bounded-remetrisation, def-vector-space, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over $\mathbb{R}$ ([[def-vector-space]]) and let $M$
and $N$ be norms on $V$ ([[def-norm-and-normed-space]]). $M$ and $N$ are
**equivalent** when there are reals $c > 0$ and $C > 0$ with

$$c\,M(v) \;\le\; N(v) \;\le\; C\,M(v) \qquad \text{for every } v \in V .$$

The constants are not part of the data and are not unique: any smaller $c$ and
any larger $C$ serve as well.

### This is an equivalence relation on the norms on $V$

- **Reflexive:** take $c = C = 1$.
- **Symmetric:** from $cM \le N \le CM$ and $c, C > 0$ one gets
  $C^{-1}N \le M \le c^{-1}N$, dividing by the positive constants
  ([[lem-of-inverse-positive]]).
- **Transitive:** if $cM \le N \le CM$ and $c'N \le P \le C'N$ then
  $c'c\,M \le P \le C'C\,M$, and $c'c > 0$, $C'C > 0$, a product of positives
  being positive.

### The dictionary with equivalent metrics

Let $d_M(u,v) = M(u-v)$ and $d_N(u,v) = N(u-v)$ be the induced metrics
([[def-norm-and-normed-space]]). Substituting $v := u - w$ in the displayed
condition gives

$$c\,d_M(u,w) \;\le\; d_N(u,w) \;\le\; C\,d_M(u,w) \qquad \text{for all } u, w \in V ,$$

which is **verbatim the Lipschitz equivalence** of $d_M$ and $d_N$ in the sense
of [[def-equivalent-metrics]], with $\alpha = c$ and $\beta = C$. That is the
**strongest** of the three tiers that item distinguishes: by
[[thm-metric-equivalence-hierarchy]], Lipschitz equivalence implies uniform
equivalence, which implies topological equivalence. So equivalent norms give

- the same open sets, hence the same closed sets, closures and interiors
  ([[def-metric-topology]]);
- the same uniformly continuous maps into and out of $V$
  ([[def-metric-uniform-continuity]]);
- the same convergent sequences with the same limits, and the same Cauchy
  sequences ([[def-metric-convergence]], [[def-cauchy-in-metric]]).

The last line deserves its two-line verification, since it is used constantly
below and is not literally a clause of [[thm-metric-equivalence-hierarchy]]. If
$d_M(v_k, v) \to 0$ then $0 \le d_N(v_k,v) \le C\,d_M(v_k,v)$, so given a
rational $\varepsilon > 0$ an index beyond which $d_M(v_k,v) < \varepsilon/C$
serves for $d_N$; the converse uses $d_M \le c^{-1}d_N$ in the same way. The
Cauchy statement is the same estimate applied to $d_N(v_k,v_l)$. In particular
$(V, d_M)$ is complete if and only if $(V,d_N)$ is.

**Naming.** Many texts say *strongly equivalent* for what
[[def-equivalent-metrics]] calls Lipschitz equivalent, and simply *equivalent*
for what it calls topologically equivalent. As there, this library always writes
the qualifier for metrics. For **norms** there is no fork to guard against: the
condition displayed above is the only one anyone calls equivalence of norms, and
it is always the Lipschitz-strength one.

## Remarks

- **The converse of the dictionary fails.** A metric on $V$ that is equivalent to
  a norm metric need not itself come from a norm: [[lem-bounded-remetrisation]]
  turns any metric $d$ into $d' = \min\{d,1\}$, uniformly equivalent to $d$ and
  bounded, and a bounded metric on a nonzero vector space is not induced by any
  norm, since absolute homogeneity would make $d'(\lambda v, 0)$ unbounded in
  $\lambda$ ([[def-norm-and-normed-space]]). So "equivalent to a norm metric" is
  strictly weaker than "induced by an equivalent norm".

- **Equivalence is a statement about a fixed vector space.** Two norms on
  different spaces are never compared. On $\mathbb{R}^{n}$ with $n \ge 1$ the
  norms $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
  $\lVert\cdot\rVert_\infty$ of [[def-p-norms-on-rn]] are equivalent, with
  explicit constants proved in
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]; that every
  pair of norms on $\mathbb{R}^{n}$ is equivalent is
  [[thm-all-norms-on-rn-are-equivalent]]. Neither statement survives to spaces
  that are not finite-dimensional, and the companion page carries the witness.

- **Equivalence says nothing about the geometry.** Equivalent norms have the same
  convergent sequences and the same open sets; they may still have quite
  different unit balls, and one of them may come from an inner product while the
  other does not. [[lem-p-norms-are-norms-and-induce-the-published-metrics]]
  records the metric identifications and nothing more.
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-function-space`

````markdown
---
id: def-function-space
kind: definition
title: "The vector space $F^{X}$ of all functions $X \\to F$ with pointwise operations, and $F^{n}$ as the case $X = n = \\{0, 1, \\dots, n-1\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vector-space, def-field, def-binary-operation, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [def-coordinate-space, def-tuple-space]
landmark: true
short: "$F^{X}$, $F^{n}$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Function space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_space"
    - title: "Examples of vector spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Examples_of_vector_spaces"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) and let $X$ be any set. Write

$$F^{X} \;:=\; \{\, f \;:\; f \text{ is a function } X \to F \,\},$$

and for $f \in F^{X}$ write $f(x)$ for its value at $x \in X$. Two elements of
$F^{X}$ are equal exactly when they agree at every point of $X$. Define

$$(f + g)(x) \;:=\; f(x) + g(x), \qquad (\lambda f)(x) \;:=\; \lambda\, f(x), \qquad 0_{F^{X}}(x) \;:=\; 0_F,$$

for $f, g \in F^{X}$, $\lambda \in F$ and $x \in X$, the operations on the right
being those of $F$. These are the **pointwise** operations.

**These rules really are the required data.** For $f, g \in F^{X}$ the assignment
$x \mapsto f(x) + g(x)$ is a function $X \to F$, so $+$ is a binary operation
$F^{X} \times F^{X} \to F^{X}$ ([[def-binary-operation]]); for $\lambda \in F$ and
$f \in F^{X}$ the assignment $x \mapsto \lambda f(x)$ is a function $X \to F$, so
scalar multiplication is a map $F \times F^{X} \to F^{X}$; and $0_{F^{X}}$, the
constant function at $0_F$, is an element of $F^{X}$.

**$F^{X}$ is a vector space over $F$** ([[def-vector-space]]). Each axiom is an
equation between elements of $F^{X}$, hence holds exactly when it holds at every
$x \in X$ after evaluation, and there it is the corresponding field axiom applied
to the values $f(x), g(x), \lambda, \mu$:

- associativity and commutativity of $+$, and $f + 0_{F^{X}} = f$, come from the
  same laws for $+$ in $F$; the additive inverse of $f$ is $x \mapsto -f(x)$,
  which lies in $F^{X}$ and satisfies $f + (-f) = 0_{F^{X}}$ pointwise. This is
  axiom (V1);
- $\bigl(\lambda(f+g)\bigr)(x) = \lambda(f(x)+g(x)) = \lambda f(x) + \lambda g(x)$
  is (V2), by distributivity in $F$;
- $\bigl((\lambda+\mu)f\bigr)(x) = (\lambda+\mu)f(x) = \lambda f(x) + \mu f(x)$ is
  (V3), by distributivity in $F$;
- $\bigl((\lambda\mu)f\bigr)(x) = (\lambda\mu)f(x) = \lambda(\mu f(x))$ is (V4),
  by associativity of multiplication in $F$;
- $(1_F f)(x) = 1_F f(x) = f(x)$ is (V5), by the multiplicative identity law
  in $F$.

### The case $X = n$

A natural number is a von Neumann natural ([[def-natural-numbers]]), that is a
set, and $n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$
([[lem-nat-order-is-membership]]). Taking $X = n$ therefore gives

$$F^{n} \;=\; \{\, x \;:\; x \text{ is a function } n \to F \,\},$$

whose elements are written $x = (x_0, x_1, \dots, x_{n-1})$ with $x_i := x(i)$ for
$i < n$. **The coordinates are indexed from $0$**, because $0 \in n$ whenever
$n \ne 0$ and $n \notin n$ always. The operations read

$$(x + y)_i = x_i + y_i, \qquad (\lambda x)_i = \lambda x_i \qquad (i < n),$$

and the zero of $F^{n}$ is the tuple all of whose coordinates are $0_F$.

**The two boundary cases.** $\mathbb{N}$ contains $0$, so $n = 0$ is a genuine
case. Since $0 = \varnothing$, the set $F^{0} = F^{\varnothing}$ has exactly one
element, the empty function; that element is $0_{F^{0}}$, so $F^{0}$ is the
**zero space** $\{0_{F^{0}}\}$, not the empty set. For $n = 1$ we have
$1 = \{0\}$, and the map $F^{1} \to F$ sending $x$ to its single coordinate $x_0$
is a bijection satisfying $(x+y)_0 = x_0 + y_0$ and $(\lambda x)_0 = \lambda x_0$;
we use it to read $F^{1}$ as $F$ where convenient. (No general notion of
isomorphism of vector spaces is available on this page, and none is claimed here:
what is asserted is exactly the displayed bijection and the two displayed
equations.)

## Remarks

- **The same set $F^{X}$ also carries a ring structure, and the two must not be
  conflated.** For a ring $R$ and a set $X$, [[def-ring-of-functions]] equips the
  set $R^{X}$ of all functions $X \to R$ with pointwise addition and pointwise
  multiplication. Taking $R = F$, the underlying set is literally the same set
  $F^{X}$ as here, and **the addition is literally the same operation**,
  $(f+g)(x) = f(x) + g(x)$ in both. What differs is the second operation:

  | | second operation | type |
  |---|---|---|
  | ring of functions | $(fg)(x) = f(x)\,g(x)$ | $F^{X} \times F^{X} \to F^{X}$ |
  | vector space (here) | $(\lambda f)(x) = \lambda\, f(x)$ | $F \times F^{X} \to F^{X}$ |

  Neither is a special case of the other, since they do not even have the same
  domain: one multiplies two functions, the other multiplies a function by a
  scalar. They agree in the following sense, and this is the whole of the
  relation between them: for $\lambda \in F$ let $c_\lambda \in F^{X}$ be the
  constant function at $\lambda$; then $\lambda f$ and the ring product
  $c_\lambda f$ have the same value $\lambda f(x)$ at every $x$, so they are
  equal. Both structures are present on $F^{X}$ at once, and nothing on this page
  uses the ring product.

- **Why $F^{n}$ is defined this way rather than as "$n$-tuples".** An $n$-tuple is
  already a function on an index set, and taking that index set to be the natural
  number $n$ itself makes the coordinates, the finite sums of
  [[def-monoid-finite-product]] and the induction arguments below all run over the
  same object. The price is that every index starts at $0$, and that $F^{0}$ is a
  one-element space; both are recorded above so that no statement on this page or
  its companion is quietly restricted to $n \ge 1$.

- **$X$ is arbitrary.** Nothing above assumes $X$ finite, countable, or nonempty.
  The case $X = \mathbb{N}$ gives the space of all families of scalars indexed by
  $\mathbb{N}$, and the case $X = m \times n$ gives the matrices of
  [[def-matrix-space]].
````

### `def-linear-basis`

````markdown
---
id: def-linear-basis
kind: definition
title: "Basis of a vector space: a linearly independent spanning subset; and ordered basis: an injective finite list whose image is a basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-linear-independence, lem-independent-list-is-injective, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-linear-subspace, def-monoid-finite-product, def-vector-space, def-field, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
forward_refs: [def-topology-basis-subbasis]
aliases: [def-hamel-basis, def-ordered-basis]
landmark: true
short: "basis; ordered basis"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

A subset $B \subseteq V$ is a **basis of $V$** when

- **(B1)** $B$ is linearly independent ([[def-linear-independence]]), and
- **(B2)** $B$ spans $V$, that is $\operatorname{span}(B) = V$
  ([[def-linear-combination-and-span]], which is where the words *spans* and
  *spanning set* are fixed; they are not redefined here).

**The empty set is a basis of the zero space, and of nothing else.**
$\varnothing$ is linearly independent ([[def-linear-independence]]) and
$\operatorname{span}(\varnothing) = \{0_V\}$
([[lem-span-is-the-set-of-linear-combinations]]), so $\varnothing$ is a basis of
$V$ exactly when $V = \{0_V\}$. This is the case $n = 0$ from which every
induction on this page starts, and it is a genuine case rather than a convention.

### Ordered bases

An **ordered basis of $V$** is a finite list $v : n \to V$, with $n \in
\mathbb{N}$ and $n = \{0, \dots, n-1\}$ the von Neumann natural
([[def-natural-numbers]], [[lem-nat-order-is-membership]]), such that $v$ is
injective ([[def-injection-surjection-bijection]]) and its image $v[n]$ is a
basis of $V$.

By claim 6 of [[lem-independent-list-is-injective]], a list is linearly
independent exactly when it is injective with linearly independent image, so an
ordered basis is equally described as a **linearly independent list $v : n \to V$
with $\operatorname{span}(v[n]) = V$**: the injectivity does not have to be
imposed separately. The empty list is the ordered basis of the zero space.

An ordered basis is a list, so it carries an order; a basis is a set, so it does
not. Reordering an ordered basis gives a different ordered basis with the same
image, and the coordinates of
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]] are attached to the
list, not to the set.

### Bases of a linear subspace

Let $U$ be a linear subspace of $V$ ([[def-linear-subspace]]), which is itself a
vector space over $F$, with the addition, the zero vector and the scalar
multiplication of $V$ restricted to $U$. For $A \subseteq U$ the two readings of
"$A$ is a basis" — computed inside $U$, or computed inside $V$ — agree, so the
phrase needs no disambiguation below.

- **Independence agrees.** The finite sums $\sum_{i<n}\lambda_i a_i$ of a list
  $a : n \to U$ are given by the same recursion in $U$ as in $V$
  ([[def-monoid-finite-product]]), the base value $0_V$ and the operation $+$
  being literally those of $V$ ([[def-linear-subspace]]). So a list into $U$ has
  the same sums whichever space it is read in, and the vanishing condition of
  [[def-linear-independence]] is the same condition in both.
- **The span agrees.** A subset of $U$ is a linear subspace of $U$ exactly when it
  is a linear subspace of $V$, conditions (W1), (W2), (W3) being the same
  conditions in either reading. Now $\operatorname{span}_V(A) \subseteq U$, since
  $U$ is a linear subspace of $V$ containing $A$ and the span is contained in
  every such subspace; so $\operatorname{span}_V(A)$ is a linear subspace of $U$
  containing $A$, whence $\operatorname{span}_U(A) \subseteq \operatorname{span}_V(A)$.
  Conversely $\operatorname{span}_U(A)$ is a linear subspace of $V$ containing
  $A$, whence $\operatorname{span}_V(A) \subseteq \operatorname{span}_U(A)$. The
  two are therefore equal, and we write $\operatorname{span}(A)$ for both.

Consequently $A \subseteq U$ is a basis of the vector space $U$ if and only if
$A$ is linearly independent as a subset of $V$ and $\operatorname{span}(A) = U$.

## Remarks

- **The name is `def-linear-basis`, and the bare word is not used here.** The
  library already has a *basis* — a basis for a topology, defined in
  [[def-topology-basis-subbasis]] and namespaced there with the alias
  `def-basis-top`. The two notions share the word and nothing else: one is a
  family of open sets closed under a refinement condition, the other an
  independent spanning subset of a vector space. This page therefore follows the
  convention of [[def-linear-subspace]], where the same collision with the
  topological *subspace* was resolved the same way, and says *linear* in the id.
  In prose, where the ambient vector space is named, "basis" alone is used.

- **Nothing above asserts that a basis exists.** Existence for an arbitrary vector
  space is [[cor-every-vector-space-has-a-basis]], and it is proved from Zorn's
  lemma; existence for the concrete spaces $F^{n}$ is
  [[lem-standard-basis-of-f-n]] and needs no choice principle at all. The
  definition is stated first so that both statements have something to be about.

- **A basis need not be finite, and this definition does not assume it is.**
  Condition (B1) quantifies over finite lists drawn from $B$ and (B2) is an
  equality of sets, so both make sense for an arbitrary $B$. It is only
  [[def-dimension]] that restricts attention to spaces admitting a *finite* basis,
  and the companion page exhibits an explicit infinite basis, for the
  eventually zero families in $F^{\mathbb{N}}$.
````

### `def-linear-combination-and-span`

````markdown
---
id: def-linear-combination-and-span
kind: definition
title: "Linear combination of a finite list, and the span $\\operatorname{span}(S)$ as the smallest linear subspace containing $S$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vector-space, def-linear-subspace, lem-intersection-of-linear-subspaces, def-monoid-finite-product, def-semigroup-and-monoid, def-group, def-natural-numbers, lem-nat-order-is-membership, def-field]
justified_by: []
aliases: [def-span, def-linear-combination, def-spanning-set]
landmark: true
short: "linear combination; $\\operatorname{span}(S)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
    - title: "Linear combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_combination"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

### Finite sums of vectors

By axiom (V1) the triple $(V, +, 0_V)$ is an abelian group ([[def-group]]), hence
in particular a commutative monoid ([[def-semigroup-and-monoid]]). So the finite
products of [[def-monoid-finite-product]] are available in it, and we write them
**additively**: for $n \in \mathbb{N}$ and a finite list $u : n \to V$, that is a
function on the von Neumann natural $n = \{0, \dots, n-1\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]),

$$\sum_{i<n} u_i \;:=\; \prod_{i<n} u_i \quad \text{computed in } (V,+,0_V),$$

so that $\sum_{i<0} u_i = 0_V$ and $\sum_{i<\sigma(n)} u_i = \bigl(\sum_{i<n} u_i\bigr) + u_n$,
and the value depends only on $u_0, \dots, u_{n-1}$.

### Linear combinations

A **linear combination in $V$** is a vector of the form

$$\sum_{i<n} \lambda_i v_i$$

where $n \in \mathbb{N}$, $\lambda : n \to F$ is a finite list of scalars and
$v : n \to V$ is a finite list of vectors; the sum is the finite sum just
described, of the list $i \mapsto \lambda_i v_i$. For $S \subseteq V$, a vector
$w \in V$ is a **linear combination of elements of $S$** when there are
$n \in \mathbb{N}$, $\lambda : n \to F$ and $v : n \to S$ with
$w = \sum_{i<n} \lambda_i v_i$.

**The empty case is a real case.** $\mathbb{N}$ contains $0$
([[def-natural-numbers]]), and at $n = 0$ the sum is the empty sum, which is
$0_V$. So $0_V$ is a linear combination of elements of every subset of $V$,
including $S = \varnothing$. The lists are indexed from $0$, so a linear
combination of length $n$ is $\lambda_0 v_0 + \dots + \lambda_{n-1}v_{n-1}$; no
statement here is restricted to $n \ge 1$.

### The span

Let $S \subseteq V$. The set of linear subspaces of $V$ containing $S$ is
nonempty, since $V$ itself is one, so its intersection is a linear subspace of
$V$ by [[lem-intersection-of-linear-subspaces]]. That intersection is the **span
of $S$**,

$$\operatorname{span}(S) \;:=\; \bigcap \{\, W \;:\; W \text{ is a linear subspace of } V \text{ and } S \subseteq W \,\} .$$

It contains $S$, being an intersection of sets each of which contains $S$, and it
is contained in every linear subspace of $V$ that contains $S$. So it is the
**smallest** linear subspace of $V$ containing $S$, and those two properties
determine it uniquely: if $W$ and $W'$ both contain $S$ and are each contained in
every linear subspace containing $S$, then each is contained in the other. This
is what licenses the definite article.

A subset $S \subseteq V$ **spans** $V$, or is a **spanning set** of $V$, when
$\operatorname{span}(S) = V$.

## Remarks

- **The definition is the one already used for subgroups.**
  [[def-generated-subgroup]] defines $\langle S \rangle$ as the intersection of
  all subgroups containing $S$, licensed by
  [[lem-intersection-of-subgroups]]. Its Remarks also record a description from
  inside, as a set of products, proved there only for a single generator
  ([[lem-cyclic-subgroup-is-the-set-of-powers]]) with the general case deferred
  to a later page. The span is defined here in exactly that outside shape, and
  the identification from inside, that $\operatorname{span}(S)$ is precisely the
  set of linear combinations of elements of $S$, is proved in full as
  [[lem-span-is-the-set-of-linear-combinations]]. In particular
  $\operatorname{span}(\varnothing) = \{0_V\}$ is proved there, as a consequence
  of the definition, and is not stipulated here.

- **Why the finite sum is [[def-monoid-finite-product]] and not
  [[def-finite-sum]].** The latter is stated for sequences into the complete
  ordered field, so it cannot carry a sum of vectors in an arbitrary vector space
  over an arbitrary field. The monoid finite product is defined by recursion in
  any monoid, its empty value is the identity, and
  [[thm-generalised-associativity]] supplies the splitting, regrouping and
  reordering laws for it. Reading it additively in $(V,+,0_V)$ costs nothing and
  is the only sum of vectors this page uses.

- **A linear combination is a value, not an expression.** Two different lists may
  produce the same vector, and nothing above asserts otherwise. Repetitions are
  allowed in the list $v$, and so are coefficients equal to $0_F$; asking when a
  vector is a linear combination of a set in only one way is the question of
  linear independence, which belongs to a later page and is not raised here.
````

### `def-linear-independence`

````markdown
---
id: def-linear-independence
kind: definition
title: "Linear independence: a finite list $v : n \\to V$ is independent when $\\sum_{i<n} \\lambda_i v_i = 0_V$ forces every $\\lambda_i = 0_F$, and a subset $S \\subseteq V$ is independent when every injective finite list into $S$ is independent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-field, lem-vector-space-elementary-consequences, def-linear-combination-and-span, def-monoid-finite-product, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
aliases: [def-linearly-independent, def-linear-dependence]
landmark: true
short: "linearly independent list; independent subset"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear independence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_independence"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Interactive Linear Algebra: Linear Independence"
      url: "https://textbooks.math.gatech.edu/ila/linear-independence.html"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). As in
[[def-linear-combination-and-span]], a **finite list** of vectors is a function
$v : n \to V$ on a von Neumann natural $n = \{0, \dots, n-1\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]), written
$v_i := v(i)$, and

$$\sum_{i<n} \lambda_i v_i$$

is the finite sum of [[def-monoid-finite-product]] read additively in the abelian
group $(V,+,0_V)$, applied to the list $i \mapsto \lambda_i v_i$. No second notion
of finite sum is introduced here.

### Independence of a list

A finite list $v : n \to V$ is **linearly independent** when, for every list of
scalars $\lambda : n \to F$,

$$\sum_{i<n} \lambda_i v_i = 0_V \quad \Longrightarrow \quad \lambda_i = 0_F \text{ for every } i < n,$$

and **linearly dependent** otherwise, that is, when some $\lambda : n \to F$ has
$\sum_{i<n}\lambda_i v_i = 0_V$ while $\lambda_j \ne 0_F$ for at least one
$j < n$. Such a $\lambda$ is called a **witness** to the dependence of $v$.

### Independence of a subset

A subset $S \subseteq V$ is **linearly independent** when **every injective**
finite list $v : n \to S$ ([[def-injection-surjection-bijection]]) is linearly
independent, and **linearly dependent** otherwise, that is, when some injective
finite list into $S$ is linearly dependent.

**The injectivity clause is not decoration.** A linear combination in
[[def-linear-combination-and-span]] is indexed by an arbitrary list $v : n \to S$,
which is **not** required to be injective. If the definition above quantified
over all such lists, then for any $w \in S$ the list $v : 2 \to S$ with
$v_0 = v_1 = w$ and the scalars $\lambda_0 = 1_F$, $\lambda_1 = -1_F$ would give

$$\sum_{i<2}\lambda_i v_i = (0_V + 1_F w) + (-1_F)w = w + (-w) = 0_V$$

with $\lambda_0 = 1_F \ne 0_F$ ([[def-field]],
[[lem-vector-space-elementary-consequences]]), so **every** nonempty subset of
$V$ would be dependent and the notion would be empty. Quantifying over injective
lists is what makes the subset notion the intended one. It costs nothing for
lists: [[lem-independent-list-is-injective]] shows that the vanishing condition
above already forces a list to be injective, so no injectivity hypothesis has to
be carried alongside independence of a list.

### The boundary cases are genuine cases

$\mathbb{N}$ contains $0$ ([[def-natural-numbers]]), so both of the following are
instances of the definitions and neither is a convention.

- **The empty list is independent.** For $n = 0$ the only list of scalars is the
  empty one, and the condition "$\lambda_i = 0_F$ for every $i < 0$" holds
  vacuously.
- **$\varnothing \subseteq V$ is independent.** The only function $v : n \to
  \varnothing$ is the empty one, with $n = 0$, and it is independent by the
  previous point.
- **$\{0_V\}$ is dependent.** The list $v : 1 \to \{0_V\}$ with $v_0 = 0_V$ is
  injective, and taking $\lambda_0 = 1_F$ gives
  $\sum_{i<1}\lambda_i v_i = 0_V + 1_F 0_V = 0_V$ by the recursion of
  [[def-monoid-finite-product]] and $\lambda 0_V = 0_V$
  ([[lem-vector-space-elementary-consequences]]), while $1_F \ne 0_F$ in a field
  ([[def-field]]). So $\{0_V\}$, and hence every subset of $V$ containing $0_V$,
  is linearly dependent.

## Remarks

- **Independence is relative to the field, and to the ambient vector space.** The
  scalars range over $F$, so a set of vectors independent over a subfield
  $K \subseteq F$ may be dependent over $F$; [[lem-restriction-of-scalars]] is
  what makes both readings available on one set, and the companion page uses the
  distinction for $\mathbb{R}$ over $\mathbb{Q}$. The ambient space matters only
  through its addition, its zero and its scalar multiplication, all of which a
  linear subspace inherits from $V$ ([[def-linear-subspace]]); the resulting
  agreement is recorded in [[def-linear-basis]].

- **Dependence is a property of a list together with a witness, but of a subset
  outright.** A dependent list carries an explicit vanishing combination with a
  nonzero coefficient. For a subset, the witness is an injective list drawn from
  it; which list that is, is not part of the statement that the set is dependent.
  [[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]] converts the
  existential into a statement with no lists in it at all.

- **Why the two notions are both kept.** Lists carry order, and an ordered list is
  what a coordinate system is
  ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]); subsets carry no
  order, and it is subsets that the Zorn argument of
  [[thm-every-independent-set-extends-to-a-basis]] runs over. Keeping both, and
  proving that they agree, is cheaper than translating at every use.
````

### `def-linear-subspace`

````markdown
---
id: def-linear-subspace
kind: definition
title: "Linear subspace of a vector space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vector-space, def-subgroup, def-group, lem-vector-space-elementary-consequences]
justified_by: []
aliases: [def-linear-subspace-of-a-vector-space]
landmark: true
short: "linear subspace $W \\le V$"
verification:
  precheck: n/a
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

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset
$W \subseteq V$ is a **linear subspace** of $V$ when

- **(W1)** $0_V \in W$;
- **(W2)** $W$ is closed under the vector addition: $u, v \in W$ implies
  $u + v \in W$;
- **(W3)** $W$ is closed under scalar multiplication: $\lambda \in F$ and
  $v \in W$ imply $\lambda v \in W$.

Every vector space $V$ has the two **trivial linear subspaces** $\{0_V\}$ and $V$
itself; a linear subspace $W$ with $W \ne V$ is called **proper**.

**The restricted operations are the required data, and $W$ is a vector space.**
By (W2) the vector addition of $V$ restricts to a binary operation
$W \times W \to W$, and by (W3) the scalar multiplication restricts to a map
$F \times W \to W$. With these and the element $0_V$, the set $W$ is a vector
space over $F$:

- axioms (V2)–(V5) are equations required of elements of $W$, which are in
  particular elements of $V$, so they are inherited from $V$; likewise
  associativity and commutativity of the restricted addition;
- $0_V$ lies in $W$ by (W1) and is a two-sided identity for the restricted
  addition, since it is one in $V$;
- for $v \in W$ the vector $(-1_F)v$ lies in $W$ by (W3), and
  $(-1_F)v = -v$ ([[lem-vector-space-elementary-consequences]]), so $-v \in W$
  and $v + (-v) = 0_V$ holds in $W$.

So $(W,+,0_V)$ is an abelian group, which is axiom (V1), and $W$ is a vector
space over $F$ **whose zero vector and whose additive inverses are those of
$V$**. In the language of [[def-subgroup]], the three displayed conditions
(S1) $0_V \in W$, (S2) closure under addition and (S3) closure under additive
inverses all hold, so $W$ is a subgroup of the abelian group $(V,+,0_V)$
([[def-group]]); that reading, and its converse, are recorded as
[[lem-linear-subspace-is-a-subgroup]] and are cited from there rather than
re-argued below.

## Remarks

- **"Linear subspace", never bare "subspace", in this library.** The word
  *subspace* is already in use here for the topological notion, a subset of a
  topological space carrying the induced topology, which is an unrelated idea.
  The names on this page therefore all say *linear*: `def-linear-subspace`,
  `lem-linear-subspace-criterion`, `lem-intersection-of-linear-subspaces`,
  `lem-linear-subspace-is-a-subgroup`, `def-sum-of-linear-subspaces`. Where the
  ambient vector space is fixed and no confusion is possible, the surrounding
  prose still writes the full phrase.

- **Closure under negatives is not a fourth condition.** It follows from (W3),
  because the additive inverse of a vector is the scalar multiple $(-1_F)v$. This
  is why the definition asks for three conditions where the definition of a
  subgroup asks for three of its own, and why the one-step test
  ([[lem-linear-subspace-criterion]]) can compress them into one.

- **(W1) cannot be replaced by "$W \ne \varnothing$" while dropping the others.**
  It can be replaced by nonemptiness *given* (W3), since a nonempty $W$ closed
  under scalar multiplication contains $0_F v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) for any of its elements $v$.
  Stated with (W1) the definition is checkable one condition at a time, and the
  economical single test is [[lem-linear-subspace-criterion]].

- **The field matters.** A subset of $V$ may be closed under the scalars of a
  subfield $K \subseteq F$ without being closed under all of $F$, so "linear
  subspace" always means "linear subspace over the field named". Restriction of
  scalars ([[lem-restriction-of-scalars]]) is what makes that distinction
  possible.
````

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
````

### `def-norm-and-normed-space`

````markdown
---
id: def-norm-and-normed-space
kind: definition
title: "A norm on a real vector space, the induced metric, and the dictionary with the metric axioms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-function-space, def-linear-map, def-metric-space, lem-metric-nonnegativity, def-metric-topology, lem-bounded-remetrisation, rem-metric-axiom-conventions, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-complete-ordered-field, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Normed vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normed_vector_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) constructed in this library, in particular a
field, so that "vector space" below always means vector space over $\mathbb{R}$
([[def-vector-space]]).

Let $V$ be a vector space over $\mathbb{R}$, with zero vector $0_V$. A **norm on
$V$** is a function $N : V \to \mathbb{R}$ such that for all $u, v \in V$ and all
$\lambda \in \mathbb{R}$:

- **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$.
- **(N2) Absolute homogeneity.** $N(\lambda v) = |\lambda|\,N(v)$, the absolute
  value being that of [[def-abs-value]].
- **(N3) Triangle inequality.** $N(u + v) \le N(u) + N(v)$.

A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over
$\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write
$\lVert v\rVert$ for $N(v)$; when several are, the norm is always named.

**The values of a norm are real numbers.** The codomain is $\mathbb{R}$, so
$N(v)$ is an honest element of the complete ordered field and no infinite value
is permitted. This is the same convention [[rem-metric-axiom-conventions]]
records for metrics.

### Nonnegativity is a theorem, not an axiom

Many texts add a fourth condition $N(v) \ge 0$. It is redundant. Applying (N2)
with $\lambda = -1$ gives $N(-v) = |-1|\,N(v) = N(v)$ ([[lem-of-abs-value]],
[[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3)
with $u = v$ and $-v$ gives

$$0 \;=\; N(0_V) \;=\; N\bigl(v + (-v)\bigr) \;\le\; N(v) + N(-v) \;=\; N(v) + N(v),$$

where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \ge 0$, and if $N(v) < 0$ then
$N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids
([[def-complete-ordered-field]]). Hence $N(v) \ge 0$ for every $v \in V$.

**Consequently the verification of a candidate norm has three things to check and
not four**, exactly as the verification of a candidate metric has three and not
four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this
library assumes nonnegativity of a norm before the argument above.

### The induced metric

Let $N$ be a norm on $V$ and define

$$d_N(u,v) \;:=\; N(u - v) \qquad (u, v \in V),$$

where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on
$V$** ([[def-metric-space]]), and the three axioms are the three conditions
above, in order:

- **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$,
  that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$.
- **(M2)** $d_N(v,u) = N(v-u) = N\bigl((-1)(u-v)\bigr) = |-1|\,N(u-v) = d_N(u,v)$,
  by (N2), [[lem-of-abs-value]] and $(-1)w = -w$
  ([[lem-vector-space-elementary-consequences]]).
- **(M3)** $d_N(u,w) = N\bigl((u-v) + (v-w)\bigr) \le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$,
  by (N3).

A normed space is therefore a metric space, and every notion defined for metric
spaces — open set ([[def-metric-topology]]), convergence, Cauchyness,
continuity, compactness — is available in it with no further definition. **This
library never introduces a second notion of any of them for normed spaces.**

### Two properties an arbitrary metric need not have

The metric $d_N$ satisfies, for all $u, v, w \in V$ and $\lambda \in \mathbb{R}$:

- **translation invariance**, $d_N(u + w, v + w) = N\bigl((u+w)-(v+w)\bigr) = N(u-v) = d_N(u,v)$;
- **absolute homogeneity**, $d_N(\lambda u, \lambda v) = N\bigl(\lambda(u-v)\bigr) = |\lambda|\,d_N(u,v)$, by (N2).

**Not every metric on a vector space arises from a norm**, and homogeneity is
what fails. The published bounded remetrisation [[lem-bounded-remetrisation]]
replaces a metric $d$ by $d' = \min\{d, 1\}$, a metric with the same topology
whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with
$d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute
homogeneity would force $d'(\lambda v, 0_V) = |\lambda|\,d'(v, 0_V)$, which is
unbounded in $\lambda$, while $d'$ is bounded by $1$. So the passage from norms
to metrics is not reversible, and a statement about a metric on a vector space is
strictly weaker than the corresponding statement about a norm.

## Remarks

- **Why (N1) is stated as an equivalence.** The direction $N(0_V) = 0$ is forced
  by (N2) with $\lambda = 0$, since $0\,v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) gives $N(0_V) = |0|\,N(v) = 0$.
  Only the direction "$N(v) = 0$ implies $v = 0_V$" is a genuine assumption, and
  dropping it gives what is usually called a seminorm, a notion this library does
  not use. The situation is exactly the one [[rem-metric-axiom-conventions]]
  describes for (M1) and the pseudometric.

- **The zero space carries exactly one norm.** If $V = \{0_V\}$ then the only
  function $V \to \mathbb{R}$ satisfying (N1) is the one with value $0$, and it
  satisfies (N2) and (N3) trivially. In particular $\mathbb{R}^{0}$, the function
  space on the empty index set ([[def-function-space]]), is a normed space,
  although the metrics of the published metric theory on $\mathbb{R}^n$ are
  defined only for $n \ge 1$.

- **What is not defined here.** This item does not define linear maps; their
  published definition is [[def-linear-map]]. It also does not define operator
  norms, dual spaces, or abstract inner product spaces.
  [[rem-rn-conventions-and-scope]] records the remaining scope boundaries and
  what each later development would license.
````

### `def-vector-space`

````markdown
---
id: def-vector-space
kind: definition
title: "Vector space over a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-group, def-binary-operation, def-identity-element, def-invertible-element, lem-identity-unique, lem-inverse-unique]
justified_by: []
aliases: [def-vector, def-scalar-multiplication]
landmark: true
short: "vector space over $F$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative
identity $1_F$, and the field axioms as stated there. A **vector space over $F$**,
also called an **$F$-vector space**, consists of

- a set $V$, whose elements are called **vectors**;
- a binary operation $+ : V \times V \to V$ on $V$ ([[def-binary-operation]]),
  the **vector addition**;
- an element $0_V \in V$, the **zero vector**;
- a map $\cdot \,:\, F \times V \to V$, the **scalar multiplication**, written
  $\lambda v := \cdot(\lambda, v)$;

subject to the following axioms, in which $u, v \in V$ and $\lambda, \mu \in F$
are arbitrary.

- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative
  and commutative, $0_V$ is a two-sided identity for $+$
  ([[def-identity-element]]), and every $v \in V$ has an additive inverse
  ([[def-invertible-element]]).
- **(V2)** $\lambda(u + v) = \lambda u + \lambda v$.
- **(V3)** $(\lambda + \mu)v = \lambda v + \mu v$.
- **(V4)** $(\lambda\mu)v = \lambda(\mu v)$.
- **(V5)** $1_F v = v$.

The elements of $F$ are called **scalars**. When several vector spaces are in
play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive
inverse of $v$ and $u - v := u + (-v)$.

**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some
two-sided identity and some additive inverses exist. That there is at most one
two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible
element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are
proved before [[def-group]] and are inherited here with the group structure. So
$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.

**What (V1) buys, and why it is not restated.** Associativity, commutativity, the
identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,
cancellation ([[lem-group-cancellation]]) and the inverse identities
([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from
the group page wherever they are used and are never proved again for vectors.

## Remarks

- **Scalar multiplication is not a binary operation on a set.** It is a map
  $F \times V \to V$ with arguments from two different sets, so
  [[def-binary-operation]], which is about a map $S \times S \to S$, does not
  apply to it and is never cited for it. The definition above cites that item for
  the vector addition only. In particular "closed under scalar multiplication"
  below always means $\lambda v \in W$ for $\lambda \in F$ and $v \in W$, which is
  not an instance of the closure condition defined there.

- **(V5) is an axiom, not a consequence of (V2)–(V4).** Take any abelian group
  $(V,+,0_V)$ and define $\lambda v := 0_V$ for every $\lambda$ and $v$. Then
  (V2), (V3) and (V4) all hold, both sides of each being $0_V$, while (V5) fails
  as soon as $V \ne \{0_V\}$. So (V5) has to be imposed, and it is what ties the
  scalar action to the identity of $F$.

- **Two structures, one set.** A vector space is data: the set $V$, the addition,
  the zero, and the scalar multiplication, over a fixed field $F$. The same set
  may carry vector-space structures over different fields, and the field is part
  of the statement of every result below. [[lem-restriction-of-scalars]] is the
  first place where that matters.

- **The field is the published one.** No field axiom is restated here; $F$ is a
  field in the sense of [[def-field]], whose axiom (A) already says that $(F,+)$
  is an abelian group and whose axiom (M) says the same of
  $(F \setminus \{0_F\}, \cdot)$. In particular every field is a vector space over
  itself, which is [[lem-restriction-of-scalars]].
````

### `fs-heine-borel-holds-in-every-normed-space`

````markdown
---
id: fs-heine-borel-holds-in-every-normed-space
kind: false-statement
title: "FALSE: in every normed space a closed bounded set is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-heine-borel-rn, def-norm-and-normed-space, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, fs-all-norms-on-any-real-vector-space-are-equivalent, fs-closed-and-bounded-implies-compact-in-every-metric-space, def-function-space, def-vector-space, def-linear-subspace, lem-linear-subspace-criterion, def-metric-space, def-metric-topology, def-metric-ball, def-metric-bounded-diameter, def-metric-compactness, def-metric-compactness-variants, thm-compact-implies-the-other-compactness-forms, thm-metric-compactness-equivalences, thm-compact-implies-complete-and-totally-bounded, def-totally-bounded, def-cauchy-in-metric, def-metric-convergence, lem-metric-convergent-implies-cauchy, lem-standard-basis-of-f-n, lem-finite-set-has-max, def-max-min, lem-pigeonhole, def-countable, lem-of-abs-value, def-abs-value, lem-index-map-grows, def-sequence, def-injection-surjection-bijection, def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Riesz's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riesz%27s_lemma"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

**False claim:** in every normed space $(W,N)$ ([[def-norm-and-normed-space]]) a
subset that is closed in the induced metric ([[def-metric-topology]]) and bounded
([[def-metric-bounded-diameter]]) is compact ([[def-metric-compactness]]).

What is true is the same statement for $\mathbb{R}^{n}$ with the Euclidean norm
and $n$ a natural number, which is [[thm-heine-borel-rn]] clause 2. The published
[[fs-closed-and-bounded-implies-compact-in-every-metric-space]] already refutes
the corresponding claim for arbitrary **metric** spaces; the point of the present
item is that adding a **linear** structure and a norm does not repair it, which a
reader who has just met [[thm-all-norms-on-rn-are-equivalent]] may well expect it
to.

**The witness** is the space $V$ of finitely supported real sequences with the
norm $N_\infty$, both as in
[[fs-all-norms-on-any-real-vector-space-are-equivalent]], and the closed unit
ball

$$K \;:=\; \{\, v \in V : N_\infty(v) \le 1 \,\} .$$

$K$ is closed in $(V, d_{N_\infty})$ and bounded, and it is not compact: the
vectors $e_k$ all lie in it and satisfy $N_\infty(e_j - e_k) = 1$ for $j \ne k$.

## Facts & Assumptions

**Given:** The vector space $V$ of finitely supported sequences and the norm $N_\infty$ on it, with induced metric $d(v,w) := N_\infty(v-w)$; the set $K$ above; and the vectors $e_k \in V$ with $e_k(k) = 1$ and $e_k(j) = 0$ for $j \ne k$.

[A1] The refuted claim, at $(V,N_\infty)$ and $K$: $K$ is compact.

[L1] $V$ is a real vector space and $N_\infty$ is a norm on it, with $N_\infty(v) = \max\{|v_j| : j<K\}$ for any admissible $K \ge 1$ ([[fs-all-norms-on-any-real-vector-space-are-equivalent]], [[def-function-space]], [[def-vector-space]], [[def-linear-subspace]], [[lem-linear-subspace-criterion]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-norm-and-normed-space]]).

[L2] A norm induces a metric $d(v,w) = N(v-w)$, and $|N(v)-N(w)| \le N(v-w)$ ([[def-norm-and-normed-space]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 1, which is stated for a norm on an arbitrary real vector space; [[def-metric-space]]).

[L3] Open and closed sets, balls, and boundedness ([[def-metric-topology]], [[def-metric-ball]], [[def-metric-bounded-diameter]]).

[L4] In ZF a compact metric space is sequentially compact ([[thm-compact-implies-the-other-compactness-forms]], [[def-metric-compactness-variants]]), and a compact subset is one whose metric subspace is compact ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]); the five-way equivalence [[thm-metric-compactness-equivalences]] is not needed and is not used.

[L5] Every convergent sequence in a metric space is Cauchy ([[lem-metric-convergent-implies-cauchy]], [[def-cauchy-in-metric]], [[def-metric-convergence]], [[def-sequence]]); a subsequence is indexed by a strictly increasing map, which is injective ([[lem-index-map-grows]], [[def-injection-surjection-bijection]]).

[L6] Pigeonhole: there is no injection from $\sigma(p)$ into $p$, hence none from $\mathbb{N}$ into any natural number ([[lem-pigeonhole]] claims 1 and 4, [[def-countable]]).

[L7] Absolute value ([[def-abs-value]], [[lem-of-abs-value]]) and the pointwise description of $e_k$ ([[lem-standard-basis-of-f-n]]).

[L8] A compact metric space is totally bounded ([[thm-compact-implies-complete-and-totally-bounded]], [[def-totally-bounded]]).

## Refutation

**Proof technique:** direct.

1.1 Each $e_k$ lies in $V$, with $K = k+1$ admissible, and $N_\infty(e_k) = 1$; so $e_k \in K$ for every $k$. [L1, L7]

1.2 For $j \ne k$ the vector $e_j - e_k$ has coordinates $1$ at $j$, $-1$ at $k$ and $0$ elsewhere, so $N_\infty(e_j-e_k) = 1$, that is $d(e_j,e_k) = 1$. [L1, L2, L7]

1.3 $K$ is bounded, since $K \subseteq B(0,2)$: $v \in K$ gives $d(v,0) = N_\infty(v) \le 1 < 2$. [L1, L2, L3]

1.4 $K$ is closed in $(V,d)$. Let $v \notin K$, so $N_\infty(v) > 1$, and put $r := N_\infty(v)-1 > 0$; if $d(w,v) < r$ then $N_\infty(w) \ge N_\infty(v) - N_\infty(v-w) > N_\infty(v) - r = 1$, so $w \notin K$. Hence the complement of $K$ is open. [L2, L3]

2.1 No subsequence of $(e_k)$ is Cauchy in $(V,d)$: if $l \mapsto e_{n_l}$ were, with $n$ strictly increasing and hence injective, then taking the tolerance $1/2$ would give indices $l \ne l'$ with $d(e_{n_l},e_{n_{l'}}) < 1/2$, while $n_l \ne n_{l'}$ and step 1.2 make that distance $1$. [step 1.2, L5]

3.1 Hence no subsequence of $(e_k)$ converges in the metric subspace $(K, d_K)$, a convergent sequence being Cauchy and $d_K$ being the restriction of $d$; so $(K,d_K)$ is not sequentially compact. [step 2.1, L4, L5]

4.1 If $K$ were compact then $(K,d_K)$ would be a compact metric space and hence sequentially compact, contradicting step 3.1. So [A1] is false, and with steps 1.3 and 1.4 the set $K$ is closed and bounded and not compact. [step 1.3, step 1.4, step 3.1, A1, L4]

5.1 The same family shows that $(K,d_K)$ is not totally bounded, which is the property the general characterisation identifies as missing. Suppose $\{y_0,\dots,y_p\} \subseteq K$ were a finite $1/2$-net. Assigning to each $k \in \mathbb{N}$ the least $i \le p$ with $d(e_k,y_i) < 1/2$ gives a map $\mathbb{N} \to \sigma(p)$, which cannot be injective by pigeonhole; so there are $j \ne k$ and one $i$ with $d(e_j,y_i) < 1/2$ and $d(e_k,y_i) < 1/2$, whence $d(e_j,e_k) \le d(e_j,y_i)+d(y_i,e_k) < 1$, contradicting step 1.2. [step 1.2, L6, L8] ∎

## Remarks

- **What is refuted and what is not.** The claim refuted is the transfer of [[thm-heine-borel-rn]] to arbitrary normed spaces. Nothing here is asserted about normed spaces in general, a theory this library has not built; in particular the classical converse, that a normed space whose closed unit ball is compact must be finite-dimensional, is **not** proved anywhere here.

- **Why the linear structure does not help.** The bisection proof of [[thm-heine-borel-rn]] halves one coordinate at a time and terminates because there are finitely many coordinates. On $V$ there are infinitely many, and the standard unit vectors stay a fixed distance apart no matter how far out one looks; that is exactly the failure of total boundedness in step 5.1.

- **The relation to the published metric-space version.** [[fs-closed-and-bounded-implies-compact-in-every-metric-space]] refutes the claim for metric spaces, and its witness is $\mathbb{N}$ carrying the metric that assigns distance $1$ to distinct points — a set with no linear structure at all. The present item refutes the narrower claim about **normed** spaces, on a space that is a linear subspace of a function space and carries a genuine norm, so no reader can retreat to "the counterexample was not linear".

- **No choice principle is used.** Step 4.1 quotes only the ZF implication [[thm-compact-implies-the-other-compactness-forms]], and step 5.1 quotes [[thm-compact-implies-complete-and-totally-bounded]], also a theorem of ZF; the equivalence [[thm-metric-compactness-equivalences]], which carries two choice hypotheses, is deliberately avoided.
````

### `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`

````markdown
---
id: lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
kind: lemma
title: "The finite and reverse triangle inequalities for a norm; and for $n \\ge 1$ every norm $N$ on $\\mathbb{R}^n$ satisfies $N(x) \\le C\\lVert x\\rVert_1$ and is Lipschitz, hence continuous, for $d_2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-norms, lem-standard-basis-of-f-n, def-linear-combination-and-span, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-cauchy-schwarz-finite, lem-finite-set-has-max, def-max-min, lem-finite-sum-laws, def-finite-sum, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, def-metric-continuity, def-canonical-natural, lem-of-naturals-positive, thm-induction-principle, lem-of-abs-value, lem-of-square-monotone, thm-of-square-roots, lem-real-line-is-a-metric-space, lem-metrics-on-rn, def-vector-space, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about
$\mathbb{R}^{n}$ with $n \ge 1$.**

1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over
   $\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every
   $p \in \mathbb{N}$ and every list $u : p \to V$
   ([[def-linear-combination-and-span]]),
   $$N\Bigl(\sum_{j<p} u_j\Bigr) \;\le\; \sum_{j<p} N(u_j),$$
   and for all $u, w \in V$,
   $$\bigl|N(u) - N(w)\bigr| \;\le\; N(u - w).$$

Now let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the norms of
[[def-p-norms-on-rn]] and write $\iota$ for the canonical natural
([[def-canonical-natural]]).

2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on
   $\mathbb{R}^{n}$ and put $C := \max\{\, N(e_k) : k<n \,\}$, a maximum over a
   nonempty finite set of reals ([[lem-standard-basis-of-f-n]],
   [[lem-finite-set-has-max]]). Then $C \ge 0$ and
   $$N(x) \;\le\; C\,\lVert x\rVert_1 \qquad \text{for every } x \in \mathbb{R}^{n}.$$
3. **The comparison chain.** For every $x \in \mathbb{R}^{n}$,
   $$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(n)\,\lVert x\rVert_\infty , \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(n)}\;\lVert x\rVert_2 .$$
   In particular $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
   $\lVert\cdot\rVert_\infty$ are pairwise equivalent norms on $\mathbb{R}^{n}$,
   with the constants displayed ([[def-equivalent-norms]]).
4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in
   clause 2, $N : (\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ is
   Lipschitz with constant $C\sqrt{\iota(n)}$
   ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]],
   [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and
   continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

**Where $n \ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to
exist, and clause 3 mentions $\lVert\cdot\rVert_\infty$; at $n = 0$ each is a
maximum over the empty index set and does not exist, exactly as in
[[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis
on the dimension and no hypothesis on the space.

## Facts & Assumptions

**Given:** A vector space $V$ over $\mathbb{R}$ with a norm $N$ ([[def-vector-space]], [[def-norm-and-normed-space]]); and, for clauses 2 to 4, a natural $n \ge 1$, the space $\mathbb{R}^{n}$, a norm $N$ on it, and vectors $x, y \in \mathbb{R}^{n}$.

[L1] The norm axioms: $N(v) = 0$ exactly when $v = 0_V$; $N(\lambda v) = |\lambda|N(v)$; $N(u+w) \le N(u)+N(w)$; and $N(v) \ge 0$ ([[def-norm-and-normed-space]]).

[L2] Finite sums in a vector space: $\sum_{j<0}u_j = 0_V$ and $\sum_{j<p+1}u_j = \bigl(\sum_{j<p}u_j\bigr) + u_p$ ([[def-linear-combination-and-span]]); and $(-1)v = -v$ ([[lem-vector-space-elementary-consequences]]).

[L3] The induction principle ([[thm-induction-principle]]).

[L4] Laws of finite sums of reals ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{k<n}\lambda = \iota(n)\lambda$, a sum of nonnegative terms is nonnegative, and every single term is at most such a sum.

[L5] The standard basis: $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$, $e$ is an ordered basis of $\mathbb{R}^{n}$, and every $x$ satisfies $x = \sum_{i<n}x_i e_i$ with coordinate list $i \mapsto x(i)$ ([[lem-standard-basis-of-f-n]] clauses 1 to 3, [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, which belongs to the set and bounds it above.

[L7] The three norms ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]): $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, $\lVert x\rVert_2 = \sqrt{\sum_{k<n}x_k^{2}}$, $\lVert x\rVert_\infty = \max\{|x_k| : k<n\}$, and each induces the correspondingly named published metric.

[L8] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\bigl|\sum_{k<n}a_kb_k\bigr| \le \sqrt{\sum_{k<n}a_k^{2}}\sqrt{\sum_{k<n}b_k^{2}}$.

[L9] Square roots and squaring ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^{2} = c$; for $a,b \ge 0$, $a \le b$ exactly when $a^{2} \le b^{2}$.

[L10] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|t|^{2} = t^{2}$, $|st| = |s||t|$, $|-t| = |t|$, and $|t|$ equals $t$ or $-t$.

[L11] The canonical natural: $\iota(n) > 0$ for $n \ge 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L12] Lipschitz maps and the regularity hierarchy ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]): a map with $d_Y(f(x),f(y)) \le L\,d_X(x,y)$ and $L \ge 0$ is Lipschitz, hence uniformly continuous, hence continuous; $d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 The finite triangle inequality holds by induction on $p$: at $p = 0$ both sides are $0$, since $\sum_{j<0}u_j = 0_V$ and $N(0_V) = 0$ and the empty real sum is $0$; and if $N(\sum_{j<p}u_j) \le \sum_{j<p}N(u_j)$, then $N(\sum_{j<p+1}u_j) = N(\sum_{j<p}u_j + u_p) \le N(\sum_{j<p}u_j) + N(u_p) \le \sum_{j<p}N(u_j) + N(u_p) = \sum_{j<p+1}N(u_j)$. [L1, L2, L3, L4]

1.2 For $u, w \in V$: $N(u) = N((u-w)+w) \le N(u-w) + N(w)$, so $N(u)-N(w) \le N(u-w)$; and $N(w-u) = N((-1)(u-w)) = |-1|N(u-w) = N(u-w)$, so the same argument with $u$ and $w$ exchanged gives $N(w)-N(u) \le N(u-w)$. Since $|N(u)-N(w)|$ is one of $N(u)-N(w)$ and $N(w)-N(u)$, the reverse triangle inequality follows, completing clause 1. [L1, L2, L10]

1.3 For every $j<n$: $x_j^{2} \le \sum_{k<n}x_k^{2}$, since every single term of a sum of nonnegative terms is at most the sum; taking nonnegative square roots and using $|x_j|^{2} = x_j^{2}$ gives $|x_j| \le \lVert x\rVert_2$. [L4, L7, L9, L10]

1.4 For every $j<n$: $|x_j| \le \sum_{k<n}|x_k| = \lVert x\rVert_1$, again because a single term is at most the sum. [L4, L7, L10]

1.5 $\sum_{k<n}|x_k| \le \sum_{k<n}\lVert x\rVert_\infty = \iota(n)\lVert x\rVert_\infty$, since $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$ and a constant list sums to $\iota(n)$ times its value; so $\lVert x\rVert_1 \le \iota(n)\lVert x\rVert_\infty$. [L4, L6, L7, L11]

1.6 Instantiating [L8] at $a_k := |x_k|$ and $b_k := 1$ gives $\lVert x\rVert_1 = \bigl|\sum_{k<n}|x_k|\cdot 1\bigr| \le \sqrt{\sum_{k<n}|x_k|^{2}}\,\sqrt{\sum_{k<n}1} = \lVert x\rVert_2\sqrt{\iota(n)}$. [L4, L7, L8, L10]

1.7 The set $\{N(e_k) : k<n\}$ is a nonempty finite set of reals because $n \ge 1$, so $C = \max\{N(e_k) : k<n\}$ exists, belongs to the set, satisfies $N(e_k) \le C$ for every $k<n$, and is $\ge 0$ since every value of $N$ is. [L1, L5, L6]

1.8 $x = \sum_{i<n} x_i e_i$, the coordinate list of $x$ with respect to the ordered basis $e$ being $i \mapsto x(i) = x_i$. [L5]

2.1 $\lVert x\rVert_\infty$ is one of the numbers $|x_j|$ with $j<n$, so step 1.3 gives $\lVert x\rVert_\infty \le \lVert x\rVert_2$. [step 1.3, L6, L7]

2.2 $\sum_{k<n}x_k^{2} = \sum_{k<n}|x_k|\,|x_k| \le \sum_{k<n}|x_k|\,\lVert x\rVert_1 = \lVert x\rVert_1\sum_{k<n}|x_k| = \lVert x\rVert_1^{2}$, using step 1.4 termwise, monotonicity and scaling; taking nonnegative square roots gives $\lVert x\rVert_2 \le \lVert x\rVert_1$. [step 1.4, L4, L7, L9, L10]

2.3 Applying step 1.1 to the list $i \mapsto x_i e_i$ and then (N2): $N(x) = N\bigl(\sum_{i<n}x_ie_i\bigr) \le \sum_{i<n}N(x_ie_i) = \sum_{i<n}|x_i|\,N(e_i) \le \sum_{i<n}|x_i|\,C = C\lVert x\rVert_1$, the last inequality by monotonicity from step 1.7. This is clause 2. [step 1.1, step 1.7, step 1.8, L1, L4, L7]

3.1 Steps 2.1, 2.2, 1.5 and 1.6 are the four inequalities of clause 3; since $\iota(n) > 0$ and $\sqrt{\iota(n)} > 0$, they exhibit positive constants in both directions for each of the three pairs, so the three norms are pairwise equivalent. [step 1.5, step 1.6, step 2.1, step 2.2, L11, L9]

3.2 By step 1.2 applied on $\mathbb{R}^{n}$, then step 2.3, then step 1.6: $\bigl|N(x)-N(y)\bigr| \le N(x-y) \le C\lVert x-y\rVert_1 \le C\sqrt{\iota(n)}\;\lVert x-y\rVert_2$. [step 1.2, step 1.6, step 2.3, L4]

4.1 Since $\lVert x-y\rVert_2 = d_2(x,y)$ and $\bigl|N(x)-N(y)\bigr| = d_{\mathbb{R}}(N(x),N(y))$, step 3.2 says exactly that $N$ is Lipschitz with the nonnegative constant $C\sqrt{\iota(n)}$, hence uniformly continuous and continuous; this is clause 4, and with steps 1.2, 2.3 and 3.1 all four clauses are proved. [step 1.2, step 2.3, step 3.1, step 3.2, L7, L12] ∎

## Remarks

- **Clause 2 is the half of norm equivalence that costs no compactness.** It gives an upper bound for an arbitrary norm in terms of $\lVert\cdot\rVert_1$, and hence in terms of $\lVert\cdot\rVert_2$ by clause 3, by a computation with the standard basis alone. The matching **lower** bound is where compactness of the unit sphere enters, and that is [[thm-all-norms-on-rn-are-equivalent]].

- **The constants of clause 3 are best possible, and the companion page shows it.** Nothing here claims sharpness; the attaining vectors are exhibited on the companion page for $\mathbb{R}^{2}$.

- **Clause 1 is stated for a general norm on purpose.** It is used below for the Euclidean norm on $\mathbb{R}^{n}$ inside [[thm-steinitz-polygonal-confinement]] and for an arbitrary $N$ in clause 2, and it is the only statement on this page that needs no hypothesis on the dimension at all.
````

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-linear-subspace-criterion`

````markdown
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
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
````

### `lem-of-triangle-inequality`

````markdown
---
id: lem-of-triangle-inequality
kind: lemma
title: "The triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-of-abs-value, lem-of-add-order, def-ordered-field]
aliases: []
landmark: true
short: "Triangle ineq."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] For every $u \in F$, $-|u| \le u \le |u|$, and $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]]).

[L2] Order compatible with addition: if $a \le b$ and $c \le d$, then $a + c \le b + d$. [[lem-of-add-order]] states the STRICT forms and only those ($a < b \Rightarrow a + c < b + c$, and $a < b$ with $c < d$ giving $a + c < b + d$); the nonstrict form used here is those two together with the cases $a = b$ and $c = d$, settled by trichotomy, the order being total ([[def-ordered-field]]). Explicitly: if $a < b$ and $c < d$ the second strict form applies; if $a < b$ and $c = d$ the first gives $a + c < b + c = b + d$; if $a = b$ and $c < d$ the first gives $a + c < a + d = b + d$; and if $a = b$ and $c = d$ the two sides are equal.

[L3] Field and order arithmetic: $-(a + b) = -a + (-b)$, and $a \le b \iff -b \le -a$ ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $-|x| \le x \le |x|$ and $-|y| \le y \le |y|$. [L1]

2.1 Adding the two chains of [step 1.1] with [L2] and using $-(|x| + |y|) = -|x| + (-|y|)$ from [L3] gives $-(|x| + |y|) \le x + y \le |x| + |y|$. [step 1.1, L2, L3]

3.1 By [L1] the value $|x + y|$ equals $x + y$ or $-(x + y)$; both $x + y \le |x| + |y|$ and $-(x + y) \le |x| + |y|$ hold by [step 2.1] and [L3] (the latter from $-(|x| + |y|) \le x + y$), so $|x + y| \le |x| + |y|$. [step 2.1, L1, L3] ∎
````

### `lem-pigeonhole`

````markdown
---
id: lem-pigeonhole
kind: lemma
title: "The pigeonhole principle on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle,
       lem-nat-order-is-membership, lem-nat-trichotomy,
       lem-nat-nonzero-is-successor, lem-nat-transitive-irreflexive,
       def-injection-surjection-bijection, def-equinumerous]
justified_by: []
forward_refs: [def-cardinal]
aliases: [lem-pigeonhole-principle, pigeonhole-principle]
landmark: true
short: "no injection $\\sigma(n)\\to n$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "Dedekind-infinite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind-infinite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 (Cardinality of sets)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $\mathbb{N}$ be the von Neumann naturals, with $0 = \varnothing$ and
$\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]), and let $<$ be the order of
[[def-nat-order]], so that $m < n \iff m \in n$ and
$n = \{\, m \in \mathbb{N} : m < n \,\}$ ([[lem-nat-order-is-membership]]).
Write $\approx$ for equinumerosity ([[def-equinumerous]]). Then:

1. for every $n \in \mathbb{N}$ there is **no injection** $\sigma(n) \to n$;
2. if $m < n$ then there is no injection $n \to m$;
3. if $n \approx m$ with $n, m \in \mathbb{N}$, then $n = m$;
4. $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$;
5. no natural number is equinumerous with a proper subset of itself: if
   $A \subseteq n$ and $n \approx A$, then $A = n$.

Claim 1 is the pigeonhole principle in its sharpest form, that $n + 1$ pigeons do
not fit injectively into $n$ holes; the other four are the consequences the
library actually quotes. Claim 3 says a finite set is equinumerous with exactly
one natural number, so "the number of elements" is well defined. Claim 4 says
$\mathbb{N}$ is infinite. Claim 5 says no natural number is Dedekind-infinite.

**Why this is proved here.** The next item on this page defines finiteness as
equinumerosity with a natural number, and the three size classes it introduces
are exhaustive by construction but mutually exclusive only because of claim 4.
Several later items also need claim 3 or claim 5. The principle is elementary and
belongs with the naturals, but it is about counting rather than about order, so
it is proved here, immediately before finiteness is defined, from induction and
the identification of the order with membership alone. Nothing below uses
ordinals, cardinals, or any later material.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, and $\mathbb{N}$ closed under $\sigma$, since it is an inductive set ([[def-natural-numbers]]); the order $m \le n \iff \exists k \in \mathbb{N}\ (m + k = n)$ and $m < n \iff (m \le n$ and $m \ne n)$ ([[def-nat-order]]); and $A \approx B$ meaning that a bijection $A \to B$ exists ([[def-equinumerous]]).

[L1] Induction: if $P(0)$ holds and $P(n)$ implies $P(\sigma(n))$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L2] On $\mathbb{N}$ the order is membership ([[lem-nat-order-is-membership]]): $\mathbb{N}$ is a transitive set, so every element of a natural number is again a natural number; $m < n \iff m \in n$; $m \le n \iff m \subseteq n$; and consequently $n = \{\, m \in \mathbb{N} : m < n \,\}$.

[L3] Every natural number is a transitive set and satisfies $n \notin n$ ([[lem-nat-transitive-irreflexive]]).

[L4] Trichotomy: for all $m, n \in \mathbb{N}$ exactly one of $m < n$, $m = n$, $n < m$ holds ([[lem-nat-trichotomy]]).

[L5] Every natural number $n \ne 0$ equals $\sigma(m)$ for some $m \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]).

[L6] Maps ([[def-injection-surjection-bijection]]): $f$ is injective when $f(x) = f(y)$ forces $x = y$, and bijective when it is injective and surjective, so every bijection is an injection; a composite of two injections is an injection, a composite of two bijections is a bijection, and a bijection has a two sided inverse which is again a bijection. Two immediate consequences of the definition of injectivity are used below: the restriction of an injection to a subset of its domain is an injection, injectivity being a condition on pairs of points of the domain; and a map whose values all lie in a subset $C$ of its codomain may be read as a map into $C$, without affecting injectivity.

## Proof

**Proof technique:** direct.

1.1 Transpositions. For a set $X$ and $a, b \in X$ define $\tau^{X}_{a,b} : X \to X$ by $\tau^{X}_{a,b}(a) = b$, $\tau^{X}_{a,b}(b) = a$, and $\tau^{X}_{a,b}(x) = x$ for $x \notin \{a, b\}$; the clauses agree where they overlap (if $a = b$ all three read $a \mapsto a$, so the map is the identity), so this is a well defined function, and $\tau^{X}_{a,b} \circ \tau^{X}_{a,b} = \mathrm{id}_X$, whence $\tau^{X}_{a,b}$ is a bijection of $X$ onto itself. It carries $X \setminus \{a\}$ onto $X \setminus \{b\}$: when $a = b$ this is the identity statement, and when $a \ne b$ the elements of $X \setminus \{a\}$ are $b$, sent to $a$, together with the $x \notin \{a, b\}$, each fixed, so the image is $\{a\} \cup (X \setminus \{a, b\}) = X \setminus \{b\}$. [construct]

1.2 Base case of claim 1. Here $\sigma(0) = 0 \cup \{0\} = \{0\}$ and $0 = \varnothing$, so a function $f : \sigma(0) \to 0$ would have to supply a value $f(0) \in \varnothing$, and $\varnothing$ has no elements; hence there is no function $\sigma(0) \to 0$ at all, injective or not. [given]

1.3 Inductive step, hypotheses. Fix $n \in \mathbb{N}$, assume there is no injection $\sigma(n) \to n$, and suppose towards a contradiction that some $f : \sigma(\sigma(n)) \to \sigma(n)$ is injective. Note $\sigma(\sigma(n)) = \sigma(n) \cup \{\sigma(n)\}$, so $\sigma(n) \subseteq \sigma(\sigma(n))$ and $\sigma(n) \in \sigma(\sigma(n))$; note also $n \in \sigma(n)$. [assume-hyp, given]

2.1 Normalising $f$ at the top point. Put $a = f(\sigma(n))$, an element of $\sigma(n)$ because $\sigma(n)$ is the codomain of $f$, and let $\tau = \tau^{\sigma(n)}_{a,n}$, which is legitimate since $a$ and $n$ both lie in $\sigma(n)$. Then $f' = \tau \circ f : \sigma(\sigma(n)) \to \sigma(n)$ is a composite of an injection with a bijection, hence injective, and $f'(\sigma(n)) = \tau(a) = n$. [step 1.1, step 1.3, L6]

2.2 Every $k \in \sigma(n)$ satisfies $k \ne \sigma(n)$: were $k = \sigma(n)$ we would have $\sigma(n) \in \sigma(n)$, and no natural number is a member of itself, $\sigma(n)$ included, since $\mathbb{N}$ is closed under $\sigma$. [step 1.3, L3, given]

3.1 Let $k \in \sigma(n)$. Then $k \in \sigma(\sigma(n))$, so $f'(k)$ is defined; and $k \ne \sigma(n)$, so injectivity of $f'$ gives $f'(k) \ne f'(\sigma(n)) = n$. Since $f'(k) \in \sigma(n) = n \cup \{n\}$, this forces $f'(k) \in n$. Hence the restriction of $f'$ to $\sigma(n)$ takes all its values in $n$ and is an injection $\sigma(n) \to n$. [step 2.1, step 2.2, L6]

4.1 Claim 1. The injection produced in step 3.1 contradicts the assumption made in step 1.3, so no injection $\sigma(\sigma(n)) \to \sigma(n)$ exists. Since $n$ was arbitrary, this is exactly the induction step for the property $P(n)$ that there is no injection $\sigma(n) \to n$, and step 1.2 is $P(0)$; so $P(n)$ holds for every $n \in \mathbb{N}$. [step 1.2, step 1.3, step 3.1, L1]

5.1 Claim 2. Let $m < n$. Then $m \in n$, and $m \le n$ gives $m \subseteq n$, so $\sigma(m) = m \cup \{m\} \subseteq n$. If some $g : n \to m$ were injective, its restriction to $\sigma(m)$ would be an injection $\sigma(m) \to m$, which step 4.1 forbids. Hence there is no injection $n \to m$. [step 4.1, L2, L6]

5.2 Claim 4. Since $\mathbb{N}$ is closed under $\sigma$ we have $\sigma(n) \in \mathbb{N}$, and $\mathbb{N}$ is a transitive set, so $\sigma(n) \subseteq \mathbb{N}$. If some $F : \mathbb{N} \to n$ were a bijection, it would in particular be an injection, and its restriction to $\sigma(n)$ would be an injection $\sigma(n) \to n$, which step 4.1 forbids. Hence $\mathbb{N} \not\approx n$. [step 4.1, L2, L6, given]

5.3 Claim 5. Let $A \subseteq n$ with $n \approx A$, and suppose $A \ne n$. Then $n \ne 0$, since the only subset of $0 = \varnothing$ is $\varnothing = 0$ itself, so $n = \sigma(m)$ for some $m \in \mathbb{N}$; moreover $m \in \sigma(m) = n$ and $m \notin m$, so $n \setminus \{m\} = (m \cup \{m\}) \setminus \{m\} = m$. Choose $j \in n \setminus A$, possible because $A \subseteq n$ and $A \ne n$, and let $h : n \to A$ be a bijection; since $j \notin A$ we have $A \subseteq n \setminus \{j\}$, so $h$ read as a map into $n \setminus \{j\}$ is an injection $n \to n \setminus \{j\}$. The transposition $\tau^{n}_{j,m}$ is a bijection of $n$ carrying $n \setminus \{j\}$ onto $n \setminus \{m\} = m$, so its composite with $h$ is an injection $n \to m$, that is an injection $\sigma(m) \to m$, which step 4.1 forbids. Hence $A = n$. [step 1.1, step 4.1, L3, L5, L6, choose]

6.1 Claim 3. Let $n, m \in \mathbb{N}$ with $n \approx m$, and suppose $n \ne m$. By trichotomy either $m < n$ or $n < m$. If $m < n$, a bijection $n \to m$ is in particular an injection $n \to m$, which step 5.1 forbids. If $n < m$, a bijection $n \to m$ has an inverse bijection $m \to n$, which is in particular an injection $m \to n$, and step 5.1 forbids that too, with the roles of $m$ and $n$ interchanged. Hence $n = m$. [step 5.1, L4, L6]

7.1 Claims 1, 2, 3, 4 and 5 are established in steps 4.1, 5.1, 6.1, 5.2 and 5.3 respectively. [step 4.1, step 5.1, step 5.2, step 5.3, step 6.1] ∎

## Remarks

- **Where the work is.** Everything rests on claim 1, and claim 1 rests on one device: a map into $\sigma(n)$ can be modified by a transposition of the codomain so that the top point $\sigma(n)$ goes to the top value $n$, after which the rest of the map misses $n$ and lands in $n$. Without that normalisation the inductive hypothesis does not apply, since an arbitrary injection $\sigma(\sigma(n)) \to \sigma(n)$ need not send anything to $n$.

- **No choice is used.** Every map built above is defined by an explicit rule: the transposition is given by three cases, and the only element selected anywhere is a single $j \in n \setminus A$ in step 5.3, a single choice from a nonempty set, which needs no choice principle.

- **Claim 5 and the two notions of infinity.** A set is *Dedekind-infinite* when it is equinumerous with a proper subset of itself. Claim 5 says no natural number is, and transporting along a bijection extends this to every finite set, which is the ZF half of the comparison discussed in [[fs-infinite-has-countable-subset-in-zf]]: Dedekind-infinite implies infinite outright in ZF, while the converse is not a theorem of ZF unless ZF is inconsistent, that item's conclusion being conditional on the consistency of ZF and resting on an external independence result quoted rather than proved. The successor map $\sigma : \mathbb{N} \to \mathbb{N} \setminus \{0\}$ shows $\mathbb{N}$ itself is Dedekind-infinite, so the restriction to natural numbers in claim 5 is essential.

- **Relation to the ordinals page.** [[def-cardinal]] calls an ordinal $\kappa$ a cardinal when no $\alpha \in \kappa$ satisfies $\alpha \approx \kappa$. Claim 3 makes every natural number a cardinal and claim 4 makes $\omega$ one, which is what licenses the traditional $\aleph_0 = \omega$. That page comes much later in the library; the pointer here is orientation only, and nothing above rests on it.
````

### `lem-standard-basis-of-f-n`

````markdown
---
id: lem-standard-basis-of-f-n
kind: lemma
title: "The standard list $e : n \\to F^{n}$ with $e_i(i) = 1_F$ and $e_i(j) = 0_F$ for $j \\ne i$ is an ordered basis of $F^{n}$; hence $\\dim_F F^{n} = n$, and $F^{0}$ is the zero space with basis $\\varnothing$ and dimension $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-basis, def-dimension, def-linear-independence, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-function-space, def-linear-combination-and-span, def-sum-of-linear-subspaces, def-monoid-finite-product, lem-restriction-of-scalars, def-vector-space, def-field, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection, def-equinumerous, def-countable]
justified_by: []
aliases: [lem-standard-basis, def-standard-unit-vectors]
landmark: true
short: "$\\dim_F F^{n} = n$"
proof_strategy: direct
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
    - title: "Standard basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Standard_basis"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]), let $n \in \mathbb{N}$ and let $F^{n}$ be the
function space on the von Neumann natural $n = \{0, \dots, n-1\}$, with the
pointwise operations ([[def-function-space]], [[def-natural-numbers]],
[[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector**
$e_i \in F^{n}$ by

$$e_i(i) = 1_F, \qquad e_i(j) = 0_F \ \text{ for } j < n \text{ with } j \ne i .$$

Then:

1. **Finite sums in a function space are pointwise.** For every set $X$, every
   $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$,
   $$\Bigl(\sum_{k<p} u_k\Bigr)(j) \;=\; \sum_{k<p} u_k(j),$$
   the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary
   $X$ because the companion page needs it at $X = \mathbb{N}$.)
2. $e : n \to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in
   particular $e$ is injective and its image $e[n] = \{\, e_i : i < n \,\}$ is a
   basis of $F^{n}$ with $e[n] \approx n$ ([[def-equinumerous]]);
3. for every $\lambda : n \to F$ and every $j < n$,
   $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$; equivalently the
   coordinate list of $x \in F^{n}$ with respect to the ordered basis $e$
   ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is
   $i \mapsto x(i)$;
4. $F^{n}$ is finite-dimensional over $F$ with $\dim_F F^{n} = n$
   ([[def-dimension]]);
5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function,
   so $F^{0}$ is the zero space, the empty list is its ordered basis,
   $\varnothing$ is its basis and $\dim_F F^{0} = 0$.

Every index runs from $0$, so the coordinates of an element of $F^{n}$ are
$x_0, \dots, x_{n-1}$ and no statement above is restricted to $n \ge 1$.

## Facts & Assumptions

**Given:** A field $F$, a natural number $n$, the vector space $F^{n}$ with pointwise operations, and the vectors $e_i$ for $i < n$.

[L1] $F^{X}$ is a vector space over $F$ with $(x+y)(j) = x(j)+y(j)$, $(\lambda x)(j) = \lambda\,x(j)$ and zero the constant function at $0_F$; two elements are equal exactly when they agree at every point; and $F^{0}$ has exactly one element, the empty function, which is $0_{F^{0}}$ ([[def-function-space]], [[def-vector-space]]).

[L2] Finite sums: $\sum_{k<0}u_k$ is the zero vector and $\sum_{k<\sigma(p)}u_k = \bigl(\sum_{k<p}u_k\bigr) + u_p$, in any vector space ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L3] $F$ is a vector space over itself, with the field addition and multiplication ([[lem-restriction-of-scalars]], claim 1), so the finite sums of $\mathbb{N}$-indexed lists of scalars are available in $(F,+,0_F)$ and satisfy (F1) and (F3); in particular a list of scalars vanishing off a single index sums to its value at that index ([[def-sum-of-linear-subspaces]]).

[L4] In $F$: $\lambda 1_F = \lambda$ and $\lambda 0_F = 0_F$ for every $\lambda \in F$ ([[def-field]], [[lem-vector-space-elementary-consequences]]).

[L5] A list $v : n \to V$ is an ordered basis of $V$ if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$; an ordered basis is injective and its image is a basis with $v[n] \approx n$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]], [[def-linear-independence]], [[def-injection-surjection-bijection]]).

[L6] $\dim_F V$ is the unique $p \in \mathbb{N}$ with a basis $B \approx p$, defined when $V$ has a finite basis ([[def-dimension]], [[def-countable]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1, that a finite sum in $F^{X}$ is computed pointwise: for every $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$, $\bigl(\sum_{k<p}u_k\bigr)(j) = \sum_{k<p}u_k(j)$, the right-hand sum being taken in $(F,+,0_F)$. By induction on $p$: at $p = 0$ the left side is the value at $j$ of the constant function $0_F$ and the right side is the empty sum $0_F$; and if it holds at $p$, then $\bigl(\sum_{k<\sigma(p)}u_k\bigr)(j) = \bigl(\sum_{k<p}u_k + u_p\bigr)(j) = \bigl(\sum_{k<p}u_k\bigr)(j) + u_p(j) = \sum_{k<p}u_k(j) + u_p(j) = \sum_{k<\sigma(p)}u_k(j)$, using pointwise addition and the recursion. [L1, L2, L3, L7]

2.1 Evaluating a combination of the $e_i$. Let $\lambda : n \to F$ and $j < n$. By step 1.1 and pointwise scalar multiplication, $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \sum_{i<n}(\lambda_i e_i)(j) = \sum_{i<n}\lambda_i\, e_i(j)$. The list of scalars $i \mapsto \lambda_i\,e_i(j)$ takes the value $\lambda_i 0_F = 0_F$ at every $i \ne j$ and the value $\lambda_j 1_F = \lambda_j$ at $i = j$, so it vanishes off the single index $j$ and therefore sums to $\lambda_j$. Hence $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$ for every $j < n$. [step 1.1, L1, L3, L4]

3.1 Existence and uniqueness of coordinates. Given $x \in F^{n}$, put $\lambda_i := x(i)$; by step 2.1 the vectors $\sum_{i<n}\lambda_i e_i$ and $x$ agree at every $j < n$, hence are equal. And if $\sum_{i<n}\lambda_i e_i = \sum_{i<n}\mu_i e_i$, then evaluating both sides at $j$ and using step 2.1 gives $\lambda_j = \mu_j$ for every $j < n$. So every $x \in F^{n}$ is $\sum_{i<n}\lambda_i e_i$ for exactly one $\lambda : n \to F$. [step 2.1, L1]

4.1 Claims 2 and 3. Step 2.1 is claim 3, and by the coordinate characterisation of an ordered basis, step 3.1 says exactly that $e$ is an ordered basis of $F^{n}$; hence $e$ is injective, $e[n]$ is a basis of $F^{n}$, and $e[n] \approx n$. [step 2.1, step 3.1, L5]

5.1 Claims 4 and 5. By step 4.1 the space $F^{n}$ has a basis with $n$ elements, so it is finite-dimensional and $\dim_F F^{n} = n$. At $n = 0$ the space $F^{0}$ has exactly one element, the empty function, which is its zero vector, so $F^{0}$ is the zero space; the list $e$ is then the empty list, its image is $\varnothing$, and $\dim_F F^{0} = 0$. [step 4.1, L1, L6] ∎

## Remarks

- **The indices start at $0$ because a natural number is the set of its predecessors.** $F^{n}$ is the function space $F^{X}$ at $X = n = \{0,\dots,n-1\}$ ([[def-function-space]], [[lem-nat-order-is-membership]]), so an element of $F^{n}$ is a function on $\{0,\dots,n-1\}$ and there is no $e_n$. Reading the standard basis off a $1$-indexed source would put a vector outside the space at one end and lose one at the other.

- **Step 1.1 is not a triviality to be skipped.** That a finite sum of functions is the pointwise finite sum is a statement about the recursion defining [[def-monoid-finite-product]] in two different monoids, and it is proved by induction. Every evaluation argument on this page and on the companion page rests on it.

- **This is the concrete counterweight to [[cor-every-vector-space-has-a-basis]].** Here a basis is written down and no choice principle is used anywhere; there a basis is produced by Zorn's lemma and none is exhibited. The companion page carries both extremes for infinite-dimensional spaces as well: an explicit infinite basis for the eventually zero families, and a basis of $\mathbb{R}$ over $\mathbb{Q}$ that no argument exhibits.
````

### `thm-all-norms-on-rn-are-equivalent`

````markdown
---
id: thm-all-norms-on-rn-are-equivalent
kind: theorem
title: "For $n \\ge 1$ all norms on $\\mathbb{R}^n$ are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-equivalent-norms, def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-heine-borel-rn, thm-extreme-value-metric, thm-metric-continuity-characterisations, def-metric-compactness, def-metric-bounded-diameter, def-metric-topology, def-metric-ball, lem-standard-basis-of-f-n, def-metric-continuity, lem-of-inverse-positive, def-complete-ordered-field, thm-of-square-roots, lem-metrics-on-rn, def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. Then any two norms on $\mathbb{R}^{n}$ are
equivalent ([[def-equivalent-norms]], [[def-norm-and-normed-space]]).

More precisely, for every norm $N$ on $\mathbb{R}^{n}$ there are reals
$c > 0$ and $C' > 0$ with

$$c\,\lVert x\rVert_2 \;\le\; N(x) \;\le\; C'\,\lVert x\rVert_2 \qquad \text{for every } x \in \mathbb{R}^{n},$$

and the general statement follows because equivalence of norms is an equivalence
relation.

**Consequently all the metric notions on $\mathbb{R}^{n}$ are norm independent**
for $n \ge 1$: any two norms give the same open sets, the same convergent
sequences with the same limits, the same Cauchy sequences and the same uniformly
continuous maps ([[def-equivalent-norms]]).

**The hypothesis $n \ge 1$ is used twice in the proof and both uses are marked**:
once so that the constant $C$ of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] exists, and once
so that the Euclidean unit sphere is **nonempty**, which is what the extreme
value theorem needs. At $n = 0$ the conclusion is true but vacuous, the zero
space carrying exactly one norm ([[def-norm-and-normed-space]]), and it is not
obtained from the argument below.

## Facts & Assumptions

**Given:** A natural $n \ge 1$, the space $\mathbb{R}^{n}$ with the norms of [[def-p-norms-on-rn]] and the published metric $d_2$ ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]), and a norm $N$ on $\mathbb{R}^{n}$; write $S := \{\, x \in \mathbb{R}^{n} : \lVert x\rVert_2 = 1 \,\}$.

[L1] For $n \ge 1$: $C := \max\{N(e_k) : k<n\}$ exists with $C \ge 0$, $N(x) \le C\lVert x\rVert_1$, $\lVert x\rVert_1 \le \sqrt{\iota(n)}\lVert x\rVert_2$, and $N$ is continuous as a map $(\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 2, 3, 4).

[L2] Equivalence of norms is an equivalence relation, and $c M \le N \le C M$ with $c, C > 0$ is what it means ([[def-equivalent-norms]]).

[L3] Heine-Borel in $\mathbb{R}^{n}$ for $n \ge 1$: a subset of $(\mathbb{R}^{n},d_2)$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]] clause 2, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-bounded-diameter]]).

[L4] Extreme value theorem: a continuous real-valued function on a **nonempty** compact metric space attains a least value ([[thm-extreme-value-metric]]).

[L5] Continuity characterisations: a map of metric spaces continuous at every point has closed preimages of closed sets ([[thm-metric-continuity-characterisations]], clause (c)).

[L6] Balls, openness and boundedness ([[def-metric-ball]], [[def-metric-topology]], [[def-metric-bounded-diameter]]): $U$ is open when every point of $U$ has a ball inside $U$; $A$ is bounded when $A = \emptyset$ or $A \subseteq B(x_0,r)$ for some $x_0$ and real $r>0$.

[L7] The norm axioms (N1) and (N2), and nonnegativity of a norm ([[def-norm-and-normed-space]]).

[L8] The standard basis vector $e_0 \in \mathbb{R}^{n}$ exists for $n \ge 1$, with $e_0(0) = 1$ and $e_0(j) = 0$ for $0 \ne j < n$ ([[lem-standard-basis-of-f-n]]); hence $\lVert e_0\rVert_2 = \sqrt{1} = 1$ ([[def-p-norms-on-rn]], [[thm-of-square-roots]]).

[L9] Inverses: $u > 0$ gives $u^{-1} > 0$, and trichotomy of the order of $\mathbb{R}$ ([[lem-of-inverse-positive]], [[def-complete-ordered-field]]).

[L10] Continuity at a point in the $\varepsilon$-$\delta$ form, and the metric subspace $(A, d_A)$ with $d_A$ the restriction of $d$ ([[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[def-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 The singleton $\{1\} \subseteq \mathbb{R}$ is closed: if $y \ne 1$ then $r := |y-1| > 0$ and the ball $B(y,r)$ omits $1$, so the complement of $\{1\}$ is open. [L6, L9]

1.2 $\lVert\cdot\rVert_2$ is itself a norm on $\mathbb{R}^{n}$, so by [L1] applied to it, $\lVert\cdot\rVert_2 : (\mathbb{R}^{n},d_2) \to (\mathbb{R},d_{\mathbb{R}})$ is continuous. [L1, L7]

1.3 $S \subseteq B(0,2)$, since $x \in S$ gives $d_2(x,0) = \lVert x\rVert_2 = 1 < 2$; so $S$ is bounded. [L6, L7]

1.4 $e_0 \in S$, because $\lVert e_0\rVert_2 = 1$; this is where $n \ge 1$ is used, since for $n = 0$ there is no index $0 < n$ and no such vector. So $S \ne \emptyset$. [L8]

1.5 For every $a \in S$ and every real $\varepsilon > 0$, a $\delta > 0$ witnessing continuity of $N$ at $a$ as a map on $\mathbb{R}^{n}$ also witnesses it for the restriction $N|_S$ on the metric subspace $(S, d_S)$, because $d_S$ is the restriction of $d_2$ and the condition is quantified over fewer points; so $N|_S$ is continuous. [L1, L10]

1.6 Put $C' := C\sqrt{\iota(n)} + 1$, a real $> 0$. By [L1], $N(x) \le C\lVert x\rVert_1 \le C\sqrt{\iota(n)}\lVert x\rVert_2 \le C'\lVert x\rVert_2$, the last step because $\lVert x\rVert_2 \ge 0$. [L1, L7]

2.1 $S$ is the preimage of $\{1\}$ under the continuous $\lVert\cdot\rVert_2$, hence closed in $\mathbb{R}^{n}$. [step 1.1, step 1.2, L5]

3.1 $S$ is a compact subset of $(\mathbb{R}^{n},d_2)$, being closed and bounded. [step 1.3, step 2.1, L3]

4.1 By the extreme value theorem applied to the nonempty compact metric space $(S,d_S)$ and the continuous $N|_S$, there is $x_{\min} \in S$ with $N(x_{\min}) \le N(x)$ for every $x \in S$; put $c := N(x_{\min})$. [step 1.4, step 1.5, step 3.1, L4]

5.1 $c > 0$: from $x_{\min} \in S$ we get $\lVert x_{\min}\rVert_2 = 1 \ne 0$, so $x_{\min} \ne 0$ by (N1) for $\lVert\cdot\rVert_2$, so $N(x_{\min}) \ne 0$ by (N1) for $N$, and $N(x_{\min}) \ge 0$; trichotomy leaves $c > 0$. [step 4.1, L7, L9]

5.2 Let $x \ne 0$. Then $\lVert x\rVert_2 > 0$ by (N1) and nonnegativity, so $t := 1/\lVert x\rVert_2 > 0$ and $u := t\,x$ satisfies $\lVert u\rVert_2 = |t|\,\lVert x\rVert_2 = 1$ by (N2); hence $u \in S$ and $c \le N(u) = |t|\,N(x) = N(x)/\lVert x\rVert_2$, that is $c\,\lVert x\rVert_2 \le N(x)$. [step 4.1, L7, L9]

6.1 For $x = 0$ both $c\lVert x\rVert_2$ and $N(x)$ are $0$ by (N1), so $c\lVert x\rVert_2 \le N(x)$ holds for every $x \in \mathbb{R}^{n}$. [step 5.2, L7]

7.1 Steps 5.1, 6.1 and 1.6 give $c\lVert x\rVert_2 \le N(x) \le C'\lVert x\rVert_2$ with $c, C' > 0$, so every norm $N$ on $\mathbb{R}^{n}$ is equivalent to $\lVert\cdot\rVert_2$. [step 5.1, step 6.1, step 1.6, L2]

8.1 Given two norms $M$ and $N$ on $\mathbb{R}^{n}$, each is equivalent to $\lVert\cdot\rVert_2$ by step 7.1, so $M$ is equivalent to $N$ by symmetry and transitivity of the relation. [step 7.1, L2] ∎

## Remarks

- **What the proof spends, and where it stops.** The only nonelementary ingredients are compactness of the Euclidean unit sphere, obtained from [[thm-heine-borel-rn]], and the extreme value theorem [[thm-extreme-value-metric]]. Heine-Borel in $\mathbb{R}^{n}$ is proved by bisection and uses no choice principle, and the extreme value theorem is a theorem of ZF ([[rem-compactness-choice-ledger-metric]]), so this theorem costs no choice either.

- **The sphere is where the argument is finite-dimensional.** The step that fails outside $\mathbb{R}^{n}$ is step 3.1: closed and bounded gives compact by [[thm-heine-borel-rn]], a theorem about $\mathbb{R}^{n}$ for a natural $n$ and about nothing else. The companion page exhibits a real vector space carrying two inequivalent norms, and the same space with a closed bounded set that is not compact. **This remark is a statement about this proof and about that witness; no claim is made here about normed spaces in general, a theory this library has not built.**

- **The constants are not canonical.** Nothing in the statement fixes $c$ or $C'$, and the proof produces one admissible pair, not the best one. Sharp constants for the three named norms on $\mathbb{R}^{2}$ are computed on the companion page.
````

### `thm-heine-borel-rn`

````markdown
---
id: thm-heine-borel-rn
kind: theorem
title: "Heine-Borel in $\\mathbb{R}^n$: with the Euclidean metric a subset of $\\mathbb{R}^n$ is compact if and only if it is closed and bounded, and the proof by bisection uses no choice principle; the same holds on the real line"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, lem-compactness-is-intrinsic, thm-compact-subset-is-closed-and-bounded, lem-closed-subset-of-a-compact-space-is-compact, lem-metrics-on-rn, lem-real-line-is-a-metric-space, thm-nested-interval-property, thm-recursion, def-finite-sum, def-interval, def-integer-power, lem-geometric-sequence-null, lem-finite-sum-laws, def-metric-ball, def-metric-bounded-diameter, def-metric-topology, def-isometry-and-metric-embedding, lem-finite-set-has-max, def-max-min, cor-archimedean-reciprocal, thm-of-archimedean, thm-of-square-roots, lem-of-square-monotone, def-abs-value, def-canonical-natural, def-real-limit, def-metric-space]
justified_by: []
aliases: [thm-heine-borel-euclidean]
landmark: true
short: "Heine-Borel in $\\mathbb{R}^n$"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
([[lem-metrics-on-rn]]). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   ([[def-metric-topology]]) and bounded
   ([[def-metric-bounded-diameter]]).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]) is not.

The hypothesis $n \ge 1$ is inherited from [[lem-metrics-on-rn]], which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the metric space $(\mathbb{R}^n, d_2)$, and the notions of open, closed, bounded and compact subset in it.

[L1] $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$, and $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$, $d_\infty(x,y) = \max\{|x_k - y_k| : k < n\}$ are metrics on it ([[lem-metrics-on-rn]], [[def-finite-sum]], [[def-metric-space]]).

[L2] Finite sums of nonnegative terms dominate each term and are monotone, and $\sum_{k<n} c = \iota(n)c$ for a constant $c$, $\iota(n)$ being the canonical natural of $\mathbb{R}$ ([[lem-finite-sum-laws]], [[def-finite-sum]], [[def-canonical-natural]]).

[L3] For $a,b \ge 0$: $a \le b$ exactly when $a^2 \le b^2$; every $a \ge 0$ has a unique nonnegative square root; and $\sqrt{c^2} = |c|$ for every real $c$ ([[lem-of-square-monotone]], [[thm-of-square-roots]], [[def-abs-value]]).

[L4] A subset $A$ is compact exactly when every family $(U_i)_{i \in I}$ of open subsets of the ambient space with $A \subseteq \bigcup_{i \in I} U_i$ has finitely many members whose union contains $A$, or $A = \emptyset$; and the sets open in the subspace $A$ are exactly the traces on $A$ of the open subsets of the ambient space, so, taking complements inside $A$, the sets closed in $A$ are exactly the traces on $A$ of the closed subsets of the ambient space ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]], [[def-metric-topology]], [[def-isometry-and-metric-embedding]]).

[L5] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[L6] A closed subset of a compact metric space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[L7] Nested closed bounded intervals $I_m = [\alpha_m,\beta_m]$ with $I_{m+1} \subseteq I_m$ have nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$ ([[thm-nested-interval-property]], [[def-interval]], [[def-real-limit]]).

[L8] Recursion: for a set $A$, an element $a \in A$ and $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(m+1) = f(g(m))$; a stage-dependent rule is handled on $A = \mathbb{N} \times Z$, the first coordinate of $g(m)$ then being $m$ ([[thm-recursion]], [[def-finite-sum]]).

[L9] $(1/2)^m \to 0$, integer powers being those of [[def-integer-power]] ([[lem-geometric-sequence-null]], [[def-real-limit]]).

[L10] A nonempty finite set of reals has a maximum, one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L11] $U$ is open exactly when every point of $U$ has a ball inside $U$; a subset is bounded when it is empty or lies in some ball $B(x_0,\rho)$ with $\rho > 0$ ([[def-metric-topology]], [[def-metric-ball]], [[def-metric-bounded-diameter]]).

[L12] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 For $x,y \in \mathbb{R}^n$ and $k < n$ the term $(x_k-y_k)^2$ is one of the nonnegative terms of $\sum_{j<n}(x_j-y_j)^2$, so $(x_k-y_k)^2 \le d_2(x,y)^2$, and taking nonnegative square roots gives $|x_k - y_k| \le d_2(x,y)$; hence $d_\infty(x,y) \le d_2(x,y)$. [L1, L2, L3]

1.2 Conversely each $(x_j-y_j)^2 \le d_\infty(x,y)^2$, so $d_2(x,y)^2 \le \iota(n)\,d_\infty(x,y)^2 \le \big(\iota(n) d_\infty(x,y)\big)^2$, the last step because $\iota(n) \ge 1$; hence $d_2(x,y) \le \iota(n)\, d_\infty(x,y)$. [L1, L2, L3]

2.1 For claim 1 fix reals $a_k \le b_k$ $(k<n)$ and the box $Q$ they determine, let $(U_i)_{i \in I}$ be open subsets of $\mathbb{R}^n$ with $Q \subseteq \bigcup_{i \in I} U_i$, call a set $S \subseteq \mathbb{R}^n$ **finitely covered** when finitely many of the $U_i$ have union containing $S$, and suppose for contradiction that $Q$ is not finitely covered. [L4, step 1.1, step 1.2, assume-contra]

3.1 For a box $P = \{\, x : c_j \le x_j \le e_j \ (j<n) \,\}$ with $c_j \le e_j$ and for $k < n$, let $P^{k,0}$ and $P^{k,1}$ be the boxes obtained by replacing the $k$-th interval $[c_k,e_k]$ by $[c_k, (c_k+e_k)/2]$ and by $[(c_k+e_k)/2, e_k]$; then $P = P^{k,0} \cup P^{k,1}$ by trichotomy applied to $x_k$ against the midpoint, the $k$-th side length of each is $(e_k-c_k)/2$ and the others are unchanged, and if both halves were finitely covered so would $P$ be, the union of two finite subfamilies being finite. Define $H_k(P) := P^{k,0}$ if $P^{k,0}$ is not finitely covered, and $H_k(P) := P^{k,1}$ otherwise; this is a definition by a property, and $H_k(P)$ is not finitely covered whenever $P$ is. [L7, step 2.1]

4.1 Recursion on $\mathbb{N} \times Z$, with $Z$ the set of functions from boxes to boxes, starting value $(0, \mathrm{id})$ and rule $(j, h) \mapsto (j+1,\ H_j \circ h)$ for $j < n$ and $(j,h) \mapsto (j+1,h)$ otherwise, produces $G_j$ for every $j$; put $G := G_n$. By induction on $j \le n$, $G_j(P) \subseteq P$ is a box whose $k$-th side is half that of $P$ for $k < j$ and equal to that of $P$ for $k \ge j$, and $G_j(P)$ is not finitely covered when $P$ is not. So $G(P) \subseteq P$ halves every side and preserves not being finitely covered. [L8, step 3.1]

5.1 Recursion applied to the starting value $Q$ and the rule $G$ produces boxes $P_m$ with $P_0 = Q$ and $P_{m+1} = G(P_m)$; each $P_m$ fails to be finitely covered, $P_{m+1} \subseteq P_m$, and the $k$-th side length of $P_m$ is $\ell_k (1/2)^m$, where $\ell_k := b_k - a_k \ge 0$. [L8, step 4.1]

6.1 For each $k < n$ the $k$-th intervals of the $P_m$ form a nested family of closed bounded intervals whose lengths $\ell_k(1/2)^m$ tend to $0$, so their intersection is a single point $p_k$; the function $p : n \to \mathbb{R}$, $k \mapsto p_k$, is a point of $\mathbb{R}^n$ lying in every $P_m$. [L7, L9, step 5.1]

7.1 Since $p \in P_0 = Q \subseteq \bigcup_{i \in I} U_i$, there is $i^{\ast} \in I$ with $p \in U_{i^{\ast}}$, and openness gives a real $r > 0$ with $B(p,r) \subseteq U_{i^{\ast}}$. [L11, step 6.1]

8.1 Put $L := \max\{\ell_k : k < n\} \ge 0$ and $C := \iota(n) L + 1 > 0$; for $x \in P_m$ each $|x_k - p_k|$ is at most the $k$-th side length of $P_m$, so $d_\infty(x,p) \le L (1/2)^m$ and $d_2(x,p) \le \iota(n) L (1/2)^m \le C (1/2)^m$ by step 1.2. Taking a natural $N \ge 1$ with $1/N < r/C$ and then $m$ with $(1/2)^m < 1/N$ gives $P_m \subseteq B(p,r) \subseteq U_{i^{\ast}}$, so $P_m$ is finitely covered by the single set $U_{i^{\ast}}$, contradicting step 5.1. [L9, L10, L12, step 1.2, step 5.1, step 6.1, step 7.1, discharge-contradiction]

9.1 Therefore every such family has finitely many members covering $Q$, and $Q$ is a compact subset of $(\mathbb{R}^n,d_2)$: claim 1 is proved. [L4, step 2.1, step 8.1]

10.1 For claim 2, a compact $K \subseteq \mathbb{R}^n$ is closed and bounded. [L5, step 9.1]

11.1 Conversely let $K \subseteq \mathbb{R}^n$ be closed and bounded; if $K = \emptyset$ it is compact, and otherwise $K \subseteq B(x_0,\rho)$ for some $x_0$ and real $\rho > 0$, so every $x \in K$ and $k < n$ satisfy $|x_k| \le |(x_0)_k| + |x_k - (x_0)_k| \le |(x_0)_k| + d_2(x,x_0) < |(x_0)_k| + \rho$ by step 1.1; with $M := \max\{|(x_0)_k| : k < n\} + \rho$ the box $Q_M := \{\, x : -M \le x_k \le M \ (k<n) \,\}$ contains $K$. [L10, L11, step 1.1, step 10.1]

12.1 $K$ is the trace on $Q_M$ of a closed subset of $\mathbb{R}^n$, namely of $K$ itself, so $K$ is closed in the metric subspace $Q_M$; that subspace is compact by step 9.1, so $K$ is compact, and claim 2 is proved. [L4, L6, step 9.1, step 11.1]

13.1 For claim 3, let $\psi : \mathbb{R} \to \mathbb{R}^1$ send $t$ to the function $1 \to \mathbb{R}$ with value $t$; it is a bijection and $d_2(\psi(s),\psi(t)) = \sqrt{(s-t)^2} = |s-t| = d_{\mathbb{R}}(s,t)$, so $\psi$ carries each ball onto the corresponding ball, hence open sets onto open sets and open covers onto open covers with matching finite subfamilies, and likewise closed sets onto closed sets and bounded sets onto bounded sets. Applying claim 2 with $n = 1$ to $\psi[K]$ therefore gives claim 3. [L1, L3, L4, L11, step 12.1] ∎

## Remarks

**Why the bisection halves one coordinate at a time.** Halving all $n$ coordinates at once produces $2^n$ sub-boxes, and choosing one of them canonically means enumerating them, which needs a bijection between the functions $n \to \{0,1\}$ and a natural number. Halving a single coordinate produces two sub-boxes, and "the left one if it is still not finitely covered, the right one otherwise" is a definition by cases needing nothing at all. Composing $n$ such halvings, as step 4.1 does, recovers the full halving of every side and keeps the construction canonical, which is what a choice-free proof requires.

**Where each hypothesis is used.** Closedness enters only at step 12.1, through [[lem-closed-subset-of-a-compact-space-is-compact]]; boundedness enters only at step 11.1, to fit $K$ inside a box. Dropping either leaves a non-compact set: the whole of $\mathbb{R}^n$ is closed and unbounded, and an open ball is bounded and not closed, and neither is compact by claim 2.

**The converse direction is what fails in a general metric space.** Claim 2 says that in $\mathbb{R}^n$ closed and bounded is enough; that is special to $\mathbb{R}^n$, and [[fs-closed-and-bounded-implies-compact-in-every-metric-space]] records the false general statement together with a witness. What survives in every metric space is only the direction of step 10.1 ([[thm-compact-subset-is-closed-and-bounded]]).

**The case $n = 0$.** $\mathbb{R}^0$ has exactly one element, the empty function, and [[lem-metrics-on-rn]] does not treat it, because $d_\infty$ would be a maximum over the empty index set. On a one-element set the only metric is the one taking the value $0$, and the resulting space is compact for trivial reasons: it is listed as $\{x_0\}$, and any family of open sets covering it has a member containing $x_0$ ([[def-metric-compactness]]). Nothing above is needed for that case and nothing above claims it.
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````

