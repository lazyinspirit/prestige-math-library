---
id: ex-good-node-crystal-component-for-equals-three
kind: example
title: "The good-node crystal component of the empty partition for $e=3$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero,
       thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph,
       def-good-and-cogood-nodes-by-residue-signature-reduction,
       ex-level-one-fock-node-actions-for-partitions-up-to-three,
       def-axiom-of-choice]
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
    - title: "Kailash C. Misra and Tetsuji Miwa, Crystal base for the basic representation of $U_q(\\mathfrak{sl}(n))$, Comm. Math. Phys. 134 (1990), 79-88"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-134/issue-1/Crystal-base-for-the-basic-representation-of-U_qgerm-sgerm-ln/cmp/1104201614.pdf"
      locator: "sec. 3-4, printed pp. 82-88: the crystal graph condition and the basic representation."
    - title: "Matthew Fayers, Partition models for the crystal of the basic $U_q(\\mathfrak{sl}_n)$-module, arXiv:0906.4129"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 2, printed pp. 2-4: the $n$-regular model and the sign reduction."
    - title: "Bernard Leclerc, Fock space representations (complete author-hosted 38-page body)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.13-3.14, printed pp. 25-26: regular labels and the crystal statement."
---

## Example

At $e=3$, charge $0$, the empty component through size $3$ consists of the
partitions $\varnothing$ (rank $0$); $1$ (rank $1$); $2,11$ (rank $2$);
$3,21$ (rank $3$). Within this range the arrows are
$\varnothing\xrightarrow{f_0}1$; $1\xrightarrow{f_1}2$ and
$1\xrightarrow{f_2}11$; $2\xrightarrow{f_2}3$ and $11\xrightarrow{f_1}21$;
raising arrows are the inverses. All other additions from ranks $\le2$ vanish,
and additions from rank $3$ leaving the displayed range are omitted. The shapes
are exactly the $3$-regular shapes at these sizes. The shape $111$ is outside
the component and is a highest **crystal** vertex of weight $\Lambda_0-\delta$;
this does not say that $E_i|111\rangle=0$ as a field vector. Every shape has
the exact weight $\Lambda_0-\sum_im_i\alpha_i$.

## Facts & Assumptions

**Given:** The $e=3$ partition Fock space with its node operators and signature reduction, and the empty regular component.

[F1] Good/cogood selection is the survivor reduction of the residue signature, equivalently $f$ adds the last surviving plus and $e$ removes the first surviving minus in content order ([[def-good-and-cogood-nodes-by-residue-signature-reduction]]).

[F2] The empty component is exactly the set of $3$-regular partitions and the crystal is the good-node graph on all partitions ([[thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero]], [[thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph]]).

[F3] The ordinary node actions on the shapes of size $\le3$ are the $e=3$ table of [[ex-level-one-fock-node-actions-for-partitions-up-to-three]], and the weights are $\Lambda_0-\sum_im_i\alpha_i$; the Axiom of Choice is inherited only through the decomposition theorem used by [F2] ([[def-axiom-of-choice]]).

## Verification

1.1 The arrows. For each displayed shape and color, list the corners in decreasing content and cancel $+-$: at $11$ and color $1$ the word is $++$, and the first surviving plus is the top addition $21$; at $2$ and color $2$ the word is $++$ and the top addition is $3$, with deletion on $3$ returning $2$; at $21$ and color $2$ the word is $+-$ and cancels, so no arrow; at $21$ and color $1$ the word is $-+$, leaving $e_1\to11$ and $f_1\to211$, outside the displayed range. At $1$ the color-$1$ and color-$2$ additions give $2$ and $11$. This reproduces exactly the displayed arrows, and the raising arrows are their inverses. [F1, F3, algebra]

2.1 Completeness and the boundary $111$. The shapes reached are exactly the $3$-regular shapes of size $\le3$; every other partition of size $\le3$, namely $111$, is not $3$-regular and lies outside the empty component by [F2]. At $111$ and color $0$ the signature has one top plus and one bottom minus which cancel, and the other colors have no surviving minus, so $111$ is a highest crystal vertex; its node residues are $0,2,1$, so its weight is $\Lambda_0-\alpha_0-\alpha_1-\alpha_2=\Lambda_0-\delta$. The statement that $111$ is highest as a crystal vertex is not the statement $E_i|111\rangle=0$ for the ordinary field operators. [step 1.1, F2, F3, algebra]

3.1 Conclusion. The displayed graph is the empty component through size $3$, the shapes are the $3$-regular ones, and $111$ is the first highest crystal vertex outside it with weight $\Lambda_0-\delta$, with all weights computed from the node residues. [step 1.1, step 2.1] ∎
