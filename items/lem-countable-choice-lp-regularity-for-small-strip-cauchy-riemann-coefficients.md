---
id: lem-countable-choice-lp-regularity-for-small-strip-cauchy-riemann-coefficients
kind: lemma
title: "Weak Lp regularity for a small Cauchy–Riemann principal perturbation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, def-sobolev-space-wkp-and-its-norm, thm-mihlin-fourier-multiplier-theorem, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, J-holomorphic Curves and Symplectic Topology, local elliptic estimates"
      url: "https://bookstore.ams.org/coll-52"
---

## Statement

Assume Countable Choice. Fix $m\ge1$ and $2<p<\infty$. There are constants $\eta_{m,p}>0$ and $C_{m,p}<\infty$ with the following property. Let $w\in W^{1,2}(\mathbb R^2;\mathbb C^m)$ have compact support, let $A$ be a bounded measurable real linear endomorphism-valued coefficient with $\|A\|_\infty\le\eta_{m,p}$, and let $f\in L^2\cap L^p$. If
$$D_0w:=w_s+iw_t=Aw_t+f$$
weakly, then $w\in W^{1,p}$ and $\|\nabla w\|_p\le C_{m,p}\|f\|_p$.

The same assertion holds on the upper half-plane if $w$ has compact support in its closure and is continuous there with real boundary values. The coefficient need not be differentiable. In particular, localizing a continuous $W^{1,2}$ map satisfying this equation on a disk or real-boundary half-disk gives local $W^{1,p}$ regularity whenever its localized forcing belongs to $L^2\cap L^p$.

## Statement references

[[def-countable-choice]]

[[def-sobolev-space-wkp-and-its-norm]]

## Facts & Assumptions

**Given:** Countable Choice and the exponent, dimension, coefficient, weak solution, support, and forcing in the statement.

[F1] Smooth homogeneous degree-zero symbols on $\mathbb R^2\setminus\{0\}$ with bounded derivatives on its unit circle define bounded $L^p$ multipliers for $1<p<\infty$ by [[thm-mihlin-fourier-multiplier-theorem]], which assumes only Countable Choice and retains the ordinary $L^2$ Fourier-multiplier action.

[F2] Smooth compactly supported functions are dense in $W^{k,q}(\mathbb R^2)$ for finite $q$, under Countable Choice, by [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]. Its cutoff and mollification construction can approximate an $L^2\cap L^p$ function in both norms simultaneously.

## Proof

1.1 With Fourier convention $\widehat{\partial_jw}=2\pi i\xi_j\widehat w$, set $$r_s(\xi)=\frac{i\xi_s}{i\xi_s-\xi_t},\qquad r_t(\xi)=\frac{i\xi_t}{i\xi_s-\xi_t}\quad(\xi\ne0).$$ Both symbols are smooth and homogeneous of degree zero, and their first two derivatives are bounded on the unit circle because the denominator there has modulus one. Homogeneity gives the required Mihlin estimates. Let $R_s,R_t$ be their componentwise multiplier operators. By [F1] their $L^p$ norms on the finite-dimensional vector-valued space are bounded by a finite constant $K=K_{m,p}\ge1$, while their $L^2$ norms are at most one since $|r_s|,|r_t|\le1$. For smooth compactly supported $w$, Fourier differentiation gives $w_j=R_jD_0w$. Approximation in $W^{1,2}$ by [F2] proves the same identities for the given weak $w$. [F1, F2, construct, algebra]

2.1 Choose $\eta_{m,p}=1/(2K)$. The equation and step 1.1 give $$w_t=R_tAw_t+R_tf$$ as an $L^2$ identity. The real linear operator $R_tA$ has norm at most $1/2$ on both $L^2$ and $L^p$. Therefore the geometric series $$\sum_{k\ge0}(R_tA)^kR_tf$$ converges in each of those spaces. Its partial sums belong to their intersection and have identical distributional meanings: the $L^2$ and $L^p$ multipliers agree on that intersection, because common smooth approximations from [F2] converge in both norms and the multiplier is bounded in each. The two limits thus represent the same distribution. Uniqueness of the $L^2$ solution to $(I-R_tA)v=R_tf$ identifies that limit with the already existing derivative $w_t$. Consequently $\|w_t\|_p\le2K\|f\|_p$. The equation then gives $w_s=(A-i)w_t+f\in L^p$ with a uniform bound, proving $\|\nabla w\|_p\le C_{m,p}\|f\|_p$. [F2, step 1.1, construct, algebra]

3.1 The function itself lies in $L^p$. Take a square $[-R,R]^2$ containing its support. The distributional identity $\partial_sw=w_s\in L^p$, together with Fubini, gives the one-dimensional primitive formula on almost every horizontal line: subtract $\int_{-R-1}^s w_s(r,t)dr$ from $w(s,t)$; its distributional $s$ derivative is zero, so it is a constant. A distribution with derivative zero is constant because it annihilates every integral-zero compact test, each of which is a derivative of a compactly supported test. The vanishing of $w$ before its support makes that constant zero. Thus Holder on each finite horizontal interval gives $\|w\|_p\le(2R+2)\|w_s\|_p$. In particular $w\in W^{1,p}$. This argument requires no general ACL or Morrey theorem. [step 2.1, given, algebra]

4.1 In the half-plane case let $C$ denote componentwise complex conjugation and extend $w$ by $\widehat w(s,-t)=Cw(s,t)$ for $t>0$. This is a compactly supported $W^{1,2}$ map on the plane. To verify the boundary claim directly, apply the primitive argument of step 3.1 on almost every vertical line; the continuous boundary values agree with the resulting finite-endpoint primitive limits. Since these values are real, the reflected values match, and integrating by parts on the two sides leaves no line atom. Define $\widehat A(s,-t)=-CA(s,t)C$ and $\widehat f(s,-t)=Cf(s,t)$, preserving their original values for $t>0$. Then $D_0\widehat w=\widehat A\widehat w_t+\widehat f$ weakly, since below the line $D_0\widehat w=C(D_0w)$ and $\widehat w_t=-Cw_t$; continuity again removes any distributional boundary term. The coefficient norm is unchanged. Apply the plane result and restrict back. Both the reflected forcing norm and derivative norm gain the same factor $2^{1/p}$, so the derivative estimate has the same constants. [step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 For a local equation multiply the solution by a real smooth cutoff $\chi$ supported in a smaller disk or half-disk and extend it by zero. The product obeys $$D_0(\chi w)=A\partial_t(\chi w)+\chi f+(\chi_s+i\chi_t-A\chi_t)w.$$ The cutoff preserves real boundary values, and its forcing has the claimed integrability whenever the displayed localized terms do. The plane or half-plane result proves the local assertion on the region where $\chi=1$. This completes the weak regularity statement, without assuming differentiability of $A$ or regularity of the weak solution beyond the stated hypotheses. [step 2.1, step 3.1, step 4.1, construct, algebra] ∎
