---
id: lem-right-trivialized-differential-of-the-lie-group-exponential
kind: lemma
title: Right-trivialized differential of the Lie-group exponential
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-left-and-right-translations-on-a-lie-group", "thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields", "thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero", "prop-adjoint-exponential-identity", "lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval", "thm-coordinate-map-for-a-finite-dimensional-normed-space", "lem-exponential-series-has-infinite-radius", "thm-termwise-differentiation-of-a-real-power-series", "cor-vector-valued-ftc-and-lipschitz-bound", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Michael Müger, Notes on the Baker-Campbell-Hausdorff-Dynkin theorem
      url: https://www.math.ru.nl/~mueger/PDF/BCHD.pdf
      locator: Proposition 2.7, Remark 2.8(5), and the first proof through formula (2.6), printed pages 6–7
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Errata insertion for printed page 110, differential-of-exponential formula, errata printed page 814
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group
with Lie algebra $\mathfrak g$. For $Z,V\in\mathfrak g$, right translation
identifies the differential of the exponential with

$$d(R_{\exp_G(-Z)})_{\exp_GZ}\bigl(d(\exp_G)_ZV\bigr)=\sum_{n=0}^{\infty}\frac{\operatorname{ad}_Z^n(V)}{(n+1)!}.$$

The operator series converges absolutely in any norm and is denoted

$$\frac{e^{\operatorname{ad}_Z}-I}{\operatorname{ad}_Z}(V),$$

with the displayed power series—not division by a possibly singular
$\operatorname{ad}_Z$—as its definition.

More generally, for every finite-dimensional real vector space and every
endomorphism $B$, the linear-ODE exponential used here satisfies

$$e^{tB}=\sum_{n=0}^{\infty}\frac{t^nB^n}{n!},$$

with absolute convergence uniformly on compact $t$-intervals.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$, and
$Z,V\in\mathfrak g$.

[F1] Lie-group exponentials are smooth, and
$t\mapsto\exp_G(tW)$ is the integral curve of $W^L$ through the identity.
[[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]].
[[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]].

[F2] Left and right translations and their differentials give the standard
tangent trivializations. [[def-left-and-right-translations-on-a-lie-group]].

[F3] Assuming countable choice,
$\operatorname{Ad}_{\exp_G(tZ)}=e^{t\operatorname{ad}_Z}$, where the right
side is the linear-ODE exponential.
[[def-countable-choice]].
[[prop-adjoint-exponential-identity]].

[F4] Linear matrix initial-value problems have unique solutions on compact
intervals. [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]].

[F5] A finite basis gives bounded coordinates; the scalar exponential series
converges everywhere and real power series differentiate termwise inside
their radii.
[[thm-coordinate-map-for-a-finite-dimensional-normed-space]].
[[lem-exponential-series-has-infinite-radius]].
[[thm-termwise-differentiation-of-a-real-power-series]].

[F6] The vector-valued fundamental theorem of calculus integrates a
continuous derivative componentwise.
[[cor-vector-valued-ftc-and-lipschitz-bound]].

[F7] Differentials of smooth maps obey the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

## Proof

**Proof technique:** direct.

1.1 Put $B=\operatorname{ad}_Z$. In one basis, the operator series $S(t)=\sum_{n\ge0}t^nB^n/n!$ converges absolutely and uniformly on compact $t$-intervals, since its norm is bounded by the scalar exponential majorant $\sum_{n\ge0}(|t|\lVert B\rVert)^n/n!$. Coordinatewise termwise differentiation gives $S'(t)=B S(t)$ and $S(0)=I$. By [F4]--[F5], uniqueness therefore identifies $S(t)$ with the linear-ODE exponential $e^{tB}$. [F4, F5]

1.2 Consider the smooth variation $F(s,t)=\exp_G(t(Z+sV))$ and write $\gamma(t)=F(0,t)=\exp_G(tZ)$. Right-trivialize its variational field by $\xi(t)=d(R_{\gamma(t)^{-1}})_{\gamma(t)}(\partial_sF(0,t))$. By [F1], $\partial_tF(s,t)=d(L_{F(s,t)})_e(Z+sV)$. Differentiate this identity in $s$, commute the two coordinate partial derivatives, and differentiate the right-trivialization using multiplication and inversion. The two terms containing $Z$ cancel, leaving $\xi'(t)=\operatorname{Ad}_{\gamma(t)}V$ and $\xi(0)=0$. [F1, F2, F7, algebra]

2.1 Consequently [F3] gives $\operatorname{Ad}_{\exp_G(tZ)}=S(t)$ for every real $t$. This is the exact point where $\mathrm{AC}_\omega$ is used. [F3, step 1.1]

3.1 By steps 2.1 and 1.2, $\xi'(t)=S(t)V$. The uniformly convergent series $A(t)=\sum_{n\ge0}t^{n+1}B^n(V)/(n+1)!$ has $A(0)=0$ and, coordinatewise by [F5], $A'(t)=S(t)V$. Applying [F6] to $\xi-A$ on $[0,1]$ gives $\xi(1)=A(1)=\sum_{n\ge0}B^n(V)/(n+1)!$. [F5, F6, step 2.1, step 1.2]

4.1 By the definition of $F$ and the chain rule, $\partial_sF(0,1)=d(\exp_G)_ZV$; by the definition of $\xi$, its value at one is the right translation of that vector by $\exp_G(-Z)$. Step 3.1 is therefore exactly the asserted formula. [F2, F7, step 3.1]

5.1 A Lie group is nonempty and boundaryless. In dimension zero both sides are the unique zero vector; in dimension one the bracket vanishes and the formula reduces to $dR_{\exp(-Z)}d\exp_Z(V)=V$. Singular $\operatorname{ad}_Z$ is allowed because the quotient notation means its entire power series. The variation uses the compact interval $[0,1]$ including both endpoints. Countable choice is inherited through [F1] and [F3]; one basis and fixed vectors add no choice. No metric dependence or biconditional is asserted. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 1.2, step 3.1, step 4.1] ∎
