---
id: thm-dolbeault-lemma-polydisc
kind: theorem
title: The local Dolbeault lemma on nested polydiscs
status: draft
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - lem-cauchy-transform-with-smooth-parameters
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.4"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Lemma 4.4.7 and complete proof, printed p. 143, PDF page index 142, lines 11547–11620. The source treats concentric polydiscs; this item proves the stated coordinatewise compact-containment form. Exercise 4.4.14 at lines 11561–11562 is only a prompt; the coefficient-derivative assertion is proved here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Assume AC. Let $n\ge1$, let $P=\prod_{j=1}^n D_j$ and
$P'=\prod_{j=1}^n D'_j$ be finite open coordinate polydiscs such that each
closed coordinate disc $\overline{D'_j}$ is a compact subset of $D_j$. Let
$0\le p\le n$ and $1\le q\le n$, and let $\eta\in\Omega^{p,q}(P)$ be a
smooth form with $\bar\partial\eta=0$. Then there is a smooth
$\psi\in\Omega^{p,q-1}(P')$ such that
$$\bar\partial\psi=\eta|_{P'}.$$

## Facts & Assumptions

**Given:** Full AC; $P=\prod_{j=1}^nD_j$ and
$P'=\prod_{j=1}^nD'_j$ are finite open polydiscs with each closed coordinate
disc $\overline{D'_j}$ compactly contained in $D_j$; $0\le p\le n$,
$1\le q\le n$, and $\eta\in\Omega^{p,q}(P)$ is smooth and
$\bar\partial$-closed.

[F1] The $dz^I\wedge d\bar z^J$ expansion is unique, and the coefficient
formula for $\bar\partial$ differentiates the coefficients in $\bar z_j$
and wedges $d\bar z_j$ before their type factors
([[def-bigraded-complex-differential-forms]]).

[F2] The graded product rule holds for $\bar\partial$
([[thm-d-dbar-decomposition-and-identities]]).

[F3] $\bar\partial^2=0$
([[thm-d-dbar-decomposition-and-identities]]).

[F4] Under full AC, on a smaller coordinate polydisc the parameterized
one-variable transform $T_k a$ is smooth, satisfies
$\partial_{\bar z_k}T_k a=a$, and preserves any selected equations
$\partial_{\bar z_\ell}a=0$ with $\ell\ne k$
([[lem-cauchy-transform-with-smooth-parameters]]).

[F5] Full AC means every family of nonempty sets has a choice function, and
the local Cauchy-transform supplier explicitly assumes AC
([[def-axiom-of-choice]], [[lem-cauchy-transform-with-smooth-parameters]]).

## Proof

**Proof technique:** direct.

1.1 If $\eta=0$, take $\psi=0$. Otherwise, by the unique type expansion [F1], some barred coordinate occurs. Let $k$ be the largest index appearing in any barred multi-index of $\eta$. Group the terms uniquely as $\eta=d\bar z_k\wedge\tau+\theta$, absorbing the permutation signs into $\tau$, so that neither $\tau$ nor $\theta$ contains a barred differential with index at least $k$. Here $\tau$ has type $(p,q-1)$ and $\theta$ has type $(p,q)$. [F1, given, algebra]

2.1 The product rule [F2] gives $0=\bar\partial\eta=-d\bar z_k\wedge\bar\partial\tau+\bar\partial\theta$. For each $\ell>k$, the coefficient terms containing both $d\bar z_k$ and $d\bar z_\ell$ can only come from $-d\bar z_k\wedge\bar\partial\tau$: the form $\theta$ has no barred factor with index at least $k$, so $\bar\partial\theta$ has no term containing both indices. Uniqueness of the wedge expansion [F1] therefore gives $\partial_{\bar z_\ell}\tau=0$ for every $\ell>k$, coefficientwise. [F1, F2, step 1.1, given, algebra]

3.1 Suppose the current residual form is smooth and closed on a working polydisc $Q=\prod E_j$ containing $P'$, and its largest barred index is $k$. In the descending process, the $k$th factor has not yet been shrunk, so $E_k=D_k$ and $\overline{D'_k}\Subset E_k$. Apply the same local operator $T_k$ from [F4] to each of the finitely many coefficient functions of $\tau$ in the unique expansion [F1]. It produces a smooth form $\psi_k=T_k\tau$ on a working polydisc $Q'$ that still contains $P'$, with $\partial_{\bar z_k}\psi_k=\tau$. Since every coefficient of $\tau$ has zero $\bar z_\ell$ derivative for $\ell>k$ by step 2.1, [F4] preserves those equations for $\psi_k$. The full AC premise needed for [F4] is part of the given hypothesis by [F5]. [F1, F4, F5, step 2.1, given, algebra]

4.1 By the coefficient formula [F1], $\bar\partial\psi_k=d\bar z_k\wedge\tau+\delta_k$, where every barred index in $\delta_k$ is less than $k$: the $k$th derivative supplies the displayed first term, derivatives with index greater than $k$ vanish by step 3.1, and the remaining derivatives have index less than $k$. Set $\eta_{k-1}:=\eta-\bar\partial\psi_k=\theta-\delta_k$. It has type $(p,q)$ and contains only barred indices less than $k$. It remains closed, since $\bar\partial\eta_{k-1}=\bar\partial\eta-\bar\partial^2\psi_k=0$ by [F3]. [F1, F3, step 3.1, given, algebra]

5.1 Repeat steps 1.1–3.1 on each nonzero residual, in descending order of the largest barred index. At each stage the local transform shrinks only the coordinate currently being processed and its output domain still contains $P'$, so all later residuals and the previously constructed primitives restrict to a common neighborhood of $P'$. If no barred factor occurs at index $k$, skip that transform and retain the current domain. After index $1$ is removed, the residual has barred degree $q>0$ but no barred basis factor; the unique expansion [F1] forces it to be zero. There are at most $n$ transforms. [F1, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1, given, algebra]

6.1 Let $\psi$ be the sum of the finitely many forms $\psi_k$ constructed by the repeated step 3.1 procedure in step 5.1, restricted to $P'$. The successive residual identities of step 4.1 telescope, and the final residual is zero by step 5.1; hence $\bar\partial\psi=\eta|_{P'}$. Each summand is smooth on a neighborhood of $P'$, so $\psi$ is smooth there and has type $(p,q-1)$. [step 3.1, step 4.1, step 5.1, given, algebra] ∎
