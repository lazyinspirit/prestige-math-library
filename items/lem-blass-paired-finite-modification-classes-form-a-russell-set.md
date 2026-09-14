---
id: lem-blass-paired-finite-modification-classes-form-a-russell-set
kind: lemma
title: Blass's paired finite-modification classes form a Russell set
status: draft
origin: pipeline
deps: [def-blass-finite-modification-classes-and-parameter-hod-model, lem-feferman-tail-complement-automorphism, lem-symmetry-lemma-for-forcing-automorphisms, lem-forcing-truth-lemma]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Eleftherios Tachtsis, On the Existence of Free Ultrafilters on omega and on Russell-sets in ZF, Definition 1 and complete proof of Theorem 4, printed pp. 2, 5–7", url: "https://www.impan.pl/shop/publication/transaction/download/product/91097"}
---

## Statement

In Blass's parameter-HOD model $N$, the canonically enumerated family

$$R=\bigl\{\{\delta(a_n),\delta(\omega\setminus a_n)\}:n<\omega\bigr\}$$

is a pairwise disjoint family of two-element sets with no choice function on
any infinite subfamily. Consequently $\bigcup R$ is a Russell set.

## Facts & Assumptions

**Given:** The forcing extension, parameters, function $f$, family $R$, and
class $N$ from
[[def-blass-finite-modification-classes-and-parameter-hod-model]].

[F1] [[def-blass-finite-modification-classes-and-parameter-hod-model]] makes every object in $N$ hereditarily definable from
$f$, finitely many reals in $S\setminus\{f\}$, and ordinal parameters.

[F2] [[lem-feferman-tail-complement-automorphism]] gives the finite-condition
calculation for flipping the unused tail of one Cohen coordinate. The same
calculation applies after renaming its distinguished coordinate to $k$.

[F3] [[lem-symmetry-lemma-for-forcing-automorphisms]] transports a forced
formula and all its parameter names under such an automorphism.

[F4] [[lem-forcing-truth-lemma]] supplies a condition in the actual generic
filter forcing each true fixed formula with the displayed name parameters.

## Proof

**Proof technique:** contradiction by a fresh-coordinate infinite-tail flip.

1.1 For distinct $r,s<\omega$ and either choices of complement, the corresponding Cohen reals have infinite symmetric difference. Indeed, beyond any prescribed finite set of bits, every condition has an extension assigning one fresh bit at coordinates $r$ and $s$ so that the two chosen versions disagree. Genericity meets each of these dense sets. Also $a_r\mathbin\triangle(\omega\setminus a_r)=\omega$. Thus the finite-modification classes in different displayed positions are distinct; equivalence classes are either equal or disjoint. Each $f(n)$ therefore has exactly two elements and the family $R$ is pairwise disjoint. [Given, construct]

2.1 Suppose for contradiction that $c$ is a choice function on $\{f(k):k\in K\}$ for an infinite $K\subseteq\omega$ in $N$. By F1, $c$ is uniquely defined in $M[G]$ from $f$, ordinals, and finitely many real parameters $s_1,\ldots,s_t$ from $S\setminus\{f\}$. For each $s_i$, fix one ground finite set $z_i$, one coordinate $m_i$, and one sign such that $s_i$ is $a_{m_i}\mathbin\triangle z_i$ or $(\omega\setminus a_{m_i})\mathbin\triangle z_i$. Since $K$ is infinite and $\{m_1,\ldots,m_t\}$ is finite, the least element $k$ of their difference exists without Choice. [F1, step 1.1, assume-contra]

3.1 The value $c(f(k))$ is one of the two classes in $f(k)$; interchange the labels if necessary and suppose it is $\delta(a_k)$. By F4, some finite $p\in G$ forces both the unique defining formula for $c$ and this value assertion. Choose $b$ above every $j$ with $(k,j)\in\operatorname{dom}(p)$, taking $b=0$ if there is none. Flip precisely the bits $(k,j)$ for $j\ge b$. By F2 the induced automorphism fixes $p$, every ordinal, and each named $s_i$, while it interchanges $\delta(a_k)$ and $\delta(\omega\setminus a_k)$. It fixes $f$ because it merely swaps the two members of $f(k)$ and fixes every other value. [F2, F4, step 2.1]

4.1 Apply F3 to the formula forced by $p$. Since the condition and every defining parameter are fixed, the same $p$ forces that the same uniquely defined function $c$ takes $f(k)$ to $\delta(\omega\setminus a_k)$. As $p\in G$, both value statements hold in $M[G]$. Step 1.1 says the two values are distinct, contradicting that $c$ is a function. The case in which the original value is $\delta(\omega\setminus a_k)$ is identical because the flip is an involution. [F3, step 1.1, step 3.1, discharge-contradiction]

5.1 Hence no infinite subfamily of $R$ has a choice function. The function $f:\omega\to R$ already belongs to $N$, so $R$ is countably indexed there; step 1.1 supplies disjoint two-element pieces. By the source definition, $\bigcup R$ is therefore a Russell set. No family of representatives of the finite-modification classes was selected in $N$. [Given, step 1.1, step 4.1, discharge-contradiction: step 2.1] ∎
