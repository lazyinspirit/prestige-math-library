---
id: alg-colored-jones-from-ribbon-evaluation
kind: algorithm
title: Colored Jones evaluation from ribbon data
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-countable-choice
  - def-normalized-colored-jones-sequence
  - alg-ribbon-evaluation-from-colored-braid-word
  - def-axiom-of-choice
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Hitoshi Murakami, An Introduction to the Volume Conjecture, §2.4
      url: https://arxiv.org/pdf/1002.0126
    - title: P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, §§8.9–8.10
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

For the identification of the output with the normalized colored Jones knot invariant and its integral Laurent representative, assume the Axiom of Choice and Countable Choice. The finite fixed-braid rational operations below use only the supplied matrix data.

Input an integer $N\ge1$, an integer $n\ge1$, a finite word $\beta=\sigma_{i_1}^{\epsilon_1}\cdots\sigma_{i_m}^{\epsilon_m}$ with $\epsilon_j\in\{1,-1\}$ and $1\le i_j<n$, whose closure joins each bottom endpoint to the top endpoint in the same position outside the braid cylinder and has one component, and the generic matrix ribbon data for the color $V_N$ defined above in this pair. The coefficient field is $F=\mathbb Q(A)$, whose elements are encoded as exact rational functions and whose field operations, equality test, and inversion of a nonzero element terminate. The output is the generic rational value $J_N^{\mathrm{gen}}(\widehat\beta;A^4)\in F$. The procedure is:

1. Form the positive crossing matrix $c_N=P\mathcal R_N$ from the finite universal-$R$ sum in the color definition. The sum terminates at $r=N-1$ because $E^N=F^N=0$; its inverse is available because $c_N$ is the braiding in the proved ribbon data.

2. Form the $N^n\times N^n$ pivotal matrix $J_W=G_N^{\otimes n}$ on $W=V_N^{\otimes n}$ by finite tensor products; the prescribed pivotal comparison is monoidal. Invoke the finite colored-braid matrix evaluator with strand count $n$, the word $\beta$ in composition order, the constant color tuple $(V_N,\ldots,V_N)$, the positive matrix $c_N$, its inverse, and $J_W$, using the prescribed duality and twist data. Record its exact output $t=\operatorname{Tr}(J_W\rho_N(\beta))$.

3. Compute the exponent sum $w(\beta)=\sum \varepsilon$ and the generic quantum dimension $d_N$.

4. Return $\lambda_N^{-w(\beta)}t/d_N$ in $F$. Reject a malformed braid word, matrix data differing from the prescribed color data, or an input with $d_N=0$ in the coefficient field. This algorithm does not substitute a root of unity into the generic quotient; root evaluation is a separate operation on a proved Laurent-polynomial representative.

The normalized-sequence Laurentness result identifies this rational output with a unique $J_N(\widehat\beta;q)\in\mathbb Z[q,q^{-1}]$ under $q=A^4$. Root evaluation is a separate finite operation: given $q_0\ne0$ and the representative $J_N(\widehat\beta;q)=\sum_k c_kq^k$, return $\sum_k c_kq_0^k$.

The positive generator convention is the braid-height convention used by the matrix $c_N$: strand $i+1$ passes over strand $i$.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),scale=.8]
  \draw[->] (0,1) -- (.46,.08);
  \draw[->] (.54,-.08) -- (1,-1);
  \draw[->] (1,1) .. controls (.72,.5) and (.28,-.5) .. (0,-1);
  \node at (-.2,1) {$i$};
  \node at (1.2,1) {$i+1$};
  \node at (-.2,-1) {$i+1$};
  \node at (1.2,-1) {$i$};
\end{tikzpicture}
```

The continuous strand is the overpassing strand. The diagram records the chosen positive generator only; the algorithm and any proof use the explicit matrix and ribbon identities, not the drawing.

## Definition references

[[def-normalized-colored-jones-sequence|Generic color, crossing matrix, pivotal trace, and normalization]]

[[alg-ribbon-evaluation-from-colored-braid-word|Finite colored-braid matrix evaluation]]

[Murakami, *An Introduction to the Volume Conjecture*, §2.4](https://arxiv.org/pdf/1002.0126)

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §§8.9–8.10](https://math.mit.edu/~etingof/egnobookfinal.pdf)
