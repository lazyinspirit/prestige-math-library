---
id: ex-three-core-and-three-quotient-by-abacus
kind: example
title: "The three-core and three-quotient of (6,5,2,1^3) by abacus"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-e-core-e-quotient-and-e-weight, thm-e-core-is-independent-of-the-rim-hook-removal-order, thm-e-quotient-controls-hooks-divisible-by-e, prop-core-quotient-size-and-weight-formula, def-beta-set-and-e-runner-abacus-of-a-partition, lem-hooks-are-bead-gap-pairs-on-an-abacus]
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
    - title: "Stacey Law (lecturer), notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Cambridge Part III Michaelmas 2022 lecture notes, complete 76-page PDF"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
      locator: "Section 4.1, printed pp. 59-62: the worked example for $e=3$, $\\lambda=(6,5,2,1^3)\\vdash16$ (printed abacus diagrams for $A_\\lambda$ and $A_{X^{(3)}}$, the sets $X^{(3)}_i$, $C_3(\\lambda)=(3,1)$, $Q_3(\\lambda)=((2,1),\\varnothing,(1))$ and the four bead moves with the two indicated equivalent rim-hook removal orders), together with Theorem 4.11 and Proposition 4.12 as used"
---

## Example

Work with $e=3$ and $\lambda=(6,5,2,1^3)\vdash16$, whose $\beta$-set is
$X_\lambda=\{11,9,5,3,2,1\}$
([[def-beta-set-and-e-runner-abacus-of-a-partition]]). On the $3$-abacus the
beads sit on runners $0,1,2$ at positions $9,3$ on runner $0$, $1$ on runner
$1$ and $11,5,2$ on runner $2$. Top-packing every runner gives the core beads
$3,0$ on runner $0$, $1$ on runner $1$ and $8,5,2$ on runner $2$, so
$C_3(\lambda)=(3,1)$ ([[def-e-core-e-quotient-and-e-weight]]); with the
normalising condition $3\mid|X|=6$ the runner row-label sets are
$X^{(3)}_0=\{3,1\}$, $X^{(3)}_1=\{0\}$ and $X^{(3)}_2=\{3,1,0\}$, giving the
quotient $Q_3(\lambda)=((2,1),\varnothing,(1))$. Four bead moves are required,
and the size formula
$$16=|(3,1)|+3\,(|(2,1)|+|\varnothing|+|(1)|)=4+3\cdot4$$
holds ([[prop-core-quotient-size-and-weight-formula]]); the same-runner
bead-gap pairs realise the corresponding rim $3$-hook removals
([[lem-hooks-are-bead-gap-pairs-on-an-abacus]],
[[thm-e-quotient-controls-hooks-divisible-by-e]],
[[thm-e-core-is-independent-of-the-rim-hook-removal-order]]).

No choice principle is used.

## Facts & Assumptions

**Given:** $e=3$, the partition $\lambda=(6,5,2,1^3)$ of $16$ with
$\beta$-set $X=X_\lambda=\{11,9,5,3,2,1\}$, and the $3$-abacus positions
$3a+i$ of runner $i$ and row $a$
([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F1] A $\beta$-set and its partition are related by
$P(\{h_1>\cdots>h_m\})=(h_1-(m-1),\dots,h_m-0)$ with trailing zeros deleted;
the elements of $X_\lambda$ are the first-column hook lengths
$b_i(\lambda)=\lambda_i+\ell(\lambda)-i$
([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F2] The hooks of a partition with $\beta$-set $Y$ correspond bijectively to
the bead-gap pairs $(b,g)$ of $Y$, i.e. $b\in Y$, $g\notin Y$, $0\le g<b$, the
corresponding hook having length $b-g$; the hook has length divisible by $3$
exactly when $b\equiv g\pmod3$; and removing it replaces $Y$ by
$(Y\setminus\{b\})\cup\{g\}$
([[lem-hooks-are-bead-gap-pairs-on-an-abacus]]).

[F3] On the $3$-abacus the row-label set of runner $i$ is
$Y^{(3)}_i=\{a:3a+i\in Y\}$, the top-packed set is
$Y^{(3)}=\bigcup_{i=0}^{2}\{3a+i:0\le a\le|Y^{(3)}_i|-1\}$, the $3$-core is
$C_3(\cdot)=P(Y^{(3)})$, and for a normalised $\beta$-set with $3\mid|Y|$ the
$3$-quotient components are $\lambda^{(i)}=P(Y^{(3)}_i)$ with weight
$w_3=|Q_3|=\sum_i|\lambda^{(i)}|$
([[def-e-core-e-quotient-and-e-weight]]).

[F4] $C_3(\lambda)$ is the terminal partition of every maximal sequence of
removals of removable border strips of size $3$, and $|\lambda\setminus R|=
|\lambda|-3$ for each such strip $R$
([[thm-e-core-is-independent-of-the-rim-hook-removal-order]]).

[F5] There is a bijection $f$ from the hooks of $\lambda$ of $3$-divisible
length onto the hooks of $Q_3(\lambda)$ with $|H|=3\,|f(H)|$ and
$Q_3(\lambda\setminus H)=Q_3(\lambda)\setminus f(H)$
([[thm-e-quotient-controls-hooks-divisible-by-e]]); and
$16=|\lambda|=|C_3(\lambda)|+3\,w_3(\lambda)$ with $w_3(\lambda)$ the number
of such hooks ([[prop-core-quotient-size-and-weight-formula]]).

## Verification

**Proof technique:** direct.

1.1 Beads on the runners: reading positions $3a+i$ of $X=\{11,9,5,3,2,1\}$ gives runner $0$ the positions $9=3\cdot3$, $3=3\cdot1$, runner $1$ the position $1=3\cdot0+1$, and runner $2$ the positions $11=3\cdot3+2$, $5=3\cdot1+2$, $2=3\cdot0+2$. Hence the row-label sets are $X^{(3)}_0=\{3,1\}$, $X^{(3)}_1=\{0\}$, $X^{(3)}_2=\{3,1,0\}$, of counts $2,1,3$. [given, F1, F3]

1.2 Top-packing moves the two beads of runner $0$ to rows $0,1$, the bead of runner $1$ to row $0$, and the three beads of runner $2$ to rows $0,1,2$, so $$X^{(3)}=\{0,3\}\cup\{1\}\cup\{2,5,8\}=\{8,5,3,2,1,0\}$$ and, by [F1] with the six beads listed in decreasing order, $$C_3(\lambda)=P(X^{(3)})=(8-5,\,5-4,\,3-3,\,2-2,\,1-1,\,0-0)=(3,1).$$ [given, F1, F3]

2.1 The normalisation $3\mid|X|=6$ holds, so the row-label sets of step 1.1 may be read as $1$-abaci: $\lambda^{(0)}=P(\{3,1\})=(2,1)$, $\lambda^{(1)}=P(\{0\})=\varnothing$ and $\lambda^{(2)}=P(\{3,1,0\})=(1)$, so $Q_3(\lambda)=((2,1),\varnothing,(1))$ and $w_3(\lambda)=2+1+0+1=4$. [given, F1, F3, step 1.1]

2.2 Four upward bead moves lead from $X$ to $X^{(3)}$: $11\mapsto8$ on runner $2$ (the target $8\notin X$), then $9\mapsto6$ on runner $0$ ($6\notin X$), then $3\mapsto0$ on runner $0$ ($0\notin X$), then $6\mapsto3$ on runner $0$ (now $3\notin X$); every move replaces a bead by a gap one row above it on its own runner, so by [F2] each is the removal of a rim hook of length $3$. In terms of [F1] the intermediate partitions are $$(6,5,2,1^3)\to(4,4,2,1^3)\to(3,2,2,1^3)\to(3,2,2)\to(3,1),$$ each step of size $3$ by [F4], and the terminal partition is $C_3(\lambda)=(3,1)$ as computed in step 1.2. [given, F1, F2, F4, step 1.1, step 1.2, construct]

3.1 The size formula of [F5] reads $16=|C_3(\lambda)|+3\,w_3(\lambda)=4+3\cdot4$, using steps 1.2 and 2.1; the fourth move of step 2.2 is the last of the $w_3(\lambda)=4$ removals of size $3$ exhibited there. The four hooks of $\lambda$ of $3$-divisible length, read from the hook-length diagram (rows $11,7,5,4,3,1$; $9,5,3,2,1$; $5,1$; $3$; $2$; $1$), are $H_{1,5}$ of length $3$, $H_{2,1}$ of length $9$, $H_{2,3}$ of length $3$ and $H_{4,1}$ of length $3$, and the bijection $f$ of [F5] sends them to the hooks $H_{1,1}(\lambda^{(2)})$, $H_{1,1}(\lambda^{(0)})$, $H_{1,2}(\lambda^{(0)})$, $H_{2,1}(\lambda^{(0)})$ of sizes $1,3,1,1$ of $(1)$, $(2,1)$, matching $|H|=3|f(H)|$ in each case; all assertions of the Example are thereby checked. [F2, F3, F5, step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎
