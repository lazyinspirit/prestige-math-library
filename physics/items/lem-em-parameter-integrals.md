---
id: lem-em-parameter-integrals
kind: lemma
title: "Differentiation under the integral sign over a compact measurable set and over a compact $C^1$ surface"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, cor-mean-value-theorem, thm-heine-cantor-metric, thm-heine-borel-rn, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, def-surface-integral-on-a-compact-c-one-hypersurface, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-countable-choice, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-integral-triangle-inequality, lem-surface-integral-is-independent-of-c-one-boundary-charts, def-metric-uniform-continuity, def-metric-compactness, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, thm-continuous-preimages-of-borel-sets-are-borel, thm-borel-sigma-algebra-of-a-subspace-is-the-trace]
dependency_roles:
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-borel-sigma-algebra-of-a-subspace-is-the-trace: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  lem-surface-integral-is-independent-of-c-one-boundary-charts: mathematical-premise
  def-metric-uniform-continuity: mathematical-premise
  def-metric-compactness: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, §9.1 (Leibniz integral rule), Theorem 9.1.1"
      url: "https://www.jirka.org/ra/realanal2.pdf"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis, 2014), §1.10, §1.12, §2.7"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

**Set form.** Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]), used to establish the Lebesgue measure space of [[thm-lebesgue-measure-is-a-complete-measure]]. Let $K\subseteq\mathbb R^n$ be compact, Lebesgue measurable and of finite Lebesgue measure $\lambda_n(K)<\infty$, let $a<b$, and let $f$ be a real-valued function, defined and continuous together with its partial derivative $\partial_tf$ on an open neighbourhood of $K\times[a,b]$ in $\mathbb R^{n+1}$. Then $t\mapsto\int_Kf(x,t)\,d\lambda_n(x)$ is differentiable at every $t\in(a,b)$ with

$$\frac{d}{dt}\int_Kf(x,t)\,d\lambda_n(x)=\int_K\partial_tf(x,t)\,d\lambda_n(x),$$

and at $t=a$ and $t=b$ it has relative (one-sided) derivatives, taken within $[a,b]$, both equal to the same displayed integral. Equivalently, for every $t\in[a,b]$ and every sequence $h_k\to0$ with $h_k\ne0$ and $t+h_k\in[a,b]$,

$$\lim_{k\to\infty}\frac{1}{h_k}\Bigl(\int_Kf(x,t+h_k)\,d\lambda_n(x)-\int_Kf(x,t)\,d\lambda_n(x)\Bigr)=\int_K\partial_tf(x,t)\,d\lambda_n(x).$$

**Surface form.** Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]) for the surface measure of [[def-surface-integral-on-a-compact-c-one-hypersurface]]. Let $S$ be a fixed compact embedded $C^1$ hypersurface in $\mathbb R^m$, $m\ge2$, and let $f$ be real-valued, defined and continuous together with $\partial_tf$ on an open neighbourhood of $S\times[a,b]$. Then $t\mapsto\int_Sf(\sigma,t)\,dS(\sigma)$ is differentiable in the same relative sense with

$$\frac{d}{dt}\int_Sf(\sigma,t)\,dS(\sigma)=\int_S\partial_tf(\sigma,t)\,dS(\sigma).$$

The statements are pointwise in $t$ and make no claim about moving parameter sets $K(t)$ or $S(t)$, about singularities crossing $K$ or $S$, about differentiability of $\partial_tf$, or about differentiation in the spatial variables; only the one-dimensional parameter $t$ is differentiated. Integrals are Lebesgue integrals, and the surface integrals are those of the cited surface measure; the case $K=\varnothing$ or $\lambda_n(K)=0$ is included and the two sides vanish.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$ for both forms; an integer $n\ge1$; a compact measurable $K\subseteq\mathbb R^n$ with $\lambda_n(K)<\infty$; reals $a<b$; an open $N\subseteq\mathbb R^{n+1}$ with $K\times[a,b]\subseteq N$ and a real-valued $f$ on $N$ such that $f$ and its partial derivative $\partial_tf$ are continuous on $N$; and, for the surface form, a compact embedded $C^1$ hypersurface $S$ in $\mathbb R^m$ with a corresponding $f$ on a neighbourhood of $S\times[a,b]$.

[A1] Lebesgue measure-space premise: assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For $n\ge1$, $(\mathbb R^n,\mathcal L(\mathbb R^n),\lambda_n)$ is a complete measure space; the definition alone introduces only a family of sets and a restricted set function ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]]). All set-form integrals below use this measure space. The surface form retains the same choice premise for its declared finite surface measure.

[F1] Mean value theorem: for $a<c<d<b$-type real intervals, a function continuous on a closed interval and differentiable in its interior attains its average rate of change at an interior point; in particular, for fixed $x$ and $s,u\in[a,b]$ with $s\ne u$ there is $\tau$ strictly between $s$ and $u$ with $f(x,u)-f(x,s)=\partial_tf(x,\tau)(u-s)$ ([[cor-mean-value-theorem]]).

[F2] On the Lebesgue measure space established by [A1], integrability of bounded measurable functions on finite-measure sets, and the triangle inequality for the integral: a bounded measurable real function $g$ on measurable $K$ with $\lambda_n(K)<\infty$ is integrable, and $\lvert\int_Kg\,d\lambda_n\rvert\le\int_K\lvert g\rvert\,d\lambda_n$ ([[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-integral-triangle-inequality]]). A continuous function on the compact set $K$ is Borel measurable on $K$ by continuous preimages; its Borel preimages are traces of Borel sets of $\mathbb R^n$, and these are Lebesgue measurable under [A1] ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]], [[thm-borel-sets-are-lebesgue-measurable]]). Boundedness and the simple-integral/order rules in [F3] give integrability on the finite-measure $K$.

[F3] On the measure space established by [A1], linearity, monotonicity and nonnegative homogeneity of the Lebesgue integral: $\int_K(\alpha g+\beta h)\,d\lambda_n=\alpha\int_Kg\,d\lambda_n+\beta\int_Kh\,d\lambda_n$ for integrable $g,h$ and real $\alpha,\beta$, and for measurable $0\le g\le h$ one has $\int g\,d\lambda\le\int h\,d\lambda$, with $\int c\,g\,d\lambda=c\int g\,d\lambda$ for $c>0$; moreover $\int_Ec\,d\lambda_n=c\,\lambda_n(E)$ for $c\ge0$ and measurable $E$, in particular $\int_K\eta\,d\lambda_n=\eta\,\lambda_n(K)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F4] Compactness and uniform continuity: $K\times[a,b]$ is a compact subset of $\mathbb R^{n+1}$ ([[thm-heine-borel-rn]], [[def-metric-compactness]]), and every continuous map on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]], [[def-metric-uniform-continuity]]).

[F5] Surface measure: the surface integral on a compact embedded $C^1$ hypersurface defines a finite Borel measure, independent of the finite charts and partitions used, continuous and monotone on nonnegative functions, and linear on signed functions integrable against it ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct; represent the difference quotient by the mean value theorem as an average of $\partial_tf$ and estimate it by uniform continuity on the compact product.

1.1 The function $F(t):=\int_Kf(x,t)\,d\lambda_n(x)$ is defined and finite for every $t\in[a,b]$: for fixed $t$ the map $x\mapsto f(x,t)$ is continuous on $K$, hence bounded and Borel measurable, and $\lambda_n(K)<\infty$, so it is integrable by [F2]. [given, A1, F2, algebra]

2.1 Fix $s,t\in[a,b]$ with $s\ne t$ and put $g(x):=\frac{f(x,s)-f(x,t)}{s-t}$ for $x\in K$; then $g$ is continuous on $K$, hence bounded, Borel measurable and integrable by [F2]. For every $x\in K$ the mean value theorem [F1] applied to the one-variable function $u\mapsto f(x,u)$ on the closed interval with endpoints $t$ and $s$ supplies a point $\tau$ strictly between $t$ and $s$ with $f(x,s)-f(x,t)=\partial_tf(x,\tau)(s-t)$, that is, $g(x)=\partial_tf(x,\tau)$; no point $\tau$ is selected as a function of $x$ anywhere below, only the pointwise inequality $|g(x)-\partial_tf(x,t)|<\eta$ that such an existential $\tau$ yields, together with the separately defined continuous function $g$. By linearity of the integral [F3] applied to the integrable functions $f(\cdot,s)$ and $f(\cdot,t)$ of step 1.1, $F(s)-F(t)=\int_K\bigl(f(x,s)-f(x,t)\bigr)d\lambda_n(x)=(s-t)\int_Kg\,d\lambda_n(x)$, so the difference quotient is $\int_Kg\,d\lambda_n$. [step 1.1, F1, F2, F3, algebra]

3.1 Given $\varepsilon>0$, put $\eta:=\varepsilon/(1+\lambda_n(K))>0$; the function $\partial_tf$ is uniformly continuous on the compact set $K\times[a,b]$ by [F4], so there is $\delta>0$ such that $\lvert\partial_tf(x,u)-\partial_tf(x,v)\rvert<\eta$ whenever $(x,u),(x,v)\in K\times[a,b]$ with $\lvert u-v\rvert<\delta$. Fix $s,t\in[a,b]$ with $0<\lvert s-t\rvert<\delta$ and let $g$ be the continuous function of step 2.1. For every $x\in K$ the mean value point $\tau$ supplied by [F1] lies strictly between $t$ and $s$, so $\lvert\tau-t\rvert<\lvert s-t\rvert<\delta$ and therefore $\lvert g(x)-\partial_tf(x,t)\rvert=\lvert\partial_tf(x,\tau)-\partial_tf(x,t)\rvert<\eta$; the function $h:=g-\partial_tf(\cdot,t)$ is continuous on $K$, hence bounded and Borel measurable, so by [F2] and [F3] $\bigl\lvert\frac{F(s)-F(t)}{s-t}-\int_K\partial_tf(x,t)\,d\lambda_n(x)\bigr\rvert=\bigl\lvert\int_Kh\,d\lambda_n\bigr\rvert\le\int_K\lvert h\rvert\,d\lambda_n\le\int_K\eta\,d\lambda_n=\eta\,\lambda_n(K)=\frac{\varepsilon\lambda_n(K)}{1+\lambda_n(K)}<\varepsilon$; the case $\lambda_n(K)=0$ is covered by the same chain, both sides vanishing. No mean-value point is selected as a function of $x$ in this estimate; $\mathrm{AC}_\omega$ has already supplied the Lebesgue measure-space premise [A1]. [step 2.1, F2, F3, F4, algebra]

4.1 Step 3.1 shows that for every $t\in[a,b]$ and every sequence $h_k\to0$ with $h_k\ne0$ and $t+h_k\in[a,b]$ the difference quotients converge to $\int_K\partial_tf(x,t)\,d\lambda_n(x)$: for interior $t$ this is differentiability with the stated derivative, and at $t=a$ (respectively $t=b$), where only $h_k>0$ (respectively $h_k<0$) is admissible, it is the relative derivative there; because $N$ is open, $\partial_tf(x,t)$ is the genuine two-sided partial derivative, so the relative endpoint derivative exists and equals the displayed integral. This proves the set form. [step 3.1, algebra]

5.1 Surface form: let $G(t):=\int_Sf(\sigma,t)\,dS(\sigma)$, a finite real number for each $t$ by [F5]. Fix $s,t\in[a,b]$ with $s\ne t$ and put $g(\sigma):=\frac{f(\sigma,s)-f(\sigma,t)}{s-t}$; $g$ is continuous on the compact $S$, hence $\sigma\mapsto g(\sigma)-\partial_tf(\sigma,t)$ is continuous, bounded and integrable against $dS$, and by linearity of the surface integral [F5] on the integrable functions $G(s)-G(t)=\int_S\bigl(f(\sigma,s)-f(\sigma,t)\bigr)dS(\sigma)=(s-t)\int_Sg\,dS(\sigma)$. For every $\sigma\in S$ the mean value theorem [F1] supplies $\tau$ strictly between $t$ and $s$ with $g(\sigma)=\partial_tf(\sigma,\tau)$, and again no $\tau$ is selected as a function; uniform continuity of $\partial_tf$ on the compact set $S\times[a,b]$ by [F4], the finiteness of the surface measure $S(S)$ and the monotonicity and triangle inequality for the surface integral [F5] then give, for $0<\lvert s-t\rvert<\delta$ with the $\delta$ of step 3.1 applied to $\eta:=\varepsilon/(1+S(S))$, the pointwise bound $\lvert g(\sigma)-\partial_tf(\sigma,t)\rvert<\eta$ and hence $\bigl\lvert[G(s)-G(t)]/(s-t)-\int_S\partial_tf(\sigma,t)\,dS(\sigma)\bigr\rvert=\bigl\lvert\int_S\bigl(g-\partial_tf(\cdot,t)\bigr)dS\bigr\rvert\le\eta\,S(S)<\varepsilon$, exactly as in steps 2.1 and 3.1 with $S$ in place of $K$ and $dS$ in place of $d\lambda_n$. Passing to the limit as in step 4.1 gives the surface form, including the relative endpoint derivatives. [step 3.1, step 4.1, F1, F4, F5, algebra] ∎

## Remarks

- The proof is the difference-quotient argument of the published rectangle theorem in the more general setting of a compact measurable parameter set and of a fixed compact $C^1$ surface; the finite measure (or finite surface measure) of the parameter set is what makes the uniform error bound convert into an integral error bound.
- No moving set is treated. For a moving surface the parametrization itself depends on $t$ and additional terms appear; that transport identity is proved separately using the moving-patch definition on this page.
