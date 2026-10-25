---
id: thm-complete-reducibility-of-rational-modules-in-characteristic-zero
kind: theorem
title: "Complete reducibility of rational modules in characteristic zero"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 24
deps: [lem-finite-dimensional-subcomodules-contain-elements, thm-cartier-smoothness-for-affine-groups-in-characteristic-zero, def-axiom-of-choice, def-derived-subgroup-and-solvable-algebraic-group, def-group-of-multiplicative-type-and-torus, def-radical-and-unipotent-radical-of-an-algebraic-group, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-simple-and-semisimple-representations, def-unipotent-algebraic-group, lem-multiplicative-type-groups-are-linearly-reductive, lem-reductive-center-radical-and-semisimple-quotient, lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters, thm-affine-group-scheme-faithful-finite-dimensional-representation, thm-semisimple-groups-in-characteristic-zero-are-linearly-reductive, lem-semisimplicity-of-rational-representations-descends-along-field-extensions, lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces, thm-zorn]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22, Theorem 22.42, printed pp. 478-479; Ch. 12 (12.54)"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, the complete-reducibility paragraph on scan p. 225"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
connected reductive algebraic group over a field $k$ of characteristic $0$ (in
particular, let $G$ be any split reductive group over such a field). Then the
following are equivalent: (a) $G$ is reductive; (b) every finite-dimensional
rational representation of $G$ is semisimple; (c) some faithful
finite-dimensional rational representation of $G$ is semisimple
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]],
[[def-radical-and-unipotent-radical-of-an-algebraic-group]],
[[def-simple-and-semisimple-representations]]). In particular $G$ is linearly
reductive, so every rational representation is a direct sum of simple
representations.

## Facts & Assumptions

**Given:** A connected reductive algebraic group $G$ over a characteristic-zero field $k$, its unipotent radical $U=R_u(G)$ ([[def-radical-and-unipotent-radical-of-an-algebraic-group]]) and its derived subgroup $G'=[G,G]$ ([[def-derived-subgroup-and-solvable-algebraic-group]]).

[F1] A reductive group is the almost product $G=Z(G)_tG'$ of its largest central torus and its semisimple derived group. In characteristic $0$, Cartier makes the centre smooth, so $Z(G)^\circ=Z(G)_t$. ([[lem-reductive-center-radical-and-semisimple-quotient]], [[def-group-of-multiplicative-type-and-torus]], [[thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]])

[F3] *Semisimple groups in characteristic zero.* Every finite-dimensional rational representation of a semisimple group over a characteristic-zero field is a direct sum of simple subrepresentations ([[thm-semisimple-groups-in-characteristic-zero-are-linearly-reductive]]).

[F4] *Faithful representations exist.* Every affine group scheme of finite type over a field has a faithful finite-dimensional rational representation ([[thm-affine-group-scheme-faithful-finite-dimensional-representation]]).

[F5] *Unipotent fixed vectors.* A unipotent affine algebraic group has a nonzero fixed vector in every nonzero rational representation; equivalently, every simple representation of a unipotent group is one-dimensional with trivial action ([[def-unipotent-algebraic-group]]).

[F7] *Descent of semisimplicity.* If a finite-dimensional rational module becomes semisimple after a field extension, it is semisimple over the original field ([[lem-semisimplicity-of-rational-representations-descends-along-field-extensions]]).

[F8] *Weights of a split torus.* A rational representation of a split torus decomposes as the direct sum of its character weight spaces ([[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]]).

[F9] Every finite subset of a rational representation is contained in a finite-dimensional subrepresentation. ([[lem-finite-dimensional-subcomodules-contain-elements]])

[A1] Under AC, every nonempty poset whose chains have upper bounds has a maximal element. ([[thm-zorn]])

## Proof

**Proof technique:** direct.

1.1 *(b)$\Rightarrow$(c).* By [F4] there is a faithful finite-dimensional rational representation of $G$; if (b) holds, that representation is semisimple, so (c) holds. [F4, given]

1.2 *(c)$\Rightarrow$(a).* Let $V$ be a faithful semisimple finite-dimensional representation and put $U=R_u(G)$, which is unipotent and normal in $G$. For every simple subrepresentation $S\subseteq V$ the fixed space $S^U$ is nonzero by [F5]; it is a $G$-subrepresentation because $U$ is normal, so simplicity gives $S^U=S$, that is, $U$ acts trivially on $S$. Hence $U$ acts trivially on $V$, and faithfulness forces $U=1$. Over the perfect field $k$ of characteristic $0$, triviality of the unipotent radical is exactly reductivity of $G$, so (a) holds. [F5, given]

1.3 *(a)$\Rightarrow$(b), reduce to a split central torus.* Extend scalars to an algebraic closure $\bar k$; it is enough first to prove that $V_{\bar k}$ is semisimple. Apply [F1] to $G_{\bar k}$: its largest central torus $Z(G_{\bar k})_t$ is a split torus, and its derived subgroup $G'_{\bar k}$ is semisimple. By [F8], $V_{\bar k}$ is the direct sum of the character weight spaces for $Z(G_{\bar k})_t$. Since this torus is central in $G_{\bar k}$, each weight space is stable under $G'_{\bar k}$. [F1, F8, given]

2.1 *(a)$\Rightarrow$(b), decompose the weight spaces.* Each weight space from step 1.3 is a finite-dimensional rational representation of $G'_{\bar k}$, so [F3] decomposes it into simple $G'_{\bar k}$-submodules. The central torus acts on each whole weight space by its character, so every such simple submodule is stable under both $Z(G_{\bar k})_t$ and $G'_{\bar k}$, hence under their product $G_{\bar k}$. Thus $V_{\bar k}$ is semisimple. By [F7] semisimplicity descends from $\bar k$ to $k$, proving (a)$\Rightarrow$(b) over the original field. [F3, F7, step 1.3]

3.1 Steps 1.1, 1.2 and 2.1 prove the equivalence of (a), (b) and (c). If (b) holds, an arbitrary rational representation $V$ is the union of its finite-dimensional subrepresentations by [F9], each of which is a direct sum of simple subrepresentations; the sets of simple subrepresentations whose sum is direct form a nonempty poset under inclusion. The union of a chain is again such a family, since every finite relation occurs in one chain member. By [A1] choose a maximal family with sum $S\subseteq V$. If $S\ne V$, [F9] gives a finite-dimensional subrepresentation $W$ containing a vector outside $S$. A simple summand $C$ of $W$ is then not contained in $S$, and simplicity gives $C\cap S=0$, so adjoining $C$ extends the family, a contradiction. Hence $V=S$ is a direct sum of simple representations, that is, $G$ is linearly reductive. [F9, A1, step 1.1, step 1.2, step 2.1] ∎

## Remarks

- The three implications are Milne's proof of Theorem 22.42: the structure $G=Z(G)_t\cdot G'$ reduces the reductive case to the multiplicative-type and semisimple cases, while the converse uses that a unipotent radical acts trivially on every simple module.
- The final Zorn argument extends the finite-dimensional statement to arbitrary rational representations; the Axiom of Choice is declared and used there in addition to the inherited AC premises of the structural suppliers.
