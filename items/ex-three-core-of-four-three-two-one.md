---
id: ex-three-core-of-four-three-two-one
kind: example
title: "The three-core of (4,3,2,1) by two removal orders"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [thm-e-core-is-independent-of-the-rim-hook-removal-order, lem-hooks-are-bead-gap-pairs-on-an-abacus, def-e-core-e-quotient-and-e-weight, def-removable-border-strip-and-height, lem-hooks-correspond-to-removable-border-strips, prop-core-quotient-size-and-weight-formula, def-beta-set-and-e-runner-abacus-of-a-partition, thm-e-quotient-controls-hooks-divisible-by-e]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 5.34 with the printed abacus example, printed p. 61: for $e=3$ and $\\lambda=(4,3,2,1)$ the beta numbers $(13,11,9,7,5,4,3,2,1,0)$ are displayed on the abacus, and unwrapping an $e$-hook is identified with moving a bead one row higher; the present item uses the equivalent unshifted $\\beta$-set $X_\\lambda=\\{7,5,3,1\\}$ of $\\lambda$"
    - title: "Stacey Law (lecturer), notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Cambridge Part III Michaelmas 2022 lecture notes, complete 76-page PDF"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
      locator: "Section 4.1, printed pp. 59-63: Theorem 4.10 (order independence of e-hook removal) with its proof and Proposition 4.12 (i)-(ii) (the step count and size formula)"
---

## Example

Let $e=3$ and $\lambda=(4,3,2,1)\vdash10$, with $\beta$-set
$X=\{7,5,3,1\}$ ([[def-beta-set-and-e-runner-abacus-of-a-partition]]). Two
different orders of removing rim $3$-hooks both terminate at the $3$-core
$(1)$, in agreement with the order-independence theorem
([[thm-e-core-is-independent-of-the-rim-hook-removal-order]]): on the
$3$-abacus the beads $7,5,3,1$ lie on runners $1,2,0,1$, and sliding beads up
in any admissible order reaches the top-packed configuration $\{4,2,1,0\}$
with $P=(1)$; two explicit manual removal orders of the corresponding rim
$3$-hooks, namely $$(4,3,2,1)\to(2,2,2,1)\to(1,1,1,1)\to(1)$$ and
$$(4,3,2,1)\to(4,3)\to(2,2)\to(1),$$ reach the same partition, and no $3$-hook
remains at the end
([[lem-hooks-are-bead-gap-pairs-on-an-abacus]],
[[thm-e-quotient-controls-hooks-divisible-by-e]]). The size count
$10-1=9=3\cdot3$ exhibits the weight $w_3((4,3,2,1))=3$
([[prop-core-quotient-size-and-weight-formula]]).

No choice principle is used.

## Facts & Assumptions

**Given:** $e=3$, the partition $\lambda=(4,3,2,1)$ of $10$ with the
$\beta$-set $X=X_\lambda=\{7,5,3,1\}$, and $3$-abacus positions $3a+i$ on
runner $i$ at row $a$
([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F1] For a $\beta$-set $\{h_1>\cdots>h_m\}$ the partition is
$P(\{h_1>\cdots>h_m\})=(h_1-(m-1),\dots,h_m-0)$ with trailing zeros deleted,
and the elements of $X_\lambda$ are the first-column hook lengths of $\lambda$
([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F2] The hooks of a partition with $\beta$-set $Y$ correspond bijectively to
the bead-gap pairs $(b,g)$ of $Y$, i.e. $b\in Y$, $g\notin Y$, $0\le g<b$, the
hook having length $b-g$; it has length divisible by $3$ exactly when
$b\equiv g\pmod3$, and removing it replaces $Y$ by
$(Y\setminus\{b\})\cup\{g\}$, which is again a $\beta$-set, of the partition
obtained by deleting the corresponding rim hook of size $b-g$
([[lem-hooks-are-bead-gap-pairs-on-an-abacus]]).

[F3] A removable border strip of size $3$ is a removable $3$-strip as in
[[def-removable-border-strip-and-height]], and the rim hook attached to the
hook of a node has size the hook length by
[[lem-hooks-correspond-to-removable-border-strips]]; the $3$-core
$C_3(\lambda)=P(X^{(3)})$ is the top-packed set of the $3$-abacus of a
$\beta$-set of $\lambda$
([[def-e-core-e-quotient-and-e-weight]]).

[F4] $C_3(\lambda)$ is the terminal partition of every maximal sequence of
removals of removable border strips of size $3$, and $10=|\lambda|=
|C_3(\lambda)|+3\,w_3(\lambda)$ with $w_3(\lambda)$ the number of such
removals in any maximal sequence
([[thm-e-core-is-independent-of-the-rim-hook-removal-order]],
[[prop-core-quotient-size-and-weight-formula]]).

## Verification

**Proof technique:** direct.

1.1 Beads on the runners: $7=3\cdot2+1$, $5=3\cdot1+2$, $3=3\cdot1+0$, $1=3\cdot0+1$, so the row-label sets are $X^{(3)}_0=\{1\}$ (bead $3$), $X^{(3)}_1=\{2,0\}$ (beads $7,1$) and $X^{(3)}_2=\{1\}$ (bead $5$). Top-packing puts the single beads of runners $0$ and $2$ in row $0$ and the two beads of runner $1$ in rows $0,1$, so $X^{(3)}=\{0\}\cup\{1,4\}\cup\{2\}=\{4,2,1,0\}$ and, listing the four beads in decreasing order, $$C_3(\lambda)=P(X^{(3)})=(4-3,\,2-2,\,1-1,\,0-0)=(1).$$ [given, F1, F3]

2.1 The moves of a single bead one row up are exactly $7\mapsto4$ on runner $1$, $5\mapsto2$ on runner $2$ and $3\mapsto0$ on runner $0$, since $4,2,0\notin X$; each target is a gap on the same runner as its bead, so by [F2] each move removes a rim hook of length $3$. In particular $X^{(3)}$ is reached after exactly these three moves, in any order. [given, F1, F2, F3, step 1.1]

3.1 First removal order: move $7\mapsto4$, then $5\mapsto2$, then $3\mapsto0$, giving the $\beta$-sets $\{7,5,3,1\}\to\{5,4,3,1\}\to\{4,3,2,1\}\to\{4,2,1,0\}$ and, by [F1], the partitions $$(4,3,2,1)\to(2,2,2,1)\to(1,1,1,1)\to(1),$$ each step of size $3$ by [F2] and [F3] and terminating at $C_3(\lambda)=(1)$ by step 1.1. [F1, F2, F3, step 1.1, step 2.1, construct]

3.2 Second removal order: move $3\mapsto0$, then $7\mapsto4$, then $5\mapsto2$, giving $\{7,5,3,1\}\to\{7,5,1,0\}\to\{5,4,1,0\}\to\{4,2,1,0\}$ and the partitions $$(4,3,2,1)\to(4,3)\to(2,2)\to(1),$$ again three steps of size $3$ ending at $(1)$; both orders are maximal, since the terminal configuration $\{4,2,1,0\}$ has no bead with a gap one row above it on its runner, so no rim $3$-hook remains. [F1, F2, F3, step 1.1, step 2.1, construct]

4.1 The size formula of [F4] reads $10=|C_3(\lambda)|+3\,w_3(\lambda)=1+3\cdot3$, using step 1.1 and the three steps of either order; the partition $(1)$ has the single hook length $1$, so indeed no hook of length $3$ survives, and the two orders agree on the terminal partition as asserted. [F2, F3, F4, step 1.1, step 3.1, step 3.2, algebra] ∎
