---
id: lem-bmw-relations-dubrovnik-parameter-dictionary
kind: lemma
title: BMW relations in the Dubrovnik parameter convention
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
  - def-bmw-dubrovnik-coefficient-extension
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
  - def-kauffman-bracket-smoothing-and-loop-value
proof_strategy: direct
axiom_use: "Choice-free: this is a substitution in a presented algebra and its universal coefficient relation."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 51–54/printed pp. 466–469; Dubrovnik skein and curl conventions"
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, Definition 2.6 and Definition 3.1"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 7 and 16; Kauffman tangle and BMW coefficient conventions"
    - title: "Loïc Poulain d'Andecy, Fusion for the Yang–Baxter Equation and the Braid Group, §2.2"
      url: "https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf"
      locator: "PDF pp. 14–15; BMW braid generators and cubic relation"
---

## Statement

Let
$$S=\mathbb Z[a^{\pm1},z,d^{\pm1}]/(z(d-1)-(a-a^{-1}))$$
be the Dubrovnik coefficient ring, and let
$$T=S[q^{\pm1}]/(q-q^{-1}+z).$$
In $T$ put $\rho=a^{-1}$, $\delta=d$, and $z_B=q-q^{-1}$. Then the natural
map $S\to T$ is injective and $T$ is a free $S$-module with basis $1,q$.
Moreover, the BMW coefficient relation
$$z_B(\delta-1)=\rho-\rho^{-1}$$
holds, and the substitution $a=\rho^{-1}$, $z_D=-z_B$, $d=\delta$ converts
the BMW skein, curl, adjacent untwisting, and loop coefficients to the
Dubrovnik relations in the specified chart: $D_+-D_-=z_D(D_0-D_\infty)$,
the curl factors are $a,a^{-1}$, and a disjoint trivial circle contributes
$d$. Here $D_0$ is cup-cap and $D_\infty$ is through. No skein parameter is
divided out.

## Statement references

[[def-bmw-algebra-with-fixed-kauffman-skein-convention|BMW presentation and coefficient relation]]

[[def-bmw-dubrovnik-coefficient-extension|BMW coefficient extension]]

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Dubrovnik crossing chart and local rules]]

[[def-kauffman-bracket-smoothing-and-loop-value|The fixed smoothing chart]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §VII](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Poulain d'Andecy, *Fusion for the Yang–Baxter Equation and the Braid Group* (2020), §2.2](https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf)

## Facts & Assumptions

**Given:** The BMW presentation over $R_B$, its units $q,\rho,\delta$, and the
Dubrovnik chart and parameters $a,z_D,d$.

[F1] The BMW relation is $g_i-g_i^{-1}=z_B(1-e_i)$, the coefficient relation is
$z_B(\delta-1)=\rho-\rho^{-1}$, and the local generators satisfy
$g_ie_i=e_ig_i=\rho^{-1}e_i$, $e_ig_{i\pm1}e_i=\rho e_i$, and
$e_i^2=\delta e_i$
([[def-bmw-algebra-with-fixed-kauffman-skein-convention]]).

[F2] In the chosen Dubrovnik chart, $D_0$ is the cup-cap smoothing,
$D_\infty$ is the through smoothing, the crossing rule is
$D_+-D_-=z_D(D_0-D_\infty)$, and the two curl factors are $a,a^{-1}$
([[def-kauffman-regular-isotopy-and-dubrovnik-conventions]]).

[F3] The bracket chart labels the top/bottom pairing as the A-smoothing and
the left/right pairing as the B-smoothing for an over-strand directed
southwest to northeast ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F4] The coefficient extension is $T=S[q^{\pm1}]/(q-q^{-1}+z)$, with
$z_B=q-q^{-1}$, $z_D=-z_B$, $\rho=a^{-1}$, and $\delta=d$
([[def-bmw-dubrovnik-coefficient-extension]]).

## Proof

1.1 By [F4], the relation defining $T$ gives $q-q^{-1}=-z$, hence $q^2+zq-1=0$ and $q^{-1}=q+z$. Therefore $T\cong S[q]/(q^2+zq-1)$. Division by this monic quadratic gives a unique remainder $u+vq$ with $u,v\in S$, so $T$ is free over $S$ on $1,q$ and the constant inclusion $S\hookrightarrow T$ is injective. [F4, given, construct, algebra]

2.1 By [F1], $z_B(\delta-1)=\rho-\rho^{-1}$. The assignments in [F4] and the statement give $$z_D(d-1)=-(q-q^{-1})(\delta-1)=-(\rho-\rho^{-1}) =\rho^{-1}-\rho=a-a^{-1}.$$ Thus the universal Dubrovnik coefficient relation holds in $T$ and agrees with the scalar image of $S$. No element $z_B$ or $z_D$ is inverted. [F1, F2, F4, step 1.1, algebra]

3.1 By [F1], $$g_i-g_i^{-1}=z_B(1-e_i)=z_D(e_i-1).$$ With $e_i$ the cup-cap smoothing $D_0$ and the identity diagram the through smoothing $D_\infty$, this is exactly the skein rule in [F2]. The chart in [F3] fixes these two smoothing labels without rotating or reversing the crossing. [F1, F2, F3, step 2.1]

4.1 The relation $g_ie_i=e_ig_i=\rho^{-1}e_i$ gives the curl factor $\rho^{-1}=a$; the corresponding inverse crossing gives $\rho=a^{-1}$. The adjacent untwisting relation has factor $\rho=a^{-1}$, matching the oppositely directed curl, and $e_i^2=\delta e_i=d e_i$ is the free-circle rule. These substitutions verify each remaining local coefficient in [F2]. [F1, F2, step 2.1, algebra] ∎
