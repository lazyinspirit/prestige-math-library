---
id: ex-knot-kt-43-worked-cases
kind: example
title: "Trefoil and 5_2 knot Floer genus and fibering cases"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-top-alexander-grading-of-knot-floer-homology
  - thm-knot-floer-detects-seifert-genus
  - thm-rank-one-top-knot-floer-detects-fiberedness
  - thm-fibered-knot-has-rank-one-top-knot-floer-homology
  - lem-knot-exterior-is-irreducible
  - def-oriented-seifert-surface-and-knot-genus
  - def-countable-choice
  - def-axiom-of-choice
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Uses the original classical AC branch for the explicitly imported integral genus/fiberedness results; the finite rank deductions use no choice. No reduction of these imported integral theorems to a stronger choice claim is asserted."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath, Andras Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapter 4"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.65–82; explicit grid complexes and trefoil calculations"
    - title: "Peter Ozsvath and Zoltan Szabo, Heegaard Floer homology and alternating knots, arXiv:math/0209149v3, Theorem 1.3"
      url: "https://arxiv.org/pdf/math/0209149v3"
      locator: "Printed pp.5–8; integral HFK of alternating knots from the symmetrized Alexander polynomial and signature"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, Theorems 2.3 and 2.5"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed p.5; genus and S3 fiberedness criteria"
    - title: "Knot Atlas, 3_1 and 5_2 tables"
      url: "https://katlas.org/wiki/5_2"
      locator: "Polynomial invariants / Alexander polynomial; compare https://katlas.org/wiki/3_1, same section"
verification:
  precheck: n/a
---

## Example

For the right-handed trefoil $T(2,3)$, the symmetrized Alexander polynomial is $t-1+t^{-1}$, the maximum Alexander grading is $1$, the integral top knot Floer group is $\mathbb Z$, and the knot is fibered. For the standard alternating knot $5_2$, the symmetrized Alexander polynomial is $2t-3+2t^{-1}$, the maximum Alexander grading is $1$, the integral top knot Floer group is $\mathbb Z^2$, and the knot is not fibered. The $5_2$ rank calculation uses the alternating-knot formula; its signature determines the Maslov grading shift.

## Example references

[[thm-knot-floer-detects-seifert-genus|The maximum Alexander grading is the Seifert genus]]

[[thm-rank-one-top-knot-floer-detects-fiberedness|The irreducible-exterior rank-one implication]]

[[thm-fibered-knot-has-rank-one-top-knot-floer-homology|The converse rank-one implication used for the S3 examples]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapter 4](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Ozsvath and Szabo, *Heegaard Floer homology and alternating knots*, Theorem 1.3](https://arxiv.org/pdf/math/0209149v3)

[Manolescu, *An Introduction to Knot Floer Homology*, Theorems 2.3 and 2.5](https://web.stanford.edu/~cm5/hfk.pdf)


## Facts & Assumptions

**Given:** The right-handed trefoil and standard alternating knot $5_2$ with the original integral normalization and classical choice branch declared in the dependencies.

[E1] **External input.** Ozsváth–Szabó, *Heegaard Floer homology and alternating knots*, Geometry & Topology 7 (2003), Theorem 1.3, printed p.230 (PDF p.6 of arXiv:math/0209149v3): if $K$ is alternating and its normalized symmetric Alexander polynomial is $a_0+\sum_{s>0}a_s(t^s+t^{-s})$, then
$$\widehat{HFK}(S^3,K,s;\mathbb Z)\cong\mathbb Z^{|a_s|},$$
supported in Maslov degree $s+\sigma(K)/2$. This is the INTEGRAL theorem, including freeness; no integral conclusion is inferred from the retained mod-two grid comparison. Its signature convention has left trefoil signature $+2$.

[E2] **External finite table input.** Knot Atlas, pages `3_1` and `5_2`, section “Polynomial invariants / Alexander polynomial”, records respectively $t-1+t^{-1}$ and $2t-3+2t^{-1}$. These two finite entries and their standard knot diagrams identify the table knots. The same polynomials result from the standard genus-one disk/band Seifert matrices
$$V_3=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad V_5=\begin{pmatrix}1&1\\0&2\end{pmatrix}$$
(up to simultaneous handedness/sign conventions): $\det(V_3-tV_3^T)=1-t+t^2$ and $\det(V_5-tV_5^T)=2-3t+2t^2$. Multiplying by $t^{-1}$ gives the stated symmetric polynomials. The TABLE/diagram identification is external input; the two determinant calculations are finite local checks, not an assertion that an abstract matrix by itself identifies a knot.

[E3] **External input at the exact $S^3$, integral scope.** Manolescu, *An Introduction to Knot Floer Homology*, printed/PDF p.5, Theorem 2.3, gives $g(K)=\max\{s:\widehat{HFK}(K,s;\mathbb Z)\ne0\}$ for every knot in $S^3$. Theorem 2.5 on that same page gives that a knot in $S^3$ is fibered if and only if its integral top genus group is $\mathbb Z$. These exact specializations of the established Ozsváth–Szabó/Ghiggini/Ni/Juhász results are imported. This does not assert completion of the held local general-$Y$ signed comparison or product-criterion proofs. The source explicitly states these as integral groups.

Actual reading limits: the complete Theorem 1.3 statement and its preceding conventions on printed pp.229–230 of the primary alternating paper; the two named Alexander-polynomial table entries (not all table invariants); the full Theorems 2.3 and 2.5 statements and surrounding geometric-applications text on Manolescu p.5. No reading or local reconstruction of the full alternating theorem proof, Ni proof, or entire survey is claimed. These are explicitly authorized external imports under the run-specific source boundary. The original full-choice branch is retained; no integral full-choice theorem is silently cast as a CC theorem.

## Proof

1.1 Both named diagrams are alternating. Apply [E1] with the two polynomials in [E2]. In the trefoil case the coefficients in Alexander degrees $1,0,-1$ have absolute values $1,1,1$, with zero coefficients elsewhere. Thus the maximum nonzero Alexander grading is $1$ and its integral group is $\mathbb Z$. In the $5_2$ case the corresponding absolute values are $2,3,2$, with zero coefficients elsewhere. Its maximum grading is again $1$, with integral top group $\mathbb Z^2$. The formula for the supporting Maslov degree is exactly that of [E1]; no signature sign is guessed from a drawing. [E1, E2, given, algebra]

2.1 By [E3] the genus is one for both knots. The trefoil's integral top group is $\mathbb Z$, so the fiberedness equivalence in [E3] proves that it is fibered. For $5_2$, $\mathbb Z^2$ is not isomorphic to $\mathbb Z$ (tensoring with $\mathbb Q$ already distinguishes their dimensions), so the same equivalence proves that it is not fibered. These arguments prove every Example clause at its full integral coefficient scope. They do not invoke an unearned generic-$Y$ local supplier or weaken a rank over integers to a mod-two rank. [E1, E2, E3, step 1.1, algebra] ∎
