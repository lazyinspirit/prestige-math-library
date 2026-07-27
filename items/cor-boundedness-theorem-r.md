---
id: cor-boundedness-theorem-r
kind: corollary
title: "A continuous real function on a compact subset of $\\mathbb{R}$ is bounded"
status: published
origin: session
deps: [thm-continuous-image-of-a-compact-set-r, thm-heine-borel-characterisation-r, def-open-cover-r, def-bounded-set, def-continuity-real, def-max-min, lem-finite-set-has-max, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [cor-continuous-on-compact-is-bounded]
landmark: false
short: "boundedness theorem"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.15)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $K \subseteq A$ be compact
([[def-open-cover-r]]). Then $f$ is **bounded on $K$**: there is a real
$M \ge 0$ with

$$|f(x)| \le M \qquad \text{for every } x \in K .$$

Equivalently, $f[K]$ is a bounded subset of $\mathbb{R}$
([[def-bounded-set]]).

**The hypothesis is compactness of $K$, not of $A$**, and it cannot be relaxed
to boundedness of $K$ or to closedness of $K$ alone: the identity is unbounded
on the closed set $[0,\infty)$, and $x \mapsto 1/x$ is unbounded on the bounded
set $(0,1)$. The general statement of that is
[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], later on this
page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and a compact set $K \subseteq A$.

[L1] The image $f[K]$ is compact ([[thm-continuous-image-of-a-compact-set-r]], [[def-continuity-real]], [[def-open-cover-r]]).

[L2] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded ([[thm-heine-borel-characterisation-r]]).

[L3] A set $S \subseteq \mathbb{R}$ is bounded when there are reals $\ell, u$ with $\ell \le s \le u$ for every $s \in S$ ([[def-bounded-set]]).

[L4] A nonempty finite set of reals has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]), and the order of $\mathbb{R}$ is total ([[def-ordered-field]]).

[L5] Absolute value: $|u| \ge 0$; $|u| = u$ when $u \ge 0$ and $|u| = -u$ when $u \le 0$; and $t \le |t|$ for every real $t$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the set $f[K]$ is compact, and by [L2] it is therefore closed and bounded. [L1, L2]

2.1 By [L3] fix reals $\ell$ and $u$ with $\ell \le z \le u$ for every $z \in f[K]$, and put $M := \max\{\,|\ell|,\ |u|\,\}$, which exists by [L4] and satisfies $M \ge 0$ by [L5]. [step 1.1, L3, L4, L5, choose]

3.1 Let $x \in K$ and put $z := f(x) \in f[K]$, so $\ell \le z \le u$. If $z \ge 0$ then $|z| = z \le u \le |u| \le M$; if $z < 0$ then $|z| = -z \le -\ell \le |\ell| \le M$, using $\ell \le z$ and $-\ell \le |{-\ell}| = |\ell|$. In both cases $|f(x)| \le M$. [step 2.1, L4, L5]

4.1 So $|f(x)| \le M$ for every $x \in K$, with $M \ge 0$ a real; equivalently $f[K]$ is bounded, which is what step 1.1 already recorded. [step 2.1, step 3.1, L3] ∎

## Remarks

- **Boundedness is the weak half of the extreme value theorem.** What compactness gives in addition is that the two bounds are *attained*, which is [[thm-extreme-value-r]]; the supremum of $f[K]$ exists as soon as $f[K]$ is nonempty and bounded above, and the work is entirely in showing that it belongs to $f[K]$.

- **Boundedness of the domain is not what is used.** The proof never looks at $K$ after the first line: the whole content is that the *image* is compact, hence bounded. That is why the same one-line argument gives boundedness of a continuous function on any compact set, however complicated.
