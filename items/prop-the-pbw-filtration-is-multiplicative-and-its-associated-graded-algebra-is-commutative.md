---
id: prop-the-pbw-filtration-is-multiplicative-and-its-associated-graded-algebra-is-commutative
kind: proposition
title: The PBW filtration is multiplicative and has commutative associated graded
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-pbw-filtration-on-the-universal-enveloping-algebra, def-associated-graded-algebra-of-a-filtered-algebra, lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §§12.2 and 13.1, printed pp. 70 and 74–75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.2, printed pp. 72–74"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

For the PBW filtration,

$$F_mU(\mathfrak g)F_nU(\mathfrak g)\subseteq F_{m+n}U(\mathfrak g).$$

Moreover $[F_m,F_n]\subseteq F_{m+n-1}$ when $m+n\geq1$, and therefore
$\operatorname{gr}U(\mathfrak g)$ is commutative.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ and the PBW filtration on its enveloping
algebra.

[L1] $F_n$ is spanned by words of length at most $n$
([[def-pbw-filtration-on-the-universal-enveloping-algebra]]).

[L2] In $U(\mathfrak g)$, $\iota_{\mathfrak g}(x)\iota_{\mathfrak g}(y)-\iota_{\mathfrak g}(y)\iota_{\mathfrak g}(x)=\iota_{\mathfrak g}([x,y])$
([[lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra]]).

[L3] Associated-graded multiplication is that of
[[def-associated-graded-algebra-of-a-filtered-algebra]].

## Proof

**Proof technique:** direct.

1.1 Concatenating a word of length at most $m$ with one of length at most $n$ gives length at most $m+n$. Taking spans and quotient images proves $F_mF_n\subseteq F_{m+n}$. [L1, algebra]

1.2 For a generator $x$ and a word $b_1\cdots b_s$, repeated use of $[x,ab]=[x,a]b+a[x,b]$ gives $[x,b_1\cdots b_s]=\sum_j b_1\cdots[x,b_j]\cdots b_s$. By [L2], every $[x,b_j]$ is again the image of one element of $\mathfrak g$, so this commutator lies in $F_s$. [L2, algebra]

2.1 For words $a=a'x$ of length $r>0$ and $b$ of length $s>0$, the identity $[a'x,b]=a'[x,b]+[a',b]x$, together with step 1.2 and induction on $r$, puts both terms in $F_{r+s-1}$. The scalar boundary cases commute, and bilinearity therefore gives $[F_m,F_n]\subseteq F_{m+n-1}$. [step 1.1, step 1.2, algebra]

3.1 If $a\in F_m$ and $b\in F_n$, step 2.1 says that $ab$ and $ba$ have the same class in $F_{m+n}/F_{m+n-1}$. By [L3], all homogeneous elements of $\operatorname{gr}U(\mathfrak g)$ commute, hence the whole associated graded algebra is commutative. [step 2.1, L3] ∎
