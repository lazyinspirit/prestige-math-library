---
id: def-gts-ordinary-differential-cohomology-orientation
kind: definition
title: Ordinary differential-cohomology orientation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
axiom_strength: ZF + full AC for comparison with ordinary relative integral cohomology
deps:
  - def-gts-cheegersimons-differential-character
  - thm-gts-exact-sequences-for-ordinary-differential-cohomology
  - def-gts-smooth-deligne-cohomology-model
  - def-gts-smooth-integral-singular-chain-complex
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - thm-stokes-theorem-for-smooth-singular-chains
  - lem-gts-smooth-integral-chains-compute-singular-homology
  - lem-singular-uct-extension-from-cycle-projections
  - def-axiom-of-choice
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  thm-gts-exact-sequences-for-ordinary-differential-cohomology: mathematical-premise
  def-gts-smooth-deligne-cohomology-model: mathematical-premise
  def-gts-smooth-integral-singular-chain-complex: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  lem-gts-smooth-integral-chains-compute-singular-homology: mathematical-premise
  lem-singular-uct-extension-from-cycle-projections: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
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
    - title: M. J. Hopkins and I. M. Singer, Quadratic Functions in Geometry, Topology, and M-Theory
      url: https://arxiv.org/pdf/math/0211216v2
      locator: Section 3.4, differential Thom classes and integration, PDF pp. 28–30.
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.6, orientation and integration, PDF pp. 69–71.
---

## Definition

Let $M,W$ be finite-dimensional Hausdorff second-countable smooth manifolds without boundary, and let $\pi:W\to M$ be a proper smooth submersion with compact closed fibers of constant dimension $n$. Here proper means that inverse images of compact sets are compact, and submersion means that $d\pi_w:T_wW\to T_{\pi(w)}M$ is surjective for every $w$. Its vertical tangent bundle is $T_\pi W:=\ker(d\pi)\to W$; a topological orientation is a continuous choice of orientation of every rank-$n$ fiber $(T_\pi W)_w$.

Choose an integer $N>n$ and a smooth embedding $e:W\hookrightarrow M\times\mathbb R^N$ over $M$. The vertical normal bundle $\nu_e$ is the quotient of the pulled-back vertical tangent $\epsilon^N_W=W\times\mathbb R^N$ by $de(T_\pi W)$; it has rank $\ell=N-n\ge1$. Orient it by $\operatorname{or}(T_\pi W)\wedge\operatorname{or}(\nu_e)=\operatorname{or}(\mathbb R^N)$. The **stable vertical normal bundle** is the equivalence class of these $\nu_e$ under adding a trivial oriented summand $\mathbb R^s$ and replacing $N$ by $N+s$.

For the relative refinement below assume full AC, inherited from the smooth-to-ordinary integral cohomology comparison. Fix the open pair $(X,A)=(\nu_e,\nu_e\setminus W)$. Use finite smooth integral singular chains and cochains $C^j_\infty(X;B)=\operatorname{Hom}_{\mathbb Z}(C_j^\infty(X;\mathbb Z),B)$ for $B=\mathbb Z,\mathbb R$, with differential $\delta f=f\partial$ and negative groups zero. Define the relative cochain and form complexes by
$$C_B^j(X,A)=C^j_\infty(X;B)\oplus C^{j-1}_\infty(A;B),\qquad d_C(c,a)=(\delta c,c|_A-\delta a),$$
$$\Omega^j(X,A)=\Omega^j(X)\oplus\Omega^{j-1}(A),\qquad d_\Omega(\tau,\eta)=(d\tau,\tau|_A-d\eta).$$
Negative form degrees are zero. Integration over each smooth simplex defines a cochain map $\operatorname{Int}:\Omega^\bullet(X,A)\to C_{\mathbb R}^\bullet(X,A)$, componentwise; the chain-map identity is Stokes. Let $\sigma_{\ge\ell}\Omega^\bullet(X,A)$ mean naive truncation of this relative complex: zero below degree $\ell$, unchanged thereafter. Define the **relative differential-cochain model** in this orientation datum by
$$\mathcal K_\ell^j(X,A)=C_{\mathbb Z}^j(X,A)\oplus(\sigma_{\ge\ell}\Omega^\bullet(X,A))^j\oplus C_{\mathbb R}^{j-1}(X,A),$$
$$D(c,\omega,b)=(d_Cc,d_\Omega\omega,-d_Cb+c_{\mathbb R}-\operatorname{Int}(\omega)),\qquad \widehat H^\ell_{\rm rel}(X,A;\mathbb Z):=H^\ell(\mathcal K_\ell(X,A)).$$
Here $c_{\mathbb R}$ is coefficient change. Thus $D^2=0$. A degree-$\ell$ representative has $d_Cc=0$, $d_\Omega\omega=0$ and $d_Cb=c_{\mathbb R}-\operatorname{Int}(\omega)$. Its equivalence relation is addition of $D(a,0,h)=(d_Ca,0,-d_Ch+a_{\mathbb R})$ in degree $\ell$, with $a\in C_{\mathbb Z}^{\ell-1}(X,A)$ and $h\in C_{\mathbb R}^{\ell-2}(X,A)$. Define $I([c,\omega,b])=[c]\in H^\ell(X,A;\mathbb Z)$ through the smooth-to-ordinary comparison, and $R([c,\omega,b])=[\omega]\in H^\ell(\Omega^\bullet(X,A))$. These projections are independent of representatives by the displayed boundary formula. The relative form complex is formed before truncation: in particular, its degree-$\ell$ term retains $\eta\in\Omega^{\ell-1}(A)$. This is not the mapping fibre of restriction of the ordinary degree-$\ell$ Deligne complex, which would truncate away that complementary connection-form datum. No equivalence with that different relative model is asserted.

The oriented integral Thom class $u_{\nu_e}\in H^\ell(\nu_e,\nu_e\setminus W;\mathbb Z)$ restricts on every oriented fibre pair to its positive generator. A **differential Thom cocycle** here is a class $\widehat u=[c,(\tau,\eta),b]\in\widehat H^\ell_{\rm rel}(\nu_e,A;\mathbb Z)$ with $I(\widehat u)=u_{\nu_e}$, $d\tau=0$, $\tau|_A=d\eta$, support of $\tau$ proper over $W$, and $\int_{\nu_{e,w}}\tau=1$ for every $w\in W$. It has the same relative curvature class $R(\widehat u)=[(\tau,\eta)]$ and oriented characteristic class specified above. Comparisons under changes of embedding or stabilization remain additional supplied data; no canonical suspension map is asserted.

A **differential-cohomology orientation** is this topological orientation of $T_\pi W$ together with the chosen embedding $e$ and a differential Thom cocycle $\widehat u$ for its normal bundle as specified above. The stable vertical normal bundle names the stable class, but this datum alone does not identify Thom cocycles for different embeddings or stabilizations; any such comparison is additional supplied data. The definition makes no claim that a cocycle exists for every oriented submersion or that the chosen embedding and cocycle are canonical.

## Definition references

[[def-gts-cheegersimons-differential-character]]

[[thm-gts-exact-sequences-for-ordinary-differential-cohomology]]

[[def-gts-smooth-integral-singular-chain-complex]]

[[def-integral-of-a-form-over-a-smooth-singular-simplex]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

[[lem-gts-smooth-integral-chains-compute-singular-homology]]

[[lem-singular-uct-extension-from-cycle-projections]]

[[def-axiom-of-choice]]

## Remarks

The orientation is chosen data in this interface. This definition does not prove that a differential Thom cocycle exists for every oriented submersion, and the associated chain transfer is separately named in [[def-gts-oriented-submersion-chain-transfer-data]]. Boundary fibers and relative orientations are excluded.


For the comparison used by $I$, the smooth-chain supplier gives homology isomorphisms for $X$ and $A$ under countable choice; full AC implies that assumption. The natural free-complex UCT then gives cohomology isomorphisms for each with either coefficient group. The long exact sequences of the two restriction cones identify their relative cohomology: injectivity and surjectivity follow by lifting a class to the adjacent absolute groups and using their isomorphisms. This specifies the comparison on the open pair, without assuming that $A$ is closed.

The normal-line endpoint is admitted. Take $X=\mathbb R$, $A=\mathbb R\setminus\{0\}$, a smooth compactly supported $f$ with $\int_{\mathbb R}f\,dx=1$, and $F(x)=\int_{-\infty}^x f(t)\,dt$. Put $\chi=0$ on the negative component of $A$ and $\chi=1$ on its positive component. Then $\tau=f\,dx$, $\eta=F|_A-\chi$, $c=(0,-\chi)\in C_{\mathbb Z}^1(X,A)$ and $b=-F\in C_{\mathbb R}^0(X,A)$ satisfy $d_Cb=c_{\mathbb R}-\operatorname{Int}(\tau,\eta)$ by the fundamental theorem of calculus on smooth paths. The cocycle $c$ evaluates to $1$ on a positively oriented interval crossing zero, with its boundary cancelled by the complementary relative chain, so its class is the positive Thom generator. This is an explicit example in the defined relative model, not a general Thom-existence proof. Hopkins–Singer §§2.3–2.4 and 3.2–3.4 motivate the differential-cochain and Thom data; the relative cone and sign convention above are specified locally rather than attributed to their ordinary compact-support model.
