---
id: cex-dirichlet-has-no-limit-anywhere
kind: counterexample
title: "The indicator of $\\mathbb{Q}$ has a limit at no point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-sequential-criterion-for-nonexistence, lem-q-and-irrationals-dense-r, lem-sequential-characterisation-of-closure-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-sequence, def-real-limit, lem-rat-embeds-dense, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "Dirichlet function: no limit anywhere"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

Write $\mathbb{Q}$ for the canonical copy of the rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]), $X := \mathbb{R} \setminus \mathbb{Q}$ for the
irrationals, and let

$$\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}, \qquad \mathbf{1}_{\mathbb{Q}}(x) := \begin{cases} 1 & x \in \mathbb{Q}, \\ 0 & x \in X. \end{cases}$$

**Refuted claim:** there is a point $c \in \mathbb{R}$ at which
$\mathbf{1}_{\mathbb{Q}}$ has a limit ([[def-function-limit]]).

The refutation fixes an arbitrary real $c$ and produces two sequences tending to
$c$, one of rationals and one of irrationals, both avoiding $c$; the image
sequences are constantly $1$ and constantly $0$, and
[[cor-sequential-criterion-for-nonexistence]] applies. Since $c$ was arbitrary,
the function has a limit nowhere.

**Where the choice principle enters, and where it does not.** Producing the two
sequences is a use of [[lem-sequential-characterisation-of-closure-r]], whose
left-to-right direction spends countable choice, and that cost is inherited here
and recorded by that item. The criterion applied afterwards is the choice-free
one ([[cor-sequential-criterion-for-nonexistence]]).

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals, the irrationals $X = \mathbb{R} \setminus \mathbb{Q}$, the function $\mathbf{1}_{\mathbb{Q}}$ above, and an arbitrary real $c$.

[L1] Density: $\mathbb{Q}$ and $X$ are both dense in $\mathbb{R}$, that is, each has closure $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]); and the closure of a set $S$ is exactly the set of points every neighbourhood of which meets $S$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-limit-point-r]]).

[L2] Sequential characterisation of the closure: $x$ lies in the closure of $S$ if and only if there is a sequence with all terms in $S$ converging to $x$ ([[lem-sequential-characterisation-of-closure-r]], [[def-sequence]], [[def-real-limit]]). The direction used below, from the closure to a sequence, is the one that spends countable choice, as that item records.

[L3] Neighbourhoods: $N_{\rho}(u) = \{\, y : |y - u| < \rho \,\}$ for real $\rho > 0$, so $N_{\varepsilon/2}(c + \varepsilon/2) = \{\, y : c < y < c + \varepsilon \,\}$ ([[def-neighbourhood-r]]).

[L4] Nonexistence criterion: if two sequences with all terms in $A \setminus \{c\}$ converge to $c$ while the image sequences converge to distinct reals, then the function has no limit at $c$ ([[cor-sequential-criterion-for-nonexistence]]).

[L5] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L6] A constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]).

[L7] Absolute value and order: $|u| \ge 0$ and $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); $0 < 1$, so $2 > 0$, $\varepsilon/2 > 0$ and $\varepsilon/2 < \varepsilon$ for $\varepsilon > 0$; trichotomy and totality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-inverse-positive]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $c \in \mathbb{R}$ be arbitrary. Then $c$ is a limit point of $\mathbb{R}$, the domain of $\mathbf{1}_{\mathbb{Q}}$, so the question of a limit at $c$ is well posed. [L5]

1.2 Let $S$ be either $\mathbb{Q}$ or $X$, and let $\varepsilon > 0$ be an arbitrary real. Applying [L1] at the real $c + \varepsilon/2$ with the radius $\varepsilon/2 > 0$, the neighbourhood $N_{\varepsilon/2}(c + \varepsilon/2)$ meets $S$; and by [L3] every $y$ in that neighbourhood satisfies $c < y < c + \varepsilon$, hence $y \ne c$ and $0 < |y - c| < \varepsilon$. So every neighbourhood of $c$ meets $S \setminus \{c\}$. [L1, L3, L7]

2.1 By [L1] again, step 1.2 says exactly that $c$ lies in the closure of $\mathbb{Q} \setminus \{c\}$ and in the closure of $X \setminus \{c\}$. Hence [L2] supplies a sequence $(q_k)$ with all terms in $\mathbb{Q} \setminus \{c\}$ converging to $c$, and a sequence $(u_k)$ with all terms in $X \setminus \{c\}$ converging to $c$. [step 1.2, L1, L2, choose]

3.1 Every term of $(q_k)$ lies in $\mathbb{Q}$, so $\mathbf{1}_{\mathbb{Q}}(q_k) = 1$ for every $k$ and the image sequence is the constant sequence $1$, converging to $1$; every term of $(u_k)$ lies in $X$, so $\mathbf{1}_{\mathbb{Q}}(u_k) = 0$ for every $k$ and that image sequence converges to $0$. The reals $1$ and $0$ are distinct. [step 2.1, L6, L7]

4.1 Both sequences have all their terms in $\mathbb{R} \setminus \{c\}$ and converge to $c$, while their image sequences converge to distinct reals; by [L4] the function $\mathbf{1}_{\mathbb{Q}}$ has no limit at $c$. Since $c \in \mathbb{R}$ was arbitrary, it has a limit at no point of $\mathbb{R}$. [step 1.1, step 2.1, step 3.1, L4] ∎

## Remarks

- **Why the sets are punctured before the sequences are drawn.** [[cor-sequential-criterion-for-nonexistence]] requires all terms to lie in $A \setminus \{c\}$, since a sequence allowed to take the value $c$ would report on $\mathbf{1}_{\mathbb{Q}}(c)$, which the limit ignores ([[def-function-limit]]). Step 1.2 therefore verifies density of $\mathbb{Q} \setminus \{c\}$ and of $X \setminus \{c\}$ directly, by placing the auxiliary neighbourhood strictly to the right of $c$.

- **The two densities are not proved the same way.** $\mathbb{Q}$ is dense because it is built to approximate; $X$ is dense because a countable set cannot exhaust an interval. Both are claims 1 and 2 of [[lem-q-and-irrationals-dense-r]], and this item uses them only through the neighbourhood formulation of [L1].

- **The failure is as total as possible.** Not merely does the limit fail at some points: it fails at every point of $\mathbb{R}$, while the function is bounded throughout, taking only the values $0$ and $1$. Multiplying by $x$ leaves exactly one point where a limit survives, which is [[ex-x-times-dirichlet-has-a-limit-only-at-zero]].
