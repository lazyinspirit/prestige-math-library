---
id: lem-finite-hardykrause-variation-implies-riemann-integrability
kind: lemma
title: "Finite Hardy–Krause variation implies bounded Riemann integrability"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-hardykrause-variation
  - def-hardykrause-variation-lower-anchor
  - lem-bounded-coordinatewise-monotone-is-riemann-integrable
  - thm-multidimensional-integral-properties
  - thm-multidimensional-riemann-criterion
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen and Daniel Rudolf, A strong law of large numbers for scrambled net integration, Section 2, Lemma 1"
      url: "https://arxiv.org/pdf/2002.07859v3"
    - title: "Christoph Aistleitner and Josef Dick, Functions of bounded variation, signed measures, and a general Koksma–Hlawka inequality, Section 3"
      url: "https://arxiv.org/pdf/1406.0230v2"
---

## Statement

Let $d\ge1$ and let $f:[0,1]^d\to\mathbb R$ have finite upper-anchor
Hardy–Krause variation $V_{HK,1}(f)$ as defined in
[[def-hardykrause-variation]]. Then $f$ is bounded and Riemann integrable on
$[0,1]^d$.

## Facts & Assumptions
**Given:** A real-valued function on the cube with finite upper-anchor Hardy–Krause variation.

[F1] $V_{HK,1}(f)$ is the sum of the Vitali variations of the face restrictions with all complementary coordinates fixed at $1$. ([[def-hardykrause-variation]])

[F2] $V_{HK,0}(g;R)$ is the sum of Vitali variations of face restrictions with complementary coordinates fixed at the lower endpoints of $R$. ([[def-hardykrause-variation-lower-anchor]])

[F3] A bounded function on the cube that is nondecreasing in each coordinate is Riemann integrable. ([[lem-bounded-coordinatewise-monotone-is-riemann-integrable]])

[F4] The difference of two Riemann-integrable functions on the cube is Riemann integrable. ([[thm-multidimensional-integral-properties]])

[F5] A bounded function is Riemann integrable exactly when it has arbitrarily small grid Darboux gaps. ([[thm-multidimensional-riemann-criterion]])




## Proof

1.1 Let $\rho(x)=\mathbf1-x$ and $g=f\circ\rho$. Reflection sends each upper face of $f$ to the corresponding lower face of $g$, sends each product grid to a product grid, and reverses the sign of an alternating increment by at most a factor $(-1)^{|u|}$. Its absolute value is unchanged. Hence $V_{HK,0}(g)=V_{HK,1}(f)<\infty$. [F1, F2, given, construct]

2.1 For $x\in[0,1]^d$, put $v(x)=V_{HK,0}(g;[0,x])$. Every grid on a smaller face rectangle extends to a grid on the corresponding whole face by inserting the smaller rectangle's upper endpoints as knots; the old cells remain and the added absolute-increment terms are nonnegative. Hence each face variation on $[0,x]$ is at most the corresponding whole-face variation, and enlarging an upper endpoint cannot decrease it. Thus $0\le v(x)\le V_{HK,0}(g)$ and $v$ is nondecreasing in each coordinate. [F2, step 1.1]

3.1 Fix a coordinate $j$, fix the other coordinates $x_{-j}$, and let $0\le a<b\le1$. Write $x^a,x^b$ for the vectors with $j$th coordinate $a,b$. Terms in $v$ whose varied-coordinate set omits $j$ cancel in $v(x^b)-v(x^a)$. For a term whose set is $A\cup\{j\}$, additivity of Vitali variation at the split $[0,a]\cup[a,b]$ shows that its difference is the Vitali variation on the face rectangle $R_A$ with $j$ interval $[a,b]$, coordinates in $A$ intervals $[0,x_i]$, and all remaining coordinates fixed at $0$. Additivity follows directly by inserting $a$ into every grid: refinement and the triangle inequality give one inequality, while joining grids whose sums approach the two suprema gives the reverse inequality. Therefore $v(x^b)-v(x^a)=\sum_{A\subseteq[d]\setminus\{j\}}V_V(g_{A\cup\{j\},0};R_A)$. [F2, step 2.1, construct]

4.1 Expanding the right side of the finite-difference identity by inclusion–exclusion gives $g(x^b)-g(x^a)=\sum_{A\subseteq[d]\setminus\{j\}}\Delta_{A\cup\{j\}}g(R_A)$: every vertex with a coordinate outside $A\cup\{j\}$ set to $0$ cancels with the same vertex from the term with that coordinate added to $A$, leaving only the two vertices with all other coordinates equal to $x_{-j}$. Each one-cell grid shows $V_V(g_{A\cup\{j\},0};R_A)\ge|\Delta_{A\cup\{j\}}g(R_A)|$. The triangle inequality and step 3.1 now give $v(x^b)-v(x^a)\ge|g(x^b)-g(x^a)|$. Consequently both $v$ and $w:=v-g$ are nondecreasing in every coordinate. [F2, step 3.1, algebra]

5.1 The function $v$ is bounded by step 2.1. The function $w$ is finite-valued and coordinatewise nondecreasing, so $w(\mathbf0)\le w(x)\le w(\mathbf1)$ for every $x$ and is bounded as well. By [F3], $v$ and $w$ are Riemann integrable; since $g=v-w$, [F4] makes $g$ Riemann integrable. Reflection preserves boundedness and maps each grid cell to a cell of the same volume with the same infimum and supremum values for $f=g\circ\rho$, so f has the same arbitrarily small Darboux gaps as g. The criterion [F5] makes $f$ Riemann integrable. [F3, F4, F5, step 1.1, step 2.1, step 4.1] ∎
