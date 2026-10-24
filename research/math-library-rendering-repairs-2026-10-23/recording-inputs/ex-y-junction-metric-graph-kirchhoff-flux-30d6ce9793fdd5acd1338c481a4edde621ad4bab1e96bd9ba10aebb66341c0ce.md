---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-y-junction-metric-graph-kirchhoff-flux.json
  precheck: pass
id: ex-y-junction-metric-graph-kirchhoff-flux
kind: example
title: "A Y-junction satisfies Kirchhoff flux balance"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-anchored-finite-metric-graph-h1-space
  - lem-metric-graph-kirchhoff-green-identity
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "The example uses the edgewise representatives supplied by the
  metric-graph interface; no additional choice is made."
sources:
  references:
    - title: "Mario Arioli and Michele Benzi, A Finite Element Method for Quantum
        Graphs, Emory CS Technical Report TR-2015-009 (44-page full text)"
      url: "https://www.cs.emory.edu/technical-reports/techrep-00275.pdf"
      locator: "Complete 44-page report; §2, §4, §7.2, printed/PDF pp. 3–14 and 22–23."
    - title: "Peter Kuchment, Quantum graphs: an introduction and a brief survey,
        arXiv:0802.3442 (2008)"
      url: "https://arxiv.org/pdf/0802.3442"
      locator: "Complete 39-page full text; §2 Graphs and metric graphs (printed pp.
        2–3), §4 Vertex conditions and §4.1 Quadratic form (printed pp. 5–9)."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example

---

## Example

Take three unit edges oriented from a central vertex $v$ to leaves $a,b,c$,
with unit diffusivity and prescribed leaf values $u(a)=2$, $u(b)=0$, and
$u(c)=1$. Define on the three edge coordinates
$u_1(x)=1+x$, $u_2(x)=1-x$, and $u_3(x)=1$ for $0\le x\le1$. The common
central trace is $1$, and the total outward diffusive flux at $v$ is zero.

## Illustration

The arrows give the coordinate orientations from the central vertex; the drawing is schematic and the proof uses the exact endpoint values below.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
  \node[circle,draw] (v) at (0,0) {$v:1$};
  \node[circle,draw] (a) at (-3,2.4) {$a:2$};
  \node[circle,draw] (b) at (3,2.4) {$b:0$};
  \node[circle,draw] (c) at (0,-2.8) {$c:1$};
  \draw[->] (v) -- node[above left,xshift=-30pt,yshift=8pt] {$u_1(x)=1+x$} (a);
  \draw[->] (v) -- node[above right,xshift=30pt,yshift=8pt] {$u_2(x)=1-x$} (b);
  \draw[->] (v) -- node[right] {$u_3(x)=1$} (c);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The three unit intervals with a common central endpoint, their
orientation from $v$ to the leaves, unit diffusivity, the displayed edge
functions, and zero interior load.

[F1] A metric graph has edgewise interval coordinates and common endpoint
traces at each vertex
([[def-anchored-finite-metric-graph-h1-space]]).

[F2] For edgewise H2 functions, the signed endpoint terms in Green's identity
group by common vertex trace and outward flux; zero test traces remove
Dirichlet endpoints
([[lem-metric-graph-kirchhoff-green-identity]]).

[A1] The general endpoint-representative interface assumes the Axiom of
Choice ([[def-axiom-of-choice]],
[[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

## Verification

**Given:** The oriented unit Y-graph and the three edge functions in the
Example.

1.1 At the central endpoint $x=0$, all three values equal $1$. At the leaves $x=1$, the values are $2,0,1$, respectively. Hence the functions define a continuous metric-graph function with the specified Dirichlet data. [A1, F1, given, algebra]

1.2 The outward derivative at the tail $x=0$ is $-u'_i(0)$. The three values are $-1,+1,0$, whose sum is $0$. Each edge has $u_i''=0$. Therefore the edge equation has zero load and the free central vertex satisfies Kirchhoff balance. [F2, given, algebra]

2.1 For any test function with zero trace at the three leaves, [F2] shows that the edge bilinear form has only the central boundary contribution, which is its test trace times the sum $-1+1+0=0$. Thus the displayed function is also a weak harmonic field for these Dirichlet data. [F2, step 1.2, given] ∎

