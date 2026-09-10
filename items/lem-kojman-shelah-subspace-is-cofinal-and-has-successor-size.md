---
id: lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size
kind: lemma
title: Cofinality and size of the scale subspace
status: draft
origin: pipeline
deps: [def-kojman-shelah-scale-subspace, lem-scale-tail-suprema-have-prescribed-cofinality, thm-cofinality-basics, def-axiom-of-choice, thm-regularity-of-the-alephs, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-transfinite-recursion]
proof_strategy: construction
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
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 7 section 2, Exercises 2 and 11(c), printed pp. 40–41; explicit cofinal representatives and finite-class size bound supplied here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. For every $b\in\prod_{n\in B}\aleph_n$ there is $h\in X$ with $b<h$ pointwise. Moreover $|X|=\aleph_{\omega+1}$. No assertion that every normalized-scale class meets the Rudin space is required.

## Facts & Assumptions

**Given:** The normalized scale defining $X$. Put $\mu=\aleph_\omega$, $\lambda=\aleph_{\omega+1}$, and $Q=\prod_{n\in B}\aleph_n$.

[F1] The normalized scale $(f_\alpha)_{\alpha<\lambda}$ is strictly increasing and cofinal in the eventual order on $Q$, and $X$ consists of its eventual-equality classes intersected with $X_R(B)$ ([[def-kojman-shelah-scale-subspace]]).

[F2] A strictly pointwise increasing $\omega_1$-sequence of product representatives of strictly increasing scale indices has, on $n>1$, a supremum below each factor of cofinality $\omega_1$, eventually equal to $f_\delta$ for $\delta<\lambda$ ([[lem-scale-tail-suprema-have-prescribed-cofinality]], $m=k=1$).

[F3] Sets of ordinals of size less than a cofinality are bounded in that ordinal ([[thm-cofinality-basics]]).

[F4] Under AC $\omega_1$, $\lambda$, and every finite positive aleph are regular ([[thm-regularity-of-the-alephs]]).

[F5] Injections give cardinal inequalities for well-orderable sets ([[lem-cardinal-arithmetic-basic-laws]], (a)).

[F6] Infinite cardinal sums and nonzero products absorb smaller cardinals ([[cor-cardinal-absorption]]).

[F7] Specified rules recurse on ordinals ([[thm-transfinite-recursion]]).

[A1] AC is assumed for cardinal regularity and for cardinal bounds on unions of the finite-modification classes ([[def-axiom-of-choice]]).

## Proof

1.1 Fix $b\in Q$. Recursively for $\xi<\omega_1$ construct indices $\alpha_\xi<\lambda$ and functions $g_\xi\in Q$. Given the earlier choices, put $t_\xi(n)=\sup(\{b(n)+1\}\cup\{g_\eta(n)+1:\eta<\xi\})$. All entries in this supremum are below $\aleph_n$, since that cardinal is a limit and the earlier functions are in $Q$. The set is countable, so F3–F4 give $t_\xi(n)<\aleph_n$ and $t_\xi\in Q$. The countably many earlier indices are bounded in regular $\lambda$ by F3–F4. By F1 there is an index above them all with $t_\xi<^*f_\alpha$: first obtain eventual domination by cofinality, and if necessary pass to a larger scale index, whose strict eventual increase preserves domination. Choose the least such index $\alpha_\xi$ and set $g_\xi(n)=\max(t_\xi(n),f_{\alpha_\xi}(n))$. It belongs to $Q$, is eventually equal to $f_{\alpha_\xi}$, and is strictly above $b$ and every earlier $g_\eta$ at every coordinate. The exceptional modification set is contained in the finite set where $t_\xi(n)\ge f_{\alpha_\xi}(n)$. These are specified rules with proved witnesses, so F7 constructs them throughout $\omega_1$. The initial stage uses only $b(n)+1$ and has no earlier-index obligation. [F1, F3, F4, F7, A1]

1.2 Fix $\alpha<\lambda$. Every point eventually equal to $f_\alpha$ is determined by a finite exceptional set $S\subseteq B$ and its values in $\prod_{n\in S}(\aleph_n+1)$. There are countably many finite $S$, using their binary codes $\sum_{n\in S}2^n$. For nonempty $S$ let $r=\max S$; each inclusive ordinal factor has cardinality $\aleph_n\le\aleph_r$, since its extra top can be sent to zero, the finite ordinals shifted by one and the other values fixed. F6 bounds the finite product by $\aleph_r<\mu$; for empty $S$ the product has one member. Thus the countable union of these possibilities has size at most $\mu$ by A1 and F6. Every class intersected with $X_R(B)$ has size at most $\mu$, including empty classes. There are $\lambda$ possible indices, so again A1 and F6 give $|X|\le\lambda\cdot\mu=\lambda$. [F1, F5, F6, A1]

2.1 Apply F2 to $(\alpha_\xi,g_\xi)_{\xi<\omega_1}$. The indices strictly increase, the functions are actual members of $Q$, and they strictly increase pointwise by step 1.1. Since $B\subseteq\omega\setminus\{0,1\}$, the tail $n>1$ is all of $B$. F2 gives $h(n)=\sup_{\xi<\omega_1}g_\xi(n)<\aleph_n$, $\operatorname{cf}(h(n))=\omega_1$ at every coordinate, and $h=^*f_\delta$ for some $\delta<\lambda$. Thus $h\in X_R(B)$ with uniform strict bound $\aleph_2$, and F1 gives $h\in X$. Since $g_0>b$ and $h\ge g_0$, also $h>b$. This proves pointwise cofinality and in particular nonemptiness. [step 1.1, F1, F2]

3.1 Every $x\in X$ has a unique scale index $\alpha(x)$. Existence is F1; two different indices would force the same function to be eventually strictly less than itself outside finitely many coordinates, impossible on infinite $B$. Suppose $|X|<\lambda$. By F3–F4 choose $\beta<\lambda$ strictly above all its indices; the empty case is already excluded by step 2.1. Then $x<^*f_\beta$ for every $x\in X$, by F1 and each eventual equality. But step 2.1 applied to $b=f_\beta$ gives $h\in X$ with $f_\beta<h$ pointwise, contradicting $h<^*f_\beta$. Hence $|X|\ge\lambda$ by F5 and A1. [step 2.1, F1, F3, F4, F5, A1]

4.1 The lower bound of step 3.1 and upper bound of step 1.2 give $|X|=\lambda=\aleph_{\omega+1}$. Step 2.1 establishes the asserted strict pointwise cofinality. The argument only used nonempty classes when a constructed point or an already given point provided a member. QED. [step 2.1, step 3.1, step 1.2]
