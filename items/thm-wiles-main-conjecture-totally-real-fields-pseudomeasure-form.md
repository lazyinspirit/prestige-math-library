---
id: thm-wiles-main-conjecture-totally-real-fields-pseudomeasure-form
kind: theorem
title: "Wiles main conjecture for totally real fields: pseudomeasure form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-maximal-unramified-outside-p-iwasawa-module-over-cyclotomic-tower
  - def-iwasawa-algebra-of-profinite-abelian-group
  - lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts
  - def-iwasawa-characteristic-ideal-over-zp-power-series
  - def-deligne-ribet-pseudomeasure-on-profinite-abelian-group
  - lem-cyclotomic-even-moment-regularizer-exists
  - lem-deligne-ribet-pseudomeasure-times-augmentation-ideal-is-integral
  - thm-deligne-ribet-cassou-nogues-pseudomeasure-for-totally-real-fields
  - thm-iwasawa-p-ramified-module-finitely-generated-torsion
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "A. Wiles, The Iwasawa Conjecture for Totally Real Fields"
      url: "https://annals.math.princeton.edu/1990/131-3/p02"
      locator: "Theorems 1.3–1.4, Annals of Mathematics 131 (1990), pp. 493–540; full proof not retrieved"
    - title: "J. Coates and R. Sujatha, The Main Conjecture"
      url: "https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download"
      locator: "§3, Theorem 3.4, printed p. 117"
verification:
  precheck: blocked
axiom_use: "The standard theorem's proof has not been reconstructed; AC, Countable Choice and DC are carried only because the current module and pseudomeasure construction interfaces declare them. No claim that these axioms are necessary is made."
---

## Statement

Assume AC, Countable Choice and Dependent Choice for the current tower, class-field, and pseudomeasure construction interfaces. Let $F$ be a totally real number field, let $p$ be an odd prime, put $\mathcal F_\infty=F(\mu_{p^\infty})$, and let $c$ be complex conjugation; put $F_\infty=\mathcal F_\infty^{\langle c\rangle}$ and $G=\operatorname{Gal}(F_\infty/F)$. Let $\Delta_F$ be the finite torsion subgroup of $\operatorname{Gal}(\mathcal F_\infty/F)$, let $\Delta_F^+=\Delta_F/\langle c\rangle$ be its real cyclic quotient of order dividing $p-1$, and write $G=\Delta_F^+\times\Gamma$ with $\Gamma\cong\mathbb Z_p$. Let $\chi_F:\operatorname{Gal}(\mathcal F_\infty/F)\to\mathbb Z_p^\times$ be the cyclotomic character defined by $g(\zeta)=\zeta^{\chi_F(g)}$ for compatible $p$-power roots of unity $\zeta$. Let $M_\infty$ be the maximal abelian pro-$p$ extension of $F_\infty$ unramified outside the primes above $p$, and put $Y_\infty=\operatorname{Gal}(M_\infty/F_\infty)$ with its conjugation action of $G$, and let $\Lambda(G)=\varprojlim_U\mathbb Z_p[G/U]$. Choose a topological generator $\gamma$ of $\Gamma$ and identify $\mathbb Z_p[\![\Gamma]\!]$ with $R=\mathbb Z_p[\![T]\!]$ by $\gamma\mapsto1+T$. Write $I(G)=\ker(\varepsilon:\Lambda(G)\to\mathbb Z_p)$ for the augmentation ideal, where $\varepsilon([g])=1$. For a finitely generated torsion $\Lambda(G)$-module $M$, let $\widehat{\Delta_F^+}=\operatorname{Hom}(\Delta_F^+,\mathbb Z_p^\times)$ and $e_\eta=|\Delta_F^+|^{-1}\sum_{d\in\Delta_F^+}\eta(d)^{-1}[d]$; define $\operatorname{char}_G(M)=\sum_{\eta\in\widehat{\Delta_F^+}}e_\eta\operatorname{char}_R(e_\eta M)$, where $\operatorname{char}_R(N)=\prod_{\operatorname{ht}(\mathfrak p)=1}\mathfrak p^{\ell_{R_{\mathfrak p}}(N_{\mathfrak p})}$ for a finitely generated torsion $R$-module $N$, with only nonzero exponents included. A Deligne–Ribet pseudomeasure on $G$ means an element $\mu\in Q(\Lambda(G))$, where $Q$ is localization at the non-zero-divisors of $\Lambda(G)$, such that $([g]-[1])\mu\in\Lambda(G)$ for every $g\in G$. For a continuous character $\rho:G\to\mathbb Z_p^\times$ and an element $a\in G$ with $[a]-[1]$ regular and $\rho(a)\ne1$, its moment is $\int_G\rho(g)\,d\mu(g)=\frac{\int_G\rho(g)\,d((1-[a])\mu)(g)}{1-\rho(a)}$. Let $\zeta_F(s)$ be the meromorphic continuation of the Dedekind zeta Euler product $\prod_{\mathfrak q}(1-(N\mathfrak q)^{-s})^{-1}$ from $\operatorname{Re}(s)>1$, put $\zeta_F^{(p)}(s)=\zeta_F(s)\prod_{v\mid p}(1-(Nv)^{-s})$ with $Nv=|\mathcal O_F/v|$. For each positive even integer $k$, define $\rho_k:G\to\mathbb Z_p^\times$ by $\rho_k(\bar g)=\chi_F(g)^k$, where $\bar g$ is the image of $g\in\mathcal G$ in $G$; it is well-defined because the quotient kernel is $\langle c\rangle$ and $\chi_F(c)=-1$. Let $\mu_{F,p}$ be the unique such pseudomeasure whose $\rho_k$ moment, regularized using $a=\gamma$, is $\zeta_F^{(p)}(1-k)$. Then $Y_\infty$ is a finitely generated torsion $\Lambda(G)$-module and
$$\operatorname{char}_G(Y_\infty)=\mu_{F,p}I(G).$$
The product on the right is an ideal of $\Lambda(G)$. This statement makes no assumption that a $\mu$-invariant vanishes.

## Statement references

[A. Wiles, *The Iwasawa Conjecture for Totally Real Fields*, Theorems 1.3–1.4](https://annals.math.princeton.edu/1990/131-3/p02)

[J. Coates and R. Sujatha, *The Main Conjecture*, Theorem 3.4, p. 117](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice, a totally real field $F$, an odd prime $p$, the cyclotomic tower, and the modules in the Statement.

[F1] $Y_\infty$ is the p-ramified Galois module over the real cyclotomic tower with its continuous $G$-action. [[def-maximal-unramified-outside-p-iwasawa-module-over-cyclotomic-tower]]

[F2] $Y_\infty$ is finitely generated and torsion over $\Lambda(G)$, so its characteristic ideal is defined componentwise. The supplier now contains a local argument; its availability does not establish independent acceptance. [[thm-iwasawa-p-ramified-module-finitely-generated-torsion]]

[F3] For $R=\mathbb Z_p[\![T]\!]$ and a finitely generated torsion module $N$, the characteristic ideal is the finite product of height-one primes with exponents the local composition lengths. [[def-iwasawa-characteristic-ideal-over-zp-power-series]]

[F4] The Deligne–Ribet–Cassou-Noguès pseudomeasure has the even cyclotomic interpolation moments specified in the Statement. The supplier now contains a local construction and transport argument from the ideal-space measures; its availability does not establish independent acceptance. [[thm-deligne-ribet-cassou-nogues-pseudomeasure-for-totally-real-fields]]

[F5] The real cyclotomic group is the finite prime-to-$p$ factor times its cyclotomic $\mathbb Z_p$ subgroup. [[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]]

[F6] The completed group algebra is $\Lambda(G)=\varprojlim_U\mathbb Z_p[G/U]$. [[def-iwasawa-algebra-of-profinite-abelian-group]]

[F7] A Deligne–Ribet pseudomeasure lies in the total quotient ring and its product with every group difference lies in the completed group algebra; its character moments are defined by regularization with an allowed group difference. [[def-deligne-ribet-pseudomeasure-on-profinite-abelian-group]]

[F8] The product of the Deligne–Ribet pseudomeasure with the augmentation ideal is an integral ideal of the completed group algebra for this finite-times-cyclotomic group. [[lem-deligne-ribet-pseudomeasure-times-augmentation-ideal-is-integral]]

[F9] The finite cyclotomic factor embeds into $\mu_{p-1}(\mathbb Z_p)$, so $\Delta_F^+$ is cyclic and all of its characters are $\mathbb Z_p$-valued. [[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]]

[F10] The chosen topological generator $\gamma$ is an allowed regularizer for each $\rho_k$ moment. [[lem-cyclotomic-even-moment-regularizer-exists]]

[A1] AC, Countable Choice and DC enter only through the current tower, measure, and class-field construction suppliers; their exact proof uses remain unaudited. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof status

No local proof of Wiles's main-conjecture equality is supplied. The inherited source record reports that the Coates–Sujatha chapter states the result and sketches a proof only for $F=\mathbb Q$, without the general totally-real proof. The inherited five-retry claim is supported by only five serialized attempt rows in total, several without exact URLs or timestamps; no missing attempts are reconstructed. This targeted repair opened the Annals article record, which supplies bibliographic metadata but no article-body argument; the full Wiles proof has not been read here. The missing local argument is the general totally-real Hilbert modular form and Eisenstein congruence construction and its characteristic-ideal comparison. The Deligne–Ribet transport in [F4] and p-ramified torsion in [F2] now have local arguments in their named suppliers, so their former absence is no longer a current proof obligation. Those arguments and their prerequisites are not certified by this correction. The main-conjecture equality remains escalated, and the character-form reduction depending on it remains blocked; no $\mu=0$ hypothesis has been inserted.
