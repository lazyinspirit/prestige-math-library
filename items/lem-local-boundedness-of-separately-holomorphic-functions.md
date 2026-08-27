---
id: lem-local-boundedness-of-separately-holomorphic-functions
kind: lemma
title: "Separate holomorphy forces local boundedness on smaller polydiscs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-separately-holomorphic-function,
       lem-baire-category-in-a-closed-interval,
       thm-locally-bounded-separate-holomorphy,
       cor-holomorphic-functions-in-several-variables-are-smooth,
       thm-cauchy-estimates-on-a-polydisc,
       thm-log-modulus-of-a-holomorphic-function-is-subharmonic,
       def-plane-subharmonic-function,
       lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined,
       thm-harmonic-majorant-characterization-of-plane-subharmonicity,
       def-poisson-integral-on-the-disc,
       thm-poisson-integral-solves-the-disc-dirichlet-problem,
       thm-monotone-convergence-for-the-integral,
       thm-fatou-lemma,
       thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables,
       thm-identity-theorem-in-several-complex-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Paul Garrett, Hartogs' Theorem: separate analyticity implies joint"
      url: "https://www-users.cse.umn.edu/~garrett/m/complex/hartogs.pdf"
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2 and Appendix E"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $R>0$, and let

$$
\Delta_R^m:=\{z=(z_1,\dots,z_m)\in\mathbb C^m : |z_j|<R \text{ for every } j\}.
$$

If $f:\Delta_R^m\to\mathbb C$ is separately holomorphic, then for every
$0<r<R$ the function $f$ is bounded on the closed polydisc
$\overline\Delta_r^m$.

In particular, every separately holomorphic function on an open subset of
$\mathbb C^m$ is locally bounded.

## Facts & Assumptions

**Given:** A separately holomorphic function $f$ on $\Delta_R^m$ and a radius $0<r<R$.

[L1] Separate holomorphy is the condition that each coordinate slice is one-variable holomorphic ([[def-separately-holomorphic-function]]).

[L2] A countable closed cover of a nondegenerate closed interval contains one member that contains a nondegenerate closed subinterval ([[lem-baire-category-in-a-closed-interval]]).

[L3] A separately holomorphic function that is locally bounded is jointly holomorphic ([[thm-locally-bounded-separate-holomorphy]]).

[L4] Jointly holomorphic functions are smooth, so their mixed derivatives are holomorphic ([[cor-holomorphic-functions-in-several-variables-are-smooth]]).

[L5] Cauchy estimates on a smaller polydisc bound Taylor coefficients by the supremum on that smaller distinguished boundary ([[thm-cauchy-estimates-on-a-polydisc]]).

[L6] For a holomorphic one-variable function that is not identically zero on the connected component under consideration, the logarithm of the modulus is subharmonic ([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]]), and subharmonic means upper semicontinuous together with the disc submean inequality ([[def-plane-subharmonic-function]]).

[L7] Fatou's lemma controls the liminf of integrals of nonnegative measurable
functions ([[thm-fatou-lemma]]), and monotone convergence controls increasing
nonnegative boundary approximations
([[thm-monotone-convergence-for-the-integral]]).

[L8] A locally uniform limit of holomorphic functions is holomorphic ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[L9] A holomorphic function on a connected open set is determined by its values on any nonempty open subset ([[thm-identity-theorem-in-several-complex-variables]]).

[L10] Subharmonic functions satisfy harmonic comparison on discs; continuous
circle data have harmonic Poisson extensions; and upper-semicontinuous circle
data are Borel and bounded above
([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]],
[[def-poisson-integral-on-the-disc]],
[[thm-poisson-integral-solves-the-disc-dirichlet-problem]],
[[lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined]]).

## Proof

**Proof technique:** induction.

1.1 We prove a stronger local claim by induction on $m$: every separately holomorphic function on $\Delta_R^m$ is holomorphic on a neighborhood of each point of $\Delta_R^m$. Once that is known, the displayed boundedness follows, because the compact set $\overline\Delta_r^m$ is covered by finitely many such holomorphic neighborhoods and each holomorphic function is bounded on a smaller closed polydisc inside its neighborhood. [given, induction]

1.2 Base case $m=1$: separate holomorphy is ordinary one-variable holomorphy by [L1], so the local claim and the boundedness statement are immediate. Assume now that the local claim is known in dimension $m-1$, and prove it in dimension $m\ge2$. [L1, base, ih]

1.3 Fix $p\in\Delta_R^m$. Choose $\rho>0$ with $0<\rho<R$ and $\overline\Delta_{2\rho}^m(p)\subseteq\Delta_R^m$. After translating and rescaling each coordinate disc, it is enough to prove that a separately holomorphic function on $\Delta_2^m$ is holomorphic in a neighborhood of the origin. Write $z=(z',w)$ with $z'\in\mathbb C^{m-1}$ and $w\in\mathbb C$. [given, construct]

1.4 **Box claim.** If a closed real box $K=I_1\times\cdots\times I_d\subseteq\mathbb R^d$ is covered by countably many closed sets $F_n$, then some $F_n$ contains a smaller closed real box with nondegenerate sides. We prove this by induction on $d$. For $d=1$ it is [L2]. Assume the claim in dimension $d-1$. Write $K=I\times K'$. Enumerate the closed subboxes of $K'$ with rational endpoints in the coordinates of $K'$ as $Q_1,Q_2,\dots$. For each pair $(n,j)$ let $$ E_{n,j}:=\{x\in I : \{x\}\times Q_j\subseteq F_n\}. $$ Each $E_{n,j}$ is closed. Fix $x\in I$. The sections $F_n(x):=\{y\in K' : (x,y)\in F_n\}$ are closed and cover $K'$, so the induction hypothesis in dimension $d-1$ gives some $n$ such that $F_n(x)$ contains a smaller closed box; shrinking slightly if needed, that box contains a rational-endpoint subbox $Q_j$. Hence $x\in E_{n,j}$. So the countable family $E_{n,j}$ covers $I$, and [L2] gives one pair $(n,j)$ for which $E_{n,j}$ contains a nondegenerate closed subinterval $J$. Then $J\times Q_j\subseteq F_n$, proving the claim. [L2, induction, construct]

1.5 Whenever $0\le d<1<\eta$, one can choose radii
$d<s<r_1<1<r_2<\eta$. [construct]

2.1 For each positive integer $B$, define $$ \Omega_B:=\Bigl\{z'\in\overline\Delta_1^{m-1} : |f(z',w)|\le B \text{ for every } |w|\le1\Bigr\}. $$ For fixed $w$ with $|w|\le1$, the induction hypothesis applied to $z'\mapsto f(z',w)$ makes that function holomorphic, hence continuous, on $\Delta_2^{m-1}$. Therefore each set $\{z': |f(z',w)|\le B\}$ is closed, and so every $\Omega_B$ is closed. Also $\bigcup_{B\ge1}\Omega_B=\overline\Delta_1^{m-1}$, because for fixed $z'$ the slice $w\mapsto f(z',w)$ is holomorphic on $\Delta_2$ and therefore bounded on $|w|\le1$. [L1, step 1.2, ih]

3.1 Apply the box claim to the real box $[-1/\sqrt2,1/\sqrt2]^{2m-2}\subseteq\overline\Delta_1^{m-1}$ and the closed cover $(\Omega_B)_{B\ge1}$. We obtain some $B_0$ and a nondegenerate closed real box contained in $\Omega_{B_0}$. Inside its relative interior choose a closed complex polydisc $\overline\Delta_{2\varepsilon}^{m-1}(a')$ for some $a'$ and some $\varepsilon>0$. Its centre satisfies $$d:=\max_{1\le j<m}|a'_j|<1,$$ and $$ |f(z',w)|\le B_0 \qquad\text{for } z'\in\overline\Delta_{2\varepsilon}^{m-1}(a'),\ |w|\le1. $$ Hence $f$ is bounded on the product polydisc $E:=\Delta_{2\varepsilon}^{m-1}(a')\times\Delta_1$. [step 2.1, step 1.4, construct]

4.1 By [L3], the separately holomorphic and bounded function $f$ is jointly holomorphic on $E$. Put $\zeta=z'-a'$ and retain the notation $f(\zeta,w)$ after this translation. The original first-variable domain contains the centred polydisc $\Delta_\eta^{m-1}$, where $\eta:=2-d>1$, while the original target $z'=0$ now has coordinate $\zeta=-a'$. Thus $f$ is separately holomorphic on $\Delta_\eta^{m-1}\times\Delta_2$ and jointly holomorphic on $\Delta_{2\varepsilon}^{m-1}\times\Delta_1$. Choose radii $d<s<r_1<1<r_2<\eta$, which is possible because $d<1<\eta$. [L3, step 3.1, construct]

5.1 For each multi-index $\alpha\in\mathbb N^{m-1}$, define $$ c_\alpha(w):=\frac{1}{\alpha!}\,\partial_{\zeta}^\alpha f(0,w) \qquad (|w|<1), $$ using the jointly holomorphic function from step 4.1. By [L4], every $c_\alpha$ is holomorphic on $\Delta_1$. For fixed $w$ with $|w|<1$, the induction hypothesis makes $\zeta\mapsto f(\zeta,w)$ holomorphic on $\Delta_\eta^{m-1}$, so these $c_\alpha(w)$ are exactly its Taylor coefficients at $0$. Since $f$ is bounded by $B_0$ on the larger product $\Delta_{2\varepsilon}^{m-1}\times\Delta_1$, [L5] applied at the strictly smaller radius $\varepsilon$ gives $$ |c_\alpha(w)|\le B_0\,\varepsilon^{-|\alpha|} \qquad (|w|<1). $$ For each nonzero multi-index $\alpha$ with $c_\alpha\not\equiv0$, define $u_\alpha(w):=|\alpha|^{-1}\log|c_\alpha(w)|$. By [L6], each such $u_\alpha$ is subharmonic on $\Delta_1$. If $c_\alpha\equiv0$, then the term $c_\alpha(w)\zeta^\alpha$ vanishes identically and is already harmless for the later power-series tail estimate. The displayed estimate gives a uniform upper bound for the whole family $(u_\alpha)_{\alpha\ne0,\ c_\alpha\not\equiv0}$. [L4, L5, L6, step 1.2, step 3.1, step 4.1, ih]

6.1 Fix $w\in\Delta_1$. The Cauchy estimates [L5] applied to the holomorphic function $\zeta\mapsto f(\zeta,w)$ on $\Delta_\eta^{m-1}$, with the strictly smaller radius $r_2$, show that $|c_\alpha(w)|\le M(w)\,r_2^{-|\alpha|}$ for some finite constant $M(w)$ and every nonzero multi-index $\alpha$. Therefore $$ \limsup_{\substack{|\alpha|\to\infty\\ c_\alpha\not\equiv0}} u_\alpha(w)\le -\log r_2. $$ [L5, step 1.5, step 5.1]

7.1 Let $$S:=\{\alpha\in\mathbb N^{m-1}\setminus\{0\}:c_\alpha\not\equiv0\}.$$ If $S$ is finite, the required tail estimate is immediate. Otherwise enumerate it as $(\alpha(j))_{j\ge1}$ with nondecreasing degrees and put $v_j=u_{\alpha(j)}$. By steps 5.1 and 6.1, the subharmonic functions $v_j$ have a common upper bound $A$ on $\Delta_1$ and satisfy $\limsup_jv_j(w)\le C:=-\log r_2$ pointwise. [L6, step 5.1, step 6.1]

8.1 We claim that for every compact $K\Subset\Delta_1$ and every $\delta>0$, $v_j\le C+\delta$ on $K$ for all sufficiently large $j$. Otherwise choose $j_k\uparrow\infty$ and $q_k\in K$ with $v_{j_k}(q_k)>C+\delta$, and pass to a subsequence with $q_k\to q\in K$. Choose $t>0$ with $\overline{D(q,t)}\subseteq\Delta_1$, discard finitely many terms so $q_k\in D(q,t)$, and put $P_k(\theta):=P((q_k-q)/t,e^{i\theta})$. By the definition of $S$ and [L9], no selected coefficient can vanish on a nonempty open subset of $\Delta_1$. More specifically for the boundary argument, $v_{j_k}$ cannot be identically $-\infty$ on the circle: if it were, every constant harmonic function $-n$ would majorize its boundary values, so [L10] would give $v_{j_k}(q_k)\le-n$ for every $n$, contradicting the finite strict lower bound just chosen. For $\zeta$ on the circle define $$\phi_{k,n}(\zeta):=\sup_{\eta\in\partial D(q,t)}\bigl(v_{j_k}(\eta)-n|\zeta-\eta|\bigr).$$ Compactness and the common upper bound make each $\phi_{k,n}$ finite and continuous, and upper semicontinuity gives $\phi_{k,n}\downarrow v_{j_k}$ pointwise. Harmonic comparison, their Poisson extensions, and monotone convergence in [L7] therefore give $$v_{j_k}(q_k)\le\frac1{2\pi}\int_0^{2\pi}P_k(\theta)v_{j_k}(q+te^{i\theta})\,d\theta.$$ The kernels $P_k$ tend uniformly to $1$. The functions $P_k(\theta)(A-v_{j_k}(q+te^{i\theta}))$ are nonnegative and measurable, so Fatou's lemma [L7] and the pointwise limsup bound make the lower limit of their normalized integrals at least $A-C$. Since each $P_k$ has normalized integral $1$, the preceding inequality gives $\limsup_kv_{j_k}(q_k)\le C$, a contradiction. [L7, L9, L10, step 7.1, assume-contra, discharge-contradiction]

9.1 Fix $0<\sigma<1$. Apply step 8.1 to $K=\overline\Delta_\sigma$ and $\delta=\log(r_2/r_1)>0$. For all sufficiently large $j$, $$v_j(w)\le-\log r_1\qquad(|w|\le\sigma),$$ or equivalently $|c_{\alpha(j)}(w)|r_1^{|\alpha(j)|}\le1$. [step 8.1, algebra]

10.1 Fix such a $\sigma$. If $S$ is finite, then $\sum_\alpha c_\alpha(w)\zeta^\alpha$ is a finite sum in $\zeta$. Otherwise step 9.1 dominates its tail on $\overline\Delta_s^{m-1}\times\overline\Delta_\sigma$ by the convergent product-geometric majorant $\sum_\alpha(s/r_1)^{|\alpha|}$; the finitely many low-degree terms are harmless and the coefficients outside $S$ vanish. Thus the series converges locally uniformly. Every partial sum is holomorphic, so [L8] gives a jointly holomorphic limit $G(\zeta,w)$ on $\Delta_s^{m-1}\times\Delta_\sigma$. [L8, step 1.5, step 9.1]

11.1 On the open set $\Delta_{\min(\varepsilon,s)}^{m-1}\times\Delta_\sigma$, the Taylor expansion of the jointly holomorphic function from step 4.1 is exactly the series defining $G$. Thus $G=f$ on that nonempty open set. For fixed $w\in\Delta_\sigma$, both $\zeta\mapsto G(\zeta,w)$ and $\zeta\mapsto f(\zeta,w)$ are holomorphic on $\Delta_s^{m-1}$ and agree on a nonempty open subset, so [L9] gives equality on all of $\Delta_s^{m-1}$. Hence $f=G$ on $\Delta_s^{m-1}\times\Delta_\sigma$, and $f$ is jointly holomorphic there. [step 4.1, step 10.1, L9]

12.1 Because $\max_j|-a'_j|=d<s$ and $0<\sigma$, the translated coordinates of the original target, $(-a',0)$, lie in the product from step 11.1. Thus that step proves the required local holomorphicity at the original origin in dimension $m$. By the reductions in steps 1.1 and 1.3, every point of $\Delta_R^m$ has a holomorphic neighborhood. Therefore $f$ is locally bounded on $\Delta_R^m$, and in particular bounded on every smaller closed polydisc $\overline\Delta_r^m$. This closes the induction. [step 1.1, step 1.2, step 1.3, step 11.1, discharge-induction] ∎
