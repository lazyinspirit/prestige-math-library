---
id: lem-extreme-points-of-the-dual-ball-of-c-of-k
kind: lemma
title: Extreme points of the dual ball of C(K)
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, def-extreme-point-and-face, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Orr Shalit, Advanced Analysis Notes 14: the isometric structure of C(K) — Theorem 2 and Exercises B–C, HTML lines 38–54; the extreme-point proof is stated as an exercise and is supplied locally"
      url: "https://oshalit.net.technion.ac.il/2012/11/28/advanced-analysis-notes-14-banach-spaces-application-the-stone-weierstrass-theorem-revisited-structure-of-ck/"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a nonempty
compact Hausdorff space, let $\mathbb K$ be $\mathbb R$ or $\mathbb C$, and let
$B_{C(K,\mathbb K)^*} = \{L : \|L\| \le 1\}$ be the closed dual unit ball with
the norm topology. Then the extreme points of $B_{C(K,\mathbb K)^*}$
([[def-extreme-point-and-face]]) are exactly the normalized point evaluations

$$\operatorname{ext} B_{C(K,\mathbb K)^*} \;=\; \{\, c\,\delta_x \;:\; x \in K,\ c \in \mathbb K,\ |c| = 1 \,\},$$

where $\delta_x(f) = f(x)$. The proof is written for $\mathbb K = \mathbb C$,
with the Riesz representation for complex measures; the real case is the same
argument with signed measures and polar factor $c \in \{+1,-1\}$, as recorded in
the final remark.

## Facts & Assumptions

**Given:** A nonempty compact Hausdorff space $K$, the Banach space $C(K,\mathbb C)$ with the supremum norm, and its dual $C(K)^*$ with the operator norm.

[L1] Every bounded complex-linear functional $L$ on $C_0(X;\mathbb C)$ for $X$ locally compact Hausdorff has a unique representation $L(f) = \int_X f\,d\mu$ by a finite regular complex Borel measure $\mu$, and $\|L\| = |\mu|(X)$; conversely every such $\mu$ defines a bounded functional ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]]). Applied to $X = K$ compact this identifies $B_{C(K)^*}$ with the set of regular complex Borel measures $\mu$ on $K$ with $|\mu|(K) \le 1$.

[L2] A point $x$ of a convex set $K_0$ is extreme when $x = (1-t)y + tz$ with $y,z \in K_0$, $0<t<1$, forces $y = z = x$ ([[def-extreme-point-and-face]]).

[L3] The Axiom of Choice holds; in particular the selection of finitely many open sets and of one point from a nonempty compact set used below is licensed, and $\mathrm{AC} \Rightarrow \mathrm{AC}_\omega$ ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Under the identification of [L1] and with the selection licensed by [L3], a measure $\mu$ with $|\mu|(K) < 1$ is not extreme: choose $x \in K$ (nonempty) and $0 < \varepsilon < 1 - |\mu|(K)$; then $\mu = \tfrac12(\mu + \varepsilon\delta_x) + \tfrac12(\mu - \varepsilon\delta_x)$ with both summands of variation at most $|\mu|(K) + \varepsilon \le 1$, and the summands differ from $\mu$ because $\varepsilon \ne 0$. Hence every extreme point $L$ satisfies $\|L\| = |\mu|(K) = 1$. [L1, L2, L3, algebra]

1.2 If $|\mu|(K) = 1$ and there is a Borel set $E$ with $0 < |\mu|(E) < 1$, then $\mu$ is not extreme: writing $\mu_1 := \mu|_E$ and $\mu_2 := \mu|_{K\setminus E}$ for the restrictions, both are nonzero with $\|\mu_j\| = |\mu_j|(K) \in (0,1)$, and $\mu = \|\mu_1\|\,\nu_1 + \|\mu_2\|\,\nu_2$ where $\nu_j := \mu_j/\|\mu_j\|$ have norm one and are distinct because their supports are disjoint; the coefficients $\|\mu_1\|$, $\|\mu_2\|$ are positive and sum to one, so this is a proper convex combination inside the ball. [L1, L2, algebra]

1.3 Suppose $|\mu|(K) = 1$ and $|\mu|(E) \in \{0,1\}$ for every Borel $E$. Then $\mu = c\delta_y$ for a unique $y \in K$ and some $c$ with $|c| = 1$: by inner regularity, if $|\mu|(\{x\}) = 0$ there is an open neighbourhood $U_x$ of $x$ with $|\mu|(U_x) = 0$ (the value $|\mu|(\{x\})$ is the infimum of $|\mu|(U)$ over open $U \ni x$); the family of compact sets $K \setminus U_x$, for all $x$ with $|\mu|(\{x\}) = 0$, has the finite intersection property because finitely many of the $U_x$ cannot cover $K$ (their total mass is zero while $|\mu|(K) = 1$), so by compactness some $y$ lies in every $K\setminus U_x$; then $|\mu|(\{y\}) \ne 0$, hence $|\mu|(\{y\}) = 1$ and $|\mu|$ is the Dirac measure at $y$, and uniqueness of $y$ follows from $|\mu|(\{y\}) = 1$ and $|\mu|(K) = 1$. Writing $\mu = h\,d|\mu|$ with $|h| = 1$ $|\mu|$-almost everywhere gives $\mu = h(y)\delta_y$ and $|h(y)| = 1$. [L1, L2, algebra]

1.4 Conversely every $c\delta_x$ with $|c| = 1$ is extreme: if $c\delta_x = (1-t)\nu_1 + t\nu_2$ with $0 < t < 1$ and $\|\nu_j\| \le 1$, then evaluating on the constant function $1$ gives $c = (1-t)\nu_1(1) + t\nu_2(1)$ with $|\nu_j(1)| \le 1$, so equality in the triangle inequality forces $\nu_1(1) = \nu_2(1) = c$; then $1 = \int|h_j|\,d|\nu_j| \le |\nu_j|(K) \le 1$ shows $|\nu_j|(K) = 1$ and $h_j = c$ $|\nu_j|$-almost everywhere, so $\nu_j = c\lambda_j$ with $\lambda_j := |\nu_j|$ a probability measure; from $(1-t)\lambda_1 + t\lambda_2 = \delta_x$ every compact subset of $K\setminus\{x\}$ has $\lambda_1$- and $\lambda_2$-measure zero, so by regularity $\lambda_1 = \lambda_2 = \delta_x$ and $\nu_1 = \nu_2 = c\delta_x$. [L1, L2, algebra]

2.1 Let $\mu$ be an extreme point with associated functional $L$. By [step 1.1] $|\mu|(K) = 1$. If $|\mu|$ were not $\{0,1\}$-valued then [step 1.2] would exhibit $\mu$ as a proper convex combination of two unit-ball measures, contradicting extremality; hence $|\mu|$ is $\{0,1\}$-valued, and [step 1.3] gives $\mu = c\delta_y$ with $|c| = 1$. [step 1.1, step 1.2, step 1.3]

3.1 By [step 2.1] every extreme point is $c\delta_y$ with $|c|=1$, and by [step 1.4] every such point is extreme; hence $\operatorname{ext}B_{C(K)^*} = \{c\delta_x : x \in K,\ |c|=1\}$. [step 1.4, step 2.1] ∎

## Remarks

- **The real case.** For $\mathbb K = \mathbb R$ the Riesz representation gives a finite regular signed measure, the polar decomposition $\nu = c\lambda$ has $c = \pm1$ on the support of $|\nu|$, and the same arguments give $\operatorname{ext}B_{C(K,\mathbb R)^*} = \{\pm\delta_x : x \in K\}$.
- **Where regularity and compactness enter.** Compactness is used for the common point $y$ in [step 1.3] and for the finite intersection property; regularity is used to turn $|\mu|(\{x\}) = 0$ into an open set of measure zero, and no other property of $K$ is needed.
