---
id: def-epsilon-nfa-word-transition
kind: definition
title: "Epsilon-NFAs, finite epsilon closure, and extended word transition"
status: published
origin: pipeline
deps: [def-computation-alphabet-and-word-convention, def-power-set, def-indexed-union-and-intersection, def-finite-cardinality, thm-subset-of-a-finite-set, thm-recursion, thm-induction-principle, def-language-over-an-alphabet, def-cartesian-product, def-axiom-schema-of-separation]
justified_by: []
landmark: false
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Jean Gallier, Introduction to the Theory of Computation (2018), §§3.3–3.5"
      url: https://www.cis.upenn.edu/~jean/tcbook.pdf
    - title: "Alfred Aho, COMS W3261 Lecture 3, §§1–2"
      url: https://www.cs.columbia.edu/~aho/cs3261/Lectures/L3-Regular_Expressions.html
---

## Definition

An **epsilon-NFA** is a tuple $N=(Q,\Sigma,\delta,q_0,F)$ with finite $Q$, $q_0\in Q$, $F\subseteq Q$, a finite alphabet $\Sigma$, and a total map
$$\delta:Q\times(\Sigma\sqcup\{\varepsilon\})\longrightarrow\mathcal P(Q).$$
Here the disjoint union tags letters and the empty-input label separately; $\varepsilon$ on an edge consumes no letter. Missing arrows in a diagram mean empty transition sets. Words and concatenation have the convention of [[def-computation-alphabet-and-word-convention]].

For $S\subseteq Q$, put $n=|Q|$ and define
$$C_0(S)=S,\qquad C_{k+1}(S)=C_k(S)\cup\bigcup_{q\in C_k(S)}\delta(q,\varepsilon),\qquad E(S)=C_n(S).$$
Write $\operatorname{ECl}(S)=E(S)$ and $\operatorname{ECl}(q)=E(\{q\})$. A subset $T$ is **epsilon-closed** when $\delta(q,\varepsilon)\subseteq T$ for every $q\in T$. The construction below shows that $E(S)$ is the least epsilon-closed superset of $S$.

The **extended word transition** is the unique function $\widehat\delta:\mathcal P(Q)\times\Sigma^*\to\mathcal P(Q)$ satisfying
$$\widehat\delta(S,\varepsilon)=E(S),\qquad \widehat\delta(S,ua)=E\left(\bigcup_{q\in\widehat\delta(S,u)}\delta(q,a)\right).$$
Abbreviate $\widehat\delta(q,w)=\widehat\delta(\{q\},w)$. A finite path of length $\ell$ is a sequence $x_0,\ldots,x_\ell$ of states together with labels $b_0,\ldots,b_{\ell-1}$ such that $x_{j+1}\in\delta(x_j,b_j)$. Its spelling is the word obtained by erasing the epsilon labels. Length-zero paths are allowed. The set $\widehat\delta(S,w)$ consists exactly of endpoints of such paths starting in $S$ with spelling $w$.

The closure is extensive, monotone, idempotent, preserves every set-indexed union of subsets of $Q$, and satisfies $E(\varnothing)=\varnothing$. A word is **accepted** when $\widehat\delta(q_0,w)\cap F\ne\varnothing$, and
$$L(N)=\{w\in\Sigma^*: \widehat\delta(q_0,w)\cap F\ne\varnothing\}.$$

## Facts & Assumptions

**Given:** The tuple above, $S\subseteq Q$, and $n=|Q|$. All constructions use ZF; no choice axiom is assumed.

[F1] Power sets contain precisely the subsets of their argument, and indexed unions have the existential membership rule ([[def-power-set]], [[def-indexed-union-and-intersection]]).

[F2] A subset of a finite set is finite, its cardinality is no larger, and equality occurs exactly for the whole set ([[thm-subset-of-a-finite-set]]). Cardinalities are natural numbers ([[def-finite-cardinality]]).

[F3] A self-map of a set, with a specified initial element, has a unique natural-number iterate sequence ([[thm-recursion]]).

[F4] A property true at zero and preserved by successor holds at every natural number ([[thm-induction-principle]]).

[F5] Words are functions $w:r\to\Sigma$, including the unique empty word, and $\Sigma^*$ is a set ([[def-computation-alphabet-and-word-convention]]).

[F6] A language over $\Sigma$ is a subset of $\Sigma^*$ ([[def-language-over-an-alphabet]]).

[F7] Cartesian products are sets of the specified ordered pairs ([[def-cartesian-product]]); Separation forms the subset of an ambient set satisfying a formula with fixed parameters ([[def-axiom-schema-of-separation]]).

## Verification

1.1 For $T\subseteq Q$, the union of the sets $\delta(q,\varepsilon)$ with $q\in T$ is a subset of $Q$. Thus $H(T)=T\cup\bigcup_{q\in T}\delta(q,\varepsilon)$ is a self-map of $\mathcal P(Q)$. Applying natural-number recursion with initial element $S$ gives the unique sequence $C_k(S)$, with $C_k(S)\subseteq C_{k+1}(S)\subseteq Q$. [F1, F3]

2.1 If $C_j=C_{j+1}$, applying $H$ repeatedly gives $C_{j+r}=C_j$ for every natural $r$: the case $r=0$ is equality and the successor follows from $H(C_j)=C_j$. If $C_n\ne C_{n+1}$, therefore all inclusions from $C_0$ through $C_{n+1}$ are strict. Each raises natural cardinality by at least one, by the finite-subset equality criterion. Starting at $|C_0|\ge0$, induction gives $|C_{n+1}|\ge n+1$, contradicting $C_{n+1}\subseteq Q$ and $|Q|=n$. Hence $C_n=C_{n+1}$ and all subsequent stages equal $E(S)$. [step 1.1, F2, F4]

3.1 The equality $H(E(S))=E(S)$ says precisely that $E(S)$ is epsilon-closed, and $S=C_0\subseteq E(S)$. If $S\subseteq T$ and $T$ is epsilon-closed, then $C_0\subseteq T$; from $C_k\subseteq T$, every successor of a state in $C_k$ is in $T$, so $C_{k+1}\subseteq T$. Induction gives $E(S)\subseteq T$. This proves leastness and extensivity. [step 1.1, step 2.1, F4]

3.2 For every $k$, $C_k(S)$ is exactly the set of endpoints of epsilon paths from $S$ with at most $k$ edges. At $k=0$ both sets are $S$. An endpoint in $C_{k+1}$ either already lies in $C_k$, or follows one epsilon edge from a state in $C_k$; retaining or appending that edge gives a path of length at most $k+1$. Conversely a path of length at most $k+1$ either has length zero, or deleting its last edge leaves a path of length at most $k$, whose endpoint belongs to $C_k$; its last endpoint lies in $C_{k+1}$. These implications give the successor equivalence and induction proves the claim. Stabilization then implies that $E(S)$ is exactly the endpoints of all finite epsilon paths: paths of length at most $n$ give $C_n$, while longer paths give a stage equal to $C_n$. [step 1.1, step 2.1, F4]

4.1 If $S\subseteq T$, the closed set $E(T)$ contains $S$, so leastness gives $E(S)\subseteq E(T)$. Because $E(S)$ is already closed, leastness gives $E(E(S))\subseteq E(S)$ and extensivity gives the reverse inclusion. For any family $(S_i)_{i\in I}$, a path starts in $\bigcup_iS_i$ exactly when its starting state belongs to some $S_i$. Applying the endpoint equivalence gives $E(\bigcup_iS_i)=\bigcup_iE(S_i)$ in both directions. For $I=\varnothing$ neither side has a path starting point, so $E(\varnothing)=\varnothing$. [step 3.1, step 3.2, F1]

4.2 Fix $w:r\to\Sigma$. On $\mathbb N\times\mathcal P(Q)$ define $J_w(i,T)=(i+1,E(\bigcup_{q\in T}\delta(q,w(i))))$ if $i<r$, and $J_w(i,T)=(i,T)$ if $i\ge r$. In the first clause $w(i)$ exists; in both clauses the value lies in the product. Recursion starting at $(0,E(S))$ gives a unique sequence. For $k\le r$ its value is $(k,T_k)$, as follows by induction from its first clause. In particular $T_0=E(S)$ and $T_{k+1}=E(\bigcup_{q\in T_k}\delta(q,w(k)))$ for $k<r$. Define $\widehat\delta(S,w)=T_r$. The graph is the subset of $(\mathcal P(Q)\times\Sigma^*)\times\mathcal P(Q)$ consisting of the triples satisfying this finite-sequence prescription, so Separation gives a set function; existence and uniqueness of the sequence give exactly one output for each input. Here the ambient products are sets; the finite-sequence condition is a set-theoretic formula with parameters $S,w,\delta$. [step 1.1, step 3.1, F1, F3, F4, F5, F7]

5.1 If two words agree at positions below $m$, their sequences for the same $S$ agree through stage $m$: the initial sets agree, and equality at stage $k<m$ gives equal unions with the same letter, hence equal next closures. Induction proves this prefix compatibility. Taking the words $u$ and $ua$ proves the displayed successor equation, while $r=0$ proves the empty-word equation. Any other function satisfying those equations agrees at the empty word and, if it agrees at $u$, agrees at $ua$ by substitution. Every nonempty word has this last-letter decomposition, so induction on length proves uniqueness on all words. [step 4.2, F4, F5]

6.1 For spelling $\varepsilon$, the endpoint assertion is the epsilon-path assertion. Suppose the assertion holds for $u$ and consider $ua$. A path spelling $ua$ has a last non-epsilon edge: its label is $a$, its preceding path spells $u$, and its following path has only epsilon labels. The preceding endpoint is in $\widehat\delta(S,u)$, so the last edge lands in $\bigcup_{q\in\widehat\delta(S,u)}\delta(q,a)$ and its epsilon suffix lands in the closure of that union. Conversely a state in this closure has an epsilon path from some $v\in\delta(q,a)$ with $q\in\widehat\delta(S,u)$. The induction hypothesis supplies a path spelling $u$ to $q$; concatenating this path, the edge to $v$, and that epsilon path gives spelling $ua$. Only witnesses for this one membership are used. Induction proves both directions for all words. [step 3.2, step 5.1, F1, F4]

7.1 Consequently the acceptance predicate holds exactly when a finite path from $q_0$ spelling $w$ ends in $F$. Its defining set is a subset of $\Sigma^*$, hence a language. Empty $S$ has no path starts, so $\widehat\delta(\varnothing,w)=\varnothing$ for every word; empty $F$ accepts no word. If $\Sigma=\varnothing$ the only word is $\varepsilon$, already treated. A one-state $Q$ and epsilon self-loops satisfy the same stabilization argument; $Q=\varnothing$ is excluded by $q_0\in Q$. Thus the definitions and all asserted properties are well-defined in the boundary cases as well. [step 4.1, step 5.1, step 6.1, F5, F6, F7] ∎

## Source conventions

[Gallier, §§3.3–3.5, Definitions 3.5–3.7, pp. 28–33](https://www.cis.upenn.edu/~jean/tcbook.pdf) supplies the NFA convention and saturation route; [Aho, Lecture 3 §§1–2](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L3-Regular_Expressions.html) gives the corresponding set closure. The existence, uniqueness, closure laws, and path equivalence used here are derived above. The tagged epsilon label avoids any set-theoretic collision with letters.
