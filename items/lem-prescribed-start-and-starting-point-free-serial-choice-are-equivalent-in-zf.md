---
id: lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf
kind: lemma
title: "Prescribed-start and starting-point-free serial choice are equivalent in ZF"
status: draft
origin: pipeline
deps: [def-serial-relation-dependent-choice-principle-over-zf, thm-induction-principle, thm-recursion, def-the-set-of-functions-from-one-set-to-another, def-axiom-schema-of-separation, def-axiom-schema-of-replacement, def-union-of-a-set-and-binary-union]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Miller, Lecture notes on set theory without choice; Propositions 5.3\u20135.4, pp.10\u201311 (finite-path method)"
      url: https://people.math.wisc.edu/~awmille1/old/m873-08/ac.pdf
    - title: "Karagila, Zornian Functional Analysis, Definition 4 and Chapter 2, pp. 4–5, 8–11"
      url: https://karagila.org/wp-content/uploads/2016/10/axiom-of-choice-in-analysis.pdf
---

## Statement

In ZF, the starting-point-free and prescribed-start global principles in
[[def-serial-relation-dependent-choice-principle-over-zf]] are equivalent.

## Facts & Assumptions

**Given:** ZF and the two global principles in the statement.

[F1] Starting-point-free DC supplies a chain on any nonempty serial carrier; prescribed-start DC also fixes its initial value ([[def-serial-relation-dependent-choice-principle-over-zf]]).

[F2] Separation forms a subset specified by a formula with parameters ([[def-axiom-schema-of-separation]]).

[F3] Replacement forms the image of a set under a uniquely specified assignment ([[def-axiom-schema-of-replacement]]).

[F4] The union of a set has precisely the elements belonging to its members ([[def-union-of-a-set-and-binary-union]]).

[F5] A property holding at zero and preserved by successor holds on all naturals ([[thm-induction-principle]]).

## Proof

1.1 Assume prescribed-start DC. Given nonempty $A$ and serial $R$, fix one $a_0\in A$. Its prescribed chain is a chain with unrestricted start, so starting-point-free DC follows. This is a single existential instantiation, not a family of selections. [F1, given]

1.2 Conversely assume starting-point-free DC, and fix nonempty $A$, serial $R$ and $a_0\in A$. By Separation in $\omega\times\mathcal P(\omega\times A)$, the pairs $(l,p)$ with $l\ge1$, $p:l\to A$, $p(0)=a_0$, and $p(i)\,R\,p(i+1)$ for every $i+1<l$ form a set $P$. The pair $(1,\{(0,a_0)\})$ belongs to $P$, since there are no adjacent coordinates to check. [F2, given]

2.1 Define $S$ on $P$ by $(l,p)\,S\,(l+1,q)$ exactly when $q$ extends $p$. This is a subset of $P\times P$. For any $(l,p)\in P$, seriality gives one $b\in A$ with $p(l-1)\,R\,b$; the function $q=p\cup\{(l,b)\}$ has domain $l+1$ and satisfies all required edges, old ones from $p$ and the new last edge by the choice of $b$. Thus $S$ is serial. No simultaneous successor function has been selected. [F1, F2, step 1.2]

3.1 Apply starting-point-free DC to the nonempty set $P$ and serial $S$. It gives $h(k)=(l_k,p_k)$ with $p_{k+1}$ extending $p_k$ and $l_{k+1}=l_k+1$. Induction gives $l_k=l_0+k$ and, for $j\le k$, $p_j\subseteq p_k$: the zero case is reflexivity, and each successor uses one end extension. In particular the domains are unbounded in $\omega$. [F1, F5, step 1.2, step 2.1]

4.1 Replacement gives the set $\{p_k:k\in\omega\}$ and Union gives $f=\bigcup_{k\in\omega}p_k$. Two pairs in $f$ with the same first coordinate lie together in $p_{\max(j,k)}$, so have the same second coordinate. Every $n$ lies in $l_{n+1}$, since $l_0\ge1$, and all domains lie in $\omega$. Consequently $f:\omega\to A$ and $f(0)=a_0$. [F3, F4, step 3.1]

5.1 For any $n\in\omega$, both $n$ and $n+1$ lie in $l_{n+2}$. That path's edge gives $f(n)=p_{n+2}(n)\,R\,p_{n+2}(n+1)=f(n+1)$. Hence $f$ is the prescribed chain. Together with the first implication this proves the equivalence, without any additional choice axiom. [step 1.2, step 4.1, step 1.1] ∎
