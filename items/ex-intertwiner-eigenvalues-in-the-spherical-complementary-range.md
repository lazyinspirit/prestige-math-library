---
id: ex-intertwiner-eigenvalues-in-the-spherical-complementary-range
kind: example
title: Intertwiner eigenvalues in the spherical complementary range
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 9
deps:
  - def-standard-intertwining-operator-for-sl2-r
  - lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner
  - thm-unitarity-of-the-sl2-complementary-series
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Exercise 2.8(iii) and the unitarity list, printed p. 12: the intertwiner computation is posed without a solution, while the complementary range is listed and its construction explicitly deferred"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.3, printed pp. 51–52: the invariant-form positivity criterion and Theorem 9.3 list the spherical complementary range; no first K-type intertwiner multipliers are computed"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and work in spherical parity. At regular real parameters the first normalized eigenvalues of the standard intertwiner are $\widehat c_0(\nu)=1$, $\widehat c_{\pm2}(\nu)=\frac{1-\nu}{1+\nu}$, and $\widehat c_{\pm4}(\nu)=\frac{(1-\nu)(3-\nu)}{(1+\nu)(3+\nu)}$; the normalized values at $\nu=0$ are given by regular continuation. They are positive for $|\nu|<1$. At $\nu=(1+3)/2=2$, $\widehat c_2(2)=-1/3\ne0$; the coefficient is positive on $(-1,1)$, zero at $1$, and negative throughout $(1,3)$.

## Facts & Assumptions

**Given:** AC, the spherical parity $\varepsilon=0$, and the normalized meromorphic eigenvalues of the standard intertwiner.

[F1] The even K-type eigenvalues satisfy the cross-multiplied recurrence $(2j+1+\nu)c_{2j+2}=(2j+1-\nu)c_{2j}$ and the symmetry $c_{-2j}=c_{2j}$. These identities continue meromorphically, and at regular parameters dividing by the base scalar gives the recurrence for $\widehat c_{2j}=c_{2j}/c_0$ with $\widehat c_0=1$ ([[lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner]], [[def-standard-intertwining-operator-for-sl2-r]]).

[F2] The normalized spherical weights are $\widehat c_{\pm2j}(\nu)=\prod_{l=1}^j(2l-1-\nu)/(2l-1+\nu)$ whenever regular. On $(-1,1)$ every weight is regular, including the normalized meromorphic continuation at $\nu=0$ ([[thm-unitarity-of-the-sl2-complementary-series]]).

[A1] AC supplies the normalized Haar measure on $K$ used by the principal-series and complementary-form setup; through $\mathrm{AC}\Rightarrow\mathrm{AC}_\omega$ it also supplies the countable-choice hypotheses used in deriving the recurrence and Fourier-form suppliers. The finite recurrence iteration and sign checks make no further choice ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** iterate the even-parity eigenvalue recurrence and inspect the signs of its first factors.

1.1 Normalize the meromorphic recurrence in [F1] by its base scalar wherever the quotient is initially regular. The $j=0$ and $j=1$ instances give $\widehat c_2=(1-\nu)/(1+\nu)$ and $\widehat c_4=\widehat c_2(3-\nu)/(3+\nu)=(1-\nu)(3-\nu)/((1+\nu)(3+\nu))$. The negative-index symmetry gives $\widehat c_{-2}=\widehat c_2$ and $\widehat c_{-4}=\widehat c_4$. These ratios extend meromorphically; [F2] identifies their regular values at $\nu=0$ and agrees with the displayed products. [F1, F2, algebra]

1.2 If $|\nu|<1$, then for every $l\ge1$ both $2l-1-\nu$ and $2l-1+\nu$ are positive. Thus $\widehat c_0=1$, $\widehat c_{\pm2}>0$, and $\widehat c_{\pm4}>0$ throughout the open interval, including $\nu=0$. More generally every factor in the finite product for any fixed even K-type is positive there. [F1, F2, algebra]

1.3 On $1<\nu<3$, the numerator $1-\nu$ is negative and the denominator $1+\nu$ positive, so $\widehat c_2(\nu)<0$; at the midpoint $\nu=(1+3)/2=2$ its value is $-1/3\ne0$. On $-1<\nu<1$ the coefficient is positive, and it vanishes at $\nu=1$, so its sign changes at that endpoint. [F1, F2, algebra]

2.1 AC enters through the normalized Haar construction and the countable-choice hypotheses of the cited suppliers described in [A1]; this finite computation makes no additional selection. [A1, given] ∎
