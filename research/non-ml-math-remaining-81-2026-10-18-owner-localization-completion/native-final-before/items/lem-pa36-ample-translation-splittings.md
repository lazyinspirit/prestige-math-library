---
id: lem-pa36-ample-translation-splittings
kind: lemma
title: Ample translation maps split by central-character separation
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-g-linearization-of-an-invertible-sheaf
  - def-pa36-flag-tdo-and-module
  - def-sheaf-tensor-product
  - lem-pa36-complex-weight-central-character-separation
  - lem-pa36-flag-tdo-pbw-and-twist
  - lem-semisimple-flag-torsor-zariski-charts
  - thm-borel-weil
  - thm-pa36-global-twisted-differential-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§6.3, Theorems 6.3.1 and 6.3.3 with Lemma 6.3.2, printed pp. 94–96"
    - title: "Yi Sun, D-modules and representation theory"
      url: "https://yisun.io/notes/dmod.pdf"
      locator: "§4.7, Lemma 4.25, printed pp. 42–43; comparison only, its tensor-character shortcut is not used"
---

## Statement

Let $\kappa\in\mathfrak h^*$ and let $\eta$ be a sufficiently dominant
integral weight, so that $L_\eta=\mathcal O_X(-\eta)$ is ample. Put
$V_\eta=\Gamma(X,L_\eta)^*$, the finite-dimensional irreducible
representation of highest weight $\eta$. For any quasi-coherent left
$\mathcal D_\kappa$-module $M$, the natural coevaluation map
$$M\longrightarrow M\otimes L_\eta\otimes V_\eta$$
is a split injection of action-algebroid modules when $\kappa$ is
antidominant. The natural evaluation map
$$M\otimes V_\eta^*\longrightarrow M\otimes L_\eta$$
is a split surjection of action-algebroid modules when $\kappa$ is regular
antidominant. The tensor products in these two statements carry the diagonal
infinitesimal $\mathfrak g$-action and the corresponding $B$-linearization.

## Facts & Assumptions

**Given:** The setup above, an arbitrary quasi-coherent $M$, and either the
antidominance or the regular-antidominance hypothesis as appropriate.

[F1] $L_\eta$ is globally generated and ample; its space of sections is
finite-dimensional, and $V_\eta=\Gamma(L_\eta)^*$ is irreducible with
highest weight $\eta$ ([[thm-borel-weil]],
[[def-g-linearization-of-an-invertible-sheaf]]).

[F2] Every weight $\eta_j$ of $V_\eta$ satisfies
$\eta-\eta_j\in Q_+$, with equality only for the unique highest-weight line;
the B-stable weight filtration has one-dimensional successive quotients
([[thm-borel-weil]]).

[F3] Antidominant $\kappa$ forbids
$\kappa-w\kappa\in Q_+\setminus\{0\}$, while regular antidominant $\kappa$
forbids $\kappa-w\kappa\in Q_+$ for $w\ne1$
([[lem-pa36-complex-weight-central-character-separation]]).

[F4] Every quasi-coherent $\mathcal D_\nu$-module has exact central action
$\chi_\nu$ for every complex parameter $\nu$, and tensoring by an integral
line bundle shifts the TDO parameter by its weight
([[thm-pa36-global-twisted-differential-operators]],
[[lem-pa36-flag-tdo-pbw-and-twist]]).

[F5] $G\to X$ is a Zariski-locally trivial right $B$-torsor, so its local
sections give associated-module charts with $B$-equivariant transitions
([[lem-semisimple-flag-torsor-zariski-charts]]).

## Proof

1.1 First form the regular bimodule maps
$$u_\eta:\mathcal D_\kappa\longrightarrow
\mathcal D_\kappa\otimes L_\eta\otimes V_\eta,\qquad
v_\eta:\mathcal D_\kappa\otimes V_\eta^*\longrightarrow
\mathcal D_\kappa\otimes L_\eta,$$
using coevaluation and evaluation. They are left action-algebroid maps and
right $\mathcal D_\kappa$-linear, with the right action on the first factor.
Let $E(V_\eta)=G\times^B V_\eta$. The map
$[g,v]\mapsto(gB,gv)$ identifies it with the trivial vector bundle
$X\times V_\eta$ carrying the diagonal infinitesimal action. A B-stable
filtration of $V_\eta$ with one-dimensional quotients therefore gives a
filtration of $E(V_\eta)$ whose line quotients are
$\mathcal O_X(\eta_j)$, where $\eta$ is the unique highest weight and every
other weight satisfies $\eta-\eta_j\in Q_+\setminus\{0\}$ by [F1]–[F2].
On a local section of $G\to X$ from [F5], the PBW presentation of the regular
bimodules is the induced $U(\mathfrak g)$-module from the isotropy character
tensored with this filtered B-module. Its coevaluation quotients therefore
have central characters $\chi_{\kappa-\eta+\eta_j}$; the evaluation
quotients have central characters $\chi_{\kappa-\eta_j}$. This follows
because each quotient is the one-dimensional B-character $\eta_j$ before
induction, and the TDO parameter shifts by that character under [F4]; it is
not an appeal to a general tensor-character rule. The top-weight line in
$L_\eta\otimes E(V_\eta)$ is B-invariant and is the coevaluation image;
the quotient of $E(V_\eta)^*$ of weight $-\eta$ is the evaluation target.
[F1, F2, F4, F5, construct]

2.1 For the coevaluation map, the distinguished top quotient has character
$\chi_\kappa$. If any other quotient had this character, W-invariance of
Harish–Chandra characters would give some $w\in W$ with
$\kappa-w\kappa=\eta-\eta_j\in Q_+\setminus\{0\}$, contrary to [F3].
Hence the finite filtration has a unique generalized central-character
summand with character $\chi_\kappa$, and the coevaluation map identifies
$M$ with that summand. [F3, step 1.1, algebra]

3.1 For the evaluation map, the target has character $\chi_{\kappa-\eta}$.
If a source weight $\eta_j\ne\eta$ gave the same character, then for some
$w\in W$ one would have $\kappa-\eta_j=w(\kappa-\eta)$. Applying $w^{-1}$
and rearranging gives
$$\kappa-w^{-1}\kappa=\eta-w^{-1}\eta_j.$$
The right side lies in $Q_+$ because $w^{-1}\eta_j$ is again a weight of
$V_\eta$; if it is nonzero, [F3] forbids it, and if it is zero, regularity
in [F3] forces $w=1$, which then forces $\eta_j=\eta$, a contradiction.
Thus the target is exactly the unique generalized central-character summand
and the evaluation map splits onto it. [F2, F3, step 1.1, algebra]

4.1 For a finite filtration with distinct central characters, the product of
their maximal ideals in the commutative center annihilates the filtered
module. Distinct maximal ideals are pairwise comaximal, so the Chinese
remainder theorem supplies orthogonal idempotent projectors in the quotient
by their product. For coevaluation, its image is the top-weight subbundle
and its associated quotient is the distinguished character $\chi_\kappa$;
for evaluation, the target is the distinguished lowest-weight quotient
$\chi_{\kappa-\eta}$. By steps 2.1 and 3.1 each distinguished character
occurs in exactly one filtration quotient. The maps therefore identify
their sources or targets with the corresponding generalized
central-character summands. The projectors are polynomials in central
elements on the induced modules, so they are left $U(\mathfrak g)$-linear,
B-equivariant, and commute with the right $U(\mathfrak g)$ action because
the center is central. On a torsor chart from [F5], a B-equivariant map of
the associated fiber modules extends as
$\operatorname{id}_{\mathcal O_U}\otimes\pi$, so it is $\mathcal O_U$-linear.
Its $U(\mathfrak g)$-linearity makes it commute with the left
action-algebroid generators; centrality makes it commute with right
multiplication on the regular TDO factor. Hence it is a bimodule map on the
chart. B-equivariance makes the local maps agree on overlaps. They thus
split $u_\eta$ and $v_\eta$ as
$\mathcal D_\kappa$-bimodule maps. For arbitrary $M$, tensor these splittings
over the right $\mathcal D_\kappa$ action with $M$. A split map remains split
under any tensor functor, so this gives the asserted maps for all
quasicoherent $M$, without a flatness assumption. [F4, F5, step 1.1,
step 2.1, step 3.1, algebra, construct] ∎
