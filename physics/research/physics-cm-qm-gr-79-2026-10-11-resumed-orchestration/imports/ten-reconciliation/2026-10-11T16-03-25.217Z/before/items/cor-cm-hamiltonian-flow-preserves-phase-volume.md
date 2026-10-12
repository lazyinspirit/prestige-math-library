---
id: cor-cm-hamiltonian-flow-preserves-phase-volume
kind: corollary
title: "A Hamiltonian local flow on a phase domain preserves Lebesgue measure on its flow domain"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-phase-domain-and-standard-symplectic-two-form, lem-cm-standard-symplectic-form-is-closed-and-nondegenerate, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity, cor-cm-flow-domain-open-and-flow-is-c1, def-cm-local-flow-of-an-autonomous-system, lem-cm-local-flow-composition-law, cor-c-one-change-of-variables-for-l-one-functions, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-borel-sigma-algebra, def-integrable-real-and-complex-functions-and-their-integrals, thm-continuous-preimages-of-borel-sets-are-borel, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, def-ck-euclidean-maps-and-diffeomorphisms, def-metric-topology, def-countable-choice]
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  lem-cm-standard-symplectic-form-is-closed-and-nondegenerate: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity: mathematical-premise
  cor-cm-flow-domain-open-and-flow-is-c1: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  lem-cm-local-flow-composition-law: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-metric-topology: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.2 (Liouville's theorem: the flow of Hamilton's equations preserves phase-space volume), printed pages 88-92"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry, revised January 2006, canonical symplectomorphisms preserve the symplectic volume form omega^n / n!"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice where the cited change-of-variables theorem requires it
([[def-countable-choice]], [[cor-c-one-change-of-variables-for-l-one-functions]]). Let $n\ge1$, let
$U$ be a phase domain ([[def-cm-phase-domain-and-standard-symplectic-two-form]]), let
$H\in C^2(U)$, and let $\Phi$ be the local flow of $X_H=J\nabla H$
([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]). Let $t\in\mathbb R$, let
$D_t:=\{z\in U:(t,z)\text{ lies in the flow domain}\}$ be the open domain of $\Phi_t$
([[cor-cm-flow-domain-open-and-flow-is-c1]]), and let $A\subseteq D_t$ be a bounded Borel set with
$\overline A\subseteq D_t$. Then $A$ and $\Phi_t(A)$ are Lebesgue measurable with

$$\lambda_{2n}\bigl(\Phi_t(A)\bigr)=\lambda_{2n}(A).$$

## Facts & Assumptions

**Given:** The phase domain $U$, $H\in C^2(U)$, the local flow $\Phi$ of $X_H$, a time $t\in\mathbb R$, the open set $D_t$ and a bounded Borel set $A$ with $\overline A\subseteq D_t$.

[F1] Flow regularity and time maps as diffeomorphisms ([[cor-cm-flow-domain-open-and-flow-is-c1]], [[lem-cm-local-flow-composition-law]], [[def-cm-local-flow-of-an-autonomous-system]]): the flow domain $\Omega$ is open in $\mathbb R\times U$ and $\Phi$ is $C^1$ with $\partial_t\Phi=F(\Phi)$ for $F=X_H$; the partial flow satisfies $\Phi(0,a)=a$, $\Phi(s+t,a)=\Phi(t,\Phi(s,a))$ and $\Phi(-t,\Phi(t,a))=a$ wherever the displayed points lie in $\Omega$, so for each $t$ the time-$t$ map $\Phi_t:D_t\to\Phi_t(D_t)$ is a bijection with inverse $\Phi_{-t}$, of class $C^1$ in both directions: a $C^1$ diffeomorphism onto its image.

[F2] Unit Jacobian determinant ([[prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity]]): for $z\in D_t$, $\det D\Phi_t(z)=1$.

[F3] Change of variables for $L^1$ functions under a $C^1$ diffeomorphism ([[cor-c-one-change-of-variables-for-l-one-functions]]): for open $V,W\subseteq\mathbb R^m$ and a $C^1$ diffeomorphism $T:V\to W$, $\int_W f\,d\lambda_m=\int_V(f\circ T)|\det DT|\,d\lambda_m$ for $f\in L^1(W)$; the Lebesgue measure and $\sigma$-algebra are those of [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], and Borel sets are those of [[def-borel-sigma-algebra]].

[F4] Borel and integrability bookkeeping ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[def-borel-sigma-algebra]], [[def-integrable-real-and-complex-functions-and-their-integrals]]): for Borel $A\subseteq D_t$ the image $\Phi_t(A)=(\Phi_{-t})^{-1}(A)$ is Borel, because $\Phi_{-t}$ is continuous on the image of $\Phi_t$; if in addition $A$ is bounded, then $\overline A$ is compact with $\overline A\subseteq D_t$, so $\Phi_t(\overline A)$ is compact, hence bounded and closed, and the indicator of the bounded Borel set $\Phi_t(A)\subseteq\Phi_t(\overline A)$ is bounded and compactly supported, hence in $L^1(\mathbb R^{2n})$.

## Proof

**Proof technique:** direct; write the measures as integrals of indicator functions and apply the change-of-variables theorem with unit Jacobian.

1.1 By [F1] the map $\Phi_t:D_t\to\Phi_t(D_t)$ is a $C^1$ diffeomorphism between open subsets of $\mathbb R^{2n}$, and by [F4] the set $\Phi_t(A)$ is a bounded Borel set whose indicator is integrable; moreover $|\det D\Phi_t|=1$ on $D_t$ by [F2]. [F1, F2, F4]

2.1 Apply [F3] with $T=\Phi_t$, $V=D_t$ and $f=\mathbf 1_{\Phi_t(A)}\in L^1$: since $f\circ T=\mathbf 1_A$ and $|\det DT|=1$, the identity $\int f\,d\lambda_{2n}=\int(f\circ T)|\det DT|\,d\lambda_{2n}$ reads $\lambda_{2n}(\Phi_t(A))=\int\mathbf 1_A\,d\lambda_{2n}=\lambda_{2n}(A)$, which is the claim. [F3, step 1.1, algebra] ∎

## Remarks

- The published [[thm-liouville-volume-preservation]] states the same conclusion for the Liouville form $\omega^n/n!$ on a symplectic manifold; the present corollary is the chart-level Lebesgue form with an explicit choice-free determinant computation apart from the change-of-variables theorem it cites.
- The boundedness and closure hypotheses on $A$ are what make the indicator integrable on the chosen domain; for arbitrary measurable $A\subseteq D_t$ the identity follows by exhausting with bounded Borel sets, and no statement about non-measurable sets is made.
