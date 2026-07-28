---
id: thm-semicontinuity-level-set-characterisation
kind: theorem
title: "$f$ is upper semicontinuous on $A$ if and only if $\\{x \\in A : f(x) < \\alpha\\}$ is relatively open in $A$ for every real $\\alpha$, lower semicontinuous if and only if $\\{x \\in A : f(x) > \\alpha\\}$ is, and continuous if and only if it is both"
status: draft
origin: session
deps: [def-semicontinuity, def-continuity-real, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "semicontinuity by level sets"
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
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Call $S \subseteq A$
**relatively open in $A$** when $S = U \cap A$ for some open
$U \subseteq \mathbb{R}$ ([[def-open-and-closed-in-r]]). Then:

1. $f$ is upper semicontinuous on $A$ ([[def-semicontinuity]]) **if and only if**
   $\{\, x \in A : f(x) < \alpha \,\}$ is relatively open in $A$ for every real
   $\alpha$;
2. $f$ is lower semicontinuous on $A$ **if and only if**
   $\{\, x \in A : f(x) > \alpha \,\}$ is relatively open in $A$ for every real
   $\alpha$;
3. $f$ is continuous on $A$ ([[def-continuity-real]]) **if and only if** both
   families of sets are relatively open.

**The open set is produced canonically, not chosen.** For each $\alpha$ the
proof exhibits one specific open $U_\alpha \subseteq \mathbb{R}$ with
$U_\alpha \cap A = \{f < \alpha\}$, namely the set of reals $y$ admitting a
radius $\rho$ with $A \cap N_\rho(y) \subseteq \{f < \alpha\}$. No choice of a
radius per point is made, which matters because the level set may be
uncountable.

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$.

[L1] $f$ is upper semicontinuous at $c \in A$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $f(x) < f(c) + \varepsilon$ for every $x \in A \cap N_\delta(c)$; lower semicontinuity is the same with $f(x) > f(c) - \varepsilon$; and continuity at $c$ is the conjunction of the two ([[def-semicontinuity]], [[def-continuity-real]]).

[L2] $U \subseteq \mathbb{R}$ is open exactly when every $y \in U$ has a real $\rho > 0$ with $N_\rho(y) \subseteq U$; and if $|z - y| < \rho/2$ then $N_{\rho/2}(z) \subseteq N_\rho(y)$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] $-f$ is lower semicontinuous at $c$ exactly when $f$ is upper semicontinuous at $c$, and $\{x \in A : -f(x) < \alpha\} = \{x \in A : f(x) > -\alpha\}$ ([[def-semicontinuity]]).

## Proof

**Proof technique:** direct.

1.1 Fix a real $\alpha$ and put $S_\alpha := \{\, x \in A : f(x) < \alpha \,\}$ and $U_\alpha := \{\, y \in \mathbb{R} : A \cap N_\rho(y) \subseteq S_\alpha \ \text{for some real } \rho > 0 \,\}$. [construct]

1.2 Conversely suppose every $S_\alpha$ is relatively open in $A$, say $S_\alpha = U \cap A$ with $U$ open, and let $c \in A$ and $\varepsilon > 0$ be real. Put $\alpha := f(c) + \varepsilon$; then $f(c) < \alpha$, so $c \in S_\alpha = U \cap A$, and there is a real $\delta > 0$ with $N_\delta(c) \subseteq U$. [L2]

2.1 $U_\alpha$ is open: if $y \in U_\alpha$ with witness $\rho$ and $z \in N_{\rho/2}(y)$, then $A \cap N_{\rho/2}(z) \subseteq A \cap N_\rho(y) \subseteq S_\alpha$, so $z \in U_\alpha$ with witness $\rho/2$; hence $N_{\rho/2}(y) \subseteq U_\alpha$. [step 1.1, L2]

2.2 $U_\alpha \cap A \subseteq S_\alpha$: if $y \in U_\alpha \cap A$ with witness $\rho$ then $y \in A \cap N_\rho(y) \subseteq S_\alpha$. [step 1.1]

2.3 Suppose $f$ is upper semicontinuous on $A$ and let $c \in S_\alpha$. Apply the definition at $c$ with $\varepsilon := \alpha - f(c) > 0$: there is a real $\delta > 0$ with $f(x) < f(c) + \varepsilon = \alpha$ for every $x \in A \cap N_\delta(c)$, that is $A \cap N_\delta(c) \subseteq S_\alpha$; so $c \in U_\alpha$. [step 1.1, L1]

3.1 Hence $S_\alpha \subseteq U_\alpha \cap A$, and with step 2.2 this gives $S_\alpha = U_\alpha \cap A$, a relatively open subset of $A$; since $\alpha$ was arbitrary, one direction of claim 1 holds. [step 2.2, step 2.3]

4.1 With $\delta$ as in step 1.2, every $x \in A \cap N_\delta(c)$ lies in $U \cap A = S_\alpha$, so $f(x) < \alpha = f(c) + \varepsilon$. As $c$ and $\varepsilon$ were arbitrary, $f$ is upper semicontinuous on $A$, which completes claim 1. [step 3.1, step 1.2, L1]

5.1 Claim 2 follows by applying claim 1 to $-f$: $f$ is lower semicontinuous on $A$ exactly when $-f$ is upper semicontinuous on $A$, exactly when $\{x \in A : -f(x) < \beta\}$ is relatively open for every real $\beta$, and that set is $\{x \in A : f(x) > -\beta\}$; as $\beta$ ranges over the reals so does $-\beta$. [step 4.1, L3]

6.1 Claim 3 follows: $f$ is continuous on $A$ exactly when it is both upper and lower semicontinuous on $A$, and by claims 1 and 2 that is exactly the conjunction of the two families of sets being relatively open. [step 4.1, step 5.1, L1] ∎

## Remarks

- **Why "relatively" open and not open.** $S_\alpha$ is a subset of $A$, so it
  cannot be open in $\mathbb{R}$ unless $A$ is; the correct statement is the one
  above, exactly as in [[thm-continuity-preimage-characterisation]], where the
  same phrase is fixed inline for the same reason. For $A = \mathbb{R}$ the
  qualifier disappears and the level sets are open outright.

- **The strict inequalities are not interchangeable with the weak ones.** Upper
  semicontinuity says the strict sublevel sets are relatively open, equivalently
  that the sets $\{f \ge \alpha\}$ are relatively closed. It does **not** say
  that the sets $\{f \le \alpha\}$ are relatively closed; the indicator of a
  closed set is upper semicontinuous while $\{f \le 0\}$ is the complement of
  that closed set, which is relatively open and generally not closed.
