---
id: thm-omega-one-is-the-least-uncountable-ordinal
kind: theorem
title: "$\\omega_1$ is uncountable, every ordinal below it is at most countable, it is a cardinal and a limit ordinal, and its existence is a theorem of ZF"
status: draft
origin: session
deps: [def-first-uncountable-ordinal, thm-hartogs, def-countable, def-natural-numbers, def-cardinal, def-equinumerous, def-injection-surjection-bijection, lem-subset-of-countable, lem-countable-iff-surjection-from-n, lem-omega-least-limit-ordinal, def-limit-ordinal, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: true
short: "$\\omega_1$ uncountable, a cardinal, a limit, in ZF"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "Hartogs number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hartogs_number"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $\omega_1 = \aleph(\omega)$ ([[def-first-uncountable-ordinal]]). Then:

**(a) The bridge.** An ordinal $\alpha$ ([[def-ordinal]]) injects into
$\mathbb{N}$ if and only if $\alpha$ is at most countable
([[def-countable]]).

**(b)** $\omega_1$ is **uncountable**.

**(c)** Every ordinal $\alpha \in \omega_1$ is at most countable; so $\omega_1$
is the least uncountable ordinal.

**(d)** $\omega_1$ is a **cardinal**, that is an initial ordinal
([[def-cardinal]]): no $\alpha \in \omega_1$ is equinumerous with $\omega_1$.

**(e)** $\omega_1$ is a **limit ordinal** ([[def-limit-ordinal]]).

**All of this is a theorem of ZF and uses no choice principle.** That matters
here and is stated deliberately: [[thm-hartogs]] is choice free,
[[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]] are
choice free, so $\omega_1$ and every property listed above exist in ZF alone.
The cost begins two items later on this page, at the boundedness theorem for at
most countable subsets of $\omega_1$, which genuinely needs countable choice.

## Facts & Assumptions

**Given:** $\omega_1 = \aleph(\omega)$, the least ordinal admitting no injection into $\mathbb{N} = \omega$ ([[def-first-uncountable-ordinal]], [[thm-hartogs]]).

[L1] $\aleph(A)$ is the least ordinal that does not inject into $A$; in particular every ordinal strictly below $\aleph(A)$ does inject into $A$, and $\aleph(A)$ does not. The construction is choice free ([[thm-hartogs]]).

[L2] $A$ is finite when $A \approx n$ for some $n \in \mathbb{N}$, countably infinite when $A \approx \mathbb{N}$, at most countable when one of the two holds, and uncountable when neither does ([[def-countable]], [[def-equinumerous]]).

[L3] Every subset of an at most countable set is at most countable, and no choice principle is used ([[lem-subset-of-countable]]).

[L4] A nonempty set $A$ is at most countable if and only if there is a surjection $\mathbb{N} \to A$, and no choice principle is used ([[lem-countable-iff-surjection-from-n]], [[def-injection-surjection-bijection]]).

[L5] An injection $f : X \to Y$ is a bijection of $X$ onto $f[X] \subseteq Y$, and $\approx$ is symmetric and transitive ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L6] An ordinal $\kappa$ is a cardinal when no $\alpha \in \kappa$ satisfies $\alpha \approx \kappa$ ([[def-cardinal]]).

[L7] Every ordinal is exactly one of $0$, a successor, or a limit ([[def-limit-ordinal]]); $\mu^{+} = \mu \cup \{\mu\}$ is an ordinal, $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$, and $\mu \notin \mu$ ([[lem-ordinal-basics]]); trichotomy holds ([[lem-ordinal-trichotomy]]).

[L8] Every natural number is an ordinal, $\omega$ is an ordinal and a limit ordinal, and $n \subseteq \omega$ for $n \in \omega$ ([[lem-omega-least-limit-ordinal]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Claim (a), forwards: if $f : \alpha \to \mathbb{N}$ is injective then $\alpha \approx f[\alpha] \subseteq \mathbb{N}$ by [L5], and $f[\alpha]$ is at most countable by [L3], so $\alpha$ is at most countable by [L2] and transitivity of $\approx$. [L2, L3, L5]

1.2 Claim (a), backwards: if $\alpha$ is at most countable then $\alpha \approx n$ for some $n \in \mathbb{N}$ or $\alpha \approx \mathbb{N}$; a bijection $\alpha \to n$ followed by the inclusion $n \subseteq \mathbb{N}$ is an injection $\alpha \to \mathbb{N}$ by [L8], and a bijection $\alpha \to \mathbb{N}$ is one outright. [L2, L5, L8]

1.3 $\omega \in \omega_1$: the identity is an injection $\omega \to \mathbb{N}$, so $\omega \ne \omega_1$ by [L1]; and $\omega_1 \in \omega$ or $\omega_1 = \omega$ would give $\omega_1 \subseteq \omega$ by [L7] and hence an injection $\omega_1 \to \mathbb{N}$ by inclusion, which [L1] forbids; so $\omega \in \omega_1$ by trichotomy. [L1, L5, L7, L8]

2.1 Claim (b): $\omega_1$ does not inject into $\mathbb{N}$ by [L1], so it is not at most countable by step 1.2, that is, it is uncountable. [step 1.2, L1, L2]

2.2 Claim (c): every $\alpha \in \omega_1$ injects into $\mathbb{N}$ by [L1], hence is at most countable by step 1.1; and by [L7] any uncountable ordinal $\gamma$ satisfies $\omega_1 \le \gamma$, since $\gamma \in \omega_1$ would make $\gamma$ at most countable. [step 1.1, L1, L7]

3.1 Claim (d): suppose $\alpha \in \omega_1$ satisfies $\alpha \approx \omega_1$; then $\alpha$ is at most countable by step 2.2, so $\omega_1$ is at most countable by [L2] and symmetry of $\approx$, contradicting step 2.1; hence $\omega_1$ is a cardinal in the sense of [L6]. [step 2.2, step 2.1, L2, L5, L6]

3.2 Claim (e): $\omega_1 \ne 0$ by step 1.3, since $\omega \in \omega_1$; and $\omega_1$ is not a successor, for if $\omega_1 = \delta^{+}$ then $\omega \in \delta^{+}$ gives $\omega \subseteq \delta$ by [L7], so $\delta$ is a nonempty ordinal in $\omega_1$ and is therefore at most countable by step 2.2, so [L4] supplies a surjection $s : \mathbb{N} \to \delta$, and the function $t : \mathbb{N} \to \delta^{+}$ with $t(0) = \delta$ and $t(\sigma(n)) = s(n)$ is a surjection onto $\delta^{+} = \delta \cup \{\delta\}$, making $\omega_1$ at most countable by [L4] and contradicting step 2.1; so $\omega_1$ is a limit ordinal by [L7]. [step 1.3, step 2.2, step 2.1, L4, L7, L8]

4.1 Claims (a) to (e) are established, and every step used only [[thm-hartogs]], [[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]], all of which are choice free, so the whole statement is a theorem of ZF. [step 3.1, step 3.2, step 2.1, step 2.2, step 1.1, step 1.2, L1, L3, L4] ∎

## Remarks

**The bridge is the whole trick.** [[thm-hartogs]] produces the least ordinal that does not *inject into* $\mathbb{N}$. What is wanted is the least *uncountable* ordinal. Claim (a) is what identifies the two notions on ordinals, and it is two lines in each direction; without it, quoting Hartogs for uncountability would be citing a theorem for a claim it does not make.

**No choice, and why it is worth saying.** A reader who has met $\omega_1$ through cardinal arithmetic often expects the well-ordering theorem to be somewhere in the background. It is not. Hartogs' construction collects the order types of well-ordered *subsets of $\mathbb{N}$*, and the well-ordering comes with each subset as part of the datum, so nothing is selected ([[thm-hartogs]], remarks). The first genuine choice principle on this page appears at [[thm-countable-subsets-of-omega-one-are-bounded]], and [[rem-omega-one-and-the-cost-of-choice]] keeps the ledger.

**"$\omega_1$ is a cardinal" is a property of an ordinal, not an assignment of a size.** [[def-cardinal]] separates the two: being an initial ordinal is choice free, whereas attaching a cardinality $|X|$ to an arbitrary set $X$ needs the Axiom of Choice. Claim (d) is the first, and only the first.

**What is deliberately absent.** Nothing here says $\omega_1$ is regular, or computes its cofinality, or compares it with the size of $\mathcal{P}(\mathbb{N})$. Regularity of $\omega_1$ is the boundedness theorem two items later and costs countable choice; the comparison with $\mathcal{P}(\mathbb{N})$ is the continuum hypothesis ([[rem-continuum-hypothesis]]) and is independent of ZFC.
