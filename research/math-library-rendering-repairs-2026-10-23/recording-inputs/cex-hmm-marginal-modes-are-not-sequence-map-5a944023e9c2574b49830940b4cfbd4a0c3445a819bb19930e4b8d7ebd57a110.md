---
id: cex-hmm-marginal-modes-are-not-sequence-map
kind: counterexample
title: Coordinatewise posterior modes need not be a sequence MAP
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-hidden-markov-model-for-sequence-decoding
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the counterexample has four hidden paths."
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Manolis Kellis, 6.096 Algorithms for Computational Biology, Lecture 7: Gene Finding and HMMs, MIT OpenCourseWare (Spring 2005)"
      url: "https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf"
    - title: "Stanford CS262, Lecture 7: Hidden Markov Models"
      url: "https://web.stanford.edu/class/cs262/presentations/lecture7.pdf"
---

## Statement refuted

For every finite HMM with positive observation evidence, choosing a
posterior-most-probable hidden state separately at each time always produces a
sequence MAP path.

## Facts & Assumptions

**Given:** A finite discrete HMM, an observation sequence $y$, and
$p(y)>0$. The time-$t$ posterior marginal at state $s$ is
$\sum_{z:z_t=s}p(z\mid y)$.

[F1] [[def-finite-hidden-markov-model-for-sequence-decoding]]: For positive
evidence, $p(z\mid y)=p(z,y)/p(y)$; a sequence MAP path maximizes this
whole-path conditional mass.

## Counterexample

Let $S=\{u,v\}$ and $Y=\{x\}$. Set $\pi(u)=7/20$ and $\pi(v)=13/20$.
The transition rows are $u\to(u,v)=(1,0)$ and
$v\to(u,v)=(34/65,31/65)$. Both states emit $x$ with probability $1$.
Observe $y=(x,x)$. The four hidden-path masses are
$$p(uu,y)=7/20,\qquad p(uv,y)=0,\qquad p(vu,y)=17/50,\qquad p(vv,y)=31/100.$$
They sum to $1$, so these are also the posterior path masses.

1.1 The initial weights sum to $1$, each transition row sums to $1$, and each emission row has its single entry equal to $1$, so this is a valid HMM. The path masses follow by multiplying the initial and transition factors: $uu=(7/20)\cdot1=7/20$, $uv=(7/20)\cdot0=0$, $vu=(13/20)(34/65)=17/50$, and $vv=(13/20)(31/65)=31/100$. Their sum is $35/100+0+34/100+31/100=1$. [given, F1, algebra]

2.1 The time-1 marginal masses are $P(Z_1=u\mid y)=35/100$ and $P(Z_1=v\mid y)=65/100$, so the unique time-1 mode is $v$. The time-2 marginal masses are $P(Z_2=u\mid y)=35/100+34/100=69/100$ and $P(Z_2=v\mid y)=31/100$, so the unique time-2 mode is $u$. Their coordinatewise mode is $vu$, whose mass $17/50=34/100$ is strictly below $p(uu\mid y)=7/20=35/100$. Hence $vu$ is not a sequence MAP path, refuting the Statement. [given, F1, step 1.1, algebra] ∎


## Remarks

The two-time trellis below labels each state by its posterior marginal
probability and each arrow by its transition probability. Double circles mark
the unique marginal modes, while the thick arrow traces the sequence MAP path
$uu$. The dashed arrow has probability zero. Both observations are $x$ and
all emission factors equal $1$.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node at (0,3) {$t=1$};
\node at (7,3) {$t=2$};
\node[draw,circle,minimum size=12mm] (u1) at (0,2) {$u$};
\node[draw,circle,double,minimum size=12mm] (v1) at (0,-1) {$v$};
\node[draw,circle,double,minimum size=12mm] (u2) at (7,2) {$u$};
\node[draw,circle,minimum size=12mm] (v2) at (7,-1) {$v$};
\node[left] at (-0.8,2) {$35/100$};
\node[left] at (-0.8,-1) {$65/100$};
\node[right] at (7.8,2) {$69/100$};
\node[right] at (7.8,-1) {$31/100$};
\draw[->,very thick] (u1) -- node[above] {$1$} (u2);
\draw[->,dashed] (u1) -- node[pos=0.25,below] {$0$} (v2);
\draw[->] (v1) -- node[pos=0.25,above] {$34/65$} (u2);
\draw[->] (v1) -- node[below] {$31/65$} (v2);
\end{tikzpicture}
```

Thus the two double-circled states form $vu$, of mass $34/100$, whereas
the thick path $uu$ has mass $35/100$. The proof above establishes these
comparisons independently of the illustration.
