---
id: def-qftx-photon-projected-angular
kind: definition
title: Projected photon spin and orbital operators
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-qftx-photon-helicity-bundle
  - thm-qftx-photon-rotations-helicity
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-photon-helicity-bundle: mathematical-premise
  thm-qftx-photon-rotations-helicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space
      url: https://arxiv.org/pdf/1006.3876
      locator: Full 8-page article; §I equation 1 and §II equations 2–5. The paper uses hbar=c=1; this item restores hbar explicitly.
    - title: Eric Palmerduca and Hong Qin, Photon topology
      url: https://arxiv.org/pdf/2308.11147v2
      locator: Full 66-page arXiv:2308.11147v2; §V.3, equations 213–228, for the total rotation action, helicity-projected vector operators, and their non-so(3) algebra.
    - title: David Tong, Quantum Field Theory, Chapter 6, section 6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Full author-hosted HTML chapter inspected; section 6.2.1, equations 6.511–6.523, for the free photon modes and transverse projector used as input here.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Assume the Axiom of Choice and a constant $\hbar>0$, interpreted as the angular-momentum scale. Let $M=\mathbb R^3\setminus\{0\}$, $\mathbf n(\mathbf k)=\mathbf k/|\mathbf k|$, and use the transverse one-photon Hilbert space
$$
\mathcal H_T^\nu=\{f\in L^2(M,d\nu;\mathbb C^3):\mathbf k\cdot f(\mathbf k)=0\ \nu\text{-almost everywhere}\},\qquad d\nu(\mathbf k)=\frac{d^3\mathbf k}{2|\mathbf k|},
$$
with the second-variable-linear Hermitian pairing of [[def-qftx-photon-helicity-bundle]]. Use its dense smooth transverse domain
$$
\mathcal D=\{f\in C_c^\infty(M;\mathbb C^3):\mathbf k\cdot f(\mathbf k)=0\text{ for every }\mathbf k\in M\}.
$$
For $\mathbf n\in S^2$, let $P(\mathbf n)=I-\mathbf n\mathbf n^T$ and $h(\mathbf n)=i(\mathbf n\times\cdot)$, where the cross product is extended complex-linearly and $\epsilon_{123}=1$. These are the transverse projection and helicity multiplier from [[def-qftx-photon-helicity-bundle]]; on $P(\mathbf n)\mathbb C^3$, $h$ is self-adjoint, $h^2=P$, and its eigenvalues are $\sigma\in\{+1,-1\}$.

Let $e_1,e_2,e_3$ be the standard basis and define the dimensionless spin-one matrices by
$$
(S_i v)_a=-i\sum_{b=1}^3\epsilon_{iab}v_b,\qquad i,a\in\{1,2,3\}.
$$
Let $J_i$ be the self-adjoint Stone generator of the rotation subgroup about $e_i$ supplied by [[thm-qftx-photon-rotations-helicity]], with convention $U(R_{e_i}(t))=e^{-itJ_i/\hbar}$. Define the bounded projected spin operator and its orbital remainder by
$$
S_i'=M_{\hbar P(\mathbf n)S_iP(\mathbf n)}=M_{\hbar n_i h(\mathbf n)},\qquad L_i'=J_i-S_i'\quad\text{on the exact domain }D(J_i).
$$
Here $M_Af(\mathbf k)=A(\mathbf n(\mathbf k))f(\mathbf k)$ for a matrix field $A$; the proof below establishes the equality of the two formulas for $S_i'$, boundedness, self-adjointness, and invariance of $\mathcal D$. The label “projected spin” denotes this operator family and does not assert that its components form a spin-$1$ representation.

## Definition references

[[def-qftx-photon-helicity-bundle]]

[[thm-qftx-photon-rotations-helicity]]

## Facts & Assumptions

**Given:** The Axiom of Choice, $\hbar>0$, the transverse Hilbert space and smooth domain above, and the standard Euclidean cross product.

[A1] Assume the Axiom of Choice. [[def-axiom-of-choice]]

[F1] [[def-qftx-photon-helicity-bundle]] defines $\mathcal H_T^\nu$, $P(\mathbf n)$, $h(\mathbf n)=i(\mathbf n\times\cdot)$, and $\mathcal D$; it proves $h^*=h$, $h^2=P$, and $P h=h P=h$ on each transverse fiber.

[F2] [[thm-qftx-photon-rotations-helicity]] defines $U(R)f(\mathbf k)=R f(R^{-1}\mathbf k)$ and, for each unit axis $\mathbf a$, the self-adjoint Stone generator $J_{\mathbf a}$ with $U(R_{\mathbf a}(t))=e^{-itJ_{\mathbf a}/\hbar}$. On $\mathcal D$ its differential expression is $J_{\mathbf a}=L_{\mathbf a}+\hbar S_{\mathbf a}$, where $L_{\mathbf a}=-i\hbar(\mathbf a\times\mathbf k)\cdot\nabla_{\mathbf k}$ and $(S_{\mathbf a})_{bc}=-i\sum_\ell a_\ell\epsilon_{\ell bc}$.

## Proof

**Given:** [A1], [F1], [F2], and the definitions in the Statement.

1.1 Fix $\mathbf n\in S^2$ and $v\in P(\mathbf n)\mathbb C^3$, so $\mathbf n\cdot v=0$. Under [A1], the rotation supplier [F2] provides the stated total operator on the common domain. Decompose $e_i=n_i\mathbf n+(e_i-n_i\mathbf n)$. The cross product of the two vectors $e_i-n_i\mathbf n$ and $v$, both perpendicular to $\mathbf n$, is parallel to $\mathbf n$, so projection by $P$ removes it; hence $P(e_i\times v)=n_i(\mathbf n\times v)$. Since $S_i v=i(e_i\times v)$ by the stated Levi-Civita convention, $P S_i P v=i n_i(\mathbf n\times v)=n_i h(\mathbf n)v$. Therefore the two displayed multiplication formulas for $S_i'$ agree on every transverse fiber. [A1, F1, F2, given, algebra]

2.1 The multiplier $n_i h(\mathbf n)$ is self-adjoint on the transverse fiber because $n_i$ is real and $h^*=h$, and its norm is at most $1$ because $|n_i|\le1$ and $\|h\|=1$ there. Integrating the fiberwise Hermitian identity shows that $S_i'$ is symmetric on the whole Hilbert space; since it is bounded and defined everywhere, the adjoint definition gives $S_i'^*=S_i'$. Its norm is at most $\hbar$. Its matrix coefficients are smooth on $M$; multiplication therefore preserves smoothness and compact support away from $\mathbf k=0$, and its values remain transverse by [F1]. Consequently $S_i'\mathcal D\subseteq\mathcal D$, and $L_i'=J_i-S_i'$ on $D(J_i)$ is well-defined and restricts to an operator from $\mathcal D$ to $\mathcal H_T^\nu$. [F1, F2, step 1.1, given, algebra] ∎

## Remarks

$J_i$ is fixed by the rotation action and is the total one-photon generator. The projected operator $S_i'$ is the helicity vector $\hbar n_i h$, while $L_i'$ is defined as the remainder on the exact Stone domain. Their algebra and the self-adjointness of $L_i'$ are established in [[thm-qftx-photon-projected-commutators]]; no essential-self-adjointness claim is made in this definition.

In this page, “gauge-aware” means that the operators are defined on the transverse subspace using its projector. It does not assert a universal gauge-independent local density, an identity with pointwise products of quantized $A$ and $E$, or equality of canonical Noether and kinetic/Poynting field integrals. Those classical integral comparisons require the separate electromagnetic hypotheses and boundary terms; none is asserted here.
