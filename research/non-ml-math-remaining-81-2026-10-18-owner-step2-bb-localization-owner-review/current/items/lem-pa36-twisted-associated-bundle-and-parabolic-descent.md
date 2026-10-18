---
id: lem-pa36-twisted-associated-bundle-and-parabolic-descent
kind: lemma
title: Exact twisted associated bundles and simple-parabolic descent
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - def-pa36-flag-tdo-and-module
  - def-verma-module
  - lem-pa36-flag-tdo-pbw-and-twist
  - lem-pa36-partial-flag-twist-product
  - lem-semisimple-flag-torsor-zariski-charts
  - thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§§4.10–4.12, Theorem 4.10.2 and formulas (4.12.1)–(4.12.2), §4.14, Proposition 4.14.1, and §8.3, printed pp. 85–87 and 102"
---

## Statement

Assume the complex simply connected semisimple setup, including the Axiom of
Choice, of [[def-pa36-flag-tdo-and-module]]. Let $S$ be $B$ or a minimal
parabolic $P_\alpha$, put $Y=G/S$, and let $\tau$ be an
$\operatorname{Ad}(S)$-invariant character of $\mathfrak s$. A
**twisted $(\mathfrak g,S)$-module of twist $\tau$** means a vector space
$H$ with a Lie representation $\pi:\mathfrak g\to\operatorname{End}H$ and
a rational $S$-representation $r$, such that
$$d r(x)=\pi(x)+\tau(x)\operatorname{id}_H\quad(x\in\mathfrak s),\qquad r(s)\pi(A)r(s)^{-1}=\pi(\operatorname{Ad}(s)A).$$
The weight $\tau$ can be complex; no rational character $s\mapsto s^\tau$
is presumed. Define $\mathcal A^S_\tau$ by the action-algebroid quotient on
$Y$ with isotropy character $\tau$, and define
$$\mathsf E^S_\tau(H)=G\times^S(H,r).$$
For infinite-dimensional rational modules, this is the associated
quasi-coherent sheaf, locally $\mathcal O_Y\otimes_{\mathbb C}H$.
Then $\mathsf E^S_\tau$ is an exact functor to quasi-coherent
$\mathcal A^S_\tau$-modules. For $S=B$,
$\mathcal A^B_{\kappa+\rho}=\mathcal D_\kappa$.

If $V$ is a finite-dimensional rational $G$-module, use the diagonal Lie
and $S$ actions on $H\otimes V$. Then
$$\mathsf E^S_\tau(H\otimes V)\cong \mathsf E^S_\tau(H)\otimes_{\mathbb C}V,$$
where the differential action on the right acts only on the first factor:
constant vectors in $V$ are horizontal. In particular, with
$M(\lambda)=U(\mathfrak g)\otimes_{U(\mathfrak b)}\mathbb C_\lambda$,
$$\mathsf E^B_{\kappa+\rho}(M(-\kappa-\rho))\cong\mathcal D_\kappa, \qquad \mathsf E^B_{\kappa+\rho}(M(-\kappa))\cong \mathcal D_\kappa\otimes_{\mathcal O_X}\mathcal O_X(\rho).$$
In these formulas the rational $B$-action is the adjoint action on the
induced module with its highest vector of twisted weight $0$ or $\rho$,
respectively; the tensor product on the last right-hand side uses the right
$\mathcal O_X$-action on $\mathcal D_\kappa$.

Finally suppose $\langle\kappa,\alpha^\vee\rangle=0$ and $H$ is twisted
$(\mathfrak g,P_\alpha)$ of twist $\kappa$. Let
$N=\mathsf E^{P_\alpha}_\kappa(H)$, a module over the partial TDO
$\mathcal D^\alpha_{\kappa-\rho}$ of
[[lem-pa36-partial-flag-twist-product]]. Restrict its rational action to
$B$ and tensor that rational action by the integral character $\rho$;
with unchanged $\pi$ this makes $H$ twisted of twist $\kappa+\rho$.
For this latter structure,
$$\mathsf E^B_{\kappa+\rho}(H)\cong \mathcal O_X(\rho)\otimes p_\alpha^\dagger N.$$
Here $p_\alpha^\dagger$ is ordinary differential inverse image, with local
underlying sheaf $\mathcal O_{\mathbb P^1}\boxtimes N$.

## Facts & Assumptions

**Given:** The group, subgroups, character, twisted module and finite
$G$-module in the statement; morphisms of twisted modules intertwine both
the Lie and rational group actions.

[F1] $G\to G/S$ has Zariski-local sections and their transition maps lie
in $S$; associated sheaves are locally $\mathcal O\otimes H$
([[lem-semisimple-flag-torsor-zariski-charts]]).

[F2] The action-algebroid PBW basis identifies its isotropy-character
quotient with a TDO. Integral line-bundle tensoring shifts the character
by its weight ([[lem-pa36-flag-tdo-pbw-and-twist]]).

[F3] Ordered PBW monomials identify a Verma module with
$U(\mathfrak n^-)\otimes\mathbb C_\lambda$
([[def-verma-module]],
[[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]).

[F4] The partial TDO has isotropy character $\kappa$ and its pullback has
parameter $\kappa-\rho$; ordinary inverse image has the local relative
$\mathcal O_{\mathbb P^1}$ factor
([[lem-pa36-partial-flag-twist-product]]).

## Proof

1.1 The relation $[gs,h]=[g,r(s)h]$ defines the associated sheaf by [F1]; rationality means every vector belongs to a finite-dimensional rational $S$-submodule, so the construction is the filtered union of the usual finite-rank associated bundles. On a torsor section it is precisely $\mathcal O_Y\otimes H$. A short exact sequence of twisted modules therefore becomes a short exact sequence of sheaves, since tensoring over $\mathbb C$ is exact. Equivariant morphisms give the same local maps on all charts. [F1, given, construct]

2.1 Let $\beta(A)$ be the infinitesimal $G$-action on the associated sheaf. Define an $\mathcal O_Y$-linear action by $$\gamma(A)[g,h]=[g,\pi(\operatorname{Ad}(g^{-1})A)h].$$ The covariance hypothesis makes this independent of replacing $g$ by $gs$. Differentiating covariance gives $[\beta(A),\gamma(A')]=\gamma([A,A'])$; the representation property gives $[\gamma(A),\gamma(A')]=\gamma([A,A'])$. Consequently $a(A)=\beta(A)-\gamma(A)$ satisfies $$[a(A),f]=A_Y(f),\qquad [a(A),a(A')]=a([A,A']).$$ At the base point, an isotropy element $x\in\mathfrak s$ acts by $dr(x)-\pi(x)=\tau(x)$; transport gives the same isotropy relation at every point. Thus $a$ factors through $\mathcal A^S_\tau$. The displayed identities also show that maps in step 1.1 are differential-module maps, proving exactness of the differential functor. [F1, F2, step 1.1, algebra]

3.1 The associated-bundle map for a finite $G$-module is $$[g,h\otimes v]\longmapsto[g,h]\otimes gv.$$ It respects the $S$ relation; its inverse sends $[g,h]\otimes w$ to $[g,h\otimes g^{-1}w]$. Under this map $\beta$ becomes $\beta_H\otimes1+1\otimes dV$, because the $G$-equivariant structure on the trivial bundle has the diagonal $G$-action. Likewise $\gamma$ becomes $\gamma_H\otimes1+1\otimes dV$: the identity $g\,dV(\operatorname{Ad}(g^{-1})A)\,g^{-1}=dV(A)$ gives its second summand. Subtraction cancels these finite-representation terms exactly. Thus $a=a_H\otimes1$, with the Leibniz rule on function coefficients, and constant vectors of $V$ are horizontal. This proves the asserted identity as a differential-module identity, not merely as an equivariant bundle identity. [step 2.1, algebra]

3.2 More generally fix an integral $B$-weight $\eta$ and put $\tau=\kappa+\rho$. On $M(-\tau+\eta)$ define the rational $B$-action by conjugating the $U(\mathfrak g)$ factor and letting the highest vector have weight $\eta$. The infinitesimal action is $\pi+\tau$: commuting $x\in\mathfrak b$ past the enveloping factor leaves the scalar $(-\tau+\eta)(x)$ on the highest vector, whereas the rational action leaves $\eta(x)$. Its rationality follows from the finite-dimensional adjoint filtration of $U(\mathfrak g)$ and the rational character $\eta$. The highest line gives a line subbundle $\mathcal O_X(\eta)$ of the associated sheaf. Apply the differential action to obtain $\mathcal D_\kappa\otimes_{\mathcal O_X}\mathcal O_X(\eta) \to\mathsf E^B_\tau(M(-\tau+\eta))$. Locally on a torsor section, filter both sides by the degree of the negative-root PBW monomials. On the right, $\gamma$ supplies those monomials with sign $-1$ and $\beta$ preserves the associated filtration; hence the leading map sends a degree-$d$ tangent monomial to $(-1)^d$ times the corresponding Verma monomial. By [F2]–[F3] this is an isomorphism of symmetric tangent modules. Induction on degree therefore proves the filtered map is an isomorphism. The cases $\eta=0,\rho$ are the claimed formulas. [F1, F2, F3, step 2.1, algebra]

3.3 For twisted $(\mathfrak g,P_\alpha)$-module $H$ of twist $\kappa$, the character $\kappa$ is defined on $\mathfrak p_\alpha$ because its $\alpha$-coroot pairing is zero. The construction of steps 1.1 and 2.1 on $Y=G/P_\alpha$ gives $N$ over $\mathcal A^{P_\alpha}_\kappa =\mathcal D^\alpha_{\kappa-\rho}$. Restriction from $P_\alpha$ to $B$ identifies associated underlying sheaves $G\times^B H=p_\alpha^*(G\times^{P_\alpha}H)$. In a product chart its underlying module is $\mathcal O_{\mathbb P^1}\boxtimes N$. For a vertical vector field, its $\beta$ and fiberwise $\gamma$ terms on the transported $H$ cancel, leaving only differentiation of the relative function coefficient. For base fields the same formula is the original $\beta-\gamma$ action on $N$. These are precisely the ordinary inverse image action in [F4]. They also prove agreement on overlaps, since both sides use the same $P_\alpha$ transition and chain rule. Thus $\mathsf E^B_\kappa(H)=p_\alpha^\dagger N$. [F1, F4, step 2.1, algebra]

4.1 Multiplying the restricted rational $B$-action by the integral character $\rho$ adds $\rho$ to its differential while leaving $\pi$ unchanged. The associated bundle is therefore tensored by $\mathcal O_X(\rho)$. By [F2] its differential twist becomes $\kappa+\rho$, so its TDO is $\mathcal D_\kappa$. Combine this with step 3.3 to obtain the displayed parabolic-descent identity. Choices of bases and of local torsor sections use only the inherited Axiom of Choice; all resulting constructions and isomorphisms are canonical. [F2, step 3.3, algebra] ∎

