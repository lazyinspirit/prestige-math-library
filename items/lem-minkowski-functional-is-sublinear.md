---
id: lem-minkowski-functional-is-sublinear
kind: lemma
title: The gauge of a convex absorbing set is sublinear
status: published
origin: pipeline
deps: [def-absorbing-balanced-and-absolutely-convex-set, def-minkowski-functional]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Lemma 5.1
      url: https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html
---

## Statement

If $C\subseteq X$ is convex and absorbing, then its gauge satisfies
$p_C(rx)=r p_C(x)$ for $r\ge0$ and $p_C(x+y)\le p_C(x)+p_C(y)$.  Thus $p_C$ is
a real sublinear functional.

## Facts & Assumptions

**Given:** A convex absorbing set $C\subseteq X$ and $x,y\in X$.

[F1] The gauge is $p_C(z)=\inf\{t>0:z\in tC\}$, and its defining set is nonempty ([[def-minkowski-functional]]).

## Proof

**Proof technique:** direct.

1.1 For $r>0$, $rx\in tC$ holds exactly when $x\in(t/r)C$; taking infima gives $p_C(rx)=rp_C(x)$, while $r=0$ gives $p_C(0)=0$. [F1, given, algebra]

1.2 Absorption and convexity first give $0\in C$. Given $a>p_C(x)$ and $b>p_C(y)$, choose $s<a$, $t<b$ with $x\in sC$, $y\in tC$; convexity with $0$ enlarges these to $x=ac$, $y=bd$ for some $c,d\in C$. Then $(ac+bd)/(a+b)\in C$, hence $x+y\in(a+b)C$. [F1, given, choose]

2.1 Therefore $p_C(x+y)\le a+b$ for every such $a,b$; letting them decrease to the two infima proves subadditivity. [step 1.2, F1, algebra] ∎
