---
id: ex-x-times-dirichlet-has-a-limit-only-at-zero
kind: example
title: "$x \\cdot 1_{\\mathbb{Q}}(x)$ has a limit at $0$ and at no other point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-dirichlet-has-no-limit-anywhere, thm-squeeze-for-function-limits, cor-sequential-criterion-for-nonexistence, lem-q-and-irrationals-dense-r, lem-sequential-characterisation-of-closure-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-sequence, def-real-limit, lem-rat-embeds-dense, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x\\,1_{\\mathbb{Q}}$: a limit only at $0$"
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
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Example

With $\mathbf{1}_{\mathbb{Q}}$ as in [[cex-dirichlet-has-no-limit-anywhere]], let

$$d : \mathbb{R} \to \mathbb{R}, \qquad d(x) := x \cdot \mathbf{1}_{\mathbb{Q}}(x),$$

so $d(x) = x$ for rational $x$ and $d(x) = 0$ for irrational $x$. Then the limit
of $d$ at $0$ exists, with

$$\lim_{x \to 0} d(x) = 0 ,$$

and at **every** $c \ne 0$ the function $d$ has no limit.

**The point of the example.** The factor $\mathbf{1}_{\mathbb{Q}}$ has a limit
nowhere; multiplying it by $x$ repairs exactly one point, and only that one. The
repair at $0$ is the squeeze theorem
([[thm-squeeze-for-function-limits]]) applied to
$-|x| \le d(x) \le |x|$; the failure elsewhere is the same two-sequence argument
as in [[cex-dirichlet-has-no-limit-anywhere]], now with image limits $c$ and $0$,
which are distinct precisely because $c \ne 0$.

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals, the irrationals $X = \mathbb{R} \setminus \mathbb{Q}$, the function $d(x) = x \cdot \mathbf{1}_{\mathbb{Q}}(x)$, and a real $c \ne 0$.

[L1] The values of $d$: $d(x) = x$ for $x \in \mathbb{Q}$ and $d(x) = 0$ for $x \in X$; every real lies in exactly one of $\mathbb{Q}$ and $X$ ([[cex-dirichlet-has-no-limit-anywhere]]).

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} f(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain with $0 < |x - c| < \delta$ satisfies $|f(x) - P| < \varepsilon$.

[L3] Squeeze theorem: if $f \le g \le k$ on $A \cap N^{*}_{\eta}(c)$ for some real $\eta > 0$ and the limits of $f$ and of $k$ at $c$ exist and are equal to $L$, then the limit of $g$ at $c$ exists and equals $L$ ([[thm-squeeze-for-function-limits]]).

[L4] Nonexistence criterion ([[cor-sequential-criterion-for-nonexistence]]).

[L5] For every real $c$ there are a sequence $(q_k)$ with all terms in $\mathbb{Q} \setminus \{c\}$ and a sequence $(u_k)$ with all terms in $X \setminus \{c\}$, both converging to $c$. This is exactly what is established in the course of [[cex-dirichlet-has-no-limit-anywhere]], from density ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[lem-rat-embeds-dense]]) and the sequential characterisation of the closure ([[lem-sequential-characterisation-of-closure-r]], [[def-sequence]], [[def-real-limit]]); the countable choice spent there is inherited here.

[L6] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L7] Absolute value: $|u| \ge 0$; $-|u| \le u \le |u|$; $|u| = u$ for $u \ge 0$; $|0| = 0$ ([[lem-of-abs-value]]). Order arithmetic: trichotomy and totality; $0 < 1$, so $2 > 0$ and $\varepsilon/2 < \varepsilon$ for $\varepsilon > 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]]).

[L8] A constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]).

## Verification

**Proof technique:** direct.

1.1 For every $x \in \mathbb{R}$, $-|x| \le d(x) \le |x|$: if $x \in \mathbb{Q}$ then $d(x) = x$ and $-|x| \le x \le |x|$; if $x \in X$ then $d(x) = 0$ and $-|x| \le 0 \le |x|$. [L1, L7]

1.2 Every real is a limit point of $\mathbb{R}$; in particular $0$ and the given $c$ are. [L6]

1.3 The functions $x \mapsto -|x|$ and $x \mapsto |x|$ have limit $0$ at $0$: given a real $\varepsilon > 0$ take $\delta := \varepsilon$; every $x$ with $0 < |x - 0| < \delta$ satisfies $\bigl| |x| - 0 \bigr| = |x| < \varepsilon$ and $\bigl| -|x| - 0 \bigr| = |x| < \varepsilon$. [L2, L7]

2.1 The three functions satisfy $-|x| \le d(x) \le |x|$ on all of $\mathbb{R}$, in particular on $\mathbb{R} \cap N^{*}_{1}(0)$, and the outer two have limit $0$ at $0$; since $0$ is a limit point of $\mathbb{R}$, the squeeze theorem [L3] gives that the limit of $d$ at $0$ exists and equals $0$. [step 1.1, step 1.2, step 1.3, L3]

2.2 Fix the real $c \ne 0$. By [L5] there are a sequence $(q_k)$ with all terms in $\mathbb{Q} \setminus \{c\}$ and a sequence $(u_k)$ with all terms in $X \setminus \{c\}$, both converging to $c$. [step 1.2, L5, choose]

3.1 By [L1], $d(q_k) = q_k$ for every $k$, so the image sequence $(d(q_k))$ is $(q_k)$ itself and converges to $c$; and $d(u_k) = 0$ for every $k$, so that image sequence is constant and converges to $0$. Since $c \ne 0$, the two limits are distinct, and both sequences have all their terms in $\mathbb{R} \setminus \{c\}$ and converge to $c$; by [L4] the function $d$ has no limit at $c$. [step 2.2, L1, L4, L7, L8]

4.1 So the limit of $d$ exists at $0$, with value $0$, and fails to exist at every other real: $d$ has a limit at exactly one point. [step 2.1, step 3.1] ∎

## Remarks

- **Why $0$ is the exceptional point.** The squeeze bound $|d(x)| \le |x|$ is useful only where $|x|$ is small, that is near $0$; at any other $c$ the two bounding functions have limit $|c| \ne 0$ and $-|c|$, which are different, so the squeeze theorem says nothing there. That is not an accident of the proof: the two-sequence argument shows the limit genuinely fails at every such $c$.

- **The value $d(0) = 0$ happens to equal the limit**, since $0$ is rational, so $d$ satisfies at $0$ the equality that [[fs-limit-equals-value]] shows is not automatic. It is the only point of $\mathbb{R}$ at which $d$ does so.

- **Contrast with $\psi(1/x)$.** There the oscillation is bounded and the failure is confined to a single point, $0$, with the multiplication by $x$ repairing precisely that point ([[ex-x-times-psi-tends-to-zero]]). Here the failure is everywhere and the multiplication repairs precisely one point. The two examples are the same mechanism — a bounded factor damped by a vanishing one — applied to opposite kinds of irregularity.
