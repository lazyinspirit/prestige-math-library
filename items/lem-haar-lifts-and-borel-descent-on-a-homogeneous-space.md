---
id: lem-haar-lifts-and-borel-descent-on-a-homogeneous-space
kind: lemma
title: Haar null classes and Borel descent on a homogeneous space
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
local_addition: true
proof_strategy: direct
deps:
  - lem-borel-cross-sections-for-closed-subgroups
  - thm-weil-quotient-integration-formula-with-rho-function
  - thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-monotone-convergence-for-the-integral
  - lem-right-translation-scales-left-haar-measure
  - def-axiom-of-choice
  - def-rho-function-for-a-closed-subgroup
  - def-quasi-invariant-measure-on-a-homogeneous-space
  - thm-rmk-uniqueness-among-radon-measures
  - def-radon-measure-on-an-lch-space
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - thm-separable-hilbert-space-has-a-countable-orthonormal-basis
  - def-strongly-continuous-unitary-representation
  - thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
---

## Statement

Assume AC. Let $G$ be second-countable LCH, $H$ closed, $q:G\to G/H$, and $s$
a Borel section. Every nonzero $\sigma$-finite quasi-invariant Borel measure
$\mu$ on $G/H$ is equivalent to a rho-derived quotient measure. The coordinates
$(x,h)\mapsto s(x)h$ carry the product quotient/Haar measure class to the Haar
measure class on $G$. In particular $\mu(E)=0$ iff $q^{-1}(E)$ is Haar null. If
a Borel map $F:G/H\times H\to U(K)$ for separable $K$ satisfies
$F(x,hk)=F(x,h)$ for every $k$ and almost every $(x,h)$, then
$F(x,h)=B(x)$ almost everywhere for a Borel $B:G/H\to U(K)$.

## Facts & Assumptions

**Given:** AC, the second-countable LCH group $G$, the closed subgroup $H$, the quotient map $q$, and a Borel section $s$ with its cocycle as in [[lem-borel-cross-sections-for-closed-subgroups]].

[F1] The map $\Theta:G/H\times H\to G$, $\Theta(x,h)=s(x)h$, is a Borel isomorphism with Borel inverse $g\mapsto(q(g),s(q(g))^{-1}g)$, and $q^{-1}(E)=\Theta(E\times H)$ for every $E\subseteq G/H$ ([[lem-borel-cross-sections-for-closed-subgroups]]).

[F2] Fix left Haar measures on $G$ and $H$ and a rho-function $\rho>0$, continuous, with $\rho(xh)=\Delta_H(h)\Delta_G(h)^{-1}\rho(x)$. The Weil formula $\int_Gf(t)\rho(t)\,dt=\int_{G/H}\int_Hf(xh)\,dh\,d\mu_\rho(xH)$ holds for $f\in C_c(G)$; $\mu_\rho$ is a full-support nonzero Radon measure that is strongly quasi-invariant, and $\rho\,dt$ is a Radon measure equivalent to Haar ([[thm-weil-quotient-integration-formula-with-rho-function]], [[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]], [[def-rho-function-for-a-closed-subgroup]], [[def-quasi-invariant-measure-on-a-homogeneous-space]]).

[F3] Every Borel measure finite on compact sets on the second-countable LCH space $G$ is regular, so two such measures agreeing on $C_c(G)$ agree on Borel sets ([[thm-rmk-uniqueness-among-radon-measures]], [[def-radon-measure-on-an-lch-space]], [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

[F4] Completed-product Tonelli/Fubini applies to $\sigma$-finite measures and nonnegative measurable functions; the left Haar measure $dh$ is invariant under left translations on $H$, so the homeomorphism $(h,k)\mapsto(h,hk)$ of $H\times H$ preserves the completed product $dh\otimes dh$ ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-monotone-convergence-for-the-integral]], [[lem-right-translation-scales-left-haar-measure]]).

[F5] A separable $K$ has a finite or countable orthonormal basis, and matrix coefficients of operators in $U(K)$ against it are bounded Borel functions on $U(K)$; integration of a bounded Borel $U(K)$-valued function against a probability density produces the matrix of a bounded operator, and the unitary conditions are countably many Borel equations ([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[def-strongly-continuous-unitary-representation]]).

[F6] AC implies DC and Countable Choice, which are the choice principles used by the Tonelli, monotone-convergence and RMK interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the data of the statement, and a rho-function $\rho$ with its measure $\mu_\rho$.

1.1 Extension of the Weil formula to Borel sets: for every Borel $E\subseteq G$, $$\int_{G/H}\int_H\mathbf 1_E(xh)\,dh\,d\mu_\rho(x)=\int_E\rho(t)\,dt.$$ Both sides are $\sigma$-finite Borel measures on the $\sigma$-compact space $G$ that are finite on compacta (the right side because $\rho$ is continuous; the left side by sandwiching indicators of a compact set between $C_c$ functions). They agree on $C_c(G)$ by [F2], so by [F3] they agree on every Borel set. [F2, F3]

1.2 Descent, first reduction: let $F$ be as in the statement. The set $N=\{(x,h,k):F(x,hk)\ne F(x,h)\}$ is a Borel subset of the triple product, and its measure is zero: by Tonelli its measure is the integral over $k$ of the measures of the sections $N_k=\{(x,h):F(x,hk)\ne F(x,h)\}$, each of which is null by hypothesis. Hence Fubini gives that for a.e. $x$ the section $N_x$ is a null subset of $H\times H$. [F4]

2.1 The coordinate map pushes the product measure to $\rho\,dt$: by [step 1.1] and left invariance of $dh$ (which lets $s(x)$ be replaced by any representative of the coset in $\int_H\mathbf 1_E(\,\cdot\,h)\,dh$), for every Borel $E\subseteq G$ one has $(\mu_\rho\otimes dh)(\Theta^{-1}(E))=\int_{G/H}\int_H\mathbf 1_E(s(x)h)\,dh\,d\mu_\rho(x)=\int_E\rho(t)\,dt$. Since $0<\rho<\infty$ pointwise, the classes of $\rho\,dt$ and $dt$ coincide; hence the product class maps to the Haar class and, by [F1], $q^{-1}(E)$ is Haar null iff $(\mu_\rho\otimes dh)(E\times H)=0$ iff $\mu_\rho(E)=0$. [step 1.1, F1, F2]

2.2 For such an $x$, the homeomorphism $(h,k)\mapsto(h,hk)$ preserves the completed product $dh\otimes dh$ by [F4], so its image of $N_x$, namely $\{(h_1,h_2):F(x,h_2)\ne F(x,h_1)\}$, is null. Hence $F_x$ is $dh$-a.e. constant for a.e. $x$. [F4, step 1.2]

3.1 Equivalence of two rho measures and of any quasi-invariant measure with $\mu_\rho$: if $\mu$ is a nonzero $\sigma$-finite quasi-invariant Borel measure on $G/H$, replace it by an equivalent probability (still written $\mu$), choose a probability $\nu=w(t)\,dt$ with $w>0$ Haar-a.e., and set $\overline\mu(E)=\int_G\mu(g^{-1}E)\,d\nu(g)$ for Borel $E$. The integrand is Borel in $g$ for fixed $E$, and $\overline\mu$ is a probability on $G/H$. Each translate $g_*\mu(E)=\mu(g^{-1}E)$ is equivalent to $\mu$, so $\overline\mu\sim\mu$; and by Tonelli $\overline\mu(E)=\int_{G/H}\nu\{g:gx\in E\}\,d\mu(x)$. For fixed $x$ with representative $t=s(x)$, the substitution $g\mapsto gt$ gives $\nu\{g:gx\in E\}=\Delta_G(t)^{-1}\int_{q^{-1}(E)}w(ut^{-1})\,du$ by the right-translation scaling of the Haar integral; since $w>0$ Haar-a.e. and $q^{-1}(E)$ is right-$H$-invariant, this is positive exactly when $\mu_\rho(E)>0$ by [step 2.1]. Hence $\overline\mu(E)=0$ iff $\mu_\rho(E)=0$, so $\mu\sim\mu_\rho$. This proves the first assertion and, with [step 2.1], the null-class assertion $\mu(E)=0\Leftrightarrow q^{-1}(E)$ Haar null. [F2, F4, step 2.1]

3.2 Borel selection of the constant: fix a strictly positive integrable Borel probability density $q$ on $H$: take a countable compact cover $(K_n)$, each of finite Haar measure, and normalize $\sum_n 2^{-n}(1+|K_n|)^{-1}\mathbf 1_{K_n}$, which is positive everywhere and has finite nonzero integral and a finite or countable orthonormal basis $(e_i)$ of $K$ by [F5]; set $b_{ij}(x)=\int_H\langle F(x,h)e_i,e_j\rangle\,q(h)\,dh$. Each $b_{ij}$ is Borel in $x$ by Tonelli, and for a.e. $x$ the matrix $(b_{ij}(x))$ is the matrix of the a.e. constant unitary value of $F_x$, hence unitary. The set of $x$ where the countably many Borel unitary equations $\sum_j b_{ij}\overline{b_{i'j}}=\delta_{ii'}$ and column completeness fail is Borel and null; put $B(x)=I$ there and $B(x)$ equal to the operator with matrix $(b_{ij}(x))$ otherwise. Then $B:G/H\to U(K)$ is Borel and $F(x,h)=B(x)$ for a.e. $(x,h)$. [F5, step 2.2]

4.1 Collecting the steps: every nonzero $\sigma$-finite quasi-invariant $\mu$ is equivalent to $\mu_\rho$ [step 3.1]; the coordinate map carries the product class to the Haar class, so a Borel $E\subseteq G/H$ is $\mu$-null exactly when its full preimage $q^{-1}(E)$ is Haar null [step 2.1, step 3.1]; and every $H$-invariant Borel $U(K)$-valued function descends to a Borel $B$ almost everywhere [step 3.2]. These are the three assertions of the statement. [step 2.1, step 3.1, step 3.2, F6] ∎
