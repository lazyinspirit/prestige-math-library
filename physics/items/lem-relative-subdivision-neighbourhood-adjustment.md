---
id: lem-relative-subdivision-neighbourhood-adjustment
kind: lemma
title: "Relative subdivision neighbourhood adjustment"
status: published
origin: pipeline
deps: ["lem-relative-derived-subdivision-makes-the-fixed-subcomplex-full", "lem-the-open-star-criterion-produces-a-simplicial-map", "lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Statement

Let $A\subseteq K$ be a finite simplicial pair, $T_r=D_A^rK$. There is a finite linear subdivision $T^+$ between $T_1$ and $T_2$ and a piecewise affine $h:|K|\to|K|$ homotopic to the identity rel $|A|$, sending an open neighbourhood of $|A|$ into $|A|$. More precisely, let $B_2$ be the subcomplex of $T_2$ consisting of simplices with no vertex in $A$. Then:

- for every $r\geq3$ and every vertex $v$ of $T_r$ outside $|B_2|$, there is a vertex $a\in A$ with $h(\operatorname{st}_{T_r}(v))\subseteq\operatorname{st}_A(a)$; if $v\in A$ take $a=v$;
- the maximum of the diameters of the stars of vertices of $T_r$ lying in $|B_2|$ tends to zero.

The homotopy from the identity to $h$ stays in each original simplex. The maximum of an empty family of star diameters here is assigned zero.

## Source locators

2.5.18–2.5.20 pp.54–56; Zeeman theorem proof pp.40–42.


## Facts & Assumptions

[F1] The relative subdivision is full on the A vertices. [[lem-relative-derived-subdivision-makes-the-fixed-subcomplex-full]].

[F2] The finite source permits continuous affine common-carrier interpolation. [[lem-the-open-star-criterion-produces-a-simplicial-map]].

[F3] Ordinary iterated mesh tends to zero and stars are bounded by twice mesh. [[lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero]].


## Proof

**Given:** A finite pair, geometrically identify all relative subdivisions with $|K|$, and put $T_r=D_A^rK$.

1.1 By fullness, in $T_1$ the fixed complex $A$ is induced on its vertices. Let $B_1$ be the induced subcomplex on the other vertices. They are disjoint. Form $T^+=D_{A\cup B_1}T_1$: it subdivides just the mixed simplices of $T_1$. Its new vertices are barycenters $b_\sigma$ of mixed faces. The face $\sigma\cap A$ is nonempty by mixedness and is a face by fullness; choose one of its vertices $a_\sigma$. Define $h$ to fix the vertices of $A\cup B_1$ and send $b_\sigma$ to $a_\sigma$. All choices are finite. [F1]

2.1 For a simplex of $T^+$, its base face belongs to $A\cup B_1$ and its additional vertices are barycenters of a nested chain of mixed faces of $T_1$. Every image vertex lies in the largest face of this chain, or in the base face if the chain is empty. Hence the images span a simplex of $T_1$, so $h$ extends simplicially from $T^+$ to $T_1$. Moreover each $h(v)$ belongs to the positive $T_1$ support of $v$: this is immediate for a fixed old vertex, and a mixed barycenter is positive at every vertex of its face. If $x\in\operatorname{st}_{T^+}(v)$, its positive coefficient at $v$ therefore makes its $h(v)$ coordinate positive in $T_1$. Thus $\operatorname{st}_{T^+}(v)\subseteq\operatorname{st}_{T_1}(h(v))$, which verifies the star hypothesis for the identity map and the vertex assignment $h$. For any point $x$ in such a simplex, $x$ and $h(x)$ lie in the same original $T_1$ simplex. Thus $H_t(x)=(1-t)x+th(x)$ remains there. Finite simplexwise affine formulas agree on faces, so $h$ and $H$ are continuous in finite Euclidean realization, and $H_0=1,H_1=h$, with $H_t|_A=1$. [F2, step 1.1]

3.1 If a simplex of $T^+$ contains a vertex $a\in A$, its base face is in $A$, and every other vertex is a mixed-face barycenter mapped to $A$. Its image simplex lies in $A$, since $A$ is full in $T_1$. Moreover a positive coefficient of $a$ remains positive at $a$ in the image. Therefore $h(\operatorname{st}_{T^+}(a))\subseteq\operatorname{st}_A(a)$. The union of these open stars is an open neighbourhood of $|A|$ mapped into $|A|$. [F1, step 1.1, step 2.1]

4.1 The full relative subdivision $T_2$ refines $T^+$: it additionally subdivides $B_1$ and uses the same barycenters on the mixed faces, coning their refined boundaries. It retains the vertices of $A$ and their positive barycentric coordinates, so $\operatorname{st}_{T_2}(a)\subseteq\operatorname{st}_{T^+}(a)$. If $v$ is a vertex of any further $T_r$ outside $|B_2|$, its minimal carrier face in $T_2$ has an $A$-vertex $a$ with positive coordinate at $v$. Every point of $\operatorname{st}_{T_r}(v)$ has positive coefficient at $v$ in some refined simplex; the $T_2$ coordinate of $a$, affine and nonnegative on that simplex, is then positive. Thus this star is contained in $\operatorname{st}_{T_2}(a)$ and its $h$-image in $\operatorname{st}_A(a)$. For $v\in A$ its carrier is the vertex itself. [step 3.1]

5.1 Let $B_3$ be the induced subcomplex of $T_3$ on vertices outside $A$. No simplex of $T_3$ containing an $A$-vertex can meet $|B_2|$: its relative face-chain description has an $A$ base face and all outside barycenters lie on $T_2$ faces containing that base. Every point of such a simplex has a positive coordinate at some vertex of that base in $T_2$, whereas points of $|B_2|$ have all those coordinates zero. Consequently every $T_3$ simplex meeting $|B_2|$ is in $B_3$. For $r\geq3$ and a vertex $v\in|B_2|$, every $T_r$ simplex containing $v$ lies in a $T_3$ simplex meeting $|B_2|$, hence in $B_3$. Since $B_3$ is disjoint from $A$, its further relative subdivisions are ordinary barycentric subdivisions. Each such star has diameter at most $2m(\operatorname{sd}^{r-3}B_3)$, which tends to zero by the mesh estimate. [F1, F3, step 4.1]

6.1 If $A$ is vertex-free then $B_1=T_1$, $T^+=T_1$ and $h=1$; the neighbourhood can be empty and the mesh estimate handles all stars. If $A=K$, then $T^+=K$, $h=1$, and $B_2$ is vertex-free, so only the near clause occurs. These constructions also cover a vertex-free $K$, with empty maps. [step 2.1, step 4.1, step 5.1] ∎
