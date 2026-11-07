---
id: lem-hc0-vanishing-for-tensor-middle-extensions
kind: lemma
title: "Compactly Supported Degree-Zero Vanishing for Tensor Products of Middle Extensions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-l-adic-middle-extension-sheaf-over-finite-field
  - def-middle-extension-l-adic-sheaf-on-a-curve
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-compactly-supported-etale-cohomology
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, *Lectures on Étale Cohomology*, Chapter I, §18"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "pp. 119–122; compact-support sections and extension by zero"
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §4"
      url: "https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf"
      locator: "PDF pp. 12–13; degree-zero term in the correlation proof"
verification:
  precheck: pending
---

## Statement

Let $p$ be prime, let $\ell\ne p$, and let $X=\mathbb P^1_{\overline{\mathbb F}_p}$. For $i=1,2$, let $j_i:U_i\hookrightarrow X$ be a dense open inclusion, let $L_i$ be a finite-rank lisse $\overline{\mathbb Q}_\ell$-sheaf on $U_i$, and set $M_i=j_{i*}L_i$, the ordinary middle extension. Let $S_i=X\setminus U_i$ be its finite singular set and put $U=\mathbb A^1_{\overline{\mathbb F}_p}\setminus((S_1\cup S_2)\cap\mathbb A^1)$. Then
$$H_c^0\!\left(\mathbb A^1_{\overline{\mathbb F}_p},(M_1\otimes M_2)|_{\mathbb A^1}\right)=0.$$

## Statement references

[[def-l-adic-middle-extension-sheaf-over-finite-field|ℓ-adic middle-extension sheaf over a finite field]]

[[def-compactly-supported-etale-cohomology|Compactly supported étale cohomology]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §4](https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf)

## Facts & Assumptions

**Given:** The prime $p$, the prime $\ell\ne p$, the two middle-extension sheaves, and the nonempty common lisse open $U$ in the Statement.

[F1] [[def-middle-extension-l-adic-sheaf-on-a-curve]]: $M_i=j_{i*}L_i$ is the ordinary direct image; on its lisse open it restricts to $L_i$.

[F2] [[def-lisse-l-adic-sheaf-on-a-scheme]]: a lisse sheaf is locally constant of finite rank, so a section on a connected lisse open is either zero everywhere or nonzero at every geometric stalk.

[F3] [[def-compactly-supported-etale-cohomology]]: $H_c^0$ consists of global sections whose support is closed in a proper compactification and contained in the open curve.

## Proof

1.1 The set removed from $\mathbb A^1$ is finite, so $U$ is a nonempty open subset of the irreducible affine line and is connected. For each geometric point of $X$, the natural stalk map from each $M_i$ to the geometric generic stalk of $L_i$ is injective. At a boundary point this follows from $M_i=j_{i*}L_i$: a germ is represented by a section on a punctured étale neighborhood, and a section of a lisse sheaf on the connected punctured strict-henselian neighborhood is determined by its generic germ. At a point of $U$ the map is the identity. Tensoring these injections over the field $\overline{\mathbb Q}_\ell$ gives an injection of every stalk of $M_1\otimes M_2$ into the generic tensor stalk. Its restriction to $U$ is lisse by [F1] and [F2]. [F1, F2, given, construct, algebra]

2.1 Let $s$ be a global section of $(M_1\otimes M_2)|_{\mathbb A^1}$ with compact support. Its restriction to the connected curve $U$ is a section of a lisse sheaf. If this restriction is zero, the stalk injections of step 1.1 show that every geometric germ of $s$ is zero, hence $s=0$. If the restriction is nonzero, [F2] implies its support contains all of $U$. The closure of $U$ in $\mathbb P^1$ contains the point at infinity, so this support is not contained in $\mathbb A^1$ and is not compactly supported there, contrary to [F3]. Thus every compactly supported global section is zero, which is the asserted vanishing. [F2, F3, given, step 1.1, algebra] ∎
