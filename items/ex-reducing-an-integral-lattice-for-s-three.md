---
id: ex-reducing-an-integral-lattice-for-s-three
kind: example
title: "Reducing a standard integral lattice for S3 modulo 3 produces a reducible kS3-module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-og-lattice-and-reduction-modulo-the-maximal-ideal, lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Leonard Tomczak, Local Fields - Lecture Notes (2022), cyclotomic extension example"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/LF_Notes.pdf"
---

## Example

Let $\zeta_3$ be a primitive cube root of unity, let

$$(K,\mathcal O,k)=(\mathbb Q_3(\zeta_3),\mathbb Z_3[\zeta_3],\mathbb F_3),$$

and let

$$ L:=\{(a,b,c)\in\mathcal O^3:a+b+c=0\}, $$

with the natural permutation action of $S_3$. This is a splitting $3$-modular
system for $S_3$, the module $L$ is an $\mathcal O S_3$-lattice, and its
reduction modulo the maximal ideal $\mathfrak m=(1-\zeta_3)$ is reducible.

## Facts & Assumptions

**Given:** A primitive cube root $\zeta_3$, the local cyclotomic field
$K=\mathbb Q_3(\zeta_3)$ with valuation ring
$\mathcal O=\mathbb Z_3[\zeta_3]$, and the standard permutation lattice
$L\subseteq\mathcal O^3$ above.

[F1] Reduction modulo the maximal ideal sends an $\mathcal O G$-lattice to a
$kG$-module ([[def-og-lattice-and-reduction-modulo-the-maximal-ideal]]).

[L1] That reduced module is finite-dimensional over the residue field
([[lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module]]).

## Verification

**Proof technique:** direct.

1.1 The extension $K/\mathbb Q_3$ is totally ramified of degree $2$, with uniformizer $1-\zeta_3$, valuation ring $\mathcal O$, and residue field $k=\mathbb F_3$. The field $K$ splits the subgroups of $S_3$: it contains the values needed for the cyclic subgroups, and the trivial, sign, and standard representations split $S_3$. If $V$ is a simple $kS_3$-module and $g$ generates the normal subgroup $C_3$, then $(g-1)^3=g^3-1=0$, so $V^{C_3}\ne0$; normality and simplicity give $V^{C_3}=V$. Thus $V$ factors through $S_3/C_3\cong C_2$ and is trivial or sign. The same calculation handles the subgroups, so $k$ also splits all of them. Hence $(K,\mathcal O,k)$ is a splitting $3$-modular system for $S_3$. [given, algebra]

2.1 The lattice $L$ is free of rank $2$ over $\mathcal O$, with basis $(1,0,-1),(0,1,-1)$, so [F1] and [L1] give the two-dimensional $kS_3$-module $\overline L=L/\mathfrak mL$. The vector $v:=(1,1,1)\in k^3$ lies in $\overline L$ because it is the reduction of $(1,1,-2)\in L$, and it is fixed by every permutation in $S_3$. [F1, L1, step 1.1, algebra]

3.1 The nonzero line $kv\subseteq\overline L$ is therefore an $S_3$-stable proper submodule of the two-dimensional module $\overline L$. Hence $\overline L$ is reducible. [step 2.1] ∎
