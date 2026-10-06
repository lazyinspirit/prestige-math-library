---
id: cor-lax-shock-inequalities-for-convex-scalar-laws
kind: corollary
title: The Lax shock inequalities for convex scalar laws
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-piecewise-smooth-shock-and-one-sided-traces, thm-rankine-hugoniot-jump-condition, def-kruzhkov-entropy-solution, lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality, def-convex-and-strictly-convex-functions-on-euclidean-sets, thm-differentiable-convex-functions-and-monotone-derivatives, cor-mean-value-theorem, thm-ftc-second-part]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.1, (5.7) and discussion, pp. 32–33; §6.2, p. 53"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.3, pp. 16–19"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $f\in C^2(\mathbb R)$ be strictly convex. Consider a nontrivial
one-dimensional jump from the left trace $u^-$ to the right trace $u^+$ across
$x=s(t)$, with traces as in
[[def-piecewise-smooth-shock-and-one-sided-traces]], satisfying the
Rankine--Hugoniot condition of [[thm-rankine-hugoniot-jump-condition]]. The
jump is Kruzhkov entropy-admissible ([[def-kruzhkov-entropy-solution]]) if and
only if $u^->u^+$. In that case its speed is
$$s'=\frac{f(u^+)-f(u^-)}{u^+-u^-},$$
and it satisfies the Lax shock inequalities
$$f'(u^+)\le s'\le f'(u^-).$$
In particular, every nontrivial entropy-admissible jump is compressive; no
admissible jump increases the state across the shock
([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

## Facts & Assumptions

**Given:** a strictly convex $f\in C^2(\mathbb R)$, a nontrivial single-jump piecewise $C^1$ weak solution with left trace $u^-$, right trace $u^+$ across $x=s(t)$, and speed $\sigma=s'$ satisfying the Rankine--Hugoniot condition.

[F1] Rankine--Hugoniot and jump setup: the interface is the graph $x=s(t)$ with minus side $x<s(t)$ and plus side $x>s(t)$, and $\sigma(u^+-u^-)=f(u^+)-f(u^-)$, i.e. $\sigma=\bigl(f(u^+)-f(u^-)\bigr)/(u^+-u^-)$ since the jump is nontrivial ([[def-piecewise-smooth-shock-and-one-sided-traces]], [[thm-rankine-hugoniot-jump-condition]]).

[F2] Chord criterion: with $F(z)=f(z)-f(u^-)-\sigma(z-u^-)$, the jump satisfies the Kruzhkov entropy inequalities for all convex entropy pairs if and only if $F(z)(u^+-u^-)\ge0$ for every $z$ between $u^-$ and $u^+$; this is the notion of entropy admissibility at a single jump ([[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]], [[def-kruzhkov-entropy-solution]]).

[F3] Strict convexity: for a differentiable strictly convex $f$, the graph lies strictly below every chord on the interior of its interval; the derivative $f'$ is strictly increasing: it is nondecreasing by the cited theorem, and equality at $a<b$ would make it constant on $[a,b]$, so FTC would make $f$ affine there, contradicting strict convexity; and for $a<b$ the difference quotients satisfy $f'(a)\le\frac{f(b)-f(a)}{b-a}\le f'(b)$ with strict inequalities throughout, while the mean value theorem gives $\frac{f(b)-f(a)}{b-a}=f'(c)$ for some $c\in(a,b)$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]], [[thm-differentiable-convex-functions-and-monotone-derivatives]], [[cor-mean-value-theorem]], [[thm-ftc-second-part]]).

## Proof

**Proof technique:** direct.

1.1 **The forward case is never admissible.** Suppose $u^-<u^+$. The chord criterion of [F2] requires $F(z)\ge0$ for all $z\in[u^-,u^+]$. By strict convexity [F3] the graph of $f$ lies strictly below the chord through $(u^-,f(u^-))$ and $(u^+,f(u^+))$ on $(u^-,u^+)$, and that chord is $z\mapsto f(u^-)+\sigma(z-u^-)$ because its slope is $\sigma$; hence $F(z)<0$ for every $z\in(u^-,u^+)$, contradicting the criterion. So a nontrivial Rankine--Hugoniot jump with $u^-<u^+$ is not entropy-admissible. [F1, F2, F3]


2.1 **The backward case is admissible.** Suppose $u^->u^+$. On the interval between the states, strict convexity gives $F(z)<0$ for $u^+<z<u^-$ and $F(u^+)=F(u^-)=0$. Since $u^+-u^-<0$, the product $F(z)(u^+-u^-)$ is positive for interior $z$ and vanishes at the endpoints, so the chord criterion of [F2] holds and the jump is entropy-admissible. Together with step 1.1 this shows that a nontrivial Rankine--Hugoniot jump is entropy-admissible if and only if $u^->u^+$; in particular no admissible jump increases the state. [F1, F2, F3]


3.1 **The Lax inequalities.** Assume $u^->u^+$ and write $a=u^+<b=u^-$. By [F1], $\sigma=\frac{f(b)-f(a)}{b-a}=\frac{f(u^+)-f(u^-)}{u^+-u^-}$, which is the stated speed. By the mean value theorem [F3] there is $c\in(a,b)$ with $f'(c)=\sigma$, and since $f'$ is strictly increasing, $f'(u^+)=f'(a)<f'(c)=\sigma<f'(b)=f'(u^-)$; a fortiori $f'(u^+)\le\sigma\le f'(u^-)$, the Lax shock inequalities. [F1, F3, step 1.1, step 2.1] ∎
