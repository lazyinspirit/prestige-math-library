---
id: thm-koebe-distortion-theorem
kind: theorem
title: "Koebe's distortion theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normalized-univalent-class, thm-blaschke-factor-is-a-disc-automorphism, cor-bieberbach-second-coefficient-bound]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 7.5.8"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Ch. 14"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

If $f\in\mathcal S$ and $|z|=r<1$, then

$$\frac{1-r}{(1+r)^3}\le|f'(z)|\le\frac{1+r}{(1-r)^3}.$$

## Facts & Assumptions

**Given:** A function $f\in\mathcal S$ and a point $z\in\mathbb D$ with $|z|=r<1$.

[L1] For each $a\in\mathbb D$, the Blaschke factor $\varphi_a$ is a disc automorphism ([[thm-blaschke-factor-is-a-disc-automorphism]]).

[L2] If $g(\zeta)=\zeta+A\zeta^2+\cdots$ lies in $\mathcal S$, then $|A|\le2$ ([[cor-bieberbach-second-coefficient-bound]]).

## Proof

**Proof technique:** direct.

1.1 By rotating the source and target, it is enough to treat the case $z=r\in[0,1)$. Define $$\psi_r(\zeta):=\frac{\zeta+r}{1+r\zeta},\qquad g(\zeta):=\frac{f(\psi_r(\zeta))-f(r)}{(1-r^2)f'(r)}.$$ Fact [L1] makes $\psi_r$ an automorphism of $\mathbb D$, so $g\in\mathcal S$. [L1, given, algebra]

2.1 Differentiate twice at $0$. Since $\psi_r'(0)=1-r^2$ and $\psi_r''(0)=-2r(1-r^2)$, one gets $$g''(0)=(1-r^2)\frac{f''(r)}{f'(r)}-2r.$$ Because $g\in\mathcal S$, [L2] gives $|g''(0)|\le4$. Therefore $$\left|\frac{f''(r)}{f'(r)}-\frac{2r}{1-r^2}\right|\le\frac4{1-r^2}.$$ [L2, step 1.1, algebra]

3.1 Put $$H(r):=\log\!\bigl((1-r^2)f'(r)\bigr),$$ choosing a continuous branch along $[0,r]$ since $f'$ never vanishes on $\mathbb D$ for univalent $f$. Then step 2.1 yields $$|H'(t)|=\left|\frac{f''(t)}{f'(t)}-\frac{2t}{1-t^2}\right|\le\frac4{1-t^2}\qquad(0\le t<1).$$ [step 2.1, algebra]

4.1 Integrating step 3.1 from $0$ to $r$ and using $f'(0)=1$ gives $$|H(r)|\le \int_0^r\frac4{1-t^2}\,dt=2\log\frac{1+r}{1-r}.$$ Exponentiating and dividing by $1-r^2$ yields $$\frac{1-r}{(1+r)^3}\le|f'(r)|\le\frac{1+r}{(1-r)^3}.$$ [step 3.1, algebra]

5.1 The argument of steps 1.1 through 4.1 applies after rotation to every point of modulus $r$, so the same bounds hold for the original $z$. [step 1.1, step 4.1] ∎
