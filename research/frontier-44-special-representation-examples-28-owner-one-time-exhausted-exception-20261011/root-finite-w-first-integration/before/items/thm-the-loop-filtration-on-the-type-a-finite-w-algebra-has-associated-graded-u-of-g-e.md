---
id: thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e
kind: theorem
title: "The loop filtration on the type-A finite W-algebra has associated graded U(g^e)"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [thm-ordered-monomial-pbw-basis-for-the-shifted-yangian,
       def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       def-associated-graded-algebra-of-a-filtered-algebra,
       def-classical-complex-matrix-lie-algebras]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Section 3.1, Lemma 3.1, printed pp. 10-11: gr W(lambda) is canonically isomorphic to U(g^e) under the loop filtration, with gr_r T_{i,j}^{(r+1)}=(-1)^r e_{i,j;r}."
    - title: "Jonathan Brundan, Simon M. Goodwin and Alexander Kleshchev, Highest weight theory for finite W-algebras, Int. Math. Res. Not. 2008, no. 15 (complete 38-page arXiv article)"
      url: "https://arxiv.org/pdf/0801.1337"
      locator: "Section 3.3, Theorem 3.8 with Lemmas 3.5-3.7, printed pp. 12-20: gr U(g,e)=U(g^e) for arbitrary compatible good gradings; the accompanying discussion distinguishes the good/loop filtration from the Kazhdan filtration."
verification:
  precheck: pass
---

## Statement

Equip $W(\lambda)$ with the loop (good) filtration
$$F_rW(\lambda)=W(\lambda)\cap\bigoplus_{s\le r}U(\mathfrak p)_s$$
induced by the pyramid grading $\mathfrak p=\bigoplus_{r\ge0}\mathfrak g_r$ of
[[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]], and
likewise for the shifted Yangian of
[[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]].
Then the associated graded algebra $\operatorname{gr}W(\lambda)$ is
canonically isomorphic to the enveloping algebra $U(\mathfrak g^e)$, viewed as
a graded algebra via the restriction of the pyramid grading, and the
isomorphism sends the leading symbol of the generator $T_{i,j}^{(r+1)}$ to
$(-1)^re_{i,j;r}$, where the $e_{i,j;r}$ are the centralizer basis of the
pyramid. In particular $W(\lambda)$ is a filtered deformation of
$U(\mathfrak g^e)$, the loop filtration is separated, and the ordered
monomials in the generators $T_{i,j}^{(r+1)}$, $(i,j,r)\in K$, form a basis of
$W(\lambda)$.

This filtration is not the Kazhdan filtration: the Kazhdan filtration has
associated graded the commutative Slodowy-slice algebra $\mathbb C[S]$, while
here $\operatorname{gr}W(\lambda)=U(\mathfrak g^e)$ is noncommutative in
general.

## Facts & Assumptions

**Given:** The pyramid $\lambda$, the finite W-algebra $W(\lambda)$ with its generators $T_{i,j}^{(r+1)}$ and loop filtration, and the centralizer basis $e_{i,j;r}$, $(i,j,r)\in K$.

[F1] The ordered monomials in the finite $T$-modes $s_{i,j}<r\le S_{i,j}$ form a PBW basis of $W(\lambda)$, and the loop degree of $T_{i,j}^{(r+1)}$ is $r$ ([thm-ordered-monomial-pbw-basis-for-the-shifted-yangian], [[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]]).

[F2] The leading symbol of $T_{i,j}^{(r+1)}$ in the loop filtration is $(-1)^re_{i,j;r}$; the elements $e_{i,j;r}$ with $(i,j,r)\in K$ form a basis of the centralizer $\mathfrak g^e$ and satisfy the matrix-unit commutation relations of $\mathfrak g$ ([def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra], [[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]]).

[F3] Ordered monomials in a basis of a finite-dimensional Lie algebra form a PBW basis of its enveloping algebra ([thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]); the associated graded of a filtered algebra is computed from the leading symbols of a filtered basis ([[def-associated-graded-algebra-of-a-filtered-algebra]]).

[F4] The Kazhdan filtration of the Gan-Ginzburg construction has associated graded the commutative coordinate ring of the Slodowy slice, not the enveloping algebra of $\mathfrak g^e$ ([[def-the-type-a-finite-w-algebra-and-whittaker-category]]).



## Proof

**Proof technique:** direct.

**Given:** The PBW basis and leading-symbol data of [F1]-[F2].

1.1 Leading symbols of the PBW basis. By the Gauss coefficient comparison, the loop-degree-$r$ part of $T_{i,j}^{(r+1)}$ dominates its expansion in the $\mathfrak p$-filtration, and its symbol is $(-1)^re_{i,j;r}$: the sign is the alternating sign of the $r$-fold Gauss inversion and $e_{i,j;r}$ is the coefficient of the loop mode $t^r$ in the current $e_{i,j}(t)$; no lower-degree terms are present in the symbol, because the corrections produced by the Gauss inversion all have strictly smaller loop degree. [F2, algebra]

1.2 Independence of the symbols. The symbols $\{e_{i,j;r}:(i,j,r)\in K\}$ are linearly independent by the centralizer basis theorem of the pyramid; they satisfy the commutation relations $[e_{i,j;r},e_{k,l;s}]=\delta_{jk}e_{i,l;r+s}-\delta_{il}e_{k,j;r+s}$ with the convention that terms outside the index set $K$ vanish in the associated graded, exactly as the matrix units of the current algebra do after projection to the finite range. [F2, algebra]

2.1 The isomorphism. Map $U(\mathfrak g^e)\to\operatorname{gr}W(\lambda)$ by $e_{i,j;r}\mapsto$ symbol of $(-1)^rT_{i,j}^{(r+1)}$. By step 1.2 this extends to an algebra homomorphism which is surjective because the symbols of the PBW basis monomials generate $\operatorname{gr}W(\lambda)$ (the associated graded is spanned by the leading terms of the PBW basis [F1], and each such term is a product of the displayed symbols by the straightening relations). It is injective: ordered monomials in the $e_{i,j;r}$ are linearly independent in $U(\mathfrak g^e)$ by [F3], and they map to the leading terms of the independent PBW monomials of $W(\lambda)$; a nontrivial linear relation in the image would, after ordering, give a nontrivial PBW relation in $W(\lambda)$. Hence $\operatorname{gr}W(\lambda)\cong U(\mathfrak g^e)$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 Separatedness and basis. Since the isomorphism identifies the associated graded with an algebra without zero divisors in each degree and the PBW monomials of $W(\lambda)$ have symbols forming a basis, the loop filtration is separated and the ordered monomials in $T_{i,j}^{(r+1)}$ form a basis of $W(\lambda)$; this is a filtered deformation statement: the associated graded algebra is $U(\mathfrak g^e)$ but $W(\lambda)$ itself is not graded, because the commutators of the generators have lower-order corrections. [F1, step 2.1, algebra]

4.1 Distinctness from the Kazhdan filtration. The Kazhdan filtration assigns degrees through the doubled good grading and has associated graded the commutative algebra $\mathbb C[S]$ of the Slodowy slice [F4]; the loop filtration has the generally noncommutative associated graded $U(\mathfrak g^e)$. The two filtrations therefore differ, and all double centralizer arguments on this page use the loop filtration with the index convention $(i,j,r)\in K$ and generators $T_{i,j}^{(r+1)}$. [F4, step 2.1] ∎

## Remarks

- The index shift is part of the statement: the generator with loop degree $r$ is $T_{i,j}^{(r+1)}$, and its symbol is $(-1)^re_{i,j;r}$. The coefficient index of the source series is $r+1$, and no additional rescaling is applied.

- The affine-Yangian proof notes expand the coefficient bookkeeping of steps 1.1-1.2 (Gauss inversion signs and the finite range); the finite-W matrix proof contains the tensor-model check of the same symbol assignment.
