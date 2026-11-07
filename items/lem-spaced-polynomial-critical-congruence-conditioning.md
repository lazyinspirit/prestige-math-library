---
dependency_level: 2
id: lem-spaced-polynomial-critical-congruence-conditioning
kind: lemma
title: "Conditioning Critical Polynomial Congruence Means"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-spaced-polynomial-weighted-congruence-mean-values
  - lem-spaced-polynomial-congruence-family-rescaling
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Wooley, Nested efficient congruencing and relatives of Vinogradov's mean value theorem, arXiv:1708.01220v2, §§5–6"
      url: "https://arxiv.org/pdf/1708.01220v2"
---

## Statement

In the weighted congruence mean-value definition one has
$\Lambda_{1,1}=0$. Let $k\ge2$, $s=k(k+1)/2$, and suppose
$\Lambda=\Lambda_{s,k}>0$. For every sufficiently small $\epsilon>0$ there
exists $\tau>0$ and arbitrarily large $B$ with admissible data satisfying
$U^{B,H}>0$ and

$$
U^B\ge Q^{(\Lambda-\epsilon)H}U^{B,H},\qquad H=\lceil B/k\rceil. \tag{1}
$$

Fix positive $\delta,\mu<1/2$ and such an $\epsilon,\tau$, and set
$\nu=\lceil4\epsilon H/\Lambda\rceil$,
$\theta=\lceil\mu H\rceil$.
If $\epsilon$ is small enough that $\nu\le\theta\le(1-\delta)H$ for all
large $B$, then for all sufficiently large witnesses (1),

$$
U^B\le C_k Q^{s\theta}K^1_{\theta,\theta},\qquad \mathcal K^1_{\theta,\theta}(\Lambda) \ge C_k^{-1}Q^{-s\theta-\epsilon H}. \tag{2}
$$

The constant is independent of the place and all polynomial and coefficient
data. The threshold may depend on $k,\Lambda,\delta,\mu,\epsilon,\tau$.

## Statement references

[[def-spaced-polynomial-weighted-congruence-mean-values]]

## Facts & Assumptions

**Given:** The ranks, admissible places, finite complex sequences and parameter hypotheses in the Statement.

[F1] Means and exponents have the conventions of
[[def-spaced-polynomial-weighted-congruence-mean-values]].

[F2] The refinement inequality, uniform rescaling inequality and finite
orthogonality are proved in
[[lem-spaced-polynomial-congruence-family-rescaling]].

[F3] Finite Hölder inequalities follow from
[[thm-holder-inequality-for-integrals]].

## Proof

1.1 For rank one write $\phi(X)=X+\pi^c\psi(X)$, where $c\ge1$. The polynomial $\psi(X)-\psi(Y)$ is divisible by $X-Y$ in $R[X,Y]$. Thus $\phi(x)-\phi(y)=(x-y)(1+\pi^c D(x,y))$ and the second factor is a unit at $\pi$. Hence $\phi(x)\equiv\phi(y)\pmod{\pi^B}$ if and only if $x\equiv y\pmod{\pi^B}$. Expansion using [F2] gives exactly $U^B_{1,1}=U^{B,B}_{1,1}$, including when both vanish. Every ratio in the rank-one exponent definition is $1$, so $\Lambda_{1,1}=0$. [F1, F2, algebra]

1.2 Monotonicity in $\tau$ and the supremum defining $\Lambda$ give a $\tau>0$ with $\lambda_{s,k}(\tau)>\Lambda-\epsilon/3$. The limsup in $B$ and then the supremum over the data give arbitrarily large witnesses with logarithmic ratio at least $\Lambda-\epsilon$. Take $\epsilon<\Lambda$; this ratio is positive, so its denominator is positive by the convention in [F1]. This proves (1). Smaller $\epsilon$ is available whenever required. [F1]

1.3 Write $\mu_\xi=\rho_\nu(\xi)/\rho_0$ and $g_\xi=f_\nu(\cdot;\xi)$. Then $f_0=\sum_\xi\mu_\xi g_\xi$, $\sum\mu_\xi^2=1$, and $|f_0|^2\le T_1+T_2$, where $T_1=\sum\mu_\xi^2|g_\xi|^2$ and $T_2=\sum_{\xi\ne\eta}\mu_\xi\mu_\eta|g_\xi g_\eta|$. Weighted Hölder gives $\mathbb E_B T_1^s\le U^{B,\nu}$. For the off-diagonal sum put $A=\sum_{\xi\ne\eta}\mu_\xi^2\mu_\eta^2 |g_\xi|^2|g_\eta|^{2s-2}$ and define $A'$ by exchanging $\xi,\eta$; then $A'=A$. Apply Hölder to the four factors whose sums are respectively $A,A',\sum_{\xi\ne\eta}\mu_\xi^2\mu_\eta^2$, and $\sum_{\xi\ne\eta}1$, with powers $1/(2s),1/(2s),(s-2)/(2s),1/2$. The third sum is at most $1$ and the fourth at most $Q^{2\nu}$. It follows that $T_2^s\le Q^{s\nu}A$, and therefore $$ U^B\le2^{s-1}\bigl(U^{B,\nu}+Q^{s\nu}K^1_{\nu,\nu}\bigr). \tag{3} $$ Here $s\ge3$, so every displayed Hölder exponent is nonnegative. [F1, F3, algebra]

2.1 By [F2] and (1), $U^{B,\nu}/U^B\le Q^{(\Lambda+\epsilon)(H-\nu)-(\Lambda-\epsilon)H} \le Q^{-2\epsilon H}$, since $(\Lambda+\epsilon)\nu\ge4\epsilon H$. As $Q\ge2$, for all sufficiently large $B$ the first term in (3) is absorbed into its left side, uniformly over places. Thus $U^B\le2^sQ^{s\nu}K^1_{\nu,\nu}$. Apply the refinement inequality [F2] with moments $1$ and $s-1$ to the two blocks of $K^1_{\nu,\nu}$, refining both from $\nu$ to $\theta$. The separation modulo $\pi^\nu$ is preserved and the residue masses sum exactly, giving $K^1_{\nu,\nu}\le Q^{s(\theta-\nu)}K^1_{\theta,\theta}$. This proves the first inequality (2) with $C_k=2^s$. Since $q_1=1$, divide it by $Q^{\Lambda H}U^{B,H}$ and apply (1) to obtain the second inequality. [F1, F2, step 1.3] ∎
