---
id: ex-hh-free-hopf-module-over-group-algebra
kind: example
title: "The free Hopf module over a group algebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 7
deps:
  - def-hh-right-right-hopf-module-and-coinvariants
  - lem-hh-free-right-right-hopf-module
  - lem-hh-coinvariants-of-free-hopf-module
  - lem-hh-hopf-module-coinvariant-projection
  - thm-hh-fundamental-theorem-of-hopf-modules
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references: []
---

## Example

Let $G$ be any group, $k$ a field, and $V$ a $k$-vector space. Write $kG$ for the vector space of finite formal sums of elements of $G$, with multiplication extended from $G$. Give it the Hopf structure $\Delta(g)=g\otimes g$, $\varepsilon(g)=1$, and $S(g)=g^{-1}$ on each $g\in G$. On $V\otimes kG$ use the free action and coaction. Then its coinvariants are $V\otimes1$, $P(v\otimes g)=v\otimes1$, and the inverse decomposition sends $v\otimes g$ to $(v\otimes1)\otimes g$.

## Facts & Assumptions

**Given:** A group $G$, a field $k$, and a $k$-vector space $V$.

[F1] A right-right Hopf module has compatibility $\rho(xh)=\sum x_0h_1\otimes x_1h_2$ and coinvariants $\rho(x)=x\otimes1$ ([[def-hh-right-right-hopf-module-and-coinvariants]]).

[F2] The free structure on $V\otimes H$ is $(v\otimes h)g=v\otimes hg$ and $\rho(v\otimes h)=\sum(v\otimes h_1)\otimes h_2$ ([[lem-hh-free-right-right-hopf-module]]).

[F3] The projection is $P(x)=\sum x_0S(x_1)$, and the inverse theorem map is $\beta(x)=\sum P(x_0)\otimes x_1$ ([[lem-hh-hopf-module-coinvariant-projection]], [[thm-hh-fundamental-theorem-of-hopf-modules]]).

## Verification

1.1 Multiplication on $kG$ is associative and unital because the group multiplication is; on each basis element, $\Delta(gh)=gh\otimes gh=(g\otimes g)(h\otimes h)$ and $\varepsilon(gh)=1=\varepsilon(g)\varepsilon(h)$. Coassociativity and both counit identities hold on $g$ since $\Delta(g)=g\otimes g$ and $\varepsilon(g)=1$. Finally, $gS(g)=gg^{-1}=1=S(g)g$, so both antipode equations hold on each basis vector. All structure identities extend by linearity or bilinearity to finite sums, making $kG$ a Hopf algebra. [given, algebra]

1.2 Every $z\in V\otimes kG$ has finite support and can be written $z=\sum_g v_g\otimes g$; the coefficients are unique because applying $\operatorname{id}_V\otimes\delta_g$, where $\delta_g$ extracts the $g$-coefficient, recovers $v_g$. If $z$ is coinvariant, then $\sum_g v_g\otimes g\otimes g=\sum_g v_g\otimes g\otimes e$. Applying $\operatorname{id}_V\otimes\delta_g\otimes\delta_g$ shows $v_g=0$ for $g\ne e$. Conversely $v\otimes e$ is coinvariant, so the coinvariants are exactly $V\otimes e$. [F1, F2, algebra]

2.1 For $v\in V$ and $g,a\in G$, the free structure gives $\rho((v\otimes g)a)=\rho(v\otimes ga)=(v\otimes ga)\otimes ga$, while the compatibility right side is $(v\otimes g)a\otimes ga=(v\otimes ga)\otimes ga$. Bilinearity extends this equality to every $h\in kG$, so the pair is a Hopf module. [F1, F2, step 1.1]

3.1 For a basis tensor $v\otimes g$, $P(v\otimes g)=(v\otimes g)g^{-1}=v\otimes e$. Hence $\beta(v\otimes g)=(v\otimes e)\otimes g$ and $\alpha((v\otimes e)\otimes g)=v\otimes g$. Finite-sum linearity gives the formulas on every element; these are the projection and inverse decomposition from [F3]. [F2, F3, step 1.2, step 2.1] ∎
