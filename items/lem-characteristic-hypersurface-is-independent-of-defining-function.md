---
id: lem-characteristic-hypersurface-is-independent-of-defining-function
kind: lemma
title: "Characteristic hypersurfaces are independent of the defining function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-principal-part-and-principal-symbol-of-a-scalar-pde,
       def-characteristic-covector-hypersurface-and-noncharacteristic-data]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Statement

Let $\Sigma\cap U=\{\phi=0\}=\{\psi=0\}$ be a $C^1$ hypersurface with
$d\phi\neq0$ and $d\psi\neq0$ on $\Sigma\cap U$. If $p_m$ is the principal
symbol of an order-$m$ scalar operator, then

$$p_m(x,d\phi(x))=0 \quad\Longleftrightarrow\quad p_m(x,d\psi(x))=0$$

for every $x\in\Sigma\cap U$.

## Facts & Assumptions

**Given:** Two defining functions $\phi,\psi$ for the same hypersurface $\Sigma$, and the principal symbol $p_m$.

[L1] Characteristic covectors and characteristic hypersurfaces are defined by vanishing of the principal symbol on the conormal ([[def-characteristic-covector-hypersurface-and-noncharacteristic-data]]).

[L2] The principal symbol is homogeneous of degree $m$ in the covector variable ([[def-principal-part-and-principal-symbol-of-a-scalar-pde]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\Sigma\cap U$. Any tangent vector $v\in T_x\Sigma$ is the velocity of a $C^1$ curve in $\Sigma$, so $d\phi(x)(v)=d\psi(x)(v)=0$ because both defining functions vanish on $\Sigma$; thus $d\phi(x)$ and $d\psi(x)$ have the same kernel, namely the tangent hyperplane $T_x\Sigma$. Since both covectors are nonzero, the annihilator of that hyperplane is one-dimensional, so there is a unique scalar $h(x)\neq0$ with $d\psi(x)=h(x)\,d\phi(x)$. [given]

2.1 By [L2], homogeneity gives $p_m(x,d\psi(x))=p_m(x,h(x)d\phi(x))=h(x)^m p_m(x,d\phi(x))$ for every $x\in\Sigma\cap U$; since $h(x)\neq0$, these values vanish together, so [L1] shows that the characteristic property is independent of the chosen defining function. [L1, L2, step 1.1] ∎
