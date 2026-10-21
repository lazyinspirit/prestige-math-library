---
id: lem-interior-regularity-of-strip-linearization-cokernels
kind: lemma
title: "Actual strip cokernels are smooth inside the strip and detect universal surjectivity"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-separable-hilbert-smooth-almost-complex-strip-variations, lem-higher-sobolev-strip-map-charts-and-cauchy-riemann-section, lem-variable-zero-order-strip-cauchy-riemann-fredholm, lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Sections 3.2–3.4 adjoint-based universal regularity setup; local weak elliptic proof below"
---

## Statement

Assume Countable Choice. Let $u$ be an actual smooth finite-energy strip in the compact exact-generator geometry of the actual higher Sobolev strip-chart construction, and let $P:H^1\cap\mathcal X^1\to L^2$ be its geometric Cauchy–Riemann linearization. Use any fixed smooth positive definite target metric and source measure $ds\,dt$ to define the real $L^2$ pairing. Every $\eta\in L^2$ which annihilates $\operatorname{Ran}P$ has a smooth representative on $\mathbb R\times(0,1)$. In each smooth local frame that representative satisfies the actual formal adjoint equation. For compact subsets $K\subset\operatorname{int}U$ in a coordinate patch inside the strip and every integer $q\ge0$,
$$\|\eta\|_{H^q(K)}\le C_{K,U,q}\|\eta\|_{L^2(U)},$$
where the constant depends on the indicated compact containment and finitely many local smooth coefficient and metric bounds. No boundary regularity or adjoint boundary formula is asserted.

More generally, let $K_0:H\to H^2(u^*TX)$ be any bounded linear parameter derivative from a real Hilbert space, including the actual derivative $b\mapsto(d_aJ[b])_t(u)u_t$ of the smooth Hilbert family. The operators
$$A_0(\xi,b)=P\xi+K_0b:\ (H^1\cap\mathcal X^1)\oplus H\longrightarrow L^2,$$
$$A_2(\xi,b)=P\xi+K_0b:\ (H^3\cap\mathcal X^1)\oplus H\longrightarrow H^2$$
both have closed range, and $A_0$ is onto if and only if $A_2$ is onto. They are onto exactly when there is no nonzero $L^2$ section $\eta$ such that
$$\langle\eta,P\xi\rangle_{L^2}=0\quad\hbox{for every }\xi\in H^1\cap\mathcal X^1,\qquad \langle\eta,K_0b\rangle_{L^2}=0\quad\hbox{for every }b\in H.$$
Each such obstruction is smooth on the interior by the first assertion. Thus actual interior unique continuation can be applied to an $L^2$ obstruction after this lemma; an $H^2$-dual distribution need not be mistaken for an $L^2$ function. The lemma does not prove unique continuation or rule out the displayed obstructions.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual smooth strip, geometric operator, metrics, parameter derivative, and exact higher boundary domains in the statement. For compact containment one may use finitely many smaller coordinate patches and add their estimates.

[F1] [[lem-higher-sobolev-strip-map-charts-and-cauchy-riemann-section]] supplies the actual smooth geometric expression $P=\partial_s+J_t(u)\partial_t+A$ in a smooth local frame, actual domains, and the local $H^2\subset C^0$ estimate underlying its Sobolev charts. [[lem-separable-hilbert-smooth-almost-complex-strip-variations]] supplies the actual parameter derivative and its $H\to H^2$ bound.

[F2] [[lem-variable-zero-order-strip-cauchy-riemann-fredholm]] supplies Fredholmness, closed ranges and Countable-Choice Hilbert orthogonal projections for the geometric operator after its proved frame transformation. [[lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]] supplies exact range intersection and higher regularity, and its proof establishes the bounded-test Hilbert representation criterion for weak $L^2$ derivatives.



## Proof

1.1 First prove the elementary constant-principal weak estimate on the plane. If $w\in L^2(\mathbb R^2;\mathbb C^m)$ has compact support and $D_0w=f\in L^2$ distributionally, convolve with one fixed smooth compactly supported approximate identity to obtain smooth compactly supported $w_\varepsilon$ with $D_0w_\varepsilon=f_\varepsilon$. Such convolution converges in $L^2$: translation is continuous first for rectangular step functions by their symmetric-difference measure, then for all $L^2$ functions by their step-function approximation; the integral of the translation differences is bounded by their supremum over the shrinking convolution support. The same argument treats $f$. For smooth compactly supported maps integration by parts gives $$\|D_0w_\varepsilon\|_2^2=\|(w_\varepsilon)_s\|_2^2+\|(w_\varepsilon)_t\|_2^2.$$ Indeed $\int\langle w_s,iw_t\rangle_{\mathbb R}$ is zero: integration first in $s$ and then in $t$, and skew symmetry of $i$, show it equals its negative. Thus the derivative norms are bounded by $\|f\|_2$, since convolution with a normalized nonnegative kernel is $L^2$ contractive by Cauchy–Schwarz and integration. For each compactly supported smooth real test $\phi$, pass to the limit in $\int w_\varepsilon\partial_j\phi$ to get a bounded functional of $\phi$ in its $L^2$ norm, of bound $\|f\|_2$. The bounded-test Hilbert representation argument in [F2] supplies the weak derivative in $L^2$ without selecting a weakly convergent subsequence. Apply the same bounded-test argument simultaneously to a pair of tests for the two derivatives: Cauchy–Schwarz bounds their combined functional by $\|f\|_2$ times the product $L^2$ test norm. Hilbert representation in that product space therefore gives $w\in H^1$ and $\|\nabla w\|_2\le\|f\|_2$. Repeating this argument for each distributional $\partial^\alpha w$ shows that if $w\in H^q$ and $D_0w\in H^q$, then $w\in H^{q+1}$ with $\|w\|_{H^{q+1}}\le C_q(\|D_0w\|_{H^q}+\|w\|_2)$. Each derivative is compactly supported, so the same argument applies. [F2, construct, algebra]

1.2 A smooth variable complex principal part reduces exactly to this constant one locally. Let $K(z)^2=-I$ and $v_s+K(z)v_t+C(z)v=0$ distributionally, with $v\in L^2_{\rm loc}$ and $K,C$ smooth. At a point choose a constant real basis identifying $K(z_0)$ with standard multiplication $i$. Such a basis is obtained by successively taking a nonzero vector and its $K(z_0)$ image, then passing to the invariant orthogonal complement for the metric $g+g(K(z_0)\cdot,K(z_0)\cdot)$; only finitely many choices occur. In these coordinates put $\Phi(z)=(I-K(z)i)/2$. Then $K\Phi=\Phi i$ and $\Phi(z_0)=I$, so it is invertible on a smaller neighborhood. Writing $v=\Phi h$ gives $$D_0h+B h=0,\qquad B=\Phi^{-1}(\Phi_s+K\Phi_t+C\Phi),$$ with smooth $B$. Multiplication and the product rule for smooth coefficients and distributions justify the same formula for $L^2$ solutions, not only smooth ones. [given, construct, algebra]

1.3 For the range assertions, put $Y_0=L^2$, $Y_2=H^2$, $E_0=H^1\cap\mathcal X^1$, and $E_2=H^3\cap\mathcal X^1$. Let $q_i:Y_i\to Y_i/\operatorname{Ran}P_i$ be the quotient maps for the actual realizations $P_i:E_i\to Y_i$. These ranges are closed of finite codimension by [F2]. Each augmented range is $$\operatorname{Ran}A_i=q_i^{-1}\bigl(\operatorname{im}(q_iK_0)\bigr),$$ because an output has this quotient exactly when its difference from some $K_0b$ is in the fixed-parameter range. The image on the right is a subspace of a finite-dimensional quotient, hence closed. Thus both augmented ranges are closed. If $A_0$ is onto, for $f\in H^2$ choose any $(\xi,b)\in E_0\oplus H$ with $P\xi=f-K_0b$. The right side belongs to $H^2$, so actual higher regularity in [F2] puts $\xi$ in $E_2$, proving $A_2$ onto. Conversely if $A_2$ is onto, the closed $L^2$ range of $A_0$ contains all of $H^2$, which is dense in $L^2$ by smooth compact interior approximation. Hence it is all of $L^2$. No identification of an $H^2$-dual annihilator with a function was used. [F1, F2, construct, algebra]

2.1 For nested relatively compact neighborhoods choose a cutoff $\chi$ supported in the larger one and equal to one in the smaller one. The section $w=\chi h$, extended by zero to the plane, satisfies $D_0w=-\chi Bh+(D_0\chi)h\in L^2$. Step 1.1 puts it in $H^1$ and bounds its norm by a constant times the $L^2$ norm of $h$ on the larger neighborhood. If $h\in H^q$ locally, the same cutoff equation has right side in $H^q$, with norm bounded by finitely many derivatives of $B,\chi$ times $\|h\|_{H^q}$ on a slightly larger compact set. Apply the last assertion of step 1.1 to get the next derivative, using a fresh nested cutoff. Induction gives every local $H^q$ estimate by the original $L^2$ norm. Multiplication by $\Phi,\Phi^{-1}$ preserves these estimates with constants depending on their finite derivative bounds. Finally for any derivative order $j$, a compactly supported localization of $\partial^j h$ belongs to $H^2$, so the actual local $H^2\subset C^0$ estimate in [F1] gives a continuous representative. These representatives are compatible weak derivatives; their first derivative identities imply ordinary differentiability by mollification and the coordinate fundamental theorem. Induction gives a smooth representative. A finite covering of compact subsets combines the estimates. [F1, step 1.1, step 1.2, construct, algebra]

3.1 Apply this weak regularity to an actual $L^2$ annihilator $\eta$. In a smooth local real frame the metric is a smooth positive definite matrix $G$, and [F1] writes the operator as $P\xi=\xi_s+J\xi_t+A\xi$. Compactly supported smooth interior tests are in the actual $H^1$ domain, regardless of its boundary conditions. Put $v=G\eta$ in this frame. The annihilation identity for those tests gives $$-v_s-\partial_t(J^{\mathsf T}v)+A^{\mathsf T}v=0$$ distributionally, or $$v_s+J^{\mathsf T}v_t+(\partial_tJ^{\mathsf T}-A^{\mathsf T})v=0.$$ The transpose $J^{\mathsf T}$ squares to $-I$; its coefficients and the displayed zeroth-order term are smooth. Step 2.1 therefore proves smoothness of $v$ and then of $\eta=G^{-1}v$, with the asserted local estimates and exactly this actual formal adjoint equation. A different local trivialization has smooth invertible coefficients and gives the same smooth representative on overlaps, because both agree almost everywhere. No trace or boundary formula for $\eta$ has entered. [F1, step 2.1, construct, algebra]

4.1 A closed subspace of the real Hilbert $L^2$ space equals all of $L^2$ precisely when its orthogonal complement is zero, by the Countable-Choice orthogonal projection in [F2]. The orthogonal complement of $\operatorname{Ran}A_0$ is exactly the sections annihilating both $P E_0$ and $K_0H$, since those two subspaces add to that range. Step 3.1 makes every such obstruction smooth in the interior. Combined with step 1.3 this proves the claimed exact obstruction criterion at both Sobolev levels. All weak limits were obtained from bounded tests and Hilbert representation, with only finite coordinate reductions and explicitly prescribed convolutions; no stronger choice axiom or unproved adjoint regularity theorem was imported. Unique continuation, the existence of a free injective point and the final elimination of these actual smooth interior obstructions remain separate statements. [F2, step 3.1, step 1.3, construct, algebra] ∎
