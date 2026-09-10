---
id: lem-balogh-combinatorial-map
kind: lemma
title: Balogh combinatorial map
status: draft
origin: pipeline
deps: [def-balogh-finite-restriction-data, lem-balogh-countable-restriction-enumeration, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 5 section 2, Lemma 2.1 and Exercises 11–17, printed pp. 31–34; reflected-root argument expanded and domains corrected here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Statement

Assume AC. Put $\kappa=2^{\aleph_0}$ and $C={}^\kappa2$. There is a map $D:C\to C$, written $D(c)=d_c$, such that for every

$$f:\kappa\to\omega,\qquad g:\kappa\to[C]^{<\omega},\qquad h:\kappa\to[\kappa]^{<\omega},$$

there exist $\alpha<\beta<\kappa$ with $f(\alpha)=f(\beta)$, $\beta\notin h(\alpha)$ and $d_c(\beta)=c(\alpha)$ for every $c\in g(\alpha)$.

## Facts & Assumptions

**Given:** The set $C$, continuum cardinal $\kappa$ and the fixed regular rank level of the restriction data.

[F1] The countable model pair, all tuple types, finite-set and evaluation closure, countable-element inclusion, and trace injectivity on $C\cap N$ hold as proved in [[def-balogh-finite-restriction-data]].

[F2] Realizable tuples have labels $\beta<\kappa$ above their supports $A_\beta$, and disjoint petals $u_\beta$ on $J_\beta$ supply infinitely many witnesses for every eligible root triple ([[lem-balogh-countable-restriction-enumeration]]).

[F3] Specified rules admit transfinite recursion ([[thm-transfinite-recursion]]).

[A1] AC is assumed for the preceding data, well-orders and model/witness selections ([[def-axiom-of-choice]]).

## Proof

1.1 Fix the enumeration and thinning in F2 under A1. For $c\in C$ and $\beta<\kappa$ set $d_c(\beta)=c(\beta)$ if $\beta\in P$ and $c\restriction A_\beta\in B_\beta$; set $d_c(\beta)=c(\gamma)$ if $\beta\in P$, that trace is outside $B_\beta$, and it belongs to $u_\beta(\gamma)$ for some $\gamma\in J_\beta$; in every other case set $d_c(\beta)=0$. By disjointness of the petals in F2 the second clause has at most one such $\gamma$. The first two clauses have disjoint trace conditions, and all values are in $2$. Thus these rules define a function $d_c:\kappa\to2$ and hence a fixed map $D:C\to C$, before any test functions $f,g,h$ are supplied. Empty $J_\beta$ contributes only the first or default clause. [F2, A1]

1.2 Now fix arbitrary test functions of the stated types. F1 supplies countable $M\in N$ with the parameters in $M$, and F2 gives the label $\beta$ of their tuple. Write $A=N\cap\kappa$; since $A\subseteq\beta$, the ordinal $\beta$ is outside $N$ and $M$. Put $n=f(\beta)$, $E_0=g(\beta)\cap M$, and $e_0(c)=c(\beta)$ for $c\in E_0$. The finite set $E_0$ and finite function $e_0$ belong to $M$ by its finite-set closure in F1; their binary values and ordered-pair codings belong there too. The set $H_0=\{\gamma<\kappa:f(\gamma)=n,\ E_0\subseteq g(\gamma),\ (\forall c\in E_0)\ c(\gamma)=e_0(c)\}$ belongs to $M$ by definability and uniqueness. These bounded conditions on graphs are absolute in the transitive rank level of F1, and $H_0$ has low rank there. We have $\beta\in H_0$. It is uncountable: if it were countable, F1 would imply $H_0\subseteq M$, contradicting $\beta\notin M$. [F1, F2, A1]

2.1 There exists a maximal $K\subseteq H_0$ such that $g(\gamma)\cap g(\delta)=E_0$ for distinct members. Indeed use A1 to well-order $H_0$, and F3 to scan it, accepting a point exactly when it is compatible with all earlier accepted points. Every rejected point remains incompatible with an accepted point, so the resulting set is maximal. All subsets of $H_0$ and the finite intersection tests have rank below $\kappa+\omega<\theta$, as in F1. Consequently the existential assertion has its real meaning in $V_\theta$, and elementarity gives such a $K\in M$, with actual maximality. If $K$ were countable, F1 would imply $K\subseteq M$. For $\gamma\in K$, the finite set $g(\gamma)$ would then be a subset of $M$, and $g(\gamma)\cap g(\beta)=E_0$: it contains $E_0$ by $\gamma\in H_0$ and can meet $g(\beta)$ only in $M\cap g(\beta)=E_0$. Thus $\beta\notin K$ could be adjoined, a contradiction. Therefore $K$ is uncountable. [step 1.2, F1, F3, A1]

3.1 If $\gamma\in K$ and some $c\in(g(\gamma)\setminus E_0)\cap M$, then $\gamma$ is the unique member of $K$ with $c\in g(\gamma)$, because two would violate the root-intersection equation. Since $K,g,c\in M$, uniqueness and elementarity put $\gamma\in M$ by F1. Hence $\gamma\in K\setminus M$ implies $g(\gamma)\cap M=E_0$. The set $K\setminus M$ is uncountable by step 2.1 and countability of $M$. Both $K,M\in N$, so it belongs to $N$. Its intersection with $N$ is infinite: after any finite list of distinct members in $N$, elementarity gives another member outside that finite list, using finite-set closure F1. For $\gamma\in K\cap(N\setminus M)$, one has $\gamma\in A$ and $g(\gamma)\subseteq N$. Set $E=\{c\restriction A:c\in E_0\}$ and $e(c\restriction A)=e_0(c)$. Trace injectivity F1 makes $e$ well-defined. The trace test gives $q(\gamma)\cap B=E$, and $\gamma\in H_0$ gives $p(\gamma)=n$ and $v_\gamma\restriction E=e$. Injectivity also transfers the pairwise root intersections of $g$ to $q$. Thus this infinite reflected set witnesses $t=(n,E,e)\in I_\beta$. [step 1.2, step 2.1, F1]

4.1 F2 now supplies a point $\alpha\in J_\beta\cap K_{T_\beta}(t)$ with $u_\beta(\alpha)=q(\alpha)\setminus E$. It is in $A\subseteq\beta$, and $f(\alpha)=p(\alpha)=n=f(\beta)$. Moreover $h(\alpha)$ is a finite subset of $N$ by F1, whereas $\beta\notin N$, so $\beta\notin h(\alpha)$. If $c\in g(\alpha)\cap M$, its trace lies in $q(\alpha)\cap B=E$. Trace injectivity identifies it with the member of $E_0$ having that trace. Therefore $c(\alpha)=e(c\restriction A)=c(\beta)$, and the first defining clause gives $d_c(\beta)=c(\beta)=c(\alpha)$. If instead $c\in g(\alpha)\setminus M$, F1 says its trace is outside $B$; it lies in $q(\alpha)\setminus E=u_\beta(\alpha)$, so the second clause gives $d_c(\beta)=c(\alpha)$. These cases exhaust $g(\alpha)$, including the empty case where no equations are required. [step 1.1, step 1.2, step 3.1, F1, F2]

5.1 The map in step 1.1 is fixed independently of the arbitrary test functions, and step 4.1 provides their required pair with every listed property. Thus it satisfies the full quantified statement. QED. [step 1.1, step 4.1]
