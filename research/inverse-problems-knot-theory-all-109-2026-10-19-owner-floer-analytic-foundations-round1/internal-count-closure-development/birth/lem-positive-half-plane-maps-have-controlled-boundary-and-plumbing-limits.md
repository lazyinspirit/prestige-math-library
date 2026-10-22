---
id: lem-positive-half-plane-maps-have-controlled-boundary-and-plumbing-limits
kind: lemma
title: "Positive half-plane maps have controlled boundary and plumbing limits"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-laurent-expansion-annulus, thm-laurent-coefficient-formula-and-uniqueness, thm-cauchy-integral-formula-circle, thm-removable-singularity-characterizations, thm-identity-theorem-holomorphic-functions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ahlfors, Complex Analysis"
      url: "https://bookstore.ams.org/chel-385-h"
      locator: "Elementary positive harmonic functions; the boundary estimates, isolated singularity and exact neck mean argument are proved below"
---

## Statement

Assume Countable Choice. The following elementary facts hold for actual holomorphic maps to the open upper half-plane.

First, a holomorphic function on an upper punctured half-disk, real and holomorphically reflectible across its straight boundary except the center, has at most a SIMPLE pole at that boundary center. If it has a pole its principal part is $-c/z$, $c>0$. If it extends nonconstantly across a regular boundary point, its real boundary derivative is nonzero with the positive half-plane orientation.

Second, on a fixed smaller closed half-disk, a positive harmonic function zero on the straight edge has every fixed derivative bounded by its value at one fixed interior point, with constants depending only on the two disk radii and the derivative order. Consequently a family of holomorphic half-plane maps bounded at one interior point has uniform reflected holomorphic bounds on smaller closed half-disks away from its boundary poles. The same bounds hold in fixed real-preserving holomorphic boundary charts and in square-root charts at separated slit tips.

Third, on a connected fixed complex domain, holomorphic upper-half-plane maps normalized at one interior point, or having a bounded complex average on a fixed interior circle with its imaginary part bounded above and away from zero, have subsequences converging smoothly on compact sets to an upper-half-plane map, possibly a nonreal constant. A positive half-plane map on a FULL punctured interior disk extends across the puncture with value in the upper half-plane, unless it was a constant real boundary limit, which the preceding positive normalization excludes.

In particular consider two fixed bordered components joined by the actual interior target plumbing $zw=\epsilon_n\to0$, with half-plane maps holomorphic on the joining annulus and on fixed compact subsets of both components. If they have a nonreal normalized compact limit on the first component, extending across its node with value $c\in\mathbb H$, then their Laurent constants on the two sides agree EXACTLY and tend to $c$. This supplies nonreal compact convergence on the other connected component. It is an actual positive-function statement, with no target stable-map compactness or boundary-disk count assumed.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual maps and fixed local domains, boundary charts, positive normalizations and plumbing relation in the Statement. The phrase holomorphically reflectible means the actual conjugation reflection across a straight real boundary edge, so it supplies a holomorphic function on a punctured full disk. Uniform bounds concern smaller sets separated from every stated boundary pole.

[F1] Actual Laurent expansions converge locally uniformly and their coefficients are the unique circle integrals. The circle Cauchy formula gives derivative estimates on separated smaller disks. ([[thm-laurent-expansion-annulus]], [[thm-laurent-coefficient-formula-and-uniqueness]], [[thm-cauchy-integral-formula-circle]])

[F2] Bounded holomorphic punctures are removable, and a holomorphic function which is constant on an open set is constant on its connected domain. ([[thm-removable-singularity-characterizations]], [[thm-identity-theorem-holomorphic-functions]])

## Proof

1.1 Prove the boundary pole assertion without an essential-singularity theorem. Reflection and [F1] give $p(z)=\sum_{k\in\mathbb Z}a_kz^k$ on a punctured disk. Reality on its real diameter and coefficient uniqueness make every $a_k$ real. Put $u=\operatorname{Im}p>0$ on the upper half. Uniform convergence on each fixed radius permits termwise sine integration. Orthogonality gives
$$\frac2\pi\int_0^\pi u(re^{i\vartheta})\sin(k\vartheta)\,d\vartheta=a_kr^k-a_{-k}r^{-k}\quad(k\ge1).$$
Since $|\sin(k\vartheta)|\le k\sin\vartheta$ on $[0,\pi]$ (induct using the sine addition formula), positivity gives
$$|a_kr^k-a_{-k}r^{-k}|\le k(a_1r-a_{-1}r^{-1}).$$
For $k\ge2$, multiply by $r^k$ and let $r\downarrow0$: the right side tends to zero, hence $a_{-k}=0$. Also $a_{-1}\le0$; if it is nonzero write it $-c$ with $c>0$. Thus no higher principal term, including an essential negative tail, is possible. At a regular real point a nonconstant germ has its first nonzero term $az^k$ with real $a$. Positivity on EVERY angle $0<\vartheta<\pi$ forces $k=1$ and $a>0$, since $\sin(k\vartheta)$ changes sign for $k\ge2$. A germ vanishing to infinite order is constant by its Cauchy Taylor series and [F2]. This proves both assertions. [F1, F2, given, construct, algebra]

2.1 Here is the required quantitative edge bound. Scale the large half-disk to the unit one. Oddly reflect a harmonic $u$ with zero diameter values across the diameter. Its weak first derivatives match across the edge, since its zero tangential derivative and reflected normal derivative agree; the distributional Laplacian has no line atom. Local disk convolution and the circle mean identity make that weak harmonic extension smooth. On a slightly smaller disk its boundary values are $u(e^{it})$ on the upper semicircle and their negatives on the lower. The ordinary Poisson identity follows directly from the circle Cauchy formula for a harmonic conjugate on the disk, or by expanding the kernel $\operatorname{Re}((e^{it}+z)/(e^{it}-z))$ in its convergent geometric series and comparing its harmonic boundary values by the maximum principle. The maximum principle itself follows from the interior circle mean identity. Subtracting the two semicircles, the kernel for $z$ in the upper disk is
$$\frac1{2\pi}\bigl(P(z,e^{it})-P(z,e^{-it})\bigr)=\frac{2(1-|z|^2)\operatorname{Im}z\sin t}{\pi|e^{it}-z|^2|e^{-it}-z|^2}.$$
It is positive. For a fixed interior $z_*=i/2$, every fixed derivative in $z$ of this kernel on $|z|\le1/3$ is bounded in absolute value by $C_k$ times its value at $z_*$: all denominators are uniformly separated from zero and both numerator formulas have the factor $\sin t$. Integrating against the NONNEGATIVE upper semicircle data proves $\sup_{|z|\le1/3}|D^ku(z)|\le C_ku(z_*)$. Using a slightly smaller containing disk if necessary avoids any corner regularity issue at the two diameter endpoints. The Cauchy--Riemann identities bound derivatives of the real part of a holomorphic $p$ by those of $u$. One known interior real value and integration on the smaller connected set bound the remaining additive real constant. Smooth fixed coordinate changes give exactly the same estimates in the boundary and square-root charts specified in the Statement. [F1, given, construct, algebra]

3.1 For clarity the interior normal-family input can also be constructed directly. The positive disk Poisson kernel, with boundary radius chosen inside the domain, gives $C^{-1}u(z_*)\le u(z)\le Cu(z_*)$ on each smaller disk; its two kernel ratios are bounded above and below. A finite chain of overlapping disks propagates these inequalities to every compact subset of a connected domain. Their differentiated kernels bound all derivatives of $u$, and the Cauchy--Riemann identities bound the real-part derivatives. If the normalization is instead a complex circle average $c_n$, Harnack on a fixed annular neighborhood of that circle makes all its imaginary values comparable to their average. The bounds on $\operatorname{Im}c_n$ give upper AND positive lower bounds there, and the bounded real average plus the derivative bounds controls the additive real constant. The same disk-chain argument then applies. To extract a subsequence, take a countable coordinate-disk exhaustion, extract convergence at their countable dense rational point sets by bounded subsequences, and diagonalize using Countable Choice. The uniform next-derivative bounds turn this into compact-uniform convergence of all fixed derivatives; integrating derivatives identifies the derivatives of the limit. Its imaginary part is strictly positive by the propagated lower bounds. This proves the actual claimed compact convergence, without an unrestricted-choice normal-family theorem. Combining this with step2.1 gives reflected convergence on every smaller nodeless boundary chart. [F1, step 2.1, construct, algebra]

4.1 If $p$ maps a full punctured disk to $\mathbb H$, its Cayley transform $F=(p-i)/(p+i)$ is bounded by one and extends holomorphically by [F2]. If its extension achieved modulus one at the center, the interior maximum principle from the circle mean identity would make it a constant of modulus one, contradicting the original half-plane values. Hence $|F(0)|<1$, and $p=i(1+F)/(1-F)$ extends with value in $\mathbb H$. Finally on a plumbing annulus $zw=\epsilon_n$, a Laurent series $\sum a_{n,k}z^k$ becomes $\sum a_{n,k}\epsilon_n^kw^{-k}$; its constant coefficient is unchanged. By [F1] it is the complex average on every radius circle lying in that annulus. On a fixed first-side circle, compact convergence and the just-proved node removal give that average tending to the extended value $c$. The opposite-side constant is the SAME number, so step3.1 gives bounded, nonreal compact convergence on that whole connected second component. This is the actual transfer mechanism used across an interior target neck. It does not identify any complete degenerating moduli space or count. [F1, F2, step 1.1, step 3.1, construct, algebra] ∎
