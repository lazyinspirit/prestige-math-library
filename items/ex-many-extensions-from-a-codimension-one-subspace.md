---
id: ex-many-extensions-from-a-codimension-one-subspace
kind: example
title: "A codimension-one subspace can admit many norm-preserving Hahn-Banach extensions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-hahn-banach-one-step-extension,
       thm-hahn-banach-norm-preserving-extension]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis, Theorem 26.1(a)"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Corollary 4.15"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Example

Let $X=(\mathbb{R}^2,\|\cdot\|_\infty)$, let
$M:=\operatorname{span}\{(1,1)\}$, and define $f_0:M \to \mathbb{R}$ by
$f_0(t,t)=t$. Then $\|f_0\|=1$, and for every $c \in [-1,1]$ the formula

$$F_c(a,b):=\frac{1+c}{2}a+\frac{1-c}{2}b$$

defines a norm-preserving extension of $f_0$ to all of $X$. So a codimension-one
subspace can have infinitely many Hahn-Banach extensions of the same norm.

## Facts & Assumptions

**Given:** The normed space $X=(\mathbb{R}^2,\|\cdot\|_\infty)$, the diagonal subspace $M=\operatorname{span}\{(1,1)\}$, and the functional $f_0(t,t)=t$.

[L1] In a one-step Hahn-Banach extension, the admissible values form a nonempty interval ([[lem-hahn-banach-one-step-extension]]).

[L2] A bounded real linear functional extends with the same norm ([[thm-hahn-banach-norm-preserving-extension]]).

## Verification

**Proof technique:** direct.

1.1 For $(t,t) \in M$ one has $$|f_0(t,t)|=|t|=\|(t,t)\|_\infty,$$ so $\|f_0\|=1$. Also every $(a,b) \in \mathbb{R}^2$ decomposes as $$ (a,b)=\frac{a+b}{2}(1,1)+\frac{a-b}{2}(1,-1), $$ so $X=M \oplus \mathbb{R}(1,-1)$. [given, algebra]

2.1 If $F$ is a linear extension of $f_0$ and $c:=F(1,-1)$, then step 1.1 forces $$ F(a,b)=\frac{a+b}{2}F(1,1)+\frac{a-b}{2}F(1,-1) =\frac{1+c}{2}a+\frac{1-c}{2}b. $$ Conversely, the displayed formula defines a linear functional extending $f_0$. [step 1.1, given, construct, algebra]

3.1 Let $\varphi(a,b):=\alpha a+\beta b$ on $(\mathbb{R}^2,\|\cdot\|_\infty)$. If $\|(a,b)\|_\infty \le 1$, then $$|\varphi(a,b)| \le |\alpha|\,|a|+|\beta|\,|b| \le |\alpha|+|\beta|.$$ Choosing $a=\operatorname{sgn}\alpha$ and $b=\operatorname{sgn}\beta$ (interpreting $\operatorname{sgn}0=0$) gives $\|(a,b)\|_\infty \le 1$ and $|\varphi(a,b)|=|\alpha|+|\beta|$, so $\|\varphi\|=|\alpha|+|\beta|$. Applying this to the formula from step 2.1 yields $$ \|F_c\|=\frac{|1+c|+|1-c|}{2}. $$ This equals $1$ exactly when $-1 \le c \le 1$. [step 2.1, algebra]

4.1 Therefore every $c \in [-1,1]$ gives a norm-preserving extension of $f_0$. This computes explicitly the admissible interval predicted abstractly by [L1], and in particular is consistent with the existence statement of [L2]. [L1, L2, step 3.1] ∎
