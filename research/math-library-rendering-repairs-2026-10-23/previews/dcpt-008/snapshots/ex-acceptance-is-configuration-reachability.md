---
id: ex-acceptance-is-configuration-reachability
kind: example
title: "A branching configuration graph with one accepting path and one looping path"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-acceptance-is-configuration-reachability, fs-nondeterministic-acceptance-requires-every-branch-to-halt]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-12
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
---

## Example

Use the nondeterministic machine from
[[fs-nondeterministic-acceptance-requires-every-branch-to-halt]] on input
$w=1$. Its initial configuration $C_0$ has two outgoing arcs:

- one to the accepting configuration $C_{\mathrm{acc}}$ reached by the move
  $(q_{\mathrm{acc}},1,R)$,
- one to the looping configuration $C_L$ reached by the move $(q_L,1,L)$.

From $C_L$ there is an arc back to $C_L$ again, because the machine stays in
state $q_L$, rewrites `1` by `1`, and the left-boundary rule keeps the head at
cell $0$.

## Facts & Assumptions

**Given:** The machine and input just described, with vertices $C_0,C_{\mathrm{acc}},C_L$ in its configuration graph.

[L1] A machine accepts an input if and only if some accepting configuration is reachable from the initial configuration in its configuration graph, by [[lem-acceptance-is-configuration-reachability]].

## Verification

**Proof technique:** direct.

1.1 The arc $C_0\to C_{\mathrm{acc}}$ is a directed path of length $1$ from the initial configuration to an accepting configuration. [given]

1.2 The arc $C_0\to C_L$ followed by the loop $C_L\to C_L$ shows that the graph also contains a nonhalting branch. [given]

2.1 By [L1] and step 1.1, the existence of the length-$1$ path already proves acceptance of the input, regardless of the looping branch from step 1.2. [L1, step 1.1, step 1.2] ∎

## Remarks

The configuration graph makes the accepting branch and the nonhalting branch
visible at once. Edge labels give the chosen transition; the double circle
marks the accepting configuration.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,circle,minimum size=12mm] (start) at (0,0) {$C_0$};
\node[draw,double,circle,minimum size=12mm] (accept) at (5,1.5) {$C_{\mathrm{acc}}$};
\node[draw,circle,minimum size=12mm] (loop) at (5,-1.5) {$C_L$};
\draw[->] (start) -- node[above,sloped] {$(q_{\mathrm{acc}},1,R)$} (accept);
\draw[->] (start) -- node[below,sloped] {$(q_L,1,L)$} (loop);
\draw[->] (loop) edge[loop right] node[right] {$(q_L,1,L)$} (loop);
\end{tikzpicture}
```

Here $C_0=(q_0,0,t_1)$, $C_{\mathrm{acc}}=(q_{\mathrm{acc}},1,t_1)$,
and $C_L=(q_L,0,t_1)$, where $t_1$ is the input tape for $w=1$.
The accepting path has length $1$, whereas the other branch repeats $C_L$
indefinitely. The verification above is independent of this illustration.
