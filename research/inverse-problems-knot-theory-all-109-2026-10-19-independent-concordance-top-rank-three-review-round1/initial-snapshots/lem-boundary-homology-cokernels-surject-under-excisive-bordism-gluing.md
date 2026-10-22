---
id: lem-boundary-homology-cokernels-surject-under-excisive-bordism-gluing
kind: lemma
title: Boundary homology cokernels under bordism gluing
status: draft
origin: session
deps: [thm-excision-and-mayer-vietoris-with-local-coefficients]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Lemma4.13, printed pages17–18
---

## Statement

Let $R$ be a commutative unital ring. Let $W$ and $X$ be compact manifolds with supplied boundary collars and decompositions $\partial W=A\sqcup D$ and $\partial X=A\sqcup B$, where each summand is a union of boundary components. Glue the two copies of $A$ by a supplied homeomorphism, obtaining $Y=W\cup_A X$ with $\partial Y=D\sqcup B$. All homology below has constant coefficients $R$. Suppose
$$H_1(A;R)\longrightarrow H_1(X;R)\ \text{is injective},\qquad H_2(B;R)\longrightarrow H_2(X;R)\ \text{is surjective}.$$
Then inclusion of $W$ induces a well-defined surjection
$$\frac{H_2(W;R)}{\operatorname{im}H_2(\partial W;R)} \twoheadrightarrow \frac{H_2(Y;R)}{\operatorname{im}H_2(\partial Y;R)}.$$
In particular, if $R$ is a field and the first quotient is finite dimensional, the dimension of the second quotient is at most that of the first. No injectivity assumption on $H_2(A;R)\to H_2(X;R)$, orientability, or choice principle is needed.

## Facts & Assumptions

**Given:** The manifolds, collars, gluing and coefficient ring in the Statement, and the two homology hypotheses.

[F1] Constant $R$ coefficients are a local system, and an excisive cover gives its homology Mayer–Vietoris sequence. The actual small-chain construction uses only least subdivision integers and finite chain operations. [[thm-excision-and-mayer-vietoris-with-local-coefficients]]

## Proof

1.1 The supplied collars give an open cover of $Y$ by a neighborhood of $W$ and a neighborhood of $X$, retracting onto $W,X$, with intersection retracting onto $A$. In collar coordinates this is obtained by adding a short collar segment across the seam to each side; shrinking its height linearly gives the three retractions. Hence [F1] gives the exact window
$$H_2(A;R)\xrightarrow{(i_W,-i_X)} H_2(W;R)\oplus H_2(X;R)\xrightarrow{j_W+j_X} H_2(Y;R)\xrightarrow{\delta}H_1(A;R) \xrightarrow{(i_W,-i_X)}H_1(W;R)\oplus H_1(X;R).$$
The last arrow is injective, since its $X$ coordinate is injective by hypothesis. Exactness therefore says that $j_W+j_X$ is surjective. This statement is elementwise and does not choose a simultaneous family of preimages. [F1, given, construct, algebra]

2.1 Write $Q_Y=H_2(Y;R)/\operatorname{im}H_2(D\sqcup B;R)$ and let $\pi$ be its quotient map. Every $x\in H_2(X;R)$ is the image of a class in $H_2(B;R)$, by hypothesis. Its image in $H_2(Y;R)$ therefore lies in the boundary image, so $\pi j_X=0$. For any $y\in H_2(Y;R)$ choose, for this one $y$, a preimage $(w,x)$ under the surjection of step 1.1. Then $\pi(y)=\pi j_W(w)$. Thus $\pi j_W:H_2(W;R)\to Q_Y$ is surjective. [given, step 1.1, construct, algebra]

3.1 A class from $H_2(D;R)$ maps to zero under $\pi j_W$ because $D$ is a component union of $\partial Y$. A class $a\in H_2(A;R)$ has $j_Wi_W(a)=j_Xi_X(a)$ by the zero composite of the first two Mayer–Vietoris arrows. step 2.1 makes the latter class zero in $Q_Y$. Since $\partial W=A\sqcup D$, every boundary class of $W$ is a sum of these two kinds, so $\pi j_W$ vanishes on the full boundary image. It therefore factors uniquely through the displayed source quotient, and the factored map is surjective by step 2.1. This proves the claimed canonical map, without any assumption on $H_2(A;R)\to H_2(X;R)$. [step 1.1, step 2.1, algebra]

4.1 If the source quotient is a vector space with a finite basis of size $r$, its $r$ images span the target. Finite elimination deletes linearly dependent images until a basis remains, so the target has dimension at most $r$. Only finitely many operations and selections occur. The proof also covers an empty seam or empty outer boundary, zero homology groups and the zero coefficient ring. No step selects representatives for infinitely many classes; surjectivity is used for a single class at a time. Thus the result and the finite-dimensional consequence require no choice principle. [step 2.1, step 3.1, construct, algebra] ∎
