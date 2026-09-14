---
id: thm-weyls-complete-reducibility-theorem
kind: theorem
title: Weyl's complete reducibility theorem
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-cartans-semisimplicity-criterion, thm-cartans-solvability-criterion, cor-semisimple-lie-algebras-are-centerless-and-perfect, prop-ideals-and-quotients-of-semisimple-lie-algebras, prop-trace-forms-are-symmetric-and-invariant, lem-orthogonal-complements-under-invariant-forms-are-ideals, def-casimir-operator-relative-to-an-invariant-form, lem-the-casimir-operator-is-basis-independent-and-intertwining, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation, cor-schurs-lemma-for-irreducible-lie-algebra-representations]
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
    - title: "Milne, Lie Algebras, Theorem 5.20"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§5, Theorem 5.20(b), printed pp. 52–53"
---

## Statement

Every finite-dimensional representation of a finite-dimensional semisimple
Lie algebra over any characteristic-zero field is completely reducible.

## Facts & Assumptions

**Given:** A finite-dimensional semisimple characteristic-zero Lie algebra
$\mathfrak g$, a finite-dimensional $\mathfrak g$-module $V$, and a
submodule $W\subseteq V$.

[L1] A representation is completely reducible when it is an algebraic direct
sum of irreducible representations; the zero representation is the empty sum
([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

[L2] A Casimir element from a nondegenerate invariant form acts as an
intertwiner ([[lem-the-casimir-operator-is-basis-independent-and-intertwining]]).

[L3] Over an algebraically closed field, every intertwiner of a finite-
dimensional irreducible module is scalar
([[cor-schurs-lemma-for-irreducible-lie-algebra-representations]]).

[L4] The Killing form of a semisimple characteristic-zero algebra is
nondegenerate ([[thm-cartans-semisimplicity-criterion]]).

[L5] A semisimple algebra is perfect
([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L6] Cartan's solvability criterion applies to the trace form of any
finite-dimensional representation ([[thm-cartans-solvability-criterion]]).

[L7] A nondegenerate invariant form and its dual bases define the Casimir
operator used below
([[def-casimir-operator-relative-to-an-invariant-form]]).

[L8] A quotient of a semisimple algebra is semisimple
([[prop-ideals-and-quotients-of-semisimple-lie-algebras]]).

[L9] Every representation trace form is symmetric and invariant
([[prop-trace-forms-are-symmetric-and-invariant]]).

[L10] The radical of an invariant symmetric form is an ideal
([[lem-orthogonal-complements-under-invariant-forms-are-ideals]]).

## Proof

**Proof technique:** Casimir splitting and induction.

1.1 We first work over an algebraically closed field. Every one-dimensional $\mathfrak g$-module is trivial: its representation kills $[\mathfrak g,\mathfrak g]$, which equals $\mathfrak g$ by [L5]. [L5, algebra]

2.1 Suppose $V/W$ is one-dimensional and $W$ is simple. Replace $\mathfrak g$ by its image $\mathfrak h$ in $\mathfrak{gl}(V)$; the kernel is an ideal and [L8] makes the quotient $\mathfrak h$ semisimple. If $\mathfrak h=0$ the action is trivial and every line complementary to $W$ is invariant, so assume $\mathfrak h\ne0$. By [L9] its trace form on $V$ is invariant and symmetric, so [L10] makes its radical an ideal; [L6] makes that radical solvable, hence zero. Form its Casimir $C$ as in [L7]. It kills the trivial quotient $V/W$, while [L2] and [L3] say that it acts on $W$ by a scalar $a$. Moreover $\operatorname{tr}_V(C)=\dim\mathfrak h$, by summing the dual-basis identities. Characteristic zero makes this nonzero, so $a\ne0$. Consequently $\ker C$ is an invariant line complementary to $W$. This, together with $W=0$, is the induction base. [L2, L3, L6, L7, L8, L9, L10, step 1.1, base]

3.1 Retain $\dim(V/W)=1$ but allow arbitrary $W$, and assume the assertion for submodules of smaller dimension. If $W$ is not simple, choose a nonzero proper submodule $W'$. By the induction hypothesis, $W/W'$ has a complement $V'/W'$ in $V/W'$. Now $V'/W'$ is one-dimensional, and another induction application splits $V'=W'\oplus L$. The line $L$ is disjoint from $W$ and complements it in $V$. [step 2.1, IH]

4.1 For general $W\subseteq V$, give $\operatorname{Hom}_k(V,W)$ the action $(x f)(v)=x f(v)-f(xv)$. Let $V_1$ consist of maps whose restriction to $W$ is a scalar multiple of the identity, and $W_1$ of maps vanishing on $W$. They are submodules and $V_1/W_1$ is one-dimensional. Step 3.1 gives an invariant line $L=kf$ complementary to $W_1$. By step 1.1, $L$ is trivial, so $f$ intertwines the action. Its restriction to $W$ is a nonzero scalar—otherwise $f\in W_1$—and after rescaling it is the identity. Therefore $\ker f$ is an invariant complement to $W$. [step 1.1, 3.1]

5.1 For an arbitrary characteristic-zero ground field, choose bases of $\mathfrak g$ and $V$ adapted to $W$, and let $k_0$ be the subfield generated over $\mathbb Q$ by their finitely many structure and action coefficients. Nondegeneracy of the Killing matrix shows that the resulting $k_0$-form of $\mathfrak g$ is semisimple. Embed the finitely generated field $k_0$ in $\mathbb C$. Steps 1.1–4.1 over $\mathbb C$ produce an equivariant projection $P:V_{\mathbb C}\to W_{\mathbb C}$ restricting to the identity. The conditions $P|_W=1$ and $P\rho(x)=\rho(x)P$ for the chosen finite bases form a finite linear system over $k_0$. Row reduction shows that consistency over $\mathbb C$ already gives a $k_0$-solution; extending it to the original field gives an invariant kernel complementary to $W$. Since $W$ was arbitrary, every submodule has an invariant complement. Induction on $\dim V$ now gives the direct-sum condition in [L1]: for $V\ne0$, choose a nonzero submodule $S$ of least dimension, which is irreducible; if $S\ne V$, split $V=S\oplus T$ and decompose the smaller module $T$ by induction. For $V=0$ the empty direct sum is [L1]'s convention. Every descent, embedding, and row reduction uses only finite data, so no choice principle is used. [L1, L4, step 3.1, discharge-induction: step 2.1, induction] ∎