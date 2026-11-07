---
id: thm-johnston-nickel-finite-layer-character-decomposition
kind: theorem
title: Johnston–Nickel Character Decomposition of Finite-Layer Projections
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-iwasawa-algebra-of-profinite-group
  - thm-johnston-nickel-cyclotomic-twist-character-evaluation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Equation (8.1), printed p. 22; cited as a consequence of Nickel, Theorem 6.4.
verification: {}
---

## Statement

Let $p$ be odd, let $K$ be totally real, let $L/K$ be a finite abelian CM extension with $\zeta_p\in L$, let $L_\infty/L$ be its cyclotomic $\mathbb Z_p$-extension, and put $G=\operatorname{Gal}(L_\infty/K)$. For $n\ge0$, let $G_n=\operatorname{Gal}(L_n/K)$ and let $\operatorname{aug}_n:\Lambda(G)\to\mathbb Z_p[G_n]$ be the layer projection. Let $\Upsilon$ consist of the elements whose projection to every $\mathbb Z_p[G_n]$ is a non-zero-divisor, and extend $\operatorname{aug}_n$ to $\Upsilon^{-1}\Lambda(G)\to\mathbb Q_p[G_n]$. For each irreducible $\mathbb Q_p^c$-valued character $\chi$ of $G_n$, let $e_n(\chi)$ be its primitive central idempotent, let $j_\chi$ be the character-component evaluation map of the preceding character-twist theorem at $r=0$, and let $\operatorname{aug}_{\Gamma_K}$ be augmentation on the cyclotomic subgroup algebra. Then every $x\in\Upsilon^{-1}\Lambda(G)$ satisfies
$$\operatorname{aug}_n(x)=\sum_{\chi\in\operatorname{Irr}_{\mathbb Q_p^c}(G_n)}\operatorname{aug}_{\Gamma_K}(j_\chi(x))e_n(\chi).$$

## Theorem references

[Johnston and Nickel, equation (8.1)](https://arxiv.org/pdf/2010.03186)

## Facts & Assumptions

**Given:** Exactly the CM tower, finite layer, regular-denominator localization and character maps in the Statement. The Galois group $G$ is abelian, since $L/K$ is abelian and the cyclotomic extension is abelian.

[F1] The preceding theorem constructs $\gamma_\chi$ and the complete component field; its evaluation sends $\gamma_\chi$ to $\gamma_K$ when $w_\chi=1$ and $r=0$. [[thm-johnston-nickel-cyclotomic-twist-character-evaluation]]

[F2] A completed group ring is the inverse limit of the finite quotient group rings, with its natural finite-layer projections. [[def-iwasawa-algebra-of-profinite-group]]

## Proof

**Proof technique:** identify the augmented component evaluation with a finite character evaluation, then use the finite Fourier decomposition.

1.1 Choose a finite extension $F/\mathbb Q_p$ containing all character values of the finite abelian group $G_n$. Every irreducible representation of $G_n$ over an algebraic closure is one-dimensional: commuting finite-order matrices are simultaneously diagonalizable, since their minimal polynomials divide separable polynomials $X^a-1$; diagonalize successively along a finite generating list. A common eigenline is invariant, so irreducibility forces dimension one. The same argument diagonalizes the regular representation over $F$. For a character $\chi$, its common eigenspace in $F[G_n]$ is precisely $Fe_n(\chi)$, where
$$e_n(\chi)=\frac1{|G_n|}\sum_{g\in G_n}\chi(g)^{-1}g.$$
Indeed the eigenvalue equations determine every coefficient from the coefficient of $1$. These eigenspaces are one-dimensional, disjoint, and span the regular representation. Consequently for every $a\in F[G_n]$,
$$a=\sum_\chi\chi(a)e_n(\chi),$$
and $a$ is regular exactly when every $\chi(a)$ is nonzero. This proves the required idempotent decomposition without invoking a nonabelian base-change theorem. [given, algebra]

1.2 Inflate $\chi$ to $G$. Its restriction to $H$ is one-dimensional and fixed by $G$, so $w_\chi=1$. Choose a lift $q$ of $\gamma_K$. The coordinate construction in [F1] becomes
$$\gamma_\chi=q\chi(q)^{-1}e_\chi.$$
Thus on this component $j_\chi(h)=\chi(h)$ for $h\in H$ and $j_\chi(q)=\chi(q)\gamma_K$. Augmentation therefore sends $j_\chi(hq^j)$ to $\chi(hq^j)$. This holds for every integer $j$, including negative integers. [F1, step 1.1, algebra]

2.1 For $a\in\Lambda(G)$, both $\operatorname{aug}_{\Gamma_K}(j_\chi(a))$ and $\chi(\operatorname{aug}_n(a))$ are the same continuous finite-character evaluation. To see this directly on completed rings, evaluate a group-ring approximation modulo $p^b$ in a finite quotient through which $\chi$ factors, then pass to the compatible residues in $\mathcal O_F$. In the component coordinate of step 1.2, the principal generator is substituted by $\chi(q)\gamma_K$, with $\chi(q)$ of finite $p$-power order. Hence its difference from $1$ is topologically nilpotent in $\mathcal O_F$, so evaluating the power series and then augmenting converges and gives exactly these same residue limits. Equality on group elements from step 1.2 proves equality on all their finite sums and on the inverse limit. [F1, F2, step 1.2, algebra]

2.2 Write $x=a/b$ with $a\in\Lambda(G)$ and $b\in\Upsilon$. The element $\operatorname{aug}_n(b)$ is regular in $\mathbb Z_p[G_n]$ by the definition of $\Upsilon$. It is also regular after tensoring with $F$: multiplication is a square matrix on the finite free integral group ring, its determinant is nonzero by injectivity over $\mathbb Z_p$, and that determinant remains nonzero in $F$. Step 1.1 then gives $\chi(\operatorname{aug}_n(b))\ne0$ for every $\chi$. By step 2.1 this is the augmented denominator of $j_\chi(b)$. Thus augmentation of $j_\chi(x)$ is defined at this fraction and
$$\operatorname{aug}_{\Gamma_K}(j_\chi(x))
=\frac{\chi(\operatorname{aug}_n(a))}{\chi(\operatorname{aug}_n(b))}
=\chi(\operatorname{aug}_n(x)).$$
This also proves independence of the fraction representation. No claim that augmentation is defined on every fraction in the ambient component field is needed. [given, step 1.1, step 2.1, algebra]

3.1 Apply the finite decomposition in step 1.1 to $\operatorname{aug}_n(x)\in\mathbb Q_p[G_n]\subset F[G_n]$ and substitute step 2.2 for every character coefficient. The result is the displayed formula in the Statement. Although its summands are written over a splitting field, their sum equals the original $\mathbb Q_p$-element, so the asserted identity has the claimed rational meaning. The proof includes $n=0$ and $x=0$ and requires neither a sufficiently large layer nor a choice of character decomposition of $G_n$ into separate $H$ and $\Gamma$ factors. [step 1.1, step 2.2, algebra] ∎
