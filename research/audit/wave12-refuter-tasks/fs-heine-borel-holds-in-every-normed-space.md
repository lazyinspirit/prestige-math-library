## Selection reasons

- critical risk (10): 33 declared dependencies; 32 cited facts; 8 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (33 outgoing relationships)

## Target item — `fs-heine-borel-holds-in-every-normed-space`

Normalized current SHA-256: `8c12a9091a64c2af2e2a0c7e012a9b690e8834841a99bb4870aee0bf767451d7`

The complete exact-current item follows, including frontmatter:

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

## Wave 12 provenance row

```json
{
  "id": "fs-heine-borel-holds-in-every-normed-space",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html",
    "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
  ],
  "rationale": "FALSE: in every normed space a closed bounded set is compact: The literature gives the standard norm definitions and finite-dimensional equivalence, compactness, or coordinate results; the item specializes it to the library’s zero-based function model of R^n, named published metrics, and explicit n-boundary conventions, and sometimes bundles consequences or a refuting witness. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "fs-all-norms-on-any-real-vector-space-are-equivalent",
      "source_section": "Statement",
      "quote": "**False claim:** any two norms on a real vector space are equivalent ([[def-norm-and-normed-space]], [[def-equivalent-norms]]). What is true is the same statement for $\\mathbb{R}^{n}$ with $n$ a natural number, which is [[thm-all-norms-on-rn-are-equivalent]]. Dropping the hypothesis that the space is one of the $\\mathbb{R}^{n}$ makes the claim false, and the witness below is built from published material only. **The witness.** Let $\\mathbb{R}^{\\mathbb{N}}$ be the function space of all functions $\\mathbb{N} \\to \\mathbb{R}$ with pointwise operations ([[def-function-space]]), and let $$V \\;:=\\; \\bigl\\{\\, v \\in \\mathbb{R}^{\\mathbb{N}} \\;:\\; \\text{there is } K \\in \\mathbb{N} \\text{ with } v_j = 0 \\text{ for every } j \\ge K \\,\\bigr\\}$$ be the set of **finitely supported** sequences. On $V$ define $$N_1(v) := \\sum_{j<K}|v_j|, \\qquad N_\\infty(v) := \\max\\{\\, |v_j| : j<K \\,\\},$$ for any $K \\ge 1$ with $v_j = 0$ for $j \\ge K$. Both are norms on $V$, both values are independent of the admissible $K$ chosen, and **no real $C$ satisfies $N_1 \\le C\\,N_\\infty$ on $V$**.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-function-space",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) and let $X$ be any set. Write $$F^{X} \\;:=\\; \\{\\, f \\;:\\; f \\text{ is a function } X \\to F \\,\\},$$ and for $f \\in F^{X}$ write $f(x)$ for its value at $x \\in X$. Two elements of $F^{X}$ are equal exactly when they agree at every point of $X$. Define $$(f + g)(x) \\;:=\\; f(x) + g(x), \\qquad (\\lambda f)(x) \\;:=\\; \\lambda\\, f(x), \\qquad 0_{F^{X}}(x) \\;:=\\; 0_F,$$ for $f, g \\in F^{X}$, $\\lambda \\in F$ and $x \\in X$, the operations on the right being those of $F$. These are the **pointwise** operations. **These rules really are the required data.** For $f, g \\in F^{X}$ the assignment $x \\mapsto f(x) + g(x)$ is a function $X \\to F$, so $+$ is a binary operation $F^{X} \\times F^{X} \\to F^{X}$ ([[def-binary-operation]]); for $\\lambda \\in F$ and $f \\in F^{X}$ the assignment $x \\mapsto \\lambda f(x)$ is a function $X \\to F$, so scalar multiplication is a map $F \\times F^{X} \\to F^{X}$; and $0_{F^{X}}$, the constant function at $0_F$, is an element of $F^{X}$. **$F^{X}$ is a vector space over $F$** ([[def-vector-space]]). Each axiom is an equation between elements of $F^{X}$, hence holds exactly when it holds at every $x \\in X$ after evaluation, and there it is the corresponding field axiom applied to the values $f(x), g(x), \\lambda, \\mu$: - associativity and commutativity of $+$, and $f + 0_{F^{X}} = f$, come from the same laws for $+$ in $F$; the additive inverse of $f$ is $x \\mapsto -f(x)$, which lies in $F^{X}$ and satisfies $f + (-f) = 0_{F^{X}}$ pointwise. This is axiom (V1); - $\\bigl(\\lambda(f+g)\\bigr)(x) = \\lambda(f(x)+g(x)) = \\lambda f(x) + \\lambda g(x)$ is (V2), by distributivity in $F$; - $\\bigl((\\lambda+\\mu)f\\bigr)(x) = (\\lambda+\\mu)f(x) = \\lambda f(x) + \\mu f(x)$ is (V3), by distributivity in $F$; - $\\bigl((\\lambda\\mu)f\\bigr)(x) = (\\lambda\\mu)f(x) = \\lambda(\\mu f(x))$ is (V4), by associativity of multiplication in $F$; - $(1_F f)(x) = 1_F f(x) = f(x)$ is (V5), by the multiplicative identity law in $F$. ### The case $X = n$ A natural number is a von Neumann natural ([[def-natural-numbers]]), that is a set, and $n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$ ([[lem-nat-order-is-membership]]). Taking $X = n$ therefore gives $$F^{n} \\;=\\; \\{\\, x \\;:\\; x \\text{ is a function } n \\to F \\,\\},$$ whose elements are written $x = (x_0, x_1, \\dots, x_{n-1})$ with $x_i := x(i)$ for $i < n$. **The coordinates are indexed from $0$**, because $0 \\in n$ whenever $n \\ne 0$ and $n \\notin n$ always. The operations read $$(x + y)_i = x_i + y_i, \\qquad (\\lambda x)_i = \\lambda x_i \\qquad (i < n),$$ and the zero of $F^{n}$ is the tuple all of whose coordinates are $0_F$. **The two boundary cases.** $\\mathbb{N}$ contains $0$, so $n = 0$ is a genuine case. Since $0 = \\varnothing$, the set $F^{0} = F^{\\varnothing}$ has exactly one element, the empty function; that element is $0_{F^{0}}$, so $F^{0}$ is the **zero space** $\\{0_{F^{0}}\\}$, not the empty set. For $n = 1$ we have $1 = \\{0\\}$, and the map $F^{1} \\to F$ sending $x$ to its single coordinate $x_0$ is a bijection satisfying $(x+y)_0 = x_0 + y_0$ and $(\\lambda x)_0 = \\lambda x_0$; we use it to read $F^{1}$ as $F$ where convenient. (No general notion of isomorphism of vector spaces is available on this page, and none is claimed here: what is asserted is exactly the displayed bijection and the two displayed equations.)",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-vector-space",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative identity $1_F$, and the field axioms as stated there. A **vector space over $F$**, also called an **$F$-vector space**, consists of - a set $V$, whose elements are called **vectors**; - a binary operation $+ : V \\times V \\to V$ on $V$ ([[def-binary-operation]]), the **vector addition**; - an element $0_V \\in V$, the **zero vector**; - a map $\\cdot \\,:\\, F \\times V \\to V$, the **scalar multiplication**, written $\\lambda v := \\cdot(\\lambda, v)$; subject to the following axioms, in which $u, v \\in V$ and $\\lambda, \\mu \\in F$ are arbitrary. - **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative and commutative, $0_V$ is a two-sided identity for $+$ ([[def-identity-element]]), and every $v \\in V$ has an additive inverse ([[def-invertible-element]]). - **(V2)** $\\lambda(u + v) = \\lambda u + \\lambda v$. - **(V3)** $(\\lambda + \\mu)v = \\lambda v + \\mu v$. - **(V4)** $(\\lambda\\mu)v = \\lambda(\\mu v)$. - **(V5)** $1_F v = v$. The elements of $F$ are called **scalars**. When several vector spaces are in play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive inverse of $v$ and $u - v := u + (-v)$. **The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some two-sided identity and some additive inverses exist. That there is at most one two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are proved before [[def-group]] and are inherited here with the group structure. So $0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them. **What (V1) buys, and why it is not restated.** Associativity, commutativity, the identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$, cancellation ([[lem-group-cancellation]]) and the inverse identities ([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from the group page wherever they are used and are never proved again for vectors.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-linear-subspace",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset $W \\subseteq V$ is a **linear subspace** of $V$ when - **(W1)** $0_V \\in W$; - **(W2)** $W$ is closed under the vector addition: $u, v \\in W$ implies $u + v \\in W$; - **(W3)** $W$ is closed under scalar multiplication: $\\lambda \\in F$ and $v \\in W$ imply $\\lambda v \\in W$. Every vector space $V$ has the two **trivial linear subspaces** $\\{0_V\\}$ and $V$ itself; a linear subspace $W$ with $W \\ne V$ is called **proper**. **The restricted operations are the required data, and $W$ is a vector space.** By (W2) the vector addition of $V$ restricts to a binary operation $W \\times W \\to W$, and by (W3) the scalar multiplication restricts to a map $F \\times W \\to W$. With these and the element $0_V$, the set $W$ is a vector space over $F$: - axioms (V2)–(V5) are equations required of elements of $W$, which are in particular elements of $V$, so they are inherited from $V$; likewise associativity and commutativity of the restricted addition; - $0_V$ lies in $W$ by (W1) and is a two-sided identity for the restricted addition, since it is one in $V$; - for $v \\in W$ the vector $(-1_F)v$ lies in $W$ by (W3), and $(-1_F)v = -v$ ([[lem-vector-space-elementary-consequences]]), so $-v \\in W$ and $v + (-v) = 0_V$ holds in $W$. So $(W,+,0_V)$ is an abelian group, which is axiom (V1), and $W$ is a vector space over $F$ **whose zero vector and whose additive inverses are those of $V$**. In the language of [[def-subgroup]], the three displayed conditions (S1) $0_V \\in W$, (S2) closure under addition and (S3) closure under additive inverses all hold, so $W$ is a subgroup of the abelian group $(V,+,0_V)$ ([[def-group]]); that reading, and its converse, are recorded as [[lem-linear-subspace-is-a-subgroup]] and are cited from there rather than re-argued below.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-linear-subspace-criterion",
      "source_section": "Statement",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let $W \\subseteq V$ be **nonempty**. Then $W$ is a linear subspace of $V$ ([[def-linear-subspace]]) **if and only if** $$\\lambda u + v \\in W \\qquad \\text{for all } \\lambda \\in F \\text{ and all } u, v \\in W .$$ Nonemptiness cannot be dropped: the empty set satisfies the displayed condition vacuously and is not a linear subspace, since it does not contain $0_V$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the set $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]). What is proved below is exactly the displayed statement, by induction on $n$. The usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a maximum and a minimum*, follows once one identifies the nonempty finite subsets of $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That identification is recorded as a stipulation in the Given below, because this page has no definition of finiteness to prove it against. **It is discharged, not merely assumed**: [[lem-finite-subsets-listable]] proves that the two descriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is recorded in `justified_by` rather than in `deps`, since it is about the sets this lemma quantifies over and therefore depends on this one. This is what licenses the notation $\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of **real** numbers from this page onwards.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$. - $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$ for every $s \\in S$. - $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$ for every $s \\in S$. A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then $m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so $m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]). The same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
      "source_section": "Statement",
      "quote": "**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about $\\mathbb{R}^{n}$ with $n \\ge 1$.** 1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over $\\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every $p \\in \\mathbb{N}$ and every list $u : p \\to V$ ([[def-linear-combination-and-span]]), $$N\\Bigl(\\sum_{j<p} u_j\\Bigr) \\;\\le\\; \\sum_{j<p} N(u_j),$$ and for all $u, w \\in V$, $$\\bigl|N(u) - N(w)\\bigr| \\;\\le\\; N(u - w).$$ Now let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^{n}$ carry the norms of [[def-p-norms-on-rn]] and write $\\iota$ for the canonical natural ([[def-canonical-natural]]). 2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on $\\mathbb{R}^{n}$ and put $C := \\max\\{\\, N(e_k) : k<n \\,\\}$, a maximum over a nonempty finite set of reals ([[lem-standard-basis-of-f-n]], [[lem-finite-set-has-max]]). Then $C \\ge 0$ and $$N(x) \\;\\le\\; C\\,\\lVert x\\rVert_1 \\qquad \\text{for every } x \\in \\mathbb{R}^{n}.$$ 3. **The comparison chain.** For every $x \\in \\mathbb{R}^{n}$, $$\\lVert x\\rVert_\\infty \\;\\le\\; \\lVert x\\rVert_2 \\;\\le\\; \\lVert x\\rVert_1 \\;\\le\\; \\iota(n)\\,\\lVert x\\rVert_\\infty , \\qquad \\lVert x\\rVert_1 \\;\\le\\; \\sqrt{\\iota(n)}\\;\\lVert x\\rVert_2 .$$ In particular $\\lVert\\cdot\\rVert_1$, $\\lVert\\cdot\\rVert_2$ and $\\lVert\\cdot\\rVert_\\infty$ are pairwise equivalent norms on $\\mathbb{R}^{n}$, with the constants displayed ([[def-equivalent-norms]]). 4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in clause 2, $N : (\\mathbb{R}^{n}, d_2) \\to (\\mathbb{R}, d_{\\mathbb{R}})$ is Lipschitz with constant $C\\sqrt{\\iota(n)}$ ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]], [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]). **Where $n \\ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to exist, and clause 3 mentions $\\lVert\\cdot\\rVert_\\infty$; at $n = 0$ each is a maximum over the empty index set and does not exist, exactly as in [[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis on the dimension and no hypothesis on the space.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L2",
      "source": "def-metric-space",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]). Let $X$ be a set. A **metric** on $X$ is a function $d : X \\times X \\to \\mathbb{R}$ such that for all $x, y, z \\in X$: - **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$. - **(M2) Symmetry.** $d(x,y) = d(y,x)$. - **(M3) Triangle inequality.** $d(x,z) \\le d(x,y) + d(y,z)$. A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from $x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when several are, the metric is always named. **The values of a metric are real numbers.** The codomain is $\\mathbb{R}$, so $d(x,y)$ is an honest element of the complete ordered field and every inequality above is an inequality there. No infinite value is permitted; [[rem-metric-axiom-conventions]] records why extended metrics are not treated in this library. **Nonnegativity is deliberately absent from the axiom list.** Many texts add a fourth axiom $d(x,y) \\ge 0$. It is redundant: (M1), (M2) and (M3) already force it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that lemma is available. **Pseudometric.** A **pseudometric** on $X$ is a function $p : X \\times X \\to \\mathbb{R}$ satisfying (M2), (M3) and the weakening - **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \\in X$ of (M1). A pseudometric may therefore assign distance $0$ to two distinct points. Every metric is a pseudometric, and a pseudometric is a metric exactly when $p(x,y) = 0$ forces $x = y$. **Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition satisfies - **(M3') Strong triangle inequality.** $d(x,z) \\le \\max\\{d(x,y), d(y,z)\\}$ for all $x, y, z \\in X$, where the maximum is that of a two-element subset of $\\mathbb{R}$, which exists and is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair $(X,d)$ with $d$ an ultrametric.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-topology",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]). A subset $U \\subseteq X$ is **open in $(X,d)$** if for every $x \\in U$ there is a real $r > 0$ with $B(x,r) \\subseteq U$ ([[def-metric-ball]]). A subset $F \\subseteq X$ is **closed in $(X,d)$** if its complement $X \\setminus F$ is open. The collection $$\\mathcal{T}_d := \\{\\, U \\subseteq X : U \\text{ is open in } (X,d) \\,\\}$$ of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$ that is both open and closed is called **clopen**. **Two sets are open for trivial reasons.** $\\emptyset$ is open, because the defining condition quantifies over no points; and $X$ is open, because $B(x,r) \\subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and $\\emptyset$ are also closed, and both are clopen. **A neighbourhood of a point $x$** is any open set containing $x$. The condition above therefore reads: $U$ is open exactly when every point of $U$ has a ball around it inside $U$, and it is the balls alone that have to be tested. **The metric, not the set, determines $\\mathcal{T}_d$.** Two metrics on the same set may have different metric topologies, and two different metrics may have the same one; the systematic comparison is [[def-equivalent-metrics]].",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-ball",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \\in X$ and let $r \\in \\mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define $$B(x,r) := \\{\\, y \\in X : d(x,y) < r \\,\\}, \\qquad \\bar B(x,r) := \\{\\, y \\in X : d(x,y) \\le r \\,\\}, \\qquad S(x,r) := \\{\\, y \\in X : d(x,y) = r \\,\\}.$$ $B(x,r)$ is the **open ball**, $\\bar B(x,r)$ the **closed ball** and $S(x,r)$ the **sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly positive real; a ball of radius $0$ or of negative radius is never written in this library. **Immediate consequences of the definitions.** For every $x \\in X$ and $r > 0$: - $x \\in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]); in particular open and closed balls are nonempty. - $B(x,r) \\subseteq \\bar B(x,r)$ and $S(x,r) \\subseteq \\bar B(x,r)$, and $\\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of the order of $\\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]): each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$. - If $0 < s \\le r$ then $B(x,s) \\subseteq B(x,r)$ and $\\bar B(x,s) \\subseteq \\bar B(x,r)$, by transitivity of the order. - Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the radius convention, and it forces it for the **open** ball only: if $r \\le 0$ then $B(x,r) = \\{y : d(x,y) < r\\}$ is empty, because $d(x,y) \\ge 0 \\ge r$ for every $y$. The other two sets behave differently at $r = 0$, and the convention $r > 0$ excludes them for uniformity rather than for emptiness: $\\bar B(x,0) = S(x,0) = \\{x\\}$, since $d(x,y) \\le 0$ together with $d(x,y) \\ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all three sets are empty. **A sphere may be empty, and so the three sets are not on a par.** For $r > 0$ the open and closed balls always contain $x$, but nothing in the definition produces a point at distance exactly $r$ from $x$. If a metric takes only the values $0$ and $1$, as the discrete metric on the companion page does, then $S(x,2) = \\emptyset$ while $B(x,2) = \\bar B(x,2)$ is the whole space. So nonemptiness of a sphere is never available by convention: where it is used, it is proved. **The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and not on $x$ and $r$ alone. When more than one space or more than one metric is in play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\\bar B$ and $S$. This matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a ball of a subspace is the trace on it of a ball of the ambient space, and the two are different sets.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-bounded-diameter",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A, B \\subseteq X$. **Bounded subset.** $A$ is **bounded** if $A = \\emptyset$ or there are $x_0 \\in X$ and a real $r > 0$ with $A \\subseteq B(x_0, r)$ ([[def-metric-ball]]). The space $(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself. **Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and bounded, and put $$D(A) := \\{\\, d(a,b) : a, b \\in A \\,\\} \\subseteq \\mathbb{R}.$$ Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and $r$ with $A \\subseteq B(x_0,r)$, every $a, b \\in A$ satisfy $d(a,b) \\le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry ([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]], [[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$ ([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\\mathbb{R}$ by the least-upper-bound property ([[def-complete-ordered-field]]), and that bound is unique ([[lem-sup-unique]]). Define $$\\operatorname{diam}(A) := \\sup D(A).$$ **Distance from a point to a set, for nonempty $A$ only.** Let $x \\in X$ and let $A$ be nonempty, and put $E(x,A) := \\{\\, d(x,a) : a \\in A \\,\\}$. Then $E(x,A)$ is nonempty and bounded below by $0$, since a metric is nonnegative ([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]]. Define $$d(x,A) := \\inf E(x,A).$$ **Distance between two sets, for nonempty $A$ and $B$ only.** Put $E(A,B) := \\{\\, d(a,b) : a \\in A,\\ b \\in B \\,\\}$, again nonempty and bounded below by $0$, and define $$d(A,B) := \\inf E(A,B).$$ **Every one of the three scope restrictions is load bearing.** In this library $\\sup$ and $\\inf$ denote real numbers and are written only after existence has been established; the extended real line is introduced on a later page and is not used for the suprema and infima taken here, and no convention $\\sup \\emptyset = -\\infty$ is in force in this development ([[rem-sup-conventions]]). Accordingly: - $\\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and** bounded. It is not defined for $A = \\emptyset$, and it is not defined, not even as an infinite value, for an unbounded $A$. - $d(x,A)$ is defined exactly when $A \\ne \\emptyset$, and $d(A,B)$ exactly when both $A$ and $B$ are nonempty. No boundedness is needed for these two, because $0$ is always a lower bound.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-compact-implies-the-other-compactness-forms",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), with compactness as in [[def-metric-compactness]] and the three variants as in [[def-metric-compactness-variants]]. Then: 1. If $(X,d)$ is compact, it is countably compact. 2. If $(X,d)$ is compact, it is limit point compact. 3. If $(X,d)$ is countably compact, it is sequentially compact. 4. If $(X,d)$ is limit point compact, it is sequentially compact. **Every one of the four is a theorem of ZF.** Where a subsequence is extracted, the index at each stage is the **least** admissible one, which [[thm-well-ordering-principle]] makes canonical and [[thm-recursion]] then assembles into a function; where finitely many indices have to be recovered from finitely many sets, [[lem-finite-choice]] supplies them and is itself a theorem of ZF. Nothing below appeals to countable or to dependent choice.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-metric-compactness-variants",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in [[def-metric-topology]] and open covers, subcovers, finiteness and compactness as in [[def-metric-compactness]]. - $(X,d)$ is **countably compact** when every open cover $\\mathcal{U}$ of $X$ that is at most countable ([[def-countable]]) has a finite subcover. - $(X,d)$ is **sequentially compact** when every sequence $(x_k)$ in $X$, that is every function $x : \\mathbb{N} \\to X$ ([[def-sequence]]), has a subsequence $(x_{n_j})$ converging to a point of $X$ ([[def-metric-convergence]]), the index map $n : \\mathbb{N} \\to \\mathbb{N}$ being strictly increasing ([[lem-index-map-grows]]). - $(X,d)$ is **limit point compact** when every infinite subset $A \\subseteq X$ has a limit point in $X$, that is a point $p \\in X$ with $B(p,r) \\cap (A \\setminus \\{p\\}) \\ne \\emptyset$ for every real $r > 0$ ([[def-metric-interior-closure-boundary]]). Here *infinite* means not finite in the sense of [[def-countable]], equivalently not listable as $\\{a_0, \\dots, a_n\\}$ and not empty ([[def-metric-compactness]]). A subset $A \\subseteq X$ is called countably compact, sequentially compact or limit point compact when the metric subspace $(A, d_A)$ is ([[def-isometry-and-metric-embedding]]), exactly as for compactness. **The countable covers may be listed.** A nonempty at most countable family $\\mathcal{U}$ admits a surjection $\\mathbb{N} \\to \\mathcal{U}$ ([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for every sequence $(U_n)_{n \\in \\mathbb{N}}$ of open sets with $X = \\bigcup_{n \\in \\mathbb{N}} U_n$ there are finitely many indices whose sets already cover $X$. That surjection is produced from the countability assumption alone and no choice principle is involved; the empty family covers only the empty space, which is compact anyway. **Limit points are computed where the set lives.** For $S \\subseteq A \\subseteq X$ and $a \\in A$, the identity $B_A(a,r) = B_X(a,r) \\cap A$ ([[def-isometry-and-metric-embedding]]) shows that $a$ is a limit point of $S$ in the subspace $(A,d_A)$ exactly when $a$ is a limit point of $S$ in $X$ and lies in $A$. So \"$A$ is limit point compact\" says that every infinite $S \\subseteq A$ has a limit point **belonging to $A$**; a limit point outside $A$ does not count, and that is what distinguishes the property from a statement about $X$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-metric-compactness",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in [[def-metric-topology]] and balls as in [[def-metric-ball]]. - An **open cover** of $(X,d)$ is a family $\\mathcal{U}$ of open subsets of $X$ with $X = \\bigcup \\mathcal{U}$, where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is itself an open cover. - A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\emptyset$ or there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and harmless. - $(X,d)$ is **compact** when every open cover of it has a finite subcover: for every open cover $\\mathcal{U}$, either $X = \\emptyset$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$X = U_0 \\cup \\dots \\cup U_n .$$ - A subset $A \\subseteq X$ is a **compact subset** of $X$ when the metric subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of $d$ to $A \\times A$ ([[def-isometry-and-metric-embedding]]). **Compactness of a subset is defined intrinsically, and only intrinsically.** The last clause speaks about the subspace $(A,d_A)$ and its own open sets, not about families of open subsets of the ambient $X$. The two readings do agree, but that is a theorem and not a convention: it is [[lem-compactness-is-intrinsic]], and no item of this library may use the ambient reading without citing it. Taking the intrinsic reading as the definition is what makes \"compact\" a property of the metric space $(A,d_A)$ alone, so that a set compact in one ambient space is compact in every other one containing it isometrically. **The empty space is compact**, since the empty subfamily of any family covers it; this is the reason the clause above is written with the two cases. The one-point space is compact too, and so is every space listed as $\\{x_0, \\dots, x_n\\}$: given a cover, each $x_i$ lies in some member, and finitely many members chosen in this way already cover. **The finiteness convention, and how it is used both ways.** \"Finite\" above is the listing form, matching the finite lists of [[def-finite-intersection-property]]. It agrees with the definition of finiteness by equinumerosity with a natural number ([[def-countable]]), and both directions of the agreement are available and are used below: - A nonempty finite set $F$ in the sense of [[def-countable]] satisfies $F \\approx m$ for some $m \\ge 1$, and a bijection $m \\to F$ is exactly a listing $F = \\{a_0, \\dots, a_{m-1}\\}$. - Conversely a set listed as $A = \\{a_0, \\dots, a_n\\}$, that is the image of a function $a$ with domain $\\sigma(n)$, is finite in the sense of [[def-countable]]: the map sending $x \\in A$ to the least $i \\le n$ with $a_i = x$ is an injection of $A$ into $\\sigma(n)$, so $A$ is equinumerous with a subset of $\\mathbb{N}$ bounded above, and such a subset is finite ([[lem-subset-of-countable]]). Neither direction uses a choice principle: the second selects nothing, taking a least index instead.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-isometry-and-metric-embedding",
      "source_section": "Definition",
      "quote": "Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]). **Isometric embedding and isometry.** A function $f : X \\to Y$ is an **isometric embedding** if $$d_Y\\big(f(x), f(x')\\big) = d_X(x,x') \\qquad \\text{for all } x, x' \\in X ,$$ and an **isometry** if it is in addition bijective ([[def-injection-surjection-bijection]]). Two metric spaces are **isometric** if some isometry between them exists. **Subspace metric.** Let $A \\subseteq X$ and let $$d_A := d_X \\restriction (A \\times A)$$ be the restriction of $d_X$ to pairs from $A$. Then $d_A$ is a metric on $A$: the three axioms (M1), (M2), (M3) of [[def-metric-space]] are conditions on triples of points, and each holds for points of $A$ because it holds for points of $X$. The pair $(A, d_A)$ is the **metric subspace** $A$ of $X$, and the inclusion $A \\to X$ is an isometric embedding by construction. The metric topology of $d_A$ ([[def-metric-topology]]) is the **subspace topology** of $A$. **Balls of a subspace are traces of balls of the ambient space.** For $a \\in A$ and $r > 0$, $$B_A(a,r) = B_X(a,r) \\cap A ,$$ directly from the definitions: a point $z$ lies in the left side exactly when $z \\in A$ and $d_A(a,z) = d_X(a,z) < r$ ([[def-metric-ball]]). This is why the ambient space is always written into the ball notation, and it is the source of every apparent paradox about balls in subspaces.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-metric-compactness-equivalences",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom of Dependent Choice ([[def-dependent-choice]]).** Let $(X,d)$ be a metric space ([[def-metric-space]]). Then the following five conditions are equivalent. - **(a)** $(X,d)$ is compact ([[def-metric-compactness]]). - **(b)** $(X,d)$ is countably compact ([[def-metric-compactness-variants]]). - **(c)** $(X,d)$ is limit point compact. - **(d)** $(X,d)$ is sequentially compact. - **(e)** $(X,d)$ is complete ([[def-complete-metric-space]]) and totally bounded ([[def-totally-bounded]]). **The two hypotheses are not needed everywhere, and the statement should not be read as if they were.** Of the implications assembled below, all but two are theorems of ZF. Dependent choice is used only for \"sequentially compact implies totally bounded\" ([[thm-sequentially-compact-implies-totally-bounded]]), and countable choice only for \"complete and totally bounded implies compact\" ([[thm-complete-and-totally-bounded-implies-compact]]). Each is an upper bound on the cost of the proof given in this library and not a claim of necessity; the implication-by-implication account is [[rem-compactness-choice-ledger-metric]].",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-metric-convergent-implies-cauchy",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a sequence in $X$ converging to $p \\in X$ ([[def-metric-convergence]]). Then $(x_k)$ is Cauchy in $(X,d)$ ([[def-cauchy-in-metric]]). The converse fails, and that failure is the subject of this page ([[fs-cauchy-implies-convergent-in-every-metric-space]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-cauchy-in-metric",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a sequence in $X$, that is a function $\\mathbb{N} \\to X$ written $x_k := x(k)$ ([[def-metric-convergence]], [[def-sequence]]). As everywhere in this library $\\mathbb{N}$ contains $0$, so a sequence is indexed from $0$. $(x_k)$ is a **Cauchy sequence in $(X,d)$** if for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ such that $$d(x_m, x_n) < \\varepsilon \\qquad \\text{for all } m, n \\ge K .$$ **Rational and real $\\varepsilon$ agree here.** The test is written with a rational $\\varepsilon$ to match [[def-real-limit]] and [[def-metric-convergence]], and nothing is lost by using a real one: below any real $\\eta > 0$ lies a positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for $\\eta$. So a proof may establish Cauchyness by producing an index for every real $\\varepsilon > 0$, and may use a Cauchy hypothesis at a real $\\varepsilon$ by first passing to a rational below it. Both moves are used on this page and are always cited. **The condition is exactly $d(x_m,x_n) \\to 0$ as $m$ and $n$ grow independently.** The distances $d(x_m,x_n)$ are nonnegative reals ([[lem-metric-nonnegativity]]), and the displayed condition asks them to be uniformly small on a tail of the doubly indexed family. It is not the same as $d(x_{k+1}, x_k) \\to 0$, which is a strictly weaker condition and is a standing source of error. The partial sums $H_n$ of the harmonic series separate the two: consecutive ones differ by $1/(n+1)$, which tends to $0$, while the sequence is unbounded, and an unbounded sequence of reals is not Cauchy ([[lem-metric-cauchy-bounded]]). **Consistency with the real line.** For $X = \\mathbb{R}$ with the usual metric $d(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]]) the condition above reads $|x_m - x_n| < \\varepsilon$ for $m,n \\ge K$, which is verbatim the definition of a Cauchy sequence of reals ([[def-real-limit]]). So the notion introduced here restricts on $\\mathbb{R}$ to the one already in use, and no ambiguity is created.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-metric-convergence",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]). A **sequence in $X$** is a function $x : \\mathbb{N} \\to X$, written $(x_k)$ with $x_k := x(k)$. As everywhere in this library, $\\mathbb{N}$ contains $0$ ([[def-natural-numbers]]) and a sequence is indexed from $0$ ([[def-sequence]]); an index range copied from a text that starts at $1$ must be shifted before it is used here. Let $(x_k)$ be a sequence in $X$ and $p \\in X$. The function $k \\mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$ ([[def-abs-value]]). Define $$x_k \\longrightarrow p \\text{ in } (X,d) \\quad :\\Longleftrightarrow \\quad d(x_k,p) \\longrightarrow 0 \\text{ in } \\mathbb{R},$$ the convergence on the right being that of [[def-real-limit]]. Unwound, this says: for every **rational** $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $d(x_k, p) < \\varepsilon$ for every $k \\ge K$. We then call $p$ a **limit** of $(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit. **Rational and real $\\varepsilon$ agree here, as they do on the real line.** [[def-real-limit]] tests convergence against rational $\\varepsilon$ only, and its own remark, restated for sequences in [[def-sequence]], records that nothing is lost: below any real $\\eta > 0$ lies a positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for $\\eta$. So a proof may establish convergence by producing an index for every real $\\varepsilon > 0$, and may use a convergence hypothesis at a real $\\varepsilon$ by first passing to a rational below it. Both moves are used on this page and are always cited. **Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the composite $x \\circ n$ for a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$, written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and $p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence converges to $p$, which is the metric-space form of [[def-subsequential-limit]].",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and $\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]). A **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write $x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or $(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is the subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$. Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices. - $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for every $k \\in \\mathbb{N}$; it is **unbounded** otherwise. - $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds for every $k \\ge K$. - $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some $k \\ge K$ for which $P(k)$ holds. - For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is again a sequence of reals. - A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$ along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$; it is again a sequence of reals. **Convergence and Cauchyness are not defined here.** They are already fixed, for sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$ is *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the toolkit for those two notions and does not restate them. A sequence **converges** if it converges to some real, and **diverges** if it does not.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-index-map-grows",
      "source_section": "Statement",
      "quote": "Let $n : \\mathbb{N} \\to \\mathbb{N}$ be a function, written $k \\mapsto n_k$, and recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$ ([[def-sequence]], [[def-nat-order]]). 1. **Consecutive comparisons suffice.** If $n_i < n_{\\sigma(i)}$ for every $i \\in \\mathbb{N}$, then $n$ is strictly increasing. 2. **Growth.** If $n$ is strictly increasing then $n_k \\ge k$ for every $k \\in \\mathbb{N}$. Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is what every later subsequence argument uses.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "Let $A$ and $B$ be sets and let $f : A \\to B$ be a function ([[def-function]]). - $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \\in A$. - $f$ is **surjective** (onto) if for every $b \\in B$ there is some $x \\in A$ with $f(x) = b$; equivalently, the image $f[A] := \\{ f(x) : x \\in A \\}$ equals $B$. - $f$ is **bijective** if it is both injective and surjective. For $S \\subseteq A$ we write $f[S] = \\{ f(x) : x \\in S \\}$ for the image of $S$, and for $T \\subseteq B$ we write $f^{-1}[T] = \\{ x \\in A : f(x) \\in T \\}$ for the preimage of $T$; these are the image and preimage of a set under $f$ read as a relation ([[def-image-and-preimage-under-a-relation]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-pigeonhole",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{N}$ be the von Neumann naturals, with $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$ ([[def-natural-numbers]]), and let $<$ be the order of [[def-nat-order]], so that $m < n \\iff m \\in n$ and $n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\}$ ([[lem-nat-order-is-membership]]). Write $\\approx$ for equinumerosity ([[def-equinumerous]]). Then: 1. for every $n \\in \\mathbb{N}$ there is **no injection** $\\sigma(n) \\to n$; 2. if $m < n$ then there is no injection $n \\to m$; 3. if $n \\approx m$ with $n, m \\in \\mathbb{N}$, then $n = m$; 4. $\\mathbb{N} \\not\\approx n$ for every $n \\in \\mathbb{N}$; 5. no natural number is equinumerous with a proper subset of itself: if $A \\subseteq n$ and $n \\approx A$, then $A = n$. Claim 1 is the pigeonhole principle in its sharpest form, that $n + 1$ pigeons do not fit injectively into $n$ holes; the other four are the consequences the library actually quotes. Claim 3 says a finite set is equinumerous with exactly one natural number, so \"the number of elements\" is well defined. Claim 4 says $\\mathbb{N}$ is infinite. Claim 5 says no natural number is Dedekind-infinite. **Why this is proved here.** The next item on this page defines finiteness as equinumerosity with a natural number, and the three size classes it introduces are exhaustive by construction but mutually exclusive only because of claim 4. Several later items also need claim 3 or claim 5. The principle is elementary and belongs with the naturals, but it is about counting rather than about order, so it is proved here, immediately before finiteness is defined, from induction and the identification of the order with membership alone. Nothing below uses ordinals, cardinals, or any later material.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "Recall that a natural number is a von Neumann natural ([[def-natural-numbers]]): $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$, so that $$n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$$ is itself the set of its predecessors. Here $<$ is the order of [[def-nat-order]], which is defined additively, so the displayed identity is a theorem and not a convention: it is [[lem-nat-order-is-membership]], proved immediately above. Let $A$ be a set, and let $\\approx$ be equinumerosity ([[def-equinumerous]]). - $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$. - $A$ is **countably infinite** if $A \\approx \\mathbb{N}$. - $A$ is **at most countable** if it is finite or countably infinite. - $A$ is **uncountable** if it is not at most countable.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of $x \\in F$ is $$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-standard-basis-of-f-n",
      "source_section": "Statement",
      "quote": "Let $F$ be a field ([[def-field]]), let $n \\in \\mathbb{N}$ and let $F^{n}$ be the function space on the von Neumann natural $n = \\{0, \\dots, n-1\\}$, with the pointwise operations ([[def-function-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector** $e_i \\in F^{n}$ by $$e_i(i) = 1_F, \\qquad e_i(j) = 0_F \\ \\text{ for } j < n \\text{ with } j \\ne i .$$ Then: 1. **Finite sums in a function space are pointwise.** For every set $X$, every $p \\in \\mathbb{N}$, every list $u : p \\to F^{X}$ and every $j \\in X$, $$\\Bigl(\\sum_{k<p} u_k\\Bigr)(j) \\;=\\; \\sum_{k<p} u_k(j),$$ the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary $X$ because the companion page needs it at $X = \\mathbb{N}$.) 2. $e : n \\to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in particular $e$ is injective and its image $e[n] = \\{\\, e_i : i < n \\,\\}$ is a basis of $F^{n}$ with $e[n] \\approx n$ ([[def-equinumerous]]); 3. for every $\\lambda : n \\to F$ and every $j < n$, $\\bigl(\\sum_{i<n}\\lambda_i e_i\\bigr)(j) = \\lambda_j$; equivalently the coordinate list of $x \\in F^{n}$ with respect to the ordered basis $e$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is $i \\mapsto x(i)$; 4. $F^{n}$ is finite-dimensional over $F$ with $\\dim_F F^{n} = n$ ([[def-dimension]]); 5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function, so $F^{0}$ is the zero space, the empty list is its ordered basis, $\\varnothing$ is its basis and $\\dim_F F^{0} = 0$. Every index runs from $0$, so the coordinates of an element of $F^{n}$ are $x_0, \\dots, x_{n-1}$ and no statement above is restricted to $n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-compact-implies-complete-and-totally-bounded",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a compact metric space ([[def-metric-compactness]], [[def-metric-space]]). Then $(X,d)$ is totally bounded ([[def-totally-bounded]]) and complete ([[def-complete-metric-space]]). **Both implications are theorems of ZF.** Completeness is obtained here from the finite intersection characterisation ([[thm-compact-iff-finite-intersection-property]]) applied to the closures of the tails of a Cauchy sequence, and not from the extraction of a convergent subsequence, which would route the argument through sequential compactness. What matters for the ledger is that the route taken below selects nothing at all; the first remark below says why the other route was not taken.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-totally-bounded",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\\varepsilon$ be a real with $\\varepsilon > 0$. - A **finite $\\varepsilon$-net** for $(X,d)$ is a finite subset $F \\subseteq X$ with $$X = \\bigcup_{y \\in F} B(y, \\varepsilon) ,$$ the balls being those of $(X,d)$ ([[def-metric-ball]]). *Finite* is the listing form fixed in [[def-metric-compactness]]: $F = \\emptyset$, or $F = \\{y_0, \\dots, y_m\\}$ for some $m \\in \\mathbb{N}$ and points $y_0, \\dots, y_m \\in X$. - $(X,d)$ is **totally bounded** when it has a finite $\\varepsilon$-net for every real $\\varepsilon > 0$. - A subset $A \\subseteq X$ is **totally bounded** when the metric subspace $(A,d_A)$ is ([[def-isometry-and-metric-embedding]]); its nets are then finite subsets of $A$ and its balls are the balls $B_A(a,\\varepsilon)$ of the subspace. **The empty space is totally bounded**, the empty net serving for every $\\varepsilon$, since a union over no indices is empty. Every space listed as $\\{x_0, \\dots, x_n\\}$ is totally bounded too, itself being an $\\varepsilon$-net for every $\\varepsilon$. **The centres are required to lie in the space.** Writing the condition with centres in $X$ and balls of $X$ is what makes total boundedness a property of the metric space $(X,d)$ alone, matching the treatment of compactness in [[def-metric-compactness]]. For a subset $A$ this matters: the nets of $(A,d_A)$ consist of points of $A$, not of nearby points of the ambient space. **Total boundedness is stronger than boundedness and is not the same thing.** A totally bounded space is bounded in the sense of [[def-metric-bounded-diameter]] — that is claim 1 of [[lem-totally-bounded-basic]] — and the converse fails, as [[fs-bounded-implies-totally-bounded]] records. Boundedness asks for one ball containing the space; total boundedness asks for finitely many balls of *every* prescribed radius, and it is the second condition that controls how spread out the space is at small scales.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Each $e_k$ lies in $V$, with $K = k+1$ admissible, and $N_\\infty(e_k) = 1$; so $e_k \\in K$ for every $k$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L7"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "For $j \\ne k$ the vector $e_j - e_k$ has coordinates $1$ at $j$, $-1$ at $k$ and $0$ elsewhere, so $N_\\infty(e_j-e_k) = 1$, that is $d(e_j,e_k) = 1$.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2",
        "L7"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "$K$ is bounded, since $K \\subseteq B(0,2)$: $v \\in K$ gives $d(v,0) = N_\\infty(v) \\le 1 < 2$.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "$K$ is closed in $(V,d)$. Let $v \\notin K$, so $N_\\infty(v) > 1$, and put $r := N_\\infty(v)-1 > 0$; if $d(w,v) < r$ then $N_\\infty(w) \\ge N_\\infty(v) - N_\\infty(v-w) > N_\\infty(v) - r = 1$, so $w \\notin K$. Hence the complement of $K$ is open.",
      "step": "1.4",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "No subsequence of $(e_k)$ is Cauchy in $(V,d)$: if $l \\mapsto e_{n_l}$ were, with $n$ strictly increasing and hence injective, then taking the tolerance $1/2$ would give indices $l \\ne l'$ with $d(e_{n_l},e_{n_{l'}}) < 1/2$, while $n_l \\ne n_{l'}$ and step 1.2 make that distance $1$.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L5"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Hence no subsequence of $(e_k)$ converges in the metric subspace $(K, d_K)$, a convergent sequence being Cauchy and $d_K$ being the restriction of $d$; so $(K,d_K)$ is not sequentially compact.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "If $K$ were compact then $(K,d_K)$ would be a compact metric space and hence sequentially compact, contradicting step 3.1. So [A1] is false, and with steps 1.3 and 1.4 the set $K$ is closed and bounded and not compact.",
      "step": "4.1",
      "inputs": [
        "step 1.3",
        "step 1.4",
        "step 3.1",
        "A1",
        "L4"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "The same family shows that $(K,d_K)$ is not totally bounded, which is the property the general characterisation identifies as missing. Suppose $\\{y_0,\\dots,y_p\\} \\subseteq K$ were a finite $1/2$-net. Assigning to each $k \\in \\mathbb{N}$ the least $i \\le p$ with $d(e_k,y_i) < 1/2$ gives a map $\\mathbb{N} \\to \\sigma(p)$, which cannot be injective by pigeonhole; so there are $j \\ne k$ and one $i$ with $d(e_j,y_i) < 1/2$ and $d(e_k,y_i) < 1/2$, whence $d(e_j,e_k) \\le d(e_j,y_i)+d(y_i,e_k) < 1$, contradicting step 1.2.",
      "step": "5.1",
      "inputs": [
        "step 1.2",
        "L6",
        "L8"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "fs-heine-borel-holds-in-every-normed-space: the Statement introduces no possibly empty family requiring a witness; its sequence domains are N or its displayed witness has a fixed nonempty domain."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.3: $K$ is bounded, since $K \\subseteq B(0,2)$: $v \\in K$ gives $d(v,0) = N_\\infty(v) \\le 1 < 2$."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "fs-heine-borel-holds-in-every-normed-space: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "fs-heine-borel-holds-in-every-normed-space: the Statement has no collapse, coincidence, constant-family, or equality-case branch beyond cases already included by its universal estimates."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "fs-heine-borel-holds-in-every-normed-space: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "fs-heine-borel-holds-in-every-normed-space: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "fs-heine-borel-holds-in-every-normed-space: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "fs-heine-borel-holds-in-every-normed-space: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-heine-borel-rn",
    "declared_target": "thm-heine-borel-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "declared_target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "declared_target": "fs-all-norms-on-any-real-vector-space-are-equivalent",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space-examples",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "fs-closed-and-bounded-implies-compact-in-every-metric-space",
    "declared_target": "fs-closed-and-bounded-implies-compact-in-every-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-topology",
    "declared_target": "def-metric-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-ball",
    "declared_target": "def-metric-ball",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-bounded-diameter",
    "declared_target": "def-metric-bounded-diameter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-compactness",
    "declared_target": "def-metric-compactness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-compactness-variants",
    "declared_target": "def-metric-compactness-variants",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-compact-implies-the-other-compactness-forms",
    "declared_target": "thm-compact-implies-the-other-compactness-forms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-metric-compactness-equivalences",
    "declared_target": "thm-metric-compactness-equivalences",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-compact-implies-complete-and-totally-bounded",
    "declared_target": "thm-compact-implies-complete-and-totally-bounded",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-totally-bounded",
    "declared_target": "def-totally-bounded",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-cauchy-in-metric",
    "declared_target": "def-cauchy-in-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-convergence",
    "declared_target": "def-metric-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-metric-convergent-implies-cauchy",
    "declared_target": "lem-metric-convergent-implies-cauchy",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
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
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-index-map-grows",
    "declared_target": "lem-index-map-grows",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-heine-borel-holds-in-every-normed-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-isometry-and-metric-embedding",
    "declared_target": "def-isometry-and-metric-embedding",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
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

## Full exact-current text of every cited or declared item (34)

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

### `def-cauchy-in-metric`

````markdown
---
id: def-cauchy-in-metric
kind: definition
title: "Cauchy sequence in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-convergence, def-sequence, def-real-limit,
       lem-rat-embeds-dense, lem-metric-nonnegativity, lem-real-line-is-a-metric-space,
       lem-index-map-grows]
justified_by: []
aliases: []
landmark: true
short: "Cauchy in a metric space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a
sequence in $X$, that is a function $\mathbb{N} \to X$ written $x_k := x(k)$
([[def-metric-convergence]], [[def-sequence]]). As everywhere in this library
$\mathbb{N}$ contains $0$, so a sequence is indexed from $0$.

$(x_k)$ is a **Cauchy sequence in $(X,d)$** if for every rational
$\varepsilon > 0$ there is $K \in \mathbb{N}$ such that

$$d(x_m, x_n) < \varepsilon \qquad \text{for all } m, n \ge K .$$

**Rational and real $\varepsilon$ agree here.** The test is written with a
rational $\varepsilon$ to match [[def-real-limit]] and [[def-metric-convergence]],
and nothing is lost by using a real one: below any real $\eta > 0$ lies a
positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that
rational serves for $\eta$. So a proof may establish Cauchyness by producing an
index for every real $\varepsilon > 0$, and may use a Cauchy hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**The condition is exactly $d(x_m,x_n) \to 0$ as $m$ and $n$ grow
independently.** The distances $d(x_m,x_n)$ are nonnegative reals
([[lem-metric-nonnegativity]]), and the displayed condition asks them to be
uniformly small on a tail of the doubly indexed family. It is not the same as
$d(x_{k+1}, x_k) \to 0$, which is a strictly weaker condition and is a standing
source of error. The partial sums $H_n$ of the harmonic series separate the two:
consecutive ones differ by $1/(n+1)$, which tends to $0$, while the sequence is
unbounded, and an unbounded sequence of reals is not Cauchy
([[lem-metric-cauchy-bounded]]).

**Consistency with the real line.** For $X = \mathbb{R}$ with the usual metric
$d(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]]) the condition above reads
$|x_m - x_n| < \varepsilon$ for $m,n \ge K$, which is verbatim the definition of a
Cauchy sequence of reals ([[def-real-limit]]). So the notion introduced here
restricts on $\mathbb{R}$ to the one already in use, and no ambiguity is created.

## Remarks

- **A Cauchy sequence need not converge.** The definition mentions no candidate
  limit, and that is the whole point of it: it is a condition on the sequence
  alone, testable without knowing where the sequence is going. Whether every
  Cauchy sequence converges is a property of the space, namely completeness
  ([[def-complete-metric-space]]), and it genuinely fails in some spaces
  ([[fs-cauchy-implies-convergent-in-every-metric-space]]).
- **Cauchyness is a property of the metric, not of the topology.** Two metrics
  on the same set may have exactly the same open sets and different Cauchy
  sequences ([[fs-equivalent-metrics-share-cauchy-sequences]]). What does
  preserve Cauchy sequences is uniform equivalence
  ([[def-equivalent-metrics]]), and the reason is
  [[thm-uniform-continuity-preserves-cauchy]].
- **Every subsequence of a Cauchy sequence is Cauchy**, since a strictly
  increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]), so the
  same $K$ works for the subsequence. Conversely a Cauchy sequence with one
  convergent subsequence already converges
  ([[lem-metric-cauchy-with-convergent-subsequence]]).
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

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
````

### `def-isometry-and-metric-embedding`

````markdown
---
id: def-isometry-and-metric-embedding
kind: definition
title: "Isometry, isometric embedding, and the subspace metric on a subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-topology, def-injection-surjection-bijection,
       def-metric-ball]
justified_by: []
aliases: [def-subspace-metric, def-isometry]
landmark: false
short: "isometry, subspace metric"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Isometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isometry"
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]).

**Isometric embedding and isometry.** A function $f : X \to Y$ is an
**isometric embedding** if

$$d_Y\big(f(x), f(x')\big) = d_X(x,x') \qquad \text{for all } x, x' \in X ,$$

and an **isometry** if it is in addition bijective
([[def-injection-surjection-bijection]]). Two metric spaces are **isometric** if
some isometry between them exists.

**Subspace metric.** Let $A \subseteq X$ and let

$$d_A := d_X \restriction (A \times A)$$

be the restriction of $d_X$ to pairs from $A$. Then $d_A$ is a metric on $A$:
the three axioms (M1), (M2), (M3) of [[def-metric-space]] are conditions on
triples of points, and each holds for points of $A$ because it holds for points
of $X$. The pair $(A, d_A)$ is the **metric subspace** $A$ of $X$, and the
inclusion $A \to X$ is an isometric embedding by construction. The metric
topology of $d_A$ ([[def-metric-topology]]) is the **subspace topology** of $A$.

**Balls of a subspace are traces of balls of the ambient space.** For $a \in A$
and $r > 0$,

$$B_A(a,r) = B_X(a,r) \cap A ,$$

directly from the definitions: a point $z$ lies in the left side exactly when
$z \in A$ and $d_A(a,z) = d_X(a,z) < r$ ([[def-metric-ball]]). This is why the
ambient space is always written into the ball notation, and it is the source of
every apparent paradox about balls in subspaces.

## Remarks

- **An isometric embedding is automatically injective**, and it identifies $X$
  with the subspace $f[X]$ of $Y$, topology and all; that is
  [[lem-isometry-is-an-embedding]]. The word *embedding* is therefore justified
  rather than merely suggestive.
- **A bijective isometric embedding has an isometric inverse.** If $f$ is an
  isometry then $f^{-1}$ satisfies
  $d_X(f^{-1}(y), f^{-1}(y')) = d_Y(y,y')$, because writing $y = f(x)$ and
  $y' = f(x')$ turns that into the defining identity of $f$. So "isometric" is a
  symmetric relation between metric spaces, and it is transitive because a
  composite of isometries is one.
- **Isometry is much finer than having the same topology.** Isometric spaces are
  homeomorphic, but $\mathbb{R}$ with $d(x,y) = |x-y|$ and $\mathbb{R}$ with
  $\min\{|x-y|, 1\}$ have the same topology and are not isometric, the second
  being bounded and the first not
  ([[lem-bounded-remetrisation]], [[lem-real-line-is-a-metric-space]]).
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

### `def-metric-ball`

````markdown
---
id: def-metric-ball
kind: definition
title: "Open ball, closed ball and sphere in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-real-order, lem-metric-nonnegativity,
       def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [def-open-ball, def-closed-ball, def-sphere]
landmark: true
short: "$B(x,r)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Ball (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ball_(mathematics)"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \in X$ and let
$r \in \mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define

$$B(x,r) := \{\, y \in X : d(x,y) < r \,\}, \qquad \bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}, \qquad S(x,r) := \{\, y \in X : d(x,y) = r \,\}.$$

$B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the
**sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly
positive real; a ball of radius $0$ or of negative radius is never written in
this library.

**Immediate consequences of the definitions.** For every $x \in X$ and $r > 0$:

- $x \in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);
  in particular open and closed balls are nonempty.
- $B(x,r) \subseteq \bar B(x,r)$ and $S(x,r) \subseteq \bar B(x,r)$, and
  $\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of
  the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):
  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.
- If $0 < s \le r$ then $B(x,s) \subseteq B(x,r)$ and
  $\bar B(x,s) \subseteq \bar B(x,r)$, by transitivity of the order.
- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the
  radius convention, and it forces it for the **open** ball only: if $r \le 0$
  then $B(x,r) = \{y : d(x,y) < r\}$ is empty, because $d(x,y) \ge 0 \ge r$
  for every $y$. The other two sets behave differently at $r = 0$, and the
  convention $r > 0$ excludes them for uniformity rather than for emptiness:
  $\bar B(x,0) = S(x,0) = \{x\}$, since $d(x,y) \le 0$ together with
  $d(x,y) \ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all
  three sets are empty.

**A sphere may be empty, and so the three sets are not on a par.** For $r > 0$
the open and closed balls always contain $x$, but nothing in the definition
produces a point at distance exactly $r$ from $x$. If a metric takes only the
values $0$ and $1$, as the discrete metric on the companion page does, then
$S(x,2) = \emptyset$ while $B(x,2) = \bar B(x,2)$ is the whole space. So
nonemptiness of a sphere is never available by convention: where it is used, it
is proved.

**The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and
not on $x$ and $r$ alone. When more than one space or more than one metric is in
play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\bar B$ and $S$. This
matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a
ball of a subspace is the trace on it of a ball of the ambient space, and the two
are different sets.

## Remarks

- **The names "open ball" and "closed ball" are justified, not merely
  suggestive.** That $B(x,r)$ is an open set and $\bar B(x,r)$ a closed set in
  the metric topology is proved in [[thm-metric-open-set-algebra]]; the words are
  used here only as names for the three sets displayed above.
- **The closed ball is not in general the closure of the open ball**, and the
  sphere is not in general the boundary of either. Both failures are recorded on
  this page as [[fs-closed-ball-is-the-closure-of-the-open-ball]] and witnessed
  on the companion page. The safe reading of the three names is the displayed
  one and nothing more.
````

### `def-metric-bounded-diameter`

````markdown
---
id: def-metric-bounded-diameter
kind: definition
title: "Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-ball, def-bounded-set, def-infimum,
       thm-infimum-property, lem-sup-unique, def-complete-ordered-field,
       lem-metric-nonnegativity, rem-sup-conventions, lem-of-add-order,
       def-ordered-field]
justified_by: []
aliases: [def-metric-diameter, def-distance-to-set]
landmark: false
short: "bounded, $\\operatorname{diam}$, $d(x,A)$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Bounded set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bounded_set"
    - title: "Diameter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Diameter"
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

## Remarks

- **Diameter and the distance functions are nonnegative.** For nonempty bounded
  $A$ and any $a \in A$ we have $0 = d(a,a) \in D(A)$, so
  $\operatorname{diam}(A) \ge 0$; and $d(x,A) \ge 0$, $d(A,B) \ge 0$ because $0$
  is a lower bound of the sets they are infima of
  ([[lem-metric-nonnegativity]], [[def-infimum]]).
- **$d(A,B)$ is not a metric on the nonempty subsets of $X$.** It is symmetric
  and vanishes on $A = B$, but two distinct disjoint sets can be at distance $0$,
  so the separation axiom (M1) of [[def-metric-space]] fails; the witness is on
  the companion page. The letter $d$ is reused for three different functions
  here, the metric, the point-to-set distance and the set-to-set distance, only
  because the arguments make the intended one unambiguous.
- **$d(x,A)$ is the special case $d(\{x\},A)$**, since
  $E(\{x\},A) = E(x,A)$, and the two infima therefore agree by uniqueness
  ([[lem-sup-unique]]).
````

### `def-metric-compactness`

````markdown
---
id: def-metric-compactness
kind: definition
title: "Open cover, subcover, compact metric space, and compact subset of a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-topology, def-metric-ball, def-isometry-and-metric-embedding, def-countable, lem-subset-of-countable]
justified_by: []
aliases: [def-compact-metric-space]
landmark: true
short: "open cover, compact metric space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in
[[def-metric-topology]] and balls as in [[def-metric-ball]].

- An **open cover** of $(X,d)$ is a family $\mathcal{U}$ of open subsets of $X$
  with $X = \bigcup \mathcal{U}$, where
  $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily
  $\mathcal{V} \subseteq \mathcal{U}$ that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \emptyset$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,d)$ is **compact** when every open cover of it has a finite subcover: for
  every open cover $\mathcal{U}$, either $X = \emptyset$ and the empty subfamily
  covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the metric
  subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of
  $d$ to $A \times A$ ([[def-isometry-and-metric-embedding]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A,d_A)$ and its own open sets, not
about families of open subsets of the ambient $X$. The two readings do agree,
but that is a theorem and not a convention: it is
[[lem-compactness-is-intrinsic]], and no item of this library may use the
ambient reading without citing it. Taking the intrinsic reading as the
definition is what makes "compact" a property of the metric space $(A,d_A)$
alone, so that a set compact in one ambient space is compact in every other one
containing it isometrically.

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. The
one-point space is compact too, and so is every space listed as
$\{x_0, \dots, x_n\}$: given a cover, each $x_i$ lies in some member, and
finitely many members chosen in this way already cover.

**The finiteness convention, and how it is used both ways.** "Finite" above is
the listing form, matching the finite lists of
[[def-finite-intersection-property]]. It agrees with the definition of
finiteness by equinumerosity with a natural number ([[def-countable]]), and
both directions of the agreement are available and are used below:

- A nonempty finite set $F$ in the sense of [[def-countable]] satisfies
  $F \approx m$ for some $m \ge 1$, and a bijection $m \to F$ is exactly a
  listing $F = \{a_0, \dots, a_{m-1}\}$.
- Conversely a set listed as $A = \{a_0, \dots, a_n\}$, that is the image of a
  function $a$ with domain $\sigma(n)$, is finite in the sense of
  [[def-countable]]: the map sending $x \in A$ to the least $i \le n$ with
  $a_i = x$ is an injection of $A$ into $\sigma(n)$, so $A$ is equinumerous with
  a subset of $\mathbb{N}$ bounded above, and such a subset is finite
  ([[lem-subset-of-countable]]).

Neither direction uses a choice principle: the second selects nothing, taking a
least index instead.

## Remarks

**Why open covers rather than closed ones.** Nothing in the definition would
break if $\mathcal{U}$ were allowed to consist of arbitrary sets, but the
resulting notion would be uninteresting: every space is covered by its
singletons, and only a finite space would survive. Openness of the members is
what makes the condition a genuine restriction, and it is what
[[lem-compactness-is-intrinsic]] has to keep track of when the ambient space
changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the metric space $(A,d_A)$",
whose members are open subsets of $A$. Which of the two is meant is written out
everywhere on this page.
````

### `def-metric-compactness-variants`

````markdown
---
id: def-metric-compactness-variants
kind: definition
title: "Countably compact, sequentially compact and limit point compact metric spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-compactness, def-metric-space, def-sequence, def-metric-convergence, lem-index-map-grows, def-metric-interior-closure-boundary, def-countable, lem-countable-iff-surjection-from-n, def-metric-topology, def-isometry-and-metric-embedding]
justified_by: []
aliases: [def-sequentially-compact-metric, def-limit-point-compact-metric, def-countably-compact-metric]
landmark: true
short: "countably, sequentially, limit point compact"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in
[[def-metric-topology]] and open covers, subcovers, finiteness and compactness as
in [[def-metric-compactness]].

- $(X,d)$ is **countably compact** when every open cover $\mathcal{U}$ of $X$
  that is at most countable ([[def-countable]]) has a finite subcover.
- $(X,d)$ is **sequentially compact** when every sequence $(x_k)$ in $X$, that is
  every function $x : \mathbb{N} \to X$ ([[def-sequence]]), has a subsequence
  $(x_{n_j})$ converging to a point of $X$ ([[def-metric-convergence]]), the
  index map $n : \mathbb{N} \to \mathbb{N}$ being strictly increasing
  ([[lem-index-map-grows]]).
- $(X,d)$ is **limit point compact** when every infinite subset $A \subseteq X$
  has a limit point in $X$, that is a point $p \in X$ with
  $B(p,r) \cap (A \setminus \{p\}) \ne \emptyset$ for every real $r > 0$
  ([[def-metric-interior-closure-boundary]]). Here *infinite* means not finite in
  the sense of [[def-countable]], equivalently not listable as
  $\{a_0, \dots, a_n\}$ and not empty ([[def-metric-compactness]]).

A subset $A \subseteq X$ is called countably compact, sequentially compact or
limit point compact when the metric subspace $(A, d_A)$ is
([[def-isometry-and-metric-embedding]]), exactly as for compactness.

**The countable covers may be listed.** A nonempty at most countable family
$\mathcal{U}$ admits a surjection $\mathbb{N} \to \mathcal{U}$
([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for
every sequence $(U_n)_{n \in \mathbb{N}}$ of open sets with
$X = \bigcup_{n \in \mathbb{N}} U_n$ there are finitely many indices whose sets
already cover $X$. That surjection is produced from the countability assumption
alone and no choice principle is involved; the empty family covers only the empty
space, which is compact anyway.

**Limit points are computed where the set lives.** For $S \subseteq A \subseteq X$
and $a \in A$, the identity $B_A(a,r) = B_X(a,r) \cap A$
([[def-isometry-and-metric-embedding]]) shows that $a$ is a limit point of $S$ in
the subspace $(A,d_A)$ exactly when $a$ is a limit point of $S$ in $X$ and lies in
$A$. So "$A$ is limit point compact" says that every infinite $S \subseteq A$ has
a limit point **belonging to $A$**; a limit point outside $A$ does not count, and
that is what distinguishes the property from a statement about $X$.

## Remarks

**Three conditions, and none of them is compactness by definition.** Each of the
three weakens or replaces the open-cover condition of
[[def-metric-compactness]]: countable compactness restricts the covers tested,
sequential compactness speaks about sequences instead of covers, and limit point
compactness speaks about subsets. That the four conditions are not equivalent for
topological spaces in general is standard and is quoted from the references, not
proved here. For metric spaces they do coincide, but the coincidence is a theorem
with a choice cost that varies from implication to implication, and it is proved
on this page one arrow at a time
([[thm-compact-implies-the-other-compactness-forms]],
[[thm-metric-compactness-equivalences]],
[[rem-compactness-choice-ledger-metric]]).

**Indexing starts at $0$.** A sequence here is a function on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is
$(x_{n_j})_{j \in \mathbb{N}}$ with $n_0 < n_1 < \cdots$ and $n_j \ge j$
([[lem-index-map-grows]]). Every recursive construction of a subsequence on this
page produces $n_0$ first and then $n_{j+1} > n_j$, and every radius written
$1/(j+1)$ is written that way because $1/j$ is undefined at $j = 0$.
````

### `def-metric-convergence`

````markdown
---
id: def-metric-convergence
kind: definition
title: "Convergence of a sequence in a metric space: $x_k \\to x$ iff $d(x_k, x) \\to 0$ in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-sequence, def-real-limit, def-subsequential-limit,
       lem-metric-nonnegativity, lem-rat-embeds-dense, def-natural-numbers,
       def-abs-value]
justified_by: []
aliases: [def-metric-limit]
landmark: true
short: "$x_k \\to x$ in $(X,d)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library, $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here.

Let $(x_k)$ be a sequence in $X$ and $p \in X$. The function
$k \mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is
nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$
([[def-abs-value]]). Define

$$x_k \longrightarrow p \text{ in } (X,d) \quad :\Longleftrightarrow \quad d(x_k,p) \longrightarrow 0 \text{ in } \mathbb{R},$$

the convergence on the right being that of [[def-real-limit]]. Unwound, this
says: for every **rational** $\varepsilon > 0$ there is $K \in \mathbb{N}$ with
$d(x_k, p) < \varepsilon$ for every $k \ge K$. We then call $p$ a **limit** of
$(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit.

**Rational and real $\varepsilon$ agree here, as they do on the real line.**
[[def-real-limit]] tests convergence against rational $\varepsilon$ only, and its
own remark, restated for sequences in [[def-sequence]], records that nothing is
lost: below any real $\eta > 0$ lies a positive rational
([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for
$\eta$. So a proof may establish convergence by producing an index for every
real $\varepsilon > 0$, and may use a convergence hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the
composite $x \circ n$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$,
written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and
$p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence
converges to $p$, which is the metric-space form of [[def-subsequential-limit]].

## Remarks

- **A limit is a point of $X$, and uniqueness is a theorem.** Nothing in the
  definition rules out two limits; that a sequence in a metric space has at most
  one is [[lem-metric-limits-unique]], and its proof is where the separation
  axiom (M1) is spent. Reading the same definition with a pseudometric
  ([[def-metric-space]]) that is not a metric, that is one with $p(a,b) = 0$ for
  some $a \ne b$, limits are genuinely not unique: the constant sequence at $a$
  converges to $b$ as well.
- **Convergence is defined from the metric but determined by the topology.**
  It can be restated as "every open set containing $p$ contains $x_k$ for all
  large $k$", which follows from [[lem-metric-ball-neighbourhood-base]]; so it is
  unchanged by passing to a topologically equivalent metric
  ([[def-equivalent-metrics]]). That restatement is not made part of the
  definition, because the metric form is what every proof on this page uses.
- **The relation between convergence and closure** is
  [[thm-metric-sequential-closure]]: a point lies in the closure of $A$ exactly
  when some sequence in $A$ converges to it.
````

### `def-metric-space`

````markdown
---
id: def-metric-space
kind: definition
title: "Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric and ultrametric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-ordered-field,
       def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: [def-metric, def-pseudometric, def-ultrametric]
landmark: true
short: "metric space $(X,d)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis II, 3rd ed., Ch. 1"
      url: "https://terrytao.wordpress.com/books/analysis-ii/"
    - title: "Pseudometric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudometric_space"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this
library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).

Let $X$ be a set. A **metric** on $X$ is a function
$d : X \times X \to \mathbb{R}$ such that for all $x, y, z \in X$:

- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.
- **(M2) Symmetry.** $d(x,y) = d(y,x)$.
- **(M3) Triangle inequality.** $d(x,z) \le d(x,y) + d(y,z)$.

A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on
it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from
$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when
several are, the metric is always named.

**The values of a metric are real numbers.** The codomain is $\mathbb{R}$, so
$d(x,y)$ is an honest element of the complete ordered field and every
inequality above is an inequality there. No infinite value is permitted;
[[rem-metric-axiom-conventions]] records why extended metrics are not treated in
this library.

**Nonnegativity is deliberately absent from the axiom list.** Many texts add a
fourth axiom $d(x,y) \ge 0$. It is redundant: (M1), (M2) and (M3) already force
it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that
lemma is available.

**Pseudometric.** A **pseudometric** on $X$ is a function
$p : X \times X \to \mathbb{R}$ satisfying (M2), (M3) and the weakening

- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \in X$

of (M1). A pseudometric may therefore assign distance $0$ to two distinct
points. Every metric is a pseudometric, and a pseudometric is a metric exactly
when $p(x,y) = 0$ forces $x = y$.

**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition
satisfies

- **(M3') Strong triangle inequality.** $d(x,z) \le \max\{d(x,y), d(y,z)\}$

for all $x, y, z \in X$, where the maximum is that of a two-element subset of
$\mathbb{R}$, which exists and is one of the two elements
([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair
$(X,d)$ with $d$ an ultrametric.

## Remarks

- **(M3') is a genuine strengthening of (M3), not an independent axiom on top of
  it.** A function satisfying (M1), (M2) and (M3') automatically satisfies (M3):
  by [[lem-metric-nonnegativity]] such a function is nonnegative, and for
  nonnegative reals $a, b$ one has $\max\{a,b\} \le a + b$, since the maximum is
  one of $a, b$ and the other summand is $\ge 0$. So "a metric satisfying (M3')"
  and "a function satisfying (M1), (M2), (M3')" describe the same objects, and
  the definition above may be read either way.

- **Why the biconditional form of (M1).** Splitting (M1) into "$d(x,x) = 0$" and
  "$d(x,y) = 0 \Rightarrow x = y$" gives the same notion; the split form is what
  makes the pseudometric weakening above a matter of deleting one clause. The
  naming fork between *pseudometric* and *semimetric*, which is live in the
  literature, is settled for this library in
  [[rem-metric-axiom-conventions]].

- **The metric is part of the data.** Two different metrics on the same set are
  two different metric spaces, even when they have the same open sets. That is
  why [[def-equivalent-metrics]] compares metrics at three separate strengths
  rather than one, and why a property can be invariant under one of them and not
  under another ([[fs-boundedness-is-a-topological-property]]).
````

### `def-metric-topology`

````markdown
---
id: def-metric-topology
kind: definition
title: "The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-ball, def-metric-space]
justified_by: []
aliases: [def-open-set-metric, def-closed-set-metric]
landmark: true
short: "metric topology"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

## Remarks

- **What "topology" means here.** $\mathcal{T}_d$ is defined above as a
  collection of subsets of $X$; the abstract notion of a topological space, a
  collection of subsets closed under arbitrary unions and finite intersections
  taken as primitive data, is introduced on a later page and is not used
  here. What is proved
  here is that $\mathcal{T}_d$ has exactly those closure properties
  ([[thm-metric-open-set-algebra]]), which is what licenses the word.
- **Open and closed are not opposites.** A set may be neither ($[0,1)$ inside
  $\mathbb{R}$, once the usual metric is available from
  [[lem-real-line-is-a-metric-space]]) or both ($\emptyset$ and $X$ always, and
  in some spaces every subset at once, as the discrete metric on the companion
  page shows). "Not open" is never a synonym for "closed".
- **Closedness is complementation, and nothing else, at this stage.** The
  description of closed sets by limits of sequences, and the description of the
  closure as an infimum of distances, are theorems proved later on this page
  ([[thm-metric-closure-characterisation]], [[thm-metric-sequential-closure]]),
  not part of the definition.
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

### `def-sequence`

````markdown
---
id: def-sequence
kind: definition
title: "Sequences of reals: bounded, eventually, frequently, tails, subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-natural-numbers, def-nat-order, def-real-limit, def-real-order, def-complete-ordered-field, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "$(x_k)$, bounded, eventually, subsequence"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

## Remarks

- **Identification of $\mathbb{Q}$ with its image.** The map $q \mapsto \hat q$
  is an embedding of ordered fields ([[lem-rat-embeds-dense]]), and as is
  standard we write $q$ for $\hat q$, so that a rational may be compared with a
  real without further comment. [[def-real-limit]] is stated with the hat; every
  rational $\varepsilon$ occurring on this page is its image under this
  embedding.

- **Rational and real $\varepsilon$ agree.** [[def-real-limit]] tests convergence
  against every *rational* $\varepsilon > 0$, and its own remark records that
  this loses nothing. Spelled out: suppose that for every rational
  $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all
  $k \ge K$, and let $\eta > 0$ be an arbitrary *real*. Since $0 < \eta$,
  density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) supplies a
  rational $\varepsilon$ with $0 < \varepsilon < \eta$, and the index $K$
  belonging to that $\varepsilon$ satisfies $|x_k - x| < \varepsilon < \eta$ for
  all $k \ge K$. The converse implication is immediate, since every positive
  rational is a positive real. So the two formulations define the same relation,
  and the same two lines apply verbatim to the Cauchy condition and to any
  condition of the shape "for every $\varepsilon > 0$, eventually
  $\cdots < \varepsilon$". Proofs on this page therefore run the test with a real
  $\varepsilon$ wherever that is more convenient, and say so by citing this
  remark; nothing is smuggled in.

- **Constant sequences converge.** For $c \in \mathbb{R}$ the constant sequence
  $x_k := c$ converges to $c$, because $|x_k - c| = |0| = 0 < \varepsilon$ for
  every $\varepsilon > 0$ and every $k$; it is bounded by $|c|$.

- **Eventually and frequently are dual.** $P$ holds frequently exactly when
  $\lnot P$ does not hold eventually, and $P$ holds eventually exactly when
  $\lnot P$ does not hold frequently. So the two quantifier patterns are
  negations of one another applied to the complementary property, and there is no
  third pattern hiding between them.

- **A sequence is not its range.** $(x_k)$ is a function, not a set, and the
  range does not determine the function: the sequence $x_0 = 0$, $x_k = 1$ for
  $k \ge 1$ and the sequence $y_0 = y_1 = 0$, $y_k = 1$ for $k \ge 2$ have the
  same range $\{0, 1\}$, yet they differ at $k = 1$, so they are different
  sequences. Order and repetition are part of the data and the range forgets
  both. Boundedness, on the other hand, depends only on the range.

- **Indexing.** Sequences here start at $k = 0$ because $\mathbb{N}$ contains
  $0$ ([[def-natural-numbers]]). Texts that index from $1$ describe the same
  objects up to a shift, and the shift changes nothing about convergence, by
  [[lem-limit-of-tail]].
````

### `def-totally-bounded`

````markdown
---
id: def-totally-bounded
kind: definition
title: "Finite $\\varepsilon$-net and totally bounded metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-ball, def-metric-bounded-diameter, def-metric-compactness, def-isometry-and-metric-embedding]
justified_by: []
aliases: [def-epsilon-net]
landmark: true
short: "$\\varepsilon$-net, totally bounded"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\varepsilon$ be a
real with $\varepsilon > 0$.

- A **finite $\varepsilon$-net** for $(X,d)$ is a finite subset $F \subseteq X$
  with
  $$X = \bigcup_{y \in F} B(y, \varepsilon) ,$$
  the balls being those of $(X,d)$ ([[def-metric-ball]]). *Finite* is the
  listing form fixed in [[def-metric-compactness]]: $F = \emptyset$, or
  $F = \{y_0, \dots, y_m\}$ for some $m \in \mathbb{N}$ and points
  $y_0, \dots, y_m \in X$.
- $(X,d)$ is **totally bounded** when it has a finite $\varepsilon$-net for every
  real $\varepsilon > 0$.
- A subset $A \subseteq X$ is **totally bounded** when the metric subspace
  $(A,d_A)$ is ([[def-isometry-and-metric-embedding]]); its nets are then finite
  subsets of $A$ and its balls are the balls $B_A(a,\varepsilon)$ of the
  subspace.

**The empty space is totally bounded**, the empty net serving for every
$\varepsilon$, since a union over no indices is empty. Every space listed as
$\{x_0, \dots, x_n\}$ is totally bounded too, itself being an $\varepsilon$-net
for every $\varepsilon$.

**The centres are required to lie in the space.** Writing the condition with
centres in $X$ and balls of $X$ is what makes total boundedness a property of the
metric space $(X,d)$ alone, matching the treatment of compactness in
[[def-metric-compactness]]. For a subset $A$ this matters: the nets of $(A,d_A)$
consist of points of $A$, not of nearby points of the ambient space.

**Total boundedness is stronger than boundedness and is not the same thing.**
A totally bounded space is bounded in the sense of
[[def-metric-bounded-diameter]] — that is claim 1 of
[[lem-totally-bounded-basic]] — and the converse fails, as
[[fs-bounded-implies-totally-bounded]] records. Boundedness asks for one ball
containing the space; total boundedness asks for finitely many balls of *every*
prescribed radius, and it is the second condition that controls how spread out
the space is at small scales.

## Remarks

**Why $\varepsilon$ ranges over the reals here.** Convergence and the Cauchy
condition are tested against rational $\varepsilon$ in this library
([[def-metric-convergence]], [[def-cauchy-in-metric]]), because that is how
[[def-real-limit]] is written; total boundedness is not a limit condition and is
stated for real $\varepsilon > 0$ directly. Nothing turns on the difference: a
net for a rational $\varepsilon' \le \varepsilon$ is a net for $\varepsilon$,
since $B(y,\varepsilon') \subseteq B(y,\varepsilon)$.

**A net is not unique and is not part of the data.** Total boundedness asserts
that nets exist; it names none. Producing one net for each $\varepsilon$
simultaneously, as a function of $\varepsilon$, is a further act of selection,
and where a proof needs that function it says so and pays for it — see
[[thm-complete-and-totally-bounded-implies-compact]] and
[[lem-compact-metric-space-has-a-countable-dense-subset]], each of which spends
the Axiom of Countable Choice ([[def-countable-choice]]) exactly once and at
exactly that point.
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

### `fs-all-norms-on-any-real-vector-space-are-equivalent`

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

### `fs-closed-and-bounded-implies-compact-in-every-metric-space`

````markdown
---
id: fs-closed-and-bounded-implies-compact-in-every-metric-space
kind: false-statement
title: "FALSE: a closed and bounded subset of a metric space is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, def-metric-compactness-variants, thm-compact-subset-is-closed-and-bounded, thm-compact-implies-complete-and-totally-bounded, thm-heine-borel-rn, def-totally-bounded, def-metric-space, def-metric-bounded-diameter, def-metric-ball, def-metric-topology, def-natural-numbers, def-canonical-natural, thm-of-archimedean, lem-finite-set-has-max, def-max-min]
justified_by: []
forward_refs: [cex-bounded-not-totally-bounded, cex-closed-and-bounded-not-compact-in-the-sup-metric]
aliases: []
landmark: false
short: "FALSE: closed + bounded implies compact"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 828fd89aed6ea20154c57c8bfa7084ba920ca7e5ab69ef13a634654ddf615ca5
    item_sha256: 1304f5cf1e906efc2fbd50abc8782e199e5a58919facbb0ec15c5775a428d1d3
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
pipeline_run: null
---

## Statement

**False claim:** in every metric space $(X,d)$ ([[def-metric-space]]), a subset
that is closed in $X$ ([[def-metric-topology]]) and bounded
([[def-metric-bounded-diameter]]) is a compact subset of $X$
([[def-metric-compactness]]).

**Where the claim comes from, and what is actually true.** One half of the
Heine-Borel property does hold in every metric space: a compact subset is closed
and bounded ([[thm-compact-subset-is-closed-and-bounded]]). The converse holds in
$\mathbb{R}^n$ with the Euclidean metric ([[thm-heine-borel-rn]]), and the claim
above is that reading of Heine-Borel transplanted to an arbitrary metric space,
where it fails. What survives in general is that a compact space is complete and
totally bounded ([[thm-compact-implies-complete-and-totally-bounded]]), and it is
total boundedness, not boundedness, that the witness below lacks.

The refutation builds its own witness: the set $\mathbb{N}$ carrying the metric
that assigns distance $1$ to distinct points.

## Facts & Assumptions

**Given:** The set $\mathbb{N}$ of natural numbers ([[def-natural-numbers]]) and the function $d : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ with $d(m,n) = 0$ for $m = n$ and $d(m,n) = 1$ for $m \ne n$.

[A1] The false claim: in every metric space a closed bounded subset is compact.

[L1] A metric on a set is a real-valued function satisfying (M1) $d(x,y) = 0$ exactly when $x = y$, (M2) $d(x,y) = d(y,x)$ and (M3) $d(x,z) \le d(x,y) + d(y,z)$ ([[def-metric-space]]).

[L2] $B(x,r) = \{y : d(x,y) < r\}$; a set is open when each of its points has a ball around it inside it; a set is closed when its complement is open; and a subset is bounded when it is empty or lies in a ball ([[def-metric-ball]], [[def-metric-topology]], [[def-metric-bounded-diameter]]).

[L3] A subset $A$ of a metric space is compact exactly when the metric subspace $(A,d_A)$ is a compact metric space; and a compact metric space has, for every family of open subsets with union the space, a finite subfamily with union the space ([[def-metric-compactness]]).

[L4] A nonempty finite set of reals has a maximum, one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] For every real $M$ there is a natural $N \ge 1$ with $M < \iota(N)$, where $\iota$ is the canonical natural of $\mathbb{R}$ ([[thm-of-archimedean]], [[def-canonical-natural]]).

## Refutation

**Proof technique:** direct.

1.1 $d$ is a metric on $\mathbb{N}$: (M1) holds because $d(m,n) = 0$ was defined to mean $m = n$; (M2) because the defining condition is symmetric in $m$ and $n$; and (M3) because the left side is $0$ or $1$, and when it is $1$ one has $x \ne z$, so $y$ differs from at least one of $x$ and $z$ and the right side is at least $1$. [L1]

2.1 In $(\mathbb{N},d)$ one has $B(n,1) = \{n\}$, since $d(n,m) < 1$ forces $d(n,m) = 0$ and hence $m = n$; consequently every subset of $\mathbb{N}$ is open, each of its points $n$ having $B(n,1)$ inside it, and every subset is closed as well. [L2, step 1.1]

3.1 $\mathbb{N}$ is a closed subset of the metric space $(\mathbb{N},d)$, and it is bounded, since $d(0,n) \le 1 < 2$ for every $n$ gives $\mathbb{N} = B(0,2)$. [L2, step 2.1]

3.2 The family $(B(n,1))_{n \in \mathbb{N}}$ consists of open subsets of $\mathbb{N}$ and has union $\mathbb{N}$, because $n \in B(n,1)$ for every $n$. [L2, step 2.1]

4.1 No finite subfamily has union $\mathbb{N}$: such a subfamily is $B(n_0,1), \dots, B(n_k,1)$ for some $k \in \mathbb{N}$ and naturals $n_0, \dots, n_k$, with union $\{n_0, \dots, n_k\}$ by step 2.1; the reals $\iota(n_0), \dots, \iota(n_k)$ have a maximum $M$, and a natural $N \ge 1$ with $M < \iota(N)$ then satisfies $\iota(N) \ne \iota(n_i)$ and hence $N \ne n_i$ for every $i \le k$, so $N$ lies in $\mathbb{N}$ and in no member of the subfamily. [L4, L5, step 2.1, step 3.2]

5.1 Hence $(\mathbb{N},d)$ is not a compact metric space, so $\mathbb{N}$ is a closed and bounded subset of the metric space $(\mathbb{N},d)$ that is not compact, and the claim [A1] is false. [A1, L3, step 3.1, step 3.2, step 4.1] ∎

## Remarks

**What the witness fails is total boundedness, not boundedness.** The space $(\mathbb{N},d)$ has diameter $1$, so it is as bounded as a nonempty space can be; but a finite $1/2$-net would have to contain every point, and $\mathbb{N}$ is not finite ([[cex-bounded-not-totally-bounded]], [[fs-bounded-implies-totally-bounded]]). Since a compact space is totally bounded ([[thm-compact-implies-complete-and-totally-bounded]]), that alone already settles non-compactness; the explicit cover of step 3.2 is given because it makes the failure visible without any theory.

**The witness is complete, so completeness is not the missing ingredient either.** In $(\mathbb{N},d)$ a Cauchy sequence is eventually constant, hence convergent, so this is a complete, bounded, closed space that is not compact. The pair that *is* equivalent to compactness, once the Axiom of Countable Choice and the Axiom of Dependent Choice are assumed, is completeness together with total boundedness ([[thm-metric-compactness-equivalences]]).

**A second, analytically natural witness** is the closed unit ball of the bounded real-valued functions on $\mathbb{N}$ under the supremum metric, where the indicator functions of the singletons are pairwise at distance $1$ ([[cex-closed-and-bounded-not-compact-in-the-sup-metric]]).
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

### `lem-index-map-grows`

````markdown
---
id: lem-index-map-grows
kind: lemma
title: "A strictly increasing index map satisfies $n_k \\ge k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, thm-induction-principle, lem-nat-discrete, def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-successor-neq-self, thm-nat-linear-order, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$n_k\\ge k$"
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
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "University of Wisconsin Math 521, Homework 5"
      url: "https://people.math.wisc.edu/~angenent/521.2016s/index.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $n : \mathbb{N} \to \mathbb{N}$ be a function, written $k \mapsto n_k$, and
recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$
([[def-sequence]], [[def-nat-order]]).

1. **Consecutive comparisons suffice.** If $n_i < n_{\sigma(i)}$ for every
   $i \in \mathbb{N}$, then $n$ is strictly increasing.
2. **Growth.** If $n$ is strictly increasing then $n_k \ge k$ for every
   $k \in \mathbb{N}$.

Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is
what every later subsequence argument uses.

## Facts & Assumptions

**Given:** A function $n : \mathbb{N} \to \mathbb{N}$, written $k \mapsto n_k$, with $\sigma$ the successor and the order of [[def-nat-order]]; claim 1 is proved under the standing assumption that $n_i < n_{\sigma(i)}$ for every $i$, and claim 2 under the standing assumption that $n$ is strictly increasing ([[def-sequence]]).

[A1] $Q(k)$ denotes the statement: $n_j < n_k$ for every $j < k$.

[A2] $P(k)$ denotes the statement: $n_k \ge k$.

[L1] Order and successor on $\mathbb{N}$: $m \le p$ means $m + i = p$ for some $i$, so $0 \le m$ for every $m$ because $0 + m = m$; and $\sigma(k) = k + 1$ with $\sigma(k) \ne k$, so $k < \sigma(k)$ ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-add-identity]], [[lem-nat-successor-neq-self]]).

[L2] Discreteness: $m < p$ if and only if $\sigma(m) \le p$ ([[lem-nat-discrete]]).

[L3] Induction principle: if $R(0)$ holds and $R(k)$ implies $R(\sigma(k))$ for every $k$, then $R(k)$ holds for every $k \in \mathbb{N}$ ([[thm-induction-principle]]).

[L4] The order on $\mathbb{N}$ is reflexive, antisymmetric, transitive and total, and satisfies trichotomy ([[thm-nat-linear-order]], [[lem-nat-trichotomy]]).

## Proof

**Proof technique:** induction.

1.1 Base case for claim 1: $Q(0)$ holds vacuously, since no $j$ satisfies $j < 0$; indeed $0 \le j$ always holds, and $j < 0$ together with $0 \le j$ would contradict antisymmetry. [base, A1, L1, L4]

1.2 Inductive hypothesis for claim 1: fix $k \in \mathbb{N}$ and assume $Q(k)$, that is $n_j < n_k$ for every $j < k$. [ih, A1]

1.3 Base case for claim 2: $P(0)$ states $n_0 \ge 0$, which holds because $0 \le m$ for every natural $m$. [base, A2, L1]

1.4 Inductive hypothesis for claim 2: fix $k \in \mathbb{N}$ and assume $P(k)$, that is $k \le n_k$. [ih, A2]

2.1 Inductive step for claim 1: let $j < \sigma(k)$. By trichotomy either $k < j$, or $j = k$, or $j < k$. The case $k < j$ is impossible, since it gives $\sigma(k) \le j$ by [L2], which together with $j < \sigma(k)$ contradicts antisymmetry. If $j = k$ then $n_j = n_k < n_{\sigma(k)}$ by the standing assumption. If $j < k$ then $n_j < n_k$ by step 1.2 and $n_k < n_{\sigma(k)}$ by the standing assumption, so $n_j < n_{\sigma(k)}$ by transitivity. In every admissible case $n_j < n_{\sigma(k)}$, so $Q(\sigma(k))$ holds. [step 1.2, A1, L2, L4]

2.2 Inductive step for claim 2: $k < \sigma(k)$ by [L1], so strict increase gives $n_k < n_{\sigma(k)}$; combined with $k \le n_k$ from step 1.4 this yields $k < n_{\sigma(k)}$, hence $\sigma(k) \le n_{\sigma(k)}$ by [L2], which is $P(\sigma(k))$. [step 1.4, A2, L1, L2, L4]

3.1 Both inductions are complete, so by the induction principle $Q(k)$ holds for every $k$, which is claim 1, and $P(k)$ holds for every $k$, which is claim 2. [step 1.1, step 1.3, step 2.1, step 2.2, L3, discharge-induction] ∎

## Remarks

- Claim 2 is sharp: the identity map $n_k = k$ is strictly increasing with $n_k = k$ throughout, so no better bound than $n_k \ge k$ holds for all strictly increasing index maps.

- Claim 2 is exactly what makes a subsequence inherit a limit ([[lem-subsequence-inherits-limit]]): a threshold $K$ that works for the original sequence works unchanged for the subsequence, because $n_k \ge k \ge K$ whenever $k \ge K$.

- Nothing here is about $\mathbb{R}$; both claims are about $(\mathbb{N}, \le, \sigma)$ alone. Both are proved **by induction** ([L3]), and that is the method, not an order property. Claim 2 needs three order facts on top of the induction: that $0$ is least, which is what makes its base case $n_0 \ge 0$ true ([L1], step 1.3); discreteness ([[lem-nat-discrete]], [L2]), which upgrades $k < n_{\sigma(k)}$ to $\sigma(k) \le n_{\sigma(k)}$ (step 2.2); and transitivity in its mixed form, which composes $k \le n_k$ with $n_k < n_{\sigma(k)}$ into $k < n_{\sigma(k)}$ ([L4], step 2.2). Claim 1 additionally uses trichotomy and antisymmetry ([L4]).

- Of those three, neither the least element nor discreteness may be dropped. Discreteness alone is not enough: $(\mathbb{Z}, \le)$ is discrete in the same sense, $m < p$ iff $m + 1 \le p$, yet $k \mapsto k - 1$ is strictly increasing on $\mathbb{Z}$ with $n_k < k$ everywhere. What $\mathbb{Z}$ lacks is a least element to anchor the induction. A least element alone is not enough either, which is what fails over $\mathbb{Q}$: on the nonnegative rationals $x \mapsto x/2$ is strictly increasing and fixes the least element $0$, but $x/2 < x$ at every positive rational.
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

### `lem-metric-convergent-implies-cauchy`

````markdown
---
id: lem-metric-convergent-implies-cauchy
kind: lemma
title: "Every convergent sequence in a metric space is Cauchy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cauchy-in-metric, def-metric-convergence, def-metric-space,
       lem-rat-embeds-dense, def-real-limit]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 223c9386e7be54c3cde97c0eb200149b8eb09419d068ed4991830d2d8458dbb6
    item_sha256: 78d77e6f92d683f542eea1a1a822ec1bef90938a258fb73ad199df1c132f8fd4
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a
sequence in $X$ converging to $p \in X$ ([[def-metric-convergence]]). Then
$(x_k)$ is Cauchy in $(X,d)$ ([[def-cauchy-in-metric]]).

The converse fails, and that failure is the subject of this page
([[fs-cauchy-implies-convergent-in-every-metric-space]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a sequence $(x_k)$ in $X$, a point $p \in X$ with $x_k \to p$, and a real $\varepsilon > 0$.

[A1] Convergence: for every real $\eta > 0$ there is $K \in \mathbb{N}$ with $d(x_k,p) < \eta$ for all $k \ge K$ ([[def-metric-convergence]], [[def-real-limit]], [[lem-rat-embeds-dense]]).

[A2] Cauchyness is established by producing, for every real $\varepsilon > 0$, an index $K$ with $d(x_m,x_n) < \varepsilon$ for all $m,n \ge K$ ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[L1] Triangle inequality (M3) and symmetry (M2) of a metric ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 The real $\varepsilon/2$ is positive, so [A1] applied with $\eta = \varepsilon/2$ supplies $K \in \mathbb{N}$ with $d(x_k, p) < \varepsilon/2$ for every $k \ge K$. [A1, algebra]

1.2 For all $m, n \in \mathbb{N}$ one has $d(x_m, x_n) \le d(x_m, p) + d(p, x_n)$. [L1]

2.1 Hence for all $m, n \ge K$: $d(x_m,x_n) \le d(x_m,p) + d(p,x_n) < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.1, step 1.2, algebra]

3.1 Since $\varepsilon > 0$ was an arbitrary real, $(x_k)$ is Cauchy in $(X,d)$. [step 2.1, A2] ∎

## Remarks

- **The proof spends the triangle inequality and symmetry, but not separation.** Symmetry rewrites $d(p,x_n)$ as the bounded quantity $d(x_n,p)$ in step 2.1. The separation axiom (M1) is not used, so the same argument shows that a sequence converging in a pseudometric space ([[def-metric-space]]) is Cauchy for the pseudometric.
- **Halving is the whole idea.** The Cauchy condition compares two terms of the sequence, and a limit compares one term with the limit; routing $m$ and $n$ through $p$ costs two applications of the convergence hypothesis, so each is run at half the target. Every proof on this page that produces a Cauchy sequence out of a convergent one repeats this step.
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

### `thm-compact-implies-complete-and-totally-bounded`

````markdown
---
id: thm-compact-implies-complete-and-totally-bounded
kind: theorem
title: "A compact metric space is complete and totally bounded, and neither implication uses any choice principle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, lem-compactness-is-intrinsic, def-totally-bounded, def-complete-metric-space, def-cauchy-in-metric, thm-compact-iff-finite-intersection-property, def-finite-intersection-property, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-metric-convergence, def-metric-ball, def-metric-topology, thm-metric-open-set-algebra, lem-finite-set-has-max, def-max-min, def-canonical-natural, lem-of-naturals-positive, thm-nat-linear-order, def-metric-space]
justified_by: []
forward_refs: [cex-totally-bounded-not-compact]
aliases: []
landmark: true
short: "compact implies complete and totally bounded"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 2f14fa5f0cb4db93da18ed7a507344f9fb2cd5c881ecd56936cb13d2cb479309
    item_sha256: 8b5a75636fed21ea687c1fc0b52c081fd77b601bee8f90bc9d571a96afdf7908
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a compact metric space ([[def-metric-compactness]],
[[def-metric-space]]). Then $(X,d)$ is totally bounded
([[def-totally-bounded]]) and complete ([[def-complete-metric-space]]).

**Both implications are theorems of ZF.** Completeness is obtained here from the
finite intersection characterisation ([[thm-compact-iff-finite-intersection-property]])
applied to the closures of the tails of a Cauchy sequence, and not from the
extraction of a convergent subsequence, which would route the argument through
sequential compactness. What matters for the ledger is that the route taken below
selects nothing at all; the first remark below says why the other route was not
taken.

## Facts & Assumptions

**Given:** A compact metric space $(X,d)$.

[L1] Open balls are open ([[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metric-topology]]).

[L2] $(X,d)$ is totally bounded exactly when for every real $\varepsilon > 0$ there is a finite $F \subseteq X$ with $X = \bigcup_{y \in F} B(y,\varepsilon)$ ([[def-totally-bounded]]).

[L3] $X$ is a compact subset of itself, and for every family $(U_i)_{i \in I}$ of open subsets of $X$ with $X = \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $X = U_{i_0} \cup \dots \cup U_{i_n}$, unless $X = \emptyset$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L4] $(X,d)$ is complete when every Cauchy sequence converges to a point of $X$; $(x_k)$ is Cauchy when for every rational $\varepsilon > 0$ there is $K$ with $d(x_m,x_l) < \varepsilon$ for all $m,l \ge K$; and $x_k \to p$ when for every rational $\varepsilon > 0$ there is $K$ with $d(x_k,p) < \varepsilon$ for all $k \ge K$ ([[def-complete-metric-space]], [[def-cauchy-in-metric]], [[def-metric-convergence]]).

[L5] The closure $\overline{S}$ of $S \subseteq X$ is closed, contains $S$, and is contained in every closed superset of $S$; and $x \in \overline{S}$ exactly when $B(x,r) \cap S \ne \emptyset$ for every real $r > 0$ ([[thm-metric-closure-characterisation]], [[def-metric-interior-closure-boundary]]).

[L6] $(X,d)$ is compact exactly when every family of closed subsets of $X$ with the finite intersection property has nonempty intersection, the empty finite list having intersection $X$ ([[thm-compact-iff-finite-intersection-property]], [[def-finite-intersection-property]]).

[L7] A metric satisfies the triangle inequality and is symmetric ([[def-metric-space]]).

[L8] A finite list $n_0, \dots, n_p$ of natural numbers has a greatest member. Indeed the reals $\iota(n_0+1), \dots, \iota(n_p+1)$, with $\iota$ the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), form a nonempty finite set of reals and so have a maximum, which is one of them, say $\iota(n_j+1)$ ([[lem-finite-set-has-max]], [[def-max-min]]); the map $m \mapsto \iota(m)$ is strictly increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), so $n_j < n_i$ would force $\iota(n_j+1) < \iota(n_i+1)$, which the maximality forbids, and the order of $\mathbb{N}$ is linear ([[thm-nat-linear-order]]), whence $n_i \le n_j$ for every $i \le p$.

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be real; the family $(B(x,\varepsilon))_{x \in X}$ consists of open subsets of $X$ and has union $X$, since $x \in B(x,\varepsilon)$ for every $x$. [L1, L2]

2.1 If $X = \emptyset$ the empty set is a finite $\varepsilon$-net; otherwise the indexed characterisation gives $n \in \mathbb{N}$ and $x_0, \dots, x_n \in X$ with $X = B(x_0,\varepsilon) \cup \dots \cup B(x_n,\varepsilon)$, so $\{x_0, \dots, x_n\}$ is a finite $\varepsilon$-net; as $\varepsilon$ was arbitrary, $(X,d)$ is totally bounded. [L2, L3, step 1.1]

3.1 Total boundedness being settled, take up completeness: let $(x_k)$ be a Cauchy sequence in $X$ and put $T_n := \overline{\{\, x_k : k \ge n \,\}}$ for $n \in \mathbb{N}$, a definition by a rule and not by a selection. [L4, L5, step 2.1]

4.1 Each $T_n$ is closed and nonempty, containing $x_n$; and $T_m \subseteq T_n$ whenever $m \ge n$, since then $\{x_k : k \ge m\} \subseteq \{x_k : k \ge n\} \subseteq T_n$ and $T_m$ is the smallest closed superset of the first of these sets. [L5, step 3.1]

5.1 The family $\mathcal{A} := \{\, T_n : n \in \mathbb{N} \,\}$ of closed sets has the finite intersection property: the empty list has intersection $X$, which contains $x_0$; and for a list $T_{n_0}, \dots, T_{n_p}$ take a greatest member $n_j$ of the list of indices, so that $T_{n_j} \subseteq T_{n_i}$ for every $i \le p$ and $x_{n_j}$ lies in every one of them. [L6, L8, step 4.1]

6.1 By the finite intersection characterisation of compactness there is a point $p \in \bigcap \mathcal{A}$, that is $p \in T_n$ for every $n \in \mathbb{N}$. [L6, step 5.1]

7.1 Let $\varepsilon > 0$ be rational and take $K \in \mathbb{N}$ with $d(x_m,x_l) < \varepsilon/2$ for all $m,l \ge K$; since $p \in T_K$, the ball $B(p,\varepsilon/2)$ meets $\{x_k : k \ge K\}$, so there is $j \ge K$ with $d(p,x_j) < \varepsilon/2$, and then $d(x_k,p) \le d(x_k,x_j) + d(x_j,p) < \varepsilon/2 + \varepsilon/2 = \varepsilon$ for every $k \ge K$. [L4, L5, L7, step 6.1]

8.1 Hence $x_k \to p$ with $p \in X$; every Cauchy sequence in $X$ converges, so $(X,d)$ is complete, and with step 2.1 the theorem is proved. [L4, step 2.1, step 7.1] ∎

## Remarks

**Why the textbook route is avoided.** The usual proof of completeness takes a Cauchy sequence, extracts a convergent subsequence and appeals to [[lem-metric-cauchy-with-convergent-subsequence]]. That is correct, but it goes through sequential compactness, and the reader tracking the ledger then has to check the cost of *that* implication before believing this one. The tail-closure argument above is shorter and manifestly selects nothing: the sets $T_n$ are given by a formula, the point $p$ is produced by one existential instantiation, and the index $j$ in step 7.1 by another.

**Neither converse holds.** A complete metric space need not be totally bounded and need not be compact ($\mathbb{R}$ is complete and unbounded), and a totally bounded space need not be compact ([[fs-totally-bounded-implies-compact]], [[cex-totally-bounded-not-compact]]). What is true is that, assuming the Axiom of Countable Choice, the two together are equivalent to compactness; the missing direction is [[thm-complete-and-totally-bounded-implies-compact]], and that is exactly where the Axiom of Countable Choice is spent.
````

### `thm-compact-implies-the-other-compactness-forms`

````markdown
---
id: thm-compact-implies-the-other-compactness-forms
kind: theorem
title: "In any metric space compactness implies countable compactness and limit point compactness, and each of countable compactness and limit point compactness implies sequential compactness; every implication here is proved without a choice principle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-compactness, def-metric-compactness-variants, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-metric-topology, thm-metric-open-set-algebra, def-metric-ball, thm-recursion, def-finite-sum, thm-well-ordering-principle, lem-finite-choice, lem-finite-set-has-max, def-max-min, def-canonical-natural, lem-of-naturals-positive, thm-nat-linear-order, def-metric-convergence, lem-index-map-grows, cor-archimedean-reciprocal, thm-of-archimedean, def-sequence, def-countable, lem-countable-iff-surjection-from-n, lem-subset-of-countable, def-injection-surjection-bijection, def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "the choice-free implications"
proof_strategy: direct
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
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), with compactness as in
[[def-metric-compactness]] and the three variants as in
[[def-metric-compactness-variants]]. Then:

1. If $(X,d)$ is compact, it is countably compact.
2. If $(X,d)$ is compact, it is limit point compact.
3. If $(X,d)$ is countably compact, it is sequentially compact.
4. If $(X,d)$ is limit point compact, it is sequentially compact.

**Every one of the four is a theorem of ZF.** Where a subsequence is extracted,
the index at each stage is the **least** admissible one, which
[[thm-well-ordering-principle]] makes canonical and [[thm-recursion]] then
assembles into a function; where finitely many indices have to be recovered from
finitely many sets, [[lem-finite-choice]] supplies them and is itself a theorem
of ZF. Nothing below appeals to countable or to dependent choice.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, whichever of the four properties is assumed in the claim under proof.

[L1] The definitions: $(X,d)$ is compact when every family of open subsets with union $X$ has a finite subfamily with union $X$; countably compact when every such family that is at most countable does; sequentially compact when every sequence has a subsequence converging in $X$; limit point compact when every infinite subset has a limit point in $X$, where $p$ is a limit point of $A$ when $B(p,r) \cap (A \setminus \{p\}) \ne \emptyset$ for every real $r>0$ ([[def-metric-compactness]], [[def-metric-compactness-variants]], [[def-metric-interior-closure-boundary]], [[def-sequence]]).

[L3] Open balls are open, an arbitrary union of open sets is open, and a set is closed exactly when its complement is open ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[def-metric-ball]]).

[L4] The closure $\overline{S}$ is closed, contains $S$ and is the smallest closed superset of $S$; and $x \in \overline{S}$ exactly when $B(x,r) \cap S \ne \emptyset$ for every real $r > 0$ ([[thm-metric-closure-characterisation]], [[def-metric-interior-closure-boundary]]).

[L5] Recursion: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(n+1) = f(g(n))$; when the recursion rule depends on the stage, it is applied to $A = \mathbb{N} \times Z$ and the first coordinate of $g(n)$ is $n$, by the small induction recorded in [[def-finite-sum]] ([[thm-recursion]]).

[L6] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L7] A finite list $n_0, \dots, n_p$ of natural numbers has a greatest member: the reals $\iota(n_0+1), \dots, \iota(n_p+1)$, with $\iota$ the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), form a nonempty finite set of reals and so have a maximum, which is one of them, say $\iota(n_j+1)$ ([[lem-finite-set-has-max]], [[def-max-min]]); $m \mapsto \iota(m)$ is strictly increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]) and the order of $\mathbb{N}$ is linear ([[thm-nat-linear-order]]), so $n_i \le n_j$ for every $i \le p$.

[L8] A nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Finiteness: a set listed as $\{a_0, \dots, a_n\}$ is finite, a nonempty finite set can be listed, and a subset of $\mathbb{N}$ bounded above is finite ([[def-metric-compactness]], [[def-countable]], [[lem-subset-of-countable]]); an injection carries a set to a set in bijection with its image ([[def-injection-surjection-bijection]]).

[L10] A family indexed by $\mathbb{N}$ is at most countable, being the image of a surjection from $\mathbb{N}$ ([[def-countable]], [[lem-countable-iff-surjection-from-n]]).

[L11] $x_k \to p$ when for every rational $\varepsilon > 0$ there is $K$ with $d(x_k,p) < \varepsilon$ for $k \ge K$; and for every real $\varepsilon > 0$ there is a natural $N \ge 1$ with $1/N < \varepsilon$ ([[def-metric-convergence]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L12] An index map $n : \mathbb{N} \to \mathbb{N}$ with $n_k < n_{k+1}$ for every $k$ is strictly increasing, and then $n_k \ge k$ ([[lem-index-map-grows]]).

[L13] A function with domain a natural number all of whose values are nonempty sets has a choice function, in ZF ([[lem-finite-choice]]).

[L14] A metric is symmetric and satisfies the triangle inequality, and $d(x,y) = 0$ exactly when $x = y$ ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate: an at most countable family of open sets with union $X$ is in particular a family of open sets with union $X$, so compactness supplies the finite subfamily that countable compactness asks for. [L1]

2.1 For claim 2, assume $(X,d)$ compact, let $A \subseteq X$ have no limit point in $X$, and put $\mathcal{U} := \{\, U \subseteq X : U \text{ open in } X \text{ and } U \cap A \text{ has at most one element} \,\}$, a family cut out by a property; $\mathcal{U}$ has union $X$, because each $p \in X$ fails to be a limit point of $A$ and so admits $r > 0$ with $B(p,r) \cap (A \setminus \{p\}) = \emptyset$, whence $B(p,r) \in \mathcal{U}$ and $p \in B(p,r)$. [L1, L3, step 1.1]

3.1 Compactness gives $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $X = U_0 \cup \dots \cup U_n$, unless $X = \emptyset$, in which case $A = \emptyset$ is finite. [L1, step 2.1]

4.1 Define $\varphi : A \to \sigma(n)$ by letting $\varphi(a)$ be the least $i \le n$ with $a \in U_i$; this is well defined and canonical, and it is injective, since $\varphi(a) = \varphi(b) = i$ puts both $a$ and $b$ in $U_i \cap A$, a set with at most one element. Hence $A$ is in bijection with $\varphi[A]$, a subset of $\mathbb{N}$ bounded above by $n$, so $A$ is finite. [L6, L9, step 3.1]

5.1 So a subset of $X$ with no limit point in $X$ is finite; contrapositively every infinite subset of $X$ has a limit point in $X$, and $(X,d)$ is limit point compact: claim 2. [L1, step 4.1]

6.1 For claim 3, assume $(X,d)$ countably compact, let $(x_k)$ be a sequence in $X$ and put $T_n := \overline{\{\, x_k : k \ge n \,\}}$ for $n \in \mathbb{N}$. [L1, L4, step 5.1]

7.1 Each $T_n$ is closed and contains $x_n$, and $T_m \subseteq T_n$ whenever $m \ge n$, because $\{x_k : k \ge m\} \subseteq \{x_k : k \ge n\} \subseteq T_n$ and $T_m$ is the smallest closed superset of the first set. [L4, step 6.1]

8.1 Suppose for contradiction that $\bigcap_{n \in \mathbb{N}} T_n = \emptyset$; then $\mathcal{V} := \{\, X \setminus T_n : n \in \mathbb{N} \,\}$ is an at most countable family of open subsets of $X$ whose union is $X \setminus \bigcap_{n} T_n = X$. [L3, L10, step 7.1, assume-contra]

9.1 Countable compactness gives a finite subfamily $V_0, \dots, V_p$ of $\mathcal{V}$ with union $X$; putting $W_i := X \setminus V_i$, each $W_i$ equals $T_n$ for at least one $n$, so finite choice applied to $i \mapsto \{\, n \in \mathbb{N} : T_n = W_i \,\}$ yields indices $n_0, \dots, n_p$ with $W_i = T_{n_i}$, and a greatest member $n_j$ of that list satisfies $T_{n_j} \subseteq T_{n_i}$ for every $i \le p$. [L7, L13, step 8.1]

10.1 Then $T_{n_j} = T_{n_0} \cap \dots \cap T_{n_p} = X \setminus (V_0 \cup \dots \cup V_p) = \emptyset$, contradicting $x_{n_j} \in T_{n_j}$. [step 7.1, step 9.1, discharge-contradiction]

11.1 Hence there is $p \in X$ with $p \in T_n$ for every $n \in \mathbb{N}$. [step 10.1]

12.1 For every $k \in \mathbb{N}$ and every $m \in \mathbb{N}$ the set $\{\, j \in \mathbb{N} : j > m \text{ and } d(x_j,p) < 1/(k+2) \,\}$ is nonempty, since $p \in T_{m+1}$ means that the ball $B(p, 1/(k+2))$ meets $\{x_j : j \ge m+1\}$; so it has a least element, and likewise $\{\, j : d(x_j,p) < 1 \,\}$ is nonempty and has a least element $m_0$. [L4, L6, L11, step 11.1]

13.1 Applying recursion on $\mathbb{N} \times \mathbb{N}$ to the starting value $(0, m_0)$ and the rule $f(k,m) := (k+1,\ \text{the least } j > m \text{ with } d(x_j,p) < 1/(k+2))$ produces $g : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ whose first coordinate at $k$ is $k$; write $n_k$ for its second coordinate. [L5, step 12.1]

14.1 Then $n_k < n_{k+1}$ for every $k$, so $k \mapsto n_k$ is strictly increasing, and $d(x_{n_k},p) < 1/(k+1)$ for every $k$, the case $k = 0$ being the choice of $m_0$. [L12, step 13.1]

15.1 Given a rational $\varepsilon > 0$ take a natural $N \ge 1$ with $1/N < \varepsilon$; for $k \ge N$ one has $k + 1 > N$ and so $d(x_{n_k},p) < 1/(k+1) < 1/N < \varepsilon$. Hence $x_{n_k} \to p$, the sequence $(x_k)$ has a convergent subsequence, and $(X,d)$ is sequentially compact: claim 3. [L1, L11, step 14.1]

16.1 For claim 4, assume $(X,d)$ limit point compact, let $(x_k)$ be a sequence in $X$ and let $R := \{\, x_k : k \in \mathbb{N} \,\}$ be its range, a nonempty subset of $X$. [L1, step 15.1]

17.1 Suppose first that $R$ is finite, and list it as $R = \{v_0, \dots, v_m\}$; putting $S_i := \{\, k \in \mathbb{N} : x_k = v_i \,\}$ for $i \le m$ gives $\mathbb{N} = S_0 \cup \dots \cup S_m$. [L9, step 16.1]

18.1 Some $S_i$ is unbounded in $\mathbb{N}$: otherwise each $S_i$ has an upper bound in $\mathbb{N}$ and hence a least upper bound $N_i$, canonical by well-ordering, and a greatest member $N$ of the list $N_0, \dots, N_m$ would satisfy $N + 1 > N_i$ for every $i$, so that $N+1$ lies in no $S_i$, against $\mathbb{N} = S_0 \cup \dots \cup S_m$. Let $i^{\ast}$ be the least $i \le m$ for which $S_i$ is unbounded. [L6, L7, step 17.1]

19.1 Recursion applied to the starting value $\min S_{i^{\ast}}$ and the rule $f(m) := \min \{\, k \in S_{i^{\ast}} : k > m \,\}$, each of these sets being nonempty because $S_{i^{\ast}}$ is unbounded, produces a strictly increasing $k \mapsto n_k$ with $x_{n_k} = v_{i^{\ast}}$ for every $k$; a constant sequence converges to its value, so $x_{n_k} \to v_{i^{\ast}} \in X$. [L5, L6, L11, L12, L14, step 18.1]

20.1 Suppose instead that $R$ is infinite; limit point compactness then gives a limit point $p \in X$ of $R$. [L1, step 19.1]

21.1 Suppose for contradiction that some real $r > 0$ and some $N \in \mathbb{N}$ satisfy $d(x_k,p) \ge r$ for every $k \ge N$. [step 20.1, assume-contra]

22.1 Let $E$ be the set listed by $r$ together with the $N$ entries $e_k$ for $k < N$, where $e_k := d(x_k,p)$ if $x_k \ne p$ and $e_k := r$ otherwise; every listed entry is a positive real, so $E$ is a nonempty finite set of positive reals and $s := \min E > 0$. Then $B(p,s)$ misses $R \setminus \{p\}$: a point of $R \setminus \{p\}$ is $x_k$ with $x_k \ne p$, and $d(x_k,p) \ge r \ge s$ when $k \ge N$, while $d(x_k,p) = e_k \ge s$ when $k < N$. That contradicts $p$ being a limit point of $R$. [L1, L8, L14, step 21.1, discharge-contradiction]

23.1 Hence for every real $r > 0$ and every $N \in \mathbb{N}$ there is $k \ge N$ with $d(x_k,p) < r$. [step 22.1]

24.1 Consequently, for every $k$ and every $m$ the set $\{\, j > m : d(x_j,p) < 1/(k+2) \,\}$ is nonempty, as is $\{\, j : d(x_j,p) < 1 \,\}$, and the recursion of steps 13.1 and 14.1 applies verbatim, producing a strictly increasing $k \mapsto n_k$ with $d(x_{n_k},p) < 1/(k+1)$; by the estimate of step 15.1, $x_{n_k} \to p$. [L5, L6, L11, L12, step 13.1, step 14.1, step 15.1, step 23.1]

25.1 In both cases $(x_k)$ has a subsequence converging in $X$, so $(X,d)$ is sequentially compact: claim 4. [L1, step 19.1, step 24.1]

26.1 Claims 1, 2, 3 and 4 are proved by steps 1.1, 5.1, 15.1 and 25.1 respectively. [step 1.1, step 5.1, step 15.1, step 25.1] ∎

## Remarks

**Why "least" and not "some".** At every stage of every recursion above, the next index is the least one meeting the requirement. That is what keeps the four implications inside ZF: a rule that says "take some admissible $j$" would be a selection made infinitely often, and one made in terms of the previous stage, which is dependent choice ([[def-dependent-choice]]) rather than countable choice. The same device is what [[thm-sequentially-compact-implies-totally-bounded]] cannot use, and that is exactly why that theorem, alone among the implications between the compactness properties on this page, costs dependent choice. It is not the only implication on the page with a choice cost: [[thm-complete-and-totally-bounded-implies-compact]] spends countable choice, for the different reason that it needs one net for every radius at once. The arrow-by-arrow accounting is [[rem-compactness-choice-ledger-metric]].

**Finite selections are free.** Step 9.1 does select, but only over the finite index set $\{0, \dots, p\}$, and [[lem-finite-choice]] proves that such a selection exists in ZF by induction on the size of the index set. Nothing is being smuggled in: what a choice principle buys is infinitely many selections at once.

**The two routes to sequential compactness are genuinely different.** Claim 3 works with the closures of the tails of the given sequence and needs the countable cover they generate; claim 4 works with the range of the sequence and splits on whether it is finite. Neither argument subsumes the other, and both are needed, because the equivalence proved in [[thm-metric-compactness-equivalences]] passes through both.
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

### `thm-metric-compactness-equivalences`

````markdown
---
id: thm-metric-compactness-equivalences
kind: theorem
title: "For a metric space, compact, countably compact, limit point compact, sequentially compact, and complete together with totally bounded are all equivalent, given countable choice and dependent choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-compact-implies-complete-and-totally-bounded, thm-compact-implies-the-other-compactness-forms, lem-sequentially-compact-implies-complete, thm-sequentially-compact-implies-totally-bounded, thm-complete-and-totally-bounded-implies-compact, def-metric-compactness, def-metric-compactness-variants, def-totally-bounded, def-complete-metric-space, def-countable-choice, def-dependent-choice, def-metric-space]
justified_by: []
aliases: [thm-compactness-trichotomy-metric]
landmark: true
short: "the compactness equivalences"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2-3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom
of Dependent Choice ([[def-dependent-choice]]).** Let $(X,d)$ be a metric space
([[def-metric-space]]). Then the following five conditions are equivalent.

- **(a)** $(X,d)$ is compact ([[def-metric-compactness]]).
- **(b)** $(X,d)$ is countably compact ([[def-metric-compactness-variants]]).
- **(c)** $(X,d)$ is limit point compact.
- **(d)** $(X,d)$ is sequentially compact.
- **(e)** $(X,d)$ is complete ([[def-complete-metric-space]]) and totally bounded
  ([[def-totally-bounded]]).

**The two hypotheses are not needed everywhere, and the statement should not be
read as if they were.** Of the implications assembled below, all but two are
theorems of ZF. Dependent choice is used only for "sequentially compact implies
totally bounded" ([[thm-sequentially-compact-implies-totally-bounded]]), and
countable choice only for "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]). Each is an upper bound on
the cost of the proof given in this library and not a claim of necessity; the
implication-by-implication account is
[[rem-compactness-choice-ledger-metric]].

## Facts & Assumptions

**Given:** A metric space $(X,d)$, the Axiom of Countable Choice, and the Axiom of Dependent Choice.

[L1] In ZF: a compact metric space is countably compact and limit point compact, and each of countable compactness and limit point compactness implies sequential compactness ([[thm-compact-implies-the-other-compactness-forms]]).

[L2] In ZF: a sequentially compact metric space is complete ([[lem-sequentially-compact-implies-complete]]).

[L3] Assuming dependent choice: a sequentially compact metric space is totally bounded ([[thm-sequentially-compact-implies-totally-bounded]]).

[L4] Assuming countable choice: a complete, totally bounded metric space is compact ([[thm-complete-and-totally-bounded-implies-compact]]).

[L5] In ZF: a compact metric space is complete and totally bounded ([[thm-compact-implies-complete-and-totally-bounded]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b), and (a) implies (c). [L1]

1.2 (b) implies (d), and (c) implies (d). [L1]

2.1 (d) implies (e): completeness of a sequentially compact space is a theorem of ZF, and total boundedness follows from dependent choice. [L2, L3, step 1.2]

3.1 (e) implies (a), by countable choice. [L4, step 2.1]

4.1 The cycle (a) $\Rightarrow$ (b) $\Rightarrow$ (d) $\Rightarrow$ (e) $\Rightarrow$ (a) is closed by steps 1.1, 1.2, 2.1 and 3.1, so the four conditions (a), (b), (d) and (e) are equivalent to one another. [step 1.1, step 1.2, step 2.1, step 3.1]

5.1 Condition (c) joins them: (a) implies (c) by step 1.1 and (c) implies (d) by step 1.2, while (d) implies (a) through the cycle of step 4.1. [step 1.1, step 1.2, step 4.1]

6.1 Hence all five conditions are equivalent; and the implication (a) $\Rightarrow$ (e), which the cycle obtains only by going round through (b) and (d), also holds directly and choice-freely. [L5, step 4.1, step 5.1] ∎

## Remarks

**Read the equivalence with the ledger beside it.** The theorem as stated carries two choice hypotheses, and a reader working in ZF alone still keeps a great deal: by [[thm-compact-implies-the-other-compactness-forms]] and [[thm-compact-implies-complete-and-totally-bounded]], compactness implies all four of the other conditions with no choice at all, and by [[lem-sequentially-compact-implies-complete]] sequential compactness implies completeness. What fails without choice is the return journey, from the weaker conditions back to compactness.

**The direct route from (a) to (e) is worth keeping.** Step 6.1 records that [[thm-compact-implies-complete-and-totally-bounded]] proves (a) $\Rightarrow$ (e) in ZF, whereas reading it off the cycle would route it through (b) and (d) and, at the last leg, through dependent choice. A cycle of implications transmits the weakest hypothesis around it; the individual arrows do not, and it is the individual arrows that the ledger records.

**Nothing here is claimed for topological spaces.** All five conditions make sense more generally, and the equivalences above are proved for metric spaces only, every argument using the metric.
````

