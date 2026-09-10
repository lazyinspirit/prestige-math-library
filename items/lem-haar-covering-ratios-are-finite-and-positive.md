---
id: lem-haar-covering-ratios-are-finite-and-positive
kind: lemma
title: Haar covering ratios are finite and positive
deps: [def-haar-covering-ratio-of-test-functions, thm-compactness-under-continuous-maps, thm-compact-iff-fip]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
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

For $f\ge0$ and $0\ne\phi\ge0$ in $C_c(G)$, $(f:\phi)$ is finite, is zero exactly when $f=0$, and is at least $\|f\|_\infty/\|\phi\|_\infty$. Covering ratios are monotone in the first argument, positively homogeneous there (including scalar zero), subadditive, and exactly left invariant. For nonzero $\phi,\psi$,
$$ (f:\psi)\le(f:\phi)(\phi:\psi). $$
Consequently, for fixed nonzero $f_0\ge0$ and nonzero $f\ge0$,
$$0<\frac1{(f_0:f)}\le I_\phi(f)\le(f:f_0)<\infty.$$

## Facts & Assumptions

**Given:** $f,\phi,\psi,f_0$ as stated.

[F1] Ratios are infima of coefficient sums of finite translating covers. ([[def-haar-covering-ratio-of-test-functions]])

[F2] Continuous functions on a nonempty compact support have bounded absolute value and attain a maximum. ([[thm-compactness-under-continuous-maps]])

[F3] Compact sets admit finite subcovers; equivalently they satisfy the closed FIP condition. ([[thm-compact-iff-fip]])

## Proof

**Proof technique:** direct.

1.1 If $f=0$, the empty cover gives ratio zero. Otherwise put $M=\|f\|_\infty>0$. Choose $y$ with $\phi(y)>0$ and $0<t<\phi(y)$. The open set $W=\{\phi>t\}$ contains $y$. For every $x\in\operatorname{supp}f$, the translate $xy^{-1}W$ contains $x$. Finitely many such translates cover the compact support, and coefficients $M/t$ on them dominate $f$, so the infimum is finite. [F1, F2, F3]

2.1 Every cover satisfies $f(x)\le\|\phi\|_\infty\sum c_j$ for every $x$. Taking the supremum and then the infimum yields $(f:\phi)\ge\|f\|_\infty/\|\phi\|_\infty>0$ when $f\ne0$. In particular the normalizing denominator is finite and positive. [F1, F2, step 1.1]

2.2 A cover of a larger function covers a smaller one. Multiplying coefficients by $t>0$ and dividing them back by $t$ proves $(tf:\phi)=t(f:\phi)$; scalar zero follows from the empty cover. Combining covers of $f$ and $g$ and taking independently arbitrarily close upper approximations to the two infima gives $(f+g:\phi)\le(f:\phi)+(g:\phi)$. Translating a cover by $a$ replaces each centre $x_j$ by $ax_j$; translation by $a^{-1}$ reverses this operation. Thus $(L_af:\phi)=(f:\phi)$. [F1, step 1.1]

3.1 If $f\le\sum_j c_jL_{x_j}\phi$ and $\phi\le\sum_k d_kL_{y_k}\psi$, substitution gives $f\le\sum_{j,k}c_jd_kL_{x_jy_k}\psi$. Choose the two coefficient sums below their finite infima plus $\delta>0$ and let $\delta\downarrow0$. Their product proves the claimed composition inequality, also for $f=0$. Applying it to $(f, f_0,\phi)$ gives the upper coordinate bound. Applying it to $(f_0,f,\phi)$ and dividing the positive factors gives the lower bound. [F1, step 1.1, step 2.1] ∎

## Sources

Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2. Local argument and conventions as displayed above.
