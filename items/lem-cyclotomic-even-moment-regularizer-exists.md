---
id: lem-cyclotomic-even-moment-regularizer-exists
kind: lemma
title: A cyclotomic generator regularizes even moments on the real tower
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts
- def-iwasawa-algebra-of-profinite-abelian-group
- def-deligne-ribet-pseudomeasure-on-profinite-abelian-group
- lem-finite-coefficient-cyclotomic-completed-group-algebra-coordinate
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: J. Coates and R. Sujatha, The Main Conjecture
    url: https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download
    locator: §2, Theorem 2.2 and character-moment definition, printed p. 115
  - title: R. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/notes/iwasawa-ch03.html
    locator: §3.1, cyclotomic character and the cyclotomic pro-p generator
verification: {}
---

## Statement

Let $F$ be a totally real number field, let $p$ be an odd prime, put $\mathcal F_\infty=F(\mu_{p^\infty})$, let $c$ be complex conjugation, and put $F_\infty=\mathcal F_\infty^{\langle c\rangle}$, $\mathcal G=\operatorname{Gal}(\mathcal F_\infty/F)$, and $G=\operatorname{Gal}(F_\infty/F)$. Let $\Delta_F$ be the finite torsion subgroup of $\mathcal G$, put $\Delta_F^+=\Delta_F/\langle c\rangle$, and let $\Gamma\cong\mathbb Z_p$ be their common cyclotomic pro-$p$ subgroup, so $G\cong\Delta_F^+\times\Gamma$. Let $\chi_F:\mathcal G\to\mathbb Z_p^\times$ be the cyclotomic character, and choose a topological generator $\gamma$ of $\Gamma$. For each positive even integer $k$, the character $\rho_k:G\to\mathbb Z_p^\times$ defined by $\rho_k(\bar g)=\chi_F(g)^k$ is well-defined because $\chi_F(c)=-1$. Let $\Lambda(G)=\varprojlim_U\mathbb Z_p[G/U]$ and let $\mu$ be a Deligne–Ribet pseudomeasure on $G$, meaning an element of the total quotient ring whose product with each $[g]-[1]$ lies in $\Lambda(G)$. Then $[\gamma]-[1]$ is a non-zero-divisor of $\Lambda(G)$ and $\rho_k(\gamma)\ne1$ for every such $k$, so the character moment of $\mu$ on $\rho_k$ is defined by regularizing with $\gamma$.

## Statement references

[J. Coates and R. Sujatha, *The Main Conjecture*, §2, Theorem 2.2, p. 115](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)

[R. Sharifi, *Iwasawa Theory*, Chapter 3, §3.1](https://www.math.ucla.edu/~sharifi/notes/iwasawa-ch03.html)

## Facts & Assumptions

**Given:** The full and real cyclotomic towers for a totally real field $F$, an odd prime $p$, their cyclotomic character, and a topological generator $\gamma$ of $\Gamma$.

[F1] The cyclotomic character identifies $\mathcal G$ with an open subgroup of $\mathbb Z_p^\times$ and $\Gamma$ with an open subgroup of $1+p\mathbb Z_p$; the quotient from $\mathcal G$ to $G$ has kernel $\langle c\rangle$, with $\chi_F(c)=-1$. [[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]]

[F2] The completed group algebra is the inverse limit of finite group rings, and the cyclotomic $\mathbb Z_p$ factor has coordinate $\gamma\mapsto1+T$. The finite-coefficient coordinate, including both quotient directions, is proved locally in [[lem-finite-coefficient-cyclotomic-completed-group-algebra-coordinate]]; only the inverse-limit construction is used from [[def-iwasawa-algebra-of-profinite-abelian-group]].

[F3] A pseudomeasure moment may be regularized by an element $a\in G$ when $[a]-[1]$ is a non-zero-divisor and the character does not take value $1$ at $a$. [[def-deligne-ribet-pseudomeasure-on-profinite-abelian-group]]

## Proof

**Given:** The towers, character, generator, group algebra, and pseudomeasure in the Statement.

1.1 By [F1], the restriction of $\chi_F$ identifies $\Gamma$ with an open subgroup of $1+p\mathbb Z_p$. Therefore $u=\chi_F(\gamma)$ has infinite order: if $u^m=1$ for some positive integer $m$, injectivity would give $\gamma^m=1$, contradicting that $\gamma$ topologically generates a group isomorphic to $\mathbb Z_p$. For even $k$, $\chi_F^k$ is trivial on $c$, so it descends to $\rho_k$ on $G$, and $\rho_k(\gamma)=u^k\ne1$. [F1, given, algebra]

1.2 For each open subgroup $V$ of $\Gamma$, the subgroup $\{1\}\times V$ is open in $G$, and these subgroups are cofinal because $\Delta_F^+$ is finite. The corresponding finite group ring is $\mathbb Z_p[\Delta_F^+]\otimes_{\mathbb Z_p}\mathbb Z_p[\Gamma/V]$. Since $\mathbb Z_p[\Delta_F^+]$ is finite free over $\mathbb Z_p$, taking the inverse limit gives $\Lambda(G)\cong\mathbb Z_p[\Delta_F^+]\otimes_{\mathbb Z_p}\Lambda(\Gamma)\cong\mathbb Z_p[\Delta_F^+][[T]]$ under $T=[\gamma]-[1]$, using [F2]. Multiplication by $T$ is injective on this formal power-series ring: if $T\sum_{n\ge0}a_nT^n=0$, then the coefficient of $T^{n+1}$ is $a_n=0$ for every $n$. Thus $[\gamma]-[1]$ is a non-zero-divisor. [F1, F2, given, algebra]

2.1 The two conditions in [F3] hold for $a=\gamma$ by steps 1.1 and 1.2. Hence the pseudomeasure moment on every $\rho_k$ is defined using the regularizer $\gamma$. [F3, step 1.1, step 1.2] ∎
