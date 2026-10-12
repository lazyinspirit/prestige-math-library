---
id: prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators
kind: proposition
title: "The QG Fock-crystal arrows are the modular good-node operators"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-symmetric-group-level-one-residue-and-partition-label-convention,
       lem-level-one-node-order-and-conjugation-dictionary,
       def-good-node-and-cogood-node-crystal-operators,
       def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-good-and-cogood-nodes-by-residue-signature-reduction,
       thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph]
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
      locator: "sec. 3.4, printed pp. 18-19 (reduced i-signature, good = leftmost surviving -, cogood = rightmost surviving +, inverse property (3.13), restricted set RP^kappa as the f-generated set); Example 3.2, printed p. 20 (e>0, l=1: RP^kappa = e-restricted partitions); Theorem 8.2(ii), printed pp. 37-38 (RP^kappa with e~, f~, eps, phi, wt is the highest-weight crystal of V(Lambda)); sec. 11.4, printed p. 53 (good = top normal node = removable, cogood = bottom conormal node = addable)"
    - title: "Matthew Fayers, Partition models for the crystal of the basic U_q(sl_n)-module, arXiv:0906.4129 (complete 31-page paper)"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 2.3, printed pp. 3-4 (n-restricted labels with the increasing-column model and the n-regular labels with the decreasing-column model; an explicit isomorphism between the two crystals is given by the Mullineux map); sec. 4, printed pp. 10-11 (the +-sequence reduction)"
    - title: "Bernard Leclerc, Fock space representations (complete author-hosted 38-page lecture notes)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.10, printed pp. 23-24: the node-formula coefficients q^{N^r_i} and q^{-N^l_i} (38)-(39); Exercise 15, printed p. 24 (n=2 calibration; coefficients may be negative powers while the crystal selection is defined separately)"
---
## Statement

Consider the modular reading on the one hand (the top-to-bottom residue
signature with good $=$ first surviving $-$ and cogood $=$ last surviving $+$ of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]], whose
operators delete the good node and add the cogood node on $e$-restricted
labels) and the level-one Fock crystal $\tilde e^{\mathrm{QG}}_i$,
$\tilde f^{\mathrm{QG}}_i$ on the other. Conjugation
$C(\lambda) = \lambda'$ sends the modular operators on $e$-restricted
partitions onto the normalized operators of the **empty connected component** of
the QG full partition Fock crystal, with the colors negated:
$$C\,\tilde e_i\lambda = \tilde e^{\mathrm{QG}}_{-i}C\lambda, \qquad C\,\tilde f_i\lambda = \tilde f^{\mathrm{QG}}_{-i}C\lambda \qquad (\lambda\ e\text{-restricted}),$$
including the zero values: the left side is zero exactly when the right side is.
The survivor counts are the same on both sides,
$\varepsilon_i(\lambda) = \varepsilon_{-i}(\lambda')$ and
$\varphi_i(\lambda) = \varphi_{-i}(\lambda')$, and the weight transforms by the
diagram reflection, $\operatorname{wt}(\lambda') = \tau(\operatorname{wt}(\lambda))$.
With the transported full module $F_{\mathrm{sym}}$ of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]], the
modular signatures likewise give its normalized operators on **all** partitions
(the transported operators $J^{-1}\tilde e^{\mathrm{QG}}_{-i}J$,
$J^{-1}\tilde f^{\mathrm{QG}}_{-i}J$), and the restricted subset of that full
crystal is its basic component. In both conventions good means removable
(deletion, $\tilde e$) and cogood means addable (addition, $\tilde f$): there is
no opposite naming-polarity dictionary exchanging deletion with addition.
Ordinary Chevalley coefficients, especially negative powers such as $q^{-1}$,
do not define these arrows.

## Facts & Assumptions

**Given:** A finite integer $e \ge 2$, the residue and signature conventions of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]], and
the node-order dictionary of
[[lem-level-one-node-order-and-conjugation-dictionary]].

[F1] The modular signature of an $i$-signature lists corners top to bottom,
cancels $-$ above $+$, counts $\varepsilon_i$ surviving $-$ and $\varphi_i$
surviving $+$, and selects the good removable node and the cogood addable node;
$\lambda$ is $e$-restricted if and only if $\lambda'$ is $e$-regular, and
$J M_\mu = |\mu'\rangle$ transports
$F_i^{\mathrm{sym}} = J^{-1}F_{-i}^{\mathrm{QG}}J$ and
$E_i^{\mathrm{sym}} = J^{-1}E_{-i}^{\mathrm{QG}}J$ on all partitions
([[def-symmetric-group-level-one-residue-and-partition-label-convention]]).

[F2] For every partition $\mu$ and color $i$, transposition is a
sign-preserving bijection from the top-to-bottom $i$-node list of $\mu$ to the
increasing-content $(-i)$-node list of $\mu'$, and the two reductions cancel
$-$+ and select the first surviving $-$ and the last surviving $+$; the
survivor counts agree and the selected nodes correspond under transposition
([[lem-level-one-node-order-and-conjugation-dictionary]]).

[F3] On the set of $p$-restricted partitions the partial operators
$\tilde e_i$, $\tilde f_i$ of
[[def-good-node-and-cogood-node-crystal-operators]] delete the good $i$-node
and add the cogood $i$-node, are undefined exactly when
$\varepsilon_i(\mu) = 0$ respectively $\varphi_i(\mu) = 0$, satisfy
$\mu = \tilde f_i\nu \iff \nu = \tilde e_i\mu$, and lower/raise the rank by
one; at most one good and one cogood node occur per residue
([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]). Good is a
removable node and cogood is an addable node.

[F4] The Fock-space node combinatorics uses the reference order of increasing
content and reads the selection as: cancel $-+$, the first surviving $-$ is the
good node for $\tilde e_i$ (a removable node) and the last surviving $+$ is the
cogood node for $\tilde f_i$ (an addable node); a missing chosen sign means the
operator is zero. This is combinatorial string data and is not a selection by
minimum ordinary Chevalley exponent
([[def-good-and-cogood-nodes-by-residue-signature-reduction]]).

[F5] The whole level-one Fock module has crystal basis $(F_0, B_F)$ with
$F_0 = \bigoplus_{\text{all } \lambda} A_0|\lambda\rangle$; its actual normalized
Kashiwara operators remove the good normal $i$-node and add the cogood conormal
$i$-node of the reference signature, and its empty connected component is
precisely the $e$-regular partitions
([[thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph]]).

## Proof

**Proof technique:** direct.

1.1 For every partition $\mu$ and every color $i$, the selection operations of the two readings correspond under transposition. By [F2] the top-to-bottom $i$-node word of $\mu$ equals the increasing-content $(-i)$-node word of $\mu'$ position by position, with the same signs, so the reduced survivor words coincide; consequently $\varepsilon_i(\mu) = \varepsilon_{-i}(\mu')$ and $\varphi_i(\mu) = \varphi_{-i}(\mu')$, and if $\varepsilon_i(\mu) > 0$ then the good $i$-node of $\mu$ is the transposed node of the good $(-i)$-node of $\mu'$, while if $\varphi_i(\mu) > 0$ then the cogood $i$-node of $\mu$ is the transposed node of the cogood $(-i)$-node of $\mu'$. In particular $\varepsilon_i(\mu) = 0$ if and only if $\varepsilon_{-i}(\mu') = 0$. [given, F2]

1.2 There is no naming-polarity swap between the two conventions: in the modular reading the good node is by definition removable and the cogood node addable ([F1]), in the $p$-restricted operator definition the good node is removable and the cogood node addable ([F3]), and in the Fock-space reading the good node is the surviving $-$, hence removable, while the cogood node is the surviving $+$, hence addable ([F4]); the normalized Fock operators remove the good node and add the cogood node ([F5]). Hence both dictionaries compare a deletion with a deletion and an addition with an addition, and the only change is the color reflection $i \mapsto -i$. [given, F3, F4, F5]

2.1 The transported normalized operators on $F_{\mathrm{sym}}$ are given on all partitions by the modular signature rule. Let $\tilde e^{\mathrm{sym}}_i := J^{-1}\tilde e^{\mathrm{QG}}_{-i}J$ and $\tilde f^{\mathrm{sym}}_i := J^{-1}\tilde f^{\mathrm{QG}}_{-i}J$, where $\tilde e^{\mathrm{QG}}$, $\tilde f^{\mathrm{QG}}$ are the normalized operators of [F5], with the convention that an operator is zero where undefined. On $M_\mu = J^{-1}|\mu'\rangle$ the operator $\tilde e^{\mathrm{sym}}_i$ removes, by [F4]-[F5], the node of $\mu'$ whose residue is $-i$ and which is the good $(-i)$-node of $\mu'$; by step 1.1 this node is the transpose of the modular good $i$-node of $\mu$, so $\tilde e^{\mathrm{sym}}_i M_\mu = M_{\mu\setminus A}$ where $A$ is the modular good $i$-node, and it is zero exactly when $\varepsilon_i(\mu) = 0$; the same argument with $+$ in place of $-$ gives $\tilde f^{\mathrm{sym}}_i M_\mu = M_{\mu \cup B}$ for the modular cogood $i$-node $B$, zero exactly when $\varphi_i(\mu) = 0$. Thus the modular signature of the Definition gives the normalized operators of the transported full crystal on all partitions. [given, F4, F5, step 1.1]

3.1 Weights transform by the reflection. By [F1] the transported weight satisfies $\operatorname{wt}(M_\mu) = \Lambda_0 - \sum_i m_i(\mu)\alpha_i$ and $m_i(\mu) = m_{-i}(\mu')$; hence $\operatorname{wt}(|\mu'\rangle) = \Lambda_0 - \sum_j m_j(\mu')\alpha_j = \Lambda_0 - \sum_j m_{-j}(\mu)\alpha_j = \tau(\operatorname{wt}(M_\mu))$, and the weight of a crystal arrow is preserved by the node moves of step 2.1 because those moves change one residue count by one on each side consistently. [given, F1, step 1.1, step 2.1]

3.2 Restricted case. Let $\lambda$ be $e$-restricted, so that $\lambda'$ is $e$-regular by [F1] and hence a vertex of the empty component of the full Fock crystal by [F5], on which the operators $\tilde e^{\mathrm{QG}}$, $\tilde f^{\mathrm{QG}}$ of [F5] act. By step 2.1 applied at $\mu = \lambda$, the modular operator $\tilde e_i$ on $\lambda$ (delete the good $i$-node, zero if $\varepsilon_i(\lambda) = 0$) is intertwined with $\tilde e^{\mathrm{QG}}_{-i}$ on $\lambda'$: $C\,\tilde e_i\lambda = \tilde e^{\mathrm{QG}}_{-i}C\lambda$, and likewise $C\,\tilde f_i\lambda = \tilde f^{\mathrm{QG}}_{-i}C\lambda$, both sides being zero together by the count agreement of step 1.1. Since transposition is a bijection from the $e$-restricted onto the $e$-regular labels and [F5] identifies the latter precisely as the vertex set of the empty component, the conjugation of the modular restricted graph is exactly that empty component, with colors negated; for $e = p$ prime the modular side is the operator system of [F3], and in general it is the reading fixed in [F1]. [given, F1, F5, step 1.1, step 2.1]

4.1 Finally, the arrows are not read off from ordinary Chevalley coefficients. The selection is the signature reduction of [F4], and [F4]-[F5] record that a pole or a unique Chevalley term does not determine the crystal arrow; the transported operator $\tilde e^{\mathrm{sym}}_i$ of step 2.1 is the normalization inherited from $\tilde e^{\mathrm{QG}}_{-i}$, not the transported Chevalley operator $E_i^{\mathrm{sym}} = J^{-1}E_{-i}^{\mathrm{QG}}J$, whose coefficients (such as $q^{-1}$ from the formulas of Leclerc (38)-(39)) differ from the arrow data. [given, F4, F5, step 2.1] ∎
