---
id: ex-fock-e-and-f-actions-on-shape-two-one-at-e-three
kind: example
title: "The Fock E- and F-actions on the shape (2,1) at e = 3"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-symmetric-group-level-one-residue-and-partition-label-convention,
       prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators,
       def-the-node-order-and-n-i-exponents-for-fock-space,
       thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Bernard Leclerc, Fock space representations (complete author-hosted 38-page lecture notes)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.10, printed pp. 23-24, formulas (38)-(39) (F coefficients q^{N^r_i}, E coefficients q^{-N^l_i} with the counts in the smaller diagram) and Exercise 15, printed p. 24 (n=2: F_0|3,1> = q^{-1}|3,2> + |3,1,1>, E_0|3,1> = q^{-2}|2,1>; the calibration of the smaller-diagram exponent convention used here)"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. AMS 47 (2010) 419-481, arXiv:0909.4844 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "sec. 3.4, printed pp. 18-19 (reduced i-signature, good and cogood nodes) and sec. 11.4, printed p. 53 (good = top normal removable node, cogood = bottom conormal addable node)"
---
## Example

At $e = 3$, charge $0$, the quantum-group standard vector $|2,1\rangle$ has
$$F_0|2,1\rangle = |2,2\rangle, \qquad F_1|2,1\rangle = q^{-1}|2,1,1\rangle, \qquad F_2|2,1\rangle = |3,1\rangle,$$
$$E_0|2,1\rangle = 0, \qquad E_1|2,1\rangle = q^{-1}|1,1\rangle, \qquad E_2|2,1\rangle = |2\rangle .$$
The transported symmetric-group standard vector $M_{2,1} = J^{-1}|2,1\rangle$
(the shape is self-conjugate) satisfies
$$F_0^{\mathrm{sym}}M_{2,1} = M_{2,2}, \qquad F_1^{\mathrm{sym}}M_{2,1} = M_{2,1,1}, \qquad F_2^{\mathrm{sym}}M_{2,1} = q^{-1}M_{3,1},$$
$$E_0^{\mathrm{sym}}M_{2,1} = 0, \qquad E_1^{\mathrm{sym}}M_{2,1} = M_{1,1}, \qquad E_2^{\mathrm{sym}}M_{2,1} = q^{-1}M_{2},$$
because $J$ transposes the outputs **and** reflects the colors: the operators
used are $F_i^{\mathrm{sym}} = J^{-1}F_{-i}^{\mathrm{QG}}J$ and
$E_i^{\mathrm{sym}} = J^{-1}E_{-i}^{\mathrm{QG}}J$ of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]].

The normalized quantum-group crystal at $2,1$ has arrows
$$\tilde f_0 \to 2,2, \quad \tilde f_1 \to 2,1,1, \quad \tilde e_1 \to 1,1, \qquad \tilde f_2 = \tilde e_2 = 0,$$
while the restricted symmetric model at $2,1$ has instead
$$\tilde f_0 \to 2,2, \quad \tilde f_2 \to 3,1, \quad \tilde e_2 \to 2, \qquad \tilde f_1 = \tilde e_1 = 0 .$$
The raw vector $2,1$ is the representative of its crystal residue in each
model; an ordinary coefficient such as the $q^{-1}$ in $F_1$ or $F_2^{\mathrm{sym}}$
does not refute that, and the Chevalley action of $E_i$, $F_i$ is not their
normalized Kashiwara action.

## Facts & Assumptions

**Given:** $e = 3$, charge $0$, the shape $\lambda = (2,1)$ with standard
vector $|2,1\rangle$, the Fock node operators and formulas of
[[def-the-node-order-and-n-i-exponents-for-fock-space]] and
[[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]], and
the transport and signature conventions of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]].

[F1] Corners and residues at $(2,1)$: the addable nodes are $(1,3)$,
$(2,2)$, $(3,1)$ with residues $2, 0, 1$, and the removable nodes are
$(1,2)$, $(2,1)$ with residues $1, 2$
([[def-symmetric-group-level-one-residue-and-partition-label-convention]]).

[F2] Node formulas: for an addable $i$-node $\gamma$ of $\lambda$, the
coefficient of $|\lambda\cup\gamma\rangle$ in $F_i|\lambda\rangle$ is
$q^{N^r_i(\lambda,\gamma)}$, where $N^r_i$ counts addable minus removable
$i$-nodes of the smaller diagram (here $\lambda$) strictly to the right of
$\gamma$ (larger content, $\gamma$ excluded); for a removable $i$-node
$\gamma$ of $\mu$, the coefficient of $|\mu\setminus\gamma\rangle$ in
$E_i|\mu\rangle$ is $q^{-N^l_i}$, where $N^l_i$ counts addable minus removable
$i$-nodes of the smaller diagram $\mu\setminus\gamma$ strictly to the left of
$\gamma$; the finite signature selection is defined separately from these
coefficients ([[def-the-node-order-and-n-i-exponents-for-fock-space]]).

[F3] The node operators satisfy the affine quantum relations, so
$|2,1\rangle$ is a vector of a chosen integrable module and the displayed
module actions are the ordinary generator actions; ordinary standard
coefficients may contain $q^{-1}$ poles, and normalized Kashiwara lattice
stability is a separate statement
([[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]]).

[F4] Normalized operators: the transported normalized operators on all
partitions are the modular signature operators, and the quantum-group
normalized operators act by the reference signature (good $=$ first surviving
$-$, cogood $=$ last surviving $+$ in increasing content order), including zero
values ([[prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators]]).

## Verification

**Proof technique:** direct.

1.1 Compute the quantum-group Chevalley action at $|2,1\rangle$ from [F1] and [F2]. Color $0$: the only $0$-node is the addable $(2,2)$, whose counts vanish ($(2,2)$ is the only residue-$0$ corner), so $F_0|2,1\rangle = |2,2\rangle$ and $E_0|2,1\rangle = 0$. Color $1$: the addable $1$-node is $(3,1)$, and in $\lambda$ the unique residue-$1$ node strictly to its right is the removable $(1,2)$, so $N^r_1 = -1$ and $F_1|2,1\rangle = q^{-1}|2,1,1\rangle$; the removable $1$-node is $(1,2)$, giving $(1,1)$ as the smaller diagram, whose residue-$1$ nodes strictly to the left of $(1,2)$ reduce to the single addable $(3,1)$ (the removable $(2,1)$ of that diagram has residue $2$ and is not counted), with addable-minus-removable count $1 - 0 = 1$, so $N^l_1 = 1$ and $E_1|2,1\rangle = q^{-1}|1,1\rangle$. Color $2$: the addable $2$-node is $(1,3)$, and the only residue-$2$ node of $(2,1)$ is the removable $(2,1)$, which lies strictly to the left, so $N^r_2 = 0$ and $F_2|2,1\rangle = |3,1\rangle$; the removable $2$-node is $(2,1)$, giving the smaller diagram $(2)$, whose residue-$2$ nodes strictly to the left have count $0$, so $E_2|2,1\rangle = |2\rangle$. [given, F1, F2]

2.1 Transport along $J$ with reflected colors. Since $(2,1)' = (2,1)$, $J M_{2,1} = |2,1\rangle$. For $F_1^{\mathrm{sym}} = J^{-1}F_{-1}J = J^{-1}F_2J$ we get $J^{-1}|3,1\rangle = M_{(3,1)'} = M_{2,1,1}$; for $F_2^{\mathrm{sym}} = J^{-1}F_1J$ we get $q^{-1}J^{-1}|2,1,1\rangle = q^{-1}M_{(2,1,1)'} = q^{-1}M_{3,1}$; for $F_0^{\mathrm{sym}} = J^{-1}F_0J$ we get $J^{-1}|2,2\rangle = M_{2,2}$ since $(2,2)' = (2,2)$. For the $E$'s: $E_1^{\mathrm{sym}} = J^{-1}E_{-1}J = J^{-1}E_2J$ gives $J^{-1}|2\rangle = M_{(2)'} = M_{1,1}$, and $E_2^{\mathrm{sym}} = J^{-1}E_1J$ gives $q^{-1}J^{-1}|1,1\rangle = q^{-1}M_{(1,1)'} = q^{-1}M_2$; $E_0^{\mathrm{sym}} = J^{-1}E_0J = 0$. This is the transported table of the Example statement. [given, step 1.1]

2.2 Normalized crystal arrows. For the quantum-group reading, apply the reference signature: at color $0$ the word is $+$ at $(2,2)$, giving $\tilde f_0 \to (2,2)$; at color $1$ the increasing-content word is $+$ at $(3,1)$ then $-$ at $(1,2)$, with no cancellable pair, so the first surviving $-$ is $(1,2)$ (giving $\tilde e_1 \to (1,1)$) and the last surviving $+$ is $(3,1)$ (giving $\tilde f_1 \to (2,1,1)$); at color $2$ the increasing-content word is $-$ at $(2,1)$ then $+$ at $(1,3)$, which cancels, so $\tilde f_2 = \tilde e_2 = 0$. For the restricted symmetric model, apply the modular top-to-bottom signature: at color $0$ the word is the single $+$ at $(2,2)$, so $\tilde f_0 \to (2,2)$; at color $1$ the top-to-bottom word is $-$ at $(1,2)$ then $+$ at $(3,1)$, which cancels, so $\tilde f_1 = \tilde e_1 = 0$; at color $2$ the word is $+$ at $(1,3)$ then $-$ at $(2,1)$, with no cancellable pair, so the first surviving $-$ is $(2,1)$ (giving $\tilde e_2 \to (2)$) and the last surviving $+$ is $(1,3)$ (giving $\tilde f_2 \to (3,1)$). These are the two arrow tables of the Example statement, and they correspond under conjugation with negated colors as in [F4]. [given, F4, step 1.1]

3.1 Raw vectors versus coefficients. By [F3] the standard vectors form the residue classes of the $A_0$ chart, so $|2,1\rangle$ and $M_{2,1}$ are nonzero modulo $q$ and each represents its crystal residue. The ordinary actions computed in steps 1.1-2.1 have coefficients $1$ and $q^{-1}$, and the mismatch with step 2.2 is real: $E_2|2,1\rangle = |2\rangle \ne 0$ while $\tilde e^{\mathrm{QG}}_2(2,1) = 0$, and $F_2|2,1\rangle = |3,1\rangle \ne 0$ while $\tilde f^{\mathrm{QG}}_2(2,1) = 0$; likewise in the symmetric model $E_2^{\mathrm{sym}}M_{2,1} = q^{-1}M_2$ and $F_2^{\mathrm{sym}}M_{2,1} = q^{-1}M_{3,1}$ are nonzero while $\tilde f_2$ is the only nonzero arrow of color $2$. Hence the Chevalley coefficients do not define the arrows, exactly as stated. [given, F3, F4, step 1.1, step 2.1, step 2.2] ∎
