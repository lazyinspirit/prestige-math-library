---
id: lem-oscillation-superlevel-sets-are-closed
kind: lemma
title: "For every real $\\varepsilon > 0$ the set $\\{\\,x \\in A : \\omega_f(x) \\ge \\varepsilon\\,\\}$ is the intersection with $A$ of a closed subset of $\\mathbb{R}$; in particular it is closed in $\\mathbb{R}$ when $A = \\mathbb{R}$"
status: published
origin: session
deps: [def-oscillation, def-open-and-closed-in-r, def-neighbourhood-r, def-extended-reals, lem-extended-reals-complete]
justified_by: []
aliases: []
landmark: false
short: "$\\{\\omega_f \\ge \\varepsilon\\}$ is relatively closed"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Oscillation (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Oscillation_(mathematics)"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let
$\varepsilon \in \mathbb{R}$ with $\varepsilon > 0$. Put

$$E_\varepsilon \;:=\; \{\, x \in A : \omega_f(x) \ge \varepsilon \,\}$$

([[def-oscillation]]). Then there is a **closed** $G \subseteq \mathbb{R}$
([[def-open-and-closed-in-r]]) with

$$E_\varepsilon \;=\; A \cap G .$$

In particular, if $A = \mathbb{R}$ then $E_\varepsilon$ is itself a closed
subset of $\mathbb{R}$.

**The set $G$ is produced explicitly and does not depend on any choice**: it is
the complement of

$$U \;:=\; \{\, y \in \mathbb{R} : \omega_f(A \cap N_\rho(y)) < \varepsilon \ \text{ for some real } \rho > 0 \,\},$$

which the proof shows to be open. Note that $y$ ranges over all of $\mathbb{R}$
here and not only over $A$; the expression $\omega_f(A \cap N_\rho(y))$ is the
oscillation of $f$ on a subset of $A$ and makes sense for every real $y$, taking
the value $\sup \varnothing = -\infty$ when $A \cap N_\rho(y) = \varnothing$
([[def-oscillation]], [[lem-extended-reals-complete]]).

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, and a real $\varepsilon > 0$.

[L1] $\omega_f(S) = \sup\{|f(x) - f(y)| : x, y \in S\}$ in $\overline{\mathbb{R}}$, and $\omega_f(S) \le \omega_f(T)$ whenever $S \subseteq T \subseteq A$; for $c \in A$, $\omega_f(c) = \inf\{\omega_f(A \cap N_\delta(c)) : \delta > 0\}$ ([[def-oscillation]], [[def-extended-reals]]).

[L2] In $\overline{\mathbb{R}}$ every subset has a greatest lower bound; an infimum is $\ge$ an extended real $\ell$ exactly when $\ell$ bounds the set from below, and the infimum is $\le$ every member of the set ([[lem-extended-reals-complete]]).

[L3] $N_\delta(x) = \{y : |y - x| < \delta\}$; if $|y - x| < \rho/2$ then $N_{\rho/2}(y) \subseteq N_\rho(x)$, since $|z - y| < \rho/2$ gives $|z - x| \le |z - y| + |y - x| < \rho$ ([[def-neighbourhood-r]]).

[L4] $U \subseteq \mathbb{R}$ is open when every point of $U$ has a neighbourhood contained in $U$, and $G \subseteq \mathbb{R}$ is closed exactly when $\mathbb{R} \setminus G$ is open ([[def-open-and-closed-in-r]]).

## Proof

**Proof technique:** direct.

1.1 Define $U := \{\, y \in \mathbb{R} : \omega_f(A \cap N_\rho(y)) < \varepsilon$ for some real $\rho > 0 \,\}$ and $G := \mathbb{R} \setminus U$. [construct]

2.1 $U$ is open. Let $y \in U$ with witness $\rho > 0$, and let $z \in N_{\rho/2}(y)$. Then $N_{\rho/2}(z) \subseteq N_\rho(y)$, hence $A \cap N_{\rho/2}(z) \subseteq A \cap N_\rho(y)$, hence $\omega_f(A \cap N_{\rho/2}(z)) \le \omega_f(A \cap N_\rho(y)) < \varepsilon$, so $z \in U$ with witness $\rho/2$. Thus $N_{\rho/2}(y) \subseteq U$. [step 1.1, L1, L3, L4]

2.2 Let $x \in A$ with $x \notin U$. Then $\omega_f(A \cap N_\delta(x)) \ge \varepsilon$ for every real $\delta > 0$, so $\varepsilon$ is a lower bound of the set whose infimum is $\omega_f(x)$, and therefore $\omega_f(x) \ge \varepsilon$, that is $x \in E_\varepsilon$. [step 1.1, L1, L2]

2.3 Let $x \in E_\varepsilon$, so $x \in A$ and $\omega_f(x) \ge \varepsilon$. For every real $\delta > 0$ the value $\omega_f(A \cap N_\delta(x))$ is at least the infimum $\omega_f(x)$, hence at least $\varepsilon$; so no $\rho$ witnesses membership of $x$ in $U$, that is $x \notin U$. [step 1.1, L1, L2]

3.1 $G$ is closed, being the complement of the open set $U$. [step 1.1, step 2.1, L4]

4.1 Steps 2.2 and 2.3 together say that for $x \in A$ one has $x \in E_\varepsilon$ if and only if $x \in G$; hence $E_\varepsilon = A \cap G$ with $G$ closed. [step 3.1, step 2.2, step 2.3]

5.1 If $A = \mathbb{R}$ then $E_\varepsilon = \mathbb{R} \cap G = G$ is closed in $\mathbb{R}$. [step 4.1, L4] ∎

## Remarks

- **Why the strict inequality is on the open side.** The set $U$ is defined by a
  strict inequality and an existential quantifier over $\rho$, which is what
  makes it open; its complement is then closed, and the superlevel set
  $\{\omega_f \ge \varepsilon\}$ is what remains of it inside $A$. Defining
  $E_\varepsilon$ with a strict inequality instead, as
  $\{\omega_f > \varepsilon\}$, would not give a closed set in general, and the
  exhaustion of [[thm-discontinuity-set-is-f-sigma]] is arranged so that only the
  non-strict form is ever needed.

- **The relative form is the honest one.** For general $A$ the set
  $E_\varepsilon$ is a subset of $A$ and there is no reason for it to be closed
  in $\mathbb{R}$: taking $A = (0,1)$ and $f$ the restriction of a function with
  oscillation $\ge \varepsilon$ everywhere gives $E_\varepsilon = (0,1)$, which
  is not closed. What is always true is the displayed identity
  $E_\varepsilon = A \cap G$, and that is what the theorems downstream use.
