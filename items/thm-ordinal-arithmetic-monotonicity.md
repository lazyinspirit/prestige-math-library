---
id: thm-ordinal-arithmetic-monotonicity
kind: theorem
title: "Monotonicity of ordinal $+$ and $\\cdot$: strictly increasing and continuous in the right argument, weakly increasing in the left, with left cancellation, and the identities $0 + \\beta = \\beta$ and $1 \\cdot \\beta = \\beta$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordinal-addition, def-ordinal-multiplication, thm-transfinite-induction, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal]
justified_by: []
aliases: [thm-ordinal-monotonicity]
landmark: true
short: "the monotonicity, cancellation and continuity laws for $+$ and $\\cdot$"
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
    - title: "R. Moosa, Set Theory course notes"
      url: "https://www.math.uwaterloo.ca/~rmoosa/pm433-notes.pdf"
    - title: "Open Logic Project, Open Logic Text"
      url: "https://builds.openlogicproject.org/open-logic-complete.pdf"
pipeline_run: null
---

## Statement

Let $\alpha$, $\beta$, $\gamma$ be ordinals ([[def-ordinal]]) and let $\lambda$
be a limit ordinal ([[def-limit-ordinal]]), with $+$ and $\cdot$ as in
[[def-ordinal-addition]] and [[def-ordinal-multiplication]]. Then:

**(a) Identities.** $\beta + 0 = 0 + \beta = \beta$, $\beta + 1 = \beta^{+}$,
$\beta \cdot 0 = 0 \cdot \beta = 0$, and $\beta \cdot 1 = 1 \cdot \beta = \beta$.

**(b) Strictly increasing on the right, for $+$.**
$\beta \in \gamma$ implies $\alpha + \beta \in \alpha + \gamma$; equivalently
$\beta < \gamma \Rightarrow \alpha + \beta < \alpha + \gamma$. Hence
**left cancellation**: $\alpha + \beta = \alpha + \gamma$ implies
$\beta = \gamma$; and $\alpha \le \alpha + \beta$, with equality exactly when
$\beta = 0$.

**(c) Weakly increasing on the left, for $+$.** $\alpha \le \beta$ implies
$\alpha + \gamma \le \beta + \gamma$, and $\beta \le \alpha + \beta$. **Only the
weak inequality holds**, and that is best possible: $0 < 1$ while
$0 + \omega = 1 + \omega$, which is refuted in full among this page's false
statements.

**(d) Strictly increasing on the right, for $\cdot$.** If $\alpha > 0$ then
$\beta < \gamma$ implies $\alpha \cdot \beta < \alpha \cdot \gamma$. Hence for
$\alpha > 0$: $\alpha \cdot \beta = \alpha \cdot \gamma$ implies
$\beta = \gamma$, and $\alpha \le \alpha \cdot \beta$ whenever $\beta \ge 1$.
Also $\alpha \cdot \beta = 0$ if and only if $\alpha = 0$ or $\beta = 0$.

**(e) Weakly increasing on the left, for $\cdot$.** $\alpha \le \beta$ implies
$\alpha \cdot \gamma \le \beta \cdot \gamma$.

**(f) Continuity at limits.** $\alpha + \lambda = \sup\{\alpha + \xi : \xi \in \lambda\}$
and $\alpha \cdot \lambda = \sup\{\alpha \cdot \xi : \xi \in \lambda\}$, which
are the defining clauses restated as supremum properties. More usefully, if
$D \subseteq \lambda$ is nonempty with $\sup D = \lambda$, then

$$\alpha + \lambda = \sup\{\, \alpha + \eta : \eta \in D \,\}, \qquad \text{and, if } \alpha > 0, \quad \alpha \cdot \lambda = \sup\{\, \alpha \cdot \eta : \eta \in D \,\}.$$

**(g) Limits go to limits.** $\alpha + \lambda$ is a limit ordinal, and
$\alpha \cdot \lambda$ is a limit ordinal whenever $\alpha > 0$.

Throughout, $\sup A = \bigcup A$ for a set $A$ of ordinals ([[lem-ordinal-basics]],
claim (e)). **Everything here is a theorem of ZF and uses no choice principle.**

## Facts & Assumptions

**Given:** Ordinals $\alpha$, $\beta$, $\gamma$ and a limit ordinal $\lambda$. The order is $\mu < \nu :\iff \mu \in \nu$ and $\mu \le \nu :\iff \mu \subseteq \nu$.

[L1] $\alpha + 0 = \alpha$, $\alpha + \delta^{+} = (\alpha + \delta)^{+}$, and $\alpha + \lambda = \bigcup\{\alpha + \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-addition]]).

[L2] $\alpha \cdot 0 = 0$, $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$, and $\alpha \cdot \lambda = \bigcup\{\alpha \cdot \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-multiplication]]).

[L3] $\mu^{+}$ is an ordinal; $\bigcup A$ is an ordinal and is the least upper bound of any set $A$ of ordinals; $\mu \subseteq \nu$ if and only if $\mu \in \nu$ or $\mu = \nu$; and $\mu \notin \mu$ (claims (b), (c), (e), (f) of [[lem-ordinal-basics]]).

[L4] Exactly one of $\mu \in \nu$, $\mu = \nu$, $\nu \in \mu$ holds, and every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]).

[L5] Every ordinal is exactly one of $0$, a successor, or a limit; and a nonzero ordinal $\lambda$ is a limit if and only if $\xi \in \lambda$ implies $\xi^{+} \in \lambda$, in which case $\bigcup \lambda = \lambda$ ([[def-limit-ordinal]]).

[L6] Transfinite induction over the ordinals: if a property $P$ of ordinals fails at some $\beta_0$, apply [[thm-transfinite-induction]] to the well-order $(\beta_0^{+}, \in)$, which is a well-order by clause 2 of [[def-ordinal]] and claim (c) of [[lem-ordinal-basics]], and to $S = \{\xi \in \beta_0^{+} : P(\xi)\}$, whose initial segment below $\xi$ is $\xi$; so if $P$ holds at $\xi$ whenever it holds at every ordinal in $\xi$, then $P$ holds at every ordinal.

## Proof

**Proof technique:** direct.

1.1 For ordinals $\mu, \nu$: $\mu \in \nu$ if and only if $\mu^{+} \subseteq \nu$, since $\mu \in \nu$ gives $\mu \subseteq \nu$ by transitivity and $\{\mu\} \subseteq \nu$, while $\mu^{+} \subseteq \nu$ gives $\mu \in \nu$; consequently $\mu < \nu \iff \mu^{+} \le \nu$, and $\mu \le \nu$ implies $\mu^{+} \le \nu^{+}$, because $\mu \le \nu < \nu^{+}$ gives $\mu < \nu^{+}$. [L3, L4]

1.2 For a set $A$ of ordinals $\sup A = \bigcup A$ is its least upper bound, so if every member of $A$ is $\le$ some member of $B$ then $\sup A \le \sup B$; for a limit ordinal $\lambda$ one has $\bigcup \lambda = \lambda$, $0 \in \lambda$ (because $\varnothing \subseteq \lambda$ and $\varnothing \ne \lambda$), and $\xi \in \lambda \Rightarrow \xi^{+} \in \lambda$, so also $1 = 0^{+} \in \lambda$. [L3, L5]

1.3 Directly from the clauses: $\beta + 0 = \beta$; $\beta + 1 = \beta + 0^{+} = (\beta + 0)^{+} = \beta^{+}$; $\beta \cdot 0 = 0$; and $\beta \cdot 1 = \beta \cdot 0^{+} = \beta \cdot 0 + \beta = 0 + \beta$. [L1, L2]

2.1 $0 + \beta = \beta$ for every $\beta$, by induction: at $0$ this is $0 + 0 = 0$; at $\delta^{+}$, $0 + \delta^{+} = (0 + \delta)^{+} = \delta^{+}$; and at a limit $\lambda$, $0 + \lambda = \bigcup\{0 + \xi : \xi \in \lambda\} = \bigcup \lambda = \lambda$. [step 1.2, step 1.3, L1, L5, L6]

2.2 $0 \cdot \beta = 0$ for every $\beta$, by induction: at $0$ this is [L2]; at $\delta^{+}$, $0 \cdot \delta^{+} = 0 \cdot \delta + 0 = 0 + 0 = 0$; and at a limit $\lambda$, $0 \cdot \lambda = \bigcup\{0\} = 0$. [step 1.2, step 1.3, L2, L5, L6]

2.3 $1 \cdot \beta = \beta$ for every $\beta$, by induction: at $0$ this is [L2]; at $\delta^{+}$, $1 \cdot \delta^{+} = 1 \cdot \delta + 1 = \delta + 1 = \delta^{+}$ by step 1.3; and at a limit $\lambda$, $1 \cdot \lambda = \bigcup\{\xi : \xi \in \lambda\} = \bigcup \lambda = \lambda$. [step 1.2, step 1.3, L2, L5, L6]

2.4 Claim (b), the inequality: by induction on $\gamma$, for every $\beta \in \gamma$ one has $\alpha + \beta \in \alpha + \gamma$. At $\gamma = 0$ there is nothing to prove. At $\gamma = \delta^{+}$, $\beta \in \delta^{+}$ gives $\beta \le \delta$ by [L3], so $\alpha + \beta \le \alpha + \delta$, using the claim at $\delta$ when $\beta \in \delta$, and $\alpha + \delta \in (\alpha + \delta)^{+} = \alpha + \delta^{+}$. At $\gamma = \lambda$ a limit, $\beta \in \lambda$ gives $\beta^{+} \in \lambda$ by step 1.2, and $\alpha + \beta \in (\alpha + \beta)^{+} = \alpha + \beta^{+} \subseteq \alpha + \lambda$. [step 1.1, step 1.2, L1, L3, L5, L6]

2.5 Claim (c), the inequality $\alpha + \gamma \le \beta + \gamma$ for $\alpha \le \beta$: by induction on $\gamma$. At $\gamma = 0$ it is $\alpha \le \beta$. At $\gamma = \delta^{+}$, the claim at $\delta$ gives $\alpha + \delta \le \beta + \delta$, hence $(\alpha + \delta)^{+} \le (\beta + \delta)^{+}$ by step 1.1. At $\gamma = \lambda$ a limit, every $\alpha + \xi$ with $\xi \in \lambda$ is $\le \beta + \xi$, so the suprema compare by step 1.2. [step 1.1, step 1.2, L1, L5, L6]

3.1 $\alpha \cdot 1 = \alpha$, since $\alpha \cdot 1 = 0 + \alpha = \alpha$ by step 1.3 and step 2.1; together with step 1.3 and steps 2.1 to 2.3 this proves claim (a). [step 1.3, step 2.1, step 2.2, step 2.3]

3.2 Left cancellation for $+$: if $\beta \ne \gamma$ then $\beta \in \gamma$ or $\gamma \in \beta$ by [L4], so $\alpha + \beta \ne \alpha + \gamma$ by step 2.4 and [L3]; and $\alpha = \alpha + 0 \le \alpha + \beta$ with equality exactly when $\beta = 0$, again by step 2.4. This completes claim (b). [step 2.4, step 1.3, L3, L4]

3.3 $\beta \le \alpha + \beta$: since $0 \le \alpha$, step 2.5 gives $0 + \beta \le \alpha + \beta$, and $0 + \beta = \beta$ by step 2.1. This completes claim (c). [step 2.5, step 2.1, L3]

3.4 Claim (d), the inequality: let $\alpha > 0$; by induction on $\gamma$, for every $\beta \in \gamma$ one has $\alpha \cdot \beta \in \alpha \cdot \gamma$. At $\gamma = 0$ there is nothing to prove. At $\gamma = \delta^{+}$, $\beta \le \delta$ gives $\alpha \cdot \beta \le \alpha \cdot \delta$ using the claim at $\delta$, and $\alpha \cdot \delta = \alpha \cdot \delta + 0 \in \alpha \cdot \delta + \alpha = \alpha \cdot \delta^{+}$ by step 2.4 applied to $0 \in \alpha$. At $\gamma = \lambda$ a limit, $\beta^{+} \in \lambda$ by step 1.2 and $\alpha \cdot \beta \in \alpha \cdot \beta^{+} \subseteq \alpha \cdot \lambda$. [step 2.4, step 1.2, step 1.3, L2, L3, L5, L6]

3.5 Claim (e): let $\alpha \le \beta$; by induction on $\gamma$. At $\gamma = 0$ both sides are $0$. At $\gamma = \delta^{+}$, the claim at $\delta$ gives $\alpha \cdot \delta \le \beta \cdot \delta$, so $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha \le \beta \cdot \delta + \alpha \le \beta \cdot \delta + \beta = \beta \cdot \delta^{+}$, the first inequality by step 2.5 and the second by step 2.4. At $\gamma = \lambda$ a limit, the suprema compare by step 1.2. [step 2.4, step 2.5, step 1.2, L2, L5, L6]

4.1 The rest of claim (d): for $\alpha > 0$, $\beta \ne \gamma$ gives $\alpha \cdot \beta \ne \alpha \cdot \gamma$ by step 3.4 and [L4], which is cancellation; $\alpha = \alpha \cdot 1 \le \alpha \cdot \beta$ for $1 \le \beta$ by step 3.4 and step 3.1; and $\alpha \cdot \beta = 0$ forces $\alpha = 0$ or $\beta = 0$, since $\alpha > 0$ and $\beta > 0$ give $\alpha \cdot \beta \ge \alpha \cdot 1 = \alpha > 0$, while $\alpha = 0$ or $\beta = 0$ each give $0$ by step 2.2 and [L2]. [step 3.4, step 3.1, step 2.2, L2, L4]

4.2 Claim (f): the first two identities are [L1] and [L2] with $\sup = \bigcup$. For the refinement, let $D \subseteq \lambda$ be nonempty with $\sup D = \lambda$; then $\{\alpha + \eta : \eta \in D\} \subseteq \{\alpha + \xi : \xi \in \lambda\}$ gives $\le$, and conversely each $\xi \in \lambda = \bigcup D$ lies in some $\eta \in D$, so $\alpha + \xi < \alpha + \eta$ by step 2.4 and the suprema compare by step 1.2; the same argument with step 3.4 in place of step 2.4 gives the multiplicative half when $\alpha > 0$. [step 3.4, step 2.4, step 1.2, L1, L2, L3]

4.3 Claim (g): $\alpha + \lambda \ne 0$, because $1 \in \lambda$ by step 1.2 and so $\alpha^{+} = \alpha + 1 \le \alpha + \lambda$ by step 2.4 and step 1.3; and $\alpha + \lambda$ is not a successor, since $\alpha + \lambda = \mu^{+}$ would put $\mu \in \bigcup\{\alpha + \xi : \xi \in \lambda\}$, hence $\mu \in \alpha + \xi$ for some $\xi \in \lambda$, whence $\mu^{+} \le \alpha + \xi < \alpha + \xi^{+} \le \alpha + \lambda = \mu^{+}$ by step 1.1 and step 2.4, which [L3] forbids; the same argument with step 3.4 in place of step 2.4, and $\alpha \cdot 1 = \alpha > 0$ in place of $\alpha + 1$, shows $\alpha \cdot \lambda$ is a limit ordinal when $\alpha > 0$. [step 3.4, step 2.4, step 1.1, step 1.2, step 1.3, L1, L2, L3, L5]

5.1 Claims (a) to (g) are established. [step 4.1, step 4.2, step 4.3, step 3.1, step 3.2, step 3.3, step 3.5] ∎

## Remarks

**Which asymmetries are real.** Strictness holds on the right and fails on the left, for both operations. The failures are not pathologies to be worked around; they are the content of $1 + \omega = \omega$ and $2 \cdot \omega = \omega$, and they are exhibited as false statements later on this page. Cancellation therefore holds on the left only: $\alpha + \beta = \alpha + \gamma$ gives $\beta = \gamma$, whereas $\beta + \alpha = \gamma + \alpha$ does not, since $0 + \omega = 1 + \omega$.

**Continuity is what later "least such ordinal" arguments consume.** Clause (f) in its refined form says that to evaluate $\alpha + \lambda$ or $\alpha \cdot \lambda$ it is enough to run over any set unbounded in $\lambda$, not over all of $\lambda$. That is the step used in [[thm-ordinal-multiplication-associative-and-left-distributive]], in [[thm-ordinal-exponent-laws]] and again in [[thm-cantor-normal-form]], each time to move a supremum past an operation.

**Clause (g) is what makes the division algorithm work.** In [[thm-ordinal-division-with-remainder]] the least $\eta$ with $\beta < \alpha \cdot \eta$ has to be a successor, and the reason is exactly that $\alpha \cdot \lambda$ is a limit, so the strict inequality cannot first appear at a limit stage.

**No completeness is assumed.** Every supremum here is a union of a set of ordinals, an ordinal by claim (e) of [[lem-ordinal-basics]]. The ordinals are closed under suprema of sets for free, which is what makes the limit clauses legitimate in the first place.
