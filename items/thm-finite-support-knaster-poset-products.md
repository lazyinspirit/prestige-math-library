---
id: thm-finite-support-knaster-poset-products
kind: theorem
title: "Finite-support products of Knaster posets are Knaster"
status: published
origin: pipeline
deps: [lem-finite-knaster-poset-products, cor-indexed-omega-one-delta-system, def-finite-support-poset-product, def-poset-ccc-and-knaster-property, thm-well-ordering-theorem, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Lemma 15.15 and Corollary 15.16, printed p266; partial-function encoding supplied locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, a finite-support product of any set-indexed family of Knaster posets with specified greatest conditions is Knaster (hence ccc). In particular, for any set $I$ and nonempty countable set $C$, the poset of finite partial functions $I\rightharpoonup C$, with stronger conditions extending weaker ones, is Knaster.

## Facts & Assumptions

**Given:** $(P_i,\le_i,1_i)_{i\in I}$ as above, and an uncountable subset $X$ of its finite-support product. Assume AC.

[F1] An $\omega_1$-indexed family of finite sets admits an uncountable indexed delta subsystem, allowing repetitions. [[cor-indexed-omega-one-delta-system]]

[F2] Finite products of Knaster posets satisfy the indexed uncountable thinning assertion, including repeated tuples. [[lem-finite-knaster-poset-products]]

[F3] Product membership means finite support, and product compatibility is equivalent to coordinatewise compatibility. [[def-finite-support-poset-product]]

[F4] Countable posets are Knaster, and Knaster implies ccc. [[def-poset-ccc-and-knaster-property]]

[F5] AC well-orders every set. [[thm-well-ordering-theorem]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 Well-order $X$ using F5 and A1 and take an injective family $(p_\xi)_{\xi<\omega_1}$ from it, possible since $X$ is uncountable. By F3 the supports $a_\xi$ are finite. Apply F1 to obtain an uncountable $J\subseteq\omega_1$ and finite $r$ with $a_\xi\cap a_\eta=r$ for distinct $\xi,\eta\in J$. In particular $r\subseteq a_\xi$ for every $\xi\in J$, since each index has a distinct partner in $J$. [F1, F3, F5, A1, given]

2.1 Each restriction $p_\xi\mathbin{\upharpoonright}r$ belongs to the finite product $\prod_{i\in r}P_i$. Enumerate the finite set $r$ to apply F2 and obtain uncountable $K\subseteq J$ with pairwise compatible restrictions. Repeated restrictions cause no loss of indices because F2 states its indexed version. If $r=\varnothing$, all restrictions are the empty tuple and one may take $K=J$. [F2, step 1.1]

3.1 Fix distinct $\xi,\eta\in K$. On $r$ take a tuple $q$ below both restrictions. On $a_\xi\setminus r$ use $p_\xi(i)$, and on $a_\eta\setminus r$ use $p_\eta(i)$. These two sets are disjoint by step 1.1. Put $s(i)=1_i$ outside $a_\xi\cup a_\eta$. On a petal the other condition has value $1_i$, so the chosen value is below both; on $r$ use $q$; elsewhere both original values are $1_i$. Thus $s\le p_\xi,p_\eta$ and its support is contained in the finite union $a_\xi\cup a_\eta$, so F3 puts $s$ in the product. The family $(p_\xi)_{\xi\in K}$ remains injective, giving an uncountable compatible subset of $X$. Hence the product is Knaster and is ccc by F4. [F3, F4, step 1.1, step 2.1]

4.1 For the partial-function assertion, take a disjoint tagged copy $\widehat C$ of $C$ and a new element $\top$. Let $Q=\widehat C\cup\{\top\}$, with $u\le v$ iff $u=v$ or $v=\top$. This is a partial order: reflexivity holds by equality, distinct tagged values are unrelated, and any strict comparison ends at $\top$, which verifies antisymmetry and transitivity. It is countable and has greatest element $\top$, so F4 makes it Knaster. A finite partial function $f$ corresponds to the tuple equal to the tagged $f(i)$ on its domain and $\top$ elsewhere. The support is exactly $\operatorname{dom}(f)$; conversely any finite-support tuple gives exactly that finite partial function. Moreover, the tuple of $g$ is below that of $f$ precisely when $g$ extends $f$, because a tagged value has no smaller element other than itself. This order isomorphism transfers the Knaster conclusion of step 3.1 to finite partial functions. The empty domain maps to the greatest tuple, and for $I=\varnothing$ both posets are singletons. [F3, F4, step 3.1] ∎
