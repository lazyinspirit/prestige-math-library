---
id: lem-pa36-partial-flag-twist-product
kind: lemma
title: Partial-flag twist and local product decomposition
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-pa36-flag-tdo-and-module
  - def-weyl-vector-rho-for-a-chosen-positive-system
  - lem-pa36-flag-tdo-pbw-and-twist
  - lem-semisimple-flag-torsor-zariski-charts
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
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
      locator: "§§8.1–8.2, printed pp. 99–100; the parabolic action-algebroid twist and local product chart"
---

## Statement

Let $\alpha$ be a simple root, $P_\alpha$ its minimal parabolic,
$Y=G/P_\alpha$, and $p_\alpha:X=G/B\to Y$. Let
$\kappa\in\mathfrak h^*$ satisfy $\langle\kappa,\alpha^\vee\rangle=0$.
The restriction of $\kappa$ to $\mathfrak p_\alpha$ that is zero on root
spaces is a Lie algebra character. Define the partial-flag TDO
$\mathcal D^{\alpha}_{\kappa-\rho}$ on $Y$ as the action-algebroid quotient
whose isotropy character is this restriction of $\kappa$; the subscript
$\kappa-\rho$ uses the convention that a TDO parameter $\nu$ has isotropy
character $\nu+\rho$. For a quasicoherent left
$\mathcal D^{\alpha}_{\kappa-\rho}$-module $N$, define $p_\alpha^\dagger N$
on a Zariski product chart $p_\alpha^{-1}(U)\cong U\times\mathbb P^1$ to be
the ordinary inverse-image module $\mathcal O_{\mathbb P^1}\boxtimes N|_U$: relative vector fields differentiate the first factor, and base operators act on the second. Its underlying sheaf is $\mathcal O_X\otimes_{p_\alpha^{-1}\mathcal O_Y}p_\alpha^{-1}N$; the differential transition maps are induced by the chain rule under changes of the $P_\alpha$-torsor section. Then
these local modules glue to a quasicoherent left
$\mathcal D_{\kappa-\rho}$-module, and tensoring by $\mathcal O_X(\rho)$
turns it into a left $\mathcal D_\kappa$-module. The restriction of
$\mathcal O_X(\rho)$ to each $p_\alpha$-fiber is
$\mathcal O_{\mathbb P^1}(-1)$.

For a torsor section $s:U\to G$, the product chart used below is the
commutative square whose top arrow is $\Phi_s(u,qB)=s(u)qB$:

```tikzcd
U\times P_\alpha/B \arrow[r,"\Phi_s"] \arrow[d,"\mathrm{pr}_1"'] & p_\alpha^{-1}(U) \arrow[d,"p_\alpha"] \\
U \arrow[r,"\mathrm{id}_U"'] & U
```

The left vertical map is projection, and the bottom map is identity. The
torsor section makes $\Phi_s$ an isomorphism; the equality
$p_\alpha\circ\Phi_s=\mathrm{pr}_1$ verifies commutativity. The diagram
records the local chart only; the PBW and gluing arguments below prove the
TDO identifications.

## Facts & Assumptions

**Given:** The simply connected complex semisimple group, its flag variety,
a simple root $\alpha$, the minimal-parabolic projection $p_\alpha$, and
$\kappa$ with $\langle\kappa,\alpha^\vee\rangle=0$.

[F1] $\rho=\frac12\sum_{\beta\in\Phi^+}\beta$ is an integral weight and
$\langle\rho,\alpha^\vee\rangle=1$
([[def-weyl-vector-rho-for-a-chosen-positive-system]]).

[F2] $G\to Y$ is a Zariski-locally trivial right $P_\alpha$-torsor and
$P_\alpha/B\cong\mathbb P^1$; in the rank-one case $Y$ is a point
([[lem-semisimple-flag-torsor-zariski-charts]],
[[thm-minimal-parabolic-flag-projection-is-p1-bundle]]).

[F3] The action-algebroid quotient construction has the ordered-basis PBW
filtration with associated graded the symmetric tangent algebra, and
tensoring by an integral line bundle changes the TDO parameter by its weight
([[def-pa36-flag-tdo-and-module]],
[[lem-pa36-flag-tdo-pbw-and-twist]]).

## Proof

1.1 The derived algebra $[\mathfrak p_\alpha,\mathfrak p_\alpha]$ is spanned by positive-root spaces and the rank-one subalgebra $\langle\mathfrak g_\alpha,\mathfrak g_{-\alpha},\alpha^\vee\rangle$. The functional $\kappa$ vanishes on the root spaces by its definition and on $\alpha^\vee$ by the assumed zero pairing. It therefore kills the derived algebra, so it is a Lie algebra character of $\mathfrak p_\alpha$. Its transport to the isotropy bundle on $Y$ is well-defined because a character is invariant under conjugation by the connected group $P_\alpha$. Applying the PBW quotient construction of [F3] to the action algebroid of $G$ on $Y$ defines $\mathcal D^{\alpha}_{\kappa-\rho}$ with associated graded $\operatorname{Sym}T_Y$. [F1, F3, given, algebra]

2.1 Choose a Zariski open $U\subseteq Y$ with a section $s:U\to G$ of the $P_\alpha$-torsor, as in [F2]. For a principal $H$-bundle $Q\to Z$, write its Atiyah algebroid as $T_Q/H$, the bundle of $H$-invariant vector fields with its anchor and bracket. The infinitesimal left $G$-action identifies the action algebroid of $G$ on $G/B$ with this Atiyah algebroid for $G\to X$: on each fiber the left fundamental fields identify $\mathfrak g$ with $T_gG$, and the sign convention is the one in the displayed action-algebroid bracket. The section identifies $G|_U$ with $U\times P_\alpha$, so the Borel torsor is $U\times P_\alpha\to U\times(P_\alpha/B)$. Its Atiyah algebroid splits as $T_U\oplus\operatorname{pr}_2^*\operatorname{At}(P_\alpha\to P_\alpha/B)$, with zero cross-brackets because the two factors act on separate coordinates. The action algebroid of $G$ on $Y=G/P_\alpha$ similarly becomes the Atiyah algebroid of $G\to Y$, locally $T_U\oplus(U\times\mathfrak p_\alpha)$; quotienting its isotropy by $\kappa|_{\mathfrak p_\alpha}$ leaves $\operatorname{Diff}_U$, which is the local form of $\mathcal D^\alpha_{\kappa-\rho}$. In the vertical factor $\operatorname{At}(P_\alpha\to P_\alpha/B)$, the rank-one isotropy character is zero because $\kappa$ vanishes on the root spaces and on $\alpha^\vee$; the central isotropy acts trivially on $P_\alpha/B$ and its scalar relation adds no relative differential operator. Thus the vertical quotient is the rank-one TDO with parameter $-\rho_{\mathfrak{sl}_2}$, which by [F3] is $\operatorname{Diff}(\mathcal O_{\mathbb P^1})$. The PBW normal forms of the direct-product algebroid therefore identify $$\mathcal D_{\kappa-\rho}|_{p_\alpha^{-1}(U)}\cong\mathcal D_{\mathbb P^1}\boxtimes\mathcal D^\alpha_{\kappa-\rho}|_U.$$ The line bundle $\mathcal O_X(\rho)$ restricts to degree $-1$ on the fiber because its associated character pairs to $1$ with $\alpha^\vee$; hence its restriction is $\mathcal O_{\mathbb P^1}(-1)$. [F1, F2, F3, step 1.1, algebra, construct]

3.1 On overlaps, write the torsor sections as $s_j=s_i p_{ij}$ for a regular map $p_{ij}:U_i\cap U_j\to P_\alpha$. The change of product trivialization is $(u,qB)\mapsto(u,p_{ij}(u)qB)$. On the Atiyah algebroid it is the gauge transformation of the product principal $B$-bundle: its base component includes the derivative of $p_{ij}$ in $\mathfrak p_\alpha$, and its fiber component is the differential of left multiplication by $p_{ij}(u)$ on $P_\alpha/B$. The quotient of the base component by $\kappa|_{\mathfrak p_\alpha}$ is exactly the transition of $\mathcal D^\alpha_{\kappa-\rho}$; the fiber component acts by the chain rule on relative operators. The isotropy character is preserved because it is a Lie-algebra character invariant under $\operatorname{Ad}(P_\alpha)$, and the equality $p_{ik}=p_{ij}p_{jk}$ makes the gauge maps compose, giving the cocycle identity. Thus the local product TDO identifications agree on overlaps. The local ordinary inverse-image modules $\mathcal O_{\mathbb P^1}\boxtimes N|_U$ glue to $p_\alpha^\dagger N$: in product coordinates a vertical field acts by $\partial_z(f\otimes n)=\partial_z(f)\otimes n$, and a base operator acts by its derivative on $f$ plus its given action on $n$. The chain rule is precisely the algebroid transition just checked, so this is a module for the pulled-back TDO, not its regular left module. Finally [F3] identifies $\mathcal O_X(\rho)\otimes p_\alpha^\dagger N$ as a $\mathcal D_\kappa$-module because tensoring by $\mathcal O_X(\rho)$ shifts the parameter from $\kappa-\rho$ to $\kappa$. [F1, F2, F3, step 2.1, construct] ∎

