---
id: "thm-continuous-dual-of-a-weak-star-topology"
kind: "theorem"
title: "Continuous dual of a weak star topology"
deps: ["lem-basic-weak-star-neighborhoods", "cor-relative-hahn-banach-dual-norming", "def-hahn-banach-extension-principle-relative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume HB ([[def-hahn-banach-extension-principle-relative]]). Every weak-star continuous scalar-linear $L:X^*\to\mathbb K$ is evaluation $L(f)=f(x)$ at a unique $x\in X$. Existence alone is choice-free; HB is used for uniqueness.

## Facts & Assumptions

[F1] Weak-star neighborhoods are finite evaluation disk intersections ([[lem-basic-weak-star-neighborhoods]]).

[F2] Under HB, $X^*$ separates points of $X$ ([[cor-relative-hahn-banach-dual-norming]]).

## Proof

**Given:** a real or complex normed space $X$ and a weak-star continuous scalar-linear $L$; assume HB for uniqueness.

1.1 Continuity at zero gives points $x_1,\ldots,x_m$ and $\varepsilon>0$ such that $|L(f)|<1$ when $|f(x_j)|<\varepsilon$ for all $j$. If all evaluations vanish, the same bound holds for every $tf$, forcing $L(f)=0$. Thus $L$ vanishes on the kernel of $A(f)=(f(x_1),\ldots,f(x_m))$. [given, F1]

2.1 The rule $\ell(Af)=L(f)$ is therefore well-defined and linear on $A(X^*)\subseteq\mathbb K^m$. Take a finite basis of this image and extend it to a basis of $\mathbb K^m$, adding standard coordinate vectors successively. Extend $\ell$ by zero on added basis vectors. Writing its coordinate coefficients as $c_j$ gives $L(f)=\sum_jc_jf(x_j)=f(\sum_jc_jx_j)$. Set $x=\sum_jc_jx_j$. Empty coordinates give $L=0$ and $x=0$. This finite construction needs no choice axiom. [step 1.1, algebra]

3.1 Every evaluation at a given $x$ is weak-star continuous. If $x,y$ give the same evaluation then $f(x-y)=0$ for every $f\in X^*$. Under HB point separation implies $x=y$. This includes the zero space and proves the asserted identification and its uniqueness. $\square$ [step 2.1, F1, F2]
