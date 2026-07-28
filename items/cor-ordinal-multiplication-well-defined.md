---
id: cor-ordinal-multiplication-well-defined
kind: corollary
title: "Ordinal multiplication exists and is unique, and its values are ordinals"
status: published
origin: session
deps: [lem-recursion-on-the-ordinals, def-ordinal-addition, cor-ordinal-addition-well-defined, def-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "the three clauses determine one ordinal-valued product"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Fix an ordinal $\alpha$ ([[def-ordinal]]). There is **exactly one** class
function $\beta \mapsto \mathrm{p}_\alpha(\beta)$, defined at every ordinal
$\beta$, satisfying the three clauses

$$\mathrm{p}_\alpha(0) = 0, \qquad \mathrm{p}_\alpha(\beta^{+}) = \mathrm{p}_\alpha(\beta) + \alpha, \qquad \mathrm{p}_\alpha(\lambda) = \bigcup\{\, \mathrm{p}_\alpha(\beta) : \beta \in \lambda \,\} \ \ (\lambda \text{ a limit ordinal}),$$

where $+$ is ordinal addition ([[def-ordinal-addition]]), and every value
$\mathrm{p}_\alpha(\beta)$ is an ordinal.

The three clauses are exhaustive and mutually exclusive because every ordinal is
exactly one of $0$, a successor, or a limit ([[def-limit-ordinal]]). This is the
well-definedness obligation discharged before ordinal multiplication is written
down; the operation itself is named in the definition that follows. **The
proof is a theorem of ZF and uses no choice principle.**

## Facts & Assumptions

**Given:** A fixed ordinal $\alpha$ and the axioms of ZF. No choice principle is assumed. For a function $h$, $\operatorname{ran}(h)$ is its range.

[L1] Recursion along the ordinals: for a class function $G$ assigning a set to every function whose domain is an ordinal there is exactly one class function $F$, defined at every ordinal, with $F(\beta) = G(F \restriction \beta)$ for all $\beta$ ([[lem-recursion-on-the-ordinals]]).

[L2] Every ordinal is exactly one of: $0$, a successor ordinal $\delta^{+}$ with $\delta$ uniquely determined, or a limit ordinal ([[def-limit-ordinal]]).

[L3] $\bigcup A$ is an ordinal for every set $A$ of ordinals, and is its least upper bound (claim (e) of [[lem-ordinal-basics]]).

[L4] $\mu + \alpha$ is an ordinal whenever $\mu$ and $\alpha$ are ([[def-ordinal-addition]], [[cor-ordinal-addition-well-defined]]).

[L5] Every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]), and $\{\xi \in \beta_0^{+} : P(\xi)\}$ is such a set whenever $P(\beta_0)$ holds and $P$ is a property of ordinals.

## Proof

**Proof technique:** direct.

1.1 Define a class function $G$ on functions $h$ whose domain is an ordinal $\beta$ by: $G(h) = 0$ if $\beta = 0$; $G(h) = h(\delta) + \alpha$ if $\beta = \delta^{+}$; and $G(h) = \bigcup \operatorname{ran}(h)$ if $\beta$ is a limit ordinal. [construct]

1.2 The three cases are exhaustive and mutually exclusive by [L2], and $\delta$ is determined by $\beta = \delta^{+}$, so $G(h)$ is a well-determined set for every such $h$ and the rule is a formula. [L2, L4]

2.1 By [L1] there is exactly one class function $\mathrm{p}_\alpha$, defined at every ordinal, with $\mathrm{p}_\alpha(\beta) = G(\mathrm{p}_\alpha \restriction \beta)$ for every ordinal $\beta$. [step 1.1, step 1.2, L1]

3.1 Unwinding the three cases of $G$: $\mathrm{p}_\alpha(0) = G(\varnothing) = 0$; $\mathrm{p}_\alpha(\delta^{+}) = (\mathrm{p}_\alpha \restriction \delta^{+})(\delta) + \alpha = \mathrm{p}_\alpha(\delta) + \alpha$, since $\delta \in \delta^{+}$; and for a limit $\lambda$, $\mathrm{p}_\alpha(\lambda) = \bigcup \operatorname{ran}(\mathrm{p}_\alpha \restriction \lambda) = \bigcup\{\mathrm{p}_\alpha(\beta) : \beta \in \lambda\}$. [step 2.1, step 1.1]

4.1 Every value is an ordinal: were $\mathrm{p}_\alpha(\beta_0)$ not an ordinal for some $\beta_0$, [L5] would give a least $\mu \in \beta_0^{+}$ with $\mathrm{p}_\alpha(\mu)$ not an ordinal, and each of the three cases refutes that, since $0$ is an ordinal, $\mathrm{p}_\alpha(\delta^{+}) = \mathrm{p}_\alpha(\delta) + \alpha$ is an ordinal by [L4] because $\delta \in \mu$ makes $\mathrm{p}_\alpha(\delta)$ an ordinal, and $\mathrm{p}_\alpha(\lambda)$ is a union of a set of ordinals, hence an ordinal by [L3]. [step 3.1, L2, L3, L4, L5]

4.2 Uniqueness: a class function $\mathrm{t}$ defined at every ordinal and satisfying the three displayed clauses satisfies $\mathrm{t}(\beta) = G(\mathrm{t} \restriction \beta)$ for every $\beta$, one case at a time, so $\mathrm{t} = \mathrm{p}_\alpha$ by the uniqueness half of [L1]. [step 3.1, step 2.1, L1, L2]

5.1 Hence exactly one class function on the ordinals satisfies the three clauses, and all its values are ordinals. [step 4.1, step 4.2, step 3.1] ∎

## Remarks

**The successor clause adds $\alpha$ on the right.** $\mathrm{p}_\alpha(\beta^{+}) = \mathrm{p}_\alpha(\beta) + \alpha$, not $\alpha + \mathrm{p}_\alpha(\beta)$. Since ordinal addition is not commutative, this is a genuine choice of convention, and it is the one that makes $\alpha \cdot \beta$ come out as "$\beta$ copies of $\alpha$" rather than "$\alpha$ copies of $\beta$" ([[lem-ordinal-product-as-an-order-type]]).

**Nothing here uses a property of $+$.** The proof needs only that $\mu + \alpha$ is an ordinal, which is the content of [[cor-ordinal-addition-well-defined]]. Associativity, monotonicity and the rest are proved later and are not presupposed.
