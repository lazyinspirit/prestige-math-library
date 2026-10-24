---
id: thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e
kind: theorem
title: "The loop filtration on the type-A finite W-algebra has associated graded U(g^e)"
status: published
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

[F1] The ordered monomials in the finite $T$-modes $s_{i,j}<r\le S_{i,j}$ form a PBW basis of $W(\lambda)$, and the loop degree of $T_{i,j}^{(r+1)}$ is $r$ ([[thm-ordered-monomial-pbw-basis-for-the-shifted-yangian]], [[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]]).

[F2] The leading symbol of $T_{i,j}^{(r+1)}$ in the loop filtration is $(-1)^re_{i,j;r}$; the elements $e_{i,j;r}$ with $(i,j,r)\in K$ form a basis of the centralizer $\mathfrak g^e$ and have brackets computed by expanding their sums in the ambient matrix-unit commutator ([[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]], [[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]]).

[F3] Ordered monomials in a basis of a finite-dimensional Lie algebra form a PBW basis of its enveloping algebra ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]); the associated graded of a filtered algebra is computed from the leading symbols of a filtered basis ([[def-associated-graded-algebra-of-a-filtered-algebra]]).

[F4] The Kazhdan filtration of the Gan-Ginzburg construction has associated graded the commutative coordinate ring of the Slodowy slice, not the enveloping algebra of $\mathfrak g^e$ ([[thm-ordered-monomial-pbw-basis-for-the-shifted-yangian]]).





## Proof

**Proof technique:** direct.

**Given:** The PBW basis and leading-symbol data of [F1]-[F2].

1.1 **Actual ambient leading term.** Give a matrix unit $e_{a,b}\in\mathfrak p$ its good degree $\operatorname{col}(b)-\operatorname{col}(a)$. In the explicit signed path formula a term of canonical degree $r+1$ with $k$ matrix-unit factors has good degree at most $r+1-k$; a diagonal scalar replacement only lowers that degree. Therefore only single-factor terms contribute in good degree $r$. Those terms sum to $(-1)^r\sum e_{a,b}$ over $\operatorname{row}(a)=i$, $\operatorname{row}(b)=j$, $\operatorname{col}(b)-\operatorname{col}(a)=r$, namely $(-1)^re_{i,j;r}$. Products introduced by Gauss factorization or its inverse have at least two factors and have smaller good degree. Thus the leading homogeneous component of $T_{i,j}^{(r+1)}$ in the actual graded algebra $U(\mathfrak p)$ is exactly $(-1)^re_{i,j;r}$. This proves the leading-symbol claim using the path degrees rather than a claim that Gauss inversion alone supplies its sign. [F1, F2, algebra]

1.2 **Independence in the ambient enveloping algebra.** The elements $e_{i,j;r}$ form a homogeneous basis of the actual Lie subalgebra $\mathfrak g^e\subseteq\mathfrak p$. Extend that finite basis to a homogeneous basis of $\mathfrak p$, with an order extending the prescribed order of the centralizer basis. Enveloping PBW implies that the ordered monomials in the $e_{i,j;r}$ are linearly independent in $U(\mathfrak p)$, and that the natural homomorphism $U(\mathfrak g^e)\to U(\mathfrak p)$ is injective. Their products and brackets are the actual ambient products and brackets, including all boundary terms of the centralizer strings. No projection of a current bracket with an arbitrary out-of-range convention is needed. [F2, F3, algebra]

2.1 **Strictness of the loop basis.** The finite $T$ monomials form a vector-space basis of $W(\lambda)$ by [F1]. For a monomial with total loop degree $d$, step 1.1 says that its degree-$d$ homogeneous component in $U(\mathfrak p)$ is, up to the product of its displayed signs, the corresponding PBW monomial in $U(\mathfrak g^e)$. In any nonzero finite linear combination of $T$ monomials, take the largest total loop degree $d$. The degree-$d$ homogeneous component is nonzero by step 1.2, even when degree-zero generators occur. Thus that combination belongs to $\bigoplus_{s\le d}U(\mathfrak p)_s$ and not to $\bigoplus_{s<d}U(\mathfrak p)_s$. Consequently the intersection filtration in the Statement is exactly the span of $T$ monomials of total loop degree at most $d$, and their degree-$d$ symbols form a basis of its associated graded. This verifies symbol independence directly, rather than inferring it from independence of filtered elements. [F1, step 1.1, step 1.2, algebra]

3.1 **The graded algebra isomorphism.** For any subalgebra of a nonnegatively graded algebra with its intersection filtration, taking highest homogeneous components embeds its associated graded into that graded algebra: if a representative's component of degree $d$ is zero it already lies in filtration $d-1$, and multiplication agrees with multiplication of homogeneous components. Apply this to $W(\lambda)\subseteq U(\mathfrak p)$. Step 2.1 identifies its image with the span of the ordered monomials in $\mathfrak g^e$, which is precisely the embedded algebra $U(\mathfrak g^e)$ from step 1.2. Hence $\operatorname{gr}^{\mathrm{loop}}W(\lambda)\cong U(\mathfrak g^e)$, and the identification sends the symbol of $T_{i,j}^{(r+1)}$ to $(-1)^re_{i,j;r}$ as asserted. [F3, step 1.1, step 1.2, step 2.1, algebra, construct]

4.1 **Filtration and the second graded algebra.** Each generator has finite nonnegative good degree, and each element is a finite sum of $T$ monomials, so the loop filtration is exhaustive and bounded below with $F_{-1}=0$. The actual homogeneous decomposition in $U(\mathfrak p)$ and step 2.1 give separatedness. The finite basis is already established in [F1], and step 3.1 establishes its filtered deformation property. Independently, the Kazhdan filtration uses positive weights $\operatorname{col}(b)-\operatorname{col}(a)+1$ on $\mathfrak p$ and has associated graded $\mathbb C[S]$ by [F4]; in the doubled convention its weights are twice these. That graded algebra is commutative, whereas $U(\mathfrak g^e)$ is noncommutative whenever $\mathfrak g^e$ is nonabelian. These are the two claimed filtrations and their respective graded algebras. [F1, F4, step 2.1, step 3.1, algebra] ∎

## Remarks

- The index shift is part of the statement: the generator with loop degree $r$ is $T_{i,j}^{(r+1)}$, and its symbol is $(-1)^re_{i,j;r}$. The coefficient index of the source series is $r+1$, and no additional rescaling is applied.

- The affine-Yangian proof notes expand the coefficient bookkeeping of steps 1.1-1.2 (Gauss inversion signs and the finite range); the finite-W matrix proof contains the tensor-model check of the same symbol assignment.
