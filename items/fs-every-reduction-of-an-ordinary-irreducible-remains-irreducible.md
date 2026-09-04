---
id: fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible
kind: false-statement
title: "Every reduction modulo p of an ordinary irreducible lattice stays irreducible"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-og-lattice-and-reduction-modulo-the-maximal-ideal]
proof_strategy: direct
verification:
  audited: 2026-09-04
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

## Statement

Every reduction modulo $p$ of an ordinary irreducible $\mathcal O G$-lattice
remains irreducible over $k$.

## Facts & Assumptions

**Given:** A primitive cube root $\zeta_3$, the local cyclotomic triple
$$(K,\mathcal O,k)=(\mathbb Q_3(\zeta_3),\mathbb Z_3[\zeta_3],\mathbb F_3),$$
and the standard $\mathcal O S_3$-lattice
$$L=\{(a,b,c)\in\mathcal O^3:a+b+c=0\}.$$

[F1] Reduction modulo the maximal ideal produces a $kG$-module
([[def-og-lattice-and-reduction-modulo-the-maximal-ideal]]).

## Refutation

**Proof technique:** direct.

1.1 The extension $K/\mathbb Q_3$ is totally ramified of degree $2$, with uniformizer $1-\zeta_3$, valuation ring $\mathcal O$, and residue field $k=\mathbb F_3$. The field $K$ splits the subgroups of $S_3$: it contains the values needed for the cyclic subgroups, and the trivial, sign, and standard representations split $S_3$. If $V$ is a simple $kS_3$-module and $g$ generates the normal subgroup $C_3$, then $(g-1)^3=g^3-1=0$, so $V^{C_3}\ne0$; normality and simplicity give $V^{C_3}=V$. Thus $V$ factors through $S_3/C_3\cong C_2$ and is trivial or sign. The same calculation handles the subgroups, so $k$ also splits all of them. Thus the displayed triple is a splitting $3$-modular system, and the free rank-two module $L$ is an $\mathcal O S_3$-lattice. [given, algebra]

2.1 The scalar extension $K\otimes_{\mathcal O}L$ is the standard two-dimensional $S_3$-module. It has no invariant line: a trivial line would be spanned by a constant vector, whose coordinate sum is zero only for the zero vector in characteristic $0$; and a sign line would have to be negated by both $(12)$ and $(23)$, which the coordinate equations again force to be zero. Thus this ordinary representation is irreducible. [step 1.1, algebra]

2.2 By [F1], reduction modulo $\mathfrak m=(1-\zeta_3)$ gives the two-dimensional $kS_3$-module $\overline L=L/\mathfrak mL$. The nonzero vector $(1,1,1)$ belongs to $\overline L$ because it is the reduction of $(1,1,-2)\in L$, and its line is fixed by $S_3$. Hence $\overline L$ is reducible. [F1, step 1.1, algebra]

3.1 This ordinary irreducible lattice has reducible reduction, so the universal statement is false. [step 2.1, step 2.2] ∎
