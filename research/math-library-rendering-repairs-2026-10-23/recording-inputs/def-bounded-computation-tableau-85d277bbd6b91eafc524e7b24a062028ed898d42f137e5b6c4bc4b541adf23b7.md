---
id: def-bounded-computation-tableau
kind: definition
title: "A bounded computation tableau for a nondeterministic Turing-machine run"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-dtime-ntime-dspace-and-nspace, def-turing-machine-configuration, def-tape-finite-support-convention]
verification:
  audited: 2026-09-12
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
---

## Definition

Fix a nondeterministic one-tape Turing machine $N$ and an input word $w$.
Suppose $T\ge |w|$, every branch of $N$ on $w$ halts within $T$ steps, and no
branch visits a tape cell beyond position $T$. A **bounded computation
tableau** for $N$ on $w$ is a
$(T+1)\times(T+1)$ array whose rows encode one computation branch of $N$ on
$w$, padded after halting if necessary:

- row $0$ is the initial configuration on input $w$,
- each later row is obtained from the previous row by one legal transition of
  $N$, or else repeats the previous row unchanged when that previous row is
  already halting,
- and each row contains exactly one distinguished state-tagged tape symbol,
  marking the head position and current state.

The tableau is **accepting** when some row is an accepting configuration.

## Remarks

- The one-tape hypothesis is what makes one state-tagged symbol sufficient to
  record the unique head position in each row.

- The bound $T\ge |w|$ ensures that row $0$ has room for the entire input;
  the width and height are both polynomial in $|w|$ once $T$ is polynomial.

- The repeated-row convention is the standard way to fit an accepting or
  rejecting branch of length at most $T$ into a fixed $(T+1)\times(T+1)$
  tableau.

- The tableau records one branch, not the whole nondeterministic tree.

For a concrete example, take $w=1$ and $T=3$. Suppose the only instructions
available at the two reached nonhalting state-symbol pairs are
$\Delta(q_0,1)=\{(q_1,1,R)\}$ and
$\Delta(q_1,\sqcup)=\{(q_{\mathrm{acc}},1,L)\}$.
Here $q_1$ is nonhalting, and $\langle q,a\rangle$ denotes a tape symbol $a$
tagged with the current state $q$. The following $4\times4$ tableau shows the
resulting branch; thick cell borders mark its unique head position in each row.

```tikz
\begin{tikzpicture}[x=0.9cm,y=0.9cm,every node/.style={font=\small}]
\draw (0,0) rectangle (8,4);
\draw (2,0)--(2,4) (4,0)--(4,4) (6,0)--(6,4);
\draw (0,1)--(8,1) (0,2)--(8,2) (0,3)--(8,3);
\draw[very thick] (0,3) rectangle (2,4);
\draw[very thick] (2,2) rectangle (4,3);
\draw[very thick] (0,1) rectangle (2,2);
\draw[very thick] (0,0) rectangle (2,1);
\node at (1,4.4) {$0$};
\node at (3,4.4) {$1$};
\node at (5,4.4) {$2$};
\node at (7,4.4) {$3$};
\node at (4,5) {tape position};
\node at (-0.5,3.5) {$0$};
\node at (-0.5,2.5) {$1$};
\node at (-0.5,1.5) {$2$};
\node at (-0.5,0.5) {$3$};
\node[rotate=90] at (-1.2,2) {time};
\node at (1,3.5) {$\langle q_0,1\rangle$};
\node at (3,3.5) {$\sqcup$};
\node at (5,3.5) {$\sqcup$};
\node at (7,3.5) {$\sqcup$};
\node at (1,2.5) {$1$};
\node at (3,2.5) {$\langle q_1,\sqcup\rangle$};
\node at (5,2.5) {$\sqcup$};
\node at (7,2.5) {$\sqcup$};
\node at (1,1.5) {$\langle q_{\mathrm{acc}},1\rangle$};
\node at (3,1.5) {$1$};
\node at (5,1.5) {$\sqcup$};
\node at (7,1.5) {$\sqcup$};
\node at (1,0.5) {$\langle q_{\mathrm{acc}},1\rangle$};
\node at (3,0.5) {$1$};
\node at (5,0.5) {$\sqcup$};
\node at (7,0.5) {$\sqcup$};
\end{tikzpicture}
```

The first transition writes $1$ at position $0$ and moves right; the second
writes $1$ at position $1$, moves left and enters the accepting state. Row $3$
repeats halting row $2$ as padding, rather than taking another machine
transition. Both visited positions are at most $T=3$, and $T\ge |w|=1$.
The definition above is independent of this illustration.
