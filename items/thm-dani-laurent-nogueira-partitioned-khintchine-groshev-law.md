---
id: thm-dani-laurent-nogueira-partitioned-khintchine-groshev-law
kind: theorem
title: "Dani–Laurent–Nogueira partitioned primitive Khintchine–Groshev law"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - lem-dnl-partition-subgroup-ergodicity-zero-one
  - lem-dnl-strip-limsup-constant-scaling
  - lem-dnl-partitioned-strip-intersection-estimate
  - thm-khintchine-monotone-metric-approximation
  - def-gcd-of-finite-integer-tuple
  - def-inhomogeneous-khintchine-groshev-approximation-set
  - def-partitioned-primitive-linear-form-condition
  - cor-first-borel-cantelli-lemma-for-events
  - lem-khintchine-groshev-torus-event-measure-and-independence
  - lem-primitive-vector-supnorm-shell-count
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "S. G. Dani, Michel Laurent, and Arnaldo Nogueira, Multi-dimensional metric approximation by primitive points, Theorems 1.1–1.2 and §§2–7"
      url: "https://arxiv.org/pdf/1310.5535v2"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$, let $\pi$ be a partition of $\{1,\ldots,n+m\}$ into blocks each containing at least $m+1$ indices, let $y\in[0,1)^m$, and let $\psi:\mathbb N\to(0,\infty)$. Suppose the sequence $h\mapsto h^{n-1}\psi(h)^m$ is non-increasing. For $q\in\mathbb Z^n\setminus\{0\}$ and $p\in\mathbb Z^m$, form the ordered tuple $v=(p_1,\ldots,p_m,q_1,\ldots,q_n)$. Call $(q,p)$ $\pi$-primitive if every block of $v$ has tuple gcd $1$.

If

$$\sum_{h=1}^{\infty}h^{n-1}\psi(h)^m=\infty,$$

then both of the following hold:

1. For almost every $X\in[0,1)^{n\times m}$, there are infinitely many $\pi$-primitive pairs $(q,p)$ with
   $$\|qX+p\|_\infty\le\psi(\|q\|_\infty).$$
2. For almost every pair $(X,y)\in[0,1)^{n\times m}\times[0,1)^m$, there are infinitely many $\pi$-primitive pairs $(q,p)$ with
   $$\|qX+p-y\|_\infty\le\psi(\|q\|_\infty).$$

If the displayed series converges, then each corresponding assertion has only finitely many integer pairs for almost every matrix or pair $(X,y)$, even without the primitivity restriction.

## Statement references

[Dani, Laurent, and Nogueira, *Multi-dimensional metric approximation by primitive points*, Theorems 1.1–1.2 and §§2–7](https://arxiv.org/pdf/1310.5535v2)

## Facts & Assumptions

**Given:** Countable Choice, a partition of the combined integer-coordinate set, a fixed target, a positive approximation function, and the stated monotonicity and series hypotheses.

[A1] Countable Choice supplies the countably additive Lebesgue measures on the matrix and target cubes. ([[def-countable-choice]])

[F1] A row event for a translated axis-parallel torus box has measure $(2\delta)^m$. ([[lem-khintchine-groshev-torus-event-measure-and-independence]])

[F2] The number of integer rows on the sup-norm shell of radius $h$ is at most $2n(3h)^{n-1}$. (Direct shell count.)

[F3] Fubini's theorem applies to the finite product of the matrix and target cubes, and a box has measure equal to the product of its side lengths. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F4] If the sum of event measures is finite, their limsup has measure zero. ([[cor-first-borel-cantelli-lemma-for-events]])

[F5] The fixed-target approximation set uses the convention $\|qX+p-y\|_\infty<\psi(\|q\|_\infty)$ with $y$ fixed. ([[def-inhomogeneous-khintchine-groshev-approximation-set]])

[F6] Partitioned primitivity requires gcd $1$ for the coordinates of the combined integer tuple in each block of the partition. ([[def-partitioned-primitive-linear-form-condition]])

[F7] For the partition primitive orbit, the normalized homogeneous and doubly metric sets $\bigcap_{l\ge1}\bigcup_{\kappa\ge1}E(\kappa\psi_l;0)$ and $\bigcap_{l\ge1}\bigcup_{\kappa\ge1}E(\kappa\psi_l)$ are null or conull when every block has more than $m$ elements; here $\psi_l(h)=\psi(lh)$. The full block-action ergodicity proof is local. ([[lem-dnl-partition-subgroup-ergodicity-zero-one]])

[F8] For fixed target, invertible offset coefficient matrix, and $\psi(h)/h\to0$, multiplying the strip gauge by a positive constant changes the limsup only on a null set; the same holds with a variable target. ([[lem-dnl-strip-limsup-constant-scaling]])

[F9] When $n+m\ge3$, partitioned primitive fixed-target strip limsup sets have uniformly positive measure on the centered unit matrix cube for all positive gauges below $1/2$ with non-increasing divergent weighted sum. When $n=m=1$, the corresponding doubly metric primitive limsup on the unit square has uniformly positive measure. Both mass and intersection proofs are local. ([[lem-dnl-partitioned-strip-intersection-estimate]])

[F10] The monotone scalar Khintchine theorem is locally proved; dividing a nonzero pair by its tuple gcd gives a primitive pair with the same reduced fraction. ([[thm-khintchine-monotone-metric-approximation]], [[def-gcd-of-finite-integer-tuple]])

## Proof

1.1 For each nonzero row $q$, let $E_q^0$ be the homogeneous event that some $p\in\mathbb Z^m$ satisfies $\|qX+p\|_\infty\le\psi(\|q\|_\infty)$. Let $E_q^y$ be the corresponding event in the product space of $(X,y)$ with $\|qX+p-y\|_\infty\le\psi(\|q\|_\infty)$. In the convergence case, $\psi(h)\to0$, so the radii are below $1/2$ for all sufficiently large $h$. By [F1], $|E_q^0|=(2\psi(h))^m$. For each fixed $X$, the admissible targets $y$ form a translated torus box of the same measure; Fubini [F3] gives $|E_q^y|=(2\psi(h))^m$. [given, A1, F1, F3, algebra]

1.2 Suppose the weighted series diverges. Put $f(h)=h^{n-1}\psi(h)^m$. The assumed monotonicity gives $\psi(h+1)^m\le(h/(h+1))^{n-1}\psi(h)^m$, so $\psi$ is non-increasing and bounded. Choose a positive constant $c$ with $c\psi(1)<1/2$ and set $\eta=c\psi$. Proving both divergence claims for $\eta\le\psi$ suffices, after also requiring $c\le1$. For each $l\ge1$, $h^{n-1}\eta(lh)^m=c^ml^{-(n-1)}f(lh)$ is non-increasing and its sum diverges: grouping consecutive blocks of $l$ terms gives $\sum_{j\ge1}f(lj)\ge l^{-1}\sum_{h\ge l}f(h)$. [given, algebra, choose]

2.1 By [F2], the sum of these event measures over all rows is at most a constant times $\sum_hh^{n-1}\psi(h)^m<\infty$. The first Borel–Cantelli lemma [F4] implies that almost every matrix and almost every pair $(X,y)$ belongs to only finitely many row events. For any fixed bounded row norm, only finitely many offsets $p$ can satisfy either inequality on the bounded cubes. Thus only finitely many integer pairs occur, proving both convergence conclusions; the partitioned subsets are smaller. [given, step 1.1, F2, F4, algebra]

2.2 First assume $n+m\ge3$. Write $\Theta=X^t$ and use the coefficient order $(p,q)$ from the Statement. For each $l$, [F9] gives measure at least $\delta>0$ to $E(\eta_l;0)$ on the centered unit matrix cube $I$, uniformly in $l$. The sets $\bigcup_{\kappa\ge1}E(\kappa\eta_l;0)$ decrease as $l$ increases because $\eta$ is non-increasing. Each has measure at least $\delta$ on $I$, so their intersection also has measure at least $\delta$ there. By [F7] that intersection is conull in the full real matrix space. In particular $\bigcup_{\kappa\ge1}E(\kappa\eta;0)$ is conull. Since $\eta$ is bounded, $\eta(h)/h\to0$; [F8], with offset coefficient matrix $I_m$, shows that all the sets in this countable union differ from $E(\eta;0)$ by null sets. Thus $E(\eta;0)$ is conull. Restricting to the unit matrix cube and using $\eta\le\psi$ proves clause1. [step 1.2, A1, F7, F8, F9, algebra]

2.3 In the same dimensions, [F9] holds for every fixed $y\in\mathbb R^m$. Integrating it over any unit target cube by [F3] gives a uniform lower bound $\delta$ on $E(\eta_l)$ in the product of that target cube and $I$. The decreasing intersections of unions therefore have positive measure there, and [F7] makes their intersection conull in the entire real matrix-and-target space. Consequently $\bigcup_\kappa E(\kappa\eta)$ is conull. The product-target assertion of [F8] identifies this union with $E(\eta)$ modulo a null set. Restriction to $[0,1)^{n\times m}\times[0,1)^m$ proves clause2. This proves an almost-every-pair assertion, without asserting a primitive conclusion at every fixed target. [step 1.2, A1, F3, F7, F8, F9, algebra]

3.1 If $n=m=1$, the block-size condition forces a single block containing both coordinates. The scalar doubly metric part of [F9] supplies the same uniform positive lower bound for $E(\eta_l)$ on $[0,1]^2$. The decreasing-intersection, zero-one, and constant-scaling proof of step 2.3 therefore applies verbatim and proves clause2 in this dimension. [step 1.2, step 2.3, A1, F7, F8, F9, algebra]

4.1 For the scalar homogeneous clause, [F10] gives, for almost every $x\in[0,1]$, infinitely many $q\ge1$ and integer $a$ with $|qx-a|\le\eta(q)$. Exclude the countable set of rational $x$. Dividing $(a,q)$ by $d=\gcd(a,q)$ gives $(r,s)$ primitive with $s\ge1$ and $|sx-r|\le\eta(q)/d\le\eta(s)$ by monotonicity. Infinitely many distinct reduced pairs must occur: otherwise the fractions $a/q=r/s$ would range over a fixed finite set, whereas $|x-a/q|\le\eta(1)/q\to0$, forcing the irrational $x$ to equal one of that set. Thus the primitive pairs $(p,q)=(-r,s)$ prove clause1. Together with step 2.1 and the preceding divergence branches, this proves the complete Statement, including its exceptional scalar case and its two distinct target conventions. [step 2.1, step 1.2, step 2.2, step 2.3, step 3.1, F10, algebra] ∎
