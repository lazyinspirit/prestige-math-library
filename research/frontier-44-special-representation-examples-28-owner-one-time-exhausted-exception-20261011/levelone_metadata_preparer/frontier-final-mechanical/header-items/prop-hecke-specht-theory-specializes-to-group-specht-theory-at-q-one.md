---
id: prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one
kind: proposition
title: "Hecke Specht theory specialises to group Specht theory at q = 1"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-modular-specht-form-and-radical-quotient, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-type-a-hecke-specht-module-and-cell-form, prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra, prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality, thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads, thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions, thm-separated-hecke-residues-give-seminormal-idempotents-and-bases, thm-standard-polytabloid-basis, thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell, cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]
justified_by: []
aliases: []
landmark: false
dependency_level: 12
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 20-34 (specialisation of the Murphy basis and of the Specht modules at q=1, with the convention warning on printed p. 25) and Chapter 5 Notes, printed pp. 63-65"
    - title: "Gordon James, The Representation Theory of the Symmetric Group, Encyclopedia of Mathematics and its Applications 16, Addison-Wesley (1981)"
      url: "https://doi.org/10.1017/CBO9781107340732"
      locator: "Chapters 4 and 8: standard polytabloid bases, the standard form, and the p-regular classification of the simple modules"
---

## Statement

Let $F$ be a field, $q=1\in F$, and let $H_{F,1}(S_n)$ be the specialization of
the generic type-A Hecke algebra at $v\mapsto1$, so that
$H_{F,1}(S_n)\cong F[S_n]$ with $T_w\mapsto w$
([[prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra]]).
Then the Hecke theory of this page specializes as follows.

1. The Murphy elements $m_\mu=\sum_{w\in S_\mu}T_w$ specialize to the row
   symmetrizers $\sum_{w\in S_\mu}w$, and the Murphy basis $\{m_{st}\}$ of
   $H_{F,1}(S_n)$ specializes to the Murphy basis of the group algebra
   $F[S_n]$ (the base change $\mathbb Z[S_n]\to F[S_n]$ of the integral Murphy
   basis).
2. For every $\lambda\vdash n$ the specialization of the page's Hecke Specht
   module $S^{\lambda}$ ([[def-type-a-hecke-specht-module-and-cell-form]]) is
   the ordinary Specht module in the Dipper-James convention:
   $S^{\lambda}_{q=1}\cong S^{\lambda}_{\mathrm{DJ}}$ as $F[S_n]$-modules, with
   the standard polytabloid basis ([[thm-standard-polytabloid-basis]]); the
   specialized cell form is the standard bilinear form on $S^{\lambda}$ whose
   radical defines the James quotient $D^{\lambda}$
   ([[def-modular-specht-form-and-radical-quotient]]).
3. The quantum characteristic of $q=1$ is $e=\operatorname{char}(F)$ when
   $\operatorname{char}(F)>0$, and $e=\infty$ when
   $\operatorname{char}(F)=0$
   ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]); in
   characteristic $p>0$ a partition is $e$-regular exactly when it is
   $p$-regular. Hence $D^{\lambda}_{q=1}\ne0$ exactly for $p$-regular $\lambda$
   ([[thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions]]),
   and for non-$p$-regular $\lambda$ one has
   $\mathrm{rad}\,S^{\lambda}=S^{\lambda}$. This matches the group-side
   classification
   [[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]] and the
   conjugate-sign dictionary
   [[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]].
   In characteristic $0$ the specialization is split semisimple and all Specht
   modules are irreducible.

## Facts & Assumptions

**Given:** A field $F$ and the specialization $H_{F,1}(S_n)\cong F[S_n]$ ([[prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra]]).

[F1] ([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]], [[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]]) The Dipper-James ordinary Specht module with its polytabloid basis and standard form is identified with the signed conjugate Murphy cell module of [[def-type-a-hecke-specht-module-and-cell-form]] by a base-change compatible isomorphism whose Laurent unit form factor is $q^{\ell(w_0(S_{\lambda'}))-\ell(w_{\lambda})}$, equal to $1$ at $q=1$ over every field; hence at $q=1$ the ordinary module and the standard form agree on the specialization, including on zero-form quotients.

[F2] ([[thm-standard-polytabloid-basis]], [[def-modular-specht-form-and-radical-quotient]]) The ordinary Specht module $S^{\lambda}$ has the standard polytabloid basis and the standard bilinear form whose radical quotients to the James module $D^{\lambda}$.

[F3] ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]) At $q=1$ the quantum characteristic is $e=p=\operatorname{char}(F)$ when $p>0$ and $e=\infty$ when $p=0$; a partition is $e$-regular exactly when it is $p$-regular.

[F4] At $q=1$ in positive characteristic, the ordinary group Specht radical quotient is nonzero exactly for $p$-regular labels ([[thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions]]). In characteristic zero $e=\infty$, and the complete local separated-range proof gives nonsingular Murphy cell forms and split semisimplicity ([[thm-separated-hecke-residues-give-seminormal-idempotents-and-bases]]); the signed-conjugate form identity in [F1] transfers their nondegeneracy to every ordinary Specht module. No finite-$e$ Hecke nonzero-label criterion is used.

[F5] ([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]], [[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]) The simple $F[S_n]$-modules are the heads of the Specht modules for the $p$-regular partitions, and the conjugate-sign dictionary relates the $p$-regular and $p$-restricted labelings.

## Proof

**Proof technique:** direct.

1.1 Murphy basis: base change along $\mathbb Z[v^{\pm1}]\to F$, $v\mapsto1$, sends $T_w$ to $w$ and $m_\mu=\sum_{w\in S_\mu}T_w$ to the row symmetrizer $\sum_{w\in S_\mu}w$; the structure constants of the Murphy basis are polynomials in $q$, so they specialize to structure constants in $F[S_n]$ and the specialized family $\{m_{st}\}$ satisfies the cellular axioms over $F$; it is a basis because its rank equals $\dim_FF[S_n]$. This is part 1. [given, F1, algebra]

2.1 Module and form: by [F1] the specialization of the page's Specht module is the ordinary Dipper-James Specht module with the standard polytabloid basis, and the specialized cell form differs from the standard form by the Laurent factor $q^{\ell(w_0(S_{\lambda'}))-\ell(w_\lambda)}$, which is $1$ at $q=1$; hence the two forms agree over every field and have the same radical, so the specialized quotient is the James quotient $D^{\lambda}$. This is part 2. [step 1.1, F1, F2]

3.1 Labels: by [F3], $e=p$ in positive characteristic, and $e$-regular means $p$-regular. Step 2.1 identifies the specialized module and its form exactly with the ordinary group module and form, so the ordinary criterion in [F4] gives precisely the nonzero $p$-regular quotients and the zero form on all other labels, in agreement with [F5]. In characteristic zero, $e=\infty>n$, so the local separated-range proof in [F4] makes the Murphy cell forms nonsingular and the algebra split semisimple. The exact signed-conjugate unit form dictionary [F1] gives the same conclusion for all ordinary Specht modules. Thus all claims follow over the original field, without using the held finite-$e$ Hecke classifier. [step 2.1, F1, F3, F4, F5] ∎
