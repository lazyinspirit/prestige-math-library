---
id: lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner
kind: lemma
title: "A positive rank-one Haar average is a nonzero compact intertwiner"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, cor-normalized-haar-probability-on-a-compact-group, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, def-strongly-continuous-unitary-representation, def-hilbert-space, def-real-and-complex-inner-product-space, thm-cauchy-schwarz-in-an-inner-product-space, def-topological-group, def-compact-space, def-hausdorff-space, def-bounded-linear-operator, def-operator-norm, def-compact-linear-operator, def-linear-basis, def-linear-combination-and-span, def-continuous-map-top, def-countable-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous, lem-finite-rank-operators-are-compact, lem-linear-combinations-of-compact-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, thm-bounded-operator-space-is-banach, def-banach-space, def-bochner-integrable-function, def-strongly-measurable-banach-valued-function, def-banach-valued-simple-function-and-integral, lem-banach-valued-simple-integral-is-well-defined, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, thm-bounded-linear-maps-commute-with-bochner-integration, thm-integrals-are-invariant-under-measure-preserving-maps, thm-compactness-under-continuous-maps, thm-compactness-agrees-with-metric-compactness, thm-compact-implies-complete-and-totally-bounded, def-totally-bounded, def-metric-ball, def-metric-space, def-borel-sigma-algebra, thm-continuous-preimages-of-borel-sets-are-borel, def-measure-space, lem-finite-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "David Vogan, Review of Harmonic Analysis on Compact Groups, §§2.1–2.16"
      url: "https://math.mit.edu/~dav/compactrev.ps"
    - title: "Vera Serganova, Representation Theory, Chapter III §§1.6–2.1"
      url: "https://math.berkeley.edu/~serganov/math252/Bookrep.pdf"
---

## Statement

Assume AC. Let $K$ be a compact Hausdorff group with normalized Haar
probability $\mu$ ([[cor-normalized-haar-probability-on-a-compact-group]],
[[def-topological-group]], [[def-compact-space]], [[def-hausdorff-space]]), let
$\pi:K\to U(H)$ be a strongly continuous unitary representation on a nonzero
complex Hilbert space $H$ ([[def-strongly-continuous-unitary-representation]],
[[def-hilbert-space]]), and let $\xi\in H$ with $\xi\ne0$. Write
$R_\xi x:=\langle x,\xi\rangle\xi$ and $\varphi(k):=\pi(k)R_\xi\pi(k)^{-1}$
([[def-real-and-complex-inner-product-space]]). Then $\varphi$ is continuous in
operator norm and Bochner integrable, and

$$Q_\xi:=\int_K\varphi(k)\,d\mu(k)$$

is a bounded operator that is self-adjoint with $\langle Q_\xi x,x\rangle\ge0$
for every $x\in H$, satisfies $Q_\xi\ne0$, is compact
([[def-compact-linear-operator]]), and commutes with $\pi(K)$: $\pi(g)Q_\xi=Q_\xi\pi(g)$
for every $g\in K$. The Axiom of Choice is consumed through Haar measure, the
Bochner framework and the compact-operator norm limit.

## Facts & Assumptions

**Given:** AC, a compact Hausdorff group $K$ with normalized Haar probability
$\mu$, a strongly continuous unitary representation $\pi$ on a complex Hilbert
space $H$, and $\xi\in H$, $\xi\ne0$. Under AC Countable Choice holds
([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[A1] Normalized Haar: $\mu$ is a left-invariant and right-invariant probability
Borel measure, and $\mu(U)>0$ for every nonempty open $U\subseteq K$
([[cor-normalized-haar-probability-on-a-compact-group]],
[[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]],
[[def-measure-space]]).

[A2] Each $\pi(k)$ is unitary with $\pi(k)^{-1}=\pi(k^{-1})$ and
$\langle\pi(k)x,y\rangle=\langle x,\pi(k)^{-1}y\rangle$, $\pi$ is a
homomorphism, and $k\mapsto\pi(k)x$ is continuous for every $x$
([[def-strongly-continuous-unitary-representation]]).

[A3] The inner product is linear in the first variable and conjugate-linear in
the second, $\langle x,y\rangle=\overline{\langle y,x\rangle}$,
$\|x\|^2=\langle x,x\rangle\ge0$ with equality only for $x=0$, and
$|\langle x,y\rangle|\le\|x\|\,\|y\|$
([[def-real-and-complex-inner-product-space]],
[[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A4] A bounded linear operator whose range admits an ordered basis of finite
length is compact ([[lem-finite-rank-operators-are-compact]],
[[def-compact-linear-operator]], [[def-bounded-linear-operator]],
[[def-operator-norm]], [[def-linear-basis]]); the span of a one-term list is
the set of its scalar multiples
([[def-linear-combination-and-span]], [[def-linear-basis]]).

[A5] Conjugation orbits of a bounded finite-rank operator are continuous in
operator norm ([[lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous]]).

[A6] Bochner framework: a strongly measurable function into a Banach space is
Bochner integrable exactly when the integral of its norm is finite, the integral
is the norm limit of the integrals of $L^1$-approximating simple functions, and
$\|\int_Ef\,d\mu\|\le\int_E\|f\|\,d\mu$
([[def-strongly-measurable-banach-valued-function]],
[[def-banach-valued-simple-function-and-integral]],
[[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]],
[[lem-bochner-integral-norm-inequality]], [[def-banach-space]],
[[thm-bounded-operator-space-is-banach]]). A bounded linear map commutes with
the Bochner integral ([[thm-bounded-linear-maps-commute-with-bochner-integration]]),
so for fixed $v,w\in H$ the bounded functional $S\mapsto\langle Sv,w\rangle$ on
$\mathcal B(H)$ gives
$\langle(\int_Kf\,d\mu)v,w\rangle=\int_K\langle f(k)v,w\rangle d\mu(k)$ for
every Bochner integrable $f:K\to\mathcal B(H)$.

[A7] Compactness tools: the image of a compact space under a continuous map is
compact, compactness of a metric space in the topological sense agrees with
metric compactness, and a compact metric space is totally bounded, so for every
real $\varepsilon>0$ it has a finite $\varepsilon$-net
([[thm-compactness-under-continuous-maps]],
[[thm-compactness-agrees-with-metric-compactness]],
[[thm-compact-implies-complete-and-totally-bounded]], [[def-totally-bounded]],
[[def-metric-ball]], [[def-metric-space]]); continuous maps have Borel
preimages of Borel sets ([[thm-continuous-preimages-of-borel-sets-are-borel]],
[[def-borel-sigma-algebra]]). Selecting one finite net for each $n\ge1$ is a
countable choice, and selecting the finitely many preimages inside a finite set
is finite choice ([[def-countable-choice]], [[lem-finite-choice]]).

[A8] Finite linear combinations of compact operators are compact, and a norm
limit of compact operators is compact under Countable Choice
([[lem-linear-combinations-of-compact-operators-are-compact]],
[[thm-norm-limit-of-compact-operators-is-compact]]).

[A9] Left translation is a measurable measure-preserving self-map of $K$ by
[A1], so for every integrable $f:K\to\mathbb C$ and $g\in K$ one has
$\int_Kf(gk)\,d\mu(k)=\int_Kf(k)\,d\mu(k)$
([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[A10] Continuity of maps into $K$, balls and neighbourhoods are as in
[[def-continuous-map-top]].

## Proof

**Proof technique:** direct.

1.1 The map $R_\xi x=\langle x,\xi\rangle\xi$ is linear and bounded with $\|R_\xi x\|\le\|x\|\,\|\xi\|^2$ by Cauchy--Schwarz, and $\|R_\xi\xi\|=\|\xi\|^3$, so $\|R_\xi\|=\|\xi\|^2$; its range is contained in the span $\mathbb C\xi$ of the one-term list $\xi$, which admits the ordered basis of length one given by $\xi$ because $\xi\ne0$, so $R_\xi$ is compact by [A4]. Moreover $\langle R_\xi x,y\rangle=\langle x,\xi\rangle\langle\xi,y\rangle=\langle x,\langle y,\xi\rangle\xi\rangle=\langle x,R_\xi y\rangle$, so $R_\xi$ is self-adjoint, $\langle R_\xi x,x\rangle=|\langle x,\xi\rangle|^2\ge0$, and $\langle R_\xi\xi,\xi\rangle=\|\xi\|^4>0$, so $R_\xi\ne0$. [A3, A4]

2.1 For every $k\in K$ the operator $\varphi(k)=\pi(k)R_\xi\pi(k)^{-1}$ is bounded; it is compact by [A4], because $\varphi(k)x=\langle x,\pi(k)\xi\rangle\pi(k)\xi$ has range in the one-dimensional span of the nonzero vector $\pi(k)\xi$; it is self-adjoint and non-negative because $\langle\varphi(k)x,y\rangle=\langle R_\xi\pi(k)^{-1}x,\pi(k)^{-1}y\rangle=\langle\pi(k)^{-1}x,R_\xi\pi(k)^{-1}y\rangle=\langle x,\varphi(k)y\rangle$ and $\langle\varphi(k)x,x\rangle=\langle R_\xi\pi(k)^{-1}x,\pi(k)^{-1}x\rangle\ge0$ by step 1.1; and unitary conjugation preserves norms, so $\|\varphi(k)\|=\|R_\xi\|=\|\xi\|^2$. The orbit map $k\mapsto\varphi(k)$ is continuous in operator norm by [A5], since $R_\xi$ is bounded of finite rank. [A2, A4, A5, step 1.1]

3.1 The orbit $\varphi:K\to\mathcal B(H)$ is continuous by step 2.1 into the Banach space $\mathcal B(H)$, so its image $\varphi[K]$ is a compact subset of the metric space $\mathcal B(H)$ and hence totally bounded: for each $n\ge1$ there is a finite $F_n\subseteq\varphi[K]$ with $\varphi[K]\subseteq\bigcup_{y\in F_n}B(y,1/n)$; choosing these nets for all $n$, and enumerating each finite net, is licensed by Countable Choice and finite choice. List $F_n=\{y_0,\dots,y_m\}$ and put $A_j:=\varphi^{-1}[B(y_j,1/n)]\setminus\bigcup_{i<j}A_i$: each $A_j$ is Borel, being a difference of Borel sets, the $A_j$ are pairwise disjoint, and they cover $K$; hence $t_n:=\sum_jy_j\mathbf 1_{A_j}$ is a $\mathcal B(H)$-valued measurable simple function, and $\|t_n(k)-\varphi(k)\|<1/n$ for every $k\in K$, because $k$ lies in the first $A_j$ whose net point is within $1/n$ of $\varphi(k)$. Thus the $t_n$ converge to $\varphi$ pointwise in norm, so $\varphi$ is strongly measurable; and since $\|\varphi(k)\|=\|\xi\|^2$ for every $k$ and $\mu(K)=1$, one has $\int_K\|\varphi\|\,d\mu=\|\xi\|^2<\infty$ and $\int_K\|\varphi-t_n\|\,d\mu\le1/n\to0$, so $\varphi$ is Bochner integrable and $Q_\xi:=\int_K\varphi\,d\mu\in\mathcal B(H)$ is defined with $\|Q_\xi\|\le\int_K\|\varphi\|\,d\mu=\|\xi\|^2$. [A6, A7, step 2.1]

4.1 For all $v,w\in H$ the pairing formula holds: $\langle Q_\xi v,w\rangle=\int_K\langle\varphi(k)v,w\rangle d\mu(k)$, by applying the commuting theorem of [A6] to the bounded linear functional $S\mapsto\langle Sv,w\rangle$ on $\mathcal B(H)$ and the integrable function $\varphi$. [A6, step 3.1]

4.2 The operator $Q_\xi$ is compact. By the norm inequality of [A6], $\|Q_\xi-\int_Kt_n\,d\mu\|\le\int_K\|\varphi-t_n\|\,d\mu\le1/n$, so $Q_\xi$ is the norm limit of the integrals $\int_Kt_n\,d\mu$. Each of those is $\sum_j\mu(A_j)y_j$, a finite linear combination of net points $y_j\in\varphi[K]$, and each such point equals $\varphi(k_j)$ for some $k_j\in K$ and is therefore compact by step 2.1; so each $\int_Kt_n\,d\mu$ is compact by [A8], and the norm limit $Q_\xi$ is compact by [A8] under Countable Choice. [A8, step 2.1, step 3.1]

5.1 The operator $Q_\xi$ is self-adjoint with $\langle Q_\xi x,x\rangle\ge0$ for every $x$: by step 4.1 and the pointwise properties of step 2.1, $\langle Q_\xi x,x\rangle=\int_K\langle\varphi(k)x,x\rangle d\mu(k)\ge0$, and $\langle Q_\xi x,y\rangle=\int_K\langle\varphi(k)x,y\rangle d\mu(k)=\int_K\langle x,\varphi(k)y\rangle d\mu(k)=\overline{\int_K\langle\varphi(k)y,x\rangle d\mu(k)}=\overline{\langle Q_\xi y,x\rangle}=\langle x,Q_\xi y\rangle$. [A3, step 2.1, step 4.1]

5.2 $Q_\xi\ne0$: by steps 2.1 and 4.1, $\langle Q_\xi\xi,\xi\rangle=\int_K|\langle\pi(k)^{-1}\xi,\xi\rangle|^2d\mu(k)$. The integrand is continuous, non-negative, and equals $\|\xi\|^4>0$ at $k=e$, so by continuity there is an open neighbourhood $U$ of $e$ on which it exceeds $\tfrac12\|\xi\|^4$; then the integral is at least $\tfrac12\|\xi\|^4\mu(U)>0$ by positivity of $\mu$ on nonempty open sets, since $U$ is nonempty. Hence $\langle Q_\xi\xi,\xi\rangle>0$ and in particular $Q_\xi\ne0$. [A1, A2, A3, A10, step 2.1, step 4.1]

5.3 $Q_\xi$ commutes with $\pi(K)$: for $g\in K$ and $v,w\in H$, the function $k\mapsto\langle\varphi(k)\pi(g)v,w\rangle$ is continuous and bounded on compact $K$ by step 2.1, hence integrable against the probability $\mu$. Using unitarity, the relation $\pi(g)\varphi(k)=\varphi(gk)\pi(g)$, and the translation invariance of the scalar integral, $\langle\pi(g)Q_\xi v,w\rangle=\langle Q_\xi v,\pi(g)^{-1}w\rangle=\int_K\langle\varphi(k)v,\pi(g)^{-1}w\rangle d\mu(k)=\int_K\langle\pi(g)\varphi(k)v,w\rangle d\mu(k)=\int_K\langle\varphi(gk)\pi(g)v,w\rangle d\mu(k)=\int_K\langle\varphi(k)\pi(g)v,w\rangle d\mu(k)=\langle Q_\xi\pi(g)v,w\rangle$; since this holds for all $v,w$, the operators agree. [A1, A2, A9, step 2.1, step 4.1]

6.1 Collecting: $\varphi$ is norm continuous and Bochner integrable and $Q_\xi=\int_K\varphi\,d\mu$ is a bounded self-adjoint operator with $\langle Q_\xi x,x\rangle\ge0$ for all $x$ (step 5.1), nonzero (step 5.2), compact (step 4.2), and commuting with every $\pi(g)$ (step 5.3). The Axiom of Choice entered only through the normalized Haar measure of [A1], the countable selections in the Bochner and net constructions of step 3.1, and the countable-choice compact-operator limit of [A8]. [A1, A6, A8, step 4.2, step 5.1, step 5.2, step 5.3] ∎
