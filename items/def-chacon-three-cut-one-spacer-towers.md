---
id: "def-chacon-three-cut-one-spacer-towers"
kind: "definition"
title: "Chacon three cut one spacer towers"
deps: ["def-lebesgue-measure-and-the-lebesgue-sigma-algebra", "thm-lebesgue-measure-is-a-complete-measure", "thm-lebesgue-measure-of-a-box-of-every-kind", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Peter Varju, Topics in Ergodic Theory, Michaelmas 2016, section 11 pp.36–40 (complete Chacon argument; public mirror)
      url: https://www.scribd.com/document/345852025/ergodic
    - title: Sarig Problem 3.8 pp.99–101
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
    - title: Katok–Thouvenot §5.2.3 pp.696–697
      url: https://akatok.s3.amazonaws.com/pub/KT-spectral.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

Work on $[0,1)$ with the Lebesgue measurable sets and restricted set function introduced in [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]. Under the countable-choice consequence of [[def-axiom-of-choice]], [[thm-lebesgue-measure-is-a-complete-measure]] makes this a complete measure space. The same assumption supplies the countable choice in [[thm-lebesgue-measure-of-a-box-of-every-kind]] used for the actual interval measures below. The finite interval recursion itself is choice-free.

The stage-zero tower is the ordered list consisting of $L_{0,0}=[0,2/3)$; its reservoir is $R_0=[2/3,1)$. Suppose the stage-$r$ list is $(L_{r,0},\ldots,L_{r,h_r-1})$, with equal width $w_r$. Cut each physical half-open interval $L_{r,j}$ into its left, middle and right thirds $L_{r,j}^{(0)},L_{r,j}^{(1)},L_{r,j}^{(2)}$. The next ordered list is
$$\bigl(L_{r,0}^{(0)},\ldots,L_{r,h_r-1}^{(0)},L_{r,0}^{(1)},\ldots,L_{r,h_r-1}^{(1)},J_r,L_{r,0}^{(2)},\ldots,L_{r,h_r-1}^{(2)}\bigr),$$
where $J_r=[1-3^{-(r+1)},1-3^{-(r+2)})$ is taken from the left end of $R_r$ and retained as a new level. Put $R_{r+1}=[1-3^{-(r+2)},1)$.

The height and width obey $h_0=1$, $h_{r+1}=3h_r+1$ and $w_r=2/3^{r+1}$. Indeed the initial width is $2/3$; taking thirds divides it by three, and $|J_r|=3^{-(r+1)}-3^{-(r+2)}=2/3^{r+2}=w_{r+1}$. The spacer and the remaining reservoir partition the previous reservoir; all old levels partition into their thirds. Thus by finite induction the new intervals are pairwise disjoint and, together with $R_{r+1}$, partition $[0,1)$.

Induction also gives $h_r=(3^{r+1}-1)/2$: the initial value is one, and $3(3^{r+1}-1)/2+1=(3^{r+2}-1)/2$. Consequently the tower union $C_r=\bigcup_{j<h_r}L_{r,j}$ has measure $h_rw_r=1-3^{-(r+1)}$, and the reservoir has measure $3^{-(r+1)}$. Every interval is left-closed and right-open; no endpoint belongs to two levels.

Define $T_r$ on $C_r\setminus L_{r,h_r-1}$ by the unique translation taking $L_{r,j}$ to $L_{r,j+1}$. If their left endpoints are $a_j,a_{j+1}$, that formula is $T_r(x)=x+a_{j+1}-a_j$ on $L_{r,j}$. At stage zero this is the empty partial map. Its range is $C_r\setminus L_{r,0}$. The existence of an invertible limiting probability transformation is a separate lemma, not part of the finite definition.
