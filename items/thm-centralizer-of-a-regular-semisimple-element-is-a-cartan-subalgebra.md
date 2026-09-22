---
id: thm-centralizer-of-a-regular-semisimple-element-is-a-cartan-subalgebra
kind: theorem
title: Centralizer of a regular semisimple element is Cartan
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-regular-element-and-rank-of-a-complex-lie-algebra, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-derivation-of-a-lie-algebra, def-semisimple-and-nilpotent-endomorphisms, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal, thm-engels-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20, Theorem 20.8"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra and
let $x\in\mathfrak g$ be regular semisimple
([[def-regular-element-and-rank-of-a-complex-lie-algebra]]). Then
$\mathfrak g^x=\ker(\operatorname{ad}_x)$ is a Cartan subalgebra of
$\mathfrak g$ in the sense of
[[def-cartan-subalgebra-of-a-lie-algebra]].

## Facts & Assumptions

**Given:** Such a Lie algebra $\mathfrak g$ and a regular semisimple element $x\in\mathfrak g$; write $m=\dim\mathfrak g^x=\operatorname{rank}(\mathfrak g)$.

[L1] Regularity of $x$ means $\dim\ker(\operatorname{ad}_y)\ge m$ for every $y\in\mathfrak g$ ([[def-regular-element-and-rank-of-a-complex-lie-algebra]]).

[L2] Semisimplicity of $x$ means that $\operatorname{ad}_x$ is semisimple, and then $\mathfrak g$ is the direct sum of its eigenspaces and $\mathfrak g=\ker(\operatorname{ad}_x)\oplus\operatorname{im}(\operatorname{ad}_x)$ ([[def-semisimple-and-nilpotent-endomorphisms]]). Also $\operatorname{ad}_{[u,v]}=[\operatorname{ad}_u,\operatorname{ad}_v]$ ([[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]]).

[L3] A Cartan subalgebra is a nilpotent subalgebra equal to its normalizer ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]]).

[L4] A finite-dimensional Lie algebra on which every adjoint operator is nilpotent is nilpotent ([[thm-engels-theorem]]).

[L5] $\operatorname{ad}_x(y)=[x,y]$ ([[def-derivation-of-a-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 $\mathfrak g^x$ is a Lie subalgebra: for $y,z\in\mathfrak g^x$, Jacobi and [L5] give $[x,[y,z]]=[\,[x,y],z\,]+[y,[x,z]]=0$. [L2, L5, algebra]

1.2 $\mathfrak g^x$ equals its normalizer. Let $y\in N_{\mathfrak g}(\mathfrak g^x)$. Since $x\in\mathfrak g^x$, we have $[y,x]\in\mathfrak g^x$, so $[x,[y,x]]=0$. Decompose $y=\sum_\lambda y_\lambda$ in the eigenspaces of the semisimple operator $\operatorname{ad}_x$ [L2]. Then $[x,y]=\sum_\lambda\lambda y_\lambda$ and $[x,[y,x]]=-\sum_\lambda\lambda^2y_\lambda=0$; the summands lie in distinct eigenspaces, so $\lambda^2y_\lambda=0$, and since the field is $\mathbb C$ we get $y_\lambda=0$ for $\lambda\ne0$. Hence $y=y_0\in\mathfrak g^x$, so $N_{\mathfrak g}(\mathfrak g^x)=\mathfrak g^x$. [L2, L5, algebra]

1.3 Every $z\in\mathfrak g^x$ acts by zero on $\mathfrak g^x$. Since $[x,z]=0$, the operators $A=\operatorname{ad}_x$ and $B=\operatorname{ad}_z$ commute [L2], and $A$ is semisimple [L2], so $\mathfrak g=\bigoplus_\lambda V_\lambda$ with $V_\lambda=\ker(A-\lambda)$ and each $V_\lambda$ is $B$-invariant. For $t\in\mathbb C$ put $M_t=A+tB=\operatorname{ad}_{x+tz}$. For $t\ne0$ an element $v=\sum_\lambda v_\lambda$ with $v_\lambda\in V_\lambda$ is killed by $M_t$ exactly when $\lambda v_\lambda+tBv_\lambda=0$ for every $\lambda$, so $\dim\ker M_t=\dim\ker(B|_{V_0})+\sum_{\lambda\ne0}m_\lambda(t)$, where $m_\lambda(t)=\dim\ker(B+\tfrac\lambda t)|_{V_\lambda}$ is the multiplicity of the eigenvalue $-\tfrac\lambda t$ of the endomorphism $B|_{V_\lambda}$ and therefore vanishes for all but finitely many $t$. Choosing $t$ outside this finite exceptional set and using [L1] at the element $x+tz$ gives $\dim\ker(B|_{V_0})=\dim\ker M_t\ge m=\dim V_0$, hence $\ker(B|_{V_0})=V_0$ and $B|_{V_0}=0$; by definition $V_0=\mathfrak g^x$. [L1, L2, L5, algebra]

2.1 Since $z\in\mathfrak g^x$ was arbitrary, step 1.3 shows that $\operatorname{ad}_z|_{\mathfrak g^x}=0$ for every $z\in\mathfrak g^x$, so $\mathfrak g^x$ is abelian and in particular nilpotent; alternatively, every adjoint operator of $\mathfrak g^x$ is nilpotent on $\mathfrak g^x$ and [L4] applies. By step 1.2, $\mathfrak g^x$ equals its normalizer, so [L3] makes $\mathfrak g^x$ a Cartan subalgebra. When $\mathfrak g=0$ we have $x=0$, $\mathfrak g^x=0$, and the zero subalgebra is a Cartan subalgebra of the zero algebra; no nonempty choice occurs. [L3, L4, step 1.2, step 1.3] ∎
