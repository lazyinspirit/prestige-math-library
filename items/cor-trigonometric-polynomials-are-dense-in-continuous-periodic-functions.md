---
id: cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions
kind: corollary
title: Trigonometric polynomials are uniformly dense in continuous functions on the torus
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-the-one-dimensional-torus-and-normalized-haar-integral, def-fourier-coefficients-and-trigonometric-polynomials, thm-complex-stone-weierstrass-self-adjoint, lem-finite-tori-are-compact-hausdorff-character-spaces, def-countable-choice, def-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, p.68, Problem 2.19"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Example 2.66, pp.87–88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). The
trigonometric polynomials of
[[def-fourier-coefficients-and-trigonometric-polynomials]] are uniformly dense
in the complex Banach space $C(\mathbb T,\mathbb C)$ of continuous complex
functions on the torus: for every continuous $f:\mathbb T\to\mathbb C$ and every
real $\varepsilon>0$ there is a trigonometric polynomial $p$ with
$\|f-p\|_\infty<\varepsilon$.

The same holds on every finite torus $\mathbb T^n$, $n\ge1$, for the
trigonometric polynomials in the $n$ coordinate characters.

## Facts & Assumptions

[A1] $\mathbb T$ and each $\mathbb T^n$ are compact Hausdorff spaces ([[lem-finite-tori-are-compact-hausdorff-character-spaces]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[A2] Every unital point-separating self-adjoint complex function algebra on a compact Hausdorff space is uniformly dense in the complex continuous functions ([[thm-complex-stone-weierstrass-self-adjoint]]).

[A3] The trigonometric polynomials form a complex vector subspace of $C(\mathbb T,\mathbb C)$ closed under multiplication, with $e_0=1$ and $\overline{e_k}=e_{-k}$; on $\mathbb T^n$ the same holds for the coordinate-character polynomials ([[def-fourier-coefficients-and-trigonometric-polynomials]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[A4] The characters separate points: for distinct $x,y\in\mathbb T^n$ there is $j<n$ with $e^{(j)}(x)=\exp(2\pi ix_j)\ne\exp(2\pi iy_j)=e^{(j)}(y)$ ([[lem-finite-tori-are-compact-hausdorff-character-spaces]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice and a natural $n\ge1$; write $\mathbb T^1=\mathbb T$.

1.1 Let $A$ be the set of trigonometric polynomials on $\mathbb T^n$. Then $A$ is a complex vector subspace of $C(\mathbb T^n,\mathbb C)$, contains the constant function $e_0=1$, is closed under multiplication because $e_ke_l=e_{k+l}$, and is closed under complex conjugation because $\overline{e_k}=e_{-k}$; hence $A$ is a unital self-adjoint complex function algebra. [A3]

1.2 The algebra $A$ separates points of $\mathbb T^n$: if $x\ne y$ then some coordinate character gives different values at $x$ and $y$, and that character lies in $A$. [A4, A3]

2.1 Since $\mathbb T^n$ is compact Hausdorff and $A$ is a unital point-separating self-adjoint complex function algebra, the unital case of complex Stone–Weierstrass gives that $A$ is uniformly dense in $C(\mathbb T^n,\mathbb C)$. [step 1.1, step 1.2, A1, A2]

3.1 Thus for every continuous $f:\mathbb T^n\to\mathbb C$ and every $\varepsilon>0$ there is a trigonometric polynomial $p$ with $\|f-p\|_\infty<\varepsilon$, which for $n=1$ is the first claim and for general $n$ the second. [step 2.1] ∎
