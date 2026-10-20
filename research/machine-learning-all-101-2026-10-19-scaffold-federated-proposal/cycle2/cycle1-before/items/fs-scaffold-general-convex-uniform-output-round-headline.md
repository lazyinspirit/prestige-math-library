---
id: fs-scaffold-general-convex-uniform-output-round-headline
kind: false-statement
title: SCAFFOLD general-convex round headline with a uniform server-iterate output
status: draft
origin: session
deps:
  - alg-scaffold
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Karimireddy et al., SCAFFOLD, Theorem III and Appendix E, Theorem VII and output (22)"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
---

## Statement

There is a universal constant $C>0$ with the following property. Let
$N,d,K\ge1$, $1\le S\le N$, and $\beta>0$. Let each
$f_i:\mathbb R^d\to\mathbb R$ be convex and differentiable with
$\beta$-Lipschitz gradient, and suppose
$f=N^{-1}\sum_{i=1}^N f_i$ attains its minimum $f^\star=f(x^\star)$.
Set $D=\|x_0-x^\star\|_2$ and $F=f(x_0)-f^\star$. Run Option II
SCAFFOLD with independent uniform size-$S$ client samples, fresh
conditionally unbiased local stochastic gradients of conditional variance
at most $\sigma^2$, and gradient-consistent initial controls
$c_i^0=\nabla f_i(x_0)$ and $c^0=N^{-1}\sum_i c_i^0$.
Set $\eta_g=\sqrt S$. For every $\epsilon>0$ there are an integer $R\ge1$
and a single constant local stepsize $\eta_l>0$, used in all rounds, such
that
$$ 0<\widetilde\eta=K\eta_l\eta_g\le\min\left\{\frac1{81\beta},\frac{\epsilon KS}{57\sigma^2}\right\},\qquad R\le C\left(1+\frac{\sigma^2D^2}{KS\epsilon^2}+\frac{\beta D^2}{\epsilon}+\frac{NF}{S}\right), $$
where the variance restriction is omitted when $\sigma=0$, and the
uniform server-iterate output $\bar x_R=x_J$, with $J$ independent and
uniform on $\{0,\ldots,R-1\}$, satisfies
$\mathbb E[f(\bar x_R)-f^\star]\le\epsilon$.

## Statement references

[[alg-scaffold|SCAFFOLD local, control and server updates]]

[Karimireddy et al., SCAFFOLD, Theorem III and Appendix E](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The claim in the Statement, interpreted with a universal constant
independent of the objective scale, client count and target accuracy.

[F1] [[alg-scaffold]]: with $K=S=1$ and $\eta_g=1$, a selected client's
Option II control becomes the gradient queried at the round-start server
iterate; all other client controls persist, and the server control is their
population mean.

## Refutation

1.1 Fix $N\ge2$ and $\beta>0$. Take $d=K=S=1$, $\eta_g=1$, $x_0=1$, $f_i(x)=\beta x^2/2$ for every client, and the exact oracle $g_i(x)=\beta x$. Every client is convex and $\beta$-smooth, the equal-client objective has minimizer $x^\star=0$ and minimum zero, and $D=1$, $F=\beta/2$, $\sigma=0$. Initialize $c_i^0=\beta$ and $c^0=\beta$, as required. Sample one independent uniform client in every round. These deterministic exact oracles satisfy every conditional unbiasedness and variance hypothesis; all moments at a finite time are finite because there are finitely many sample histories. [given, construct, algebra]

2.1 Let $t=\beta\eta_l\in(0,1/81]$, put $a_i^r=c_i^r/\beta$ and $m_r=N^{-1}\sum_i a_i^r$, and let $I_r$ be the client sampled to pass from time $r$ to time $r+1$. The updates [F1] become $$ x_{r+1}=(1-t)x_r+t(a_{I_r}^r-m_r),\qquad a_{I_r}^{r+1}=x_r,\qquad a_j^{r+1}=a_j^r\quad(j\ne I_r),\qquad a_i^0=1. $$ Conditioning on the history through time $r$, the sampled difference has mean zero. Therefore, for $z_r=\mathbb E x_r^2$ and $V_r=\mathbb E[N^{-1}\sum_i(a_i^r-m_r)^2]$, $$ \mathbb E x_r=(1-t)^r,\qquad z_{r+1}=(1-t)^2z_r+t^2V_r,\qquad z_r\ge(1-t)^{2r}. $$ The claimed uniform output has expected objective gap $F R^{-1}\sum_{r=0}^{R-1}z_r$. [F1, step 1.1, algebra]

3.1 Put $L=\lfloor1/(4t)\rfloor$. Since $t\le1/81$, we have $L\ge1/(8t)$. For every integer $0\le r<L$, Bernoulli's inequality gives $(1-t)^{2r}\ge1-2rt\ge1/2$. The bias lower bound in step 2.1 thus implies, for every $R\ge1$, $$ \frac1R\sum_{r=0}^{R-1}z_r\ge\frac{\min\{R,L\}}{2R}\ge\min\left\{\frac12,\frac1{16tR}\right\}. $$ This argument uses only the scalar inequality $(1-t)^n\ge1-nt$ for integers $n\ge0$, which follows by induction. [step 2.1, algebra]

3.2 After $r$ updates, at least $N-r$ table entries are still equal to their initial value 1. If $U$ is their set, the pairwise variance identity gives $$ \frac1N\sum_i(a_i^r-m_r)^2=\frac1{2N^2}\sum_{i,j}(a_i^r-a_j^r)^2\ge\frac{|U|}{N^2}\sum_i(a_i^r-1)^2\ge\left(1-\frac rN\right)\frac1N\sum_i(a_i^r-1)^2 $$ whenever $r\le N$. Indeed, retain in the double sum the pairs with exactly one index in $U$; pairs with both indices in $U$ contribute zero, and the two orientations cancel the factor 2. [step 2.1, algebra]

4.1 For a fixed client $i$ and $0\le s<r$, the event that its last update before time $r$ occurs at time $s$ has probability $N^{-1}(1-1/N)^{r-1-s}$. On this event $a_i^r=x_s$. The event involves only $I_s,\ldots,I_{r-1}$, which are independent of $x_s$; hence its conditional law of $x_s$ is the unconditional law. If the client was never updated, $a_i^r=1$. Consequently, taking expectations in step 3.2 and using $\mathbb E(x_s-1)^2\ge(\mathbb E x_s-1)^2$, we obtain $$ V_r\ge\left(1-\frac rN\right)\frac1N\sum_{s=0}^{r-1}\left(1-\frac1N\right)^{r-1-s}\left(1-(1-t)^s\right)^2. $$ The expectation inequality follows by expanding the nonnegative variance $\mathbb E(x_s-\mathbb E x_s)^2$. [step 2.1, step 3.2, algebra]

5.1 Suppose $2\lceil1/t\rceil\le r\le N/2$. In step 4.1 restrict to $s\ge\lceil1/t\rceil$, leaving at least $r/2$ indices. Since $(1-t)^s\le e^{-ts}\le e^{-1}<1/2$, each squared factor is at least $1/4$. Bernoulli's inequality gives $(1-1/N)^{r-1-s}\ge1-r/N\ge1/2$; the prefactor $1-r/N$ is also at least $1/2$. Thus $$ V_r\ge\frac r{32N}. $$ Here $1-t\le e^{-t}$ follows, for example, because the derivative of $e^{-t}-(1-t)$ is $1-e^{-t}\ge0$ for $t\ge0$, and its value at zero is zero. [step 4.1, algebra]

6.1 Assume $R\le N/2$ and set $q=tR$. If $q<16$, step 3.1 gives $R^{-1}\sum_{r<R}z_r\ge1/256$. If $q\ge16$, then $R\ge16/t\ge1296$. Consider all integers $r\in[\lceil R/2\rceil,\lfloor3R/4\rfloor]$. There are at least $R/8$ such integers; each satisfies $2\lceil1/t\rceil\le r\le N/2$, so step 5.1 gives $V_r\ge R/(96N)$. Also $r+L\le3R/4+1/(4t)\le R-1$: the final inequality follows from $R/4-1/(4t)\ge15/(4t)>1$. [step 3.1, step 5.1, algebra]

7.1 Iterating the exact nonnegative recurrence in step 2.1, each $t^2V_r$ from step 6.1 contributes $t^2V_r(1-t)^{2j}$ to $z_{r+1+j}$ for $0\le j<L$. These indices all lie below $R$ by step 6.1. Their weights sum to at least $L/2\ge1/(16t)$, by the Bernoulli estimate in step 3.1. All contributions are nonnegative, so they can be summed, including when their target indices overlap. It follows that $$ \frac1R\sum_{r<R}z_r\ge\frac1R\,t^2\frac R8\frac R{96N}\frac1{16t}=\frac{q}{12288N}\qquad(q\ge16). $$ Combining this with step 3.1 and using $\max\{u,v\}\ge\sqrt{uv}$ gives $R^{-1}\sum_{r<R}z_r\ge1/\sqrt{196608N}>1/(1024\sqrt N)$. The $q<16$ bound in step 6.1 gives the same conclusion. Thus, for every admissible constant stepsize and every $1\le R\le N/2$, $$ \mathbb E[f(x_J)-f^\star]\ge\frac F{1024\sqrt N}. $$ [step 2.1, step 3.1, step 6.1, algebra]

8.1 Now take $\beta=N^{-2}$ and $\epsilon=FN^{-3/4}=\tfrac12N^{-11/4}$. On this family the claimed round expression is exactly $$ 1+\frac{\sigma^2D^2}{KS\epsilon^2}+\frac{\beta D^2}{\epsilon}+\frac{NF}{S}=1+2N^{3/4}+\frac1{2N}. $$ For any proposed universal constant $C>0$, choose an integer $N$ large enough that $C(1+2N^{3/4}+1/(2N))\le N/2$ and $N^{1/4}>1024$. Such integers exist because the displayed expression divided by $N$ tends to zero. Every round count allowed by the claim then satisfies $R\le N/2$, but step 7.1 gives $\mathbb E[f(x_J)-f^\star]\ge F/(1024\sqrt N)>FN^{-3/4}=\epsilon$, for every admissible constant step. This contradicts the asserted accuracy and refutes the Statement. [step 1.1, step 7.1, algebra] ∎

## Remarks

This refutation concerns the literal constant-step, uniform random
server-iterate output above. The source's Theorem III prints the round
term $NF/S$, while its Appendix E allows unspecified output weights in
equation (22). This item does not refute all those possible weighted
outputs, suffix sampling, the last iterate, arithmetic averages of
iterates, or time-varying stepsizes. Fixed powers of logarithms do not
rescue the uniform-output headline: on the chosen family they multiply
$O(N^{3/4})$ by a fixed power of $\log N$, still giving $o(N)$ rounds.

The exact convex finite-round potential estimate is a separate valid
claim. Its initial-control contribution is
$14N\widetilde\eta C_0/(SR)$ with
$C_0\le2\beta F$ under gradient-consistent initialization. The
refutation does not challenge that estimate; it challenges the claimed
round complexity obtained by removing the accuracy dependence from
the initialization term.
