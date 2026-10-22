---
id: lem-bmw-relations-dubrovnik-parameter-dictionary
kind: lemma
title: BMW relations in the Dubrovnik parameter convention
status: published
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
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
$$T=S[q^{\pm1}]/(q-q^{-1}-z).$$
In $T$ put $\rho=a$, $\delta=d$, and $z_B=q-q^{-1}$. Then the natural
map $S\to T$ is injective and $T$ is a free $S$-module with basis $1,q$.
Moreover, the BMW coefficient relation
$$z_B(\delta-1)=\rho-\rho^{-1}$$
holds, and the substitution $a=\rho$, $z_D=z_B$, $d=\delta$ converts
the BMW skein, curl, adjacent untwisting, and loop coefficients to the
Dubrovnik relations in the specified chart: $D_+-D_-=z_D(D_0-D_\infty)$,
the curl factors are $a,a^{-1}$, and a disjoint trivial circle contributes
$d$. Here $D_0$ is through and $D_\infty$ is cup-cap. No skein parameter is
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

[F2] In the chosen Dubrovnik chart, $D_0$ is the through smoothing,
$D_\infty$ is the cup-cap smoothing, the crossing rule is
$D_+-D_-=z_D(D_0-D_\infty)$, and the two curl factors are $a,a^{-1}$
([[def-kauffman-regular-isotopy-and-dubrovnik-conventions]]).

[F3] The bracket chart labels the left/right pairing as the A-smoothing and
the top/bottom pairing as the B-smoothing for an over-strand directed
southwest to northeast ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F4] The coefficient extension is $T=S[q^{\pm1}]/(q-q^{-1}-z)$, with
$z_B=q-q^{-1}$, $z_D=z_B$, $\rho=a$, and $\delta=d$
([[def-bmw-dubrovnik-coefficient-extension]]).

## Proof

1.1 The relation defining $T$ is $q-q^{-1}=z$, hence $q^2-zq-1=0$ and $q^{-1}=q-z$. Therefore $T\cong S[q]/(q^2-zq-1)$. Division by this monic quadratic gives a unique remainder $u+vq$ with $u,v\in S$, so $T$ is free over $S$ on $1,q$ and the constant inclusion is injective. [F4, given, construct, algebra]

2.1 With $\rho=a$, $\delta=d$ and $z_B=z_D=z$, the BMW coefficient relation becomes exactly $z(d-1)=a-a^{-1}$, the defining relation of $S$. Thus every coefficient assignment is compatible. No skein variable is inverted. [F1, F2, F4, step 1.1, algebra]

3.1 In the fixed chart the downward positive Artin crossing has over-strand from top right to bottom left. Its determinant sign is positive, and its orientation-preserving smoothing is the through pairing $D_0$; the other smoothing is the cup-cap $D_\infty$. Consequently the BMW relation maps to $G_i-G_i^{-1}=z_B(1-E_i)=z_D(D_0-D_\infty)$, as required. The bracket's names $A$ and $B$ remain those of [F3]; in this chart the Dubrovnik names $D_0,D_\infty$ are respectively $A,B$. [F1, F2, F3, F4, step 2.1, algebra]

4.1 Composing the positive crossing with a cup-cap reverses the direction of exactly one incident branch when the resulting self-crossing is oriented along its strand. The determinant sign is therefore negative and its curl coefficient is $a^{-1}=\rho^{-1}$, agreeing with $g_i e_i=e_i g_i=\rho^{-1}e_i$. The inverse crossing gives $a=\rho$. In $E_iG_{i\pm1}E_i$ the surviving self-curl has the opposite sign and coefficient $a=\rho$, agreeing with the adjacent untwisting relation. A double cup-cap creates one trivial circle, so its coefficient is $d=\delta$. These checks distinguish a curl after bending from a positive braid closure, whose strands retain their downward orientations and whose curl coefficient is $a$. [F1, F2, step 3.1, algebra] ∎
