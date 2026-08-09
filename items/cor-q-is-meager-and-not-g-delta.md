---
id: cor-q-is-meager-and-not-g-delta
kind: corollary
title: "$\\mathbb{Q}$ is $F_\\sigma$, meager and not $G_\\delta$, while the irrationals are $G_\\delta$, residual and not $F_\\sigma$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-baire-category-r, def-f-sigma-g-delta, def-nowhere-dense-meager, thm-rationals-countable, lem-q-and-irrationals-dense-r, def-equinumerous, def-injection-surjection-bijection, def-open-and-closed-in-r, def-neighbourhood-r, thm-n-cross-n-countable, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-limit-point-r, lem-rat-embeds-dense]
justified_by: []
forward_refs: [cex-irrationals-are-not-f-sigma, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "$\\mathbb{Q}$ meager, not $G_\\delta$"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-09
    scope: published-audit-targeted
    context_sha256: d66495c3278fff64c9ad999f462ae04a1e1646c19b701056c29ab6099277b243
    item_sha256: f278811ea8f0cad9b18ca8692c27b9f5982048429cb35d3f357ada4c5e527cd3
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Exercise 22)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Problems on Baire Categories and Linear Maps"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
pipeline_run: null
---

## Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is an $F_\sigma$ set ([[def-f-sigma-g-delta]]) and is
   meager ([[def-nowhere-dense-meager]]);
2. $X$ is a $G_\delta$ set and is residual;
3. $\mathbb{Q}_{\mathbb{R}}$ is **not** a $G_\delta$ set, and $X$ is **not** an
   $F_\sigma$ set.

Claims 1 and 2 are bookkeeping. Claim 3 is the substance and is exactly where
[[thm-baire-category-r]] is spent: no argument from the algebra of open and
closed sets alone can reach it, since $\mathbb{Q}_{\mathbb{R}}$ and $X$ are
interchanged by complementation while $F_\sigma$ and $G_\delta$ are, so any such
argument would prove the same thing about both sets and about neither.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$, the set $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ of rationals and its complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[L1] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]), $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]), and a composition of bijections is a bijection ([[def-injection-surjection-bijection]]).

[L2] $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]); a set is dense when its closure is $\mathbb{R}$, equivalently when every $N_\varepsilon(x)$ meets it ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]); the closure operator is monotone, so a superset of a dense set is dense ([[def-interior-closure-boundary-r]]).

[L3] $U$ is open when every point of it has a neighbourhood inside it, and $F$ is closed when $\mathbb{R} \setminus F$ is open; $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ and $x \in N_\varepsilon(x)$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] A closed set is nowhere dense exactly when its interior is empty; a meager set is a union of a sequence of nowhere dense sets; residual means the complement is meager ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L5] $A$ is $F_\sigma$ when it is the union of a sequence of closed sets and $G_\delta$ when it is the intersection of a sequence of open sets; $A$ is $F_\sigma$ if and only if $\mathbb{R} \setminus A$ is $G_\delta$ ([[def-f-sigma-g-delta]]).

[L6] A countable intersection of dense open subsets of $\mathbb{R}$ is dense ([[thm-baire-category-r]]).

[L7] There is a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ ([[thm-n-cross-n-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 For $c \in \mathbb{R}$ the singleton $\{c\}$ is closed and nowhere dense: its complement is open, since $x \ne c$ gives $N_{|x-c|}(x) \subseteq \mathbb{R} \setminus \{c\}$ by [L3]; and its interior is empty, since for every real $\varepsilon > 0$ the point $c + \varepsilon \cdot 2^{-1}$ lies in $N_\varepsilon(c)$ and differs from $c$, so no neighbourhood is contained in $\{c\}$, whence $\{c\}$ is a closed set with empty interior and [L4] applies. [L3, L4]

1.2 By [L1] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$ with $\iota(q) = \hat q$, a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L1, choose]

2.1 $\mathbb{Q}_{\mathbb{R}} = \bigcup_{n \in \mathbb{N}} \{e(n)\}$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$; the sets $\{e(n)\}$ are closed and nowhere dense by step 1.1, so $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ by [L5] and meager by [L4]. This is claim 1. [step 1.1, step 1.2, L4, L5]

3.1 Put $W_n := \mathbb{R} \setminus \{e(n)\}$, an open set by step 1.1 and [L3]. A real $x$ lies in $\bigcap_n W_n$ exactly when $x \ne e(n)$ for every $n$, that is, exactly when $x \notin \mathbb{Q}_{\mathbb{R}}$, so $X = \bigcap_n W_n$ and $X$ is $G_\delta$ by [L5]; and $\mathbb{R} \setminus X = \mathbb{Q}_{\mathbb{R}}$ is meager by step 2.1, so $X$ is residual by [L4]. This is claim 2. Each $W_n$ is also dense, since every $N_\varepsilon(x)$ contains two distinct points and so meets $\mathbb{R} \setminus \{e(n)\}$, by [L2] and [L3]. [step 1.1, step 1.2, step 2.1, L2, L3, L4, L5]

4.1 Suppose, for contradiction, that $\mathbb{Q}_{\mathbb{R}}$ is $G_\delta$, and by [L5] fix a sequence $(V_n)$ of open sets with $\mathbb{Q}_{\mathbb{R}} = \bigcap_n V_n$. Each $V_n$ contains $\mathbb{Q}_{\mathbb{R}}$, which is dense by [L2], so each $V_n$ is dense by [L2]; and each $W_n$ of step 3.1 is open and dense. [assume-contra, step 3.1, L2, L5, choose]

5.1 By [L7] fix a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ and define a sequence $(D_j)$ by $D_{J(m,n)} := V_n$ when $m = 0$ and $D_{J(m,n)} := W_n$ when $m \ne 0$; this is total because $J$ is a bijection, and every $D_j$ is open and dense by step 4.1. Moreover $\bigcap_j D_j = \big(\bigcap_n V_n\big) \cap \big(\bigcap_n W_n\big) = \mathbb{Q}_{\mathbb{R}} \cap X = \varnothing$, since every $V_n$ and every $W_n$ occurs among the $D_j$ and every $D_j$ is one of them. [step 3.1, step 4.1, L7]

6.1 By [L6] the set $\bigcap_j D_j$ is dense, hence nonempty by [L2] and [L3], contradicting step 5.1. The assumption of step 4.1 is therefore untenable: $\mathbb{Q}_{\mathbb{R}}$ is not $G_\delta$; and $X$ is not $F_\sigma$, since $\mathbb{R} \setminus X = \mathbb{Q}_{\mathbb{R}}$ would then be $G_\delta$ by [L5]. This is claim 3. [step 4.1, step 5.1, L2, L3, L5, L6, discharge-contradiction] ∎

## Remarks

- **Where the two halves of the argument part company.** Claim 1 is a listing argument: step 1.2 lists $\mathbb{Q}_{\mathbb{R}}$, and step 1.1 shows that each real singleton is nowhere dense; claim 3 uses the completeness of $\mathbb{R}$ through [[thm-nested-interval-property]], inside [[thm-baire-category-r]]. Indeed $\mathbb{Q}$ is a $G_\delta$ subset of itself, being the whole space, so no argument that ignores the ambient completeness can possibly give claim 3.

- **The irrationals are also uncountable** ([[cor-irrationals-uncountable]]), by a different and much cheaper argument that needs only the countability of $\mathbb{Q}$ and the uncountability of $\mathbb{R}$. Uncountability and being residual are independent properties: $\mathbb{Q}$ is meager and countable, the Cantor set is meager and uncountable ([[thm-cantor-set-properties]]), and $X$ is residual and uncountable.

- **The named witness for claim 3** is [[cex-irrationals-are-not-f-sigma]], and the false statement it refutes is [[fs-q-is-g-delta]]; the refutation is carried out here.

- **Meagre and measure zero are not the same smallness.** $\mathbb{Q}_{\mathbb{R}}$ is both, but the two notions diverge as soon as one leaves the countable case: [[cex-meager-set-of-full-measure]] writes $\mathbb{R}$ as a meager set together with a set of measure zero, and the set of measure zero there is residual. So being residual, which is what claim 2 gives for $X$, carries no information at all about size in measure.
