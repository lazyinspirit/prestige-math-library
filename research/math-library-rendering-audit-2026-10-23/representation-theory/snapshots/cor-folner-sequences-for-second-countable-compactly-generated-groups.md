---
id: cor-folner-sequences-for-second-countable-compactly-generated-groups
kind: corollary
title: Folner sequences for second countable compactly generated groups
status: published
origin: pipeline
dependency_level: 8
proof_strategy: direct
deps:
  - thm-folner-criterion-for-locally-compact-groups
  - def-amenable-locally-compact-group
  - def-left-folner-net-for-a-locally-compact-group
  - def-left-haar-integral-and-left-haar-measure
  - def-locally-compact-space
  - def-hausdorff-space
  - def-compact-space
  - lem-compactness-of-a-subspace-is-ambient
  - def-topological-group
  - thm-finite-products-of-compact-spaces
  - thm-compactness-under-continuous-maps
  - def-axiom-of-choice
  - def-countable-choice
axiom_use: >-
  Assume AC. It is inherited through the Folner criterion, and it supplies
  ACω for the countable selection of the sequence (F_n) from the nonempty
  witness families. The exhaustion and limit arguments use only finite choice
  and ZF algebra.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, Remark G.5.3 (printed p. 469): for compactly generated G, amenability is equivalent to the existence of a Følner sequence; the compact exhaustion used here is the argument in the proof of Proposition F.1.7 (printed pp. 424-425). Both passages were read in the complete author-hosted PDF."
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 19: Reiter's Property and the Folner Condition (University of Sydney Honours lecture notes, 9 October 2012)"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture19_2012_Reiter.pdf"
      locator: "Theorem (Folner, Greenleaf), PDF p. 3: G admits an invariant mean if and only if G satisfies the Folner Condition; closing remark, PDF p. 17: it is enough to consider compact sets containing e"
verification:
  audited: "2026-10-08"
---

## Statement

Assume AC. Let $G$ be an amenable second countable compactly generated locally compact Hausdorff group ([[def-amenable-locally-compact-group]], [[def-locally-compact-space]], [[def-hausdorff-space]]) with fixed left Haar measure $\mu$ ([[def-left-haar-integral-and-left-haar-measure]]), and let $S\subseteq G$ be a compact generating set ([[def-compact-space]], [[def-topological-group]]) with $S=S^{-1}$ containing $e$ and a nonempty open set. Then there is a sequence $(F_n)_{n\ge0}$ of Borel sets with $0<\mu(F_n)<\infty$ such that for every compact $Q\subseteq G$
$$\lim_{n\to\infty}\Delta_Q(F_n)=0,\qquad\Delta_Q(F):=\sup\bigl(\{0\}\cup\{\mu(xF\mathbin\triangle F)/\mu(F):x\in Q\}\bigr).$$
Thus $\Delta_\varnothing(F)=0$.
Such a sequence is a **Følner sequence** for $G$. Conversely, a locally compact Hausdorff group with such a sequence satisfies the left Følner condition ([[def-left-folner-net-for-a-locally-compact-group]]) and hence is amenable, so for such a group amenability is equivalent to the existence of a Følner sequence. Only compact generation, not second countability, is used by the construction.

## Facts & Assumptions

**Given:** AC; a locally compact Hausdorff group $G$ with fixed left Haar measure $\mu$; the amenability of $G$; a compact generating set $S\subseteq G$ with $S=S^{-1}$ containing $e$ and a nonempty open set $U\subseteq S$, with $G=\bigcup_{n\ge1}S^n$.

[A1] AC implies AC$_\omega$: for a sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets one applies AC to the family $\{X_n:n\in\mathbb N\}$ and evaluates the resulting selector at each $X_n$ ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] Under AC, $G$ is amenable, meaning that there is a left-invariant mean $m$ on $L^\infty(G)$ ([[def-amenable-locally-compact-group]]), if and only if $G$ satisfies the left Følner condition: for every compact $Q\subseteq G$ and every $\varepsilon>0$ there is a Borel set $F\subseteq G$ with $0<\mu(F)<\infty$ and $\Delta_Q(F)\le\varepsilon$ ([[thm-folner-criterion-for-locally-compact-groups]]).

[F2] For a Borel set $F\subseteq G$ with $0<\mu(F)<\infty$ and compact $Q\subseteq G$ one has $\Delta_Q(F)=\sup(\{0\}\cup\{\mu(xF\mathbin\triangle F)/\mu(F):x\in Q\})$, so in particular $\Delta_\varnothing(F)=0$ ([[def-left-folner-net-for-a-locally-compact-group]]).

[F3] Multiplication $(x,y)\mapsto xy$ and inversion $x\mapsto x^{-1}$ are continuous on $G$; finite products of compact spaces are compact; and continuous images of compact sets are compact ([[def-topological-group]], [[thm-finite-products-of-compact-spaces]], [[thm-compactness-under-continuous-maps]]).

[F4] Every ambient open cover of a compact subspace has a finite subcover ([[lem-compactness-of-a-subspace-is-ambient]]).

## Proof

**Given:** AC; a locally compact Hausdorff group $G$ with fixed left Haar measure $\mu$; the amenability of $G$; a compact generating set $S=S^{-1}\ni e$ containing the nonempty open set $U\subseteq S$, with $G=\bigcup_{n\ge1}S^n$.

**Proof technique:** direct.

1.1 For $n\ge1$ put $K_n:=S^n=\{s_1\cdots s_n:s_1,\dots,s_n\in S\}$. The map $(s_1,\dots,s_n)\mapsto s_1\cdots s_n$ is continuous from the finite product $S\times\cdots\times S$, which is compact, onto $K_n$, so $K_n$ is compact; and $K_n\subseteq K_{n+1}$ because $e\in S$. [F3, given]

1.2 For the reverse implication suppose that $(F_n)_{n\ge0}$ is a sequence of Borel sets with $0<\mu(F_n)<\infty$ for which $\Delta_Q(F_n)$ tends to $0$ for every compact $Q\subseteq G$. Given a compact $Q$ and $\varepsilon>0$, the convergence to $0$ gives $n_1$ with $\Delta_Q(F_n)\le\varepsilon$ for every $n\ge n_1$; then $F:=F_{n_1}$ is Borel with $0<\mu(F)<\infty$ and $\Delta_Q(F)\le\varepsilon$ by [F2]. Thus $G$ satisfies the left Følner condition, and [F1] makes $G$ amenable. [F1, F2, algebra]

2.1 Put $W:=U\cdot U^{-1}$. Then $W$ is open, being a union of translates of the open set $U\subseteq S$; $e\in W$ because $e=u\cdot u^{-1}$ for any $u\in U$; and $W\subseteq S\cdot S^{-1}=S^2$ because $U\subseteq S=S^{-1}$. For $y\in S^m$ the translate $yW$ is open and contains $y=ye$, while $yW\subseteq S^mS^2=S^{m+2}$; hence $S^m\subseteq\operatorname{int}(S^{m+2})$ for every $m\ge1$. Therefore the open sets $\operatorname{int}(K_{2n})=\operatorname{int}(S^{2n})$ increase, and they cover $G$: for $x\in S^m$ padding with $e\in S$ gives $x\in S^{2m}\subseteq\operatorname{int}(S^{2m+2})=\operatorname{int}(K_{2m+2})$, so $x$ lies in the member of index $m+1$. If $Q=\varnothing$, take $n_0=1$. Otherwise [F4] gives a finite subcover of the compact $Q\subseteq G$ by these ambient open sets; taking the largest index gives $n_0$ with $Q\subseteq\operatorname{int}(K_{2n_0})\subseteq K_{2n_0}$, and step 1.1 gives $Q\subseteq K_n$ for all $n\ge2n_0$. [F3, F4, step 1.1, given, construct]

2.2 For each $n\ge0$, [F1] applied to the compact set $K_{n+1}$ with tolerance $1/(n+1)$ produces a Borel set $F$ with $0<\mu(F)<\infty$ and $\Delta_{K_{n+1}}(F)\le1/(n+1)$, so the family of all such witnesses is nonempty; by [A1] choose a sequence $(F_n)_{n\ge0}$ in which $F_n$ is a witness for $K_{n+1}$ at tolerance $1/(n+1)$, so each $F_n$ is Borel with $0<\mu(F_n)<\infty$ and $\Delta_{K_{n+1}}(F_n)\le1/(n+1)$. [A1, F1, F2, step 1.1, choose]

3.1 Let $Q\subseteq G$ be compact and choose $m$ as in step 2.1, so $Q\subseteq K_r$ for all $r\ge2m$. For every $n\ge2m-1$, one has $Q\subseteq K_{n+1}$, so the family defining $\Delta_Q(F_n)$ is contained in the family defining $\Delta_{K_{n+1}}(F_n)$, hence $0\le\Delta_Q(F_n)\le\Delta_{K_{n+1}}(F_n)\le1/(n+1)$ by step 2.2. This also covers $Q=\varnothing$ because both families include $0$. Thus $\Delta_Q(F_n)\to0$ and $(F_n)$ is a Følner sequence. [F2, step 2.1, step 2.2, algebra]

4.1 Steps 1.1, 2.1, 2.2, and 3.1 produce a Følner sequence for an amenable $G$ from the compact sets $S^n$ and their open exhaustion of $G$, and step 1.2 reverses the implication, giving the stated equivalence; the construction never uses second countability, and the stated AC is spent only through the criterion in [F1] and the countable selection in [A1]. [A1, F1, step 3.1, step 1.2] ∎
