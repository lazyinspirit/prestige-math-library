---
id: lem-waring-critical-one-variable-moment-bound
kind: lemma
title: "The critical one-variable Waring moment bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-countable-choice
  - def-real-power
  - def-waring-one-variable-mean-value
  - def-vinogradov-mean-value-Jsk
  - thm-vinogradov-mean-value-main-conjecture
  - thm-holder-inequality-for-integrals
  - lem-waring-one-variable-moment-lift
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, proof of Corollary 10.2, printed pp. 1619–1620"
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "Theorem 1.1 and §10, printed pp. 1576 and 1619–1620"
---

## Statement

Assume countable choice. For each integer $k\ge2$, put $s_0=k^2+k-2$ and
$$I_{s_0,k}(X):=\int_0^1\left|\sum_{x=1}^{X}e(\alpha x^k)\right|^{2s_0}d\alpha$$
for integers $X\ge2$, where $e(t)=\exp(2\pi i t)$. For every $\varepsilon>0$ there is a constant $C_{k,\varepsilon}$ such that
$$I_{s_0,k}(X)\le C_{k,\varepsilon}X^{2s_0-k+\varepsilon}.$$

## Statement references

[Wooley, Theorem 1.1 and §10](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

## Facts & Assumptions

**Given:** Countable choice, an integer $k\ge2$, and $s_0=k^2+k-2$.

[A1] Countable choice is assumed by the Vinogradov mean-value theorem used below ([[def-countable-choice]]).

[F1] Under countable choice, for every $r,j\ge1$ and $\eta>0$,
$$J_{r,j}(Y)\le C_{r,j,\eta}Y^\eta\left(Y^r+Y^{2r-j(j+1)/2}\right)$$
([[thm-vinogradov-mean-value-main-conjecture]]).

[F2] On a measure space of total measure $1$, Hölder gives $\int |f|^{2a}\le(\int|f|^{2b})^{a/b}$ for $0<a\le b$ ([[thm-holder-inequality-for-integrals]]).

[F3] The one-variable lift states
$$I_{s,k}(X)\le C\left(X^{(k+1)(k-2)/2+\eta}J_{s,k}(2X)+X^{(k-1)(k-2)/2-1+\eta}J_{s,k-1}(2X)\right)$$
([[lem-waring-one-variable-moment-lift]]). The full lift and its major-arc transference input are now proved at this unchanged interface.

## Proof

**Proof technique:** VMVT bounds, Hölder interpolation, and the one-variable lift.

1.1 Put $s_1=k^2+k=s_0+2=2K_k$ and $K_j=j(j+1)/2$. By [F1] at $(r,j)=(s_1,k)$, $$J_{s_1,k}(2X)\le C_\eta X^\eta\left(X^{s_1}+X^{2s_1-K_k}\right)\le C_\eta X^{2s_1-K_k+\eta},$$ because $s_1\ge K_k$. Hölder [F2] on the unit $k$-cube therefore gives $$J_{s_0,k}(2X)\le J_{s_1,k}(2X)^{s_0/s_1}\le C_\eta X^{2s_0-K_k s_0/s_1+\eta}=C_\eta X^{2s_0-K_k+1+\eta},$$ because $K_k s_0/s_1=K_k(2K_k-2)/(2K_k)=K_k-1$. [A1, F1, F2, algebra]

1.2 Since $s_0\ge K_{k-1}$, applying [F1] at $(r,j)=(s_0,k-1)$ gives $$J_{s_0,k-1}(2X)\le C_\eta X^\eta\left(X^{s_0}+X^{2s_0-K_{k-1}}\right)\le C_\eta X^{2s_0-K_{k-1}+\eta}.$$ [A1, F1, algebra]

2.1 Substitute the bounds of steps 1.1 and 1.2 into [F3]. The exponents satisfy $$\frac{(k+1)(k-2)}2+(2s_0-K_k+1)=2s_0-k,\qquad \frac{(k-1)(k-2)}2-1+(2s_0-K_{k-1})=2s_0-k.$$ Taking $\eta$ sufficiently small relative to the requested $\varepsilon$ yields the stated $X^{2s_0-k+\varepsilon}$ estimate using the now-proved lift [F3]. [A1, F3, step 1.1, step 1.2, algebra] ∎

## Proof status

The sole one-variable-lift supplier hold is discharged. The displayed VMVT/Hölder substitution proves the unchanged full critical-moment Statement under its stated Countable Choice hypothesis.
