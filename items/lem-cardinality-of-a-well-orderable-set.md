---
id: lem-cardinality-of-a-well-orderable-set
kind: lemma
title: "A set equinumerous with some ordinal has a least such ordinal, that ordinal is a cardinal, and equinumerous sets get the same one; no choice principle is used"
status: draft
origin: session
deps: [def-cardinal, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-equinumerous, def-injection-surjection-bijection, thm-mostowski-collapse, def-well-order, def-order-isomorphism, thm-well-ordering-theorem, def-axiom-of-choice]
justified_by: []
aliases: [lem-zf-cardinality]
landmark: true
short: "$\\lvert X\\rvert$ exists in ZF for well-orderable $X$"
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
    - title: "Cardinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number"
    - title: "Von Neumann cardinal assignment (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Von_Neumann_cardinal_assignment"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Call a set $X$ **well-orderable** when some relation well-orders it
([[def-well-order]]). Work in ZF, with no choice principle. Then:

**(a)** $X$ is well-orderable if and only if $X \approx \alpha$
([[def-equinumerous]]) for some ordinal $\alpha$ ([[def-ordinal]]).

**(b)** If $X$ is well-orderable there is a **least** ordinal equinumerous with
$X$. It is written $\lvert X \rvert$ and called the **cardinality** of $X$.

**(c)** $\lvert X \rvert$ is a cardinal ([[def-cardinal]]).

**(d)** If $X \approx Y$ and $X$ is well-orderable, then $Y$ is well-orderable
and $\lvert Y \rvert = \lvert X \rvert$.

**(e)** $\lvert \alpha \rvert \le \alpha$ for every ordinal $\alpha$, and
$\lvert \alpha \rvert = \alpha$ exactly when $\alpha$ is a cardinal.

Assuming the Axiom of Choice ([[def-axiom-of-choice]]) every set is
well-orderable ([[thm-well-ordering-theorem]]), so $\lvert X \rvert$ is then
defined for every set and is exactly the cardinality of [[def-cardinal]].

**Why this item exists.** [[def-cardinal]] introduces $\lvert X \rvert$ under the
hypothesis "Assume the Axiom of Choice", and it needs that hypothesis only to
know that $X$ carries a well-order at all. Everything below is about
well-orderable sets and is a theorem of ZF, which is what makes it possible to
state Hessenberg's theorem and Tarski's theorem, one of which is choice-free and
the other of which is precisely about the gap between ZF and ZFC.

## Facts & Assumptions

**Given:** The axioms of ZF, in particular Separation and Replacement. No choice principle is assumed except where the Axiom of Choice is named.

[L1] Every well-order is order isomorphic to exactly one ordinal, its order type ([[thm-mostowski-collapse]]).

[L2] An order isomorphism is in particular a bijection ([[def-order-isomorphism]], [[def-injection-surjection-bijection]]).

[L3] $\alpha^{+} = \alpha \cup \{\alpha\}$ is an ordinal, every element of an ordinal is an ordinal, $\alpha \notin \alpha$, and $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$ ([[lem-ordinal-basics]], [[def-ordinal]]).

[L4] For ordinals exactly one of $\alpha \in \beta$, $\alpha = \beta$, $\beta \in \alpha$ holds, and every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]).

[L5] $\approx$ is reflexive, symmetric and transitive, and the order relation $\alpha \le \beta$ on ordinals is $\alpha \subseteq \beta$ ([[def-equinumerous]], [[def-ordinal]]).

[L6] An ordinal $\kappa$ is a **cardinal** when no $\alpha \in \kappa$ satisfies $\alpha \approx \kappa$; under the Axiom of Choice, $\lvert X \rvert$ is the least ordinal equinumerous with $X$ ([[def-cardinal]]).

[L7] Assuming the Axiom of Choice, every set carries a well-order ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

## Proof

**Proof technique:** direct.

1.1 If $<$ well-orders $X$ then $(X, <)$ has an order type $\alpha$ and the collapsing map is an order isomorphism, hence a bijection $X \to \alpha$, so $X \approx \alpha$. [L1, L2]

1.2 Conversely, if $f : X \to \alpha$ is a bijection then $x <_X y :\iff f(x) \in f(y)$ is a well-order of $X$, since $f$ transports irreflexivity, transitivity, trichotomy and the least-element property of $\in$ on $\alpha$ back to $X$; this proves claim (a). [L2, L3, L4]

1.3 Assume now $X \approx \alpha$ for an ordinal $\alpha$, and put $C = \{\xi \in \alpha^{+} : \xi \approx X\}$, a set by Separation inside the ordinal $\alpha^{+}$, all of whose elements are ordinals, and nonempty because $\alpha \in \alpha^{+}$ and $\alpha \approx X$. [L3, L5]

2.1 By [L4] the set $C$ has an $\in$-least element $\kappa$, and $\kappa \approx X$. [step 1.3, L4]

3.1 $\kappa$ is least among **all** ordinals equinumerous with $X$: given $\beta \approx X$, trichotomy gives $\beta \in \alpha^{+}$, in which case $\beta \in C$ and $\kappa \subseteq \beta$ by minimality; or else $\alpha^{+} \subseteq \beta$, in which case $\alpha \in \alpha^{+} \subseteq \beta$ gives $\alpha \subseteq \beta$, while $\alpha \in C$ gives $\kappa \subseteq \alpha$, so again $\kappa \subseteq \beta$. This proves claim (b), with $\lvert X \rvert := \kappa$. [step 2.1, L3, L4, L5]

4.1 Claim (c): if $\gamma \in \kappa$ had $\gamma \approx \kappa$ then $\gamma \approx X$ by [L5], so $\kappa \subseteq \gamma$ by step 3.1, whence $\gamma \in \kappa \subseteq \gamma$ and $\gamma \in \gamma$, which [L3] forbids; so $\kappa$ is a cardinal. [step 3.1, L3, L5, L6]

4.2 Claim (d): if $X \approx Y$ then an ordinal is equinumerous with $X$ exactly when it is equinumerous with $Y$, by symmetry and transitivity of $\approx$, so the two least such ordinals coincide; and $Y \approx \kappa$ makes $Y$ well-orderable by step 1.2. [step 3.1, step 1.2, L5]

5.1 Claim (e): $\alpha \approx \alpha$, so $\lvert \alpha \rvert \subseteq \alpha$ by step 3.1; if $\alpha$ is a cardinal then no $\xi \in \alpha$ is equinumerous with $\alpha$, so the least ordinal equinumerous with $\alpha$ is $\alpha$ itself; and conversely $\lvert \alpha \rvert = \alpha$ makes $\alpha$ a cardinal by step 4.1. [step 3.1, step 4.1, L5, L6]

6.1 Assuming the Axiom of Choice, every set $X$ carries a well-order by [L7], hence $X \approx \lvert X \rvert$ by step 1.1 and $\lvert X \rvert$ is defined for every set; and by step 3.1 it is the least ordinal equinumerous with $X$, which is what [L6] calls the cardinality of $X$. [step 1.1, step 3.1, L6, L7] ∎

## Remarks

**What is choice-free and what is not.** Claims (a) to (e) are theorems of ZF: they say what happens *for a well-orderable set*, and the hypothesis of well-orderability is carried explicitly rather than supplied by an axiom. The Axiom of Choice enters only in the last step, where it removes the hypothesis by making every set well-orderable. Without choice a set may be equinumerous with no ordinal at all, and then $\lvert X \rvert$ simply does not exist; that is the situation [[thm-hartogs]] is designed for.

**Nothing is chosen.** The one place a selection might be expected is step 2.1, and there the element taken is the $\in$-**least** member of $C$, which is determined by $C$ and not selected from it. Step 3.1 then shows that the bound $\alpha^{+}$, which exists only to turn "the least ordinal equinumerous with $X$" into an instance of Separation over a set, does not affect the answer.

**Notation.** From here on $\lvert X \rvert$ always means the ordinal of claim (b). For a finite set this is not yet known to agree with the natural number written $\lvert A \rvert$ in [[def-finite-cardinality]]; that agreement is a theorem and is proved on this page.
