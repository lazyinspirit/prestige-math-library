---
id: lem-uniform-circular-distortion-gives-planar-quasiconformality
kind: lemma
title: Uniform circular distortion gives planar quasiconformality by difference quotients
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one
  - thm-acl-characterisation-of-w-one-p
  - lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds
  - thm-tonelli-and-fubini-for-completed-product-measures
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-wirtinger-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: F. W. Gehring, Definitions for a Class of Plane Quasiconformal Mappings
      url: https://doi.org/10.1017/S0027763000024272
      locator: The stronger uniform all-circle hypothesis used here is proved directly by the local difference-quotient argument, without invoking the externally cited qualitative infinitesimal criterion
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $h:\mathbb C\to\mathbb C$ be an orientation-preserving homeomorphism. For $x\in\mathbb C$ and $r>0$, put $L(x,r)=\max_{|y-x|=r}|h(y)-h(x)|$ and $l(x,r)=\min_{|y-x|=r}|h(y)-h(x)|$. Suppose $L(x,r)\le H l(x,r)$ for every $x,r$, with one fixed $1\le H<\infty$. Then $h\in W^{1,2}_{\mathrm{loc}}$, its continuous representative is ACL, and it is analytically $H$-quasiconformal:
$$|h_{\bar z}|\le\frac{H-1}{H+1}|h_z|\quad\hbox{almost everywhere}.$$
For relatively compact open sets $V\Subset U\Subset\mathbb C$, a coordinate unit vector $e_i$ and $0<|t|<\operatorname{dist}(V,\partial U)/2$, one has the explicit estimate
$$\int_V\left|\frac{h(x+te_i)-h(x)}t\right|^2\,dx\le4H^2\operatorname{area}(h(U)).$$

## Statement references

[[def-axiom-of-choice]]

[[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]]

[[thm-acl-characterisation-of-w-one-p]]

[[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]]

[[def-acl-sobolev-quasiconformal-homeomorphism]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the orientation-preserving plane homeomorphism and its uniform circular bound.

[A1] Full AC supplies the Countable Choice and Dependent Choice used by the following measure and Sobolev interfaces. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Uniform coordinate difference quotients in $L^2(V)$ for $V\Subset U$ imply $W^{1,2}(V)$ regularity. [[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]]

[F2] Sobolev classes in $W^{1,2}$ have ACL representatives whose line partial derivatives agree almost everywhere with their weak derivatives. [[thm-acl-characterisation-of-w-one-p]]

[F3] The independent general-homeomorphism argument in step 1.1 and the Remark of the quadrilateral supplier proves that a continuous planar homeomorphism with finite coordinate partial derivatives almost everywhere is totally differentiable almost everywhere. Its step 2.1 proves that at a nonsingular differentiability point an orientation-preserving homeomorphism has positive determinant, by the nonvanishing straight boundary homotopy to its linear derivative. These auxiliary interfaces assume AC but do not assume that this homeomorphism is already quasiconformal. [[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]]

[F4] Tonelli applies to nonnegative measurable functions for sigma-finite completed-product measures. [[thm-tonelli-and-fubini-for-completed-product-measures]]

[F5] For an orientation-preserving real-linear derivative with singular values $s_1\ge s_2>0$, its Beltrami modulus is $(s_1-s_2)/(s_1+s_2)$. A zero derivative satisfies every stated Beltrami inequality. [[def-wirtinger-derivatives]], [[def-acl-sobolev-quasiconformal-homeomorphism]]

## Proof

1.1 Define the locally finite Borel measure $\omega(E)=\operatorname{area}(h(E))$. This is a measure because a homeomorphism maps disjoint Borel sets to disjoint Borel sets and respects unions. It is Radon because it is the pushforward of planar area by the homeomorphism $h^{-1}$; compact and open approximation transport through that homeomorphism. The open image $h(B(x,r))$ contains $B(h(x),l(x,r))$: otherwise a segment from $h(x)$ to a point of that smaller disk outside the image would first meet the boundary $h(\partial B(x,r))$, contradicting the definition of $l$. The maximum distance from $h(x)$ in $h(\overline{B(x,r)})$ occurs on its boundary, because distance from a fixed point has no maximum in a nonempty open set. Hence $|h(y)-h(x)|\le L(x,r)\le H l(x,r)$ for $y\in\overline{B(x,r)}$, and $\pi l(x,r)^2\le\omega(B(x,r))$. [A1, given, algebra]

2.1 For $x\in V$ and $0<|t|<\operatorname{dist}(V,\partial U)/2$, use step 1.1 with radius $2|t|$ to obtain $|h(x+te_i)-h(x)|^2\le(H^2/\pi)\omega(B(x,2|t|))$. These balls lie in $U$. Tonelli, applied to their incidence indicator, gives $\int_V\omega(B(x,2|t|))\,dx=\int_U|V\cap B(y,2|t|)|\,d\omega(y)\le4\pi t^2\omega(U)$. Combining the two inequalities proves the explicit difference-quotient estimate. All measures in this calculation are locally finite Radon measures and the incidence set is open, so no absolute continuity or null-set preservation of $h$ has been presumed. [A1, F4, step 1.1, algebra]

3.1 Continuity makes $h$ square integrable on every relatively compact $U$. The uniform estimate in step 2.1 and [F1], with $p=2$ and complex-valued functions, give $h\in W^{1,2}(V)$. Exhausting the plane proves local Sobolev regularity. Apply [F2] on a countable collection of rectangles. On almost every coordinate line, its ACL representative agrees with the continuous representative almost everywhere by Fubini, hence everywhere on each compact line interval because both are continuous there. Thus the actual map $h$ is ACL and has finite coordinate partial derivatives almost everywhere, agreeing with the weak derivatives. [A1, F1, F2, F4, step 2.1, algebra]

4.1 By the general-homeomorphism interface [F3], $h$ is totally differentiable almost everywhere. At such a point $x$, write $h(x+v)=h(x)+Av+o(|v|)$; the remainder is uniform over $|v|=r$ after division by $r$. If $A$ has rank one, there are unit vectors $u,v$ with $Au=0$ and $|Av|>0$. Then $l(x,r)=o(r)$ whereas $L(x,r)\ge r|Av|+o(r)$, contradicting the finite circular bound. If $A$ is nonsingular with singular values $s_1\ge s_2>0$, the same uniform expansion gives $L(x,r)/r\to s_1$ and $l(x,r)/r\to s_2$, so $s_1/s_2\le H$. Its determinant is positive by [F3], since $h$ preserves orientation. The remaining possibility is $A=0$. [F3, step 3.1, given, algebra]

5.1 At almost every point the classical partials of the total derivative equal the weak derivatives by step 3.1. At the nonsingular points, [F5] and step 4.1 give $|h_{\bar z}|/|h_z|\le(H-1)/(H+1)$; at zero derivatives the asserted inequality also holds. Together with $W^{1,2}_{\mathrm{loc}}$ and ACL regularity, this is exactly analytic $H$-quasiconformality. The proof uses only the locally proved total-differentiability interface [F3]; it does not invoke an infinitesimal metric-to-quasiconformal criterion. [F5, step 3.1, step 4.1, algebra] ∎
