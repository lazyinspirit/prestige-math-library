---
id: cex-euler-equality-alone-does-not-imply-perfectness
kind: counterexample
title: "Euler equality alone does not imply perfectness"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
  - cor-homology-of-spheres
  - cor-morse-euler-characteristic-identity
  - def-countable-choice
  - def-critical-point-and-critical-value-of-a-smooth-function
  - def-hessian-of-a-function-at-a-critical-point
  - def-morse-numbers-and-morse-polynomial
  - def-nondegenerate-critical-point-nullity-index-and-coindex
  - def-perfect-morse-function-over-a-field
  - def-poincare-polynomial-over-a-field
  - thm-creation-of-a-cancelling-handle-pair
  - thm-morse-functions-and-handle-decompositions-correspond
  - thm-morse-polynomial-identity
justified_by: []
aliases: []
landmark: false
proof_strategy: explicit-construction
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
dependency_level: 9
---

## Statement refuted

**False claim:** for a Morse function on a closed smooth manifold the Euler
characteristic identity $\sum_p(-1)^{\operatorname{ind}(p)}=\chi(M)$ forces the
function to be perfect over every field, equivalently forces the correction
polynomial $Q$ of the Morse polynomial identity to vanish.

Assume $\mathrm{AC}_\omega$. Start with the two-critical-point presentation of
$S^2$ (one $0$-handle and one $2$-handle, induced by the height function) and
insert a geometrically cancelling $(0,1)$-pair between them. The resulting
presentation has handles of indices $0,0,1,2$, and the corresponding Morse
function $f'$ on $S^2$ has Morse numbers $m_0=2$, $m_1=1$, $m_2=1$, so
$$M_{f'}(t)=2+t+t^2,\qquad \sum_k(-1)^km_k(f')=2-1+1=2=\chi(S^2).$$
Over every field, $P_{S^2,F}(t)=1+t^2$, hence $b_0=1<2=m_0$; the function is
not perfect over any field and its correction polynomial is $Q=1\ne0$. Thus the
Euler characteristic identity, which is an equality of alternating sums, does
not by itself force perfectness or the vanishing of $Q$.

## Facts & Assumptions

**Given:** The two-critical-point presentation of $S^2$, a geometrically cancelling $(0,1)$-pair inserted between its handles, the resulting presentation, and a Morse function $f'$ inducing it.

[F1] The creation theorem inserts a cancelling pair of consecutive indices and produces a diffeomorphism of the modified manifold with the original one relative to the incoming boundary, so the modified presentation presents $S^2$ ([[thm-creation-of-a-cancelling-handle-pair]]).

[F2] Morse functions inducing handle presentations have Morse numbers equal to the handle counts by index ([[thm-morse-functions-and-handle-decompositions-correspond]], [[def-morse-numbers-and-morse-polynomial]]).

[F3] The height function on $S^2$ is a Morse function with two critical points of indices $0$ and $2$ and Morse polynomial $1+t^2$ (computed below); over every field $b_0(S^2;F)=b_2(S^2;F)=1$ and $b_1(S^2;F)=0$ ([[cor-homology-of-spheres]], [[def-poincare-polynomial-over-a-field]]).

[F4] $f'$ is $F$-perfect exactly when $m_k(f')=b_k(S^2;F)$ for all $k$ ([[def-perfect-morse-function-over-a-field]]).

[F5] For every field there is a unique $Q\in\mathbb Z[t]$ with nonnegative coefficients and $M_{f'}=P_{S^2,F}+(1+t)Q$, and the Euler characteristic identity $\sum_k(-1)^km_k(f')=\chi(S^2)$ holds ([[thm-morse-polynomial-identity]], [[cor-morse-euler-characteristic-identity]]).

## Counterexample

**Proof technique:** explicit-construction.

1.1 For $h(x)=x_3$ on $S^2$, a point away from the poles has tangent vector $v=e_3-x_3x$ with $dh(v)=1-x_3^2>0$, so it is not critical. In pole charts $h(u)=\pm\sqrt{1-|u|^2}$ has Hessian $\mp I_2$ at $u=0$; thus the south and north poles have indices $0,2$, and $M_h=1+t^2$. Sphere homology gives $P_{S^2,F}=1+t^2$, so the correction polynomial is $Q=0$. [given, algebra]

1.2 Apply [F1] at the disk stage, whose outgoing circle is nonempty, and transport the original final $2$-handle attaching map across the supplied boundary diffeomorphism. The inserted $(0,1)$-pair is cancelling and the modified presentation still presents $S^2$; its handles are the original $0$-handle and $2$-handle together with the new $0$-handle and $1$-handle, so the presentation has handles of indices $0,0,1,2$. [F1, given]

2.1 Let $f'$ be a Morse function inducing the modified presentation. By [F2] its Morse numbers equal the handle counts by index, that is $m_0(f')=2$, $m_1(f')=1$, $m_2(f')=1$, and all other Morse numbers vanish; hence $M_{f'}(t)=2+t+t^2$. [F2, step 1.2]

3.1 Over every field $F$, [F3] gives $b_0(S^2;F)=1$, $b_1(S^2;F)=0$ and $b_2(S^2;F)=1$, so $P_{S^2,F}(t)=1+t^2$. Comparing with step 2.1, $m_0(f')=2>1=b_0(S^2;F)$, and by [F4] the function $f'$ is not $F$-perfect, for any field $F$. [F3, F4, step 2.1]

4.1 The correction polynomial is computed by the identity of [F5]: $2+t+t^2=(1+t^2)+(1+t)\cdot 1$, so the unique correction polynomial is $Q=1\ne0$. [F5, step 2.1, step 3.1]

5.1 Finally the Euler equality holds: $\sum_k(-1)^km_k(f')=2-1+1=2$, and by the Euler identity of [F5] this equals $\chi(S^2)$; the same alternating sum computed from the Betti numbers is $1-0+1=2$. Thus the Euler characteristic identity is satisfied while perfectness fails and $Q\ne0$, refuting the displayed false claim. [F5, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **Why the claim fails.** The Euler identity is the value at $t=-1$ of the Morse polynomial identity; the factor $(1+t)$ vanishes there, so the correction polynomial is invisible to it. Here $Q=1$ gives $(1+t)Q=1+t$, an excess in degrees zero and one which cancels in the alternating sum.
- **Consistency with the weak inequalities.** The failure of perfectness is detected by the weak inequality $m_0\ge b_0$, which is strict; deleting the cancelling pair recovers the original presentation and leaves homology unchanged.
