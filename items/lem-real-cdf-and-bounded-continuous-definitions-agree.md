---
id: lem-real-cdf-and-bounded-continuous-definitions-agree
kind: lemma
title: Real cdf and bounded continuous definitions agree
deps: ["thm-portmanteau-theorem", "def-convergence-in-distribution-for-real-random-variables", "thm-continuity-from-above-for-measures", "thm-continuity-from-below-for-measures", "thm-heine-borel-rn"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, Theorem 3.2.9, pp. 119–120
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For real random variables, the CDF continuity-point definition of convergence in distribution agrees with weak convergence of their laws.

## Facts & Assumptions

[F1] [[thm-portmanteau-theorem]]: For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

[F2] [[def-convergence-in-distribution-for-real-random-variables]]: For real random variables $(X_n)$ and $X$, write $X_n\Rightarrow X$, or
$X_n\to X$ **in distribution**, when
$$F_{X_n}(x)\longrightarrow F_X(x)$$
at every continuity point $x$ of $F_X$. Here $F_X$ is the CDF from
def-cumulative-distribution-function-of-a-random-variable and continuity
points are those of def-atom-and-continuity-point-of-a-law.

[F3] [[thm-continuity-from-above-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be a decreasing sequence of measurable sets for a measure $\mu$. If $\mu(E_{n_0})<+\infty$ for some $n_0$, then

$$\mu\left(\bigcap_{n\in\mathbb N}E_n\right)=\inf_{n\in\mathbb N}\mu(E_n).$$

[F4] [[thm-continuity-from-below-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$, so $E_n\subseteq E_{n+1}$. Then

$$\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n).$$

No finiteness hypothesis is required.

[F5] [[thm-heine-borel-rn]]: Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
(lem-metrics-on-rn). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ (def-metric-compactness).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   (def-metric-topology) and bounded
   (def-metric-bounded-diameter).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   (lem-real-line-is-a-metric-space), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
(thm-complete-and-totally-bounded-implies-compact) is not.

The hypothesis $n \ge 1$ is inherited from lem-metrics-on-rn, which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Use F4 for increasing rays. Use F3 for decreasing rays and intervals of finite probability. For a probability law $\mu$, write $F(t)=\mu((-\infty,t])$. Continuity from above and below of finite measures show F is right-continuous, has limits zero and one at the two infinities, and has jump $\mu(\{t\})$ at t. Thus a continuity point has $\mu(\{t\})=0$. If $\mu_n\Rightarrow\mu$, F1 on $(-\infty,t]$ gives $F_n(t)\to F(t)$ at every such point, exactly F2. [F1, F2, F3, F4]

1.2 Conversely assume convergence of CDFs at continuity points of F. Fix bounded continuous f, $M=\|f\|_\infty$, and $\eta$>0. Choose continuity points a<b with $\mu((-\infty,a])+\mu((b,\infty))<\eta$. They exist because tails tend to zero and the positive jumps form a countable set: at most r atoms have mass at least 1/r. CDF convergence makes the same sum of two tails less than 2eta for all large n. [given, algebra]

2.1 The closed bounded interval $[a,b]$ is compact by F5. On [a,b], continuity is uniform: for each point choose a neighborhood on which oscillation is small, extract a finite subcover by compactness, and use the minimum of the finitely many smaller radii. Choose a finite partition $a=t_0<\cdots<t_m=b$ by continuity points with oscillation of f on each interval below $\eta$. Then $\mu_n((t_{j-1},t_j])=F_n(t_j)-F_n(t_{j-1})$ converges to the corresponding $\mu$ mass. Integrals of the finite step approximation therefore converge. Its error inside (a,b] is at most $\eta$ for each law; the outside error is at most $3M\eta$ in the comparison of the two integrals, by step 1.2. Let $\eta$ decrease to zero. This proves weak convergence. [step 1.2, F5] ∎
