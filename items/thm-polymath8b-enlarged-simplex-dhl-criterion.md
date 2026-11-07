---
dependency_level: 5
id: thm-polymath8b-enlarged-simplex-dhl-criterion
kind: theorem
title: Polymath8b’s Elliott–Halberstam enlarged-simplex criterion for DHL[k,m+1]
status: draft
origin: pipeline
deps:
- def-polymath8b-enlarged-simplex-variational-quantity
- def-prime-level-of-distribution
- def-admissible-prime-tuple
- def-countable-choice
- thm-c-c-infinity-rn-is-dense-in-l-p-of-rn
- lem-polymath8b-l2-marginal-is-well-defined
- lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
- thm-riemann-enlarged-simplex-dhl-sufficient-criterion
- thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
- thm-multidimensional-riemann-criterion
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4
    url: https://arxiv.org/pdf/1407.4897v4
  - title: 'Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22'
    url: https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf
proof_strategy: direct
axiom_use: Countable Choice is inherited exactly from the existing completeLebesgue L2 Definition, marginal lemma, smoothdensity and BorelRiemann comparison. No stronger choice axiom is used.
---

## Statement

Let $k\ge2$, $m\ge1$, $0<\epsilon<1$, and $0<\theta<1$, and let $H$ be an admissible $k$-tuple. Assume the primes have level of distribution $\theta$ and $1+\epsilon<1/\theta$. If $M_{k,\epsilon}>2m/\theta$, then infinitely many translates of $H$ contain at least $m+1$ primes.


## Statement references

[[def-polymath8b-enlarged-simplex-variational-quantity|Enlarged-simplex functionals]]

[[def-prime-level-of-distribution|Prime level]]

[[def-admissible-prime-tuple|Admissibility]]



## Facts & Assumptions

**Given:** Exactly the original Statement. Put $A=1+\epsilon$, $B=1-\epsilon$ and $D=\{t_i\ge0,\sum_i t_i\le A\}$.

[A1] [[def-countable-choice]] is the explicit foundation inherited from [[def-polymath8b-enlarged-simplex-variational-quantity]]: its $M_{k,\epsilon}$ is the supremum of the displayed finite $L^2$ ratios under Countable Choice. No choice-free interpretation of that Definition is asserted.

[F1] [[lem-polymath8b-l2-marginal-is-well-defined]] gives linear representative-independent coordinate marginals and $\|H_iU\|_2\le\sqrt A\|U\|_2$ for every real $L^2$ function supported almost everywhere on this same $D$.

[F2] [[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]] gives $C_c^\infty(\mathbb R^k)$ density in $L^2(\mathbb R^k)$ under exactly Countable Choice.

[F3] [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]] gives the $L^2$ inner product and Cauchy–Schwarz; expanding squares gives the triangle and reverse triangle norm inequalities.

[F4] [[thm-multidimensional-riemann-criterion]] gives integrability from finite Darboux gaps. [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]] identifies bounded Borel Riemann and Lebesgue integrals on finite nondegenerate boxes under Countable Choice.

[F5] [[thm-riemann-enlarged-simplex-dhl-sufficient-criterion]] proves the general properRiemann implication for every $k,m,0<\epsilon<1$, $A\theta<1$ and a bounded witness with integrable sections/marginals and strict total truncated-marginal ratio above $2m/\theta$.

[F6] [[def-prime-level-of-distribution]] and [[def-admissible-prime-tuple]] give exactly the level and admissibility hypotheses in the original Statement.

## Proof

1.1 Put $c=2m/\theta$. By [A1], $M_{k,\epsilon}>c$ supplies ONE class $F$ with $I(F)>0$ and $\sum_iJ_i(F)>cI(F)$: otherwise $c$ would be an upper bound for all ratios and hence for the supremum. Choose a real measurable representative zero outside $D$ by multiplying any representative by its indicator, which does not change its class. Set $u=\|F\|_2>0$, $\Delta=\sum_iJ_i(F)-cu^2>0$ and choose the following positive tolerance. [A1, F2, F3, given, construct, algebra]
$$\delta=\min\left(1,u/4,\frac{\Delta}{4(kA+c)(2u+1)}\right)>0.$$
By [F2], choose one real $\phi\in C_c^\infty(\mathbb R^k)$ with $\|F-\phi\|_2<\delta$; if the density interface is complex, its real part is smooth with compact support and cannot increase the distance to real $F$. Put $G=\phi1_D$. Pointwise almost everywhere, $|F-G|=|F-\phi|$ on $D$ and is zero outside it, so $\|F-G\|_2<\delta$. This construction keeps EXACTLY the original enlarged support; no rescaling of $\epsilon$ or loss in $\theta$ is needed. [A1, F2, F3, given, construct, algebra]

2.1 Apply [F1] to $F-G$, supported on $D$, and then restrict the outer norm to $B R_{k-1}$. If $v_i=\|1_{B R_{k-1}}H_iF\|_2$ and $w_i=\|1_{B R_{k-1}}H_iG\|_2$, then $v_i\le\sqrt A u$ and $|w_i-v_i|\le\sqrt A\delta$ by [F3]. Consequently $|w_i^2-v_i^2|\le A\delta(2u+\delta)$ and $|I(G)-u^2|\le\delta(2u+\delta)$. Also $\|G\|_2\ge u-\delta\ge3u/4>0$. Therefore [F1, F3, step 1.1, algebra]
$$\sum_iJ_i(G)-cI(G)\ge\Delta-(kA+c)\delta(2u+\delta)\ge3\Delta/4>0.$$
The last bound follows from $\delta\le1$ and its explicit definition. All these are bounds on the actual completedLebesgue classes; linearity of the marginals follows either from their section integrals outside the finite union of exceptional null sets or from [F1]'s uniqueness. [F1, F3, step 1.1, algebra]

3.1 The representative $G=\phi1_D$ is bounded Borel. On an enclosing box it is continuous off the finitely many coordinate and oblique boundary faces of $D$. Grid cells meeting those faces have total volume $O_{k,A}(h)$, because fixing all but one coordinate confines each face to at most $O_k(1)$ last-coordinate intervals of mesh $h$; on the remaining cells uniform continuity of $\phi$ gives arbitrarily small oscillation. Thus $G,G^2$ and every coordinate section are Riemann integrable by [F4]. For $t_{-i}\ge0$ with $S=\sum_{l\ne i}t_l\le A$, its actual marginal is [A1, F1, F4, step 1.1, step 2.1, algebra]
$$H_iG(t_{-i})=\int_0^{A-S}\phi(t)\,dt_i,$$
and it is zero elsewhere. On the closed outer simplex this is continuous: changing outer coordinates by $r$ changes the integral by at most $A\omega_\phi(r)+\|\phi\|_\infty|S-S'|$, where $\omega_\phi$ is its uniform modulus on $[0,A]^k$; it tends to zero on $S=A$. The zero extension can jump only at coordinate faces, and truncation to $S\le B$ adds one oblique face. The same finite-face Darboux argument proves that the marginals, their squares and all truncated marginal squares are bounded Borel Riemann integrable. These everywhere-defined section integrals represent the classes in [F1] by its almost-everywhere identification. Apply the exact box comparison in [F4] to $G^2$ and each truncated marginal square: their Riemann values equal the Lebesgue $I(G),J_i(G)$ in step 2.1. No assertion that arbitrary $L^2$ representatives are Riemann integrable has been made. [A1, F1, F4, step 1.1, step 2.1, algebra]

4.1 The original assumption $1+\epsilon<1/\theta$ is precisely $A\theta<1$. By steps 2.1–3.1, the bounded Riemann witness $G$ has positive square integral, all section/marginal integrability required in [F5], and total ratio strictly above $c=2m/\theta$. Apply [F5] with the unchanged original $k,m,\epsilon,\theta,H$ and the given level/admissibility in [F6]. Infinitely many translates of $H$ contain at least $m+1$ primes, exactly the original conclusion. Countable Choice is retained through [A1], [F2] and [F4]; the already accepted Riemann sieve introduces no stronger axiom or new numerical input. This closes the full original supremum interface, without reopening H246 or its separate certificate. [A1, F5, F6, step 2.1, step 3.1, algebra] ∎

## Source notes

This completes the EH branch of Polymath8b Theorem3.12(i), using its full original function-space scope. The genuinely missing argument was the strict-ratio passage from the existing CountableChoice completeLebesgue $L^2$ supremum to a bounded Riemann witness, not the already supplied general enlarged-support Riemann sieve. The full source proof was read in §5.3, printedpp36–40. All analytic density and norm inputs above are actual local providers with their literal CountableChoice scope. No new helper, numerical certificate, fullGEH assertion or external theorem import is introduced.
