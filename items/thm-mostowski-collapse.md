---
id: thm-mostowski-collapse
kind: theorem
title: "Every well-order has a unique order type"
status: draft
origin: session
deps: [thm-transfinite-recursion, thm-transfinite-induction, def-ordinal, def-well-order, def-order-isomorphism, lem-ordinal-basics, lem-ordinal-trichotomy, lem-well-order-rigid, def-initial-segment]
justified_by: []
aliases: [thm-order-type, mostowski-collapse]
landmark: true
short: "every well-order is isomorphic to a unique ordinal"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Mostowski collapse lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mostowski_collapse_lemma"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "Axiom schema of replacement (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_schema_of_replacement"
    - title: "Zermelo set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo_set_theory"
    - title: "Von Neumann universe (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Von_Neumann_universe"
pipeline_run: null
---

## Statement

Every well-order $(W, <)$ ([[def-well-order]]) is order isomorphic
([[def-order-isomorphism]]) to **exactly one** ordinal ([[def-ordinal]]), called
its **order type** and written $\mathrm{ot}(W)$.

The isomorphism is the collapsing map $F(a) = \{F(b) : b < a\}$, and it is
unique as well, by rigidity ([[lem-well-order-rigid]]).

**This uses Replacement, and no form of the Axiom of Choice.**

## Facts & Assumptions

**Given:** A well-order $(W, <)$ and the axioms of ZF, in particular Replacement. No choice principle is assumed.

[A1] The axioms of ZF, in particular Replacement and Union, are available.

[L1] Transfinite recursion: for a class function $G$ there is a unique $F$ on $W$ with $F(a) = G(F \restriction W_{<a})$ for all $a$ ([[thm-transfinite-recursion]]).

[L2] Transfinite induction on $(W, <)$ ([[thm-transfinite-induction]]).

[L3] An ordinal is a transitive set on which $\in$ is a strict well-order ([[def-ordinal]]), and $W_{<a} = \{x \in W : x < a\}$ ([[def-initial-segment]]).

[L4] Every element of an ordinal is an ordinal, $\alpha \notin \alpha$, and $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$ ([[lem-ordinal-basics]]).

[L5] Any two ordinals satisfy exactly one of $\alpha \in \beta$, $\alpha = \beta$, $\beta \in \alpha$, and every set of ordinals is well ordered by $\in$ ([[lem-ordinal-trichotomy]]).

[L6] No well-order is order isomorphic to a proper initial segment of itself ([[lem-well-order-rigid]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with the class function $G(h) = \mathrm{ran}(h)$ to obtain the unique function $F$ on $W$ with $F(a) = \{F(b) : b < a\}$ for every $a \in W$. [L1, L3, construct]

2.1 Every value $F(a)$ is an ordinal, by transfinite induction: assume $F(b)$ is an ordinal for every $b < a$; then $F(a)$ is a set of ordinals by Replacement, it is transitive because $F(b) = \{F(c) : c < b\} \subseteq F(a)$ whenever $b < a$, and $\in$ well-orders it by [L5]; so $F(a)$ is an ordinal. [step 1.1, L2, L5, L3, A1]

2.2 If $b < a$ then $F(b) \in F(a)$, immediately from the defining equation. [step 1.1]

3.1 Conversely $F(b) \in F(a)$ forces $b < a$: otherwise $a = b$, giving $F(a) \in F(a)$, or $a < b$, giving $F(a) \in F(b)$ and hence both $F(a) \in F(b)$ and $F(b) \in F(a)$; each alternative contradicts [L4] or [L5]. [step 2.2, step 2.1, L4, L5]

3.2 The set $\alpha = \{F(a) : a \in W\}$ exists by Replacement and is an ordinal: it is a set of ordinals by step 2.1, it is transitive because $x \in F(a)$ means $x = F(b)$ for some $b < a$ and hence $x \in \alpha$, and $\in$ well-orders it by [L5]. [step 2.1, step 1.1, L5, L3, A1]

4.1 $F$ is therefore a bijection from $W$ onto $\alpha$ with $b < a \iff F(b) \in F(a)$, that is an order isomorphism of $(W, <)$ onto the ordinal $\alpha$ ordered by membership; injectivity holds because $b \ne a$ gives $b < a$ or $a < b$ by trichotomy in $W$, hence $F(b) \in F(a)$ or $F(a) \in F(b)$, and $F(a) \notin F(a)$ rules out equality. [step 2.2, step 3.1, step 3.2, L4, L5]

5.1 Uniqueness: suppose $W \cong \alpha$ and $W \cong \beta$ with $\alpha \ne \beta$ ordinals; then $\alpha \cong \beta$, and by [L5] one is a member of the other, say $\alpha \in \beta$, so $\alpha \subseteq \beta$ by [L4] and $\alpha$ is the initial segment of $\beta$ determined by $\alpha$, making $\beta$ order isomorphic to a proper initial segment of itself, which [L6] forbids. [step 4.1, L4, L5, L6]

6.1 Every well-order is order isomorphic to exactly one ordinal, its order type. [step 4.1, step 5.1] ∎

## Remarks

**Replacement is the whole cost.** The values $F(a)$ are not subsets of any set given in advance, so Separation cannot collect them; steps 2.1 and 3.2 both invoke Replacement, exactly as [[thm-transfinite-recursion]] does. In Zermelo set theory, which has Separation but not Replacement, the theorem fails, and the standard witness is explicit: $V_{\omega + \omega}$ satisfies Zermelo set theory, its ordinals are exactly the ordinals below $\omega + \omega$, and it contains relations on $\omega$ of order type $\omega \cdot 2$, which no ordinal of the model is isomorphic to. That model is built inside ZF, so this failure carries no consistency hypothesis; it is quoted from the references below and is not proved here, since Zermelo set theory is nowhere developed in this library.

**No choice, and the reason is again uniqueness.** Nothing is ever selected: $F$ is produced by recursion from a formula, and the ordinal it lands on is determined. This is what makes order type a choice-free notion, in contrast with cardinality, which needs [[thm-well-ordering-theorem]] and hence the Axiom of Choice to be defined for an arbitrary set.

**Comparability, restated.** With order types available, [[lem-well-order-comparability]] says exactly that the order types of two well-orders are comparable as ordinals, which is [[lem-ordinal-trichotomy]] transported back along the collapse. Either lemma can be derived from the other, and both are proved here without choice.

**The name.** The general Mostowski collapse takes any well-founded extensional relation to a transitive set. The case proved here, a well-order collapsing to an ordinal, is the only one this library needs, and it is stated in that form to avoid introducing well-founded relations before they are used.
