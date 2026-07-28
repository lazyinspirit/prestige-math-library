---
id: thm-regularity-of-the-alephs
kind: theorem
title: "$\\aleph_0$ is regular in ZF; assuming the Axiom of Choice every successor aleph $\\aleph_{\\alpha+1}$ is regular; $\\operatorname{cf}(\\aleph_\\omega) = \\aleph_0$, so $\\aleph_\\omega$ is singular, and under choice it is the least singular infinite cardinal"
status: draft
origin: session
deps: [thm-cofinality-basics, def-cofinality, lem-cofinality-is-well-defined, def-cofinal-subset-of-an-ordinal, def-aleph-and-beth-hierarchies, cor-the-aleph-and-beth-hierarchies-are-well-defined, thm-every-infinite-cardinal-is-an-aleph, lem-successor-cardinal-exists, cor-cardinal-absorption, thm-hessenberg, def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, thm-cardinal-arithmetic-agrees-with-finite-counting, lem-cardinality-of-a-well-orderable-set, def-cardinal, def-axiom-of-choice, def-choice-function, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, lem-omega-least-limit-ordinal, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
short: "successor alephs regular; $\\aleph_\\omega$ singular"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Regular cardinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_cardinal"
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
pipeline_run: null
---

## Statement

Let $\operatorname{cf}$, regular and singular be as in [[def-cofinality]], and
let $\aleph_\alpha$ be as in [[def-aleph-and-beth-hierarchies]]. Then:

**(a) In ZF.** $\operatorname{cf}(\aleph_0) = \aleph_0$, so $\aleph_0$ is
regular.

**(b) Assuming the Axiom of Choice** ([[def-axiom-of-choice]]).
$\aleph_{\alpha+1}$ is regular for every ordinal $\alpha$.

**(c) In ZF.** $\operatorname{cf}(\aleph_\omega) = \aleph_0$, and
$\aleph_0 < \aleph_\omega$, so $\aleph_\omega$ is **singular**.

**(d) Assuming the Axiom of Choice.** Every infinite cardinal below
$\aleph_\omega$ is regular, so $\aleph_\omega$ is the least singular infinite
cardinal.

**Clause (b) is where the Axiom of Choice becomes indispensable, and the
hypothesis is not decoration.** The proof spends it once, to select an injection
$g(\xi) \to \aleph_\alpha$ for each $\xi$ below the cofinality, and there is no
canonical such family to fall back on: the sets $g(\xi)$ are ordinals, but the
injections are not determined by them. Clauses (a), (c) and the classification
half of (d) are choice free.

## Facts & Assumptions

**Given:** ZF, with the Axiom of Choice assumed only in clauses (b) and (d). Throughout, a map is called cofinal when its range is a cofinal subset of the target ([[def-cofinal-subset-of-an-ordinal]]).

[L1] $\operatorname{cf}(\alpha) \le \alpha$; for a limit ordinal $\lambda$, $\operatorname{cf}(\lambda)$ is an infinite cardinal; every cofinal $C \subseteq \lambda$ has $\operatorname{cf}(\lambda) \le \lvert C\rvert$ ([[thm-cofinality-basics]], [[def-cofinality]]).

[L2] $\operatorname{cf}(\alpha)$ is the least length of a cofinal map into $\alpha$, and a strictly increasing cofinal map of that length exists ([[def-cofinality]], [[lem-cofinality-is-well-defined]]).

[L3] $\aleph_0 = \omega$; $\aleph_{\alpha+1} = \aleph_\alpha^{+}$ is the least cardinal strictly above $\aleph_\alpha$; $\aleph_\lambda = \bigcup\{\aleph_\beta : \beta \in \lambda\}$ at limits; every $\aleph_\alpha$ is an infinite cardinal and the operation is strictly increasing ([[def-aleph-and-beth-hierarchies]], [[cor-the-aleph-and-beth-hierarchies-are-well-defined]], [[lem-successor-cardinal-exists]]).

[L4] Every infinite cardinal is a limit ordinal, and a cardinal is infinite exactly when $\omega \le \kappa$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-limit-ordinal]], [[def-cardinal]]).

[L5] For an infinite cardinal $\mu$ and a cardinal $\nu$ with $0 \ne \nu \le \mu$, $\mu \otimes \nu = \mu$ ([[cor-cardinal-absorption]], [[thm-hessenberg]], [[def-cardinal-arithmetic]]).

[L6] For cardinals $\kappa \le \lambda$ iff $\kappa \preceq \lambda$; $A \preceq B$ with both well-orderable gives $\lvert A\rvert \le \lvert B\rvert$; $\otimes$ is monotone ([[lem-cardinal-arithmetic-basic-laws]]).

[L7] $\lvert X\rvert$ is the least ordinal equinumerous with $X$, satisfies $X \approx \lvert X\rvert$ and $\lvert \alpha\rvert \le \alpha$, and equals $\alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]], [[def-equinumerous]]).

[L8] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]], [[def-choice-function]]).

[L9] Ordinals: trichotomy, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, $\bigcup$ of a set of ordinals is its least upper bound, every nonempty set of ordinals has an $\in$-least element, $\omega$ is the least limit ordinal ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[lem-omega-least-limit-ordinal]], [[def-injection-surjection-bijection]]).

[L10] Every infinite cardinal is $\aleph_\alpha$ for exactly one ordinal $\alpha$ ([[thm-every-infinite-cardinal-is-an-aleph]]).

## Proof

**Proof technique:** direct.

1.1 Claim (a): $\omega$ is a limit ordinal by [L9], so $\operatorname{cf}(\omega)$ is an infinite cardinal by [L1], hence $\omega \le \operatorname{cf}(\omega)$ by [L4]; and $\operatorname{cf}(\omega) \le \omega$ by [L1], so $\operatorname{cf}(\aleph_0) = \aleph_0$. [L1, L3, L4, L9]

1.2 The set $C = \{\aleph_n : n \in \omega\}$ exists by Replacement, is contained in $\aleph_\omega$ and is cofinal in it, since $\aleph_\omega = \bigcup C$ by [L3] means every $\zeta \in \aleph_\omega$ lies in some $\aleph_n$ and hence satisfies $\zeta \le \aleph_n$; moreover $n \mapsto \aleph_n$ is injective by the strict increase in [L3], so $C \approx \omega$ and $\lvert C\rvert = \aleph_0$ by [L7]. [L3, L7, L9]

1.3 Setting up claim (b): let $\lambda = \aleph_\alpha$, $\kappa = \aleph_{\alpha+1}$, and suppose $\beta = \operatorname{cf}(\kappa) < \kappa$, with $g : \beta \to \kappa$ strictly increasing and cofinal by [L2]; then $\kappa$ is a limit ordinal by [L4], so $\beta$ is an infinite cardinal by [L1], and $\beta \le \lambda$ because $\beta$ is a cardinal below the least cardinal strictly above $\lambda$ ([L3]); moreover $\kappa = \bigcup\{g(\xi) : \xi \in \beta\}$, since for $\zeta \in \kappa$ the ordinal $\zeta \cup \{\zeta\}$ also lies in $\kappa$ and is $\le g(\xi)$ for some $\xi$, putting $\zeta \in g(\xi)$. [L1, L2, L3, L4, L9]

2.1 Claim (c): step 1.2 and [L1] give $\operatorname{cf}(\aleph_\omega) \le \aleph_0$; and $\aleph_\omega$ is an infinite cardinal, hence a limit ordinal by [L4], so $\operatorname{cf}(\aleph_\omega)$ is an infinite cardinal and $\aleph_0 \le \operatorname{cf}(\aleph_\omega)$ by [L1] and [L4]; therefore $\operatorname{cf}(\aleph_\omega) = \aleph_0 < \aleph_\omega$ by the strict increase in [L3], and $\aleph_\omega$ is singular. [step 1.2, L1, L3, L4]

2.2 Claim (b): each $g(\xi)$ of step 1.3 lies in $\kappa$, so $\lvert g(\xi)\rvert$ is a cardinal below $\kappa$ and hence $\lvert g(\xi)\rvert \le \lambda$ by [L3] and [L7], and the set $I_\xi$ of injections $g(\xi) \to \lambda$ is nonempty; a choice function from [L8] on $\{I_\xi : \xi \in \beta\}$ supplies injections $e_\xi : g(\xi) \to \lambda$ for all $\xi$ at once, and $\zeta \mapsto (\xi_\zeta, e_{\xi_\zeta}(\zeta))$, with $\xi_\zeta$ the $\in$-least $\xi$ having $\zeta \in g(\xi)$, is then an injection $\kappa \to \beta \times \lambda$; so $\kappa \le \beta \otimes \lambda = \lambda$ by [L6] and [L5], contradicting $\lambda < \kappa$, and therefore $\operatorname{cf}(\kappa) = \kappa$. [step 1.3, L5, L6, L7, L8, L9]

3.1 Claim (d) and the conclusion: an infinite cardinal $\kappa < \aleph_\omega$ is $\aleph_\alpha$ for exactly one $\alpha$ by [L10], and $\alpha \in \omega$, since $\omega \le \alpha$ would give $\aleph_\omega \le \aleph_\alpha$ by the strict increase in [L3]; so $\kappa$ is $\aleph_0$, regular by step 1.1, or $\aleph_{n+1}$ for some $n \in \omega$, regular by step 2.2; with step 2.1 this makes $\aleph_\omega$ the least singular infinite cardinal. [step 1.1, step 2.1, step 2.2, L3, L9, L10] ∎

## Remarks

**Why regularity of $\aleph_1$ is not a theorem of ZF.** The proof of clause (b) selects one injection for each $\xi$ below the cofinality, and that selection is the entire content of the choice hypothesis: a union of countably many countable sets is not provably countable in ZF, and the same phenomenon is what would otherwise force $\operatorname{cf}(\aleph_1) = \aleph_1$. The choice ledger at the end of this page records how far this can fail.

**Why $\aleph_\omega$ is singular for a completely different reason.** Nothing is chosen in clause (c): the map $n \mapsto \aleph_n$ is definable, and it is short and cofinal simply because the index $\omega$ is a limit ordinal reached from below in $\omega$ steps. Singularity of $\aleph_\omega$ is therefore a fact about the **index**, not about the size, and clause (c) holds in ZF.

**What "least singular" means and what it does not.** Clause (d) locates $\aleph_\omega$ among the alephs: everything below it is regular, under choice. It says nothing about which cardinals above $\aleph_\omega$ are singular, and it says nothing about $2^{\aleph_0}$, whose position in the aleph hierarchy is not determined by anything on this page. What **is** determined is a constraint on that position, and it is [[cor-cofinality-of-a-cardinal-power]].
