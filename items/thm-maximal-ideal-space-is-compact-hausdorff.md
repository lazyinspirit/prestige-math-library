---
id: thm-maximal-ideal-space-is-compact-hausdorff
kind: theorem
title: Maximal ideal space is compact Hausdorff
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-characters-on-a-unital-banach-algebra-are-continuous, thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra, thm-banach-alaoglu, thm-ultrafilter-lemma, def-axiom-of-choice, def-character-and-maximal-ideal-space, def-unital-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Proposition 3.1.12 and Remark 3.1.13, printed pp. 60–61"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Lemmas 5.61–5.62, printed pp. 262–265"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Theorem 3.6, printed pp. 8–9"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a nonzero
commutative unital complex Banach algebra
([[def-unital-banach-algebra]]) and let $\Delta(A)$ be its character space
([[def-character-and-maximal-ideal-space]]). Then:

1. each character of $A$ is a bounded linear functional of norm one, so that
   $\Delta(A)$ is a subset of the closed dual unit ball
   $B_{A^*} = \{f \in A^* : \|f\| \le 1\}$;
2. the pointwise-evaluation topology of $\Delta(A)$ is the subspace topology
   induced by the weak-star topology $\sigma(A^*,A)$;
3. $\Delta(A)$ is a weak-star closed subset of $B_{A^*}$;
4. $\Delta(A)$ is nonempty, compact and Hausdorff, hence a compact Hausdorff
   space in the weak-star topology, and it is a nonempty compact Hausdorff
   subset of the dual unit ball in that topology.

The Axiom of Choice enters exactly through the ultrafilter lemma (for
Banach–Alaoglu) and through the existence of maximal ideals (for nonemptiness);
no further selection is made.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a nonzero commutative unital complex Banach algebra $A$, its dual $A^*$ with weak-star topology $\sigma(A^*,A)$, and $\Delta(A)$ with the pointwise-evaluation topology.

[L1] Characters of $A$ are unital, bounded and satisfy $|\chi(a)| \le \|a\|$ for all $a \in A$; in particular $\chi \in A^*$ with $\|\chi\| = 1$ and the evaluation maps $\chi \mapsto \chi(a)$ are the linear functionals of $A^*$ evaluated at $a$ ([[thm-characters-on-a-unital-banach-algebra-are-continuous]]).

[L2] $\chi \in \Delta(A)$ means that $\chi : A \to \mathbb C$ is nonzero, complex-linear and multiplicative; the pointwise-evaluation topology is the coarsest topology making all evaluations $\chi \mapsto \chi(a)$ continuous, and every $\chi$ satisfies $\chi(1) = 1$ by [L1] ([[def-character-and-maximal-ideal-space]]).

[L3] Under the Axiom of Choice the ultrafilter lemma holds, and under the ultrafilter lemma the closed dual unit ball $B_{X^*}$ of a real or complex normed space $X$ is weak-star compact ([[thm-ultrafilter-lemma]], [[thm-banach-alaoglu]], [[def-axiom-of-choice]]).

[L4] Since $A$ is nonzero, the zero ideal is proper, so by the maximal ideal theorem applied under the Axiom of Choice there is a maximal ideal of $A$, and every maximal ideal is the kernel of some character ([[thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] every character has $\|\chi\| = 1$, so $\Delta(A) \subseteq B_{A^*}$, and the weak-star topology on $A^*$ is by definition the topology of pointwise convergence on $A$, so on $\Delta(A)$ it induces exactly the pointwise-evaluation topology of [L2]. [L1, L2]

1.2 Write $\mathcal C := B_{A^*} \cap \{\,f : f(1) = 1\,\} \cap \bigcap_{a,b \in A} \{\,f : f(ab) = f(a)f(b)\,\}$, a subset of $B_{A^*}$. Each set displayed is weak-star closed: $\{f : f(1)=1\}$ and the sets $\{f : f(ab) = f(a)f(b)\}$ are preimages of the closed sets $\{1\}$ and $\{0\}$ under the continuous functions $f \mapsto f(1)$ and $f \mapsto f(ab) - f(a)f(b)$. Hence $\mathcal C$ is weak-star closed. [L1, L2, algebra]

1.3 The ultrafilter lemma follows from the Axiom of Choice by [L3], so $B_{A^*}$ is weak-star compact by Banach–Alaoglu. [L3]

1.4 $\Delta(A) \ne \emptyset$: by [L4] there is a maximal ideal, and it is the kernel of a character. [L4]

1.5 $\Delta(A)$ is Hausdorff in the pointwise-evaluation topology: if $\chi \ne \psi$ then there is $a \in A$ with $\chi(a) \ne \psi(a)$, and with $\varepsilon := |\chi(a)-\psi(a)|/2 > 0$ the basic evaluation-open sets $\{ \varphi : |\varphi(a) - \chi(a)| < \varepsilon \}$ and $\{ \varphi : |\varphi(a) - \psi(a)| < \varepsilon \}$ are disjoint. [L2, algebra]

2.1 $\mathcal C = \Delta(A)$: a bounded linear functional $f$ with $f(1)=1$ and $f(ab) = f(a)f(b)$ is a nonzero linear multiplicative map, that is, a character, and conversely every character lies in $B_{A^*}$ and satisfies these two equations, by [L1] and [L2]. [step 1.1, step 1.2, L1, L2]

3.1 By [step 1.2] and [step 2.1] the set $\Delta(A)$ is weak-star closed, and by [step 1.3] $B_{A^*}$ is weak-star compact; a closed subset of a compact space is compact, so $\Delta(A)$ is compact in the weak-star topology, and by [step 1.1] the same topology on $\Delta(A)$ is the pointwise-evaluation topology. [step 1.1, step 1.2, step 1.3, step 2.1]

4.1 By [step 3.1] $\Delta(A)$ is compact in the pointwise-evaluation topology, by [step 1.5] it is Hausdorff, and by [step 1.4] it is nonempty; together with [step 1.1] and [step 1.2] this proves all four claims. [step 1.1, step 1.4, step 1.5, step 3.1] ∎

## Remarks

- **Compactness is a weak-star statement.** Banach–Alaoglu is applied to $B_{A^*}$ with no completeness hypothesis on $A$; the only use of completeness is through the continuity and norm bound of characters, and the only use of commutativity is through the maximal ideal theorem.
- **Nonemptiness is not automatic.** For a commutative unital Banach algebra over $\mathbb C$ it is a consequence of Zorn; the proof does not construct a character explicitly, and the case of the zero algebra is excluded by the hypothesis that $A$ is nonzero.
- **The two topologies agree on $\Delta(A)$ only because characters are bounded.** Before the automatic-continuity theorem the pointwise-evaluation topology of $\Delta(A)$ is not a weak-star subspace topology, since $\Delta(A)$ is not a subset of the dual.
