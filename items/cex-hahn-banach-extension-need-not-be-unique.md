---
id: cex-hahn-banach-extension-need-not-be-unique
kind: counterexample
title: "Hahn-Banach norm-preserving extensions need not be unique"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-many-extensions-from-a-codimension-one-subspace]
justified_by: []
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Corollary 4.15"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement refuted

For a bounded linear functional on a subspace of a normed space, a
norm-preserving Hahn-Banach extension to the whole space is unique.

## Facts & Assumptions

**Given:** The diagonal subspace
$M=\operatorname{span}\{(1,1)\} \subseteq (\mathbb{R}^2,\|\cdot\|_\infty)$ and
the functional $f_0(t,t)=t$ on $M$.

[L1] For every $c \in [-1,1]$, the functional
$$F_c(a,b)=\frac{1+c}{2}a+\frac{1-c}{2}b$$
is a norm-preserving extension of $f_0$
([[ex-many-extensions-from-a-codimension-one-subspace]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the functionals $$F_1(a,b)=a \qquad \text{and} \qquad F_{-1}(a,b)=b$$ are both norm-preserving extensions of $f_0$. [L1, given]

2.1 They agree on $M$, since $F_1(t,t)=t=F_{-1}(t,t)$ for every $(t,t) \in M$, but they differ on $(1,-1)$: $$F_1(1,-1)=1 \ne -1=F_{-1}(1,-1).$$ [step 1.1, given, algebra]

3.1 Thus the same functional on the same subspace has two distinct norm-preserving Hahn-Banach extensions. Therefore the uniqueness claim is false. [step 1.1, step 2.1] ∎
