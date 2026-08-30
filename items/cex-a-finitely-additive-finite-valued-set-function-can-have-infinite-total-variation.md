---
id: cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation
kind: counterexample
title: "A finitely additive finite-valued set function can have infinite total variation"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: []
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Jordan decomposition and variation of finitely additive charges, standard counterexample family"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement refuted

Every finitely additive finite-valued set function has finite total variation.

## Facts & Assumptions

**Given:** The algebra $\mathcal A$ of finite disjoint unions of half-open intervals $(a,b]\subseteq(0,1]$ and the function $g(x)=x\sin(1/x^2)$ for $x>0$, with $g(0)=0$.

[A1] Here "finitely additive" means $\phi(\varnothing)=0$ and $\phi(A\cup B)=\phi(A)+\phi(B)$ for disjoint $A,B$ in the domain algebra.

[A2] Define $\phi((a,b]):=g(b)-g(a)$ and extend by finite additivity to $\mathcal A$. Then $\phi$ is finite-valued on every member of $\mathcal A$.

[A3] For $u_n=(2\pi n+\pi/2)^{-1/2}$ and $v_n=(2\pi n+3\pi/2)^{-1/2}$, one has $g(u_n)=u_n$ and $g(v_n)=-v_n$, so $|g(u_n)-g(v_n)|=u_n+v_n$. The series $\sum_n (u_n+v_n)$ diverges.

[A4] For a finitely additive real-valued set function on an algebra, its total
variation on $E$ means
$$|\phi|(E):=\sup\left\{\sum_{j=1}^m|\phi(E_j)|:E=\bigsqcup_{j=1}^mE_j,\ E_j\in\mathcal A\right\}.$$

## Counterexample

**Proof technique:** direct.

1.1 By [A2], the value of $\phi$ on a finite disjoint union of half-open intervals is the sum of the endpoint increments of $g$, so [A1] makes $\phi$ a finitely additive finite-valued set function on $\mathcal A$. [A1, A2]

2.1 For each $N$, partition the interval $(0,u_1]$ by the ordered points $0<\cdots<v_N<u_N<\cdots<v_1<u_1$. The resulting finite partition sum for $\phi$ is at least $$\sum_{n=1}^N |g(u_n)-g(v_n)|=\sum_{n=1}^N (u_n+v_n).$$ By [A3], these lower bounds diverge with $N$, so [A4] gives $|\phi|((0,u_1])=+\infty$ even though every value of $\phi$ is finite. [A2, A3, A4] ∎
