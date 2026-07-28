---
id: cor-the-aleph-and-beth-hierarchies-are-well-defined
kind: corollary
title: "The clauses at $0$, at a successor and at a limit determine exactly one operation $\\alpha \\mapsto \\aleph_\\alpha$, in ZF, and — assuming the Axiom of Choice — exactly one operation $\\alpha \\mapsto \\beth_\\alpha$; each value is an infinite cardinal, each is strictly increasing and continuous at limits, and $\\alpha \\le \\aleph_\\alpha$"
status: published
origin: session
deps: [lem-recursion-on-the-ordinals, lem-successor-cardinal-exists, def-cardinal-arithmetic, thm-cardinal-power-set-and-cantor, thm-cardinal-arithmetic-agrees-with-finite-counting, def-cardinal, def-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, lem-omega-least-limit-ordinal, def-axiom-of-choice, lem-cardinality-of-a-well-orderable-set, thm-schroder-bernstein, thm-transfinite-induction, def-equinumerous]
justified_by: []
aliases: []
landmark: false
short: "$\\aleph$ and $\\beth$ exist and are unique"
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
    - title: "Aleph number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Aleph_number"
    - title: "Beth number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Beth_number"
pipeline_run: null
---

## Statement

**(a) The alephs, in ZF.** There is **exactly one** class operation
$\alpha \mapsto \aleph_\alpha$, defined at every ordinal ([[def-ordinal]]) and
given by a formula, satisfying

$$\aleph_0 = \omega, \qquad \aleph_{\alpha + 1} = \aleph(\aleph_\alpha), \qquad \aleph_\lambda = \bigcup\{\, \aleph_\alpha : \alpha \in \lambda \,\} \ \ (\lambda \text{ a limit ordinal}),$$

where $\aleph(\cdot)$ is the Hartogs number ([[lem-successor-cardinal-exists]])
and $\alpha + 1 = \alpha \cup \{\alpha\}$.

**(b)** Every $\aleph_\alpha$ is an infinite cardinal ([[def-cardinal]]); the
operation is **strictly increasing**, $\alpha \in \beta \Rightarrow
\aleph_\alpha \in \aleph_\beta$; and it is **continuous at limits**, which is the
third clause read as a supremum.

**(c)** $\alpha \le \aleph_\alpha$ for every ordinal $\alpha$.

**(d) The beths, assuming the Axiom of Choice** ([[def-axiom-of-choice]]). There
is exactly one class operation $\alpha \mapsto \beth_\alpha$, defined at every
ordinal, with

$$\beth_0 = \omega, \qquad \beth_{\alpha + 1} = 2^{\beth_\alpha}, \qquad \beth_\lambda = \bigcup\{\, \beth_\alpha : \alpha \in \lambda \,\} \ \ (\lambda \text{ a limit ordinal}),$$

and it too takes infinite cardinal values, is strictly increasing, and is
continuous at limits.

Like [[lem-recursion-on-the-ordinals]] these are **theorem schemas**: an instance
for each of the defining formulas. The aleph half uses Replacement and no choice; the
beth half needs the Axiom of Choice, and needs it only because $2^{\kappa}$ does
([[thm-cardinal-power-set-and-cantor]]).

## Facts & Assumptions

**Given:** ZF, and the Axiom of Choice only where the beths are named.

[L1] A class rule $G$ assigning a set to every function whose domain is an ordinal determines exactly one class function $F$, defined at every ordinal, with $F(\beta) = G(F \restriction \beta)$ ([[lem-recursion-on-the-ordinals]]).

[L2] $\aleph(A)$ is a cardinal for every set $A$; for a cardinal $\kappa$ it is the least cardinal strictly above $\kappa$; and it is infinite when $\kappa$ is ([[lem-successor-cardinal-exists]]).

[L3] $\omega$ is a cardinal, and every infinite cardinal is a limit ordinal ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]).

[L4] For a set $A$ of ordinals, $\bigcup A$ is an ordinal and is the least upper bound of $A$; ordinals satisfy trichotomy; $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$ ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

[L5] Every ordinal is exactly one of $0$, a successor, or a limit ([[def-limit-ordinal]]).

[L6] If $A \preceq B$ and $B \preceq A$ then $A \approx B$ ([[thm-schroder-bernstein]], [[def-equinumerous]]).

[L7] $\lvert X \rvert$ is the least ordinal equinumerous with $X$, and $\lvert \alpha \rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]]).

[L8] Assuming the Axiom of Choice, $2^{\kappa} = \lvert \mathcal{P}(\kappa)\rvert$ is a cardinal and $\kappa < 2^{\kappa}$ ([[thm-cardinal-power-set-and-cantor]], [[def-cardinal-arithmetic]], [[def-axiom-of-choice]]).

[L9] Transfinite induction is available on any well-order, in particular on any set of ordinals ordered by $\in$ ([[thm-transfinite-induction]], [[lem-ordinal-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 Let $G$ send a function $h$ whose domain is an ordinal $\beta$ to $\omega$ when $\beta = 0$, to $\aleph(h(\gamma))$ when $\beta = \gamma \cup \{\gamma\}$, and to $\bigcup \operatorname{ran}(h)$ when $\beta$ is a limit; this is a formula by [L5], so [L1] yields exactly one class function $F$ defined at every ordinal with $F(\beta) = G(F \restriction \beta)$, and writing $\aleph_\beta := F(\beta)$ turns that single equation into the three displayed clauses, uniquely; replacing $\aleph(h(\gamma))$ by $2^{h(\gamma)}$ gives in the same way the operation $\beta \mapsto \beth_\beta$ under [L8]. [L1, L5, L8]

1.2 The union of a set $A$ of cardinals is a cardinal: $\delta = \bigcup A$ is an ordinal by [L4], and if $\beta \in \delta$ had $\beta \approx \delta$ then $\beta \in \nu$ for some $\nu \in A$, so $\beta \subseteq \nu$ and $\nu \subseteq \delta$ give $\beta \preceq \nu$ and $\nu \preceq \delta \approx \beta$, whence $\nu \approx \beta$ by [L6] with $\beta \in \nu$, contradicting that $\nu$ is a cardinal. [L4, L6, L7]

2.1 Every $\aleph_\beta$ is an infinite cardinal, by transfinite induction along [L9] inside any $\alpha \cup \{\alpha\}$: $\aleph_0 = \omega$ is one by [L3]; $\aleph_{\gamma+1} = \aleph(\aleph_\gamma)$ is one by [L2]; and at a limit $\lambda$ the set $\{\aleph_\beta : \beta \in \lambda\}$ exists by Replacement and consists of infinite cardinals, so its union is a cardinal by step 1.2 and contains $\aleph_0 = \omega$, hence is infinite. [step 1.1, step 1.2, L2, L3, L4, L9]

2.2 Assuming the Axiom of Choice the same induction gives that every $\beth_\beta$ is an infinite cardinal, the successor step now reading $\beth_{\gamma+1} = 2^{\beth_\gamma} > \beth_\gamma$ by [L8]. [step 1.1, step 1.2, L3, L4, L8, L9]

3.1 Strict increase for the alephs: $\aleph_\gamma \in \aleph_{\gamma+1}$ by [L2] and step 2.1; at a limit $\lambda$ with $\gamma \in \lambda$ we have $\gamma + 1 \in \lambda$ by [L4] and [L5], so $\aleph_\gamma \in \aleph_{\gamma+1} \subseteq \aleph_\lambda$; and the general case $\alpha \in \beta \Rightarrow \aleph_\alpha \in \aleph_\beta$ follows by transfinite induction on $\beta$ along [L9]. [step 2.1, L2, L4, L5, L9]

3.2 Strict increase for the beths is the same argument with [L8] in place of [L2]. [step 2.2, L4, L5, L8, L9]

4.1 Claim (c), by transfinite induction on $\alpha$ along [L9]: $0 \le \aleph_0$; if $\gamma \le \aleph_\gamma$ then $\aleph_{\gamma+1} > \aleph_\gamma \ge \gamma$ by step 3.1, so $\aleph_{\gamma+1} \ge \gamma + 1$ by [L4]; and at a limit $\lambda$, every $\gamma \in \lambda$ satisfies $\gamma \le \aleph_\gamma \in \aleph_{\gamma+1} \subseteq \aleph_\lambda$ by step 3.1 and [L4], so $\gamma \in \aleph_\lambda$ and hence $\lambda \subseteq \aleph_\lambda$. [step 3.1, L4, L9]

5.1 So both operations exist, are unique, take infinite cardinal values, are strictly increasing, and are continuous at limits by the third clause of step 1.1 read through [L4]; and $\alpha \le \aleph_\alpha$ throughout. [step 2.1, step 2.2, step 3.1, step 3.2, step 4.1] ∎

## Remarks

**Why the published recursion theorem is not enough on its own.** [[thm-transfinite-recursion]] is stated for a well-order, that is for a **set**, and $\alpha \mapsto \aleph_\alpha$ has to be defined at every ordinal. The bridge is [[lem-recursion-on-the-ordinals]], and it is used here exactly as [[def-ordinal-addition]] uses it.

**Where the two hierarchies part company.** The successor clause for the alephs is the Hartogs number, built in ZF from well-ordered subsets; the successor clause for the beths is the power set, which ZF cannot well-order. So the alephs exist without choice and the beths do not, and the question of how the two hierarchies line up is not settled by anything on this page.

**Continuity is a clause, not a theorem.** The third displayed clause *defines* the value at a limit to be the supremum, so continuity holds by construction. It is worth naming because it is what makes the cofinality computations of this page work: it is exactly why $\aleph_\omega$ is reachable from below by an $\omega$-indexed family.
