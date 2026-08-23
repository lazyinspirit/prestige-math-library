---
id: ex-s-three-galois-correspondence-for-x-cubed-minus-two
kind: example
title: "The full $S_3$ correspondence for the splitting field of $x^3-2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-finite-galois-theory, thm-finite-galois-extension-characterizations, thm-normal-subgroups-and-quotients-in-the-galois-correspondence, thm-eisenstein-irreducibility-criterion, thm-evaluation-kernel-and-minimal-polynomial, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-tower-law-for-finite-field-extensions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Galois Correspondence, Examples 4.6 and 5.8"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

Let $a$ be the real cube root of $2$, let $\omega^2+\omega+1=0$ with $\omega\ne1$, and put $L=\mathbb Q(a,\omega)$. Define

$$r(a)=\omega a,\quad r(\omega)=\omega,\qquad s(a)=a,\quad s(\omega)=\omega^2.$$

Then $\operatorname{Gal}(L/\mathbb Q)=\langle r,s:r^3=s^2=1,\ srs=r^{-1}\rangle\cong S_3$. Its fixed-field table, with products of automorphisms read right to left, is

| Subgroup | Fixed field |
|---|---|
| $\{1\}$ | $L$ |
| $\langle r\rangle=A_3$ | $\mathbb Q(\omega)$ |
| $\langle s\rangle$ | $\mathbb Q(a)$ |
| $\langle rs\rangle$ | $\mathbb Q(\omega^2a)$ |
| $\langle r^2s\rangle$ | $\mathbb Q(\omega a)$ |
| $S_3$ | $\mathbb Q$ |

The three order-two subgroups correspond to three cubic fields that are not normal over $\mathbb Q$. Among the strict intermediate fields, $\mathbb Q(\omega)$ is the single normal one.

## Facts & Assumptions

**Given:** Eisenstein's irreducibility criterion at $2$ ([[thm-eisenstein-irreducibility-criterion]]) and the degree formulas in [[thm-fundamental-theorem-of-finite-galois-theory]].

[L1] An intermediate field $E/F$ is Galois exactly when its corresponding subgroup is normal ([[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]]).

[L2] For a finite extension $L/E$ with $G=\operatorname{Aut}(L/E)$, being Galois, being the splitting field of a separable polynomial, $|G|=[L:E]$, and $L^G=E$ are equivalent ([[thm-finite-galois-extension-characterizations]]).

[L3] For $b$ algebraic over a field $F$ there is a unique monic irreducible $m_b\in F[x]$ generating the kernel of evaluation at $b$, and $f(b)=0$ exactly when $m_b\mid f$ ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L4] If $b$ is algebraic over $F$ with minimal polynomial of degree $n$, then $1,b,\ldots,b^{n-1}$ is an $F$-basis of $F(b)$ and $[F(b):F]=n$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L5] For fields $F\subseteq K\subseteq L$ with $K/F$ and $L/K$ finite, $L/F$ is finite and $[L:F]=[L:K][K:F]$ ([[thm-tower-law-for-finite-field-extensions]]).

## Verification

**Proof technique:** direct.

1.1 Eisenstein at $2$ makes $x^3-2$ irreducible over $\mathbb Q$, so by [L3] it is the minimal polynomial of $a$ and by [L4] $[\mathbb Q(a):\mathbb Q]=3$. Since $a$ is real, $\mathbb Q(a)\subseteq\mathbb R$, whereas the two roots $\omega,\omega^2$ of $x^2+x+1$ are nonreal; that quadratic therefore has no root in $\mathbb Q(a)$, is irreducible over $\mathbb Q(a)$, and by [L3] and [L4] gives $[L:\mathbb Q(a)]=2$. By [L5], $[L:\mathbb Q]=[L:\mathbb Q(a)][\mathbb Q(a):\mathbb Q]=6$. The three cube roots of $2$ are $a,\omega a,\omega^2a$, all in $L$, and they generate $L$ over $\mathbb Q$ because $\omega=(\omega a)a^{-1}$; hence $L$ is the splitting field of $x^3-2$ over $\mathbb Q$. [given, L3, L4, L5, algebra]

2.1 The displayed maps permute the three roots and preserve the defining relations, so they are automorphisms. Direct calculation gives $r^3=s^2=1$ and $srs=r^{-1}$, and the six maps $1,r,r^2,s,rs,r^2s$ are distinct. The three roots $a,\omega a,\omega^2a$ of $x^3-2$ are distinct, so that polynomial is separable and step 1.1 makes $L$ its splitting field; by [L2], $L/\mathbb Q$ is finite Galois with $|\operatorname{Gal}(L/\mathbb Q)|=[L:\mathbb Q]=6$. The six maps therefore exhaust the automorphism group. [step 1.1, L2, construct]

3.1 Each listed generator fixes its displayed field: $r$ fixes $\mathbb Q(\omega)$, $s$ fixes $\mathbb Q(a)$, while $rs$ sends $a$ to $\omega a$ and $\omega$ to $\omega^2$, so it fixes $\omega^2a$, and $r^2s$ sends $a$ to $\omega^2a$ and $\omega$ to $\omega^2$, so it fixes $\omega a$. Each of $a,\omega a,\omega^2a$ is a root of the irreducible $x^3-2$ and $\omega$ is a root of the irreducible $x^2+x+1$, so by [L3] and [L4] the four fields have degrees $3,3,3$ and $2$ over $\mathbb Q$, matching the indices of the corresponding subgroups. Each displayed field therefore sits inside the fixed field of its subgroup with the same finite degree over $\mathbb Q$, so the two coincide, and the fundamental theorem's bijection makes the table complete. [step 2.1, given, L3, L4, algebra]

4.1 The subgroup $A_3$ is normal in $S_3$, while none of the three order-two subgroups is normal. By [L1], $\mathbb Q(\omega)/\mathbb Q$ is Galois and the three cubic fields are not; the base and splitting fields give the two normal endpoints. [step 3.1, L1] ∎
