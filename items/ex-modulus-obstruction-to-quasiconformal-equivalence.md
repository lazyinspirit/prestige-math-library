---
id: ex-modulus-obstruction-to-quasiconformal-equivalence
kind: example
title: A modulus obstruction to quasiconformal equivalence of round annuli
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 9
deps: [def-extremal-length-and-curve-family-modulus, def-complex-annulus, def-geometric-quasiconformal-homeomorphism, def-acl-sobolev-quasiconformal-homeomorphism, thm-modulus-rectangle-and-annulus, thm-round-annulus-conformal-parameter-is-complete-invariant, thm-geometric-and-analytic-quasiconformality-equivalent, lem-analytic-quasiconformality-implies-modulus-distortion, thm-composition-and-inverse-quasiconformal, ex-punctured-disc-versus-finite-annulus-modulus, def-axiom-of-choice]
axiom_use: The Axiom of Choice is inherited from the analytic/geometric equivalence and modulus-distortion theorem; Countable Choice is included through the extremal-length conventions.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §12.1, Proposition 12.3 and Exercise 12.5, printed pp. 184–185: two-sided annular modulus distortion and its quasiconformal-equivalence obstruction."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 1 §1, Lemma 1.7, printed pp. 4–5, for round-annulus modulus; Ch. 2 §2, Corollary 2.2, printed pp. 52–53, for the logarithmic annulus distortion estimate in the piecewise differentiable case."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Write $\lambda$ for extremal length and $\mu$ for its reciprocal curve-family modulus ([[def-extremal-length-and-curve-family-modulus]]). Call two domains $K$-quasiconformally equivalent if a $K$-quasiconformal homeomorphism carries one onto the other, using the equivalent geometric and analytic definitions on this page ([[def-geometric-quasiconformal-homeomorphism]], [[def-acl-sobolev-quasiconformal-homeomorphism]], [[thm-geometric-and-analytic-quasiconformality-equivalent]]). Then:

(a) If the round annuli $A(1,2)$ and $A(1,R)$ ([[def-complex-annulus]]) are $K$-quasiconformally equivalent for finite $R>1$, then
$$\frac1{2\pi}\log R\le K\frac1{2\pi}\log2,$$
so $\log R\le K\log2$. In particular, for every finite $K\ge1$, the annuli $A(1,2)$ and $A(1,2^{K+1})$ are not $K$-quasiconformally equivalent. For example, $A(1,2)$ and $A(1,8)$ are not $2$-quasiconformally equivalent, though this estimate does not exclude equivalence for $K\ge3$.

(b) The inverse direction gives the lower bound as well: any such equivalence satisfies
$$\frac1K\log2\le\log R\le K\log2,$$
equivalently the ratio $M(A(1,R))/M(A(1,2))$ of their conformal parameters from [[thm-round-annulus-conformal-parameter-is-complete-invariant]] lies in $[1/K,K]$.

(c) No finite round annulus $A(r,R)$ with $0<r<R<\infty$ is $K$-quasiconformally equivalent to the punctured disc $D^*=\{0<|z|<1\}$ for any finite $K\ge1$ ([[ex-punctured-disc-versus-finite-annulus-modulus]]).

## Facts & Assumptions

**Given:** Choice, $K\ge1$, round annuli, their connecting curve families, and the punctured-disc path-family conventions.

[F1] The two definitions of quasiconformality agree with the same constant, and inverses of analytic quasiconformal maps are quasiconformal with the same maximal dilatation ([[thm-geometric-and-analytic-quasiconformality-equivalent]], [[thm-composition-and-inverse-quasiconformal]]).

[F2] For $0<r<R<\infty$, the connecting-family modulus is $\mu(\Gamma_{r,R})=2\pi/\log(R/r)>0$ ([[thm-modulus-rectangle-and-annulus]]). For $D^*$ the corresponding family has $\mu(\Gamma_{D^*})=0$ ([[ex-punctured-disc-versus-finite-annulus-modulus]]).

[F3] An analytically $K$-quasiconformal homeomorphism and its inverse distort the connecting-family modulus of any doubly connected domain by at most the factor $K$ ([[lem-analytic-quasiconformality-implies-modulus-distortion]], part (ii)).

## Proof

**Proof technique:** apply the two annular modulus inequalities in both directions, then compare the positive finite-annulus modulus with the zero punctured-disc modulus.

1.1 Suppose $h:A(1,2)\to A(1,R)$ is a $K$-quasiconformal equivalence. By [F1], its inverse is analytically $K$-quasiconformal. Apply [F3] to $h^{-1}:A(1,R)\to A(1,2)$ to obtain $\mu(\Gamma_{1,2})\le K\mu(\Gamma_{1,R})$. Using [F2], this is $2\pi/\log2\le K(2\pi/\log R)$, so $\log R\le K\log2$. [F1, F2, F3, given, algebra]

2.1 Apply [F3] to $h$ itself to get $\mu(\Gamma_{1,R})\le K\mu(\Gamma_{1,2})$. By [F2], $2\pi/\log R\le K(2\pi/\log2)$, hence $\log R\ge(\log2)/K$. If $R=2^{K+1}$, then $\log R=(K+1)\log2>K\log2$, contradicting step 1.1; for $R=8$ and $K=2$ this is the stated example. The two inequalities together prove (b). [F1, F2, F3, step 1.1, given, algebra]

3.1 Suppose $h:A(r,R)\to D^*$ were $K$-quasiconformal. By [F1], $h^{-1}:D^*\to A(r,R)$ is analytically $K$-quasiconformal. Applying [F3] to the doubly connected source $D^*$ gives $\mu(\Gamma_{r,R})\le K\mu(\Gamma_{D^*})=0$. But [F2] makes the left side $2\pi/\log(R/r)>0$, a contradiction. [F1, F2, F3, given, algebra] ∎
