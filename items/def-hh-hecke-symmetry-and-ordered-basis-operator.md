---
id: def-hh-hecke-symmetry-and-ordered-basis-operator
kind: definition
title: "The ordered-basis Hecke operator and its normalization"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 0
deps: [def-hh-scalar-and-tensor-conventions]
justified_by: [lem-hh-type-a-tensor-operator-is-a-hecke-symmetry]
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alexei Davydov and Alexander Molev, A categorical approach to classical and quantum Schur–Weyl duality"
      url: "https://arxiv.org/pdf/1008.3739"
      locator: "§4.2, pp. 15–16, equations (4.2)–(4.3): the ordered-basis operator"
verification:
  precheck: n/a
---

## Definition

Let $F=\mathbb Q(q)$, where $q$ is an indeterminate, let $N\ge1$, and let $V_N$ have ordered basis $e_1<\cdots<e_N$. Put $c=q-q^{-1}$. Define $T\in\operatorname{End}_F(V_N\otimes V_N)$ by

$$T(e_a\otimes e_b)=\begin{cases}q\,e_a\otimes e_a,&a=b,\\ e_b\otimes e_a,&a<b,\\ e_b\otimes e_a+c\,e_a\otimes e_b,&a>b.\end{cases}$$

For an invertible operator $R$ on $V_N\otimes V_N$, the phrase **Hecke symmetry of normalized parameter $q$** means that the operators $R_1=R\otimes1$ and $R_2=1\otimes R$ on $V_N^{\otimes3}$ satisfy $R_1R_2R_1=R_2R_1R_2$, and that $(R-qI)(R+q^{-1}I)=0$. This is a property in the definition, not an assertion that every invertible operator has it. The next item proves that the displayed $T$ has this property.

The alternative generator $S=qT$ has parameter $Q=q^2$ and satisfies $(S-QI)(S+I)=0$ whenever $T$ satisfies its normalized quadratic relation. At $q=1$ the displayed $T$ is the ordinary flip. At $q=-1$ the quadratic relation becomes $T^2=I$, while the displayed operator is not the ordinary flip.
