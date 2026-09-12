---
id: "prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f"
kind: "proposition"
title: "Hypercohomology edge maps are canonical"
deps: ["thm-first-hypercohomology-spectral-sequence", "thm-second-hypercohomology-spectral-sequence", "def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Weibel, Section 5.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

In the setting and comparison-data conventions of the two hypercohomology spectral sequences, suppose $K^q=0$ for $q<b$ and $n\ge b$. Write $\mathbb R^nF(K)$ for the relative target. The first sequence has canonical edge maps
$$H^n(FK)\longrightarrow\mathbb R^nF(K)\longrightarrow\ker\bigl(R^{n-b}F(K^b)\to R^{n-b}F(K^{b+1})\bigr).$$
The second has canonical edge maps
$$R^{n-b}F(H^bK)\longrightarrow\mathbb R^nF(K)\longrightarrow F(H^nK).$$
They are the augmentation, inclusion and projection maps described in the proof, after the indicated degree translation. No map is asserted to split, be monic, or be epic beyond the associated filtration maps.

## Facts & Assumptions

**Given:** $F,K,I,b,n$ as in the statement, with the comparison qualifications of the two spectral-sequence theorems.

[F1] The first sequence has $E_1^{p,q}=R^qF(K^p)$, support $q\geq0$, $p\geq b$, and differentials of bidegree $(r,1-r)$ ([[thm-first-hypercohomology-spectral-sequence]]).

[F2] The second sequence has $E_2^{p,q}=R^pF(H^qK)$ with the filtration by resolution degree ([[thm-second-hypercohomology-spectral-sequence]]).

[F3] A cohomological edge is the extremal graded inclusion or quotient followed by the finite transition maps ([[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]]).

## Proof

1.1 Let $h^p:I^{p,\bullet}\to I^{p+1,\bullet}$ be the horizontal Cartan–Eilenberg map. Compatibility with the augmentations says that $h^p$ lifts $d_K^p$, so its map on vertical cohomology is the relative derived map $R^qF(d_K^p)$. Since $d_1$ is induced by this horizontal map, $d_1=R^qF(d_K)$. For $q=0$, left exactness identifies $F(K^p)$ with $\ker(F(I^{p,0})\to F(I^{p,1}))$, and this identification carries $d_1$ to $F(d_K)$. The augmentations therefore give a cochain map $FK\to\operatorname{Tot}(FI)$. On a degree-$n$ cycle its image lies in the extremal column $n$ and has no positive-resolution component. In the column filtration this is exactly the representative of the bottom-row edge from $E_2^{n,0}=H^n(FK)$, with the finite transition quotients killing precisely the later boundaries. Thus the induced cohomology map is that edge. [F1, F3]

1.2 In the second sequence, $B^{b,p}=0$ and therefore $H^{b,p}=Z^{b,p}\subset I^{b,p}$. Inclusion of these horizontal cycles gives a cochain map from their vertical resolution after $F$, placed starting in total degree $b$, into the total complex. Its cohomology map is $R^{n-b}F(H^bK)\to\mathbb R^nF(K)$, using the constant sign $(-1)^b$ on the vertical differential. These are the bottom-row representatives for the resolution-degree filtration, so this is its lower edge. [F2, F3]

2.1 Projection of the total complex onto column $b$ gives a cochain map to that column with its signed differential and original degree placement. The total cocycle equation in column $b+1$ says the horizontal image of the projected vertical class is zero. By the $d_1$ calculation in step 1.1, the cohomology map therefore lands in $\ker(R^{n-b}F(K^b)\to R^{n-b}F(K^{b+1}))$, which is the left-axis $E_2$ term because there is no preceding column. Projection is the quotient by the first positive translated filtration piece, so F3 identifies it with the other first-sequence edge. [F1, F3, step 1.1]

3.1 Projection onto resolution degree zero sends a total cocycle to a horizontal cohomology class in $F(H^{n,0})$. Its induced vertical differential is zero by the next component of the total cocycle equation. Left exactness identifies this kernel with $F(H^nK)$, since $H^{n,\bullet}$ resolves $H^nK$. Total boundaries give zero under this map. It is the filtration quotient at resolution degree zero and hence the upper edge. The same equations are morphism equalities on cycle and boundary subobjects, so they do not require selected representatives in an abelian category. For $n=b$ both filtrations have one piece and the arrows agree with the bottom augmentation identification; zero targets cause no exception. [F2, F3, step 1.2] ∎
