---
id: ex-powers-of-omega-and-epsilon-zero
kind: example
title: "$\\omega^{2}$, $\\omega^{\\omega}$, and $\\varepsilon_0 = \\sup\\{\\omega, \\omega^{\\omega}, \\omega^{\\omega^{\\omega}}, \\dots\\}$ satisfying $\\omega^{\\varepsilon_0} = \\varepsilon_0$"
status: draft
origin: session
deps: [def-ordinal-exponentiation, def-ordinal-multiplication, thm-ordinal-exponent-laws, thm-ordinal-arithmetic-monotonicity, lem-recursion-on-the-ordinals, thm-induction-principle, thm-cantor-normal-form, def-limit-ordinal, lem-omega-least-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-natural-numbers, def-ordinal]
justified_by: []
aliases: [ex-epsilon-zero]
landmark: true
short: "the $\\omega$-tower and its fixed point $\\varepsilon_0$"
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
    - title: "Epsilon number (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Epsilon_number_(mathematics)"
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Example

The first few powers of $\omega$ are

$$\omega^{1} = \omega, \qquad \omega^{2} = \omega \cdot \omega, \qquad \omega^{\omega} = \sup\{\, \omega^{n} : 0 < n < \omega \,\},$$

and each is strictly larger than the one before ([[thm-ordinal-exponent-laws]],
clause (b)). Iterating the exponential produces the **$\omega$-tower**

$$t_0 = \omega, \qquad t_{n+1} = \omega^{t_n},$$

so $t_1 = \omega^{\omega}$, $t_2 = \omega^{\omega^{\omega}}$, and so on. Its
supremum

$$\varepsilon_0 \;:=\; \sup\{\, t_n : n \in \omega \,\}$$

is a limit ordinal satisfying

$$\omega^{\varepsilon_0} = \varepsilon_0,$$

so it is a **fixed point** of $\beta \mapsto \omega^{\beta}$. This is exhibited
here by hand: the tower is written down, its supremum is taken, and the fixed
point equation is proved from continuity at limits. **No fixed-point theorem is
used**, and none that this library proves applies here: every fixed-point theorem
on disk is stated for a *set* carrying an order or a metric, whereas
$\beta \mapsto \omega^{\beta}$ is a class operation on the ordinals, which are
not a set.

## Facts & Assumptions

**Given:** The ordinals with the operations of [[def-ordinal-multiplication]] and [[def-ordinal-exponentiation]], and $\omega$ the least limit ordinal ([[lem-omega-least-limit-ordinal]], [[def-natural-numbers]]).

[L1] $\alpha^{0} = 1$, $\alpha^{\delta^{+}} = \alpha^{\delta} \cdot \alpha$, and $\alpha^{\lambda} = \sup\{\alpha^{\beta} : 0 < \beta < \lambda\}$ for limit $\lambda$ ([[def-ordinal-exponentiation]]).

[L2] For $\alpha > 1$: $\beta < \gamma$ implies $\alpha^{\beta} < \alpha^{\gamma}$; and $\alpha^{\lambda} = \sup\{\alpha^{\eta} : \eta \in D\}$ for every nonempty $D \subseteq \lambda$ with $\sup D = \lambda$ (claims (b) and (c) of [[thm-ordinal-exponent-laws]]). Also $\alpha^{1} = \alpha$ (claim (a) of the same).

[L3] Recursion along the ordinals: a class rule defined on functions with ordinal domain determines exactly one class function on the ordinals ([[lem-recursion-on-the-ordinals]]).

[L4] $\bigcup A$ is an ordinal and the least upper bound of a set $A$ of ordinals; $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$; $\mu \notin \mu$; and $\mu < \nu$ iff $\mu^{+} \le \nu$ ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-ordinal]]).

[L5] $\omega$ is a limit ordinal, closed under successor, with $1 \in \omega$, and every ordinal in $\omega$ is $0$ or a successor ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]); every ordinal is exactly one of $0$, a successor, or a limit ([[def-limit-ordinal]]).

[L6] $\mu \cdot 1 = \mu$ (claim (a) of [[thm-ordinal-arithmetic-monotonicity]]).

[L7] Induction on $\mathbb{N}$: a subset of $\mathbb{N}$ containing $0$ and closed under $\sigma$ equals $\mathbb{N}$, and $\sigma(n) = n^{+}$ ([[thm-induction-principle]], [[def-natural-numbers]]).

## Verification

**Proof technique:** direct.

1.1 $\omega^{1} = \omega$ by [L2]; $\omega^{2} = \omega^{1^{+}} = \omega^{1} \cdot \omega = \omega \cdot \omega$ by [L1]; and $\omega < \omega^{\omega}$, since $1 < \omega$ gives $\omega = \omega^{1} < \omega^{\omega}$ by [L2] with base $\omega > 1$. [L1, L2, L5, L6]

1.2 Define a class function $G$ on functions $h$ with ordinal domain $\beta$ by $G(h) = \omega$ if $\beta = 0$, $G(h) = \omega^{h(\delta)}$ if $\beta = \delta^{+}$, and $G(h) = 0$ if $\beta$ is a limit; the three cases are exhaustive and exclusive by [L5], so [L3] gives a unique class function $F$ on the ordinals with $F(0) = \omega$ and $F(\delta^{+}) = \omega^{F(\delta)}$. Write $t_n = F(n)$ for $n \in \omega$; then $t_0 = \omega$, $t_{n^{+}} = \omega^{t_n}$, and $T = \{t_n : n \in \omega\}$ is a set by Replacement. [L3, L5, construct]

2.1 $t_n < t_{n^{+}}$ for every $n \in \omega$: let $S = \{n \in \omega : t_n < t_{n^{+}}\}$; then $0 \in S$, because $t_0 = \omega < \omega^{\omega} = t_{0^{+}}$ by step 1.1 and step 1.2; and $n \in S$ implies $\sigma(n) = n^{+} \in S$, because applying [L2] with base $\omega > 1$ to $t_n < t_{n^{+}}$ gives $\omega^{t_n} < \omega^{t_{n^{+}}}$, that is $t_{n^{+}} < t_{(n^{+})^{+}}$; so $S = \omega$ by [L7]. [step 1.1, step 1.2, L2, L7]

3.1 $\varepsilon_0 := \bigcup T$ is an ordinal by [L4]; each $t_n$ satisfies $t_n < t_{n^{+}} \subseteq \varepsilon_0$ by step 2.1 and [L4], so $T \subseteq \varepsilon_0$ and $T$ is nonempty with $\sup T = \varepsilon_0$; $\varepsilon_0 \ne 0$ because $t_0 = \omega \in \varepsilon_0$; and $\varepsilon_0$ is not a successor, since $\varepsilon_0 = \mu^{+}$ would put $\mu \in t_n$ for some $n$, whence $\mu^{+} \le t_n < t_{n^{+}} \le \varepsilon_0 = \mu^{+}$ by [L4], which [L4] forbids; so $\varepsilon_0$ is a limit ordinal by [L5]. [step 2.1, step 1.2, L4, L5]

4.1 $\omega^{\varepsilon_0} = \varepsilon_0$: by [L2] with base $\omega > 1$ applied to the nonempty $D = T \subseteq \varepsilon_0$ with $\sup T = \varepsilon_0$, one gets $\omega^{\varepsilon_0} = \sup\{\omega^{t_n} : n \in \omega\} = \sup\{t_{n^{+}} : n \in \omega\}$ by step 1.2; and that supremum is $\varepsilon_0$, because each $t_{n^{+}} \subseteq \varepsilon_0$ while conversely $t_n \subseteq t_{n^{+}}$ for every $n$ by step 2.1 and [L4], so the union over the shifted family contains $\bigcup T = \varepsilon_0$. [step 3.1, step 2.1, step 1.2, L2, L4]

5.1 So $\omega^{2} = \omega \cdot \omega$, the tower $t_0 = \omega$, $t_{n^{+}} = \omega^{t_n}$ is strictly increasing, and its supremum $\varepsilon_0$ is a limit ordinal with $\omega^{\varepsilon_0} = \varepsilon_0$. [step 4.1, step 3.1, step 2.1, step 1.1] ∎

## Remarks

**Why [[lem-recursion-on-the-ordinals]] and not the recursion theorem over $\mathbb{N}$.** The published [[thm-recursion]] builds $g : \mathbb{N} \to A$ from a function $f : A \to A$ on a **set** $A$. Here the step is $\beta \mapsto \omega^{\beta}$, a class operation with no set-sized codomain available at this point, so the recursion theorem does not apply as stated. [[lem-recursion-on-the-ordinals]] is exactly the class-valued version, and Replacement then makes the range $\{t_n : n \in \omega\}$ a set.

**What is proved and what is not.** That $\varepsilon_0$ is a fixed point of $\beta \mapsto \omega^{\beta}$ is proved above. That it is the **least** such fixed point is true and is not proved here; it would follow from the observation that any fixed point is closed under the tower, and it needs nothing new, but nothing on these pages uses it. No general theory of normal functions or of the Veblen hierarchy is developed, and none is needed for the statement above.

**$\varepsilon_0$ and the Cantor normal form.** By [[thm-cantor-normal-form]] every nonzero ordinal has a unique base-$\omega$ normal form. For $\varepsilon_0$ that form is $\omega^{\varepsilon_0} \cdot 1$, whose exponent is $\varepsilon_0$ itself, so the normal form does **not** reduce $\varepsilon_0$ to strictly smaller data. Below $\varepsilon_0$ it always does, and that is the sense in which $\varepsilon_0$ is where base-$\omega$ notation runs out.

**Cardinality is a separate question, and this page does not settle it.** Nothing above says how large $\omega^{\omega}$ or $\varepsilon_0$ is as a set. Showing them at most countable would need the countable ordinals to be closed under ordinal exponentiation, which is not proved anywhere in this library; the natural route runs through [[thm-countable-subsets-of-omega-one-are-bounded]] and a transfinite induction that no item here carries out. What the tower demonstrates is growth in **order type**, which is the invariant this page is about.
