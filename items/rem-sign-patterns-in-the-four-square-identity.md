---
id: rem-sign-patterns-in-the-four-square-identity
kind: remark
title: "Why the descent fixes one sign pattern in the four-square identity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-euler-four-square-product-identity, lem-four-square-descent]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Remarks 6.3 and 6.7"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
    - title: "Evan Dummit, Number Theory (part 9): The Geometry of Numbers, §9.1.2, Lemma 1"
      url: "https://dummit.cos.northeastern.edu/docs/numthy_9_geometry_of_numbers.pdf"
    - title: "MIT 18.781 Theory of Numbers, Lecture 22: Four Squares Theorem"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/fe790e3f49be0f81f6f25135d00476a9_MIT18_781S12_lec22.pdf"
pipeline_run: null
---

The four bilinear forms in [[lem-euler-four-square-product-identity]] are not the
only ones that turn a product of two sums of four squares into a sum of four
squares. Euler also recorded the variant with the same first coordinate and

$$z_2=x_1y_2-x_2y_1+x_3y_4-x_4y_3,\qquad z_3=x_1y_3-x_2y_4-x_3y_1+x_4y_2,\qquad z_4=x_1y_4+x_2y_3-x_3y_2-x_4y_1,$$

which is the form Dummit's Lemma 1 displays, and the norm of a product of
quaternions gives a third,

$$z_1=x_1y_1-x_2y_2-x_3y_3-x_4y_4,\quad z_2=x_1y_2+x_2y_1+x_3y_4-x_4y_3,\quad z_3=x_1y_3-x_2y_4+x_3y_1+x_4y_2,\quad z_4=x_1y_4+x_2y_3-x_3y_2+x_4y_1,$$

which is the route MIT's Lecture 22 takes. All three are polynomial identities in
the eight variables, so any of them proves that a product of two sums of four
squares is again one.

The descent asks more of the identity than that. In
[[lem-four-square-descent]] the second quadruple is congruent to the first
coordinatewise modulo $m$, and what the proof needs is that all four output
coordinates then become divisible by $m$. Substituting $y_1\equiv x_1$,
$y_2\equiv x_2$, $y_3\equiv x_3$, $y_4\equiv x_4$ modulo $m$ and writing
$(a,b,c,d)$ for $(x_1,x_2,x_3,x_4)$, the pattern fixed in
[[lem-euler-four-square-product-identity]] gives

$$z_1\equiv a^2+b^2+c^2+d^2,\qquad z_2\equiv ab-ba-cd+dc=0,\qquad z_3\equiv ac+bd-ca-db=0,\qquad z_4\equiv ad-bc+cb-da=0 \pmod m,$$

and the first of these is the multiple $pm$, hence also $0$ modulo $m$. Euler's
second pattern behaves the same way: its last three coordinates become
$ab-ba+cd-dc$, $ac-bd-ca+db$ and $ad+bc-cb-da$, all identically $0$. The
quaternion pattern does not: under the same substitution its coordinates become
$a^2-b^2-c^2-d^2$, $2ab$, $2ac$ and $2ad$, and the hypotheses of
[[lem-four-square-descent]] — that $m$ divides $a^2+b^2+c^2+d^2$ and that the
second quadruple is the centred residue quadruple of the first — do not force $z_1$, $z_2$,
$z_3$ or $z_4$ to vanish modulo $m$.

So the choice of signs is load-bearing for the divisibility step written here,
and it is displayed rather than summarised for that reason. This says nothing
about whether some other argument can descend with the quaternion pattern; a
proof organised around quaternion divisibility rather than around congruences
between bilinear forms is a different argument with a different bookkeeping, and
nothing above bears on it.
