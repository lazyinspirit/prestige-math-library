---
id: lem-higher-divided-quantum-serre-relations-by-skew-derivation
kind: lemma
title: Higher divided quantum Serre relations from a skew derivation
status: published
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-drinfeld-jimbo-quantized-enveloping-algebra, def-lusztig-divided-power-integral-form, lem-quantum-pascal-recurrence-and-gaussian-integrality, def-positive-negative-and-toral-quantum-subalgebras]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: George Lusztig, Introduction to Quantum Groups
      url: https://math.mit.edu/~gyuri/papers/quant.gr.pdf
      locator: Chapter 7, §§7.1.1–7.1.6, printed pp. 55–57.
---

## Statement

For distinct simple indices $i,j$, put $a=-a_{ij}\ge0$ and $v=q_i$. In the actual divided-power integral form, for $n,m\ge0$ and $m>an$,
$$\sum_{r+s=m}(-1)^rv^{r(an-m+1)}E_i^{(r)}E_j^{(n)}E_i^{(s)}=0.$$
The same identity holds with $E$ replaced by $F$. Since it is an equality of integral elements, it survives every specialization of the integral form, even when its divided-power indices have vanishing quantum factorials after specialization. This assertion does not assume a presentation theorem for that integral form.

## Facts & Assumptions

**Given:** The generic Drinfeld–Jimbo algebra and its actual integral subalgebra.

[F1] The ordinary positive and negative quantum Serre relations are defining relations of [[def-drinfeld-jimbo-quantized-enveloping-algebra]]. The root grading of [[def-positive-negative-and-toral-quantum-subalgebras]] gives $i$-weight $\langle h_i,\beta\rangle$ to degree $\beta$.

[F2] Divided powers are generic powers divided by their nonzero quantum factorials, and generate actual integral subalgebras ([[def-lusztig-divided-power-integral-form]]). Gaussian coefficients satisfy their Pascal recurrence and $G(m,r;v^2)=v^{r(m-r)}\left[\begin{smallmatrix}m\\r\end{smallmatrix}\right]_v$ ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

## Proof

**Given:** The data above.

1.1 For a homogeneous positive element $x$ of $i$-weight $w$, define $\delta(x)=E_ix-v^wxE_i$. It has weight $w+2$, and multiplication directly gives $\delta(xy)=\delta(x)y+v^{\operatorname{wt}_i(x)}x\delta(y)$. Induction using this rule and Gaussian Pascal gives $\delta^m(x)=\sum_{r=0}^m(-1)^rv^{rw+r(r-1)}G(m,r;v^2)E_i^{m-r}xE_i^r$: applying $\delta$ to a summand raises the total weight from $w+2m$ to $w+2m+2$, and if $c_{m,r}$ is the coefficient of $E_i^{m-r}xE_i^r$, its two contributions give $c_{m+1,r}=c_{m,r}-v^{w+2m}c_{m,r-1}$. Substitution of the displayed coefficient reduces this to $G(m+1,r;v^2)=G(m,r;v^2)+v^{2(m-r+1)}G(m,r-1;v^2)$, exactly Pascal. Equivalently, substituting the Gaussian conversion in [F2], its coefficient is $(-1)^rv^{r(w+m-1)}\left[\begin{smallmatrix}m\\r\end{smallmatrix}\right]_v$. [F1, F2, given, construct, algebra]

2.1 The ordinary Serre relation is exactly $\delta^{a+1}(E_j)=0$, up to its nonzero scalar and reversal of the summation index: here $w=-a$, so the exponent $r(w+m-1)$ is zero when $m=a+1$. Applying the skew Leibniz rule repeatedly to $E_j^n$, every summand of $\delta^m(E_j^n)$ is a scalar times $\delta^{r_1}(E_j)\cdots\delta^{r_n}(E_j)$ with $\sum r_k=m$. If $m>an$, some $r_k>a$, so that factor vanishes by the Serre relation and further applications of $\delta$. For $n=0$, $\delta(1)=0$ gives the same conclusion. Thus $\delta^m(E_j^n)=0$ under the asserted inequality. [F1, step 1.1, algebra]

3.1 Divide this zero identity generically by $[m]_i![n]_j!$ and replace the index $r$ in step 1.1 by $m-r$. The common nonzero scalar is $(-1)^mv^{m(-an+m-1)}$; the remaining sum is exactly the one in the statement. Each of its factors is a divided power in the actual integral subalgebra, so this generic equality is already an equality there. Tensoring an equality with any specialization retains it; no specialized vanishing factorial is inverted. [F2, step 2.1, algebra]

4.1 The proof for $F$ takes place in the negative half with its positive-height grading: assign degree $\alpha_k$ to $F_k$ for this argument and define $\delta_-(x)=F_ix-v^{\operatorname{wt}_i(x)}xF_i$. Its same-sign Serre relations and the same multiplication computation give every preceding step verbatim, with $E$ replaced by $F$. This completes both integral identities by finite algebraic computations. [F1, F2, step 3.1, algebra] ∎
