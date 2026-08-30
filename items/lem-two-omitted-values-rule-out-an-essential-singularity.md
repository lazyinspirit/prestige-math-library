---
id: lem-two-omitted-values-rule-out-an-essential-singularity
kind: lemma
title: "Two omitted finite values rule out an essential singularity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, thm-montel-caratheodory-theorem, thm-chordal-limit-theorem-for-meromorphic-functions, thm-boundary-maximum-modulus-principle, thm-removable-singularity-characterizations, thm-pole-characterizations, thm-isolated-singularity-trichotomy]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, Theorem 14"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement

Assume the Axiom of Choice. Let $f$ be holomorphic on a punctured disc
$0<|z-a|<R$ and omit two distinct finite values there. Then $a$ is removable
for $f$ or a pole; in particular, $a$ is not an essential singularity.

## Facts & Assumptions

**Given:** The Axiom of Choice and a holomorphic map $f$ on
$0<|z-a|<R$ omitting two distinct finite values.

[A1] The Axiom of Choice is available for the subsequence selection below
([[def-axiom-of-choice]]).

[L1] Assuming the Axiom of Choice, holomorphic families omitting $0$ and $1$
are chordally normal ([[thm-montel-caratheodory-theorem]]).

[L2] A chordal limit of holomorphic functions is holomorphic or identically $\infty$ ([[thm-chordal-limit-theorem-for-meromorphic-functions]]).

[L3] Boundary maximum modulus propagates a boundary bound to a bounded annulus ([[thm-boundary-maximum-modulus-principle]]).

[L4] A bounded punctured-disc holomorphic function has a removable singularity
([[thm-removable-singularity-characterizations]]).

[L5] Every isolated singularity is removable, a pole, or essential ([[thm-isolated-singularity-trichotomy]]).

[L6] A punctured-disc holomorphic function has a pole exactly when its
reciprocal extends holomorphically across the centre and vanishes there
([[thm-pole-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 After an affine change of target, we may assume the omitted values are $0$ and $1$. Choose radii $\rho_n\downarrow0$ with $2\rho_1<R$, and define $f_n(\zeta):=f(a+\rho_n\zeta)$ on the fixed annulus $A:=\{1/2<|\zeta|<2\}$. Each $f_n$ omits $0$ and $1$, so [A1] and [L1] give a chordally locally uniformly convergent subsequence on $A$; relabel it again as $(f_n)$, with the corresponding radii still written $(\rho_n)$. [A1, L1, given, choose]

2.1 By [L2], the limit of that subsequence is either holomorphic on $A$ or identically $\infty$. In the first case, chordal local uniform convergence to a finite holomorphic limit is Euclidean local uniform convergence on the unit circle, so there are $M>0$ and $N$ with $|f(a+\rho_n\zeta)|\le M$ for every $n\ge N$ and $|\zeta|=1$. In the second case, the same argument applied to the infinity chart gives $M>0$ and $N$ with $|1/f(a+\rho_n\zeta)|\le M$ for every $n\ge N$ and $|\zeta|=1$. [L2, step 1.1, cases]

3.1 In the first case, fix $n\ge N$ and apply [L3] to the bounded annulus $\Omega_n:=\{\,z:\rho_{n+1}\le|z-a|\le\rho_n\,\}$. Step 2.1 bounds $|f|$ by $M$ on both boundary circles of $\Omega_n$, so $|f(z)|\le M$ throughout $\Omega_n$. As this holds for every $n\ge N$, the function $f$ is bounded on $0<|z-a|\le\rho_N$. Fact [L4] then makes $a$ removable. [L3, L4, step 2.1, cases]

3.2 In the second case, apply the same annulus argument to $1/f$. Step 2.1 bounds $|1/f|$ by $M$ on both boundary circles of each $\Omega_n$ for $n\ge N$, hence throughout every such annulus. Therefore [L4] extends $1/f$ holomorphically across $a$. If the extension is nonzero at $a$, then its reciprocal extends $f$, so $a$ is removable for $f$. If the extension vanishes at $a$, [L6] makes $a$ a pole of $f$. [L3, L4, L6, step 2.1, cases]

4.1 Steps 3.1 and 3.2 show that only the removable and pole branches of [L5] can occur, so $a$ is not an essential singularity. [L5, step 3.1, step 3.2] ∎
