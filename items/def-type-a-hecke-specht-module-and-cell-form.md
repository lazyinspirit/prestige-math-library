---
id: def-type-a-hecke-specht-module-and-cell-form
kind: definition
title: "The type-A Hecke Specht module and its cell form"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cellular-algebra-basis-and-cell-module, def-murphy-elements-and-murphy-tableau-elements, def-e-regular-and-e-restricted-partitions, def-partition-young-diagram-and-conjugate-partition, lem-cell-form-is-associative-and-its-radical-is-a-submodule, thm-murphy-tableau-elements-form-a-cellular-basis, lem-dj-bridge-sign-automorphism-and-star-dual, thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual, thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell, cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]
justified_by: [thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 20-34: the Murphy cellular basis (Theorem 3.18), its cell modules and form, the sign automorphism and the notes on the dual/conjugate normalizations (in particular the warning on printed p. 25 and Note 3 on printed p. 34)"
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, complete 66-page survey"
      url: "https://arxiv.org/abs/0909.4844"
      locator: "Remark 5.5, printed p. 24: the comparison D^{mu} ~= D(mu^t) tensor sgn between the two labelings"
---

## Definition

Let $R$ be a commutative ring and $q\in R^{\times}$. With the Murphy cellular
basis $(\mathcal M,\Lambda)$ of $H=H_{R,q}(S_n)$
([[thm-murphy-tableau-elements-form-a-cellular-basis]],
[[def-cellular-algebra-basis-and-cell-module]]) and the canonical tableau
$t^\lambda$ of shape $\lambda\vdash n$
([[def-murphy-elements-and-murphy-tableau-elements]]), the **Murphy cell
module** $S^{\lambda}_{\mathrm M}$ is the right cell module $C^{\lambda}$ of the
Murphy basis: it is the free $R$-module with basis
$\{m_t:=m_{t^\lambda t}:t\in\mathrm{Std}(\lambda)\}$ - the classes of the
Murphy elements whose *first* index is the canonical tableau - and $H$ acts by
$m_th=\sum_vr_vm_v$ whenever
$m_{t^\lambda t}h\equiv\sum_vr_vm_{t^\lambda v}\pmod{H^{\rhd\lambda}}$. (The
cellular action rule transforms the second index and fixes the first, so the
cell module is defined using the fixed-first-index family above;
the diagonal span in $H$ need not be stable under multiplication. For
$\lambda=(n)$ it is stable, since $m_\lambda T_i=q m_\lambda$.) Its **cell form** is the unique bilinear
form $\langle\ ,\ \rangle_\lambda:S^{\lambda}_{\mathrm M}\times
S^{\lambda}_{\mathrm M}\to R$ with
$$m_{us}m_{tv}\equiv\langle m_s,m_t\rangle_\lambda\,m_{uv}\pmod{H^{\rhd\lambda}}$$
for all $s,t,u,v\in\mathrm{Std}(\lambda)$; it is symmetric and associative and
$\mathrm{rad}\,S^{\lambda}_{\mathrm M}$ is a submodule, so
$D^{\lambda}_{\mathrm M}:=S^{\lambda}_{\mathrm M}/\mathrm{rad}\,S^{\lambda}_{\mathrm M}$
is a right $H$-module
([[lem-cell-form-is-associative-and-its-radical-is-a-submodule]]).

**Convention (Dipper-James signed cellular normalization).** Let $\theta:H\to H$
be the involutive algebra automorphism defined by
$\theta(T_i)=-qT_i^{-1}=(q-1)-T_i$
([[lem-dj-bridge-sign-automorphism-and-star-dual]]). For a right module $M$,
write $M^\theta$ for the same $R$-module with action $x\cdot h=x\theta(h)$. The
page's ordinary Specht normalization is the signed conjugate Murphy
construction
$$S^{\lambda}:=(S^{\lambda'}_{\mathrm M})^\theta,$$
where $\lambda'$ is the conjugate partition ([[def-partition-young-diagram-and-conjugate-partition]]). Its form is the form of
$S^{\lambda'}_{\mathrm M}$ on the same underlying module; because $\theta$
commutes with $*$ this is associative for the twisted action
([[lem-dj-bridge-sign-automorphism-and-star-dual]]). Over a field put
$$D^{\lambda}:=S^{\lambda}/\operatorname{rad}_{\rm form}S^{\lambda}=(D^{\lambda'}_{\mathrm M})^\theta.$$
Thus $S^{\lambda'}_{\mathrm M}=(S^{\lambda})^\theta$ and
$D^{\lambda'}_{\mathrm M}=(D^{\lambda})^\theta$; conjugation alone does not
identify these modules
([[thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]],
[[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]). At
$q=1$, $\theta(\sigma)=\operatorname{sgn}(\sigma)\sigma$, so these identities
contain tensoring with sign; in characteristic $2$ the sign twist becomes
trivial at $q=1$
([[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]]).
The nonzero quotients in this signed normalization have $e$-regular labels
by [[thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]]:
that theorem proves the nonzero Murphy quotient criterion in $e$-restricted
labels, and conjugation makes these precisely $e$-regular labels
([[def-e-regular-and-e-restricted-partitions]]). No generic root-of-unity
Hecke claim is inferred from the published prime-characteristic group-only sign
dictionary, and no semisimplicity or choice principle is assumed.
