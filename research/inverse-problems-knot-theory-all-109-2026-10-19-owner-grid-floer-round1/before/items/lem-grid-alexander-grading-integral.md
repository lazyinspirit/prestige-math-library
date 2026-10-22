---
id: lem-grid-alexander-grading-integral
kind: lemma
title: "Integrality and rectangle changes of the grid Alexander grading"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, §4.3"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.68–71, Propositions 4.3.1 and 4.3.3 and Lemma 4.3.5"
---

## Statement

Let $G$ be a toroidal grid of grid number $n$ representing one oriented knot, and let $M_{\mathbb O}$, $M_{\mathbb X}$, and $A_G$ be the functions defined from its finite point sets and the pair-counting function $J$. Then $M_{\mathbb O}$ and $M_{\mathbb X}$ are integer-valued, and every rectangle $r$ from a grid state $\mathbf x$ to a grid state $\mathbf y$ satisfies $M_{\mathbb O}(\mathbf x)-M_{\mathbb O}(\mathbf y)=1-2n_{\mathbb O}(r)+2\#(\mathbf x\cap\operatorname{Int}r)$ and $M_{\mathbb X}(\mathbf x)-M_{\mathbb X}(\mathbf y)=1-2n_{\mathbb X}(r)+2\#(\mathbf x\cap\operatorname{Int}r)$. Consequently $A_G$ is integer-valued and $A_G(\mathbf x)-A_G(\mathbf y)=n_{\mathbb X}(r)-n_{\mathbb O}(r)$.

## Statement references

[[def-grid-diagram-for-an-oriented-knot|The toroidal grid, its states, and the Maslov/Alexander formulas using $J$]]

## Facts & Assumptions

**Given:** A knot grid $G$ with grid number $n$ and the functions in the preceding definition.

[F1] [[def-grid-diagram-for-an-oriented-knot]] defines grid states as one point on each horizontal and vertical circle, defines $J(P,Q)=(I(P,Q)+I(Q,P))/2$ by a finite pair count, and sets $M_{\mathbb O}(\mathbf x)=J(\mathbf x-\mathbb O,\mathbf x-\mathbb O)+1$ and $M_{\mathbb X}(\mathbf x)=J(\mathbf x-\mathbb X,\mathbf x-\mathbb X)+1$.

[F2] [[def-grid-diagram-for-an-oriented-knot]] requires one $O$ and one $X$ in each row and column, and a one-component grid has a single $n$-cycle in the induced $O\to X\to O$ marking permutation.

## Proof

1.1 Each $I(P,Q)$ is an integer count. For $P=Q$, $J(P,P)=I(P,P)$, so the two self-pair terms in the formulas for $M_{\mathbb O}$ and $M_{\mathbb X}$ are integers; the cross terms occur doubled. Hence both Maslov functions are integer-valued. [F1, given, algebra]

1.2 Suppose a rectangle $r$ is contained in the chosen fundamental square. Write its southwest and northeast corners as $x_1,x_2\in\mathbf x$ and its northwest and southeast corners as $y_1,y_2\in\mathbf y$; all other state points are common. In $J(\mathbf x,\mathbf x)-J(\mathbf y,\mathbf y)$ the common-point terms cancel, the ordered corner pair contributes $1$, and each point of $\mathbf x$ strictly inside $r$ contributes twice, once against each changed corner. Thus this difference is $1+2\#(\mathbf x\cap\operatorname{Int}r)$. In $2J(\mathbf x,\mathbb O)-2J(\mathbf y,\mathbb O)$ the same cancellation leaves twice the number of $O$-markings in $r$. Substituting these two counts into [F1] gives $M_{\mathbb O}(\mathbf x)-M_{\mathbb O}(\mathbf y)=1-2n_{\mathbb O}(r)+2\#(\mathbf x\cap\operatorname{Int}r)$. Replacing every $O$ by $X$ gives the stated formula for $M_{\mathbb X}$. [F1, construct, algebra]

1.3 For two complementary rectangles $r$ and $r'$ with the same vertical edges, let $v$ be their common width, counted in column strips. The one-$O$- and one-$X$-per-column conditions in [F2] give $n_{\mathbb O}(r)+n_{\mathbb O}(r')=v$ and $n_{\mathbb X}(r)+n_{\mathbb X}(r')=v$. The state has one point on each of the $v-1$ vertical circles strictly between those two edges, so $\#(\mathbf x\cap\operatorname{Int}r)+\#(\mathbf x\cap\operatorname{Int}r')=v-1$. If the formula of step 1.2 holds for $r$ from $\mathbf x$ to $\mathbf y$, these three equalities give the formula for $r'$ from $\mathbf y$ to $\mathbf x$ by subtraction. The same argument applies to complementary rectangles sharing horizontal edges, counting rows instead of columns. Of the four torus rectangles for the two states, one lies in the fundamental square; successive horizontal or vertical complementations reach each of the other three, so the formulas hold for every torus rectangle. [F2, step 1.2, construct, algebra]

2.1 Subtract the $M_{\mathbb X}$ change from the $M_{\mathbb O}$ change and divide by two. The constant terms and state-interior terms cancel, giving $\frac{M_{\mathbb O}(\mathbf x)-M_{\mathbb X}(\mathbf x)}2-\frac{M_{\mathbb O}(\mathbf y)-M_{\mathbb X}(\mathbf y)}2=n_{\mathbb X}(r)-n_{\mathbb O}(r)$. The common normalization $-(n-1)/2$ in $A_G$ cancels, proving the rectangle-change formula and that all differences of $A_G$ are integers. [step 1.2, step 1.3, algebra]

2.2 For a marking set $P\in\{\mathbb O,\mathbb X\}$, write $M_P(\mathbf x)=J(\mathbf x-P,\mathbf x-P)+1$ and let $\mathrm{NW}(P_i)$ denote the northwest grid vertex of the cell containing the $i$th mark, read on the bottom edge when that cell is in the top row. Let $\mathbf x_{\mathrm{NW}P}$ be the state consisting of these vertices. Expanding the $J$ formula in [F1] gives
$$M_P(\mathbf x_{\mathrm{NW}P})=\#\{(i,j):\mathrm{NW}(P_i)<\mathrm{NW}(P_j)\}-\#\{(i,j):\mathrm{NW}(P_i)<P_j\}-\#\{(i,j):P_i<\mathrm{NW}(P_j)\}+\#\{(i,j):P_i<P_j\}+1.$$
For distinct $i,j$ with neither mark in the top row, all four inequalities are equivalent and their signed contributions cancel. If $P_j$ is in the top row, the second and fourth inequalities are equivalent and the first and third are false; if $P_i$ is in the top row, the first and second inequalities are equivalent and the third and fourth are false. These contributions also cancel. For $i=j$, the only inequality that can hold is $\mathrm{NW}(P_i)<P_i$, and it holds exactly for the unique mark in the top row. The displayed count is therefore $-1+1=0$, proving $M_{\mathbb O}(\mathbf x_{\mathrm{NW}\mathbb O})=M_{\mathbb X}(\mathbf x_{\mathrm{NW}\mathbb X})=0$. [F1, F2, construct, algebra]

2.3 The row and column connections from $O$ to $X$ and back form one $n$-cycle by [F2]. Equivalently, the relative permutation between $\mathbf x_{\mathrm{NW}\mathbb X}$ and $\mathbf x_{\mathrm{NW}\mathbb O}$ is an $n$-cycle. Factor that cycle into $n-1$ transpositions and apply them successively to obtain grid states between the two states. Two states that differ by one transposition have four intersection corners: the two row circles and two column circles cut the torus into four rectangles, and one of those rectangles has the first state at its southwest and northeast corners and the second state at its northwest and southeast corners. Thus each transition is realized by a torus rectangle, whether empty or not. Each rectangle changes $M_{\mathbb X}$ by an odd integer by steps 1.2 and 1.3, so $M_{\mathbb X}(\mathbf x_{\mathrm{NW}\mathbb O})\equiv n-1\pmod 2$, using the zero normalization at $\mathbf x_{\mathrm{NW}\mathbb X}$ from step 2.2. Since $M_{\mathbb O}(\mathbf x_{\mathrm{NW}\mathbb O})=0$, the numerator $M_{\mathbb O}-M_{\mathbb X}-(n-1)$ defining twice $A_G(\mathbf x_{\mathrm{NW}\mathbb O})$ is even. Hence this value is integral. [F1, F2, step 1.2, step 1.3, step 2.2, choose, algebra]

2.4 Any two grid states correspond to permutations, and a finite product of transpositions carries one to the other. Each transposition gives a rectangle transition. Step 2.1 shows that $A_G$ changes by an integer at every transition; since one state has integral Alexander value by step 2.3, all grid states do. [step 2.1, step 2.3, construct, algebra] ∎
