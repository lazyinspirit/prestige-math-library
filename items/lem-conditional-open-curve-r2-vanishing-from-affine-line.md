---
id: lem-conditional-open-curve-r2-vanishing-from-affine-line
kind: lemma
title: "Conditional relative open-curve H² vanishing from the affine line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-nonaffine-regular-local-ring-is-ufd
  - lem-proper-torsion-base-change-under-choice
  - lem-generic-point-leray-and-kummer-curve-cohomology-in-zf
  - thm-picard-zero-represented-by-jacobian
  - lem-multiplication-by-n-on-abelian-scheme
  - thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
justified_by: []
proof_strategy: direct
axiom_use: "AC/DC are inherited from the Jacobian and multiplication suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 4, Exposé XVI, section 3, Theorem 3.7"
      url: "https://grothendiecksga.com/read/sga4/en/XVI-3.html"
      locator: "The codimension-one Leray reduction is reconstructed below with only affine-line degree-two vanishing assumed."
verification: {}
---

## Statement

Assume AC and DC. Let $k$ be algebraically closed, $\ell\ne\operatorname{char}k$, $r\geq1$, and $n=\ell^r$. Suppose that for every smooth finite-type $k$-scheme $T$, the projection $g:\mathbb A^1_T\to T$ has $R^2g_*\mu_n=0$. Let $S$ be smooth finite type over $k$, let $\bar f:\overline X\to S$ be smooth and projective with geometrically connected nonempty curve fibres, and let $D\subset\overline X$ be finite étale and surjective over $S$. Then, for $f:\overline X\setminus D\to S$, one has $R^2f_*\mu_n=0$. The affine-line degree-two hypothesis is not asserted by this lemma.

## Facts & Assumptions

**Given:** The field, prime power, affine-line degree-two hypothesis, smooth base, curve family and finite étale boundary in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Every regular local ring is a unique factorization domain. [[thm-nonaffine-regular-local-ring-is-ufd]]

[F2] Proper torsion cohomology commutes with arbitrary base change. [[lem-proper-torsion-base-change-under-choice]]

[F3] Generic-point Kummer cohomology and its valuation sequence apply to smooth curves over algebraically closed fields. [[lem-generic-point-leray-and-kummer-curve-cohomology-in-zf]]

[F4] The degree-zero Picard group of a smooth projective connected curve is the group of points of its Jacobian, an abelian variety. [[thm-picard-zero-represented-by-jacobian]]

[F5] Multiplication by $n$ on an abelian variety is finite flat and surjective, and étale when $n$ is invertible. [[lem-multiplication-by-n-on-abelian-scheme]]

[F6] Grothendieck abelian sheaf categories have injective resolutions under AC. [[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]

## Proof

**Proof technique:** compute the boundary residue in degree one and use the degree-two Leray filtration twice.

1.1 At a geometric point of $D$, the strict local ring $R$ of $\overline X$ is regular and $D$ has a local prime parameter $t$. By [F1], $R$ and $R[1/t]$ are UFDs, so $\operatorname{Pic}(R[1/t])=0$. Kummer and Hensel's lemma identify $H^1(R[1/t],\mu_n)$ with the powers of $t$ modulo $n$: all units of $R$ have $n$th roots. The parameter class is unchanged when $t$ is multiplied by a unit. Therefore for $j:\overline X\setminus D\hookrightarrow\overline X$ one has $j_*\mu_n=\mu_n$ and $R^1j_*\mu_n=i_*\underline{\mathbb Z/n}$, where $i:D\hookrightarrow\overline X$. The same calculation applies after any smooth base change. [A1, F1, given, construct, algebra]

2.1 Étale locally, the smooth divisor pair is the zero section of $\mathbb A^1_T/T$ for a smooth finite-type $k$-scheme $T$. Replace it locally by the section at infinity in $p:\mathbb P^1_T\to T$, with complement $g:\mathbb A^1_T\to T$. By [F2] and [F3], the sheaf $R^2p_*\mu_n$ is $\underline{\mathbb Z/n}$ via the class of $\mathcal O(1)$. In the Leray sequence for $g=pj$, the boundary map from $p_*R^1j_*\mu_n$ sends the local parameter generator to this degree-one class and is an isomorphism. The other degree-two term $R^1p_*R^1j_*\mu_n$ is zero because the higher direct image is supported on a section. The degree-two filtration therefore identifies $R^2g_*\mu_n$ with $p_*R^2j_*\mu_n$. By the stated affine-line hypothesis this is zero, and support on the section gives $R^2j_*\mu_n=0$ for the original divisor pair. [A1, F2, F3, F6, step 1.1, given, construct, algebra]

3.1 For $\bar f$, [F2]–[F5] identify $R^2\bar f_*\mu_n$ with $\underline{\mathbb Z/n}$ by fibrewise divisor degree: degree-zero Picard classes are $n$-divisible on every geometric fibre. Étale-locally a curve section supplies the degree-one generator, and the fibrewise degree description makes it canonical. The Leray boundary from $\bar f_*R^1j_*\mu_n=d_*\underline{\mathbb Z/n}$ is the sum of the boundary divisor coefficients, where $d:D\to S$; it is surjective because $d$ is finite étale and surjective. Its higher direct images vanish because $d$ is finite étale. Combining this with $R^2j_*=0$ from step 2.1, the three terms of total degree two in the Leray filtration all vanish, proving $R^2f_*\mu_n=0$. [A1, F2, F3, F4, F5, F6, step 1.1, step 2.1, given, construct, algebra] ∎
