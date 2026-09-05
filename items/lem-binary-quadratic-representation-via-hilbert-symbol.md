---
id: lem-binary-quadratic-representation-via-hilbert-symbol
kind: lemma
title: "Binary quadratic representation via the Hilbert symbol"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hilbert-symbol-over-a-rational-completion, lem-equivalent-definitions-of-the-hilbert-symbol, thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.4"
      url: "https://www.samraskin.net/forms.pdf"
    - title: "Andrew V. Sutherland, 18.782 Lecture 10"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $a,b,t\in Q_v^\times$. Then the binary form $aX^2+bY^2$ represents $t$ over
$Q_v$ if and only if

$$
(at,bt)_v=1.
$$

## Facts & Assumptions

**Given:** A place $v$ of $\mathbb Q$ and nonzero elements $a,b,t\in Q_v$.

[L1] The Hilbert symbol satisfies $(c,d)_v=1$ exactly when $cX^2+dY^2=1$ is soluble over $Q_v$ ([[def-hilbert-symbol-over-a-rational-completion]]).

[L2] The symbol depends only on square classes
([[thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate]]).

## Proof

**Proof technique:** direct.

1.1 If $aX^2+bY^2=t$ has a solution, divide by $t$ to obtain $(a/t)X^2+(b/t)Y^2=1$. By [L1], this means $(a/t,b/t)_v=1$. Since $(a/t)/(at)=t^{-2}$ and $(b/t)/(bt)=t^{-2}$ are squares, [L2] gives $(at,bt)_v=1$. [L1, L2, given, algebra]

2.1 Conversely, if $(at,bt)_v=1$, then [L2] gives $(a/t,b/t)_v=1$, because the two pairs differ by multiplying each entry by the same square $t^{-2}$. By [L1], there exist $X,Y$ with $(a/t)X^2+(b/t)Y^2=1$, and multiplying by $t$ yields $aX^2+bY^2=t$. [L1, L2, step 1.1, algebra] ∎
