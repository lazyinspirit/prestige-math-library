---
id: def-polytabloid-specht-module-over-an-arbitrary-field
kind: definition
title: Integral and field-valued Specht modules
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-young-subgroup-tabloid-and-permutation-module, def-column-antisymmetrizer-polytabloid-and-specht-module, def-row-and-column-stabilizers-of-a-tableau, thm-sign-is-a-homomorphism, lem-polytabloid-covariance-and-column-sign]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Section 6, printed pp. 26-33"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Theorem 4.16, printed pp. 18-19, and Theorem 6.8, printed p. 26"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Throughout, $R$ is a commutative ring, $n\ge0$, and $\lambda\vdash n$ with
Young diagram $[\lambda]$. Tabloids, the left action
$\sigma\cdot\{t\}:=\{\sigma\cdot t\}$ of $S_n$ on the finite set
$\Omega_\lambda$ of $\lambda$-tabloids, and the complex tabloid module
$M^\lambda=\mathbb C^{(\Omega_\lambda)}$ are as in
[[def-young-subgroup-tabloid-and-permutation-module]]: rows are labelled and
the order of entries inside a row is forgotten.

**The tabloid module over $R$.** Put
$$M^\lambda_R:=R^{(\Omega_\lambda)},$$
the free left $R$-module with the tabloids as $R$-basis, and let $S_n$ act on
$M^\lambda_R$ by $R$-linear extension of
$\sigma\cdot\{t\}:=\{\sigma\cdot t\}$ on basis elements. The row-set
computation of [[def-young-subgroup-tabloid-and-permutation-module]] shows
that this rule is well defined on tabloids, and because the action on tableaux
is a left action, $\mathrm{id}\cdot\{t\}=\{t\}$ and
$\sigma\cdot(\tau\cdot\{t\})=(\sigma\tau)\cdot\{t\}$; hence $M^\lambda_R$ is a
left module over $S_n$ and over the group ring $R[S_n]$.

**Antisymmetrizers, polytabloids, and Specht modules.** Let $t$ be a
$\lambda$-tableau with column stabilizer $C_t$
([[def-row-and-column-stabilizers-of-a-tableau]]), and let
$\operatorname{sgn}:S_n\to\{+1,-1\}$ be the sign homomorphism
([[thm-sign-is-a-homomorphism]]); its values are read in $R$ through the
unique unital ring homomorphism $\mathbb Z\to R$. Define
$$\kappa_t:=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\,\gamma\ \in R[S_n],\qquad e_t:=\kappa_t\cdot\{t\}=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\,\{\gamma\cdot t\}\ \in M^\lambda_R,$$
and let
$$S^\lambda_R:=\operatorname{span}_R\{\,e_t:\ t\text{ is a }\lambda\text{-tableau}\,\}\ \subseteq M^\lambda_R.$$
All sums here are finite sums over the finite group $C_t$, so $\kappa_t$,
$e_t$ and $S^\lambda_R$ are well defined for every commutative ring $R$. For
the empty partition the empty tableau is the unique one and has
$C_t=\{1\}$, so $\kappa_t=1$, $e_t=\{\varnothing\}$ and
$S^\varnothing_R=R$. For every tableau $t$ one has $C_t\cap R_t=\{1\}$: a
permutation preserving every row set and every column set must fix the entry
in each row-column intersection, since each intersection contains a single
box. Hence the tabloids $\gamma\cdot\{t\}$, $\gamma\in C_t$, are distinct and
the coefficient of $\{t\}$ in $e_t$ is $1$. Thus $e_t\ne0$ whenever $R$ is
nonzero; if $R$ is the zero ring, then $M^\lambda_R=S^\lambda_R=0$ and
$e_t=0$.

**Covariance of the construction over $R$.** For every $\lambda$-tableau $t$
and every $\sigma\in S_n$,
$$\kappa_{\sigma\cdot t}=\sigma\kappa_t\sigma^{-1}\qquad\text{and}\qquad e_{\sigma\cdot t}=\sigma\cdot e_t,$$
and for every $\gamma\in C_t$ one has $\gamma\cdot e_t=\operatorname{sgn}(\gamma)e_t$.
Consequently $S^\lambda_R$ is an $R[S_n]$-submodule of $M^\lambda_R$, and for
any single $\lambda$-tableau $t$ the orbit of $e_t$ spans $S^\lambda_R$. These
identities are the ones published for $R=\mathbb C$ in
[[lem-polytabloid-covariance-and-column-sign]]; because the argument there
consists only of reindexing the finite sums over $C_t$ and over $C_{\sigma\cdot t}$,
it is valid verbatim over an arbitrary commutative ring. The two reindexings
are written out in the remarks below.

**Agreement with the complex Specht module.** For $R=\mathbb C$ the module
$M^\lambda_{\mathbb C}$, the element $\kappa_t$, the polytabloid $e_t$ and the
space $S^\lambda_{\mathbb C}$ coincide with $M^\lambda$, $\kappa_t$, $e_t$ and
$S^\lambda$ of [[def-column-antisymmetrizer-polytabloid-and-specht-module]]:
the tabloid set and the left action are the same, the permutation sign used
there is the sign of [[thm-sign-is-a-homomorphism]] transported along the
order-preserving relabelling described in that item, and the defining formulas
are identical. In particular every published statement about
$\kappa_t,e_t,S^\lambda$ applies to $S^\lambda_{\mathbb C}$.

## Remarks

- **The two reindexings.** First, $C_{\sigma\cdot t}=\sigma C_t\sigma^{-1}$:
a permutation $\gamma$ preserves each column set $\sigma(B_j)$ of
$\sigma\cdot t$ exactly when $\sigma^{-1}\gamma\sigma$ preserves each column
set $B_j$ of $t$. Reindexing the finite sum defining $\kappa_{\sigma\cdot t}$
by $\gamma=\sigma c\sigma^{-1}$ and using
$\operatorname{sgn}(\sigma c\sigma^{-1})=\operatorname{sgn}(c)$, which follows
from multiplicativity of the sign and
$\operatorname{sgn}(\sigma^{-1})=\operatorname{sgn}(\sigma)^{-1}=\operatorname{sgn}(\sigma)$
in $\{+1,-1\}$, gives
$\kappa_{\sigma\cdot t}=\sigma\kappa_t\sigma^{-1}$. Applying both sides to
$\{\sigma\cdot t\}$ and using
$\sigma^{-1}\cdot\{\sigma\cdot t\}=\{t\}$ gives
$e_{\sigma\cdot t}=\sigma\cdot e_t$. Second, reindexing the sum defining
$\kappa_t$ by $c\mapsto\gamma c$ for $\gamma\in C_t$ and using
multiplicativity of the sign gives $\gamma\kappa_t=\operatorname{sgn}(\gamma)\kappa_t$,
hence $\gamma\cdot e_t=\operatorname{sgn}(\gamma)e_t$.

- **Reasons for stating the construction over a commutative ring.** The
  restriction of a Specht module to $S_{n-1}$ has a removable-corner
  filtration over every field, and in positive characteristic that filtration
  need not split; the filtration and its modular failure are stated below on
  this page in terms of $S^\lambda_F$ for a general field $F$. The case
  $R=\mathbb Z$ records the integral lattice spanned by the polytabloids.

- **No choice is used.** The sums are over the finite group $C_t$, and the
  scalar extension $\mathbb Z\to R$ is unique, so no selection principle
  enters the definition.
