---
id: "lem-finite-weyl-strong-exchange-and-deletion"
kind: "lemma"
title: "Finite Weyl strong exchange and deletion"
deps: ["def-finite-weyl-root-system-lattice-and-chamber-conventions", "lem-finite-weyl-positive-roots-and-simple-reflections"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, \u00a7\u00a721\u201322; local sign-change proofs fill the chamber argument"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
status: "published"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For the simple reflections of a finite reduced crystallographic root system, word length equals inversion length: $\ell(w)=|\operatorname{Inv}(w)|$. If a root reflection $t$ satisfies $\ell(tw)<\ell(w)$, every reduced word for $w$ loses exactly one letter to give $tw$. Every nonreduced word admits deletion of two letters without changing its group element.

More precisely, for $\beta\in\Phi^+$, $\ell(s_\beta w)<\ell(w)$ if and only if $w^{-1}\beta<0$. In this case one letter can be deleted from any word for $w$ to give $s_\beta w$, although the resulting word need not be reduced. Also $\ell(ws_i)=\ell(w)\pm1$, with the minus sign exactly when $w\alpha_i<0$. These are assertions for the geometric reflection group, without an assumed Coxeter presentation or exchange axiom.

## Facts & Assumptions

**Given:** The finite root system, positivity and word conventions.

[F1] These conventions are [[def-finite-weyl-root-system-lattice-and-chamber-conventions]].

[F2] Simple reflections generate $W$ and permute the positive roots other than their own simple root by [[lem-finite-weyl-positive-roots-and-simple-reflections]].

## Proof

1.1 Let $w=s_{i_1}\cdots s_{i_m}$ be any word, and suppose $\beta>0$ but $w^{-1}\beta<0$. Starting with $\beta$, apply $s_{i_1},s_{i_2},\ldots,s_{i_m}$ successively; the resulting final vector is $w^{-1}\beta$. At the first positive-to-negative change, say index $j$, F2 implies $s_{i_{j-1}}\cdots s_{i_1}\beta=\alpha_{i_j}$. With $u=s_{i_1}\cdots s_{i_{j-1}}$ this says $\beta=u\alpha_{i_j}$. The reflection identity $s_\beta=u s_{i_j}u^{-1}$ therefore cancels precisely the $j$th letter in $s_\beta w$. This proves the claimed deletion for every word, including an initially nonreduced one. [F1, F2, given, algebra]

2.1 If $w^{-1}\beta<0$, apply step 1.1 to a reduced word to get $\ell(s_\beta w)\le\ell(w)-1$. If $w^{-1}\beta>0$, put $v=s_\beta w$; then $v^{-1}\beta=-w^{-1}\beta<0$, so the same argument gives $\ell(w)\le\ell(v)-1$. These two cases prove the reflection-descent criterion and strong exchange. Reversing a word proves $\ell(w^{-1})=\ell(w)$. Applying the criterion to $w^{-1}$ and $\beta=\alpha_i$ gives the sign of $\ell(ws_i)-\ell(w)$. Appending or removing a single $s_i$ bounds its absolute value by one, so the difference is exactly $\pm1$. [step 1.1, F1, F2, algebra]

3.1 Write $n(w)=|\operatorname{Inv}(w)|$. Since $s_i$ permutes $\Phi^+\setminus\{\alpha_i\}$, counting those roots first gives $n(ws_i)=n(w)+1$ if $w\alpha_i>0$, and $n(ws_i)=n(w)-1$ if $w\alpha_i<0$. To prove $n(w)=\ell(w)$, induct on reduced word length. The empty word has both numbers zero. If $w=us_i$ is reduced, its prefix $u$ is reduced, since a shorter prefix would shorten $w$. Step 2.1 gives $u\alpha_i>0$, as the negative case would make $\ell(us_i)=\ell(u)-1$. Thus $n(w)=n(u)+1=\ell(u)+1=\ell(w)$. This also proves that an element preserving all positive roots is the identity. [step 2.1, F1, F2, algebra]

4.1 Consider a nonreduced word and its first nonreduced prefix $us_i$, where the given word for $u$ is reduced. Step 2.1 forces $\ell(us_i)=\ell(u)-1$, so $u\alpha_i<0$. Apply step 1.1 to the reversed word for $u^{-1}$ and the positive root $\alpha_i$. It deletes one letter to express $s_i u^{-1}$. Reverse this equality to express $us_i$ by the word for $u$ with that letter deleted. In the original prefix this removes that letter and its terminal $s_i$, hence two letters without changing its value. Reattach the remaining suffix of the original word. All arguments are finite, include rank zero and the identity, and use no AC. [step 1.1, step 2.1, F1, algebra] ∎
