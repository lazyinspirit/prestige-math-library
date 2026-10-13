---
id: cor-cm-hamiltonian-flow-preserves-phase-volume
kind: corollary
title: "A Hamiltonian local flow on a phase domain preserves Lebesgue measure on its flow domain"
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-phase-domain-and-standard-symplectic-two-form, lem-cm-standard-symplectic-form-is-closed-and-nondegenerate, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity, cor-cm-flow-domain-open-and-flow-is-c1, def-cm-local-flow-of-an-autonomous-system, lem-cm-local-flow-composition-law, cor-c-one-change-of-variables-for-l-one-functions, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-borel-sigma-algebra, def-integrable-real-and-complex-functions-and-their-integrals, thm-continuous-preimages-of-borel-sets-are-borel, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, def-ck-euclidean-maps-and-diffeomorphisms, def-metric-topology, def-countable-choice, thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-measure-of-a-box-of-every-kind, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral]
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
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
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

For a $C^2$ time-dependent Hamiltonian $\mathcal H:T\times U\to\mathbb R$ and the evolution $E$ of [[prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity]], fix $t_0,t\in T$. Its initial-state domain $D_{t,t_0}=\{z:E(t,t_0,z)\text{ is defined}\}$ is open. For every bounded Borel $A\subseteq D_{t,t_0}$ with $\overline A\subseteq D_{t,t_0}$,
$$\lambda_{2n}(E(t,t_0,A))=\lambda_{2n}(A).$$
No completeness or time independence is needed.

## Facts & Assumptions

**Given:** The phase domain $U$, $H\in C^2(U)$, the local flow $\Phi$ of $X_H$, a time $t\in\mathbb R$, the open set $D_t$ and a bounded Borel set $A$ with $\overline A\subseteq D_t$.

[F1] Flow regularity and time maps as diffeomorphisms ([[cor-cm-flow-domain-open-and-flow-is-c1]], [[lem-cm-local-flow-composition-law]], [[def-cm-local-flow-of-an-autonomous-system]]): the flow domain $\Omega$ is open in $\mathbb R\times U$ and $\Phi$ is $C^1$ with $\partial_t\Phi=F(\Phi)$ for $F=X_H$; the partial flow satisfies $\Phi(0,a)=a$, $\Phi(s+t,a)=\Phi(t,\Phi(s,a))$ and $\Phi(-t,\Phi(t,a))=a$ wherever the displayed points lie in $\Omega$, so for each $t$ the time-$t$ map $\Phi_t:D_t\to\Phi_t(D_t)$ is a bijection with inverse $\Phi_{-t}$, of class $C^1$ in both directions: a $C^1$ diffeomorphism onto its image.

[F2] Unit Jacobian determinant ([[prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity]]): for $z\in D_t$, $\det D\Phi_t(z)=1$.

[F3] Change of variables for $L^1$ functions under a $C^1$ diffeomorphism ([[cor-c-one-change-of-variables-for-l-one-functions]]): for open $V,W\subseteq\mathbb R^m$ and a $C^1$ diffeomorphism $T:V\to W$, $\int_W f\,d\lambda_m=\int_V(f\circ T)|\det DT|\,d\lambda_m$ for $f\in L^1(W)$; the Lebesgue measure and $\sigma$-algebra are those of [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], and Borel sets are those of [[def-borel-sigma-algebra]].

[F4] Borel and integrability bookkeeping ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[def-borel-sigma-algebra]], [[thm-borel-sets-are-lebesgue-measurable]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[def-integrable-real-and-complex-functions-and-their-integrals]]): the continuous inverse gives $\Phi_t(A)=(\Phi_{-t})^{-1}(A)$ Borel relative to the open image domain, hence Borel in $\mathbb R^{2n}$. Under the assumed Countable Choice, every Borel subset of $\mathbb R^{2n}$ is Lebesgue measurable. Boundedness and $\overline A\subseteq D_t$ make $\overline A$ compact; its continuous image $\Phi_t(\overline A)$ is compact and bounded. Thus $A$ and $\Phi_t(A)$ each lie in a finite closed box $[-R,R]^{2n}$, whose measure is $(2R)^{2n}<\infty$. Monotonicity of Lebesgue outer measure, restricted to measurable sets, bounds their measures by this value. For either measurable set $E$, its indicator is simple and $\int|\mathbf1_E|\,d\lambda_{2n}=\lambda_{2n}(E)<\infty$, by the simple-integral definition and its agreement with the nonnegative integral. Consequently both indicators are in $L^1$.

## Proof

**Proof technique:** direct; write the measures as integrals of indicator functions and apply the change-of-variables theorem with unit Jacobian.

1.1 By [F1] the map $\Phi_t:D_t\to\Phi_t(D_t)$ is a $C^1$ diffeomorphism between open subsets of $\mathbb R^{2n}$, and by [F4] the set $\Phi_t(A)$ is a bounded Borel set whose indicator is integrable; moreover $|\det D\Phi_t|=1$ on $D_t$ by [F2]. [F1, F2, F4]

2.1 Apply [F3] with $T=\Phi_t$, $V=D_t$ and $f=\mathbf 1_{\Phi_t(A)}\in L^1$: since $f\circ T=\mathbf 1_A$ and $|\det DT|=1$, the identity $\int f\,d\lambda_{2n}=\int(f\circ T)|\det DT|\,d\lambda_{2n}$ reads $\lambda_{2n}(\Phi_t(A))=\int\mathbf 1_A\,d\lambda_{2n}=\lambda_{2n}(A)$, which is the claim. [F3, step 1.1, algebra]

3.1 For the time-dependent case the preceding proposition gives the open domain $D_{t,t_0}$, the $C^1$ inverse $E(t_0,t,\cdot)$, and unit determinant for $E(t,t_0,\cdot)$. Thus its image of a Borel $A$ is Borel by the continuous inverse, and the compact closure of $A$ has compact image, so the image indicator is integrable by the same argument as [F4]. Apply [F3] to this fixed-endpoint diffeomorphism and the image indicator as in step 2.1; its pullback is $\mathbf1_A$ and its Jacobian has absolute value $1$. This proves the stated nonautonomous equality as well as the original autonomous one. [F2, F3, F4, step 2.1] ∎

## Remarks

- The published [[thm-liouville-volume-preservation]] states the same conclusion for the Liouville form $\omega^n/n!$ on a symplectic manifold; the present corollary is the chart-level Lebesgue form with an explicit choice-free determinant computation apart from the change-of-variables theorem it cites.
- The same equality holds for every Lebesgue-measurable $A\subseteq D_t$, with infinite measures permitted. To justify this extension, let $T=\Phi_t:D_t\to W$ and use the proof of [[cor-c-one-change-of-variables-for-l-one-functions]], steps 4.1-5.1: a $C^1$ diffeomorphism has measurable preimages of Lebesgue-measurable sets, and for any such $E\subseteq W$ it gives $\lambda_{2n}(E)=\int_{D_t}\mathbf 1_E(T(z))|\det DT(z)|\,dz$, without a finiteness restriction. Apply the preimage measurability assertion first to $T^{-1}:W\to D_t$ and $A$; thus $E=T(A)$ is measurable. Apply the displayed identity to this $E$ and use $|\det DT|=1$ to obtain $\lambda_{2n}(T(A))=\int_{D_t}\mathbf 1_A=\lambda_{2n}(A)$. The same argument applies to each fixed-endpoint evolution. Countable Choice is retained throughout; exhaustion by Borel sets alone does not establish this completion step.
