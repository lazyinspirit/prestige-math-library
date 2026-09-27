---
id: ex-a-simple-module-projective-resolution-for-a-two
kind: example
title: "An explicit projective resolution of the vertex module S_2 for A_2"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions, ex-the-a-two-khovanov-seidel-algebra-and-its-projectives, def-vertex-khovanov-seidel-modules, def-graded-khovanov-seidel-module-category-and-projectives, def-projective-resolution-in-an-abelian-category]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2a, printed pp. 9-10"
      url: "https://arxiv.org/pdf/math/0006056"
verification:
  precheck: pass
---

## Example

Let $A_2$ be the Khovanov–Seidel type A algebra with its vertex projectives
$P_0,P_1,P_2=A_2e_0,A_2e_1,A_2e_2$ of
[[ex-the-a-two-khovanov-seidel-algebra-and-its-projectives]] and let $S_2$ be
the vertex module of [[def-vertex-khovanov-seidel-modules]]: the group
$\mathbb Z$ placed in internal degree $0$, with $e_2$ acting as the identity and
every other path of $A_2$ acting as $0$. Then $S_2$ has the explicit graded
projective resolution
$$0\longrightarrow P_0\xrightarrow{\ \cdot(0|1)\ }P_1\xrightarrow{\ \cdot(1|2)\ }P_2\xrightarrow{\ \varepsilon\ }S_2\longrightarrow 0,$$
where the two inner maps are right multiplication by the degree-zero ascending
arrows $(0|1)$ and $(1|2)$ and the last map is the $A_2$-linear surjection with
$\varepsilon(e_2)=1$. Every map is a degree-zero $A_2$-module map, and the
sequence is exact at each of its three nonzero terms.

## Facts & Assumptions

**Given:** The algebra $A_2$ with its nine-element path basis, the vertex projectives $P_0,P_1,P_2$ and their bases of paths ending at $0,1,2$, the internal degree with $\deg(0|1)=\deg(1|2)=0$ and $\deg(1|0)=\deg(2|1)=\deg(1|0|1)=\deg(2|1|2)=1$, and the vertex module $S_2$.

[L1] $P_0=\mathbb Z(0)\oplus\mathbb Z(1|0)$, $P_1=\mathbb Z(1)\oplus\mathbb Z(0|1)\oplus\mathbb Z(2|1)\oplus\mathbb Z(1|0|1)$ and $P_2=\mathbb Z(2)\oplus\mathbb Z(1|2)\oplus\mathbb Z(2|1|2)$, with the degrees displayed; products of composable paths are left-to-right concatenations, products of non-composable paths are $0$, every path of length at least three vanishes in $A_2$, $(0|1|0)=0$, $(0|1|2)=0$ and $(1|2|1)=(1|0|1)$ ([[ex-the-a-two-khovanov-seidel-algebra-and-its-projectives]]).

[F2] $S_2$ is $\mathbb Z$ in internal degree $0$ with $e_2$ acting as the identity and every other path of the quiver, in particular every arrow and every return, acting as $0$; it is a finitely generated graded left $A_2$-module, and a graded $A_2$-linear map $P_2\to S_2$ is determined by the image of $e_2$ ([[def-vertex-khovanov-seidel-modules]]).

[L3] For a finitely generated graded left $A_m$-module $M$, a finite graded projective resolution is an exact sequence $0\to P_a\to\cdots\to P_0\to M\to0$ with every $P_k$ finite graded projective and every map degree zero; $S_2$ is known to admit such a resolution with all terms of the form $P_j$, so a displayed sequence is compared with it term by term ([[def-projective-resolution-in-an-abelian-category]], [[lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions]]).

[L4] Right multiplication by a degree-zero path $q$ from $j$ to $k$ is the degree-zero $A_m$-linear map $P_j\to P_k$ given on a path $p$ ending at $j$ by $p\mapsto pq$, which is $0$ unless $q$ begins at $j$ and, when nonzero, is the concatenation of $p$ and $q$ ([[ex-the-a-two-khovanov-seidel-algebra-and-its-projectives]], [[def-graded-khovanov-seidel-module-category-and-projectives]]).


## Verification

**Proof technique:** direct.

1.1 *The map $P_0\to P_1$.* By [L4] right multiplication by $(0|1)$ is the degree-zero $A_2$-linear map $P_0\to P_1$ with $(0)\mapsto(0)(0|1)=(0|1)$ and $(1|0)\mapsto(1|0)(0|1)=(1|0|1)$ by [L1]; both images are basis elements of $P_1$ by [L1], the degrees are preserved because $(0)$ and $(0|1)$ have degree $0$ and $(1|0)$ and $(1|0|1)$ have degree $1$, and the map is injective because it carries a basis to a linearly independent set. [L1, L4]

1.2 *The map $P_1\to P_2$.* Right multiplication by $(1|2)$ is the degree-zero $A_2$-linear map $P_1\to P_2$ with $(1)\mapsto(1|2)$, $(2|1)\mapsto(2|1)(1|2)=(2|1|2)$, $(0|1)\mapsto(0|1)(1|2)=(0|1|2)=0$ and $(1|0|1)\mapsto(1|0|1)(1|2)=(1|0|1|2)=0$, the last two being respectively a monotone length-two path and a length-three path; again $(1)$ and $(1|2)$ have degree $0$ while $(2|1)$ and $(2|1|2)$ have degree $1$. [L1, L4]

1.3 *The map $P_2\to S_2$.* Define $\varepsilon$ to be the $A_2$-linear map with $\varepsilon(e_2)=1$ and $\varepsilon((1|2))=\varepsilon((2|1|2))=0$, which is well defined by the formula $\varepsilon(ae_2)=a\cdot1$: if $ae_2=0$, then $a\cdot1=(ae_2)\cdot1=0$ since $e_2\cdot1=1$. This formula is $A_2$-linear by the module action in [F2]; it is surjective because $S_2=\mathbb Z\cdot1$ and it is degree zero because $e_2$ has degree $0$. [F2, L1]

2.1 *Every composite in the sequence is zero.* The composite $P_0\to P_1\to P_2$ is right multiplication by $(0|1)(1|2)=(0|1|2)=0$ by step 1.1, step 1.2 and [L1]; the composite $P_1\to P_2\to S_2$ kills the image of the second map, namely the basis elements $(1|2)$ and $(2|1|2)$, which are sent to $0$ by step 1.3. [step 1.1, step 1.2, step 1.3, L1]

2.2 *Exactness at $P_1$.* By step 1.2 the kernel of right multiplication by $(1|2)$ is the span of the two basis elements that are killed, $(0|1)$ and $(1|0|1)$, and by step 1.1 the image of right multiplication by $(0|1)$ is exactly the span of $(0|1)$ and $(1|0|1)$; the two submodules of $P_1$ are therefore equal, so $\ker(P_1\to P_2)=\mathrm{im}(P_0\to P_1)$. [step 1.1, step 1.2]

2.3 *Exactness at $P_2$.* A basis element of $P_2$ is in the kernel of $\varepsilon$ exactly when it is not $(2)$, since $\varepsilon((2))=1$, so $\ker\varepsilon=\mathbb Z(1|2)\oplus\mathbb Z(2|1|2)$ by step 1.3; by step 1.2 that span is exactly the image of right multiplication by $(1|2)$, so $\ker\varepsilon=\mathrm{im}(P_1\to P_2)$. [step 1.2, step 1.3]

3.1 *Conclusion.* The displayed sequence $0\to P_0\to P_1\to P_2\to S_2\to0$ has finitely generated graded projective resolution terms $P_0,P_1,P_2$, all maps are degree-zero $A_2$-linear maps by steps 1.1, 1.2 and 1.3, the first map is injective by step 1.1, the last is surjective by step 1.3, every composite is zero by step 2.1 and the sequence is exact at $P_1$ and at $P_2$ by steps 2.2 and 2.3; hence it is a finite graded projective resolution of the vertex module $S_2$, of length $2$, as in [L3]. The two inner differentials are right multiplications by the degree-zero arrows $(0|1)$ and $(1|2)$, exactly the arrows ascending toward the vertex $2$; the module $S_2$ is a rank-one $\mathbb Z$-module and is therefore not a simple module over $A_2$ in the ungraded sense, the word "simple" belonging to the inherited identifier only. [step 1.1, step 1.3, step 2.2, step 2.3, L3] ∎
