---
id: cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold
kind: counterexample
title: Subcritical $W^{1,p}$ is not closed under multiplication
status: published
origin: pipeline
deps: [ex-radial-power-membership-in-w-one-p, def-sobolev-space-wkp-and-its-norm, thm-polar-coordinates-formula-for-lebesgue-measure, lem-weak-leibniz-rule-with-a-smooth-factor, lem-classical-derivatives-are-weak-derivatives, lem-weak-derivative-linearity-locality-and-commutation, lem-weak-derivatives-are-unique-almost-everywhere, lem-smooth-bump-between-concentric-euclidean-balls, def-real-power, thm-real-power-continuity-and-derivatives, thm-monotone-convergence-for-the-integral, def-natural-logarithm, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapters 1–2
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.2, Example 1.10 and the subcritical non-algebra observation
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
---

## Statement refuted

Assume the Axiom of Countable Choice, inherited from the cited sharp
radial-power example. Let $n\ge2$ and $1\le p<n$, let $B_1=B(0,1)$ and let
$\chi\in C_c^\infty(B_1;[0,1])$ satisfy $\chi=1$ on $B(0,1/2)$. Choose a real
exponent
$$\frac{n/p-1}{2}\le\alpha<\frac np-1 .$$
Define $u:B_1\to\mathbb R$ by $u(0)=0$ and $u(x)=\chi(x)|x|^{-\alpha}$ for
$x\ne0$. Then $u\in W^{1,p}(B_1;\mathbb R)$, while its square
$u^2$ does not belong to $W^{1,p}(B_1;\mathbb R)$.

Thus $W^{1,p}$ is not closed under pointwise multiplication in the
subcritical range $1\le p<n$; the interval for $\alpha$ is nonempty exactly
because $p<n$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, $1\le p<n$, the ball $B=B(0,1)$, a cutoff $\chi$ with $\chi=1$ on $B(0,1/2)$ and $\operatorname{supp}\chi\subseteq B$, and an exponent $\alpha$ with $(n/p-1)/2\le\alpha<n/p-1$.

[F1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, is the only choice principle assumed ([[def-countable-choice]]).

[F2] Sharp radial-power threshold: with $u(0)=c$ and $u(x)=|x|^{-a}$ for $x\ne0$, one has $u\in W^{1,p}(B;\mathbb R)$ if and only if $p(a+1)<n$, for real $a>0$ ([[ex-radial-power-membership-in-w-one-p]]).

[F3] Membership in $W^{1,p}$ means the class and every first weak-derivative class lie in $L^p$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F4] For real $q$ and $0<R\le1$: if $q>-1$ then $\int_0^Rr^q\,dr<\infty$, and if $q\le-1$ then $\int_0^Rr^q\,dr=+\infty$; the borderline case $q=-1$ diverges logarithmically. This follows from the power derivative and the fundamental theorem on $[\epsilon,R]$ together with monotone convergence, and from the natural logarithm in the borderline case ([[def-real-power]], [[thm-real-power-continuity-and-derivatives]], [[thm-monotone-convergence-for-the-integral]], [[def-natural-logarithm]]).

[F5] Under $\mathrm{AC}_\omega$, the polar-coordinate formula expresses $\int_{\{0<|x|<R\}}f(x)\,dx=\sigma(S^{n-1})\int_0^Rf(r\omega)\,r^{n-1}dr$ for nonnegative Borel radial integrands, with finite positive surface measure $\sigma(S^{n-1})$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F6] There is a smooth $\chi:\mathbb R^n\to[0,1]$ equal to $1$ on $\overline B_{1/2}(0)$ with support in $B(0,1)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F7] If $u\in W^{k,p}(\Omega;\mathbb K)$ and $\eta\in C_c^\infty(\Omega;\mathbb K)$, then $\eta u\in W^{k,p}(\Omega;\mathbb K)$ and the Leibniz formula represents its weak derivatives in $L^p$ ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F8] A $C^1$ function on an open Euclidean set has its classical first partials as weak derivatives; weak differentiation restricts to open subsets; and locally integrable weak derivatives are unique almost everywhere ([[lem-classical-derivatives-are-weak-derivatives]], [[lem-weak-derivative-linearity-locality-and-commutation]], [[lem-weak-derivatives-are-unique-almost-everywhere]]).

## Counterexample

**Proof technique:** multiply the sharp radial example by a cutoff to manufacture a $W^{1,p}$ function whose square has a non-integrable gradient.

1.1 The choice $\alpha<n/p-1$ gives $p(\alpha+1)<n$, so by [F2] the power function $g$ with $g(0)=0$ and $g(x)=|x|^{-\alpha}$ for $x\ne0$ lies in $W^{1,p}(B;\mathbb R)$. The other inequality $\alpha\ge(n/p-1)/2$ gives $p(2\alpha+1)\ge n$, equivalently the radial exponent $q=n-1-p(2\alpha+1)$ satisfies $q\le-1$. Since $p<n$ and $p\ge1$ we have $n/p-1>0$, so the displayed interval for $\alpha$ is nonempty and contained in $(0,\infty)$. [F2, F4, given]

2.1 Fix $\chi$ as in [F6] and $u=\chi g$ on $B$; then $u$ agrees with the definition of the Statement off the origin and $u(0)=0$. Since $\chi\in C_c^\infty(B)$ and $g\in W^{1,p}(B;\mathbb R)$, [F7] gives $u\in W^{1,p}(B;\mathbb R)$, with weak gradient represented by the Leibniz formula $\partial_i(\chi g)=(\partial_i\chi)g+\chi\,\partial_ig$. [F7, step 1.1, given]

3.1 Suppose for contradiction that $u^2\in W^{1,p}(B;\mathbb R)$, and let $w\in L^p(B)$ be a representative of its weak gradient. On the punctured ball $\Omega^\circ=B\setminus\{0\}$ the function $u^2=\chi^2|x|^{-2\alpha}$ is $C^1$, with classical gradient $$z_i=\partial_i(\chi^2|x|^{-2\alpha}) =2\chi(\partial_i\chi)|x|^{-2\alpha}-2\alpha\chi^2x_i|x|^{-2\alpha-2}.$$ By [F8] the classical gradient $z$ is the weak gradient of $u^2|_{\Omega^\circ}$, while restricting the global weak gradient $w$ to the open subset $\Omega^\circ$ gives another weak gradient of the same restriction; uniqueness almost everywhere on $\Omega^\circ$ therefore gives $w=z$ almost everywhere on $\Omega^\circ$. [F8, step 2.1, given]

4.1 On $B(0,1/2)$ the cutoff satisfies $\chi=1$ and $\partial_i\chi=0$, so step 3.1 gives $|z(x)|=2\alpha|x|^{-2\alpha-1}$ there. Since $\{0\}$ is null, [F5] and [F4] yield $$\int_B|w|^p=\int_{\Omega^\circ}|z|^p \ge(2\alpha)^p\sigma(S^{n-1})\int_0^{1/2}r^{\,n-1-p(2\alpha+1)}\,dr=+\infty,$$ because the exponent $q=n-1-p(2\alpha+1)$ satisfies $q\le-1$ by step 1.1 and the surface measure $\sigma(S^{n-1})$ is finite and positive. This contradicts $w\in L^p(B)$, so $u^2\notin W^{1,p}(B;\mathbb R)$. [F3, F4, F5, step 1.1, step 3.1]

5.1 The counterexample is therefore complete: $u$ is a $W^{1,p}$ function with $u\cdot u\notin W^{1,p}$, in the range $n\ge2$, $1\le p<n$. The endpoint $p=n$ is excluded by the hypothesis, and the construction degenerates at $\alpha=0$ in dimension $n=1$, where Sobolev functions are continuous and multiplication is well behaved; neither case is claimed here. The only choice principle used is Countable Choice [F1], inherited from the sharp radial example and spent through the polar-coordinate interface [F5]; no full Axiom of Choice is used. $\square$ [F1, F2, F3, F5, step 2.1, step 4.1]

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.2, Example 1.10 and the
  standard observation that the subcritical $W^{1,p}$ threshold for the
  radial power is not closed under multiplication: the square has a
  strictly worse singularity, $|x|^{-2\alpha-1}$, and its $p$-th power
  fails to be integrable exactly when $p(2\alpha+1)\ge n$.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3: the
  same radial computation, used here with the localisation and uniqueness
  interfaces of the library.
