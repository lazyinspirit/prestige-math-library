---
id: lem-hh-commutative-or-cocommutative-antipode-is-involutive
kind: lemma
title: "A commutative or cocommutative Hopf algebra has involutive antipode"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [def-hh-hopf-algebra-and-antipode, lem-hh-convolution-algebra-associativity-and-unit, thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Hans-Jürgen Schneider, Lectures on Hopf algebras, notes by Sonia Natale"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: 'Theorem 1.5(c), printed p. 16: commutative or cocommutative Hopf algebras have $S^2=\mathrm{id}$'
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Proposition 2.2(v), PDF p. 4: involutivity in the commutative or cocommutative cases"

---
## Statement

Let $H$ be a Hopf algebra over a field $k$ with antipode $S$. If either its multiplication is commutative or its comultiplication is cocommutative, meaning $\tau\Delta=\Delta$, then $S^2=\mathrm{id}_H$. The two hypotheses are separate sufficient branches; neither is required in the general Hopf algebra definition.

## Facts & Assumptions

**Given:** A Hopf algebra $H$ over $k$, with antipode $S$.

[F1] The antipode is a two-sided convolution inverse of $\mathrm{id}_H$ ([[def-hh-hopf-algebra-and-antipode]]).

[F2] The antipode is anti-multiplicative: $S(ab)=S(b)S(a)$ ([[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]).

[F3] Convolution is associative, with the unit $u\varepsilon$ ([[lem-hh-convolution-algebra-associativity-and-unit]]).

## Proof

**Proof technique:** direct.

1.1 Assume $H$ is commutative. Apply $S$ to the left antipode equation $\sum S(h_{(1)})h_{(2)}=\varepsilon(h)1$ and use anti-multiplicativity to obtain $\sum S(h_{(2)})S^2(h_{(1)})=\varepsilon(h)1$. Commutativity of $H$ lets us reorder each product, so $S^2*S=u\varepsilon$. Since also $S*\mathrm{id}=u\varepsilon$, associativity gives $S^2=S^2*(S*\mathrm{id})=(S^2*S)*\mathrm{id}=\mathrm{id}$. [given, F1, F2, F3, algebra]

1.2 Assume instead that $H$ is cocommutative. The same application of $S$ gives $\sum S(h_{(2)})S^2(h_{(1)})=\varepsilon(h)1$; cocommutativity permits interchange of the two Sweedler indices, yielding $S*S^2=u\varepsilon$. Since $\mathrm{id}*S=u\varepsilon$, associativity gives $S^2=(\mathrm{id}*S)*S^2=\mathrm{id}*(S*S^2)=\mathrm{id}$. [given, F1, F2, F3, algebra]

2.1 The commutative calculation proves the first sufficient branch, and the cocommutative calculation proves the second; either hypothesis therefore implies $S^2=\mathrm{id}_H$. No finite-dimensionality or choice principle is used. [step 1.1, step 1.2] ∎
