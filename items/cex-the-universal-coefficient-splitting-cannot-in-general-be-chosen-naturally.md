---
id: cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally
title: "A universal-coefficient splitting cannot in general be chosen naturally"
kind: counterexample
status: draft
origin: pipeline
deps: ["thm-the-homology-universal-coefficient-sequence-splits-nonnaturally"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The noncanonical splitting in the homological UCT cannot in general be chosen naturally in the complex and coefficient group.

## Counterexample

**Given:** the free complex $C_1=\mathbb Ze\oplus\mathbb Zf$, $C_0=\mathbb Zg$, with $d(e)=2g$ and $d(f)=0$, together with $G=\mathbb Z/2$.

1.1 Since $H_1(C)=\mathbb Zf$, $H_0(C)=\mathbb Z/2$, and $d\otimes G=0$, the degree-one UCT sequence is $0\longrightarrow (\mathbb Z/2)f\longrightarrow (\mathbb Z/2)e\oplus(\mathbb Z/2)f\xrightarrow{q}\mathbb Z/2\longrightarrow0$, with $q(ae+bf)=a$. [given, algebra]

2.1 The chain automorphism $u_1(e)=e+f$, $u_1(f)=f$, $u_0(g)=g$ induces the identity on both integral homology groups and hence on both outer UCT terms, while its action on the middle term is $(a,b)\mapsto(a,a+b)$. [step 1.1, algebra]

3.1 A section must send $1$ to $(1,t)$ for some $t\in\mathbb Z/2$. Naturality with respect to $u$ would force $(1,t+1)=(1,t)$, which is impossible. Therefore a UCT splitting cannot be chosen naturally for all complexes and coefficient groups. [step 2.1, contradiction] ∎
