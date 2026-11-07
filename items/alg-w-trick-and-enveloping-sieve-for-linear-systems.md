---
id: alg-w-trick-and-enveloping-sieve-for-linear-systems
kind: algorithm
title: "W-trick and enveloping-sieve reduction for linear systems"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - def-affine-linear-forms-system-and-size
  - def-finite-complexity-of-a-linear-forms-system
  - def-local-von-mangoldt-factor-beta-p
  - def-von-mangoldt-function
  - def-prime
  - def-natural-logarithm
  - def-convex-subset-of-euclidean-space
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-standard-representatives-modulo-n
  - def-linear-forms-condition-for-a-measure
  - def-correlation-condition-for-a-measure
  - def-k-pseudorandom-measure
  - def-gowers-uniformity-norm-on-intervals
  - def-w-tricked-von-mangoldt-function
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-siegel-walfisz-prime-distribution
  - lem-finite-complexity-system-admits-s-normal-form-extension
  - lem-w-trick-residue-decomposition-identity
  - lem-w-trick-local-factors-recombine
  - thm-w-tricked-primes-have-pseudorandom-majorant
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Green and Terence Tao, Linear equations in primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf"
      locator: "§5, equations (5.1)–(5.6), Theorem 5.1, and §6, Definitions 6.1–6.3, printed pp. 1776–1780."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "§1.7.2, printed pp. 123–127: the W-trick, truncated divisor-square majorants, and pseudorandomness tests."
---

## Definition

Fix integers $d,t\ge1$, $s\ge0$, $L>0$, a sufficiently large scale $N$, a nonconstant affine-linear system $\Psi:\mathbb Z^d\to\mathbb Z^t$ of complexity at most $s$ with $\|\Psi\|_N\le L$, and a bounded measurable convex set $K\subseteq[-N,N]^d$ on which every $\psi_i(x)>N^{7/10}$. Choose an integer $w=w(N)\ge2$ with $w(N)\to\infty$, $w(N)\le\frac12\log\log N$, and $W=\prod_{p\le w}p<N^{7/10}$. Define $\Lambda'(m)=\log p$ when $m=p$ is prime and $0$ otherwise. Let $\Phi(W)$ be the number of residue classes $b\in\mathbb Z/W$ coprime to $W$, and define $\Lambda'_{b,W}(n)=\frac{\Phi(W)}{W}\Lambda'(Wn+b)$ for each such $b$.

Perform the following finite procedure.

1. Enumerate all residue vectors $a\in(\mathbb Z/W)^d$, using their coordinatewise representatives in $\{0,\ldots,W-1\}^d$. Retain $a$ exactly when $p\nmid\psi_i(a)$ for every prime $p\le w$ and every $i$; call the retained list $\mathcal A_W$.
2. For every retained $a$, let $b_i(a)\in\{1,\ldots,W-1\}$ be the least positive representative of $\psi_i(a)\pmod W$. Form $\widetilde\psi_{i,a}(n)=\frac{\psi_i(Wn+a)-b_i(a)}W$ and $K_a=\{n\in\mathbb R^d:Wn+a\in K\}$.
3. For each residue $b_i(a)$ used, record the required input: a majorant $\nu_{b_i(a),W}$ on the transformed interval that pointwise dominates $\Lambda'_{b_i(a),W}$ up to a stated positive constant and satisfies every linear-forms and correlation test required by the transformed systems. Compare the actual supplier Statement with these requirements, including its residue-class and scale ranges; an unverified or mismatched interface remains an obligation and is not treated as supplied.
4. Apply the finite-complexity normal-form extension to each $\widetilde\Psi_a=(\widetilde\psi_{i,a})_{i=1}^t$. Return the retained residue list, transformed systems and regions, supplied majorants and their stated conditions, and the interval $U^{s+1}$ uniformity estimates that remain to be established for the generalized von Neumann reduction. The procedure records these estimates as obligations; it does not assert that they hold.

For each retained $a$, the affine maps fit into the following commutative diagram:

```tikzcd
\mathbb Z^d \arrow[r,"n\mapsto Wn+a"] \arrow[d,"\widetilde\Psi_a"'] & \mathbb Z^d \arrow[d,"\Psi"] \\
\mathbb Z^t \arrow[r,"y\mapsto Wy+b(a)"'] & \mathbb Z^t
```

Here $b(a)=(b_1(a),\ldots,b_t(a))$; commutativity is the componentwise affine identity $\psi_i(Wn+a)=W\widetilde\psi_{i,a}(n)+b_i(a)$. The exact prime-weight residue identity and local-factor recombination are established by the separately stated residue-decomposition and local-factor lemmas.

## Definition references

[[def-affine-linear-forms-system-and-size]]

[[def-finite-complexity-of-a-linear-forms-system]]

[[def-local-von-mangoldt-factor-beta-p]]

[[def-von-mangoldt-function]]

[[def-prime]]

[[def-natural-logarithm]]

[[def-convex-subset-of-euclidean-space]]

[[def-integers-modulo-n]]

[[def-addition-and-multiplication-modulo-n]]

[[thm-standard-representatives-modulo-n]]

[[def-linear-forms-condition-for-a-measure]]

[[def-correlation-condition-for-a-measure]]

[[def-k-pseudorandom-measure]]

[[lem-finite-complexity-system-admits-s-normal-form-extension]]

[[lem-w-trick-residue-decomposition-identity]]

[[lem-w-trick-local-factors-recombine]]

[[thm-w-tricked-primes-have-pseudorandom-majorant]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[thm-siegel-walfisz-prime-distribution]]

[Green and Tao, §5 and §6](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, §1.7.2](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

## Facts & Assumptions

**Given:** The affine system, scale, convex region, local factors, W-trick conventions, and the supplier interfaces named in the Definition.

[A1] The current batch-134 majorant Statement assumes the Axiom of Choice, Countable Choice, Dependent Choice, and a Siegel–Walfisz progression estimate. Its displayed majorant is for $Wn+1$ (residue $1$) as $N$ tends to infinity through primes. [[thm-w-tricked-primes-have-pseudorandom-majorant]]

[F1] A $k$-pseudorandom measure must satisfy the $(k2^{k-1},3k-4,k)$ linear-forms condition and the $2^{k-1}$ correlation condition; the chosen $k$ must cover every test generated by the transformed systems. [[def-k-pseudorandom-measure]]

[F2] The W-tricked von Mangoldt weight in the current majorant Statement is $\widetilde\Lambda_W(n)=\frac{\varphi(W)}W\log(Wn+1)$ when $Wn+1$ is prime and zero otherwise. [[def-w-tricked-von-mangoldt-function]]

## Proof status

This item specifies a reduction and records obligations; it does not establish the remaining $U^{s+1}$ estimates or a suitable majorant for every transformed residue and scale. The fixed-residue majorant proof establishes its original conditional Statement under AC/CC/DC and the displayed Siegel–Walfisz estimate, whose supplier has an accepted local proof at that scope. Its construction treats only residue $1$, prime scales and one fixed explicit cutoff. The procedure still needs every used reduced residue $b_i(a)$, arbitrary sufficiently large scales and its declared cutoff range, with an explicit $k$ covering every generated linear-forms and correlation test. Those broader interfaces and uniformity obligations remain unresolved.
