---
id: "lem-short-loop-relators-give-a-finite-dehn-presentation"
kind: "lemma"
title: "Short loop relators give a finite dehn presentation"
deps: ["def-hg-toolkit-hyperbolic-group-and-stable-length", "lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics", "def-group-presentation", "thm-reduced-words-form-the-free-group", "lem-word-length-is-well-defined-and-satisfies-the-length-laws"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Druţu–Kapovich §9.13, Theorem 9.108, Proposition 9.109 and Lemma 9.112 pp.246–249"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Under the standing hyperbolic-group convention, choose an integer $\Delta\ge\max\{3,2\delta\}$. Over the finite formal alphabet $S\sqcup S^{-1}$ let $\mathcal R$ be all words of length at most $10\Delta$ evaluating to the identity in $G$. Then $G=\langle S\mid\mathcal R\rangle$. Every nonempty freely reduced null word has a **based** contiguous subword $u$ and a strictly shorter replacement $v$ such that $uv^{-1}\in\mathcal R$. Thus $u$ is more than half of this relator spelling. The same conclusion holds for cyclic words, allowing a subword to cross the chosen basepoint. A cyclic algorithm may freely cyclically reduce between replacements; this does not change nullity.

Here relator spellings need not be freely reduced: in the presentation each spelling denotes its free-group element. This convention retains all short null words, even when generators coincide with inverses or evaluate to the identity.

## Facts & Assumptions

**Given:** The finite generating set and $\delta$-slim geometric Cayley realization of [[def-hg-toolkit-hyperbolic-group-and-stable-length]].

[F1] A $6\delta$-local geodesic is $(3,4\delta)$-quasi-geodesic when $\delta>0$, and a positive-locality geodesic is globally geodesic when $\delta=0$, by [[lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics]].

[F2] Word length is attained and subadditive by [[lem-word-length-is-well-defined-and-satisfies-the-length-laws]].

[F3] The reduced-word free group has the extension-and-uniqueness property by [[thm-reduced-words-form-the-free-group]]. A presentation is the quotient by the normal closure of its relators by [[def-group-presentation]].

## Proof

1.1 There are finitely many words of length at most $10\Delta$ over the finite formal alphabet: for each integer $j$ there are at most $(2|S|)^j$ length-$j$ words, with one empty word for $j=0$. Thus $\mathcal R$ is finite. It is invariant under inversion and cyclic permutation because inverses and conjugates of the identity evaluate to the identity. The empty generating set is allowed and presents the trivial group. [given, algebra]

1.2 Let $w$ be a nonempty freely reduced null word of length $n$. If $n\le10\Delta$, take $u=w$ and $v$ empty. Otherwise suppose every based contiguous subword of length at most $5\Delta$ is geodesic between its endpoint vertices. Realize $w$ as its length-parametrized edge path on $[0,n]$. For $\delta>0$, bracket a real subinterval of length at most $6\delta$ by its nearest enclosing integer parameters. The resulting word has length at most $6\delta+2\le3\Delta+2\le5\Delta$ and hence is geodesic; its restriction is geodesic too. The whole path is therefore $6\delta$-local. F1 at its coincident endpoints gives $0\ge n/3-4\delta$, or $n\le12\delta\le6\Delta$, contradicting $n>10\Delta$. If $\delta=0$, the same bracketing for intervals of length at most $1$ adds at most two and gives a word of length at most $3\le5\Delta$; F1 then makes the closed path globally geodesic, contradicting $n>0$. [F1, given, algebra]

2.1 Consequently in the long-word case some based subword $u$ of length at most $5\Delta$ is not geodesic. By F2 choose a shortest word $v$ with the same evaluation. Then $|v|<|u|$ and the spelling $r=uv^{-1}$ is null with length $|u|+|v|<2|u|\le10\Delta$. Hence $r\in\mathcal R$ and $|u|>|r|/2$. Replacing $u$ by $v$ in $w=A u B$ strictly reduces length and preserves evaluation. In the short-word case step 1.2 provides exactly the same conclusion using the whole word. [step 1.2, F2, given, algebra]

3.1 By F3, evaluation on generators extends to a homomorphism $\phi:F(S)\to G$, which is surjective since $S$ generates $G$. Let $N$ be the normal closure of the free-group elements represented by $\mathcal R$. Every relator is null, so $N\subseteq\ker\phi$. For the reverse inclusion, freely reduce a null word. If nonempty, step 2.1 replaces $w=A u B$ by $w'=A v B$ and in the free group $w(w')^{-1}=A(uv^{-1})A^{-1}\in N$. Freely reduce $w'$ and repeat. Length is a nonnegative integer and strictly decreases at each replacement, so finite induction ends at the empty word and proves $w\in N$. Thus $N=\ker\phi$. The induced map $F(S)/N\to G$ is well-defined and bijective: equality of images is exactly membership of their quotient in the kernel $N$. It preserves products, giving the claimed presentation. [step 2.1, F3, given, algebra]

4.1 For a cyclic null word, select any basepoint and freely reduce the resulting based word. If nonempty, the based shortening already provides a cyclic shortening. Cyclic cancellation of an initial letter with the inverse terminal letter also preserves nullity, since removing that pair conjugates the represented element. This distinguishes the cyclic procedure from the stronger based assertion: the latter never needed a wrap-around subword. All choices in the argument are finite or single existential witnesses for a specified word; no AC is used. [step 1.1, step 2.1, step 3.1] ∎
