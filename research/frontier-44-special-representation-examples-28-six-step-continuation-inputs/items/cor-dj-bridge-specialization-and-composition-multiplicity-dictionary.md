---
id: cor-dj-bridge-specialization-and-composition-multiplicity-dictionary
kind: corollary
title: "Polytabloid specialization and the exact signed multiplicity dictionary"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       def-integral-specht-lattice-and-base-change, lem-conjugate-specht-sign-duality-over-fields,
       def-generic-type-a-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra,
       thm-the-symmetric-group-has-the-coxeter-presentation,
       def-dj-bridge-row-column-permutation-modules-and-polytabloids,
       lem-dj-bridge-row-permutation-module-standard-action,
       lem-dj-bridge-integral-murphy-and-polytabloid-straightening,
       thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual,
       lem-dj-bridge-sign-automorphism-and-star-dual,
       lem-dj-bridge-murphy-cellular-basis-and-cell-form]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978; author-hosted scan"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "Ordinary polytabloid Specht modules, the standard basis and the conjugate-sign duality; the q=1 clause below is the specialization of the Hecke comparison at this classical point."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1 (survey), 66 PDF pages"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 5.3, Remark 5.5 (PDF p. 24): the conjugate-sign simple dictionary, used to orient the label comparison; no multiplicity statement is imported from it."
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-27 (PDF pp. 24-33): the row, Specht and Murphy cell modules with their forms, and the sign-twist normalization of the comparison."
---

## Statement

Assume the isomorphism $\Phi_\lambda$ and the exact unit identity of [[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]. Then:

1. For every commutative ring $R$ and $q=1$, the module $P(\lambda)$ identifies with the ordinary integral-polytabloid Specht module $R\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}$ of [[def-integral-specht-lattice-and-base-change]], with the classical left action converted to a right action by $x\cdot w=w^{-1}x$: the basis $\{e_t=z_\lambda T_{d_{\lambda'}(t)}\}$ specializes to the standard polytabloid basis and the DJ form to the standard tabloid form. The sign automorphism $\theta$ becomes the pullback along the sign twist $w\mapsto\operatorname{sgn}(w)w$ of $R[S_n]$. Over every field $F$, this specialization is compatible with the conjugate-sign dictionary of [[lem-conjugate-specht-sign-duality-over-fields]].

2. For a field $F$, a unit $q\in F^\times$ and partitions $\mu,\lambda\vdash n$ with $D^{\mu'}_{\mathrm M}\ne0$ one has $[P(\lambda):D^{\mu}_{\mathrm{DJ}}]=[C_{\mathrm M}(\lambda'):D^{\mu'}_{\mathrm M}]$, and the simultaneous sign-automorphism pullback is the same $\theta$ on both sides: $(D^{\mu}_{\mathrm{DJ}})^\theta\cong D^{\mu'}_{\mathrm M}$.

3. Suppose a Schur-algebra corner is already proved to send the Weyl module $W(\lambda)$ to $C_{\mathrm M}(\lambda)$ and its head $L(\lambda)$ to $D^{\lambda}_{\mathrm M}$. Then that corner gives $F(W(\lambda'))\cong P(\lambda)^\theta$ and $F(L(\lambda'))\cong(D^{\lambda}_{\mathrm{DJ}})^\theta$, including the zero case; this is the $\theta$-twisted conjugate dictionary, never the untwisted conjugate-dual identity. No Schur-algebra theorem and no source-20 convention is a prerequisite of this conditional dictionary.

No choice principle is used.

## Facts & Assumptions

**Given:** A field $F$ or a commutative ring $R$ with a unit $q$, a partition $\lambda\vdash n$, the module $P(\lambda)=z_\lambda H$ with its basis $\{e_t\}$, its DJ form and its form quotient $D^{\lambda}_{\mathrm{DJ}}$, the cell module $C_{\mathrm M}(\lambda')$ with basis $\{m_t\}$ and form quotient $D^{\lambda'}_{\mathrm M}$, the sign automorphism $\theta$, and the isomorphism and unit identity of [[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]].

[F1] $\Phi_\lambda\colon P(\lambda)\to C_{\mathrm M}(\lambda')^\theta$ is an $H$-module isomorphism with $G_{\lambda'}^\theta(\Phi_\lambda x,\Phi_\lambda y)=u_\lambda(q)\beta_{P(\lambda)}(x,y)$ and $u_\lambda(q)=q^{\ell(w_0(S_{\lambda'}))-\ell(w_\lambda)}$ ([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]).

[F2] $\theta$ is the involutive sign automorphism; the twist $M^\theta$ has action $m\cdot h=m\theta(h)$, is exact, preserves composition multiplicities and maps simple modules to simple modules; at $q=1$ over a field, $\theta$ is the pullback along $w\mapsto\operatorname{sgn}(w)w$ ([[lem-dj-bridge-sign-automorphism-and-star-dual]]).

[F3] $S^\lambda_{\mathbb Z}$ has the standard polytabloids as a $\mathbb Z$-basis and is base-change compatible: for every commutative ring $R$ the canonical map $R\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}\to R\otimes_{\mathbb Z}M^\lambda_{\mathbb Z}$ is injective onto the span of the polytabloids in the tabloid module, and the standard polytabloids form an $R$-basis of the image ([[def-integral-specht-lattice-and-base-change]]).

[F4] The conjugate-sign dictionary $S^\lambda_F\otimes\operatorname{sgn}\cong(S^{\lambda'}_F)^*$ holds over every field, with the explicit sign-twisted tabloid homomorphism ([[lem-conjugate-specht-sign-duality-over-fields]]).

[F5] The Hecke algebra has presentation $(T_i-q)(T_i+1)=0$, braid and distant commutation, with standard basis $(T_w)_w$; $S_n$ has the Coxeter presentation $s_i^2=1$ with the same braid and distant commutation relations ([[def-generic-type-a-hecke-algebra]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]], [[thm-the-symmetric-group-has-the-coxeter-presentation]]). The row-module and polytabloid bases are split and compatible with every coefficient-ring base change ([[lem-dj-bridge-row-permutation-module-standard-action]], [[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]]).

[F6] The Murphy cell law and the cell form are defined by formulas with coefficients in $\mathbb Z[q^{\pm1}]$ and commute with base change; the independent same-shape perfect pairing gives $C_{\mathrm M}(\rho)\cong P(\rho)^\circ$ ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]], [[thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]]).





## Proof

**Proof technique:** direct.

1.1 **The group algebra over every coefficient ring.** Let $R$ be any commutative ring and specialize at $q=1$. The Hecke relations become $T_i^2=1$, braid and distant commutation. The Coxeter presentation in [F5] therefore gives the homomorphism $H_{R,1}(S_n)\to R[S_n]$ carrying $T_i$ to $s_i$. A reduced word shows that it carries every $T_w$ to $w$. These are bases of the source and target over $R$, so the map is an isomorphism over $R$, including in positive characteristic and with zero divisors. Equivalently the assignment $s_i\mapsto T_i$ gives its inverse directly from the presentation. No complex-field specialization, dimension comparison over a field or semisimplicity is used. [F5, algebra]

1.2 **Multiplicities and zero quotients.** For a field and unit $q$, the unit form identity in [F1] identifies $D^{\mu}_{\mathrm{DJ}}$ with $(D^{\mu'}_{\mathrm M})^\theta$, including zero quotients. A nonzero cell-form quotient is simple: the cell rank-one action shows that every vector outside its radical generates the cell module, so the radical is its unique maximal submodule. Thus when $D^{\mu'}_{\mathrm M}\ne0$, the module $D^{\mu}_{\mathrm{DJ}}$ is a legitimate simple composition-factor label. Applying the exact twist equivalence in [F2] to a composition series and using [F1] gives $$[P(\lambda):D^{\mu}_{\mathrm{DJ}}]=[C_{\mathrm M}(\lambda')^\theta:D^{\mu}_{\mathrm{DJ}}]=[C_{\mathrm M}(\lambda'):(D^{\mu}_{\mathrm{DJ}})^\theta]=[C_{\mathrm M}(\lambda'):D^{\mu'}_{\mathrm M}].$$ This proves clause 2. If a form is identically zero, only its zero form quotient is asserted; no claim is made that the actual module head vanishes. [F1, F2, F6, algebra]

2.1 **The actual polytabloids and the forms.** Give the classical tabloid module the right action $\{t\}\cdot w=\{w^{-1}\cdot t\}=\{t\cdot w\}$. The map $b_d=x_\lambda T_d\mapsto\{t^\lambda\cdot d\}$ sends the distinguished basis to the tabloid basis. It respects the right action: at $q=1$ the row-module multiplication rule is simply the permutation of these cosets, with a same-row transposition acting as $1$. Every diagonal value of $\beta$ becomes $1$, so this is an isometry to the orthonormal tabloid form. The column group of the column-filled tableau $t_\lambda$ is exactly $S_{\lambda'}$, because its columns carry the consecutive row blocks of $\lambda'$. Hence $z_\lambda=x_\lambda w_\lambda\sum_{u\in S_{\lambda'}}\operatorname{sgn}(u)u$ maps to $\sum_u\operatorname{sgn}(u)\{t_\lambda\cdot u\}$, the classical column polytabloid of $t_\lambda$ (replace $u$ by $u^{-1}$ to compare with the left-action formula). Covariance shows $e_t=z_\lambda d_{\lambda'}(t)$ maps to the polytabloid of $t_\lambda\cdot d_{\lambda'}(t)=t'$, the transpose of the standard $\lambda'$-tableau $t$. Thus the actual standard bases correspond bijectively. By the split integral classical basis in [F3] and the split Hecke basis in [F5], this identifies $P(\lambda)$ with $R\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}$ over every $R$, and the restricted DJ form with the restricted tabloid form. [F3, F5, F6, step 1.1, algebra]

3.1 **The exact position of the twist.** At $q=1$, [F2] gives $\theta(T_i)=-T_i$, hence $\theta(w)=\operatorname{sgn}(w)w$. Therefore the right module $P(\lambda)^\theta$ is the sign tensor twist. Applying the involution $\theta$ to [F1] yields $$P(\lambda)^\theta\cong C_{\mathrm M}(\lambda'),$$ without a remaining twist on the Murphy cell. Combining this with the independent same-shape pairing in [F6] gives $P(\lambda)^\theta\cong P(\lambda')^\circ$. Under step 2.1, star dual is the ordinary group contragredient dual, so this is exactly the module identity $S_F^\lambda\otimes\operatorname{sgn}\cong(S_F^{\lambda'})^*$ of [F4] after converting the published left modules to right modules. This asserts the same compatible module dictionary, not an unproved equality of separately normalized explicit maps. In characteristic $2$ the sign becomes trivial at $q=1$; conjugation remains part of the identity. [F1, F2, F4, F6, step 2.1, algebra]

4.1 **Conditional Schur dictionary and conclusion.** Under the stated separate hypothesis on a Schur corner, its images at $\lambda'$ are $C_{\mathrm M}(\lambda')$ and $D^{\lambda'}_{\mathrm M}$. The untwisted Murphy identities from step 3.1 and [F1], valid for arbitrary unit $q$ by involutivity of $\theta$, identify these with $P(\lambda)^\theta$ and $(D^{\lambda}_{\mathrm{DJ}})^\theta$, including the zero quotient. This proves clause 3 without a Schur theorem as a prerequisite. The actual nonzero Schur head and the Hecke cell-form quotient are distinct notions when the corner kills the former. For the empty shape, the generators, forms, twists and all isomorphisms have value $1$. All bases, maps and scalar identities are explicit and use no choice principle. [F1, F2, F6, step 2.1, step 3.1, step 1.2, algebra] ∎

