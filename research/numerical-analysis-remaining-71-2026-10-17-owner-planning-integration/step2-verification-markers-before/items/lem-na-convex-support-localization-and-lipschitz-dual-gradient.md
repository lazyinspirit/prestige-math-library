---
id: lem-na-convex-support-localization-and-lipschitz-dual-gradient
kind: lemma
title: "Convex supports, localization, and the Lipschitz dual gradient"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
axiom_base: "Full Axiom of Choice; uses identified in the proof."
deps:
  - def-axiom-of-choice
  - def-metric-ball
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-lipschitz-holder-contraction
  - thm-convex-functions-on-open-convex-sets-are-locally-lipschitz
  - thm-hahn-banach-dominated-extension
  - cor-bolzano-weierstrass-in-rn
  - thm-euclidean-semicontinuous-extreme-value-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces, complete 168-page notes; Sections 2.6 and 3.3-3.4"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions, Appendix A, Theorem A.2 and pp. 58-60, notes pp. 62-63"
      url: "https://arxiv.org/pdf/math/9207212"
---

## Statement

Assume the Axiom of Choice. Let $f$ be finite convex, in the sense of [[def-convex-and-strictly-convex-functions-on-euclidean-sets]], on an open convex $U\subseteq\mathbb R^n$. At each $x\in U$ the subdifferential $\partial f(x)=\{p:f(y)\ge f(x)+p\cdot(y-x)\ (y\in U)\}$ is nonempty; it is locally bounded and its graph is locally closed. It is a singleton exactly when $f$ is differentiable, and then equals $\{Df(x)\}$. For every closed Euclidean ball $K\subset U$ ([[def-metric-ball]]) there is a finite globally Lipschitz convex $H$ ([[def-lipschitz-holder-contraction]]) on $\mathbb R^n$ equal to $f$ on $K$. For $F(x)=H(x)+|x|^2/2$, the conjugate $F^*(p)=\sup_x(p\cdot x-F(x))$ is finite and $C^1$, and $g=DF^*$ is globally one-Lipschitz with $g(p)=x$ iff $p\in\partial F(x)$.

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[A1] The Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] [[thm-convex-functions-on-open-convex-sets-are-locally-lipschitz]].

[F2] [[thm-hahn-banach-dominated-extension]].

[F3] [[cor-bolzano-weierstrass-in-rn]].

[F4] [[thm-euclidean-semicontinuous-extreme-value-theorem]].

## Proof

1.1 At $x\in U$, the directional slope $d(v)=\lim_{t\downarrow0}[f(x+tv)-f(x)]/t$ exists and is finite: convexity makes these quotients monotone in $t$, while local Lipschitz continuity bounds them. Positive homogeneity follows by rescaling $t$. Convexity applied at the midpoint of $x+2tv$ and $x+2tw$ gives $d(v+w)\le d(v)+d(w)$. By [A1] and [F2], Hahn-Banach extends zero on $\{0\}$ to a linear functional $p\cdot v\le d(v)$. The chord inequality gives $d(y-x)\le f(y)-f(x)$, so $p\in\partial f(x)$. [A1, F1, F2, given, construct]

2.1 If $f$ is $L$-Lipschitz on a ball and $x$ lies in its concentric half ball, testing the support inequality at $x\pm te$ for every unit vector $e$ and sufficiently small $t>0$ gives $|p\cdot e|\le L$. Thus all its subgradients have norm at most $L$. On compact subsets this follows by a finite cover. If $x_j\to x$, $p_j\to p$, and $p_j\in\partial f(x_j)$, pass to the limit in every support inequality using continuity of $f$; hence $p\in\partial f(x)$. Differentiability gives $\partial f(x)=\{Df(x)\}$ by testing both signs of small increments. Conversely, if $\partial f(x)=\{p\}$, the local bound and [F3] imply that every choice $q_y\in\partial f(y)$ converges to $p$ as $y\to x$: otherwise [A1] selects a contrary sequence with a convergent subsequence whose limit is a different limiting subgradient. The inequalities $p\cdot h\le f(x+h)-f(x)\le q_{x+h}\cdot h$ then prove differentiability with derivative $p$. [A1, F1, F3, step 1.1, algebra]

3.1 Set $H(z)=\sup\{f(x)+p\cdot(z-x):x\in K,\ p\in\partial f(x)\}$. The local bounds from step 2.1 make slopes and intercepts uniformly bounded. Thus this supremum is finite, convex and globally Lipschitz; support inequalities give $H\le f$ on $U$, and the terms at $z=x\in K$ give equality on $K$. This definition uses all supports, without choosing one for each point. [step 1.1, step 2.1, construct]

4.1 Since $H$ is globally Lipschitz, $F(z)-p\cdot z\to+\infty$ as $|z|\to\infty$. Continuity and compact extreme values give a minimizer. The identity that $F-|\cdot|^2/2$ is convex implies strict convexity of $F$ and uniqueness of this minimizer, denoted $g(p)$. Its minimizing property is exactly $p\in\partial F(g(p))$. More precisely, $p\in\partial F(x)$ iff $p-x\in\partial H(x)$. One direction is immediate. For the other, test the support inequality for $F$ at $x+t(y-x)$, divide by $t>0$, and let $t\downarrow0$; convexity makes the directional slope of $H$ at $x$ no larger than the full chord slope $H(y)-H(x)$, yielding $H(y)-H(x)\ge(p-x)\cdot(y-x)$. Monotonicity of supports of $H$, obtained by adding their two defining inequalities, therefore gives $(p-q)\cdot(g(p)-g(q))\ge |g(p)-g(q)|^2$. Hence $g$ is one-Lipschitz. [F4, step 3.1, algebra]

5.1 The supremum defining $F^*(p)$ is finite and attained uniquely at $g(p)$. Evaluating the two suprema at each other's maximizers gives $0\le F^*(p+k)-F^*(p)-g(p)\cdot k\le (g(p+k)-g(p))\cdot k\le |k|^2$. This proves $DF^*=g$, whose continuity follows from its Lipschitz bound. It also proves the asserted subgradient inverse relation. [step 4.1, algebra] ∎
