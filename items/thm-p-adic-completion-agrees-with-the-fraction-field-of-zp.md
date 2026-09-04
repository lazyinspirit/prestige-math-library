---
id: thm-p-adic-completion-agrees-with-the-fraction-field-of-zp
kind: theorem
title: "The p-adic completion agrees with the fraction field of Z_p"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-field-of-p-adic-numbers, thm-p-adic-completion-is-a-field, def-adic-completion-of-a-module, thm-kernel-and-universal-property-of-adic-completion, thm-bezout-identity, thm-fundamental-theorem-of-arithmetic]
proof_strategy: constructive
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 8, Remark 8.2"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes8.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Lemma 7.25"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Statement

Let $\mathbb Z_p$ denote the $(p)$-adic completion of $\mathbb Z$, equivalently
the inverse limit $\varprojlim_n \mathbb Z/p^n\mathbb Z$ from
[[def-adic-completion-of-a-module]]. Then the metric-completion field
$\mathbb Q_p$ of [[def-field-of-p-adic-numbers]] is canonically isomorphic to the
fraction field of $\mathbb Z_p$. Under the canonical embedding produced by this
isomorphism, the image of $\mathbb Z_p$ is exactly

$$\{x\in\mathbb Q_p:|x|_p\leq 1\}.$$

## Facts & Assumptions

**Given:** A prime $p$, its completion field $\mathbb Q_p$, and the $(p)$-adic
completion $\mathbb Z_p$ of $\mathbb Z$.

[L1] $\mathbb Q_p$ is a complete valued field obtained from rational Cauchy
classes ([[def-field-of-p-adic-numbers]], [[thm-p-adic-completion-is-a-field]]).

[L2] The $(p)$-adic completion of $\mathbb Z$ is the compatible-residue inverse
limit, and the completion map has kernel $\bigcap_n p^n\mathbb Z = 0$
([[def-adic-completion-of-a-module]],
[[thm-kernel-and-universal-property-of-adic-completion]]).

[L3] If two integers are coprime, Bezout's identity gives an inverse of either
one modulo the other ([[thm-bezout-identity]]).

[L4] Prime factorisation is unique ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** constructive.

1.1 Let $R\subseteq\mathbb Q_p$ be the set of classes having a $p$-adically Cauchy representative $(z_n)$ with every $z_n\in\mathbb Z$. For $x=[(z_n)]\in R$ and each $m\ge1$, the sequence $(z_n\bmod p^m)$ is eventually constant, because $z_n-z_{n'}\in p^m\mathbb Z$ for all large $n,n'$. Thus $x$ determines a compatible residue system and hence a map $$\Phi:R\longrightarrow\mathbb Z_p.$$ Equivalent integer representatives give the same eventual residues, so $\Phi$ is well defined and is a ring homomorphism. [L1, L2, given, construct]

1.2 Conversely, let $(a_m)_m\in\mathbb Z_p$ be a compatible residue system and choose the standard lift $b_m\in\{0,\ldots,p^m-1\}$ of $a_m$. Compatibility means $b_{m+1}\equiv b_m\pmod{p^m}$, so $|b_{m+1}-b_m|_p\le p^{-m}$. Hence $(b_m)$ is a $p$-adic Cauchy sequence of integers and defines an element of $R$. This construction inverts $\Phi$, so $R\cong\mathbb Z_p$ as rings. [L1, L2, given, construct]

2.1 The subring $R$ is exactly the closed unit ball. One inclusion is immediate because every integer has $p$-adic absolute value at most $1$. Conversely, let $x=[(x_n)]$ satisfy $|x|_p\le1$. After passing to a tail, take $|x_n|_p\le1$ and write $x_n=a_n/b_n$ in lowest terms. Then $p\nmid b_n$ by [L4]. For each $n$, [L3] gives an integer $c_n$ with $b_nc_n\equiv a_n\pmod{p^n}$. Hence $$|c_n-x_n|_p=\left|\frac{b_nc_n-a_n}{b_n}\right|_p\le p^{-n}.$$ Thus $(c_n)$ is an integer Cauchy sequence equivalent to $(x_n)$, so $x\in R$. Therefore $$R=\{x\in\mathbb Q_p:|x|_p\le1\}.$$ [L1, L3, L4, step 1.1, algebra]

3.1 Every element of $\mathbb Q_p$ is a fraction of elements of $R$. Indeed, if $x=[(x_n)]$, the Cauchy sequence $(x_n)$ is bounded, so for some integer $N\ge0$ one has $|p^Nx_n|_p\le1$ eventually. Passing to the limit and using step 2.1 gives $p^Nx\in R$, while $p^N\in R$ is nonzero. Hence $$x=\frac{p^Nx}{p^N}.$$ Since $R$ is a subring of the field $\mathbb Q_p$, its fraction field is all of $\mathbb Q_p$. [L1, step 2.1, algebra]

4.1 Transporting step 2.1 through the ring isomorphism $R\cong\mathbb Z_p$ from step 1.2 identifies $\mathbb Q_p$ canonically with $\operatorname{Frac}(\mathbb Z_p)$ and identifies $\mathbb Z_p$ with the closed unit ball. [step 1.2, step 2.1, step 3.1, discharge-construct] ∎
