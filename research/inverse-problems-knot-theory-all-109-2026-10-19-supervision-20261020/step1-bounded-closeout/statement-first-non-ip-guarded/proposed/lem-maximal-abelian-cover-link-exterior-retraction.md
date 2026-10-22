---
id: lem-maximal-abelian-cover-link-exterior-retraction
kind: lemma
title: "The maximal abelian cover retracts to a compact link exterior"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-maximal-abelian-cover-alexander-module
  - thm-homotopy-lifting-for-covering-maps
  - thm-path-lifting-for-covering-maps
  - thm-classification-of-connected-covering-spaces
  - thm-regular-covering-characterizations
  - lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold
  - lem-continuity-is-local-and-pastes
  - def-retraction-and-deformation-retract
  - prop-retracts-inject-fundamental-groups
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3, homotopy lifting and covering classification"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
---

## Statement

Assume the Axiom of Choice and the data in the definition of the maximal-abelian-cover Alexander module for a nonempty oriented smooth link $L$. Let $i:E_L\hookrightarrow X_L$ be the inclusion of the compact exterior into the open complement, and let $p:X_L^{\mathrm{ab}}\to X_L$ be the maximal abelian cover. Then $E_L$ is a strong deformation retract of $X_L$, the restricted covering $p^{-1}(E_L)\to E_L$ is the connected maximal abelian cover of $E_L$, and the lifted deformation retract is equivariant under the deck group. The inclusion identifies $H_1(E_L;\mathbb Z)$ with $H_1(X_L;\mathbb Z)$ and preserves the positive-meridian classes. In particular, inclusion induces a $\Lambda_r$-module isomorphism

$$
H_1(p^{-1}(E_L);\mathbb Z)\cong A_L.
$$

## Statement references

[[def-maximal-abelian-cover-alexander-module]]

## Facts & Assumptions

**Given:** AC; the link, its chosen pairwise-disjoint closed normal disk tubes $N(K_i)=\Phi_i(D_{\epsilon_i}\nu(K_i))$, the compact exterior $E_L$, the open complement $X_L$, a basepoint $b\in E_L$, and the maximal abelian cover $p:X_L^{\mathrm{ab}}\to X_L$.

[A1] AC is assumed in the maximal-abelian-cover definition and its link-complement supplier ([[def-axiom-of-choice]]).

[F1] The cover $p$ is the connected regular cover classified by the kernel of abelianization, and its deck group is $H_1(X_L;\mathbb Z)\cong\mathbb Z^r$ ([[def-maximal-abelian-cover-alexander-module]]).

[F2] A homotopy of maps into a base of a covering, together with an initial lift, has a unique homotopy lift ([[thm-homotopy-lifting-for-covering-maps]]).

[F3] Paths lift uniquely from a prescribed point of a covering fibre ([[thm-path-lifting-for-covering-maps]]).

[F4] Connected covers of a path-connected, locally path-connected, semilocally simply connected space are classified by their induced fundamental-group subgroups ([[thm-classification-of-connected-covering-spaces]]).

[F5] A map defined continuously on the members of a finite closed cover, with agreeing restrictions on overlaps, is continuous ([[lem-continuity-is-local-and-pastes]]).

[F6] The link complement is a connected smooth three-manifold under AC ([[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold]]).

[F7] In a connected regular covering, the deck group acts transitively on each fibre ([[thm-regular-covering-characterizations]]).

[F8] A deformation retract is fixed pointwise by a homotopy from the identity to the retraction-inclusion composite ([[def-retraction-and-deformation-retract]]).

[F9] Inclusion of a deformation retract induces an isomorphism on fundamental groups at every basepoint in the retract ([[prop-retracts-inject-fundamental-groups]]).

[F10] Homotopic maps induce the same homomorphism on singular homology ([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

## Proof

1.1 For $x=\Phi_i(v)\in N(K_i)\setminus K_i$, write $\rho=\lVert v\rVert>0$ and define
$$
F_s(x)=\Phi_i\!\left(\left((1-s)\rho+s\epsilon_i\right)\frac{v}{\rho}\right),\qquad 0\le s\le1.
$$
On $E_L$ set $F_s(x)=x$. The formula is continuous on each punctured tube and agrees with the identity on its boundary $\rho=\epsilon_i$. The products with $I$ of the finitely many punctured closed tubes and $E_L$ form a finite closed cover of $X_L\times I$; [F5] therefore makes $F:X_L\times I\to X_L$ continuous. It starts at the identity, fixes $E_L$ pointwise, and at $s=1$ maps every punctured tube to its boundary, so it is a strong deformation retraction onto $E_L$. [given, F5, construct]

1.2 The link complement is path-connected by [F6], so its deformation retract $E_L$ is path-connected. The tube construction makes $E_L$ a smooth manifold with boundary, hence locally path-connected and semilocally simply connected. By [F8] and [F9], inclusion induces an isomorphism $i_*:\pi_1(E_L,b)\to\pi_1(X_L,b)$. By [F8] and [F10], it also induces an isomorphism $i_*:H_1(E_L;\mathbb Z)\to H_1(X_L;\mathbb Z)$. The positive meridians lie in $E_L$ and map to the same classes, so the meridian basis is preserved. An $E_L$-loop closes in the restricted cover exactly when its image under $i_*$ lies in $\ker\phi$, so the component containing $\widetilde b$ induces the subgroup
$$
i_*^{-1}(\ker\phi)=\ker(\phi\circ i_*).
$$
This subgroup is exactly the kernel of the abelianization of $\pi_1(E_L,b)$ because $i_*$ is an isomorphism. To check connectedness, take $y\in E_L$, a path $\delta$ in $E_L$ from $b$ to $y$, and a lift $\widetilde\delta$ from a chosen point $\widetilde b$ over $b$. Any other point over $y$ is $h\widetilde\delta(1)$ for some deck transformation $h$, by [F7]. Surjectivity of $i_*$ gives a loop $\alpha$ in $E_L$ whose lift from $\widetilde b$ ends at $h\widetilde b$. The reverse of $\widetilde\delta$, this lifted loop, and $h\widetilde\delta$ concatenate to a path in $p^{-1}(E_L)$ from $\widetilde\delta(1)$ to $h\widetilde\delta(1)$. Thus the restriction is connected. By [F4] it is the connected maximal abelian cover of $E_L$, with the same deck group $H_1(X_L;\mathbb Z)\cong H_1(E_L;\mathbb Z)$. [F1, F3, F4, F6, F7, F8, F9, F10, step 1.1, algebra]

2.1 Apply [F2] to $F$ with initial lift the identity of $X_L^{\mathrm{ab}}$. For a point over $E_L$, its constant path is a lift of its path under $F$; uniqueness makes the lifted homotopy fix every point of $p^{-1}(E_L)$. At time $1$ the image lies in $p^{-1}(E_L)$, so the lifted homotopy is a strong deformation retraction of $X_L^{\mathrm{ab}}$ onto that restricted cover. [F1, F2, step 1.1]

2.2 For every deck transformation $h$, the maps $(x,s)\mapsto h\widetilde F_s(x)$ and $(x,s)\mapsto\widetilde F_s(hx)$ lift the same homotopy $F(p(x),s)$ and agree at $s=0$. Uniqueness in [F2] makes them equal. The retraction is therefore deck-equivariant, and its induced isomorphism on first homology is $\Lambda_r$-linear. By [F1] the target homology of the full cover is $A_L$, proving the asserted module isomorphism. [A1, F1, F2, step 2.1] ∎

## Sources

[[def-maximal-abelian-cover-alexander-module]]

[[thm-homotopy-lifting-for-covering-maps]]

[[thm-path-lifting-for-covering-maps]]

[[thm-classification-of-connected-covering-spaces]]

[[thm-regular-covering-characterizations]]

[[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold]]

[[lem-continuity-is-local-and-pastes]]

[[def-retraction-and-deformation-retract]]

[[prop-retracts-inject-fundamental-groups]]

[[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]

[[def-axiom-of-choice]]
