---
id: thm-word-quotient-model-is-free
kind: theorem
title: 'The word-quotient group $W(X)/{\sim}$ satisfies the universal property of the free group on $X$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-word-quotient-model-of-the-free-group, thm-word-quotient-model-is-a-group, def-free-group, def-group, def-group-homomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.3"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/universal.html"
    - title: "Richard Elman, Lectures on Abstract Algebra, §18"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---

## Statement

For every set $X$, the group $F_{\mathrm{word}}(X)=W(X)/{\sim}$ together with
$\iota_{\mathrm{word}}(x)=[x]$ is a free group on $X$ in the sense of
[[def-free-group]].

## Facts & Assumptions

**Given:** A set $X$, a group $G$, and a function $u:X\to G$.

[L1] $F_{\mathrm{word}}(X)$ is a group under $[w][v]=[wv]$ ([[thm-word-quotient-model-is-a-group]]).

[F1] A group homomorphism $f:G\to H$ satisfies $f(xy)=f(x)f(y)$ for all $x,y\in G$ ([[def-group-homomorphism]]).

[F2] In a group, for every $x$ there is $y$ with $yx=e=xy$ ([[def-group]]).

[F3] A free group on $X$ is a group with a map from $X$ for which every function from $X$ to a group extends uniquely to a group homomorphism ([[def-free-group]]).

## Proof

**Proof technique:** constructive.

1.1 Extend $u$ to formal letters by $\widetilde u(x)=u(x)$ and $\widetilde u(x^{-1})=u(x)^{-1}$, and for $w=a_1\cdots a_n$ define $E(w)=\widetilde u(a_1)\cdots\widetilde u(a_n)$, with $E(\varepsilon)=e_G$. [F2, given, construct]

2.1 An elementary insertion or cancellation changes this product only by inserting or deleting an adjacent factor $u(x)u(x)^{-1}$ or $u(x)^{-1}u(x)$, which equals $e_G$; hence one elementary move leaves $E(w)$ unchanged. [F2, step 1.1]

3.1 A finite sequence of elementary moves therefore preserves evaluation, so $\widehat u([w]):=E(w)$ is well-defined on equivalence classes. [step 2.1, construct]

4.1 For words $w,v$, one has $E(wv)=E(w)E(v)$, so [L1] and [F1] show that $\widehat u$ is a homomorphism; moreover $\widehat u([x])=u(x)$, so it extends $u$. [L1, F1, step 3.1]

5.1 If $h:F_{\mathrm{word}}(X)\to G$ is any homomorphism with $h([x])=u(x)$, then for $w=a_1\cdots a_n$ the class $[w]$ is the ordered product of the one-letter classes, and [F1] forces $h([w])=\widetilde u(a_1)\cdots\widetilde u(a_n)=\widehat u([w])$; hence $h=\widehat u$. [L1, F1, step 4.1]

6.1 The homomorphism of step 4.1 exists for every $G$ and $u$, and step 5.1 makes it unique; by [F3], $(F_{\mathrm{word}}(X),\iota_{\mathrm{word}})$ is a free group on $X$, including when $X$ is empty. [F3, step 4.1, step 5.1, discharge-construct] ∎
