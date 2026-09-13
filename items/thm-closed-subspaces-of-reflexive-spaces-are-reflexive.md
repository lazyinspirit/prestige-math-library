---
id: thm-closed-subspaces-of-reflexive-spaces-are-reflexive
kind: theorem
title: Closed subspaces of reflexive spaces are reflexive
status: draft
origin: pipeline
deps: ["def-reflexive-banach-space", "def-annihilator-and-preannihilator", "thm-relative-hahn-banach-geometric-separation", "lem-closed-subspace-of-a-banach-space-is-banach", "def-hahn-banach-extension-principle-relative", "thm-relative-hahn-banach-norm-preserving-extension"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "Theorem 2.71(ii), closed-subspace proof, pp. 90–91"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://web.archive.org/web/20210425204615if_/https://math.jhu.edu/~sire/brezis.pdf"
      locator: "Proposition 3.20, p. 70"
proof_strategy: direct
---

## Statement

**Assume HB.**  If $X$ is a real or complex reflexive Banach space and
$Y\subseteq X$ is a closed linear subspace with the restricted norm, then $Y$
is reflexive.

## Facts & Assumptions

**Given:** HB, a real or complex reflexive Banach space $X$, and a closed linear subspace $Y\subseteq X$.

[F1] Reflexivity is surjectivity of the canonical evaluation map ([[def-reflexive-banach-space]]).

[F2] For a subset $M\subseteq X$, $M^\perp$ consists of the members of $X^*$ that vanish on $M$ ([[def-annihilator-and-preannihilator]]).

[F3] Under HB, a point outside a nonempty closed convex subset of a real or complex normed space is uniformly strictly separated from it by the real part of a bounded scalar-linear functional ([[thm-relative-hahn-banach-geometric-separation]], part (ii)).

[F4] A closed linear subspace of a Banach space is Banach with its restricted norm ([[lem-closed-subspace-of-a-banach-space-is-banach]]).

[F5] HB is the real dominated-extension principle over ZF ([[def-hahn-banach-extension-principle-relative]]).

[F6] Under HB, every bounded scalar-linear functional on any linear subspace of a normed space has a norm-preserving extension to the ambient space ([[thm-relative-hahn-banach-norm-preserving-extension]]).

## Proof

**Proof technique:** pull a bidual functional back along dual restriction, represent it in $X$, and prove that its representing vector lies in $Y$.

1.1 Let $R:X^*\to Y^*$ be restriction, $R(f)=f|_Y$.  It is scalar-linear and bounded with $\lVert Rf\rVert\leq\lVert f\rVert$.  Hence for a supplied $y^{**}\in Y^{**}$ the composite $x^{**}=y^{**}\circ R$ belongs to $X^{**}$.  Since $X$ is reflexive, [F1] supplies $x\in X$ such that $J_Xx=x^{**}$, meaning $f(x)=y^{**}(f|_Y)$ for every $f\in X^*$. [F1, given, algebra]

2.1 If $f\in Y^\perp$, then $f|_Y=0$, so step 1.1 gives $f(x)=y^{**}(0)=0$.  Thus every functional annihilating $Y$ also annihilates $x$. [F2, step 1.1]

3.1 We claim $x\in Y$.  This is immediate if $Y=X$.  Otherwise suppose $x\notin Y$; then $Y$ is a nonempty closed convex set and [F3] supplies $0\ne f\in X^*$, $a\in\mathbb R$, and $\varepsilon>0$ with $\operatorname{Re}f(y)\leq a-\varepsilon<a+\varepsilon\leq\operatorname{Re}f(x)$ for every $y\in Y$.  Since $ty\in Y$ for every real $t$, the real-linear function $\operatorname{Re}f$ can be bounded above on the line $\mathbb Ry$ only when $\operatorname{Re}f(y)=0$.  In the complex case applying this also to $iy\in Y$ gives $\operatorname{Re}f(iy)=-\operatorname{Im}f(y)=0$, so in either field $f|_Y=0$.  Taking $y=0$ in the separation inequality gives $0\leq a-\varepsilon$ and hence $\operatorname{Re}f(x)\geq a+\varepsilon\geq2\varepsilon>0$, contradicting step 2.1.  Therefore $x\in Y$. [F2, F3, step 2.1, discharge-contradiction]

4.1 Let $g\in Y^*$ be arbitrary.  By norm-preserving Hahn–Banach [F6], one functional $f\in X^*$ extends $g$; this also covers $g=0$ and $Y=\{0\}$.  Steps 1.1 and 3.1 then give $y^{**}(g)=y^{**}(f|_Y)=f(x)=g(x)=(J_Yx)(g)$.  Hence $y^{**}=J_Yx$. [F6, step 1.1, step 3.1]

5.1 The closed-subspace theorem [F4] makes $Y$ a Banach space.  Since the arbitrary $y^{**}\in Y^{**}$ of step 1.1 lies in the range of $J_Y$ by step 4.1, that canonical map is surjective, and [F1] makes $Y$ reflexive.  If $Y=0$, its bidual and all maps above are zero and the same argument gives the singleton range directly. [F1, F4, step 1.1, step 4.1]

6.1 HB is used exactly twice: geometric separation in step 3.1 and the extension of one supplied $g$ in step 4.1; [F5] records the principle being assumed.  No compactness principle or simultaneous family choice occurs. [F3, F5, F6, step 3.1, step 4.1, step 5.1] ∎

## Remarks

Closedness of $Y$ has two distinct jobs: it makes $Y$ complete, and it permits
separation of a hypothetical representing vector outside $Y$.  No assertion is
made for a nonclosed subspace.
