---
id: lem-recursion-on-the-ordinals
kind: lemma
title: "Transfinite recursion along the ordinals: a class rule determines exactly one operation defined at every ordinal"
status: published
origin: session
deps: [thm-transfinite-recursion, def-ordinal, def-well-order, def-initial-segment, lem-ordinal-basics, lem-ordinal-trichotomy, thm-burali-forti]
justified_by: []
aliases: [lem-class-recursion-on-ordinals]
landmark: true
short: "unique class $F$ on the ordinals with $F(\\beta)=G(F\\restriction\\beta)$"
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
    - title: "Transfinite induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Transfinite_induction"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $G$ be a **class function**: a rule, given by a formula in the language of
set theory, that assigns a set $G(h)$ to every function $h$ whose domain is an
ordinal ([[def-ordinal]]). Then there is a class function $F$, given by a
formula and defined at **every** ordinal, such that

$$F(\beta) = G(F \restriction \beta) \qquad \text{for every ordinal } \beta,$$

and $F$ is the only one: any class function $F'$ defined at every ordinal and
satisfying $F'(\beta) = G(F' \restriction \beta)$ for every ordinal $\beta$
agrees with $F$ at every ordinal. Here $F \restriction \beta$ is the restriction
of $F$ to the set $\beta$ of ordinals below $\beta$, which is a set even though
$F$ is not.

Like [[thm-transfinite-recursion]], this is a **theorem schema** of ZF: one
theorem for each formula defining $G$. **It uses Replacement, inherited from
that theorem, and it uses no form of the Axiom of Choice.**

**Why the published theorem does not already say this.**
[[thm-transfinite-recursion]] is stated for a well-order $(W, <)$, that is for a
**set**, and it delivers one function whose domain is that set. An operation
such as $\alpha + \beta$ has to be defined at every ordinal $\beta$, and the
ordinals are not a set ([[thm-burali-forti]]), so no single instance of the
published theorem defines it. What is proved below is exactly the bridge: the
instances at the individual ordinals cohere, and the coherence is supplied by
the published theorem's own **uniqueness** clause. No new recursion principle is
introduced.

## Facts & Assumptions

**Given:** A class function $G$ as in the statement, and the axioms of ZF. No choice principle is assumed. For an ordinal $\gamma$ we write $(\gamma, \in)$ for $\gamma$ carrying the membership relation.

[A1] $G(h)$ is a well-determined set for every function $h$ whose domain is an ordinal, and the rule is given by a formula.

[L1] Transfinite recursion on a set: for a well-order $(W, <)$ ([[def-well-order]]) and a class function $G$ defined on functions whose domains are proper initial segments of $W$, there is exactly one function $F$ with domain $W$ such that $F(a) = G(F \restriction W_{<a})$ for every $a \in W$ ([[thm-transfinite-recursion]]).

[L2] An ordinal is a transitive set on which $\in$ is a strict well-order ([[def-ordinal]]).

[L3] $W_{<a} = \{x \in W : x < a\}$, and every proper initial segment of a well-order is $W_{<a}$ for exactly one $a$ ([[def-initial-segment]]).

[L4] Every element of an ordinal is an ordinal, $\alpha^{+} = \alpha \cup \{\alpha\}$ is an ordinal, and $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$ (claims (a), (c), (f) of [[lem-ordinal-basics]]).

[L5] Every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 For every ordinal $\gamma$ the pair $(\gamma, \in)$ is a well-order, by clause 2 of the definition of an ordinal. [L2]

1.2 For $\beta \in \gamma$ the initial segment of $(\gamma, \in)$ determined by $\beta$ is $\gamma_{<\beta} = \{x \in \gamma : x \in \beta\} = \beta$, because $\beta \subseteq \gamma$ by transitivity of $\gamma$; so by [L3] the proper initial segments of $(\gamma, \in)$ are exactly the ordinals $\beta \in \gamma$, and a function whose domain is one of them is a function whose domain is an ordinal, to which $G$ applies. [L2, L3, A1]

1.3 If $\xi \in \beta$ then $\xi^{+} \in \beta^{+}$: transitivity of $\beta$ gives $\xi \subseteq \beta$, and $\xi \in \beta$ gives $\{\xi\} \subseteq \beta$, so $\xi^{+} \subseteq \beta$, whence $\xi^{+} \in \beta$ or $\xi^{+} = \beta$ by [L4], and either way $\xi^{+} \in \beta \cup \{\beta\} = \beta^{+}$. [L2, L4]

2.1 Applying [L1] to the well-order $(\gamma, \in)$ and to $G$ yields, for each ordinal $\gamma$, exactly one function $F_\gamma$ with domain $\gamma$ satisfying $F_\gamma(\beta) = G(F_\gamma \restriction \beta)$ for every $\beta \in \gamma$. [step 1.1, step 1.2, L1, A1]

3.1 Coherence: for $\delta \in \gamma$ put $u = F_\gamma \restriction \delta$, a function with domain $\delta$; for $\beta \in \delta$ transitivity of $\delta$ gives $\beta \subseteq \delta$, so $u \restriction \beta = F_\gamma \restriction \beta$ and $u(\beta) = F_\gamma(\beta) = G(F_\gamma \restriction \beta) = G(u \restriction \beta)$, so $u$ satisfies the recursion on $\delta$ and the uniqueness half of [L1] applied to $(\delta, \in)$ gives $F_\gamma \restriction \delta = F_\delta$. [step 2.1, L1, L2]

3.2 Define $F(\beta) := F_{\beta^{+}}(\beta)$, which makes sense because $\beta^{+}$ is an ordinal by [L4] and $\beta \in \beta^{+}$; the defining condition is a formula in $\beta$, so $F$ is a class function defined at every ordinal. [step 2.1, L4, construct]

4.1 For every ordinal $\beta$ and every $\xi \in \beta$ we have $\xi^{+} \in \beta^{+}$, hence $F_{\beta^{+}} \restriction \xi^{+} = F_{\xi^{+}}$ and therefore $F_{\beta^{+}}(\xi) = F_{\xi^{+}}(\xi) = F(\xi)$; so $F \restriction \beta = F_{\beta^{+}} \restriction \beta$, which is a set because $F_{\beta^{+}}$ is. [step 1.3, step 3.1, step 3.2]

5.1 Consequently $F(\beta) = F_{\beta^{+}}(\beta) = G(F_{\beta^{+}} \restriction \beta) = G(F \restriction \beta)$ for every ordinal $\beta$, which is the required recursion equation. [step 4.1, step 3.2]

6.1 For uniqueness, let $F'$ be a class function defined at every ordinal with $F'(\beta) = G(F' \restriction \beta)$ for every $\beta$, and suppose $F(\beta_0) \ne F'(\beta_0)$ for some ordinal $\beta_0$; then $D = \{\xi \in \beta_0^{+} : F(\xi) \ne F'(\xi)\}$ is a set by Separation, it is a set of ordinals by [L4], and it is nonempty because $\beta_0 \in D$, so it has an $\in$-least element $\mu$ by [L5]. [step 5.1, L4, L5]

7.1 Every $\xi \in \mu$ lies in $\beta_0^{+}$, because $\mu \in \beta_0^{+}$ gives $\mu \subseteq \beta_0^{+}$, and $\xi \notin D$ by minimality of $\mu$, so $F(\xi) = F'(\xi)$; hence $F \restriction \mu = F' \restriction \mu$ and $F(\mu) = G(F \restriction \mu) = G(F' \restriction \mu) = F'(\mu)$, contradicting $\mu \in D$. [step 6.1, step 5.1, L4]

8.1 No such $\beta_0$ exists, so $F$ and $F'$ agree at every ordinal, and $F$ is the unique class function on the ordinals satisfying $F(\beta) = G(F \restriction \beta)$. [step 7.1, step 6.1, step 5.1] ∎

## Remarks

**What is spent.** Replacement, through [[thm-transfinite-recursion]], and Separation, at step 6.1. No choice principle appears anywhere, for the same reason as in the published theorem: at every stage the object used is the *unique* function with a given domain, never one selected from many.

**Three cases, not two.** The lemma says nothing about how $G$ is given. In practice $G$ is defined by the three-way split of [[def-limit-ordinal]] — a value at $0$, a rule at a successor, a rule at a limit — and that split is exhaustive and exclusive for every ordinal. Writing "successor or limit" and forgetting $0$ is the standard way to define an operation that is undefined at $0$.

**Why the restriction is a set.** Step 4.1 is not bookkeeping. $F$ is a proper class, so "$F \restriction \beta$" needs an argument, and the argument is that it coincides with the restriction of the *set* function $F_{\beta^{+}}$. Without it, $G(F \restriction \beta)$ would not even be an application of $G$ to a set.

**The naming.** Some texts state this as "transfinite recursion on the class of ordinals" and prove it directly by a least-counterexample argument. The route taken here spends nothing new: it reuses the published theorem at each ordinal and glues, and the glue is that theorem's uniqueness clause.
