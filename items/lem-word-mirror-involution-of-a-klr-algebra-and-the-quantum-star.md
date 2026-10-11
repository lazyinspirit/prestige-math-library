---
id: lem-word-mirror-involution-of-a-klr-algebra-and-the-quantum-star
kind: lemma
title: "The word-mirror involution of a KLR algebra and the quantum star"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       def-klr-induction-and-restriction-bimodules,
       def-divided-power-klr-idempotents-and-projectives,
       def-the-klr-cartan-pairing,
       thm-klr-categorification-of-the-negative-quantum-half,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-cyclotomic-klr-quotient-at-a-dominant-weight]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3"
      url: "https://arxiv.org/pdf/0812.5023"
      locator: "Section 3.2.1, printed p. 25 (PDF p. 25): the involution reversing sequences and dot positions and sending tau_a to -tau_(n-a), followed by the generator-fixing opposite-algebra isomorphism."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Section 2.6: separated-block induction; the compatibility with the quantum multiplication-reversing star is proved locally below."

---

## Statement

On the generic graded KLR algebra define $\rho(e(\nu))=e(\operatorname{rev}\nu)$,
$\rho(x_a)=x_{n+1-a}$, $\rho(\tau_a)=-\tau_{n-a}$. This is a degree-preserving
ALGEBRA AUTOMORPHISM with $\rho^2=1$, commuting with the generator-fixing
anti-involution $\psi$. It maps $e(\nu)Re(\eta)$ to
$e(\operatorname{rev}\nu)Re(\operatorname{rev}\eta)$. Twisting LEFT modules by
$a\cdot m=\rho(a)m$ is an equivalence and commutes with finite vector duality
and projective Hom duality. Its separated-block formula is
$\rho^*\operatorname{Ind}(M,N)\cong\operatorname{Ind}(\rho^*N,\rho^*M)$,
without a shift. Under $\gamma:U_A^-\to K_0(R)$ it induces the quantum
multiplication-reversing star, fixing every $F_i$ and $q$. The first
cyclotomic generator maps to $a_{\nu_1}(x_n)e(\operatorname{rev}\nu)$, with the
SAME original first color. Thus it identifies the first- and last-strand
quotients; preservation of the first ideal itself is not asserted in general.

## Facts & Assumptions

**Given:** A KLR datum $Q$ of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] and the grading of [[def-klr-grading-and-diagrammatic-composition]].

[F1] The relations (1)-(7) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] with $Q_{ij}(u,v)=Q_{ji}(v,u)$ (Q2), the equal-color mixed relations with their two opposite constants and the braid defect with the global sign.

[F2] The KLR PBW/PBW-basis and divided-power conventions of [[def-divided-power-klr-idempotents-and-projectives]]; the negative-half categorification $\gamma:U_A^-\to K_0(R)$ of [[thm-klr-categorification-of-the-negative-quantum-half]], under which the word projective of $\nu$ represents $F_{\nu_1}\cdots F_{\nu_n}$; the Cartan pairing of [[def-the-klr-cartan-pairing]].

[F3] The graded bimodule and shift conventions of [[def-graded-ring-module-bimodule-and-internal-shift]]; the cyclotomic first-strand quotient of [[def-cyclotomic-klr-quotient-at-a-dominant-weight]].

## Proof

**Proof technique:** check the mirrored generators against the full KLR presentation relation by relation, verify the involution and duality compatibility, and read the induced Grothendieck action as the quantum star.

1.1 Relation check. Assign to each generator its mirror image $\rho$; the idempotents map to idempotents, dots to dots with reversed positions, and crossings to minus crossings with reversed positions, all of the same degrees because dot colors are mirrored and $b_{ij}=b_{ji}$. The quadratic relation uses (Q2): $Q_{ij}(u,v)=Q_{ji}(v,u)$, and the two crossing signs cancel in the square, so $\rho(\tau_a^2-Q_{\nu_a\nu_{a+1}})=0$. The two mixed equal-color constants exchange under reversal and the crossing minus corrects their sign; the three-crossing braid words exchange positions, and their odd crossing sign together with the reversal of numerator and denominator gives the actual native divided-braid correction. Far commutativity, dot commutativity and the dot slides map to the same relations with mirrored indices, and applying $\rho$ twice fixes every generator, so $\rho$ is a degree-preserving algebra automorphism with $\rho^2=1$; since the generator-fixing anti-involution $\psi$ fixes all generators and reverses multiplication while $\rho$ is a homomorphism, $\rho\psi=\psi\rho$. [F1, F3]

2.1 Module twist and dualities. Twisting left modules by $a\cdot m=\rho(a)m$ is an equivalence of graded module categories, since $\rho$ is an automorphism. Finite vector duality $M\mapsto M^*$ satisfies $(M^*)^*=M$ and the twist commutes with it because the dual action is built from $\rho(a)$ applied to the same finite-dimensional spaces; projective Hom duality $P\mapsto\operatorname{HOM}_B(P,B)$ likewise commutes, as the evaluation pairings are preserved. The separated-block formula is $\rho^*\operatorname{Ind}(M,N)\cong\operatorname{Ind}(\rho^*N,\rho^*M)$ without a shift: reflecting the block embedding exchanges the $\beta$ and $\gamma$ blocks and the tensor-factor flip gives the reflected induced module, with the same degrees because the reflection uses the equal-degree assignment. [step 1.1, F2, F3]

3.1 The induced quantum star. Under the categorification $\gamma$ of [F2] the word projective of $\nu$ represents $F_{\nu_1}\cdots F_{\nu_n}$, so the reflection equivalence acts on $K_0(R)$ by reversing the order of multiplication of the divided generators and fixing each $F_i$ and $q$; this is exactly the quantum multiplication-reversing star anti-automorphism $*$. [step 2.1, F2]

4.1 The cyclotomic generator. Applying $\rho$ to the first-strand cyclotomic generator $a_{\nu_1}(x_1)e(\nu)$ gives $a_{\nu_1}(x_n)e(\operatorname{rev}\nu)$, with the SAME original first color, so $\rho$ identifies the first-strand and last-strand cyclotomic quotients; preservation of the first ideal itself is not asserted in general, since a monic polynomial in the first dot is moved to the last dot unless the polynomial is constant. All computations are finite and choice-free. [step 1.1, F3] ∎
