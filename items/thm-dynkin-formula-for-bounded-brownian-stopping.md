---
id: thm-dynkin-formula-for-bounded-brownian-stopping
kind: theorem
title: "Dynkin formula for bounded Brownian stopping"
status: draft
origin: pipeline
deps: [thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, cor-second-order-taylor-expansion-with-the-hessian, def-brownian-generator, def-d-dimensional-brownian-motion, def-c-c-and-c-c-infinity-on-rn, def-ck-and-multi-index-notation-in-several-variables, def-continuous-time-stopping-time, def-continuous-time-filtration-and-all-pairs-martingale, lem-brownian-motion-has-a-jointly-measurable-continuous-version, thm-multivariable-taylor-formula-with-lagrange-remainder, thm-heine-cantor-metric, thm-heine-borel-rn, lem-gaussian-even-moment-bound-for-brownian-increments, lem-conditioning-a-known-variable-and-an-independent-variable, thm-taking-out-what-is-known, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-dominated-convergence, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 2.10 and 3.5"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$ be a finite integer and let $B$ be
standard $d$-dimensional Brownian motion
[[def-d-dimensional-brownian-motion]] on a filtered probability space.
Use the following **vector filtration hypothesis**: $B$ is adapted, and for
$0\le s<t$ the entire vector $B_t-B_s$ is independent of $\mathcal F_s$
and has law $N_d(0,(t-s)I_d)$. Let $x\in\mathbb R^d$ and let $\tau$ be a
stopping time with $0\le\tau\le K$ everywhere for a fixed $K>0$.
Let $f\in C_c^2(\mathbb R^d)$, meaning a twice continuously differentiable
real function with compact support
[[def-c-c-and-c-c-infinity-on-rn]]
[[def-ck-and-multi-index-notation-in-several-variables]].

Fix one measurable probability-one event of continuity and zero start for
$B$, and replace its whole path by zero outside that event, obtaining
$\widehat B$. Write $B^x=x+\widehat B$ in the formula below. This normalization
is used for path evaluation and integration, while the vector filtration
hypothesis concerns the original adapted process. In particular no transfer
of adaptation through an arbitrary ambient null set is assumed. Then
$$E[f(B^x_\tau)]=f(x)+E\int_0^\tau Lf(B^x_s)\,ds,\qquad Lf=\tfrac12\Delta f.$$
The generator notation is that of [[def-brownian-generator]]. Both random
variables are measurable and bounded. They agree with the literal original
path expressions on the one specified full event, and the expectations do
not depend on the chosen normalization event. If the given deterministic bound holds only almost surely, replace $\tau$
by $\tau\wedge K$ for evaluation; the formula agrees on $\{\tau\le K\}$.
No shifted cylinder-space law
or stochastic integral is needed to interpret this identity.

## Facts & Assumptions

**Given:** AC, $d,B,(\mathcal F_t),x,K,\tau,f$ and the vector filtration hypothesis of the Statement.

[F1] A standard vector Brownian motion has a common measurable event of continuity and zero start; each coordinate is scalar Brownian motion. Normalizing its finitely many coordinates on that common event gives an everywhere-continuous, jointly measurable vector process, agreeing with $B$ there. [[def-d-dimensional-brownian-motion]] [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F2] The meaning of a stopping time is $\{\tau\le t\}\in\mathcal F_t$ for every $t\ge0$. Adaptation makes each original $B_t$ measurable for $\mathcal F_t$ for every $t\ge0$. [[def-continuous-time-stopping-time]] [[def-continuous-time-filtration-and-all-pairs-martingale]]

[F3] A $C^2$ function has a second-order Lagrange remainder after its linear Taylor polynomial along a line segment. Continuous functions on compact metric spaces are uniformly continuous; closed bounded Euclidean balls are compact. [[thm-multivariable-taylor-formula-with-lagrange-remainder]] [[cor-second-order-taylor-expansion-with-the-hessian]] [[thm-heine-cantor-metric]] [[thm-heine-borel-rn]]

[F4] For a Gaussian vector $Z$ of law $N_d(0,hI_d)$, its coordinates are independent centered $N(0,h)$ variables. In particular $EZ_iZ_j=h\delta_{ij}$, $E|Z|^2=dh$, and $E|Z|^4\le3d^2h^2$, using $(\sum_iZ_i^2)^2\le d\sum_iZ_i^4$ and the scalar fourth moment. [[def-d-dimensional-brownian-motion]] [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F5] An integrable variable independent of a sigma-algebra has constant conditional expectation; bounded known factors can be taken out, and conditional expectation has linearity and expectation preservation. [[lem-conditioning-a-known-variable-and-an-independent-variable]] [[thm-taking-out-what-is-known]] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]

[F6] Dominated convergence passes almost-sure limits through expectations when there is one integrable bound. [[thm-dominated-convergence]]

[F7] AC is the declared ambient assumption for the conditional-expectation interfaces above; it does not supply the Brownian motion, its filtration, or its Gaussian increment laws, which are given in the Statement and recorded in [F1], [F4], and [F5]. The function $Lf$ here is precisely one half of the sum of the second partial derivatives. [[def-axiom-of-choice]] [[def-brownian-generator]]

[F8] Under Countable Choice (supplied by AC), a bounded Riemann-integrable function on a nondegenerate compact interval has the same Lebesgue integral. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

## Proof

**Proof technique:** direct.

1.1 The functions $f$, its first partial derivatives and its second partial derivatives are continuous and vanish outside a compact set: outside the support of $f$ it vanishes on a neighborhood, so all these derivatives are zero. They are bounded: continuity provides a neighborhood with a finite bound at each point of the compact support, and a finite subcover gives a common bound. The Hessian $H_f$ is uniformly continuous on all of $\mathbb R^d$. To see the latter, enclose the support in a ball of radius $R$ and apply [F3] on the ball of radius $R+1$. For points at distance less than $1$, either both are in that larger ball or both Hessians vanish; this gives global uniform continuity. Fix $C$ bounding the Hessian operator norm and put $\omega(r)=\sup_{|y-z|\le r}\|H_f(y)-H_f(z)\|$. Then $0\le\omega(r)\le2C$ and $\omega(r)\to0$ as $r\downarrow0$. Applying the degree-one formula in [F3] and subtracting the base Hessian gives $$f(y+z)-f(y)=\nabla f(y)\cdot z+\tfrac12 z^{\mathsf T}H_f(y)z+R(y,z),\qquad |R(y,z)|\le\tfrac12\omega(|z|)|z|^2.$$ The remainder is defined by the displayed difference, so no measurable selection of the Lagrange point is used. [F3, given]

1.2 Fix a positive integer $n$, put $m=2^n$, $h=K/m$ and $t_j=jh$ for $0\le j\le m$. Let $\tau_n=h\lceil\tau/h\rceil$; then $\tau\le\tau_n\le K$ and $0\le\tau_n-\tau<h$ unless equality already holds. Each grid event $\{\tau_n>t_j\}=\{\tau>t_j\}$ belongs to $\mathcal F_{t_j}$ by [F2]. Pathwise telescoping for the original process $Y_t=x+B_t$ gives $$f(Y_{\tau_n})-f(Y_0)=\sum_{j=0}^{m-1}1_{\{\tau>t_j\}}\bigl(f(Y_{t_{j+1}})-f(Y_{t_j})\bigr).$$ This includes $\tau=0$ (every summand vanishes) and $\tau=K$ (every grid increment is included). [F2, given]

2.1 For every random vector $Y$ and Gaussian increment $Z$ of variance $hI_d$, regardless of their dependence, the uniform bound of step 1.1 and [F4] imply $$E|R(Y,Z)|\le\tfrac12\omega(\delta)dh+C\delta^{-2}3d^2h^2$$ for every $\delta>0$: split at $|Z|\le\delta$, and use $|Z|^2 1_{|Z|>\delta}\le\delta^{-2}|Z|^4$ on the complement. Thus there is a deterministic function $\varepsilon(h)\to0$ as $h\downarrow0$ such that $E|R(Y,Z)|\le h\varepsilon(h)$ uniformly in $Y$. Indeed divide the displayed bound by $h$, first send $h$ to zero for fixed $\delta$, and then send $\delta$ to zero. [F4, step 1.1]

2.2 Every grid evaluation is unchanged almost surely when $Y$ is replaced by $B^x=x+\widehat B$, because the processes agree on the common full event in [F1]. Joint measurability of $B^x$ makes $B^x_\tau$ measurable: the map $\omega\mapsto(\tau(\omega),\omega)$ is measurable into the product sigma-algebra, as is seen on rectangles. Alternatively its coordinates are the limits of the measurable finite grid evaluations $B^x_{\tau_n}$, since every path is continuous. Consequently $f(B^x_{\tau_n})\to f(B^x_\tau)$ everywhere and the variables are bounded by $\|f\|_\infty$. Their expectations converge by [F6]. [F1, F2, F6, step 1.2]

3.1 In each summand apply step 1.1 with $y=Y_{t_j}$ and $z=B_{t_{j+1}}-B_{t_j}$. The indicator, gradient and Hessian at $Y_{t_j}$ are bounded $\mathcal F_{t_j}$-measurable factors. The entire increment vector is independent of that sigma-algebra by the explicit hypothesis. Hence its coordinate means are zero and its conditional coordinate products have means $h\delta_{ik}$ by [F4] and [F5]. The linear term therefore has expectation zero, and the quadratic term has expectation $hE[1_{\{\tau>t_j\}}Lf(Y_{t_j})]$. All terms are integrable by bounded derivatives and Gaussian moments. The sum of the absolute remainder expectations is at most $mh\varepsilon(h)=K\varepsilon(h)$ by step 2.1. Since $Y_0=x$ almost surely, $$\left|E f(Y_{\tau_n})-f(x)-E\sum_{j=0}^{m-1}h1_{\{\tau>t_j\}}Lf(Y_{t_j})\right|\le K\varepsilon(h)\longrightarrow0.$$ [F4, F5, F7, step 1.1, step 2.1, step 1.2]

4.1 For each normalized path put $g(s)=Lf(B^x_s)$. This is continuous on $[0,K]$ and bounded by $\|Lf\|_\infty$. The sum in step 3.1 with $B^x$ is the left Riemann sum on $[0,\tau_n]$. Its difference from $\int_0^{\tau_n}g(s)ds$ is bounded by $K\sup_{|s-t|\le h}|g(s)-g(t)|$, which tends to zero by [F3]. The extra interval between $\tau$ and $\tau_n$ contributes at most $h\|Lf\|_\infty$. Thus these measurable sums converge everywhere to the stated pathwise Lebesgue integral, using [F8] (and the zero integral if $\tau_n=0$), which is therefore measurable, and each sum and the limit are bounded by $K\|Lf\|_\infty$. By [F6] their expectations converge. [F3, F6, F7, F8, step 1.2, step 2.2]

5.1 Passing to the limit in step 3.1 using steps 2.2 and 4.1 proves the asserted identity. Changing the normalization event changes neither random expression on the intersection of the two measurable full events, so the expectations are unchanged. The argument uses the original adapted process only on finite deterministic grids and never claims that the normalized process is adapted to the original filtration. [step 3.1, step 2.2, step 4.1, F1]

6.1 For $\tau=0$ the integral is zero and $B^x_0=x$ everywhere, and for $f=0$ both sides vanish. Deterministic stopping times are included; $d=1$ gives the scalar statement, while $d=0$ is excluded. If $Lf=0$ the displayed identity directly reduces to $E f(B^x_\tau)=f(x)$; no maximum principle or non-compact affine test is invoked. Compact support supplies uniform boundedness and Hessian continuity, and the deterministic bound $K$ controls the summed remainders and both dominated limits. Full AC is declared for the conditional-expectation interfaces identified in [F7] and supplies the Countable Choice used in [F8]; the Brownian and Gaussian data remain hypotheses. There is no additional path selection and no assertion for unbounded $\tau$. [F7, F8, step 1.1, step 3.1, step 2.2, step 4.1, step 5.1] ∎

## Source notes

Lawler's Brownian generator computation in Section 2.10 motivates the Taylor
argument. Here the stopped expectation identity is proved directly with
finite Gaussian grids, a uniform second-order remainder estimate, and two
bounded limits. It does not invoke the general multidimensional Ito theorem.
