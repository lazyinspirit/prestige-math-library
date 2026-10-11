---
id: def-dj-bridge-row-column-permutation-modules-and-polytabloids
kind: definition
title: "Hecke row permutation modules and ordinary Dipper-James polytabloids"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-generic-type-a-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra,
       def-young-tableau-standard-tableau-and-shape,
       def-partition-young-diagram-and-conjugate-partition,
       def-weyl-group-and-length-for-finite-gl-n]
justified_by: [lem-dj-bridge-row-permutation-module-standard-action]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Matthew Fayers, An algorithm for semistandardising homomorphisms, author version accepted by J. Algebra, 16 PDF pages"
      url: "http://webspace.maths.qmul.ac.uk/m.fayers/papers/garnirhoms.pdf"
      locator: "Section 2.1, index of notation, printed p. 2 (PDF p. 3), in the normalization (T_i-q)(T_i+1)=0: x_lambda = sum_{w in W_lambda} T_w, y_lambda = sum_{w in W_lambda} (-q)^{-ell(w)} T_w, w_lambda with t^lambda w_lambda = t_lambda, M^lambda = x_lambda H_n, S^lambda = x_lambda T_{w_lambda} y_{lambda'} H_n, right modules and the right tableau action."
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-19 (PDF pp. 24-25): Lemma 3.2, Proposition 3.3 and Corollary 3.4, the row module M_lambda = x_lambda H, the distinguished basis indexed by row-standard tableaux and the coset representatives D_lambda."
    - title: "Samuel David Heard, Jonathan R. Kujawa, Positivity and web bases for Specht modules of Hecke algebras, arXiv:2207.00654v2, 26 PDF pages"
      url: "https://arxiv.org/pdf/2207.00654"
      locator: "Sections 2.3 and 2.5, PDF pp. 3-5: the generator z_lambda = x_lambda T_{sigma_lambda} y_{lambda^T} and the module S_lambda = z_lambda H; the normalization there is the symmetric one (T_i-q)(T_i+q^{-1})=0, so only the combinatorial shape of the construction is taken from this source."
    - title: "R. Dipper, G. D. James, Representations of Hecke algebras of general linear groups, Proc. London Math. Soc. (3) 52 (1986) 20-52, DOI 10.1112/plms/s3-52.1.20"
      url: "https://doi.org/10.1112/plms/s3-52.1.20"
      locator: "Historical origin of the Dipper-James construction. The full text was not accessible (Wiley/Cloudflare HTTP 403 on both the article and the PDF endpoints; see the batch-50 coverage attempts), so no page of this article was read and no clause below rests on it."
---

## Definition

Let $R$ be a commutative ring, let $q\in R^\times$, let $n\ge0$, and let
$H=H_{R,q}(S_n)$ be the type-A Hecke algebra over $R$ with generators
$T_1,\dots,T_{n-1}$, quadratic relations $(T_i-q)(T_i+1)=0$, braid and distant
commutation relations, and standard basis $\{T_w:w\in S_n\}$
([[def-generic-type-a-hecke-algebra]],
[[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]); here
$\ell(w)$ is the inversion length of $w\in S_n$
([[def-weyl-group-and-length-for-finite-gl-n]]). All modules below are right
modules.

**The star anti-involution.** Let $\sigma\mapsto\sigma^*$ be the unique
$R$-algebra anti-automorphism of $H$ with $T_i^*=T_i$ for every generator: it
exists because reversal of words preserves the ideal of defining relations
(the quadratic and braid relators are fixed, while a distant commutation relator is sent to its negative), so reversal descends from the free algebra to $H$, and it is
unique because the generators generate $H$. On the standard basis
$T_w^*=T_{w^{-1}}$, since reversing a reduced word for $w$ is a reduced word
for $w^{-1}$.

**Tableau conventions.** Write $t\cdot\sigma$ for the right action of $S_n$ on
tableaux defined by $(t\cdot\sigma)(c):=\sigma^{-1}(t(c))$; it is the inverse
of the left action $(\sigma\cdot t)(c)=\sigma(t(c))$ of
[[def-young-tableau-standard-tableau-and-shape]], and it is a right action.
A $\lambda$-tableau is **row standard** when its entries strictly increase
along every row; columns are not constrained. Let $t^\lambda$ be the row-filled
$\lambda$-tableau, whose row $i$ carries
$\lambda_1+\cdots+\lambda_{i-1}+1,\dots,\lambda_1+\cdots+\lambda_i$ from left
to right, and let $t_\lambda$ be the column-filled $\lambda$-tableau, whose
column $j$ carries consecutive integers downward; equivalently
$t_\lambda(i,j)=t^{\lambda'}(j,i)$, so that $t_\lambda$ is the transpose of
$t^{\lambda'}$ ([[def-partition-young-diagram-and-conjugate-partition]]).

**The row subgroup and the coset representatives.** Let $S_\lambda$ be the
**row subgroup** of $\lambda$, the subgroup of $S_n$ preserving every row of
$t^\lambda$; writing
$$B_i:=\{\lambda_1+\cdots+\lambda_{i-1}+1,\ \lambda_1+\cdots+\lambda_{i-1}+2,\ \dots,\ \lambda_1+\cdots+\lambda_i\}$$
for the $i$-th row block of $t^\lambda$, one has
$S_\lambda=S(B_1)\times\cdots\times S(B_k)$, the direct product of the
symmetric groups of the individual row blocks. Let
$$D_\lambda:=\{d\in S_n:t^\lambda\cdot d\text{ is row standard}\}.$$
This is the set of minimal-length right coset representatives of $S_\lambda$ in
$S_n$: every right coset $S_\lambda d$ has exactly one element $d_0$ for which
$t^\lambda\cdot d_0$ is row standard, and it satisfies
$\ell(wd_0)=\ell(w)+\ell(d_0)$ for all $w\in S_\lambda$
([[lem-dj-bridge-row-permutation-module-standard-action]]). Let
$w_\lambda\in S_n$ be the unique element with $t^\lambda\cdot w_\lambda=t_\lambda$;
existence and uniqueness hold because the action of $S_n$ on $\lambda$-tableaux
is free and transitive.

**Generators and modules.** For a partition $\lambda\vdash n$ put
$$x_\lambda:=\sum_{w\in S_\lambda}T_w,\qquad y_\lambda:=\sum_{w\in S_\lambda}(-q)^{-\ell(w)}T_w,\qquad z_\lambda:=x_\lambda T_{w_\lambda}y_{\lambda'},$$
where $\lambda'$ is the conjugate partition of $\lambda$
([[def-partition-young-diagram-and-conjugate-partition]]). The **row
permutation module** is the right ideal $M(\lambda):=x_\lambda H\subseteq H$,
and the **ordinary Dipper-James polytabloid module** is
$P(\lambda):=z_\lambda H\subseteq M(\lambda)$; $z_\lambda$ is its polytabloid
generator.

**The forms.** The **permutation form** is the $R$-bilinear form $\beta$ on
$M(\lambda)$ determined on the distinguished family
$\{x_\lambda T_d:d\in D_\lambda\}$ by
$$\beta(x_\lambda T_d,x_\lambda T_e)=\delta_{d,e}q^{\ell(d)}\qquad(d,e\in D_\lambda),$$
and the **DJ form** is the restriction of $\beta$ to $P(\lambda)$. That family
is an $R$-basis of $M(\lambda)$
([[lem-dj-bridge-row-permutation-module-standard-action]]), so the displayed
values define a unique bilinear form; the family is $\{x_\varnothing\}=\{1\}$
for the empty partition.

**Small cases and base change.** For $\lambda=\varnothing$ set
$x_\varnothing=y_\varnothing=z_\varnothing=1$, so that
$M(\varnothing)=P(\varnothing)=R$ and $\beta$ is the standard form; for
$n=0,1$ there are no generators and $H=R$. Every base change
$A=\mathbb Z[v^{\pm1}]\to R$, $v\mapsto q$, with $q\in R^\times$, produces all
objects above over $R$ by the same formulas; the suppliers of this page prove
that the distinguished families and the form are compatible with such base
change. No choice principle is used.

## Remarks

- **Normalization dictionary.** Fayers' Section 2.1 list of notation is the
  source of the displayed formulas, in the normalization
  $(T_i-q)(T_i+1)=0$ used here. Heard-Kujawa use the symmetric normalization
  $(T_i-q)(T_i+q^{-1})=0$ with $x_\lambda=\sum_{w\in S_\lambda}q^{\ell(w)}T_w$;
  their generator $z_\lambda=x_\lambda T_{\sigma_\lambda}y_{\lambda^{\mathsf T}}$
  and their standard-basis indexing by standard tableaux of the transposed
  shape match the construction here, but the exact coefficients differ and only
  the combinatorial shape of the construction is taken from that source.
  Mathas' Chapter 3 uses the same normalization as this item.

- **Orientation of the dictionaries.** Fayers lets functions act on the
  right. Interpreting the source's label $j\sigma$ as $\sigma^{-1}(j)$ in
  the library's function-composition convention gives exactly the right
  tableau action used here. Reduced words in the adjacent transpositions
  then identify the algebra presentations and their coset and tableau indices.

- **Definitional scope of the form.** The permutation form is fixed here by its
  values on the distinguished basis and is a chosen contravariant form; its
  restriction to $P(\lambda)$ is taken as the definition of the DJ form. The
  historical Dipper-James self-form on $S^\lambda$ is this restriction, not an
  additional source claim, and nondegeneracy of $\beta$ or of its restriction
  is not asserted here.

- **The empty and rank-zero cases.** For $\lambda=\varnothing$ the row group is
  $S_\varnothing=S_0=\{1\}$, the group $D_\varnothing=\{1\}$ is a singleton, and
  $M(\varnothing)=P(\varnothing)=R$ with basis $\{T_{\mathrm{id}}\}=\{1\}$, indexed by the identity of $S_0$.
