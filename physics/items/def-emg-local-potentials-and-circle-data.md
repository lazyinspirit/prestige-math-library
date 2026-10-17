---
id: def-emg-local-potentials-and-circle-data
kind: definition
title: "Local potentials and smooth circle-bundle connection data"
status: published
origin: pipeline
domain: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-emg-lorentzian-forms
  - lem-emg-lorentz-hodge-calculus
  - def-principal-g-bundle-and-associated-fiber-bundle
  - def-de-rham-cohomology
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
  - lem-emg-positive-square-root-smoothness
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-sine-and-cosine-derivatives
  - cor-differentiable-implies-continuous
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-principal-g-bundle-and-associated-fiber-bundle: mathematical-premise
  def-de-rham-cohomology: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
  lem-emg-positive-square-root-smoothness: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
sources:
  references:
    - title: "Victor Guillemin and Peter Haine, Differential Forms, MIT 18.952 text (2019), sections 2.4 and 2.6"
      url: "https://math.mit.edu/classes/18.952/2019SP/18.952_book_2019.pdf"
      locator: "Section 2.4, exterior-derivative identities, printed pp. 53–57; section 2.6, smooth homotopies and Theorem 2.6.15, printed pp. 61–65."
    - title: "David Tong, Gauge Theory, Cambridge Part III lecture notes (2018), section 1.1.2"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "Section 1.1.2, 'A Patchwork of Gauge Fields,' printed pp. 6–8 (PDF pp. 16–18), north/south local potentials and their transition."
    - title: "Scott Morrison, Connections on Principal Fibre Bundles (2000)"
      url: "https://tqft.net/papers/ConnectionsAndBundles.pdf"
      locator: "Sections 3.1–3.3, 5.1 and 7.1–7.3, printed pp. 3–15 (PDF pp. 3–16), principal-bundle charts, horizontal connections, local connection representatives and curvature."
provenance:
  statement: ai-altered
  proof: not-applicable
---

## Definition

Let $(M,g,N,o)$ be the smooth, Hausdorff, second-countable, boundaryless oriented and time-oriented Lorentzian four-manifold of [[def-emg-lorentzian-forms]]. Its smooth real $k$-forms are sections of $\bigwedge^kT^*M$, written $\Omega^k(M)$, and $d$ is the exterior derivative of [[lem-emg-lorentz-hodge-calculus]]. A smooth two-form $F$ is **closed** when $dF=0$ and **exact** when $F=dA$ for some smooth real one-form $A$ on the whole base.

By [[def-de-rham-cohomology]], $H^2_{\mathrm{dR}}(M)=Z^2(M)/B^2(M)$, where $Z^2(M)$ is the vector space of closed smooth two-forms and $B^2(M)$ is the vector space of exact smooth two-forms. Thus, for closed $F$, the statement $[F]=0$ means exactly that $F=dA$ for a global smooth one-form $A$. This equivalence is the quotient definition; it does not assert that every closed form is exact.

Identify $\mathbb C$ with $\mathbb R^2$ by $z=x+iy$ and set $U(1)=S^1:=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$. Its topology is the subspace topology. Specify its smooth structure by the four charts

$$V_{x,\epsilon}=\{(x,y)\in S^1:\epsilon x>0\},\quad (x,y)\mapsto y,\quad y\mapsto(\epsilon\sqrt{1-y^2},y),$$

and

$$V_{y,\epsilon}=\{(x,y)\in S^1:\epsilon y>0\},\quad (x,y)\mapsto x,\quad x\mapsto(x,\epsilon\sqrt{1-x^2}),$$

for $\epsilon\in\{-1,1\}$, with each coordinate range $(-1,1)$. They cover $S^1$; their transition maps are restrictions of the positive square-root branch and coordinate projections, hence are smooth by [[lem-emg-positive-square-root-smoothness]] and [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]. In these coordinates multiplication is the restriction of $(x,y)(u,v)=(xu-yv,xv+yu)$ and inversion is $(x,y)\mapsto(x,-y)$, so both are smooth; they are also continuous for the stated topology. Thus this is a smooth Lie group and, in particular, a topological group as required by [[def-principal-g-bundle-and-associated-fiber-bundle]].

Let $E:\mathbb R\to U(1)$ be $E(t)=e^{it}=(\cos t,\sin t)$; the Cartesian formula is [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. The trigonometric derivative identities of [[thm-sine-and-cosine-derivatives]], iterated, show that $E$ is smooth in the $C^\infty$ sense of [[def-ck-euclidean-maps-and-diffeomorphisms]]: every derivative of either coordinate is $\pm\sin$ or $\pm\cos$, and these functions are continuous by [[cor-differentiable-implies-continuous]]. Surjectivity is [[thm-sine-and-cosine-parametrize-the-unit-circle]]. If $E(t)\in V_{x,\epsilon}$, the chart coordinate $\sin t$ has derivative $\cos t=x\ne0$; if $E(t)\in V_{y,\epsilon}$, the coordinate $\cos t$ has derivative $-\sin t=-y\ne0$. The smooth inverse-function theorem [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] therefore makes $E$ a diffeomorphism from some open interval about $t$ onto an open circle arc. Every smooth map from an open subset of $M$ to $U(1)$ consequently has, near each point, a smooth real phase lift obtained by composing with such a local inverse.

A **normalized circle-connection datum** on $M$ consists of a supplied countable open cover $(U_i)_{i\in I}$, smooth transition maps $g_{ij}:U_i\cap U_j\to U(1)$, smooth real one-forms $a_i\in\Omega^1(U_i)$, and a fixed constant $\kappa_0>0$. Require $g_{ii}=1$ and $g_{ij}g_{jk}=g_{ik}$ on every triple intersection. Around each point of $U_i\cap U_j$, take any smooth real phase lift $f_{ij}$ with $g_{ij}=e^{if_{ij}}$; require

$$
a_j=a_i+df_{ij}
$$

on every such phase-lift neighborhood. If $f$ and $\widetilde f$ are two lifts on a connected neighborhood, [[thm-kernel-and-fibres-of-complex-exponential]] gives $f-\widetilde f\in2\pi\mathbb Z$ pointwise; continuity makes this difference constant, so $df=d\widetilde f$. Thus the compatibility condition is independent of the chosen lift. The globally defined form $\lambda(g):=-i\,g^{-1}dg$ is real, and [[thm-complex-exponential-is-entire-with-derivative-itself]] together with [[thm-chain-rule-for-total-derivatives]] gives $\lambda(g)=df$ on every phase-lift neighborhood. Hence the equivalent lift-free condition is $a_j=a_i+\lambda(g_{ij})$.

The right principal $U(1)$-bundle convention is as defined in [[def-principal-g-bundle-and-associated-fiber-bundle]]: it has a continuous right action and locally trivial equivariant product charts, with free and transitive action on each fibre. The compatible transition functions are the gluing data for such a bundle, in the convention that a point with fibre coordinate $z_i$ in chart $i$ has coordinate $z_j=g_{ij}^{-1}z_i$ in chart $j$. No global real-valued angle on $U(1)$ is assumed.

The constant $\kappa_0$ is a chosen normalization with units of webers; it is not Planck's constant and is not a unit of electric charge. On a chart whose coordinates have length units, the normalized connection components $a_i$ have units $\mathrm m^{-1}$; the corresponding local potential $A_i:=\kappa_0a_i$ has components $\mathrm{Wb}\,\mathrm m^{-1}$, and its curvature $F_i:=dA_i=\kappa_0\,da_i$ has components $\mathrm{Wb}\,\mathrm m^{-2}$. This definition imposes no flux or charge quantization.

## Remarks

The typed conventions formerly reserved on EMG-MG01 are authored earlier on this page: [[def-emg-finite-real-supremum-domain]], [[def-emg-real-metric-axiom-convention]], [[lem-emg-metric-axioms-imply-nonnegativity]], [[def-emg-explicit-power-regimes]], [[lem-emg-sequence-limit-criterion-with-choice]], [[def-emg-boundaryless-completeness-domain]], and [[def-emg-set-size-and-class-schema]]. They fix the finite-real, topology, power, choice, geometric-domain and set-size interfaces. The finite chart formulas here make no countable selection; the explicit countable-choice hypothesis of the sequence criterion is spent only in that lemma's reverse implication. Authored carriers and local proofs do not themselves assert independent acceptance or repair an unrelated original supplier.
