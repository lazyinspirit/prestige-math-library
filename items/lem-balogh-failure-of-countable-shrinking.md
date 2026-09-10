---
id: lem-balogh-failure-of-countable-shrinking
kind: lemma
title: Balogh failure of countable shrinking
status: draft
origin: pipeline
deps: [lem-balogh-combinatorial-map, def-balogh-continuum-topology, lem-balogh-neighborhood-basis, thm-countable-paracompactness-shrinking-criterion, def-axiom-of-choice]
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
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 5 section 2, Exercises 7–10, printed p. 32; descending trace peeling proved here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Statement

Assume AC. For any sequence of closed $C_n\subseteq U_n$ in the Balogh space, $\bigcup_{n<\omega}C_n$ fails even to cover the bottom level $L_0$. Thus the increasing open cover $(U_n)$ has no closed shrinking covering $X$, and $X$ is not countably paracompact.

More precisely, call $S\subseteq\kappa$ **separated** if one can choose $F_\alpha\in\mathcal F_\alpha$ for $\alpha\in S$ such that, for distinct $\alpha,\beta\in S$, both $\beta\notin F_\alpha$ and $\alpha\notin F_\beta$. The cardinal $\kappa$ is not a countable union of separated sets, whereas the bottom trace of a closed subset of $U_n$ is a union of $n+1$ separated sets, allowing empty pieces.

## Facts & Assumptions

**Given:** $X=\kappa\times\omega$ with its Balogh topology.

[F1] For all typed $f,g,h$, the fixed map supplies $\alpha<\beta$ with equal $f$-values, $\beta\notin h(\alpha)$ and $d_c(\beta)=c(\alpha)$ for every $c\in g(\alpha)$ ([[lem-balogh-combinatorial-map]]).

[F2] These equations and finite exclusions define $F(\alpha,s,a)$ and $\mathcal F_\alpha$ ([[def-balogh-continuum-topology]]).

[F3] The $U_n$ form an increasing open cover, and the next-level closure trace is $\Phi(A)=\{\alpha:(\forall F\in\mathcal F_\alpha)\ F\cap A\ne\varnothing\}$ ([[lem-balogh-neighborhood-basis]]).

[F4] In a countably paracompact space every increasing open cover has closed subsets of its corresponding members whose interiors cover the space ([[thm-countable-paracompactness-shrinking-criterion]], (ii)).

[A1] AC is assumed for simultaneous separation witnesses and their finite parameter representations ([[def-axiom-of-choice]]).

## Proof

1.1 Suppose $(S_n)_{n<\omega}$ were separated sets covering $\kappa$. Replace each by its difference from the preceding finite union; the resulting disjoint sets still cover and retain separation by restriction of the witnesses. Let $f(\alpha)$ be the unique resulting piece index. Choose a witness $F_\alpha$ for each point and finite parameters $g(\alpha)\subseteq C$, $h(\alpha)\subseteq\kappa$ with $F_\alpha=F(\alpha,g(\alpha),h(\alpha))$, using A1 and F2. Apply F1 to these typed functions. The resulting distinct $\alpha<\beta$ lie in the same piece because their $f$-values are equal. Their equations and $\beta\notin h(\alpha)$ imply $\beta\in F_\alpha$ by F2, contradicting that piece's separation. Thus $\kappa$ cannot be such a countable union. [F1, F2, A1]

1.2 For $A\subseteq\kappa$ put $\Psi(A)=A\cap\Phi(A)$. If $\alpha\in A\setminus\Psi(A)$, then $\alpha\notin\Phi(A)$, so F3 supplies an $F_\alpha\in\mathcal F_\alpha$ missing $A$. Choose these simultaneously using A1. For distinct $\alpha,\beta$ in $A\setminus\Psi(A)$, both are in $A$, giving $\beta\notin F_\alpha$ and $\alpha\notin F_\beta$. Hence this difference is separated. Empty differences use the empty witness family. [F3, A1]

2.1 Let $C_0$ now denote a single closed subset of $U_n$, and define $A_0=\{\alpha:(\alpha,0)\in C_0\}$ and $A_{j+1}=\Psi(A_j)$ for $0\le j\le n$. These form a decreasing finite sequence. By induction, $A_j\times\{j\}\subseteq C_0$: the base is the definition, and at the next stage $A_{j+1}\subseteq\Phi(A_j)$ puts its points on height $j+1$ in $\overline{A_j\times\{j\}}\subseteq C_0$ by F3 and closedness. Since $C_0\subseteq U_n$ has no point on height $n+1$, this proves $A_{n+1}=\varnothing$. Consequently $A_0=\bigcup_{j=0}^n(A_j\setminus A_{j+1})$. Each piece is separated by step 1.2, giving exactly the claimed finite decomposition. For $n=0$ there is one piece, $A_0\setminus A_1=A_0$. [step 1.2, F3]

3.1 If closed $C_n\subseteq U_n$ covered $L_0$, their bottom traces would cover $\kappa$. Apply step 2.1 to each $C_n$. Enumerating the pairs $(n,j)$ with $j\le n$ by successive finite rows turns those traces into a countable covering by separated sets, contrary to step 1.1. Therefore every such closed sequence misses some bottom point. If $X$ were countably paracompact, F4 applied to the increasing open cover from F3 would supply closed $C_n\subseteq U_n$ whose interiors cover $X$, hence whose sets cover $L_0$. This is impossible. All claimed failures follow. QED. [step 1.1, step 2.1, F3, F4]
