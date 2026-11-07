---
id: thm-wiles-main-conjecture-totally-real-fields-character-form
kind: theorem
title: "Wiles main conjecture for totally real fields: character-eigenspace form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - thm-wiles-main-conjecture-totally-real-fields-pseudomeasure-form
  - thm-kummer-comparison-between-cyclotomic-iwasawa-modules
  - thm-iwasawa-unramified-module-finitely-generated-torsion
  - def-maximal-unramified-cyclotomic-iwasawa-class-group-module
  - def-iwasawa-algebra-of-profinite-abelian-group
  - lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts
  - def-iwasawa-characteristic-ideal-over-zp-power-series
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - thm-completion-preserves-regular-local-rings
  - thm-nonaffine-regular-local-ring-is-ufd
  - def-deligne-ribet-pseudomeasure-on-profinite-abelian-group
  - lem-cyclotomic-even-moment-regularizer-exists
  - def-iwasawa-mu-lambda-invariants-of-power-series
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. Wiles, The Iwasawa Conjecture for Totally Real Fields"
      url: "https://annals.math.princeton.edu/1990/131-3/p02"
      locator: "Theorems 1.3–1.4, Annals of Mathematics 131 (1990), pp. 493–540; full proof not retrieved"
    - title: "J. Coates and R. Sujatha, The Main Conjecture"
      url: "https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download"
      locator: "§3, Theorem 3.5 and equivalence discussion, printed pp. 117–118"
verification:
  precheck: pending
axiom_use: "AC, Countable Choice and DC remain the original public assumptions carried through the declared pseudomeasure and module suppliers; no additional choice assumption is introduced."
proof_strategy: constructive
---

## Statement

Assume AC, Countable Choice and Dependent Choice for the current module and Deligne–Ribet construction interfaces. Let $F$ be a totally real number field, let $p$ be an odd prime, let $c$ be complex conjugation, and put $\mathcal F_\infty=F(\mu_{p^\infty})$, $F_\infty=\mathcal F_\infty^{\langle c\rangle}$, $\mathcal G=\operatorname{Gal}(\mathcal F_\infty/F)$, and $G=\operatorname{Gal}(F_\infty/F)$. Let $\chi_F:\mathcal G\to\mathbb Z_p^\times$ be the cyclotomic character determined by $g(\zeta)=\zeta^{\chi_F(g)}$ for compatible $p$-power roots of unity $\zeta$. Let $\Delta_F$ be the finite torsion subgroup of $\mathcal G$, whose order $\delta$ divides $p-1$, and put $\omega_F=\chi_F|_{\Delta_F}$. Set $\Delta_F^+=\Delta_F/\langle c\rangle$, a cyclic group of order $\delta/2$, so $G\cong\Delta_F^+\times\Gamma$. Let $\Gamma\cong\mathbb Z_p$ be the cyclotomic pro-$p$ subgroup and choose a topological generator $\gamma$ of $\Gamma$; put $u=\chi_F(\gamma)$ and identify $\mathbb Z_p[\![\Gamma]\!]$ with $R=\mathbb Z_p[\![T]\!]$ by $\gamma\mapsto1+T$. Let $X_\infty$ be the maximal unramified abelian pro-$p$ module over $\mathcal F_\infty$, and define $X_\infty^{(-i)}=e_{\omega_F^{-i}}X_\infty$, where $e_\psi=\delta^{-1}\sum_{d\in\Delta_F}\psi(d)^{-1}d$. Let $Q(\mathbb Z_p[\![G]\!])$ denote the localization of $\mathbb Z_p[\![G]\!]$ at its non-zero-divisors. A pseudomeasure on $G$ is an element $\mu$ of this ring with $([g]-[1])\mu\in\mathbb Z_p[\![G]\!]$ for every $g\in G$. Put $\zeta_F(s)=\prod_{\mathfrak q}(1-(N\mathfrak q)^{-s})^{-1}$ for $\operatorname{Re}(s)>1$ and use its meromorphic continuation; set $\zeta_F^{(p)}(s)=\zeta_F(s)\prod_{v\mid p}(1-(Nv)^{-s})$ with $Nv=|\mathcal O_F/v|$. For each positive even integer $k$, define $\rho_k:G\to\mathbb Z_p^\times$ by $\rho_k(\bar g)=\chi_F(g)^k$, where $\bar g$ is the image in $G$ of $g\in\mathcal G$; it is well-defined because the quotient kernel is $\langle c\rangle$ and $\chi_F(c)=-1$. Let $\mu_{F,p}$ be the unique Deligne–Ribet pseudomeasure on $G$ with $\int_G\rho_k(g)\,d\mu_{F,p}(g)=\zeta_F^{(p)}(1-k)$ for these $k$, using $a=\gamma$ as regularizer. For each even integer $j$, let $\bar\omega_F^j:G\to\mathbb Z_p^\times$ be the character induced by $\omega_F^j$ on $\Delta_F^+$ and trivial on $\Gamma$. Put $\kappa_F=\chi_F|_\Gamma$. For $s\in\mathbb Z_p$, define $\kappa_F^s$ by $\kappa_F^s(\gamma^a)=u^{as}$ for $a\in\mathbb Z_p$, where $u^{as}$ is the continuous extension of integer powers of $u\in1+p\mathbb Z_p$. Define the branch by
$$L_{F,p}(1-s,\omega_F^j)=\int_G\bar\omega_F^j\kappa_F^s\,d\mu_{F,p}.$$
Let $W_{\omega_F^j}(T)\in\mathbb Z_p[\![T]\!]$ be its branch power series, normalized by $L_{F,p}(s,\omega_F^j)=W_{\omega_F^j}(u^s-1)$ when $j\not\equiv0\pmod\delta$, and by $L_{F,p}(s,1)=W_1(u^s-1)/(u^{1-s}-1)$ when $j\equiv0\pmod\delta$. For every odd integer $i$ modulo $\delta$, the component $X_\infty^{(-i)}$ is a finitely generated torsion $R$-module, its characteristic ideal is $\prod_{\operatorname{ht}(\mathfrak p)=1}\mathfrak p^{\ell_{R_{\mathfrak p}}((X_\infty^{(-i)})_{\mathfrak p})}$ with only nonzero exponents included, and
$$\operatorname{char}_{R}(X_\infty^{(-i)})=W_{\omega_F^{i+1}}(T)R.$$
For a nonzero $W(T)=\sum_{n\ge0}a_nT^n$, define $\mu(W)=\min_n v_p(a_n)$ and let $\lambda(W)$ be the least exponent with nonzero coefficient after dividing by $p^{\mu(W)}$. The equality retains the full power series, including any nonzero $\mu$-invariant; it does not assume $\mu=0$.

## Statement references

[A. Wiles, *The Iwasawa Conjecture for Totally Real Fields*, Theorems 1.3–1.4](https://annals.math.princeton.edu/1990/131-3/p02)

[J. Coates and R. Sujatha, *The Main Conjecture*, Theorem 3.5 and equivalence discussion, pp. 117–118](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)


## Facts & Assumptions

**Given:** The choice assumptions, totally real field $F$, odd prime $p$, full and real cyclotomic towers, Galois modules, pseudomeasure, characters, branch power series and conventions in the unchanged Statement.

[F1] The p-ramified module $Y_\infty$ is finitely generated torsion and its full-group characteristic ideal is $\mu_{F,p}I(G)$. [[thm-wiles-main-conjecture-totally-real-fields-pseudomeasure-form]]

[F2] For each odd $i$, if $H_i(T)$ generates the characteristic ideal of $X_\infty^{(-i)}$, then $H_i(u(1+T)^{-1}-1)$ generates the characteristic ideal of the corresponding even real-tower module $Y_\infty^{(i+1)}$. [[thm-kummer-comparison-between-cyclotomic-iwasawa-modules]]

[F3] The full unramified module and its finite-character components are finitely generated and torsion. [[thm-iwasawa-unramified-module-finitely-generated-torsion]]

[F4] The characteristic ideal of a finitely generated torsion one-variable module is the finite product of its height-one primes with the stated lengths. [[def-iwasawa-characteristic-ideal-over-zp-power-series]]

[F5] The full and real Galois groups split into their finite cyclic prime-to-$p$ factors and the common cyclotomic $\mathbb Z_p$ subgroup; all finite-factor characters are $\mathbb Z_p$-valued. [[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]]

[F6] The pseudomeasure is an element of the total quotient ring with every group difference times it integral, and its moments are evaluated by the displayed regularizer convention. [[def-deligne-ribet-pseudomeasure-on-profinite-abelian-group]] [[lem-cyclotomic-even-moment-regularizer-exists]]

[F7] The full power series $W$ has the $\mu$ and $\lambda$ invariants stated in the original conventions. [[def-iwasawa-mu-lambda-invariants-of-power-series]]

[F8] Polynomial localization and completion preserve regular locality, and every regular local ring is a UFD. [[thm-localisation-and-polynomial-extension-of-regular-rings]] [[thm-completion-preserves-regular-local-rings]] [[thm-nonaffine-regular-local-ring-is-ufd]]

[A1] The current module and pseudomeasure interfaces assume AC, Countable Choice and Dependent Choice, exactly as in the Statement. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** Project the pseudomeasure equality to each finite character, then apply the involutive cyclotomic variable change.

1.1 Put $R=\mathbb Z_p\llbracket T\rrbracket$, $\Delta=\Delta_F^+$ and $\tau(T)=u(1+T)^{-1}-1$. Since $u\in1+p\mathbb Z_p$, $\tau(T)$ lies in $(p,T)$ and substitution defines a continuous endomorphism of $R$: for every fixed $(p,T)$-adic quotient sufficiently high powers vanish, so each coefficient is determined by finitely many terms. Direct calculation gives $\tau(\tau(T))=T$, hence $\tau$ is an automorphism. Since $|\Delta|$ divides $p-1$, the idempotents $e_\eta$ exist in $\mathbb Z_p[\Delta]$ and split $\Lambda(G)=R[\Delta]$ as the finite product of its character components. Each $e_\eta$ evaluates to one at its own character and zero at every other character by the finite geometric sum. [F5, A1, given, construct, algebra]

2.1 The augmentation ideal has component $e_\eta I(G)=R e_\eta$ if $\eta\ne1$: choose $d\in\Delta$ with $\eta(d)\ne1$, so $\eta(d)-1$ is a unit because distinct roots of unity of order prime to $p$ remain distinct modulo $p$. For the trivial character, all finite-factor differences vanish and the differences $\gamma^a-1$ generate the ideal $(T)$, since $\gamma-1=T$ and every $\gamma^a-1$ is divisible by $T$ by continuity. Hence [F1] gives $\operatorname{char}_R(Y_\infty^\eta)=(\mu_\eta)$ for $\eta\ne1$ and $\operatorname{char}_R(Y_\infty^1)=(T\mu_1)$, where $\mu_\eta=e_\eta\mu_{F,p}$ and these displayed generators are integral by [F6]. Use the character decomposition of step 1.1. [F1, F5, F6, step 1.1, construct, algebra]

3.1 Fix an odd $i$ and put $j=i+1$ and $\eta=\omega_F^j$ on $\Delta$. By [F3]–[F4], $X_\infty^{(-i)}$ has a nonzero principal characteristic ideal: the coefficientwise valuation makes $\mathbb Z_p$ a DVR and hence a regular local ring. Polynomial localization at $(p,T)$ and its completion give the regular local ring $R$ by [F8]; [F8] therefore makes $R$ a UFD. Every nonzero height-one prime is principal: take a nonzero member, factor it and use primality plus the height bound to identify the prime with a principal prime factor. Thus the finite product in [F4] is principal, as required by [F2]. Choose one generator $H_i(T)$. By [F2], $H_i(\tau(T))$ generates the characteristic ideal of $Y_\infty^\eta$. Applying the automorphism $\tau$ from step 1.1 to the ideal equality in step 2.1 gives $H_i(T)R=\tau(\mu_\eta)R$ for $\eta\ne1$, and $H_i(T)R=\tau(T\mu_1)R$ for $\eta=1$. [F2, F3, F4, F5, F8, step 1.1, step 2.1, construct, algebra]

4.1 Evaluate the definitions at any $s\in\mathbb Z_p$ for which the displayed regularized moments are defined. The character $\bar\omega_F^j\kappa_F^{1-s}$ sends $T=\gamma-1$ to $u^{1-s}-1=\tau(u^s-1)$ and selects the $\eta$ component. Thus the branch definition in the Statement gives $W_\eta(u^s-1)=\mu_\eta(\tau(u^s-1))$ when $\eta\ne1$, and $W_1(u^s-1)=(u^{1-s}-1)\mu_1(u^{1-s}-1)$ when $\eta=1$. These formulas evaluate integral series: $\mu_\eta\in R$ in the nontrivial case, and $T\mu_1\in R$ in the trivial case by step 2.1. The moment convention [F6] supplies the same signs and denominator as in the Statement. [F5, F6, step 2.1, step 3.1, algebra]

5.1 The substitutions of step 4.1 yield $W_\eta=\tau(\mu_\eta)$ for $\eta\ne1$ and $W_1=\tau(T\mu_1)$ as formal power series. To justify equality, evaluate at $s=p^n$ with $n\ge1$: the distinct points $u^{p^n}-1$ tend to zero. A nonzero power series over $\mathbb Z_p$ has a least nonzero coefficient; at sufficiently small nonzero inputs its leading term has strictly smaller valuation than every later term, so it cannot vanish on this sequence. The regularizer denominator does not vanish at these evaluation points, since $u$ is a nontrivial principal unit and $p^n\ne1$. Combining the power-series equalities with step 3.1 gives $\operatorname{char}_R(X_\infty^{(-i)})=W_{\omega_F^{i+1}}(T)R$ for every odd $i$. The generator is nonzero, so the original $\mu,\lambda$ definitions in [F7] apply to the whole power series without any vanishing assumption. [F7, step 3.1, step 4.1, algebra, discharge-construct] ∎
