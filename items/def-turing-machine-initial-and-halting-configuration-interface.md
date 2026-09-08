---
id: def-turing-machine-initial-and-halting-configuration-interface
kind: definition
title: "Initial tapes and machine-relative halting configurations"
status: draft
origin: pipeline
deps: [def-computation-alphabet-and-word-convention, def-function, def-the-set-of-functions-from-one-set-to-another, def-natural-numbers, def-finite-cardinality, thm-subset-of-a-finite-set, def-cartesian-product, def-axiom-schema-of-separation]
justified_by: []
landmark: false
verification:
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
    - title: "John E. Savage, Models of Computation, §5.1"
      url: https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 12, §12.1"
      url: https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.12.pdf
    - title: "Michael Sipser, MIT 18.404J (2020), Lecture 5, slides 8–10"
      url: https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/18c8cd00b14d48dc5865f3bdc41abd76_MIT18_404f20_lec5.pdf
---

## Definition

A **raw Turing-machine tuple** is
$$M=(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\delta),$$
where $Q,\Sigma,\Gamma$ are finite sets, $\sqcup\in\Gamma$ is the blank symbol, $\Sigma\subseteq\Gamma\setminus\{\sqcup\}$, the three designated states $q_0,q_{\mathrm{acc}},q_{\mathrm{rej}}\in Q$ are pairwise distinct, and
$$\delta:(Q\setminus\{q_{\mathrm{acc}},q_{\mathrm{rej}}\})\times\Gamma\longrightarrow Q\times\Gamma\times\{\mathsf L,\mathsf R\}$$
is a total function. The direction tags $\mathsf L,\mathsf R$ are distinct. There are no transition entries at halting states.

A **tape** for this tuple is a function $t:\mathbb N\to\Gamma$ with finite support
$$\operatorname{supp}(t)=\{i\in\mathbb N:t(i)\ne\sqcup\}.$$
Write $\mathcal T_M$ for the set of these tapes. A **configuration** is a triple $C=(q,h,t)\in Q\times\mathbb N\times\mathcal T_M$. The tape has cells $0,1,2,\ldots$. The left-boundary convention leaves a left-moving head at zero when it is already at zero; at a positive cell it moves to its predecessor. Right movement increases the cell number by one. No permanent end marker is imposed.

For an input word $w:m\to\Sigma$ in the convention of [[def-computation-alphabet-and-word-convention]], define
$$t_w(i)=\begin{cases}w(i),&i<m,\\\sqcup,&i\ge m,\end{cases}\qquad I_M(w)=(q_0,0,t_w).$$
Thus the initial head scans the first input cell for nonempty input, and cell zero for empty input. In both cases it is a valid tape coordinate.

Relative to $M$, a configuration $(q,h,t)$ is **accepting** iff $q=q_{\mathrm{acc}}$, **rejecting** iff $q=q_{\mathrm{rej}}$, and **halting** iff $q\in\{q_{\mathrm{acc}},q_{\mathrm{rej}}\}$. It is **nonhalting** otherwise. These are predicates on configurations, not claims that configurations are reachable. The initial configuration is always nonhalting.

## Facts & Assumptions

**Given:** The raw tuple $M$ above, with blank excluded from $\Sigma$ and three pairwise distinct designated states. Work in ZF without choice.

[F1] A function on a domain has exactly one value there and takes values in its specified codomain ([[def-function]]); all functions $A\to B$ form the set $B^A$ ([[def-the-set-of-functions-from-one-set-to-another]]).

[F2] A word of length $m$ is a function $m\to\Sigma$; the empty word has domain zero ([[def-computation-alphabet-and-word-convention]]).

[F3] Naturals contain zero and each natural $m$ is the finite initial segment of its predecessors ([[def-natural-numbers]]); its cardinality is $m$ ([[def-finite-cardinality]]).

[F4] Every subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[F5] Cartesian products are sets of the specified ordered pairs ([[def-cartesian-product]]); Separation forms the subset of an ambient set satisfying a formula with fixed parameters ([[def-axiom-schema-of-separation]]).

## Verification

1.1 The ambient tape functions form the set $\Gamma^{\mathbb N}$. For any such $t$, its support is the subset of $\mathbb N$ satisfying $t(i)\ne\sqcup$; Separation forms this set. Separating those functions whose supports are finite forms $\mathcal T_M\subseteq\Gamma^{\mathbb N}$. Taking the product gives the configuration set $Q\times\mathbb N\times\mathcal T_M$. Each separating formula uses the fixed tuple as parameters and does not mention the resulting set as a free variable. [F1, F5]

1.2 Fix $w:m\to\Sigma$. For each $i\in\mathbb N$, exactly one of $i<m$ and $i\ge m$ holds. In the first case $w(i)$ exists uniquely and belongs to $\Sigma\subseteq\Gamma$; in the second the assigned blank belongs to $\Gamma$. Thus the graph of the displayed prescription, separated inside $\mathbb N\times\Gamma$, defines a unique total $t_w:\mathbb N\to\Gamma$. [F1, F2, F5, given]

2.1 If $i<m$, blank exclusion gives $t_w(i)=w(i)\ne\sqcup$, so $i\in\operatorname{supp}(t_w)$. Conversely $i\in\operatorname{supp}(t_w)$ rules out $i\ge m$, since that clause would give $t_w(i)=\sqcup$; hence $i<m$. Therefore $\operatorname{supp}(t_w)=m$, which is finite with cardinality $m$. In particular any subset of the occupied cells is finite. Thus $t_w\in\mathcal T_M$. [step 1.2, F3, F4, given]

2.2 If one configuration were both accepting and rejecting, its state would satisfy $q=q_{\mathrm{acc}}=q_{\mathrm{rej}}$, contrary to their distinctness. Conversely every state equal to $q_{\mathrm{acc}}$ satisfies the accepting predicate and cannot satisfy the rejecting one, and every state equal to $q_{\mathrm{rej}}$ satisfies the rejecting predicate and cannot satisfy the accepting one. Membership in the displayed two-element set is equivalent in both directions to one of these equalities, so the halting configurations are precisely the union of these two disjoint classes. Each class is a subset of the configuration set given by its state equality. [step 1.1, F5, given]

3.1 For $m=0$, there are no indices $i<m$, so $t_w(i)=\sqcup$ everywhere and the support is empty. For $m=1$, its value at zero is $w(0)\ne\sqcup$ and all cells $i\ge1$ are blank, so its support is $\{0\}$. In general the last occupied cell is $m-1$ when $m>0$, and cell $m$ is blank. Since $q_0\in Q$ and $0\in\mathbb N$, $I_M(w)$ is a configuration for every input, including both these cases. If $\Sigma=\varnothing$ only the length-zero case occurs. [step 1.2, step 2.1, F2, F3, given]

4.1 The state of $I_M(w)$ is $q_0$, distinct from both halting states. It therefore satisfies neither halting equality and is nonhalting, for every $w$. The left endpoint zero remains a natural coordinate under the clamped convention. Neither this endpoint rule nor the boundary predicates assert that any transition has occurred. Empty $Q$ or one-state $Q$ cannot satisfy the tuple hypotheses; the tape alphabet can be just $\{\sqcup\}$ when the input alphabet is empty. Thus the construction and all boundary assertions require no extra nonempty selection or computational assumption. [step 3.1, step 2.2, F3, given] ∎

## Source conventions

[Savage, §5.1, Definition 5.1.1, pp. 210–211](https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf) supplies a single-ended tape with left-adjusted input, but uses a single accepting halt and abnormal termination at the left edge. [Watrous, Lecture 12 §12.1, Definition 12.1 and configuration discussion, pp. 120–124](https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.12.pdf) supplies a transition domain excluding two halting states, but uses a two-sided tape and starts the head on the blank preceding the input; his definition only requires the two halting states to be distinct. [Sipser, MIT Lecture 5, slides 8–10](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/18c8cd00b14d48dc5865f3bdc41abd76_MIT18_404f20_lec5.pdf) uses a right-infinite tape and two designated outcomes, with syntactic transition entries on all states. The precise tuple, pairwise distinct start state, head-at-zero rule, and clamped boundary above are the conventions fixed here. No equivalence between these variants or theorem about runs is assumed.
