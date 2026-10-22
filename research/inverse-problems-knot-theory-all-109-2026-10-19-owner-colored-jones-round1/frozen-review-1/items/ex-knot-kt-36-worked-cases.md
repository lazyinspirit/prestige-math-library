---
id: ex-knot-kt-36-worked-cases
kind: example
title: "Unknot, trivial color, and a three-crossing braid value"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-normalized-colored-jones-sequence
  - lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket
  - thm-bracket-state-sum-matches-library-jones-specialization
  - def-braid-group-by-the-artin-presentation
  - def-closure-of-a-geometric-braid
  - def-elementary-geometric-half-twist
  - def-exponent-sum-of-a-braid
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - thm-alexanders-closed-braid-theorem
  - thm-the-artin-presentation-is-complete-for-geometric-braids
justified_by: []
proof_strategy: direct
axiom_use: "The fixed finite matrix calculations are choice-free. The general N=2 identification separately assumes AC for the library Jones invariant and ACω for the framed tangle evaluator."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Hitoshi Murakami, An Introduction to the Volume Conjecture, §2.4 and Example 2.5"
      url: "https://arxiv.org/pdf/1002.0126"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
---

## Example

For every finite braid word $\beta$ whose closure is a knot in the declared generic matrix convention, the $N=1$ generic value is $1$; the one-strand identity braid has generic value $1$ for every $N\ge1$. Let $T$ be the closure of the positive two-strand braid $\sigma_1^3$ in the declared crossing convention. With $t=q^{-1}=A^{-4}$, its $N=2$ generic value is $J_2^{\mathrm{gen}}(T;q)=t+t^3-t^4$. In addition, assuming the Axiom of Choice and Countable Choice, for every oriented knot $K\subset\mathbb R^3\subset S^3$ the fundamental-color generic value satisfies $J_2^{\mathrm{gen}}(K;q)=V_K(q^{-1})$, where $V_K$ is the library Jones polynomial normalized by $V_{\bigcirc}=1$.

The braid diagram uses braid height increasing downward. At each positive generator, the strand entering on the right passes over the strand entering on the left; the closure joins each bottom endpoint to the top endpoint in the same position. The resulting closed braid has one component. For the diagram convention, closure arcs are routed outside the rectangular braid box without adding crossings. The diagram is explanatory; the verification uses the displayed matrices.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),scale=.72]
  % Three positive crossings; under-strands have a visible gap.
  \draw[->] (0,3) -- (.44,2.56);
  \draw[->] (.56,2.44) -- (1,2);
  \draw[->] (1,3) -- (0,2);
  \draw[->] (0,2) -- (.44,1.56);
  \draw[->] (.56,1.44) -- (1,1);
  \draw[->] (1,2) -- (0,1);
  \draw[->] (0,1) -- (.44,.56);
  \draw[->] (.56,.44) -- (1,0);
  \draw[->] (1,1) -- (0,0);
  \draw[->,densely dotted] (0,0) .. controls (-.8,-.2) and (-.8,3.2) .. (0,3);
  \draw[->,densely dotted] (1,0) .. controls (1.8,-.2) and (1.8,3.2) .. (1,3);
  \node at (0,3.25) {$1$};
  \node at (1,3.25) {$2$};
  \node at (0,-.25) {$2$};
  \node at (1,-.25) {$1$};
\end{tikzpicture}
```

## Example references

[Murakami, *An Introduction to the Volume Conjecture*, §2.4 and Example 2.5](https://arxiv.org/pdf/1002.0126)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial*, §2](https://arxiv.org/pdf/2204.12104v2)

[[lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket|Fundamental ribbon trace and bracket formula]]

[[thm-bracket-state-sum-matches-library-jones-specialization|Normalized bracket and library Jones polynomial]]

## Facts & Assumptions

**Given:** The admissible generic color matrices, their normalization from the preceding definition, and the positive two-strand braid $\sigma_1^3$; for the general fundamental-color identity, assume the Axiom of Choice and Countable Choice.

[F1] The generic matrix value is $J_N^{\mathrm{gen}}(\beta;q)=\lambda_N^{-w(\beta)}\operatorname{Tr}(G_N^{\otimes n}\rho_N(\beta))/d_N$, with $d_N\ne0$ in $\mathbb Q(A)$ ([[def-normalized-colored-jones-sequence]]).

[F2] For the fundamental ribbon color and any blackboard-framed braid closure, the ribbon trace satisfies $t_n(\beta)=\delta\langle\widehat\beta\rangle$, with $\delta=-A^2-A^{-2}$ and twist scalar $-A^3$; this statement assumes Countable Choice ([[lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket]]).

[F3] Under the Axiom of Choice, the library Jones polynomial satisfies $V_K(t)=f_K(t^{-1/4})$, where $f_K$ is the writhe-normalized Kauffman bracket and $t=A^{-4}$ ([[thm-bracket-state-sum-matches-library-jones-specialization]]).

[F4] Every braid group element is represented by a finite word in the Artin generators and their inverses, and under AC the Artin presentation identifies these words with geometric braid classes ([[def-braid-group-by-the-artin-presentation]], [[thm-the-artin-presentation-is-complete-for-geometric-braids]]).

[F5] A geometric braid closure joins each strand endpoint to the endpoint prescribed by its permutation ([[def-closure-of-a-geometric-braid]]).

[F6] The positive Artin half twist has determinant crossing sign $+1$ in the declared oriented projection ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F7] The opposite geometric half twist is the group inverse of the positive half twist ([[def-elementary-geometric-half-twist]]).

[F8] The exponent sum of a word is the sum of its signed generator exponents ([[def-exponent-sum-of-a-braid]]).

[F9] Under AC, every nonempty oriented link in $\mathbb R^3$ is equivalent to a closed geometric braid with at least one strand ([[thm-alexanders-closed-braid-theorem]]).

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[A2] Countable Choice ([[def-countable-choice]]).

## Verification

**Proof technique:** direct matrix evaluation.

**Given:** [F1] and the matrix data in the preceding definition.

1.1 For $N=1$, the basis has one vector, $E=F=0$, $K_L=1$, $c_1=G_1=1$, $d_1=\lambda_1=1$. Every braid generator therefore acts as $1$, and the normalized value of every such knot closure is $1$. For the unknot at any $N$, the one-strand identity braid has $w=0$ and trace $\operatorname{Tr}(G_N)=d_N$, so its normalized value is also $1$. [F1, given, algebra]

1.2 The strand permutation of $\sigma_1^3$ is $(12)^3=(12)$, so its two endpoints are interchanged; pairing each bottom endpoint with the top endpoint in the same position therefore produces one component. At $N=2$, the only nonzero terms of $\mathcal R_2$ are $r=0,1$. On the ordered basis $(v_+v_+,v_+v_-,v_-v_+,v_-v_-)$ they give $c_2=\begin{pmatrix}A&0&0&0\\0&0&A^{-1}&0\\0&A^{-1}&A-A^{-3}&0\\0&0&0&A\end{pmatrix}$ and $G_2\otimes G_2=\operatorname{diag}(A^4,1,1,A^{-4})$. The middle block $B=\begin{pmatrix}0&A^{-1}\\A^{-1}&A-A^{-3}\end{pmatrix}$ satisfies $\operatorname{tr}(B^3)=A^3-A^{-9}$ by direct multiplication; the other two diagonal entries of $c_2^3$ are $A^3$, hence $\operatorname{Tr}((G_2\otimes G_2)c_2^3)=A^7+A^3+A^{-1}-A^{-9}$. Here $w(\sigma_1^3)=3$, $\lambda_2=-A^3$, and $d_2=-A^2-A^{-2}$. [F1, given, construct, algebra]

1.3 Write a braid word as $\beta=\prod_{j=1}^m\sigma_{i_j}^{\varepsilon_j}$ with $\varepsilon_j\in\{1,-1\}$, using [F4] under [A1]. Each letter gives one crossing in the braid box. The closure pairs endpoints as prescribed by [F5]; in the diagram convention fixed in the Example, the joining arcs are routed outside the rectangular braid box without added crossings. A positive letter contributes $+1$ to writhe by [F6]. For a negative letter the opposite half twist [F7] exchanges the over- and under-strands; the determinant in the crossing-sign definition changes sign when its two vectors are exchanged, so that crossing contributes $-1$. Thus $\operatorname{wr}(\widehat\beta)=\sum_j\varepsilon_j=w(\beta)$ by [F8]. [A1, F4, F5, F6, F7, F8, algebra]

2.1 Substitution into [F1] using step 1.2 yields $J_2^{\mathrm{gen}}(T;q)=\frac{A^{-9}(A^7+A^3+A^{-1}-A^{-9})}{A^2+A^{-2}}=A^{-4}+A^{-12}-A^{-16}=t+t^3-t^4$, where $t=A^{-4}=q^{-1}$. [F1, step 1.2, algebra]

2.2 Given an oriented knot $K\subset\mathbb R^3\subset S^3$, choose a braid closure $\widehat\beta$ representing it by [F9]. By [F2], the fundamental-color ribbon trace is $\delta$ times the raw bracket and the twist is $-A^3$. Since $d_2=\delta$, formula [F1] gives $J_2^{\mathrm{gen}}(K;q)=(-A^3)^{-w(\beta)}\langle\widehat\beta\rangle$. By step 1.3 this is the writhe-normalized bracket $f_K(A)$. The use of [F9] requires [A1], and the framed trace in [F2] requires [A2]. [A1, A2, F1, F2, F9, step 1.3, given, algebra]

3.1 The bracket/Jones theorem [F3] now gives $f_K(A)=V_K(t)$ at $t=A^{-4}=q^{-1}$. Its hypothesis uses AC [A1], while the ribbon-trace identification in [F2] uses ACω [A2], already supplied in step 2.2; the proof keeps those axiom branches separate. Therefore $J_2^{\mathrm{gen}}(K;q)=V_K(q^{-1})$. [A1, A2, F2, F3, step 2.2, given] ∎

## Remarks

The all-color ribbon and Laurent-polynomial prerequisites are now supplied locally. The general fundamental-color identification uses the actual matrix-to-bracket and bracket-to-Jones suppliers linked above, with their fixed A/B smoothing chart, positive Artin crossing convention, and separate AC and countable-choice hypotheses. The displayed finite matrix calculation fixes the variable transport $t=q^{-1}=A^{-4}$.
