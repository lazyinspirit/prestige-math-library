---
id: thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity
kind: theorem
title: "Countably exceptional differentiability and integrable derivative imply absolute continuity"
status: draft
origin: pipeline
deps: [def-countable-choice, def-dependent-choice, thm-banach-zarecki-characterisation-of-absolute-continuity, lem-luzin-property-n-gives-an-integral-growth-estimate, lem-countable-sets-are-null, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Theorem 6.3.11"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. If $F:[a,b]\to\mathbb R$ is continuous, differentiable except at countably
many points, and $F'\in L^1[a,b]$, then $F$ is absolutely continuous and
$$F(x)-F(a)=\int_a^xF'(t)\,dt$$
for every $x\in[a,b]$.

## Facts & Assumptions

**Given:** Countable choice, dependent choice, and a continuous $F$ with the stated countable exceptional set and integrable derivative.

## Proof

**Proof technique:** direct.

1.1 Let $Z$ be the countable exceptional set. It is null by [[lem-countable-sets-are-null]]. If $A\subseteq[a,b]$ is null, [[lem-luzin-property-n-gives-an-integral-growth-estimate]] applied to $A\setminus Z$ gives $\lambda^*(F(A\setminus Z))=0$, while $F(A\cap Z)$ is countable and hence null. Thus $F$ has property $(N)$. [given]

2.1 For $u<v$, continuity gives the interval between $F(u)$ and $F(v)$ as a subset of $F([u,v])$. The latter image is contained in $F([u,v]\setminus Z)\cup F([u,v]\cap Z)$, whose second part is countable and whose first part has outer measure at most $\int_u^v|F'|$ by the growth lemma. Hence $|F(v)-F(u)|\le\int_u^v|F'|$. Summing over any partition bounds its variation by $\int_a^b|F'|<\infty$, so $F$ has bounded variation. [step 1.1]

3.1 Since $F$ is continuous by hypothesis, step 1.1 gives property $(N)$ and step 2.1 gives bounded variation. The reverse direction of [[thm-banach-zarecki-characterisation-of-absolute-continuity]] therefore makes $F$ AC, and [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] gives the displayed reconstruction formula at every endpoint. [step 1.1, step 2.1] ∎
