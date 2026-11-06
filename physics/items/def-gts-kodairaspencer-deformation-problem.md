---
id: def-gts-kodairaspencer-deformation-problem
kind: definition
title: "Kodaira–Spencer deformation problem"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC; AC is inherited only through the algebraic square-zero comparison supplier."
deps:
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-infinitesimal-deformation-functor-over-square-zero-extension
  - lem-gts-kodaira-spencer-forms-form-dgla
  - def-axiom-of-choice
dependency_roles:
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-infinitesimal-deformation-functor-over-square-zero-extension: mathematical-premise
  lem-gts-kodaira-spencer-forms-form-dgla: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§0.2 and §1.1, printed pp. 5–8: compact Kähler context and finite-order analytic deformation statements; the Maurer–Cartan convention is supplied by Manetti and the local proof."
    - title: "Marco Manetti, Lectures on deformations of complex manifolds, arXiv:math/0507286v1"
      url: "https://arxiv.org/pdf/math/0507286v1"
      locator: "§IV.6, Definition IV.35 and the following Maurer–Cartan calculation, printed pp. 61–63 (PDF pp. 67–69): infinitesimal deformation and isomorphism conventions; no flat analytic equivalence is inferred from this definition."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $X$ be a compact complex manifold of complex dimension $n$, with holomorphic tangent bundle $T_X^{1,0}$. A pointed complex-manifold germ $(S,0)$ is a complex manifold with distinguished point $0$, considered up to restriction to neighbourhoods of $0$; maps of such germs are holomorphic maps preserving the distinguished points, identified when they agree on a smaller neighbourhood. For each fixed $(S,0)$, the analytic deformation groupoid of $X$ over $(S,0)$ has representatives $(\pi:\mathcal X\to U,\iota)$, where $U$ represents the base germ, $\mathcal X$ is a complex manifold, $\pi$ is proper (inverse images of compact sets are compact) and a holomorphic submersion (its complex differential is surjective at every point), and $\iota:\pi^{-1}(0)\xrightarrow{\sim}X$ is biholomorphic. A representative may be restricted by replacing $U$ by a smaller neighbourhood and $\mathcal X$ by its inverse image. Arrows are germs of biholomorphisms of these total spaces over the fixed base germ, preserving $\iota$; two representatives of an arrow agree when they coincide after a common restriction. Identity and composition are those of maps after common restriction. There are no arrows between different fixed bases in this groupoid.

Let $A$ be a finite-dimensional commutative local $\mathbb C$-algebra with residue field $\mathbb C$ and nilpotent maximal ideal $\mathfrak m_A$. Define $\operatorname{Specan}A$ to be the one-point locally ringed space with structure ring $A$. The formal deformation groupoid over $A$ means here the finite Artin analytic deformation groupoid: its objects are sheaves $\mathcal O_A$ of local $A$-algebras on the underlying space $X$, with a marking $\iota:\mathcal O_A/\mathfrak m_A\mathcal O_A\xrightarrow{\sim}\mathcal O_X$, such that every stalk of $\mathcal O_A$ is flat as an $A$-module and the following local analytic presentation condition holds. Near each point, $(X,\mathcal O_A)$ is isomorphic over $A$ to $(Z,(A\otimes_{\mathbb C}\mathcal O_U)/\mathcal I)$, where $U\subseteq\mathbb C^N$ is open, $\mathcal I$ is a locally finitely generated ideal sheaf, and $Z$ is the support of this quotient, with its analytic-subspace topology. Flat means that tensoring any injective map of $A$-modules with the stalk remains injective. The marking identifies the reduced-base ringed space (reduction modulo $\mathfrak m_A$, not removal of arbitrary nilpotents) with $X$. Arrows are isomorphisms of these $A$-ringed spaces preserving the marking; in the chosen underlying space they induce the identity on $X$. The structure map to $\operatorname{Specan}A$ is proper since $X$ is compact. This definition is finite-order and asserts no inverse-limit effectivity or convergence. For $A=\mathbb C$ it gives the marked central fibre. Here $A\{z\}$ denotes $A\otimes_{\mathbb C}\mathbb C\{z\}$, so the local presentation agrees with the stalk notation for convergent power series.

The Kodaira–Spencer differential graded Lie algebra is $L_X^q=A^{0,q}(X,T_X^{1,0})$, with differential $\bar\partial$ and the graded Kodaira–Spencer bracket of vector-valued forms. The bracket convention is the one for which a degree-one element $\xi$ obeys the Maurer–Cartan equation
$$\bar\partial\xi+\tfrac12[\xi,\xi]=0,$$
which is the involutivity equation for the graph deformation of $T_X^{0,1}$. The formal Maurer–Cartan action groupoid over $A$ has objects $\xi\in L_X^1\otimes\mathfrak m_A$ satisfying that equation and arrows given by the pushforward action of formal diffeomorphisms generated by $L_X^0\otimes\mathfrak m_A$. Their exponential series are finite because $\mathfrak m_A$ is nilpotent. This item defines the analytic deformation groupoid and the formal Maurer–Cartan action groupoid separately; it does not assert that they are equivalent, or that every formal deformation converges to an analytic family.

## Definition references

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[[def-infinitesimal-deformation-functor-over-square-zero-extension]]

[[lem-gts-kodaira-spencer-forms-form-dgla]]

[[def-axiom-of-choice]]

[Voisin, §§0.2 and 1.1](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

## Facts & Assumptions

**Given:** Full AC; a compact complex manifold $X$; a local Artin $\mathbb C$-algebra $A$ with nilpotent maximal ideal $\mathfrak m_A$.

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]]. It is inherited from the algebraic square-zero comparison supplier, not needed for the finite nilpotent exponential.

[F1] A complex manifold has an integrable complex structure $J$, holomorphic tangent bundle $T_X^{1,0}$ and holomorphic charts with complex-linear transition differentials ([[def-complex-manifolds-and-holomorphic-vector-bundles]]).

[F2] For an algebraic $X$, the scheme deformation groupoid over an Artin base retains a marking of the special fibre and has marking-preserving isomorphisms; this is the exact scheme-side convention of [[def-infinitesimal-deformation-functor-over-square-zero-extension]]. It does not identify all analytic and algebraic deformation groupoids.

[F3] The Dolbeault complex $A^{0,\bullet}(X,T_X^{1,0})$ with its coordinate bracket is a cohomological DGLA; its sign convention and differential/bracket identities are proved in [[lem-gts-kodaira-spencer-forms-form-dgla]].

## Proof

1.1 In a holomorphic chart, write a degree-one element as $\xi=\xi^i_{\bar j}d\bar z^j\otimes\partial_{z^i}$. For the graph vectors $e_{\bar j}=\partial_{\bar z^j}+\xi^i_{\bar j}\partial_{z^i}$, the $\partial_{z^i}$ coefficient of $[e_{\bar j},e_{\bar k}]$ is $$N^i_{\bar j\bar k}=\partial_{\bar j}\xi^i_{\bar k}-\partial_{\bar k}\xi^i_{\bar j}+\xi^a_{\bar j}\partial_a\xi^i_{\bar k}-\xi^a_{\bar k}\partial_a\xi^i_{\bar j}.$$ By [F3], this coefficient is $(\bar\partial\xi+\tfrac12[\xi,\xi])^i_{\bar j\bar k}$ in the stated bracket convention. The bracket $[e_{\bar j},e_{\bar k}]$ has zero $T^{0,1}$ component, so it belongs to the graph exactly when it vanishes; hence the graph distribution is involutive exactly when the Maurer–Cartan expression is zero. The graph is complementary to the fixed central $(1,0)$ subbundle over $A$: every vector $u+w$ with $u\in T_X^{0,1}\otimes A$ and $w\in T_X^{1,0}\otimes A$ decomposes uniquely as $(u+\xi u)+(w-\xi u)$. Its projection onto the fixed central $(0,1)$ subbundle is therefore an isomorphism, and its reduction is the original $(0,1)$ subbundle because $\xi$ has coefficients in $\mathfrak m_A$. This defines the formal $A$-linear graph distribution used in the Maurer–Cartan equation, without requiring a conjugation operation on $A$. [given, F1, F3, algebra]

2.1 A degree-zero element $a\in L_X^0\otimes\mathfrak m_A$ is a derivation of smooth complex-valued functions tensored with $A$, zero modulo $\mathfrak m_A$. Define its formal flow by the pullback $\phi_s^*=e^{sa}$; the series is finite. Pushforward of a vector-field derivation $D$ is $\phi_{s*}D=e^{-sa}De^{sa}$, whose derivative at $s=0$ is $-[a,D]$. Locally $a(\bar z^j)=0$, so the pushed graph vectors retain their $\partial_{\bar z^j}$ coefficients. Their holomorphic coefficients obey $\dot\xi=\bar\partial a-[a,\xi]$: indeed $-[a,\partial_{\bar z^j}]=\partial_{\bar z^j}a$, and the remaining term is $-[a,\xi]$ with the bracket of [F3]. Equivalently the finite action is $\xi\mapsto e^{-\operatorname{ad}a}\xi+\sum_{m\ge0}(-1)^m(\operatorname{ad}a)^m(\bar\partial a)/(m+1)!$. Conjugation preserves brackets, so pushforward preserves involutivity and the Maurer–Cartan condition from step 1.1. The projection of a pushed graph onto the central $(0,1)$ subbundle is invertible since it is the identity modulo the nilpotent ideal. These formal function-algebra automorphisms are closed under composition and inverse, with finite logarithms and Baker–Campbell–Hausdorff series modulo $\mathfrak m_A$. Identity, inverse and associativity of arrows are inherited from those automorphisms. Thus the objects and pushforward arrows form the stated action groupoid, without asserting equivalence with the separately defined analytic deformation groupoid. [A1, F1, F2, F3, given, step 1.1, algebra] ∎

## Remarks

The analytic deformation groupoid, the formal deformation groupoid, and the Maurer–Cartan action groupoid are distinct interfaces in this item. Comparing the latter two requires a local deformation-theory argument not supplied here. The algebraic supplier in [F2] is used only for the scheme-theoretic square-zero convention when $X$ is algebraic; the analytic statement does not claim that every analytic deformation is algebraizable.
