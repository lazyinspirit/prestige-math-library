---
id: fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category
kind: false-statement
title: "FALSE: the Yoneda product is graded commutative for every abelian category"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-yoneda-product-is-associative-and-unital, def-graded-ext-algebra-of-an-object, thm-free-modules-are-projective-with-choice-boundary]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

FALSE: the Yoneda product is graded commutative for every abelian category

## Facts & Assumptions

**Given:** A field $k$, the algebra
$R=k\langle x,y\rangle/(x,y)^2$, and its simple left module
$S=R/(x,y)$.

## Refutation

**Proof technique:** direct.

1.1 Put $V=kx\oplus ky$, so $R=k\oplus V$ and $V^2=0$. A free resolution of $S$ is $P_n=R\otimes_kV^{\otimes n}$ with $$d_n(r\otimes v_1\otimes\cdots\otimes v_n) =rv_1\otimes v_2\otimes\cdots\otimes v_n.$$ Its kernel in degree $n$ is $V\otimes_kV^{\otimes n}$, exactly the image of $d_{n+1}$, so it is exact. Applying $\operatorname{Hom}_R(-,S)$ gives zero differentials and identifies $\operatorname{Ext}^n_R(S,S)$ with $(V^*)^{\otimes n}$. [given, construct]

2.1 Under Yoneda splicing, the two degree-one dual basis classes $u,v\in V^*$ multiply by tensor concatenation. Thus $uv$ and $vu$ are the two distinct basis tensors of $(V^*)^{\otimes2}$. In particular the self-Ext algebra is the free associative algebra $T_k(V^*)$, which is not graded commutative. This is a typed counterexample inside one self-Ext algebra. [step 1.1, algebra] ∎
