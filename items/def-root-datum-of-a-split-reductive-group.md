---
id: def-root-datum-of-a-split-reductive-group
kind: definition
title: The root datum of a split reductive group
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 27
deps: [lem-cartan-subgroups-conjugacy-and-density, def-axiom-of-choice, thm-root-subgroups-of-a-split-reductive-group, thm-weyl-group-borel-chambers, def-abstract-root-datum-and-its-weyl-group, lem-character-and-cocharacter-lattices-of-a-split-torus, lem-reductive-center-radical-and-semisimple-quotient, lem-root-datum-combinatorics, def-split-reductive-algebraic-group]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 21 (21.12), (21.35), (21.41)-(21.43); Appendix C.34; Ch. 19 (19.21)"
verification:
  precheck: n/a
---

## Definition

Let $(G,T)$ be a split reductive group over $k$ ([[def-split-reductive-algebraic-group]]). Its **root datum** is the quadruple
$$R(G,T)=(X(T),\Phi(G,T),X_*(T),\Phi^\vee(G,T)),$$
where the character and cocharacter lattices are those of [[lem-character-and-cocharacter-lattices-of-a-split-torus]], the roots are the nonzero adjoint characters, and $\Phi^\vee=\{\alpha^\vee:\alpha\in\Phi\}$ consists of the associated coroots. Its **rank** is $\operatorname{rank}_{\mathbb Z}X(T)=\dim T$. For a split Borel pair $(B,T)$, its base $\Delta(B)$ consists of roots in $\Phi^+(B)$ that are not sums of two positive roots; the pair gives the based root datum $(R(G,T),\Delta(B))$.

Assume the Axiom of Choice inherited from the root-group, Weyl and centre suppliers for the following structural assertions ([[def-axiom-of-choice]]). The coroots supplied by [[thm-root-subgroups-of-a-split-reductive-group]] are in bijection with the roots and satisfy $\langle\alpha,\alpha^\vee\rangle=2$. This quadruple is a reduced root datum in the sense of [[def-abstract-root-datum-and-its-weyl-group]], its Weyl group is canonically $W(G,T)$, and $\Delta(B)$ is a base whose nonnegative integral combinations recover $\Phi^+(B)$ ([[thm-weyl-group-borel-chambers]], [[lem-root-datum-combinatorics]]). Its semisimple rank is $|\Delta|=\operatorname{rank}G-\dim Z(G)$, and $G$ is semisimple exactly when $\mathbb Z\Phi$ has finite index in $X(T)$ ([[lem-reductive-center-radical-and-semisimple-quotient]]).

The isomorphism class of the unbased root datum is independent of the split Borel pair, but it is not asserted to have a unique abstract isomorphism: Weyl automorphisms already refute that assertion in type $A_1$. For two fixed split Borel pairs $(B,T),(B',T')$, conjugation by $g\in G(k)$ carrying the first pair to the second induces a canonical comparison of their **based** root data. If $g'$ is another such element, $g^{-1}g'$ lies in $N_G(B)\cap N_G(T)=B\cap N_G(T)=T$, by Borel self-normality and the Weyl/Borel correspondence. Conjugation by $T$ acts trivially on its character and cocharacter lattices and preserves the root-coroot labels, so the two induced comparisons agree. Thus uniqueness applies to the comparison attached to the fixed based pairs, while the unbased datum is defined up to isomorphism class. ([[thm-weyl-group-borel-chambers]], [[lem-cartan-subgroups-conjugacy-and-density]])
