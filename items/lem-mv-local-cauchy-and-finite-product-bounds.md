---
id: lem-mv-local-cauchy-and-finite-product-bounds
kind: lemma
title: "Cauchy bounds and uniform finite products for local correlation factors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-cauchy-integral-formula-on-a-polydisc
  - thm-cauchy-integral-formula-higher-derivatives
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michel–Venkatesh, The Subconvexity Problem for GL2, (5.23), (5.25), §5.2.12; quantitative conditional adaptation"
      url: "https://arxiv.org/pdf/0903.3591v2"
---

## Statement

Fix $r>0$, $C\ge1$, an integer $d\ge1$, and a finite exceptional index set $E$ with constants $B_v\ge1$ for $v\in E$. Let $V$ be any finite index set. For $v\in V\setminus E$ assign a prime power $q_v=p_v^{f_v}$, $f_v\ge1$, with at most $d$ indices above each rational prime $p$. Let $A_v,D_v\ge1$, assume $A_vD_v\ge q_v$ for $v\in V\setminus E$, and put
$$A=\prod_{v\in V}A_v,\qquad D=\prod_{v\in V}D_v,\qquad B_0=\prod_{v\in E}B_v.$$
For real $a,b,\gamma$, let $h_v$ be holomorphic on an open neighborhood of the closed bidisc $|s|,|t|\le r$, with the supplied bounds there
$$|h_v(s,t)|\le c_v A_v^a D_v^{b-\gamma},\qquad c_v=\begin{cases}B_v&v\in E,\\C&v\notin E.\end{cases}$$
Write $P(s,t)=\prod_{v\in V}h_v(s,t)$, with empty product one. For any $\eta>0$, set
$$L=C^{1/\eta},\qquad K_\eta=B_0 C^{d\lfloor L\rfloor},\qquad M=K_\eta A^{a+\eta}D^{b+\eta-\gamma}.$$
Then $|P(s,t)|\le M$ on that bidisc, and for every $i,j\ge0$,
$$|\partial_s^i\partial_t^jP(0,0)|\le i!j!r^{-i-j}M.$$
On the path $(s,t)=(w/2,w)$, put $p_j=\frac1{j!}\frac{d^j}{dw^j}P(w/2,w)|_{w=0}$. Then
$$\frac{d^j}{dw^j}P(w/2,w)\bigg|_{w=0}=\sum_{i=0}^j\binom ji2^{-i}\partial_s^i\partial_t^{j-i}P(0,0),\qquad |p_j|\le r^{-j}M.$$
For $|w|\le r/2$ one has the uniform finite expansion
$$P(w/2,w)=\sum_{j=0}^4p_jw^j+R_5(w),\qquad |R_5(w)|\le2M r^{-5}|w|^5.$$
For an individual factor, the same Cauchy argument gives $|\partial_s^i\partial_t^j h_v(0,0)|\le i!j!r^{-i-j}c_vA_v^aD_v^{b-\gamma}$. All assertions hold for antiholomorphic local factors $F_v$ after setting $h_v(s,t)=F_v(\overline s,\overline t)$ and using $w=\overline t$ on the original path. This conversion does not conjugate the function values.

The hypotheses require a common off-axis neighborhood and actual bounds on it. Bounds only on imaginary axes, or neighborhoods whose radii shrink with the local data, do not imply this uniform conclusion with the displayed constants.

## Statement references

[Michel–Venkatesh, (5.23), (5.25) and the local-product step in §5.2.12](https://arxiv.org/pdf/0903.3591v2).

## Facts & Assumptions

**Given:** The finite index sets, prime-power multiplicity bound, common holomorphy neighborhood, support inequality, and local off-axis estimates of the Statement. These estimates are hypotheses, not imported local theorems. The constant $K_\eta$ depends only on $C,d,\eta$ and the fixed exceptional constants.

[F1] The iterated Cauchy formula holds for a continuous holomorphic function on a bidisc: [[thm-cauchy-integral-formula-on-a-polydisc]].

[F2] Higher derivatives are given by the Cauchy circle formula: [[thm-cauchy-integral-formula-higher-derivatives]]. Taking absolute values bounds the $j$th derivative at the center by $j!$ times the boundary supremum divided by the radius to the power $j$.

## Proof

**Given:** The stated local-factor data.

1.1 There are at most $d\lfloor L\rfloor$ indices of $V\setminus E$ with $q_v<L$: each has $p_v<L$, there are at most $\lfloor L\rfloor$ such rational primes, and each prime has at most $d$ indices. For every other index, $C\le q_v^\eta\le(A_vD_v)^\eta$. Thus $\prod_{v\in V}c_v\le B_0C^{d\lfloor L\rfloor}(AD)^\eta$. Multiplying the supplied local estimates proves $|P|\le M$. This includes $C=1$ and $V$ empty, since $B_0\ge1$. [given, algebra]

2.1 A finite intersection of the supplied open neighborhoods is an open neighborhood of the closed bidisc on which $P$ is holomorphic. Apply the iterated Cauchy formula and its higher-derivative version in the two variables. More explicitly, differentiating the two Cauchy kernels gives the iterated contour integral with factor $i!j!/(2\pi i)^2$ and denominators $\zeta^{i+1}\xi^{j+1}$; differentiation is justified by the uniformly convergent geometric expansion of each kernel on smaller discs. On the two radius-$r$ circles the denominator moduli are $r^{i+1},r^{j+1}$ and the lengths are $2\pi r$ each. Step 1.1 gives the stated mixed-derivative bound. Apply the same calculation to a single $h_v$ for its stated bound. [step 1.1, F1, F2, given, algebra]

3.1 Let $p(w)=P(w/2,w)$. It is holomorphic on a neighborhood of the closed radius-$r$ disc, and $|p(w)|\le M$ there by step 1.1. Its directional derivative is $(\frac12\partial_s+\partial_t)P$; iterating and expanding commuting partial derivatives gives the stated binomial identity. Their commutation also follows from the two convergent Cauchy kernel expansions in step 2.1. Applying the one-variable Cauchy derivative estimate directly to $p$ gives $|p_j|\le Mr^{-j}$. This avoids a number-of-places factor from differentiating the product one term at a time. [step 1.1, step 2.1, F2, algebra]

4.1 In the Cauchy formula for $p(w)$ on $|\zeta|=r$, use $\frac1{\zeta-w}=\sum_{j=0}^4\frac{w^j}{\zeta^{j+1}}+\frac{w^5}{\zeta^5(\zeta-w)}$. The first five contour integrals give $p_jw^j$ by [F2]. For $|w|\le r/2$, the remainder integral has absolute value at most $M|w|^5r^{-4}(r-|w|)^{-1}\le2Mr^{-5}|w|^5$. This also holds at $w=0$. [step 3.1, F2, algebra]

5.1 By the stated meaning of antiholomorphic, $h_v(s,t)=F_v(\overline s,\overline t)$ is holomorphic and has the same supremum bounds on the conjugation-invariant bidisc. At the original point $(t/2,t)$, its product equals $P(w/2,w)$ with $w=\overline t$. Steps 1.1–4.1 apply verbatim to these transformed functions. Thus all coefficients and the remainder use the specified conjugate coordinate, proving the final assertion. [step 1.1, step 2.1, step 3.1, step 4.1, given, algebra] ∎

## Remarks

In the intended local application $V=S\cup T$, and $A_v$ may represent $C(\pi_{2,v})$ for H or $C(\pi_{1,v})C(\pi_{2,v})$ for J; $D_v$ represents the local adjoint size. Each such identification, its normalization, the inequality $A_vD_v\ge q_v$ away from a fixed exceptional set, and the common off-axis estimate must be proved for the actual test vectors. They are not consequences of this numerical lemma. Identity translations with unramified data should not be inserted as arbitrarily many indices with $A_vD_v=1$; that violates the support hypothesis.

If off-axis local estimates are supplied with arbitrarily small $a,b\ge0$, the additional small $\eta$ tracks the multiplication of local constants. One may choose $\gamma'=\gamma-b-\eta>1/2$ when $b+\eta<\gamma-1/2$. The factor $A^{a+\eta}$ remains. The first five path coefficients then have precisely the format needed by the installed finite-part lemma, after bounding $r^{-j}$ by $\max(1,r^{-4})$. No estimate for global Laurent coefficients, cancellation, or the loss-free Proposition 5.2.4 follows here.
