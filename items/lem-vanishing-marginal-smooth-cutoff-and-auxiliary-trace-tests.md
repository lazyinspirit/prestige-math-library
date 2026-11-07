---
id: lem-vanishing-marginal-smooth-cutoff-and-auxiliary-trace-tests
kind: lemma
title: "Finite smooth tensor tests from a vanishing-marginal three-dimensional witness"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-euclidean-bump-for-a-compact-set-inside-an-open-set
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes"
      url: "https://arxiv.org/pdf/1407.4897v4"
      locator: "Adapted finite Riemann reconstruction of Theorem3.14 and full§5.4, printedpp40–42. Auxiliary marginal tests replace the source thin-slab partition shortcut; the finite polyhedral witness is kept at its complete original support and cutoff scope."
---

## Statement

Let $F$ be a specified bounded function, polynomial on finitely many polyhedral cells in $\mathbb R_{\ge0}^3$, zero off $t_1+t_2+t_3\le3/2$, with $I(F)=\int F^2>0$. Suppose each marginal $H_iF=\int_0^\infty F\,dt_i$ vanishes when the other coordinates sum to more than $5/4$, and
$$\rho=\frac{\sum_i\int_{\sum_{\ell\ne i}t_\ell\le3/4}(H_iF)^2}{I(F)}>2.$$
Then there exist $0<\theta<1$, positive constants $A,B,C<1$ with $4A/3<\theta$, $B+C<\theta$, $2B<\theta$, and specified FINITE real smooth tensor sums $f=\sum_qc_q\prod_\ell f_{q,\ell}$ and $g_i=\sum_qc_{i,q}\prod_\ell g_{i,q,\ell}$, whose factors are in $C_c^\infty(\mathbb R)$, with these properties. Every component has sum of its nonnegative support endpoints at most $A$. For a full component with $f_{q,i}(0)\ne0$, its other endpoints sum to at most $C$. Each auxiliary $g_i$ component has other endpoints summing to at most $B$. With
$$I_f=\int_{\mathbb R_{\ge0}^3}(\partial_1\partial_2\partial_3 f)^2,\quad U_i(t_{-i})=\partial_{-i}f(t_{-i},0),\quad V_i(t_{-i})=\partial_{-i}g_i(t_{-i},0),$$
we have $I_f>0$ and $\sum_i[2\int U_iV_i-\int V_i^2]>I_f$. All integrals are proper Riemann integrals of compact piecewise-continuous or smooth data. No choice hypothesis is assumed.

## Statement references

[Polymath8b](https://arxiv.org/pdf/1407.4897v4)

## Facts & Assumptions

**Given:** Exactly the specified finite function and inequalities in the Statement. A nonnegative support endpoint is $S(h)=\sup(\{t\ge0:h(t)\ne0\}\cup\{0\})$.

[F1] [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]] supplies finite-dimensional smooth cutoffs. A single nonnegative product bump can be normalized by its positive proper integral. Its derivatives and all finite tensor quadratures below are specified, so no sequence of unspecified witnesses is needed.

## Proof

1.1 Choose real numbers $2/\rho<\theta<1$ and $1/\rho<\alpha<\theta/2$. The scaled function $F_\alpha(t)=F(t/\alpha)$ has support sum at most $3\alpha/2$, marginal support sum at most $5\alpha/4$, and [given, algebra]
$$I(F_\alpha)=\alpha^3I(F),\qquad \sum_i\int_{\sum_{\ell\ne i}t_\ell\le3\alpha/4}(H_iF_\alpha)^2 =\alpha^4\rho I(F)>I(F_\alpha).$$
Set $B_* =3\alpha/4$. The three support margins $3\theta/4-3\alpha/2$, $\theta-(B_*+5\alpha/4)$ and $\theta-2B_*$ are positive. We shall spend only fixed sufficiently small portions of them. [given, algebra]

2.1 Translate $F_\alpha$ by $(\tau,\tau,\tau)$ into the positive orthant, extend it by zero to $\mathbb R^3$, and convolve with one nonnegative product smooth bump of integral1 supported on $[-\eta,\eta]^3$, where $0<\eta<\tau/4$. Call the result $G$. All these integrals are Riemann integrals: a finite union of cell faces contains every discontinuity of $F_\alpha$, and off their arbitrarily thin neighbourhoods the integrands are continuous. Finite rectangular Riemann sums commute; the total absolute contribution of a face neighbourhood is bounded by its volume times a fixed sup norm. This proves the required finite-dimensional integration interchanges, including marginal convolution. The function $G$ is smooth, zero unless $t_i\ge\tau-\eta$ and $\sum_i t_i\le A_0:=3\alpha/2+3(\tau+\eta)$. Its $i$th marginal vanishes when the other coordinates sum to more than $C_0:=5\alpha/4+2(\tau+\eta)$. [F1, step 1.1, construct, algebra]
Indeed a contributing convolution translate subtracts at most $\eta$ in each coordinate, and translation adds $\tau$ per coordinate; integrate first in the designated coordinate and use the given exact marginal cancellation. [F1, step 1.1, construct, algebra]

3.1 As $\tau,\eta$ tend to zero with $\eta<\tau/4$, $G\to F_\alpha$ in the proper squared norm. To see this directly, remove a neighbourhood of all finitely many cell faces and of the support boundary, of volume $O(\tau+\eta)$; there the absolute error is bounded by twice a fixed bound for $F_\alpha$. On the remaining finitely many compact cell interiors, polynomial continuity is uniform, so every contributing translate differs by an arbitrarily small fixed amount. Integrating these two bounds proves norm convergence without a measure-convergence theorem. For a function supported in a fixed simplex of side length $L$, Cauchy–Schwarz on each section and finite Riemann interchange give $\|H_iQ\|_2\le\sqrt L\|Q\|_2$. Hence the truncated marginal quadratic forms also converge. By the strict inequality of step 1.1 choose ONE sufficiently small positive $\tau,\eta$ so that [F1, step 1.1, step 2.1, algebra]
$$\sum_i\int_{\sum_{\ell\ne i}t_\ell\le B_*}(H_iG)^2>\int G^2>0,$$
and $A_0<3\theta/4$, $B_*+C_0<\theta$, $2B_*<\theta$. Fix these values before any later limit. [F1, step 1.1, step 2.1, algebra]

4.1 Choose a smooth scalar cutoff $0\le\chi\le1$, equal1 for $s\le B_*-\zeta$ and zero for $s\ge B_*-\zeta/2$, with sufficiently small fixed $\zeta>0$. Such a cutoff is obtained from [F1]. The bounded marginal functions have compact support, so the strip $B_*-\zeta<s<B_*$ contributes $O(\zeta)$ to their squared integrals, with a fixed constant. Put $K_i(t_{-i})=\chi(\sum_{\ell\ne i}t_\ell)H_iG(t_{-i})$. These are compact smooth functions, zero near each coordinate face, and supported where the other-coordinate sum is at most $B_0:=B_*-\zeta/2$. Thus, for sufficiently small $\zeta$, [F1, step 3.1, construct, algebra]
$$\sum_i\left[2\int H_iG\,K_i-\int K_i^2\right]>\int G^2>0.$$
The identity behind this estimate is $2H_iG\,K_i-K_i^2=(2\chi-\chi^2)(H_iG)^2$, between0 and $(H_iG)^2$, with exact equality to that square below $B_*-\zeta$. This introduces no thin-slab derivative estimate. [F1, step 3.1, construct, algebra]

5.1 On the nonnegative orthant define $f_0(t)=\int_{s_\ell\ge t_\ell}G(s)\,ds$. It is smooth and $\partial_1\partial_2\partial_3f_0=-G$, whereas $\partial_{-i}f_0(t_{-i},0)=H_iG(t_{-i})$. Because $G$ is zero near every coordinate face, $f_0$ is constant in any coordinate near zero. Extend by that constant to negative coordinates, then multiply by specified one-variable cutoffs equal1 on the entire positive support and on a neighbourhood of0, and supported in a fixed negative-to-positive compact interval. This gives a whole-space compact smooth extension, still denoted $f_0$. It is zero when the sum of positive coordinates exceeds $A_0$. If $t_i$ is in a sufficiently small neighbourhood of0 and the positive other coordinates sum to more than $C_0$, it is also zero: the tail integral in coordinate $i$ is then its full marginal, whose integrand is zero by step 2.1. Negative other coordinates can be replaced by0 in this argument because $G$ is supported in the positive orthant; multiplying by cutoffs preserves zero. [F1, step 2.1, step 4.1, construct, algebra]

6.1 Define the auxiliary primitive [F1, step 3.1, step 4.1, step 5.1, construct, algebra]
$$g_{i,0}(t)=\xi_i(t_i)\int_{s_\ell\ge t_\ell,\ \ell\ne i}K_i(s_{-i})\,ds_{-i},$$
where the specified smooth factor $\xi_i$ is1 near0 and has small nonnegative support endpoint $r>0$. Extend the other coordinates constantly through0 and multiply by negative cutoffs as above. Then $\partial_{-i}g_{i,0}(t_{-i},0)=K_i(t_{-i})$. Its other positive-coordinate sum is at most $B_0$, and its total positive-coordinate sum is at most $B_0+r$. Choose $r$ so small that $B_0+r<A_0$ (since $A_0>B_*$). Choose fixed constants $A>A_0$, $C>C_0$ and $B_0<B<B_*$ with $4A/3<\theta$, $C+B<\theta$, $2B<\theta$; these exist by step 3.1. Every support inclusion now has a fixed positive margin. [F1, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 Here is a finite tensor approximation retaining those exact margins. For either of the finitely many whole-space smooth compact functions $q=f_0,g_{1,0},g_{2,0},g_{3,0}$, convolve with a product bump $\prod_\ell\kappa_h$ supported in $[-h,h]^3$. Uniform continuity of derivatives through order3 gives $\|q*\kappa_h^{\otimes3}-q\|_{C^3}\to0$. Approximate this convolution by its finite grid Riemann sums [F1, step 5.1, step 6.1, construct, algebra]
$$\sum_{v\in\mathcal G}q(v)\,\Delta^3\prod_\ell\kappa_h(t_\ell-v_\ell).$$
The same finite grid approximates every derivative through order3 uniformly: each relevant integrand is continuous on a fixed compact rectangle of $(t,v)$, with a single uniform modulus of continuity. Outside a fixed rectangle both the target and sums vanish. Delete zero-coefficient terms and any term with a factor identically zero on the nonnegative half-line. For $f_0(v)\ne0$ its sum of positive coordinates is at most $A_0$, so its nonnegative right endpoints sum to at most $A_0+3h<A$. If its $i$th bump is nonzero at0 then $|v_i|<h$; choose $h$ inside the constant-extension neighbourhood of step 5.1. Nonzero coefficients then force the other positive coordinates to sum to at most $C_0$, giving other right endpoints at most $C_0+2h<C$. For $g_{i,0}(v)\ne0$ the other endpoints sum to at most $B_0+2h<B$, and total endpoints are at most $B_0+r+3h<A$. These are componentwise support facts, not merely support of their sum. [F1, step 5.1, step 6.1, construct, algebra]

8.1 Fix $h>0$ sufficiently small, and then ONE sufficiently fine finite grid for each of the four functions in step 7.1. Their tensor sums $f,g_i$ approximate the originals in $C^3$. All positive supports lie in the same fixed compact box, so their full mixed-derivative squared integrals and face derivative inner products converge as well: use $|\int u^2-\int v^2|\le V\|u-v\|_\infty(2\|v\|_\infty+\|u-v\|_\infty)$ on a box of volume $V$, and the corresponding polarized estimate on its faces. The strict margin in step 4.1 therefore yields precisely $I_f>0$ and $\sum_i(2\int U_iV_i-\int V_i^2)>I_f$. Their component endpoints satisfy every stated geometry bound by step 7.1. Only finitely many fixed smooth functions and finite grids were selected; natural-number least grids meeting the displayed uniform error bounds could equivalently be used. Thus no Countable Choice hypothesis or imported approximation theorem has been used. [F1, step 4.1, step 5.1, step 6.1, step 7.1, construct, algebra] ∎ [F1, step 4.1, step 5.1, step 6.1, step 7.1, construct, algebra]
