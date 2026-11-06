---
id: lem-countable-choice-planar-morrey-estimate
kind: lemma
title: Planar Sobolev continuity estimates under Countable Choice
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
deps:
- def-countable-choice
- def-sobolev-space-wkp-and-its-norm
- cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Chris Wendl, Lectures on Holomorphic Curves in Symplectic and Contact Geometry,
      version 3.2
    url: https://arxiv.org/pdf/1011.1690
    locator: Printed p. 49, two-dimensional Sobolev embedding context. The precise Holder
      exponent, plane and half-plane estimates, rescaling and Countable Choice proof
      are proved locally below; no reading of Evans or of Wendl cited books is asserted.
domain: mathematics
library: physics
dependency_roles:
  def-countable-choice: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
---

## Sobolev conventions

For an open set $U\subseteq\mathbb R^2$ and a finite-dimensional real normed space $(V,|\cdot|)$, $W^{k,p}(U;V)$ consists of almost-everywhere classes of measurable maps $f:U\to V$ whose coordinates in a fixed basis and their distributional derivatives through order $k$ lie in scalar $L^p(U)$. Equivalently, $D^\beta f=g_\beta$ means $\int_U fD^\beta\varphi=(-1)^{|\beta|}\int_Ug_\beta\varphi$ as an equality in $V$ for every scalar $\varphi\in C_c^\infty(U)$. Set $|\nabla f|=(|f_s|^2+|f_t|^2)^{1/2}$ and $\|\nabla f\|_p=(\int_U|\nabla f|^p)^{1/p}$. The Sobolev norm is $(\sum_{|\beta|\le k}\|D^\beta f\|_p^p)^{1/p}$. Finite-dimensional norm equivalence makes the space independent of the basis. On a closed half-plane or half-disk, these spaces mean the spaces on its open interior; boundary values refer to the continuous representative established below.

## Statement

Assume Countable Choice. Let $p>2$, $\alpha=1-2/p$, and let $V$ be a finite-dimensional real normed space. Every $f\in W^{1,p}(\mathbb R^2;V)$ has a unique continuous representative, and
$$|f(x)-f(y)|\le C_{p,V}|x-y|^\alpha\|\nabla f\|_{L^p(\mathbb R^2)}.$$
The same holds on the closed upper half-plane, with its gradient norm and a possibly larger constant. On a disk $B_{2r}$, or upper half-disk $B_{2r}^+$ including its straight boundary, a $W^{1,p}$ map has a continuous representative on the smaller closed disk or half-disk and satisfies
$$\|f\|_{L^\infty(B_r^{(+)})}+r^\alpha[f]_{C^{0,\alpha}(\overline{B_r^{(+)}})}\le C_{p,V}\bigl(r^{-2/p}\|f\|_{L^p(B_{2r}^{(+)})}+r^{1-2/p}\|\nabla f\|_{L^p(B_{2r}^{(+)})}\bigr).$$
The same local conclusion applied to the weak first derivatives implies that a $W^{2,p}$ map has a $C^{1,\alpha}$ representative locally, including the straight boundary.

## Statement references

[[def-countable-choice]]

[[def-sobolev-space-wkp-and-its-norm]]

## Facts & Assumptions

**Given:** Countable Choice, $p>2$, the finite-dimensional target, and the domains in the statement.

[F1] Under Countable Choice, compactly supported smooth functions are dense in $W^{k,p}(\mathbb R^2)$ by [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn|Compactly supported smooth functions are dense in $W^{k,p}(R^{n})$]]. Approximation is componentwise in $V$.

## Proof

1.1 First take smooth $f$ and distinct points $x,y$ in the plane, and write $d=|x-y|$ and $G=B_{2d}(x)$. For either $a=x$ or $a=y$, the disk $G$ is star shaped about $a$ and is contained in $B_{4d}(a)$. In polar coordinates about $a$, its radial extent is some $R(\theta)\le4d$. The fundamental theorem of calculus along each segment gives $$\begin{aligned}|f(a)-f_G|&\le\frac1{|G|}\int_0^{2\pi}\int_0^{R(\theta)}\rho\int_0^\rho|\nabla f(a+t e_\theta)|\,dt\,d\rho\,d\theta\\&\le\frac{(4d)^2}{2|G|}\int_G\frac{|\nabla f(z)|}{|z-a|}\,dz\le\frac2\pi\int_G\frac{|\nabla f(z)|}{|z-a|}\,dz,\end{aligned}$$ where $f_G$ denotes its average. If $p'=p/(p-1)<2$, Holder and polar integration give $$\left(\int_{B_{4d}(a)}|z-a|^{-p'}dz\right)^{1/p'}=\left(\frac{2\pi(4d)^{2-p'}}{2-p'}\right)^{1/p'}=C_p d^\alpha.$$ Adding the bounds for $a=x,y$ proves the global seminorm estimate for smooth $f$. The identical polar argument with $G=B_1(a)$ gives $|f(a)|\le\pi^{-1/p}\|f\|_{L^p(B_1(a))}+C_p\|\nabla f\|_{L^p(B_1(a))}$. [given, construct, algebra]

2.1 Approximate a given plane $W^{1,p}$ map by smooth compactly supported $f_n$ using [F1]. The last estimate in step 1.1 applied to $f_n-f_k$ bounds its supremum on the entire plane by $C_p\|f_n-f_k\|_{W^{1,p}}$. Thus the sequence converges uniformly to a continuous map $F$. Its $L^p$ limit is $f$, so $F=f$ almost everywhere. Passing to the limit in the two-point estimate proves the claimed seminorm bound. Two continuous representatives equal almost everywhere are equal everywhere, since any point of inequality has a neighborhood of positive measure. No pointwise representative choice at uncountably many points has been made. [F1, step 1.1, construct, algebra]

3.1 For the upper half-plane extend $f$ evenly: $Ef(s,-t)=f(s,t)$. This extension belongs to $W^{1,p}(\mathbb R^2)$, with derivative formulas $(Ef)_s=E(f_s)$ and $(Ef)_t(s,-t)=-f_t(s,t)$, and its function and gradient norms are multiplied by $2^{1/p}$. Here is a weak justification which does not assume a trace theorem. On almost every vertical line, Fubini applied to the distributional normal derivative shows that $f(s,t)$ is represented on finite intervals by a primitive of $f_t(s,t)$ plus a constant: after subtracting that primitive, its distributional derivative vanishes, and every integral-zero test is the derivative of a compactly supported test. Since $f_t$ is integrable to $t=0$ on almost every bounded vertical interval, this primitive has a finite endpoint limit. On a bounded tangential interval the endpoint values are integrable: the primitive formula bounds their absolute values by $\int_0^1(|f|+|f_t|)dt$ after reducing to a unit-height rectangle. Its even extension matches that endpoint and the two integrations by parts have cancelling boundary terms. This proves the normal derivative formula. For the tangential formula, pair tests on the two half-planes and use the original weak tangential derivative; cut the paired test off for $t<\varepsilon$. No derivative of this cutoff occurs in the tangential integration, so convergence in $L^p$ gives the formula as $\varepsilon\downarrow0$. The plane result restricted to the closed half-plane now supplies the representative and estimate. [step 2.1, given, construct, algebra]

4.1 Rescale the local disk or half-disk to radius two. Choose a fixed smooth real cutoff $\chi$ equal to one on the radius-one closed disk and supported in the radius-two disk. Multiplication by $\chi$ and extension by zero gives a plane $W^{1,p}$ map in the disk case, or a half-plane $W^{1,p}$ map in the half-disk case. This follows directly from the weak product rule, because the cutoff vanishes in a neighborhood of the circular edge; at the physical straight edge no zero extension is used. Its norm is at most $C(\|f\|_p+\|\nabla f\|_p)$ on the original radius-two domain. Steps 1.1 through 3.1 give the unit-scale supremum and seminorm bound. Scaling back uses $\|f(r\cdot)\|_p=r^{-2/p}\|f\|_p$ and $\|\nabla(f(r\cdot))\|_p=r^{1-2/p}\|\nabla f\|_p$, proving precisely the displayed local estimate. Representatives on overlapping smaller domains agree by their almost-everywhere equality and continuity. [step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Finally let $f\in W^{2,p}$ locally. Apply the local result to $f$ and each weak first derivative to obtain continuous representatives $F,G_s,G_t$ with the asserted Holder bounds on smaller domains. The distributional equalities $\partial_jF=G_j$ imply classical differentiability in the interior: convolution on an interior disk gives smooth functions whose values and first derivatives converge locally uniformly to $F,G_j$, and the fundamental theorem along segments passes to their limits. In a half-disk the resulting first derivatives extend continuously to the straight boundary; the fundamental theorem on interior segments passes to boundary segments by translation into the half-plane and continuity. Thus the representative is $C^1$ up to that boundary, with first derivatives $G_j$ there and their $C^{0,\alpha}$ bounds. This proves the last assertion under exactly Countable Choice. [step 4.1, construct, algebra] ∎

## Remarks

The earlier bibliography named Lawrence C. Evans, Partial Differential Equations, Sobolev inequalities (https://bookstore.ams.org/gsm-19-r/). The cited book full text was not available in this review; no reading of that edition is asserted. The current reference records the actually read alternate context, while the complete local proof above carries the stated claim.
