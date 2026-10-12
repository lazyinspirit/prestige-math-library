---
id: thm-kleshchev-first-level-branching-multiplicity
kind: theorem
title: "Kleshchev's first-level branching multiplicity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-signature-normal-good-conormal-and-cogood-nodes,
       prop-schur-functor-compares-first-level-branching-with-hecke-restriction,
       def-p-regular-and-p-restricted-partitions,
       thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads,
       def-restriction-induction-and-coinduction-for-group-modules,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality,
       rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
dependency_level: 13
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, On decomposition numbers and branching coefficients for symmetric and special linear groups, Proc. London Math. Soc. (3) 75 (1997) 497-558; complete 66-page author manuscript (dvips PostScript), Theorem 1.4 with its reformulation and worked examples, manuscript p. 5; Part I §§2-6 (essential and compensated subsets, normality, Corollary 5.8); Part II §§7-10 (first level, Theorems 8.6, 8.8, 8.9, Corollary 8.10, Definition 9.1, Lemma 9.2, Theorem 9.3); §11 (Propositions 11.1-11.3 and the deduction of Theorem 1.4 on pp. 64-65). Complete 66-page manuscript, SHA-256 0bbf3d69ddf20940089045c540e3d516c542118ab06644c5d26c430bedf46558"
      url: "https://darkwing.uoregon.edu/~klesh/BrIV.ps"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.4 with Theorem 11.6 and the normal-node counts, printed pp. 53-54. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Jonathan Brundan, Modular Branching Rules and the Mullineux Map for Hecke Algebras of Type A, Proc. London Math. Soc. (3) 77 (1998) 551-581; complete 34-page author manuscript, Remark 2.4(II) (the transposed-node dictionary) and Theorems 2.5-2.6, printed pp. 4-5"
      url: "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
---

## Statement

Let $k$ be a field of characteristic $p>0$ (every field is splitting for
symmetric groups, so no algebraic closedness is needed) and let $\lambda$ be
a $p$-regular partition of $n$
([[def-p-regular-and-p-restricted-partitions]]), so that $D^\lambda$ is the
simple head of the Specht module $S^\lambda_k$
([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]). Let
$A=(j,\lambda_j)$ be a removable node of $\lambda$ whose removal
$\lambda(j)$ is again $p$-regular, and call $A$ **normal** for $\lambda$ when
the transposed node $(\lambda_j,j)$ of the $p$-restricted partition
$\lambda'$ is a normal node in the sense of
[[def-residue-signature-normal-good-conormal-and-cogood-nodes]] (this is
Kleshchev's normality; it is computed in the reduced signature of the correct
residue class of $\lambda'$). Then
$$[\,D^\lambda{\downarrow}_{S_{n-1}}:D^{\lambda(j)}\,]=0$$
if $A$ is not normal, and
$$[\,D^\lambda{\downarrow}_{S_{n-1}}:D^{\lambda(j)}\,]=1+\#\{B:\ B\ \text{is a normal removable node of }\lambda\text{ strictly above }A\text{ with }\operatorname{res}(B)=\operatorname{res}(A)\}$$
if $A$ is normal. Here $\operatorname{res}$ is the residue $c-r\bmod p$ and
"above" means strictly smaller row index. Equivalently, the multiplicity is
the first-level multiplicity $\gamma(A)$ of Kleshchev 1997, so it is the
number of normal nodes of $\lambda$ weakly above $A$ in $A$'s residue class,
and $A$ is normal precisely when this number is nonzero.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, a $p$-regular partition
$\lambda\vdash n$ and a removable node $A=(j,\lambda_j)$ with $\lambda(j)$
$p$-regular.

[F1] The residue-summand decomposition of the restriction and the dictionary
between the $p$-regular and the $p$-restricted labels: $D(\mu)\cong
D^{\mu'}\otimes\operatorname{sgn}$ for $p$-restricted $\mu$, and the
transposed node dictionary of Brundan Remark 2.4(II) translates normality of
a removable node of $\lambda$ into normality of the transposed node of
$\lambda'$ in the signature sense of
[[def-residue-signature-normal-good-conormal-and-cogood-nodes]]
([[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]],
[[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]).

[F2] Apply the corrected Schur-functor comparison to the **restricted**
partition $\mu=\lambda'$, and to $\nu=\lambda(j)'$ at the lower degree.
For a stable Schur rank $N\ge n$, its first level consists of polynomial
weights with last coordinate $1$. The comparison and exactness give
$$[L_N(\mu)^1:L_{N-1}(\nu)]
  =[\operatorname{Res}D_{\mathrm M}^{\mu}:D_{\mathrm M}^{\nu}].$$
At $q=1$, the actual signed-conjugate dictionary says
$D_{\mathrm M}^{\mu}\cong D^\lambda\otimes\operatorname{sgn}_n$ and
$D_{\mathrm M}^{\nu}\cong D^{\lambda(j)}\otimes\operatorname{sgn}_{n-1}$.
Since sign restricts to sign, twisting **both** modules leaves the
multiplicity unchanged. This proves the precise group-to-first-level
transfer used below
([[prop-schur-functor-compares-first-level-branching-with-hecke-restriction]],
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]).
No Schur functor is applied to the ordinary regular label $\lambda$ as if
it were restricted.

[F3] The source's algebraic-group count is indexed by dominant weights,
not by the characteristic as a rank. In Kleshchev §11 take $N=n$,
$l=N-1$, and let $w_n(\lambda)$ be the type-$A_l$ dominant weight whose
fundamental-weight coefficients are $\lambda'_a-\lambda'_{a+1}$.
It is the weight underlying the polynomial highest weight $\mu=\lambda'$.
The lower label is $w_{n-1}(\lambda(j))$, and for $\lambda\ne(n)$
$$w_{n-1}(\lambda(j))=w_n(\lambda)-\alpha(\lambda_j,l).$$
Theorem 9.3 computes the corresponding multiplicity in the first level
restricted to $A_{l-1}$; §11, Proposition 11.2 and the deduction on printed
pp. 64-65 identify this count with the one at the removed ordinary node.
The index is the column $\lambda_j$ after conjugation, not the ordinary
row $j$ treated as an unchanged Schur label. The combinatorial recurrence
and basis results of Part I/II remain the recorded source inputs; their
full local reconstruction is not claimed by this binding repair. For
$\lambda=(n)$ the ordinary module is trivial and its sole removable-node
multiplicity is $1$, handled directly. The case $n=1$ is the trivial
restriction to $S_0$. Neither $A_{p-1}$ nor a rank determined by the
characteristic is used.

[F4] Kleshchev 1997, Theorem 1.4 and its reformulation (manuscript p. 5),
together with Corollary 5.8(ii) (manuscript p. 44) and the index identities
$\lambda_k-\lambda_j+j-k+1=B_{w_n(\lambda)}(\lambda_j,\lambda_k)$ and
$\lambda_k-\lambda_j+j-k=C_{w_n(\lambda)}(\lambda_j,\lambda_k)$ used on
manuscript pp. 64-65: the combinatorial count $\gamma(i,p)$ of [F3] equals
$1$ plus the number of normal nodes of $\lambda$ strictly above $A$ in the
same residue class when $A$ is normal, and is $0$ when $A$ is not normal.

## Proof

**Proof technique:** direct.

1.1 Reduction to the correctly labelled first level. Put
$\mu=\lambda'$ and $\nu=\lambda(j)'$. These are $p$-restricted because
both ordinary labels are $p$-regular. By [F2], the exact first-level
comparison identifies the multiplicity of $L_{N-1}(\nu)$ in
$L_N(\mu)^1$ with the multiplicity of $D_{\mathrm M}^{\nu}$ in
$\operatorname{Res}D_{\mathrm M}^{\mu}$. At $q=1$, twist both compared
modules by sign, which restricts along $S_{n-1}\subset S_n$, and use the
conjugate-label dictionary. This yields exactly
$[D^\lambda\downarrow_{S_{n-1}}:D^{\lambda(j)}]$.
The algebraic weight and removed-root indexing are those of [F3]. In
particular neither the ordinary regular label itself nor the
characteristic is substituted for a Schur label or algebraic-group rank.
[given, F1, F2, F3]

2.1 The first-level multiplicity is the combinatorial count. By the theorem recorded in [F3], the corresponding first-level multiplicity at the transposed removed node, indexed as in [F3], is the integer $\gamma(j,p)$ of Definition 3.1, which is computed by the recurrence recorded in [F3]; no Fock-space or Ariki input is used. [step 1.1, F3]

3.1 Identification of the count. By the results recorded in [F4], the count $\gamma(j,p)$ is $0$ when $A$ is not normal and equals $1+\#\{B:B\text{ normal removable node of }\lambda\text{ strictly above }A,\ \operatorname{res}(B)=\operatorname{res}(A)\}$ when $A$ is normal; the two expressions of the statement both describe this integer, and the normality of $A$ is read in the reduced signature of $\lambda'$ via the transposed-node dictionary of [F1]. [step 2.1, F1, F4]

4.1 Calibration with the source's worked example. For $p=3$ and $\lambda=(5,3,2)$ the removable nodes are $(1,5)$, $(2,3)$, $(3,2)$ with residues $5-1=4\equiv1$, $3-2\equiv1$, $2-3\equiv2$; transposing gives $\lambda'=(3,3,2,1,1)$, in which the nodes $(3,2),(5,1)$ and no further node form the normal $2$-class, so the normal nodes of $\lambda$ are $(2,3)$ and $(1,5)$, and the formula gives multiplicities $2$ (for $(2,3)$, with one normal node above it) and $1$ (for $(1,5)$); the node $(3,2)$ is not normal and contributes $0$. This reproduces the multiplicities $1,2,0$ recorded in the source (manuscript p. 5) for the nodes $(1,5),(2,3),(3,2)$. [step 3.1, F1, F4]

5.1 Conclusion. Steps 1.1, 2.1 and 3.1 give $[D^\lambda\downarrow_{S_{n-1}}:D^{\lambda(j)}]=0$ for non-normal $A$ and the displayed count for normal $A$, and step 4.1 checks the normalization against the source's example. The reduction of step 1.1 uses only the $q=1$ specialization of the Schur-functor comparison; the combinatorial inputs [F3] and [F4] are the recorded content of Kleshchev 1997, whose Part I/II arguments are cited by exact locators and not replaced by a weaker statement. [step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **Dependency status.** The comparison of step 1.1 consumes the in-run
  suppliers of
  `prop-schur-functor-compares-first-level-branching-with-hecke-restriction`;
  those batch-20 items are flagged in the pair report with their consuming
  steps, and the decision of the present item remains escalated until they
  are authored and their use here is reconciled.
- **Recorded source inputs.** Steps 2.1 and 3.1 record Kleshchev 1997
  Theorems 9.3 and 1.4 with the Part I combinatorics by exact locator; a
  fully local re-derivation of Part I/II is not claimed in this item.
- **No Fock input.** Neither the Fock-space identification nor the
  cellular/crystal label comparison
  ([[rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels]])
  is used.
