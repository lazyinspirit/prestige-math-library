# Audit proof-refuter brief — Wave 11, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or counterexample, actively search for a
counterexample to the public claim or a failure in the witness. A false public
claim, invalid proof, missing necessary hypothesis, circularity, or materially
inaccurate load-bearing citation is fatal; a quickly closable gap is nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- Wave 11 ai-generated Statement seed
- pending Wave 11 generated-risk seed (cone 0)

## Target item — `rem-darboux-lhopital-taylor-scope`

Normalized current SHA-256: `706099f4d6848a3a4c91f83ccf748472764e781da1ee13578e5fe3dca8d25a1f`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: rem-darboux-lhopital-taylor-scope
kind: remark
title: "Scope, endpoint, factorial, and deferred-remainder conventions"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-higher-derivatives-and-smoothness, def-neighbourhood-r, thm-darboux-theorem-for-derivatives, thm-lhopital-zero-over-zero, thm-lhopital-infinity-over-infinity, thm-taylor-schlomilch-roche-remainder, thm-taylor-peano-remainder, def-factorial-and-falling-factorial, def-binomial-coefficient, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
pipeline_run: null
---

## Remarks

Higher derivatives are the recursive objects of [[def-higher-derivatives-and-smoothness]]. Darboux's theorem ([[thm-darboux-theorem-for-derivatives]]) concerns every first derivative, without assuming that derivative continuous. The two L'Hôpital theorems, [[thm-lhopital-zero-over-zero]] and [[thm-lhopital-infinity-over-infinity]], require their stated derivative and nonvanishing hypotheses and do not assert converses.

Endpoint derivatives and finite-endpoint limits are one-sided when the domain supplies only one side. Natural factorials and binomial coefficients ([[def-factorial-and-falling-factorial]], [[def-binomial-coefficient]]) enter real formulas through the canonical embedding $\iota$ of [[def-canonical-natural]]. Darboux's property alone has no general continuity converse; the page proves continuity only under the stated injectivity or monotonicity hypotheses.

The Schlömilch-Roche formula ([[thm-taylor-schlomilch-roche-remainder]]) assumes
an $(n+1)$-st derivative on an interval. Peano's formula
([[thm-taylor-peano-remainder]]) assumes $n$-fold differentiability on an
open interval $N_\delta(a)$ around the expansion point
([[def-neighbourhood-r]]), but not continuity of the $n$-th derivative. No
integral remainder, Borel interpolation theorem, or assertion about Dini
derivatives is made here.
````

## Wave 11 provenance row

```json
{
  "id": "rem-darboux-lhopital-taylor-scope",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "none",
  "urls": [],
  "rationale": "This is a repository-specific scope statement about the exact conventions and deliberate omissions of the current page, not an established mathematical proposition. Each mathematical cross-reference and every asserted omission was checked directly against the cited on-disk item and page.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

No Wave 11 proof contract is required for this target.

## Generated audit-manifest relationships

```json
[
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-higher-derivatives-and-smoothness",
    "declared_target": "def-higher-derivatives-and-smoothness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-darboux-theorem-for-derivatives",
    "declared_target": "thm-darboux-theorem-for-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-lhopital-zero-over-zero",
    "declared_target": "thm-lhopital-zero-over-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-lhopital-infinity-over-infinity",
    "declared_target": "thm-lhopital-infinity-over-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-taylor-schlomilch-roche-remainder",
    "declared_target": "thm-taylor-schlomilch-roche-remainder",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-taylor-peano-remainder",
    "declared_target": "thm-taylor-peano-remainder",
    "target_statement_provenance": "literature-derived",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-factorial-and-falling-factorial",
    "declared_target": "def-factorial-and-falling-factorial",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-binomial-coefficient",
    "declared_target": "def-binomial-coefficient",
    "target_statement_provenance": "literature-derived",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[
  {
    "id": "rem-darboux-lhopital-taylor-scope",
    "file": "items/rem-darboux-lhopital-taylor-scope.md",
    "source": "provenance",
    "cone_size": 0,
    "logical_consumers": [],
    "direct_citation_consumers": [],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full exact-current text of every cited or declared item (10)

### `def-binomial-coefficient`

````markdown
---
id: def-binomial-coefficient
kind: definition
title: "The set $[A]^{k}$ of $k$-element subsets and the binomial coefficient $\\binom{n}{k} := \\lvert [n]^{k}\\rvert$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-cardinality, cor-cardinality-of-the-power-set, thm-subset-of-a-finite-set,
       def-injection-surjection-bijection, def-equinumerous, def-natural-numbers,
       def-nat-order, lem-nat-order-is-membership, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: true
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
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Combination"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Definition

For a finite set $A$ and $k \in \mathbb{N}$ put

$$[A]^{k} := \{\, S \subseteq A \ :\ \lvert S\rvert = k \,\},$$

the set of $k$-element subsets of $A$. Every $S \subseteq A$ is finite
([[thm-subset-of-a-finite-set]]), so the condition $\lvert S\rvert = k$ makes
sense for every subset.

**$[A]^{k}$ is finite.** It is a subset of $\mathcal{P}(A)$, which is finite by
[[cor-cardinality-of-the-power-set]], so [[thm-subset-of-a-finite-set]] applies.

**$\lvert [A]^{k}\rvert$ depends only on $\lvert A\rvert$.** Let $h : A \to A'$ be
a bijection of finite sets. The direct image map $S \mapsto h[S]$ carries
$[A]^{k}$ into $[A']^{k}$, because $h$ restricted to $S$ is a bijection of $S$
onto $h[S]$ and so $\lvert h[S]\rvert = \lvert S\rvert = k$ by the transport
clause of [[def-finite-cardinality]]; the map $T \mapsto h^{-1}[T]$ is its
two-sided inverse, since $h^{-1}[h[S]] = S$ and $h[h^{-1}[T]] = T$ for a
bijection $h$. So $[A]^{k} \approx [A']^{k}$ and the two have the same
cardinality.

**Definition.** For $n, k \in \mathbb{N}$ set

$$\binom{n}{k} := \big\lvert\, [n]^{k} \,\big\rvert \in \mathbb{N},$$

the **binomial coefficient**. By the previous paragraph and $\lvert n\rvert = n$,

$$\big\lvert [A]^{k}\big\rvert = \binom{\lvert A\rvert}{k} \qquad \text{for every finite } A .$$

**$\binom{n}{k}$ is a count, so it is a natural number by construction.** It is
*not* defined as $n!/(k!\,(n-k)!)$: that expression involves a division, hence
lives in $\mathbb{R}$, and the assertion that its value is a natural number is a
theorem, proved in [[thm-binomial-closed-formula]]. Defining the coefficient as a
count makes integrality free and leaves the closed formula something to prove.

**Boundary values, read off the definition and not stipulated.**

- $\binom{n}{0} = 1$ **for every $n$, including $n = 0$**: the subsets of $n$ of
  cardinality $0$ are exactly the subsets equal to $\varnothing$
  ([[def-finite-cardinality]], clause (b)), so $[n]^{0} = \{\varnothing\}$, a
  one-element set. No empty-product convention is involved.
- $\binom{n}{n} = 1$: if $S \subseteq n$ has $\lvert S\rvert = n = \lvert n\rvert$
  then $S = n$ by clause 3 of [[thm-subset-of-a-finite-set]], so
  $[n]^{n} = \{n\}$.
- $\binom{n}{k} = 0$ for $k > n$: a subset $S \subseteq n$ has
  $\lvert S\rvert \le n$ by clause 2 of [[thm-subset-of-a-finite-set]], so
  $\lvert S\rvert = k > n$ is impossible and $[n]^{k} = \varnothing$
  ([[lem-nat-trichotomy]]).
- $\binom{n}{1} = n$: a subset of cardinality $1$ is $\{x\}$ for exactly one
  $x \in n$, since $\lvert S\rvert = 1$ means $S \approx \{0\}$; so
  $S \mapsto$ its unique element is a bijection $[n]^{1} \to n$.
- $\binom{0}{0} = 1$ and $\binom{0}{k} = 0$ for $k \ge 1$, both instances of the
  above.

## Remarks

- **Notation.** $[A]^{k}$ is standard for the set of $k$-element subsets; it is
  unrelated to the notation $A^{B}$ for a set of functions, which appears on this
  page as well. Where confusion is possible the words are used in full.

- **Symmetry is not visible yet.** $\binom{n}{k} = \binom{n}{n-k}$ is proved in
  [[thm-binomial-closed-formula]] by exhibiting the complementation bijection
  $S \mapsto n \setminus S$; from the definition alone there is no reason for the
  two counts to agree.

- **$0$ is a legitimate value of $k$ and of $n$.** Every boundary clause above is
  checked at $0$, which is where a statement about binomial coefficients most
  often goes wrong in this library's index convention.
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

### `def-factorial-and-falling-factorial`

````markdown
---
id: def-factorial-and-falling-factorial
kind: definition
title: "The factorial $n!$ and the falling factorial $n^{\\underline{k}}$, defined by recursion in $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-nat-multiplication,
       lem-nat-mult-associative, lem-nat-mult-commutative, lem-nat-mult-identity,
       lem-nat-mult-cancellative, lem-nat-add-cancellative, def-nat-order,
       lem-nat-nonzero-is-successor, thm-omega-is-peano-system, def-canonical-natural]
justified_by: []
forward_refs: [lem-factorial-beats-geometric, def-monoid-finite-product]
aliases: []
landmark: true
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
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "Falling and rising factorials (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Falling_and_rising_factorials"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
pipeline_run: null
---

## Definition

**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the
set $\mathbb{N}\times\mathbb{N}$, the starting element $(0,1)$ and the function
$f(k, v) = (\sigma(k),\, v \cdot \sigma(k))$, and by the same induction on the
first coordinate as in [[def-nat-finite-sum-and-product]], there is a unique
$F : \mathbb{N} \to \mathbb{N}$ with

$$F(0) = 1, \qquad F(\sigma(n)) = F(n)\cdot\sigma(n) \quad (n \in \mathbb{N}).$$

We write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\cdot 1 = 1$, $2! = 1!\cdot 2 = 2$,
$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.

**$0! = 1$ is the base clause of this recursion**, not a convention imported from
elsewhere. Nothing about empty products is presupposed; the agreement with the
empty product is proved below, in clause (a), rather than assumed.

**Truncated difference.** Throughout, $n - k$ is the operation fixed in
[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when
$k \le n$, and $0$ when $n < k$.

**The falling factorial.** For $n \in \mathbb{N}$ define $n^{\underline{k}}$ by
recursion on $k$, by the recursion theorem applied to
$\mathbb{N}\times\mathbb{N}$ with starting element $(0,1)$ and
$f(k, v) = (\sigma(k),\, v \cdot (n-k))$:

$$n^{\underline{0}} = 1, \qquad n^{\underline{\sigma(k)}} = n^{\underline{k}}\cdot(n-k) .$$

So $n^{\underline{1}} = 1\cdot(n-0) = n$ and $n^{\underline{2}} = n\,(n-1)$, and
for $k \le n$ the value is the product $n(n-1)\cdots(n-k+1)$ of the $k$ topmost
factors.

**Four facts, proved here because the page uses each of them.**

**(a) The factorial is the product of the first $n$ positive naturals.**
$n! = \prod_{j<n}\sigma(j) = \prod_{j<n}(j+1)$, the $\mathbb{N}$-valued product of
[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at
$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and
$\prod_{j<\sigma(n)}\sigma(j) = \big(\prod_{j<n}\sigma(j)\big)\cdot\sigma(n) = n!\cdot\sigma(n) = \sigma(n)!$.
**So the empty-product reading and the base-clause reading are the same reading**,
and neither was assumed.

**(b) $n! \ne 0$, and $\iota(n!) = \prod^{\mathbb{R}}_{j<n}\iota(j+1)$.** For the
first, $0! = 1 \ne 0$ ([[thm-omega-is-peano-system]]) and
$\sigma(n)! = n!\cdot\sigma(n)$ is a product of two nonzero naturals, which is
nonzero: if $xy = 0$ with $y \ne 0$ then $xy = 0\cdot y$
([[lem-nat-mult-identity]]) and cancellation gives $x = 0$
([[lem-nat-mult-cancellative]]). So $n! \ne 0$ for every $n$ by induction. For the second, apply the bridge clause
6 of that lemma to clause (a) above. This is what makes the factorial of this
page and the real-valued product $\prod_{j<n}(j+1)$ used elsewhere in the library
**one object seen twice**, rather than two unrelated notions.

**(c) $n^{\underline{k}}\cdot(n-k)! = n!$ for $k \le n$.** Induction on $k$, for
all $n$ at once. At $k = 0$ this reads $1 \cdot n! = n!$. Assume it at $k$ and
let $\sigma(k) \le n$; then $k \le n$, and writing $d := n - k$ we have
$k + d = n$ and $d \ne 0$, since $k + 0 = k \ne n$; so $d = \sigma(e)$ for a
unique $e$ ([[lem-nat-nonzero-is-successor]]), and $\sigma(k) + e = n$, that is
$e = n - \sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore
$n^{\underline{\sigma(k)}}\cdot\big(n-\sigma(k)\big)! = n^{\underline{k}}\cdot(n-k)\cdot e! = n^{\underline{k}}\cdot\big(e!\cdot\sigma(e)\big) = n^{\underline{k}}\cdot\sigma(e)! = n^{\underline{k}}\cdot(n-k)! = n!$,
using commutativity and associativity of multiplication
([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion
clause for the factorial.

**(d) Boundary values.** $n^{\underline{0}} = 1$ for every $n$, by the base
clause; $n^{\underline{n}} = n!$, since clause (c) at $k = n$ gives
$n^{\underline{n}}\cdot 0! = n!$ and $0! = 1$; and
$n^{\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives
$n^{\underline{\sigma(n)}} = n^{\underline{n}}\cdot 0 = 0$, the clause
$x \cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if
$n^{\underline{k}} = 0$ then
$n^{\underline{\sigma(k)}} = 0$ as well, so $n^{\underline{k}} = 0$ for every
$k \ge \sigma(n)$ by induction.

## Remarks

- **Why $0! = 1$ is not imported.** The empty-product convention of an arbitrary
  monoid is fixed in [[def-monoid-finite-product]], which comes later in the
  reading order, so citing it here would be a dependency pointing the wrong way.
  Taking $0! = 1$ as the base clause of the factorial's own recursion costs
  nothing and owes nothing, and clause (a) then records the agreement.

- **The library's other factorial.** [[lem-factorial-beats-geometric]], later in
  the reading order, works with a real-valued factorial defined as the product
  $\prod_{j<n}(j+1)$ in $\mathbb{R}$. Clause (b) says that this is exactly
  $\iota(n!)$, so the two agree and no second notion has been created. That
  pointer is orientation only.

- **Check every clause at $k = 0$ and at $k = n$.** The falling factorial is
  defined by two regimes, one for $k \le n$ and one beyond, and the recursion
  above covers both because the truncated difference is $0$ past the end. The
  two values that get used constantly are $n^{\underline{0}} = 1$ and
  $n^{\underline{n}} = n!$, and both are clause (d).
````

### `def-higher-derivatives-and-smoothness`

````markdown
---
id: def-higher-derivatives-and-smoothness
kind: definition
title: "Higher derivatives and the classes $C^k$ and $C^\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-derivative, def-continuity-real, def-one-sided-limits, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Definition

Let $I\subseteq\mathbb R$ be an interval and $f:I\to\mathbb R$. Put $f^{(0)}:=f$. Recursively, wherever $f^{(j)}$ is differentiable, put $f^{(j+1)}:=(f^{(j)})'$, with derivatives at endpoints understood in the one-sided sense fixed by [[def-derivative]] and [[def-one-sided-limits]].

For $k\in\mathbb N$, the function is **$k$-times differentiable** on $I$ if $f^{(j)}$ exists on $I$ for every $j\le k$. It is of class **$C^k$** on $I$ if these derivatives exist and every $f^{(j)}$, $0\le j\le k$, is continuous on $I$ ([[def-continuity-real]]). It is **smooth**, or $C^\infty$, if it is $C^k$ for every $k\in\mathbb N$.

Since $0\in\mathbb N$ ([[def-natural-numbers]]), $C^0$ means continuity. The definitions also give $C^{k+1}\subseteq C^k$. Existence of $f^{(k)}$ alone does not assert that $f^{(k)}$ is continuous.
````

### `def-neighbourhood-r`

````markdown
---
id: def-neighbourhood-r
kind: definition
title: "The $\\varepsilon$-neighbourhood and the punctured $\\varepsilon$-neighbourhood of a point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-order, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, def-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
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
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(a))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.1 and §1.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]) and its absolute value ([[def-abs-value]]).

Let $x \in \mathbb{R}$ and let $\varepsilon \in \mathbb{R}$ with
$\varepsilon > 0$. The **$\varepsilon$-neighbourhood of $x$** is

$$N_\varepsilon(x) \;:=\; \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\},$$

and the **punctured $\varepsilon$-neighbourhood of $x$** is

$$N^{*}_\varepsilon(x) \;:=\; N_\varepsilon(x) \setminus \{x\} \;=\; \{\, y \in \mathbb{R} : 0 < |y - x| < \varepsilon \,\}.$$

The two descriptions of $N^{*}_\varepsilon(x)$ agree because $|y - x| = 0$ holds
exactly when $y = x$ ([[lem-of-abs-value]]).

**A neighbourhood is an open interval.** For every $x$ and every
$\varepsilon > 0$,

$$N_\varepsilon(x) \;=\; (x - \varepsilon,\ x + \varepsilon),$$

the interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for
$\varepsilon > 0$, the equivalence $|y - x| < \varepsilon \iff -\varepsilon <
y - x < \varepsilon$, and adding $x$ throughout turns the right-hand side into
$x - \varepsilon < y < x + \varepsilon$ ([[def-ordered-field]]).

**The centre lies in its own neighbourhoods.** $x \in N_\varepsilon(x)$, since
$|x - x| = |0| = 0 < \varepsilon$ ([[lem-of-abs-value]]).

**Punctured neighbourhoods are never empty.** The element
$y := x + \varepsilon/2$ satisfies $|y - x| = \varepsilon/2$, which is
$> 0$ and $< \varepsilon$, so $y \in N^{*}_\varepsilon(x)$
([[lem-of-abs-value]], [[def-ordered-field]]).

**Monotonicity in the radius.** If $0 < \delta \le \varepsilon$ then
$N_\delta(x) \subseteq N_\varepsilon(x)$, because $|y - x| < \delta \le
\varepsilon$ ([[def-ordered-field]]).

**Nesting at an interior point.** If $y \in N_\varepsilon(x)$ and
$0 < \delta \le \varepsilon - |y - x|$, then

$$N_\delta(y) \;\subseteq\; N_\varepsilon(x).$$

Indeed for $z \in N_\delta(y)$ the triangle inequality
([[lem-of-triangle-inequality]]) gives
$|z - x| = |(z - y) + (y - x)| \le |z - y| + |y - x| < \delta + |y - x| \le
\varepsilon$. Note that $\varepsilon - |y - x| > 0$ precisely because
$y \in N_\varepsilon(x)$, so such a $\delta$ always exists.

## Remarks

- **The radius is a real number, not a rational.** Nothing on this page tests a
  condition against rational radii only. That convention belongs to
  [[def-real-limit]], where the quantifier is over rational $\varepsilon$ and
  the passage between the rational and the real form is the sanctioned remark of
  [[def-sequence]]. Here $\varepsilon$ ranges over the positive reals
  throughout, and every statement above is proved for an arbitrary positive
  real.

- **Why the punctured version is separated out.** A limit point of a set is a
  point every punctured neighbourhood of which meets the set
  ([[def-limit-point-r]]), and deleting the centre is exactly what stops a point
  of the set from qualifying automatically. The unpunctured condition defines
  the weaker notion of an adherent point, and the difference between the two is
  precisely an isolated point.

- **Nesting is the workhorse.** Almost every openness verification on this page
  has the shape "given $y$ in the set, shrink the radius by the distance
  already travelled", which is the nesting property above. It is recorded here
  once so that no later proof has to redo the triangle inequality in passing.
````

### `thm-darboux-theorem-for-derivatives`

````markdown
---
id: thm-darboux-theorem-for-derivatives
kind: theorem
title: "Darboux's theorem: every derivative has the intermediate-value property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-derivative, cor-differentiable-implies-continuous, thm-heine-borel-r, thm-extreme-value-r, thm-fermat-interior-extremum, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-interval, def-intermediate-value-property]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "J. Lebl, Basic Analysis I, Mean value theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
pipeline_run: null
---

## Statement

If $I\subseteq\mathbb R$ is an interval and $f:I\to\mathbb R$ is differentiable, then $f'$ has the intermediate value property ([[def-intermediate-value-property]]).

## Facts & Assumptions

**Given:** $x<y$ in $I$ and a real $\lambda$ between $f'(x)$ and $f'(y)$.

[L1] Differentiability implies continuity; the closed bounded interval $[x,y]$ is compact; and a continuous real function on a nonempty compact set attains its extrema ([[cor-differentiable-implies-continuous]], [[thm-heine-borel-r]], [[thm-extreme-value-r]]).

[L2] An interior extremum of a differentiable function has derivative $0$ ([[thm-fermat-interior-extremum]]).

[L3] Derivatives obey the algebra rules, and the derivative of $t\mapsto t$ is $1$ ([[thm-algebra-of-derivatives]], [[lem-derivative-of-a-power]]).

## Proof

**Proof technique:** cases.

1.1 If $\lambda=f'(x)$ or $\lambda=f'(y)$, choose that endpoint.  [assume-case endpoint, given]

1.2 Suppose $f'(x)<\lambda<f'(y)$, and define $h(t)=f(t)-\lambda t$ on $[x,y]$. Then $h'(x)<0<h'(y)$.  [assume-case increasing, L3, algebra]

1.3 If instead $f'(y)<\lambda<f'(x)$, apply the preceding argument to $-h$, obtaining an interior extremum of $h$.  [assume-case decreasing, L1, L3]

2.1 For sufficiently small positive $s,t$, the derivative inequalities give $h(x+s)<h(x)$ and $h(y-t)<h(y)$. Hence a minimum of $h$ on $[x,y]$ occurs at an interior point $c$.  [step 1.2, L1, choose]

3.1 In either strict-order case, Fermat gives $h'(c)=0$, hence $f'(c)=\lambda$. Together with the endpoint case, every intermediate value is attained.  [step 2.1, step 1.3, L2, L3, cases-exhaustive] ∎
````

### `thm-lhopital-infinity-over-infinity`

````markdown
---
id: thm-lhopital-infinity-over-infinity
kind: theorem
title: "L'Hôpital's rule for the $\\infty/\\infty$ form at finite or infinite, one-sided endpoints"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-cauchy-mean-value-quotient-form, cor-differentiable-implies-continuous, def-one-sided-limits, def-limits-at-infinity, def-extended-reals, thm-algebra-of-function-limits, def-function-limit]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "UC Davis, L'Hopital's rule"
      url: "https://www.math.ucdavis.edu/~kouba/CalcOneDIRECTORY/lhopitaldirectory/LHopital.html"
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
pipeline_run: null
---

## Statement

Let $f,g$ be differentiable on a one-sided neighbourhood of $c$, or on a tail at $+\infty$ or $-\infty$, with $g'\ne0$. Suppose $|f(x)|\to\infty$ and $|g(x)|\to\infty$ in the selected mode, with each numerator and denominator eventually of fixed sign. If $f'(x)/g'(x)\to L\in\overline{\mathbb R}$, then $f(x)/g(x)\to L$.

## Facts & Assumptions

**Given:** The stated hypotheses in one fixed approach mode.

[L1] Differentiability implies continuity, and the Cauchy quotient lemma compares increments of $f$ and $g$ with a derivative quotient at an intermediate point ([[cor-differentiable-implies-continuous]], [[lem-cauchy-mean-value-quotient-form]]).

[L2] The relevant finite and infinite limits are exactly those of [[def-function-limit]], [[def-one-sided-limits]], [[def-limits-at-infinity]], and [[def-extended-reals]].

## Proof

**Proof technique:** direct.

1.1 Fix a base point $a$ inside the domain. For variable $x$ farther toward the limiting end, [L1] gives $\frac{f(x)-f(a)}{g(x)-g(a)}=\frac{f'(\xi_x)}{g'(\xi_x)}$, where $\xi_x$ lies between $a$ and $x$.  [given, L1]

2.1 First choose $a$ sufficiently far toward the end that the derivative quotient is as close to $L$ as required throughout the remaining tail. Then the quotient of increments has the same bound for every later $x$.  [step 1.1, L2, choose]

3.1 Since $|g(x)|\to\infty$, $g(a)/g(x)\to0$; since the increment quotient is bounded in the finite-$L$ case, the identity $\frac{f(x)}{g(x)}=\frac{f(x)-f(a)}{g(x)-g(a)}\left(1-\frac{g(a)}{g(x)}\right)+\frac{f(a)}{g(x)}$ gives the finite conclusion. For $L=\pm\infty$, choose the derivative-quotient lower or upper bound first and then make the two fixed-base terms negligible, obtaining the defining arbitrary bound.  [step 2.1, L2, algebra]

4.1 Thus the quotient has limit $L$ in every stated mode.  [step 3.1] ∎
````

### `thm-lhopital-zero-over-zero`

````markdown
---
id: thm-lhopital-zero-over-zero
kind: theorem
title: "L'Hôpital's rule for the $0/0$ form at finite or infinite, one-sided endpoints"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-cauchy-mean-value-quotient-form, cor-differentiable-implies-continuous, def-one-sided-limits, def-limits-at-infinity, def-extended-reals, thm-algebra-of-function-limits, def-function-limit, thm-chain-rule, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "UC Davis, L'Hopital's rule"
      url: "https://www.math.ucdavis.edu/~kouba/CalcOneDIRECTORY/lhopitaldirectory/LHopital.html"
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
pipeline_run: null
---

## Statement

Let $c\in\mathbb R$ and let $f,g$ be differentiable on a deleted one-sided or two-sided neighbourhood of $c$, with $g'\ne0$ there. Suppose $f(x)\to0$, $g(x)\to0$ as $x\to c$ in the chosen mode. If $f'(x)/g'(x)\to L\in\overline{\mathbb R}$, then $f(x)/g(x)\to L$ in the same mode. The analogous statement at $+\infty$ or $-\infty$ follows after the substitution $t=1/x$, wherever the transformed functions are defined.

## Facts & Assumptions

**Given:** The hypotheses and one fixed approach mode.

[L1] Differentiability implies continuity, and the Cauchy quotient lemma gives a point between two arguments at which a secant quotient equals a derivative quotient ([[cor-differentiable-implies-continuous]], [[lem-cauchy-mean-value-quotient-form]]).

[L2] Finite and infinite function limits have the quantified meanings in [[def-function-limit]], [[def-one-sided-limits]], [[def-limits-at-infinity]], and [[def-extended-reals]].

[L3] Composition with $t=1/x$ is licensed by the chain rule, and ordinary finite limits obey their algebra laws ([[thm-chain-rule]], [[thm-algebra-of-function-limits]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Extend $f,g$ to $c$ by $f(c)=g(c)=0$. Their continuity at $c$ follows from the assumed zero limits, while differentiability gives continuity at every other point of the segment. For $x\ne c$ sufficiently close, the quotient lemma on the segment with endpoints $c,x$ gives $\frac{f(x)}{g(x)}=\frac{f'(\xi_x)}{g'(\xi_x)}$, where $\xi_x$ lies strictly between $c$ and $x$.  [given, L1, L2]

2.1 As $x\to c$ in the chosen mode, $\xi_x\to c$ in that mode. Applying the defining finite or infinite limit inequality to the derivative quotient therefore gives $f(x)/g(x)\to L$.  [step 1.1, L2]

3.1 At infinity, put $F(t)=f(1/t)$, $G(t)=g(1/t)$. Then $F'/G'=f'(1/t)/g'(1/t)$, since the common factor $-1/t^2$ cancels. Apply steps 1.1 and 2.1 as $t\to0^+$ or $0^-$, and translate back.  [L3, step 2.1, algebra] ∎
````

### `thm-taylor-peano-remainder`

````markdown
---
id: thm-taylor-peano-remainder
kind: theorem
title: "Peano's form: the normalized Taylor remainder tends to zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-taylor-polynomial-and-remainder, lem-taylor-polynomial-derivatives, lem-cauchy-mean-value-quotient-form, lem-derivative-of-a-power, thm-chain-rule, cor-differentiable-implies-continuous, def-derivative, def-function-limit, def-continuity-real, def-neighbourhood-r, thm-algebra-of-function-limits, thm-induction-principle, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "A. Grinshpan, Real Analysis: Peano and Lagrange remainder terms"
      url: "https://www.math.drexel.edu/~tolya/Lagrange%20remainder.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. If there is a real $\delta>0$ such that $f$ is
$n$-times differentiable on the open interval
$N_\delta(a)=(a-\delta,a+\delta)$, then
$$\frac{R_{n,a}f(x)}{(x-a)^n}\longrightarrow0\qquad(x\to a).$$
Equivalently, in the usual little-$o$ shorthand,
$f(x)=T_{n,a}f(x)+o((x-a)^n)$. For $n=0$, the analogous assertion is the
separate continuity condition at $a$: for every $\varepsilon>0$, all
domain points $x$ sufficiently near $a$ satisfy
$|f(x)-f(a)|<\varepsilon$.

## Facts & Assumptions

**Given:** The stated differentiability on the open neighbourhood $N_\delta(a)$ of [[def-neighbourhood-r]], or the separate continuity hypothesis when $n=0$.

[L1] Taylor polynomials and their matching derivatives are [[def-taylor-polynomial-and-remainder]] and [[lem-taylor-polynomial-derivatives]].

[L2] The derivative quotient is [[def-derivative]], differentiability implies continuity ([[cor-differentiable-implies-continuous]]), and continuity at $a$ has the stated quantified condition ([[def-continuity-real]]). The Cauchy quotient lemma is [[lem-cauchy-mean-value-quotient-form]], the shifted-power derivative follows from [[lem-derivative-of-a-power]] and [[thm-chain-rule]], and finite limits are [[def-function-limit]] and obey [[thm-algebra-of-function-limits]].

[L3] For $n\ge1$, the canonical real $\iota(n)$ is positive and hence nonzero ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** induction.

1.1 Under the separate $n=0$ hypothesis, the quantified assertion is exactly the definition of continuity at $a$.  [given, L2]

1.2 For $n=1$, the derivative definition gives $$\frac{f(x)-f(a)-f'(a)(x-a)}{x-a} =\frac{f(x)-f(a)}{x-a}-f'(a)\longrightarrow0.$$ This is the required base case.  [base, given, L2]

1.3 Assume $n\ge2$ and the assertion through order $n-1$. Put $R=R_{n,a}f$. Then $R(a)=R'(a)=0$, and $R'(x)=R_{n-1,a}(f')(x)$.  [L1, algebra]

2.1 By the induction hypothesis applied to $f'$, $R'(x)/(x-a)^{n-1}\to0$. Applying the Cauchy quotient lemma to $R(x)-R(a)$ and $(x-a)^n$ gives $R(x)/(x-a)^n=R'(\xi)/(\iota(n)(\xi-a)^{n-1})$ for a point $\xi$ between $a$ and $x$.  [step 1.3, ih, L2, L3]

3.1 Since $\xi\to a$, the right side tends to $0$. This proves the Peano estimate without assuming continuity of $f^{(n)}$.  [step 2.1, L2, discharge-induction] ∎
````

### `thm-taylor-schlomilch-roche-remainder`

````markdown
---
id: thm-taylor-schlomilch-roche-remainder
kind: theorem
title: "Taylor's Schlömilch–Roche remainder formula"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-taylor-polynomial-and-remainder, lem-taylor-polynomial-derivatives, def-factorial-and-falling-factorial, def-integer-power, def-canonical-natural, lem-of-naturals-positive, lem-cauchy-mean-value-quotient-form, thm-algebra-of-derivatives, lem-derivative-of-a-power, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "MathWorld, Schlömilch's remainder"
      url: "https://mathworld.wolfram.com/SchloemilchRemainder.html"
pipeline_run: null
---

## Statement

Let $n\in\mathbb N$, let $a<x$, and suppose $f$ has derivatives through order $n+1$ on $[a,x]$, with the usual endpoint continuity. For every natural $p$ with $1\le p\le n+1$, some $\xi\in(a,x)$ satisfies
$$R_{n,a}f(x)=\frac{f^{(n+1)}(\xi)}{\iota(p)\,\iota(n!)}(x-\xi)^{n+1-p}(x-a)^p.$$
The reflected formula holds when $x<a$.

## Facts & Assumptions

**Given:** $f,a,x,n,p$ as stated.

[L1] The Taylor polynomial and remainder are those of [[def-taylor-polynomial-and-remainder]], with coefficient identities from [[lem-taylor-polynomial-derivatives]].

[L2] The Cauchy mean-value quotient form is [[lem-cauchy-mean-value-quotient-form]].

[L3] Finite-sum differentiation is licensed by [[thm-algebra-of-derivatives]], [[lem-derivative-of-a-power]], and [[lem-finite-sum-laws]].

[L4] If $p\ge1$, then the canonical real $\iota(p)$ is positive and nonzero ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 Define $\Phi(t):=f(x)-\sum_{j=0}^{n}f^{(j)}(t)(x-t)^j/\iota(j!)$ and $\Psi(t):=(x-t)^p$. Telescoping after differentiating the sum gives $\Phi'(t)=-f^{(n+1)}(t)(x-t)^n/\iota(n!)$, while $\Psi'(t)=-\iota(p)(x-t)^{p-1}$.  [L1, L3, algebra]

1.2 We have $\Phi(a)=R_{n,a}f(x)$, $\Phi(x)=0$, $\Psi(a)=(x-a)^p$, and $\Psi(x)=0$. Also $\Psi'\ne0$ on $(a,x)$, because $p\ge1$, $\iota(p)>0$, and $x-t>0$.  [given, L1, L4, algebra]

2.1 Apply [L2] to $\Phi,\Psi$. For some $\xi\in(a,x)$, $\Phi(a)/\Psi(a)=\Phi'(\xi)/\Psi'(\xi)=f^{(n+1)}(\xi)(x-\xi)^{n+1-p}/(\iota(p)\iota(n!))$.  [step 1.1, step 1.2, L2]

3.1 Multiply by $(x-a)^p$. If $x<a$, interchange the interval endpoints; the same algebraic identity results.  [step 2.1, algebra] ∎
````

