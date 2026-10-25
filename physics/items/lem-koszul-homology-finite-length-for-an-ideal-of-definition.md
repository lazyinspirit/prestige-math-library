---
id: lem-koszul-homology-finite-length-for-an-ideal-of-definition
kind: lemma
title: "koszul homology finite length for an ideal of definition"
status: published
origin: pipeline
deps: [def-koszul-euler-characteristic-and-degree-indexed-multiplicity, cor-sequence-ideal-annihilates-koszul-homology, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, thm-support-and-annihilator-of-a-finite-module, thm-nakayama-lemma, cor-length-is-additive-in-short-exact-sequences, def-axiom-of-choice, thm-radical-as-intersection-of-primes, cor-koszul-homology-localises, thm-localisation-of-modules-is-exact, thm-noetherian-ring-ideal-characterisations, def-koszul-complex-of-a-sequence-with-coefficients]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Stacks Project, 43.15.4\u20136; local proof with stated module-relative and coefficient conventions"
      url: "https://stacks.math.columbia.edu/tag/0AZU"
    - title: "Hochster, Math 615 Winter 2012, pp.104\u2013108: Euler characteristics and the multiplicity theorem"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2024/10/615W12.pdf"
pipeline_run: phase-2-catchup-24
---

## Statement

Assume AC. Let $(R,\mathfrak m)$ be a commutative Noetherian local ring. A finite $R$-module $N$ has finite length if and only if $\operatorname{Supp}(N)\subseteq\{\mathfrak m\}$. For a finite module $M$ and any ideal $I$,
$$\operatorname{Supp}(M/IM)=\operatorname{Supp}(M)\cap V(I).$$
Consequently, if $I=(f_1,\ldots,f_r)$ and $\ell_R(M/IM)<\infty$, every $H_i(K(\mathbf f;M))$ has finite length and its Euler characteristic is defined. The empty sequence, $I=R$, and $M=0$ are included.

## Facts & Assumptions

**Given:** AC, a commutative Noetherian local ring $(R,\mathfrak m)$, and finite $R$-modules $N,M$. For the support identity $I$ is any ideal; for the Koszul assertion $I=(f_1,\ldots,f_r)$ and $\ell_R(M/IM)<\infty$.

[F1] Length and the Koszul Euler convention are fixed in [[def-koszul-euler-characteristic-and-degree-indexed-multiplicity]].

[F2] The sequence ideal kills Koszul homology: [[cor-sequence-ideal-annihilates-koszul-homology]].

[F3] Finite modules over a Noetherian ring have finite submodules: [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]].

[F4] For finite $N$, $\operatorname{Supp}(N)=V(\operatorname{Ann}(N))$: [[thm-support-and-annihilator-of-a-finite-module]].

[F5] Under AC, $JL=L$ for finite $L$ and $J\subseteq J(S)$ implies $L=0$: [[thm-nakayama-lemma]].

[F6] Length is additive and finite length passes in both directions through short exact sequences: [[cor-length-is-additive-in-short-exact-sequences]].

[A1] We assume [[def-axiom-of-choice]].

[F7] Under AC, a radical is the intersection of the primes containing the ideal: [[thm-radical-as-intersection-of-primes]].

[F8] Koszul homology commutes with localization: [[cor-koszul-homology-localises]].

[F9] Module localization preserves exact sequences: [[thm-localisation-of-modules-is-exact]].

[F10] Every ideal in a Noetherian ring is finite, using the choice-free clause of [[thm-noetherian-ring-ideal-characterisations]].

[F11] The Koszul terms are finite direct sums of the coefficient module: [[def-koszul-complex-of-a-sequence-with-coefficients]].

## Proof

**Proof technique:** direct.

1.1 For $N$ of finite length $c$, each simple factor is $k=R/\mathfrak m$: a nonzero vector generates the factor, whose annihilator is maximal and therefore is $\mathfrak m$. Thus a composition series shows $\mathfrak m^cN=0$. If $c=0$, then $N=0$. If $\mathfrak p\ne\mathfrak m$, choose $a\in\mathfrak m\setminus\mathfrak p$; $a^c$ is invertible in $R_{\mathfrak p}$ and kills $N_{\mathfrak p}$, so $N_{\mathfrak p}=0$. This proves the forward direction of the finite-length criterion. [F1, given]

1.2 Conversely suppose $N\ne0$ is finite with support contained in $\{\mathfrak m\}$. Its annihilator is proper and hence is contained in the unique maximal ideal $\mathfrak m$ (maximal-ideal existence is available under AC). The support formula then says the set of primes containing $\operatorname{Ann}(N)$ is exactly $\{\mathfrak m\}$. Radical intersection gives $\sqrt{\operatorname{Ann}(N)}=\mathfrak m$. This is the separating-prime use of AC. [F4, F7, A1, given]

1.3 Exact localization identifies $(M/IM)_{\mathfrak p}$ with $M_{\mathfrak p}/I_{\mathfrak p}M_{\mathfrak p}$. If $I\not\subseteq\mathfrak p$, one of its elements becomes a unit, so this quotient is zero. If $I\subseteq\mathfrak p$, then $R_{\mathfrak p}$ is local with maximal ideal $\mathfrak pR_{\mathfrak p}$: a fraction whose numerator is outside $\mathfrak p$ is invertible, while the fractions with numerator in $\mathfrak p$ form a proper ideal with field quotient. Thus $I_{\mathfrak p}$ lies in the Jacobson radical. The module $M_{\mathfrak p}$ is finite, generated by localized generators. Nakayama says the quotient is zero only if $M_{\mathfrak p}=0$; the reverse implication is immediate. This proves both inclusions of the support identity. This application of the published Nakayama interface uses AC. [F5, F9, A1, given]

2.1 Choose generators $a_1,\ldots,a_v$ of $\mathfrak m$, and for each choose $b_j\geq1$ with $a_j^{b_j}N=0$. Put $c=1+\sum_j(b_j-1)$. A monomial of degree $c$ must have an exponent at least $b_j$, since otherwise its degree is at most $c-1$. These monomials generate $\mathfrak m^c$, giving $\mathfrak m^cN=0$. If $v=0$, then $\mathfrak m=0$ and $c=1$ works as well. [F10, step 1.2]

2.2 Koszul terms are finite direct sums of $M$. Their kernels, images and homology are finite by Noetherianity. If $M_{\mathfrak p}=0$, the localized complex is zero, and hence its homology is zero. Also $I$ kills every homology module, so at a prime outside $V(I)$ an invertible annihilator forces the localized homology to vanish. We have proved $\operatorname{Supp}(H_i)\subseteq\operatorname{Supp}(M)\cap V(I)=\operatorname{Supp}(M/IM)$. [F2, F3, F8, F11, step 1.3]

3.1 Each $\mathfrak m^jN/\mathfrak m^{j+1}N$ for $0\leq j<c$ is finite and killed by $\mathfrak m$. It is therefore a finite-dimensional $k$-space: delete dependent elements from a finite spanning list to get a basis; its basis flag has one simple $k$ factor for each vector. It has finite $R$-length. Repeated additivity along the finite filtration proves that $N$ has finite length. For $N=0$ the support is empty and the length is zero. Together with the forward direction this proves the iff assertion. [F3, F6, step 1.1, step 2.1]

4.1 The hypothesis and the forward criterion put this last support inside $\{\mathfrak m\}$. The reverse criterion applies to each finite $H_i$, proving its finite length; boundedness then defines the Euler sum. If $I=R$, the annihilation assertion makes every $H_i=0$. If $r=0$, the only homology is $M$, whose finite length is exactly the hypothesis. If $M=0$, every term vanishes. [F1, F2, step 1.1, step 3.1, step 2.2] ∎

## Remarks

Source locators: Stacks 43.15.5, first proof paragraph, and Remark 43.15.6, especially conditions (3) and (5); Hochster printed pp.104–106. The two support assertions are proved locally in both directions, including the nonzero/zero split; no support-dimension theorem is imported.
