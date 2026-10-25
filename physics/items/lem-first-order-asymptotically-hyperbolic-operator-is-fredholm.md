---
id: lem-first-order-asymptotically-hyperbolic-operator-is-fredholm
kind: lemma
title: Fredholm index and range of an asymptotically hyperbolic first-order operator
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]
proof_strategy: direct
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, Proposition 1.8 and proof, pp. 43-44"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $A:\mathbb R\to M_d(\mathbb R)$ be continuous with limits
$A_\pm$ as $t\to\pm\infty$. Suppose each limit is self-adjoint for some
positive-definite inner product and has no zero eigenvalue. Put
$$D_A:C^1_0(\mathbb R,\mathbb R^d)\to C^0_0(\mathbb R,\mathbb R^d), \qquad D_Au=u'-A(t)u.$$
Let $E_-^u$ be the initial values at $0$ of homogeneous solutions
decaying as $t\to-\infty$, and let $E_+^s$ be the corresponding values
for solutions decaying as $t\to+\infty$. Then $D_A$ is bounded Fredholm,
$$\ker D_A\cong E_-^u\cap E_+^s,\qquad \operatorname{coker}D_A\cong\mathbb R^d/(E_-^u+E_+^s),$$
and
$$\operatorname{ind}D_A =\dim E^u(A_-)-\dim E^u(A_+),$$
where $E^u(A_\pm)$ denotes the positive eigenspace of the limiting matrix.
In particular $D_A$ is onto exactly when $E_-^u+E_+^s=\mathbb R^d$.
The isomorphism for the cokernel is induced by the half-line right inverses
constructed in the proof; no canonical identification with a tangent quotient
is asserted.

## Facts & Assumptions

**Given:** The matrix path, limits, and function spaces in the statement.

[F1] On each half-line the restricted operator has a bounded right inverse,
the decaying homogeneous initial-value space has the indicated spectral
dimension, and right-inverse values of forcings vanishing at $0$ span
modulo that space
([[lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse]]).

[F2] Homogeneous linear matrix equations have unique solutions on finite
intervals ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

## Proof

**Proof technique:** direct.

1.1 The convergence of $A(t)$ at both ends makes it bounded, so $D_A$ is a bounded map from the indicated supremum $C^1$ norm to the supremum $C^0$ norm. Apply [F1] to $A|_{[0,\infty)}$ and, after time reversal, to $A|_{(-\infty,0]}$. Denote the bounded right inverses by $R_+,R_-$. The two homogeneous initial-value spaces are $E_+^s,E_-^u$, with $\dim E_+^s=d-\dim E^u(A_+)$ and $\dim E_-^u=\dim E^u(A_-)$. [F1, given]

2.1 A homogeneous whole-line solution is determined by its value at zero by [F2] and belongs to $C^1_0$ exactly when that value lies in both $E_-^u$ and $E_+^s$. These spaces are finite-dimensional, hence closed, and the evaluation map gives $\ker D_A\cong E_-^u\cap E_+^s$. [F2, step 1.1, algebra]

2.2 For $v\in C^0_0(\mathbb R,\mathbb R^d)$, write $v_\pm$ for its half-line restrictions and define the bounded linear map $$T(v)=[R_+v_+(0)-R_-v_-(0)] \in\mathbb R^d/(E_-^u+E_+^s).$$ Every decaying solution on the positive half-line has the form $R_+v_++u_+$, with $u_+(0)\in E_+^s$; the analogous form on the negative half-line has $u_-(0)\in E_-^u$. The two half-line solutions can be matched at zero exactly when $T(v)=0$. When matched, their first derivatives also agree there because each satisfies $u'=Au+v$ and $v$ is continuous. Thus $\operatorname{ran}D_A=\ker T$, which is closed. [F1, F2, step 1.1, algebra]

3.1 The map $T$ is onto. By [F1], $E_+^s$ together with $\{R_+w(0):w(0)=0\}$ spans $\mathbb R^d$. Extend any such $w$ by zero to the negative half-line; the extension is continuous at zero, belongs to $C^0_0(\mathbb R)$, and has $R_-v_-(0)=0$. Its $T$-images therefore span the quotient by $E_-^u+E_+^s$. Consequently $C^0_0/\operatorname{ran}D_A\cong\mathbb R^d/(E_-^u+E_+^s)$, a finite-dimensional space. [F1, step 2.2, algebra]

4.1 Set $a=\dim E_-^u$, $b=\dim E_+^s$, and $c=\dim(E_-^u\cap E_+^s)$. Steps 2.1 and 3.1 give $\dim\ker D_A=c$ and $\operatorname{codim}\operatorname{ran}D_A=d-(a+b-c)$. Hence $D_A$ is Fredholm and $\operatorname{ind}D_A=c-[d-a-b+c]=a+b-d =\dim E^u(A_-)-\dim E^u(A_+)$ by step 1.1. The quotient in step 3.1 vanishes exactly when the two initial-value spaces span $\mathbb R^d$. [step 1.1, step 2.1, step 3.1, algebra] ∎