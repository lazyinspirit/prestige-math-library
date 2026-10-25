---
id: cex-psi-of-one-over-x-has-no-limit-at-zero
kind: counterexample
title: "$\\psi(1/x)$ has no limit at $0$: two sequences tending to $0$ give values constantly $0$ and constantly $1/2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [ex-distance-to-the-integers, cor-sequential-criterion-for-nonexistence, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-sequence, def-real-limit, def-natural-numbers, def-integers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, thm-int-comm-ring, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, def-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$\\psi(1/x)$ has no limit at $0$"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function

$$\Phi : \mathbb{R} \setminus \{0\} \to \mathbb{R}, \qquad \Phi(x) := \psi(1/x) ,$$

with $\psi$ the distance to the integers ([[ex-distance-to-the-integers]]), has a
limit at $0$ ([[def-function-limit]]).

$\Phi$ is bounded — $0 \le \Phi(x) \le 1/2$ for every $x \ne 0$, by claim 2 of
[[ex-distance-to-the-integers]] — and $0$ is a limit point of its domain, so
every hypothesis that might plausibly deliver a limit except the limit itself is
present. Boundedness near a point is therefore **not** sufficient for a limit to
exist, and the converse of [[lem-limit-implies-local-boundedness]] fails.

The refutation exhibits two sequences of positive reals tending to $0$ along
which $\Phi$ is constantly $0$ and constantly $1/2$, and applies
[[cor-sequential-criterion-for-nonexistence]].

## Facts & Assumptions

**Given:** The function $\Phi(x) = \psi(1/x)$ on $\mathbb{R} \setminus \{0\}$, and the sequences $x_k := 1/(k+1)$ and $y_k := 2/(2k+1)$ for $k \in \mathbb{N}$. Sequences are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]], [[def-natural-numbers]]), so the first terms are $x_0 = 1$ and $y_0 = 2$; the denominators $k+1$ and $2k+1$ are canonical naturals $\ge 1$, never $0$, which is why the sequences are written this way and not as $1/k$.

[L1] The function $\psi$ vanishes exactly on $\mathbb{Z}$, satisfies $\psi(m + 1/2) = 1/2$ for every $m \in \mathbb{Z}$, and takes values in $[0,1/2]$ ([[ex-distance-to-the-integers]], claims 2, 3 and 4).

[L2] Nonexistence criterion: if two sequences with all terms in $A \setminus \{c\}$ converge to $c$ while the image sequences converge to distinct reals, then $f$ has no limit at $c$ ([[cor-sequential-criterion-for-nonexistence]]).

[L3] Sequential convergence, and the fact that a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]). Testing against every positive real rather than every positive rational defines the same relation ([[lem-rat-embeds-dense]], remarks of [[def-sequence]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); canonical naturals are positive and strictly increasing in the index ([[lem-of-naturals-positive]]); and $0 < a < b$ gives $0 < 1/b < 1/a$, with the non-strict form following by adjoining equality ([[lem-of-inverse-positive]]).

[L5] Limit point and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L6] Absolute value ([[lem-of-abs-value]]); order and field arithmetic: $0 < 1$, so $2 > 0$ and $1/2 > 0$ with $1/2 \ne 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-field]], [[def-ordered-field]]).

[L7] Integers in $\mathbb{R}$: every canonical natural is an integer, and $\mathbb{Z}$ is closed under adding $1$ ([[def-integers]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[thm-int-comm-ring]]).

## Counterexample

**Proof technique:** direct.

1.1 $0$ is a limit point of $\mathbb{R} \setminus \{0\}$: given a real $\varepsilon > 0$, the real $\varepsilon/2$ is positive, hence lies in $\mathbb{R} \setminus \{0\}$, and $0 < |\varepsilon/2 - 0| = \varepsilon/2 < \varepsilon$. [L5, L6]

1.2 For every $k \in \mathbb{N}$ the terms $x_k = 1/(k+1)$ and $y_k = 2/(2k+1)$ are defined and positive, since $k + 1 \ge 1 > 0$ and $2k + 1 \ge 1 > 0$; in particular $x_k \ne 0$ and $y_k \ne 0$, so both sequences have all their terms in $\mathbb{R} \setminus \{0\}$, which equals $(\mathbb{R} \setminus \{0\}) \setminus \{0\}$. [L4, L6, L7]

1.3 The reals $0$ and $1/2$ are distinct, since $1/2 > 0$. [L6]

2.1 $x_k \to 0$: given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon$; every $k \ge n$ has $k + 1 > n \ge 1$, hence $|x_k - 0| = 1/(k+1) < 1/n < \varepsilon$. [step 1.2, L3, L4, L6]

2.2 $y_k \to 0$: for every $k \in \mathbb{N}$ we have $2k + 1 \ge k + 1$, since their difference is $k \ge 0$, so $0 < y_k = 2/(2k+1) \le 2/(k+1)$. Given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon/2$; every $k \ge n$ has $k + 1 > n$, hence $|y_k - 0| \le 2/(k+1) < 2/n < \varepsilon$. [step 1.2, L3, L4, L6]

2.3 $\Phi(x_k) = 0$ for every $k$: $1/x_k = k + 1$, a canonical natural and hence an integer by [L7], so $\psi(1/x_k) = 0$ by [L1]. The image sequence is therefore the constant sequence $0$ and converges to $0$. [step 1.2, L1, L3, L7]

2.4 $\Phi(y_k) = 1/2$ for every $k$: $1/y_k = (2k+1)/2 = k + 1/2$ with $k$ an integer by [L7], so $\psi(1/y_k) = 1/2$ by [L1]. The image sequence is therefore the constant sequence $1/2$ and converges to $1/2$. [step 1.2, L1, L3, L6, L7]

3.1 So $(x_k)$ and $(y_k)$ have all their terms in $(\mathbb{R} \setminus \{0\}) \setminus \{0\}$ and both converge to $0$, which is a limit point of $\mathbb{R} \setminus \{0\}$, while the image sequences converge to the distinct reals $0$ and $1/2$. By [L2], $\Phi$ has no limit at $0$. [step 1.1, step 1.3, step 2.1, step 2.2, step 2.3, step 2.4, L2] ∎

## Remarks

- **Both witnessing sequences have positive terms**, so what is refuted is already the existence of the *right-hand* limit $\lim_{x \to 0^{+}} \Phi(x)$ ([[def-one-sided-limits]]), and the two-sided failure follows. The contrast with the sign function on this page is exact: there both one-sided limits exist and merely disagree.

- **Why $1/(k+1)$ and $2/(2k+1)$.** They are the sequences whose reciprocals are $k+1$ and $k + 1/2$, that is, the integers and the half-integers, which are precisely the two sets on which claims 3 and 4 of [[ex-distance-to-the-integers]] evaluate $\psi$ exactly. Writing $1/k$ instead would be undefined at the index $k = 0$, since $\mathbb{N}$ contains $0$ ([[def-sequence]]).

- **Multiplying by $x$ repairs it.** The function $x \mapsto x\,\psi(1/x)$ does have a limit at $0$, namely $0$, by the squeeze theorem ([[ex-x-times-psi-tends-to-zero]]). The oscillation is unchanged; what changes is that its amplitude is forced to $0$.

- **The classical form of this counterexample** uses $\sin(1/x)$ in place of $\psi(1/x)$; [[rem-classical-oscillator-is-sine-of-one-over-x]] records why this library cannot yet write it.
