---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-indicators-of-unit-interval-translates-show-egorov-needs-finite-measure.json
  precheck: pass
id: cex-indicators-of-unit-interval-translates-show-egorov-needs-finite-measure
kind: counterexample
title: "The translated unit intervals show that Egorov needs finite total measure"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cex-indicators-of-unit-interval-translates-converge-almost-everywhere-but-not-in-measure, thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure]
proof_strategy: direct

---

## Statement refuted

Egorov's theorem holds on every measure space.

## Facts & Assumptions

**Given:** Lebesgue measure on $\mathbb R$ and the sequence $f_n:=\chi_{[n,n+1]}$.

[L1] This sequence converges almost everywhere to $0$ but not in measure. ([[cex-indicators-of-unit-interval-translates-converge-almost-everywhere-but-not-in-measure]])

[L2] Almost-uniform convergence implies convergence in measure. ([[thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure]])

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the sequence $f_n=\chi_{[n,n+1]}$ converges almost everywhere to $0$. [L1]

2.1 If this convergence were almost uniform, then [L2] would force convergence in measure as well. But [L1] says that convergence in measure fails. So the convergence is not almost uniform. [L1, L2, discharge-contradiction] ∎

## Remarks

The supports move to the right while retaining measure $1$. The dotted line marks the illustrative fixed point $x=3/2$; more generally, every fixed $x\in\mathbb R$ is outside $[n,n+1]$ once $n>x+1$. For every $n$, however, $\mu(\{|f_n|>1/2\})=\mu([n,n+1])=1$, as established in [L1]. Thus the picture illustrates the distinction used in the counterexample; the proof above is independent of it.

```tikz
\begin{tikzpicture}[x=1.35cm,y=1cm]
\draw[densely dotted] (1.5,0.55) -- (1.5,-3.2);
\node[above] at (1.5,0.55) {$x=3/2$};
\draw[->] (-0.3,0) -- (5,0);
\draw[->] (-0.3,-1.3) -- (5,-1.3);
\draw[->] (-0.3,-2.6) -- (5,-2.6);
\draw (0,0.06) -- (0,-0.06) node[below] {$0$};
\draw (0,-1.24) -- (0,-1.36) node[below] {$0$};
\draw (0,-2.54) -- (0,-2.66) node[below] {$0$};
\draw (1,0.06) -- (1,-0.06) node[below] {$1$};
\draw (1,-1.24) -- (1,-1.36) node[below] {$1$};
\draw (1,-2.54) -- (1,-2.66) node[below] {$1$};
\draw (2,0.06) -- (2,-0.06) node[below] {$2$};
\draw (2,-1.24) -- (2,-1.36) node[below] {$2$};
\draw (2,-2.54) -- (2,-2.66) node[below] {$2$};
\draw (3,0.06) -- (3,-0.06) node[below] {$3$};
\draw (3,-1.24) -- (3,-1.36) node[below] {$3$};
\draw (3,-2.54) -- (3,-2.66) node[below] {$3$};
\draw (4,0.06) -- (4,-0.06) node[below] {$4$};
\draw (4,-1.24) -- (4,-1.36) node[below] {$4$};
\draw (4,-2.54) -- (4,-2.66) node[below] {$4$};
\draw[very thick] (1,0) -- (2,0);
\fill (1,0) circle (2pt);
\fill (2,0) circle (2pt);
\node[above] at (3.8,0.08) {$f_1=1\;\mathrm{on}\;[1,2]$};
\draw[very thick] (2,-1.3) -- (3,-1.3);
\fill (2,-1.3) circle (2pt);
\fill (3,-1.3) circle (2pt);
\node[above] at (3.8,-1.22) {$f_2=1\;\mathrm{on}\;[2,3]$};
\draw[very thick] (3,-2.6) -- (4,-2.6);
\fill (3,-2.6) circle (2pt);
\fill (4,-2.6) circle (2pt);
\node[above] at (3.8,-2.52) {$f_3=1\;\mathrm{on}\;[3,4]$};
\node[right] at (5.2,0) {$\mu([1,2])=1$};
\node[right] at (5.2,-1.3) {$\mu([2,3])=1$};
\node[right] at (5.2,-2.6) {$\mu([3,4])=1$};
\end{tikzpicture}
```
