---
id: alg-kauffman-polynomial-from-bmw-braid-closure
kind: algorithm
title: Compute the Kauffman polynomial from a BMW braid closure
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
  - def-dubrovnik-tangle-skein-algebra
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
  - lem-bmw-presentation-tangle-evaluation-is-well-defined
  - lem-bmw-descending-tangle-spanning
  - lem-bmw-closure-pairing-independence
  - lem-bmw-markov-trace-stabilization
  - lem-framed-kauffman-link-evaluation
  - def-closure-of-a-geometric-braid
  - def-exponent-sum-of-a-braid
proof_strategy: direct
axiom_use: "Choice-free: the braid word and crossing set are finite, and recursive skein evaluation decreases a lexicographic natural-number measure."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.3, 3.5, and 5.1"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 6–8, 25–26, and 33–35: BMW closure evaluation, tangle generators, and descending reduction"
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§VI–VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 38–54/printed pp. 453–469: finite skein evaluation and Dubrovnik-to-Kauffman conversion"
    - title: "Loïc Poulain d’Andecy, Fusion for the Yang–Baxter Equation and the Braid Group, Winter Braids Lecture Notes 7 (2020), §2.2"
      url: "https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf"
      locator: "PDF pp. 14–15: BMW braid-generator convention"
---

## Definition

Use the coefficient extension $T$ with $a=\rho$ and $d=\delta$. On input an integer $n\ge1$ and a finite signed Artin braid word
$$\beta=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_m}^{\varepsilon_m},\qquad \varepsilon_j\in\{-1,1\},\quad 1\le i_j<n,$$
perform the following finite computation:

1. Form the BMW product $b_\beta=g_{i_1}^{\varepsilon_1}\cdots g_{i_m}^{\varepsilon_m}$.
2. Set $w=\sum_{j=1}^m\varepsilon_j$ and let $c$ be the number of cycles of the permutation $s_{i_1}\cdots s_{i_m}$ of $\{1,\ldots,n\}$, counting fixed points.
3. List the perfect matchings of the $2n$ tangle boundary endpoints and their standard descending representatives $T_m$. For each signed generator, form its finite left-multiplication matrix in this basis: its column at $T_m$ is obtained by reducing the tangle $g_i^{\pm1}T_m$ to the unique matching coordinates. In each reduction, use the standard endpoint traversal order, choose the first crossing whose first traversal branch is under, and with $\eta=1$ for the fixed $D_+$ chart and $\eta=-1$ for its crossing-switched $D_-$ chart replace
$$R(D)=R(D^{\mathrm{sw}})+\eta z_D\bigl(R(D_0)-R(D_\infty)\bigr).$$
The switched branch has one fewer non-descending crossing, and each smoothing has one fewer crossing; a descending leaf is reduced by the curl and free-circle rules to its standard matching representative. Starting with the coordinate vector of the identity tangle, apply the generator matrices from the rightmost braid letter to the leftmost to obtain the coordinate vector $v_\beta$ of $\Phi_n(b_\beta)$.
4. Form the trace row $t_m=d^{-n}P(\widehat{T_m})$ by closing each basis tangle and evaluating its scalar Dubrovnik value, and return
$$-(-1)^c a^{-w}d^{n-1}\tau_n(b_\beta).$$

Here $\tau_n(b_\beta)=t^{\mathsf T}v_\beta$. The output is the declared Kauffman ambient-isotopy value at $A=ia$, $Z=-iz$ in the Dubrovnik parameter convention. All matrices are finite and all coefficients lie in $T$; no division by the skein variable is used.

## Definition references

[[def-bmw-algebra-with-fixed-kauffman-skein-convention|BMW product and coefficient ring]]

[[def-dubrovnik-tangle-skein-algebra|Tangle skein algebra]]

[[lem-bmw-presentation-tangle-evaluation-is-well-defined|BMW generator map]]

[[lem-bmw-descending-tangle-spanning|Descending matching spanning]]

[[lem-bmw-closure-pairing-independence|Matching independence]]

[[def-dubrovnik-tangle-skein-algebra|Finite tangle skein algebra]]

[[lem-bmw-presentation-tangle-evaluation-is-well-defined|BMW generator map]]

[[lem-bmw-descending-tangle-spanning|Standard matching spanning set]]

[[lem-bmw-closure-pairing-independence|Matching independence]]

[[lem-bmw-markov-trace-stabilization|Normalized closure trace]]

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Definitions of the fixed-diagram values D, L, and F]]

[[def-closure-of-a-geometric-braid|Braid closure and its components]]

[[def-exponent-sum-of-a-braid|Exponent sum]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Poulain d’Andecy, *Fusion for the Yang–Baxter Equation and the Braid Group* (2020)](https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf)

## Facts & Assumptions

**Given:** A finite signed braid word, the BMW product, the oriented braid closure, the Dubrovnik scalar evaluation, and the normalized closure trace.

[F1] The positive Artin generator has determinant crossing sign $+1$, its inverse has sign $-1$, and writhe is the signed crossing sum ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F2] The closure of a braid word has one component for each cycle of its strand permutation ([[def-closure-of-a-geometric-braid]]).

[F3] The exponent sum of the word is the sum of its signed generator exponents ([[def-exponent-sum-of-a-braid]]).

[F4] The generator assignment extends to the algebra homomorphism $\Phi_n$ ([[lem-bmw-presentation-tangle-evaluation-is-well-defined]]).

[F5] The tangle algebra has a finite basis indexed by the perfect matchings of $2n$ endpoints; tangle skein reduction spans it and closure-pairing independence makes coordinates unique ([[lem-bmw-descending-tangle-spanning]], [[lem-bmw-closure-pairing-independence]]).

[F6] $\tau_n(b)=d^{-n}P(\widehat{\Phi_n(b)})$ and $P$ satisfies the stated skein, curl, and circle rules ([[lem-bmw-markov-trace-stabilization]], [[lem-framed-kauffman-link-evaluation]]).

[F7] On a fixed oriented diagram with writhe $w$ and component count $c$, the defining formulas are $L(A,Z)=-i^w(-1)^cD(-iA,iZ)$ and $F(A,Z)=A^{-w}L(A,Z)$, with $i^2=-1$ ([[def-kauffman-regular-isotopy-and-dubrovnik-conventions]]).

## Proof


1.1 The input word has finite length, so its generator product $b_\beta$ is formed by finitely many multiplications in the BMW algebra. Each positive Artin letter contributes $+1$ to determinant writhe by [F1], and each inverse contributes $-1$; hence the closure writhe is the exponent sum $w$ in the algorithm by [F3]. The closure connects the bottom endpoint of strand $j$ to the top endpoint with the same index, so its components are exactly the cycles of the strand permutation, giving $c$ by [F2]. For fixed $n$, there are finitely many matchings of the $2n$ endpoints, so [F5] supplies a finite coordinate basis. [F1, F2, F3, F5, algebra]

1.2 For each matching basis tangle $T_m$ and each generator $g_i^{\pm1}$, the product tangle $g_i^{\pm1}T_m$ has finitely many crossings. In its fixed standard traversal, let $N$ be the crossing count and $b$ the number of crossings whose first branch is under. At a selected bad crossing, set $\eta=1$ for the fixed $D_+$ chart and $\eta=-1$ for $D_-$, carrying the smoothing labels along with any rotation of that chart, and apply $$R(D)=R(D^{\mathrm{sw}})+\eta z_D\bigl(R(D_0)-R(D_\infty)\bigr).$$ The switched branch has the same $N$ and one fewer bad crossing; each smoothing has crossing count $N-1$. Thus every recursive call decreases $(N,b)$ lexicographically. A descending leaf reduces by the curl and free-circle rules to a standard matching tangle, so the reduction tree is finite and [F5] gives its unique coordinate column. The finite number of basis tangles and generator indices makes every left-multiplication matrix finite. The same crossing-count induction evaluates each closed scalar $P(\widehat{T_m})$. [F5, F6, algebra, induction]

2.1 Applying the left-multiplication matrices from right to left sends the identity coordinate vector to $v_\beta$, the coordinates of $\Phi_n(b_\beta)$, because each matrix column is the product of its generator image with the indicated basis tangle and [F4] is an algebra homomorphism. By linearity of closure evaluation, $t^{\mathsf T}v_\beta=d^{-n}P(\widehat{\Phi_n(b_\beta)})=\tau_n(b_\beta)$ by [F6]. Therefore $D=P/d=d^{n-1}\tau_n(b_\beta)$ on the nonempty closure. Substituting $A=ia$ and $Z=-iz$ directly into [F7] gives $-iA=a$, $iZ=z$, and $$F(ia,-iz)=(ia)^{-w}\bigl(-i^w(-1)^cD(a,z)\bigr)=-(-1)^c a^{-w}D(a,z).$$ Combining this fixed-diagram identity with the trace equality gives $-(-1)^c a^{-w}d^{n-1}\tau_n(b_\beta)$, the returned value. The calculation concerns the supplied oriented braid diagram and uses only the definitions, without invoking orientation independence or an ambient-isotopy theorem. The only inverses used are powers of the units $a,d$; no division by $z$ occurs. [F2, F4, F6, F7, step 1.1, step 1.2, algebra] ∎
