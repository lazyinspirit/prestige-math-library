---
id: "lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense"
kind: "lemma"
title: "Coercivity of the adjoint makes the form-operator range dense"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 4
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-countable-choice"
  - "def-hilbert-space-adjoint"
  - "def-orthogonality-and-orthogonal-complement"
  - "lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive"
  - "lem-bounded-below-operator-has-closed-range"
  - "lem-coercive-form-operator-is-bounded-below"
  - "lem-form-to-bounded-operator-by-hilbert-riesz"
  - "lem-kernel-range-orthogonality-for-hilbert-adjoints"
  - "thm-double-orthogonal-complement-is-closure"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the orthogonality argument completing surjectivity of $T$, printed p. 72"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§4.4, the final paragraph proving $R(A)^\\perp=\\{0\\}$ in Theorem 4.12, printed p. 99"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 5.3, Remark 8(c), printed p. 141: R(A) is dense since a vector orthogonal to every Au must vanish."
---

## Statement

Assume Countable Choice. Let $a$ be a bounded coercive sesquilinear form on a real or complex Hilbert space $H$ with constants $M,\alpha$, and let $A$ be the operator with $a(u,v)=(Au,v)$ ([[lem-form-to-bounded-operator-by-hilbert-riesz]]). Then $$(\operatorname{ran}A)^\perp=\ker A^*=\{0\},\qquad \overline{\operatorname{ran}A}=H .$$ Combined with the closedness from [[lem-bounded-below-operator-has-closed-range]] this gives $\operatorname{ran}A=H$; this is the classical closed-range/density route to Lax--Milgram, recorded here as the pla's operator-level density step.

## Facts & Assumptions

**Given:** Countable Choice; a real or complex Hilbert space $H$; a bounded coercive sesquilinear form $a$ with constants $M,\alpha$; its operator $A\in\mathcal B(H)$ with $a(u,v)=(Au,v)$; and the adjoint form $a^*$ with operator $A^*$.

[F1] The adjoint form $a^*(u,v)=\overline{a(v,u)}$ is bounded with bound $M$ and coercive with the same constant $\alpha$, and its operator is the Hilbert adjoint $A^*$; also $a$ coercive with constant $\alpha$ makes $A$ bounded below with constant $\alpha$ ([[lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive]], [[lem-form-to-bounded-operator-by-hilbert-riesz]], [[lem-coercive-form-operator-is-bounded-below]], [[def-hilbert-space-adjoint]]).

[F2] Orthogonal complements: $(\operatorname{ran}A)^\perp=\ker A^*$, and for every linear subspace $M$ of $H$ one has $M^{\perp\perp}=\overline M$, with $\{0\}^\perp=H$ ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]], [[thm-double-orthogonal-complement-is-closure]], [[def-orthogonality-and-orthogonal-complement]]).

[F3] A bounded-below operator on a Banach space has closed range: applied to $A:H\to H$, whose domain $H$ is complete, this gives that $\operatorname{ran}A$ is closed ([[lem-bounded-below-operator-has-closed-range]]).

[F4] Coercivity of $a$ with constant $\alpha$ means $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$ for all $u$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).



## Proof

1.1 $\ker A^*=\{0\}$: by [F1] the form $a^*$ is bounded and coercive with constant $\alpha$ and has operator $A^*$, so $A^*$ is bounded below with constant $\alpha$; hence $A^*u=0$ forces $\alpha\|u\|\le0$ and $u=0$. [F1]

2.1 Density: by [F2], $(\operatorname{ran}A)^\perp=\ker A^*=\{0\}$, and the double orthogonal complement theorem applied to the linear subspace $\operatorname{ran}A$ gives $\overline{\operatorname{ran}A}=(\operatorname{ran}A)^{\perp\perp}=\{0\}^\perp=H$. So the range of $A$ is dense in $H$. [F2, step 1.1]

3.1 Closedness and surjectivity: by [F1] and [F4], $A$ is bounded below with constant $\alpha$; since $H$ is complete, [F3] makes $\operatorname{ran}A$ closed. A dense closed subset of a metric space is the whole space, so $\operatorname{ran}A=H$; combined with step 2.1 this is the classical closed-range/density route to surjectivity of $A$. [F3, F4, step 2.1] ∎ 