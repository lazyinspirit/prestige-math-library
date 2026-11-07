---
dependency_level: 0
id: thm-geometric-heat-flow-brascamp-lieb-inequality
kind: theorem
title: Geometric Brascamp–Lieb inequality by heat flow
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-countable-choice
- lem-positive-definite-gaussian-integral
- thm-tonelli-and-fubini-for-completed-product-measures
- thm-fatou-lemma
- thm-linear-change-of-variables-for-lebesgue-measure
- lem-complex-translation-and-approximate-identity-interfaces
- lem-smooth-unit-mass-compact-bump-on-euclidean-space
- thm-dominated-convergence
- lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'Bennett–Carbery–Christ–Tao, Brascamp–Lieb inequalities: finiteness, structure
      and extremals'
    url: https://arxiv.org/pdf/math/0505065
---

## Statement

Assume Countable Choice. Let $m\ge1$ be an integer and let $T_j:\mathbb R^n\to\mathbb R^{d_j}$, $1\le j\le m$, be linear maps satisfying $T_jT_j^*=I$ and $\sum_jp_jT_j^*T_j=I$, with $p_j>0$. For every nonnegative integrable $f_j$,
$$ \int_{\mathbb R^n}\prod_jf_j(T_jx)^{p_j}\,dx\le\prod_j\left(\int_{\mathbb R^{d_j}}f_j\right)^{p_j}. $$
The least constant is $1$. Zero-dimensional target factors, if present, carry unit point mass and can be omitted.

## Statement references

[Source proof development](https://arxiv.org/pdf/math/0505065)

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] Under Countable Choice the Gaussian integral, nonnegative Tonelli on completed Euclidean products, Fatou, and invertible linear change of variables hold ([[lem-positive-definite-gaussian-integral]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-fatou-lemma]], [[thm-linear-change-of-variables-for-lebesgue-measure]]). The remaining explicit interfaces are [[def-countable-choice]] [[lem-complex-translation-and-approximate-identity-interfaces]] [[lem-smooth-unit-mass-compact-bump-on-euclidean-space]] [[thm-dominated-convergence]] [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]].

[F2] Positive compact mollification and its $L^1$ convergence are [[lem-complex-translation-and-approximate-identity-interfaces]] and [[lem-smooth-unit-mass-compact-bump-on-euclidean-space]]; the nonnegative convolution preserves positivity.

## Proof

1.1 Taking traces gives $\sum_jp_jd_j=n$ and the quadratic identity gives $\sum_jp_j|T_jx|^2=|x|^2$. Each $T_j$ is surjective. Pullbacks of target null sets are source null: split source into kernel and its orthogonal complement, use the invertible restriction on the complement, and integrate the indicator on bounded kernel boxes by Tonelli, then take their countable union. Thus a.e. representatives of inputs do not affect the source product. Completed measurable inputs can first be replaced by Borel representatives. [given, F1, F2, construct, algebra]

1.2 First let every $f_j$ be nonnegative smooth, compactly supported and have positive mass. Put $u_j(t,y)=(4\pi t)^{-d_j/2}\int e^{-|y-z|^2/(4t)}f_j(z)\,dz$, $F(t,x)=\prod_ju_j(t,T_jx)^{p_j}$ and $Q(t)=\int F(t,x)\,dx$. The explicit kernel is positive and satisfies $\partial_tu_j=\Delta u_j$. On $a\le t\le b$ with $a>0$, compact support in $B(0,R_j)$ gives $|\nabla\log u_j(t,y)|\le(|y|+R_j)/(2a)$ by differentiating the convolution and averaging its logarithmic gradient. Kernel derivatives have polynomial times Gaussian bounds. The quadratic identity above therefore gives integrable Gaussian times polynomial bounds for all the source expressions used below, uniformly on every such time interval. [given, F1, F2, construct, algebra]

1.3 Write $v_j=\nabla\log u_j(t,T_jx)$. The product and chain rules and $T_jT_j^*=I$ give $\partial_tF=\Delta_xF+F(\sum_jp_j|v_j|^2-|\sum_jp_jT_j^*v_j|^2)$. For any $z$, Cauchy–Schwarz and the quadratic identity bound $|\langle\sum_jp_jT_j^*v_j,z\rangle|^2$ by $(\sum_jp_j|v_j|^2)|z|^2$, so the bracket is nonnegative. The bounds in the preceding step justify differentiation under the integral and integration by parts, first with compact cutoffs and then by the Gaussian bounds as their radii increase. Hence $\int\Delta F=0$ and $Q'(t)\ge0$. [given, F1, F2, construct, algebra]

1.4 As $t\downarrow0$ the convolutions converge pointwise to these continuous inputs, so Fatou bounds their source product integral by $\liminf Q(t)$. As $t\to\infty$, substitute $x=\sqrt t\,z$. Scaling cancels the factors $t^{-\sum p_jd_j/2}$ against the Jacobian. The integrand converges to $(4\pi)^{-n/2}e^{-|z|^2/4}\prod_j(\int f_j)^{p_j}$. For $t\ge1$, $|T_jz-w/\sqrt t|^2\ge|T_jz|^2/2-R_j^2$ supplies a dominating constant times $e^{-|z|^2/8}$. Dominated convergence, the Gaussian formula and monotonicity give the desired inequality for these inputs. [given, F1, F2, construct, algebra]

2.1 Extend to arbitrary nonnegative integrable inputs as follows. Truncate the value and support and convolve with a fixed nonnegative smooth compact unit-mass bump. This gives nonnegative smooth compact inputs with arbitrarily small $L^1$ error: for an indicator of a bounded box the translation error tends to zero by its boundary-strip volumes, hence for finite nonnegative box step functions by summation, and for an arbitrary $L^1$ function by its defining simple approximation and outer regular box covers. Convolution averages translation errors, so choosing the first reciprocal-integer convolution scale giving error at most $2^{-2r}$ is a specified construction. For each of the finitely many inputs take such approximants $h_{j,r}$. Tonelli implies $\sum_r|h_{j,r}-f_j|<\infty$ a.e.; hence they converge a.e. and their masses converge. The null-pullback argument and Fatou give the asserted inequality. A zero-mass input is zero a.e., and was already handled by null pullback. Finally standard Gaussian inputs make both sides equal by the quadratic identity and the Gaussian integral. This proves sharp constant $1$. [given, F1, F2, construct, algebra] ∎
