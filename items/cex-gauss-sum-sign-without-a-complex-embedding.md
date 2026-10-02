---
id: cex-gauss-sum-sign-without-a-complex-embedding
kind: counterexample
title: The sign of a quadratic Gauss sum needs a chosen primitive root
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-quadratic-gauss-sum-in-a-cyclotomic-field
  - lem-galois-action-on-the-quadratic-gauss-sum
  - thm-quadratic-gauss-sum-square
  - thm-quadratic-subfield-of-a-prime-cyclotomic-field
  - def-legendre-symbol
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - thm-complex-nth-roots-and-roots-of-unity
  - ex-quadratic-gauss-sum-for-three
  - def-cyclotomic-extension
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jerry Shurman, Math 361 Ninth Lecture, sections 2-4"
      url: "https://people.reed.edu/~jerry/361/lectures/lec09.pdf"
      locator: "Lecture 9 sections 2-4, pp. 5-8: the Gauss sum is attached to a chosen primitive p-th root of unity, the Galois action multiplies it by a Legendre symbol, and the analytic sign is stated only for a normalized complex root."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.19"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 8, Example 8.19, p. 144: for K = Q(zeta_p) the Frobenius acts on zeta_p by a power and on the Gauss sum by the corresponding quadratic sign; no root-independent value of the sum itself is asserted."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement refuted

"For a fixed odd prime $p$ the quadratic Gauss sum $\tau_p$ is independent of
the choice of the primitive $p$-th root of unity used to define it, so that its
sign is a function of $p$ alone."

## Facts & Assumptions

**Given:** The prime $p=3$, a primitive third root of unity $\zeta$ with
$\zeta\ne1$, the second primitive third root
$\zeta':=\zeta^{2}$, and the Gauss sums
$\tau=\sum_{a\bmod3}(a/3)\zeta^{a}$ and
$\tau'=\sum_{a\bmod3}(a/3)(\zeta')^{a}$ attached to them
([[def-quadratic-gauss-sum-in-a-cyclotomic-field]]).

[F1] In the cyclic group $\mu_3$ of third roots of unity the elements
$\zeta$ and $\zeta^{2}$ are the two primitive third roots of unity, and
$\mathbb Q(\zeta')=\mathbb Q(\zeta)$
([[thm-complex-nth-roots-and-roots-of-unity]],
[[def-cyclotomic-extension]]).

[F2] $\operatorname{Gal}(\mathbb Q(\zeta)/\mathbb Q)\cong(\mathbb Z/3)^{\times}$
acts by $\sigma_b(\zeta)=\zeta^{b}$ for $b=1,2$, so $\sigma_2$ is an
automorphism of $\mathbb Q(\zeta)$ and $\sigma_2(\zeta)=\zeta^{2}=\zeta'$
([[cor-the-galois-group-of-a-rational-cyclotomic-field]]).

[F3] For every integer $b$ not divisible by $3$, the automorphism
$\sigma_b$ of $\mathbb Q(\zeta)$ satisfies
$\sigma_b(\tau)=(b/3)\tau$
([[lem-galois-action-on-the-quadratic-gauss-sum]]); and $(2/3)=-1$ while
$(1/3)=1$ ([[def-legendre-symbol]]).

[F4] For every odd prime $p$, $\tau_p^{2}=p^{*}=(-1)^{(p-1)/2}p$; at $p=3$
this is $\tau^{2}=-3$, and the corresponding statement holds for $\tau'$
because $\zeta'$ is again a primitive third root of unity
([[thm-quadratic-gauss-sum-square]]).

[F5] For an odd prime $p$, $\mathbb Q(\tau_p)=\mathbb Q(\sqrt{p^{*}})$ is the
unique intermediate field of $\mathbb Q(\zeta_p)/\mathbb Q$ of degree $2$
([[thm-quadratic-subfield-of-a-prime-cyclotomic-field]]); at $p=3$ this is
$\mathbb Q(\tau)=\mathbb Q(\tau')=\mathbb Q(\sqrt{-3})=\mathbb Q(\zeta)$.

[F6] For the standard complex root $\zeta_3=e^{2\pi i/3}$ one has
$\tau_3=\zeta_3-\zeta_3^{2}=i\sqrt3$
([[ex-quadratic-gauss-sum-for-three]]).

## Counterexample

**Proof technique:** direct.

1.1 Replacing the primitive root $\zeta$ by $\zeta'=\zeta^{2}$ rewrites the attached Gauss sum as $\tau'=\sum_{a\bmod3}(a/3)(\zeta^{2})^{a}=\sum_{a\bmod3}(a/3)\sigma_2(\zeta)^{a}=\sigma_2(\tau)$, where $\sigma_2\in\operatorname{Gal}(\mathbb Q(\zeta)/\mathbb Q)$; the two sums are formed from two different primitive third roots of unity of the same field. [F1, F2]

1.2 $(2/3)=-1$: the nonzero square class modulo $3$ is $1$, and $2\equiv-1$ is a nonresidue modulo $3$. [F3]

1.3 By [F4], $\tau^{2}=(\tau')^{2}=-3\ne0$, so $\tau\ne0$ and $\tau'\ne0$; in particular $\tau'=-\tau$ will mean $\tau'\ne\tau$. [F4]

2.1 Applying [F3] with $b=2$ gives $\tau'=\sigma_2(\tau)=(2/3)\tau=-\tau$, so the Gauss sum changes sign when the primitive root is replaced by its square. [F3, step 1.1, step 1.2]

3.1 Steps 1.3 and 2.1 show $\tau'\ne\tau$, yet $\tau'^{2}=\tau^{2}=-3$ and $\mathbb Q(\tau')=\mathbb Q(\tau)=\mathbb Q(\sqrt{-3})$; thus the square of the Gauss sum and the field it generates are unchanged, while the sign of the sum depends on the chosen primitive root. In the standard complex embedding, $\zeta=e^{2\pi i/3}$ gives $\tau=i\sqrt3$ by [F6], while the same computation with $\zeta'=\zeta^{2}$ gives $\tau'=-i\sqrt3$; the value differs and no root-independent sign is well defined. [F5, F6, step 1.3, step 2.1] ∎

## Remarks

- **What remains canonical.** Only the square $\tau_p^{2}=p^{*}$ and the field
  $\mathbb Q(\tau_p)=\mathbb Q(\sqrt{p^{*}})$ are independent of the chosen
  primitive root; the element itself is determined only up to the sign
  $(b/p)$ of the automorphism relating two chosen roots.
- **No contradiction with the analytic sign theorem.** Statements that fix a
  standard complex root $\zeta_p=e^{2\pi i/p}$ (or an embedding together with
  a root) do determine the sign, e.g. $\tau_3=i\sqrt3$ here; the
  counterexample only refutes root-independence.
