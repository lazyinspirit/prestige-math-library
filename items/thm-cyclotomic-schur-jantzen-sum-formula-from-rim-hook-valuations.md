---
id: thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations
kind: theorem
title: "Cyclotomic Schur Jantzen sum formula from rim-hook valuations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 25
deps: [def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage,
       lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms,
       lem-dvr-cellular-jantzen-filtration-and-gram-valuation,
       lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes,
       lem-laurent-binomial-valuation-at-one-over-any-field,
       lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums,
       def-grothendieck-group-of-an-essentially-small-abelian-category,
       lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms,
       def-opposite-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451v4"
      locator: "Extracted text PDF pp. 5–6, Definition 2.5 and Theorem 2.6 actually read; original Jucys–Murphy full proof unread, complete independent local alternative supplied."
    - title: "Mathas, Seminormal forms and Gram determinants for cellular algebras, math/0604108v4"
      url: "https://arxiv.org/pdf/math/0604108v4"
      locator: "Example 2.17 PDF pp. 7–8 and Theorem 3.12/Remark 3.13 PDF pp. 12–13 actually read; general strategy only, explicit Schur proof local."
---

## Statement

Let $F$ be any field, let $q_H\in F^\times$ have finite multiplicative order
$e\ge2$, let $\ell\ge1$ be arbitrary and let $Q_a=q_H^{c_a}$ with charges
$c_a\in\mathbb Z$. Fix $n\ge0$ and let $S_F$ be the cyclotomic $q$-Schur
algebra over $F$ with summands indexed by all $\ell$-multipartitions of $n$.
Put
$$\mathcal O=F[t,t^{-1}]_{(t-1)},\qquad \pi=t-1,\qquad K=F(t),\qquad z=q_Ht,\qquad U_a=Q_at^{na}.$$
Let $\Delta_{\mathcal O}(\lambda)$ be the standard Weyl lattice with its actual
cellular form, and define
$$\Delta_{\mathcal O}(\lambda)(s)=\{v:\langle v,\Delta_{\mathcal O}(\lambda)\rangle\subseteq\pi^s\mathcal O\},\qquad \Delta_F(\lambda)^s=\bigl(\Delta_{\mathcal O}(\lambda)(s)+\pi\Delta_{\mathcal O}(\lambda)\bigr)/\pi\Delta_{\mathcal O}(\lambda).$$
Then $(\Delta_F(\lambda)^s)_{s\ge0}$ is a filtration by $S_F$-submodules, its
first term is $\operatorname{rad}\Delta_F(\lambda)$ and the filtration
terminates, and in the integer Grothendieck group of finite-dimensional
$S_F$-modules,
$$\sum_{s>0}[\Delta_F(\lambda)^s]=\sum_\mu J_{\lambda\mu}[\Delta_F(\mu)].$$
For a node $x=(i,j,a)$ define the rim hook $r_x^\lambda$ and its foot
$f_x^\lambda=(\lambda'_j,j,a)$ as in Lyle–Mathas,
$\operatorname{leg}(r_x^\lambda)=\lambda'_j-i$, and
$\operatorname{res}_{\mathcal O}(i,j,a)=U_az^{j-i}$. If $\lambda$ strictly
dominates $\mu$, set
$$J_{\lambda\mu}=\sum_{\substack{x\in[\lambda],\ y\in[\mu]\\{}[\lambda]\setminus r_x^\lambda=[\mu]\setminus r_y^\mu}} (-1)^{\operatorname{leg}(r_x^\lambda)+\operatorname{leg}(r_y^\mu)} \nu_\pi\bigl(\operatorname{res}_{\mathcal O}(f_x^\lambda)-\operatorname{res}_{\mathcal O}(f_y^\mu)\bigr),$$
and set $J_{\lambda\mu}=0$ otherwise. Equal remainder diagrams force equal
hook lengths. Every displayed difference is nonzero in $K$, including
same-component terms with distinct labels, by the foot-exponent separation
argument; no level-one or characteristic-zero restriction is present.
The same statement holds for the right Schur standard modules, by applying
the argument to the opposite algebra $S^{\mathrm{op}}$
([[def-opposite-ring]]): $a^{\mathrm{op}}$ acts by right multiplication by
$a$ and $e_\nu M$ becomes $Me_\nu$, with the contravariant form unchanged.
At rank zero the sole form is $1$ and the asserted sum is $0$ directly, with
no word-separation hypothesis needed.

## Facts & Assumptions

**Given:** The actual arbitrary-level $q$-Schur construction [F1], the monic
Gram product [F2], the strip recursion and marked-strip commutator [F3], the
DVR Jantzen leaves [F4], and the Laurent valuation leaf [F5].

[F1] The actual multipartition construction: $S_{\mathcal O}$ is finite free
and cellular, $\Delta_{\mathcal O}(\lambda)$ is finite free with its
contravariant cellular form, every specialized standard has a nonzero unit
Gram entry $1$, the multipartition weight projections $e_\nu$ are selfadjoint
and act on the actual semistandard type-$\nu$ basis; over $K$ the Hecke and
Schur standards are split simple, so their forms are nondegenerate; the
standard classes form a $\mathbb Z$-basis of $K_0$ and their
multipartition-weight Kostka submatrix is unitriangular
([[thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage]],
[[lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms]],
[[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]).

[F2] The proved local monic Gram product: with the actual Specht Murphy form,
the dominance-minimal refinement $t_T$, the row symmetrizer coefficient
$C_{t_T}$ and the prefix polynomial eigenvalue $u_T$,
$$\det G_{\lambda\nu}=\prod_{T\in\operatorname{SStd}_\nu(\lambda)}\frac{\gamma_{t_T}}{C_{t_T}u_T}.$$
The inverse-permutation-operator proof inserts the essential $m_\nu$ inverse;
the spectral transition has determinant exactly $1$ and all denominators are
nonzero in the permitted $F(t)$
([[lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms]]).

[F3] The proved local pair-factor/strip recursion and the complete
marked-strip identity: adding the next type-row label to a shape $\rho$ gives
a permitted strip $\rho\to\lambda$ with factor $F^{(a)}_{\lambda\rho}$, whose
product over a tableau chain is the norm of [F2]; and the signed hook matrix
$J$, with all auxiliary ranks using the same fixed $z,U_a$, and the
coefficient-one strip matrix $\Gamma_a$ obey
$$\bigl(J_n\Gamma_a^{(n,m)}-\Gamma_a^{(n,m)}J_m\bigr)_{\lambda\rho} =\Gamma_a^{(n,m)}(\lambda,\rho)\,\nu_\pi\bigl(F_{\lambda\rho}^{(a)}\bigr),$$
on support and off support (the same-component cases and the crosscomponent
rank-one adjugate cases)
([[lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums]]).

[F4] The DVR leaves: the Jantzen filtration is contravariant-stable, its
first term is the reduced-form radical, equal to the module radical for these
nonzero-form cellular standards, Smith reduction gives finite termination and
$\sum_{s>0}\dim e_\nu\Delta_F(\lambda)^s=V(\det G_{\lambda\nu})$, and
exactness of the selfadjoint weight projection together with the
unitriangular multipartition Kostka matrix gives integer $K_0$ character
injectivity ([[lem-dvr-cellular-jantzen-filtration-and-gram-valuation]],
[[lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes]],
[[def-grothendieck-group-of-an-essentially-small-abelian-category]]).

[F5] For a nonzero Laurent difference $At^u-Bt^v$, unequal constants give
valuation $0$, while equal constants with $u-v\ne0$ give valuation $1$ in
characteristic zero and $p^{v_p(|u-v|)}$ in characteristic $p$
([[lem-laurent-binomial-valuation-at-one-over-any-field]]).

## Proof

**Proof technique:** direct.

**Given:** The arbitrary field, level, charges, actual Schur construction and deformation specified in the Statement.

1.1 Filtration and radical. For $n=0$ there is one empty multipartition, $S_{\mathcal O}=\mathcal O$, $\Delta_{\mathcal O}=\mathcal O$ with form $1$, every positive filtration term is $0$, and every $J$ coefficient is $0$, so the assertions follow directly. For $n\ge1$, [F1] gives free standard lattices with nondegenerate generic forms. The Smith reduction of [F4] shows that the defined filtration is by $S_F$-submodules, begins at $\Delta_F(\lambda)$, has first term equal to the form radical, and is zero for all sufficiently large $s$. The rank-one cell actions of the nonzero cellular form force every proper submodule into that radical, so the first term is the module radical. [given, F1, F4]

1.2 The auxiliary character identity. Introduce ordered variables for the type-row labels; the auxiliary generating series of flagged semistandard tableaux is the product over physical components $a$ of $s_{\lambda^{(a)}}(Y_a)$, where $Y_a$ is the alphabet of type components at least $a$, and its coefficient at an actual multipartition $\nu$ is $K_{\lambda\nu}$. Successive $\Gamma_a$ matrices add the horizontal strips carrying each next label and therefore enumerate these tableaux once; the path/Jacobi–Trudi cancellation proves this character identity locally. No actual Schur weight or module for another composition is needed. [F1, F3]

2.1 The weight-character reduction. Fix an actual multipartition weight $\nu$. The selfadjoint orthogonal decomposition by $e_\nu$ makes the standard weight space orthogonal to every other weight space, so [F4] gives $\sum_{s>0}\dim_Fe_\nu\Delta_F(\lambda)^s=V(\det G_{\lambda\nu})$. By [F2] and additivity of the valuation this is the sum over type-$\nu$ semistandard $T$ of the valuations of their explicit monic norms; empty weight spaces use determinant $1$ and contribute $0$. [F2, F4, step 1.1]

2.2 The beta form of the hook side. Pad the beta lists to $N>n$. Removing a hook of length $h$ lowers one beta bead by $h$ with sorting sign $(-1)^{\operatorname{leg}}$, and adding it raises a bead by $h$ with the corresponding sign; the foot content is the lowered bead position minus $N$ plus $1$, up to the unit foot-residue shift. Thus the full signed equal-length hook side is precisely the finite shifted-beta Jacobi–Trudi polynomial: same-component inward ranges, crosscomponent earlier-to-later ranges, occupied-position zero terms and the unit shift are all covered by [F3]. Its coefficient at $\nu$ is $\sum_\mu J_{\lambda\mu}K_{\mu\nu}$. [F3, step 1.2]

3.1 Telescoping the marked-strip commutator. Apply the complete local identity [F3] to the product of successive type-row $\Gamma$ matrices and telescope $J\Gamma-\Gamma J$, starting from the empty shape where $J_0=0$. Each commutator inserts exactly the valuation of the strip factor at that label position, while all other $\Gamma$ factors retain the same tableau chain; summing the inserted positions gives the total valuation of the product of the factors over the chain, hence of the monic norm by [F2] and [F3]. The left endpoint of the telescope is exactly the auxiliary polynomial of step 2.2, so at the actual multipartition coefficient $\nu$, $\nu_\pi(\det G_{\lambda\nu})=\sum_\mu J_{\lambda\mu}K_{\mu\nu}$. Every auxiliary rank keeps the final-rank-$n$ parameters $U_a=Q_at^{na}$, with no rank-dependent deformation substituted during the telescope. [F2, F3, step 2.2]

4.1 Exactness of the valuations. For a nonzero difference $At^u-Bt^v$, unequal constants give valuation $0$, and equal constants with $u-v\ne0$ give valuation $1$ in characteristic zero or $p^{v_p(|u-v|)}$ in characteristic $p$ by [F5]. Artificial padded symbols in the crosscomponent minor proofs cancel formally before evaluation, and the retained terms are actual valid hook or node pairs whose exponent bound makes their differences nonzero in $K$; hence step 3.1 is valid over every $F$ and retains the higher positive-characteristic multiplicities. [F3, F5, step 3.1]

5.1 The integer Grothendieck class identity. Combining steps 2.1 and 3.1 shows that the actual multipartition-weight character of $\sum_{s>0}[\Delta_F(\lambda)^s]$ equals that of $\sum_\mu J_{\lambda\mu}[\Delta_F(\mu)]$. Weight projection is exact, so these are additive characters on the integer $K_0$ group [F4], and the standard classes form its $\mathbb Z$-basis by [F1]; their multipartition-weight matrix is unitriangular, hence invertible over $\mathbb Z$. A zero difference of weight characters therefore has all standard coefficients zero, which proves the asserted integer $K_0$ equality, with no rationalization and no Schur-functor injectivity claim. [F1, F4, step 2.1, step 3.1] ∎

## Remarks

The theorem is the Jantzen sum formula for the cyclotomic $q$-Schur algebra in
the exact form needed by the block theory: the filtration is defined by the
integral cellular form, its radical identification and termination are DVR
leaves, and the character of the positive part is the signed rim-hook
valuation matrix acting on standard classes. No choice principle is used: all
lattices, filtrations, and coefficient sums are finite or finitely generated
over the DVR.
