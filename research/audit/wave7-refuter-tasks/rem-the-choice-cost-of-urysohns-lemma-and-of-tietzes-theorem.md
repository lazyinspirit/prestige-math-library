## Selection reasons

- Wave 7 ai-generated statement seed

## Target item — `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`

Normalized current SHA-256: `7c60f6a320fa7e4ddd8677ed5ba6250007d9e3083ce5421afd2ceb0908f05be7`

The complete current item follows, including frontmatter:

````markdown
---
id: rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem
kind: remark
title: "Which results on this page spend dependent choice, which spend countable choice, and which are theorems of ZF"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-urysohn-lemma, thm-tietze-extension-theorem,
       thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set,
       lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function, def-dependent-choice,
       def-countable-choice, lem-finite-choice,
       thm-metric-spaces-are-tychonoff-and-perfectly-normal,
       thm-perfectly-normal-implies-completely-normal, rem-separation-axiom-conventions,
       rem-choice-ledger]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: []
landmark: false
short: "choice-cost ledger for this page"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
pipeline_run: null
---

This remark extends the choice-strength bookkeeping of [[rem-choice-ledger]]
and of [[rem-separation-axiom-conventions]] §4 to the results proved on this
page, naming exactly which theorem spends which principle and at which single
step, in the spirit both of those items.

## What is proved free of any choice principle

[[def-the-dyadic-rationals-of-the-unit-interval]] is choice free: its density
argument fixes one natural number via [[thm-well-ordering-principle]], a
theorem of ZF, and one dyadic rational via a single existential instantiation,
never a simultaneous selection.

[[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] is choice
free by its own statement: given an *already constructed* family of open
sets, producing the continuous function they define costs nothing. It is
exactly because this step is free that the choice cost of
[[thm-urysohn-lemma]] can be isolated to the single step that builds the
family in the first place.

The converse clauses — that a space whose disjoint closed sets are always
separated by a continuous function is normal
([[thm-urysohn-lemma]], clause 2), and that a space with the closed-subspace
extension property is normal ([[thm-tietze-extension-theorem]], clause 2) —
use no choice principle: each cuts a given continuous function at the value
$1/2$ and reads off two disjoint open sets.

[[lem-a-uniformly-approximable-real-valued-map-is-continuous]] is choice free
throughout, including its Weierstrass-type second clause: every existential
step draws from a single nonempty set of reals or a single continuous
function, never from an infinite family at once.

## What spends dependent choice, and at which single step

[[thm-urysohn-lemma]], clause 1, spends dependent choice exactly once: the
application of [[def-dependent-choice]] that strings together the countably
many *admissible* finite-level open-set assignments built in that item's own
proof, each extending the one before. Every finite level is itself built by
[[lem-finite-choice]], a theorem of ZF, so the only place the sequence of
levels itself is assembled — rather than any one level — is where DC is
spent.

[[thm-tietze-extension-theorem]], clause 1, spends dependent choice in the
same shape and at the same kind of step: the sequence of approximating pairs
$(f_n,g_n)$, where each $g_{n+1}$ is chosen using the *particular* remainder
function $f_{n+1}$ produced from the previous stage. This dependency is
genuine — unlike the corresponding step of
[[thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set]]
below, the relation driving the recursion cannot be replaced by one that
ignores its first argument.

The following results on this page assume dependent choice purely by
inheritance, through a citation of one of the two results above, and spend no
further choice principle of their own:
[[cor-urysohns-lemma-closes-the-separation-chain]],
[[cor-tietze-for-unbounded-and-open-interval-valued-maps]],
[[thm-a-locally-compact-hausdorff-space-is-completely-regular]], and
[[cor-a-compact-hausdorff-space-is-tychonoff]].

## The one place countable choice appears, and why it costs no more than DC

The forward direction of
[[thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set]]
performs a step shaped like the Axiom of Countable Choice
([[def-countable-choice]]): a Urysohn function is selected for every level of
a fixed countable presentation $C = \bigcap_n U_n$, and the selection at level
$n$ does not depend on the one at any other level. That item's own proof
discharges this as a direct instance of dependent choice, using a relation
that carries no memory of the previous term, so the theorem is stated under
DC alone rather than under DC together with a separately-adopted
$\mathrm{AC}_\omega$.

## Contrast with the choice-free and countable-choice arrows already published

[[thm-metric-spaces-are-tychonoff-and-perfectly-normal]] proves the metric
case of every property this page's headline theorems assert for a general
normal space — Urysohn separation, the zero-set characterisation of perfect
normality — entirely free of choice, the distance function supplying every
function needed by an explicit formula. The contrast confirms that the choice
cost on this page belongs to the passage from *a* topology to *no* topology
beyond normality, not to the properties themselves.

[[thm-perfectly-normal-implies-completely-normal]], by contrast, needs only
countable choice, and for a structurally different reason than the one above:
its single choice-consuming step selects one open set for each member of a
countable family of closed sets that already exists in full before any
selection is made, with no member of the family depending on an earlier
choice. That is the textbook shape of $\mathrm{AC}_\omega$ with no disguise
needed, unlike the two DC arguments on this page.

## What this page does not attempt to show

Nothing here shows dependent choice is *necessary* for Urysohn's lemma or for
Tietze's theorem; that would be an independence result, and this library
proves none. What is recorded, with sources, in
[[rem-urysohn-lemma-not-a-zf-theorem]] is that the classical $T_4$ form of
Urysohn's lemma is a theorem of neither ZF nor ZF together with countable
choice, so the DC hypothesis carried by every theorem on this page cannot be
weakened to countable choice without leaving the space of what has been
established.
````

## Wave 7 provenance row for the target

```json
{
  "id": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "none",
  "urls": [],
  "rationale": "This is a page-specific choice-strength ledger, not a standalone established theorem. Truth-risk review found its pure-inheritance paragraph false for the perfect-normality zero-set theorem, whose proof spends a further DC instance.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

No Wave 7 proof contract is required for this target.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-urysohn-lemma",
    "declared_target": "thm-urysohn-lemma",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-tietze-extension-theorem",
    "declared_target": "thm-tietze-extension-theorem",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "declared_target": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "declared_target": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-finite-choice",
    "declared_target": "lem-finite-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-metric-spaces-are-tychonoff-and-perfectly-normal",
    "declared_target": "thm-metric-spaces-are-tychonoff-and-perfectly-normal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-perfectly-normal-implies-completely-normal",
    "declared_target": "thm-perfectly-normal-implies-completely-normal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "rem-separation-axiom-conventions",
    "declared_target": "rem-separation-axiom-conventions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "rem-choice-ledger",
    "declared_target": "rem-choice-ledger",
    "target_statement_provenance": "ai-altered",
    "targetPage": "ordinals-and-transfinite-recursion",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "rem-urysohn-lemma-not-a-zf-theorem",
    "declared_target": "rem-urysohn-lemma-not-a-zf-theorem",
    "target_statement_provenance": null,
    "targetPage": "deferred-set-theory-beyond-choice",
    "targetBatch": null,
    "edge_type": "external_mention",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (19)

### `cor-a-compact-hausdorff-space-is-tychonoff`

````markdown
---
id: cor-a-compact-hausdorff-space-is-tychonoff
kind: corollary
title: "Under dependent choice a compact Hausdorff space is Tychonoff, and its disjoint closed sets are separated by continuous functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-compact-hausdorff-space-is-regular-and-normal, thm-urysohn-lemma,
       cor-urysohns-lemma-closes-the-separation-chain, def-compact-space,
       def-completely-regular-and-tychonoff-spaces, def-hausdorff-space,
       def-t0-and-t1-spaces, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
short: "compact Hausdorff is Tychonoff (DC)"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X,\mathcal{T})$ be compact ([[def-compact-space]]) and Hausdorff
([[def-hausdorff-space]]). Then $X$ is Tychonoff
([[def-completely-regular-and-tychonoff-spaces]]), and any two disjoint closed
subsets of $X$ are separated by a continuous function into $[0,1]$ in the sense
of [[thm-urysohn-lemma]].

## Facts & Assumptions

**Given:** A compact Hausdorff topological space $(X,\mathcal{T})$, and dependent choice.

[L1] A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$ ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[L2] Under dependent choice, a normal $T_1$ space is completely regular ([[cor-urysohns-lemma-closes-the-separation-chain]]).

[L3] Under dependent choice, if $X$ is normal and $P,Q \subseteq X$ are disjoint closed sets, there is a continuous $f : X \to [0,1]$ with $P \subseteq f^{-1}(\{0\})$, $Q \subseteq f^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L4] Tychonoff means completely regular and $T_1$ ([[def-completely-regular-and-tychonoff-spaces]], [[def-t0-and-t1-spaces]]).

## Proof

**Proof technique:** direct.

1.1 $X$ is compact and Hausdorff (given); by [L1], $X$ is regular and normal, hence $T_3$ and $T_4$, that is, in particular, normal and $T_1$. [given, L1]

2.1 By [L2] applied to step 1.1 (normal and $T_1$), $X$ is completely regular. [step 1.1, L2]

2.2 Let $A, B \subseteq X$ be disjoint closed sets; by [L3] applied to step 1.1 (normal), fix a continuous $f : X \to [0,1]$ with $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$. [step 1.1, L3, choose]

3.1 By step 1.1 ($T_1$) and step 2.1 (completely regular), $X$ is Tychonoff by [L4]. [step 1.1, step 2.1, L4]

4.1 Steps 3.1 and 2.2 establish the two clauses of the statement. [step 3.1, step 2.2] ∎

## Remarks

- **Nothing here is new mathematics.** This item exists so that "compact Hausdorff" has a one-step citation to both Tychonoff-ness and to Urysohn separation, rather than requiring every citing page to chain [[thm-a-compact-hausdorff-space-is-regular-and-normal]] through [[cor-urysohns-lemma-closes-the-separation-chain]] or [[thm-urysohn-lemma]] by hand.
````

### `cor-tietze-for-unbounded-and-open-interval-valued-maps`

````markdown
---
id: cor-tietze-for-unbounded-and-open-interval-valued-maps
kind: corollary
title: "Under dependent choice, a continuous real-valued map on a closed subspace of a normal space extends to the whole space, and a map into an open interval extends into that same open interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tietze-extension-theorem, thm-urysohn-lemma, def-normal-and-t4-spaces,
       def-subspace-topology-top, def-continuous-map-top, thm-algebra-of-continuous-functions,
       def-continuity-real, lem-real-and-metric-notions-agree, def-interval,
       def-dependent-choice, def-ordered-field, lem-continuity-is-local-and-pastes,
       lem-of-abs-value, thm-continuity-characterisations-top, def-metrizable-space]
justified_by: []
aliases: []
landmark: true
short: "Tietze into $\\mathbb{R}$ and into an open interval"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
    - title: "J. Munkres, Topology, 2nd ed., §35"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X,\mathcal{T})$ be normal ([[def-normal-and-t4-spaces]]) and let
$A \subseteq X$ be closed ([[def-subspace-topology-top]]).

1. Every continuous $f : A \to \mathbb{R}$ extends to a continuous
   $F : X \to \mathbb{R}$ with $F|_A = f$.
2. For reals $a<b$, every continuous $f : A \to (a,b)$ extends to a continuous
   $F : X \to (a,b)$ with $F|_A = f$.

**Scope.** The two one-sided open interval forms of [[def-interval]],
$(a,\infty)$ and $(-\infty,b)$, are not treated by clause 2 above; extending it to them would
need an explicit order-homeomorphism between a ray and $\mathbb{R}$, which is
not built here.

## Facts & Assumptions

**Given:** Dependent choice, a normal $(X,\mathcal{T})$, a closed $A \subseteq X$; for clause 1, continuous $f : A \to \mathbb{R}$; for clause 2, reals $a<b$ and continuous $f : A \to (a,b)$.

[L1] Tietze's extension theorem, clause 1: assuming DC, if $X$ is normal, $A$ closed and $p \le q$ reals, every continuous $h : A \to [p,q]$ extends to continuous $H : X \to [p,q]$ with $H|_A = h$ ([[thm-tietze-extension-theorem]]).

[L2] Urysohn's lemma, clause 1: assuming DC, disjoint closed $P,Q \subseteq X$ admit continuous $\varphi : X \to [0,1]$ with $P \subseteq \varphi^{-1}(\{0\})$, $Q \subseteq \varphi^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] Product of two continuous real-valued maps on $X$ is continuous: for continuous $g,h:X\to\mathbb{R}$ and $x_0 \in X$, fix (continuity of $g$) open $U_0 \ni x_0$ with $|g(x)-g(x_0)|<1$ on $U_0$, so $|g(x)| < |g(x_0)|+1 =: B$ there; for real $\varepsilon>0$ fix open $U_1 \ni x_0$ with $|g(x)-g(x_0)| < \varepsilon/(2(|h(x_0)|+1))$ and open $U_2 \ni x_0$ with $|h(x)-h(x_0)|<\varepsilon/(2B)$; on $U_0 \cap U_1 \cap U_2$, $|g(x)h(x)-g(x_0)h(x_0)| \le |g(x)||h(x)-h(x_0)| + |h(x_0)||g(x)-g(x_0)| < B \cdot \varepsilon/(2B) + |h(x_0)|\cdot \varepsilon/(2(|h(x_0)|+1)) < \varepsilon$, so $gh$ is continuous at $x_0$ ([[def-continuous-map-top]], [[lem-of-abs-value]]).

[L4] Algebra of continuous real functions on $A \subseteq \mathbb{R}$: sums, scalar multiples, products, absolute values and quotients with nonvanishing denominator of continuous functions are continuous, as are constants and the identity ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L5] For $S,T \subseteq \mathbb{R}$, a map $h : S \to T$ is continuous in the sense of [[def-continuity-real]] if and only if it is continuous as a map of topological spaces (subspace topologies of $\mathbb{R}$), by [[lem-real-and-metric-notions-agree]] clause 1 (real $\Leftrightarrow$ metric continuity) together with [[def-metrizable-space]] (metric $\Leftrightarrow$ topological continuity for a metrizable space).

[L6] Preimages of closed (open) sets under a continuous map are closed (open) ([[thm-continuity-characterisations-top]]).

[L7] Composites of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]], clause 1).

## Proof

**Proof technique:** constructive.

1.1 Fix reals $a<b$. Define $\alpha : (a,b) \to (-1,1)$ by $\alpha(t) := (2t-a-b)/(b-a)$ and $\beta : (-1,1) \to (a,b)$ by $\beta(s) := ((b-a)s+a+b)/2$; both are continuous real functions by [L4], the denominators $b-a$ and $2$ being nonzero. Direct substitution gives $\beta(\alpha(t))=t$ for $t\in(a,b)$ and $\alpha(\beta(s))=s$ for $s\in(-1,1)$. [given, L4, algebra, construct]

1.2 Let $g : A \to (-1,1)$ be continuous, regarded as a map $A \to [-1,1]$; by [L1] with $p=-1,q=1$ fix continuous $G : X \to [-1,1]$ with $G|_A = g$. [given, L1, choose, construct]

1.3 Define $\psi : (-1,1) \to \mathbb{R}$ by $\psi(t) := t/(1-|t|)$ and $\chi : \mathbb{R} \to (-1,1)$ by $\chi(s) := s/(1+|s|)$; both are continuous real functions by [L4], the denominators $1-|t|$ (on $(-1,1)$) and $1+|s|$ (everywhere) being positive. For $t \ge 0$ in $(-1,1)$: $\psi(t)=t/(1-t) \ge 0$ and $\chi(\psi(t)) = \frac{t/(1-t)}{1+t/(1-t)} = \frac{t/(1-t)}{1/(1-t)} = t$; for $t<0$ the same computation with $|t|=-t$ gives $\chi(\psi(t))=t$. Likewise $\psi(\chi(s))=s$ for every real $s$, splitting on the sign of $s$. [given, L4, algebra, construct]

2.1 By [L5], $\alpha$ and $\beta$ of step 1.1 are continuous as maps of topological spaces $(a,b) \to (-1,1)$ and $(-1,1) \to (a,b)$. [step 1.1, L5]

2.2 Put $D := G^{-1}(\{-1,1\})$, closed by [L6]; $D \cap A = \varnothing$, since $G|_A = g$ takes values in $(-1,1)$. By [L2], fix continuous $\varphi : X \to [0,1]$ with $D \subseteq \varphi^{-1}(\{0\})$ and $A \subseteq \varphi^{-1}(\{1\})$. [step 1.2, L2, L6, choose]

2.3 By [L5], $\psi$ and $\chi$ of step 1.3 are continuous as maps of topological spaces $(-1,1) \to \mathbb{R}$ and $\mathbb{R} \to (-1,1)$. [step 1.3, L5]

3.1 Define $\tilde{G} : X \to \mathbb{R}$ by $\tilde{G}(x) := \varphi(x)G(x)$, continuous by [L3]. For $x \in A$: $\varphi(x)=1$, so $\tilde G(x)=G(x)=g(x)$. For $x \notin D$: $|G(x)|<1$ and $\varphi(x)\in[0,1]$, so $|\tilde G(x)| = \varphi(x)|G(x)| \le |G(x)| < 1$. For $x \in D$: $\varphi(x)=0$, so $\tilde G(x)=0$. So $\tilde G : X \to (-1,1)$ and $\tilde G|_A = g$. [step 2.2, step 1.2, L3, construct]

4.1 [Clause 2.] With $\alpha,\beta$ as in steps 1.1–2.1: $g := \alpha \circ f : A \to (-1,1)$ is continuous by [L7]; by step 3.1 fix continuous $\tilde G : X \to (-1,1)$ with $\tilde G|_A = g$; define $F := \beta \circ \tilde G : X \to (a,b)$, continuous by [L7]. For $x \in A$: $F(x) = \beta(\tilde G(x)) = \beta(g(x)) = \beta(\alpha(f(x))) = f(x)$ by step 1.1. So $F$ extends $f$ into $(a,b)$. [step 2.1, step 3.1, step 1.1, L7, algebra, construct]

4.2 [Clause 1.] Let $f : A \to \mathbb{R}$ be continuous. With $\psi,\chi$ as in steps 1.3 and 2.3: $g := \chi \circ f : A \to (-1,1)$ is continuous by [L7]; by step 3.1 fix continuous $\tilde G : X \to (-1,1)$ with $\tilde G|_A = g$; define $F := \psi \circ \tilde G : X \to \mathbb{R}$, continuous by [L7]. For $x \in A$: $F(x) = \psi(\tilde G(x)) = \psi(g(x)) = \psi(\chi(f(x))) = f(x)$ by step 1.3. So $F$ extends $f$ into $\mathbb{R}$. [step 2.3, step 3.1, step 1.3, L7, algebra, construct]

5.1 Steps 4.1 and 4.2 establish clauses 2 and 1 respectively. [step 4.1, step 4.2, discharge-construct] ∎

## Remarks

- **The affine maps of step 1.1 and the rational maps of step 1.3 play the same role**: each turns a target interval into $(-1,1)$ or back, so that the single boundary-avoidance construction of steps 1.2, 2.2 and 3.1 need be proved once and reused for both clauses. Neither clause repeats that construction.

- **The product fact [L3] is the only piece of "algebra of continuous functions" this page needs for a map out of a general topological space**; the sum and scalar-multiple facts used elsewhere on this page are proved where they are first needed, by the same style of argument.

- **Choice is spent only through [L1] and [L2]**, that is, only through the two cited results; nothing in steps 1.1–5.1 performs a further selection from an infinite family.
````

### `cor-urysohns-lemma-closes-the-separation-chain`

````markdown
---
id: cor-urysohns-lemma-closes-the-separation-chain
kind: corollary
title: "Under dependent choice a normal $T_1$ space is completely regular, so $T_4 \\Rightarrow T_{3\\frac{1}{2}}$, and together with the implications already proved this is the whole classical chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-urysohn-lemma, def-normal-and-t4-spaces, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-completely-regular-and-tychonoff-spaces,
       thm-the-separation-implication-chain, def-dependent-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "$T_4 \\Rightarrow T_{3\\frac12}$ (DC)"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). If
$(X,\mathcal{T})$ is normal and $T_1$, that is $T_4$
([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]), then $X$ is
completely regular ([[def-completely-regular-and-tychonoff-spaces]]). Since $X$
is also $T_1$, $X$ is Tychonoff, and $T_4 \Rightarrow T_{3\frac12}$.

Combined with [[thm-the-separation-implication-chain]], every arrow of

$$T_6 \Rightarrow T_5 \Rightarrow T_4 \Rightarrow T_{3\frac12} \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$$

now holds: the first arrow under the Axiom of Countable Choice
([[def-countable-choice]]), the arrow $T_4 \Rightarrow T_{3\frac12}$ proved here
under dependent choice, and every other arrow with no choice principle at all.
No arrow of this chain is asserted to reverse.

## Facts & Assumptions

**Given:** A normal, $T_1$ topological space $(X,\mathcal{T})$, a closed set $C \subseteq X$, and a point $x_0 \in X \setminus C$.

[A1] $X$ is normal ([[def-normal-and-t4-spaces]]) and $T_1$ ([[def-t0-and-t1-spaces]]).

[L1] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

[L2] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$ and $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] $X$ is completely regular when for every closed $C$ and every $x_0 \in X \setminus C$ there is a continuous $f : X \to [0,1]$ with $f(x_0) = 1$ and $f \equiv 0$ on $C$ ([[def-completely-regular-and-tychonoff-spaces]]).

[L4] Clauses 3 and 4 of [[thm-the-separation-implication-chain]]: normal with $T_1$ implies $T_3$; completely regular implies regular, and Tychonoff implies $T_3$; and clauses 1, 2 and 5 give the remaining arrows of the displayed chain, clause 1 — perfectly normal implies completely normal, that is $T_6 \Rightarrow T_5$ — under the Axiom of Countable Choice.

## Proof

**Proof technique:** direct.

1.1 $\{x_0\}$ is closed, since $X$ is $T_1$ by [A1]. [A1, L1]

1.2 $\{x_0\} \cap C = \varnothing$, since $x_0 \notin C$. [given]

2.1 By [A1] $X$ is normal, so [L2] applies to the disjoint closed sets $C$ and $\{x_0\}$: there is a continuous $f : X \to [0,1]$ with $C \subseteq f^{-1}(\{0\})$ and $\{x_0\} \subseteq f^{-1}(\{1\})$, that is $f \equiv 0$ on $C$ and $f(x_0) = 1$. [step 1.1, step 1.2, A1, L2]

3.1 Since $C$ and $x_0 \notin C$ were arbitrary, step 2.1 exhibits, for every closed $C$ and every $x_0 \in X \setminus C$, a continuous $f : X \to [0,1]$ with $f(x_0)=1$ and $f \equiv 0$ on $C$; by [L3] this makes $X$ completely regular. [step 2.1, L3]

4.1 Since $X$ is also $T_1$ by [A1], $X$ is Tychonoff, so $T_4 \Rightarrow T_{3\frac12}$. [step 3.1, A1]

5.1 By [L4], $T_{3\frac12} \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$ and $T_6 \Rightarrow T_5 \Rightarrow T_4$ all hold, the arrow $T_6 \Rightarrow T_5$ under countable choice; combined with step 4.1, every arrow of the displayed chain holds. [step 4.1, L4] ∎

## Remarks

- **This corollary supplies exactly the one arrow the published `separation-axioms` page could not reach.** That page's own `rem-separation-axiom-conventions` names the missing arrow as *normal $T_1$ implies completely regular* and records that no rearrangement of material already on that page could supply it, since the implication is Urysohn's lemma. Nothing in this corollary revisits or amends that page; it only supplies, at a later point in the reading order, the theorem that page named as absent.

- **The chain above is not asserted to be a theorem of ZF.** Its weakest link is this corollary's own dependent-choice hypothesis, and the first arrow separately costs countable choice; neither cost is removed by combining the arrows, and no clause of [[thm-the-separation-implication-chain]] is reproved here.
````

### `def-countable-choice`

````markdown
---
id: def-countable-choice
kind: definition
title: "The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
justified_by: []
external_refs: [rem-feferman-levy-model, rem-cohen-first-model]
aliases: [def-ac-omega, axiom-of-countable-choice]
landmark: false
short: "$\\mathrm{AC}_\\omega$"
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## Remarks

- **The two formulations are equivalent, and the passage between them uses no
  choice.** Given an at most countable family $\mathcal{F}$ of nonempty sets,
  either $\mathcal{F} = \varnothing$, where the empty function is a choice
  function, or a surjection $s : \mathbb{N} \to \mathcal{F}$ exists
  ([[lem-countable-iff-surjection-from-n]]); applying the indexed form to
  $X_n := s(n)$ gives $f$ with $f(n) \in s(n)$, and
  $g(S) := f(\min\{\, n : s(n) = S \,\})$ is a choice function for $\mathcal{F}$,
  the minimum being canonical by [[thm-well-ordering-principle]]. Conversely a
  choice function $g$ on the at most countable family $\{\, X_n : n \in \mathbb{N} \,\}$
  gives $f(n) := g(X_n)$.

- **$\mathrm{AC}_\omega$ is strictly weaker than the Axiom of Choice**
  ([[def-axiom-of-choice]]): AC implies it immediately, since AC applies to every
  family, while it is consistent with ZF that $\mathrm{AC}_\omega$ holds and AC
  fails. **It is also strictly stronger than what ZF proves**: it is consistent
  with ZF that $\mathrm{AC}_\omega$ fails, as Cohen's first model shows, since an
  infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]) is already a failure of $\mathrm{AC}_\omega$; the
  Feferman-Levy model ([[rem-feferman-levy-model]]) is a second witness. Both
  statements are conditional on the consistency of ZF and are external results,
  established by forcing and by permutation models; they are recorded here with
  references and are **not** proved in this library, which contains neither
  technique. Of the two, only the failure of $\mathrm{AC}_\omega$ is recorded in
  this library's catalogue of unproved results; the separation of
  $\mathrm{AC}_\omega$ from AC in the other direction is quoted from the
  references alone.

- **Dependent choice sits between them.** The Axiom of Dependent Choice
  (DC) says that if $R$ is a relation on a nonempty set $X$ such that every
  $x \in X$ has some $y$ with $x \mathbin{R} y$, then there is a sequence
  $(x_n)_{n \in \mathbb{N}}$ with $x_n \mathbin{R} x_{n+1}$ for all $n$. In ZF,
  $\mathrm{AC} \Rightarrow \mathrm{DC} \Rightarrow \mathrm{AC}_\omega$; both
  implications are theorems of ZF, and neither is proved here. That neither
  reverses is a pair of relative-consistency results of the same kind as in the
  previous bullet: if ZF is consistent, then so are ZF + DC + (not AC) and
  ZF + $\mathrm{AC}_\omega$ + (not DC). Both are established by forcing and by
  permutation models, are quoted here from the references rather than proved, and
  cannot be stated without the consistency hypothesis; so "DC is *strictly*
  between AC and $\mathrm{AC}_\omega$" is shorthand for those two conditional
  statements and is never used here as a standalone assertion. DC is the
  principle that legitimises "choose $x_0$, then choose $x_1$ depending on
  $x_0$, and so on"; $\mathrm{AC}_\omega$ only legitimises countably many
  *independent* choices made at once.

- **Being an axiom, $\mathrm{AC}_\omega$ carries no well-definedness obligation**,
  which is why this item has no `justified_by`. Its role in this library is
  bookkeeping: [[thm-countable-union-of-countable]] assumes it and flags the exact
  step that spends it, and [[fs-countable-union-theorem-of-zf]] records that the
  assumption cannot be removed.

- Every result *proved* on this page other than
  [[thm-countable-union-of-countable]] is a theorem of ZF alone. In particular
  [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]],
  [[thm-schroder-bernstein]], [[thm-rationals-countable]], [[thm-cantor-powerset]]
  and [[thm-r-uncountable]] are choice free, and each says so. The false
  statements at the end of the page are not all of that kind, and the claim above
  does not cover them: two of the three refute a ZF-provability claim only under
  the hypothesis that ZF is consistent, quoting an external independence result
  rather than proving it, and they say so in their own Facts.
````

### `def-dependent-choice`

````markdown
---
id: def-dependent-choice
kind: definition
title: "The axiom of dependent choice: a relation in which every element is related to something admits an $\\mathbb{N}$-indexed chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable-choice, def-sequence, def-natural-numbers]
justified_by: []
aliases: [def-dc]
landmark: true
short: "dependent choice (DC)"
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
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a sequence $x : \mathbb{N} \to X$ ([[def-sequence]],
> [[def-natural-numbers]]) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** [[def-choice-function]] and
[[def-axiom-of-choice]] select one element from each member of a family that is
fixed in advance, and [[def-countable-choice]] does the same for a family indexed
by $\mathbb{N}$. In both, the family is given before any selection is made. DC is
the principle needed when the $n$-th set to select from is not known until the
first $n$ selections have been made: here the admissible values of $x_{n+1}$ are
exactly the $R$-successors of $x_n$, so the family being chosen from is built
along the choosing. That is precisely the situation $\mathrm{AC}_\omega$ does not
cover, and it is why a construction "pick $x_{n+1}$ depending on $x_n$, for every
$n$ at once" is not licensed by countable choice.

**The starting point may be dropped.** The formally weaker statement obtained by
deleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there
is a sequence with $x_n \mathbin{R} x_{n+1}$ for all $n$ — is an immediate
consequence of the form above, since $X$ is nonempty and any of its elements may
be taken as $a$. The reverse derivation is standard and is not needed anywhere in
this library, so it is not carried out; every use below prescribes $x_0$.

**$R$ need not be an order and the terms need not be distinct.** What DC delivers
is a sequence, that is a function $\mathbb{N} \to X$, not a chain in the
order-theoretic sense ([[def-chain]]). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

## Remarks

**Where DC sits among the choice principles.** It is a standard fact, proved in
the references and **not** in this library, that

$$\mathrm{AC} \;\Longrightarrow\; \mathrm{DC} \;\Longrightarrow\; \mathrm{AC}_\omega ,$$

and that neither implication reverses. The non-reversals are relative-consistency
results: what they establish is that ZF, if consistent, does not prove the
missing implications, never that those implications are false. This library
contains neither forcing nor permutation models and proves no independence
result, so all of that is quoted from the references and used nowhere.

**Nothing in this library proves DC, and nothing assumes it silently.** Like
[[def-axiom-of-choice]] and [[def-countable-choice]], DC is a statement that may
be assumed or not. Every theorem whose proof uses it says so in its own
statement, and the accounting for the compactness page is collected in
[[rem-compactness-choice-ledger-metric]].

**An upper bound, never a lower one.** When a later item records that its proof
uses DC, the claim made is that the argument given here is carried out in
$\mathrm{ZF} + \mathrm{DC}$. No item claims that DC is *necessary* for the
statement proved, because establishing necessity means separating the statement
from ZF, and that is an independence result of exactly the kind this library does
not prove.
````

### `def-the-dyadic-rationals-of-the-unit-interval`

````markdown
---
id: def-the-dyadic-rationals-of-the-unit-interval
kind: definition
title: "The dyadic rationals of $[0,1]$, their finite levels $D_n$, and their density in $[0,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-integer-power, def-canonical-natural, def-nat-power,
       cor-archimedean-reciprocal, def-ordered-field, def-natural-numbers,
       def-nat-order, thm-induction-principle, thm-well-ordering-principle,
       lem-of-naturals-positive, lem-of-inverse-positive, def-countable,
       lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-dyadic-rationals]
landmark: true
short: "dyadic rationals of $[0,1]$"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dyadic rational (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dyadic_rational"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Throughout, $\iota$ is the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]),
and as is standard $\iota(k)$ is abbreviated to $k$ once no ambiguity results
([[cor-archimedean-reciprocal]]). For $m, n \in \mathbb{N}$, $m^n \in \mathbb{N}$ is the
natural-number power of [[def-nat-power]], distinct from but agreeing with the
real (integer) power $a^n$ of [[def-integer-power]] by that item's clause (d):
$\iota(m^n) = \iota(m)^n$. Writing $2$ for $\iota(2)$ as just agreed, this lets
$2^n$ be read as a natural number **or** as the real $\iota(2)^n$ interchangeably.

For $n \in \mathbb{N}$ put

$$D_n \;:=\; \Big\{\, \frac{k}{2^n} \;:\; k \in \mathbb{N},\ k \le 2^n \,\Big\} \;\subseteq\; [0,1],$$

the order $\le$ on the naturals $k$ and $2^n$ being that of [[def-nat-order]].
Each $D_n$ is
a finite subset of $[0,1]$ ([[def-interval]]) with $0, 1 \in D_n$ (the cases
$k=0$ and $k=2^n$); it has at most $2^n+1$ elements, so is finite in the sense
of [[def-countable]]. The **dyadic rationals of $[0,1]$** are

$$D \;:=\; \bigcup_{n \in \mathbb{N}} D_n \;\subseteq\; [0,1],$$

a countable union of finite sets. Each **level** $D_n$ is nested in the next:
if $k \le 2^n$ then $2k \le 2^{n+1}$ (multiplying the natural inequality by $2$),
and $\dfrac{k}{2^n} = \dfrac{2k}{2^{n+1}}$ in $\mathbb{R}$ (clearing the common
factor $\iota(2)$, licensed by [[def-ordered-field]]), so every element of $D_n$
is exhibited as an element of $D_{n+1}$; hence $D_0 \subseteq D_1 \subseteq
D_2 \subseteq \cdots$ and $D = \bigcup_n D_n$ is genuinely increasing, not
merely a union.

**The level decomposition, stated and discharged here because the recursion of
[[thm-urysohn-lemma]] consumes it.** For $n \in \mathbb{N}$,

$$D_{n+1} \;=\; D_n \,\cup\, \Big\{\, t_j := \frac{2j+1}{2^{n+1}} \;:\; j \in \mathbb{N},\ j < 2^n \,\Big\},$$

and the new points $t_j$ are pairwise distinct, none lies in $D_n$, and each
lies strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and
$s_j := (j+1)/2^n$. *Strict betweenness:* $2j < 2j+1 < 2j+2$, and dividing by
the positive $2^{n+1}$ preserves strict order ([[def-ordered-field]]), so
$r_j = 2j/2^{n+1} < t_j < (2j+2)/2^{n+1} = s_j$. *Distinctness:* $j \mapsto
2j+1$ is injective. *Disjointness from $D_n$:* $t_j = k/2^n$ with
$k \le 2^n$ would give $2j+1 = 2k$ after clearing the positive factor
$1/2^{n+1}$ and applying injectivity of $\iota$; but $k \le j$ gives
$2k \le 2j < 2j+1$, and $k \ge j+1$ gives $2k \ge 2j+2 > 2j+1$, so no such $k$
exists. *The union is all of $D_{n+1}$:* given $k/2^{n+1}$ with
$k \le 2^{n+1}$, the set $\{\, i \in \mathbb{N} : 2i > k \,\}$ is nonempty
($2(k+1) = 2k+2 > k$), so by [[thm-well-ordering-principle]] it has a least
element $i_0$, and $i_0 \ge 1$ since $2 \cdot 0 = 0 \le k$; writing
$i_0 = j+1$ ([[lem-nat-nonzero-is-successor]]) gives $2j \le k < 2j+2$, so
$k = 2j$ or $k = 2j+1$. In the first case $k/2^{n+1} = j/2^n \in D_n$ (with
$j \le 2^n$ since $2j \le 2^{n+1}$); in the second it is $t_j$ (with $j < 2^n$
since $2j+1 \le 2^{n+1}$ forces $2j < 2^{n+1}$). Finally, **any two elements of
$D$ lie together in a common level**: one lies in some $D_m$ and the other in
some $D_{m'}$, and both then lie in $D_{\max(m,m')}$ by the nesting just
proved.

**$D$ is dense in $[0,1]$: for every $x \in [0,1]$ and every real
$\varepsilon > 0$ there is $r \in D$ with $|x - r| < \varepsilon$.** First, a
growth fact about natural-number powers, proved by induction on $n$
([[thm-induction-principle]]): $2^n \ge n+1$ for every $n \in \mathbb{N}$. At
$n=0$, $2^0 = 1 = 0+1$. If $2^n \ge n+1$, then $2^{n+1} = 2^n \cdot 2 = 2^n + 2^n
\ge (n+1) + (n+1) = 2n+2 \ge n+2 = (n+1)+1$, the middle inequality adding the
inductive hypothesis to itself and the last holding since $n \ge 0$; both steps
use only that the order of $\mathbb{N}$ is compatible with addition
([[def-nat-order]]). Transporting the inequality into $\mathbb{R}$ by the
order-preserving $\iota$ ([[lem-of-naturals-positive]]) gives $\iota(2^n) \ge
\iota(n+1) = \iota(n)+1$ for every $n$.

Now fix $x \in [0,1]$ and a real $\varepsilon > 0$. By
[[cor-archimedean-reciprocal]] fix a natural $m \ge 1$ with $1/m < \varepsilon$.
Put $n := m$; then $\iota(2^n) \ge \iota(n)+1 = \iota(m)+1 > \iota(m) > 0$, so by
[[lem-of-inverse-positive]] $0 < 1/2^n < 1/m < \varepsilon$. Consider
$S := \{\, k \in \mathbb{N} : x \le k/2^n \,\}$. It is nonempty, since $k=2^n$
satisfies $x \le 1 = 2^n/2^n$ because $x \in [0,1]$; so by
[[thm-well-ordering-principle]] $S$ has a least element $k_0$, and $k_0 \le 2^n$
because $2^n \in S$. If $k_0 = 0$ then $x \le 0$, and $x \ge 0$ since $x \in
[0,1]$, so $x = 0 = 0/2^n \in D_n \subseteq D$, within distance $0 < \varepsilon$
of itself. If $k_0 \ge 1$ then $k_0 - 1 \in \mathbb{N}$ and, by minimality of
$k_0$, $k_0 - 1 \notin S$, that is $x > (k_0-1)/2^n = k_0/2^n - 1/2^n$; combined
with $x \le k_0/2^n$ this gives $|x - k_0/2^n| \le 1/2^n < \varepsilon$, and
$r := k_0/2^n \in D_n \subseteq D$ since $k_0 \le 2^n$. Either way some $r \in D$
satisfies $|x-r| < \varepsilon$.

## Remarks

- **Every dyadic rational of $[0,1]$ other than $0$ and $1$ lies strictly
  between them**, since $0 < k/2^n < 1$ exactly when $0 < k < 2^n$.

- **The finite levels, not $D$ itself, are what the construction of Urysohn's
  lemma recurses on.** $D$ is presented here as the increasing union
  $\bigcup_n D_n$ precisely so that a family indexed by $D$ can be built one
  finite level at a time, each level adding only finitely many new indices to
  the one before.
````

### `lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function`

````markdown
---
id: lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function
kind: lemma
title: "If $(U_r)_{r \\in D}$ are open with $\\overline{U_r} \\subseteq U_s$ whenever $r < s$ and $U_1 = X$, then $x \\mapsto \\inf\\{ r \\in D : x \\in U_r \\}$ is a continuous map $X \\to [0,1]$, and no choice principle is used"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-the-dyadic-rationals-of-the-unit-interval, def-topological-space,
       def-continuous-map-top, thm-continuity-characterisations-top,
       def-topology-basis-subbasis, thm-basis-criterion, def-subspace-topology-top,
       def-interval, def-infimum, thm-infimum-property,
       def-interior-closure-boundary-top, lem-real-line-is-a-metric-space,
       def-metrizable-space]
justified_by: []
aliases: [lem-dyadic-scale-continuous]
landmark: true
short: "a dyadic open scale defines a continuous function"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Bernard Badzioch, MTH 427 Topology I, Notes 10"
      url: "https://www.math.buffalo.edu/~badzioch/MTH427/_static/mth427_notes_10.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$D$ be the dyadic rationals of $[0,1]$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).
Let $(U_r)_{r \in D}$ be a family of open subsets of $X$ such that

$$\overline{U_r} \subseteq U_s \quad \text{whenever } r < s \text{ in } D, \qquad \text{and} \qquad U_1 = X.$$

Then

$$f(x) \;:=\; \inf\big(\{\, r \in D : x \in U_r \,\} \cup \{1\}\big)$$

defines a map $f : X \to [0,1]$, and $f$ is continuous.

**No choice principle is used in passing from the family $(U_r)_{r \in D}$ to
$f$.** Every existential instantiation in the proof below is a single choice
from a single nonempty set of reals, never a simultaneous selection over an
infinite index; where the family $(U_r)_{r \in D}$ itself is later built by a
choice-consuming recursion, that cost is incurred in producing the family, not
in this lemma.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the dyadic rationals $D$ of $[0,1]$, and a family $(U_r)_{r \in D}$ of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$.

[A1] Shrinking hypothesis: for $r < s$ in $D$, $\overline{U_r} \subseteq U_s$.

[A2] $U_1 = X$.

[L1] $D \subseteq [0,1]$, and $D$ is dense in $[0,1]$: for every $x \in [0,1]$ and every real $\varepsilon > 0$ there is $r \in D$ with $|x-r| < \varepsilon$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L2] Infimum: a nonempty $S \subseteq \mathbb{R}$ bounded below has $\inf S \in \mathbb{R}$ ([[thm-infimum-property]]), which is a lower bound of $S$ and is $\ge$ every other lower bound of $S$ ([[def-infimum]]). Consequently, for a real $a$: (i) if some $s \in S$ has $s < a$ then $\inf S \le s < a$; (ii) if $\inf S < a$ then some $s \in S$ has $s < a$, since otherwise $a$ would be a lower bound of $S$ forcing $a \le \inf S$; (iii) if $r < \inf S$ then $r < s$ for every $s \in S$, since $\inf S$ is itself a lower bound of $S$.

[L3] The traces on $[0,1]$ of the order rays, $[0,a) := (-\infty,a) \cap [0,1]$ and $(a,1] := (a,\infty) \cap [0,1]$ for $a \in \mathbb{R}$, form a subbasis for the subspace topology of $[0,1]$ ([[def-subspace-topology-top]]). Indeed each ray $(-\infty,a)$, $(a,\infty)$ is a union of bounded open intervals of $\mathbb{R}$, hence open in the usual topology ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]), so the topology the rays generate is contained in the usual topology of $\mathbb{R}$; and every bounded open interval $(a,b)$ is the intersection $(a,\infty) \cap (-\infty,b)$ of two rays, so by [[thm-basis-criterion]] the finite intersections of the rays already form a basis containing every bounded open interval, hence the rays generate at least the usual topology. The two inclusions make the rays a subbasis for the usual topology of $\mathbb{R}$ ([[def-topology-basis-subbasis]]), and tracing a subbasis onto a subspace gives a subbasis for the subspace topology ([[def-subspace-topology-top]]).

[L4] Checking preimages of a fixed subbasis suffices for continuity ([[thm-continuity-characterisations-top]], clause (d)$\Leftrightarrow$(a)).

[L5] $A \subseteq \overline{A}$ for every $A \subseteq X$, and $X \setminus \overline{A}$ is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 For $x \in X$ put $S_x := \{\, r \in D : x \in U_r \,\} \cup \{1\}$; then $S_x$ is a nonempty subset of $[0,1]$, since $1 \in S_x$ and $D \subseteq [0,1]$ by [L1], so $S_x$ is bounded below by $0$ and above by $1$. [given, L1]

2.1 By step 1.1 and [L2], $\inf S_x$ exists in $\mathbb{R}$ for every $x \in X$, lies in $[0,1]$ since $0$ is a lower bound of $S_x$ and $\inf S_x \le 1$ as $1 \in S_x$; define $f : X \to [0,1]$ by $f(x) := \inf S_x$. [step 1.1, L2, construct]

3.1 For every $x \in X$ and real $a$ with $0 < a \le 1$: if there is $r \in D$ with $r < a$ and $x \in U_r$, then $r \in S_x$, so $f(x) \le r < a$ by [L2](i). [step 2.1, L2]

3.2 For every $x \in X$ and real $a$ with $0 < a \le 1$: if $f(x) < a$, then by [L2](ii) some $s \in S_x$ has $s < a \le 1$, so $s \ne 1$, hence $s \in D$ and $x \in U_s$, with $s < a$. [step 2.1, L2]

3.3 For real $a \le 0$: $\{x : f(x) < a\} = \varnothing$, since $f(x) \ge 0$ always by step 2.1; for real $a > 1$: $\{x : f(x) < a\} = X$, since $f(x) \le 1 < a$ always by step 2.1; both open. [step 2.1]

3.4 For every $x \in X$ and real $a$ with $0 \le a < 1$: if $f(x) > a$, put $x_0 := (a+f(x))/2 \in (a,f(x)) \subseteq [0,1]$ and $\delta := (f(x)-a)/2 > 0$; by [L1] fix $r_1 \in D$ with $|x_0 - r_1| < \delta$, so $r_1 \in (a,f(x))$. [step 2.1, L1, choose]

3.5 For every $x \in X$, real $a$ with $0 \le a < 1$, and $r \in D$ with $r > a$: if $x \notin \overline{U_r}$, then $r$ is a lower bound of $S_x$. Indeed, for $s = 1 \in S_x$: $r \le 1 = s$, since $r \in D \subseteq [0,1]$ by [L1]; for $s \in D$ with $x \in U_s$: if $s < r$ then [A1] gives $\overline{U_s} \subseteq U_r$, so $x \in U_s \subseteq \overline{U_s} \subseteq U_r \subseteq \overline{U_r}$ by [L5], contradicting $x \notin \overline{U_r}$, so $s \ge r$. [step 2.1, A1, L1, L5]

3.6 For real $a < 0$: $\{x : f(x) > a\} = X$, since $f(x) \ge 0 > a$ always by step 2.1; for real $a \ge 1$: $\{x : f(x) > a\} = \varnothing$, since $f(x) \le 1 \le a$ always. [step 2.1]

4.1 For real $a$ with $0 < a \le 1$: $\{\, x \in X : f(x) < a \,\} = \bigcup_{r \in D,\, r<a} U_r$, by steps 3.1 and 3.2 giving the two inclusions; a union of open sets, hence open. [step 3.1, step 3.2]

4.2 Continuing under the hypothesis of step 3.4: since $a < r_1$, by [L1] fix $r_2 \in D$ with $|(a+r_1)/2 - r_2| < (r_1-a)/2$, so $r_2 \in (a,r_1)$. [step 3.4, L1, choose]

4.3 Continuing under the hypothesis of step 3.5: since $r$ is a lower bound of $S_x$ by step 3.5, [L2] gives $r \le \inf S_x = f(x)$; combined with $r > a$, $f(x) > a$. [step 3.5, step 2.1, L2]

5.1 Continuing, with $r_1, r_2$ as in step 4.2: since $r_1 < f(x) = \inf S_x$, [L2](iii) gives $r_1 < s$ for every $s \in S_x$; in particular $r_1 \ne 1$, since $r_1 < f(x) \le 1$, so $r_1 \notin S_x$ forces $x \notin U_{r_1}$, as otherwise $r_1$ itself would lie in $S_x$. [step 3.4, step 2.1, L2]

6.1 Continuing: since $r_2 < r_1$ in $D$, [A1] gives $\overline{U_{r_2}} \subseteq U_{r_1}$; if $x \in \overline{U_{r_2}}$ then $x \in U_{r_1}$, contradicting step 5.1; so $x \notin \overline{U_{r_2}}$, and $r_2 > a$. [step 4.2, step 5.1, A1]

7.1 For real $a$ with $0 \le a < 1$: $\{\, x \in X : f(x) > a \,\} = \bigcup_{r \in D,\, r>a} \big(X \setminus \overline{U_r}\big)$. A point of the left side has, by steps 3.4 and 6.1, some $r = r_2 \in D$ with $r > a$ and $x \in X \setminus \overline{U_r}$; a point $x$ of the right side lies in $X \setminus \overline{U_r}$ for some such $r$, hence $x \notin \overline{U_r}$, giving $f(x) > a$ by step 4.3. Each $X \setminus \overline{U_r}$ is open by [L5], so the union is open. [step 6.1, step 4.3, L5]

8.1 By [L3], the sets $[0,a)$ and $(a,1]$, $a \in \mathbb{R}$, form a subbasis for the subspace topology of $[0,1]$; and $f^{-1}(\,[0,a)\,) = \{x : f(x) < a\}$, $f^{-1}(\,(a,1]\,) = \{x : f(x) > a\}$ are open in $X$ for every real $a$, by steps 4.1, 3.3, 7.1 and 3.6. [step 4.1, step 3.3, step 7.1, step 3.6, L3]

9.1 By [L4], since the preimage of every member of that subbasis is open, $f$ is continuous as a map $X \to [0,1]$; together with step 2.1 this proves the statement. [step 8.1, step 2.1, L4] ∎

## Remarks

- **Why the $\cup\{1\}$ in the definition of $f$.** It is what makes $S_x$ manifestly nonempty and bounded above by $1$ without first invoking $U_1 = X$; under that hypothesis $1 \in D$ already forces $1 \in S_x$ on its own (since every $x \in X = U_1$), so the union is not strictly necessary here, but it keeps well-definedness visible from the definition of $S_x$ alone, which matters when this lemma is quoted with a family for which the reader has not yet checked $U_1 = X$ line by line.

- **Where density of $D$ is spent, and only there.** The forward half of the "$f(x) > a$" characterisation (steps 3.4, 4.2, 5.1 and 6.1) is the only place two dyadic points strictly between $a$ and $f(x)$ are extracted; the "$f(x) < a$" half needs no density at all, only the defining property of an infimum. This asymmetry mirrors the asymmetry of the hypothesis: the shrinking clause $\overline{U_r} \subseteq U_s$ supplies a *closed* set inside an *open* one, and closing the resulting gap is what the second dyadic point is for.

- **The subbasis fact (Fact [L3]) has no home elsewhere in this library** at this point in the reading order: no earlier item states that the order rays generate the usual topology of $\mathbb{R}$, so it is derived here from the basis criterion rather than cited as a single fact.
````

### `lem-a-uniformly-approximable-real-valued-map-is-continuous`

````markdown
---
id: lem-a-uniformly-approximable-real-valued-map-is-continuous
kind: lemma
title: "If for every $\\varepsilon > 0$ some continuous $g : X \\to \\mathbb{R}$ satisfies $\\lvert f(x) - g(x)\\rvert < \\varepsilon$ for all $x$, then $f$ is continuous; in particular a uniformly convergent series of continuous real functions has a continuous sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-topological-space, def-continuous-map-top, thm-continuity-characterisations-top,
       def-topology-basis-subbasis, lem-real-line-is-a-metric-space, def-metrizable-space,
       def-metric-topology, def-series, thm-direct-comparison-test,
       lem-absolute-convergence-implies-convergence, def-ordered-field, lem-of-abs-value,
       lem-of-triangle-inequality, thm-nonnegative-series-bounded-partial-sums,
       lem-of-sequence-basics]
justified_by: []
aliases: [lem-uniform-limit-real-valued]
landmark: true
short: "uniform approximation by continuous functions"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "Weierstrass M-test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Weierstrass_M-test"
    - title: "J. Munkres, Topology, 2nd ed., §21"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$f : X \to \mathbb{R}$. If for every real $\varepsilon > 0$ there is a
continuous $g_\varepsilon : X \to \mathbb{R}$ ([[def-continuous-map-top]]) with

$$|f(x) - g_\varepsilon(x)| < \varepsilon \qquad \text{for every } x \in X,$$

then $f$ is continuous.

**In particular**, if $(g_n)_{n \in \mathbb{N}}$ are continuous real-valued
functions on $X$ and $(M_n)_{n \in \mathbb{N}}$ are nonnegative reals with
$|g_n(x)| \le M_n$ for every $x \in X$ and every $n$, and the series
$\sum M_n$ converges ([[def-series]]), then for every $x \in X$ the series
$\sum g_n(x)$ converges, and

$$F(x) \;:=\; \sum_{n=0}^{\infty} g_n(x)$$

defines a continuous function $F$ on $X$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and $f : X \to \mathbb{R}$ such that for every real $\varepsilon>0$ there is a continuous $g_\varepsilon : X \to \mathbb{R}$ with $|f(x)-g_\varepsilon(x)| < \varepsilon$ for every $x \in X$; and, for the second clause, continuous $g_n : X \to \mathbb{R}$ and nonnegative reals $M_n$, $n \in \mathbb{N}$, with $|g_n(x)| \le M_n$ for every $x \in X, n \in \mathbb{N}$, and $\sum M_n$ convergent.

[A1] The main hypothesis: for every real $\varepsilon>0$ there is continuous $g_\varepsilon$ with $|f(x)-g_\varepsilon(x)|<\varepsilon$ for all $x \in X$.

[L1] $f$ is continuous at $x_0$ iff for every open $V \subseteq \mathbb{R}$ with $f(x_0) \in V$ there is open $U \subseteq X$ with $x_0 \in U$ and $f[U] \subseteq V$ ([[def-continuous-map-top]]).

[L2] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b)).

[L3] The bounded open intervals $(a-r,a+r)$, $r>0$, are a basis for the usual topology of $\mathbb{R}$, so for open $V \ni y_0$ there is real $r>0$ with $(y_0-r,y_0+r) \subseteq V$ ([[lem-real-line-is-a-metric-space]], claim 2 and 3, [[def-metrizable-space]], [[def-metric-topology]], [[def-topology-basis-subbasis]]).

[L4] Triangle inequality: $|u+v| \le |u|+|v|$, hence $|u-w| \le |u-v|+|v-w|$ for reals $u,v,w$ ([[lem-of-triangle-inequality]]).

[L5] Absolute value: $|u|<c$ iff $-c<u<c$, for real $c>0$; and $-c \le u \le c$ iff $|u| \le c$, for real $c \ge 0$ ([[lem-of-abs-value]]).

[L6] Finite triangle inequality along a finite index set, iterating [L4]: $\big|\sum_{k} u_k\big| \le \sum_k |u_k|$ ([[lem-of-abs-value]], [[def-ordered-field]]).

[L7] Comparison and absolute convergence: if $0 \le a_k \le b_k$ eventually and $\sum b_k$ converges then $\sum a_k$ converges ([[thm-direct-comparison-test]]); if $\sum |a_k|$ converges then $\sum a_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

[L8] For a series of nonnegative terms, the partial sums are nondecreasing, bounded above by the sum when the series converges, and converge to the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L9] Limits in $\mathbb{R}$ preserve non-strict order: if $a_k \to a$ and $a_k \le c$ for all $k$ beyond some index, then $a \le c$ ([[lem-of-sequence-basics]]).

## Proof

**Proof technique:** constructive.

1.1 Fix $x_0 \in X$ and an open $V \subseteq \mathbb{R}$ with $f(x_0) \in V$; by [L3] fix a real $r>0$ with $(f(x_0)-r, f(x_0)+r) \subseteq V$. [given, L3, choose]

1.2 Let $g, h : X \to \mathbb{R}$ be continuous, let $x_1 \in X$ and let real $\eta>0$; arguing directly from continuity of $g$ and of $h$ at $x_1$ (via [L1] and [L2]) separately, fix open $U_1, U_2 \ni x_1$ with $|g(x)-g(x_1)| < \eta/2$ on $U_1$ and $|h(x)-h(x_1)|<\eta/2$ on $U_2$. [given, L1, L2, choose]

1.3 Fix $x \in X$. The real sequence $(g_n(x))_{n \in \mathbb{N}}$ satisfies $0 \le |g_n(x)| \le M_n$ for every $n$, and $\sum M_n$ converges by hypothesis, so [L7] gives that $\sum |g_n(x)|$ converges, and hence $\sum g_n(x)$ converges; define $F(x) := \sum_{n=0}^{\infty} g_n(x)$ and $s_N(x) := \sum_{n<N} g_n(x)$, so $s_N(x) \to F(x)$ as $N \to \infty$. [given, L7, construct]

1.4 Write $\sigma_N := \sum_{n<N} M_n$ and $S := \sum_{n=0}^{\infty} M_n$; since $M_n \ge 0$ for every $n$, [L8] gives that $(\sigma_N)$ is nondecreasing with $\sigma_N \le S$ for every $N$, and $\sigma_N \to S$. So $S - \sigma_N \ge 0$ for every $N$ and $S-\sigma_N \to 0$; given a real $\varepsilon>0$, fix $N \in \mathbb{N}$ with $S - \sigma_N < \varepsilon$. [given, L8, choose]

2.1 By [A1] applied with $\varepsilon := r/3 > 0$, fix a continuous $g : X \to \mathbb{R}$ with $|f(x)-g(x)| < r/3$ for every $x \in X$. [step 1.1, A1, choose]

2.2 $U_1 \cap U_2$ is open, contains $x_1$, and for $x \in U_1 \cap U_2$: $|(g+h)(x)-(g+h)(x_1)| \le |g(x)-g(x_1)| + |h(x)-h(x_1)| < \eta$ by [L4]. [step 1.2, L4, algebra]

2.3 For every $x \in X$ and every $K > N$: $|s_K(x)-s_N(x)| = \big|\textstyle\sum_{N \le n < K} g_n(x)\big| \le \sum_{N \le n < K} |g_n(x)| \le \sum_{N \le n < K} M_n = \sigma_K - \sigma_N \le S - \sigma_N$, by [L6], the hypothesis $|g_n(x)| \le M_n$, and $\sigma_K \le S$ from step 1.4. [step 1.4, step 1.3, L6, algebra]

3.1 $U := g^{-1}\big[(g(x_0)-r/3,\, g(x_0)+r/3)\big]$ is open by [L2], since $g$ is continuous by step 2.1, and $x_0 \in U$, since $|g(x_0)-g(x_0)| = 0 < r/3$. [step 2.1, L2]

3.2 Since $x_1 \in X$ and real $\eta>0$ were arbitrary, $g+h$ is continuous on $X$; iterating this over finitely many further sums, any finite sum $g_0+\cdots+g_{N-1}$ of continuous real-valued functions on $X$ is continuous, for every $N \ge 1$, with the case $N=0$ (the zero function) continuous as a constant. [step 2.2]

3.3 By step 2.3, $|s_K(x)-s_N(x)| \le S-\sigma_N$ for every $K > N$; as $K \to \infty$, $s_K(x) \to F(x)$ by step 1.3, so [L9] applied to the two non-strict bounds $-(S-\sigma_N) \le s_K(x)-s_N(x) \le S-\sigma_N$ (equivalent to step 2.3 by [L5]) gives $-(S-\sigma_N) \le F(x)-s_N(x) \le S-\sigma_N$, that is $|F(x)-s_N(x)| \le S-\sigma_N < \varepsilon$ by [L5] and step 1.4, for every $x \in X$, with $N$ independent of $x$. [step 2.3, step 1.4, step 1.3, L5, L9]

4.1 For $x \in U$: $|f(x)-f(x_0)| \le |f(x)-g(x)| + |g(x)-g(x_0)| + |g(x_0)-f(x_0)| < r/3+r/3+r/3 = r$, by [L4] (twice), step 2.1 (the first and third terms) and the defining property of $U$ (step 3.1, the middle term). [step 2.1, step 3.1, L4, algebra]

4.2 For $N \in \mathbb{N}$, $s_N = g_0 + \cdots + g_{N-1}$ is a finite sum of continuous functions, hence continuous on $X$, by step 3.2. [step 3.2]

5.1 By step 4.1, $f(x) \in (f(x_0)-r,f(x_0)+r) \subseteq V$ for every $x \in U$ (step 1.1), so $f[U] \subseteq V$; with $U$ open and $x_0 \in U$ (step 3.1), and $V$ an arbitrary open set containing $f(x_0)$ (step 1.1), $f$ is continuous at $x_0$ by [L1]. [step 4.1, step 3.1, step 1.1, L1]

6.1 Since $x_0 \in X$ was arbitrary, $f$ is continuous on $X$; this proves the main clause. [step 5.1]

7.1 Since $s_N$ is continuous by step 4.2 and real $\varepsilon>0$ was arbitrary, the hypothesis of the main clause (steps 1.1–6.1) is met by $F$, taking $g_\varepsilon := s_N$; hence $F$ is continuous on $X$. This, with step 1.3, proves the second clause. [step 3.3, step 4.2, step 6.1, discharge-construct] ∎

## Remarks

- **The $\varepsilon/3$ split is the whole mechanism**, and it is exactly the triangle inequality read three ways: once to compare $f$ with an approximant, once to use continuity of that approximant, and once to compare back. Nothing about $X$ is used beyond the definition of continuity; the hypothesis never mentions a metric on $X$, only on the common target $\mathbb{R}$.

- **The second clause is the Weierstrass $M$-test, stated only as far as this page needs it.** It is not stated for a general metric or normed target, and it produces no rate of convergence beyond what step 1.4 already gives: a single $N$, working uniformly in $x$, for every tolerance $\varepsilon$.

- **No choice principle beyond what a single real number requires is used anywhere above.** Steps 1.1, 2.1 and 1.4 each fix one witness from a nonempty set of reals or a single continuous function, and no step selects simultaneously from an infinite family.
````

### `lem-finite-choice`

````markdown
---
id: lem-finite-choice
kind: lemma
title: "Every natural-number-indexed list of nonempty sets has a choice function on its family of values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-choice-function, thm-induction-principle, def-natural-numbers, def-nat-addition, def-axiom-of-choice]
justified_by: []
forward_refs: [def-countable, ex-finite-choice-by-induction, ex-russells-socks]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $F$ be a function with domain $n$ all of whose
values are nonempty sets. Then the family of its values,
$\mathcal{F} = F[n] = \{\, F(i) : i \in n \,\}$, has a choice function
([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

What is proved below is exactly the displayed statement, by induction on $n$. The
natural number $n$ serves as the index set in the von Neumann sense,
$n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so "$F$ has domain $n$"
says precisely that the members of $\mathcal{F}$ are listed as
$F(0), \dots, F(n-1)$. The listing need not be injective, and $\mathcal{F}$ is the
set of values, so repetitions are harmless and are not counted.

The displayed statement and its proof use only a natural-number-indexed
function. They do not identify an arbitrary finite family with a particular
enumeration.

## Facts & Assumptions

**Given:** A natural number $n$, used as the index set $n = \{0, \dots, n-1\}$, and a function $F$ with domain $n$ such that $F(i) \ne \emptyset$ for every $i \in n$; write $F[n] = \{F(i) : i \in n\}$ for the family of values of $F$.

[A1] $P(n)$ denotes the statement: for every function $F$ with domain $n$ all of whose values are nonempty sets, the family $F[n]$ has a choice function.

[L1] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L2] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L3] $0=\emptyset$ and $\sigma(n)=n\cup\{n\}$, so $n\subseteq\sigma(n)$ ([[def-natural-numbers]]). Thus a function $F$ with domain $\sigma(n)$ restricts to a function with domain $n$; moreover, directly from the definition of image, $y\in F[\sigma(n)]$ iff $y=F(i)$ for some $i\in n$ or $y=F(n)$, so $F[\sigma(n)]=F[n]\cup\{F(n)\}$.

## Proof

**Proof technique:** induction.

1.1 Base case: $0 = \emptyset$, so the only function with domain $0$ is the empty function, its family of values is $F[0] = \emptyset$, and the empty function has domain $\emptyset$ and satisfies the defining condition vacuously, so it is a choice function for $F[0]$; hence $P(0)$ holds. [base, A1, L2, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that every function with domain $n$ whose values are all nonempty has a choice function for its family of values. [ih, A1]

1.3 Let $F$ be an arbitrary function with domain $\sigma(n) = n \cup \{n\}$ all of whose values are nonempty sets; write $S = F(n)$ and $\mathcal{G} = F[n]$, the family of values of the restriction $F \restriction n$, so that $F[\sigma(n)] = \mathcal{G} \cup \{S\}$. [given, L3]

2.1 The restriction $F \restriction n$ is a function with domain $n$, and every value of it is a value of $F$, hence nonempty; so the inductive hypothesis applies to it and supplies a choice function $h$ for $\mathcal{G}$, a function with domain $\mathcal{G}$ satisfying $h(T) \in T$ for every $T \in \mathcal{G}$. [step 1.3, step 1.2, L2, L3]

2.2 The set $S = F(n)$ is one of the values of $F$, hence nonempty, so there exists an element of $S$; fix one and call it $a$. [step 1.3, choose]

3.1 Define $g = (h \restriction (\mathcal{G} \setminus \{S\})) \cup \{(S, a)\}$; its two pieces are functions with the disjoint domains $\mathcal{G} \setminus \{S\}$ and $\{S\}$, so $g$ is a function, and its domain is $(\mathcal{G} \setminus \{S\}) \cup \{S\} = \mathcal{G} \cup \{S\} = F[\sigma(n)]$. [step 2.1, step 2.2, step 1.3, construct]

4.1 Every $T \in F[\sigma(n)]$ is either $S$ or a member of $\mathcal{G} \setminus \{S\}$; in the first case $g(S) = a \in S$, and in the second $g(T) = h(T) \in T$ because $h$ is a choice function for $\mathcal{G}$. So $g(T) \in T$ throughout. [step 3.1, step 2.1, step 2.2]

5.1 Hence $g$ is a choice function for $F[\sigma(n)]$, and since $F$ was an arbitrary function with domain $\sigma(n)$ with nonempty values, $P(n)$ implies $P(n+1)$. [step 4.1, step 3.1, step 1.3, L2, A1]

6.1 By the induction principle, $P(n)$ holds for every $n \in \mathbb{N}$: the family of values of any function whose domain is a natural number and whose values are nonempty has a choice function. [step 1.1, step 5.1, L1, discharge-induction] ∎

## Remarks

- **Later finiteness terminology.** A finite set is defined later as one
  equinumerous with a natural number ([[def-countable]]). That terminology is
  not used in the proof above, which keeps its exact indexed-family scope.
- **Where the Axiom of Choice would be needed, and why it is not needed here.** Step 2.2 picks one element out of one nonempty set. That is a single existential instantiation, licensed by first-order logic alone. The induction performs one such instantiation per stage, and the stages are indexed by a natural number, so the process terminates. ZF cannot in general turn an arbitrary infinite family of nonempty sets into a simultaneous choice function; that is the gap [[def-axiom-of-choice]] fills. An infinite family with a distinguished element in each member may still have an explicit choice function in ZF, as [[ex-russells-socks]] shows.
- **Why the family is presented as an indexed one.** Stated over "a family of exactly $n$ sets", the successor step would have to assert that deleting one member of a family of $n+1$ sets leaves exactly $n$, which is a claim about cardinality and needs a theory of finiteness this page does not have. Indexed by $n$, the same step is the restriction $F \restriction n$ of a function, which is immediate from $n \subseteq \sigma(n)$ and costs nothing. Nothing else in the argument changes.
- The listing may repeat, and the argument is arranged so that repetition needs no separate treatment: $g$ is built by overwriting rather than by adjoining, so it is a function whether or not $S$ already occurs among $F(0), \dots, F(n-1)$. In particular $\mathcal{F}$ may have strictly fewer than $n$ members.
- The lemma is not a special case of the Axiom of Choice that happens to be provable; it is the precise boundary of what is free. [[ex-russells-socks]] makes the boundary concrete, and [[ex-finite-choice-by-induction]] works this induction out on a small family.
````

### `rem-choice-ledger`

````markdown
---
id: rem-choice-ledger
kind: remark
title: "The choice ledger: what costs the Axiom of Choice and what does not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-every-vector-space-has-a-basis, thm-every-independent-set-extends-to-a-basis, rem-godel-constructible-universe, rem-cohen-forcing-ac-independent, rem-schechter-kelley-tychonoff,
       rem-feferman-no-free-ultrafilter-in-zf, rem-halpern-levy-bpi-not-ac, rem-cohen-first-model,
       cor-ac-iff-well-ordering, cor-ac-iff-zorn, thm-hartogs, lem-well-order-comparability,
       thm-zorn, thm-bourbaki-witt, def-chain, thm-well-ordering-theorem, def-cardinal,
       def-dependent-choice]
justified_by: []
forward_refs: [thm-cardinal-comparability-iff-ac, thm-perfectly-normal-implies-completely-normal,
               thm-urysohn-lemma, thm-tietze-extension-theorem,
               lem-dependent-choice-along-a-sequence-of-relations,
               thm-product-universal-property]
aliases: [rem-choice-strength-ledger]
landmark: false
short: "equivalents, strictly weaker principles, choice-free substitutes"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: d2b59e29f751321edaa884e639932b4c4734c5f461cd799d480315625e6328d4
    item_sha256: 44b31cb0dd716639c3e5701d8bb2b9947c80f2b47aace30782104555d4470d4a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "The Axiom of Choice (Stanford Encyclopedia of Philosophy)"
      url: "https://plato.stanford.edu/entries/axiom-choice/"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
pipeline_run: null
---

This item is bookkeeping, not mathematics: it records what each statement in the
neighbourhood of the Axiom of Choice actually costs, so that later pages can
state honestly which of their theorems are choice-free. Nothing here is proved
that is not proved elsewhere in the library, and everything cited without a
link is flagged as such.

**Equivalent to the Axiom of Choice over ZF.**

- **Zorn's lemma** and **the well-ordering theorem**. Both equivalences are
  proved in this library, in [[cor-ac-iff-zorn]] and
  [[cor-ac-iff-well-ordering]]. Each of *these two statements* costs exactly the
  Axiom of Choice, no more and no less. A theorem proved *with* one of them costs
  at most the Axiom of Choice, which is an upper bound and not a lower one: the
  theorem may well follow from something strictly weaker, and the ultrafilter
  lemma below is exactly that case.
- **Tychonoff's theorem**, that a product of compact spaces is compact. The
  implication from the Axiom of Choice is the familiar one; the converse is
  Kelley 1950. Not proved here, and worth a warning when it is: Kelley's
  original argument needs a repair, supplied by Schechter, and without the
  repair it yields only the Boolean prime ideal theorem
  ([[rem-schechter-kelley-tychonoff]]).
- **Every vector space has a basis.** The implication from the Axiom of Choice
  is a routine application of Zorn's lemma, and it **is** proved here, in
  [[cor-every-vector-space-has-a-basis]] by way of
  [[thm-every-independent-set-extends-to-a-basis]]. The converse is a hard
  theorem of Blass, 1984, which is **not** proved here and is quoted on the
  authority of the references. The equivalence itself is
  recorded in the library, in [[rem-hahn-banach-hamel-basis-open]], where it
  fixes the upper endpoint of an open question about the strength of
  Hahn-Banach.
- **Cardinal comparability**, that for any two sets one injects into the other.
  This is Hartogs 1915, and the full equivalence with the Axiom of Choice **is**
  now proved here, in [[thm-cardinal-comparability-iff-ac]], by way of the
  construction of [[thm-hartogs]].

**Strictly weaker than the Axiom of Choice.**

Each of the following is a genuine choice principle: not provable in ZF
(assuming ZF consistent), yet strictly weaker than the Axiom of Choice.

- **The ultrafilter lemma**, that every filter extends to an ultrafilter,
  equivalently the **Boolean prime ideal theorem**. The Axiom of Choice implies
  it, that implication being the one thing here this library does prove; it is
  not provable in ZF (Feferman 1965,
  [[rem-feferman-no-free-ultrafilter-in-zf]]), and it does not imply the Axiom
  of Choice (Halpern and Levy 1971, [[rem-halpern-levy-bpi-not-ac]]). Both of
  those are external results, recorded and not proved here. The proof given here
  ([[thm-ultrafilter-lemma]]) runs through Zorn's lemma, so it pays full price
  for a statement that costs strictly less: exactly the overpayment set out in
  [[rem-choice-strengths]], and the reason a cost may not be read off a proof.
- **Dependent choice (DC)**, that if every element of a nonempty set $X$ stands
  in a relation $R$ to some element of $X$, then for **every** $a \in X$ there is a
  **sequence** $(x_n)_{n \in \mathbb{N}}$ in $X$ with $x_0 = a$ and
  $x_n \mathbin{R} x_{n+1}$ for every $n$ ([[def-dependent-choice]]). The
  prescribed starting point belongs to the statement: deleting the clause
  $x_0 = a$ gives a **formally weaker** principle, which that item records as an
  immediate consequence and does not derive DC back from, so the two are not
  interchangeable here. What DC delivers is an $\mathbb{N}$-indexed sequence, not a chain in this
  library's sense ([[def-chain]], a totally ordered subset of a poset): $R$ need
  not be an order at all, and the terms need not be distinct. Implied by the
  Axiom of Choice, and implies countable choice; neither implication reverses,
  which is a relative-consistency result and so holds under the standing
  assumption that ZF is consistent. It
  is the principle quietly used whenever a sequence is built by picking each term
  in terms of the previous one. The two non-reversals are external results that
  this library does not prove; it records them, with their sources, in
  [[def-dependent-choice]].
- **Countable choice ($\mathrm{AC}_\omega$)**, choice functions for countable
  families. Implied by dependent choice, and still not a theorem of ZF: Cohen's
  first model contains an infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]), which is already a failure of
  $\mathrm{AC}_\omega$.

**These three are not ranked on a line, and none of them is "the weakest".** The
only implications among them PROVABLE IN ZF are $\mathrm{DC} \Rightarrow \mathrm{AC}_\omega$
and its consequences; the ultrafilter lemma is incomparable with dependent choice
and with countable choice alike, neither implying nor implied by either. Every
*non*-implication in that sentence is a relative-consistency result, quoted from
the references and conditional on the consistency of ZF: what is established is
that ZF, if consistent, does not prove the missing implications, never that they
are outright false. Those
incomparabilities are quoted from the references, not recorded here. So a theorem
must be labelled with the principle it actually uses, never with a position on a
scale, and a phrase like "the weakest of the three" is simply not available.

**Choice-free, and deliberately so.**

- **[[thm-hartogs]]**: for every set $A$ there is a least ordinal that does not
  inject into $A$. This is the ZF substitute for cardinal comparability, and its
  whole value is that it needs no choice.
- **[[lem-well-order-comparability]]**: any two well-orders are comparable.
  Comparability of arbitrary sets is equivalent to the Axiom of Choice;
  comparability of well-orders is free.
- Transfinite induction, transfinite recursion, the assignment of order types,
  and the Burali-Forti theorem are all theorems of ZF. Transfinite recursion
  spends Replacement, and that is the only axiom beyond the basic ones it needs;
  the standard confusion on this point is recorded as
  [[fs-transfinite-induction-needs-choice]].
- Rigidity of well-orders ([[lem-well-order-rigid]]) is the structural reason for
  all of this: the witnessing isomorphisms are unique, so they never have to be
  chosen.

**Where this library spends choice.**

Full choice is spent at one step inside Zorn's lemma, and directly in some results
that do not route through Zorn; more than one *result* assumes it, and there are a
second and a third, weaker principle each assumed elsewhere. All four facts belong
in the ledger.

- **One step inside Zorn, and direct uses besides.** The Axiom of Choice is used at a single step of the
  proof of Zorn's lemma ([[thm-zorn]]), to select a strict upper bound for every
  chain at once; the fixed point theorem underlying it ([[thm-bourbaki-witt]]) is
  choice-free. Most results in this library that assume full choice reach it
  through that step, but not all: some apply the Axiom of Choice directly instead,
  for example [[thm-product-universal-property]], which uses it to obtain a point
  of an arbitrary product of nonempty sets without routing through Zorn's lemma.
- **The results that assume full choice.** [[thm-zorn]] itself is the first of
  them: its statement takes the Axiom of Choice as a standing hypothesis, which
  is why the step above lives inside it. On this page: the well-ordering
  theorem ([[thm-well-ordering-theorem]]), which takes the Axiom of Choice as a
  hypothesis; and the **cardinality assignment** of [[def-cardinal]], which
  assumes it in order to well order an arbitrary set. That last one is easy to
  miss, because the *property* of being a cardinal is choice-free and only the
  attachment of $|X|$ to an arbitrary $X$ is not. The two equivalences
  [[cor-ac-iff-zorn]] and [[cor-ac-iff-well-ordering]] do **not** belong in this
  list: each is proved in ZF outright and assumes no choice principle, saying
  only that the statements it names imply one another. Elsewhere in the library,
  [[thm-ultrafilter-lemma]] is proved through Zorn's lemma and so also pays full
  price, although its statement costs strictly less; and the **Hausdorff maximal
  principle**, that every poset has a maximal chain, is drawn from Zorn as a
  consequence in [[ex-zorn-poset-of-chains]] and pays the same price, the
  chain-completeness verified there being free.
- **A weaker principle, spent separately.** [[thm-countable-union-of-countable]]
  and [[thm-perfectly-normal-implies-completely-normal]] are each stated under
  countable choice ([[def-countable-choice]]) and flag the one step that spends
  it. That is **not** a use of the Axiom of Choice: $\mathrm{AC}_\omega$ is
  strictly weaker, so neither theorem may be relabelled choice-free or lumped in
  with the full-choice results above.
- **A third principle below full AC.** [[thm-urysohn-lemma]] and
  [[thm-tietze-extension-theorem]] are each stated under dependent choice
  ([[def-dependent-choice]]), each applying dependent choice directly to a single
  relation on stage-tagged states to build an $\mathbb{N}$-indexed sequence of
  approximations; the standalone stagewise form
  [[lem-dependent-choice-along-a-sequence-of-relations]] is a related construction
  that neither theorem cites. DC implies $\mathrm{AC}_\omega$
  and neither reverses (recorded above), so this is a third, distinct cost: not
  the Axiom of Choice, and not interchangeable with the countable-choice results
  either, even though DC happens to imply enough to reprove them.

**What is not proved anywhere here.**

The **independence** of the Axiom of Choice from ZF. Gödel's 1938 constructible
universe shows ZF cannot refute it ([[rem-godel-constructible-universe]]);
Cohen's 1963 forcing shows ZF cannot prove it
([[rem-cohen-forcing-ac-independent]]). Both are external results requiring
machinery this library does not yet contain, and both are conditional on the
consistency of ZF. Every statement in
the library that relies on them is written conditionally, as in
[[fs-zorn-provable-in-zf]] and [[fs-every-set-well-orderable-in-zf]]. A reader
who wants the unconditional version of those statements will not find it, here
or anywhere.
````

### `rem-separation-axiom-conventions`

````markdown
---
id: rem-separation-axiom-conventions
kind: remark
title: "Conventions on this page, and the one implication of the classical chain that is not available at this point in the reading order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-t0-and-t1-spaces, def-hausdorff-space, def-urysohn-space,
       def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces,
       def-normal-and-t4-spaces, def-completely-normal-and-perfectly-normal-spaces,
       def-zero-sets-and-cozero-sets, thm-the-separation-implication-chain,
       thm-perfectly-normal-implies-completely-normal, def-metrizable-space,
       def-countable-choice,
       def-compact-space, thm-compact-subset-of-a-hausdorff-space-is-closed]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: []
landmark: false
short: "separation-axiom conventions and the missing arrow"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §31-33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 33: The Urysohn Lemma (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-33.pdf"
pipeline_run: null
---

The separation axioms are the part of general topology where textbooks disagree
most sharply about vocabulary, and where a reader arriving with the other
convention misreads statements rather than merely finding them unfamiliar. This
remark settles the disagreements that are live on this page, records the one
implication of the classical chain that this page does not prove, and states the
choice cost of the one implication whose proof spends a choice principle. The
standing topological vocabulary is used throughout: neighbourhoods need not be
open, empty intersections equal the whole carrier, a basis is always relative to
a topology, and comparisons use *coarser* and *finer*.

## 1. Whether *regular* and *normal* include $T_1$

**They do not, in this library.** *Regular*, *completely regular*, *normal*,
*completely normal* and *perfectly normal* name separation conditions on sets
alone ([[def-regular-and-t3-spaces]],
[[def-completely-regular-and-tychonoff-spaces]], [[def-normal-and-t4-spaces]],
[[def-completely-normal-and-perfectly-normal-spaces]]); the numerals $T_3$,
$T_{3\frac12}$, $T_4$, $T_5$ and $T_6$ name the conjunction of each with $T_1$
([[def-t0-and-t1-spaces]]).

Munkres builds $T_1$ into *regular* and *normal* and then has no separate name
for the bare conditions; Kelley, Willard and Engelking take the side taken here.
Both usages are current, and neither is more correct. The reason for the choice
made here is that the two halves are genuinely independent and each is used
alone on this page: the indiscrete topology on a two-point set is regular,
completely regular, normal, completely normal and perfectly normal, and fails
$T_0$; and the cofinite topology on an infinite set is $T_1$ and fails
everything above it. **Every statement on this page writes the $T_1$ hypothesis
out where it is used**, so a reader may translate to the other convention by
deleting it.

The word *Tychonoff* is used for completely regular plus $T_1$, and $T_{3\frac12}$
is treated as a synonym.

## 2. The name *Urysohn*, which denotes three different things

- **Urysohn space**, $T_{2\frac12}$: distinct points have neighbourhoods with
  disjoint closures ([[def-urysohn-space]]). This is what "Urysohn" means on
  this page.
- **Completely Hausdorff**: distinct points are separated by a continuous
  real-valued function. Some texts attach Urysohn's name to *this* condition
  instead. This library does not define it.
- **Urysohn's lemma**: the theorem that in a normal $T_1$ space two disjoint
  closed sets are separated by a continuous function into $[0,1]$. It is a
  theorem about *sets*, not points, and it is unrelated to either space
  condition.

A statement quoting "Urysohn" without saying which is meant is ambiguous; this
page always says which.

## 3. The one arrow this page does not prove

[[thm-the-separation-implication-chain]] assembles every implication proved
here. Against the classical chain it is short by exactly **one** arrow:

> **$T_4 \Rightarrow T_{3\frac12}$: a normal $T_1$ space is completely regular.**

This is **Urysohn's lemma**, applied to the point $\{x_0\}$ — which is closed by
$T_1$ — and the closed set $C$. Its proof indexes a family of open sets by the
dyadic rationals, choosing each from the previous one by the shrinking lemma; it
is not available at this point in the reading order, and no theorem of this page
proves it. Where it is named — in [[def-completely-regular-and-tychonoff-spaces]]
and in [[thm-completely-regular-implies-regular]] — it is named as the classical
arrow that is missing here, and it is never used as a fact in any proof on this
page. What would license it is a page
proving Urysohn's lemma, which in this library's plan sits above the present
one.

**The gap is not mere bookkeeping.** Urysohn's lemma is not a theorem of ZF, nor
of ZF together with countable choice: this is recorded, with its sources, in
[[rem-urysohn-lemma-not-a-zf-theorem]], which this remark mentions without
depending on. So the missing arrow is missing for a reason stronger than the
reading order — no rearrangement of the material already on this page could
supply it, and any page that does supply it must record a choice principle.

**Everything else in the classical chain is here.** In particular
$T_6 \Rightarrow T_5$ *is* proved ([[thm-perfectly-normal-implies-completely-normal]]),
and proved without any Urysohn function: it needs only normality, the
$F_\sigma$ presentation of open sets, and the Axiom of Countable Choice recorded
in §4 below. A reader who expects that arrow also to be
unavailable is thinking of the route through "every closed set is a zero set",
which does need Urysohn's lemma; the route taken here does not.

## 4. The one choice cost incurred on this page

Every proof on this page is a theorem of ZF **except**
[[thm-perfectly-normal-implies-completely-normal]], which assumes the Axiom of
Countable Choice ([[def-countable-choice]]) and spends it at one step, selecting
one open set for each member of a countable family of closed sets. The
hypothesis is written into that theorem's own statement and into clause 1 of
[[thm-the-separation-implication-chain]], and it is inherited by nothing else:
in particular the metric results are choice free, so "metrizable implies
perfectly normal, completely normal and normal" needs no choice at all, even
though the general arrow from perfect to complete normality does.

## 5. What this page deliberately does not contain

- **Compactness.** "A compact Hausdorff space is normal" is the standard first
  example of a normal space, and it is absent here for a narrower reason than
  before: general topological compactness itself **is** now available at this
  point in the reading order ([[def-compact-space]]), and the two separation
  lemmas the proof needs are proved there too
  ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]). What is still absent
  is the packaged statement itself, which is homed on a page above the present
  one. What would license restating it here is a home for that packaging above
  this page, not below it.
- **A regular space that is not normal.** Every witness reachable from this
  page's material needs either cardinal arithmetic or the hereditary and
  productive behaviour of regularity, neither of which is available here. Rather
  than plant a false statement with no witness, this page omits it; what would
  license it is a page developing either of those two tools.
- **Hereditary and productive behaviour.** Which of these axioms pass to
  subspaces and to products is not asked here. In particular the equivalence
  "completely normal if and only if hereditarily normal" is not proved, and
  [[def-completely-normal-and-perfectly-normal-spaces]] uses only the
  separated-sets form.
- **Zero-set characterisations beyond the metric case.** The equivalence
  "perfectly normal if and only if normal with every closed set a zero set"
  ([[def-zero-sets-and-cozero-sets]]) again needs Urysohn's lemma; only the
  metric direction is proved here, where the distance function supplies the
  function outright ([[def-metrizable-space]]).
````

### `rem-urysohn-lemma-not-a-zf-theorem`

````markdown
---
id: rem-urysohn-lemma-not-a-zf-theorem
kind: remark
title: "Urysohn's lemma is not a theorem of ZF, nor of ZF plus countable choice"
status: published
origin: session
proved_here: false
deps: [rem-baire-category-choice-strength]
justified_by: []
forward_refs: [def-countable-choice, rem-choice-ledger]
aliases: []
landmark: true
short: "Läuchli 1962, Tachtsis 2019; DMC suffices, BPI does not"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "H. Läuchli, Auswahlaxiom in der Algebra, Comment. Math. Helv. 37 (1962/63), 1-18"
      url: "https://doi.org/10.1007/BF02566957"
    - title: "E. Tachtsis, The Urysohn Lemma is independent of ZF + Countable Choice, Proc. Amer. Math. Soc. 147 (2019), 4029-4038"
      url: "https://doi.org/10.1090/proc/14590"
    - title: "A. Blass, Injectivity, projectivity, and the axiom of choice, Trans. Amer. Math. Soc. 255 (1979), 31-59"
      url: "https://doi.org/10.1090/S0002-9947-1979-0542870-6"
    - title: "N. Brunner, Geordnete Läuchli Kontinuen, Fund. Math. 117 (1983), 67-73"
      url: "https://doi.org/10.4064/fm-117-1-67-73"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
pipeline_run: null
---

## Statement

**Urysohn's lemma (UL).** If $X$ is a $T_4$ space and $A, B \subseteq X$ are
disjoint closed sets, there is a continuous $f : X \to [0,1]$ with
$A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.

The following are all relative to the consistency of ZF.

**(a) UL is not a theorem of ZF.** Läuchli (1962/63) builds a permutation model
of ZF with atoms in which the set of atoms is densely linearly ordered, of the
order type of the rationals of the ground model, and in which that set with its
order topology is a $T_4$ space on which **every continuous real-valued function
is constant**; UL fails there. Since the negation of UL is a boundable statement,
the Jech-Sochor first embedding theorem transfers the failure to ZF proper.

**(b) UL is not a theorem of ZF + countable choice.** Tachtsis (2019) produces a
model of ZF in which $\mathrm{AC}_\omega$ holds and UL fails, and hence in which
the Tietze extension theorem fails as well.

**(c) What does suffice.** Dependent choice implies UL by the usual dyadic
construction. Blass (1979) proves the stronger statement that **dependent
multiple choice implies UL**. Whether UL implies DMC is open.

**(d) The Boolean prime ideal theorem does not suffice.** Brunner (1983) shows UL
fails in the Mostowski linearly ordered model, where BPI holds; Pincus's transfer
theorems carry this to ZF.

## Remarks

- **Not proved in this library.** None of (a) to (d) is proved here. Even the
  positive direction, that DC implies UL, is not proved here, because the
  library has no topology track yet at the point where this page sits.

- **What would prove it.** For (a), (b) and (d): permutation models of ZF with
  atoms, plus the Jech-Sochor and Pincus transfer theorems, that is, the same
  track named in [[rem-cohen-forcing-ac-independent]]. For (c): the tree
  combinatorics behind DMC, the same principle that appears in
  [[rem-baire-category-choice-strength]].

- **Why it matters here.** Urysohn's lemma is the workhorse of every separation
  and metrisation argument, and it looks like pure point-set topology. It is not:
  the usual proof indexes a family of open sets by the dyadic rationals and
  chooses one at each stage in terms of the previous stage, which is dependent
  choice. Any page in this library that proves Urysohn's lemma, Tietze extension,
  or a metrisation theorem must therefore record a choice principle in
  [[rem-choice-ledger]], and must not claim the argument is free merely because
  it never mentions a well-ordering. Note that the weakest standard principle,
  [[def-countable-choice]], is provably not enough, by (b).

- **Conditional discipline.** Clauses (a), (b) and (d) are relative to the
  consistency of ZF; clause (c) is an ordinary implication over ZF. Nothing here
  asserts that Urysohn's lemma is false.
````

### `thm-a-locally-compact-hausdorff-space-is-completely-regular`

````markdown
---
id: thm-a-locally-compact-hausdorff-space-is-completely-regular
kind: theorem
title: "Under dependent choice a locally compact Hausdorff space is completely regular, hence Tychonoff"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-urysohn-lemma, def-one-point-compactification, thm-one-point-compactification-properties,
       thm-a-compact-hausdorff-space-is-regular-and-normal, def-locally-compact-space,
       def-completely-regular-and-tychonoff-spaces,
       def-t0-and-t1-spaces, def-hausdorff-space, def-subspace-topology-top,
       thm-t1-iff-singletons-are-closed, def-dependent-choice, def-interval]
justified_by: []
aliases: []
landmark: true
short: "locally compact Hausdorff is completely regular (DC)"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "Alexandroff extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexandroff_extension"
    - title: "J. Munkres, Topology, 2nd ed., §33, 38"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). If
$(X,\mathcal{T})$ is locally compact ([[def-locally-compact-space]]) and
Hausdorff ([[def-hausdorff-space]]), then $X$ is completely regular
([[def-completely-regular-and-tychonoff-spaces]]), and hence, being Hausdorff,
$X$ is Tychonoff.

The proof passes through the one-point compactification
([[def-one-point-compactification]]) rather than through a hereditary
property of regularity or complete regularity: none is used or needed.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $(X,\mathcal{T})$, a closed set $C \subseteq X$, and a point $x_0 \in X \setminus C$.

[A1] $X$ is locally compact ([[def-locally-compact-space]]) and Hausdorff ([[def-hausdorff-space]]).

[L1] The one-point compactification $X^{*} = X \cup \{\infty\}$ of a locally compact Hausdorff space $X$: its open sets are the open sets of $X$ together with the sets $X^{*} \setminus K$ for $K$ a closed compact subset of $X$ ([[def-one-point-compactification]]); consequently its closed sets are $\{\, F \cup \{\infty\} : F \text{ closed in } X \,\}$ together with $\{\, K : K \text{ closed compact in } X \,\}$, the complements of the two families of open sets.

[L2] $X^{*}$ is compact and contains $X$ as an open subspace (so the subspace topology $X$ inherits from $X^{*}$ is its own topology $\mathcal{T}$); and $X^{*}$ is Hausdorff, since $X$ is locally compact and Hausdorff ([[thm-one-point-compactification-properties]]).

[L3] A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$ ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[L4] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]]).

[L5] Urysohn's lemma, clause 1: assuming DC, a normal space's disjoint closed sets admit a continuous $[0,1]$-valued separating function ([[thm-urysohn-lemma]]).

[L6] If $g : X^{*} \to Y$ is continuous and $X \subseteq X^{*}$ carries the subspace topology, then $g|_X$ is continuous ([[def-subspace-topology-top]]).

[L7] Completely regular: for closed $C$ and $x_0 \notin C$, a continuous $f : X \to [0,1]$ with $f(x_0)=1$ and $f \equiv 0$ on $C$ ([[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $X^{*}$ is compact and Hausdorff; by [L3], $X^{*}$ is regular and normal, hence $T_3$ and $T_4$, that is normal and $T_1$. [A1, L2, L3]

1.2 $C \cup \{\infty\}$ is closed in $X^{*}$: $C$ is closed in $X$ (given), so $C \cup \{\infty\}$ is one of the sets $F \cup \{\infty\}$ of [L1] with $F=C$. [given, L1]

1.3 $\{x_0\}$ and $C \cup \{\infty\}$ are disjoint: $x_0 \in X$, so $x_0 \ne \infty$, and $x_0 \notin C$ (given). [given]

1.4 For $x \ne y$ in $X$, Hausdorffness (given, [A1]) supplies disjoint open $U \ni x$, $V \ni y$; then $y \notin U$ (else $y \in U \cap V = \varnothing$) and $x \notin V$ similarly, so $X$ is $T_1$ ([[def-t0-and-t1-spaces]]). [A1]

2.1 By step 1.1 ($T_1$) and [L4], $\{x_0\} \subseteq X \subseteq X^{*}$ is closed in $X^{*}$. [step 1.1, L4]

3.1 By step 1.1 ($X^{*}$ normal), steps 2.1, 1.2 and 1.3, and [L5], fix a continuous $g : X^{*} \to [0,1]$ with $C \cup \{\infty\} \subseteq g^{-1}(\{0\})$ and $\{x_0\} \subseteq g^{-1}(\{1\})$. [step 1.1, step 2.1, step 1.2, step 1.3, L5, choose]

4.1 By [L6] and [L2] ($X$ a subspace of $X^{*}$ with its own topology), $f := g|_X : X \to [0,1]$ is continuous. For $x \in C$: $x \in C \cup \{\infty\}$, so $f(x)=g(x)=0$; and $f(x_0) = g(x_0) = 1$, since $x_0 \in \{x_0\} \subseteq g^{-1}(\{1\})$. [step 3.1, L2, L6]

5.1 Since $C$ and $x_0 \notin C$ were arbitrary, step 4.1 exhibits, for every closed $C \subseteq X$ and $x_0 \in X \setminus C$, a continuous $f : X \to [0,1]$ with $f(x_0)=1$, $f \equiv 0$ on $C$; by [L7], $X$ is completely regular. [step 4.1, L7]

6.1 By steps 5.1 and 1.4, $X$ is completely regular and $T_1$, that is Tychonoff. [step 5.1, step 1.4] ∎

## Remarks

- **Only two facts about $X^{*}$ are used**: that it is compact Hausdorff (so normal, via [[thm-a-compact-hausdorff-space-is-regular-and-normal]]), and that $X$ sits inside it as an open subspace with its own topology, so that a Urysohn function on $X^{*}$ restricts to one on $X$ with no further argument. No property of $X^{*}$ beyond these two, and no hereditary behaviour of regularity, complete regularity or normality, is used anywhere in the proof.

- **The choice principle is the one already inside Urysohn's lemma**, applied once, inside the compact Hausdorff space $X^{*}$; nothing above performs a further selection.
````

### `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set`

````markdown
---
id: thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set
kind: theorem
title: "Under dependent choice a space is perfectly normal if and only if it is normal and every closed set is a zero set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-urysohn-lemma, lem-a-uniformly-approximable-real-valued-map-is-continuous,
       def-completely-normal-and-perfectly-normal-spaces, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-normal-and-t4-spaces,
       def-dependent-choice, def-countable-choice, def-series, thm-geometric-series,
       def-continuous-map-top, thm-continuity-characterisations-top, lem-of-abs-value,
       lem-of-sequence-basics, thm-nonnegative-series-bounded-partial-sums]
justified_by: []
aliases: []
landmark: true
short: "perfectly normal iff normal + closed sets are zero sets (DC)"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Perfectly normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space#Perfectly_normal_spaces_and_completely_normal_spaces"
    - title: "J. Munkres, Topology, 2nd ed., §33, Exercise 6"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space. Then $X$ is perfectly normal
([[def-completely-normal-and-perfectly-normal-spaces]]) if and only if $X$ is
normal ([[def-normal-and-t4-spaces]]) and every closed subset of $X$ is a zero
set ([[def-zero-sets-and-cozero-sets]]).

**Only the forward direction spends a choice principle beyond the dependent
choice already inside Urysohn's lemma.** Producing a Urysohn function for
every level of a countable presentation $C = \bigcap_n U_n$, all at once, is in
form an application of the Axiom of Countable Choice ([[def-countable-choice]]);
the argument below performs it as a direct instance of dependent choice itself,
using a relation that does not depend on the previous term, so no hypothesis
beyond DC is added and none is hidden. The converse direction uses no choice
principle at all.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice; for the forward direction, $X$ perfectly normal; for the converse, $X$ normal with every closed subset a zero set.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$, and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0=a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[A2] $X$ is perfectly normal exactly when $X$ is normal and every closed subset of $X$ is a $G_\delta$ ([[def-completely-normal-and-perfectly-normal-spaces]]).

[L1] $A \subseteq X$ is a $G_\delta$ set when $A = \bigcap_{n \in \mathbb{N}} V_n$ for some open sets $V_n$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[L2] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$ and $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] For continuous $k : X \to \mathbb{R}$, $Z(k) := k^{-1}(\{0\})$; every zero set is closed and a $G_\delta$ ([[def-zero-sets-and-cozero-sets]]).

[L4] The geometric series: $\sum_{k \ge 0} r^k = 1/(1-r)$ for real $|r|<1$ ([[thm-geometric-series]]); in particular $\sum_{k=0}^{\infty} 2^{-(k+1)} = \tfrac12 \sum_{k=0}^{\infty} 2^{-k} = \tfrac12 \cdot \dfrac{1}{1-\frac12} = 1$, a convergent series of positive reals ([[def-series]]).

[L5] The $M$-test: if $(g_n)$ are continuous real-valued functions on $X$, $(M_n)$ nonnegative reals with $|g_n(x)| \le M_n$ for every $x$ and $n$, and $\sum M_n$ converges, then $\sum g_n(x)$ converges for every $x \in X$ and $F := \sum_n g_n$ is continuous on $X$ ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]], second clause).

[L6] Scalar multiple of a continuous map is continuous: for continuous $h : X \to \mathbb{R}$ and real $c > 0$, $x \mapsto c\, h(x)$ is continuous — given $x_0 \in X$ and real $\varepsilon>0$, continuity of $h$ at $x_0$ with tolerance $\varepsilon/c$ gives open $U \ni x_0$ with $|h(x)-h(x_0)| < \varepsilon/c$ on $U$, whence $|c\,h(x) - c\,h(x_0)| = c\,|h(x)-h(x_0)| < \varepsilon$ on $U$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[lem-of-abs-value]]).

[L7] Limits in $\mathbb{R}$ preserve non-strict order: if $a_k \to a$ and $a_k \ge c$ for all $k$ beyond some index, then $a \ge c$ ([[lem-of-sequence-basics]]).

[L8] For a series of nonnegative terms, the partial sums are nondecreasing ([[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is perfectly normal. [assume-hyp]

1.2 Assume instead that $X$ is normal and every closed subset of $X$ is a zero set. [assume-hyp]

2.1 Under step 1.1: by [A2], $X$ is normal and every closed subset of $X$ is a $G_\delta$; in particular $X$ is normal. [step 1.1, A2]

2.2 Under step 1.2: let $C \subseteq X$ be closed; by hypothesis $C$ is a zero set, hence $G_\delta$ by [L3]. Since $C$ was arbitrary, every closed subset of $X$ is $G_\delta$; with $X$ normal by hypothesis, $X$ is perfectly normal by [A2]. [step 1.2, L3, A2]

3.1 Under step 1.1: let $C \subseteq X$ be closed; by step 2.1, $C$ is $G_\delta$, so by [L1] fix open sets $(U_n)_{n \in \mathbb{N}}$ with $C = \bigcap_{n} U_n$. [step 2.1, L1, choose]

4.1 Under step 1.1: put $P := \{\, (n,h) : n \in \mathbb{N},\ h : X \to [0,1] \text{ continuous},\ C \subseteq h^{-1}(\{0\}),\ X \setminus U_n \subseteq h^{-1}(\{1\}) \,\}$, and for $(n,h), (n',h') \in P$ say $(n,h) \mathbin{R} (n',h')$ when $n'=n+1$. Since $C \subseteq U_0$ (step 3.1), $C$ and $X \setminus U_0$ are disjoint closed sets ($X \setminus U_0$ closed, $U_0$ being open); by [L2] and step 2.1, fix $h_0$ with $(0,h_0) \in P$. [step 2.1, step 3.1, L2, choose, construct]

4.2 Under step 1.1: for every $(n,h) \in P$: $C \subseteq U_{n+1}$ (step 3.1), so $C$ and $X \setminus U_{n+1}$ are disjoint closed sets; by [L2] and step 2.1 there is $h'$ with $(n+1,h') \in P$, so $(n,h) \mathbin{R} (n+1,h')$. Hence $R$ is entire on $P$. [step 2.1, step 3.1, L2, choose]

5.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 4.2; by [A1] applied with $a := (0,h_0)$, there is a sequence $\big((m_k,H_k)\big)_{k \in \mathbb{N}}$ with $(m_0,H_0) = (0,h_0)$ and $(m_k,H_k) \mathbin{R} (m_{k+1},H_{k+1})$ for every $k$. As $(n,h) \mathbin{R} (n',h')$ forces $n'=n+1$, induction gives $m_k = k$ for every $k$; so $H_k : X \to [0,1]$ is continuous with $C \subseteq H_k^{-1}(\{0\})$ and $X \setminus U_k \subseteq H_k^{-1}(\{1\})$, for every $k \in \mathbb{N}$. [step 4.1, step 4.2, A1, construct]

6.1 Under step 1.1: for $k \in \mathbb{N}$ put $g_k := 2^{-(k+1)} H_k$; by [L6] each $g_k$ is continuous, and $|g_k(x)| = 2^{-(k+1)} H_k(x) \le 2^{-(k+1)} =: M_k$ for every $x \in X$, since $H_k(x) \in [0,1]$; and $\sum M_k$ converges by [L4]. [step 5.1, L4, L6, construct]

7.1 Under step 1.1: by [L5] applied to $(g_k)$ and $(M_k)$ of step 6.1: for every $x \in X$ the series $\sum g_k(x)$ converges, and $f := \sum_{k=0}^{\infty} g_k$ is a continuous map $X \to \mathbb{R}$. [step 6.1, L5, construct]

7.2 Under step 1.1: for $x \notin C$: since $C = \bigcap_n U_n$ (step 3.1), there is a natural $m$ with $x \notin U_m$, so $x \in X \setminus U_m \subseteq H_m^{-1}(\{1\})$ (step 5.1), giving $H_m(x)=1$ and $g_m(x) = 2^{-(m+1)}$. [step 3.1, step 5.1, step 6.1, choose]

8.1 Under step 1.1: for $x \in C$: $H_k(x) = 0$ for every $k$ (step 5.1), so $g_k(x)=0$ for every $k$ (step 6.1), and $f(x) = \sum_k 0 = 0$. [step 5.1, step 6.1, step 7.1]

8.2 Under step 1.1, continuing from step 7.2: every term $g_k(x) \ge 0$, since $H_k(x) \in [0,1]$; so by [L8] the partial sums $s_N(x) := \sum_{k<N} g_k(x)$ satisfy $s_N(x) \ge g_m(x) = 2^{-(m+1)}$ for every $N > m$, and $s_N(x) \to f(x)$ by step 7.1; so [L7] gives $f(x) \ge 2^{-(m+1)} > 0$. [step 7.2, step 7.1, L7, L8]

9.1 Under step 1.1: steps 8.1 and 8.2 give $f(x)=0$ for $x \in C$ and $f(x) \ne 0$ for $x \notin C$, so $C = f^{-1}(\{0\}) = Z(f)$, a zero set by [L3]. Since $C$ was an arbitrary closed subset of $X$, every closed subset of $X$ is a zero set. [step 8.1, step 8.2, L3]

10.1 Steps 2.1 and 9.1 show that, under the hypothesis of step 1.1, $X$ is normal and every closed subset of $X$ is a zero set. [step 2.1, step 9.1]

11.1 Steps 10.1 and 2.2 establish the two directions of the stated equivalence. [step 10.1, step 2.2, discharge-construct] ∎

## Remarks

- **The construction of step 4.1–5.1 is exactly the standard proof that dependent choice implies countable choice**, specialised to the family of admissible Urysohn functions at each level: the relation $R$ never looks at the first coordinate's function, only at its index, so any admissible successor is accepted. This is why the theorem needs no hypothesis beyond DC, even though the step it performs — choosing one function per natural number, all at once — is the shape of $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

- **The series $\sum 2^{-(k+1)} H_k$, not $\sum 2^{-k} H_k$, is what starts at value $1$.** Indexing from $k=0$ with weight $2^{-(k+1)}$ makes the total weight exactly $1$ and keeps every weight strictly positive, which is what step 8.2 needs to conclude $f(x) > 0$ off $C$ from a single nonzero term.

- **The converse costs nothing beyond what is already on the separation-axioms page.** "Every zero set is a $G_\delta$" is proved as part of [[def-zero-sets-and-cozero-sets]]; step 2.2 only specialises it to the closed sets that the hypothesis already promises are zero sets.
````

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal`

````markdown
---
id: thm-metric-spaces-are-tychonoff-and-perfectly-normal
kind: theorem
title: "In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-metric-spaces-are-completely-normal, def-completely-regular-and-tychonoff-spaces,
       def-completely-normal-and-perfectly-normal-spaces, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-metric-bounded-diameter,
       lem-distance-to-set-is-lipschitz, thm-metric-closure-characterisation,
       def-metric-continuity, thm-metric-continuity-characterisations,
       def-metrizable-space, def-metric-space, def-metric-topology,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor,
       def-max-min, lem-finite-set-has-max, def-hausdorff-space,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-t0-and-t1-spaces,
       def-interval, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "metric spaces are Tychonoff and perfectly normal"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), and write $1/(n+1)$ for the inverse of the canonical
natural $\iota(n+1)$ of $\mathbb{R}$ ([[def-canonical-natural]]). Then:

1. **Every closed set is a zero set.** For closed $C \subseteq X$ there is a
   continuous $f : X \to \mathbb{R}$ with $C = Z(f)$
   ([[def-zero-sets-and-cozero-sets]]); for $C \ne \varnothing$ one may take
   $f(x) = d(x,C)$ ([[def-metric-bounded-diameter]]), and for $C = \varnothing$
   the constant function $1$.
2. **Every closed set is a $G_\delta$**
   ([[def-g-delta-and-f-sigma-in-a-topological-space]]): for $C \ne \varnothing$,
   $$C \;=\; \bigcap_{n \in \mathbb{N}} \{\, x \in X : d(x,C) < 1/(n+1) \,\},$$
   an intersection of open sets, and $\varnothing$ is open hence a $G_\delta$.
3. **$X$ is completely regular** ([[def-completely-regular-and-tychonoff-spaces]]):
   for closed $C$ and $x_0 \notin C$ the function
   $f(x) := \min\{1,\ d(x,C)/r\}$ with $r := d(x_0,C)$ is continuous, takes the
   value $1$ at $x_0$ and the value $0$ on $C$, when $C \ne \varnothing$; for
   $C = \varnothing$ the constant function $1$ serves.
4. Consequently every metrizable space ([[def-metrizable-space]]) is **Tychonoff**
   and **perfectly normal**, and hence $T_6$, $T_5$, $T_4$, $T_{3\frac12}$,
   $T_3$, $T_{2\frac12}$, $T_2$, $T_1$ and $T_0$.

**No choice principle is used anywhere below.**

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a closed set $C \subseteq X$, a point $x_0 \in X \setminus C$, and $\mathbb{R}$ with its usual topology.

[L1] For nonempty $S \subseteq X$ the distance $d(x,S)$ is defined, is $\ge 0$, and $\overline{S} = \{\, x : d(x,S) = 0 \,\}$ ([[def-metric-bounded-diameter]], [[thm-metric-closure-characterisation]], claim 1).

[L2] $|d(x,S) - d(y,S)| \le d(x,y)$ for nonempty $S$ ([[lem-distance-to-set-is-lipschitz]]).

[L3] A map between metric spaces satisfying an inequality $|g(x) - g(y)| \le L\, d(x,y)$ with $L > 0$ is continuous in the $\varepsilon$-$\delta$ sense, by $\delta := \varepsilon / L$, and is therefore continuous as a map of topological spaces ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], clause (b), [[def-metrizable-space]]).

[L4] A set is closed exactly when it equals its closure ([[thm-metric-closure-characterisation]], claim 3); $\varnothing$ and $X$ are open ([[def-metric-topology]], [[def-topological-space]]).

[L5] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$, and every nonzero natural is a successor, so $k = n+1$ for some $n \in \mathbb{N}$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[def-canonical-natural]]).

[L6] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]); and $[0,1]$ is the set of reals $t$ with $0 \le t \le 1$ ([[def-interval]]).

[L7] Every metrizable space is Hausdorff, hence $T_1$ and $T_0$ ([[def-metrizable-space]], [[def-hausdorff-space]], [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], [[def-t0-and-t1-spaces]]).

[L8] Every metric space is completely normal, hence normal ([[thm-metric-spaces-are-completely-normal]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $C \ne \varnothing$ and put $g(x) := d(x,C)$; then $g$ is continuous by [L2] and [L3] with $L = 1$. [L1, L2, L3, assume-hyp]

1.2 If $C = \varnothing$ then the constant function $1$ is continuous and has zero set $\varnothing = C$, since $1 \ne 0$. [L3, L4]

2.1 Under step 1.1: $Z(g) = \{\, x : d(x,C) = 0 \,\} = \overline{C} = C$, the last equality because $C$ is closed. [step 1.1, L1, L4]

2.2 Under step 1.1: for each $n$ the set $W_n := \{\, x : d(x,C) < 1/(n+1) \,\}$ is open, since for $x \in W_n$ and $t := 1/(n+1) - d(x,C) > 0$ any $y$ with $d(x,y) < t$ has $d(y,C) \le d(x,C) + d(x,y) < 1/(n+1)$ by [L2]. [step 1.1, L2]

3.1 By steps 2.1 and 1.2 every closed subset of $X$ is a zero set, which is claim 1. [step 2.1, step 1.2]

3.2 Under step 1.1: $C \subseteq \bigcap_n W_n$, since $d(x,C) = 0 < 1/(n+1)$ for $x \in C$ by [L1] and step 2.1. [step 2.1, step 2.2, L1]

3.3 Under step 1.1: if $x \notin C$ then $d(x,C) > 0$ by [L1] and step 2.1, so [L5] gives $n$ with $1/(n+1) < d(x,C)$ and hence $x \notin W_n$. [step 2.1, step 2.2, L1, L5]

3.4 Under step 1.1 with $x_0 \notin C$: $r := d(x_0,C) > 0$ by [L1] and step 2.1, and $f(x) := \min\{1,\ d(x,C)/r\}$ takes values in $[0,1]$ by [L1] and [L6]. [step 2.1, L1, L6]

4.1 Steps 3.2 and 3.3 give $C = \bigcap_n W_n$ for nonempty closed $C$, and $\varnothing$ is open hence a $G_\delta$ by [L4]; this is claim 2. [step 3.2, step 3.3, L4]

4.2 Under step 3.4: $|\min\{1,u\} - \min\{1,v\}| \le |u - v|$ for all reals $u,v$, since if both are at most $1$ the two sides are equal, if both exceed $1$ the left side is $0$, and if $u \le 1 < v$ then the left side is $1 - u$, which is at most $v - u$, the remaining case $v \le 1 < u$ being the same with $u$ and $v$ exchanged; hence $|f(x) - f(y)| \le |d(x,C) - d(y,C)|/r \le d(x,y)/r$ and $f$ is continuous by [L3] with $L = 1/r$. [step 3.4, L2, L3, L6]

4.3 Under step 3.4: $f(x_0) = \min\{1, r/r\} = \min\{1,1\} = 1$, and $f(y) = \min\{1, 0\} = 0$ for $y \in C$ since $d(y,C) = 0$. [step 3.4, L1, L6]

5.1 By steps 4.2 and 4.3, and by step 1.2 for the case $C = \varnothing$, the space $X$ is completely regular, which is claim 3. [step 1.2, step 4.2, step 4.3]

6.1 A metrizable space $Y$ is completely regular by step 5.1 applied to any inducing metric, and it is $T_1$ by [L7], so it is Tychonoff; it is normal by [L8] and every closed subset of it is a $G_\delta$ by step 4.1, so it is perfectly normal. [step 4.1, step 5.1, L7, L8]

7.1 Being perfectly normal and $T_1$, such a $Y$ is $T_6$; it is $T_5$ and $T_4$ by [L8] and $T_1$, it is $T_{3\frac12}$ by step 6.1, and it is $T_3$, $T_{2\frac12}$, $T_2$, $T_1$ and $T_0$ by the implications already proved on this page; this is claim 4. [step 6.1, L7, L8] ∎

## Remarks

- **Claim 1 is the sharp form and claim 2 is its shadow.** A zero set is always a $G_\delta$ ([[def-zero-sets-and-cozero-sets]]), so claim 2 follows from claim 1; it is proved separately here because the explicit presentation $\bigcap_n \{x : d(x,C) < 1/(n+1)\}$ is the one quoted later, and because it makes visible that the index runs from $n = 0$, where the radius is $1$.

- **The empty closed set is not a nuisance to be waved away.** $d(x,\varnothing)$ is undefined in this library, there being no infimum of the empty set ([[def-metric-bounded-diameter]]), so each of the three claims is discharged separately at $C = \varnothing$ by a constant function or by openness.

- **What this does *not* prove.** It says nothing about which non-metrizable spaces are perfectly normal, and it gives no metrization theorem in the other direction: exhibiting a metric is the only way a space is shown metrizable here ([[def-metrizable-space]]).
````

### `thm-perfectly-normal-implies-completely-normal`

````markdown
---
id: thm-perfectly-normal-implies-completely-normal
kind: theorem
title: "Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completely-normal-and-perfectly-normal-spaces, def-normal-and-t4-spaces,
       def-separated-sets, def-g-delta-and-f-sigma-in-a-topological-space,
       lem-normality-via-shrinking, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-topological-space, def-countable,
       def-countable-choice, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: true
short: "perfectly normal implies completely normal"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separated sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separated_sets"
    - title: "R. Engelking, General Topology, §1.5"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(X, \mathcal{T})$ be a perfectly normal space
([[def-completely-normal-and-perfectly-normal-spaces]]): $X$ is normal
([[def-normal-and-t4-spaces]]) and every closed subset of $X$ is a $G_\delta$,
equivalently every open subset of $X$ is an $F_\sigma$
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Then $X$ is **completely
normal**: any two separated sets $A, B \subseteq X$ ([[def-separated-sets]])
admit disjoint open $U \supseteq A$ and $V \supseteq B$.

Consequently $T_6$ implies $T_5$.

**No continuous function is constructed anywhere in the proof**, and in
particular Urysohn's lemma is not used. All that is consumed is normality,
applied once to each member of a countable family of closed sets, and the
$F_\sigma$ presentation of two open sets.

**Where the choice principle is spent, and why it is not removable as written.**
Step 4.1 selects, for each $n \in \mathbb{N}$ at once, one open set $U_n$ out of
the nonempty family that normality provides for the closed set $F_n$, and
likewise one $V_n$; normality is an existence statement and supplies no rule for
singling out a member, so extracting the two sequences is an application of
$\mathrm{AC}_\omega$ and of nothing stronger. The hypothesis is stated in the
theorem rather than hidden in the proof, as this library does everywhere.

## Facts & Assumptions

**Given:** A perfectly normal space $(X,\mathcal{T})$ and separated sets $A, B \subseteq X$, so that $\overline{A} \cap B = A \cap \overline{B} = \varnothing$.

[A1] $A$ and $B$ are separated: $\overline{A} \cap B = \varnothing$ and $A \cap \overline{B} = \varnothing$ ([[def-separated-sets]]).

[A2] Every open subset of $X$ is an $F_\sigma$: it is $\bigcup_{n \in \mathbb{N}} C_n$ for some sequence of closed sets $C_n$ ([[def-completely-normal-and-perfectly-normal-spaces]], [[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-countable]]).

[A3] $\mathrm{AC}_\omega$: for a family of nonempty sets indexed by $\mathbb{N}$ there is a function choosing a member of each ([[def-countable-choice]]).

[L1] In a normal space, disjoint closed sets $F$ and $D$ admit an open $W \supseteq F$ with $\overline{W} \cap D = \varnothing$ ([[lem-normality-via-shrinking]], final assertion, [[def-normal-and-t4-spaces]]).

[L2] $\overline{S}$ is closed and contains $S$; a set is closed exactly when it equals its closure; a set is closed exactly when its complement is open ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L3] A union of finitely many closed sets is closed by iterating (C3), an arbitrary union of open sets is open by (T2), and an intersection of two open sets is open by (T3) ([[def-topological-space]]).

[L4] For all $n, m \in \mathbb{N}$ exactly one of $n < m$, $n = m$, $m < n$ holds ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq X \setminus \overline{B}$ and $B \subseteq X \setminus \overline{A}$, and both of these sets are open. [A1, L2]

2.1 By [A2] fix sequences of closed sets with $X \setminus \overline{B} = \bigcup_{n \in \mathbb{N}} F_n$ and $X \setminus \overline{A} = \bigcup_{n \in \mathbb{N}} G_n$. [step 1.1, A2, choose]

3.1 For every $n$ the closed sets $F_n$ and $\overline{B}$ are disjoint, since $F_n \subseteq X \setminus \overline{B}$; likewise $G_n$ and $\overline{A}$ are disjoint closed sets. [step 2.1, L2]

4.1 By [L1] the set of open $W \supseteq F_n$ with $\overline{W} \cap \overline{B} = \varnothing$ is nonempty for each $n$, and likewise the set of open $W' \supseteq G_n$ with $\overline{W'} \cap \overline{A} = \varnothing$; so [A3] supplies sequences $(U_n)_{n \in \mathbb{N}}$ and $(V_n)_{n \in \mathbb{N}}$ of open sets with $F_n \subseteq U_n$, $\overline{U_n} \cap \overline{B} = \varnothing$, $G_n \subseteq V_n$ and $\overline{V_n} \cap \overline{A} = \varnothing$ for every $n$. [step 3.1, A3, L1, choose]

5.1 Define $U := \bigcup_{n \in \mathbb{N}} \big(U_n \setminus \bigcup_{i \le n} \overline{V_i}\big)$ and $V := \bigcup_{n \in \mathbb{N}} \big(V_n \setminus \bigcup_{j \le n} \overline{U_j}\big)$. [step 4.1, construct]

6.1 $U$ and $V$ are open: for each $n$ the set $\bigcup_{i \le n} \overline{V_i}$ is a union of finitely many closed sets, hence closed, so its complement is open and $U_n \setminus \bigcup_{i \le n} \overline{V_i}$ is an intersection of two open sets; the union over $n$ is then open. [step 5.1, L2, L3]

6.2 $A \subseteq U$: given $a \in A$, step 1.1 and step 2.1 put $a$ in some $F_n \subseteq U_n$, while $a \in \overline{A}$ and $\overline{V_i} \cap \overline{A} = \varnothing$ give $a \notin \overline{V_i}$ for every $i$; hence $a \in U_n \setminus \bigcup_{i \le n} \overline{V_i} \subseteq U$. [step 1.1, step 2.1, step 4.1, step 5.1, L2]

6.3 $B \subseteq V$: given $b \in B$, step 1.1 and step 2.1 put $b$ in some $G_m \subseteq V_m$, while $b \in \overline{B}$ and $\overline{U_j} \cap \overline{B} = \varnothing$ give $b \notin \overline{U_j}$ for every $j$; hence $b \in V_m \setminus \bigcup_{j \le m} \overline{U_j} \subseteq V$. [step 1.1, step 2.1, step 4.1, step 5.1, L2]

6.4 Suppose $x \in U \cap V$; then by step 5.1 there are $n, m \in \mathbb{N}$ with $x \in U_n$, $x \notin \overline{V_i}$ for all $i \le n$, $x \in V_m$, and $x \notin \overline{U_j}$ for all $j \le m$. [step 5.1, assume-hyp]

7.1 If $n \le m$ in step 6.4 then $j := n$ satisfies $j \le m$, so $x \notin \overline{U_n}$; but $x \in U_n \subseteq \overline{U_n}$, which is impossible. [step 6.4, L2]

7.2 If $m < n$ in step 6.4 then $i := m$ satisfies $i \le n$, so $x \notin \overline{V_m}$; but $x \in V_m \subseteq \overline{V_m}$, which is impossible. [step 6.4, L2]

8.1 By [L4] one of $n \le m$ and $m < n$ holds, so steps 7.1 and 7.2 exclude every case and no such $x$ exists: $U \cap V = \varnothing$. [step 7.1, step 7.2, L4]

9.1 By steps 6.1, 6.2, 6.3 and 8.1 the sets $U$ and $V$ are disjoint open sets containing $A$ and $B$ respectively; since $A$ and $B$ were an arbitrary separated pair, $X$ is completely normal, and with the hypothesis $T_1$ this reads $T_6$ implies $T_5$. [step 6.1, step 6.2, step 6.3, step 8.1] ∎

## Remarks

- **The subtraction of the earlier closures is the entire trick.** Each $U_n \setminus \bigcup_{i \le n} \overline{V_i}$ is still large enough to catch the part of $A$ that $F_n$ covers, because no point of $A$ lies in any $\overline{V_i}$; and it is small enough that the two unions cannot meet, because a putative common point would be inside a $U_n$ that a later stage of $V$ has already removed, or inside a $V_m$ that a later stage of $U$ has removed. The comparison $n \le m$ or $m < n$ is what decides which of the two it is.

- **Only the two closures $\overline{A}$ and $\overline{B}$ are used**, never the sets $A$ and $B$ themselves beyond membership, which is why the hypothesis is exactly separation and not disjointness. For disjoint sets that are not separated the argument breaks at step 6.2.

- **The converse is not proved here and is not asserted.** Perfect normality asks a countability condition of every closed set that complete normality never mentions, so the two are not the same hypothesis; but no witness separating them is exhibited in this library, and nothing above claims one exists.

- **The hereditary reading is not used.** Complete normality is equivalent to the normality of every subspace, and some texts prove this theorem in that language; the argument above works directly with the separated-sets definition and never passes to a subspace.
````

### `thm-tietze-extension-theorem`

````markdown
---
id: thm-tietze-extension-theorem
kind: theorem
title: "Tietze's extension theorem, under dependent choice: a continuous map from a closed subspace of a normal space into $[a,b]$ extends continuously to the whole space, and this property characterises normality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-urysohn-lemma, lem-a-uniformly-approximable-real-valued-map-is-continuous,
       def-normal-and-t4-spaces, def-dependent-choice, def-subspace-topology-top,
       def-continuous-map-top, thm-continuity-characterisations-top, def-interval,
       def-series, thm-geometric-series,
       def-interior-closure-boundary-top, def-ordered-field, lem-of-abs-value,
       lem-of-sequence-basics, lem-continuity-is-local-and-pastes,
       def-topological-space, lem-geometric-sequence-null,
       lem-real-line-is-a-metric-space]
justified_by: []
aliases: [thm-tietze]
landmark: true
short: "Tietze extension theorem (DC)"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
    - title: "J. Munkres, Topology, 2nd ed., §35"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space.

1. If $X$ is normal ([[def-normal-and-t4-spaces]]), $A \subseteq X$ is closed
   ([[def-subspace-topology-top]]) and $a \le b$ are reals, then every
   continuous $f : A \to [a,b]$ ([[def-interval]]) extends to a continuous
   $F : X \to [a,b]$ with $F|_A = f$.
2. Conversely, if for every closed $A \subseteq X$ and every reals $a \le b$
   every continuous $f : A \to [a,b]$ extends to a continuous $F : X \to [a,b]$
   with $F|_A = f$, then $X$ is normal. **This direction uses no choice
   principle.**

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice; for clause 1, $X$ normal, $A \subseteq X$ closed, reals $a \le b$, and continuous $f : A \to [a,b]$; for clause 2, $X$ such that the extension property of clause 1 holds for every closed subspace and every $a \le b$.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R$ entire on $P$, and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0=a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[A2] Normal: disjoint closed sets admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[L1] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$, $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L2] If $A$ is closed in $X$ and $C \subseteq A$ is closed in the subspace $A$, then $C$ is closed in $X$: by [[def-subspace-topology-top]] $C = F \cap A$ for some closed $F \subseteq X$, and an intersection of two closed sets of $X$ is closed ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L3] Preimages of closed sets under a continuous map are closed ([[thm-continuity-characterisations-top]], clause (c)); preimages of open sets are open (clause (b)).

[L4] The geometric series: $\sum_{n \ge 0} (2/3)^n = 1/(1-2/3) = 3$ ([[thm-geometric-series]]), so $\sum_{n\ge0} M_n/3 = r$ for $M_n := r(2/3)^n$ and any real $r$; and $(2/3)^n \to 0$ as $n \to \infty$ (the same theorem's proof, [[lem-geometric-sequence-null]]).

[L5] The $M$-test: continuous $(g_n)$ on $X$, nonnegative reals $(N_n)$ with $|g_n(x)|\le N_n$ for all $x,n$ and $\sum N_n$ convergent, give $\sum g_n(x)$ convergent for every $x$ and $\sum_n g_n$ continuous on $X$ ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]], second clause).

[L6] Finite triangle inequality $|\sum_k u_k| \le \sum_k |u_k|$ ([[lem-of-abs-value]]); a real sequence has at most one limit, and limits preserve non-strict order ([[lem-of-sequence-basics]]).

[L7] The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ ([[lem-real-line-is-a-metric-space]], clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ ([[def-subspace-topology-top]], [[def-interval]]). They are disjoint and contain $0$ and $1$, respectively.

[L8] $A$ and $B$ open in a subspace $S$, with $A \cup B = S$ and $A \cap B = \varnothing$: a function on $S$ constant on $A$ and constant on $B$ is continuous ([[lem-continuity-is-local-and-pastes]], clause 2).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is normal, $A \subseteq X$ is closed, $a \le b$ are reals, and $f : A \to [a,b]$ is continuous. [assume-hyp]

1.2 Assume instead that $X$ is such that every continuous $g : C \to [p,q]$ on a closed $C \subseteq X$, $p \le q$ reals, extends continuously to $X \to [p,q]$. [assume-hyp]

2.1 Under step 1.1: if $a=b$ the constant map $F : X \to \{a\} \subseteq [a,b]$, $F \equiv a$, is continuous and $F|_A = f$, since $f : A \to \{a\}$ forces $f \equiv a$. Assume from here that $a<b$. [step 1.1, assume-hyp, construct]

2.2 Under step 1.2: let $C, E \subseteq X$ be disjoint closed sets; $C \cup E$ is closed, and $C, E$ are each open in the subspace $C \cup E$, being the complement there of the other, which is closed. Define $k : C \cup E \to \{0,1\} \subseteq [0,1]$ by $k \equiv 0$ on $C$ and $k \equiv 1$ on $E$; $k$ is constant, hence continuous, on each of $C$ and $E$, so $k$ is continuous on $C \cup E$ by [L8]. [step 1.2, L8, choose, construct]

3.1 Under steps 1.1 and 2.1: put $c := (a+b)/2$ and $r := (b-a)/2 > 0$, and define $f_0 : A \to \mathbb{R}$ by $f_0(x) := f(x)-c$; $f_0$ is continuous, being $f$ minus a constant, and $f_0[A] \subseteq [-r,r]$, since $f[A] \subseteq [a,b] = [c-r,c+r]$. [step 1.1, step 2.1, algebra, construct]

3.2 Under step 1.2: by hypothesis applied to the closed set $C \cup E$ and $p:=0, q:=1$, fix a continuous $K : X \to [0,1]$ with $K|_{C\cup E} = k$. [step 1.2, step 2.2, choose]

4.1 Under step 1.1: for $n \in \mathbb{N}$ put $M_n := r(2/3)^n$. Call a pair $(f_n,g_n)$, with $f_n : A \to \mathbb{R}$ and $g_n : X \to \mathbb{R}$ continuous, **admissible at level $n$** when $|f_n(x)| \le M_n$ for $x \in A$; $|g_n(x)| \le M_n/3$ for $x \in X$; $g_n(x) = -M_n/3$ for $x \in A$ with $f_n(x) \le -M_n/3$; and $g_n(x) = M_n/3$ for $x \in A$ with $f_n(x) \ge M_n/3$. [step 3.1, construct]

4.2 Under step 1.2: by [L7], put $O_1 := K^{-1}(\,[0,\tfrac12)\,)$, $O_2 := K^{-1}(\,(\tfrac12,1]\,)$, open by [L3]. $C \subseteq O_1$, since $K \equiv 0 \in [0,\tfrac12)$ on $C$; $E \subseteq O_2$, since $K \equiv 1 \in (\tfrac12,1]$ on $E$; and $O_1 \cap O_2 = \varnothing$, the two target sets being disjoint. [step 3.2, L7, L3]

5.1 Under step 1.1: put $A_0^- := \{x \in A : f_0(x) \le -M_0/3\}$, $A_0^+ := \{x \in A : f_0(x) \ge M_0/3\}$; both closed in $A$ by [L3] and hence in $X$ by [L2], and disjoint since $-M_0/3 < M_0/3$. By [L1] fix continuous $h_0 : X \to [0,1]$ with $A_0^- \subseteq h_0^{-1}(\{0\})$ and $A_0^+ \subseteq h_0^{-1}(\{1\})$, and put $g_0 := (M_0/3)(2h_0-1)$, continuous. [step 3.1, step 4.1, L1, L2, L3, choose, construct]

5.2 Under step 1.1: let $n \in \mathbb{N}$ and let $(f_n,g_n)$ be admissible at level $n$; define $f_{n+1} : A \to \mathbb{R}$ by $f_{n+1}(x) := f_n(x)-g_n(x)$, continuous. [step 4.1, construct]

5.3 Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [A2]; this is clause 2, and it uses [A1] nowhere. [step 4.2, A2]

6.1 Under step 1.1: $(f_0,g_0)$ is admissible at level $0$: $|f_0| \le M_0$ on $A$ by step 3.1; $|g_0(x)| = (M_0/3)|2h_0(x)-1| \le M_0/3$ for every $x$, since $h_0(x) \in [0,1]$; $g_0(x) = -M_0/3$ for $x \in A_0^-$, where $h_0(x)=0$; and $g_0(x)=M_0/3$ for $x \in A_0^+$, where $h_0(x)=1$. [step 5.1, algebra]

6.2 Under step 1.1, continuing under step 5.2: for $x \in A$ with $f_n(x) \le -M_n/3$: $g_n(x)=-M_n/3$ (admissibility), so $f_{n+1}(x) = f_n(x)+M_n/3 \in [-2M_n/3,\,0]$, using $-M_n \le f_n(x) \le -M_n/3$; for $x \in A$ with $f_n(x) \ge M_n/3$: $f_{n+1}(x) = f_n(x)-M_n/3 \in [0,\,2M_n/3]$; for $x \in A$ with $-M_n/3 < f_n(x) < M_n/3$: $|g_n(x)| \le M_n/3$ gives $f_{n+1}(x) \in (-2M_n/3,\,2M_n/3)$. In every case $|f_{n+1}(x)| \le 2M_n/3 = M_{n+1}$. [step 5.2, step 4.1, algebra]

6.3 Under step 1.1: put $A_{n+1}^- := \{x\in A: f_{n+1}(x)\le -M_{n+1}/3\}$, $A_{n+1}^+ := \{x\in A: f_{n+1}(x)\ge M_{n+1}/3\}$; closed in $X$ by [L2], [L3], and disjoint. By [L1] fix continuous $h_{n+1}:X\to[0,1]$ with $A_{n+1}^- \subseteq h_{n+1}^{-1}(\{0\})$, $A_{n+1}^+ \subseteq h_{n+1}^{-1}(\{1\})$, and put $g_{n+1} := (M_{n+1}/3)(2h_{n+1}-1)$. [step 5.2, step 4.1, L1, L2, L3, choose, construct]

7.1 Under step 1.1: $(f_{n+1},g_{n+1})$ is admissible at level $n+1$, by step 6.2 and the same computation as step 6.1 with $h_{n+1}, g_{n+1}, M_{n+1}$ in place of $h_0,g_0,M_0$. So every admissible pair at level $n$ has an admissible successor at level $n+1$. [step 6.2, step 6.3]

8.1 Under step 1.1: put $P := \{\, (n,f_n,g_n) : n \in \mathbb{N},\ (f_n,g_n) \text{ admissible at level } n \,\}$, and for $(n,f,g),(n',f',g') \in P$ say $(n,f,g) \mathbin{R} (n',f',g')$ when $n'=n+1$ and $f' = (f-g)|_A$ pointwise. $P$ is nonempty by step 6.1, and $R$ is entire on $P$ by steps 5.2, 6.2, 6.3 and 7.1 (the pair produced there has $f_{n+1} = (f_n-g_n)|_A$ exactly as step 5.2 defines it). By [A1] with $a := (0,f_0,g_0)$, fix a sequence $\big((n_k,F_k,G_k)\big)_{k \in \mathbb{N}}$ with $(n_0,F_0,G_0)=(0,f_0,g_0)$ and $(n_k,F_k,G_k) \mathbin{R} (n_{k+1},F_{k+1},G_{k+1})$ for every $k$; as $R$ forces $n'=n+1$, induction gives $n_k=k$, so $(F_k,G_k)$ is admissible at level $k$ for every $k$, with $F_{k+1} = (F_k-G_k)|_A$. [step 6.1, step 7.1, step 5.2, A1, construct]

9.1 Under step 1.1: by [L4], $\sum_n M_n/3 = r$, convergent; by [L5] applied to $(G_n)$ and $(M_n/3)$ (each $|G_n(x)| \le M_n/3$ for all $x$, by admissibility), for every $x \in X$ the series $\sum_n G_n(x)$ converges, and $F := \sum_{n=0}^{\infty} G_n$ is a continuous map $X \to \mathbb{R}$. [step 8.1, L4, L5, construct]

9.2 Under step 1.1: for $x \in A$ and $N \in \mathbb{N}$: by the telescoping of step 8.1, $\sum_{n<N} G_n(x) = F_0(x) - F_N(x) = f_0(x)-F_N(x)$, since $F_0=f_0$. [step 8.1, algebra]

10.1 Under step 1.1: for every $x \in X$ and $N \in \mathbb{N}$, $\big|\sum_{n<N} G_n(x)\big| \le \sum_{n<N}|G_n(x)| \le \sum_{n<N} M_n/3 \le r$, by [L6] and admissibility; letting $N \to \infty$, since $\sum_{n<N}G_n(x) \to F(x)$ (step 9.1) and order is preserved in the limit ([L6]), $|F(x)| \le r$. [step 9.1, L4, L6, algebra]

10.2 Under step 1.1: for $x \in A$: $|F_N(x)| \le M_N = r(2/3)^N \to 0$ as $N \to \infty$, by admissibility of $F_N$ (step 8.1) and [L4]; so by step 9.2, $\sum_{n<N} G_n(x) = f_0(x)-F_N(x) \to f_0(x)-0 = f_0(x)$. [step 9.2, step 8.1, L4]

11.1 Under step 1.1: for $x \in A$: $\sum_{n<N} G_n(x) \to F(x)$ by step 9.1 and $\to f_0(x)$ by step 10.2; since a real sequence has at most one limit ([L6]), $F(x) = f_0(x)$. [step 9.1, step 10.2, L6]

12.1 Under step 1.1: define $\hat F : X \to \mathbb{R}$ by $\hat F(x) := F(x)+c$, continuous; for $x \in X$, $\hat F(x) \in [c-r,c+r] = [a,b]$ by step 10.1; for $x \in A$, $\hat F(x) = F(x)+c = f_0(x)+c = f(x)$ by step 11.1 and the definition of $f_0$ in step 3.1. [step 10.1, step 11.1, step 3.1, algebra, construct]

13.1 Steps 2.1 and 12.1 show that, under the hypothesis of step 1.1, a continuous $F : X \to [a,b]$ with $F|_A=f$ exists — either the constant map of step 2.1 when $a=b$, or $\hat F$ of step 12.1 when $a<b$ — which is clause 1. [step 2.1, step 12.1]

14.1 Steps 13.1 and 5.3 establish clauses 1 and 2 respectively. [step 13.1, step 5.3, discharge-construct] ∎

## Remarks

- **The bound after $n$ stages is $M_n = r(2/3)^n$, with $M_0 = r$, not $r(2/3)^{n-1}$.** Indexing from $n=0$ is what makes step 6.1 the base case rather than a special first step, and it is why the geometric series of [L4] is summed from $n=0$.

- **Choice is spent once more here, genuinely as dependent choice and not in disguise.** Unlike the countable-choice step inside the previous item, the function $g_{n+1}$ chosen in step 6.3 depends on $f_{n+1}$, which is computed from $f_n$ and the *particular* $g_n$ retained in the state $(n,f_n,g_n) \in P$ of step 8.1 — not merely on the index $n$. So the relation $R$ genuinely cannot be replaced by one that ignores its first argument, and this is exactly the situation dependent choice, rather than countable choice alone, is for.

- **The target $[a,b]$ is handled by a shift, not a rescaling.** Working with $f_0 = f - c$ keeps every bound in the construction a plain multiple of $r$, and the final translation $\hat F = F + c$ is the only place $c$ reappears; no affine change of variable on $X$ or on $g_n$ is needed elsewhere.
````

### `thm-urysohn-lemma`

````markdown
---
id: thm-urysohn-lemma
kind: theorem
title: "Urysohn's lemma, under the axiom of dependent choice: in a normal space two disjoint closed sets are separated by a continuous function into $[0,1]$, and conversely such a space is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function,
       def-the-dyadic-rationals-of-the-unit-interval, def-normal-and-t4-spaces,
       lem-normality-via-shrinking, def-dependent-choice, lem-finite-choice,
       def-choice-function, def-continuous-map-top, thm-continuity-characterisations-top,
       def-interior-closure-boundary-top, def-interval, def-topological-space,
       def-subspace-topology-top, lem-real-line-is-a-metric-space]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: [thm-urysohn]
landmark: true
short: "Urysohn's lemma (DC)"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space.

1. If $X$ is normal ([[def-normal-and-t4-spaces]]) and $A, B \subseteq X$ are
   disjoint closed sets, there is a continuous $f : X \to [0,1]$
   ([[def-continuous-map-top]], [[def-interval]]) with
   $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.
2. Conversely, if every pair of disjoint closed subsets of $X$ admits a
   continuous function into $[0,1]$ separating them in the sense of clause 1,
   then $X$ is normal. **This direction uses no choice principle.**

**Where the choice principle of clause 1 is spent, and why not less.** The
construction below builds, for each $n \in \mathbb{N}$, an assignment of an
open set to every dyadic rational of level $n$, extending the level-$(n-1)$
assignment; at each single level the finitely many new open sets are chosen at
once by [[lem-finite-choice]], a theorem of ZF, but stringing together
infinitely many such levels, each depending on the one before, is exactly the
situation dependent choice is for. The published
[[rem-urysohn-lemma-not-a-zf-theorem]] records, with its sources, that
$\mathrm{ZF}$ and even $\mathrm{ZF}$ together with the Axiom of Countable
Choice do not suffice, and that dependent choice does; nothing here claims
dependent choice is *necessary* for clause 1, only that the construction given
is carried out in $\mathrm{ZF} + \mathrm{DC}$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$ (every $p \in P$ has some $q \in P$ with $p \mathbin{R} q$), and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0 = a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[L1] Shrinking: if $X$ is normal, $C \subseteq X$ is closed and $O \subseteq X$ is open with $C \subseteq O$, then there is open $W$ with $C \subseteq W \subseteq \overline{W} \subseteq O$ ([[lem-normality-via-shrinking]]).

[L2] Finite choice: a function $F$ with domain a natural number $n$, all of whose values are nonempty sets, admits a choice function for the family $F[n]$ of its values ([[lem-finite-choice]], [[def-choice-function]]), a theorem of ZF.

[L3] The dyadic rationals $D = \bigcup_{n} D_n$ of $[0,1]$ are an increasing union of finite levels; for $n \in \mathbb{N}$, $D_{n+1} = D_n \cup \{\, t_j : 0 \le j < 2^n \,\}$, where $t_j$ is strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and $s_j := (j+1)/2^n$, the $2^n$ points $t_j$ are pairwise distinct and disjoint from $D_n$, and every two elements of $D$ lie together in some common $D_n$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L4] Chaining: if $V_0, \dots, V_k$ ($k \ge 0$) are subsets of $X$ with $\overline{V_i} \subseteq V_{i+1}$ for every $i < k$, then $\overline{V_0} \subseteq V_k$, since $V_i \subseteq \overline{V_i} \subseteq V_{i+1}$ for each $i$ ([[def-interior-closure-boundary-top]]) makes $\overline{V_0} \subseteq V_1 \subseteq V_2 \subseteq \cdots \subseteq V_k$ a chain of inclusions.

[L5] The generic construction: if $(U_r)_{r \in D}$ is a family of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r<s$ in $D$ and $U_1 = X$, then $g(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$ ([[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]]).

[L6] The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ ([[lem-real-line-is-a-metric-space]], clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ ([[def-subspace-topology-top]], [[def-interval]]). They are disjoint and contain $0$ and $1$, respectively.

[L7] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

[L8] $A \subseteq \overline{A}$ for every $A \subseteq X$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is normal and $A, B \subseteq X$ are disjoint closed sets (the hypothesis of clause 1). [assume-hyp]

1.2 Assume instead that every pair of disjoint closed subsets of $X$ admits a continuous function into $[0,1]$ separating them as in clause 1 (the hypothesis of clause 2). [assume-hyp]

2.1 Under step 1.1: $A \subseteq X \setminus B$, since $A \cap B = \varnothing$, and $X \setminus B$ is open since $B$ is closed; by [L1] applied to the closed set $A$ and the open set $X \setminus B$, fix open $\Phi_0(0)$ with $A \subseteq \Phi_0(0) \subseteq \overline{\Phi_0(0)} \subseteq X \setminus B$, and put $\Phi_0(1) := X \setminus B$, defining $\Phi_0 : D_0 \to \mathcal{T}$ on $D_0 = \{0,1\}$. [step 1.1, L1, choose, construct]

2.2 Under step 1.2: let $C, E \subseteq X$ be disjoint closed sets; fix a continuous $h : X \to [0,1]$ with $C \subseteq h^{-1}(\{0\})$ and $E \subseteq h^{-1}(\{1\})$. [step 1.2, choose]

3.1 Under step 1.1: $A \subseteq \Phi_0(0)$; $\overline{\Phi_0(0)} \subseteq \Phi_0(1)$; and $\Phi_0(1) = X \setminus B$. [step 2.1]

3.2 Under step 1.2, continuing: by [L6], $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in $[0,1]$, disjoint, with $0 \in [0,\tfrac12)$ and $1 \in (\tfrac12,1]$; put $O_1 := h^{-1}(\,[0,\tfrac12)\,)$ and $O_2 := h^{-1}(\,(\tfrac12,1]\,)$, open in $X$ by [L7]. [step 2.2, L6, L7]

4.1 Under step 1.1: for $n \in \mathbb{N}$, call $\Phi : D_n \to \mathcal{T}$ **admissible at level $n$** when (i) $\overline{\Phi(r)} \subseteq \Phi(s)$ for every $r < s$ in $D_n$; (ii) $A \subseteq \Phi(0)$; (iii) $\Phi(1) = X \setminus B$. Put $P := \{\, (n,\Phi) : n \in \mathbb{N},\ \Phi \text{ admissible at level } n \,\}$, and for $(n,\Phi), (n',\Phi') \in P$ say $(n,\Phi) \mathbin{R} (n',\Phi')$ when $n' = n+1$ and $\Phi'|_{D_n} = \Phi$. By step 3.1, $(0,\Phi_0) \in P$. [step 3.1, construct]

4.2 Under step 1.2: $C \subseteq O_1$, since $h \equiv 0 \in [0,\tfrac12)$ on $C$; $E \subseteq O_2$, since $h \equiv 1 \in (\tfrac12,1]$ on $E$; and $O_1 \cap O_2 = h^{-1}\big(\,[0,\tfrac12) \cap (\tfrac12,1]\,\big) = h^{-1}(\varnothing) = \varnothing$. [step 2.2, step 3.2, L6]

5.1 Under step 1.1: let $(n,\Phi) \in P$. For each $j$ with $0 \le j < 2^n$, with $r_j, s_j, t_j$ as in [L3]: since $r_j < s_j$ in $D_n$, admissibility (i) gives $\overline{\Phi(r_j)} \subseteq \Phi(s_j)$, so by [L1] the set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$ is nonempty. [step 4.1, L1, L3]

5.2 Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [[def-normal-and-t4-spaces]]; this is clause 2, and no step of it used [A1]. [step 4.2]

6.1 Under step 1.1, continuing under step 5.1: by [L2] applied to the function assigning, to each $j < 2^n$, the nonempty set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$, fix a simultaneous choice, giving open $W_j$ with $\overline{\Phi(r_j)} \subseteq W_j \subseteq \overline{W_j} \subseteq \Phi(s_j)$ for every $0 \le j < 2^n$. [step 5.1, L2, choose]

7.1 Under step 1.1: define $\Phi' : D_{n+1} \to \mathcal{T}$ by $\Phi'|_{D_n} := \Phi$ and $\Phi'(t_j) := W_j$ for $0 \le j < 2^n$; this is well defined since $D_{n+1} = D_n \cup \{t_j : 0 \le j < 2^n\}$ with the $t_j$ pairwise distinct and disjoint from $D_n$ by [L3]. Then $(n,\Phi) \mathbin{R} (n+1,\Phi')$. [step 6.1, L3, construct]

8.1 Under step 1.1, with $\Phi, \Phi'$ as in step 7.1: for the $D_{n+1}$-consecutive pair $(r_j, t_j)$: $\overline{\Phi'(r_j)} = \overline{\Phi(r_j)} \subseteq W_j = \Phi'(t_j)$ by step 6.1; for the pair $(t_j, s_j)$: $\overline{\Phi'(t_j)} = \overline{W_j} \subseteq \Phi(s_j) = \Phi'(s_j)$ by step 6.1. [step 7.1, step 6.1]

9.1 Under step 1.1: for $x < y$ in $D_{n+1}$, the finitely many elements of $D_{n+1} \cap [x,y]$, listed increasingly as $x = u_0 < u_1 < \cdots < u_k = y$, are $D_{n+1}$-consecutive at each step $u_i < u_{i+1}$, and each such pair is one of the pairs of step 8.1 (every $D_{n+1}$-consecutive pair has at least one member among the new points $t_j$, since a new point was inserted into every $D_n$-consecutive gap); so $\overline{\Phi'(u_i)} \subseteq \Phi'(u_{i+1})$ at each step, and [L4] gives $\overline{\Phi'(x)} = \overline{\Phi'(u_0)} \subseteq \Phi'(u_k) = \Phi'(y)$. [step 8.1, L3, L4]

10.1 Under step 1.1: $A \subseteq \Phi'(0) = \Phi(0)$, since $0 \in D_n$ is unaffected by the extension; $\Phi'(1) = \Phi(1) = X \setminus B$, since $1 \in D_n$ is likewise unaffected; with step 9.1 this is admissibility of $\Phi'$ at level $n+1$, so $(n+1,\Phi') \in P$. [step 7.1, step 9.1, L3]

11.1 Under step 1.1: by steps 5.1, 6.1, 7.1 and 10.1, every $(n,\Phi) \in P$ has some $(n+1,\Phi') \in P$ with $(n,\Phi) \mathbin{R} (n+1,\Phi')$; so $R$ is entire on $P$. [step 7.1, step 10.1]

12.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 11.1; by [A1] applied with $a := (0,\Phi_0)$, there is a sequence $\big((m_k,\Psi_k)\big)_{k \in \mathbb{N}}$ with $(m_0,\Psi_0) = (0,\Phi_0)$ and $(m_k,\Psi_k) \mathbin{R} (m_{k+1},\Psi_{k+1})$ for every $k$. [step 4.1, step 11.1, A1, construct]

13.1 Under step 1.1: since $(n,\Phi) \mathbin{R} (n',\Phi')$ forces $n' = n+1$, and $m_0 = 0$, induction on $k$ gives $m_k = k$ for every $k \in \mathbb{N}$; so each $\Psi_k : D_k \to \mathcal{T}$ is admissible at level $k$, and $\Psi_{k+1}|_{D_k} = \Psi_k$ for every $k$. [step 12.1]

14.1 Under step 1.1: for $r \in D$, fix $n$ with $r \in D_n$ [L3] and define $V_r := \Psi_n(r)$; by step 13.1, for $n \le n'$ with $r \in D_n$, $\Psi_{n'}(r) = \Psi_n(r)$ (chaining $\Psi_{n'}|_{D_n} = \Psi_n$ through the intermediate levels), so $V_r$ does not depend on the level $n$ chosen. [step 13.1, L3, construct]

15.1 Under step 1.1: for $r < s$ in $D$, fix $n$ with $r, s \in D_n$ [L3]; then $\overline{V_r} = \overline{\Psi_n(r)} \subseteq \Psi_n(s) = V_s$ by admissibility (i) of $\Psi_n$. Also $A \subseteq V_0$ and $V_1 = X \setminus B$, by admissibility (ii) and (iii) of $\Psi_n$ for any $n$. [step 14.1, step 13.1, L3]

16.1 Under step 1.1: define $U_r := V_r$ for $r \in D$ with $r < 1$, and $U_1 := X$. For $r < s$ in $D$: if $s < 1$, $\overline{U_r} = \overline{V_r} \subseteq V_s = U_s$ by step 15.1; if $s = 1$, $\overline{U_r} = \overline{V_r} \subseteq V_1 = X \setminus B \subseteq X = U_1$ by step 15.1. So $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$. [step 15.1, construct]

17.1 Under step 1.1: by [L5] applied to $(U_r)_{r \in D}$ of step 16.1, $f(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$. [step 16.1, L5]

17.2 Under step 1.1: for $b \in B$ and $r \in D$ with $r < 1$: fix $n$ with $r \in D_n$ [L3]; since $1 \in D_n$ also, admissibility (i) of $\Psi_n$ applied to $r < 1$ gives $\overline{\Psi_n(r)} \subseteq \Psi_n(1) = X \setminus B$, that is $\overline{V_r} \subseteq X \setminus B$; since $V_r \subseteq \overline{V_r}$ by [L8] and $U_r = V_r$ by step 16.1, $U_r \cap B = \varnothing$, so $b \notin U_r$. [step 14.1, step 13.1, step 16.1, L3, L8]

18.1 Under step 1.1: for $a \in A$: $a \in V_0$ by step 15.1, and $U_0 = V_0$ by step 16.1 (as $0 < 1$), so $a \in U_0$ and $0 \in \{r \in D : a \in U_r\}$; hence $f(a) \le 0$, and $f(a) \ge 0$ since $f$ maps into $[0,1]$ by step 17.1, so $f(a) = 0$. [step 17.1, step 16.1, step 15.1]

18.2 Under step 1.1: for $b \in B$: by step 17.2, $b \notin U_r$ for every $r \in D$ with $r < 1$, and $b \in U_1 = X$ by step 16.1; so $\{r \in D : b \in U_r\} \cup \{1\} = \{1\}$, giving $f(b) = \inf\{1\} = 1$. [step 17.2, step 16.1]

19.1 Steps 17.1, 18.1 and 18.2 show that, under the hypothesis of step 1.1, $f$ is a continuous map $X \to [0,1]$ with $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$, which is clause 1. [step 17.1, step 18.1, step 18.2]

20.1 Steps 19.1 and 5.2 establish clauses 1 and 2 respectively. [step 19.1, step 5.2, discharge-construct] ∎

## Remarks

- **The lemma is stated for a normal space, not a $T_4$ space.** $T_1$ is used nowhere above; it is needed only to turn a *point* into a closed set, which is the extra step the next corollary spends. The published [[rem-urysohn-lemma-not-a-zf-theorem]] states the classical $T_4$ form; the form proved here is the more general one, and the two are not in tension — the $T_4$ form follows by adding the $T_1$ hypothesis, which is not used in this proof at all.

- **Only clause 1 costs a choice principle**, and it is spent at exactly one place: the single application of dependent choice in step 12.1, which strings together the countably many admissible levels built one finite step at a time in steps 5.1–10.1. Every other existential instantiation above (steps 2.1, 2.2 and 6.1) draws from a single nonempty set or, in step 6.1, from a finite family of them via [[lem-finite-choice]], and neither costs anything beyond ZF.

- **Why the construction tracks $X \setminus B$ rather than $X$ at $r=1$.** Recording $\Phi_n(1) := X \setminus B$ throughout the recursion, rather than $X$, is what makes admissibility clause (i) alone carry the whole $B$-avoidance property: since $1 \in D_n$ for every $n$, clause (i) applied to any $r<1$ already gives $\overline{\Phi_n(r)} \subseteq \Phi_n(1) = X \setminus B$, with no separate bookkeeping. Only at the very end, in step 16.1, is the top value widened from $X \setminus B$ to $X$, which is exactly what [[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] requires.
````

### `thm-well-ordering-principle`

````markdown
---
id: thm-well-ordering-principle
kind: theorem
title: "The well-ordering principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]
aliases: [well-ordering]
landmark: true
short: "every nonempty $S\\subseteq\\mathbb N$ has a least element"
proof_strategy: contradiction
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
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Facts & Assumptions

**Given:** A nonempty subset $S \subseteq \mathbb{N}$. Define $T = \{\, n \in \mathbb{N} : \text{every } m \text{ with } m \le n \text{ satisfies } m \notin S \,\}$ (informally, no element of $S$ is $\le n$).

[L1] Induction principle: a subset of $\mathbb{N}$ that contains $0$ and is closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).

[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]).

[L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]).

[L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law, [[lem-nat-add-successor-left]]).

[L6] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $S$ is nonempty but has no least element. [assume-contra]

1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5]

2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ gives $m < 0$, and [L3] admits at most one of these; so every $m \le 0$ lies outside $S$. [step 1.1, L3, L6, given]

2.2 Next, $T$ is closed under $\sigma$: assume $n \in T$; if $\sigma(n) \in S$ then no $s \in S$ satisfies $s < \sigma(n)$ (else $s \le n$ by step 1.2, so $s \notin S$ because $n \in T$, a contradiction), hence $\sigma(n) \le s$ for all $s \in S$ by [L3], making $\sigma(n)$ a least element, contrary to the assumption; therefore $\sigma(n) \notin S$, and any $m$ with $m \le \sigma(n)$ satisfies $m = \sigma(n)$ or $m \ne \sigma(n)$; in the second case $m \le \sigma(n)$ together with $m \ne \sigma(n)$ gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$ because $n \in T$, while in the first case $m = \sigma(n) \notin S$; so every $m \le \sigma(n)$ lies outside $S$, giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]

3.1 By the induction principle [L1], from $0 \in T$ and closure under $\sigma$, $T = \mathbb{N}$; then for every $n$, taking $m = n \le n$ shows $n \notin S$, so $S = \varnothing$, contradicting nonemptiness; therefore $S$ has a least element. [step 2.1, step 2.2, L1, discharge-contradiction] ∎
````

