---
id: cor-cofinality-of-a-cardinal-power
kind: corollary
title: "$\\kappa < \\kappa^{\\operatorname{cf}(\\kappa)}$ for every infinite cardinal $\\kappa$, and $\\operatorname{cf}(2^{\\kappa}) > \\kappa$; in particular $\\operatorname{cf}(2^{\\aleph_0}) > \\aleph_0$"
status: draft
origin: session
deps: [thm-konig, def-infinite-cardinal-sum-and-product, def-cofinality, lem-cofinality-is-well-defined, thm-cofinality-basics, def-cofinal-subset-of-an-ordinal, def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, thm-hessenberg, thm-cardinal-power-set-and-cantor, thm-cardinal-arithmetic-agrees-with-finite-counting, lem-cardinality-of-a-well-orderable-set, def-aleph-and-beth-hierarchies, def-cardinal, def-axiom-of-choice, def-choice-function, thm-well-ordering-theorem, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, def-equinumerous, def-injection-surjection-bijection, def-well-order]
justified_by: []
aliases: [cor-konig-cofinality]
landmark: true
short: "$\\operatorname{cf}(2^{\\aleph_0}) > \\aleph_0$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "König's theorem (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/K%C3%B6nig%27s_theorem_(set_theory)"
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
    - title: "Cardinality of the continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality_of_the_continuum"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $\kappa$ be an
infinite cardinal ([[def-cardinal]]). Then:

**(a)** $\kappa < \kappa^{\operatorname{cf}(\kappa)}$
([[def-cardinal-arithmetic]], [[def-cofinality]]);

**(b)** $\operatorname{cf}(2^{\kappa}) > \kappa$;

**(c)** in particular $\operatorname{cf}(2^{\aleph_0}) > \aleph_0$
([[def-aleph-and-beth-hierarchies]]).

**Clause (c) is a genuine restriction on the continuum, and it is proved in
ZFC rather than quoted.** It rules out every value of $2^{\aleph_0}$ whose
cofinality is $\aleph_0$, and it selects none.

## Facts & Assumptions

**Given:** The Axiom of Choice and an infinite cardinal $\kappa$.

[L1] If $\kappa_i < \lambda_i$ for every $i \in I$ then $\sum_{i \in I}\kappa_i < \prod_{i \in I}\lambda_i$ ([[thm-konig]]).

[L2] For a constant family, $\prod_{i \in I}\kappa = \kappa^{\lvert I\rvert}$; and $\sum_{i \in I}\kappa_i = \lvert \bigcup_{i \in I}(\{i\} \times \kappa_i)\rvert$ ([[def-infinite-cardinal-sum-and-product]]).

[L3] $\operatorname{cf}(\alpha)$ is the least length of a cofinal map into $\alpha$, a strictly increasing witness of that length exists, and for a limit ordinal $\lambda$ the value $\operatorname{cf}(\lambda)$ is an infinite cardinal with $\operatorname{cf}(\lambda) \le \lambda$ ([[def-cofinality]], [[lem-cofinality-is-well-defined]], [[thm-cofinality-basics]], [[def-cofinal-subset-of-an-ordinal]]).

[L4] For cardinals $\kappa \le \lambda$ iff $\kappa \preceq \lambda$; $A \preceq B$ with both well-orderable gives $\lvert A\rvert \le \lvert B\rvert$; $\mu^{\nu} \le \mu^{\rho}$ for $\nu \le \rho$ and $\mu \ne 0$; and $(\mu^{\nu})^{\rho} = \mu^{\nu \otimes \rho}$ ([[lem-cardinal-arithmetic-basic-laws]]).

[L5] $\kappa \otimes \kappa = \kappa$ for every infinite cardinal $\kappa$ ([[thm-hessenberg]]).

[L6] $\kappa < 2^{\kappa}$, and $2^{\kappa}$ is a cardinal ([[thm-cardinal-power-set-and-cantor]]).

[L7] Every infinite cardinal is a limit ordinal, and a cardinal is infinite exactly when $\omega \le \kappa$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-limit-ordinal]]).

[L8] $\lvert X\rvert$ is the least ordinal equinumerous with $X$, $X \approx \lvert X\rvert$, $\lvert \alpha\rvert \le \alpha$, and $\lvert \alpha\rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]], [[def-equinumerous]]).

[L9] Assuming the Axiom of Choice every set is well-orderable, and a product of nonempty sets is nonempty ([[thm-well-ordering-theorem]], [[def-axiom-of-choice]], [[def-choice-function]]).

[L10] Ordinals: trichotomy; $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$; $\bigcup$ of a set of ordinals is its least upper bound; every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-well-order]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Put $\beta = \operatorname{cf}(\kappa)$; since $\kappa$ is a limit ordinal by [L7], [L3] makes $\beta$ an infinite cardinal with $\beta \le \kappa$ and supplies a strictly increasing cofinal $g : \beta \to \kappa$; set $\kappa_\xi = \lvert g(\xi)\rvert$ for $\xi \in \beta$, so each $\kappa_\xi$ is a cardinal with $\kappa_\xi \le g(\xi) < \kappa$ by [L8], and $\kappa = \bigcup\{g(\xi) : \xi \in \beta\}$, because $\zeta \in \kappa$ gives $\zeta \cup \{\zeta\} \in \kappa$ and hence $\zeta \cup \{\zeta\} \le g(\xi)$ for some $\xi$, putting $\zeta \in g(\xi)$. [L3, L7, L8, L10]

2.1 $\kappa \le \sum_{\xi \in \beta} \kappa_\xi$: for each $\xi$ the set of bijections $g(\xi) \to \kappa_\xi$ is nonempty by [L8], so [L9] supplies such a $b_\xi$ for all $\xi$ at once, and $\zeta \mapsto (\xi_\zeta, b_{\xi_\zeta}(\zeta))$, with $\xi_\zeta$ the $\in$-least $\xi$ having $\zeta \in g(\xi)$, is an injection of $\kappa$ into $\bigcup_{\xi \in \beta}(\{\xi\} \times \kappa_\xi)$; [L2] and [L4] then give the inequality. [step 1.1, L2, L4, L8, L9, L10]

3.1 Claim (a): applying [L1] to the families $(\kappa_\xi)_{\xi \in \beta}$ and the constant family $\lambda_\xi = \kappa$, which satisfy $\kappa_\xi < \kappa$ by step 1.1, gives $\sum_{\xi \in \beta}\kappa_\xi < \prod_{\xi \in \beta}\kappa = \kappa^{\lvert \beta\rvert}$ by [L2], and $\lvert \beta\rvert = \beta = \operatorname{cf}(\kappa)$ by [L8], since $\beta$ is a cardinal; with step 2.1 this is $\kappa < \kappa^{\operatorname{cf}(\kappa)}$. [step 1.1, step 2.1, L1, L2, L8]

4.1 Claim (b): put $\mu = 2^{\kappa}$, an infinite cardinal by [L6] and [L7] since $\omega \le \kappa < \mu$; were $\operatorname{cf}(\mu) \le \kappa$, then step 3.1 applied to $\mu$ together with [L4] and [L5] would give $\mu < \mu^{\operatorname{cf}(\mu)} \le \mu^{\kappa} = (2^{\kappa})^{\kappa} = 2^{\kappa \otimes \kappa} = 2^{\kappa} = \mu$, which [L10] forbids; so trichotomy leaves $\kappa < \operatorname{cf}(2^{\kappa})$. [step 3.1, L4, L5, L6, L7, L10]

5.1 Claim (c) is step 4.1 at $\kappa = \aleph_0 = \omega$, which is an infinite cardinal by [L7]. [step 3.1, step 4.1, L7] ∎

## Remarks

**What clause (b) rules out, concretely.** If $2^{\aleph_0}$ were $\aleph_\omega$ then its cofinality would be $\aleph_0$ by [[thm-regularity-of-the-alephs]], contradicting clause (c); that refutation is carried out in [[fs-the-continuum-has-cardinality-aleph-omega]]. The same test applies to any proposed value whose cofinality can be computed. Clause (c) is a restriction and not a determination: it excludes values and selects none.

**Why the cofinality, and not the size, is the obstruction.** Clause (a) says a cardinal is strictly smaller than itself raised to its own cofinality. Read contrapositively, a cardinal $\mu$ that **is** a power $2^{\kappa}$ cannot have its cofinality drop to or below $\kappa$, because raising $\mu$ to that exponent would not increase it. The whole argument is the interaction of two facts, König's inequality and the second exponent law, and the second is where [[thm-hessenberg]] enters.

**Where the Axiom of Choice is spent here.** Three times: in the definitions of $\sum$, $\prod$ and $2^{\kappa}$; in step 2.1, to select a bijection $g(\xi) \to \lvert g(\xi)\rvert$ for every $\xi$ at once; and inside [[thm-konig]] itself. None of the three is removable by a canonical construction, which is why the whole corollary carries the hypothesis in its statement.
