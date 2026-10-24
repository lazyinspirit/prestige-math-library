---
id: lem-pa36-ample-translation-splittings
kind: lemma
title: Ample translation maps split by central-character separation
status: published
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
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - thm-harish-chandra-isomorphism-for-the-center
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
$$M\longrightarrow M\otimes_{\mathcal O_X}L_\eta\otimes_{\mathbb C}V_\eta$$
is a split injection of sheaves of complex vector spaces when $\kappa$ is
antidominant. The natural evaluation map
$$M\otimes_{\mathbb C}V_\eta^*\longrightarrow M\otimes_{\mathcal O_X}L_\eta$$
is a split surjection of such sheaves when $\kappa$ is regular
antidominant. The maps and their splittings commute with the diagonal
$U(\mathfrak g)$-actions and are natural in $M$. The tensor factors
$L_\eta,V_\eta$ carry their specified $G$-linearizations; no $B$-action on
arbitrary $M$ is assumed. The splittings need not be $\mathcal O_X$-linear.
These sheaf splittings suffice for the induced split maps on cohomology.

## Facts & Assumptions

**Given:** The setup above, an arbitrary quasi-coherent $M$, and either the
antidominance or the regular-antidominance hypothesis as appropriate.

[F1] $L_\eta$ is globally generated and ample; its space of sections is
finite-dimensional, and $V_\eta=\Gamma(L_\eta)^*$ is irreducible with
highest weight $\eta$ ([[thm-borel-weil]],
[[def-g-linearization-of-an-invertible-sheaf]]).

[F2] Every weight $\eta_j$ of $V_\eta$ satisfies
$\eta-\eta_j\in Q_+$, with equality only for the unique highest-weight line;
one can order its weight lines to give a $B$-stable filtration
([[thm-borel-weil]]).

[F3] Antidominant $\kappa$ forbids
$\kappa-w\kappa\in Q_+\setminus\{0\}$, while regular antidominant $\kappa$
forbids $\kappa-w\kappa\in Q_+$ for $w\ne1$
([[lem-pa36-complex-weight-central-character-separation]]).

[F4] Every quasi-coherent $\mathcal D_\nu$-module has exact central action
$\chi_\nu$, and tensoring by an integral line bundle shifts the TDO
parameter by its weight
([[thm-pa36-global-twisted-differential-operators]],
[[lem-pa36-flag-tdo-pbw-and-twist]]).

[F5] In a commutative ring, finitely many pairwise comaximal ideals give a
surjection onto the product of their quotient rings; its kernel is their
product ([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

[F6] Harish–Chandra identifies the center with Weyl-invariant polynomials
in the shifted parameter, so two shifted characters are equal exactly when
their parameters lie in the same Weyl orbit
([[thm-harish-chandra-isomorphism-for-the-center]]). Indeed distinct finite
orbits are separated by polynomial interpolation on their finite union,
then averaging over the finite Weyl group makes the separator invariant.



## Proof

1.1 Form the finite $G$-equivariant bundle $E(V_\eta)=G\times^B V_\eta$. The map $[g,v]\mapsto(gB,gv)$ identifies it with the trivial bundle $X\times V_\eta$ with its diagonal $G$-action. Choose a weight basis in each weight space and order the weights with higher weights first. Positive root operators raise weights, so the resulting complete filtration is $B$-stable and its successive quotient lines have characters $\eta_j$ as in [F2]. Association to $G\to X$ is exact on this finite filtration: on every torsor chart it is tensoring a sequence of complex vector spaces with $\mathcal O_X$. Its quotient line bundles are $\mathcal O_X(\eta_j)$, with highest line $\mathcal O_X(\eta)$. Tensoring this bundle filtration with arbitrary $M$ remains exact, since each quotient is locally free. [F1, F2, construct]

2.1 The coevaluation $\mathcal O_X\to L_\eta\otimes E(V_\eta)$ is the highest line in this filtration; dually the evaluation $E(V_\eta)^*\to L_\eta$ is the quotient of weight $-\eta$. These are the duals of evaluation of the globally generated line bundle [F1], so they are respectively injective and surjective, locally split as vector-bundle maps. After tensoring with $M$ they give the maps in the Statement, with the same exact filtration positions. Each associated quotient of the first target is $M\otimes\mathcal O_X(-\eta+\eta_j)$, with central character $\chi_{\kappa-\eta+\eta_j}$ by [F4]. The evaluation source has quotients $M\otimes\mathcal O_X(-\eta_j)$ with characters $\chi_{\kappa-\eta_j}$; its target has character $\chi_{\kappa-\eta}$. All these filtrations are preserved by the diagonal $\mathfrak g$-action because their finite bundle factors are $G$-equivariant. [F1, F2, F4, step 1.1, construct]

3.1 For the coevaluation, every quotient other than its image has $\eta_j\ne\eta$. If its character were $\chi_\kappa$, equality of Harish–Chandra characters would give some $w\in W$ with $\kappa-w\kappa=\eta-\eta_j\in Q_+\setminus\{0\}$, contrary to [F3]. Thus the image is the sole filtration quotient with character $\chi_\kappa$. This argument applies to the actual filtered module involving $M$, not to a supposed tensor-character identity for an unfiltered arbitrary tensor product. [F2, F3, F6, step 2.1, algebra]

3.2 For the evaluation, if $\eta_j\ne\eta$ had $\chi_{\kappa-\eta_j}=\chi_{\kappa-\eta}$, then $\kappa-\eta_j=w(\kappa-\eta)$ for some $w$. Rearranging gives $\kappa-w^{-1}\kappa=\eta-w^{-1}\eta_j\in Q_+$, since $w^{-1}\eta_j$ is again a weight of $V_\eta$. If the right side is nonzero, antidominance [F3] rules it out; if it is zero, regularity [F3] forces $w=1$ and hence $\eta_j=\eta$, a contradiction. Thus its target is the sole quotient with the distinguished character. [F2, F3, F6, step 2.1, algebra]

3.3 For a sheaf of complex vector spaces with a finite filtration of exact central-character quotients, a product of powers of their finitely many maximal ideals in $Z(U(\mathfrak g))$ annihilates the sheaf. Powers of distinct maximal ideals are comaximal: expand $1=(u+v)^{a+b-1}$ with $u+v=1$, $u$ in the first ideal and $v$ in the second. Thus [F5] gives central polynomial projectors onto the corresponding generalized-character summands. These polynomials act on sections by the diagonal differential $U(\mathfrak g)$-action, commute with restrictions and with $U(\mathfrak g)$, and hence are morphisms of sheaves of complex vector spaces. They are natural in $M$. They are generally differential operators rather than $\mathcal O_X$-linear maps; that stronger linearity is neither asserted nor needed. [F4, F5, step 2.1, algebra, construct]

4.1 By step 3.1 the distinguished projector on the coevaluation target has image exactly the injected copy of $M$: it is identity on that copy, and its induced action on the filtered quotient is zero. Composing with the inverse of this identification gives a sheaf retraction. By step 3.2 the distinguished summand of the evaluation source maps isomorphically onto its target, since the kernel has no such character; invert that restriction to get its sheaf section. Step 3.3 supplies all asserted naturality and $U(\mathfrak g)$-linearity. Applying sheaf cohomology to either split pair preserves its retraction or section, proving the final assertion. [step 3.1, step 3.2, step 3.3, algebra] ∎

