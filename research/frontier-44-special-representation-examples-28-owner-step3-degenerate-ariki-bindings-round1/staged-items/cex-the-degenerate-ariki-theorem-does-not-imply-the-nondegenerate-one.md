---
id: cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one
kind: counterexample
title: "The degenerate Ariki theorem does not imply the nondegenerate one"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 43
deps: [thm-degenerate-ariki-categorification,
       rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges,
       def-degenerate-cyclotomic-hecke-algebra,
       def-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, Invent. Math. 178 (2009) 451-484 (complete 32-page arXiv v4 article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Section 1 (printed pp. 3-4), Corollary 2 and the following paragraph: generic $q$ isomorphic to the rational degeneration, the remark on Ariki's generic theorem, the grading of Corollary 1 and the Main Theorem's type $A^{(1)}_{e-1}$ quiver for $e>0$; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Introduction (printed pp. 1-3): the nondegenerate setting at a primitive $e$-th root of unity with $\\hat{\\mathfrak{sl}}_e$ and the generic setting with $\\mathfrak{gl}_\\infty$, as distinct from the degenerate setting used here; complete passage read."
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations (complete 74-page lecture notes)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
      locator: "Section 11.2-11.3, Definition 11.3 (printed p. 46): the generic Hecke algebra presentation $T_s^2=(q_s-1)T_s+q_s$ used for the $v=-1$ specialization; passage read."
verification:
  precheck: pass
---

## Statement refuted

**Refuted claim:** from the degenerate categorification theorem
([[thm-degenerate-ariki-categorification]]) together with the isomorphism
$H^\Lambda_d\cong H^\Lambda_{\xi,d}$ between the degenerate and nondegenerate
cyclotomic Hecke algebras, one may conclude the Ariki categorification theorem
for $H^\Lambda_{\xi,d}$ at every parameter $\xi$.

This is false, for the three reasons recorded in
[[rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges]]:
the isomorphism $H^\Lambda_d\cong H^\Lambda_{\xi,d}$ is available only for $\xi$
*not* a root of unity (the generic case), where the source states that Ariki's
generic theorem is equivalent to the degenerate theorem, and there is no
isomorphism statement at a root of unity; already at level one the two
parameter regimes have different algebra structure, the root-of-unity
specialization $H_{-1}(2)$ having a nonzero radical while the degenerate
level-one quotient is the semisimple group algebra $\mathbb C[S_2]$; and at a
root of unity of order $e$ the nondegenerate theorem concerns the affine type
$A^{(1)}_{e-1}$ Fock space, residues modulo $e$ and graded canonical-basis
coefficients, none of which occur in the degenerate data. Here $\xi$ is the
quadratic Hecke parameter $v$ of the published generic presentation and its
cyclotomic parameters are $Q_j=\xi^{m_j}$; at level one and degree two the
witness compares the WHOLE two-dimensional algebras, not a small supported cut
$I=\{m\}$.

## Facts & Assumptions

**Given:** The degenerate theorem of [[thm-degenerate-ariki-categorification]]
and the parameter-range remark
[[rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges]],
together with the published generic type-$A$ Hecke presentation of
[[def-generic-type-a-hecke-algebra]] and the level-one presentation
$H_d(a)=\mathbb C[S_d]$ of [[def-degenerate-cyclotomic-hecke-algebra]]. We refute
the displayed implication.

[F1] The generic type-$A$ Hecke algebra over $A=\mathbb Z[v^{\pm1}]$ is
presented by $T_i^2=(v-1)T_i+v$, equivalently $(T_i-v)(T_i+1)=0$, with
specialization at $v_0\in R^\times$ given by the same relations with $v$
replaced by $v_0$ ([[def-generic-type-a-hecke-algebra]]).

[F2] The degenerate theorem is the theorem of
[[thm-degenerate-ariki-categorification]] at parameter one, and the only bridge
to the nondegenerate theorem is the generic isomorphism, which is not available
at roots of unity
([[rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges]]).

## Counterexample

**Proof technique:** direct.

1.1 **The available bridge and its limit.** By [F2] the only recorded comparison between the two settings is the isomorphism over a characteristic-zero field between the cyclotomic Hecke algebra at $q$ not a root of unity and its rational degeneration $q=1$; the source notes that Ariki's theorem for generic $q$ is thereby equivalent to the degenerate theorem. That statement is an algebra isomorphism in the generic regime and does not extend to specializations: at a root of unity no such isomorphism is asserted, so the proposed transport step is not available. [F2, given]

2.1 **The level-one obstruction at $\xi=-1$.** By [F1] the generic type-$A$ Hecke algebra has the quadratic relation $T^2=(\xi-1)T+\xi$, so at $\xi=-1$ the specialization over $\mathbb C$ is $\mathbb C[T]/(T^2-(-2)T+1)=\mathbb C[T]/((T+1)^2)$: a two-dimensional commutative algebra whose element $T+1$ is nonzero and squares to zero, with a nonzero radical and exactly one simple module. The degenerate level-one quotient is $H_d(a)=\mathbb C[S_d]$; at $d=2$ and any charge this is $\mathbb C[S_2]=\mathbb C\oplus\mathbb C$, semisimple with two simple modules. The two algebras are not isomorphic, because an isomorphism of unital algebras preserves the nilpotence of the radical and the number of simple modules; hence the degenerate level-one decomposition data, which is trivial, cannot determine the nondegenerate root-of-unity data. This computation uses the whole two-dimensional algebras, not the supported degree-two cut of the tower. [step 1.1, F1, algebra]

3.1 **The scope mismatch at a root of unity of order $e$.** By [F2] at a primitive $e$-th root of unity the nondegenerate theory replaces the rational degeneration by the sign-modified cyclotomic KLR algebra of affine type $A^{(1)}_{e-1}$ for $e>0$ (and type $A_\infty$ for $e=0$), with residues taken modulo $e$ and with graded canonical-basis coefficients; the quantum characteristic $e$ and the grading do not occur in the degenerate statement at all. Therefore no statement on this page supplies the nondegenerate theorem at a root of unity, even before the obstruction of step 2.1, and the generic comparison cannot be specialized. [step 1.1, F2, given]

4.1 **Conclusion.** The proposed implication asserts transport of the degenerate theorem to every nondegenerate parameter. Step 1.1 shows that the only available bridge is the generic isomorphism; step 2.1 exhibits the concrete level-one failure at $\xi=-1$ by comparing the full two-dimensional algebras, so the implication already fails at level one; and step 3.1 records the root-of-unity scope mismatch. The genuine generic equivalence and the true further results comparing the theories at roots of unity are retained as sourced statements; what is refuted is only the universal root-parameter transport. If a finite root interval is used for a specialization comparison, it must be enlarged to include the values determining the algebra, such as $m-1$ and $m+1$ in place of a supported cut $I=\{m\}$; accidental isomorphisms at particular root parameters do not supply the claimed implication. [step 2.1, step 3.1, given] ∎
