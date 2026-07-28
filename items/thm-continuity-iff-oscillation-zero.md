---
id: thm-continuity-iff-oscillation-zero
kind: theorem
title: "$f : A \\to \\mathbb{R}$ is continuous at $c \\in A$ if and only if $\\omega_f(c) = 0$"
status: draft
origin: session
deps: [def-oscillation, def-continuity-real, def-extended-reals, lem-extended-reals-complete, def-neighbourhood-r, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
short: "continuity iff zero oscillation"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Oscillation (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Oscillation_(mathematics)"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then

$$f \text{ is continuous at } c \quad \Longleftrightarrow \quad \omega_f(c) = 0$$

([[def-continuity-real]], [[def-oscillation]]).

Since $\omega_f(c) \ge 0$ always ([[def-oscillation]]), the equivalent form of
the right-hand side is: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with $\omega_f(A \cap N_\delta(c)) < \varepsilon$.

**This is the tool that converts a pointwise condition into a set condition.**
Continuity at $c$ is a statement about $f$ near $c$ with a quantifier over
$\varepsilon$; $\omega_f(c) = 0$ is the vanishing of a single extended real
attached to the point. The change of form is what makes the discontinuity set
accessible: the sets $\{\,x : \omega_f(x) \ge \varepsilon\,\}$ are closed
([[lem-oscillation-superlevel-sets-are-closed]]) and their union over
$\varepsilon = 1, 1/2, 1/3, \dots$ is the discontinuity set
([[thm-discontinuity-set-is-f-sigma]]).

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, and a point $c \in A$.

[L1] $f$ is continuous at $c$ exactly when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in A$ with $|x - c| < \delta$; equivalently for every $x \in A \cap N_\delta(c)$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] $\omega_f(S) = \sup\{|f(x) - f(y)| : x, y \in S\}$ and $\omega_f(c) = \inf\{\omega_f(A \cap N_\delta(c)) : \delta > 0\}$, both in $\overline{\mathbb{R}}$; $0 \le \omega_f(c) \le \omega_f(A \cap N_\delta(c))$ for every real $\delta > 0$, and $c \in A \cap N_\delta(c)$ ([[def-oscillation]], [[def-extended-reals]]).

[L3] In $\overline{\mathbb{R}}$ every subset has a least upper bound and a greatest lower bound; a supremum is at most an extended real $u$ exactly when $u$ bounds every member of the set, and an infimum is at least an extended real $\ell$ exactly when $\ell$ bounds every member from below ([[lem-extended-reals-complete]]).

[L4] $|u - w| \le |u - v| + |v - w|$ and $|u| \ge 0$ for reals $u, v, w$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ is continuous at $c$ and let $\varepsilon > 0$ be real. Take $\delta > 0$ with $|f(x) - f(c)| < \varepsilon/2$ for every $x \in A \cap N_\delta(c)$. [L1]

1.2 Conversely, suppose $\omega_f(c) = 0$ and let $\varepsilon > 0$ be real. Not every member of $\{\omega_f(A \cap N_\delta(c)) : \delta > 0\}$ can be $\ge \varepsilon$, for then $\varepsilon$ would be a lower bound of that set and the infimum $\omega_f(c) = 0$ would satisfy $0 \ge \varepsilon$. So there is a real $\delta > 0$ with $\omega_f(A \cap N_\delta(c)) < \varepsilon$. [L2, L3]

2.1 For $x, y \in A \cap N_\delta(c)$ with $\delta$ as in step 1.1, $|f(x) - f(y)| \le |f(x) - f(c)| + |f(c) - f(y)| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; so $\varepsilon$ is an upper bound of the set whose supremum is $\omega_f(A \cap N_\delta(c))$, and therefore $\omega_f(A \cap N_\delta(c)) \le \varepsilon$. [step 1.1, L2, L3, L4]

2.2 With $\delta$ as in step 1.2 and any $x \in A \cap N_\delta(c)$: both $x$ and $c$ lie in $A \cap N_\delta(c)$, so $|f(x) - f(c)|$ is one of the values whose supremum is $\omega_f(A \cap N_\delta(c))$ and therefore $|f(x) - f(c)| \le \omega_f(A \cap N_\delta(c)) < \varepsilon$. [step 1.2, L2, L3]

3.1 Hence $0 \le \omega_f(c) \le \varepsilon$ for every real $\varepsilon > 0$. If $\omega_f(c)$ were not $0$ it would satisfy $0 < \omega_f(c) \le 1$, hence be a positive real, and taking $\varepsilon := \omega_f(c)/2$ would give $\omega_f(c) \le \omega_f(c)/2$, which is false for a positive real. So $\omega_f(c) = 0$. [step 2.1, L2, L3]

4.1 Since $\varepsilon > 0$ was arbitrary in step 1.2, the continuity condition holds at $c$, and $f$ is continuous at $c$. Together with step 3.1 this proves the equivalence. [step 3.1, step 2.2, L1] ∎

## Remarks

- **Where the extended reals are used, and where they are not.** The definition
  of $\omega_f$ needs them, because $f$ may be unbounded near $c$ and the
  supremum may then be $+\infty$; the proof needs only the order relations, and
  the two directions never compare an infinite value with a real except through
  the inequality $0 \le \omega_f(c) \le \varepsilon$, which already forces
  $\omega_f(c)$ to be real.

- **The oscillation measures how badly continuity fails, not merely whether it
  does.** The theorem uses only whether $\omega_f(c)$ vanishes, but the number
  itself carries more: the oscillation of Thomae's function at a point $c$ is
  proved below to be exactly $t(c)$
  ([[thm-dirichlet-and-thomae-continuity-sets]]), so it is $1/q$ at a rational
  with least denominator $q$ and $0$ at every irrational.
