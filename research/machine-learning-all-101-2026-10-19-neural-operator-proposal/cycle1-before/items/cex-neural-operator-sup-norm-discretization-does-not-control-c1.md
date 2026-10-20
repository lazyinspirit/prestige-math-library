---
id: cex-neural-operator-sup-norm-discretization-does-not-control-c1
kind: counterexample
title: "A one-neuron kernel has convergent uniform quadratures and divergent C1 quadratures"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-neural-operator, alg-neural-operator-mesh-discretization, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-countable-choice, thm-single-hidden-layer-universal-approximation]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "Kovachki et al., Neural Operator, Theorem 8 and Appendix E"
      url: "https://arxiv.org/pdf/2108.08481"
---

## Statement refuted

Assume Countable Choice. The following assertion is false: continuous embeddings of the input and output Banach function spaces into continuous functions, together with continuous activations, imply that all compatible Riemann-sum realizations of every neural operator converge in the output Banach norm uniformly on compact input sets. This fails for input space $C([0,1])$ and output space $C^1([0,1])$, even for a single integral with a kernel represented by one neuron and the singleton input set consisting of the constant function $1$.

## Statement references

[Kovachki et al., Theorem 8 and Appendix E](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** Countable Choice, $D=D'=(0,1)$, $A=C([0,1])$ with the supremum norm, and $U=C^1([0,1])$ with norm $\|u\|_U=\|u\|_\infty+\|u'\|_\infty$.

[F1] Smooth plateau cutoffs exist with prescribed nested compact supports by [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]. In particular fix a smooth $\beta:\mathbb R\to[0,1]$, supported in $(-1,1)$, with $\beta(0)=1$.

[F2] A general integral-kernel neural operator and its volume-weighted tagged quadratures are defined in [[def-neural-operator]] and [[alg-neural-operator-mesh-discretization]].

[F3] Under Countable Choice, continuous nonpolynomial scalar activations give fixed-depth compact-uniform MLP density, by [[thm-single-hidden-layer-universal-approximation]]; the stated choice principle is [[def-countable-choice]].

## Counterexample

1.1 For integers $n\ge2$ put $t_n=3\cdot2^{-n-2}$, $w_n=2^{-4n-4}$, $H_n=2^{2n}$ and $\rho_n(s)=H_n\beta((s-t_n)/w_n)$. Their supports are disjoint subintervals of $(0,1)$: successive centers differ by $3\cdot2^{-n-3}$, which exceeds $w_n+w_{n+1}$, and each radius is smaller than its center. Define $\rho(s)=\sum_{n\ge2}\rho_n(s)$ for $s>0$, and $\rho(s)=0$ for $s\le0$. On each compact subinterval of $(0,\infty)$ only finitely many summands are nonzero. Moreover $m_n=\int\rho_n\le2H_nw_n=2^{-2n-3}$, so $B=\sum_{n\ge2}m_n<1$. Define $\sigma(s)=\int_0^s\rho(t)\,dt$ for $s\ge0$ and $\sigma(s)=0$ for $s<0$. The tail mass bound proves continuity at zero and uniform convergence of the primitives $\sigma_n(s)=\int_0^s\rho_n(t)\,dt$; thus $\sigma=\sum\sigma_n$ is continuous on $\mathbb R$, bounded by $B$, and smooth on $(0,\infty)$. It is a legitimate continuous activation. It is bounded and nonconstant, hence is not polynomial even almost everywhere: continuity would make an almost-everywhere polynomial identity hold everywhere, and a bounded polynomial is constant. Thus [F3] also places it in every finite-dimensional $\mathcal A_0$ class if that premise is imposed when defining the source integral subclass. ReLU belongs to $\mathcal A_0^L$ by the same supplier and its linear growth. [given, F1, F3, construct, algebra]

2.1 Set $\kappa(x,y)=\sigma(x+y)$ and $G(a)(x)=\int_0^1\sigma(x+y)a(y)\,dy$. The kernel is exactly a one-hidden-unit network on $(x,y)$ with weights $(1,1)$, activation $\sigma$, output weight $1$, and zero biases. The other activations can be the identity. Each $G_n^*(a)(x)=\int_0^1\sigma_n(x+y)a(y)\,dy$ is $C^1$, with derivative $\int_0^1\rho_n(x+y)a(y)\,dy$, and both its function norm and derivative norm are at most $m_n\|a\|_\infty$. Consequently both the function series and derivative series converge uniformly. To verify differentiation without an interchange assumption, the finite partial sums satisfy $S_N(x)-S_N(0)=\int_0^x S_N'(t)\,dt$; uniform convergence permits passage to the limit in this equality, and the fundamental theorem of calculus gives a continuous derivative. Hence $G:A\to U$ is bounded linear, with $\|G(a)\|_U\le2B\|a\|_\infty$. Both $A$ and $U$ embed continuously into $C([0,1])$. To instantiate the source integral subclass as well, take $S_0$ and $S_1$ to have constant kernel $1$ and zero bias, and use $\kappa(x,y)=\sigma(x+y)$ as the final kernel, choosing ReLU for the input and intermediate kernel networks and activations. No intermediate activation occurs at depth $N=2$. This yields $\widehat G(a)=(\int_0^1a)G(1)$, a bounded map $A\to U$. For $a=1$, both preceding integral layers and their quadratures are exactly the constant $1$, so its final continuum and quadrature outputs are precisely those analyzed below. Constant kernels are exact networks through their affine output biases. [step 1.1, F2, construct, algebra]

3.1 At refinement $n$ partition $(0,1)$ into $2^n$ dyadic cells of length $h_n=2^{-n}$. Choose the first tag to be $t_n\in(0,h_n)$ and choose the midpoint of every other cell. Let $Q_n(a)(x)=h_n\sum_{j=1}^{2^n}\sigma(x+\xi_{n,j})a(\xi_{n,j})$. These are compatible tagged Riemann sums, with mesh diameter tending to zero and the same continuum parameters at every refinement. Since every tag is positive, each summand is smooth in a neighborhood of $[0,1]$, so $Q_n(a)\in U$. For $a=1$, all derivative summands are nonnegative and $Q_n(1)'(0)\ge h_n\rho(t_n)=h_nH_n=2^n$. On the other hand, substitution in the continuum integral gives $G(1)(x)=\int_x^{x+1}\sigma(s)\,ds$ and $G(1)'(0)=\sigma(1)-\sigma(0)=B$. Thus $\|Q_n(1)-G(1)\|_U\ge2^n-B\to\infty$. [step 1.1, step 2.1, F2, construct, algebra]

4.1 The set $K=\{1\}\subset A$ is compact. The continuous integrand $(x,y)\mapsto\sigma(x+y)$ on $[0,1]^2$ is uniformly continuous: otherwise pairs at distances tending to zero with a fixed positive function gap have convergent subsequences in the compact square and contradict continuity. Writing its modulus of continuity as $\omega$, the cellwise estimate gives $\|Q_n(1)-G(1)\|_\infty\le\omega(h_n)\to0$. Thus the genuine supremum-norm conclusion coexists with divergence in the admissible output norm, refuting the asserted inference. [step 3.1, step 1.1, algebra] ∎

## Remark

The defect occurs in Appendix E's opening reduction from continuous embeddings to equality with $C(\bar D)$. Such an embedding bounds the supremum norm by the Banach norm; it supplies no reverse inequality. This counterexample also uses a network kernel, rather than only an arbitrary continuous kernel. It refutes the specified volume-weighted tagged quadratures in the asserted norm; it does not assert that no other finite-dimensional approximation to this bounded integral operator can exist.
