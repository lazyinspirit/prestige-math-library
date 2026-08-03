---
id: ex-boolean-lattice-on-four-elements
kind: example
title: "The Boolean lattice on four elements: ranks, width, shadows, and a symmetric chain decomposition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-boolean-lattice-and-levels, def-shadow-of-a-uniform-family, cor-sperner-theorem-with-equality-cases, thm-symmetric-chain-decomposition-of-the-boolean-lattice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.2"
      url: "https://appliedcombinatorics.org/book/s_posets_subset-lattice.html"
pipeline_run: null
---

## Example

Let $A=\{1,2,3,4\}$. The Boolean lattice $B(A)$ has rank sizes

$$1,\ 4,\ 6,\ 4,\ 1,$$

so its width is $6$. For
$\mathcal F=\{\{1,2\},\{1,3\}\}$, both its lower and upper shadows have three
members:

$$\partial\mathcal F=\{\{1\},\{2\},\{3\}\},\qquad \nabla\mathcal F=\{\{1,2,3\},\{1,2,4\},\{1,3,4\}\}.$$

```tikz
\begin{tikzpicture}[
  every node/.style={font=\scriptsize},
  set/.style={draw,circle,minimum size=7.5mm,inner sep=1pt,fill=white},
  lower/.style={set,draw=blue!75!black,fill=blue!12,line width=.8pt},
  family/.style={set,draw=orange!85!black,fill=orange!18,line width=.9pt},
  upper/.style={set,draw=green!55!black,fill=green!13,line width=.8pt}
]
\node[set] (e) at (0,0) {$\emptyset$};

\node[lower] (s1) at (-4.5,1.45) {$1$};
\node[lower] (s2) at (-1.5,1.45) {$2$};
\node[lower] (s3) at (1.5,1.45) {$3$};
\node[set]   (s4) at (4.5,1.45) {$4$};

\node[family] (p12) at (-5,2.9) {$12$};
\node[family] (p13) at (-3,2.9) {$13$};
\node[set]    (p14) at (-1,2.9) {$14$};
\node[set]    (p23) at (1,2.9) {$23$};
\node[set]    (p24) at (3,2.9) {$24$};
\node[set]    (p34) at (5,2.9) {$34$};

\node[upper] (t123) at (-4.5,4.35) {$123$};
\node[upper] (t124) at (-1.5,4.35) {$124$};
\node[upper] (t134) at (1.5,4.35) {$134$};
\node[set]   (t234) at (4.5,4.35) {$234$};

\node[set] (a) at (0,5.8) {$1234$};

\draw[gray!55]
  (e)--(s1) (e)--(s2) (e)--(s3) (e)--(s4)
  (s1)--(p12) (s1)--(p13) (s1)--(p14)
  (s2)--(p12) (s2)--(p23) (s2)--(p24)
  (s3)--(p13) (s3)--(p23) (s3)--(p34)
  (s4)--(p14) (s4)--(p24) (s4)--(p34)
  (p12)--(t123) (p12)--(t124)
  (p13)--(t123) (p13)--(t134)
  (p14)--(t124) (p14)--(t134)
  (p23)--(t123) (p23)--(t234)
  (p24)--(t124) (p24)--(t234)
  (p34)--(t134) (p34)--(t234)
  (t123)--(a) (t124)--(a) (t134)--(a) (t234)--(a);

\draw[orange!85!black,line width=1.1pt]
  (s1)--(p12) (s2)--(p12) (s1)--(p13) (s3)--(p13)
  (p12)--(t123) (p12)--(t124) (p13)--(t123) (p13)--(t134);

\node[font=\scriptsize] at (-6.25,0) {$B(A)_0$};
\node[font=\scriptsize] at (-6.25,1.45) {$B(A)_1$};
\node[font=\scriptsize] at (-6.25,2.9) {$B(A)_2$};
\node[font=\scriptsize] at (-6.25,4.35) {$B(A)_3$};
\node[font=\scriptsize] at (-6.25,5.8) {$B(A)_4$};

\node[lower,minimum size=5mm] at (-3.8,-.85) {};
\node[anchor=west] at (-3.5,-.85) {$\partial\mathcal F$};
\node[family,minimum size=5mm] at (-.55,-.85) {};
\node[anchor=west] at (-.25,-.85) {$\mathcal F$};
\node[upper,minimum size=5mm] at (2.05,-.85) {};
\node[anchor=west] at (2.35,-.85) {$\nabla\mathcal F$};
\end{tikzpicture}
```

```tikz
\begin{tikzpicture}[
  every node/.style={font=\scriptsize},
  member/.style={draw,circle,minimum size=7mm,inner sep=1pt,fill=white}
]
\draw[gray!45,dashed] (2,.55)--(2,-6.05);
\node[font=\scriptsize,anchor=south] at (2,.55) {middle rank};

\node[font=\scriptsize] at (0,1.05) {rank $0$};
\node[font=\scriptsize] at (1,1.05) {rank $1$};
\node[font=\scriptsize] at (2,1.05) {rank $2$};
\node[font=\scriptsize] at (3,1.05) {rank $3$};
\node[font=\scriptsize] at (4,1.05) {rank $4$};

\node[font=\scriptsize,anchor=east] at (-.55,0) {$C_1$};
\node[member] (c10) at (0,0) {$\emptyset$};
\node[member] (c11) at (1,0) {$1$};
\node[member] (c12) at (2,0) {$12$};
\node[member] (c13) at (3,0) {$123$};
\node[member] (c14) at (4,0) {$1234$};
\draw[blue!70!black,line width=1pt] (c10)--(c11)--(c12)--(c13)--(c14);

\node[font=\scriptsize,anchor=east] at (-.55,-1.1) {$C_2$};
\node[member] (c21) at (1,-1.1) {$4$};
\node[member] (c22) at (2,-1.1) {$14$};
\node[member] (c23) at (3,-1.1) {$124$};
\draw[orange!85!black,line width=1pt] (c21)--(c22)--(c23);

\node[font=\scriptsize,anchor=east] at (-.55,-2.2) {$C_3$};
\node[member] (c31) at (1,-2.2) {$2$};
\node[member] (c32) at (2,-2.2) {$23$};
\node[member] (c33) at (3,-2.2) {$234$};
\draw[green!55!black,line width=1pt] (c31)--(c32)--(c33);

\node[font=\scriptsize,anchor=east] at (-.55,-3.3) {$C_4$};
\node[member] at (2,-3.3) {$24$};

\node[font=\scriptsize,anchor=east] at (-.55,-4.4) {$C_5$};
\node[member] (c51) at (1,-4.4) {$3$};
\node[member] (c52) at (2,-4.4) {$13$};
\node[member] (c53) at (3,-4.4) {$134$};
\draw[red!70!black,line width=1pt] (c51)--(c52)--(c53);

\node[font=\scriptsize,anchor=east] at (-.55,-5.5) {$C_6$};
\node[member] at (2,-5.5) {$34$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The set $A=\{1,2,3,4\}$ and the family $\mathcal F$ in the Example.

[F1] The rank-$k$ level of $B(A)$ is the family of $k$-subsets ([[def-boolean-lattice-and-levels]]).

[F2] Lower and upper shadows consist of the immediate subsets and supersets one rank away ([[def-shadow-of-a-uniform-family]]).

[L1] Sperner's theorem says the width of $B(A)$ is its middle binomial coefficient ([[cor-sperner-theorem-with-equality-cases]]).

[L2] Every finite Boolean lattice has a symmetric chain decomposition ([[thm-symmetric-chain-decomposition-of-the-boolean-lattice]]).

## Verification

**Proof technique:** direct.

1.1 Listing subsets by cardinality gives rank sizes $1,4,6,4,1$, and [L1] gives width $6$. [given, F1, L1]

1.2 Deleting one element from a member of $\mathcal F$ gives exactly $\{1\},\{2\},\{3\}$, while adjoining one element gives exactly $123,124,134$. Thus the displayed shadows are correct. [given, F2]

1.3 The following symmetric chains partition all sixteen subsets: $\varnothing\subset1\subset12\subset123\subset1234$; $4\subset14\subset124$; $2\subset23\subset234$; $24$; $3\subset13\subset134$; and $34$. Their endpoint ranks sum to $4$, in agreement with [L2]. [F1, L2]

2.1 Steps 1.1, 1.2, and 1.3 verify the ranks, width, shadows, and an explicit symmetric chain decomposition. [step 1.1, step 1.2, step 1.3] ∎
