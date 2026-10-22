---
id: thm-nrqmx-finite-weyl-uniqueness-interface
kind: theorem
domain: mathematics
title: Finite canonical representation interface
status: draft
origin: pipeline
dependency_level: 0
deps: [thm-stone-von-neumann-for-finite-dimensional-weyl-systems, def-axiom-of-choice]
dependency_roles:
  thm-stone-von-neumann-for-finite-dimensional-weyl-systems: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes, Chapter VIII, pp. 43–47
      url: https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf
    - title: Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem, §4.3, pp. 5–10
      url: https://arxiv.org/pdf/0912.0574
---

## Statement

Assume the Axiom of Choice. Let $n\in\mathbb N_0$, let $V$ be a real vector space of dimension $2n$, and let $\omega:V\times V\to\mathbb R$ be bilinear and alternating, meaning $\omega(v,v)=0$ for every $v\in V$, and nondegenerate, meaning that $\omega(v,w)=0$ for every $w\in V$ implies $v=0$. Let $\lambda\in\mathbb R\setminus\{0\}$, and let $\mathcal H\ne\{0\}$ be a complex Hilbert space. A unitary operator on $\mathcal H$ means a bijective complex-linear isometry. Suppose $W:V\to U(\mathcal H)$ satisfies $W(0)=I$ and

$$W(v)W(w)=e^{-i\lambda\omega(v,w)/2}W(v+w)\qquad(v,w\in V),$$

is regular in the sense that $t\mapsto W(tv)\xi$ is norm-continuous for every $v\in V$ and $\xi\in\mathcal H$, and is irreducible in the sense that its only closed subspaces $M\subseteq\mathcal H$ satisfying $W(v)M\subseteq M$ for every $v\in V$ are $\{0\}$ and $\mathcal H$. Choose a symplectic basis identifying $(V,\omega)$ with $\mathbb R^n\oplus\mathbb R^n$ and $\omega((q,p),(q',p'))=q\cdot p'-p\cdot q'$. Then $W$ is unitarily equivalent, meaning that there is a unitary map $U:\mathcal H\to L^2(\mathbb R^n)$ intertwining the two Weyl actions, to the Schrödinger system

$$\bigl(W_\lambda(q,p)f\bigr)(x)=e^{i\lambda p\cdot(x-q/2)}f(x-q)$$

on $L^2(\mathbb R^n)$. Consequently, there is exactly one unitary-equivalence class of nonzero irreducible regular Weyl systems with this fixed finite-dimensional phase space and parameter. No conclusion is asserted for infinite-dimensional phase spaces, nonregular systems, or zero central parameter.

## Statement references

[[thm-stone-von-neumann-for-finite-dimensional-weyl-systems]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite-dimensional real symplectic vector space $(V,\omega)$; a nonzero real parameter $\lambda$; and a nonzero irreducible regular Weyl system $W$ with the displayed multiplication law.

[A1] The Axiom of Choice (AC) states that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] The imported finite-dimensional Stone–von Neumann theorem assumes AC, finite-dimensional real symplectic phase space of dimension $2n$, nonzero central parameter, and a nonzero irreducible regular Weyl system with multiplication law $W(v)W(w)=e^{-i\lambda\omega(v,w)/2}W(v+w)$; it concludes unitary equivalence to the Schrödinger system and uniqueness of the equivalence class. [[thm-stone-von-neumann-for-finite-dimensional-weyl-systems]]

## Proof

1.1 The stated $W$ has exactly the nonzero-space, fixed-parameter, Weyl multiplication, regularity, and irreducibility hypotheses in [F1], and [A1] supplies its choice assumption. Applying [F1] gives a unitary intertwiner from $W$ to the Schrödinger Weyl system. [given, A1, F1]

2.1 If $W_1$ and $W_2$ satisfy the same hypotheses, step 1.1 gives unitaries $U_1$ and $U_2$ intertwining each with the same Schrödinger system. The composite $U_2^{-1}U_1$ is unitary and intertwines $W_1$ with $W_2$, so the equivalence class is unique. [step 1.1, algebra] ∎
