---
id: thm-malcev-conjugacy-of-levi-subalgebras
kind: theorem
title: Malcev conjugacy of Levi subalgebras
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-levi-decomposition, thm-first-whitehead-lemma, def-nilradical-of-a-finite-dimensional-lie-algebra, thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical, cor-semisimple-lie-algebras-are-centerless-and-perfect, prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center]
landmark: true
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Theorem 6.25"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§6, Theorem 6.25 and complete proof, printed pp. 62–64"
---

## Statement

Any two Levi subalgebras of a finite-dimensional characteristic-zero Lie
algebra $\mathfrak g$ are conjugate by a finite product of automorphisms
$\exp(\operatorname{ad}x)$ with
$x\in\operatorname{nilrad}(\mathfrak g)$.

## Facts & Assumptions

**Given:** Levi subalgebras $\mathfrak s_0,\mathfrak s_1$, radical
$\mathfrak r$, and nilradical $\mathfrak n$ of $\mathfrak g$.

[L1] Levi factors exist and project isomorphically to
$\mathfrak g/\mathfrak r$ ([[thm-levi-decomposition]]).

[L2] Every $1$-cocycle of a semisimple algebra in a finite module is a
coboundary ([[thm-first-whitehead-lemma]]).

[L3] The commutator $[\mathfrak g,\mathfrak r]$ lies in the nilradical
([[thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical]]).

[L4] A semisimple characteristic-zero algebra is perfect
([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L5] A nonzero finite-dimensional nilpotent Lie algebra has nonzero center
([[prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center]]).

## Proof

**Proof technique:** induction on the radical, strengthened to place every
conjugator in $[\mathfrak g,\mathfrak r]$.

1.1 We prove the stronger assertion that the conjugating factors may all be $\exp(\operatorname{ad}x)$ with $x\in[\mathfrak g,\mathfrak r]$. If this commutator is zero, then $\mathfrak r$ is central. Each Levi factor is a section of $\mathfrak g\to\mathfrak g/\mathfrak r$ by [L1]. The difference of two such sections is a linear map to the central algebra $\mathfrak r$; the two sections preserve brackets, so that difference vanishes on the derived algebra of the quotient. The quotient is semisimple and hence perfect by [L4], so the sections, and therefore the Levi factors, coincide. [L1, L4, base]

1.2 Suppose $[\mathfrak g,\mathfrak r]\ne0$. It is an ideal contained in the nilradical by [L3], hence is nilpotent and has nonzero center by [L5]. Jacobi shows that this center is an ideal of $\mathfrak g$. Choose a minimal nonzero $\mathfrak g$-ideal $\mathfrak m$ in it. Then $\mathfrak m$ is abelian and $0\ne\mathfrak m\subseteq[\mathfrak g,\mathfrak r]\subseteq\mathfrak n$. [L3, L5, algebra]

2.1 First assume that $\mathfrak r$ itself contains no nonzero proper ideal of $\mathfrak g$. Then $[\mathfrak g,\mathfrak r]=\mathfrak r$ by step 1.1. The ideal $[\mathfrak r,\mathfrak r]$ is proper because $\mathfrak r$ is nonzero solvable, so minimality makes it zero. Identify both Levi factors with $\mathfrak q=\mathfrak g/\mathfrak r$. Relative to $\mathfrak s_0$, write $\mathfrak s_1$ as the graph $x\mapsto x+h(x)$ of a linear map $h:\mathfrak s_0\to\mathfrak r$. Its being a subalgebra says exactly that $h$ is a $1$-cocycle for the adjoint $\mathfrak s_0$-module $\mathfrak r$. By [L2], $h(x)=[x,b]$ for some $b\in\mathfrak r$. Since $\mathfrak r$ is abelian, $\exp(\operatorname{ad}(-b))=1+\operatorname{ad}(-b)$ maps $x$ to $x+h(x)$. Here $-b\in\mathfrak r=[\mathfrak g,\mathfrak r]$, proving the strengthened base case. [L2, step 1.1, base]

2.2 In the remaining case, $0\ne\mathfrak m\ne\mathfrak r$. The radical of $\mathfrak g/\mathfrak m$ is $\mathfrak r/\mathfrak m$, so it has smaller dimension. Apply the strengthened induction hypothesis in that quotient. Its conjugating elements lie in $[\mathfrak g/\mathfrak m,\mathfrak r/\mathfrak m]=[\mathfrak g,\mathfrak r]/\mathfrak m$ and therefore lift to elements of $[\mathfrak g,\mathfrak r]$. The corresponding exponentials on $\mathfrak g$ induce the required quotient exponentials. After applying their finite product, we may assume that $\mathfrak s_0$ and $\mathfrak s_1$ have the same image modulo $\mathfrak m$. [step 1.2, IH]

3.1 Now $\mathfrak s_0+\mathfrak m=\mathfrak s_1+\mathfrak m$. As in step 2.1, $\mathfrak s_1$ is the graph over $\mathfrak s_0$ of a $1$-cocycle with values in the abelian module $\mathfrak m$. By [L2] it is a coboundary, and the same calculation gives one final conjugation by $\exp(\operatorname{ad}a)$ for some $a\in\mathfrak m\subseteq[\mathfrak g,\mathfrak r]$. [L2, step 2.1, 2.2]

4.1 This closes the induction and proves the stated claim because [L3] puts every chosen element in $\mathfrak n$. If $x\in\mathfrak n$, then $\operatorname{ad}_x$ maps $\mathfrak g$ into $\mathfrak n$ and its restriction to the nilpotent algebra $\mathfrak n$ is nilpotent; hence $\operatorname{ad}_x$ is nilpotent and its exponential is a finite polynomial automorphism. When $\mathfrak r=0$, both Levi factors equal $\mathfrak g$. Only finite-dimensional minimal-subspace choices occur. [L3, step 1.1, step 2.2, step 3.1, discharge-induction: step 2.1] ∎