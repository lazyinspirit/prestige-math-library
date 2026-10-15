---
id: ex-hh-tensor-product-hopf-algebra
kind: example
title: "A tensor product Hopf algebra from a group and a primitive element"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 5
deps:
  - thm-hh-hopf-quotient-kernel-and-tensor-product-constructions
  - lem-hh-group-and-polynomial-hopf-algebras-exist
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, Exercise 28"
      url: "https://www.math.csi.cuny.edu/abhijit/iiser2018/reading/Hopf-lecture_notes.pdf"
---

## Example

Let $G$ be a group, let $kG$ have its group-algebra Hopf structure, and let $k[x]$ have primitive generator $x$. The tensor product $T=kG\otimes k[x]$ is a Hopf algebra. For $g,h\in G$ and $i,j,n\ge0$,
$$ (g\otimes x^i)(h\otimes x^j)=gh\otimes x^{i+j},\quad \Delta(g\otimes x^n)=\sum_{r=0}^n\binom nr(g\otimes x^r)\otimes(g\otimes x^{n-r}),\quad S(g\otimes x^n)=g^{-1}\otimes(-x)^n. $$
Its counit is $\varepsilon(g\otimes x^n)=1$ for $n=0$ and $0$ for $n>0$.
In particular $g\otimes1$ is group-like, $1\otimes x$ is primitive, and the two tensor factors commute inside $T$.

## Verification

**Given:** A group $G$, a field $k$, the group-algebra Hopf structure on $kG$, the primitive polynomial Hopf structure on $k[x]$, and the tensor-product Hopf construction proved on the A page.

[F1] [[thm-hh-hopf-quotient-kernel-and-tensor-product-constructions]]: for Hopf algebras $H,K$, the coproduct on $H\otimes K$ is $(\mathrm{id}\otimes\tau\otimes\mathrm{id})(\Delta_H\otimes\Delta_K)$, the antipode is $S_H\otimes S_K$, and both antipode identities hold.

[F2] [[lem-hh-group-and-polynomial-hopf-algebras-exist]]: group algebras have group-like basis elements and antipode inversion, while $k[x]$ has primitive generator $x$ and antipode $S(x)=-x$.

1.1 Applying [F1] to these two Hopf algebras gives the tensor-product Hopf structure. The tensor algebra multiplication yields $(g\otimes x^i)(h\otimes x^j)=gh\otimes x^{i+j}$, and it also shows that $g\otimes1$ commutes with $1\otimes x$. [given, F1, F2, algebra]

2.1 Since $\Delta(x)=1\otimes x+x\otimes1$ and the two summands commute in $k[x]\otimes k[x]$, the binomial theorem gives $\Delta(x^n)=\sum_{r=0}^n\binom nr x^r\otimes x^{n-r}$. Combining this with $\Delta(g)=g\otimes g$ and the flipped middle factors in [F1] gives the displayed formula for $\Delta(g\otimes x^n)$. [step 1.1, F1, F2, algebra]

3.1 The tensor antipode in [F1] gives $S(g\otimes x^n)=g^{-1}\otimes(-x)^n$. Directly, for the left antipode product on a basis tensor, $\sum_{r=0}^n\binom nr(g^{-1}\otimes(-x)^r)(g\otimes x^{n-r}) =(1\otimes x^n)\sum_{r=0}^n\binom nr(-1)^r,$ which is $1\otimes1$ for $n=0$ and $0$ for $n>0$. The right product is $(1\otimes x^n)\sum_{r=0}^n\binom nr(-1)^{n-r}$, with the same values. Thus the explicit formulas agree with both antipode equations from [F1]. [step 1.1, step 2.1, F1, algebra]

4.1 By [F1], the tensor-product counit is $\varepsilon_{kG}\otimes\varepsilon_{k[x]}$. The group-algebra counit has $\varepsilon_{kG}(g)=1$, while the polynomial counit is a unital algebra map with $\varepsilon_{k[x]}(x)=0$ by [F2], so it takes $1=x^0$ to $1$ and $x^n$ to $0$ for $n>0$. Therefore $\varepsilon(g\otimes x^n)=1$ for $n=0$ and $0$ for $n>0$, as claimed. [step 1.1, F1, F2, algebra] ∎

