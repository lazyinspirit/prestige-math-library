---
id: lem-hh-one-parameter-formal-series-local-ring
kind: lemma
title: "The one-parameter formal-series ring is complete, separated, and has residue field $k$"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-field, def-field-of-fractions, def-formal-power-series-and-coefficient-extraction, def-free-module-on-a-set-and-standard-basis, def-zero-divisor-and-integral-domain, thm-field-of-fractions-is-a-field-and-the-domain-embeds, thm-formal-power-series-ring-and-polynomial-embedding]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series, author-hosted full-text notes"
      url: "https://benjaminsambale.github.io/pdfs/fopose.pdf"
      locator: "§2, Definition 2.1 and Lemma 2.2, printed pp. 2–3 (PDF pp. 3–4): series as coefficient sequences, Cauchy convolution, and the leading-coefficient domain argument; the local proof derives the residue and h-adic claims explicitly."
    - title: "Herbert S. Wilf, generatingfunctionology, author-hosted second-edition PDF"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
      locator: "§2.1, listed at printed p. 30 in the source table of contents; the relevant full-text pages were not retrievable in this run."
axiom_use: "No Choice is used: each limiting coefficient is the unique eventual value of a Cauchy sequence of coefficients."
---

## Statement

Let $k$ be a field and $R:=k\llbracket h\rrbracket$, with formal series understood as coefficient functions and multiplication given by finite Cauchy convolution. The constant-coefficient map $c_0:R\to k$ is a surjective ring homomorphism with kernel $hR$, so it induces $R/hR\cong k$. The ring $R$ is an integral domain. For the $h$-adic topology, whose neighborhoods of zero are $h^nR$ for $n\ge0$, $R$ is complete and separated; every finite free module $R^m$ is complete and separated coefficientwise. Finally, $K:=\operatorname{Frac}(R)$ is a field, and the canonical map $R\to K$ is injective.

## Facts & Assumptions

**Given:** A field $k$ and the formal-series ring $R=k\llbracket h\rrbracket$.

[F1] A formal series is a coefficient function, and the coefficient of $h^n$ in a product is the finite convolution $\sum_{i=0}^n a_i b_{n-i}$ ([[def-formal-power-series-and-coefficient-extraction]]).

[F2] Coefficientwise addition and Cauchy multiplication make $R$ a commutative ring with identity ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

[F3] A field is a commutative ring with $0\ne1$ in which every nonzero element is invertible ([[def-field]]).

[F4] An integral domain is a commutative ring with $1\ne0$ and no zero divisors ([[def-zero-divisor-and-integral-domain]]).

[F5] For an integral domain $D$, its field of fractions is the localization $\operatorname{Frac}(D)$ at the nonzero elements ([[def-field-of-fractions]]); that localization is a field and the map $D\to\operatorname{Frac}(D)$ is injective ([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

[F6] A free module on a finite set has the corresponding standard basis and unique coordinates ([[def-free-module-on-a-set-and-standard-basis]]).

## Proof

**Proof technique:** coefficientwise construction.

1.1 Define $c_0(f)$ to be the coefficient of $h^0$. By [F1], $c_0(fg)=c_0(f)c_0(g)$, while coefficientwise addition preserves sums; the constant-series map $k\to R$ is a right inverse, so $c_0$ is a surjective ring homomorphism. If $c_0(f)=0$, define $g_n=f_{n+1}$; then $f=hg$, so $\ker c_0\subseteq hR$. Conversely every multiple of $h$ has zero constant coefficient by the product formula. Hence $\ker c_0=hR$, and the induced map $R/hR\to k$ is a bijective ring homomorphism. [F1, F2, construct]

1.2 If $f,g\in R$ are nonzero, let $r$ and $s$ be their least indices with nonzero coefficients. In the convolution for the coefficient of $h^{r+s}$ in $fg$, every summand except the pair $(r,s)$ vanishes: a nonzero summand would require $i\ge r$, $j\ge s$, and $i+j=r+s$. The remaining coefficient is $f_rg_s\ne0$ by [F3]. Also $1_R\ne0_R$ because their constant coefficients are $1_k$ and $0_k$. Thus [F2] and [F4] show that $R$ is an integral domain. [F1, F2, F3, F4, algebra]

1.3 A series lies in $h^nR$ exactly when its coefficients of degrees $0,\ldots,n-1$ vanish: one direction follows from multiplication by $h^n$, and the converse follows by shifting coefficients down by $n$. Therefore an $h$-adically Cauchy sequence $(f_j)$ has, for each $r\ge0$, an eventually constant coefficient of $h^r$; define $f_r$ to be that unique eventual value and let $f=\sum_{r\ge0}f_rh^r$. For any $n$, the Cauchy condition makes the first $n$ coefficients of $f_j$ agree with those of $f$ for all sufficiently large $j$, so $f_j-f\in h^nR$ eventually. This proves completeness. If $f\in\bigcap_{n\ge0}h^nR$, every coefficient of $f$ vanishes, so $f=0$; this proves separatedness. Applying the same construction to each of the finitely many standard coordinates of [F6] proves the assertion for every finite free $R$-module. [F1, F6, construct]

2.1 By step 1.2, $R$ is an integral domain, so [F5] applies: $K=\operatorname{Frac}(R)$ is a field and the canonical map $R\to K$ is injective. [step 1.2, F5] ∎
