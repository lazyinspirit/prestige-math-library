---
id: "lem-positive-smooth-collar-for-a-strictly-psh-negative-set"
kind: "lemma"
title: "Positive smooth collars for strictly plurisubharmonic negative sets"
status: "draft"
origin: "pipeline"
deps: ["def-axiom-of-choice", "def-levi-form-and-strict-plurisubharmonicity", "thm-c-two-levi-criterion-for-plurisubharmonicity", "lem-schwartz-cutoffs-from-the-standard-smooth-step", "thm-uniform-derivative-limit-on-a-closed-interval", "cor-regular-values-have-null-complement-and-are-dense", "cor-regular-level-set-local-graph-theorem", "thm-stability-operations-for-plurisubharmonic-functions", "def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity"]
landmark: false
proof_strategy: "direct"
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Harold P. Boas, Lecture Notes on Several Complex Variables
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: §3.3.2, printed pp. 76–77, outside smooth strongly pseudoconvex
        neighborhoods for the cutoff correction. This item proves the needed
        neighborhood construction explicitly, including extra zeros and critical
        boundary points.
verification: {"precheck": "pass", judge: {model: "gpt-6.1-sol", verdict: pass, date: 2026-10-02}}
---

## Statement

Assume the Axiom of Choice. Let $D\subset\mathbb C^n$, $n\ge1$, be bounded and open, with nonempty boundary. Suppose $U\supset\overline D$ is open, $\rho\in C^\infty(U,\mathbb R)$, $D=\{\rho<0\}$ in $U$, and $\rho$ is strictly plurisubharmonic near $\partial D$. No nonvanishing-gradient condition is imposed.

For every open $O$ with $\overline D\subset O\subset U$, there are finitely many pairwise disjoint bounded domains $G_1,\ldots,G_N$ such that
$$\overline D\subset G:=\bigcup_{i=1}^N G_i,\qquad \overline G\subset O,$$
each $G_i$ has $C^\infty$ strongly pseudoconvex boundary, and each $G_i$ admits a continuous plurisubharmonic exhaustion.

## Facts & Assumptions

**Given:** AC; the data of the Statement; and the prescribed neighborhood $O$.

[F1] A fixed smooth Euclidean bump $b$ is nonnegative, equals $1$ on the closed unit ball and has support in the radius-two ball ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F2] Uniform convergence of continuously differentiable functions and their derivatives on a closed interval permits termwise differentiation of the limit ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[F3] Smooth real-valued maps have dense regular values; a regular level is locally a smooth graph ([[cor-regular-values-have-null-complement-and-are-dense]], [[cor-regular-level-set-local-graph-theorem]]).

[F4] For smooth functions the nonnegative Levi form characterizes plurisubharmonicity; strict positivity is the positive-definite Levi form condition ([[thm-c-two-levi-criterion-for-plurisubharmonicity]], [[def-levi-form-and-strict-plurisubharmonicity]]).

[F5] Nonnegative sums, finite maxima and convex nondecreasing composition preserve plurisubharmonicity ([[thm-stability-operations-for-plurisubharmonic-functions]]). An exhaustion has compact sublevel sets in its domain ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

**Choice use.** AC supplies the choice hypotheses of [F3]. The bump sequence, its coefficients and their sum below are explicit after fixing an enumeration of rational balls; the remaining selections are finite.

## Proof

1.1 Put $F=\overline D$. Enumerate all rational centers $q_j\in\mathbb Q^{2n}$ and positive rational radii $r_j$ for which $\overline B(q_j,2r_j)\cap F=\varnothing$. Their inner balls cover $\mathbb C^n\setminus F$: openness of the complement supplies a sufficiently small ball, then a rational center and radius. Set $b_j(x)=b((x-q_j)/r_j)$, $$M_j=\max_{|\alpha|\le j}\sup_{\mathbb R^{2n}}|D^\alpha b_j|,\qquad a_j=\frac{2^{-j}}{1+M_j},\qquad \beta=\sum_{j\ge1}a_jb_j.$$ Each $M_j$ is finite since the derivatives have compact support. For every fixed multi-index $\alpha$, the tail with $j\ge|\alpha|$ is bounded termwise by $2^{-j}$, so the series of derivatives converges uniformly. Apply [F2] on coordinate segments in closed boxes, successively to every derivative: the limit is $C^\infty$ with $D^\alpha\beta=\sum_ja_jD^\alpha b_j$. Every derivative vanishes on $F$, while at any point outside $F$ some $b_j$ is $1$; hence $\beta\ge0$ and $\beta^{-1}(0)=F$. This argument proves smoothness across $F$, without assuming local finiteness of the bumps there. [F1, F2, given, construct]

2.1 Choose a compact neighborhood of $\partial D$ contained in the strict Levi collar of $\rho$ and in $U$. Compactness of this neighborhood times the unit sphere gives a uniform positive lower Levi bound for $\rho$ and a finite upper absolute Levi bound for $\beta$. Thus for some $t>0$, $\psi:=\rho+t\beta$ is strictly plurisubharmonic on an open neighborhood $V$ of $\partial D$. On $F$ it agrees with $\rho$, so it is negative on $D$ and zero on $\partial D$; on $U\setminus F$ both $\rho\ge0$ and $\beta>0$, so $\psi>0$. In particular $\{\psi<0\}=D$ and the zero set of $\psi$ in $U$ is exactly $\partial D$. [F4, step 1.1, given]

3.1 Choose a bounded open $W$ with $F\subset W$ and $\overline W\subset U$. Then $\partial W$ is compact and disjoint from $F$, so $\min_{\partial W}\psi>0$. On the compact set $\overline W\setminus O$ the function $\psi$ is positive whenever that set is nonempty. On $\overline W\setminus V$ the compact subset where $\psi\ge0$ also has a positive minimum if nonempty, since its zero set would lie in $\partial D\subset V$. Choose a positive regular value $\varepsilon$ smaller than all these positive minima, using [F3]. Then $S=\{x\in W:\psi(x)<\varepsilon\}$ contains $F$, has $\overline S\subset O\cap W$, and its boundary lies in $V\cap\{\psi=\varepsilon\}$. Regular-level charts show that $\partial S$ is smooth and that the inside half of each such chart is connected. Consequently every connected component of $S$ has smooth boundary locally defined by $\psi-\varepsilon$, with strictly positive tangential Levi form by step 2.1. [F3, F4, step 2.1]

4.1 Components of the open set $S$ are open and cover the compact set $F$, so finitely many distinct components $G_i$ cover $F$. Their union $G$ satisfies the required compact containment. In each $G_i$ choose an open neighborhood $N_i$ of $\partial G_i$ with $\overline{N_i}\subset V$. Put $f=-\log(\varepsilon-\psi)$ on $G_i$. It is smooth and plurisubharmonic near $\partial G_i$ by [F5], and tends to $+\infty$ there. The set $\overline{G_i}\setminus N_i$ is a compact subset of $G_i$, so choose $A_i$ greater than its maximum of $f$. The function $$E_i=\max\{f,A_i\}+|z|^2$$ is continuous and plurisubharmonic: near the boundary both terms in the maximum are psh; near every point outside $N_i$ the maximum is the constant $A_i$; these descriptions agree on their overlap. Its sublevels are closed in $G_i$ and stay away from the boundary, hence are compact in the bounded $G_i$. Thus it is an exhaustion. [F4, F5, step 3.1, given]

5.1 The domains $G_i$ constructed in steps 3.1–4.1 have all the properties in the Statement, including when the original boundary has critical points or the original $\rho$ has zeros outside $\overline D$. [step 2.1, step 3.1, step 4.1] ∎
