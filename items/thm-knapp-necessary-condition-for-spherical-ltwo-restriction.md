---
id: thm-knapp-necessary-condition-for-spherical-ltwo-restriction
kind: theorem
title: Knapp necessary condition for spherical L2 restriction
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-restriction-and-extension-estimates-are-dual
- lem-spherical-cap-and-dual-slab-scales
- lem-cap-wave-packet-has-dual-tube-concentration
- def-conjugate-exponents
- def-countable-choice
- thm-real-power-laws
- def-real-power
- def-natural-logarithm
- thm-exponential-limits-and-range
- def-nonnegative-lebesgue-integral
- lem-fourier-pairing-for-a-finite-measure-and-schwartz-data
- lem-schwartz-cutoffs-from-the-standard-smooth-step
- thm-monotone-convergence-for-the-integral
- thm-differentiation-under-the-integral-sign
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: K. Merz, Some notes on restriction theory
    url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
    locator: '§3.2, printed p.8: spherical cap scales, dual tube and necessary exponent comparison; the exact constants and cap formula are computed locally.'
---

## Statement

Assume Countable Choice, let $n\ge2$, and take $p,q\in[1,\infty]$. (a) If there is $C<\infty$ with $\|\widehat f\|_{L^2(\sigma)}\le C\|f\|_{L^p(\mathbb R^n)}$ for all $f\in\mathcal S(\mathbb R^n)$, then $p\le2(n+1)/(n+3)$. Equivalently, if $E:L^2(S^{n-1})\to L^q(\mathbb R^n)$ satisfies $\|Eg\|_q\le C\|g\|_{L^2(\sigma)}$ for all $g\in L^2(\sigma)$, then $q\ge2(n+1)/(n-1)$. (b) The necessity is exhibited by the cap data $g=\mathbf 1_{C_\delta}$ and the limit $\delta\downarrow0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, $\delta\in(0,1]$, the cap $C_\delta=C_\delta(e_n)=\{\omega\in S^{n-1}:1-\omega\cdot e_n\le\delta^2\}$, and the tube $T_\delta=\{\xi:|\xi_n|\le c_n\delta^{-2},\ |\xi_j|\le c_n\delta^{-1}\ (j<n)\}$ where $a_n>0$ is a constant furnished by [[lem-cap-wave-packet-has-dual-tube-concentration]] and $c_n=a_n/\sqrt{n-1}$. For this box, $|(\xi_1,\dots,\xi_{n-1})|\le\sqrt{n-1}c_n\delta^{-1}=a_n\delta^{-1}$ and $|\xi_n|\le c_n\delta^{-2}\le a_n\delta^{-2}$, so it lies in the cylindrical concentration tube.

[F1] Duality: for $1<p<\infty$ the restriction estimate $\|\widehat f\|_{L^2(\sigma)}\le C\|f\|_{L^p}$ for all Schwartz $f$ is equivalent to the extension estimate $\|Eg\|_{L^{p'}}\le C\|g\|_{L^2(\sigma)}$ for all $g\in L^2(\sigma)$, with the same least constant. ([[lem-restriction-and-extension-estimates-are-dual]], [[def-conjugate-exponents]])

[F2] Cap and tube scales: $c'\delta^{n-1}\le\sigma(C_\delta)\le C'\delta^{n-1}$ and $\lambda_n(T_\delta)=(2c_n)^n\delta^{-(n+1)}$ for $\delta\in(0,1]$, with constants depending only on $n$. ([[lem-spherical-cap-and-dual-slab-scales]])

[F3] Cap concentration on the cylindrical tube of the supplier, and hence on the box specified in Given: for $g=\mathbf 1_{C_\delta}$ one has $|Eg(x)|\ge\tfrac12\sigma(C_\delta)$ for every $x\in T_\delta$, hence $\|Eg\|_q^q\ge(\tfrac12\sigma(C_\delta))^q\lambda_n(T_\delta)$ for every $1\le q<\infty$; and $\|g\|_{L^2(\sigma)}=\sigma(C_\delta)^{1/2}$. ([[lem-cap-wave-packet-has-dual-tube-concentration]], [[def-nonnegative-lebesgue-integral]], [[lem-fourier-pairing-for-a-finite-measure-and-schwartz-data]], [[lem-schwartz-cutoffs-from-the-standard-smooth-step]], [[thm-monotone-convergence-for-the-integral]], [[thm-differentiation-under-the-integral-sign]])

[F4] Positive-base real powers satisfy the exponent, product and iterated-power laws and are defined by $\delta^a=\exp(a\log\delta)$. The logarithm is the inverse of the exponential, and $\exp t\to\infty$ as $t\to\infty$, while $\exp t\to0$ as $t\to-\infty$. Thus if $\delta^a\le K\delta^b$ for all $\delta\in(0,1]$ and $K>0$, then $a\ge b$: otherwise put $\delta=\exp(-k)$ for large $k$ to obtain $\delta^{a-b}=\exp(k(b-a))\to\infty$, contradicting the bound. ([[thm-real-power-laws]], [[def-real-power]], [[def-natural-logarithm]], [[thm-exponential-limits-and-range]])



[F5] The finite-measure pairing, smooth cutoffs, monotone convergence and compact-frequency differentiation are available. ([[lem-fourier-pairing-for-a-finite-measure-and-schwartz-data]], [[lem-schwartz-cutoffs-from-the-standard-smooth-step]], [[thm-monotone-convergence-for-the-integral]], [[thm-differentiation-under-the-integral-sign]])

## Proof

**Proof technique:** direct; evaluate the assumed extension bound on the cap data, insert the two exact scales, and let $\delta$ tend to $0$; the restriction form follows by duality.

1.1 If $q=\infty$, the necessary inequality $q\ge2(n+1)/(n-1)$ is automatic. For $1\le q<\infty$, assume $\|Eg\|_q\le C\|g\|_{L^2(\sigma)}$ for all $g\in L^2(\sigma)$ and let $g=\mathbf 1_{C_\delta}\in L^2(\sigma)$. By [F3], $\|g\|_{L^2(\sigma)}=\sigma(C_\delta)^{1/2}$ and $\|Eg\|_q^q\ge(\tfrac12\sigma(C_\delta))^q\lambda_n(T_\delta)$. Combining with the assumed bound, $$\tfrac12\sigma(C_\delta)\,\lambda_n(T_\delta)^{1/q}\le\|Eg\|_q\le C\sigma(C_\delta)^{1/2}.$$ [F3, algebra]

2.1 Inserting the scales. Dividing by $\sigma(C_\delta)^{1/2}$ and inserting [F2], $$\tfrac12c'^{1/2}(2c_n)^{n/q}\delta^{(n-1)/2-(n+1)/q}\le\tfrac12\sigma(C_\delta)^{1/2}\lambda_n(T_\delta)^{1/q}\le C.$$ Thus there is a constant $K$ depending only on $n,q$ with $\delta^{a}\le K$ for all $\delta\in(0,1]$, where $a:=(n-1)/2-(n+1)/q$. [F2, step 1.1, algebra]

3.1 Forcing the exponent. Applying [F4] with $b=0$ to the inequality $\delta^a\le K\delta^0$ gives $a\ge0$, that is $(n-1)/2\ge(n+1)/q$, hence $q\ge2(n+1)/(n-1)$: no extension bound can hold for smaller $q$. [F4, step 2.1, algebra]

4.1 Suppose the restriction estimate holds at exponent $p$. For $1<p<\infty$, [F1] and step 3.1 imply $p'\ge2(n+1)/(n-1)$, hence $p\le2(n+1)/(n+3)$. At $p=1$ the necessary inequality is automatic. At $p=\infty$, apply the pairing identity [F5] with the finite positive measure $\mu=\mathbf1_{C_\delta}\sigma$ and a Schwartz cutoff equal to one near $S^{n-1}$ as its frequency factor. Thus an $L^\infty$ restriction bound would imply $|\int Eg\overline F|\le C\|g\|_2\|F\|_\infty$ on compactly supported smooth $F$. For $g=\mathbf1_{C_\delta}$, $h=Eg$ is smooth (differentiate its finite compact-frequency integral), and the tests $F=\chi_R h/(|h|^2+\epsilon^2)^{1/2}$ have supremum at most one. Choose $0\le\chi_R\le1$ equal to one on the radius-$R$ ball. The nonnegative pairing integrand therefore bounds the integral over that ball by $C\|g\|_2$. Let the balls increase to $\mathbb R^n$, then let $\epsilon\downarrow0$, by monotone convergence to obtain $\|Eg\|_1\le C\|g\|_2$, contradicted by the cap lower bound at $q=1$. Thus $p=\infty$ is impossible too. [F1, F2, F3, F5, step 3.1, algebra]

4.2 The exhibited family. The data witnessing the necessity are exactly the functions $g_\delta=\mathbf 1_{C_\delta}$, $\delta\in(0,1]$: for any $q<2(n+1)/(n-1)$ the quotient $\|Eg_\delta\|_q/\|g_\delta\|_{L^2(\sigma)}\ge\tfrac12\sigma(C_\delta)^{1/2}\lambda_n(T_\delta)^{1/q}$ is unbounded along $\delta=\exp(-k)\downarrow0$ by [F4] and steps 1.1–3.1, so no finite constant works. This is clause (b). [F2, F3, F4, step 2.1, step 3.1]

5.1 Conclusion. Steps 1.1–4.1 prove that any $L^2\to L^q$ extension bound forces $q\ge2(n+1)/(n-1)$, step 4.1 transfers this to the restriction form $p\le2(n+1)/(n+3)$ through the duality lemma, and step 4.2 exhibits the cap family and the limit $\delta\downarrow0$. [step 1.1, step 3.1, step 4.1, step 4.2] ∎
