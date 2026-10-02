---
id: ex-first-cousin-gluing-on-a-pseudoconvex-domain
kind: example
title: "First Cousin gluing on the pseudoconvex domain $\\mathbb C$"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - cor-first-cousin-problem-pseudoconvex-domain
  - def-meromorphic-function-in-several-complex-variables
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - thm-algebra-of-complex-derivatives
  - def-holomorphic-function-in-several-complex-variables
  - ex-convex-subsets-of-rn-are-path-connected
  - thm-path-connected-implies-connected
  - lem-plane-exterior-of-a-closed-disc-is-path-connected
  - thm-metric-open-set-algebra
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Harald P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.3.2, printed pp. 79-80, where the first Cousin problem on a pseudoconvex domain is solved from the Levi problem; the two-chart data here are the classical explicit instance."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC). On $\mathbb C$ the sets
$$U_1:=\{z:|z|<2\},\qquad U_2:=\{z:|z|>1\}$$
and the functions $m_1:=1/z$ on $U_1$ and $m_2:=0$ on $U_2$ form compatible
first-Cousin data on the Hartogs pseudoconvex domain $\mathbb C$ in the sense of
[[cor-first-cousin-problem-pseudoconvex-domain]]: the cover is finite, each $m_i$
is meromorphic on $U_i$, and $m_1-m_2=1/z$ is holomorphic on
$U_1\cap U_2=\{1<|z|<2\}$. The global meromorphic function $G:=1/z$ satisfies
$G-m_1=0\in\mathcal O(U_1)$ and $G-m_2=1/z\in\mathcal O(U_2)$, so it realizes
the prescribed simple pole at $0$.

## Facts & Assumptions

**Given:** The Axiom of Choice; the plane $\mathbb C$; the sets $U_1$, $U_2$; the functions $m_1=1/z$ on $U_1$ and $m_2=0$ on $U_2$; the candidate $G=1/z$.

[F1] ([[cor-first-cousin-problem-pseudoconvex-domain]].) If $\Omega$ is a Hartogs pseudoconvex domain, $(U_i)_{i\in I}$ a locally finite open cover of $\Omega$ and $m_i$ meromorphic on $U_i$ with $m_i-m_j$ holomorphic on $U_i\cap U_j$ for all $i,j$, then there is a meromorphic $G$ on $\Omega$ with $G-m_i$ holomorphic on $U_i$ for every $i$.

[F2] A meromorphic function on an open $U$ is a function on an open dense $D\subseteq U$, holomorphic there, which near each point of $U$ equals a quotient $f/g$ of holomorphic functions with $g$ not identically zero on any component; every holomorphic function is meromorphic, and "$F-G$ is holomorphic on $V$" means that the difference admits a holomorphic extension to $V$ ([[def-meromorphic-function-in-several-complex-variables]]).

[F3] When $\Omega=\mathbb C^m$ one has $\delta_\Omega\equiv+\infty$, the boundary function is by convention the constant function $0$, and the whole space is Hartogs pseudoconvex ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F4] If $g:U\to\mathbb C$ is complex differentiable at $a$ with $g(a)\ne0$, then $1/g$ is complex differentiable at $a$ with $(1/g)'(a)=-g'(a)/g(a)^2$, and the identity function has derivative $1$ ([[thm-algebra-of-complex-derivatives]]); a function is holomorphic on $U$ when it is complex differentiable at every point of $U$ ([[def-holomorphic-function-in-several-complex-variables]]).

[F5] The Euclidean ball $B(0,2)\subseteq\mathbb C$ is convex and hence path-connected, and path-connected sets are connected ([[ex-convex-subsets-of-rn-are-path-connected]], [[thm-path-connected-implies-connected]]), while the exterior $\{z:|z|>1\}$ is open and path-connected ([[lem-plane-exterior-of-a-closed-disc-is-path-connected]]); balls are open and closed balls are closed in a metric space ([[thm-metric-open-set-algebra]]).

[F6] AC is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F6]; it is consumed only inside the supplier theorem [F1], whose proof carries its own choice hypotheses. The example exhibits $G$ by an explicit formula and selects nothing.

## Proof

**Proof technique:** direct.

1.1 (The cover.) By [F5] the set $U_1=B(0,2)$ is open, convex, path-connected and connected, and $U_2=\{z:|z|>1\}=\mathbb C\setminus\overline B(0,1)$ is open and path-connected, hence connected; moreover $U_1\cup U_2=\mathbb C$ and $U_1\cap U_2=\{z:1<|z|<2\}$, so $(U_1,U_2)$ is a finite, hence locally finite, open cover of $\mathbb C$ by domains. [F5, given, algebra]

1.2 (The meromorphic data.) By [F4] the identity $z\mapsto z$ is holomorphic on $\mathbb C$ and $z\mapsto1/z$ is holomorphic on $\mathbb C\setminus\{0\}$; hence $m_1=1/z$ is meromorphic on $U_1$ in the sense of [F2]: its domain $U_1\setminus\{0\}$ is open and dense in $U_1$, $m_1$ is holomorphic there, and at every point of $U_1$ it equals $f/g$ with $f:=1$ and $g:=z$, the denominator $g$ not vanishing identically on any component of $U_1$. Likewise $m_2=0$ is holomorphic, hence meromorphic, on $U_2$. [F2, F4, given, algebra]

2.1 (Compatibility.) On the overlap $U_1\cap U_2=\{1<|z|<2\}$, which does not contain $0$, the difference $m_1-m_2=1/z$ is holomorphic by [F4]; this is the compatibility clause of [F1], and $\mathbb C$ is Hartogs pseudoconvex by [F3], so the data satisfy the hypotheses of [F1]. [F1, F2, F3, F4, step 1.2, algebra]

3.1 (Existence by the Cousin theorem.) By [F1] there is a meromorphic function $G$ on $\mathbb C$ with $G-m_i$ holomorphic on $U_i$ for $i=1,2$. [F1, step 2.1]

4.1 (The explicit solution.) The function $G=1/z$ is meromorphic on $\mathbb C$ with domain $\mathbb C\setminus\{0\}$ by [F2] and [F4]; moreover $G-m_1=0$ is holomorphic on $U_1$, and $G-m_2=1/z$ is holomorphic on $U_2$ because $0\notin U_2$ and $z\mapsto1/z$ is holomorphic on $\mathbb C\setminus\{0\}$ by [F4]. So $G=1/z$ is a solution in the sense of [F1]: it differs from $m_i$ by a holomorphic function on each $U_i$, and its only pole is the simple pole at $0$ with principal part $1/z$, which is exactly the pole prescribed by the data. [F1, F2, F4, step 1.2, step 3.1, algebra]

5.1 (Conclusion.) The sets $U_1,U_2$ and the functions $m_1,m_2$ are compatible first-Cousin data on the Hartogs pseudoconvex domain $\mathbb C$, and the global meromorphic function $G=1/z$ realizes the prescribed simple pole at the origin, as claimed under the ambient Axiom of Choice [F6]. [F6, step 4.1] ∎
