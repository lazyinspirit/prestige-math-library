---
id: ex-the-hecke-trace-skein-calculation-for-a-three-crossing-braid
kind: example
title: "The Hecke trace skein calculation for a three-crossing braid"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
deps: [def-closure-of-a-geometric-braid,
       def-homflypt-polynomial-from-the-hecke-markov-trace,
       def-markov-conjugation-and-stabilization-moves,
       def-temperley-lieb-quotient-and-jones-specialization,
       def-the-homflypt-coefficient-ring,
       lem-markov-moves-preserve-oriented-closure-isotopy,
       lem-the-markov-trace-of-an-inverse-hecke-generator,
       thm-the-hecke-trace-construction-is-an-oriented-link-invariant,
       thm-the-homflypt-skein-relation,
       thm-the-ocneanu-markov-trace-exists-and-is-unique,
       def-exponent-sum-of-a-braid,
       lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units,
       def-generic-type-a-hecke-algebra,
       def-markov-trace-on-the-type-a-hecke-tower,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Theo Johnson-Freyd, MATH 448 Reshetikhin-Turaev invariants, lecture notes 15 January 2016, Sections 1-3 (the trace recursion and the skein relation)"
      url: "https://categorified.net/RTinvariants/Jan15.pdf"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.3 (printed pp. 47-49): trace values and the Jones specialization of the HOMFLYPT polynomial"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Example

Assume AC for the link-invariance and closure-isotopy assertions below. Work
in the coefficient ring $R$ of [[def-the-homflypt-coefficient-ring]] with
the Ocneanu trace $\operatorname{tr}$ of
[[thm-the-ocneanu-markov-trace-exists-and-is-unique]] and the invariant $P$ of
[[def-homflypt-polynomial-from-the-hecke-markov-trace]]. For the three-crossing
braid $\beta=\sigma_1\sigma_2\sigma_1\in B_3$ one has
$$\operatorname{tr}_3\bigl(\pi_3(\beta)\bigr)=z\bigl(z(v-1)+v\bigr) =z^2(v-1)+zv,\qquad P(\widehat\beta)=u^3\alpha^2\bigl(z^2(v-1)+zv\bigr).$$
With the trace values
$$A=\operatorname{tr}_3(T_1T_2T_1),\qquad B=\operatorname{tr}_3(T_1T_2^{-1}T_1),\qquad C=\operatorname{tr}_3(T_1^2)$$
one has $A=z^2(v-1)+zv$, $B=(1-v^{-1})z^2+(3-v-v^{-1})z+(1-v)$,
$C=(v-1)z+v$, and the skein relation
$l^{-1}P(L_+)-lP(L_-)=mP(L_0)$ of
[[thm-the-homflypt-skein-relation]] holds on the triple
$(L_+,L_-,L_0)=(\widehat{\sigma_1\sigma_2\sigma_1},
\widehat{\sigma_1\sigma_2^{-1}\sigma_1},
\widehat{\sigma_1\sigma_1})$ at the middle crossing ($x=y=\sigma_1$ in
$B_3$); the relation is equivalent to the polynomial identity
$A-vB=(v-1)C$, both sides being $(v-1)^2z+v(v-1)$.

The closure $\widehat\beta$ is **not a knot**: the conjugation
$\sigma_1^{-1}(\sigma_1^2\sigma_2)\sigma_1=\sigma_1\sigma_2\sigma_1$ exhibits
$\sigma_1\sigma_2\sigma_1$ as conjugate to $\sigma_1^2\sigma_2$, the positive
stabilization of $\sigma_1^2\in B_2$, so $\widehat\beta$ is isotopic to
$\widehat{\sigma_1^2}$, the $(2,2)$-torus link, i.e. the **Hopf link** with
two components
([[def-markov-conjugation-and-stabilization-moves]],
[[lem-markov-moves-preserve-oriented-closure-isotopy]]). Consistently, at the
Jones specialization $z_0=-1/(v+1)$, $u=s$, $t=s^2$ of
[[def-temperley-lieb-quotient-and-jones-specialization]] the invariant takes
the value
$$V(\widehat\beta)=-s^5-s=-t^{1/2}(t^2+1)$$
on $\widehat\beta$, and the same value on the $2$-braid representative
$\widehat{\sigma_1^2}$; this is the value of the Hopf link in the
normalization of this page, with the convention fixed by
[[def-temperley-lieb-quotient-and-jones-specialization]].

## Verification

**Given:** AC ([[def-axiom-of-choice]]), the braid $\beta=\sigma_1\sigma_2\sigma_1\in B_3$, the generators
$T_1,T_2\in H(3)$, the Ocneanu trace and the invariant $P$. AC is used only
through the cited link-invariance and closure-isotopy results; the trace
calculations are algebraic.

[A1] $\operatorname{tr}_{n+1}(xT_ny)=z\operatorname{tr}_n(xy)$ and
$\operatorname{tr}_{n+1}(xT_n^{-1})=z_-\operatorname{tr}_n(x)$ for
$x,y\in H(n)$, $\operatorname{tr}_n(1)=1$, $\operatorname{tr}_n(T_i)=z$ and
$\operatorname{tr}_{n+1}\circ\iota_n=\operatorname{tr}_n$
([[thm-the-ocneanu-markov-trace-exists-and-is-unique]],
[[lem-the-markov-trace-of-an-inverse-hecke-generator]]).

[A2] $T_i^2=(v-1)T_i+v$ and $T_1T_2T_1=T_2T_1T_2$ in $H(n)$
([[def-generic-type-a-hecke-algebra]],
[[def-markov-trace-on-the-type-a-hecke-tower]]).

[A3] $P(\widehat\beta)=u^{e(\beta)}\alpha^{n-1}
\operatorname{tr}_n(\pi_n(\beta))$ for $\beta\in B_n$, the invariant is
unchanged by Markov moves, $\alpha=(uz)^{-1}$, $l=us$, $m=s-s^{-1}$ in $R$,
and $l^{-1}P_+-lP_-=mP_0$
([[def-homflypt-polynomial-from-the-hecke-markov-trace]],
[[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]],
[[thm-the-homflypt-skein-relation]]).

[A4] $\pi_n$ is multiplicative with $\pi_n(\sigma_i)=T_i$ and
$e(\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_k}^{\varepsilon_k})
=\sum_r\varepsilon_r$
([[lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units]],
[[def-exponent-sum-of-a-braid]]).

[A5] Conjugation of braids and positive stabilization preserve the isotopy
class of the closure, and the closure of $\sigma_1^2\in B_2$ is the Hopf link
([[def-markov-conjugation-and-stabilization-moves]],
[[lem-markov-moves-preserve-oriented-closure-isotopy]],
[[def-closure-of-a-geometric-braid]]); the Jones specialization is
$V=s^{e}\bigl(-\frac{s^2+1}{s}\bigr)^{n-1}\operatorname{tr}_n
(\pi_n(\beta))\big|_{z=z_0}$ with $z_0=-1/(v+1)$ and $s^2=v$
([[def-temperley-lieb-quotient-and-jones-specialization]]).

**Proof technique:** direct computation from the trace recursion.

1.1 *The trace of the three-crossing braid.* By [A4], $\pi_3(\sigma_1\sigma_2\sigma_1)=T_1T_2T_1$; by the recursion of [A1] with $n=2$ and $x=y=T_1$, $\operatorname{tr}_3(T_1T_2T_1)=z\operatorname{tr}_2(T_1^2)$. By [A2], $T_1^2=(v-1)T_1+v$, so by linearity and [A1], $\operatorname{tr}_2(T_1^2)=(v-1)z+v$. Hence $A=\operatorname{tr}_3(T_1T_2T_1)=z^2(v-1)+zv$, and $P(\widehat\beta)=u^{e(\beta)}\alpha^{2}A=u^3\alpha^2(z^2(v-1)+zv)$ since $e(\beta)=3$ by [A4]. [A1, A2, A3, A4, algebra]

1.2 *The closure is the Hopf link.* The braid identity $\sigma_1^{-1}(\sigma_1^2\sigma_2)\sigma_1=\sigma_1\sigma_2\sigma_1$ holds in $B_3$ by cancellation; since $\sigma_1^2\in B_2$ embeds as $\sigma_1^2\in B_3$, the element $\sigma_1^2\sigma_2$ is a positive stabilization of $\sigma_1^2$, and [A5] shows that the closures of $\sigma_1\sigma_2\sigma_1$ and $\sigma_1^2$ are ambient-isotopic. The endpoint permutation of $\sigma_1^2$ is $(1\,2)^2=1$, so [A5] gives two components. Closing its two positive crossings yields the usual two-crossing positive Hopf diagram, namely the $(2,2)$-torus link. Hence $\widehat\beta$ is that Hopf link. In particular $\widehat\beta$ is not a knot, and the knot normalization is not used. [A4, A5, given, algebra]

2.1 *The other two trace values.* The same recursion gives $\operatorname{tr}_3(T_1^2)=\operatorname{tr}_2(T_1^2)=C=(v-1)z+v$, and with $T_2^{-1}=v^{-1}T_2+(v^{-1}-1)$ from [A1], $B=\operatorname{tr}_3(T_1T_2^{-1}T_1) =v^{-1}A+(v^{-1}-1)C =(1-v^{-1})z^2+(3-v-v^{-1})z+(1-v)$. [A1, A2, step 1.1, algebra]

2.2 *The Jones specialization.* By [A5], with $z_0=-1/(v+1)$ and $u=s$, $\operatorname{tr}_3(\pi_3(\beta))|_{z_0} =-(v^2+1)/(v+1)^2$ and $V(\widehat\beta)=s^3\bigl(-\frac{s^2+1}{s}\bigr)^2 \bigl(-\frac{v^2+1}{(v+1)^2}\bigr) =-s(s^4+1)=-s^5-s=-t^{1/2}(t^2+1)$ with $t=s^2$. [A5, step 1.1, algebra]

3.1 *The skein identity.* Applying $P$ to the three words $x\sigma_2y=\sigma_1\sigma_2\sigma_1$, $x\sigma_2^{-1}y=\sigma_1\sigma_2^{-1}\sigma_1$ and $xy=\sigma_1^2$ with $x=y=\sigma_1$ and using [A3] and [A4], $P(L_+)=u^3\alpha^2A$, $P(L_-)=u\alpha^2B$ and $P(L_0)=u^2\alpha^2C$. The skein relation $l^{-1}P_+-lP_-=mP_0$ of [A3] reduces, after cancelling the common factor $u^2\alpha^2$ and multiplying by $s$ with $s^2=v$, to $A-vB=(v-1)C$. Expanding, $A-vB=(v-1)z^2+vz-v[(1-v^{-1})z^2+(3-v-v^{-1})z+(1-v)] =(v-1)^2z+v(v-1)=(v-1)C$, so the relation holds identically in $\Lambda$. [A2, A3, A4, step 1.1, step 2.1, algebra]

4.1 *Agreement with the two-strand representative.* For $\sigma_1^2\in B_2$ one computes $\operatorname{tr}_2(T_1^2)=C=(v-1)z+v$, so by [A5] $V(\widehat{\sigma_1^2})=s^2\bigl(-\frac{s^2+1}{s}\bigr) \frac{v^2+1}{v+1}=-s(s^4+1)$, the same value as step 2.2, as the invariance of [A3] requires for two representatives of the same link. This completes the computation and the cross-check. [A1, A3, A5, step 1.2, step 2.2, algebra] ∎

## Remarks

- The value $-t^{1/2}(t^2+1)$ is the Jones value of the Hopf link in this
  page's convention; the half-integral power of $t$ reflects the two
  components of the link in the normalization used here.
- The trace identity $A=vB+(v-1)C$ of step 3.1 is the one used in
  [[thm-the-homflypt-skein-relation]]; the example exhibits it on a word in
  which the middle letter is isolated, so no other relation enters.
