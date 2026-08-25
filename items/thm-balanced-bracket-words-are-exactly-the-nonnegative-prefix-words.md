---
id: thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words
kind: theorem
title: "$\\mathcal{B}_n$ is exactly the set of words of length $2n$ over $\\{\\texttt{(},\\texttt{)}\\}$ in which every prefix has at least as many $\\texttt{(}$ as $\\texttt{)}$ and the totals are equal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-balanced-bracket-word, def-dyck-path-and-semilength, lem-first-return-decomposition-of-a-nonempty-dyck-path, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, lem-lattice-paths-are-determined-by-their-step-words, thm-strong-induction, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

For a word $w$ over $\Sigma=\{\texttt{(},\texttt{)}\}$ and $r\le\lvert w\rvert$
let $d_w(r)$ be the number of letters $\texttt{(}$ among the first $r$ letters of
$w$ minus the number of letters $\texttt{)}$ among them. Call $w$ a **nonnegative
prefix word** when $d_w(r)\ge0$ for every $r\le\lvert w\rvert$ and
$d_w(\lvert w\rvert)=0$.

For every $n\in\mathbb{N}$,

$$\mathcal{B}_n = \{\, w\in\Sigma^{2n} : w \text{ is a nonnegative prefix word} \,\}$$

([[def-balanced-bracket-word]]). Moreover the alphabet bijection
$\texttt{(}\mapsto U$, $\texttt{)}\mapsto D$ carries $\mathcal{B}_n$ onto the set
of ballot words of length $2n$, hence onto $\mathcal{D}_n$ through step words
([[def-dyck-path-and-semilength]]).

## Facts & Assumptions

**Given:** a natural number $n$, and the sets $\mathcal{B}_m$ of [[def-balanced-bracket-word]].

[F1] $\mathcal{B}$ is the least grammatical subset of $\Sigma^{*}$, so a grammatical $X\subseteq\mathcal{B}$ equals $\mathcal{B}$; every nonempty member of $\mathcal{B}$ is $\texttt{(}u\texttt{)}v$ with $u,v\in\mathcal{B}$; $\mathcal{B}_m$ is the set of members of length $2m$; $\mathcal{B}_0=\{\varepsilon\}$; and $\mathcal{B}_{m+1}$ is the set of words $\texttt{(}u\texttt{)}v$ with $u\in\mathcal{B}_i$ and $v\in\mathcal{B}_{m-i}$ for some $i\le m$ ([[def-balanced-bracket-word]]).

[F2] $\mathcal{D}_m$ corresponds bijectively, through step words, to the ballot words of length $2m$, that is the words over $\{U,D\}$ in which the two letters occur equally often and every prefix has at least as many $U$ as $D$ ([[def-dyck-path-and-semilength]]).

[L1] The map $\Theta$ sending $(i,P,Q)$ with $i\le m$, $P\in\mathcal{D}_i$, $Q\in\mathcal{D}_{m-i}$ to the diagonal path whose step word is $U$, that of $P$, $D$, that of $Q$, is a bijection onto $\mathcal{D}_{m+1}$ ([[lem-first-return-decomposition-of-a-nonempty-dyck-path]]).

[L2] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L3] For a step set $S$, a point $P$ and $\ell\in\mathbb{N}$, the map sending a lattice path to its step word is a bijection $\mathcal{L}_S(P;\ell)\to S^{\ell}$ ([[lem-lattice-paths-are-determined-by-their-step-words]]).

[L4] If a property of naturals holds at $n$ whenever it holds at every $m<n$, then it holds at every natural number ([[thm-strong-induction]]).

[L5] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 The letter map $\lambda$ with $\lambda(\texttt{(})=U$ and $\lambda(\texttt{)})=D$ is a bijection $\Sigma\to\{U,D\}$, with the two-sided inverse $U\mapsto\texttt{(}$, $D\mapsto\texttt{)}$, so composing a word with $\lambda$ is a bijection $\Sigma^{2m}\to\{U,D\}^{2m}$ by [L2]. It carries $d_w$ to the difference between the numbers of $U$ and $D$ letters among the first $r$, so $w$ is a nonnegative prefix word exactly when $\lambda\circ w$ is a ballot word of length $2m$; and by [F2] and [L3] those correspond bijectively to $\mathcal{D}_m$. [F2, L2, L3]

1.2 Every member of $\mathcal{B}$ is a nonnegative prefix word. The set $X$ of members of $\mathcal{B}$ that are is grammatical: $\varepsilon$ qualifies, since $d_{\varepsilon}(0)=0$; and if $u,v\in X$ and $w=\texttt{(}u\texttt{)}v$, then $d_w(0)=0$, $d_w(r)=1+d_u(r-1)\ge1$ for $1\le r\le1+\lvert u\rvert$, $d_w(2+\lvert u\rvert)=1+d_u(\lvert u\rvert)-1=0$, and $d_w(r)=d_v(r-2-\lvert u\rvert)\ge0$ for $2+\lvert u\rvert\le r\le\lvert w\rvert$, the last value being $d_v(\lvert v\rvert)=0$. So $X\subseteq\mathcal{B}$ is grammatical and [F1] gives $X=\mathcal{B}$. [F1]

2.1 Conversely every nonnegative prefix word of length $2m$ lies in $\mathcal{B}_m$, by [L4] on $m$. At $m=0$ the word is $\varepsilon$, which lies in $\mathcal{B}_0$ by [F1]. Let $m=p+1$ and assume the claim at every index below $m$. Let $w\in\Sigma^{2m}$ be a nonnegative prefix word. By step 1.1 the word $\lambda\circ w$ is the step word of a path in $\mathcal{D}_{p+1}$, so [L1] writes that path as $\Theta(i,P,Q)$ with $i\le p$, $P\in\mathcal{D}_i$ and $Q\in\mathcal{D}_{p-i}$; applying the inverse letter map to the three blocks writes $w=\texttt{(}u\texttt{)}z$ with $u$ of length $2i$ and $z$ of length $2(p-i)$, both nonnegative prefix words by step 1.1 read backwards. Since $i<m$ and $p-i<m$, the inductive hypothesis puts $u\in\mathcal{B}_i$ and $z\in\mathcal{B}_{p-i}$, so $w\in\mathcal{B}_{m}$ by [F1]. [F1, L1, L4, step 1.1]

3.1 Steps 1.2 and 2.1 are the two inclusions, so the displayed equality holds for every $n$. Combining it with step 1.1 gives the second assertion, and [L5] transports cardinalities along it. [L5, step 1.2, step 2.1] ∎

## Remarks

- **What the theorem buys.** The grammar is the definition, so this is the
  statement that the left-to-right condition a reader would have written down is
  the same notion. Without it the counting arguments would have to be run twice,
  once for each description, and the two would never be known to agree.

- **Where the first-return lemma enters.** Only in the harder inclusion, and only
  to produce the factorisation the grammar needs. The lemma is a statement about
  paths, and the alphabet bijection of step 1.1 is what makes it applicable to
  words; the transport is stated as a bijection rather than left as an
  identification.
