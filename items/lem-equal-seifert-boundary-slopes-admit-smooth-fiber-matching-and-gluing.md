---
id: lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing
kind: lemma
title: "Smooth matching and gluing of equal Seifert boundary slopes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-incompressibility-seifert-fibration-and-jsj-system, lem-relative-smooth-mapping-classes-of-annulus-and-torus, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, lem-choice-free-isotopy-extension-for-a-compact-smooth-source, thm-euclidean-inverse-function-theorem]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. Mapping classes use the finite disk/Jordan proofs; finite bundle transport uses Euclidean ODEs, boundary isotopies have an explicit collar formula, and collar comparison uses finite compact-source extension in the double."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.22–23, matching fibrations on boundary tori in the proof of Theorem1.9; the smooth parameter and collar extensions are supplied here"
---

## Statement

Two smooth circle-bundle fibrations of the same torus with equal unoriented primitive fiber class are carried to one another by a jointly smooth isotopy of the torus starting at the identity and stationary near its time endpoints.

Consequently, suppose two boundary tori of compact smooth Seifert pieces are glued by a specified smooth diffeomorphism and their regular-fiber slopes agree under that identification. The fibrations may be modified by smooth ambient isotopies in arbitrarily small boundary collars so that they agree fiber by fiber on the identified torus and have matching product collar charts there. Their union is then a smooth Seifert fibration of the glued manifold. The two boundary tori may belong to the same piece. For finitely many disjoint matched boundary pairs, the modifications may be performed simultaneously in disjoint collars.

## Facts & Assumptions

**Given:** the two torus fibrations with equal fiber class, and for the gluing conclusion the indicated smooth Seifert pieces and boundary identification.

[F1] Smooth ODEs have unique local solutions with smooth dependence on initial values and parameters ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F2] A torus diffeomorphism inducing the identity on integral first homology has a jointly smooth isotopy to the identity ([[lem-relative-smooth-mapping-classes-of-annulus-and-torus]], Statement).

[F3] Compact-source isotopies extend with prescribed support, without choice ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement). A boundary torus isotopy $h_t$ extends in a supplied collar by $(x,r)\mapsto(h_{\chi(r)t}(x),r)$, with $\chi=1$ near the boundary and zero near the collar end; its inverse has $h_{\chi(r)t}^{-1}$ in the same formula. This explicitly preserves the boundary and pastes to the identity.

[F4] Full-rank coordinate maps have smooth local inverses ([[thm-euclidean-inverse-function-theorem]], Statement).

[F5] Seifert models and boundary regular fibers are those of [[def-incompressibility-seifert-fibration-and-jsj-system]].

## Proof

1.1 Each circle-bundle fibration of $T^2$ has fiber-preserving smooth coordinates from $S^1\times S^1$. Cut its base circle once, lift the base interval direction horizontally in finitely many bundle charts, and patch the lifts by finite base bump functions. Compactness and [F1] give the transport product over the cut interval. Its return circle map has degree $+1$, since a degree-$-1$ return gives a nonorientable total surface. For an increasing angular lift $r$ of that return map, $(1-s)r(\theta)+s\theta$ is a smooth circle-map isotopy to the identity. Make it stationary at its endpoints. The product coordinate change $(z,u)\mapsto(r_{1-u}(z),u)$ identifies its mapping torus with the identity-return torus, with smooth matching at the seam because of that stationarity. Thus the claimed fiber-preserving torus coordinates exist. They also show each fiber class is primitive. Choose the two coordinate maps orientation-preserving and let $h:T^2\to T^2$ be their composite carrying the first fibration to the second. [F1, F5, given, construct]

2.1 Since the two fiber slopes agree, $h_*$ preserves their common unoriented primitive line. In coordinates for the first fibration, the inverse matrix $h_*^{-1}$ therefore has the form $\begin{pmatrix}\varepsilon&k\\0&\varepsilon\end{pmatrix}$, with $\varepsilon=\pm1$ and $k\in\mathbb Z$. Its linear torus diffeomorphism $L(\theta,u)=(\varepsilon\theta+ku,\varepsilon u)$ preserves the first fiber decomposition. Compose $h$ on the right with this coordinate-conjugate $L$. The resulting $h'$ still carries the first fibration to the second, and now $(h')_*$ is the identity. By [F2] there is a jointly smooth isotopy from the identity to $h'$, stationary near both time endpoints. This proves the first assertion with an actual smooth diffeotopy. [F2, step 1.1, construct]

3.1 For a boundary identification pull the second fibration back to the first torus and apply step 2.1. Extend that torus isotopy into the chosen piece by [F3]'s explicit collar formula, with support in its prescribed boundary collar. Other boundary components remain fixed. This makes the two boundary decompositions identical. For completeness the compact torus has a smooth collar without choice: combine finitely many inward coordinate fields with normalized finite bumps, integrate by [F1], and use the inverse-function and compact separation argument to get one injective common-width flow collar. Each fibration also has a fiber-preserving collar: take a small base collar avoiding all exceptional points, lift its inward normal direction in bundle charts and integrate using [F1]. To make these collars equal to a common smooth collar of the glued torus, compare two collar maps in flat torus coordinates. Their relative map has the form $(x,r)\mapsto(x+a(x,r),R(x,r))$, with $a(x,0)=0$, $R(x,0)=0$ and $R_r(x,0)>0$. For sufficiently small width $a$ has a unique small periodic lift to $\mathbb R^2$. Interpolate to the identity by $(x+s a(x,r),(1-s)r+sR(x,r))$. At the zero section its derivative is block triangular with positive normal entry; compactness and [F4] give one narrower two-sided strip on which all maps are embeddings. Extend the collar charts smoothly across zero before using this interpolation. Apply [F3] to the compact two-sided strip in the double of the piece. The interpolation fixes the zero torus, so its ambient extension fixes it and preserves its two sides. Its restriction to the required side therefore gives the desired collar comparison by an ambient isotopy, fixed on the torus. Use the inverse comparison when necessary. Thus the equal boundary decompositions can be made product decompositions in the same normal coordinate, while retaining their fiber sets on the torus. [F1, F3, F4, step 2.1, construct]

4.1 Choose one common torus fiber coordinate system and extend it by that common normal coordinate to both sides. These are identical regular Seifert product charts on the seam; all other old Seifert charts, including exceptional solid-torus charts, remain unchanged outside the modified collars. This proves the smooth Seifert gluing assertion. For a self-gluing adjust one of its two disjoint boundary collars and then make both product collars compatible as in step 3.1; no second piece was needed in that argument. Finitely many disjoint boundary tori admit disjoint compact collars, so the finite isotopies with those supports compose and preserve every earlier match. Smooth stationary time changes allow them to be simultaneous or concatenated without changing any endpoint conclusion. [F3, F5, step 3.1, construct] ∎
