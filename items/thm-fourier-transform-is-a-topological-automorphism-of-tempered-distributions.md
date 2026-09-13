---
id: thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
kind: theorem
title: Fourier transform is a topological automorphism of tempered distributions
status: published
origin: pipeline
deps: [lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.2.2, Fourier inversion paragraph following Proposition 11.23, p. 128"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Theorem 8.4.3(a), p. 129"
proof_strategy: direct
---

## Statement

Assume Countable Choice.  Fourier transformation is a topological
automorphism of $\mathcal S'(\mathbb R^n)$ for both the weak and strong dual
topologies.  If

$$\langle Ru,\varphi\rangle=\langle u,\varphi(-\,\cdot)\rangle,$$

then $\mathcal F^2u=Ru$ and $\mathcal F^{-1}=R\mathcal F=\mathcal FR$.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and
$u\in\mathcal S'(\mathbb R^n)$.

[F1] Fourier transformation on $\mathcal S'$ is weakly and strongly continuous
([[lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous]]).

[F2] On Schwartz space, $\mathcal F^2=R$, $R^2=I$, and
$\mathcal F^{-1}=R\mathcal F$ ([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

## Proof

**Proof technique:** transpose the Schwartz identities.

1.1 Evaluate the second transform on an arbitrary Schwartz test $\varphi$. [F2]

$$\langle\mathcal F^2u,\varphi\rangle =\langle u,\mathcal F^2\varphi\rangle =\langle u,R\varphi\rangle =\langle Ru,\varphi\rangle.$$

Thus $\mathcal F^2u=Ru$.  This is a direct test calculation and uses no
density assertion about $\mathcal S$ inside its dual. [F2]

2.1 Reflection on the dual satisfies $R^2=I$.  Since step 1.1 gives $R=\mathcal F^2$ as operators on $\mathcal S'$, associativity gives the following two-sided inverse calculation. [step 1.1, algebra]

$$(R\mathcal F)\mathcal F=R^2=I,\qquad \mathcal F(R\mathcal F)=\mathcal F^4=R^2=I.$$

Hence $\mathcal F^{-1}=R\mathcal F$; also $R\mathcal F=\mathcal F^3=
\mathcal FR$. [step 1.1, algebra]

3.1 The inverse $R\mathcal F=\mathcal F^3$ is a composition of weakly continuous maps and also of strongly continuous maps.  Therefore $\mathcal F$ is a topological automorphism for both topologies.  Countable Choice is used only through [F1]–[F2]. [F1, step 2.1] ∎
