---
id: lem-morphisms-of-mixed-hodge-structures-are-strict
kind: lemma
title: "Strictness of mixed Hodge morphisms"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rational-mixed-hodge-structure]
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Statement

Every morphism $f:H\to K$ of rational mixed Hodge structures is strict for $W$ and $F$:
$$f(W_nH)=f(H)\cap W_nK,\qquad f(F^pH_{\mathbb C})=f(H_{\mathbb C})\cap F^pK_{\mathbb C}.$$
Its kernel, image and cokernel with their induced or quotient filtrations are mixed Hodge structures. Taking $\operatorname{Gr}^W_n$ is exact. In particular a morphism from a structure of weights at least $n$ to one of weights at most $n$ has pure image of weight $n$.

## Facts & Assumptions

**Given:** A rational morphism $f:H\to K$ preserving the two filtrations in [[def-rational-mixed-hodge-structure]]. Filtrations are finite; complex conjugation makes $f$ preserve $\overline F$ also.

## Proof

1.1 A functorial splitting of $W,F$ over $\mathbb C$ is constructed as follows. Put $m=p+q$ and $I^{p,q}(H)=F^p\cap W_m\cap\left((\overline F^q\cap W_m)+\sum_{j\ge1}(\overline F^{q-j}\cap W_{m-j-1})\right).$ The projection to $\operatorname{Gr}^W_mH_{\mathbb C}$ identifies this space with its $(p,q)$ summand. Here is the lifting calculation. Start with a representative in $F^p\cap W_m$ of that summand and a representative in $\overline F^q\cap W_m$ with the same class; their difference lies in $W_{m-1}$. On $\operatorname{Gr}^W_{m-1}$ the filtrations $F^p$ and $\overline F^q$ are complementary, since $p+q=(m-1)+1$. Modify the two representatives by these complementary components. At the next lower weight $m-2$ use the complementary pair $F^p,\overline F^{q-1}$; at weight $m-j-1$ use $F^p,\overline F^{q-j}$. All corrections on the first representative lie in $F^p$, and those on the second lie in the displayed sum. Finiteness terminates the correction with equal representatives, proving surjectivity. For injectivity, an element of $I^{p,q}\cap W_{m-1}$ has first nonzero graded component, say at weight $m-j-1$; that component lies both in $F^p$ and $\overline F^{q-j}$, whose indices sum to that weight plus one, so it is zero, a contradiction. To justify the second containment, terms at higher weights in the displayed sum can be successively removed by the same complementary decomposition used above. This gives the claimed isomorphism without assuming a real splitting. [given, construct, algebra]

2.1 Let $I=\bigoplus_{p,q}I^{p,q}(H)$. Projection to each weight graded piece in step 1.1 shows that the sum map $I\to H_{\mathbb C}$ induces an isomorphism on $\operatorname{Gr}^W$. Descending through the finite weights shows it is an isomorphism. The same graded comparison restricted to $F^a$ gives $W_nH_{\mathbb C}=\bigoplus_{p+q\le n}I^{p,q}(H),\qquad F^aH_{\mathbb C}=\bigoplus_{p\ge a}I^{p,q}(H).$ Every morphism preserving $W,F,\overline F$ preserves the displayed intersection-and-sum formula for $I^{p,q}$, so $f$ maps each summand into the summand with the same indices in $K$. A componentwise map between such direct sums is strict for the two displayed partial-sum filtrations. This proves complex strictness for $W,F$; strictness for rational $W$ follows because an equality of rational subspaces can be tested after scalar extension. [step 1.1, algebra]

3.1 Apply the same construction with $F$ and $\overline F$ interchanged. It gives a functorial splitting of $W,\overline F$ and proves strictness for those filtrations as well. The kernel, image and cokernel of $f$ therefore have weight graded pieces equal to the kernel, image and cokernel of $\operatorname{Gr}^Wf$ with the induced or quotient $F,\overline F$. This last map preserves the pure $(p,q)$ decomposition on each weight, so those three graded pieces are pure structures of that weight. Their rational filtrations thus satisfy precisely the mixed Hodge axiom. Exactness of $\operatorname{Gr}^W$ follows from $W$-strictness, or from its componentwise splitting. [step 1.1, step 2.1, algebra]

4.1 If $W_{n-1}H=0$ and $W_nK=K$, strictness gives $W_{n-1}\operatorname{im}f=f(W_{n-1}H)=0$ and $W_n\operatorname{im}f=\operatorname{im}f\cap W_nK=\operatorname{im}f$. The image is therefore pure of weight $n$. [step 2.1, step 3.1] ∎
## Source notes

Deligne II, 1.2.8–1.2.11 and 2.3.5. The first two steps explicitly expand the three-opposed-filtration lifting argument; the splitting is complex and functorial, not a claim of a real splitting.
