---
id: lem-kac-moody-reduced-words-and-coroot-signs
kind: lemma
title: Reduced words, root signs and finite coroot inversions
status: published
origin: pipeline
deps: [def-kac-moody-real-coroot-inversions, prop-kac-moody-root-spaces-are-finite-dimensional, prop-the-weyl-group-preserves-roots-and-root-multiplicities, def-simple-reflections-and-the-kac-moody-weyl-group, def-contragredient-lie-algebra-before-the-maximal-ideal-quotient, lem-serre-elements-vanish-before-serre-generation]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Lemmas3.3.1–3.3.3 and Proposition3.4.1(i)–(iii), pp42–44,47
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

Every real root and real coroot has exactly one sign. A simple reflection permutes the positive real roots other than its own simple root, and the positive real coroots other than its own simple coroot. If $w\alpha_i<0$, any expression $w=s_{i_1}\cdots s_{i_t}$ yields an expression for $ws_i$ by deleting one of these $t$ factors. Consequently
$$\ell(ws_i)<\ell(w)\quad\Longleftrightarrow\quad w\alpha_i<0\quad\Longleftrightarrow\quad wh_i<0.$$
Every coroot inversion set is finite and $|\operatorname{Inv}(w)|\leq\ell(w)$. These statements hold for every finite GCM, with no assumption that $W$ is finite or that a Coxeter presentation has already been proved.

## Facts & Assumptions

**Given:** A finite GCM, its realization and words in its simple reflections.

[F1] Real roots/coroots, signs, length and inversions, together with the transpose realization and equality of dual word lengths, are defined in [[def-kac-moody-real-coroot-inversions]].

[F2] Roots have one sign, the only roots on the simple line are $\pm\alpha_i$, and their spaces are $\mathbb Ce_i,\mathbb Cf_i$ ([[prop-kac-moody-root-spaces-are-finite-dimensional]]).

[F3] Weyl transformations preserve roots and their multiplicities ([[prop-the-weyl-group-preserves-roots-and-root-multiplicities]]).

[F4] The full reflection formulas on Cartan and its dual are given in [[def-simple-reflections-and-the-kac-moody-weyl-group]].

[F5] The generator relations, including $[e_i,f_j]=\delta_{ij}h_i$, hold by [[def-contragredient-lie-algebra-before-the-maximal-ideal-quotient]].

[F6] Both signs of Serre vanishing hold by [[lem-serre-elements-vanish-before-serre-generation]].

## Proof

1.1 By F2 and F3 all real roots are roots and have one sign. If a positive real root $\beta$ is not $\alpha_i$, F2 implies that some coefficient at $\alpha_j$ with $j\ne i$ is positive. Reflection $s_i$ leaves that coefficient unchanged by F4; its image is a root by F3, so its one-sign property forces it to stay positive. Since $s_i^2=1$ and only $\alpha_i$ maps to $-\alpha_i$, this restriction is a permutation. Apply the identical statements F2 and F3 to the transpose realization of F1 to obtain both conclusions for coroots. Nonzero vectors with independent coordinates cannot have both signs. [F1, F2, F3, F4, given]

1.2 We need lifts with the full Cartan action. For $D=\operatorname{ad}e_i$, F6 bounds powers on $e_j$; F5 gives $Df_j=\delta_{ij}h_i$, $D^2f_i=-2e_i$, $D^3f_i=0$, and $D^2h=0$. The corresponding formulas and F6 bound $\operatorname{ad}f_i$ on all generators. The derivation identity $D^m[x,y]=\sum_k\binom mk[D^kx,D^{m-k}y]$, obtained inductively from the Leibniz rule, propagates these bounds to finite bracket words and sums. Thus their exponentials are pointwise finite Lie automorphisms: that identity proves bracket preservation, and the inverse exponential follows from the finite binomial expansion of $\exp(D)\exp(-D)$. Set $T_i=\exp(\operatorname{ad}f_i)\exp(-\operatorname{ad}e_i)\exp(\operatorname{ad}f_i)$. The relations give successive images of $h_i$ equal to $h_i+2f_i$, $-h_i+2f_i$, and $-h_i$. Each exponential fixes $\ker\alpha_i\subset\mathfrak h$. Splitting $h=(h-\alpha_i(h)h_i/2)+\alpha_i(h)h_i/2$ therefore proves $T_i h=s_i h$. For $x\in\mathfrak g_\beta$, $[h,T_ix]=T_i[s_i h,x]=(s_i\beta)(h)T_ix$, so it has the required root action as well. [F4, F5, F6, given]

2.1 Suppose $v\alpha_i=\alpha_j$ for a Weyl word $v$, and lift that word by the product of automorphisms in 1.2. It maps $[\mathfrak g_{\alpha_i},\mathfrak g_{-\alpha_i}]=\mathbb Ch_i$ onto $[\mathfrak g_{\alpha_j},\mathfrak g_{-\alpha_j}]=\mathbb Ch_j$ by F2 and F5. Since its Cartan action is $v$, write $vh_i=c h_j$, with $c\ne0$. Duality gives $2=\alpha_i(h_i)=(v\alpha_i)(vh_i)=2c$, hence $c=1$. F4 now gives $vs_iv^{-1}(\lambda)=\lambda-\lambda(vh_i)v\alpha_i=s_j\lambda$ on the entire dual Cartan. [F2, F4, F5, step 1.2]

3.1 Suppose $w=s_{i_1}\cdots s_{i_t}$ sends $\alpha_i$ to a negative root. Track suffix images from $\alpha_i>0$ at the right to $w\alpha_i<0$ at the left. At a positive-to-negative transition at position $r$, put $v=s_{i_{r+1}}\cdots s_{i_t}$. By 1.1, $v\alpha_i=\alpha_{i_r}$. Step 2.1 gives $vs_i=s_{i_r}v$, so $ws_i=s_{i_1}\cdots s_{i_{r-1}}s_{i_r}vs_i=s_{i_1}\cdots s_{i_{r-1}}v$, deleting the $r$th factor. This is valid even for a nonreduced input word and even for an empty suffix. [step 1.1, step 2.1]

4.1 Apply 3.1 to a minimal word for $w$. If $w\alpha_i<0$, it gives $\ell(ws_i)\leq\ell(w)-1$. If $w\alpha_i>0$, then $(ws_i)\alpha_i=-w\alpha_i<0$, so the same argument for $ws_i$ gives $\ell(w)<\ell(ws_i)$. These are the only signs by 1.1, proving the first iff. Repeat 1.2–3.1 for the transpose GCM, which has the same word lengths by F1, to get $\ell(ws_i)<\ell(w)$ iff $wh_i<0$. Thus both equivalences hold without any Coxeter presentation. [F1, step 1.1, step 1.2, step 3.1]

5.1 For finiteness, let $w$ have finite inversion set and consider $ws_i$. On positive coroots other than $h_i$, the bijection $\beta\mapsto s_i\beta$ from 1.1 identifies their inversions for $ws_i$ with the inversions of $w$ other than a possible $h_i$. At $h_i$, $(ws_i)h_i=-wh_i$, so its inversion status is the opposite of its status for $w$. Therefore the cardinality changes by exactly $1$ or $-1$, and in particular by at most $1$. Starting with $\operatorname{Inv}(1)=\varnothing$ and inducting along any word proves finiteness and the bound by that word's length; use a minimal word for the stated bound. The empty word and empty simple system give zero inversions; a single reflection has just $h_i$. No infinite choices, root bases or finiteness of $W$ enter. [F1, step 1.1] ∎
