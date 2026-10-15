---
id: thm-tdmath-hamiltonian-measure-and-recurrence
kind: theorem
title: "Hamiltonian volume, recurrence, and ergodic scope"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems","cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form","def-axiom-of-choice","def-ergodic-measure-preserving-system","def-hamiltonian-vector-field-and-hamiltonian-function","def-integrable-real-and-complex-functions-and-their-integrals","def-measure-preserving-transformation-and-system","def-probability-measure","def-symplectic-form-and-symplectic-manifold","lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces","thm-birkhoff-ergodic-theorem","thm-birkhoff-limit-identification-on-finite-measure-spaces","thm-hamiltonian-flows-preserve-the-symplectic-form","thm-integrals-are-invariant-under-measure-preserving-maps","thm-liouville-volume-preservation","thm-poincare-recurrence-for-finite-measure-preserving-systems"]
justified_by: []
dependency_roles: {"cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems":"mathematical-premise","cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form":"mathematical-premise","def-axiom-of-choice":"mathematical-premise","def-ergodic-measure-preserving-system":"mathematical-premise","def-hamiltonian-vector-field-and-hamiltonian-function":"mathematical-premise","def-integrable-real-and-complex-functions-and-their-integrals":"mathematical-premise","def-measure-preserving-transformation-and-system":"mathematical-premise","def-probability-measure":"mathematical-premise","def-symplectic-form-and-symplectic-manifold":"mathematical-premise","thm-birkhoff-ergodic-theorem":"mathematical-premise","thm-integrals-are-invariant-under-measure-preserving-maps":"mathematical-premise","thm-liouville-volume-preservation":"mathematical-premise","thm-poincare-recurrence-for-finite-measure-preserving-systems":"mathematical-premise","thm-birkhoff-limit-identification-on-finite-measure-spaces":"mathematical-premise","lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces":"mathematical-premise","thm-hamiltonian-flows-preserve-the-symplectic-form":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf
      locator: "Complete 39-page lecture-note part retrieved and read; §2.1, pp.14–16, Liouville phase-space volume; §§2.2–2.3, pp.20–35, Boltzmann equation and H-theorem."
    - title: "Paul Eastman, Introduction to Statistical Mechanics, Chapter 8"
      url: https://web.stanford.edu/~peastman/statmech/phasespace.html
      locator: "Complete author-hosted HTML chapter read; §§8.1–8.3, Hamiltonian phase-space flow, Liouville theorem, and equilibration qualifications."
---

## Statement

Assume the Axiom of Choice. Let $(M,\omega)$ be a smooth $2n$-dimensional symplectic manifold and $H\in C^\infty(M,\mathbb R)$, with Hamiltonian field defined by $\iota_{X_H}\omega=dH$. Wherever its local flow $\phi_t$ is defined, it preserves the symplectic form and the volume measure $m$ determined by $\omega^n/n!$. No completeness is asserted. Let $R$ be a measurable region on which a nonzero-time map $T=\phi_\tau$ is defined and is forward invariant, $T(R)\subseteq R$. The restriction $T:R\to R$ preserves $m|_R$ if $T(R)=R$, or more generally if $m(R\setminus T(R))=0$. This latter condition holds automatically when $m(R)<\infty$. Thus for every finite-measure forward-invariant $R$ and every measurable $E\subseteq R$, almost every point of $E$ returns to $E$ infinitely often under forward iteration. Mere forward invariance of an infinite-volume region does not imply relative measure preservation.

If $m(R)=1$ and $T$ is ergodic, then for every $f\in L^1(R,m)$ the averages $N^{-1}\sum_{j=0}^{N-1}f(T^jx)$ converge almost everywhere and in $L^1$ to $\int_Rf\,dm$. Without ergodicity, the limit is the invariant conditional expectation supplied by Birkhoff's theorem, not necessarily the space mean. Finally, fix any real scalar $k_B$. If each stated time map $\phi_t$ is a diffeomorphism of a finite invariant region $R$, a density $p_0\ge0$ with $\int_Rp_0\,dm=1$ and $\int_R|p_0\log p_0|\,dm<\infty$ transports by $p_t=p_0\circ\phi_{-t}$ with conserved fine-grained entropy $-k_B\int_Rp_t\log p_t\,dm$, using $0\log0=0$. Volume preservation alone does not imply ergodicity or a time-average/ensemble identity.

## Facts & Assumptions

**Given:** The symplectic/Hamiltonian definitions, the local flow domain, and each separately stated finite invariant probability system.

[A1] AC is adopted; $(M,\omega)$ is smooth symplectic of dimension $2n$, $H$ is smooth, and $X_H$ follows $\iota_{X_H}\omega=dH$.

[A2] The local flow is used only where defined. The sampled region is measurable and forward invariant; for an infinite-measure region the restricted-measure assertion additionally requires $m(R\setminus T(R))=0$ (in particular, onto invariance suffices). For entropy transport, each stated $\phi_t$ is a diffeomorphism of $R$ with inverse $\phi_{-t}$. For recurrence and Birkhoff, $R$ is forward invariant, $T=\phi_\tau$ and every iterate exist on $R$, and $m(R)<\infty$; for the space-mean conclusion $m(R)=1$ and $T$ is ergodic in the sense of [F5].

[A3] The entropy scale $k_B$ is a fixed real mathematical parameter, with no physical value or unit adopted here. The transported density is measurable, nonnegative, normalized, and has finite absolute entropy integral, with $0\log0=0$.

[F1] [[def-axiom-of-choice]], [[def-symplectic-form-and-symplectic-manifold]], [[def-hamiltonian-vector-field-and-hamiltonian-function]], and [[cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form]]: AC is the inherited measure-theorem convention; $\omega$ is closed and nondegenerate, $\iota_{X_H}\omega=dH$, and $\omega^n/n!$ determines the canonical positive volume measure.

[F2] [[thm-hamiltonian-flows-preserve-the-symplectic-form]]: every local Hamiltonian flow preserves $\omega$ wherever defined. [[thm-liouville-volume-preservation]] then gives preservation of the symplectic volume on the same domain.

[F3] [[def-measure-preserving-transformation-and-system]] and [[thm-integrals-are-invariant-under-measure-preserving-maps]]: the stated invariant flow map is measure preserving, and integrals of integrable functions are unchanged by its measure-preserving substitution.

[F4] [[thm-poincare-recurrence-for-finite-measure-preserving-systems]]: on a finite-measure system, almost every point of each measurable set returns to that set infinitely often.

[F5] [[def-ergodic-measure-preserving-system]], [[thm-birkhoff-ergodic-theorem]], and [[cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems]]: ergodicity means every invariant event is null or conull; for an integrable observable on a finite measure-preserving probability system, Birkhoff supplies almost-everywhere convergence. [[lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces]] at $p=1$ supplies $L^1$ convergence on finite measure spaces; [[thm-birkhoff-limit-identification-on-finite-measure-spaces]] under AC identifies the limit as the unique integrable function measurable for $\mathcal I=\{E:T^{-1}E=E\}$ with $\int_Ef^*\,dm=\int_Ef\,dm$ for every $E\in\mathcal I$. This is the invariant conditional expectation meant here; the ergodic case has constant limit equal to the space integral.

[F6] [[def-probability-measure]] and [[def-integrable-real-and-complex-functions-and-their-integrals]]: normalized densities and the stated absolute-integrability condition define the probability and entropy integrals.

## Proof



**Given:** [A1]–[A3] and the inspected supplier interfaces [F1]–[F6].

1.1 By [F1], $\omega$ is closed and $\iota_{X_H}\omega=dH$. The Hamiltonian-flow theorem [F2], under its local existence domain, gives $\phi_t^*\omega=\omega$ and hence $\phi_t^*(\omega^n/n!)=\omega^n/n!$. The volume measure defined by this positive form is therefore preserved by each local flow diffeomorphism on its domain. For a measurable $E\subseteq R$, injectivity and volume preservation give $m((T|_R)^{-1}E)=m(E\cap T(R))$. If $m(R\setminus T(R))=0$, this equals $m(E)$, so the restriction is the measure-preserving system of [F3]. When $m(R)<\infty$, volume preservation gives $m(T(R))=m(R)$; because $T(R)\subseteq R$, finite additivity gives $m(R\setminus T(R))=0$. Thus the finite forward-invariant case follows without an onto hypothesis. Also $dH(X_H)=\omega(X_H,X_H)=0$ because a two-form is alternating, so each defined orbit stays on its energy level. This argument grants no flow outside its domain. [A1, A2, F1, F2, F3, algebra]

2.1 Apply [F3] to $p_t=p_0\circ\phi_{-t}$. It preserves $\int p_t\,dm=\int p_0\,dm=1$. The scalar function $u\mapsto u\log u$, defined to be $0$ at $u=0$ by [A3], is Borel; its absolute integrability is preserved because the same measure-preserving substitution gives $$\int_R|p_t\log p_t|\,dm=\int_R|p_0\log p_0|\,dm<\infty.$$ Applying integral invariance to its positive and negative parts proves $\int_Rp_t\log p_t\,dm=\int_Rp_0\log p_0\,dm$. Multiplication by the fixed real scalar $-k_B$ gives the stated scaled entropy conservation. [A2, A3, F3, F6, step 1.1]

2.2 The map $T$ on $R$ is measure preserving by 1.1 and [A2]. Its total measure is finite, so [F4] gives infinite returns for almost every point in each measurable $E\subseteq R$. The conclusion is explicitly almost everywhere and applies to the sampled map at the specified $\tau$. [A2, F3, F4, step 1.1]

3.1 Under the additional probability and ergodicity assumptions in [A2], the hypotheses of [F5] hold for each $f\in L^1(R,m)$. Birkhoff therefore gives almost-everywhere and $L^1$ convergence to the invariant conditional expectation, and its ergodic corollary identifies that limit with $\int_R f\,dm$. If ergodicity is removed, only the invariant conditional expectation conclusion remains. Neither [F2] nor recurrence [F4] supplies ergodicity. [A2, F5, step 1.1] ∎
