---
id: thm-classic-brauer-group-is-h2-galois-cohomology
kind: theorem
title: The classical Brauer group is continuous Galois cohomology
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
- def-absolute-galois-group-of-a-field
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- def-axiom-of-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter IV, §§2–3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
  - title: SGA 4½, Exposé I, §3.1, Proposition 3.1.3
    url: https://grothendiecksga.com/read/sga4.5/en/I_3.html
verification: {}
---

## Statement

Let $F$ be a field, fix a separable closure $F_s$, and let
$G_F=\operatorname{Gal}(F_s/F)$. A **central simple $F$-algebra** here means
an associative finite-dimensional $F$-algebra whose center is $F$ and whose
only two-sided ideals are $0$ and itself. Let
$\operatorname{Br}_{\mathrm{alg}}(F)$ be the abelian group of similarity
classes of these algebras, where $A$ and $B$ are similar when
$A\otimes_F M_r(F)\cong B\otimes_F M_s(F)$ for some positive integers $r,s$.
There is a canonical group isomorphism
$$\operatorname{Br}_{\mathrm{alg}}(F)\cong H^2_{\mathrm{cont}}(G_F,F_s^\times).$$

## Statement references

[[def-absolute-galois-group-of-a-field]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[J. S. Milne, *Class Field Theory*, Chapter IV, §§2–3, especially the relative crossed-product comparison and its direct limit](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[SGA 4½, Exposé I, §3.1, Proposition 3.1.3](https://grothendiecksga.com/read/sga4.5/en/I_3.html)

## Facts & Assumptions

**Given:** The field, separable closure and groups in the Statement. The AC/DC branch below is explicitly conditional; the unqualified Statement is retained.

[F1] Under AC and DC, finite factor-set obstruction, with the sign normalization $b=-o$, gives the usual crossed-product comparison and its continuous direct limit. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[A1] AC and DC are temporary assumptions of the available complete comparison construction, not hypotheses silently added to the Statement. [[def-axiom-of-choice]] [[def-dependent-choice]]

[L1] The original Statement has no choice qualification. The current continuous direct-limit and algebraic construction is proved under [A1]; an argument at the unqualified axiom strength has not been supplied.

## Proof

**Proof status:** Complete under [A1]; the original unqualified Statement remains held for [L1].

**Given:** The data above and the temporary branch [A1].

1.1 Under [A1], [F1] proves that every central simple algebra splits over a finite Galois extension, gives a finite-level group isomorphism from relative similarity classes to $H^2$, and proves compatibility with enlargement and coefficient maps. It explicitly uses $b_E=-o_E$, so the crossed product with factor set $c$ maps to $[c]$, rather than its negative. [A1, F1, given]

1.2 The direct-limit argument in [F1] then gives precisely the canonical continuous comparison in the Statement. Its injectivity and surjectivity are proved there through the finite factor-set obstruction; no CSA classification or inflation diagram is imported as a missing proof. [F1, step 1.1]

2.1 This completes the mathematical comparison in the AC/DC branch. It does not discharge [L1], because no choice-free passage from finite cocycles to arbitrary continuous cohomology was proved. The full unqualified Statement therefore remains held on this exact axiom-scope obligation. [A1, L1, step 1.2]
