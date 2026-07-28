---
id: cor-cardinal-absorption
kind: corollary
title: "Absorption: for cardinals $\\kappa, \\lambda$ with $\\kappa$ infinite and $\\lambda \\le \\kappa$, $\\kappa \\oplus \\lambda = \\kappa$, and $\\kappa \\otimes \\lambda = \\kappa$ when $\\lambda \\ne 0$"
status: draft
origin: session
deps: [thm-hessenberg, def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, lem-cardinality-of-a-well-orderable-set, thm-cardinal-arithmetic-agrees-with-finite-counting, def-cardinal, lem-ordinal-trichotomy, lem-ordinal-basics, lem-omega-least-limit-ordinal, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
short: "$\\kappa \\oplus \\lambda = \\kappa \\otimes \\lambda = \\kappa$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $\kappa$ be an infinite cardinal and $\lambda$ a cardinal with
$\lambda \le \kappa$ ([[def-cardinal]]). Then

$$\kappa \oplus \lambda = \kappa, \qquad \text{and} \qquad \kappa \otimes \lambda = \kappa \ \text{ whenever } \lambda \ne 0$$

([[def-cardinal-arithmetic]]). The exception at $\lambda = 0$ is not an artefact:
$\kappa \otimes 0 = 0$.

**This is a theorem of ZF**, inherited from [[thm-hessenberg]], which is
choice free. In particular the ordinary arithmetic of infinite cardinals collapses
completely for $\oplus$ and $\otimes$: below the level of exponentiation, the
larger argument simply swallows the smaller one.

## Facts & Assumptions

**Given:** An infinite cardinal $\kappa$ and a cardinal $\lambda \le \kappa$, in ZF.

[L1] $\kappa \otimes \kappa = \kappa$ for every infinite cardinal $\kappa$ ([[thm-hessenberg]]).

[L2] $\kappa \oplus \lambda = \lvert \kappa \sqcup \lambda\rvert$ and $\kappa \otimes \lambda = \lvert \kappa \times \lambda\rvert$, with $\kappa \sqcup \lambda = (\{0\} \times \kappa) \cup (\{1\} \times \lambda)$ ([[def-cardinal-arithmetic]]).

[L3] For cardinals, $\kappa \le \lambda$ iff $\kappa \preceq \lambda$; $A \preceq B$ with both well-orderable gives $\lvert A\rvert \le \lvert B\rvert$; the unit laws $\kappa \otimes 1 = \kappa$ and $\kappa \otimes 0 = 0$ hold; and $\oplus$, $\otimes$ are monotone in each argument (claims (a), (d), (e) of [[lem-cardinal-arithmetic-basic-laws]]).

[L4] $\lvert X\rvert$ is the least ordinal equinumerous with $X$ and $\lvert \alpha\rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]]).

[L5] Every natural number is a cardinal and $\omega$ is a cardinal, so $0, 1, 2 \in \omega \subseteq \kappa$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[lem-omega-least-limit-ordinal]]).

[L6] Ordinals are comparable, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, trichotomy holds, and $\alpha \subseteq \beta \subseteq \alpha$ forces $\alpha = \beta$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

[L7] A subset inclusion is an injection and a bijection witnesses $\approx$ ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

## Proof

**Proof technique:** direct.

1.1 The map $\xi \mapsto (0,\xi)$ is an injection $\kappa \to \kappa \sqcup \lambda$, so $\kappa \le \kappa \oplus \lambda$ by [L2], [L3] and [L4]. [L2, L3, L4, L7]

1.2 The map $(i,\xi) \mapsto (\xi,i)$ is an injection $\kappa \sqcup \kappa \to \kappa \times \kappa$, since its image lies in $\kappa \times 2$ and $2 \in \omega \subseteq \kappa$ by [L5], and it is injective because both coordinates are recovered from the image. [L5, L7]

1.3 From $\lambda \le \kappa$ and monotonicity, $\kappa \oplus \lambda \le \kappa \oplus \kappa$ and $\kappa \otimes \lambda \le \kappa \otimes \kappa$. [L3]

1.4 If $\lambda \ne 0$ then $1 \le \lambda$ by [L6] and [L5], so $\kappa = \kappa \otimes 1 \le \kappa \otimes \lambda$ by the unit law and monotonicity in [L3]. [L3, L5, L6]

2.1 $\kappa \oplus \kappa \le \kappa$: step 1.2 with [L3] gives $\lvert \kappa \sqcup \kappa\rvert \le \lvert \kappa \times \kappa\rvert$, which by [L2] and [L1] is $\kappa \otimes \kappa = \kappa$. [step 1.2, L1, L2, L3]

3.1 Combining: $\kappa \le \kappa \oplus \lambda \le \kappa \oplus \kappa \le \kappa$ gives $\kappa \oplus \lambda = \kappa$ by [L6]; and for $\lambda \ne 0$, $\kappa \le \kappa \otimes \lambda \le \kappa \otimes \kappa = \kappa$ gives $\kappa \otimes \lambda = \kappa$, while $\kappa \otimes 0 = 0$ by [L3]. [step 1.1, step 1.3, step 1.4, step 2.1, L1, L3, L6] ∎

## Remarks

**What absorption costs.** Nothing beyond [[thm-hessenberg]]: the only extra input is the injection of step 1.2, which folds two copies of $\kappa$ into a rectangle of width $2$. So absorption is choice free wherever Hessenberg's theorem is, that is, for cardinals.

**Why the hypothesis is $\lambda \le \kappa$ and not $\lambda < \kappa$.** The case $\lambda = \kappa$ is the interesting one and is used constantly: $\kappa \oplus \kappa = \kappa$ and $\kappa \otimes \kappa = \kappa$. Stating the corollary with $\le$ avoids a separate appeal to Hessenberg's theorem at every later use.

**Absorption destroys cancellation.** From $\kappa \oplus \lambda = \kappa$ for every $\lambda \le \kappa$ it follows at once that $\oplus$ cannot be cancellative on infinite cardinals, and the companion false statement [[fs-cardinal-addition-is-cancellative]] records exactly that. The same collapse does **not** reach exponentiation, where [[thm-cardinal-power-set-and-cantor]] gives a strict increase at every cardinal.
