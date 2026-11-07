---
id: lem-symmetric-powers-preserve-frobenius-weights-for-rank-two-lisse-sheaves
kind: lemma
title: "Symmetric Powers Preserve Frobenius Weights for Rank-Two Lisse Sheaves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-lisse-l-adic-sheaf-on-a-scheme
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, La conjecture de Weil: II"
      url: "https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf"
      locator: "§1.2: pointwise purity and weights of lisse sheaves."
    - title: "Kiran S. Kedlaya, Weil Cohomology in Practice"
      url: "https://kskedlaya.org/weil-cohom/chapter-16.html"
      locator: "§16.1: Frobenius eigenvalues and the weight convention for lisse sheaves."
---

## Statement

Let $q$ be a prime power, let $\ell$ be a prime not dividing $q$, let $\jmath:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$ be a field embedding, and let $X$ be a finite-type scheme over $\mathbb F_q$. For $z\in\overline{\mathbb Q}_\ell$, write $|z|_{\jmath}$ for the ordinary complex absolute value of its image under $\jmath$. Let $\mathcal L$ be a rank-two lisse $\mathbb Q_\ell$-sheaf on $X$. For an integer $r\ge0$, form $\operatorname{Sym}^r\mathcal L$ by applying the symmetric-power operation to its compatible finite locally constant free systems. Suppose that at every closed point $x$ of degree $d$, every eigenvalue $\alpha$ of geometric Frobenius on $\mathcal L_{\bar x}$ satisfies $|\alpha|_{\jmath}=q^{dw/2}$ for a fixed real number $w$. Then $\operatorname{Sym}^r\mathcal L$ is lisse of rank $r+1$, and every eigenvalue $\beta$ of geometric Frobenius on $\operatorname{Sym}^r\mathcal L_{\bar x}$ satisfies $|\beta|_{\jmath}=q^{drw/2}$.

## Statement references

[[def-lisse-l-adic-sheaf-on-a-scheme]]

[Deligne, *La conjecture de Weil: II*, §1.2](https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf)

[Kedlaya, *Weil Cohomology in Practice*, §16.1](https://kskedlaya.org/weil-cohom/chapter-16.html)

## Facts & Assumptions

**Given:** $q$, $\ell$, $X$, the embedding $\jmath$, a rank-two lisse $\mathbb Q_\ell$-sheaf $\mathcal L$, an integer $r\ge0$, and the stated geometric-Frobenius eigenvalue moduli at every closed point.

[F1] [[def-lisse-l-adic-sheaf-on-a-scheme]]: a rank-two lisse adic sheaf is represented by compatible finite locally constant free systems of rank two, with compatible quotient reductions.

## Proof

1.1 On an étale cover trivializing a finite-level system of $\mathcal L$, choose a basis $e_1,e_2$. Its degree-$r$ symmetric power is free on $e_1^j e_2^{r-j}$ for $0\le j\le r$. A change of trivialization by an invertible $2\times2$ matrix induces an invertible change on these monomials, and these induced changes satisfy the cocycle identities because symmetric power is functorial. The construction commutes with quotient reduction between finite levels. Thus the symmetric-power systems glue as compatible finite locally constant free systems of rank $r+1$, so $\operatorname{Sym}^r\mathcal L$ is lisse by [F1]. [given, F1, construct, algebra]

2.1 At a closed point $x$ of degree $d$, triangularize the geometric-Frobenius matrix on $\mathcal L_{\bar x}$ over $\overline{\mathbb Q}_\ell$, with diagonal entries $\alpha,\beta$. In the induced monomial basis, the matrix on $\operatorname{Sym}^r\mathcal L_{\bar x}$ is triangular with diagonal entries $\alpha^j\beta^{r-j}$ for $0\le j\le r$. Each has induced absolute value $(q^{dw/2})^j(q^{dw/2})^{r-j}=q^{drw/2}$, which gives the asserted eigenvalue condition, including $r=0$. [given, step 1.1, algebra] ∎
