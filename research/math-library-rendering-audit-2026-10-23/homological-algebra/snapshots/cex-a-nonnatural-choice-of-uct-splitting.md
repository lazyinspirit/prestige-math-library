---
id: cex-a-nonnatural-choice-of-uct-splitting
title: "A nonnatural choice of universal-coefficient splitting"
kind: counterexample
status: published
origin: pipeline
deps: ["cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Choosing a complement in a free cycle-boundary decomposition gives a UCT splitting that is changed by a chain automorphism moving that complement; it is therefore not natural.

## Counterexample

**Given:** the free complex $C_1=\mathbb Ze\oplus\mathbb Zf$, $C_0=\mathbb Zg$, with $d(e)=2g$ and $d(f)=0$, and the coefficient group $G=\mathbb Z/2$.

1.1 Here $H_1(C)=\mathbb Zf$, $H_0(C)=\mathbb Z/2$, and the differential of $C\otimes G$ is zero.  Thus the degree-one UCT sequence is $0\longrightarrow (\mathbb Z/2)f\longrightarrow (\mathbb Z/2)e\oplus(\mathbb Z/2)f\xrightarrow{q}\mathbb Z/2\longrightarrow0$, where $q(ae+bf)=a$. [given, algebra]

2.1 The maps $u_1(e)=e+f$, $u_1(f)=f$, and $u_0(g)=g$ define a chain automorphism inducing the identity on $H_1(C)$ and $H_0(C)$, but $u_1\otimes1$ sends $(a,b)$ to $(a,a+b)$ on the middle UCT term. [step 1.1, algebra]

3.1 Any section has $s(1)=(1,t)$.  Naturality with respect to $u$ would require $(u_1\otimes1)s(1)=s(1)$ because $u$ acts identically on the two outer terms, but $(1,t+1)\ne(1,t)$.  Hence no section for this complex and coefficient group is invariant under all chain automorphisms. [step 2.1, contradiction] ∎
