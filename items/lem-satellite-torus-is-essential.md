---
id: lem-satellite-torus-is-essential
kind: lemma
title: "The companion torus of a nonproduct satellite is essential"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-nontrivial-knot-with-supplied-product-tube-has-injective-exterior-boundary
  - def-axiom-of-choice
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The original full AC hypothesis is retained and supplies coset transversals for the amalgam normal form. With the given smooth product tubes, both boundary injections are established by choice-free smooth suppliers; no unsupported PL-to-smooth transfer is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, incompressible tori and the proof of Theorem 1.9, printed pp.11–23"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§§1–2 and §4, satellite companions and essential tori"
---

## Statement

Assume full AC. Let $K$ be a nontrivial smooth knot with a specified companion solid torus $V=e(S^1\times D^2)$, let $P\subset\operatorname{int}(S^1\times D^2)$ be a pattern, and assume the outer torus of its pattern exterior $X_P$ has no compressing disk and is not product-parallel to the inner pattern torus. Let $T_c=\partial V=e(\partial(S^1\times D^2))\subset E_{P(K)}$ be the companion torus. Then $T_c$ is incompressible and is not boundary-parallel in $E_{P(K)}$; hence it is essential.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, §1.2](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Full AC, a nontrivial smooth knot $K$, the supplied orientation-preserving companion product embedding $e:S^1\times D^2\to S^3$, and the specified pattern exterior with incompressible outer boundary and nonproduct ends.

[F1] The pattern exterior and satellite exterior are defined in [[def-satellite-pattern-companion-and-winding-number]]. With $V=e(S^1\times D^2)$, the common torus is $\partial V=e(\partial(S^1\times D^2))$. Identifying the pattern exterior with its image, the satellite exterior is $X_P\cup_{\partial V}E_K$.

[A1] Full AC permits coset-transversal choices ([[def-axiom-of-choice]]).

[F2] A nontrivial knot with a supplied smooth product tube has injective exterior boundary. Its proof also verifies exterior connectedness. [[lem-nontrivial-knot-with-supplied-product-tube-has-injective-exterior-boundary]]

[F3] Strong smooth Loop applies to a connected boundary subsurface of a compact connected orientable smooth three-manifold. Thus absence of essential-boundary proper smooth disks implies injection of that subsurface group. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]]

[F4] Van Kampen identifies the union group with the pushout; when both side maps are injective, the normal form with fixed transversals embeds the common group. [[thm-seifert-van-kampen]] [[thm-normal-form-for-free-products-with-amalgamation]]

[F5] Finite compact-source transversality avoids a curve by an embedded arc in a three-manifold; finite graph fields and compact flows give smooth collars. [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]] [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]]

[F6] Incompressibility, boundary-parallelity and essentiality have the smooth conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

## Proof

1.1 Put $X=e(X_P)$ and $Y=E_K$. They are compact orientable smooth three-manifolds with common boundary torus $T_c$. The exterior $Y$ is connected by [F2]. For completeness $X$ is connected as well: in the standard connected solid torus join two points of $X_P$ by a path consisting of finitely many smooth chart arcs. Remove repeated arcs and perturb finitely many joins in small coordinate balls to obtain an embedded arc, fixed near its endpoints; in dimension three finitely many arcs can be made disjoint except at consecutive endpoints by small finite chart perturbations. By [F5] perturb it to avoid the pattern core $P$. On the punctured supplied tube of $P$, radial projection to its boundary, extended by the identity outside that tube, is continuous and sends this path into $X_P$. Consequently all exterior points are connected by paths. The outer torus has no compressing disk by hypothesis, so [F3], with the entire outer boundary component as subsurface and normal subgroup $1$, gives $\pi_1(T_c)\hookrightarrow\pi_1(X)$. The companion product tube is exactly the supplied input of [F2], so $\pi_1(T_c)\hookrightarrow\pi_1(Y)$ too. Both applications are smooth; an abstract finite PL disk has not been treated as a smooth disk. [F1, F2, F3, F5, given, construct]

2.1 Use finite smooth collars of the common torus to enlarge the two sides to a connected open cover whose intersection retracts to $T_c$. Van Kampen and the amalgam normal form [F4], with transversals supplied by [A1], then make $\pi_1(T_c)$ inject into $\pi_1(E_{P(K)})$. Any compressing disk would make its essential torus boundary nullhomotopic in the union, contradicting that injection. Thus $T_c$ is incompressible. [A1, F1, F4, F5, step 1.1, construct, algebra]

3.1 The only boundary of the satellite exterior is the inner pattern torus $T_{\mathrm{in}}=\partial e(N(P))$. The two components cut along $T_c$ are the connected pieces $X$ and $Y$ from step 1.1; only $X$ meets $T_{\mathrm{in}}$. Suppose there were a boundary-parallel product region $R$ with ends $T_c,T_{\mathrm{in}}$. Its interior must lie in $X$: it cannot cross either of its two boundary tori, and its collar at $T_{\mathrm{in}}$ is on the $X$ side. Moreover $R$ exhausts $X$. Indeed $\operatorname{Int}R$ is open in $\operatorname{Int}X$ by the smooth full-dimensional product charts, and closed relative to $\operatorname{Int}X$ because $R$ is compact and its boundary lies in $\partial X$. The interior of the connected manifold $X$ is connected, as is seen by pushing any boundary portions of a path into its finite collar. Hence $\operatorname{Int}R=\operatorname{Int}X$, and taking closures gives $R=X$. Transporting that product by $e^{-1}$ would identify $X_P$ with a product between its two marked ends, contrary to hypothesis. Therefore $T_c$ is not boundary-parallel. For this closed torus boundary-incompressibility is vacuous, so it is essential by [F6]. [F1, F6, step 1.1, step 2.1, given, construct] ∎
