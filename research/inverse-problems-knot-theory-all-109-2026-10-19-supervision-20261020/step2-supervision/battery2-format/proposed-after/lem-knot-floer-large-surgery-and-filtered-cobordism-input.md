---
id: lem-knot-floer-large-surgery-and-filtered-cobordism-input
kind: lemma
title: "Knot Floer cobordism maps give the tau genus shift"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - def-smooth-knot-concordance
  - def-smooth-and-topological-slice-genus
  - lem-smooth-and-topological-slice-genus-minima-exist
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-generic-movie-of-an-oriented-knot-cobordism
  - lem-smooth-link-cobordisms-admit-finite-generic-movies
  - def-decorated-link-cobordism-and-floer-target
  - def-knot-floer-cobordism-map
  - lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
  - lem-knot-floer-cobordism-naturality-and-movie-invariance
  - def-countable-choice
  - lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps
  - lem-tau-threshold-under-nonzero-filtered-maps
  - lem-tau-connected-sum-filtered-tensor-product
  - lem-tau-additive-for-filtered-tensor-products
  - lem-knot-floer-duality-and-filtration-swap
  - lem-puncturing-smooth-four-ball-surfaces-gives-genus-preserving-knot-cobordisms
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The declared AC_omega branch governs the normalized knot models and finite cut-arc constructions. Hom’s published F2 genus inequality is imported as a theorem-level input at its stated knot and four-ball scope; no separate reconstruction of its proof under a weaker choice axiom is claimed."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "Proposition 3.1 and Lemma 3.5, §§3.1 and 3.3–3.4; retained as source context in its integral coefficient setup, not used as an F2 map input"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§3.1, Theorem 3.1(2), printed p.8; §3.2.1, Theorem 3.4, pp.8–9; coefficients F=Z/2Z throughout, stated p.2"
    - title: "Ian Zemke, Link cobordisms and absolute gradings on link Floer homology"
      url: "https://arxiv.org/pdf/1701.03454v2"
      locator: "Theorem 1.4, §§7.3, 9.9, and 10.1; Alexander grading shifts and the cobordism genus inequality"
---

## Statement

Assume the Axiom of Countable Choice. Let $S$ be a connected compact smooth oriented surface properly embedded in $S^3\times[0,1]$, with product collars and oriented boundary $-K_0\times\{0\}\sqcup K_1\times\{1\}$ for smooth oriented knots $K_0,K_1$. Let $g$ be the genus of $S$, and use the standard absolute Alexander normalization for the endpoint knot Floer complexes. Then
$$|\tau(K_1)-\tau(K_0)|\le g.$$
In particular, a smooth concordance annulus gives equal tau values, and a genus-$g$ surface from a knot to the unknot gives the four-ball genus estimate.

## Statement references

[[def-knot-floer-filtration-and-tau|The normalized tau value from the filtered complex]]

[[def-smooth-knot-concordance|Smooth cobordisms with oriented boundary and product collars]]

[[def-knot-floer-cobordism-map|The representative map for a decorated knot cobordism]]

[[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing|The required triangle moduli spaces]]

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, Theorem 1.1 and §§3.3–3.5](https://arxiv.org/pdf/math/0301149v4)

[Hom, *A survey on Heegaard Floer homology and concordance*, §§3.1–3.2](https://arxiv.org/pdf/1512.00383v3)

[Zemke, *Link cobordisms and absolute gradings on link Floer homology*, Theorem 10.1](https://arxiv.org/pdf/1701.03454v2)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the collared smooth oriented cobordism $S$, its endpoint knots, and the fixed Alexander normalization.

[A1] [[def-countable-choice]] states that every sequence of nonempty sets admits a choice function; the normalized analytic knot models use the declared countable-choice branch.

[F1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] supplies the normalized full filtered comparison between the local knot model and the standard knot Floer invariant used in the cited genus theorem.

[F2] **External input, authorized by the run-specific source boundary.** Hom, *A survey on Heegaard Floer homology and concordance*, §3.1, Theorem 3.1(2), printed p.8, states $|\tau(K)|\le g_4(K)$ for every smooth knot $K\subset S^3$. Hom states on printed p.2 that the paper works throughout with $\mathbb F_2$ coefficients. In §3.1 the threshold is the least Alexander level at which the filtered inclusion surjects onto $\widehat{HF}(S^3)\cong\mathbb F_2$; this agrees with the nonzero-image convention here because the target is one-dimensional. For any actual smooth genus-$h$ spanning surface, $g_4(K)\le h$, so the imported theorem gives $|\tau(K)|\le h$. This is a direct $\mathbb F_2$ genus input; it does not infer a mod-two nonvanishing map from an integral map.

[F3] [[lem-tau-connected-sum-filtered-tensor-product]] supplies connected-sum additivity, and [[lem-knot-floer-duality-and-filtration-swap]] identifies the normalized reverse-mirror complex with the bifiltered dual. Step 2.1 gives the finite filtered threshold calculation needed for $\tau(-K)=-\tau(K)$.

[F4] [[def-knot-floer-filtration-and-tau]] fixes the standard unknot generator at filtration zero, so its diagramwise threshold is $\tau(U)=0$.

[F5] [[lem-puncturing-smooth-four-ball-surfaces-gives-genus-preserving-knot-cobordisms]] supplies the product-collar puncturing of an actual spanning surface when the four-ball corollary is phrased as a knot cobordism.

**Coefficient boundary for retained source context.** Ozsváth–Szabó, *Knot Floer homology and the four-ball genus*, Proposition 3.1 and Lemma 3.5 are stated in that paper's integral setup (in particular, it identifies $\widehat{HF}(S^3)$ with $\mathbb Z$). Their nonvanishing and disk-bundle statements are not used here as $\mathbb F_2$ statements. Hom's direct genus theorem [F2] is the only external genus input used in the proof. The relevant passages checked were Hom's coefficient convention and Theorem 3.1(2), and the compatible threshold definition in §3.1; no whole-paper reading or reconstruction of Hom's cited proof is claimed.

## Proof

1.1 Let $C$ be the normalized finite filtered hat complex for a knot and put $t=\tau(C)$. Choose a cycle $x\in F_tC_n$ representing the generator of $H(C)\cong\mathbb F_2$ in degree $n$. By minimality of $t$, every cycle in $F_{t-1}C_n$ is a boundary. Hence $x\notin B_n+F_{t-1}C_n$, where $B_n=\operatorname{im}(\partial_{n+1})$; otherwise $x-b$ would be a cycle in $F_{t-1}C_n$ representing the same nonzero class. Extend a linear functional $\lambda:C_n\to\mathbb F_2$ that vanishes on $B_n+F_{t-1}C_n$ and satisfies $\lambda(x)=1$. It is a cocycle and represents the nonzero class in the dual homology, since it evaluates nontrivially on the cycle $x$. By [F3], the reflected knot's normalized Laurent complex is the R-dual with both coordinates negated. In the normalized $i=0$ hat slice, the $U^0$ terms are exactly the hat differential, while positive $U$ powers leave that slice in both original and dual complexes; transposing therefore gives the finite hat dual. Negating the Alexander coordinate gives its annihilator filtration $F_sC^\vee=\{\mu:\mu(F_{-s-1}C)=0\}$. Thus $\lambda\in F_{-t}C^\vee$, so $\tau(C^\vee)\le -t$. If $s<-t$, then $-s-1\ge t$ and every functional in $F_sC^\vee$ annihilates $F_tC$, hence pairs trivially with $[x]$. The evaluation pairing identifies $H(C^\vee)$ with $H(C)^\vee$ and is nondegenerate; therefore no such lower filtration level maps nontrivially to total dual homology. This gives $\tau(C^\vee)\ge -t$, and hence $\tau(-K)=-\tau(K)$ in the normalized knot setting. [F1, F3, given, construct, algebra]

1.2 Choose a smooth embedded arc on $S$ joining its two boundary components. Cut $S$ along a thin strip about that arc, and remove from $S^3\times I$ the interior of a compatible tubular neighborhood of the arc. A properly embedded arc joining the two boundary spheres in this simply connected four-dimensional product is isotopic to a product arc relative its ends: a generic homotopy of such arcs is a path of embeddings, since the coincidence condition for two distinct arc points at the same time has dimension $1+1+1-4<0$, and the derivative-zero condition is also avoidable. These are finitely many compact smooth general-position choices. Removing the product arc neighborhood turns the ambient shell into $B^4$, after rounding its product corners. The cut surface has one boundary component $K_1\#(-K_0)$ and Euler characteristic $\chi(S)+1=1-2g$, hence genus $g$. Its product collars supply the ordinary connected-sum boundary convention. Thus it is an actual smooth genus-$g$ spanning surface for $K_1\#(-K_0)$. [given, construct]

2.1 By [F2] and the surface from step 1.2, $$|\tau(K_1\#(-K_0))|\le g_4(K_1\#(-K_0))\le g.$$ Using connected-sum additivity from [F3] and the threshold sign established in step 1.1 gives $\tau(K_1\#(-K_0))=\tau(K_1)-\tau(K_0)$. This proves the stated inequality. If $g=0$, it gives concordance invariance. If one boundary knot is the standard unknot, [F4] gives the four-ball genus estimate; equivalently, puncture an actual spanning surface and use [F5] to obtain that cobordism case. The only external genus assertion used is Hom's direct $\mathbb F_2$ theorem [F2]; no coefficient transfer from the integral surgery-trace maps is made. [F2, F3, F4, F5, step 1.1, step 1.2, algebra] ∎

