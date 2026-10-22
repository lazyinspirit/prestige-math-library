---
id: lem-odd-khovanov-and-barnatan-localization-foundations
kind: lemma
title: "Odd Khovanov and Bar–Natan LEO foundations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-odd-khovanov-barnatan-and-leo-triple
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - alg-khovanov-chain-complex-from-diagram
  - lem-khovanov-cube-differential-squares-to-zero
  - lem-khovanov-reidemeister-chain-homotopies
  - thm-khovanov-homology-is-an-oriented-link-invariant
  - def-abstract-oriented-knot-cobordism
  - def-smooth-knot-concordance
  - def-countable-choice
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is used for finite diagram and cobordism movies; algebraic edge calculations are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter Ozsváth, Jacob Rasmussen, and Zoltán Szabó, Odd Khovanov homology, arXiv:0710.4300"
      url: https://arxiv.org/pdf/0710.4300
      locator: "§§1–3, especially Lemma 1.2 and Propositions 3.1–3.3"
    - title: "Krzysztof K. Putyra, A 2-category of chronological cobordisms and odd Khovanov homology, arXiv:1310.1895"
      url: https://arxiv.org/pdf/1310.1895
      locator: "§§2–3, including chronological edge assignments and cobordism maps"
    - title: "Nathan Dunfield, Robert Lipshitz, and Dirk Schütz, Local equivalence and refinements of Rasmussen's s-invariant, arXiv:2312.09114v3"
      url: https://arxiv.org/pdf/2312.09114v3
      locator: "§§2.1–2.2 and 3.1–3.4, printed pp. 4–13"
    - title: "Robert Lipshitz and Sucharit Sarkar, A mixed invariant of nonorientable surfaces in equivariant Khovanov homology, arXiv:2109.09018v3"
      url: https://arxiv.org/pdf/2109.09018v3
      locator: "Proposition 2.1 and its localized-cube proof"
---

## Statement

Assume the Axiom of Countable Choice. For every finite regular based oriented knot diagram, the odd exterior-algebra cube admits a square-compatible edge assignment and defines a bigraded cochain complex; its mod-2 reduction is chain homotopy equivalent as a marked $\mathbb F_2[X]/(X^2)$-complex to the Bar–Natan complex reduced modulo $(2,h)$. After inverting $h$, the Bar–Natan complex is chain homotopy equivalent to one free rank-one module in cohomological degree $0$ and odd quantum degree over the localized coefficient algebra. Based diagram changes preserve the odd complex up to chain homotopy equivalence, and pointed connected sums give the chain-level tensor product over the marked $\mathbb Z[X]/(X^2)$ action for the odd and Bar–Natan complexes.

## Statement references

[[def-odd-khovanov-barnatan-and-leo-triple|Odd, Bar–Natan and LEO complexes]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Normalized even Khovanov cube]]

[[alg-khovanov-chain-complex-from-diagram|Finite state-cube procedure]]

[Ozsváth–Rasmussen–Szabó, *Odd Khovanov homology* (2007), §§1–3](https://arxiv.org/pdf/0710.4300)

[Putyra, *A 2-category of chronological cobordisms and odd Khovanov homology* (2013), §§2–3](https://arxiv.org/pdf/1310.1895)

[Dunfield–Lipshitz–Schütz, *Local equivalence and refinements of Rasmussen's s-invariant* (2023), §§2.1–3.4](https://arxiv.org/pdf/2312.09114v3)

[Lipshitz–Sarkar, *A mixed invariant of nonorientable surfaces in equivariant Khovanov homology* (2022), Proposition 2.1](https://arxiv.org/pdf/2109.09018v3)

## Facts & Assumptions

**Given:** The odd and Bar–Natan state modules, edge maps and marked actions from the Definition.

[F1] The odd complex uses a sign assignment whose two signed saddle composites sum to zero around every square ([[def-odd-khovanov-barnatan-and-leo-triple]]).

[F2] The even Khovanov cube uses the normalized state modules and rank-two Frobenius operations specified in [[def-khovanov-frobenius-algebra-and-cube-of-resolutions]].

[F3] Modulo $2$ and $h$, the Bar–Natan Frobenius operations reduce to the even Khovanov operations by the formulas of [[def-odd-khovanov-barnatan-and-leo-triple]].

[F4] The even Khovanov homology of an oriented link is diagram-independent under its normalized local chain homotopies ([[thm-khovanov-homology-is-an-oriented-link-invariant]]).

[A1] The Axiom of Countable Choice is the stated axiom for selecting finite diagram and movie data; the finite algebraic calculations below use no choice ([[def-countable-choice]]).

[L1] The ORS existence proof for a type-X sign assignment reduces to a parity census of all connected 3-cube configurations (ORS Figure 4, Lemma 2.1); the text gives the configurations as drawings and leaves the parity verification for most cases to the reader. No complete textual census is supplied here.

[L2] ORS Propositions 3.1–3.3 leave local acyclic-subcomplex checks and the RIII obstruction-cocycle comparison to “easy to see” checks in Figures 7–12. This carrier does not yet provide the full signed bases, contractions and map equations for all oriented RIII variants.

[L3] DLS Proposition 3.4 obtains odd movie naturality by citing Sarkar–Scaduto–Stoffregen Lemma 5.11 and Putyra; a complete local proof of the module-linear homotopy square for all elementary movie moves is absent.

[L4] The odd connected-sum isomorphism is cited from Putyra's Künneth theorem; the basepoint module action and all sign corrections for that chain isomorphism are not rederived here.

## Proof

**Given:** A based knot diagram and its finite resolution cube.

1.1 Conditional on a square-compatible edge assignment, the coefficient of each height-two state in $d^2$ is the sum of the two signed composites around its unique square, which vanishes by [F1]. Thus the assigned odd differential squares to zero. The existence of such an assignment is exactly the unresolved finite parity census [L1]; this step does not treat the existence as proved. [F1, L1, given]

1.2 At each resolution, the exterior basis vector $C_{i_1}\wedge\cdots\wedge C_{i_r}$ corresponds to the even state labeling precisely those circles by $X$ and all others by $1$. Modulo $2$, the odd merge quotient and split wedge maps agree with the even multiplication and comultiplication maps on these basis vectors; every sign $\pm1$ becomes $1$. The edge formulas therefore identify the mod-2 odd differential with the even Khovanov differential, and the Bar–Natan differential modulo $(2,h)$ with the same differential by [F2] and [F3]. Hence the candidate comparison $f_D$ is a chain isomorphism after reduction, provided [L1] supplies an actual odd complex. [F1, F2, F3, L1, given, algebra]

1.3 Work over $S=\mathbb Z[h,h^{-1}]$ and use the basis $A=X$, $B=h-X$ for the circle algebra. The relation $X^2=hX$ gives $A^2=hA$, $B^2=hB$, and $AB=0$. Substitution into the displayed comultiplication gives $\Delta(A)=A\otimes A$ and $\Delta(B)=-B\otimes B$. Thus an edge saddle is zero unless all circle labels incident to it agree; when it is nonzero its coefficient is $h$ or $\pm1$, a unit in $S$. [given, algebra]

2.1 Decompose the localized cube into subcomplexes indexed by equivalence classes of enhanced states, where two states are equivalent when a sequence of nonzero saddle edges connects them. Along such an edge all incident circles have one common label, so the labels on every segment of the original diagram remain fixed. At a crossing whose four incident segment labels all agree, both resolutions are compatible and the edge map is an isomorphism; at any other crossing, an existing compatible state has exactly one possible smoothing. Hence each equivalence class is a Boolean cube on its free crossing coordinates. Let $u(e)\in S^\times$ be a nonzero edge coefficient and let $s(e)=(-1)^{\sum_{i<j}v_i}$ be the standard cube sign on the edge changing coordinate $j$. The square-zero identity gives $u(e_1)u(e_2)=-u(e_3)u(e_4)$ around each square, and the standard signs satisfy the same identity. Thus $u(e)/s(e)$ has product $1$ around every square. Define a state rescaling by multiplying these ratios along any path from the lowest vertex; the square product condition makes it path-independent. After this rescaling the differential is the standard tensor differential on copies of $S\xrightarrow{\mathrm{id}}S$. If the cube has at least one free coordinate, contraction of its first identity factor, tensored with the identity on the other factors and the Koszul sign, contracts the whole summand. [step 1.3, algebra, construct]

2.2 The even comparison is diagram-independent by [F4]. The axiom [A1] permits selection of finite movie data, but it does not supply the odd signed RIII maps; the local contractions and obstruction-cocycle comparison remain unresolved in [L2]. Thus the based odd invariance clause is not proved here. [A1, F4, L2, step 1.1, step 1.2]

3.1 A class with no free coordinate has one generator. Checkerboard-color the regions of the original projection with the unbounded region white; assign each segment label $A$ and direct it with black on the right, or label it $B$ and direct it with black on the left. At a crossing list the four ends clockwise as $1,2,3,4$, with sectors $(1,2)$ and $(3,4)$ black. The arrows at ends $1,3$ point outward/inward for labels $A/B$, and at ends $2,4$ point inward/outward for labels $A/B$. The four cyclic patterns $AABB,ABBA,BBAA,BAAB$ are exactly those for which opposite ends have opposite arrows; each has one smoothing that joins equal labels, and it is the oriented smoothing. All-equal labels give two compatible smoothings and hence a free coordinate; alternating and three-to-one patterns have no compatible smoothing. Thus every nonempty class with no free coordinate determines an orientation, and each orientation determines exactly one such class. This also shows that at every crossing the two Seifert arcs have different labels. Reversing all arrows interchanges $A,B$, so for a knot the two singleton generators have marked-circle labels $A=X$ and $B=h-X$. They satisfy $XA=hA$ and $XB=0$. The elements $A,B$ form an $S=\mathbb Z[h,h^{-1}]$-basis of $\mathbb R[h^{-1}]$, and the map from the localized algebra to their span sending $1\mapsto A+B=h$ and $X\mapsto hA$ is an isomorphism of modules; hence the span is regular of rank one. The oriented state has cohomological degree $|v|-n_-=0$. Each circle label $A,B$ has quantum degree $-1$, so the singleton quantum parity is $|v|+n_+-2n_-+k(v)\equiv n+k_o\pmod2$. The Seifert disk-band surface is connected for a knot and has Euler characteristic $k_o-n=1-2g$, so $n+k_o$ is odd. Therefore the localized homology has the required degree and odd quantum parity. [step 1.3, step 2.1, algebra, construct]

4.1 Movie naturality also requires the marked module-linear square [L3], and the connected-sum formula requires the odd Künneth action and sign correction [L4]. Since these claims are part of the Statement and are not established above, the full item is escalated; no readiness or acceptance is asserted. [L3, L4, step 3.1, step 2.2] ∎
