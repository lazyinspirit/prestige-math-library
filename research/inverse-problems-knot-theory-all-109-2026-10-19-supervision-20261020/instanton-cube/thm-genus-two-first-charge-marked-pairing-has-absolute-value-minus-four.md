---
id: thm-genus-two-first-charge-marked-pairing-has-absolute-value-minus-four
kind: theorem
title: The first-charge genus-two marked pairing has absolute value minus four
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-lower-chamber-one-charge-bundles-are-elementary-modifications
  - lem-lower-chamber-ruling-incidence-fixes-the-jumping-fibre
  - thm-lower-chamber-elementary-modifications-have-asd-metrics
  - lem-genus-two-next-marked-count-has-an-obstructed-wall-jump
  - lem-odd-genus-two-flat-moduli-have-surface-cube-integral-one-half
  - lem-genus-two-product-relations-from-ordinary-cap-counts
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Indranil Biswas, Tomas Gomez and Vicente Munoz, Torelli theorem for the moduli space of framed bundles, Section1 and the framed stability construction
      url: https://arxiv.org/abs/0808.1996
    - title: Carlos Lozano and Marcos Marino, Donaldson invariants of product ruled surfaces and two-dimensional gauge theories, equation3.22 for comparison only
      url: https://arxiv.org/abs/hep-th/9907165
---

## Statement

Assume full AC and the ordinary orientation, incidence and pointwise ASD realization interfaces below, including the explicit weak-projection analytic input of that realization. For $S=C\times\mathbb{CP}^1$, $g(C)=2$, determinant $B$, $c_2=1$, and product polarization $H_\rho=\rho\Sigma+B$, the absolute lower-chamber mixed count is
$$D_{0<\rho<2}^{B}(\Sigma^6B)=-\frac72.$$
Consequently, using the independently constructed wall jump at two, the long-neck marked cap coefficient is
$$N_{33}'(0)=D_{\rho>2}^{B}(\Sigma^6B)=-4.$$
The second formula refers to the chamber above that wall and contains no other wall for this charge. This evaluates a genuine first marked coefficient, not an all-orders series or a higher-genus recurrence. The comparison with the physical generating function is not used to establish the number.

## Facts & Assumptions

**Given:** Rational coefficients, the chosen signed degree-four quotient conventions for the genus-two cap pairing, and the corresponding closed determinant orientation. The charge in this theorem is the ordinary closed determinant-$B$ charge one sector.

[F1] The exhaustive elementary-modification classification and the identity $\mu(B_q)=[x=q]$ are [[lem-lower-chamber-one-charge-bundles-are-elementary-modifications]] and [[lem-lower-chamber-ruling-incidence-fixes-the-jumping-fibre]].

[F2] Actual pointwise ASD existence and uniqueness for these smooth extensions is [[thm-lower-chamber-elementary-modifications-have-asd-metrics]], with its explicitly stated rank-one weak-projection regularity input. The present theorem does not silently discharge or independently accept that analytic input.

[F3] On the smooth odd genus-two curve moduli $M$, let $m=\mu(C)$ and $p=\mu(\mathrm{pt})$ as classical universal classes. Their normalizations are $\int_M m^3=1/2$ and $p=m^2$. The first is the actual zero-energy count in [[lem-odd-genus-two-flat-moduli-have-surface-cube-integral-one-half]]; the second follows from the supplied ordinary relation by the zero-energy pairing argument in step 4.1. The ordinary relation is [[lem-genus-two-product-relations-from-ordinary-cap-counts]]. Ordinary determinant orientation for $w=B$ is minus complex orientation. The wall jump is minus one half in [[lem-genus-two-next-marked-count-has-an-obstructed-wall-jump]].

## Proof

1.1 **A proper smooth framed space retains the semistable locus.** Fix the jumping point $x=q$ by [F1], and put $L_0=N(-x)$. Use projective framed pairs $(V,\varphi:V_x\to\mathbb C^2)$, $\det V=L_0$, with a rational $0<\tau<1$. Their stability condition for every line $A\subset V$ is
$$\deg A-\tau\epsilon(A,\varphi)<-\tau/2,\qquad\epsilon=1\text{ if }\varphi|_{A_x}\ne0,\quad\epsilon=0\text{ otherwise}.$$
It says exactly that $V$ is semistable and no degree-zero line lies in the kernel of its frame. All semistable pairs are stable because neither $\tau/2$ nor $-\tau/2$ is integral. To obtain their projective parameter space, take a large twist for the bounded semistable rank-two curve bundles, the corresponding Quot space, and its projective framing Hom bundle. Linearize by the determinant polarization plus a sufficiently small positive framing weight realizing $\tau$. The one-parameter-subgroup weight for a line is precisely the displayed inequality; saturation increases that weight, so these are all tests. Stable equals semistable, and the projective GIT quotient $F$ is proper. Its deformation complex is $\operatorname{End}_0V\to\operatorname{Hom}(V_x,\mathbb C^2)$, with the projective frame scalar removed. Its second hypercohomology vanishes: the curve has no $H^2$, and the target is supported at a point and has no $H^1$. Stability removes noncentral infinitesimal automorphisms. Thus $F$ is smooth of complex dimension six. This construction and dimension argument do not require genus greater than two; that restriction in the source is used for its later Torelli theorem. [F1, given, construct, algebra]

2.1 **This compactification computes the actual lower-chamber cutdown.** The open locus where $\varphi$ is invertible is the framed modification groupoid of [F1], using the adjugate to convert an outgoing frame to the incoming extension matrix. Its determinant-normalized surface class is
$$a=\kappa(V)+h,$$
where $h$ is the projective frame line class. A rank-one frame gives a torsion-free elementary modification with one singular point $(x,z)$; its double dual is pulled from a stable odd degree-one curve bundle. Indeed the kernel $W$ of its one-dimensional quotient has degree minus one and is stable exactly by the framed inequality, and the double dual is $p^*(W(x))$. The local relation column has two dependent linear forms and the transverse coordinate; its Koszul resolution shows singular quotient length one. Thus this boundary maps to the ordinary ideal locus $M\times\mathbb{CP}^1$, with its exceptional projective line retained by $F$. Conversely a length-one ideal sheaf in a flat odd pullback reconstructs precisely this rank-one framed datum. This identifies the proper framed space with the required torsion-free resolution at this charge. On its locally free open locus [F2] supplies the actual ASD connection. Uhlenbeck convergence and the length-one local resolution identify its boundary with one ordinary bubble. Choose the six $\Sigma$ incidences at distinct ruling coordinates. A bubble can absorb at most one of them; at least five then restrict to the six-real-dimensional flat moduli, an empty generic cut. The same dimension deficit excludes it in the incidence homotopy. Hence the actual zero-dimensional ASD cutdown equals the complex intersection $\int_F a^6$, with the determinant orientation sign in [F3]. [F1, F2, F3, step 1.1, construct, algebra]

3.1 **The framing action has exactly three fixed components.** Let the target torus have weights zero and $\lambda$ on $\mathbb C^2$. A fixed rank-one frame has image one of the two coordinate lines. Its one-framed pair has exact sequence $0\to W\to V\to\mathbb C_x\to0$, with $W$ stable of degree minus one. Its nonzero extension is parametrized by $P(W_x)\to M$, a projective line bundle over the odd moduli. Denote the two components by $A_0,A_1$. A fixed rank-two frame lifts the torus action to $V$, which therefore splits into its two weight lines. Thus the remaining component is the ordered Jacobian
$$J=\{V=M_0\oplus L_0M_0^{-1},\ \varphi\text{ diagonal and invertible}\},\qquad M_0\in\operatorname{Pic}^0(C).$$
There is no Weyl quotient: the two target lines are labelled by their different torus weights. At a square-root point the frame still kills the extra automorphisms. A rank-one frame on a nonsplit $V$ cannot have a different moving weight decomposition, and the preceding list therefore exhausts the fixed locus. [step 1.1, step 2.1, construct, algebra]

4.1 **Compute the universal data on the two odd components.** First justify the classical degree-four normalization. The actual trace Morse function has just four even critical points, and the nonzero symplectic cube forces one nonzero class in each of degrees zero, two, four and six. Thus the classical fourth cohomology is one-dimensional. The ordinary cap relation gives $\tau(pm)=\tau(m^3)-2\tau(m)=-1/2$. This closed count has total codimension six and is therefore entirely the zero-energy flat family; the determinant comparison gives $\int_M pm=1/2=\int_M m^3$. Poincare duality then gives the actual classical relation $p=m^2$. Now put $r=c_1(O_{P(W_x)}(1))$, rationally normalizing $\det W_x$. By [F3],
$$r^2=-m^2,\qquad\int_{P(W_x)}m^3r=\frac12.$$
The universal exact sequence $0\to W\otimes O(1)\to V\to\mathbb C_x\to0$ gives $\kappa(V)=m+r$. After determinant normalization its quotient line is $O(-1)$, so $h=-r$. Thus $a=m$ on $A_0$ and $a=m-\lambda$ on $A_1$. The normal bundle is the deformation into the other target coordinate, $V_x^*\otimes O(-1)$ with respective weights $\lambda,-\lambda$. Its ordinary Chern classes are $c_1=-2r,c_2=0$: restriction of the universal elementary modification gives normalized $c_2(V_x)=-r^2=m^2$. The two Euler factors are therefore $\lambda^2-2r\lambda$ and $\lambda^2+2r\lambda$. These are normal bundles in the actual smooth framed moduli, not assumed Floer matrix entries. [F3, step 1.1, step 3.1, algebra]

5.1 **The two odd-component contributions are zero and minus four.** Equivariant integration localizes the actual top intersection to its fixed normal Thom classes. On $A_0$ its numerator $m^6$ vanishes. On $A_1$ the degree-four base part of
$$\frac{(m-\lambda)^6}{\lambda^2+2r\lambda}$$
is the coefficient obtained from $(1-m/\lambda)^6(1+2r/\lambda)^{-1}$. Only the $m^3r$ and $mr^3$ terms survive fibre integration. Their coefficients are $40$ and $48$, respectively, so using $r^3=-m^2r$ gives $(40-48)m^3r$. Its integral is $-4$. This use of localization follows from the ordinary equivariant Thom identity on the smooth projective variety $F$; the geometric compactification and ASD cutdown identification were supplied before the integration. [step 2.1, step 4.1, algebra]

6.1 **The Jacobian normal includes the changing curve automorphisms.** On $J$, choose the normalized Poincare class $\eta$ with $\int_C\eta^2=-2\theta$, $\int_J\theta^2=2$. The two summands of $V$ have weights $-\lambda/2,+\lambda/2$ in determinant-normalized coordinates, so $h=-\lambda/2$ and $\kappa(V)=2\theta$. The moving frame terms have weights $\lambda,-\lambda$. The moving deformation terms are the two complexes $-R\Gamma(L_0M_0^{-2})$ and $-R\Gamma(L_0^{-1}M_0^2)$ with those weights. Each has rank one and Chern character $1+4\theta$. Thus each complete normal weight has rank two, with Euler factor $\lambda^2\exp(4\theta/\lambda)$ or $\lambda^2\exp(-4\theta/\lambda)$. Their product is exactly $\lambda^4$. The complexes are retained at the square-root points, where their kernels change; replacing them by generic tangent dimensions would not justify this factor. Since $F$ is smooth and $J$ is its smooth fixed locus, this index description computes its actual normal bundle. [step 1.1, step 3.1, algebra]

7.1 **Evaluate the absolute value before using the wall jump.** The Jacobian contribution is
$$\int_J\frac{(2\theta-\lambda/2)^6}{\lambda^4}=\frac{15}{4}\int_J\theta^2=\frac{15}{2}.$$
Together with step 5.1 the entire complex intersection is $0-4+15/2=7/2$. Applying [F3]'s determinant orientation gives the actual lower-chamber count $-7/2$. No generating-function or simple-type hypothesis entered this fixed-locus calculation. [F3, step 2.1, step 5.1, step 6.1, algebra]

8.1 **The marked coefficient is an absolute chamber value.** The ordinary charge-one reducible classification has only the wall at $\rho=2$. Its supplied oriented jump is minus one half. Therefore the chamber above it has count $-7/2-1/2=-4$. Marked cap gluing identifies this with $N_{33}'(0)$, since six surface factors and one transverse ruling factor have real codimension fourteen and only determinant $B$ has the required index at this degree. This completes this coefficient. Further marked coefficients and any all-genus recurrence still require their own geometric calculations; this theorem does not infer them by multiplying the ordinary $-32$ normalization. [F1, F3, step 7.1, algebra]
