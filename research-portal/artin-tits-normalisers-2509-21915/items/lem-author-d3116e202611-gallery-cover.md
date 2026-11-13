---
id: lem-author-d3116e202611-gallery-cover
kind: lemma
title: Gallery fractions, fundamental groupoid and asphericity
status: published
domain: mathematics
origin: pipeline
deps:
  - lem-author-d3116e202611-gallery-category
  - def-path-localisation-interface-artin-tits-prerequisites
  - def-complement-interface-artin-tits-prerequisites
  - math:def-eilenberg-maclane-space
  - math:def-fundamental-groupoid-of-a-space
  - math:def-covering-map-and-evenly-covered-neighbourhoods
  - math:def-lift-of-a-map-path-and-homotopy
  - math:thm-path-lifting-for-covering-maps
  - math:thm-homotopy-lifting-for-covering-maps
  - math:cor-lifted-path-endpoints-depend-only-on-path-homotopy
  - math:def-nullhomotopic-map-and-contractible-space
  - math:cor-contractible-spaces-are-path-connected
  - math:lem-contractibility-implies-trivial-fundamental-group
  - math:def-equivalence-and-adjoint-equivalence-of-categories
dependency_roles:
  lem-author-d3116e202611-gallery-category: mathematical-premise
  def-path-localisation-interface-artin-tits-prerequisites: mathematical-premise
  def-complement-interface-artin-tits-prerequisites: mathematical-premise
  math:def-eilenberg-maclane-space: mathematical-premise
  math:def-fundamental-groupoid-of-a-space: mathematical-premise
  math:def-covering-map-and-evenly-covered-neighbourhoods: mathematical-premise
  math:def-lift-of-a-map-path-and-homotopy: mathematical-premise
  math:thm-path-lifting-for-covering-maps: mathematical-premise
  math:thm-homotopy-lifting-for-covering-maps: mathematical-premise
  math:cor-lifted-path-endpoints-depend-only-on-path-homotopy: mathematical-premise
  math:def-nullhomotopic-map-and-contractible-space: mathematical-premise
  math:cor-contractible-spaces-are-path-connected: mathematical-premise
  math:lem-contractibility-implies-trivial-fundamental-group: mathematical-premise
  math:def-equivalence-and-adjoint-equivalence-of-categories: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Pierre Deligne, Les immeubles des groupes de tresses généralisés,
        Inventiones mathematicae 17 (1972), 273–302
      url: https://publications.ias.edu/sites/default/files/Number18.pdf
      locator: Introduction theorem, printed p. 273; Proposition 1.27, pp. 283–284;
        (2.10)–(2.12), pp. 289–290; text after (3.3), (3.4)(i), (3.5), (3.6),
        Theorem 3.7 and part A, pp. 292–294
      statement: For a finite central simplicial arrangement, Gal+ embeds in its
        groupoid completion Gal. The Gal-labelled construction yields a
        contractible covering of the complexified complement, with signed
        crossings acting on gallery labels and positive crossings using the
        preceding chamber’s imaginary side. The sets Y(C) of (3.4)(i) cover the
        complement. The introductory theorem states that the complement is a
        K(π,1).
      hypotheses: A finite set of homogeneous real hyperplanes in a finite-dimensional
        real vector space whose chambers are open simplicial cones in that
        space, as in (1.8). Gallery products are in traversal order. No infinite
        or nonsimplicial arrangement is included.
      reading_limits: For this repair, read the PDF-extracted statements and
        surrounding construction at the listed locators, including the
        cover-label indexing in (2.10), the side convention after (3.3), the
        sets in (3.4)(i), and the cover statement (3.5). Checked Theorem 3.7 and
        its covering argument in part A. The general contractibility and
        asphericity results are imported; no reconstruction, whole-paper
        reading, or rendered-formula inspection is claimed.
formulation_deps:
  - lem-author-d3116e202611-gallery-category
  - def-path-localisation-interface-artin-tits-prerequisites
  - def-complement-interface-artin-tits-prerequisites
  - math:def-eilenberg-maclane-space
  - math:def-fundamental-groupoid-of-a-space
  - math:def-equivalence-and-adjoint-equivalence-of-categories
argument_deps:
  - lem-author-d3116e202611-gallery-category
  - def-path-localisation-interface-artin-tits-prerequisites
  - def-complement-interface-artin-tits-prerequisites
  - math:def-eilenberg-maclane-space
  - math:def-fundamental-groupoid-of-a-space
  - math:def-covering-map-and-evenly-covered-neighbourhoods
  - math:def-lift-of-a-map-path-and-homotopy
  - math:thm-path-lifting-for-covering-maps
  - math:thm-homotopy-lifting-for-covering-maps
  - math:cor-lifted-path-endpoints-depend-only-on-path-homotopy
  - math:def-nullhomotopic-map-and-contractible-space
  - math:cor-contractible-spaces-are-path-connected
  - math:lem-contractibility-implies-trivial-fundamental-group
  - math:def-equivalence-and-adjoint-equivalence-of-categories
dependency_level: 3
---

## Statement

Let $Y=V_{\mathbb C}\setminus\bigcup_{H\in\mathcal A}H_{\mathbb C}$ for the finite central simplicial arrangement underlying the positive gallery category $P$. The localisation $G=P[P^{-1}]$ is equivalent to the fundamental groupoid of $Y$; more precisely, choose a real basepoint in each chamber and take the full fundamental subgroupoid on these basepoints. It is isomorphic to $G$ by the positive wall-crossing path convention. The space $Y$ is aspherical.

## Statement references

[[lem-author-d3116e202611-gallery-category]]

[[def-path-localisation-interface-artin-tits-prerequisites]]

[[def-complement-interface-artin-tits-prerequisites]]

[[math:def-eilenberg-maclane-space]]

[[math:def-fundamental-groupoid-of-a-space]]

[[math:def-equivalence-and-adjoint-equivalence-of-categories]]

## External input

[E1] Import Deligne Proposition 1.27, the groupoid-labelled construction (2.10)–(2.12), and the contractible covering of (3.6)–Theorem 3.7. Its path convention is described immediately after (3.3): at a positive crossing the imaginary component is on the preceding chamber's side of the crossed wall. Fixing a starting chamber $A$, the fibre over a real basepoint in $B$ is labelled by $\operatorname{Hom}_G(A,B)$; lifting a signed crossing updates the label by its gallery arrow or its inverse. The covering theorem and introductory asphericity theorem are imported. The path-class identification is proved locally below.

[E2] Deligne (3.4)(i)–(3.5) supplies an open cover by sets $U_C=Y(C)$ indexed by chambers. In real and imaginary coordinates, $x+iy\in U_C$ means that, for each arrangement hyperplane containing $x$, the vector $y$ is on the same open side as $C$. This is the sign form of the condition that the image of $y$ in the quotient by the face containing $x$ lies in the chamber induced by $C$.

## Facts & Assumptions

[F99] Import Deligne Proposition 1.27, the groupoid-labelled construction (2.10)–(2.12), and the contractible covering of (3.6)–Theorem 3.7. Its path convention is described immediately after (3.3): at a positive crossing the imaginary component is on the preceding chamber's side of the crossed wall. Fixing a starting chamber $A$, the fibre over a real basepoint in $B$ is labelled by $\operatorname{Hom}_G(A,B)$; lifting a signed crossing updates the label by its gallery arrow or its inverse. The covering theorem and introductory asphericity theorem are imported. The path-class identification is proved locally below.

[F98] Deligne (3.4)(i)–(3.5) supplies an open cover by sets $U_C=Y(C)$ indexed by chambers. In real and imaginary coordinates, $x+iy\in U_C$ means that, for each arrangement hyperplane containing $x$, the vector $y$ is on the same open side as $C$. This is the sign form of the condition that the image of $y$ in the quotient by the face containing $x$ lies in the chamber induced by $C$.

[F1] Use [[lem-author-d3116e202611-gallery-category]], [[def-path-localisation-interface-artin-tits-prerequisites]], [[def-complement-interface-artin-tits-prerequisites]] and [[math:def-eilenberg-maclane-space]] for the gallery quotient, localisation, complexified complement and asphericity conventions. The gallery congruence agrees with Deligne's presentation, and products are in traversal order.

[F2] Use [[math:def-fundamental-groupoid-of-a-space]] for endpoint-fixed path classes and their composition. Coverings and lifts have the meanings in [[math:def-covering-map-and-evenly-covered-neighbourhoods]] and [[math:def-lift-of-a-map-path-and-homotopy]]. The existence and uniqueness of path and homotopy lifts are supplied by [[math:thm-path-lifting-for-covering-maps]] and [[math:thm-homotopy-lifting-for-covering-maps]]; [[math:cor-lifted-path-endpoints-depend-only-on-path-homotopy]] gives the endpoint invariance used below.

[F3] Contractibility means [[math:def-nullhomotopic-map-and-contractible-space]]. A contractible space is nonempty and path connected by [[math:cor-contractible-spaces-are-path-connected]], and its fundamental group at every chosen point is trivial by [[math:lem-contractibility-implies-trivial-fundamental-group]]. Thus any loop upstairs is endpoint-fixed nullhomotopic.

[F4] An equivalence consists of functors with quasi-inverse and natural-isomorphism data as in [[math:def-equivalence-and-adjoint-equivalence-of-categories]]. The explicit paths in step 5.1 provide those data without an indexed choice of arbitrary paths.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the stated isomorphism, equivalence and asphericity.

1.1 The gallery congruence agrees with Deligne's by F1. Their formal groupoid completions therefore agree by the localisation universal property, so Proposition 1.27 and the imported labelled-cover construction apply to this $P$ and $G$. [F1, F99, given]

2.1 Fix a starting chamber $A$ and its basepoint $a_A$. In the imported cover $p_A:\widetilde Y_A\to Y$, choose the lift of $a_A$ labelled by $1_A$. For a chamber $B$ the fibre over $a_B$ has labels $\operatorname{Hom}_G(A,B)$, with the signed crossing rule of F99. The covering space is contractible, hence path connected and has trivial fundamental groups by F3. [F2, F3, F99, step 1.1]

3.1 Assign to a path from $a_A$ to $a_B$ the endpoint of its unique lift starting at the chosen lift of $a_A$. Path lifting and endpoint invariance in F2 make this a function on path classes. If two lifts have the same endpoint, concatenate the first with the reverse of the second. This is a loop upstairs and is endpoint-fixed nullhomotopic by F3. Projecting that homotopy makes the projected loop trivial; cancellation in the fundamental groupoid gives equality of the original path classes. Conversely, any point of the fibre is reached by a path upstairs because the cover is path connected. Its projection lifts to that path by uniqueness. The endpoint function is therefore a bijection. [F2, F3, step 2.1]

3.2 The cover is path connected and surjective, so $Y$ is path connected. Deligne's introductory theorem applies under precisely the same finite central simplicial hypotheses and gives asphericity. This last assertion is imported directly, without an additional local inference about higher homotopy lifting. [F1, F2, F3, F99, step 2.1]

4.1 Represent an arrow of $G$ by a signed gallery word and concatenate its wall-crossing paths. Its lift ends at its gallery label by F99. Equal words in $G$ have equal labels and hence equal path classes by step 3.1, so the assignment is well-defined. Different labels give different classes, and every class occurs by the same endpoint bijection. Concatenation of gallery words concatenates paths; explicitly, for traversal products, $\Phi(gh)=\Phi(h)\circ\Phi(g)$. Identities and inverses are respected. Thus $\Phi$ is an isomorphism from $G$ to the full fundamental subgroupoid on the $a_C$. [F1, F2, F99, step 3.1]

5.1 To exhibit the groupoid equivalence, order the finitely many chambers and retain the chosen real points $a_C$. For $z=x+iy\in Y$, take the first $C$ with $z\in U_C$. A path $\lambda_z:z\to a_C$ is obtained by three successive linear interpolations: change the imaginary coordinate from $y$ to $a_C$ at fixed real coordinate $x$, then change the real coordinate from $x$ to $a_C$ at fixed imaginary coordinate $a_C$, then change the imaginary coordinate from $a_C$ to $0$ at fixed real coordinate $a_C$. The first part avoids every $H_{\mathbb C}$ because whenever $x\in H$, both $y$ and $a_C$ are on the same open side of $H$ by F98. The second part has imaginary coordinate on no hyperplane, and the third has real coordinate on no hyperplane. At a selected point $z=a_D$ instead set $C=D$ and take the constant path. Define a functor $R$ to the chosen full subgroupoid by $R(z)=a_C$ and $R([\alpha]:z\to w)=[\overline{\lambda_z}*\alpha*\lambda_w]$. The fundamental groupoid laws show that it preserves classes, identities and composition. If $I$ is inclusion, then $RI$ is the identity, and the arrows $[\overline{\lambda_z}]:IR(z)\to z$ give a natural isomorphism $IR\Rightarrow1$. These are equivalence data; composed with step 4.1 they prove the asserted equivalence for $G$. The finite ordering and explicit interpolations require no arbitrary indexed selection of paths. [F1, F2, F4, F98, step 4.1] ∎
