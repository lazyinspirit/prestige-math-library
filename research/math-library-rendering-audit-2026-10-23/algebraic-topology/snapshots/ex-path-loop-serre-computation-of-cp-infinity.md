---
id: ex-path-loop-serre-computation-of-cp-infinity
kind: example
title: Path-loop Serre computation of CP infinity
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-finite-join-models-for-circle-and-two-point-groups, thm-milnor-join-model-is-a-contractible-free-g-space, prop-loop-space-of-bg-recovers-g-up-to-homotopy, lem-circle-and-path-loop-models-for-eilenberg-maclane-induction, thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence, def-serre-edge-homomorphisms-and-transgression, cor-homology-of-spheres, cor-contractible-nonempty-spaces-have-the-homology-of-a-point, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, def-axiom-of-choice]
proof_strategy: spectral-sequence
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: Hatcher, Algebraic Topology, Example 5.4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf
      locator: Example 5.4 and complete calculation, printed pp. 527–528
---

## Statement

Assume the Axiom of Choice. Under the finite-join identification
$BS^1=\mathbb {CP}^{\infty}$, the based path fibration is
$$S^1\simeq\Omega\mathbb {CP}^{\infty}\longrightarrow P\mathbb {CP}^{\infty}\longrightarrow\mathbb {CP}^{\infty},$$
its total space is contractible, and its multiplicative integral Serre spectral
sequence gives
$$H^*(\mathbb {CP}^{\infty};\mathbb Z)\cong\mathbb Z[c],\qquad |c|=2.$$
Here $c=d_2(u)$ is the transgression of a chosen generator
$u\in H^1(S^1;\mathbb Z)$; reversing $u$ reverses $c$.

## Facts & Assumptions

**Given:** AC and the standard compatible finite-join models of $\mathbb {CP}^{\infty}$.

[A1] [[def-axiom-of-choice]] is assumed for the AC-bearing homotopy and cohomology suppliers below.

[F1] [[lem-finite-join-models-for-circle-and-two-point-groups]] and [[thm-milnor-join-model-is-a-contractible-free-g-space]] identify the Milnor quotient $BS^1$ with the weak CW colimit $\mathbb {CP}^{\infty}$.

[F2] [[prop-loop-space-of-bg-recovers-g-up-to-homotopy]] gives a weak equivalence $\Omega BS^1\to S^1$ and identifies its homotopy maps with the connecting maps of the contractible Milnor bundle. Consequently $\mathbb {CP}^{\infty}$ is a marked CW $K(\mathbb Z,2)$.

[F3] [[lem-circle-and-path-loop-models-for-eilenberg-maclane-induction]] then identifies the strict loop fiber of its based path fibration up to marked homotopy with $S^1$, and says that the path total space is contractible.

[F4] [[cor-homology-of-spheres]] and [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] give $H^*(S^1;\mathbb Z)=\Lambda_{\mathbb Z}(u)$, $|u|=1$.

[F5] [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]] supplies the integral multiplicative sequence, its derivation rule, and its algebra convergence. [[def-serre-edge-homomorphisms-and-transgression]] fixes the word “transgression.”

[F6] [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] and the cohomological UCT in [F4] give $H^*(P\mathbb {CP}^{\infty};\mathbb Z)=\mathbb Z$ in degree zero and zero otherwise.

## Proof

**Proof technique:** force every differential in the two-row path-loop spectral sequence and read multiplication by its transgression.

1.1 By [F1], the finite-stage quotients $S^{2N+1}/S^1=\mathbb {CP}^N$ assemble to the Milnor quotient $BS^1=\mathbb {CP}^{\infty}$. The weak equivalence in [F2], together with $\pi_1(S^1)=\mathbb Z$ and vanishing higher homotopy, gives $$\pi_i(\mathbb {CP}^{\infty})= \begin{cases}\mathbb Z,&i=2,\\0,&i\ne2, \end{cases}$$ for $i\geq1$. Thus the displayed CW colimit is a marked $K(\mathbb Z,2)$, so [F3] applies and makes the displayed strict path-loop fibration legitimate, with contractible total space and fiber ring $\Lambda(u)$. [A1, F1, F2, F3, F4]

1.2 Put $A=H^*(\mathbb {CP}^{\infty};\mathbb Z)$. The base is simply connected, hence the fiber cohomology system is constant. Because its two nonzero stalks are the free rank-one group $\mathbb Z$, the constant-system comparison is literal, and [F5] gives $$E_2^{p,q}=A^p\otimes H^q(S^1;\mathbb Z),$$ with nonzero rows only at $q=0,1$. Consequently the only possibly nonzero differential is $$d_2:E_2^{p,1}=A^p u\longrightarrow E_2^{p+2,0}=A^{p+2}.$$ By [F6], every positive-total-degree stable term is zero. [A1, F4, F5, F6]

2.1 Define $c=d_2(u)\in A^2$. It is the transgression of $u$ by [F5]. The upper row has no incoming differential, the bottom row has no outgoing differential, and there are no differentials after $d_2$. Therefore the vanishing stable page says simultaneously that $$A^p\longrightarrow A^{p+2},\qquad a\longmapsto a c,$$ is injective (to kill every $a u$) and surjective (to hit every positive-degree bottom class), for every $p\geq0$. Here the Serre Leibniz sign is $(-1)^{|a|}$; the induction below makes $A^{\mathrm{odd}}=0$, so this is the displayed multiplication map. [F5, F6, step 1.2]

3.1 Since $A^0=\mathbb Z$, step 2.1 gives $A^2=\mathbb Zc$ and shows that $c$ is primitive, not a nonunit multiple of a generator. Since $A^1$ has no possible incoming differential and must vanish at infinity, $A^1=0$. Inductively, multiplication by $c$ identifies $A^{2k}$ with $\mathbb Zc^{k+1}$ and identifies $A^{2k+1}=0$ with $A^{2k+3}=0$. Hence the homomorphism $\mathbb Z[c]\to A$ sending the formal generator to the transgression is an isomorphism in every degree, both injectively and surjectively. There is no additive or multiplicative extension ambiguity: each associated-graded total degree has at most the single bottom-row term. [F5, step 2.1]

4.1 The base, fiber, and path space are nonempty. The zero and degree-one groups, the unit, $c^0$, the first differential, both rows, both endpoints of every possible differential, and both directions of the ring isomorphism were checked above. Changing $u$ to $-u$ changes $c=d_2(u)$ to $-c$. AC is used through [F2]–[F6]; the finite-stage identification and the integer induction add no choice. This is a computation, not a converse characterization. [A1, F1, F2, F3, F4, F5, F6, step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Source notes

[Hatcher, Example 5.4](https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf), printed pp. 527–528, gives the additive two-row path-space computation for a $K(\mathbb Z,2)$. Steps 3.1–4.1 use the authored multiplicative theorem to upgrade that calculation to the integral cohomology ring and explicitly prove primitivity and absence of extensions.
