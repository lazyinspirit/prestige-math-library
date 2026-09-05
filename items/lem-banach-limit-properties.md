---
id: lem-banach-limit-properties
kind: lemma
title: "A Banach limit is positive, has norm one, is shift invariant, and lies between liminf and limsup"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-banach-limit-from-hahn-banach, def-limsup-liminf, def-cesaro-mean,
       thm-limsup-subadditive]
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Problem 4.20"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Banach limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach_limit"
---

## Statement

Let $L:\ell^\infty \to \mathbb{R}$ be a functional as in
[[ex-banach-limit-from-hahn-banach]]. Then:

1. $L$ is positive: if $x_n \ge 0$ for all $n$, then $L(x) \ge 0$.
2. $L$ is shift invariant.
3. $\|L\|=1$ for the supremum norm on $\ell^\infty$.
4. For every bounded real sequence $x$,
   $$\liminf_{n \to \infty} x_n \le L(x) \le \limsup_{n \to \infty} x_n.$$

So $L$ is a Banach limit.

## Facts & Assumptions

**Given:** A bounded real sequence $x$, its limit inferior and limit superior, and a functional $L:\ell^\infty \to \mathbb{R}$ with the three properties constructed in [[ex-banach-limit-from-hahn-banach]].

[L1] The previous example gives a linear functional $L$ extending Cesaro limit, dominated by $\limsup \sigma_n$, and shift invariant ([[ex-banach-limit-from-hahn-banach]]).

[L2] For a real sequence, $\liminf x_n$ and $\limsup x_n$ are defined from tail infima and tail suprema ([[def-limsup-liminf]]).

[L3] The Cesaro means of a constant sequence are equal to that constant ([[def-cesaro-mean]]).

[L4] Limit superior is subadditive ([[thm-limsup-subadditive]]).

## Proof

**Proof technique:** direct.

1.1 Shift invariance is part of [L1]. Let $\mathbf{1}=(1,1,1,\dots)$. By [L3], every Cesaro mean of $\mathbf{1}$ equals $1$, so the extension property in [L1] gives $L(\mathbf{1})=1$. By linearity, $$L(c\mathbf{1})=c \qquad (c \in \mathbb{R}).$$ [L1, L3, given, algebra]

1.2 Suppose $x_n \ge 0$ for every $n$. Then every Cesaro mean of $-x$ is nonpositive, so $$\limsup_{n \to \infty}\sigma_n(-x) \le 0.$$ The domination part of [L1] therefore gives $$-L(x)=L(-x) \le \limsup_{n \to \infty}\sigma_n(-x) \le 0,$$ hence $L(x) \ge 0$. So $L$ is positive. [L1, L4, given, algebra]

2.1 Let $M:=\|x\|_\infty$. Then $-M\mathbf{1} \le x \le M\mathbf{1}$ termwise, so the sequences $M\mathbf{1}-x$ and $M\mathbf{1}+x$ are pointwise nonnegative. By step 1.2, $$0 \le L(M\mathbf{1}-x)=M-L(x) \qquad \text{and} \qquad 0 \le L(M\mathbf{1}+x)=M+L(x).$$ Thus $|L(x)| \le M=\|x\|_\infty$, so $\|L\| \le 1$. Since step 1.1 gives $L(\mathbf{1})=1$ and $\|\mathbf{1}\|_\infty=1$, one also has $\|L\| \ge 1$. Therefore $\|L\|=1$. [step 1.1, step 1.2, given, algebra]

2.2 Write $\alpha:=\liminf_{n \to \infty}x_n$ and $\beta:=\limsup_{n \to \infty}x_n$. Let $\varepsilon > 0$. By the definition in [L2], there is $N \in \mathbb{N}$ such that for all $k \ge N$, $$\alpha-\varepsilon \le x_k \le \beta+\varepsilon.$$ Hence every term of the shifted sequence $S^N x$ lies between the constant sequences $(\alpha-\varepsilon)\mathbf{1}$ and $(\beta+\varepsilon)\mathbf{1}$. Using positivity from step 1.2, the constant-sequence values from step 1.1, and shift invariance from [L1], we get $$ \alpha-\varepsilon=L((\alpha-\varepsilon)\mathbf{1}) \le L(S^N x)=L(x) \le L((\beta+\varepsilon)\mathbf{1})=\beta+\varepsilon. $$ [L1, L2, step 1.1, step 1.2, given, choose, algebra]

3.1 Since the inequalities of step 2.2 hold for every $\varepsilon > 0$, one obtains $\alpha \le L(x) \le \beta$. Together with steps 1.1, 1.2, and 2.1, this shows that $L$ is a Banach limit. [step 2.2] ∎
