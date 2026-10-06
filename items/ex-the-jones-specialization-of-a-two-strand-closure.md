---
id: ex-the-jones-specialization-of-a-two-strand-closure
kind: example
title: "The Jones specialization of a two-strand closure"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
deps: [def-temperley-lieb-quotient-and-jones-specialization,
       thm-the-homflypt-skein-relation,
       thm-the-ocneanu-markov-trace-exists-and-is-unique,
       def-homflypt-polynomial-from-the-hecke-markov-trace,
       def-closure-of-a-geometric-braid,
       def-markov-conjugation-and-stabilization-moves,
       lem-markov-moves-preserve-oriented-closure-isotopy,
       def-the-homflypt-coefficient-ring,
       lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units,
       def-exponent-sum-of-a-braid,
       def-generic-type-a-hecke-algebra, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, Example 4.1 (printed p. 49) and section 4.3 property 6 (the Jones specialization, printed p. 51)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Vaughan F. R. Jones, The Jones Polynomial, Introduction: trefoil example on printed p. 1 and mirror substitution on printed p. 4"
      url: "https://math.berkeley.edu/~vfr/jones.pdf"
---

## Example

Assume AC for the link-invariance and closure-isotopy assertions below. For
the two-strand braid $\beta=\sigma_1^3\in B_2$ the Ocneanu trace gives
$$\operatorname{tr}_2\bigl(\pi(\beta)\bigr)=(v^2-v+1)z+v(v-1)$$
(Birman--Brendle, Example 4.1 in their variables), and at the Jones
specialization $z_0=-1/(v+1)$, $u=s$, $t=s^2$ of
[[def-temperley-lieb-quotient-and-jones-specialization]] the value is
$$V(\widehat{\sigma_1^3})=-s^8+s^6+s^2=-t^{4}+t^{3}+t .$$
This is the value of the invariant $V$ on the closure of $\sigma_1^3$, which
is the right-handed trefoil; it agrees with the trefoil value displayed in Jones’ survey, printed p. 1. Replacing $t$ by $t^{-1}$ gives the value of the mirror trefoil in this same convention. The value satisfies
$V(\text{unknot})=1$ and, on every skein triple, the Jones skein relation
$s^{-2}V_+-s^2V_-=(s-s^{-1})V_0$ of
[[def-temperley-lieb-quotient-and-jones-specialization]]. The three-crossing braid
$\sigma_1\sigma_2\sigma_1$ is *not* a second representative of this knot: its
closure is the Hopf link with value $-s^5-s$, as computed in
[[ex-the-hecke-trace-skein-calculation-for-a-three-crossing-braid]].

## Verification

**Given:** AC ([[def-axiom-of-choice]]), the braid $\sigma_1^3\in B_2$, the generator $T_1\in H(2)$, the
Ocneanu trace and the Jones specialization $V$. AC is used through the cited
link-invariance and closure-isotopy results; the trace computations are
algebraic.

[A1] $T_1^2=(v-1)T_1+v$ in $H(2)$, and
$\pi_2(\sigma_1^3)=T_1^3$, $e(\sigma_1^3)=3$
([[def-generic-type-a-hecke-algebra]],
[[lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units]],
[[def-exponent-sum-of-a-braid]]).

[A2] $\operatorname{tr}_2(T_1)=z$, $\operatorname{tr}_2(1)=1$, and
$\operatorname{tr}_2$ is $\Lambda$-linear
([[thm-the-ocneanu-markov-trace-exists-and-is-unique]]).

[A3] $V(\widehat\beta)=s^{e(\beta)}
\bigl(-\frac{s^2+1}{s}\bigr)^{n-1}\operatorname{tr}_n
(\pi_n(\beta))\big|_{z=z_0}$ for $\beta\in B_n$, with $z_0=-1/(v+1)$ and
$s^2=v$; $V$ is an oriented link invariant satisfying the Jones skein
relation and $V(\text{unknot})=1$
([[def-temperley-lieb-quotient-and-jones-specialization]],
[[thm-the-homflypt-skein-relation]],
[[def-homflypt-polynomial-from-the-hecke-markov-trace]]).

[A4] The closure of $\sigma_1^3$ is the right-handed trefoil; Jones’ survey, printed p. 1, displays the trefoil value $t+t^3-t^4$. Its mirror rule replaces $t$ by $t^{-1}$, so the mirror $\widehat{\sigma_1^{-3}}$ has value $t^{-1}+t^{-3}-t^{-4}$ in this convention (Jones, printed pp. 1 and 4).

[A5] Conjugation and positive stabilization preserve the isotopy class of the
closure, the closure of $\sigma_1^2\in B_2$ has two components, and
$\sigma_1^{-1}(\sigma_1^2\sigma_2)\sigma_1=\sigma_1\sigma_2\sigma_1$
([[def-markov-conjugation-and-stabilization-moves]],
[[lem-markov-moves-preserve-oriented-closure-isotopy]],
[[def-closure-of-a-geometric-braid]]).

**Proof technique:** direct computation from the quadratic relation.

1.1 *The trace of $\sigma_1^3$.* By [A1] and $T_1^2=(v-1)T_1+v$, $T_1^3=T_1T_1^2=(v-1)T_1^2+vT_1 =(v-1)\bigl((v-1)T_1+v\bigr)+vT_1 =\bigl((v-1)^2+v\bigr)T_1+v(v-1) =(v^2-v+1)T_1+v(v-1)$. By linearity and [A2], $\operatorname{tr}_2(T_1^3)=(v^2-v+1)z+v(v-1)$, the displayed trace value. [A1, A2, algebra]

2.1 *The Jones value.* At $z_0=-1/(v+1)$, $\operatorname{tr}_2(T_1^3)|_{z_0} =\frac{-(v^2-v+1)+v(v-1)(v+1)}{v+1} =\frac{v^3-v^2-1}{v+1}$. By [A3] with $n=2$ and $e(\sigma_1^3)=3$, $V(\widehat{\sigma_1^3}) =s^3\bigl(-\frac{s^2+1}{s}\bigr)\frac{v^3-v^2-1}{v+1} =-s^2(s^2+1)\frac{s^6-s^4-1}{s^2+1} =-s^2(s^6-s^4-1)=-s^8+s^6+s^2$, i.e. $-t^4+t^3+t$ for $t=s^2$. [A1, A2, A3, step 1.1, algebra]

3.1 *Normalization and skein.* $V(\text{unknot})=1$ and the skein relation $s^{-2}V_+-s^2V_-=(s-s^{-1})V_0$ hold by [A3]; in the variable $t=s^2$ this is $t^{-1}V_+-tV_-=(t^{1/2}-t^{-1/2})V_0$. The closure of $\sigma_1^3$ is the right-handed trefoil by [A4], and applying $t\mapsto t^{-1}$ to the value $-t^4+t^3+t$ of step 2.1 gives $-t^{-4}+t^{-3}+t^{-1}$, the mirror polynomial from [A4]. The value of step 2.1 itself agrees with the trefoil table value in the cited survey; no inverse-variable table comparison is needed. [A3, A4, step 2.1]

4.1 *The cross-check.* For the $2$-braid representative $\sigma_1^2$ one computes $\operatorname{tr}_2(T_1^2)=(v-1)z+v$ from [A1] and [A2], so at $z_0$ its value is $(v^2+1)/(v+1)$ and by [A3] $V(\widehat{\sigma_1^2})=s^2\bigl(-\frac{s^2+1}{s}\bigr)\frac{v^2+1}{v+1}=-s(s^4+1)=-s^5-s$, which is different from $-s^8+s^6+s^2$; by [A5] the closure of $\sigma_1\sigma_2\sigma_1$ is the closure of that positive stabilization of $\sigma_1^2$, so $\sigma_1\sigma_2\sigma_1$ is not a second braid representative of the trefoil and the two computations are consistent with the invariance of [A3]. [A1, A2, A3, A5, step 2.1] ∎

## Remarks

- The trace relation $(T_1-q)(T_1+1)=0$ of the finite Hecke algebra gives
  $\operatorname{tr}(\sigma_1^3)=(q^2-q+1)z+q(q-1)$ in the variables of
  Birman--Brendle Example 4.1, which is the displayed value with $q=v$.
- The half-integer powers appearing in the Hopf-link value of the cross-check
  reflect the two components of that link; the trefoil is a knot, so its
  specialization lies in $s^2\,\mathbb Z[s^{\pm2}]$, as the value
  $-s^8+s^6+s^2$ shows.
