---
id: ex-cg-type-a-artin-projection-and-positive-lifts
kind: example
title: "Type-A Artin projections, positive lifts, and the positive braid monoid"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 6
deps: [def-cg-artin-monoid-and-group-presentations, lem-cg-artin-presentation-universal-properties-and-coxeter-surjection, thm-cg-reduced-positive-section-and-length-additive-products, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign, def-positive-braid-monoid, thm-the-symmetric-group-has-the-coxeter-presentation, thm-adjacent-transpositions-generate-the-symmetric-group, def-generated-subgroup]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rachael Boyd, Homology of Coxeter and Artin groups (PhD thesis, University of Aberdeen 2018, corrected version)"
      url: "https://www.maths.gla.ac.uk/~rboyd/Boyd%20Thesis%20with%20corrections.pdf"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
verification:
  precheck: pass
---

## Example

Let $n\ge2$, $S=\{s_1,\dots,s_{n-1}\}$ and let $m$ be the type-$A_{n-1}$
Coxeter matrix on $S$: $m(s_i,s_i)=1$, $m(s_i,s_j)=3$ when $|i-j|=1$, and
$m(s_i,s_j)=2$ when $|i-j|>1$. Let $W$ be the presented Coxeter group with length
$\ell$, let $G_n:=A(S,m)$ and $G_n^{+}:=A^{+}(S,m)$ be the Artin group and monoid
of [[def-cg-artin-monoid-and-group-presentations]], and let $\pi:G_n\to W$,
$\pi^{+}:G_n^{+}\to W$, $\gamma$, $\sigma_i:=\sigma_{s_i}$ and $b_w$ be as in
[[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]] and
[[thm-cg-reduced-positive-section-and-length-additive-products]]. By the type-$A$
clause of [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4),
$s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_n$
([[def-finite-symmetric-group-and-permutation-notation]]) with
$\ell(w)=\operatorname{inv}(w)$, the inversion number
([[def-inversions-inversion-number-and-sign]]).

Throughout, relabel the library's underlying set $\{0,\ldots,n-1\}$ as
$\{1,\ldots,n\}$ by $k\mapsto k+1$, as in that supplier. Cycle symbols,
one-line lists and inversion positions below use these transported labels;
the order-preserving relabelling leaves inversion numbers unchanged.

1. **The Artin-to-symmetric map.** Composing with that isomorphism,
$s_i\mapsto(i\ i+1)$ extends to a surjective homomorphism

$$\pi_n:G_n\longrightarrow S_n,\qquad \pi_n(\sigma_i)=(i\ i+1),$$

with $\pi_n(\sigma_{i_1}\cdots\sigma_{i_k})=s_{i_1}\cdots s_{i_k}$ for every
word; the same assignment on the generators gives a monoid homomorphism
$\pi^{+}_n:G_n^{+}\to S_n$ with $\pi_n\circ\gamma=\pi^{+}_n$. Surjectivity holds
because the adjacent transpositions generate $S_n$ (the existence follows from
the universal property (2) of
[[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]], since
the braid words of the type-$A$ matrix are equal in $S_n$).

2. **Positive lifts.** For $w\in S_n$ the element
$b_w=\sigma_{i_1}\cdots\sigma_{i_k}$ of any reduced expression is well defined,
satisfies $\pi^{+}_n(b_w)=w$, and the map $w\mapsto b_w$ is injective
([[thm-cg-reduced-positive-section-and-length-additive-products]] (1),(2)). For
instance, when $n\ge3$,

$$b_{s_1s_2}=\sigma_1\sigma_2,\qquad b_{s_1}b_{s_2}=\sigma_1\sigma_2=b_{s_1s_2}$$

because $\operatorname{inv}(s_1s_2)=2=1+1$, an instance of the length-additive
case of [[thm-cg-reduced-positive-section-and-length-additive-products]] (4).

3. **Two reduced expressions of the longest element.** For $n=3$,
$w_0=(1\ 3)=s_1s_2s_1=s_2s_1s_2$ has $\ell(w_0)=3=\operatorname{inv}(w_0)$, and
the two reduced expressions are related by the braid move
$\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2$ in $G_3$, so

$$b_{w_0}=\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2,$$

a nonempty instance of the independence clause (1) of
[[thm-cg-reduced-positive-section-and-length-additive-products]].

4. **Positive braid monoid.** For the same standard type-$A_{n-1}$ indexing, the
generators and positive braid relations of $G_n^{+}$ agree exactly with the
presentation of $B_n^{+}$ in [[def-positive-braid-monoid]]. Thus the assignment
$\sigma_i\mapsto\overline{\sigma}_i$ gives a monoid isomorphism
$G_n^{+}\cong B_n^{+}$ by the quotient universal properties. This is only an
identification by positive presentations; it does not assert that $B_n^{+}$
embeds in $G_n$ or construct a geometric braid monoid.

5. **Scope.** This example proves only the stated presentation-level maps, lifts
and finite calculations. It constructs no topological model, proves no Garside or
lattice property, and makes no claim about the embedding of the positive monoid
into the group. The type-A group identification with geometric braids is the
separate conditional application in A2, using its independently published
completeness theorem. The failure of $b$ to be multiplicative is the companion
counterexample.

## Facts & Assumptions

**Given:** An integer $n\ge2$, the type-$A_{n-1}$ Coxeter matrix on $S=\{s_1,\dots,s_{n-1}\}$, the group $W$ with length $\ell$, and the constructions $G_n=A(S,m)$, $G_n^{+}=A^{+}(S,m)$, $\gamma$, $\sigma_i$ and $b_w$ of the items named in the statement, together with the isomorphism $W\to S_n$, $s_i\mapsto(i\ i+1)$, of the type-$A$ clause (4) of [[thm-hh-parabolic-minimal-representatives-and-length-additivity]].

[F1] A map $f:S\to M$ into a monoid whose values on the two words of every braid pair agree extends uniquely to a monoid homomorphism $\bar f:A^{+}\to M$ with $\bar f(\sigma_s)=f(s)$. ([[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]])

[F2] A map $f:S\to G$ into a group whose values on the two words of every braid pair agree extends uniquely to a group homomorphism $\bar f:A\to G$ with $\bar f(\sigma_s)=f(s)$. ([[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]])

[F3] $b_w$ is well defined independently of the reduced expression, $b_1=[\varepsilon]$, and $\pi^{+}(b_w)=w$. ([[thm-cg-reduced-positive-section-and-length-additive-products]])

[F4] $\pi^{+}\circ b=\mathrm{id}_W$ and $\pi\circ\gamma\circ b=\mathrm{id}_W$, hence $b$ is injective and is a set-theoretic section. ([[thm-cg-reduced-positive-section-and-length-additive-products]])

[F5] $b_ub_v=b_{uv}$ if and only if $\ell(uv)=\ell(u)+\ell(v)$. ([[thm-cg-reduced-positive-section-and-length-additive-products]])

[F6] For $n\ge2$ the symmetric group has the presentation with generators $s_i=(i\ i+1)$ and relations $s_i^2=1$, $s_is_{i+1}s_i=s_{i+1}s_is_{i+1}$ and $s_is_j=s_js_i$ for $|i-j|>1$. ([[thm-the-symmetric-group-has-the-coxeter-presentation]])

[F7] For $n\ge2$ the adjacent transpositions $s_j=(j\ j+1)$ generate $S_n$. Generation follows directly from the zero-indexed adjacent-swap proof of [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4). The conventional generation result is also recorded in [[thm-adjacent-transpositions-generate-the-symmetric-group]]; its missing relabelling is not needed for the direct argument here.

[F8] An inversion of $\sigma\in S_n$ is a pair $(i,j)$ with $i<j<n$ and $\sigma(i)>\sigma(j)$, and $\operatorname{inv}(\sigma)$ is the number of inversions. ([[def-inversions-inversion-number-and-sign]])

[F9] Let $M$ be a monoid and $a_1,\dots,a_{n-1}\in M$ satisfy $a_ia_{i+1}a_i=a_{i+1}a_ia_{i+1}$ and $a_ia_j=a_ja_i$ for $|i-j|>1$; then there is exactly one monoid homomorphism $\varphi:B_n^{+}\to M$ with $\varphi(\overline{\sigma}_i)=a_i$. ([[def-positive-braid-monoid]])

[F10] The subgroup generated by a set is contained in every subgroup containing that set. ([[def-generated-subgroup]])

## Verification

1.1 The braid pairs of the type-$A_{n-1}$ matrix are the pairs of alternating words $\{s_is_{i+1}s_i,\ s_{i+1}s_is_{i+1}\}$ for $|i-j|=1$ and the commuting pairs $\{s_is_j,\ s_js_i\}$ for $|i-j|>1$; their images under $f(s_i):=(i\ i+1)$ are equal in $S_n$ by the presentation of [F6]. Hence [F2] gives a homomorphism $\pi_n:G_n\to S_n$ with $\pi_n(\sigma_i)=(i\ i+1)$. Its image is a subgroup of $S_n$ containing the adjacent transpositions, which generate $S_n$ by [F7], so the image is all of $S_n$ by [F10]: $\pi_n$ is surjective. [F2, F6, F7, F10]

1.2 The monoid isomorphism $G_n^{+}\cong B_n^{+}$: define $\varphi:G_n^{+}\to B_n^{+}$ on generators by $\varphi(\sigma_i):=\overline{\sigma}_i$. The braid pairs of the type-$A$ matrix map to the two defining word pairs of $B_n^{+}$ of [F9], whose two members are $\equiv^{+}$-equivalent in $B_n^{+}$, so [F1] gives a monoid homomorphism $\varphi$. Conversely the elements $a_i:=\sigma_i\in G_n^{+}$ satisfy $a_ia_{i+1}a_i=a_{i+1}a_ia_{i+1}$ and $a_ia_j=a_ja_i$ for $|i-j|>1$, because the corresponding alternating words are $\equiv^{+}$-equivalent in $A^{+}(S,m)$ and hence equal in $G_n^{+}$; so [F9] gives a monoid homomorphism $\psi:B_n^{+}\to G_n^{+}$ with $\psi(\overline{\sigma}_i)=\sigma_i$. The composites $\varphi\circ\psi$ and $\psi\circ\varphi$ fix every generator, hence are the respective identities by the uniqueness clauses of [F1] and [F9]; thus $\varphi$ and $\psi$ are mutually inverse isomorphisms. [F1, F9]

2.1 The same assignment $f(s_i):=(i\ i+1)$ has equal values on the two words of every braid pair by [F6], so [F1] with $M=S_n$ gives a monoid homomorphism $\pi^{+}_n:G_n^{+}\to S_n$ with $\pi^{+}_n(\sigma_i)=(i\ i+1)$. The composites $\pi_n\circ\gamma$ and $\pi^{+}_n$ are monoid homomorphisms $G_n^{+}\to S_n$ agreeing on every generator $\sigma_i$, so they are equal by the uniqueness clause of [F1]: $\pi_n\circ\gamma=\pi^{+}_n$. [F1, step 1.1]

3.1 The map $b:S_n\to G_n^{+}$ is well defined by the type-$A$ isomorphism of the given data: its input $w\in S_n$ corresponds to the unique element of $W$ with the same name, and [F3] applies. It satisfies $\pi^{+}_n(b_w)=w$ by [F3], and $\pi_n\circ\gamma\circ b=\mathrm{id}_{S_n}$ because $\pi_n\circ\gamma=\pi^{+}_n$ by step 2.1 and $\pi^{+}_n\circ b=\mathrm{id}$ by [F4]; in particular $b$ is injective by [F4] and is a set-theoretic section of both $\pi^{+}_n$ and $\pi_n\circ\gamma$. [F3, F4, step 2.1]

4.1 For $n\ge3$, the element $s_1s_2$ permutes the first three symbols as in $S_3$ and fixes the others; it corresponds to $(1\ 2)(2\ 3)=(1\ 2\ 3)$, whose one-line form is $[2,3,1,4,\ldots,n]$ (with no tail when $n=3$); the pairs $(1,3)$ and $(2,3)$ are its only inversions: $(1,2)$ is not an inversion and all pairs involving the increasing tail contribute none, so $\operatorname{inv}(s_1s_2)=2$ by [F8]. By the given type-$A$ clause $\ell(s_1s_2)=2$ while $\ell(s_1)=\ell(s_2)=1$, so $\ell(s_1s_2)=\ell(s_1)+\ell(s_2)$ and [F5] gives $b_{s_1}b_{s_2}=b_{s_1s_2}$; explicitly both sides equal $\sigma_1\sigma_2$, and no braid move is needed for this pair. [F5, F8, step 3.1]

4.2 For $n=3$, the two words $s_1s_2s_1$ and $s_2s_1s_2$ both act as the transposition $(1\ 3)$, whose one-line form $[3,2,1]$ has all three pairs as inversions, so $\operatorname{inv}(w_0)=3$ by [F8]; with $\ell(w_0)=3$ by the given type-$A$ clause, both words have length $\ell(w_0)$ and hence are reduced expressions of $w_0$. Step 3.1 therefore gives $b_{w_0}$ as the product along either word, and the two products are equal in $G_3$ because $\sigma_1\sigma_2\sigma_1$ and $\sigma_2\sigma_1\sigma_2$ are the two words of a braid pair of $A(S,m)$, hence equal in $G_3^{+}$ and in $G_3$. [F8, step 3.1]

5.1 Scope and choice: only presentation-level maps, the positive monoid isomorphism and the displayed finite computations are proved; no topological model, no Garside or lattice property, and no embedding of $G_n^{+}$ into $G_n$ or $B_n^{+}$ into $B_n$ is asserted. All constructions are given on generators of explicitly presented monoids and groups, and no choice is used. [given] ∎
