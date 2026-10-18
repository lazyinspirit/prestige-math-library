---
id: ex-jordan-hall-littlewood-degree-two-normalizations
kind: example
title: "Jordan Hall–Littlewood basis and pairing in degrees zero, one and two"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - thm-jordan-hall-pairing-and-hall-littlewood-basis
  - ex-jordan-quiver-hall-square
  - def-hall-littlewood-scalar-product-and-functions
  - def-hall-inner-product-on-symmetric-functions
  - cor-power-sums-are-orthogonal-for-the-hall-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, Example 2.2 and §2.4"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For $q>1$ a finite-field cardinality, set $s=q^{-1}$ and use the exact
Jordan map $\Phi_q$ of [[thm-jordan-hall-pairing-and-hall-littlewood-basis]].
Then
$$ P_\varnothing=1,\qquad P_{(1)}=m_{(1)},\qquad P_{(1,1)}=m_{(1,1)},\qquad P_{(2)}=m_{(2)}+(1-s)m_{(1,1)}. $$
The images of $u_{(1,1)}$ and $u_{(2)}$ are respectively
$q^{-1}P_{(1,1)}$ and $P_{(2)}$.
Their Hall–Littlewood norms are $1/((1-s)(1-s^2))$ and $1/(1-s)$.
The transported Jordan pairing has $B_q(p_2,p_2)=2/(q^2-1)$;
this differs from both the ordinary Hall norm $2$ and the standard
Hall–Littlewood norm $2/(1-q^{-2})$.

## Facts & Assumptions

**Given:** The finite-field parameter $q>1$, its reciprocal $s$, and
partitions of sizes at most two.

[F1] The Jordan square is $u_{(1)}^2=(q+1)u_{(1,1)}+u_{(2)}$
([[ex-jordan-quiver-hall-square]]).

[F2] The map, all transported pairing formulas and the Hall–Littlewood
norms have the conventions and proofs of
[[thm-jordan-hall-pairing-and-hall-littlewood-basis]] and
[[def-hall-littlewood-scalar-product-and-functions]].

[F3] The ordinary symmetric-function Hall pairing is a separate form,
with $\langle p_2,p_2\rangle_H=2$
([[def-hall-inner-product-on-symmetric-functions]],
[[cor-power-sums-are-orthogonal-for-the-hall-inner-product]]).

## Verification

1.1 The normalized generator map gives $\Phi_q(u_{(1)})=e_1=m_{(1)}$ and $\Phi_q(u_{(1,1)})=q^{-1}e_2=q^{-1}m_{(1,1)}$. Since $e_1^2=m_{(2)}+2m_{(1,1)}$, applying it to [F1] yields $\Phi_q(u_{(2)})=e_1^2-(1+q^{-1})e_2=m_{(2)}+(1-q^{-1})m_{(1,1)}$. The exponents are $n((1))=n((2))=0$, $n((1,1))=1$, so [F2] identifies exactly the four asserted $P$ functions, including the unit. [F1, F2, algebra]

2.1 In the power-sum basis, $m_{(2)}=p_2$ and $m_{(1,1)}=(p_1^2-p_2)/2$, hence $P_{(2)}=((1-s)p_1^2+(1+s)p_2)/2$. The diagonal Hall–Littlewood norms are $\langle p_1^2,p_1^2\rangle_s=2/(1-s)^2$ and $\langle p_2,p_2\rangle_s=2/(1-s^2)$. Substitution gives $\langle P_{(2)},P_{(1,1)}\rangle_s=\frac14((1-s)2/(1-s)^2-(1+s)2/(1-s^2))=0$, $\langle P_{(2)},P_{(2)}\rangle_s=1/(1-s)$ and $\langle P_{(1,1)},P_{(1,1)}\rangle_s=1/((1-s)(1-s^2))$. These independently check the theorem's degree-two scalar convention. [F2, step 1.1, algebra]

3.1 The automorphism factors from [F2] are $a_{(2)}=q^2(1-q^{-1})$ and $a_{(1,1)}=q^4(1-q^{-1})(1-q^{-2})$. Since $\Phi_q(u_{(1,1)})=q^{-1}P_{(1,1)}$, the rule $B_q=q^{-2}\langle\ ,\ \rangle_{q^{-1}}$ gives exactly $a_{(1,1)}^{-1}$ on that image, and gives $a_{(2)}^{-1}$ on the other image. In particular $B_q(p_2,p_2)=q^{-2}2/(1-q^{-2})=2/(q^2-1)$, whereas [F3] gives the ordinary Hall value $2$. The factors $q^{-1}$ on the column class and $q^{-2}$ on the degree-two form are both necessary. [F2, F3, step 1.1, step 2.1, algebra] ∎