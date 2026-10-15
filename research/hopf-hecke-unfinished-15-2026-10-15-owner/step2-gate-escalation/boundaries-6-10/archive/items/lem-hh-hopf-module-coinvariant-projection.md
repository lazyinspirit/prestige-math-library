---
id: lem-hh-hopf-module-coinvariant-projection
kind: lemma
title: "The coinvariant projection of a right-right Hopf module"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 5
deps:
  - def-hh-right-right-hopf-module-and-coinvariants
  - lem-hh-coinvariants-form-a-subspace
  - def-hh-hopf-algebra-and-antipode
  - thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hans-Juergen Schneider, Lectures on Hopf Algebras, notes by Sonia Natale, Trabajos de Matematica 31/95"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "Section 2, printed pp. 22-23: proof of Theorem 2.1 that phi(m)=sum m_0 S(m_1) is coinvariant."
    - title: "D. S. Drogalski, Chapter 3: Hopf Algebras, UC San Diego 207A lecture notes"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Section 3.6, printed p. 43: Theorem 3.38 proof, Step 1."
---

## Statement

Let $M$ be a right-right Hopf module over a Hopf algebra $H$ over a field $k$. Define
$$
P:M\to M,\qquad P(m):=\sum m_0S(m_1).
$$
Then $P$ is a linear map with image in $M^{\operatorname{co}H}$, it fixes every coinvariant, and hence $P^2=P$. No bijectivity of $S$ is assumed.

## Facts & Assumptions

**Given:** A field $k$, a Hopf algebra $H$ over $k$, and a right-right Hopf module $M$.

[F1] The coaction is $\rho(m)=\sum m_0\otimes m_1$ and compatibility is $\rho(mh)=\sum m_0h_1\otimes m_1h_2$ ([[def-hh-right-right-hopf-module-and-coinvariants]]).

[F2] The antipode is anti-comultiplicative, $\Delta(S(h))=\sum S(h_2)\otimes S(h_1)$ ([[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]).

[F3] The antipode equations are $\sum S(h_1)h_2=\varepsilon(h)1_H=\sum h_1S(h_2)$ and they imply $S(1_H)=1_H$ ([[def-hh-hopf-algebra-and-antipode]]).

[F4] Coinvariants are those $n$ with $\rho(n)=n\otimes1_H$, and they form a $k$-subspace ([[def-hh-right-right-hopf-module-and-coinvariants]], [[lem-hh-coinvariants-form-a-subspace]]).

## Proof

1.1 The map $P$ is the composite of the linear map $\rho$, the linear map $\operatorname{id}_M\otimes S$, and the linear action map $M\otimes H\to M$; hence it is linear. By [F1] and anti-comultiplicativity in [F2], coassociativity of $\rho$ gives $\rho(P(m))=\sum m_0S(m_3)\otimes m_1S(m_2)$; the reversed order in the two $S$ factors is exactly $\Delta S=(S\otimes S)\tau\Delta$. [given, F1, F2, construct]

2.1 For every $h\in H$, the antipode equation in [F3] and coassociativity give $\sum h_1S(h_2)\otimes h_3=1_H\otimes h$. Flipping the factors and applying $S$ to the first factor yields $\sum S(h_3)\otimes h_1S(h_2)=S(h)\otimes1_H$. Applying the linear action of the first coaction component to this tensor identity reduces the expression in step 1.1 to $\rho(P(m))=\sum m_0S(m_1)\otimes1_H=P(m)\otimes1_H$. [F2, F3, step 1.1, algebra]

3.1 Thus $P(m)\in M^{\operatorname{co}H}$ for every $m$, by [F4]. If $n\in M^{\operatorname{co}H}$, then $P(n)=nS(1_H)=n$: the first equality uses $\rho(n)=n\otimes1_H$, and $S(1_H)=1_H$ is in [F3]. Therefore $P$ fixes its image, so $P^2=P$. [F3, F4, step 2.1, algebra] ∎
