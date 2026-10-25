---
id: ex-hh-quantum-hecke-commutation-in-rank-two
kind: example
title: "The quantum and Hecke operators commute in rank two"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-hh-hecke-symmetry-and-ordered-basis-operator, def-hh-type-a-quantum-tensor-action-for-centralizers, lem-hh-quantum-presentation-and-tensor-action-descent]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§2.2.2, Example 2.3(iv), PDF pp. 4–5: type-A coproduct convention"
    - title: "Li Luo and Weiqiang Wang, Lectures on dualities ABC in representation theory"
      url: "https://arxiv.org/pdf/2012.07203"
      locator: "§6.1, PDF pp. 30–31: the tensor-space Hecke action and q-Schur duality"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $F=\mathbb Q(q)$, $N=2$, $V_2=Fe_1\oplus Fe_2$, $K=L_1L_2^{-1}$, and $\eta=q-q^{-1}$. Write $e_ae_b$ for $e_a\otimes e_b$. On $V_2\otimes V_2$ let $T$ be the ordered-basis operator and set

$$\mathcal E=E_1\otimes K+1\otimes E_1,\qquad \mathcal F=F_1\otimes1+K^{-1}\otimes F_1.$$

The complete pair calculation is

| Input | $\mathcal E$ | $T\mathcal E$ | $\mathcal E T$ | $\mathcal F$ | $T\mathcal F$ | $\mathcal F T$ |
|---|---|---|---|---|---|---|
| $e_1e_1$ | $0$ | $0$ | $0$ | $e_2e_1+q^{-1}e_1e_2$ | $e_1e_2+qe_2e_1$ | $e_1e_2+qe_2e_1$ |
| $e_1e_2$ | $e_1e_1$ | $qe_1e_1$ | $qe_1e_1$ | $e_2e_2$ | $qe_2e_2$ | $qe_2e_2$ |
| $e_2e_1$ | $qe_1e_1$ | $q^2e_1e_1$ | $q^2e_1e_1$ | $qe_2e_2$ | $q^2e_2e_2$ | $q^2e_2e_2$ |
| $e_2e_2$ | $q^{-1}e_1e_2+e_2e_1$ | $e_1e_2+qe_2e_1$ | $e_1e_2+qe_2e_1$ | $0$ | $0$ | $0$ |

Also, $L_1\otimes L_1$ has diagonal entries $(q^2,q,q,1)$ and $L_2\otimes L_2$ has entries $(1,q,q,q^2)$ in this basis. Both commute with $T$ because $T$ preserves the multiset of the two labels.

## Facts & Assumptions

**Given:** $F=\mathbb Q(q)$, the ordered basis $e_1<e_2$, the type-A quantum generators and coproduct, and the operator $T$.

[F1] The pair operator fixes an equal pair with coefficient $q$, flips an increasing pair, and adds $\eta$ times a decreasing pair ([[def-hh-hecke-symmetry-and-ordered-basis-operator]]).

[F2] The vector matrices satisfy $L_je_a=q^{\delta_{ja}}e_a$, $E_ie_a=\delta_{a,i+1}e_i$, and $F_ie_a=\delta_{a,i}e_{i+1}$ ([[def-hh-type-a-quantum-tensor-action-for-centralizers]]).

[F3] $K_i=L_iL_{i+1}^{-1}$ for $1\le i<N$ ([[def-hh-type-a-quantum-tensor-action-for-centralizers]]).

[F4] The coproduct values are $\Delta(E_1)=E_1\otimes K_1+1\otimes E_1$ and $\Delta(F_1)=F_1\otimes1+K_1^{-1}\otimes F_1$ ([[def-hh-type-a-quantum-tensor-action-for-centralizers]]); these assignments descend through the presentation ([[lem-hh-quantum-presentation-and-tensor-action-descent]]).

## Verification

**Given:** The data in [F1]–[F4].

1.1 From [F2]–[F3], $K_1e_1=qe_1$ and $K_1e_2=q^{-1}e_2$. Applying the two summands in [F4] to each of the four basis pairs gives the $\mathcal E$ column in the displayed table; applying [F1] before or after those four outputs gives the two identical columns $T\mathcal E$ and $\mathcal E T$. Hence $T\mathcal E=\mathcal E T$ on a basis and therefore on $V_2\otimes V_2$. [given, F1, F2, F3, F4, algebra]

1.2 Using the same $K_1$ eigenvalues from [F2]–[F3], the two summands in [F4] give the four $\mathcal F$ entries. Applying [F1] before or after them yields the equal columns $T\mathcal F$ and $\mathcal F T$, so $T\mathcal F=\mathcal F T$ on the whole tensor square. [given, F1, F2, F3, F4, algebra]

2.1 On an input pair $(e_a,e_b)$, each $L_j\otimes L_j$ acts by $q^{\delta_{ja}+\delta_{jb}}$ by [F2]. Every term of $T(e_a\otimes e_b)$ has the same multiset of labels by [F1], so the same scalar acts on every output term. This proves commutation with both $L_1\otimes L_1$ and $L_2\otimes L_2$, and with their inverses. [given, F1, F2, algebra] ∎
