---
id: thm-the-primary-obstruction-class-is-independent-of-cellular-choices
kind: theorem
title: The primary obstruction class is independent of cellular choices
status: published
origin: pipeline
deps: ["def-primary-cellular-obstruction-cochain", "def-homotopy-group-local-system-along-a-cellular-map", "prop-higher-homotopy-basepoint-transport-and-moving-homotopies", "thm-the-primary-obstruction-cochain-is-a-cocycle", "def-difference-cochain-between-two-cellular-extensions"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Lemma 7.8, printed pages 172--173; Sections 7.4--7.6, printed pages 174--181
---

## Statement

Changing cell orientations, lifts, whiskers, or transport coordinates changes
$\theta(f)$ only by the canonical cellular-cochain isomorphism. If
$f_0,f_1:X^n\cup A\to Y$ are joined on $X^{n-1}\cup A$ by $H$, then, under
the coefficient identification supplied by $H$,

$$ \delta d(f_0,H,f_1)=\theta(f_0)-\theta(f_1). $$

Consequently the primary obstruction cohomology class depends only on the
prior-stage map up to the stated homotopy and canonical coefficient
identification.

## Facts & Assumptions

[F1] Reversing a cell orientation or changing its lift transforms the cellular generator and obstruction value by the matching sign or monodromy action, so the primary cochain is unchanged under the canonical basis identification ([[def-primary-cellular-obstruction-cochain]]).

[F2] The obstruction cochain on the product CW pair is a cocycle ([[thm-the-primary-obstruction-cochain-is-a-cocycle]]).

[F3] With the interval-last orientation fixed in the difference-cochain definition, $\partial(e\times I)=(\partial e)\times I+(-1)^{\dim e}(e\times1-e\times0)$ ([[def-difference-cochain-between-two-cellular-extensions]]).

[F4] Homotopy-group basepoint transport depends only on the endpoint-fixed path class, composes along concatenated paths, and in degree one is conjugation by the transport path ([[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]).

[F5] The coefficient system is a covariant functor whose transports compose along concatenated incidence paths ([[def-homotopy-group-local-system-along-a-cellular-map]]).

## Proof

**Given:** The cellular data and the maps $f_0,f_1,H$ in the statement.

1.1 An orientation reversal multiplies both the cellular generator and the recorded obstruction value by $-1$, while a lift change applies the same deck transformation and inverse monodromy relation on the equivariant cellular Hom; these are exactly the canonical basis identifications in [F1]. If a whisker $u$ from the attaching-sphere basepoint $a$ to the chosen coordinate $c$ is replaced by $v:a\to c$, the comparison loop at $c$ is $\bar u*v$, not $u*\bar v$ (which is based at $a$). Writing $f u$ and $f v$ for their images in $Y$, the published convention gives $T_u=\beta_{\overline{f u}}$ and $\beta_{\gamma*\eta}=\beta_\gamma\beta_\eta$, so $T_u=\beta_{\overline{f u}*(f v)}T_v$. Thus this coordinate-loop transport carries the new recorded value to the old one; its inverse $\beta_{\bar v*u}$ carries old to new. In the $n=1$ case the action is trivial by the standing coefficient hypothesis. Finally, changing transport coordinates means applying a stalkwise natural isomorphism of the fixed local system in [F5]. By the defining naturality square it intertwines transport along every incidence path. Applying it stalkwise therefore commutes with the cellular coboundary and sends each old obstruction value to its new coordinate. In all four cases the resulting canonical cellular-cochain isomorphism carries $\theta(f)$ and its cohomology class to their new-coordinate versions. [F1, F4, F5]

1.2 Give $(X\times I,A\times I)$ the relative prism CW structure and put $$ Z_n=(X^n\times\partial I)\cup(X^{n-1}\times I)\cup(A\times I). $$ The endpoint maps $f_0,f_1$ and $H$ agree on overlaps, defining a map $F:Z_n\to Y$. Let $\mathcal P_H$ be the homotopy-group coefficient system induced by $F$, with its endpoint restrictions identified along $H$. Then [F2] gives a relative obstruction cocycle $\Theta\in C^{n+1}_{\mathrm{cell}}(X\times I,A\times I;\mathcal P_H)$. Its values on horizontal $(n+1)$-cells are $\theta(f_0)$ and $\theta(f_1)$, while its signed restriction to vertical cells $e^n\times I$ is the difference cochain by definition. [F2]

2.1 Evaluate $\delta\Theta=0$ on $e^{n+1}\times I$. Using [F3] and the defining sign $d(e^n)=(-1)^{n+1}\Theta(e^n\times I)$ gives $0=(-1)^{n+1}(\delta d(e^{n+1})+\theta(f_1)(e^{n+1})-\theta(f_0)(e^{n+1}))$. Hence $\delta d=\theta(f_0)-\theta(f_1)$ on every cell. [F2, F3, step 1.2]

3.1 Coboundaries vanish in cohomology, so Step 2.1 identifies $[\theta(f_0)]$ and $[\theta(f_1)]$ after the coefficient transport supplied by $H$. Combining this with Step 1.1 proves independence from every listed choice. The argument uses a supplied homotopy and supplied coordinates and makes no set-indexed selection. $\square$ [step 1.1, step 2.1]