---
id: lem-cofinality-is-well-defined
kind: lemma
title: "For every ordinal $\\alpha$ there is a least ordinal $\\beta$ admitting a map $\\beta \\to \\alpha$ with cofinal range, and that map may always be taken strictly increasing"
status: draft
origin: session
deps: [def-cofinal-subset-of-an-ordinal, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, thm-transfinite-recursion, def-well-order, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "the least cofinal length exists"
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
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $\alpha$ be an ordinal ([[def-ordinal]]). Say that a function
$f : \beta \to \alpha$ is **cofinal** when its range
$f[\beta] = \{f(\xi) : \xi \in \beta\}$ is a cofinal subset of $\alpha$
([[def-cofinal-subset-of-an-ordinal]]), that is, when for every $\zeta \in \alpha$
there is $\xi \in \beta$ with $\zeta \le f(\xi)$. Then, in ZF:

**(a)** there is a **least** ordinal $\beta$ for which some cofinal
$f : \beta \to \alpha$ exists;

**(b)** for that least $\beta$ a cofinal $g : \beta \to \alpha$ can be taken
**strictly increasing**: $\eta \in \xi \in \beta$ implies $g(\eta) \in g(\xi)$.

**No choice principle is used.** The least ordinal of claim (a) is a least
element of a set of ordinals, and the map of claim (b) is built by transfinite
recursion from a formula.

## Facts & Assumptions

**Given:** An ordinal $\alpha$, in ZF, with no choice principle. For a set $D$ of ordinals write $\sup D = \bigcup D$.

[L1] $C \subseteq \alpha$ is cofinal in $\alpha$ when for every $\zeta \in \alpha$ there is $\eta \in C$ with $\zeta \le \eta$; a subset that is not cofinal is bounded, that is, there is $\zeta \in \alpha$ with $\eta < \zeta$ for every $\eta \in C$ ([[def-cofinal-subset-of-an-ordinal]]).

[L2] Every nonempty set of ordinals has an $\in$-least element and is well ordered by $\in$; ordinals satisfy trichotomy; $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$ ([[lem-ordinal-trichotomy]], [[def-well-order]]).

[L3] For a set $D$ of ordinals, $\sup D = \bigcup D$ is an ordinal and is the least upper bound of $D$; $\alpha \cup \{\alpha\}$ is an ordinal; every element of an ordinal is an ordinal ([[lem-ordinal-basics]], [[def-ordinal]]).

[L4] For a well-order $(W,<)$ and a class rule $G$ defined on functions with domain a proper initial segment of $W$, there is exactly one $F$ on $W$ with $F(a) = G(F \restriction W_{<a})$ ([[thm-transfinite-recursion]]).

[L5] The range of a function is a set, and $f[\beta] \subseteq \alpha$ for $f : \beta \to \alpha$ ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 The identity map $\alpha \to \alpha$ is cofinal, since $\zeta \le \zeta$ for every $\zeta \in \alpha$; so at least one ordinal, namely $\alpha$, admits a cofinal map into $\alpha$. [L1, L5]

2.1 Put $T = \{\beta \in \alpha \cup \{\alpha\} : \text{some } f : \beta \to \alpha \text{ is cofinal}\}$, a set by Power Set and Separation, and nonempty by step 1.1; let $\beta_0$ be its $\in$-least element, which exists by [L2]. Then $\beta_0$ is least among **all** ordinals admitting a cofinal map into $\alpha$: such a $\gamma$ either lies in $\alpha \cup \{\alpha\}$, hence in $T$, giving $\beta_0 \le \gamma$; or it does not, in which case $\alpha \in \gamma$ by [L2] and $\beta_0 \le \alpha \in \gamma$. This is claim (a). [step 1.1, L2, L3]

3.1 Fix a cofinal $f : \beta_0 \to \alpha$ and define $g$ on the well-order $(\beta_0, \in)$ of [L2] by the recursion of [L4]: for $h$ a function with domain $\xi \in \beta_0$, let $G(h)$ be the $\subseteq$-larger of $f(\xi)$ and $\sup\{\,\eta' \cup \{\eta'\} : \eta' \in \operatorname{ran}(h)\,\}$ when that value lies in $\alpha$, and $f(\xi)$ otherwise; [L4] then supplies exactly one $g : \beta_0 \to \alpha$ with $g(\xi) = G(g \restriction \xi)$ for every $\xi \in \beta_0$. [step 2.1, L2, L3, L4]

4.1 The exceptional branch of $G$ is never taken, and $g$ is strictly increasing and cofinal: both branches of $G$ take values in $\alpha$, so $g[\xi] \subseteq \alpha$ for every $\xi \in \beta_0$; and $g \restriction \xi$ is a map $\xi \to \alpha$ with $\xi \in \beta_0$, so its range is **not** cofinal by the minimality of step 2.1, whence [L1] supplies $\zeta \in \alpha$ with $g(\eta) < \zeta$ for every $\eta \in \xi$, so $g(\eta) \cup \{g(\eta)\} \le \zeta$ and $\sup\{\,g(\eta) \cup \{g(\eta)\} : \eta \in \xi\,\} \le \zeta \in \alpha$ by [L2] and [L3]; that supremum therefore lies in $\alpha$, the first branch applies, and $g(\eta) \in g(\eta) \cup \{g(\eta)\} \subseteq g(\xi)$ gives $g(\eta) \in g(\xi)$ for every $\eta \in \xi$; finally $f(\xi) \subseteq g(\xi)$ for every $\xi$, so $g$ is cofinal because $f$ is, which is claim (b). [step 2.1, step 3.1, L1, L2, L3, L5] ∎

## Remarks

**The degenerate values, and why they are not special cases in the proof.** For $\alpha = 0$ the empty function $0 \to 0$ is cofinal, vacuously, so the least $\beta$ is $0$. For a successor $\alpha = \gamma \cup \{\gamma\}$ the one-point map $0 \mapsto \gamma$ is cofinal and no map from $0$ is, so the least $\beta$ is $1$. Both are read off the definition and neither needs separate treatment above: step 4.1 runs vacuously when $\beta_0 = 0$, and at $\beta_0 = 1$ the supremum in step 3.1 is a supremum over the empty set.

**Why minimality is what makes the strictly increasing map exist.** The construction needs the partial range $g[\xi]$ to be bounded below $\alpha$ at every stage $\xi < \beta_0$, and that is exactly the statement that no shorter map is cofinal. For a length that is *not* least the claim genuinely fails: there is a cofinal map $\omega \cup \{\omega\} \to \omega$, namely $\xi \mapsto \xi$ on $\omega$ together with $\omega \mapsto 0$, but there is no strictly increasing map $\omega \cup \{\omega\} \to \omega$ at all, since its value at $\omega$ would have to exceed every natural number.

**What is not claimed.** Nothing here says the least $\beta$ is a cardinal, or even a limit ordinal; that is a theorem about limit $\alpha$, and it is proved separately once the cofinality function has been given a name.
