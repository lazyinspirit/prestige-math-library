---
id: def-symmetric-group-level-one-residue-and-partition-label-convention
kind: definition
title: "The symmetric-group level-one residue and partition-label convention"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [def-cyclic-affine-type-a-cartan-datum, def-level-one-partition-fock-space-and-node-residues,
       def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-removable-and-addable-nodes-of-a-partition,
       def-partition-young-diagram-and-conjugate-partition,
       def-p-regular-and-p-restricted-partitions,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]
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
      locator: "sec. 2.1, printed p. 8 (the quantum characteristic e: smallest positive integer with 1+xi+...+xi^(e-1)=0, e=0 if none; e=char F when xi=1); sec. 3.4, printed pp. 18-19 (nodes ordered top to bottom, + addable / - removable, cancellation of a - above a +, normal/conormal nodes, good = topnormal, cogood = bottom conormal, inverse property (3.13)); Example 3.2, printed p. 20 (e>0, l=1: restricted set = e-restricted partitions lambda_a - lambda_(a+1) < e; e=0 case (ii)); Remark 5.5, printed p. 24 (D^mu = D(mu^t) tensor sgn for l=1, xi=1); Theorem 11.8, printed p. 54 (same-model sign/Mullineux involution by negated good-node residues)"
    - title: "Matthew Fayers, Partition models for the crystal of the basic U_q(sl_n)-module, arXiv:0906.4129 (complete 31-page paper)"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 2.3, printed pp. 3-4 (n-restricted labels lambda_a - lambda_(a+1) < n, residue c-a+nZ, the increasing-column model and the decreasing-column n-regular model with the replacement of c_1<...<c_r by c_1>...>c_r, Theorem 2.1 quoting MM Theorem 4.7: the n-restricted model with increasing column order is B(Lambda_0)); sec. 4, printed pp. 10-11 (reduction of a +/- sequence by replacing +00...0- by zeros; eps = number of -, good = position of the last -, phi = number of +, cogood = position of the first +)"
    - title: "Bernard Leclerc, Fock space representations (complete author-hosted 38-page lecture notes)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.10, printed pp. 23-24 (adding an i-cell gamma: A^r_i - R^r_i counts addable minus removable i-cells to the right of gamma; f_i|lambda> = sum q^{N^r_i}|mu> (38), e_i|mu> = sum q^{-N^l_i}|lambda> (39); Exercise 15, printed p. 24 (n=2 calibration f_0|3,1> = q^{-1}|3,2> + |3,1,1>, e_0|3,1> = q^{-2}|2,1>))"
    - title: "M. Kashiwara, T. Miwa, J.-U. H. Petersen, C. M. Yung, Perfect crystals and q-deformed Fock spaces, arXiv:q-alg/9603025 (complete 74-page paper)"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 5.2.1-5.2.5, printed pp. 35-37 (Cartan datum of A_n^(1), perfect crystal, wedge relations, and the level-one Fock space with vacuum |m> of highest weight lambda_m)"
---

## Definition

Fix a finite integer $e \ge 2$ and charge $0$, with the independent-root affine
Cartan datum, its lattices and its diagram reflection $\tau$ fixed as in
[[def-cyclic-affine-type-a-cartan-datum]]: $I = \mathbb{Z}/e\mathbb{Z}$, simple
roots $\alpha_i$, fundamental weights $\Lambda_i$, $\delta$, and
$\tau(i) = -i$. A *node* is a pair $(r,c) \in \mathbb{N} \times \mathbb{N}$, and
the *residue* of a node is $\operatorname{res}(r,c) := c - r \bmod e$; this is
the level-one, charge-$0$ specialization of the residue used in
[[def-residue-signature-normal-good-conormal-and-cogood-nodes]]. We use the
English convention (rows increase downwards) and the node language of
[[def-removable-and-addable-nodes-of-a-partition]] and
[[def-partition-young-diagram-and-conjugate-partition]].

A partition $\lambda$ is **$e$-regular** if every positive integer occurs as a
part of $\lambda$ fewer than $e$ times, and **$e$-restricted** if
$\lambda_a - \lambda_{a+1} < e$ for every $a \ge 1$, the sequence being padded
by trailing zeros; these are the prime-case notions of
[[def-p-regular-and-p-restricted-partitions]] with $e$ in place of the prime
$p$. A column of height $e$ is allowed in an $e$-restricted partition. The two
classes are exchanged by conjugation: $\lambda$ is $e$-restricted if and only if
its conjugate $\lambda'$ is $e$-regular (step 2.1 below).

**The modular (restricted) signature.** Let $\lambda$ be a partition and
$i \in I$. The $i$-nodes of $\lambda$ are its addable and removable nodes of
residue $i$; list them *top to bottom*, that is by increasing row index and then
increasing column index, obtaining $A_1,\dots,A_n$, and form the word
$\sigma = (\sigma_1,\dots,\sigma_n)$ with $\sigma_m = +$ if $A_m$ is addable and
$\sigma_m = -$ if $A_m$ is removable. Whenever $r < s$ with $\sigma_r = -$,
$\sigma_s = +$ and $\sigma_{r+1} = \dots = \sigma_{s-1} = 0$, replace
$\sigma_r,\sigma_s$ by $0$; repeat until no $-$ lies above a $+$. The survivors
are the *normal* removable and *conormal* addable $i$-nodes; write
$\varepsilon_i(\lambda)$ and $\varphi_i(\lambda)$ for their numbers. If
$\varepsilon_i(\lambda) > 0$, the *good* $i$-node is the removable node
belonging to the first surviving $-$, and $\tilde e_i\lambda := \lambda$ with
that node deleted; if $\varphi_i(\lambda) > 0$, the *cogood* $i$-node is the
addable node belonging to the last surviving $+$, and $\tilde f_i\lambda$ is
$\lambda$ with that node added (otherwise the respective partial operator is
undefined). This is Kleshchev's reduced $i$-signature at charge $0$ and level
one, with good $=$ top normal and cogood $=$ bottom conormal. **This is the
reading used for the restricted (symmetric-group) model**, in which the labels
of the level-one basic module are the $e$-restricted shapes; Fayers' equivalent
formulation reads the same list with the opposite cancellation and extracts the
last surviving $- $ and first surviving $+$, and his increasing-column model of
the $e$-restricted labels is the basic crystal $B(\Lambda_0)$.

**The linear (symmetric-group) model and the transport $J$.** Let
$$F_{\mathrm{QG}} = \bigoplus_{\lambda} \mathbb{Q}(q)\,|\lambda\rangle$$
be the charge-$0$ level-one partition Fock space with
$\operatorname{wt}(|\lambda\rangle) = \Lambda_0 - \sum_i m_i(\lambda)\alpha_i$,
where $m_i(\lambda)$ is the number of nodes of $[\lambda]$ of residue $i$, and
with the declared finite node operators $F_i$, $E_i$, $K_h$, $K_d$ and the wedge
bar $\psi$ of [[def-level-one-partition-fock-space-and-node-residues]] (the
operators act on *all* partitions). The **symmetric-group model** $F_{\mathrm{sym}}$
is the same $\mathbb{Q}(q)$-vector space with the basis relabelled
$M_\lambda := |\lambda'\rangle$; equivalently, $J : F_{\mathrm{sym}} \to F_{\mathrm{QG}}$
is the $\mathbb{Q}(q)$-linear isomorphism
$$J M_\lambda = |\lambda'\rangle \qquad (\lambda \text{ a partition}),$$
with the field map $q \mapsto q$ (not $q \mapsto q^{-1}$). Transport the
structure along $J$:
$$E_i^{\mathrm{sym}} := J^{-1} E_{-i}^{\mathrm{QG}} J, \qquad F_i^{\mathrm{sym}} := J^{-1} F_{-i}^{\mathrm{QG}} J, \qquad K_h^{\mathrm{sym}} := J^{-1} K_{\tau h}^{\mathrm{QG}} J \quad (h \in P^\vee), \qquad \psi_{\mathrm{sym}} := J^{-1} \psi J,$$
and give $M_\lambda$ the weight
$\operatorname{wt}(M_\lambda) := \Lambda_0 - \sum_i m_i(\lambda)\alpha_i$. The
transported operators are defined on the ambient basis of *all* partitions.
With $A := \mathbb{Z}[q,q^{-1}]$ and the local ring
$A_0 := \{\, f \in \mathbb{Q}(q) : f \text{ is regular at } q = 0 \,\}$, the
**standard chart** of the symmetric-group model is
$$(F_0)_{\mathrm{sym}} := \bigoplus_{\lambda} A_0\, M_\lambda ;$$
the full ambient model is indexed by all partitions, while its basic component
in this convention is carried by the $e$-restricted shapes (the comparison with
the QG model is made by the results of this page).

**Label dictionaries and boundaries.** The conjugation map $C : \lambda \mapsto \lambda'$
exchanges the $e$-restricted and the $e$-regular partitions, preserves the
addable/removable *type* of each node and negates residues; it is a comparison
map *between* the restricted and the regular models, not an involution of one
label set, and it is not the same-model sign (Mullineux) involution of
Kleshchev's Theorem 11.8, which fixes the restricted label set and negates
residues along a good-node path. In the symmetric-group regime (ground field of
characteristic $p > 0$, Hecke parameter $\xi = 1$, so that $e = p$ is prime) the
$e$-restricted partitions are the labels of the simple modules in the
dual-Specht convention and the $e$-regular partitions those of James, the two
dictionaries being related by
$D(\lambda) \cong D^{\lambda'} \otimes \operatorname{sgn}$, equivalently
$D^\mu \cong D(\mu') \otimes \operatorname{sgn}$ for $e$-regular $\mu$
([[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]);
for a general Hecke parameter the finite integer $e \ge 2$ is its quantum
characteristic (the smallest positive $e$ with $1 + \xi + \dots + \xi^{e-1} = 0$)
and need not be prime, so the general finite-$e$ crystal labels are not called
symmetric-group modules of "characteristic $e$". At quantum characteristic
$e = 0$ (no such positive integer exists, colors $\mathbb{Z}$) no finite affine
datum is present: every level-one partition is a crystal label, and no weight
formula or finite affine statement is made in this boundary.

## Facts & Assumptions

**Given:** A finite integer $e \ge 2$; the affine Cartan datum and its lattices
with the diagram reflection $\tau$, $\tau(i) = -i$, preserving the pairing
([[def-cyclic-affine-type-a-cartan-datum]]); the charge-$0$ Fock space
$F_{\mathrm{QG}}$ with basis $|\lambda\rangle$ over all partitions, weight
$\operatorname{wt}(|\lambda\rangle) = \Lambda_0 - \sum_i m_i(\lambda)\alpha_i$
and declared node operators $F_i$, $E_i$, $K_h$
([[def-level-one-partition-fock-space-and-node-residues]]); and the node
vocabulary of [[def-removable-and-addable-nodes-of-a-partition]] and
[[def-partition-young-diagram-and-conjugate-partition]].

[F1] The Young diagram of $\lambda$ is
$[\lambda] = \{(r,c) : 1 \le r \le k,\ 1 \le c \le \lambda_r\}$, its conjugate
$\lambda'$ has $j$-th part $\lambda'_j = \#\{i : \lambda_i \ge j\}$, and
transposition $(r,c) \mapsto (c,r)$ is a bijection
$[\lambda] \to [\lambda']$
([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] Removable nodes of $\lambda$ are the nodes $(a,\lambda_a)$ with
$\lambda_a > \lambda_{a+1}$; addable nodes are the nodes $(a,\lambda_a+1)$ with
$a = 1$ or $\lambda_{a-1} > \lambda_a$, together with $(k+1,1)$, where
$\lambda_{k+1} := 0$
([[def-removable-and-addable-nodes-of-a-partition]]); this includes
$\operatorname{Rem}(\varnothing) = \emptyset$ and
$\operatorname{Add}(\varnothing) = \{(1,1)\}$.

[F3] The multiplicity of the positive integer $a$ as a part of $\lambda'$ is
the number $\lambda_a - \lambda_{a+1}$ of columns of $[\lambda]$ of height
exactly $a$ ([[def-p-regular-and-p-restricted-partitions]]).

[F4] $F_{\mathrm{QG}}$ is a direct sum over all partitions with
$\operatorname{wt}(|\lambda\rangle) = \Lambda_0 - \sum_i m_i(\lambda)\alpha_i$
and $\sum_i m_i(\lambda) = |\lambda|$
([[def-level-one-partition-fock-space-and-node-residues]]); the residue of a
node is $c - r \bmod e$ and a partition is $e$-regular (resp. $e$-restricted)
exactly as in the Definition ([[def-p-regular-and-p-restricted-partitions]],
[[def-residue-signature-normal-good-conormal-and-cogood-nodes]]).

## Proof

**Proof technique:** direct.

1.1 For every $a \ge 1$ the multiplicity of the part $a$ in $\lambda'$ equals $\lambda_a - \lambda_{a+1}$. Indeed the columns of $[\lambda]$ of height at least $a$ are exactly the first $\lambda_a$ columns, because column $j$ has height $\#\{r : \lambda_r \ge j\} \ge a$ if and only if $j \le \lambda_a$; hence the columns of height exactly $a$ number $\lambda_a - \lambda_{a+1}$, and these heights are precisely the parts of $\lambda'$ by [F1]. [given, F1, F3]

1.2 Transposition of nodes: $(r,c) \in [\lambda]$ if and only if $(c,r) \in [\lambda']$, so $(r,c) \mapsto (c,r)$ is a bijection from the nodes of $\lambda$ onto the nodes of $\lambda'$. It preserves addability and removability: deleting $(r,c)$ from $[\lambda]$ leaves the diagram of a partition $\mu$ if and only if deleting $(c,r)$ from $[\lambda']$ leaves the diagram of $\mu'$, and the same argument with diagrams enlarged by one node gives addability. It negates the residue, $\operatorname{res}(c,r) = r - c = -(c-r) = -\operatorname{res}(r,c)$ in $I = \mathbb{Z}/e\mathbb{Z}$. [given, F1, F2, algebra]

1.3 Distinct corners of a partition have distinct contents. Let $x = (r,c) \ne y = (s,d)$ be addable or removable nodes with equal content $c - r = d - s$; by [F2] each is of the form $(a,\lambda_a)$ (removable) or $(a,\lambda_a+1)$ (addable, the new bottom row included via $\lambda_{k+1} = 0$). If $x$ and $y$ are both removable with $r < s$, then $\lambda_r \ge \lambda_s$ while $\lambda_r - r = \lambda_s - s$ forces $\lambda_r - \lambda_s = r - s < 0$, a contradiction. If both are addable with $r < s$, then $\lambda_r \ge \lambda_s$ while equal contents force $\lambda_r - \lambda_s = r - s < 0$, again a contradiction. If $x$ is removable and $y$ addable with $r < s$, equal contents give $\lambda_r - \lambda_s = r + 1 - s$; for $s \ge r+2$ the right side is at most $-1$, so $\lambda_r < \lambda_s$, contradicting $\lambda_r \ge \lambda_s$, and for $s = r+1$ it gives $\lambda_r = \lambda_s$, which contradicts the addability of $(s,\lambda_s+1)$, that is $\lambda_{s-1} = \lambda_r > \lambda_s$ (here $s \ge 2$ because $r \ge 1$). If $x$ is addable with smaller row $r$ than the removable $y = (s,\lambda_s)$, then $\lambda_r \ge \lambda_s$ while $\lambda_r + 1 - r = \lambda_s - s$ forces $\lambda_s - \lambda_r = s + 1 - r \ge 2$, contradicting $\lambda_r \ge \lambda_s$. All possible pairs are covered, so equal contents force $x = y$. [given, F2, algebra]

2.1 Consequently $\lambda$ is $e$-restricted, i.e. $\lambda_a - \lambda_{a+1} < e$ for all $a$, if and only if the part $a$ occurs in $\lambda'$ fewer than $e$ times, i.e. $\lambda'$ is $e$-regular: step 1.1 identifies the two lists of integers compared with $e$. For $\lambda = \varnothing$, where $\lambda_a = 0$ for all $a$, both conditions are the empty family of inequalities and both hold; for $a > k$ one has $\lambda_a - \lambda_{a+1} = 0 < e$, so the restrictedness condition is finite, and $m_i(\varnothing) = 0$ for all $i$. [given, step 1.1, F3, F4]

2.2 Step 1.2 also gives the weight bookkeeping: the transposition bijects the residue-$i$ nodes of $\lambda$ onto the residue-$(-i)$ nodes of $\lambda'$, so $m_i(\lambda) = m_{-i}(\lambda')$ for every $i$. Hence $\operatorname{wt}(|\lambda'\rangle) = \Lambda_0 - \sum_j m_j(\lambda')\alpha_j = \Lambda_0 - \sum_j m_{-j}(\lambda)\alpha_j = \tau(\operatorname{wt}(M_\lambda))$: applying the transposition of labels to the weight is the reflection $i \mapsto -i$ on the coefficients. In particular the relabelled basis vector $M_\lambda$ is a weight vector of weight $\operatorname{wt}(M_\lambda)$ for the transported toral action, since $K_h^{\mathrm{sym}} M_\lambda = J^{-1}K_{\tau h}^{\mathrm{QG}} J M_\lambda = q^{\langle \tau h, \operatorname{wt}(|\lambda'\rangle)\rangle} M_\lambda = q^{\langle h, \tau\, \operatorname{wt}(|\lambda'\rangle)\rangle} M_\lambda = q^{\langle h, \operatorname{wt}(M_\lambda)\rangle} M_\lambda$, using that $\tau$ preserves the pairing and exchanges $h_j$ with $h_{-j}$ ([[def-cyclic-affine-type-a-cartan-datum]]). [given, step 1.2, F1, F4, algebra]

2.3 The transported operators act by node moves with reflected colors. For any partition $\mu$, the QG operator $E_{-i}^{\mathrm{QG}}$ sends $|\mu\rangle$ to a linear combination of $|\mu \setminus \gamma\rangle$ over the removable nodes $\gamma$ of $\mu$ of residue $-i$, and $F_{-i}^{\mathrm{QG}}$ sends $|\mu\rangle$ to a combination of $|\mu \cup \beta\rangle$ over the addable nodes $\beta$ of $\mu$ of residue $-i$ ([[def-level-one-partition-fock-space-and-node-residues]]); conjugating by $J$ and using step 1.2, $E_i^{\mathrm{sym}}$ sends $M_\lambda$ ($J M_\lambda = |\lambda'\rangle$) to the $J^{-1}$-images of the results of removing residue-$(-i)$ removable nodes of $\lambda'$, that is, to combinations of $M_{\lambda \setminus \gamma}$ over the removable nodes $\gamma$ of $\lambda$ of residue $i$, and likewise $F_i^{\mathrm{sym}}$ adds residue-$i$ nodes of $\lambda$. Thus at the level of nodes the symmetric-group model uses the same residue labels as the modular signature of the Definition, not their negatives. [given, step 1.2, F1, F2, F4]

2.4 At quantum characteristic $e = 0$ the colors form the set $I = \mathbb{Z}$ and, by [F2] and step 1.3, each residue class contains at most one node of $\lambda$: an $i$-node is a corner of content exactly $i$, and there is at most one such corner. Hence the residue word of every color has length at most one, no cancellation can occur, and for every nonempty $\lambda$ the removable corner $(k,\lambda_k)$ of its last row is the good node of its own residue, so repeated good deletions carry $\lambda$ to $\varnothing$; consult the $e = 0$ case of the survey's level-one example, under which every level-one partition is a crystal label. No finite affine datum, charge or weight formula is asserted here. [given, step 1.3, F2]

3.1 The conjugation $C(\lambda) = \lambda'$ is a bijection from the $e$-restricted partition class onto the $e$-regular class by step 2.1, and it is not an involution of the $e$-restricted class: at $e = 3$ it sends the restricted shape $(1,1,1)$ to the non-restricted shape $(3)$, and at $e = 2$ it sends the restricted shape $(1,1,1,1)$ to the non-restricted shape $(4)$; the same-model sign (Mullineux) involution of the survey instead preserves the restricted label set and is computed by negating the residues of a good-node path inside it. In the group regime the published dictionary for conjugate-sign duality of simple labels is exactly the stated identification $D(\lambda) \cong D^{\lambda'} \otimes \operatorname{sgn}$ ([[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]). [given, step 2.1, step 1.2] ∎
