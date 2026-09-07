---
id: "ex-clifford-theory-for-s3-over-a3"
kind: "example"
title: "Clifford correspondence for A3 in S3"
status: "draft"
origin: "pipeline"
deps: ["thm-clifford-correspondence", "cor-normal-subgroup-induction-irreducibility-criterion", "thm-gallagher-correspondence-for-an-extendible-character"]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — §4.2 Theorem 4.2.4 / Proposition 4.2.3; Späth Theorem 1.3 specialized to S3"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
generation:
  role: example
proof_strategy: direct
---

## Example

Let $G=S_3$, $N=A_3=\langle r\rangle$ with $r=(123)$, and $s=(23)$. Write $\zeta=e^{2\pi i/3}$ and $\lambda(r)=\zeta$. Then $\operatorname{Irr}(N)=\{1,\lambda,\lambda^{-1}\}$, with conjugacy orbits $\{1\}$ and $\{\lambda,\lambda^{-1}\}$ and respective inertia groups $G$ and $N$. The trivial orbit gives the trivial and sign characters of $S_3$. Inducing $\lambda$ gives the standard irreducible representation of degree two, with ramification one and reducible restriction $\lambda+\lambda^{-1}$.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the example. All representations here are finite-dimensional complex left representations.

[F1] Induction from inertia gives a bijection on irreducibles above a chosen normal type, and distinct normal-type orbits partition the irreducibles of the group. ([[thm-clifford-correspondence]]).

[F2] Induction of an irreducible normal-subgroup character is irreducible precisely when its inertia group is the normal subgroup. ([[cor-normal-subgroup-induction-irreducibility-criterion]]).

[F3] A fixed extension of a normal type to inertia parametrizes the irreducibles above it by tensoring with inflated irreducibles of the inertia quotient. ([[thm-gallagher-correspondence-for-an-extendible-character]]).

## Verification

**Proof technique:** direct.

1.1 An operator representing $r$ satisfies $r^3=1$ and is diagonalizable, since $x^3-1$ has three distinct roots over $\mathbb C$. In an irreducible $N$-module an eigenline is invariant under $r$ and hence under $N$, so the module is that line. This gives precisely the three displayed characters. The relation $srs^{-1}=r^{-1}$ interchanges $\lambda$ and $\lambda^{-1}$, while $N$ fixes every type. Thus their inertia is $N$, while the trivial type has inertia $G$. [given, algebra]

2.1 The trivial character extends trivially to $S_3$. The quotient $S_3/A_3$ is cyclic of order two. An irreducible representation of this quotient is an eigenline for its generator, with eigenvalue $1$ or $-1$, so its two characters inflate to the trivial and sign characters. Gallagher gives exactly these characters above the trivial normal type. [F3, step 1.1]

2.2 The inertia criterion makes $\operatorname{Ind}_{A_3}^{S_3}\lambda$ irreducible. To identify it, let $P=\{(x_1,x_2,x_3)\in\mathbb C^3:x_1+x_2+x_3=0\}$ with the left permutation action. The vectors $v=(1,\zeta^2,\zeta)$ and $w=(1,\zeta,\zeta^2)$ form a basis of $P$; $rv=\zeta v$, $rw=\zeta^{-1}w$, and $sv=w$, $sw=v$. Any invariant line would be one of the distinct $r$-eigenlines, but $s$ swaps them, so $P$ is irreducible. Since it lies over $\lambda$ and inertia equals $N$, Clifford correspondence identifies it with the induced module. [F1, F2, step 1.1, algebra]

3.1 The displayed eigenbasis gives $P|_N\cong\lambda\oplus\lambda^{-1}$, each once, so its ramification is one and its normal restriction is reducible and not isotypical. The two normal-type orbits exhaust all types; the orbit partition therefore shows that the trivial, sign, and standard modules are the complete list of irreducible $S_3$-modules. [F1, step 2.1, step 2.2] ∎
