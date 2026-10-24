---
id: cex-omitting-strictly-semistable-objects-breaks-hn-factorization
kind: counterexample
title: "Omitting strictly semistable objects breaks Hall factorization at the A₂ wall"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-acyclic-quiver-stability-data
  - def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §§4.4–4.6"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Markus Reineke, The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli, §§2 and 4"
      url: "https://arxiv.org/pdf/math/0204059"
verification:
  precheck: pass
---

## Quiver

```tikz
\begin{tikzpicture}[>=stealth]
  \node[circle,draw,inner sep=2pt,label=below:{1}] (v1) at (0,0) {};
  \node[circle,draw,inner sep=2pt,label=below:{2}] (v2) at (2,0) {};
  \draw[->] (v1) -- (v2);
\end{tikzpicture}
```

The vertices are $1,2$ and the single directed edge is $1\to2$.

## Statement refuted

The claim that the Hall HN factorization remains valid if each
$S_Z(\phi)$ is replaced by the sum of only the stable isomorphism classes of
phase $\phi$ is false. Use the A₂ quiver $1\to2$ over $\mathbb F_q$ and set
$z_1=z_2\in\mathbb H$.

## Facts & Assumptions

**Given:** The A₂ quiver, equal-phase central charges, and the subobject-first
Hall factor $S_Z(\phi)$.

[F1] Semistability and stability test the phases of nonzero subrepresentations
([[def-finite-acyclic-quiver-stability-data]]).

[F2] The all-object series and semistable phase factors are completed sums
with the subobject-first convolution
([[def-subobject-first-completed-finite-quiver-hall-algebra-and-tori]]).

## Counterexample

**Given:** The objects and hypotheses in the statement.

1.1 Let $E=(\mathbb F_q\xrightarrow{\mathrm{id}}\mathbb F_q)$, $S_1=(\mathbb F_q\to0)$, and $S_2=(0\to\mathbb F_q)$. A subrepresentation of $E$ is a pair $U_1\subseteq U_2\subseteq\mathbb F_q$, so its only proper nonzero possibility is $S_2$. Since $z_1=z_2$, $E$ and $S_2$ have the same phase. Thus $E$ is semistable but not stable. The sequence $0\to S_2\to E\to S_1\to0$ is nonsplit because $E$ has no subrepresentation isomorphic to $S_1$. [F1, construct, algebra]

2.1 Every representation of dimension vector $(1,1)$ is a scalar arrow map. There are exactly two isomorphism classes: the zero map gives $S_1\oplus S_2$, and every nonzero scalar is isomorphic by vertex base changes to $E$. Both classes are semistable at phase $\phi$; neither is stable, because $S_1\oplus S_2$ has a proper subobject of the same phase and step 1.1 handles $E$. Hence the coefficient of $\delta_E$ in $A_{\mathrm{all}}$ is $1$. [F1, step 1.1, construct]

3.1 All nonzero dimension vectors at this wall have phase $\phi$, since $Z(d_1,d_2)=(d_1+d_2)z_1$. Therefore the ordered product over distinct phases has only the single factor at $\phi$. If that factor is replaced by $S_Z^{\mathrm{st}}(\phi)$, its coefficient at $\delta_E$ is $0$: step 2.1 lists every isomorphism class of dimension $(1,1)$ and neither is stable. This contradicts the coefficient $1$ from step 2.1. The omitted term is the strictly semistable nontrivial extension $E$, so the stable-only replacement cannot satisfy the HN factorization. [F1, F2, step 2.1, algebra] ∎
