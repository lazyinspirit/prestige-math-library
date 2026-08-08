---
id: cor-laurent-not-lub-complete
kind: corollary
title: "$\\mathbb{R}((t^{-1}))$ does not have the least-upper-bound property; its canonical naturals have no supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-valuation, thm-laurent-ordered-field, lem-laurent-non-archimedean, thm-of-archimedean, def-complete-ordered-field, def-archimedean-field, def-ordered-field, thm-reals-ordered-field, cor-cauchy-reals-lub-complete]
aliases: []
landmark: true
short: "$K$ is not complete"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Complete ordered fields are Archimedean (Rutgers Math 311 notes)"
      url: "https://sites.math.rutgers.edu/~sussmann/slides-math-311-2020-September-21.pdf"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

$K = \mathbb{R}((t^{-1}))$ is an ordered field that is **not** a complete
ordered field ([[def-complete-ordered-field]]): it does not have the
least-upper-bound property.

The failure is witnessed concretely by the set of canonical naturals
$$A \;:=\; \{\, n \cdot 1_K \;:\; n \in \mathbb{N} \,\} \;\subseteq\; K,$$
which is nonempty and bounded above by $t$, yet has no least upper bound in
$K$: every upper bound of $A$ admits a strictly smaller upper bound.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$; the set $A = \{\, n \cdot 1_K : n \in \mathbb{N} \,\}$.

[L1] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; the canonical naturals are $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$; and for $c \ne 0$ the constant $\iota(c)$ is nonzero with $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$ ([[thm-laurent-ordered-field]]).

[L2] $n \cdot 1_K < t$ for every $n \in \mathbb{N}$, and $K$ is not Archimedean ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L3] Every complete ordered field is Archimedean ([[thm-of-archimedean]]).

[L4] $F$ is a complete ordered field when every nonempty $S \subseteq F$ that is bounded above has a least upper bound in $F$, a least upper bound being an upper bound $\le$ every upper bound ([[def-complete-ordered-field]]).

[L5] For nonzero $h \in K$: $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is nonzero with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$ ([[def-formal-laurent-series]]).

[L6] For nonzero $f, g \in K$: $fg \ne 0_K$ with $v(fg) = v(f)+v(g)$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$; $-f \ne 0_K$ with $v(-f) = v(f)$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$; if $v(f) < v(g)$ then $f+g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$; and if $v(f) = v(g)$ with $\operatorname{lc}(f)+\operatorname{lc}(g) \ne 0$ then $f+g \ne 0_K$ with $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)+\operatorname{lc}(g)$ ([[lem-laurent-valuation]]).

[L7] $\mathbb{R}$ is a complete ordered field and hence Archimedean: for every real $c$ there is a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$ ([[thm-reals-ordered-field]], [[cor-cauchy-reals-lub-complete]], [[thm-of-archimedean]]).

[L8] In an ordered field exactly one of $x < y$, $x = y$, $y < x$ holds ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $K$ is an ordered field that is not Archimedean, while by [L3] every complete ordered field is Archimedean; so $K$ is not a complete ordered field, that is, $K$ does not have the least-upper-bound property of [L4]. [L1, L2, L3, L4]

1.2 $A$ is nonempty, since $0 \cdot 1_K = 0_K$ and $1 \cdot 1_K = 1_K$ lie in it, and it is bounded above by $t$, since $n \cdot 1_K < t$ for every natural $n$ by [L2]. [L1, L2, L4]

1.3 Let $s \in K$ be any upper bound of $A$. Since $1_K \in A$ we have $1_K \le s$, and $1_K > 0_K$ because $\operatorname{lc}(1_K) = 1 > 0$; so $s > 0_K$, hence $s \ne 0_K$ and $\operatorname{lc}(s) > 0$. [L1, L4, L5]

2.1 $v(s) < 0$. Indeed, if $v(s) > 0$ then $v(1_K) = 0 < v(s) = v(-s)$ by [L6], so $1_K - s$ is nonzero with leading coefficient $\operatorname{lc}(1_K) = 1 > 0$, giving $s < 1_K$ and contradicting $1_K \le s$ by [L8]. And if $v(s) = 0$, write $c := \operatorname{lc}(s) > 0$ and use [L7] to fix a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$; then $\iota(n \cdot 1_{\mathbb{R}}) - s$ has both valuations equal to $0$ and leading coefficients summing to $n \cdot 1_{\mathbb{R}} - c \ne 0$, so by [L6] it is nonzero with leading coefficient $n \cdot 1_{\mathbb{R}} - c > 0$, giving $n \cdot 1_K > s$ and contradicting that $s$ is an upper bound of $A$. [step 1.3, L1, L4, L5, L6, L7, L8]

3.1 Put $r := v(s) < 0$ and $c := \operatorname{lc}(s) > 0$, and set $s' := \iota(c/2)\, t^{-r} \in K$. By [L1], [L5] and [L6], $s'$ is nonzero with $v(s') = 0 + r = r$ and $\operatorname{lc}(s') = (c/2)\cdot 1 = c/2 > 0$. [step 1.3, step 2.1, L1, L5, L6]

4.1 $s'$ is an upper bound of $A$: it satisfies $s' > 0_K$ by [L1], which settles $n = 0$; and for $n \ge 1$ the element $n \cdot 1_K$ is nonzero with valuation $0$ by [L1], so $v(s') = r < 0 = v(-(n \cdot 1_K))$ and [L6] makes $s' - n\cdot 1_K$ nonzero with leading coefficient $c/2 > 0$, that is $n \cdot 1_K < s'$. [step 3.1, L1, L5, L6]

4.2 $s' < s$: both $s$ and $-s'$ are nonzero of valuation $r$, and their leading coefficients sum to $c - c/2 = c/2 \ne 0$, so by [L6] the difference $s - s'$ is nonzero with leading coefficient $c/2 > 0$. [step 3.1, L1, L6]

5.1 Steps 4.1 and 4.2 show that every upper bound $s$ of $A$ admits an upper bound $s'$ with $s' < s$, so no upper bound of $A$ is least and $A$ has no least upper bound in $K$; with [step 1.2] this exhibits a nonempty subset of $K$ that is bounded above and has no supremum, which is the concrete form of the failure already established in [step 1.1]. [step 1.1, step 1.2, step 4.1, step 4.2, L4] ∎

## Remarks

- **Two proofs of one fact, kept apart on purpose.** [step 1.1] is the abstract
  route: non-Archimedean ordered fields cannot be complete, by the contrapositive
  of [[thm-of-archimedean]], and nothing about Laurent series enters it. The rest
  of the proof is the concrete route, and it names the failing set. Only the
  concrete route tells the reader *what* has no supremum, which matters because
  the same field will be shown to be sequentially Cauchy complete in
  [[thm-laurent-cauchy-complete]]: the reader is entitled to see the set on which
  the two notions of completeness disagree.

- **The halving is not special.** Any real $\lambda$ with $0 < \lambda < 1$
  would serve in place of $1/2$: the only properties used are that
  $\lambda c > 0$, so the smaller element is still positive of valuation $r < 0$
  and therefore still above every canonical natural, and that
  $c - \lambda c \ne 0$, so the descent is strict. Both hold for every such
  $\lambda$, which is why the set of upper bounds of $A$ has no least element
  rather than merely failing to contain one particular candidate.
