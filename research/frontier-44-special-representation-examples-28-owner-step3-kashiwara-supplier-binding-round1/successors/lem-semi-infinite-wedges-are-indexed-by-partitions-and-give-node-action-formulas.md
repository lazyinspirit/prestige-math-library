---
id: lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas
kind: lemma
title: "Semi-infinite wedges are indexed by partitions and the action gives the node formulas"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 12
deps: [thm-normally-ordered-q-wedges-form-a-basis,
       def-partition-young-diagram-and-conjugate-partition,
       def-removable-and-addable-nodes-of-a-partition,
       def-semi-infinite-q-wedge-fock-space-and-q-adic-topology,
       lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.8-3.10, printed pp. 22-24: the induced action on q-wedges (35)-(36), the Fock space and the node formulas (38)-(39), Exercise 16."
    - title: "Bernard Leclerc and Jean-Yves Thibon, Canonical bases of q-deformed Fock spaces, arXiv:q-alg/9602025"
      url: "https://arxiv.org/pdf/q-alg/9602025"
      locator: "sec. 2, printed pp. 2-3: node action (3)-(4) and the q-wedge commutation relations."
    - title: "Kailash C. Misra and Tetsuji Miwa, Crystal base for the basic representation of $U_q(\\mathfrak{sl}(n))$, Comm. Math. Phys. 134 (1990), 79-88"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-134/issue-1/Crystal-base-for-the-basic-representation-of-U_qgerm-sgerm-ln/cmp/1104201614.pdf"
      locator: "sec. 2, printed pp. 80-82: the Fock space action (2.1)-(2.5) and the colored Young diagram weight formula."
---

## Statement

Keep the conventions of the charge-$M$ Fock space
[[def-semi-infinite-q-wedge-fock-space-and-q-adic-topology]]. Normal wedges are
bijective with partitions through $i_k=M+\lambda_k-k+1$; in charge $0$ the
vacuum is the empty partition. The stable finite-prefix action defines linear
endomorphisms $F_i,E_i,K_i,K_d$ of $F^{(0)}$ by

$$F_i|\lambda\rangle=\sum_{\text{addable }\gamma\text{ of residue }i}q^{A_i^r-R_i^r}\,|\lambda+\gamma\rangle,\qquad E_i|\mu\rangle=\sum_{\text{removable }\gamma\text{ of residue }i}q^{-(A_i^l-R_i^l)}\,|\mu-\gamma\rangle,$$

where for $F_i$ the counts are taken in the smaller diagram $\lambda$ and count
addable/removable $i$-nodes strictly to the right of the added node (higher
content), and for $E_i$ the counts are taken in the smaller diagram $\mu-\gamma$
and count nodes strictly to the left of the removed node (lower content), with
the removed node excluded; all sums are finite. The toral operators act by
$K_i|\lambda\rangle=q^{N_i(\lambda)}|\lambda\rangle$ with $N_i$ the
addable-minus-removable count, and $K_d|\lambda\rangle=q^{-m_0(\lambda)}|\lambda\rangle$;
the size $|\lambda|$ is a separate grading. Charge $M$ replaces the residues by
content $+M$ and $K_d$ by $\Omega_M(d)-m_0$.

## Facts & Assumptions

**Given:** The charge-$M$ Fock space with its partition basis, the finite-prefix action of the $u_m$, and the sub-diagram with smaller diagram as in the statement.

[F1] Normal wedges form a basis stable under straightening; inserting a new entry and straightening touches only indices between the inserted index and its neighbours ([[thm-normally-ordered-q-wedges-form-a-basis]]).

[F2] The stable-prefix limits exist and agree with the direct-limit operators: the connecting maps append ground tails and the deep-insertion estimates show the value is attained on a finite prefix ([[lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness]], [[def-semi-infinite-q-wedge-fock-space-and-q-adic-topology]]).

[F3] A corner cell of residue $i$ of $|\lambda\rangle$ is exactly an addable $i$-node of the smaller diagram; the bijection between normal words and partitions is $i_k=M+\lambda_k-k+1$ ([[def-removable-and-addable-nodes-of-a-partition]], [[def-partition-young-diagram-and-conjugate-partition]], [[def-semi-infinite-q-wedge-fock-space-and-q-adic-topology]]).

## Proof

**Proof technique:** evaluate the finite-prefix coproduct on a chosen entry, translate collisions into corner additions, and control the artificial boundary by renormalising the cutoff.

1.1 The bijection and finiteness of the node sums. The map $\lambda\mapsto(i_k)_{k\ge1}$ with $i_k=M+\lambda_k-k+1$ is a bijection onto normal semi-infinite words because $\lambda$ is weakly decreasing and eventually zero, and $i_k$ is strictly decreasing and eventually equal to the ground tail; a partition of size $n$ has at most $n$ addable and removable nodes, so both sums in the statement are finite. [F3, given, algebra]

2.1 The $F_i$ formula. On a prefix of length $N$ containing the support of $|\lambda\rangle$, the coproduct action of $F_i$ shifts a selected entry $i_k$ to $i_k+1$, provided $i_k\equiv i$; if $i_k+1=i_{k-1}$ the resulting term has a collision and vanishes by the wedge relations, and otherwise the shift is exactly the addition of the corner cell $(k,\lambda_k+1)$ of residue $i$ by [F3]. The coefficient is the product of the suffix $K$-eigenvalues of the finite coproduct, which is $q^{A_i^r-R_i^r}$: a frozen doubly occupied $i$-pair contributes net weight $0$, and the singly occupied $i$-pairs are exactly the other addable and removable $i$-corners, ordered by content, contributing $+1$ for each addable corner strictly to the right (higher content) of the added node and $-1$ for each removable one. [step 1.1, F1, F2, F3, algebra]

2.2 The $E_i$ formula. For $E_i$ the finite-prefix coproduct shifts an entry with $i_k\equiv i+1$ to $i_k-1$; if it collides the term is zero, and otherwise it deletes the corner cell $(k,\lambda_k)$ of residue $i$, whose smaller diagram is $\mu-\gamma$. The prefix $K$-weight contributes the addable and removable $i$-corners of $\mu-\gamma$ strictly to the left (lower content) of the removed node; the single artificial boundary pair at the cutoff contributes the reciprocal scalar $q^{-\delta_{i\equiv M-N}}$, and appending one more ground entry changes exactly this scalar to its inverse in the same way, so the renormalised operator $q^{-\delta_{i\equiv M-N}}E_i$ is cutoff-independent and defines the stable limit by [F2]. The sign is negative because $E_i$ shifts down in the wedge. [step 1.1, F1, F2, F3, algebra]

3.1 The toral and loop operators. The diagonal action of $K_i$ on a finite prefix is $q^{\#\text{addable}_i-\#\text{removable}_i}$ by the same pairing of residues into occupied and empty pairs, which is $q^{N_i(\lambda)}$; the loop operator shifts all indices by $-e$, which adds one cell to every row and increases the size by $|\lambda|+ \text{const}$ while multiplying by $q^{-1}$ per added cell of residue $0$, so $K_d|\lambda\rangle=q^{-m_0(\lambda)}|\lambda\rangle$ with $m_0$ the number of residue-$0$ cells; for general charge the residue rule is replaced by content $+M$ and $K_d$ by $\Omega_M(d)-m_0$. [step 2.1, step 2.2, F3, given, algebra]

4.1 Conclusion. Normal wedges are bijective with partitions, and the stable finite-prefix action gives the displayed finite node formulas for $F_i,E_i,K_i,K_d$ before any relation or crystal statement is invoked. [step 1.1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- The construction deliberately precedes the proof of the quantum relations: the
  node formulas are defined here and their affine relations are proved in
  [[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]].

- The artificial finite-cutoff boundary is removed by the scalar
  $q^{-\delta_{i\equiv M-N}}$ together with the duplicate-tail term; no
  two-sided-unbounded evaluation is used.
