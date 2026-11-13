---
title: Resolvent adjoint transport to order minus two
status: published
research_item: lem-se-cutoff-resolvent-negative-extension
dependency_level: 8
sources:
  references: []
---

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent)
- [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step)
- [math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator](https://alphabetamath.cc/item/def-resolvent-and-spectrum-of-a-closed-unbounded-operator)


## Statement

Assume the Axiom of Choice. Let $n\ge2$, and let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$. Assume it is nontrapping in the complete-ray sense: for every complete unit-speed admissible generalized reflected or glancing ray $x:\mathbb R\to\overline\Omega$ and every compact $K\subset\mathbb R^n$, there is $t\ge0$ with $x(t)\notin K$. Let $\Delta_D$ be the Dirichlet Laplacian and let $H_D^s$ be the spectral Hilbert scale of $A=I-\Delta_D$, with negative orders identified by the $L^2(\Omega)$ pivot antidual pairing. Let $\eta\in C_c^\infty(\mathbb R^n)$ be real, and write $K_z=\eta(-\Delta_D-z)^{-1}\eta$ on $L^2(\Omega)$ whenever the resolvent exists.

There are $C>0$ and $\epsilon_0>0$, depending on the obstacle and $\eta$, such that for every real $\lambda$, $0<\epsilon\le\epsilon_0$, and either sign, $K_{(\lambda\pm i\epsilon)^2}$ extends uniquely to a bounded operator $H_D^{-2}\to H_D^{-1}$ of norm at most $C$. For every $z$ with $\operatorname{Re}z<0$, the same extension satisfies $\|K_z\|_{H_D^{-2}\to H_D^{-1}}\le C(1+|\operatorname{Re}z|)^{-1/2}$. The constants are uniform in the indicated parameters.

## Statement references

[math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator](https://alphabetamath.cc/item/def-resolvent-and-spectrum-of-a-closed-unbounded-operator)

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] The exterior Dirichlet realization is self-adjoint, with $-\Delta_D\ge0$ [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization).

[F2] The scale is the completion of the common spectral core; its negative spaces are isometrically the pivot antiduals of the corresponding positive spaces [def-se-dirichlet-scale](item-def-se-dirichlet-scale), [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F3] For a nonnegative smooth compactly supported cutoff $\chi$, the imported cutoff resolvent estimate applies from $H_D^1$ to $H_D^2$, uniformly on the two squared-parameter families and with the stated negative-real-part decay [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent).

[F4] Multiplication by a smooth compactly supported function is bounded on each $H_D^s$ for $-2\le s\le2$; on negative orders it is defined by the pivot pairing with the conjugate multiplier [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality).

[F5] The self-adjoint Borel calculus identifies the adjoint of a bounded spectral multiplier with the multiplier by its complex conjugate [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus). The assumed Axiom of Choice supplies the choice hypotheses of the cited scale and calculus results [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F6] The explicit smooth-cutoff construction gives $\rho\in C_c^\infty(\mathbb R^n)$ with $0\le\rho\le1$, $\rho=1$ for $|x|\le1$, and $\rho=0$ for $|x|\ge2$; for every $R>0$, $\rho(x/R)$ is again smooth and compactly supported [math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step).

[F7] For $B=-\Delta_D$ on the complex Hilbert space $L^2(\Omega)$, the resolvent set $\rho(B)$ consists of those $z\in\mathbb C$ for which $zI-B:D(B)\to L^2(\Omega)$ is bijective with bounded everywhere defined inverse $R_B(z)=(zI-B)^{-1}$; the spectrum is $\sigma(B)=\mathbb C\setminus\rho(B)$ [math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator](https://alphabetamath.cc/item/def-resolvent-and-spectrum-of-a-closed-unbounded-operator). Since $B-zI=-(zI-B)$, the inverse used here is $(B-zI)^{-1}=-R_B(z)$, with the same resolvent set and the same operator norm.

## Proof

**Given:** The geometry, nontrapping assumption, scale, cutoff and parameter ranges in the Statement.

**Goal:** Construct the stated negative-order extensions and prove their bounds.

1.1 Since $\eta$ has compact support, the increasing open balls $B_m(0)$, $m\ge1$, cover $\operatorname{supp}\eta$, and a finite subcover gives $R>0$ with $\operatorname{supp}\eta\subset B_R(0)$; if the support is empty, take $R=1$. Take $\rho$ from [F6] and set $\chi(x)=\rho(x/R)$. Then $\chi\in C_c^\infty(\mathbb R^n)$, $0\le\chi\le1$, and $\chi=1$ on $B_R(0)$, an open neighborhood of $\operatorname{supp}\eta$. Thus $\eta\chi=\eta$. The imported estimate applied to $\chi$ at order $s=1$, together with the multiplier bounds on $H_D^1$ and $H_D^2$, gives $\|K_w\|_{H_D^1\to H_D^2}\le C$ for $w=(\lambda\pm i\epsilon)^2$ in its stated parameter range, and $\|K_w\|_{H_D^1\to H_D^2}\le C(1+|\operatorname{Re}w|)^{-1/2}$ for $\operatorname{Re}w<0$. Indeed, on $L^2$, $K_w=M_\eta(\chi(-\Delta_D-w)^{-1}\chi)M_\eta$; bounded extensions give the same identity on $H_D^1$. The constants absorb the two multiplier norms. [F3, F4, F6, given]

1.2 The spectrum of $-\Delta_D$ lies in $[0,\infty)$. Every parameter in the Statement and its complex conjugate is therefore in the resolvent set: the squared parameter is nonreal unless $\lambda=0$, when it is $-\epsilon^2<0$. The Borel calculus gives $((-\Delta_D-z)^{-1})^*=(-\Delta_D-\overline z)^{-1}$ on $L^2$. Since $\eta$ is real, $M_\eta^*=M_\eta$, so $K_z^*=K_{\overline z}$ on $L^2$. Both parameter families are closed under conjugation and preserve the stated bound. [F1, F5, F7, given]

2.1 For $f\in H_D^{-2}$ define a conjugate-linear functional on $H_D^1$ by $v\mapsto\langle f,K_{\overline z}v\rangle_{-2,2}$. Step 1.1 bounds its norm by $\|f\|_{H_D^{-2}}\|K_{\overline z}\|_{H_D^1\to H_D^2}$. Pivot antiduality therefore gives a unique $Tf\in H_D^{-1}$ with $\langle Tf,v\rangle_{-1,1}=\langle f,K_{\overline z}v\rangle_{-2,2}$ and the same operator bound. For $f\in L^2$ this pairing equals $\langle K_zf,v\rangle_2$ by step 1.2, so $T$ extends the original $K_z$. The spectral core is dense in $H_D^{-2}$ and lies in $L^2$, making this extension unique. Applying the bounds of step 1.1 to $\overline z$ proves both asserted estimates. [F2, step 1.1, step 1.2] ∎

## Source notes

The negative-order statement is a local adjoint consequence of the cited positive-order imported estimate. The imported supplier retains its own source attribution and reading limits; no negative-order estimate is attributed directly to that source here.
