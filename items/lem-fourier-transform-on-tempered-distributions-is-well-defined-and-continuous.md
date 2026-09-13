---
id: lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous
kind: lemma
title: Fourier transform on tempered distributions is well defined and continuous
status: draft
origin: pipeline
deps: [def-fourier-transform-of-a-tempered-distribution, def-weak-and-strong-topologies-on-tempered-distributions, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Definition 11.22 and the paragraph following (11.33), p. 127"
proof_strategy: direct
---

## Statement

Assume Countable Choice.  The Fourier transform
$\mathcal F:\mathcal S'(\mathbb R^n)\to\mathcal S'(\mathbb R^n)$ is
well-defined and complex-linear.  It is continuous for both the weak topology
$\sigma(\mathcal S',\mathcal S)$ and the strong topology
$\beta(\mathcal S',\mathcal S)$.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and a tempered
distribution $u$.

[F1] The distributional transform is the bilinear transpose of the Schwartz
transform ([[def-fourier-transform-of-a-tempered-distribution]]).

[F2] The Schwartz transform is a continuous linear automorphism
([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F3] Weak dual seminorms use single tests and strong dual seminorms use bounded
test sets ([[def-weak-and-strong-topologies-on-tempered-distributions]]).

## Proof

**Proof technique:** transpose seminorm calculation.

1.1 By [F2], $\mathcal F\varphi$ is a Schwartz test and depends continuously and linearly on $\varphi$.  Thus $\varphi\mapsto u(\mathcal F\varphi)$ is a continuous complex-linear functional.  This proves well-definedness, and linearity in $u$ follows directly from the pairing. [F1, F2]

1.2 For a single test $\varphi$, $p_\varphi(\mathcal Fu)=|u(\mathcal F\varphi)|=p_{\mathcal F\varphi}(u)$. Every target weak seminorm therefore pulls back to a source weak seminorm, so $\mathcal F$ is weakly continuous. [F1, F3]

2.1 If $B\subseteq\mathcal S$ is bounded, continuity and linearity of the Schwartz transform imply that $\mathcal F(B)$ is bounded: each output seminorm is bounded by finitely many input seminorms. [F2, step 1.1]

$$p_B(\mathcal Fu)=\sup_{\varphi\in B}|u(\mathcal F\varphi)| =p_{\mathcal F(B)}(u).$$

Thus every target strong seminorm pulls back to a strong seminorm and the map
is strongly continuous.  Countable Choice was used only in [F2], not in these
transpose calculations. [F2, F3] ∎
