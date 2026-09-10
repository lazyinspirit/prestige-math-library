---
id: cex-an-ordinary-irreducible-with-reducible-mod-p-reduction
kind: counterexample
title: "An ordinary irreducible representation can have reducible reduction modulo p"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-og-lattice-and-reduction-modulo-the-maximal-ideal, rem-maschke-failure-in-defining-characteristic, ex-reducing-an-integral-lattice-for-s-three]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local modular-system and witness repair; target and direct supplier proofs read; targeted precheck/rendercheck. No independent judgment or whole-closure certification."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Leonard Tomczak, Local Fields lecture notes (2022), cyclotomic extension example, p.31"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/LF_Notes.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement refuted

Reducing an ordinary irreducible lattice modulo $p$ always preserves
irreducibility.

## Facts & Assumptions

**Given:** The splitting $3$-modular system $(K,\mathcal O,k)=(\mathbb Q_3(\zeta_3),\mathbb Z_3[\zeta_3],\mathbb F_3)$ and lattice $L=\{(a,b,c)\in\mathcal O^3:a+b+c=0\}$ from [[ex-reducing-an-integral-lattice-for-s-three]], where $\zeta_3$ is a primitive cube root of unity. The maximal ideal is $\mathfrak m=(1-\zeta_3)$; reduction is modulo $\mathfrak m$, not the ideal $(3)$ of this ramified valuation ring.

[F1] Reduction modulo the maximal ideal produces a $kG$-module
([[def-og-lattice-and-reduction-modulo-the-maximal-ideal]]).

[L1] The defining-characteristic page route allows reducibility after reduction
([[rem-maschke-failure-in-defining-characteristic]]).

[L2] The specified triple is a splitting $3$-modular system; $L$ has basis $(1,0,-1),(0,1,-1)$ and its reduction is the coordinate-sum-zero plane in $k^3$, containing the nonzero invariant vector $(1,1,1)$
([[ex-reducing-an-integral-lattice-for-s-three]]).

## Counterexample

**Proof technique:** direct.

1.1 Extending scalars gives $V=K\otimes_{\mathcal O}L=\{(a,b,c)\in K^3:a+b+c=0\}$ with the same two basis vectors. If $W\subseteq V$ is a nonzero invariant subspace, choose $0\ne v\in W$. Its coordinates cannot all agree, since $3a=0$ implies $a=0$ in characteristic zero. For unequal coordinates $v_i,v_j$, subtracting the image of $v$ under the transposition $(ij)$ gives $(v_i-v_j)(e_i-e_j)\in W$. Thus $e_i-e_j\in W$, and permuting coordinates gives all differences, which span $V$. Hence $W=V$ and $V$ is irreducible. [given, L2, choose, algebra]

2.1 By [F1] and [L2], reducing $L$ modulo $\mathfrak m$ gives a two-dimensional $kS_3$-module $\overline L$. The vector $(1,1,1)$ is the reduction of $(1,1,-2)\in L$ and spans a nonzero proper invariant line, so $\overline L$ is reducible. The residue characteristic is $3$, which divides $|S_3|=6$, consistent with [L1]. [F1, L1, L2, step 1.1]

3.1 Therefore an ordinary irreducible representation can have reducible reduction modulo $p$, refuting the statement. [step 1.1, step 2.1] ∎
