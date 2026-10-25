---
verification:
  repair: research/quantum-computing-algorithms-60-2026-10-15-owner/published-repairs/lem-two-omitted-values-rule-out-an-essential-singularity.json
id: lem-two-omitted-values-rule-out-an-essential-singularity
kind: lemma
title: "Two omitted finite values rule out an essential singularity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, thm-montel-caratheodory-theorem, thm-chordal-limit-theorem-for-meromorphic-functions, thm-boundary-maximum-modulus-principle, thm-removable-singularity-characterizations, thm-pole-characterizations, thm-isolated-singularity-trichotomy, def-complex-domain, thm-path-connected-implies-connected, thm-polar-form-with-unique-principal-argument, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-parametrize-the-unit-circle, lem-complex-conjugation-and-modulus-laws, thm-complex-coordinate-isometry-and-topology-transport, cor-complex-differentiability-implies-continuity, thm-algebra-of-complex-derivatives]
proof_strategy: direct
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

**Given:** The Axiom of Choice and a holomorphic map $f$ on $0<|z-a|<R$ omitting two distinct finite values.

[A1] The Axiom of Choice is available for the subsequence selection below ([[def-axiom-of-choice]]).

[L1] Assuming the Axiom of Choice, holomorphic families omitting $0$ and $1$ are chordally normal ([[thm-montel-caratheodory-theorem]]).

[L2] A chordal limit of holomorphic functions is holomorphic or identically $\infty$ ([[thm-chordal-limit-theorem-for-meromorphic-functions]]).

[L3] On a bounded complex domain, a holomorphic function continuous on its closure is bounded in modulus by its boundary bound ([[thm-boundary-maximum-modulus-principle]]).

[L4] A bounded punctured-disc holomorphic function has a removable singularity ([[thm-removable-singularity-characterizations]]).

[L5] Every isolated singularity is removable, a pole, or essential ([[thm-isolated-singularity-trichotomy]]).

[L6] A punctured-disc holomorphic function has a pole exactly when its reciprocal extends holomorphically across the centre and vanishes there ([[thm-pole-characterizations]]).

[L7] A complex domain is nonempty, open and connected; path-connected subsets are connected ([[def-complex-domain]], [[thm-path-connected-implies-connected]]). The complex coordinate map transports topology ([[thm-complex-coordinate-isometry-and-topology-transport]]).

[L8] Nonzero complex numbers have polar form, sine and cosine parametrize the unit circle and are continuous ([[thm-polar-form-with-unique-principal-argument]], [[thm-sine-and-cosine-parametrize-the-unit-circle]], [[thm-sine-and-cosine-derivatives]]). The modulus laws include the triangle inequality and multiplicativity ([[lem-complex-conjugation-and-modulus-laws]]).

[L9] Holomorphic functions are continuous, and the reciprocal of a nonvanishing holomorphic function is holomorphic ([[cor-complex-differentiability-implies-continuity]], [[thm-algebra-of-complex-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 After an affine change of target, we may assume the omitted values are $0$ and $1$. Choose strictly decreasing positive radii $\rho_n\downarrow0$ with $2\rho_1<R$, and define $f_n(\zeta):=f(a+\rho_n\zeta)$ on the fixed annulus $A:=\{1/2<|\zeta|<2\}$. Each $f_n$ omits $0$ and $1$, so [A1] and [L1] give a chordally locally uniformly convergent subsequence on $A$; relabel it again as $(f_n)$, with the corresponding radii still written $(\rho_n)$. [A1, L1, given, choose]

2.1 By [L2], the limit of that subsequence is either holomorphic on $A$ or identically $\infty$. In the first case, chordal local uniform convergence to a finite holomorphic limit is Euclidean local uniform convergence on the unit circle, so there are $M>0$ and $N$ with $|f(a+\rho_n\zeta)|\le M$ for every $n\ge N$ and $|\zeta|=1$. In the second case, the same argument applied to the infinity chart gives $M>0$ and $N$ with $|1/f(a+\rho_n\zeta)|\le M$ for every $n\ge N$ and $|\zeta|=1$. [L2, step 1.1, cases]

3.1 In the first case, fix $n\ge N$ and put $r:=\rho_{n+1}$, $s:=\rho_n$ and $\Omega_n:=\{z:r<|z-a|<s\}$. Here $0<r<s<R$. This set is nonempty (it contains $a+(r+s)/2$), bounded, and open: the reverse triangle inequality from [L8] preserves its two strict radius inequalities in a sufficiently small ball. It is path-connected: for any two points, use the polar forms of their differences from $a$ from [L8], move each radially to radius $m:=(r+s)/2$, and join the resulting points along $a+m(\cos\theta+i\sin\theta)$ while the real angle runs linearly between their chosen arguments. These three paths remain in $\Omega_n$; their coordinate formulas are continuous by [L8], and [L7] transports this continuity and gives connectedness. Thus $\Omega_n$ is a bounded complex domain. Its closure is $\{r\le|z-a|\le s\}$: continuity of modulus gives one inclusion and radial approximation from intermediate radii gives the reverse inclusion, including both boundary circles. This closure lies inside the original punctured disc. Hence $f$ is holomorphic on a neighbourhood of it and continuous there by [L9]. Step 2.1 bounds $|f|$ by $M$ on both boundary circles, so [L3] gives $|f|\le M$ on $\Omega_n$, and the boundary bounds give the same on its closure. The union of these closed annuli for $n\ge N$ is $0<|z-a|\le\rho_N$, since the radii decrease strictly to zero. Fact [L4] therefore makes $a$ removable. [L3, L4, L7, L8, L9, step 1.1, step 2.1, given, cases]

4.1 In the second case, $f$ omits $0$, so $1/f$ is holomorphic throughout the punctured disc by [L9]. Use the same open domains $\Omega_n$ and their closures from step 3.1. The reciprocal is continuous on each closure by [L9], and step 2.1 bounds its modulus by $M$ on both boundary circles. Applying [L3] gives the bound throughout each closure and hence throughout $0<|z-a|\le\rho_N$. Fact [L4] extends $1/f$ holomorphically across $a$. If the extension is nonzero at $a$, [L9] makes its reciprocal a holomorphic extension of $f$, so $a$ is removable. If the extension vanishes at $a$, [L6] makes $a$ a pole of $f$. [L3, L4, L6, L9, step 2.1, step 3.1, given, cases]

5.1 Steps 3.1 and 4.1 show that only the removable and pole branches of [L5] can occur, so $a$ is not an essential singularity. [L5, step 3.1, step 4.1] ∎
