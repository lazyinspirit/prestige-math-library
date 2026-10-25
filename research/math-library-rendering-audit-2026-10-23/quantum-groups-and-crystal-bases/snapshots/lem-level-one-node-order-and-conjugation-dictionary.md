---
id: lem-level-one-node-order-and-conjugation-dictionary
kind: lemma
title: "Residue-node reading orders and the conjugation dictionary"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-symmetric-group-level-one-residue-and-partition-label-convention,
       def-the-node-order-and-n-i-exponents-for-fock-space,
       def-good-and-cogood-nodes-by-residue-signature-reduction,
       def-removable-and-addable-nodes-of-a-partition,
       def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. AMS 47 (2010) 419-481, arXiv:0909.4844 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "sec. 3.4, printed p. 19: the addable and removable i-nodes A_1,...,A_n are ordered so that A_m is above A_(m+1) for each m (increasing row index), the reduced i-signature cancels a - above a + with zeros between, and the good node is the leftmost surviving - while the cogood node is the rightmost surviving +"
    - title: "Matthew Fayers, Partition models for the crystal of the basic U_q(sl_n)-module, arXiv:0906.4129 (complete 31-page paper)"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 2.3, printed pp. 3-4 and sec. 4, printed pp. 10-11: the n-restricted model orders the i-nodes by increasing column c_1<...<c_r and the n-regular model by decreasing column c_1>...>c_r, with the same reduction rule (replace +00...0- by zeros, good = position of the last -, cogood = position of the first +)"
---

## Statement

Fix a finite integer $e \ge 2$, a partition $\lambda$ and $i \in I = \mathbb{Z}/e\mathbb{Z}$,
and work in the residue, node and signature conventions of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]].

1. **Order.** Let $x = (r,c)$ and $y = (s,d)$ be distinct addable or removable
   nodes of $\lambda$ of the same residue $i$. If $r < s$ then $c > d$ and
   the contents satisfy $c - r > d - s$. Consequently, on the $i$-node list,
   top to bottom (increasing row index) is the same as decreasing content and
   the same as decreasing column, while bottom to top is increasing content
   and increasing column; moreover two distinct $i$-nodes never share a row
   and never share a column.
2. **Conjugation.** Transposition of diagrams, $\lambda \mapsto \lambda'$,
   sends the $i$-nodes of $\lambda$ bijectively onto the $(-i)$-nodes of
   $\lambda'$, preserving the addable/removable type of every node, and sends
   the top-to-bottom $i$-node list of $\lambda$ to the bottom-to-top, that is
   increasing-content, $(-i)$-node list of $\lambda'$, with the same sign word.
3. **Dictionary.** Consequently the modular reduction of the top-to-bottom
   $i$-signature of $\lambda$, with its good $=$ first surviving $-$ deletion
   and cogood $=$ last surviving $+$ addition, selects exactly the transposed
   nodes of the reduction of the increasing-content $(-i)$-signature of
   $\lambda'$, with the same cancellation rule $-+$ and the same first
   surviving $-$ and last surviving $+$; reversing the latter list turns this
   into the decreasing-content rule $+-$ with good $=$ last surviving $-$ and
   cogood $=$ first surviving $+$. Both descriptions select the same actual
   nodes of $\lambda'$.

The dictionary is purely combinatorial and applies to every partition as a
signature computation; no restriction on $\lambda$ is used, and the restriction
of the modular and Fock crystals to their basic label sets is imposed
separately.

## Facts & Assumptions

**Given:** A finite integer $e \ge 2$, a partition $\lambda$ (padded by $\lambda_a = 0$ for $a > k$, where $k$ is the number of parts), and $i \in I = \mathbb{Z}/e\mathbb{Z}$. Write $\operatorname{cont}(x) = c - r$ for the content of a node $x = (r,c)$.

[F1] Removable nodes of $\lambda$ are exactly the nodes $(a,\lambda_a)$ with $\lambda_a > \lambda_{a+1}$; addable nodes are exactly the nodes $(a,\lambda_a+1)$ with $a = 1$ or $\lambda_{a-1} > \lambda_a$, including the new bottom row $(k+1,1)$; a node $(a,\lambda_a+1)$ is addable if and only if $\lambda_{a-1} > \lambda_a$ with $\lambda_0 := \infty$ ([[def-removable-and-addable-nodes-of-a-partition]]). In particular every corner is of one of the two displayed forms, and $\lambda$ is weakly decreasing.

[F2] The $i$-nodes of a partition are its addable and removable nodes of residue $i$, and the modular signature of [[def-symmetric-group-level-one-residue-and-partition-label-convention]] lists them top to bottom (increasing row index, then increasing column index), forms the word $\sigma$ with $+$ for addable and $-$ for removable, repeatedly replaces a $-$ that lies above a $+$ with only cancelled entries between them by zeros, and reads $\varepsilon$ (number of surviving $-$), $\varphi$ (number of surviving $+$), the good node (removable node of the first surviving $-$) and the cogood node (addable node of the last surviving $+$).

[F3] The reference order of the Fock-space node combinatorics lists the addable and removable nodes of a fixed residue by **increasing content**, and reads the finite signature selection in that order: cancel $-+$ and select the first surviving $-$ and the last surviving $+$ ([[def-the-node-order-and-n-i-exponents-for-fock-space]], [[def-good-and-cogood-nodes-by-residue-signature-reduction]]).

[F4] Transposition $(r,c) \mapsto (c,r)$ is a bijection $[\lambda] \to [\lambda']$ that carries removable nodes to removable nodes and addable nodes to addable nodes, and $\operatorname{cont}(c,r) = r - c = -\operatorname{cont}(r,c)$; the conjugate partition is $e$-regular if and only if $\lambda$ is $e$-restricted ([[def-symmetric-group-level-one-residue-and-partition-label-convention]], [[def-partition-young-diagram-and-conjugate-partition]]).

## Proof

**Proof technique:** direct.

1.1 We prove the order claim by a case distinction on the two types. Let $x = (r,c)$, $y = (s,d)$ be corners of the same residue with $r < s$. Case both removable: $c = \lambda_r$, $d = \lambda_s$ and $\lambda_r \ge \lambda_s$; if $\lambda_r = \lambda_s$ then $\lambda_{r+1} \ge \lambda_s = \lambda_r$ (weak decrease, and $r+1 \le s$), contradicting $\lambda_r > \lambda_{r+1}$ from [F1], so $c = \lambda_r > \lambda_s = d$. Case both addable: $c = \lambda_r+1$, $d = \lambda_s+1$, and if $\lambda_r = \lambda_s$ then $\lambda_{s-1} = \lambda_r = \lambda_s$ (as $r \le s-1$, weak decrease gives $\lambda_{s-1} \le \lambda_r$, while $\lambda_{s-1} \ge \lambda_s$), contradicting the addability condition $\lambda_{s-1} > \lambda_s$ of [F1]; hence $c = \lambda_r+1 > \lambda_s+1 = d$. Case $x$ removable and $y$ addable: $c = \lambda_r$ and $d = \lambda_s+1$; addability of $y$ gives $\lambda_{s-1} > \lambda_s$. If $s \ge r+2$, then $\lambda_r \ge \lambda_{s-1} \ge \lambda_s+1 = d$; equality $\lambda_r = d$ would force $\lambda_{r+1} \ge \lambda_{s-1} \ge d = \lambda_r$ (as $r+1 \le s-1$), contradicting removability $\lambda_r > \lambda_{r+1}$, so $c = \lambda_r > d$. If $s = r+1$, then $\lambda_r = \lambda_{s-1} > \lambda_s = d-1$, so $\lambda_r \ge d$; equality $\lambda_r = d$ would give $\operatorname{cont}(x) - \operatorname{cont}(y) = (c-d) + (s-r) = 1$, and equal residues would force $e \mid 1$, impossible for $e \ge 2$; hence $c > d$ in this case too. Case $x$ addable and $y$ removable: $c = \lambda_r+1$ and $d = \lambda_s \le \lambda_r$, so $c > d$. In every case $c > d$, and then $\operatorname{cont}(x) - \operatorname{cont}(y) = (c-d) + (s-r) > 0$: both the column index and the content strictly decrease along increasing row index. [given, F1]

1.2 The reduction of [F2] is independent of the order of its replacements. Call a pair $(j,i)$ with $j<i$ a valid pair of a word $w \in \{-,0,+\}^n$ if $w_j = -$, $w_i = +$ and all entries strictly between are $0$, and reduce $w$ greedily by scanning left to right, pushing each encountered $-$ and, at each $+$, cancelling it with the most recently pushed uncancelled $-$ if there is one, leaving the $+$ as a survivor otherwise; the scan is deterministic. If $(j,i)$ is a valid pair, then the scan of $w$ cancels the $+$ at $i$ with the $-$ at $j$: no entry strictly between $j$ and $i$ is nonzero, so at time $i$ the position $j$ is still uncancelled and is the most recent uncancelled $-$. Consequently passing from $w$ to the word $w^{\mathrm{c}}$ that is $w$ with positions $j,i$ set to $0$ yields the same scan pairing on all remaining positions: the stack contents before $j$ and after $i$ agree, and no decision is taken at $j$ or $i$ in $w^{\mathrm{c}}$. By induction on the number of replacements, every word reachable from $w$ by replacements has the same scan survivors as $w$, so every maximal reduction ends in the scan reduced word and that word is unique; in particular $\varepsilon$, $\varphi$ and the surviving nodes of [F2] are well defined. [given, F2]

2.1 Two distinct $i$-nodes of $\lambda$ share neither a row nor a column. Same row: the only corners in a row $r$ are the removable node $(r,\lambda_r)$ and, when it is addable, the node $(r,\lambda_r+1)$, whose columns differ by $1$; equal residues would force $e \mid 1$, impossible for $e \ge 2$, and a node is not repeated. Same column $d$: if both nodes are removable, $(r,\lambda_r)$ and $(s,\lambda_s)$ with $\lambda_r = \lambda_s = d$ and $r < s$, then $\lambda_{r+1} \ge \lambda_s = \lambda_r$ contradicts $\lambda_r > \lambda_{r+1}$; if both are addable, $(r,\lambda_r+1)$ and $(s,\lambda_s+1)$ with $\lambda_r = \lambda_s = d-1$ and $r < s$, then $\lambda_{s-1} \le \lambda_r = \lambda_s$ and $\lambda_{s-1} \ge \lambda_s$ give $\lambda_{s-1} = \lambda_s$, contradicting addability at row $s$; if $(r,\lambda_r)$ is removable and $(s,\lambda_s+1)$ addable with $\lambda_r = \lambda_s+1$ and $r < s$, then removability gives $\lambda_{r+1} \le \lambda_s$, while $s \ge r+2$ would give $\lambda_{r+1} \ge \lambda_{s-1} > \lambda_s$, that is $\lambda_{r+1} \ge \lambda_s+1$, a contradiction; hence $s = r+1$, and then the two contents differ by exactly $1$, because $\operatorname{cont}(s,\lambda_s+1) = \lambda_s+1-s = \lambda_r-(r+1) = \operatorname{cont}(r,\lambda_r)-1$, so equal residues would again force $e \mid 1$, impossible; finally the opposite mixed orientation is impossible because addability of $(r,d)$ would give $\lambda_r = d-1 < d = \lambda_s \le \lambda_r$ for $r<s$. [given, F1, step 1.1]

2.2 Conjugation reverses the reading order and preserves the signs. By [F4] transposition sends the $i$-nodes of $\lambda$ bijectively onto the $(-i)$-nodes of $\lambda'$, preserving addable/removable type, and negates contents. If $x_1,\dots,x_n$ is the top-to-bottom $i$-node list of $\lambda$, then by step 1.1 the contents $\operatorname{cont}(x_m)$ strictly decrease in $m$, so the contents of the images $x_m'$ strictly increase in $m$; by step 1.1 applied to $\lambda'$, increasing content is exactly bottom to top on the $\lambda'$ corner list. Hence $x_1',\dots,x_n'$ is the bottom-to-top $(-i)$-node list of $\lambda'$, and its sign word equals the sign word of $x_1,\dots,x_n$ because transposition preserves the type of every node. [given, F4, step 1.1]

3.1 By step 2.2 the two words being reduced are identical: the modular signature of $\lambda$ at residue $i$ lists $x_1,\dots,x_n$ top to bottom, and the reference order of [F3] applied to $\lambda'$ at residue $-i$ lists $x_1',\dots,x_n'$ by increasing content, which is the same sequence of signs. Both rules cancel $-+$ and select the first surviving $-$ as good and the last surviving $+$ as cogood, so their survivor patterns coincide position by position, and the selected node of $\lambda$ is the transposed node of the selected node of $\lambda'$: the good (removable) $i$-node of $\lambda$ transposes to the first-surviving-$-$, hence good, removable $(-i)$-node of $\lambda'$, and the cogood (addable) $i$-node transposes to the last-surviving-$+$, hence cogood, addable $(-i)$-node of $\lambda'$. The survivor counts also agree, $\varepsilon_i(\lambda) = \varepsilon_{-i}(\lambda')$ and $\varphi_i(\lambda) = \varphi_{-i}(\lambda')$ in the two readings. [given, F3, F4, step 1.2, step 2.2]

4.1 Reversing a word exchanges the two descriptions. Cancelling a $-+$ pair of a word $w$ amounts to cancelling the corresponding $+-$ pair of the reversed word $w^{\mathrm{R}}$; the first surviving $-$ of $w$ is the last surviving $-$ of $w^{\mathrm{R}}$, and the last surviving $+$ of $w$ is the first surviving $+$ of $w^{\mathrm{R}}$. Applying this to the increasing-content $(-i)$-signature of $\lambda'$ rewrites the dictionary of step 3.1 in the decreasing-content form: cancel $+-$, delete at the last surviving $-$ and add at the first surviving $+$. Both forms describe one and the same reduction and select the same actual nodes of $\lambda'$, and by step 3.1 the same nodes of $\lambda$ after transposition. [given, F3, step 3.1]

5.1 No hypothesis on $\lambda$ beyond the corner combinatorics was used: steps 1.1 and 2.1 hold for every partition, and steps 1.2-4.1 are computations on the resulting sign words. The modular and reference readings therefore agree as signature computations on all partitions, and only the later restriction of the two models to their basic label sets selects a connected component from them. [given, step 3.1, step 4.1] ∎
