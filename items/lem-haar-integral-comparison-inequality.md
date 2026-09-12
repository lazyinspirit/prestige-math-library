---
id: lem-haar-integral-comparison-inequality
kind: lemma
title: Haar integral comparison inequality
deps: [lem-haar-covering-ratios-are-finite-and-positive, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, lem-translations-preserve-compactly-supported-continuous-functions, lem-compactly-supported-kernels-admit-commuting-radon-integrals, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, lem-positive-linear-functionals-on-c-c-are-monotone, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2
      url: https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf
proof_strategy: direct
---

## Statement

Assume AC and let $I,J$ be nonzero positive left-invariant real $C_c(G)$ functionals. For $f\ge0$ and $0\ne g\ge0$, $I(f)\le(f:g)I(g)$. For real $f\in C_c(G)$ and nonzero nonnegative symmetric $u\in C_c(G)$, meaning $u(z^{-1})=u(z)$,
$$|I(f)J(u)-I(u)J(f)|\le I(u)\sup_{z\in\operatorname{supp}u}J(|R_zf-f|).$$
For every fixed $f$ and $\epsilon>0$, this supremum is $<\epsilon$ whenever $\operatorname{supp}u$ lies in a sufficiently small identity neighbourhood. Such symmetric $u$ exist, and $I(u),J(u)>0$.

## Facts & Assumptions

**Given:** $I,J,f,g,u$ as specified, with AC.

[F1] Finite translating covers have finite coefficient-sum infima. ([[lem-haar-covering-ratios-are-finite-and-positive]])

[F2] Nonzero Haar integrals are strictly positive on nonzero nonnegative test functions. ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]])

[F3] Translations are uniformly continuous in the parameter with a common compact support nearby. ([[lem-translations-preserve-compactly-supported-continuous-functions]])

[F4] Continuous compact kernels admit commuting partial integrals under AC. ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]])

[F5] Under DC compactly supported cutoffs exist. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

[F6] Positivity gives monotonicity. ([[lem-positive-linear-functionals-on-c-c-are-monotone]])

[F7] AC covers the kernel and cutoff construction. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 For each cover $f\le\sum c_jL_{x_j}g$, positivity and left invariance give $I(f)\le\sum c_jI(g)$. Taking the infimum gives $I(f)\le(f:g)I(g)$, including $f=0$. [F1, F6]

1.2 Write $K=\operatorname{supp}f$, $S=\operatorname{supp}u$. The continuous kernel $f(x)u(x^{-1}y)$ has support in the compact set $K\times KS$; compactness here follows from compact products and continuous multiplication as in [F3]. Integrating $y$ by left invariance yields $I(f)J(u)$. Interchanging integrals and substituting $x=yz$ by left invariance of $I$ yields $J_yI_z f(yz)u(z^{-1})=J_yI_z f(yz)u(z)$. The transformed kernel is supported in $KS^{-1}\times S$, so a second application of [F4] gives $I(f)J(u)=I_z u(z)J_yf(yz)$. [F3, F4, F7]

2.1 Subtract $I(u)J(f)$. For every $z$, $|J(R_zf-f)|\le J(|R_zf-f|)$ by positivity. The latter is continuous in $z$: [F3] and $||h|-|k||\le|h-k|$, dominated on a common compact support by a cutoff, give the same continuity bound as in [F4]. Hence its supremum on compact $S$ is finite. Positivity applied to $u$ times this bound proves the stated comparison inequality. [F3, F4, F5, F6, step 1.2]

3.1 On a compact identity neighbourhood, all $R_zf-f$ have support in one compact set $C$. Choose a cutoff $c=1$ on $C$. Then $J(|R_zf-f|)\le\|R_zf-f\|_\infty J(c)\to0$. If $J(c)=0$ the bound is already zero. Given $\epsilon$, choose a neighbourhood with this bound $<\epsilon/2$, ensuring the supremum is at most $\epsilon/2<\epsilon$. Inside a smaller symmetric open neighbourhood $W$, take $0\le v\le1_W$ with $v(e)=1$, and set $w=(2v-1)^+$ and $u(z)=w(z)w(z^{-1})$. Its support is contained in $W$, it is symmetric, and $u(e)=1$. Strict positivity gives $I(u),J(u)>0$. [F2, F3, F5, F6, F7] ∎

## Sources

Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2. Local argument and conventions as displayed above.
