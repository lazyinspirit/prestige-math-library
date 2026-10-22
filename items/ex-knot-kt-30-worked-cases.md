---
id: ex-knot-kt-30-worked-cases
kind: example
title: BMW Kauffman and Dubrovnik worked cases
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
  - def-closure-of-a-geometric-braid
  - def-exponent-sum-of-a-braid
  - lem-bmw-relations-dubrovnik-parameter-dictionary
  - lem-bmw-markov-trace-stabilization
  - alg-kauffman-polynomial-from-bmw-braid-closure
  - lem-framed-kauffman-link-evaluation
proof_strategy: direct
axiom_use: "Choice-free: these are finite closures and substitutions in the universal coefficient ring."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§VI–VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 38–54/printed pp. 453–469: unknot, curl, circle, and polynomial conversion rules"
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.3 and 5.1–5.5"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 6–8 and 33–50: closure trace and tangle realization"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

For the one-component unknot, the Dubrovnik value and the normalized Kauffman value are both $1$. Adding a positive or negative curl multiplies the regular-isotopy Dubrovnik value by $a$ or $a^{-1}$, while the writhe correction leaves the ambient Kauffman value unchanged. For the two-component unlink, the Dubrovnik value is $d$, the identity $2$-braid closure has normalized trace $1$, and the BMW algorithm returns the Kauffman value $-d$. The Dubrovnik calculations hold in the universal coefficient ring $R_D$ with $z(d-1)=a-a^{-1}$. The Kauffman outputs lie in the algorithm's converted ring $T_K$, under $\varphi(a)=-iA$, $\varphi(z)=iZ$, and $\varphi(d)=d$; there $Z(d-1)=-A-A^{-1}$. Neither $z$ nor $Z$ is inverted.

## Example references

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Polynomial and local curl/circle conventions]]

[[lem-bmw-markov-trace-stabilization|Normalized trace values]]

[[alg-kauffman-polynomial-from-bmw-braid-closure|BMW closure algorithm]]

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

## Facts & Assumptions

**Given:** The empty closure, one- and two-strand identity braids, the normalized closure trace, and the universal Dubrovnik rules.

[F1] On a nonempty diagram $D_K=P(K)/d$, $P(\bigcirc)=d$, a disjoint circle multiplies $P$ by $d$, and the curl factors are $a,a^{-1}$ ([[def-kauffman-regular-isotopy-and-dubrovnik-conventions]], [[lem-framed-kauffman-link-evaluation]]).

[F2] $\tau_n(x)=d^{-n}P(\widehat{\Phi_n(x)})$, with $a=\rho$ and $d=\delta$ ([[lem-bmw-markov-trace-stabilization]]).

[F3] For a braid closure with writhe $w$ and component count $c$, the algorithm returns $-i^w(-1)^c A^{-w}\varphi(d^{n-1}\tau_n(\beta))$ in $T_K$, where $\varphi(a,z,d,q)=(-iA,iZ,d,q)$ ([[alg-kauffman-polynomial-from-bmw-braid-closure]]).

[F4] The universal coefficient relation is $z(d-1)=a-a^{-1}$ and is not solved by dividing by $z$ ([[lem-bmw-relations-dubrovnik-parameter-dictionary]]).

[F6] On each fixed oriented diagram, $L(A,Z)=-i^w(-1)^cD(-iA,iZ)$ and $F(A,Z)=A^{-w}L(A,Z)$ are the defining formulas; the curl factors below are derived from these formulas and [F1] ([[def-kauffman-regular-isotopy-and-dubrovnik-conventions]]).

[F5] The two-component unlink is represented by two disjoint circles; the schematic draws its two components without crossings.

[F7] The identity $n$-braid closes to the $n$-component unlink, with writhe $0$ and one closure component for each fixed-point cycle; the empty braid word has exponent sum $0$ ([[def-closure-of-a-geometric-braid]], [[def-exponent-sum-of-a-braid]]).

## Diagram

The two disjoint circles represent the two-component unlink in [F5].

```tikz
\begin{tikzpicture}[baseline=-0.5ex,scale=0.8,line width=0.8pt]
\draw (0,0) circle (0.55);
\draw (1.65,0) circle (0.55);
\node at (0,-0.9) {$U_1$};
\node at (1.65,-0.9) {$U_2$};
\end{tikzpicture}
```

## Proof


1.1 The unknot has $P(\bigcirc)=d$, so [F1] gives $D_{\bigcirc}=P/d=1$. Its identity $1$-braid closure has $n=1$, $w=0$, $c=1$ by [F7], and $\tau_1(1)=d^{-1}P(\bigcirc)=1$ by [F2]. Substitution in [F3] gives $-(-1)^1=1$. By [F6], $L_{\bigcirc}(A,Z)=-i^0(-1)^1D_{\bigcirc}(-iA,iZ)=1$, so $F_{\bigcirc}(A,Z)=1$, agreeing with the algorithm output. [F1, F2, F3, F6, F7, algebra]

2.1 A positive curl multiplies $D$ by $a$ and raises $w$ by one, so the product $a^{-w}D$ is unchanged; a negative curl multiplies $D$ by $a^{-1}$ and lowers $w$ by one, with the same cancellation. To obtain the corresponding Kauffman factors directly from [F6], substitute $a_D=-iA$ and $z_D=iZ$ in $D$. A positive curl preserves $c$, raises $w$ by one, and multiplies $D$ by $a_D$, so it multiplies $L$ by $i a_D=A$. A negative curl lowers $w$ by one and multiplies $D$ by $a_D^{-1}$, so it multiplies $L$ by $i^{-1}a_D^{-1}=A^{-1}$. Thus $A^{-(w+1)}A L=A^{-w}L$ and $A^{-(w-1)}A^{-1}L=A^{-w}L$. These are algebraic calculations for the fixed diagram and its two curls, using only [F1] and the definitions. Thus both local curl cases preserve the normalized value. [F1, F3, F6, step 1.1, algebra]

3.1 The identity $2$-braid closes to the two-component unlink, so [F1] gives $P=d^2$ and $D=P/d=d$. Hence [F2] gives $\tau_2(1)=d^{-2}d^2=1$. By [F7], its writhe is $0$ and $c=2$, so [F3] returns $-d$. Then [F6] gives $L(A,Z)=-i^0(-1)^2D(-iA,iZ)=-d$, and therefore $F(A,Z)=-d$, again matching the output. Here $\varphi(d)=d$, and the image of the coefficient relation in [F4] is $iZ(d-1)=-i(A+A^{-1})$, equivalently $Z(d-1)=-A-A^{-1}$. Thus the substitution respects the defining relation; the extension relation $q-q^{-1}=z$ becomes $q-q^{-1}=iZ$ as required in $T_K$. All these calculations multiply only by units and never divide by a skein parameter. [F1, F2, F3, F4, F6, F7, step 2.1, algebra] ∎
