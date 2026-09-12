---
id: def-twisted-loop-algebra-from-a-diagram-automorphism
kind: definition
title: Twisted loop algebra from a diagram automorphism
deps: ["def-degree-derivation-and-full-untwisted-affine-algebra"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Section 8.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Definition 14.1.2
        and Proposition 14.1.3
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
---

## Definition

Let $\sigma$ be an automorphism of the finite simple $\mathfrak g$ induced by a Dynkin-diagram permutation of its fixed simple generators, of finite order $r\ge1$. Fix a primitive $r$th root of unity $\zeta\in\mathbb C$. Write $\mathfrak g_j=\{x:\sigma(x)=\zeta^jx\}$, with indices modulo $r$. The polynomial $X^r-1$ has distinct roots, so its annihilation of $\sigma$ gives $\mathfrak g=\bigoplus_{j\bmod r}\mathfrak g_j$.

In the loop realization of [[def-degree-derivation-and-full-untwisted-affine-algebra]], define
$$\tau(x\otimes t^m)=\zeta^{-m}\sigma(x)\otimes t^m,\qquad\tau(c)=c,\quad\tau(d)=d.$$
The **twisted loop algebra** is the fixed subalgebra
$$L(\mathfrak g,\sigma)=\bigoplus_{m\in\mathbb Z}\mathfrak g_{m\bmod r}\otimes t^m.$$
Its central/full extensions here mean the fixed subalgebras $L(\mathfrak g,\sigma)\oplus\mathbb Cc$ and $L(\mathfrak g,\sigma)\oplus\mathbb Cc\oplus\mathbb Cd$ in that same normalization.

For well-definedness, $\sigma$ preserves the normalized Killing form: conjugation intertwines the finite adjoint operators, preserving their product traces, and hence also the fixed scalar normalization. Thus the loop part of each bracket is preserved. A nonzero central coefficient has $m+n=0$, so its scalar factor under $\tau$ is $\zeta^{-m-n}=1$; the central term is preserved as well. The degree action is preserved since $\tau$ does not change $m$. Therefore $\tau$ is a Lie automorphism, with inverse obtained from $\sigma^{-1}$ and $\zeta^m$. If two elements are fixed, so is their bracket. Finally the degree-$m$ fixed condition is exactly $\sigma(x)=\zeta^mx$, proving the displayed description. Brackets satisfy $[\mathfrak g_j,\mathfrak g_k]\subseteq\mathfrak g_{j+k}$ directly by applying $\sigma$.

For $r=1$ this is the untwisted construction. All mode sums are finite; some eigenspaces may be zero. This defines the fixed-loop objects, without classifying twisted affine diagrams or changing the central/degree scaling convention.
