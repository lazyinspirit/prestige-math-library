---
id: lem-strong-increase-gives-bounding-projections
kind: lemma
title: Strongly increasing subsequences force a bounding projection
status: draft
origin: pipeline
deps: [def-strong-increase-and-bounding-projections-for-countable-products, thm-cofinality-basics, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Lemma 2.12 and complete proof, p. 16"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. Let $I$ be a proper ideal on an infinite set $A$ of cardinality $\tau$. Let $\lambda$ and $\kappa$ be regular cardinals with $\tau<\kappa\le\lambda$, and let $(f_\alpha)_{\alpha<\lambda}$ be strictly increasing modulo $I$. If it has $(*)_\kappa$, it has the $\kappa$ bounding-projection property. In particular this applies to countably infinite $A$, the finite ideal, and every uncountable regular $\kappa\le\lambda$.

## Facts & Assumptions

**Given:** The sequence, ideal, cardinals, AC and $(*)_\kappa$ of the statement; nonempty ordinal sets $S(a)$ of size less than $\kappa$ such that every $f_\alpha<_I s$, where $s(a)=\sup S(a)$.

[F1] Strong increase, $(*)_\kappa$, projections and the bounding-projection property have the explicit meanings in [[def-strong-increase-and-bounding-projections-for-countable-products]].

[F2] A subset of a regular cardinal with smaller cardinality is bounded, by the cofinality lower bound ([[thm-cofinality-basics]], clause (d)).

[F3] A fixed rule on a well-order yields a function by transfinite recursion ([[thm-transfinite-recursion]]).

[A1] AC gives choices from nonempty witness sets ([[def-axiom-of-choice]]).

## Proof

1.1 Write $p_\alpha$ for the projection of $f_\alpha$. It suffices to rule out the assumption that none strictly bounds the sequence. Under that assumption, for each $\alpha$ let $\eta$ be the least index for which $P=\{a:p_\alpha(a)\le f_\eta(a)\}$ is $I$-positive, since $f_\eta<_Ip_\alpha$ fails. Take $b(\alpha)$ to be the least index greater than $\alpha$ and $\eta$. Outside the small failure set for $f_\eta<_If_{b(\alpha)}$, the set $P$ witnesses $p_\alpha<f_{b(\alpha)}$, so $\{a:p_\alpha(a)<f_{b(\alpha)}(a)\}$ remains positive. Removing a small set cannot destroy positivity: otherwise its union with the removed set would put $P$ in $I$. Every later index has the same positive comparison, by composition with another strict comparison and the same finite-union argument. No completeness of $I$ is used. [F1, given]

2.1 Recursively choose strictly increasing indices $u_\xi<\lambda$ for $\xi<\lambda$ so that $u_\xi>b(u_\zeta)$ whenever $\zeta<\xi$. At each stage the earlier indices and witness indices form a set of cardinality less than $\lambda$, so F2 bounds them below $\lambda$; choose the least larger index. F3 gives the sequence. Its range $U$ is unbounded, because a bounded subset of the cardinal $\lambda$ has cardinality less than $\lambda$ and cannot contain a strictly increasing sequence of length $\lambda$. By step 1.1, $\{a:p_\alpha(a)<f_\beta(a)\}$ is positive for all $\alpha<\beta$ in $U$. Apply $(*)_\kappa$ to obtain indices $(v_i)_{i<\kappa}$ in $U$ and strong-increase witnesses $Z_i\in I$. [step 1.1, F2, F3, F1]

3.1 Put $E_i=\{a:f_{v_i}(a)\ge s(a)\}\in I$. For each $i<\kappa$, the positive set $\{a:p_{v_i}(a)<f_{v_{i+1}}(a)\}$ remains positive after removing $Z_i\cup Z_{i+1}\cup E_i\cup E_{i+1}$. Here $i+1<\kappa$ because $\kappa$ is infinite regular. In particular the remaining set is nonempty; AC selects a coordinate $a_i$ in it. Some fixed $a$ is selected for $\kappa$ many indices. Indeed, if every fiber $\{i:a_i=a\}$ had size less than $\kappa$, it would be bounded in $\kappa$ by F2; there are $\tau<\kappa$ such bounds, so F2 would bound their union, contradicting that the fibers cover $\kappa$. [step 2.1, F1, F2, A1]

4.1 Let $T=\{i:a_i=a\}$ have size $\kappa$. For $i<j$ in $T$, the chosen coordinate gives $p_{v_i}(a)<f_{v_{i+1}}(a)$. If $i+1=j$ the next comparison is equality; otherwise strong increase gives $f_{v_{i+1}}(a)<f_{v_j}(a)$, since $a\notin Z_{i+1}\cup Z_j$. Finally $a\notin E_j$, so the genuine ceiling rule gives $f_{v_j}(a)\le p_{v_j}(a)\in S(a)$. Also $p_{v_i}(a)\in S(a)$. Hence $i\mapsto p_{v_i}(a)$ is a strictly increasing injection of $T$ into $S(a)$, contradicting $|T|=\kappa>|S(a)|$. The assumption in step 1.1 is impossible. For every admitted family $S$ some projection therefore strictly bounds the sequence, exactly the asserted property. The finite-ideal countable case satisfies all these hypotheses with $\tau=\aleph_0$. QED. [step 1.1, step 2.1, step 3.1, F1]
