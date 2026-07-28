---
id: thm-fermat-interior-extremum
kind: theorem
title: "Fermat's interior extremum theorem: if $f$ has a local extremum at a point $c$ interior to its domain and is differentiable at $c$, then $f'(c) = 0$"
status: draft
origin: session
deps: [def-derivative, def-local-extremum, lem-sign-preservation-near-a-limit, def-function-limit, def-neighbourhood-r, def-interior-closure-boundary-r, def-limit-point-r, lem-of-sign-rules, def-ordered-field]
justified_by: []
forward_refs: [cex-fermat-fails-at-an-endpoint]
aliases: [thm-fermat-stationary-point, thm-interior-extremum]
landmark: true
short: "Fermat's interior extremum theorem"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Fermat's theorem (stationary points) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fermat%27s_theorem_(stationary_points)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.8)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be
**interior to $A$** ([[def-local-extremum]],
[[def-interior-closure-boundary-r]]). Suppose $f$ has a local extremum at $c$
([[def-local-extremum]]) and is differentiable at $c$ ([[def-derivative]]).
Then

$$f'(c) \;=\; 0 .$$

The symbol $f'(c)$ is meaningful under these hypotheses because an interior
point of $A$ is a limit point of $A$, which is proved in
[[def-local-extremum]].

**Interiority is a hypothesis and not a convenience.** At a point of $A$ that is
not interior, the argument below cannot place points of $A$ on both sides of
$c$, and the conclusion genuinely fails: the companion page exhibits a function
on $[0,1]$ attaining both its greatest and its least value at points where the
derivative is $1$.

**No converse is asserted.** A vanishing derivative does not produce an
extremum, and this page records that failure separately.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ interior to $A$, at which $f$ has a local extremum and is differentiable ([[def-local-extremum]], [[def-derivative]]).

[A1] $c$ is interior to $A$: there is a real $\varepsilon_A > 0$ with $N_{\varepsilon_A}(c) \subseteq A$; and such a $c$ is a limit point of $A$, so $f'(c)$ is defined ([[def-local-extremum]], [[def-interior-closure-boundary-r]], [[def-limit-point-r]]).

[A2] $f$ has a local extremum at $c$: there is a real $\rho > 0$ such that either $f(x) \le f(c)$ for every $x \in A \cap N_{\rho}(c)$, or $f(x) \ge f(c)$ for every $x \in A \cap N_{\rho}(c)$ ([[def-local-extremum]]).

[L1] Derivative ([[def-derivative]]): the difference quotient $q(x) := (f(x)-f(c))/(x-c)$ is a function on $A \setminus \{c\}$, the point $c$ is a limit point of $A \setminus \{c\}$, and $\lim_{x \to c} q(x) = f'(c)$ ([[def-function-limit]]). In particular $f(x) - f(c) = q(x)(x - c)$ for every $x \in A$ with $x \ne c$.

[L2] Sign preservation ([[lem-sign-preservation-near-a-limit]]): if $h$ is a function on a set $D$ having $c$ as a limit point and $\lim_{x \to c} h(x) = L$ with $L \ne 0$, then there is a real $\delta > 0$ such that every $x \in D$ with $0 < |x - c| < \delta$ satisfies $h(x) > L/2 > 0$ when $L > 0$, and $h(x) < L/2 < 0$ when $L < 0$.

[L3] Neighbourhoods ([[def-neighbourhood-r]]): $N_{\varepsilon}(c) = \{ y : |y - c| < \varepsilon \}$, and of finitely many positive reals the smallest is positive.

[L4] Order arithmetic ([[lem-of-sign-rules]], [[def-ordered-field]]): a product of two positive reals is positive, a product of a positive and a negative real is negative, and trichotomy, so $f'(c) \ne 0$ means $f'(c) > 0$ or $f'(c) < 0$, exclusively.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $f'(c) \ne 0$; by trichotomy either $f'(c) > 0$ or $f'(c) < 0$. [assume-contra, L4]

1.2 Fix a real $\varepsilon_A > 0$ with $N_{\varepsilon_A}(c) \subseteq A$. [A1, choose]

1.3 Fix a real $\rho > 0$ as in [A2], so that on $A \cap N_{\rho}(c)$ the function $f$ never exceeds $f(c)$, or never falls below it. [A2, choose]

2.1 Apply [L2] to $h := q$ on the domain $D := A \setminus \{c\}$, of which $c$ is a limit point by [L1], with $L := f'(c) \ne 0$: fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $q(x) > f'(c)/2 > 0$ if $f'(c) > 0$, and $q(x) < f'(c)/2 < 0$ if $f'(c) < 0$. The clause $0 < |x-c|$ makes the two descriptions of the range of $x$, over $A$ and over $A \setminus \{c\}$, the same. [step 1.1, L1, L2, choose]

3.1 Put $\eta := \min\{\varepsilon_A,\ \rho,\ \delta\}$, a positive real, and set $x_{+} := c + \eta/2$ and $x_{-} := c - \eta/2$. Each satisfies $|x_{\pm} - c| = \eta/2 < \eta$, so each lies in $N_{\varepsilon_A}(c) \subseteq A$, each lies in $N_{\rho}(c)$, and each satisfies $0 < |x_{\pm} - c| < \delta$. In particular $x_{+}, x_{-} \in A \cap N_{\rho}(c)$ and both differ from $c$. [step 1.2, step 1.3, step 2.1, L3]

4.1 Suppose $f'(c) > 0$. By step 2.1, $q(x_{+}) > 0$ and $q(x_{-}) > 0$. Since $x_{+} - c = \eta/2 > 0$, [L1] and [L4] give $f(x_{+}) - f(c) = q(x_{+})(x_{+}-c) > 0$; since $x_{-} - c = -\eta/2 < 0$, they give $f(x_{-}) - f(c) = q(x_{-})(x_{-}-c) < 0$. So $f(x_{+}) > f(c)$ and $f(x_{-}) < f(c)$. [step 2.1, step 3.1, L1, L4]

4.2 Suppose instead $f'(c) < 0$. By step 2.1, $q(x_{+}) < 0$ and $q(x_{-}) < 0$. The same two products, with the signs of the quotients reversed, give $f(x_{+}) - f(c) < 0$ and $f(x_{-}) - f(c) > 0$. So $f(x_{-}) > f(c)$ and $f(x_{+}) < f(c)$. [step 2.1, step 3.1, L1, L4]

5.1 In both cases of step 1.1 there is a point of $A \cap N_{\rho}(c)$ at which $f$ takes a value strictly greater than $f(c)$, and a point of $A \cap N_{\rho}(c)$ at which it takes a value strictly smaller: the two points are $x_{+}$ and $x_{-}$ in one order or the other, and both lie in $A \cap N_{\rho}(c)$ by step 3.1. [step 3.1, step 4.1, step 4.2, L4]

6.1 By step 1.3 one of two things holds on $A \cap N_{\rho}(c)$: either no value exceeds $f(c)$, or none falls below it. Step 5.1 produces a value of each kind, so both alternatives fail, and [A2] guarantees that one of them holds. The assumption of step 1.1 is therefore untenable, and $f'(c) = 0$. [step 1.3, step 5.1, A2, discharge-contradiction] ∎

## Remarks

- **What the proof actually uses.** Only that the difference quotient keeps the sign of its limit near $c$, and that $c$ has points of $A$ on both sides of it arbitrarily close. The first is [[lem-sign-preservation-near-a-limit]]; the second is exactly what interiority buys, and it is where the hypothesis is spent. No continuity of $f$ away from $c$, and no hypothesis on $A$ beyond containing a neighbourhood of $c$, is needed.

- **The one-sided reading.** At a point $c$ with points of $A$ on one side only, the argument still gives half of the conclusion: if $f$ has a local maximum there and only points to the right, then $f'(c) \le 0$. This page does not state that refinement, because it does not use it, and the companion page's witness at an endpoint is the same observation seen from outside ([[cex-fermat-fails-at-an-endpoint]]).

- **A stationary point is not an extremum.** The converse of this theorem is false, and the standard witness, $x \mapsto x^{3}$ at $0$, is the same function that this page uses to refute a different plausible claim about vanishing derivatives.
