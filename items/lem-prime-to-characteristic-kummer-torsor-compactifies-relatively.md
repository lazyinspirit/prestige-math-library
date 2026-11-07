---
id: lem-prime-to-characteristic-kummer-torsor-compactifies-relatively
kind: lemma
title: "Prime-to-characteristic Kummer torsors compactify over smooth bases"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-integral-closure-finite-finite-type-domain-over-field
justified_by: []
proof_strategy: direct
axiom_use: "AC/DC are assumed for the finite normalization and geometric fibre constructions."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 4, Exposé XVI, section 3, Lemma 3.5"
      url: "https://grothendiecksga.com/read/sga4/en/XVI-3.html"
      locator: "Relative tame Kummer ramification; the connected cyclic compactification is reconstructed below."
verification: {}
---

## Statement

Assume AC and DC. Let $k$ be algebraically closed, let $n\geq1$ be invertible in $k$, and let $S$ be a connected smooth finite-type $k$-scheme. Let $\bar f:\overline X\to S$ be a smooth projective curve with geometrically connected nonempty fibres, and let $D\subset\overline X$ be finite étale and surjective over $S$. Put $X=\overline X\setminus D$. If $T\to X$ is a $\mu_n$-torsor and $T\to S$ has geometrically connected fibres, then there is a smooth projective $S$-curve $\overline T$ with geometrically connected fibres containing $T$ as the complement of a finite étale surjective boundary. The finite map $T\to X$ extends to a finite map $\overline T\to\overline X$.

## Facts & Assumptions

**Given:** The algebraically closed field, invertible integer, smooth connected base, curve, boundary and fibrewise connected Kummer torsor in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Every regular local ring is a unique factorization domain. [[thm-nonaffine-regular-local-ring-is-ufd]]

[F2] The integral closure of a finite-type domain over a field in its fraction field is finite. [[thm-integral-closure-finite-finite-type-domain-over-field]]

## Proof

**Proof technique:** extend the Kummer line bundle and normalize the tame cyclic cover at the boundary.

1.1 The smooth connected base $S$ is integral, and the smooth family with geometrically connected fibres is regular and connected, hence $\overline X$ and $X$ are integral. The torsor is finite étale, and its geometrically connected nonempty fibres over connected $S$ make $T$ connected; smoothness then makes $T$ integral. Kummer describes the torsor by a line bundle $L$ on $X$ and an isomorphism $L^{\otimes n}\cong\mathcal O_X$: locally the torsor is the scheme of $n$th roots of that trivialization. Choose a nonzero rational section of $L$. Its divisor on the regular integral $X$ has a closure on $\overline X$, which is Cartier because the latter is locally factorial by [F1]; it extends $L$ to a line bundle $\bar L$ on $\overline X$. [A1, F1, given, choose, construct, algebra]

2.1 Let $K$ and $K'$ be the function fields of $\overline X$ and $T$. Normalize $\overline X$ in $K'$; this is finite locally on $\overline X$. Indeed on an affine finite-type domain $R$ choose finitely many integral generators of $K'/K$ after clearing denominators; their finite $R$-algebra is a finite-type domain with fraction field $K'$, and [F2] makes its normalization finite, hence finite over $R$. The normalizations glue to a finite scheme $\overline T\to\overline X$, projective over $S$. Over $X$ it is $T$, since $T$ is normal and finite étale over $X$. [A1, F2, step 1.1, choose, construct, algebra]

3.1 At a geometric boundary point, work étale locally on the smooth total space and base. The boundary is one regular parameter $t=0$, and $\bar L$ is trivial. The $n$th-power trivialization on the punctured local ring is a unit there, so [F1] writes it as $u t^a$ with $u$ a local unit and $a\in\mathbb Z$. Étale locally choose an $n$th root of $u$ and all $n$th roots of unity. Replacing the generator by a power of $t$ makes $0\leq a<n$. If $e=n/\gcd(n,a)$, the normalization of $y^n=t^a$ is a disjoint union of smooth charts $t=z^e$: Bézout gives the common fraction-field generator $z$, and $k[t,z]/(z^e-t)$ is integrally closed after adjoining the other smooth parameters. The case $a=0$ gives $n$ étale branches with $e=1$. Thus $\overline T\to S$ is smooth at the boundary, and its boundary there is the disjoint union of the finite étale sections $z=0$. These local descriptions also show the boundary is finite étale over $S$ globally. [A1, F1, step 2.1, choose, construct, algebra]

4.1 Away from the boundary, $\overline T=T$ is étale over the smooth curve $X$, so $\overline T\to S$ is smooth everywhere. Its boundary is finite étale over $S$ and meets every geometric fibre: over each point of $D$ the finite map has a nonempty fibre, and the displayed local models describe that fibre. Each geometric fibre of $T$ is connected by hypothesis and is dense in the corresponding smooth projective fibre of $\overline T$, because the complement is finite; hence the latter is connected. The resulting smooth projective curve and finite étale boundary satisfy the Statement. [A1, step 2.1, step 3.1, algebra] ∎
