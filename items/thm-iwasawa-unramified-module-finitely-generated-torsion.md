---
id: thm-iwasawa-unramified-module-finitely-generated-torsion
kind: theorem
title: "The unramified Iwasawa module is finitely generated and torsion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-maximal-unramified-cyclotomic-iwasawa-class-group-module
  - def-iwasawa-algebra-of-profinite-abelian-group
  - def-countable-choice
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts
  - lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels
  - thm-totally-imaginary-cyclotomic-class-group-module-torsion
axiom_use: "AC and Countable Choice remain the public assumptions. Dependent Choice required by the finite class-field suppliers follows from AC as shown in the proof."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Coates and R. Sujatha, The Main Conjecture"
      url: "https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download"
      locator: "§3, printed p. 116, Theorem 3.2"
    - title: "R. Sharifi, Iwasawa Theory lecture notes"
      url: "https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html"
      locator: "§3.2, Proposition 3.2.11, printed pp. 79–81; the single Z_p-extension class-group module"
verification:
  precheck: pending
proof_strategy: constructive
---

## Statement

Assume AC and Countable Choice. Let $F$ be a totally real number field, let $p$ be an odd prime, and let $X_\infty$ be the unramified Iwasawa module over the full cyclotomic tower $\mathcal F_\infty/F$, with $\mathcal G=\operatorname{Gal}(\mathcal F_\infty/F)$. Then $X_\infty$ is a finitely generated torsion module over $\Lambda(\mathcal G)=\mathbb Z_p[\![\mathcal G]\!]$, and each finite-character eigenspace $X_\infty^{(j)}$ is a finitely generated torsion module over the cyclotomic $\mathbb Z_p$-algebra $\mathbb Z_p[\![\Gamma]\!]$.

## Statement references

[J. Coates and R. Sujatha, *The Main Conjecture*, §3, p. 116, Theorem 3.2](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)

[R. Sharifi, *Iwasawa Theory*, §3.2, Proposition 3.2.11, pp. 79–81](https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html)


## Facts & Assumptions

**Given:** AC, Countable Choice, $F$, $p$, the full cyclotomic tower, its Galois group and $X_\infty$ in the unchanged Statement.

[F1] The full cyclotomic module is the compact Galois group of the maximal abelian pro-$p$ extension of $\mathcal F_\infty$ unramified at finite places, with the continuous $\mathcal G$-action. [[def-maximal-unramified-cyclotomic-iwasawa-class-group-module]] [[def-iwasawa-algebra-of-profinite-abelian-group]]

[F2] The full group has a finite cyclic factor $\Delta$ of order dividing $p-1$ and a cyclotomic factor $\Gamma\cong\mathbb Z_p$, and $\Delta$ is identified by restriction with $\operatorname{Gal}(F(\mu_p)/F)$. [[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]]

[F3] The cyclotomic class-group inverse limit for any totally imaginary number field is finitely generated torsion over its one-variable Iwasawa algebra. [[thm-totally-imaginary-cyclotomic-class-group-module-torsion]]

[F4] For the totally imaginary cyclotomic tower, the class-group inverse limit is the Galois group of the maximal finite-place-unramified abelian pro-$p$ extension, compatibly with finite-layer Artin maps and tower conjugation. [[lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels]]

[A1] AC and Countable Choice are the original public assumptions. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Proof technique:** Identify the full-tower class-field limit, then pass to the finite prime-to-$p$ character factors.

1.1 AC gives Dependent Choice on any given serial relation: choose one successor from each nonempty successor set using AC and iterate from a chosen starting point. Hence the DC-qualified suppliers [F3] and [F4] apply under the unchanged assumptions [A1]. Put $K=F(\mu_p)$. Since $F$ is totally real and $p$ is odd, $K$ is totally imaginary. By [F2] the fixed field of $\Gamma$ in $\mathcal F_\infty$ is $K$, so $\mathcal F_\infty/K$ is the cyclotomic $\mathbb Z_p$-extension of $K$. [F2, F3, F4, A1, given, construct, algebra]

2.1 By [F4], the norm inverse limit of the $p$-primary ideal class groups of the finite cyclotomic layers of $K$ identifies, with its continuous $\Gamma$-action, with the Galois group of the maximal unramified abelian pro-$p$ extension of $\mathcal F_\infty$. This is exactly $X_\infty$ by [F1]; there is no separate real-splitting condition because the base is totally imaginary. Apply [F3] to obtain that $X_\infty$ is finitely generated and torsion over $R=\mathbb Z_p\llbracket\Gamma\rrbracket$. Use the tower identification from step 1.1. [F1, F3, F4, step 1.1, algebra]

3.1 A finite set generating $X_\infty$ over $R$ also generates it over $\Lambda(\mathcal G)=R[\Delta]$. Multiplying finitely many nonzero annihilators in $R$ gives one nonzero $f\in R$ annihilating $X_\infty$. Since $R[\Delta]$ is free over the domain $R$ with basis the finite group $\Delta$, multiplication by $f$ is injective on $R[\Delta]$; thus $f$ is a non-zero-divisor of $\Lambda(\mathcal G)$ and $X_\infty$ is torsion over that ring. Use the finite-generation and torsion assertion of step 2.1. [F2, step 2.1, construct, algebra]

4.1 The cyclic group $\Delta$ has order prime to $p$ and its characters take values in $\mathbb Z_p^\times$ by the actual cyclotomic embedding in [F2]. For each character $\chi$, $e_\chi=|\Delta|^{-1}\sum_{d\in\Delta}\chi(d)^{-1}d$ is an idempotent commuting with $R$. Its image $e_\chi X_\infty$ is generated over $R$ by the images of the finite generating set from step 2.1 and is annihilated by the same nonzero $f$ from step 3.1. It is therefore finitely generated and torsion over the cyclotomic $\mathbb Z_p$-algebra. This proves the original full-module and character-component assertions. [F2, step 2.1, step 3.1, algebra, discharge-construct] ∎
