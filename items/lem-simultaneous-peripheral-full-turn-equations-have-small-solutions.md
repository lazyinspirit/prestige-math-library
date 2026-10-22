---
id: lem-simultaneous-peripheral-full-turn-equations-have-small-solutions
kind: lemma
title: Simultaneous peripheral full-turn equations have unique small solutions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-banach-fixed-point
proof_strategy: direct
axiom_use: Full AC is retained for the geometric consumers; the
  finite-dimensional contraction argument itself uses the stated constructive
  Banach theorem.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: William P. Thurston, The Geometry and Topology of Three-Manifolds
      url: https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf
      locator: Section 5.8, the local generalized surgery map; its simultaneous
        existence and continuity step is proved directly here
dependency_level: 0
---

## Statement

Assume AC. Let $k\ge1$ and let $\tau_1,\ldots,\tau_k$ be holomorphic on a neighborhood of $0\in\mathbb C^k$, with $\operatorname{Im}\tau_i(0)\ne0$. Put $v_i(u)=u_i\tau_i(u)$. At a coordinate with $u_i\ne0$, define real coefficients $(p_i,q_i)$ by
$$p_i u_i+q_i v_i(u)=2\pi i;$$
at $u_i=0$ define its parameter to be $\infty$ in the one-point compactification $S_i=\mathbb R^2\cup\{\infty\}$.

There are neighborhoods $U$ of $0$ and $V$ of $(\infty,\ldots,\infty)$ in $\prod_iS_i$ for which this parameter map is a homeomorphism $U\to V$. One may take $V=\prod_i(\{(p,q):p^2+q^2>R^2\}\cup\{\infty\})$ for a sufficiently large $R$. Every such tuple has a unique small simultaneous solution, with $u_i=0$ exactly at the unfilled coordinates. Uniformly as the tuple tends to the complete point, writing $w_i=2\pi i/(p_i+q_i\tau_i(0))$ for finite coordinates and $w_i=0$ at $\infty$, one has
$$u_i=w_i+O(|w_i|\|w\|_\infty),\qquad \|u\|_\infty\le\tfrac43\|w\|_\infty.$$
This analytic assertion allows real coefficients of either orientation. Primitive integral coefficients are included, but no geometric completion is asserted by the equations alone.

## Facts & Assumptions

**Given:** AC, the positive integer $k$, the holomorphic functions and their nonreal complete values.

[A1] Full choice is [[def-axiom-of-choice]].

[F1] A contraction with constant strictly less than one on a nonempty complete metric space has a unique fixed point, given by its convergent iterates. [[thm-banach-fixed-point]]

## Proof

1.1 Shrink to a closed convex polydisc $B_\epsilon=\{\|u\|_\infty\le\epsilon\}$ inside the holomorphy domain. Its compactness and continuity of the derivatives give a common Lipschitz constant $L$ for all $\tau_i$ there, by integrating their derivatives along line segments. Put $A=\max_i|\operatorname{Im}\tau_i(0)|^{-1}$ and shrink $\epsilon$ so that $AL\epsilon\le1/4$ and every $\operatorname{Im}\tau_i(u)$ stays nonzero on $B_\epsilon$. For any nonzero real pair $(p,q)$, $p+q\tau_i(0)\ne0$ and $|q/(p+q\tau_i(0))|\le A$. Moreover $|p+q\tau_i(0)|\ge c\sqrt{p^2+q^2}$ for one common $c>0$: the real-linear maps $(p,q)\mapsto p+q\tau_i(0)$ are invertible, and their moduli have a positive minimum on the unit circle. [A1, given, algebra]

2.1 For a parameter tuple with finite pairs outside a sufficiently large radius $R$, define $a_i=q_i/(p_i+q_i\tau_i(0))$ and the $w_i$ in the Statement. At an infinite coordinate put $a_i=w_i=0$. On $B_\epsilon$ define $T_i(u)=w_i/[1+a_i(\tau_i(u)-\tau_i(0))]$. Step 1.1 makes every denominator have modulus at least $3/4$, hence $\|T(u)\|_\infty\le(4/3)\|w\|_\infty$. Also $\|T(u)-T(u')\|_\infty\le(16/9)AL\|w\|_\infty\|u-u'\|_\infty$. Since step 1.1 makes $\|w\|_\infty\le2\pi/(cR)$, choose $R$ so large that $\|w\|_\infty\le\epsilon/2$ and $(16/9)AL\|w\|_\infty\le1/2$. The closed polydisc is nonempty and complete, and $T$ maps it into itself, so [F1] supplies its unique fixed point. Its defining equations are exactly the simultaneous full-turn equations at finite coordinates, and $u_i=0$ at infinite ones. At a finite coordinate $w_i\ne0$, so its solution $u_i$ cannot vanish. Every solution in $B_\epsilon$ is such a fixed point and is therefore this one. [F1, step 1.1, construct, algebra]

3.1 The fixed-point bound in step 2.1 gives $\|u\|_\infty\le(4/3)\|w\|_\infty$. Its coordinate equation also gives $|u_i-w_i|\le(4/3)A|w_i|\,|\tau_i(u)-\tau_i(0)|\le(16/9)AL|w_i|\|w\|_\infty$. This proves the stated uniform expansion, including every $w_i=0$ coordinate exactly. [step 1.1, step 2.1, algebra]

3.2 Define the coefficient map $\Phi$ on the open polydisc by the equations in the Statement. If $u_i\ne0$, the real-linear equation $p_i+q_i\tau_i(u)=2\pi i/u_i$ has a unique real pair, continuously depending on $u$. If $u_i\to0$, the norms of these pairs tend to infinity uniformly with the other coordinates in $B_\epsilon$: boundedness of $\tau_i$ gives $2\pi/|u_i|=|p_i+q_i\tau_i(u)|\le C\sqrt{p_i^2+q_i^2}$. Thus $\Phi$ is continuous also at its infinite coordinates, with $\Phi(0)=(\infty,\ldots,\infty)$. Let $V$ be the product neighborhood specified using $R$ in step 2.1, and put $U=\Phi^{-1}(V)$ inside the open polydisc. This is an open neighborhood of $0$. Every parameter in $V$ has its unique solution in the interior by step 2.1, so $\Phi:U\to V$ is bijective. [step 1.1, step 2.1, algebra]

4.1 Its inverse is continuous on the whole product neighborhood, including partially unfilled tuples. If parameter tuples converge, their fixed-point maps $T$ from step 2.1 converge uniformly on $B_\epsilon$. For a finite limiting coordinate, $a_i,w_i$ converge in the displayed rational formulas. For an infinite limiting coordinate, $w_i\to0$ while $|a_i|\le A$, so the corresponding $T_i$ tends uniformly to zero by the $3/4$ denominator bound, regardless of the directions of the real pairs. If $u,u'$ are the two fixed points and $T,T'$ their maps, then $\|u-u'\|_\infty\le\tfrac12\|u-u'\|_\infty+\sup_{B_\epsilon}\|T-T'\|_\infty$, proving continuity. This establishes the homeomorphism. No primitivity was used in this analytic proof; primitivity enters only when a later geometric construction identifies a smooth solid-torus meridian. [step 2.1, step 3.2, algebra] ∎
