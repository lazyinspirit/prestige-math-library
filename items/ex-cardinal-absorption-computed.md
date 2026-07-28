---
id: ex-cardinal-absorption-computed
kind: example
title: "$\\aleph_0 \\oplus \\aleph_0 = \\aleph_0 \\otimes \\aleph_0 = \\aleph_0$, $\\aleph_1 \\oplus \\aleph_0 = \\aleph_1$ and $5 \\oplus \\aleph_0 = \\aleph_0$, computed from absorption and, in the countable cases, independently from the published bijection $\\omega \\times \\omega \\approx \\omega$"
status: draft
origin: session
deps: [cor-cardinal-absorption, thm-hessenberg, def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, def-aleph-and-beth-hierarchies, cor-the-aleph-and-beth-hierarchies-are-well-defined, lem-successor-cardinal-exists, thm-cardinal-arithmetic-agrees-with-finite-counting, lem-cardinality-of-a-well-orderable-set, thm-n-cross-n-countable, def-cardinal, def-countable, def-equinumerous, def-injection-surjection-bijection, def-natural-numbers, lem-omega-least-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: true
short: "absorption, computed"
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
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
    - title: "Aleph number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Aleph_number"
pipeline_run: null
---

## Example

Work in ZF; no choice principle is used anywhere below. With $\oplus$ and
$\otimes$ as in [[def-cardinal-arithmetic]] and the alephs as in
[[def-aleph-and-beth-hierarchies]]:

$$\aleph_0 \oplus \aleph_0 = \aleph_0, \qquad \aleph_0 \otimes \aleph_0 = \aleph_0, \qquad \aleph_1 \oplus \aleph_0 = \aleph_1, \qquad 5 \oplus \aleph_0 = \aleph_0 .$$

Each is an instance of absorption ([[cor-cardinal-absorption]]). The countable
ones are also obtained a second way, from a bijection that was available before
cardinal arithmetic existed: $\omega \times \omega \approx \omega$
([[thm-n-cross-n-countable]]), together with two inclusions and no further
input.

## Facts & Assumptions

**Given:** ZF, with no choice principle. Write $\kappa \sqcup \lambda = (\{0\} \times \kappa) \cup (\{1\} \times \lambda)$ as in [[def-cardinal-arithmetic]].

[L1] For an infinite cardinal $\nu$ and a cardinal $\rho \le \nu$: $\nu \oplus \rho = \nu$, and $\nu \otimes \rho = \nu$ when $\rho \ne 0$ ([[cor-cardinal-absorption]], [[thm-hessenberg]]).

[L2] $\oplus$ and $\otimes$ are commutative and monotone; for cardinals $\kappa \le \lambda$ iff $\kappa \preceq \lambda$; and $A \preceq B$ with both well-orderable gives $\lvert A\rvert \le \lvert B\rvert$ ([[lem-cardinal-arithmetic-basic-laws]]).

[L3] $\aleph_0 = \omega$; $\aleph_1 = \aleph_0^{+}$ is the least cardinal strictly above $\aleph_0$; every aleph is an infinite cardinal and $\aleph_0 < \aleph_1$ ([[def-aleph-and-beth-hierarchies]], [[lem-successor-cardinal-exists]], [[cor-the-aleph-and-beth-hierarchies-are-well-defined]]).

[L4] Every natural number is a cardinal, $\omega$ is a cardinal, and a cardinal is infinite exactly when $\omega \le \kappa$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-cardinal]], [[def-natural-numbers]], [[lem-omega-least-limit-ordinal]]).

[L5] $\omega \times \omega \approx \omega$ ([[thm-n-cross-n-countable]], [[def-countable]], [[def-equinumerous]]).

[L6] $\lvert X\rvert$ is the least ordinal equinumerous with $X$, $X \approx \lvert X\rvert$, and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]]).

[L7] Ordinals: trichotomy; $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$; $\alpha \subseteq \beta \subseteq \alpha$ forces $\alpha = \beta$; a subset inclusion is an injection ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 $\aleph_0 = \omega$ and $\aleph_1$ are infinite cardinals with $\aleph_0 \le \aleph_1$, and $5 \in \omega$ is a cardinal with $0 \ne 5 \le \aleph_0$, all by [L3], [L4] and [L7]. [L3, L4, L7]

1.2 $\aleph_0 \otimes \aleph_0 = \lvert \omega \times \omega\rvert = \lvert \omega\rvert = \omega$, by the definition of $\otimes$ together with [L5] and [L6]. [L5, L6]

1.3 The map $(i,\xi) \mapsto (\xi,i)$ is an injection $\omega \sqcup \omega \to \omega \times \omega$, because its image lies in $\omega \times 2$ with $2 \in \omega$ by [L4] and both coordinates are recovered from the image; and $\xi \mapsto (0,\xi)$ is an injection $\omega \to \omega \sqcup \omega$. [L4, L7]

1.4 The inclusion $5 \sqcup \omega \subseteq \omega \sqcup \omega$ holds because $5 \subseteq \omega$ by [L7], and $n \mapsto (1,n)$ is an injection $\omega \to 5 \sqcup \omega$. [L4, L7]

2.1 By [L1] and [L2]: $\aleph_0 \oplus \aleph_0 = \aleph_0$ and $\aleph_0 \otimes \aleph_0 = \aleph_0$ with $\nu = \rho = \aleph_0$; $\aleph_1 \oplus \aleph_0 = \aleph_1$ with $\nu = \aleph_1$ and $\rho = \aleph_0$; and $5 \oplus \aleph_0 = \aleph_0 \oplus 5 = \aleph_0$ with $\nu = \aleph_0$ and $\rho = 5$. [step 1.1, L1, L2]

2.2 The countable values a second way: step 1.2 gives $\aleph_0 \otimes \aleph_0 = \aleph_0$ outright; step 1.3 with [L2] and [L6] gives $\aleph_0 \le \aleph_0 \oplus \aleph_0 \le \aleph_0 \otimes \aleph_0 = \aleph_0$, hence $\aleph_0 \oplus \aleph_0 = \aleph_0$ by [L7]; and step 1.4 with step 1.3 gives $\aleph_0 \le 5 \oplus \aleph_0 \le \aleph_0 \oplus \aleph_0 = \aleph_0$, hence $5 \oplus \aleph_0 = \aleph_0$. [step 1.2, step 1.3, step 1.4, L2, L6, L7]

3.1 All four values are as displayed, and the three countable ones agree by both routes. [step 2.1, step 2.2] ∎

## Remarks

**What absorption replaces.** Step 2.2 is what a reader would have had to do before [[cor-cardinal-absorption]] existed: produce a bijection or a pair of injections for each computation separately. Step 2.1 does all four in one line, and the content of the corollary is exactly that the bookkeeping is unnecessary.

**Why $\aleph_1 \oplus \aleph_0 = \aleph_1$ has no second computation here.** The countable cases are witnessed by explicit maps because $\omega$ is concrete. At $\aleph_1$ there is no comparable explicit bijection to write down, and the only route is through [[thm-hessenberg]], which [[cor-cardinal-absorption]] packages. That is not a gap in this example but the reason the general theorem is worth proving.

**The finite summand does not vanish for a trivial reason.** $5 \sqcup \omega$ does have more elements than $\omega$ in the naive sense: it carries a tagged copy of $\omega$ and five further points. The equality $5 \oplus \aleph_0 = \aleph_0$ says only that the two sets are equinumerous, and what makes that true is that an infinite well-ordered set absorbs finitely many extra points, the same shift that makes an infinite cardinal a limit ordinal in [[thm-cardinal-arithmetic-agrees-with-finite-counting]].

**Order does not matter here, and that is not automatic.** $\oplus$ is commutative, so $5 \oplus \aleph_0$ and $\aleph_0 \oplus 5$ are the same cardinal. The ordinal $+$ on the very same objects is **not** commutative, which is precisely why [[def-cardinal-arithmetic]] gives the cardinal operation its own symbol rather than reusing $+$.
