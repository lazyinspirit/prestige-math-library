---
id: lem-function-field-model-point-measures-and-height-normalization-in-zf
kind: lemma
title: Function-field point measures and normalized adelic heights without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - lem-finite-function-curve-normalization-completions-and-norms-in-zf
  - def-adelic-metrized-line-bundle-over-function-curve
  - def-projective-morphism-pre-proj
  - def-invertible-sheaf
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF with a supplied algebraically closed constant field. All local measures are finite atomic measures; the global sums below have finite support.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Sections2.1–2.4, point-height normalization; finite local construction supplied here, not imported.
---

## Statement

Work in ZF. Let $k$ be algebraically closed, $B/k$ a smooth projective integral curve, $K=k(B)$, and $E/K$ a finite extension of degree $n$, with normalization $C\to B$. For each closed $v\in B$, let $w\mid v$ denote its finite fiber and $e_{w/v}$ the ramification indices, with order-normalized base absolute value $|t_v|=e^{-1}$. The analytic space of $E\otimes_KK_v$ has one point $\xi_w$ for each factor $E_w$. Its model point measure is the explicitly constructed positive atomic measure
$$\mu_{E,v}=\sum_{w\mid v}e_{w/v}\delta_{\xi_w},\qquad \mu_{E,v}(1)=n.$$
Let $X/K$ be projective and integral, $P\in X(E)$, and let $\bar L$ be any continuously metrized line bundle whose metrics equal a single projective model metric outside finitely many places. On the one-dimensional $E$-space $P^*L$, choose any $s\ne0$ and use the pulled-back local norms. Then
$$h_{\bar L}(P)=\frac1n\sum_v\sum_{w\mid v}e_{w/v}\bigl(-\log\|s\|_w\bigr)$$
is a finite sum, independent of $s$ and of the finite field of definition. It is additive under tensor product of metrized line bundles. If all the metrics come from $(\mathcal X,\mathcal L)$ over $B$, the extension $P_C:C\to\mathcal X$ exists and
$$h_{\bar L}(P)=\frac{\deg_C(P_C^*\mathcal L)}{n}.$$
All assertions include inseparable field extensions. If two metrics differ only at a fixed finite set $S$ of places and their logarithmic ratio is bounded there in absolute value by $\epsilon$, their heights differ by at most $|S|\epsilon$. No uniform-convergence assertion with an uncontrolled growing set of exceptional places, nor a higher-dimensional intersection measure, is asserted by this lemma.

## Facts & Assumptions

**Given:** The curve, finite field extension, projective variety, point and metric family in the Statement.

[F1] Finite function-field normalization, local DVR completions, their residue fields $k$, the formulas $\sum_{w\mid v}e_{w/v}=[E:K]$ and $|a|_w=\exp(-\operatorname{ord}_w(a)/e_{w/v})$, and their tower compatibilities are constructed locally. [[lem-finite-function-curve-normalization-completions-and-norms-in-zf]]

[F2] An adelic metric agrees with one model metric at all but finitely many places. [[def-adelic-metrized-line-bundle-over-function-curve]]

[F3] Projectivity gives a closed immersion into a finite projective space over the base. [[def-projective-morphism-pre-proj]]

[F4] An invertible sheaf has local rank-one frames; ratios of its nonzero rational sections are rational functions. [[def-invertible-sheaf]]

## Proof

1.1 By [F1], $E\otimes_KK_v=\prod_{w\mid v}E_w$, with each factor carrying exactly its constructed extended absolute value. A multiplicative seminorm on this product extending $|\ |_{v}$ takes an idempotent to $0$ or $1$; exactly one primitive factor idempotent has value $1$. Its restriction to that factor is the unique extended absolute value from [F1]. Hence these $\xi_w$ are exactly the analytic points, and the factor idempotents separate them into a finite discrete space. The finite sum of positive atoms in the Statement is therefore a Radon measure, and its mass is $\sum e_{w/v}=n$. This is an actual measure construction, not an appeal to general local intersection theory. [F1, given, construct, algebra]

2.1 We need the following global section-change identity: on any normal projective integral curve $D/k$, every nonzero rational function $a$ has $\sum_z\operatorname{ord}_z(a)=0$. If $a\in k^\times$ this is immediate. Otherwise $k(D)/k(a)$ is finite. Apply [F1] to the normalization $D'$ of $\mathbb P^1_{a}$ in $k(D)$. The rational function $a$ gives a morphism $D\to\mathbb P^1$: at each DVR point either $a$ or $a^{-1}$ is regular. The inverse generic identification between $D$ and $D'$ extends both ways because both are projective and their local rings are DVRs: in a projective embedding, divide the finitely many generic homogeneous coordinates by one of least valuation, so that all are integral and one is a unit. The closed equations persist since they vanish in the fraction field. These unique local extensions glue and their composites are the identity by generic agreement on integral sources. Thus $D\cong D'$. By [F1], the sums of ramification indices in its fibers over $0$ and $\infty$ are both $[k(D):k(a)]$. These are respectively the total zero and pole orders of $a$, proving the identity, including inseparable $k(D)/k(a)$. [F1, F3, algebra]

3.1 Choose the projective model $(\mathcal X,\mathcal L)$ giving the metrics outside the finite exceptional set in [F2]. The map $\operatorname{Spec}E\to X\subset\mathcal X$ extends uniquely to $P_C:C\to\mathcal X$ by the finite homogeneous-coordinate argument of step 2.1 over each local ring $O_{C,w}$, using an embedding $\mathcal X\hookrightarrow\mathbb P^r_B$ from [F3]. Uniqueness follows from generic agreement, so the local maps glue without a choice of infinitely many extensions. Put $M=P_C^*\mathcal L$. It is invertible. A nonzero vector $s\in P^*L$ is a rational section of $M$ and has a divisor of finite support on $C$: in finitely many local frames its zeros and poles are zero-dimensional closed supports of nonzero rational functions on a Noetherian curve. For a local frame $b_w$ of $M$, the model norm has $\|b_w\|_w=1$ and
$$e_{w/v}(-\log\|s\|_w)=\operatorname{ord}_w(s/b_w).$$
Thus only the finite divisor support and the finitely many fibers of exceptional places can contribute to the global sum. [F1, F2, F3, F4, step 2.1, construct, algebra]

4.1 Replacing $s$ by $as$ for $a\in E^\times$ changes the sum by $n^{-1}\sum_w\operatorname{ord}_w(a)=0$, by step 2.1 applied to $C$. This proves section independence. It also makes $\deg_C M=\sum_w\operatorname{ord}_w(s/b_w)$ independent of the chosen rational section; the displayed model formula follows from step 3.1 when there are no exceptional places. Multiplying norms under tensor product adds their logarithms, so additivity follows from these finite sums. No arithmetic or cohomological intersection product is assumed in this point case. [F1, F4, step 2.1, step 3.1, algebra]

5.1 If $E'/E$ has degree $d$, normalize $B$ in $E'$ and map its curve to $C$. For each $w$, [F1] gives $\sum_{w'\mid w}e_{w'/w}=d$ and $e_{w'/v}=e_{w'/w}e_{w/v}$. The normalized absolute values and pulled-back metrics agree on the original fibers. Consequently the pushforward of $\mu_{E',v}$ is $d\mu_{E,v}$, and every local logarithmic norm contributes $d$ times its old weighted contribution. The global denominator is $[E':K]=dn$, so the normalized height is unchanged. Two finite realizations of the same closed point have a finite common overfield: take a simple quotient of their nonzero finite-dimensional tensor algebra over that point's residue field. Such a quotient exists by minimizing its positive vector-space dimension; it is a field, and both field factors inject. Thus the comparison needs no global algebraic-closure choice. Inseparability is allowed throughout [F1]. This proves the asserted field independence and model-refinement compatibility of the point normalization. [F1, step 1.1, step 3.1, step 4.1, algebra]

6.1 At a place in $S$, the absolute difference of the logarithmic norm integrals is at most $\epsilon\mu_{E,v}(1)=n\epsilon$; outside $S$ it is zero. Divide the finite sum by $n$ to get $|h-h'|\le|S|\epsilon$. This proves the stated controlled uniform continuity. The same finite calculations include $n=1$, the trivial line bundle, zero divisor degree, and empty exceptional set. No exchange of infinite integrals or sums, or countable selection of models, has entered the construction. [step 1.1, step 3.1, step 4.1, step 5.1, algebra] ∎
