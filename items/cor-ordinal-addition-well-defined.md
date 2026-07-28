---
id: cor-ordinal-addition-well-defined
kind: corollary
title: "Ordinal addition exists and is unique: the clauses at $0$, at a successor and at a limit determine one operation, and its values are ordinals"
status: draft
origin: session
deps: [lem-recursion-on-the-ordinals, def-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "the three clauses determine one ordinal-valued operation"
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
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Fix an ordinal $\alpha$ ([[def-ordinal]]). There is **exactly one** class
function $\beta \mapsto \mathrm{s}_\alpha(\beta)$, defined at every ordinal
$\beta$, satisfying the three clauses

$$\mathrm{s}_\alpha(0) = \alpha, \qquad \mathrm{s}_\alpha(\beta^{+}) = \big(\mathrm{s}_\alpha(\beta)\big)^{+}, \qquad \mathrm{s}_\alpha(\lambda) = \bigcup\{\, \mathrm{s}_\alpha(\beta) : \beta \in \lambda \,\} \ \ (\lambda \text{ a limit ordinal}),$$

and every value $\mathrm{s}_\alpha(\beta)$ is an ordinal.

The three clauses are exhaustive and mutually exclusive, because every ordinal
is exactly one of $0$, a successor, or a limit ([[def-limit-ordinal]]). The
union in the third clause is the **least upper bound** of the earlier values
([[lem-ordinal-basics]], claim (e)), so the limit clause reads "take the
supremum of what has been built so far".

This is the well-definedness obligation discharged before ordinal addition is
written down; the operation itself is named in the definition that follows. **The
proof is a theorem of ZF and uses no choice principle.**

## Facts & Assumptions

**Given:** A fixed ordinal $\alpha$ and the axioms of ZF. No choice principle is assumed. For a function $h$, $\operatorname{ran}(h)$ is its range.

[L1] Recursion along the ordinals: for a class function $G$ assigning a set to every function whose domain is an ordinal there is exactly one class function $F$, defined at every ordinal, with $F(\beta) = G(F \restriction \beta)$ for all $\beta$ ([[lem-recursion-on-the-ordinals]]).

[L2] Every ordinal is exactly one of: $0$, a successor ordinal $\delta^{+}$ with $\delta$ uniquely determined, or a limit ordinal ([[def-limit-ordinal]]).

[L3] $\mu^{+}$ is an ordinal whenever $\mu$ is, and $\bigcup A$ is an ordinal for every set $A$ of ordinals, and is their least upper bound (claims (c) and (e) of [[lem-ordinal-basics]]).

[L4] Every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]), and $\{\xi \in \beta_0^{+} : P(\xi)\}$ is such a set whenever $P(\beta_0)$ holds and $P$ is a property of ordinals.

## Proof

**Proof technique:** direct.

1.1 Define a class function $G$ on functions $h$ whose domain is an ordinal $\beta$ by: $G(h) = \alpha$ if $\beta = 0$; $G(h) = (h(\delta))^{+}$ if $\beta = \delta^{+}$; and $G(h) = \bigcup \operatorname{ran}(h)$ if $\beta$ is a limit ordinal. [construct]

1.2 The three cases are exhaustive and mutually exclusive by [L2], and $\delta$ is determined by $\beta = \delta^{+}$, so $G(h)$ is a well-determined set for every such $h$ and the rule is a formula. [L2]

2.1 By [L1] there is exactly one class function $\mathrm{s}_\alpha$, defined at every ordinal, with $\mathrm{s}_\alpha(\beta) = G(\mathrm{s}_\alpha \restriction \beta)$ for every ordinal $\beta$. [step 1.1, step 1.2, L1]

3.1 Unwinding the three cases of $G$: $\mathrm{s}_\alpha(0) = G(\varnothing) = \alpha$; $\mathrm{s}_\alpha(\delta^{+}) = ((\mathrm{s}_\alpha \restriction \delta^{+})(\delta))^{+} = (\mathrm{s}_\alpha(\delta))^{+}$, since $\delta \in \delta^{+}$; and for a limit $\lambda$, $\mathrm{s}_\alpha(\lambda) = \bigcup \operatorname{ran}(\mathrm{s}_\alpha \restriction \lambda) = \bigcup\{\mathrm{s}_\alpha(\beta) : \beta \in \lambda\}$. [step 2.1, step 1.1]

4.1 Every value is an ordinal: were $\mathrm{s}_\alpha(\beta_0)$ not an ordinal for some $\beta_0$, [L4] would give a least $\mu \in \beta_0^{+}$ with $\mathrm{s}_\alpha(\mu)$ not an ordinal, and each of the three cases refutes that, since $\mathrm{s}_\alpha(0) = \alpha$ is an ordinal, $\mathrm{s}_\alpha(\delta^{+}) = (\mathrm{s}_\alpha(\delta))^{+}$ is an ordinal by [L3] because $\delta \in \mu$ makes $\mathrm{s}_\alpha(\delta)$ an ordinal, and $\mathrm{s}_\alpha(\lambda) = \bigcup\{\mathrm{s}_\alpha(\beta) : \beta \in \lambda\}$ is a union of a set of ordinals, hence an ordinal by [L3]. [step 3.1, L2, L3, L4]

4.2 Uniqueness: a class function $\mathrm{t}$ defined at every ordinal and satisfying the three displayed clauses satisfies $\mathrm{t}(\beta) = G(\mathrm{t} \restriction \beta)$ for every $\beta$, one case at a time, so $\mathrm{t} = \mathrm{s}_\alpha$ by the uniqueness half of [L1]. [step 3.1, step 2.1, L1, L2]

5.1 Hence exactly one class function on the ordinals satisfies the three clauses, and all its values are ordinals. [step 4.1, step 4.2, step 3.1] ∎

## Remarks

**Why a bridge lemma is used and not [[thm-transfinite-recursion]] directly.** The published recursion theorem is stated for a well-order, that is for a **set**, and delivers a function whose domain is that set. What is needed here is a rule defined at *every* ordinal, and the ordinals are not a set. [[lem-recursion-on-the-ordinals]] is exactly that bridge, and it is proved from the published theorem's uniqueness clause.

**Three cases, and the one that is usually forgotten.** Writing the recursion with a successor clause and a limit clause only leaves the operation undefined at $0$, since $0$ is neither. The published [[def-limit-ordinal]] states the three-way split in the form used at step 1.2, and it is cited rather than assumed.

**The same argument serves multiplication and exponentiation.** Only the three clauses of $G$ change. The two corollaries later on this page repeat this proof with different clauses, and the exponentiation case additionally restricts the limit clause to $0 < \beta < \lambda$; see [[cor-ordinal-exponentiation-well-defined]] for why that restriction is not optional.
