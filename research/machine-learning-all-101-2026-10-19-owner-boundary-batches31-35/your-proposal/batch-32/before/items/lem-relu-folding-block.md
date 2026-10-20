---
id: lem-relu-folding-block
kind: lemma
title: "A width-n ReLU block makes n+1 full folds"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-relu-network]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Serra, Tjandraatmadja, and Ramalingam, Bounding and Counting Linear Regions of Deep Neural Networks, Theorem 7 and Appendix D"
      url: "https://proceedings.mlr.press/v80/serra18b/serra18b.pdf"
      locator: "Theorem 7, p. 7, and Appendix D construction in the official supplement, pp. 4–5."
    - title: "Michael J. Sullivan, Deep Learning Theory, §5.2"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.2, one-dimensional fold composition."
---

## Statement

For every integer $n\ge3$, there is a scalar-input standard adjacent-layer ReLU block with one hidden layer of width $n$ whose output is continuous and piecewise affine on $[0,1]$, has exactly $n$ interior breakpoints, and maps each of the resulting $n+1$ intervals bijectively onto $[0,1]$. Composing blocks of widths $n_1,\ldots,n_L\ge3$ yields $\prod_{\ell=1}^L(n_\ell+1)$ full-dimensional activation regions in one input dimension.

## Statement references

[Serra et al., Theorem 7 and Appendix D: exact one-dimensional fold construction](https://proceedings.mlr.press/v80/serra18b/serra18b.pdf)

[Sullivan, §5.2: composition of one-dimensional folds](https://mjt.cs.illinois.edu/dlt/index.html)

## Illustrative plot

For $n=3$, the fold is the piecewise-affine graph through $(0,0)$, $(1/7,1)$, $(3/7,0)$, $(5/7,1)$, and $(1,0)$. The horizontal axis is the normalized input $x\in[0,1]$ and the vertical axis is the block output. The marked interior vertices are exactly the breakpoints $t_i=(2i-1)/7$; the graph shows each of the four subintervals mapping bijectively onto $[0,1]$. The proof verifies the hinge representation algebraically; this plot is illustrative.

\begin{tikzpicture}[x=5cm,y=2cm]
  \draw[->] (-0.04,0) -- (1.08,0) node[right] {$x$};
  \draw[->] (0,-0.08) -- (0,1.18) node[above] {$F_3(x)$};
  \draw[thick,blue] (0,0) -- (1/7,1) -- (3/7,0) -- (5/7,1) -- (1,0);
  \fill (1/7,1) circle (1.2pt) node[above right] {$1/7$};
  \fill (3/7,0) circle (1.2pt) node[below] {$3/7$};
  \fill (5/7,1) circle (1.2pt) node[above right] {$5/7$};
  \node[below left] at (0,0) {$0$};
  \node[below right] at (1,0) {$1$};
  \node[left] at (0,1) {$1$};
\end{tikzpicture}

## Facts & Assumptions

**Given:** The ReLU network convention in [[def-relu-network]] and an integer $n\ge3$.

[F1] A ReLU network may use affine skip connections and a final affine output, with depth counting input and output layers ([[def-relu-network]]).

## Proof

1.1 Set $t_0=0$, $t_{n+1}=1$, and $t_i=(2i-1)/(2n+1)$ for $1\le i\le n$. Put $y_i=0$ for even $i$ and $y_i=1$ for odd $i$, and define $s_i=(y_{i+1}-y_i)/(t_{i+1}-t_i)$ for $0\le i\le n$. The piecewise-affine interpolant through $(t_i,y_i)$ maps every interval bijectively onto $[0,1]$. Its first slope is $s_0=2n+1$, while $s_2=(2n+1)/2$ and $s_3=-(2n+1)/2$, so $s_3-s_2=-s_0$. [given, construct, algebra]

2.1 Use hidden units $h_i(x)=\rho(x-t_i)$ for $i\ne3$ and $h_3(x)=\rho(t_3-x)$. Give unit $i$ output coefficient $a_i=s_i-s_{i-1}$, including $a_3=s_3-s_2=-s_0$, and set output bias $d=-a_3t_3$. Before $t_1$ only $h_3$ is active, so the output is $d+a_3(t_3-x)=s_0x$. At every $t_i$, the slope changes by $a_i$: for $i\ne3$ this is the right-facing ReLU slope jump, and for $i=3$ it is the left-facing ReLU slope jump. Thus the network output has the same initial value and slope jumps as the interpolant in step 1.1, so it equals that interpolant on $[0,1]$. This uses exactly $n$ hidden ReLU units and one affine output. [step 1.1, F1, construct, algebra]

3.1 Each fold block's output is affine in the current hidden layer, so it can be substituted into the affine preactivations of the next adjacent layer without adding an intervening layer. At each knot $t_i$, exactly the corresponding hidden unit changes activation, so the $n+1$ intervals have distinct activation patterns. Each existing interval is cut into $n_{\ell+1}+1$ subintervals, each mapped bijectively onto $[0,1]$; the new layer's patterns distinguish these subintervals, while earlier layer patterns distinguish their parent intervals. Induction over the blocks gives $\prod_{\ell=1}^L(n_\ell+1)$ intervals, each a distinct full-dimensional activation region. [step 2.1, induction] ∎
