---
id: cex-knot-kt-45-boundary-case
kind: counterexample
title: "The endpoints do not determine intermediate pages"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-filtered-chain-complex
  - def-homological-spectral-sequence
  - thm-the-next-page-is-the-homology-of-the-current-page
  - thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
proof_strategy: direct
axiom_use: "Choice-free finite-dimensional linear algebra over F2."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Sharifi, Homological Algebra, §4"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
---

## Statement refuted

The false claim is that specifying the isomorphism class of the total homology of a bounded filtered chain complex determines the isomorphism class of its early spectral-sequence pages. More strongly, the false claim is that two filtered complexes with isomorphic total homology must have isomorphic $E_1$ pages.

## Statement references

[[def-filtered-chain-complex|Filtered chain complex convention]]

[[def-homological-spectral-sequence|Homological spectral sequence indexing]]

[[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology|Bounded convergence and abutment]]

[Weibel, *An Introduction to Homological Algebra*, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf)

[Sharifi, *Homological Algebra*, §4](https://math.ucla.edu/~sharifi/homalg.pdf)

## Facts & Assumptions

**Given:** Chain complexes over $\mathbb F_2$ with an increasing finite filtration preserved by the differential.

[F1] A filtered chain complex has $d(F_pC)\subseteq F_pC$ ([[def-filtered-chain-complex]]).

[F2] For the spectral sequence of an increasing filtered chain complex, $E_0$ is the associated graded with its filtration-preserving differential, and $E_{r+1}$ is the homology of $(E_r,d_r)$ ([[def-homological-spectral-sequence]], [[thm-the-next-page-is-the-homology-of-the-current-page]]).

[F3] A finite filtration converges to the associated graded of total homology ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

## Proof

1.1 Let $A$ be the one-generator complex $\mathbb F_2\{z\}$ in chain degree $0$, with $dz=0$ and filtration degree $0$. Let $B$ have generators $x$ in degree $1$ and $y,z$ in degree $0$, differential $dx=y$, $dy=dz=0$, and filtration $F_0B=\mathbb F_2\{y,z\}$, $F_1B=B$, $F_{-1}B=0$. In both complexes $d$ preserves the filtration, so [F1] applies. [F1, given, construct]

2.1 In $A$, $E_0=E_1=\mathbb F_2\{z\}$ because the differential is zero. In $B$, the associated graded has basis $z,y$ in filtration $0$ and $x$ in filtration $1$; its $d_0$ is zero because $dx=y$ strictly lowers filtration. Therefore $E_1(B)$ has dimension $3$. The $d_1$ differential sends the class of $x$ to the class of $y$ and sends $z$ to zero, so $E_2(B)=\mathbb F_2\{z\}$; likewise $E_2(A)=\mathbb F_2\{z\}$. [F2, step 1.1, algebra]

2.2 The total homology of $A$ is $\mathbb F_2\{z\}$. In $B$, the pair $x\mapsto y$ is contractible and the remaining class is $z$, so $H(B)\cong\mathbb F_2\{z\}\cong H(A)$. The pair by itself has zero total homology but nonzero $E_1=\mathbb F_2\{x,y\}$, with its $d_1$ killing both classes. [step 1.1, algebra]

3.1 By step 2.1, $\dim E_1(A)=1$ while $\dim E_1(B)=3$, so their $E_1$ pages cannot be isomorphic even though their total homology groups agree by step 2.2. Convergence [F3] identifies only the limiting page with the associated graded of the shared total homology; it does not determine the earlier pages. Thus the stated endpoint-only claim is false. [F3, step 2.1, step 2.2] ∎
