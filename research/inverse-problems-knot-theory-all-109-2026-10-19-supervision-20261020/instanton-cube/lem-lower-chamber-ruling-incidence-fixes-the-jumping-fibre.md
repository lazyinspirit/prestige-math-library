---
id: lem-lower-chamber-ruling-incidence-fixes-the-jumping-fibre
kind: lemma
title: Lower-chamber ruling incidence fixes the jumping fibre
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-lower-chamber-one-charge-bundles-are-elementary-modifications
  - lem-adjoint-incidence-insertions-have-rational-cutdown-counts
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vicente Munoz, Gromov-Witten invariants of the moduli of bundles on a surface, elementary transformation construction in Section5
      url: https://arxiv.org/abs/math/9910105
---

## Statement

Assume full AC. On the actual parameter groupoid of lower-chamber locally free elementary modifications of determinant $B$ and $c_2=1$, let $j$ send a bundle to its unique jumping point $x\in C$. For the ruling sphere $B_q=\{q\}\times\mathbb{CP}^1$, the rational universal-adjoint class is
$$\mu(B_q)=j^*[q].$$
Thus one ruling insertion fixes the jumping fibre with multiplicity plus one. At a fixed jumping point $x$, write $h=c_1(O(1))$ for the projective extension parameter and $\kappa(V)=-p_1(\operatorname{ad}V)/4[C]$. Then
$$\mu(\Sigma)=\kappa(V)+h+\tfrac12c_1(V_x).$$
This expression is independent of tensor-normalization choices. In rational determinant-normalized charts it is $\kappa(V)+h$. These identities apply to every smooth family in the groupoid, including families through strictly semistable $V$. They reduce the absolute lower-chamber marked operation to a fixed-jumping-point framed-curve-bundle integral. They do not evaluate that integral or assert the missing global HYM realization.

## Facts & Assumptions

**Given:** Rational universal normalization and the actual locally free extension groupoid.

[F1] Every lower-chamber stable bundle uniquely has an elementary-modification presentation, including its automorphisms, in [[lem-lower-chamber-one-charge-bundles-are-elementary-modifications]].

[F2] The rational universal-adjoint incidence class and its homotopy invariance are [[lem-adjoint-incidence-insertions-have-rational-cutdown-counts]]. Full AC is inherited. [[def-axiom-of-choice]]

## Proof

1.1 **Compute on the universal extension, without discarding stabilizers.** Work on any smooth family chart of [F1]'s groupoid. Let $y$ denote the curve coordinate in the surface, $x$ its jumping point, $\Delta\subset C_y\times C_x$ the diagonal and $u$ the degree-one class on $\mathbb{CP}^1$. The universal projective extension has exact sequence
$$0\longrightarrow p^*V\otimes O(1)\longrightarrow E\longrightarrow O_\Delta\otimes O_{\mathbb{CP}^1}(-1)\longrightarrow0.$$
On these charts its K-class is $[V]e^h+(1-e^{-\Delta})e^{-u}$. Thus
$$\begin{aligned}
c_1(E)&=c_1(V)+2h+\Delta,\\
\operatorname{ch}_2(E)&=\operatorname{ch}_2(V)+hc_1(V)+h^2-\Delta u-\Delta^2/2.
\end{aligned}$$
These follow from an exact sheaf sequence with locally free middle term, so no replacement of the ASD incidence by a formal abstract ring is involved. They remain equivariant for automorphisms of $V$. [F1, given, construct, algebra]

2.1 **The transverse ruling insertion is precisely the jumping-point divisor.** For a rank-two complex bundle $p_1(\operatorname{ad}E)=4\operatorname{ch}_2(E)-c_1(E)^2$. Therefore
$$p_1(\operatorname{ad}E)=p_1(\operatorname{ad}V)-2c_1(V)\Delta-4h\Delta-4\Delta u-3\Delta^2.$$
Only $-4\Delta u$ has a $\mathbb{CP}^1$ leg. Restricting the $C_y$ coordinate to $q$ and slanting with the ruling gives $-4[q]$ on the varying $x$ coordinate. Multiplication by the defining $-1/4$ gives $\mu(B_q)=j^*[q]$. The local diagonal has the positive complex divisor orientation, so its multiplicity is plus one. Repeated ruling insertions would be powers of this same point class and vanish on the smooth varying-point curve; this argument has not replaced them by unrelated frame parameters. [F2, step 1.1, algebra]

3.1 **The remaining surface class is a framed curve-bundle class.** Fix $x$. Then $\Delta^2=0$ and $\int_{C_y}\Delta=1$. Slanting step 2.1's expression with $C_y\times\{z\}$, where $u$ restricts to zero, yields
$$\mu(\Sigma)=\kappa(V)+h+\tfrac12c_1(V_x).$$
Tensoring $V$ by a base line of class $a$ changes $c_1(V_x)$ by $2a$ and the projective extension class $h$ by $-a$; their sum is unchanged. Thus the formula descends in the adjoint convention, even where a global fixed-determinant universal rank-two bundle is unavailable. Rationally normalizing the fibre determinant removes the last summand but does not alter the formula's value. [F1, F2, step 1.1, step 2.1, algebra]

4.1 **The reduction keeps the analytic obligation visible.** On a compact regular realized ASD family, [F2] allows the ruling incidence to be moved by an oriented incidence homotopy to the divisor $j^{-1}(q)$. The absolute count with six additional surface insertions would then be the integral of the sixth power of step 3.1's class on the actual compactified fixed-jump moduli, with its ASD determinant orientation. Its open data are degree-zero semistable $V$ with fixed determinant and a projective invertible frame matrix at $q$. The coarse even-determinant curve moduli and a rank-four projective bundle cannot replace this groupoid: at strictly semistable $V$ the automorphism group changes, and the rank-one frame boundary also requires compactification. The present class calculation resolves the incidence multiplicity and reduces the dimension, but proving HYM existence, controlling that compactification and performing its oriented integral remain necessary for the absolute value. [F1, F2, step 2.1, step 3.1, construct, algebra]
